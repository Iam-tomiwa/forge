# Changelog

## 0.3.0 — 2026-09-17

- Optimize the site for search and sharing: complete Open Graph and Twitter metadata, a build-time social card, canonical URLs, `robots.txt`, `sitemap.xml`, `SoftwareApplication` structured data, a theme color, a skip link, and framework copy on the landing page. The origin comes from `NEXT_PUBLIC_SITE_URL`, or from Vercel, Netlify, and Cloudflare Pages automatically.
- Collapse the token panel into an accordion. It unmounts when closed, so the rendered components stop re-rendering behind a collapsed header.
- Replace the ascending-bars mark with a forge hammer, in the sidebar and the favicon.

- Generate starters for ten targets: Next.js, React + Vite, React Router, TanStack Start, Astro, Vue + Vite, Nuxt, SvelteKit, Angular, and plain HTML + JavaScript.
- Add a standalone design-system document: colors with measured contrast, a density-sized type scale, spacing, radius, elevation, motion, component contracts, and rules. Download it as markdown on its own or read it as `docs/DESIGN_SYSTEM.md` inside the ZIP.
- Choose any of 1,800+ Google fonts for headings and body. Search runs locally against a bundled index, the preview loads the webfont, and the generated stylesheet imports it as its first statement. Portable configurations move to schema 3 and only accept families that exist in the index.
- Give DataTable a loading state shaped like a table — a header row and body rows of pulsing bars, sized from its own columns and page size — in all five families, instead of the generic block it inherited from SuspenseContainer. The generic fallback now clamps its radius the way the table frame does.
- Render the real ComboBox, DataTable, buttons, and async states in the token panel. The React patterns now live in `components/patterns/*.tsx`; the wizard renders those modules and `scripts/sync-patterns.mjs` mirrors them into the generator, so the preview and the starter cannot diverge.
- Replace the component-story preview with a live token panel. The old preview kept a second, hand-maintained copy of the tokens that had already drifted from the real ones, and it could only ever mimic one component family. The panel reads `buildDesignTokens` and applies those values to itself: swatches with measured contrast, the type scale at real sizes, radius and elevation samples, and a control at the real height, in either color scheme. The wizard is seven steps instead of eight.
- Ship the website-build design skill inside every starter at `.claude/skills/website-build/SKILL.md`, bound to that project's brand guide and stack.
- Make `setup.sh` self-explanatory and executable: it documents how to run itself, the Setup view leads with `bash setup.sh`, and the ZIP preserves the executable bit.
- Add a real type scale to the token engine, emitted as Tailwind `text-*` theme keys and used by the generated compositions.
- Add a component-family pattern layer so ComboBox, DataTable, SuspenseContainer, EmptyState, ErrorState, and toasts exist natively in React, Vue, Svelte, Angular, and vanilla DOM.
- Add per-framework scaffolds with pinned, verified dependency ranges and the matching UI-kit CLI (shadcn, shadcn-vue, shadcn-svelte, spartan/ui).
- Choose the framework in the wizard; the handoff, prompt, config, and docs all follow that choice.
- Publish registry items for React, Vue, and Svelte at `/r/forge-system.json`, `/r/forge-system-vue.json`, and `/r/forge-system-svelte.json`.
- Bump the portable configuration to schema 2; version 1 configurations load as Next.js projects.
- Extend verification to every framework and project type, including Vue and Svelte script blocks, dependency pinning, and Angular template resolution.

## 0.2.0 — 2026-09-17

- Generate a bootable Next.js repository rather than context-only files.
- Add complete semantic light/dark tokens, density, shadows, motion, and contrast-aware foregrounds.
- Add portable, versioned configuration with presets, import, and export.
- Expand ComboBox, DataTable, async-state, empty, error, and toast contracts.
- Add generated AI instructions, design-system documentation, and component catalog.
- Add a shadcn-compatible registry endpoint and generated-project verification.
- Consolidate the static build so `dist/` is generated from the Next.js app.

## 0.1.0

- Initial local Forge MVP.
