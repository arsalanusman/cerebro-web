"use client";

import React, { useState } from "react";
import Link from "next/link";
import { askCerebroContent, AskCerebroQuestion } from "@/content/ask-cerebro";

export default function AskCerebroHero() {
  const [tabIndex, setTabIndex] = useState(0);
  const currentQ: AskCerebroQuestion = askCerebroContent.questions[tabIndex];

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-[72px] sm:pb-[88px] bg-[#1C1A57]">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[260px] -right-[200px] w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0,rgba(199,210,254,0.5)_2.5%,rgba(129,140,248,0.22)_12%,rgba(79,70,229,0.07)_30%,rgba(28,26,87,0)_58%)]"
      />

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[13px] text-[#A5B4FC]">
          <Link href="/" className="text-[#C9CCF2] hover:text-white transition-colors">
            Home
          </Link>{" "}
          / <span>Platform</span> / <span className="text-white">Ask Cerebro</span>
        </nav>

        {/* Hero 2-Col Layout */}
        <div className="mt-9 flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <p className="m-0 mb-4.5 text-sm font-semibold text-[#A5B4FC]">
              {askCerebroContent.hero.eyebrow}
            </p>
            <h1 className="m-0 font-display font-semibold text-[clamp(36px,4.2vw,60px)] leading-[1.04] tracking-[-0.03em] text-white">
              {askCerebroContent.hero.h1}
            </h1>
            <p className="mt-5.5 m-0 max-w-[520px] text-lg sm:text-[19px] leading-[1.55] text-[#CDD0F3]">
              {askCerebroContent.hero.lead}
            </p>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                href={askCerebroContent.hero.primaryBtn.href}
                className="inline-flex items-center justify-center min-h-[52px] px-6.5 rounded-[10px] bg-white text-[#1C1A57] hover:bg-[#F7F8FA] font-semibold text-base shadow-sm transition-colors"
              >
                {askCerebroContent.hero.primaryBtn.label}
              </Link>
              <a
                href={askCerebroContent.hero.secondaryBtn.href}
                className="inline-flex items-center justify-center min-h-[52px] px-6.5 rounded-[10px] border border-white/35 text-white hover:border-white/60 hover:bg-white/5 font-semibold text-base transition-colors"
              >
                {askCerebroContent.hero.secondaryBtn.label}
              </a>
            </div>
          </div>

          {/* Right: Ask Cerebro Card Mockup */}
          <div className="w-full lg:w-[520px] shrink-0 bg-white rounded-2xl shadow-[0_32px_80px_rgba(10,8,40,0.45)] overflow-hidden">
            {/* Panel Top */}
            <div className="flex justify-between items-center p-[16px_20px] border-b border-[#EEF0F3]">
              <span className="flex items-center gap-2 text-[14.5px] font-semibold text-[#101426]">
                <span className="w-6.5 h-6.5 rounded-lg bg-[#EEF0FF] inline-flex items-center justify-center p-1">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
                  </svg>
                </span>
                Ask Cerebro
              </span>
              <span className="text-[11.5px] text-[#6B7180]">
                Quillmere Textiles, last 30 days
              </span>
            </div>

            {/* Question Tabs */}
            <div
              role="tablist"
              aria-label="Example questions"
              className="flex gap-1.5 p-[12px_20px] flex-wrap border-b border-[#EEF0F3]"
            >
              {askCerebroContent.questions.map((q, i) => {
                const selected = i === tabIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setTabIndex(i)}
                    className={`min-h-[34px] px-3 rounded-full border text-[12.5px] font-semibold cursor-pointer transition-all ${
                      selected
                        ? "border-[#C7CBF9] bg-[#EEF0FF] text-[#3730A3]"
                        : "border-[#E1E4EA] bg-white text-[#2B3040] hover:border-[#C9CDD6]"
                    }`}
                  >
                    {q.label}
                  </button>
                );
              })}
            </div>

            {/* Chat Body */}
            <div
              aria-live="polite"
              className="p-[18px_20px_20px] min-h-[360px] box-border flex flex-col gap-3"
            >
              {/* Question bubble */}
              <div className="self-end max-w-[340px] bg-[#F2F3F6] rounded-[12px_12px_4px_12px] p-[10px_13px] text-[13.5px] text-[#101426] leading-relaxed">
                {currentQ.question}
              </div>

              {/* Steps */}
              {currentQ.steps.length > 0 && (
                <div className="flex flex-col gap-1.5 animate-fadeIn">
                  {currentQ.steps.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#5B6170]"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#15803D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {s}
                    </div>
                  ))}
                </div>
              )}

              {/* Table */}
              {!currentQ.noTable && currentQ.head && currentQ.rows && (
                <div className="border border-[#E8EAEF] rounded-lg p-3 bg-white animate-fadeIn">
                  <table className="w-full border-collapse text-[12.5px]">
                    <thead>
                      <tr>
                        {currentQ.head.map((h, idx) => (
                          <th
                            key={idx}
                            scope="col"
                            className={`py-1 px-2 font-medium text-[#6B7180] ${
                              h.a === "right" ? "text-right" : "text-left"
                            }`}
                          >
                            {h.v}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQ.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => {
                            const val = typeof cell === "string" ? cell : cell.v;
                            const align = typeof cell === "string" ? "left" : cell.a || "left";
                            const color = typeof cell === "string" ? "#101426" : cell.c || "#101426";
                            const weight = typeof cell === "string" ? 400 : cell.w || 400;
                            return (
                              <td
                                key={cIdx}
                                className={`py-1.5 px-2 border-t border-[#F0F1F4] ${
                                  align === "right" ? "text-right" : "text-left"
                                }`}
                                style={{ color, fontWeight: weight }}
                              >
                                {val}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Narrative */}
              <p className="m-0 text-[13.5px] leading-relaxed text-[#2B3040]">
                {currentQ.narrative}
              </p>

              {/* Suggestion pills if present */}
              {currentQ.suggest && (
                <div className="flex gap-2 flex-wrap mt-auto pt-2">
                  {currentQ.suggest.map((sg, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center min-h-[32px] px-3 rounded-full border border-[#DDE0E7] text-[12.5px] text-[#2B3040] bg-[#FCFCFD]"
                    >
                      {sg}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero caption */}
        <p className="mt-6 m-0 text-[13px] text-[#A5B4FC]">
          {askCerebroContent.hero.caption}
        </p>
      </div>
    </section>
  );
}
