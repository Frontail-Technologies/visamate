import { headers } from "next/headers";
import { notFound } from "next/navigation";

import Studio from "./Studio";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Visa Mate Content Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export { viewport } from "next-sanity/studio";

export default async function StudioPage() {
  const studioHost = process.env.STUDIO_HOST;
  const requestHeaders = await headers();
  const host = requestHeaders.get("host")?.split(":")[0];

  if (!studioHost || host !== studioHost) {
    notFound();
  }

  return <Studio />;
}
