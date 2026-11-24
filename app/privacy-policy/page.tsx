import React from "react";
import PgPrivacyV2 from "@/components/legal/PgPrivacyV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy - Cerebro DNano",
  description: "How we collect, store, and protect your data.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Privacy Policy","path":"/privacy-policy"}]}
      />
      <PgPrivacyV2 />
    </>
  );
}
