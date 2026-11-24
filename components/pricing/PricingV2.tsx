"use client";

import React, { useState } from "react";
import Link from "next/link";
import { isPlaceholderHidden } from "@/lib/site";

const CALC_OPTIONS = [
  { label: "1 brand", plan: "Brand", why: "One brand, one team, everything you need to start.", recIdx: 0 },
  { label: "2 to 5", plan: "Team", why: "Several brands, with scheduled reports and pacing.", recIdx: 1 },
  { label: "6 to 20", plan: "Agency", why: "Many clients, with white-label reports and client roles.", recIdx: 2 },
  { label: "More than 20", plan: "Agency", why: "Many clients, with white-label reports and client roles.", recIdx: 2 },
];

const PLANS = [
  {
    name: "Brand",
    desc: "For one brand’s in-house team.",
    price: "PKR [TBC]",
    ctaStyle: "secondary",
    features: [
      "Ask Cerebro",
      "Native connectors and sheet upload",
      "Dashboards and hierarchy reports",
      "Objective engine",
    ],
  },
  {
    name: "Team",
    desc: "For teams running several brands.",
    price: "PKR [TBC]",
    ctaStyle: "primary",
    features: [
      "Everything in Brand",
      "Scheduled PDFs",
      "Looker Studio and Sheets sync",
      "Budget pacing",
    ],
  },
  {
    name: "Agency",
    desc: "For agencies reporting on many clients.",
    price: "PKR [TBC]",
    ctaStyle: "secondary",
    features: [
      "Everything in Team",
      "White-label exports",
      "Client roles and permissions",
      "AI-built connectors",
    ],
  },
];

const MATRIX_ROWS = [
  { feature: "Ask Cerebro", brand: true, team: true, agency: true },
  { feature: "Native connectors", brand: true, team: true, agency: true },
  { feature: "Sheet upload", brand: true, team: true, agency: true },
  { feature: "Sales data", brand: true, team: true, agency: true },
  { feature: "Objective engine", brand: true, team: true, agency: true },
  { feature: "Dashboards and hierarchy", brand: true, team: true, agency: true },
  { feature: "Report builder", brand: true, team: true, agency: true },
  { feature: "AI data checks", brand: true, team: true, agency: true },
  { feature: "Scheduled PDFs", brand: false, team: true, agency: true },
  { feature: "Looker Studio and Sheets sync", brand: false, team: true, agency: true },
  { feature: "Budget pacing", brand: false, team: true, agency: true },
  { feature: "AI-built connectors", brand: false, team: false, agency: true },
  { feature: "White-label exports", brand: false, team: false, agency: true },
  { feature: "Client roles and permissions", brand: false, team: false, agency: true },
];

const PRICING_FAQS = [
  {
    q: "Is there a free trial?",
    a: "No. Book a demo and we’ll set Cerebro up on your own data, so you see real answers first.",
  },
  {
    q: "Which currency do you bill in?",
    a: "[TBC: PKR, USD or both]",
  },
  {
    q: "Can we change plans later?",
    a: "[TBC: confirm plan changes]",
  },
  {
    q: "Do custom connectors cost extra?",
    a: "[TBC: confirm custom connector pricing]",
  },
];

