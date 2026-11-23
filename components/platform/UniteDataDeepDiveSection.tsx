"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Activity, Database, History, Check } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function UniteDataDeepDiveSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "health",
      icon: Activity,
      label: "Sync Health & Token Telemetry",
      title: "Real-time sync monitoring across all client ad accounts",
      description:
        "Cerebro audits your advertising connections continuously. When an OAuth token expires, permissions change, or platform latency spikes, background telemetry alerts your team before client reports break.",
      bullets: [
        "Instant identification of accounts requiring client re-authentication",
        "90-day sync cadence audit logs with error classification",
        "One-click sync retry triggers without technical assistance",
      ],
      image: "/product/data-health.png",
      alt: "Cerebro Data Health monitor showing account syncs and alert statuses",
    },
    {
      id: "schema",
      icon: Database,
      label: "Standardized Schema & Currency",
      title: "Harmonized metrics across Meta, Google, and TikTok",
      description:
        "Meta calls it a link click. Google calls it a click. TikTok calls it a destination click. Cerebro normalizes diverse channel definitions into a unified metric model and converts foreign currencies automatically.",
      bullets: [
        "Automatic currency conversion and daily spend reconciliation",
        "Unified attribution windows and timezone alignments",
        "Duplicate record elimination across recurring sync cycles",
      ],
      image: "/product/dashboard-executive.jpg",
      alt: "Cerebro Executive Dashboard showing cross-platform spend and normalized KPI trends",
    },
    {
      id: "backfill",
      icon: History,
      label: "Historical Backfills & Reprocessing",
      title: "Re-fetch up to 12 months of historical campaign records",
      description:
        "Never worry about lost historical data. When onboarding a new client or switching attribution models, Cerebro pulls up to 12 months of historical campaign, ad set, and creative data with full granularity.",
      bullets: [
        "Fast historical backfill without impacting daily live sync quotas",
        "Automated attribution recalculation for retrospective campaign analysis",
        "Audit-ready data logs stored in your secure dedicated repository",
      ],
      image: "/product/connections.png",
      alt: "Cerebro Connections Manager showing historical backfill and connection statuses",
    },
  ];

  const current = tabs[activeTab];

  return (
    <div className="py-20">
      <ScrollReveal direction="down" distance={20}>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Enterprise Data Governance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
            Unite all your marketing data
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Engineered for agencies managing dozens of client rosters and enterprise brands scaling omnichannel campaigns.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column: Vertical Selector Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <ScrollReveal key={tab.id} direction="left" distance={20} delay={idx * 0.1}>
                <button
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer transform hover:scale-[1.01] active:scale-[0.99] ${
                    isActive
                      ? "bg-white border-brand shadow-md ring-1 ring-brand/20"
                      : "bg-surface border-border hover:bg-white hover:border-border-hover"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-brand text-white shadow-sm" : "bg-brand-soft text-brand"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm md:text-base font-heading font-bold ${isActive ? "text-ink" : "text-slate-700"}`}>
                      {tab.label}
                    </h4>
                    <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Right Column: Dynamic Preview Screen */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right" distance={24} delay={0.2}>
            <TiltCard maxTilt={4} glare={true}>
              <div className="bg-white border border-border rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-4 mb-6">
                  <span className="text-[11px] font-semibold text-brand tracking-wider uppercase bg-brand-soft px-2.5 py-1 rounded-full">
                    {current.label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-ink">
                    {current.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed">
                    {current.description}
                  </p>
                  <ul className="space-y-2 pt-1 text-xs text-ink">
                    {current.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot Display */}
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-inner bg-slate-900 aspect-[16/10]">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    className="object-cover object-top transition-opacity duration-300"
                  />
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
