import type { PatternKey } from "../types";
import type { PatternContext, PatternSource } from "./shared";

/**
 * Generated from components/patterns/*.tsx by scripts/sync-patterns.mjs.
 * Edit the .tsx files — the wizard renders those same modules — then run
 * `npm run sync:patterns`. npm run verify checks that the two stay identical.
 */
export function buildReactPatterns(context: PatternContext): Record<PatternKey, PatternSource> {
  const { utils, ui } = context;
  return {
    "empty-state": {
      fileName: "empty-state.tsx",
      content: `import type { ReactNode } from "react";
import { cn } from "${utils}";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function EmptyState({ title, description, action, icon, size = "md", className }: EmptyStateProps) {
  return (
    <div className={cn("mx-auto flex flex-col items-center justify-center text-center", size === "sm" ? "gap-4 py-8" : size === "lg" ? "gap-6 py-16" : "gap-6 py-12", className)} role="status">
      {icon ? <div className={cn("flex items-center justify-center rounded-full bg-muted text-primary", size === "sm" ? "size-14" : "size-20")} aria-hidden="true">{icon}</div> : null}
      <div className="space-y-2"><p className={cn("font-semibold", size === "sm" ? "text-h4" : "text-h2")}>{title}</p>{description ? <p className="mx-auto max-w-md text-body-lg text-muted-foreground">{description}</p> : null}</div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
`,
    },
    "error-state": {
      fileName: "error-state.tsx",
      content: `"use client";

import { cn } from "${utils}";

type ErrorStateProps = {
  title?: string;
  description?: string;
  reset?: () => void;
  compact?: boolean;
  className?: string;
};

export function ErrorState({ title = "Something went wrong", description = "Try again or come back in a moment.", reset, compact = false, className }: ErrorStateProps) {
  return (
    <div className={cn("mx-auto flex flex-col items-center justify-center text-center", compact ? "gap-3 py-8" : "gap-4 py-12", className)} role="alert">
      <svg className={cn("text-destructive", compact ? "size-12" : "size-20")} aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
      <div className="space-y-2"><p className={cn("font-semibold", compact ? "text-h4" : "text-h2")}>{title}</p><p className="mx-auto max-w-sm text-body text-muted-foreground">{description}</p></div>
      {reset ? <button className="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={reset} type="button">Try again</button> : null}
    </div>
  );
}
`,
    },
    "suspense-container": {
      fileName: "suspense-container.tsx",
      content: `import { Suspense, type ReactNode } from "react";
import { cn } from "${utils}";
import { EmptyState } from "./empty-state";
import { ErrorState } from "./error-state";

export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
type SuspenseContainerProps = {
  children: ReactNode;
  state?: AsyncState;
  fallback?: ReactNode;
  emptyState?: ReactNode;
  errorState?: ReactNode;
  reset?: () => void;
  className?: string;
};

function DefaultFallback() {
  return <div className="min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none" aria-label="Loading" role="status" />;
}

export function SuspenseContainer({ children, state = "success", fallback = <DefaultFallback />, emptyState, errorState, reset, className }: SuspenseContainerProps) {
  if (state === "loading") return <div className={className}>{fallback}</div>;
  if (state === "error") return <div className={className}>{errorState ?? <ErrorState reset={reset} />}</div>;
  if (state === "empty") return <div className={className}>{emptyState ?? <EmptyState title="Nothing here yet" description="There are no records to show." />}</div>;
  return <Suspense fallback={fallback}><div className={cn(className)}>{children}</div></Suspense>;
}
`,
    },
    "combo-box": {
      fileName: "combo-box.tsx",
      content: `"use client";

import { Check, ChevronsUpDown, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "${ui}/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "${ui}/command";
import { Popover, PopoverContent, PopoverTrigger } from "${ui}/popover";
import { cn } from "${utils}";

export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
type ComboBoxProps = {
  options: ComboBoxOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  className?: string;
};

export function ComboBox({ options, value, onValueChange, placeholder = "Select an option", searchPlaceholder = "Search…", emptyMessage = "No results", disabled = false, loading = false, clearable = false, className }: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);
  return (
    <Popover onOpenChange={setOpen} open={open && !disabled}>
      <PopoverTrigger asChild><Button aria-expanded={open} aria-busy={loading} className={cn("min-h-[var(--control-height)] w-full justify-between", className)} disabled={disabled || loading} role="combobox" variant="outline">{loading ? <span className="flex items-center gap-2"><LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />Loading</span> : selected?.label ?? placeholder}<ChevronsUpDown className="ml-2 size-4 opacity-50" /></Button></PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start"><Command><CommandInput placeholder={searchPlaceholder} /><CommandList><CommandEmpty>{emptyMessage}</CommandEmpty><CommandGroup>{clearable && value ? <CommandItem onSelect={() => { onValueChange(""); setOpen(false); }} value="__clear">Clear selection</CommandItem> : null}{options.map((option) => <CommandItem disabled={option.disabled} key={option.value} onSelect={() => { onValueChange(option.value); setOpen(false); }} value={option.value}><Check className={cn("mr-2 size-4", value === option.value ? "opacity-100" : "opacity-0")} />{option.label}</CommandItem>)}</CommandGroup></CommandList></Command></PopoverContent>
    </Popover>
  );
}
`,
    },
    "data-table": {
      fileName: "data-table.tsx",
      content: `"use client";

import { useMemo, useState, type ReactNode } from "react";
import { cn } from "${utils}";
import { SuspenseContainer, type AsyncState } from "./suspense-container";

export type DataTableColumn<T> = { key: string; header: ReactNode; cell?: (row: T) => ReactNode; sortable?: boolean; sortValue?: (row: T) => string | number };
type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey?: (row: T, index: number) => string;
  state?: AsyncState;
  onRetry?: () => void;
  emptyState?: ReactNode;
  selectable?: boolean;
  selectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

/** The loading state mirrors the table it is standing in for, not a generic block. */
function TableSkeleton({ columns, rows, selectable }: { columns: number; rows: number; selectable: boolean }) {
  const cell = (muted: boolean) => cn("h-3 flex-1 animate-pulse rounded-sm motion-reduce:animate-none", muted ? "bg-muted/60" : "bg-muted");
  const box = (muted: boolean) => cn("size-4 shrink-0 animate-pulse rounded-sm motion-reduce:animate-none", muted ? "bg-muted/60" : "bg-muted");
  return (
    <div className="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border" role="status" aria-label="Loading">
      <div className="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
        {selectable ? <span className={box(false)} /> : null}
        {Array.from({ length: columns }, (_, index) => <span className={cell(false)} key={index} />)}
      </div>
      {Array.from({ length: rows }, (_, row) => (
        <div className="flex items-center gap-4 border-b px-4 py-3 last:border-b-0" key={row}>
          {selectable ? <span className={box(true)} /> : null}
          {Array.from({ length: columns }, (_, index) => <span className={cell(true)} key={index} />)}
        </div>
      ))}
    </div>
  );
}

export function DataTable<T>({ columns, rows, rowKey = (row, index) => String((row as Record<string, unknown>).id ?? index), state, onRetry, emptyState, selectable = false, selectedKeys, onSelectionChange, page, pageSize = 10, onPageChange, className }: DataTableProps<T>) {
  const [internalPage, setInternalPage] = useState(1); const [internalSelection, setInternalSelection] = useState<string[]>([]); const [sort, setSort] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);
  const activePage = page ?? internalPage; const selection = selectedKeys ?? internalSelection;
  const sortedRows = useMemo(() => { if (!sort) return rows; const column = columns.find((item) => item.key === sort.key); if (!column) return rows; return [...rows].sort((a, b) => { const left = column.sortValue?.(a) ?? (a as Record<string, unknown>)[column.key] ?? ""; const right = column.sortValue?.(b) ?? (b as Record<string, unknown>)[column.key] ?? ""; return String(left).localeCompare(String(right), undefined, { numeric: true }) * (sort.direction === "asc" ? 1 : -1); }); }, [columns, rows, sort]);
  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize)); const visibleRows = sortedRows.slice((activePage - 1) * pageSize, activePage * pageSize); const resolvedState = state ?? (rows.length ? "success" : "empty");
  const changePage = (next: number) => { const safe = Math.min(Math.max(next, 1), totalPages); onPageChange?.(safe); if (page === undefined) setInternalPage(safe); };
  const changeSelection = (keys: string[]) => { onSelectionChange?.(keys); if (selectedKeys === undefined) setInternalSelection(keys); };
  const toggleRow = (key: string) => changeSelection(selection.includes(key) ? selection.filter((item) => item !== key) : [...selection, key]);
  return <SuspenseContainer className={className} state={resolvedState} reset={onRetry} emptyState={emptyState} fallback={<TableSkeleton columns={columns.length} rows={Math.min(pageSize, 5)} selectable={selectable} />}><div className="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border"><div className="overflow-x-auto"><table className="w-full text-body-sm"><thead className="border-b bg-muted/40 text-left"><tr>{selectable ? <th className="w-12 px-4 py-3"><span className="sr-only">Select rows</span></th> : null}{columns.map((column) => <th className="px-4 py-3 font-medium" key={column.key}>{column.sortable ? <button className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setSort((current) => ({ key: column.key, direction: current?.key === column.key && current.direction === "asc" ? "desc" : "asc" }))} type="button">{column.header} {sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}</button> : column.header}</th>)}</tr></thead><tbody className="divide-y">{visibleRows.map((row, index) => { const key = rowKey(row, index); return <tr className={cn("transition-colors hover:bg-muted/30", selection.includes(key) && "bg-muted/50")} key={key}>{selectable ? <td className="px-4 py-3"><input aria-label={"Select row " + (index + 1)} checked={selection.includes(key)} onChange={() => toggleRow(key)} type="checkbox" /></td> : null}{columns.map((column) => <td className="px-4 py-3 align-middle" key={column.key}>{column.cell ? column.cell(row) : String((row as Record<string, unknown>)[column.key] ?? "—")}</td>)}</tr>; })}</tbody></table></div>{totalPages > 1 ? <div className="flex items-center justify-between border-t px-4 py-3"><span className="text-caption text-muted-foreground">Page {activePage} of {totalPages}</span><div className="flex gap-2"><button className="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={activePage <= 1} onClick={() => changePage(activePage - 1)} type="button">Previous</button><button className="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={activePage >= totalPages} onClick={() => changePage(activePage + 1)} type="button">Next</button></div></div> : null}</div></SuspenseContainer>;
}
`,
    },
    "toast-provider": {
      fileName: "toast-provider.tsx",
      content: `"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Toaster } from "${ui}/sonner";

export { toast } from "sonner";
/**
 * The toast is a surface, so it takes the capped surface radius. Sonner reads
 * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
 * radius that turns the card into a blob. The other three variables are the
 * kit's own defaults, restated because a style prop replaces the whole object.
 */
const TOAST_SURFACE = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius-lg)",
} as CSSProperties;

export function ToastProvider({ style, ...props }: ComponentProps<typeof Toaster>) {
  return <Toaster closeButton position="top-right" richColors style={{ ...TOAST_SURFACE, ...style }} {...props} />;
}
`,
    },
  };
}

export function buildReactBarrel(keys: PatternKey[], sources: Record<PatternKey, PatternSource>) {
  return `${keys.map((key) => `export * from "./${sources[key].fileName.replace(/\.tsx$/, "")}";`).join("\n")}\n`;
}
