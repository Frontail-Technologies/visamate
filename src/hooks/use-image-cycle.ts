"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Cycles through `length` indices on an interval, looping back to 0.
 * Freezes on index 0 when the user prefers reduced motion, or when
 * there's nothing to cycle through.
 */
export function useImageCycle(length: number, holdMs: number = 7000) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || length <= 1) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, holdMs);

    return () => clearInterval(id);
  }, [length, holdMs, prefersReducedMotion]);

  return prefersReducedMotion ? 0 : index;
}
