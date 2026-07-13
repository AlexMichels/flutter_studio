import { SITE_URL, CALENDLY_URL, EMAIL, PHONE, OWNER, BRAND } from './site.mjs'
import { plain } from '../i18n/index.mjs'

const SERVICES_DE = [
  'Flutter App-Entwicklung (iOS, Android, Web, Desktop)',
  'Cross-Platform-Entwicklung',
  'MedTech- und DiGA-App-Entwicklung',
  'MVP-Entwicklung für Startups',
  'Native-zu-Flutter-Migration',
  'Fractional CTO',
]

const SERVICES_EN = [
  'Flutter app development (iOS, Android, web, desktop)',
  'Cross-platform development',
  'MedTech and DiGA app development',
  'MVP development for startups',
  'Native-to-Flutter migration',
  'Fractional CTO',
]

/** @param {'de'|'en'} locale */
export function professionalService(locale) {
  const services = locale === 'de' ? SERVICES_DE : SERVICES_EN
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: BRAND,
    url: SITE_URL,
    description:
      locale === 'de'
        ? 'Freelance Flutter-Entwicklung und Fractional-CTO-Leistungen von Alexander Michels: Apps für iOS, Android, Web und Desktop aus einer Codebasis.'
        : 'Freelance Flutter development and fractional-CTO services by Alexander Michels: apps for iOS, Android, web and desktop from one codebase.',
    founder: {
      '@type': 'Person',
      name: OWNER,
      jobTitle: locale === 'de' ? 'Senior Flutter-Entwickler' : 'Senior Flutter Developer',
      email: EMAIL,
    },
    email: EMAIL,
    telephone: PHONE,
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'City', name: 'Berlin' },
    ],
    knowsLanguage: ['de', 'en'],
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'de' ? 'Leistungen' : 'Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: CALENDLY_URL,
      name: locale === 'de' ? '30-minütiges Erstgespräch buchen' : 'Book a 30-minute intro call',
    },
  }
}

/** @param {object} dict */
export function faqPage(dict) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: plain(item.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(item.a) },
    })),
  }
}

/** @param {'de'|'en'} locale */
export function webSite(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND,
    inLanguage: locale,
    publisher: { '@type': 'Person', name: OWNER },
  }
}
