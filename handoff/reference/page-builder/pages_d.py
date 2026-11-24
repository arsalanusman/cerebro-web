import sys
from lib import *

T, F = True, False
OUT = '/mnt/user-data/outputs/artifacts/ba90362e-8eea-449d-8671-5acd11733c7f/project/'

def ph(text):
    return '<span style="color: #9A3412">%s</span>' % text

# ---------------- Batch D ----------------
def p_blog(ctx):
    pills = filter_pills(ctx, 'cat', [('all', 'All'), ('attribution', 'Attribution'), ('reporting', 'Reporting'), ('ai', 'AI'), ('agencies', 'Agencies')], 'Filter articles')
    body = simple_hero('Blog', 'Guides on paid media reporting.', 'Attribution, objective-based reporting and AI analysis, explained plainly.',
                       '<div style="margin-top: 28px; display: flex; justify-content: center">%s</div>' % search_box('blog-search', 'Search articles'))
    feat = post_card(ctx, 'PgArticle.dc.html', art_roas(ctx, 'lav', 360), 'Attribution', 'Blended ROAS vs platform ROAS: which number should you trust?', '6 min read · ' + '[TBC: date]', True)
    c2 = post_card(ctx, 'PgArticle2.dc.html', art_verdict(ctx, 260), 'Reporting', 'Understanding objective-based ad reporting', '5 min read · [TBC: date]')
    c3 = post_card(ctx, 'PgBlog.dc.html', photo_slot('[Planned article: AI]', 260), 'AI', '[Planned: an AI article title]', 'Hidden until published')
    c4 = post_card(ctx, 'PgBlog.dc.html', photo_slot('[Planned article: Agencies]', 260), 'Agencies', '[Planned: an agency article title]', 'Hidden until published')
    grid = '<div style="margin-top: 56px; display: flex; gap: 24px; flex-wrap: wrap">%s%s%s</div>' % (when('cat', 'reporting', c2), when('cat', 'ai', c3), when('cat', 'agencies', c4))
    body += '<section id="main" style="padding: 56px 0 104px"><div style="%s"><div style="display: flex; justify-content: center">%s</div><div style="margin-top: 44px">%s</div>%s</div></section>' % (CONT, pills, when('cat', 'attribution', feat), grid)
    return page(ctx, 'Blog', body, 3000)

def article(ctx, cat, title, summary, mins, hero_art_html, sections, related):
    head = ('<section style="padding: 72px 0 48px; background: %s"><div style="max-width: 860px; margin: 0 auto; padding: 0 40px; box-sizing: border-box">'
            '<a href="PgBlog.dc.html" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; text-decoration: none">%sAll articles</a>'
            '<p style="margin: 28px 0 0; font-size: 14px; font-weight: 600; color: %s">%s</p>'
            '<h1 style="margin: 12px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(34px, 4vw, 52px); line-height: 1.08; letter-spacing: -0.03em; color: %s">%s</h1>'
            '<p style="margin: 18px 0 0; font-size: 20px; line-height: 1.55; color: %s">%s</p>'
            '<div style="margin-top: 24px; display: flex; align-items: center; gap: 12px; font-size: 14px; color: %s"><span style="width: 40px; height: 40px; border-radius: 20px; background: #EEF0FF"></span><span><strong style="color: %s">[Name]</strong>, [Role] · %s min read · [TBC: date]</span></div></div></section>') % (
        LAV, icon('M19 12H5M11 18l-6-6 6-6', 14), BRAND, cat, INK, title, MUTED, summary, MUTED, INK, mins)
    heroimg = '<div style="max-width: 1040px; margin: 0 auto; padding: 40px 40px 0; box-sizing: border-box">%s</div>' % hero_art_html
    tocitems = [(b[2], b[1]) for b in sections if b[0] == 'h2']
    share = '<div style="margin-top: 32px; display: flex; flex-direction: column; gap: 10px"><div style="font-size: 12.5px; font-weight: 600; color: %s">Share</div><div style="display: flex; gap: 8px">%s</div></div>' % (INK, ''.join('<a href="#share" aria-label="Share on %s" style="width: 40px; height: 40px; border-radius: 20px; border: 1px solid #E4E7EC; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: %s; text-decoration: none">%s</a>' % (n, INK, s) for n, s in [('LinkedIn', 'in'), ('X', 'X'), ('WhatsApp', 'WA')]))
    body = head + heroimg + side_layout(toc(tocitems) + share, prose(sections))
    rel = ''.join(post_card(ctx, h, a, c, t, m) for h, a, c, t, m in related)
    body += section('<div>%s</div><div style="margin-top: 44px; display: flex; gap: 24px; flex-wrap: wrap">%s</div>' % (h2('Keep reading'), rel), '#F7F8FA', '96px 0')
    return body

