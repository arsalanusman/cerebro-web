import React from "react";
import IndEcommerceV2 from "@/components/industries/IndEcommerceV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cerebro for e-commerce - Know what your ads really earn",
  description: "Blended ROAS, platform ROAS, revenue matching, and customer acquisition cost in one place.",
  path: "/industries/ecommerce",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Industries","path":"/industries/ecommerce"},{"name":"E-commerce","path":"/industries/ecommerce"}]}
      />
      <IndEcommerceV2 />
    </>
  );
}
