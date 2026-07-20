import { cn } from "@/lib/utils";

export function AmbientBackground({
  variant = "navy",
  className,
}: {
  variant?: "navy" | "deep" | "light";
  className?: string;
}) {
  if (variant === "light") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className,
        )}
      >
        <div className="animate-ambient-glow absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(7,94,189,0.10),transparent_70%)] blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "animate-ambient-glow absolute -left-24 top-[-10%] h-[520px] w-[520px] rounded-full blur-3xl",
          variant === "deep"
            ? "bg-[radial-gradient(circle,rgba(21,151,229,0.35),transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(21,151,229,0.28),transparent_70%)]",
        )}
      />
      <div className="animate-ambient-glow-slow absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(129,31,61,0.22),transparent_70%)] blur-3xl" />
      {variant === "deep" && (
        <div className="animate-ambient-glow absolute bottom-[-15%] left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(7,94,189,0.25),transparent_70%)] blur-3xl" />
      )}
    </div>
  );
}
