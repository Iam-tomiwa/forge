import type { PatternKey } from "../types";
import type { PatternContext, PatternSource } from "./shared";

/** shadcn-svelte patterns for SvelteKit. Svelte 5 runes, Bits UI underneath. */
export function buildSveltePatterns(context: PatternContext): Record<PatternKey, PatternSource> {
  const { utils, ui } = context;
  return {
    "empty-state": {
      fileName: "empty-state.svelte",
      content: String.raw`<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "${utils}";

  let {
    title,
    description,
    icon,
    action,
    size = "md",
    class: className,
  }: { title: string; description?: string; icon?: Snippet; action?: Snippet; size?: "sm" | "md" | "lg"; class?: string } = $props();
</script>

<div
  role="status"
  class={cn(
    "mx-auto flex flex-col items-center justify-center text-center",
    size === "sm" ? "gap-4 py-8" : size === "lg" ? "gap-6 py-16" : "gap-6 py-12",
    className,
  )}
>
  {#if icon}<div class={cn("flex items-center justify-center rounded-full bg-muted text-primary", size === "sm" ? "size-14" : "size-20")} aria-hidden="true">{@render icon()}</div>{/if}
  <div class="space-y-2">
    <p class={cn("font-semibold", size === "sm" ? "text-h4" : "text-h2")}>{title}</p>
    {#if description}<p class="mx-auto max-w-md text-body-lg text-muted-foreground">{description}</p>{/if}
  </div>
  {#if action}<div>{@render action()}</div>{/if}
</div>
`,
    },
    "error-state": {
      fileName: "error-state.svelte",
      content: String.raw`<script lang="ts">
  import { cn } from "${utils}";

  let {
    title = "Something went wrong",
    description = "Try again or come back in a moment.",
    reset,
    compact = false,
    class: className,
  }: { title?: string; description?: string; reset?: () => void; compact?: boolean; class?: string } = $props();
</script>

<div role="alert" class={cn("mx-auto flex flex-col items-center justify-center text-center", compact ? "gap-3 py-8" : "gap-4 py-12", className)}>
  <svg class={cn("text-destructive", compact ? "size-12" : "size-20")} aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
  <div class="space-y-2">
    <p class={cn("font-semibold", compact ? "text-h4" : "text-h2")}>{title}</p>
    <p class="mx-auto max-w-sm text-body text-muted-foreground">{description}</p>
  </div>
  {#if reset}
    <button
      type="button"
      class="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onclick={reset}
    >
      Try again
    </button>
  {/if}
</div>
`,
    },
    "suspense-container": {
      fileName: "suspense-container.svelte",
      content: String.raw`<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "${utils}";
  import EmptyState from "./empty-state.svelte";
  import ErrorState from "./error-state.svelte";
  import type { AsyncState } from "./types.js";

  let {
    children,
    // Renamed locally: a binding named state would shadow the $state rune.
    state: asyncState = "success",
    fallback,
    empty,
    error,
    reset,
    class: className,
  }: {
    children?: Snippet;
    state?: AsyncState;
    fallback?: Snippet;
    empty?: Snippet;
    error?: Snippet;
    reset?: () => void;
    class?: string;
  } = $props();
</script>

<div class={cn(className)}>
  {#if asyncState === "loading"}
    {#if fallback}{@render fallback()}{:else}
      <div class="min-h-32 animate-pulse rounded-lg border bg-muted/40 motion-reduce:animate-none" role="status" aria-label="Loading"></div>
    {/if}
  {:else if asyncState === "error"}
    {#if error}{@render error()}{:else}<ErrorState {reset} />{/if}
  {:else if asyncState === "empty"}
    {#if empty}{@render empty()}{:else}<EmptyState title="Nothing here yet" description="There are no records to show." />{/if}
  {:else if children}
    {@render children()}
  {/if}
</div>
`,
    },
    "combo-box": {
      fileName: "combo-box.svelte",
      content: String.raw`<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import ChevronsUpDown from "@lucide/svelte/icons/chevrons-up-down";
  import LoaderCircle from "@lucide/svelte/icons/loader-circle";
  import { tick } from "svelte";
  import { Button } from "${ui}/button/index.js";
  import * as Command from "${ui}/command/index.js";
  import * as Popover from "${ui}/popover/index.js";
  import { cn } from "${utils}";
  import type { ComboBoxOption } from "./types.js";

  let {
    options,
    value = $bindable(""),
    onValueChange,
    placeholder = "Select an option",
    searchPlaceholder = "Search…",
    emptyMessage = "No results",
    disabled = false,
    loading = false,
    clearable = false,
    class: className,
  }: {
    options: ComboBoxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    loading?: boolean;
    clearable?: boolean;
    class?: string;
  } = $props();

  let open = $state(false);
  let triggerRef = $state<HTMLButtonElement | null>(null);
  const selected = $derived(options.find((option) => option.value === value));

  function choose(next: string) {
    value = next;
    onValueChange?.(next);
    open = false;
    tick().then(() => triggerRef?.focus());
  }
</script>

<Popover.Root bind:open>
  <Popover.Trigger bind:ref={triggerRef}>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="outline"
        role="combobox"
        aria-expanded={open}
        aria-busy={loading}
        disabled={disabled || loading}
        class={cn("min-h-[var(--control-height)] w-full justify-between", className)}
      >
        {#if loading}
          <span class="flex items-center gap-2"><LoaderCircle class="size-4 animate-spin motion-reduce:animate-none" />Loading</span>
        {:else}
          {selected?.label ?? placeholder}
        {/if}
        <ChevronsUpDown class="ml-2 size-4 opacity-50" />
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content align="start" class="w-[var(--bits-popover-anchor-width)] p-0">
    <Command.Root>
      <Command.Input placeholder={searchPlaceholder} />
      <Command.List>
        <Command.Empty>{emptyMessage}</Command.Empty>
        <Command.Group>
          {#if clearable && value}
            <Command.Item value="__clear" onSelect={() => choose("")}>Clear selection</Command.Item>
          {/if}
          {#each options as option (option.value)}
            <Command.Item value={option.value} disabled={option.disabled} onSelect={() => choose(option.value)}>
              <Check class={cn("mr-2 size-4", value === option.value ? "opacity-100" : "opacity-0")} />
              {option.label}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
`,
    },
    "data-table": {
      fileName: "data-table.svelte",
      content: String.raw`<script lang="ts" generics="T extends Record<string, unknown>">
  import type { Snippet } from "svelte";
  import { cn } from "${utils}";
  import SuspenseContainer from "./suspense-container.svelte";
  import type { AsyncState, DataTableColumn } from "./types.js";

  let {
    columns,
    rows,
    rowKey,
    // Renamed locally: a binding named state would shadow the $state rune.
    state: asyncState,
    onRetry,
    empty,
    selectable = false,
    onSelectionChange,
    pageSize = 10,
    onPageChange,
    class: className,
  }: {
    columns: DataTableColumn<T>[];
    rows: T[];
    rowKey?: (row: T, index: number) => string;
    state?: AsyncState;
    onRetry?: () => void;
    empty?: Snippet;
    selectable?: boolean;
    onSelectionChange?: (keys: string[]) => void;
    pageSize?: number;
    onPageChange?: (page: number) => void;
    class?: string;
  } = $props();

  let page = $state(1);
  let selection = $state<string[]>([]);
  let sort = $state<{ key: string; direction: "asc" | "desc" } | null>(null);

  const keyOf = (row: T, index: number) => (rowKey ? rowKey(row, index) : String(row.id ?? index));
  const resolvedState = $derived<AsyncState>(asyncState ?? (rows.length ? "success" : "empty"));

  const sortedRows = $derived.by(() => {
    if (!sort) return rows;
    const column = columns.find((item) => item.key === sort?.key);
    if (!column) return rows;
    const direction = sort.direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const left = column.sortValue?.(a) ?? a[column.key] ?? "";
      const right = column.sortValue?.(b) ?? b[column.key] ?? "";
      return String(left).localeCompare(String(right), undefined, { numeric: true }) * direction;
    });
  });

  const totalPages = $derived(Math.max(1, Math.ceil(sortedRows.length / pageSize)));
  const skeletonRows = $derived(Math.min(pageSize, 5));
  const visibleRows = $derived(sortedRows.slice((page - 1) * pageSize, page * pageSize));

  function changePage(next: number) {
    page = Math.min(Math.max(next, 1), totalPages);
    onPageChange?.(page);
  }

  function toggleSort(key: string) {
    sort = { key, direction: sort?.key === key && sort.direction === "asc" ? "desc" : "asc" };
  }

  function toggleRow(key: string) {
    selection = selection.includes(key) ? selection.filter((item) => item !== key) : [...selection, key];
    onSelectionChange?.(selection);
  }

  function cellValue(column: DataTableColumn<T>, row: T) {
    return column.cell ? column.cell(row) : String(row[column.key] ?? "—");
  }
</script>

{#snippet tableSkeleton()}
  <!-- The loading state mirrors the table it is standing in for, not a generic block. -->
  <div role="status" aria-label="Loading" class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
      {#if selectable}<span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>{/if}
      {#each columns as column (column.key)}<span class="h-3 flex-1 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>{/each}
    </div>
    {#each Array(skeletonRows) as _, row (row)}
      <div class="flex items-center gap-4 border-b px-4 py-3 last:border-b-0">
        {#if selectable}<span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>{/if}
        {#each columns as column (column.key)}<span class="h-3 flex-1 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>{/each}
      </div>
    {/each}
  </div>
{/snippet}

<SuspenseContainer class={className} state={resolvedState} reset={onRetry} {empty} fallback={tableSkeleton}>
  <div class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="overflow-x-auto">
      <table class="w-full text-body-sm">
        <thead class="border-b bg-muted/40 text-left">
          <tr>
            {#if selectable}<th class="w-12 px-4 py-3"><span class="sr-only">Select rows</span></th>{/if}
            {#each columns as column (column.key)}
              <th class="px-4 py-3 font-medium">
                {#if column.sortable}
                  <button type="button" class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onclick={() => toggleSort(column.key)}>
                    {column.header}
                    {sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}
                  </button>
                {:else}
                  {column.header}
                {/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="divide-y">
          {#each visibleRows as row, index (keyOf(row, index))}
            <tr class={cn("transition-colors hover:bg-muted/30", selection.includes(keyOf(row, index)) && "bg-muted/50")}>
              {#if selectable}
                <td class="px-4 py-3">
                  <input
                    type="checkbox"
                    aria-label={"Select row " + (index + 1)}
                    checked={selection.includes(keyOf(row, index))}
                    onchange={() => toggleRow(keyOf(row, index))}
                  />
                </td>
              {/if}
              {#each columns as column (column.key)}
                <td class="px-4 py-3 align-middle">{cellValue(column, row)}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    {#if totalPages > 1}
      <div class="flex items-center justify-between border-t px-4 py-3">
        <span class="text-caption text-muted-foreground">Page {page} of {totalPages}</span>
        <div class="flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={page <= 1} onclick={() => changePage(page - 1)}>Previous</button>
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" disabled={page >= totalPages} onclick={() => changePage(page + 1)}>Next</button>
        </div>
      </div>
    {/if}
  </div>
</SuspenseContainer>
`,
    },
    "toast-provider": {
      fileName: "toast-provider.svelte",
      content: String.raw`<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { Toaster } from "${ui}/sonner/index.js";

  let props: ComponentProps<typeof Toaster> = $props();

  /*
   * The toast is a surface, so it takes the capped surface radius. Sonner reads
   * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
   * radius that turns the card into a blob.
   */
  const surface =
    "--normal-bg: var(--popover); --normal-text: var(--popover-foreground); --normal-border: var(--border); --border-radius: var(--radius-lg);";
</script>

<Toaster position="top-right" richColors closeButton style={surface} {...props} />
`,
    },
  };
}

/** Svelte keeps shared pattern types in a plain module so every component and consumer imports one source. */
export const SVELTE_PATTERN_TYPES = String.raw`export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
export type DataTableColumn<T> = { key: string; header: string; cell?: (row: T) => string; sortable?: boolean; sortValue?: (row: T) => string | number };
`;

export function buildSvelteBarrel(keys: PatternKey[], sources: Record<PatternKey, PatternSource>) {
  const names: Record<string, string> = { "combo-box": "ComboBox", "data-table": "DataTable", "empty-state": "EmptyState", "error-state": "ErrorState", "suspense-container": "SuspenseContainer", "toast-provider": "ToastProvider" };
  const lines = keys.map((key) => `export { default as ${names[key]} } from "./${sources[key].fileName}";`);
  lines.push(`export type { AsyncState, ComboBoxOption, DataTableColumn } from "./types.js";`);
  if (keys.includes("toast-provider")) lines.push(`export { toast } from "svelte-sonner";`);
  return `${lines.join("\n")}\n`;
}
