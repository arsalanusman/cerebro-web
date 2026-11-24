const fs = require('fs');
const path = require('path');
const { generateComponent } = require('./generate-all-pages');

const articles = [
  {
    dc: 'PgArticle.dc.html',
    type: 'PgArticle',
    compName: 'PgArticleV2',
    compPath: 'components/blog/PgArticleV2.tsx'
  },
  {
    dc: 'PgArticle2.dc.html',
    type: 'PgArticle2',
    compName: 'PgArticle2V2',
    compPath: 'components/blog/PgArticle2V2.tsx'
  },
  {
    dc: 'PgDocsChapter.dc.html',
    type: 'PgDocsChapter',
    compName: 'PgDocsChapterV2',
    compPath: 'components/docs/PgDocsChapterV2.tsx'
  }
];

for (const a of articles) {
  const dcPath = path.join('handoff/design', a.dc);
  if (!fs.existsSync(dcPath)) {
    console.warn(`File not found: ${dcPath}`);
    continue;
  }
  const raw = fs.readFileSync(dcPath, 'utf-8');
  fs.mkdirSync(path.dirname(a.compPath), { recursive: true });
  const compCode = generateComponent(a.compName, raw, a.type);
  fs.writeFileSync(a.compPath, compCode);
  console.log(`Generated: ${a.compName}`);
}

console.log('Articles and docs components generated!');
