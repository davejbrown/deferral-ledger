# Deferral Ledger

Deferral Ledger prices the cost of deferring road repairs and compares paving strategies on the same budget. It runs on a schematic road network for Forsyth and Guilford counties in North Carolina, with simulated figures.

## How it's built

The whole app is one self-contained HTML file: `src/deferral-ledger.html`. Edit that file to change the app.

- **GitHub Pages:** `.github/workflows/pages.yml` publishes that file as the site on every push to `main`.
- **Local server:** the TanStack Start project in this repo serves the same file at `/`.

## Run it locally

Open `src/deferral-ledger.html` in a browser, or run the dev server:

```sh
bun install
bun run dev
```

Other scripts: `bun run build`, `bun run test`, `bun run lint`.
