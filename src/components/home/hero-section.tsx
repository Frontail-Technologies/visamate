"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

import {
  buildWhatsAppLink,
  heroBackgroundImages,
  heroContent,
} from "@/data/visa-mate";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import { useFinePointer } from "@/hooks/use-fine-pointer";
import { useImageCycle } from "@/hooks/use-image-cycle";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndex = useImageCycle(heroBackgroundImages.length);

  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);
  const [maxShownIndex, setMaxShownIndex] = useState(activeIndex);
  if (activeIndex !== prevActiveIndex) {
    setPrevActiveIndex(activeIndex);
    setMaxShownIndex((prev) => Math.max(prev, activeIndex));
  }

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const isFinePointer = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const parallaxActive = isFinePointer && !prefersReducedMotion;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-[95vh] items-center overflow-hidden bg-brand-navy text-white sm:min-h-screen lg:mt-16"
    >
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: "-15%",
          height: "115%",
          y: parallaxActive ? rawParallaxY : 0,
        }}
      >
        {heroBackgroundImages.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            {index <= maxShownIndex && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover md:object-right object-center"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-b from-brand-navy/80 via-brand-navy/55 to-brand-navy/85 md:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-black/60 via-burgundy/10 to-transparent md:block" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-340 px-4 pt-24 pb-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl rounded-xl p-4">
          <motion.p
            variants={fadeUp}
            className="text-label w-fit rounded-full bg-white px-4 py-2 text-burgundy"
          >
            {heroContent.eyebrow}
          </motion.p>

          <h1 className="text-hero mt-6 max-w-175 font-bold text-white">
            {heroContent.headingLines.map((line) => (
              <motion.span key={line} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl font-serif text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button asChild variant="secondary" size="lg">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" />
                {heroContent.primaryButton}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#contact">{heroContent.secondaryButton}</a>
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 inline-flex items-center gap-2 font-serif text-xs font-semibold text-white/85 sm:text-sm"
          >
            <span className="text-burgundy">●</span>
            {heroContent.trustStatement}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={viewportOnce}
        className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
