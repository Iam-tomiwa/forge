import { DESIGN_SKILL_NAME, DESIGN_SKILL_SOURCE } from "./design-skill";
import { accessibleForeground, buildDesignTokens, contrastRatio, RADIUS_STEPS, radiusStepValue, scaleLength } from "./design-tokens";
import { getFramework, getUiKit } from "./frameworks";
import { getPatternKeysForProjectType, STARTER_PATTERN_OPTIONS } from "./patterns";
import { getProjectRecipe, kitComponents } from "./recipes";
import { PROJECT_LABELS, type ForgeState, type FrameworkFamily } from "./types";

/** How each family exposes the shared pattern API. */
export const FAMILY_API_NOTES: Record<FrameworkFamily, string> = {
  react: "Props are plain function props: `onValueChange`, `reset`, `onPageChange`. Every component accepts `className`.",
  vue: "ComboBox is a `v-model` component; callbacks stay function props (`reset`, `onPageChange`). Every component accepts a `class` prop.",
  svelte: "ComboBox exposes `bind:value`; slots are snippets (`icon`, `action`, `empty`, `fallback`). Every component accepts a `class` prop.",
  vanilla: "Patterns are factory functions — `createComboBox`, `createDataTable` — that return a DOM node plus setters (`setValue`, `setRows`, `setState`). Every factory accepts a `class` option that is merged with its base classes.",
  angular: "Inputs are signal inputs, ComboBox uses a two-way `[(value)]` model, and recovery is `[recoverable]` plus `(retry)`. Base classes come from a host binding, so a `class` on the element is merged, not replaced.",
};

