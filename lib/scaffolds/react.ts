import type { FrameworkKey } from "../types";
import { CN_UTILS, componentsDir, dependencies, escapeQuoted, eyebrow, gitignore, globalCss, json, packageJson, type ScaffoldBuilder, type ScaffoldContext } from "./shared";

/** The example composition. Every React framework renders this one component. */
function homeView(context: ScaffoldContext) {
  const { name, state, framework, hasToast } = context;
  const patterns = framework.layout.patternsImport;
  if (state.projectType === "landing") {
    return `"use client";

import { useState } from "react";
import { ComboBox } from "${patterns}";

const options = [{ value: "strategy", label: "Product strategy" }, { value: "design", label: "Interface design" }, { value: "engineering", label: "Frontend engineering" }];

export function HomeView() {
  const [focus, setFocus] = useState("");
  return <main className="min-h-screen bg-background text-foreground"><header className="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5"><strong>${name}</strong><a className="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a></header><section className="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]"><div><p className="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p><h1 className="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1><p className="mt-7 max-w-2xl text-body-lg text-muted-foreground">This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.</p></div><aside className="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]"><label className="mb-3 block text-body-sm font-medium">What do you need?</label><ComboBox options={options} value={focus} onValueChange={setFocus} /><p className="mt-4 text-body-sm text-muted-foreground">Selected: {focus || "Nothing yet"}</p></aside></section><section id="contact" className="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">{["Clear hierarchy", "Reusable sections", "Accessible states"].map((item) => <article className="rounded-xl border bg-card p-6" key={item}><h2 className="font-medium">{item}</h2><p className="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p></article>)}</section></main>;
}
`;
  }

  const toastImport = hasToast ? `import { toast } from "${patterns}";\n` : "";
  const action = hasToast ? `onClick={() => toast.success("Project created")}` : `type="button"`;
  return `"use client";

import { useState } from "react";
${toastImport}import { ComboBox, DataTable, type DataTableColumn } from "${patterns}";

type Project = { id: string; name: string; status: string; owner: string };
const rows: Project[] = [{ id: "1", name: "Northstar", status: "Ready", owner: "Alex" }, { id: "2", name: "Harbor", status: "Review", owner: "Mina" }, { id: "3", name: "Field notes", status: "Draft", owner: "Sam" }];
const columns: DataTableColumn<Project>[] = [{ key: "name", header: "Project", sortable: true }, { key: "status", header: "Status" }, { key: "owner", header: "Owner" }];

export function HomeView() {
  const [filter, setFilter] = useState("");
  return <main className="min-h-screen bg-background text-foreground"><header className="flex items-center justify-between border-b px-6 py-4"><strong>${name}</strong><button className="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" ${action}>New project</button></header><div className="mx-auto grid max-w-7xl gap-8 px-6 py-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-body-sm text-muted-foreground">${eyebrow(context)}</p><h1 className="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1></div><div className="w-full md:w-72"><ComboBox options={[{ value: "all", label: "All projects" }, { value: "ready", label: "Ready" }, { value: "draft", label: "Draft" }]} value={filter} onValueChange={setFilter} /></div></div><section className="grid gap-4 md:grid-cols-3">{[["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]].map(([label, value]) => <article className="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]" key={label}><p className="text-body-sm text-muted-foreground">{label}</p><strong className="mt-3 block text-h2">{value}</strong></article>)}</section><DataTable columns={columns} rows={rows} selectable pageSize={5} /></div></main>;
}
`;
}

function reactComponentsJson(context: ScaffoldContext, options: { rsc: boolean; aliasRoot: string }) {
  const { framework } = context;
  return json({
    $schema: "https://ui.shadcn.com/schema.json",
    style: "radix-nova",
    rsc: options.rsc,
    tsx: true,
    tailwind: { css: framework.layout.styles, baseColor: "neutral", cssVariables: true },
    iconLibrary: "lucide",
    aliases: {
      components: `${options.aliasRoot}/components`,
      utils: `${options.aliasRoot}/lib/utils`,
      ui: `${options.aliasRoot}/components/ui`,
      lib: `${options.aliasRoot}/lib`,
      hooks: `${options.aliasRoot}/hooks`,
    },
  });
}

function reactRuntimeDependencies(context: ScaffoldContext, extra: string[]) {
  // shadcn/ui primitives are built on the radix-ui package and cva variants, and
  // the ComboBox pattern composes the command primitive, which is cmdk.
  const patternDependencies = context.patternKeys.includes("combo-box") ? ["cmdk"] : [];
  return dependencies(["class-variance-authority", "clsx", "radix-ui", "tailwind-merge", ...patternDependencies, ...extra, ...context.packages]);
}

