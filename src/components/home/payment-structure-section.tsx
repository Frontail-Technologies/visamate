"use client";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { PaymentStepRow } from "@/components/home/payment-step";
import { paymentSection, paymentSteps } from "@/data/visa-mate";
import { fadeUp } from "@/lib/motion-variants";

export function PaymentStructureSection() {
  return (
    <section
      id="payment-structure"
      className="relative bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
        <MotionReveal variants={fadeUp}>
          <SectionLabel tone="burgundy">Payment Structure</SectionLabel>
        </MotionReveal>
        <MotionReveal variants={fadeUp} delay={0.1}>
          <h2 className="text-section-heading-secondary mt-4 max-w-3xl font-bold text-foreground">
            {paymentSection.heading}
          </h2>
        </MotionReveal>
        <MotionReveal variants={fadeUp} delay={0.18}>
          <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
            {paymentSection.subheading}
          </p>
        </MotionReveal>

        <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24 lg:gap-28">
          {paymentSteps.map((step, index) => (
            <PaymentStepRow
              key={step.number}
              step={step}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
