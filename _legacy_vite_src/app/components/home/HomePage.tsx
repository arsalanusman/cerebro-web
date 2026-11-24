import React from "react";
import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import * as homeContent from "@/content/home";
import { approvedProof } from "@/content/proof";
import { AskDemo } from "./AskDemo";
import { ConvergeVisual } from "./ConvergeVisual";
import { VerdictCompare } from "./VerdictCompare";
import { DrillTabs } from "./DrillTabs";

import logoMeta from "@/imports/meta_icon.png";
import logoGoogle from "@/imports/google_png.png";
import logoTikTok from "@/imports/tiktok_logo_png.png";

/**
 * PlatformBadge component
 * Strictly limited to Meta Ads, Google Ads, and TikTok Ads per docs/site-rules.md
 */
export function PlatformBadge({ platform }: { platform: "meta" | "google" | "tiktok" | string }) {
  if (platform === "meta" || platform === "Meta Ads") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white text-xs font-semibold text-slate-800 shadow-2xs">
        <img src={logoMeta} alt="Meta Ads" className="w-4 h-4 object-contain" />
        Meta Ads
      </span>
    );
  }
  if (platform === "google" || platform === "Google Ads") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white text-xs font-semibold text-slate-800 shadow-2xs">
        <img src={logoGoogle} alt="Google Ads" className="w-4 h-4 object-contain" />
        Google Ads
      </span>
    );
  }
  if (platform === "tiktok" || platform === "TikTok Ads") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white text-xs font-semibold text-slate-800 shadow-2xs">
        <img src={logoTikTok} alt="TikTok Ads" className="w-4 h-4 object-contain" />
        TikTok Ads
      </span>
    );
  }
  return null;
}

/**
 * ProductShot component
 */
export function ProductShot({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={2880}
        height={1800}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="w-full h-auto object-cover object-top block"
      />
    </div>
  );
}

/**
 * Flagship HomePage
 * Renders all 13 sections in exact story order following docs/site-rules.md
 */
