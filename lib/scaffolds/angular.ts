import type { FrameworkKey } from "../types";
import { CN_UTILS, dependencies, escapeText, eyebrow, gitignore, globalCss, json, packageJson, type ScaffoldBuilder, type ScaffoldContext } from "./shared";

/** The example composition, split into a component and a template the way Angular projects usually are. */
function homeView(context: ScaffoldContext) {
  const { name, state, framework, hasToast } = context;
  const patterns = framework.layout.patternsImport;
  if (state.projectType === "landing") {
    return {
      component: `import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { ComboBox, type ComboBoxOption } from "${patterns}";

@Component({
  selector: "forge-home-view",
  templateUrl: "./home-view.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ComboBox],
})
export class HomeView {
  protected readonly options: ComboBoxOption[] = [
    { value: "strategy", label: "Product strategy" },
    { value: "design", label: "Interface design" },
    { value: "engineering", label: "Frontend engineering" },
  ];
  protected readonly cards = ["Clear hierarchy", "Reusable sections", "Accessible states"];
  protected readonly focus = signal("");
}
`,
      template: `<main class="min-h-screen bg-background text-foreground">
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
      <forge-combo-box [options]="options" [(value)]="focus" />
      <p class="mt-4 text-body-sm text-muted-foreground">Selected: {{ focus() || "Nothing yet" }}</p>
    </aside>
  </section>
  <section id="contact" class="mx-auto grid max-w-6xl gap-4 border-t px-6 py-16 md:grid-cols-3">
    @for (card of cards; track card) {
      <article class="rounded-xl border bg-card p-6">
        <h2 class="font-medium">{{ card }}</h2>
        <p class="mt-2 text-body-sm text-muted-foreground">A composition layer built from the same documented foundations.</p>
      </article>
    }
  </section>
</main>
`,
    };
  }

  const toastImport = hasToast ? `import { toast } from "ngx-sonner";\n` : "";
  const toastMethod = hasToast ? `\n\n  protected createProject() {\n    toast.success("Project created");\n  }` : "";
  const action = hasToast ? `(click)="createProject()"` : "";
  return {
    component: `import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
${toastImport}import { ComboBox, DataTable, type ComboBoxOption, type DataTableColumn } from "${patterns}";

type Project = { id: string; name: string; status: string; owner: string };

@Component({
  selector: "forge-home-view",
  templateUrl: "./home-view.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ComboBox, DataTable],
})
export class HomeView {
  protected readonly rows: Project[] = [
    { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
    { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
    { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
  ];
  protected readonly columns: DataTableColumn<Project>[] = [
    { key: "name", header: "Project", sortable: true },
    { key: "status", header: "Status" },
    { key: "owner", header: "Owner" },
  ];
  protected readonly filters: ComboBoxOption[] = [
    { value: "all", label: "All projects" },
    { value: "ready", label: "Ready" },
    { value: "draft", label: "Draft" },
  ];
  protected readonly stats: Array<[string, string]> = [["Active signal", "84.6%"], ["Weekly reach", "18,240"], ["Open workflows", "06"]];
  protected readonly filter = signal("");${toastMethod}
}
`,
    template: `<main class="min-h-screen bg-background text-foreground">
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
      <div class="w-full md:w-72"><forge-combo-box [options]="filters" [(value)]="filter" /></div>
    </div>
    <section class="grid gap-4 md:grid-cols-3">
      @for (stat of stats; track stat[0]) {
        <article class="rounded-xl border bg-card p-5 shadow-[var(--shadow-sm)]">
          <p class="text-body-sm text-muted-foreground">{{ stat[0] }}</p>
          <strong class="mt-3 block text-h2">{{ stat[1] }}</strong>
        </article>
      }
    </section>
    <forge-data-table [columns]="columns" [rows]="rows" [selectable]="true" [pageSize]="5" />
  </div>
</main>
`,
  };
}

