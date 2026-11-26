# Mobile designs at 390px. Same library, mobile layout rules: 24px side padding, stacked sections,
# full-width pill buttons, horizontal scroll rows, details for menus and tables of contents.
import sys, json
from lib import *
import heroes as HX

OUT = '/mnt/user-data/outputs/artifacts/ba90362e-8eea-449d-8671-5acd11733c7f/project/'
MARK_D = '/_blob/43283f03c4d43f04640c058460029561'
WORD_D = '/_blob/e07c3f2e1692e3cb785a530b2aec79eb'
WORD_W = '/_blob/562cc305014b9b81e136709c81004a68'
P = 'padding-left: 24px; padding-right: 24px; box-sizing: border-box'

def z(html, k=0.78):
    """Scale a desktop art tile to the phone width."""
    return '<div style="zoom: %s; width: %.2f%%">%s</div>' % (k, 100.0 / k, html)

def lockup(dark=False):
    return '<span role="img" aria-label="Cerebro DNano" style="display: inline-flex; align-items: center; gap: 7px"><img src="%s" alt="" style="height: 24px; width: auto; display: block"><img src="%s" alt="" style="height: 15px; width: auto; display: block"></span>' % (MARK_W if dark else MARK_D, WORD_W if dark else WORD_D)

def m_header(ctx):
    ctx.state['menu'] = False
    ctx.extra.append("      mnav: { open: !!self.state.menu, closed: !self.state.menu, toggle: function () { self.setState({ menu: !self.state.menu }); }, label: self.state.menu ? 'Close menu' : 'Open menu' }")
    groups = [('Platform', [('Data integration', 'PlatData.dc.html'), ('Dashboards', 'PlatDashboards.dc.html'), ('Objective engine', 'PlatObjective.dc.html'), ('Reports', 'PlatReports.dc.html'), ('All features', 'PlatFeatures.dc.html')]),
              ('Solutions', [('Agencies', 'SolAgencies.dc.html'), ('Brands', 'SolBrands.dc.html'), ('Banking and finance', 'IndBanking.dc.html'), ('Telecom', 'IndTelecom.dc.html'), ('FMCG', 'IndFMCG.dc.html'), ('E-commerce', 'IndEcommerce.dc.html')]),
              ('Resources', [('Blog', 'PgBlog.dc.html'), ('Docs', 'PgDocs.dc.html'), ('FAQ', 'PgFAQ.dc.html'), ('About', 'PgAbout.dc.html'), ('Security', 'PgSecurity.dc.html')])]
    det = ''.join('<details style="border-bottom: 1px solid #EEF0F3"><summary style="min-height: 54px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 17px; font-weight: 600; color: %s">%s%s</summary><div style="padding: 0 0 12px 8px; display: flex; flex-direction: column">%s</div></details>' % (
        INK, g, icon('m6 9 6 6 6-6', 16, MUTED), ''.join('<a href="%s" style="min-height: 44px; display: flex; align-items: center; font-size: 15.5px; color: %s; text-decoration: none">%s</a>' % (h, TEXT, l) for l, h in items)) for g, items in groups)
    plain = ''.join('<a href="%s" style="min-height: 54px; display: flex; align-items: center; border-bottom: 1px solid #EEF0F3; font-size: 17px; font-weight: 600; color: %s; text-decoration: none">%s</a>' % (h, INK, l) for l, h in [('Integrations', 'PlatIntegrations.dc.html'), ('Pricing', 'PgPricing.dc.html'), ('Contact', 'PgContact.dc.html')])
    panel = ('<sc-if value="{{mnav.open}}" hint-placeholder-val="{{false}}"><nav aria-label="Main" style="position: absolute; left: 0; right: 0; top: 64px; z-index: 50; background: #FFFFFF; border-top: 1px solid #EEF0F3; box-shadow: 0 24px 48px rgba(16,20,38,0.14); padding: 16px 24px 28px">'
             '<a href="PlatAsk.dc.html" style="display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 0 14px; border-radius: 20px; background: #EEF0FF; color: #3730A3; text-decoration: none; font-size: 16px; font-weight: 600; margin-bottom: 8px">%sAsk Cerebro</a>%s%s'
             '<a href="PgDemo.dc.html" style="margin-top: 20px; display: flex; align-items: center; justify-content: center; height: 48px; border-radius: 24px; background: %s; color: #FFFFFF; text-decoration: none; font-size: 15px; font-weight: 600">Book a demo</a></nav></sc-if>') % (icon(SPARK, 14), det, plain, BRAND)
    burger = '<sc-if value="{{mnav.closed}}" hint-placeholder-val="{{true}}">%s</sc-if><sc-if value="{{mnav.open}}" hint-placeholder-val="{{false}}">%s</sc-if>' % (icon('M4 7h16M4 12h16M4 17h16', 20, INK), icon('M6 6l12 12M18 6 6 18', 18, INK))
    return ('<header style="position: relative; z-index: 60; background: #FFFFFF; border-bottom: 1px solid #E4E7EC"><div style="height: 64px; display: flex; align-items: center; justify-content: space-between; %s">'
            '<a href="MobHome.dc.html" aria-label="Cerebro DNano home" style="display: flex">%s</a>'
            '<button type="button" aria-label="{{mnav.label}}" aria-expanded="{{mnav.open}}" onClick="{{mnav.toggle}}" style="width: 44px; height: 44px; border-radius: 12px; border: 1px solid #E4E7EC; background: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; cursor: pointer">%s</button></div>%s</header>') % (P, lockup(), burger, panel)

def m_pills(primary=('Book a demo', 'PgDemo.dc.html'), secondary=('See how it works', '#main'), dark=False):
    s1 = 'background: #FFFFFF; color: %s' % NAVY if dark else 'background: %s; color: #FFFFFF' % BRAND
    s2 = 'border: 1px solid rgba(255,255,255,0.4); color: #FFFFFF' if dark else 'background: #FFFFFF; border: 1px solid #D5D8E0; color: %s' % INK
    b = '<a href="%s" style="display: flex; align-items: center; justify-content: center; height: 48px; border-radius: 24px; %s; text-decoration: none; font-size: 15px; font-weight: 600">%s</a>' % (primary[1], s1, primary[0])
    if secondary:
        b += '<a href="%s" style="display: flex; align-items: center; justify-content: center; height: 48px; border-radius: 24px; %s; text-decoration: none; font-size: 15px; font-weight: 600">%s</a>' % (secondary[1], s2, secondary[0])
    return '<div style="margin-top: 26px; display: flex; flex-direction: column; gap: 10px">%s</div>' % b

