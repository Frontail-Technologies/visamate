import type { Metadata } from "next";

import { BlogTabs } from "@/components/blog/blog-tabs";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { getBlogCategories, getBlogPosts } from "@/sanity/blog";

export const revalidate = 60;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visamate.in";

export const metadata: Metadata = {
  title: "Visa Blog | Visa Mate",
  description:
    "Practical visa blogs for documents, interviews, visa categories, and application preparation.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Visa Blog | Visa Mate",
    description:
      "Simple visa preparation blogs for documents, interviews, visa categories, and practical guidance.",
    url: `${siteUrl}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();
  const blogSchema = {
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
        ],
      },
      {
        "@type": "Blog",
        name: "Visa Mate Blog",
        url: `${siteUrl}/blog`,
        description: metadata.description,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${siteUrl}/blog/${post.slug}`,
          image: post.thumbnail?.url
            ? post.thumbnail.url.startsWith("http")
              ? post.thumbnail.url
              : `${siteUrl}${post.thumbnail.url}`
            : undefined,
          keywords: post.keywords.join(", "),
          datePublished: post.publishedAt,
          author: {
            "@type": "Organization",
            name: post.author,
          },
        })),
      },
    ],
  };

  return (
    <>
      <main id="top" className="min-h-dvh bg-background text-foreground">
        <JsonLd data={blogSchema} />
        <SiteNavbar />

        <section className="pt-20 pb-14 sm:pt-40 lg:pt-44 lg:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Visa <span className="text-primary">Blogs</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Practical long-form guidance for documents, interviews, visa
                categories, and confident application preparation.
              </p>
            </div>
          </div>
        </section>

        <BlogTabs categories={categories} posts={posts} />
      </main>

      <SiteFooter />
    </>
  );
}