const reactDevTypes = ["@types/react", "@types/react-dom"];

/** Next.js App Router — the shadcn CLI's primary target. */
const next: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  return {
    "package.json": packageJson({
      slug,
      scripts: { dev: "next dev", build: "next build", start: "next start", typecheck: "tsc --noEmit" },
      dependencies: reactRuntimeDependencies(context, ["next", "react", "react-dom"]),
      devDependencies: dependencies(["@tailwindcss/postcss", "@types/node", ...reactDevTypes, "shadcn", "tailwindcss", "tw-animate-css", "typescript"]),
    }),
    "tsconfig.json": json({
      compilerOptions: { target: "ES2017", lib: ["dom", "dom.iterable", "esnext"], allowJs: false, skipLibCheck: true, strict: true, noEmit: true, esModuleInterop: true, module: "esnext", moduleResolution: "bundler", resolveJsonModule: true, isolatedModules: true, jsx: "react-jsx", incremental: true, plugins: [{ name: "next" }], paths: { "@/*": ["./*"] } },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      exclude: ["node_modules"],
    }),
    "next.config.ts": `import type { NextConfig } from "next";\n\nconst nextConfig: NextConfig = {};\nexport default nextConfig;\n`,
    "postcss.config.mjs": `export default { plugins: { "@tailwindcss/postcss": {} } };\n`,
    "next-env.d.ts": `/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n`,
    "components.json": reactComponentsJson(context, { rsc: true, aliasRoot: "@" }),
    ".gitignore": gitignore([".next", "out", "next-env.d.ts"]),
    "app/globals.css": globalCss(context, { shadcnLayer: true }),
    "app/layout.tsx": `import type { Metadata } from "next";\nimport "./globals.css";\nimport { Providers } from "@/components/providers";\n\nexport const metadata: Metadata = { title: "${escapeQuoted(name)}", description: "Generated with Forge" };\n\nexport default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {\n  return <html lang="en" className="${themeClass}" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;\n}\n`,
    "app/page.tsx": `import { HomeView } from "@/components/home-view";\n\nexport default function Page() {\n  return <HomeView />;\n}\n`,
    [`${components}/home-view.tsx`]: homeView(context),
    "components/providers.tsx": `"use client";\n\n${hasToast ? `import { ToastProvider } from "${context.framework.layout.patternsImport}";\n` : ""}\nexport function Providers({ children }: { children: React.ReactNode }) {\n  return <>{children}${hasToast ? "<ToastProvider />" : ""}</>;\n}\n`,
    "lib/utils.ts": CN_UTILS,
  };
};

/** React + Vite: a single-page app with no server runtime. */
const reactVite: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "vite", build: "vite build", preview: "vite preview", typecheck: "tsc --noEmit" },
      dependencies: reactRuntimeDependencies(context, ["react", "react-dom"]),
      devDependencies: dependencies(["@tailwindcss/vite", "@types/node", ...reactDevTypes, "@vitejs/plugin-react", "shadcn", "tailwindcss", "tw-animate-css", "typescript", "vite"]),
    }),
    "tsconfig.json": json({
      compilerOptions: { target: "ES2022", lib: ["ES2022", "DOM", "DOM.Iterable"], module: "ESNext", moduleResolution: "bundler", jsx: "react-jsx", strict: true, noEmit: true, skipLibCheck: true, esModuleInterop: true, resolveJsonModule: true, isolatedModules: true, types: ["vite/client"], baseUrl: ".", paths: { "@/*": ["./src/*"] } },
      include: ["src"],
    }),
    "vite.config.ts": `import { fileURLToPath } from "node:url";\nimport tailwindcss from "@tailwindcss/vite";\nimport react from "@vitejs/plugin-react";\nimport { defineConfig } from "vite";\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },\n});\n`,
    "index.html": `<!doctype html>\n<html lang="en" class="${themeClass}">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>${name}</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.tsx"></script>\n  </body>\n</html>\n`,
    "components.json": reactComponentsJson(context, { rsc: false, aliasRoot: "@" }),
    ".gitignore": gitignore(["dist-ssr", "*.local"]),
    "src/index.css": globalCss(context, { shadcnLayer: true }),
    "src/main.tsx": `import { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport App from "./App";\nimport "./index.css";\n\ncreateRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);\n`,
    "src/App.tsx": `import { HomeView } from "@/components/home-view";\n${hasToast ? `import { ToastProvider } from "${context.framework.layout.patternsImport}";\n` : ""}\nexport default function App() {\n  return <><HomeView />${hasToast ? "<ToastProvider />" : ""}</>;\n}\n`,
    [`${components}/home-view.tsx`]: homeView(context),
    "src/lib/utils.ts": CN_UTILS,
  };
};

