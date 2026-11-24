import React from "react";
import PgDeletionV2 from "@/components/legal/PgDeletionV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Deletion - Cerebro DNano",
  description: "Instructions on requesting data deletion and removing platform access.",
  path: "/data-deletion",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Data Deletion","path":"/data-deletion"}]}
      />
      <PgDeletionV2 />
    </>
  );
}
