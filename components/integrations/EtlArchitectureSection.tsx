"use client";

import React, { useState } from "react";
import Image from "next/image";

interface EtlStage {
  id: string;
  stepNumber: string;
  name: string;
  badge: string;
  summary: string;
  details: string[];
  metricsPill: string;
}

const ETL_STAGES: EtlStage[] = [
  {
    id: "extract",
    stepNumber: "01",
    name: "Automated Ingestion",
    badge: "Direct APIs & Webhooks",
    summary:
      "Rate-limited, automated extraction connecting to Meta Graph API, Google Ads API, TikTok Marketing API, DV360, and custom cloud endpoints on daily schedules or on-demand triggers.",
    details: [
      "OAuth 2.0 multi-account token vault with automated silent refreshes",
      "Self-healing delta syncs with exponential backoff on platform rate limits",
      "Direct support for Google Sheets, CSV exports, and custom REST webhooks",
    ],
    metricsPill: "4 Live Connectors - 17 Active Ad Accounts",
  },
  {
    id: "transform",
    stepNumber: "02",
    name: "AI Normalization & Cleansing",
    badge: "Deterministic AI Engine",
    summary:
      "Cleanses messy multi-channel data into a single coherent schema. Reconciles divergent platform conversion counting, strips duplicate events, and converts multi-currency spend.",
    details: [
      "Standardizes Clicks, Views, and Conversions across disparate platform definitions",
      "Exchange rate engine converts foreign ad spend (USD, EUR, AED) to PKR daily",
      "Objective taxonomy: maps platform-specific goal names into standardized marketing intent",
    ],
    metricsPill: "100% Schema Mapped - Zero Currency Gaps",
  },
  {
    id: "warehouse",
    stepNumber: "03",
    name: "Unified Lakehouse Layer",
    badge: "SOC-2 Ready Audit Store",
    summary:
      "Every raw payload and transformed row is stored with full audit provenance. Immutable historical snapshots guarantee that reported numbers match platform billing statements exactly.",
    details: [
      "Multi-tenant agency isolation partitions client data securely",
      "Strict role-based access controls for internal analysts and external client viewers",
      "Automated anomaly checks alert team to missing dates, sudden spend spikes, or nulls",
    ],
    metricsPill: "PKR 7.4M Reconciled - 0 Sync Errors",
  },
  {
    id: "serve",
    stepNumber: "04",
    name: "Real-Time Serving & AI",
    badge: "Sub-Second Querying",
    summary:
      "Powers all Cerebro analytics interfaces instantly without slow database queries or complicated BI tool exports. Direct semantic engine feeds Ask Cerebro AI answers.",
    details: [
      "Powers Executive Dashboards with blended ROAS and multi-platform spend mix",
      "Enables multi-dimensional pivots in Report Builder with custom metric expressions",
      "Feeds Ask Cerebro conversational AI with verified tabular audit proofs",
    ],
    metricsPill: "Sub-Second Latency - 50+ Saved Reports",
  },
];

const DATA_SOURCES = [
  { name: "Meta Ads", logo: "/brand/platforms/meta.png", status: "Healthy", type: "Native API" },
  { name: "Google Ads", logo: "/brand/platforms/google.png", status: "Healthy", type: "Native API" },
  { name: "TikTok Ads", logo: "/brand/platforms/tiktok.png", status: "Healthy", type: "Native API" },
  { name: "DV360", logo: "/brand/platforms/dv360.png", status: "Sync Ready", type: "Enterprise API" },
  { name: "LinkedIn Ads", logo: "/brand/platforms/linkedin.png", status: "Coming Soon", type: "Custom API" },
  { name: "Sheets & CSV", mark: "XLS", status: "Live", type: "AI Auto-Mapped" },
];

