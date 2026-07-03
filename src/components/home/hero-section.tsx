import Image from "next/image";
import { ArrowRight, MessageCircle, Plane } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative flex md:min-h-[calc(100vh-72px)] items-start justify-center overflow-hidden px-6 pb-14 pt-44 text-center sm:px-10 sm:pt-24 lg:min-h-dvh lg:items-center lg:px-16 lg:pb-16 lg:pt-24">
      <Image
        src="/images/illustrations/hero/hero-bg-2.jpeg"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, 0px"
        className="object-cover object-[58%_38%] sm:hidden"
      />
      <Image
        src="/images/illustrations/hero/hero-bg-2.jpeg"
        alt=""
        fill
        priority
        sizes="(min-width: 641px) 100vw, 0px"
        className="hidden object-cover object-center sm:block sm:object-[center_top]"
      />
      <div className="absolute inset-0 bg-background/35 sm:bg-background/65 lg:bg-background/20" />
      {/* <DottedBackground className="z-[1]" /> */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <div className="flex max-w-4xl flex-col items-center gap-4 sm:gap-5">
          <p className="mx-auto inline-flex max-w-[320px] items-center gap-2 rounded-lg border border-border bg-card/85 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-xs backdrop-blur-md sm:max-w-fit sm:text-sm">
            <Plane className="size-4 shrink-0 text-primary" />
            <span className="sm:hidden">{heroContent.mobileBadge}</span>
            <span className="hidden sm:inline">{heroContent.desktopBadge}</span>
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
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

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 sm:mt-8">
            {heroContent.trustTags.map(({ value, label, Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-sm"
              >
                <Icon className="size-3.5 shrink-0 text-primary" />
                <span className="font-bold text-foreground">{value}</span>
                <span className="text-muted-foreground">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
