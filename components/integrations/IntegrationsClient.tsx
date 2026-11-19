"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { integrationsData } from "@/content/integrations";

export default function IntegrationsClient() {
  const [curStep, setCurStep] = useState(1);
  const { ways, native, steps, fields, mapping, faq } = integrationsData;

  const statusMap: Record<number, { status: string; pillBg: string; pillFg: string }> = {
    1: { status: "Draft", pillBg: "#F1F2F5", pillFg: "#4B5160" },
    2: { status: "Needs review", pillBg: "#FFF7ED", pillFg: "#9A3412" },
    3: { status: "Live", pillBg: "#DCFCE7", pillFg: "#166534" },
  };

  const st = statusMap[curStep];

  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5F6FF] to-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7180]">
            <Link href="/" className="hover:text-[#4F46E5] no-underline">
              Home
            </Link>{" "}
            / <span className="text-[#101426]">Integrations</span>
          </nav>
          <div className="mt-8 max-w-[820px]">
            <p className="m-0 mb-4 text-[14px] font-semibold text-[#4F46E5]">Integrations</p>
            <h1 className="m-0 font-heading font-semibold text-[36px] sm:text-[44px] md:text-[58px] leading-[1.05] tracking-[-0.03em] text-[#101426]">
              Bring in data from any marketing platform.
            </h1>
            <p className="mt-5 max-w-[680px] text-[18px] md:text-[19px] leading-[1.55] text-[#5B6170]">
              Native connectors for Meta, Google and TikTok, AI-built connectors for anything else, and sheet uploads. Every source lands in the same clean model.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {ways.map((w) => (
              <a
                key={w.title}
                href={w.href}
                className="flex flex-col gap-2.5 bg-white border border-[#E4E7EC] rounded-2xl p-6 md:p-7 no-underline shadow-[0_8px_24px_rgba(16,20,38,0.05)] hover:border-[#A5B4FC] hover:shadow-[0_12px_32px_rgba(79,70,229,0.08)] transition-all group"
              >
                <span className="w-11 h-11 rounded-xl bg-[#EEF0FF] inline-flex items-center justify-center shrink-0">
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
                  >
                    <path d={w.d} />
                  </svg>
                </span>
                <span className="mt-1 font-heading text-[20px] font-semibold text-[#101426] group-hover:text-[#4F46E5] transition-colors">
                  {w.title}
                </span>
                <span className="text-[14.5px] leading-[1.55] text-[#5B6170]">{w.text}</span>
                <span className="mt-1 text-[14px] font-semibold text-[#4F46E5] inline-flex items-center gap-1">
                  {w.cta} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Native Connectors */}
      <section id="native" className="py-20 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            Native connectors
          </h2>
          <p className="mt-3.5 max-w-[640px] text-[17px] md:text-[18px] leading-[1.55] text-[#5B6170]">
            Built and maintained by Cerebro. Choose the ad accounts to include, and sync on a schedule or on demand.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {native.map((n) => (
              <div
                key={n.name}
                style={{ background: n.bg }}
                className="border border-[#E4E7EC] rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  {n.logo ? (
                    <div className="w-10 h-10 rounded-[10px] bg-white border border-[#E4E7EC] flex items-center justify-center p-2 shrink-0 shadow-sm">
                      <Image
                        src={n.logo}
                        alt={`${n.name} logo`}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span
                      style={{ background: n.color }}
                      className="w-10 h-10 rounded-[10px] text-white text-[14px] font-bold inline-flex items-center justify-center shrink-0"
                    >
                      {n.mark}
                    </span>
                  )}
                  <span className="flex-1 font-heading text-[18px] font-semibold text-[#101426]">
                    {n.name}
                  </span>
                  <span
                    style={{ background: n.pillBg, color: n.pillFg }}
                    className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {n.status}
                  </span>
                </div>
                <dl className="mt-4 flex flex-col gap-2.5 text-[14px]">
                  {n.facts.map((f, idx) => (
                    <div key={idx} className="flex gap-3">
                      <dt className="w-[120px] shrink-0 text-[#6B7180]">{f.k}</dt>
                      <dd className="m-0 text-[#101426] leading-[1.5]">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13.5px] text-[#5B6170]">
            Available metrics depend on the platform and the campaign objective.
          </p>
        </div>
      </section>

      {/* Custom Connectors with AI */}
      <section id="custom" className="py-20 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <p className="m-0 mb-3 text-[14px] font-semibold text-[#4F46E5]">Cerebro AI</p>
          <h2 className="m-0 max-w-[760px] font-heading font-semibold text-[30px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            Custom connectors for any platform, built with AI.
          </h2>
          <p className="mt-3.5 max-w-[680px] text-[17px] md:text-[18px] leading-[1.55] text-[#5B6170]">
            Describe the platform or share its API docs. Cerebro AI drafts the connector and maps the fields, and your team reviews it. Prefer not to build it? Our team can set it up for you.
          </p>

          <div className="mt-10 flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Step Selector Tabs */}
            <div
              role="tablist"
              aria-label="Connector steps"
              aria-orientation="vertical"
              className="lg:w-[360px] shrink-0 flex flex-col gap-2.5"
            >
              {steps.map((s, idx) => {
                const stepNum = idx + 1;
                const isSelected = stepNum === curStep;
                const isDone = stepNum < curStep;
                return (
                  <button
                    key={s.n}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setCurStep(stepNum)}
                    className={`text-left min-h-[72px] p-4 rounded-xl border transition-all flex gap-3.5 items-start cursor-pointer ${
                      isSelected
                        ? "border-[#A5B4FC] bg-[#F5F6FF]"
                        : "border-[#E4E7EC] bg-white hover:border-[#DDE0E7]"
                    }`}
                  >
                    <span
                      className={`w-[30px] h-[30px] rounded-full shrink-0 text-[13px] font-semibold inline-flex items-center justify-center transition-colors ${
                        isSelected || isDone
                          ? "bg-[#4F46E5] text-white"
                          : "bg-[#ECEEF3] text-[#5B6170]"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[15.5px] font-semibold text-[#101426]">
                        {s.title}
                      </span>
                      <span className="text-[13.5px] leading-[1.45] text-[#5B6170]">
                        {s.text}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Preview Panel */}
            <div
              aria-live="polite"
              className="flex-1 border border-[#E4E7EC] rounded-2xl bg-white p-7 shadow-[0_16px_40px_rgba(16,20,38,0.06)]"
            >
              <div className="flex justify-between items-center gap-3 flex-wrap border-b border-[#F3F4F6] pb-4">
                <span className="text-[16px] font-semibold text-[#101426]">
                  Local publisher network
                </span>
                <span
                  style={{ background: st.pillBg, color: st.pillFg }}
                  className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {st.status}
                </span>
              </div>

              {/* Step 1: Input details */}
              {curStep === 1 && (
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="text-[13px] text-[#5B6170] block font-medium mb-1.5">
                      Platform name
                    </label>
                    <div className="border border-[#DDE0E7] rounded-lg px-3.5 py-2.5 text-[14px] text-[#101426] bg-[#FAFAFB]">
                      Local publisher network
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] text-[#5B6170] block font-medium mb-1.5">
                      API docs or a sample export
                    </label>
                    <div className="border border-dashed border-[#C9CDD6] rounded-lg px-4 py-4 text-[14px] text-[#101426] flex items-center gap-2.5 bg-[#FAFBFD]">
                      <svg
                        width="18"
                        height="18"
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
                      <span>publisher_api_docs.pdf</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setCurStep(2)}
                      className="inline-flex items-center h-10 px-4 rounded-lg bg-[#4F46E5] text-white text-[14px] font-semibold hover:bg-[#4338CA] transition-colors cursor-pointer"
                    >
                      Draft connector with AI
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Field Mappings */}
              {curStep === 2 && (
                <div className="mt-4 space-y-3.5">
                  <div className="rounded-lg bg-[#EEF0FF] p-3 text-[14px] text-[#2E2A82]">
                    Cerebro AI drafted the connector. 11 fields mapped, 3 to review.
                  </div>
                  <div className="border border-[#EEF0F3] rounded-lg divide-y divide-[#F3F4F6] overflow-hidden">
                    {fields.map((f, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-[13.5px]"
                      >
                        <span className="flex-1 text-[#5B6170] font-mono text-[13px]">
                          {f.from}
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#9AA0AD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                        <span className="flex-1 text-[#101426] font-medium">{f.to}</span>
                        <span
                          style={{ background: f.bg, color: f.fg }}
                          className="text-[11.5px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                        >
                          {f.state}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setCurStep(3)}
                      className="inline-flex items-center h-10 px-4 rounded-lg bg-[#15803D] text-white text-[14px] font-semibold hover:bg-[#166534] transition-colors cursor-pointer"
                    >
                      Approve &amp; Activate
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Activated */}
              {curStep === 3 && (
                <div className="mt-5 space-y-3">
                  <div className="flex gap-2.5 items-center text-[14.5px] text-[#101426]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#15803D"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>All 11 fields reviewed and approved</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-[14.5px] text-[#101426]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#15803D"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>First sync complete, data up to 18 Nov 2026</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-[14.5px] text-[#101426]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#15803D"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Now in dashboards, reports and Ask Cerebro</span>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setCurStep(1)}
                      className="inline-flex items-center h-9 px-3 text-[13px] font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors"
                    >
                      &larr; Reset walkthrough
                    </button>
                  </div>
                </div>
              )}

              <p className="mt-5 text-[12.5px] text-[#6B7180]">
                Example with a sample platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sheet Upload Section */}
      <section id="upload" className="py-20 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
          <div className="lg:w-[450px] shrink-0">
            <p className="m-0 mb-3 text-[14px] font-semibold text-[#4F46E5]">Cerebro AI</p>
            <h2 className="m-0 font-heading font-semibold text-[30px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#101426]">
              Upload a sheet. AI does the mapping.
            </h2>
            <p className="mt-3.5 text-[17px] md:text-[18px] leading-[1.55] text-[#5B6170]">
              Export from any platform and upload it. Cerebro AI matches every column to Cerebro’s metrics, cleans the rows and flags anything that needs a look.
            </p>
            <div className="mt-6 flex gap-2 flex-wrap">
              <span className="inline-flex items-center h-9 px-3.5 rounded-lg border border-[#E4E7EC] bg-white text-[14px] font-medium text-[#101426]">
                CSV
              </span>
              <span className="inline-flex items-center h-9 px-3.5 rounded-lg border border-[#E4E7EC] bg-white text-[14px] font-medium text-[#101426]">
                Excel
              </span>
              <span className="inline-flex items-center h-9 px-3.5 rounded-lg border border-[#E4E7EC] bg-white text-[14px] font-medium text-[#101426]">
                Google Sheets
              </span>
            </div>
          </div>

          <div className="flex-1 w-full bg-white border border-[#E4E7EC] rounded-2xl p-6 shadow-[0_16px_40px_rgba(16,20,38,0.06)]">
            <div className="flex items-center gap-3 border border-[#E4E7EC] rounded-xl p-3">
              <span className="w-9 h-9 rounded-lg bg-[#DCFCE7] text-[#166534] inline-flex items-center justify-center shrink-0">
                <svg
                  width="18"
                  height="18"
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
              <span className="flex-1 flex flex-col text-[14px]">
                <span className="text-[#101426] font-semibold">
                  publisher_report_oct.xlsx
                </span>
                <span className="text-[#6B7180] text-[12.5px]">412 rows, 14 columns</span>
              </span>
              <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EEF0FF] text-[#3730A3]">
                Mapped by AI
              </span>
            </div>

            <div className="mt-3.5 border border-[#EEF0F3] rounded-xl divide-y divide-[#F3F4F6] overflow-hidden">
              {mapping.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-[13.5px]"
                >
                  <span className="flex-1 text-[#5B6170]">{m.from}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA0AD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                  <span className="flex-1 text-[#101426] font-medium">{m.to}</span>
                </div>
              ))}
            </div>

            <div className="mt-3.5 flex gap-2.5 items-start rounded-xl bg-[#FFF7ED] p-3 text-[13.5px] leading-[1.5] text-[#9A3412]">
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
              <span>
                2 rows are missing dates and were flagged for review. 6 empty rows were removed.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration FAQ */}
      <section className="py-20 md:py-24">
        <div className="max-w-[880px] mx-auto px-6 md:px-10">
          <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
            Integration questions
          </h2>
          <div className="mt-7 flex flex-col gap-2.5">
            {faq.map((f, idx) => (
              <details
                key={idx}
                className="group bg-white border border-[#E4E7EC] rounded-xl px-5 hover:border-[#DDE0E7] transition-colors"
              >
                <summary className="min-h-[60px] flex items-center justify-between cursor-pointer text-[16px] font-semibold text-[#101426] select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="ml-4 text-[#9AA0AD] group-open:rotate-180 transition-transform">
                    &darr;
                  </span>
                </summary>
                <p className="m-0 pb-5 text-[15px] leading-[1.6] text-[#5B6170]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