function fontName(stack: string) {
  return stack.split(",")[0].replace(/["']/g, "").trim();
}

function ratio(foreground: string, background: string) {
  const value = contrastRatio(foreground, background);
  const grade = value >= 7 ? "AAA" : value >= 4.5 ? "AA" : value >= 3 ? "AA Large" : "below AA";
  return `${value.toFixed(2)}:1 (${grade})`;
}

const VOICE_TONE: Record<ForgeState["typeVoice"], string> = {
  instrument: "utilitarian and precise",
  editorial: "editorial and considered",
  system: "familiar and direct",
};

const RADIUS_TONE: Record<ForgeState["radius"], string> = {
  sharp: "crisp corners",
  soft: "softly rounded corners",
  round: "fully rounded corners",
};

const DENSITY_TONE: Record<ForgeState["density"], string> = {
  airy: "generous spacing that gives each decision room",
  balanced: "a balanced rhythm that stays readable while showing enough at once",
  dense: "information-dense layouts that fit more signal per screen",
};

const SHADOW_TONE: Record<ForgeState["shadowStyle"], string> = {
  flat: "Elevation is deliberately absent: hierarchy comes from borders, spacing, and surface color",
  soft: "Elevation is gentle and diffused",
  layered: "Elevation is layered, stacking a tight shadow under a wider one",
};

const MOTION_TONE: Record<ForgeState["motionStyle"], string> = {
  reduced: "motion is suppressed to zero-duration transitions",
  subtle: "motion is quick and purposeful",
  expressive: "motion is eased and noticeable without being decorative",
};

const LIGHT_USAGE: Array<[string, string, string]> = [
  ["background", "Background", "Page background"],
  ["foreground", "Foreground", "Body text"],
  ["card", "Card", "Card and panel surfaces"],
  ["cardForeground", "Card Foreground", "Text on cards"],
  ["popover", "Popover", "Menus, popovers, command palettes"],
  ["popoverForeground", "Popover Foreground", "Text inside popovers"],
  ["muted", "Muted", "Subdued fills, table headers, hover rows"],
  ["mutedForeground", "Muted Foreground", "Secondary and helper text"],
  ["border", "Border", "Dividers and component borders"],
  ["input", "Input", "Form control borders"],
  ["ring", "Ring", "Focus rings"],
  ["destructive", "Destructive", "Destructive actions and error surfaces"],
  ["success", "Success", "Confirmed and healthy states"],
  ["warning", "Warning", "Pending and caution states"],
  ["info", "Info", "Informational states"],
];

function colorList(scheme: Record<string, string>) {
  return LIGHT_USAGE.map(([key, label, usage]) => `- **${label}** (${scheme[key]}): ${usage}`).join("\n");
}

/**
 * A standalone design-system document. It is written into every starter as
 * docs/DESIGN_SYSTEM.md and can be downloaded on its own, so it has to stand
 * up without the rest of the repository around it.
 */
export function buildDesignSystemMarkdown(state: ForgeState) {
  const name = state.projectName.trim() || "Untitled project";
  const framework = getFramework(state.framework);
  const kit = getUiKit(state.framework);
  const recipe = getProjectRecipe(state.projectType);
  const tokens = buildDesignTokens(state);
  const patternKeys = getPatternKeysForProjectType(state.projectType);
  const patterns = STARTER_PATTERN_OPTIONS.filter((option) => patternKeys.includes(option.key));
  const components = kitComponents(state.projectType, patternKeys);
  const unit = tokens.spacing.space;
  const radius = tokens.shape.radius;
  const heading = fontName(tokens.typography.heading);
  const body = fontName(tokens.typography.sans);
  const mono = fontName(tokens.typography.mono);

  const spacingSteps: Array<[string, number, string]> = [
    ["xs", 1, "Inline icon gaps"],
    ["sm", 2, "Tight component padding"],
    ["md", 4, "Default padding"],
    ["lg", 6, "Card padding"],
    ["xl", 8, "Section gaps"],
    ["2xl", 12, "Layout sections"],
    ["3xl", 16, "Page-level spacing"],
  ];

  const elevation = state.shadowStyle === "flat"
    ? "No shadows are defined. Separate surfaces with `border`, spacing, and `muted` fills instead of depth."
    : [
        `- **sm** \`var(--shadow-sm)\`: ${tokens.shape.sm}. Buttons, chips, resting cards.`,
        `- **md** \`var(--shadow-md)\`: ${tokens.shape.md}. Raised cards, popovers, dropdowns.`,
        `- **lg** \`var(--shadow-lg)\`: ${tokens.shape.lg}. Dialogs, sheets, command palettes.`,
      ].join("\n");

  const rules = [...recipe.guardrails, ...framework.guardrails];

  return `# ${name} Design System

Generated by Forge for **${framework.stackLabel}** with **${kit.name}**. Project type: ${PROJECT_LABELS[state.projectType]}.

## Overview

${name} is ${VOICE_TONE[state.typeVoice]}, using ${RADIUS_TONE[state.radius]} and ${DENSITY_TONE[state.density]}. ${SHADOW_TONE[state.shadowStyle]}, and ${MOTION_TONE[state.motionStyle]}. The signal color \`${state.primary}\` carries primary actions against neutral surfaces, with \`${state.secondary}\` and \`${state.accent}\` in support.

Every value below exists as a CSS variable in \`${framework.layout.styles}\`. Components read the variables; they never hardcode a brand hex. The same variable names are generated for every framework Forge supports, so this document travels with the decisions rather than the stack.

---

## Colors

### Brand signals

- **Primary** (${state.primary}): Primary actions, active states, focus ring. Text on it: ${accessibleForeground(state.primary)}
- **Secondary** (${state.secondary}): Supporting surfaces and secondary actions. Text on it: ${accessibleForeground(state.secondary)}
- **Accent** (${state.accent}): Highlights and emphasis, used sparingly. Text on it: ${accessibleForeground(state.accent)}

### Light theme

${colorList(tokens.light)}

### Dark theme

${colorList(tokens.dark)}

### Measured contrast

- Body text on background: ${ratio(tokens.light.foreground, tokens.light.background)} light, ${ratio(tokens.dark.foreground, tokens.dark.background)} dark
- Text on primary: ${ratio(accessibleForeground(state.primary), state.primary)}
- Text on secondary: ${ratio(accessibleForeground(state.secondary), state.secondary)}
- Text on accent: ${ratio(accessibleForeground(state.accent), state.accent)}
- Muted foreground on background: ${ratio(tokens.light.mutedForeground, tokens.light.background)} light, ${ratio(tokens.dark.mutedForeground, tokens.dark.background)} dark

Foreground colors are chosen automatically for the strongest contrast against each brand color. Any new color must clear 4.5:1 for body text and 3:1 for large text and interactive boundaries.

## Typography

- **Headline Font**: ${heading}${state.headingFont ? " (Google Fonts)" : ""}
- **Body Font**: ${body}${state.bodyFont ? " (Google Fonts)" : ""}
- **Mono Font**: ${mono}
${state.headingFont || state.bodyFont ? `\nThe webfonts are imported at the top of \`${framework.layout.styles}\`; keep that import first, because CSS requires it before any other rule.\n` : ""}

\`\`\`css
--font-heading: ${tokens.typography.heading};
--font-sans: ${tokens.typography.sans};
--font-mono: ${tokens.typography.mono};
\`\`\`

${tokens.typeScale.map((step) => `- **${step.label}** (\`text-${step.key}\`): ${fontName(tokens.typography[step.role])} ${scaleLength(step.size)} / ${step.weight}, ${step.lineHeight} line height — ${step.usage}`).join("\n")}

The scale is sized by the chosen density (${state.density}). Each step is a Tailwind theme key, so \`text-h1\` and \`text-body-sm\` are real utilities in this project.

---

## Spacing

Base unit: **${scaleLength(unit)}** (\`--space-unit\`)

${spacingSteps.map(([label, factor, usage]) => `- **${label}**: ${scaleLength(unit, factor)} — ${usage}`).join("\n")}

- **Control height**: ${scaleLength(tokens.spacing.control)} (\`--control-height\`) — every button, input, and select shares it
- **Section gap**: ${scaleLength(tokens.spacing.section)} (\`--section-gap\`) — vertical rhythm between sections

## Border Radius

Base radius: **${scaleLength(radius)}** (\`--radius\`)

${RADIUS_STEPS.map((step) => `- **${step.name}** (${radiusStepValue(radius, step)}${step.cap && Number.parseFloat(scaleLength(radius, step.factor)) > step.cap ? `, capped from ${scaleLength(radius, step.factor)}` : ""}): ${step.usage}`).join("\n")}
- **full** (9999px): Avatars, status dots, pills

## Elevation

${elevation}

## Motion

- **Fast**: ${tokens.motion.fast} (\`--motion-fast\`) — hovers, focus, color changes
- **Normal**: ${tokens.motion.normal} (\`--motion-normal\`) — popovers, sheets, list transitions
- **Easing**: \`${tokens.motion.easing}\` (\`--motion-easing\`)

Durations collapse to \`0ms\` under \`prefers-reduced-motion: reduce\`, which the generated stylesheet already handles. Never animate a value the user cannot opt out of.

---

## Components

### Primitives

${kit.cliPackage
    ? `Installed from ${kit.name} into \`${framework.layout.uiDir}\`: ${components.join(", ")}.`
    : `Hand-written in \`${framework.layout.uiDir}\`: button, card, input, and badge factories. There is no component CLI, so this layer is yours from the first commit.`}

