import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import FeaturesInteractive from "@/components/features/FeaturesInteractive";
import {
  Database,
  Target,
  LayoutDashboard,
  FileText,
  Sparkles,
  Shield,
  RefreshCw,
  Filter,
  Layers,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Platform features overview | Cerebro DNano",
  description:
    "Explore Cerebro DNano capabilities: automated data pipelines, objective-based evaluation, hierarchy drill-downs, and AI analysis.",
  path: "/features",
});

export default function FeaturesPage() {
  const breadcrumbs = [{ label: "Features", href: "/features" }];

  return (
    <>
      <SoftwareApplicationJsonLd />
      <BreadcrumbListJsonLd items={[{ name: "Features", path: "/features" }]} />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Platform Overview"
        title="Purpose-built for digital marketing intelligence."
        lead="Every feature in Cerebro DNano is engineered to give marketing teams clarity across their advertising spend without manual spreadsheet exports."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database className="w-5 h-5 text-brand" />}
              title="Automated Data Integration"
              description="Direct API authentication for Meta Ads, Google Ads and TikTok Ads. Consolidate raw spend, clicks, impressions and conversions."
              href="/platform/data-integration"
            />
            <FeatureCard
              icon={<Target className="w-5 h-5 text-brand" />}
              title="Objective-Based Reporting"
              description="Judge campaigns against their intended goal (Awareness, Consideration, Conversion) rather than misleading uniform metrics."
              href="/platform/objective-reporting"
            />
            <FeatureCard
              icon={<LayoutDashboard className="w-5 h-5 text-brand" />}
              title="Executive & Channel Dashboards"
              description="Switch between high-level portfolio overviews and granular campaign, ad set, and creative drill-downs."
              href="/platform/dashboards"
            />
            <FeatureCard
              icon={<FileText className="w-5 h-5 text-brand" />}
              title="Report Builder & Scheduling"
              description="Assemble branded client reports with custom widgets, tables, and automated email deliveries."
              href="/platform/reports"
            />
            <FeatureCard
              icon={<Sparkles className="w-5 h-5 text-brand" />}
              title="Ask Cerebro AI Analyst"
              description="Query your connected advertising dataset in plain language. Uncover trend anomalies and budget shifts instantly."
              href="/ask-cerebro"
            />
            <FeatureCard
              icon={<Shield className="w-5 h-5 text-brand" />}
              title="Enterprise Security"
              description="Scoped read-only OAuth tokens, AES-256 encryption at rest, TLS 1.3 in transit, and logical client isolation."
              href="/security"
            />
            <FeatureCard
              icon={<RefreshCw className="w-5 h-5 text-brand" />}
              title="Sync Verification"
              description="Automated pipeline health checks alert you immediately if an API token expires or data delays occur."
            />
            <FeatureCard
              icon={<Filter className="w-5 h-5 text-brand" />}
              title="Normalized Cross-Channel Metrics"
              description="Standardized CTR, CPM, CPC and CPA calculations eliminate naming discrepancies between platforms."
            />
            <FeatureCard
              icon={<Layers className="w-5 h-5 text-brand" />}
              title="Multi-Workspace Management"
              description="Agencies can segregate multiple brands into isolated workspaces with dedicated team permissions."
              href="/solutions/agencies"
            />
          </div>
        </Container>
      </Section>

      <FeaturesInteractive />

      <CTASection />
    </>
  );
}