/** Angular with spartan/ui. spartan installs its brain primitives and copies helm styles in through its own generator. */
const angular: ScaffoldBuilder = (context) => {
  const { name, slug, themeClass, hasToast } = context;
  const example = homeView(context);
  const patterns = context.framework.layout.patternsImport;
  const appImports = hasToast ? `import { HomeView } from "./home-view";\nimport { ToastProvider } from "${patterns}";` : `import { HomeView } from "./home-view";`;
  return {
    "package.json": packageJson({
      slug,
      scripts: { ng: "ng", start: "ng serve", build: "ng build", watch: "ng build --watch --configuration development", typecheck: "tsc --noEmit -p tsconfig.app.json" },
      dependencies: dependencies([
        "@angular/cdk",
        "@angular/common",
        "@angular/compiler",
        "@angular/core",
        "@angular/forms",
        "@angular/platform-browser",
        "@angular/router",
        "@spartan-ng/brain",
        "clsx",
        "rxjs",
        "tailwind-merge",
        "tslib",
        ...context.packages,
      ]),
      devDependencies: dependencies(["@angular/build", "@angular/cli", "@angular/compiler-cli", "@spartan-ng/cli", "@tailwindcss/postcss", "tailwindcss", "tw-animate-css", "typescript"], { typescript: "~6.0.3" }),
    }),
    "angular.json": json({
      $schema: "./node_modules/@angular/cli/lib/config/schema.json",
      version: 1,
      newProjectRoot: "projects",
      projects: {
        [slug]: {
          projectType: "application",
          schematics: { "@schematics/angular:component": { style: "css", changeDetection: "OnPush" } },
          root: "",
          sourceRoot: "src",
          prefix: "forge",
          architect: {
            build: {
              builder: "@angular/build:application",
              options: { outputPath: `dist/${slug}`, browser: "src/main.ts", index: "src/index.html", tsConfig: "tsconfig.app.json", assets: [{ glob: "**/*", input: "public" }], styles: ["src/styles.css"] },
              configurations: {
                production: { budgets: [{ type: "initial", maximumWarning: "500kB", maximumError: "1MB" }, { type: "anyComponentStyle", maximumWarning: "4kB", maximumError: "8kB" }], outputHashing: "all" },
                development: { optimization: false, extractLicenses: false, sourceMap: true },
              },
              defaultConfiguration: "production",
            },
            serve: {
              builder: "@angular/build:dev-server",
              configurations: { production: { buildTarget: `${slug}:build:production` }, development: { buildTarget: `${slug}:build:development` } },
              defaultConfiguration: "development",
            },
          },
        },
      },
    }),
    "tsconfig.json": json({
      compileOnSave: false,
      compilerOptions: {
        strict: true,
        noImplicitOverride: true,
        noPropertyAccessFromIndexSignature: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true,
        skipLibCheck: true,
        isolatedModules: true,
        experimentalDecorators: true,
        importHelpers: true,
        target: "ES2022",
        module: "preserve",
        // TypeScript 6 deprecates baseUrl; paths resolve relative to this file.
        paths: { "@/*": ["./src/app/*"] },
      },
      angularCompilerOptions: { enableI18nLegacyMessageIdFormat: false, strictInjectionParameters: true, strictInputAccessModifiers: true, typeCheckHostBindings: true, strictTemplates: true },
    }),
    "tsconfig.app.json": json({
      extends: "./tsconfig.json",
      compilerOptions: { outDir: "./out-tsc/app", types: [] },
      files: ["src/main.ts"],
      include: ["src/**/*.d.ts"],
    }),
    // spartan/ui reads components.json the way the other kits do; writing it up
    // front keeps `ng g @spartan-ng/cli:ui` from prompting during setup.
    "components.json": json({ componentsPath: context.framework.layout.uiDir, style: "nova", importAlias: "@spartan-ng/helm" }),
    ".postcssrc.json": json({ plugins: { "@tailwindcss/postcss": {} } }),
    ".gitignore": gitignore([".angular", "out-tsc"]),
    "src/styles.css": globalCss(context),
    "src/index.html": `<!doctype html>\n<html lang="en" class="${themeClass}">\n  <head>\n    <meta charset="utf-8" />\n    <title>${escapeText(name)}</title>\n    <base href="/" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="description" content="Generated with Forge" />\n  </head>\n  <body>\n    <forge-root></forge-root>\n  </body>\n</html>\n`,
    "src/main.ts": `import { bootstrapApplication } from "@angular/platform-browser";\nimport { App } from "./app/app";\nimport { appConfig } from "./app/app.config";\n\nbootstrapApplication(App, appConfig).catch((error) => console.error(error));\n`,
    "src/app/app.config.ts": `import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, type ApplicationConfig } from "@angular/core";\n\nexport const appConfig: ApplicationConfig = {\n  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],\n};\n`,
    "src/app/app.ts": `import { ChangeDetectionStrategy, Component } from "@angular/core";\n${appImports}\n\n@Component({\n  selector: "forge-root",\n  templateUrl: "./app.html",\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  imports: [HomeView${hasToast ? ", ToastProvider" : ""}],\n})\nexport class App {}\n`,
    "src/app/app.html": `<forge-home-view />\n${hasToast ? "<forge-toast-provider />\n" : ""}`,
    "src/app/home-view.ts": example.component,
    "src/app/home-view.html": example.template,
    "src/app/lib/utils.ts": CN_UTILS,
  };
};

export const ANGULAR_SCAFFOLDS: Partial<Record<FrameworkKey, ScaffoldBuilder>> = { angular };
