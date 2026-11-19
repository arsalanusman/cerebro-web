"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { heroData, HeroQuestion, HeroKpi, HeroPlatformMix } from "@/content/home";

function pts(vals: number[], w: number, h: number, max: number): string {
  return vals
    .map((v, i) => {
      const x = Math.round((i / (vals.length - 1)) * w * 10) / 10;
      const y = Math.round((h - 6 - (v / max) * (h - 16)) * 10) / 10;
      return `${x},${y}`;
    })
    .join(" ");
}

export default function HeroDashboard() {
  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isReduced, setIsReduced] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReduced(mq.matches);
    } catch {}
  }, []);

  const currentQ: HeroQuestion = heroData.questions[qIndex];
  const stepCount = currentQ.steps.length;
  const isDone = phase > stepCount || isReduced;
  const isWorking = !isDone;

  const playQuestion = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setQIndex(idx);
    if (isReduced) {
      setPhase(heroData.questions[idx].steps.length + 1);
      return;
    }
    setPhase(0);
    let p = 0;
    const n = heroData.questions[idx].steps.length;
    timerRef.current = setInterval(() => {
      p += 1;
      setPhase(p);
      if (p > n) {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 450);
  };

  useEffect(() => {
    playQuestion(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isReduced]);

  const visibleSteps = isDone
    ? currentQ.steps
    : currentQ.steps.slice(0, Math.min(phase, currentQ.steps.length));

  const curPts = pts(heroData.curPoints, 560, 160, 360);
  const prevPts = pts(heroData.prevPoints, 560, 160, 360);

  const sidebarNav = [
    { label: "Overview", active: true, d: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" },
    { label: "Campaigns", active: false, d: "M4 6h16M4 12h16M4 18h7" },
    { label: "Audiences", active: false, d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
    { label: "Creatives", active: false, d: "M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" },
    { label: "Reports", active: false, d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" },
    { label: "Settings", active: false, d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-center gap-6 lg:gap-0 mt-12 lg:mt-16 max-w-full">
        {/* 1. Dashboard Mockup */}
        <div className="flex-1 min-w-0 max-w-full overflow-x-auto rounded-2xl shadow-[0_30px_70px_rgba(10,8,40,0.35)] border border-[#DCDFE7] bg-white">
          <div className="min-w-[720px] lg:min-w-[760px] h-[600px] flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-[172px] shrink-0 border-r border-[#EEF0F3] p-[18px_10px] flex flex-col gap-4 bg-white">
              <div className="flex items-center gap-2 pl-1.5">
                <Image
                  src="/brand/logo.png"
                  alt="Cerebro"
                  width={90}
                  height={22}
                  className="h-5 w-auto"
                  priority
                />
              </div>

              <div className="flex flex-col gap-0.5">
                {sidebarNav.map((n, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs ${
                      n.active
                        ? "bg-[#EEF0FF] text-[#4F46E5] font-semibold"
                        : "text-[#5B6170] hover:text-[#101426] font-normal"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={n.d} />
                    </svg>
                    {n.label}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 p-2 border-t border-[#EEF0F3]">
                <span className="w-6 h-6 rounded-full bg-[#4F46E5] text-white text-[11px] font-semibold flex items-center justify-center">
                  A
                </span>
                <span className="flex flex-col text-[11px] leading-tight">
                  <span className="text-[#101426] font-semibold">Ayesha Khan</span>
                  <span className="text-[#6B7180]">Sample Agency</span>
                </span>
              </div>
            </div>

            {/* Dashboard Main Area */}
            <div className="flex-1 min-w-0 bg-[#FAFAFC] flex flex-col">
              {/* Dashboard Topbar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-[#EEF0F3]">
                <div>
                  <div className="text-[14.5px] font-semibold text-[#101426]">
                    Executive overview
                  </div>
                  <div className="text-[11px] text-[#6B7180] mt-0.5">
                    Quillmere Textiles, data up to 18 Nov 2026
                  </div>
                </div>
                <span className="inline-flex items-center h-7 px-3 rounded-md bg-[#4F46E5] text-white text-[11.5px] font-semibold shadow-sm cursor-default">
                  Edit dashboard
                </span>
              </div>

              {/* 6 KPI Cards Grid */}
              <div className="p-[14px_20px_0] grid grid-cols-3 gap-2.5">
                {heroData.kpis.map((k, i) => {
                  const isHighlighted = isDone && currentQ.kpi.includes(k.label);
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-lg p-[11px_13px] border transition-all duration-300 ${
                        isHighlighted
                          ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/30 bg-[#EEF0FF]/40"
                          : "border-[#E8EAEF]"
                      }`}
                    >
                      <div className="flex justify-between items-center gap-1.5">
                        <span className="text-[11px] text-[#5B6170]">{k.label}</span>
                        <span
                          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                            k.tone === "positive"
                              ? "bg-[#DCFCE7] text-[#166534]"
                              : k.tone === "negative"
                              ? "bg-[#FEE2E2] text-[#991B1B]"
                              : "bg-[#F3F4F6] text-[#4B5563]"
                          }`}
                        >
                          {k.delta}
                        </span>
                      </div>
                      <div className="mt-1 text-xl font-semibold text-[#101426] tracking-tight">
                        {k.value}
                      </div>
                      <div className="mt-0.5 text-[10.5px] text-[#6B7180]">{k.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* Trend and Platform Mix Row */}
              <div className="p-[10px_20px_16px] flex gap-2.5 flex-1 min-h-0">
                {/* Spend Trend Sparkline */}
                <div className="flex-1 min-w-0 bg-white border border-[#E8EAEF] rounded-lg p-3 flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#101426]">Spend trend</span>
                    <span className="flex gap-2.5 text-[10px] text-[#5B6170]">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-3 h-0.5 bg-[#2E2A82]"></span>Current
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="w-3 border-t-2 border-dotted border-[#8B9AE8]"></span>
                        Previous
                      </span>
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 560 160"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Spend trend, current 30 days against the previous 30 days"
                    className="w-full flex-1 min-h-[120px] mt-2"
                  >
                    <line x1="0" y1="150" x2="560" y2="150" stroke="#EEF0F3" strokeWidth="1" />
                    <line x1="0" y1="80" x2="560" y2="80" stroke="#F3F4F6" strokeWidth="1" />
                    <polyline
                      points={prevPts}
                      fill="none"
                      stroke="#8B9AE8"
                      strokeWidth="2"
                      strokeDasharray="3 4"
                      strokeLinecap="round"
                    />
                    <polyline
                      points={curPts}
                      fill="none"
                      stroke="#2E2A82"
                      strokeWidth="2.25"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Platform Mix */}
                <div className="w-[188px] shrink-0 bg-white border border-[#E8EAEF] rounded-lg p-3 flex flex-col gap-2">
                  <span className="text-xs font-semibold text-[#101426]">Platform mix</span>
                  {heroData.platformMix.map((m, i) => {
                    const isHighlighted = isDone && currentQ.mix.includes(m.name);
                    return (
                      <div
                        key={i}
                        className={`p-1.5 -mx-1.5 rounded-md transition-colors duration-300 ${
                          isHighlighted ? "bg-[#EEF0FF]" : "bg-transparent"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[11px]">
                          <span className="text-[#2B3040] flex items-center gap-1.5">
                            {m.logo && (
                              <Image
                                src={m.logo}
                                alt={m.name}
                                width={13}
                                height={13}
                                className="object-contain shrink-0"
                              />
                            )}
                            <span>{m.name}</span>
                          </span>
                          <span className="text-[#101426] font-semibold">{m.spend}</span>
                        </div>
                        <div className="mt-1 h-1.5 rounded-full bg-[#F0F1F4] overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              m.name === "TikTok Ads"
                                ? "bg-[#111827]"
                                : m.name === "Meta Ads"
                                ? "bg-[#1877F2]"
                                : "bg-[#15803D]"
                            }`}
                            style={{ width: m.spendPct }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Docked Ask Cerebro Panel */}
        <div className="w-full lg:w-[400px] shrink-0 lg:-ml-7 relative z-10 h-auto lg:h-[656px] bg-white border border-[#DCDFE7] rounded-2xl flex flex-col shadow-[0_2px_6px_rgba(16,20,38,0.08),0_32px_80px_rgba(10,8,40,0.4)]">
          {/* Header */}
          <div className="flex justify-between items-center p-[16px_18px_12px]">
            <span className="flex items-center gap-2 text-[14.5px] font-semibold text-[#101426]">
              <span className="w-6.5 h-6.5 rounded-lg bg-[#EEF0FF] inline-flex items-center justify-center p-1">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
                </svg>
              </span>
              Ask Cerebro
            </span>
            <span className="text-[11px] text-[#6B7180]">Quillmere Textiles</span>
          </div>

          {/* Question Tabs */}
          <div
            role="tablist"
            aria-label="Example questions"
            className="flex gap-1.5 px-[18px] pb-3 flex-wrap border-b border-[#EEF0F3]"
          >
            {heroData.questions.map((t, i) => {
              const selected = i === qIndex;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => playQuestion(i)}
                  className={`min-h-[32px] px-2.5 rounded-full border text-xs font-semibold cursor-pointer transition-all ${
                    selected
                      ? "border-[#4F46E5] bg-[#EEF0FF] text-[#4F46E5]"
                      : "border-[#DDE0E7] bg-white text-[#2B3040] hover:border-[#C9CDD6]"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Live Chat Flow */}
          <div
            aria-live="polite"
            className="flex-1 min-h-0 overflow-y-auto p-[16px_18px] flex flex-col gap-3"
          >
            {/* User Question Bubble */}
            <div className="self-end max-w-[280px] bg-[#F2F3F6] rounded-[12px_12px_4px_12px] p-[9px_12px] text-[12.5px] text-[#101426] leading-relaxed">
              {currentQ.question}
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-1.5">
              {visibleSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-[11.5px] text-[#5B6170] animate-fadeIn"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#15803D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {step}
                </div>
              ))}

              {isWorking && (
                <div className="flex items-center gap-2 text-[11.5px] text-[#4F46E5] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-ping" />
                  Working through your data
                </div>
              )}
            </div>

            {/* Answer Card & Narrative (fades in when done) */}
            {isDone && (
              <div className="animate-fadeIn flex flex-col gap-3">
                <div className="border border-[#E8EAEF] rounded-lg p-[11px_12px] bg-white">
                  <div className="text-[10.5px] text-[#6B7180]">{currentQ.dateLine}</div>
                  <table className="w-full border-collapse mt-1.5 text-[11.5px]">
                    <thead>
                      <tr>
                        {currentQ.head.map((h, i) => (
                          <th
                            key={i}
                            scope="col"
                            className={`font-medium text-[#6B7180] py-1 px-1.5 ${
                              h.a === "right" ? "text-right" : "text-left"
                            }`}
                          >
                            {h.v}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQ.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => {
                            const val = typeof cell === "string" ? cell : cell.v;
                            const align = typeof cell === "string" ? "left" : cell.a || "left";
                            const color = typeof cell === "string" ? "#101426" : cell.c || "#101426";
                            const weight = typeof cell === "string" ? 400 : cell.w || 400;
                            return (
                              <td
                                key={cIdx}
                                className={`py-1 px-1.5 border-t border-[#F0F1F4] ${
                                  align === "right" ? "text-right" : "text-left"
                                }`}
                                style={{ color, fontWeight: weight }}
                              >
                                {val}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="m-0 text-[12.5px] leading-relaxed text-[#2B3040]">
                  {currentQ.narrative}
                </p>
              </div>
            )}
          </div>

          {/* Footer Input Area */}
          <div className="p-[12px_14px] border-t border-[#EEF0F3] bg-white rounded-b-2xl">
            <div className="flex items-center gap-2 border border-[#DDE0E7] rounded-lg p-[6px_6px_6px_12px] focus-within:border-[#4F46E5] focus-within:ring-2 focus-within:ring-[#4F46E5]/20">
              <label htmlFor="hero-ask" className="sr-only">
                Ask a question about your data
              </label>
              <input
                id="hero-ask"
                type="text"
                placeholder="Ask about spend, CPA, audiences…"
                className="flex-1 min-w-0 border-0 outline-none text-[12.5px] text-[#101426] placeholder:text-[#6B7180] bg-transparent"
              />
              <a
                href="/demo"
                aria-label="Send question in demo"
                className="w-8 h-8 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white inline-flex items-center justify-center cursor-pointer transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="m-0 pt-5 pb-10 text-center text-[13px] text-[#5B6170]">
        {heroData.caption}
      </p>
    </div>
  );
}
