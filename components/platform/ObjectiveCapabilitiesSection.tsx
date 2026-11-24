"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Target, ShieldAlert, BarChart3, Scale } from "lucide-react";

export default function ObjectiveCapabilitiesSection() {
  return (
    <div className="space-y-24 py-6">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold tracking-wide uppercase mb-4">
          <Target className="w-3.5 h-3.5" />
          Normalization Engine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
          Three ways Cerebro prevents distorted campaign reporting
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
          Comparing an awareness reach campaign on CPA with a bottom-funnel e-commerce checkout campaign on CPM leads to bad decisions. Cerebro isolates performance by goal.
        </p>
      </div>

      {/* Row 1: Intelligent Objective Classification */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 01</span>
            <span>·</span>
            <span>Auto Classification</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Awareness, consideration, and conversion tiers
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Cerebro automatically inspects campaign setup parameters across Meta, Google, and TikTok to group campaigns into consistent objective tiers so every team member evaluates performance fairly.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Awareness evaluated strictly on Reach, Impressions, and CPM</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Traffic evaluated on Link Clicks, Quality CTR, and CPC</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Conversions evaluated strictly on Verified CPA and Return on Ad Spend</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              See the objective filter in action
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Visual for Row 1 */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <Target className="w-4 h-4 text-brand" />
              Platform Objective Filter Dropdown Active
            </span>
            <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-medium">
              4 Goals Isolated
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/cerebro-objective-filter.png"
              alt="Cerebro platform objective filter dropdown open showing campaign goals"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Apples-to-Apples Channel Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual for Row 2 (left on desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand" />
              Fair Channel Evaluation by Objective Cohort
            </span>
            <span className="text-brand bg-brand-soft px-2 py-0.5 rounded font-medium">
              Zero Channel Bias
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/chart-top-campaigns.jpg"
              alt="Cerebro Campaign Trajectories Evaluated by Goal"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Text for Row 2 */}
        <div className="lg:col-span-5 order-1 lg:order-2 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 02</span>
            <span>·</span>
            <span>Objective Parity</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Apples-to-apples channel benchmarks
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Stop penalizing TikTok or YouTube for not generating instant purchases when their explicit goal was viral brand discovery. Compare each platform within its designated objective cohort.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Benchmark Meta Awareness vs TikTok Awareness on pure CPM</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Benchmark Google Search vs Meta Retargeting on conversion intent</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Reallocate budget toward channels winning on their assigned KPI</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/platform/dashboards"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Explore cross-channel dashboards
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Row 3: Blended Unit Economics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 03</span>
            <span>·</span>
            <span>Unit Economics</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            True customer acquisition cost
          </h3>
          <p className="text-body text-muted leading-relaxed">
            When awareness ad dollars are blended into conversion figures, blended CPA looks deceptively low or high depending on channel mix. Cerebro isolates conversion ad dollars for true CAC calculations.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Clean separation of brand awareness investment from performance acquisition</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Accurate e-commerce contribution margin and product profitability</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Boardroom confidence when justifying upper-funnel media allocations</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/platform/reports"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Package objective reports for leadership
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Visual for Row 3 */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brand" />
              Normalized Executive Overview with True Unit Economics
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
              Verified ROAS
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/dashboard-executive.jpg"
              alt="Cerebro Executive Dashboard Normalized by Objective"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
