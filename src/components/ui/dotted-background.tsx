import { cn } from "@/lib/utils";

type DottedBackgroundProps = {
  className?: string;
};

export function DottedBackground({ className }: DottedBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-70",
        "[background-image:radial-gradient(var(--border)_1px,transparent_1px)]",
        "[background-size:16px_16px]",
        "[mask-image:radial-gradient(ellipse_at_center,black_34%,transparent_82%)]",
        className,
      )}
    />
  );
}
