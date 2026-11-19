import React from "react";
import LegalPage from "@/components/legal/LegalPage";
import { legalDocs } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service | Cerebro DNano",
  description:
    "Terms of service governing the usage of Cerebro DNano digital marketing data integration, analytics, and reporting platform.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return <LegalPage doc={legalDocs["terms-of-service"]} />;
}
