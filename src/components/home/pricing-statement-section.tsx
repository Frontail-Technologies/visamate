"use client";

import { motion } from "framer-motion";

import { AmbientBackground } from "@/components/ui/ambient-background";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { pricingStatement } from "@/data/visa-mate";
import { fadeUp, lineDraw, viewportOnce } from "@/lib/motion-variants";

export function PricingStatementSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <AmbientBackground variant="light" />

      <div className="relative mx-auto max-w-340 px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal variants={fadeUp}>
          <SectionLabel className="justify-center">
            {pricingStatement.label}
          </SectionLabel>
        </MotionReveal>

        <MotionReveal variants={fadeUp} delay={0.1}>
          <p className="text-section-heading-primary mx-auto mt-6 max-w-4xl font-bold text-foreground">
            {pricingStatement.heading}
            <br />
            <span className="text-burgundy">
              {pricingStatement.highlighted}
            </span>
          </p>
        </MotionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={lineDraw}
          className="mx-auto mt-12 h-0.75 w-40 origin-center rounded-full bg-linear-to-r from-transparent via-burgundy to-transparent sm:w-64"
        />
      </div>
    </section>
  );
}
