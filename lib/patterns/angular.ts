import type { PatternKey } from "../types";
import type { PatternContext, PatternSource } from "./shared";

/**
 * Angular patterns. spartan/ui supplies the primitive layer through its own
 * generator, so these patterns stay dependency-free: standalone components,
 * signal inputs, OnPush, and templates in sibling .html files.
 */
export function buildAngularPatterns(context: PatternContext): Record<PatternKey, PatternSource> {
  const { utils } = context;
  return {
    "empty-state": {
      fileName: "empty-state.ts",
      content: String.raw`import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { cn } from "${utils}";

@Component({
  selector: "forge-empty-state",
  templateUrl: "./empty-state.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: "status", "[class]": "hostClass()" },
})
export class EmptyState {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly size = input<"sm" | "md" | "lg">("md");
  protected readonly hostClass = computed(() =>
    cn(
      "mx-auto flex flex-col items-center justify-center text-center",
      this.size() === "sm" ? "gap-4 py-8" : this.size() === "lg" ? "gap-6 py-16" : "gap-6 py-12",
    ),
  );
  protected readonly iconClass = computed(() =>
    cn("flex items-center justify-center rounded-full bg-muted text-primary empty:hidden", this.size() === "sm" ? "size-14" : "size-20"),
  );
  protected readonly titleClass = computed(() => cn("font-semibold", this.size() === "sm" ? "text-h4" : "text-h2"));
}
`,
      siblings: {
        "empty-state.html": String.raw`<div [class]="iconClass()" aria-hidden="true"><ng-content select="[icon]" /></div>
<div class="space-y-2">
  <p [class]="titleClass()">{{ title() }}</p>
  @if (description()) {
    <p class="mx-auto max-w-md text-body-lg text-muted-foreground">{{ description() }}</p>
  }
</div>
<div class="empty:hidden"><ng-content select="[action]" /></div>
`,
      },
    },
    "error-state": {
      fileName: "error-state.ts",
      content: String.raw`import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, output } from "@angular/core";
import { cn } from "${utils}";

@Component({
  selector: "forge-error-state",
  templateUrl: "./error-state.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: "alert", "[class]": "hostClass()" },
})
export class ErrorState {
  readonly title = input("Something went wrong");
  readonly description = input("Try again or come back in a moment.");
  readonly compact = input(false, { transform: booleanAttribute });
  /** Angular signals recovery with an input plus an output instead of a reset callback prop. */
  readonly recoverable = input(false, { transform: booleanAttribute });
  readonly retry = output<void>();
  protected readonly hostClass = computed(() => cn("mx-auto flex flex-col items-center justify-center text-center", this.compact() ? "gap-3 py-8" : "gap-4 py-12"));
  protected readonly iconClass = computed(() => cn("text-destructive", this.compact() ? "size-12" : "size-20"));
  protected readonly titleClass = computed(() => cn("font-semibold", this.compact() ? "text-h4" : "text-h2"));
}
`,
      siblings: {
        "error-state.html": String.raw`<svg [class]="iconClass()" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
<div class="space-y-2">
  <p [class]="titleClass()">{{ title() }}</p>
  <p class="mx-auto max-w-sm text-body text-muted-foreground">{{ description() }}</p>
</div>
@if (recoverable()) {
  <button
    type="button"
    class="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    (click)="retry.emit()"
  >
    Try again
  </button>
}
`,
      },
    },
    "suspense-container": {
      fileName: "suspense-container.ts",
      content: String.raw`import { NgTemplateOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output, type TemplateRef } from "@angular/core";
import { EmptyState } from "./empty-state";
import { ErrorState } from "./error-state";
import type { AsyncState } from "./types";

@Component({
  selector: "forge-suspense-container",
  templateUrl: "./suspense-container.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmptyState, ErrorState, NgTemplateOutlet],
  host: { class: "block" },
})
export class SuspenseContainer {
  readonly state = input<AsyncState>("success");
  /** A surface-shaped loading state; DataTable passes its own table skeleton. */
  readonly fallback = input<TemplateRef<unknown> | null>(null);
  readonly emptyTitle = input("Nothing here yet");
  readonly emptyDescription = input("There are no records to show.");
  readonly retry = output<void>();
}
`,
      siblings: {
        "suspense-container.html": String.raw`@switch (state()) {
  @case ("loading") {
    @if (fallback()) {
      <ng-container [ngTemplateOutlet]="fallback()!" />
    } @else {
      <div class="min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none" role="status" aria-label="Loading"></div>
    }
  }
  @case ("error") {
    <forge-error-state [recoverable]="true" (retry)="retry.emit()" />
  }
  @case ("empty") {
    <forge-empty-state [title]="emptyTitle()" [description]="emptyDescription()" />
  }
}
<div [class]="state() === 'success' ? 'contents' : 'hidden'"><ng-content /></div>
`,
      },
    },
    "combo-box": {
      fileName: "combo-box.ts",
      content: String.raw`import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model, signal } from "@angular/core";
import { cn } from "${utils}";
import type { ComboBoxOption } from "./types";

let comboBoxId = 0;

@Component({
  selector: "forge-combo-box",
  templateUrl: "./combo-box.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "relative block", "(document:pointerdown)": "onDocumentPointerDown($event)" },
})
export class ComboBox {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly options = input.required<ComboBoxOption[]>();
  readonly value = model("");
  readonly placeholder = input("Select an option");
  readonly searchPlaceholder = input("Search…");
  readonly emptyMessage = input("No results");
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly loading = input(false, { transform: booleanAttribute });
  readonly clearable = input(false, { transform: booleanAttribute });

  protected readonly listId = "forge-combo-box-" + comboBoxId++;
  protected readonly open = signal(false);
  protected readonly query = signal("");
  protected readonly activeIndex = signal(0);
  protected readonly selected = computed(() => this.options().find((option) => option.value === this.value()));
  protected readonly visibleOptions = computed(() => {
    const query = this.query().trim().toLowerCase();
    return query ? this.options().filter((option) => option.label.toLowerCase().includes(query)) : this.options();
  });
  protected readonly triggerClass = computed(() =>
    cn(
      "flex min-h-[var(--control-height)] w-full items-center justify-between gap-2 rounded-md border bg-background px-3 text-body-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    ),
  );

  protected optionClass(option: ComboBoxOption, index: number) {
    return cn(
      "flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-left text-body-sm",
      index === this.activeIndex() && "bg-accent text-accent-foreground",
      option.disabled && "pointer-events-none opacity-50",
    );
  }

  protected toggle() {
    if (this.disabled() || this.loading()) return;
    this.open.update((open) => !open);
    this.query.set("");
    this.activeIndex.set(Math.max(0, this.visibleOptions().findIndex((option) => option.value === this.value())));
  }

  protected choose(option: ComboBoxOption) {
    if (option.disabled) return;
    this.value.set(option.value);
    this.close();
  }

  protected clear() {
    this.value.set("");
    this.close();
  }

  protected close() {
    this.open.set(false);
    this.query.set("");
  }

  protected onQuery(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
    this.activeIndex.set(0);
  }

  protected onKeydown(event: KeyboardEvent) {
    const options = this.visibleOptions();
    if (event.key === "Escape") return this.close();
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!this.open()) return this.toggle();
      const step = event.key === "ArrowDown" ? 1 : -1;
      this.activeIndex.update((index) => (options.length ? (index + step + options.length) % options.length : 0));
      return;
    }
    if (event.key === "Home") return this.activeIndex.set(0);
    if (event.key === "End") return this.activeIndex.set(Math.max(0, options.length - 1));
    if (event.key === "Enter" && this.open()) {
      event.preventDefault();
      const option = options[this.activeIndex()];
      if (option) this.choose(option);
    }
  }

  protected onDocumentPointerDown(event: Event) {
    if (this.open() && !this.host.nativeElement.contains(event.target as Node)) this.close();
  }
}
`,
      siblings: {
        "combo-box.html": String.raw`<button
  type="button"
  role="combobox"
  aria-haspopup="listbox"
  [attr.aria-expanded]="open()"
  [attr.aria-controls]="listId"
  [attr.aria-busy]="loading()"
  [disabled]="disabled() || loading()"
  [class]="triggerClass()"
  (click)="toggle()"
  (keydown)="onKeydown($event)"
>
  @if (loading()) {
    <span class="flex items-center gap-2">
      <span class="size-4 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none" aria-hidden="true"></span>Loading
    </span>
  } @else {
    <span class="truncate">{{ selected()?.label ?? placeholder() }}</span>
  }
  <span class="opacity-50" aria-hidden="true">⌄</span>
</button>

@if (open()) {
  <div class="absolute z-50 mt-1 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-[var(--shadow-md)]">
    <input
      type="text"
      class="mb-1 w-full rounded-sm bg-transparent px-2 py-1.5 text-body-sm focus-visible:outline-none"
      [placeholder]="searchPlaceholder()"
      [value]="query()"
      (input)="onQuery($event)"
      (keydown)="onKeydown($event)"
    />
    <ul role="listbox" [id]="listId" class="max-h-60 overflow-y-auto">
      @if (clearable() && value()) {
        <li><button type="button" class="w-full rounded-sm px-2 py-1.5 text-left text-body-sm" (click)="clear()">Clear selection</button></li>
      }
      @for (option of visibleOptions(); track option.value; let index = $index) {
        <li role="option" [attr.aria-selected]="option.value === value()">
          <button type="button" [class]="optionClass(option, index)" [disabled]="option.disabled" (click)="choose(option)" (mouseenter)="activeIndex.set(index)">
            <span [class]="option.value === value() ? 'opacity-100' : 'opacity-0'" aria-hidden="true">✓</span>
            {{ option.label }}
          </button>
        </li>
      } @empty {
        <li class="px-2 py-3 text-center text-body-sm text-muted-foreground">{{ emptyMessage() }}</li>
      }
    </ul>
  </div>
}
`,
      },
    },
    "data-table": {
      fileName: "data-table.ts",
      content: String.raw`import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, output, signal } from "@angular/core";
import { cn } from "${utils}";
import { SuspenseContainer } from "./suspense-container";
import type { AsyncState, DataTableColumn } from "./types";

@Component({
  selector: "forge-data-table",
  templateUrl: "./data-table.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SuspenseContainer],
  host: { class: "block" },
})
export class DataTable<T extends Record<string, unknown>> {
  readonly columns = input.required<DataTableColumn<T>[]>();
  readonly rows = input.required<T[]>();
  readonly rowKey = input<(row: T, index: number) => string>();
  readonly state = input<AsyncState>();
  readonly selectable = input(false, { transform: booleanAttribute });
  readonly pageSize = input(10);
  readonly retry = output<void>();
  readonly selectionChange = output<string[]>();
  readonly pageChange = output<number>();

  protected readonly page = signal(1);
  protected readonly selection = signal<string[]>([]);
  protected readonly sort = signal<{ key: string; direction: "asc" | "desc" } | null>(null);

  protected readonly resolvedState = computed<AsyncState>(() => this.state() ?? (this.rows().length ? "success" : "empty"));
  protected readonly sortedRows = computed(() => {
    const sort = this.sort();
    const rows = this.rows();
    if (!sort) return rows;
    const column = this.columns().find((item) => item.key === sort.key);
    if (!column) return rows;
    const direction = sort.direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const left = column.sortValue ? column.sortValue(a) : a[column.key] ?? "";
      const right = column.sortValue ? column.sortValue(b) : b[column.key] ?? "";
      return String(left).localeCompare(String(right), undefined, { numeric: true }) * direction;
    });
  });
  protected readonly totalPages = computed(() => Math.max(1, Math.ceil(this.sortedRows().length / this.pageSize())));
  protected readonly skeletonRows = computed(() => Array.from({ length: Math.min(this.pageSize(), 5) }, (_, index) => index));
  protected readonly visibleRows = computed(() => this.sortedRows().slice((this.page() - 1) * this.pageSize(), this.page() * this.pageSize()));

  protected keyOf(row: T, index: number) {
    const rowKey = this.rowKey();
    return rowKey ? rowKey(row, index) : String(row["id"] ?? index);
  }

  protected cellValue(column: DataTableColumn<T>, row: T) {
    return column.cell ? column.cell(row) : String(row[column.key] ?? "—");
  }

  protected rowClass(key: string) {
    return cn("transition-colors hover:bg-muted/30", this.selection().includes(key) && "bg-muted/50");
  }

  protected sortIndicator(key: string) {
    const sort = this.sort();
    if (sort?.key !== key) return "↕";
    return sort.direction === "asc" ? "↑" : "↓";
  }

  protected toggleSort(key: string) {
    const sort = this.sort();
    this.sort.set({ key, direction: sort?.key === key && sort.direction === "asc" ? "desc" : "asc" });
  }

  protected toggleRow(key: string) {
    this.selection.update((keys) => (keys.includes(key) ? keys.filter((item) => item !== key) : [...keys, key]));
    this.selectionChange.emit(this.selection());
  }

  protected changePage(next: number) {
    this.page.set(Math.min(Math.max(next, 1), this.totalPages()));
    this.pageChange.emit(this.page());
  }
}
`,
      siblings: {
        "data-table.html": String.raw`<forge-suspense-container [state]="resolvedState()" [fallback]="tableSkeleton" (retry)="retry.emit()">
  <div class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="overflow-x-auto">
      <table class="w-full text-body-sm">
        <thead class="border-b bg-muted/40 text-left">
          <tr>
            @if (selectable()) {
              <th class="w-12 px-4 py-3"><span class="sr-only">Select rows</span></th>
            }
            @for (column of columns(); track column.key) {
              <th class="px-4 py-3 font-medium">
                @if (column.sortable) {
                  <button type="button" class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" (click)="toggleSort(column.key)">
                    {{ column.header }} {{ sortIndicator(column.key) }}
                  </button>
                } @else {
                  {{ column.header }}
                }
              </th>
            }
          </tr>
        </thead>
        <tbody class="divide-y">
          @for (row of visibleRows(); track keyOf(row, $index); let index = $index) {
            <tr [class]="rowClass(keyOf(row, index))">
              @if (selectable()) {
                <td class="px-4 py-3">
                  <input
                    type="checkbox"
                    [attr.aria-label]="'Select row ' + (index + 1)"
                    [checked]="selection().includes(keyOf(row, index))"
                    (change)="toggleRow(keyOf(row, index))"
                  />
                </td>
              }
              @for (column of columns(); track column.key) {
                <td class="px-4 py-3 align-middle">{{ cellValue(column, row) }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
    @if (totalPages() > 1) {
      <div class="flex items-center justify-between border-t px-4 py-3">
        <span class="text-caption text-muted-foreground">Page {{ page() }} of {{ totalPages() }}</span>
        <div class="flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" [disabled]="page() <= 1" (click)="changePage(page() - 1)">Previous</button>
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" [disabled]="page() >= totalPages()" (click)="changePage(page() + 1)">Next</button>
        </div>
      </div>
    }
  </div>
</forge-suspense-container>

<!-- The loading state mirrors the table it is standing in for, not a generic block. -->
<ng-template #tableSkeleton>
  <div role="status" aria-label="Loading" class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
    <div class="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
      @if (selectable()) {
        <span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>
      }
      @for (column of columns(); track column.key) {
        <span class="h-3 flex-1 animate-pulse rounded-sm bg-muted motion-reduce:animate-none"></span>
      }
    </div>
    @for (row of skeletonRows(); track row) {
      <div class="flex items-center gap-4 border-b px-4 py-3 last:border-b-0">
        @if (selectable()) {
          <span class="size-4 shrink-0 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>
        }
        @for (column of columns(); track column.key) {
          <span class="h-3 flex-1 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none"></span>
        }
      </div>
    }
  </div>
</ng-template>
`,
      },
    },
    "toast-provider": {
      fileName: "toast-provider.ts",
      content: String.raw`import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgxSonnerToaster } from "ngx-sonner";

@Component({
  selector: "forge-toast-provider",
  templateUrl: "./toast-provider.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxSonnerToaster],
})
export class ToastProvider {
  protected readonly surface: Record<string, string> = {
    "--ngx-sonner-border-radius": "var(--radius-lg)",
    "--normal-bg": "var(--popover)",
    "--normal-text": "var(--popover-foreground)",
    "--normal-border": "var(--border)",
  };
}
`,
      siblings: {
        "toast-provider.html": String.raw`<!--
  The toast is a surface, so it takes the capped surface radius. ngx-sonner
  otherwise falls back to a fixed 8px and ignores the token contract entirely.
-->
<ngx-sonner-toaster position="top-right" [richColors]="true" [closeButton]="true" [style]="surface" />
`,
      },
    },
  };
}

/** Angular shares pattern types through a plain module, the same way the Svelte family does. */
export const ANGULAR_PATTERN_TYPES = String.raw`export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
export type DataTableColumn<T> = { key: string; header: string; cell?: (row: T) => string; sortable?: boolean; sortValue?: (row: T) => string | number };
`;

export function buildAngularBarrel(keys: PatternKey[], sources: Record<PatternKey, PatternSource>) {
  const lines = keys.map((key) => `export * from "./${sources[key].fileName.replace(/\.ts$/, "")}";`);
  lines.push(`export type { AsyncState, ComboBoxOption, DataTableColumn } from "./types";`);
  if (keys.includes("toast-provider")) lines.push(`export { toast } from "ngx-sonner";`);
  return `${lines.join("\n")}\n`;
}
