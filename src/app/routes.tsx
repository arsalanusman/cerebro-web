import {
  createBrowserRouter, Outlet, NavLink, useNavigate, useLocation,
} from "react-router";
import heroDashImg from "@/imports/image.png";
import cerebroLogo from "@/imports/Cerebro_logo_darkbg_png.png";
import cerebroLogoAlt from "@/imports/Cerebro_logo_darkbg_png-1.png";
import explorerImg from "@/imports/image-2.png";
import reportMockupImg from "@/imports/image-7.png";
import clientDashImg from "@/imports/image-8.png";
import campaignsTabImg from "@/imports/image-9.png";
import hierarchyTabImg from "@/imports/image-10.png";
import aiInsightsTabImg from "@/imports/image-11.png";
import reportsTabImg from "@/imports/image-12.png";
import hierarchyReportImg from "@/imports/image-13.png";
import logoMeta from "@/imports/meta_icon.png";
import logoGoogle from "@/imports/google_png.png";
import logoTikTok from "@/imports/tiktok_logo_png.png";
import logoDV360 from "@/imports/dv360_logo.png";
import logoLinkedIn from "@/imports/linkedin_ong.png";
import logoSnapchat from "@/imports/snapchat_png.png";
import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, CartesianGrid, LineChart, Line, PieChart, Pie, Cell,
} from "recharts";
import {
  ArrowRight, ChevronRight, Menu, X, Zap, Database, Globe, Brain,
  Shield, TrendingUp, BarChart2, Bell, CheckCircle, Check, Layers,
  RefreshCw, FileText, Settings, Users, Activity, AlertTriangle,
  ArrowUpRight, Code2, Star, Sparkles, ChevronDown, Filter,
  Search, Download, ExternalLink, Lock, Clock, Target, Cpu,
  Play, Eye, LayoutDashboard, GitBranch, Workflow, Gauge, Building2, Award, Mail,
  BookOpen, HelpCircle, ShoppingBag, GraduationCap, Heart, Landmark, Map, Briefcase,
} from "lucide-react";

// ─── Utils ────────────────────────────────────────────────────────────────────

const cn = (...cls: (string | undefined | false | null)[]) => cls.filter(Boolean).join(" ");

const BLUE = "#4A8FE0"; // Cerebro brand accent
const VIOLET = "#7C3AED";
const CYAN = "#0891B2";
const GREEN = "#059669";
const AMBER = "#D97706";

const useScrolled = () => {
  const [s, setS] = useState(false);
  useEffect(() => {
    const h = () => setS(window.scrollY > 8);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return s;
};

// ─── Shared primitives ────────────────────────────────────────────────────────

function Badge({ children, color = BLUE }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
      style={{ color, background: `${color}14`, border: `1px solid ${color}25` }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">{children}</p>
  );
}

function PrimaryBtn({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn("inline-flex items-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors", className)}
    >
      {children}
    </button>
  );
}

function OutlineBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
    >
      {children}
    </button>
  );
}

// ─── Browser frame wrapper for product mockups ────────────────────────────────

function BrowserFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/60", className)}>
      <div className="bg-[#F2F3F5] border-b border-slate-200 px-4 py-2.5 flex items-center gap-2.5">
        <div className="flex gap-1.5">
          {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-2 bg-white border border-slate-200 rounded px-3 py-0.5 text-[11px] text-slate-400 text-center">
          app.cerebro.media
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── Product UI mockup ────────────────────────────────────────────────────────

const heroSpendData = [
  { d: "Mon", meta: 4200, google: 3100 },
  { d: "Tue", meta: 4800, google: 3400 },
  { d: "Wed", meta: 5100, google: 3200 },
  { d: "Thu", meta: 4600, google: 3700 },
  { d: "Fri", meta: 5400, google: 4100 },
  { d: "Sat", meta: 5800, google: 3900 },
  { d: "Sun", meta: 6200, google: 4300 },
];

function HeroMockup() {
  return (
    <BrowserFrame>
      <div className="bg-[#F8F9FC] flex" style={{ height: 480 }}>
        {/* Sidebar */}
        <div className="w-[180px] bg-white border-r border-slate-100 flex flex-col shrink-0">
          <div className="px-4 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                <Sparkles size={10} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-slate-800">Cerebro</span>
            </div>
          </div>
          <div className="py-2 px-2">
            {[
              { icon: LayoutDashboard, label: "Overview", active: true },
              { icon: BarChart2, label: "Performance" },
              { icon: Database, label: "Campaigns" },
              { icon: Brain, label: "AI Insights" },
              { icon: Bell, label: "Alerts" },
              { icon: FileText, label: "Reports" },
            ].map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2 px-2 py-1.5 rounded text-[11px] mb-0.5",
                  item.active ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-500"
                )}
              >
                <item.icon size={12} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        {/* Main */}
        <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { label: "Total Spend", value: "$142.8k", change: "+8%", up: true },
              { label: "Blended ROAS", value: "4.6x", change: "+0.4", up: true },
              { label: "Conversions", value: "2,710", change: "+22%", up: true },
              { label: "Avg. CPA", value: "$52.70", change: "-14%", up: true },
            ].map((k) => (
              <div key={k.label} className="bg-white rounded-lg border border-slate-100 p-3">
                <p className="text-[10px] text-slate-400 mb-1">{k.label}</p>
                <p className="text-sm font-semibold text-slate-800">{k.value}</p>
                <p className="text-[10px] text-green-600 font-medium mt-0.5">{k.change}</p>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="bg-white rounded-lg border border-slate-100 p-3 flex-1">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-medium text-slate-700">Spend by Platform — This Week</p>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-[9px] text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />Meta</span>
                <span className="flex items-center gap-1 text-[9px] text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />Google</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={140}>
              <AreaChart data={heroSpendData} margin={{ top: 2, right: 2, bottom: 0, left: -24 }}>
                <defs>
                  <linearGradient id="hm-blue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={BLUE} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={BLUE} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="hm-violet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={VIOLET} stopOpacity={0.12} />
                    <stop offset="95%" stopColor={VIOLET} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(0,0,0,0.04)" vertical={false} />
                <XAxis dataKey="d" tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip contentStyle={{ fontSize: 10, borderRadius: 6, border: "1px solid #E2E8F0" }} />
                <Area type="monotone" dataKey="meta" stroke={BLUE} strokeWidth={1.5} fill="url(#hm-blue)" />
                <Area type="monotone" dataKey="google" stroke={VIOLET} strokeWidth={1.5} fill="url(#hm-violet)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Campaign table snippet */}
          <div className="bg-white rounded-lg border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-5 px-3 py-1.5 border-b border-slate-50 text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
              <span className="col-span-2">Campaign</span>
              <span>Spend</span>
              <span>ROAS</span>
              <span>Status</span>
            </div>
            {[
              { name: "Meta Prospecting Q3", spend: "$12,400", roas: "4.8x", ok: true },
              { name: "Google Brand Search", spend: "$8,900", roas: "6.2x", ok: true },
              { name: "TikTok Retargeting", spend: "$5,100", roas: "3.1x", ok: false },
            ].map((row) => (
              <div key={row.name} className="grid grid-cols-5 px-3 py-1.5 border-b border-slate-50 last:border-0 text-[10px]">
                <span className="col-span-2 text-slate-700 truncate">{row.name}</span>
                <span className="text-slate-600">{row.spend}</span>
                <span className="text-slate-700 font-medium">{row.roas}</span>
                <span className={cn("font-medium", row.ok ? "text-green-600" : "text-amber-600")}>
                  {row.ok ? "On track" : "Watch"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Product", to: "/features" },
  { label: "Integrations", to: "/integrations" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// ── Demo lead form modal ──────────────────────────────────────────────────────

function DemoModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", platforms: [] as string[], message: "" });

  const PLATFORMS = ["Meta Ads", "Google Ads", "TikTok Ads", "DV360", "Other"];
  const SIZES = ["1–5 people", "6–20 people", "21–50 people", "50+ people"];

  const togglePlatform = (p: string) =>
    setForm((f) => ({ ...f, platforms: f.platforms.includes(p) ? f.platforms.filter((x) => x !== p) : [...f.platforms, p] }));

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.22 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-start justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">Book a live demo</h2>
            <p className="text-slate-500 text-sm mt-0.5">We'll reach out within 1 business day to schedule a 30-min walkthrough.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors ml-4 shrink-0 mt-0.5">
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#4A8FE0]/10 border-2 border-[#4A8FE0]/30 flex items-center justify-center">
              <Check size={28} className="text-[#4A8FE0]" />
            </div>
            <h3 className="font-bold text-slate-900 text-xl">You're on the list!</h3>
            <p className="text-slate-500 text-sm max-w-xs">We'll be in touch within 1 business day to schedule your personalised walkthrough of Cerebro dNANO.</p>
            <button onClick={onClose} className="mt-2 text-sm text-[#4A8FE0] font-medium hover:underline">Close</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="px-6 py-5 space-y-4"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full name *</label>
                <input
                  type="text" required placeholder="Jane Smith"
                  value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Work email *</label>
                <input
                  type="email" required placeholder="jane@agency.com"
                  value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Company / Agency name *</label>
              <input
                type="text" required placeholder="Acme Digital Agency"
                value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors"
              />
            </div>

            {/* Team size */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Team size</label>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s} type="button"
                    onClick={() => setForm((f) => ({ ...f, size: s }))}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                      form.size === s
                        ? "border-[#4A8FE0] bg-[#4A8FE0]/8 text-[#4A8FE0]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Platforms you manage</label>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p} type="button"
                    onClick={() => togglePlatform(p)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                      form.platforms.includes(p)
                        ? "border-[#4A8FE0] bg-[#4A8FE0]/8 text-[#4A8FE0]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Anything specific you'd like to see?</label>
              <textarea
                rows={3} placeholder="e.g. cross-platform reporting, AI anomaly detection, client white-labelling..."
                value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Request demo <ArrowRight size={14} />
            </button>
            <p className="text-center text-xs text-slate-400">No commitment. We'll schedule a time that works for you.</p>
          </form>
        )}
      </motion.div>
    </div>
  );
}

// ── Demo modal context ────────────────────────────────────────────────────────

const DemoModalContext = createContext<{ open: () => void }>({ open: () => {} });
function useDemoModal() { return useContext(DemoModalContext); }

function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <DemoModalContext.Provider value={{ open: () => setShow(true) }}>
      {children}
      <AnimatePresence>
        {show && <DemoModal onClose={() => setShow(false)} />}
      </AnimatePresence>
    </DemoModalContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function TopNav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { open: openDemo } = useDemoModal();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 inset-x-0 z-50 mt-3 pt-3 px-6 pointer-events-none">
      <div
        className={cn(
          "max-w-6xl mx-auto h-16 flex items-center justify-between gap-6 px-6 rounded-2xl transition-all duration-300 pointer-events-auto",
          "bg-[#0B1728] border border-[rgba(74,143,224,0.18)]",
          scrolled && "shadow-xl shadow-black/40"
        )}
      >

        {/* Logo */}
        <NavLink to="/" className="flex items-center shrink-0">
          <img
            src={cerebroLogo}
            alt="Cerebro dNANO"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Center nav — pill container like Hyperswitch */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-0.5 bg-white/5 border border-white/8 rounded-full px-1.5 py-1.5">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-1.5 rounded-full text-sm transition-all duration-150 whitespace-nowrap",
                    isActive
                      ? "bg-[#4A8FE0]/15 text-[#4A8FE0] font-medium"
                      : "text-slate-400 hover:text-white hover:bg-white/6"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button className="text-sm text-slate-400 hover:text-white transition-colors font-medium px-1">
            Sign in
          </button>
          <button
            onClick={openDemo}
            className="flex items-center gap-1.5 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Book a Demo
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white transition-colors" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-[#06101E]/98 backdrop-blur-md border border-[rgba(74,143,224,0.14)] rounded-2xl px-6 pb-5 pt-3"
          >
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => { setOpen(false); openDemo(); }}
              className="mt-3 w-full bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#06101E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="mb-4">
              <img
                src={cerebroLogoAlt}
                alt="Cerebro dNANO"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              AI-powered advertising intelligence that unifies your paid media into one automated reporting layer.
            </p>
            <div className="mt-5 space-y-2">
              <a href="mailto:connect@activ8.digital" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                <Mail size={11} className="text-slate-600 shrink-0" />
                connect@activ8.digital
              </a>
              <a href="tel:+923422732873" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                <Activity size={11} className="text-slate-600 shrink-0" />
                +92 342 2732873
              </a>
              <p className="flex items-start gap-2 text-xs text-slate-500">
                <Globe size={11} className="text-slate-600 shrink-0 mt-0.5" />
                The Forum, Block 9 Clifton, Karachi
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {["SOC 2", "GDPR", "CCPA"].map((b) => (
                <span key={b} className="text-[10px] text-slate-600 border border-slate-700 rounded px-2 py-0.5">{b}</span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "Features",     to: "/features" },
                { label: "Integrations", to: "/integrations" },
                { label: "Pricing",      to: "/pricing" },
                { label: "Roadmap",      to: "/roadmap" },
                { label: "Changelog",    to: "/docs" },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Documentation", to: "/docs" },
                { label: "Help Center",   to: "/help" },
                { label: "Blog",          to: "/blog" },
                { label: "FAQ",           to: "/faq" },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About",    to: "/about" },
                { label: "Blog",     to: "/blog" },
                { label: "Careers",  to: "/about" },
                { label: "Contact",  to: "/contact" },
                { label: "Partners", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
                { label: "Security",       to: "/security" },
                { label: "Cookie Policy",  to: "/privacy" },
                { label: "GDPR",           to: "/privacy" },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© 2026 Cerebro dNANO, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy",  to: "/privacy" },
              { label: "Terms",    to: "/terms" },
              { label: "Security", to: "/security" },
              { label: "Help",     to: "/help" },
              { label: "Contact",  to: "/contact" },
            ].map((l) => (
              <NavLink key={l.label} to={l.to} className="text-xs text-slate-600 hover:text-slate-400 transition-colors">{l.label}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

function RootInner() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}

function Root() {
  return (
    <DemoModalProvider>
      <RootInner />
    </DemoModalProvider>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const PLATFORM_LOGOS = [
  { name: "Meta Ads",   img: logoMeta,     color: "#1877F2", bg: "#fff" },
  { name: "Google Ads", img: logoGoogle,   color: "#4285F4", bg: "#fff" },
  { name: "TikTok Ads", img: logoTikTok,   color: "#010101", bg: "#fff" },
  { name: "DV360",      img: logoDV360,    color: "#34A853", bg: "#fff" },
  { name: "LinkedIn",   img: logoLinkedIn, color: "#0A66C2", bg: "#fff" },
  { name: "Snapchat",   img: logoSnapchat, color: "#FFFC00", bg: "#FFFC00" },
];

const PLATFORM_LOGO_MAP: Record<string, string> = {
  "Meta":          logoMeta,
  "Meta Ads":      logoMeta,
  "Google":        logoGoogle,
  "Google Ads":    logoGoogle,
  "TikTok":        logoTikTok,
  "TikTok Ads":    logoTikTok,
  "DV360":         logoDV360,
  "LinkedIn":      logoLinkedIn,
  "LinkedIn Ads":  logoLinkedIn,
  "Snapchat":      logoSnapchat,
  "Snapchat Ads":  logoSnapchat,
};

function PlatformIcon({ name, size = 28, bg = "#fff", color = "#888", letter = "?" }: {
  name: string; size?: number; bg?: string; color?: string; letter?: string;
}) {
  const logo = PLATFORM_LOGO_MAP[name];
  const radius = Math.round(size * 0.3);
  if (logo) {
    return (
      <div
        className="shrink-0 flex items-center justify-center overflow-hidden"
        style={{ width: size, height: size, borderRadius: radius, background: bg }}
      >
        <img src={logo} alt={name} style={{ width: size * 0.7, height: size * 0.7, objectFit: "contain" }} />
      </div>
    );
  }
  return (
    <div
      className="shrink-0 flex items-center justify-center text-white font-bold"
      style={{ width: size, height: size, borderRadius: radius, background: color, fontSize: size * 0.32 }}
    >
      {letter}
    </div>
  );
}

const MODULE_CARDS = [
  { icon: BarChart2, label: "Unified Reporting", color: BLUE },
  { icon: RefreshCw, label: "Auto Data Sync", color: BLUE },
  { icon: Brain, label: "AI Recommendations", color: VIOLET },
  { icon: AlertTriangle, label: "Anomaly Alerts", color: AMBER },
  { icon: Target, label: "Attribution Models", color: CYAN },
  { icon: FileText, label: "Client Reports", color: GREEN },
  { icon: Gauge, label: "Budget Pacing", color: BLUE },
  { icon: Workflow, label: "Automated Workflows", color: VIOLET },
  { icon: Shield, label: "Data Security", color: GREEN },
  { icon: Globe, label: "Multi-Currency", color: CYAN },
  { icon: Users, label: "Team Workspaces", color: BLUE },
  { icon: Code2, label: "API & Exports", color: VIOLET },
];

const TESTIMONIALS = [
  {
    quote: "Cerebro replaced three separate tools and saved our team 12 hours a week. The AI anomaly detection caught a $40k Meta overspend before we noticed.",
    name: "Sarah Chen",
    title: "VP Marketing, Growthline Agency",
    avatar: "SC",
  },
  {
    quote: "Our clients now receive polished weekly reports automatically. What used to take a whole Friday now happens while we sleep.",
    name: "Marcus Obi",
    title: "Founder, Performance North",
    avatar: "MO",
  },
  {
    quote: "The cross-platform ROAS view alone was worth the switch. We finally have one source of truth for attribution.",
    name: "Priya Anand",
    title: "Head of Paid Media, Strides",
    avatar: "PA",
  },
];

const WORKFLOW_STEPS = [
  { n: "01", title: "Connect platforms", desc: "OAuth in under 5 minutes. Meta, Google, TikTok, DV360 and more — no engineer needed.", icon: Globe },
  { n: "02", title: "Data normalizes automatically", desc: "Cerebro standardizes schemas, deduplicates events, and backfills up to 36 months of history.", icon: Database },
  { n: "03", title: "AI surfaces insights", desc: "Anomaly detection, root cause analysis, and budget recommendations run continuously.", icon: Brain },
  { n: "04", title: "Reports deliver themselves", desc: "White-labeled PDFs and Slack digests go out on your schedule — zero manual effort.", icon: FileText },
];

// ── ETL pipeline infographic ─────────────────────────────────────────────────

const ETL_STAGES = [
  {
    id: "extract",
    n: "01",
    label: "Extract",
    icon: Download,
    color: "#4A8FE0",
    items: ["Official API Connectors", "OAuth 2.0 Auth Flow", "Real-time Webhooks", "36-Month Historical Backfill"],
    desc: "Cerebro connects to every ad platform via official marketing APIs. Credentials are encrypted at rest and never stored in plaintext. Data flows continuously — no scheduled exports, no manual uploads.",
  },
  {
    id: "transform",
    n: "02",
    label: "Transform",
    icon: RefreshCw,
    color: "#7EAEE8",
    items: ["Schema Normalization", "Currency Conversion", "Attribution Window Mapping", "Cross-platform Deduplication"],
    desc: "Raw event data from 20+ platforms is unified into a single schema. Metrics, currencies, and attribution windows are standardized so you can compare Meta ROAS and Google ROAS side by side without guesswork.",
  },
  {
    id: "load",
    n: "03",
    label: "Load",
    icon: Database,
    color: "#3272C4",
    items: ["Live Cerebro Dashboard", "BigQuery / Warehouse Export", "White-label Report Engine", "AI Intelligence Layer"],
    desc: "Clean, normalized data lands in your Cerebro dashboard in under 15 minutes. Optionally push to your own data warehouse or BI tool. Everything downstream — reports, alerts, AI insights — runs off the same source of truth.",
  },
];

const ETL_PLATFORMS = [
  { name: "Meta",     color: "#1877F2", bg: "#fff" },
  { name: "Google",   color: "#4285F4", bg: "#fff" },
  { name: "TikTok",   color: "#FF0050", bg: "#fff" },
  { name: "DV360",    color: "#34A853", bg: "#fff" },
  { name: "LinkedIn", color: "#0A66C2", bg: "#fff" },
  { name: "Snapchat", color: "#FFFC00", bg: "#FFFC00" },
];

const ETL_OUTPUTS = [
  { icon: BarChart2, label: "Cross-Platform Reports", color: "#4A8FE0" },
  { icon: Brain, label: "AI Insights", color: "#7EAEE8" },
  { icon: Bell, label: "Budget & Anomaly Alerts", color: "#A8C8F0" },
  { icon: TrendingUp, label: "Scaling Recommendations", color: "#3272C4" },
];

function EtlConnector({ color }: { color?: string }) {
  const c = color ?? "#4A8FE0";
  return (
    <div className="relative shrink-0 w-8 md:w-10 h-px overflow-hidden" style={{ background: "rgba(74,143,224,0.18)" }}>
      <div className="etl-dot-a" style={{ background: c }} />
      <div className="etl-dot-b" style={{ background: c }} />
      <div className="etl-dot-c" style={{ background: c }} />
    </div>
  );
}

function EtlDiagram() {
  const [active, setActive] = useState(0);
  const stage = ETL_STAGES[active];

  return (
    <div className="max-w-7xl mx-auto">
      <style>{`
        @keyframes etl-flow {
          0%   { left: -4px; opacity: 0; }
          12%  { opacity: 1; }
          88%  { opacity: 1; }
          100% { left: calc(100% + 4px); opacity: 0; }
        }
        @keyframes etl-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: none; }
        }
        .etl-dot-a, .etl-dot-b, .etl-dot-c {
          position: absolute; top: 50%; margin-top: -3px;
          width: 5px; height: 5px; border-radius: 50%;
          animation: etl-flow 2.4s linear infinite;
        }
        .etl-dot-b { animation-delay: 0.8s; }
        .etl-dot-c { animation-delay: 1.6s; }
        .etl-detail { animation: etl-fade 0.22s ease both; }
      `}</style>

      {/* ── Header ── */}
      <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
        <div>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E8F0FA] leading-tight">
            From first connection to first insight — under 24 hours
          </h2>
        </div>
        <div>
          <p className="text-[#94B8D8] leading-relaxed mb-6">
            No engineers, no warehouse setup. Connect your ad accounts and your first cross-platform dashboard populates the same day.
          </p>
          <PrimaryBtn>Start for free <ArrowRight size={14} /></PrimaryBtn>
        </div>
      </div>

      {/* ── Diagram card ── */}
      <div className="bg-[#0F2038] border border-[rgba(74,143,224,0.14)] rounded-2xl overflow-hidden">

        {/* Pipeline row */}
        <div className="px-6 md:px-8 py-7 flex items-center gap-0">

          {/* Sources */}
          <div className="hidden md:flex flex-col gap-1.5 shrink-0 mr-3">
            <p className="text-[9px] font-semibold text-[#4A8FE0]/60 uppercase tracking-widest mb-0.5">Sources</p>
            {ETL_PLATFORMS.map((p) => (
              <div key={p.name} className="flex items-center gap-2 bg-[#0B1728] border border-[rgba(74,143,224,0.1)] rounded-lg px-2.5 py-1.5">
                <PlatformIcon name={p.name} size={16} bg={p.bg} color={p.color} />
                <span className="text-[11px] text-[#94B8D8]">{p.name}</span>
              </div>
            ))}
          </div>

          <EtlConnector color={ETL_STAGES[0].color} />

          {/* Stage boxes */}
          <div className="flex items-stretch gap-2 flex-1">
            {ETL_STAGES.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className="flex-1 flex flex-col items-center gap-3 rounded-xl px-3 py-5 border transition-all duration-200 focus:outline-none cursor-pointer"
                  style={
                    isActive
                      ? { borderColor: s.color, background: `${s.color}10`, boxShadow: `0 0 0 1px ${s.color}20 inset` }
                      : { borderColor: "rgba(74,143,224,0.1)", background: "#0B1728" }
                  }
                >
                  <span
                    className="text-[9px] font-bold tracking-widest font-mono"
                    style={{ color: isActive ? s.color : "rgba(74,143,224,0.3)" }}
                  >
                    {s.n}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                    style={{ background: isActive ? `${s.color}18` : "rgba(74,143,224,0.06)" }}
                  >
                    <s.icon size={18} style={{ color: isActive ? s.color : "rgba(74,143,224,0.4)" }} />
                  </div>
                  <p
                    className="text-xs font-semibold text-center leading-tight"
                    style={{ color: isActive ? "#E8F0FA" : "#6B8DAE" }}
                  >
                    {s.label}
                  </p>
                  <div
                    className="w-6 h-0.5 rounded-full transition-all duration-200"
                    style={{ background: isActive ? s.color : "transparent" }}
                  />
                </button>
              );
            })}
          </div>

          <EtlConnector color={ETL_STAGES[2].color} />

          {/* Outputs */}
          <div className="hidden md:flex flex-col gap-1.5 shrink-0 ml-3">
            <p className="text-[9px] font-semibold text-[#4A8FE0]/60 uppercase tracking-widest mb-0.5">Intelligence</p>
            {ETL_OUTPUTS.map((o) => (
              <div key={o.label} className="flex items-center gap-2 bg-[#0B1728] border border-[rgba(74,143,224,0.1)] rounded-lg px-2.5 py-1.5">
                <o.icon size={11} style={{ color: o.color }} />
                <span className="text-[11px] text-[#94B8D8]">{o.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stage progress bar */}
        <div className="px-6 md:px-8">
          <div className="h-px relative overflow-hidden" style={{ background: "rgba(74,143,224,0.1)" }}>
            <div
              className="absolute top-0 left-0 h-full transition-all duration-500"
              style={{
                width: `${((active + 1) / ETL_STAGES.length) * 100}%`,
                background: `linear-gradient(to right, ${ETL_STAGES[0].color}, ${stage.color})`,
                opacity: 0.7,
              }}
            />
          </div>
        </div>

        {/* Detail panel */}
        <div className="bg-[#06101E] border-t border-[rgba(74,143,224,0.1)] px-6 md:px-8 py-6">
          <div key={active} className="etl-detail grid md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: `${stage.color}18` }}
                >
                  <stage.icon size={13} style={{ color: stage.color }} />
                </div>
                <span className="text-sm font-semibold text-[#E8F0FA]">{stage.label} Stage</span>
              </div>
              <p className="text-sm text-[#94B8D8] leading-relaxed">{stage.desc}</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-2">
              {stage.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-[#0B1728] border border-[rgba(74,143,224,0.1)] rounded-lg px-3 py-2.5"
                >
                  <CheckCircle size={11} style={{ color: stage.color }} />
                  <span className="text-xs text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats row */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: Zap, label: "Real-time collection", sub: "15-min data freshness" },
          { icon: Shield, label: "Data accuracy", sub: "Deduplication + reconciliation" },
          { icon: Activity, label: "Always-on monitoring", sub: "Runs 24/7" },
          { icon: Target, label: "Faster decisions", sub: "Insights before clients notice" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 bg-[#0F2038] border border-[rgba(74,143,224,0.1)] rounded-xl px-4 py-3">
            <div className="w-8 h-8 rounded-lg bg-[#0B1728] border border-[rgba(74,143,224,0.1)] flex items-center justify-center shrink-0">
              <s.icon size={14} style={{ color: "#4A8FE0" }} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300">{s.label}</p>
              <p className="text-[10px] text-[#6B8DAE] mt-0.5">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

// Feature callout product mock — platform comparison table style
function PlatformTableMock() {
  return (
    <BrowserFrame>
      <div className="bg-white p-4 overflow-hidden" style={{ height: 380 }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-slate-700">Cross-Platform Overview</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[10px] text-slate-400 border border-slate-200 rounded px-2 py-0.5">Jul 2025</button>
            <button className="text-[10px] text-slate-400 border border-slate-200 rounded px-2 py-0.5">Export</button>
          </div>
        </div>
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-slate-100">
              {["Platform", "Spend", "Impressions", "ROAS", "CPA", "Conv."].map((h) => (
                <th key={h} className="text-left py-2 pr-3 font-semibold text-slate-500 text-[10px] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { platform: "Meta Ads",   color: "#1877F2", spend: "$58,400", imp: "4.2M", roas: "4.8x", cpa: "$14.20", conv: "4,113", good: true },
              { platform: "Google Ads", color: "#4285F4", spend: "$41,200", imp: "2.8M", roas: "6.2x", cpa: "$8.40",  conv: "4,905", good: true },
              { platform: "TikTok Ads", color: "#010101", spend: "$22,100", imp: "8.1M", roas: "3.1x", cpa: "$22.80", conv: "969",   good: false },
              { platform: "DV360",      color: "#34A853", spend: "$21,100", imp: "12.4M",roas: "2.4x", cpa: "$31.50", conv: "670",   good: false },
            ].map((r) => (
              <tr key={r.platform} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="py-2.5 pr-3">
                  <div className="flex items-center gap-2">
                    <PlatformIcon name={r.platform} size={20} bg="#fff" color={r.color} />
                    <span className="text-slate-700 font-medium">{r.platform}</span>
                  </div>
                </td>
                <td className="py-2.5 pr-3 text-slate-700">{r.spend}</td>
                <td className="py-2.5 pr-3 text-slate-500">{r.imp}</td>
                <td className="py-2.5 pr-3 font-semibold" style={{ color: r.good ? GREEN : AMBER }}>{r.roas}</td>
                <td className="py-2.5 pr-3 text-slate-700">{r.cpa}</td>
                <td className="py-2.5 pr-3 text-slate-700">{r.conv}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Summary row */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: "Total Spend", value: "$142.8k", color: BLUE },
            { label: "Blended ROAS", value: "4.6x", color: GREEN },
            { label: "Total Conv.", value: "10,657", color: VIOLET },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-center">
              <p className="text-[9px] text-slate-400 mb-1">{s.label}</p>
              <p className="text-sm font-bold" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

// AI insights mock
function AIMock() {
  return (
    <BrowserFrame>
      <div className="bg-[#F8F9FC] p-4" style={{ height: 380 }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded bg-violet-600 flex items-center justify-center">
            <Brain size={10} className="text-white" />
          </div>
          <span className="text-xs font-semibold text-slate-800">Cerebro AI · 3 insights</span>
        </div>
        <div className="space-y-3">
          {[
            { type: "alert", color: AMBER, icon: AlertTriangle, title: "TikTok CPA up 34% — creative fatigue", body: "CTR dropped from 2.1% → 1.4% across 3 ad sets over 6 days. Recommend rotating to the 'Summer 2025' creative batch or reducing bid by 15%.", time: "2h ago" },
            { type: "opportunity", color: GREEN, icon: TrendingUp, title: "Google Brand Search is underbudgeted", body: "ROAS 6.2x with 14% impression share lost to budget. +$400/day budget increase projected to return $2,800 additional weekly revenue.", time: "4h ago" },
            { type: "info", color: BLUE, icon: Activity, title: "Meta attribution window updated", body: "Meta changed default attribution from 7-day click to 1-day click on this account. Reported conversions may appear 18–22% lower vs. historical baseline.", time: "1d ago" },
          ].map((ins) => (
            <div
              key={ins.title}
              className="bg-white rounded-xl border p-3.5"
              style={{ borderColor: `${ins.color}25` }}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${ins.color}15` }}>
                  <ins.icon size={11} style={{ color: ins.color }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-800 mb-1">{ins.title}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{ins.body}</p>
                  <p className="text-[9px] text-slate-400 mt-1.5">{ins.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

// ─── Report mock (for reports callout) ───────────────────────────────────────

const reportBarData = [
  { week: "W1", meta: 3800, google: 2900, tiktok: 1500 },
  { week: "W2", meta: 4200, google: 3100, tiktok: 1800 },
  { week: "W3", meta: 4900, google: 3400, tiktok: 2100 },
  { week: "W4", meta: 5100, google: 3700, tiktok: 2400 },
];

function ReportMockup() {
  return (
    <BrowserFrame>
      <img
        src={reportMockupImg}
        alt="Cerebro dNANO marketing report template showing performance tracker and summary tabs"
        className="w-full h-auto object-cover object-top"
        style={{ maxHeight: 420 }}
      />
    </BrowserFrame>
  );
}

// ─── Tabbed product showcase ──────────────────────────────────────────────────

const SHOWCASE_TABS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "campaigns", label: "Campaigns", icon: Target },
  { id: "insights", label: "AI Insights", icon: Brain },
  { id: "reports", label: "Reports", icon: FileText },
];

const showcaseKpiData = [
  { d: "Jun 24", meta: 3800, google: 2800, tiktok: 1600, dv360: 2200 },
  { d: "Jun 28", meta: 4200, google: 3100, tiktok: 1900, dv360: 2500 },
  { d: "Jul 2", meta: 5100, google: 3200, tiktok: 1700, dv360: 3000 },
  { d: "Jul 6", meta: 4600, google: 3800, tiktok: 2400, dv360: 2800 },
  { d: "Jul 10", meta: 5400, google: 4100, tiktok: 2800, dv360: 3300 },
  { d: "Jul 14", meta: 5800, google: 3900, tiktok: 3100, dv360: 3600 },
  { d: "Jul 18", meta: 6200, google: 4300, tiktok: 2900, dv360: 3800 },
];

function ShowcaseOverview() {
  return (
    <div className="bg-[#F8F9FC] p-4 space-y-3" style={{ minHeight: 420 }}>
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total Spend", val: "$142,800", delta: "+8.4%", color: BLUE },
          { label: "Blended ROAS", val: "4.6x", delta: "+0.4x", color: GREEN },
          { label: "Conversions", val: "2,710", delta: "+22%", color: VIOLET },
          { label: "Avg. CPA", val: "$52.70", delta: "-14%", color: CYAN },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-xl border border-slate-100 p-3">
            <p className="text-[10px] text-slate-400 mb-1">{k.label}</p>
            <p className="text-base font-bold text-slate-900">{k.val}</p>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: GREEN }}>{k.delta} vs last mo.</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-semibold text-slate-700">Spend by Platform — Last 7 Days</p>
          <div className="flex gap-3">
            {[{ l: "Meta", c: "#1877F2" }, { l: "Google", c: "#4285F4" }, { l: "TikTok", c: "#FF0050" }, { l: "DV360", c: "#34A853" }].map((p) => (
              <span key={p.l} className="flex items-center gap-1 text-[9px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.c }} />{p.l}
              </span>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={showcaseKpiData} margin={{ top: 2, right: 2, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="sc-meta" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1877F2" stopOpacity={0.15} /><stop offset="95%" stopColor="#1877F2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sc-google" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4285F4" stopOpacity={0.15} /><stop offset="95%" stopColor="#4285F4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sc-tiktok" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF0050" stopOpacity={0.15} /><stop offset="95%" stopColor="#FF0050" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="sc-dv360" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34A853" stopOpacity={0.15} /><stop offset="95%" stopColor="#34A853" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(0,0,0,0.04)" vertical={false} />
            <XAxis dataKey="d" tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip contentStyle={{ fontSize: 10, borderRadius: 6, border: "1px solid #E2E8F0" }} />
            <Area type="monotone" dataKey="meta" stroke="#1877F2" strokeWidth={1.5} fill="url(#sc-meta)" />
            <Area type="monotone" dataKey="google" stroke="#4285F4" strokeWidth={1.5} fill="url(#sc-google)" />
            <Area type="monotone" dataKey="tiktok" stroke="#FF0050" strokeWidth={1.5} fill="url(#sc-tiktok)" />
            <Area type="monotone" dataKey="dv360" stroke="#34A853" strokeWidth={1.5} fill="url(#sc-dv360)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShowcaseCampaigns() {
  return (
    <div className="bg-white" style={{ minHeight: 420 }}>
      {/* Toolbar */}
      <div className="border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={11} className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Search campaigns..." className="bg-slate-50 border border-slate-200 rounded-lg pl-6 pr-3 py-1 text-[10px] text-slate-600 placeholder-slate-400 w-40 focus:outline-none" />
          </div>
          <button className="text-[10px] border border-slate-200 rounded-lg px-2.5 py-1 flex items-center gap-1 text-slate-500 bg-white">
            <Filter size={9} /> Filter
          </button>
        </div>
        <button className="text-[10px] bg-blue-600 text-white rounded-lg px-2.5 py-1">+ New campaign</button>
      </div>
      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50">
            {["Campaign", "Platform", "Status", "Spend", "ROAS", "CPA", "Conv.", "Health"].map((h) => (
              <th key={h} className="text-left text-[9px] font-semibold text-slate-400 uppercase tracking-wider px-4 py-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Meta Prospecting Q3", plat: "Meta", plc: "#1877F2", status: "Active", spend: "$12,400", roas: "4.8x", cpa: "$14.20", conv: "873", health: "good" },
            { name: "Google Brand Search", plat: "Google", plc: "#4285F4", status: "Active", spend: "$8,900", roas: "6.2x", cpa: "$8.40", conv: "1,060", health: "good" },
            { name: "TikTok Retargeting", plat: "TikTok", plc: "#FF0050", status: "Active", spend: "$5,100", roas: "3.1x", cpa: "$22.80", conv: "224", health: "warn" },
            { name: "DV360 Display Broad", plat: "DV360", plc: "#34A853", status: "Active", spend: "$9,300", roas: "2.4x", cpa: "$31.50", conv: "295", health: "bad" },
            { name: "Meta Lookalike 1%", plat: "Meta", plc: "#1877F2", status: "Active", spend: "$4,800", roas: "7.9x", cpa: "$11.10", conv: "432", health: "good" },
            { name: "Google Competitors", plat: "Google", plc: "#4285F4", status: "Paused", spend: "$3,200", roas: "3.8x", cpa: "$19.40", conv: "165", health: "good" },
          ].map((r) => (
            <tr key={r.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="px-4 py-2.5 text-[10px] font-medium text-slate-800">{r.name}</td>
              <td className="px-4 py-2.5">
                <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <PlatformIcon name={r.plat} size={12} bg="#fff" color={r.plc} />
                  {r.plat}
                </span>
              </td>
              <td className="px-4 py-2.5">
                <span className={cn("text-[9px] font-semibold px-1.5 py-0.5 rounded-full", r.status === "Active" ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500")}>{r.status}</span>
              </td>
              <td className="px-4 py-2.5 text-[10px] text-slate-700">{r.spend}</td>
              <td className="px-4 py-2.5 text-[10px] font-semibold" style={{ color: parseFloat(r.roas) > 3.5 ? GREEN : AMBER }}>{r.roas}</td>
              <td className="px-4 py-2.5 text-[10px] text-slate-700">{r.cpa}</td>
              <td className="px-4 py-2.5 text-[10px] text-slate-700">{r.conv}</td>
              <td className="px-4 py-2.5">
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full" style={{
                  color: r.health === "good" ? GREEN : r.health === "warn" ? AMBER : "#EF4444",
                  background: r.health === "good" ? `${GREEN}12` : r.health === "warn" ? `${AMBER}12` : "#FEE2E2",
                }}>
                  {r.health === "good" ? "On track" : r.health === "warn" ? "Watch" : "At risk"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShowcaseInsights() {
  return (
    <div className="bg-[#F8F9FC] p-4 grid grid-cols-5 gap-3" style={{ minHeight: 420 }}>
      {/* Chat interface */}
      <div className="col-span-3 bg-white rounded-xl border border-slate-100 flex flex-col overflow-hidden">
        <div className="border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-violet-600 flex items-center justify-center"><Brain size={10} className="text-white" /></div>
          <span className="text-[11px] font-semibold text-slate-800">Ask Cerebro AI</span>
          <span className="ml-auto text-[9px] bg-green-50 text-green-600 border border-green-100 rounded-full px-1.5 py-0.5">Online</span>
        </div>
        <div className="flex-1 p-3 space-y-3 overflow-hidden">
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600 shrink-0">JD</div>
            <div className="bg-slate-100 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-slate-700 max-w-[80%]">
              Why did our Meta ROAS drop last week?
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-blue-600 rounded-xl rounded-tr-sm px-3 py-2 text-[10px] text-white max-w-[85%]">
              Your Meta ROAS declined from 5.2x → 4.1x between Jul 10–17. The primary driver was creative fatigue: your top 3 ad sets saw CTR drop from 2.4% → 1.1% as audiences reached 8+ frequency. I recommend rotating to the <strong>Summer 2026 creative set</strong> and reducing frequency cap to 4.
            </div>
            <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center shrink-0"><Brain size={9} className="text-white" /></div>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600 shrink-0">JD</div>
            <div className="bg-slate-100 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-slate-700 max-w-[80%]">
              Which campaigns should I scale this week?
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-blue-600 rounded-xl rounded-tr-sm px-3 py-2 text-[10px] text-white max-w-[85%]">
              Top scaling opportunities: <strong>Google Brand Search</strong> (ROAS 6.2x, 14% impression share lost to budget — +$400/day projected +$2,800 revenue) and <strong>Meta Lookalike 1%</strong> (ROAS 7.9x, stable CPM, low frequency). Together these could generate ~$4,200 additional weekly revenue.
            </div>
            <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center shrink-0"><Brain size={9} className="text-white" /></div>
          </div>
        </div>
        <div className="border-t border-slate-100 px-3 py-2 flex items-center gap-2">
          <input placeholder="Ask anything about your campaigns..." className="flex-1 text-[10px] text-slate-600 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none" />
          <button className="bg-blue-600 text-white rounded-lg w-6 h-6 flex items-center justify-center shrink-0"><ArrowRight size={10} /></button>
        </div>
      </div>
      {/* Insight cards */}
      <div className="col-span-2 space-y-2.5">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Alerts</p>
        {[
          { color: AMBER, icon: AlertTriangle, title: "TikTok CPA +34%", body: "Creative fatigue on 3 ad sets. CTR dropped 2.1% → 1.4%.", time: "2h ago", action: "View fix" },
          { color: GREEN, icon: TrendingUp, title: "Scale Google Search", body: "ROAS 6.2x, 14% impression share lost to budget.", time: "4h ago", action: "Increase budget" },
          { color: BLUE, icon: Activity, title: "Meta attribution change", body: "Attribution window changed to 1-day click.", time: "1d ago", action: "Review impact" },
          { color: VIOLET, icon: Brain, title: "DV360 delivery pacing", body: "On track to underspend monthly budget by 12%.", time: "2d ago", action: "Adjust pacing" },
        ].map((ins) => (
          <div key={ins.title} className="bg-white rounded-xl border p-3" style={{ borderColor: `${ins.color}20` }}>
            <div className="flex items-start gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${ins.color}15` }}>
                <ins.icon size={10} style={{ color: ins.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-slate-800 leading-tight">{ins.title}</p>
                <p className="text-[9px] text-slate-500 leading-relaxed mt-0.5">{ins.body}</p>
              </div>
              <span className="text-[8px] text-slate-400 shrink-0">{ins.time}</span>
            </div>
            <button className="text-[9px] font-semibold ml-7" style={{ color: ins.color }}>{ins.action} →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcaseReports() {
  return (
    <div className="bg-[#F8F9FC] p-4 grid grid-cols-5 gap-3" style={{ minHeight: 420 }}>
      {/* Report list */}
      <div className="col-span-2 space-y-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Report Templates</p>
          <button className="text-[9px] text-blue-600">+ New</button>
        </div>
        {[
          { name: "Monthly Client Report", schedule: "Every 1st", recipients: 2, status: "active" },
          { name: "Weekly Slack Digest", schedule: "Every Monday", recipients: 5, status: "active" },
          { name: "Campaign Performance", schedule: "Every Friday", recipients: 3, status: "active" },
          { name: "Executive Summary", schedule: "Monthly", recipients: 1, status: "active" },
          { name: "Platform Comparison", schedule: "Weekly", recipients: 4, status: "paused" },
        ].map((r) => (
          <div key={r.name} className={cn("bg-white rounded-xl border px-3 py-2.5 cursor-pointer hover:border-blue-200 transition-colors", r.name === "Monthly Client Report" ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-100")}>
            <div className="flex items-center justify-between mb-0.5">
              <p className="text-[10px] font-semibold text-slate-800">{r.name}</p>
              <span className={cn("text-[8px] font-semibold rounded-full px-1.5 py-0.5", r.status === "active" ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-400")}>
                {r.status === "active" ? "Active" : "Paused"}
              </span>
            </div>
            <p className="text-[9px] text-slate-400">{r.schedule} · {r.recipients} recipient{r.recipients > 1 ? "s" : ""}</p>
          </div>
        ))}
      </div>
      {/* Report preview */}
      <div className="col-span-3 bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col">
        <div className="border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-800">Monthly Client Report</p>
            <p className="text-[9px] text-slate-400">Next send: Aug 1 · 9:00 AM to 2 recipients</p>
          </div>
          <div className="flex gap-1.5">
            <button className="text-[9px] border border-slate-200 rounded px-2 py-0.5 text-slate-500">Edit</button>
            <button className="text-[9px] bg-blue-600 text-white rounded px-2 py-0.5">Send now</button>
          </div>
        </div>
        <div className="p-4 flex-1">
          {/* Mini report preview */}
          <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl p-4 mb-3 text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center"><Sparkles size={8} /></div>
              <span className="text-[10px] font-bold">Acme Corp · July 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[{ l: "Spend", v: "$142.8k" }, { l: "ROAS", v: "4.6x" }, { l: "Conv.", v: "2,710" }].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-white/60 text-[8px]">{s.l}</p>
                  <p className="text-white font-bold text-sm">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={110}>
            <BarChart data={reportBarData} barSize={12} barGap={2}>
              <CartesianGrid stroke="rgba(0,0,0,0.04)" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ fontSize: 10, borderRadius: 6, border: "1px solid #E2E8F0" }} />
              <Bar dataKey="meta" fill="#1877F2" radius={[2, 2, 0, 0]} />
              <Bar dataKey="google" fill="#4285F4" radius={[2, 2, 0, 0]} />
              <Bar dataKey="tiktok" fill="#FF0050" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const views: Record<string, React.ReactNode> = {
    overview: <ShowcaseOverview />,
    campaigns: <ShowcaseCampaigns />,
    insights: <ShowcaseInsights />,
    reports: <ShowcaseReports />,
  };

  return (
    <section className="bg-white py-24 px-6 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Live product tour</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            See every key capability — in one platform
          </h2>
          <p className="mt-4 text-slate-500">
            Click through each view to explore the real product interface.
          </p>
        </div>

        {/* Tab row */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-slate-100 rounded-xl p-1 gap-1">
            {SHOWCASE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-white text-blue-700 shadow-sm border border-slate-200"
                    : "text-slate-500 hover:text-slate-800"
                )}
              >
                <tab.icon size={13} />
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => setActiveTab("hierarchy")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeTab === "hierarchy"
                  ? "bg-white text-blue-700 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-800"
              )}
            >
              <GitBranch size={13} />
              Hierarchy Reports
            </button>
          </div>
        </div>

        {/* Product frame */}
        {(() => {
          const tabImages: Record<string, { src: string; alt: string }> = {
            overview:   { src: clientDashImg,    alt: "Cerebro dNANO client dashboard showing spend, impressions, daily trend, platform breakdown, and top campaigns" },
            campaigns:  { src: campaignsTabImg,  alt: "Cerebro dNANO campaign details showing spend, impressions, CTR, CPC and performance over time" },
            insights:   { src: aiInsightsTabImg,  alt: "Cerebro dNANO AI insights view" },
            reports:    { src: reportsTabImg,     alt: "Cerebro dNANO reports — campaign performance, spend summary and scheduled deliveries" },
            hierarchy:  { src: hierarchyReportImg, alt: "Cerebro dNANO hierarchy report showing platform spend, impressions and conversions" },
          };
          const current = tabImages[activeTab] ?? tabImages.overview;
          return (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BrowserFrame>
                <img
                  src={current.src}
                  alt={current.alt}
                  className="w-full h-auto object-cover object-top"
                  style={{ maxHeight: 420 }}
                />
              </BrowserFrame>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
}

// ─── Dark platform showcase (full-width) ─────────────────────────────────────

const darkShowcaseAreaData = [
  { d: "Jul 1", rev: 14200, spend: 4800 },
  { d: "Jul 5", rev: 17800, spend: 5200 },
  { d: "Jul 10", rev: 16100, spend: 4900 },
  { d: "Jul 15", rev: 22400, spend: 5600 },
  { d: "Jul 20", rev: 20900, spend: 5300 },
  { d: "Jul 25", rev: 25100, spend: 6100 },
  { d: "Jul 30", rev: 28400, spend: 6400 },
];

function DarkPlatformShowcase() {
  return (
    <section className="bg-[#0B1728] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge color="#818CF8"><Brain size={10} /> AI Intelligence</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
            Your AI media buying co-pilot — on call 24/7
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Cerebro connects every ad platform and transforms the data into live reports, pipeline status, AI summaries, and budget alerts — automatically.
          </p>
        </div>

        {/* ── Desktop connection diagram ── */}
        <div className="relative hidden md:block" style={{ height: 460 }}>
          {/* SVG connector lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 460"
            preserveAspectRatio="none"
            style={{ pointerEvents: "none" }}
          >
            {/* Platforms → Cerebro circle */}
            <line x1="158" y1="230" x2="432" y2="230" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="6,5" />
            {/* Cerebro circle → trunk */}
            <line x1="528" y1="230" x2="592" y2="230" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="6,5" />
            {/* Vertical trunk */}
            <line x1="592" y1="112" x2="592" y2="348" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="6,5" />
            {/* Trunk → top cards */}
            <line x1="592" y1="112" x2="622" y2="112" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="6,5" />
            {/* Trunk → bottom cards */}
            <line x1="592" y1="348" x2="622" y2="348" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="6,5" />
          </svg>

          {/* Platform logos column */}
          <div className="absolute top-1/2 -translate-y-1/2" style={{ left: 0, width: 158 }}>
            <div className="bg-[#0F2038] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-3">
              {[
                { name: "Meta",     color: "#1877F2" },
                { name: "Google",   color: "#4285F4" },
                { name: "TikTok",   color: "#FF0050" },
                { name: "DV360",    color: "#34A853" },
                { name: "LinkedIn", color: "#0A66C2" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-2.5">
                  <PlatformIcon name={p.name} size={32} bg="#fff" color={p.color} />
                  <span className="text-xs text-slate-400">{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cerebro center circle — at x=480 (40% of 1200) */}
          <div
            className="absolute top-1/2 flex flex-col items-center gap-2"
            style={{ left: "40%", transform: "translate(-50%, -50%)" }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 ring-4 ring-[#0B1728]">
              <Sparkles size={30} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold text-white/40 text-center leading-tight">
              Cerebro<br />dNANO
            </span>
          </div>

          {/* 2×2 card grid — starts at ~52% */}
          <div
            className="absolute top-3 bottom-3 grid grid-cols-2 gap-4"
            style={{ left: "52%", right: 0 }}
          >
            {/* Card 1: Performance Report */}
            <div className="bg-[#0F2038] border border-white/[0.08] rounded-2xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <BarChart2 size={12} className="text-blue-400" />
                  <span className="text-xs font-semibold text-white">Performance Report</span>
                </div>
                <ArrowUpRight size={11} className="text-slate-600" />
              </div>
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                {[{ l: "Spend", v: "$142.8k" }, { l: "ROAS", v: "4.6x" }, { l: "Conv.", v: "2,710" }].map((s) => (
                  <div key={s.l} className="bg-white/[0.04] rounded-lg p-1.5 text-center">
                    <p className="text-[8px] text-slate-500 mb-0.5">{s.l}</p>
                    <p className="text-[11px] font-bold text-white">{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 flex-1 justify-center flex flex-col">
                {[
                  { platform: "Meta", pct: 41, color: "#1877F2", val: "$58.4k" },
                  { platform: "Google", pct: 29, color: "#4285F4", val: "$41.2k" },
                  { platform: "TikTok", pct: 16, color: "#FF0050", val: "$22.1k" },
                  { platform: "DV360", pct: 14, color: "#34A853", val: "$21.1k" },
                ].map((p) => (
                  <div key={p.platform} className="flex items-center gap-2">
                    <span className="text-[9px] text-slate-500 w-11 shrink-0">{p.platform}</span>
                    <div className="flex-1 bg-white/[0.05] rounded-full h-1.5">
                      <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: p.color }} />
                    </div>
                    <span className="text-[9px] text-slate-400 w-9 text-right shrink-0">{p.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Data Pipeline */}
            <div className="bg-[#0F2038] border border-white/[0.08] rounded-2xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <Database size={12} className="text-cyan-400" />
                  <span className="text-xs font-semibold text-white">Data Pipeline</span>
                </div>
                <span className="text-[9px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full font-semibold">94% synced</span>
              </div>
              <div className="w-full bg-white/[0.06] rounded-full h-1.5 mb-4">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "94%" }} />
              </div>
              <div className="space-y-2.5 flex-1">
                {[
                  { platform: "Meta Ads", time: "2 min ago", done: true },
                  { platform: "Google Ads", time: "Running…", done: false },
                  { platform: "TikTok Ads", time: "8 min ago", done: true },
                  { platform: "DV360", time: "14 min ago", done: true },
                ].map((r) => (
                  <div key={r.platform} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {r.done
                        ? <CheckCircle size={10} className="text-green-500" />
                        : <RefreshCw size={10} className="text-blue-400 animate-spin" />}
                      <span className="text-[10px] text-slate-300">{r.platform}</span>
                    </div>
                    <span className="text-[9px] text-slate-600">{r.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Cerebro AI */}
            <div className="bg-[#0F2038] border border-white/[0.08] rounded-2xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <Brain size={12} className="text-violet-400" />
                  <span className="text-xs font-semibold text-white">Cerebro AI</span>
                </div>
                <span className="text-[8px] font-bold tracking-wider text-violet-400/60">CEREBRO MCP</span>
              </div>
              <div className="bg-white/[0.04] rounded-lg px-2.5 py-2 mb-2 text-right">
                <p className="text-[10px] text-slate-400">Summarize July vs June — all paid channels</p>
              </div>
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg px-2.5 py-2 flex-1">
                <p className="text-[10px] text-slate-300 leading-relaxed">
                  Spend ↑8%, ROAS ↑0.4x — Meta drove most of the lift (+$14k).{" "}
                  <span className="text-amber-400">⚠ TikTok CPA up 34%</span> — worth a closer look.
                </p>
                <button className="mt-2 text-[9px] text-violet-400 font-semibold">View full analysis →</button>
              </div>
            </div>

            {/* Card 4: Budget Pacing */}
            <div className="bg-[#0F2038] border border-white/[0.08] rounded-2xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <Gauge size={12} className="text-green-400" />
                  <span className="text-xs font-semibold text-white">Budget Pacing</span>
                </div>
                <span className="text-[9px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full font-semibold">On Track</span>
              </div>
              <div className="mb-3">
                <div className="flex items-end justify-between mb-1.5">
                  <span className="text-xl font-bold text-white">$85,200</span>
                  <span className="text-xs text-slate-500">/ $150,000</span>
                </div>
                <div className="w-full bg-white/[0.06] rounded-full h-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400" style={{ width: "57%" }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[9px] text-slate-600">57% spent</span>
                  <span className="text-[9px] text-slate-600">43% remaining</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-auto">
                {[
                  { icon: Clock, label: "Days remaining", val: "14", sub: "48%" },
                  { icon: TrendingUp, label: "Remaining value", val: "$64.8k", sub: "43%" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/[0.04] rounded-xl p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <s.icon size={8} className="text-slate-500" />
                      <p className="text-[8px] text-slate-500 leading-tight">{s.label}</p>
                    </div>
                    <p className="text-sm font-bold text-white">
                      {s.val} <span className="text-[9px] font-normal text-slate-500">{s.sub}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile fallback: stacked ── */}
        <div className="md:hidden space-y-4">
          {/* Platform pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Meta",     color: "#1877F2" },
              { name: "Google",   color: "#4285F4" },
              { name: "TikTok",   color: "#FF0050" },
              { name: "DV360",    color: "#34A853" },
              { name: "LinkedIn", color: "#0A66C2" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 bg-[#0F2038] border border-white/[0.08] rounded-full px-3 py-1.5">
                <PlatformIcon name={p.name} size={20} bg="#fff" color={p.color} />
                <span className="text-xs text-slate-400">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: BarChart2, color: BLUE, title: "Performance Report", desc: "Live cross-platform ROAS, spend, and conversion data." },
              { icon: Database, color: CYAN, title: "Data Pipeline", desc: "94% synced · 15-min refresh across all platforms." },
              { icon: Brain, color: VIOLET, title: "Cerebro AI", desc: "Plain-English summaries and root cause analysis on demand." },
              { icon: Gauge, color: GREEN, title: "Budget Pacing", desc: "$85,200 of $150,000 spent · On track · 14 days left." },
            ].map((c) => (
              <div key={c.title} className="bg-[#0F2038] border border-white/[0.08] rounded-xl p-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3" style={{ background: `${c.color}20` }}>
                  <c.icon size={13} style={{ color: c.color }} />
                </div>
                <h3 className="text-xs font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reports callout section ──────────────────────────────────────────────────

function ReportsCallout() {
  return (
    <section className="bg-white py-24 px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <ReportMockup />
        </div>
        <div>
          <SectionLabel>Automated reporting</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
            Client reports that write themselves
          </h2>
          <p className="text-slate-500 leading-relaxed mb-7">
            Configure once. Cerebro generates white-labeled PDF reports and Slack digests on your schedule — zero manual effort, zero formatting, zero missed sends.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Fully branded with your logo and brand colors",
              "Scheduled daily, weekly, or monthly delivery",
              "AI-written executive summary included automatically",
              "Shareable live dashboards — no client login required",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <PrimaryBtn>
            See reporting features <ArrowRight size={14} />
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
}

// ─── Use Cases Section ────────────────────────────────────────────────────────

function UseCasesSection() {
  const USE_CASES = [
    { icon: BarChart2,  title: "Executive Reporting",        desc: "Automated weekly summaries with blended KPIs delivered to leadership — no data team required.", color: BLUE },
    { icon: Target,     title: "Campaign Optimization",       desc: "Real-time CPA and ROAS monitoring with AI-flagged anomalies so you act on issues before clients do.", color: VIOLET },
    { icon: TrendingUp, title: "Marketing ROI Analysis",      desc: "Unified cost and revenue data across all platforms for accurate blended ROAS and contribution margin reporting.", color: GREEN },
    { icon: GitBranch,  title: "Cross-Channel Attribution",   desc: "Compare attribution windows across Meta, Google, and TikTok with a single normalized view of the same conversion.", color: CYAN },
    { icon: Users,      title: "Customer Acquisition",        desc: "Track CAC and LTV trends across every paid acquisition channel from one consolidated dashboard.", color: AMBER },
    { icon: Activity,   title: "Performance Monitoring",      desc: "24/7 anomaly detection with instant Slack or email alerts when a campaign deviates from pacing targets.", color: BLUE },
    { icon: FileText,   title: "Automated Weekly Reports",    desc: "Schedule branded PDF reports for every client — built, formatted, and delivered automatically on your timeline.", color: VIOLET },
  ];

  return (
    <section className="bg-white py-24 px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Use cases</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            From daily reporting to strategic decisions
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Real workflows that Cerebro makes faster, more accurate, and fully automated.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {USE_CASES.map((uc) => (
            <div
              key={uc.title}
              className="bg-[#F7F8FC] border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all group cursor-default"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${uc.color}10` }}
              >
                <uc.icon size={16} style={{ color: uc.color }} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">{uc.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function Home() {
  const navigate = useNavigate();
  const { open: openDemo } = useDemoModal();

  return (
    // pt-14
    <div className=""> 
      {/* ── Hero ── */}
      <section className="bg-white px-6 pt-20 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="pt-20 pb-16">
            <Badge color={BLUE}>
              <Sparkles size={10} />
              AI-Powered Marketing Intelligence Platform
            </Badge>
            <h1 className="mt-5 text-4xl md:text-[52px] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Replace your spreadsheet stack with an AI ad intelligence layer
            </h1>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-lg">
              Cerebro dNANO connects Meta, Google, TikTok, and DV360 into a single automated reporting platform — with AI-generated insights, executive dashboards, and white-label reports that deliver themselves.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Built for agencies and performance teams managing <span className="text-slate-600 font-medium">$50k–$5M/month</span> in paid media.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <PrimaryBtn onClick={openDemo}>
                Book a Demo <ArrowRight size={14} />
              </PrimaryBtn>
              <OutlineBtn onClick={() => navigate("/pricing")}>
                Start free — from $149/mo
              </OutlineBtn>
            </div>
            <div className="mt-7 flex items-center gap-6">
              {[
                { label: "14-day free trial" },
                { label: "No credit card" },
                { label: "Deploy in minutes" },
              ].map((i) => (
                <span key={i.label} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Check size={12} className="text-green-500" />
                  {i.label}
                </span>
              ))}
            </div>
          </div>
          {/* Right — hero mockup vertically centered */}
          <div className="hidden md:flex items-center">
            <BrowserFrame>
              <img
                src={heroDashImg}
                alt="Cerebro dNANO client dashboard showing spend, impressions, ROAS, and campaign breakdowns"
                className="w-full object-cover object-top"
                style={{ maxHeight: 480 }}
              />
            </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ── Logo strip ── */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-7">
            Natively connects to every major ad platform
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {PLATFORM_LOGOS.map((p) => (
              <div key={p.name} className="flex items-center gap-3 opacity-50 hover:opacity-90 transition-opacity">
                <PlatformIcon name={p.name} size={44} bg={p.bg} color={p.color} />
                <span className="text-base font-medium text-slate-700">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Cerebro ── */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — bold problem statement */}
            <div className="md:sticky md:top-28">
              <SectionLabel>The problem we solve</SectionLabel>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Marketing data is broken. <span className="text-[#4A8FE0]">We fix it.</span>
              </h2>
              <p className="mt-5 text-slate-500 text-base leading-relaxed">
                Digital ad budgets are at record highs, but the tools haven't kept up. Teams still export CSVs, paste into spreadsheets, and manually reconcile numbers across four platforms every week.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { value: "8+ hrs", label: "wasted per team, per week on manual reporting" },
                  { value: "$40k+",  label: "average overspend caught per account in year one" },
                  { value: "4–6",    label: "platforms with incompatible schemas to reconcile" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <span className="text-2xl font-black text-slate-900 w-20 shrink-0">{s.value}</span>
                    <span className="text-sm text-slate-500 leading-snug">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — solution list */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: RefreshCw,
                  color: "#4A8FE0",
                  title: "Automated ETL Pipeline",
                  body: "Connect your ad accounts once via OAuth. Cerebro ingests, normalizes, and refreshes data from every platform every 15 minutes — no engineers, no manual exports.",
                },
                {
                  icon: Database,
                  color: "#22C55E",
                  title: "Unified Cross-Platform Schema",
                  body: "Meta, Google, TikTok, and DV360 speak different languages. Cerebro normalizes every metric, currency, and attribution window into one consistent dataset.",
                },
                {
                  icon: Brain,
                  color: "#818CF8",
                  title: "AI Anomaly Detection",
                  body: "Continuous statistical monitoring fires alerts the moment a CPA spikes, a budget bleeds, or CTR drops — with root-cause reasoning, not just a notification.",
                },
                {
                  icon: FileText,
                  color: "#F59E0B",
                  title: "White-Label Automated Reports",
                  body: "Branded PDF reports auto-generated on any schedule and delivered to any client — zero manual effort, fully customizable per workspace.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 bg-[#F7F8FC] border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${item.color}12` }}
                  >
                    <item.icon size={17} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-slate-400 font-mono">0{i + 1}</span>
                      <h3 className="text-[15px] font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#F7F8FC] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-10">
            Trusted by agencies and performance teams worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "180+",     label: "Agencies live on platform",          sub: "Across MENA, EU, and North America" },
              { value: "$2.4B+",   label: "Ad spend managed annually",          sub: "Across all connected accounts" },
              { value: "8+ hrs",   label: "Saved per team, per week",           sub: "Avg. across active workspaces" },
              { value: "99.97%",   label: "Pipeline uptime SLA",                sub: "Monitored 24/7 with auto-recovery" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1.5">{s.value}</div>
                <div className="text-sm font-medium text-slate-700 mb-1">{s.label}</div>
                <div className="text-xs text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Module grid ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>Platform capabilities</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              12 capabilities. One platform. Everything your ad team needs.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {MODULE_CARDS.map((m) => (
              <div
                key={m.label}
                className="group bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 rounded-xl p-5 flex items-center gap-3 transition-all cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${m.color}12` }}
                >
                  <m.icon size={15} style={{ color: m.color }} />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tabbed product showcase ── */}
      <ProductShowcaseSection />

      {/* ── Feature callout A: cross-platform view ── */}
      <section className="bg-[#F7F8FC] py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Unified reporting</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Every platform, one table. Finally.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-7">
              Stop toggling between four dashboards. Cerebro normalizes spend, impressions, conversions, and ROAS across Meta, Google, TikTok, and DV360 into a single live view your whole team can trust.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Automatic schema normalization across platforms",
                "Custom blended ROAS and attribution models",
                "Drill down by campaign, ad set, creative, or audience",
                "Export to Google Sheets, CSV, or API",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryBtn onClick={() => navigate("/features")}>
              Explore reporting <ArrowRight size={14} />
            </PrimaryBtn>
          </div>
          <div>
            <BrowserFrame>
                <div className="relative overflow-hidden">
                  <img
                    src={explorerImg}
                    alt="Cerebro dNANO campaign explorer showing multi-channel performance data"
                    className="w-full object-cover object-top"
                    style={{ maxHeight: 420 }}
                  />
                  {/* Blur overlay on the campaign name column (leftmost ~18% of the table) */}
                  <div
                    className="absolute inset-y-0 left-0 backdrop-blur-sm"
                    style={{ width: "18%", background: "rgba(255,255,255,0.35)" }}
                  />
                </div>
              </BrowserFrame>
          </div>
        </div>
      </section>

      {/* ── Dark AI platform showcase ── */}
      <DarkPlatformShowcase />

      {/* ── Reports callout ── */}
      <ReportsCallout />

      {/* ── Use Cases ── */}
      <UseCasesSection />

      {/* ── Feature callout B: Workflow ── */}
      <section className="bg-[#0B1728] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8F0FA] leading-tight">
              AI-Powered ETL Pipeline
            </h2>
            <p className="text-[#6B8DAE] text-sm mt-2 tracking-wide">Extract · Transform · Load</p>
          </div>

          {/* ── Flow section ── */}
          <div className="flex items-center justify-between h-[440px] w-full relative">

            {/* LEFT — Data Sources panel */}
            <div className="bg-[#0F2038] flex flex-col gap-5 p-6 relative rounded-[20px] shrink-0 w-[220px] self-stretch border border-[rgba(74,143,224,0.12)]">
              <div>
                <p className="font-extrabold text-[14px] text-white uppercase tracking-wide">Data Sources</p>
                <p className="font-medium text-[#64748b] text-[11px] mt-1">Social & Digital Platforms</p>
              </div>
              <div className="h-px w-full bg-[rgba(74,143,224,0.12)]" />
              <div className="flex flex-col gap-3.5 w-full">
                {[
                  { label: "Google Ads",      name: "Google Ads",  color: "#4285F4" },
                  { label: "Meta Ads",        name: "Meta Ads",    color: "#1877F2" },
                  { label: "TikTok Ads",      name: "TikTok Ads",  color: "#010101" },
                  { label: "DV360 Ads",       name: "DV360",       color: "#34A853" },
                  { label: "LinkedIn Ads",    name: "LinkedIn Ads",color: "#0A66C2" },
                  { label: "Snapchat Ads",    name: "Snapchat Ads",color: "#FFFC00" },
                  { label: "Website Blogs",   name: "",            color: "#1E3A6B" },
                  { label: "APIs & News",     name: "",            color: "#2D5090" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    {s.name ? (
                      <PlatformIcon name={s.name} size={28} bg="#fff" color={s.color} />
                    ) : (
                      <div className="rounded-[6px] shrink-0 w-7 h-7 flex items-center justify-center" style={{ background: s.color }}>
                        <div className="w-2 h-2 rounded-sm bg-white/70" />
                      </div>
                    )}
                    <span className="font-medium text-[13px] text-white">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow lines LEFT — 5 converging diagonals with animated dots */}
            <div className="h-[300px] shrink-0 w-[100px]">
              <svg width="100.75" height="300" viewBox="0 0 100.75 300" fill="none" overflow="visible">
                <defs>
                  {[0,1,2,3,4].map((i) => (
                    <linearGradient key={i} id={`etlL${i}`} gradientUnits="userSpaceOnUse"
                      x1="0" y1="0" x2="90" y2="0">
                      <stop stopColor="#4A8FE0" />
                      <stop offset="1" stopColor="#4A8FE0" stopOpacity="0" />
                    </linearGradient>
                  ))}
                </defs>
                {[
                  { x1:1.125, y1:29.35,  x2:89.46,  y2:80.35  },
                  { x1:0.94,  y1:79.28,  x2:98.5,   y2:105.42 },
                  { x1:0.75,  y1:129.25, x2:100.75, y2:129.25 },
                  { x1:0.56,  y1:179.28, x2:98.11,  y2:153.14 },
                  { x1:0.375, y1:229.35, x2:88.71,  y2:178.35 },
                ].map((l, i) => (
                  <g key={i}>
                    <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                      stroke="#4A8FE0" strokeOpacity="0.25" strokeWidth="1.5" />
                    {[0, 1].map((d) => (
                      <circle key={d} r="2.5" fill="#4A8FE0">
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          begin={`${i * 0.22 + d * 1}s`}
                          path={`M${l.x1},${l.y1} L${l.x2},${l.y2}`}
                        />
                      </circle>
                    ))}
                  </g>
                ))}
              </svg>
            </div>

            {/* CENTER — ETL cards + AI pill */}
            <div className="flex-1 flex flex-col gap-6 items-center">
              {/* 3 stage cards with arrow separators */}
              <div className="flex items-center gap-3 w-full">

                {/* EXTRACT */}
                <div className="bg-[#0F2038] flex flex-col gap-5 h-[250px] px-5 py-6 rounded-[16px] flex-1 border border-[rgba(74,143,224,0.2)]"
                  style={{ boxShadow: "0 8px 12px rgba(74,143,224,0.08)" }}>
                  <div className="flex flex-col gap-3 items-center w-full">
                    <p className="font-bold text-[14px] text-[#4A8FE0] text-center uppercase tracking-widest">EXTRACT</p>
                    <div className="bg-[rgba(74,143,224,0.06)] flex items-center justify-center rounded-[22px] w-11 h-11 border border-[rgba(74,143,224,0.13)]">
                      <Download size={20} className="text-[#4A8FE0]" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {["AI Web Crawlers", "API Connectors", "Real-time Data"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#4A8FE0] shrink-0" />
                        <span className="text-[11px] text-[#94a3b8]">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight size={20} className="text-[#64748b] shrink-0" strokeWidth={2} />

                {/* TRANSFORM */}
                <div className="bg-[#0F2038] flex flex-col gap-5 h-[250px] px-5 py-6 rounded-[16px] flex-1 border border-[rgba(74,143,224,0.2)]"
                  style={{ boxShadow: "0 8px 12px rgba(74,143,224,0.08)" }}>
                  <div className="flex flex-col gap-3 items-center w-full">
                    <p className="font-bold text-[14px] text-[#4A8FE0] text-center uppercase tracking-widest">TRANSFORM</p>
                    <div className="bg-[rgba(74,143,224,0.06)] flex items-center justify-center rounded-[22px] w-11 h-11 border border-[rgba(74,143,224,0.13)]">
                      <Settings size={20} className="text-[#4A8FE0]" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {["LLM Parsing", "Data Cleaning", "Enrichment", "Deduplication"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#4A8FE0] shrink-0" />
                        <span className="text-[11px] text-[#94a3b8]">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight size={20} className="text-[#64748b] shrink-0" strokeWidth={2} />

                {/* LOAD */}
                <div className="bg-[#0F2038] flex flex-col gap-5 h-[250px] px-5 py-6 rounded-[16px] flex-1 border border-[rgba(74,143,224,0.2)]"
                  style={{ boxShadow: "0 8px 12px rgba(74,143,224,0.08)" }}>
                  <div className="flex flex-col gap-3 items-center w-full">
                    <p className="font-bold text-[14px] text-[#4A8FE0] text-center uppercase tracking-widest">LOAD</p>
                    <div className="bg-[rgba(74,143,224,0.06)] flex items-center justify-center rounded-[22px] w-11 h-11 border border-[rgba(74,143,224,0.13)]">
                      <Database size={20} className="text-[#4A8FE0]" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {["Data Warehouse", "Data Lake", "Vector DB"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#4A8FE0] shrink-0" />
                        <span className="text-[11px] text-[#94a3b8]">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI pill */}
              <div className="bg-[#0F2038] flex items-center gap-2 px-6 py-2.5 rounded-full border border-[rgba(74,143,224,0.33)]"
                style={{ boxShadow: "0 4px 8px rgba(74,143,224,0.13)" }}>
                <Sparkles size={16} className="text-[#4A8FE0]" strokeWidth={2} />
                <span className="font-semibold text-[13px] text-white whitespace-nowrap">AI Processing & Intelligence</span>
              </div>
            </div>

            {/* Flow lines RIGHT — 5 diverging diagonals with animated dots */}
            <div className="h-[300px] shrink-0 w-[100px]">
              <svg width="100.75" height="300" viewBox="0 0 100.75 300" fill="none" overflow="visible">
                {[
                  { x1:0.375, y1:79.35,  x2:88.71,  y2:28.35  },
                  { x1:0.56,  y1:114.28, x2:98.11,  y2:88.13  },
                  { x1:0.75,  y1:149.25, x2:100.75, y2:149.25 },
                  { x1:0.94,  y1:184.28, x2:98.5,   y2:210.42 },
                  { x1:1.125, y1:219.35, x2:89.46,  y2:270.35 },
                ].map((l, i) => (
                  <g key={i}>
                    <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                      stroke="#4A8FE0" strokeOpacity="0.25" strokeWidth="1.5" />
                    {[0, 1].map((d) => (
                      <circle key={d} r="2.5" fill="#4A8FE0">
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          begin={`${i * 0.22 + d * 1 + 0.1}s`}
                          path={`M${l.x1},${l.y1} L${l.x2},${l.y2}`}
                        />
                      </circle>
                    ))}
                  </g>
                ))}
              </svg>
            </div>

            {/* RIGHT — Unified Intelligence panel */}
            <div className="bg-[#0F2038] flex flex-col gap-5 p-6 relative rounded-[20px] shrink-0 w-[220px] self-stretch border border-[rgba(74,143,224,0.12)]">
              <div>
                <p className="font-extrabold text-[14px] text-white uppercase tracking-wide">Unified Intelligence</p>
                <p className="font-medium text-[#64748b] text-[11px] mt-1">Insights That Drive Growth</p>
              </div>
              <div className="h-px w-full bg-[rgba(74,143,224,0.12)]" />
              <div className="flex flex-col gap-3.5 w-full">
                {[
                  { icon: BarChart2,   label: "Analytics Dashboard" },
                  { icon: Users,       label: "CRM & Lead Insights" },
                  { icon: Search,      label: "Smart Search" },
                  { icon: Bell,        label: "Reports & Alerts" },
                  { icon: Brain,       label: "AI Assistant" },
                ].map((o) => (
                  <div key={o.label} className="flex items-center gap-3">
                    <div className="bg-[rgba(74,143,224,0.1)] flex items-center justify-center rounded-lg shrink-0 w-7 h-7 border border-[rgba(74,143,224,0.2)]">
                      <o.icon size={14} className="text-[#4A8FE0]" strokeWidth={2} />
                    </div>
                    <span className="font-medium text-[13px] text-white">{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Benefits panel ── */}
          <div className="mt-5 bg-[#0F2038] rounded-[16px] border border-[rgba(74,143,224,0.12)]">
            <div className="flex items-center px-6 py-4 gap-6">
              {[
                { icon: Zap,        title: "Real-time Data",   sub: "Instant streaming & ingestion" },
                { icon: Shield,     title: "High Accuracy",    sub: "Precision cleaning & parsing" },
                { icon: Eye,        title: "Deeper Insights",  sub: "Enriched contextual metrics" },
                { icon: Award,      title: "Better Decisions", sub: "Empowered conversion rates" },
                { icon: TrendingUp, title: "Business Growth",  sub: "Optimized execution scale" },
              ].map((b, i) => (
                <div key={b.title} className="flex items-center gap-2.5 flex-1 min-w-0">
                  {i > 0 && <div className="w-px h-10 bg-[rgba(74,143,224,0.12)] shrink-0 -ml-3 mr-3" />}
                  <div className="bg-[rgba(74,143,224,0.1)] flex items-center justify-center rounded-[18px] shrink-0 w-9 h-9">
                    <b.icon size={18} className="text-[#4A8FE0]" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-[11px] text-white leading-tight">{b.title}</p>
                    <p className="text-[10px] text-[#94a3b8] leading-tight mt-0.5">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>Industries we serve</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Built for every team that runs paid media
            </h2>
            <p className="mt-4 text-slate-500">
              Whether you manage one brand or two hundred clients, Cerebro adapts to your workflow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: Briefcase,     title: "Marketing Agencies",   desc: "Manage every client account from one workspace. White-label reports, consolidated billing, and role-based access keep your operations clean.", color: BLUE },
              { icon: ShoppingBag,   title: "E-commerce",           desc: "Connect Shopify, Meta, and Google in one view. Track ROAS, POAS, and blended MER with MTA models tuned for DTC brands.", color: CYAN },
              { icon: Zap,           title: "SaaS",                 desc: "Track paid acquisition CAC across every channel. Tie ad spend to trial starts and MRR expansion without a BI team.", color: VIOLET },
              { icon: Heart,         title: "Healthcare",           desc: "HIPAA-aware reporting for healthcare marketers. Unify campaign data across platforms while respecting audience targeting limits.", color: AMBER },
              { icon: Landmark,      title: "Finance",              desc: "Attribution for regulated industries. Audit-ready reporting with role-based access controls and immutable data logs.", color: GREEN },
              { icon: GraduationCap, title: "Education",            desc: "Enrollment and enrollment-intent reporting across Meta, Google, and LinkedIn. Track cost-per-lead and cohort conversion in one place.", color: BLUE },
              { icon: ShoppingBag,   title: "Retail",               desc: "Omnichannel retail media reporting: online and offline. Sync in-store conversion data with your digital ad performance.", color: CYAN },
              { icon: Globe,         title: "Real Estate",          desc: "Lead-gen performance dashboards for property marketers. Track cost-per-inquiry across portals, social, and search.", color: AMBER },
              { icon: Building2,     title: "Enterprise",           desc: "Custom data residency, SSO, audit logging, and dedicated SLA. Built for large teams with complex compliance requirements.", color: VIOLET },
            ].map((ind) => (
              <div key={`${ind.title}-${ind.color}`} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:shadow-slate-100 hover:border-slate-300 transition-all group cursor-default">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${ind.color}10` }}
                >
                  <ind.icon size={18} style={{ color: ind.color }} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{ind.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}

      {/* ── Roadmap ── */}
      <section className="bg-[#0B1728] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title — left-aligned, editorial style like the reference */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Product Roadmap
          </h2>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-white/[0.1]" />

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  dot: "#22C55E",
                  phase: "Now — Live",
                  tag: "RELEASED",
                  items: [
                    { title: "Automated ETL Pipeline",    desc: "Real-time ingestion from Meta, Google, TikTok, and DV360 every 15 minutes with 36-month historical backfill on first connect." },
                    { title: "AI Anomaly Detection",       desc: "Statistical baseline models that surface CPA spikes, budget bleeds, and CTR drops the moment they occur — with root-cause reasoning." },
                    { title: "White-label PDF Reports",    desc: "Fully branded reports auto-generated on any schedule and delivered to any recipient via email or Slack digest." },
                    { title: "Cross-Platform Dashboard",   desc: "Unified ROAS, spend, impressions, and conversion view across all connected accounts with drill-down to campaign and ad level." },
                    { title: "Slack & Email Alerts",       desc: "Configurable threshold-based alerts with custom conditions delivered to Slack or any email address in real time." },
                    { title: "Role-Based Access Control",  desc: "Per-workspace permissions with SSO via SAML 2.0 and immutable audit logs covering every user action." },
                  ],
                },
                {
                  dot: "#4A8FE0",
                  phase: "Coming Soon",
                  tag: "Q3 / Q4 2026",
                  items: [
                    { title: "Creative Intelligence",      desc: "Automatic creative performance scoring — identify winning hooks, formats, and CTAs before fatigue sets in." },
                    { title: "Automated Budget Rules",     desc: "Conditional rules that pause underperformers, scale winners, and enforce spend caps on your schedule." },
                    { title: "Incrementality Testing",     desc: "Built-in holdout and geo experiments to measure true campaign incrementality without third-party tools." },
                    { title: "Predictive Forecasting",     desc: "ML-powered revenue and conversion forecasts at the campaign level with confidence intervals." },
                    { title: "Audience Overlap Analysis",  desc: "Cross-platform frequency management and audience overlap visualization from one unified view." },
                    { title: "Custom Dashboards API",      desc: "Build fully custom dashboards with your own metrics and visualizations via a public API." },
                  ],
                },
                {
                  dot: "#818CF8",
                  phase: "Future",
                  tag: "2027 & BEYOND",
                  items: [
                    { title: "Autonomous Campaign Mgmt",   desc: "AI-driven bid and budget adjustments executed without manual approval for pre-defined rule sets." },
                    { title: "Retail Media Networks",      desc: "Native connectors for Amazon DSP, Walmart Connect, and Instacart Ads unified with paid social data." },
                    { title: "Competitive Intelligence",   desc: "Auction-level spend signals and creative trends from your competitive set surfaced in your dashboard." },
                    { title: "Full-Funnel Attribution",    desc: "Closed-loop attribution from first impression to CRM-confirmed revenue with Salesforce and HubSpot sync." },
                    { title: "AI Report Narration",        desc: "Natural language summaries auto-generated for every report section — editable before delivery." },
                    { title: "Multi-Currency P&L View",    desc: "Agency P&L across all client accounts in any currency with real-time FX normalization." },
                  ],
                },
              ].map((col) => (
                <div key={col.phase}>
                  {/* Dot on timeline */}
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className="w-3.5 h-3.5 rounded-full shrink-0 ring-4 ring-[#0B1728]"
                      style={{ background: col.dot }}
                    />
                    <span
                      className="text-[10px] font-bold tracking-[0.18em] uppercase font-mono"
                      style={{ color: col.dot }}
                    >
                      {col.tag}
                    </span>
                  </div>

                  {/* Phase label */}
                  <h3 className="text-xl font-bold text-white mb-6">{col.phase}</h3>

                  {/* Items */}
                  <div className="space-y-6">
                    {col.items.map((item) => (
                      <div key={item.title} className="border-b border-white/[0.06] pb-6 last:border-0 last:pb-0">
                        <p className="text-sm font-semibold text-white mb-1.5 leading-snug">{item.title}</p>
                        <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer link */}
          <div className="mt-14">
            <a
              href="mailto:connect@activ8.digital"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Have a feature request? Tell us what you need <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <SectionLabel>Get started today</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Stop reporting. Start deciding.
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            Join 180+ agencies and performance teams already saving 8+ hours a week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryBtn className="px-8 py-3.5 text-base" onClick={() => navigate("/pricing")}>
              Start 14-day free trial
            </PrimaryBtn>
            <OutlineBtn onClick={openDemo}>
              Book a live demo
            </OutlineBtn>
          </div>
          <p className="mt-5 text-sm text-slate-400">No credit card required · Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FEATURES PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const FEATURE_TABS = [
  {
    id: "pipeline",
    label: "Data Pipeline",
    color: BLUE,
    icon: Database,
    heading: "Production-grade data infrastructure — without the infrastructure team",
    subtext: "A resilient ingestion layer that pulls raw events from every connected platform, normalizes them into a unified schema, and keeps them fresh every 15 minutes.",
    items: [
      { title: "15-minute sync cadence", desc: "Raw events pulled from every connected platform every 15 minutes — 96 syncs per day, automatically." },
      { title: "36-month backfill", desc: "Pull full historical data on first connect. No gaps, no manual imports, no waiting." },
      { title: "Schema evolution", desc: "When platforms add or rename fields, Cerebro adapts without breaking existing reports or dashboards." },
      { title: "Deduplication engine", desc: "Conversion events are deduplicated across platforms using a deterministic fingerprinting algorithm." },
      { title: "Error recovery", desc: "Automatic retry logic with exponential backoff. Failed syncs self-heal — you get an alert, not a broken dashboard." },
      { title: "Raw data access", desc: "All normalized events are accessible via API or export to Snowflake, BigQuery, or Redshift." },
    ],
  },
  {
    id: "ai",
    label: "AI Intelligence",
    color: VIOLET,
    icon: Brain,
    heading: "An AI analyst that never sleeps, never misses a shift, never asks for a raise",
    subtext: "Cerebro monitors every metric across every platform simultaneously and surfaces the ones that need your attention — with context and a recommended action.",
    items: [
      { title: "Anomaly detection", desc: "Statistical models flag budget bleeds, CTR drops, and CPA spikes the moment they emerge." },
      { title: "Root cause analysis", desc: "When a metric moves, Cerebro traces the cause: creative fatigue, audience saturation, bid competition, or platform issue." },
      { title: "Predictive pacing", desc: "ML-powered budget pacing ensures campaigns hit targets without over- or under-spending." },
      { title: "Natural language Q&A", desc: "Ask any question in plain English. Cerebro queries your data and responds with a chart and written summary." },
      { title: "Weekly digest", desc: "A plain-English performance summary delivered to your inbox or Slack every Monday morning." },
      { title: "Custom alert rules", desc: "Define your own thresholds and conditions. Get notified on Slack, email, or webhook." },
    ],
  },
  {
    id: "reporting",
    label: "Reporting",
    color: CYAN,
    icon: FileText,
    heading: "Client reports that write themselves — on your branding, on your schedule",
    subtext: "Configure once. Cerebro generates, schedules, and delivers reports while you focus on the work that actually requires your judgment.",
    items: [
      { title: "White-label PDF reports", desc: "Auto-generated branded reports with your logo, colors, and commentary — sent on your schedule." },
      { title: "Slack & email digests", desc: "Daily or weekly performance summaries delivered to your team's Slack workspace or inbox." },
      { title: "Shareable live dashboards", desc: "Password-protected live dashboards you can share with clients — no login required on their end." },
      { title: "Custom metrics", desc: "Build calculated metrics, blended KPIs, and attribution models tailored to your business model." },
      { title: "Executive view", desc: "A clean top-line summary for stakeholders who need the headline numbers without the noise." },
      { title: "Scheduled exports", desc: "Auto-export to Google Sheets, CSV, or your data warehouse on any cadence." },
    ],
  },
  {
    id: "security",
    label: "Security",
    color: GREEN,
    icon: Shield,
    heading: "Enterprise security without the enterprise procurement process",
    subtext: "Independently audited, continuously monitored, and built on zero-trust principles. Your clients' ad data is yours — not ours to sell or share.",
    items: [
      { title: "SOC 2 Type II certified", desc: "Independently audited security controls, penetration testing, and continuous compliance monitoring." },
      { title: "Role-based access control", desc: "Granular permissions per workspace, account, and report. Control exactly who sees what." },
      { title: "SSO & SAML 2.0", desc: "Integrate with Okta, Azure AD, Google Workspace, and any SAML 2.0 identity provider." },
      { title: "Immutable audit logs", desc: "Every data access, export, and configuration change is logged and cannot be modified." },
      { title: "AES-256 encryption", desc: "All data encrypted at rest and in transit. OAuth tokens stored with hardware-backed encryption." },
      { title: "GDPR & CCPA compliant", desc: "Data residency options for EU customers. Automated data subject request handling." },
    ],
  },
];

function FeaturesPage() {
  const [active, setActive] = useState(0);
  const { open: openDemo } = useDemoModal();
  const tab = FEATURE_TABS[active];

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-20 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><Sparkles size={10} /> Full Platform</Badge>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Everything your team needs — nothing it doesn't
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            A production-grade platform built for agencies and performance teams that take data seriously.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <PrimaryBtn>Start free trial <ArrowRight size={14} /></PrimaryBtn>
            <OutlineBtn>Book a demo</OutlineBtn>
          </div>
        </div>
      </section>

      {/* Feature tabs */}
      <section className="bg-[#0B1728] border-y border-[rgba(74,143,224,0.1)] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-1 border-b border-[rgba(74,143,224,0.15)] mb-14">
            {FEATURE_TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-all",
                  active === i ? "border-current" : "border-transparent text-[#6B8DAE] hover:text-[#E8F0FA]"
                )}
                style={active === i ? { color: t.color, borderColor: t.color } : {}}
              >
                <t.icon size={14} />
                {t.label}
              </button>
            ))}
          </div>

          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#E8F0FA] mb-3 max-w-2xl">{tab.heading}</h2>
              <p className="text-[#6B8DAE] max-w-xl">{tab.subtext}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tab.items.map((item) => (
                <div key={item.title} className="bg-[#0F2038] border border-[rgba(74,143,224,0.12)] rounded-xl p-5 hover:border-[rgba(74,143,224,0.3)] hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: tab.color }} />
                    <h3 className="font-semibold text-[#E8F0FA] text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#6B8DAE] leading-relaxed pl-3.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Cerebro vs. the spreadsheet stack</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Capability</span>
              <span className="text-center">Manual Stack</span>
              <span className="text-center text-[#4A8FE0]">Cerebro dNANO</span>
            </div>
            {[
              ["Cross-platform unified view", false, true],
              ["Real-time data (< 15 min)", false, true],
              ["AI anomaly detection", false, true],
              ["Automated client reports", false, true],
              ["Custom attribution models", false, true],
              ["Historical data backfill", "Limited / manual", true],
              ["SSO & role-based access", false, true],
              ["API data export", "Manual CSV only", true],
            ].map(([cap, manual]) => (
              <div key={String(cap)} className="grid grid-cols-3 border-b border-slate-100 px-6 py-4 last:border-0 hover:bg-slate-50 transition-colors">
                <span className="text-sm text-slate-700">{String(cap)}</span>
                <div className="flex justify-center">
                  {manual === false
                    ? <X size={14} className="text-slate-300" />
                    : <span className="text-xs text-amber-500">{String(manual)}</span>}
                </div>
                <div className="flex justify-center">
                  <Check size={15} className="text-[#4A8FE0]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark impact block like homepage ETL section */}
      <section className="bg-[#0B1728] py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to see it live?</h2>
        <p className="text-slate-400 mb-8">Book a 30-minute product tour with a Cerebro solutions engineer.</p>
        <PrimaryBtn onClick={openDemo}>Book a live demo <ArrowRight size={14} /></PrimaryBtn>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// INTEGRATIONS PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const INTEGRATIONS = [
  { name: "Meta Ads",        cat: "Paid Social",  color: "#1877F2", bg: "#fff",    letter: "f",  status: "live", events: "8 event types",  latency: "15 min" },
  { name: "Google Ads",      cat: "Search",       color: "#4285F4", bg: "#fff",    letter: "G",  status: "live", events: "12 event types", latency: "15 min" },
  { name: "TikTok Ads",      cat: "Paid Social",  color: "#010101", bg: "#fff",    letter: "T",  status: "live", events: "6 event types",  latency: "15 min" },
  { name: "DV360",           cat: "Programmatic", color: "#34A853", bg: "#fff",    letter: "D",  status: "live", events: "9 event types",  latency: "30 min" },
  { name: "Google Analytics",cat: "Analytics",    color: "#F9AB00", bg: "#fff",    letter: "GA", status: "live", events: "14 event types", latency: "15 min" },
  { name: "Shopify",         cat: "eCommerce",    color: "#96BF48", bg: "#fff",    letter: "S",  status: "live", events: "10 event types", latency: "15 min" },
  { name: "LinkedIn Ads",    cat: "Paid Social",  color: "#0A66C2", bg: "#fff",    letter: "in", status: "beta", events: "5 event types",  latency: "1 hr" },
  { name: "Snapchat Ads",    cat: "Paid Social",  color: "#FFFC00", bg: "#FFFC00", letter: "S",  status: "beta", events: "4 event types",  latency: "1 hr" },
  { name: "Pinterest Ads",   cat: "Paid Social",  color: "#E60023", bg: "#fff",    letter: "P",  status: "soon" },
  { name: "X Ads",           cat: "Paid Social",  color: "#1D9BF0", bg: "#fff",    letter: "X",  status: "soon" },
  { name: "Amazon DSP",      cat: "Programmatic", color: "#FF9900", bg: "#fff",    letter: "A",  status: "soon" },
  { name: "Bing Ads",        cat: "Search",       color: "#008272", bg: "#fff",    letter: "B",  status: "soon" },
];

const CATS = ["All", "Paid Social", "Search", "Programmatic", "Analytics", "eCommerce"];

function IntegrationsPage() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const visible = INTEGRATIONS.filter((i) =>
    (filter === "All" || i.cat === filter) && i.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-20 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><Database size={10} /> Integrations</Badge>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Connect your entire ad stack
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            OAuth-powered connectors. Zero engineering required. First data in under 5 minutes.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-[#0B1728] border-y border-[rgba(74,143,224,0.1)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all",
                    filter === c
                      ? "text-white"
                      : "bg-[#0F2038] border border-[rgba(74,143,224,0.15)] text-[#6B8DAE] hover:border-[rgba(74,143,224,0.3)] hover:text-[#E8F0FA]"
                  )}
                  style={filter === c ? { background: BLUE } : {}}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B8DAE]" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                className="bg-[#0F2038] border border-[rgba(74,143,224,0.15)] rounded-lg pl-8 pr-4 py-1.5 text-sm text-[#E8F0FA] placeholder-[#4A6B8A] focus:outline-none focus:border-[#4A8FE0] w-52"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visible.map((int) => (
              <div
                key={int.name}
                className={cn(
                  "bg-[#0F2038] border rounded-xl p-5 transition-all",
                  int.status === "soon"
                    ? "border-[rgba(74,143,224,0.08)] opacity-60"
                    : "border-[rgba(74,143,224,0.12)] hover:border-[rgba(74,143,224,0.3)]"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <PlatformIcon name={int.name} size={40} bg={int.bg} color={int.color} letter={int.letter} />
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      color: int.status === "live" ? GREEN : int.status === "beta" ? AMBER : "#4A6B8A",
                      background: int.status === "live" ? `${GREEN}18` : int.status === "beta" ? `${AMBER}18` : "rgba(74,143,224,0.08)",
                    }}
                  >
                    {int.status === "live" ? "● Live" : int.status === "beta" ? "◐ Beta" : "○ Coming soon"}
                  </span>
                </div>
                <h3 className="font-semibold text-[#E8F0FA] mb-0.5 text-sm">{int.name}</h3>
                <p className="text-xs text-[#6B8DAE] mb-4">{int.cat}</p>
                {int.status !== "soon" && int.events && (
                  <div className="flex items-center justify-between text-xs text-[#4A6B8A] border-t border-[rgba(74,143,224,0.1)] pt-3">
                    <span>{int.events}</span>
                    <span className="flex items-center gap-1"><Clock size={9} /> {int.latency}</span>
                  </div>
                )}
                {int.status === "soon" && (
                  <button className="w-full mt-1 text-xs text-[#6B8DAE] border border-[rgba(74,143,224,0.15)] rounded-lg py-1.5 hover:border-[rgba(74,143,224,0.3)] transition-colors">
                    Notify me
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#F7F8FC] border border-slate-200 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge color={BLUE}><Cpu size={10} /> Architecture</Badge>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 mb-4">How data flows into Cerebro</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Every connector uses OAuth 2.0. Data is pulled via platform APIs, normalized through a typed schema layer, and written into your dedicated event store — no raw credentials ever stored.
              </p>
              <ul className="space-y-3">
                {["OAuth 2.0 — no credential storage", "Encrypted at rest (AES-256)", "Isolated per-workspace compute", "GDPR & CCPA compliant pipeline"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Shield size={13} className="text-[#4A8FE0] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5">
              {["OAuth Connection", "Raw Event Pull", "Schema Normalization", "Deduplication", "Your Dashboard"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: BLUE }}>{i + 1}</div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700">{step}</div>
                  {i < 4 && <ChevronRight size={12} className="text-slate-300 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRICING PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const PLANS = [
  {
    name: "Starter",
    price: 149,
    desc: "For growing teams running 2–3 platforms.",
    color: CYAN,
    features: ["Up to 3 ad platform connections", "15-minute data refresh", "5 automated reports/month", "3 team members", "30-day data retention", "Email support"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: 399,
    desc: "For agencies managing multiple clients across all major platforms.",
    color: BLUE,
    features: ["Unlimited ad platform connections", "15-minute data refresh", "Unlimited reports & dashboards", "25 team members", "AI anomaly detection", "White-label client reports", "12-month data retention", "Slack & email digests", "Priority support"],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: null,
    desc: "For large teams with custom compliance and SLA needs.",
    color: VIOLET,
    features: ["Everything in Growth", "SSO & SAML 2.0", "Custom data retention", "Dedicated data warehouse", "99.99% SLA", "Custom API limits", "Audit logging", "Dedicated success manager", "Custom contract & billing"],
    cta: "Contact sales",
    highlight: false,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <ChevronDown size={14} className={cn("text-slate-400 transition-transform shrink-0", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
            <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PricingPage() {
  const [annual, setAnnual] = useState(true);
  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-16 text-center">
        <Badge color={BLUE}><TrendingUp size={10} /> Pricing</Badge>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          Transparent pricing.<br className="hidden md:block" /> No surprise bills.
        </h1>
        <p className="mt-5 text-lg text-slate-500">Start free. Scale when you're ready.</p>
        <div className="mt-8 inline-flex items-center gap-1 bg-slate-100 rounded-xl p-1">
          <button
            onClick={() => setAnnual(false)}
            className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all", !annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500")}
          >Monthly</button>
          <button
            onClick={() => setAnnual(true)}
            className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2", annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500")}
          >
            Annual
            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-semibold">Save 20%</span>
          </button>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border p-8 transition-all",
                  plan.highlight
                    ? "border-blue-200 bg-blue-50 shadow-xl shadow-blue-100/50"
                    : "border-slate-200 bg-white"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="text-white text-xs font-semibold px-4 py-1 rounded-full" style={{ background: BLUE }}>Most popular</span>
                  </div>
                )}
                <h3 className="font-bold text-slate-900 text-lg mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  {plan.price === null ? (
                    <span className="text-4xl font-bold text-slate-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-slate-900">
                        ${annual ? Math.round(plan.price * 0.8) : plan.price}
                      </span>
                      <span className="text-slate-400 text-sm">/mo</span>
                    </>
                  )}
                </div>
                {annual && plan.price !== null && (
                  <p className="text-xs text-green-600 font-medium -mt-4 mb-5">Billed annually</p>
                )}
                <button
                  className={cn(
                    "w-full py-2.5 rounded-xl text-sm font-semibold transition-all mb-7",
                    plan.highlight
                      ? "text-white hover:opacity-90"
                      : "border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  )}
                  style={plan.highlight ? { background: BLUE } : {}}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={14} className="text-[#4A8FE0] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-8 text-center">Frequently asked</h2>
          <div className="space-y-3">
            {[
              { q: "Is there a free trial?", a: "Yes — all plans include a 14-day free trial with no credit card required." },
              { q: "What counts as an 'ad platform connection'?", a: "Each connected ad account counts as one connection. Connecting Meta Ads Manager for three clients = 3 connections." },
              { q: "Can I change plans later?", a: "Yes. Upgrade, downgrade, or cancel any time from your account settings." },
              { q: "Do you offer startup discounts?", a: "Yes — special pricing for YC, Google Cloud, and AWS startup programs. Contact sales." },
            ].map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#0B1728] py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Not sure which plan fits?</h2>
        <p className="text-slate-400 mb-8">Talk to our team — we'll recommend the right tier for your agency size and platform mix.</p>
        <PrimaryBtn>Talk to sales <ArrowRight size={14} /></PrimaryBtn>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DASHBOARD PAGE (live product demo)
// ═══════════════════════════════════════════════════════════════════════════════

const spendData = [
  { date: "Jul 1", meta: 4200, google: 3100, tiktok: 1800, dv360: 2400 },
  { date: "Jul 7", meta: 5100, google: 3200, tiktok: 1900, dv360: 3100 },
  { date: "Jul 14", meta: 4600, google: 3700, tiktok: 2400, dv360: 2900 },
  { date: "Jul 21", meta: 5800, google: 4100, tiktok: 2800, dv360: 3300 },
  { date: "Jul 28", meta: 6200, google: 4300, tiktok: 3100, dv360: 3800 },
];

const pieData = [
  { name: "Meta", value: 38, color: "#1877F2" },
  { name: "Google", value: 28, color: "#4285F4" },
  { name: "TikTok", value: 18, color: "#FF0050" },
  { name: "DV360", value: 16, color: "#34A853" },
];

const convData = [
  { date: "Jul 1", conversions: 280, revenue: 14200 },
  { date: "Jul 7", conversions: 340, revenue: 17800 },
  { date: "Jul 14", conversions: 420, revenue: 22400 },
  { date: "Jul 21", conversions: 460, revenue: 25100 },
  { date: "Jul 28", conversions: 510, revenue: 28400 },
];

const DB_NAV = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: TrendingUp, label: "Performance", id: "perf" },
  { icon: Database, label: "Campaigns", id: "campaigns" },
  { icon: Brain, label: "AI Insights", id: "ai" },
  { icon: Bell, label: "Alerts", id: "alerts" },
  { icon: FileText, label: "Reports", id: "reports" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const TOP_CAMPAIGNS = [
  { name: "Meta — Prospecting Q3", platform: "Meta", spend: "$12,400", roas: "4.8x", cpa: "$14.20", status: "good" },
  { name: "Google — Brand Search", platform: "Google", spend: "$8,900", roas: "6.2x", cpa: "$8.40", status: "good" },
  { name: "TikTok — Retargeting", platform: "TikTok", spend: "$5,100", roas: "3.1x", cpa: "$22.80", status: "warn" },
  { name: "DV360 — Display Broad", platform: "DV360", spend: "$9,300", roas: "2.4x", cpa: "$31.50", status: "bad" },
  { name: "Meta — Lookalike 1%", platform: "Meta", spend: "$4,800", roas: "7.9x", cpa: "$11.10", status: "good" },
];

function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="pt-14 flex min-h-screen bg-[#F7F8FC]">
      {/* Sidebar */}
      <div className={cn("shrink-0 border-r border-slate-200 bg-white flex flex-col transition-all duration-200", sidebarOpen ? "w-56" : "w-14")}>
        {/* Header */}
        <div className="h-12 border-b border-slate-100 flex items-center px-3 gap-2">
          <button onClick={() => setSidebarOpen((v) => !v)} className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
            {sidebarOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
          {sidebarOpen && <span className="text-xs text-slate-500 font-medium">Acme Corp</span>}
        </div>

        {/* Client selector */}
        {sidebarOpen && (
          <div className="px-3 py-2.5 border-b border-slate-100">
            <button className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-left hover:border-slate-300 transition-colors">
              <div>
                <div className="text-xs font-semibold text-slate-800">Acme Corp</div>
                <div className="text-[10px] text-slate-400">4 platforms connected</div>
              </div>
              <ChevronDown size={12} className="text-slate-400" />
            </button>
          </div>
        )}

        {/* Nav */}
        <nav className="flex-1 py-2 px-2 space-y-0.5">
          {DB_NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-all",
                activeTab === item.id ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              )}
            >
              <item.icon size={14} className="shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User */}
        {sidebarOpen && (
          <div className="border-t border-slate-100 p-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">JD</div>
              <div>
                <div className="text-xs font-semibold text-slate-800">Jane Doe</div>
                <div className="text-[10px] text-slate-400">Admin</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-12 border-b border-slate-200 bg-white flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-900">
              {DB_NAV.find((i) => i.id === activeTab)?.label ?? "Overview"}
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-sm text-slate-400">Jul 1–31, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-lg transition-all bg-white">
              <Filter size={11} /> Filter
            </button>
            <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-lg transition-all bg-white">
              <Download size={11} /> Export
            </button>
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white">JD</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5 space-y-4">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Spend", value: "$142,800", change: "+8.4%", note: "vs. last month" },
              { label: "Blended ROAS", value: "4.6x", change: "+0.4x", note: "vs. last month" },
              { label: "Conversions", value: "2,710", change: "+22%", note: "vs. last month" },
              { label: "Avg. CPA", value: "$52.70", change: "-14%", note: "vs. last month" },
            ].map((k) => (
              <div key={k.label} className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-2">{k.label}</p>
                <p className="text-2xl font-bold text-slate-900 mb-1">{k.value}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-green-600">{k.change}</span>
                  <span className="text-[10px] text-slate-400">{k.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Stacked bar */}
            <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Spend by Platform</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Weekly breakdown — July 2025</p>
                </div>
                <div className="flex items-center gap-3">
                  {pieData.map((p) => (
                    <span key={p.name} className="flex items-center gap-1 text-[10px] text-slate-400">
                      <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.color }} />
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={spendData} barSize={14} barGap={2}>
                  <CartesianGrid stroke="rgba(0,0,0,0.04)" vertical={false} />
                  <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E2E8F0" }} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
                  <Bar dataKey="meta" stackId="s" fill="#1877F2" />
                  <Bar dataKey="google" stackId="s" fill="#4285F4" />
                  <Bar dataKey="tiktok" stackId="s" fill="#FF0050" />
                  <Bar dataKey="dv360" stackId="s" fill="#34A853" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-0.5">Spend Share</h3>
              <p className="text-xs text-slate-400 mb-4">This month</p>
              <div className="flex justify-center">
                <PieChart width={160} height={160}>
                  <Pie data={pieData} cx={80} cy={80} innerRadius={48} outerRadius={70} paddingAngle={2} dataKey="value">
                    {pieData.map((e) => <Cell key={e.name} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E2E8F0" }} formatter={(v: number) => [`${v}%`, ""]} />
                </PieChart>
              </div>
              <div className="mt-2 space-y-1.5">
                {pieData.map((p) => (
                  <div key={p.name} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                      {p.name}
                    </span>
                    <span className="text-slate-700 font-medium">{p.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue line + AI panel */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-0.5">Revenue & Conversions</h3>
              <p className="text-xs text-slate-400 mb-5">Trailing 30 days</p>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={convData}>
                  <CartesianGrid stroke="rgba(0,0,0,0.04)" vertical={false} />
                  <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="l" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                  <YAxis yAxisId="r" orientation="right" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E2E8F0" }} />
                  <Line yAxisId="l" type="monotone" dataKey="revenue" stroke={BLUE} strokeWidth={2} dot={{ r: 3, fill: BLUE }} />
                  <Line yAxisId="r" type="monotone" dataKey="conversions" stroke={VIOLET} strokeWidth={2} dot={{ r: 3, fill: VIOLET }} strokeDasharray="4 2" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* AI Insights */}
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Brain size={14} className="text-violet-600" />
                <h3 className="text-sm font-semibold text-slate-900">AI Insights</h3>
                <span className="ml-auto text-[10px] bg-violet-50 text-violet-600 border border-violet-200 px-1.5 py-0.5 rounded-full font-semibold">3 new</span>
              </div>
              <div className="space-y-3">
                {[
                  { color: AMBER, icon: AlertTriangle, title: "TikTok CPA +34%", body: "Creative fatigue on 3 ad sets. CTR dropped 2.1% → 1.4%.", time: "2h ago" },
                  { color: GREEN, icon: TrendingUp, title: "Google underbudgeted", body: "ROAS 6.2x, 14% impression share lost to budget.", time: "4h ago" },
                  { color: BLUE, icon: Activity, title: "Meta attribution changed", body: "Default window changed to 1-day click. Conv. may appear lower.", time: "1d ago" },
                ].map((ins) => (
                  <div key={ins.title} className="rounded-xl border p-3" style={{ borderColor: `${ins.color}20`, background: `${ins.color}06` }}>
                    <div className="flex items-start gap-2 mb-1">
                      <ins.icon size={11} style={{ color: ins.color }} className="mt-0.5 shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-800 leading-tight">{ins.title}</span>
                      <span className="text-[9px] text-slate-400 ml-auto shrink-0">{ins.time}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed pl-4">{ins.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-900">Top Campaigns</h3>
              <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                View all <ExternalLink size={10} />
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  {["Campaign", "Platform", "Spend", "ROAS", "CPA", "Health"].map((h) => (
                    <th key={h} className="text-left text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOP_CAMPAIGNS.map((c) => (
                  <tr key={c.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors last:border-0">
                    <td className="px-5 py-3.5 text-sm text-slate-800 font-medium">{c.name}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-500">{c.platform}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-700">{c.spend}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: parseFloat(c.roas) > 3 ? GREEN : AMBER }}>{c.roas}</td>
                    <td className="px-5 py-3.5 text-sm text-slate-700">{c.cpa}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          color: c.status === "good" ? GREEN : c.status === "warn" ? AMBER : "#EF4444",
                          background: c.status === "good" ? `${GREEN}12` : c.status === "warn" ? `${AMBER}12` : "#FEE2E2",
                        }}
                      >
                        {c.status === "good" ? "On track" : c.status === "warn" ? "Watch" : "At risk"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 404 ──────────────────────────────────────────────────────────────────────

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="pt-14 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl font-bold text-slate-100 mb-6">404</div>
      <h1 className="text-2xl font-bold text-slate-900 mb-3">Page not found</h1>
      <p className="text-slate-500 mb-8">This page doesn't exist or has moved.</p>
      <PrimaryBtn onClick={() => navigate("/")}>Back to home</PrimaryBtn>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const FOUNDERS = [
  {
    name: "Ahmad Kamal",
    role: "Co-Founder & CEO",
    bio: "Former Head of Digital at one of MENA's largest media agencies. Built and scaled advertising operations across Meta, Google, and DV360 before founding Cerebro to eliminate the manual reporting problem he lived every day.",
    initials: "AK",
    accent: "#4A8FE0",
  },
  {
    name: "Usman Tariq",
    role: "Co-Founder & CTO",
    bio: "10+ years in data engineering and AI systems. Previously led data infrastructure at a Series B fintech. Architects the ETL pipeline and AI intelligence layer that powers Cerebro's real-time reporting engine.",
    initials: "UT",
    accent: "#3272C4",
  },
];

const MILESTONES = [
  { year: "2022", label: "Problem identified", desc: "Founders spent hours every week manually pulling numbers from four ad platforms into spreadsheets." },
  { year: "2023", label: "First version shipped", desc: "Internal tool turned product. First three agency clients onboarded." },
  { year: "2024", label: "ETL pipeline launched", desc: "AI-powered extraction, transformation, and load layer goes live. Latency drops to under 60 seconds." },
  { year: "2025", label: "Scale", desc: "Cerebro dNANO processes billions of data points monthly across enterprise agency accounts." },
];

const VALUES = [
  { icon: Shield,     title: "Trust over hype",       desc: "Every number Cerebro surfaces must be accurate, auditable, and explainable." },
  { icon: Zap,        title: "Speed is a feature",     desc: "Real-time data isn't a nice-to-have. For agencies, delays cost money." },
  { icon: Brain,      title: "Intelligence by design", desc: "AI should reduce decisions, not create new ones. Every insight should be actionable." },
  { icon: Users,      title: "Built for agencies",     desc: "Not a generic analytics tool. Every feature is designed around agency workflows." },
];

function AboutPage() {
  const { open: openDemo } = useDemoModal();
  return (
    <div className="bg-white min-h-screen pt-28">

      {/* ── Hero ── */}
      <section className="bg-white px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#4A8FE0]/10 border border-[#4A8FE0]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#4A8FE0] text-xs font-semibold tracking-wide uppercase">Our story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Digital ad budgets are at record highs.<br />
            <span className="text-[#4A8FE0]">The tools haven't kept up.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Global digital ad spend surpassed $600B in 2024. Yet most agencies still export CSVs from four platforms every Friday and paste them into spreadsheets. Cerebro was built to make that problem obsolete.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { value: "$600B+", label: "Global digital ad spend in 2024" },
              { value: "4–6 hrs", label: "Avg. weekly time lost to manual reporting" },
              { value: "0 tools", label: "Unified AI-native solutions before Cerebro" },
            ].map((s) => (
              <div key={s.label} className="bg-[#F7F8FC] border border-slate-200 rounded-xl py-4 px-3 text-center">
                <div className="text-xl font-bold text-[#4A8FE0] mb-1">{s.value}</div>
                <div className="text-[10px] text-slate-500 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#4A8FE0] uppercase mb-4">Mission & Market Thesis</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Why now. Why Cerebro.
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              The digital advertising ecosystem has fragmented faster than reporting infrastructure could follow. Meta, Google, TikTok, and DV360 each operate their own attribution models, metric definitions, and API schemas. What cost one team one tool in 2015 now costs four tools, a data engineer, and twelve manual hours every week.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Large enterprises can afford BI teams and data warehouses. Small teams use spreadsheets. No one built an AI-native intelligence layer specifically for the mid-market agency — until Cerebro. We are the first platform to combine production-grade ETL, cross-platform normalization, and an AI analysis layer in a single self-serve product deployable in under 24 hours.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Our goal: make unified marketing intelligence as easy to deploy as a SaaS email tool — and as reliable as enterprise infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center mb-3">
                  <v.icon size={18} className="text-[#4A8FE0]" />
                </div>
                <p className="font-semibold text-sm text-slate-900 mb-1">{v.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-[#4A8FE0] uppercase mb-3">The team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet the founders</h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Two operators who built Cerebro to solve a problem they faced every week running digital advertising at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 hover:shadow-lg hover:shadow-blue-50 transition-all">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shrink-0"
                    style={{ background: `linear-gradient(135deg, ${f.accent}, ${f.accent}88)` }}
                  >
                    {f.initials}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">{f.name}</p>
                    <p className="text-sm text-[#4A8FE0] font-medium">{f.role}</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100" />
                <p className="text-slate-500 leading-relaxed text-sm">{f.bio}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <ExternalLink size={13} className="text-[#4A8FE0]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] text-[#4A8FE0] uppercase mb-3">Timeline</p>
            <h2 className="text-3xl font-bold text-slate-900">How we got here</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-200" />
            <div className="flex flex-col gap-10">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#4A8FE0] flex items-center justify-center shrink-0 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[#4A8FE0]" />
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#4A8FE0] font-bold text-sm">{m.year}</span>
                      <span className="font-semibold text-slate-900">{m.label}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — dark impact block ── */}
      <section className="bg-[#0B1728] px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see it in action?</h2>
          <p className="text-slate-400 mb-8">Book a 20-minute demo and we'll show you exactly how Cerebro transforms your agency's reporting.</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={openDemo}
              className="flex items-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book a Demo <ArrowRight size={16} />
            </button>
            <NavLink
              to="/features"
              className="text-[#4A8FE0] hover:text-[#7EAEE8] font-medium transition-colors"
            >
              Explore the product →
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRIVACY POLICY PAGE
// ═══════════════════════════════════════════════════════════════════════════════

function LegalLayout({ title, subtitle, updated, children }: { title: string; subtitle: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-[#4A8FE0] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h1>
          <p className="text-slate-500 text-sm">{subtitle}</p>
          <p className="text-slate-400 text-xs mt-2">Last updated: {updated}</p>
        </div>
        <div className="prose prose-sm max-w-none space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-slate-100 pt-8">
      <h2 className="text-lg font-bold text-slate-900 mb-4">{title}</h2>
      <div className="space-y-3 text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Cerebro dNANO collects, uses, and protects your information."
      updated="1 July 2026"
    >
      <LegalSection title="1. Who we are">
        <p>Cerebro dNANO is an advertising intelligence platform operated by Cerebro Media, Inc. ("Cerebro", "we", "us"). Our platform connects digital advertising data from Meta, Google Ads, TikTok, and DV360 into a single automated reporting layer for marketing agencies and advertisers.</p>
        <p>If you have questions about this policy, contact us at <a href="mailto:connect@activ8.digital" className="text-[#4A8FE0] hover:underline">connect@activ8.digital</a>.</p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p><strong className="text-slate-800">Account information</strong> — name, email address, company name, and billing details when you register.</p>
        <p><strong className="text-slate-800">Advertising platform data</strong> — campaign metrics, spend data, impressions, conversions, and audience data pulled via authorised API connections to your ad accounts. We access only what you explicitly authorise.</p>
        <p><strong className="text-slate-800">Usage data</strong> — pages visited, features used, session duration, and error logs to improve the platform.</p>
        <p><strong className="text-slate-800">Communication data</strong> — emails and support messages you send us.</p>
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <p>We use collected data to: provide and improve the Cerebro platform; generate automated reports and AI insights; send transactional emails and product updates; ensure platform security and prevent fraud; and comply with legal obligations.</p>
        <p>We do not sell your data to third parties. We do not use your advertising data to train general AI models accessible outside your account.</p>
      </LegalSection>

      <LegalSection title="4. Data sharing">
        <p>We share data only with: sub-processors necessary to operate the platform (cloud infrastructure, payment processors, email delivery); your team members as configured in your workspace; and legal authorities when required by law.</p>
        <p>A full list of sub-processors is available on request at <a href="mailto:connect@activ8.digital" className="text-[#4A8FE0] hover:underline">connect@activ8.digital</a>.</p>
      </LegalSection>

      <LegalSection title="5. Data retention">
        <p>Account data is retained for the duration of your subscription plus 90 days after cancellation, after which it is permanently deleted. Advertising metric data is retained for up to 36 months to support historical reporting. You may request earlier deletion at any time.</p>
      </LegalSection>

      <LegalSection title="6. Your rights (GDPR & CCPA)">
        <p>Depending on your jurisdiction, you have the right to: access, correct, or delete your personal data; restrict or object to processing; receive a machine-readable copy of your data; and withdraw consent at any time.</p>
        <p>To exercise any of these rights, email <a href="mailto:connect@activ8.digital" className="text-[#4A8FE0] hover:underline">connect@activ8.digital</a>. We will respond within 30 days.</p>
      </LegalSection>

      <LegalSection title="7. Cookies">
        <p>We use strictly necessary cookies to maintain your session and preferences. We use analytics cookies (with your consent) to understand how the platform is used. You can manage cookie preferences through your browser settings.</p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access to production systems is restricted to authorised personnel. For a full overview of our security practices, see our <NavLink to="/security" className="text-[#4A8FE0] hover:underline">Security page</NavLink>.</p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>We will notify registered users by email at least 14 days before any material changes to this policy take effect. Continued use of the platform after changes constitutes acceptance.</p>
      </LegalSection>
    </LegalLayout>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TERMS OF SERVICE PAGE
// ═══════════════════════════════════════════════════════════════════════════════

function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The agreement between you and Cerebro dNANO governing your use of the platform."
      updated="1 July 2026"
    >
      <LegalSection title="1. Acceptance">
        <p>By accessing or using Cerebro dNANO ("the Service"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of a company, you represent that you have authority to bind that company.</p>
      </LegalSection>

      <LegalSection title="2. The Service">
        <p>Cerebro dNANO provides an advertising data aggregation and intelligence platform. We connect to your authorised ad platform accounts, extract campaign data, and present unified reporting and AI-generated insights.</p>
        <p>We reserve the right to modify or discontinue features with reasonable notice. We will not reduce core functionality during an active paid subscription period without offering a pro-rated refund.</p>
      </LegalSection>

      <LegalSection title="3. Your account">
        <p>You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorised access. You are responsible for all activity that occurs under your account.</p>
        <p>You must not share account access with individuals outside your organisation or use the Service to process data belonging to clients without their consent.</p>
      </LegalSection>

      <LegalSection title="4. Acceptable use">
        <p>You may not use the Service to: violate any applicable law or regulation; infringe intellectual property rights; transmit malicious code; reverse engineer or attempt to extract source code; or resell access without a written reseller agreement.</p>
      </LegalSection>

      <LegalSection title="5. Data ownership">
        <p>You retain all ownership of your advertising data. By connecting ad platform accounts, you grant Cerebro a limited licence to access, process, and display that data solely to provide the Service. We do not claim ownership of your data.</p>
      </LegalSection>

      <LegalSection title="6. Payment & cancellation">
        <p>Subscriptions are billed monthly or annually in advance. All fees are non-refundable except as required by law or as stated in our refund policy. You may cancel at any time; access continues until the end of the current billing period.</p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>To the maximum extent permitted by law, Cerebro's total liability for any claim arising from your use of the Service is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>
      </LegalSection>

      <LegalSection title="8. Governing law">
        <p>These Terms are governed by the laws of the jurisdiction in which Cerebro Media, Inc. is registered. Any disputes will be resolved through binding arbitration, except where prohibited by law.</p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>For legal enquiries: <a href="mailto:connect@activ8.digital" className="text-[#4A8FE0] hover:underline">connect@activ8.digital</a></p>
      </LegalSection>
    </LegalLayout>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECURITY PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const SECURITY_ITEMS = [
  { icon: Lock,        title: "Encryption at rest & in transit", desc: "All data is encrypted using AES-256 at rest and TLS 1.2+ in transit. Encryption keys are rotated quarterly and managed via a dedicated key management service." },
  { icon: Shield,      title: "Access control",                  desc: "Role-based access control (RBAC) with per-workspace permissions. SSO via SAML 2.0 and OAuth 2.0. MFA enforced for all internal team members with production access." },
  { icon: Eye,         title: "Audit logging",                   desc: "All user actions, API calls, and admin operations are logged with tamper-evident audit trails. Logs are retained for 12 months and accessible to workspace admins." },
  { icon: Activity,    title: "Infrastructure",                  desc: "Hosted on Google Cloud Platform (GCP) with infrastructure-as-code deployment. Regional data residency options available. 99.9% uptime SLA." },
  { icon: RefreshCw,   title: "Backup & recovery",              desc: "Automated daily backups with point-in-time recovery up to 30 days. Disaster recovery tested quarterly. RTO < 4 hours, RPO < 1 hour." },
  { icon: AlertTriangle, title: "Vulnerability management",     desc: "Continuous dependency scanning, static analysis in CI/CD, and regular penetration testing by third-party security firms. Critical patches deployed within 24 hours." },
];

function SecurityPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[#4A8FE0] uppercase mb-3">Trust & Security</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Security you can audit, not just trust</h1>
          <p className="text-slate-500 leading-relaxed">
            Cerebro handles sensitive advertising performance data for agencies and their clients. We take that responsibility seriously. Here is exactly how we protect it.
          </p>
        </div>

        {/* Compliance badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {[
            { label: "GDPR Compliant",   sub: "EU data processing agreement available" },
            { label: "CCPA Ready",       sub: "California consumer rights supported" },
            { label: "Google Cloud",     sub: "Hosted on GCP — enterprise-grade infrastructure" },
            { label: "TLS 1.2+",        sub: "All traffic encrypted in transit" },
            { label: "AES-256",          sub: "All data encrypted at rest" },
            { label: "99.9% Uptime SLA", sub: "Monitored 24/7 with incident response" },
          ].map((b) => (
            <div key={b.label} className="bg-[#F7F8FC] border border-slate-200 rounded-2xl p-5">
              <p className="font-bold text-slate-900 text-sm mb-1">{b.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{b.sub}</p>
            </div>
          ))}
        </div>

        {/* Security practices */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">Security practices</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {SECURITY_ITEMS.map((s) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-blue-200 hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center shrink-0">
                <s.icon size={18} className="text-[#4A8FE0]" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-1.5">{s.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ad platform data access */}
        <div className="bg-[#F7F8FC] border border-slate-200 rounded-2xl p-8 mb-16">
          <h2 className="text-lg font-bold text-slate-900 mb-4">How we access your ad platform data</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>Cerebro connects to Meta, Google Ads, TikTok, and DV360 exclusively via their official APIs using OAuth 2.0. We request only the minimum scopes required for reporting — we never request write access unless you explicitly enable automated rules.</p>
            <p>Your access tokens are encrypted and stored in an isolated secrets manager. Cerebro employees cannot view your tokens. Token access is audited and rotated when you disconnect an integration.</p>
            <p>Your advertising data is never shared between workspaces, never used to train general-purpose AI models, and never sold or licensed to third parties.</p>
          </div>
        </div>

        {/* Contact — dark block */}
        <div className="bg-[#0B1728] rounded-2xl p-10 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Security enquiries</h2>
          <p className="text-slate-400 text-sm mb-5">Found a vulnerability? Have a security question? We respond to security reports within 24 hours.</p>
          <a
            href="mailto:connect@activ8.digital"
            className="inline-flex items-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Lock size={15} />
            connect@activ8.digital
          </a>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT PAGE
// ═══════════════════════════════════════════════════════════════════════════════

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[#4A8FE0] uppercase mb-3">Get in touch</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Talk to the team</h1>
          <p className="text-slate-500 max-w-lg mx-auto">Whether you want a demo, have a question, or want to discuss a custom plan — we respond to every message.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 bg-[#F7F8FC] border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#4A8FE0]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Email</p>
                <a href="mailto:connect@activ8.digital" className="text-slate-900 text-sm font-medium hover:text-[#4A8FE0] transition-colors">connect@activ8.digital</a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-[#F7F8FC] border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center shrink-0">
                <Activity size={18} className="text-[#4A8FE0]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                <a href="tel:+923422732873" className="text-slate-900 text-sm font-medium hover:text-[#4A8FE0] transition-colors">+92 342 2732873</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-[#F7F8FC] border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Globe size={18} className="text-[#4A8FE0]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Office</p>
                <p className="text-slate-900 text-sm font-medium leading-relaxed">The Forum, Block 9 Clifton<br />Karachi, Pakistan</p>
              </div>
            </div>

            {/* Partnerships */}
            <div className="flex items-center gap-4 bg-[#F7F8FC] border border-slate-200 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center shrink-0">
                <Users size={18} className="text-[#4A8FE0]" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Partnerships & enterprise sales</p>
                <a href="mailto:partners@cerebro.media" className="text-slate-900 text-sm font-medium hover:text-[#4A8FE0] transition-colors">partners@cerebro.media</a>
              </div>
            </div>

            <div className="bg-[#F7F8FC] border border-slate-200 rounded-2xl p-5">
              <p className="text-xs text-slate-400 mb-2">Response time</p>
              <p className="text-slate-900 text-sm font-medium">We respond to all enquiries within 1 business day.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#4A8FE0]/10 border border-[#4A8FE0]/20 flex items-center justify-center">
                  <Check size={24} className="text-[#4A8FE0]" />
                </div>
                <p className="font-bold text-slate-900 text-lg">Message sent</p>
                <p className="text-slate-500 text-sm">We'll get back to you within 1 business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <h3 className="font-bold text-slate-900 mb-5">Send us a message</h3>
                {[
                  { key: "name",    label: "Full name",        type: "text",  placeholder: "Jane Smith" },
                  { key: "email",   label: "Work email",       type: "email", placeholder: "jane@agency.com" },
                  { key: "company", label: "Company",          type: "text",  placeholder: "Acme Agency" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    required
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Send message <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DOCS / DEVELOPER RESOURCES PAGE
// ═══════════════════════════════════════════════════════════════════════════════

function DocsPage() {
  const RESOURCES = [
    {
      icon: Code2,
      title: "API Reference",
      desc: "Full REST API documentation with authentication, rate limits, endpoints, and response schemas. Interactive playground included.",
      cta: "Read the docs",
      color: BLUE,
      badge: "v2.1",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      desc: "Step-by-step guides for connecting platforms, configuring reports, setting up alerts, and managing your workspace.",
      cta: "Browse guides",
      color: CYAN,
      badge: "200+ articles",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      desc: "Answers to common questions about billing, data accuracy, permissions, integrations, and troubleshooting.",
      cta: "Get help",
      color: VIOLET,
      badge: "24h response",
    },
    {
      icon: Activity,
      title: "Release Notes",
      desc: "A full changelog of every feature, improvement, and bug fix shipped to production. Updated with every release.",
      cta: "See what's new",
      color: GREEN,
      badge: "Weekly",
    },
    {
      icon: GitBranch,
      title: "Developer Portal",
      desc: "OAuth app registration, webhook configuration, API key management, and SDK downloads for Python, Node, and Go.",
      cta: "Go to portal",
      color: AMBER,
      badge: "SDK available",
    },
    {
      icon: Globe,
      title: "Status Page",
      desc: "Live uptime, incident history, and maintenance windows for all Cerebro services and third-party integrations.",
      cta: "Check status",
      color: BLUE,
      badge: "99.97% uptime",
    },
  ];

  const QUICK_LINKS = [
    { label: "Authentication & API Keys", href: "#" },
    { label: "Connect Meta Ads", href: "#" },
    { label: "Connect Google Ads", href: "#" },
    { label: "Connect TikTok Ads", href: "#" },
    { label: "Setting up white-label reports", href: "#" },
    { label: "Role-based access control", href: "#" },
    { label: "Webhook events reference", href: "#" },
    { label: "Data warehouse export (BigQuery)", href: "#" },
    { label: "Custom metrics & calculations", href: "#" },
    { label: "SSO / SAML 2.0 setup", href: "#" },
    { label: "Migrating from Supermetrics", href: "#" },
    { label: "API rate limits & pagination", href: "#" },
  ];

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-20 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><BookOpen size={10} /> Documentation</Badge>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Resources & Developer Docs
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            Everything you need to connect, build, and get the most out of Cerebro dNANO.
          </p>
          <div className="mt-8 relative max-w-md mx-auto">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search documentation..."
              className="w-full bg-[#F7F8FC] border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4A8FE0] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((r) => (
              <div key={r.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${r.color}10` }}>
                    <r.icon size={20} style={{ color: r.color }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: r.color, background: `${r.color}10` }}
                  >
                    {r.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{r.desc}</p>
                <span className="text-sm font-semibold flex items-center gap-1.5" style={{ color: r.color }}>
                  {r.cta} <ArrowRight size={13} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>Popular articles</SectionLabel>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently accessed guides</h2>
              <div className="space-y-2">
                {QUICK_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="flex items-center justify-between py-3 px-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-[#F7F8FC] transition-all group"
                  >
                    <span className="text-sm text-slate-700 group-hover:text-slate-900">{l.label}</span>
                    <ChevronRight size={13} className="text-slate-400 group-hover:text-[#4A8FE0] transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Can't find what you need?</h2>

              <div className="bg-[#F7F8FC] border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle size={18} className="text-[#4A8FE0]" />
                  <span className="font-semibold text-slate-900">Support team</span>
                </div>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  Our support team responds within 1 business day on all plans. Priority support is available on Growth and Enterprise.
                </p>
                <a
                  href="mailto:connect@activ8.digital"
                  className="text-sm font-semibold text-[#4A8FE0] hover:underline flex items-center gap-1"
                >
                  connect@activ8.digital <ArrowRight size={12} />
                </a>
              </div>

              <div className="bg-[#0B1728] border border-[rgba(74,143,224,0.15)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 size={18} className="text-[#4A8FE0]" />
                  <span className="font-semibold text-white">API & integration questions</span>
                </div>
                <p className="text-sm text-[#94B8D8] mb-4 leading-relaxed">
                  Building on top of Cerebro? Our solutions engineering team can help with custom integrations, data warehouse pipelines, and API use cases.
                </p>
                <a
                  href="mailto:connect@activ8.digital"
                  className="text-sm font-semibold text-[#4A8FE0] hover:underline flex items-center gap-1"
                >
                  connect@activ8.digital <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const FAQ_SECTIONS = [
  {
    topic: "Pricing & Plans",
    icon: TrendingUp,
    color: BLUE,
    items: [
      { q: "Is there a free trial?", a: "Yes — all plans include a 14-day free trial with full feature access and no credit card required. You can connect up to 3 ad accounts during the trial." },
      { q: "What counts as an 'ad platform connection'?", a: "Each connected ad account counts as one connection. Connecting Meta Ads Manager for three clients = 3 connections. Starter supports up to 3; Growth and Enterprise are unlimited." },
      { q: "Can I change plans later?", a: "Yes. Upgrade or downgrade any time from your account settings. When upgrading, you'll be charged the pro-rated difference immediately. When downgrading, the change takes effect at the next billing cycle." },
      { q: "Do you offer startup or program discounts?", a: "Yes — special pricing for companies in YC, Google for Startups, AWS Activate, and Microsoft for Startups. Contact sales with proof of membership to activate your discount." },
      { q: "What happens to my data if I cancel?", a: "Your data is retained for 90 days after cancellation, after which it is permanently deleted. You can request an export of all your data at any point during this window at no charge." },
    ],
  },
  {
    topic: "Data Security",
    icon: Shield,
    color: GREEN,
    items: [
      { q: "How do you store my ad platform credentials?", a: "We never store raw credentials. Cerebro uses OAuth 2.0 to connect to each platform. Access tokens are encrypted using AES-256 and stored in a dedicated hardware-backed secrets manager. Cerebro employees cannot view your tokens." },
      { q: "Is Cerebro GDPR compliant?", a: "Yes. We offer a Data Processing Agreement (DPA) for EU customers, support data residency in the EU on Enterprise plans, and handle data subject requests within 30 days. Contact connect@activ8.digital for a DPA." },
      { q: "Who can access my workspace data?", a: "Only users you explicitly invite to your workspace. Role-based access control lets you assign Admin, Editor, or Viewer permissions per user. Cerebro staff cannot access your workspace data except for documented support cases with your consent." },
      { q: "Do you use my ad data to train AI models?", a: "No. Your advertising data is never used to train general-purpose AI models accessible outside your account. AI features within your workspace run only on your workspace's data." },
    ],
  },
  {
    topic: "Integrations",
    icon: Database,
    color: CYAN,
    items: [
      { q: "Which ad platforms do you support?", a: "Meta Ads, Google Ads, TikTok Ads, DV360, Google Analytics, and Shopify are live today. LinkedIn Ads and Snapchat Ads are in beta. Pinterest, Amazon DSP, X Ads, and Bing Ads are on the roadmap." },
      { q: "How long does it take to connect a platform?", a: "Most connections complete in under 5 minutes via OAuth. After connecting, your first sync runs automatically — dashboards populate within 15–30 minutes depending on account size and historical backfill depth." },
      { q: "Can I push Cerebro data to my own data warehouse?", a: "Yes. On Growth and Enterprise plans, you can export normalized ad data to BigQuery, Snowflake, Redshift, or PostgreSQL. Schema documentation and incremental update patterns are included in the developer docs." },
      { q: "Do you support custom API connectors?", a: "Enterprise customers can request custom connectors for internal data sources or niche platforms. Contact connect@activ8.digital to discuss requirements and timeline." },
    ],
  },
  {
    topic: "Deployment & Setup",
    icon: Settings,
    color: AMBER,
    items: [
      { q: "Does Cerebro require any engineering work to set up?", a: "No. The entire setup is self-serve and takes under 30 minutes. Connect your ad accounts via OAuth, configure your first report template, and your dashboard is live. No code, no SQL, no data engineer required." },
      { q: "Is there a self-hosted or on-premise option?", a: "Cerebro is a cloud-native SaaS platform. We do not currently offer self-hosted deployment. Enterprise customers can request dedicated cloud infrastructure with data residency in a specific region." },
      { q: "How do I migrate from another reporting tool?", a: "We provide a structured migration guide covering Supermetrics, Funnel.io, and custom spreadsheet stacks. Our onboarding team will walk you through historical data backfill and report recreation in your first call." },
      { q: "What browsers and devices does Cerebro support?", a: "Cerebro works on all modern browsers (Chrome, Firefox, Safari, Edge) and is optimized for desktop use. A mobile-responsive view is available for dashboard monitoring on the go." },
    ],
  },
  {
    topic: "AI Features",
    icon: Brain,
    color: VIOLET,
    items: [
      { q: "How does the AI anomaly detection work?", a: "Cerebro continuously monitors all campaign metrics against a statistical baseline built from your historical data. When a metric deviates beyond configured thresholds — accounting for day-of-week and seasonality — an alert is triggered with a plain-English explanation and recommended action." },
      { q: "What is Natural Language Analytics?", a: "Natural Language Analytics lets you ask questions about your campaign data in plain English — e.g., 'Why did Meta ROAS drop last week?' — and receive a written summary with supporting charts. It queries your actual workspace data, not a general AI model." },
      { q: "How accurate are the AI budget recommendations?", a: "Budget recommendations are generated from your account's historical performance data and are reviewed by our team before major algorithmic changes. We recommend treating them as decision support — the AI highlights opportunities, your team approves and executes." },
    ],
  },
  {
    topic: "Reporting",
    icon: FileText,
    color: BLUE,
    items: [
      { q: "Can I white-label reports for clients?", a: "Yes. You can upload your agency logo, set primary and secondary brand colors, and choose a custom report header. Clients receive PDFs with your branding and no Cerebro branding visible. Available on Growth and Enterprise plans." },
      { q: "How are reports delivered?", a: "Reports are delivered via email as PDF attachments, via Slack as a formatted digest message, or as a shareable live dashboard link. You can configure multiple delivery channels per report template." },
      { q: "Can I build custom metrics that don't exist on the platforms?", a: "Yes. Cerebro supports calculated metrics using a formula editor — e.g., Blended ROAS = Total Revenue / Total Spend across all platforms, or custom CAC = Spend / New Customers from your CRM data." },
    ],
  },
  {
    topic: "Support",
    icon: HelpCircle,
    color: GREEN,
    items: [
      { q: "What support is included with each plan?", a: "All plans include email support with 1-business-day response. Growth plans include priority support (4-hour response during business hours). Enterprise includes a dedicated Customer Success Manager and SLA-backed incident response." },
      { q: "Do you offer onboarding assistance?", a: "Yes. All new customers receive an onboarding call to connect their first platforms, configure their first report, and review dashboard setup. Enterprise customers receive a structured 30-day onboarding program." },
      { q: "Where can I find the status of the Cerebro platform?", a: "Live platform status, incident history, and maintenance windows are published at status.cerebro.media. You can subscribe to email or Slack notifications for any service affecting your plan." },
    ],
  },
  {
    topic: "Migration",
    icon: RefreshCw,
    color: CYAN,
    items: [
      { q: "How far back can Cerebro pull historical data?", a: "On first connection, Cerebro automatically backfills up to 36 months of historical data from each connected platform, depending on what the platform API makes available. This happens automatically — no manual import required." },
      { q: "Can I import data from external tools or CSVs?", a: "Yes. Cerebro supports CSV upload for platforms not yet connected via live API. You can also import Google Sheets directly. Imported data is normalized into the same schema as live-connected data." },
      { q: "Will switching to Cerebro break my existing reporting?", a: "No. Cerebro is additive — you connect your accounts, review the unified dashboard, and migrate your reporting templates at your own pace. We recommend running Cerebro alongside your current tool for the first two weeks before fully switching." },
    ],
  },
];

function FAQPage() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><HelpCircle size={10} /> FAQ</Badge>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            Answers to the questions we hear most from agencies, performance teams, and enterprise buyers.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8FC] border-y border-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto flex gap-8 items-start">
          {/* Sidebar nav */}
          <div className="hidden md:flex flex-col gap-1 w-52 shrink-0 sticky top-28">
            {FAQ_SECTIONS.map((s, i) => (
              <button
                key={s.topic}
                onClick={() => setActiveSection(i)}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-left transition-all",
                  activeSection === i
                    ? "bg-white border border-slate-200 text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                )}
              >
                <s.icon size={13} style={{ color: activeSection === i ? s.color : undefined }} />
                {s.topic}
              </button>
            ))}
          </div>

          {/* FAQ content */}
          <div className="flex-1 min-w-0">
            {/* Mobile topic select */}
            <div className="flex md:hidden flex-wrap gap-2 mb-6">
              {FAQ_SECTIONS.map((s, i) => (
                <button
                  key={s.topic}
                  onClick={() => setActiveSection(i)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                    activeSection === i
                      ? "text-white border-transparent"
                      : "bg-white border-slate-200 text-slate-600"
                  )}
                  style={activeSection === i ? { background: FAQ_SECTIONS[i].color } : {}}
                >
                  {s.topic}
                </button>
              ))}
            </div>

            <motion.div key={activeSection} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${FAQ_SECTIONS[activeSection].color}12` }}
                >
                  {(() => { const Icon = FAQ_SECTIONS[activeSection].icon; return <Icon size={16} style={{ color: FAQ_SECTIONS[activeSection].color }} />; })()}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{FAQ_SECTIONS[activeSection].topic}</h2>
              </div>
              <div className="space-y-3">
                {FAQ_SECTIONS[activeSection].items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="bg-[#0B1728] py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Still have a question?</h2>
          <p className="text-slate-400 mb-7">Our team responds to every message within 1 business day.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:connect@activ8.digital"
              className="inline-flex items-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <Mail size={14} /> Email us
            </a>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/[0.12] hover:border-white/[0.25] text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              Contact form <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELP CENTER PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const HELP_CATEGORIES = [
  {
    icon: Zap,
    title: "Getting Started",
    desc: "Connect your first platform, configure your workspace, and get your initial dashboard live in under 30 minutes.",
    color: BLUE,
    articles: ["How to connect Meta Ads", "Setting up your first dashboard", "Inviting your team", "Understanding data refresh cycles", "Navigating the workspace"],
  },
  {
    icon: Database,
    title: "Integrations",
    desc: "Step-by-step guides for every supported ad platform, data warehouse, and third-party connection.",
    color: CYAN,
    articles: ["Connect Google Ads", "Connect TikTok Ads", "Connect DV360", "Export to BigQuery", "CSV import guide"],
  },
  {
    icon: FileText,
    title: "Reports & Dashboards",
    desc: "Build, schedule, and deliver branded reports. Customize metrics, layouts, and delivery settings.",
    color: VIOLET,
    articles: ["Creating a report template", "White-label branding setup", "Scheduling automated delivery", "Shareable dashboard links", "Custom metric formulas"],
  },
  {
    icon: TrendingUp,
    title: "Billing & Plans",
    desc: "Manage your subscription, understand your invoice, upgrade or downgrade, and request refunds.",
    color: GREEN,
    articles: ["How billing works", "Upgrading your plan", "Annual vs. monthly pricing", "Startup program discounts", "Cancellation and data export"],
  },
  {
    icon: Shield,
    title: "Security & Permissions",
    desc: "Role-based access, SSO configuration, audit logs, and data security practices explained.",
    color: AMBER,
    articles: ["Setting up role-based access", "Configuring SSO / SAML 2.0", "Reading your audit log", "OAuth token management", "GDPR data requests"],
  },
  {
    icon: Brain,
    title: "AI Features",
    desc: "How anomaly detection, natural language analytics, and AI recommendations work under the hood.",
    color: VIOLET,
    articles: ["How anomaly detection works", "Asking questions in plain English", "Understanding AI budget alerts", "Setting custom alert thresholds", "AI insight confidence scores"],
  },
];

function HelpCenterPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const allArticles = HELP_CATEGORIES.flatMap((c) => c.articles.map((a) => ({ article: a, category: c.title, color: c.color })));
  const filtered = search.length > 1
    ? allArticles.filter((a) => a.article.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-[#0B1728] px-6 pt-10 pb-20 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><HelpCircle size={10} /> Help Center</Badge>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
            How can we help you?
          </h1>
          <p className="mt-4 text-[#94B8D8]">
            Search our documentation, or browse by category below.
          </p>
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B8DAE]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles — e.g. 'connect Google Ads', 'white-label reports'..."
              className="w-full bg-[#0F2038] border border-[rgba(74,143,224,0.25)] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#E8F0FA] placeholder-[#4A6B8A] focus:outline-none focus:border-[#4A8FE0] transition-colors"
            />
          </div>
          {filtered.length > 0 && (
            <div className="mt-3 bg-[#0F2038] border border-[rgba(74,143,224,0.2)] rounded-xl text-left max-w-lg mx-auto overflow-hidden">
              {filtered.slice(0, 6).map((r) => (
                <div key={r.article} className="flex items-center gap-3 px-4 py-3 hover:bg-[#162235] cursor-pointer border-b border-[rgba(74,143,224,0.08)] last:border-0 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color }} />
                  <span className="text-sm text-[#E8F0FA]">{r.article}</span>
                  <span className="ml-auto text-[10px] text-[#4A6B8A] shrink-0">{r.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HELP_CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all cursor-pointer",
                  activeCategory === i
                    ? "border-blue-200 shadow-lg shadow-blue-50"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-100"
                )}
                onClick={() => setActiveCategory(activeCategory === i ? null : i)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}10` }}>
                      <cat.icon size={20} style={{ color: cat.color }} />
                    </div>
                    <ChevronDown
                      size={14}
                      className={cn("text-slate-400 transition-transform mt-1", activeCategory === i && "rotate-180")}
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
                <AnimatePresence>
                  {activeCategory === i && (
                    <motion.div
                      initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#F7F8FC] border-t border-slate-100 px-5 py-3 space-y-0.5">
                        {cat.articles.map((a) => (
                          <div key={a} className="flex items-center gap-2.5 py-2 hover:text-[#4A8FE0] cursor-pointer group transition-colors">
                            <ChevronRight size={11} className="text-slate-300 group-hover:text-[#4A8FE0] transition-colors shrink-0" />
                            <span className="text-sm text-slate-600 group-hover:text-[#4A8FE0] transition-colors">{a}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular articles */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Most read</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Popular articles</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "How to connect Meta Ads in 5 minutes",         cat: "Getting Started",  time: "3 min read" },
              { title: "Setting up white-label reports for clients",    cat: "Reports",          time: "5 min read" },
              { title: "Understanding cross-platform attribution",      cat: "AI Features",      time: "7 min read" },
              { title: "Exporting normalized data to BigQuery",         cat: "Integrations",     time: "6 min read" },
              { title: "How anomaly detection thresholds work",         cat: "AI Features",      time: "4 min read" },
              { title: "Configuring SSO with Okta or Azure AD",        cat: "Security",         time: "5 min read" },
              { title: "Building a custom blended ROAS metric",        cat: "Reports",          time: "4 min read" },
              { title: "Migrating from Supermetrics to Cerebro",       cat: "Getting Started",  time: "8 min read" },
            ].map((a) => (
              <div
                key={a.title}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer group"
              >
                <BookOpen size={13} className="text-[#4A8FE0] shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-800 group-hover:text-[#4A8FE0] transition-colors leading-tight">{a.title}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{a.cat} · {a.time}</p>
                </div>
                <ArrowRight size={12} className="text-slate-300 group-hover:text-[#4A8FE0] transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact support */}
      <section className="bg-[#0B1728] py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { icon: Mail,       title: "Email support",       desc: "Respond within 1 business day on all plans.", action: "connect@activ8.digital", href: "mailto:connect@activ8.digital" },
            { icon: HelpCircle, title: "Priority support",    desc: "4-hour response for Growth and Enterprise plans.", action: "Included in your plan", href: "/pricing" },
            { icon: Users,      title: "Onboarding call",     desc: "Book a setup session with our solutions team.", action: "Book a session", href: "/contact" },
          ].map((c) => (
            <div key={c.title} className="bg-[#0F2038] border border-[rgba(74,143,224,0.15)] rounded-2xl p-5">
              <div className="w-9 h-9 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center mb-4">
                <c.icon size={16} className="text-[#4A8FE0]" />
              </div>
              <h3 className="font-semibold text-white mb-1.5 text-sm">{c.title}</h3>
              <p className="text-xs text-[#6B8DAE] leading-relaxed mb-4">{c.desc}</p>
              {c.href.startsWith("mailto") ? (
                <a href={c.href} className="text-xs font-semibold text-[#4A8FE0] hover:underline">{c.action}</a>
              ) : (
                <NavLink to={c.href} className="text-xs font-semibold text-[#4A8FE0] hover:underline">{c.action}</NavLink>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// BLOG PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const BLOG_POSTS = [
  {
    slug: "ai-anomaly-detection-ad-spend",
    category: "Product",
    categoryColor: BLUE,
    title: "How AI anomaly detection saved one agency $40k in a single month",
    excerpt: "A performance agency running 18 client accounts detected a Meta bid strategy misconfiguration within 2 hours using Cerebro's anomaly alerts — before the weekly review cycle would have caught it.",
    readTime: "5 min read",
    date: "Jul 28, 2026",
    featured: true,
  },
  {
    slug: "cross-platform-attribution-guide",
    category: "Data & Analytics",
    categoryColor: CYAN,
    title: "The definitive guide to cross-platform attribution in 2026",
    excerpt: "Meta, Google, and TikTok all claim credit for the same conversion. Here's how to build an attribution model that actually reflects reality — and why the platform numbers will never match.",
    readTime: "9 min read",
    date: "Jul 21, 2026",
    featured: false,
  },
  {
    slug: "white-label-reporting-agencies",
    category: "Agency Tips",
    categoryColor: VIOLET,
    title: "White-label reporting: how to deliver client reports that build trust",
    excerpt: "The difference between a report that retains a client and one that loses them isn't the data — it's the presentation. A playbook for agencies building automated, branded reporting.",
    readTime: "6 min read",
    date: "Jul 14, 2026",
    featured: false,
  },
  {
    slug: "etl-pipeline-marketing-teams",
    category: "Data & Analytics",
    categoryColor: CYAN,
    title: "Why marketing teams need an ETL pipeline — and how to get one without an engineer",
    excerpt: "ETL (Extract, Transform, Load) used to require a dedicated data engineer. In 2026, marketing-specific ETL is self-serve. Here's what it is, why it matters, and how Cerebro implements it.",
    readTime: "7 min read",
    date: "Jul 7, 2026",
    featured: false,
  },
  {
    slug: "tiktok-roas-benchmarks-2026",
    category: "Data & Analytics",
    categoryColor: CYAN,
    title: "TikTok Ads ROAS benchmarks for 2026: what good looks like by industry",
    excerpt: "Aggregated from Cerebro workspaces managing over $400M in TikTok spend. ROAS benchmarks by vertical, objective, and creative format — with context on why TikTok attribution differs from Meta.",
    readTime: "8 min read",
    date: "Jun 30, 2026",
    featured: false,
  },
  {
    slug: "saas-marketing-attribution",
    category: "Customer Stories",
    categoryColor: GREEN,
    title: "How a SaaS team used Cerebro to attribute $9,900 in recovered weekly revenue",
    excerpt: "By identifying that Google Brand Search was impression-share constrained at 6.2x ROAS, one team reallocated $1,600/week and unlocked nearly $10k in attributed revenue — in a single optimization cycle.",
    readTime: "4 min read",
    date: "Jun 23, 2026",
    featured: false,
  },
  {
    slug: "google-for-startups-application",
    category: "Company",
    categoryColor: AMBER,
    title: "Cerebro dNANO joins the Google for Startups Cloud Program",
    excerpt: "We are proud to announce that Cerebro dNANO has been accepted into the Google for Startups Cloud Program. What it means for our infrastructure roadmap, and what's next.",
    readTime: "3 min read",
    date: "Jun 16, 2026",
    featured: false,
  },
];

const BLOG_CATEGORIES = ["All", "Product", "Data & Analytics", "Agency Tips", "Customer Stories", "Company"];

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = BLOG_POSTS.find((p) => p.featured)!;
  const rest = BLOG_POSTS.filter((p) => !p.featured && (activeCategory === "All" || p.category === activeCategory));

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><BookOpen size={10} /> Blog</Badge>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Marketing intelligence, explained
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            Guides, benchmarks, and product updates from the Cerebro team.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Featured</p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-100 transition-all cursor-pointer group">
            <div className="grid md:grid-cols-5">
              {/* Left — color block */}
              <div
                className="md:col-span-2 min-h-[180px] flex items-center justify-center p-8"
                style={{ background: `linear-gradient(135deg, ${BLUE}18, ${VIOLET}18)` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#4A8FE0]/15 border border-[#4A8FE0]/20 flex items-center justify-center">
                  <Brain size={28} className="text-[#4A8FE0]" />
                </div>
              </div>
              {/* Right — content */}
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: featured.categoryColor, background: `${featured.categoryColor}10` }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-slate-400">{featured.date} · {featured.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#4A8FE0] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{featured.excerpt}</p>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#4A8FE0]">
                  Read article <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter + post grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-all",
                  activeCategory === c
                    ? "text-white border-transparent"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                )}
                style={activeCategory === c ? { background: BLUE } : {}}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <div
                key={post.slug}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-100 hover:border-slate-300 transition-all cursor-pointer group flex flex-col"
              >
                <div
                  className="h-32 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${post.categoryColor}10, ${post.categoryColor}06)` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${post.categoryColor}15`, border: `1px solid ${post.categoryColor}20` }}
                  >
                    <BookOpen size={18} style={{ color: post.categoryColor }} />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: post.categoryColor, background: `${post.categoryColor}10` }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-[#4A8FE0] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-[10px] text-slate-400">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#4A8FE0]">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {rest.length === 0 && (
              <div className="col-span-3 text-center py-16 text-slate-400 text-sm">
                No posts in this category yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0B1728] py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay current on ad intelligence</h2>
          <p className="text-slate-400 mb-7 text-sm">New benchmarks, product updates, and agency guides — once or twice a month. No spam.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              placeholder="your@agency.com"
              className="flex-1 bg-[#0F2038] border border-[rgba(74,143,224,0.2)] rounded-xl px-4 py-2.5 text-sm text-[#E8F0FA] placeholder-[#4A6B8A] focus:outline-none focus:border-[#4A8FE0] transition-colors"
            />
            <button className="bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ROADMAP PAGE
// ═══════════════════════════════════════════════════════════════════════════════

const ROADMAP_COLUMNS = [
  {
    status: "live",
    label: "Now — Live",
    dotColor: "#22C55E",
    cardBg: "bg-white",
    cardBorder: "border-slate-200",
    iconBg: "#22C55E",
    items: [
      { icon: Database,    title: "Automated ETL Pipeline",       desc: "Real-time ingestion from Meta, Google, TikTok, and DV360 with 15-minute refresh cycles and 36-month backfill on first connect.", tag: "Core" },
      { icon: Brain,       title: "AI Anomaly Detection",          desc: "Statistical baseline models that flag CPA spikes, budget bleeds, and CTR drops the moment they occur — with plain-English root cause.", tag: "AI" },
      { icon: FileText,    title: "White-label PDF Reports",       desc: "Fully branded reports auto-generated on any schedule and delivered to any recipient via email or Slack.", tag: "Reporting" },
      { icon: BarChart2,   title: "Cross-Platform Dashboard",      desc: "Unified ROAS, spend, impressions, and conversion view across all connected accounts with drill-down to campaign and ad level.", tag: "Analytics" },
      { icon: Bell,        title: "Slack & Email Alerts",          desc: "Configurable threshold-based alerts with custom conditions delivered to Slack channels or any email address in real time.", tag: "Alerting" },
      { icon: Shield,      title: "Role-Based Access Control",     desc: "Per-workspace, per-account permissions with SSO via SAML 2.0 and immutable audit logs for every action.", tag: "Security" },
      { icon: Globe,       title: "Multi-Platform Normalization",  desc: "Automatic schema unification across platforms — same metric names, same attribution definitions, same currency.", tag: "Core" },
      { icon: Users,       title: "Team Workspaces",              desc: "Isolated client workspaces with configurable branding, separate user management, and independent data access.", tag: "Collaboration" },
    ],
  },
  {
    status: "soon",
    label: "Coming Soon — Q3/Q4 2026",
    dotColor: BLUE,
    cardBg: "bg-[#F7F8FC]",
    cardBorder: "border-slate-200",
    iconBg: BLUE,
    items: [
      { icon: GitBranch,  title: "Creative Intelligence",          desc: "Automatic creative performance scoring across platforms — identify winning hooks, formats, and CTAs before fatigue sets in.", tag: "AI", quarter: "Q3 2026" },
      { icon: Workflow,   title: "Automated Budget Rules",         desc: "Conditional rules that pause underperformers, scale winners, and enforce spend caps — executed automatically on your schedule.", tag: "Automation", quarter: "Q3 2026" },
      { icon: Globe,      title: "Incrementality Testing",         desc: "Built-in holdout and geo experiments to measure true campaign incrementality — not just modeled attribution.", tag: "Analytics", quarter: "Q4 2026" },
      { icon: Brain,      title: "Predictive Forecasting",         desc: "ML-powered revenue and conversion forecasts at the campaign level with confidence intervals and scenario modeling.", tag: "AI", quarter: "Q4 2026" },
      { icon: Users,      title: "Audience Overlap Analysis",      desc: "Cross-platform frequency management and audience overlap visualization from one unified view.", tag: "Analytics", quarter: "Q4 2026" },
      { icon: Code2,      title: "Custom Dashboards API",          desc: "Build fully custom dashboards with your own metrics, calculations, and visualizations via a public GraphQL API.", tag: "Developer", quarter: "Q4 2026" },
    ],
  },
  {
    status: "future",
    label: "Future — 2027 & Beyond",
    dotColor: VIOLET,
    cardBg: "bg-[#F7F8FC]",
    cardBorder: "border-slate-200",
    iconBg: VIOLET,
    items: [
      { icon: Brain,       title: "Autonomous Campaign Management", desc: "AI-driven bid and budget adjustments executed without manual approval for pre-defined rule sets — a full co-pilot mode.", tag: "AI" },
      { icon: Globe,       title: "Retail Media Network Support",   desc: "Native connectors for Amazon DSP, Walmart Connect, and Instacart Ads unified with your paid social and search data.", tag: "Integrations" },
      { icon: Activity,    title: "Real-Time Competitive Intel",    desc: "Auction-level spend signals and creative trends from your competitive set surfaced directly in your workspace.", tag: "Analytics" },
      { icon: BarChart2,   title: "Full-Funnel Revenue Attribution",desc: "Closed-loop attribution from first ad impression to CRM-confirmed revenue with Salesforce and HubSpot sync.", tag: "Analytics" },
      { icon: Sparkles,    title: "AI Report Narration",            desc: "Natural language summaries generated automatically for every report section — editable before delivery.", tag: "AI" },
      { icon: Gauge,       title: "Multi-Currency Treasury View",   desc: "Agency P&L across all client accounts in any currency with real-time FX normalization and margin reporting.", tag: "Finance" },
    ],
  },
];

function RoadmapPage() {
  const { open: openDemo } = useDemoModal();

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Header */}
      <section className="bg-white px-6 pb-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge color={BLUE}><Map size={10} /> Product Roadmap</Badge>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            What we're building and when
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            A transparent view of what's live, what's shipping next, and the longer-term vision for Cerebro dNANO.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            {ROADMAP_COLUMNS.map((col) => (
              <div key={col.status} className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 rounded-full" style={{ background: col.dotColor }} />
                {col.label.split(" — ")[0]}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap columns */}
      <section className="bg-[#F7F8FC] border-y border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {ROADMAP_COLUMNS.map((col) => (
              <div key={col.status}>
                <div className="flex items-center gap-2 mb-5 px-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: col.dotColor }} />
                  <span className="text-sm font-semibold text-slate-900">{col.label}</span>
                </div>
                <div className="space-y-3">
                  {col.items.map((item) => (
                    <div
                      key={item.title}
                      className={cn("border rounded-xl p-4 transition-all hover:shadow-sm", col.cardBg, col.cardBorder)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: `${col.iconBg}12` }}
                        >
                          <item.icon size={14} style={{ color: col.iconBg }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <p className="text-sm font-semibold text-slate-900 leading-tight">{item.title}</p>
                            <span
                              className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
                              style={{ color: col.iconBg, background: `${col.iconBg}10` }}
                            >
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                          {"quarter" in item && item.quarter && (
                            <p className="mt-1.5 text-[10px] font-medium" style={{ color: col.iconBg }}>
                              Target: {item.quarter}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature request CTA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F7F8FC] border border-slate-200 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center mb-4">
                <Sparkles size={18} className="text-[#4A8FE0]" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Request a feature</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Every item on this roadmap started as a customer request. If you need something specific, tell us — we prioritize based on real demand.
              </p>
              <a
                href="mailto:connect@activ8.digital"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A8FE0] hover:underline"
              >
                connect@activ8.digital <ArrowRight size={13} />
              </a>
            </div>
            <div className="bg-[#0B1728] border border-[rgba(74,143,224,0.15)] rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-[#4A8FE0]/10 flex items-center justify-center mb-4">
                <Play size={18} className="text-[#4A8FE0]" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">See what's already live</h3>
              <p className="text-sm text-[#94B8D8] leading-relaxed mb-5">
                Every feature in the "Now" column is live and available in your trial. Book a 30-minute walkthrough to see the full platform.
              </p>
              <button
                onClick={openDemo}
                className="inline-flex items-center gap-2 bg-[#4A8FE0] hover:bg-[#3A7FD0] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
              >
                Book a demo <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "features", Component: FeaturesPage },
      { path: "integrations", Component: IntegrationsPage },
      { path: "pricing", Component: PricingPage },
      { path: "about",    Component: AboutPage },
      { path: "privacy",  Component: PrivacyPage },
      { path: "terms",    Component: TermsPage },
      { path: "security", Component: SecurityPage },
      { path: "contact",  Component: ContactPage },
      { path: "docs",     Component: DocsPage },
      { path: "faq",      Component: FAQPage },
      { path: "help",     Component: HelpCenterPage },
      { path: "blog",     Component: BlogPage },
      { path: "roadmap",  Component: RoadmapPage },
      { path: "*",        Component: NotFound },
    ],
  },
]);