These are owned source. Edit them in place rather than wrapping them in a second abstraction.

### Buttons

- **Primary**: \`primary\` fill, \`primary-foreground\` text, no border. Hover drops opacity to 90%.
- **Secondary**: \`secondary\` fill, \`secondary-foreground\` text, no border.
- **Outline**: transparent fill, \`foreground\` text, 1px \`border\`. Hover fills with \`muted\`.
- **Ghost**: transparent fill, \`muted-foreground\` text, no border. Hover fills with \`muted\`.
- **Destructive**: \`destructive\` fill, \`destructive-foreground\` text, no border.

Sizes step from the control height: **sm** ${scaleLength(tokens.spacing.control, 0.85)}, **md** ${scaleLength(tokens.spacing.control)}, **lg** ${scaleLength(tokens.spacing.control, 1.15)}. Radius \`--radius-md\` (${scaleLength(radius, 0.8)}). Disabled is 50% opacity with hover and focus suppressed; focus is always a visible 2px \`ring\`.

### Cards

\`card\` fill, \`card-foreground\` text, 1px \`border\`, radius \`--radius-lg\` (${scaleLength(radius, 1)}), padding ${scaleLength(unit, 6)}${state.shadowStyle === "flat" ? ", no shadow" : ", \`--shadow-sm\` at rest and \`--shadow-md\` when raised"}.

### Inputs

Height ${scaleLength(tokens.spacing.control)}, 1px \`input\` border, \`background\` fill, radius \`--radius-md\` (${scaleLength(radius, 0.8)}).

- **Focus**: 2px \`ring\`
- **Error**: \`destructive\` border with \`destructive\` helper text
- **Disabled**: \`muted\` fill at 50% opacity
- **Label**: \`text-caption\` weight 500; **helper text**: \`text-body-sm\` in \`muted-foreground\`

### Status and badges

Status colors are tinted, never solid, on surfaces: \`success\`, \`warning\`, \`info\`, and \`destructive\` at low opacity for the fill with the full color for text. Badge type is \`text-caption\`, radius \`--radius-sm\` (${scaleLength(radius, 0.6)}).

### Forge patterns

Reusable product behavior in \`${framework.layout.patternsDir}\`. Each one must keep the states listed here.

| Component | Purpose | Required states |
| --- | --- | --- |
${patterns.map((pattern) => `| ${pattern.label} | ${pattern.description} | ${pattern.states.join(", ")} |`).join("\n")}

DataTable depends on SuspenseContainer; SuspenseContainer owns EmptyState and ErrorState. ToastProvider mounts once in the application shell.

**API on ${framework.label}:** ${FAMILY_API_NOTES[framework.family]}

## Composition

${recipe.name}: ${recipe.composition}

Expected surfaces:

${recipe.components.map((component) => `- ${component}`).join("\n")}

---

## Do's and Don'ts

1. **Do** use semantic variables — \`background\`, \`foreground\`, \`primary\`, \`border\`, \`ring\`, \`success\`, \`warning\`, \`info\` — for every component color.
2. **Don't** hardcode a brand hex in a component. The brand colors are inputs to the token system, not component values.
3. **Do** keep the four layers separate: foundations, ${kit.name} primitives, Forge patterns, then route compositions. Lower layers never import from higher ones.
4. **Do** design loading, empty, error, success, and disabled states alongside the happy path; every data surface needs them.
5. **Don't** add gradients, decorative animation, invented testimonials, fake metrics, or new fonts without updating this document first.
6. **Do** keep every interactive control keyboard-operable with a visible focus ring, and honor \`prefers-reduced-motion\`.
7. **Do** check both themes and all three widths — narrow mobile, tablet, wide desktop — before calling a surface done.
8. **Don't** introduce a second spacing or radius scale. If a value is missing, extend the tokens rather than reaching for an arbitrary number.

### For ${recipe.name.toLowerCase()} work on ${framework.label}

${rules.map((rule) => `- ${rule}`).join("\n")}
`;
}

