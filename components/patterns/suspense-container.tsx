import { Suspense, type ReactNode } from "react";
import { cn } from "@/lib/utils";
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
