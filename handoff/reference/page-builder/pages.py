import sys
from lib import *
import heroes as HX

T, F = True, False
OUT = '/mnt/user-data/outputs/artifacts/ba90362e-8eea-449d-8671-5acd11733c7f/project/'
I = {
 'plug': 'M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z', 'spark': SPARK, 'upload': 'M12 16V4M7 9l5-5 5 5M4 20h16',
 'sales': 'M3 3v18h18M7 15l4-4 3 3 6-7', 'check': 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
 'target': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'dash': 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
 'table': 'M3 4h18v16H3zM3 10h18M9 4v16', 'clock': 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'sync': 'M21 12a9 9 0 0 1-15.5 6.3M3 12a9 9 0 0 1 15.5-6.3M21 4v5h-5M3 20v-5h5',
 'pace': 'M22 12h-4l-3 9L9 3l-3 9H2', 'brand': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6',
}
DEMO = 'Demo data for a sample brand.'

def p_features(ctx):
    body = hero(ctx, 'Platform', 'Everything Cerebro does, in one place.', 'From bringing data in to answering questions, with AI at every step.',
                HX.features(ctx))
    body += workflow_nav(None, 'Four workflows. One AI analyst.').replace('<section style', '<section id="main" style', 1)
    body += facts([('3', 'Native connectors live'), ('Any', 'Platform, with AI-built connectors'), ('3', 'Sheet formats, mapped by AI'), ('5', 'AI steps on every source')])
    body += cap_grid('Every capability', 'The tools teams use every day.', [
        ('Native connectors', 'Meta, Google and TikTok in a few clicks.', I['plug']), ('AI-built connectors', 'Any other platform, drafted by AI.', I['spark']),
        ('Sheet upload', 'CSV, Excel and Google Sheets.', I['upload']), ('Sales data', 'Revenue next to ad spend.', I['sales']),
        ('AI data checks', 'Issues flagged before reports go out.', I['check']), ('Objective engine', 'Awareness, Traffic, Leads and Sales.', I['target']),
        ('Dashboards', 'Widget-based and editable.', I['dash']), ('Report builder', 'Any cut, saved and shared.', I['table']),
        ('Scheduled PDFs', 'Sent on your schedule.', I['clock']), ('Looker Studio and Sheets', 'Synced with your reports.', I['sync']),
        ('Budget pacing', 'Spend against plan.', I['pace']), ('Branded exports', 'Your agency’s logo, not ours.', I['brand'])])
    return page(ctx, 'All platform features', body, 4200)

