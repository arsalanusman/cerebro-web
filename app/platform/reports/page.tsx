import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import HeroReportsVisual from "@/components/platform/HeroReportsVisual";
import ReportsCapabilitiesSection from "@/components/platform/ReportsCapabilitiesSection";
import ReportsStatsBanner from "@/components/platform/ReportsStatsBanner";
import InteractiveWidgetBuilder from "@/components/platform/InteractiveWidgetBuilder";
import PowerEveryReportSection from "@/components/platform/PowerEveryReportSection";
import ClientTestimonialSection from "@/components/platform/ClientTestimonialSection";
import StrategicAdvantageGrid from "@/components/platform/StrategicAdvantageGrid";
import UnifiedDataResourcesSection from "@/components/platform/UnifiedDataResourcesSection";
import ProblemSolverSection from "@/components/platform/ProblemSolverSection";
import HighImpactFinalCTA from "@/components/platform/HighImpactFinalCTA";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

export const metadata = buildMetadata({
  title: "Automated marketing report builder",
  description:
    "Assemble customized, scheduled reports with modular widgets, objective tables, and automated client delivery across Meta Ads, Google Ads, and TikTok Ads.",
  path: "/platform/reports",
});

export default function ReportsPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/features" },
          { name: "Reports", path: "/platform/reports" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-white border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/15 text-brand text-xs font-semibold tracking-wide uppercase">
                <FileText className="w-3.5 h-3.5" />
                <span>Communication & Delivery</span>
                <span className="text-brand/40">·</span>
                <span className="text-muted">Workflow 04</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink tracking-tight leading-[1.08]">
                Widgets, templates and automated reports
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Transform live campaign metrics into presentation-ready reports for clients and leadership. Schedule recurring delivery and eliminate manual slide building forever.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all duration-200"
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/platform/dashboards"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-2 text-ink border border-border font-semibold text-sm transition-all duration-200"
                >
                  Explore dashboards
                </Link>
              </div>

              {/* Social Proof Sub-tag */}
              <div className="pt-2 flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1.5 font-medium text-ink">
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  Scheduled Monday morning delivery
                </span>
                <span>·</span>
                <span>PDF decks, web links & Google Sheets sync</span>
              </div>
            </div>

            {/* Right Column: Hero Reports Visual */}
            <div className="lg:col-span-6 w-full">
              <HeroReportsVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <Section bg="white" className="!py-16">
        <Container>
          {/* Section 2: Three Core Reporting Capabilities */}
          <ReportsCapabilitiesSection />

          {/* Section 3: Dark Stats / Metric Callout Section */}
          <ReportsStatsBanner />

          {/* Section 4: Interactive Deep Dive Explorer */}
          <div className="py-16 text-left">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Interactive Widget Studio
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
                Build custom widgets in four interactive steps
              </h2>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Select your visual chart format, bind advertising metrics across Meta, Google, and TikTok, define benchmark rules, and preview the live rendered card before adding it to your reporting deck.
              </p>
            </div>
            <InteractiveWidgetBuilder />
          </div>

          {/* Section 5: Connect once. Power every report. */}
          <PowerEveryReportSection />

          {/* Section 6: What our clients say + Trust Logos */}
          <ClientTestimonialSection />

          {/* Section 7: Transform scattered data into strategic advantage */}
          <StrategicAdvantageGrid />

          {/* Section 8: How growing companies transform with unified data */}
          <UnifiedDataResourcesSection />

          {/* Section 9: What problem are you looking to solve? */}
          <ProblemSolverSection />

          {/* Section 10: High-Impact Dark Final CTA */}
          <HighImpactFinalCTA />
        </Container>
      </Section>
    </>
  );
}
