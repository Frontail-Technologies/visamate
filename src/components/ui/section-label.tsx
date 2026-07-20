import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  tone = "burgundy",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "burgundy" | "blue" | "light";
}) {
  return (
    <p
      className={cn(
        "text-label",
        tone === "burgundy" && "text-burgundy",
        tone === "blue" && "text-primary-blue",
        tone === "light" && "text-white/70",
        className,
      )}
    >
      {children}
    </p>
  );
}
