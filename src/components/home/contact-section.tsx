"use client";

import { useState } from "react";
import { SuccessDialog } from "@/components/success-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactItems, socialLinks } from "@/data/home";

const mapUrl = "https://www.google.com/maps?q=Visa%20Mate&output=embed";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: formData.get("service-type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setShowSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert("Failed to Send. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-16 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Talk to our team and get clear guidance for your visa application.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
          <div className="rounded-lg border border-border bg-card p-5 shadow-xs sm:p-6">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Get In Touch
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              We are here to help you understand the next step.
            </p>

            <div className="mt-8 grid gap-5 grid-cols-2">
              {contactItems.map(({ label, value, Icon }) => (
                <div key={label} className="flex  items-center gap-3">
                  <span className="flex md:size-10 size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="md:size-4 size-3" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {label}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-border pt-6">
              <div className="flex items-center gap-4">
                <p className="text-sm font-semibold text-foreground">
                  Social Media
                </p>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-xs sm:p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold text-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="service-type"
                  className="text-xs font-semibold text-foreground"
                >
                  Service Type
                </label>
                <Select name="service-type">
                  <SelectTrigger
                    id="service-type"
                    className="h-auto w-full rounded-lg border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary"
                  >
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tourist">Tourist Visa</SelectItem>
                    <SelectItem value="business">Business Visa</SelectItem>
                    <SelectItem value="student">Student Visa</SelectItem>
                    <SelectItem value="work">Work Visa</SelectItem>
                    <SelectItem value="family">Family / Visit Visa</SelectItem>
                    <SelectItem value="documents">Document Support</SelectItem>
                    <SelectItem value="interview">
                      Interview Preparation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card shadow-xs">
          <iframe
            title="Visa Mate location on Google Maps"
            src={mapUrl}
            className="h-72 w-full border-0 sm:h-80 lg:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  );
}
