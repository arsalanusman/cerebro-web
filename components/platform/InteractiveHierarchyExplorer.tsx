"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TrendingUp, BarChart2, LineChart, LayoutDashboard, Sparkles } from "lucide-react";

interface ViewTab {
  id: string;
  label: string;
  metric: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
  badges: string[];
}

const VIEWS: ViewTab[] = [
  {
    id: "campaigns",
    label: "Campaign Breakdown",
    metric: "PKR 6.4M",
    icon: LineChart,
    title: "Top campaigns over time with multi-line tracking",
    description:
      "Inspect individual campaign trajectories side by side. Compare pacing across Always-On, Festive promotions, Retargeting, and Launch flights across Meta, Google, and TikTok.",
    image: "/product/chart-top-campaigns.jpg",
    alt: "Top campaigns over time multi-colored line chart widget",
    badges: ["Home Broadband (Always On)", "Prepaid Bundles (Retargeting)", "Mobile App (Launch)"],
  },
  {
    id: "performance",
    label: "Performance Trends",
    metric: "PKR 7.4M",
    icon: TrendingUp,
    title: "Spend vs. previous 30-day baseline comparison",
    description:
      "Monitor daily spend consistency against previous periods. Detect unusual spending spikes or drops early with dotted baseline overlays and daily variance indicators.",
    image: "/product/chart-performance-trends.png",
    alt: "Performance trends spend trend chart widget vs previous 30 days",
    badges: ["Current 30 days vs Previous", "Daily Spend Pacing", "Automated Outlier Detection"],
  },
  {
    id: "products",
    label: "Spend by Product",
    metric: "3 Lines",
    icon: BarChart2,
    title: "Product allocation and departmental budget division",
    description:
      "Group multi-channel marketing investments by commercial product line. See exactly how much budget is directed toward Home Broadband, Mobile Apps, and Prepaid Services.",
    image: "/product/chart-spend-by-product.png",
    alt: "Spend by product bar chart widget showing budget distribution",
    badges: ["Home Broadband · PKR 4.8M", "Mobile App · PKR 1.5M", "Prepaid Bundles · PKR 1.1M"],
  },
  {
    id: "executive",
    label: "Executive Overview",
    metric: "Blended",
    icon: LayoutDashboard,
    title: "Unified cross-platform executive cockpit",
    description:
      "Gain full operational visibility with high-level KPI cards for Spend, Impressions, Clicks, CPM, CPC, Conversions, and Cost Per Result alongside channel mix distributions.",
    image: "/product/dashboard-executive.jpg",
    alt: "Executive Overview dashboard showing cross-channel portfolio summary",
    badges: ["Blended CPM PKR 153.36", "Avg. CPA PKR 452.1", "TikTok 40% · Meta 41% · Google 12%"],
  },
];

export default function InteractiveHierarchyExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeView = VIEWS[activeIdx];
  const Icon = activeView.icon;

  return (
    <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Top Controls / Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#E5E7EB]">
        {VIEWS.map((v, idx) => {
          const isSelected = idx === activeIdx;
          const TabIcon = v.icon;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#4F46E5] text-white shadow-sm shadow-[#4F46E5]/20"
                  : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F3F4F6] hover:text-[#111827]"
              }`}
            >
              <TabIcon className="w-4 h-4 shrink-0" />
              <span>{v.label}</span>
              <span
                className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                }`}
              >
                {v.metric}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Details Left, Chart Widget Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Metadata & Explanations */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-xs font-semibold w-fit mb-3">
            <Icon className="w-3.5 h-3.5" />
            <span>Hierarchy View · {activeView.label}</span>
          </div>

          <h4 className="font-heading font-semibold text-xl sm:text-2xl text-[#111827] leading-snug">
            {activeView.title}
          </h4>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {activeView.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeView.badges.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-medium text-[#374151]"
              >
                <Sparkles className="w-3 h-3 text-[#4F46E5]" />
                {b}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs text-[#6B7280]">
              Authentic Cerebro chart widget screenshot
            </span>
          </div>
        </div>

        {/* Right: Chart Screenshot */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full rounded-xl border border-[#E5E7EB] bg-white shadow-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
              <span className="font-semibold text-[#111827] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Cerebro Live Chart Widget
              </span>
              <span className="font-mono text-[11px] text-[#9CA3AF]">{activeView.id}-view</span>
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-[#FAFBFD] overflow-hidden flex items-center justify-center p-2">
              <Image
                src={activeView.image}
                alt={activeView.alt}
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
