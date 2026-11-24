"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isPlaceholderHidden } from "@/lib/site";

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

  const heroLinks = [
    "M100 100 Q 224 224 280 280",
    "M460 100 Q 336 224 280 280",
    "M100 280 Q 190 280 280 280",
    "M460 280 Q 370 280 280 280",
    "M100 460 Q 224 336 280 280",
    "M460 460 Q 336 336 280 280",
  ];

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
      pillBg: "#EEF0FF",
      pillFg: "#3730A3",
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
    { level: "Platform", label: "Meta Ads", indent: "0px", bg: "rgba(255,255,255,0.1)", fg: "#FFFFFF", tag: "#A5B4FC" },
    { level: "Campaign", label: "Winter Collection", indent: "40px", bg: "rgba(255,255,255,0.14)", fg: "#FFFFFF", tag: "#A5B4FC" },
    { level: "Ad set", label: "Parents 28–45 | Feed", indent: "80px", bg: "rgba(255,255,255,0.18)", fg: "#FFFFFF", tag: "#A5B4FC" },
    { level: "Ad", label: "Product feed v2", indent: "120px", bg: "#FFFFFF", fg: "#101426", tag: "#4F46E5" },
  ];

  const industries = ["Banking", "Telecom", "FMCG", "E-commerce"];

  return (
    <div className="font-sans text-[#2B3040] bg-white min-w-0 tabular-nums">
      {/* ── 1. Hero Section ── */}
      <section id="top" className="py-12 lg:py-20 lg:pb-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 box-border flex gap-12 lg:gap-16 items-center flex-wrap">
          {/* Hero Left Content */}
          <div className="flex-1 min-w-[300px] lg:min-w-[460px]">
            <h1 className="m-0 font-heading font-semibold text-[36px] sm:text-[46px] lg:text-[68px] leading-[1.04] lg:leading-[1.02] tracking-[-0.035em] text-[#101426]">
              Your AI analyst for every ad platform.
            </h1>
            <p className="mt-5 lg:mt-6 max-w-[480px] text-[17px] lg:text-[19px] leading-[1.55] text-[#5B6170]">
              Bring in any marketing data. Cerebro AI cleans it, reports on it and answers your questions.
            </p>
            <div className="mt-7 lg:mt-8 flex gap-2.5 flex-wrap">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center h-11 px-[22px] rounded-[22px] bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[15px] font-semibold transition-colors shadow-sm"
              >
                Book a demo
              </Link>
              <a
                href="#ways"
                className="inline-flex items-center justify-center h-11 px-[22px] rounded-[22px] bg-white hover:bg-[#F3F4F6] border border-[#D5D8E0] text-[#101426] text-[15px] font-semibold transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Hero Right Visual (The Neural Grid Art) */}
          <div className="flex-1 min-w-[280px] lg:min-w-[480px] max-w-[560px] relative mx-auto w-full">
            <div className="relative w-full aspect-square rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#141244] shadow-2xl">
              {/* Radial glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(0,112,194,0.55) 0, rgba(0,112,194,0.16) 30%, rgba(20,18,68,0) 62%)",
                }}
              />
              <svg
                role="img"
                aria-label="The Cerebro mark at the center of a grid of nodes, with Meta, Google, TikTok, sheets and custom connectors flowing into it"
                viewBox="0 0 560 560"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <radialGradient id="h3-core" cx="40%" cy="32%" r="78%">
                    <stop offset="0%" stopColor="#6CC0F5" />
                    <stop offset="45%" stopColor="#0070C2" />
                    <stop offset="100%" stopColor="#022771" />
                  </radialGradient>
                </defs>
                {/* Tilted orbital rings */}
                <ellipse cx="280" cy="280" rx="262" ry="100" fill="none" stroke="rgba(255,255,255,0.08)" transform="rotate(-22 280 280)" />
                <ellipse cx="280" cy="280" rx="262" ry="100" fill="none" stroke="rgba(255,255,255,0.06)" transform="rotate(22 280 280)" />

                {/* Flow lines */}
                {heroLinks.map((l, idx) => (
                  <path
                    key={idx}
                    d={l}
                    fill="none"
                    stroke="rgba(165,180,252,0.55)"
                    strokeWidth="1.6"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                ))}

                {/* 5x5 Grid Nodes */}
                {/* Passive grid nodes */}
                {[
                  [190, 100], [280, 100], [370, 100],
                  [100, 190], [190, 190], [280, 190], [370, 190], [460, 190],
                  [190, 280], [370, 280],
                  [100, 370], [190, 370], [280, 370], [370, 370], [460, 370],
                  [190, 460], [280, 460], [370, 460]
                ].map(([nx, ny], idx) => (
                  <circle
                    key={idx}
                    cx={nx}
                    cy={ny}
                    r={20}
                    fill="rgba(255,255,255,0.03)"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="1.4"
                  />
                ))}

                {/* Active source nodes with logos */}
                {/* 1. Meta (100, 100) */}
                <circle cx="100" cy="100" r="34" fill="rgba(165,180,252,0.12)" />
                <circle cx="100" cy="100" r="24" fill="#FFFFFF" />
                <image href="/brand/platforms/meta.png" x="87" y="87" width="26" height="26" />

                {/* 2. Google Ads (460, 100) */}
                <circle cx="460" cy="100" r="34" fill="rgba(165,180,252,0.12)" />
                <circle cx="460" cy="100" r="24" fill="#FFFFFF" />
                <image href="/brand/platforms/google.png" x="447" y="87" width="26" height="26" />

                {/* 3. Custom connector + (100, 280) */}
                <circle cx="100" cy="280" r="34" fill="rgba(165,180,252,0.12)" />
                <circle cx="100" cy="280" r="24" fill="#FFFFFF" />
                <text x="100" y="286" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#4F46E5">+</text>

                {/* 4. AI sparkle ✦ (460, 280) */}
                <circle cx="460" cy="280" r="34" fill="rgba(165,180,252,0.12)" />
                <circle cx="460" cy="280" r="24" fill="#FFFFFF" />
                <text x="460" y="286" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#4F46E5">✦</text>

                {/* 5. TikTok (100, 460) */}
                <circle cx="100" cy="460" r="34" fill="rgba(165,180,252,0.12)" />
                <circle cx="100" cy="460" r="24" fill="#FFFFFF" />
                <image href="/brand/platforms/tiktok.png" x="87" y="447" width="26" height="26" />

                {/* 6. Upload ↑ (460, 460) */}
                <circle cx="460" cy="460" r="34" fill="rgba(165,180,252,0.12)" />
                <circle cx="460" cy="460" r="24" fill="#FFFFFF" />
                <text x="460" y="466" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#4F46E5">↑</text>

                {/* Center Core Node */}
                <circle cx="280" cy="280" r="98" fill="none" stroke="rgba(0,112,194,0.14)" strokeWidth="1" />
                <circle cx="280" cy="280" r="76" fill="none" stroke="rgba(0,112,194,0.25)" strokeWidth="10" />
                <circle cx="280" cy="280" r="64" fill="url(#h3-core)" />
              </svg>

              {/* Center Cerebro Mark */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14%]">
                <Image
                  src="/brand/cerebro-mark-white.svg"
                  alt="Cerebro"
                  width={78}
                  height={78}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Floating Ask Cerebro Dialog Card */}
            <div className="absolute -left-4 sm:-left-9 bottom-4 sm:bottom-12 w-[250px] bg-white rounded-[16px] shadow-[0_2px_6px_rgba(16,20,38,0.06),0_24px_56px_rgba(10,8,40,0.28)] p-3.5 sm:p-4 flex flex-col gap-2.5">
              <span className="self-end bg-[#F2F3F6] rounded-[12px_12px_4px_12px] py-1.5 px-3 text-[13px] text-[#101426]">
                Why did CPA rise?
              </span>
              <span className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#101426]">
                <span className="w-6 h-6 rounded-[8px] bg-[#EEF0FF] inline-flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                  </svg>
                </span>
                <span>TikTok drove the rise.</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Three Ways: Every source. One clean model. ── */}
      <section id="ways" className="py-20 lg:py-28 lg:pb-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center">
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-[-0.025em] text-[#101426]">
              Every source. One clean model.
            </h2>
            <p className="mt-3.5 mx-auto max-w-[560px] text-[17px] lg:text-[18px] leading-[1.5] text-[#5B6170]">
              Connect a platform, build a connector with AI, or upload a sheet.
            </p>
          </div>

          <div className="mt-14 flex gap-5 flex-wrap">
            {/* Card 1: Native Connectors */}
            <Link
              href="/integrations"
              className="flex-1 min-w-[300px] lg:min-w-[320px] flex flex-col gap-4.5 group"
            >
              <div className="h-[280px] rounded-[24px] bg-[#F1F2FF] relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.01] duration-150">
                <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
                  <defs>
                    <pattern id="h3-dots-1" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.1" fill="#C7CBF9" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#h3-dots-1)" opacity="0.6" />
                </svg>

                <div className="relative grid grid-cols-4 gap-3.5">
                  {/* Meta */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/meta.png" alt="Meta Ads" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* Google */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/google.png" alt="Google Ads" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* TikTok */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/tiktok.png" alt="TikTok Ads" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* Custom + */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] inline-flex items-center justify-center">
                    <span className="w-[30px] h-[30px] rounded-[9px] bg-[#4F46E5] text-white text-[10.5px] font-bold inline-flex items-center justify-center">+</span>
                  </span>
                  {/* CSV */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] inline-flex items-center justify-center">
                    <span className="w-[30px] h-[30px] rounded-[9px] bg-[#0F766E] text-white text-[10.5px] font-bold inline-flex items-center justify-center">CSV</span>
                  </span>
                  {/* Sheets */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] inline-flex items-center justify-center">
                    <Image src="/brand/platforms/sheets.svg" alt="Google Sheets" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px]" />
                  </span>
                  {/* LinkedIn (faded) */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] opacity-45 inline-flex items-center justify-center">
                    <Image src="/brand/platforms/linkedin.png" alt="LinkedIn (coming soon)" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px] grayscale" />
                  </span>
                  {/* DV360 (faded) */}
                  <span className="w-[58px] h-[58px] rounded-[16px] bg-white shadow-[0_10px_22px_rgba(28,26,87,0.10)] opacity-45 inline-flex items-center justify-center">
                    <Image src="/brand/platforms/dv360.png" alt="Display & Video 360 (coming soon)" width={30} height={30} className="w-[30px] h-[30px] object-contain rounded-[9px] grayscale" />
                  </span>
                </div>
              </div>
              <div>
                <div className="font-heading text-[21px] font-semibold text-[#101426]">Native connectors</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5B6170]">Meta, Google and TikTok in a few clicks.</div>
              </div>
            </Link>

            {/* Card 2: AI-built Connectors */}
            <Link
              href="/integrations"
              className="flex-1 min-w-[300px] lg:min-w-[320px] flex flex-col gap-4.5 group"
            >
              <div className="h-[280px] rounded-[24px] bg-[#141244] relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.01] duration-150">
                <div
                  aria-hidden="true"
                  className="absolute -left-[120px] -bottom-[180px] w-[420px] h-[420px] rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(0,112,194,0.45) 0, rgba(20,18,68,0) 62%)",
                  }}
                />
                <div className="relative w-[280px] rounded-[14px] bg-[#0D0B33] border border-white/12 shadow-[0_24px_50px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="flex justify-between items-center py-2.5 px-3.5 border-b border-white/8">
                    <span className="text-[12px] font-semibold text-white">Connector builder</span>
                    <span className="text-[10.5px] font-semibold text-[#C7D2FE] bg-[#4F46E5]/35 py-0.5 px-2 rounded-[9px]">
                      AI draft
                    </span>
                  </div>
                  <div className="p-3 px-3.5 font-mono text-[12px] leading-[1.7]">
                    <div><span className="text-[#CDD0F3]">{"{"}</span></div>
                    <div><span className="text-[#CDD0F3]">  </span><span className="text-[#A5B4FC]">"platform"</span><span className="text-[#CDD0F3]">: </span><span className="text-[#86EFAC]">"Local publisher"</span></div>
                    <div><span className="text-[#CDD0F3]">  </span><span className="text-[#A5B4FC]">"cost_local"</span><span className="text-[#CDD0F3]">: </span><span className="text-[#86EFAC]">"spend"</span></div>
                    <div><span className="text-[#CDD0F3]">  </span><span className="text-[#A5B4FC]">"imps"</span><span className="text-[#CDD0F3]">: </span><span className="text-[#86EFAC]">"impressions"</span></div>
                    <div><span className="text-[#CDD0F3]">{"}"}</span></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-heading text-[21px] font-semibold text-[#101426]">AI-built connectors</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5B6170]">Any other platform, drafted by Cerebro AI.</div>
              </div>
            </Link>

            {/* Card 3: Sheet Upload */}
            <Link
              href="/integrations"
              className="flex-1 min-w-[300px] lg:min-w-[320px] flex flex-col gap-4.5 group"
            >
              <div className="h-[280px] rounded-[24px] bg-[#F1F2FF] relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.01] duration-150">
                <div className="relative w-[300px] h-[200px]">
                  <svg aria-hidden="true" viewBox="0 0 300 200" className="absolute inset-0 w-full h-full">
                    <path d="M118 40 C 180 40, 180 100, 228 100" fill="none" stroke="#A5B4FC" strokeWidth="1.6" strokeDasharray="4 6" />
                    <path d="M118 100 C 170 100, 190 100, 228 100" fill="none" stroke="#A5B4FC" strokeWidth="1.6" strokeDasharray="4 6" />
                    <path d="M118 160 C 180 160, 180 100, 228 100" fill="none" stroke="#A5B4FC" strokeWidth="1.6" strokeDasharray="4 6" />
                  </svg>
                  {/* CSV pill */}
                  <span className="absolute left-0 top-[23px] inline-flex items-center gap-1.5 h-[34px] px-3 pl-1.5 rounded-[17px] bg-white shadow-[0_8px_18px_rgba(28,26,87,0.12)] text-[12.5px] font-semibold text-[#101426]">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-[#0F766E] text-white text-[9px] font-bold inline-flex items-center justify-center">CSV</span>
                    <span>CSV</span>
                  </span>
                  {/* Excel pill */}
                  <span className="absolute left-0 top-[83px] inline-flex items-center gap-1.5 h-[34px] px-3 pl-1.5 rounded-[17px] bg-white shadow-[0_8px_18px_rgba(28,26,87,0.12)] text-[12.5px] font-semibold text-[#101426]">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-[#166534] text-white text-[9px] font-bold inline-flex items-center justify-center">XLS</span>
                    <span>Excel</span>
                  </span>
                  {/* Sheets pill */}
                  <span className="absolute left-0 top-[143px] inline-flex items-center gap-1.5 h-[34px] px-3 pl-1.5 rounded-[17px] bg-white shadow-[0_8px_18px_rgba(28,26,87,0.12)] text-[12.5px] font-semibold text-[#101426]">
                    <span className="w-[22px] h-[22px] rounded-[6px] bg-[#0F9D58] text-white text-[9px] font-bold inline-flex items-center justify-center">S</span>
                    <span>Google Sheets</span>
                  </span>
                  {/* Converging Core */}
                  <span className="absolute left-[228px] top-[100px] w-[72px] h-[72px] -ml-9 -mt-9 rounded-full bg-[radial-gradient(circle_at_40%_32%,#6CC0F5_0,#0070C2_45%,#022771_100%)] shadow-[0_0_0_8px_rgba(0,112,194,0.12),0_16px_36px_rgba(2,39,113,0.3)] flex items-center justify-center">
                    <Image src="/brand/cerebro-mark-white.svg" alt="Cerebro" width={40} height={40} className="w-10 h-auto" />
                  </span>
                </div>
              </div>
              <div>
                <div className="font-heading text-[21px] font-semibold text-[#101426]">Sheet upload</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5B6170]">CSV, Excel and Google Sheets, mapped by AI.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Facts Band ── */}
      <section aria-label="Facts" className="relative overflow-hidden bg-[#1C1A57] py-20 lg:py-[88px]">
        <div
          aria-hidden="true"
          className="absolute -right-[200px] -top-[260px] w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,112,194,0.35) 0, rgba(28,26,87,0) 62%)",
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
              <div className="mt-3.5 text-[15.5px] text-[#CDD0F3]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Ask Cerebro Showcase ── */}
      <section id="ask" className="relative overflow-hidden bg-[#141244] py-20 lg:py-28 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[120px] -ml-[450px] w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,112,194,0.35) 0, rgba(0,112,194,0.08) 30%, rgba(20,18,68,0) 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center">
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-[-0.025em] text-white">
              Ask Cerebro. Get answers, not exports.
            </h2>
            <p className="mt-3.5 mx-auto max-w-[560px] text-[17px] lg:text-[18px] leading-[1.5] text-[#CDD0F3]">
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
              <span className="self-end bg-white rounded-[16px_16px_4px_16px] py-3 px-4 text-[15.5px] text-[#101426] shadow-[0_16px_36px_rgba(0,0,0,0.25)]">
                {curAsk.q}
              </span>
              {/* Answer card */}
              <div className="self-start w-[340px] max-w-full bg-white rounded-[18px] p-5 sm:p-5.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#4F46E5]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                  </svg>
                  <span>Ask Cerebro</span>
                </div>
                <div className="mt-3 flex items-center gap-2.5 flex-wrap">
                  <span className="font-heading text-[28px] font-semibold tracking-[-0.02em] text-[#101426]">
                    {curAsk.value}
                  </span>
                  <span
                    style={{ backgroundColor: curAsk.pillBg, color: curAsk.pillFg }}
                    className="text-[12.5px] font-semibold py-1 px-2.5 rounded-[10px]"
                  >
                    {curAsk.pill}
                  </span>
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.5] text-[#5B6170]">{curAsk.line}</p>
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
                      isSelected ? "text-white" : "text-[#A5B4FC]"
                    }`}
                  >
                    {t.title}
                  </span>
                  <span
                    className={`block mt-1.5 text-[14px] leading-[1.45] ${
                      isSelected ? "text-[#CDD0F3]" : "text-[#CDD0F3]/60"
                    }`}
                  >
                    {t.text}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-7 text-center text-[13px] text-[#A5B4FC]">
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
              <h3 className="m-0 font-heading font-semibold text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
                Judge every campaign by its own goal.
              </h3>
              <p className="mt-3.5 max-w-[420px] text-[17px] leading-[1.55] text-[#5B6170]">
                Reach campaigns on CPM, sales campaigns on CPA.
              </p>
              <Link
                href="/platform/objective-reporting"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors"
              >
                <span>Objective-based reporting</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="flex-[1.3] min-w-[300px] lg:min-w-[520px] h-[340px] sm:h-[380px] rounded-[28px] bg-[#F1F2FF] relative overflow-hidden flex items-center justify-center p-6">
              <div
                aria-hidden="true"
                className="absolute -right-[120px] -top-[140px] w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(165,180,252,0.7) 0, rgba(165,180,252,0) 65%)",
                }}
              />
              <div className="relative flex items-center gap-4 flex-wrap justify-center">
                <div className="w-[190px] bg-white rounded-[18px] p-5 shadow-[0_16px_36px_rgba(28,26,87,0.12)]">
                  <div className="text-[12.5px] text-[#5B6170]">Judged on CPA</div>
                  <div className="mt-2 font-heading font-semibold text-[28px] text-[#101426]">650.58</div>
                  <span className="inline-block mt-2.5 text-[11.5px] font-semibold py-1 px-2 rounded-[8px] bg-[#FEE2E2] text-[#991B1B]">
                    Looks worst
                  </span>
                </div>

                <span className="w-10 h-10 rounded-full bg-white shadow-[0_8px_20px_rgba(28,26,87,0.12)] inline-flex items-center justify-center text-[13px] font-semibold text-[#5B6170]">
                  vs
                </span>

                <div className="w-[190px] bg-white rounded-[18px] p-5 border-2 border-[#A5B4FC] shadow-[0_20px_44px_rgba(79,70,229,0.2)]">
                  <div className="text-[12.5px] text-[#4338CA]">Judged on its goal</div>
                  <div className="mt-2 font-heading font-semibold text-[28px] text-[#101426]">119.23</div>
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
              <h3 className="m-0 font-heading font-semibold text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
                Dashboards your team builds in clicks.
              </h3>
              <p className="mt-3.5 max-w-[420px] text-[17px] leading-[1.55] text-[#5B6170]">
                Widget-based, editable, and shared with every client.
              </p>
              <Link
                href="/platform/dashboards"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors"
              >
                <span>Dashboards</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="flex-[1.3] min-w-[300px] lg:min-w-[520px] h-[340px] sm:h-[380px] rounded-[28px] bg-[#F1F2FF] relative overflow-hidden flex items-center justify-center p-6">
              <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
                <defs>
                  <pattern id="h3-dots-2" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.1" fill="#C7CBF9" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#h3-dots-2)" opacity="0.6" />
              </svg>

              <div className="relative w-[420px] max-w-full h-[260px]">
                <div className="absolute left-0 top-5 grid grid-cols-3 gap-3">
                  {widgets.map((w, idx) => (
                    <span
                      key={idx}
                      className={`h-[76px] w-[76px] rounded-[16px] bg-white shadow-[0_8px_18px_rgba(28,26,87,0.08)] flex flex-col items-center justify-center gap-1 text-[11.5px] font-semibold ${
                        w.active ? "border-[1.5px] border-[#4F46E5] text-[#3730A3]" : "border border-transparent text-[#2B3040]"
                      }`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={w.d} />
                      </svg>
                      <span>{w.n}</span>
                    </span>
                  ))}
                </div>

                <div className="absolute right-0 bottom-0 w-[190px] bg-white rounded-[18px] p-4.5 px-5 shadow-[0_24px_50px_rgba(28,26,87,0.18)]">
                  <div className="text-[12.5px] text-[#5B6170]">Total spend</div>
                  <div className="mt-1.5 font-heading font-semibold text-[26px] text-[#101426]">PKR 5.8M</div>
                  <svg viewBox="0 0 150 34" aria-hidden="true" className="w-full h-[34px] mt-2">
                    <polyline points="0,26 22,24 44,27 66,22 88,24 110,16 130,10 150,12" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Hierarchy */}
          <div className="flex gap-12 lg:gap-16 items-center flex-wrap">
            <div className="flex-1 min-w-[300px] lg:min-w-[380px]">
              <h3 className="m-0 font-heading font-semibold text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
                From the big picture to a single ad.
              </h3>
              <p className="mt-3.5 max-w-[420px] text-[17px] leading-[1.55] text-[#5B6170]">
                Drill from platform to campaign, ad set and ad.
              </p>
              <Link
                href="/platform/dashboards"
                className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors"
              >
                <span>Hierarchy reports</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            <div className="flex-[1.3] min-w-[300px] lg:min-w-[520px] h-[340px] sm:h-[380px] rounded-[28px] bg-[#141244] relative overflow-hidden flex items-center justify-center p-6">
              <div
                aria-hidden="true"
                className="absolute -left-[140px] -bottom-[220px] w-[520px] h-[520px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(0,112,194,0.45) 0, rgba(20,18,68,0) 62%)",
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
      <section className="py-24 lg:py-28 bg-[#F7F8FA]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center">
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-[-0.025em] text-[#101426]">
              Built for the teams that run paid media.
            </h2>
          </div>

          <div className="mt-14 flex gap-5 flex-wrap">
            {/* Card 1: Agencies */}
            <Link
              href="/solutions/agencies"
              className="flex-1 min-w-[300px] lg:min-w-[320px] bg-white rounded-[24px] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-150 shadow-sm"
            >
              <div className="h-[220px] bg-[#F1F2FF] flex items-center justify-center">
                <svg aria-hidden="true" width="170" height="170" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="h3-cube-sp" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#6CC0F5" />
                      <stop offset="50%" stopColor="#0070C2" />
                      <stop offset="100%" stopColor="#022771" />
                    </radialGradient>
                  </defs>
                  <polygon points="100,52 160,84 100,116 40,84" fill="#E0E3FF" />
                  <polygon points="40,84 100,116 100,180 40,148" fill="#6B7FE8" />
                  <polygon points="160,84 100,116 100,180 160,148" fill="#4F46E5" />
                  <polyline points="40,84 100,116 160,84" fill="none" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.2" />
                  <circle cx="100" cy="66" r="18" fill="url(#h3-cube-sp)" />
                </svg>
              </div>
              <div className="p-6 sm:p-7 pb-7">
                <div className="font-heading text-[22px] font-semibold text-[#101426]">Agencies</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5B6170]">
                  Every client in one workspace, each with its own view.
                </div>
              </div>
            </Link>

            {/* Card 2: Brands */}
            <Link
              href="/solutions/brands"
              className="flex-1 min-w-[300px] lg:min-w-[320px] bg-white rounded-[24px] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-150 shadow-sm"
            >
              <div className="h-[220px] bg-[#F1F2FF] flex items-center justify-center">
                <svg aria-hidden="true" width="210" height="170" viewBox="0 0 240 200">
                  <defs>
                    <radialGradient id="h3-sp1" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#A9A5FF" />
                      <stop offset="50%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#2E2A82" />
                    </radialGradient>
                    <radialGradient id="h3-sp2" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#E6E8F5" />
                      <stop offset="100%" stopColor="#B9BEDA" />
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
                <div className="font-heading text-[22px] font-semibold text-[#101426]">Brands</div>
                <div className="mt-1.5 text-[15px] leading-[1.5] text-[#5B6170]">
                  One view of paid media for marketing and leadership.
                </div>
              </div>
            </Link>

            {/* Card 3: Industries */}
            <Link
              href="/industries/banking-and-finance"
              className="flex-1 min-w-[300px] lg:min-w-[320px] bg-white rounded-[24px] overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-150 shadow-sm"
            >
              <div className="h-[220px] bg-[#F1F2FF] flex items-center justify-center">
                <svg aria-hidden="true" width="210" height="170" viewBox="0 0 240 200">
                  <defs>
                    <linearGradient id="h3-ring" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#E0E3FF" />
                      <stop offset="50%" stopColor="#6B7FE8" />
                      <stop offset="100%" stopColor="#2E2A82" />
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
                <div className="font-heading text-[22px] font-semibold text-[#101426]">Industries</div>
                <div className="mt-2.5 flex gap-1.5 flex-wrap">
                  {industries.map((i, idx) => (
                    <span
                      key={idx}
                      className="text-[13px] font-medium py-1 px-3 rounded-[14px] bg-[#F1F2FF] text-[#3730A3]"
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

      {/* ── 7. Client Quote Slot (Hidden in production per rule 6 & 7) ── */}
      {!isPlaceholderHidden("[One approved client quote]") && (
        <section className="py-24">
          <div className="max-w-[920px] mx-auto px-6 lg:px-10 box-border text-center">
            <p className="m-0 font-heading font-medium text-[24px] sm:text-[34px] leading-[1.3] tracking-[-0.015em] text-[#9AA0AD]">
              “[One approved client quote, in their words, shown here once it is approved in writing.]”
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 text-[14px] text-[#6B7180]">
              <span className="w-9 h-9 rounded-full bg-[#ECEEF3]" />
              <span>[Name], [Role], [Company]</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
