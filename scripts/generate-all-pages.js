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

function cleanHtml(rawHtml, pageName) {
  // Extract body between SiteHeader and SiteFooter
  const startIdx = rawHtml.indexOf('<dc-import name="SiteHeader"');
  const afterHeader = rawHtml.indexOf('>', startIdx) + 1;
  const footerIdx = rawHtml.indexOf('<dc-import name="SiteFooter"');
  let body = rawHtml.slice(afterHeader, footerIdx).trim();

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

  // Page-specific interactive state replacements
  if (pageName === 'PlatAsk' || pageName === 'PlatDashboards') {
    // Tab panes
    body = body.replace(/<sc-if value="{{tab\.t0}}"[^>]*>/g, '<div data-tab-pane="0">');
    body = body.replace(/<sc-if value="{{tab\.t1}}"[^>]*>/g, '<div data-tab-pane="1" style="display: none">');
    body = body.replace(/<sc-if value="{{tab\.t2}}"[^>]*>/g, '<div data-tab-pane="2" style="display: none">');
    body = body.replace(/<sc-if value="{{tab\.t3}}"[^>]*>/g, '<div data-tab-pane="3" style="display: none">');
    body = body.replace(/<\/sc-if>/g, '</div>');

    // Tab buttons
    body = body.replace(/aria-selected="{{tab\.s0}}"\s+onClick="{{tab\.p0}}"/g, 'data-tab-btn="0" aria-selected="true"');
    body = body.replace(/aria-selected="{{tab\.s1}}"\s+onClick="{{tab\.p1}}"/g, 'data-tab-btn="1" aria-selected="false"');
    body = body.replace(/aria-selected="{{tab\.s2}}"\s+onClick="{{tab\.p2}}"/g, 'data-tab-btn="2" aria-selected="false"');
    body = body.replace(/aria-selected="{{tab\.s3}}"\s+onClick="{{tab\.p3}}"/g, 'data-tab-btn="3" aria-selected="false"');

    // Tab styles
    body = body.replace(/\{\{tab\.l0\}\}/g, '#FFFFFF');
    body = body.replace(/\{\{tab\.f0\}\}/g, '#FFFFFF');
    body = body.replace(/\{\{tab\.b0\}\}/g, '#CDD0F3');

    body = body.replace(/\{\{tab\.l[123]\}\}/g, 'rgba(255,255,255,0.16)');
    body = body.replace(/\{\{tab\.f[123]\}\}/g, '#A5B4FC');
    body = body.replace(/\{\{tab\.b[123]\}\}/g, 'rgba(205,208,243,0.6)');
  } else if (pageName === 'PlatIntegrations') {
    // Filters and directory
    const filterDefs = [
      { key: 'all', label: 'All' },
      { key: 'ads', label: 'Ad platforms' },
      { key: 'files', label: 'Files' },
      { key: 'custom', label: 'Custom' },
      { key: 'sales', label: 'Sales data' },
      { key: 'out', label: 'Destinations' },
      { key: 'soon', label: 'Coming soon' }
    ];

    const filterBtnsHtml = filterDefs.map((f, i) => {
      const on = i === 0;
      const bg = on ? '#101426' : '#FFFFFF';
      const fg = on ? '#FFFFFF' : '#2B3040';
      const bd = on ? '#101426' : '#DDE0E7';
      return `<button type="button" data-filter="${f.key}" aria-pressed="${on}" style="height: 40px; padding: 0 16px; border-radius: 20px; border: 1px solid ${bd}; background: ${bg}; color: ${fg}; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer">${f.label}</button>`;
    }).join('');

    body = body.replace(/<sc-for list="{{dir\.filters}}"[^>]*>[\s\S]*?<\/sc-for>/, filterBtnsHtml);

    // Connector cards
    const items = [
      {"name": "Meta Ads", "mark": "M", "color": "#1877F2", "group": "ads", "status": "Live", "pbg": "#DCFCE7", "pfg": "#166534", "line": "Ad accounts in Meta Business", "op": 1},
      {"name": "Google Ads", "mark": "G", "color": "#15803D", "group": "ads", "status": "Live", "pbg": "#DCFCE7", "pfg": "#166534", "line": "Accounts and manager accounts", "op": 1},
      {"name": "TikTok Ads", "mark": "T", "color": "#111827", "group": "ads", "status": "Live", "pbg": "#DCFCE7", "pfg": "#166534", "line": "Ad accounts in TikTok Business Center", "op": 1},
      {"name": "LinkedIn Ads", "mark": "in", "color": "#7A8296", "group": "soon", "status": "Coming soon", "pbg": "#F1F2F5", "pfg": "#4B5160", "line": "Upload exports as sheets for now", "op": 0.6},
      {"name": "DV360", "mark": "DV", "color": "#7A8296", "group": "soon", "status": "Coming soon", "pbg": "#F1F2F5", "pfg": "#4B5160", "line": "Upload exports as sheets for now", "op": 0.6},
      {"name": "Custom connector", "mark": "+", "color": "#4F46E5", "group": "custom", "status": "AI-built", "pbg": "#EEF0FF", "pfg": "#3730A3", "line": "Any platform, drafted by Cerebro AI", "op": 1},
      {"name": "CSV", "mark": "CSV", "color": "#0F766E", "group": "files", "status": "Mapped by AI", "pbg": "#EEF0FF", "pfg": "#3730A3", "line": "Exports from any platform", "op": 1},
      {"name": "Excel", "mark": "XLS", "color": "#166534", "group": "files", "status": "Mapped by AI", "pbg": "#EEF0FF", "pfg": "#3730A3", "line": "Exports from any platform", "op": 1},
      {"name": "Google Sheets", "mark": "S", "color": "#0F9D58", "group": "files", "status": "Mapped by AI", "pbg": "#EEF0FF", "pfg": "#3730A3", "line": "Linked or uploaded sheets", "op": 1},
      {"name": "Sales data", "mark": "Rs", "color": "#15803D", "group": "sales", "status": "Live", "pbg": "#DCFCE7", "pfg": "#166534", "line": "Revenue next to ad spend [CONFIRM: sources]", "op": 1},
      {"name": "Looker Studio", "mark": "LS", "color": "#4285F4", "group": "out", "status": "Destination", "pbg": "#EEF0FF", "pfg": "#3730A3", "line": "Reports synced to Looker Studio", "op": 1},
      {"name": "REST webhooks", "mark": "{}", "color": "#7A8296", "group": "custom", "status": "To confirm", "pbg": "#FFF7ED", "pfg": "#9A3412", "line": "[CONFIRM: available today?]", "op": 0.6}
    ];

    const cardsHtml = items.map(it => {
      return `<div data-connector-card data-group="${it.group}" data-name="${it.name.toLowerCase()}" style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px; opacity: ${it.op}"><div style="display: flex; justify-content: space-between; align-items: center"><span style="width: 44px; height: 44px; border-radius: 12px; background: ${it.color}; color: #FFFFFF; font-size: 14px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center">${it.mark}</span><span style="font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 10px; background: ${it.pbg}; color: ${it.pfg}">${it.status}</span></div><div><div style="font-size: 17px; font-weight: 600; color: #101426">${it.name}</div><div style="margin-top: 4px; font-size: 14px; line-height: 1.45; color: #5B6170">${it.line}</div></div></div>`;
    }).join('');

    body = body.replace(/<sc-for list="{{dir\.items}}"[^>]*>[\s\S]*?<\/sc-for>/, cardsHtml);
  } else if (pageName === 'PgContact') {
    // Map toggle
    body = body.replace(/<sc-if value="{{mapv\.hide}}"[^>]*>([\s\S]*?)<\/sc-if>/, '<div data-map-closed>$1</div>');
    body = body.replace(/<sc-if value="{{mapv\.show}}"[^>]*>([\s\S]*?)<\/sc-if>/, '<div data-map-open style="display: none">$1</div>');
    body = body.replace(/onClick="{{mapv\.open}}"/g, 'data-action="show-map"');
  } else if (pageName === 'PgDemo') {
    // Demo steps
    const stepsHtml = `
      <li data-step-indicator="0" aria-current="step" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #101426"><span style="width: 26px; height: 26px; border-radius: 13px; background: #4F46E5; color: #FFFFFF; font-size: 12.5px; display: inline-flex; align-items: center; justify-content: center">1</span>About you</li>
      <li data-step-indicator="1" aria-current="false" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #6B7180"><span style="width: 26px; height: 26px; border-radius: 13px; background: #ECEEF3; color: #5B6170; font-size: 12.5px; display: inline-flex; align-items: center; justify-content: center">2</span>Your setup</li>
      <li data-step-indicator="2" aria-current="false" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #6B7180"><span style="width: 26px; height: 26px; border-radius: 13px; background: #ECEEF3; color: #5B6170; font-size: 12.5px; display: inline-flex; align-items: center; justify-content: center">3</span>Your questions</li>
    `;
    body = body.replace(/<sc-for list="{{demo\.steps}}"[^>]*>[\s\S]*?<\/sc-for>/, stepsHtml);

    body = body.replace(/<sc-if value="{{demo\.s0}}"[^>]*>/g, '<div data-demo-step="0">');
    body = body.replace(/<sc-if value="{{demo\.s1}}"[^>]*>/g, '<div data-demo-step="1" style="display: none">');
    body = body.replace(/<sc-if value="{{demo\.s2}}"[^>]*>/g, '<div data-demo-step="2" style="display: none">');
    body = body.replace(/<\/sc-if>/g, '</div>');

    body = body.replace(/\{\{demo\.count\}\}/g, '<span data-demo-count>Step 1 of 3</span>');
    body = body.replace(/<sc-if value="{{demo\.notFirst}}"[^>]*>([\s\S]*?)<\/sc-if>/, '<div data-demo-back-wrapper style="display: none"><button type="button" data-demo-back style="display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 23px; background: #FFFFFF; color: #101426; border: 1px solid #D5D8E0; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none">Back</button></div>');
    body = body.replace(/<sc-if value="{{demo\.notLast}}"[^>]*>([\s\S]*?)<\/sc-if>/, '<div data-demo-next-wrapper><button type="button" data-demo-next style="display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 23px; background: #4F46E5; color: #FFFFFF; border: 0; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none">Continue</button></div>');
    body = body.replace(/<sc-if value="{{demo\.last}}"[^>]*>([\s\S]*?)<\/sc-if>/, '<div data-demo-submit-wrapper style="display: none"><a href="/demo/thank-you" style="display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 23px; background: #4F46E5; color: #FFFFFF; border: 0; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none">Book my demo</a></div>');
  } else if (pageName === 'PgFAQ') {
    // Strip sc-for and sc-if in FAQ
    body = body.replace(/<sc-for[^>]*>/g, '').replace(/<\/sc-for>/g, '');
    body = body.replace(/<sc-if[^>]*>/g, '').replace(/<\/sc-if>/g, '');
    body = body.replace(/\{\{[^}]*\}\}/g, '');
  } else if (pageName === 'PgBlog' || pageName === 'PgDocsChapter') {
    body = body.replace(/<sc-for[^>]*>/g, '').replace(/<\/sc-for>/g, '');
    body = body.replace(/<sc-if[^>]*>/g, '').replace(/<\/sc-if>/g, '');
    body = body.replace(/\{\{[^}]*\}\}/g, '');
  }

  return body;
}

