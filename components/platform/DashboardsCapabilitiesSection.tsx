"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Layers, BarChart2, SlidersHorizontal, Eye } from "lucide-react";

export default function DashboardsCapabilitiesSection() {
  return (
    <div className="space-y-24 py-6">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold tracking-wide uppercase mb-4">
          <Layers className="w-3.5 h-3.5" />
          Visualization Architecture
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
          Three ways Cerebro delivers total campaign clarity
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
          From high-level executive summaries down to single creative ad units, navigate your entire ad portfolio with zero browser switching.
        </p>
      </div>

      {/* Row 1: Executive Portfolio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 01</span>
            <span>·</span>
            <span>Portfolio Intelligence</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Executive portfolio overview
          </h3>
          <p className="text-body text-muted leading-relaxed">
            See total marketing investment, aggregate conversions, and blended efficiency in real time. Gain instant operational clarity across Meta, Google, and TikTok simultaneously.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Combined spend pacing vs monthly marketing budgets</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Instant identification of channel efficiency outliers</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Automated 7, 30, and 90-day comparative period trends</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              See the executive dashboard in action
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Visual for Row 1 */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand" />
              Executive Overview · All Active Channels
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono font-medium">
              PKR 7.4M Total Spend
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/dashboard-executive.jpg"
              alt="Cerebro Executive Dashboard showing high-level KPIs, spend pacing, and channel breakdowns"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Row 2: 4-Level Hierarchy Drill-Down */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual for Row 2 (left on desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand" />
              Campaign Performance Trajectory & Efficiency Lines
            </span>
            <span className="text-brand bg-brand-soft px-2 py-0.5 rounded font-medium">
              Multi-Tier Drill-Down
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/chart-top-campaigns.jpg"
              alt="Cerebro Campaign Level Performance Trajectories"
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
            <span>Granular Inspection</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            4-Level hierarchy drill-down
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Never guess which creative asset or targeting set drove performance shifts. Click directly from platform totals into campaign flight lines, targeting cohorts, and creative copies.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Inspect Platform, Campaign, Ad Set, and Ad without page reloads</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Isolate top spending creative assets with thumbnail previews</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Track flight trajectories across multi-week campaign activations</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/platform/objective-reporting"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Explore objective-based normalization
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Row 3: Product Rules & Pacing Curves */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 03</span>
            <span>·</span>
            <span>Multi-Brand Allocation</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Product lines and budget pacing
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Organize campaigns by commercial business units, sub-brands, or product lines. Monitor delivery pace curves daily to ensure flight budgets are neither under nor overspent.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Automated tag-based product allocation (e.g. Home Broadband vs Mobile App)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Daily flight delivery curves against cumulative target envelopes</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Real-time anomaly alerts when daily spend deviates from baseline</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/platform/reports"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Learn about automated report exports
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Visual for Row 3 */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-brand" />
              Commercial Product Allocation & 30-Day Delivery Curve
            </span>
            <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium">
              Product Rules Active
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/chart-spend-by-product.png"
              alt="Cerebro Spend by Commercial Product Line and Pacing Trends"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
