import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// build.format 'preserve' mirrors the source structure into dist/: impressum.astro
// becomes /impressum.html (legacy URLs linked from external sites keep working)
// while en/index.astro becomes /en/index.html so /en/ resolves on GitHub Pages.
export default defineConfig({
  site: 'https://fluttera.de',
  build: {
    format: 'preserve',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de',
          en: 'en',
        },
      },
    }),
  ],
});
