import React from "react";
import ContactClient from "@/components/contact/ContactClient";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Cerebro DNano | Karachi, Pakistan",
  description:
    "Questions about Cerebro AI, a demo, a custom connector or working together? Reach us at The Forum, Block 9 Clifton, Karachi.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
