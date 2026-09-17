"use client";

import { useEffect, useRef, useState } from "react";
import { buildCommands, buildConfig, buildPack, buildPrompt, slugify } from "@/lib/generator";
import type { ForgeState } from "@/lib/types";

type OutputTab = "prompt" | "config" | "commands";
type OutputDialogProps = { open: boolean; state: ForgeState; onClose: () => void; onCopy: (value: string) => void; onDownload: (value: string, filename: string) => void };

export function OutputDialog({ open, state, onClose, onCopy, onDownload }: OutputDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<OutputTab>("prompt");
  const projectName = state.projectName.trim() || "Untitled project";
  const output = activeTab === "prompt" ? buildPrompt(state) : activeTab === "config" ? JSON.stringify(buildConfig(state), null, 2) : buildCommands(state);

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
          {(["prompt", "config", "commands"] as const).map((tab) => <button className={`dialog-tab ${activeTab === tab ? "is-active" : ""}`} key={tab} role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} type="button">{tab === "prompt" ? "Continue prompt" : tab === "config" ? "Config" : "Commands"}</button>)}
        </div>
        <div className="code-panel"><pre>{output}</pre></div>
        <div className="dialog-footer"><span className="dialog-status"><span className="status-dot" /> Generated locally</span><div className="dialog-actions"><button className="secondary-button" type="button" onClick={() => onCopy(output)}>Copy output</button><button className="primary-button" type="button" onClick={() => onDownload(buildPack(state), `${slugify(projectName)}-forge-pack.md`)}><span>Download pack</span><span className="button-arrow">↓</span></button></div></div>
      </div>
    </dialog>
  );
}
