import React from "react";
import PgTermsV2 from "@/components/legal/PgTermsV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service - Cerebro DNano",
  description: "Terms and conditions for using the Cerebro platform.",
  path: "/terms-of-service",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Terms of Service","path":"/terms-of-service"}]}
      />
      <PgTermsV2 />
    </>
  );
}
