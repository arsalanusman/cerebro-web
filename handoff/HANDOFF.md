# Cerebro DNano website: design handoff (new design only)

Website: https://cerebro.media
Design canvas: https://claude.ai/artifact/Q3Bc2kdKq6Mw4Ahx5gHePY
Version: November 2026. Only the final new design: every route designed, plus mobile layouts. No old options or replaced pages are included.

This package is the single source of truth. The design files are the spec. Build them exactly. Do not redesign, simplify, add sections, change copy or "improve" anything. If something is unclear, ask the designer; do not guess.

---

## 1. What is in this package

| Path | What it is | Build it? |
| --- | --- | --- |
| `HANDOFF.md` | This guide | Read first |
| `design/*.dc.html` | 32 pages plus the shared header and footer, one file per route | Yes, exactly |
| `design/_mobile/` | 7 mobile designs at 390px, one per template | Yes: the layout below 768px |
| `design/_reference/` | Style library (3 sheets) and the components and states sheet | No pages to build. Reference for every decision |
| `brand/` | Logo mark and wordmark as SVG, dark and white, plus originals | Use these only |
| `tokens/` | Colors, fonts, radius, shadows, focus rings, layout, motion (CSS and JSON) | Only source of style values |
| `reference/page-builder/` | Source that generated every page; each function is one component | Component inventory |
| `reference/site-hierarchy.md` | Every route and its design file | Read |

---

## 2. Route map

| Route | Design file | Notes |
| --- | --- | --- |
| `/` | `Home3.dc.html` | Tabs band interactive |
| `/features` | `PlatFeatures.dc.html` | |
| `/ask-cerebro` | `PlatAsk.dc.html` | Tabs band interactive |
| `/platform/data-integration` | `PlatData.dc.html` | |
| `/platform/dashboards` | `PlatDashboards.dc.html` | Tabs band interactive |
| `/platform/objective-reporting` | `PlatObjective.dc.html` | |
| `/platform/reports` | `PlatReports.dc.html` | |
| `/integrations` | `PlatIntegrations.dc.html` | Filters interactive |
| `/solutions/agencies` | `SolAgencies.dc.html` | |
| `/solutions/brands` | `SolBrands.dc.html` | |
| `/industries/banking-and-finance` | `IndBanking.dc.html` | |
| `/industries/telecom` | `IndTelecom.dc.html` | |
| `/industries/fmcg` | `IndFMCG.dc.html` | |
| `/industries/ecommerce` | `IndEcommerce.dc.html` | |
| `/pricing` | `PgPricing.dc.html` | Plan finder interactive |
| `/demo` | `PgDemo.dc.html` | Three-step form |
| `/demo/thank-you` | `PgThanks.dc.html` | |
| `/contact` | `PgContact.dc.html` | Map loads on click |
| `/about` | `PgAbout.dc.html` | |
| `/security` | `PgSecurity.dc.html` | "To confirm" section hidden in production |
| `/blog` | `PgBlog.dc.html` | Category filters interactive; planned slots hidden until published |
| `/blog/blended-roas-vs-platform-roas` | `PgArticle.dc.html` | Article template |
| `/blog/understanding-objective-based-ad-reporting` | `PgArticle2.dc.html` | Same template |
| `/docs` | `PgDocs.dc.html` | Draft chapters hidden in production |
| `/docs/[slug]` | `PgDocsChapter.dc.html` | Chapter template, shown with Getting started |
| `/faq` | `PgFAQ.dc.html` | Category filters interactive |
| `/customers` | `PgCustomers.dc.html` | Returns 404 until approved proof exists |
| `/customers/[slug]` | `PgCaseStudy.dc.html` | Template, 404 until approved |
| `/privacy-policy` | `PgPrivacy.dc.html` | Draft banner and noindex until a lawyer approves |
| `/terms-of-service` | `PgTerms.dc.html` | Same |
| `/data-deletion` | `PgDeletion.dc.html` | Same |
| 404 | `Pg404.dc.html` | |
| Shared header | `SiteHeader.dc.html` | Logo links to `/` |
| Shared footer | `SiteFooter.dc.html` | Prop `cta` shows or hides the navy Book a demo band |

Do not build `/option-1`, `/option-2` or `/present`. `/styleguide` is development only (noindex, not in production).

Redirects (301): `/privacy` to `/privacy-policy`, `/terms` to `/terms-of-service`, `/help` to `/faq`.