/** React Router framework mode: server rendering, route modules, loaders. */
const reactRouter: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  const toastMount = hasToast ? `\n        <ToastProvider />` : "";
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "react-router dev", build: "react-router build", start: "react-router-serve ./build/server/index.js", typecheck: "react-router typegen && tsc --noEmit" },
      dependencies: reactRuntimeDependencies(context, ["@react-router/node", "@react-router/serve", "isbot", "react", "react-dom", "react-router"]),
      devDependencies: dependencies(["@react-router/dev", "@tailwindcss/vite", "@types/node", ...reactDevTypes, "shadcn", "tailwindcss", "tw-animate-css", "typescript", "vite", "vite-tsconfig-paths"]),
    }),
    "tsconfig.json": json({
      compilerOptions: { target: "ES2022", lib: ["DOM", "DOM.Iterable", "ES2022"], module: "ESNext", moduleResolution: "bundler", jsx: "react-jsx", strict: true, noEmit: true, skipLibCheck: true, esModuleInterop: true, resolveJsonModule: true, isolatedModules: true, types: ["node", "vite/client"], rootDirs: [".", "./.react-router/types"], baseUrl: ".", paths: { "~/*": ["./app/*"] } },
      include: ["**/*.ts", "**/*.tsx", ".react-router/types/**/*"],
    }),
    "react-router.config.ts": `import type { Config } from "@react-router/dev/config";\n\nexport default { ssr: true } satisfies Config;\n`,
    "vite.config.ts": `import { reactRouter } from "@react-router/dev/vite";\nimport tailwindcss from "@tailwindcss/vite";\nimport { defineConfig } from "vite";\nimport tsconfigPaths from "vite-tsconfig-paths";\n\nexport default defineConfig({ plugins: [tailwindcss(), reactRouter(), tsconfigPaths()] });\n`,
    "components.json": reactComponentsJson(context, { rsc: false, aliasRoot: "~" }),
    ".gitignore": gitignore(["build", ".react-router"]),
    "app/app.css": globalCss(context, { shadcnLayer: true }),
    "app/root.tsx": `import type { ReactNode } from "react";\nimport { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";\n${hasToast ? `import { ToastProvider } from "${context.framework.layout.patternsImport}";\n` : ""}import "./app.css";\n\nexport function Layout({ children }: { children: ReactNode }) {\n  return (\n    <html lang="en" className="${themeClass}">\n      <head>\n        <meta charSet="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <Meta />\n        <Links />\n      </head>\n      <body>\n        {children}${toastMount}\n        <ScrollRestoration />\n        <Scripts />\n      </body>\n    </html>\n  );\n}\n\nexport default function App() {\n  return <Outlet />;\n}\n`,
    "app/routes.ts": `import { index, type RouteConfig } from "@react-router/dev/routes";\n\nexport default [index("routes/home.tsx")] satisfies RouteConfig;\n`,
    "app/routes/home.tsx": `import { HomeView } from "~/components/home-view";\n\nexport function meta() {\n  return [{ title: "${escapeQuoted(name)}" }, { name: "description", content: "Generated with Forge" }];\n}\n\nexport default function Home() {\n  return <HomeView />;\n}\n`,
    [`${components}/home-view.tsx`]: homeView(context),
    "app/lib/utils.ts": CN_UTILS,
  };
};

