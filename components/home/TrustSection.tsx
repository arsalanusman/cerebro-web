import React from "react";
import Link from "next/link";
import { trustData } from "@/content/home";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <ScrollReveal direction="down" distance={20}>
          <div className="flex gap-12 justify-between items-end flex-wrap">
            <h2 className="m-0 max-w-[640px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
              {trustData.h2}
            </h2>
            <Link
              href={trustData.linkHref}
              className="inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#0070C2] hover:text-[#005DA3] transition-colors group"
            >
              <span>{trustData.linkText}</span>
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
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* 4 Cards */}
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustData.items.map((t, idx) => (
            <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 0.1}>
              <TiltCard maxTilt={5} glare={true} className="h-full">
                <div className="bg-white border border-[#E2E8F0] hover:border-[#BFD8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F2FC] flex items-center justify-center text-[#0070C2]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={t.d} />
                    </svg>
                  </div>
                  <h3 className="m-0 mt-3.5 text-base font-semibold text-[#000000]">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 m-0 text-[14.5px] leading-[1.55] text-[#5A6675]">
                    {t.text}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
