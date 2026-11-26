import React from "react";
import PricingV2 from "@/components/pricing/PricingV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing - Plans that grow with your clients",
  description:
    "Every plan includes Cerebro AI. Book a demo for a plan built around your team, brands, and clients.",
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
      <PricingV2 />
    </>
  );
}
