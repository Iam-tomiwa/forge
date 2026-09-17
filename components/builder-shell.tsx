"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { buildPack } from "@/lib/generator";
import { DEFAULT_STATE, PROJECT_LABELS, TYPE_LABELS, type Density, type ForgeState, type ProjectType, type Radius } from "@/lib/types";
import { LivePreview } from "@/components/live-preview";
import { OutputDialog } from "@/components/output-dialog";
import { Sidebar } from "@/components/sidebar";

type ColorKey = "primary" | "secondary" | "accent";
type HexDrafts = Record<ColorKey, string>;

const colorInputs: Array<[ColorKey, string]> = [["primary", "Primary"], ["secondary", "Secondary"], ["accent", "Accent"]];

export function BuilderShell() {
  const [state, setState] = useState<ForgeState>(DEFAULT_STATE);
  const [hexDrafts, setHexDrafts] = useState<HexDrafts>({ primary: DEFAULT_STATE.primary, secondary: DEFAULT_STATE.secondary, accent: DEFAULT_STATE.accent });
  const [activeStep, setActiveStep] = useState("project-step");
  const [isOutputOpen, setIsOutputOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("forge-state-v1");
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<ForgeState>;
        const next = { ...DEFAULT_STATE, ...parsed };
        setState(next);
        setHexDrafts({ primary: next.primary, secondary: next.secondary, accent: next.accent });
      }
    } catch {
      // A local draft is optional; the builder remains usable when storage is unavailable.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem("forge-state-v1", JSON.stringify(state));
  }, [state, isHydrated]);

  useEffect(() => {
    const sections = ["project-step", "system-step", "output-step"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveStep(visible.target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: [0.1, 0.35, 0.7] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const updateState = <K extends keyof ForgeState>(key: K, value: ForgeState[K]) => setState((current) => ({ ...current, [key]: value }));

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setIsToastVisible(false), 2600);
  };

  const updateColor = (key: ColorKey, value: string) => {
    const normalized = value.toUpperCase();
    updateState(key, normalized);
    setHexDrafts((drafts) => ({ ...drafts, [key]: normalized }));
  };

  const updateHexDraft = (key: ColorKey, value: string) => {
    const next = value.toUpperCase();
    setHexDrafts((drafts) => ({ ...drafts, [key]: next }));
    if (/^#[0-9A-F]{6}$/.test(next)) updateState(key, next);
  };

  const resetProject = () => {
    setState(DEFAULT_STATE);
    setHexDrafts({ primary: DEFAULT_STATE.primary, secondary: DEFAULT_STATE.secondary, accent: DEFAULT_STATE.accent });
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

  const downloadText = (value: string, filename: string) => {
    const url = URL.createObjectURL(new Blob([value], { type: "text/markdown;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Starter pack downloaded");
  };

  const handleLogo = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast("Keep the logo under 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setState((current) => ({ ...current, logoFileName: file.name, logoDataUrl: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const projectName = state.projectName.trim() || "Untitled project";
  const slug = projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "forge-project";

  return (
    <>
      <div className="app-shell">
        <Sidebar activeStep={activeStep} />
        <main id="main-content" className="main-content">
          <header className="topbar">
            <div className="topbar-context"><span className="topbar-kicker">WORKSPACE / 001</span><span className="topbar-divider" aria-hidden="true" /><span>{projectName}</span></div>
            <div className="topbar-actions"><span className="save-state"><span className="save-dot" /><span>Draft saved locally</span></span><button className="icon-button" type="button" onClick={resetProject} aria-label="Reset project" title="Reset project">↻</button></div>
          </header>

          <div className="content-wrap">
            <section className="intro-grid" aria-labelledby="page-title">
              <div><p className="section-label"><span className="section-number">00</span> The starting line</p><h1 id="page-title">Make the first prompt carry your system.</h1></div>
              <div className="intro-copy"><p>Forge turns a few clear choices into the tokens, structure, and context your next AI build should inherit.</p><span className="intro-note"><span className="signal-line" /> A small brief. A more consistent build.</span></div>
            </section>

            <div className="builder-layout">
              <div className="form-column">
                <section id="project-step" className="builder-section" aria-labelledby="project-title">
                  <div className="section-heading"><div><p className="section-label"><span className="section-number">01</span> Shape the project</p><h2 id="project-title">Give the build a point of view.</h2></div><span className="section-state">Required</span></div>
                  <div className="field-group"><label htmlFor="project-name">Project name</label><div className="input-frame"><input id="project-name" type="text" value={state.projectName} onChange={(event) => updateState("projectName", event.target.value)} autoComplete="off" maxLength={48} /><span className="input-suffix">.app</span></div><p className="field-help">This becomes the working name in the generated README and prompt.</p></div>
                  <fieldset className="field-group"><legend>What are you building?</legend><div className="choice-grid project-choices">
                    {(["dashboard", "landing", "web-app"] as const).map((type) => <label className={`choice-card ${state.projectType === type ? "is-selected" : ""}`} key={type}><input type="radio" name="project-type" value={type} checked={state.projectType === type} onChange={() => updateState("projectType", type as ProjectType)} /><span className="choice-icon" aria-hidden="true">{type === "dashboard" ? "▦" : type === "landing" ? "↗" : "⌑"}</span><span className="choice-copy"><strong>{type === "web-app" ? "Web app" : type === "landing" ? "Landing page" : "Dashboard"}</strong><small>{type === "dashboard" ? "Data, controls, dense views" : type === "landing" ? "Story, proof, conversion" : "Product flows, workspace UI"}</small></span><span className="choice-check" aria-hidden="true">✓</span></label>)}
                  </div></fieldset>
                  <fieldset className="field-group"><legend>Starter stack</legend><div className="stack-row"><div className="stack-chip is-locked"><span className="stack-chip-icon">N</span><span>Next.js</span><span className="lock-icon" aria-label="Included">⌁</span></div><div className="stack-chip is-locked"><span className="stack-chip-icon">S</span><span>shadcn/ui</span><span className="lock-icon" aria-label="Included">⌁</span></div><label className="select-wrap compact-select" htmlFor="package-manager"><span className="sr-only">Package manager</span><select id="package-manager" value={state.packageManager} onChange={(event) => updateState("packageManager", event.target.value as ForgeState["packageManager"])}><option value="pnpm">pnpm</option><option value="npm">npm</option><option value="yarn">yarn</option></select><span className="select-chevron">⌄</span></label></div><p className="field-help">The base is fixed so every generated project starts from the same floor.</p></fieldset>
                </section>

                <section id="system-step" className="builder-section" aria-labelledby="system-title">
                  <div className="section-heading"><div><p className="section-label"><span className="section-number">02</span> Lock the system</p><h2 id="system-title">Set the signals your UI should repeat.</h2></div><span className="section-state">Live preview</span></div>
                  <fieldset className="field-group"><legend>Brand palette</legend><div className="color-grid">{colorInputs.map(([key, label]) => <label className="color-field" key={key}><span>{label}</span><span className="color-control"><input type="color" value={state[key]} onChange={(event) => updateColor(key, event.target.value)} aria-label={`${label} color`} /><input className="hex-input" value={hexDrafts[key]} onChange={(event) => updateHexDraft(key, event.target.value)} onBlur={() => setHexDrafts((drafts) => ({ ...drafts, [key]: state[key] }))} maxLength={7} spellCheck={false} aria-label={`${label} hex value`} /></span></label>)}</div></fieldset>
                  <div className="field-row"><label className="field-group field-grow"><span>Type voice</span><span className="select-wrap"><select value={state.typeVoice} onChange={(event) => updateState("typeVoice", event.target.value as ForgeState["typeVoice"])}><option value="instrument">Instrument Sans / Utility</option><option value="editorial">Newsreader / Editorial</option><option value="system">System Sans / Familiar</option></select><span className="select-chevron">⌄</span></span></label><fieldset className="field-group field-grow"><legend>Corner language</legend><div className="segmented-control" role="radiogroup" aria-label="Corner language">{(["sharp", "soft", "round"] as Radius[]).map((radius) => <label className={state.radius === radius ? "is-selected" : ""} key={radius}><input type="radio" name="radius" value={radius} checked={state.radius === radius} onChange={() => updateState("radius", radius)} /><span>{radius[0].toUpperCase() + radius.slice(1)}</span></label>)}</div></fieldset></div>
                  <fieldset className="field-group"><legend>Mark</legend><div className="upload-row"><label className="upload-zone" htmlFor="logo-upload"><input id="logo-upload" type="file" accept="image/png,image/jpeg,image/svg+xml,image/webp" onChange={(event) => handleLogo(event.target.files?.[0])} /><span className="upload-symbol">+</span><span><strong>{state.logoFileName || "Drop a logo or browse"}</strong><small>PNG, SVG, JPG · 5MB max</small></span></label><div className="mark-preview" aria-label="Logo preview">{state.logoDataUrl ? <img src={state.logoDataUrl} alt="Uploaded logo preview" /> : <span className="mark-placeholder">{projectName.slice(0, 2).toUpperCase()}</span>}</div></div></fieldset>
                  <fieldset className="field-group density-field"><legend>Interface density</legend><div className="density-options" role="radiogroup" aria-label="Interface density">{(["airy", "balanced", "dense"] as Density[]).map((density) => <label className={`density-card ${state.density === density ? "is-selected" : ""}`} key={density}><input type="radio" name="density" value={density} checked={state.density === density} onChange={() => updateState("density", density)} /><span className={`density-bars ${density}-bars`}><i /><i /><i /></span><span><strong>{density[0].toUpperCase() + density.slice(1)}</strong><small>{density === "airy" ? "Room to think" : density === "dense" ? "More signal per screen" : "Clear and capable"}</small></span></label>)}</div></fieldset>
                </section>

                <section id="output-step" className="builder-section output-section" aria-labelledby="output-title">
                  <div className="section-heading"><div><p className="section-label"><span className="section-number">03</span> Package the handoff</p><h2 id="output-title">Give your AI a useful starting point.</h2></div><span className="section-state ready-state"><span className="status-dot" /> Ready to generate</span></div>
                  <div className="output-card"><div className="output-card-header"><div><span className="file-type">FORGE PACK</span><strong>{slug}-starter</strong></div><span className="output-version">v0.1 / local</span></div><div className="file-list"><div><span className="file-icon">◒</span><span>theme.css</span><span className="file-note">tokens</span></div><div><span className="file-icon">◇</span><span>starter.config.json</span><span className="file-note">decisions</span></div><div><span className="file-icon">⌘</span><span>setup.sh</span><span className="file-note">commands</span></div><div><span className="file-icon">✦</span><span>CONTINUE_PROMPT.md</span><span className="file-note">context</span></div></div><div className="output-card-footer"><p><span className="signal-line" /> Your choices become a reusable brief.</p><Button className="primary-button" type="button" onClick={() => setIsOutputOpen(true)}><span>Generate starter pack</span><span className="button-arrow">↗</span></Button></div></div><p className="honest-note"><span>i</span> MVP output is a local, deterministic pack. It never calls an AI API or uploads your mark.</p>
                </section>
              </div>
              <LivePreview state={state} />
            </div>
          </div>
        </main>
      </div>
      <div className={`toast ${isToastVisible ? "is-visible" : ""}`} role="status" aria-live="polite"><span className="toast-icon">✓</span><span>{toastMessage}</span></div>
      <OutputDialog open={isOutputOpen} state={state} onClose={() => setIsOutputOpen(false)} onCopy={copyText} onDownload={downloadText} />
    </>
  );
}
