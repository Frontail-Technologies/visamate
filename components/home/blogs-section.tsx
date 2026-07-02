import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { guides } from "@/lib/guides";

const featuredGuides = guides.slice(0, 3);

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Visa Guides
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Practical Visa Guides For Every Step
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Simple guides to help you understand documents, interviews, and
            better visa preparation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredGuides.map(({ slug, category, title, excerpt, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
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
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {category}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {excerpt}
                </p>
                <a
                  href={`/guides#${slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-foreground"
                >
                  Read Guide
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/guides"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-bold text-foreground shadow-sm transition-colors hover:border-primary/25 hover:text-primary"
          >
            View All Guides
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