**Links inside the designs.** Every `href="X.dc.html"` maps to the route in the table above (for example `PgDemo.dc.html` is `/demo`). Mobile files link with `Mob*.dc.html` names; map `MobHome.dc.html` to `/` and the rest to their desktop routes.

---

## 3. How to read a .dc.html design file

- Everything between `<x-dc>` and `</x-dc>` is the page markup. **Inline `style` values are the exact values to reproduce.**
- `<helmet>` holds the Google Fonts link (Geist, Geist Mono, Inter). Load these with `next/font` instead.
- The `<script type="text/x-dc">` block holds `class Component`: `this.state` becomes `useState`; `renderVals()` returns the data and handlers the markup uses. Data goes into `content/*.ts`.
- `{{name}}` is a value from `renderVals()`; `{{a.b}}` a property of it.
- `<sc-for list="{{items}}" as="item">` is `items.map(item => ...)`. `<sc-if value="{{cond}}">` is `{cond && ...}`.
- `<dc-import name="SiteHeader">` is the shared component; attributes are props (`cta="{{false}}"` is `cta={false}`).
- `onClick`, `onMouseEnter`, `onMouseLeave` with `{{fn}}` are event handlers. Hover drawn with mouse handlers is built with CSS `:hover`, `:focus-visible`, `:active` using `_reference/UIStates.dc.html`.
- `hint-*`, `data-props`, `$preview` and `support.js` are design-tool details. Ignore them.
- `zoom` on art in the mobile files means "scale this art to the phone width". Rebuild the art responsively; do not ship CSS zoom.

**Logo references:**

| In the design | Use |
| --- | --- |
| `/_blob/43283f03c4d43f04640c058460029561` | `brand/cerebro-mark.svg` |
| `/_blob/10bbf4ea07e97759e5385e3dd93fcaf9` | `brand/cerebro-mark-white.svg` |
| `/_blob/e07c3f2e1692e3cb785a530b2aec79eb` | `brand/cerebro-wordmark.svg` |
| `/_blob/562cc305014b9b81e136709c81004a68` | `brand/cerebro-wordmark-white.svg` |

All art (hero illustrations, UI moments, brand objects) is inline SVG and HTML in the files. Rebuild it as components; never screenshot it.

### Platform logos: use the official logos in the Antigravity project

The designs show platforms as colored letter marks (for example a blue "M" circle for Meta). These are placeholders. Replace every one with the official logo already in the Antigravity project's asset library. Never draw, trace or recolor a logo.

| Mark in the designs | Replace with |
| --- | --- |
| `M` on blue `#1877F2` | Meta (Meta Ads) logo |
| `G` on green `#15803D` | Google Ads logo |
| `T` on black `#111827` | TikTok (TikTok Ads) logo |
| `in` on grey, faded | LinkedIn logo (coming soon) |
| `DV` on grey, faded | Display & Video 360 logo (coming soon) |
| `S` on green `#0F9D58` | Google Sheets logo |
| `LS` on blue `#4285F4` | Looker Studio logo |
| `XLS` on green `#166534` | Microsoft Excel logo |
| `CSV`, `PDF` | Generic file icons (no brand logo) |
| `+`, `✦`, `↑`, `Rs`, `{}` | Keep as icons: custom connector, AI, upload, sales data, webhooks. Not logos |

Rules:
- Same size and position as the mark it replaces: the logo sits centered inside the white tile, circle or pill, at the mark's size (for example 30px inside a 58px tile, 22 to 24px inside a pill).
- Official colors and proportions only; follow each platform's brand guidelines.
- Coming-soon logos (LinkedIn, DV360): grayscale at 45% opacity, exactly where the designs fade the mark.
- Every logo gets `alt` text with the platform name, or `aria-hidden` when the name is printed beside it.
- Logos appear only where a platform is named (connectors, sources, directory, pipeline, hero art). Never as decoration.
- Where the marks sit: homepage and 404 hero (lit nodes), data integration and integrations heroes, logo-tile grids, flow-line pills, the integrations directory, the pipeline infographic, connection cards, and the same places in the mobile files.

---

## 4. Style rules (summary)

Full detail: `design/_reference/StyleFoundations.dc.html`, `StyleArt.dc.html`, `StylePatterns.dc.html`, `UIStates.dc.html`.

