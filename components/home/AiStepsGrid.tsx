import React from "react";
import { aiSteps } from "@/content/home";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function AiStepsGrid() {
  return (
    <section id="ai" className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
        {/* Header Row */}
        <ScrollReveal direction="down" distance={20}>
          <div className="flex gap-12 justify-between items-end flex-wrap">
            <div>
              <p className="m-0 mb-3.5 text-sm font-semibold text-[#0070C2] uppercase tracking-wider">
                Cerebro AI
              </p>
              <h2 className="m-0 max-w-[640px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
                AI at every step, with its work shown.
              </h2>
            </div>
            <p className="m-0 max-w-[440px] text-lg leading-[1.55] text-[#5A6675]">
              From the moment data arrives to the moment someone asks a question, Cerebro AI does the groundwork and shows what it did.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiSteps.map((s, i) => (
            <ScrollReveal key={i} direction="up" distance={24} delay={i * 0.08}>
              <TiltCard maxTilt={5} glare={true} className="h-full">
                <div className="border border-[#E2E8F0] hover:border-[#BFD8F0] rounded-2xl p-6 bg-white flex flex-col gap-3 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex justify-between items-center">
                    <span className="w-10 h-10 rounded-xl bg-[#E8F2FC] inline-flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0070C2"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={s.d} />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-[#6B7685]">{s.n}</span>
                  </div>

                  <h3 className="m-0 mt-1 font-display text-[19px] font-semibold text-[#000000]">
                    {s.title}
                  </h3>

                  <p className="m-0 text-[14.5px] leading-[1.55] text-[#5A6675]">
                    {s.text}
                  </p>

                  <div className="mt-auto flex gap-2 items-start rounded-lg bg-[#F7F7FF] border border-[#E3E6FF] p-[10px_12px] text-[12.5px] leading-[1.45] text-[#022771]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0070C2"
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
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
