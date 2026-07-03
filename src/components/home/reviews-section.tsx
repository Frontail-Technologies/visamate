"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star, X } from "lucide-react";

import { LinedBackground } from "@/components/ui/lined-background";

const reviews = [
  {
    name: "Priya Sharma",
    title: "Student Visa - Canada",
    rating: "5.0",
    date: "12 Mar, 2026",
    review:
      "Visa Mate made the entire process clear. Their SOP and document checklist guidance helped me understand exactly where to start.",
    initials: "PS",
  },
  {
    name: "Mohammed Al-Rashid",
    title: "Business Visa - UK",
    rating: "5.0",
    date: "18 Mar, 2026",
    review:
      "Very honest team. They explained the documents I needed and what to expect during preparation without making false promises.",
    initials: "MA",
  },
  {
    name: "Anita Rodrigues",
    title: "Tourist Visa - Schengen",
    rating: "5.0",
    date: "22 Mar, 2026",
    review:
      "The interview preparation session helped me feel calmer and more confident about how to present my travel purpose.",
    initials: "AR",
  },
  {
    name: "Rajan Mehta",
    title: "Work Visa - USA",
    rating: "5.0",
    date: "02 Apr, 2026",
    review:
      "The consultation was detailed and personalised. They reviewed my profile and helped me understand what needed improvement.",
    initials: "RM",
  },
  {
    name: "Sarah Kim",
    title: "Student Visa - Australia",
    rating: "5.0",
    date: "08 Apr, 2026",
    review:
      "Excellent document support. The checklist was simple, organized, and easy to follow throughout the preparation stage.",
    initials: "SK",
  },
  {
    name: "Farhan Chowdhury",
    title: "Family Visa - New Zealand",
    rating: "5.0",
    date: "16 Apr, 2026",
    review:
      "The team was patient and answered my questions clearly. They made the family visa process easier to understand.",
    initials: "FC",
  },
];

function Stars({ count = 1 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="size-5 fill-primary text-primary" />
      ))}
    </span>
  );
}

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;

    setCanScrollPrevious(scroller.scrollLeft > 4);
    setCanScrollNext(scroller.scrollLeft < maxScrollLeft - 4);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollReviews = (direction: "previous" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left:
        direction === "next"
          ? scroller.clientWidth * 0.9
          : -scroller.clientWidth * 0.9,
      behavior: "smooth",
    });

    window.setTimeout(updateScrollState, 350);
  };

  return (
    <section
      id="reviews"
      className="overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Clients value clear guidance, honest communication, and practical
            support throughout their visa preparation.
          </p>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            id="reviews-list"
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map(({ name, title, rating, date, review, initials }) => {
              const shouldTruncate = review.length > 92;
              const isTooltipOpen = activeTooltip === name;

              return (
                <article
                  key={name}
                  className="relative min-w-0 flex-[0_0_100%] snap-start overflow-hidden rounded-lg border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/20 hover:shadow-xs sm:flex-[0_0_calc((100%-1rem)/2)] lg:flex-[0_0_calc((100%-2rem)/3)]"
                >
                  <LinedBackground className="opacity-25 [mask-image:radial-gradient(ellipse_at_top_right,black_18%,transparent_74%)]" />
                  <Quote className="pointer-events-none absolute bottom-5 right-6 size-12 fill-primary/10 text-primary/10" />

                  <div className="relative z-10 flex items-center gap-3">
                    <Stars count={5} />
                    <span className="text-sm font-semibold text-foreground">
                      {rating}
                    </span>
                  </div>

                  <p className="relative z-10 mt-5 min-h-12 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {review}
                  </p>
                  {shouldTruncate && (
                    <div className="relative z-20 mt-3">
                      <button
                        type="button"
                        aria-expanded={isTooltipOpen}
                        onClick={() => setActiveTooltip(name)}
                        className="text-xs font-bold text-primary transition-colors hover:text-foreground"
                      >
                        Read more
                      </button>
                    </div>
                  )}

                  <div className="relative z-10 mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-primary text-sm font-bold text-primary-foreground">
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">
                          {name}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {title}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {date}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous review"
            disabled={!canScrollPrevious}
            onClick={() => scrollReviews("previous")}
            className="flex size-12 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-xs transition-colors hover:border-primary/20 hover:text-primary disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            disabled={!canScrollNext}
            onClick={() => scrollReviews("next")}
            className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
      {activeTooltip && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full review"
          onClick={() => setActiveTooltip(null)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/30 px-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg rounded-lg border border-border bg-card p-6 text-left shadow-xs"
          >
            <button
              type="button"
              aria-label="Close review"
              onClick={() => setActiveTooltip(null)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-primary"
            >
              <X className="size-4" />
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Full Review
            </p>
            <p className="mt-4 pr-8 text-sm leading-7 text-muted-foreground">
              {reviews.find((review) => review.name === activeTooltip)?.review}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
