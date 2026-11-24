import React from "react";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import AskCerebroHero from "@/components/ask-cerebro/AskCerebroHero";
import AskCerebroContent from "@/components/ask-cerebro/AskCerebroContent";

export const metadata = buildMetadata({
  title: "Ask Cerebro | AI Ad Performance Analyst | Cerebro DNano",
  description:
    "Ask Cerebro answers questions about your connected and uploaded ad data in plain language. Every answer shows the numbers behind it, with full data transparency.",
  path: "/ask-cerebro",
});

export default function AskCerebroPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/features" },
          { name: "Ask Cerebro", path: "/ask-cerebro" },
        ]}
      />
      <AskCerebroHero />
      <AskCerebroContent />
    </>
  );
}
