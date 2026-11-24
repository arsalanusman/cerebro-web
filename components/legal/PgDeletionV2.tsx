"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const HTML_CONTENT = "</dc-import>\n\n<div role=\"note\" style=\"background: #FFF7ED; border-bottom: 1px solid #F5D9C0; padding: 12px 40px; text-align: center; font-size: 14px; font-weight: 600; color: #9A3412\">Draft for legal review. Not yet in effect.</div><section style=\"padding: 64px 0 40px; background: #EEF5FC\"><div style=\"max-width: 1240px; margin: 0 auto; padding: 0 40px; box-sizing: border-box\"><p style=\"margin: 0; font-size: 14px; font-weight: 600; color: #0070C2\">Legal</p><h1 style=\"margin: 12px 0 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(34px, 4vw, 50px); line-height: 1.08; letter-spacing: -0.03em; color: #000000\">Delete your data</h1><p style=\"margin: 14px 0 0; max-width: 640px; font-size: 18px; line-height: 1.55; color: #5A6675\">How to disconnect your accounts and ask us to delete your data.</p><p style=\"margin: 14px 0 0; font-size: 14px; color: #5A6675\">Last updated: <span style=\"color: #9A3412\">[TBC: date]</span></p></div></section><section style=\"padding: 56px 0 104px; background: #FFFFFF\"><div style=\"max-width: 1240px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; display: flex; gap: 56px; flex-wrap: wrap; align-items: flex-start\"><aside style=\"flex: 0 0 220px; min-width: 0\"><nav aria-label=\"Contents\"><div style=\"font-size: 12.5px; font-weight: 600; color: #000000\">Contents</div><ul style=\"margin: 10px 0 0; padding: 0 0 0 14px; list-style: none; border-left: 1px solid #E2E8F0\"><li><a href=\"#d1\" style=\"display: block; padding: 6px 0; font-size: 14px; color: #5A6675; text-decoration: none\">1. Disconnect in Cerebro</a></li><li><a href=\"#d2\" style=\"display: block; padding: 6px 0; font-size: 14px; color: #5A6675; text-decoration: none\">2. Remove access in each platform</a></li><li><a href=\"#d3\" style=\"display: block; padding: 6px 0; font-size: 14px; color: #5A6675; text-decoration: none\">3. Ask us to delete your data</a></li><li><a href=\"#d4\" style=\"display: block; padding: 6px 0; font-size: 14px; color: #5A6675; text-decoration: none\">4. Requests from Meta</a></li><li><a href=\"#d5\" style=\"display: block; padding: 6px 0; font-size: 14px; color: #5A6675; text-decoration: none\">What gets deleted</a></li></ul></nav><div style=\"margin-top: 32px; display: flex; flex-direction: column; gap: 6px\"><div style=\"font-size: 12.5px; font-weight: 600; color: #000000\">Legal pages</div><a href=\"/privacy-policy\" style=\"font-size: 14px; text-decoration: none; color: #5A6675; font-weight: 400\">Privacy policy</a><a href=\"/terms-of-service\" style=\"font-size: 14px; text-decoration: none; color: #5A6675; font-weight: 400\">Terms of service</a><a href=\"/data-deletion\" style=\"font-size: 14px; text-decoration: none; color: #0070C2; font-weight: 600\">Delete your data</a></div></aside><div style=\"flex: 1 1 560px; min-width: 0; max-width: 760px\"><h2 id=\"d1\" style=\"margin: 48px 0 0; font-family: Geist, Inter, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 600; letter-spacing: -0.015em; color: #000000; scroll-margin-top: 96px\">1. Disconnect in Cerebro</h2><p style=\"margin: 16px 0 0; font-size: 17.5px; line-height: 1.75; color: #1C2433\">Open Connections, choose the platform and select Disconnect. Syncing stops straight away.</p><h2 id=\"d2\" style=\"margin: 48px 0 0; font-family: Geist, Inter, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 600; letter-spacing: -0.015em; color: #000000; scroll-margin-top: 96px\">2. Remove access in each platform</h2><ul style=\"margin: 16px 0 0; padding-left: 24px; font-size: 17.5px; line-height: 1.7; color: #1C2433\"><li style=\"margin-top: 8px; padding-left: 4px\">Meta: remove Cerebro from Business Integrations in your Facebook settings</li><li style=\"margin-top: 8px; padding-left: 4px\">Google: remove Cerebro from third-party access in your Google Account</li><li style=\"margin-top: 8px; padding-left: 4px\">TikTok: remove Cerebro from authorized apps in TikTok Business Center</li></ul><div style=\"margin: 24px 0 0; border: 1px solid #F5D9C0; background: #FFF7ED; border-radius: 16px; padding: 18px 20px\"><div style=\"font-size: 14px; font-weight: 600; color: #9A3412\">To confirm</div><div style=\"margin-top: 6px; font-size: 16px; line-height: 1.6; color: #1C2433\">[CONFIRM: exact menu paths in each platform]</div></div><h2 id=\"d3\" style=\"margin: 48px 0 0; font-family: Geist, Inter, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 600; letter-spacing: -0.015em; color: #000000; scroll-margin-top: 96px\">3. Ask us to delete your data</h2><p style=\"margin: 16px 0 0; font-size: 17.5px; line-height: 1.75; color: #1C2433\">Email <a href=\"mailto:hello@cerebro.media?subject=Data%20deletion%20request\">hello@cerebro.media</a> with the subject “Data deletion request” from the email on your account. We confirm when it is done, within <span style=\"color: #9A3412\">[TBC: number of days]</span>.</p><h2 id=\"d4\" style=\"margin: 48px 0 0; font-family: Geist, Inter, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 600; letter-spacing: -0.015em; color: #000000; scroll-margin-top: 96px\">4. Requests from Meta</h2><p style=\"margin: 16px 0 0; font-size: 17.5px; line-height: 1.75; color: #1C2433\">When you remove Cerebro from Meta, Meta notifies us and we delete the data it covers. You can check the status at <span style=\"color: #9A3412\">[TBC: status URL from the data deletion callback]</span>.</p><h2 id=\"d5\" style=\"margin: 48px 0 0; font-family: Geist, Inter, sans-serif; font-size: 28px; line-height: 1.2; font-weight: 600; letter-spacing: -0.015em; color: #000000; scroll-margin-top: 96px\">What gets deleted</h2><ul style=\"margin: 16px 0 0; padding-left: 24px; font-size: 17.5px; line-height: 1.7; color: #1C2433\"><li style=\"margin-top: 8px; padding-left: 4px\">Advertising data synced from the platform</li><li style=\"margin-top: 8px; padding-left: 4px\">Sheets and files you uploaded</li><li style=\"margin-top: 8px; padding-left: 4px\">Your account details, unless the law requires us to keep them <span style=\"color: #9A3412\">[LEGAL]</span></li></ul></div></div></section>";

export default function PgDeletionV2() {
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
