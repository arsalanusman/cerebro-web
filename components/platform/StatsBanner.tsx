import React from "react";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function StatsBanner() {
  const stats = [
    {
      numeric: 100,
      suffix: "+",
      label: "Metrics & Dimensions",
      sublabel: "Normalized cross-channel metrics",
    },
    {
      numeric: 99.9,
      suffix: "%",
      decimals: 1,
      label: "Sync Uptime SLA",
      sublabel: "High-availability cloud pipelines",
    },
    {
      numeric: 60,
      suffix: "%",
      label: "Reporting Labor Saved",
      sublabel: "Hours recaptured every week",
    },
    {
      numeric: 0,
      suffix: "",
      label: "Data Engineers Required",
      sublabel: "Fully managed ingestion workflows",
    },
  ];

  return (
    <div className="relative my-20 rounded-3xl bg-[#0B1021] border border-white/10 p-8 md:p-14 text-white overflow-hidden shadow-2xl">
      {/* Background orbital contour lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="450" stroke="url(#statsGlow)" strokeWidth="1.5" strokeDasharray="8 6" />
          <circle cx="500" cy="500" r="320" stroke="url(#statsGlow)" strokeWidth="1" />
          <circle cx="500" cy="500" r="180" stroke="url(#statsGlow)" strokeWidth="1" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="statsGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0070C2" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle radial ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <ScrollReveal direction="down" distance={20}>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-light font-semibold">
              Enterprise Ingestion Scale
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Get data from anywhere. Instantly. With no limitations.
            </h2>
            <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Eliminate reporting silos and fragmented accounts. Cerebro operates 24/7 background extractors that handle rate limits, pagination, and multi-currency conversions automatically.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {stats.map((s, idx) => (
            <ScrollReveal key={s.label} direction="up" distance={24} delay={idx * 0.1}>
              <TiltCard maxTilt={5} glare={true} className="h-full">
                <div className="p-6 h-full rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-brand/50 hover:shadow-lg">
                  <span className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200 tracking-tight">
                    <AnimatedCounter
                      value={s.numeric}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </span>
                  <span className="mt-2.5 text-sm font-semibold text-white">
                    {s.label}
                  </span>
                  <span className="mt-1 text-xs text-slate-400">
                    {s.sublabel}
                  </span>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
