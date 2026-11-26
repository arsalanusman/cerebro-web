import sys
from lib import *
import heroes as HX

T, F = True, False
OUT = '/mnt/user-data/outputs/artifacts/ba90362e-8eea-449d-8671-5acd11733c7f/project/'
DEMO = 'Demo data for a sample brand.'

def main_id(html):
    return html.replace('<section style', '<section id="main" style', 1)

def p_agencies(ctx):
    body = hero(ctx, 'For marketing agencies', 'Every client, one workspace.', 'Separate data, branded reports, and the right access for every person.',
                HX.agencies(ctx))
    body += main_id(pains('Where agency reporting breaks.', [('Every client is set up differently', 'Platforms, accounts and currencies vary by brand.'), ('Reports rebuilt every month', 'Hours of exporting and pasting, every cycle.'), ('Access is all or nothing', 'Clients should see only their own results.')]))
    body += rows([
        {'h': 'A separate space for every client.', 'line': 'Each client’s data, dashboards and access stay apart.', 'art': art_clients(ctx)},
        {'h': 'Reports with your brand, not ours.', 'line': 'White-label PDFs, sent on your schedule.', 'art': art_brand(ctx)},
        {'h': 'The right access for every person.', 'line': 'Six roles and client-level permissions.', 'art': art_roles(ctx, 'lav')},
        {'h': 'Every client at a glance.', 'line': 'Budget pacing across your whole portfolio.', 'art': art_rows_card(ctx, 'Pacing, this month', None, [('Quillmere Textiles', 'On track'), ('Saffron Bank', 'Ahead'), ('Northwind Foods', 'Behind')], 'navy')}], '#F7F8FA')
    body += chips('Questions agency teams ask Cerebro.', ['Summarize performance for the last 30 days', 'Which client’s CPA rose most this month?', 'Which campaigns are pacing behind?', 'Compare platforms for this client'], '#FFFFFF')
    body += quote_slot()
    body += solutions_nav('agencies')
    body += faq('Agency questions', [
        ('Can each client see only their own data?', 'Yes. Client viewers and client admins see only the clients they are assigned to.'),
        ('Can reports carry our agency’s branding?', 'Yes. White-label exports use your logo, and PDFs go out on your schedule.'),
        ('Can we add a platform with no native connector?', 'Yes. Build one with Cerebro AI, ask our team, or upload exports as sheets.'),
        ('How is pricing set for agencies?', '[TBC: confirm with the commercial team]')])
    return page(ctx, 'Cerebro for agencies', body, 5600)

def p_brands(ctx):
    body = hero(ctx, 'For in-house brand teams', 'One true view of paid media.', 'Real returns from your sales data, budgets on pace, and answers for leadership.',
                HX.brands(ctx))
    body += main_id(pains('Why leadership doubts the numbers.', [('Every platform claims the sale', 'Platform totals add up to more than you sold.'), ('Agencies report differently', 'Numbers never line up across decks.'), ('Questions take days', 'Simple answers wait for the next report.')]))
    body += rows([
        {'h': 'True returns, from your own sales.', 'line': 'Blended ROAS uses the revenue you actually recorded.', 'art': art_roas(ctx)},
        {'h': 'Budgets on pace, across every channel.', 'line': 'Spend against plan, before it runs over.', 'art': art_pacing(ctx)},
        {'h': 'Answers for leadership in seconds.', 'line': 'Ask Cerebro, in plain language.', 'art': art_ask(ctx, 'How much did we spend across channels last month?', 'PKR 5.8M', ('↓ 5.2%',) + NEUT, 'TikTok took 54%, Meta 37% and Google 9%.', 'navy')},
        {'h': 'Every campaign judged by its goal.', 'line': 'No more awareness judged on cost per sale.', 'art': art_verdict(ctx)}], '#F7F8FA')
    body += chips('Questions leadership asks Cerebro.', ['How much did we spend across all channels?', 'Which platform gives the best return?', 'Are we pacing to budget this month?', 'What should we change next month?'], '#FFFFFF')
    body += quote_slot()
    body += solutions_nav('brands')
    body += faq('Brand team questions', [
        ('What is blended ROAS?', 'Revenue from your own sales data divided by total ad spend. It cannot double count the way platform totals do.'),
        ('Which sales data sources connect?', '[TBC: confirm the sales and revenue sources]'),
        ('Can our agency work in Cerebro with us?', '[TBC: confirm with the product team]')])
    return page(ctx, 'Cerebro for brands', body, 5600)