def p_article(ctx):
    sections = [
        ('h2', 'Why platform totals never add up', 'why'),
        ('p', 'Meta, Google and TikTok each measure conversions with their own attribution windows and models. When one customer sees ads on two platforms, both can count the same sale.'),
        ('p', 'Add up every platform’s reported revenue and you get a number larger than what your store actually recorded.'),
        ('figure', art_roas(ctx, 'lav', 360), 'Demo data: platforms claim PKR 22.5M, while sales data shows PKR 14.5M.'),
        ('h2', 'What blended ROAS measures', 'blended'),
        ('p', 'Blended ROAS divides the revenue you actually recorded by your total ad spend across every platform. It cannot double count, because the revenue comes from one place: your own sales data.'),
        ('callout', 'The formula', 'Blended ROAS = total recorded revenue ÷ total ad spend, across all platforms.', 'info'),
        ('h2', 'What platform ROAS is still good for', 'platform'),
        ('ul', ['Comparing campaigns inside one platform', 'Spotting winning creatives and audiences quickly', 'Day-to-day optimization in each ad manager']),
        ('h2', 'How to report both, honestly', 'report'),
        ('ol', ['Lead with blended ROAS for budget decisions.', 'Show platform ROAS beside it, labeled as the platform’s own claim.', 'Explain the gap in one sentence, every time.', 'Judge awareness campaigns on reach and CPM, not ROAS.']),
        ('h2', 'How Cerebro does it', 'cerebro'),
        ('p', 'Cerebro brings your sales data in next to ad spend, shows blended ROAS beside each platform’s claim, and lets you ask Cerebro why the two differ. <a href="PlatAsk.dc.html">See Ask Cerebro</a>.')]
    related = [('PgArticle2.dc.html', art_verdict(ctx, 240), 'Reporting', 'Understanding objective-based ad reporting', '5 min read'),
               ('PlatAsk.dc.html', art_ask(ctx, 'Why did CPA rise?', 'PKR 468.81', ('↑ 17%',) + BAD, 'TikTok drove the rise.', 'navy', 240), 'Product', 'Ask Cerebro: answers from your data', 'Platform')]
    body = article(ctx, 'Attribution', 'Blended ROAS vs platform ROAS: which number should you trust?', 'Every platform claims credit for the same sale. Here’s how to report both numbers honestly.', 6,
                   art_rows_card(ctx, 'Return on ad spend, last 30 days', ('Demo data',) + NEUT, [('Platform ROAS (claimed)', '3.9x'), ('Blended ROAS (from sales)', '2.5x'), ('Total ad spend', 'PKR 5.8M')], 'navy', 420), sections, related)
    return page(ctx, 'Blended ROAS vs platform ROAS', body, 5200)

def p_article2(ctx):
    sections = [
        ('h2', 'The problem with one blended number', 'problem'),
        ('p', 'An awareness campaign is built to reach people cheaply. Judge it on cost per sale and it will always look like waste.'),
        ('p', 'Average it with sales campaigns and the blended CPA hides both what worked and what didn’t.'),
        ('figure', art_verdict(ctx, 360), 'Demo data: the same TikTok spend judged on CPA, then on CPM.'),
        ('h2', 'Four goals, four ways to judge', 'goals'),
        ('ul', ['Awareness: reach and CPM', 'Traffic: clicks and CPC', 'Leads: leads and cost per lead', 'Sales: conversions and CPA']),
        ('callout', 'To confirm', '[CONFIRM: these are the metrics Cerebro uses for each goal]', 'warn'),
        ('h2', 'Platform objective or client objective', 'objective'),
        ('p', 'Platforms label each campaign with an objective. Your client may think about it differently. Good reporting lets you use either.'),
        ('h2', 'How to start', 'start'),
        ('ol', ['Group every campaign by its goal.', 'Pick one primary metric per goal.', 'Compare campaigns only within the same goal.', 'Report blended totals last, with a note.']),
        ('h2', 'How Cerebro does it', 'cerebro'),
        ('p', 'Cerebro’s objective engine groups campaigns into Awareness, Traffic, Leads and Sales across Meta, Google and TikTok. <a href="PlatObjective.dc.html">See the objective engine</a>.')]
    related = [('PgArticle.dc.html', art_roas(ctx, 'lav', 240), 'Attribution', 'Blended ROAS vs platform ROAS: which number should you trust?', '6 min read'),
               ('PlatObjective.dc.html', art_buckets(ctx, 240), 'Product', 'The objective engine', 'Platform')]
    body = article(ctx, 'Reporting', 'Understanding objective-based ad reporting', 'Why one blended CPA misjudges half your campaigns, and how grouping by goal fixes it.', 5, art_buckets(ctx, 420), sections, related)
    return page(ctx, 'Understanding objective-based ad reporting', body, 5000)

