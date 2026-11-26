import type { Metadata } from "next";
import { SITE } from "./site";

export interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const SUFFIX = ` | ${SITE.name}`;
  // Ensure title stays under 60 characters ending in " | Cerebro dNano"
  let fullTitle = title.includes(SITE.name) ? title : `${title}${SUFFIX}`;
  if (fullTitle.length > 60) {
    const maxPrefixLen = 60 - SUFFIX.length;
    fullTitle = `${title.slice(0, maxPrefixLen).trim()}${SUFFIX}`;
  }

  // Ensure description is under 155 characters
  const trimmedDescription =
    description.length > 155 ? `${description.slice(0, 152).trim()}...` : description;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE.url}${cleanPath === "/" ? "" : cleanPath}`;
  const defaultOgImage = `${SITE.url}/api/og?title=${encodeURIComponent(title)}`;
  const imageUrl = ogImage || defaultOgImage;

  const metadata: Metadata = {
    title: fullTitle,
    description: trimmedDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: trimmedDescription,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: trimmedDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };

  return metadata;
}
