"use client";

import { useEffect, useState } from "react";
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteSplash() {
  const [stage, setStage] = useState<"initial" | "animating" | "opening" | "done">("initial");

  useEffect(() => {
    // Check if splash was already shown in this session
    if (sessionStorage.getItem("splashShown")) {
      setStage("done");
      return;
    }

    // Start animation sequence
    setStage("animating");

    // After 1.2s (plane flies across), open the panels
    const openTimer = setTimeout(() => {
      setStage("opening");
    }, 1200);

    // After panels open (800ms), hide completely
    const doneTimer = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("splashShown", "true");
    }, 2000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Left Panel (Primary) */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1/2 bg-primary transition-transform duration-700 ease-in-out",
          stage === "opening" ? "-translate-x-full" : "translate-x-0"
        )}
      />

      {/* Right Panel (Accent) */}
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-1/2 bg-accent transition-transform duration-700 ease-in-out",
          stage === "opening" ? "translate-x-full" : "translate-x-0"
        )}
      />

      {/* Flying Plane Container */}
      <div
        className={cn(
          "absolute z-10 text-white transition-all duration-[1200ms] ease-in-out",
          stage === "initial"
            ? "-left-[20%] top-[60%] scale-50 opacity-0"
            : stage === "animating"
              ? "left-[120%] top-[40%] scale-150 opacity-100"
              : "left-[120%] top-[40%] opacity-0"
        )}
      >
        <Plane className="size-16 -rotate-12 fill-white" />
      </div>
    </div>
  );
}
