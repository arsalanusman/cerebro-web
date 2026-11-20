import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function UnifiedDataResourcesSection() {
  const articles = [
    {
      category: "Analytics Guide",
      title: "Blended ROAS vs Platform ROAS: Why Single-Channel Metrics Mislead Marketers",
      description:
        "Learn why evaluating ad networks in silos creates attribution illusions, and how blended ROAS provides an objective baseline.",
      image: "/product/chart-spend-by-product.png",
      link: "/blog/blended-roas-vs-platform-roas",
      readTime: "5 min read",
    },
    {
      category: "Agency Operations",
      title: "Understanding Objective-Based Ad Reporting for Multi-Client Rosters",
      description:
        "How grouping campaigns by business goal (Awareness vs Leads vs Sales) unlocks accurate conversion unit economics.",
      image: "/product/cerebro-objective-filter.png",
      link: "/blog/understanding-objective-based-ad-reporting",
      readTime: "7 min read",
    },
    {
      category: "Data Engineering",
      title: "Data Health Monitoring: Eliminating Token Expirations and API Sync Drift",
      description:
        "A technical deep dive into Cerebro proactive OAuth telemetry, webhook failovers, and multi-currency normalization.",
      image: "/product/data-health.png",
      link: "/docs/native-connectors",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
          Knowledge & Insights
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
          How growing companies transform with unified data
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Best practices, technical architectural guides, and proven agency playbooks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((art) => (
          <Link
            key={art.title}
            href={art.link}
            className="group bg-white border border-border hover:border-brand/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] bg-surface-2 overflow-hidden border-b border-border">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-muted mb-2.5">
                  <span className="font-semibold text-brand uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-ink text-base md:text-lg group-hover:text-brand transition-colors line-clamp-2 mb-2">
                  {art.title}
                </h3>
                <p className="text-small text-muted line-clamp-2 leading-relaxed">
                  {art.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand group-hover:translate-x-1 transition-transform">
                Read guide
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
