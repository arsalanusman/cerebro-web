const fs = require('fs');

const glob = [
  'app/ask-cerebro/page.tsx',
  'app/platform/dashboards/page.tsx',
  'app/platform/objective-reporting/page.tsx',
  'app/platform/reports/page.tsx',
  'app/features/page.tsx',
  'app/integrations/page.tsx',
  'app/solutions/agencies/page.tsx',
  'app/solutions/brands/page.tsx',
  'app/industries/banking-and-finance/page.tsx',
  'app/industries/telecom/page.tsx',
  'app/industries/fmcg/page.tsx',
  'app/industries/ecommerce/page.tsx',
  'app/demo/page.tsx',
  'app/demo/thank-you/page.tsx',
  'app/contact/page.tsx',
  'app/about/page.tsx',
  'app/security/page.tsx',
  'app/not-found.tsx',
  'app/blog/page.tsx',
  'app/docs/page.tsx',
  'app/faq/page.tsx',
  'app/privacy-policy/page.tsx',
  'app/terms-of-service/page.tsx',
  'app/data-deletion/page.tsx'
];

for (const f of glob) {
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf-8');
    if (c.includes('.tsx"') || c.includes(".tsx'")) {
      c = c.replace(/\.tsx(["'])/g, '$1');
      fs.writeFileSync(f, c);
      console.log('Fixed .tsx import in', f);
    }
  }
}
