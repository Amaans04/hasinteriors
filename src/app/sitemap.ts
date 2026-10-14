import type { MetadataRoute } from "next";

import { areas } from "@/lib/areas";
import { constructionAreas } from "@/lib/construction";
import { newHomes } from "@/lib/newHomes";
import { SITE_URL, footerLinks } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    ...footerLinks.map((l) => l.href),
    ...areas.map((a) => `/bangalore/${a.slug}`),
    ...constructionAreas.map((a) => `/construction/${a.slug}`),
    ...newHomes.filter((h) => h.page).map((h) => `/new-homes/${h.slug}`),
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === "/" ? 1 : /^\/(bangalore|construction|new-homes)/.test(route) ? 0.9 : 0.7,
  }));
}
