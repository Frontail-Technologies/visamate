"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import type { PaymentStep as PaymentStepData } from "@/data/visa-mate";
import { MotionReveal } from "@/components/ui/motion-reveal";
import {
  fadeIn,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function PaymentStepRow({
  step,
  reverse = false,
}: {
  step: PaymentStepData;
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
      <MotionReveal
        variants={fadeIn}
        className={cn(reverse && "lg:order-2")}
      >
        <div className="group overflow-hidden rounded-[1.75rem] border border-border shadow-sm">
          <Image
            src={step.image}
            alt=""
            width={800}
            height={640}
            className="aspect-5/4 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </MotionReveal>

      <MotionReveal
        variants={fadeUp}
        delay={0.1}
        className={cn(reverse && "lg:order-1")}
      >
        <span className="block text-5xl font-bold leading-none text-burgundy/50 sm:text-6xl">
          {step.number}
        </span>

        {/* {step.supportingLabel && (
          <p className="text-label mt-2 text-burgundy">
            {step.supportingLabel}
          </p>
        )} */}

        <h3 className="text-2xl mt-3 font-bold tracking-tight text-foreground/80">
          {step.title}
        </h3>

        <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-4xl font-bold text-foreground">
            {step.amount}
          </span>
          <span className="text-sm font-semibold text-burgundy sm:text-base">
            {step.secondaryAmount}
          </span>
        </p>

        <p className="mt-4 max-w-lg font-serif text-base leading-relaxed text-muted-foreground">
          {step.description}
        </p>

        {step.includes && (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {step.includes.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-2.5 font-serif text-sm leading-snug text-foreground"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-burgundy" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </MotionReveal>
    </div>
  );
}
