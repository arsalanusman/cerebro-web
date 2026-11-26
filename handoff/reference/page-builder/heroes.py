# Page-specific hero art. One idea per page. Pure SVG (viewBox 560), so it scales cleanly.
import math
from lib import MARK_W, INK, TEXT, MUTED, BRAND, NAVY, DEEP, LAV, SPARK, CHECK

FONT = 'Inter, system-ui, sans-serif'
HEAD = 'Geist, Inter, sans-serif'

def wrap(ctx, kind, label, body, mark=None):
    sid = ctx.uid('sh')
    gid = ctx.uid('bg')
    dark = kind == 'navy'
    bg = DEEP if dark else LAV
    glow = ('radial-gradient(circle at 50% 50%, rgba(0,112,194,0.5) 0, rgba(0,112,194,0.14) 32%, rgba(20,18,68,0) 64%)' if dark
            else 'radial-gradient(circle at 85% 12%, rgba(165,180,252,0.75) 0, rgba(165,180,252,0) 46%)')
    flt = ('<defs><filter id="%s" x="-30%%" y="-30%%" width="160%%" height="180%%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="%s" flood-opacity="%s"></feDropShadow></filter>'
           '<radialGradient id="%s" cx="40%%" cy="32%%" r="78%%"><stop offset="0" stop-color="#6CC0F5"></stop><stop offset="0.45" stop-color="#0070C2"></stop><stop offset="1" stop-color="#022771"></stop></radialGradient></defs>') % (sid, '#05041E' if dark else '#1C1A57', '0.45' if dark else '0.16', gid)
    body = body.replace('{SH}', sid).replace('{BG}', gid)
    m = ''
    if mark:
        m = '<img src="%s" alt="" style="position: absolute; left: %s%%; top: %s%%; width: %s%%; height: auto; transform: translate(-50%%, -50%%)">' % (MARK_W, mark[0], mark[1], mark[2])
    dots = ''
    if not dark:
        pid = ctx.uid('hd')
        dots = '<defs><pattern id="%s" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#C7CBF9"></circle></pattern></defs><rect width="560" height="560" fill="url(#%s)" opacity="0.55"></rect>' % (pid, pid)
    return ('<div style="flex: 1 1 480px; max-width: 560px; position: relative"><div style="position: relative; width: 100%%; aspect-ratio: 1 / 1; border-radius: 28px; overflow: hidden; background: %s">'
            '<div aria-hidden="true" style="position: absolute; inset: 0; background: %s"></div>'
            '<svg role="img" aria-label="%s" viewBox="0 0 560 560" style="position: absolute; inset: 0; width: 100%%; height: 100%%">%s%s%s</svg>%s</div></div>') % (bg, glow, label, flt, dots, body, m)

def t(x, y, s, size=14, weight=500, color=INK, anchor='start', family=FONT):
    return '<text x="%s" y="%s" font-family="%s" font-size="%s" font-weight="%s" fill="%s" text-anchor="%s">%s</text>' % (x, y, family, size, weight, color, anchor, s)

def rect(x, y, w, h, rx=16, fill='#FFFFFF', shadow=True, extra=''):
    return '<rect x="%s" y="%s" width="%s" height="%s" rx="%s" fill="%s"%s%s></rect>' % (x, y, w, h, rx, fill, ' filter="url(#{SH})"' if shadow else '', extra)

def ic(x, y, d, size=24, color=BRAND, sw=1.8):
    s = size / 24.0
    return '<g transform="translate(%s %s) scale(%s)"><path d="%s" fill="none" stroke="%s" stroke-width="%s" stroke-linecap="round" stroke-linejoin="round"></path></g>' % (x, y, s, d, color, sw)

def mono(cx, cy, r, mark, color, fs=13):
    return '<circle cx="%s" cy="%s" r="%s" fill="%s"></circle>' % (cx, cy, r, color) + t(cx, cy + fs * 0.36, mark, fs, 700, '#FFFFFF', 'middle')

def chip(x, y, w, h, label, bg='#FFFFFF', fg=INK, size=14, weight=600, shadow=True, stroke=None):
    st = ' stroke="%s" stroke-width="1"' % stroke if stroke else ''
    return rect(x, y, w, h, h / 2, bg, shadow, st) + t(x + w / 2, y + h / 2 + size * 0.36, label, size, weight, fg, 'middle')

def node(cx, cy, r):
    return '<circle cx="%s" cy="%s" r="%s" fill="rgba(0,112,194,0.12)"></circle><circle cx="%s" cy="%s" r="%s" fill="url(#{BG})"></circle>' % (cx, cy, r + 14, cx, cy, r)

