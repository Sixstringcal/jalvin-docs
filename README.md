# Jalvin Developer Docs

The official documentation site for the Jalvin programming language, built with Jalvin itself.

## What this is

This is a single-page documentation app that covers the full Jalvin language — lexical structure, types, declarations, control flow, coroutines, null safety, the Bibi HTTP client, state management, UI components, and more. It runs in the browser via Vite and the `@jalvin/vite-plugin` compiler.

The site is intentionally self-hosting: everything from the sidebar to the page layout to the code blocks is written in `.jalvin` files. If something looks broken, it is probably a good bug report.

## Getting started

Install dependencies and start the dev server:

```
npm install
npm run dev
```

The app will be available at http://localhost:3000.

To build for production:

```
npm run build
```

Output goes to `dist/`. You can preview the production build with `npm run preview`.

## Project structure

```
src/
  DocsApp.jalvin          # Root component and page router
  components/
    DocComponents.jalvin  # Shared primitives (CodeBlock, Callout, DocTable, etc.)
    DocTheme.jalvin       # Theme constants and the DocTheme wrapper
    Sidebar.jalvin        # Navigation sidebar
  pages/
    IntroductionPage.jalvin
    GettingStartedPage.jalvin
    ... (one file per documentation page)
```

## Tech stack

- [Jalvin](https://jalvin.dev) — the language everything is written in
- [Vite](https://vitejs.dev) — dev server and bundler
- [@jalvin/vite-plugin](https://www.npmjs.com/package/@jalvin/vite-plugin) — compiles `.jalvin` files on the fly
- [@jalvin/ui](https://www.npmjs.com/package/@jalvin/ui) — UI component library
- [@jalvin/runtime](https://www.npmjs.com/package/@jalvin/runtime) — standard library, state, coroutines

## Adding a page

1. Create `src/pages/YourPage.jalvin` and export a component function.
2. Add an import and a route entry in `src/DocsApp.jalvin`.
3. Add a `NavItem` entry in `src/components/Sidebar.jalvin`.

## Notes

Requires Node.js 18 or later. The Jalvin compiler is pulled in through `@jalvin/vite-plugin` — no separate install step needed.
