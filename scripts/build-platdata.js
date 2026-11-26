const fs = require('fs');

const raw = fs.readFileSync('handoff/design/PlatData.dc.html', 'utf-8');

const LINK_MAP = {
  'Home3.dc.html': '/',
  'MobHome.dc.html': '/',
  'PlatFeatures.dc.html': '/features',
  'PlatAsk.dc.html': '/ask-cerebro',
  'PlatData.dc.html': '/platform/data-integration',
  'PlatDashboards.dc.html': '/platform/dashboards',
  'PlatObjective.dc.html': '/platform/objective-reporting',
  'PlatReports.dc.html': '/platform/reports',
  'PlatIntegrations.dc.html': '/integrations',
  'SolAgencies.dc.html': '/solutions/agencies',
  'SolBrands.dc.html': '/solutions/brands',
  'IndBanking.dc.html': '/industries/banking-and-finance',
  'IndTelecom.dc.html': '/industries/telecom',
  'IndFMCG.dc.html': '/industries/fmcg',
  'IndEcommerce.dc.html': '/industries/ecommerce',
  'PgPricing.dc.html': '/pricing',
  'PgDemo.dc.html': '/demo',
  'PgThanks.dc.html': '/demo/thank-you',
  'PgContact.dc.html': '/contact',
  'PgAbout.dc.html': '/about',
  'PgSecurity.dc.html': '/security',
  'PgBlog.dc.html': '/blog',
  'PgArticle.dc.html': '/blog/blended-roas-vs-platform-roas',
  'PgArticle2.dc.html': '/blog/understanding-objective-based-ad-reporting',
  'PgDocs.dc.html': '/docs',
  'PgDocsChapter.dc.html': '/docs/getting-started',
  'PgFAQ.dc.html': '/faq',
  'PgCustomers.dc.html': '/customers',
  'PgCaseStudy.dc.html': '/customers',
  'PgPrivacy.dc.html': '/privacy-policy',
  'PgTerms.dc.html': '/terms-of-service',
  'PgDeletion.dc.html': '/data-deletion',
  'Pg404.dc.html': '/404'
};

const BLOB_MAP = {
  '/_blob/43283f03c4d43f04640c058460029561': '/brand/cerebro-mark.svg',
  '/_blob/10bbf4ea07e97759e5385e3dd93fcaf9': '/brand/cerebro-mark-white.svg',
  '/_blob/e07c3f2e1692e3cb785a530b2aec79eb': '/brand/cerebro-wordmark.svg',
  '/_blob/4f275988d8b1e428ba3604f86d88fba7': '/brand/cerebro-wordmark-white.svg'
};

// Extract between SiteHeader and SiteFooter
const startIdx = raw.indexOf('<dc-import name="SiteHeader"');
const afterHeader = raw.indexOf('>', startIdx) + 1;
const footerIdx = raw.indexOf('<dc-import name="SiteFooter"');
let body = raw.slice(afterHeader, footerIdx).trim();

// Replace links
for (const [k, v] of Object.entries(LINK_MAP)) {
  body = body.split(`href="${k}"`).join(`href="${v}"`);
  body = body.split(`href='${k}'`).join(`href="${v}"`);
}

// Replace blobs
for (const [k, v] of Object.entries(BLOB_MAP)) {
  body = body.split(k).join(v);
}

// Replace em dashes
body = body.replace(/—/g, '-');

const componentCode = `"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const HTML_CONTENT = ${JSON.stringify(body)};

export default function PlatDataV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("/") && !href.startsWith("//")) {
        e.preventDefault();
        router.push(href);
      }
    };

    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="font-sans text-[#2B3040] bg-white min-w-0 tabular-nums"
      dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
    />
  );
}
`;

fs.writeFileSync('components/platform/PlatDataV2.tsx', componentCode);
console.log('Successfully wrote PlatDataV2.tsx with exact HTML and client router delegation!');
