"use client";

import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
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
