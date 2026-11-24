import React from "react";
import { compareData } from "@/content/home";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function CompareTable() {
  return (
    <section className="py-20 lg:py-[88px] bg-[#F6F8FB]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <ScrollReveal direction="down" distance={20}>
          <div className="flex gap-12 justify-between items-end flex-wrap">
            <h2 className="m-0 max-w-[620px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
              {compareData.h2}
            </h2>
            <p className="m-0 max-w-[420px] text-lg leading-[1.55] text-[#5A6675]">
              {compareData.lead}
            </p>
          </div>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal direction="up" distance={28} delay={0.2}>
          <div className="mt-10 overflow-x-auto border border-[#E2E8F0] rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <table className="w-full min-w-[760px] border-collapse text-[15px]">
              <thead>
                <tr className="border-b border-[#EEF0F3] bg-[#FCFCFD]">
                  <th
                    scope="col"
                    className="w-[16%] text-left p-4 sm:px-6 text-[13px] font-medium text-[#6B7685]"
                  >
                    <span className="sr-only">Task</span>
                  </th>
                  <th
                    scope="col"
                    className="w-[42%] text-left p-4 sm:px-6 text-sm font-semibold text-[#5A6675]"
                  >
                    Without Cerebro
                  </th>
                  <th
                    scope="col"
                    className="w-[42%] text-left p-4 sm:px-6 text-sm font-semibold text-[#005DA3] bg-[#F3F8FE]"
                  >
                    With Cerebro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F3]">
                {compareData.items.map((c, idx) => (
                  <tr
                    key={idx}
                    className="group transition-colors duration-150 hover:bg-[#F9FAFB]/80"
                  >
                    <th
                      scope="row"
                      className="text-left p-4 sm:px-6 font-semibold text-[#000000] align-top group-hover:text-[#0070C2] transition-colors"
                    >
                      {c.task}
                    </th>
                    <td className="p-4 sm:px-6 text-[#5A6675] align-top">
                      {c.without}
                    </td>
                    <td className="p-4 sm:px-6 text-[#000000] bg-[#F3F8FE] group-hover:bg-[#E8F2FC] transition-colors align-top">
                      <span className="flex gap-2.5 items-start">
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
                          <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12.5l2.5 2.5L16 9.5" />
                        </svg>
                        <span className="font-medium">{c.with}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
