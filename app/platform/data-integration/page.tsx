import React from "react";
import PlatDataV2 from "@/components/platform/PlatDataV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data integration - Every source. One clean model.",
  description:
    "Connect platforms, build connectors with AI, or upload sheets. Cerebro AI prepares it all.",
  path: "/platform/data-integration",
});

export default function DataIntegrationPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/features" },
          { name: "Data Integration", path: "/platform/data-integration" },
        ]}
      />
      <PlatDataV2 />
    </>
  );
}
