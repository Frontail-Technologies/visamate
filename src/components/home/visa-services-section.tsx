import Image from "next/image";

import { DottedBackground } from "@/components/ui/dotted-background";

const services = [
  {
    title: "Tourist Visa",
    description:
      "Travel guidance, document checklist, and application support.",
    id: "tourist",
    image: "/images/illustrations/services/tourist%20visa.png",
  },
  {
    title: "Business Visa",
    description:
      "Business documentation, invitation support, and application assistance.",
    id: "business",
    image: "/images/illustrations/services/business%20visa.png",
  },
  {
    title: "Student Visa",
    description:
      "Admission documents, SOP guidance, and interview preparation.",
    id: "student",
    image: "/images/illustrations/services/student%20visa.png",
  },
  {
    title: "Work Visa",
    description:
      "Job-related documentation, eligibility guidance, and process support.",
    id: "work",
    image: "/images/illustrations/services/work%20visa.png",
  },
  {
    title: "Family Visa",
    description:
      "Invitation support, relationship documents, and application help.",
    id: "family",
    image: "/images/illustrations/services/family%20visa.png",
  },
];

export function VisaServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Visa Services
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Services We Provide
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            Choose the right visa support based on your travel purpose and
            profile.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, id, image }) => (
            <article
              key={id}
              className="group relative min-h-[162px] overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <DottedBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_18%,transparent_74%)]" />
              <Image
                src={image}
                alt={`${title} illustration`}
                width={120}
                height={120}
                className="pointer-events-none absolute right-3 top-3 z-10 h-auto w-20 object-contain opacity-80 transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
              />
              <h3 className="relative z-10 max-w-[70%] text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="relative z-10 mt-2 max-w-[78%] text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}

          {/* CTA card — neutral, not maroon */}
          <article className="relative flex min-h-[162px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm">
            <DottedBackground className="opacity-80 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_78%)]" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Not sure which visa?
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                Talk to us and we&apos;ll guide you.
              </h3>
            </div>
            <a
              href="#contact"
              className="relative z-10 mt-4 inline-flex w-fit items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Free Guidance
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
