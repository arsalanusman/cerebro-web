"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface AskTabItem {
  title: string;
  text: string;
  q: string;
  value: string;
  pill: string;
  pillBg: string;
  pillFg: string;
  line: string;
  source: string;
  sqlAudit: string;
}

interface CablePath {
  id: string;
  d: string;
  grad: string;
  dur: string;
  particleColor: string;
}

export function HomeV2() {
  // ── Hero State & Refs ──
  const canvasRef = useRef<HTMLDivElement>(null);
  const metaSocketRef = useRef<HTMLSpanElement>(null);
  const googleSocketRef = useRef<HTMLSpanElement>(null);
  const tiktokSocketRef = useRef<HTMLSpanElement>(null);
  const offlineSocketRef = useRef<HTMLSpanElement>(null);
  const coreLeftPortRef = useRef<HTMLSpanElement>(null);
  const coreRightPortRef = useRef<HTMLSpanElement>(null);
  const coreTopPortRef = useRef<HTMLSpanElement>(null);
  const coreBottomPortRef = useRef<HTMLSpanElement>(null);
  const askSocketRef = useRef<HTMLSpanElement>(null);
  const roasSocketRef = useRef<HTMLSpanElement>(null);

  const [cables, setCables] = useState<CablePath[]>([]);
  const [canvasSize, setCanvasSize] = useState({ w: 1200, h: 600 });
  const [heroPromptIdx, setHeroPromptIdx] = useState(0);
  const [isHeroThinking, setIsHeroThinking] = useState(false);

  // ── Section 2: Three Ways & Features State ──
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [aiConnectorPlatform, setAiConnectorPlatform] = useState<"publisher" | "snapchat" | "amazon">("publisher");
  const [activeSheetFormat, setActiveSheetFormat] = useState<"csv" | "excel" | "sheets">("csv");

  // ── Section 4: Ask Cerebro Studio State ──
  const [activeAskTab, setActiveAskTab] = useState(0);
  const [isAskThinking, setIsAskThinking] = useState(false);

  // ── Section 5: Feature Rows Interactive States ──
  const [objectiveViewMode, setObjectiveViewMode] = useState<"raw" | "cerebro">("cerebro");
  const [activeWidgetIdx, setActiveWidgetIdx] = useState(0);
  const [activeHierarchyLevel, setActiveHierarchyLevel] = useState(3); // 0: Platform, 1: Campaign, 2: Ad Set, 3: Ad
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  // ── Hero Question Templates ──
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

  const handleSelectHeroQuestion = (idx: number) => {
    if (idx === heroPromptIdx) return;
    setIsHeroThinking(true);
    setTimeout(() => {
      setHeroPromptIdx(idx);
      setIsHeroThinking(false);
    }, 320);
  };

  // ── Ask Cerebro Studio Data ──
  const askTabs: AskTabItem[] = [
    {
      title: "Why did it change?",
      text: "Pinpoints exact drivers of metric shifts across channels.",
      q: "Why did CPA rise last month?",
      value: "PKR 468.81",
      pill: "↑ 17.4%",
      pillBg: "#FEE2E2",
      pillFg: "#991B1B",
      line: "TikTok awareness campaign spend rose 48%, driving 82% of the blended CPA increase while generating 3,420 downstream assisted clicks.",
      source: "TikTok Marketing API & Google Analytics 4",
      sqlAudit: "SELECT attribution_source, SUM(spend)/NULLIF(SUM(conversions), 0) AS cpa FROM unified_facts GROUP BY 1;",
    },
    {
      title: "Who is responding?",
      text: "Breakdowns by demographic, platform, and placement.",
      q: "Which audience converts best on Meta?",
      value: "Women 25–34",
      pill: "PKR 312 CPA",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      line: "Women 25–34 on Meta Feed generates 4.1x ROAS at PKR 312 CPA, which is 21% below your cross-channel benchmark.",
      source: "Meta Ads Graph API v19.0",
      sqlAudit: "SELECT demographic_slice, blended_roas, cpa FROM audience_performance WHERE platform = 'meta' ORDER BY roas DESC LIMIT 1;",
    },
    {
      title: "What should we change?",
      text: "Actionable reallocation with modeled ROAS impact.",
      q: "How do we bring CPA down by 15%?",
      value: "+350 to +420",
      pill: "extra conv.",
      pillBg: "#E8F2FC",
      pillFg: "#004C87",
      line: "Reallocate PKR 300K from underperforming Broad Reach to Women 18–34 Feed. Modeled blended CPA drops from PKR 468 to PKR 398.",
      source: "Cerebro dNano Allocation Engine",
      sqlAudit: "WITH budget_sim AS (SELECT campaign_id, projected_roas FROM ml_budget_allocator) SELECT * FROM budget_sim;",
    },
    {
      title: "What can’t it see?",
      text: "Deterministic honesty: no hallucinated estimations.",
      q: "How many in-store sales did we drive?",
      value: "POS Offline Data",
      pill: "0 Hallucinations",
      pillBg: "#F1F2F5",
      pillFg: "#4B5160",
      line: "Offline Karachi & Lahore store POS uploaded via CSV shows PKR 8.4M revenue. 41% correlated with digital ad frequency.",
      source: "Offline POS Ingest & Server-Side Hash Match",
      sqlAudit: "SELECT store_id, SUM(pos_revenue) FROM offline_sales_fact WHERE hashed_phone IN (SELECT hashed_lead FROM ad_leads);",
    },
  ];

  const handleSelectAskTab = (idx: number) => {
    if (idx === activeAskTab) return;
    setIsAskThinking(true);
    setTimeout(() => {
      setActiveAskTab(idx);
      setIsAskThinking(false);
    }, 280);
  };

  const curAsk = askTabs[activeAskTab];

  // ── Dynamic SVG Cable Calculation with Sub-Pixel Precision ──
  const updateCables = useCallback(() => {
    if (!canvasRef.current) return;
    const cRect = canvasRef.current.getBoundingClientRect();
    if (cRect.width === 0 || cRect.height === 0) return;

    setCanvasSize({ w: Math.round(cRect.width), h: Math.round(cRect.height) });

    const getPt = (el: HTMLElement | null) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - cRect.left,
        y: r.top + r.height / 2 - cRect.top,
      };
    };

    const pMeta = getPt(metaSocketRef.current);
    const pGoogle = getPt(googleSocketRef.current);
    const pTikTok = getPt(tiktokSocketRef.current);
    const pOffline = getPt(offlineSocketRef.current);
    const pCoreLeft = getPt(coreLeftPortRef.current);
    const pCoreRight = getPt(coreRightPortRef.current);
    const pCoreTop = getPt(coreTopPortRef.current);
    const pCoreBottom = getPt(coreBottomPortRef.current);
    const pAsk = getPt(askSocketRef.current);
    const pRoas = getPt(roasSocketRef.current);

    // Desktop & Laptop (Horizontal Side-by-Side Pipeline)
    const isHorizontal = pCoreLeft && pMeta && pCoreLeft.x > pMeta.x + 50;

    if (isHorizontal && pCoreLeft && pCoreRight) {
      const makeCubic = (start: { x: number; y: number }, end: { x: number; y: number }) => {
        const dx = end.x - start.x;
        const c1x = start.x + dx * 0.45;
        const c1y = start.y;
        const c2x = start.x + dx * 0.78;
        const c2y = end.y;
        return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
      };

      const newCables: CablePath[] = [];
      if (pMeta) newCables.push({ id: "meta", d: makeCubic(pMeta, pCoreLeft), grad: "wire-grad-left", dur: "2.8s", particleColor: "#0070C2" });
      if (pGoogle) newCables.push({ id: "google", d: makeCubic(pGoogle, pCoreLeft), grad: "wire-grad-left", dur: "2.4s", particleColor: "#0070C2" });
      if (pTikTok) newCables.push({ id: "tiktok", d: makeCubic(pTikTok, pCoreLeft), grad: "wire-grad-left", dur: "3.0s", particleColor: "#0070C2" });
      if (pOffline) newCables.push({ id: "offline", d: makeCubic(pOffline, pCoreLeft), grad: "wire-grad-left", dur: "3.4s", particleColor: "#0070C2" });
      if (pAsk) newCables.push({ id: "ask", d: makeCubic(pCoreRight, pAsk), grad: "wire-grad-right", dur: "2.5s", particleColor: "#6CC0F5" });
      if (pRoas) newCables.push({ id: "roas", d: makeCubic(pCoreRight, pRoas), grad: "wire-grad-right", dur: "2.9s", particleColor: "#6CC0F5" });

      setCables(newCables);
    } else if (!isHorizontal && pCoreTop && pCoreBottom && pOffline && pAsk) {
      // Tablet & Mobile (Vertical Flow Spine)
      const makeVerticalCubic = (start: { x: number; y: number }, end: { x: number; y: number }) => {
        const dy = end.y - start.y;
        const c1x = start.x;
        const c1y = start.y + dy * 0.5;
        const c2x = end.x;
        const c2y = start.y + dy * 0.5;
        return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
      };

      setCables([
        { id: "v-in", d: makeVerticalCubic(pOffline, pCoreTop), grad: "wire-grad-vert", dur: "2.4s", particleColor: "#0070C2" },
        { id: "v-out", d: makeVerticalCubic(pCoreBottom, pAsk), grad: "wire-grad-vert", dur: "2.4s", particleColor: "#6CC0F5" },
      ]);
    }
  }, []);

  useEffect(() => {
    updateCables();
    const t1 = setTimeout(updateCables, 50);
    const t2 = setTimeout(updateCables, 300);
    const t3 = setTimeout(updateCables, 1000);

    const observer = new ResizeObserver(() => {
      updateCables();
    });

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    window.addEventListener("resize", updateCables);
    window.addEventListener("orientationchange", updateCables);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
      window.removeEventListener("resize", updateCables);
      window.removeEventListener("orientationchange", updateCables);
    };
  }, [updateCables]);

  // ── Widgets Data for Section 5 Dashboards ──
  const widgets = [
    { n: "KPI", d: "M4 4h16v16H4zM8 14l3-3 2 2 3-4", val: "PKR 5.84M", sub: "Total Ad Spend" },
    { n: "Trend", d: "M3 17l6-6 4 4 8-8", val: "3.82x ROAS", sub: "+18.4% vs target" },
    { n: "Donut", d: "M12 3a9 9 0 1 0 9 9h-9z", val: "Meta 54%", sub: "Google 32% · TikTok 14%" },
    { n: "Table", d: "M3 4h18v16H3zM3 10h18M9 4v16", val: "18.2K Conv.", sub: "PKR 240 Blended CPA" },
    { n: "Funnel", d: "M3 4h18l-7 8v6l-4 2v-8z", val: "68.4% Ret.", sub: "Cart to Checkout" },
    { n: "Ranked", d: "M8 6h13M8 12h10M8 18h7M3 6h.01M3 12h.01M3 18h.01", val: "Top Creative", sub: "Video Reel 4.8x ROAS" },
  ];

  const crumbs = [
    { level: "Platform", label: "Meta Ads", spend: "PKR 2.45M", roas: "4.1x", indent: "0px", bg: "rgba(255,255,255,0.08)", fg: "#FFFFFF", tag: "#8EC5F0" },
    { level: "Campaign", label: "Winter Collection", spend: "PKR 1.10M", roas: "4.3x", indent: "28px", bg: "rgba(255,255,255,0.12)", fg: "#FFFFFF", tag: "#8EC5F0" },
    { level: "Ad Set", label: "Women 25–34 | Feed", spend: "PKR 480K", roas: "4.6x", indent: "56px", bg: "rgba(255,255,255,0.18)", fg: "#FFFFFF", tag: "#8EC5F0" },
    { level: "Ad", label: "Reel v2 · Product Hero", spend: "PKR 185K", roas: "4.9x", indent: "84px", bg: "#FFFFFF", fg: "#000000", tag: "#0070C2" },
  ];

  const industries = [
    { name: "Banking & Fintech", kpi: "PKR 85 CAC", stat: "100% On-Premise Audit Compliance" },
    { name: "Telecom", kpi: "1.4M Daily Events", stat: "Real-time prepaid plan attribution" },
    { name: "FMCG", kpi: "41% Offline Lift", stat: "POS store data correlated with YouTube & TikTok" },
    { name: "E-commerce", kpi: "4.1x Blended ROAS", stat: "Automated daily budget shift to highest ROAS" },
  ];

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
          <div
            ref={canvasRef}
            className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#EEF5FC]/90 border border-[#BFD8F0]/90 shadow-[0_24px_70px_rgba(1,22,64,0.08),0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden p-6 sm:p-8 lg:p-10 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between"
          >
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
            <div className="relative z-20 flex items-center justify-between pb-4 border-b border-[#BFD8F0]/60 text-[12px] font-semibold text-[#004C87]">
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

            {/* ── THE NODE GRAPH STAGE (Desktop 3-Column Pipeline / Tablet & Mobile Stacked) ── */}
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto py-6">

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
                  <span ref={metaSocketRef} aria-hidden="true" className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)] z-30" />
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
                  <span ref={googleSocketRef} aria-hidden="true" className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)] z-30" />
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
                  <span ref={tiktokSocketRef} aria-hidden="true" className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)] z-30" />
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
                  <span ref={offlineSocketRef} aria-hidden="true" className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)] z-30" />
                </div>
              </div>

              {/* STAGE 2: CEREBRO dNANO NEURAL CORE (Center - Cols 5 to 7) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[300px] text-center px-4">
                {/* Luminous orbital rings and glowing brain center */}
                <div className="relative w-[190px] h-[190px] flex items-center justify-center">
                  {/* Micro Anchor Ports on the Core Sphere Perimeter for Sub-Pixel Cable Snapping */}
                  <span ref={coreLeftPortRef} className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 opacity-0 pointer-events-none" />
                  <span ref={coreRightPortRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 opacity-0 pointer-events-none" />
                  <span ref={coreTopPortRef} className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 opacity-0 pointer-events-none" />
                  <span ref={coreBottomPortRef} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 opacity-0 pointer-events-none" />

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

                {/* Core Title & Audit Indicator with clean clearance */}
                <div className="mt-5 text-center relative z-30 bg-[#EEF5FC]/90 backdrop-blur-xs py-1 px-3 rounded-xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0]">
                    <span>Cerebro dNano AI Core</span>
                  </div>
                  <p className="mt-1.5 text-[12px] text-[#5A6675] max-w-[280px] mx-auto leading-snug">
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
                  <span ref={askSocketRef} aria-hidden="true" className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)] z-30" />

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
                        onClick={() => handleSelectHeroQuestion(idx)}
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
                    {isHeroThinking ? (
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
                  <span ref={roasSocketRef} aria-hidden="true" className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0070C2] shadow-[0_0_8px_rgba(0,112,194,0.6)] z-30" />

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

            {/* ── DYNAMIC SUB-PIXEL SVG BEZIER CONNECTOR CABLES ── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              width={canvasSize.w}
              height={canvasSize.h}
              viewBox={`0 0 ${canvasSize.w} ${canvasSize.h}`}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="wire-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8EC5F0" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#0070C2" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#022771" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="wire-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#022771" stopOpacity="1" />
                  <stop offset="50%" stopColor="#0070C2" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#8EC5F0" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="wire-grad-vert" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8EC5F0" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#0070C2" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#022771" stopOpacity="1" />
                </linearGradient>
              </defs>

              {cables.map((cable) => (
                <g key={cable.id}>
                  {/* Dashed Guideline Path */}
                  <path
                    d={cable.d}
                    fill="none"
                    stroke="#BFD8F0"
                    strokeWidth="1.8"
                    strokeDasharray="4 6"
                  />
                  {/* Glowing Animated Gradient Stream */}
                  <path
                    d={cable.d}
                    fill="none"
                    stroke={`url(#${cable.grad})`}
                    strokeWidth="2.5"
                    className="animate-flow-stream"
                  />
                  {/* Moving Light Particle */}
                  <circle r="4" fill={cable.particleColor} filter="drop-shadow(0 0 6px #0070C2)">
                    <animateMotion path={cable.d} dur={cable.dur} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Canvas Bottom Bar */}
            <div className="relative z-20 pt-4 border-t border-[#BFD8F0]/60 flex items-center justify-between text-[11.5px] text-[#5A6675] flex-wrap gap-2">
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

      {/* ── 2. Unified Living Ingestion Canvas: Every source. One clean model. ── */}
      <section id="ways" className="py-20 lg:py-28 lg:pb-24 bg-white relative overflow-hidden">
        {/* Subtle dot matrix */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(#0070C2 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0] mb-4">
              <span>UNIFIED INGESTION ARCHITECTURE</span>
            </div>
            <h2 className="m-0 font-heading font-semibold text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.08] tracking-[-0.03em] text-[#000000]">
              Every source. One clean model.
            </h2>
            <p className="mt-3.5 mx-auto max-w-[620px] text-[17px] lg:text-[19px] leading-[1.5] text-[#5A6675]">
              Connect direct APIs, draft custom connectors with Cerebro AI in seconds, or drag-and-drop spreadsheets.
            </p>

            {/* Interactive Feature Cloud Exploration Pills */}
            <div className="mt-8 flex justify-center items-center gap-2.5 flex-wrap">
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
                      ? "bg-[#0070C2] text-white shadow-[0_4px_14px_rgba(0,112,194,0.3)] scale-[1.03]"
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

          {/* Living Canvas Frame for the 3 Ingestion Pathways */}
          <div className="mt-12 rounded-[32px] bg-[#EEF5FC]/80 border border-[#BFD8F0]/90 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(1,22,64,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

              {/* Card 1: Native Connectors */}
              <Link
                href="/integrations"
                className={`group rounded-[24px] bg-white p-6 border transition-all duration-300 flex flex-col justify-between ${
                  activeFeatureTab === 0
                    ? "border-[#0070C2] shadow-[0_12px_36px_rgba(0,112,194,0.18)] ring-2 ring-[#0070C2]/20"
                    : "border-[#E2E8F0] hover:border-[#0070C2]/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold text-[#0070C2] uppercase tracking-wider">Direct API Sync</span>
                    <span className="text-[10.5px] font-semibold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                      Zero Cookies
                    </span>
                  </div>

                  <div className="h-[210px] rounded-[18px] bg-[#EEF5FC]/60 border border-[#BFD8F0]/50 p-4 flex flex-col justify-center gap-3">
                    {/* Meta */}
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-[12px] border border-[#BFD8F0]/40 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <Image src="/brand/platforms/meta.png" alt="Meta Ads" width={22} height={22} className="object-contain" />
                        <span className="text-[13px] font-bold text-[#000000]">Meta Conversions API</span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#166534] bg-[#DCFCE7] px-1.5 py-0.5 rounded">Live</span>
                    </div>

                    {/* Google */}
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-[12px] border border-[#BFD8F0]/40 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <Image src="/brand/platforms/google.png" alt="Google Ads" width={22} height={22} className="object-contain" />
                        <span className="text-[13px] font-bold text-[#000000]">Google Ads API v16</span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#166534] bg-[#DCFCE7] px-1.5 py-0.5 rounded">Live</span>
                    </div>

                    {/* TikTok */}
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-[12px] border border-[#BFD8F0]/40 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <Image src="/brand/platforms/tiktok.png" alt="TikTok Ads" width={22} height={22} className="object-contain" />
                        <span className="text-[13px] font-bold text-[#000000]">TikTok Events API</span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#166534] bg-[#DCFCE7] px-1.5 py-0.5 rounded">Streaming</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-[20px] font-semibold text-[#000000] m-0">Native connectors</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#5A6675] m-0">
                    Direct server-to-server endpoints for Meta, Google, and TikTok with sub-minute sync.
                  </p>
                </div>
              </Link>

              {/* Card 2: AI-Built Connectors (Interactive Schema Draft) */}
              <div
                className={`rounded-[24px] bg-[#011640] p-6 border transition-all duration-300 flex flex-col justify-between ${
                  activeFeatureTab === 1
                    ? "border-[#0070C2] shadow-[0_12px_36px_rgba(0,112,194,0.35)] ring-2 ring-[#0070C2]/40"
                    : "border-white/10 hover:border-white/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold text-[#8EC5F0] uppercase tracking-wider">AI Schema Builder</span>
                    <span className="text-[10.5px] font-semibold text-[#C9DDF2] bg-[#0070C2]/40 px-2 py-0.5 rounded-full">
                      Drafted in 12s
                    </span>
                  </div>

                  {/* Platform Switcher Chips inside Card */}
                  <div className="flex gap-1.5 mb-2.5">
                    {(["publisher", "snapchat", "amazon"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setAiConnectorPlatform(p);
                        }}
                        className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                          aiConnectorPlatform === p
                            ? "bg-[#0070C2] text-white"
                            : "bg-white/10 text-[#C9DDF2] hover:bg-white/20"
                        }`}
                      >
                        {p === "publisher" ? "Local Publisher" : p === "snapchat" ? "Snapchat Ads" : "Amazon Ads"}
                      </button>
                    ))}
                  </div>

                  <div className="h-[180px] rounded-[18px] bg-[#00112E] border border-white/10 p-3.5 font-mono text-[11px] leading-[1.6] overflow-y-auto scrollbar-none">
                    <div className="text-[#C9DDF2]">{"{"}</div>
                    <div className="pl-3">
                      <span className="text-[#8EC5F0]">"platform"</span>: <span className="text-[#86EFAC]">"{aiConnectorPlatform === "publisher" ? "Local Publisher Portal" : aiConnectorPlatform === "snapchat" ? "Snap Marketing API" : "Amazon Sponsored Ads"}"</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#8EC5F0]">"spend_col"</span>: <span className="text-[#86EFAC]">"{aiConnectorPlatform === "publisher" ? "gross_pkr_billed" : "cost_micros"}"</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#8EC5F0]">"conv_target"</span>: <span className="text-[#86EFAC]">"{aiConnectorPlatform === "publisher" ? "verified_clicks" : "purchases_30d"}"</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#8EC5F0]">"normalization"</span>: <span className="text-[#86EFAC]">"PKR_to_USD_live"</span>
                    </div>
                    <div className="text-[#C9DDF2]">{"}"}</div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-[20px] font-semibold text-white m-0">AI-built connectors</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#C9DDF2] m-0">
                    Paste API documentation or sample exports; Cerebro AI generates certified schema connectors.
                  </p>
                </div>
              </div>

              {/* Card 3: Spreadsheets & Offline POS */}
              <div
                className={`group rounded-[24px] bg-white p-6 border transition-all duration-300 flex flex-col justify-between ${
                  activeFeatureTab === 2
                    ? "border-[#0070C2] shadow-[0_12px_36px_rgba(0,112,194,0.18)] ring-2 ring-[#0070C2]/20"
                    : "border-[#E2E8F0] hover:border-[#0070C2]/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-bold text-[#0070C2] uppercase tracking-wider">Unstructured Ingest</span>
                    <span className="text-[10.5px] font-semibold text-[#0070C2] bg-[#E8F2FC] px-2 py-0.5 rounded-full">
                      Auto-Mapped
                    </span>
                  </div>

                  {/* Format Switcher */}
                  <div className="flex gap-1.5 mb-2.5">
                    {(["csv", "excel", "sheets"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSheetFormat(fmt);
                        }}
                        className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                          activeSheetFormat === fmt
                            ? "bg-[#0070C2] text-white"
                            : "bg-[#F1F3F7] text-[#5A6675] hover:bg-[#E2E8F0]"
                        }`}
                      >
                        {fmt === "csv" ? "CSV / TSV" : fmt === "excel" ? "Excel (.xlsx)" : "Google Sheets"}
                      </button>
                    ))}
                  </div>

                  <div className="h-[180px] rounded-[18px] bg-[#EEF5FC]/60 border border-[#BFD8F0]/50 p-3.5 flex flex-col justify-center gap-2">
                    <div className="text-[11px] font-semibold text-[#004C87] flex items-center justify-between">
                      <span>Detected Columns</span>
                      <span className="text-[#166534]">✓ 100% Validated</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10.5px] font-semibold bg-white px-2 py-1 rounded-md border border-[#BFD8F0] text-[#000000]">
                        spend_local → <b>Ad Spend</b>
                      </span>
                      <span className="text-[10.5px] font-semibold bg-white px-2 py-1 rounded-md border border-[#BFD8F0] text-[#000000]">
                        lead_phone → <b>Hashed POS</b>
                      </span>
                      <span className="text-[10.5px] font-semibold bg-white px-2 py-1 rounded-md border border-[#BFD8F0] text-[#000000]">
                        branch_id → <b>Karachi / Lahore</b>
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-[#5A6675] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                      <span>Ready to correlate with digital ad spend</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-heading text-[20px] font-semibold text-[#000000] m-0">Spreadsheet upload</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#5A6675] m-0">
                    Drag-and-drop CSVs, Excel, or Google Sheets; AI aligns column headers and normalizes currencies.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. High-Tech Real-Time Telemetry Bar (Facts) ── */}
      <section aria-label="Facts" className="relative overflow-hidden bg-[#011640] py-16 lg:py-20 border-y border-[#0070C2]/30">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(#0070C2 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 box-border grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { big: "3", unit: "Native APIs", label: "Direct Meta, Google & TikTok streaming sync with zero cookie drops." },
            { big: "12s", unit: "AI Builder", label: "Draft custom API connector schemas with automated JSON verification." },
            { big: "0", unit: "Cookies Dropped", label: "100% server-side hashed event matching and privacy compliance." },
            { big: "<450ms", unit: "Query Latency", label: "Deterministic cross-channel AI answers with audited SQL lineage." },
          ].map((f, idx) => (
            <div key={idx} className="border-l border-white/16 pl-6 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-semibold text-[38px] sm:text-[48px] lg:text-[56px] tracking-[-0.035em] text-white leading-none">
                    {f.big}
                  </span>
                  <span className="text-[13px] font-bold text-[#8EC5F0] uppercase tracking-wider">{f.unit}</span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-[#C9DDF2]">{f.label}</p>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#86EFAC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] animate-ping" />
                <span>Live Telemetry Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Ask Cerebro Showcase (AI Analyst Studio) ── */}
      <section id="ask" className="relative overflow-hidden bg-[#011640] py-20 lg:py-28 lg:pb-24">
        {/* Luminous Core Glow in Background */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl bg-[radial-gradient(circle,_#0070C2_0%,_#022771_70%)]"
        />

        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center max-w-[760px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#8EC5F0] text-[12.5px] font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0070C2] animate-pulse" />
              <span>INTERACTIVE ANALYST WORKBENCH</span>
            </div>
            <h2 className="m-0 font-heading font-semibold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] text-white">
              Ask Cerebro. Get answers, not exports.
            </h2>
            <p className="mt-3.5 mx-auto max-w-[560px] text-[17px] lg:text-[19px] leading-[1.5] text-[#C9DDF2]">
              Plain natural language questions, synthesized with full audit lineage and zero hallucinations.
            </p>
          </div>

          {/* Question Category Tabs */}
          <div className="mt-10 flex gap-3 flex-wrap justify-center">
            {askTabs.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectAskTab(idx)}
                className={`px-4 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  activeAskTab === idx
                    ? "bg-[#0070C2] text-white shadow-[0_4px_16px_rgba(0,112,194,0.4)] scale-[1.02]"
                    : "bg-white/8 hover:bg-white/16 text-[#C9DDF2] border border-white/12"
                }`}
              >
                <span>{t.title}</span>
                <span className="text-[11px] opacity-75">{idx === 0 ? "· CPA Spike" : idx === 1 ? "· Demographics" : idx === 2 ? "· Allocation" : "· Boundaries"}</span>
              </button>
            ))}
          </div>

          {/* Interactive AI Studio Workbench */}
          <div className="mt-10 rounded-[32px] bg-white/[0.04] border border-white/12 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: The Synthesized Answer Card */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* User Prompt Bubble */}
                <div className="self-end inline-flex items-center gap-2 bg-white rounded-[16px_16px_4px_16px] py-2.5 px-4 text-[14.5px] font-medium text-[#000000] shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
                  <span>{curAsk.q}</span>
                </div>

                {/* AI Analyst Response Card */}
                <div className="self-start w-full bg-white rounded-[20px] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-[#BFD8F0]/40">
                  <div className="flex items-center justify-between border-b border-[#F0F2F6] pb-3">
                    <div className="flex items-center gap-2 text-[13px] font-bold text-[#0070C2]">
                      <span className="w-5 h-5 rounded-[6px] bg-[#0070C2] text-white inline-flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                        </svg>
                      </span>
                      <span>Cerebro dNano Analyst</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                      Audited Response
                    </span>
                  </div>

                  {isAskThinking ? (
                    <div className="py-8 flex flex-col items-center justify-center gap-3 text-[#0070C2]">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0070C2] animate-bounce" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0070C2] animate-bounce [animation-delay:0.15s]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0070C2] animate-bounce [animation-delay:0.3s]" />
                      </div>
                      <span className="text-[13px] font-semibold">Running deterministic SQL audit query...</span>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-[32px] font-bold text-[#000000]">
                          {curAsk.value}
                        </span>
                        <span
                          style={{ backgroundColor: curAsk.pillBg, color: curAsk.pillFg }}
                          className="text-[13px] font-bold py-1 px-3 rounded-[10px]"
                        >
                          {curAsk.pill}
                        </span>
                      </div>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#1C2433]">{curAsk.line}</p>
                      <div className="mt-4 pt-3 border-t border-[#F0F2F6] flex items-center justify-between text-[11.5px] font-medium text-[#5A6675]">
                        <span className="text-[#005DA3] font-semibold">✓ Verified from {curAsk.source}</span>
                        <span>Multi-touch hash validated</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Deterministic Audit Trail & SQL Lineage */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="rounded-[20px] bg-[#00112E] border border-white/12 p-5 text-[12px] font-mono leading-[1.6]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#8EC5F0]">
                    <span>Deterministic Lineage</span>
                    <span className="text-[#86EFAC]">Zero Hallucinations</span>
                  </div>
                  <div className="text-[#C9DDF2]/70 text-[11px] mb-2">// Executed against unified warehouse:</div>
                  <div className="bg-black/40 p-3 rounded-[10px] text-[#C9DDF2] text-[11.5px] overflow-x-auto scrollbar-none border border-white/5">
                    {curAsk.sqlAudit}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#8EC5F0]">
                    <span>Execution Time: 38ms</span>
                    <span>Confidence Score: 100%</span>
                  </div>
                </div>

                <div className="rounded-[16px] bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#0070C2]/30 text-[#8EC5F0] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div className="text-[12.5px] text-[#C9DDF2] leading-snug">
                    <b className="text-white">Enterprise Proof:</b> Every insight can be inspected down to the raw API timestamp and campaign hash.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Feature Deep Dives (Interactive Architecture Canvas) ── */}
      <section className="py-20 lg:py-28 bg-[#FAFBFD] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 box-border flex flex-col gap-24">

          {/* Feature 1: Objective Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0] mb-3">
                <span>OBJECTIVE TAXONOMY ENGINE</span>
              </div>
              <h3 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1] tracking-[-0.025em] text-[#000000]">
                Judge every campaign by its own true goal.
              </h3>
              <p className="mt-4 text-[16.5px] leading-relaxed text-[#5A6675]">
                Judging an awareness campaign on CPA makes it look broken. Cerebro automatically classifies campaigns into unified taxonomies so awareness is evaluated on CPM, and conversion campaigns on CPA.
              </p>

              {/* Interactive View Mode Switcher */}
              <div className="mt-6 flex items-center gap-2 p-1.5 bg-[#EEF5FC] rounded-full border border-[#BFD8F0] w-fit">
                <button
                  type="button"
                  onClick={() => setObjectiveViewMode("raw")}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                    objectiveViewMode === "raw" ? "bg-white text-[#000000] shadow-xs" : "text-[#5A6675]"
                  }`}
                >
                  Raw Platform View (Flawed)
                </button>
                <button
                  type="button"
                  onClick={() => setObjectiveViewMode("cerebro")}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                    objectiveViewMode === "cerebro" ? "bg-[#0070C2] text-white shadow-xs" : "text-[#5A6675]"
                  }`}
                >
                  Cerebro Normalized View
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-[28px] bg-[#EEF5FC] border border-[#BFD8F0] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[540px]">
                {/* Campaign Card 1: Awareness */}
                <div className={`p-5 rounded-[20px] bg-white transition-all ${objectiveViewMode === "raw" ? "border-2 border-[#FCA5A5]" : "border border-[#E2E8F0]"}`}>
                  <div className="text-[12px] font-semibold text-[#5A6675]">Brand Awareness Video</div>
                  {objectiveViewMode === "raw" ? (
                    <div>
                      <div className="mt-2 text-[26px] font-heading font-bold text-[#991B1B]">PKR 650.58</div>
                      <span className="mt-2 inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#FEE2E2] text-[#991B1B]">
                        Judged on CPA (Misleading)
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="mt-2 text-[26px] font-heading font-bold text-[#166534]">PKR 119.23</div>
                      <span className="mt-2 inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#DCFCE7] text-[#166534]">
                        Best CPM (Goal Aligned)
                      </span>
                    </div>
                  )}
                </div>

                {/* Campaign Card 2: Performance Search */}
                <div className="p-5 rounded-[20px] bg-white border border-[#E2E8F0]">
                  <div className="text-[12px] font-semibold text-[#5A6675]">Google Performance Max</div>
                  <div className="mt-2 text-[26px] font-heading font-bold text-[#0070C2]">PKR 240.10</div>
                  <span className="mt-2 inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#E8F2FC] text-[#004C87]">
                    Judged on Purchases
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Interactive Dashboards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0] mb-3">
                <span>COLLABORATIVE DASHBOARDS</span>
              </div>
              <h3 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1] tracking-[-0.025em] text-[#000000]">
                Dashboards your team builds in clicks.
              </h3>
              <p className="mt-4 text-[16.5px] leading-relaxed text-[#5A6675]">
                Click to add KPI cards, trend sparklines, channel allocation donuts, and granular ad-set ranking tables. No complicated SQL formulas required.
              </p>
            </div>

            <div className="lg:col-span-7 lg:order-1 rounded-[28px] bg-[#EEF5FC] border border-[#BFD8F0] p-6 sm:p-8 relative overflow-hidden">
              <div className="flex flex-col gap-5">
                {/* Clickable Widgets Bar */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {widgets.map((w, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveWidgetIdx(idx)}
                      className={`p-3 rounded-[16px] bg-white transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        activeWidgetIdx === idx
                          ? "border-2 border-[#0070C2] shadow-[0_4px_16px_rgba(0,112,194,0.2)] text-[#0070C2]"
                          : "border border-transparent text-[#5A6675] hover:border-[#BFD8F0]"
                      }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={w.d} />
                      </svg>
                      <span className="text-[11px] font-bold">{w.n}</span>
                    </button>
                  ))}
                </div>

                {/* Active Widget Live Preview */}
                <div className="bg-white rounded-[20px] p-6 border border-[#BFD8F0] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-[12.5px] text-[#5A6675] font-semibold">{widgets[activeWidgetIdx].sub}</div>
                    <div className="mt-1 font-heading text-[32px] font-bold text-[#000000]">
                      {widgets[activeWidgetIdx].val}
                    </div>
                  </div>
                  <div className="w-[120px] h-[34px]">
                    <svg viewBox="0 0 150 34" className="w-full h-full">
                      <polyline points="0,26 22,24 44,27 66,22 88,24 110,16 130,10 150,12" fill="none" stroke="#0070C2" strokeWidth="2.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Full Ad Hierarchy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0] mb-3">
                <span>DRILL-DOWN ATTRIBUTION</span>
              </div>
              <h3 className="m-0 font-heading font-semibold text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.1] tracking-[-0.025em] text-[#000000]">
                From the macro portfolio down to a single reel.
              </h3>
              <p className="mt-4 text-[16.5px] leading-relaxed text-[#5A6675]">
                Effortlessly zoom in from cross-channel spend down to specific campaign objectives, target audience sets, and individual video ad creative performance.
              </p>
            </div>

            <div className="lg:col-span-7 rounded-[28px] bg-[#011640] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
              <div className="flex flex-col gap-3">
                {crumbs.map((c, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveHierarchyLevel(idx)}
                    style={{ marginLeft: c.indent }}
                    className={`text-left inline-flex items-center justify-between gap-4 rounded-[14px] p-3 px-4 transition-all cursor-pointer ${
                      activeHierarchyLevel === idx
                        ? "bg-white text-[#000000] shadow-[0_12px_28px_rgba(0,0,0,0.35)] scale-[1.01]"
                        : "bg-white/10 text-white hover:bg-white/16"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${activeHierarchyLevel === idx ? "bg-[#E8F2FC] text-[#0070C2]" : "bg-white/10 text-[#8EC5F0]"}`}>
                        {c.level}
                      </span>
                      <span className="font-semibold text-[14px]">{c.label}</span>
                    </div>
                    <div className="text-[12.5px] font-bold">
                      <span>{c.spend}</span> · <span className={activeHierarchyLevel === idx ? "text-[#166534]" : "text-[#86EFAC]"}>{c.roas} ROAS</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. Solutions & Enterprise Verticals ── */}
      <section className="py-20 lg:py-28 bg-[#F6F8FB]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 box-border">
          <div className="text-center max-w-[720px] mx-auto">
            <h2 className="m-0 font-heading font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.025em] text-[#000000]">
              Built for performance marketing leaders.
            </h2>
            <p className="mt-3.5 text-[17px] leading-relaxed text-[#5A6675]">
              Whether managing multiple agency accounts or enterprise brand budgets, Cerebro dNano unifies your marketing operations.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Agencies */}
            <Link
              href="/solutions/agencies"
              className="group bg-white rounded-[24px] p-8 border border-[#E2E8F0] hover:border-[#0070C2] hover:shadow-[0_12px_36px_rgba(0,112,194,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] font-bold text-[#0070C2] uppercase tracking-wider">Multi-Client Portfolios</span>
                <h3 className="font-heading text-[24px] font-semibold text-[#000000] mt-3">Agencies</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5A6675]">
                  Manage 50+ clients under one roof with client-facing role permissions and automated white-label weekly performance summaries.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0F2F6] flex items-center justify-between text-[13px] font-semibold text-[#0070C2]">
                <span>Explore Agency Features</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Brands */}
            <Link
              href="/solutions/brands"
              className="group bg-white rounded-[24px] p-8 border border-[#E2E8F0] hover:border-[#0070C2] hover:shadow-[0_12px_36px_rgba(0,112,194,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] font-bold text-[#0070C2] uppercase tracking-wider">Single Source of Truth</span>
                <h3 className="font-heading text-[24px] font-semibold text-[#000000] mt-3">Direct-to-Consumer & Brands</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5A6675]">
                  Unify in-store sales, website checkouts, and advertising budgets into one clean ROAS model that leadership can rely on.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0F2F6] flex items-center justify-between text-[13px] font-semibold text-[#0070C2]">
                <span>Explore Brand Solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Enterprise Verticals */}
            <div className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-bold text-[#0070C2] uppercase tracking-wider">Enterprise Compliance</span>
                <h3 className="font-heading text-[24px] font-semibold text-[#000000] mt-3">Regulated Industries</h3>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {industries.map((ind, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndustryIdx(idx)}
                      className={`text-[11.5px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                        activeIndustryIdx === idx
                          ? "bg-[#0070C2] text-white"
                          : "bg-[#EEF5FC] text-[#004C87] hover:bg-[#D6E8F8]"
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-3.5 rounded-[16px] bg-[#EEF5FC]/80 border border-[#BFD8F0]/60">
                  <div className="text-[14px] font-bold text-[#000000]">{industries[activeIndustryIdx].kpi}</div>
                  <div className="text-[12px] text-[#5A6675] mt-0.5">{industries[activeIndustryIdx].stat}</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0F2F6] text-[13px] font-semibold text-[#5A6675]">
                SOC-2 & On-Premises Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Verified Client ROI & Testimonial ── */}
      <section className="py-20 lg:py-24 border-t border-[#EEF0F3] bg-white">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-10 box-border text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] text-[12px] font-bold mb-6">
            <span>VERIFIED OUTCOME CASE STUDY</span>
          </div>
          <p className="m-0 font-heading font-medium text-[24px] sm:text-[32px] lg:text-[38px] leading-[1.3] tracking-[-0.02em] text-[#000000]">
            “Cerebro replaced three disconnected reporting tools for our media team. Our executives finally see unified, clean ROAS across Meta, Google, and TikTok without manual cross-checks.”
          </p>
          <div className="mt-8 inline-flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#E8F2FC] text-[#0070C2] font-heading font-bold text-[16px] flex items-center justify-center shrink-0">
              TM
            </div>
            <div>
              <div className="font-bold text-[16px] text-[#000000]">Tariq Mansoor</div>
              <div className="text-[14px] text-[#5A6675]">Head of Performance Marketing · Omnicom Media Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Panoramic Final Launchpad CTA ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-[#F4F8FC] to-[#EEF5FC] border-t border-[#BFD8F0]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2FC] text-[#004C87] text-[12px] font-bold border border-[#BFD8F0] mb-4">
            <span>GET STARTED TODAY</span>
          </div>
          <h2 className="m-0 font-heading font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#000000]">
            Deploy Cerebro dNano across your ad stack.
          </h2>
          <p className="mt-4 max-w-[620px] mx-auto text-[17px] lg:text-[19px] leading-relaxed text-[#5A6675]">
            Connect your Meta, Google, and TikTok accounts in minutes. Zero tracking cookies required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-full bg-[#0070C2] hover:bg-[#005DA3] text-white text-[16px] font-semibold transition-all shadow-[0_4px_18px_rgba(0,112,194,0.3)] hover:shadow-[0_6px_28px_rgba(0,112,194,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book a demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/platform/data-engine"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-white hover:bg-[#F6F8FB] border border-[#CBD5E1] text-[#1C2433] text-[16px] font-semibold transition-all hover:border-[#0070C2] hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
            >
              Explore the data engine
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
