import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import HeroDashboardVisual from "@/components/platform/HeroDashboardVisual";
import DashboardsCapabilitiesSection from "@/components/platform/DashboardsCapabilitiesSection";
import DashboardsStatsBanner from "@/components/platform/DashboardsStatsBanner";
import InteractiveHierarchyExplorer from "@/components/platform/InteractiveHierarchyExplorer";
import PowerEveryReportSection from "@/components/platform/PowerEveryReportSection";
import ClientTestimonialSection from "@/components/platform/ClientTestimonialSection";
import StrategicAdvantageGrid from "@/components/platform/StrategicAdvantageGrid";
import UnifiedDataResourcesSection from "@/components/platform/UnifiedDataResourcesSection";
import ProblemSolverSection from "@/components/platform/ProblemSolverSection";
import HighImpactFinalCTA from "@/components/platform/HighImpactFinalCTA";
import { ArrowRight, LayoutDashboard, Sparkles, Layers } from "lucide-react";

export const metadata = buildMetadata({
  title: "Cross-channel advertising dashboards",
  description:
    "Drill down from executive portfolio overviews to granular campaign, ad set, and creative performance with real-time spend pacing across Meta, Google, and TikTok.",
  path: "/platform/dashboards",
});

export default function DashboardsPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/features" },
          { name: "Dashboards", path: "/platform/dashboards" },
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
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboards & Drill-Down</span>
                <span className="text-brand/40">·</span>
                <span className="text-muted">Workflow 03</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink tracking-tight leading-[1.08]">
                From high-level overview to a single ad
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Navigate through all four levels of your advertising structure without switching browser tabs. Cerebro provides continuous drill-down from channel summaries to individual creative assets.
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
                  href="/platform/objective-reporting"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-2 text-ink border border-border font-semibold text-sm transition-all duration-200"
                >
                  Explore objective engine
                </Link>
              </div>

              {/* Social Proof Sub-tag */}
              <div className="pt-2 flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1.5 font-medium text-ink">
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  Instant 4-tier drill-down
                </span>
                <span>·</span>
                <span>Meta, Google Ads, TikTok Ads & DV360</span>
              </div>
            </div>

            {/* Right Column: Hero Dashboard Visual */}
            <div className="lg:col-span-6 w-full">
              <HeroDashboardVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <Section bg="white" className="!py-16">
        <Container>
          {/* Section 2: Three Core Dashboard Capabilities */}
          <DashboardsCapabilitiesSection />

          {/* Section 3: Dark Stats / Metric Callout Section */}
          <DashboardsStatsBanner />

          {/* Section 4: Interactive Deep Dive Explorer */}
          <div className="py-16 text-left">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Interactive Exploration
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
                Inspect campaigns, ad sets, and product spend
              </h2>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Switch between individual campaign trajectory lines, 30-day baseline spend pacing, commercial product allocations, and the executive portfolio view.
              </p>
            </div>
            <InteractiveHierarchyExplorer />
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
