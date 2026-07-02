import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-80 rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-border bg-card/80 shadow-sm backdrop-blur-md">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Start Today
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Ready to Transform Your{" "}
                <span className="text-primary">Visa Journey?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Experience a simple, stress-free visa process with our clear,
                honest, and step-by-step guidance. Start optimizing your
                application today.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
                >
                  Schedule a Consultation
                  <ArrowRight className="size-5" />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  No hidden charges
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  Honest consultation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  Full preparation
                </span>
              </div>
            </div>

            <div className="relative flex min-h-72 items-center justify-center rounded-lg p-4">
              <Image
                src="/images/cta/plane-on-map.png"
                alt="Plane route on map"
                width={760}
                height={560}
                className="h-auto max-h-[360px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
