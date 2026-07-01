import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  FileCheck,
  MessageCircle,
  Plane,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const heroContent = {
  mobileBadge: "Visa Consultation • Interview Prep",
  desktopBadge: "Visa Consultation • Document Support • Interview Prep",
  title: "Start Your Visa Journey With Clear Guidance",
  description:
    "Visa Mate helps you prepare your documents, review your profile, and practice for your interview with simple step-by-step visa consultation.",
  primaryButton: "Book Consultation",
  secondaryButton: "Chat on WhatsApp",
  serviceChips: [
    { label: "Tourist Visa", Icon: Plane },
    { label: "Business Visa", Icon: Briefcase },
    { label: "Document Support", Icon: FileCheck },
    { label: "Interview Prep", Icon: BadgeCheck },
  ],
  checklist: ["Profile Review", "Document Planning", "Interview Preparation"],
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-start justify-center overflow-hidden px-6 pb-14 pt-20 text-center sm:px-10 sm:pt-24 lg:min-h-dvh lg:items-center lg:px-16 lg:pb-16 lg:pt-24">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="flex max-w-4xl flex-col items-center gap-4 sm:gap-5">
          <p className="mx-auto inline-flex max-w-[320px] items-center gap-2 rounded-xl border border-border bg-card/85 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-md sm:max-w-fit sm:text-sm">
            <Plane className="size-4 shrink-0 text-primary" />
            <span className="sm:hidden">{heroContent.mobileBadge}</span>
            <span className="hidden sm:inline">{heroContent.desktopBadge}</span>
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Start Your Visa Journey With{" "}
            <span className="text-primary">Clear Guidance</span>
          </h1>

          <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground sm:max-w-2xl sm:text-lg">
            {heroContent.description}
          </p>

          <div className="flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="h-12 w-full sm:w-auto" asChild>
              <a href="#consultation">
                {heroContent.primaryButton}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                <MessageCircle className="size-4 text-primary" />
                {heroContent.secondaryButton}
              </a>
            </Button>
          </div>

          <div className="mx-auto mt-1 flex max-w-sm flex-wrap items-center justify-center gap-2 sm:mt-5 sm:max-w-none">
            {heroContent.serviceChips.map(({ label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/20 hover:bg-card hover:text-primary"
              >
                <Icon className="size-[15px] text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <aside className="absolute right-8 top-1/2 z-10 hidden w-60 -translate-y-1/2 rounded-2xl border border-border bg-card/90 p-5 text-left shadow-sm backdrop-blur-md xl:block">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ClipboardCheck className="size-4" />
          </span>
          <h2 className="text-base font-semibold text-foreground">
            Visa Checklist
          </h2>
        </div>

        <div className="grid gap-3">
          {heroContent.checklist.map((point) => (
            <p
              key={point}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <CheckCircle2 className="size-4 text-primary" />
              {point}
            </p>
          ))}
        </div>
      </aside>
    </section>
  );
}
