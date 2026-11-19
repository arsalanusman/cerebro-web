import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Data deletion instructions",
  description:
    "How to request complete erasure of your advertising records and workspace credentials from Cerebro DNano.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  const breadcrumbs = [{ label: "Data Deletion", href: "/data-deletion" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Data Deletion", path: "/data-deletion" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="User Privacy & Rights"
        title="Data deletion policy."
        lead="We respect your right to have all connected advertising data, workspace records, and tokens permanently removed."
      />

      <div className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl text-left space-y-8 text-body text-text leading-relaxed">
            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                How to Request Account & Data Erasure
              </h2>
              <p>
                In compliance with platform developer guidelines (including Meta, Google, and TikTok platform terms) and global privacy standards, you can initiate data deletion at any time.
              </p>
            </div>

            <div className="p-6 rounded-card bg-surface border border-border">
              <h3 className="text-body font-heading font-semibold text-ink mb-3">
                Standard Deletion Procedure
              </h3>
              <ol className="space-y-3 text-small text-text list-decimal pl-5">
                <li>
                  Send an email to{" "}
                  <a href={`mailto:${SITE.email}`} className="text-brand font-medium underline">
                    {SITE.email}
                  </a>{" "}
                  with the subject line &ldquo;Data Deletion Request&rdquo;.
                </li>
                <li>
                  Include your organization name, primary workspace administrator email, and connected Ad Account IDs.
                </li>
                <li>
                  Our engineering team will confirm receipt within 24 hours during standard business hours ({SITE.hoursDisplay}).
                </li>
                <li>
                  Upon verification, all OAuth tokens are revoked, cached records purged, and database partitions permanently deleted within 14 business days.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                Revoking API Permissions Directly
              </h2>
              <p>
                You may also revoke Cerebro&apos;s read-only OAuth permissions immediately through each platform&apos;s security settings:
              </p>
              <ul className="mt-3 space-y-2 text-small text-muted list-disc pl-5">
                <li>
                  <strong className="text-ink">Meta:</strong> Facebook Settings &gt; Business Integrations &gt; Cerebro DNano &gt; Remove.
                </li>
                <li>
                  <strong className="text-ink">Google:</strong> Google Account Security &gt; Third-party apps with account access &gt; Cerebro DNano &gt; Remove Access.
                </li>
                <li>
                  <strong className="text-ink">TikTok:</strong> TikTok for Business &gt; User Settings &gt; Authorized Apps &gt; Revoke.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
