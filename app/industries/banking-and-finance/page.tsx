import React from "react";
import IndBankingV2 from "@/components/industries/IndBankingV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cerebro for banking and finance - Paid media reporting with access you control",
  description: "Role-based permissions, encrypted data transit, and audit trails for financial institutions.",
  path: "/industries/banking-and-finance",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Industries","path":"/industries/banking-and-finance"},{"name":"Banking & Finance","path":"/industries/banking-and-finance"}]}
      />
      <IndBankingV2 />
    </>
  );
}
