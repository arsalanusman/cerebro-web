import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of service",
  description:
    "Standard terms and conditions governing the use of Cerebro DNano marketing data services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const breadcrumbs = [{ label: "Terms of Service", href: "/terms-of-service" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Terms of Service", path: "/terms-of-service" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Legal & Compliance"
        title="Terms of service."
        lead="These terms govern your access to and use of the Cerebro DNano platform and related reporting services."
      />

      <div className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl text-left space-y-8 text-body text-text leading-relaxed">
            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using {SITE.name} ({SITE.url}), you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or agency, you represent that you have the authority to bind such entity.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                2. Platform Access and Credentials
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your workspace credentials and OAuth authorizations. Cerebro connects to supported ad platforms (Meta Ads, Google Ads and TikTok Ads) on your behalf using scoped API permissions provided during onboarding.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                3. Permitted Use
              </h2>
              <p>
                You agree to use Cerebro DNano exclusively for lawful marketing intelligence, data consolidation, and internal or client reporting purposes. You must not attempt to reverse engineer, disrupt, or bypass access controls of the platform infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                4. Intellectual Property
              </h2>
              <p>
                You retain all rights, title, and interest in your underlying advertising data and client records. Cerebro DNano retains all rights to the software, user interface design, proprietary data models, and analytical algorithms.
              </p>
            </div>

            <div>
              <h2 className="text-h3 font-heading font-semibold text-ink mb-3">
                5. Contact & Inquiries
              </h2>
              <p>
                Questions regarding these terms should be addressed to our legal department at {SITE.email}.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