/** TanStack Start: type-safe file routes and server functions on Vite. */
const tanstackStart: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  const toastMount = hasToast ? `\n        <ToastProvider />` : "";
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "vite dev", build: "vite build", start: "node .output/server/index.mjs", typecheck: "tsc --noEmit" },
      dependencies: reactRuntimeDependencies(context, ["@tanstack/react-router", "@tanstack/react-start", "react", "react-dom"]),
      devDependencies: dependencies(["@tailwindcss/vite", "@types/node", ...reactDevTypes, "@vitejs/plugin-react", "shadcn", "tailwindcss", "tw-animate-css", "typescript", "vite", "vite-tsconfig-paths"]),
    }),
    "tsconfig.json": json({
      compilerOptions: { target: "ES2022", lib: ["DOM", "DOM.Iterable", "ES2022"], module: "ESNext", moduleResolution: "bundler", jsx: "react-jsx", strict: true, noEmit: true, skipLibCheck: true, esModuleInterop: true, resolveJsonModule: true, isolatedModules: true, types: ["node", "vite/client"], baseUrl: ".", paths: { "@/*": ["./src/*"] } },
      include: ["**/*.ts", "**/*.tsx"],
    }),
    "vite.config.ts": `import tailwindcss from "@tailwindcss/vite";\nimport { tanstackStart } from "@tanstack/react-start/plugin/vite";\nimport viteReact from "@vitejs/plugin-react";\nimport { defineConfig } from "vite";\nimport tsconfigPaths from "vite-tsconfig-paths";\n\nexport default defineConfig({ plugins: [tsconfigPaths(), tailwindcss(), tanstackStart(), viteReact()] });\n`,
    "components.json": reactComponentsJson(context, { rsc: false, aliasRoot: "@" }),
    ".gitignore": gitignore([".output", ".nitro", ".tanstack", "src/routeTree.gen.ts"]),
    "src/styles/app.css": globalCss(context, { shadcnLayer: true }),
    "src/routes/__root.tsx": `import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";\n${hasToast ? `import { ToastProvider } from "${context.framework.layout.patternsImport}";\n` : ""}import appCss from "@/styles/app.css?url";\n\nexport const Route = createRootRoute({\n  head: () => ({\n    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "${escapeQuoted(name)}" }],\n    links: [{ rel: "stylesheet", href: appCss }],\n  }),\n  component: RootDocument,\n});\n\nfunction RootDocument() {\n  return (\n    <html lang="en" className="${themeClass}">\n      <head>\n        <HeadContent />\n      </head>\n      <body>\n        <Outlet />${toastMount}\n        <Scripts />\n      </body>\n    </html>\n  );\n}\n`,
    // TanStack Start resolves src/router as the required router entry and calls getRouter().
    "src/router.tsx": `import { createRouter } from "@tanstack/react-router";\nimport { routeTree } from "./routeTree.gen";\n\nexport function getRouter() {\n  return createRouter({ routeTree, defaultPreload: "intent" });\n}\n\ndeclare module "@tanstack/react-router" {\n  interface Register {\n    router: ReturnType<typeof getRouter>;\n  }\n}\n`,
    "src/routes/index.tsx": `import { createFileRoute } from "@tanstack/react-router";\nimport { HomeView } from "@/components/home-view";\n\nexport const Route = createFileRoute("/")({ component: HomeView });\n`,
    [`${components}/home-view.tsx`]: homeView(context),
    "src/lib/utils.ts": CN_UTILS,
  };
};

/** Astro: static pages with React islands for anything interactive. */
const astro: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const components = componentsDir(context.framework.layout.patternsDir);
  const toastMount = hasToast ? `\n    <ToastProvider client:idle />` : "";
  const toastImport = hasToast ? `import { ToastProvider } from "${context.framework.layout.patternsImport}";\n` : "";
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "astro dev", build: "astro build", preview: "astro preview", typecheck: "astro check" },
      dependencies: reactRuntimeDependencies(context, ["@astrojs/react", "astro", "react", "react-dom"]),
      devDependencies: dependencies(["@tailwindcss/vite", "@types/node", ...reactDevTypes, "shadcn", "tailwindcss", "tw-animate-css", "typescript"]),
    }),
    "tsconfig.json": json({
      extends: "astro/tsconfigs/strict",
      compilerOptions: { jsx: "react-jsx", jsxImportSource: "react", baseUrl: ".", paths: { "@/*": ["./src/*"] } },
      include: [".astro/types.d.ts", "**/*"],
      exclude: ["dist"],
    }),
    "astro.config.mjs": `import react from "@astrojs/react";\nimport tailwindcss from "@tailwindcss/vite";\nimport { defineConfig } from "astro/config";\n\nexport default defineConfig({\n  integrations: [react()],\n  vite: { plugins: [tailwindcss()] },\n});\n`,
    "components.json": reactComponentsJson(context, { rsc: false, aliasRoot: "@" }),
    ".gitignore": gitignore([".astro"]),
    "src/styles/global.css": globalCss(context, { shadcnLayer: true }),
    "src/pages/index.astro": `---\nimport "@/styles/global.css";\nimport { HomeView } from "@/components/home-view";\n${toastImport}---\n\n<!doctype html>\n<html lang="en" class="${themeClass}">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>${name}</title>\n    <meta name="description" content="Generated with Forge" />\n  </head>\n  <body>\n    <HomeView client:load />${toastMount}\n  </body>\n</html>\n`,
    [`${components}/home-view.tsx`]: homeView(context),
    "src/lib/utils.ts": CN_UTILS,
  };
};

export const REACT_SCAFFOLDS: Partial<Record<FrameworkKey, ScaffoldBuilder>> = {
  next,
  "react-vite": reactVite,
  "react-router": reactRouter,
  "tanstack-start": tanstackStart,
  astro,
};
