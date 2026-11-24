import React from "react";
import LegalPage from "@/components/legal/LegalPage";
import { legalDocs } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Cerebro DNano",
  description:
    "Learn how Cerebro DNano collects, processes, and protects your marketing data and advertising account credentials.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage doc={legalDocs["privacy-policy"]} />;
}