/** Where the design skill lands so agent tooling discovers it automatically. */
export const DESIGN_SKILL_PATH = `.claude/skills/${DESIGN_SKILL_NAME}/SKILL.md`;

/**
 * The website-build skill, bound to this project. The skill asks for a brand
 * guide in Phase 0.3 and a stack decision in Phase 15; the generated starter
 * already answers both, so the preamble points at them instead of letting an
 * agent invent a second system.
 */
export function buildDesignSkillFile(state: ForgeState) {
  const framework = getFramework(state.framework);
  const name = state.projectName.trim() || "Untitled project";
  const binding = [
    "",
    `> **Phase 0.3 is already answered for this project.** Forge generated \`docs/DESIGN_SYSTEM.md\` — the`,
    `> brand guide for ${name} — with the tokens, type scale, component contracts, and rules this`,
    "> repository already ships. Read it first and enforce it. Do not establish a second token system:",
    "> Phase 4 is a review step here, not a creation step.",
    ">",
    `> **Phase 15 is already answered too:** the stack is ${framework.stackLabel}, and the reusable`,
    `> patterns in \`${framework.layout.patternsDir}\` cover the async, empty, error, and feedback states`,
    "> the quality gates ask for. Compose those before building new primitives.",
    "",
  ].join("\n");
  const marker = "---\n\n# Premium Interactive Website — Build Skill";
  return DESIGN_SKILL_SOURCE.replace(marker, `---\n${binding}\n# Premium Interactive Website — Build Skill`);
}
