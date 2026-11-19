"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { engineData } from "@/content/home";

interface AiDataEngineProps {
  variant?: "option-1" | "option-2";
}

export default function AiDataEngine({ variant = "option-2" }: AiDataEngineProps) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [eph, setEph] = useState(6);
  const [isReduced, setIsReduced] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReduced(mq.matches);
    } catch {}
  }, []);

  const playSource = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSrcIndex(idx);
    if (isReduced) {
      setEph(6);
      return;
    }
    setEph(0);
    let p = 0;
    timerRef.current = setInterval(() => {
      p += 1;
      setEph(p);
      if (p > 5) {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 380);
  };

  useEffect(() => {
    playSource(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isReduced]);

  const activeSource = engineData.sources[srcIndex];
  const eDone = eph >= 5;

  const h2 =
    variant === "option-1" ? engineData.h2Option1 : engineData.h2Option2;
  const lead =
    variant === "option-1" ? engineData.leadOption1 : engineData.leadOption2;

  return (
    <section id="engine" className="py-20 lg:py-[88px] bg-[#F7F8FA]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <h2 className="m-0 max-w-[760px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
          {h2}
        </h2>
        <p className="mt-4 m-0 max-w-[700px] text-lg leading-[1.55] text-[#5B6170]">
          {lead}
        </p>

        {/* Source Tabs */}
        <div
          role="tablist"
          aria-label="Data source"
          className="mt-9 inline-flex gap-1 p-1 rounded-xl bg-[#ECEEF3] flex-wrap"
        >
          {engineData.sources.map((s, i) => {
            const selected = i === srcIndex;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => playSource(i)}
                className={`min-h-[44px] px-4.5 rounded-[9px] border-0 text-[14.5px] font-semibold cursor-pointer inline-flex items-center gap-2 transition-all ${
                  selected
                    ? "bg-white text-[#101426] shadow-sm"
                    : "bg-transparent text-[#5B6170] hover:text-[#101426]"
                }`}
              >
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
                >
                  <path d={s.d} />
                </svg>
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Pipeline Container */}
        <div className="mt-5 bg-white border border-[#E4E7EC] rounded-2xl p-6 sm:p-7 flex flex-col lg:flex-row gap-4 items-stretch shadow-sm">
          {/* Column 1: Source */}
          <div className="flex-1 min-w-0 border border-[#EEF0F3] rounded-xl p-5 bg-[#FCFCFD] flex flex-col">
            <div className="text-xs font-semibold text-[#6B7180]">Source</div>

            {srcIndex === 0 && (
              <div className="animate-fadeIn flex flex-col flex-1">
                <div className="mt-2.5 text-base font-semibold text-[#101426]">
                  Native connectors
                </div>
                <div className="mt-3.5 flex flex-col gap-2">
                  {engineData.nativeList.map((x, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 bg-white border border-[#EEF0F3] rounded-lg p-2 sm:px-2.5"
                    >
                      {x.logo ? (
                        <span className="w-[22px] h-[22px] rounded-md bg-white border border-[#E4E7EC] flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-xs">
                          <Image
                            src={x.logo}
                            alt={x.name}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          className="w-[22px] h-[22px] rounded-md text-white text-[10px] font-bold inline-flex items-center justify-center shrink-0"
                          style={{ background: x.color }}
                        >
                          {x.mark}
                        </span>
                      )}
                      <span className="flex-1 text-[13px] text-[#101426]">
                        {x.name}
                      </span>
                      <span
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: x.pillBg, color: x.pillFg }}
                      >
                        {x.status}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-auto pt-3.5 m-0 text-[12.5px] leading-relaxed text-[#5B6170]">
                  Maintained by Cerebro. Syncs on a schedule, or on demand.
                </p>
              </div>
            )}

            {srcIndex === 1 && (
              <div className="animate-fadeIn flex flex-col flex-1">
                <div className="mt-2.5 text-base font-semibold text-[#101426]">
                  Add a connector
                </div>
                <div className="mt-3.5 text-xs text-[#5B6170]">Platform</div>
                <div className="mt-1.5 border border-[#DDE0E7] rounded-lg p-[9px_10px] text-[13px] text-[#101426] bg-white">
                  Local publisher network
                </div>
                <div className="mt-3 text-xs text-[#5B6170]">
                  API docs or a sample export
                </div>
                <div className="mt-1.5 border border-[#DDE0E7] rounded-lg p-[9px_10px] text-[13px] text-[#101426] bg-white flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B6170"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6" />
                  </svg>
                  publisher_api_docs.pdf
                </div>
                <div className="mt-3.5 rounded-lg bg-[#EEF0FF] p-3 text-[12.5px] leading-relaxed text-[#2E2A82]">
                  Connector drafted by AI. 3 field mappings to review.
                </div>
                <p className="mt-auto pt-3 m-0 text-[12.5px] leading-relaxed text-[#5B6170]">
                  Prefer not to build it? Our team can set it up for you.
                </p>
              </div>
            )}

            {srcIndex === 2 && (
              <div className="animate-fadeIn flex flex-col flex-1">
                <div className="mt-2.5 text-base font-semibold text-[#101426]">
                  Upload a sheet
                </div>
                <div className="mt-3.5 flex items-center gap-2.5 border border-[#DDE0E7] rounded-lg p-2.5 bg-white">
                  <span className="w-[30px] h-[30px] rounded-[7px] bg-[#DCFCE7] text-[#166534] inline-flex items-center justify-center shrink-0">
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
                    >
                      <path d="M3 4h18v16H3zM3 10h18M3 15h18M9 4v16" />
                    </svg>
                  </span>
                  <span className="flex flex-col text-[12.5px]">
                    <span className="text-[#101426] font-medium">
                      publisher_report_oct.xlsx
                    </span>
                    <span className="text-[#6B7180]">412 rows</span>
                  </span>
                </div>
                <div className="mt-3 border border-[#EEF0F3] rounded-lg bg-white overflow-hidden">
                  {engineData.sheetMapping.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 px-2.5 border-t first:border-t-0 border-[#F3F4F6] text-[12.5px]"
                    >
                      <span className="flex-1 text-[#5B6170] truncate">{m.from}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9AA0AD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                      <span className="flex-1 text-[#101426] font-medium truncate text-right">
                        {m.to}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-auto pt-3 m-0 text-[12.5px] leading-relaxed text-[#5B6170]">
                  CSV, Excel and Google Sheets.
                </p>
              </div>
            )}
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:flex items-center shrink-0">
            <span className="w-8 h-8 rounded-full border border-[#E4E7EC] bg-white inline-flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B6170"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>

          {/* Column 2: Cerebro AI Engine */}
          <div className="flex-[1.2] min-w-0 rounded-xl p-5 bg-[#1C1A57] text-white flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A5B4FC]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
              </svg>
              Cerebro AI engine
            </div>

            <div className="mt-3.5 flex flex-col gap-2.5 flex-1 justify-center">
              {activeSource.steps.map(([title, detail], idx) => {
                const isActive = idx < eph;
                return (
                  <div
                    key={idx}
                    className="flex gap-2.5 items-start transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0.35 }}
                  >
                    <span
                      className="shrink-0 w-[22px] h-[22px] rounded-full inline-flex items-center justify-center mt-0.5 transition-colors duration-300"
                      style={{
                        background: isActive ? "#4F46E5" : "rgba(255,255,255,0.25)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[13.5px] font-semibold text-white">
                        {title}
                      </span>
                      <span className="text-[12.5px] text-[#C9CCF2] leading-snug">
                        {detail}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:flex items-center shrink-0">
            <span className="w-8 h-8 rounded-full border border-[#E4E7EC] bg-white inline-flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B6170"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>

          {/* Column 3: Ready in Cerebro */}
          <div className="flex-[0.9] min-w-0 border border-[#EEF0F3] rounded-xl p-5 bg-[#FCFCFD] flex flex-col gap-2.5">
            <div className="text-xs font-semibold text-[#6B7180]">Ready in Cerebro</div>

            <div className="flex flex-col gap-2.5 flex-1 justify-center">
              {engineData.outputs.map((o, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 bg-white rounded-[9px] p-[10px_12px] border transition-all duration-300 ${
                    eDone ? "border-[#C7CBF9] opacity-100" : "border-[#EEF0F3] opacity-50"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={o.d} />
                  </svg>
                  <span className="flex-1 text-[13px] font-medium text-[#101426]">
                    {o.label}
                  </span>
                  <span
                    className={`text-[11px] font-semibold transition-colors duration-300 ${
                      eDone ? "text-[#15803D]" : "text-[#6B7180]"
                    }`}
                  >
                    {eDone ? "Ready" : "Waiting"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
