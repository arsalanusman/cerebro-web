import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getMdxFiles } from "@/lib/mdx";
import { FileText, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Documentation and platform guides",
  description:
    "Technical documentation for connecting ad platforms, setting up schemas, and configuring automated reports in Cerebro.",
  path: "/docs",
});

export default function DocsIndexPage() {
  const docs = getMdxFiles("docs");
  const breadcrumbs = [{ label: "Docs", href: "/docs" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Docs", path: "/docs" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Resources · Documentation"
        title="Technical platform documentation."
        lead="Complete references for channel authorization, objective mapping, report widget customization, and Ask Cerebro queries."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="p-8 rounded-card border border-border bg-white hover:border-brand/40 hover:shadow-sm transition-all duration-150 flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-brand mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-h3-mobile lg:text-h3 font-heading font-semibold text-ink group-hover:text-brand transition-colors mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1.5 text-small font-semibold text-brand">
                  <span>View documentation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
