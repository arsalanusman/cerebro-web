import React from "react";
import Link from "next/link";
import { SolutionPageData } from "@/content/solutions";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";

interface SolutionPageProps {
  data: SolutionPageData;
}

export default function SolutionPage({ data }: SolutionPageProps) {
  const sources = [
    { mark: "M", color: "#1877F2", label: "Meta Ads" },
    { mark: "G", color: "#15803D", label: "Google Ads" },
    { mark: "T", color: "#111827", label: "TikTok Ads" },
    { mark: "+", color: "#0070C2", label: "AI-built connector" },
    { mark: "↑", color: "#0070C2", label: "CSV, Excel, Google Sheets" },
  ];

  const team = [
    { initial: "A", name: "Ayesha Khan", role: "Operations admin", clients: "All clients" },
    { initial: "H", name: "Hina Raza", role: "Media planner", clients: "All clients" },
    { initial: "S", name: "Sara Malik", role: "Client viewer", clients: "Northwind Foods" },
    { initial: "M", name: "Mehreen Iqbal", role: "Client viewer", clients: "Saffron Bank, Margalla Motors" },
  ];

  const widgets = [
    {
      title: "Spend by platform (agency standard)",
      meta: "Share bar, spend, by platform",
      d: "M3 12h18M3 6h12M3 18h7",
    },
    {
      title: "Top campaigns by CTR",
      meta: "Ranked list, CTR, by campaign",
      d: "M8 6h13M8 12h10M8 18h7M3 6h.01M3 12h.01M3 18h.01",
    },
    {
      title: "CPM trend",
      meta: "Trend, CPM, by date",
      d: "M3 17l6-6 4 4 8-8",
    },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: data.category, path: `/#${data.category.toLowerCase()}` },
          { name: data.title, path: `/${data.category.toLowerCase()}/${data.slug}` },
        ]}
      />

      {/* 1. Hero Section */}
      <section className="pt-16 pb-24 bg-[linear-gradient(to_bottom,#F3F8FE_0,#FFFFFF_100%)]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7685]">
            <Link href="/" className="hover:text-[#000000] transition-colors">
              Home
            </Link>{" "}
            / <span>{data.category}</span> /{" "}
            <span className="text-[#000000] font-medium">{data.eyebrow}</span>
          </nav>

          <div className="mt-9 flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="flex-1 min-w-0">
              <p className="m-0 mb-4 text-sm font-semibold text-[#0070C2]">
                {data.eyebrow}
              </p>
              <h1 className="m-0 font-display font-semibold text-[clamp(34px,4vw,58px)] leading-[1.05] tracking-[-0.03em] text-[#000000]">
                {data.title}
              </h1>
              <p className="mt-5.5 m-0 max-w-[540px] text-lg sm:text-[19px] leading-[1.55] text-[#5A6675]">
                {data.lead}
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center min-h-[52px] px-6.5 rounded-[10px] bg-[#0070C2] hover:bg-[#005DA3] text-white font-semibold text-base shadow-sm transition-colors"
                >
                  Book a demo
                </Link>
                <Link
                  href="/ask-cerebro"
                  className="inline-flex items-center justify-center min-h-[52px] px-6.5 rounded-[10px] border border-[#D5D8E0] hover:border-[#C9CDD6] bg-white text-[#000000] font-semibold text-base transition-colors"
                >
                  See Ask Cerebro
                </Link>
              </div>
            </div>

            {/* Right: Clients Preview Card */}
            <div className="w-full lg:w-[480px] shrink-0 bg-white border border-[#E1E4EA] rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.10)] overflow-hidden">
              <div className="flex justify-between items-center p-[16px_20px] border-b border-[#EEF0F3]">
                <span className="text-sm font-semibold text-[#000000]">
                  {data.clientsPreview.title}
                </span>
                <span className="text-xs text-[#6B7685]">
                  {data.clientsPreview.org}
                </span>
              </div>

              <div className="flex flex-col">
                {data.clientsPreview.items.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-[13px_20px] border-t border-[#F1F2F5] first:border-t-0"
                  >
                    <span
                      className="w-8 h-8 rounded-lg text-white text-xs font-bold inline-flex items-center justify-center shrink-0"
                      style={{ background: c.color }}
                    >
                      {c.initials}
                    </span>
                    <span className="flex-1 min-w-0 flex flex-col">
                      <span className="text-sm font-semibold text-[#000000] truncate">
                        {c.name}
                      </span>
                      <span className="text-xs text-[#6B7685] truncate">
                        {c.access}
                      </span>
                    </span>
                    <span className="text-[11.5px] font-semibold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] shrink-0">
                      Up to date
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pains Breakdown */}
      <section className="py-20 lg:py-[88px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(28px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
            {data.painsTitle}
          </h2>

          <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pains.map((p, idx) => (
              <div
                key={idx}
                className="border-t-2 border-[#000000] pt-5 flex flex-col"
              >
                <h3 className="m-0 text-lg font-semibold text-[#000000]">
                  {p.title}
                </h3>
                <p className="mt-2 m-0 text-[15.5px] leading-[1.6] text-[#5A6675]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How Cerebro Runs Solution */}
      <section className="py-20 lg:py-[88px] bg-[#F6F8FB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(28px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
            {data.featuresTitle}
          </h2>

          <div className="mt-11 flex flex-col gap-5">
            {/* Feature 1: Sources */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-9 shadow-sm">
              <div className="flex-1 min-w-0">
                <h3 className="m-0 font-display text-2xl font-semibold text-[#000000]">
                  {data.features[0]?.title}
                </h3>
                <p className="mt-2.5 m-0 text-base leading-[1.6] text-[#5A6675]">
                  {data.features[0]?.text}
                </p>
              </div>
              <div className="w-full lg:w-[420px] shrink-0 flex gap-2.5 flex-wrap">
                {sources.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 min-h-[40px] pl-2 pr-3.5 rounded-full border border-[#E2E8F0] bg-[#FAFAFC] text-[13.5px] text-[#000000]"
                  >
                    <span
                      className="w-6 h-6 rounded-full text-white text-[10px] font-bold inline-flex items-center justify-center shrink-0"
                      style={{ background: s.color }}
                    >
                      {s.mark}
                    </span>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 2: Team */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-9 shadow-sm">
              <div className="flex-1 min-w-0">
                <h3 className="m-0 font-display text-2xl font-semibold text-[#000000]">
                  {data.features[1]?.title}
                </h3>
                <p className="mt-2.5 m-0 text-base leading-[1.6] text-[#5A6675]">
                  {data.features[1]?.text}
                </p>
              </div>
              <div className="w-full lg:w-[420px] shrink-0 border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
                {team.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-[12px_16px] border-t border-[#F1F2F5] first:border-t-0 text-[13.5px]"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#E8F2FC] text-[#005DA3] text-[11.5px] font-semibold inline-flex items-center justify-center shrink-0">
                      {m.initial}
                    </span>
                    <span className="w-28 text-[#000000] font-medium truncate">
                      {m.name}
                    </span>
                    <span className="w-28 text-[#5A6675] truncate">
                      {m.role}
                    </span>
                    <span className="flex-1 text-[#1C2433] text-right truncate">
                      {m.clients}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 3: Widgets */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-9 shadow-sm">
              <div className="flex-1 min-w-0">
                <h3 className="m-0 font-display text-2xl font-semibold text-[#000000]">
                  {data.features[2]?.title}
                </h3>
                <p className="mt-2.5 m-0 text-base leading-[1.6] text-[#5A6675]">
                  {data.features[2]?.text}
                </p>
              </div>
              <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-2.5">
                {widgets.map((w, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border border-[#E2E8F0] rounded-xl p-[14px_16px] bg-white"
                  >
                    <span className="w-[34px] h-[34px] rounded-lg bg-[#E8F2FC] inline-flex items-center justify-center shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0070C2"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={w.d} />
                      </svg>
                    </span>
                    <span className="flex-1 min-w-0 flex flex-col">
                      <span className="text-sm font-semibold text-[#000000] truncate">
                        {w.title}
                      </span>
                      <span className="text-[12.5px] text-[#6B7685] truncate">
                        {w.meta}
                      </span>
                    </span>
                    <span className="inline-flex items-center h-8 px-3 rounded-lg bg-[#0070C2] text-white text-[12.5px] font-semibold cursor-default shrink-0">
                      Use
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 4: AI Box (Navy) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center bg-[#022771] rounded-2xl p-7 sm:p-9 text-white">
              <div className="flex-1 min-w-0">
                <p className="m-0 mb-2.5 text-[13px] font-semibold text-[#8EC5F0]">
                  Cerebro AI
                </p>
                <h3 className="m-0 font-display text-2xl font-semibold text-white">
                  {data.features[3]?.title}
                </h3>
                <p className="mt-2.5 m-0 text-base leading-[1.6] text-[#C9DDF2]">
                  {data.features[3]?.text}
                </p>
              </div>
              <div className="w-full lg:w-[420px] shrink-0 bg-white rounded-xl p-5 sm:p-6 text-[#000000] shadow-sm">
                <div className="flex justify-end">
                  <span className="max-w-[320px] bg-[#F2F3F6] rounded-[12px_12px_4px_12px] p-[9px_12px] text-[13.5px] text-[#000000]">
                    {data.features[3]?.aiQuestion}
                  </span>
                </div>
                <p className="mt-3.5 m-0 text-sm leading-[1.6] text-[#1C2433]">
                  {data.features[3]?.aiAnswer}
                </p>
                <p className="mt-2.5 m-0 text-xs text-[#6B7685]">
                  Demo data. Answer replayed from Ask Cerebro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Questions Asked */}
      <section className="py-20 lg:py-[88px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(28px,3vw,40px)] leading-[1.12] tracking-[-0.02em] text-[#000000]">
            {data.questionsTitle}
          </h2>

          <div className="mt-7 flex gap-2.5 flex-wrap">
            {data.questions.map((q, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border border-[#E2E8F0] text-[14.5px] text-[#000000] bg-white shadow-2xs"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0070C2"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {q}
              </span>
            ))}
          </div>

          {/* Quote Card */}
          <div className="mt-14 border border-dashed border-[#CDD1DA] rounded-2xl p-7 sm:p-9 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            <p className="m-0 flex-1 font-display text-[clamp(20px,2vw,26px)] leading-[1.4] font-medium text-[#000000]">
              {data.quote.text}
            </p>
            <p className="m-0 text-[14.5px] text-[#5A6675] shrink-0">
              {data.quote.author}
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 lg:py-[88px] bg-[#F6F8FB]">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 box-border">
          <h2 className="m-0 font-display font-semibold text-[clamp(28px,3vw,40px)] leading-[1.12] tracking-[-0.02em] text-[#000000]">
            {data.faqTitle}
          </h2>

          <div className="mt-7 flex flex-col gap-2.5">
            {data.faq.map((f, idx) => (
              <details
                key={idx}
                className="group bg-white border border-[#E2E8F0] rounded-xl px-5 transition-colors"
              >
                <summary className="min-h-[60px] flex items-center justify-between cursor-pointer text-base font-semibold text-[#000000] list-none">
                  <span>{f.q}</span>
                  <span className="text-[#6B7685] group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="m-0 pb-5 text-[15px] leading-[1.6] text-[#5A6675]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
