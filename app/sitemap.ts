import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const CONTENT_UPDATED_DATE = new Date("2026-11-19T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Core
    "",
    "/pricing",
    "/demo",
    "/contact",
    "/about",
    "/security",
    "/integrations",
    "/features",
    "/faq",
    // Platform
    "/platform/data-integration",
    "/platform/objective-reporting",
    "/platform/dashboards",
    "/platform/reports",
    "/ask-cerebro",
    // Solutions
    "/solutions/agencies",
    "/solutions/brands",
    "/industries/banking-and-finance",
    "/industries/telecom",
    "/industries/fmcg",
    "/industries/ecommerce",
    // Resources
    "/blog",
    "/docs",
    // Legal
    "/privacy-policy",
    "/terms-of-service",
    "/data-deletion",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: CONTENT_UPDATED_DATE,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/platform") ? 0.8 : 0.6,
  }));
}