export default function EtlArchitectureSection() {
  const [activeStage, setActiveStage] = useState<string>("transform");

  const currentStage = ETL_STAGES.find((s) => s.id === activeStage) || ETL_STAGES[1];

  return (
    <section id="etl-architecture" className="py-20 md:py-28 bg-[#090A15] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(0,112,194,0.18)_0,rgba(168,85,247,0.08)_35%,rgba(9,10,21,0)_70%)]"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 box-border">
        {/* Section Header */}
        <div className="max-w-[780px]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-[#8EC5F0] text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            ENTERPRISE PIPELINE ARCHITECTURE
          </span>
          <h2 className="mt-4 m-0 font-heading font-semibold text-[30px] sm:text-[40px] md:text-[50px] leading-[1.08] tracking-[-0.03em] text-white">
            How Cerebro transforms raw ad APIs into an auditable single source of truth.
          </h2>
          <p className="mt-4 m-0 text-base sm:text-lg text-[#C9DDF2] leading-[1.6]">
            Every click, impression, conversion, and rupee spent is ingested, normalized, currency-converted, and checked before entering your dashboards and AI answers.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div
          role="tablist"
          aria-label="ETL Pipeline Stages"
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/[0.04] p-2 rounded-2xl border border-white/[0.08]"
        >
          {ETL_STAGES.map((stg) => {
            const isSelected = stg.id === activeStage;
            return (
              <button
                key={stg.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveStage(stg.id)}
                className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[96px] ${
                  isSelected
                    ? "bg-[#1E1B4B] border-[#818CF8] shadow-[0_0_24px_rgba(129,140,248,0.2)]"
                    : "bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected ? "bg-[#0070C2] text-white" : "bg-white/[0.08] text-[#9CA3AF]"
                    }`}
                  >
                    {stg.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-[#8EC5F0] hidden sm:inline">
                    {stg.badge}
                  </span>
                </div>
                <span
                  className={`mt-2 font-heading text-[14.5px] sm:text-[15.5px] font-semibold leading-tight ${
                    isSelected ? "text-white" : "text-[#D1D5DB]"
                  }`}
                >
                  {stg.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Pipeline Container */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Visual Data Flow Nodes (7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8EC5F0]">
                  Visual Architecture Flow
                </span>
                <span className="text-xs font-medium text-[#10B981] bg-[#064E3B] px-2.5 py-0.5 rounded-full border border-[#059669]">
                  Live Telemetry
                </span>
              </div>

              {/* Step Flow Nodes */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Ingestion Sources Card */}
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 flex flex-col gap-3">
                  <div className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">
                    1. Data Sources
                  </div>
                  <div className="flex flex-col gap-2">
                    {DATA_SOURCES.slice(0, 4).map((src) => (
                      <div
                        key={src.name}
                        className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/[0.06]"
                      >
                        {src.logo ? (
                          <div className="w-5 h-5 rounded bg-white flex items-center justify-center p-0.5 shrink-0">
                            <Image
                              src={src.logo}
                              alt={src.name}
                              width={14}
                              height={14}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <span className="w-5 h-5 rounded bg-[#0070C2] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                            {src.mark}
                          </span>
                        )}
                        <span className="text-xs font-medium text-[#F3F4F6] truncate flex-1">
                          {src.name}
                        </span>
                        <span className="text-[10px] text-[#10B981] font-mono">OK</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Cerebro Processing Core Card */}
                <div className="bg-[#022771] border border-[#818CF8]/40 rounded-xl p-4 flex flex-col gap-3 shadow-[0_0_20px_rgba(0,112,194,0.15)] relative">
                  <div className="text-xs font-semibold text-[#8EC5F0] uppercase tracking-wide flex items-center justify-between">
                    <span>2. Cerebro Engine</span>
                    <span className="w-2 h-2 rounded-full bg-[#818CF8] animate-ping" />
                  </div>
                  <div className="flex flex-col gap-2 text-[11.5px]">
                    <div className="bg-white/[0.08] rounded-lg p-2 border border-white/[0.1] text-[#E0E7FF]">
                      <span className="text-[10px] text-[#8EC5F0] block font-mono">DEDUPLICATION</span>
                      Unified click &amp; impression metrics
                    </div>
                    <div className="bg-white/[0.08] rounded-lg p-2 border border-white/[0.1] text-[#E0E7FF]">
                      <span className="text-[10px] text-[#8EC5F0] block font-mono">CURRENCY FX</span>
                      USD/AED auto-converted to PKR
                    </div>
                    <div className="bg-white/[0.08] rounded-lg p-2 border border-white/[0.1] text-[#E0E7FF]">
                      <span className="text-[10px] text-[#8EC5F0] block font-mono">OBJECTIVE MODEL</span>
                      Traffic, Leads, App, Video
                    </div>
                  </div>
                </div>

                {/* 3. Output Destinations Card */}
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 flex flex-col gap-3">
                  <div className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">
                    3. Serving Layer
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-white/[0.04] rounded-lg p-2 border border-white/[0.06] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-xs font-medium text-[#F3F4F6]">Ask Cerebro AI</span>
                    </div>
                    <div className="bg-white/[0.04] rounded-lg p-2 border border-white/[0.06] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-xs font-medium text-[#F3F4F6]">Executive Dashboard</span>
                    </div>
                    <div className="bg-white/[0.04] rounded-lg p-2 border border-white/[0.06] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-xs font-medium text-[#F3F4F6]">Report Builder</span>
                    </div>
                    <div className="bg-white/[0.04] rounded-lg p-2 border border-white/[0.06] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-xs font-medium text-[#F3F4F6]">Client Portals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9CA3AF] flex-wrap gap-2">
              <span className="font-mono">Pipeline Status: All systems operational</span>
              <span className="text-[#8EC5F0] font-semibold">{currentStage.metricsPill}</span>
            </div>
          </div>

          {/* Right Column: Stage Deep Dive Inspector (5 cols) */}
          <div className="lg:col-span-5 bg-[#000000] border border-[#022771] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="font-mono text-xs text-[#818CF8] bg-[#1E1B4B] px-2.5 py-1 rounded-md border border-[#005DA3]">
                  STAGE {currentStage.stepNumber} INSPECTOR
                </span>
                <span className="text-xs font-semibold text-[#C9DDF2]">
                  {currentStage.badge}
                </span>
              </div>

              <h3 className="mt-4 m-0 font-heading text-[22px] sm:text-[24px] font-semibold text-white leading-tight">
                {currentStage.name}
              </h3>

              <p className="mt-3 m-0 text-sm sm:text-[15px] leading-[1.6] text-[#C9DDF2]">
                {currentStage.summary}
              </p>

              {/* Technical Transformation Details */}
              <div className="mt-6 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8EC5F0] block">
                  Stage Engineering Highlights
                </span>
                <ul className="m-0 p-0 list-none space-y-2.5">
                  {currentStage.details.map((dtl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-[#D1D5DB]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{dtl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-5 border-t border-white/[0.08]">
              <a
                href="/demo"
                className="inline-flex items-center justify-center w-full min-h-[46px] rounded-xl bg-[#0070C2] hover:bg-[#005DA3] text-white text-sm font-semibold transition-colors no-underline shadow-md"
              >
                Inspect your data pipeline in a live demo &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
