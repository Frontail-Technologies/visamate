"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import { SuccessDialog } from "@/components/success-dialog";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import {
  contactEmail,
  phoneDisplayNumber,
  whatsappDisplayNumber,
} from "@/data/visa-mate";
import { fadeIn, fadeUp } from "@/lib/motion-variants";

const SERVICE_TYPE = "USA B1/B2 Tourist & Business Visa";

const fieldClasses =
  "h-12 w-full rounded-xl border border-border bg-warm-white px-4 font-serif text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary-blue";

const textareaClasses =
  "w-full resize-none rounded-xl border border-border bg-warm-white px-4 py-3 font-serif text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary-blue";

export function EnquirySection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: SERVICE_TYPE,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setShowSuccess(true);
      form.reset();
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-warm-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal variants={fadeUp} className="flex">
            <div className="group flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-border shadow-sm">
              <MotionReveal variants={fadeIn} className="relative h-64 overflow-hidden sm:h-80">
                <Image
                  src="/images/generated/hero-travel-consultation.png"
                  alt="Visa Mate consultant reviewing travel documents with a client"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </MotionReveal>

              <div className="flex flex-1 flex-col justify-between gap-8 bg-burgundy p-8 text-white sm:p-10">
                <div>
                  <SectionLabel tone="light">Get In Touch</SectionLabel>
                  <p className="text-card-heading mt-4 font-bold text-white">
                    Prefer to talk directly?
                  </p>
                  <p className="mt-3 max-w-sm font-serif text-sm leading-relaxed text-white/70">
                    Reach out on WhatsApp, phone, or email and our team will
                    guide you through your USA B1/B2 visa application.
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  <a
                    href={`tel:+91${phoneDisplayNumber}`}
                    className="flex items-center gap-3 font-serif text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Phone className="size-4" />
                    </span>
                    {whatsappDisplayNumber}
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-3 font-serif text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Mail className="size-4" />
                    </span>
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal variants={fadeUp} delay={0.1} className="flex">
            <div className="flex w-full flex-col rounded-[1.75rem] border border-border bg-white p-8 shadow-sm sm:p-10">
              <p className="text-card-heading font-bold text-foreground">
                Schedule a Free Consultation
              </p>
              <p className="mt-2 font-serif text-sm text-muted-foreground">
                Share your details and our team will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="enquiry-name"
                      className="text-sm font-semibold text-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className={fieldClasses}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="enquiry-phone"
                      className="text-sm font-semibold text-foreground"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="enquiry-email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="enquiry-message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your travel plans, timeline, or any questions you have..."
                    className={textareaClasses}
                  />
                </div>

                {hasError && (
                  <p className="text-sm font-semibold text-destructive">
                    Something went wrong. Please try again, or reach us
                    directly on WhatsApp.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="mt-2 w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Book Free Consultation"}
                </Button>
              </form>
            </div>
          </MotionReveal>
        </div>
      </div>

      <SuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        title="Request Sent!"
        description="We've received your enquiry and will get back to you shortly."
      />
    </section>
  );
}
