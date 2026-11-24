import React, { useState, useEffect, useRef } from "react";
import { dashboards } from "@/content/home";
import { Play, Pause, ChevronRight } from "lucide-react";

export function DrillTabs({ className = "" }: { className?: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);

  const levels = dashboards.levels;

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    if (mq.matches) {
      setIsPlaying(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // 1.6s auto-step with 200ms crossfade
  useEffect(() => {
    if (!isPlaying || isReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % levels.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [isPlaying, isReducedMotion, levels.length]);

  // Keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const total = levels.length;
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % total;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + total) % total;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = total - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveIdx(nextIndex);
    setIsPlaying(false);
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>("button");
    buttons?.[nextIndex]?.focus();
  };

  const currentLevel = levels[activeIdx];

  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-sm text-left flex flex-col ${className}`}
    >
      {/* Controls: Breadcrumb Tabs & Play/Pause */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Hierarchy Drill-down Levels"
          className="flex flex-wrap items-center gap-1 sm:gap-2"
        >
          {levels.map((lvl, idx) => {
            const isActive = activeIdx === idx;
            return (
              <React.Fragment key={lvl.id}>
                {idx > 0 && (
                  <ChevronRight size={14} className="text-slate-300 shrink-0" />
                )}
                <button
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPlaying(false);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#4A8FE0] text-white shadow-xs"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {lvl.label}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Play/Pause Button */}
        {!isReducedMotion && (
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause automatic hierarchy tour" : "Play automatic hierarchy tour"}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-md border border-slate-200/80 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause size={12} />
                <span>Pause tour</span>
              </>
            ) : (
              <>
                <Play size={12} />
                <span>Play tour</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Screen Display Container */}
      <div
        className="relative w-full rounded-xl border border-slate-200 bg-slate-950/5 overflow-hidden"
        style={{ aspectRatio: "16 / 10" }}
      >
        {levels.map((lvl, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={lvl.id}
              className={`absolute inset-0 transition-opacity duration-200 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={lvl.src}
                alt={lvl.alt}
                width={2880}
                height={1800}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover object-top transition-transform duration-300 ${
                  isActive && !isReducedMotion ? "scale-100" : "scale-[1.01]"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Caption indicator */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
        <span>Level {activeIdx + 1} of 4: {currentLevel.label} breakdown</span>
        <span>Click any step to inspect directly</span>
      </div>
    </div>
  );
}
