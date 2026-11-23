"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Database, CheckCircle2, RefreshCw, Zap, ShieldCheck } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";

interface NodeItem {
  id: string;
  name: string;
  logo: string;
  status: string;
  records: string;
  color: string;
  x: number;
  y: number;
}

const CONNECTED_PLATFORMS: NodeItem[] = [
  {
    id: "meta",
    name: "Meta Ads",
    logo: "/brand/platforms/meta.png",
    status: "Live · 14.2K clicks",
    records: "4 accounts",
    color: "#0866FF",
    x: 18,
    y: 20,
  },
  {
    id: "google",
    name: "Google Ads",
    logo: "/brand/platforms/google.png",
    status: "Live · 28.1K clicks",
    records: "6 accounts",
    color: "#4285F4",
    x: 82,
    y: 18,
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    logo: "/brand/platforms/tiktok.png",
    status: "Live · 9.4K clicks",
    records: "3 accounts",
    color: "#FE2C55",
    x: 85,
    y: 68,
  },
  {
    id: "dv360",
    name: "DV360",
    logo: "/brand/platforms/dv360.png",
    status: "Scheduled · Hourly",
    records: "2 accounts",
    color: "#34A853",
    x: 15,
    y: 72,
  },
];

export default function HeroConnectorVisual() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <TiltCard maxTilt={5} glare={true} className="w-full max-w-xl mx-auto select-none">
      <div className="relative w-full">
        {/* Outer ambient glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand/20 via-indigo-500/20 to-purple-600/20 blur-xl opacity-75" />

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

        {/* Subtle radial center spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-300">
              Ecosystem Data Pipeline · Connected
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
            <RefreshCw className="w-3 h-3 text-brand-light animate-spin" style={{ animationDuration: "8s" }} />
            <span>Syncing 5m ago</span>
          </div>
        </div>

        {/* Center Node + Satellite Nodes Matrix */}
        <div className="relative z-10 my-8 py-4 flex items-center justify-center min-h-[220px]">
          {/* Animated Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Connection lines from center (50%, 50%) to corners */}
            <line x1="50%" y1="50%" x2="22%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="78%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="22%" y2="72%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="50%" y1="50%" x2="78%" y2="72%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>

          {/* Central Cerebro Ingestion Core */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-brand via-indigo-600 to-slate-900 p-0.5 shadow-xl shadow-brand/30">
              <div className="w-full h-full rounded-2xl bg-[#0B1021]/90 backdrop-blur-sm flex flex-col items-center justify-center p-2 text-center">
                <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center mb-1 text-brand-light">
                  <Database className="w-4 h-4 text-brand-light" />
                </div>
                <span className="text-[10px] font-bold tracking-tight text-white uppercase">Cerebro</span>
                <span className="text-[8px] text-slate-400">Core Engine</span>
              </div>
            </div>
            {/* Live Throughput Badge */}
            <div className="mt-2.5 px-2.5 py-0.5 rounded-full bg-brand/20 border border-brand/30 text-[10px] text-brand-light font-medium tracking-wide">
              149.9K Synced Today
            </div>
          </div>

          {/* Satellite Platform Nodes */}
          {CONNECTED_PLATFORMS.map((platform, idx) => {
            const isHighlighted = pulse === idx;
            return (
              <div
                key={platform.id}
                className="absolute flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
                style={{
                  left: `${platform.x}%`,
                  top: `${platform.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`relative p-2 rounded-xl bg-[#131B33] border transition-all duration-300 shadow-lg ${
                    isHighlighted
                      ? "border-brand shadow-brand/30 scale-110"
                      : "border-white/15 hover:border-white/30"
                  }`}
                >
                  <div className="w-7 h-7 relative flex items-center justify-center">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  {/* Status Indicator Dot */}
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B1021]" />
                </div>

                {/* Node Label Card (hidden on small viewports, visible on md+) */}
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-semibold text-white tracking-tight">{platform.name}</span>
                  <span className="text-[10px] text-slate-400">{platform.records}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Metrics Ticker */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] text-slate-300">Read-Only Scopes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] text-slate-300">Auto Token Refresh</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-light" />
            <span className="text-[11px] text-slate-300">Normalized Schemas</span>
          </div>
        </div>
      </div>
      </div>
    </TiltCard>
  );
}