DOCS = [('getting-started', 'Getting started', 'Set up your workspace and ask your first question.', T), ('workspace-and-clients', 'Workspace and clients', 'Add clients, currencies and teams.', F),
        ('native-connectors', 'Native connectors', 'Connect Meta Ads, Google Ads and TikTok Ads.', F), ('ai-connectors', 'AI-built connectors', 'Connect any other platform.', F),
        ('sheet-upload', 'Sheet upload', 'CSV, Excel and Google Sheets.', F), ('sales-data', 'Sales data', 'Bring revenue in next to spend.', F),
        ('dashboards', 'Dashboards', 'Build, edit and share widgets.', F), ('reports-and-exports', 'Reports and exports', 'Builder, scheduled PDFs, Looker Studio.', F),
        ('objective-engine', 'Objective engine', 'Goals and client objectives.', F), ('ask-cerebro', 'Ask Cerebro', 'Ask questions, read the working.', F),
        ('roles-and-access', 'Roles and access', 'Six roles and client permissions.', F), ('security-and-data', 'Security and data', 'Encryption, logs and deletion.', F)]

def p_docs(ctx):
    body = simple_hero('Docs', 'Set up and use Cerebro.', 'Step-by-step guides for every part of the platform.', '<div style="margin-top: 28px; display: flex; justify-content: center">%s</div>' % search_box('docs-search', 'Search the docs', '440px'))
    cards = ''.join('<a href="%s" style="min-width: 0; text-decoration: none; background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 8px"><div style="display: flex; justify-content: space-between; align-items: center; gap: 8px"><span style="font-size: 17px; font-weight: 600; color: %s">%s</span>%s</div><span style="font-size: 14.5px; line-height: 1.5; color: %s">%s</span></a>' % (
        'PgDocsChapter.dc.html' if pub else 'PgDocs.dc.html', INK, t, badge('Published', *GOOD) if pub else badge('Draft', *NEUT), MUTED, l) for slug, t, l, pub in DOCS)
    body += section('<div>%s%s</div><div style="margin-top: 44px; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px">%s</div><p style="margin: 18px 0 0; text-align: center; font-size: 13.5px; color: #9A3412">Drafts stay hidden on the live site until each chapter is written and reviewed.</p>' % (h2('Twelve chapters'), lead('Start with Getting started, then pick what you need.'), cards), '#FFFFFF', sid='main')
    body += section('<div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center; justify-content: space-between; background: %s; border-radius: 24px; padding: 36px 40px"><div><div style="font-family: Geist, Inter, sans-serif; font-size: 26px; font-weight: 600; color: #FFFFFF">Can’t find an answer?</div><div style="margin-top: 6px; font-size: 16px; color: #CDD0F3">Our team in Karachi replies within one business day.</div></div><div style="display: flex; gap: 10px; flex-wrap: wrap"><a href="PgFAQ.dc.html" style="display: inline-flex; align-items: center; height: 44px; padding: 0 22px; border-radius: 22px; background: #FFFFFF; color: %s; text-decoration: none; font-size: 15px; font-weight: 600">Read the FAQ</a><a href="PgContact.dc.html" style="display: inline-flex; align-items: center; height: 44px; padding: 0 22px; border-radius: 22px; border: 1px solid rgba(255,255,255,0.4); color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600">Contact us</a></div></div>' % (NAVY, NAVY), '#FFFFFF', '0 0 104px')
    return page(ctx, 'Docs', body, 2800)

