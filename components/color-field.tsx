"use client";

import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

type ColorFieldProps = {
  id: string;
  label: string;
  /** The committed value, always a valid #RRGGBB. */
  value: string;
  /** The in-progress text, which may be mid-typing and invalid. */
  draft: string;
  onValueChange: (value: string) => void;
  onDraftChange: (draft: string) => void;
  onDraftBlur: () => void;
};

/**
 * A colour input with a real picker rather than the OS one, so the control
 * looks the same everywhere and sits inside the app instead of over it.
 */
export function ColorField({ id, label, value, draft, onValueChange, onDraftChange, onDraftBlur }: ColorFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="color-field" ref={containerRef}>
      <label htmlFor={id}>{label}</label>
      <div className="color-control">
        <button
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={`Choose the ${label.toLowerCase()} color`}
          className="color-swatch"
          onClick={() => setOpen((current) => !current)}
          style={{ background: value }}
          type="button"
        />
        <input
          aria-label={`${label} hex value`}
          className="hex-input"
          id={id}
          maxLength={7}
          onBlur={onDraftBlur}
          onChange={(event) => onDraftChange(event.target.value)}
          spellCheck={false}
          value={draft}
        />
      </div>
      {open ? (
        <div aria-label={`${label} color picker`} className="color-popover" role="dialog">
          <HexColorPicker color={value} onChange={onValueChange} />
        </div>
      ) : null}
    </div>
  );
}
