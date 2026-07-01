"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What exactly does Visa Mate do?",
    answer:
      "Visa Mate provides visa consultation services. We help you understand the visa process, review your profile, prepare your document checklist, guide you through form filling, and help you prepare for your visa interview. We do not guarantee visa approvals — we support your preparation.",
  },
  {
    question: "Do you guarantee that my visa will be approved?",
    answer:
      "No. Visa decisions are made by the respective embassies and consulates. We provide honest, practical guidance to help you prepare the best possible application, but we do not make promises or guarantees about outcomes.",
  },
  {
    question: "Which visas do you provide guidance for?",
    answer:
      "We provide guidance for Tourist Visas, Business Visas, Student Visas, Work Visas, and Family Visas. During your consultation, we'll help identify the most suitable visa category for your purpose.",
  },
  {
    question: "How does the consultation work?",
    answer:
      "You can book a consultation through our website or WhatsApp. During the session, we'll review your profile, travel purpose, and visa requirements, and provide personalised guidance on next steps.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Processing times vary by country and visa type. We'll give you an estimated timeline during your consultation based on the specific visa you're applying for.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Required documents depend on your visa type and destination country. As part of our service, we provide you with a detailed, customised document checklist based on your specific situation.",
  },
  {
    question: "Can you help me prepare for the visa interview?",
    answer:
      "Yes. We offer interview preparation sessions where we walk you through common interview questions, explain what visa officers typically look for, and help you practise answering clearly and confidently.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click 'Book Consultation' or reach out via WhatsApp. Our team will get in touch to understand your requirements and schedule your first session.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(
      "overflow-hidden border-b border-border last:border-b-0 transition-colors duration-200",
      open && "border-primary/20"
    )}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-4 text-left sm:py-5"
        aria-expanded={open}
      >
        <span className={cn(
          "text-sm font-semibold leading-snug transition-colors duration-200 sm:text-base",
          open ? "text-primary" : "text-foreground"
        )}>
          {question}
        </span>
        <ChevronDown
          className={cn(
            "mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180 text-primary"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-64 pb-4" : "max-h-0"
        )}
      >
        <p className="text-sm leading-7 text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Background: fine square grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute left-0 bottom-0 size-[350px] rounded-full bg-accent/6 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              FAQs
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              Find answers to common questions about visa process, documents, and consultation.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-bold text-foreground">
                Still have questions?
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Our team is happy to help with any specific queries about your visa journey.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div className="divide-y-0 rounded-2xl border border-border bg-card px-6 py-2 shadow-sm">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
