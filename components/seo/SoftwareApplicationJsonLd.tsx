import { SITE } from "@/lib/site";

export function SoftwareApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    url: SITE.url,
    description:
      "Digital marketing data integration, analytics and reporting platform for Meta Ads, Google Ads and TikTok Ads.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
