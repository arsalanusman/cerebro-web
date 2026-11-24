"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const HTML_CONTENT = "</dc-import>\n\n<section style=\"padding: 80px 0 104px; background: #F1F2FF\"><div style=\"max-width: 1240px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; display: flex; gap: 64px; flex-wrap: wrap; align-items: flex-start\"><div style=\"flex: 1 1 420px; min-width: 0\"><p style=\"margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #4F46E5\">Contact</p><h1 style=\"margin: 0; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(38px, 4.2vw, 56px); line-height: 1.04; letter-spacing: -0.03em; color: #101426\">Talk to the team in Karachi.</h1><p style=\"margin: 20px 0 0; max-width: 440px; font-size: 18px; line-height: 1.55; color: #5B6170\">Questions about Cerebro, pricing or a partnership. We reply within one business day.</p><div style=\"margin-top: 36px; display: flex; flex-direction: column; gap: 22px\"><div style=\"display: flex; gap: 14px; align-items: flex-start\"><span style=\"flex: 0 0 auto; width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 5h18v14H3zM3 6l9 7 9-7\"></path></svg></span><div><div style=\"font-size: 13px; font-weight: 600; color: #5B6170\">Email</div><div style=\"margin-top: 4px; font-size: 16px; line-height: 1.5; color: #101426\"><a href=\"mailto:hello@cerebro.media\" style=\"color: #101426; text-decoration: none\">hello@cerebro.media</a></div></div></div><div style=\"display: flex; gap: 14px; align-items: flex-start\"><span style=\"flex: 0 0 auto; width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z\"></path></svg></span><div><div style=\"font-size: 13px; font-weight: 600; color: #5B6170\">Phone</div><div style=\"margin-top: 4px; font-size: 16px; line-height: 1.5; color: #101426\"><a href=\"tel:+923422732873\" style=\"color: #101426; text-decoration: none\">+92 342 2732873</a></div></div></div><div style=\"display: flex; gap: 14px; align-items: flex-start\"><span style=\"flex: 0 0 auto; width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"></path></svg></span><div><div style=\"font-size: 13px; font-weight: 600; color: #5B6170\">Office</div><div style=\"margin-top: 4px; font-size: 16px; line-height: 1.5; color: #101426\">Office 403, 4th Floor, The Forum<br>Block 9 Clifton, Karachi 75600, Pakistan</div></div></div><div style=\"display: flex; gap: 14px; align-items: flex-start\"><span style=\"flex: 0 0 auto; width: 44px; height: 44px; border-radius: 12px; background: #EEF0FF; display: inline-flex; align-items: center; justify-content: center\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4F46E5\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z\"></path></svg></span><div><div style=\"font-size: 13px; font-weight: 600; color: #5B6170\">Hours</div><div style=\"margin-top: 4px; font-size: 16px; line-height: 1.5; color: #101426\">Mon – Fri: 9:00 AM – 6:00 PM PKT</div></div></div></div></div><div style=\"flex: 1 1 480px; min-width: 0\"><div style=\"background: #FFFFFF; border: 1px solid #E4E7EC; border-radius: 24px; padding: 32px; box-shadow: 0 30px 70px rgba(28,26,87,0.10); display: flex; flex-direction: column; gap: 16px\"><div style=\"display: flex; flex-direction: column; gap: 6px\"><label for=\"c-name\" style=\"font-size: 14px; font-weight: 600; color: #101426\">Full name</label><input id=\"c-name\" type=\"text\" placeholder=\"\" autocomplete=\"name\" style=\"min-height: 46px; border: 1px solid #D5D8E0; border-radius: 10px; padding: 0 12px; font: inherit; font-size: 15px; color: #101426; background: #FFFFFF\"></div><div style=\"display: flex; flex-direction: column; gap: 6px\"><label for=\"c-email\" style=\"font-size: 14px; font-weight: 600; color: #101426\">Work email</label><input id=\"c-email\" type=\"email\" placeholder=\"name@company.com\" autocomplete=\"email\" style=\"min-height: 46px; border: 1px solid #D5D8E0; border-radius: 10px; padding: 0 12px; font: inherit; font-size: 15px; color: #101426; background: #FFFFFF\"></div><div style=\"display: flex; flex-direction: column; gap: 6px\"><label for=\"c-company\" style=\"font-size: 14px; font-weight: 600; color: #101426\">Company</label><input id=\"c-company\" type=\"text\" placeholder=\"\" autocomplete=\"organization\" style=\"min-height: 46px; border: 1px solid #D5D8E0; border-radius: 10px; padding: 0 12px; font: inherit; font-size: 15px; color: #101426; background: #FFFFFF\"></div><div style=\"display: flex; flex-direction: column; gap: 6px\"><label for=\"c-topic\" style=\"font-size: 14px; font-weight: 600; color: #101426\">Topic</label><select id=\"c-topic\" style=\"min-height: 46px; border: 1px solid #D5D8E0; border-radius: 10px; padding: 0 10px; font: inherit; font-size: 15px; color: #101426; background: #FFFFFF\"><option value=\"\">Choose one</option><option>Sales</option><option>Support</option><option>Partnerships</option><option>Press</option><option>Other</option></select></div><div style=\"display: flex; flex-direction: column; gap: 6px\"><label for=\"c-msg\" style=\"font-size: 14px; font-weight: 600; color: #101426\">Message</label><textarea id=\"c-msg\" rows=\"4\" placeholder=\"\" style=\"border: 1px solid #D5D8E0; border-radius: 10px; padding: 10px 12px; font: inherit; font-size: 15px; color: #101426; resize: vertical\"></textarea></div><div><button type=\"button\" style=\"display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 23px; background: #4F46E5; color: #FFFFFF; border: 0; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none\">Send message</button></div><p style=\"margin: 0; font-size: 13.5px; color: #5B6170\">We use your details only to reply. See our <a href=\"/privacy-policy\">privacy policy</a>.</p></div></div></div></section><section style=\"padding: 104px 0; background: #FFFFFF\"><div style=\"max-width: 1240px; margin: 0 auto; padding: 0 40px; box-sizing: border-box\"><div><h2 style=\"margin: 0; text-align: center; font-family: Geist, Inter, sans-serif; font-weight: 600; font-size: clamp(32px, 3.4vw, 46px); line-height: 1.08; letter-spacing: -0.025em; color: #101426\">Visit the office</h2></div><div style=\"margin-top: 40px\"><div data-map-closed><div style=\"height: 360px; border-radius: 24px; background: #F7F8FA; border: 1px solid #E4E7EC; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; text-align: center; padding: 20px\"><span style=\"font-size: 16px; font-weight: 600; color: #101426\">The Forum, Block 9 Clifton, Karachi</span><span style=\"font-size: 14px; color: #5B6170\">The map loads only when you ask, to keep this page fast.</span><button type=\"button\" data-action=\"show-map\" style=\"display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 24px; border-radius: 23px; background: #FFFFFF; color: #101426; border: 1px solid #D5D8E0; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; text-decoration: none\">Show map</button></div></div><div data-map-open style=\"display: none\"><iframe title=\"Cerebro DNano Karachi Office Location\" src=\"https://maps.google.com/maps?q=24.82743341760946,67.03774159317835&z=16&output=embed\" style=\"width: 100%; height: 360px; border-radius: 24px; border: 1px solid #E4E7EC;\" loading=\"lazy\"></iframe></div></div><div style=\"margin-top: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px\"><div style=\"height: 260px; border-radius: 24px; overflow: hidden; background: #FAFAFC; border: 1px solid #E4E7EC;\"><img src=\"/brand/office/office_exterior.jpg\" alt=\"The Forum, Block 9 Clifton, Karachi - Cerebro DNano Office\" style=\"width: 100%; height: 100%; object-fit: cover; display: block;\" /></div><div style=\"height: 260px; border-radius: 24px; overflow: hidden; background: #FAFAFC; border: 1px solid #E4E7EC;\"><img src=\"/brand/office/team_workspace.jpg\" alt=\"Cerebro team workspace in Clifton, Karachi\" style=\"width: 100%; height: 100%; object-fit: cover; display: block;\" /></div></div></div></section>";

export default function PgContactV2() {
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
  
    // Map toggle
    const mapClosed = el.querySelector<HTMLElement>('[data-map-closed]');
    const mapOpen = el.querySelector<HTMLElement>('[data-map-open]');
    const showMapBtn = el.querySelector<HTMLButtonElement>('[data-action="show-map"]');

    if (showMapBtn && mapClosed && mapOpen) {
      showMapBtn.addEventListener('click', () => {
        mapClosed.style.display = 'none';
        mapOpen.style.display = 'flex';
      });
    }
    

    return () => {
      el.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="font-sans text-[#2B3040] bg-white min-w-0 tabular-nums"
      dangerouslySetInnerHTML={{ __html: HTML_CONTENT }}
    />
  );
}