def p_docs_chapter(ctx):
    ctx.state['helped'] = ''
    ctx.extra.append("      help: { ask: self.state.helped === '', done: self.state.helped !== '', yes: function () { self.setState({ helped: 'yes' }); }, no: function () { self.setState({ helped: 'no' }); } }")
    nav = '<nav aria-label="Docs chapters"><div style="font-size: 12.5px; font-weight: 600; color: %s">Chapters</div><ul style="margin: 10px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 2px">%s</ul></nav>' % (INK, ''.join(
        '<li><a href="%s"%s style="display: flex; justify-content: space-between; gap: 6px; padding: 8px 10px; border-radius: 8px; font-size: 14px; text-decoration: none; background: %s; color: %s; font-weight: %s">%s%s</a></li>' % (
            'PgDocsChapter.dc.html' if pub else 'PgDocs.dc.html', ' aria-current="page"' if i == 0 else '', '#EEF0FF' if i == 0 else 'transparent', '#3730A3' if i == 0 else TEXT, 600 if i == 0 else 400, t, '' if pub else '<span style="font-size: 11.5px; color: #9AA0AD">Draft</span>') for i, (slug, t, l, pub) in enumerate(DOCS)))
    sections = [
        ('h2', 'Before you begin', 'before'),
        ('p', 'Cerebro accounts are set up with our team after a demo. You’ll receive an email invitation to your workspace.'),
        ('ul', ['Admin access to the ad accounts you want to connect', 'Any sheets you want to upload: CSV, Excel or Google Sheets']),
        ('h2', '1. Accept your invitation', 'invite'),
        ('p', 'Open the invitation email and set your password. ' + ph('[CONFIRM: sign-in method]')),
        ('h2', '2. Add a client', 'client'),
        ('p', 'Each brand you report on is a client. Add its name and its reporting currency.'),
        ('callout', 'For agencies', 'Add each client separately, so their data and access stay apart.', 'info'),
        ('h2', '3. Connect a platform', 'connect'),
        ('p', 'Open Connections, choose Meta Ads, Google Ads or TikTok Ads, sign in, and pick the ad accounts to include.'),
        ('figure', photo_slot('[Screenshot from the product: the Connections page]', 300), 'Connections shows each platform, its status and how recent its data is.'),
        ('h2', '4. Upload a sheet (optional)', 'sheet'),
        ('p', 'Upload a CSV, Excel file or Google Sheet. Cerebro AI maps the columns; review anything it flags.'),
        ('h2', '5. Ask your first question', 'ask'),
        ('p', 'Open Ask Cerebro and try:'),
        ('code', 'Summarize performance for the last 30 days')]
    helpful = ('<div style="margin-top: 56px; padding-top: 28px; border-top: 1px solid #E4E7EC"><sc-if value="{{help.ask}}" hint-placeholder-val="{{true}}"><div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap"><span style="font-size: 15px; font-weight: 600; color: %s">Was this page helpful?</span>%s%s</div></sc-if>'
               '<sc-if value="{{help.done}}" hint-placeholder-val="{{false}}"><p role="status" style="margin: 0; font-size: 15px; color: #166534">Thanks for the feedback.</p></sc-if>'
               '<div style="margin-top: 32px; display: flex; justify-content: flex-end"><a href="PgDocs.dc.html" style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px; text-decoration: none; border: 1px solid #E4E7EC; border-radius: 16px; padding: 16px 20px"><span style="font-size: 13px; color: %s">Next</span><span style="font-size: 16px; font-weight: 600; color: %s">Workspace and clients</span></a></div></div>') % (
        INK, btn('Yes', 'secondary', '{{help.yes}}'), btn('No', 'secondary', '{{help.no}}'), MUTED, INK)
    main = ('<p style="margin: 0; font-size: 14px; font-weight: 600; color: %s">Docs · Getting started</p><h1 style="margin: 12px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(32px, 3.6vw, 44px); line-height: 1.1; letter-spacing: -0.025em; color: %s">Getting started</h1>'
            '<p style="margin: 14px 0 0; font-size: 19px; line-height: 1.55; color: %s">Set up your workspace, connect your first platform and ask your first question. About 5 minutes.</p>%s%s') % (BRAND, INK, MUTED, prose(sections), helpful)
    body = side_layout(nav, main, toc([(b[2], b[1]) for b in sections if b[0] == 'h2']), '#FFFFFF', '56px 0 104px')
    return page(ctx, 'Getting started', body, 3400)

