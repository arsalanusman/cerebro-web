"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, Database, Sliders, Eye, CheckCircle2, ChevronRight } from "lucide-react";

interface StepData {
  step: string;
  name: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

const STEPS: StepData[] = [
  {
    step: "01",
    name: "Type",
    icon: Layers,
    title: "1. Select widget visualization type",
    description:
      "Choose from 10 purpose-built marketing widgets: brand summary tiles, KPI stat cards, trend charts, stacked bars, ranked lists, share bars, donuts, tables, or conversion funnels.",
    image: "/product/widget-step1-type.png",
    alt: "Add Widget Step 1: Select widget visualization format",
    highlights: [
      "10 layout styles tailored for advertising metrics",
      "Automatic responsive scaling for desktop and PDF exports",
      "Pre-configured color palettes matching official ad networks",
    ],
  },
  {
    step: "02",
    name: "Data",
    icon: Database,
    title: "2. Bind advertising metrics & dimensions",
    description:
      "Select normalized metrics across Meta, Google, and TikTok. Combine Spend, Impressions, Clicks, CTR, CPC, CPM, Views, Conversions, and CPA by Date, Platform, Brand, or Campaign.",
    image: "/product/widget-step2-data.jpg",
    alt: "Add Widget Step 2: Select advertising metrics and breakdown dimensions",
    highlights: [
      "Unified metrics normalized across mismatched ad platform naming",
      "Dynamic dimension breakdowns by campaign, channel, and brand",
      "Platform-specific count reconciliation built in",
    ],
  },
  {
    step: "03",
    name: "Rules",
    icon: Sliders,
    title: "3. Configure comparison rules & thresholds",
    description:
      "Define period comparisons (Previous 30 days, Same period last year), pacing targets, compact number notation, percentage variance indicators, and tile sizes (S, M, L).",
    image: "/product/widget-step3-rules.png",
    alt: "Add Widget Step 3: Configure period comparisons, number formats, and size",
    highlights: [
      "Dynamic vs. previous period and year-over-year benchmarking",
      "Currency and compact number formatting (e.g. PKR 7.4M)",
      "Automated green/red polarity indicators based on metric direction",
    ],
  },
  {
    step: "04",
    name: "Preview & Save",
    icon: Eye,
    title: "4. Live preview & immediate report deployment",
    description:
      "Inspect the live interactive widget rendered against real campaign data before committing it to your client reporting template or executive dashboard.",
    image: "/product/widget-builder.jpg",
    alt: "Add Widget Step 4: Live interactive widget preview and instant save",
    highlights: [
      "Real-time visual rendering with actual connected account records",
      "Instant insertion into client-facing web portals and scheduled emails",
      "Reusable across agency brand workspaces with one click",
    ],
  },
];

export default function InteractiveWidgetBuilder() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = STEPS[activeIdx];
  const Icon = activeStep.icon;

  return (
    <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Step Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#E5E7EB]">
        {STEPS.map((s, idx) => {
          const isSelected = idx === activeIdx;
          const StepIcon = s.icon;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0070C2] text-white shadow-sm shadow-[#0070C2]/20"
                  : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F3F4F6] hover:text-[#111827]"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                }`}
              >
                {s.step}
              </span>
              <StepIcon className="w-4 h-4 shrink-0" />
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Content Details on Left, Authentic Modal Shot on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Step Description & Highlights */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#0070C2] text-xs font-semibold w-fit mb-3">
            <Icon className="w-3.5 h-3.5" />
            <span>Step {activeStep.step} of 04</span>
          </div>

          <h4 className="font-heading font-semibold text-xl sm:text-2xl text-[#111827] leading-snug">
            {activeStep.title}
          </h4>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {activeStep.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {activeStep.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                <CheckCircle2 className="w-4 h-4 text-[#0070C2] shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveIdx((activeIdx + 1) % STEPS.length)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0070C2] text-white text-xs sm:text-sm font-semibold hover:bg-[#005DA3] transition-colors cursor-pointer"
            >
              <span>{activeIdx === STEPS.length - 1 ? "Review from Step 1" : "Next configuration step"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#6B7280]">
              Interactive Cerebro drawer
            </span>
          </div>
        </div>

        {/* Right: Authentic Drawer Screenshot */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full max-w-[560px] rounded-xl border border-[#E5E7EB] bg-white shadow-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 bg-[#F9FAFB] border-b border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
              <span className="font-semibold text-[#111827] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Cerebro Widget Builder Drawer
              </span>
              <span className="font-mono text-[11px] text-[#9CA3AF]">modal/drawer-step-{activeStep.step}</span>
            </div>
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] bg-[#F3F4F6] overflow-hidden flex items-center justify-center p-2">
              <Image
                src={activeStep.image}
                alt={activeStep.alt}
                width={800}
                height={1024}
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
