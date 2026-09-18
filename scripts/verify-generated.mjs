import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, extname, resolve } from "node:path";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const root = resolve(import.meta.dirname, "..");
const moduleCache = new Map();

function resolveLocal(from, request) {
  const base = resolve(dirname(from), request);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, resolve(base, "index.ts")]) {
    try { readFileSync(candidate); return candidate; } catch { /* keep looking */ }
  }
  throw new Error(`Cannot resolve ${request} from ${from}`);
}

function loadTypeScript(file) {
  const absolute = resolve(file);
  if (moduleCache.has(absolute)) return moduleCache.get(absolute).exports;
  const source = readFileSync(absolute, "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const module = { exports: {} };
  moduleCache.set(absolute, module);
  const localRequire = (request) => request.startsWith(".") ? loadTypeScript(resolveLocal(absolute, request)) : require(request);
  vm.runInThisContext(`(function(require,module,exports){${output}\n})`, { filename: absolute })(localRequire, module, module.exports);
  return module.exports;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const { DEFAULT_STATE } = loadTypeScript(resolve(root, "lib/types.ts"));
const { FRAMEWORKS, FRAMEWORK_KEYS, getUiKit } = loadTypeScript(resolve(root, "lib/frameworks.ts"));
const { buildCommands, buildConfig, buildSetupInstructions, buildStarterFiles, buildThemeCss, SETUP_SCRIPT_COMMAND } = loadTypeScript(resolve(root, "lib/generator.ts"));
const { buildForgeRegistryItem, REGISTRY_FAMILIES } = loadTypeScript(resolve(root, "lib/registry.ts"));
const { DESIGN_SKILL_PATH } = loadTypeScript(resolve(root, "lib/design-doc.ts"));
const { DESIGN_SKILL_SOURCE } = loadTypeScript(resolve(root, "lib/design-skill.ts"));

// The bundled skill has to stay byte-identical to the markdown it mirrors.
assert(DESIGN_SKILL_SOURCE === readFileSync(resolve(root, "docs/design-skill.md"), "utf8"), "lib/design-skill.ts has drifted from docs/design-skill.md — run npm run sync:skill");

const projectTypes = ["dashboard", "landing", "web-app"];
const sharedFiles = ["package.json", "forge.config.json", "AGENTS.md", "CONTINUE_PROMPT.md", "docs/DESIGN_SYSTEM.md", "docs/COMPONENTS.md", "README.md", "setup.sh", "theme.css", "LICENSE", DESIGN_SKILL_PATH];

/** Files each framework must produce beyond the shared set. */
const frameworkFiles = {
  next: ["tsconfig.json", "components.json", "next.config.ts", "app/layout.tsx", "app/page.tsx", "components/providers.tsx"],
  "react-vite": ["index.html", "vite.config.ts", "src/main.tsx", "src/App.tsx", "components.json"],
  "react-router": ["react-router.config.ts", "vite.config.ts", "app/root.tsx", "app/routes.ts", "app/routes/home.tsx"],
  "tanstack-start": ["vite.config.ts", "src/router.tsx", "src/routes/__root.tsx", "src/routes/index.tsx"],
  astro: ["astro.config.mjs", "src/pages/index.astro"],
  "vue-vite": ["index.html", "vite.config.ts", "src/main.ts", "src/App.vue", "components.json"],
  nuxt: ["nuxt.config.ts", "app/app.vue", "app/pages/index.vue", "components.json"],
  sveltekit: ["svelte.config.js", "vite.config.ts", "src/app.html", "src/routes/+layout.svelte", "src/routes/+page.svelte", "components.json"],
  angular: ["angular.json", "tsconfig.app.json", ".postcssrc.json", "src/main.ts", "src/index.html", "src/app/app.ts", "src/app/app.config.ts"],
  vanilla: ["index.html", "vite.config.js", "jsconfig.json", "src/main.js", "src/ui/primitives.js"],
};

/** A package that must never appear in another family's dependency tree. */
const foreignPackages = {
  vue: ["react", "react-dom", "lucide-react", "sonner", "next"],
  svelte: ["react", "react-dom", "lucide-react", "sonner", "next"],
  angular: ["react", "react-dom", "lucide-react", "sonner", "next"],
  react: ["vue", "svelte", "@angular/core"],
  vanilla: ["react", "react-dom", "vue", "svelte", "@angular/core", "next", "sonner"],
};

function scriptBlocks(contents) {
  // Attributes can contain ">" (generic="T extends Record<string, unknown>"), so quoted values are skipped explicitly.
  return [...contents.matchAll(/<script(?:"[^"]*"|'[^']*'|[^>])*>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
}

function checkSyntax(label, fileName, contents) {
  const result = ts.transpileModule(contents, { fileName, reportDiagnostics: true, compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.ReactJSX } });
  const errors = (result.diagnostics ?? []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
  assert(errors.length === 0, `${label}: ${fileName} has syntax diagnostics — ${errors.map((error) => ts.flattenDiagnosticMessageText(error.messageText, " ")).join("; ")}`);
}

let checkedFiles = 0;

for (const framework of FRAMEWORK_KEYS) {
  const definition = FRAMEWORKS[framework];
  const kit = getUiKit(framework);

  for (const projectType of projectTypes) {
    const label = `${framework}/${projectType}`;
    const state = { ...DEFAULT_STATE, projectName: `Verify ${projectType}`, projectType, framework };
    const files = buildStarterFiles(state);

    for (const path of [...sharedFiles, ...frameworkFiles[framework]]) {
      assert(typeof files[path] === "string" && files[path].length > 20, `${label}: missing ${path}`);
    }

    // The framework's declared layout has to match what was actually written.
    assert(files[definition.layout.styles], `${label}: missing stylesheet ${definition.layout.styles}`);
    assert(files[definition.layout.entry], `${label}: missing entry composition ${definition.layout.entry}`);
    const patternFiles = {
      dataTable: Object.entries(files).find(([path]) => /\/(data-table|DataTable)\.(tsx|vue|svelte|ts|js)$/.test(path))?.[1],
    };
    const barrel = files[`${definition.layout.patternsDir}/index.ts`] ?? files[`${definition.layout.patternsDir}/index.js`];
    assert(barrel, `${label}: missing pattern barrel`);
    assert(files[definition.layout.utils].includes("twMerge"), `${label}: missing cn() helper at ${definition.layout.utils}`);

    // setup.sh has to be runnable, and say so, for people who do not run scripts by habit.
    const setup = files["setup.sh"];
    assert(!setup.includes("create-next-app"), `${label}: setup still scaffolds a second project`);
    assert(setup.startsWith("#!/usr/bin/env bash"), `${label}: setup.sh has no shebang`);
    assert(setup.includes(SETUP_SCRIPT_COMMAND) && setup.includes("chmod +x setup.sh"), `${label}: setup.sh does not say how to run it`);
    assert(buildCommands(state).split("\n").every((line) => setup.includes(line)), `${label}: setup.sh is missing a setup command`);
    const instructions = buildSetupInstructions(state);
    assert(instructions.split("\n").filter((line) => line.trim() && !line.startsWith("#")).join("\n") === SETUP_SCRIPT_COMMAND, `${label}: setup instructions are not safe to paste whole`);
    for (const readme of [files["README.md"], files["AGENTS.md"]]) {
      assert(readme.includes(SETUP_SCRIPT_COMMAND), `${label}: nothing tells a reader to run setup.sh`);
    }
    assert(files[definition.layout.styles].includes("--primary-foreground"), `${label}: semantic foreground token missing`);
    assert(files["AGENTS.md"].includes("Non-negotiable design rules"), `${label}: AI rules missing`);
    assert(files["CONTINUE_PROMPT.md"].includes(definition.stackLabel), `${label}: continue prompt does not name the framework`);

    // The example composition must consume the exported pattern layer.
    const example = Object.entries(files).find(([path]) => path.endsWith("home-view.tsx") || path.endsWith("HomeView.vue") || path.endsWith("home-view.svelte") || path.endsWith("home-view.ts") || path.endsWith("src/main.js"));
    assert(example, `${label}: no example composition was generated`);
    assert(example[1].includes(definition.layout.patternsImport), `${label}: example does not import ${definition.layout.patternsImport}`);

    // The design system document has to stand on its own and match the tokens.
    const design = files["docs/DESIGN_SYSTEM.md"];
    for (const heading of ["## Overview", "## Colors", "## Typography", "## Spacing", "## Border Radius", "## Elevation", "## Motion", "## Components", "## Do's and Don'ts"]) {
      assert(design.includes(heading), `${label}: design system document is missing ${heading}`);
    }
    assert(design.startsWith(`# ${state.projectName} Design System`), `${label}: design system document is not titled after the project`);
    assert(design.includes(state.primary) && design.includes(state.secondary) && design.includes(state.accent), `${label}: design system document does not carry the brand colors`);
    assert(design.includes(definition.layout.styles), `${label}: design system document does not point at the token stylesheet`);
    assert(design.includes(kit.name) && design.includes(definition.label), `${label}: design system document does not name the stack`);
    assert(!design.includes("undefined") && !design.includes("NaN"), `${label}: design system document has an unresolved value`);
    assert(files[definition.layout.styles].includes("--text-h1"), `${label}: type scale missing from the token contract`);
    // Surface radii are capped so a pill-sized radius cannot turn panels into blobs.
    assert(files[definition.layout.styles].includes("--radius-lg: min(var(--radius)"), `${label}: surface radius is not capped`);
    assert(files[definition.layout.styles].includes("--radius-xl: min(calc(var(--radius)"), `${label}: extra-large radius is not capped`);
    assert(!files[definition.layout.styles].includes("fonts.googleapis.com"), `${label}: a preset type voice should not import a webfont`);

    // Google font overrides reach the stylesheet, and only as the first statement.
    const withFonts = buildStarterFiles({ ...state, headingFont: "Playfair Display", bodyFont: "Inter" });
    const fontCss = withFonts[definition.layout.styles];
    assert(fontCss.startsWith('@import url("https://fonts.googleapis.com/css2?'), `${label}: webfont import is not the first statement`);
    assert(fontCss.includes("family=Playfair+Display:wght@") && fontCss.includes("family=Inter:wght@"), `${label}: chosen families are missing from the import`);
    assert(fontCss.includes('--font-heading: "Playfair Display"') && fontCss.includes('--font-sans: "Inter"'), `${label}: chosen families did not reach the tokens`);
    assert(withFonts["theme.css"].startsWith("@import url("), `${label}: standalone theme.css is missing the webfont import`);

    // A DataTable's loading state mirrors the table, not a generic block.
    if (patternFiles.dataTable) {
      const source = patternFiles.dataTable;
      assert(/skeleton/i.test(source), `${label}: DataTable has no loading skeleton`);
      assert(!/min-h-32/.test(source), `${label}: DataTable still falls back to the generic loading block`);
    }

    // The design skill ships bound to this project rather than as a loose copy.
    const skill = files[DESIGN_SKILL_PATH];
    assert(skill.startsWith("---\nname: website-build"), `${label}: design skill lost its frontmatter`);
    assert(skill.includes("Phase 0.3 is already answered for this project"), `${label}: design skill is not bound to the generated brand guide`);
    assert(skill.includes(definition.stackLabel) && skill.includes(definition.layout.patternsDir), `${label}: design skill does not name this stack`);
    assert(skill.length > DESIGN_SKILL_SOURCE.length, `${label}: design skill lost content`);
    assert(files["AGENTS.md"].includes(DESIGN_SKILL_PATH) && files["CONTINUE_PROMPT.md"].includes(DESIGN_SKILL_PATH), `${label}: nothing points an agent at the design skill`);

    const config = JSON.parse(files["forge.config.json"]);
    assert(config.schemaVersion === 3, `${label}: unexpected schema version`);
    assert(config.architecture.layers.length === 4, `${label}: architecture layers missing`);
    assert(config.stack.frameworkKey === framework, `${label}: config does not record the framework`);
    assert(config.stack.ui.includes(kit.name), `${label}: config does not record the UI kit`);

    // Commands have to drive the right distribution.
    const commands = buildCommands(state);
    if (kit.cliPackage) {
      const expectedCli = definition.family === "angular" ? "@spartan-ng/cli" : kit.cliPackage;
      assert(commands.includes(expectedCli), `${label}: setup commands do not use ${expectedCli}`);
    } else {
      // A vanilla project has no component CLI, so setup is install then run.
      assert(commands.split("\n").length === 2, `${label}: setup should be install and run with no component step`);
    }

    // Dependencies must be pinned and family-appropriate.
    const manifest = JSON.parse(files["package.json"]);
    const allDependencies = { ...manifest.dependencies, ...manifest.devDependencies };
    for (const [name, range] of Object.entries(allDependencies)) {
      assert(range !== "latest", `${label}: ${name} has no pinned version`);
      assert(/^[~^]?\d/.test(range), `${label}: ${name} has an unexpected range ${range}`);
    }
    for (const forbidden of foreignPackages[definition.family]) {
      assert(!(forbidden in allDependencies), `${label}: ${forbidden} leaked into a ${definition.family} project`);
    }

    for (const [path, contents] of Object.entries(files)) {
      assert(typeof contents === "string" && contents.length > 0, `${label}: ${path} is empty`);
      const extension = extname(path);
      if (extension === ".json") {
        JSON.parse(contents);
      } else if ((extension === ".ts" || extension === ".tsx" || extension === ".js" || extension === ".mjs") && !path.endsWith(".d.ts")) {
        checkSyntax(label, path, contents);
        checkedFiles += 1;
      } else if (extension === ".vue" || extension === ".svelte") {
        for (const [index, block] of scriptBlocks(contents).entries()) {
          checkSyntax(label, `${path}.${index}.ts`, block);
          checkedFiles += 1;
        }
      }
    }

    // Angular keeps templates beside components; every templateUrl must resolve.
    if (definition.family === "angular") {
      for (const [path, contents] of Object.entries(files)) {
        if (!path.endsWith(".ts")) continue;
        for (const match of contents.matchAll(/templateUrl: "\.\/([^"]+)"/g)) {
          const templatePath = `${dirname(path)}/${match[1]}`;
          assert(files[templatePath], `${label}: ${path} points at a missing template ${templatePath}`);
        }
      }
    }
  }
}

// Registry items stay in step with the pattern source they are generated from.
for (const family of REGISTRY_FAMILIES) {
  const item = buildForgeRegistryItem(family);
  assert(item.files.length > 3, `${family} registry item has no files`);
  assert(item.files.every((file) => typeof file.content === "string" && file.content.length > 20), `${family} registry item has empty files`);
  assert(item.dependencies.includes("clsx"), `${family} registry item is missing shared dependencies`);
}

const airy = buildThemeCss({ ...DEFAULT_STATE, density: "airy" });
const dense = buildThemeCss({ ...DEFAULT_STATE, density: "dense" });
assert(airy !== dense && airy.includes("--control-height: 2.75rem") && dense.includes("--control-height: 2.25rem"), "Density does not change generated tokens");

const contrastConfig = buildConfig({ ...DEFAULT_STATE, primary: "#050505", secondary: "#FFFFFF", accent: "#FFFF00" });
assert(contrastConfig.designSystem.semanticForegrounds.primary === "#FFFFFF", "Dark primary did not receive a light foreground");
assert(contrastConfig.designSystem.semanticForegrounds.secondary === "#000000", "Light secondary did not receive a dark foreground");

const logoConfig = buildConfig({ ...DEFAULT_STATE, logoFileName: "My unsafe logo (final).svg" });
assert(logoConfig.designSystem.logo.outputPath === "public/brand/My-unsafe-logo-final-.svg", "Logo output path is not sanitized consistently");

const svelteLogo = buildConfig({ ...DEFAULT_STATE, framework: "sveltekit", logoFileName: "mark.svg" });
assert(svelteLogo.designSystem.logo.outputPath === "static/brand/mark.svg", "SvelteKit assets do not land in static/");

console.log(`Verified ${FRAMEWORK_KEYS.length} frameworks × ${projectTypes.length} project types, ${checkedFiles} source files, ${REGISTRY_FAMILIES.length} registry items, token modes, contrast mapping, and asset paths.`);
