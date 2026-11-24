"use client";

import React, { useState } from "react";
import Link from "next/link";
import { solutionsData, teamData, SolutionItem } from "@/content/home";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function SolutionsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentSol: SolutionItem = solutionsData[activeIdx];

  return (
    <section id="solutions" className="py-20 lg:py-[88px] bg-[#F6F8FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <ScrollReveal direction="down" distance={20}>
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
            Built for the teams that run paid media.
          </h2>
        </ScrollReveal>

        {/* 6 Tabs */}
        <ScrollReveal direction="up" distance={16} delay={0.15}>
          <div
            role="tablist"
            aria-label="Solutions"
            className="mt-8 flex gap-2 flex-wrap items-center"
          >
            {solutionsData.map((sol, i) => {
              const selected = i === activeIdx;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveIdx(i)}
                  className={`min-h-[44px] px-4 sm:px-5 rounded-[10px] border text-[14.5px] font-semibold cursor-pointer shrink-0 whitespace-nowrap transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                    selected
                      ? "border-[#0070C2] bg-[#0070C2] text-white shadow-xs"
                      : "border-[#DDE0E7] bg-white text-[#1C2433] hover:border-[#C9CDD6]"
                  }`}
                >
                  {sol.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Solution Content Card */}
        <ScrollReveal direction="up" distance={24} delay={0.25}>
          <div className="mt-7 bg-white border border-[#E2E8F0] hover:border-[#BFD8F0] rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            {/* Left Details */}
            <div className="flex-1 min-w-0">
              <h3 className="m-0 font-display text-[clamp(22px,2.4vw,27px)] leading-[1.2] font-semibold tracking-[-0.015em] text-[#000000]">
                {currentSol.title}
              </h3>
              <p className="mt-3 m-0 text-base sm:text-[17px] leading-[1.55] text-[#5A6675]">
                {currentSol.lead}
              </p>

              <ul className="mt-5.5 p-0 list-none flex flex-col gap-3">
                {currentSol.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm sm:text-[15.5px] leading-snug text-[#1C2433]"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0070C2"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={currentSol.href}
                className="mt-6 inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#0070C2] hover:text-[#005DA3] transition-colors group"
              >
                <span>{currentSol.link}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* Right Team Card Mockup */}
            <div className="w-full lg:w-[420px] shrink-0">
              <TiltCard maxTilt={4} glare={true}>
                <div className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300">
                  <div className="p-[14px_18px] border-b border-[#EEF0F3] text-[13.5px] font-semibold text-[#000000] bg-[#FCFCFD]">
                    Team and access
                  </div>
                  {teamData.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-[12px_18px] border-t border-[#F1F2F5] first:border-t-0 text-xs sm:text-[13px] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#E8F2FC] text-[#005DA3] text-[11.5px] font-semibold inline-flex items-center justify-center shrink-0">
                        {m.initial}
                      </span>
                      <span className="w-24 sm:w-28 text-[#000000] font-medium truncate">
                        {m.name}
                      </span>
                      <span className="w-28 sm:w-32 text-[#5A6675] truncate">
                        {m.role}
                      </span>
                      <span className="flex-1 text-[#1C2433] text-right truncate">
                        {m.clients}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
