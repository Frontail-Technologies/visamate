"use client";

import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { Guide } from "@/lib/guides";

type GuidesTabsProps = {
  categories: string[];
  guides: Guide[];
};

export function GuidesTabs({ categories, guides }: GuidesTabsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGuides = useMemo(() => {
    if (activeCategory === "All") {
      return guides;
    }

    return guides.filter((guide) => guide.category === activeCategory);
  }, [activeCategory, guides]);

  return (
    <section id="all-guides" className="bg-background pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          aria-label="Guide categories"
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/25 hover:text-primary",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Showing {filteredGuides.length}{" "}
          {filteredGuides.length === 1 ? "guide" : "guides"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map(
            ({ slug, category, title, excerpt, image, readTime }) => (
              <article
                id={slug}
                key={slug}
                className="group scroll-mt-28 overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
              >
                <div className="relative h-56 overflow-hidden border-b border-border bg-background">
                  <Image
                    src={image}
                    alt={`${title} illustration`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {category}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <Clock className="size-3.5" />
                      {readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold leading-snug text-foreground">
                    {title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {excerpt}
                  </p>
                  <a
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-foreground"
                  >
                    Discuss This Guide
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
