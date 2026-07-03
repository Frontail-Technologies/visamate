import type { Metadata } from "next";

import { VideoGrid } from "@/components/guides/video-grid";
import { CtaSection } from "@/components/home/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { getVideoCategories, getVideoGuides } from "@/sanity/guides";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visamate.in";

export const metadata: Metadata = {
  title: "Video Guides | Visa Mate",
  description:
    "Watch short visa guides and reels covering documents, interview tips, visa categories, and step-by-step preparation.",
  alternates: {
    canonical: `${siteUrl}/guides`,
  },
  openGraph: {
    title: "Video Guides | Visa Mate",
    description:
      "Short video guides for visa documents, interview prep, and practical application tips.",
    url: `${siteUrl}/guides`,
  },
};

export default async function GuidesPage() {
  const [guides, categories] = await Promise.all([
    getVideoGuides(),
    getVideoCategories(),
  ]);

  return (
    <>
      <main id="top" className="min-h-dvh bg-background text-foreground">
        <SiteNavbar />

        {/* Page header */}
        <section className="pb-10 pt-28 sm:pt-40 lg:pb-12 lg:pt-44">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-xs">
                🎬 Short Video Guides
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Visa <span className="text-primary">Video Guides</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Short, practical reels covering documents, interview tips, visa
                categories, and step-by-step preparation guidance.
              </p>
            </div>
          </div>
        </section>

        <VideoGrid guides={guides} categories={categories} />
        <CtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
