import { FORGE_SCHEMA_VERSION, sanitizeAssetFileName } from "./config";
import { buildDesignSkillFile, buildDesignSystemMarkdown, DESIGN_SKILL_PATH, FAMILY_API_NOTES } from "./design-doc";
import { buildDesignTokens, buildFontImport, buildThemeCss as buildTokenCss } from "./design-tokens";
import { buildSetupCommands, getFramework, getUiKit } from "./frameworks";
import { buildPatternFiles, getPatternKeysForProjectType, patternLabels, STARTER_PATTERN_OPTIONS } from "./patterns";
import { getProjectRecipe, kitComponents } from "./recipes";
import { getScaffold, mapPackages, TOAST_PACKAGES, type ScaffoldContext } from "./scaffolds";
import { PROJECT_LABELS, TYPE_LABELS, type ForgeState } from "./types";

export const FORGE_VERSION = "0.3.0";

export function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "forge-project";
}

function projectName(state: ForgeState) {
  return state.projectName.trim() || "Untitled project";
}

/** Where the uploaded mark lands, which depends on the framework's static directory. */
export function logoOutputPath(state: ForgeState) {
  if (!state.logoFileName) return null;
  return `${getFramework(state.framework).layout.publicDir}/brand/${sanitizeAssetFileName(state.logoFileName)}`;
}

export function buildConfig(state: ForgeState) {
  const framework = getFramework(state.framework);
  const kit = getUiKit(state.framework);
  const recipe = getProjectRecipe(state.projectType);
  const selectedPatterns = getPatternKeysForProjectType(state.projectType);
  const tokens = buildDesignTokens(state);
  return {
    schemaVersion: FORGE_SCHEMA_VERSION,
    forgeVersion: FORGE_VERSION,
    project: { name: projectName(state), slug: slugify(state.projectName), type: state.projectType },
    stack: {
      framework: framework.stackLabel,
      frameworkKey: framework.key,
      family: framework.family,
      language: framework.language,
      ui: `${kit.name} with ${kit.primitives}`,
      styling: "Tailwind CSS v4 with semantic CSS variables",
      routing: framework.routing,
      packageManager: state.packageManager,
    },
    layout: {
      styles: framework.layout.styles,
      patterns: framework.layout.patternsDir,
      primitives: framework.layout.uiDir,
      utils: framework.layout.utils,
      entry: framework.layout.entry,
    },
    designSystem: {
      colors: { primary: state.primary, secondary: state.secondary, accent: state.accent },
      semanticForegrounds: {
        primary: tokens.light.primaryForeground,
        secondary: tokens.light.secondaryForeground,
        accent: tokens.light.accentForeground,
      },
      typography: TYPE_LABELS[state.typeVoice],
      radius: state.radius,
      density: state.density,
      themeMode: state.themeMode,
      shadowStyle: state.shadowStyle,
      motionStyle: state.motionStyle,
      logo: logoOutputPath(state) ? { fileName: sanitizeAssetFileName(state.logoFileName ?? "brand-mark"), outputPath: logoOutputPath(state) } : null,
    },
    architecture: {
      layers: ["foundations", "ui primitives", "reusable patterns", "project compositions"],
      recipe: recipe.name,
      referenceKits: recipe.sources,
      composition: recipe.composition,
      recommendedComponents: recipe.components,
      recommendedPackages: mapPackages(framework.family, recipe.packages),
      includedPatterns: patternLabels(selectedPatterns),
      patternDependencies: selectedPatterns.includes("data-table")
        ? { DataTable: ["SuspenseContainer"], SuspenseContainer: ["EmptyState", "ErrorState"] }
        : {},
    },
  };
}

