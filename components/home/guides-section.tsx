"use client";

import type React from "react";
import { ArrowRight, Play } from "lucide-react";
import Script from "next/script";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * 🔧 REPLACE these shortcodes with your actual Instagram Reel shortcodes.
 * How to find a shortcode: From a reel URL like
 *   https://www.instagram.com/reel/ABC123xyz/
 * the shortcode is: ABC123xyz
 *
 * The embed works only for PUBLIC posts. Private posts will show a blank card.
 */
const reels = [
  {
    id: "reel-1",
    shortcode: "NTc4MTIwNjQ2YQ", // ← replace with your reel shortcode
    topic: "Documents",
    fallbackTitle: "What documents do you really need?",
  },
  {
    id: "reel-2",
    shortcode: "C9Lx4sPzGy2", // ← replace with your reel shortcode
    topic: "Interview",
    fallbackTitle: "3 questions visa officers always ask",
  },
  {
    id: "reel-3",
    shortcode: "C7Mz5tRzGw3", // ← replace with your reel shortcode
    topic: "Student Visa",
    fallbackTitle: "SOP tips that actually work",
  },
  {
    id: "reel-4",
    shortcode: "C6Np6uSzGv4", // ← replace with your reel shortcode
    topic: "Process",
    fallbackTitle: "Visa journey in 60 seconds",
  },
];

const patternStyle: Record<string, React.CSSProperties> = {
  dots: { backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" },
  grid: { backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "22px 22px" },
  diagonal: { backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" },
};

const reelPatterns = ["dots", "grid", "diagonal", "dots"] as const;
const reelGradients = [
  ["#8d0f35", "#b52c52"],
  ["#0c84cf", "#0b5f99"],
  ["#8d0f35", "#0c84cf"],
  ["#0c84cf", "#8d0f35"],
] as const;

export function GuidesSection() {
  return (
    <section id="guides" className="bg-muted/30 py-20 lg:py-24">
      {/* Load Instagram embed script */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              <InstagramIcon className="inline size-3.5 mr-1.5" />
              Guides
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Learn About{" "}
              <span className="text-primary">Visa Process Easily</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Short video guides on Instagram &amp; Facebook — swipe, watch, and
              understand the visa process in under 2 minutes.
            </p>
          </div>
          <a
            href="https://www.instagram.com/visamate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/30 hover:text-primary"
          >
            <InstagramIcon className="size-4" />
            Follow on Instagram
          </a>
        </div>

        {/* Reel embeds */}
        <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map(({ id, shortcode, topic, fallbackTitle }, i) => (
            <div key={id} className="group flex flex-col">
              {/* Topic tag above embed */}
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/8 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                  {topic}
                </span>
              </div>

              {/* Instagram Embed — blockquote format */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/reel/${shortcode}/?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "12px",
                    boxShadow: "none",
                    display: "block",
                    margin: "0",
                    minWidth: "0",
                    padding: "0",
                    width: "100%",
                  }}
                >
                  {/* Fallback UI shown while embed loads */}
                  <div
                    className="relative flex items-end overflow-hidden rounded-2xl"
                    style={{
                      aspectRatio: "9/16",
                      background: `linear-gradient(160deg, ${reelGradients[i][0]}, ${reelGradients[i][1]})`,
                    }}
                  >
                    <div className="absolute inset-0" style={patternStyle[reelPatterns[i]]} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-sm">
                        <Play className="size-6 fill-white text-white" />
                      </div>
                    </div>
                    <div className="relative z-10 p-4">
                      <p className="text-xs font-semibold leading-snug text-white">{fallbackTitle}</p>
                      <p className="mt-1 text-[10px] text-white/60">Loading reel…</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Shortcode update notice */}
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          ℹ️ Replace the reel shortcodes in{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[10px]">
            components/home/guides-section.tsx
          </code>{" "}
          with your actual Instagram Reel shortcodes.
        </p>

        {/* Bottom link */}
        <div className="mt-4 flex items-center justify-center">
          <a
            href="https://www.instagram.com/visamate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-4" />
            View all reels on Instagram
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
