import React from "react";
import PlatIntegrationsV2 from "@/components/platform/PlatIntegrationsV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Integrations - Every marketing source, connected",
  description: "Native connectors, AI-built connectors, sheet upload and sales data.",
  path: "/integrations",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Platform","path":"/features"},{"name":"Integrations","path":"/integrations"}]}
      />
      <PlatIntegrationsV2 />
    </>
  );
}