export function buildPrompt(state: ForgeState) {
  const config = buildConfig(state);
  const framework = getFramework(state.framework);
  const kit = getUiKit(state.framework);
  const recipe = getProjectRecipe(state.projectType);
  const selectedPatterns = getPatternKeysForProjectType(state.projectType);
  const rules = [...recipe.guardrails, ...framework.guardrails];
  return `You are continuing a frontend project called ${config.project.name}.

Read AGENTS.md, docs/DESIGN_SYSTEM.md, docs/COMPONENTS.md, and forge.config.json before changing UI. Treat those files as constraints, not suggestions.

When you are designing a new page or reworking a surface rather than making a small change, load the design skill at ${DESIGN_SKILL_PATH} and follow its phases.

PROJECT
- Type: ${PROJECT_LABELS[state.projectType]}
- Slug: ${config.project.slug}
- Density: ${state.density}
- Default theme: ${state.themeMode}

STACK
- ${framework.stackLabel}, ${framework.language}
${kit.cliPackage ? `- ${kit.name} components composed from local source, built on ${kit.primitives}` : `- UI primitives are hand-written in ${framework.layout.uiDir} and styled from the token contract; there is no component library to install`}
- Tailwind CSS v4 with semantic CSS variables
- Routing: ${framework.routing}
- Package manager: ${state.packageManager}

PROJECT LAYOUT
- Token contract: ${framework.layout.styles}
- Forge patterns: ${framework.layout.patternsDir}
- ${kit.name} primitives: ${framework.layout.uiDir}
- First composition to read: ${framework.layout.entry}

DESIGN SYSTEM
- Primary: ${state.primary} with ${config.designSystem.semanticForegrounds.primary} foreground
- Secondary: ${state.secondary} with ${config.designSystem.semanticForegrounds.secondary} foreground
- Accent: ${state.accent} with ${config.designSystem.semanticForegrounds.accent} foreground
- Type voice: ${TYPE_LABELS[state.typeVoice]}
- Corner language: ${state.radius}
- Shadows: ${state.shadowStyle}; motion: ${state.motionStyle}
- Logo: ${logoOutputPath(state) ? `use ${logoOutputPath(state)}` : "no logo asset supplied yet"}

REFERENCE ARCHITECTURE
- Recipe: ${recipe.name}
- Composition: ${recipe.composition}
- Included Forge patterns: ${patternLabels(selectedPatterns).join(", ") || "none"}
- Dependency chain: ${selectedPatterns.includes("data-table") ? "DataTable → SuspenseContainer → EmptyState + ErrorState" : "ComboBox has no additional Forge pattern dependencies"}

IMPLEMENTATION RULES
1. Use semantic variables such as background, foreground, primary, border, ring, success, warning, and info. Do not use brand hex values directly in components.
2. Compose the local ${kit.name} primitives; do not replace the token system with component-level arbitrary colors.
3. Keep foundations, primitives, patterns, feature components, and route compositions separate.
4. Do not add gradients, invented testimonials, fake metrics, or unrelated dependencies.
5. Every data surface must account for loading, empty, error, success, and disabled states where relevant.
6. Preserve keyboard operation, visible focus, reduced motion, responsive layout, and minimum AA text contrast.
7. Update docs/COMPONENTS.md when adding a reusable public component.
${rules.map((rule, index) => `${index + 8}. ${rule}`).join("\n")}

FIRST TASK
Run the project, inspect the example composition and component gallery, then build the first meaningful ${PROJECT_LABELS[state.projectType]} feature without changing the token contract. Explain any necessary system change before editing it.`;
}

export function buildCommands(state: ForgeState) {
  return buildSetupCommands(state.framework, state.packageManager, kitComponents(state.projectType, getPatternKeysForProjectType(state.projectType)), slugify(state.projectName));
}

/** The single command that runs every setup step. */
export const SETUP_SCRIPT_COMMAND = "bash setup.sh";

function setupScript(state: ForgeState) {
  return `#!/usr/bin/env bash
# Setup for ${projectName(state)}, generated by Forge.
#
# Run this file instead of typing the commands:
#
#   ${SETUP_SCRIPT_COMMAND}
#
# or make it executable once and run it directly:
#
#   chmod +x setup.sh && ./setup.sh
#
set -euo pipefail

${buildCommands(state)}
`;
}

/**
 * What the Commands view shows. Pasting the whole block is safe: it runs the
 * script once and leaves the individual steps as comments.
 */
export function buildSetupInstructions(state: ForgeState) {
  const steps = buildCommands(state).split("\n").map((line) => `#   ${line}`).join("\n");
  return `# From the unzipped project, one command does everything:
${SETUP_SCRIPT_COMMAND}

# setup.sh runs:
${steps}
`;
}