export default function PricingV2() {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const currentCalc = CALC_OPTIONS[selectedIdx];
  const recPlanIdx = currentCalc.recIdx;

  return (
    <div className="font-sans text-[#2B3040] bg-white min-w-0 tabular-nums">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[88px] pb-[56px] bg-[#F1F2FF]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 -top-[420px] -ml-[450px] w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(165,180,252,0.6) 0, rgba(0,0,0,0) 64%)",
          }}
        />
        <div className="relative max-w-[860px] mx-auto px-6 md:px-10 box-border text-center">
          <p className="m-0 mb-[18px] text-[14px] font-semibold text-[#4F46E5]">Pricing</p>
          <h1 className="m-0 font-heading font-semibold text-[38px] sm:text-[48px] md:text-[62px] leading-[1.03] tracking-[-0.035em] text-[#101426]">
            Plans that grow with your clients.
          </h1>
          <p className="mt-[22px] mx-auto max-w-[560px] text-[18px] md:text-[19px] leading-[1.55] text-[#5B6170]">
            Every plan includes Cerebro AI. Book a demo for a plan built around your team.
          </p>
        </div>
      </section>

      {/* Main Calculator & Cards Section */}
      <section id="main" className="pb-[96px] bg-[#F1F2FF]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border">
          {/* Calculator Controls */}
          <div className="text-center">
            <div className="text-[16px] font-semibold text-[#101426]">
              How many brands or clients do you report on?
            </div>
            <div
              role="group"
              aria-label="Number of brands or clients"
              className="mt-[14px] inline-flex gap-2 flex-wrap justify-center"
            >
              {CALC_OPTIONS.map((opt, i) => {
                const isOn = i === selectedIdx;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    aria-pressed={isOn}
                    onClick={() => setSelectedIdx(i)}
                    className="whitespace-nowrap shrink-0 h-[44px] px-[18px] rounded-[22px] font-inherit text-[14.5px] font-semibold cursor-pointer transition-colors"
                    style={{
                      border: isOn ? "1px solid #101426" : "1px solid #D5D8E0",
                      background: isOn ? "#101426" : "#FFFFFF",
                      color: isOn ? "#FFFFFF" : "#2B3040",
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="mt-[14px] text-[15px] text-[#5B6170]">
              <strong className="text-[#101426]">Recommended: {currentCalc.plan}.</strong>{" "}
              {currentCalc.why}
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="mt-[40px] flex gap-5 flex-wrap items-stretch">
            {PLANS.map((plan, i) => {
              const isRec = i === recPlanIdx;
              return (
                <div
                  key={plan.name}
                  className="flex-1 min-w-[280px] bg-white rounded-[24px] p-[30px] box-border flex flex-col gap-[18px] transition-all"
                  style={{
                    border: isRec ? "2px solid #4F46E5" : "2px solid #E4E7EC",
                    boxShadow: isRec ? "0 24px 56px rgba(79,70,229,0.18)" : "none",
                  }}
                >
                  <div className="flex justify-between items-center gap-2.5">
                    <span className="font-heading text-[24px] font-semibold text-[#101426]">
                      {plan.name}
                    </span>
                    {isRec && (
                      <span className="inline-flex items-center text-[12px] font-semibold py-[3px] px-[9px] rounded-[10px] bg-[#EEF0FF] text-[#3730A3]">
                        Recommended
                      </span>
                    )}
                  </div>
                  <span className="text-[15px] text-[#5B6170]">{plan.desc}</span>
                  <div>
                    <span className="font-heading text-[32px] sm:text-[36px] font-semibold tracking-[-0.02em] text-[#101426]">
                      {isPlaceholderHidden(plan.price) ? "Custom" : plan.price}
                    </span>
                    <span className="text-[14px] text-[#5B6170]"> / month</span>
                  </div>
                  <Link
                    href="/demo"
                    className="whitespace-nowrap shrink-0 inline-flex items-center justify-center h-[46px] px-6 rounded-[23px] text-[15px] font-semibold no-underline transition-colors"
                    style={{
                      background: plan.ctaStyle === "primary" ? "#4F46E5" : "#FFFFFF",
                      color: plan.ctaStyle === "primary" ? "#FFFFFF" : "#101426",
                      border: plan.ctaStyle === "primary" ? "0" : "1px solid #D5D8E0",
                    }}
                  >
                    Book a demo
                  </Link>
                  <ul className="mt-1 p-0 list-none flex flex-col gap-2.5">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex gap-2.5 text-[15px] leading-[1.45] text-[#2B3040]">
                        <span className="flex-shrink-0 mt-[1px]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {!isPlaceholderHidden("[TBC: plan names]") && (
            <p className="mt-5 text-center text-[13.5px] text-[#9A3412]">
              [TBC: plan names, prices, currency, limits and which features sit in each plan]
            </p>
          )}
        </div>
      </section>

      {/* Compare Plans Table */}
      <section className="py-[104px] bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border">
          <div>
            <h2 className="m-0 text-center font-heading font-semibold text-[30px] sm:text-[38px] md:text-[46px] leading-[1.08] tracking-[-0.025em] text-[#101426]">
              Compare plans
            </h2>
            <p className="mt-[14px] mx-auto max-w-[600px] text-center text-[18px] leading-[1.5] text-[#5B6170]">
              Every plan includes Cerebro AI and Ask Cerebro.
            </p>
          </div>

          <div className="mt-[44px] overflow-x-auto border border-[#E4E7EC] rounded-[20px]">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left p-4 text-[13px] font-medium text-[#5B6170] bg-[#FAFAFC]"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="text-center p-4 text-[15px] font-semibold text-[#101426] bg-[#FAFAFC]"
                  >
                    Brand
                  </th>
                  <th
                    scope="col"
                    className="text-center p-4 text-[15px] font-semibold text-[#101426] bg-[#FAFAFC]"
                  >
                    Team
                  </th>
                  <th
                    scope="col"
                    className="text-center p-4 text-[15px] font-semibold text-[#101426] bg-[#FAFAFC]"
                  >
                    Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <th
                      scope="row"
                      className="text-left py-[14px] px-4 border-t border-[#EEF0F3] text-[15px] font-medium text-[#101426]"
                    >
                      {row.feature}
                    </th>
                    <td className="text-center py-[14px] px-4 border-t border-[#EEF0F3]">
                      {row.brand ? (
                        <span className="inline-flex items-center justify-center">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="sr-only">Included</span>
                        </span>
                      ) : (
                        <span className="text-[13px] text-[#9AA0AD]">Not included</span>
                      )}
                    </td>
                    <td className="text-center py-[14px] px-4 border-t border-[#EEF0F3]">
                      {row.team ? (
                        <span className="inline-flex items-center justify-center">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="sr-only">Included</span>
                        </span>
                      ) : (
                        <span className="text-[13px] text-[#9AA0AD]">Not included</span>
                      )}
                    </td>
                    <td className="text-center py-[14px] px-4 border-t border-[#EEF0F3]">
                      {row.agency ? (
                        <span className="inline-flex items-center justify-center">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="sr-only">Included</span>
                        </span>
                      ) : (
                        <span className="text-[13px] text-[#9AA0AD]">Not included</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="py-[104px] bg-[#F7F8FA]">
        <div className="max-w-[860px] mx-auto px-6 md:px-10 box-border">
          <h2 className="m-0 text-center font-heading font-semibold text-[30px] sm:text-[38px] md:text-[46px] leading-[1.08] tracking-[-0.025em] text-[#101426]">
            Pricing questions
          </h2>
          <div className="mt-10 flex flex-col gap-2.5">
            {PRICING_FAQS.map((item) => {
              const isHidden = isPlaceholderHidden(item.a);
              if (isHidden) return null;
              return (
                <details
                  key={item.q}
                  className="group bg-white rounded-[16px] px-[22px] transition-all"
                >
                  <summary className="min-h-[62px] flex items-center justify-between cursor-pointer text-[16px] font-semibold text-[#101426] list-none">
                    <span>{item.q}</span>
                    <span className="ml-4 flex-shrink-0 text-[#5B6170] group-open:rotate-180 transition-transform">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="m-0 pb-5 text-[15px] leading-[1.6] text-[#5B6170]">{item.a}</p>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
