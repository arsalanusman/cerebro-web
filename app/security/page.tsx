import React from "react";
import PgSecurityV2 from "@/components/security/PgSecurityV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security - Your clients’ data, protected",
  description: "Access control, workspace isolation, activity logging, and encrypted transit.",
  path: "/security",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Security","path":"/security"}]}
      />
      <PgSecurityV2 />
    </>
  );
}
