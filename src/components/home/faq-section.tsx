"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { buildWhatsAppLink, faqItems, faqSection } from "@/data/visa-mate";
import { fadeUp } from "@/lib/motion-variants";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative bg-warm-white py-20 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <MotionReveal variants={fadeUp}>
              <SectionLabel tone="burgundy">FAQ</SectionLabel>
            </MotionReveal>
            <MotionReveal variants={fadeUp} delay={0.1}>
              <h2 className="text-section-heading-secondary mt-5 font-bold text-foreground">
                {faqSection.heading}
              </h2>
            </MotionReveal>
            <MotionReveal variants={fadeUp} delay={0.18}>
              <p className="mt-5 max-w-md font-serif text-base leading-relaxed text-muted-foreground">
                Straight answers before you begin your USA B1/B2 visa
                application with Visa Mate.
              </p>
            </MotionReveal>

            <MotionReveal variants={fadeUp} delay={0.24}>
              <div className="mt-10 rounded-[1.75rem] border border-border bg-white p-6 sm:p-8">
                <p className="text-lg font-bold text-foreground">
                  {faqSection.closing.heading}
                </p>
                <p className="mt-1 font-serif text-sm text-muted-foreground">
                  {faqSection.closing.description}
                </p>
                <Button asChild variant="secondary" size="lg" className="mt-5 w-full">
                  <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    {faqSection.closing.cta}
                  </a>
                </Button>
              </div>
            </MotionReveal>
          </div>

          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-3 text-left"
          >
            {faqItems.map(({ question, answer, link }, index) => (
              <MotionReveal key={question} variants={fadeUp} delay={index * 0.06}>
                <AccordionItem
                  value={`faq-${index}`}
                  className="overflow-hidden rounded-[1.75rem] border border-border bg-white px-6 py-2 transition-colors duration-300 data-[state=open]:border-burgundy/20 data-[state=open]:shadow-sm sm:px-8"
                >
                  <AccordionTrigger className="py-6 text-base font-semibold text-foreground sm:text-lg">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {answer}
                    {link && (
                      <Link
                        href={link.href}
                        className="mt-3 flex w-fit items-center gap-1.5 font-serif text-sm font-semibold text-burgundy transition-colors hover:text-deep-burgundy"
                      >
                        {link.label}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </MotionReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
