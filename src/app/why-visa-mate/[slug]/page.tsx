import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { buildWhatsAppLink, whyChooseSection } from "@/data/visa-mate";

type WhyVisaMateDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPoint(slug: string) {
  return whyChooseSection.points.find((point) => point.slug === slug);
}

export async function generateStaticParams() {
  return whyChooseSection.points.map((point) => ({ slug: point.slug }));
}

export async function generateMetadata({
  params,
}: WhyVisaMateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const point = getPoint(slug);

  if (!point) return {};

  return {
    title: point.pageTitle,
    description: point.paragraphs[0],
    alternates: { canonical: `/why-visa-mate/${point.slug}` },
  };
}

export default async function WhyVisaMateDetailPage({
  params,
}: WhyVisaMateDetailPageProps) {
  const { slug } = await params;
  const point = getPoint(slug);

  if (!point) {
    notFound();
  }

  return (
    <>
      <SiteNavbar />
      <main className="min-h-dvh bg-warm-white pb-24 pt-32 text-foreground sm:pt-36">
        <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
          <div>
            <Link
              href="/#why-choose"
              className="inline-flex items-center gap-2 font-serif text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Why Visa Mate
            </Link>

            <p className="text-label mt-8 text-burgundy">
              {whyChooseSection.label}
            </p>
            <h1 className="text-section-heading-primary mt-4 font-bold text-foreground">
              {point.pageTitle}
            </h1>

            {/* <div className="relative mt-10 aspect-16/9 overflow-hidden rounded-[1.75rem] border border-border shadow-sm">
              <Image
                src={point.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-right"
                priority
              />
            </div> */}

            <div className="mt-10 space-y-5 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
              {point.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 rounded-3xl border border-border bg-white p-8 shadow-sm">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-foreground">
                    Ready to start your USA visa application?
                  </p>
                  <p className="mt-1 font-serif text-sm text-muted-foreground">
                    Reach out and our team will guide you through every step.
                  </p>
                </div>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="shrink-0"
                >
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Apply on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
