import React from "react";
import Link from "next/link";
import { heroData } from "@/content/home";
import HeroDashboard from "./HeroDashboard";

interface HeroSectionProps {
  variant?: "option-1" | "option-2";
}

export default function HeroSection({ variant = "option-2" }: HeroSectionProps) {
  const isOption1 = variant === "option-1";
  const h1 = isOption1 ? heroData.h1Option1 : heroData.h1Option2;
  const lead = isOption1 ? heroData.leadOption1 : heroData.leadOption2;
  const secondaryHref = isOption1 ? "#engine" : "#ai";

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 bg-[linear-gradient(to_bottom,#16144A_0,#1C1A57_60%,#FFFFFF_60%,#FFFFFF_100%)]"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-60 -right-40 w-[760px] h-[760px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0,rgba(199,210,254,0.6)_2.5%,rgba(129,140,248,0.25)_12%,rgba(79,70,229,0.08)_30%,rgba(28,26,87,0)_58%)]"
      />

      {/* Decorative Ellipse SVGs */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 top-0 w-full h-[60%]"
      >
        <ellipse
          cx="1180"
          cy="120"
          rx="820"
          ry="230"
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
          transform="rotate(-12 1180 120)"
        />
        <ellipse
          cx="1120"
          cy="150"
          rx="1080"
          ry="340"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          transform="rotate(-9 1120 150)"
        />
      </svg>

      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Text Area */}
        <div className="max-w-[960px] mx-auto text-center">
          {!isOption1 && (
            <p className="m-0 mb-5 text-sm font-semibold text-[#A5B4FC]">
              {heroData.eyebrow2}
            </p>
          )}

          <h1 className="m-0 font-display font-semibold text-[clamp(40px,5vw,72px)] leading-[1.02] tracking-[-0.035em] text-white">
            {h1}
          </h1>

          <p className="mt-6 mx-auto max-w-[720px] text-lg sm:text-xl leading-[1.55] text-[#CDD0F3]">
            {lead}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex gap-3 justify-center flex-wrap">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] bg-white hover:bg-[#F7F8FA] text-[#1C1A57] text-base font-semibold shadow-md transition-colors"
            >
              Book a demo
            </Link>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] border border-white/35 hover:border-white/60 hover:bg-white/5 text-white text-base font-semibold transition-colors"
            >
              See how it works
            </a>
          </div>

          {/* Platform chips */}
          <div className="mt-7 flex gap-2 justify-center flex-wrap">
            {heroData.chips.map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 h-[34px] pl-1.5 pr-3 rounded-full bg-white/[0.08] border border-white/[0.14] text-[#E3E5FF] text-[13px]"
              >
                <span
                  className="w-[22px] h-[22px] rounded-full text-white text-[10px] font-bold inline-flex items-center justify-center"
                  style={{ background: c.color }}
                >
                  {c.mark}
                </span>
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Interactive Dashboard Mockup */}
        <HeroDashboard />
      </div>
    </section>
  );
}
