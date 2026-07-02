"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("General");
  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
          <div>
            <span className="inline-flex rounded-lg border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              FAQs
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently asked question
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:grid lg:grid-cols-1 lg:gap-3">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenIndex(0);
                    }}
                    className={cn(
                      "min-w-0 rounded-lg border px-3 py-2 text-center text-sm font-semibold leading-tight whitespace-normal transition-colors sm:px-5 sm:text-left lg:min-w-0",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-primary/20 hover:text-primary",
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-muted-foreground">
              Here are common questions about Visa Mate consultation, document
              support, interview preparation, and the visa process.
            </p>

            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              {filteredFaqs.map(({ question, answer }, index) => {
                const isOpen = index === openIndex;

                return (
                  <div
                    key={question}
                    className="border-b border-border last:border-b-0"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <span className="text-sm font-semibold text-foreground">
                        {question}
                      </span>
                      {isOpen ? (
                        <Minus className="size-4 shrink-0 text-primary" />
                      ) : (
                        <Plus className="size-4 shrink-0 text-muted-foreground" />
                      )}
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-56" : "max-h-0",
                      )}
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                        {answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