def p_ask(ctx):
    body = hero(ctx, 'Cerebro AI', 'Your AI analyst, answering from your data.', 'Plain questions. Answers with the numbers behind them.',
                HX.ask(ctx))
    body += tabs_band(ctx, 'Four kinds of questions it handles well.', 'Pick one to see the answer.', [
        {'title': 'Why did it change?', 'text': 'Finds what moved a number.', 'art': art_ask(ctx, 'Why did CPA rise last month?', 'PKR 468.81', ('↑ 17%',) + BAD, 'TikTok drove the rise, mostly from an awareness campaign.', 'navy', 400)},
        {'title': 'Who is responding?', 'text': 'Results by age and gender.', 'art': art_ask(ctx, 'Which audience converts best on Meta?', 'Women 25–34', ('PKR 312 CPA',) + GOOD, '21% below the Meta average.', 'navy', 400)},
        {'title': 'What should we change?', 'text': 'Fixes with their likely impact.', 'art': art_ask(ctx, 'How do we bring CPA down?', '+300 to +350', ('conversions',) + SOFT, 'Move PKR 300K to Women 18–34 | Feed, then test for two weeks.', 'navy', 400)},
        {'title': 'What can’t it see?', 'text': 'Says so, instead of guessing.', 'art': art_ask(ctx, 'How many in-store sales did we drive?', 'Not in your data', ('No guessing',) + NEUT, 'I can show online conversions for the same campaigns instead.', 'navy', 400)}], DEMO)
    body += rows([
        {'h': 'It shows its working.', 'line': 'Every answer lists the steps it took and the data it used.', 'art': art_checks(ctx, 'How it worked it out', [(T, 'Compared with last month'), (T, 'Split the change by platform'), (T, 'Checked campaign goals')], 'navy', 380)},
        {'h': 'Answers you can take with you.', 'line': 'Copy or download the table behind any answer.', 'art': art_rows_card(ctx, 'CPA by platform', ('Copy as CSV',) + SOFT, [('TikTok Ads', 'PKR 650.58'), ('Meta Ads', 'PKR 394.45'), ('Google Ads', 'PKR 243.22')])},
        {'h': 'Scoped to what you can see.', 'line': 'Answers come only from your workspace and your clients. [CONFIRM]', 'art': art_rows_card(ctx, 'Your access', ('Client viewer',) + SOFT, [('Client', 'Saffron Bank'), ('Platforms', 'Meta, Google, TikTok'), ('Data up to', '18 Nov 2026')], 'navy')}])
    body += workflow_nav('ask')
    body += faq('Questions about Ask Cerebro', [
        ('What data does Ask Cerebro use?', 'Only your Cerebro workspace: connected platforms, uploaded sheets and sales data, for the clients you can access.'),
        ('Can I export an answer?', 'Yes. Copy the table behind any answer as CSV, or download it.'),
        ('What happens when data is missing?', 'It tells you, for example when coverage is partial or an exchange rate is missing.'),
        ('Is our data used to train AI models?', '[TBC: confirm with the product team before launch]'),
        ('Does Ask Cerebro change anything in our ad accounts?', '[TBC: confirm with the product team before launch]')])
    return page(ctx, 'Ask Cerebro', body, 5600)

def p_data(ctx):
    body = hero(ctx, 'Workflow 01 · Data integration', 'Every source. One clean model.', 'Connect platforms, build connectors with AI, or upload sheets. Cerebro AI prepares it all.',
                HX.data(ctx))
    body += three(ctx, 'Three ways to bring data in', 'One model, whichever way data arrives.', [
        {'href': 'PlatIntegrations.dc.html', 'title': 'Native connectors', 'line': 'Meta, Google and TikTok in a few clicks.', 'art': art_logo_grid(ctx, [('M', '#1877F2'), ('G', '#15803D'), ('T', '#111827'), ('+', BRAND), ('CSV', '#0F766E'), ('S', '#0F9D58'), ('in', '#7A8296', 'LinkedIn Ads, coming soon', 0.45), ('DV', '#7A8296', 'DV360, coming soon', 0.45)])},
        {'href': 'PlatIntegrations.dc.html', 'title': 'AI-built connectors', 'line': 'Any other platform, drafted by Cerebro AI.', 'art': art_code(ctx, [('{', '', '', ''), ('  ', '"platform"', ': ', '"Local publisher"'), ('  ', '"cost_local"', ': ', '"spend"'), ('  ', '"imps"', ': ', '"impressions"'), ('}', '', '', '')])},
        {'href': 'PlatIntegrations.dc.html', 'title': 'Sheet upload', 'line': 'CSV, Excel and Google Sheets, mapped by AI.', 'art': art_flow(ctx, [('CSV', '#0F766E', 'CSV'), ('XLS', '#166534', 'Excel'), ('S', '#0F9D58', 'Google Sheets')])}])
    body += section('<div>%s%s</div><div style="margin-top: 48px">%s</div>' % (h2('From any source to every report.'), lead('Five AI steps run on everything that comes in.'), art_pipeline(ctx)), '#F7F8FA')
    body += facts([('3', 'Native connectors live'), ('Any', 'Platform, with AI-built connectors'), ('3', 'Sheet formats, mapped by AI'), ('5', 'AI steps on every source')])
    body += rows([
        {'h': 'Cleaned and standardized by AI.', 'line': 'Fields mapped, rows cleaned, metrics aligned, currency converted.', 'art': art_mapping(ctx, [('Amount spent (PKR)', 'Spend'), ('Impr.', 'Impressions'), ('Link clicks', 'Clicks')])},
        {'h': 'Issues caught before reports.', 'line': 'Missing dates, stale syncs and unconverted spend get flagged.', 'art': art_checks(ctx, 'AI data checks', [(T, 'Data up to date'), (T, 'Metrics aligned'), (F, '2 rows to review')], 'navy', 380)},
        {'h': 'Sales data next to ad spend.', 'line': 'Bring revenue in to see true returns across platforms.', 'art': art_flow(ctx, [('Rs', '#15803D', 'Sales data'), ('M', '#1877F2', 'Meta Ads'), ('G', '#15803D', 'Google Ads')], 'lav', 380)}])
    body += workflow_nav('01')
    body += faq('Questions about data integration', [
        ('Which platforms connect natively?', 'Meta Ads, Google Ads and TikTok Ads today. LinkedIn Ads and DV360 are coming soon.'),
        ('Can we choose which ad accounts are included?', 'Yes. Pick them when you connect, and change them any time.'),
        ('How often does data sync?', '[TBC: confirm the sync schedule]'),
        ('Is access to our ad accounts read-only?', '[TBC: confirm with the product team]'),
        ('Can we push data in with webhooks?', '[TBC: confirm whether REST webhooks are available]')])
    return page(ctx, 'Data integration', body, 6200)

