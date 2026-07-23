"use client";

import { Star } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { reviews, reviewsSection } from "@/data/visa-mate";
import { fadeUp } from "@/lib/motion-variants";

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <MotionReveal variants={fadeUp}>
            <SectionLabel tone="burgundy">
              {reviewsSection.label}
            </SectionLabel>
          </MotionReveal>
          <MotionReveal variants={fadeUp} delay={0.1}>
            <h2 className="text-section-heading-secondary mt-5 font-bold text-foreground">
              {reviewsSection.heading}
            </h2>
          </MotionReveal>
          <MotionReveal variants={fadeUp} delay={0.18}>
            <p className="mt-5 font-serif text-base leading-relaxed text-muted-foreground">
              {reviewsSection.subheading}
            </p>
          </MotionReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {reviews.map((review, index) => (
            <MotionReveal
              key={review.name}
              variants={fadeUp}
              delay={(index % 3) * 0.06}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-4 fill-burgundy text-burgundy"
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 font-serif text-sm leading-relaxed text-foreground/90">
                  {review.text}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-light-blue-bg text-sm font-bold text-primary-blue">
                    {getInitials(review.name)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.reviewCount} · {review.timeAgo}
                    </p>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
