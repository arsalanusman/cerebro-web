import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";
import { buildMetadata } from "@/lib/seo";
import * as homeContent from "@/content/home";
import { approvedProof } from "@/content/proof";
import { AskDemo } from "@/components/home/AskDemo";
import { ConvergeVisual } from "@/components/home/ConvergeVisual";
import { VerdictCompare } from "@/components/home/VerdictCompare";
import { DrillTabs } from "@/components/home/DrillTabs";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Ad performance analytics and reporting | Cerebro DNano",
  description:
    "Bring Meta Ads, Google Ads and TikTok Ads into one consistent view, judge every campaign by its goal, and ask questions in plain language.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />

      {/* ── 1. Hero ── */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-white overflow-hidden">
        <Container>
          {/* Text block, left-aligned, max width 820px */}
          <div className="max-w-[820px] text-left">
            <h1 className="text-display-mobile sm:text-h1 lg:text-display font-heading font-bold text-ink tracking-tight">
              {homeContent.hero.h1}
            </h1>

            <p className="mt-6 text-body-lg-mobile lg:text-body-lg text-muted max-w-[60ch] leading-relaxed">
              {homeContent.hero.lead}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={homeContent.hero.buttons.primary.href} size="lg">
                {homeContent.hero.buttons.primary.label}
              </Button>
              <Button
                href={homeContent.hero.buttons.secondary.href}
                variant="secondary"
                size="lg"
              >
                {homeContent.hero.buttons.secondary.label}
              </Button>
            </div>

            {/* Platform Badges */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-2.5">
              <span className="text-caption font-medium text-muted mr-1">
                {homeContent.hero.connectsToLabel}
              </span>
              <PlatformBadge platform="Meta Ads" size="sm" />
              <PlatformBadge platform="Google Ads" size="sm" />
              <PlatformBadge platform="TikTok Ads" size="sm" />
            </div>
          </div>

          {/* HeroProduct, 56px below text, full container width with 40px bleed on each side on desktop */}
          <div className="mt-14 relative w-full lg:-mx-10 lg:w-[calc(100%+80px)]">
            <div className="p-3 sm:p-6 lg:p-8 rounded-3xl bg-brand-soft">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-white shadow-2xl">
                {/* LCP dashboard shot with priority loading and explicit dimensions */}
                <div className="w-full relative">
                  <Image
                    src={homeContent.hero.productShot.src}
                    alt={homeContent.hero.productShot.alt}
                    width={2880}
                    height={1800}
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 1320px"
                    className="w-full h-auto object-cover object-top block"
                  />
                </div>

                {/* AskDemo docked on right edge on desktop overlapping ~third of screenshot */}
                {/* CONFIRM with product team: use one name, "Ask Cerebro", in the product and on the site */}
                <div className="hidden lg:block absolute top-12 right-10 w-[420px] max-w-[42%] z-20">
                  <AskDemo className="w-full" />
                </div>
              </div>
            </div>

            {/* Mobile AskDemo below screenshot */}
            <div className="block lg:hidden mt-6">
              <AskDemo className="w-full" />
            </div>

            {/* Caption below hero frame */}
            <div className="mt-3 text-left text-caption text-muted">
              Demo data for a sample brand. Answers replayed from Ask Cerebro.
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Proof Strip (LogoWall) ── */}
      {/* Renders nothing until approved logos exist per docs/site-rules.md */}
      {approvedProof.logos.length > 0 && (
        <section className="py-10 border-y border-border bg-white">
          <Container>
            <div className="text-center">
              <span className="text-caption uppercase tracking-wider text-muted font-semibold font-heading">
                {homeContent.proofStrip.heading}
              </span>
            </div>
          </Container>
        </section>
      )}

      {/* ── 3. The Problem ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Problem Copy */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-8">
                {homeContent.problem.h2}
              </h2>
              <div className="space-y-6">
                {homeContent.problem.lines.map((line, idx) => (
                  <div key={idx} className="pt-4 border-t border-border">
                    <h3 className="text-body sm:text-h3-mobile font-heading font-semibold text-ink mb-1.5">
                      {line.title}
                    </h3>
                    <p className="text-small sm:text-body text-muted leading-relaxed">
                      {line.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-body sm:text-body-lg font-medium text-ink">
                {homeContent.problem.closing}
              </p>
            </div>

            {/* Right Column: ConvergeVisual */}
            <div className="lg:col-span-7 w-full">
              <ConvergeVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. How It Works ── */}
      <section
        id={homeContent.howItWorks.id}
        className="py-20 sm:py-28 bg-surface border-t border-border"
      >
        <Container>
          <div className="text-left">
            <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-12">
              {homeContent.howItWorks.h2}
            </h2>

            {/* 5 numbered steps horizontal on desktop, vertical on mobile + 6th Then Ask */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {homeContent.howItWorks.steps.map((step) => (
                <Link
                  key={step.number}
                  href={step.href}
                  className="group p-5 rounded-card border border-border bg-white hover:border-brand transition-colors flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-caption font-mono font-bold text-muted group-hover:text-brand transition-colors mb-2 block tabular-nums">
                      0{step.number}
                    </span>
                    <h3 className="text-body font-heading font-semibold text-ink mb-1.5 group-hover:text-brand transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-caption sm:text-small text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-caption font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <ChevronRight size={14} />
                  </div>
                </Link>
              ))}

              {/* 6th "Then ask" item */}
              <Link
                href={homeContent.howItWorks.thenAsk.href}
                className="group p-5 rounded-card border-2 border-dashed border-brand/40 bg-brand-soft/50 hover:bg-brand-soft transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-caption font-mono font-bold text-brand mb-2 block tabular-nums">
                    06
                  </span>
                  <h3 className="text-body font-heading font-semibold text-ink mb-1.5 group-hover:text-brand transition-colors">
                    {homeContent.howItWorks.thenAsk.title}
                  </h3>
                  <p className="text-caption sm:text-small text-muted leading-relaxed">
                    {homeContent.howItWorks.thenAsk.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-caption font-semibold text-brand">
                  <span>Ask Cerebro</span>
                  <ChevronRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Data Foundation ── */}
      <section
        id={homeContent.foundation.id}
        className="py-20 sm:py-28 bg-white border-t border-border"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: 4 Items */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-4">
                {homeContent.foundation.h2}
              </h2>
              <p className="text-body sm:text-body-lg text-muted leading-relaxed mb-8">
                {homeContent.foundation.lead}
              </p>

              <div className="space-y-6">
                {homeContent.foundation.items.map((item, idx) => (
                  <div key={idx} className="pt-4 border-t border-border">
                    <h3 className="text-body font-heading font-semibold text-ink mb-1">
                      {item.title}
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={homeContent.foundation.link.href}
                  className="inline-flex items-center gap-1.5 text-small font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  <span>{homeContent.foundation.link.label}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Layered ProductShots */}
            <div className="lg:col-span-7 relative">
              <div className="p-3 sm:p-5 rounded-2xl bg-surface border border-border">
                <div className="relative rounded-product overflow-hidden border border-border bg-white shadow-product aspect-[16/10]">
                  <Image
                    src={homeContent.foundation.shots.main.src}
                    alt={homeContent.foundation.shots.main.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Secondary overlapping card */}
                <div className="mt-4 sm:-mt-16 sm:ml-12 sm:w-10/12 relative z-10 shadow-2xl rounded-xl border border-border bg-white overflow-hidden aspect-[16/10]">
                  <Image
                    src={homeContent.foundation.shots.secondary.src}
                    alt={homeContent.foundation.shots.secondary.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Objective-Based Reporting (Signature Moment 2) ── */}
      <section
        id={homeContent.objectiveReporting.id}
        className="py-20 sm:py-28 bg-surface border-t border-border"
      >
        <Container>
          <div className="text-left">
            <div className="max-w-3xl mb-10">
              <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-4">
                {homeContent.objectiveReporting.h2}
              </h2>
              {/* CONFIRM with product team */}
              <p className="text-body sm:text-body-lg text-muted leading-relaxed">
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
                    <p className="text-small sm:text-body text-text font-medium">
                      {pt}
                    </p>
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href={homeContent.objectiveReporting.link.href}
                    className="inline-flex items-center gap-1.5 text-small font-semibold text-brand hover:text-brand-hover transition-colors"
                  >
                    <span>{homeContent.objectiveReporting.link.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-product overflow-hidden border border-border bg-white shadow-product aspect-[16/10]">
                  <Image
                    src={homeContent.objectiveReporting.productShot.src}
                    alt={homeContent.objectiveReporting.productShot.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. Dashboards and Drill-Down (Signature Moment 3) ── */}
      <section
        id={homeContent.dashboards.id}
        className="py-20 sm:py-28 bg-white border-t border-border"
      >
        <Container>
          <div className="text-left">
            <div className="max-w-3xl mb-10">
              <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-4">
                {homeContent.dashboards.h2}
              </h2>
              <p className="text-body sm:text-body-lg text-muted leading-relaxed">
                {homeContent.dashboards.lead}
              </p>
            </div>

            {/* DrillTabs Component */}
            <div className="mb-12">
              <DrillTabs />
            </div>

            {/* 3 Items Below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
              {homeContent.dashboards.items.map((item, idx) => (
                <div key={idx} className="text-left">
                  <h3 className="text-body font-heading font-semibold text-ink mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-left">
              <Link
                href={homeContent.dashboards.link.href}
                className="inline-flex items-center gap-1.5 text-small font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>{homeContent.dashboards.link.label}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. Reports (Bento Layout) ── */}
      <section
        id={homeContent.reports.id}
        className="py-20 sm:py-28 bg-surface border-t border-border"
      >
        <Container>
          <div className="text-left">
            <div className="max-w-3xl mb-12">
              <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-4">
                {homeContent.reports.h2}
              </h2>
              <p className="text-body sm:text-body-lg text-muted leading-relaxed">
                {homeContent.reports.lead}
              </p>
            </div>

            {/* Bento: 3 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Large Card: Widgets you design */}
              <div className="lg:col-span-6 rounded-product border border-border bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                <div className="mb-6">
                  <span className="text-caption font-semibold uppercase tracking-wider text-muted block mb-2 font-heading">
                    Widget Builder
                  </span>
                  <h3 className="text-h3-mobile sm:text-h3 font-heading font-bold text-ink mb-2">
                    {homeContent.reports.bento.large.title}
                  </h3>
                  <p className="text-small sm:text-body text-muted leading-relaxed">
                    {homeContent.reports.bento.large.desc}
                  </p>
                </div>
                <div className="rounded-card overflow-hidden border border-border shadow-xs aspect-[16/10] relative">
                  <Image
                    src={homeContent.reports.bento.large.image}
                    alt={homeContent.reports.bento.large.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right 2 Stacked Cards: Shared Widgets & Client Dashboards */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                {/* Card 1: Shared widgets */}
                <div className="rounded-product border border-border bg-white p-6 flex flex-col sm:flex-row gap-6 items-center justify-between shadow-xs flex-1">
                  <div className="sm:w-1/2">
                    <h3 className="text-body sm:text-h3-mobile font-heading font-bold text-ink mb-1.5">
                      {homeContent.reports.bento.card1.title}
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      {homeContent.reports.bento.card1.desc}
                    </p>
                  </div>
                  <div className="sm:w-1/2 w-full rounded-card overflow-hidden border border-border aspect-[16/10] relative">
                    <Image
                      src={homeContent.reports.bento.card1.image}
                      alt={homeContent.reports.bento.card1.alt}
                      width={2880}
                      height={1800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Card 2: Client dashboards */}
                <div className="rounded-product border border-border bg-white p-6 flex flex-col sm:flex-row gap-6 items-center justify-between shadow-xs flex-1">
                  <div className="sm:w-1/2">
                    <h3 className="text-body sm:text-h3-mobile font-heading font-bold text-ink mb-1.5">
                      {homeContent.reports.bento.card2.title}
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      {homeContent.reports.bento.card2.desc}
                    </p>
                  </div>
                  <div className="sm:w-1/2 w-full rounded-card overflow-hidden border border-border aspect-[16/10] relative">
                    <Image
                      src={homeContent.reports.bento.card2.image}
                      alt={homeContent.reports.bento.card2.alt}
                      width={2880}
                      height={1800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Slim Cards Below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-card border border-border bg-white p-5 shadow-xs">
                <h3 className="text-body font-heading font-semibold text-ink mb-1">
                  {homeContent.reports.bento.slim1.title}
                </h3>
                <p className="text-small text-muted">
                  {homeContent.reports.bento.slim1.desc}
                </p>
              </div>
              <div className="rounded-card border border-border bg-white p-5 shadow-xs">
                <h3 className="text-body font-heading font-semibold text-ink mb-1">
                  {homeContent.reports.bento.slim2.title}
                </h3>
                <p className="text-small text-muted">
                  {homeContent.reports.bento.slim2.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 text-left">
              <Link
                href={homeContent.reports.link.href}
                className="inline-flex items-center gap-1.5 text-small font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>{homeContent.reports.link.label}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. Ask Cerebro ── */}
      <section
        id={homeContent.askSection.id}
        className="py-20 sm:py-28 bg-white border-t border-border"
      >
        <Container>
          <div className="text-left">
            <div className="max-w-3xl mb-12">
              <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-4">
                {homeContent.askSection.h2}
              </h2>
              <p className="text-body sm:text-body-lg text-muted leading-relaxed">
                {homeContent.askSection.lead}
              </p>
            </div>

            {/* 4 Cards in a row with screenshot crops */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeContent.askSection.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-product border border-border bg-white p-5 flex flex-col justify-between shadow-xs hover:border-border-dark transition-colors"
                >
                  <div>
                    <h3 className="text-body font-heading font-bold text-ink mb-2">
                      {card.title}
                    </h3>
                    <p className="text-caption sm:text-small text-muted leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                  <div className="rounded-control overflow-hidden border border-border shadow-xs aspect-[16/10] relative">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={2880}
                      height={1800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-left">
              <Link
                href={homeContent.askSection.link.href}
                className="inline-flex items-center gap-1.5 text-small font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>{homeContent.askSection.link.label}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 10. Teams and Solutions ── */}
      <section className="py-20 sm:py-28 bg-surface border-t border-border">
        <Container>
          <div className="text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left: 4 Points */}
              <div className="lg:col-span-5">
                <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-8">
                  {homeContent.teamsAndSolutions.h2}
                </h2>
                <div className="space-y-6">
                  {homeContent.teamsAndSolutions.items.map((item, idx) => (
                    <div key={idx} className="pt-4 border-t border-border">
                      <h3 className="text-body font-heading font-semibold text-ink mb-1">
                        {item.title}
                      </h3>
                      <p className="text-small text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Team Access Screenshot */}
              <div className="lg:col-span-7">
                <div className="relative rounded-product overflow-hidden border border-border bg-white shadow-product aspect-[16/10]">
                  <Image
                    src={homeContent.teamsAndSolutions.productShot.src}
                    alt={homeContent.teamsAndSolutions.productShot.alt}
                    width={2880}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Solutions Chips Below */}
            <div className="mt-14 pt-8 border-t border-border flex flex-wrap items-center gap-3">
              <span className="text-caption font-semibold uppercase tracking-wider text-muted mr-2 font-heading">
                {homeContent.teamsAndSolutions.solutionsHeading}:
              </span>
              {homeContent.teamsAndSolutions.solutions.map((sol, idx) => (
                <Link
                  key={idx}
                  href={sol.href}
                  className="px-3.5 py-1.5 rounded-control border border-border bg-white text-caption sm:text-small font-medium text-text hover:text-ink hover:border-border-dark transition-colors shadow-xs"
                >
                  {sol.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 11. Proof ── */}
      {/* Renders nothing until approved items exist per docs/site-rules.md */}
      {approvedProof.caseStudies.length > 0 && (
        <section className="py-20 bg-white border-t border-border">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Approved case studies */}
            </div>
          </Container>
        </section>
      )}

      {/* ── 12. Trust ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-border">
        <Container>
          <div className="text-left">
            <h2 className="text-h2-mobile sm:text-h2 font-heading font-bold tracking-tight text-ink mb-12">
              {homeContent.trust.h2}
            </h2>

            {/* 4 items in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeContent.trust.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-card border border-border bg-surface text-left"
                >
                  {/* CONFIRM with product team: Activity log */}
                  <h3 className="text-body font-heading font-semibold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={homeContent.trust.link.href}
                className="inline-flex items-center gap-1.5 text-small font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>{homeContent.trust.link.label}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 13. Final Call to Action ── */}
      <section className="py-20 sm:py-28 bg-brand-soft border-t border-border">
        <Container>
          <div className="max-w-4xl text-left">
            <h2 className="text-h2-mobile sm:text-h1 font-heading font-bold text-ink tracking-tight mb-4">
              {homeContent.finalCta.h2}
            </h2>
            <p className="text-body sm:text-body-lg text-muted leading-relaxed max-w-2xl mb-8">
              {homeContent.finalCta.lead}
            </p>
            <div>
              <Button href={homeContent.finalCta.button.href} size="lg">
                {homeContent.finalCta.button.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
