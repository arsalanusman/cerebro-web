import React from "react";
import { compareData } from "@/content/home";

export default function CompareTable() {
  return (
    <section className="py-20 lg:py-[88px] bg-[#F7F8FA]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <div className="flex gap-12 justify-between items-end flex-wrap">
          <h2 className="m-0 max-w-[620px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            {compareData.h2}
          </h2>
          <p className="m-0 max-w-[420px] text-lg leading-[1.55] text-[#5B6170]">
            {compareData.lead}
          </p>
        </div>

        {/* Table */}
        <div className="mt-10 overflow-x-auto border border-[#E4E7EC] rounded-2xl bg-white shadow-sm">
          <table className="w-full min-w-[760px] border-collapse text-[15px]">
            <thead>
              <tr className="border-b border-[#EEF0F3]">
                <th
                  scope="col"
                  className="w-[16%] text-left p-4 sm:px-6 text-[13px] font-medium text-[#6B7180]"
                >
                  <span className="sr-only">Task</span>
                </th>
                <th
                  scope="col"
                  className="w-[42%] text-left p-4 sm:px-6 text-sm font-semibold text-[#5B6170]"
                >
                  Without Cerebro
                </th>
                <th
                  scope="col"
                  className="w-[42%] text-left p-4 sm:px-6 text-sm font-semibold text-[#4338CA] bg-[#F5F6FF]"
                >
                  With Cerebro
                </th>
              </tr>
            </thead>
            <tbody>
              {compareData.items.map((c, idx) => (
                <tr key={idx}>
                  <th
                    scope="row"
                    className="text-left p-4 sm:px-6 border-t border-[#EEF0F3] font-semibold text-[#101426] align-top"
                  >
                    {c.task}
                  </th>
                  <td className="p-4 sm:px-6 border-t border-[#EEF0F3] text-[#5B6170] align-top">
                    {c.without}
                  </td>
                  <td className="p-4 sm:px-6 border-t border-[#E7E9FB] text-[#101426] bg-[#F5F6FF] align-top">
                    <span className="flex gap-2.5 items-start">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4F46E5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="shrink-0 mt-0.5"
                      >
                        <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12.5l2.5 2.5L16 9.5" />
                      </svg>
                      <span>{c.with}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
