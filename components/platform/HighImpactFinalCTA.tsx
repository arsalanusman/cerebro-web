import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticButton from "@/components/motion/MagneticButton";

export default function HighImpactFinalCTA() {
  return (
    <div className="relative my-20 rounded-3xl bg-gradient-to-b from-[#0B1021] via-[#0D152F] to-[#0A0D1A] border border-white/10 p-10 md:p-16 text-white overflow-hidden shadow-2xl text-center">
      {/* Background glow and orbital graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="600" cy="550" rx="550" ry="250" stroke="url(#ctaGrad)" strokeWidth="1.5" strokeDasharray="10 8" />
          <ellipse cx="600" cy="550" rx="400" ry="180" stroke="url(#ctaGrad)" strokeWidth="1" />
          <defs>
            <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <ScrollReveal direction="down" distance={20}>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-light font-semibold">
              Unified Marketing Intelligence
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
              See the full picture
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Consolidate your ad spend, attribution, and reporting in under 5 minutes. No credit card required.
            </p>
          </div>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal direction="up" distance={24} delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={0.2}>
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-semibold text-base hover:bg-brand-hover shadow-lg shadow-brand/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Book a Live Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link
                href="/integrations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-base hover:bg-white/15 border border-white/15 backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Explore 50+ Connectors
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        <ScrollReveal direction="up" distance={16} delay={0.35}>
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Read-Only API Scopes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-light" />
              <span>Real-Time Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Under 5 Min Setup</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