def p_faq(ctx):
    cats = [('all', 'All'), ('connectors', 'Connectors'), ('security', 'Data security'), ('accuracy', 'Accuracy'), ('billing', 'Billing'), ('team', 'Team access')]
    pills = filter_pills(ctx, 'fq', cats, 'Filter questions')
    groups = [
        ('connectors', 'Connectors', [('Which platforms connect natively?', 'Meta Ads, Google Ads and TikTok Ads. LinkedIn Ads and DV360 are coming soon.'), ('Can we connect a platform without a native connector?', 'Yes. Build one with Cerebro AI, ask our team, or upload its exports as sheets.'), ('Which files can we upload?', 'CSV, Excel and Google Sheets. Cerebro AI maps the columns.'), ('How often does data sync?', ph('[TBC: confirm the sync schedule]'))]),
        ('security', 'Data security', [('Is our data encrypted?', 'Yes, at rest and in transit.'), ('Who can see a client’s data?', 'Only people with a role on that client. There are six roles and client-level permissions.'), ('Is access to our ad accounts read-only?', ph('[TBC: confirm with the product team]')), ('Where is our data stored?', ph('[TBC: hosting provider and region]'))]),
        ('accuracy', 'Accuracy', [('How does Cerebro clean data?', 'Cerebro AI maps fields, cleans rows, standardizes metrics, converts currency and flags issues.'), ('What happens when data is missing?', 'Cerebro tells you, in dashboards and in Ask Cerebro answers.'), ('What is blended ROAS?', 'Revenue from your own sales data divided by total ad spend.')]),
        ('billing', 'Billing', [('Is there a free trial?', 'No. Book a demo and we’ll set Cerebro up on your own data.'), ('Which currency do you bill in?', ph('[TBC: PKR, USD or both]')), ('How is pricing set?', 'By plan. See the <a href="PgPricing.dc.html">pricing page</a>.')]),
        ('team', 'Team access', [('How many roles are there?', 'Six, from operations admin to client viewer.'), ('Can clients see their own dashboards?', 'Yes. Client viewers see only their own.'), ('Is there an activity log?', 'Yes. Exports, invitations and role changes are recorded.')])]
    blocks = ''
    for g, title, qs in groups:
        items = ''.join('<details style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 16px; padding: 0 22px"><summary style="min-height: 60px; display: flex; align-items: center; cursor: pointer; font-size: 16px; font-weight: 600; color: %s">%s</summary><p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: %s">%s</p></details>' % (INK, q, MUTED, a) for q, a in qs)
        blocks += when('fq', g, '<div style="margin-top: 40px"><h2 style="margin: 0; font-size: 20px; font-weight: 600; color: %s">%s</h2><div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px">%s</div></div>' % (INK, title, items))
    body = simple_hero('FAQ', 'Questions, answered.', 'Connectors, security, accuracy, billing and team access.', '<div style="margin-top: 28px; display: flex; justify-content: center">%s</div>' % search_box('faq-search', 'Search questions', '440px'))
    body += '<section id="main" style="padding: 48px 0 104px"><div style="max-width: 860px; margin: 0 auto; padding: 0 40px; box-sizing: border-box"><div style="display: flex; justify-content: center">%s</div>%s</div></section>' % (pills, blocks)
    return page(ctx, 'FAQ', body, 3600)

def p_customers(ctx):
    body = draft_banner('Hidden on the live site until clients approve their logos, quotes and results in writing.')
    body += simple_hero('Customers', 'Teams that trust their numbers.', 'How agencies and brands report with Cerebro.')
    feat = ('<a href="PgCaseStudy.dc.html" style="display: flex; gap: 40px; flex-wrap: wrap; align-items: center; text-decoration: none; background: %s; border-radius: 28px; padding: 40px; box-sizing: border-box">'
            '<div style="flex: 1 1 380px; min-width: 0"><span style="display: inline-flex; align-items: center; justify-content: center; width: 140px; height: 44px; border-radius: 10px; border: 1px dashed rgba(255,255,255,0.4); font-size: 12px; color: #CDD0F3">[Client logo]</span>'
            '<div style="margin-top: 22px; font-family: Geist, Inter, sans-serif; font-size: 30px; line-height: 1.2; font-weight: 600; color: #FFFFFF">[Headline result, in the client’s approved words]</div>'
            '<span style="margin-top: 22px; display: inline-flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 600; color: #C7D2FE">Read the story%s</span></div>'
            '<div style="flex: 1 1 360px; min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">%s</div></a>') % (
        NAVY, icon(ARROW, 15), ''.join('<div style="border-radius: 18px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px"><div style="font-family: Geist, Inter, sans-serif; font-size: 34px; font-weight: 600; color: #FFFFFF">[TBC]</div><div style="margin-top: 6px; font-size: 14px; color: #CDD0F3">[Approved result]</div></div>' for _ in range(4)))
    cards = ''.join('<a href="PgCaseStudy.dc.html" style="flex: 1 1 320px; min-width: 0; text-decoration: none; background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 24px; padding: 26px; display: flex; flex-direction: column; gap: 14px"><span style="display: inline-flex; align-items: center; justify-content: center; width: 120px; height: 40px; border-radius: 10px; border: 1px dashed #C9CDD6; font-size: 12px; color: %s">[Client logo]</span><span style="font-size: 13px; font-weight: 600; color: %s">%s</span><span style="font-family: Geist, Inter, sans-serif; font-size: 20px; line-height: 1.3; font-weight: 600; color: %s">[Story headline]</span><span style="font-size: 14px; color: %s">[Approved result]</span></a>' % (MUTED, BRAND, k, INK, MUTED) for k in ['Agency', 'Banking', 'FMCG'])
    body += section('%s<div style="margin-top: 24px; display: flex; gap: 20px; flex-wrap: wrap">%s</div>' % (feat, cards), '#FFFFFF', '64px 0 104px', 'main')
    return page(ctx, 'Customers', body, 2600)

