"use client";

import { Check, ChevronsUpDown, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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
