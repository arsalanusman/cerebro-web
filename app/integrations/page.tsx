import React from "react";
import IntegrationsClient from "@/components/integrations/IntegrationsClient";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { integrationsData } from "@/content/integrations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: integrationsData.seoTitle,
  description: integrationsData.seoDesc,
  path: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
        ]}
      />
      <IntegrationsClient />
    </>
  );
}
