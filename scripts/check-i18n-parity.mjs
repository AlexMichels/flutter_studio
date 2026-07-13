// Asserts that de.mjs and en.mjs expose structurally identical dictionaries:
// same key trees, same array lengths, same value types. Exits 1 on mismatch.
import de from '../src/i18n/de.mjs'
import en from '../src/i18n/en.mjs'

const errors = []

function compare(a, b, path) {
  const ta = Array.isArray(a) ? 'array' : typeof a
  const tb = Array.isArray(b) ? 'array' : typeof b
  if (ta !== tb) {
    errors.push(`${path}: type mismatch (de: ${ta}, en: ${tb})`)
    return
  }
  if (ta === 'array') {
    if (a.length !== b.length) {
      errors.push(`${path}: array length mismatch (de: ${a.length}, en: ${b.length})`)
    }
    const len = Math.min(a.length, b.length)
    for (let i = 0; i < len; i++) compare(a[i], b[i], `${path}[${i}]`)
    return
  }
  if (ta === 'object' && a !== null) {
    const keysA = Object.keys(a).sort()
    const keysB = Object.keys(b).sort()
    for (const k of keysA) if (!keysB.includes(k)) errors.push(`${path}.${k}: missing in en`)
    for (const k of keysB) if (!keysA.includes(k)) errors.push(`${path}.${k}: missing in de`)
    for (const k of keysA) if (keysB.includes(k)) compare(a[k], b[k], `${path}.${k}`)
  }
}

compare(de, en, 'dict')

if (errors.length > 0) {
  console.error(`i18n parity check FAILED (${errors.length} issue${errors.length === 1 ? '' : 's'}):`)
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}
console.log('i18n parity check passed: de and en dictionaries are structurally identical.')
