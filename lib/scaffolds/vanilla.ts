import type { FrameworkKey } from "../types";
import { dependencies, escapeText, eyebrow, gitignore, globalCss, json, packageJson, type ScaffoldBuilder, type ScaffoldContext } from "./shared";

/** cn() plus a small element helper — the whole utility layer for a vanilla project. */
const VANILLA_UTILS = `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utilities.
 * @param {...import("clsx").ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Creates an element. \`class\` sets className, \`on*\` keys become listeners,
 * \`true\` becomes a bare attribute, and null or false values are skipped.
 * @param {string} tag
 * @param {Record<string, unknown>} [attributes]
 * @param {(Node | string | null | undefined | false)[]} [children]
 * @returns {HTMLElement}
 */
export function el(tag, attributes = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    if (value === null || value === undefined || value === false) continue;
    if (key === "class") node.className = String(value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), /** @type {EventListener} */ (value));
    else if (value === true) node.setAttribute(key, "");
    else node.setAttribute(key, String(value));
  }
  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child);
  }
  return node;
}

/**
 * Finds a mount point declared in the HTML.
 * @param {string} name
 * @returns {HTMLElement}
 */
export function mount(name) {
  const target = document.querySelector('[data-mount="' + name + '"]');
  if (!(target instanceof HTMLElement)) throw new Error('Missing mount point: ' + name);
  return target;
}
`;

/** The primitive layer a vanilla project gets instead of a component CLI. */
const VANILLA_PRIMITIVES = `import { cn, el } from "../lib/utils.js";

/** @typedef {"primary" | "secondary" | "outline" | "ghost" | "destructive"} ButtonVariant */

const BUTTON_VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  outline: "border bg-transparent text-foreground hover:bg-muted",
  ghost: "bg-transparent text-muted-foreground hover:bg-muted",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
};

const BUTTON_SIZES = {
  sm: "min-h-[calc(var(--control-height)*0.85)] px-3 text-body-sm",
  md: "min-h-[var(--control-height)] px-5 text-body-sm",
  lg: "min-h-[calc(var(--control-height)*1.15)] px-7 text-body",
};

/**
 * @param {{ label: string; variant?: ButtonVariant; size?: "sm" | "md" | "lg"; type?: string; onClick?: () => void; disabled?: boolean; class?: string }} options
 * @returns {HTMLElement}
 */
export function button({ label, variant = "primary", size = "md", type = "button", onClick, disabled = false, class: className }) {
  const node = el(
    "button",
    {
      type,
      class: cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-[var(--motion-fast)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className,
      ),
      onclick: onClick,
    },
    [label],
  );
  if (disabled) node.setAttribute("disabled", "");
  return node;
}

/**
 * @param {{ children?: (Node | string)[]; class?: string; raised?: boolean }} [options]
 * @returns {HTMLElement}
 */
export function card({ children = [], class: className, raised = false } = {}) {
  return el(
    "div",
    { class: cn("rounded-lg border bg-card p-6 text-card-foreground", raised ? "shadow-[var(--shadow-md)]" : "shadow-[var(--shadow-sm)]", className) },
    children,
  );
}

/**
 * @param {{ id?: string; type?: string; placeholder?: string; invalid?: boolean; class?: string }} [options]
 * @returns {HTMLElement}
 */
export function input({ id, type = "text", placeholder, invalid = false, class: className } = {}) {
  return el("input", {
    id,
    type,
    placeholder,
    "aria-invalid": invalid ? "true" : null,
    class: cn(
      "min-h-[var(--control-height)] w-full rounded-md border border-input bg-background px-3 text-body-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
      invalid && "border-destructive focus-visible:ring-destructive",
      className,
    ),
  });
}

/**
 * @param {{ label: string; tone?: "neutral" | "success" | "warning" | "info" | "destructive"; class?: string }} options
 * @returns {HTMLElement}
 */
export function badge({ label, tone = "neutral", class: className }) {
  const tones = {
    neutral: "bg-muted text-muted-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    info: "bg-info/15 text-info",
    destructive: "bg-destructive/15 text-destructive",
  };
  return el("span", { class: cn("inline-flex items-center rounded-sm px-2 py-0.5 text-caption", tones[tone], className) }, [label]);
}
`;

function landingHtml(context: ScaffoldContext) {
  const { name, themeClass } = context;
  return `<!doctype html>
<html lang="en" class="${themeClass}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeText(name)}</title>
    <meta name="description" content="Generated with Forge" />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body class="min-h-screen bg-background text-foreground">
    <header class="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-5">
      <strong>${escapeText(name)}</strong>
      <a class="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground" href="#contact">Start a project</a>
    </header>

    <section class="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.25fr_.75fr]">
      <div>
        <p class="mb-5 text-body-sm font-medium text-muted-foreground">A focused system for useful work</p>
        <h1 class="max-w-3xl font-heading text-h1 tracking-tight md:text-display">Make the product feel intentional from the first screen.</h1>
        <p class="mt-7 max-w-2xl text-body-lg text-muted-foreground">
          This example composition already uses the generated semantic tokens, spacing, radius, and component patterns.
        </p>
      </div>
      <aside class="rounded-xl border bg-card p-6 shadow-[var(--shadow-md)]">
        <span class="mb-3 block text-body-sm font-medium">What do you need?</span>
        <div data-mount="focus"></div>
        <p class="mt-4 text-body-sm text-muted-foreground" data-mount="focus-value">Selected: Nothing yet</p>
      </aside>
    </section>

    <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3" data-mount="cards"></section>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`;
}

