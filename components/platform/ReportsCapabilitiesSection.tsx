"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, FileText, Calendar, Sliders, Share2 } from "lucide-react";

export default function ReportsCapabilitiesSection() {
  return (
    <div className="space-y-24 py-6">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold tracking-wide uppercase mb-4">
          <FileText className="w-3.5 h-3.5" />
          Reporting Engine
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
          Three ways Cerebro automates client reporting
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
          Transform live advertising metrics into presentation-ready reports for clients and executive leadership. Schedule recurring deliveries and eliminate manual slide building forever.
        </p>
      </div>

      {/* Row 1: Modular Widget Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 01</span>
            <span>·</span>
            <span>Modular Widgets</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Build custom widgets in four interactive steps
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Select your visual format, bind advertising metrics across Meta, Google, and TikTok, apply objective filters, and preview the live rendered card before dropping it into your reporting template.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Step 1: Choose from KPI cards, line curves, and distribution bars</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Step 2: Bind multi-channel metrics with currency conversion</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Step 3: Define benchmark rules, targets, and comparative periods</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Try the widget builder
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Visual for Row 1 */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <Sliders className="w-4 h-4 text-brand" />
              Interactive Widget Creation Engine
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
              Step 4: Live Render
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/widget-builder.jpg"
              alt="Cerebro Interactive Widget Builder Interface"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Automated Scheduled Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual for Row 2 (left on desktop) */}
        <div className="lg:col-span-7 order-2 lg:order-1 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <Share2 className="w-4 h-4 text-brand" />
              Workspace Team Access & Client Delivery Roles
            </span>
            <span className="text-brand bg-brand-soft px-2 py-0.5 rounded font-medium">
              Multi-Tenant Security
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/cerebro-team-access.png"
              alt="Cerebro Workspace Access Roles and Client Report Delivery"
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
            <span>Automated Cadence</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Deliver reliable reports on a set schedule
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Configure automated report dispatches weekly or monthly. Clients receive clean, secure report links or executive PDFs directly in their inbox without your team manually exporting files.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Scheduled recurring email deliveries to client distribution lists</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Password-protected interactive client links with role access controls</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Historical report archive preserved automatically for every workspace</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/solutions/agencies"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Explore multi-client agency workflows
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Row 3: Presentation Decks & Custom Exports */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span>Capability 03</span>
            <span>·</span>
            <span>Presentation Ready</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink">
            Boardroom presentations & BI exports
          </h3>
          <p className="text-body text-muted leading-relaxed">
            Need to present in executive reviews or feed normalized tables into BI platforms? Export polished slide presentations or pipe live data directly to Looker Studio and Google Sheets.
          </p>
          <ul className="space-y-3 pt-2 text-small text-ink">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Boardroom-ready PDF presentations generated in one click</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Live two-way synced Google Sheets connectors</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <span>Direct Google Looker Studio and Power BI connector feeds</span>
            </li>
          </ul>
          <div className="pt-3">
            <Link
              href="/platform/data-integration"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
            >
              Learn about live data ingestion
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Visual for Row 3 */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-4 md:p-6 shadow-md overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand" />
              Complete Report Canvas & Export Layout
            </span>
            <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium">
              Export Ready
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-border shadow-inner bg-slate-900">
            <Image
              src="/product/report-builder.png"
              alt="Cerebro Modular Report Builder and Custom Layout Interface"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
