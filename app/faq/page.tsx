import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frequently asked questions",
  description:
    "Common questions about Cerebro DNano data integration, supported ad platforms, objective reporting, and security.",
  path: "/faq",
});

export default function FAQPage() {
  const breadcrumbs = [{ label: "FAQ", href: "/faq" }];

  const faqItems = [
    {
      question: "Which advertising platforms does Cerebro DNano support?",
      answer:
        "Cerebro DNano currently supports live API integrations with Meta Ads (Facebook & Instagram), Google Ads (Search, Display, YouTube, PMax), and TikTok Ads.",
    },
    {
      question: "How does Cerebro access our advertising accounts?",
      answer:
        "We connect using official, scoped read-only OAuth tokens. Cerebro does not require your passwords and cannot create, modify, or delete your active ad campaigns.",
    },
    {
      question: "What is objective-based reporting?",
      answer:
        "Objective-based reporting categorizes campaigns by their business purpose (e.g. brand awareness vs. direct response sales). Instead of averaging mismatched metrics together, Cerebro evaluates awareness campaigns by CPM and reach, and conversion campaigns by CPA and ROAS.",
    },
    {
      question: "What is Ask Cerebro and how does it work?",
      answer:
        "Ask Cerebro is an embedded AI analyst operating directly on your normalized marketing data. It allows users to ask natural questions (e.g. 'Which channel had the lowest CPA last week?') and returns precise numerical answers based on your live campaign records. It is an analytical tool, not a generic conversational chatbot.",
    },
    {
      question: "How often is campaign data refreshed?",
      answer:
        "Data is synchronized automatically on a scheduled daily schedule via platform APIs. On-demand synchronizations can also be initiated from the data connections panel.",
    },
    {
      question: "Is our advertising data shared with external parties?",
      answer:
        "No. Your marketing data is logically isolated and encrypted at rest using AES-256 and in transit via TLS 1.3. We do not sell your data or use your private metrics to train general public artificial intelligence models.",
    },
  ];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Questions & Answers"
        title="Frequently asked questions."
        lead="Find straightforward answers about Cerebro DNano architecture, channel integrations, and platform capabilities."
      />

      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-left">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
