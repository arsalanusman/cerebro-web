import React from "react";
import Link from "next/link";
import { LegalDoc } from "@/content/legal";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { SITE } from "@/lib/site";

interface LegalPageProps {
  doc: LegalDoc;
}

export default function LegalPage({ doc }: LegalPageProps) {
  const tabs = [
    { label: "Privacy policy", href: "/privacy-policy", slug: "privacy-policy" },
    { label: "Terms of service", href: "/terms-of-service", slug: "terms-of-service" },
    { label: "Data deletion", href: "/data-deletion", slug: "data-deletion" },
  ];

  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums">
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Legal", path: "/privacy-policy" },
          { name: doc.title, path: `/${doc.slug}` },
        ]}
      />

      {/* Draft for legal review banner */}
      <div
        role="note"
        className="bg-[#FFF7ED] border-b border-[#F5D9C0] py-3 px-6 text-center text-[14px] font-medium text-[#9A3412]"
      >
        Draft for legal review. Not yet in effect.
      </div>

      {/* Header */}
      <section className="pt-12 pb-6">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7180]">
            <Link href="/" className="hover:text-[#4F46E5] no-underline">
              Home
            </Link>{" "}
            / <span>Legal</span> / <span className="text-[#101426]">{doc.title}</span>
          </nav>

          {/* Document switcher tabs */}
          <div
            role="tablist"
            aria-label="Legal documents"
            className="mt-6 inline-flex gap-1 p-1 rounded-xl bg-[#ECEEF3] flex-wrap"
          >
            {tabs.map((t) => {
              const isSelected = t.slug === doc.slug;
              return (
                <Link
                  key={t.slug}
                  href={t.href}
                  role="tab"
                  aria-selected={isSelected}
                  className={`min-h-[42px] px-4 rounded-lg inline-flex items-center text-[14px] font-semibold transition-all no-underline ${
                    isSelected
                      ? "bg-white text-[#101426] shadow-[0_1px_3px_rgba(16,20,38,0.12)]"
                      : "text-[#5B6170] hover:text-[#101426]"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          <h1 className="mt-7 font-heading font-semibold text-[34px] sm:text-[40px] md:text-[48px] leading-[1.08] tracking-[-0.025em] text-[#101426]">
            {doc.title}
          </h1>
          <p className="mt-3 text-[14px] text-[#6B7180]">Last updated November 2026</p>
          <p className="mt-4 max-w-[720px] text-[17px] leading-[1.65] text-[#2B3040]">
            {doc.intro}
          </p>
        </div>
      </section>

      {/* Content & Sidebar */}
      <section className="pt-6 pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 items-start">
          {/* Table of contents */}
          <nav
            aria-label="Contents"
            className="lg:w-[240px] shrink-0 border-l border-[#EEF0F3] pl-4 lg:sticky lg:top-24"
          >
            <div className="text-[12px] font-semibold text-[#6B7180] uppercase tracking-wider">
              Contents
            </div>
            <ol className="mt-2.5 p-0 pl-4.5 flex flex-col gap-1.5 text-[14px] leading-[1.45] text-[#2B3040]">
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-[#4F46E5] text-[#2B3040] no-underline">
                    {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="flex-1 min-w-0 max-w-[72ch] flex flex-col gap-8">
            {doc.sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="m-0 font-heading text-[22px] leading-[1.3] font-semibold text-[#101426]">
                  {s.n}. {s.h}
                </h2>
                <p className="mt-2.5 text-[16px] leading-[1.7] text-[#2B3040]">{s.p}</p>
                {s.hasLegal && (
                  <p className="mt-2.5 inline-block text-[13.5px] leading-[1.5] text-[#9A3412] bg-[#FFF7ED] rounded-lg px-2.5 py-1.5 font-mono">
                    {s.legal}
                  </p>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-[#EEF0F3] text-[14px] leading-[1.7] text-[#5B6170]">
              Questions about this document:{" "}
              <a href={`mailto:${SITE.email}`} className="text-[#4F46E5] hover:underline">
                {SITE.email}
              </a>
              , {SITE.name}, {SITE.address.street}, {SITE.address.city} {SITE.address.postalCode},{" "}
              {SITE.address.country}.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
