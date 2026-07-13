// Crawls dist/ HTML files and verifies that internal links, assets and
// anchor targets resolve. Exits 1 on any broken reference.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const DIST = 'dist'
const pages = []
;(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (f.endsWith('.html')) pages.push(p)
  }
})(DIST)

const errors = []

function fileFor(urlPath, sourcePage) {
  const clean = urlPath.split('#')[0].split('?')[0]
  if (clean === '' ) return null
  const base = clean.startsWith('/')
    ? join(DIST, clean.slice(1))
    : resolve(dirname(sourcePage), clean)
  const candidates = [
    base,
    join(base, 'index.html'),
    base.replace(/\/$/, '') + '.html',
  ]
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) ?? false
}

for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1])
  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|data:|#$)/.test(ref)) continue
    if (ref.startsWith('#')) {
      if (!ids.has(ref.slice(1)) && ref !== '#top') errors.push(`${page}: broken anchor ${ref}`)
      continue
    }
    const [path, hash] = ref.split('#')
    const target = fileFor(path, page)
    if (target === false) {
      errors.push(`${page}: broken link ${ref}`)
      continue
    }
    if (hash && target) {
      const targetHtml = readFileSync(target, 'utf8')
      if (!targetHtml.includes(`id="${hash}"`) && hash !== 'top') errors.push(`${page}: broken anchor ${ref}`)
    }
  }
}

if (errors.length) {
  console.error(`Link check FAILED (${errors.length}):`)
  errors.forEach((e) => console.error('  - ' + e))
  process.exit(1)
}
console.log(`Link check passed across ${pages.length} pages.`)
