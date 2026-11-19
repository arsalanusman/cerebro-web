import React from "react";
import PricingClient from "@/components/pricing/PricingClient";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { pricingData } from "@/content/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: pricingData.seoTitle,
  description: pricingData.seoDesc,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />
      <PricingClient />
    </>
  );
}
