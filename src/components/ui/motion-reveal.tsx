"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, viewportOnce } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function MotionReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
