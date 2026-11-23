"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Target, CheckCircle2, AlertTriangle, ArrowRight, Eye, MousePointer, Users, ShoppingCart } from "lucide-react";

export default function HeroObjectiveVisual() {
  const [selectedGoal, setSelectedGoal] = useState<string>("leads");

  const goals = [
    {
      id: "awareness",
      label: "Awareness",
      icon: Eye,
      primaryMetric: "CPM: PKR 153.36",
      volume: "48.4M Impressions",
      verdict: "Judged strictly on Reach & Brand Recall",
    },
    {
      id: "traffic",
      label: "Traffic",
      icon: MousePointer,
      primaryMetric: "CPC: PKR 13.77",
      volume: "539.6K Clicks",
      verdict: "Judged strictly on Qualified CTR",
    },
    {
      id: "leads",
      label: "Leads",
      icon: Users,
      primaryMetric: "CPL: PKR 385.20",
      volume: "12.8K Submissions",
      verdict: "Judged strictly on Cost Per Verified Lead",
    },
    {
      id: "sales",
      label: "Sales / E-com",
      icon: ShoppingCart,
      primaryMetric: "ROAS: 4.85x",
      volume: "PKR 28.4M Revenue",
      verdict: "Judged strictly on Net Conversion Value",
    },
  ];

  const current = goals.find((g) => g.id === selectedGoal) || goals[0];

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/20 via-brand/25 to-indigo-600/20 blur-xl opacity-75" />

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
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-300">
              Objective Engine · Normalized Evaluation
            </span>
          </div>
          <span className="text-xs text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
            Fair Attribution
          </span>
        </div>

        {/* Goal Selector Buttons */}
        <div className="relative z-10 my-4 grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          {goals.map((g) => {
            const Icon = g.icon;
            const isSel = selectedGoal === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGoal(g.id)}
                className={`py-2 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center gap-1 ${
                  isSel
                    ? "bg-brand text-white shadow-md font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="truncate block font-heading">{g.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Card: Contrast Before vs After Cerebro */}
        <div className="relative z-10 bg-white/[0.04] border border-white/10 rounded-xl p-5 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-brand-light">
                Filtered Objective: {current.label}
              </span>
              <h4 className="text-2xl font-bold font-heading text-white mt-0.5">
                {current.primaryMetric}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-emerald-400 block">
                {current.volume}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                Zero Mixed Bias
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-white/10 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5 text-rose-300">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                Flawed Industry Metric:
              </span>
              <span className="font-mono text-slate-400 line-through">Blended CPA PKR 452</span>
            </div>
            <div className="flex items-center justify-between text-slate-200 pt-1 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Cerebro Normalized Rule:
              </span>
              <span className="text-emerald-400 font-medium">{current.verdict}</span>
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span>Judge each campaign strictly on its own goal</span>
          <span className="text-brand-light font-medium flex items-center gap-1">
            Meta · Google · TikTok
          </span>
        </div>
      </div>
    </div>
  );
}
