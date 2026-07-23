import type { MetadataRoute } from "next";

const siteUrl = "https://visamate.co.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
