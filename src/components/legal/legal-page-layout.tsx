import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { buildWhatsAppLink } from "@/data/visa-mate";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  intro,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  intro?: React.ReactNode;
}) {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-dvh bg-warm-white pb-24 pt-32 text-foreground sm:pt-36">
        <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
          <p className="text-label text-burgundy">
            Legal
          </p>
          <h1 className="text-section-heading-primary mt-4 max-w-3xl font-bold text-foreground">
            {title}
          </h1>
          <p className="mt-4 font-serif text-sm text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>
          {intro && (
            <div className="mt-6 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground">
              {intro}
            </div>
          )}

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <nav
              aria-label="Table of contents"
              className="hidden lg:sticky lg:top-32 lg:block lg:self-start"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                On this page
              </p>
              <ul className="mt-4 space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="font-serif text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="max-w-2xl space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {section.body}
                  </div>
                </section>
              ))}

              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-bold text-foreground">
                      Questions about this policy?
                    </p>
                    <p className="mt-1 font-serif text-sm text-muted-foreground">
                      Reach out and our team will help clarify anything you
                      need.
                    </p>
                  </div>
                  <Button asChild variant="secondary" size="lg" className="shrink-0">
                    <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" />
                      Contact Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-2 block rounded-xl border border-dashed border-burgundy/40 bg-burgundy/5 px-4 py-3 text-xs font-semibold text-burgundy">
      {children}
    </span>
  );
}
