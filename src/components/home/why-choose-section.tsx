"use client";

import Image from "next/image";
import { Check } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { whyChooseSection } from "@/data/visa-mate";
import { cn } from "@/lib/utils";
import { fadeIn, fadeUp } from "@/lib/motion-variants";

const OVERLAY_GRADIENT =
  "linear-gradient(180deg, rgba(7,24,39,0.02) 0%, rgba(7,24,39,0.38) 45%, rgba(7,24,39,0.9) 100%)";

type CardLayout = {
  eyebrow: string;
  grid: string;
  height: string;
  longTitle?: boolean;
};

// Explicit bento layout, indexed to whyChooseSection.points (fixed 6-card order).
const CARD_LAYOUT: CardLayout[] = [
  {
    // 1. USA B1/B2 Visa Specialists
    eyebrow: "Specialists",
    grid: "sm:col-span-1 lg:col-span-4",
    height: "h-[280px] sm:h-[300px] lg:h-[300px]",
  },
  {
    // 2. Transparent Process
    eyebrow: "Process",
    grid: "sm:col-span-1 lg:col-span-3",
    height: "h-[280px] sm:h-[300px] lg:h-[300px]",
  },
  {
    // 3. No Hidden Charges
    eyebrow: "Transparency",
    grid: "sm:col-span-1 lg:col-span-5",
    height: "h-[280px] sm:h-[300px] lg:h-[300px]",
  },
  {
    // 4. Pay Service Fee After Appointment Confirmation — prominent
    eyebrow: "Payment",
    grid: "sm:col-span-2 lg:col-span-5",
    height: "h-[280px] sm:h-[320px] lg:h-[320px]",
    longTitle: true,
  },
  {
    // 5. Personalized Guidance
    eyebrow: "Guidance",
    grid: "sm:col-span-1 lg:col-span-4",
    height: "h-[280px] sm:h-[320px] lg:h-[320px]",
  },
  {
    // 6. Interview Preparation Included
    eyebrow: "Interview",
    grid: "sm:col-span-1 lg:col-span-3",
    height: "h-[280px] sm:h-[320px] lg:h-[320px]",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-340 px-4  sm:px-6 lg:px-8">
        <MotionReveal variants={fadeUp}>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-burgundy">
            {whyChooseSection.label}
          </p>
        </MotionReveal>
        <MotionReveal variants={fadeUp} delay={0.1}>
          <h2 className="text-4xl mb-10.5 mt-5  font-bold text-brand-navy">
            {whyChooseSection.heading}
          </h2>
        </MotionReveal>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {whyChooseSection.points.map((point, index) => {
            const layout = CARD_LAYOUT[index];

            return (
              <MotionReveal
                key={point.label}
                variants={fadeUp}
                delay={index * 0.06}
                className={cn(layout.grid, layout.height)}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/18 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <MotionReveal variants={fadeIn} className="absolute inset-0">
                    <Image
                      src={point.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover object-right transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </MotionReveal>

                  <div
                    className="absolute inset-0"
                    style={{ background: OVERLAY_GRADIENT }}
                  />
                  <div className="absolute inset-0 bg-burgundy/0 transition-colors duration-300 group-hover:bg-burgundy/18" />

                  <div className="relative flex h-full flex-col justify-between p-4.5 sm:p-5 lg:p-6">
                    <span className="ml-auto flex size-7.5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:size-8.5">
                      <Check
                        className="size-3.5 text-burgundy"
                        strokeWidth={3}
                      />
                    </span>

                    <div>
                      <p className="text-bento-eyebrow mb-2 font-semibold text-white/75">
                        {layout.eyebrow}
                      </p>
                      <p
                        className={cn(
                          "text-bento-title text-left font-bold text-white",
                          layout.longTitle ? "max-w-105" : "max-w-[90%]",
                        )}
                      >
                        {point.label}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
