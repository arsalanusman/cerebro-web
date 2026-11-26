import { notFound } from "next/navigation";
import { proof } from "@/content/proof";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CaseStudyCard } from "@/components/proof";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer stories and case studies",
  description:
    "See how agencies and marketing brands use Cerebro dNano to unify cross-channel reporting.",
  path: "/customers",
});

export default function CustomersPage() {
  const approvedStudies = proof.caseStudies.filter((c) => c.approved);

  // Per docs/site-rules.md: Returns 404 until approved case studies exist
  if (approvedStudies.length === 0) {
    notFound();
  }

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Customers", href: "/customers" }]}
        eyebrow="Case Studies"
        title="Verified customer results."
        lead="Discover how marketing teams achieve clarity with Cerebro dNano."
      />
      <div className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approvedStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
