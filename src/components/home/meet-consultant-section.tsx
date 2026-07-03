import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

import { DottedBackground } from "@/components/ui/dotted-background";

import { meetConsultantHighlights as highlights } from "@/data/home";

export function MeetConsultantSection() {
  return (
    <section
      id="meet-consultant"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Meet the Person Behind{" "}
            <span className="text-primary">Visa Mate</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Real guidance from a real person — not a chatbot, not a form. Every
            client gets honest, practical consultation tailored to their
            individual profile.
          </p>
        </div>

        {/* Main card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
          <div className="grid lg:grid-cols-[420px_1fr]">
            {/* Photo column */}
            <div className="relative min-h-[400px] overflow-hidden bg-muted lg:min-h-full">
              <DottedBackground className="opacity-40" />
              <Image
                src="/images/founder.png"
                alt="Visa Mate Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>

            {/* Content column */}
            <div className="flex flex-col justify-center gap-8 p-8 sm:p-10 lg:p-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  [Founder Name]
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  Founder & Lead Visa Consultant
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>
                  With hands-on experience in visa consultation, I&apos;ve
                  helped hundreds of individuals and families navigate the
                  complexities of international travel — from first-time
                  tourists to business travellers and students pursuing
                  education abroad.
                </p>
                <p>
                  My approach is simple:{" "}
                  <span className="font-semibold text-foreground">
                    no false promises, no shortcuts.
                  </span>{" "}
                  I work directly with each client to understand their profile,
                  review their documents, and prepare them for every stage of
                  the process — including the visa interview.
                </p>
                <p>
                  Whether you&apos;re applying for a UK tourist visa, a
                  Schengen permit, or a student visa, I&apos;ll make sure you
                  go in prepared and confident.
                </p>
              </div>

              {/* Highlights */}
              <div className="border-t border-border pt-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-foreground"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <span className="size-2 rounded-full bg-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book a 1:1 Consultation
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://wa.me/918955229807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  <MessageCircle className="size-4 text-primary" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
