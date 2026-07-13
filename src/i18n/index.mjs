import de from './de.mjs'
import en from './en.mjs'

const dictionaries = { de, en }

/** @param {'de'|'en'} locale */
export function getDict(locale) {
  return dictionaries[locale]
}

/** Escape HTML special characters. @param {string} s */
function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

/**
 * Render a dictionary string to HTML: *text* becomes an emphasized segment.
 * Everything else is escaped. Use with set:html.
 * @param {string} s
 */
export function em(s) {
  return escapeHtml(s).replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

/** Strip *emphasis* markers for plain-text contexts (meta, JSON-LD). @param {string} s */
export function plain(s) {
  return s.replaceAll('*', '')
}
