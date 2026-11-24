"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, TrendingUp, BarChart3, Filter, ArrowUpRight } from "lucide-react";

export default function HeroDashboardVisual() {
  const [activeLevel, setActiveLevel] = useState<number>(0);

  const levels = [
    { id: 0, label: "Platform", count: "3 channels", spend: "PKR 7.4M", metric: "+4.2% MoM" },
    { id: 1, label: "Campaign", count: "24 campaigns", spend: "PKR 5.1M", metric: "16.4K Conv." },
    { id: 2, label: "Ad Set", count: "68 ad sets", spend: "PKR 3.9M", metric: "PKR 452 CPA" },
    { id: 3, label: "Creative", count: "142 creatives", spend: "PKR 2.2M", metric: "2.4% CTR" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-brand/25 to-purple-600/20 blur-xl opacity-75" />

      {/* Main Container */}
      <div className="relative bg-[#0B1021] border border-white/10 rounded-2xl p-6 md:p-8 text-white shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
        {/* Subtle background tech grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-300">
              Cross-Channel Hierarchy · Live Drill-Down
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
            <span className="text-emerald-400 font-semibold">Live Pacing</span>
          </div>
        </div>

        {/* 4-Level Hierarchy Selector Pills */}
        <div className="relative z-10 my-4 grid grid-cols-4 gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id)}
              className={`py-2 px-2 rounded-lg text-xs font-medium transition-all text-center ${
                activeLevel === lvl.id
                  ? "bg-brand text-white shadow-md font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="block text-[10px] text-slate-300 font-mono">L{lvl.id + 1}</span>
              <span className="truncate block font-heading">{lvl.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Card */}
        <div className="relative z-10 bg-white/[0.04] border border-white/10 rounded-xl p-5 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-brand-light">
                Viewing Level: {levels[activeLevel].label} Hierarchy
              </span>
              <h4 className="text-2xl font-bold font-heading text-white mt-0.5">
                {levels[activeLevel].spend}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                <TrendingUp className="w-3.5 h-3.5" />
                {levels[activeLevel].metric}
              </span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                {levels[activeLevel].count} active
              </span>
            </div>
          </div>

          {/* Mini progress bars showing channel allocations */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0866FF]" />
                Meta Ads
              </span>
              <span className="font-mono text-slate-200">PKR 3.8M (51%)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#0866FF] h-full rounded-full" style={{ width: "51%" }} />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                Google Ads
              </span>
              <span className="font-mono text-slate-200">PKR 2.4M (32%)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#4285F4] h-full rounded-full" style={{ width: "32%" }} />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FE2C55]" />
                TikTok Ads
              </span>
              <span className="font-mono text-slate-200">PKR 1.2M (17%)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#FE2C55] h-full rounded-full" style={{ width: "17%" }} />
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span>Continuous drill-down without page refreshes</span>
          <span className="text-brand-light font-medium flex items-center gap-1">
            Zero data lag
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
