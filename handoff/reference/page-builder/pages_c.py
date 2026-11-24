import sys
from lib import *
import heroes as HX

T, F = True, False
OUT = '/mnt/user-data/outputs/artifacts/ba90362e-8eea-449d-8671-5acd11733c7f/project/'

def two_col(left, right, bg='#FFFFFF', pad='80px 0 104px', gap=64, align='flex-start'):
    return '<section style="padding: %s; background: %s"><div style="%s; display: flex; gap: %dpx; flex-wrap: wrap; align-items: %s"><div style="flex: 1 1 420px; min-width: 0">%s</div><div style="flex: 1 1 480px; min-width: 0">%s</div></div></section>' % (pad, bg, CONT, gap, align, left, right)

def h1(text):
    return '<h1 style="margin: 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(38px, 4.2vw, 56px); line-height: 1.04; letter-spacing: -0.03em; color: %s">%s</h1>' % (INK, text)

def p_pricing(ctx):
    ctx.state = {'s': 1}
    ctx.extra.append('''      calc: (function () {
        var s = self.state.s, rec = s === 0 ? 0 : (s === 1 ? 1 : 2);
        var names = ['Brand', 'Team', 'Agency'], why = ['One brand, one team, everything you need to start.', 'Several brands, with scheduled reports and pacing.', 'Many clients, with white-label reports and client roles.'];
        var o = { name: names[rec], why: why[rec] };
        o.opts = ['1 brand', '2 to 5', '6 to 20', 'More than 20'].map(function (l, i) { var on = i === s; return { label: l, on: on, bg: on ? '#101426' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3040', bd: on ? '#101426' : '#D5D8E0', pick: function () { self.setState({ s: i }); } }; });
        for (var i = 0; i < 3; i++) { o['bd' + i] = i === rec ? '#4F46E5' : '#E4E7EC'; o['sh' + i] = i === rec ? '0 24px 56px rgba(79,70,229,0.18)' : 'none'; o['r' + i] = i === rec; }
        return o;
      })()''')
    tiers = [('Brand', 'For one brand’s in-house team.', ['Ask Cerebro', 'Native connectors and sheet upload', 'Dashboards and hierarchy reports', 'Objective engine']),
             ('Team', 'For teams running several brands.', ['Everything in Brand', 'Scheduled PDFs', 'Looker Studio and Sheets sync', 'Budget pacing']),
             ('Agency', 'For agencies reporting on many clients.', ['Everything in Team', 'White-label exports', 'Client roles and permissions', 'AI-built connectors'])]
    cards = ''
    for i, (n, l, fs) in enumerate(tiers):
        cards += ('<div style="flex: 1 1 300px; min-width: 0; background: #FFFFFF; border-radius: 24px; border: 2px solid {{calc.bd%d}}; box-shadow: {{calc.sh%d}}; padding: 30px; box-sizing: border-box; display: flex; flex-direction: column; gap: 18px">'
                  '<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px"><span style="font-family: Geist, Inter, sans-serif; font-size: 24px; font-weight: 600; color: %s">%s</span><sc-if value="{{calc.r%d}}" hint-placeholder-val="{{%s}}">%s</sc-if></div>'
                  '<span style="font-size: 15px; color: %s">%s</span>'
                  '<div><span style="font-family: Geist, Inter, sans-serif; font-size: 36px; font-weight: 600; letter-spacing: -0.02em; color: %s">PKR [TBC]</span><span style="font-size: 14px; color: %s"> / month</span></div>%s'
                  '<ul style="margin: 4px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px">%s</ul></div>') % (
            i, i, INK, n, i, 'true' if i == 1 else 'false', badge('Recommended', *SOFT), MUTED, l, INK, MUTED,
            btn('Book a demo', 'primary' if i == 1 else 'secondary', href='PgDemo.dc.html'), ''.join(check_li(f) for f in fs))
    finder = ('<div style="text-align: center"><div style="font-size: 16px; font-weight: 600; color: %s">How many brands or clients do you report on?</div>'
              '<div role="group" aria-label="Number of brands or clients" style="margin-top: 14px; display: inline-flex; gap: 8px; flex-wrap: wrap; justify-content: center">'
              '<sc-for list="{{calc.opts}}" as="o" hint-placeholder-count="4"><button type="button" aria-pressed="{{o.on}}" onClick="{{o.pick}}" style="height: 44px; padding: 0 18px; border-radius: 22px; border: 1px solid {{o.bd}}; background: {{o.bg}}; color: {{o.fg}}; font: inherit; font-size: 14.5px; font-weight: 600; cursor: pointer">{{o.label}}</button></sc-for></div>'
              '<p aria-live="polite" style="margin: 14px 0 0; font-size: 15px; color: %s"><strong style="color: %s">Recommended: {{calc.name}}.</strong> {{calc.why}}</p></div>') % (INK, MUTED, INK)
    body = hero_center('Pricing', 'Plans that grow with your clients.', 'Every plan includes Cerebro AI. Book a demo for a plan built around your team.', False, '88px 0 56px')
    body += '<section id="main" style="padding: 0 0 96px; background: %s"><div style="%s">%s<div style="margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap; align-items: stretch">%s</div><p style="margin: 20px 0 0; text-align: center; font-size: 13.5px; color: #9A3412">[TBC: plan names, prices, currency, limits and which features sit in each plan]</p></div></section>' % (LAV, CONT, finder, cards)
    feats = [('Ask Cerebro', T, T, T), ('Native connectors', T, T, T), ('Sheet upload', T, T, T), ('Sales data', T, T, T), ('Objective engine', T, T, T), ('Dashboards and hierarchy', T, T, T),
             ('Report builder', T, T, T), ('AI data checks', T, T, T), ('Scheduled PDFs', F, T, T), ('Looker Studio and Sheets sync', F, T, T), ('Budget pacing', F, T, T),
             ('AI-built connectors', F, F, T), ('White-label exports', F, F, T), ('Client roles and permissions', F, F, T)]
    def mark(v):
        return ('<span>%s<span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Included</span></span>' % icon(CHECK, 18, BRAND, 2.6)) if v else '<span style="font-size: 13px; color: #9AA0AD">Not included</span>'
    trs = ''.join('<tr><th scope="row" style="text-align: left; padding: 14px 16px; border-top: 1px solid #EEF0F3; font-size: 15px; font-weight: 500; color: %s">%s</th>%s</tr>' % (INK, n, ''.join('<td style="text-align: center; padding: 14px 16px; border-top: 1px solid #EEF0F3">%s</td>' % mark(v) for v in vs)) for n, *vs in feats)
    table = ('<div style="margin-top: 44px; overflow-x: auto; border: 1px solid #E4E7EC; border-radius: 20px"><table style="width: 100%%; min-width: 640px; border-collapse: collapse"><thead><tr><th scope="col" style="text-align: left; padding: 16px; font-size: 13px; font-weight: 500; color: %s; background: #FAFAFC">Feature</th>%s</tr></thead><tbody>%s</tbody></table></div>') % (
        MUTED, ''.join('<th scope="col" style="padding: 16px; font-size: 15px; font-weight: 600; color: %s; background: #FAFAFC">%s</th>' % (INK, n) for n in ['Brand', 'Team', 'Agency']), trs)
    body += section('<div>%s%s</div>%s' % (h2('Compare plans'), lead('Every plan includes Cerebro AI and Ask Cerebro.'), table), '#FFFFFF')
    body += faq('Pricing questions', [
        ('Is there a free trial?', 'No. Book a demo and we’ll set Cerebro up on your own data, so you see real answers first.'),
        ('Which currency do you bill in?', '[TBC: PKR, USD or both]'),
        ('Can we change plans later?', '[TBC: confirm plan changes]'),
        ('Do custom connectors cost extra?', '[TBC: confirm custom connector pricing]')])
    return page(ctx, 'Pricing', body, 3900)

