"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE_FRAMEWORKS } from "@/lib/site";
import {
  DEFAULT_STATE,
  TYPE_LABELS,
  type Density,
  type ForgeState,
  type ProjectType,
  type Radius,
} from "@/lib/types";
import {
  applyPreset,
  FORGE_PRESETS,
  parseForgeState,
  parsePortableState,
  serializePortableState,
} from "@/lib/config";
import { buildDesignSystemMarkdown } from "@/lib/design-doc";
import {
  FAMILY_LABELS,
  FAMILY_UI_KITS,
  FRAMEWORK_GROUPS,
  FRAMEWORKS,
  getFramework,
  getUiKit,
} from "@/lib/frameworks";
import { OutputDialog } from "@/components/output-dialog";
import { Sidebar } from "@/components/sidebar";
import { ColorField } from "@/components/color-field";
import { FontPicker, useGoogleFontPreview } from "@/components/font-picker";
import { TokenPanel } from "@/components/token-panel";

type ColorKey = "primary" | "secondary" | "accent";
type HexDrafts = Record<ColorKey, string>;

const colorInputs: Array<[ColorKey, string]> = [
  ["primary", "Primary"],
  ["secondary", "Secondary"],
  ["accent", "Accent"],
];

const wizardSteps = [
  {
    eyebrow: "01 / 07",
    title: "What should we call this build?",
    description:
      "Give the next AI model a name it can carry through the brief.",
  },
  {
    eyebrow: "02 / 07",
    title: "What are you building?",
    description:
      "The project type controls the composition and the starter patterns Forge includes.",
  },
  {
    eyebrow: "03 / 07",
    title: "Which framework should this ship on?",
    description:
      "Forge writes a bootable project for the framework you pick, and takes its shadcn components from that framework's distribution.",
  },
  {
    eyebrow: "04 / 07",
    title: "What colors should the system repeat?",
    description:
      "Name the primary, secondary, and accent signals your AI should preserve.",
  },
  {
    eyebrow: "05 / 07",
    title: "What should the interface sound like?",
    description:
      "Set the type voice and corner language before the first component is composed.",
  },
  {
    eyebrow: "06 / 07",
    title: "Does the build have a mark or density preference?",
    description:
      "Add a logo if you have one and choose how much information should fit on screen.",
  },
  {
    eyebrow: "07 / 07",
    title: "Package the context for your AI.",
    description:
      "Generate the design system, prompt, config, setup script, and a real ZIP when the brief feels right.",
  },
] as const;

