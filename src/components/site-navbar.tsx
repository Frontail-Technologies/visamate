"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { ApplyModal } from "@/components/apply-modal";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink, navigationItems } from "@/data/visa-mate";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl transition-shadow duration-300",
        scrolled
          ? "border-b border-border shadow-sm"
          : "border-b border-transparent shadow-none",
      )}
    >
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex h-20 max-w-340 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp}>
          <Link
            href="/#top"
            className="flex shrink-0 items-center"
            aria-label="Visa Mate home"
          >
            <Image
              src="/images/logo.png"
              alt="Visa Mate"
              width={220}
              height={75}
              priority
              className="h-auto w-36 sm:w-44"
            />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="hidden items-center gap-10 lg:flex"
        >
          {navigationItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-[1.05rem] font-normal text-foreground transition-colors hover:text-burgundy-bright"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="hidden lg:flex">
          <Button asChild size="lg">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Apply on WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="ml-auto flex items-center gap-2 lg:hidden"
        >
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((current) => !current)}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </motion.div>
      </motion.nav>

      <div
        id="mobile-nav-drawer"
        className={cn(
          "overflow-hidden border-t border-border bg-white shadow-lg transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-112" : "max-h-0 border-transparent",
        )}
      >
        <div className="mx-auto grid max-w-340 gap-1 px-4 py-4 sm:px-6">
          {navigationItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-11 rounded-lg px-3 py-3 font-serif text-base font-normal text-foreground transition-colors hover:bg-light-blue-bg hover:text-primary-blue"
            >
              {link.label}
            </Link>
          ))}
          <ApplyModal>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setOpen(false)}
              className="mt-2 w-full"
            >
              Free Consultation
            </Button>
          </ApplyModal>
        </div>
      </div>
    </header>
  );
}
