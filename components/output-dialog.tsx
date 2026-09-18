"use client";

import { useEffect, useRef, useState } from "react";
import { zipSync, strToU8 } from "fflate";
import { buildDesignSystemMarkdown } from "@/lib/design-doc";
import { buildConfig, buildPrompt, buildSetupInstructions, buildStarterFiles, logoOutputPath, slugify } from "@/lib/generator";
import type { ForgeState } from "@/lib/types";

type OutputTab = "prompt" | "design" | "config" | "commands";

const TAB_LABELS: Record<OutputTab, string> = { prompt: "Continue prompt", design: "Design system", config: "Config", commands: "Setup" };
type OutputDialogProps = { open: boolean; state: ForgeState; onClose: () => void; onCopy: (value: string) => void; onDownload: (value: Blob, filename: string) => void };

function dataUrlToBytes(dataUrl: string) {
  const encoded = dataUrl.split(",")[1];
  if (!encoded) return null;
  const binary = window.atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

type ArchiveEntry = Uint8Array | [Uint8Array, { os: number; attrs: number }];

/** os 3 is Unix; the attribute block is rwxr-xr-x shifted into place. */
const EXECUTABLE: { os: number; attrs: number } = { os: 3, attrs: 0o755 << 16 };

function buildArchive(state: ForgeState) {
  const starterFiles = buildStarterFiles(state);
  const archiveFiles: Record<string, ArchiveEntry> = Object.fromEntries(
    Object.entries(starterFiles).map(([path, contents]) => [path, path === "setup.sh" ? [strToU8(contents), EXECUTABLE] : strToU8(contents)]),
  );
  const logoPath = logoOutputPath(state);
  if (state.logoDataUrl && logoPath) {
    const logoBytes = dataUrlToBytes(state.logoDataUrl);
    if (logoBytes) archiveFiles[logoPath] = logoBytes;
  }
  return new Blob([zipSync(archiveFiles, { level: 6 })], { type: "application/zip" });
}

export function OutputDialog({ open, state, onClose, onCopy, onDownload }: OutputDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<OutputTab>("prompt");
  const projectName = state.projectName.trim() || "Untitled project";
  const designMarkdown = buildDesignSystemMarkdown(state);
  const output = activeTab === "prompt" ? buildPrompt(state) : activeTab === "design" ? designMarkdown : activeTab === "config" ? JSON.stringify(buildConfig(state), null, 2) : buildSetupInstructions(state);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog className="output-dialog" ref={dialogRef} onClose={onClose} aria-labelledby="dialog-title">
      <div className="dialog-shell">
        <div className="dialog-header"><div><p className="section-label"><span className="section-number">PACK</span> Your starter context</p><h2 id="dialog-title">{projectName} is ready to hand off.</h2></div><button className="icon-button dialog-close" type="button" onClick={onClose} aria-label="Close output">×</button></div>
        <div className="dialog-tabs" role="tablist" aria-label="Generated output">
          {(["prompt", "design", "config", "commands"] as const).map((tab) => <button className={`dialog-tab ${activeTab === tab ? "is-active" : ""}`} key={tab} role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} type="button">{TAB_LABELS[tab]}</button>)}
        </div>
        <div className="code-panel"><pre>{output}</pre></div>
        <div className="dialog-footer"><span className="dialog-status"><span className="status-dot" /> The design system ships inside the ZIP too</span><div className="dialog-actions"><button className="secondary-button" type="button" onClick={() => onCopy(output)}>Copy output</button><button className="secondary-button" type="button" onClick={() => onDownload(new Blob([designMarkdown], { type: "text/markdown" }), `${slugify(projectName)}-design-system.md`)}>Download .md</button><button className="primary-button" type="button" onClick={() => onDownload(buildArchive(state), `${slugify(projectName)}-forge-starter.zip`)}><span>Download ZIP</span><span className="button-arrow">↓</span></button></div></div>
      </div>
    </dialog>
  );
}
