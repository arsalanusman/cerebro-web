const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const WIDTH = 2880;
const HEIGHT = 1800;

function createCrcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  return table;
}

const CRC_TABLE = createCrcTable();

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type);
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  let c = 0xffffffff;
  for (let i = 0; i < body.length; i++) {
    c = (c >>> 8) ^ CRC_TABLE[(c ^ body[i]) & 0xff];
  }
  crc.writeUInt32BE((c ^ 0xffffffff) >>> 0, 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

class Canvas {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.rowSize = 1 + w * 3;
    this.buffer = Buffer.alloc(this.rowSize * h);
    for (let y = 0; y < h; y++) {
      this.buffer[y * this.rowSize] = 0; // Filter: None
    }
  }

  fill(r, g, b) {
    for (let y = 0; y < this.h; y++) {
      const rowOffset = y * this.rowSize;
      for (let x = 0; x < this.w; x++) {
        const px = rowOffset + 1 + x * 3;
        this.buffer[px] = r;
        this.buffer[px + 1] = g;
        this.buffer[px + 2] = b;
      }
    }
  }

  fillRect(x, y, w, h, r, g, b) {
    const x0 = Math.max(0, Math.floor(x));
    const y0 = Math.max(0, Math.floor(y));
    const x1 = Math.min(this.w, Math.floor(x + w));
    const y1 = Math.min(this.h, Math.floor(y + h));
    for (let cy = y0; cy < y1; cy++) {
      const rowOffset = cy * this.rowSize;
      for (let cx = x0; cx < x1; cx++) {
        const px = rowOffset + 1 + cx * 3;
        this.buffer[px] = r;
        this.buffer[px + 1] = g;
        this.buffer[px + 2] = b;
      }
    }
  }

  strokeRect(x, y, w, h, border, r, g, b) {
    this.fillRect(x, y, w, border, r, g, b);
    this.fillRect(x, y + h - border, w, border, r, g, b);
    this.fillRect(x, y, border, h, r, g, b);
    this.fillRect(x + w - border, y, border, h, r, g, b);
  }

  drawCard(x, y, w, h, bg, border) {
    this.fillRect(x, y, w, h, bg[0], bg[1], bg[2]);
    if (border) {
      this.strokeRect(x, y, w, h, 2, border[0], border[1], border[2]);
    }
  }

  toPngBuffer() {
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(this.w, 0);
    ihdr.writeUInt32BE(this.h, 4);
    ihdr[8] = 8;
    ihdr[9] = 2; // RGB
    const ihdrChunk = createChunk('IHDR', ihdr);
    const compressed = zlib.deflateSync(this.buffer, { level: 6 });
    const idatChunk = createChunk('IDAT', compressed);
    const iendChunk = createChunk('IEND', Buffer.alloc(0));
    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  }
}

// Colors (Theme matching Cerebro DNano design system)
const C_BG = [248, 250, 252];         // #F8FAFC surface
const C_WHITE = [255, 255, 255];
const C_NAVY_DARK = [6, 16, 30];       // #06101E
const C_NAVY_SURFACE = [15, 32, 56];   // #0F2038
const C_BLUE_ACCENT = [74, 143, 224];  // #4A8FE0
const C_BLUE_SOFT = [238, 244, 252];   // #EEF4FC
const C_BORDER_LIGHT = [226, 232, 240];
const C_BORDER_DARK = [30, 58, 107];
const C_TEXT_DARK = [15, 23, 42];
const C_TEXT_MUTED = [100, 116, 139];
const C_TEXT_LIGHT = [232, 240, 250];
const C_GREEN = [34, 197, 94];
const C_RED = [239, 68, 68];
const C_AMBER = [245, 158, 11];

