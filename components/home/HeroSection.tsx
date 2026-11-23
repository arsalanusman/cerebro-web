import React from "react";
import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/content/home";
import HeroDashboard from "./HeroDashboard";
import AnimatedText from "@/components/motion/AnimatedText";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticButton from "@/components/motion/MagneticButton";

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
        className="pointer-events-none absolute -top-60 -right-40 w-[760px] h-[760px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0,rgba(199,210,254,0.6)_2.5%,rgba(129,140,248,0.25)_12%,rgba(79,70,229,0.08)_30%,rgba(28,26,87,0)_58%)] animate-pulse"
        style={{ animationDuration: "8s" }}
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
            <ScrollReveal direction="down" distance={16} delay={0.1}>
              <p className="m-0 mb-5 text-sm font-semibold text-[#A5B4FC] tracking-wide uppercase">
                {heroData.eyebrow2}
              </p>
            </ScrollReveal>
          )}

          <h1 className="m-0 font-display font-semibold text-[clamp(40px,5vw,72px)] leading-[1.02] tracking-[-0.035em] text-white">
            <AnimatedText text={h1} delay={0.15} />
          </h1>

          <ScrollReveal direction="up" distance={20} delay={0.35}>
            <p className="mt-6 mx-auto max-w-[720px] text-lg sm:text-xl leading-[1.55] text-[#CDD0F3]">
              {lead}
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal direction="up" distance={24} delay={0.5}>
            <div className="mt-9 flex gap-4 justify-center items-center flex-wrap">
              <MagneticButton strength={0.2}>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-[12px] bg-white hover:bg-[#F7F8FA] text-[#1C1A57] text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book a demo
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href={secondaryHref}
                  className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-[12px] border border-white/35 hover:border-white/70 hover:bg-white/10 text-white text-base font-semibold backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  See how it works
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Platform chips */}
          <ScrollReveal direction="up" distance={20} delay={0.65}>
            <div className="mt-7 flex gap-2 justify-center flex-wrap">
              {heroData.chips.map((c, i) => {
                const chipLogo = (c as { logo?: string }).logo;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 h-[34px] pl-1.5 pr-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.14] text-[#E3E5FF] text-[13px] transition-all duration-200 hover:scale-105"
                  >
                    {chipLogo ? (
                      <span className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-xs">
                        <Image
                          src={chipLogo}
                          alt={c.label}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        className="w-[22px] h-[22px] rounded-full text-white text-[10px] font-bold inline-flex items-center justify-center"
                        style={{ background: c.color }}
                      >
                        {c.mark}
                      </span>
                    )}
                    {c.label}
                  </span>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Interactive Dashboard Mockup with entrance */}
        <ScrollReveal direction="zoom" delay={0.7} duration={0.9}>
          <HeroDashboard />
        </ScrollReveal>
      </div>
    </section>
  );
}
