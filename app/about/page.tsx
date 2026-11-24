import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { aboutData } from "@/content/about";
import { buildMetadata } from "@/lib/seo";
import HorizontalRoadmap from "@/components/about/HorizontalRoadmap";
import TeamSection from "@/components/about/TeamSection";

export const metadata = buildMetadata({
  title: aboutData.seoTitle,
  description: aboutData.seoDesc,
  path: "/about",
});

export default function AboutPage() {
  const { who, principles, facts, photos, roadmap, leaders, techTeam } = aboutData;

  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums">
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5F6FF] to-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7180]">
            <Link href="/" className="hover:text-[#4F46E5] no-underline">
              Home
            </Link>{" "}
            / <span className="text-[#101426]">About</span>
          </nav>
          <p className="mt-6 m-0 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
            ABOUT CEREBRO DNANO
          </p>
          <h1 className="mt-3 max-w-[900px] font-heading font-semibold text-[38px] sm:text-[48px] md:text-[64px] leading-[1.04] tracking-[-0.03em] text-[#101426]">
            We build the AI data engine for paid media.
          </h1>
          <p className="mt-5 max-w-[720px] text-[18px] md:text-[19px] leading-[1.6] text-[#5B6170]">
            Cerebro DNano is an advertising analytics software company headquartered in Karachi, Pakistan. We bring data from Meta, Google, TikTok, and custom sources into one unified model, empowering marketing teams to evaluate true objectives and question performance in plain language.
          </p>
        </div>
      </section>

      {/* Why We Built Cerebro */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
          <div className="lg:w-[340px] shrink-0">
            <p className="m-0 mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
              OUR FOUNDING PREMISE
            </p>
            <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
              Why we built Cerebro
            </h2>
          </div>
          <div className="flex-1 min-w-0 space-y-4 text-[17px] leading-[1.7] text-[#5B6170]">
            <p className="m-0">
              Modern marketing teams and agencies spend dozens of hours every month wrestling with fragmented ad platforms. Every channel has its own dashboard, its own attribution nuances, and its own exported spreadsheet formats.
            </p>
            <p className="m-0">
              We built Cerebro DNano to solve this fundamental fragmentation. By pairing automated API ingestion with Cerebro AI, we transform raw impressions, clicks, and conversions across Meta, Google, TikTok, and custom networks into a single coherent truth.
            </p>
            <p className="m-0">
              Our mission is to help marketers judge campaigns by their true objectives, make reports instant and auditable, and let anyone interrogate their performance in plain language.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Product Roadmap: How We Got Here */}
      <HorizontalRoadmap milestones={roadmap} />

      {/* Team: Our Leaders & Our Tech Team */}
      <TeamSection leaders={leaders} techTeam={techTeam} />

      {/* Who Cerebro is For */}
      <section className="py-20 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <p className="m-0 mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
            TAILORED SOLUTIONS
          </p>
          <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
            Who Cerebro is for
          </h2>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {who.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="bg-white border border-[#E4E7EC] rounded-2xl p-5 no-underline hover:border-[#A5B4FC] hover:shadow-[0_8px_24px_rgba(79,70,229,0.08)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="font-heading text-[17px] font-semibold text-[#101426] group-hover:text-[#4F46E5] transition-colors">
                    {w.title}
                  </div>
                  <p className="mt-2 m-0 text-[14px] leading-[1.55] text-[#5B6170]">
                    {w.text}
                  </p>
                </div>
                <span className="mt-4 text-[13px] font-semibold text-[#4F46E5] inline-flex items-center gap-1">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (Principles) */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <p className="m-0 mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
            CORE VALUES
          </p>
          <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
            How we work
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-[#101426] pt-5">
                <h3 className="m-0 font-heading text-[21px] font-semibold text-[#101426]">
                  {p.title}
                </h3>
                <p className="mt-2 m-0 text-[15.5px] leading-[1.6] text-[#5B6170]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Company & Clifton Office Photos */}
      <section className="py-20 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-[460px] shrink-0 w-full">
            <p className="m-0 mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
              CORPORATE FACTS
            </p>
            <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#101426]">
              The company
            </h2>
            <dl className="mt-7 bg-white border border-[#E4E7EC] rounded-2xl p-6 sm:p-7 shadow-[0_4px_16px_rgba(16,20,38,0.04)] divide-y divide-[#EEF0F3]">
              {facts.map((f, idx) => (
                <div key={idx} className="flex gap-4 py-3.5 first:pt-0 last:pb-0 flex-wrap">
                  <dt className="w-[130px] shrink-0 text-[14px] text-[#6B7180] font-medium">
                    {f.k}
                  </dt>
                  <dd className="m-0 flex-1 text-[15px] leading-[1.6] text-[#101426] whitespace-pre-line font-medium">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {photos.map((p, idx) => (
              <div
                key={idx}
                className="group relative h-[210px] rounded-2xl border border-[#E4E7EC] overflow-hidden bg-[#101426] shadow-[0_4px_16px_rgba(16,20,38,0.06)]"
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[14.5px] font-semibold text-white leading-tight">
                    {p.title}
                  </span>
                  <span className="text-[12px] text-white/70 mt-1">
                    {p.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
