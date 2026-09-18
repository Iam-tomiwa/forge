# Compatibility

Forge 0.3 generates starters for ten targets across five component families. Every family carries the same token contract, the same pattern names, and the same documented state contract.

## Supported frameworks

| Framework | Family | Components from | Notes |
| --- | --- | --- | --- |
| Next.js 16 (App Router) | React | shadcn/ui | Server components by default |
| React + Vite | React | shadcn/ui | No server runtime |
| React Router 8 (framework mode) | React | shadcn/ui | Route modules, loaders, actions |
| TanStack Start | React | shadcn/ui | `src/routeTree.gen.ts` is generated on first run |
| Astro 7 | React | shadcn/ui | Interactive patterns run as React islands |
| Vue 3 + Vite | Vue | shadcn-vue | Reka UI primitives |
| Nuxt 4 | Vue | shadcn-vue | Through the `shadcn-nuxt` module |
| SvelteKit (Svelte 5) | Svelte | shadcn-svelte | Runes, Bits UI primitives |
| Angular 22 | Angular | spartan/ui | Standalone, zoneless, signal-based |
| HTML + JS on Vite | Vanilla | Forge primitives | No framework and no component CLI; patterns are DOM factories |

Shared across all of them:

- TypeScript (Angular pins TypeScript 6 because Angular 22 requires it; every other framework uses TypeScript 5.9). The vanilla target is plain JavaScript with JSDoc types, checked by `tsc --checkJs`
- Tailwind CSS v4 with semantic CSS variables
- Current evergreen browsers

## Runtime requirements

- Node.js 20+ for most frameworks
- Angular 22 requires Node.js 22.22.3+, 24.15+, or 26+; the Angular CLI refuses to run below that

## Deliberate choices

- **`build` runs the bundler; `typecheck` is a separate script.** Kit components are vendored into the project, so an upstream type issue should never block a bundle. Generated `AGENTS.md` asks an AI builder to run both.
- **spartan/ui is initialized with a theme prefix.** `ng g @spartan-ng/cli:init --prefix theme-spartan` scopes spartan's own palette to a class that is never applied, which leaves the generated Forge tokens as the global contract.
- **Typefaces come from a bundled index, not a live API.** Google's font metadata sends no CORS header and its Developer API needs a key, so `scripts/sync-google-fonts.mjs` bundles 1,800+ families at build time: search is local and instant, and the builder works offline. Selecting a family is the one outbound request the builder makes — it loads that webfont from `fonts.googleapis.com` for the preview, exactly as the generated stylesheet does.
- **Nothing in Forge restates a token value.** The wizard's token panel, the design-system document, and the generated stylesheet all read `lib/design-tokens.ts`; `scaleLength` and `RADIUS_STEPS` are shared rather than copied. A hand-maintained preview is how the previous one started lying about the radius.
- **Forge patterns declare the packages they import.** `radix-ui`, `cmdk`, `class-variance-authority`, `@vueuse/core`, `bits-ui`, and the family's lucide package are written into `package.json` rather than left to the kit CLI's install step.
- **The vanilla target trades shadcn for owned primitives.** There is no shadcn distribution without a framework, so Forge writes `src/ui/primitives.js` (button, card, input, badge) and implements the six patterns as DOM factories. Everything else — tokens, type scale, docs, state contract — is identical.
- **Solid is not included.** `shadcn-solid` exists but tracks an older Tailwind and primitive generation; adding it is a data change in `lib/frameworks.ts` plus one pattern module in `lib/patterns/` when that changes.

## Versions

Every package version Forge writes into a generated `package.json` lives in `lib/scaffolds/versions.ts` and was verified against the npm registry when this release was cut. Review this document and run `npm run verify` before changing a major framework version.

## API differences between families

The pattern components expose the same names and states everywhere, in each framework's own idiom:

| | React | Vue | Svelte | Angular |
| --- | --- | --- | --- | --- |
| ComboBox value | `value` + `onValueChange` | `v-model` | `bind:value` | `[(value)]` |
| Class override | `className` | `class` prop | `class` prop | host binding merges `class` |
| Slots | `ReactNode` props | named slots | snippets | `ng-content` |
| Error recovery | `reset` callback | `reset` prop | `reset` prop | `[recoverable]` + `(retry)` |

The vanilla family exposes factories — `createComboBox`, `createDataTable` — returning a DOM node plus setters (`setValue`, `setRows`, `setState`), each accepting a `class` option.
