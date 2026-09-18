import type { FrameworkKey } from "../types";
import { CN_UTILS, componentsDir, dependencies, escapeQuoted, eyebrow, gitignore, globalCss, json, packageJson, type ScaffoldBuilder, type ScaffoldContext } from "./shared";

/** The example composition as a single-file component. */
function homeView(context: ScaffoldContext) {
  const { name, state, framework, hasToast } = context;
  const patterns = framework.layout.patternsImport;
  if (state.projectType === "landing") {
    return `<script setup lang="ts">
import { ref } from "vue";
import { ComboBox } from "${patterns}";

const options = [
  { value: "strategy", label: "Product strategy" },
  { value: "design", label: "Interface design" },
  { value: "engineering", label: "Frontend engineering" },
];
const cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
const focus = ref("");
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
      <strong>${name}</strong>
      <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
    </header>
    <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
      <div>
        <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
        <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
        <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p>
      </div>
      <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
        <label class="mb-3 block text-body-sm font-medium">What do you need?</label>
        <ComboBox v-model="focus" :options="options" />
        <p class="mt-4 text-body-sm text-muted-foreground">Selected: {{ focus || "Nothing yet" }}</p>
      </aside>
    </section>
    <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">
      <article v-for="card in cards" :key="card" class="rounded-xl border bg-card p-6">
        <h2 class="font-medium">{{ card }}</h2>
        <p class="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p>
      </article>
    </section>
  </main>
</template>
`;
  }

  const toastImport = hasToast ? `import { ComboBox, DataTable, toast, type DataTableColumn } from "${patterns}";` : `import { ComboBox, DataTable, type DataTableColumn } from "${patterns}";`;
  const action = hasToast ? `@click="toast.success('Project created')"` : `type="button"`;
  return `<script setup lang="ts">
import { ref } from "vue";
${toastImport}

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
const filter = ref("");
</script>

<template>
  <main class="min-h-screen bg-background text-foreground">
    <header class="flex items-center justify-between border-b px-6 py-4">
      <strong>${name}</strong>
      <button class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${action}>New project</button>
    </header>
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
      <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p class="text-body-sm text-muted-foreground">${eyebrow(context)}</p>
          <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
        </div>
        <div class="w-full md:w-72"><ComboBox v-model="filter" :options="filters" /></div>
      </div>
      <section class="grid gap-4 md:grid-cols-3">
        <article v-for="[label, value] in stats" :key="label" class="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]">
          <p class="text-body-sm text-muted-foreground">{{ label }}</p>
          <strong class="mt-3 block text-h2">{{ value }}</strong>
        </article>
      </section>
      <DataTable :columns="columns" :rows="rows" selectable :page-size="5" />
    </div>
  </main>
</template>
`;
}

function vueComponentsJson(context: ScaffoldContext, aliasRoot: string) {
  return json({
    $schema: "https://shadcn-vue.com/schema.json",
    style: "reka-nova",
    typescript: true,
    tailwind: { css: context.framework.layout.styles, baseColor: "neutral", cssVariables: true },
    iconLibrary: "lucide",
    aliases: {
      components: `${aliasRoot}/components`,
      composables: `${aliasRoot}/composables`,
      utils: `${aliasRoot}/lib/utils`,
      ui: `${aliasRoot}/components/ui`,
      lib: `${aliasRoot}/lib`,
    },
  });
}

