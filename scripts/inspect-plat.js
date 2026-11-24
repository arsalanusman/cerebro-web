const fs = require('fs');
const path = require('path');

const files = [
  'SolAgencies.dc.html',
  'SolBrands.dc.html',
  'IndBanking.dc.html',
  'IndTelecom.dc.html',
  'IndFMCG.dc.html',
  'IndEcommerce.dc.html',
  'PgDemo.dc.html',
  'PgThanks.dc.html',
  'PgContact.dc.html',
  'PgAbout.dc.html',
  'PgSecurity.dc.html',
  'PgBlog.dc.html',
  'PgArticle.dc.html',
  'PgArticle2.dc.html',
  'PgDocs.dc.html',
  'PgDocsChapter.dc.html',
  'PgFAQ.dc.html',
  'PgPrivacy.dc.html',
  'PgTerms.dc.html',
  'PgDeletion.dc.html',
  'Pg404.dc.html'
];

const dir = 'C:/Users/imran.samoon/Documents/GitHub/cerebro-web/handoff/design';
for (const f of files) {
  const p = path.join(dir, f);
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf-8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const hasScript = content.includes('text/x-dc');
  console.log(`${f.padEnd(20)} | Title: ${(titleMatch ? titleMatch[1] : 'N/A').padEnd(25)} | H1: ${(h1Match ? h1Match[1] : 'N/A').padEnd(45)} | State: ${hasScript}`);
}
