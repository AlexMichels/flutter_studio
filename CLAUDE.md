# Project Info
One-page marketing website for Fluttera (fluttera.de) — the Flutter freelance agency of Alexander Michels (senior Flutter developer, fractional CTO). Hosted free on GitHub Pages with the custom domain fluttera.de.

# Stack
- Astro 5 static site, no CSS framework, no client framework. Build: `npm run build`, dev: `npm run dev`.
- Bilingual: German default at `/` (src/pages/index.astro), English at `/en/`. ALL copy lives in `src/i18n/de.mjs` and `src/i18n/en.mjs` — never hardcode visible strings in components. `*word*` in dictionary strings renders as the blue headline accent via the `em()` helper.
- `scripts/check-i18n-parity.mjs` enforces structural parity of the two dictionaries (runs in CI).
- Legal pages (`impressum.astro`, `datenschutz.astro`) keep their legacy URLs `/impressum.html`, `/datenschutz.html` via `build.format: 'preserve'` — do not change that config or the URLs.
- Deploy: `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`. GitHub Pages must be set to "GitHub Actions" source. `public/CNAME` carries the custom domain.
- Legacy routes under `/blog/` and `/learn/` are static files in `public/`. `/imprint.html`, `/privacy.html`, and `/?lang=en` remain compatibility routes; keep them working during future changes.

# Design system ("printed matter")
- Tokens in `src/styles/tokens.css`: warm paper #F5F3EC, ink #191A1E, ONE spot colour Reflex blue #2743CD, midnight #101430 dark sections, hairline rules, print-sharp 3px radii, flat offset shadows (no blur), one easing family.
- Type: Anton (display — condensed uppercase, the free stand-in for ploy.ai's commercial FK Screamer; single weight 400, never synthesize bold), Geist (body, variable), IBM Plex Mono (marginalia/eyebrows). Self-hosted in `public/fonts` — no font CDNs.
- Signature motifs (ploy.ai-inspired): nav is quiet ink-on-paper at the top and condenses into a floating frosted glass pill on scroll; hero media sits in an inset rounded frame on paper; mono datasheet rows on case cards. No gradients, no emoji icons.
- Motion: IntersectionObserver reveals + count-ups in `src/scripts/main.js` (vanilla, small). Full prefers-reduced-motion support; content must stay visible without JS.

# Conversion path
Primary CTA: Calendly popup (https://calendly.com/fluttera/30min) — CTAs are real `<a>` links progressively enhanced (`data-calendly`). Secondary: mailto alex@fluttera.de, tel +49 5242 412 9026. No contact form.

# SEO/AEO
Per-locale meta + hreflang, JSON-LD (ProfessionalService, FAQPage mirroring the FAQ dictionary, WebSite) in `src/lib/jsonld.mjs`, sitemap via @astrojs/sitemap, `public/robots.txt` (AI crawlers explicitly allowed), `public/llms.txt`. Keep GA gtag G-CEV6Q1NVH8.

# Validation
`node scripts/check-i18n-parity.mjs` · `node scripts/check-links.mjs` (after build) · `npx html-validate "dist/**/*.html"` · `node scripts/screenshot.mjs <outDir>` and `node scripts/interaction-test.mjs <outDir>` (need `npm run preview` running on :4321 and local Chrome).
