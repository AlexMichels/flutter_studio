// Interaction smoke test: nav states, mobile menu, FAQ, language toggle,
// Calendly fallback hrefs, no-JS rendering, console errors.
// Usage: node scripts/interaction-test.mjs <outDir> [baseUrl]
import puppeteer from 'puppeteer-core'

const outDir = process.argv[2] ?? 'shots'
const base = process.argv[3] ?? 'http://localhost:4321'
const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
})
const results = []
const ok = (name, cond, extra = '') => results.push(`${cond ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`)

// —— Desktop checks ——
{
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })

  const homeStructure = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    h1: document.querySelectorAll('h1').length,
    sections: [...document.querySelectorAll('main section')].length,
    testSections: document.querySelectorAll('main [data-testid]').length,
  }))
  ok('DE home structure', homeStructure.lang === 'de' && homeStructure.h1 === 1 && homeStructure.sections >= 8 && homeStructure.testSections >= 7, JSON.stringify(homeStructure))

  // Calendly CTAs are real links
  const hrefs = await page.$$eval('[data-calendly]', (as) => as.map((a) => a.href))
  ok('calendly hrefs', hrefs.length >= 3 && hrefs.every((h) => h.startsWith('https://calendly.com/alex-fluttera/erster-austausch')), `${hrefs.length} CTAs`)

  // Language toggle preserves hash
  await page.evaluate(() => (location.hash = '#faq'))
  const enHref = await page.$eval('[data-lang-switch]', (a) => {
    a.addEventListener('click', (e) => e.preventDefault(), { once: true })
    a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    return a.href
  })
  ok('lang toggle hash', enHref.endsWith('/en/#faq'), enHref)

  await page.goto(`${base}/en/`, { waitUntil: 'networkidle0' })
  const enLocale = await page.evaluate(() => ({ lang: document.documentElement.lang, heading: document.querySelector('h1')?.textContent }))
  ok('English locale renders', enLocale.lang === 'en' && enLocale.heading?.includes('Flutter apps for complex products.'))
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })

  // Nav: constant solid white pill — identical at the top and after scrolling
  const pillAtTop = await page.$eval('.nav__pill', (p) => getComputedStyle(p).backgroundColor)
  await page.evaluate(() => {
    const top = document.querySelector('#services').getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + 200, behavior: 'instant' })
  })
  await new Promise((r) => setTimeout(r, 700))
  const pillScrolled = await page.$eval('.nav__pill', (p) => getComputedStyle(p).backgroundColor)
  // Pill is translucent --paper glass; it must not change between states
  ok('nav pill constant on scroll', pillAtTop !== 'rgba(0, 0, 0, 0)' && pillScrolled === pillAtTop, `${pillAtTop} → ${pillScrolled}`)
  await page.screenshot({ path: `${outDir}/it-nav-pill.png` })

  // FAQ answers stay visible as a static card grid.
  await page.evaluate(() => document.querySelector('#faq').scrollIntoView())
  const faqVisible = await page.$$eval('.faq-item__a', (answers) => answers.length === 8 && answers.every((answer) => getComputedStyle(answer).display !== 'none'))
  ok('faq grid visible', faqVisible)
  await page.screenshot({ path: `${outDir}/it-faq-grid.png` })

  ok('no console errors (desktop)', errors.length === 0, errors.slice(0, 3).join(' | '))
  await page.close()
}

// —— Mobile menu ——
{
  const page = await browser.newPage()
  await page.setViewport({ width: 390, height: 844 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  await page.click('[data-menu-toggle]')
  await new Promise((r) => setTimeout(r, 500))
  const open = await page.$eval('[data-nav]', (n) => n.classList.contains('nav--open'))
  const expanded = await page.$eval('[data-menu-toggle]', (b) => b.getAttribute('aria-expanded'))
  ok('mobile menu opens', open && expanded === 'true')
  await page.screenshot({ path: `${outDir}/it-mobile-menu.png` })
  await page.click('.nav__link')
  await new Promise((r) => setTimeout(r, 700))
  const closed = await page.$eval('[data-nav]', (n) => !n.classList.contains('nav--open'))
  const navigation = await page.evaluate(() => ({ scrolled: window.scrollY > 100, hash: location.hash }))
  ok('menu closes + navigates on link', closed && navigation.scrolled && navigation.hash.length > 1, JSON.stringify(navigation))
  await page.close()
}

// —— Legacy legal URLs ——
for (const path of ['/impressum.html', '/datenschutz.html']) {
  const page = await browser.newPage()
  const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle0' })
  const hasMain = await page.$('main')
  ok(`legacy URL ${path}`, response?.ok() && Boolean(hasMain), `status=${response?.status()}`)
  await page.close()
}

// —— No-JS rendering ——
{
  const page = await browser.newPage()
  await page.setJavaScriptEnabled(false)
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  const visible = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    const s = getComputedStyle(h1)
    return s.opacity === '1' && document.documentElement.className.indexOf('js') === -1
  })
  ok('no-JS content visible', visible)
  const anchors = await page.$$eval('main [id]', (els) => els.map((e) => e.id))
  ok('section anchors present', ['services', 'work', 'process', 'about', 'faq', 'contact'].every((id) => anchors.includes(id)), anchors.join(','))
  await page.close()
}

// —— Reduced motion ——
{
  const page = await browser.newPage()
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 300))
  const workflowVisible = await page.evaluate(() => {
    const el = document.querySelector('.ai-flow__step')
    return getComputedStyle(el).opacity === '1'
  })
  ok('reduced motion: AI workflow visible', workflowVisible)
  await page.close()
}

// —— Horizontal overflow at narrow width ——
for (const width of [360, 390, 768, 1024]) {
  const page = await browser.newPage()
  await page.setViewport({ width, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  ok(`no horizontal overflow @${width}px`, overflow <= 0, `overflow=${overflow}px`)
  await page.close()
}

await browser.close()
console.log(results.join('\n'))
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0)
