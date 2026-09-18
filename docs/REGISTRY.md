# shadcn registries

Forge exposes one registry item per component family in built deployments. Each is generated from the same pattern source used by downloaded starter packs, so the registry and the ZIP cannot drift.

| Family | Endpoint | Install with |
| --- | --- | --- |
| React | `/r/forge-system.json` | `pnpm dlx shadcn@latest add https://your-forge-domain.example/r/forge-system.json` |
| Vue | `/r/forge-system-vue.json` | `pnpm dlx shadcn-vue@latest add https://your-forge-domain.example/r/forge-system-vue.json` |
| Svelte | `/r/forge-system-svelte.json` | `pnpm dlx shadcn-svelte@latest add https://your-forge-domain.example/r/forge-system-svelte.json` |

Each item declares its kit primitives and npm dependencies. Project-specific tokens stay in the generated stylesheet and `forge.config.json`.

Angular has no registry endpoint: spartan/ui distributes components through its own Angular schematic (`ng g @spartan-ng/cli:ui <component>`) rather than a registry protocol. Angular starters get the same patterns in their ZIP.
