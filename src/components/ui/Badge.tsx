import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-ink-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
