import React from "react";
import PgBlogV2 from "@/components/blog/PgBlogV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog - Guides on paid media reporting",
  description: "Perspectives on cross-channel reporting, data integration, and objective-based marketing.",
  path: "/blog",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Blog","path":"/blog"}]}
      />
      <PgBlogV2 />
    </>
  );
}