def p_demo(ctx):
    ctx.footer_cta = False
    ctx.state = {'step': 0}
    ctx.extra.append('''      demo: (function () {
        var s = self.state.step;
        return {
          s0: s === 0, s1: s === 1, s2: s === 2, notFirst: s > 0, notLast: s < 2, last: s === 2, count: 'Step ' + (s + 1) + ' of 3',
          steps: ['About you', 'Your setup', 'Your questions'].map(function (l, i) { return { label: l, n: i + 1, bg: i <= s ? '#4F46E5' : '#ECEEF3', fg: i <= s ? '#FFFFFF' : '#5B6170', tc: i === s ? '#101426' : '#6B7180', cur: i === s ? 'step' : 'false' }; }),
          next: function () { self.setState({ step: Math.min(2, s + 1) }); },
          back: function () { self.setState({ step: Math.max(0, s - 1) }); }
        };
      })()''')
    left = ('<p style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: %s">Book a demo</p>%s<p style="margin: 20px 0 0; max-width: 440px; font-size: 18px; line-height: 1.55; color: %s">A personal walkthrough with your platforms and your questions.</p>'
            '<ul style="margin: 28px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px">%s%s%s</ul>'
            '<div style="margin-top: 36px">%s</div>') % (BRAND, h1('See Cerebro on your own campaigns.'), MUTED, check_li('Your platforms connected, or your sheets loaded'), check_li('Ask Cerebro the questions you really have'), check_li('A plan that fits your team'), float_ask('Why did CPA rise?', 'TikTok drove the rise.'))
    steps = ('<ol aria-label="Progress" style="margin: 0; padding: 0; list-style: none; display: flex; gap: 18px; flex-wrap: wrap"><sc-for list="{{demo.steps}}" as="st" hint-placeholder-count="3"><li aria-current="{{st.cur}}" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: {{st.tc}}">'
             '<span style="width: 26px; height: 26px; border-radius: 13px; background: {{st.bg}}; color: {{st.fg}}; font-size: 12.5px; display: inline-flex; align-items: center; justify-content: center">{{st.n}}</span>{{st.label}}</li></sc-for></ol>')
    s0 = '<sc-if value="{{demo.s0}}" hint-placeholder-val="{{true}}"><div style="display: flex; flex-direction: column; gap: 16px">%s%s%s</div></sc-if>' % (field('d-name', 'Full name', 'text', '', 'name'), field('d-email', 'Work email', 'email', 'name@company.com', 'email'), field('d-company', 'Company', 'text', '', 'organization'))
    s1 = '<sc-if value="{{demo.s1}}" hint-placeholder-val="{{false}}"><div style="display: flex; flex-direction: column; gap: 16px">%s%s%s</div></sc-if>' % (select('d-role', 'Your role', ['Marketing leadership', 'Marketing or media team', 'Agency', 'Analyst', 'Other']), checkchips('Platforms you advertise on', ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Other']), select('d-count', 'Brands or clients you report on', ['1', '2 to 5', '6 to 20', 'More than 20']))
    s2 = '<sc-if value="{{demo.s2}}" hint-placeholder-val="{{false}}"><div style="display: flex; flex-direction: column; gap: 16px">%s%s<p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: %s">We use your details only to arrange the demo. See our <a href="PgPrivacy.dc.html">privacy policy</a>.</p></div></sc-if>' % (textarea('d-q', 'What would you like to see?', 'For example: why our CPA rose last month'), select('d-time', 'Best time to talk (PKT)', ['Morning', 'Afternoon', 'Evening']), MUTED)
    nav = ('<div style="margin-top: 24px; display: flex; justify-content: space-between; align-items: center; gap: 12px"><span style="font-size: 13.5px; color: %s">{{demo.count}}</span><div style="display: flex; gap: 10px">'
           '<sc-if value="{{demo.notFirst}}" hint-placeholder-val="{{false}}">%s</sc-if><sc-if value="{{demo.notLast}}" hint-placeholder-val="{{true}}">%s</sc-if><sc-if value="{{demo.last}}" hint-placeholder-val="{{false}}">%s</sc-if></div></div>') % (
        MUTED, btn('Back', 'secondary', '{{demo.back}}'), btn('Continue', 'primary', '{{demo.next}}'), btn('Book my demo', 'primary', href='PgThanks.dc.html'))
    right = '<div style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 24px; padding: 32px; box-shadow: 0 30px 70px rgba(28,26,87,0.10)">%s<div style="margin-top: 28px">%s%s%s</div>%s</div>' % (steps, s0, s1, s2, nav)
    body = two_col(left, right, LAV, '80px 0 104px')
    return page(ctx, 'Book a demo', body, 1900)

def p_thanks(ctx):
    ctx.footer_cta = False
    top = ('<section style="padding: 96px 0 72px; background: %s"><div style="max-width: 760px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; text-align: center">'
           '<span style="width: 72px; height: 72px; border-radius: 36px; background: #DCFCE7; display: inline-flex; align-items: center; justify-content: center">%s</span>'
           '<h1 style="margin: 24px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(38px, 4.2vw, 56px); line-height: 1.04; letter-spacing: -0.03em; color: %s">You’re booked in.</h1>'
           '<p style="margin: 18px auto 0; max-width: 520px; font-size: 19px; line-height: 1.55; color: %s">We’ll email you within one business day to confirm a time. [CONFIRM response time]</p></div></section>') % (LAV, icon(CHECK, 34, '#15803D', 2.6), INK, MUTED)
    prep = [('Have ad account access ready', 'So we can connect your platforms during the call.', 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4'),
            ('Bring three real questions', 'About your own campaigns, not a sample.', 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'),
            ('Invite your team', 'Marketing, media and leadership see it together.', 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z')]
    body = top + cap_grid('Before we meet', 'Three things that make the demo worth your time.', prep, '#FFFFFF')
    reads = ''.join('<a href="%s" style="flex: 1 1 320px; min-width: 0; text-decoration: none; border-radius: 20px; padding: 26px; background: %s; display: flex; flex-direction: column; gap: 10px"><span style="font-size: 13px; font-weight: 600; color: %s">%s</span><span style="font-family: Geist, Inter, sans-serif; font-size: 21px; font-weight: 600; color: %s">%s</span><span style="margin-top: 6px; display: inline-flex; align-items: center; gap: 6px; font-size: 14.5px; font-weight: 600; color: %s">%s%s</span></a>' % (href, bg, k, kick, t, title, k, cta, icon(ARROW, 14)) for href, bg, k, t, kick, title, cta in [
        ('PlatAsk.dc.html', NAVY, '#A5B4FC', '#FFFFFF', 'Cerebro AI', 'See what Ask Cerebro can answer', 'Explore Ask Cerebro'),
        ('PgArticle.dc.html', '#F7F8FA', BRAND, INK, 'From the blog', 'Blended ROAS vs platform ROAS: which number should you trust?', 'Read the article')])
    body += section('<div>%s</div><div style="margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap">%s</div>' % (h2('While you wait'), reads), '#FFFFFF', '24px 0 104px')
    return page(ctx, 'Demo booked', body, 2000)

def p_contact(ctx):
    ctx.state = {'map': False}
    ctx.extra.append("      mapv: { show: !!self.state.map, hide: !self.state.map, open: function () { self.setState({ map: true }); } }")
    methods = [('Email', '<a href="mailto:hello@cerebro.media" style="color: %s; text-decoration: none">hello@cerebro.media</a>' % INK, 'M3 5h18v14H3zM3 6l9 7 9-7'),
               ('Phone', '<a href="tel:+923422732873" style="color: %s; text-decoration: none">+92 342 2732873</a>' % INK, 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z'),
               ('Office', 'The Forum, Block 9 Clifton, Karachi 75600<br><span style="color: #9A3412">[TBC: floor and unit number]</span>', 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'),
               ('Hours', 'Mon – Fri: 9:00 AM – 6:00 PM PKT', 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z')]
    ms = ''.join('<div style="display: flex; gap: 14px; align-items: flex-start"><span style="flex: 0 0 auto; width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center">%s</span><div><div style="font-size: 13px; font-weight: 600; color: %s">%s</div><div style="margin-top: 4px; font-size: 16px; line-height: 1.5; color: %s">%s</div></div></div>' % (icon(d, 20, BRAND, 1.8), MUTED, k, INK, v) for k, v, d in methods)
    left = '<p style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: %s">Contact</p>%s<p style="margin: 20px 0 0; max-width: 440px; font-size: 18px; line-height: 1.55; color: %s">Questions about Cerebro, pricing or a partnership. We reply within one business day.</p><div style="margin-top: 36px; display: flex; flex-direction: column; gap: 22px">%s</div>' % (BRAND, h1('Talk to the team in Karachi.'), MUTED, ms)
    form = '<div style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 24px; padding: 32px; box-shadow: 0 30px 70px rgba(28,26,87,0.10); display: flex; flex-direction: column; gap: 16px">%s%s%s%s%s<div>%s</div><p style="margin: 0; font-size: 13.5px; color: %s">We use your details only to reply. See our <a href="PgPrivacy.dc.html">privacy policy</a>.</p></div>' % (
        field('c-name', 'Full name', 'text', '', 'name'), field('c-email', 'Work email', 'email', 'name@company.com', 'email'), field('c-company', 'Company', 'text', '', 'organization'),
        select('c-topic', 'Topic', ['Sales', 'Support', 'Partnerships', 'Press', 'Other']), textarea('c-msg', 'Message'), btn('Send message', 'primary'), MUTED)
    body = two_col(left, form, LAV, '80px 0 104px')
    mapblock = ('<sc-if value="{{mapv.hide}}" hint-placeholder-val="{{true}}"><div style="height: 360px; border-radius: 24px; background: #F7F8FA; border: 1px solid #E4E7EC; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; text-align: center; padding: 20px">'
                '<span style="font-size: 16px; font-weight: 600; color: %s">The Forum, Block 9 Clifton, Karachi</span><span style="font-size: 14px; color: %s">The map loads only when you ask, to keep this page fast.</span>%s</div></sc-if>'
                '<sc-if value="{{mapv.show}}" hint-placeholder-val="{{false}}">%s</sc-if>') % (INK, MUTED, btn('Show map', 'secondary', '{{mapv.open}}'), photo_slot('Google Map embed of The Forum, Block 9 Clifton loads here', 360))
    body += section('<div>%s</div><div style="margin-top: 40px">%s</div><div style="margin-top: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px">%s%s</div>' % (
        h2('Visit the office'), mapblock, photo_slot('Real photo: building entrance with Cerebro DNano signage'), photo_slot('Real photo: office reception or team at work')), '#FFFFFF')
    return page(ctx, 'Contact', body, 2800)

def p_about(ctx):
    body = hero_center('About', 'We build the AI data engine for paid media.', 'A software team in Karachi helping marketers trust their numbers.', True)
    story = ('<div style="display: flex; gap: 64px; flex-wrap: wrap"><div style="flex: 1 1 360px">%s</div><div style="flex: 1.3 1 480px; display: flex; flex-direction: column; gap: 18px">'
             '<p style="margin: 0; font-size: 19px; line-height: 1.6; color: %s">Every platform reports differently. Teams spent days stitching exports before they could answer a simple question.</p>'
             '<p style="margin: 0; font-size: 19px; line-height: 1.6; color: %s">Cerebro brings every source into one clean model, then lets anyone ask it questions in plain language.</p></div></div>') % (h2('Why we built Cerebro', center=False), TEXT, TEXT)
    body += section(story, '#FFFFFF', '104px 0 64px', 'main')
    body += pains('What we hold ourselves to.', [('Answers with evidence', 'Every number traces back to its source.'), ('Honest about gaps', 'Cerebro says what it cannot see.'), ('Built for real markets', 'PKR, USD and every currency in between.')])
    lead_team = [('Zaayer Merchant', '[TBC: title]'), ('Fatima Hyder', '[TBC: title]'), ('Arshad Ali', '[TBC: title]')]
    tech_team = [('Muhammad Ali Shah', '[TBC: title]'), ('[Name]', 'Senior Designer'), ('Muhammad Irfan', '[TBC: title]'), ('Muhammad Hassan', '[TBC: title]'), ('Nashit', '[TBC: title]')]
    grid = lambda ppl: '<div style="margin-top: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px">%s</div>' % ''.join(person(n, t) for n, t in ppl)
    body += section('<div>%s%s</div><h3 style="margin: 48px 0 0; font-size: 18px; font-weight: 600; color: %s">Leadership</h3>%s<h3 style="margin: 40px 0 0; font-size: 18px; font-weight: 600; color: %s">Product and technology</h3>%s<p style="margin: 20px 0 0; font-size: 13.5px; color: #9A3412">[TBC: titles, real photos, and each person’s consent to appear]</p>' % (
        h2('The team'), lead('The people building Cerebro.'), INK, grid(lead_team), INK, grid(tech_team)), '#F7F8FA')
    cols = [('Shipped', GOOD, ['Ask Cerebro', 'Objective engine', 'White-label exports', 'Budget pacing']), ('In progress', SOFT, ['LinkedIn Ads connector', 'DV360 connector']), ('Exploring', NEUT, ['[TBC: what the team is exploring]'])]
    rm = ''.join('<div style="flex: 1 1 280px; min-width: 0; background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 20px; padding: 24px"><div>%s</div><ul style="margin: 18px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px">%s</ul></div>' % (badge(t, *st), ''.join('<li style="font-size: 15.5px; color: %s; padding: 12px 14px; border-radius: 12px; background: #FAFAFC">%s</li>' % (INK, x) for x in items)) for t, st, items in cols)
    body += section('<div>%s%s</div><div style="margin-top: 44px; display: flex; gap: 16px; flex-wrap: wrap; overflow-x: auto">%s</div>' % (h2('Where we’re going'), lead('No dates, just direction. Coming soon means in progress, not promised.'), rm), '#FFFFFF')
    body += section('<div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: center"><div style="flex: 1 1 340px">%s<p style="margin: 14px 0 0; font-size: 17px; line-height: 1.6; color: %s">The Forum, Block 9 Clifton, Karachi 75600, Pakistan</p>%s</div><div style="flex: 1.3 1 480px">%s</div></div>' % (
        h2('Based in Karachi', center=False), MUTED, textlink('Contact us', 'PgContact.dc.html'), photo_slot('Real photo: the Cerebro DNano office with signage', 320)), '#F7F8FA')
    return page(ctx, 'About', body, 4600)

def p_security(ctx):
    body = hero(ctx, 'Security', 'Your clients’ data, protected.', 'Access you control, encryption everywhere, and a record of every action.',
                HX.security(ctx), ('See what’s in place', '#main'))
    IN = ('In place',) + GOOD; TB = ('To confirm',) + WARN
    inplace = [('Encryption', 'Data encrypted at rest and in transit.', IN), ('Six roles', 'From operations admin to client viewer.', IN), ('Client-level permissions', 'People see only the clients they are assigned.', IN),
               ('Activity log', 'Exports, invitations and role changes recorded.', IN), ('AI data checks', 'Gaps and errors flagged before reports go out.', IN), ('SOC 2', '[CONFIRM: completed (Type I or II) or in progress]', TB)]
    body += section('<div>%s%s</div><div style="margin-top: 44px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px">%s</div>' % (h2('In place today'), lead('The controls every workspace gets.'), ''.join(status_card(*x) for x in inplace)), '#FFFFFF', sid='main')
    body += rows([
        {'h': 'How your data moves.', 'line': 'From your ad platforms, encrypted, to the people you choose.', 'art': art_flow(ctx, [('M', '#1877F2', 'Meta Ads'), ('G', '#15803D', 'Google Ads'), ('T', '#111827', 'TikTok Ads')], 'navy', 380)},
        {'h': 'Access, person by person.', 'line': 'Six roles and client-level permissions.', 'art': art_roles(ctx, 'lav')},
        {'h': 'A record of every action.', 'line': 'Know who exported, invited or changed what.', 'art': art_audit(ctx)}], '#F7F8FA')
    tbc = [('Platform access', 'Read-only access to ad accounts.', TB), ('Hosting', 'Provider and region.', TB), ('Data retention', 'How long data is kept.', TB),
           ('AI models', 'Which provider, and whether data trains models.', TB), ('Sign-in', 'SSO and two-factor sign-in.', TB)]
    body += section('<div>%s%s</div><div style="margin-top: 44px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px">%s</div>' % (h2('To confirm before launch'), lead('Hidden on the live site until the product team confirms each one.'), ''.join(status_card(*x) for x in tbc)), '#FFFFFF')
    body += faq('Security questions', [
        ('How do we delete our data?', 'Disconnect your accounts and follow the steps on the data deletion page.'),
        ('Where is our data stored?', '[TBC: hosting provider and region]'),
        ('How do we report a security issue?', 'Email hello@cerebro.media. [CONFIRM: a dedicated security address]')])
    return page(ctx, 'Security', body, 4800)

PAGES = {'PgPricing': p_pricing, 'PgDemo': p_demo, 'PgThanks': p_thanks, 'PgContact': p_contact, 'PgAbout': p_about, 'PgSecurity': p_security}

if __name__ == '__main__':
    name = sys.argv[1]
    ctx = Ctx(name.lower())
    html = PAGES[name](ctx)
    assert '—' not in html, 'em dash found'
    open(OUT + name + '.dc.html', 'w', encoding='utf-8').write(html)
    print(name, len(html))
