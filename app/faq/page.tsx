import React from "react";
import PgFAQV2 from "@/components/faq/PgFAQV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ - Questions, answered",
  description: "Frequently asked questions about connectors, data privacy, pricing, and AI answers.",
  path: "/faq",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"FAQ","path":"/faq"}]}
      />
      <PgFAQV2 />
    </>
  );
}
