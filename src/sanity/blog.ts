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

const fallbackPosts: BlogPost[] = [
  {
    title: "Top Reasons Visa Applications Get Rejected",
    slug: "visa-application-rejection-reasons",
    excerpt:
      "Understand common mistakes, missing details, and preparation gaps that can weaken a visa application.",
    publishedAt: "2026-06-12",
    author: "Visa Mate",
    category: "Visa Tips",
    keywords: [
      "visa rejection reasons",
      "visa application mistakes",
      "visa preparation tips",
    ],
    readTime: "4 min read",
    seoTitle: "Top Reasons Visa Applications Get Rejected | Visa Mate",
    seoDescription:
      "Learn common visa application mistakes and how better preparation can help you avoid confusion.",
    thumbnail: {
      url: "/images/blogs.png",
      alt: "Visa decision guidance illustration",
    },
    body: [
      {
        type: "paragraph",
        text: "Visa refusals can happen for many reasons, and every case depends on the applicant profile, destination country, documents, and interview answers. The best preparation starts with understanding where applications often become weak.",
      },
      {
        type: "heading",
        text: "Common Preparation Gaps",
      },
      {
        type: "list",
        items: [
          "Incomplete or unclear documents.",
          "Travel purpose that is not explained properly.",
          "Weak financial or profile presentation.",
          "Inconsistent details across forms, documents, and interview answers.",
        ],
      },
      {
        type: "paragraph",
        text: "Visa Mate focuses on practical preparation: document planning, profile review, form guidance, and interview practice. We do not guarantee outcomes, but we help you prepare with more clarity.",
      },
    ],
  },
  {
    title: "How to Organise Your Visa Documents Clearly",
    slug: "organise-visa-documents",
    excerpt:
      "A practical guide to building a simple document checklist and keeping your application files ready.",
    publishedAt: "2026-06-10",
    author: "Visa Mate",
    category: "Documents",
    keywords: ["visa documents", "document checklist", "visa file planning"],
    readTime: "5 min read",
    seoTitle: "How to Organise Visa Documents Clearly | Visa Mate",
    seoDescription:
      "Prepare your visa documents with a clear checklist and simple file organization process.",
    thumbnail: {
      url: "/images/blogs.png",
      alt: "Visa document support illustration",
    },
    body: [
      {
        type: "paragraph",
        text: "A clear document file helps you understand what is ready, what needs review, and what is still missing. It also reduces last-minute confusion before form filling or appointment dates.",
      },
      {
        type: "heading",
        text: "Build a Simple Checklist",
      },
      {
        type: "list",
        items: [
          "Keep identity, travel, financial, employment, and invitation documents separate.",
          "Use readable file names for digital copies.",
          "Check names, dates, and document validity carefully.",
          "Keep originals and copies organized before your appointment.",
        ],
      },
    ],
  },
  {
    title: "Visa Interview Tips for Clear Answers",
    slug: "visa-interview-clear-answers",
    excerpt:
      "Learn how to prepare for common questions and answer with confidence, honesty, and clarity.",
    publishedAt: "2026-06-08",
    author: "Visa Mate",
    category: "Interview Prep",
    keywords: [
      "visa interview tips",
      "interview preparation",
      "visa questions",
    ],
    readTime: "6 min read",
    seoTitle: "Visa Interview Tips for Clear Answers | Visa Mate",
    seoDescription:
      "Prepare for common visa interview questions with clear and practical answer guidance.",
    thumbnail: {
      url: "/images/blogs.png",
      alt: "Visa interview preparation illustration",
    },
    body: [
      {
        type: "paragraph",
        text: "A visa interview is not about memorizing perfect answers. It is about explaining your purpose, profile, and plans clearly and honestly.",
      },
      {
        type: "heading",
        text: "Prepare Around Your Real Profile",
      },
      {
        type: "list",
        items: [
          "Know your travel purpose clearly.",
          "Practice short, direct answers.",
          "Keep your documents and answers consistent.",
          "Avoid guessing when you do not know something.",
        ],
      },
    ],
  },
];

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