export default function HomePage({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const navigate = useNavigate();

  const handleDemoClick = (e: React.MouseEvent) => {
    if (onOpenDemo) {
      e.preventDefault();
      onOpenDemo();
    } else {
      navigate("/demo");
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-[#4A8FE0]/20 selection:text-slate-900">
      {/* ── 1. Hero ── */}
      <section className="bg-white pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Text block, left-aligned, max width 820px */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[820px] text-left flex flex-col items-start"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.12]">
              {homeContent.hero.h1}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[60ch]">
              {homeContent.hero.lead}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                {homeContent.hero.buttons.primary.label}
                <ArrowRight size={18} />
              </button>
              <a
                href={homeContent.hero.buttons.secondary.href}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-semibold px-6 py-3.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                {homeContent.hero.buttons.secondary.label}
              </a>
            </div>

            {/* Platform Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-medium text-slate-400 mr-1">
                {homeContent.hero.connectsToLabel}
              </span>
              {homeContent.hero.platforms.map((p) => (
                <PlatformBadge key={p.id} platform={p.id} />
              ))}
            </div>
          </motion.div>

          {/* HeroProduct, 56px below text, full container width with 40px bleed on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-14 relative w-full lg:-mx-10 lg:w-[calc(100%+80px)]"
          >
            {/* Soft brand wash behind frame */}
            <div className="p-3 sm:p-6 lg:p-8 rounded-3xl bg-[var(--brand-soft,#EEF4FC)]">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10">
                {/* LCP dashboard shot */}
                <div className="w-full">
                  <img
                    src={homeContent.hero.productShot.src}
                    alt={homeContent.hero.productShot.alt}
                    width={2880}
                    height={1800}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto object-cover object-top block"
                  />
                </div>

                {/* AskDemo docked on right edge on desktop */}
                <div className="hidden lg:block absolute top-12 right-10 w-[420px] max-w-[40%] z-20">
                  <AskDemo className="w-full" />
                </div>
              </div>
            </div>

            {/* Mobile AskDemo below screenshot */}
            <div className="block lg:hidden mt-6">
              <AskDemo className="w-full" />
            </div>

            {/* Caption below hero frame */}
            <div className="mt-3 text-left text-xs text-slate-400">
              Demo data for a sample brand. Answers replayed from Ask Cerebro.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Proof Strip (LogoWall) ── */}
      {/* LogoWall renders nothing until approved logos exist per docs/site-rules.md */}
      {approvedProof.testimonials.length > 0 && (
        <section className="py-10 border-y border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              {homeContent.proofStrip.heading}
            </span>
          </div>
        </section>
      )}

      {/* ── 3. The Problem ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Problem Copy */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                {homeContent.problem.h2}
              </h2>
              <div className="space-y-6">
                {homeContent.problem.lines.map((line, idx) => (
                  <div key={idx} className="pt-4 border-t border-slate-200">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5">
                      {line.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {line.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base sm:text-lg font-medium text-slate-900">
                {homeContent.problem.closing}
              </p>
            </div>

            {/* Right Column: ConvergeVisual Coded Diagram */}
            <div className="lg:col-span-7 w-full">
              <ConvergeVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. How It Works ── */}
      <section
        id={homeContent.howItWorks.id}
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--surface,#F8FAFC)] border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-12">
            {homeContent.howItWorks.h2}
          </h2>

          {/* 5 numbered steps horizontal on desktop, vertical on mobile + 6th Then Ask */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {homeContent.howItWorks.steps.map((step) => (
              <a
                key={step.number}
                href={step.href}
                className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-[#4A8FE0] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#4A8FE0] transition-colors mb-2 block">
                    0{step.number}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-[#4A8FE0] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-[#4A8FE0] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ChevronRight size={14} />
                </div>
              </a>
            ))}

            {/* 6th "Then ask" item */}
            <a
              href={homeContent.howItWorks.thenAsk.href}
              className="group p-5 rounded-xl border-2 border-dashed border-[#4A8FE0]/40 bg-[var(--brand-soft,#EEF4FC)]/50 hover:bg-[var(--brand-soft,#EEF4FC)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#4A8FE0] mb-2 block">
                  06
                </span>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-[#4A8FE0] transition-colors">
                  {homeContent.howItWorks.thenAsk.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {homeContent.howItWorks.thenAsk.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#4A8FE0]">
                <span>Ask Cerebro</span>
                <ChevronRight size={14} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Data Foundation ── */}
      <section
        id={homeContent.foundation.id}
        className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: 4 Items */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                {homeContent.foundation.h2}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {homeContent.foundation.lead}
              </p>

              <div className="space-y-6">
                {homeContent.foundation.items.map((item, idx) => (
                  <div key={idx} className="pt-4 border-t border-slate-100">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <NavLink
                  to={homeContent.foundation.link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0] hover:text-[#3A7FD0] transition-colors"
                >
                  <span>{homeContent.foundation.link.label}</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>

            {/* Right: Layered ProductShots */}
            <div className="lg:col-span-7 relative">
              <div className="p-3 sm:p-5 rounded-2xl bg-[var(--surface,#F8FAFC)] border border-slate-200">
                <ProductShot
                  src={homeContent.foundation.shots.main.src}
                  alt={homeContent.foundation.shots.main.alt}
                />
                {/* Secondary overlapping card */}
                <div className="mt-4 sm:-mt-16 sm:ml-12 sm:w-10/12 relative z-10 shadow-2xl rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <img
                    src={homeContent.foundation.shots.secondary.src}
                    alt={homeContent.foundation.shots.secondary.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Objective-Based Reporting (Signature Moment) ── */}
      <section
        id={homeContent.objectiveReporting.id}
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--surface,#F8FAFC)] border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {homeContent.objectiveReporting.h2}
            </h2>
            {/* CONFIRM with product team */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {homeContent.objectiveReporting.lead}
            </p>
          </div>

          {/* VerdictCompare Signature Moment */}
          <div className="mb-12">
            <VerdictCompare />
          </div>

          {/* Points + ProductShot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              {homeContent.objectiveReporting.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-medium">
                    {pt}
                  </p>
                </div>
              ))}
              <div className="pt-4">
                <NavLink
                  to={homeContent.objectiveReporting.link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0] hover:text-[#3A7FD0] transition-colors"
                >
                  <span>{homeContent.objectiveReporting.link.label}</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ProductShot
                src={homeContent.objectiveReporting.productShot.src}
                alt={homeContent.objectiveReporting.productShot.alt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Dashboards and Drill-Down (Signature Moment) ── */}
      <section
        id={homeContent.dashboards.id}
        className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {homeContent.dashboards.h2}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {homeContent.dashboards.lead}
            </p>
          </div>

          {/* DrillTabs Component */}
          <div className="mb-12">
            <DrillTabs />
          </div>

          {/* 3 Items Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            {homeContent.dashboards.items.map((item, idx) => (
              <div key={idx} className="text-left">
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-left">
            <NavLink
              to={homeContent.dashboards.link.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0] hover:text-[#3A7FD0] transition-colors"
            >
              <span>{homeContent.dashboards.link.label}</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── 8. Reports (Bento Layout) ── */}
      <section
        id={homeContent.reports.id}
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--surface,#F8FAFC)] border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {homeContent.reports.h2}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {homeContent.reports.lead}
            </p>
          </div>

          {/* Bento: 3 columns on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Large Card: Widgets you design */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Widget Builder
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {homeContent.reports.bento.large.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {homeContent.reports.bento.large.desc}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src={homeContent.reports.bento.large.image}
                  alt={homeContent.reports.bento.large.alt}
                  width={2880}
                  height={1800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right 2 Stacked Cards: Shared Widgets & Client Dashboards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Card 1: Shared widgets */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row gap-6 items-center justify-between shadow-xs flex-1">
                <div className="sm:w-1/2">
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {homeContent.reports.bento.card1.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {homeContent.reports.bento.card1.desc}
                  </p>
                </div>
                <div className="sm:w-1/2 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src={homeContent.reports.bento.card1.image}
                    alt={homeContent.reports.bento.card1.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Card 2: Client dashboards */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row gap-6 items-center justify-between shadow-xs flex-1">
                <div className="sm:w-1/2">
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {homeContent.reports.bento.card2.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {homeContent.reports.bento.card2.desc}
                  </p>
                </div>
                <div className="sm:w-1/2 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src={homeContent.reports.bento.card2.image}
                    alt={homeContent.reports.bento.card2.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2 Slim Cards Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                {homeContent.reports.bento.slim1.title}
              </h3>
              <p className="text-sm text-slate-600">
                {homeContent.reports.bento.slim1.desc}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                {homeContent.reports.bento.slim2.title}
              </h3>
              <p className="text-sm text-slate-600">
                {homeContent.reports.bento.slim2.desc}
              </p>
            </div>
          </div>

          <div className="mt-8 text-left">
            <NavLink
              to={homeContent.reports.link.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0] hover:text-[#3A7FD0] transition-colors"
            >
              <span>{homeContent.reports.link.label}</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── 9. Ask Cerebro ── */}
      <section
        id={homeContent.askSection.id}
        className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {homeContent.askSection.h2}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {homeContent.askSection.lead}
            </p>
          </div>

          {/* 4 Cards in a row with screenshot crops */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.askSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-left">
            <NavLink
              to={homeContent.askSection.link.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0] hover:text-[#3A7FD0] transition-colors"
            >
              <span>{homeContent.askSection.link.label}</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── 10. Teams and Solutions ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--surface,#F8FAFC)] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: 4 Items */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">
                {homeContent.teamsAndSolutions.h2}
              </h2>
              <div className="space-y-6">
                {homeContent.teamsAndSolutions.items.map((item, idx) => (
                  <div key={idx} className="pt-4 border-t border-slate-200">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Team Access Screenshot */}
            <div className="lg:col-span-7">
              <ProductShot
                src={homeContent.teamsAndSolutions.productShot.src}
                alt={homeContent.teamsAndSolutions.productShot.alt}
              />
            </div>
          </div>

          {/* Solutions Chips Below */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
              {homeContent.teamsAndSolutions.solutionsHeading}:
            </span>
            {homeContent.teamsAndSolutions.solutions.map((sol, idx) => (
              <NavLink
                key={idx}
                to={sol.href}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-2xs transition-colors"
              >
                {sol.label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Proof ── */}
      {/* Renders nothing until approved items exist per docs/site-rules.md */}
      {approvedProof.caseStudies.length > 0 && (
        <section className="py-20 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            {/* Rendered only if items exist */}
          </div>
        </section>
      )}

      {/* ── 12. Trust ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-12">
            {homeContent.trust.h2}
          </h2>

          {/* 4 items in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.trust.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 text-left"
              >
                {/* CONFIRM with product team */}
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <NavLink
              to={homeContent.trust.link.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0] hover:text-[#3A7FD0] transition-colors"
            >
              <span>{homeContent.trust.link.label}</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── 13. Final Call to Action ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--brand-soft,#EEF4FC)] border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {homeContent.finalCta.h2}
          </h2>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            {homeContent.finalCta.lead}
          </p>
          <div>
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white text-base font-semibold px-8 py-4 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              {homeContent.finalCta.button.label}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
