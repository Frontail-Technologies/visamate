import { FileCheck, ListChecks, MessageCircle, UserCheck } from "lucide-react";

const trustCards = [
  {
    title: "Personal Consultation",
    description:
      "One-to-one guidance based on your travel purpose and profile.",
    Icon: UserCheck,
  },
  {
    title: "Document Support",
    description:
      "Simple checklist and document planning to keep your application organized.",
    Icon: FileCheck,
  },
  {
    title: "Interview Preparation",
    description: "Practice common questions and prepare with confidence.",
    Icon: MessageCircle,
  },
  {
    title: "Step-by-Step Process",
    description: "Clear guidance from consultation to final preparation.",
    Icon: ListChecks,
  },
];

export function TrustSection() {
  return (
    <section className="bg-background px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Clear Guidance. Better Preparation. Confident Journey.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Visa Mate helps applicants understand the visa process with
            practical consultation, document support, profile review, and
            interview preparation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
