import Image from "next/image";
import { Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your profile, travel purpose, and visa type.",
    image: "/images/illustrations/process/Consultation.png",
  },
  {
    number: "02",
    title: "Country & Visa Selection",
    description: "We suggest the right country and visa category for you.",
    image: "/images/illustrations/process/Country%20%26%20Visa%20Selection.png",
  },
  {
    number: "03",
    title: "Documentation",
    description: "We help you prepare a complete document checklist.",
    image: "/images/illustrations/process/Documentation.png",
  },
  {
    number: "04",
    title: "Form Filling & Appointment",
    description: "We assist with application forms and booking appointments.",
    image: "/images/illustrations/process/Form%20Filling%20%26%20Appointment.png",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description: "We prepare you for common interview questions and process.",
    image: "/images/illustrations/process/Interview%20Preparation.png",
  },
  {
    number: "06",
    title: "Submission & Tracking",
    description: "We guide you during submission and tracking updates.",
    image: "/images/illustrations/process/Submission%20%26%20Tracking.png",
  },
  {
    number: "07",
    title: "Visa Decision & Guidance",
    description: "We support you after the final visa decision.",
    image: "/images/illustrations/process/Visa%20Decision%20%26%20Guidance.png",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Your Visa Journey, Step by Step
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            A simple step-by-step process to guide you from consultation to
            final visa decision.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative mt-12">
          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description, image }) => (
              <article
                key={number}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
              >
                <span className="absolute left-5 top-5 z-10 flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                  {Number(number)}
                </span>

                <div className="mb-5 flex h-28 items-center justify-center rounded-lg border border-border bg-background/70 px-2">
                  <Image
                    src={image}
                    alt={`${title} illustration`}
                    width={150}
                    height={120}
                    className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-1 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}

            <article className="group relative overflow-hidden rounded-lg border border-primary/20 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
              <span className="absolute left-5 top-5 z-10 flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                8
              </span>

              <div className="mb-5 flex h-28 items-center justify-center rounded-lg border border-border bg-background/70 px-4 text-center">
                <Plane className="size-12 -rotate-12 text-primary" />
              </div>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                Ready to Start?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Book your consultation and get clear guidance for your next step.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book Consultation
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
