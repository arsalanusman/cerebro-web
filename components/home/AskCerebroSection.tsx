"use client";

import React, { useState } from "react";
import { askSectionData, AskQuestionItem } from "@/content/home";

export default function AskCerebroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentItem: AskQuestionItem = askSectionData.questions[activeIdx];

  return (
    <section id="ask" className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <h2 className="m-0 max-w-[760px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
          {askSectionData.h2}
        </h2>
        <p className="mt-4 m-0 max-w-[680px] text-lg leading-[1.55] text-[#5A6675]">
          {askSectionData.lead}
        </p>

        {/* 2-Column Layout */}
        <div className="mt-10 flex flex-col lg:flex-row gap-6 items-start">
          {/* Left: Question List */}
          <div
            role="tablist"
            aria-label="Questions for Ask Cerebro"
            aria-orientation="vertical"
            className="w-full lg:w-[380px] shrink-0 flex flex-col gap-2.5"
          >
            {askSectionData.questions.map((q, i) => {
              const selected = i === activeIdx;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveIdx(i)}
                  className={`text-left min-h-[64px] p-3.5 sm:p-4 rounded-xl border font-sans cursor-pointer flex gap-3 items-start transition-all ${
                    selected
                      ? "border-[#0070C2] bg-[#E8F2FC]"
                      : "border-[#E2E8F0] bg-white hover:border-[#C9CDD6]"
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={selected ? "#0070C2" : "#6B7685"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0 mt-0.5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="flex flex-col gap-1">
                    <span className="text-[15px] font-semibold text-[#000000] leading-snug">
                      {q.q}
                    </span>
                    <span className="text-[13px] text-[#5A6675]">{q.kind}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Answer Panel */}
          <div
            aria-live="polite"
            className="flex-1 min-w-0 border border-[#E2E8F0] rounded-2xl bg-white p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.06)] flex flex-col"
          >
            {/* User Bubble */}
            <div className="flex justify-end">
              <div className="max-w-[420px] bg-[#F2F3F6] rounded-[14px_14px_4px_14px] p-[11px_14px] text-[14.5px] text-[#000000] leading-relaxed">
                {currentItem.q}
              </div>
            </div>

            {/* Answer Table */}
            <div className="mt-5 border border-[#E8EAEF] rounded-xl p-4 overflow-x-auto bg-white">
              <div className="text-xs text-[#6B7685]">{currentItem.dateLine}</div>
              <table className="w-full min-w-[420px] border-collapse mt-2 text-[13.5px]">
                <thead>
                  <tr>
                    {currentItem.head.map((h, i) => (
                      <th
                        key={i}
                        scope="col"
                        className={`font-medium text-xs text-[#6B7685] py-1.5 px-2.5 ${
                          h.a === "right" ? "text-right" : "text-left"
                        }`}
                      >
                        {h.v}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentItem.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => {
                        const val = typeof cell === "string" ? cell : cell.v;
                        const align = typeof cell === "string" ? "left" : cell.a || "left";
                        const color = typeof cell === "string" ? "#000000" : cell.c || "#000000";
                        const weight = typeof cell === "string" ? 400 : cell.w || 400;
                        return (
                          <td
                            key={cIdx}
                            className={`py-2 px-2.5 border-t border-[#F0F1F4] ${
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

              <div className="mt-3 flex gap-4 text-[12.5px]">
                <button
                  type="button"
                  className="text-[#0070C2] font-semibold hover:underline bg-transparent border-0 p-0 cursor-pointer"
                  onClick={() => {
                    const csv = currentItem.rows
                      .map((r) =>
                        r.map((c) => (typeof c === "string" ? c : c.v)).join(",")
                      )
                      .join("\n");
                    navigator.clipboard?.writeText(csv);
                  }}
                >
                  Copy as CSV
                </button>
                <span className="text-[#0070C2] font-semibold cursor-pointer hover:underline">
                  Download CSV
                </span>
                <span className="text-[#5A6675]">Sources and data details</span>
              </div>
            </div>

            {/* Narrative */}
            <p className="mt-4.5 m-0 text-[15px] leading-relaxed text-[#1C2433]">
              {currentItem.narrative}
            </p>

            {/* Note banner if present */}
            {currentItem.note && (
              <div className="mt-3.5 flex gap-2.5 items-start rounded-lg bg-[#FFF7ED] p-2.5 px-3 text-[13px] leading-relaxed text-[#9A3412]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
                <span>{currentItem.note}</span>
              </div>
            )}

            {/* Suggestion pills if present */}
            {currentItem.suggest && (
              <div className="mt-4 flex gap-2 flex-wrap">
                {currentItem.suggest.map((sg, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center min-h-[34px] px-3 rounded-full border border-[#DDE0E7] text-[13px] text-[#1C2433] bg-white"
                  >
                    {sg}
                  </span>
                ))}
              </div>
            )}

            {/* Caption */}
            <p className="mt-5 m-0 text-[12.5px] text-[#6B7685]">
              {askSectionData.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
