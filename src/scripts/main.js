// All site interactions. Progressive enhancement only — the page is fully
// usable without any of this (content visible, anchors work, Calendly CTAs
// are plain links that open in a new tab).

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

/* ————— Scroll reveals + count-ups + rule draws ————— */
function setupReveals() {
  const targets = document.querySelectorAll('.reveal, .rule-draw')
  if (!('IntersectionObserver' in window) || reducedMotion.matches) {
    targets.forEach((el) => el.classList.add('revealed'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('revealed')
        io.unobserve(entry.target)
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  targets.forEach((el) => io.observe(el))
}

/* ————— Scroll-linked text fill (ploy-style): big statement headings fill
   word by word as they move up the viewport. Progressive enhancement — the
   heading is fully visible without JS or with reduced motion. ————— */
function setupScrollFill() {
  const els = document.querySelectorAll('[data-scroll-fill]')
  if (els.length === 0 || reducedMotion.matches) return

  els.forEach((el) => {
    const words = el.textContent.trim().split(/\s+/)
    el.textContent = ''
    words.forEach((word, i) => {
      const span = document.createElement('span')
      span.className = 'fill-word'
      span.textContent = word
      el.appendChild(span)
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '))
    })
  })

  const update = () => {
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the heading enters at 88% of the viewport, 1 once it reaches 40%
      const progress = Math.min(1, Math.max(0, (vh * 0.88 - rect.top) / (vh * 0.48)))
      const spans = el.querySelectorAll('.fill-word')
      spans.forEach((span, i) => {
        const t = Math.min(1, Math.max(0, progress * spans.length - i))
        span.style.opacity = (0.16 + 0.84 * t).toFixed(3)
      })
    })
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
}

/* ————— Nav: mobile menu ————— */
function setupNav() {
  const nav = document.querySelector('[data-nav]')
  if (!nav) return

  const toggle = nav.querySelector('[data-menu-toggle]')
  const menu = nav.querySelector('[data-menu]')
  if (!toggle || !menu) return

  const setOpen = (open) => {
    nav.classList.toggle('nav--open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose : toggle.dataset.labelOpen)
    document.documentElement.classList.toggle('menu-open', open)
  }
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('nav--open')))
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false)
  })
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      setOpen(false)
      toggle.focus()
    }
  })
}

/* ————— Calendly: plain links enhanced into a popup once the widget loads ————— */
function setupCalendly() {
  const links = document.querySelectorAll('[data-calendly]')
  if (links.length === 0) return
  let loading = false

  const load = () => {
    if (loading) return
    loading = true
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(css)
    const js = document.createElement('script')
    js.src = 'https://assets.calendly.com/assets/external/widget.js'
    js.async = true
    document.head.appendChild(js)
  }

  // Warm up the widget when a CTA is approached; fall back to idle load.
  links.forEach((a) => {
    a.addEventListener('pointerenter', load, { once: true })
    a.addEventListener('focus', load, { once: true })
    a.addEventListener('click', (e) => {
      if (window.Calendly) {
        e.preventDefault()
        window.Calendly.initPopupWidget({ url: a.href })
      }
      // else: default behavior — the plain link opens Calendly in a new tab.
    })
  })
  if ('requestIdleCallback' in window) {
    requestIdleCallback(load, { timeout: 4000 })
  } else {
    setTimeout(load, 4000)
  }
}

/* ————— Language toggle: preserve the current section anchor ————— */
function setupLangToggle() {
  document.querySelectorAll('[data-lang-switch]').forEach((a) => {
    a.addEventListener('click', () => {
      if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash
    })
  })
}

/* ————— Hero video: honour reduced motion by leaving it on the poster ————— */
function setupHeroVideo() {
  const video = document.querySelector('[data-hero-video]')
  if (!video || !reducedMotion.matches) return
  video.removeAttribute('autoplay')
  video.pause()
}

init()

function init() {
  setupReveals()
  setupScrollFill()
  setupNav()
  setupCalendly()
  setupLangToggle()
  setupHeroVideo()
}