def p_case(ctx):
    body = draft_banner('Template. Hidden on the live site until the client approves every line in writing.')
    hero_html = ('<section style="padding: 72px 0 56px; background: %s"><div style="%s; display: flex; gap: 56px; flex-wrap: wrap; align-items: center"><div style="flex: 1 1 460px; min-width: 0">'
                 '<a href="PgCustomers.dc.html" style="display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; text-decoration: none">%sAll customers</a>'
                 '<span style="margin-top: 28px; display: flex; align-items: center; justify-content: center; width: 160px; height: 52px; border-radius: 12px; border: 1px dashed #C9CDD6; background: #FFFFFF; font-size: 12.5px; color: %s">[Client logo]</span>'
                 '<h1 style="margin: 24px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(34px, 4vw, 52px); line-height: 1.08; letter-spacing: -0.03em; color: %s">[Headline result, in the client’s approved words]</h1>'
                 '<p style="margin: 18px 0 0; font-size: 19px; line-height: 1.55; color: %s">[One line on who the client is and what they needed]</p></div>'
                 '<div style="flex: 1 1 420px; min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px">%s</div></div></section>') % (
        LAV, CONT, icon('M19 12H5M11 18l-6-6 6-6', 14), MUTED, INK, MUTED, ''.join('<div style="background: #FFFFFF; border-radius: 20px; padding: 22px; box-shadow: 0 12px 28px rgba(28,26,87,0.08)"><div style="font-family: Geist, Inter, sans-serif; font-size: 36px; font-weight: 600; color: %s">[TBC]</div><div style="margin-top: 6px; font-size: 14px; color: %s">[Approved result]</div></div>' % (INK, MUTED) for _ in range(4)))
    body += hero_html
    facts_col = '<div style="display: flex; flex-direction: column; gap: 18px">%s</div>' % ''.join('<div><div style="font-size: 12.5px; font-weight: 600; color: %s">%s</div><div style="margin-top: 4px; font-size: 15px; color: %s">%s</div></div>' % (MUTED, k, INK, v) for k, v in [('Industry', '[TBC]'), ('Team', '[TBC]'), ('Platforms', '[TBC]'), ('Using', 'Ask Cerebro, dashboards, scheduled PDFs [TBC]')])
    story = prose([('h2', 'The challenge', 'challenge'), ('p', '[Two or three sentences in the client’s words about what reporting looked like before.]'),
                   ('h2', 'What they did', 'solution'), ('p', '[How they set up Cerebro: platforms, sheets, dashboards, who uses it.]'),
                   ('h2', 'The results', 'results'), ('ul', ['[Approved result one]', '[Approved result two]', '[Approved result three]'])])
    body += side_layout(facts_col, story, None, '#FFFFFF', '64px 0 40px')
    body += quote_slot()
    return page(ctx, 'Customer story', body, 3200)

# ---------------- Batch E ----------------
def legal(ctx, title, summary, sections):
    body = draft_banner()
    body += ('<section style="padding: 64px 0 40px; background: %s"><div style="%s"><p style="margin: 0; font-size: 14px; font-weight: 600; color: %s">Legal</p>'
             '<h1 style="margin: 12px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(34px, 4vw, 50px); line-height: 1.08; letter-spacing: -0.03em; color: %s">%s</h1>'
             '<p style="margin: 14px 0 0; max-width: 640px; font-size: 18px; line-height: 1.55; color: %s">%s</p><p style="margin: 14px 0 0; font-size: 14px; color: %s">Last updated: %s</p></div></section>') % (LAV, CONT, BRAND, INK, title, MUTED, summary, MUTED, ph('[TBC: date]'))
    others = '<div style="margin-top: 32px; display: flex; flex-direction: column; gap: 6px"><div style="font-size: 12.5px; font-weight: 600; color: %s">Legal pages</div>%s</div>' % (INK, ''.join('<a href="%s" style="font-size: 14px; text-decoration: none; color: %s; font-weight: %s">%s</a>' % (h, BRAND if t == title else MUTED, 600 if t == title else 400, t) for h, t in [('PgPrivacy.dc.html', 'Privacy policy'), ('PgTerms.dc.html', 'Terms of service'), ('PgDeletion.dc.html', 'Delete your data')]))
    body += side_layout(toc([(b[2], b[1]) for b in sections if b[0] == 'h2'], 'Contents') + others, prose(sections), None, '#FFFFFF', '56px 0 104px')
    ctx.footer_cta = False
    return body

