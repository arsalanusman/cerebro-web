"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Database, Sparkles, LayoutDashboard, FileText, Shield, Check, X } from "lucide-react";

interface TabItem {
  title: string;
  desc: string;
}

interface FeatureTab {
  id: string;
  label: string;
  color: string;
  icon: React.ElementType;
  heading: string;
  subtext: string;
  items: TabItem[];
}

const FEATURE_TABS: FeatureTab[] = [
  {
    id: "pipeline",
    label: "Data Pipeline",
    color: "#4F46E5",
    icon: Database,
    heading: "Production-grade data infrastructure without the infrastructure overhead",
    subtext:
      "A resilient ingestion layer that pulls raw campaign events from every connected ad platform, normalizes them into a unified schema, and keeps them consistently updated.",
    items: [
      {
        title: "Automated sync cadence",
        desc: "Raw events pulled from connected platforms automatically on a daily schedule, with on-demand refresh triggers.",
      },
      {
        title: "Multi-month historical backfill",
        desc: "Pull historical data on first connect so your trends, seasonalities, and benchmarks are ready immediately.",
      },
      {
        title: "Dynamic schema adaptation",
        desc: "When platforms add or rename telemetry fields, Cerebro normalizes without breaking existing dashboards.",
      },
      {
        title: "Deduplication & currency normalization",
        desc: "Conversion events and multi-currency spends are normalized into a single corporate currency standard.",
      },
      {
        title: "Automated retry logic",
        desc: "Failed platform syncs self-heal through exponential backoff retry routines with proactive admin alerts.",
      },
      {
        title: "Raw & normalized data access",
        desc: "Normalized advertising data is exportable to clean CSV/Excel formats or warehouse sync endpoints.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Analyst",
    color: "#7C3AED",
    icon: Sparkles,
    heading: "An embedded AI analyst that monitors multi-channel metrics 24/7",
    subtext:
      "Ask Cerebro operates directly on your consolidated advertising tables, computing precise numerical answers with transparent calculation steps.",
    items: [
      {
        title: "Metric anomaly detection",
        desc: "Identify budget bleeds, CTR drops, and sudden CPA spikes before they inflate your monthly spend.",
      },
      {
        title: "Root cause tracing",
        desc: "When a metric moves, investigate whether it was driven by audience fatigue, bid shifts, or creative saturation.",
      },
      {
        title: "Deterministic plain-language Q&A",
        desc: "Ask questions in natural language and receive audited numerical answers backed by raw tabular data.",
      },
      {
        title: "Multi-source synthesis",
        desc: "Cross-examine Meta, Google, and TikTok performance in one query without comparing separate exports.",
      },
      {
        title: "Scheduled performance digests",
        desc: "Receive automated weekly summaries detailing top-performing creatives and channel efficiency gains.",
      },
      {
        title: "Context-aware drill-downs",
        desc: "Seamlessly pivot from high-level portfolio answers to ad set and ad creative breakdowns.",
      },
    ],
  },
  {
    id: "dashboards",
    label: "Dashboards",
    color: "#0284C7",
    icon: LayoutDashboard,
    heading: "From executive portfolio totals down to individual creative assets",
    subtext:
      "Navigate all four levels of your advertising hierarchy: Platform, Campaign, Ad Set, and Ad, without switching tabs.",
    items: [
      {
        title: "Unified executive overview",
        desc: "High-level portfolio cards comparing spend pacing, blended CPA, CTR, and conversion volume.",
      },
      {
        title: "Granular hierarchy drill-down",
        desc: "Drill directly from cross-channel totals into individual ad sets and creatives with one click.",
      },
      {
        title: "Objective-based segmentation",
        desc: "Filter campaigns strictly by Awareness, Consideration, or Conversion goals to preserve fair metric judgment.",
      },
      {
        title: "Channel performance comparison",
        desc: "Compare Meta, Google, and TikTok side-by-side using standardized metric definitions.",
      },
      {
        title: "Time-window pacing",
        desc: "Analyze trends against previous 7, 30, and 90-day intervals with automated percentage changes.",
      },
      {
        title: "Interactive table filters",
        desc: "Sort by any column, filter by campaign objective, and search campaign names instantly.",
      },
    ],
  },
  {
    id: "reporting",
    label: "Reports & Builder",
    color: "#059669",
    icon: FileText,
    heading: "Branded client reports built once and delivered automatically",
    subtext:
      "Assemble bespoke reporting templates with modular widgets, custom formulas, and scheduled client delivery.",
    items: [
      {
        title: "Drag-and-drop report builder",
        desc: "Combine charts, data tables, and narrative summaries into presentation-ready reports.",
      },
      {
        title: "White-label client branding",
        desc: "Apply your agency branding, client color palettes, and custom commentary headers.",
      },
      {
        title: "Automated recurring schedules",
        desc: "Deliver weekly or monthly reports to stakeholders via email as PDF attachments.",
      },
      {
        title: "Custom calculated metrics",
        desc: "Create custom formulas like Blended ROAS or client-specific cost-per-action benchmarks.",
      },
      {
        title: "Interactive client links",
        desc: "Provide clients with read-only interactive dashboard links restricted strictly to their accounts.",
      },
      {
        title: "One-click CSV & PDF export",
        desc: "Download complete report snapshots in clean tabular or printable PDF format at any time.",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Access",
    color: "#0F172A",
    icon: Shield,
    heading: "Enterprise governance, encrypted storage, and client isolation",
    subtext:
      "Built from day one with zero-trust principles to keep client advertising telemetry strictly segregated and confidential.",
    items: [
      {
        title: "Read-only OAuth integration",
        desc: "Scoped API credentials that can only read metrics: Cerebro cannot modify or create active ad spend.",
      },
      {
        title: "AES-256 encryption at rest",
        desc: "All stored database records and credentials encrypted with AES-256 and transmitted over TLS 1.3.",
      },
      {
        title: "Role-based client partitions",
        desc: "Strict logical separation ensuring client viewers only ever access their designated brand datasets.",
      },
      {
        title: "Immutable activity audit trails",
        desc: "Track every login, export, and configuration change with full timestamped audit logs.",
      },
      {
        title: "Zero AI model training on private data",
        desc: "Your proprietary campaign data is never utilized to train general public artificial intelligence models.",
      },
      {
        title: "GDPR & data deletion workflows",
        desc: "Full automated data purge protocols upon account offboarding or compliance deletion requests.",
      },
    ],
  },
];

export default function FeaturesInteractive() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = FEATURE_TABS[activeTabIdx];

  const comparisonRows = [
    { cap: "Cross-platform unified view", manual: false, cerebro: true },
    { cap: "Objective-based campaign evaluation", manual: false, cerebro: true },
    { cap: "AI natural language query engine", manual: false, cerebro: true },
    { cap: "Automated client report scheduling", manual: false, cerebro: true },
    { cap: "Multi-client workspace partitioning", manual: false, cerebro: true },
    { cap: "Historical multi-month backfill", manual: "Manual exports", cerebro: true },
    { cap: "Automated currency & schema normalization", manual: false, cerebro: true },
    { cap: "API data export & CSV downloading", manual: "Manual CSV only", cerebro: true },
  ];

  return (
    <div>
      {/* Interactive Tabs Showcase */}
      <section className="py-20 md:py-24 bg-[#0F1424] text-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#A5B4FC]">
              DEEP DIVE
            </span>
            <h2 className="mt-4 font-heading font-semibold text-[32px] sm:text-[42px] leading-tight text-white">
              Every capability your performance team needs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
              Explore the core architectural pillars powering Cerebro dNano.
            </p>
          </div>

          {/* Tab Selector Bar */}
          <div className="flex gap-2 overflow-x-auto pb-4 justify-start sm:justify-center border-b border-white/10 mb-12">
            {FEATURE_TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabIdx(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-[#101426] shadow-md"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-[#4F46E5]" : ""} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center sm:text-left">
              <h3 className="font-heading font-semibold text-[24px] sm:text-[28px] text-white leading-snug">
                {activeTab.heading}
              </h3>
              <p className="mt-3 text-base text-[#94A3B8] leading-relaxed">
                {activeTab.subtext}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTab.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#182035] border border-white/10 rounded-2xl p-5 hover:border-[#4F46E5] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: activeTab.color }}
                    />
                    <h4 className="font-heading text-[15px] font-semibold text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="m-0 text-[13.5px] leading-[1.6] text-[#94A3B8]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Cerebro vs Manual Spreadsheet Stack */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1020px] mx-auto px-6 md:px-10 box-border">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="m-0 mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
              BENCHMARK
            </p>
            <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[36px] text-[#101426] leading-tight">
              Cerebro dNano vs. The Spreadsheet Stack
            </h2>
            <p className="mt-3 m-0 text-base text-[#5B6170]">
              See why high-growth agencies replace manual exports with automated intelligence.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E4E7EC] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E4E7EC] text-xs font-semibold uppercase tracking-wider text-[#6B7180]">
                    <th className="py-4 px-6">Capability</th>
                    <th className="py-4 px-6 text-center">Manual Spreadsheet Stack</th>
                    <th className="py-4 px-6 text-center text-[#4F46E5] bg-[#EEF2FF]">
                      Cerebro dNano
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF0F3] text-sm text-[#2B3040]">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#F8FAFC] transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-[#101426]">
                        {row.cap}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.manual === false ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FEE2E2] text-[#DC2626]">
                            <X size={14} />
                          </span>
                        ) : (
                          <span className="text-xs text-[#D97706] font-medium">
                            {row.manual}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center bg-[#EEF2FF]/40">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DCFCE7] text-[#16A34A]">
                          <Check size={14} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm transition-all shadow-md hover:scale-105"
            >
              Book a live product tour &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
