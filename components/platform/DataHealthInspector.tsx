"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Activity, Radio, Database, AlertCircle, CheckCircle2 } from "lucide-react";

interface HealthTab {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
  bullets: string[];
}

const HEALTH_TABS: HealthTab[] = [
  {
    id: "health",
    name: "Data Health & Sync Activity",
    badge: "Active Monitor",
    icon: Activity,
    title: "Proactive sync health monitoring and incident detection",
    description:
      "Cerebro audits every connected account continuously. When an advertising API token expires, a platform updates permissions, or sync latency increases, you get immediate root-cause diagnostics.",
    image: "/product/data-health.png",
    alt: "Data Health and Sync Activity dashboard showing account status and sync runs",
    bullets: [
      "Real-time identification of accounts requiring attention (e.g. DV360 access loss)",
      "Sync cadence history across the last 90 days with failure logs",
      "One-click sync retry triggers without technical intervention",
    ],
  },
  {
    id: "connections",
    name: "Live Platform Connections",
    badge: "OAuth Read-Only",
    icon: Radio,
    title: "Direct API authentication across advertising channels",
    description:
      "Connect Meta Ads, Google Ads, TikTok Ads, and DV360 through official OAuth flows. Scoped read-only access guarantees your live ad campaigns cannot be modified or paused.",
    image: "/product/connections.png",
    alt: "Connections manager showing healthy Meta, Google Ads, TikTok, and DV360 accounts",
    bullets: [
      "Scoped read-only OAuth tokens protecting active campaigns",
      "Instant multi-account connection for large agency client rosters",
      "Continuous token refresh routines preventing reporting interruptions",
    ],
  },
  {
    id: "normalized",
    name: "Unified Schema & Currency",
    badge: "Consolidated",
    icon: Database,
    title: "Standardized cross-channel reporting layer",
    description:
      "Mismatched platform metrics (clicks vs link clicks, varying attribution windows, multiple currencies) are normalized into a unified corporate model before loading into dashboards.",
    image: "/product/dashboard-executive.jpg",
    alt: "Executive dashboard displaying normalized cross-platform metrics",
    bullets: [
      "Automatic multi-currency conversion to your standard corporate reporting currency",
      "Unified metric semantics across Meta, Google, TikTok, and DV360",
      "Audit-proof raw data access for finance and leadership review",
    ],
  },
];

export default function DataHealthInspector() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTab = HEALTH_TABS[activeIdx];
  const Icon = activeTab.icon;

  return (
    <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#E5E7EB]">
        {HEALTH_TABS.map((tab, idx) => {
          const isSelected = idx === activeIdx;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0070C2] text-white shadow-sm shadow-[#0070C2]/20"
                  : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F3F4F6] hover:text-[#111827]"
              }`}
            >
              <TabIcon className="w-4 h-4 shrink-0" />
              <span>{tab.name}</span>
              <span
                className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Info */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#0070C2] text-xs font-semibold w-fit mb-3">
            <Icon className="w-3.5 h-3.5" />
            <span>Infrastructure · {activeTab.badge}</span>
          </div>

          <h4 className="font-heading font-semibold text-xl sm:text-2xl text-[#111827] leading-snug">
            {activeTab.title}
          </h4>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {activeTab.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {activeTab.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 text-xs text-[#6B7280]">
            <AlertCircle className="w-3.5 h-3.5 text-[#0070C2]" />
            <span>Authentic Cerebro Data Health and Connection Manager telemetry</span>
          </div>
        </div>

        {/* Right: Authentic Screenshot */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full rounded-xl border border-[#E5E7EB] bg-white shadow-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
              <span className="font-semibold text-[#111827] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Cerebro Pipeline Telemetry
              </span>
              <span className="font-mono text-[11px] text-[#9CA3AF]">{activeTab.id}-screen</span>
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-[#FAFBFD] overflow-hidden flex items-center justify-center p-2">
              <Image
                src={activeTab.image}
                alt={activeTab.alt}
                width={1024}
                height={580}
                className="w-full h-full object-contain rounded-lg"
                priority={activeIdx === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
