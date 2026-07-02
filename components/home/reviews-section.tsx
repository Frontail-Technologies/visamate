import { Star } from "lucide-react";

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
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          className="size-3.5 fill-primary text-primary"
        />
      ))}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Google Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Clients Say About Visa Mate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Clients value clear guidance, honest communication, and practical
            support throughout their visa preparation.
          </p>
        </div>

        <div
          id="reviews-list"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map(({ name, title, rating, date, review, initials }) => (
            <article
              key={name}
              className="rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
                  <Star className="size-3.5 fill-primary text-primary" />
                  {rating}
                </div>
              </div>

              <p className="mt-4 text-xs font-medium text-primary">{title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {review}
              </p>
              <div className="mt-5">
                <Stars count={5} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
