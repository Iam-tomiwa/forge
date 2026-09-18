import type { PatternKey } from "../types";
import type { PatternContext, PatternSource } from "./shared";

/**
 * Patterns for a project with no framework. Each one is a factory that returns
 * a DOM node, or a node plus setters when it owns state. The public names and
 * the state contract match every other family.
 */
export function buildVanillaPatterns(context: PatternContext): Record<PatternKey, PatternSource> {
  const { utils } = context;
  return {
    "empty-state": {
      fileName: "empty-state.js",
      content: String.raw`import { cn, el } from "${utils}";

/**
 * @typedef {object} EmptyStateOptions
 * @property {string} title
 * @property {string} [description]
 * @property {Node} [icon]
 * @property {Node} [action]
 * @property {"sm" | "md" | "lg"} [size]
 * @property {string} [class]
 */

/**
 * A no-data surface.
 * @param {EmptyStateOptions} options
 * @returns {HTMLElement}
 */
export function createEmptyState({ title, description, icon, action, size = "md", class: className }) {
  return el(
    "div",
    {
      role: "status",
      class: cn(
        "mx-auto flex flex-col items-center justify-center text-center",
        size === "sm" ? "gap-4 py-8" : size === "lg" ? "gap-6 py-16" : "gap-6 py-12",
        className,
      ),
    },
    [
      icon
        ? el(
            "div",
            {
              class: cn("flex items-center justify-center rounded-full bg-muted text-primary", size === "sm" ? "size-14" : "size-20"),
              "aria-hidden": "true",
            },
            [icon],
          )
        : null,
      el("div", { class: "space-y-2" }, [
        el("p", { class: cn("font-semibold", size === "sm" ? "text-h4" : "text-h2") }, [title]),
        description ? el("p", { class: "mx-auto max-w-md text-body-lg text-muted-foreground" }, [description]) : null,
      ]),
      action ? el("div", {}, [action]) : null,
    ],
  );
}
`,
    },
    "error-state": {
      fileName: "error-state.js",
      content: String.raw`import { cn, el } from "${utils}";

/**
 * @typedef {object} ErrorStateOptions
 * @property {string} [title]
 * @property {string} [description]
 * @property {() => void} [reset]
 * @property {boolean} [compact]
 * @property {string} [class]
 */

/**
 * A recoverable error surface. Passing reset adds the retry control.
 * @param {ErrorStateOptions} [options]
 * @returns {HTMLElement}
 */
/**
 * The alert glyph. el() builds HTML elements, so the SVG is written as markup
 * to keep it in the correct namespace without an icon dependency.
 * @param {string} className
 * @returns {HTMLElement}
 */
function alertIcon(className) {
  const wrapper = document.createElement("span");
  wrapper.className = className;
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.innerHTML =
    '<svg class="size-full" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>';
  return wrapper;
}

export function createErrorState({ title = "Something went wrong", description = "Try again or come back in a moment.", reset, compact = false, class: className } = {}) {
  return el(
    "div",
    { role: "alert", class: cn("mx-auto flex flex-col items-center justify-center text-center", compact ? "gap-3 py-8" : "gap-4 py-12", className) },
    [
      alertIcon(cn("text-destructive", compact ? "size-12" : "size-20")),
      el("div", { class: "space-y-2" }, [
        el("p", { class: cn("font-semibold", compact ? "text-h4" : "text-h2") }, [title]),
        el("p", { class: "mx-auto max-w-sm text-body text-muted-foreground" }, [description]),
      ]),
      reset
        ? el(
            "button",
            {
              type: "button",
              class: "min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              onclick: reset,
            },
            ["Try again"],
          )
        : null,
    ],
  );
}
`,
    },
    "suspense-container": {
      fileName: "suspense-container.js",
      content: String.raw`import { cn, el } from "${utils}";
import { createEmptyState } from "./empty-state.js";
import { createErrorState } from "./error-state.js";

/** @typedef {"idle" | "loading" | "success" | "empty" | "error"} AsyncState */

/**
 * @typedef {object} SuspenseContainerOptions
 * @property {Node} [content] Rendered while the state is idle or success.
 * @property {AsyncState} [state]
 * @property {Node} [fallback]
 * @property {Node} [empty]
 * @property {Node} [error]
 * @property {() => void} [reset]
 * @property {string} [class]
 */

function defaultFallback() {
  return el("div", {
    role: "status",
    "aria-label": "Loading",
    class: "min-h-32 animate-pulse rounded-[min(var(--radius-lg),0.75rem)] border bg-muted/40 motion-reduce:animate-none",
  });
}

/**
 * Owns the loading, empty, error, and success branches for one surface.
 * @param {SuspenseContainerOptions} options
 */
export function createSuspenseContainer({ content, state = "success", fallback, empty, error, reset, class: className }) {
  const element = el("div", { class: cn(className) });
  let current = /** @type {AsyncState} */ (state);

  function currentChild() {
    if (current === "loading") return fallback ?? defaultFallback();
    if (current === "error") return error ?? createErrorState({ reset });
    if (current === "empty") return empty ?? createEmptyState({ title: "Nothing here yet", description: "There are no records to show." });
    return content ?? el("div");
  }

  function render() {
    element.replaceChildren(currentChild());
  }

  render();

  return {
    element,
    /** @param {AsyncState} next */
    setState(next) {
      current = next;
      render();
    },
    /** @param {Node} next */
    setContent(next) {
      content = next;
      render();
    },
  };
}
`,
    },
    "combo-box": {
      fileName: "combo-box.js",
      content: String.raw`import { cn, el } from "${utils}";

/**
 * @typedef {object} ComboBoxOption
 * @property {string} value
 * @property {string} label
 * @property {boolean} [disabled]
 */

/**
 * @typedef {object} ComboBoxOptions
 * @property {ComboBoxOption[]} options
 * @property {string} [value]
 * @property {(value: string) => void} [onValueChange]
 * @property {string} [placeholder]
 * @property {string} [searchPlaceholder]
 * @property {string} [emptyMessage]
 * @property {boolean} [disabled]
 * @property {boolean} [loading]
 * @property {boolean} [clearable]
 * @property {string} [class]
 */

let comboBoxId = 0;

/**
 * Searchable selection with keyboard navigation, loading, disabled, clearable,
 * and empty states.
 * @param {ComboBoxOptions} options
 */
export function createComboBox({
  options,
  value = "",
  onValueChange,
  placeholder = "Select an option",
  searchPlaceholder = "Search…",
  emptyMessage = "No results",
  disabled = false,
  loading = false,
  clearable = false,
  class: className,
}) {
  const listId = "forge-combo-box-" + comboBoxId++;
  let items = options;
  let selected = value;
  let open = false;
  let query = "";
  let activeIndex = 0;

  const label = el("span", { class: "truncate" });
  const trigger = el(
    "button",
    {
      type: "button",
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-controls": listId,
      class: cn(
        "flex min-h-[var(--control-height)] w-full items-center justify-between gap-2 rounded-md border bg-background px-3 text-body-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      ),
    },
    [label, el("span", { class: "opacity-50", "aria-hidden": "true" }, ["⌄"])],
  );

  const search = /** @type {HTMLInputElement} */ (el("input", {
    type: "text",
    class: "mb-1 w-full rounded-sm bg-transparent px-2 py-1.5 text-body-sm focus-visible:outline-none",
    placeholder: searchPlaceholder,
  }));
  const list = el("ul", { role: "listbox", id: listId, class: "max-h-60 overflow-y-auto" });
  const panel = el(
    "div",
    { class: "absolute z-50 mt-1 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-[var(--shadow-md)]" },
    [search, list],
  );
  const element = el("div", { class: cn("relative block", className) }, [trigger]);

  function visibleOptions() {
    const term = query.trim().toLowerCase();
    return term ? items.filter((option) => option.label.toLowerCase().includes(term)) : items;
  }

  function renderTrigger() {
    const match = items.find((option) => option.value === selected);
    label.textContent = loading ? "Loading" : match ? match.label : placeholder;
    trigger.toggleAttribute("disabled", disabled || loading);
    trigger.setAttribute("aria-expanded", String(open));
    trigger.setAttribute("aria-busy", String(loading));
  }

  function renderList() {
    const rendered = visibleOptions();
    list.replaceChildren();
    if (clearable && selected) {
      list.append(
        el("li", {}, [
          el("button", { type: "button", class: "w-full rounded-sm px-2 py-1.5 text-left text-body-sm", onclick: () => choose("") }, ["Clear selection"]),
        ]),
      );
    }
    if (!rendered.length) {
      list.append(el("li", { class: "px-2 py-3 text-center text-body-sm text-muted-foreground" }, [emptyMessage]));
      return;
    }
    rendered.forEach((option, index) => {
      const button = el(
        "button",
        {
          type: "button",
          class: cn(
            "flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-left text-body-sm",
            index === activeIndex && "bg-accent text-accent-foreground",
            option.disabled && "pointer-events-none opacity-50",
          ),
          onclick: () => choose(option.value),
          onmouseenter: () => {
            activeIndex = index;
            renderList();
          },
        },
        [
          el("span", { class: option.value === selected ? "opacity-100" : "opacity-0", "aria-hidden": "true" }, ["✓"]),
          option.label,
        ],
      );
      if (option.disabled) button.setAttribute("disabled", "");
      list.append(el("li", { role: "option", "aria-selected": String(option.value === selected) }, [button]));
    });
  }

  /** @param {boolean} next */
  function setOpen(next) {
    open = next && !disabled && !loading;
    query = "";
    search.value = "";
    if (open) {
      activeIndex = Math.max(0, visibleOptions().findIndex((option) => option.value === selected));
      element.append(panel);
      renderList();
    } else if (panel.isConnected) {
      panel.remove();
    }
    renderTrigger();
  }

  /** @param {string} next */
  function choose(next) {
    selected = next;
    onValueChange?.(next);
    setOpen(false);
    trigger.focus();
  }

  /** @param {KeyboardEvent} event */
  function onKeydown(event) {
    const rendered = visibleOptions();
    if (event.key === "Escape") return setOpen(false);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) return setOpen(true);
      const step = event.key === "ArrowDown" ? 1 : -1;
      activeIndex = rendered.length ? (activeIndex + step + rendered.length) % rendered.length : 0;
      return renderList();
    }
    if (event.key === "Enter" && open) {
      event.preventDefault();
      const option = rendered[activeIndex];
      if (option && !option.disabled) choose(option.value);
    }
  }

  /** @param {Event} event */
  function onDocumentPointerDown(event) {
    if (open && event.target instanceof Node && !element.contains(event.target)) setOpen(false);
  }

  trigger.addEventListener("click", () => setOpen(!open));
  trigger.addEventListener("keydown", onKeydown);
  search.addEventListener("keydown", onKeydown);
  search.addEventListener("input", () => {
    query = search.value;
    activeIndex = 0;
    renderList();
  });
  document.addEventListener("pointerdown", onDocumentPointerDown);

  renderTrigger();

  return {
    element,
    /** @param {string} next */
    setValue(next) {
      selected = next;
      renderTrigger();
      if (open) renderList();
    },
    /** @param {ComboBoxOption[]} next */
    setOptions(next) {
      items = next;
      renderTrigger();
      if (open) renderList();
    },
    /** @param {boolean} next */
    setLoading(next) {
      loading = next;
      if (next) setOpen(false);
      renderTrigger();
    },
    /** @param {boolean} next */
    setDisabled(next) {
      disabled = next;
      if (next) setOpen(false);
      renderTrigger();
    },
    destroy() {
      document.removeEventListener("pointerdown", onDocumentPointerDown);
      element.remove();
    },
  };
}
`,
    },
    "data-table": {
      fileName: "data-table.js",
      content: String.raw`import { cn, el } from "${utils}";
import { createSuspenseContainer } from "./suspense-container.js";

/**
 * @template T
 * @typedef {object} DataTableColumn
 * @property {string} key
 * @property {string} header
 * @property {(row: T) => string} [cell]
 * @property {boolean} [sortable]
 * @property {(row: T) => string | number} [sortValue]
 */

/**
 * @template {Record<string, unknown>} T
 * @typedef {object} DataTableOptions
 * @property {DataTableColumn<T>[]} columns
 * @property {T[]} rows
 * @property {(row: T, index: number) => string} [rowKey]
 * @property {import("./suspense-container.js").AsyncState} [state]
 * @property {() => void} [onRetry]
 * @property {Node} [empty]
 * @property {boolean} [selectable]
 * @property {(keys: string[]) => void} [onSelectionChange]
 * @property {number} [pageSize]
 * @property {(page: number) => void} [onPageChange]
 * @property {string} [class]
 */

/**
 * Typed sorting, selection, pagination, and async states.
 * @template {Record<string, unknown>} T
 * @param {DataTableOptions<T>} options
 */
export function createDataTable({
  columns,
  rows,
  rowKey,
  state,
  onRetry,
  empty,
  selectable = false,
  onSelectionChange,
  pageSize = 10,
  onPageChange,
  class: className,
}) {
  let data = rows;
  let page = 1;
  let selection = /** @type {string[]} */ ([]);
  let sort = /** @type {{ key: string; direction: "asc" | "desc" } | null} */ (null);

  const frame = el("div", { class: "overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border" });

  /** The loading state mirrors the table it is standing in for, not a generic block. */
  function skeleton() {
    const bar = (muted) => el("span", { class: "h-3 flex-1 animate-pulse rounded-sm motion-reduce:animate-none " + (muted ? "bg-muted/60" : "bg-muted") });
    const box = (muted) => el("span", { class: "size-4 shrink-0 animate-pulse rounded-sm motion-reduce:animate-none " + (muted ? "bg-muted/60" : "bg-muted") });
    const row = (muted, className) =>
      el("div", { class: className }, [selectable ? box(muted) : null, ...columns.map(() => bar(muted))]);
    return el(
      "div",
      { role: "status", "aria-label": "Loading", class: "overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border" },
      [
        row(false, "flex items-center gap-4 border-b bg-muted/40 px-4 py-3"),
        ...Array.from({ length: Math.min(pageSize, 5) }, () => row(true, "flex items-center gap-4 border-b px-4 py-3 last:border-b-0")),
      ],
    );
  }

  const container = createSuspenseContainer({
    content: frame,
    state: state ?? (data.length ? "success" : "empty"),
    empty,
    fallback: skeleton(),
    reset: onRetry,
    class: className,
  });

  /** @type {(row: T, index: number) => string} */
  const keyOf = (row, index) => (rowKey ? rowKey(row, index) : String(row["id"] ?? index));

  function sortedRows() {
    if (!sort) return data;
    const column = columns.find((item) => item.key === sort?.key);
    if (!column) return data;
    const direction = sort.direction === "asc" ? 1 : -1;
    return [...data].sort((a, b) => {
      const left = column.sortValue ? column.sortValue(a) : a[column.key] ?? "";
      const right = column.sortValue ? column.sortValue(b) : b[column.key] ?? "";
      return String(left).localeCompare(String(right), undefined, { numeric: true }) * direction;
    });
  }

  /** @param {string} key */
  function toggleSort(key) {
    const current = sort;
    sort = { key, direction: current?.key === key && current.direction === "asc" ? "desc" : "asc" };
    render();
  }

  /** @param {string} key */
  function toggleRow(key) {
    selection = selection.includes(key) ? selection.filter((item) => item !== key) : [...selection, key];
    onSelectionChange?.(selection);
    render();
  }

  /**
   * @param {number} next
   * @param {number} totalPages
   */
  function changePage(next, totalPages) {
    page = Math.min(Math.max(next, 1), totalPages);
    onPageChange?.(page);
    render();
  }

  function render() {
    const sorted = sortedRows();
    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const visible = sorted.slice((page - 1) * pageSize, page * pageSize);

    const head = el("tr", {}, [
      selectable ? el("th", { class: "w-12 px-4 py-3" }, [el("span", { class: "sr-only" }, ["Select rows"])]) : null,
      ...columns.map((column) =>
        el("th", { class: "px-4 py-3 font-medium" }, [
          column.sortable
            ? el(
                "button",
                { type: "button", class: "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", onclick: () => toggleSort(column.key) },
                [column.header + " " + (sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕")],
              )
            : column.header,
        ]),
      ),
    ]);

    const body = visible.map((row, index) => {
      const key = keyOf(row, index);
      const checkbox = el("input", { type: "checkbox", "aria-label": "Select row " + (index + 1), onchange: () => toggleRow(key) });
      if (selection.includes(key)) checkbox.setAttribute("checked", "");
      return el("tr", { class: cn("transition-colors hover:bg-muted/30", selection.includes(key) && "bg-muted/50") }, [
        selectable ? el("td", { class: "px-4 py-3" }, [checkbox]) : null,
        ...columns.map((column) =>
          el("td", { class: "px-4 py-3 align-middle" }, [column.cell ? column.cell(row) : String(row[column.key] ?? "—")]),
        ),
      ]);
    });

    frame.replaceChildren(
      el("div", { class: "overflow-x-auto" }, [
        el("table", { class: "w-full text-body-sm" }, [
          el("thead", { class: "border-b bg-muted/40 text-left" }, [head]),
          el("tbody", { class: "divide-y" }, body),
        ]),
      ]),
      totalPages > 1
        ? el("div", { class: "flex items-center justify-between border-t px-4 py-3" }, [
            el("span", { class: "text-caption text-muted-foreground" }, ["Page " + page + " of " + totalPages]),
            el("div", { class: "flex gap-2" }, [
              el(
                "button",
                { type: "button", class: "rounded-md border px-3 py-1.5 disabled:opacity-50", disabled: page <= 1, onclick: () => changePage(page - 1, totalPages) },
                ["Previous"],
              ),
              el(
                "button",
                { type: "button", class: "rounded-md border px-3 py-1.5 disabled:opacity-50", disabled: page >= totalPages, onclick: () => changePage(page + 1, totalPages) },
                ["Next"],
              ),
            ]),
          ])
        : el("span", { class: "hidden" }),
    );
  }

  render();

  return {
    element: container.element,
    /** @param {T[]} next */
    setRows(next) {
      data = next;
      page = 1;
      container.setState(state ?? (data.length ? "success" : "empty"));
      render();
    },
    /** @param {import("./suspense-container.js").AsyncState} next */
    setState(next) {
      container.setState(next);
    },
  };
}
`,
    },
    "toast-provider": {
      fileName: "toast-provider.js",
      content: String.raw`import { cn, el } from "${utils}";

/** @typedef {"success" | "info" | "warning" | "error" | "loading"} ToastTone */

const TONES = {
  success: { icon: "✓", class: "border-success/40 text-success" },
  info: { icon: "i", class: "border-info/40 text-info" },
  warning: { icon: "!", class: "border-warning/40 text-warning" },
  error: { icon: "×", class: "border-destructive/40 text-destructive" },
  loading: { icon: "◌", class: "border-border text-muted-foreground" },
};

/** @type {HTMLElement | null} */
let region = null;

/**
 * Mounts the feedback region once, near the end of the document.
 * @param {{ class?: string }} [options]
 */
export function createToastProvider({ class: className } = {}) {
  if (region) return region;
  region = el("div", {
    role: "status",
    "aria-live": "polite",
    class: cn("pointer-events-none fixed right-4 top-4 z-[100] flex w-80 flex-col gap-2", className),
  });
  document.body.append(region);
  return region;
}

/** @typedef {{ description?: string; duration?: number }} ToastOptions */

/**
 * @param {ToastTone} tone
 * @param {string} message
 * @param {ToastOptions} [options]
 * @returns {{ dismiss: () => void }}
 */
function push(tone, message, { description, duration = tone === "loading" ? 0 : 4000 } = {}) {
  const host = createToastProvider();
  const { icon, class: toneClass } = TONES[tone];
  const card = el(
    "div",
    {
      class: cn(
        "pointer-events-auto flex items-start gap-3 rounded-lg border bg-popover p-3 text-popover-foreground shadow-[var(--shadow-md)]",
        "transition-opacity duration-[var(--motion-normal)] motion-reduce:transition-none",
        toneClass,
      ),
    },
    [
      el("span", { class: cn("text-body-sm", tone === "loading" && "animate-spin motion-reduce:animate-none"), "aria-hidden": "true" }, [icon]),
      el("div", { class: "flex-1" }, [
        el("p", { class: "text-body-sm font-medium text-foreground" }, [message]),
        description ? el("p", { class: "mt-0.5 text-caption text-muted-foreground" }, [description]) : null,
      ]),
      el("button", { type: "button", class: "text-muted-foreground", "aria-label": "Dismiss", onclick: () => card.remove() }, ["×"]),
    ],
  );
  host.append(card);
  if (duration) setTimeout(() => card.remove(), duration);
  return { dismiss: () => card.remove() };
}

/**
 * Feedback surface with the same tones as the Sonner-based families.
 * @type {Record<ToastTone, (message: string, options?: ToastOptions) => { dismiss: () => void }>}
 */
export const toast = {
  success: (message, options) => push("success", message, options),
  info: (message, options) => push("info", message, options),
  warning: (message, options) => push("warning", message, options),
  error: (message, options) => push("error", message, options),
  loading: (message, options) => push("loading", message, options),
};
`,
    },
  };
}

export function buildVanillaBarrel(keys: PatternKey[], sources: Record<PatternKey, PatternSource>) {
  return `${keys.map((key) => `export * from "./${sources[key].fileName}";`).join("\n")}\n`;
}