/** Vue 3 with Vite. */
const vueVite: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  const patterns = context.framework.layout.patternsImport;
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "vite", build: "vite build", preview: "vite preview", typecheck: "vue-tsc --noEmit" },
      dependencies: dependencies(["@vueuse/core", "class-variance-authority", "clsx", "reka-ui", "tailwind-merge", "vue", ...context.packages]),
      devDependencies: dependencies(["@tailwindcss/vite", "@types/node", "@vitejs/plugin-vue", "shadcn-vue", "tailwindcss", "tw-animate-css", "typescript", "vite", "vue-tsc"]),
    }),
    "tsconfig.json": json({
      compilerOptions: { target: "ES2022", lib: ["ES2022", "DOM", "DOM.Iterable"], module: "ESNext", moduleResolution: "bundler", jsx: "preserve", strict: true, noEmit: true, skipLibCheck: true, esModuleInterop: true, resolveJsonModule: true, isolatedModules: true, types: ["vite/client"], baseUrl: ".", paths: { "@/*": ["./src/*"] } },
      include: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue"],
    }),
    "vite.config.ts": `import { fileURLToPath } from "node:url";\nimport tailwindcss from "@tailwindcss/vite";\nimport vue from "@vitejs/plugin-vue";\nimport { defineConfig } from "vite";\n\nexport default defineConfig({\n  plugins: [vue(), tailwindcss()],\n  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },\n});\n`,
    "index.html": `<!doctype html>\n<html lang="en" class="${themeClass}">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>${name}</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"></script>\n  </body>\n</html>\n`,
    "components.json": vueComponentsJson(context, "@"),
    ".gitignore": gitignore(["dist-ssr", "*.local"]),
    "src/env.d.ts": `/// <reference types="vite/client" />\n`,
    "src/assets/index.css": globalCss(context),
    "src/main.ts": `import { createApp } from "vue";\nimport App from "./App.vue";\nimport "./assets/index.css";\n\ncreateApp(App).mount("#app");\n`,
    "src/App.vue": `<script setup lang="ts">\nimport HomeView from "@/components/HomeView.vue";\n${hasToast ? `import { ToastProvider } from "${patterns}";\n` : ""}</script>\n\n<template>\n  <HomeView />\n${hasToast ? "  <ToastProvider />\n" : ""}</template>\n`,
    [`${components}/HomeView.vue`]: homeView(context),
    "src/lib/utils.ts": CN_UTILS,
  };
};

/** Nuxt 4 with the shadcn-nuxt module. */
const nuxt: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  const patterns = context.framework.layout.patternsImport;
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { build: "nuxt build", dev: "nuxt dev", generate: "nuxt generate", preview: "nuxt preview", postinstall: "nuxt prepare", typecheck: "nuxt typecheck" },
      dependencies: dependencies(["@vueuse/core", "class-variance-authority", "clsx", "nuxt", "reka-ui", "tailwind-merge", "vue", ...context.packages]),
      devDependencies: dependencies(["@tailwindcss/vite", "shadcn-nuxt", "tailwindcss", "tw-animate-css", "typescript", "vue-tsc"]),
    }),
    "tsconfig.json": json({
      files: [],
      references: [{ path: "./.nuxt/tsconfig.app.json" }, { path: "./.nuxt/tsconfig.server.json" }, { path: "./.nuxt/tsconfig.shared.json" }, { path: "./.nuxt/tsconfig.node.json" }],
    }),
    "nuxt.config.ts": `import tailwindcss from "@tailwindcss/vite";\n\nexport default defineNuxtConfig({\n  compatibilityDate: "2026-01-01",\n  modules: ["shadcn-nuxt"],\n  css: ["~/assets/css/main.css"],\n  vite: { plugins: [tailwindcss()] },\n  app: { head: { title: "${escapeQuoted(name)}", htmlAttrs: { lang: "en", class: "${themeClass}" }, meta: [{ name: "description", content: "Generated with Forge" }] } },\n  shadcn: { prefix: "", componentDir: "./app/components/ui" },\n});\n`,
    "components.json": vueComponentsJson(context, "@"),
    ".gitignore": gitignore([".nuxt", ".output", ".data", ".nitro", ".cache"]),
    "app/assets/css/main.css": globalCss(context),
    "app/app.vue": `<script setup lang="ts">\n${hasToast ? `import { ToastProvider } from "${patterns}";\n` : ""}</script>\n\n<template>\n  <NuxtPage />\n${hasToast ? "  <ToastProvider />\n" : ""}</template>\n`,
    "app/pages/index.vue": `<script setup lang="ts">\nimport HomeView from "@/components/HomeView.vue";\n</script>\n\n<template>\n  <HomeView />\n</template>\n`,
    [`${components}/HomeView.vue`]: homeView(context),
    "app/lib/utils.ts": CN_UTILS,
  };
};

export const VUE_SCAFFOLDS: Partial<Record<FrameworkKey, ScaffoldBuilder>> = { "vue-vite": vueVite, nuxt };
