import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-5 transition-colors hover:border-ink-secondary/40",
        className
      )}
    >
      {children}
    </div>
  );
}
