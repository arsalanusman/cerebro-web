"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Target, BarChart2, TrendingUp, CheckCircle2 } from "lucide-react";

interface ObjectiveTab {
  id: string;
  name: string;
  focus: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
  metrics: { label: string; value: string; note: string }[];
}

const OBJECTIVES: ObjectiveTab[] = [
  {
    id: "spend-product",
    name: "Product Investment",
    focus: "Portfolio Allocation",
    icon: BarChart2,
    title: "Spend breakdown across commercial product lines",
    description:
      "When comparing campaigns with distinct objectives, Cerebro isolates budgets by product line so conversion spend isn't diluted by upper-funnel reach initiatives.",
    image: "/product/chart-spend-by-product.png",
    alt: "Spend by product chart comparing allocation across product lines",
    metrics: [
      { label: "Home Broadband", value: "PKR 4.8M", note: "Primary product focus" },
      { label: "Mobile App", value: "PKR 1.5M", note: "App install objective" },
      { label: "Prepaid Bundles", value: "PKR 1.1M", note: "Conversion & retention" },
    ],
  },
  {
    id: "campaign-goals",
    name: "Campaign Benchmarks",
    focus: "Goal-Oriented Trends",
    icon: Target,
    title: "Normalized campaign efficiency lines",
    description:
      "Track multi-channel flights side by side without averaging mismatched goals. Awareness flights are tracked on CPM while sales flights are tracked on true CPA.",
    image: "/product/chart-top-campaigns.jpg",
    alt: "Top campaigns over time tracking performance lines by flight",
    metrics: [
      { label: "Always On", value: "PKR 6.4M Total", note: "Continuous baseline reach" },
      { label: "Festive Flights", value: "High CTR", note: "Seasonal consideration" },
      { label: "Retargeting", value: "Optimized CPA", note: "Bottom-funnel conversion" },
    ],
  },
  {
    id: "spend-trends",
    name: "Pacing & Stability",
    focus: "Variance Control",
    icon: TrendingUp,
    title: "Daily spend pacing and objective stability",
    description:
      "Compare current 30-day spend pacing against previous period baselines. Spot under-delivering campaigns before monthly flight budgets are compromised.",
    image: "/product/chart-performance-trends.png",
    alt: "Performance trends showing daily spend vs previous baseline",
    metrics: [
      { label: "Current Spend", value: "PKR 7.4M", note: "Active 30 days" },
      { label: "Variance", value: "-0.94%", note: "Stable pacing vs baseline" },
      { label: "Daily Avg", value: "PKR 246K", note: "Consistent delivery" },
    ],
  },
];

export default function ObjectiveBenchmarkExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeObj = OBJECTIVES[activeIdx];
  const Icon = activeObj.icon;

  return (
    <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Top Objective Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#E5E7EB]">
        {OBJECTIVES.map((obj, idx) => {
          const isSelected = idx === activeIdx;
          const TabIcon = obj.icon;
          return (
            <button
              key={obj.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0070C2] text-white shadow-sm shadow-[#0070C2]/20"
                  : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F3F4F6] hover:text-[#111827]"
              }`}
            >
              <TabIcon className="w-4 h-4 shrink-0" />
              <span>{obj.name}</span>
              <span
                className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                }`}
              >
                {obj.focus}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Explanations & Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#0070C2] text-xs font-semibold w-fit mb-3">
            <Icon className="w-3.5 h-3.5" />
            <span>Benchmark · {activeObj.name}</span>
          </div>

          <h4 className="font-heading font-semibold text-xl sm:text-2xl text-[#111827] leading-snug">
            {activeObj.title}
          </h4>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {activeObj.description}
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {activeObj.metrics.map((m, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-lg p-2.5 text-left">
                <div className="text-[11px] font-medium text-[#6B7280]">{m.label}</div>
                <div className="text-sm font-semibold font-mono text-[#111827] mt-0.5">{m.value}</div>
                <div className="text-[10px] text-[#9CA3AF] mt-0.5">{m.note}</div>
              </div>
            ))}
          </div>

          <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#4B5563]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Direct normalization across Meta Ads, Google Ads, and TikTok</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Transparent spend grouping eliminates false CPA averages</span>
            </li>
          </ul>
        </div>

        {/* Right: Chart Shot */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full rounded-xl border border-[#E5E7EB] bg-white shadow-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
              <span className="font-semibold text-[#111827] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Cerebro Objective Benchmark
              </span>
              <span className="font-mono text-[11px] text-[#9CA3AF]">objective-view/{activeObj.id}</span>
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-[#FAFBFD] overflow-hidden flex items-center justify-center p-2">
              <Image
                src={activeObj.image}
                alt={activeObj.alt}
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
