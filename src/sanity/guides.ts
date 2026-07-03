import { fallbackGuides } from "@/data/fallback";

export type VideoGuide = {
  _id: string;
  title: string;
  description?: string;
  category: string;
  videoUrl: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
  featured: boolean;
  publishedAt: string;
};



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

async function sanityQuery<T>(query: string): Promise<T | null> {
  if (!projectId) return null;

  const url = new URL(
    `https://${projectId}.api.sanity.io/${normalizedApiVersion}/data/query/${dataset}`,
  );
  url.searchParams.set("query", query);

  const response = await fetch(url, {
    headers: readToken ? { Authorization: `Bearer ${readToken}` } : undefined,
    next: { revalidate: 60 },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { result?: T };
  return data.result ?? null;
}

const videoGuideFields = `{
  "_id": _id,
  title,
  description,
  category,
  videoUrl,
  "thumbnail": select(
    defined(thumbnail.asset) => {
      "url": thumbnail.asset->url,
      "alt": coalesce(thumbnail.alt, title)
    },
    null
  ),
  featured,
  publishedAt
}`;

export async function getVideoGuides(): Promise<VideoGuide[]> {
  const guides = await sanityQuery<VideoGuide[]>(
    `*[_type == "videoGuide"] | order(featured desc, publishedAt desc) ${videoGuideFields}`,
  );
  return guides?.length ? guides : fallbackGuides;
}

export async function getVideoCategories(): Promise<string[]> {
  const guides = await getVideoGuides();
  const cats = Array.from(new Set(guides.map((g) => g.category)));
  return ["All", ...cats];
}