def m_hero(label, title, sub, art, bg='#FFFFFF', buttons=True, secondary=('See how it works', '#main')):
    lab = '<p style="margin: 0 0 14px; font-size: 13px; font-weight: 600; color: %s">%s</p>' % (BRAND, label) if label else ''
    return ('<section style="padding: 40px 0 48px; background: %s"><div style="%s">%s<h1 style="margin: 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: 36px; line-height: 1.08; letter-spacing: -0.03em; color: %s">%s</h1>'
            '<p style="margin: 16px 0 0; font-size: 17px; line-height: 1.55; color: %s">%s</p>%s%s</div></section>') % (bg, P, lab, INK, title, MUTED, sub, m_pills(secondary=secondary) if buttons else '', ('<div style="margin-top: 32px">%s</div>' % art) if art else '')

def m_h2(t, dark=False):
    return '<h2 style="margin: 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: 28px; line-height: 1.12; letter-spacing: -0.02em; color: %s">%s</h2>' % ('#FFFFFF' if dark else INK, t)

def m_lead(t, dark=False):
    return '<p style="margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: %s">%s</p>' % ('#CDD0F3' if dark else MUTED, t)

def m_sec(inner, bg='#FFFFFF', pad='64px 0', sid=''):
    return '<section%s style="padding: %s; background: %s"><div style="%s">%s</div></section>' % ((' id="%s"' % sid) if sid else '', pad, bg, P, inner)

def m_cards(items):
    return '<div style="margin-top: 32px; display: flex; flex-direction: column; gap: 32px">%s</div>' % ''.join(
        '<a href="%s" style="text-decoration: none; display: flex; flex-direction: column; gap: 14px">%s<div><div style="font-family: Geist, Inter, sans-serif; font-size: 20px; font-weight: 600; color: %s">%s</div><div style="margin-top: 4px; font-size: 15px; line-height: 1.5; color: %s">%s</div></div></a>' % (h, a, INK, t, MUTED, l) for h, a, t, l in items)

def m_facts(items):
    return ('<section aria-label="Facts" style="background: %s; padding: 56px 0"><div style="%s; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 16px">%s</div></section>') % (NAVY, P, ''.join(
        '<div style="border-left: 1px solid rgba(255,255,255,0.18); padding-left: 14px"><div style="font-family: Geist, Inter, sans-serif; font-size: 44px; font-weight: 600; letter-spacing: -0.03em; color: #FFFFFF; line-height: 1">%s</div><div style="margin-top: 10px; font-size: 14px; line-height: 1.4; color: #CDD0F3">%s</div></div>' % (b, l) for b, l in items))

def m_rows(items, bg='#FFFFFF'):
    return '<section style="padding: 64px 0; background: %s"><div style="%s; display: flex; flex-direction: column; gap: 56px">%s</div></section>' % (bg, P, ''.join(
        '<div><h3 style="margin: 0; font-family: Geist, Inter, sans-serif; font-size: 25px; line-height: 1.15; font-weight: 600; letter-spacing: -0.02em; color: %s">%s</h3><p style="margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: %s">%s</p><div style="margin-top: 20px">%s</div></div>' % (INK, r['h'], MUTED, r['line'], z(r['art'])) for r in items))

def m_tabs(ctx, title, sub, tabs, note=''):
    ctx.tabs = len(tabs)
    arts = ''.join('<sc-if value="{{tab.t%d}}" hint-placeholder-val="{{%s}}">%s</sc-if>' % (i, 'true' if i == 0 else 'false', z(t['art'], 0.7)) for i, t in enumerate(tabs))
    chips = ''.join('<button type="button" role="tab" aria-selected="{{tab.s%d}}" onClick="{{tab.p%d}}" style="flex: 0 0 auto; height: 40px; padding: 0 16px; border-radius: 20px; border: 1px solid {{tab.l%d}}; background: transparent; color: {{tab.f%d}}; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer">%s</button>' % (i, i, i, i, t['title']) for i, t in enumerate(tabs))
    return ('<section style="background: %s; padding: 64px 0"><div style="%s">%s%s</div><div role="tablist" aria-label="%s" style="margin-top: 24px; display: flex; gap: 8px; overflow-x: auto; %s">%s</div><div aria-live="polite" style="margin-top: 20px; %s">%s</div>%s</section>') % (
        DEEP, P, m_h2(title, True), m_lead(sub, True), title, P, chips, P, arts, ('<p style="margin: 16px 0 0; text-align: center; font-size: 12.5px; color: #A5B4FC">%s</p>' % note) if note else '')

def m_scroll(cards):
    return '<div style="margin-top: 28px; display: flex; gap: 12px; overflow-x: auto; padding-bottom: 6px">%s</div>' % ''.join(cards)

def m_faq(title, items, bg='#F7F8FA'):
    return m_sec(m_h2(title) + '<div style="margin-top: 24px; display: flex; flex-direction: column; gap: 10px">%s</div>' % ''.join(
        '<details style="background: #FFFFFF; border-radius: 16px; padding: 0 18px"><summary style="min-height: 58px; display: flex; align-items: center; cursor: pointer; font-size: 15.5px; font-weight: 600; color: %s">%s</summary><p style="margin: 0 0 18px; font-size: 15px; line-height: 1.6; color: %s">%s</p></details>' % (INK, q, MUTED, a) for q, a in items), bg)

