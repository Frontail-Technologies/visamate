import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background: fine dot grid / lined background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Start Today
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Ready to Transform Your <span className="text-primary">Visa Journey?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Experience a simple, stress-free visa process with our clear, honest, and step-by-step guidance. Start optimizing your application today.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            Schedule a Consultation
            <ArrowRight className="size-5" />
          </a>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> No hidden charges</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Honest consultation</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Full preparation</span>
        </div>
      </div>
    </section>
  );
}
