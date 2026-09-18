"use client";

import { cn } from "@/lib/utils";

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
