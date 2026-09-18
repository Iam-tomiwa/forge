import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