**Color roles**

| Role | Colors | Where |
| --- | --- | --- |
| Brand blue | `#022771`, `#0070C2` | Only the mark, glows and brand art |
| Action indigo | `#4F46E5`, hover `#4338CA`, pressed `#3730A3`, soft `#EEF0FF` | Buttons, links, selected states |
| Fields | Deep navy `#141244`, navy `#1C1A57`, lavender `#F1F2FF`, surface `#F7F8FA` | Backgrounds for art, bands, quiet sections |
| Text | Ink `#101426`, text `#2B3040`, muted `#5B6170` | Headings, body, supporting lines |
| Status | Positive, negative, warning | Inside UI moments only |

**Type:** Geist 600 for headings (hero 62 to 68px desktop, 36px mobile; H2 46px desktop, 28px mobile), Inter for everything read (lead 18 to 19px, body 15 to 17.5px), tabular numbers for figures.

**Copy budget (applied in the designs):** heading 8 words, supporting line 20 words, card 12 words, text inside an image 5 words per element, button 2 words. Long-form pages (articles, docs, legal) are exempt.

**Buttons and tiles:** pill buttons, 44px on desktop pages, 40px in the header, 48px full-width on mobile. Art tiles 24px corners, hero art 28px, no border or shadow on the tile itself.

**Hero art rule:** the neural grid with the logo is the brand signature and appears only on the homepage and the 404. Every other page has its own hero illustration (see section 5). Never reuse one page's hero on another.

---

## 5. Component inventory

Build as React components, content in props. Function names in `reference/page-builder/` match.

**Sections:** SplitHero (`hero`), CenteredHero (`hero_center`, `simple_hero`), ThreeWays (`three`), FactsBand (`facts`), FeatureRows (`rows`), TabsBand (`tabs_band`), CapabilityGrid (`cap_grid`), WorkflowNav (`workflow_nav`), SolutionsNav (`solutions_nav`), Pains (`pains`), QuestionChips (`chips`), QuoteSlot (`quote_slot`), FAQ (`faq`), ConnectorDirectory (`directory`), CategoryFilter (`filter_pills`, `when`), SearchBox (`search_box`), PostCard (`post_card`), ArticleLayout (`article`, `prose`, `toc`), SideLayout (`side_layout`), LegalLayout (`legal`, `draft_banner`), PlanFinder, PlanCards and CompareTable (`p_pricing`), MultiStepForm (`p_demo`), ContactMethods and MapOnDemand (`p_contact`), PersonCard (`person`), Roadmap (`p_about`), StatusCard (`status_card`), PhotoSlot (`photo_slot`), form fields (`field`, `select`, `textarea`, `checkchips`, `btn`).

**Hero illustrations (`heroes.py`), one per page:** features (capability map), ask (one conversation), data (sources in, outputs out), dashboards (widget collage), objective (four goals in orbit), reports (fanned branded report), integrations (connector wall), agencies (stacked client workspaces), brands (blended ROAS gauge), banking (shield with roles), telecom (live pulse line), fmcg (three product boxes), ecommerce (bag and revenue bars), security (lock in encryption rings). Homepage and 404: the neural grid (`neural_svg`).

**UI moments and art (`lib.py`):** `art_logo_grid`, `art_code`, `art_flow`, `art_checks`, `art_ask`, `art_kpis`, `art_verdict`, `art_widgets`, `art_crumbs`, `art_rows_card`, `art_mapping`, `art_buckets`, `art_schedule`, `art_pivot`, `art_pacing`, `art_brand`, `art_pipeline`, `art_clients`, `art_roles`, `art_audit`, `art_roas`, `art_portfolio`, each inside a `tile`.

**Mobile (`m.py`):** MobileHeader with menu (`m_header`), MobileHero (`m_hero`), stacked cards (`m_cards`), FactsGrid 2 by 2 (`m_facts`), stacked rows (`m_rows`), TabChips (`m_tabs`), horizontal scroll row (`m_scroll`), MobileFAQ (`m_faq`), MobileFooter (`m_footer`).

---

## 6. Mobile rules (below 768px)

The 7 files in `design/_mobile/` show each template at 390px: homepage, platform page, solution page, pricing, book a demo, article, docs chapter. Every other page follows the matching template.

