"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { buildWhatsAppLink, finalCtaContent } from "@/data/visa-mate";
import { fadeUp } from "@/lib/motion-variants";

export function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-primary-blue py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-340 px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal variants={fadeUp}>
          <h2 className="text-section-heading-primary mx-auto max-w-3xl font-bold text-white">
            {finalCtaContent.heading}
          </h2>
        </MotionReveal>

        <MotionReveal variants={fadeUp} delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="secondary" size="lg">
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {finalCtaContent.primaryButton}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href="#top">{finalCtaContent.secondaryButton}</a>
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
