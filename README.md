# Fluttera website

Marketing website for [fluttera.de](https://fluttera.de), built with Astro and deployed to GitHub Pages.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
node scripts/check-i18n-parity.mjs
node scripts/check-links.mjs
npx html-validate "dist/**/*.html"
```

The German homepage is served at `/` and the English homepage at `/en/`. Legacy `/blog/`, `/learn/`, `/imprint.html`, `/privacy.html`, and `/?lang=en` URLs remain supported.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repository settings, GitHub Pages must use **GitHub Actions** as its source and `fluttera.de` as its custom domain.