def p_banking(ctx):
    body = hero(ctx, 'Banking and finance', 'Paid media reporting with access you control.', 'Every product line in one view, with roles, client-level permissions and an audit trail.',
                HX.banking(ctx))
    body += main_id(pains('What makes finance reporting hard.', [('Many products, one budget', 'Cards, loans and digital banking each run campaigns.'), ('Strict access', 'Teams and agencies need different views.'), ('Every number must hold up', 'Leadership and audit both ask questions.')]))
    body += rows([
        {'h': 'Every action on the record.', 'line': 'Exports, invitations and role changes are logged.', 'art': art_audit(ctx)},
        {'h': 'Data separated by team and client.', 'line': 'People see only what they are assigned.', 'art': art_roles(ctx, 'lav')},
        {'h': 'Roll up by product line.', 'line': 'Group campaigns into product lines across platforms.', 'art': art_rows_card(ctx, 'Spend by product line', None, [('Cards', 'PKR 2.4M'), ('Personal loans', 'PKR 1.8M'), ('Digital banking', 'PKR 1.6M')], 'navy')}], '#F7F8FA')
    body += chips('Questions finance teams ask Cerebro.', ['Which product line had the highest CPA this month?', 'How did spend split across platforms for cards?', 'Which audiences convert best for digital banking?'], '#FFFFFF')
    body += quote_slot()
    body += solutions_nav('banking')
    body += faq('Finance team questions', [
        ('Is our data encrypted?', 'Yes, at rest and in transit. See the security page for details.'),
        ('Do you have SOC 2?', '[CONFIRM: exact SOC 2 wording, completed (Type I or II) or in progress]'),
        ('Can we see who did what?', 'Yes. The activity log records exports, invitations and role changes.')])
    return page(ctx, 'Cerebro for banking and finance', body, 5000)

def p_telecom(ctx):
    body = hero(ctx, 'Telecom', 'Always-on campaigns, always in view.', 'Hundreds of campaigns across platforms, checked by AI and drillable to a single ad.',
                HX.telecom(ctx))
    body += main_id(pains('What makes telecom reporting hard.', [('High volume', 'Hundreds of campaigns and ads at once.'), ('Offers change weekly', 'Bundles, postpaid and devices compete for budget.'), ('Delays cost money', 'Stale data means late decisions.')]))
    body += rows([
        {'h': 'Problems flagged before they spread.', 'line': 'AI data checks watch every source.', 'art': art_checks(ctx, 'AI data checks', [(T, 'Data up to date'), (T, 'Metrics aligned'), (F, '2 rows to review')], 'navy', 380)},
        {'h': 'Drill from network to a single ad.', 'line': 'Find what moved, fast.', 'art': art_crumbs(ctx)},
        {'h': 'Group campaigns by offer.', 'line': 'Bundles, postpaid and devices, side by side.', 'art': art_rows_card(ctx, 'Spend by offer', None, [('Data bundles', 'PKR 2.2M'), ('Postpaid', 'PKR 1.9M'), ('Devices', 'PKR 1.7M')])}], '#F7F8FA')
    body += chips('Questions telecom teams ask Cerebro.', ['Why did clicks drop on TikTok last week?', 'Which bundle campaigns drove the most conversions?', 'What changed since yesterday?'], '#FFFFFF')
    body += quote_slot()
    body += solutions_nav('telecom')
    body += faq('Telecom team questions', [
        ('How often does data sync?', '[TBC: confirm whether hourly syncs are available]'),
        ('Can we break results down by region?', '[TBC: confirm regional breakdowns]'),
        ('Can we export large volumes?', 'Yes. Exports up to a million rows run in the background.')])
    return page(ctx, 'Cerebro for telecom', body, 5000)

