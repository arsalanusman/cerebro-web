# Cerebro page builder. Every page is assembled from these style-library components only.
import json

MARK_W = '/_blob/10bbf4ea07e97759e5385e3dd93fcaf9'
INK, TEXT, MUTED, BRAND, NAVY, DEEP, LAV = '#101426', '#2B3040', '#5B6170', '#4F46E5', '#1C1A57', '#141244', '#F1F2FF'
CONT = 'max-width: 1240px; margin: 0 auto; padding: 0 40px; box-sizing: border-box'
SPARK = 'M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z'
ARROW = 'M5 12h14M13 6l6 6-6 6'
CHECK = 'M20 6 9 17l-5-5'
BANG = 'M12 7v6M12 17h.01'

class Ctx:
    def __init__(self, prefix):
        self.prefix = prefix; self.n = 0
        self.tabs = None; self.directory = None
        self.extra = []; self.state = {}; self.footer_cta = True
    def uid(self, s):
        self.n += 1
        return '%s-%s-%d' % (self.prefix, s, self.n)

def icon(d, size=16, color='currentColor', sw=2):
    return '<svg width="%d" height="%d" viewBox="0 0 24 24" fill="none" stroke="%s" stroke-width="%s" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="%s"></path></svg>' % (size, size, color, sw, d)

def h2(text, dark=False, center=True):
    return '<h2 style="margin: 0; %sfont-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(32px, 3.4vw, 46px); line-height: 1.08; letter-spacing: -0.025em; color: %s">%s</h2>' % ('text-align: center; ' if center else '', '#FFFFFF' if dark else INK, text)

def lead(text, dark=False, center=True):
    return '<p style="margin: 14px %s 0; max-width: 600px; %sfont-size: 18px; line-height: 1.5; color: %s">%s</p>' % ('auto' if center else '0', 'text-align: center; ' if center else '', '#CDD0F3' if dark else MUTED, text)

def pill(label, href, kind='primary'):
    st = {'primary': 'background: %s; color: #FFFFFF' % BRAND,
          'secondary': 'background: #FFFFFF; border: 1px solid #D5D8E0; color: %s' % INK}[kind]
    return '<a href="%s" style="display: inline-flex; align-items: center; height: 44px; padding: 0 22px; border-radius: 22px; %s; text-decoration: none; font-size: 15px; font-weight: 600">%s</a>' % (href, st, label)

def textlink(label, href, dark=False):
    return '<a href="%s" style="margin-top: 20px; display: inline-flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 600; text-decoration: none; color: %s">%s%s</a>' % (href, '#C7D2FE' if dark else BRAND, label, icon(ARROW, 15))

def dots(ctx, color='#C7CBF9', op='0.6'):
    pid = ctx.uid('dots')
    return '<svg aria-hidden="true" style="position: absolute; inset: 0; width: 100%%; height: 100%%"><defs><pattern id="%s" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="%s"></circle></pattern></defs><rect width="100%%" height="100%%" fill="url(#%s)" opacity="%s"></rect></svg>' % (pid, color, pid, op)

def glow(css_pos, size, rgba):
    return '<div aria-hidden="true" style="position: absolute; %s; width: %dpx; height: %dpx; border-radius: 50%%; background: radial-gradient(circle, %s 0, rgba(0,0,0,0) 64%%)"></div>' % (css_pos, size, size, rgba)

def tile(ctx, inner, kind='lav', h=380, radius=28):
    if kind == 'lav':
        bg = LAV; deco = glow('right: -120px; top: -140px', 420, 'rgba(165,180,252,0.7)') + dots(ctx)
    else:
        bg = DEEP; deco = glow('left: -140px; bottom: -220px', 520, 'rgba(0,112,194,0.45)')
    return '<div style="position: relative; height: %dpx; border-radius: %dpx; background: %s; overflow: hidden; display: flex; align-items: center; justify-content: center">%s<div style="position: relative">%s</div></div>' % (h, radius, bg, deco, inner)