| Desktop | Mobile |
| --- | --- |
| Header with mega menus | Logo and a 44px menu button; full-width menu panel with accordion groups, Ask Cerebro pill, Book a demo at the bottom (header switches below 1024px) |
| Split hero | Stacked: label, H1 36px, lead 17px, two full-width 48px pills, hero art full width below |
| Side padding 40px, section padding 104px | 24px and 64px |
| Three-up cards | Stacked, art tile on top |
| Facts band, four across | 2 by 2 grid, figures 44px |
| Tabs band with tabs under the image | Scrollable tab chips above the image |
| Workflow navigation | Horizontal scroll row |
| Feature rows (text beside art) | Heading, line, then art |
| Plan cards in a row | Stacked; plan finder as a 4-column pill row |
| Comparison table | Horizontal scroll inside its box, with a "scroll sideways" hint |
| Demo form steps | Progress bar of 3 segments, full-width Continue and Back |
| Article and docs sidebars | "On this page" and "Chapters" become collapsible panels at the top |
| Footer columns | Book a demo band, then 2-column link groups, contact, legal |

Between 768px and 1023px: desktop layouts wrap naturally (every row uses flex-wrap or auto-fit grids) with the mobile header.

---

## 7. Interactions

| Where | Behavior |
| --- | --- |
| Header mega menus | Open on hover after 120ms or on click; close 200ms after leave, on Escape (focus back to trigger) and outside click; `aria-expanded`, `aria-controls` |
| Mobile menu | Toggle button with `aria-expanded`, focus trap, Escape closes, groups use `details` |
| Tabs bands | `role="tablist"`, one selected, 200ms crossfade, arrow keys move between tabs |
| Integrations, blog and FAQ filters | Pills with `aria-pressed`; search filters by text |
| Pricing plan finder | Highlights the recommended plan, updates the line with `aria-live="polite"` |
| Demo form | 3 steps, `aria-current="step"`, Back and Continue, last step submits to `/api/lead` and redirects to `/demo/thank-you` |
| Contact map | Placeholder with "Show map"; the embed loads only after the click |
| Docs "Was this page helpful?" | Yes or No, then a thank-you message; send to analytics |
| FAQ, tables of contents | Native `details` and `summary` |
| States and motion | Exactly as `_reference/UIStates.dc.html`; reduced motion makes everything instant |

---

## 8. Content rules

**Confirmed and safe to publish:** Meta Ads, Google Ads, TikTok Ads live (LinkedIn Ads and DV360 "Coming soon" only); AI-built connectors; sheet upload (CSV, Excel, Google Sheets); sales data sources; scheduled PDFs; Looker Studio and Sheets sync; white-label exports; budget pacing; encryption at rest and in transit; six roles; client permissions; activity log; AI data checks; exports up to 1,000,000 rows. No free trial: every call to action is "Book a demo".

**Placeholders:** `[TBC: ...]`, `[CONFIRM: ...]`, `[LEGAL: ...]`, `[Name]` and `[Planned ...]` show in development only. In production, the block containing them is hidden until replaced. Never ship bracket text.

**Demo data:** the sample brand Quillmere Textiles and sample clients (Saffron Bank, Northwind Foods, Kohistan Water, Northwind Juices) are fictional. Keep every "Demo data" caption. Figures used: spend PKR 5.8M; CPA PKR 468.81 (up 17%); CTR 1.08%; CPM PKR 147.52; CPA by platform TikTok 650.58, Meta 394.45, Google 243.22; CPM TikTok 119.23, Meta 177.97, Google 428.50; Women 25 to 34 at PKR 312 CPA; platforms claim PKR 22.5M vs PKR 14.5M in sales (blended ROAS 2.5x, platform 3.9x); product lines Cards 2.4M, Personal loans 1.8M, Digital banking 1.6M; offers Data bundles 2.2M, Postpaid 1.9M, Devices 1.7M; pacing PKR 3.6M of 5.8M.

---

## 9. Open items (business, product, legal)

