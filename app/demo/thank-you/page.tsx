import React from "react";
import PgThanksV2 from "@/components/demo/PgThanksV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Demo booked - You’re booked in",
  description: "We received your details and will be in touch shortly to confirm your walkthrough.",
  path: "/demo/thank-you",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Demo booked","path":"/demo/thank-you"}]}
      />
      <PgThanksV2 />
    </>
  );
}
