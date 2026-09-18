# Local project reference catalog

Forge was shaped against the projects in `/Users/tomiwa/Documents`. This catalog records the reusable patterns that were found without copying project-specific content, data, credentials, or branding into the bootstrapper.

## What repeats across the library

| Recipe | Projects used as references | Useful building blocks | Forge treatment |
| --- | --- | --- | --- |
| Operations dashboard | `hk-glass`, `rapkids-backoffice`, `raptures-backoffice`, `mrl` | Admin shell, sidebar/topbar, page headers, breadcrumbs, stat cards, data tables, search/filter controls, date pickers, charts, CRUD/bulk-upload dialogs, empty/loading/error states | Automatic dashboard recipe; includes the shared patterns and recommends `recharts`, `zod`, `react-hook-form`, and `@tanstack/react-query` when needed |
| Narrative marketing site | `henderson-n-hendrix`, `hephzibar`, `glasstronic-lp`, `teamtechville`, `ajayitomiwa-portfolio`, `Raptures-Website/raptures-landing-page`, `illumra` | Header/nav, hero, section labels, services/features, project cards, galleries, carousels, FAQ, testimonials, contact/consultation forms, footer, motion primitives | Automatic landing recipe; sections are described as reorderable compositions and motion remains optional |
| Product application | `believers-bridge`, `rapture-frontend`, `rapkids-frontend`, `illumra`, `mrl` | Auth/onboarding, app shell, route frames, feature widgets, search, grids, query states, forms, share/payment/confirmation modals, mobile navigation | Automatic web-app recipe; generated prompt separates route composition from reusable feature widgets |
| Commerce/theme system | `bumpa/bumpa-themes` | Storefront sections, product cards, brand sections, form controls, checkout/cart modals, theme packages | Reference only for future theme/storefront presets; not part of the current three-type MVP |

## First reusable pattern bundle

The most consistently repeated cross-project primitives became actual local source files in every Forge ZIP:

- `components/patterns/combo-box.tsx` — searchable selection built from shadcn Command and Popover.
- `components/patterns/data-table.tsx` — generic typed table shell with an explicit empty state.
- `components/patterns/empty-state.tsx` — calm no-data surface with optional action and icon.
- `components/patterns/error-state.tsx` — recoverable error surface with an optional reset action.
- `components/patterns/suspense-container.tsx` — shared loading boundary with a replaceable fallback.
- `components/patterns/toast-provider.tsx` — Sonner-backed feedback provider for success and error notifications.

These are deliberately small foundations. Forge maps them automatically: landing pages get ComboBox, while dashboards and web apps get the full kit. The dependency chain is `DataTable → SuspenseContainer → EmptyState + ErrorState`; Sonner is included alongside the stateful project types. The continuation prompt tells the next AI model to extend them with domain rules rather than reintroducing one-off implementations in every route.

## Other projects cataloged

The scan also covered `Raptures-Website/studio-raptures-blog`, `believers-bridge`, `hello-tfw`, `health-enlight-initiative`, `my-portfolio`, `yp1-front-end`, `momenttrack`, `navigan`, `one-click`, `datacamp`, `glasstronic-lp`, and the supporting project folders under `Navigan Projects`, `bumpa`, and `Raptures-Website`.

The Angular/Electron and older CRA/Vite projects were kept as historical context rather than suggested Next.js templates. Their useful interaction ideas can be extracted later into explicit recipes without mixing frameworks into the MVP output.

**Amended in 0.3:** the single-framework constraint described here applied to 0.1 and 0.2. Forge now generates for nine frameworks across React, Vue, Svelte, and Angular; see [COMPATIBILITY.md](COMPATIBILITY.md).

## Stack signals

The strongest modern common denominator is Next.js App Router + React + TypeScript + shadcn/Radix + Tailwind CSS variables + Lucide icons. `motion`/`framer-motion`, `zod`, `react-hook-form`, `@tanstack/react-query`, and `recharts` appear as task-specific additions rather than a mandatory base. Forge keeps those optional by recipe so the generated project stays lean.
