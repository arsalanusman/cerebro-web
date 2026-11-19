"use client";

import React, { useState, useEffect, useRef } from "react";
import { problem } from "@/content/home";
import { ArrowDown } from "lucide-react";

export interface ConvergeVisualProps {
  className?: string;
}

export function ConvergeVisual({ className = "" }: ConvergeVisualProps) {
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

  const renderPlatformMark = (platform: string) => {
    if (platform.includes("Meta")) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4.5C6.5 4.5 2 8.5 2 13.5C2 16.5 3.5 19 6 20.5V23L8.5 21.5C9.5 22 10.5 22.5 12 22.5C17.5 22.5 22 18.5 22 13.5C22 8.5 17.5 4.5 12 4.5Z"
            fill="#0668E1"
          />
        </svg>
      );
    }
    if (platform.includes("Google")) {
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2L3 17H11L12 2Z" fill="#FBBC04" />
          <path d="M12 2L21 17H13L12 2Z" fill="#4285F4" />
          <circle cx="6" cy="18" r="3" fill="#34A853" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19.5 7.5c-1.8 0-3.3-.8-4.2-2.1V16a5.5 5.5 0 11-5.5-5.5c.3 0 .7 0 1 .1v3.2c-.3 0-.6-.1-1-.1a2.3 2.3 0 102.3 2.3V2h3.2c.4 2.2 2.1 3.9 4.2 4.3v1.2z"
          fill="#000000"
        />
      </svg>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-card border border-border bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between ${className}`}
    >
      <div className="text-caption font-semibold uppercase tracking-wider text-muted mb-6 text-left">
        Disparate Metrics to Single Source of Truth
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Left: 3 Disparate Platform Source Cards */}
        <div className="flex flex-col gap-3 w-full lg:w-5/12">
          {sources.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3.5 rounded-control border border-border bg-surface hover:bg-white transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                {renderPlatformMark(src.platform)}
                <div>
                  <div className="text-small font-semibold text-ink">
                    {src.platform}
                  </div>
                  <div className="text-[11px] text-muted font-mono">
                    {src.metric}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-small font-bold font-mono tabular-nums text-ink">
                  {src.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center: Connecting Flow SVG Lines */}
        <div className="hidden lg:flex flex-col items-center justify-center w-2/12 h-44 relative">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* 3 Converging Lines */}
            <path
              d="M 5 20 C 50 20, 50 60, 95 60"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray={reducedMotion || inView ? "none" : "200"}
              strokeDashoffset={reducedMotion || inView ? "0" : "200"}
              className={inView && !reducedMotion ? "transition-all duration-600 ease-out" : ""}
            />
            <path
              d="M 5 60 L 95 60"
              stroke="#4A8FE0"
              strokeWidth="2"
              strokeDasharray={reducedMotion || inView ? "none" : "200"}
              strokeDashoffset={reducedMotion || inView ? "0" : "200"}
              className={inView && !reducedMotion ? "transition-all duration-600 ease-out delay-100" : ""}
            />
            <path
              d="M 5 100 C 50 100, 50 60, 95 60"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              strokeDasharray={reducedMotion || inView ? "none" : "200"}
              strokeDashoffset={reducedMotion || inView ? "0" : "200"}
              className={inView && !reducedMotion ? "transition-all duration-600 ease-out delay-200" : ""}
            />
          </svg>
        </div>

        {/* Mobile Connector Arrow */}
        <div className="flex lg:hidden items-center justify-center text-muted py-1" aria-hidden="true">
          <ArrowDown size={20} />
        </div>

        {/* Right: Unified Destination Card */}
        <div className="w-full lg:w-5/12">
          <div className="p-5 sm:p-6 rounded-card border-2 border-brand/30 bg-brand-soft/60 text-left relative overflow-hidden shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand" />
                <span className="text-caption font-bold text-ink uppercase tracking-wider font-heading">
                  Cerebro Cleaned
                </span>
              </div>
              <span className="text-[11px] font-mono text-muted tabular-nums">
                149,612 + 235,904 + 36,584
              </span>
            </div>

            <div className="text-caption text-muted mb-1">{total.label}</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-ink font-mono tracking-tight tabular-nums mb-3">
              {total.value}
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-control text-caption font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">
              <ArrowDown size={12} strokeWidth={2.5} />
              <span>{total.change}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-caption text-muted">
        {/* CONFIRM with product team: which click metric Cerebro uses for each platform. 149,612 + 235,904 + 36,584 = 422,100 */}
        <span>{problem.converge.caption}</span>
        <span>Exact rule: deduplicated, consistent definitions</span>
      </div>
    </div>
  );
}
