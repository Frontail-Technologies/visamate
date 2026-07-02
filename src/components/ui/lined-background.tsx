import { cn } from "@/lib/utils";

type LinedBackgroundProps = {
  className?: string;
};

export function LinedBackground({ className }: LinedBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-45",
        "[background-image:repeating-linear-gradient(120deg,var(--border)_0,var(--border)_1px,transparent_1px,transparent_12px)]",
        "[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0.7),transparent)]",
        className,
      )}
    />
  );
}
