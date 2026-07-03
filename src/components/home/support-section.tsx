import { supportCards } from "@/data/home";

export function SupportSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need{" "}
            <span className="text-primary">To Prepare Better</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            From your first consultation to document planning and interview
            preparation, Visa Mate helps you understand every step with clear,
            practical guidance.
          </p>
          <p className="mt-5 text-sm font-medium text-muted-foreground">
            Simple guidance. Honest process. Better preparation.
          </p>
        </div>

        {/* Right: cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {supportCards.map(({ number, title, description, Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-xs"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border bg-background">
                <Icon className="size-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground/50">{number}</span>
              <h3 className="mt-1 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
