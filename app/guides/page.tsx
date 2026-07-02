import type { Metadata } from "next";

import { GuidesTabs } from "@/components/guides/guides-tabs";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { guideCategories, guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Visa Guides | VisaMate",
  description:
    "Practical visa guides for documents, interviews, student visas, business visas, and application preparation.",
};

export default function GuidesPage() {
  return (
    <>
      <main id="top" className="min-h-dvh bg-background text-foreground">
        <SiteNavbar />

        <section className="pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Visa Guides
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Practical Guides For Better Visa Preparation
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Browse simple, practical guides for documents, interviews, visa
                categories, and preparation steps.
              </p>
            </div>
          </div>
        </section>

        <GuidesTabs categories={guideCategories} guides={guides} />
      </main>

      <SiteFooter />
    </>
  );
}
