import React from "react";
import Link from "next/link";
import { trustData } from "@/content/home";

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <div className="flex gap-12 justify-between items-end flex-wrap">
          <h2 className="m-0 max-w-[640px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            {trustData.h2}
          </h2>
          <Link
            href={trustData.linkHref}
            className="inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors"
          >
            {trustData.linkText}
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
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* 4 Cards */}
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustData.items.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E7EC] rounded-xl p-6 shadow-sm flex flex-col"
            >
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
                <path d={t.d} />
              </svg>
              <h3 className="m-0 mt-3.5 text-base font-semibold text-[#101426]">
                {t.title}
              </h3>
              <p className="mt-1.5 m-0 text-[14.5px] leading-[1.55] text-[#5B6170]">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
