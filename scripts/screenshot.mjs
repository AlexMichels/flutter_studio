// Screenshot helper for visual verification during development.
// Usage: node scripts/screenshot.mjs <outDir> [baseUrl]
// Captures full-page desktop + mobile shots of both locales.
import puppeteer from 'puppeteer-core'

const outDir = process.argv[2] ?? 'shots'
const base = process.argv[3] ?? 'http://localhost:4321'
const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
})

const shots = [
  { name: 'de-desktop', url: `${base}/`, width: 1440, height: 900 },
  { name: 'en-desktop', url: `${base}/en/`, width: 1440, height: 900 },
  { name: 'de-mobile', url: `${base}/`, width: 390, height: 844 },
  { name: 'de-tablet', url: `${base}/`, width: 834, height: 1112 },
  { name: 'de-narrow', url: `${base}/`, width: 360, height: 780 },
  { name: 'impressum', url: `${base}/impressum.html`, width: 1440, height: 900 },
]

for (const s of shots) {
  const page = await browser.newPage()
  await page.setViewport({ width: s.width, height: s.height })
  await page.goto(s.url, { waitUntil: 'networkidle0' })
  // Force all reveals visible so full-page shots don't capture hidden content,
  // and scroll through the page so lazy images load before capture.
  await page.evaluate(() => {
    document.querySelectorAll('.reveal, .rule-draw').forEach((el) => el.classList.add('revealed'))
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = 'eager'))
  })
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 40))
    }
    window.scrollTo(0, 0)
  })
  await new Promise((r) => setTimeout(r, 500))
  await page.screenshot({ path: `${outDir}/${s.name}.png`, fullPage: true })
  await page.close()
  console.log(`${s.name}.png`)
}

await browser.close()
