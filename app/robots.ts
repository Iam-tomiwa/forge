import type { MetadataRoute } from "next";
import { absoluteUrl, HAS_SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // The sitemap needs an absolute URL, so it is only advertised once the origin is configured.
    ...(HAS_SITE_URL ? { sitemap: absoluteUrl("/sitemap.xml"), host: absoluteUrl("/") } : {}),
  };
}
