"use client";

import React, { useRef } from "react";
import { RoadmapMilestone } from "@/content/about";

interface HorizontalRoadmapProps {
  milestones: RoadmapMilestone[];
}

export default function HorizontalRoadmap({ milestones }: HorizontalRoadmapProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const badgeStyles = {
    Delivered: {
      bg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]",
      dot: "bg-[#10B981]",
    },
    Current: {
      bg: "bg-[#EEF2FF] border-[#BFD8F0] text-[#004C87]",
      dot: "bg-[#0070C2] animate-pulse",
    },
    Upcoming: {
      bg: "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569]",
      dot: "bg-[#94A3B8]",
    },
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#F6F8FB] border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border">
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="m-0 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0070C2]">
              HOW WE GOT HERE
            </p>
            <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[36px] md:text-[44px] leading-[1.08] tracking-[-0.02em] text-[#000000]">
              Our Product Journey &amp; Roadmap
            </h2>
            <p className="mt-3 m-0 text-base sm:text-lg text-[#5A6675] max-w-[640px] leading-[1.6]">
              From an internal frustration with spreadsheet reporting to an enterprise AI analytics platform. Here is how Cerebro dNano evolved, and where we are heading next.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll roadmap left"
              className="w-10 h-10 rounded-full border border-[#DCDFE7] bg-white text-[#000000] hover:bg-[#F3F4F6] flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll roadmap right"
              className="w-10 h-10 rounded-full border border-[#DCDFE7] bg-white text-[#000000] hover:bg-[#F3F4F6] flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Connecting Track Line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-[#E2E8F0] z-0"
          />

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {milestones.map((m, idx) => {
              const style = badgeStyles[m.badge] || badgeStyles.Delivered;
              return (
                <div
                  key={idx}
                  className="min-w-[320px] sm:min-w-[360px] max-w-[380px] shrink-0 snap-start flex flex-col"
                >
                  {/* Step Node indicator */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <span className="w-8 h-8 rounded-full border-2 border-white bg-[#0070C2] text-white font-mono text-xs font-bold flex items-center justify-center shadow-md">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#6B7685]">
                      {m.period}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${style.bg}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {m.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(0,112,194,0.08)] hover:border-[#8EC5F0] transition-all flex flex-col justify-between">
                    <div>
                      <h3 className="m-0 font-heading font-semibold text-[20px] text-[#000000] leading-tight">
                        {m.title}
                      </h3>
                      <p className="mt-3 m-0 text-[14.5px] leading-[1.6] text-[#5A6675]">
                        {m.description}
                      </p>
                    </div>

                    {/* Key Deliverables bullet list */}
                    <div className="mt-6 pt-5 border-t border-[#EEF0F3]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] block mb-2.5">
                        Key Deliverables
                      </span>
                      <ul className="m-0 p-0 list-none space-y-2">
                        {m.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2 text-[13px] text-[#1C2433] leading-snug"
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#0070C2"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 mt-0.5"
                              aria-hidden="true"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Swipe cue on mobile */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#8A90A0] md:hidden mt-2">
          <span>&larr; Swipe to explore roadmap &rarr;</span>
        </div>
      </div>
    </section>
  );
}
