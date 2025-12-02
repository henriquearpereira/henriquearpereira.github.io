# henriquearpereira.github.io

[![Deploy to GitHub Pages](https://github.com/henriquearpereira/henriquearpereira.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/henriquearpereira/henriquearpereira.github.io/actions/workflows/deploy.yml)

Portfolio of Henrique Pereira.

## Development

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build` (outputs to `docs/` via Vite)

## Deployment

- Deployed automatically to GitHub Pages via Actions on every push to `main`.
- Workflow: `.github/workflows/deploy.yml` builds with Vite and publishes the `docs/` artifact.
- Manual deploy: use the “Run workflow” button in the Actions tab.
- Production URL: https://henriquearpereira.github.io/

Note: `docs/` is generated in CI and ignored locally.

## Tech Stack

- Vue.js 3: Composition API + Single File Components for a modular, reactive UI.
- Vite: Lightning-fast dev server and production bundler.
- Tailwind CSS: Utility-first styling compiled via PostCSS.
- PostCSS + Autoprefixer: Modern CSS processing and cross-browser prefixes.
- GitHub Actions: CI pipeline that builds and deploys on every push to `main`.
- GitHub Pages: Static hosting for the built site.
- Feather Icons: Lightweight icon set rendered at runtime.
- Google Fonts (Inter): Clean, legible typography.