function drawAppShell(canvas, title, activeTab = 'Dashboard') {
  canvas.fill(C_BG[0], C_BG[1], C_BG[2]);

  // Top app header (height: 110)
  canvas.fillRect(0, 0, WIDTH, 110, C_NAVY_DARK[0], C_NAVY_DARK[1], C_NAVY_DARK[2]);
  // Logo placeholder (icon + text block)
  canvas.fillRect(60, 35, 40, 40, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
  canvas.fillRect(115, 42, 160, 26, C_WHITE[0], C_WHITE[1], C_WHITE[2]);

  // Nav links in top header
  const tabs = ['Dashboard', 'Campaigns', 'Ask Cerebro', 'Connections', 'Reports', 'Team'];
  tabs.forEach((tab, i) => {
    const x = 340 + i * 180;
    const isActive = (tab === activeTab);
    if (isActive) {
      canvas.fillRect(x, 32, 140, 46, C_NAVY_SURFACE[0], C_NAVY_SURFACE[1], C_NAVY_SURFACE[2]);
      canvas.fillRect(x + 20, 50, 100, 10, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
    } else {
      canvas.fillRect(x + 20, 50, 100, 10, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
    }
  });

  // Top Right: User & Date badge
  canvas.fillRect(WIDTH - 520, 35, 340, 40, C_NAVY_SURFACE[0], C_NAVY_SURFACE[1], C_NAVY_SURFACE[2]);
  canvas.fillRect(WIDTH - 500, 48, 200, 14, C_TEXT_LIGHT[0], C_TEXT_LIGHT[1], C_TEXT_LIGHT[2]);
  canvas.fillRect(WIDTH - 120, 35, 40, 40, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);

  // Subheader title bar (height: 90)
  canvas.fillRect(0, 110, WIDTH, 90, C_WHITE[0], C_WHITE[1], C_WHITE[2]);
  canvas.strokeRect(0, 198, WIDTH, 2, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
  // Page title block
  canvas.fillRect(60, 140, 360, 30, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  // Subtitle / crumbs
  canvas.fillRect(60, 175, 220, 12, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

  // Action buttons on right
  canvas.fillRect(WIDTH - 380, 132, 140, 46, C_WHITE[0], C_WHITE[1], C_WHITE[2]);
  canvas.strokeRect(WIDTH - 380, 132, 140, 46, 2, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
  canvas.fillRect(WIDTH - 210, 132, 150, 46, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
}

// 1. Ask Why CPA (/product/ask-why-cpa.png)
function renderAskWhyCpa() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  drawAppShell(canvas, 'Ask Cerebro', 'Ask Cerebro');

  // Query bar card
  canvas.drawCard(60, 240, WIDTH - 120, 100, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(100, 275, 450, 28, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]); // Query: "Why did CPA rise last month?"
  canvas.fillRect(WIDTH - 240, 265, 140, 50, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]); // Ask button

  // Answer container (Two columns: Explanation on left, Metrics on right)
  canvas.drawCard(60, 380, 1600, 1340, C_WHITE, C_BORDER_LIGHT);
  // Natural language summary header
  canvas.fillRect(110, 430, 800, 32, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  canvas.fillRect(110, 480, 1400, 18, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
  canvas.fillRect(110, 515, 1360, 18, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
  canvas.fillRect(110, 550, 1180, 18, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

  // Platform Breakdown Cards inside answer
  const platforms = [
    { name: 'Meta Ads', cpa: '$14.20', delta: '+18%', color: [24, 119, 242] },
    { name: 'Google Ads', cpa: '$8.40', delta: '-4%', color: [66, 133, 244] },
    { name: 'TikTok Ads', cpa: '$22.80', delta: '+34%', color: [255, 0, 80] },
  ];

  platforms.forEach((p, idx) => {
    const y = 630 + idx * 210;
    canvas.drawCard(110, y, 1500, 170, C_BG, C_BORDER_LIGHT);
    // Platform logo square
    canvas.fillRect(140, y + 35, 60, 60, p.color[0], p.color[1], p.color[2]);
    // Platform name
    canvas.fillRect(230, y + 45, 260, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(230, y + 80, 380, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

    // Metric numbers
    canvas.fillRect(1100, y + 45, 180, 32, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1350, y + 45, 120, 32, (p.delta.startsWith('+') ? C_RED : C_GREEN)[0], (p.delta.startsWith('+') ? C_RED : C_GREEN)[1], (p.delta.startsWith('+') ? C_RED : C_GREEN)[2]);
  });

  // Recommended actions box
  canvas.drawCard(110, 1300, 1500, 360, C_BLUE_SOFT, C_BLUE_ACCENT);
  canvas.fillRect(150, 1340, 500, 26, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
  canvas.fillRect(150, 1390, 1380, 18, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  canvas.fillRect(150, 1430, 1340, 18, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  canvas.fillRect(150, 1470, 1200, 18, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);

  // Right column: Trend chart & audience impact
  canvas.drawCard(1700, 380, WIDTH - 1760, 640, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(1740, 420, 350, 26, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  // Simulated line/bar chart
  for (let c = 0; c < 12; c++) {
    const barH = 140 + Math.sin(c * 0.6) * 90;
    canvas.fillRect(1760 + c * 80, 920 - barH, 44, barH, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
  }

  // Right column bottom: Anomaly detection card
  canvas.drawCard(1700, 1060, WIDTH - 1760, 660, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(1740, 1100, 400, 26, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  for (let row = 0; row < 5; row++) {
    const ry = 1170 + row * 90;
    canvas.fillRect(1740, ry, 500, 18, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1740, ry + 28, 380, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
    canvas.fillRect(WIDTH - 240, ry + 10, 120, 28, C_GREEN[0], C_GREEN[1], C_GREEN[2]);
  }

  return canvas.toPngBuffer();
}

// 2. Connections (/product/connections.png)
function renderConnections() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  drawAppShell(canvas, 'Connected Platforms', 'Connections');

  // Header info banner
  canvas.drawCard(60, 240, WIDTH - 120, 120, C_BLUE_SOFT, C_BLUE_ACCENT);
  canvas.fillRect(110, 275, 600, 28, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
  canvas.fillRect(110, 315, 840, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
  canvas.fillRect(WIDTH - 320, 275, 200, 48, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);

  // 3 Large Platform Connection Cards (Meta Ads, Google Ads, TikTok Ads)
  const connectors = [
    { name: 'Meta Ads', accounts: '14 Active Accounts', status: 'Connected & Up to date', color: [24, 119, 242] },
    { name: 'Google Ads', accounts: '9 Active Accounts', status: 'Connected & Up to date', color: [66, 133, 244] },
    { name: 'TikTok Ads', accounts: '6 Active Accounts', status: 'Connected & Up to date', color: [255, 0, 80] },
  ];

  connectors.forEach((conn, idx) => {
    const y = 400 + idx * 300;
    canvas.drawCard(60, y, WIDTH - 120, 260, C_WHITE, C_BORDER_LIGHT);

    // Platform Logo
    canvas.fillRect(110, y + 60, 90, 90, conn.color[0], conn.color[1], conn.color[2]);
    // Info
    canvas.fillRect(230, y + 65, 340, 32, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(230, y + 115, 260, 18, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

    // Status Pill (Connected & Up to date)
    canvas.fillRect(800, y + 80, 260, 44, C_GREEN[0], C_GREEN[1], C_GREEN[2]);

    // Data sync indicator
    canvas.fillRect(1250, y + 75, 300, 18, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1250, y + 105, 240, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

    // Configure Button
    canvas.fillRect(WIDTH - 420, y + 75, 160, 48, C_WHITE[0], C_WHITE[1], C_WHITE[2]);
    canvas.strokeRect(WIDTH - 420, y + 75, 160, 48, 2, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
    canvas.fillRect(WIDTH - 230, y + 75, 130, 48, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
  });

  // Bottom Security & Compliance Note
  canvas.drawCard(60, 1340, WIDTH - 120, 360, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(110, 1380, 450, 26, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  for (let s = 0; s < 3; s++) {
    const sy = 1440 + s * 70;
    canvas.fillRect(110, sy + 8, 24, 24, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
    canvas.fillRect(150, sy, 700, 18, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(150, sy + 28, 500, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
  }

  return canvas.toPngBuffer();
}

// 3. Ask Audience (/product/ask-audience.png)
function renderAskAudience() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  drawAppShell(canvas, 'Ask Cerebro', 'Ask Cerebro');

  // Query bar
  canvas.drawCard(60, 240, WIDTH - 120, 100, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(100, 275, 600, 28, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]); // "Show Meta conversions and CPA by age and gender"

  // Left card: Demographic breakdown by Age
  canvas.drawCard(60, 380, 1340, 1340, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(110, 430, 600, 30, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  canvas.fillRect(110, 475, 450, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

  const ageGroups = [
    { age: '18-24', pct: 450, cpa: '$16.40', conv: '412' },
    { age: '25-34', pct: 900, cpa: '$9.20',  conv: '1,280' },
    { age: '35-44', pct: 720, cpa: '$11.80', conv: '840' },
    { age: '45-54', pct: 360, cpa: '$18.90', conv: '310' },
    { age: '55-64', pct: 210, cpa: '$24.50', conv: '145' },
  ];

  ageGroups.forEach((ag, idx) => {
    const y = 560 + idx * 190;
    canvas.fillRect(110, y, 160, 22, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    // Bar
    canvas.fillRect(290, y, 680, 28, C_BG[0], C_BG[1], C_BG[2]);
    canvas.fillRect(290, y, ag.pct * 0.7, 28, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);
    // Metrics
    canvas.fillRect(1020, y, 140, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1200, y, 120, 24, C_GREEN[0], C_GREEN[1], C_GREEN[2]);
  });

  // Right card: Gender Split & Performance
  canvas.drawCard(1440, 380, WIDTH - 1500, 1340, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(1490, 430, 520, 30, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);

  // Gender comparison cards
  canvas.drawCard(1490, 500, 600, 320, C_BLUE_SOFT, C_BLUE_ACCENT);
  canvas.fillRect(1530, 540, 240, 24, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]); // Female (58%)
  canvas.fillRect(1530, 580, 200, 48, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);      // CPA $10.15
  canvas.fillRect(1530, 650, 480, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

  canvas.drawCard(2130, 500, 600, 320, C_BG, C_BORDER_LIGHT);
  canvas.fillRect(2170, 540, 240, 24, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);  // Male (42%)
  canvas.fillRect(2170, 580, 200, 48, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);      // CPA $14.80
  canvas.fillRect(2170, 650, 480, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

  // Detailed campaign demographic table
  canvas.fillRect(1490, 890, 400, 26, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  for (let r = 0; r < 6; r++) {
    const ty = 960 + r * 110;
    canvas.fillRect(1490, ty, 500, 20, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1490, ty + 30, 340, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
    canvas.fillRect(2200, ty + 10, 180, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(2500, ty + 10, 140, 24, C_GREEN[0], C_GREEN[1], C_GREEN[2]);
  }

  return canvas.toPngBuffer();
}

// 4. Objective Filter (/product/objective-filter.png)
function renderObjectiveFilter() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  drawAppShell(canvas, 'Client Performance', 'Campaigns');

  // Filter bar
  canvas.drawCard(60, 230, WIDTH - 120, 90, C_WHITE, C_BORDER_LIGHT);
  // Filter pills
  canvas.fillRect(100, 252, 220, 46, C_BG[0], C_BG[1], C_BG[2]);
  canvas.fillRect(340, 252, 240, 46, C_BG[0], C_BG[1], C_BG[2]);

  // Objective Filter Button (ACTIVE / OPEN)
  canvas.drawCard(600, 250, 360, 50, C_BLUE_SOFT, C_BLUE_ACCENT);
  canvas.fillRect(630, 266, 260, 18, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);

  // Dropdown menu showing Awareness, Traffic, Sales
  canvas.drawCard(600, 310, 420, 360, C_WHITE, C_BORDER_LIGHT);
  const objectives = [
    { label: '[✓] Awareness', desc: 'Reach, Impressions, CPM', active: true },
    { label: '[✓] Traffic', desc: 'Clicks, CPC, CTR', active: true },
    { label: '[✓] Sales', desc: 'Conversions, CPA, ROAS', active: true },
  ];
  objectives.forEach((obj, idx) => {
    const oy = 330 + idx * 105;
    if (obj.active) {
      canvas.fillRect(610, oy, 400, 95, C_BLUE_SOFT[0], C_BLUE_SOFT[1], C_BLUE_SOFT[2]);
    }
    canvas.fillRect(640, oy + 20, 260, 22, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(640, oy + 54, 300, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
  });

  // Performance Table below
  canvas.drawCard(60, 710, WIDTH - 120, 1010, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(100, 750, 400, 26, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);

  // Table rows
  for (let r = 0; r < 7; r++) {
    const ry = 820 + r * 125;
    canvas.strokeRect(60, ry - 15, WIDTH - 120, 1, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
    canvas.fillRect(100, ry + 15, 450, 22, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(100, ry + 45, 260, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

    // Platform pill
    const pColor = (r % 3 === 0) ? [24, 119, 242] : (r % 3 === 1) ? [66, 133, 244] : [255, 0, 80];
    canvas.fillRect(720, ry + 25, 140, 36, pColor[0], pColor[1], pColor[2]);

    // Objective tag
    canvas.fillRect(960, ry + 25, 180, 36, C_BLUE_SOFT[0], C_BLUE_SOFT[1], C_BLUE_SOFT[2]);

    // Metrics
    canvas.fillRect(1350, ry + 25, 180, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1750, ry + 25, 160, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(2150, ry + 25, 160, 24, C_GREEN[0], C_GREEN[1], C_GREEN[2]);
    canvas.fillRect(2550, ry + 25, 140, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  }

  return canvas.toPngBuffer();
}

// 5. Dashboard Overview (/product/dashboard.png)
function renderDashboard() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  drawAppShell(canvas, 'Executive Overview', 'Dashboard');

  // Top 7 KPI Cards across the width
  // Spend, Impressions, Clicks, CTR, CPM, CPC, CPA
  const kpis = [
    { label: 'Total Spend', val: '$148,200', delta: '+8.4%' },
    { label: 'Impressions', val: '8.42M', delta: '+14.2%' },
    { label: 'Clicks', val: '184,200', delta: '+11.8%' },
    { label: 'Avg CTR', val: '2.18%', delta: '+0.12%' },
    { label: 'Avg CPM', val: '$17.60', delta: '-5.1%' },
    { label: 'Avg CPC', val: '$0.80', delta: '-3.2%' },
    { label: 'Avg CPA', val: '$38.40', delta: '-12.6%' },
  ];

  const cardW = 370;
  const gap = 20;
  kpis.forEach((kpi, idx) => {
    const x = 60 + idx * (cardW + gap);
    canvas.drawCard(x, 230, cardW, 160, C_WHITE, C_BORDER_LIGHT);
    canvas.fillRect(x + 24, 256, 160, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);
    canvas.fillRect(x + 24, 290, 200, 38, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(x + 24, 345, 100, 18, (kpi.delta.includes('-') && kpi.label.includes('CP') ? C_GREEN : C_BLUE_ACCENT)[0], C_GREEN[1], C_GREEN[2]);
  });

  // Main Multi-Platform Trend Chart (height: 540)
  canvas.drawCard(60, 420, WIDTH - 120, 540, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(100, 460, 420, 28, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  canvas.fillRect(WIDTH - 500, 460, 400, 24, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

  // Chart area
  for (let bar = 0; bar < 28; bar++) {
    const bx = 120 + bar * 92;
    const h1 = 160 + Math.sin(bar * 0.4) * 80;
    const h2 = 120 + Math.cos(bar * 0.5) * 60;
    const h3 = 80 + Math.sin(bar * 0.3) * 40;
    canvas.fillRect(bx, 900 - h1, 24, h1, 24, 119, 242);       // Meta
    canvas.fillRect(bx + 26, 900 - h2, 24, h2, 66, 133, 244);   // Google
    canvas.fillRect(bx + 52, 900 - h3, 24, h3, 255, 0, 80);     // TikTok
  }

  // Bottom Campaigns Table (height: 720)
  canvas.drawCard(60, 1000, WIDTH - 120, 720, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(100, 1040, 380, 26, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);

  for (let row = 0; row < 5; row++) {
    const ry = 1120 + row * 115;
    canvas.strokeRect(60, ry - 15, WIDTH - 120, 1, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
    canvas.fillRect(100, ry + 15, 520, 22, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(100, ry + 45, 340, 14, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

    canvas.fillRect(800, ry + 20, 180, 30, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1200, ry + 20, 160, 30, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(1600, ry + 20, 160, 30, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(2000, ry + 20, 160, 30, C_GREEN[0], C_GREEN[1], C_GREEN[2]);
    canvas.fillRect(2450, ry + 20, 180, 36, C_BLUE_SOFT[0], C_BLUE_SOFT[1], C_BLUE_SOFT[2]);
  }

  return canvas.toPngBuffer();
}

// 6. Team Access (/product/team-access.png)
function renderTeamAccess() {
  const canvas = new Canvas(WIDTH, HEIGHT);
  drawAppShell(canvas, 'Team & Client Access', 'Team');

  // Top action bar
  canvas.drawCard(60, 230, WIDTH - 120, 100, C_WHITE, C_BORDER_LIGHT);
  canvas.fillRect(100, 265, 380, 28, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
  canvas.fillRect(WIDTH - 380, 255, 140, 48, C_WHITE[0], C_WHITE[1], C_WHITE[2]);
  canvas.strokeRect(WIDTH - 380, 255, 140, 48, 2, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
  canvas.fillRect(WIDTH - 210, 255, 150, 48, C_BLUE_ACCENT[0], C_BLUE_ACCENT[1], C_BLUE_ACCENT[2]);

  // Main Team & Permission Table
  canvas.drawCard(60, 360, WIDTH - 120, 1360, C_WHITE, C_BORDER_LIGHT);

  const teamMembers = [
    { name: 'Sarah Jenkins', email: 'sarah@agency.com', role: 'Workspace Admin', clients: 'All Clients (18)' },
    { name: 'Marcus Vance',  email: 'marcus@agency.com', role: 'Media Buyer',    clients: 'Nike, Red Bull (2)' },
    { name: 'Elena Rostova', email: 'elena@agency.com',  role: 'Analyst',        clients: 'E-commerce Group (6)' },
    { name: 'David Cho',     email: 'david@client.com',  role: 'Client Viewer',  clients: 'Acme Retail Only (1)' },
    { name: 'Amina Tariq',   email: 'amina@agency.com',  role: 'Campaign Lead',  clients: 'Global Brands (5)' },
    { name: 'Liam Murphy',   email: 'liam@client.com',   role: 'Client Viewer',  clients: 'Fintech Corp Only (1)' },
  ];

  teamMembers.forEach((tm, idx) => {
    const y = 460 + idx * 190;
    canvas.strokeRect(60, y - 20, WIDTH - 120, 1, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);

    // Avatar square
    canvas.fillRect(100, y + 10, 60, 60, C_NAVY_SURFACE[0], C_NAVY_SURFACE[1], C_NAVY_SURFACE[2]);
    // Member Name & Email
    canvas.fillRect(190, y + 15, 340, 24, C_TEXT_DARK[0], C_TEXT_DARK[1], C_TEXT_DARK[2]);
    canvas.fillRect(190, y + 48, 280, 16, C_TEXT_MUTED[0], C_TEXT_MUTED[1], C_TEXT_MUTED[2]);

    // Role Badge
    canvas.fillRect(800, y + 20, 220, 40, C_BLUE_SOFT[0], C_BLUE_SOFT[1], C_BLUE_SOFT[2]);

    // Client Scope Badge
    canvas.fillRect(1280, y + 20, 320, 40, C_BG[0], C_BG[1], C_BG[2]);

    // Multi-currency permission badge
    canvas.fillRect(1850, y + 20, 240, 40, C_GREEN[0], C_GREEN[1], C_GREEN[2]);

    // Status toggle & actions
    canvas.fillRect(WIDTH - 380, y + 25, 80, 32, C_GREEN[0], C_GREEN[1], C_GREEN[2]);
    canvas.fillRect(WIDTH - 240, y + 25, 140, 36, C_BORDER_LIGHT[0], C_BORDER_LIGHT[1], C_BORDER_LIGHT[2]);
  });

  return canvas.toPngBuffer();
}

const outDir = path.join(__dirname, '..', 'public', 'product');
fs.mkdirSync(outDir, { recursive: true });

console.log('Generating 2880 x 1800 screenshot slots...');

const slots = [
  { file: 'ask-why-cpa.png', render: renderAskWhyCpa },
  { file: 'connections.png', render: renderConnections },
  { file: 'ask-audience.png', render: renderAskAudience },
  { file: 'objective-filter.png', render: renderObjectiveFilter },
  { file: 'dashboard.png', render: renderDashboard },
  { file: 'team-access.png', render: renderTeamAccess },
];

slots.forEach(({ file, render }) => {
  const p = path.join(outDir, file);
  const buf = render();
  fs.writeFileSync(p, buf);
  console.log(`✓ Generated ${file} (${buf.length} bytes, 2880x1800)`);
});

console.log('All screenshot slots generated successfully!');
