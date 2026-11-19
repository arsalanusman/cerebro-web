import React from "react";
import { aiSteps } from "@/content/home";

export default function AiStepsGrid() {
  return (
    <section id="ai" className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header Row */}
        <div className="flex gap-12 justify-between items-end flex-wrap">
          <div>
            <p className="m-0 mb-3.5 text-sm font-semibold text-[#4F46E5]">
              Cerebro AI
            </p>
            <h2 className="m-0 max-w-[640px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
              AI at every step, with its work shown.
            </h2>
          </div>
          <p className="m-0 max-w-[440px] text-lg leading-[1.55] text-[#5B6170]">
            From the moment data arrives to the moment someone asks a question, Cerebro AI does the groundwork and shows what it did.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiSteps.map((s, i) => (
            <div
              key={i}
              className="border border-[#E4E7EC] rounded-2xl p-6 bg-white flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <span className="w-10 h-10 rounded-xl bg-[#EEF0FF] inline-flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={s.d} />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-[#6B7180]">{s.n}</span>
              </div>

              <h3 className="m-0 mt-1 font-display text-[19px] font-semibold text-[#101426]">
                {s.title}
              </h3>

              <p className="m-0 text-[14.5px] leading-[1.55] text-[#5B6170]">
                {s.text}
              </p>

              <div className="mt-auto flex gap-2 items-start rounded-lg bg-[#F7F7FF] border border-[#E3E6FF] p-[10px_12px] text-[12.5px] leading-[1.45] text-[#2E2A82]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                </svg>
                <span>{s.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
