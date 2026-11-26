const fs = require('fs');
const path = require('path');
const { generateComponent } = require('./generate-all-pages');

const PAGES = [
  // Platform
  {
    dc: 'PlatAsk.dc.html',
    type: 'PlatAsk',
    compName: 'PlatAskV2',
    compPath: 'components/platform/PlatAskV2.tsx',
    appPath: 'app/ask-cerebro/page.tsx',
    title: 'Ask Cerebro - Your AI analyst, answering from your data',
    desc: 'Plain questions. Answers with the numbers behind them.',
    route: '/ask-cerebro',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Ask Cerebro', path: '/ask-cerebro' }]
  },
  {
    dc: 'PlatDashboards.dc.html',
    type: 'PlatDashboards',
    compName: 'PlatDashboardsV2',
    compPath: 'components/platform/PlatDashboardsV2.tsx',
    appPath: 'app/platform/dashboards/page.tsx',
    title: 'Dashboards - Dashboards your team builds in clicks',
    desc: 'Widget-based, editable, and drillable to a single ad.',
    route: '/platform/dashboards',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Platform', path: '/features' }, { name: 'Dashboards', path: '/platform/dashboards' }]
  },
  {
    dc: 'PlatObjective.dc.html',
    type: 'PlatObjective',
    compName: 'PlatObjectiveV2',
    compPath: 'components/platform/PlatObjectiveV2.tsx',
    appPath: 'app/platform/objective-reporting/page.tsx',
    title: 'Objective engine - Judge every campaign by its own goal',
    desc: 'Cerebro groups campaigns into Awareness, Traffic, Leads and Sales, so averages stop misleading.',
    route: '/platform/objective-reporting',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Platform', path: '/features' }, { name: 'Objective engine', path: '/platform/objective-reporting' }]
  },
  {
    dc: 'PlatReports.dc.html',
    type: 'PlatReports',
    compName: 'PlatReportsV2',
    compPath: 'components/platform/PlatReportsV2.tsx',
    appPath: 'app/platform/reports/page.tsx',
    title: 'Reports - Reports that build and send themselves',
    desc: 'Build once, schedule as PDF, or sync to Google Sheets and Looker Studio.',
    route: '/platform/reports',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Platform', path: '/features' }, { name: 'Reports', path: '/platform/reports' }]
  },
  {
    dc: 'PlatFeatures.dc.html',
    type: 'PlatFeatures',
    compName: 'PlatFeaturesV2',
    compPath: 'components/platform/PlatFeaturesV2.tsx',
    appPath: 'app/features/page.tsx',
    title: 'All features - Everything Cerebro does, in one place',
    desc: 'From bringing data in to answering questions, with AI at every step.',
    route: '/features',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Platform', path: '/features' }, { name: 'All features', path: '/features' }]
  },
  {
    dc: 'PlatIntegrations.dc.html',
    type: 'PlatIntegrations',
    compName: 'PlatIntegrationsV2',
    compPath: 'components/platform/PlatIntegrationsV2.tsx',
    appPath: 'app/integrations/page.tsx',
    title: 'Integrations - Every marketing source, connected',
    desc: 'Native connectors, AI-built connectors, sheet upload and sales data.',
    route: '/integrations',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Platform', path: '/features' }, { name: 'Integrations', path: '/integrations' }]
  },

  // Solutions
  {
    dc: 'SolAgencies.dc.html',
    type: 'SolAgencies',
    compName: 'SolAgenciesV2',
    compPath: 'components/solutions/SolAgenciesV2.tsx',
    appPath: 'app/solutions/agencies/page.tsx',
    title: 'Cerebro for agencies - Every client, one workspace',
    desc: 'White-label reporting, client permissions, and instant answers across every account you manage.',
    route: '/solutions/agencies',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions/agencies' }, { name: 'Agencies', path: '/solutions/agencies' }]
  },
  {
    dc: 'SolBrands.dc.html',
    type: 'SolBrands',
    compName: 'SolBrandsV2',
    compPath: 'components/solutions/SolBrandsV2.tsx',
    appPath: 'app/solutions/brands/page.tsx',
    title: 'Cerebro for brands - One true view of paid media',
    desc: 'All your channels, sales data and creative results unified in one AI data engine.',
    route: '/solutions/brands',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions/brands' }, { name: 'Brands', path: '/solutions/brands' }]
  },

  // Industries
  {
    dc: 'IndBanking.dc.html',
    type: 'IndBanking',
    compName: 'IndBankingV2',
    compPath: 'components/industries/IndBankingV2.tsx',
    appPath: 'app/industries/banking-and-finance/page.tsx',
    title: 'Cerebro for banking and finance - Paid media reporting with access you control',
    desc: 'Role-based permissions, encrypted data transit, and audit trails for financial institutions.',
    route: '/industries/banking-and-finance',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries/banking-and-finance' }, { name: 'Banking & Finance', path: '/industries/banking-and-finance' }]
  },
  {
    dc: 'IndTelecom.dc.html',
    type: 'IndTelecom',
    compName: 'IndTelecomV2',
    compPath: 'components/industries/IndTelecomV2.tsx',
    appPath: 'app/industries/telecom/page.tsx',
    title: 'Cerebro for telecom - Always-on campaigns, always in view',
    desc: 'High-volume paid media reporting across prepaid, postpaid, and enterprise services.',
    route: '/industries/telecom',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries/telecom' }, { name: 'Telecom', path: '/industries/telecom' }]
  },
  {
    dc: 'IndFMCG.dc.html',
    type: 'IndFMCG',
    compName: 'IndFMCGV2',
    compPath: 'components/industries/IndFMCGV2.tsx',
    appPath: 'app/industries/fmcg/page.tsx',
    title: 'Cerebro for FMCG - Every brand judged by the right goal',
    desc: 'Multi-brand portfolio reporting with awareness and sales metrics clearly separated.',
    route: '/industries/fmcg',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries/fmcg' }, { name: 'FMCG', path: '/industries/fmcg' }]
  },
  {
    dc: 'IndEcommerce.dc.html',
    type: 'IndEcommerce',
    compName: 'IndEcommerceV2',
    compPath: 'components/industries/IndEcommerceV2.tsx',
    appPath: 'app/industries/ecommerce/page.tsx',
    title: 'Cerebro for e-commerce - Know what your ads really earn',
    desc: 'Blended ROAS, platform ROAS, revenue matching, and customer acquisition cost in one place.',
    route: '/industries/ecommerce',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries/ecommerce' }, { name: 'E-commerce', path: '/industries/ecommerce' }]
  },

  // Company & Trust
  {
    dc: 'PgDemo.dc.html',
    type: 'PgDemo',
    compName: 'PgDemoV2',
    compPath: 'components/demo/PgDemoV2.tsx',
    appPath: 'app/demo/page.tsx',
    title: 'Book a demo - See Cerebro on your own campaigns',
    desc: 'A personal walkthrough with your platforms, your data, and your questions.',
    route: '/demo',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Book a demo', path: '/demo' }]
  },
  {
    dc: 'PgThanks.dc.html',
    type: 'PgThanks',
    compName: 'PgThanksV2',
    compPath: 'components/demo/PgThanksV2.tsx',
    appPath: 'app/demo/thank-you/page.tsx',
    title: 'Demo booked - You’re booked in',
    desc: 'We received your details and will be in touch shortly to confirm your walkthrough.',
    route: '/demo/thank-you',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Demo booked', path: '/demo/thank-you' }]
  },
  {
    dc: 'PgContact.dc.html',
    type: 'PgContact',
    compName: 'PgContactV2',
    compPath: 'components/contact/PgContactV2.tsx',
    appPath: 'app/contact/page.tsx',
    title: 'Contact - Talk to the team in Karachi',
    desc: 'Questions about Cerebro, pricing or a partnership. We reply within one business day.',
    route: '/contact',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]
  },
  {
    dc: 'PgAbout.dc.html',
    type: 'PgAbout',
    compName: 'PgAboutV2',
    compPath: 'components/about/PgAboutV2.tsx',
    appPath: 'app/about/page.tsx',
    title: 'About - We build the AI data engine for paid media',
    desc: 'Built by engineers and paid media practitioners in Karachi, Pakistan.',
    route: '/about',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]
  },
  {
    dc: 'PgSecurity.dc.html',
    type: 'PgSecurity',
    compName: 'PgSecurityV2',
    compPath: 'components/security/PgSecurityV2.tsx',
    appPath: 'app/security/page.tsx',
    title: 'Security - Your clients’ data, protected',
    desc: 'Access control, workspace isolation, activity logging, and encrypted transit.',
    route: '/security',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Security', path: '/security' }]
  },
  {
    dc: 'Pg404.dc.html',
    type: 'Pg404',
    compName: 'Pg404V2',
    compPath: 'components/system/Pg404V2.tsx',
    appPath: 'app/not-found.tsx',
    title: 'Page not found - Cerebro',
    desc: 'This page doesn’t exist or has moved.',
    route: '/404',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Page not found', path: '/404' }]
  },

  // Resources & Legal
  {
    dc: 'PgBlog.dc.html',
    type: 'PgBlog',
    compName: 'PgBlogV2',
    compPath: 'components/blog/PgBlogV2.tsx',
    appPath: 'app/blog/page.tsx',
    title: 'Blog - Guides on paid media reporting',
    desc: 'Perspectives on cross-channel reporting, data integration, and objective-based marketing.',
    route: '/blog',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]
  },
  {
    dc: 'PgDocs.dc.html',
    type: 'PgDocs',
    compName: 'PgDocsV2',
    compPath: 'components/docs/PgDocsV2.tsx',
    appPath: 'app/docs/page.tsx',
    title: 'Docs - Set up and use Cerebro',
    desc: 'Documentation for workspace setup, native connectors, sheets, dashboards and reports.',
    route: '/docs',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Docs', path: '/docs' }]
  },
  {
    dc: 'PgFAQ.dc.html',
    type: 'PgFAQ',
    compName: 'PgFAQV2',
    compPath: 'components/faq/PgFAQV2.tsx',
    appPath: 'app/faq/page.tsx',
    title: 'FAQ - Questions, answered',
    desc: 'Frequently asked questions about connectors, data privacy, pricing, and AI answers.',
    route: '/faq',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]
  },
  {
    dc: 'PgPrivacy.dc.html',
    type: 'PgPrivacy',
    compName: 'PgPrivacyV2',
    compPath: 'components/legal/PgPrivacyV2.tsx',
    appPath: 'app/privacy-policy/page.tsx',
    title: 'Privacy Policy - Cerebro DNano',
    desc: 'How we collect, store, and protect your data.',
    route: '/privacy-policy',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]
  },
  {
    dc: 'PgTerms.dc.html',
    type: 'PgTerms',
    compName: 'PgTermsV2',
    compPath: 'components/legal/PgTermsV2.tsx',
    appPath: 'app/terms-of-service/page.tsx',
    title: 'Terms of Service - Cerebro DNano',
    desc: 'Terms and conditions for using the Cerebro platform.',
    route: '/terms-of-service',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms-of-service' }]
  },
  {
    dc: 'PgDeletion.dc.html',
    type: 'PgDeletion',
    compName: 'PgDeletionV2',
    compPath: 'components/legal/PgDeletionV2.tsx',
    appPath: 'app/data-deletion/page.tsx',
    title: 'Data Deletion - Cerebro DNano',
    desc: 'Instructions on requesting data deletion and removing platform access.',
    route: '/data-deletion',
    breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Data Deletion', path: '/data-deletion' }]
  }
];

for (const p of PAGES) {
  const dcPath = path.join('handoff/design', p.dc);
  if (!fs.existsSync(dcPath)) {
    console.warn(`File not found: ${dcPath}`);
    continue;
  }
  const raw = fs.readFileSync(dcPath, 'utf-8');
  
  // Ensure target directories exist
  fs.mkdirSync(path.dirname(p.compPath), { recursive: true });
  fs.mkdirSync(path.dirname(p.appPath), { recursive: true });

  // Generate component code
  const compCode = generateComponent(p.compName, raw, p.type);
  fs.writeFileSync(p.compPath, compCode);

  // Generate route page code
  const pageCode = `import React from "react";
import ${p.compName} from "@/${p.compPath.replace(/\\.[^/.]+$/, "")}";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ${JSON.stringify(p.title)},
  description: ${JSON.stringify(p.desc)},
  path: ${JSON.stringify(p.route)},
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={${JSON.stringify(p.breadcrumb)}}
      />
      <${p.compName} />
    </>
  );
}
`;
  fs.writeFileSync(p.appPath, pageCode);
  console.log(`Generated: ${p.compName} -> ${p.appPath}`);
}

console.log('Batch generation completed successfully!');
