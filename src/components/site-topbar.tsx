import { ArrowRight, Sparkles } from "lucide-react";

export function SiteTopbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-center gap-2 bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground sm:hidden">
      <Sparkles className="size-3 shrink-0" />
      <span>Free profile review for first-time applicants</span>
      <a
        href="#contact"
        className="inline-flex shrink-0 items-center gap-0.5 underline underline-offset-2 opacity-90 hover:opacity-100"
      >
        Book now
        <ArrowRight className="size-3" />
      </a>
    </div>
  );
}
