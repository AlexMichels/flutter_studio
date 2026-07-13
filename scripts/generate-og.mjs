// Generates the 1200×630 Open Graph images (de/en) and the apple-touch-icon
// from SVG sources. Uses sharp (ships with Astro). Run: node scripts/generate-og.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const PAPER = '#F5F3EC'
const INK = '#191A1E'
const BLUE = '#2743CD'
const SOFT = '#565660'
const HAIRLINE = '#D9D5C9'

function ogSvg({ eyebrow, line1, line2, accent, sub, url }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="80" y="88" width="1040" height="1.5" fill="${HAIRLINE}"/>
  <text x="80" y="72" font-family="Courier, monospace" font-size="22" letter-spacing="3" fill="${BLUE}">01</text>
  <text x="132" y="72" font-family="Courier, monospace" font-size="22" letter-spacing="3" fill="${SOFT}">${eyebrow}</text>
  <text x="1120" y="72" text-anchor="end" font-family="Courier, monospace" font-size="22" letter-spacing="3" fill="${SOFT}">FLUTTERA.DE</text>
  <text x="76" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="600" letter-spacing="-2" fill="${INK}">${line1}</text>
  <text x="76" y="390" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="600" letter-spacing="-2" fill="${BLUE}">${line2}</text>
  <rect x="80" y="412" width="${accent}" height="6" fill="${BLUE}"/>
  <text x="80" y="490" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="${SOFT}">${sub}</text>
  <rect x="80" y="540" width="1040" height="1.5" fill="${HAIRLINE}"/>
  <circle cx="88" cy="576" r="7" fill="#2E7D5B"/>
  <text x="108" y="584" font-family="Courier, monospace" font-size="22" letter-spacing="2" fill="${SOFT}">${url}</text>
</svg>`
}

const de = ogSvg({
  eyebrow: 'SENIOR FLUTTER-ENTWICKLER · DEUTSCHLAND',
  line1: 'Flutter-Apps, die',
  line2: 'wirklich live gehen.',
  accent: 760,
  sub: 'Ein Senior-Entwickler. iOS, Android, Web &amp; Desktop aus einer Codebasis.',
  url: 'fluttera.de — Verfügbar für neue Projekte',
})

const en = ogSvg({
  eyebrow: 'SENIOR FLUTTER DEVELOPER · GERMANY',
  line1: 'Flutter apps that',
  line2: 'actually ship.',
  accent: 520,
  sub: 'One senior engineer. iOS, Android, web &amp; desktop from a single codebase.',
  url: 'fluttera.de/en — Available for new projects',
})

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="26" fill="${BLUE}"/>
  <text x="93" y="97" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Times New Roman', serif" font-size="124" font-weight="600" fill="${PAPER}">F</text>
</svg>`

await mkdir('public/assets/og', { recursive: true })
await sharp(Buffer.from(de)).png().toFile('public/assets/og/og-de.png')
await sharp(Buffer.from(en)).png().toFile('public/assets/og/og-en.png')
await sharp(Buffer.from(icon)).png().toFile('public/assets/og/apple-touch-icon.png')
console.log('OG images and apple-touch-icon generated.')