function generateComponent(componentName, rawHtml, pageType) {
  const body = cleanHtml(rawHtml, pageType);

  let clientScript = `
    // Smooth client router navigation on internal links
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
  `;

  if (pageType === 'PlatAsk' || pageType === 'PlatDashboards') {
    clientScript += `
    // Interactive Tab Switching
    const tabBtns = el.querySelectorAll<HTMLButtonElement>('[data-tab-btn]');
    const tabPanes = el.querySelectorAll<HTMLElement>('[data-tab-pane]');
    
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-tab-btn');
        tabPanes.forEach((pane) => {
          if (pane.getAttribute('data-tab-pane') === idx) {
            pane.style.display = 'block';
          } else {
            pane.style.display = 'none';
          }
        });

        tabBtns.forEach((b) => {
          const isCurrent = b.getAttribute('data-tab-btn') === idx;
          b.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
          b.style.borderTopColor = isCurrent ? '#FFFFFF' : 'rgba(255,255,255,0.16)';
          const span1 = b.children[0] as HTMLElement | undefined;
          const span2 = b.children[1] as HTMLElement | undefined;
          if (span1) span1.style.color = isCurrent ? '#FFFFFF' : '#A5B4FC';
          if (span2) span2.style.color = isCurrent ? '#CDD0F3' : 'rgba(205,208,243,0.6)';
        });
      });
    });
    `;
  } else if (pageType === 'PlatIntegrations') {
    clientScript += `
    // Filter buttons & search for integrations
    const filterBtns = el.querySelectorAll<HTMLButtonElement>('[data-filter]');
    const cards = el.querySelectorAll<HTMLElement>('[data-connector-card]');
    const searchInput = el.querySelector<HTMLInputElement>('#dir-search');

    let currentFilter = 'all';
    let currentQuery = '';

    const updateVisibility = () => {
      cards.forEach((card) => {
        const group = card.getAttribute('data-group');
        const name = card.getAttribute('data-name') || '';
        const matchesGroup = currentFilter === 'all' || group === currentFilter;
        const matchesQuery = !currentQuery || name.includes(currentQuery);
        card.style.display = (matchesGroup && matchesQuery) ? 'flex' : 'none';
      });
    };

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-filter') || 'all';
        filterBtns.forEach((b) => {
          const isOn = b === btn;
          b.setAttribute('aria-pressed', isOn ? 'true' : 'false');
          b.style.background = isOn ? '#101426' : '#FFFFFF';
          b.style.color = isOn ? '#FFFFFF' : '#2B3040';
          b.style.borderColor = isOn ? '#101426' : '#DDE0E7';
        });
        updateVisibility();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
        updateVisibility();
      });
    }
    `;
  } else if (pageType === 'PgContact') {
    clientScript += `
    // Map toggle
    const mapClosed = el.querySelector<HTMLElement>('[data-map-closed]');
    const mapOpen = el.querySelector<HTMLElement>('[data-map-open]');
    const showMapBtn = el.querySelector<HTMLButtonElement>('[data-action="show-map"]');

    if (showMapBtn && mapClosed && mapOpen) {
      showMapBtn.addEventListener('click', () => {
        mapClosed.style.display = 'none';
        mapOpen.style.display = 'flex';
      });
    }
    `;
  } else if (pageType === 'PgDemo') {
    clientScript += `
    // Multi-step demo booking
    let currentStep = 0;
    const stepEls = el.querySelectorAll<HTMLElement>('[data-demo-step]');
    const indicators = el.querySelectorAll<HTMLElement>('[data-step-indicator]');
    const countEl = el.querySelector<HTMLElement>('[data-demo-count]');
    const backWrapper = el.querySelector<HTMLElement>('[data-demo-back-wrapper]');
    const nextWrapper = el.querySelector<HTMLElement>('[data-demo-next-wrapper]');
    const submitWrapper = el.querySelector<HTMLElement>('[data-demo-submit-wrapper]');
    const nextBtn = el.querySelector<HTMLButtonElement>('[data-demo-next]');
    const backBtn = el.querySelector<HTMLButtonElement>('[data-demo-back]');

    const updateStep = (newStep: number) => {
      currentStep = newStep;
      stepEls.forEach((s) => {
        s.style.display = s.getAttribute('data-demo-step') === String(currentStep) ? 'flex' : 'none';
      });
      indicators.forEach((ind, i) => {
        const numSpan = ind.querySelector('span');
        if (i <= currentStep) {
          ind.style.color = i === currentStep ? '#101426' : '#6B7180';
          if (numSpan) {
            numSpan.style.background = '#4F46E5';
            numSpan.style.color = '#FFFFFF';
          }
        } else {
          ind.style.color = '#6B7180';
          if (numSpan) {
            numSpan.style.background = '#ECEEF3';
            numSpan.style.color = '#5B6170';
          }
        }
      });
      if (countEl) countEl.textContent = 'Step ' + (currentStep + 1) + ' of 3';
      if (backWrapper) backWrapper.style.display = currentStep > 0 ? 'block' : 'none';
      if (nextWrapper) nextWrapper.style.display = currentStep < 2 ? 'block' : 'none';
      if (submitWrapper) submitWrapper.style.display = currentStep === 2 ? 'block' : 'none';
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < 2) updateStep(currentStep + 1);
      });
    }
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (currentStep > 0) updateStep(currentStep - 1);
      });
    }
    `;
  }

  return `"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const HTML_CONTENT = ${JSON.stringify(body)};

export default function ${componentName}() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    ${clientScript}

    return () => {
      el.removeEventListener("click", handleClick);
    };
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
}

module.exports = { cleanHtml, generateComponent };
