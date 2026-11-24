"use client";

import React, { useState } from "react";
import Link from "next/link";
import { pricingData } from "@/content/pricing";

export default function PricingClient() {
  const [sizeIdx, setSizeIdx] = useState(1);
  const { sizes, plans, matrix, faq } = pricingData;

  return (
    <div className="font-sans text-[#1C2433] bg-white tabular-nums">
      {/* Hero */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-[#F3F8FE] to-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7685] inline-block">
            <Link href="/" className="hover:text-[#0070C2] no-underline">
              Home
            </Link>{" "}
            / <span className="text-[#000000]">Pricing</span>
          </nav>
          <h1 className="mt-7 mx-auto max-w-[760px] font-heading font-semibold text-[36px] sm:text-[44px] md:text-[58px] leading-[1.05] tracking-[-0.03em] text-[#000000]">
            Plans that fit how you work.
          </h1>
          <p className="mt-5 mx-auto max-w-[620px] text-[18px] md:text-[19px] leading-[1.55] text-[#5A6675]">
            Every plan includes Cerebro AI. We set each plan up around your platforms, brands and team, so it starts with a short demo.
          </p>

          <div className="mt-9 inline-flex flex-col items-center gap-3">
            <span id="brands-label" className="text-[14px] font-semibold text-[#000000]">
              How many brands or clients do you report on?
            </span>
            <div
              role="group"
              aria-labelledby="brands-label"
              className="inline-flex gap-1 p-1 rounded-xl bg-[#ECEEF3]"
            >
              {sizes.map((label, idx) => {
                const isOn = idx === sizeIdx;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={isOn}
                    onClick={() => setSizeIdx(idx)}
                    className={`min-h-[44px] px-4 sm:px-5 rounded-lg border-0 text-[14.5px] font-semibold transition-all cursor-pointer ${
                      isOn
                        ? "bg-white text-[#000000] shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                        : "bg-transparent text-[#5A6675] hover:text-[#000000]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-6 md:py-10 pb-20 md:pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, idx) => {
            const isRec = idx === sizeIdx;
            return (
              <div
                key={p.name}
                className={`relative bg-white rounded-2xl p-7 md:p-8 flex flex-col gap-4 transition-all duration-300 ${
                  isRec
                    ? "border-2 border-[#0070C2] shadow-[0_20px_50px_rgba(0,112,194,0.16)] scale-[1.02] z-10"
                    : "border border-[#E2E8F0] shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                }`}
              >
                {isRec && (
                  <span className="absolute -top-3.5 left-7 text-[12px] font-semibold px-3 py-1 rounded-full bg-[#0070C2] text-white tracking-wide">
                    Best fit for you
                  </span>
                )}
                <h2 className="m-0 font-heading text-[24px] font-semibold text-[#000000]">
                  {p.name}
                </h2>
                <p className="m-0 text-[15px] leading-[1.55] text-[#5A6675] min-h-[48px]">
                  {p.for}
                </p>
                <div className="font-heading text-[28px] sm:text-[30px] font-semibold tracking-[-0.02em] text-[#000000]">
                  Custom pricing
                </div>
                <Link
                  href={p.href}
                  className={`inline-flex items-center justify-center min-h-[48px] rounded-xl text-[15px] font-semibold no-underline transition-colors ${
                    isRec
                      ? "bg-[#0070C2] text-white hover:bg-[#005DA3]"
                      : "bg-white text-[#000000] border border-[#D5D8E0] hover:border-[#000000]"
                  }`}
                >
                  {p.cta}
                </Link>

                <ul className="mt-2 p-0 list-none flex flex-col gap-2.5">
                  {p.items.map((it, itIdx) => (
                    <li
                      key={itIdx}
                      className="flex gap-2.5 text-[14.5px] leading-[1.5] text-[#1C2433]"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0070C2"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="shrink-0 mt-1"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compare Plans Matrix */}
      <section className="py-20 md:py-24 bg-[#F6F8FB]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#000000]">
            Compare plans
          </h2>
          <p className="mt-3 text-[15px] text-[#5A6675]">
            Plan limits are set with each customer. All live features included out of the box.
          </p>

          <div className="mt-7 bg-white border border-[#E2E8F0] rounded-2xl overflow-x-auto shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <table className="w-full min-w-[760px] border-collapse text-[14.5px]">
              <thead>
                <tr className="border-b border-[#EEF0F3]">
                  <th
                    scope="col"
                    className="text-left py-4 px-6 text-[13px] font-medium text-[#6B7685] w-[34%]"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="text-center py-4 px-4 text-[15px] font-semibold text-[#000000]"
                  >
                    Starter
                  </th>
                  <th
                    scope="col"
                    className="text-center py-4 px-4 text-[15px] font-semibold text-[#000000]"
                  >
                    Scale
                  </th>
                  <th
                    scope="col"
                    className="text-center py-4 px-6 text-[15px] font-semibold text-[#000000]"
                  >
                    Agency and Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((r, idx) => {
                  if (r.isGroup) {
                    return (
                      <tr key={idx} className="bg-[#FAFAFC]">
                        <th
                          colSpan={4}
                          scope="row"
                          className="text-left py-3 px-6 text-[13px] font-semibold text-[#0070C2] uppercase tracking-wider"
                        >
                          {r.label}
                        </th>
                      </tr>
                    );
                  }
                  return (
                    <tr
                      key={idx}
                      className="border-t border-[#EEF0F3] hover:bg-[#FAFBFD] transition-colors"
                    >
                      <th
                        scope="row"
                        className="text-left py-3.5 px-6 font-normal text-[#000000] text-[14.5px]"
                      >
                        {r.label}
                      </th>
                      <td className="text-center py-3.5 px-4 text-[#1C2433]">{r.a}</td>
                      <td className="text-center py-3.5 px-4 text-[#1C2433] font-medium">
                        {r.b}
                      </td>
                      <td className="text-center py-3.5 px-6 text-[#000000] font-semibold">
                        {r.c3}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="max-w-[880px] mx-auto px-6 md:px-10">
          <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#000000]">
            Pricing questions
          </h2>
          <div className="mt-7 flex flex-col gap-2.5">
            {faq.map((f, idx) => (
              <details
                key={idx}
                className="group bg-white border border-[#E2E8F0] rounded-xl px-5 hover:border-[#DDE0E7] transition-colors"
              >
                <summary className="min-h-[60px] flex items-center justify-between cursor-pointer text-[16px] font-semibold text-[#000000] select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="ml-4 text-[#9AA0AD] group-open:rotate-180 transition-transform">
                    &darr;
                  </span>
                </summary>
                <p className="m-0 pb-5 text-[15px] leading-[1.6] text-[#5A6675]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
