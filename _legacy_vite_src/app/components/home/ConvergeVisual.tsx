import React, { useState, useEffect, useRef } from "react";
import { problem } from "@/content/home";
import logoMeta from "@/imports/meta_icon.png";
import logoGoogle from "@/imports/google_png.png";
import logoTikTok from "@/imports/tiktok_logo_png.png";
import { ArrowDown } from "lucide-react";

export function ConvergeVisual({ className = "" }: { className?: string }) {
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [reducedMotion]);

  const sources = problem.converge.sources;
  const total = problem.converge.total;

  const getPlatformIcon = (platform: string) => {
    if (platform.includes("Meta")) return logoMeta;
    if (platform.includes("Google")) return logoGoogle;
    return logoTikTok;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between ${className}`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6 text-left">
        Disparate Metrics to Single Source of Truth
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Left: 3 Disparate Platform Source Cards */}
        <div className="flex flex-col gap-3 w-full lg:w-5/12">
          {sources.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-xs transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <img
                  src={getPlatformIcon(src.platform)}
                  alt={src.platform}
                  className="w-5 h-5 object-contain shrink-0"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    {src.platform}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {src.metric}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold font-mono text-slate-800">
                  {src.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center: Connecting Flow Indicator / SVG */}
        <div className="hidden lg:flex flex-col items-center justify-center w-2/12 h-44 relative">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 3 Converging Lines */}
            <path
              d="M 5 20 C 50 20, 50 60, 95 60"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeDasharray={reducedMotion || inView ? "none" : "200"}
              strokeDashoffset={reducedMotion || inView ? "0" : "200"}
              className={inView && !reducedMotion ? "transition-all duration-700 ease-out" : ""}
            />
            <path
              d="M 5 60 L 95 60"
              stroke="#4A8FE0"
              strokeWidth="2"
              strokeDasharray={reducedMotion || inView ? "none" : "200"}
              strokeDashoffset={reducedMotion || inView ? "0" : "200"}
              className={inView && !reducedMotion ? "transition-all duration-700 ease-out delay-100" : ""}
            />
            <path
              d="M 5 100 C 50 100, 50 60, 95 60"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeDasharray={reducedMotion || inView ? "none" : "200"}
              strokeDashoffset={reducedMotion || inView ? "0" : "200"}
              className={inView && !reducedMotion ? "transition-all duration-700 ease-out delay-200" : ""}
            />
          </svg>
        </div>

        {/* Mobile Connector Arrow */}
        <div className="flex lg:hidden items-center justify-center text-slate-400 py-1">
          <ArrowDown size={20} />
        </div>

        {/* Right: Unified Destination Card */}
        <div className="w-full lg:w-5/12">
          <div className="p-5 sm:p-6 rounded-xl border-2 border-[#4A8FE0]/40 bg-[var(--brand-soft,#EEF4FC)]/70 text-left relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A8FE0]" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Cerebro Cleaned
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                149,612 + 235,904 + 36,584
              </span>
            </div>

            <div className="text-xs text-slate-600 mb-1">{total.label}</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight mb-3">
              {total.value}
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">
              <ArrowDown size={12} strokeWidth={2.5} />
              <span>{total.change}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>{problem.converge.caption}</span>
        <span>Exact rule: deduplicated, consistent definitions</span>
      </div>
    </div>
  );
}
