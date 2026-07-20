"use client";

import Image from "next/image";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { processSection, processSteps } from "@/data/visa-mate";
import { fadeIn, fadeUp } from "@/lib/motion-variants";

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-warm-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <MotionReveal variants={fadeUp}>
              <SectionLabel tone="burgundy">
                {processSection.label}
              </SectionLabel>
            </MotionReveal>
            <MotionReveal variants={fadeUp} delay={0.1}>
              <h2 className="text-section-heading-secondary mt-5 font-bold text-foreground">
                {processSection.heading}
                <br />
                <span>{processSection.headingItalic}</span>
              </h2>
            </MotionReveal>
          </div>

          <MotionReveal variants={fadeUp} delay={0.18}>
            <p className="max-w-sm font-serif text-base leading-relaxed text-muted-foreground lg:text-right">
              {processSection.subheading}
            </p>
          </MotionReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8">
          {processSteps.map((step, index) => (
            <MotionReveal
              key={step.number}
              variants={fadeUp}
              delay={index * 0.06}
            >
              <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm">
                <MotionReveal variants={fadeIn} className="block">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-burgundy shadow-sm backdrop-blur-sm">
                      {step.number}
                    </span>
                  </div>
                </MotionReveal>

                <div className="p-7 sm:p-9">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