| Item | Where it shows |
| --- | --- |
| Sync schedule; hourly syncs | Data integration, integrations, telecom, FAQ |
| Read-only access to ad accounts | Data integration, integrations, security, FAQ |
| REST webhooks | Integrations |
| Sales and revenue sources; transaction deduplication | Integrations, brands, e-commerce |
| Regional breakdowns | Telecom |
| Metrics per goal (Awareness, Traffic, Leads, Sales) | Objective engine, FMCG, article 2 |
| Ask Cerebro: client access, AI training, can it change ad accounts | Ask Cerebro, privacy |
| SOC 2 wording; hosting and region; retention; AI provider; SSO and two-factor; security email | Security, banking, privacy, FAQ |
| Plan names, prices, currency, limits, plan contents; agency pricing; plan changes; custom connector pricing | Pricing, agencies, FAQ |
| Whether agencies can work inside a brand's workspace | Brands |
| Demo response time | Thank-you, contact, docs |
| Docs sign-in method; 11 docs chapters to write | Docs |
| Article authors and publish dates | Blog, articles |
| Menu paths to remove app access in Meta, Google, TikTok; deletion timeframe in days; Meta deletion status URL | Data deletion |
| Office floor and unit; office photos with signage | Contact, about |
| Titles, photos and consent for the team; the Senior Designer's name | About |
| Client logos, quotes and results approved in writing | Logo bands, quotes, customers |
| Lawyer-approved privacy, terms and deletion text; legal entity name | Legal pages, footer |
| Optional: 3D brand objects in Spline (brief in `StyleArt`) | Brand objects |

---

## 10. Build prompts for Antigravity

Put this package in the project as `handoff/`. Paste one prompt at a time. Approve each step's screenshots against the canvas before the next.

### Prompt 1: Setup, tokens, brand, header and footer

```text
You are building https://cerebro.media from approved designs in handoff/. Read handoff/HANDOFF.md fully first. The design files are the spec: reproduce them exactly. Do not redesign, simplify, add sections or change copy.

Stack: Next.js (latest stable, App Router), TypeScript, Tailwind CSS. Every route statically generated, full HTML without JavaScript. Deploy target Vercel.
- Import handoff/tokens/tokens.css into app/globals.css and map it in the Tailwind config. Never add new colors.
- Fonts with next/font: Geist, Inter, Geist Mono. Tabular numbers for figures.
- Cerebro logos from handoff/brand only (map /_blob/ ids as in HANDOFF.md section 3).
- Platform logos (Meta, Google Ads, TikTok, LinkedIn, DV360, Google Sheets, Looker Studio, Excel): use the official logos already in this project's asset library, replacing the letter marks exactly as mapped in HANDOFF.md section 3, "Platform logos". Never draw your own.
- lib/site.ts: name "Cerebro DNano", url https://cerebro.media, email hello@cerebro.media, phone "+92 342 2732873" (tel:+923422732873), address "The Forum, Block 9 Clifton, Karachi 75600, Pakistan" with unit "[TBC: floor and unit]", hours "Mon – Fri: 9:00 AM – 6:00 PM PKT". Header, footer, contact and JSON-LD read only from here.
- Placeholder rule: bracket text shows in development only; in production its block is hidden.
- Create every route in HANDOFF.md section 2 with its title, description, canonical URL and Open Graph tags; the 301 redirects; app/sitemap.ts; app/robots.ts; Organization JSON-LD sitewide, LocalBusiness on /contact.
- components/SiteHeader.tsx exactly from handoff/design/SiteHeader.dc.html, with mega menus and states from handoff/design/_reference/UIStates.dc.html. Below 1024px, the mobile header and menu from handoff/design/_mobile/MobHome.dc.html.
- components/SiteFooter.tsx exactly from handoff/design/SiteFooter.dc.html (cta prop). Below 768px, the mobile footer from the mobile files.
Show screenshots at 1440px and 390px of the header (each mega menu open), the mobile menu open, and the footer, next to the designs. Then stop.
```

### Prompt 2: Component library and style guide

```text
Read handoff/HANDOFF.md sections 4 to 7. Build every component in section 5 as a React component matching the markup handoff/reference/page-builder/*.py generates, including all 14 hero illustrations from heroes.py as SVG components and their mobile versions per section 6. Content via props.
Create a development-only /styleguide route (noindex, not in production or the sitemap) rendering every component once plus all states from handoff/design/_reference/UIStates.dc.html.
Show /styleguide at 1440px and 390px next to the style library sheets. Then stop.
```

### Prompt 3: Homepage

```text
Build / exactly from handoff/design/Home3.dc.html (desktop) and handoff/design/_mobile/MobHome.dc.html (below 768px). Content in content/home.ts. Tabs band per HANDOFF.md section 7. Logo band and quote stay hidden in production until approved.
Screenshots at 1440px and 390px next to both designs. Then stop.
```

