import React from "react";
import Link from "next/link";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { securityData } from "@/content/security";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: securityData.seoTitle,
  description: securityData.seoDesc,
  path: "/security",
});

export default function SecurityPage() {
  const { summary, sections } = securityData;

  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums">
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ]}
      />

      {/* Hero Banner with Dark Indigo Background */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-[#1C1A57]">
        <div
          aria-hidden="true"
          className="absolute -top-[280px] -right-[220px] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(199,210,254,0.45)_0,rgba(79,70,229,0.12)_22%,rgba(28,26,87,0)_58%)] pointer-events-none"
        />
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#A5B4FC]">
            <Link href="/" className="text-[#C9CCF2] hover:text-white no-underline">
              Home
            </Link>{" "}
            / <span className="text-white">Security</span>
          </nav>
          <h1 className="mt-7 max-w-[760px] font-heading font-semibold text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.03em] text-white">
            Security and data protection
          </h1>
          <p className="mt-4 max-w-[640px] text-[17px] md:text-[18px] leading-[1.55] text-[#CDD0F3]">
            Agencies and brands trust Cerebro with their advertising data. This page explains how we protect it, who can see it, and how Cerebro AI uses it.
          </p>

          <div className="mt-9 flex gap-3 flex-wrap">
            {summary.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-2.5 min-h-[48px] px-4 rounded-xl bg-white/[0.08] border border-white/[0.14] text-white no-underline text-[14.5px] font-medium hover:bg-white/[0.14] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A5B4FC"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={s.d} />
                </svg>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & Section Anchor Nav */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
          {/* Table of Contents Sticky Nav */}
          <nav
            aria-label="On this page"
            className="lg:w-[240px] shrink-0 sticky top-24 flex flex-col gap-1"
          >
            <div className="text-[12px] font-semibold text-[#6B7180] uppercase tracking-wider mb-2">
              On this page
            </div>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block py-2 px-2.5 rounded-lg text-[14px] text-[#2B3040] hover:text-[#4F46E5] hover:bg-[#F5F6FF] no-underline transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>

          {/* Sections List */}
          <div className="flex-1 min-w-0 flex flex-col gap-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="m-0 font-heading font-semibold text-[26px] sm:text-[28px] leading-[1.2] tracking-[-0.015em] text-[#101426]">
                  {s.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {s.items.map((it, idx) => (
                    <div
                      key={idx}
                      style={{ borderColor: it.bd, background: it.bg }}
                      className="flex gap-3.5 items-start border rounded-xl p-4 sm:p-5"
                    >
                      <span
                        style={{ background: it.dot }}
                        className="w-[26px] h-[26px] rounded-full inline-flex items-center justify-center shrink-0 mt-0.5"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d={it.icon} />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <div className="flex gap-2.5 items-center flex-wrap">
                          <h3 className="m-0 text-[16px] font-semibold text-[#101426]">
                            {it.title}
                          </h3>
                          <span
                            style={{ background: it.pillBg, color: it.pillFg }}
                            className="text-[11.5px] font-semibold px-2 py-0.5 rounded-full"
                          >
                            {it.state}
                          </span>
                        </div>
                        <p className="mt-1.5 m-0 text-[14.5px] sm:text-[15px] leading-[1.6] text-[#5B6170]">
                          {it.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Security Questionnaire Banner */}
            <div className="rounded-2xl bg-[#F5F6FF] border border-[#E0E3FF] p-7 flex gap-6 flex-wrap items-center justify-between">
              <div>
                <h2 className="m-0 font-heading text-[22px] font-semibold text-[#101426]">
                  Have a security questionnaire?
                </h2>
                <p className="mt-2 text-[15px] text-[#5B6170]">
                  Send it to us and we’ll complete it as part of your evaluation.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-[#4F46E5] text-white no-underline text-[15px] font-semibold hover:bg-[#4338CA] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