def p_fmcg(ctx):
    body = hero(ctx, 'FMCG', 'Every brand judged by the right goal.', 'Brand-by-brand tracking, with awareness measured on reach, not cost per sale.',
                HX.fmcg(ctx))
    body += main_id(pains('What makes FMCG reporting hard.', [('Mostly awareness', 'Cost per sale says little about reach.'), ('Many brands, one portfolio', 'Each brand runs its own campaigns and agency.'), ('Seasonal peaks', 'Ramadan, Eid and launches move fast.')]))
    body += rows([
        {'h': 'Every brand in one portfolio.', 'line': 'See each brand alone, or all together.', 'art': art_portfolio(ctx)},
        {'h': 'Awareness judged on reach.', 'line': 'Objective normalization across every product.', 'art': art_buckets(ctx)},
        {'h': 'Same spend, two verdicts.', 'line': 'The goal decides the metric, not a blended average.', 'art': art_verdict(ctx)}], '#F7F8FA')
    body += chips('Questions FMCG teams ask Cerebro.', ['Which brand reached the most people last month?', 'What was our CPM by platform for the launch?', 'How often did people see our Ramadan ads?'], '#FFFFFF')
    body += quote_slot()
    body += solutions_nav('fmcg')
    body += faq('FMCG team questions', [
        ('Can each brand have its own agency?', 'Yes. Give each agency access to its own brands only.'),
        ('Which metrics does each goal use?', '[CONFIRM: metrics per goal bucket]'),
        ('Can we compare brands side by side?', 'Yes, in one portfolio view.')])
    return page(ctx, 'Cerebro for FMCG', body, 5000)

def p_ecommerce(ctx):
    body = hero(ctx, 'E-commerce', 'Know what your ads really earn.', 'Blended ROAS from your own sales data, next to what each platform claims.',
                HX.ecommerce(ctx))
    body += main_id(pains('What makes e-commerce reporting hard.', [('Every platform claims the sale', 'Totals overlap and overstate returns.'), ('Thin margins', 'A rising CPA eats profit fast.'), ('Sale seasons move fast', '11.11 and Ramadan need daily reading.')]))
    body += rows([
        {'h': 'Platform ROAS vs blended ROAS.', 'line': 'What platforms claim, against what you sold.', 'art': art_roas(ctx)},
        {'h': 'Find the audiences that sell.', 'line': 'Results by age and gender, in plain language.', 'art': art_ask(ctx, 'Which audience converts best on Meta?', 'Women 25–34', ('PKR 312 CPA',) + GOOD, '21% below the Meta average.', 'navy')},
        {'h': 'Fix what costs too much.', 'line': 'Suggested changes with their likely impact.', 'art': art_ask(ctx, 'How do we bring CPA down?', '+300 to +350', ('conversions',) + SOFT, 'Move PKR 300K to Women 18–34 | Feed, then test for two weeks.', 'lav')}], '#F7F8FA')
    body += chips('Questions e-commerce teams ask Cerebro.', ['What is our blended ROAS this month?', 'Which audience converts best on Meta?', 'What should we change to bring CPA down?'], '#FFFFFF')
    body += quote_slot()
    body += solutions_nav('ecommerce')
    body += faq('E-commerce team questions', [
        ('Which store or sales sources connect?', '[TBC: confirm the sales and revenue sources]'),
        ('Do you remove duplicate transactions?', '[TBC: confirm transaction deduplication]'),
        ('What is blended ROAS?', 'Revenue from your own sales data divided by total ad spend.')])
    return page(ctx, 'Cerebro for e-commerce', body, 5000)

PAGES = {'SolAgencies': p_agencies, 'SolBrands': p_brands, 'IndBanking': p_banking, 'IndTelecom': p_telecom, 'IndFMCG': p_fmcg, 'IndEcommerce': p_ecommerce}

if __name__ == '__main__':
    name = sys.argv[1]
    ctx = Ctx(name.lower())
    html = PAGES[name](ctx)
    assert '—' not in html, 'em dash found'
    open(OUT + name + '.dc.html', 'w', encoding='utf-8').write(html)
    print(name, len(html))
