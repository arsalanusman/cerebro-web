import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { Lock, Shield, Server, Key, EyeOff, FileCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "Security and data protection",
  description:
    "How Cerebro DNano protects your marketing data with read-only API access, encryption at rest, and strict tenant isolation.",
  path: "/security",
});

export default function SecurityPage() {
  const breadcrumbs = [{ label: "Security", href: "/security" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Security", path: "/security" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Security & Governance"
        title="Enterprise-grade data protection."
        lead="Your marketing data and channel credentials are treated with rigorous security controls at every stage of the pipeline."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-card border border-border bg-white">
              <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Read-Only OAuth Access
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Cerebro connects to Meta Ads, Google Ads and TikTok Ads using scoped read-only OAuth tokens. The platform cannot create, modify, or delete your live ads.
              </p>
            </div>

            <div className="p-8 rounded-card border border-border bg-white">
              <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Encryption In Transit & At Rest
              </h3>
              <p className="text-small text-muted leading-relaxed">
                All external communication uses TLS 1.3 encryption. Stored credentials and cached analytics are encrypted at rest using industry-standard AES-256 protocols.
              </p>
            </div>

            <div className="p-8 rounded-card border border-border bg-white">
              <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Logical Tenant Isolation
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Customer environments and agency client accounts are logically segregated at the database layer. No organization can access another account&apos;s data.
              </p>
            </div>

            <div className="p-8 rounded-card border border-border bg-white">
              <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Role-Based Access Control
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Control access by team member and workspace. Assign granular permissions for administrators, account managers, and client viewers.
              </p>
            </div>

            <div className="p-8 rounded-card border border-border bg-white">
              <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Audit Logging
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Detailed audit logs record user sign-ins, report generations, and integration sync statuses for enterprise transparency.
              </p>
            </div>

            <div className="p-8 rounded-card border border-border bg-white">
              <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Zero Third-Party Model Training
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Your ad performance data is never shared with third parties or used to train general foundation models. Ask Cerebro operates strictly on your private context.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
