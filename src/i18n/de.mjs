// Deutsches Wörterbuch. Struktur muss mit en.mjs übereinstimmen
// (wird von scripts/check-i18n-parity.mjs beim Build geprüft).
// *text* innerhalb von Strings wird als hervorgehobenes (kursives Serif-)Segment gerendert.

export default {
  locale: 'de',
  htmlLang: 'de',
  meta: {
    title: 'Fluttera | Flutter-Apps für komplexe Produkte',
    description:
      'Flutter-Entwicklung für Mittelstand und Start-ups. Skalierbare Apps für iOS, Android, Web und Desktop. Entwickelt von Alexander Michels.',
    ogLocale: 'de_DE',
  },
  skipLink: 'Zum Inhalt springen',
  nav: {
    menuLabel: 'Menü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    links: [
      { href: '#services', label: 'Leistungen' },
      { href: '#work', label: 'Referenzen' },
      { href: '#process', label: 'Prozess' },
      { href: '#about', label: 'Über mich' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Kontakt' },
    ],
    cta: 'Projekt besprechen',
    langSwitch: { label: 'English', short: 'EN', href: '/en/', ariaLabel: 'Switch to the English version' },
  },
  hero: {
    headline: 'Flutter-Apps für komplexe Produkte. Gebaut für Millionen Nutzer.',
    sub: 'Ich entwickle belastbare Flutter-Apps für Mittelstand und Start-ups. Skalierbar, wartbar und so dokumentiert, dass Ihr Team sie sicher weiterentwickeln kann.',
    ctaPrimary: 'Projekt besprechen',
    availability: 'Verfügbar für neue Projekte',
    badge: 'Eine Codebasis für jeden Bildschirm',
    badgePlatforms: 'iOS · Android · Web · Desktop',
    phoneCaption: 'Smart Home mit mehr als 100 Gerätetypen',
    phoneUi: {
      header: 'Zuhause',
      scenes: ['Morgen', 'Abend', 'Film'],
      tempRoom: 'Wohnzimmer',
      tempValue: '21,5',
      tempUnit: '°C',
      tempState: 'Heizt auf Wohlfühltemperatur',
      devices: [
        { n: 'Deckenlicht', s: 'An · 80 %', on: true },
        { n: 'Thermostat', s: '21,5 °C', on: true },
        { n: 'Rollladen', s: 'Offen', on: false },
        { n: 'Steckdose', s: 'Aus', on: false },
      ],
    },
  },
  stats: {
    ariaLabel: 'Professionelle Produktentwicklung mit KI',
    heading: 'Mit KI Spec-Driven im Team arbeiten.',
    intro: 'Ich bringe einen production-ready KI-Workflow in Ihr Flutter-Team, den Ihre Entwickler im Alltag selbst nutzen können.',
    steps: [
      {
        title: 'Spec-driven entwickeln',
        body: 'Aus Anforderungen werden klare Specs und Pläne. So wissen Claude Code und Codex, was wirklich gebaut werden soll.',
      },
      {
        title: 'Skills für Ihr Projekt',
        body: 'Eigene Skills halten Architektur, Tests und CI/CD konsistent. Die Regeln liegen versioniert im Repository.',
      },
      {
        title: 'Das Team befähigen',
        body: 'Ich richte den Workflow ein und arbeite Ihr Team am echten Produkt ein. Danach kann es selbstständig damit weiterarbeiten.',
      },
    ],
  },
  services: {
    id: 'services',
    eyebrow: 'Leistungen',
    heading: 'Was Ihr Flutter-Projekt jetzt braucht.',
    intro: 'Neue App, festgefahrenes Projekt oder Teamaufbau: Ich steige dort ein, wo erfahrene Flutter-Entwicklung den größten Unterschied macht.',
    cards: [
      {
        size: 'large',
        title: 'Eine App, die lange gut bleibt',
        body: 'Ich lege die Architektur so an, dass neue Features nicht jedes Mal zur Baustelle werden. Ihr Produkt bleibt schnell, testbar und verständlich. Auf jedem Bildschirm.',
        tags: ['Riverpod', 'Feature-first', 'Firebase', 'CI/CD'],
      },
      {
        size: 'large',
        title: 'Sicher entwickeln in regulierten Märkten',
        body: 'Bei MedTech reicht guter Code nicht aus. Datenschutz, Nachvollziehbarkeit und dokumentierte Qualität müssen von Anfang an stimmen. Diese Erfahrung bringe ich aus einem zugelassenen DiGA-Produkt mit.',
        tags: ['DiGA', 'DSGVO', 'Prüfsicher', 'Qualitätsdoku'],
      },
      {
        size: 'small',
        title: 'MVPs, auf denen Sie weiterbauen können',
        body: 'Sie kommen schnell zu einer testbaren Version. Der Code ist trotzdem bereit für das, was nach dem ersten Kundenfeedback kommt.',
        tags: [],
      },
      {
        size: 'small',
        title: 'Bestehende Apps wieder in den Griff bekommen',
        body: 'Ich stabilisiere festgefahrene Flutter-Projekte und plane Migrationen in überschaubaren Schritten. Der laufende Betrieb bleibt dabei erhalten.',
        tags: [],
      },
      {
        size: 'small',
        title: 'Hardware, Linux & Embedded',
        body: 'Flutter funktioniert auch auf eigenen Geräten, Kiosk-Systemen und Linux. Ich verbinde die Oberfläche sauber mit Ihrer Hardware.',
        tags: [],
      },
    ],
  },
  work: {
    id: 'work',
    eyebrow: 'Referenzen',
    heading: 'Unsere Erfolgsgeschichte: große Produkte, erfolgreich umgesetzt.',
    intro: 'Eine zugelassene DiGA, Europas größte Smart-Home-App und weitere Produkte für den täglichen Einsatz. Ich habe über Jahre in internationalen Teams an zentralen, technisch anspruchsvollen Bereichen gearbeitet. Teilweise in führender Rolle.',
    cards: [
      {
        category: 'Smart Home · IoT',
        title: 'Europas größte Smart-Home-App',
        body: 'Über mehrere Jahre habe ich im internationalen Kernteam zentrale Funktionen der Plattform entwickelt. Die App steuert mehr als 100 Gerätetypen und wurde millionenfach installiert.',
        facts: [
          { k: 'Rolle', v: 'Entwicklung zentraler Produktbereiche' },
          { k: 'Umfang', v: '100+ Gerätetypen, Millionen Installationen' },
          { k: 'Stack', v: 'Flutter, IoT-Anbindung' },
        ],
      },
      {
        category: 'MedTech · DiGA',
        title: 'Eine zugelassene Reha-App auf Rezept',
        body: 'Ich habe die digitale Gesundheitsanwendung von einer frühen Produktphase bis zum regulierten Betrieb begleitet. Im Mittelpunkt standen Datenschutz, nachvollziehbare Qualität und ein verlässliches Produkt für Patienten.',
        facts: [
          { k: 'Rolle', v: 'Flutter-Entwicklung von der Frühphase bis zum Markt' },
          { k: 'Rahmen', v: 'Reguliert, verschreibungsfähig (DiGA)' },
          { k: 'Fokus', v: 'Datenschutz, prüfsichere Qualität' },
        ],
      },
      {
        category: 'HR · Operations',
        title: 'Zeiterfassung für den täglichen Betrieb',
        body: 'Die Plattform wird täglich von Unternehmen genutzt. Arbeitszeiten, Freigaben und Exporte müssen deshalb schnell und zuverlässig funktionieren.',
        facts: [
          { k: 'Rolle', v: 'App-Entwicklung, End-to-End' },
          { k: 'Einsatz', v: 'Täglich genutztes B2B-Werkzeug' },
          { k: 'Plattformen', v: 'Mobile + Web' },
        ],
      },
      {
        category: 'Startups · MVPs',
        title: 'MVPs, auf denen Ihr Team weiterbauen kann',
        body: 'Vom Pitch-Deck in die App Stores. Klar priorisiert, schlank umgesetzt und so aufgebaut, dass das Produkt skalieren und ein internes Team direkt übernehmen kann.',
        facts: [
          { k: 'Rolle', v: 'Konzept, Architektur, Entwicklung' },
          { k: 'Tempo', v: 'In Wochen im Store' },
          { k: 'Ergebnis', v: 'Eine belastbare Basis für Version 2' },
        ],
      },
    ],
  },
  process: {
    id: 'process',
    eyebrow: 'Prozess',
    heading: 'So kommt Ihr Produkt sicher live.',
    intro: 'Vier Schritte, klare Entscheidungen und ab der ersten Woche ein Build auf Ihrem Gerät.',
    steps: [
      {
        title: 'Discovery',
        body: 'Wir klären, was Sie bauen möchten, wer das Produkt nutzt und welche Systeme bereits vorhanden sind. Danach wissen Sie, ob Flutter für das Vorhaben passt.',
      },
      {
        title: 'Architektur',
        body: 'Bevor die Entwicklung startet, stehen Plattformstrategie, Datenmodell, Schnittstellen und Auslieferung. Sie erhalten einen verständlichen Plan mit Meilensteinen und Aufwand.',
      },
      {
        title: 'Build',
        body: 'Ab der ersten Woche testen Sie echte Builds auf Ihrem Gerät. Neue Funktionen werden regelmäßig geliefert, geprüft und gemeinsam bewertet.',
      },
      {
        title: 'Launch & Iteration',
        body: 'Ich begleite die Veröffentlichung, richte Monitoring ein und behebe Probleme früh. Danach entwickeln wir gemeinsam weiter oder übergeben das Produkt sauber an Ihr Team.',
      },
    ],
  },
  about: {
    id: 'about',
    eyebrow: 'Über mich',
    heading: 'Sie arbeiten direkt mit dem Entwickler, der den Code verantwortet.',
    paragraphs: [
      'Ich bin Alexander Michels und arbeite seit den frühen Jahren des Frameworks mit Flutter. Meine Erfahrung reicht von Smart Home und digitaler Gesundheit bis zu HR-Software und Start-ups.',
      'Vom ersten Gespräch bis zum Release bleiben Sie mit mir im direkten Austausch. Ich treffe die technischen Entscheidungen, schreibe den Code und unterstütze Ihr Team bei der Weiterentwicklung.',
    ],
    bullets: [
      'Architektur, Oberfläche, Backend-Anbindung und Veröffentlichung',
      'Erfahrung mit MedTech, DiGA und dokumentierter Qualität',
      'Zusammenarbeit mit bestehenden Entwicklungs- und Produktteams',
      'Verfügbar für Projekte und technische Führung auf Zeit',
    ],
    portraitAlt: 'Porträt von Alexander Michels, Senior Flutter-Entwickler',
    signature: 'Alexander Michels · Gründer',
  },
  faq: {
    id: 'faq',
    eyebrow: 'FAQ',
    heading: 'Häufig gestellte Fragen',
    escape: {
      title: 'Ihre Frage ist nicht dabei?',
      body: 'Schreiben Sie mir direkt. Ich antworte in der Regel innerhalb eines Werktags.',
      cta: 'alex@fluttera.de',
    },
    items: [
      {
        q: 'Was ist Flutter und wann lohnt es sich?',
        a: 'Mit Flutter entstehen Apps für iOS, Android, Web und Desktop aus einer gemeinsamen Codebasis. Das lohnt sich besonders, wenn mehrere Plattformen dieselben Funktionen und eine einheitliche Oberfläche benötigen. Entwicklung und Wartung bleiben dadurch überschaubar.',
      },
      {
        q: 'Ist Flutter die richtige Wahl für mein Projekt?',
        a: 'Flutter eignet sich sehr gut für Business-Apps, Kundenportale und Produkte mit einer individuellen Oberfläche. Bei stark plattformspezifischen Anwendungen kann eine native Entwicklung sinnvoller sein. Das klären wir vor Projektbeginn.',
      },
      {
        q: 'Wie lange dauert ein App-Projekt?',
        a: 'Ein fokussiertes MVP dauert meist sechs bis zwölf Wochen. Für ein vollständiges Produkt sind häufig drei bis sechs Monate realistisch. Nach der Discovery erhalten Sie einen Plan mit Umfang, Meilensteinen und Zeitrahmen.',
      },
      {
        q: 'Funktioniert Flutter wirklich auch für Web und Desktop?',
        a: 'Ja. Flutter unterstützt iOS, Android, Web, Windows, macOS und Linux. Ich habe Produkte für all diese Plattformen ausgeliefert, auch für eigene Hardware und Linux-basierte Geräte.',
      },
      {
        q: 'Wie arbeiten wir zusammen und was kostet das?',
        a: 'Je nach Vorhaben arbeite ich mit einem vereinbarten Projektumfang oder auf Tagesbasis. Nach einem kostenlosen Erstgespräch erhalten Sie eine klare Einschätzung und ein schriftliches Angebot. Die Zusammenarbeit ist remote oder nach Absprache vor Ort möglich.',
      },
      {
        q: 'Was macht ein Fractional CTO eigentlich?',
        a: 'Als Fractional CTO übernehme ich technische Führung für einige Tage im Monat. Dazu gehören Architektur, Technologiestrategie, Recruiting, Reviews und die Steuerung externer Dienstleister. Das passt zu Unternehmen, die Erfahrung auf CTO-Niveau brauchen, aber keine Vollzeitstelle besetzen möchten.',
      },
      {
        q: 'Wie setzen Sie KI-Werkzeuge ein?',
        a: 'Ich nutze moderne Werkzeuge, um Recherche, Umsetzung und Tests zu beschleunigen. Architektur und Codequalität bleiben meine Verantwortung. Ihre Daten werden vertraulich behandelt und die Rechte am Ergebnis gehören Ihnen.',
      },
      {
        q: 'Was passiert nach dem Launch?',
        a: 'Sie können die Zusammenarbeit fortsetzen oder das Produkt an Ihr Team übergeben. In beiden Fällen erhalten Sie getesteten, dokumentierten Code und eine funktionierende CI/CD-Pipeline. Ihr Team kann ohne Abhängigkeit weiterarbeiten.',
      },
    ],
  },
  contact: {
    id: 'contact',
    eyebrow: 'Kontakt',
    heading: 'Sprechen wir über Ihr Flutter-Projekt.',
    sub: 'In 30 Minuten klären wir, was Sie vorhaben und wie ich Sie unterstützen kann.',
    personal: 'Sie sprechen direkt mit Alexander Michels.',
    booking: {
      title: 'Kostenloses Erstgespräch',
      body: 'Wählen Sie einen Termin, der für Sie passt. Sie erhalten direkt eine Bestätigung.',
      cta: 'Termin auswählen',
      note: 'Kostenlos und unverbindlich. Auf Deutsch oder Englisch.',
    },
    microRow: 'Antwort in der Regel innerhalb von 24 Stunden.',
    direct: {
      title: 'Lieber direkt?',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      responseNote: 'Antwort innerhalb von 24 Stunden an Werktagen.',
    },
  },
  footer: {
    tagline: 'Flutter-Apps für komplexe Produkte',
    legal: [
      { href: '/impressum.html', label: 'Impressum' },
      { href: '/datenschutz.html', label: 'Datenschutz' },
    ],
    copyright: '© 2026 Fluttera · Alexander Michels',
    colophon: 'Statisch gebaut, von Hand gesetzt in Anton, Geist & IBM Plex Mono.',
    backToTop: 'Nach oben',
  },
  legalPage: {
    backHome: 'Zurück zur Startseite',
  },
}