export function buildThemeCss(state: ForgeState) {
  const tokens = buildDesignTokens(state);
  const darkSemantic = [
    ["background", tokens.dark.background], ["foreground", tokens.dark.foreground], ["card", tokens.dark.card], ["card-foreground", tokens.dark.cardForeground],
    ["popover", tokens.dark.popover], ["popover-foreground", tokens.dark.popoverForeground], ["primary", tokens.dark.primary], ["primary-foreground", tokens.dark.primaryForeground],
    ["secondary", tokens.dark.secondary], ["secondary-foreground", tokens.dark.secondaryForeground], ["accent", tokens.dark.accent], ["accent-foreground", tokens.dark.accentForeground],
    ["muted", tokens.dark.muted], ["muted-foreground", tokens.dark.mutedForeground], ["destructive", tokens.dark.destructive], ["destructive-foreground", tokens.dark.destructiveForeground],
    ["border", tokens.dark.border], ["input", tokens.dark.input], ["ring", tokens.dark.ring], ["status-success", tokens.dark.success], ["status-warning", tokens.dark.warning], ["status-info", tokens.dark.info],
  ].map(([key, value]) => `    --${key}: ${value};`).join("\n");
  return `${buildTokenCss(state)}\n@media (prefers-color-scheme: dark) {\n  .system {\n${darkSemantic}\n  }\n}\n`;
}

function agentsMd(state: ForgeState) {
  const framework = getFramework(state.framework);
  const kit = getUiKit(state.framework);
  const runPrefix = state.packageManager === "npm" ? "npm run" : state.packageManager;
  return `# AGENTS.md

This repository was generated by Forge. Read this file before changing UI.

## Stack

- ${framework.stackLabel}
${kit.cliPackage ? `- ${kit.name} (${kit.docs}) on ${kit.primitives}` : `- Hand-written primitives in \`${framework.layout.uiDir}\`, styled from the token contract`}
- Tailwind CSS v4 with the semantic token contract in \`${framework.layout.styles}\`

## Setup

Run \`${SETUP_SCRIPT_COMMAND}\` once from the project root. It installs dependencies${kit.cliPackage ? `, adds the ${kit.name} primitives` : ""}, and starts the dev server. Every command it runs is listed in the file.

## Required workflow

1. Read \`forge.config.json\`, \`docs/DESIGN_SYSTEM.md\`, and \`docs/COMPONENTS.md\`.
2. For new pages or a redesign, work through the design skill in \`${DESIGN_SKILL_PATH}\` — discovery, narrative, motion, responsive, accessibility, and QA gates.
3. Reuse semantic tokens and existing public component APIs before adding variants.
4. Keep route composition out of reusable patterns.
5. Demonstrate loading, empty, error, success, disabled, and focus states where relevant.
6. Run \`${runPrefix} typecheck\` and \`${runPrefix} build\` before handoff.

## Non-negotiable design rules

- Never hardcode a brand hex value in a component. Use semantic variables/classes.
- Do not add gradients, decorative animation, fake data claims, or new fonts without updating the design-system documentation.
- Preserve keyboard support, visible focus, responsive behavior, reduced motion, and contrast.
- New reusable components need typed props, a class override, documented states, and an export from their index.

## Framework rules

${framework.guardrails.map((guardrail) => `- ${guardrail}`).join("\n")}
`;
}

function componentsDoc(state: ForgeState) {
  const framework = getFramework(state.framework);
  const kit = getUiKit(state.framework);
  const keys = getPatternKeysForProjectType(state.projectType);
  const rows = keys.map((key) => {
    const item = STARTER_PATTERN_OPTIONS.find((option) => option.key === key);
    return `| ${item?.label ?? key} | ${item?.description ?? "Reusable pattern"} | ${item?.states.join(", ") ?? "default"} |`;
  }).join("\n");
  return `# Component catalog

| Component | Purpose | Required states |
| --- | --- | --- |
${rows}

Public pattern components live in \`${framework.layout.patternsDir}\`. ${kit.name} primitives live in \`${framework.layout.uiDir}\`. Add product-specific components beside them; do not turn domain components into generic primitives prematurely.

## API shape on ${framework.label}

${FAMILY_API_NOTES[framework.family]}

DataTable depends on SuspenseContainer; SuspenseContainer owns EmptyState and ErrorState. ToastProvider is mounted once in the application shell.
`;
}

