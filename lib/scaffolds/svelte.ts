import type { FrameworkKey } from "../types";
import { CN_UTILS, componentsDir, dependencies, escapeText, eyebrow, gitignore, globalCss, json, packageJson, type ScaffoldBuilder, type ScaffoldContext } from "./shared";

/**
 * shadcn-svelte primitives import these prop helpers from the same module as
 * cn(), so the generated utils file has to provide them.
 */
const SVELTE_UTILS = `${CN_UTILS}
export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, "child"> : T;
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
`;

function homeView(context: ScaffoldContext) {
  const { name, state, framework, hasToast } = context;
  const patterns = framework.layout.patternsImport;
  if (state.projectType === "landing") {
    return `<script lang="ts">
  import { ComboBox } from "${patterns}";

  const options = [
    { value: "strategy", label: "Product strategy" },
    { value: "design", label: "Interface design" },
    { value: "engineering", label: "Frontend engineering" },
  ];
  const cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
  let focus = $state("");
</script>

<main class="min-h-screen bg-background text-foreground">
  <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
    <strong>${escapeText(name)}</strong>
    <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
  </header>
  <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
    <div>
      <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
      <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
      <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p>
    </div>
    <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
      <span class="mb-3 block text-body-sm font-medium">What do you need?</span>
      <ComboBox {options} bind:value={focus} />
      <p class="mt-4 text-body-sm text-muted-foreground">Selected: {focus || "Nothing yet"}</p>
    </aside>
  </section>
  <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">
    {#each cards as card (card)}
      <article class="rounded-xl border bg-card p-6">
        <h2 class="font-medium">{card}</h2>
        <p class="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p>
      </article>
    {/each}
  </section>
</main>
`;
  }

  const imports = hasToast ? `import { ComboBox, DataTable, toast } from "${patterns}";` : `import { ComboBox, DataTable } from "${patterns}";`;
  const action = hasToast ? `onclick={() => toast.success("Project created")}` : "";
  return `<script lang="ts">
  ${imports}
  import type { DataTableColumn } from "${patterns}";

  type Project = { id: string; name: string; status: string; owner: string };

  const rows: Project[] = [
    { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
    { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
    { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
  ];
  const columns: DataTableColumn<Project>[] = [
    { key: "name", header: "Project", sortable: true },
    { key: "status", header: "Status" },
    { key: "owner", header: "Owner" },
  ];
  const filters = [
    { value: "all", label: "All projects" },
    { value: "ready", label: "Ready" },
    { value: "draft", label: "Draft" },
  ];
  const stats: Array<[string, string]> = [["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]];
  let filter = $state("");
</script>

<main class="min-h-screen bg-background text-foreground">
  <header class="flex items-center justify-between border-b px-6 py-4">
    <strong>${escapeText(name)}</strong>
    <button type="button" class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${action}>New project</button>
  </header>
  <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
    <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p class="text-body-sm text-muted-foreground">${eyebrow(context)}</p>
        <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
      </div>
      <div class="w-full md:w-72"><ComboBox options={filters} bind:value={filter} /></div>
    </div>
    <section class="grid gap-4 md:grid-cols-3">
      {#each stats as [label, value] (label)}
        <article class="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]">
          <p class="text-body-sm text-muted-foreground">{label}</p>
          <strong class="mt-3 block text-h2">{value}</strong>
        </article>
      {/each}
    </section>
    <DataTable {columns} {rows} selectable pageSize={5} />
  </div>
</main>
`;
}

/** SvelteKit with Svelte 5 runes. */
const sveltekit: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  const patterns = context.framework.layout.patternsImport;
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "vite dev", build: "vite build", preview: "vite preview", prepare: "svelte-kit sync", typecheck: "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json" },
      dependencies: dependencies(["bits-ui", "clsx", "tailwind-merge", "tailwind-variants", ...context.packages]),
      devDependencies: dependencies(["@sveltejs/adapter-auto", "@sveltejs/kit", "@sveltejs/vite-plugin-svelte", "@tailwindcss/vite", "shadcn-svelte", "svelte", "svelte-check", "tailwindcss", "tw-animate-css", "typescript", "vite"]),
    }),
    "tsconfig.json": json({
      extends: "./.svelte-kit/tsconfig.json",
      compilerOptions: { allowJs: true, checkJs: true, esModuleInterop: true, forceConsistentCasingInFileNames: true, resolveJsonModule: true, skipLibCheck: true, sourceMap: true, strict: true, moduleResolution: "bundler" },
    }),
    "svelte.config.js": `import adapter from "@sveltejs/adapter-auto";\nimport { vitePreprocess } from "@sveltejs/vite-plugin-svelte";\n\n/** @type {import("@sveltejs/kit").Config} */\nexport default {\n  preprocess: vitePreprocess(),\n  kit: { adapter: adapter() },\n};\n`,
    "vite.config.ts": `import { sveltekit } from "@sveltejs/kit/vite";\nimport tailwindcss from "@tailwindcss/vite";\nimport { defineConfig } from "vite";\n\nexport default defineConfig({ plugins: [tailwindcss(), sveltekit()] });\n`,
    "components.json": json({
      $schema: "https://shadcn-svelte.com/schema.json",
      tailwind: { css: context.framework.layout.styles, baseColor: "neutral" },
      aliases: { components: "$lib/components", utils: "$lib/utils", ui: "$lib/components/ui", hooks: "$lib/hooks", lib: "$lib" },
      typescript: true,
      registry: "https://shadcn-svelte.com/registry",
    }),
    ".gitignore": gitignore([".svelte-kit", "build", ".vercel"]),
    "src/app.html": `<!doctype html>\n<html lang="en" class="${themeClass}">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    %sveltekit.head%\n  </head>\n  <body data-sveltekit-preload-data="hover">\n    <div style="display: contents">%sveltekit.body%</div>\n  </body>\n</html>\n`,
    "src/app.d.ts": `declare global {\n  namespace App {}\n}\n\nexport {};\n`,
    "src/app.css": globalCss(context),
    "src/routes/+layout.svelte": `<script lang="ts">\n  import "../app.css";\n${hasToast ? `  import { ToastProvider } from "${patterns}";\n` : ""}\n  let { children } = $props();\n</script>\n\n{@render children()}\n${hasToast ? "<ToastProvider />\n" : ""}`,
    "src/routes/+page.svelte": `<script lang="ts">\n  import HomeView from "$lib/components/home-view.svelte";\n</script>\n\n<svelte:head>\n  <title>${escapeText(name)}</title>\n  <meta name="description" content="Generated with Forge" />\n</svelte:head>\n\n<HomeView />\n`,
    [`${components}/home-view.svelte`]: homeView(context),
    "src/lib/utils.ts": SVELTE_UTILS,
  };
};

export const SVELTE_SCAFFOLDS: Partial<Record<FrameworkKey, ScaffoldBuilder>> = { sveltekit };
