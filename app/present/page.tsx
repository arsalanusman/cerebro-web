"use client";

import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CustomersStrip from "@/components/home/CustomersStrip";
import VideoExplainer from "@/components/home/VideoExplainer";
import AiStepsGrid from "@/components/home/AiStepsGrid";
import AiDataEngine from "@/components/home/AiDataEngine";
import AskCerebroSection from "@/components/home/AskCerebroSection";
import ObjectiveToggle from "@/components/home/ObjectiveToggle";
import BuildSection from "@/components/home/BuildSection";
import CompareTable from "@/components/home/CompareTable";
import SolutionsSection from "@/components/home/SolutionsSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import TrustSection from "@/components/home/TrustSection";

export default function HomePresentPage() {
  const [option, setOption] = useState<"1" | "2">("2");

  const description =
    option === "1"
      ? "Leads with the data engine: any platform, custom connector or sheet, then Ask Cerebro on top. Includes the video explainer and before/after table."
      : 'Leads with Cerebro AI as the analyst, adds "AI at every step", AI-led headings and Ask Cerebro in the main menu.';

  return (
    <div className="min-w-0 bg-white text-[#2B3040]">
      {/* Presentation Controls Bar */}
      <div
        role="region"
        aria-label="Presentation controls"
        className="sticky top-16 z-40 bg-[#101426] text-white shadow-[0_8px_24px_rgba(10,8,40,0.25)] border-b border-white/10"
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-2.5 box-border flex items-center gap-4 flex-wrap">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#A5B4FC]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 4h18v12H3zM8 20h8M12 16v4" />
            </svg>
            Homepage review
          </span>

          <label htmlFor="home-option" className="text-sm text-[#E3E5FF]">
            Showing
          </label>

          <div className="relative inline-flex items-center">
            <select
              id="home-option"
              value={option}
              onChange={(e) => {
                setOption(e.target.value as "1" | "2");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="appearance-none min-h-[40px] min-w-[280px] sm:min-w-[320px] pl-3.5 pr-10 rounded-[9px] border border-white/25 bg-[#1C1A57] text-white font-sans text-[14.5px] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#4F46E5]"
            >
              <option value="1">Option 1: Bring in any data, ask anything (Data-forward)</option>
              <option value="2">Option 2: Your AI analyst (AI-forward)</option>
            </select>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="absolute right-3.5 pointer-events-none"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <span className="flex-1 min-w-[260px] text-[13.5px] leading-snug text-[#C9CCF2]">
            {description}
          </span>
        </div>
      </div>

      {/* Render Option 1 or Option 2 */}
      {option === "1" ? (
        <div key="option-1" className="animate-fadeIn">
          <HeroSection variant="option-1" />
          <CustomersStrip />
          <VideoExplainer />
          <AiDataEngine variant="option-1" />
          <AskCerebroSection />
          <ObjectiveToggle variant="option-1" />
          <BuildSection variant="option-1" />
          <CompareTable />
          <SolutionsSection />
          <IntegrationsSection />
          <TrustSection />
        </div>
      ) : (
        <div key="option-2" className="animate-fadeIn">
          <HeroSection variant="option-2" />
          <CustomersStrip />
          <AiStepsGrid />
          <AiDataEngine variant="option-2" />
          <AskCerebroSection />
          <ObjectiveToggle variant="option-2" />
          <BuildSection variant="option-2" />
          <SolutionsSection />
          <IntegrationsSection />
        </div>
      )}
    </div>
  );
}
