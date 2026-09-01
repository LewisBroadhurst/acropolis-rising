# Acropolis Rising

A browser city-builder set in ancient Greece — a small homage to _Zeus: Master of Olympus_.

**▶️ Play it: https://lewisbroadhurst.github.io/acropolis-rising/**

No install, no account, nothing to download. Your city is saved in your browser's local storage.

## The game

You lay out a city on a 20×14 tile map of grass, coast, forest, hill, mountain and water, then
keep it alive:

- **Paths** connect everything. Producers get +10% output next to one, and food only reaches
  houses along a path.
- **Houses** don't grow on their own — an **Agora** has to walk food to them. Put a culture
  venue (gym, theatre, college) within three tiles and houses become apartment blocks with
  double capacity.
- **Gathering and production** — lumber camps, quarries, mines, docks and farms feed forges,
  granaries and the rest. Producers deliver to a **Storehouse** within range.
- **Temples** to Zeus, Poseidon, Demeter, Hephaestus and Athena buy you **blessings** with
  divine favour: a fishing run, a harvest, an industry boost, gold, or a happiness lift.
- Citizens need feeding and employing. Idle workers cost you; starvation costs you more.

## Development

Requires [pnpm](https://pnpm.io) and Node 24.

```sh
pnpm install
pnpm dev          # http://localhost:4200
```

Other tasks:

```sh
pnpm test         # vitest
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
pnpm format       # prettier --write .
pnpm build        # production build into dist/
pnpm preview      # serve the production build
```

### Layout

| Path              | What's in it                                                               |
| ----------------- | -------------------------------------------------------------------------- |
| `src/game/`       | Pure simulation — map generation, RNG, the tick loop, pathing, saving      |
| `src/components/` | React UI — canvas renderer, palette, side panel, top bar, tutorial, toasts |
| `src/app/`        | App shell wiring the two together                                          |

The simulation in `src/game/` has no React in it and is covered by unit tests; the UI layer is
a thin shell over it.

## Deployment

Every push to `main` builds the app and publishes it to GitHub Pages — see
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). Because Pages
serves project sites under `/<repo-name>/`, production builds set Vite's `base` to
`/acropolis-rising/`; override it with `VITE_BASE_PATH` if you ever host it elsewhere.

## History

This project started life as an app inside the
[LewisBroadhurst/monorepo](https://github.com/LewisBroadhurst/monorepo) Nx workspace and was
split out here with its history intact. Almost all of the code was written by Claude Code.

## Licence

MIT — see [LICENSE](LICENSE).
