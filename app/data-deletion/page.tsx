import React from "react";
import LegalPage from "@/components/legal/LegalPage";
import { legalDocs } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Deletion Instructions | Cerebro DNano",
  description:
    "How to disconnect your ad accounts and request complete deletion of your data from Cerebro DNano.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return <LegalPage doc={legalDocs["data-deletion"]} />;
}
