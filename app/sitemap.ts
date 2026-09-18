import type { MetadataRoute } from "next";
import { absoluteUrl, HAS_SITE_URL } from "@/lib/site";
import { REGISTRY_FAMILIES, registryPath } from "@/lib/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!HAS_SITE_URL) {
    console.warn("[forge] No site origin resolved — set NEXT_PUBLIC_SITE_URL to emit canonical URLs and a sitemap.");
    return [];
  }
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    // The registry items are real, linkable resources other projects install from.
    ...REGISTRY_FAMILIES.map((family) => ({
      url: absoluteUrl(registryPath(family)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