def p_dash(ctx):
    body = hero(ctx, 'Workflow 02 · Dashboards', 'Dashboards your team builds in clicks.', 'Widget-based, editable, and drillable to a single ad.',
                HX.dashboards(ctx))
    body += tabs_band(ctx, 'Build, compare, drill, share.', 'Four things every dashboard does.', [
        {'title': 'Build', 'text': 'Add widgets in clicks.', 'art': art_widgets(ctx, 400)},
        {'title': 'Compare', 'text': 'Every number against last period.', 'art': art_kpis(ctx, [('Spend', 'PKR 5.8M', '↓ 5.2%', '#4B5160'), ('CTR', '1.08%', '↓ 9.0%', '#B91C1C'), ('CPM', 'PKR 147', '↓ 10.2%', '#15803D')], 'lav', 400)},
        {'title': 'Drill', 'text': 'Platform to a single ad.', 'art': art_crumbs(ctx, 400)},
        {'title': 'Share', 'text': 'Client views, nothing else.', 'art': art_rows_card(ctx, 'Client view', ('Client viewer',) + SOFT, [('Client', 'Northwind Foods'), ('Can see', 'Own dashboards'), ('Can edit', 'Nothing')], 'lav', 400)}], DEMO)
    body += rows([
        {'h': 'Budget pacing at a glance.', 'line': 'Spend against plan, so nothing runs over.', 'art': art_pacing(ctx)},
        {'h': 'Every number in context.', 'line': 'Change against the last period, marked better or worse.', 'art': art_kpis(ctx, [('Clicks', '422.1K', '↓ 4.1%', '#B91C1C'), ('Impressions', '39.1M', '↑ 5.5%', '#15803D'), ('CPA', 'PKR 468.81', '↑ 17.0%', '#B91C1C')])},
        {'h': 'Start from a template.', 'line': 'Open a ready-made dashboard, then make it yours.', 'art': art_rows_card(ctx, 'New from template', None, [('Executive overview', 'Template'), ('Executive summary', 'Template'), ('Your own', 'Save any dashboard')], 'navy')}])
    body += workflow_nav('02')
    body += faq('Questions about dashboards', [
        ('Can clients see their own dashboards?', 'Yes. Client viewers see their own dashboards and nothing else.'),
        ('Can we export the data behind a dashboard?', 'Yes, as CSV. Large exports, up to a million rows, run in the background.'),
        ('Can we track budgets?', 'Yes. Budget pacing shows spend against plan for each period.')])
    return page(ctx, 'Dashboards', body, 5600)

