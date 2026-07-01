"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Priya Sharma",
    title: "Student Visa — Canada",
    rating: 5,
    review: "Visa Mate made the entire process so clear. They helped me with my SOP and document checklist. I had no idea where to start, but their step-by-step guidance was exactly what I needed.",
    initials: "PS",
  },
  {
    name: "Mohammed Al-Rashid",
    title: "Business Visa — UK",
    rating: 5,
    review: "Very honest team. They clearly told me what documents I needed and what to expect during the interview. No false promises — just clear, practical advice throughout.",
    initials: "MA",
  },
  {
    name: "Anita Rodrigues",
    title: "Tourist Visa — Schengen",
    rating: 5,
    review: "I was nervous about the visa interview but Visa Mate's preparation session really helped me. I knew what to say and how to present myself. Very grateful for the support.",
    initials: "AR",
  },
  {
    name: "Rajan Mehta",
    title: "Work Visa — USA",
    rating: 5,
    review: "The consultation was very detailed and personalised. They reviewed my profile carefully and pointed out exactly what I needed to strengthen before applying.",
    initials: "RM",
  },
  {
    name: "Sarah Kim",
    title: "Student Visa — Australia",
    rating: 5,
    review: "Excellent document support. They gave me a clear checklist and followed up at every stage. Feels like having a knowledgeable friend guide you through the process.",
    initials: "SK",
  },
  {
    name: "Farhan Chowdhury",
    title: "Family Visa — New Zealand",
    rating: 5,
    review: "The team was patient and answered all my questions clearly. They helped me understand the family visa process without any confusion or unnecessary complexity.",
    initials: "FC",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  
  // Handle responsive visible count
  const [VISIBLE, setVISIBLE] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVISIBLE(1);
      else if (window.innerWidth < 1024) setVISIBLE(2);
      else setVISIBLE(3);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const max = Math.max(0, reviews.length - VISIBLE);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, max));

  return (
    <section id="reviews" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header — centred, matches reference */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Slider viewport — clips overflow to create peek effect */}
        <div className="mt-14 overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + (${(VISIBLE - 1) / VISIBLE} * 20px / ${VISIBLE}))))`,
            }}
          >
            {reviews.map(({ name, title, rating, review, initials }) => (
              <article
                key={name}
                className="flex w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                {/* Quote circle */}
                <div className="mb-5 flex size-10 items-center justify-center rounded-full bg-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.364zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.364z" />
                  </svg>
                </div>

                {/* Stars */}
                <Stars count={rating} />

                {/* Review text */}
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                  {review}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-semibold text-foreground">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Nav buttons — below cards, left-aligned to match reference */}
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous reviews"
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md",
              index === 0 && "cursor-not-allowed opacity-40"
            )}
          >
            <ChevronLeft className="size-4 text-foreground" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index >= max}
            aria-label="Next reviews"
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md",
              index >= max && "cursor-not-allowed opacity-40"
            )}
          >
            <ChevronRight className="size-4 text-foreground" />
          </button>

          {/* Dot indicators */}
          <div className="ml-2 flex gap-1.5">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-200",
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
                )}
              />
            ))}
          </div>

          {/* Count */}
          <p className="ml-auto text-xs text-muted-foreground">
            {index + 1} / {max + 1}
          </p>
        </div>
      </div>
    </section>
  );
}
