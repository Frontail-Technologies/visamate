"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { faqCategories as categories, faqs } from "@/data/home";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Quick answers before you start your visa consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[0.4fr_0.6fr] md:items-start">
          <aside className="rounded-lg border border-border bg-card p-6 shadow-xs md:sticky md:top-24">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Still curious?
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Send us your visa question and we&apos;ll point you in the right
              direction.
            </p>
            <Button asChild className="mt-6">
              <a href="#contact">
                Contact Us
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <div className="mt-6 overflow-hidden rounded-lg border border-border bg-background p-3">
              <Image
                src="/images/illustrations/faqs/faq.png"
                alt="Visa Mate FAQ illustration"
                width={420}
                height={320}
                className="h-auto w-full object-contain"
              />
            </div>
          </aside>

          <div className="space-y-5">
            {categories.map((category) => {
              const categoryFaqs = faqs.filter(
                (faq) => faq.category === category,
              );

              return (
                <article
                  key={category}
                  className="overflow-hidden rounded-lg border border-border bg-card p-5 shadow-xs sm:p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {category}
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="mt-5"
                  >
                    {categoryFaqs.map(({ question, answer }, index) => (
                      <AccordionItem
                        key={question}
                        value={`${category}-${index}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="gap-4 text-left text-sm font-bold text-foreground hover:no-underline [&>svg]:rounded-lg [&>svg]:border [&>svg]:border-border [&>svg]:p-1 [&>svg]:size-8">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-7 text-muted-foreground">
                          {answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
