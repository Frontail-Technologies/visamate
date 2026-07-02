import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Plane,
  Users,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Tourist Visa",
    description:
      "Travel guidance, document checklist, and application support.",
    Icon: Plane,
    id: "tourist",
    image: "/images/illustrations/services/tourist%20visa.png",
  },
  {
    title: "Business Visa",
    description:
      "Business documentation, invitation support, and application assistance.",
    Icon: Briefcase,
    id: "business",
    image: "/images/illustrations/services/business%20visa.png",
  },
  {
    title: "Student Visa",
    description:
      "Admission documents, SOP guidance, and interview preparation.",
    Icon: GraduationCap,
    id: "student",
    image: "/images/illustrations/services/student%20visa.png",
  },
  {
    title: "Work Visa",
    description:
      "Job-related documentation, eligibility guidance, and process support.",
    Icon: Wrench,
    id: "work",
    image: "/images/illustrations/services/work%20visa.png",
  },
  {
    title: "Family Visa",
    description:
      "Invitation support, relationship documents, and application help.",
    Icon: Users,
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon, id, image }, i) => (
            <article
              key={id}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                i === services.length - 1 && services.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <Image
                src={image}
                alt={`${title} illustration`}
                width={120}
                height={120}
                className="pointer-events-none absolute right-3 top-3 h-20 w-20 object-contain opacity-80 transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
              />

              <div className="relative z-10 mb-4 flex size-10 items-center justify-center rounded-lg border border-border bg-background">
                <Icon className="size-4 text-primary" />
              </div>
              <h3 className="relative z-10 max-w-[70%] text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="relative z-10 mt-2 max-w-[78%] text-sm leading-6 text-muted-foreground">
                {description}
              </p>
              <div className="relative z-10 mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Learn more <ArrowRight className="size-3" />
              </div>
            </article>
          ))}

          {/* CTA card — neutral, not maroon */}
          <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Not sure which visa?
            </p>
            <h3 className="mt-3 text-base font-semibold text-foreground">
              Talk to us and we&apos;ll guide you.
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Tell us your purpose and we&apos;ll identify the right visa
              category for your needs.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Free Guidance
              <ArrowRight className="size-3.5" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
