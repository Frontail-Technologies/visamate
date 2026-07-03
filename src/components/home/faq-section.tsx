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

const categories = ["General", "Documents", "Interview", "Process"];

const faqs = [
  {
    category: "General",
    question: "What exactly does Visa Mate do?",
    answer:
      "Visa Mate provides visa consultation services. We help you understand the visa process, review your profile, prepare your document checklist, guide you through form filling, and help you prepare for your visa interview. We do not guarantee visa approvals, we support your preparation.",
  },
  {
    category: "General",
    question: "Do you guarantee that my visa will be approved?",
    answer:
      "No. Visa decisions are made by the respective embassies and consulates. We provide honest, practical guidance to help you prepare the best possible application, but we do not make promises or guarantees about outcomes.",
  },
  {
    category: "Process",
    question: "Which visas do you provide guidance for?",
    answer:
      "We provide guidance for Tourist Visas, Business Visas, Student Visas, Work Visas, and Family Visas. During your consultation, we'll help identify the most suitable visa category for your purpose.",
  },
  {
    category: "Process",
    question: "How does the consultation work?",
    answer:
      "You can book a consultation through our website or WhatsApp. During the session, we'll review your profile, travel purpose, and visa requirements, and provide personalised guidance on next steps.",
  },
  {
    category: "Process",
    question: "How long does the visa process take?",
    answer:
      "Processing times vary by country and visa type. We'll give you an estimated timeline during your consultation based on the specific visa you're applying for.",
  },
  {
    category: "Documents",
    question: "What documents will I need?",
    answer:
      "Required documents depend on your visa type and destination country. As part of our service, we provide you with a detailed, customised document checklist based on your specific situation.",
  },
  {
    category: "Interview",
    question: "Can you help me prepare for the visa interview?",
    answer:
      "Yes. We offer interview preparation sessions where we walk you through common interview questions, explain what visa officers typically look for, and help you practise answering clearly and confidently.",
  },
  {
    category: "General",
    question: "How do I get started?",
    answer:
      "Simply click 'Book Consultation' or reach out via WhatsApp. Our team will get in touch to understand your requirements and schedule your first session.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            Quick answers before you start your visa consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          <aside className="rounded-lg border border-border bg-card p-6 shadow-xs lg:sticky lg:top-24">
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
                    defaultValue={`${category}-0`}
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
