import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, isPlaceholderHidden } from "@/lib/site";

export interface SiteFooterProps {
  cta?: boolean;
}

export function SiteFooter({ cta = true }: SiteFooterProps) {
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
      {/* ── Trust Section ── */}
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

      {/* ── Call To Action Section (Conditional via prop `cta`) ── */}
      {cta && (
        <section className="relative overflow-hidden py-16 lg:py-[104px] bg-[#022771]">
          {/* Subtle glow circle */}
          <div
            aria-hidden="true"
            className="absolute -bottom-80 left-1/2 -ml-[380px] w-[760px] h-[760px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(142,197,240,0.35) 0, rgba(0,112,194,0.12) 25%, rgba(2,39,113,0) 60%)",
            }}
          />
          <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 box-border text-center">
            <h2 className="m-0 mx-auto max-w-[760px] font-heading font-semibold text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.025em] text-white">
              Ask your own campaigns a question.
            </h2>
            <p className="mt-5 mx-auto max-w-[600px] text-[16px] lg:text-[18px] leading-[1.55] text-[#D4D6F2]">
              Book a personalized demo. We’ll connect your platforms or load your sheets, and you ask Cerebro the questions.
            </p>
            <div className="mt-9 flex gap-3 justify-center flex-wrap">
              <Link
                href="/demo"
                className="whitespace-nowrap shrink-0 inline-flex items-center justify-center min-h-[44px] px-[22px] rounded-[22px] bg-white hover:bg-[#F3F4F6] text-[#022771] text-[15px] font-semibold transition-colors shadow-sm"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="whitespace-nowrap shrink-0 inline-flex items-center justify-center min-h-[44px] px-[22px] rounded-[22px] border border-white/40 hover:border-white/70 text-white text-[15px] font-semibold transition-colors"
              >
                Talk to sales
              </Link>
            </div>
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