export function BuilderShell() {
  const [state, setState] = useState<ForgeState>(DEFAULT_STATE);
  const [hexDrafts, setHexDrafts] = useState<HexDrafts>({
    primary: DEFAULT_STATE.primary,
    secondary: DEFAULT_STATE.secondary,
    accent: DEFAULT_STATE.accent,
  });
  const [hasStarted, setHasStarted] = useState(false);
  const [wizardStep, setWizardStep] = useState(0);
  const [isOutputOpen, setIsOutputOpen] = useState(false);
  // Owned here so collapsing the panel survives moving between steps.
  const [isTokenPanelOpen, setIsTokenPanelOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  const configInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("forge-state-v1");
      if (saved) {
        const next = parseForgeState(JSON.parse(saved));
        setState(next);
        setHexDrafts({
          primary: next.primary,
          secondary: next.secondary,
          accent: next.accent,
        });
      }
    } catch {
      // A local draft is optional; the builder remains usable when storage is unavailable.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    const {
      logoDataUrl: _logoDataUrl,
      logoFileName: _logoFileName,
      ...portableDraft
    } = state;
    window.localStorage.setItem(
      "forge-state-v1",
      JSON.stringify({
        ...portableDraft,
        logoDataUrl: null,
        logoFileName: null,
      }),
    );
  }, [state, isHydrated]);

  useEffect(() => {
    if (hasStarted) wizardRef.current?.focus();
  }, [wizardStep, hasStarted]);

  const updateState = <K extends keyof ForgeState>(
    key: K,
    value: ForgeState[K],
  ) => setState((current) => ({ ...current, [key]: value }));

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setIsToastVisible(false), 2600);
  };

  const updateColor = (key: ColorKey, value: string) => {
    const normalized = value.toUpperCase();
    setState((current) => ({
      ...current,
      [key]: normalized,
      presetKey: "custom",
    }));
    setHexDrafts((drafts) => ({ ...drafts, [key]: normalized }));
  };

  const updateHexDraft = (key: ColorKey, value: string) => {
    const next = value.toUpperCase();
    setHexDrafts((drafts) => ({ ...drafts, [key]: next }));
    if (/^#[0-9A-F]{6}$/.test(next))
      setState((current) => ({ ...current, [key]: next, presetKey: "custom" }));
  };

  const resetProject = () => {
    setState(DEFAULT_STATE);
    setHexDrafts({
      primary: DEFAULT_STATE.primary,
      secondary: DEFAULT_STATE.secondary,
      accent: DEFAULT_STATE.accent,
    });
    setHasStarted(false);
    setWizardStep(0);
    window.localStorage.removeItem("forge-state-v1");
    showToast("Draft reset to the Forge defaults");
  };

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    showToast("Copied to clipboard");
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("File downloaded");
  };

  const selectPreset = (value: ForgeState["presetKey"]) => {
    if (value === "custom") return updateState("presetKey", "custom");
    const next = applyPreset(state, value);
    setState(next);
    setHexDrafts({
      primary: next.primary,
      secondary: next.secondary,
      accent: next.accent,
    });
    showToast(`${FORGE_PRESETS[value].name} preset applied`);
  };

  const importConfig = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const next = parsePortableState(String(reader.result));
        setState(next);
        setHexDrafts({
          primary: next.primary,
          secondary: next.secondary,
          accent: next.accent,
        });
        showToast("Forge configuration imported");
      } catch {
        showToast("That file is not a valid Forge configuration");
      }
    };
    reader.readAsText(file);
  };

  const handleLogo = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast("Keep the logo under 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      setState((current) => ({
        ...current,
        logoFileName: file.name,
        logoDataUrl: String(reader.result),
      }));
    reader.readAsDataURL(file);
  };

  const projectName = state.projectName.trim() || "Untitled project";
  useGoogleFontPreview([state.headingFont, state.bodyFont]);

  const framework = getFramework(state.framework);
  const uiKit = getUiKit(state.framework);
  const slug =
    projectName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "forge-project";
  const activeStep =
    wizardStep <= 2
      ? "project-step"
      : wizardStep <= 5
        ? "system-step"
        : "output-step";
  const progress = `${((wizardStep + 1) / wizardSteps.length) * 100}%`;
  // The panel belongs to the steps that shape the system, not the handoff step.
  const showTokenPanel = wizardStep >= 3 && wizardStep < wizardSteps.length - 1;

  const goToStep = (id: string) => {
    setHasStarted(true);
    setWizardStep(id === "project-step" ? 0 : id === "system-step" ? 3 : 6);
  };

  const nextStep = () => {
    if (wizardStep === 0 && !state.projectName.trim()) {
      showToast("Give the project a name first");
      return;
    }
    setWizardStep((step) => Math.min(step + 1, wizardSteps.length - 1));
  };

  const previousStep = () => setWizardStep((step) => Math.max(step - 1, 0));

  const renderWizardStep = () => {
    if (wizardStep === 0) {
      return (
        <div className="wizard-question-field">
          <label htmlFor="project-name">Project name</label>
          <div className="input-frame">
            <input
              id="project-name"
              autoFocus
              type="text"
              value={state.projectName}
              onChange={(event) =>
                updateState("projectName", event.target.value)
              }
              autoComplete="off"
              maxLength={48}
            />
            <span className="input-suffix">.app</span>
          </div>
          <p className="field-help">
            This becomes the working name in the generated README, prompt, and
            ZIP filename.
          </p>
        </div>
      );
    }

    if (wizardStep === 1) {
      return (
        <fieldset className="wizard-choice-field">
          <legend>Project type</legend>
          <div className="choice-grid project-choices">
            {(["dashboard", "landing", "web-app"] as const).map((type) => (
              <label
                className={`choice-card ${state.projectType === type ? "is-selected" : ""}`}
                key={type}
              >
                <input
                  type="radio"
                  name="project-type"
                  value={type}
                  checked={state.projectType === type}
                  onChange={() =>
                    updateState("projectType", type as ProjectType)
                  }
                />
                <span className="choice-icon" aria-hidden="true">
                  {type === "dashboard" ? "▦" : type === "landing" ? "↗" : "⌑"}
                </span>
                <span className="choice-copy">
                  <strong>
                    {type === "web-app"
                      ? "Web app"
                      : type === "landing"
                        ? "Landing page"
                        : "Dashboard"}
                  </strong>
                  <small>
                    {type === "dashboard"
                      ? "Data, controls, dense views"
                      : type === "landing"
                        ? "Story, proof, conversion"
                        : "Product flows, workspace UI"}
                  </small>
                </span>
                <span className="choice-check" aria-hidden="true">
                  ✓
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      );
    }

    if (wizardStep === 2) {
      return (
        <fieldset className="wizard-choice-field">
          <legend>Framework and package manager</legend>
          <div className="stack-row wizard-stack-row">
            <label className="select-wrap framework-select" htmlFor="framework">
              <span className="sr-only">Framework</span>
              <select
                id="framework"
                value={state.framework}
                onChange={(event) =>
                  updateState(
                    "framework",
                    event.target.value as ForgeState["framework"],
                  )
                }
              >
                {FRAMEWORK_GROUPS.map((group) => (
                  <optgroup
                    key={group.family}
                    label={`${FAMILY_LABELS[group.family]} · ${FAMILY_UI_KITS[group.family].name}`}
                  >
                    {group.frameworks.map((key) => (
                      <option key={key} value={key}>
                        {FRAMEWORKS[key].label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <span className="select-chevron">⌄</span>
            </label>
            <div className="stack-chip is-locked">
              <span className="stack-chip-icon">
                {FAMILY_LABELS[framework.family][0]}
              </span>
              <span>{uiKit.name}</span>
              <span className="lock-icon" aria-label="Included">
                ⌁
              </span>
            </div>
            <label
              className="select-wrap compact-select"
              htmlFor="package-manager"
            >
              <span className="sr-only">Package manager</span>
              <select
                id="package-manager"
                value={state.packageManager}
                onChange={(event) =>
                  updateState(
                    "packageManager",
                    event.target.value as ForgeState["packageManager"],
                  )
                }
              >
                <option value="pnpm">pnpm</option>
                <option value="npm">npm</option>
                <option value="yarn">yarn</option>
              </select>
              <span className="select-chevron">⌄</span>
            </label>
          </div>
          <p className="field-help">
            {framework.tagline}{" "}
            {uiKit.cliPackage ? (
              <>
                Components are added with the {uiKit.name} CLI and land in{" "}
                <code>{framework.layout.uiDir}</code>.
              </>
            ) : (
              <>
                There is no component CLI — Forge writes the primitives into{" "}
                <code>{framework.layout.uiDir}</code> for you.
              </>
            )}
          </p>
        </fieldset>
      );
    }

    if (wizardStep === 3) {
      return (
        <fieldset className="wizard-choice-field">
          <legend>Brand palette</legend>
          <label className="field-group preset-field">
            <span>Start from a system preset</span>
            <span className="select-wrap">
              <select
                value={state.presetKey}
                onChange={(event) =>
                  selectPreset(event.target.value as ForgeState["presetKey"])
                }
              >
                <option value="neutral-product">Neutral product</option>
                <option value="editorial-studio">Editorial studio</option>
                <option value="bold-commerce">Bold commerce</option>
                <option value="custom">Custom</option>
              </select>
              <span className="select-chevron">⌄</span>
            </span>
          </label>
          <div className="color-grid">
            {colorInputs.map(([key, label]) => (
              <ColorField
                key={key}
                id={`${key}-color`}
                label={label}
                value={state[key]}
                draft={hexDrafts[key]}
                onValueChange={(next) => updateColor(key, next)}
                onDraftChange={(next) => updateHexDraft(key, next)}
                onDraftBlur={() =>
                  setHexDrafts((drafts) => ({ ...drafts, [key]: state[key] }))
                }
              />
            ))}
          </div>
        </fieldset>
      );
    }

    if (wizardStep === 4) {
      return (
        <div className="wizard-system-fields">
          <div className="wizard-dual-field">
            <label className="field-group field-grow">
              <span>Type voice</span>
              <span className="select-wrap">
                <select
                  value={state.typeVoice}
                  onChange={(event) =>
                    setState((current) => ({
                      ...current,
                      typeVoice: event.target.value as ForgeState["typeVoice"],
                      presetKey: "custom",
                    }))
                  }
                >
                  <option value="instrument">Geist / Utility</option>
                  <option value="editorial">Newsreader / Editorial</option>
                  <option value="system">System Sans / Familiar</option>
                </select>
                <span className="select-chevron">⌄</span>
              </span>
            </label>
            <fieldset className="field-group field-grow">
              <legend>Corner language</legend>
              <div
                className="segmented-control"
                role="radiogroup"
                aria-label="Corner language"
              >
                {(["sharp", "soft", "round"] as Radius[]).map((radius) => (
                  <label
                    className={state.radius === radius ? "is-selected" : ""}
                    key={radius}
                  >
                    <input
                      type="radio"
                      name="radius"
                      value={radius}
                      checked={state.radius === radius}
                      onChange={() =>
                        setState((current) => ({
                          ...current,
                          radius,
                          presetKey: "custom",
                        }))
                      }
                    />
                    <span>{radius[0].toUpperCase() + radius.slice(1)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="wizard-dual-field">
            <FontPicker
              id="heading-font"
              label="Headline font"
              presetLabel={TYPE_LABELS[state.typeVoice].split(" / ")[0]}
              value={state.headingFont}
              onChange={(family) =>
                setState((current) => ({
                  ...current,
                  headingFont: family,
                  presetKey: "custom",
                }))
              }
            />
            <FontPicker
              id="body-font"
              label="Body font"
              presetLabel={TYPE_LABELS[state.typeVoice].split(" / ")[0]}
              value={state.bodyFont}
              onChange={(family) =>
                setState((current) => ({
                  ...current,
                  bodyFont: family,
                  presetKey: "custom",
                }))
              }
            />
          </div>
          <p className="field-help">
            Search is local — the family index ships with Forge. Selecting one
            loads that webfont from fonts.googleapis.com for the preview, and
            the generated stylesheet imports it the same way.
          </p>
          <div className="wizard-triple-field">
            <label className="field-group">
              <span>Theme</span>
              <span className="select-wrap">
                <select
                  value={state.themeMode}
                  onChange={(event) =>
                    setState((current) => ({
                      ...current,
                      themeMode: event.target.value as ForgeState["themeMode"],
                      presetKey: "custom",
                    }))
                  }
                >
                  <option value="system">Follow system</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
                <span className="select-chevron">⌄</span>
              </span>
            </label>
            <label className="field-group">
              <span>Elevation</span>
              <span className="select-wrap">
                <select
                  value={state.shadowStyle}
                  onChange={(event) =>
                    setState((current) => ({
                      ...current,
                      shadowStyle: event.target
                        .value as ForgeState["shadowStyle"],
                      presetKey: "custom",
                    }))
                  }
                >
                  <option value="flat">Flat</option>
                  <option value="soft">Soft</option>
                  <option value="layered">Layered</option>
                </select>
                <span className="select-chevron">⌄</span>
              </span>
            </label>
            <label className="field-group">
              <span>Motion</span>
              <span className="select-wrap">
                <select
                  value={state.motionStyle}
                  onChange={(event) =>
                    setState((current) => ({
                      ...current,
                      motionStyle: event.target
                        .value as ForgeState["motionStyle"],
                      presetKey: "custom",
                    }))
                  }
                >
                  <option value="reduced">Reduced</option>
                  <option value="subtle">Subtle</option>
                  <option value="expressive">Expressive</option>
                </select>
                <span className="select-chevron">⌄</span>
              </span>
            </label>
          </div>
        </div>
      );
    }

    if (wizardStep === 5) {
      return (
        <div className="wizard-dual-field wizard-brand-field">
          <fieldset className="field-group field-grow">
            <legend>Mark</legend>
            <div className="upload-row">
              <label className="upload-zone" htmlFor="logo-upload">
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  onChange={(event) => handleLogo(event.target.files?.[0])}
                />
                <span className="upload-symbol">+</span>
                <span>
                  <strong>
                    {state.logoFileName || "Drop a logo or browse"}
                  </strong>
                  <small>PNG, SVG, JPG · 5MB max</small>
                </span>
              </label>
              <div className="mark-preview" aria-label="Logo preview">
                {state.logoDataUrl ? (
                  <img src={state.logoDataUrl} alt="Uploaded logo preview" />
                ) : (
                  <span className="mark-placeholder">
                    {projectName.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          </fieldset>
          <fieldset className="field-group field-grow">
            <legend>Interface density</legend>
            <div
              className="density-options"
              role="radiogroup"
              aria-label="Interface density"
            >
              {(["airy", "balanced", "dense"] as Density[]).map((density) => (
                <label
                  className={`density-card ${state.density === density ? "is-selected" : ""}`}
                  key={density}
                >
                  <input
                    type="radio"
                    name="density"
                    value={density}
                    checked={state.density === density}
                    onChange={() =>
                      setState((current) => ({
                        ...current,
                        density,
                        presetKey: "custom",
                      }))
                    }
                  />
                  <span className={`density-bars ${density}-bars`}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>
                    <strong>
                      {density[0].toUpperCase() + density.slice(1)}
                    </strong>
                    <small>
                      {density === "airy"
                        ? "Room to think"
                        : density === "dense"
                          ? "More signal per screen"
                          : "Clear and capable"}
                    </small>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      );
    }

    return (
      <div className="wizard-handoff-card">
        <div className="output-card">
          <div className="output-card-header">
            <div>
              <span className="file-type">
                BOOTABLE {framework.label.toUpperCase()} STARTER / ZIP
              </span>
              <strong>{slug}-starter</strong>
            </div>
            <span className="output-version">v0.3 / portable</span>
          </div>
          <div className="file-list">
            <div>
              <span className="file-icon">
                {FAMILY_LABELS[framework.family][0]}
              </span>
              <span>{framework.layout.entry} + package.json</span>
              <span className="file-note">bootable project</span>
            </div>
            <div>
              <span className="file-icon">◒</span>
              <span>{framework.layout.styles}</span>
              <span className="file-note">semantic tokens</span>
            </div>
            <div>
              <span className="file-icon">▸</span>
              <span>setup.sh</span>
              <span className="file-note">one-command setup</span>
            </div>
            <div>
              <span className="file-icon">◇</span>
              <span>forge.config.json</span>
              <span className="file-note">versioned decisions</span>
            </div>
            <div>
              <span className="file-icon">✦</span>
              <span>docs/DESIGN_SYSTEM.md</span>
              <span className="file-note">design system spec</span>
            </div>
            <div>
              <span className="file-icon">✧</span>
              <span>AGENTS.md + design skill</span>
              <span className="file-note">AI guidance</span>
            </div>
            <div>
              <span className="file-icon">◎</span>
              <span>{framework.layout.patternsDir}/</span>
              <span className="file-note">reusable UI</span>
            </div>
          </div>
          <div className="dialog-actions portable-actions">
            <input
              ref={configInputRef}
              className="sr-only"
              type="file"
              accept="application/json,.json,.forge"
              onChange={(event) => {
                importConfig(event.target.files?.[0]);
                event.currentTarget.value = "";
              }}
            />
            <button
              className="secondary-button"
              type="button"
              onClick={() => configInputRef.current?.click()}
            >
              Import config
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={() =>
                downloadBlob(
                  new Blob([serializePortableState(state)], {
                    type: "application/json",
                  }),
                  `${slug}.forge.json`,
                )
              }
            >
              Export config
            </button>
          </div>
          <div className="output-card-footer">
            <p>
              <span className="signal-line" /> Your choices become a reusable
              system.
            </p>
            <div className="output-card-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={() =>
                  downloadBlob(
                    new Blob([buildDesignSystemMarkdown(state)], {
                      type: "text/markdown",
                    }),
                    `${slug}-design-system.md`,
                  )
                }
              >
                Design system .md
              </button>
              <Button
                className="primary-button"
                type="button"
                onClick={() => setIsOutputOpen(true)}
              >
                <span>Generate starter pack</span>
                <span className="button-arrow">↗</span>
              </Button>
            </div>
          </div>
        </div>
        <p className="honest-note">
          <span>i</span> Generates a bootable {framework.label} repository
          locally with tokens, {uiKit.name} components, docs, AI rules, and your
          uploaded mark. The design system is also a standalone markdown file
          any agent can read.
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="app-shell">
        <Sidebar
          activeStep={hasStarted ? activeStep : ""}
          onStepSelect={goToStep}
        />
        <main id="main-content" className="main-content">
          <header className="topbar">
            <div className="topbar-context">
              <span className="topbar-kicker">WORKSPACE / 001</span>
              <span className="topbar-divider" aria-hidden="true" />
              <span>{projectName}</span>
            </div>
            <div className="topbar-actions">
              <span className="save-state">
                <span className="save-dot" />
                <span>Draft saved locally</span>
              </span>
              <button
                className="icon-button"
                type="button"
                onClick={resetProject}
                aria-label="Reset project"
                title="Reset project"
              >
                ↻
              </button>
            </div>
          </header>
          <div className="content-wrap">
            {!hasStarted ? (
              <section className="welcome-screen" aria-labelledby="page-title">
                <section className="intro-grid">
                  <div>
                    <p className="section-label">
                      <span className="section-number">00</span> The starting
                      line
                    </p>
                    <h1 id="page-title">
                      Make the first prompt carry your system.
                    </h1>
                  </div>
                  <div className="intro-copy">
                    <p>
                      Forge turns a few clear choices into the tokens,
                      structure, and context your next AI build should inherit.
                    </p>
                    <span className="intro-note">
                      <span className="signal-line" /> One question at a time.
                      One useful handoff.
                    </span>
                  </div>
                </section>
                <div className="welcome-actions">
                  <p>
                    <span className="signal-line" /> Start with a short brief.
                    Forge handles the rest.
                  </p>
                  <Button
                    className="primary-button"
                    type="button"
                    onClick={() => setHasStarted(true)}
                  >
                    Get started <span className="button-arrow">→</span>
                  </Button>
                </div>
              </section>
            ) : (
              <div className="builder-layout">
                <div className="form-column">
                  <section
                    id="builder-wizard"
                    className="builder-section wizard-section"
                    aria-labelledby="wizard-title"
                  >
                    <div className="wizard-progress">
                      <span className="wizard-progress-track">
                        <span style={{ width: progress }} />
                      </span>
                      <span>{wizardSteps[wizardStep].eyebrow}</span>
                    </div>
                    <div className="wizard-heading">
                      <p className="section-label">
                        <span className="section-number">
                          {wizardSteps[wizardStep].eyebrow.split(" ")[0]}
                        </span>{" "}
                        {wizardStep < 3
                          ? "Shape the project"
                          : wizardStep < 6
                            ? "Lock the system"
                            : "Package the handoff"}
                      </p>
                      <h2 id="wizard-title">{wizardSteps[wizardStep].title}</h2>
                      <p>{wizardSteps[wizardStep].description}</p>
                    </div>
                    <div ref={wizardRef} className="wizard-body" tabIndex={-1}>
                      {renderWizardStep()}
                      {showTokenPanel ? (
                        <TokenPanel
                          state={state}
                          open={isTokenPanelOpen}
                          onOpenChange={setIsTokenPanelOpen}
                        />
                      ) : null}
                    </div>
                    <div className="wizard-controls">
                      <button
                        className="secondary-button"
                        type="button"
                        onClick={previousStep}
                        disabled={wizardStep === 0}
                      >
                        ← Back
                      </button>
                      {wizardStep < wizardSteps.length - 1 ? (
                        <button
                          className="primary-button"
                          type="button"
                          onClick={nextStep}
                        >
                          Continue <span className="button-arrow">→</span>
                        </button>
                      ) : (
                        <span className="wizard-finish-note">
                          Review the brief, then generate when ready.
                        </span>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <div
        className={`toast ${isToastVisible ? "is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        <span className="toast-icon">✓</span>
        <span>{toastMessage}</span>
      </div>
      <OutputDialog
        open={isOutputOpen}
        state={state}
        onClose={() => setIsOutputOpen(false)}
        onCopy={copyText}
        onDownload={downloadBlob}
      />
    </>
  );
}
