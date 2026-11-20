import React from "react";
import Link from "next/link";
import { LayoutDashboard, Target, FileText, ArrowRight } from "lucide-react";

export default function PowerEveryReportSection() {
  const cards = [
    {
      icon: LayoutDashboard,
      badge: "Visualization",
      title: "Cross-Channel Dashboards",
      description:
        "Visualize blended spend pacing, blended ROAS, and cross-channel CPA across Meta, Google, and TikTok on a single pane of glass.",
      link: "/platform/dashboards",
      linkLabel: "Explore Dashboards",
    },
    {
      icon: Target,
      badge: "Normalization",
      title: "Objective-Based Reporting",
      description:
        "Stop averaging lead-gen CPAs with awareness CPMs. Group campaigns by true business objective to calculate accurate conversion unit economics.",
      link: "/platform/objective-reporting",
      linkLabel: "Explore Objective Engine",
    },
    {
      icon: FileText,
      badge: "Distribution",
      title: "Automated Client Reports",
      description:
        "Generate recurring PDF summaries and sync normalized tables directly into Google Looker Studio or Google Sheets without touching CSVs.",
      link: "/platform/reports",
      linkLabel: "Explore Automated Reports",
    },
  ];

  return (
    <div className="py-20 text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
          Downstream Synergy
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
          Connect once. Power every report.
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Ingestion is only the beginning. Normalized records instantly populate your analytics suite, eliminating redundant data modeling and manual exports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto text-left">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="bg-white border border-border hover:border-brand/40 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-brand uppercase tracking-wider bg-surface-2 px-2.5 py-1 rounded-full border border-border">
                    {c.badge}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-ink mb-3 group-hover:text-brand transition-colors">
                  {c.title}
                </h3>
                <p className="text-small text-muted leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  href={c.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover group-hover:translate-x-1 transition-transform"
                >
                  {c.linkLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
