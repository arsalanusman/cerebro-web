"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const HTML_CONTENT = "</dc-import>\n\n<section style=\"padding: 96px 0 72px; background: #EEF5FC\"><div style=\"max-width: 760px; margin: 0 auto; padding: 0 48px; box-sizing: border-box; text-align: center\"><span style=\"width: 72px; height: 72px; border-radius: 36px; background: #DCFCE7; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#15803D\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"></path></svg></span><h1 style=\"margin: 24px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(38px, 4.2vw, 56px); line-height: 1.04; letter-spacing: -0.03em; color: #000000\">You’re booked in.</h1><p style=\"margin: 18px auto 0; max-width: 520px; font-size: 19px; line-height: 1.55; color: #5A6675\">We’ll email you within one business day to confirm your preferred schedule and meeting link.</p></div></section><section style=\"padding: 104px 0; background: #FFFFFF\"><div style=\"max-width: 1440px; margin: 0 auto; padding: 0 48px; box-sizing: border-box\"><div><h2 style=\"margin: 0; text-align: center; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(32px, 3.4vw, 46px); line-height: 1.08; letter-spacing: -0.025em; color: #000000\">Before we meet</h2><p style=\"margin: 14px auto 0; max-width: 600px; text-align: center; font-size: 18px; line-height: 1.5; color: #5A6675\">Three things that make the demo worth your time.</p></div><div style=\"margin-top: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px\"><div style=\"background: #FFFFFF; border-radius: 20px; padding: 24px\"><span style=\"width: 44px; height: 44px; border-radius: 12px; background: #E8F2FC; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0070C2\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4\"></path></svg></span><div style=\"margin-top: 16px; font-size: 17px; font-weight: 600; color: #000000\">Have ad account access ready</div><div style=\"margin-top: 6px; font-size: 14.5px; line-height: 1.5; color: #5A6675\">So we can connect your platforms during the call.</div></div><div style=\"background: #FFFFFF; border-radius: 20px; padding: 24px\"><span style=\"width: 44px; height: 44px; border-radius: 12px; background: #E8F2FC; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0070C2\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg></span><div style=\"margin-top: 16px; font-size: 17px; font-weight: 600; color: #000000\">Bring three real questions</div><div style=\"margin-top: 6px; font-size: 14.5px; line-height: 1.5; color: #5A6675\">About your own campaigns, not a sample.</div></div><div style=\"background: #FFFFFF; border-radius: 20px; padding: 24px\"><span style=\"width: 44px; height: 44px; border-radius: 12px; background: #E8F2FC; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0070C2\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"></path></svg></span><div style=\"margin-top: 16px; font-size: 17px; font-weight: 600; color: #000000\">Invite your team</div><div style=\"margin-top: 6px; font-size: 14.5px; line-height: 1.5; color: #5A6675\">Marketing, media and leadership see it together.</div></div></div></div></section><section style=\"padding: 24px 0 104px; background: #FFFFFF\"><div style=\"max-width: 1440px; margin: 0 auto; padding: 0 48px; box-sizing: border-box\"><div><h2 style=\"margin: 0; text-align: center; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(32px, 3.4vw, 46px); line-height: 1.08; letter-spacing: -0.025em; color: #000000\">While you wait</h2></div><div style=\"margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap\"><a href=\"/ask-cerebro\" style=\"flex: 1 1 320px; min-width: 0; text-decoration: none; border-radius: 20px; padding: 26px; background: #022771; display: flex; flex-direction: column; gap: 10px\"><span style=\"font-size: 13px; font-weight: 600; color: #8EC5F0\">Cerebro AI</span><span style=\"font-family: Geist, Inter, sans-serif; font-size: 21px; font-weight: 600; color: #FFFFFF\">See what Ask Cerebro can answer</span><span style=\"margin-top: 6px; display: inline-flex; align-items: center; gap: 6px; font-size: 14.5px; font-weight: 600; color: #8EC5F0\">Explore Ask Cerebro<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></span></a><a href=\"/blog/blended-roas-vs-platform-roas\" style=\"flex: 1 1 320px; min-width: 0; text-decoration: none; border-radius: 20px; padding: 26px; background: #F6F8FB; display: flex; flex-direction: column; gap: 10px\"><span style=\"font-size: 13px; font-weight: 600; color: #0070C2\">From the blog</span><span style=\"font-family: Geist, Inter, sans-serif; font-size: 21px; font-weight: 600; color: #000000\">Blended ROAS vs platform ROAS: which number should you trust?</span><span style=\"margin-top: 6px; display: inline-flex; align-items: center; gap: 6px; font-size: 14.5px; font-weight: 600; color: #0070C2\">Read the article<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg></span></a></div></div></section>";

export default function PgThanksV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    
    // Smooth client router navigation on internal links
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("/") && !href.startsWith("//")) {
        e.preventDefault();
        router.push(href);
      }
    };
    el.addEventListener("click", handleClick);
  

    return () => {
      el.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="font-sans text-[#1C2433] bg-white min-w-0 tabular-nums"
      dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
    />
  );
}
