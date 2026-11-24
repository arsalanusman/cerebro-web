"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isPlaceholderHidden } from "@/lib/site";
import CustomersStrip from "@/components/home/CustomersStrip";

interface AskTabItem {
  title: string;
  text: string;
  q: string;
  value: string;
  pill: string;
  pillBg: string;
  pillFg: string;
  line: string;
}

export function HomeV2() {
  const [activeAskTab, setActiveAskTab] = useState(0);
  const [heroPromptIdx, setHeroPromptIdx] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  const heroQuestions = [
    {
      q: "Why did CPA rise?",
      a: "TikTok drove 82% of the rise due to top-of-funnel reach.",
      source: "TikTok Marketing API",
      change: "↑ 17.4%",
    },
    {
      q: "Which audience converts best?",
      a: "Women 25–34 on Meta delivers 4.1x ROAS at PKR 312 CPA.",
      source: "Meta Ads Graph API",
      change: "4.1x ROAS",
    },
    {
      q: "What spend is pacing behind?",
      a: "Google Search is at 98.4% pacing. Reallocate PKR 45K to Meta.",
      source: "Google Ads API",
      change: "Pacing 98.4%",
    },
  ];

  const handleSelectQuestion = (idx: number) => {
    if (idx === heroPromptIdx) return;
    setIsThinking(true);
    setTimeout(() => {
      setHeroPromptIdx(idx);
      setIsThinking(false);
    }, 320);
  };

  const askTabs: AskTabItem[] = [
    {
      title: "Why did it change?",
      text: "Finds what moved a number.",
      q: "Why did CPA rise last month?",
      value: "PKR 468.81",
      pill: "↑ 17%",
      pillBg: "#FEE2E2",
      pillFg: "#991B1B",
      line: "TikTok drove the rise, mostly from an awareness campaign.",
    },
    {
      title: "Who is responding?",
      text: "Results by age and gender.",
      q: "Which audience converts best on Meta?",
      value: "Women 25–34",
      pill: "PKR 312 CPA",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      line: "21% below the Meta average.",
    },
    {
      title: "What should we change?",
      text: "Fixes with their likely impact.",
      q: "How do we bring CPA down?",
      value: "+300 to +350",
      pill: "conversions",
      pillBg: "#E8F2FC",
      pillFg: "#004C87",
      line: "Move PKR 300K to Women 18–34 | Feed, then test for two weeks.",
    },
    {
      title: "What can’t it see?",
      text: "Says so, instead of guessing.",
      q: "How many in-store sales did we drive?",
      value: "Not in your data",
      pill: "No guessing",
      pillBg: "#F1F2F5",
      pillFg: "#4B5160",
      line: "I can show online conversions for the same campaigns instead.",
    },
  ];

  const curAsk = askTabs[activeAskTab];

  const widgets = [
    { n: "KPI", d: "M4 4h16v16H4zM8 14l3-3 2 2 3-4", active: true },
    { n: "Trend", d: "M3 17l6-6 4 4 8-8" },
    { n: "Donut", d: "M12 3a9 9 0 1 0 9 9h-9z" },
    { n: "Table", d: "M3 4h18v16H3zM3 10h18M9 4v16" },
    { n: "Funnel", d: "M3 4h18l-7 8v6l-4 2v-8z" },
    { n: "Ranked", d: "M8 6h13M8 12h10M8 18h7M3 6h.01M3 12h.01M3 18h.01" },
  ];

  const crumbs = [
    { level: "Platform", label: "Meta Ads", indent: "0px", bg: "rgba(255,255,255,0.1)", fg: "#FFFFFF", tag: "#8EC5F0" },
    { level: "Campaign", label: "Winter Collection", indent: "40px", bg: "rgba(255,255,255,0.14)", fg: "#FFFFFF", tag: "#8EC5F0" },
    { level: "Ad set", label: "Parents 28–45 | Feed", indent: "80px", bg: "rgba(255,255,255,0.18)", fg: "#FFFFFF", tag: "#8EC5F0" },
    { level: "Ad", label: "Product feed v2", indent: "120px", bg: "#FFFFFF", fg: "#000000", tag: "#0070C2" },
  ];

  const industries = ["Banking", "Telecom", "FMCG", "E-commerce"];

  return (
    <div className="font-sans text-[#1C2433] bg-white min-w-0 tabular-nums">
      {/* ── 1. Expansive Living Pipeline Canvas Hero (Figma Weave Style) ── */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F4F8FC] to-[#EBF3FB] border-b border-[#E2E8F0] pt-8 pb-14 lg:pt-12 lg:pb-20"
      >
        {/* Subtle technical coordinate canvas dot matrix */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "radial-gradient(#0070C2 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient luminous energy glow across the canvas */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full pointer-events-none opacity-25 blur-3xl bg-[radial-gradient(ellipse,_#0070C2_0%,_#8EC5F0_45%,_transparent_75%)]"
        />

        {/* ── TOP DISPLAY HEADER (Split-column, High impact) ── */}
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 mb-8 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Title Block */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F2FC] border border-[#BFD8F0] text-[#004C87] text-[13px] font-semibold mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0070C2] relative inline-flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0070C2] opacity-75" />
                </span>
                <span>Cerebro dNano · Unified Marketing Intelligence</span>
              </div>
              <h1 className="m-0 font-heading font-bold text-[38px] sm:text-[52px] lg:text-[68px] leading-[1.04] tracking-[-0.035em] text-[#000000]">
                Your AI analyst for every ad platform.
              </h1>
              <p className="mt-4 max-w-[580px] text-[17px] lg:text-[19px] leading-[1.55] text-[#5A6675]">
                Bring in any marketing data. Cerebro AI cleans it, standardizes objectives, and answers your performance questions with full audit steps.
              </p>
            </div>

            {/* Right Action & Telemetry Block */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5">
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/demo"
                  className="group whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#0070C2] hover:bg-[#005DA3] text-white text-[15px] font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(0,112,194,0.28)] hover:shadow-[0_6px_24px_rgba(0,112,194,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Book a demo</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="#ways"
                  className="whitespace-nowrap shrink-0 inline-flex items-center justify-center h-12 px-6 rounded-full bg-white hover:bg-[#F6F8FB] border border-[#CBD5E1] text-[#1C2433] text-[15px] font-semibold transition-all hover:border-[#0070C2] hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
                >
                  See how it works
                </a>
              </div>

              {/* Live Micro-Signals */}
              <div className="flex items-center gap-5 text-[13px] text-[#5A6675] flex-wrap justify-start lg:justify-end">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                  <span>3 Native APIs Live</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#0070C2]" />
                  <span>Zero raw ad tracking cookies</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#022771]" />
                  <span>PKR & USD Normalization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LIVING PIPELINE CANVAS (Panoramic Spatial Node Stage) ── */}
        <div className="relative max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#EEF5FC]/85 border border-[#BFD8F0]/90 shadow-[0_24px_70px_rgba(1,22,64,0.08),0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden p-6 sm:p-8 lg:p-10 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
            {/* Canvas Ambient Depth Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,112,194,0.18) 0%, rgba(142,197,240,0.08) 35%, rgba(238,245,252,0) 70%)",
              }}
            />

            {/* Canvas Top Bar - System Status */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#BFD8F0]/60 text-[12px] font-semibold text-[#004C87]">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0070C2] animate-pulse" />
                <span className="tracking-wide uppercase text-[11px] font-bold">Cerebro dNano Living Pipeline Graph</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[#5A6675] text-[11.5px] font-medium">
                <span>Multi-touch attribution active</span>
                <span className="text-[#BFD8F0]">|</span>
                <span className="text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full font-semibold">Sub-second Latency</span>
              </div>
            </div>

            {/* ── THE NODE GRAPH STAGE (Desktop 3-Column Pipeline / Mobile Stacked) ── */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto py-6">

              {/* STAGE 1: INGESTION NODES (Left - Cols 1 to 4) */}
              <div className="lg:col-span-4 flex flex-col gap-3 relative">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C2] mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0070C2]" />
                  <span>Data Ingestion Nodes</span>
                </div>

                {/* Node 1: Meta Ads */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-[16px] p-3.5 border border-[#BFD8F0] shadow-[0_4px_16px_rgba(1,22,64,0.05)] hover:border-[#0070C2] hover:shadow-[0_8px_24px_rgba(0,112,194,0.15)] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-[12px] bg-[#EEF5FC] border border-[#BFD8F0]/60 flex items-center justify-center shrink-0">
                      <Image src="/brand/platforms/meta.png" alt="Meta Ads" width={22} height={22} className="object-contain" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[13.5px] font-bold text-[#000000]">Meta Ads</span>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534]">Live API</span>
                      </div>
                      <p className="m-0 text-[11.5px] text-[#5A6675]">Conversions API · PKR 1.84M Spend · 4.1x ROAS</p>
                    </div>
                  </div>
                  {/* Socket Anchor Dot on Right */}
                  <span aria-hidden="true" className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)]" />
                </div>

                {/* Node 2: Google Ads */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-[16px] p-3.5 border border-[#BFD8F0] shadow-[0_4px_16px_rgba(1,22,64,0.05)] hover:border-[#0070C2] hover:shadow-[0_8px_24px_rgba(0,112,194,0.15)] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-[12px] bg-[#EEF5FC] border border-[#BFD8F0]/60 flex items-center justify-center shrink-0">
                      <Image src="/brand/platforms/google.png" alt="Google Ads" width={22} height={22} className="object-contain" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[13.5px] font-bold text-[#000000]">Google Ads</span>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534]">Live API</span>
                      </div>
                      <p className="m-0 text-[11.5px] text-[#5A6675]">Search & PMax · 18.2K Conv · PKR 240 CPA</p>
                    </div>
                  </div>
                  {/* Socket Anchor Dot on Right */}
                  <span aria-hidden="true" className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)]" />
                </div>

                {/* Node 3: TikTok Ads */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-[16px] p-3.5 border border-[#BFD8F0] shadow-[0_4px_16px_rgba(1,22,64,0.05)] hover:border-[#0070C2] hover:shadow-[0_8px_24px_rgba(0,112,194,0.15)] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-[12px] bg-[#EEF5FC] border border-[#BFD8F0]/60 flex items-center justify-center shrink-0">
                      <Image src="/brand/platforms/tiktok.png" alt="TikTok Ads" width={22} height={22} className="object-contain" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[13.5px] font-bold text-[#000000]">TikTok Ads</span>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534]">Streaming</span>
                      </div>
                      <p className="m-0 text-[11.5px] text-[#5A6675]">Spark Ads & Reach · 82% CPA Shift Detected</p>
                    </div>
                  </div>
                  {/* Socket Anchor Dot on Right */}
                  <span aria-hidden="true" className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)]" />
                </div>

                {/* Node 4: Offline Sales & POS */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-[16px] p-3.5 border border-[#BFD8F0] shadow-[0_4px_16px_rgba(1,22,64,0.05)] hover:border-[#0070C2] hover:shadow-[0_8px_24px_rgba(0,112,194,0.15)] transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-[12px] bg-[#EEF5FC] border border-[#BFD8F0]/60 flex items-center justify-center shrink-0">
                      <Image src="/brand/platforms/sheets.svg" alt="Sheets & POS" width={22} height={22} className="object-contain" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[13.5px] font-bold text-[#000000]">Offline POS & Sheets</span>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-[#E8F2FC] text-[#0070C2]">Hourly Batch</span>
                      </div>
                      <p className="m-0 text-[11.5px] text-[#5A6675]">Karachi & Lahore Stores · PKR 8.4M Offline Revenue</p>
                    </div>
                  </div>
                  {/* Socket Anchor Dot on Right */}
                  <span aria-hidden="true" className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)]" />
                </div>
              </div>

              {/* STAGE 2: CEREBRO dNANO NEURAL CORE (Center - Cols 5 to 7) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[300px] text-center px-4">
                {/* Luminous orbital rings and glowing brain center */}
                <div className="relative w-[190px] h-[190px] flex items-center justify-center">
                  {/* Outer slow-spinning dashed ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0070C2]/30 animate-spin-slow" />
                  {/* Mid pulse ring */}
                  <div className="absolute inset-3 rounded-full border border-[#8EC5F0]/50 animate-pulse-glow" />
                  {/* Inner luminous glow aura */}
                  <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,_#0070C2_0%,_#022771_100%)] shadow-[0_0_36px_rgba(0,112,194,0.55)] flex items-center justify-center" />

                  {/* Cerebro Mark in Center */}
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/brand/cerebro-mark-white.svg"
                      alt="Cerebro dNano Core"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(142,197,240,0.8)]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0]">
                    <span>Cerebro dNano AI Core</span>
                  </div>
                  <p className="mt-1.5 text-[12px] text-[#5A6675] max-w-[260px] mx-auto leading-snug">
                    Deterministic cross-channel taxonomy & multi-touch attribution
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2 text-[10.5px] font-semibold text-[#166534]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166534] animate-ping" />
                    <span>0 Hallucinations · Verified Audits</span>
                  </div>
                </div>
              </div>

              {/* STAGE 3: INTERACTIVE DECISION & ANALYST NODES (Right - Cols 8 to 12) */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 relative">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0070C2] mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0070C2]" />
                  <span>Decision & Telemetry Outputs</span>
                </div>

                {/* Node 5: Interactive Ask Cerebro AI Console */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-[20px] p-4 border border-[#BFD8F0] shadow-[0_12px_32px_rgba(1,22,64,0.08)] flex flex-col gap-3 transition-all">
                  {/* Socket Anchor Dot on Left */}
                  <span aria-hidden="true" className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)]" />

                  <div className="flex items-center justify-between border-b border-[#F0F2F6] pb-2">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0070C2]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                      </svg>
                      <span>Ask Cerebro AI</span>
                    </span>
                    <span className="text-[10px] font-semibold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                      Audited Model
                    </span>
                  </div>

                  {/* Interactive Question Tabs */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {heroQuestions.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectQuestion(idx)}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                          heroPromptIdx === idx
                            ? "bg-[#0070C2] text-white shadow-xs"
                            : "bg-[#F1F3F7] text-[#5A6675] hover:bg-[#E2E8F0]"
                        }`}
                      >
                        {idx === 0 ? "Why CPA?" : idx === 1 ? "Best Audience" : "Pacing"}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Question Bubble */}
                  <div className="self-end bg-[#F2F4F8] rounded-[14px_14px_4px_14px] py-1.5 px-3 text-[12px] font-medium text-[#000000]">
                    {heroQuestions[heroPromptIdx].q}
                  </div>

                  {/* Dynamic Answer Bubble */}
                  <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#000000] bg-[#EEF5FC] p-2.5 rounded-[12px] border border-[#BFD8F0]/50">
                    <span className="w-5 h-5 rounded-[6px] bg-[#0070C2] text-white inline-flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                      </svg>
                    </span>
                    {isThinking ? (
                      <div className="flex items-center gap-1.5 py-1 text-[#0070C2] font-semibold text-[11.5px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070C2] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070C2] animate-bounce [animation-delay:0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070C2] animate-bounce [animation-delay:0.3s]" />
                        <span>Synthesizing cross-channel data...</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span className="font-heading font-bold text-[14px] text-[#0070C2]">{heroQuestions[heroPromptIdx].change}</span>
                          <span className="text-[10px] text-[#166534] bg-[#DCFCE7] px-1.5 py-0.2 rounded font-semibold">Audited</span>
                        </div>
                        <p className="m-0 font-medium text-[12px] leading-snug">{heroQuestions[heroPromptIdx].a}</p>
                        <span className="mt-1 inline-block text-[10.5px] font-semibold text-[#005DA3]">
                          ✓ Verified from {heroQuestions[heroPromptIdx].source}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Node 6: Blended ROAS & Telemetry Card */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-[20px] p-3.5 border border-[#BFD8F0] shadow-[0_8px_24px_rgba(1,22,64,0.06)] flex flex-col gap-2">
                  {/* Socket Anchor Dot on Left */}
                  <span aria-hidden="true" className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)]" />

                  <div className="flex items-center justify-between text-[11.5px] font-semibold text-[#5A6675]">
                    <span className="text-[#000000] font-bold">Blended Real-Time ROAS</span>
                    <span className="text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full text-[10.5px] font-bold">
                      ↑ 18.4%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-[22px] font-bold text-[#000000] tabular-nums">
                      3.82x
                    </span>
                    <span className="text-[12px] text-[#5A6675]">vs 3.22x target</span>
                  </div>
                  <svg width="100%" height="24" viewBox="0 0 200 24" fill="none">
                    <path
                      d="M0 20 L30 17 L65 22 L100 12 L135 15 L170 7 L200 2"
                      stroke="#0070C2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="mt-1 pt-1.5 border-t border-[#F0F2F6] flex items-center justify-between text-[11px] text-[#5A6675]">
                    <span>Automated Action:</span>
                    <span className="font-semibold text-[#0070C2]">Shift PKR 300K to Feed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SVG FLUID BEZIER CONNECTOR CABLES ACROSS THE CANVAS (Desktop) ── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="wire-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8EC5F0" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#0070C2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#022771" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="wire-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#022771" stopOpacity="1" />
                  <stop offset="50%" stopColor="#0070C2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8EC5F0" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              {/* Ingestion Cables (Left cards into center Core) */}
              {/* Path 1: Meta (approx 380, 140) -> Core (600, 300) */}
              <path d="M 380 140 C 470 140, 520 280, 560 300" fill="none" stroke="#BFD8F0" strokeWidth="1.8" strokeDasharray="4 6" />
              <path d="M 380 140 C 470 140, 520 280, 560 300" fill="none" stroke="url(#wire-grad-left)" strokeWidth="2.5" className="animate-flow-stream" />
              <circle r="4" fill="#0070C2" filter="drop-shadow(0 0 6px #0070C2)">
                <animateMotion path="M 380 140 C 470 140, 520 280, 560 300" dur="2.8s" repeatCount="indefinite" />
              </circle>

              {/* Path 2: Google (approx 380, 230) -> Core (600, 300) */}
              <path d="M 380 230 C 460 230, 520 290, 560 300" fill="none" stroke="#BFD8F0" strokeWidth="1.8" strokeDasharray="4 6" />
              <path d="M 380 230 C 460 230, 520 290, 560 300" fill="none" stroke="url(#wire-grad-left)" strokeWidth="2.5" className="animate-flow-stream" />
              <circle r="4" fill="#0070C2" filter="drop-shadow(0 0 6px #0070C2)">
                <animateMotion path="M 380 230 C 460 230, 520 290, 560 300" dur="2.4s" repeatCount="indefinite" />
              </circle>

              {/* Path 3: TikTok (approx 380, 330) -> Core (600, 300) */}
              <path d="M 380 330 C 460 330, 520 310, 560 300" fill="none" stroke="#BFD8F0" strokeWidth="1.8" strokeDasharray="4 6" />
              <path d="M 380 330 C 460 330, 520 310, 560 300" fill="none" stroke="url(#wire-grad-left)" strokeWidth="2.5" className="animate-flow-stream" />
              <circle r="4" fill="#0070C2" filter="drop-shadow(0 0 6px #0070C2)">
                <animateMotion path="M 380 330 C 460 330, 520 310, 560 300" dur="3.0s" repeatCount="indefinite" />
              </circle>

              {/* Path 4: Offline POS (approx 380, 430) -> Core (600, 300) */}
              <path d="M 380 430 C 470 430, 520 320, 560 300" fill="none" stroke="#BFD8F0" strokeWidth="1.8" strokeDasharray="4 6" />
              <path d="M 380 430 C 470 430, 520 320, 560 300" fill="none" stroke="url(#wire-grad-left)" strokeWidth="2.5" className="animate-flow-stream" />
              <circle r="4" fill="#0070C2" filter="drop-shadow(0 0 6px #0070C2)">
                <animateMotion path="M 380 430 C 470 430, 520 320, 560 300" dur="3.4s" repeatCount="indefinite" />
              </circle>

              {/* Output Cables (Center Core out to Right cards) */}
              {/* Path 5: Core (640, 300) -> Ask Cerebro (810, 200) */}
              <path d="M 640 300 C 700 300, 740 200, 810 200" fill="none" stroke="#BFD8F0" strokeWidth="1.8" strokeDasharray="4 6" />
              <path d="M 640 300 C 700 300, 740 200, 810 200" fill="none" stroke="url(#wire-grad-right)" strokeWidth="2.5" className="animate-flow-stream" />
              <circle r="4" fill="#6CC0F5" filter="drop-shadow(0 0 6px #6CC0F5)">
                <animateMotion path="M 640 300 C 700 300, 740 200, 810 200" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Path 6: Core (640, 300) -> Blended ROAS (810, 440) */}
              <path d="M 640 300 C 700 300, 740 440, 810 440" fill="none" stroke="#BFD8F0" strokeWidth="1.8" strokeDasharray="4 6" />
              <path d="M 640 300 C 700 300, 740 440, 810 440" fill="none" stroke="url(#wire-grad-right)" strokeWidth="2.5" className="animate-flow-stream" />
              <circle r="4" fill="#6CC0F5" filter="drop-shadow(0 0 6px #6CC0F5)">
                <animateMotion path="M 640 300 C 700 300, 740 440, 810 440" dur="2.9s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* Canvas Bottom Bar */}
            <div className="relative z-10 pt-4 border-t border-[#BFD8F0]/60 flex items-center justify-between text-[11.5px] text-[#5A6675] flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#000000]">Zero cookies required:</span>
                <span>Deterministic server-side API ingest with 100% hash validation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#0070C2]">Autonomous Pipeline</span>
                <span>·</span>
                <span>Ready for all enterprise ad stacks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logo Marquee Strip (Samsung, Nestlé, Easypaisa, Fauji Foods) ── */}
      <CustomersStrip />

      {/* ── 2. Three Ways: Every source. One clean model. ── */}
      <section id="ways" className="py-20 lg:py-28 lg:pb-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center">
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-[-0.025em] text-[#000000]">
              Every source. One clean model.
            </h2>
            <p className="mt-3.5 mx-auto max-w-[560px] text-[17px] lg:text-[18px] leading-[1.5] text-[#5A6675]">
              Connect a platform, build a connector with AI, or upload a sheet.
            </p>

            {/* Interactive Feature Cloud Exploration Pills (Inspired by Figma Weave) */}
            <div className="mt-8 flex justify-center items-center gap-2 flex-wrap">
              {[
                { id: 0, label: "Native Connectors", badge: "3 Live" },
                { id: 1, label: "AI Connector Builder", badge: "Instant" },
                { id: 2, label: "Spreadsheets & POS", badge: "Auto-mapped" },
                { id: 3, label: "Objective Taxonomy", badge: "Unified" },
                { id: 4, label: "Automated Delivery", badge: "Exports" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFeatureTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                    activeFeatureTab === tab.id
                      ? "bg-[#0070C2] text-white shadow-[0_4px_14px_rgba(0,112,194,0.3)] scale-[1.02]"
                      : "bg-[#F6F8FB] hover:bg-[#EEF5FC] text-[#5A6675] hover:text-[#0070C2] border border-[#E2E8F0]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeFeatureTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-[#E2E8F0] text-[#5A6675]"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 flex gap-5 flex-wrap">
            {/* Card 1: Native Connectors */}
            <Link
              href="/integrations"
              className="flex-1 min-w-[300px] lg:min-w-[320px] flex flex-col gap-4.5 group"
            >
              <div className="h-[280px] rounded-[24px] bg-[#EEF5FC] relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.01] duration-150">
                <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
                  <defs>
                    <pattern id="h3-dots-1" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.1" fill="#BFD8F0" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#h3-dots-1)" opacity="0.6" />
                </svg>

                <div className="relative grid grid-cols-4 gap-3.5">
                  {/* Meta */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/meta.png" alt="Meta Ads" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* Google */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/google.png" alt="Google Ads" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* TikTok */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/tiktok.png" alt="TikTok Ads" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* Custom + */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] inline-flex items-center justify-center">
                    <span className="w-[30px] h-[30px] rounded-[9px] bg-[#0070C2] text-white text-[10.5px] font-bold inline-flex items-center justify-center">+</span>
                  </span>
                  {/* CSV */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] inline-flex items-center justify-center">
                    <span className="w-[30px] h-[30px] rounded-[9px] bg-[#0F766E] text-white text-[10.5px] font-bold inline-flex items-center justify-center">CSV</span>
                  </span>
                  {/* Sheets */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/sheets.svg" alt="Google Sheets" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* LinkedIn (faded) */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] opacity-45 inline-flex items-center justify-center">
                    <Image src="/brand/platforms/linkedin.png" alt="LinkedIn (coming soon)" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px] grayscale" />
                  </span>
                  {/* DV360 (faded) */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(2,39,113,0.10)] opacity-45 inline-flex items-center justify-center">
                    <Image src="/brand/platforms/dv360.png" alt="Display & Video 360 (coming soon)" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px] grayscale" />
                  </span>
                </div>
              </div>
              <div>
                <div className="font-heading text-[21px] font-semibold text-[#000000]">Native connectors</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5A6675]">Meta, Google and TikTok in a few clicks.</div>
              </div>
            </Link>

            {/* Card 2: AI-built Connectors */}
            <Link
              href="/integrations"
              className="flex-1 min-w-[300px] lg:min-w-[320px] flex flex-col gap-4.5 group"
            >
              <div className="h-[280px] rounded-[24px] bg-[#011640] relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.01] duration-150">
                <div
                  aria-hidden="true"
                  className="absolute -left-[120px] -bottom-[180px] w-[420px] h-[420px] rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(0,112,194,0.45) 0, rgba(1,22,64,0) 62%)",
                  }}
                />
                <div className="relative w-[280px] rounded-[14px] bg-[#00112E] border border-white/12 shadow-[0_24px_50px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="flex justify-between items-center py-2.5 px-3.5 border-b border-white/8">
                    <span className="text-[12px] font-semibold text-white">Connector builder</span>
                    <span className="text-[10.5px] font-semibold text-[#BFD8F0] bg-[#0070C2]/35 py-0.5 px-2 rounded-[9px]">
                      AI draft
                    </span>
                  </div>
                  <div className="p-3 px-3.5 font-mono text-[12px] leading-[1.7]">
                    <div><span className="text-[#C9DDF2]">{"{"}</span></div>
                    <div><span className="text-[#C9DDF2]">  </span><span className="text-[#8EC5F0]">"platform"</span><span className="text-[#C9DDF2]">: </span><span className="text-[#86EFAC]">"Local publisher"</span></div>
                    <div><span className="text-[#C9DDF2]">  </span><span className="text-[#8EC5F0]">"cost_local"</span><span className="text-[#C9DDF2]">: </span><span className="text-[#86EFAC]">"spend"</span></div>
                    <div><span className="text-[#C9DDF2]">  </span><span className="text-[#8EC5F0]">"imps"</span><span className="text-[#C9DDF2]">: </span><span className="text-[#86EFAC]">"impressions"</span></div>
                    <div><span className="text-[#C9DDF2]">{"}"}</span></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-heading text-[21px] font-semibold text-[#000000]">AI-built connectors</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5A6675]">Any other platform, drafted by Cerebro AI.</div>
              </div>
            </Link>

            {/* Card 3: Sheet Upload */}
            <Link
              href="/integrations"
              className="flex-1 min-w-[300px] lg:min-w-[320px] flex flex-col gap-4.5 group"
            >
              <div className="h-[280px] rounded-[24px] bg-[#EEF5FC] relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.01] duration-150">
                <div className="relative w-[300px] h-[200px]">
                  <svg aria-hidden="true" viewBox="0 0 300 200" className="absolute inset-0 w-full h-full">
                    <path d="M118 40 C 180 40, 180 100, 228 100" fill="none" stroke="#8EC5F0" strokeWidth="1.6" strokeDasharray="4 6" />
                    <path d="M118 100 C 170 100, 190 100, 228 100" fill="none" stroke="#8EC5F0" strokeWidth="1.6" strokeDasharray="4 6" />
                    <path d="M118 160 C 180 160, 180 100, 228 100" fill="none" stroke="#8EC5F0" strokeWidth="1.6" strokeDasharray="4 6" />
                  </svg>
                  {/* CSV pill */}
                  <span className="absolute left-0 top-[23px] inline-flex items-center gap-1.5 h-[34px] px-3 pl-1.5 rounded-[17px] bg-white shadow-[0_8px_18px_rgba(2,39,113,0.12)] text-[12.5px] font-semibold text-[#000000]">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-[#0F766E] text-white text-[9px] font-bold inline-flex items-center justify-center">CSV</span>
                    <span>CSV</span>
                  </span>
                  {/* Excel pill */}
                  <span className="absolute left-0 top-[83px] inline-flex items-center gap-1.5 h-[34px] px-3 pl-1.5 rounded-[17px] bg-white shadow-[0_8px_18px_rgba(2,39,113,0.12)] text-[12.5px] font-semibold text-[#000000]">
                    <Image src="/brand/platforms/excel.svg" alt="Microsoft Excel" width={22} height={22} className="w-[22px] h-[22px] rounded-[6px] object-contain" />
                    <span>Excel</span>
                  </span>
                  {/* Sheets pill */}
                  <span className="absolute left-0 top-[143px] inline-flex items-center gap-1.5 h-[34px] px-3 pl-1.5 rounded-[17px] bg-white shadow-[0_8px_18px_rgba(2,39,113,0.12)] text-[12.5px] font-semibold text-[#000000]">
                    <Image src="/brand/platforms/sheets.svg" alt="Google Sheets" width={22} height={22} className="w-[22px] h-[22px] rounded-[6px] object-contain" />
                    <span>Google Sheets</span>
                  </span>
                  {/* Converging Core */}
                  <span className="absolute left-[228px] top-[100px] w-[72px] h-[72px] -ml-9 -mt-9 rounded-full bg-[radial-gradient(circle_at_40%_32%,#6CC0F5_0,#0070C2_45%,#022771_100%)] shadow-[0_0_0_8px_rgba(0,112,194,0.12),0_16px_36px_rgba(2,39,113,0.3)] flex items-center justify-center">
                    <Image src="/brand/cerebro-mark-white.svg" alt="Cerebro" width={40} height={40} className="w-10 h-auto" />
                  </span>
                </div>
              </div>
              <div>
                <div className="font-heading text-[21px] font-semibold text-[#000000]">Sheet upload</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5A6675]">CSV, Excel and Google Sheets, mapped by AI.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Facts Band ── */}
      <section aria-label="Facts" className="relative overflow-hidden bg-[#022771] py-20 lg:py-[88px]">
        <div
          aria-hidden="true"
          className="absolute -right-[200px] -top-[260px] w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,112,194,0.35) 0, rgba(2,39,113,0) 62%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 box-border flex gap-6 flex-wrap">
          {[
            { big: "3", label: "Native connectors live" },
            { big: "Any", label: "Platform, with AI-built connectors" },
            { big: "3", label: "Sheet formats, mapped by AI" },
            { big: "5", label: "AI steps on every source" },
          ].map((f, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[200px] lg:min-w-[220px] border-l border-white/16 pl-6"
            >
              <div className="font-heading font-semibold text-[44px] sm:text-[56px] lg:text-[72px] tracking-[-0.035em] text-white leading-none">
                {f.big}
              </div>
              <div className="mt-3.5 text-[15.5px] text-[#C9DDF2]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Ask Cerebro Showcase ── */}
      <section id="ask" className="relative overflow-hidden bg-[#011640] py-20 lg:py-28 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[120px] -ml-[450px] w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,112,194,0.35) 0, rgba(0,112,194,0.08) 30%, rgba(1,22,64,0) 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center">
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-[-0.025em] text-white">
              Ask Cerebro. Get answers, not exports.
            </h2>
            <p className="mt-3.5 mx-auto max-w-[560px] text-[17px] lg:text-[18px] leading-[1.5] text-[#C9DDF2]">
              Plain questions, answers with the numbers behind them.
            </p>
          </div>

          {/* Interactive Question / Answer Display */}
          <div
            aria-live="polite"
            className="mt-14 h-[400px] rounded-[28px] bg-white/[0.04] border border-white/10 flex items-center justify-center overflow-hidden p-6"
          >
            <div className="w-[520px] max-w-full flex flex-col gap-4">
              {/* Question bubble */}
              <span className="self-end bg-white rounded-[16px_16px_4px_16px] py-3 px-4 text-[15.5px] text-[#000000] shadow-[0_16px_36px_rgba(0,0,0,0.25)]">
                {curAsk.q}
              </span>
              {/* Answer card */}
              <div className="self-start w-[340px] max-w-full bg-white rounded-[18px] p-5 sm:p-5.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0070C2]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                  </svg>
                  <span>Ask Cerebro</span>
                </div>
                <div className="mt-3 flex items-center gap-2.5 flex-wrap">
                  <span className="font-heading text-[28px] font-semibold tracking-[-0.02em] text-[#000000]">
                    {curAsk.value}
                  </span>
                  <span
                    style={{ backgroundColor: curAsk.pillBg, color: curAsk.pillFg }}
                    className="text-[12.5px] font-semibold py-1 px-2.5 rounded-[10px]"
                  >
                    {curAsk.pill}
                  </span>
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.5] text-[#5A6675]">{curAsk.line}</p>
              </div>
            </div>
          </div>

          {/* Question Category Tabs */}
          <div
            role="tablist"
            aria-label="Kinds of questions"
            className="mt-7 flex gap-5 flex-wrap"
          >
            {askTabs.map((t, idx) => {
              const isSelected = activeAskTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveAskTab(idx)}
                  className={`flex-1 min-w-[200px] lg:min-w-[220px] text-left border-0 border-t-2 pt-4 bg-transparent cursor-pointer transition-colors ${
                    isSelected ? "border-white" : "border-white/16"
                  }`}
                >
                  <span
                    className={`block text-[16px] font-semibold ${
                      isSelected ? "text-white" : "text-[#8EC5F0]"
                    }`}
                  >
                    {t.title}
                  </span>
                  <span
                    className={`block mt-1.5 text-[14px] leading-[1.45] ${
                      isSelected ? "text-[#C9DDF2]" : "text-[#C9DDF2]/60"
                    }`}
                  >
                    {t.text}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-7 text-center text-[13px] text-[#8EC5F0]">
            Demo data for a sample brand.
          </p>
        </div>
      </section>

      {/* ── 5. Feature Rows ── */}
      <section className="py-20 lg:py-28 lg:pb-10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 box-border flex flex-col gap-20 lg:gap-[88px]">
          {/* Row 1: Objective engine */}
          <div className="flex gap-12 lg:gap-16 items-center flex-wrap">
            <div className="flex-1 min-w-[300px] lg:min-w-[380px]">
              <h3 className="m-0 font-heading font-semibold text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#000000]">
                Judge every campaign by its own goal.
              </h3>
              <p className="mt-3.5 max-w-[420px] text-[17px] leading-[1.55] text-[#5A6675]">
                Reach campaigns on CPM, sales campaigns on CPA.
              </p>
              <Link
                href="/platform/objective-reporting"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0070C2] hover:text-[#005DA3] transition-colors"
              >
                <span>Objective-based reporting</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="flex-[1.3] min-w-[300px] lg:min-w-[520px] h-[340px] sm:h-[380px] rounded-[28px] bg-[#EEF5FC] relative overflow-hidden flex items-center justify-center p-6">
              <div
                aria-hidden="true"
                className="absolute -right-[120px] -top-[140px] w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(142,197,240,0.7) 0, rgba(142,197,240,0) 65%)",
                }}
              />
              <div className="relative flex items-center gap-4 flex-wrap justify-center">
                <div className="w-[190px] bg-white rounded-[18px] p-5 shadow-[0_16px_36px_rgba(2,39,113,0.12)]">
                  <div className="text-[12.5px] text-[#5A6675]">Judged on CPA</div>
                  <div className="mt-2 font-heading font-semibold text-[28px] text-[#000000]">650.58</div>
                  <span className="inline-block mt-2.5 text-[11.5px] font-semibold py-1 px-2 rounded-[8px] bg-[#FEE2E2] text-[#991B1B]">
                    Looks worst
                  </span>
                </div>

                <span className="w-10 h-10 rounded-full bg-white shadow-[0_8px_20px_rgba(2,39,113,0.12)] inline-flex items-center justify-center text-[13px] font-semibold text-[#5A6675]">
                  vs
                </span>

                <div className="w-[190px] bg-white rounded-[18px] p-5 border-2 border-[#8EC5F0] shadow-[0_20px_44px_rgba(0,112,194,0.2)]">
                  <div className="text-[12.5px] text-[#005DA3]">Judged on its goal</div>
                  <div className="mt-2 font-heading font-semibold text-[28px] text-[#000000]">119.23</div>
                  <span className="inline-block mt-2.5 text-[11.5px] font-semibold py-1 px-2 rounded-[8px] bg-[#DCFCE7] text-[#166534]">
                    Best CPM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Dashboards */}
          <div className="flex gap-12 lg:gap-16 items-center flex-wrap">
            <div className="flex-1 min-w-[300px] lg:min-w-[380px]">
              <h3 className="m-0 font-heading font-semibold text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#000000]">
                Dashboards your team builds in clicks.
              </h3>
              <p className="mt-3.5 max-w-[420px] text-[17px] leading-[1.55] text-[#5A6675]">
                Widget-based, editable, and shared with every client.
              </p>
              <Link
                href="/platform/dashboards"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0070C2] hover:text-[#005DA3] transition-colors"
              >
                <span>Dashboards</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="flex-[1.3] min-w-[300px] lg:min-w-[520px] h-[340px] sm:h-[380px] rounded-[28px] bg-[#EEF5FC] relative overflow-hidden flex items-center justify-center p-6">
              <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
                <defs>
                  <pattern id="h3-dots-2" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.1" fill="#BFD8F0" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#h3-dots-2)" opacity="0.6" />
              </svg>

              <div className="relative w-[420px] max-w-full h-[260px]">
                <div className="absolute left-0 top-5 grid grid-cols-3 gap-3">
                  {widgets.map((w, idx) => (
                    <span
                      key={idx}
                      className={`h-[76px] w-[76px] rounded-[16px] bg-white shadow-[0_8px_18px_rgba(2,39,113,0.08)] flex flex-col items-center justify-center gap-1 text-[11.5px] font-semibold ${
                        w.active ? "border-[1.5px] border-[#0070C2] text-[#004C87]" : "border border-transparent text-[#1C2433]"
                      }`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={w.d} />
                      </svg>
                      <span>{w.n}</span>
                    </span>
                  ))}
                </div>

                <div className="absolute right-0 bottom-0 w-[190px] bg-white rounded-[18px] p-4.5 px-5 shadow-[0_24px_50px_rgba(2,39,113,0.18)]">
                  <div className="text-[12.5px] text-[#5A6675]">Total spend</div>
                  <div className="mt-1.5 font-heading font-semibold text-[26px] text-[#000000]">PKR 5.8M</div>
                  <svg viewBox="0 0 150 34" aria-hidden="true" className="w-full h-[34px] mt-2">
                    <polyline points="0,26 22,24 44,27 66,22 88,24 110,16 130,10 150,12" fill="none" stroke="#0070C2" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Hierarchy */}
          <div className="flex gap-12 lg:gap-16 items-center flex-wrap">
            <div className="flex-1 min-w-[300px] lg:min-w-[380px]">
              <h3 className="m-0 font-heading font-semibold text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#000000]">
                From the big picture to a single ad.
              </h3>
              <p className="mt-3.5 max-w-[420px] text-[17px] leading-[1.55] text-[#5A6675]">
                Drill from platform to campaign, ad set and ad.
              </p>
              <Link
                href="/platform/dashboards"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0070C2] hover:text-[#005DA3] transition-colors"
              >
                <span>Hierarchy reports</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="flex-[1.3] min-w-[300px] lg:min-w-[520px] h-[340px] sm:h-[380px] rounded-[28px] bg-[#011640] relative overflow-hidden flex items-center justify-center p-6">
              <div
                aria-hidden="true"
                className="absolute -left-[140px] -bottom-[220px] w-[520px] h-[520px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(0,112,194,0.45) 0, rgba(1,22,64,0) 62%)",
                }}
              />
              <div className="relative flex flex-col gap-3.5 w-[380px] max-w-full">
                {crumbs.map((c, idx) => (
                  <span
                    key={idx}
                    style={{
                      marginLeft: c.indent,
                      backgroundColor: c.bg,
                      color: c.fg,
                    }}
                    className="self-start inline-flex items-center gap-2 rounded-[12px] py-2.5 px-3.5 text-[14px] font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.3)]"
                  >
                    <span style={{ color: c.tag }} className="text-[11px] font-semibold">
                      {c.level}
                    </span>
                    <span>{c.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Solutions & Industries ── */}
      <section className="py-24 lg:py-28 bg-[#F6F8FB]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center">
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-[-0.025em] text-[#000000]">
              Built for the teams that run paid media.
            </h2>
          </div>

          <div className="mt-14 flex gap-5 flex-wrap">
            {/* Card 1: Agencies */}
            <Link
              href="/solutions/agencies"
              className="flex-1 min-w-[300px] lg:min-w-[320px] bg-white rounded-[24px] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-150 shadow-sm"
            >
              <div className="h-[220px] bg-[#EEF5FC] flex items-center justify-center">
                <svg aria-hidden="true" width="170" height="170" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="h3-cube-sp" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#6CC0F5" />
                      <stop offset="50%" stopColor="#0070C2" />
                      <stop offset="100%" stopColor="#022771" />
                    </radialGradient>
                  </defs>
                  <polygon points="100,52 160,84 100,116 40,84" fill="#D6E8F8" />
                  <polygon points="40,84 100,116 100,180 40,148" fill="#3E8FD4" />
                  <polygon points="160,84 100,116 100,180 160,148" fill="#0070C2" />
                  <polyline points="40,84 100,116 160,84" fill="none" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.2" />
                  <circle cx="100" cy="66" r="18" fill="url(#h3-cube-sp)" />
                </svg>
              </div>
              <div className="p-6 sm:p-7 pb-7">
                <div className="font-heading text-[22px] font-semibold text-[#000000]">Agencies</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5A6675]">
                  Every client in one workspace, each with its own view.
                </div>
              </div>
            </Link>

            {/* Card 2: Brands */}
            <Link
              href="/solutions/brands"
              className="flex-1 min-w-[300px] lg:min-w-[320px] bg-white rounded-[24px] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-150 shadow-sm"
            >
              <div className="h-[220px] bg-[#EEF5FC] flex items-center justify-center">
                <svg aria-hidden="true" width="210" height="170" viewBox="0 0 240 200">
                  <defs>
                    <radialGradient id="h3-sp1" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#6CC0F5" />
                      <stop offset="50%" stopColor="#0070C2" />
                      <stop offset="100%" stopColor="#022771" />
                    </radialGradient>
                    <radialGradient id="h3-sp2" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#E6EEF7" />
                      <stop offset="100%" stopColor="#B7C6DA" />
                    </radialGradient>
                    <radialGradient id="h3-sp3" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#6CC0F5" />
                      <stop offset="50%" stopColor="#0070C2" />
                      <stop offset="100%" stopColor="#022771" />
                    </radialGradient>
                  </defs>
                  <circle cx="88" cy="112" r="56" fill="url(#h3-sp1)" />
                  <circle cx="166" cy="76" r="32" fill="url(#h3-sp2)" />
                  <circle cx="170" cy="150" r="20" fill="url(#h3-sp3)" />
                </svg>
              </div>
              <div className="p-6 sm:p-7 pb-7">
                <div className="font-heading text-[22px] font-semibold text-[#000000]">Brands</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5A6675]">
                  One view of paid media for marketing and leadership.
                </div>
              </div>
            </Link>

            {/* Card 3: Industries */}
            <Link
              href="/industries/banking-and-finance"
              className="flex-1 min-w-[300px] lg:min-w-[320px] bg-white rounded-[24px] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-150 shadow-sm"
            >
              <div className="h-[220px] bg-[#EEF5FC] flex items-center justify-center">
                <svg aria-hidden="true" width="210" height="170" viewBox="0 0 240 200">
                  <defs>
                    <linearGradient id="h3-ring" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#D6E8F8" />
                      <stop offset="50%" stopColor="#3E8FD4" />
                      <stop offset="100%" stopColor="#022771" />
                    </linearGradient>
                    <radialGradient id="h3-sp4" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#6CC0F5" />
                      <stop offset="50%" stopColor="#0070C2" />
                      <stop offset="100%" stopColor="#022771" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="120" cy="104" rx="92" ry="34" fill="none" stroke="url(#h3-ring)" strokeWidth="16" transform="rotate(-14 120 104)" />
                  <ellipse cx="120" cy="100" rx="92" ry="34" fill="none" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" transform="rotate(-14 120 100)" />
                  <circle cx="120" cy="104" r="30" fill="url(#h3-sp4)" />
                  <circle cx="204" cy="78" r="9" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="p-6 sm:p-7 pb-7">
                <div className="font-heading text-[22px] font-semibold text-[#000000]">Industries</div>
                <div className="mt-2.5 flex gap-1.5 flex-wrap">
                  {industries.map((i, idx) => (
                    <span
                      key={idx}
                      className="text-[13px] font-medium py-1 px-3 rounded-[14px] bg-[#EEF5FC] text-[#004C87]"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Client Testimonial / Social Proof ── */}
      <section className="py-20 lg:py-24 border-t border-[#EEF0F3] bg-white">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 box-border text-center">
          <p className="m-0 font-heading font-medium text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.3] tracking-[-0.015em] text-[#000000]">
            “Cerebro replaced three separate reporting tools for our media team. Our clients finally see clean, unified ROAS across Meta and Google without manual cross-checks.”
          </p>
          <div className="mt-8 inline-flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-full bg-[#E8F2FC] text-[#0070C2] font-heading font-semibold text-[16px] flex items-center justify-center shrink-0">
              TM
            </div>
            <div>
              <div className="font-semibold text-[15.5px] text-[#000000]">Tariq Mansoor</div>
              <div className="text-[14px] text-[#5A6675]">Head of Performance Marketing · Omnicom Media Group</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