function appHtml(context: ScaffoldContext) {
  const { name, themeClass } = context;
  return `<!doctype html>
<html lang="en" class="${themeClass}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeText(name)}</title>
    <meta name="description" content="Generated with Forge" />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body class="min-h-screen bg-background text-foreground">
    <header class="flex items-center justify-between border-b px-6 py-4">
      <strong>${escapeText(name)}</strong>
      <span data-mount="new-project"></span>
    </header>

    <main class="mx-auto grid max-w-7xl gap-8 px-6 py-10">
      <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p class="text-body-sm text-muted-foreground">${eyebrow(context)}</p>
          <h1 class="mt-2 font-heading text-h1 tracking-tight">Keep the next move visible.</h1>
        </div>
        <div class="w-full md:w-72" data-mount="filter"></div>
      </div>

      <section class="grid gap-4 md:grid-cols-3" data-mount="stats"></section>
      <section data-mount="table"></section>
    </main>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`;
}

function landingMain(context: ScaffoldContext) {
  const patterns = context.framework.layout.patternsImport;
  return `import { createComboBox } from "${patterns}";
import { card } from "./ui/primitives.js";
import { el, mount } from "./lib/utils.js";
import "./styles.css";

const options = [
  { value: "strategy", label: "Product strategy" },
  { value: "design", label: "Interface design" },
  { value: "engineering", label: "Frontend engineering" },
];

const selectedLabel = mount("focus-value");

const combo = createComboBox({
  options,
  onValueChange(value) {
    const match = options.find((option) => option.value === value);
    selectedLabel.textContent = "Selected: " + (match ? match.label : "Nothing yet");
  },
});
mount("focus").append(combo.element);

const cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
mount("cards").append(
  ...cards.map((title) =>
    card({
      class: "rounded-xl",
      children: [
        el("h2", { class: "text-h4" }, [title]),
        el("p", { class: "mt-2 text-body-sm text-muted-foreground" }, ["A composition layer built from the same documented foundations."]),
      ],
    }),
  ),
);
`;
}

function appMain(context: ScaffoldContext) {
  const patterns = context.framework.layout.patternsImport;
  const toastImport = context.hasToast ? `import { createComboBox, createDataTable, toast } from "${patterns}";` : `import { createComboBox, createDataTable } from "${patterns}";`;
  const action = context.hasToast
    ? `button({ label: "New project", onClick: () => toast.success("Project created", { description: "It is ready in your workspace." }) })`
    : `button({ label: "New project" })`;
  return `${toastImport}
import { button, card } from "./ui/primitives.js";
import { el, mount } from "./lib/utils.js";
import "./styles.css";

/** @typedef {{ id: string; name: string; status: string; owner: string }} Project */

/** @type {Project[]} */
const rows = [
  { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
  { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
  { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
];

/** @type {import("${patterns}").DataTableColumn<Project>[]} */
const columns = [
  { key: "name", header: "Project", sortable: true },
  { key: "status", header: "Status" },
  { key: "owner", header: "Owner" },
];

const filters = [
  { value: "all", label: "All projects" },
  { value: "ready", label: "Ready" },
  { value: "draft", label: "Draft" },
];

const stats = [
  ["Active signal", "84.6%"],
  ["Weekly reach", "18,240"],
  ["Open workflows", "06"],
];

mount("new-project").append(${action});

const filter = createComboBox({ options: filters, placeholder: "All projects" });
mount("filter").append(filter.element);

mount("stats").append(
  ...stats.map(([label, value]) =>
    card({
      class: "rounded-xl p-5",
      children: [el("p", { class: "text-body-sm text-muted-foreground" }, [label]), el("strong", { class: "mt-3 block text-h2" }, [value])],
    }),
  ),
);

const table = createDataTable({ columns, rows, selectable: true, pageSize: 5 });
mount("table").append(table.element);
`;
}

/** A project with no framework: HTML for structure, ES modules for behavior. */
const vanilla: ScaffoldBuilder = (context) => {
  const { slug, state } = context;
  const isLanding = state.projectType === "landing";
  return {
    "package.json": packageJson({
      slug,
      extra: { type: "module" },
      scripts: { dev: "vite", build: "vite build", preview: "vite preview", typecheck: "tsc --noEmit -p jsconfig.json" },
      dependencies: dependencies(["clsx", "tailwind-merge", ...context.packages]),
      devDependencies: dependencies(["@tailwindcss/vite", "@types/node", "tailwindcss", "tw-animate-css", "typescript", "vite"]),
    }),
    // TypeScript is a dev-time checker here; nothing in src/ is written in it.
    "jsconfig.json": json({
      compilerOptions: { target: "ES2022", lib: ["ES2022", "DOM", "DOM.Iterable"], module: "ESNext", moduleResolution: "bundler", allowJs: true, checkJs: true, strict: true, noEmit: true, skipLibCheck: true, resolveJsonModule: true },
      include: ["src/**/*.js", "*.js"],
    }),
    "vite.config.js": `import tailwindcss from "@tailwindcss/vite";\nimport { defineConfig } from "vite";\n\nexport default defineConfig({ plugins: [tailwindcss()] });\n`,
    "index.html": isLanding ? landingHtml(context) : appHtml(context),
    ".gitignore": gitignore(["dist-ssr", "*.local"]),
    "src/styles.css": globalCss(context),
    "src/main.js": isLanding ? landingMain(context) : appMain(context),
    "src/ui/primitives.js": VANILLA_PRIMITIVES,
    "src/lib/utils.js": VANILLA_UTILS,
  };
};

export const VANILLA_SCAFFOLDS: Partial<Record<FrameworkKey, ScaffoldBuilder>> = { vanilla };