def p_obj(ctx):
    body = hero(ctx, 'Workflow 03 · Objective engine', 'Judge every campaign by its own goal.', 'Cerebro groups campaigns into Awareness, Traffic, Leads and Sales, so averages stop misleading.',
                HX.objective(ctx))
    body += rows([
        {'h': 'Four goals, not one blended number.', 'line': 'Every campaign lands in the goal it was built for.', 'art': art_buckets(ctx)},
        {'h': 'Same spend, two verdicts.', 'line': 'Blended CPA makes awareness look wasteful. Its own goal tells the truth.', 'art': art_verdict(ctx)},
        {'h': 'Your goals, or the platform’s.', 'line': 'Filter any view by platform objective or your own client objective.', 'art': art_rows_card(ctx, 'Spend by client objective', None, [('Awareness', 'PKR 3.6M'), ('Traffic', 'PKR 2M'), ('Sales', 'PKR 166K')], 'navy')}]).replace('<section style', '<section id="main" style', 1)
    body += facts([('4', 'Goals every campaign maps to'), ('3', 'Platforms judged the same way'), ('1', 'Fair comparison, at last'), ('0', 'Blended averages that mislead')])
    body += workflow_nav('03')
    body += faq('Questions about the objective engine', [
        ('How are campaigns grouped?', 'Into Awareness, Traffic, Leads and Sales, based on how each campaign was set up.'),
        ('Can we use our own objectives?', 'Yes. Use a client objective alongside the platform’s.'),
        ('Does it work across all platforms?', 'Yes, across Meta Ads, Google Ads and TikTok Ads.')])
    return page(ctx, 'Objective-based reporting', body, 4800)

def p_reports(ctx):
    body = hero(ctx, 'Workflow 04 · Reports', 'Reports that build and send themselves.', 'Custom cuts, scheduled PDFs, and sync to Looker Studio and Sheets.',
                HX.reports(ctx))
    body += three(ctx, 'Build once. Share everywhere.', 'One report, every format your clients use.', [
        {'href': 'PlatReports.dc.html', 'title': 'Report builder', 'line': 'Pick rows and metrics. Save the cut.', 'art': art_pivot(ctx)},
        {'href': 'PlatReports.dc.html', 'title': 'Scheduled PDFs', 'line': 'Sent on your schedule, automatically.', 'art': art_schedule(ctx, 'lav', 280)},
        {'href': 'PlatIntegrations.dc.html', 'title': 'Looker Studio and Sheets', 'line': 'Synced with the reports you build.', 'art': art_logo_grid(ctx, [('LS', '#4285F4', 'Looker Studio'), ('S', '#0F9D58', 'Google Sheets'), ('PDF', '#B91C1C', 'PDF'), ('CSV', '#0F766E', 'CSV')], 'lav', 280, 2, 64)}])
    body += rows([
        {'h': 'Your agency’s brand on every report.', 'line': 'White-label exports carry your logo, not ours.', 'art': art_brand(ctx)},
        {'h': 'Saved cuts for every client.', 'line': 'Build a view once, reuse it across clients.', 'art': art_rows_card(ctx, 'Saved reports', None, [('Platform performance', 'All clients'), ('Meta campaigns', 'Quillmere Textiles'), ('Weekly pacing', '6 clients')])},
        {'h': 'Large exports, no waiting.', 'line': 'Up to a million rows, delivered in the background.', 'art': art_rows_card(ctx, 'CSV export', ('Running',) + SOFT, [('Rows', 'Up to 1,000,000'), ('Format', 'CSV'), ('Delivery', 'In the background')], 'navy')}], '#F7F8FA')
    body += workflow_nav('04')
    body += faq('Questions about reports', [
        ('Which formats can we send?', 'PDF and CSV, plus sync to Looker Studio and Google Sheets.'),
        ('Can reports go out automatically?', 'Yes. Schedule any report as a PDF to the people you choose.'),
        ('Can we put our own logo on reports?', 'Yes. White-label exports carry your agency’s branding.')])
    return page(ctx, 'Reports', body, 5400)

