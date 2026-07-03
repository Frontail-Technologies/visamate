"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Compass,
  Globe2,
  Menu,
  MessageCircleQuestion,
  PlaneTakeoff,
  Route,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services", Icon: Compass },
  { label: "Process", href: "/#process", Icon: Route },
  { label: "Countries", href: "/#countries", Icon: Globe2 },
  { label: "Blog", href: "/blog", Icon: Globe2 },
  { label: "Reviews", href: "/#reviews", Icon: BadgeCheck },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 max-w-[100vw] px-0 py-0 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
      <nav className="mx-auto flex w-full max-w-full items-center justify-between gap-2 border-b border-border bg-background/95 px-3 py-2 backdrop-blur-xl sm:gap-4 sm:px-0 sm:pb-4 lg:max-w-7xl lg:rounded-lg lg:border lg:bg-card/80 lg:px-4 lg:py-3 lg:shadow-xs">
        <a
          href="/"
          className="flex min-w-0 items-center"
          aria-label="VisaMate home"
        >
          <Image
            src="/images/logo.png"
            alt="VisaMate"
            width={220}
            height={75}
            priority
            className="h-auto w-28 sm:w-40 lg:w-44"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <link.Icon className="size-4 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
              {link.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              <span className="absolute inset-0 -z-10 rounded-lg bg-secondary/0 transition-colors duration-300 group-hover:bg-secondary/70" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="/#contact">
              <MessageCircleQuestion className="size-4 text-accent" />
              Contact
            </a>
          </Button>

          <Button size="sm" asChild>
            <a href="/#consultation">
              Apply now
              <PlaneTakeoff className="size-4" />
            </a>
          </Button>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
          <Button size="sm" className="px-2.5 sm:px-3" asChild>
            <a href="/#consultation">
              <span className="hidden min-[360px]:inline">Apply</span>
              <PlaneTakeoff className="size-4" />
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="relative z-[70] inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-lg border border-primary/20 bg-card/90 text-primary shadow-xs transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative grid size-5 place-items-center">
              <Menu
                className={cn(
                  "absolute size-5 text-primary transition-all duration-300",
                  open && "rotate-90 scale-75 opacity-0",
                )}
              />
              <X
                className={cn(
                  "absolute size-5 text-primary transition-all duration-300",
                  open
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed right-3 top-16 z-[60] w-[calc(100vw-1.5rem)] max-w-80 origin-top-right rounded-lg border border-border bg-card/95 p-2 text-card-foreground shadow-xs backdrop-blur-xl transition-all duration-300 sm:right-6 sm:top-20 sm:w-[min(20rem,calc(100vw-3rem))] lg:hidden",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none hidden -translate-y-2 scale-95 opacity-0",
        )}
      >
        <div className="grid gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <link.Icon className="size-4 text-accent transition-transform group-hover:scale-110" />
                {link.label}
              </span>
              <ArrowRight className="size-3.5 translate-x-0 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="mt-1.5 grid grid-cols-2 gap-2 border-t border-border pt-1.5">
          <Button variant="outline" size="sm" asChild>
            <a href="/#contact" onClick={() => setOpen(false)}>
              <MessageCircleQuestion className="size-4 text-accent" />
              Contact
            </a>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href="#track" onClick={() => setOpen(false)}>
              <CalendarCheck className="size-4 text-white/90" />
              Track
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
