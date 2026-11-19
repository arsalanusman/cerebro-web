import { notFound } from "next/navigation";
import { proof } from "@/content/proof";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const approved = proof.caseStudies.filter((c) => c.approved);
  return approved.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = proof.caseStudies.find((c) => c.slug === params.slug && c.approved);
  if (!study) {
    return buildMetadata({
      title: "Case Study Not Found",
      description: "Case study not found.",
      path: `/customers/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${study.company} Case Study`,
    description: study.summary,
    path: `/customers/${params.slug}`,
  });
}

export default function CustomerSlugPage({ params }: { params: { slug: string } }) {
  const study = proof.caseStudies.find((c) => c.slug === params.slug && c.approved);

  // Per docs/site-rules.md: Returns 404 until approved case study exists
  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Customers", href: "/customers" },
          { label: study.company, href: `/customers/${study.slug}` },
        ]}
        eyebrow={study.industry}
        title={study.company}
        lead={study.summary}
      />
      <div className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl text-left space-y-6">
            <h2 className="text-h3 font-heading font-semibold text-ink">Key Results</h2>
            <ul className="space-y-3">
              {study.results.map((r, i) => (
                <li key={i} className="text-body text-text font-medium">
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