def m_footer(cta=True):
    band = ''
    if cta:
        band = ('<section style="position: relative; overflow: hidden; background: %s; padding: 64px 0">%s<div style="position: relative; %s">%s%s%s</div></section>') % (
            NAVY, glow('left: 50%; bottom: -260px; margin-left: -260px', 520, 'rgba(165,180,252,0.35)'), P, m_h2('See Cerebro on your own campaigns.', True), m_lead('Book a demo and ask your own data a question.', True), m_pills(('Book a demo', 'PgDemo.dc.html'), ('Talk to sales', 'PgContact.dc.html'), True))
    groups = [('Platform', [('Ask Cerebro', 'PlatAsk.dc.html'), ('Data integration', 'PlatData.dc.html'), ('Dashboards', 'PlatDashboards.dc.html'), ('Reports', 'PlatReports.dc.html'), ('Integrations', 'PlatIntegrations.dc.html')]),
              ('Solutions', [('Agencies', 'SolAgencies.dc.html'), ('Brands', 'SolBrands.dc.html'), ('Banking', 'IndBanking.dc.html'), ('Telecom', 'IndTelecom.dc.html'), ('FMCG', 'IndFMCG.dc.html'), ('E-commerce', 'IndEcommerce.dc.html')]),
              ('Resources', [('Blog', 'PgBlog.dc.html'), ('Docs', 'PgDocs.dc.html'), ('FAQ', 'PgFAQ.dc.html'), ('Security', 'PgSecurity.dc.html')]),
              ('Company', [('About', 'PgAbout.dc.html'), ('Pricing', 'PgPricing.dc.html'), ('Contact', 'PgContact.dc.html'), ('Book a demo', 'PgDemo.dc.html')])]
    cols = ''.join('<div><div style="font-size: 13px; font-weight: 600; color: %s">%s</div><div style="margin-top: 8px; display: flex; flex-direction: column">%s</div></div>' % (INK, g, ''.join('<a href="%s" style="min-height: 36px; display: flex; align-items: center; font-size: 14.5px; color: %s; text-decoration: none">%s</a>' % (h, MUTED, l) for l, h in links)) for g, links in groups)
    legal = ''.join('<a href="%s" style="font-size: 13px; color: %s; text-decoration: none">%s</a>' % (h, MUTED, l) for l, h in [('Privacy policy', 'PgPrivacy.dc.html'), ('Terms of service', 'PgTerms.dc.html'), ('Data deletion', 'PgDeletion.dc.html')])
    foot = ('<footer style="background: #FFFFFF; border-top: 1px solid #E4E7EC; padding: 48px 0 32px"><div style="%s">%s<p style="margin: 14px 0 0; font-size: 14px; line-height: 1.5; color: %s">The AI data engine for paid media reporting.</p>'
            '<div style="margin-top: 32px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 16px">%s</div>'
            '<div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #EEF0F3; font-size: 14px; line-height: 1.7; color: %s"><a href="mailto:hello@cerebro.media" style="color: %s; text-decoration: none">hello@cerebro.media</a><br><a href="tel:+923422732873" style="color: %s; text-decoration: none">+92 342 2732873</a><br>The Forum, Block 9 Clifton, Karachi 75600<br>Mon – Fri: 9:00 AM – 6:00 PM PKT</div>'
            '<div style="margin-top: 24px; display: flex; gap: 16px; flex-wrap: wrap">%s</div><p style="margin: 18px 0 0; font-size: 12.5px; color: #6B7180">© 2026 Cerebro DNano</p></div></footer>') % (P, lockup(), MUTED, cols, TEXT, INK, INK, legal)
    return band + foot

def m_page(ctx, title, body, h, cta=True):
    hdr = m_header(ctx)
    vals = []
    if ctx.tabs:
        vals.append('''      tab: (function () { var o = {}; for (var i = 0; i < %d; i++) { (function (i) { var on = i === self.state.t; o['t' + i] = on; o['s' + i] = on; o['l' + i] = on ? '#FFFFFF' : 'rgba(255,255,255,0.2)'; o['f' + i] = on ? '#FFFFFF' : '#A5B4FC'; o['p' + i] = function () { self.setState({ t: i }); }; })(i); } return o; })()''' % ctx.tabs)
    vals += ctx.extra
    st = {'t': 0}; st.update(ctx.state)
    script = 'class Component extends DCLogic {\n  constructor(props) { super(props); this.state = %s; }\n  renderVals() {\n    var self = this;\n    return {\n%s\n    };\n  }\n}' % (json.dumps(st), ',\n'.join(vals))
    return '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>%s (mobile)</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@500;600;700&amp;family=Geist+Mono:wght@400;500&amp;family=Inter:wght@400;500;600&amp;display=swap">
