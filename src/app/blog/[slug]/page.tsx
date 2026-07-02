import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { PostBody } from "@/components/blog/post-body";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { getBlogPost, getBlogPosts, getBlogSlugs } from "@/sanity/blog";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visamate.in";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.thumbnail
        ? [
            {
              url: post.thumbnail.url,
              alt: post.thumbnail.alt,
            },
          ]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = (await getBlogPosts())
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.thumbnail?.url
          ? post.thumbnail.url.startsWith("http")
            ? post.thumbnail.url
            : `${siteUrl}${post.thumbnail.url}`
          : undefined,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          "@type": "Organization",
          name: post.author,
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Visa Mate",
        },
        mainEntityOfPage: postUrl,
        keywords: post.keywords.join(", "),
      },
    ],
  };

  return (
    <>
      <main id="top" className="min-h-dvh bg-background text-foreground">
        <JsonLd data={articleSchema} />
        <SiteNavbar />

        <article className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>

            <div className="rounded-lg border border-border bg-card p-5 shadow-sm md:p-10">
              <header className="border-b border-border pb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {post.category}
                </p>
                <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>-</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  <span>-</span>
                  <span>{post.readTime}</span>
                </div>
              </header>

              {post.thumbnail && (
                <figure className="pt-8">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-background">
                    <Image
                      src={post.thumbnail.url}
                      alt={post.thumbnail.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 960px, 100vw"
                      className="object-contain p-8"
                    />
                  </div>
                  {post.thumbnail.caption && (
                    <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                      {post.thumbnail.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="pt-8">
                <PostBody body={post.body} />
              </div>

              {post.keywords.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-muted-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {relatedPosts.length > 0 && (
              <section className="mt-10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Related Blogs
                  </h2>
                  <Link href="/blog" className="text-sm font-bold text-primary">
                    View all
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
                    >
                      {related.thumbnail && (
                        <div className="relative aspect-[16/9] border-b border-border bg-background">
                          <Image
                            src={related.thumbnail.url}
                            alt={related.thumbnail.alt}
                            fill
                            sizes="(min-width: 640px) 480px, 100vw"
                            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                          {related.category}
                        </p>
                        <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-foreground">
                          {related.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-xs leading-6 text-muted-foreground">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
