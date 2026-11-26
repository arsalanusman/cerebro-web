const fs = require('fs');
const path = require('path');

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

function cssToReact(css) {
  const rules = [];
  // match key: value handling quotes
  const parts = css.split(/;(?=(?:[^'"]*['"][^'"]*['"])*[^'"]*$)/);
  for (let rule of parts) {
    rule = rule.trim();
    if (!rule) continue;
    const colonIdx = rule.indexOf(':');
    if (colonIdx === -1) continue;
    let prop = rule.slice(0, colonIdx).trim();
    let val = rule.slice(colonIdx + 1).trim();
    
    // strip quotes if wrapped
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    
    // camelCase
    let camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    rules.push(`${camel}: ${JSON.stringify(val)}`);
  }
  return `{{ ${rules.join(', ')} }}`;
}

function convertHtmlToJsx(html) {
  let out = html;

  // Replace links
  for (const [k, v] of Object.entries(LINK_MAP)) {
    out = out.split(`href="${k}"`).join(`href="${v}"`);
    out = out.split(`href='${k}'`).join(`href="${v}"`);
  }

  // Replace blobs
  for (const [k, v] of Object.entries(BLOB_MAP)) {
    out = out.split(k).join(v);
  }

  // Replace em dashes with regular hyphens
  out = out.replace(/—/g, '-');

  // Replace class with className
  out = out.replace(/\sclass="([^"]*)"/g, ' className="$1"');

  // Replace inline styles
  out = out.replace(/\sstyle="([^"]*)"/g, (match, css) => {
    return ` style=${cssToReact(css)}`;
  });

  // SVG and HTML attributes mapping
  const attrMap = {
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'text-anchor': 'textAnchor',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'patternunits': 'patternUnits',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'fill-rule': 'fillRule',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'stddeviation': 'stdDeviation',
    'tabindex': 'tabIndex',
    'for=': 'htmlFor='
  };

  for (const [attr, jsxAttr] of Object.entries(attrMap)) {
    const reg = new RegExp(`\\s${attr}=`, 'gi');
    out = out.replace(reg, ` ${jsxAttr}=`);
  }

  // Self closing tags: img, input, path, circle, rect, line, polygon, feDropShadow, stop, br
  const voidTags = ['img', 'input', 'path', 'circle', 'rect', 'line', 'polygon', 'feDropShadow', 'stop', 'br'];
  for (const tag of voidTags) {
    const reg = new RegExp(`<(${tag}[^>]*?)(?<!/)>`, 'gi');
    out = out.replace(reg, '<$1 />');
  }

  return out;
}

module.exports = { convertHtmlToJsx, LINK_MAP, BLOB_MAP };