def mono(mark, color, size=24, fs=10):
    return '<span style="width: %dpx; height: %dpx; border-radius: %dpx; background: %s; color: #FFFFFF; font-size: %dpx; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto">%s</span>' % (size, size, size // 4 + 2, color, fs, mark)

def card(inner, w=300, pad='20px 22px', extra=''):
    return '<div style="width: %dpx; max-width: 100%%; box-sizing: border-box; background: #FFFFFF; border-radius: 18px; padding: %s; box-shadow: 0 2px 6px rgba(16,20,38,0.05), 0 20px 48px rgba(28,26,87,0.16)%s">%s</div>' % (w, pad, extra, inner)

def badge(text, bg, fg):
    return '<span style="display: inline-flex; align-items: center; font-size: 12px; font-weight: 600; padding: 3px 9px; border-radius: 10px; background: %s; color: %s">%s</span>' % (bg, fg, text)

GOOD = ('#DCFCE7', '#166534'); BAD = ('#FEE2E2', '#991B1B'); WARN = ('#FFF7ED', '#9A3412'); NEUT = ('#F1F2F5', '#4B5160'); SOFT = ('#EEF0FF', '#3730A3')

def ai_label(text='Cerebro AI', dark=False):
    return '<div style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: %s">%s%s</div>' % ('#A5B4FC' if dark else BRAND, icon(SPARK, 14), text)

# ---------- art ----------
def neural_svg(ctx, lit):
    P = [100, 190, 280, 370, 460]; C = 280
    gid = ctx.uid('core')
    out = ['<svg role="img" aria-label="The Cerebro mark at the center of a grid of nodes, with sources flowing into it" viewBox="0 0 560 560" style="position: absolute; inset: 0; width: 100%; height: 100%">',
           '<defs><radialGradient id="%s" cx="40%%" cy="32%%" r="78%%"><stop offset="0" stop-color="#6CC0F5"></stop><stop offset="0.45" stop-color="#0070C2"></stop><stop offset="1" stop-color="#022771"></stop></radialGradient></defs>' % gid,
           '<ellipse cx="280" cy="280" rx="262" ry="100" fill="none" stroke="rgba(255,255,255,0.08)" transform="rotate(-22 280 280)"></ellipse>',
           '<ellipse cx="280" cy="280" rx="262" ry="100" fill="none" stroke="rgba(255,255,255,0.06)" transform="rotate(22 280 280)"></ellipse>']
    nodes = []
    for r in range(5):
        for c in range(5):
            if r == 2 and c == 2: continue
            x, y = P[c], P[r]; s = lit.get((c, r))
            if s:
                mx = (x + C) / 2 + (0 if r == 2 else (34 if c < 2 else -34)); my = (y + C) / 2 + (34 if r < 2 else (-34 if r > 2 else 0))
                out.append('<path d="M%d %d Q %d %d %d %d" fill="none" stroke="rgba(165,180,252,0.55)" stroke-width="1.6" stroke-dasharray="4 6" stroke-linecap="round"></path>' % (x, y, mx, my, C, C))
                nodes.append('<circle cx="%d" cy="%d" r="34" fill="rgba(165,180,252,0.12)"></circle><circle cx="%d" cy="%d" r="24" fill="#FFFFFF"></circle><text x="%d" y="%d" text-anchor="middle" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="%s">%s</text>' % (x, y, x, y, x, y + 5, s[1], s[0]))
            else:
                nodes.append('<circle cx="%d" cy="%d" r="20" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="1.4"></circle>' % (x, y))
    out += nodes
    out.append('<circle cx="280" cy="280" r="98" fill="none" stroke="rgba(0,112,194,0.14)"></circle><circle cx="280" cy="280" r="76" fill="none" stroke="rgba(0,112,194,0.25)" stroke-width="10"></circle><circle cx="280" cy="280" r="64" fill="url(#%s)"></circle></svg>' % gid)
    return ''.join(out)

DEFAULT_LIT = {(0, 0): ('M', '#1877F2'), (4, 0): ('G', '#15803D'), (0, 4): ('T', '#111827'), (4, 4): ('↑', BRAND), (0, 2): ('+', BRAND), (4, 2): ('✦', BRAND)}

def hero_art(ctx, float_html, lit=None):
    return ('<div style="flex: 1 1 480px; max-width: 560px; position: relative">'
            '<div style="position: relative; width: 100%%; aspect-ratio: 1 / 1; border-radius: 28px; overflow: hidden; background: %s">'
            '<div aria-hidden="true" style="position: absolute; inset: 0; background: radial-gradient(circle at 50%% 50%%, rgba(0,112,194,0.55) 0, rgba(0,112,194,0.16) 30%%, rgba(20,18,68,0) 62%%)"></div>%s'
            '<img src="%s" alt="" style="position: absolute; left: 50%%; top: 50%%; width: 14%%; height: auto; transform: translate(-50%%, -50%%)"></div>'
            '<div style="position: absolute; left: -36px; bottom: 48px">%s</div></div>') % (DEEP, neural_svg(ctx, lit or DEFAULT_LIT), MARK_W, float_html)

def float_ask(q, a):
    return card('<span style="display: block; margin-left: auto; width: fit-content; background: #F2F3F6; border-radius: 12px 12px 4px 12px; padding: 7px 11px; font-size: 13px; color: %s">%s</span><span style="margin-top: 10px; display: flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 500; color: %s"><span style="width: 24px; height: 24px; border-radius: 8px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center">%s</span>%s</span>' % (INK, q, INK, icon(SPARK, 13, BRAND), a), 250, '14px 16px')

def float_card(title, value, b=None):
    bb = badge(*b) if b else ''
    return card('<div style="font-size: 12.5px; color: %s">%s</div><div style="margin-top: 6px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap"><span style="font-family: Geist, Inter, sans-serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; color: %s">%s</span>%s</div>' % (MUTED, title, INK, value, bb), 240, '14px 16px')

def art_logo_grid(ctx, tiles, kind='lav', h=280, cols=4, size=58):
    cells = ''.join('<span title="%s" style="width: %dpx; height: %dpx; border-radius: 16px; background: #FFFFFF; box-shadow: 0 10px 22px rgba(28,26,87,0.10); opacity: %s; display: inline-flex; align-items: center; justify-content: center">%s</span>' % (t[2] if len(t) > 2 else '', size, size, t[3] if len(t) > 3 else 1, mono(t[0], t[1], 30, 10)) for t in tiles)
    return tile(ctx, '<div style="display: grid; grid-template-columns: repeat(%d, %dpx); gap: 14px">%s</div>' % (cols, size, cells), kind, h)

def art_code(ctx, lines, title='Connector builder', tag='AI draft', h=280):
    body = ''.join('<div style="white-space: pre"><span style="color: #CDD0F3">%s</span><span style="color: #A5B4FC">%s</span><span style="color: #CDD0F3">%s</span><span style="color: #86EFAC">%s</span></div>' % l for l in lines)
    inner = ('<div style="width: 300px; border-radius: 14px; background: #0D0B33; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 24px 50px rgba(0,0,0,0.35); overflow: hidden">'
             '<div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.08)"><span style="font-size: 12px; font-weight: 600; color: #FFFFFF">%s</span><span style="font-size: 10.5px; font-weight: 600; color: #C7D2FE; background: rgba(79,70,229,0.35); padding: 2px 8px; border-radius: 9px">%s</span></div>'
             '<div style="padding: 12px 14px; font-family: \'Geist Mono\', ui-monospace, monospace; font-size: 12px; line-height: 1.7">%s</div></div>') % (title, tag, body)
    return tile(ctx, inner, 'navy', h)

def art_flow(ctx, sources, kind='lav', h=280, w=300):
    n = len(sources); hh = 60 * n + 20; mid = hh // 2
    paths = ''.join('<path d="M120 %d C 180 %d, 190 %d, %d %d" fill="none" stroke="%s" stroke-width="1.6" stroke-dasharray="4 6"></path>' % (30 + 60 * i, 30 + 60 * i, mid, w - 72, mid, '#A5B4FC' if kind == 'lav' else 'rgba(165,180,252,0.65)') for i in range(n))
    pill_bg = '#FFFFFF' if kind == 'lav' else 'rgba(255,255,255,0.1)'
    pill_fg = INK if kind == 'lav' else '#FFFFFF'
    pills = ''.join('<span style="position: absolute; left: 0; top: %dpx; display: inline-flex; align-items: center; gap: 7px; height: 34px; padding: 0 12px 0 6px; border-radius: 17px; background: %s; box-shadow: 0 8px 18px rgba(28,26,87,0.12); font-size: 12.5px; font-weight: 600; color: %s; white-space: nowrap">%s%s</span>' % (13 + 60 * i, pill_bg, pill_fg, mono(s[0], s[1], 22, 9), s[2]) for i, s in enumerate(sources))
    node = '<span style="position: absolute; left: %dpx; top: %dpx; width: 72px; height: 72px; margin: -36px 0 0 -36px; border-radius: 36px; background: radial-gradient(circle at 40%% 32%%, #6CC0F5 0, #0070C2 45%%, #022771 100%%); box-shadow: 0 0 0 8px rgba(0,112,194,0.14), 0 16px 36px rgba(2,39,113,0.3); display: flex; align-items: center; justify-content: center"><img src="%s" alt="" style="width: 40px; height: auto"></span>' % (w - 36, mid, MARK_W)
    inner = '<div style="position: relative; width: %dpx; height: %dpx"><svg aria-hidden="true" viewBox="0 0 %d %d" style="position: absolute; inset: 0; width: 100%%; height: 100%%">%s</svg>%s%s</div>' % (w, hh, w, hh, paths, pills, node)
    return tile(ctx, inner, kind, h)

def art_checks(ctx, title, rows, kind='navy', h=320):
    r = ''.join('<div style="display: flex; align-items: center; gap: 12px; padding: 12px 18px; border-top: 1px solid #F1F2F5"><span style="width: 24px; height: 24px; border-radius: 12px; background: %s; display: inline-flex; align-items: center; justify-content: center">%s</span><span style="font-size: 14px; font-weight: 500; color: %s">%s</span></div>' % ((GOOD[0] if ok else WARN[0]), icon(CHECK if ok else BANG, 12, '#15803D' if ok else '#C2410C', 3), INK, label) for ok, label in rows)
    inner = card('<div style="padding: 12px 18px">%s</div>%s' % (ai_label(title), r), 320, '6px 0')
    return tile(ctx, inner, kind, h)

def art_ask(ctx, q, value, b, line, kind='navy', h=380):
    inner = ('<div style="width: 460px; max-width: 100%%; display: flex; flex-direction: column; gap: 14px">'
             '<span style="align-self: flex-end; background: #FFFFFF; border-radius: 16px 16px 4px 16px; padding: 11px 15px; font-size: 15px; color: %s; box-shadow: 0 16px 36px rgba(0,0,0,0.2)">%s</span>%s</div>') % (
        INK, q, card('%s<div style="margin-top: 12px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap"><span style="font-family: Geist, Inter, sans-serif; font-size: 26px; font-weight: 600; letter-spacing: -0.02em; color: %s">%s</span>%s</div><p style="margin: 8px 0 0; font-size: 14.5px; line-height: 1.5; color: %s">%s</p>' % (ai_label('Ask Cerebro'), INK, value, badge(*b), MUTED, line), 330))
    return tile(ctx, inner, kind, h)

def art_kpis(ctx, items, kind='lav', h=380):
    cards = ''.join('<div style="width: 150px; background: #FFFFFF; border-radius: 14px; padding: 14px 16px; box-shadow: 0 12px 28px rgba(28,26,87,0.12)"><div style="font-size: 12px; color: %s">%s</div><div style="margin-top: 6px; font-size: 19px; font-weight: 600; color: %s">%s</div><div style="margin-top: 4px; font-size: 12px; font-weight: 600; color: %s">%s</div></div>' % (MUTED, l, INK, v, c, d) for l, v, d, c in items)
    return tile(ctx, '<div style="display: flex; gap: 12px">%s</div>' % cards, kind, h)

def art_verdict(ctx, h=380):
    inner = ('<div style="display: flex; align-items: center; gap: 16px">'
             '<div style="width: 180px; background: #FFFFFF; border-radius: 18px; padding: 20px; box-shadow: 0 16px 36px rgba(28,26,87,0.12)"><div style="font-size: 12.5px; color: %s">Judged on CPA</div><div style="margin-top: 8px; font-family: Geist, Inter, sans-serif; font-size: 28px; font-weight: 600; color: %s">650.58</div><div style="margin-top: 10px">%s</div></div>'
             '<span style="width: 40px; height: 40px; border-radius: 20px; background: #FFFFFF; box-shadow: 0 8px 20px rgba(28,26,87,0.12); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: %s">vs</span>'
             '<div style="width: 180px; background: #FFFFFF; border-radius: 18px; padding: 20px; border: 2px solid #A5B4FC; box-shadow: 0 20px 44px rgba(79,70,229,0.2)"><div style="font-size: 12.5px; color: #4338CA">Judged on its goal</div><div style="margin-top: 8px; font-family: Geist, Inter, sans-serif; font-size: 28px; font-weight: 600; color: %s">119.23</div><div style="margin-top: 10px">%s</div></div></div>') % (MUTED, INK, badge('Looks worst', *BAD), MUTED, INK, badge('Best CPM', *GOOD))
    return tile(ctx, inner, 'lav', h)

WIDGETS = [('KPI', 'M4 4h16v16H4zM8 14l3-3 2 2 3-4'), ('Trend', 'M3 17l6-6 4 4 8-8'), ('Donut', 'M12 3a9 9 0 1 0 9 9h-9z'), ('Table', 'M3 4h18v16H3zM3 10h18M9 4v16'), ('Funnel', 'M3 4h18l-7 8v6l-4 2v-8z'), ('Ranked', 'M8 6h13M8 12h10M8 18h7M3 6h.01M3 12h.01M3 18h.01')]

def art_widgets(ctx, h=380):
    cells = ''.join('<span style="height: 76px; border-radius: 16px; background: #FFFFFF; border: %s; box-shadow: 0 8px 18px rgba(28,26,87,0.08); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; font-size: 11.5px; font-weight: 600; color: %s">%s%s</span>' % ('1.5px solid #4F46E5' if i == 0 else '1px solid transparent', '#3730A3' if i == 0 else TEXT, icon(d, 20, 'currentColor', 1.8), n) for i, (n, d) in enumerate(WIDGETS))
    inner = ('<div style="position: relative; width: 420px; height: 260px"><div style="position: absolute; left: 0; top: 20px; display: grid; grid-template-columns: repeat(3, 76px); gap: 12px">%s</div>'
             '<div style="position: absolute; right: 0; bottom: 0">%s</div></div>') % (cells, card('<div style="font-size: 12.5px; color: %s">Total spend</div><div style="margin-top: 6px; font-family: Geist, Inter, sans-serif; font-size: 26px; font-weight: 600; color: %s">PKR 5.8M</div><svg viewBox="0 0 150 34" aria-hidden="true" style="width: 100%%; height: 34px; margin-top: 8px"><polyline points="0,26 22,24 44,27 66,22 88,24 110,16 130,10 150,12" fill="none" stroke="#4F46E5" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"></polyline></svg>' % (MUTED, INK), 190))
    return tile(ctx, inner, 'lav', h)

def art_crumbs(ctx, h=380):
    rows = [('Platform', 'Meta Ads', 0), ('Campaign', 'Winter Collection', 40), ('Ad set', 'Parents 28–45 | Feed', 80), ('Ad', 'Product feed v2', 120)]
    pills = ''.join('<span style="margin-left: %dpx; align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; background: %s; color: %s; border-radius: 12px; padding: 11px 15px; font-size: 14px; font-weight: 600; box-shadow: 0 14px 30px rgba(0,0,0,0.3)"><span style="font-size: 11px; font-weight: 600; color: %s">%s</span>%s</span>' % (ind, '#FFFFFF' if i == 3 else 'rgba(255,255,255,%.2f)' % (0.1 + 0.04 * i), INK if i == 3 else '#FFFFFF', BRAND if i == 3 else '#A5B4FC', lv, lab) for i, (lv, lab, ind) in enumerate(rows))
    return tile(ctx, '<div style="display: flex; flex-direction: column; gap: 14px; width: 380px">%s</div>' % pills, 'navy', h)

def art_rows_card(ctx, title, b, rows, kind='lav', h=380, w=340):
    r = ''.join('<div style="display: flex; justify-content: space-between; gap: 12px; padding: 11px 0; border-top: 1px solid #F1F2F5; font-size: 13.5px"><span style="color: %s">%s</span><span style="color: %s; font-weight: 600">%s</span></div>' % (MUTED, a, INK, v) for a, v in rows)
    inner = card('<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 8px"><span style="font-size: 14.5px; font-weight: 600; color: %s">%s</span>%s</div>%s' % (INK, title, badge(*b) if b else '', r), w)
    return tile(ctx, inner, kind, h)

def art_mapping(ctx, rows, kind='lav', h=380):
    r = ''.join('<div style="display: flex; align-items: center; gap: 10px; padding: 11px 0; border-top: 1px solid #F1F2F5; font-size: 13.5px"><span style="flex: 1 1 0; color: %s">%s</span>%s<span style="flex: 1 1 0; color: %s; font-weight: 600">%s</span></div>' % (MUTED, a, icon(ARROW, 12, '#9AA0AD'), INK, b) for a, b in rows)
    inner = card('<div style="margin-bottom: 8px">%s</div>%s' % (badge('Mapped by Cerebro AI', *SOFT), r), 320)
    return tile(ctx, inner, kind, h)

def art_buckets(ctx, h=380):
    b = [('Awareness', 'Reach and CPM', '#6B7FE8'), ('Traffic', 'Clicks and CPC', '#4F46E5'), ('Leads', 'Leads and CPL', '#2E2A82'), ('Sales', 'Conversions and CPA', '#0070C2')]
    cells = ''.join('<div style="background: #FFFFFF; border-radius: 16px; padding: 16px 18px; box-shadow: 0 12px 28px rgba(28,26,87,0.12)"><span style="display: inline-block; width: 10px; height: 10px; border-radius: 5px; background: %s"></span><div style="margin-top: 10px; font-size: 16px; font-weight: 600; color: %s">%s</div><div style="margin-top: 4px; font-size: 12.5px; color: %s">%s</div></div>' % (c, INK, n, MUTED, m) for n, m, c in b)
    return tile(ctx, '<div style="display: grid; grid-template-columns: repeat(2, 170px); gap: 12px">%s</div>' % cells, 'lav', h)

def art_schedule(ctx, kind='lav', h=380):
    inner = card(('<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 14.5px; font-weight: 600; color: %s">Weekly client report</span>%s</div>'
                  '<div style="margin-top: 12px; display: flex; flex-direction: column; gap: 10px; font-size: 13.5px; color: %s">'
                  '<span style="display: flex; gap: 8px; align-items: center">%sEvery Monday, 9:00 AM PKT</span>'
                  '<span style="display: flex; gap: 8px; align-items: center">%sPDF to 3 people</span></div>'
                  '<div style="margin-top: 14px; display: flex; gap: 6px; flex-wrap: wrap">%s%s</div>') % (INK, badge('Scheduled', *GOOD), TEXT, icon('M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 15, BRAND), icon('M3 5h18v14H3zM3 6l9 7 9-7', 15, BRAND), badge('Looker Studio, synced', *SOFT), badge('Google Sheets, synced', *SOFT)), 320)
    return tile(ctx, inner, kind, h)

def art_pivot(ctx, kind='lav', h=280):
    chips = '<div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px">%s%s%s</div>' % (badge('Rows: Platform', *SOFT), badge('Spend', *NEUT), badge('CPA', *NEUT))
    rows = [('TikTok Ads', 'PKR 3.1M', '650.58'), ('Meta Ads', 'PKR 2.1M', '394.45'), ('Google Ads', 'PKR 514.2K', '243.22')]
    r = ''.join('<div style="display: flex; gap: 10px; padding: 9px 0; border-top: 1px solid #F1F2F5; font-size: 13px"><span style="flex: 1 1 0; color: %s">%s</span><span style="flex: 1 1 0; text-align: right; color: %s">%s</span><span style="flex: 0 0 64px; text-align: right; font-weight: 600; color: %s">%s</span></div>' % (INK, a, TEXT, b, INK, c) for a, b, c in rows)
    return tile(ctx, card(chips + r, 300), kind, h)

def art_pacing(ctx, h=380):
    inner = card(('<div style="display: flex; justify-content: space-between; align-items: center"><span style="font-size: 14.5px; font-weight: 600; color: %s">Budget pacing, November</span>%s</div>'
                  '<div style="margin-top: 14px; font-family: Geist, Inter, sans-serif; font-size: 24px; font-weight: 600; color: %s">PKR 3.6M <span style="font-size: 14px; font-weight: 500; color: %s">of PKR 5.8M</span></div>'
                  '<div style="position: relative; margin-top: 14px; height: 10px; border-radius: 5px; background: #ECEEF3"><div style="height: 10px; width: 62%%; border-radius: 5px; background: #4F46E5"></div><span style="position: absolute; left: 63%%; top: -5px; width: 2px; height: 20px; background: %s"></span></div>'
                  '<div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 12px; color: %s"><span>62%% spent</span><span>63%% of month gone</span></div>') % (INK, badge('On track', *GOOD), INK, MUTED, INK, MUTED), 330)
    return tile(ctx, inner, 'lav', h)

def art_brand(ctx, h=380):
    inner = ('<div style="width: 300px; background: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.35)">'
             '<div style="padding: 18px 20px; border-bottom: 1px solid #F1F2F5; display: flex; justify-content: space-between; align-items: center"><span style="width: 110px; height: 28px; border-radius: 6px; border: 1px dashed #C9CDD6; display: inline-flex; align-items: center; justify-content: center; font-size: 11px; color: %s">Your agency logo</span><span style="font-size: 11px; color: %s">Page 1 of 6</span></div>'
             '<div style="padding: 20px"><div style="font-size: 12px; color: %s">Monthly performance</div><div style="margin-top: 4px; font-family: Geist, Inter, sans-serif; font-size: 20px; font-weight: 600; color: %s">Quillmere Textiles</div>'
             '<div style="margin-top: 14px; display: flex; gap: 8px"><span style="flex: 1 1 0; height: 44px; border-radius: 8px; background: #EEF0FF"></span><span style="flex: 1 1 0; height: 44px; border-radius: 8px; background: #EEF0FF"></span><span style="flex: 1 1 0; height: 44px; border-radius: 8px; background: #EEF0FF"></span></div>'
             '<div style="margin-top: 10px; height: 60px; border-radius: 8px; background: #F7F8FA"></div></div></div>') % (MUTED, MUTED, MUTED, INK)
    return tile(ctx, inner, 'navy', h)

def art_pipeline(ctx, h=420):
    src = [('M', '#1877F2', 'Meta Ads'), ('G', '#15803D', 'Google Ads'), ('T', '#111827', 'TikTok Ads'), ('+', BRAND, 'Custom'), ('↑', BRAND, 'Sheets')]
    steps = ['Map fields', 'Clean rows', 'Standardize', 'Convert currency', 'Flag issues']
    outs = ['Dashboards', 'Reports', 'Hierarchy', 'Ask Cerebro']
    col1 = ''.join('<span style="display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 12px 0 6px; border-radius: 18px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.16); font-size: 13px; font-weight: 600; color: #FFFFFF">%s%s</span>' % (mono(m, c, 24, 9), l) for m, c, l in src)
    col2 = ''.join('<span style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #FFFFFF"><span style="width: 20px; height: 20px; border-radius: 10px; background: #4F46E5; display: inline-flex; align-items: center; justify-content: center">%s</span>%s</span>' % (icon(CHECK, 11, '#FFFFFF', 3), s) for s in steps)
    col3 = ''.join('<span style="display: inline-flex; align-items: center; height: 36px; padding: 0 14px; border-radius: 18px; background: #FFFFFF; font-size: 13px; font-weight: 600; color: %s">%s</span>' % (INK, o) for o in outs)
    arrow = '<span aria-hidden="true" style="color: #A5B4FC">%s</span>' % icon(ARROW, 20, '#A5B4FC')
    inner = ('<div style="display: flex; align-items: center; gap: 28px">'
             '<div style="display: flex; flex-direction: column; gap: 10px; align-items: flex-start">%s</div>%s'
             '<div style="border-radius: 18px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); padding: 20px 22px; display: flex; flex-direction: column; gap: 12px">%s%s</div>%s'
             '<div style="display: flex; flex-direction: column; gap: 10px; align-items: flex-start">%s</div></div>') % (col1, arrow, ai_label('Cerebro AI engine', True), col2, arrow, col3)
    return tile(ctx, inner, 'navy', h)

# ---------- sections ----------
def hero(ctx, label, title, sub, art, secondary=('See how it works', '#main')):
    return ('<section style="padding: 72px 0 96px"><div style="%s; display: flex; gap: 64px; align-items: center; flex-wrap: wrap">'
            '<div style="flex: 1 1 460px; min-width: 0"><p style="margin: 0 0 18px; font-size: 14px; font-weight: 600; color: %s">%s</p>'
            '<h1 style="margin: 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(40px, 4.6vw, 62px); line-height: 1.03; letter-spacing: -0.035em; color: %s">%s</h1>'
            '<p style="margin: 22px 0 0; max-width: 480px; font-size: 19px; line-height: 1.55; color: %s">%s</p>'
            '<div style="margin-top: 30px; display: flex; gap: 10px; flex-wrap: wrap">%s%s</div></div>%s</div></section>') % (CONT, BRAND, label, INK, title, MUTED, sub, pill('Book a demo', 'PgDemo.dc.html'), pill(secondary[0], secondary[1], 'secondary'), art)

def section(inner, bg='#FFFFFF', pad='104px 0', sid=''):
    return '<section%s style="padding: %s; background: %s"><div style="%s">%s</div></section>' % ((' id="%s"' % sid) if sid else '', pad, bg, CONT, inner)

def three(ctx, title, sub, cards, sid='main', bg='#FFFFFF'):
    cs = ''.join('<a href="%s" style="flex: 1 1 320px; min-width: 0; text-decoration: none; display: flex; flex-direction: column; gap: 18px">%s<div><div style="font-family: Geist, Inter, sans-serif; font-size: 21px; font-weight: 600; color: %s">%s</div><div style="margin-top: 6px; font-size: 15px; line-height: 1.5; color: %s">%s</div></div></a>' % (c['href'], c['art'], INK, c['title'], MUTED, c['line']) for c in cards)
    return section('<div>%s%s</div><div style="margin-top: 56px; display: flex; gap: 20px; flex-wrap: wrap">%s</div>' % (h2(title), lead(sub) if sub else '', cs), bg, sid=sid)

def facts(items):
    f = ''.join('<div style="flex: 1 1 220px; min-width: 0; border-left: 1px solid rgba(255,255,255,0.16); padding-left: 24px"><div style="font-family: Geist, Inter, sans-serif; font-size: clamp(48px, 5vw, 72px); font-weight: 600; letter-spacing: -0.035em; color: #FFFFFF; line-height: 1">%s</div><div style="margin-top: 14px; font-size: 15.5px; color: #CDD0F3">%s</div></div>' % (b, l) for b, l in items)
    return ('<section aria-label="Facts" style="position: relative; overflow: hidden; background: %s; padding: 88px 0">%s<div style="position: relative; %s; display: flex; gap: 24px; flex-wrap: wrap">%s</div></section>') % (NAVY, glow('right: -200px; top: -260px', 640, 'rgba(0,112,194,0.35)'), CONT, f)

def rows(items, bg='#FFFFFF'):
    rs = ''.join(('<div style="display: flex; gap: 64px; align-items: center; flex-wrap: wrap"><div style="flex: 1 1 380px; min-width: 0">'
                  '<h3 style="margin: 0; font-family: Geist, Inter, sans-serif; font-size: clamp(28px, 2.8vw, 38px); line-height: 1.12; font-weight: 600; letter-spacing: -0.02em; color: %s">%s</h3>'
                  '<p style="margin: 14px 0 0; max-width: 420px; font-size: 17px; line-height: 1.55; color: %s">%s</p>%s</div>'
                  '<div style="flex: 1.3 1 520px; min-width: 0">%s</div></div>') % (INK, r['h'], MUTED, r['line'], textlink(*r['link']) if r.get('link') else '', r['art']) for r in items)
    return '<section style="padding: 104px 0; background: %s"><div style="%s; display: flex; flex-direction: column; gap: 88px">%s</div></section>' % (bg, CONT, rs)

def tabs_band(ctx, title, sub, tabs, note=''):
    ctx.tabs = len(tabs)
    arts = ''.join('<sc-if value="{{tab.t%d}}" hint-placeholder-val="{{%s}}">%s</sc-if>' % (i, 'true' if i == 0 else 'false', t['art']) for i, t in enumerate(tabs))
    btns = ''.join(('<button type="button" role="tab" aria-selected="{{tab.s%d}}" onClick="{{tab.p%d}}" style="flex: 1 1 220px; min-width: 0; text-align: left; border: 0; border-top: 2px solid {{tab.l%d}}; background: transparent; padding: 16px 0 0; font: inherit; cursor: pointer">'
                    '<span style="display: block; font-size: 16px; font-weight: 600; color: {{tab.f%d}}">%s</span><span style="display: block; margin-top: 6px; font-size: 14px; line-height: 1.45; color: {{tab.b%d}}">%s</span></button>') % (i, i, i, i, t['title'], i, t['text']) for i, t in enumerate(tabs))
    return ('<section style="position: relative; overflow: hidden; background: %s; padding: 112px 0 104px">%s<div style="position: relative; %s"><div>%s%s</div>'
            '<div aria-live="polite" style="margin-top: 56px">%s</div>'
            '<div role="tablist" aria-label="%s" style="margin-top: 28px; display: flex; gap: 20px; flex-wrap: wrap">%s</div>%s</div></section>') % (
        DEEP, glow('left: 50%; top: 120px; margin-left: -450px', 900, 'rgba(0,112,194,0.3)'), CONT, h2(title, True), lead(sub, True), arts, title, btns,
        ('<p style="margin: 28px 0 0; text-align: center; font-size: 13px; color: #A5B4FC">%s</p>' % note) if note else '')

def cap_grid(title, sub, items, bg='#F7F8FA'):
    cs = ''.join('<div style="background: #FFFFFF; border-radius: 20px; padding: 24px"><span style="width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center">%s</span><div style="margin-top: 16px; font-size: 17px; font-weight: 600; color: %s">%s</div><div style="margin-top: 6px; font-size: 14.5px; line-height: 1.5; color: %s">%s</div></div>' % (icon(d, 22, BRAND, 1.8), INK, t, MUTED, l) for t, l, d in items)
    return section('<div>%s%s</div><div style="margin-top: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px">%s</div>' % (h2(title), lead(sub) if sub else '', cs), bg)

WORKFLOW = [('01', 'Data integration', 'Every source, one clean model.', 'PlatData.dc.html'), ('02', 'Dashboards', 'Built in clicks, drilled to one ad.', 'PlatDashboards.dc.html'),
            ('03', 'Objective engine', 'Every campaign judged by its goal.', 'PlatObjective.dc.html'), ('04', 'Reports', 'Built once, sent automatically.', 'PlatReports.dc.html')]

def workflow_nav(current=None, title='Explore the platform'):
    cs = ''.join('<a href="%s" style="flex: 1 1 240px; min-width: 0; text-decoration: none; border-radius: 20px; padding: 24px; background: %s; border: 1px solid %s; display: flex; flex-direction: column; gap: 10px; min-height: 170px; box-sizing: border-box"><span style="font-size: 13px; font-weight: 600; color: %s">Workflow %s</span><span style="font-family: Geist, Inter, sans-serif; font-size: 20px; font-weight: 600; color: %s">%s</span><span style="font-size: 14px; line-height: 1.45; color: %s">%s</span></a>' % (
        href, '#F5F6FF' if n == current else '#FFFFFF', '#C7CBF9' if n == current else '#E4E7EC', BRAND, n, INK, t, MUTED, ('You are here' if n == current else l)) for n, t, l, href in WORKFLOW)
    ask = '<a href="PlatAsk.dc.html" style="flex: 1 1 240px; min-width: 0; text-decoration: none; border-radius: 20px; padding: 24px; background: %s; display: flex; flex-direction: column; gap: 10px; min-height: 170px; box-sizing: border-box"><span style="font-size: 13px; font-weight: 600; color: #A5B4FC">Cerebro AI</span><span style="font-family: Geist, Inter, sans-serif; font-size: 20px; font-weight: 600; color: #FFFFFF">Ask Cerebro</span><span style="font-size: 14px; line-height: 1.45; color: #CDD0F3">%s</span></a>' % (NAVY, 'You are here' if current == 'ask' else 'Answers from your data.')
    return section('<div>%s</div><div style="margin-top: 44px; display: flex; gap: 14px; flex-wrap: wrap">%s%s</div>' % (h2(title), cs, ask), '#FFFFFF', '96px 0')

def faq(title, items, bg='#F7F8FA'):
    qs = ''.join('<details style="background: #FFFFFF; border-radius: 16px; padding: 0 22px"><summary style="min-height: 62px; display: flex; align-items: center; cursor: pointer; font-size: 16px; font-weight: 600; color: %s">%s</summary><p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: %s">%s</p></details>' % (INK, q, MUTED, a) for q, a in items)
    return '<section style="padding: 104px 0; background: %s"><div style="max-width: 860px; margin: 0 auto; padding: 0 40px; box-sizing: border-box">%s<div style="margin-top: 40px; display: flex; flex-direction: column; gap: 10px">%s</div></div></section>' % (bg, h2(title), qs)

def directory(ctx, title, sub, items, filters):
    ctx.directory = {'items': items, 'filters': filters}
    fbtns = '<sc-for list="{{dir.filters}}" as="f" hint-placeholder-count="%d"><button type="button" aria-pressed="{{f.on}}" onClick="{{f.pick}}" style="height: 40px; padding: 0 16px; border-radius: 20px; border: 1px solid {{f.bd}}; background: {{f.bg}}; color: {{f.fg}}; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer">{{f.label}}</button></sc-for>' % len(filters)
    grid = ('<sc-for list="{{dir.items}}" as="it" hint-placeholder-count="%d"><div style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px; opacity: {{it.op}}">'
            '<div style="display: flex; justify-content: space-between; align-items: center"><span style="width: 44px; height: 44px; border-radius: 12px; background: {{it.color}}; color: #FFFFFF; font-size: 14px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center">{{it.mark}}</span>'
            '<span style="font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 10px; background: {{it.pbg}}; color: {{it.pfg}}">{{it.status}}</span></div>'
            '<div><div style="font-size: 17px; font-weight: 600; color: %s">{{it.name}}</div><div style="margin-top: 4px; font-size: 14px; line-height: 1.45; color: %s">{{it.line}}</div></div></div></sc-for>') % (len(items), INK, MUTED)
    search = '<label for="dir-search" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Search connectors</label><div style="display: flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px; border-radius: 22px; border: 1px solid #D5D8E0; background: #FFFFFF; min-width: 260px">%s<input id="dir-search" type="search" placeholder="Search connectors" style="flex: 1 1 auto; min-width: 0; border: 0; outline: none; font: inherit; font-size: 14.5px; background: transparent"></div>' % icon('M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3', 16, MUTED)
    return section('<div>%s%s</div><div style="margin-top: 44px; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; align-items: center"><div role="group" aria-label="Filter connectors" style="display: flex; gap: 8px; flex-wrap: wrap">%s</div>%s</div><div style="margin-top: 24px; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px">%s</div>' % (h2(title), lead(sub) if sub else '', fbtns, search, grid), '#FFFFFF', sid='main')

def note_bar(text):
    return '<div role="note" style="background: #FFF7ED; border-bottom: 1px solid #F5D9C0; padding: 10px 40px; text-align: center; font-size: 13.5px; color: #9A3412">%s</div>' % text

# ---------- page ----------
def page(ctx, title, body, h, pre=''):
    script_vals = []
    if ctx.tabs:
        script_vals.append('''      tab: (function () { var o = {}; for (var i = 0; i < %d; i++) { (function (i) { var on = i === self.state.t; o['t' + i] = on; o['s' + i] = on; o['l' + i] = on ? '#FFFFFF' : 'rgba(255,255,255,0.16)'; o['f' + i] = on ? '#FFFFFF' : '#A5B4FC'; o['b' + i] = on ? '#CDD0F3' : 'rgba(205,208,243,0.6)'; o['p' + i] = function () { self.setState({ t: i }); }; })(i); } return o; })()''' % ctx.tabs)
    if ctx.directory:
        script_vals.append('''      dir: (function () {
        var items = %s, filters = %s, f = self.state.f;
        return {
          filters: filters.map(function (x) { var on = x.key === f; return { label: x.label, on: on, bg: on ? '#101426' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3040', bd: on ? '#101426' : '#DDE0E7', pick: function () { self.setState({ f: x.key }); } }; }),
          items: items.filter(function (it) { return f === 'all' || it.group === f; })
        };
      })()''' % (json.dumps(ctx.directory['items'], ensure_ascii=False), json.dumps(ctx.directory['filters'], ensure_ascii=False)))
    script_vals += ctx.extra
    st = {'t': 0, 'f': 'all'}; st.update(ctx.state)
    script = '''class Component extends DCLogic {
  constructor(props) { super(props); this.state = %s; }
  renderVals() {
    var self = this;
    return {
%s
    };
  }
}''' % (json.dumps(st), ',\n'.join(script_vals))
    return '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>%s</title>
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
<div style="font-family: Inter, system-ui, sans-serif; color: #2B3040; background: #FFFFFF; min-width: 0; font-variant-numeric: tabular-nums">
<dc-import name="SiteHeader" hint-size="100%%,72px"></dc-import>
%s
%s
<dc-import name="SiteFooter" cta="{{%s}}" hint-size="100%%,1050px"></dc-import>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1440,"height":%d}}'>
%s
</script>
</body>
</html>
''' % (title, pre, body, 'true' if ctx.footer_cta else 'false', h, script)

# ---------- Batch B additions ----------
def _rowlist(rows, left_w='1 1 0'):
    return ''.join('<div style="display: flex; align-items: center; gap: 10px; padding: 11px 0; border-top: 1px solid #F1F2F5; font-size: 13.5px">%s<span style="flex: %s; color: %s; font-weight: 500">%s</span><span style="color: %s; text-align: right">%s</span></div>' % (pre, left_w, INK, a, MUTED, b) for pre, a, b in rows)

def art_clients(ctx, kind='lav', h=380):
    rows = [(mono('QT', '#4F46E5', 26, 10), 'Quillmere Textiles', 'Agency team'), (mono('SB', '#B45309', 26, 10), 'Saffron Bank', 'Client viewer'),
            (mono('NF', '#15803D', 26, 10), 'Northwind Foods', 'Client viewer'), (mono('KW', '#0E7490', 26, 10), 'Kohistan Water', 'Agency team')]
    return tile(ctx, card('<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px"><span style="font-size: 14.5px; font-weight: 600; color: %s">Clients</span>%s</div>%s' % (INK, badge('All up to date', *GOOD), _rowlist(rows)), 340), kind, h)

def art_roles(ctx, kind='navy', h=380):
    rows = [('', 'Operations admin', 'All clients'), ('', 'Media planner', 'All clients'), ('', 'Client admin', 'Own client'), ('', 'Client viewer', 'Own dashboards')]
    return tile(ctx, card('<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px"><span style="font-size: 14.5px; font-weight: 600; color: %s">Roles</span>%s</div>%s' % (INK, badge('6 roles', *SOFT), _rowlist(rows)), 330), kind, h)

def art_audit(ctx, kind='navy', h=380):
    rows = [('<span style="flex: 0 0 64px; font-size: 12px; color: %s">10:42</span>' % MUTED, 'Ayesha Khan exported a report', ''), ('<span style="flex: 0 0 64px; font-size: 12px; color: %s">09:58</span>' % MUTED, 'Bilal Ahmed asked Cerebro', ''),
            ('<span style="flex: 0 0 64px; font-size: 12px; color: %s">Yesterday</span>' % MUTED, 'Sara Malik made Client viewer', '')]
    return tile(ctx, card('<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px"><span style="font-size: 14.5px; font-weight: 600; color: %s">Activity log</span>%s</div>%s' % (INK, badge('Recorded', *GOOD), _rowlist(rows)), 360), kind, h)

def art_roas(ctx, kind='lav', h=380):
    inner = card(('<div style="font-size: 12.5px; color: %s">Platforms claim</div><div style="margin-top: 4px; display: flex; align-items: baseline; gap: 8px"><span style="font-family: Geist, Inter, sans-serif; font-size: 22px; font-weight: 600; color: #9AA0AD; text-decoration: line-through">PKR 22.5M</span><span style="font-size: 13px; color: #9AA0AD">3.9x</span></div>'
                  '<div style="margin-top: 14px; font-size: 12.5px; color: %s">Your sales data shows</div><div style="margin-top: 4px; font-family: Geist, Inter, sans-serif; font-size: 22px; font-weight: 600; color: %s">PKR 14.5M</div>'
                  '<div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid #F1F2F5; display: flex; align-items: center; justify-content: space-between"><span style="font-size: 13px; color: %s">Blended ROAS on PKR 5.8M spend</span><span style="display: flex; align-items: center; gap: 8px"><span style="font-family: Geist, Inter, sans-serif; font-size: 28px; font-weight: 600; color: %s">2.5x</span>%s</span></div>') % (MUTED, MUTED, INK, MUTED, INK, badge('True return', *GOOD)), 340)
    return tile(ctx, inner, kind, h)

def art_portfolio(ctx, kind='lav', h=380):
    rows = [('', 'Northwind Foods', 'Awareness, CPM PKR 138'), ('', 'Kohistan Water', 'Awareness, CPM PKR 121'), ('', 'Northwind Juices', 'Sales, CPA PKR 412')]
    return tile(ctx, card('<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px"><span style="font-size: 14.5px; font-weight: 600; color: %s">Portfolio, last 30 days</span>%s</div>%s' % (INK, badge('3 brands', *SOFT), _rowlist(rows)), 360), kind, h)

def pains(title, items, bg='#FFFFFF'):
    cs = ''.join('<div style="flex: 1 1 280px; min-width: 0; border-top: 2px solid %s; padding-top: 20px"><div style="font-family: Geist, Inter, sans-serif; font-size: 20px; font-weight: 600; color: %s">%s</div><div style="margin-top: 8px; font-size: 15.5px; line-height: 1.55; color: %s">%s</div></div>' % (INK, INK, t, MUTED, l) for t, l in items)
    return section('<div>%s</div><div style="margin-top: 48px; display: flex; gap: 32px; flex-wrap: wrap">%s</div>' % (h2(title), cs), bg, '96px 0')

def chips(title, items, bg='#F7F8FA'):
    cs = ''.join('<span style="display: inline-flex; align-items: center; gap: 8px; min-height: 46px; padding: 0 18px; border-radius: 23px; background: #FFFFFF; font-size: 15px; color: %s; box-shadow: 0 6px 16px rgba(28,26,87,0.06)">%s%s</span>' % (INK, icon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 15, BRAND, 1.8), q) for q in items)
    return section('<div>%s</div><div style="margin-top: 40px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center">%s</div><div style="margin-top: 28px; text-align: center">%s</div>' % (h2(title), cs, textlink('See Ask Cerebro', 'PlatAsk.dc.html')), bg, '96px 0')

def quote_slot():
    return section('<p style="margin: 0 auto; max-width: 820px; text-align: center; font-family: Geist, Inter, sans-serif; font-size: clamp(24px, 2.6vw, 32px); line-height: 1.3; font-weight: 500; letter-spacing: -0.015em; color: #9AA0AD">“[One approved client quote, shown once it is approved in writing.]”</p><div style="margin-top: 22px; text-align: center; font-size: 14px; color: %s">[Name], [Role], [Company]</div>' % MUTED, '#FFFFFF', '96px 0')

SOLS = [('agencies', 'Agencies', 'Every client, one workspace.', 'SolAgencies.dc.html', 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'),
        ('brands', 'Brands', 'One true view of paid media.', 'SolBrands.dc.html', 'M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01'),
        ('banking', 'Banking and finance', 'Access you control.', 'IndBanking.dc.html', 'M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M12 3l9 5H3z'),
        ('telecom', 'Telecom', 'Always-on, always in view.', 'IndTelecom.dc.html', 'M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4'),
        ('fmcg', 'FMCG', 'Every brand, the right goal.', 'IndFMCG.dc.html', 'M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8'),
        ('ecommerce', 'E-commerce', 'What your ads really earn.', 'IndEcommerce.dc.html', 'M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6M10 21h.01M18 21h.01')]

def solutions_nav(current):
    cs = ''.join('<a href="%s" style="flex: 1 1 180px; min-width: 0; text-decoration: none; border-radius: 20px; padding: 22px; background: %s; border: 1px solid %s; display: flex; flex-direction: column; gap: 12px; box-sizing: border-box"><span style="width: 40px; height: 40px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center">%s</span><span style="font-size: 16px; font-weight: 600; color: %s">%s</span><span style="font-size: 13.5px; line-height: 1.45; color: %s">%s</span></a>' % (
        href, '#F5F6FF' if k == current else '#FFFFFF', '#C7CBF9' if k == current else '#E4E7EC', icon(d, 20, BRAND, 1.8), INK, t, MUTED, 'You are here' if k == current else l) for k, t, l, href, d in SOLS)
    return section('<div>%s</div><div style="margin-top: 44px; display: flex; gap: 12px; flex-wrap: wrap">%s</div>' % (h2('Built for every team'), cs), '#FFFFFF', '96px 0')

# ---------- Batch C additions ----------
def hero_center(label, title, sub, buttons=True, pad='88px 0 64px'):
    b = '<div style="margin-top: 30px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap">%s%s</div>' % (pill('Book a demo', 'PgDemo.dc.html'), pill('Talk to sales', 'PgContact.dc.html', 'secondary')) if buttons else ''
    return ('<section style="position: relative; overflow: hidden; padding: %s; background: %s">%s<div style="position: relative; max-width: 860px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; text-align: center">'
            '<p style="margin: 0 0 18px; font-size: 14px; font-weight: 600; color: %s">%s</p><h1 style="margin: 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(40px, 4.6vw, 62px); line-height: 1.03; letter-spacing: -0.035em; color: %s">%s</h1>'
            '<p style="margin: 22px auto 0; max-width: 560px; font-size: 19px; line-height: 1.55; color: %s">%s</p>%s</div></section>') % (pad, LAV, glow('left: 50%; top: -420px; margin-left: -450px', 900, 'rgba(165,180,252,0.6)'), BRAND, label, INK, title, MUTED, sub, b)

def field(fid, label, ftype='text', ph='', auto=''):
    return '<div style="display: flex; flex-direction: column; gap: 6px"><label for="%s" style="font-size: 14px; font-weight: 600; color: %s">%s</label><input id="%s" type="%s" placeholder="%s"%s style="min-height: 46px; border: 1px solid #D5D8E0; border-radius: 10px; padding: 0 12px; font: inherit; font-size: 15px; color: %s; background: #FFFFFF"></div>' % (fid, INK, label, fid, ftype, ph, (' autocomplete="%s"' % auto) if auto else '', INK)

def select(fid, label, options):
    o = ''.join('<option>%s</option>' % x for x in options)
    return '<div style="display: flex; flex-direction: column; gap: 6px"><label for="%s" style="font-size: 14px; font-weight: 600; color: %s">%s</label><select id="%s" style="min-height: 46px; border: 1px solid #D5D8E0; border-radius: 10px; padding: 0 10px; font: inherit; font-size: 15px; color: %s; background: #FFFFFF"><option value="">Choose one</option>%s</select></div>' % (fid, INK, label, fid, INK, o)

def textarea(fid, label, ph=''):
    return '<div style="display: flex; flex-direction: column; gap: 6px"><label for="%s" style="font-size: 14px; font-weight: 600; color: %s">%s</label><textarea id="%s" rows="4" placeholder="%s" style="border: 1px solid #D5D8E0; border-radius: 10px; padding: 10px 12px; font: inherit; font-size: 15px; color: %s; resize: vertical"></textarea></div>' % (fid, INK, label, fid, ph, INK)

def checkchips(legend, items):
    c = ''.join('<label style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 14px; border-radius: 22px; border: 1px solid #D5D8E0; font-size: 14px; color: %s; cursor: pointer"><input type="checkbox" style="width: 16px; height: 16px; accent-color: #4F46E5">%s</label>' % (INK, x) for x in items)
    return '<fieldset style="border: 0; margin: 0; padding: 0"><legend style="padding: 0; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: %s">%s</legend><div style="display: flex; gap: 8px; flex-wrap: wrap">%s</div></fieldset>' % (INK, legend, c)

def btn(label, kind='primary', onclick=None, href=None):
    st = 'background: %s; color: #FFFFFF; border: 0' % BRAND if kind == 'primary' else 'background: #FFFFFF; color: %s; border: 1px solid #D5D8E0' % INK
    base = 'display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 23px; %s; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none' % st
    if href:
        return '<a href="%s" style="%s">%s</a>' % (href, base, label)
    if onclick:
        return '<button type="button" onClick="%s" style="%s">%s</button>' % (onclick, base, label)
    return '<button type="button" style="%s">%s</button>' % (base, label)

def check_li(text, dark=False):
    return '<li style="display: flex; gap: 10px; font-size: 15px; line-height: 1.45; color: %s"><span style="flex: 0 0 auto; margin-top: 1px">%s</span>%s</li>' % ('#CDD0F3' if dark else TEXT, icon(CHECK, 16, '#A5B4FC' if dark else BRAND, 2.6), text)

def person(name, title):
    initials = ''.join(w[0] for w in name.replace('[', '').replace(']', '').split()[:2]).upper()
    return '<div style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px"><span role="img" aria-label="Photo placeholder for %s" style="width: 72px; height: 72px; border-radius: 36px; background: #EEF0FF; color: #3730A3; font-family: Geist, Inter, sans-serif; font-size: 22px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center">%s</span><div><div style="font-size: 17px; font-weight: 600; color: %s">%s</div><div style="margin-top: 4px; font-size: 14px; color: %s">%s</div></div></div>' % (name, initials, INK, name, MUTED, title)

def status_card(title, line, st):
    return '<div style="background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 10px"><div style="display: flex; justify-content: space-between; gap: 10px; align-items: flex-start"><span style="font-size: 17px; font-weight: 600; color: %s">%s</span>%s</div><span style="font-size: 14.5px; line-height: 1.5; color: %s">%s</span></div>' % (INK, title, badge(*st), MUTED, line)

def photo_slot(label, h=260):
    return '<div role="img" aria-label="%s" style="height: %dpx; border-radius: 24px; border: 1.5px dashed #C9CDD6; background: #FAFAFC; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px; box-sizing: border-box; font-size: 14px; color: %s">%s</div>' % (label, h, MUTED, label)

# ---------- Batch D and E additions ----------
def filter_pills(ctx, key, cats, label='Filter'):
    """cats: list of (group_id, label). First should be ('all', 'All')."""
    ctx.state[key] = 'all'
    groups = [g for g, _ in cats if g != 'all']
    ctx.extra.append('''      %s: (function () {
        var cur = self.state.%s, cats = %s, o = {};
        o.pills = cats.map(function (c) { var on = c[0] === cur; return { label: c[1], on: on, bg: on ? '#101426' : '#FFFFFF', fg: on ? '#FFFFFF' : '#2B3040', bd: on ? '#101426' : '#DDE0E7', pick: function () { var s = {}; s['%s'] = c[0]; self.setState(s); } }; });
        %s.forEach(function (g) { o['g_' + g] = cur === 'all' || cur === g; });
        return o;
      })()''' % (key, key, json.dumps(cats), key, json.dumps(groups)))
    return ('<div role="group" aria-label="%s" style="display: flex; gap: 8px; flex-wrap: wrap"><sc-for list="{{%s.pills}}" as="p" hint-placeholder-count="%d"><button type="button" aria-pressed="{{p.on}}" onClick="{{p.pick}}" style="height: 40px; padding: 0 16px; border-radius: 20px; border: 1px solid {{p.bd}}; background: {{p.bg}}; color: {{p.fg}}; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer">{{p.label}}</button></sc-for></div>') % (label, key, len(cats))

def when(key, group, html):
    return '<sc-if value="{{%s.g_%s}}" hint-placeholder-val="{{true}}">%s</sc-if>' % (key, group, html)

def search_box(fid, placeholder, w='320px'):
    return '<label for="%s" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">%s</label><div style="display: flex; align-items: center; gap: 8px; height: 48px; padding: 0 16px; border-radius: 24px; border: 1px solid #D5D8E0; background: #FFFFFF; width: %s; max-width: 100%%; box-sizing: border-box">%s<input id="%s" type="search" placeholder="%s" style="flex: 1 1 auto; min-width: 0; border: 0; outline: none; font: inherit; font-size: 15px; background: transparent"></div>' % (fid, placeholder, w, icon('M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3', 17, MUTED), fid, placeholder)

def simple_hero(label, title, sub, extra='', bg=None, center=True, pad='80px 0 56px'):
    al = 'text-align: center; ' if center else ''
    mx = 'auto' if center else '0'
    return ('<section style="position: relative; overflow: hidden; padding: %s; background: %s">%s<div style="position: relative; %s; %s"><p style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: %s">%s</p>'
            '<h1 style="margin: 0 %s; max-width: 900px; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(36px, 4.2vw, 56px); line-height: 1.05; letter-spacing: -0.03em; color: %s">%s</h1>'
            '<p style="margin: 18px %s 0; max-width: 620px; font-size: 19px; line-height: 1.55; color: %s">%s</p>%s</div></section>') % (
        pad, bg or LAV, glow('left: 50%; top: -420px; margin-left: -450px', 900, 'rgba(165,180,252,0.6)') if (bg or LAV) == LAV else '', CONT, al, BRAND, label, mx, INK, title, mx, MUTED, sub, extra)

def prose(blocks):
    out = []
    for b in blocks:
        k = b[0]
        if k == 'h2':
            out.append('<h2 id="%s" style="margin: 48px 0 0; font-family: Geist, Inter, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 600; letter-spacing: -0.015em; color: %s; scroll-margin-top: 96px">%s</h2>' % (b[2], INK, b[1]))
        elif k == 'p':
            out.append('<p style="margin: 16px 0 0; font-size: 17.5px; line-height: 1.75; color: %s">%s</p>' % (TEXT, b[1]))
        elif k in ('ul', 'ol'):
            tag = k
            items = ''.join('<li style="margin-top: 8px; padding-left: 4px">%s</li>' % x for x in b[1])
            out.append('<%s style="margin: 16px 0 0; padding-left: 24px; font-size: 17.5px; line-height: 1.7; color: %s">%s</%s>' % (tag, TEXT, items, tag))
        elif k == 'callout':
            bg, bd, fg = {'info': ('#F5F6FF', '#C7CBF9', '#3730A3'), 'warn': ('#FFF7ED', '#F5D9C0', '#9A3412'), 'ok': ('#F0FDF4', '#BBF7D0', '#166534')}[b[3] if len(b) > 3 else 'info']
            out.append('<div style="margin: 24px 0 0; border: 1px solid %s; background: %s; border-radius: 16px; padding: 18px 20px"><div style="font-size: 14px; font-weight: 600; color: %s">%s</div><div style="margin-top: 6px; font-size: 16px; line-height: 1.6; color: %s">%s</div></div>' % (bd, bg, fg, b[1], TEXT, b[2]))
        elif k == 'figure':
            out.append('<figure style="margin: 32px 0 0">%s<figcaption style="margin-top: 10px; font-size: 13.5px; color: %s">%s</figcaption></figure>' % (b[1], MUTED, b[2]))
        elif k == 'code':
            out.append('<pre style="margin: 20px 0 0; padding: 16px 18px; border-radius: 14px; background: #0D0B33; color: #CDD0F3; font-family: \'Geist Mono\', ui-monospace, monospace; font-size: 14px; line-height: 1.7; overflow-x: auto">%s</pre>' % b[1])
    return ''.join(out)

def toc(items, title='On this page'):
    links = ''.join('<li><a href="#%s" style="display: block; padding: 6px 0; font-size: 14px; color: %s; text-decoration: none">%s</a></li>' % (i, MUTED, l) for i, l in items)
    return '<nav aria-label="%s"><div style="font-size: 12.5px; font-weight: 600; color: %s">%s</div><ul style="margin: 10px 0 0; padding: 0 0 0 14px; list-style: none; border-left: 1px solid #E4E7EC">%s</ul></nav>' % (title, INK, title, links)

def post_card(ctx, href, art, cat, title, meta, big=False):
    return ('<a href="%s" style="%s; min-width: 0; text-decoration: none; display: flex; flex-direction: %s; gap: %s; %s">'
            '<div style="%s">%s</div><div style="%s"><span style="font-size: 13px; font-weight: 600; color: %s">%s</span>'
            '<span style="display: block; margin-top: 8px; font-family: Geist, Inter, sans-serif; font-size: %s; line-height: 1.22; font-weight: 600; letter-spacing: -0.015em; color: %s">%s</span>'
            '<span style="display: block; margin-top: 10px; font-size: 14px; color: %s">%s</span></div></a>') % (
        href, 'flex: 1 1 100%' if big else 'flex: 1 1 320px', 'row' if big else 'column', '40px' if big else '18px', 'flex-wrap: wrap; align-items: center' if big else '',
        'flex: 1.2 1 480px; min-width: 0' if big else '', art, 'flex: 1 1 360px; min-width: 0' if big else '', BRAND, cat, '34px' if big else '21px', INK, title, MUTED, meta)

def draft_banner(text='Draft for legal review. Not yet in effect.'):
    return '<div role="note" style="background: #FFF7ED; border-bottom: 1px solid #F5D9C0; padding: 12px 40px; text-align: center; font-size: 14px; font-weight: 600; color: #9A3412">%s</div>' % text

def side_layout(left, main, right=None, bg='#FFFFFF', pad='56px 0 104px'):
    r = '<aside style="flex: 0 0 220px; min-width: 0">%s</aside>' % right if right else ''
    return '<section style="padding: %s; background: %s"><div style="%s; display: flex; gap: 56px; flex-wrap: wrap; align-items: flex-start"><aside style="flex: 0 0 220px; min-width: 0">%s</aside><div style="flex: 1 1 560px; min-width: 0; max-width: 760px">%s</div>%s</div></section>' % (pad, bg, CONT, left, main, r)
