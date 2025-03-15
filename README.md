# Fluttera Website

This is the source code for the Fluttera website - a Flutter App Development Agency.

## Multilingual Support

The website supports both German and English languages with the following features:

### Language Features

1. **Flag-based language toggle** - Users can easily switch between German and English by clicking on a single flag icon in the navigation bar. The flag shows the opposite language (🇬🇧 when in German, 🇩🇪 when in English).

2. **Local storage persistence** - The selected language preference is saved in the browser's local storage, so users see the site in their preferred language on return visits.

3. **Browser language detection** - On first visit, the site detects the user's browser language and automatically displays content in either German or English.

4. **Full content translation** - All website content is available in both languages, with translations managed through a structured JavaScript object.

5. **SEO considerations** - Meta tags are updated based on the selected language to ensure proper indexing by search engines.

6. **Responsive design** - The language switcher is fully responsive and works well on all device sizes.

### Technical Implementation

- `translations.js` - Contains all translatable text in both languages
- `language-switcher.js` - Handles the language switching functionality and UI updates
- Data attributes (`data-i18n`) on HTML elements for connecting content to translation keys

### Legal Pages

Legal pages are provided in both languages:
- German: impressum.html, datenschutz.html
- English: imprint.html, privacy.html

The footer links automatically update based on the selected language.