def p_privacy(ctx):
    S = [('h2', '1. Who we are', 's1'), ('p', '%s operates Cerebro DNano from The Forum, Block 9 Clifton, Karachi 75600, Pakistan. Contact: <a href="mailto:hello@cerebro.media">hello@cerebro.media</a>.' % ph('[LEGAL: legal entity name]')),
         ('h2', '2. Information we collect', 's2'), ('ul', ['Account details: name, work email, company and role', 'Advertising data from the platforms you connect', 'Files you upload, such as CSV, Excel and Google Sheets', 'Sales data you choose to connect', 'Usage data, such as pages viewed and features used']),
         ('h2', '3. How we use it', 's3'), ('ul', ['To provide reporting, dashboards and Ask Cerebro answers', 'To support you and keep the service secure', 'To improve the product ' + ph('[LEGAL: confirm whether data is used for AI training]')]),
         ('h2', '4. Sharing', 's4'), ('p', 'We do not sell your data. We share it only with providers that run the service for us ' + ph('[TBC: hosting and AI providers]') + ', or when the law requires it.'),
         ('h2', '5. Security', 's5'), ('p', 'Data is encrypted at rest and in transit. Access is limited by role and by client, and actions are recorded in an activity log.'),
         ('h2', '6. Retention', 's6'), ('p', ph('[TBC: how long each type of data is kept]')),
         ('h2', '7. Your rights', 's7'), ('p', 'You can ask to access, correct or delete your data. See <a href="PgDeletion.dc.html">Delete your data</a>.'),
         ('h2', '8. Data from Google, Meta and TikTok', 's8'), ('p', ph('[LEGAL: required platform wording, including the Google API Services User Data Policy and Limited Use statement]')),
         ('h2', '9. Contact', 's9'), ('p', 'Questions about privacy: <a href="mailto:hello@cerebro.media">hello@cerebro.media</a>.')]
    return page(ctx, 'Privacy policy', legal(ctx, 'Privacy policy', 'How Cerebro DNano collects, uses and protects information.', S), 3800)

def p_terms(ctx):
    S = [('h2', '1. Agreement', 't1'), ('p', 'These terms govern your use of Cerebro DNano. By using the service you agree to them. ' + ph('[LEGAL: entity name and effective date]')),
         ('h2', '2. Accounts and access', 't2'), ('p', 'Accounts are created by our team after a demo. You are responsible for the people you invite and the roles you give them.'),
         ('h2', '3. Acceptable use', 't3'), ('ul', ['Connect only accounts you are authorized to use', 'Do not attempt to break or overload the service', 'Do not use the service to break any law or platform policy']),
         ('h2', '4. Your data', 't4'), ('p', 'You own the data you connect and upload. You give us permission to process it only to provide the service.'),
         ('h2', '5. Fees', 't5'), ('p', ph('[TBC: plans, billing currency, payment terms]')),
         ('h2', '6. Confidentiality', 't6'), ('p', ph('[LEGAL: confidentiality terms]')),
         ('h2', '7. Disclaimers', 't7'), ('p', ph('[LEGAL: disclaimers, including that AI answers should be checked before decisions]')),
         ('h2', '8. Limitation of liability', 't8'), ('p', ph('[LEGAL: liability limits]')),
         ('h2', '9. Ending the agreement', 't9'), ('p', ph('[LEGAL: termination and what happens to your data]')),
         ('h2', '10. Governing law', 't10'), ('p', ph('[LEGAL: governing law and courts]')),
         ('h2', '11. Contact', 't11'), ('p', '<a href="mailto:hello@cerebro.media">hello@cerebro.media</a>')]
    return page(ctx, 'Terms of service', legal(ctx, 'Terms of service', 'The terms that govern the use of Cerebro DNano.', S), 3800)

