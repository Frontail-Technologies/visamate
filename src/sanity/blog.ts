export type BlogBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      url: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    };

export type BlogImage = {
  url: string;
  alt: string;
  caption?: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  thumbnail?: BlogImage;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  keywords: string[];
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  body: BlogBlock[];
};

import { fallbackPosts } from "@/data/fallback";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-02";
const readToken =
  process.env.SANITY_API_READ_TOKEN ||
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_WRITE_TOKEN;
const normalizedApiVersion = apiVersion.startsWith("v")
  ? apiVersion
  : `v${apiVersion}`;

const blogFields = `{
  title,
  "slug": slug.current,
  excerpt,
  "thumbnail": select(
    defined(thumbnail.asset) => {
      "url": thumbnail.asset->url,
      "alt": coalesce(thumbnail.alt, title),
      "caption": thumbnail.caption
    },
    defined(thumbnail.url) => thumbnail,
    null
  ),
  publishedAt,
  updatedAt,
  author,
  category,
  keywords,
  readTime,
  seoTitle,
  seoDescription,
  "body": body[]{
    type,
    text,
    items,
    caption,
    headers,
    "rows": rows[].cells,
    "url": select(
      defined(image.asset) => image.asset->url,
      defined(url) => url,
      null
    ),
    "alt": coalesce(alt, image.alt, ""),
  }
}`;

async function sanityQuery<T>(query: string): Promise<T | null> {
  if (!projectId) return null;

  const url = new URL(
    `https://${projectId}.api.sanity.io/${normalizedApiVersion}/data/query/${dataset}`,
  );
  url.searchParams.set("query", query);

  const response = await fetch(url, {
    headers: readToken
      ? {
          Authorization: `Bearer ${readToken}`,
        }
      : undefined,
    next: { revalidate: 60 },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { result?: T };
  return data.result ?? null;
}

export async function getBlogPosts() {
  const posts = await sanityQuery<BlogPost[]>(
    `*[_type == "blogPost"] | order(publishedAt desc) ${blogFields}`,
  );

  return posts?.length ? posts : fallbackPosts;
}

export async function getBlogPost(slug: string) {
  const safeSlug = slug.replace(/"/g, '\\"');
  const post = await sanityQuery<BlogPost>(
    `*[_type == "blogPost" && slug.current == "${safeSlug}"][0] ${blogFields}`,
  );

  return post || fallbackPosts.find((item) => item.slug === slug) || null;
}

export async function getBlogSlugs() {
  const slugs = await sanityQuery<string[]>(
    `*[_type == "blogPost" && defined(slug.current)].slug.current`,
  );

  return slugs?.length ? slugs : fallbackPosts.map((post) => post.slug);
}

export async function getBlogCategories() {
  const posts = await getBlogPosts();
  return ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
}
