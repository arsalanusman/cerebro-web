"use client";

import React, { useState } from "react";
import { objectiveData, ObjectiveOption } from "@/content/home";

interface ObjectiveToggleProps {
  variant?: "option-1" | "option-2";
}

export default function ObjectiveToggle({ variant = "option-2" }: ObjectiveToggleProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentOption: ObjectiveOption = objectiveData.options[activeIdx];

  const h2 =
    variant === "option-1"
      ? objectiveData.h2Option1
      : objectiveData.h2Option2;
  const lead =
    variant === "option-1"
      ? objectiveData.leadOption1
      : objectiveData.leadOption2;

  return (
    <section className="py-20 lg:py-[88px] bg-[#F6F8FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header and Toggle Row */}
        <div className="flex gap-8 justify-between items-end flex-wrap">
          <div>
            <h2 className="m-0 max-w-[680px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
              {h2}
            </h2>
            <p className="mt-4 m-0 max-w-[620px] text-lg leading-[1.55] text-[#5A6675]">
              {lead}
            </p>
          </div>

          <div
            role="group"
            aria-label="Choose how to judge TikTok spend"
            className="inline-flex gap-1 p-1 rounded-xl bg-[#ECEEF3] shrink-0"
          >
            {objectiveData.options.map((opt, i) => {
              const selected = i === activeIdx;
              return (
                <button
                  key={i}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveIdx(i)}
                  className={`min-h-[44px] px-4 sm:px-5 rounded-[9px] border-0 text-[14.5px] font-semibold cursor-pointer shrink-0 whitespace-nowrap transition-all ${
                    selected
                      ? "bg-white text-[#000000] shadow-sm"
                      : "bg-transparent text-[#5A6675] hover:text-[#000000]"
                  }`}
                >
                  {opt.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Comparison */}
        <div className="mt-8 bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-9 flex flex-col md:flex-row gap-10 lg:gap-12 items-center shadow-sm">
          {/* Left: Verdict */}
          <div className="flex-1 min-w-0">
            <div
              className="text-[13px] font-semibold"
              style={{ color: currentOption.labelColor }}
            >
              {currentOption.label}
            </div>
            <div className="mt-3 font-display text-[clamp(24px,2.6vw,34px)] leading-[1.2] font-semibold tracking-[-0.015em] text-[#000000]">
              {currentOption.verdict}
            </div>
            <p className="mt-3.5 m-0 text-[15px] leading-relaxed text-[#5A6675]">
              {currentOption.explain}
            </p>
            <p className="mt-5 m-0 text-[12.5px] text-[#6B7685]">
              Demo data, TikTok Ads, last 30 days. Mostly awareness spend.
            </p>
          </div>

          {/* Right: Bars */}
          <div className="flex-[1.2] min-w-0 w-full flex flex-col gap-4">
            {currentOption.bars.map((b, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span
                    className="text-[#000000]"
                    style={{ fontWeight: b.w }}
                  >
                    {b.name}
                  </span>
                  <span className="text-[#000000] font-semibold">
                    {b.value}
                  </span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-[#F0F1F4] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: b.pct,
                      backgroundColor: b.color,
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="text-[12.5px] text-[#6B7685]">
              {currentOption.scale}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
