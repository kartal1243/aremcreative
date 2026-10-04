import type { MetadataRoute } from "next";
import { services, posts } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aremcreative.com";
  const staticPages = ["", "/biz-kimiz", "/hizmetler", "/blog", "/iletisim"];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/hizmetler/${s.slug}`, lastModified: new Date() })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date() })),
  ];
}
