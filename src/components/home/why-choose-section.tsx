import Image from "next/image";

import { LinedBackground } from "@/components/ui/lined-background";

const points = [
  {
    title: "Honest and practical guidance",
    description:
      "Clear advice focused on preparation, process clarity, and realistic next steps.",
    image: "/images/illustrations/features/Honest and practical guidance.png",
  },
  {
    title: "Clear document support",
    description:
      "Simple document planning so your files stay organized and easier to review.",
    image: "/images/illustrations/features/Clear document support.png",
  },
  {
    title: "Interview preparation help",
    description:
      "Practice common questions and learn how to answer with better confidence.",
    image: "/images/illustrations/features/Interview preparation help.png",
  },
  {
    title: "Personalized consultation",
    description:
      "Guidance shaped around your travel purpose, profile, and visa category.",
    image: "/images/illustrations/features/Personalized consultation.png",
  },
  {
    title: "Easy communication support",
    description:
      "Stay informed with practical support throughout the preparation journey.",
    image: "/images/illustrations/features/Easy communication support.png",
  },
  {
    title: "No false promises or guarantees",
    description:
      "We keep the process honest and preparation-focused without approval claims.",
    image: "/images/illustrations/features/No false promises or guarantees.png",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-80 rounded-full bg-accent opacity-10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Why Choose Visa Mate
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Guidance That Makes Your Visa Process Simple
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            We focus on clarity, honest guidance, and step-by-step support so
            you can prepare better without confusion.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, description, image }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg border border-border bg-card/90 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
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