### Prompt 4: Platform pages

```text
Build exactly from their designs: /features (PlatFeatures), /ask-cerebro (PlatAsk), /platform/data-integration (PlatData), /platform/dashboards (PlatDashboards), /platform/objective-reporting (PlatObjective), /platform/reports (PlatReports), /integrations (PlatIntegrations). Each page uses its own hero illustration. Below 768px follow handoff/design/_mobile/MobPlatform.dc.html. Content in content/platform/*.ts.
Screenshots of each at 1440px and 390px next to the designs. Then stop.
```

### Prompt 5: Solution and industry pages

```text
Build one SolutionPage template and use it for /solutions/agencies (SolAgencies), /solutions/brands (SolBrands), /industries/banking-and-finance (IndBanking), /industries/telecom (IndTelecom), /industries/fmcg (IndFMCG), /industries/ecommerce (IndEcommerce), each exactly matching its design and hero. Below 768px follow handoff/design/_mobile/MobSolution.dc.html. Content in content/solutions/*.ts.
Screenshots at 1440px and 390px. Then stop.
```

### Prompt 6: Company and conversion pages

```text
Build exactly: /pricing (PgPricing, mobile MobPricing), /demo (PgDemo, mobile MobDemo), /demo/thank-you (PgThanks), /contact (PgContact), /about (PgAbout), /security (PgSecurity).
- Plan finder, demo steps and map on demand per HANDOFF.md section 7.
- Forms post to app/api/lead/route.ts: validation, honeypot, rate limit, email to hello@cerebro.media via lib/mail.ts (provider by environment variables). Field errors under each field, typed text kept. /demo redirects to /demo/thank-you.
- Prices, titles, photos and the security "To confirm" list hidden in production until filled.
Screenshots at 1440px and 390px, plus each form empty, with errors and after success. Then stop.
```

### Prompt 7: Blog, docs, FAQ, customers

```text
Build exactly: /blog (PgBlog), the two articles (PgArticle, PgArticle2) as MDX in content/blog with an ArticleLayout, /docs (PgDocs), /docs/[slug] (PgDocsChapter) with chapters as MDX in content/docs, /faq (PgFAQ), /customers (PgCustomers) and /customers/[slug] (PgCaseStudy). Mobile: MobArticle for articles, MobDocs for docs.
- Only getting-started is published in docs; other chapters are drafts (noindex, hidden).
- Planned blog slots and /customers pages return nothing in production until approved content exists (customers returns 404).
- Article JSON-LD on articles; Pagefind search for docs.
Screenshots at 1440px and 390px. Then stop.
```

### Prompt 8: Legal, 404, Open Graph images

```text
Build exactly: /privacy-policy (PgPrivacy), /terms-of-service (PgTerms), /data-deletion (PgDeletion) as MDX in content/legal with final: false, which shows the "Draft for legal review" banner and sets noindex until a lawyer approves. Build the 404 from Pg404.
Build app/api/og: deep navy field, white logo, page title in Geist 600.
Screenshots, then stop.
```

### Prompt 9: Match check before launch

```text
For every page, take full-page screenshots at 1440px, 1024px and 390px and compare with its design (desktop file and the matching mobile template). List every difference in spacing, size, color, copy or behavior, and fix it. Then check:
- States match handoff/design/_reference/UIStates.dc.html; no page reuses another page's hero.
- Every platform letter mark is replaced by the official logo from the asset library; coming-soon logos are grayscale at 45%.
- Menus, tabs, filters, plan finder, demo steps, map and helpful buttons work with keyboard only and with reduced motion.
- Lighthouse 95+ on every page for Performance, Accessibility, Best Practices and SEO.
- No em dashes, no lorem, no bracket placeholder text in production.
- Name, address, phone, email and hours identical everywhere.
- /styleguide unreachable in production; /option-1, /option-2 and /present do not exist.
Report as a table, then stop.
```

---

## 11. Launch checklist

- Live site meta description no longer lists DV360, LinkedIn or Snapchat as live
- Every page server-rendered for crawlers and link previews
- Search Console verified, sitemap submitted
- Privacy, terms and data deletion URLs (and the Meta deletion callback) set in the Meta, Google and TikTok app settings
- Google Business Profile once signage is in place
- Old pitch deck slides listing DV360, LinkedIn and Snapchat removed
