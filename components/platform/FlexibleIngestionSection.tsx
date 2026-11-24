"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Code, Cable, CheckCircle2, FileSpreadsheet, Lock } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function FlexibleIngestionSection() {
  const [activePlatformFilter, setActivePlatformFilter] = useState("all");

  const platforms = [
    { name: "Meta Ads", logo: "/brand/platforms/meta.png", status: "Active", accounts: "12 connected", cadence: "Hourly" },
    { name: "Google Ads", logo: "/brand/platforms/google.png", status: "Active", accounts: "18 connected", cadence: "Hourly" },
    { name: "TikTok Ads", logo: "/brand/platforms/tiktok.png", status: "Active", accounts: "8 connected", cadence: "Hourly" },
    { name: "DV360", logo: "/brand/platforms/dv360.png", status: "Active", accounts: "4 connected", cadence: "Daily" },
    { name: "LinkedIn Ads", logo: "/brand/platforms/linkedin.png", status: "Active", accounts: "3 connected", cadence: "Daily" },
    { name: "Snapchat Ads", logo: "/brand/platforms/snapchat.png", status: "Active", accounts: "5 connected", cadence: "Hourly" },
  ];

  return (
    <div className="space-y-24 py-6">
      {/* Section Header */}
      <ScrollReveal direction="down" distance={20}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold tracking-wide uppercase mb-4">
            <Cable className="w-3.5 h-3.5" />
            Ingestion Architecture
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
            Three flexible ways to bring in your data
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            From certified ad APIs to custom webhook streams and spreadsheets, Cerebro consolidates your entire stack into a clean, query-ready marketing data warehouse.
          </p>
        </div>
      </ScrollReveal>

      {/* Method 1: Pre-built data sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <ScrollReveal direction="left" distance={24}>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              <span>Method 01</span>
              <span>·</span>
              <span>Zero Engineering</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink mt-2">
              Pre-built data sources
            </h3>
            <p className="text-body text-muted leading-relaxed mt-3">
              Connect your primary ad networks in under 60 seconds with certified read-only OAuth flows. Zero scripts to write, zero server maintenance, and no brittle web scrapers.
            </p>
            <ul className="space-y-3 pt-3 text-small text-ink">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Official APIs for Meta, Google Ads, TikTok Ads, and DV360</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Automated token refresh routines preventing reporting outages</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Hourly sync frequency keeping performance metrics continuously fresh</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
              >
                Explore all 50+ pre-built connectors
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual for Method 1 */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right" distance={24} delay={0.15}>
            <TiltCard maxTilt={4} glare={true}>
              <div className="bg-surface-2 border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-ink">Certified Native Connectors</span>
                  </div>
                  <span className="text-xs text-muted font-mono">Status: All healthy</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {platforms.map((p) => (
                    <div
                      key={p.name}
                      className="bg-white border border-border hover:border-brand/40 rounded-xl p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 relative flex items-center justify-center">
                          <Image src={p.logo} alt={p.name} width={30} height={30} className="object-contain" />
                        </div>
                        <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {p.status}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-ink truncate">{p.name}</h4>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-muted">
                          <span>{p.accounts}</span>
                          <span className="font-mono text-[10px] text-brand">{p.cadence}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-3 rounded-lg bg-brand-soft/60 border border-brand/10 flex items-center justify-between text-xs text-brand font-medium">
                  <span>Read-only permissions ensure your live campaigns cannot be altered.</span>
                  <Lock className="w-3.5 h-3.5 text-brand shrink-0" />
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>

      {/* Method 2: Custom data import */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Visual for Method 2 (placed on left for desktop alternating rhythm) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <ScrollReveal direction="left" distance={24} delay={0.15}>
            <TiltCard maxTilt={4} glare={true}>
              <div className="bg-[#0B1021] border border-white/10 rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-brand-light" />
                    <span className="text-xs font-mono text-slate-300">POST /api/v1/ingest/events</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    200 OK · Payload Mapped
                  </span>
                </div>
                <pre className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] md:text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  {`{
  "source": "internal_crm_sales",
  "client_id": "client_brand_pk_88",
  "records": [
    {
      "transaction_id": "TXN-94021",
      "timestamp": "2026-11-20T10:45:00Z",
      "channel": "meta_ads",
      "campaign_id": "cmp_2384910291",
      "revenue": 34500.00,
      "currency": "PKR",
      "status": "completed"
    }
  ],
  "schema_mapping": "cerebro_standard_v2"
}`}
                </pre>
                <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Deduplication</span>
                    <span className="text-xs font-semibold text-emerald-400">Automated</span>
                  </div>
                  <div className="p-2 rounded bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Currency Match</span>
                    <span className="text-xs font-semibold text-brand-light">PKR Normalizer</span>
                  </div>
                  <div className="p-2 rounded bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Sync Latency</span>
                    <span className="text-xs font-semibold text-slate-200">&lt; 150ms</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Text for Method 2 */}
        <div className="lg:col-span-5 order-1 lg:order-2 text-left space-y-5">
          <ScrollReveal direction="right" distance={24}>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              <span>Method 02</span>
              <span>·</span>
              <span>Bespoke Pipelines</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink mt-2">
              Custom data import
            </h3>
            <p className="text-body text-muted leading-relaxed mt-3">
              Need to bring in bespoke e-commerce sales, call-center conversions, or internal proprietary affiliate streams? Connect via robust webhooks and REST endpoints.
            </p>
            <ul className="space-y-3 pt-3 text-small text-ink">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Inbound REST webhooks with tokenized security and IP filtering</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Automated payload transformation to Cerebro unified metric model</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Real-time event logging and error alerting for developer visibility</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
              >
                Read custom webhook integration docs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Method 3: Bring your own data / Upload a sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 text-left space-y-5">
          <ScrollReveal direction="left" distance={24}>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              <span>Method 03</span>
              <span>·</span>
              <span>Spreadsheets & Offline</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink mt-2">
              Bring your own data: Upload a sheet
            </h3>
            <p className="text-body text-muted leading-relaxed mt-3">
              Do not let offline sales or influencer budgets fall through the cracks. Ingest CSV files and sync directly with Google Sheets with automated column mapping.
            </p>
            <ul className="space-y-3 pt-3 text-small text-ink">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Smart column header auto-detection (Spend, Date, Platform, Conversions)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Automated recurring two-way sync with live Google Sheets</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Historical backfills with immediate schema validation before ingestion</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-hover text-sm group"
              >
                Request a spreadsheet integration walkthrough
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual for Method 3 */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right" distance={24} delay={0.15}>
            <TiltCard maxTilt={4} glare={true}>
              <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-ink">influencer_q4_spend.xlsx · Google Sheets Sync</span>
                  </div>
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    100% Validated (10,420 rows)
                  </span>
                </div>

                {/* Table preview */}
                <div className="border border-border rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-surface-2 text-muted border-b border-border">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Sheet Column</th>
                        <th className="py-2.5 px-3 font-semibold">Sample Row</th>
                        <th className="py-2.5 px-3 font-semibold">Target Schema Mapping</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-ink">
                      <tr>
                        <td className="py-2 px-3 font-mono text-[11px] text-muted">date_logged</td>
                        <td className="py-2 px-3">2026-11-19</td>
                        <td className="py-2 px-3 text-emerald-600 font-medium">✓ dim_date</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-[11px] text-muted">influencer_handle</td>
                        <td className="py-2 px-3">@techreviewer_pk</td>
                        <td className="py-2 px-3 text-emerald-600 font-medium">✓ dim_campaign</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-[11px] text-muted">fee_paid_pkr</td>
                        <td className="py-2 px-3">PKR 150,000</td>
                        <td className="py-2 px-3 text-emerald-600 font-medium">✓ metric_spend</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-[11px] text-muted">coupon_orders</td>
                        <td className="py-2 px-3">238</td>
                        <td className="py-2 px-3 text-emerald-600 font-medium">✓ metric_conversions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Automated sync scheduled daily at 06:00 AM PKT
                  </span>
                  <span className="text-brand font-medium">Re-sync on demand</span>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