function readme(state: ForgeState) {
  const framework = getFramework(state.framework);
  const kit = getUiKit(state.framework);
  const logo = logoOutputPath(state);
  return `# ${projectName(state)}

A bootable ${framework.label} + ${kit.name} starter generated by Forge.

## Start

\`\`\`sh
${SETUP_SCRIPT_COMMAND}
\`\`\`

${kit.cliPackage ? `\`setup.sh\` installs dependencies, adds the local ${kit.name} primitives, and starts the dev server.` : `\`setup.sh\` installs dependencies and starts the dev server. The primitives already live in \`${framework.layout.uiDir}\` — there is no component CLI to run.`} Then open ${framework.devUrl}.

To run the steps yourself instead:

\`\`\`sh
${buildCommands(state)}
\`\`\`

## System map

- \`setup.sh\` — every setup step in one command
- \`forge.config.json\` — portable, versioned decisions
- \`${framework.layout.styles}\` — semantic design tokens and light/dark themes
- \`${framework.layout.uiDir}\` — ${kit.cliPackage ? `local ${kit.name} primitives created by setup` : "hand-written primitives you own"}
- \`${framework.layout.patternsDir}\` — reusable product patterns
- \`${framework.layout.entry}\` — the example composition
- \`docs/DESIGN_SYSTEM.md\` and \`docs/COMPONENTS.md\` — human and AI-readable rules
- \`AGENTS.md\` and \`CONTINUE_PROMPT.md\` — instructions for an AI builder
- \`${DESIGN_SKILL_PATH}\` — the website-build design skill, bound to this project's tokens
${logo ? `- \`${logo}\` — uploaded brand mark\n` : ""}`;
}

const LICENSE_TEXT = `MIT License\n\nCopyright (c) 2026 Forge contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.\n`;

export function buildPack(state: ForgeState) {
  return `# Forge starter pack — ${projectName(state)}\n\n## Configuration\n\n\`\`\`json\n${JSON.stringify(buildConfig(state), null, 2)}\n\`\`\`\n\n## Setup commands\n\n\`\`\`sh\n${buildCommands(state)}\n\`\`\`\n\n## Continue prompt\n\n${buildPrompt(state)}\n`;
}

export function buildStarterFiles(state: ForgeState) {
  const framework = getFramework(state.framework);
  const recipe = getProjectRecipe(state.projectType);
  const patternKeys = getPatternKeysForProjectType(state.projectType);
  const hasToast = patternKeys.includes("toast-provider");
  const toastPackage = hasToast ? TOAST_PACKAGES[framework.family] : null;
  const packages = mapPackages(framework.family, [...recipe.packages, ...(toastPackage ? [toastPackage] : [])]);

  const context: ScaffoldContext = {
    state,
    framework,
    name: projectName(state),
    slug: slugify(state.projectName),
    themeCss: buildThemeCss(state),
    patternKeys,
    hasToast,
    packages,
    themeClass: state.themeMode === "system" ? "system" : state.themeMode === "dark" ? "dark" : "",
    logoPath: logoOutputPath(state),
  };

  return {
    ...getScaffold(state.framework)(context),
    ...buildPatternFiles(state.framework, patternKeys),
    "README.md": readme(state),
    "forge.config.json": `${JSON.stringify(buildConfig(state), null, 2)}\n`,
    "theme.css": `${buildFontImport(state)}${buildThemeCss(state)}\n`,
    "setup.sh": setupScript(state),
    "AGENTS.md": agentsMd(state),
    "CONTINUE_PROMPT.md": `${buildPrompt(state)}\n`,
    "docs/DESIGN_SYSTEM.md": buildDesignSystemMarkdown(state),
    "docs/COMPONENTS.md": componentsDoc(state),
    [DESIGN_SKILL_PATH]: buildDesignSkillFile(state),
    LICENSE: LICENSE_TEXT,
  };
}
