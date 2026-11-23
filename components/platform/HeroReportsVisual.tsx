"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, Send, Calendar, Download, CheckCircle2, Sliders, Sparkles } from "lucide-react";

export default function HeroReportsVisual() {
  const [exportFormat, setExportFormat] = useState<string>("pdf");

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-brand/25 to-indigo-600/20 blur-xl opacity-75" />

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
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-300">
              Report Engine · Automated Client Distribution
            </span>
          </div>
          <span className="text-xs text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Every Mon 08:00 AM
          </span>
        </div>

        {/* Mini Report Layout Simulation */}
        <div className="relative z-10 my-4 bg-white/[0.04] border border-white/10 rounded-xl p-4 backdrop-blur-sm space-y-3">
          {/* Deck Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div>
              <span className="text-[10px] font-mono text-brand-light uppercase">Client Deck · Q4 Performance</span>
              <h4 className="text-sm font-bold font-heading text-white">Saffron Bank · Weekly Paid Media Audit</h4>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
              3 Channels Synced
            </span>
          </div>

          {/* Widget 1 & 2 Preview Grid */}
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[10px] text-slate-400 block">Weekly Spend</span>
              <span className="text-sm font-bold text-white font-mono">PKR 1.84M</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">+3.8% on pace</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[10px] text-slate-400 block">Verified Conversions</span>
              <span className="text-sm font-bold text-white font-mono">4,120 Leads</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">PKR 446.6 CPA</span>
            </div>
          </div>

          {/* Export Selector */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-[11px] text-slate-300">Output Delivery:</span>
            <div className="flex items-center gap-1.5">
              {["pdf", "sheets", "portal"].map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setExportFormat(fmt)}
                  className={`px-2 py-1 rounded text-[10px] font-mono uppercase transition-colors ${
                    exportFormat === fmt
                      ? "bg-brand text-white font-bold"
                      : "bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            14 client distribution lists subscribed
          </span>
          <span className="text-brand-light font-medium flex items-center gap-1">
            Zero slide manual work
          </span>
        </div>
      </div>
    </div>
  );
}
