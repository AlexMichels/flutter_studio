// Generates the 1200×630 Open Graph images (de/en), the apple-touch-icon and
// the 32px favicon PNG from SVG sources. Uses sharp (ships with Astro).
// Run: node scripts/generate-og.mjs
// Brand kit: Deep Blue bg, silver text, gold eyebrows, Electric Blue accent.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const NAVY = '#0A1B3D'
const BLUE = '#1E5BFF'
const BLUE_ON_DARK = '#83A5FF'
const GOLD = '#D4AF37'
const SILVER = '#C0C2C7'
const PAPER = '#F7F8FB'
const STEEL = '#1F2937'
const GREEN = '#2E7D5B'

// Three-stripe Fluttera mark (from fluttera_icon.svg), silver gradient
const MARK_PATHS = `
  <path d="M14 43 C14 20 32 4 55 4 H164 L139 29 C126 42 111 49 92 49 H14 Z"/>
  <path d="M28 78 C28 64 39 53 53 53 H138 L116 75 C104 87 92 92 76 92 H28 Z"/>
  <path d="M28 117 C28 105 37 96 49 96 H103 L83 121 C70 137 57 151 28 168 Z"/>`

const SILVER_GRADIENT = `
  <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#FFFFFF"/>
    <stop offset="0.38" stop-color="#E8EAF0"/>
    <stop offset="0.68" stop-color="#B8BDC8"/>
    <stop offset="1" stop-color="#F7F8FB"/>
  </linearGradient>`

function ogSvg({ eyebrow, line1, line2, accent, sub, url }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>${SILVER_GRADIENT}</defs>
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="80" y="88" width="1040" height="1.5" fill="${STEEL}"/>
  <text x="80" y="72" font-family="Courier, monospace" font-size="22" letter-spacing="3" fill="${GOLD}">01</text>
  <text x="132" y="72" font-family="Courier, monospace" font-size="22" letter-spacing="3" fill="${SILVER}">${eyebrow}</text>
  <text x="1120" y="72" text-anchor="end" font-family="Courier, monospace" font-size="22" letter-spacing="3" fill="${SILVER}">FLUTTERA.DE</text>
  <g transform="translate(1040 130) scale(0.45)" fill="url(#silver)">${MARK_PATHS}</g>
  <text x="76" y="280" font-family="Helvetica, Arial, sans-serif" font-size="88" font-weight="600" letter-spacing="-1" fill="${PAPER}">${line1}</text>
  <text x="76" y="390" font-family="Helvetica, Arial, sans-serif" font-size="88" font-weight="600" letter-spacing="-1" fill="${BLUE_ON_DARK}">${line2}</text>
  <rect x="80" y="412" width="${accent}" height="6" fill="${BLUE}"/>
  <text x="80" y="490" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="${SILVER}">${sub}</text>
  <rect x="80" y="540" width="1040" height="1.5" fill="${STEEL}"/>
  <circle cx="88" cy="576" r="7" fill="${GREEN}"/>
  <text x="108" y="584" font-family="Courier, monospace" font-size="22" letter-spacing="2" fill="${SILVER}">${url}</text>
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

// Deep-Blue rounded tile + silver mark (kit tile variant)
function tileSvg(size) {
  const rx = Math.round(size * 0.2)
  const s = size / 220
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>${SILVER_GRADIENT}</defs>
  <rect width="${size}" height="${size}" rx="${rx}" fill="${NAVY}"/>
  <g transform="scale(${s}) translate(40 44) scale(0.78)" fill="url(#silver)">${MARK_PATHS}</g>
</svg>`
}

await mkdir('public/assets/og', { recursive: true })
await sharp(Buffer.from(de)).png().toFile('public/assets/og/og-de.png')
await sharp(Buffer.from(en)).png().toFile('public/assets/og/og-en.png')
await sharp(Buffer.from(tileSvg(180))).png().toFile('public/assets/og/apple-touch-icon.png')
await sharp(Buffer.from(tileSvg(220))).resize(32, 32).png().toFile('public/assets/img/favicon-32.png')
console.log('OG images, apple-touch-icon and favicon-32 generated.')
