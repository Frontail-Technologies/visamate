import Image from "next/image";
import { DottedBackground } from "@/components/ui/dotted-background";

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
    image:
      "/images/illustrations/process/Form%20Filling%20%26%20Appointment.png",
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
    <section
      id="process"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-24 size-72 rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 size-72 rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <div className="relative z-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description, image }) => (
              <article
                key={number}
                className="group relative flex min-h-[178px] flex-col overflow-hidden rounded-lg border border-border bg-card/95 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
              >
                <DottedBackground className="opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black_16%,transparent_76%)]" />
                <span className="absolute left-5 top-5 z-20 text-2xl font-extrabold text-primary">
                  {number}
                </span>
                {/* <Image
                  src={image}
                  alt={`${title} illustration`}
                  width={180}
                  height={180}
                  className="pointer-events-none absolute -right-5 -top-5 z-0 h-auto w-32 object-contain opacity-15 transition-transform duration-300 group-hover:scale-105 sm:w-36"
                /> */}
                <h3 className="relative z-10 mt-14 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}

            <article className="group relative flex min-h-[178px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card/95 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
              <DottedBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_18%,transparent_76%)]" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Need guidance?
                </p>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Ready to Start?
                </h3>
                <p className=" text-sm leading-6 text-muted-foreground">
                  Book your consultation and get clear guidance for your next
                  step.
                </p>
              </div>
              <a
                href="#contact"
                className="relative z-10 mt-2 inline-flex w-fit items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
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
