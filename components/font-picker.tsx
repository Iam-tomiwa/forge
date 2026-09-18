"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { findGoogleFont, googleFontCategoryLabel, googleFontsCssUrl, searchGoogleFonts } from "@/lib/google-fonts";

type FontPickerProps = {
  id: string;
  label: string;
  /** The family in use when nothing is chosen, shown so the fallback is never a mystery. */
  presetLabel: string;
  value: string | null;
  onChange: (family: string | null) => void;
};

/**
 * Loads the chosen families for preview. The index is bundled, but the webfont
 * itself still comes from Google, so this is the one outbound request the
 * builder makes — and only once a font is selected.
 */
export function useGoogleFontPreview(families: Array<string | null>) {
  const url = googleFontsCssUrl(families);
  useEffect(() => {
    const id = "forge-google-font-preview";
    const existing = document.getElementById(id) as HTMLLinkElement | null;
    if (!url) {
      existing?.remove();
      return;
    }
    const link = existing ?? document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    if (link.href !== url) link.href = url;
    if (!existing) document.head.append(link);
  }, [url]);
}

export function FontPicker({ id, label, presetLabel, value, onChange }: FontPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchGoogleFonts(query), [query]);
  const selected = findGoogleFont(value);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const choose = (family: string | null) => {
    onChange(family);
    setOpen(false);
    setQuery("");
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") return setOpen(false);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((index) => (results.length ? (index + step + results.length) % results.length : 0));
      return;
    }
    if (event.key === "Enter" && open) {
      event.preventDefault();
      const font = results[activeIndex];
      if (font) choose(font.family);
    }
  };

  return (
    <div className="font-picker" ref={containerRef}>
      <span className="font-picker-label" id={`${id}-label`}>{label}</span>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={`${id}-label`}
        className="font-picker-trigger"
        id={id}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onKeyDown}
        type="button"
      >
        <span style={selected ? { fontFamily: `"${selected.family}", sans-serif` } : undefined}>
          {selected ? selected.family : `${presetLabel} (preset)`}
        </span>
        <span aria-hidden="true">⌄</span>
      </button>

      {open ? (
        <div className="font-picker-panel">
          <input
            className="font-picker-search"
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search 1,800+ Google fonts"
            ref={searchRef}
            type="text"
            value={query}
          />
          <ul aria-labelledby={`${id}-label`} className="font-picker-list" role="listbox">
            <li>
              <button className={value === null ? "is-selected" : ""} onClick={() => choose(null)} type="button">
                <span>{presetLabel}</span>
                <small>type voice preset</small>
              </button>
            </li>
            {results.map((font, index) => (
              <li key={font.family} role="option" aria-selected={font.family === value}>
                <button
                  className={[index === activeIndex ? "is-active" : "", font.family === value ? "is-selected" : ""].filter(Boolean).join(" ")}
                  onClick={() => choose(font.family)}
                  onMouseEnter={() => setActiveIndex(index)}
                  type="button"
                >
                  <span>{font.family}</span>
                  <small>{googleFontCategoryLabel(font.category)}</small>
                </button>
              </li>
            ))}
            {results.length === 0 ? <li className="font-picker-empty">No family matches that name</li> : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
