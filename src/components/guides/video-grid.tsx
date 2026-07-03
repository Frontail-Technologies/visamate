"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { VideoGuide } from "@/sanity/guides";

// ─── URL helpers ──────────────────────────────────────────────────────────────

function getPlatform(url: string): "instagram" | "youtube" | "other" {
  try {
    const host = new URL(url).hostname.replace("www.", "");
    if (host === "instagram.com") return "instagram";
    if (host === "youtube.com" || host === "youtu.be") return "youtube";
  } catch {}
  return "other";
}

// ─── Types ───────────────────────────────────────────────────────────────────

type VideoGridProps = {
  guides: VideoGuide[];
  categories: string[];
};

// ─── Grid ────────────────────────────────────────────────────────────────────

export function VideoGrid({ guides, categories }: VideoGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return guides;
    return guides.filter((g) => g.category === activeCategory);
  }, [activeCategory, guides]);

  return (
    <section className="bg-background pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category filter strip */}
        <div
          role="tablist"
          aria-label="Video categories"
          className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "inline-flex shrink-0 items-center rounded-lg border px-4 py-1.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-xs"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary",
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {/* Portrait reel grid */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {filtered.map((guide) => (
              <ReelCard key={guide._id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center">
            <p className="text-sm text-muted-foreground">
              No guides in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Reel card ────────────────────────────────────────────────────────────────

function ReelCard({ guide }: { guide: VideoGuide }) {
  return (
    <a
      href={guide.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch: ${guide.title}`}
      className="group relative block aspect-[9/16] overflow-hidden rounded-lg border border-border bg-muted shadow-xs"
    >
      {/* Thumbnail */}
      {guide.thumbnail ? (
        <Image
          src={guide.thumbnail.url}
          alt={guide.thumbnail.alt ?? guide.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        /* Branded gradient placeholder */
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-primary/5" />
      )}

      {/* Always-visible dark gradient at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Top: badges */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2.5">
        {/* Featured pill */}
        {guide.featured && (
          <span className="rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            Featured
          </span>
        )}

        {/* Platform icon top-right */}
        <span className="ml-auto flex size-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
          <Play className="size-3.5 text-white" />
        </span>
      </div>

      {/* Center: play button — always visible, scales on hover */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
          <Play className="size-5 translate-x-0.5 fill-white text-white drop-shadow" />
        </span>
      </div>

      {/* Bottom: title + category */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
          {guide.category}
        </p>
        <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-white">
          {guide.title}
        </h3>
      </div>

      {/* Hover overlay tint */}
      <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
    </a>
  );
}