def p_integrations(ctx):
    L, S, A, N = ('Live',) + GOOD, ('Coming soon',) + NEUT, ('AI-built',) + SOFT, ('To confirm',) + WARN
    def it(name, mark, color, group, st, line, op=1):
        return {'name': name, 'mark': mark, 'color': color, 'group': group, 'status': st[0], 'pbg': st[1], 'pfg': st[2], 'line': line, 'op': op}
    items = [it('Meta Ads', 'M', '#1877F2', 'ads', L, 'Ad accounts in Meta Business'), it('Google Ads', 'G', '#15803D', 'ads', L, 'Accounts and manager accounts'),
             it('TikTok Ads', 'T', '#111827', 'ads', L, 'Ad accounts in TikTok Business Center'), it('LinkedIn Ads', 'in', '#7A8296', 'soon', S, 'Upload exports as sheets for now', 0.6),
             it('DV360', 'DV', '#7A8296', 'soon', S, 'Upload exports as sheets for now', 0.6), it('Custom connector', '+', '#4F46E5', 'custom', A, 'Any platform, drafted by Cerebro AI'),
             it('CSV', 'CSV', '#0F766E', 'files', ('Mapped by AI',) + SOFT, 'Exports from any platform'), it('Excel', 'XLS', '#166534', 'files', ('Mapped by AI',) + SOFT, 'Exports from any platform'),
             it('Google Sheets', 'S', '#0F9D58', 'files', ('Mapped by AI',) + SOFT, 'Linked or uploaded sheets'), it('Sales data', 'Rs', '#15803D', 'sales', L, 'Revenue next to ad spend [CONFIRM: sources]'),
             it('Looker Studio', 'LS', '#4285F4', 'out', ('Destination',) + SOFT, 'Reports synced to Looker Studio'), it('REST webhooks', '{}', '#7A8296', 'custom', N, '[CONFIRM: available today?]', 0.6)]
    filters = [{'key': 'all', 'label': 'All'}, {'key': 'ads', 'label': 'Ad platforms'}, {'key': 'files', 'label': 'Files'}, {'key': 'custom', 'label': 'Custom'}, {'key': 'sales', 'label': 'Sales data'}, {'key': 'out', 'label': 'Destinations'}, {'key': 'soon', 'label': 'Coming soon'}]
    body = hero(ctx, 'Integrations', 'Every marketing source, connected.', 'Native connectors, AI-built connectors, sheet upload and sales data.',
                HX.integrations(ctx), ('Browse connectors', '#main'))
    body += directory(ctx, 'Connectors and destinations', 'Filter by type. Click a card for setup docs.', items, filters)
    body += section('<div>%s%s</div><div style="margin-top: 48px">%s</div>' % (h2('From any source to every report.'), lead('Five AI steps run on everything that comes in.'), art_pipeline(ctx)), '#F7F8FA')
    body += workflow_nav(None)
    body += faq('Questions about integrations', [
        ('What if our platform has no native connector?', 'Build one with Cerebro AI, ask our team to build it, or upload its exports as sheets.'),
        ('How often does data sync?', '[TBC: confirm the sync schedule]'),
        ('Is access to our ad accounts read-only?', '[TBC: confirm with the product team]'),
        ('Which sales data sources connect?', '[TBC: confirm the sales and revenue sources]')])
    return page(ctx, 'Integrations', body, 5200)

PAGES = {'PlatFeatures': p_features, 'PlatAsk': p_ask, 'PlatData': p_data, 'PlatDashboards': p_dash, 'PlatObjective': p_obj, 'PlatReports': p_reports, 'PlatIntegrations': p_integrations}

if __name__ == '__main__':
    name = sys.argv[1]
    ctx = Ctx(name.lower())
    html = PAGES[name](ctx)
    assert '—' not in html, 'em dash found'
    open(OUT + name + '.dc.html', 'w', encoding='utf-8').write(html)
    print(name, len(html))
