import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How Cerebro DNano collects, processes, and safeguards advertising data and personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Privacy Policy", href: "/privacy-policy" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Legal & Compliance"
        title="Privacy policy."
        lead="This policy describes our data processing practices for customer accounts and connected advertising platform records."
      />

      <div className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl text-left space-y-8 text-body text-text leading-relaxed">
            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                1. Information We Collect
              </h2>
              <p>
                {SITE.name} collects account information (such as your name, corporate email address, and company name) when you request a demonstration or create an account. When you connect advertising platforms, we receive read-only performance records via authorized APIs for Meta Ads, Google Ads and TikTok Ads.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                2. Use of Advertising Data
              </h2>
              <p>
                Advertising data ingested through platform APIs is used solely to generate dashboards, normalize metrics, compile custom reports, and answer user-initiated queries within Ask Cerebro. We do not sell your advertising metrics, share data across organizational boundaries, or train general commercial models with your private performance records.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                3. Data Storage & Security
              </h2>
              <p>
                All data in transit is encrypted using TLS 1.3 protocols. Stored data is maintained in logically isolated databases with AES-256 encryption at rest. Customer workspaces are protected by role-based access controls and audit logging.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                4. Data Retention and Deletion
              </h2>
              <p>
                We retain your advertising performance data for as long as your workspace remains active. You may request complete erasure of your data at any time by following the instructions on our Data Deletion page or by contacting us at {SITE.email}.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                5. Contact Information
              </h2>
              <p>
                For questions regarding this policy or our data protection practices, write to us at:
              </p>
              <div className="mt-3 p-4 rounded-card bg-surface border border-border">
                <p className="font-semibold text-ink">{SITE.name}</p>
                <p>{SITE.address.street}, {SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}</p>
                <p>Email: <a href={`mailto:${SITE.email}`} className="text-brand underline">{SITE.email}</a></p>
                <p>Phone: {SITE.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
