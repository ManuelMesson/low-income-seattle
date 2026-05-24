# Low Income Seattle

A directory of food banks, free meals, and public showers for low-income and homeless residents of Seattle, WA.

Built with **Vite + React 19 + TypeScript**, styled with **Tailwind v4** and shadcn-style primitives, internationalized in English and Spanish, and tested at every layer (unit + integration + E2E + accessibility).

## Features

- Three resource directories: food banks, free meal programs, public showers
- Live free-meal data from the City of Seattle open-data portal
- Search + chip filters on every resource page (synced to URL `?q=...`)
- List or map view per page (Leaflet + OpenStreetMap, no API key required)
- Light / dark / system theme with `localStorage` persistence
- English / Spanish language toggle
- Fully responsive, mobile-first, keyboard-navigable, screen-reader friendly

## Getting started

```sh
npm install
npm run dev          # http://localhost:5173
```

## Scripts

| Script                  | What it does                                              |
| ----------------------- | --------------------------------------------------------- |
| `npm run dev`           | Vite dev server                                           |
| `npm run build`         | Type-check then build for production                      |
| `npm run preview`       | Serve the production build at http://localhost:4173       |
| `npm run lint`          | ESLint flat config (with jsx-a11y)                        |
| `npm run typecheck`     | `tsc --noEmit`                                            |
| `npm run format`        | Prettier write                                            |
| `npm run test`          | Vitest watch mode                                         |
| `npm run test:run`      | One-shot Vitest run                                       |
| `npm run test:coverage` | Vitest with v8 coverage report                            |
| `npm run test:e2e`      | Playwright (Chromium / Firefox / WebKit + mobile)         |
| `npm run test:all`      | typecheck + lint + unit + e2e                             |
| `npm run geocode`       | One-shot Nominatim enrichment of `src/data/*.json` coords |

## Project layout

```
src/
  main.tsx, App.tsx, index.css
  components/
    ui/          shadcn-style primitives (button, card, input, badge, tabs, ...)
    layout/      Header, Footer, Layout, Theme/Language toggles
    cards/       FoodBankCard, MealCard, ShowerCard
    resource/    ResourceSearch, ResourceViewToggle, ResourceMap, Empty/Error states
  pages/         Home, About, FoodBanks, FreeMeals, PublicShowers, NotFound
  data/          foodBanks.json, publicShowers.json, loaders.ts
  hooks/         useFreeMeals, useResourceFilter, useDebouncedValue, useLocalStorage
  lib/           cn (clsx + tailwind-merge), url helpers
  i18n/          en.json, es.json, init
  providers/     ThemeProvider
  types/         resources.ts
  test/          setup + provider wrapper
e2e/             Playwright specs (smoke, search, theme/i18n, map, a11y, mobile)
scripts/         geocode.ts (one-shot Nominatim enrichment)
```

## Data

- `src/data/foodBanks.json` and `src/data/publicShowers.json` are community-maintained.
  Each entry can include a `coords: { lat, lng }` field to appear on the map; entries
  without coords still appear in list view.
- `src/hooks/useFreeMeals.ts` fetches `https://data.seattle.gov/resource/hmzu-x5ed.json`
  on demand, with loading / success / empty / error states and `AbortController` cleanup.
- To enrich missing coordinates, add new entries to the JSON without `coords`, then run
  `npm run geocode` (uses OpenStreetMap's Nominatim at 1 req/sec).

## Contributing

Open an issue or a pull request — corrections to listings, new resources, and
translation improvements are all welcome.

## License

See [LICENSE](./LICENSE).
