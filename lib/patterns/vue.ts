import type { PatternKey } from "../types";
import type { PatternContext, PatternSource } from "./shared";

/** shadcn-vue patterns for Vue and Nuxt. Single-file components, script setup, Reka UI underneath. */
export function buildVuePatterns(context: PatternContext): Record<PatternKey, PatternSource> {
  const { utils, ui } = context;
  return {
    "empty-state": {
      fileName: "EmptyState.vue",
      content: String.raw`<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "${utils}";

const props = withDefaults(defineProps<{ title: string; description?: string; size?: "sm" | "md" | "lg"; class?: HTMLAttributes["class"] }>(), { size: "md" });
</script>

<template>
  <div role="status" :class="cn('mx-auto flex flex-col items-center justify-center text-center', props.size === 'sm' ? 'gap-4 py-8' : props.size === 'lg' ? 'gap-6 py-16' : 'gap-6 py-12', props.class)">
    <div v-if="$slots.icon" :class="cn('flex items-center justify-center rounded-full bg-muted text-primary', props.size === 'sm' ? 'size-14' : 'size-20')" aria-hidden="true"><slot name="icon" /></div>
    <div class="space-y-2">
      <p :class="cn('font-semibold', props.size === 'sm' ? 'text-h4' : 'text-h2')">{{ props.title }}</p>
      <p v-if="props.description" class="mx-auto max-w-md text-body-lg text-muted-foreground">{{ props.description }}</p>
    </div>
    <div v-if="$slots.action"><slot name="action" /></div>
  </div>
</template>
`,
    },
    "error-state": {
      fileName: "ErrorState.vue",
      content: String.raw`<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "${utils}";

const props = withDefaults(defineProps<{ title?: string; description?: string; reset?: () => void; compact?: boolean; class?: HTMLAttributes["class"] }>(), {
  title: "Something went wrong",
  description: "Try again or come back in a moment.",
  compact: false,
});
</script>

<template>
  <div role="alert" :class="cn('mx-auto flex flex-col items-center justify-center text-center', props.compact ? 'gap-3 py-8' : 'gap-4 py-12', props.class)">
    <svg :class="cn('text-destructive', props.compact ? 'size-12' : 'size-20')" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
    <div class="space-y-2">
      <p :class="cn('font-semibold', props.compact ? 'text-h4' : 'text-h2')">{{ props.title }}</p>
      <p class="mx-auto max-w-sm text-body text-muted-foreground">{{ props.description }}</p>
    </div>
    <button
      v-if="props.reset"
      type="button"
      class="min-h-[var(--control-height)] rounded-md border px-4 text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      @click="props.reset()"
    >
      Try again
    </button>
  </div>
</template>
`,
    },
    "suspense-container": {
      fileName: "SuspenseContainer.vue",
      content: String.raw`<script lang="ts">
export type AsyncState = "idle" | "loading" | "success" | "empty" | "error";
</script>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "${utils}";
import EmptyState from "./EmptyState.vue";
import ErrorState from "./ErrorState.vue";

const props = withDefaults(defineProps<{ state?: AsyncState; reset?: () => void; class?: HTMLAttributes["class"] }>(), { state: "success" });
</script>

<template>
  <div :class="cn(props.class)">
    <template v-if="props.state === 'loading'">
      <slot name="fallback">
        <div class="min-h-32 animate-pulse rounded-lg border bg-muted/40 motion-reduce:animate-none" role="status" aria-label="Loading" />
      </slot>
    </template>
    <template v-else-if="props.state === 'error'">
      <slot name="error"><ErrorState :reset="props.reset" /></slot>
    </template>
    <template v-else-if="props.state === 'empty'">
      <slot name="empty"><EmptyState title="Nothing here yet" description="There are no records to show." /></slot>
    </template>
    <slot v-else />
  </div>
</template>
`,
    },
    "combo-box": {
      fileName: "ComboBox.vue",
      content: String.raw`<script lang="ts">
export type ComboBoxOption = { value: string; label: string; disabled?: boolean };
</script>

<script setup lang="ts">
import { computed, ref, type HTMLAttributes } from "vue";
import { Check, ChevronsUpDown, LoaderCircle } from "@lucide/vue";
import { Button } from "${ui}/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "${ui}/command";
import { Popover, PopoverContent, PopoverTrigger } from "${ui}/popover";
import { cn } from "${utils}";

const props = withDefaults(defineProps<{
  options: ComboBoxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  class?: HTMLAttributes["class"];
}>(), {
  placeholder: "Select an option",
  searchPlaceholder: "Search…",
  emptyMessage: "No results",
  disabled: false,
  loading: false,
  clearable: false,
});

const value = defineModel<string>({ default: "" });
const open = ref(false);
const selected = computed(() => props.options.find((option) => option.value === value.value));

function choose(next: string) {
  value.value = next;
  open.value = false;
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        :aria-busy="props.loading"
        :disabled="props.disabled || props.loading"
        :class="cn('min-h-[var(--control-height)] w-full justify-between', props.class)"
      >
        <span v-if="props.loading" class="flex items-center gap-2">
          <LoaderCircle class="size-4 animate-spin motion-reduce:animate-none" />Loading
        </span>
        <span v-else>{{ selected?.label ?? props.placeholder }}</span>
        <ChevronsUpDown class="ml-2 size-4 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent align="start" class="w-(--reka-popper-anchor-width) p-0">
      <Command>
        <CommandInput :placeholder="props.searchPlaceholder" />
        <CommandList>
          <CommandEmpty>{{ props.emptyMessage }}</CommandEmpty>
          <CommandGroup>
            <CommandItem v-if="props.clearable && value" value="__clear" @select="choose('')">Clear selection</CommandItem>
            <CommandItem
              v-for="option in props.options"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
              @select="choose(option.value)"
            >
              <Check :class="cn('mr-2 size-4', value === option.value ? 'opacity-100' : 'opacity-0')" />
              {{ option.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
`,
    },
    "data-table": {
      fileName: "DataTable.vue",
      content: String.raw`<script lang="ts">
export type DataTableColumn<T> = { key: string; header: string; cell?: (row: T) => string; sortable?: boolean; sortValue?: (row: T) => string | number };
</script>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import { computed, ref, type HTMLAttributes } from "vue";
import { cn } from "${utils}";
import SuspenseContainer, { type AsyncState } from "./SuspenseContainer.vue";

const props = withDefaults(defineProps<{
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey?: (row: T, index: number) => string;
  state?: AsyncState;
  selectable?: boolean;
  pageSize?: number;
  onRetry?: () => void;
  onSelectionChange?: (keys: string[]) => void;
  onPageChange?: (page: number) => void;
  class?: HTMLAttributes["class"];
}>(), { selectable: false, pageSize: 10 });

const page = ref(1);
const selection = ref<string[]>([]);
const sort = ref<{ key: string; direction: "asc" | "desc" } | null>(null);

const keyOf = (row: T, index: number) => (props.rowKey ? props.rowKey(row, index) : String(row.id ?? index));
const resolvedState = computed<AsyncState>(() => props.state ?? (props.rows.length ? "success" : "empty"));

const sortedRows = computed(() => {
  const active = sort.value;
  if (!active) return props.rows;
  const column = props.columns.find((item) => item.key === active.key);
  if (!column) return props.rows;
  return [...props.rows].sort((a, b) => {
    const left = column.sortValue?.(a) ?? a[column.key] ?? "";
    const right = column.sortValue?.(b) ?? b[column.key] ?? "";
    return String(left).localeCompare(String(right), undefined, { numeric: true }) * (active.direction === "asc" ? 1 : -1);
  });
});

const skeletonRows = computed(() => Math.min(props.pageSize, 5));
const totalPages = computed(() => Math.max(1, Math.ceil(sortedRows.value.length / props.pageSize)));
const visibleRows = computed(() => sortedRows.value.slice((page.value - 1) * props.pageSize, page.value * props.pageSize));

function changePage(next: number) {
  page.value = Math.min(Math.max(next, 1), totalPages.value);
  props.onPageChange?.(page.value);
}

function toggleSort(key: string) {
  sort.value = { key, direction: sort.value?.key === key && sort.value.direction === "asc" ? "desc" : "asc" };
}

function toggleRow(key: string) {
  selection.value = selection.value.includes(key) ? selection.value.filter((item) => item !== key) : [...selection.value, key];
  props.onSelectionChange?.(selection.value);
}

function cellValue(column: DataTableColumn<T>, row: T) {
  return column.cell ? column.cell(row) : String(row[column.key] ?? "—");
}
</script>

<template>
  <SuspenseContainer :class="props.class" :state="resolvedState" :reset="props.onRetry">
    <template #empty><slot name="empty" /></template>
    <!-- The loading state mirrors the table it is standing in for, not a generic block. -->
    <template #fallback>
      <div role="status" aria-label="Loading" class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
        <div class="flex items-center gap-4 border-b bg-muted/40 px-4 py-3">
          <span v-if="props.selectable" class="size-4 shrink-0 animate-pulse rounded-sm bg-muted motion-reduce:animate-none" />
          <span v-for="column in props.columns" :key="column.key" class="h-3 flex-1 animate-pulse rounded-sm bg-muted motion-reduce:animate-none" />
        </div>
        <div v-for="row in skeletonRows" :key="row" class="flex items-center gap-4 border-b px-4 py-3 last:border-b-0">
          <span v-if="props.selectable" class="size-4 shrink-0 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none" />
          <span v-for="column in props.columns" :key="column.key" class="h-3 flex-1 animate-pulse rounded-sm bg-muted/60 motion-reduce:animate-none" />
        </div>
      </div>
    </template>
    <div class="overflow-hidden rounded-[min(var(--radius-lg),0.75rem)] border">
      <div class="overflow-x-auto">
        <table class="w-full text-body-sm">
          <thead class="border-b bg-muted/40 text-left">
            <tr>
              <th v-if="props.selectable" class="w-12 px-4 py-3"><span class="sr-only">Select rows</span></th>
              <th v-for="column in props.columns" :key="column.key" class="px-4 py-3 font-medium">
                <button
                  v-if="column.sortable"
                  type="button"
                  class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  @click="toggleSort(column.key)"
                >
                  {{ column.header }} {{ sort?.key === column.key ? (sort.direction === "asc" ? "↑" : "↓") : "↕" }}
                </button>
                <template v-else>{{ column.header }}</template>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr
              v-for="(row, index) in visibleRows"
              :key="keyOf(row, index)"
              :class="cn('transition-colors hover:bg-muted/30', selection.includes(keyOf(row, index)) && 'bg-muted/50')"
            >
              <td v-if="props.selectable" class="px-4 py-3">
                <input
                  type="checkbox"
                  :aria-label="'Select row ' + (index + 1)"
                  :checked="selection.includes(keyOf(row, index))"
                  @change="toggleRow(keyOf(row, index))"
                />
              </td>
              <td v-for="column in props.columns" :key="column.key" class="px-4 py-3 align-middle">{{ cellValue(column, row) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="totalPages > 1" class="flex items-center justify-between border-t px-4 py-3">
        <span class="text-caption text-muted-foreground">Page {{ page }} of {{ totalPages }}</span>
        <div class="flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" :disabled="page <= 1" @click="changePage(page - 1)">Previous</button>
          <button type="button" class="rounded-md border px-3 py-1.5 disabled:opacity-50" :disabled="page >= totalPages" @click="changePage(page + 1)">Next</button>
        </div>
      </div>
    </div>
  </SuspenseContainer>
</template>
`,
    },
    "toast-provider": {
      fileName: "ToastProvider.vue",
      content: String.raw`<script setup lang="ts">
import { Toaster } from "${ui}/sonner";

/*
 * The toast is a surface, so it takes the capped surface radius. Sonner reads
 * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
 * radius that turns the card into a blob.
 */
const surface = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius-lg)",
};
</script>

<template>
  <Toaster position="top-right" rich-colors close-button :style="surface" v-bind="$attrs" />
</template>
`,
    },
  };
}

export function buildVueBarrel(keys: PatternKey[], sources: Record<PatternKey, PatternSource>) {
  const lines = keys.map((key) => {
    const name = sources[key].fileName.replace(/\.vue$/, "");
    if (key === "suspense-container") return `export { default as SuspenseContainer, type AsyncState } from "./${name}.vue";`;
    if (key === "combo-box") return `export { default as ComboBox, type ComboBoxOption } from "./${name}.vue";`;
    if (key === "data-table") return `export { default as DataTable, type DataTableColumn } from "./${name}.vue";`;
    return `export { default as ${name} } from "./${name}.vue";`;
  });
  if (keys.includes("toast-provider")) lines.push(`export { toast } from "vue-sonner";`);
  return `${lines.join("\n")}\n`;
}