ICONS = {
    'plug': 'M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z', 'clean': 'M4 6h16M4 12h16M4 18h16M8 4v4M16 10v4M11 16v4',
    'ask': 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 'dash': 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
    'report': 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h6', 'target': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    'pace': 'M22 12h-4l-3 9L9 3l-3 9H2', 'export': 'M12 4v12M7 11l5 5 5-5M4 20h16', 'lock': 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
    'user': 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'clock': 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
    'shield': 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z', 'check': CHECK, 'send': 'M5 12h14M13 6l6 6-6 6', 'plus': 'M12 5v14M5 12h14',
}

# 1. /features: a capability map around the mark
def features(ctx):
    tiles = [('plug', 'Connect'), ('clean', 'Clean'), ('ask', 'Ask'), ('target', 'Goals'), None, ('dash', 'Dashboards'), ('pace', 'Pacing'), ('report', 'Reports'), ('export', 'Export')]
    b = ''
    for i, tl in enumerate(tiles):
        x = 64 + (i % 3) * 152; y = 64 + (i // 3) * 152
        if tl is None:
            b += node(x + 64, y + 64, 56)
            continue
        b += rect(x, y, 128, 128, 26, '#FFFFFF' if i % 2 == 0 else '#F5F6FF')
        b += '<rect x="%s" y="%s" width="52" height="52" rx="14" fill="#EEF0FF"></rect>' % (x + 38, y + 24) + ic(x + 50, y + 36, ICONS[tl[0]], 28)
        b += t(x + 64, y + 104, tl[1], 14, 600, INK, 'middle')
    return wrap(ctx, 'lav', 'Cerebro capabilities arranged around the Cerebro mark: connect, clean, ask, goals, dashboards, pacing, reports and export', b, (50, 50, 13))

# 2. /ask-cerebro: one calm conversation
def ask(ctx):
    bars = [('Women 25–34', 0.92, '#4F46E5'), ('Women 18–24', 0.7, '#8B9AE8'), ('Men 25–34', 0.55, '#C7CBF9'), ('Men 18–24', 0.38, '#E0E3FF')]
    b = rect(176, 84, 320, 58, 20) + t(198, 120, 'Which audience converts best?', 16, 500)
    b += rect(64, 172, 380, 232, 22)
    b += ic(88, 194, SPARK, 20, BRAND, 2) + t(116, 210, 'Ask Cerebro', 14, 600, BRAND)
    b += t(88, 254, 'Women 25–34', 28, 600, INK, 'start', HEAD)
    b += chip(300, 232, 120, 30, 'PKR 312 CPA', '#DCFCE7', '#166534', 13, 600, False)
    for i, (lab, f, c) in enumerate(bars):
        y = 280 + i * 30
        b += t(88, y + 13, lab, 12.5, 500, MUTED) + '<rect x="196" y="%s" width="%s" height="14" rx="7" fill="%s"></rect>' % (y + 2, int(220 * f), c)
    b += '<rect x="64" y="440" width="432" height="64" rx="32" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)"></rect>'
    b += ic(88, 460, SPARK, 22, '#A5B4FC', 2) + t(122, 478, 'Ask anything about your data', 16, 500, '#CDD0F3')
    b += '<circle cx="466" cy="472" r="20" fill="#FFFFFF"></circle>' + ic(456, 462, ICONS['send'], 20, NAVY, 2.2)
    return wrap(ctx, 'navy', 'Ask Cerebro answering which audience converts best, with a bar chart and a question box', b)

# 3. /platform/data-integration: sources in, outputs out
def data(ctx):
    src = [('M', '#1877F2', 'Meta Ads'), ('G', '#15803D', 'Google Ads'), ('T', '#111827', 'TikTok Ads'), ('↑', BRAND, 'Sheets'), ('+', BRAND, 'Custom')]
    outs = ['Dashboards', 'Reports', 'Ask Cerebro']
    b = ''
    for i, (m, c, lab) in enumerate(src):
        y = 112 + i * 70
        b += '<path d="M190 %d C 226 %d, 214 280, 222 280" fill="none" stroke="#A5B4FC" stroke-width="1.8" stroke-dasharray="4 6"></path>' % (y + 22, y + 22)
    for i, lab in enumerate(outs):
        y = 192 + i * 70
        b += '<path d="M338 280 C 352 280, 350 %d, 380 %d" fill="none" stroke="#4F46E5" stroke-width="1.8"></path>' % (y + 22, y + 22)
    for i, (m, c, lab) in enumerate(src):
        y = 112 + i * 70
        b += rect(36, y, 154, 44, 22) + mono(60, y + 22, 14, m, c, 12) + t(84, y + 27, lab, 14, 600)
    b += node(280, 280, 58)
    for i, lab in enumerate(outs):
        y = 192 + i * 70
        b += chip(380, y, 144, 44, lab, BRAND, '#FFFFFF', 14, 600)
    return wrap(ctx, 'lav', 'Meta, Google, TikTok, sheets and custom sources flowing into Cerebro and out to dashboards, reports and Ask Cerebro', b, (50, 50, 12))

# 4. /platform/dashboards: a widget collage
def dashboards(ctx):
    b = rect(48, 160, 340, 232, 22)
    b += t(72, 196, 'Spend trend', 15, 600)
    pts = [178, 190, 175, 186, 195, 165, 172, 168, 176, 160, 180, 300, 220, 295, 320, 345, 330, 312]
    line = ' '.join('%d,%d' % (72 + i * 17, 370 - (v - 150) * 0.62) for i, v in enumerate(pts))
    b += '<line x1="72" y1="370" x2="364" y2="370" stroke="#EEF0F3"></line><polyline points="%s" fill="none" stroke="#2E2A82" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></polyline>' % line
    b += rect(304, 72, 208, 116, 20) + t(326, 106, 'CPA', 14, 500, MUTED) + t(326, 146, 'PKR 468.81', 26, 600, INK, 'start', HEAD) + chip(326, 158, 70, 22, '↑ 17%', '#FEE2E2', '#991B1B', 12, 600, False)
    b += rect(336, 330, 184, 176, 22) + t(358, 362, 'Platform mix', 14, 600)
    circ = 2 * math.pi * 40
    segs = [(0.54, '#4F46E5'), (0.37, '#6B7FE8'), (0.09, '#A5B4FC')]; off = 0
    for f, c in segs:
        b += '<circle cx="428" cy="434" r="40" fill="none" stroke="%s" stroke-width="16" stroke-dasharray="%.1f %.1f" stroke-dashoffset="%.1f" transform="rotate(-90 428 434)"></circle>' % (c, f * circ, circ, -off * circ)
        off += f
    b += chip(60, 432, 176, 50, '+  Add widget', BRAND, '#FFFFFF', 15, 600)
    return wrap(ctx, 'lav', 'A Cerebro dashboard collage: spend trend, CPA card, platform mix donut and an add widget button', b)

# 5. /platform/objective-reporting: four goals in orbit
def objective(ctx):
    b = ''
    for r, op in [(110, 0.18), (170, 0.13), (230, 0.09)]:
        b += '<circle cx="280" cy="280" r="%d" fill="none" stroke="rgba(255,255,255,%s)" stroke-width="1.4"></circle>' % (r, op)
    goals = [('Awareness', 'CPM', 230, -42, '#6CC0F5', 'below'), ('Traffic', 'CPC', 170, 205, '#A5B4FC', 'below'), ('Leads', 'CPL', 230, 128, '#C7D2FE', 'above'), ('Sales', 'CPA', 110, 40, '#FFFFFF', 'below')]
    for name, met, r, ang, col, place in goals:
        a = math.radians(ang); x = 280 + r * math.cos(a); y = 280 + r * math.sin(a)
        b += '<circle cx="%.1f" cy="%.1f" r="22" fill="%s" opacity="0.18"></circle><circle cx="%.1f" cy="%.1f" r="11" fill="%s"></circle>' % (x, y, col, x, y, col)
        px = min(max(x - 64, 16), 416); py = y + 22 if place == 'below' else y - 66
        b += rect(px, py, 128, 44, 22) + t(px + 64, py + 20, name, 13.5, 600, INK, 'middle') + t(px + 64, py + 36, 'judged on ' + met, 11.5, 500, MUTED, 'middle')
    b += node(280, 280, 52)
    return wrap(ctx, 'navy', 'Four campaign goals orbiting Cerebro: Awareness judged on CPM, Traffic on CPC, Leads on CPL and Sales on CPA', b, (50, 50, 11))

# 6. /platform/reports: a fanned branded report with schedule and destinations
def reports(ctx):
    b = '<g transform="rotate(-8 280 280)">%s</g><g transform="rotate(7 280 280)">%s</g>' % (rect(150, 104, 260, 340, 18, '#E8EAF7'), rect(150, 104, 260, 340, 18, '#F1F2FF'))
    b += rect(150, 96, 260, 350, 18)
    b += '<rect x="174" y="120" width="96" height="26" rx="6" fill="none" stroke="#C9CDD6" stroke-dasharray="4 4"></rect>' + t(222, 137, 'Your logo', 11, 500, MUTED, 'middle')
    b += t(174, 182, 'Monthly report', 17, 600, INK, 'start', HEAD) + t(174, 202, 'Quillmere Textiles', 12.5, 500, MUTED)
    for i in range(3):
        b += '<rect x="%d" y="220" width="64" height="48" rx="10" fill="#EEF0FF"></rect>' % (174 + i * 74)
    for i, hgt in enumerate([60, 92, 74, 120, 102, 136]):
        b += '<rect x="%d" y="%d" width="22" height="%d" rx="5" fill="%s"></rect>' % (182 + i * 34, 420 - hgt, hgt, '#4F46E5' if i == 5 else '#C7CBF9')
    b += '<circle cx="410" cy="100" r="30" fill="#B91C1C"></circle>' + t(410, 105, 'PDF', 13, 700, '#FFFFFF', 'middle')
    b += rect(40, 452, 204, 46, 23) + ic(58, 463, ICONS['clock'], 22, BRAND, 2) + t(88, 481, 'Every Monday, 9:00', 14, 600)
    b += chip(300, 452, 128, 46, 'Looker Studio', '#FFFFFF', INK, 13.5) + chip(436, 452, 92, 46, 'Sheets', '#FFFFFF', INK, 13.5)
    return wrap(ctx, 'lav', 'A branded monthly PDF report, scheduled every Monday and synced to Looker Studio and Sheets', b)

# 7. /integrations: the connector wall
def integrations(ctx):
    cells = [('M', '#1877F2', 1), ('G', '#15803D', 1), ('T', '#111827', 1), ('in', '#7A8296', 0.45), ('CSV', '#0F766E', 1), None, None, ('XLS', '#166534', 1), ('S', '#0F9D58', 1), None, None, ('DV', '#7A8296', 0.45), ('LS', '#4285F4', 1), ('✦', BRAND, 1), ('+', BRAND, 1), ('PDF', '#B91C1C', 1)]
    b = ''
    for i, c in enumerate(cells):
        if c is None: continue
        x = 66 + (i % 4) * 112; y = 66 + (i // 4) * 112
        b += '<g opacity="%s">%s%s</g>' % (c[2], rect(x, y, 92, 92, 22), mono(x + 46, y + 46, 22, c[0], c[1], 12 if len(c[0]) > 2 else 14))
    b += '<rect x="178" y="178" width="204" height="204" rx="40" fill="url(#{BG})" filter="url(#{SH})"></rect>'
    return wrap(ctx, 'lav', 'A wall of connectors around the Cerebro mark: Meta, Google, TikTok, sheets, Looker Studio, custom and AI-built, with LinkedIn and DV360 coming soon', b, (50, 50, 17))

# 8. /solutions/agencies: one workspace per client
def agencies(ctx):
    clients = [('KW', '#0E7490', 'Kohistan Water'), ('NF', '#15803D', 'Northwind Foods'), ('SB', '#B45309', 'Saffron Bank'), ('QT', '#4F46E5', 'Quillmere Textiles')]
    b = ''
    for i, (m, c, n) in enumerate(clients):
        x = 56 + i * 44; y = 84 + i * 82; op = 0.55 + i * 0.15
        b += '<g opacity="%.2f">%s%s%s%s%s</g>' % (min(op, 1), rect(x, y, 300, 128, 22), mono(x + 40, y + 44, 20, m, c, 13), t(x + 72, y + 50, n, 16, 600), t(x + 72, y + 72, 'Own workspace', 13, 500, MUTED), ic(x + 256, y + 30, ICONS['lock'], 22, BRAND, 2))
    b += chip(360, 476, 150, 46, '6 clients', '#FFFFFF', INK, 15)
    return wrap(ctx, 'navy', 'Separate workspaces for each client: Quillmere Textiles, Saffron Bank, Northwind Foods and Kohistan Water', b)

# 9. /solutions/brands: the blended ROAS gauge
def brands(ctx):
    cx, cy, r = 280, 340, 190
    def pt(f, rr):
        a = math.radians(180 - 180 * f); return cx + rr * math.cos(a), cy - rr * math.sin(a)
    x0, y0 = pt(0, r); x1, y1 = pt(1, r); xv, yv = pt(0.5, r)
    b = '<path d="M%.1f %.1f A %d %d 0 0 1 %.1f %.1f" fill="none" stroke="#E0E3FF" stroke-width="30" stroke-linecap="round"></path>' % (x0, y0, r, r, x1, y1)
    b += '<path d="M%.1f %.1f A %d %d 0 0 1 %.1f %.1f" fill="none" stroke="#4F46E5" stroke-width="30" stroke-linecap="round"></path>' % (x0, y0, r, r, xv, yv)
    xi, yi = pt(0.78, r - 34); xo, yo = pt(0.78, r + 34)
    b += '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="#9AA0AD" stroke-width="2.5" stroke-dasharray="4 4"></line>' % (xi, yi, xo, yo)
    b += chip(372, 96, 168, 40, 'Platforms claim 3.9x', '#FFFFFF', MUTED, 13, 600)
    b += t(280, 318, '2.5x', 76, 600, INK, 'middle', HEAD) + t(280, 350, 'Blended ROAS', 16, 500, MUTED, 'middle')
    b += chip(170, 400, 220, 44, 'From your own sales data', '#DCFCE7', '#166534', 14, 600)
    return wrap(ctx, 'lav', 'A gauge showing blended ROAS of 2.5x from your own sales data, against the 3.9x platforms claim', b)

# 10. /industries/banking-and-finance: a shield with roles around it
def banking(ctx):
    b = ''
    for r in (150, 210):
        b += '<circle cx="280" cy="262" r="%d" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.4" stroke-dasharray="3 7"></circle>' % r
    b += '<g transform="translate(160 132) scale(10)"><path d="%s" fill="url(#{BG})" stroke="#A5B4FC" stroke-width="0.14"></path></g>' % ICONS['shield']
    b += ic(244, 226, CHECK, 72, '#FFFFFF', 2.6)
    for x, y, lab in [(40, 92, 'Operations admin'), (352, 210, 'Media planner'), (52, 344, 'Client viewer')]:
        w = 24 + len(lab) * 8.4 + 30
        b += rect(x, y, w, 44, 22) + ic(x + 14, y + 11, ICONS['user'], 22, BRAND, 2) + t(x + 44, y + 27, lab, 14, 600)
    b += rect(140, 440, 280, 56, 18) + ic(160, 456, ICONS['check'], 22, '#15803D', 2.6) + t(192, 474, '10:42  Report exported', 14, 600)
    return wrap(ctx, 'navy', 'A shield surrounded by roles, operations admin, media planner and client viewer, with an activity log entry', b)

# 11. /industries/telecom: always-on monitoring
def telecom(ctx):
    b = ''
    for i in range(1, 7):
        b += '<line x1="0" y1="%d" x2="560" y2="%d" stroke="rgba(255,255,255,0.05)"></line>' % (i * 80, i * 80)
    pts = [(40, 300), (110, 300), (140, 262), (170, 330), (200, 300), (270, 300), (300, 220), (330, 360), (360, 300), (430, 300), (455, 276), (480, 300), (520, 300)]
    b += '<polyline points="%s" fill="none" stroke="#A5B4FC" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></polyline>' % ' '.join('%d,%d' % p for p in pts)
    b += '<circle cx="520" cy="300" r="16" fill="rgba(165,180,252,0.25)"></circle><circle cx="520" cy="300" r="7" fill="#FFFFFF"></circle>'
    for i, lab in enumerate(['Data bundles', 'Postpaid', 'Devices']):
        x = 40 + i * 168
        b += rect(x, 96, 152, 46, 23) + '<circle cx="%d" cy="119" r="6" fill="#15803D"></circle>' % (x + 24) + t(x + 40, 124, lab, 14, 600)
    for i, hgt in enumerate([24, 40, 58, 78]):
        b += '<rect x="%d" y="%d" width="18" height="%d" rx="4" fill="%s"></rect>' % (52 + i * 26, 488 - hgt, hgt, '#FFFFFF' if i == 3 else 'rgba(255,255,255,0.4)')
    b += rect(220, 436, 296, 56, 18) + ic(240, 453, CHECK, 22, '#15803D', 2.6) + t(272, 470, 'Always on, data up to date', 14, 600)
    return wrap(ctx, 'navy', 'Always-on monitoring: a live pulse line across campaigns for data bundles, postpaid and devices', b)

# 12. /industries/fmcg: a portfolio of brands, each with its own goal
def fmcg(ctx):
    def cube(cx, base, sz, top, left, right):
        h = sz * 0.58; v = sz
        F = (cx, base - v); R = (cx + sz, base - v - h); B = (cx, base - v - 2 * h); L = (cx - sz, base - v - h)
        poly = lambda pts, c: '<polygon points="%s" fill="%s"></polygon>' % (' '.join('%.1f,%.1f' % p for p in pts), c)
        return (poly([L, F, (cx, base), (cx - sz, base - h)], left) + poly([R, F, (cx, base), (cx + sz, base - h)], right) + poly([B, R, F, L], top)
                + '<polyline points="%.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="none" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="1.4"></polyline>' % (L + F + R)), B[1]
    b = '<ellipse cx="280" cy="432" rx="236" ry="28" fill="rgba(28,26,87,0.08)"></ellipse>'
    items = [(132, 426, 66, '#E0E3FF', '#6B7FE8', '#4F46E5', 'Awareness'), (290, 436, 90, '#EEF0FF', '#8B9AE8', '#6B7FE8', 'Awareness'), (440, 424, 58, '#DCEBFA', '#3B8FD6', '#0070C2', 'Sales')]
    for cx, base, sz, a1, l1, r1, goal in items:
        g, top_y = cube(cx, base, sz, a1, l1, r1)
        b += g
        w = 30 + len(goal) * 8.6
        b += chip(cx - w / 2, top_y - 56, w, 38, goal, '#FFFFFF', INK, 13.5)
    b += chip(170, 480, 220, 42, 'One portfolio, three brands', '#FFFFFF', INK, 14)
    return wrap(ctx, 'lav', 'Three brand products in one portfolio, two judged on awareness and one on sales', b)

# 13. /industries/ecommerce: the bag and the real return
def ecommerce(ctx):
    b = '<path d="M210 210 C 210 150, 290 150, 290 210" fill="none" stroke="#A5B4FC" stroke-width="12" stroke-linecap="round"></path>'
    b += '<rect x="150" y="200" width="200" height="220" rx="34" fill="url(#{BG})" filter="url(#{SH})"></rect>'
    for i, hgt in enumerate([70, 110, 150, 196]):
        b += '<rect x="%d" y="%d" width="30" height="%d" rx="8" fill="%s"></rect>' % (382 + i * 40, 420 - hgt, hgt, '#FFFFFF' if i == 3 else 'rgba(255,255,255,0.35)')
    b += chip(318, 96, 210, 48, 'Blended ROAS  2.5x', '#FFFFFF', INK, 16)
    b += rect(52, 450, 270, 56, 18) + ic(72, 467, CHECK, 22, '#15803D', 2.6) + t(104, 484, 'Revenue from your store', 14, 600)
    return wrap(ctx, 'navy', 'A shopping bag beside rising revenue bars, with blended ROAS of 2.5x from your store revenue', b, (44.6, 55.4, 16))

# 14. /security: the lock and its rings
def security(ctx):
    b = ''
    for r, lab, ang in [(170, 'Encrypted in transit', -32), (230, 'Encrypted at rest', 225)]:
        b += '<circle cx="280" cy="270" r="%d" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.4" stroke-dasharray="3 7"></circle>' % r
        a = math.radians(ang); x = 280 + r * math.cos(a); y = 270 + r * math.sin(a)
        w = 34 + len(lab) * 8
        b += rect(x - w / 2, y - 21, w, 42, 21) + ic(x - w / 2 + 12, y - 10, CHECK, 20, '#15803D', 2.6) + t(x - w / 2 + 38, y + 5, lab, 13.5, 600)
    b += '<path d="M230 240 V 200 a 50 50 0 0 1 100 0 V 240" fill="none" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"></path>'
    b += '<rect x="200" y="232" width="160" height="136" rx="30" fill="url(#{BG})" filter="url(#{SH})"></rect>'
    b += '<circle cx="280" cy="290" r="14" fill="#FFFFFF"></circle><rect x="274" y="296" width="12" height="34" rx="6" fill="#FFFFFF"></rect>'
    b += chip(92, 448, 120, 44, '6 roles', '#FFFFFF', INK, 14) + chip(224, 448, 132, 44, 'Activity log', '#FFFFFF', INK, 14) + chip(368, 448, 160, 44, 'Client permissions', '#FFFFFF', INK, 14)
    return wrap(ctx, 'navy', 'A lock surrounded by rings for encryption in transit and at rest, with roles, activity log and client permissions', b)
