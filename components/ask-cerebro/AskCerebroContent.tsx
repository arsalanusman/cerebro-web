import React from "react";
import Link from "next/link";
import { askCerebroContent } from "@/content/ask-cerebro";

export default function AskCerebroContent() {
  return (
    <>
      {/* 1. Four Kinds of Questions */}
      <section id="ask-types" className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            Four kinds of questions it handles well.
          </h2>

          <div className="mt-12 flex flex-col gap-5">
            {askCerebroContent.kinds.map((k, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center border border-[#E4E7EC] rounded-2xl p-7 sm:p-9 bg-white shadow-sm"
              >
                {/* Left: Description */}
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-semibold text-[#4F46E5]">
                    {k.n}
                  </span>
                  <h3 className="m-0 mt-2.5 font-display text-[26px] leading-[1.2] font-semibold tracking-[-0.015em] text-[#101426]">
                    {k.title}
                  </h3>
                  <p className="mt-3 m-0 text-base leading-[1.6] text-[#5B6170]">
                    {k.text}
                  </p>
                  <div className="mt-4.5 inline-flex gap-2.5 items-start bg-[#F2F3F6] rounded-xl p-[10px_14px] text-[14.5px] font-medium text-[#101426]">
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
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{k.example}</span>
                  </div>
                </div>

                {/* Right: Visual Mockup */}
                <div className="w-full lg:w-[420px] shrink-0 bg-[#FAFAFC] border border-[#EEF0F3] rounded-xl p-5">
                  <div className="text-xs text-[#6B7180]">{k.visualTitle}</div>
                  <div className="mt-3 flex flex-col gap-3">
                    {k.bars.map((b, bIdx) => (
                      <div key={bIdx}>
                        <div className="flex justify-between gap-3 text-[13.5px]">
                          <span className="text-[#2B3040]">{b.name}</span>
                          <span
                            className="font-semibold"
                            style={{ color: b.c }}
                          >
                            {b.value}
                          </span>
                        </div>
                        <div className="mt-1.5 h-2 rounded-full bg-[#ECEEF3] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: b.pct,
                              backgroundColor: b.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. How Ask Cerebro Works */}
      <section className="py-20 lg:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            How Ask Cerebro works through a question.
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {askCerebroContent.howItWorks.map((h, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E4E7EC] rounded-2xl p-6 shadow-sm flex flex-col"
              >
                <span className="w-8 h-8 rounded-full bg-[#1C1A57] text-white text-[13px] font-semibold inline-flex items-center justify-center">
                  {h.n}
                </span>
                <h3 className="m-0 mt-4 text-[17px] font-semibold text-[#101426]">
                  {h.title}
                </h3>
                <p className="mt-1.5 m-0 text-[14.5px] leading-[1.55] text-[#5B6170]">
                  {h.text}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Checks */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {askCerebroContent.checks.map((c, idx) => (
              <div key={idx} className="flex gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 mt-0.5"
                >
                  <path d={c.d} />
                </svg>
                <div>
                  <div className="text-base font-semibold text-[#101426]">
                    {c.title}
                  </div>
                  <p className="mt-1 m-0 text-[14.5px] leading-[1.55] text-[#5B6170]">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Questions Teams Ask Every Week */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            Questions teams ask every week.
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {askCerebroContent.questionGroups.map((g, idx) => (
              <div key={idx} className="min-w-0">
                <h3 className="m-0 text-sm font-semibold text-[#6B7180]">
                  {g.title}
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {g.qs.map((q, qIdx) => (
                    <span
                      key={qIdx}
                      className="block border border-[#E4E7EC] rounded-lg p-2.5 px-3 text-sm leading-snug text-[#101426] bg-white shadow-2xs"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-20 lg:py-24 bg-[#F7F8FA]">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            Questions about Ask Cerebro
          </h2>

          <div className="mt-8 flex flex-col gap-2.5">
            {askCerebroContent.faq.map((f, idx) => (
              <details
                key={idx}
                className="group bg-white border border-[#E4E7EC] rounded-xl px-5 transition-colors"
              >
                <summary className="min-h-[60px] flex items-center justify-between cursor-pointer text-base font-semibold text-[#101426] list-none">
                  <span>{f.q}</span>
                  <span className="text-[#6B7180] group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="m-0 pb-5 text-[15px] leading-[1.6] text-[#5B6170]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Part of Cerebro AI Pillars */}
      <section className="py-16 sm:py-[72px] bg-white border-t border-[#EEF0F3]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
          <div className="text-[13px] font-semibold text-[#6B7180]">
            Part of Cerebro AI
          </div>
          <div className="mt-3.5 flex gap-2.5 flex-wrap">
            {askCerebroContent.pillars.map((p, idx) => (
              <Link
                key={idx}
                href={p.href}
                className={`inline-flex items-center min-h-[44px] px-4 rounded-[10px] border text-[14.5px] font-semibold transition-colors ${
                  p.active
                    ? "border-[#101426] bg-[#101426] text-white"
                    : "border-[#DDE0E7] bg-white text-[#2B3040] hover:border-[#C9CDD6]"
                }`}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
