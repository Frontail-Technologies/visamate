import type { Metadata } from "next";
import { Check } from "lucide-react";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import {
  documentChecklistPage,
  documentChecklistSections,
} from "@/data/visa-mate";

export const metadata: Metadata = {
  title: "DS-160 Document Checklist",
  description:
    "A checklist of the documents and information typically required for a USA B1/B2 DS-160 visa application.",
  alternates: { canonical: "/document-checklist" },
};

export default function DocumentChecklistPage() {
  return (
    <LegalPageLayout
      title={documentChecklistPage.heading}
      lastUpdated="July 2026"
      label="Resources"
      ctaHeading="Ready to start your application?"
      ctaDescription="Reach out and our team will guide you through your specific document requirements."
      intro={<p>{documentChecklistPage.intro}</p>}
      sections={documentChecklistSections.map((section) => ({
        id: section.id,
        title: section.title,
        body: (
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-2xl border border-border bg-white px-4 py-3"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-burgundy" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        ),
      }))}
    >
      <div className="rounded-3xl border border-dashed border-burgundy/30 bg-burgundy/5 p-6 font-serif text-sm leading-relaxed text-foreground/80 sm:p-8 sm:text-base">
        <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
          Note
        </p>
        {documentChecklistPage.note}
      </div>
    </LegalPageLayout>
  );
}