def p_deletion(ctx):
    S = [('h2', '1. Disconnect in Cerebro', 'd1'), ('p', 'Open Connections, choose the platform and select Disconnect. Syncing stops straight away.'),
         ('h2', '2. Remove access in each platform', 'd2'), ('ul', ['Meta: remove Cerebro from Business Integrations in your Facebook settings', 'Google: remove Cerebro from third-party access in your Google Account', 'TikTok: remove Cerebro from authorized apps in TikTok Business Center']),
         ('callout', 'To confirm', '[CONFIRM: exact menu paths in each platform]', 'warn'),
         ('h2', '3. Ask us to delete your data', 'd3'), ('p', 'Email <a href="mailto:hello@cerebro.media?subject=Data%20deletion%20request">hello@cerebro.media</a> with the subject “Data deletion request” from the email on your account. We confirm when it is done, within ' + ph('[TBC: number of days]') + '.'),
         ('h2', '4. Requests from Meta', 'd4'), ('p', 'When you remove Cerebro from Meta, Meta notifies us and we delete the data it covers. You can check the status at ' + ph('[TBC: status URL from the data deletion callback]') + '.'),
         ('h2', 'What gets deleted', 'd5'), ('ul', ['Advertising data synced from the platform', 'Sheets and files you uploaded', 'Your account details, unless the law requires us to keep them ' + ph('[LEGAL]')])]
    return page(ctx, 'Delete your data', legal(ctx, 'Delete your data', 'How to disconnect your accounts and ask us to delete your data.', S), 3000)

def p_404(ctx):
    ctx.footer_cta = False
    small_lit = {(0, 0): ('M', '#1877F2'), (4, 0): ('G', '#15803D'), (0, 4): ('T', '#111827'), (4, 4): ('?', BRAND)}
    art = ('<div style="position: relative; width: 300px; max-width: 70%%; aspect-ratio: 1 / 1; margin: 0 auto; border-radius: 28px; overflow: hidden; background: %s; border: 1px solid rgba(255,255,255,0.1)">'
           '<div aria-hidden="true" style="position: absolute; inset: 0; background: radial-gradient(circle at 50%% 50%%, rgba(0,112,194,0.55) 0, rgba(0,112,194,0.16) 30%%, rgba(20,18,68,0) 62%%)"></div>%s'
           '<img src="%s" alt="" style="position: absolute; left: 50%%; top: 50%%; width: 14%%; height: auto; transform: translate(-50%%, -50%%)"></div>') % (DEEP, neural_svg(ctx, small_lit), MARK_W)
    body = ('<section style="position: relative; overflow: hidden; padding: 96px 0 112px; background: %s">%s<div style="position: relative; max-width: 760px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; text-align: center">%s'
            '<p style="margin: 40px 0 0; font-size: 14px; font-weight: 600; color: #A5B4FC">Error 404</p>'
            '<h1 style="margin: 12px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(36px, 4.4vw, 56px); line-height: 1.05; letter-spacing: -0.03em; color: #FFFFFF">This page doesn’t exist.</h1>'
            '<p style="margin: 16px 0 0; font-size: 18px; color: #CDD0F3">The link may be old, or the page has moved.</p>'
            '<div style="margin-top: 30px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap"><a href="Home3.dc.html" style="display: inline-flex; align-items: center; height: 44px; padding: 0 22px; border-radius: 22px; background: #FFFFFF; color: %s; text-decoration: none; font-size: 15px; font-weight: 600">Go home</a>'
            '<a href="PlatFeatures.dc.html" style="display: inline-flex; align-items: center; height: 44px; padding: 0 22px; border-radius: 22px; border: 1px solid rgba(255,255,255,0.4); color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600">Explore the platform</a>'
            '<a href="PgContact.dc.html" style="display: inline-flex; align-items: center; height: 44px; padding: 0 22px; border-radius: 22px; border: 1px solid rgba(255,255,255,0.4); color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600">Contact us</a></div></div></section>') % (
        DEEP, glow('left: 50%; top: -300px; margin-left: -450px', 900, 'rgba(0,112,194,0.3)'), art, NAVY)
    return page(ctx, 'Page not found', body, 1800)

PAGES = {'PgBlog': p_blog, 'PgArticle': p_article, 'PgArticle2': p_article2, 'PgDocs': p_docs, 'PgDocsChapter': p_docs_chapter, 'PgFAQ': p_faq,
         'PgCustomers': p_customers, 'PgCaseStudy': p_case, 'PgPrivacy': p_privacy, 'PgTerms': p_terms, 'PgDeletion': p_deletion, 'Pg404': p_404}

if __name__ == '__main__':
    for name in sys.argv[1:]:
        ctx = Ctx(name.lower())
        html = PAGES[name](ctx)
        assert '—' not in html, 'em dash found in ' + name
        open(OUT + name + '.dc.html', 'w', encoding='utf-8').write(html)
        print(name, len(html))
