import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import FAQClient from "@/components/faq/FAQClient";

export const metadata = buildMetadata({
  title: "Frequently asked questions | Cerebro DNano",
  description:
    "Common questions about Cerebro DNano data integration, supported ad platforms, objective reporting, and security.",
  path: "/faq",
});

export default function FAQPage() {
  const breadcrumbs = [{ label: "FAQ", href: "/faq" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Questions & Answers"
        title="Frequently asked questions."
        lead="Straightforward answers about Cerebro DNano architecture, channel integrations, data security, and automated reporting."
      />

      <FAQClient />

      <CTASection />
    </>
  );
}
