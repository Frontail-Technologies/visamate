import {
  CheckCircle2,
  MessageCircle,
  ShieldOff,
  UserCheck,
  FileCheck,
  BookOpen,
} from "lucide-react";

const points = [
  {
    text: "Honest and practical guidance",
    Icon: CheckCircle2,
  },
  {
    text: "Clear document support",
    Icon: FileCheck,
  },
  {
    text: "Interview preparation help",
    Icon: BookOpen,
  },
  {
    text: "Personalized consultation",
    Icon: UserCheck,
  },
  {
    text: "Easy communication support",
    Icon: MessageCircle,
  },
  {
    text: "No false promises or guarantees",
    Icon: ShieldOff,
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-muted/40 py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-0 top-0 size-[400px] rounded-full bg-accent/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-[400px] rounded-full bg-primary/6 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: text block */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-accent uppercase">
              Why Choose Visa Mate
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Guidance That Makes Your{" "}
              <span className="text-primary">Visa Process Simple</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              We focus on clarity, honest guidance, and step-by-step support so
              you can prepare better without confusion.
            </p>

            {/* Feature points grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {points.map(({ text, Icon }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative accent card */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Background glow card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-primary/10 blur-xl" />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                {/* Top accent strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent via-primary to-accent/60" />

                <div className="p-8">
                  {/* Big number stat */}
                  <div className="flex items-end gap-2">
                    <span className="text-7xl font-extrabold leading-none tracking-tight text-primary">
                      7
                    </span>
                    <span className="mb-2 text-base font-semibold text-muted-foreground">
                      steps
                    </span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Clear Journey from Start to Finish
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    From consultation to final visa decision — we're with you at
                    every stage.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Understand your profile",
                      "Prepare required documents",
                      "Practice interview answers",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div className="size-4 shrink-0 rounded-full bg-accent/15 p-0.5">
                          <div className="size-full rounded-full bg-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl bg-primary/8 px-4 py-3">
                    <p className="text-xs font-medium text-primary">
                      "Simple guidance. Honest process. Better preparation."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
