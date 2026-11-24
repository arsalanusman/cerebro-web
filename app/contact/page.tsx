import React from "react";
import PgContactV2 from "@/components/contact/PgContactV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact - Talk to the team in Karachi",
  description: "Questions about Cerebro, pricing or a partnership. We reply within one business day.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Contact","path":"/contact"}]}
      />
      <PgContactV2 />
    </>
  );
}
