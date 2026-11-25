"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE, isPlaceholderHidden } from "@/lib/site";

export interface SiteFooterProps {
  cta?: boolean;
}

export function SiteFooter({ cta = true }: SiteFooterProps) {
  const pathname = usePathname();
  const isExcludedPath = pathname === "/demo" || pathname === "/contact";
  const showCta = cta && !isExcludedPath;

  const trustItems = [
    {
      label: "Role-based access",
      d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    },
    {
      label: "Client-level permissions",
      d: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
    },
    {
      label: "Activity log",
      d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    },
    {
      label: "AI data checks",
      d: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    },
  ];

  const columns = [
    {
      title: "Platform",
      links: [
        { label: "Ask Cerebro", href: "/ask-cerebro" },
        { label: "AI data engine", href: "/platform/data-integration" },
        { label: "Dashboards", href: "/platform/dashboards" },
        { label: "Report builder", href: "/platform/reports" },
        { label: "Objective engine", href: "/platform/objective-reporting" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Agencies", href: "/solutions/agencies" },
        { label: "Brands", href: "/solutions/brands" },
        { label: "Banking and finance", href: "/industries/banking-and-finance" },
        { label: "Telecom", href: "/industries/telecom" },
        { label: "FMCG", href: "/industries/fmcg" },
        { label: "E-commerce", href: "/industries/ecommerce" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Docs", href: "/docs" },
        { label: "FAQ", href: "/faq" },
        { label: "Security", href: "/security" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Book a demo", href: "/demo" },
      ],
    },
  ];

  return (
    <div className="font-sans text-[#1C2433] bg-white">
      {/* ── High-Impact Unified Closing Launchpad CTA & Trust Section ── */}
      {showCta ? (
        <section
          aria-label="Deploy Cerebro dNano"
          className="relative overflow-hidden py-20 lg:py-28 bg-[#011640] border-t border-[#0070C2]/30 text-white"
        >
          {/* Ambient luminous glow background */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[480px] pointer-events-none opacity-45 blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, #0070C2 0%, #022771 45%, transparent 75%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 box-border text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0070C2]/20 border border-[#0070C2]/50 text-[#8EC5F0] text-[12.5px] font-bold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0070C2] relative inline-flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0070C2] opacity-75" />
              </span>
              <span>Ready to deploy · Enterprise Marketing Intelligence</span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-5 m-0 font-heading font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.06] tracking-[-0.035em] text-white max-w-[880px] mx-auto">
              Deploy Cerebro dNano across your ad stack.
            </h2>

            {/* Impactful Unified Copy */}
            <p className="mt-4 max-w-[680px] mx-auto text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.6] text-[#CBD5E1]">
              Connect your Meta, Google, and TikTok accounts in minutes, or load your sheets. Ask Cerebro any question with zero tracking cookies and deterministic audit steps.
            </p>

            {/* Connected Platform Live Signals */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[13px] font-medium text-white/90">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span>Meta Ads API</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span>Google Ads API</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span>TikTok Ads API</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span>Offline POS & Sheets</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#8EC5F0]">
                <span>Zero raw cookies</span>
              </div>
            </div>

            {/* Unified CTAs */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="group whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2.5 h-13 px-8 rounded-full bg-[#0070C2] hover:bg-[#005DA3] text-white text-[16px] font-semibold transition-all duration-200 shadow-[0_4px_20px_rgba(0,112,194,0.4)] hover:shadow-[0_8px_32px_rgba(0,112,194,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a demo</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/platform/data-integration"
                className="whitespace-nowrap shrink-0 inline-flex items-center justify-center h-13 px-7 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 text-white text-[16px] font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-xs backdrop-blur-xs"
              >
                Explore the data engine
              </Link>
            </div>

            {/* ── Integrated Enterprise Trust & Security Dock ── */}
            <div className="mt-16 sm:mt-20 pt-8 border-t border-white/12 flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
              <div className="flex items-center gap-3 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0070C2] shrink-0" />
                <span className="font-heading text-[16px] font-semibold text-white tracking-tight">
                  Built to be trusted with client data
                </span>
              </div>

              <div className="flex-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:ml-6">
                {trustItems.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-[13.5px] text-[#CBD5E1]"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8EC5F0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={t.d} />
                    </svg>
                    <span>{t.label}</span>
                  </span>
                ))}
              </div>

              <Link
                href="/security"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8EC5F0] hover:text-white transition-colors shrink-0"
              >
                <span>Read about security</span>
                <svg
                  width="14"
                  height="14"
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
          </div>
        </section>
      ) : (
        /* Fallback Trust strip for conversion/excluded pages */
        <section aria-label="Trust" className="border-t border-[#EEF0F3] bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-9 box-border flex gap-7 items-center flex-wrap">
            <span className="font-heading text-[18px] font-semibold text-[#000000]">
              Built to be trusted with client data
            </span>
            <div className="flex-1 min-w-[280px] lg:min-w-[520px] flex gap-5 lg:gap-[22px] flex-wrap items-center">
              {trustItems.map((t, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 text-[14px] text-[#1C2433]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0070C2"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={t.d} />
                  </svg>
                  <span>{t.label}</span>
                </span>
              ))}
            </div>
            <Link
              href="/security"
              className="inline-flex items-center gap-1.5 min-h-[44px] text-[14.5px] font-semibold text-[#0070C2] hover:text-[#005DA3] transition-colors"
            >
              <span>Read about security</span>
              <svg
                width="14"
                height="14"
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
        </section>
      )}

      {/* ── Main Footer ── */}
      <footer className="py-12 lg:py-16 pb-9 bg-white border-t border-[#EEF0F3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 box-border">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between">
            {/* Identity & Address */}
            <div className="w-full lg:w-[280px] shrink-0">
              <span
                role="img"
                aria-label="Cerebro dNano"
                className="inline-flex items-center gap-3"
              >
                <Image
                  src="/brand/cerebro-mark.svg"
                  alt="Cerebro mark"
                  width={52}
                  height={52}
                  className="h-12 w-auto block shrink-0"
                />
                <Image
                  src="/brand/cerebro-wordmark.svg"
                  alt="Cerebro dNano"
                  width={208}
                  height={32}
                  className="h-[32px] w-auto block shrink-0"
                />
              </span>
              <p className="mt-4 max-w-[280px] text-[14.5px] leading-[1.55] text-[#5A6675]">
                Cerebro AI, the data engine for paid media reporting, for agencies and brands.
              </p>
              <address className="mt-[22px] not-italic text-[14px] leading-[1.7] text-[#1C2433]">
                <div className="font-semibold text-[#000000]">{SITE.name}</div>
                {!isPlaceholderHidden(SITE.address.unit) && (
                  <div className="text-[#6B7685]">{SITE.address.unit}</div>
                )}
                <div>{SITE.address.street}</div>
                <div>
                  {SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}
                </div>
                <div>
                  <a
                    href={SITE.phoneHref}
                    className="text-[#0070C2] hover:text-[#005DA3] transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[#0070C2] hover:text-[#005DA3] transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="text-[#5A6675] mt-1">{SITE.hoursDisplay}</div>
              </address>
            </div>

            {/* Navigation Columns (Platform, Solutions, Resources, Company) */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 min-w-0">
              {columns.map((col, idx) => (
                <nav key={idx} aria-label={col.title}>
                  <div className="text-[13px] font-semibold text-[#000000]">
                    {col.title}
                  </div>
                  <ul className="mt-3.5 p-0 list-none flex flex-col gap-2.5">
                    {col.links.map((lnk, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={lnk.href}
                          className="text-[14px] text-[#5A6675] hover:text-[#000000] transition-colors"
                        >
                          {lnk.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          {/* Sub-footer Legal Bar */}
          <div className="mt-12 pt-[22px] border-t border-[#EEF0F3] flex justify-between gap-4 flex-wrap text-[13px] text-[#5A6675]">
            <span>© 2026 Cerebro dNano</span>
            <div className="flex gap-5 flex-wrap">
              <Link
                href="/privacy-policy"
                className="text-[#5A6675] hover:text-[#000000] transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#5A6675] hover:text-[#000000] transition-colors"
              >
                Terms of service
              </Link>
              <Link
                href="/data-deletion"
                className="text-[#5A6675] hover:text-[#000000] transition-colors"
              >
                Data deletion
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
