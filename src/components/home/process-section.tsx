import { ArrowRight } from "lucide-react";

import { DottedBackground } from "@/components/ui/dotted-background";

import { processSteps as steps } from "@/data/home";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Visa Journey,{" "}
            <span className="text-primary">Step by Step</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A simple step-by-step process to guide you from consultation to
            final visa decision.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative mt-12">
          <div className="absolute bottom-0 left-4 top-0 border-l border-dashed border-primary/25 sm:hidden" />

          <div className="relative z-10 grid auto-rows-fr md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description }, index) => {
              const showDesktopConnector = index !== 3;

              return (
                <div key={number} className="relative ml-8 sm:ml-0">
                  <span className="absolute -left-10 top-5 z-20 flex size-5 items-center justify-center rounded-full border border-primary/20 bg-card text-[10px] font-bold text-primary sm:hidden">
                    {Number(number)}
                  </span>
                  {showDesktopConnector && (
                    <div className="pointer-events-none absolute -right-4 top-1/2 z-20 hidden w-4 items-center lg:flex">
                      <span className="h-px flex-1 border-t border-dashed border-primary/35" />
                      <ArrowRight className="-ml-1 size-3 text-primary/50" />
                    </div>
                  )}
                  <article className="group relative flex min-h-[178px] flex-col overflow-hidden rounded-lg border border-border bg-card/95 p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xs">
                    <DottedBackground className="opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black_16%,transparent_76%)]" />
                    <span className="relative z-10 inline-flex w-fit rounded-full border border-border bg-background px-2.5 py-1 text-xs font-bold text-primary">
                      {number}
                    </span>
                    <h3 className="relative z-10 mt-6 text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="relative z-10 mt-2 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </article>
                </div>
              );
            })}

            <div className="relative ml-8 sm:ml-0">
              <span className="absolute -left-10 top-5 z-20 flex size-5 items-center justify-center rounded-full border border-primary/20 bg-card text-[10px] font-bold text-primary sm:hidden">
                8
              </span>
              <article className="group relative flex min-h-[178px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card/95 p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xs">
                <DottedBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_18%,transparent_76%)]" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Need guidance?
                  </p>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Ready to Start?
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    Book your consultation and get clear guidance for your next
                    step.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="relative z-10 mt-3 inline-flex w-fit items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book Consultation
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
