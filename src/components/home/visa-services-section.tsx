import Image from "next/image";

import { DottedBackground } from "@/components/ui/dotted-background";

import { visaServices as services } from "@/data/home";

export function VisaServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Visa Services <span className="text-primary">We Provide</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Choose the right visa support based on your travel purpose and
            profile.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, id, image }) => (
            <article
              key={id}
              className="group relative min-h-[162px] overflow-hidden rounded-lg border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-xs"
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
          <article className="relative flex min-h-[162px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 shadow-xs">
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