<style>
body{margin:0}
a{color:#4F46E5}a:hover{color:#4338CA}
</style>
</helmet>
<div style="position: relative; width: 390px; font-family: Inter, system-ui, sans-serif; color: #2B3040; background: #FFFFFF; font-variant-numeric: tabular-nums; overflow-x: hidden">
%s
%s
%s
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":%d}}'>
%s
</script>
</body>
</html>
''' % (title, hdr, body, m_footer(cta), h, script)

# ------------- pages -------------
def mob_home(ctx):
    sig = ('<div style="position: relative; width: 100%%; aspect-ratio: 1 / 1; border-radius: 24px; overflow: hidden; background: %s"><div aria-hidden="true" style="position: absolute; inset: 0; background: radial-gradient(circle at 50%% 50%%, rgba(0,112,194,0.55) 0, rgba(0,112,194,0.16) 30%%, rgba(20,18,68,0) 62%%)"></div>%s'
           '<img src="%s" alt="" style="position: absolute; left: 50%%; top: 50%%; width: 14%%; height: auto; transform: translate(-50%%, -50%%)"></div>'
           '<div style="margin: -40px 16px 0; position: relative">%s</div>') % (DEEP, neural_svg(ctx, DEFAULT_LIT), MARK_W, float_ask('Why did CPA rise?', 'TikTok drove the rise.'))
    body = m_hero('', 'Your AI analyst for every ad platform.', 'Bring in any marketing data. Cerebro AI cleans it, reports on it and answers your questions.', sig)
    body += m_sec('<div style="font-size: 14px; color: %s">Trusted by marketing teams at</div><div style="margin-top: 14px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px">%s</div>' % (MUTED, ''.join('<span style="height: 40px; border-radius: 8px; border: 1px dashed #CDD1DA; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #6B7180">Client logo</span>' for _ in range(6))), '#F7F8FA', '28px 0')
    body += m_sec(m_h2('Every source. One clean model.') + m_lead('Connect a platform, build a connector with AI, or upload a sheet.') + m_cards([
        ('PlatIntegrations.dc.html', z(art_logo_grid(ctx, [('M', '#1877F2'), ('G', '#15803D'), ('T', '#111827'), ('+', BRAND), ('CSV', '#0F766E'), ('S', '#0F9D58'), ('in', '#7A8296', '', 0.45), ('DV', '#7A8296', '', 0.45)])), 'Native connectors', 'Meta, Google and TikTok in a few clicks.'),
        ('PlatIntegrations.dc.html', z(art_code(ctx, [('{', '', '', ''), ('  ', '"platform"', ': ', '"Local publisher"'), ('  ', '"cost_local"', ': ', '"spend"'), ('}', '', '', '')])), 'AI-built connectors', 'Any other platform, drafted by Cerebro AI.'),
        ('PlatIntegrations.dc.html', z(art_flow(ctx, [('CSV', '#0F766E', 'CSV'), ('XLS', '#166534', 'Excel'), ('S', '#0F9D58', 'Google Sheets')])), 'Sheet upload', 'CSV, Excel and Google Sheets, mapped by AI.')]), sid='main')
    body += m_facts([('3', 'Native connectors live'), ('Any', 'Platform, with AI-built connectors'), ('3', 'Sheet formats, mapped by AI'), ('5', 'AI steps on every source')])
    body += m_tabs(ctx, 'Ask Cerebro. Get answers, not exports.', 'Plain questions, answers with the numbers behind them.', [
        {'title': 'Why did it change?', 'art': art_ask(ctx, 'Why did CPA rise last month?', 'PKR 468.81', ('↑ 17%',) + BAD, 'TikTok drove the rise, mostly from an awareness campaign.', 'navy', 400)},
        {'title': 'Who is responding?', 'art': art_ask(ctx, 'Which audience converts best on Meta?', 'Women 25–34', ('PKR 312 CPA',) + GOOD, '21% below the Meta average.', 'navy', 400)},
        {'title': 'What should we change?', 'art': art_ask(ctx, 'How do we bring CPA down?', '+300 to +350', ('conversions',) + SOFT, 'Move PKR 300K to Women 18–34 | Feed, then test for two weeks.', 'navy', 400)},
        {'title': 'What can’t it see?', 'art': art_ask(ctx, 'How many in-store sales did we drive?', 'Not in your data', ('No guessing',) + NEUT, 'I can show online conversions for the same campaigns instead.', 'navy', 400)}], 'Demo data for a sample brand.')
    body += m_rows([
        {'h': 'Judge every campaign by its own goal.', 'line': 'Reach campaigns on CPM, sales campaigns on CPA.', 'art': art_verdict(ctx)},
        {'h': 'Dashboards your team builds in clicks.', 'line': 'Widget-based, editable, and shared with every client.', 'art': art_widgets(ctx)},
        {'h': 'From the big picture to a single ad.', 'line': 'Drill from platform to campaign, ad set and ad.', 'art': art_crumbs(ctx)}])
    sols = ''.join('<a href="%s" style="text-decoration: none; display: flex; gap: 14px; align-items: center; background: #FFFFFF; border-radius: 18px; padding: 18px"><span style="width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto">%s</span><span><span style="display: block; font-size: 17px; font-weight: 600; color: %s">%s</span><span style="display: block; margin-top: 2px; font-size: 14px; color: %s">%s</span></span></a>' % (h, icon(d, 20, BRAND, 1.8), INK, t, MUTED, l) for k, t, l, h, d in SOLS[:3])
    body += m_sec(m_h2('Built for the teams that run paid media.') + '<div style="margin-top: 24px; display: flex; flex-direction: column; gap: 10px">%s</div>' % sols, '#F7F8FA')
    body += m_sec('<p style="margin: 0; font-family: Geist, Inter, sans-serif; font-size: 22px; line-height: 1.35; font-weight: 500; color: #9AA0AD">“[One approved client quote, shown once approved in writing.]”</p><div style="margin-top: 14px; font-size: 13.5px; color: %s">[Name], [Role], [Company]</div>' % MUTED)
    return m_page(ctx, 'Homepage', body, 9400)

def mob_platform(ctx):
    src = [('M', '#1877F2', 'Meta Ads'), ('G', '#15803D', 'Google Ads'), ('T', '#111827', 'TikTok Ads'), ('+', BRAND, 'Custom'), ('↑', BRAND, 'Sheets')]
    pipe = ('<div style="border-radius: 24px; background: %s; padding: 24px; display: flex; flex-direction: column; gap: 14px; align-items: stretch">'
            '<div style="display: flex; flex-wrap: wrap; gap: 8px">%s</div><div style="text-align: center">%s</div>'
            '<div style="border-radius: 16px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); padding: 16px 18px; display: flex; flex-direction: column; gap: 10px">%s%s</div><div style="text-align: center">%s</div>'
            '<div style="display: flex; flex-wrap: wrap; gap: 8px">%s</div></div>') % (
        DEEP, ''.join('<span style="display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 12px 0 5px; border-radius: 17px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.16); font-size: 12.5px; font-weight: 600; color: #FFFFFF">%s%s</span>' % (mono(m, c, 22, 9), l) for m, c, l in src),
        icon('M12 5v14M6 13l6 6 6-6', 20, '#A5B4FC'), ai_label('Cerebro AI engine', True), ''.join('<span style="display: flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 600; color: #FFFFFF"><span style="width: 18px; height: 18px; border-radius: 9px; background: #4F46E5; display: inline-flex; align-items: center; justify-content: center">%s</span>%s</span>' % (icon(CHECK, 10, '#FFFFFF', 3), s) for s in ['Map fields', 'Clean rows', 'Standardize', 'Convert currency', 'Flag issues']),
        icon('M12 5v14M6 13l6 6 6-6', 20, '#A5B4FC'), ''.join('<span style="display: inline-flex; align-items: center; height: 34px; padding: 0 12px; border-radius: 17px; background: #FFFFFF; font-size: 12.5px; font-weight: 600; color: %s">%s</span>' % (INK, o) for o in ['Dashboards', 'Reports', 'Hierarchy', 'Ask Cerebro']))
    body = m_hero('Workflow 01 · Data integration', 'Every source. One clean model.', 'Connect platforms, build connectors with AI, or upload sheets. Cerebro AI prepares it all.', HX.data(ctx))
    body += m_sec(m_h2('Three ways to bring data in') + m_cards([
        ('PlatIntegrations.dc.html', z(art_logo_grid(ctx, [('M', '#1877F2'), ('G', '#15803D'), ('T', '#111827'), ('+', BRAND), ('CSV', '#0F766E'), ('S', '#0F9D58'), ('in', '#7A8296', '', 0.45), ('DV', '#7A8296', '', 0.45)])), 'Native connectors', 'Meta, Google and TikTok in a few clicks.'),
        ('PlatIntegrations.dc.html', z(art_code(ctx, [('{', '', '', ''), ('  ', '"platform"', ': ', '"Local publisher"'), ('  ', '"cost_local"', ': ', '"spend"'), ('}', '', '', '')])), 'AI-built connectors', 'Any other platform, drafted by Cerebro AI.'),
        ('PlatIntegrations.dc.html', z(art_flow(ctx, [('CSV', '#0F766E', 'CSV'), ('XLS', '#166534', 'Excel'), ('S', '#0F9D58', 'Google Sheets')])), 'Sheet upload', 'CSV, Excel and Google Sheets, mapped by AI.')]), sid='main')
    body += m_sec(m_h2('From any source to every report.') + '<div style="margin-top: 24px">%s</div>' % pipe, '#F7F8FA')
    body += m_facts([('3', 'Native connectors live'), ('Any', 'Platform, with AI-built connectors'), ('3', 'Sheet formats, mapped by AI'), ('5', 'AI steps on every source')])
    body += m_rows([
        {'h': 'Cleaned and standardized by AI.', 'line': 'Fields mapped, rows cleaned, metrics aligned, currency converted.', 'art': art_mapping(ctx, [('Amount spent (PKR)', 'Spend'), ('Impr.', 'Impressions'), ('Link clicks', 'Clicks')])},
        {'h': 'Issues caught before reports.', 'line': 'Missing dates, stale syncs and unconverted spend get flagged.', 'art': art_checks(ctx, 'AI data checks', [(True, 'Data up to date'), (True, 'Metrics aligned'), (False, '2 rows to review')], 'navy', 380)}])
    wf = [('Workflow 01', 'Data integration', 'You are here', 'PlatData.dc.html', True), ('Workflow 02', 'Dashboards', 'Built in clicks.', 'PlatDashboards.dc.html', False), ('Workflow 03', 'Objective engine', 'Judged by goal.', 'PlatObjective.dc.html', False), ('Workflow 04', 'Reports', 'Sent automatically.', 'PlatReports.dc.html', False)]
    body += m_sec(m_h2('Explore the platform') + m_scroll(['<a href="%s" style="flex: 0 0 220px; text-decoration: none; border-radius: 18px; padding: 20px; background: %s; border: 1px solid %s; display: flex; flex-direction: column; gap: 8px"><span style="font-size: 12.5px; font-weight: 600; color: %s">%s</span><span style="font-size: 18px; font-weight: 600; color: %s">%s</span><span style="font-size: 13.5px; color: %s">%s</span></a>' % (h, '#F5F6FF' if cur else '#FFFFFF', '#C7CBF9' if cur else '#E4E7EC', BRAND, n, INK, t, MUTED, l) for n, t, l, h, cur in wf]))
    body += m_faq('Questions about data integration', [('Which platforms connect natively?', 'Meta Ads, Google Ads and TikTok Ads today. LinkedIn Ads and DV360 are coming soon.'), ('Can we choose which ad accounts are included?', 'Yes. Pick them when you connect, and change them any time.'), ('How often does data sync?', '[TBC: confirm the sync schedule]')])
    return m_page(ctx, 'Data integration', body, 9600)

def mob_solution(ctx):
    body = m_hero('For marketing agencies', 'Every client, one workspace.', 'Separate data, branded reports, and the right access for every person.', HX.agencies(ctx))
    pains_html = ''.join('<div style="border-top: 2px solid %s; padding-top: 16px"><div style="font-family: Geist, Inter, sans-serif; font-size: 19px; font-weight: 600; color: %s">%s</div><div style="margin-top: 6px; font-size: 15px; line-height: 1.5; color: %s">%s</div></div>' % (INK, INK, t, MUTED, l) for t, l in [('Every client is set up differently', 'Platforms, accounts and currencies vary by brand.'), ('Reports rebuilt every month', 'Hours of exporting and pasting, every cycle.'), ('Access is all or nothing', 'Clients should see only their own results.')])
    body += m_sec(m_h2('Where agency reporting breaks.') + '<div style="margin-top: 28px; display: flex; flex-direction: column; gap: 24px">%s</div>' % pains_html, sid='main')
    body += m_rows([
        {'h': 'A separate space for every client.', 'line': 'Each client’s data, dashboards and access stay apart.', 'art': art_clients(ctx)},
        {'h': 'Reports with your brand, not ours.', 'line': 'White-label PDFs, sent on your schedule.', 'art': art_brand(ctx)},
        {'h': 'The right access for every person.', 'line': 'Six roles and client-level permissions.', 'art': art_roles(ctx, 'lav')}], '#F7F8FA')
    qs = ['Summarize performance for the last 30 days', 'Which client’s CPA rose most this month?', 'Which campaigns are pacing behind?']
    body += m_sec(m_h2('Questions agency teams ask Cerebro.') + '<div style="margin-top: 24px; display: flex; flex-direction: column; gap: 10px">%s</div>' % ''.join('<span style="display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 10px 16px; border-radius: 16px; background: #F7F8FA; font-size: 15px; color: %s">%s%s</span>' % (INK, icon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 16, BRAND, 1.8), q) for q in qs))
    nav = ''.join('<a href="%s" style="text-decoration: none; border-radius: 16px; padding: 16px; background: %s; border: 1px solid %s; display: flex; flex-direction: column; gap: 8px"><span style="width: 36px; height: 36px; border-radius: 10px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center">%s</span><span style="font-size: 14.5px; font-weight: 600; color: %s">%s</span></a>' % (h, '#F5F6FF' if k == 'agencies' else '#FFFFFF', '#C7CBF9' if k == 'agencies' else '#E4E7EC', icon(d, 18, BRAND, 1.8), INK, t) for k, t, l, h, d in SOLS)
    body += m_sec(m_h2('Built for every team') + '<div style="margin-top: 24px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">%s</div>' % nav, '#F7F8FA')
    body += m_faq('Agency questions', [('Can each client see only their own data?', 'Yes. Client viewers and client admins see only the clients they are assigned to.'), ('Can reports carry our agency’s branding?', 'Yes. White-label exports use your logo, and PDFs go out on your schedule.'), ('How is pricing set for agencies?', '[TBC: confirm with the commercial team]')], '#FFFFFF')
    return m_page(ctx, 'Agencies', body, 7800)

def mob_pricing(ctx):
    ctx.state['s'] = 1
    ctx.extra.append('''      calc: (function () {
        var s = self.state.s, rec = s === 0 ? 0 : (s === 1 ? 1 : 2);
        var names = ['Brand', 'Team', 'Agency'], why = ['One brand, one team.', 'Several brands, with scheduled reports and pacing.', 'Many clients, with white-label reports and client roles.'];
        var o = { name: names[rec], why: why[rec] };
        o.opts = ['1 brand', '2 to 5', '6 to 20', '20+'].map(function (l, i) { var on = i === s; return { label: l, on: on, bg: on ? '#101426' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3040', bd: on ? '#101426' : '#D5D8E0', pick: function () { self.setState({ s: i }); } }; });
        for (var i = 0; i < 3; i++) { o['bd' + i] = i === rec ? '#4F46E5' : '#E4E7EC'; o['r' + i] = i === rec; }
        return o;
      })()''')
    tiers = [('Brand', 'For one brand’s in-house team.', ['Ask Cerebro', 'Connectors and sheet upload', 'Dashboards and hierarchy', 'Objective engine']),
             ('Team', 'For teams running several brands.', ['Everything in Brand', 'Scheduled PDFs', 'Looker Studio and Sheets sync', 'Budget pacing']),
             ('Agency', 'For agencies with many clients.', ['Everything in Team', 'White-label exports', 'Client roles and permissions', 'AI-built connectors'])]
    cards = ''.join(('<div style="background: #FFFFFF; border-radius: 22px; border: 2px solid {{calc.bd%d}}; padding: 24px; display: flex; flex-direction: column; gap: 14px"><div style="display: flex; justify-content: space-between; align-items: center"><span style="font-family: Geist, Inter, sans-serif; font-size: 22px; font-weight: 600; color: %s">%s</span><sc-if value="{{calc.r%d}}" hint-placeholder-val="{{%s}}">%s</sc-if></div>'
                     '<span style="font-size: 14.5px; color: %s">%s</span><div><span style="font-family: Geist, Inter, sans-serif; font-size: 30px; font-weight: 600; color: %s">PKR [TBC]</span><span style="font-size: 13.5px; color: %s"> / month</span></div>'
                     '<ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px">%s</ul><a href="PgDemo.dc.html" style="display: flex; align-items: center; justify-content: center; height: 48px; border-radius: 24px; %s; text-decoration: none; font-size: 15px; font-weight: 600">Book a demo</a></div>') % (
        i, INK, n, i, 'true' if i == 1 else 'false', badge('Recommended', *SOFT), MUTED, l, INK, MUTED, ''.join(check_li(f) for f in fs), ('background: %s; color: #FFFFFF' % BRAND) if i == 1 else ('background: #FFFFFF; border: 1px solid #D5D8E0; color: %s' % INK)) for i, (n, l, fs) in enumerate(tiers))
    finder = ('<div style="font-size: 15px; font-weight: 600; color: %s">How many brands or clients?</div><div role="group" aria-label="Number of brands or clients" style="margin-top: 12px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px"><sc-for list="{{calc.opts}}" as="o" hint-placeholder-count="4"><button type="button" aria-pressed="{{o.on}}" onClick="{{o.pick}}" style="height: 44px; border-radius: 22px; border: 1px solid {{o.bd}}; background: {{o.bg}}; color: {{o.fg}}; font: inherit; font-size: 13.5px; font-weight: 600; cursor: pointer">{{o.label}}</button></sc-for></div>'
              '<p aria-live="polite" style="margin: 12px 0 0; font-size: 14.5px; color: %s"><strong style="color: %s">Recommended: {{calc.name}}.</strong> {{calc.why}}</p>') % (INK, MUTED, INK)
    body = m_hero('Pricing', 'Plans that grow with your clients.', 'Every plan includes Cerebro AI. Book a demo for a plan built around your team.', '', LAV, False)
    body += m_sec(finder + '<div style="margin-top: 24px; display: flex; flex-direction: column; gap: 14px">%s</div><p style="margin: 14px 0 0; font-size: 12.5px; color: #9A3412">[TBC: plan names, prices, currency, limits]</p>' % cards, LAV, '0 0 56px', 'main')
    feats = [('Ask Cerebro', 1, 1, 1), ('Scheduled PDFs', 0, 1, 1), ('Looker Studio and Sheets', 0, 1, 1), ('Budget pacing', 0, 1, 1), ('White-label exports', 0, 0, 1), ('Client roles', 0, 0, 1)]
    trs = ''.join('<tr><th scope="row" style="text-align: left; padding: 12px; border-top: 1px solid #EEF0F3; font-size: 14px; font-weight: 500; color: %s; white-space: nowrap">%s</th>%s</tr>' % (INK, n, ''.join('<td style="text-align: center; padding: 12px; border-top: 1px solid #EEF0F3">%s</td>' % (icon(CHECK, 16, BRAND, 2.6) if v else '<span style="font-size: 12px; color: #9AA0AD">No</span>') for v in vs)) for n, *vs in feats)
    table = '<div style="margin-top: 20px; overflow-x: auto; border: 1px solid #E4E7EC; border-radius: 18px"><table style="width: 100%%; min-width: 420px; border-collapse: collapse"><thead><tr><th scope="col" style="text-align: left; padding: 12px; font-size: 12.5px; color: %s; background: #FAFAFC">Feature</th>%s</tr></thead><tbody>%s</tbody></table></div><p style="margin: 8px 0 0; font-size: 12.5px; color: %s">Scroll sideways to see every plan.</p>' % (MUTED, ''.join('<th scope="col" style="padding: 12px; font-size: 13.5px; color: %s; background: #FAFAFC">%s</th>' % (INK, n) for n in ['Brand', 'Team', 'Agency']), trs, MUTED)
    body += m_sec(m_h2('Compare plans') + table)
    body += m_faq('Pricing questions', [('Is there a free trial?', 'No. Book a demo and we’ll set Cerebro up on your own data.'), ('Which currency do you bill in?', '[TBC: PKR, USD or both]')])
    return m_page(ctx, 'Pricing', body, 5600)

def mob_demo(ctx):
    ctx.state['step'] = 0
    ctx.extra.append('''      demo: (function () {
        var s = self.state.step;
        return { s0: s === 0, s1: s === 1, s2: s === 2, notFirst: s > 0, notLast: s < 2, last: s === 2, count: 'Step ' + (s + 1) + ' of 3',
          bars: [0, 1, 2].map(function (i) { return { bg: i <= s ? '#4F46E5' : '#E4E7EC' }; }),
          title: ['About you', 'Your setup', 'Your questions'][s],
          next: function () { self.setState({ step: Math.min(2, s + 1) }); }, back: function () { self.setState({ step: Math.max(0, s - 1) }); } };
      })()''')
    s0 = '<sc-if value="{{demo.s0}}" hint-placeholder-val="{{true}}"><div style="display: flex; flex-direction: column; gap: 14px">%s%s%s</div></sc-if>' % (field('m-name', 'Full name', 'text', '', 'name'), field('m-email', 'Work email', 'email', 'name@company.com', 'email'), field('m-company', 'Company', 'text', '', 'organization'))
    s1 = '<sc-if value="{{demo.s1}}" hint-placeholder-val="{{false}}"><div style="display: flex; flex-direction: column; gap: 14px">%s%s%s</div></sc-if>' % (select('m-role', 'Your role', ['Marketing leadership', 'Marketing or media team', 'Agency', 'Analyst', 'Other']), checkchips('Platforms you advertise on', ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Other']), select('m-count', 'Brands or clients', ['1', '2 to 5', '6 to 20', 'More than 20']))
    s2 = '<sc-if value="{{demo.s2}}" hint-placeholder-val="{{false}}"><div style="display: flex; flex-direction: column; gap: 14px">%s%s<p style="margin: 0; font-size: 13px; line-height: 1.5; color: %s">We use your details only to arrange the demo. See our <a href="PgPrivacy.dc.html">privacy policy</a>.</p></div></sc-if>' % (textarea('m-q', 'What would you like to see?', 'For example: why our CPA rose last month'), select('m-time', 'Best time to talk (PKT)', ['Morning', 'Afternoon', 'Evening']), MUTED)
    full = 'display: flex; align-items: center; justify-content: center; width: 100%; height: 48px; border-radius: 24px; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none; box-sizing: border-box'
    nav = ('<div style="margin-top: 22px; display: flex; flex-direction: column; gap: 10px">'
           '<sc-if value="{{demo.notLast}}" hint-placeholder-val="{{true}}"><button type="button" onClick="{{demo.next}}" style="%s; border: 0; background: %s; color: #FFFFFF">Continue</button></sc-if>'
           '<sc-if value="{{demo.last}}" hint-placeholder-val="{{false}}"><a href="PgThanks.dc.html" style="%s; background: %s; color: #FFFFFF">Book my demo</a></sc-if>'
           '<sc-if value="{{demo.notFirst}}" hint-placeholder-val="{{false}}"><button type="button" onClick="{{demo.back}}" style="%s; border: 1px solid #D5D8E0; background: #FFFFFF; color: %s">Back</button></sc-if></div>') % (full, BRAND, full, BRAND, full, INK)
    prog = '<div style="display: flex; gap: 6px"><sc-for list="{{demo.bars}}" as="b" hint-placeholder-count="3"><span style="flex: 1 1 0; height: 4px; border-radius: 2px; background: {{b.bg}}"></span></sc-for></div><div style="margin-top: 12px; display: flex; justify-content: space-between; font-size: 13px"><span style="font-weight: 600; color: %s">{{demo.title}}</span><span style="color: %s">{{demo.count}}</span></div>' % (INK, MUTED)
    form = '<div style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 22px; padding: 22px; box-shadow: 0 20px 48px rgba(28,26,87,0.08)">%s<div style="margin-top: 20px">%s%s%s</div>%s</div>' % (prog, s0, s1, s2, nav)
    body = m_hero('Book a demo', 'See Cerebro on your own campaigns.', 'A personal walkthrough with your platforms and your questions.', '', LAV, False)
    body += m_sec(form, LAV, '0 0 56px', 'main')
    return m_page(ctx, 'Book a demo', body, 1900, False)

def mob_article(ctx):
    secs = [('h2', 'Why platform totals never add up', 'why'), ('p', 'Meta, Google and TikTok each measure conversions with their own attribution windows and models. When one customer sees ads on two platforms, both can count the same sale.'),
            ('figure', z(art_roas(ctx, 'lav', 360)), 'Demo data: platforms claim PKR 22.5M, while sales data shows PKR 14.5M.'),
            ('h2', 'What blended ROAS measures', 'blended'), ('p', 'Blended ROAS divides the revenue you actually recorded by your total ad spend across every platform.'),
            ('callout', 'The formula', 'Blended ROAS = total recorded revenue ÷ total ad spend, across all platforms.', 'info'),
            ('h2', 'How to report both, honestly', 'report'), ('ol', ['Lead with blended ROAS for budget decisions.', 'Show platform ROAS beside it, labeled as the platform’s claim.', 'Explain the gap in one sentence, every time.'])]
    head = ('<section style="padding: 32px 0 36px; background: %s"><div style="%s"><a href="PgBlog.dc.html" style="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 14px; font-weight: 600; text-decoration: none">%sAll articles</a>'
            '<p style="margin: 14px 0 0; font-size: 13px; font-weight: 600; color: %s">Attribution</p><h1 style="margin: 10px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: 30px; line-height: 1.12; letter-spacing: -0.025em; color: %s">Blended ROAS vs platform ROAS: which number should you trust?</h1>'
            '<p style="margin: 14px 0 0; font-size: 17px; line-height: 1.55; color: %s">Every platform claims credit for the same sale. Here’s how to report both numbers honestly.</p>'
            '<div style="margin-top: 18px; font-size: 13.5px; color: %s"><strong style="color: %s">[Name]</strong>, [Role] · 6 min read</div></div></section>') % (LAV, P, icon('M19 12H5M11 18l-6-6 6-6', 14), BRAND, INK, MUTED, MUTED, INK)
    tocd = '<details style="border: 1px solid #E4E7EC; border-radius: 14px; padding: 0 16px"><summary style="min-height: 52px; display: flex; align-items: center; cursor: pointer; font-size: 15px; font-weight: 600; color: %s">On this page</summary><div style="padding-bottom: 10px">%s</div></details>' % (INK, ''.join('<a href="#%s" style="display: block; min-height: 40px; line-height: 40px; font-size: 14.5px; color: %s; text-decoration: none">%s</a>' % (b[2], MUTED, b[1]) for b in secs if b[0] == 'h2'))
    body = head + '<div style="padding: 24px 24px 0">%s</div>' % z(art_rows_card(ctx, 'Return on ad spend, last 30 days', ('Demo data',) + NEUT, [('Platform ROAS (claimed)', '3.9x'), ('Blended ROAS (from sales)', '2.5x'), ('Total ad spend', 'PKR 5.8M')], 'navy', 380))
    body += m_sec(tocd + prose(secs).replace('font-size: 17.5px', 'font-size: 17px').replace('font-size: 28px; line-height: 1.2', 'font-size: 24px; line-height: 1.2'), '#FFFFFF', '28px 0 48px')
    body += m_sec(m_h2('Keep reading') + m_cards([('PgArticle2.dc.html', z(art_verdict(ctx, 300)), 'Understanding objective-based ad reporting', '5 min read')]), '#F7F8FA')
    return m_page(ctx, 'Article', body, 5400)

def mob_docs(ctx):
    ctx.state['helped'] = ''
    ctx.extra.append("      help: { ask: self.state.helped === '', done: self.state.helped !== '', yes: function () { self.setState({ helped: 'yes' }); }, no: function () { self.setState({ helped: 'no' }); } }")
    chapters = ['Getting started', 'Workspace and clients', 'Native connectors', 'AI-built connectors', 'Sheet upload', 'Sales data', 'Dashboards', 'Reports and exports', 'Objective engine', 'Ask Cerebro', 'Roles and access', 'Security and data']
    chap = '<details style="border: 1px solid #E4E7EC; border-radius: 14px; padding: 0 16px"><summary style="min-height: 52px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 15px; font-weight: 600; color: %s">Chapters%s</summary><div style="padding-bottom: 10px">%s</div></details>' % (INK, icon('m6 9 6 6 6-6', 16, MUTED), ''.join('<a href="%s"%s style="display: block; min-height: 40px; line-height: 40px; padding: 0 10px; border-radius: 8px; font-size: 14.5px; text-decoration: none; background: %s; color: %s">%s</a>' % ('MobDocs.dc.html' if i == 0 else 'PgDocs.dc.html', ' aria-current="page"' if i == 0 else '', '#EEF0FF' if i == 0 else 'transparent', '#3730A3' if i == 0 else TEXT, c) for i, c in enumerate(chapters)))
    secs = [('h2', 'Before you begin', 'before'), ('p', 'Cerebro accounts are set up with our team after a demo. You’ll receive an email invitation.'),
            ('h2', '1. Accept your invitation', 'invite'), ('p', 'Open the invitation email and set your password. <span style="color: #9A3412">[CONFIRM: sign-in method]</span>'),
            ('h2', '2. Add a client', 'client'), ('p', 'Each brand you report on is a client. Add its name and reporting currency.'),
            ('h2', '3. Connect a platform', 'connect'), ('p', 'Open Connections, choose a platform, sign in, and pick the ad accounts to include.'),
            ('figure', photo_slot('[Screenshot from the product: the Connections page]', 220), 'Connections shows each platform and how recent its data is.'),
            ('h2', '4. Ask your first question', 'ask'), ('code', 'Summarize performance for the last 30 days')]
    helpful = ('<div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #E4E7EC"><sc-if value="{{help.ask}}" hint-placeholder-val="{{true}}"><div style="font-size: 15px; font-weight: 600; color: %s">Was this page helpful?</div><div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px">%s%s</div></sc-if>'
               '<sc-if value="{{help.done}}" hint-placeholder-val="{{false}}"><p role="status" style="margin: 0; font-size: 15px; color: #166534">Thanks for the feedback.</p></sc-if>'
               '<a href="PgDocs.dc.html" style="margin-top: 24px; display: flex; flex-direction: column; gap: 4px; text-decoration: none; border: 1px solid #E4E7EC; border-radius: 16px; padding: 16px 18px"><span style="font-size: 13px; color: %s">Next</span><span style="font-size: 16px; font-weight: 600; color: %s">Workspace and clients</span></a></div>') % (INK, btn('Yes', 'secondary', '{{help.yes}}'), btn('No', 'secondary', '{{help.no}}'), MUTED, INK)
    main = ('%s<p style="margin: 28px 0 0; font-size: 13px; font-weight: 600; color: %s">Docs · Getting started</p><h1 style="margin: 10px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: 32px; line-height: 1.1; letter-spacing: -0.025em; color: %s">Getting started</h1>'
            '<p style="margin: 12px 0 0; font-size: 17px; line-height: 1.55; color: %s">Set up your workspace, connect a platform and ask your first question.</p>%s%s') % (chap, BRAND, INK, MUTED, prose(secs).replace('font-size: 17.5px', 'font-size: 16.5px').replace('font-size: 28px; line-height: 1.2', 'font-size: 22px; line-height: 1.2'), helpful)
    body = m_sec(main, '#FFFFFF', '24px 0 56px')
    return m_page(ctx, 'Docs chapter', body, 3200, False)

PAGES = {'MobHome': mob_home, 'MobPlatform': mob_platform, 'MobSolution': mob_solution, 'MobPricing': mob_pricing, 'MobDemo': mob_demo, 'MobArticle': mob_article, 'MobDocs': mob_docs}

if __name__ == '__main__':
    for name in sys.argv[1:]:
        ctx = Ctx(name.lower())
        html = PAGES[name](ctx)
        assert '—' not in html, 'em dash in ' + name
        open(OUT + name + '.dc.html', 'w', encoding='utf-8').write(html)
        print(name, len(html))
