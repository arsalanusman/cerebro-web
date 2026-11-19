import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketing intelligence for banking and finance",
  description:
    "Secure, audited digital ad reporting for financial institutions, fintechs, and retail banks.",
  path: "/industries/banking-and-finance",
});

export default function BankingFinanceIndustryPage() {
  const breadcrumbs = [
    { label: "Industries", href: "/features" },
    { label: "Banking & Finance", href: "/industries/banking-and-finance" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Industries", path: "/features" },
          { name: "Banking & Finance", path: "/industries/banking-and-finance" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industries · Financial Services"
        title="Compliant marketing intelligence for banking and finance."
        lead="Track customer acquisition across deposit accounts, credit cards, and digital banking apps with audited, read-only ad connections and strict governance."
        productShot={{
          src: "/product/dashboard.png",
          alt: "Financial services advertising performance dashboard",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <FeatureRow
            eyebrow="Financial Compliance"
            title="Read-only data connections and strict data boundaries."
            description="Financial marketing teams require ironclad security controls. Cerebro connects with read-only OAuth tokens, never accesses consumer personal data, and isolates analytical queries in private tenant databases."
            points={[
              "No personally identifiable information (PII) required or collected",
              "Audit logging for every report generation and user login",
              "Multi-product tracking across retail and corporate banking lines",
            ]}
            productShot={{
              src: "/product/objective-filter.png",
              alt: "Objective-based view for financial acquisition campaigns",
            }}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
