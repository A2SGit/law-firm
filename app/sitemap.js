import { practiceAreas } from "@/lib/practice-areas-data";
import { attorneys } from "@/lib/attorneys-data";

const BASE = "https://hanumantarao.in";

export default function sitemap() {
  const staticRoutes = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/practice-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/attorneys`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];

  const practiceAreaRoutes = practiceAreas.map((pa) => ({
    url: `${BASE}/practice-areas/${pa.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const attorneyRoutes = attorneys.map((a) => ({
    url: `${BASE}/attorneys/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...attorneyRoutes];
}
