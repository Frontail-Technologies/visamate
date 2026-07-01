import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileText,
  Globe,
  MessageSquare,
} from "lucide-react";

const steps = [
  { number: "01", title: "Consultation", description: "We understand your profile, travel purpose, and visa type.", Icon: MessageSquare },
  { number: "02", title: "Country & Visa Selection", description: "We suggest the right country and visa category for you.", Icon: Globe },
  { number: "03", title: "Documentation", description: "We help you prepare a complete document checklist.", Icon: FileText },
  { number: "04", title: "Form Filling & Appointment", description: "We assist with application forms and booking appointments.", Icon: CalendarCheck },
  { number: "05", title: "Interview Preparation", description: "We prepare you for common interview questions and process.", Icon: BookOpen },
  { number: "06", title: "Submission & Tracking", description: "We guide you during submission and tracking updates.", Icon: ClipboardList },
  { number: "07", title: "Visa Decision & Guidance", description: "We support you after the final visa decision.", Icon: CheckCircle2 },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Your Visa Journey, Step by Step
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            A simple step-by-step process to guide you from consultation to final visa decision.
          </p>
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-background">
                <Icon className="size-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground/50">{number}</span>
              <h3 className="mt-1 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm sm:flex-row">
          <p className="text-sm font-medium text-muted-foreground">
            All 7 steps are included in your consultation package.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
