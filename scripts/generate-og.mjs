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

// Fluttera mark (from fluttera-primary-logo.svg), silver gradient
const MARK_PATHS = `\n  <path d="M 11.01 57.50 L 6.01 57.89 L 5.59 57.43 L 9.01 53.81 L 26.01 36.57 L 36.74 25.43 L 53.01 8.83 L 56.01 6.26 L 59.01 4.27 L 61.01 3.23 L 64.01 2.04 L 65.01 1.84 L 67.01 1.13 L 70.01 0.67 L 72.01 0.23 L 74.01 0.08 L 186.01 0.00 L 186.62 0.43 L 186.08 1.43 L 177.43 10.43 L 165.01 22.98 L 158.01 30.32 L 153.01 34.71 L 152.01 35.27 L 150.01 36.76 L 149.01 37.31 L 147.01 38.72 L 146.01 39.20 L 144.01 40.50 L 140.01 42.61 L 136.01 44.26 L 135.01 44.80 L 134.01 45.06 L 133.01 45.58 L 131.01 46.14 L 130.01 46.66 L 122.01 48.75 L 116.01 49.74 L 109.01 50.17 L 103.01 50.72 L 93.01 51.20 L 88.01 51.69 L 77.01 52.21 L 72.01 52.75 L 63.01 53.15 L 58.01 53.63 L 49.01 54.14 L 44.01 54.67 L 37.01 55.09 L 32.01 55.58 L 25.01 56.03 L 20.01 56.67 L 13.01 57.19 Z M 91.01 102.50 L 90.01 102.76 L 86.01 103.00 L 25.01 103.05 L 18.01 102.97 L 16.95 102.43 L 20.06 99.43 L 47.01 72.09 L 48.01 71.18 L 51.01 69.04 L 53.01 67.99 L 54.01 67.68 L 55.01 67.16 L 59.01 66.12 L 63.01 65.85 L 130.01 65.89 L 130.96 66.43 L 126.32 71.43 L 100.01 97.87 L 99.01 98.73 L 96.01 100.66 L 95.01 101.03 L 94.01 101.60 Z M 1.01 177.48 L 0.05 176.43 L 0.00 174.43 L 0.12 163.43 L 0.17 127.43 L 0.56 124.43 L 0.81 123.43 L 1.30 122.43 L 1.59 121.43 L 2.22 120.43 L 2.65 119.43 L 4.22 117.43 L 5.20 116.43 L 7.01 115.05 L 9.01 114.07 L 10.01 113.76 L 11.01 113.25 L 12.01 113.00 L 14.01 112.78 L 23.01 112.62 L 61.01 112.64 L 61.99 113.43 L 61.25 118.43 L 60.26 121.43 L 58.49 125.43 L 57.47 127.43 L 56.77 128.43 L 56.32 129.43 L 53.12 133.43 L 51.28 135.43 L 42.01 144.67 L 37.01 149.32 L 33.19 153.43 L 21.01 165.32 L 16.97 169.43 L 13.01 172.57 L 10.00 174.43 L 7.01 175.81 L 5.01 176.57 L 4.01 176.85 L 2.01 177.17 Z" transform="scale(1.03419187 1.09872216)" fill-rule="evenodd"/>`

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
  <g transform="translate(1050 120) scale(0.42)" fill="url(#silver)">${MARK_PATHS}</g>
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
  <g transform="scale(${s}) translate(40 39) scale(0.72)" fill="url(#silver)">${MARK_PATHS}</g>
</svg>`
}

await mkdir('public/assets/og', { recursive: true })
await sharp(Buffer.from(de)).png().toFile('public/assets/og/og-de.png')
await sharp(Buffer.from(en)).png().toFile('public/assets/og/og-en.png')
await sharp(Buffer.from(tileSvg(180))).png().toFile('public/assets/og/apple-touch-icon.png')
await sharp(Buffer.from(tileSvg(220))).resize(32, 32).png().toFile('public/assets/img/favicon-32.png')
console.log('OG images, apple-touch-icon and favicon-32 generated.')
