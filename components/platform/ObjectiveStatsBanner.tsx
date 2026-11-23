import React from "react";

export default function ObjectiveStatsBanner() {
  const stats = [
    {
      value: "4 Tiers",
      label: "Standardized Goal Buckets",
      sublabel: "Awareness, Traffic, Leads, Sales",
    },
    {
      value: "100%",
      label: "Distortion Elimination",
      sublabel: "No mixing CPMs with CPAs",
    },
    {
      value: "3.2x",
      label: "Budget Precision",
      sublabel: "Fair cross-channel allocation",
    },
    {
      value: "0",
      label: "Manual Tagging Required",
      sublabel: "Auto-detected from campaign API setup",
    },
  ];

  return (
    <div className="relative my-20 rounded-3xl bg-[#0B1021] border border-white/10 p-8 md:p-14 text-white overflow-hidden shadow-2xl">
      {/* Background orbital contour lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="450" stroke="url(#objGlow)" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="500" cy="500" r="320" stroke="url(#objGlow)" strokeWidth="1" />
          <circle cx="500" cy="500" r="180" stroke="url(#objGlow)" strokeWidth="1" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="objGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle radial ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-300 font-semibold">
            Meaningful Measurement Scale
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Judge each campaign strictly by its intended goal
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Eliminate distorted blended averages. When each channel is evaluated against its true operational mandate, media budgets can be scaled with total confidence.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.07] hover:border-purple-500/40"
            >
              <span className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-200 tracking-tight">
                {s.value}
              </span>
              <span className="mt-2.5 text-sm font-semibold text-white">
                {s.label}
              </span>
              <span className="mt-1 text-xs text-slate-400">
                {s.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
