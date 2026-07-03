import Image from "next/image";

import { LinedBackground } from "@/components/ui/lined-background";
import { whyChoosePoints as points } from "@/data/home";

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-primary">Visa Mate</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            We focus on clarity, honest guidance, and step-by-step support so
            you can prepare better without confusion.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, description, image }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg border border-border bg-card/90 shadow-xs transition-all duration-300 hover:border-primary/20 hover:shadow-xs"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden  p-2">
                <LinedBackground />
                <Image
                  src={image}
                  alt={title}
                  unoptimized
                  width={420}
                  height={315}
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>

              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
