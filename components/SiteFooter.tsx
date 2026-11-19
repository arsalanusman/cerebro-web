import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

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
        { label: "Data integration", href: "/platform/data-integration" },
        { label: "Objective-based reporting", href: "/platform/objective-reporting" },
        { label: "Dashboards & hierarchy", href: "/platform/dashboards" },
        { label: "Reports & builder", href: "/platform/reports" },
        { label: "Ask Cerebro AI", href: "/ask-cerebro" },
        { label: "Integrations directory", href: "/integrations" },
        { label: "All platform features", href: "/features" },
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
        { label: "Documentation", href: "/docs" },
        { label: "FAQ", href: "/faq" },
        { label: "Security & privacy", href: "/security" },
        { label: "Pricing & tiers", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Cerebro", href: "/about" },
        { label: "Contact us", href: "/contact" },
        { label: "Book a demo", href: "/demo" },
      ],
    },
  ];

  return (
    <div className="font-sans text-[#2B3040] bg-white">
      {/* ── Trust Strip ── */}
      <section aria-label="Trust" className="border-t border-[#EEF0F3] bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-9 flex gap-7 items-center justify-between flex-wrap">
          <span className="font-heading text-[18px] font-semibold text-[#101426]">
            Built to be trusted with client data
          </span>

          <div className="flex-1 min-w-[300px] flex gap-5 lg:gap-6 flex-wrap items-center">
            {trustItems.map((t, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 text-[14px] text-[#2B3040]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={t.d} />
                </svg>
                {t.label}
              </span>
            ))}
          </div>

          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-[14.5px] font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors"
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

      {/* ── Book a Demo Navy Band (prop cta) ── */}
      {cta && (
        <section className="relative overflow-hidden py-24 sm:py-28 bg-[#1C1A57] text-white">
          <div
            aria-hidden="true"
            className="absolute -bottom-[320px] left-1/2 -ml-[380px] w-[760px] h-[760px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(165,180,252,0.35) 0, rgba(79,70,229,0.12) 25%, rgba(28,26,87,0) 60%)",
            }}
          />
          <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="mx-auto max-w-[760px] font-heading font-semibold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-tight text-white">
              Ask your own campaigns a question.
            </h2>
            <p className="mt-5 mx-auto max-w-[600px] text-[18px] leading-relaxed text-[#D4D6F2]">
              Book a personalized demo. We’ll connect your platforms or load your
              sheets, and you ask Cerebro the questions.
            </p>
            <div className="mt-9 flex gap-3 justify-center flex-wrap">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] bg-white text-[#1C1A57] hover:bg-slate-50 text-[16px] font-semibold transition-colors shadow-sm"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] border border-white/40 text-white hover:bg-white/10 text-[16px] font-semibold transition-colors"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Footer Navigation ── */}
      <footer className="py-16 sm:py-20 pb-10 bg-white border-t border-[#EEF0F3]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex gap-12 flex-wrap">
            {/* Brand & Address Column */}
            <div className="flex-1 min-w-[280px]">
              <Link href="/">
                <Image
                  src="/brand/logo.png"
                  alt={SITE.name}
                  width={180}
                  height={56}
                  className="h-[48px] sm:h-[56px] w-auto object-contain block"
                />
              </Link>
              <p className="mt-4 max-w-[300px] text-[14.5px] leading-relaxed text-[#5B6170]">
                Cerebro AI, the data engine for paid media reporting, for agencies
                and brands.
              </p>
              <address className="mt-6 not-italic text-[14px] leading-relaxed text-[#2B3040]">
                <span className="font-semibold">{SITE.name}</span>
                <br />
                {SITE.address.unit}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}
                <br />
                <a
                  href={SITE.phoneHref}
                  className="text-[#4F46E5] hover:text-[#4338CA] transition-colors"
                >
                  {SITE.phoneDisplay}
                </a>
                <br />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#4F46E5] hover:text-[#4338CA] transition-colors"
                >
                  {SITE.email}
                </a>
                <br />
                <span className="text-[#5B6170]">{SITE.hoursDisplay}</span>
              </address>
            </div>

            {/* 4 Link Columns */}
            {columns.map((col, idx) => (
              <nav key={idx} aria-label={col.title} className="flex-1 min-w-[140px]">
                <div className="text-[13px] font-semibold text-[#101426] mb-3.5">
                  {col.title}
                </div>
                <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                  {col.links.map((lnk, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={lnk.href}
                        className="text-[14px] text-[#5B6170] hover:text-[#101426] transition-colors"
                      >
                        {lnk.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="mt-12 pt-6 border-t border-[#EEF0F3] flex justify-between gap-4 flex-wrap text-[13px] text-[#5B6170]">
            <span>© 2026 {SITE.name}</span>
            <span className="flex gap-5 flex-wrap">
              <Link
                href="/privacy-policy"
                className="text-[#5B6170] hover:text-[#101426] transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#5B6170] hover:text-[#101426] transition-colors"
              >
                Terms of service
              </Link>
              <Link
                href="/data-deletion"
                className="text-[#5B6170] hover:text-[#101426] transition-colors"
              >
                Data deletion
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
