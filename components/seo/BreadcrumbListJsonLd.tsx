import { SITE } from "@/lib/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function BreadcrumbListJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      ...items.map((item, index) => {
        const cleanPath = item.path.startsWith("/") ? item.path : `/${item.path}`;
        return {
          "@type": "ListItem",
          position: index + 2,
          name: item.name,
          item: `${SITE.url}${cleanPath}`,
        };
      }),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
