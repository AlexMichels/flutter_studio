// English dictionary. Structure must stay in parity with de.mjs
// (enforced by scripts/check-i18n-parity.mjs at build time).
// *text* inside strings renders as an emphasized (italic serif) segment.

export default {
  locale: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Fluttera | Flutter apps for complex products',
    description:
      'Flutter development for established companies and startups. Scalable apps for iOS, Android, web and desktop, developed by Alexander Michels.',
    ogLocale: 'en_US',
  },
  skipLink: 'Skip to content',
  nav: {
    menuLabel: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#process', label: 'Process' },
      { href: '#about', label: 'About' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ],
    cta: 'Discuss your project',
    langSwitch: { label: 'Deutsch', short: 'DE', href: '/', ariaLabel: 'Zur deutschen Version wechseln' },
  },
  hero: {
    headline: 'Flutter apps for complex products. Built for millions of users.',
    sub: 'I build robust Flutter apps for established companies and startups. Scalable, maintainable and documented so your team can develop them with confidence.',
    ctaPrimary: 'Start a project',
    availability: 'Available for new projects',
    badge: 'One codebase for every screen',
    badgePlatforms: 'iOS · Android · Web · Desktop',
    phoneCaption: 'Smart home with more than 100 device types',
    phoneUi: {
      header: 'Home',
      scenes: ['Morning', 'Evening', 'Movie'],
      tempRoom: 'Living room',
      tempValue: '21.5',
      tempUnit: '°C',
      tempState: 'Heating to comfort level',
      devices: [
        { n: 'Ceiling light', s: 'On · 80 %', on: true },
        { n: 'Thermostat', s: '21.5 °C', on: true },
        { n: 'Blinds', s: 'Open', on: false },
        { n: 'Plug', s: 'Off', on: false },
      ],
    },
  },
  stats: {
    ariaLabel: 'Professional product development with AI',
    heading: 'Work spec-driven with AI as a team.',
    intro: 'I bring a production-ready AI workflow into your Flutter team that developers can use confidently in their daily work.',
    steps: [
      {
        title: 'Develop from a spec',
        body: 'Requirements become clear specs and plans. Claude Code and Codex know what should actually be built.',
      },
      {
        title: 'Skills for your project',
        body: 'Custom skills keep architecture, tests and CI/CD consistent. The rules are versioned in the repository.',
      },
      {
        title: 'Enable the team',
        body: 'I set up the workflow and train your team on the real product. They can then continue independently.',
      },
    ],
  },
  services: {
    id: 'services',
    eyebrow: 'Services',
    heading: 'What your Flutter project needs now.',
    intro: 'A new app, a stalled project or a team getting started with Flutter. I step in where experienced Flutter development makes the greatest difference.',
    cards: [
      {
        size: 'large',
        title: 'An app that stays easy to develop',
        body: 'I design the architecture so every new feature does not become another construction site. Your product stays fast, testable and understandable on every screen.',
        tags: ['Riverpod', 'Feature-first', 'Firebase', 'CI/CD'],
      },
      {
        size: 'large',
        title: 'Safe development in regulated markets',
        body: 'Good code alone is not enough in MedTech. Privacy, traceability and documented quality must be in place from the start. I bring that experience from an approved DiGA product.',
        tags: ['DiGA', 'GDPR', 'Audit-ready', 'Quality docs'],
      },
      {
        size: 'small',
        title: 'MVPs your team can build on',
        body: 'You get to a testable version quickly. The code is still ready for everything that comes after the first customer feedback.',
        tags: [],
      },
      {
        size: 'small',
        title: 'Get an existing app back under control',
        body: 'I stabilise stalled Flutter projects and plan migrations in manageable steps while the existing product stays operational.',
        tags: [],
      },
      {
        size: 'small',
        title: 'Hardware, Linux & embedded',
        body: 'Flutter also works on custom devices, kiosk systems and Linux. I connect the interface cleanly to your hardware.',
        tags: [],
      },
    ],
  },
  work: {
    id: 'work',
    eyebrow: 'Selected work',
    heading: 'Our track record: major products, successfully delivered.',
    intro: 'An approved DiGA, Europe’s largest smart-home app and other products used every day. I have spent years working on central, technically demanding areas in international teams, sometimes in a leading role.',
    cards: [
      {
        category: 'Smart Home · IoT',
        title: 'Europe’s largest smart-home app',
        body: 'For several years, I developed central parts of the platform within its international core team. The app controls more than 100 device types and has millions of installs.',
        facts: [
          { k: 'Role', v: 'Development of central product areas' },
          { k: 'Scale', v: '100+ device types, millions of installs' },
          { k: 'Stack', v: 'Flutter, IoT integration' },
        ],
      },
      {
        category: 'MedTech · DiGA',
        title: 'An approved prescription rehab app',
        body: 'I supported the digital health application from an early product phase through regulated operation. The focus was privacy, traceable quality and a reliable product for patients.',
        facts: [
          { k: 'Role', v: 'Flutter development from early stage to market' },
          { k: 'Context', v: 'Regulated, prescription-grade (DiGA)' },
          { k: 'Focus', v: 'Data protection, audit-ready quality' },
        ],
      },
      {
        category: 'HR · Operations',
        title: 'Time & attendance for daily operations',
        body: 'Companies use this platform every day. Time entry, approvals and exports therefore need to work quickly and reliably.',
        facts: [
          { k: 'Role', v: 'App development, end-to-end' },
          { k: 'Usage', v: 'Daily-use B2B tooling' },
          { k: 'Platforms', v: 'Mobile + web' },
        ],
      },
      {
        category: 'Startups · MVPs',
        title: 'MVPs your team can build on',
        body: 'From pitch deck to the app stores. Clearly prioritised, leanly delivered and built so the product can scale and an internal team can take over immediately.',
        facts: [
          { k: 'Role', v: 'Concept, architecture, development' },
          { k: 'Pace', v: 'Weeks to the stores' },
          { k: 'Result', v: 'A robust foundation for version 2' },
        ],
      },
    ],
  },
  process: {
    id: 'process',
    eyebrow: 'Process',
    heading: 'How your product gets safely to launch.',
    intro: 'Four steps, clear decisions and a build on your device from the first week.',
    steps: [
      {
        title: 'Discovery',
        body: 'We clarify what you want to build, who will use it and which systems are already in place. You then know whether Flutter fits the project.',
      },
      {
        title: 'Architecture',
        body: 'Before development starts, we define the platform strategy, data model, interfaces and delivery process. You receive a clear plan with milestones and effort.',
      },
      {
        title: 'Build',
        body: 'You test real builds on your device from the first week. New functionality is delivered, reviewed and evaluated regularly.',
      },
      {
        title: 'Launch & iterate',
        body: 'I support the release, set up monitoring and resolve issues early. We then continue together or hand the product over cleanly to your team.',
      },
    ],
  },
  about: {
    id: 'about',
    eyebrow: 'About',
    heading: 'Work directly with the developer responsible for the code.',
    paragraphs: [
      'I am Alexander Michels and have worked with Flutter since the framework’s early years. My experience spans smart home, digital health, HR software and startups.',
      'From the first conversation to release, you remain in direct contact with me. I make the technical decisions, write the code and help your team develop the product further.',
    ],
    bullets: [
      'Architecture, interface, backend integration and release',
      'Experience with MedTech, DiGA and documented quality',
      'Collaboration with existing engineering and product teams',
      'Available for projects and part-time technical leadership',
    ],
    portraitAlt: 'Portrait of Alexander Michels, senior Flutter developer',
    signature: 'Alexander Michels · Founder',
  },
  faq: {
    id: 'faq',
    eyebrow: 'FAQ',
    heading: 'Frequently asked questions',
    escape: {
      title: 'Your question isn’t here?',
      body: 'Write to me directly. I usually reply within one business day.',
      cta: 'alex@fluttera.de',
    },
    items: [
      {
        q: 'What is Flutter and when is it a good fit?',
        a: 'Flutter creates apps for iOS, Android, web and desktop from one shared codebase. It is particularly useful when several platforms need the same functionality and a consistent interface. Development and maintenance stay manageable.',
      },
      {
        q: 'Is Flutter the right choice for my project?',
        a: 'Flutter is a strong fit for business apps, customer portals and products with a custom interface. Native development can be more appropriate for highly platform-specific applications. We clarify this before the project starts.',
      },
      {
        q: 'How long does an app project take?',
        a: 'A focused MVP usually takes six to twelve weeks. Three to six months is often realistic for a complete product. After discovery, you receive a plan covering scope, milestones and timing.',
      },
      {
        q: 'Does Flutter really work for web and desktop too?',
        a: 'Yes. Flutter supports iOS, Android, web, Windows, macOS and Linux. I have delivered products for all of these platforms, including custom hardware and Linux-based devices.',
      },
      {
        q: 'How do we work together and what does it cost?',
        a: 'Depending on the project, I work to an agreed scope or on a day rate. After a free introductory call, you receive a clear assessment and written proposal. We can work remotely or on site by arrangement.',
      },
      {
        q: 'What does a fractional CTO actually do?',
        a: 'As a fractional CTO, I provide technical leadership for a few days each month. This includes architecture, technology strategy, recruiting, reviews and managing external suppliers. It suits companies that need CTO-level experience without filling a full-time role.',
      },
      {
        q: 'How do you use AI tools?',
        a: 'I use modern tools to speed up research, implementation and testing. Architecture and code quality remain my responsibility. Your data is treated confidentially and you own the rights to the result.',
      },
      {
        q: 'What happens after launch?',
        a: 'You can continue working with me or hand the product over to your team. In both cases, you receive tested, documented code and a working CI/CD pipeline. Your team can continue without depending on me.',
      },
    ],
  },
  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    heading: 'Let’s talk about your Flutter project.',
    sub: 'In 30 minutes, we will clarify what you want to build and how I can help.',
    personal: 'You speak directly with Alexander Michels.',
    booking: {
      title: 'Free introductory call',
      body: 'Choose a time that suits you. You will receive a confirmation right away.',
      cta: 'Choose a time',
      note: 'Free and without obligation. In English or German.',
    },
    microRow: 'I usually reply within 24 hours.',
    direct: {
      title: 'Prefer it direct?',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      responseNote: 'Replies within 24 hours on business days.',
    },
  },
  footer: {
    tagline: 'Flutter apps for complex products',
    legal: [
      { href: '/impressum.html', label: 'Impressum' },
      { href: '/datenschutz.html', label: 'Privacy policy' },
    ],
    copyright: '© 2026 Fluttera · Alexander Michels',
    colophon: 'Statically built, hand-set in Orbitron, Inter & IBM Plex Mono.',
    backToTop: 'Back to top',
  },
  legalPage: {
    backHome: 'Back to home',
  },
}
