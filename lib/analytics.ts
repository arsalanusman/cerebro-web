/**
 * Analytics configuration and consent management.
 * GA4 and Meta Pixel are disabled by default unless explicitly configured via env flags.
 * If configured, scripts load ONLY after the user gives explicit consent via the ConsentBanner.
 */

export const ANALYTICS_CONFIG = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

export const isAnalyticsConfigured = (): boolean => {
  return Boolean(ANALYTICS_CONFIG.gaId || ANALYTICS_CONFIG.metaPixelId);
};

export type ConsentStatus = "granted" | "denied" | "pending";

const CONSENT_STORAGE_KEY = "cerebro_cookie_consent";

export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === "granted" || stored === "denied") return stored;
  return "pending";
};

export const setConsentStatus = (status: "granted" | "denied"): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, status);
  window.dispatchEvent(new CustomEvent("cerebro_consent_change", { detail: status }));
};

export const initializeAnalyticsIfConsented = (): void => {
  if (typeof window === "undefined") return;
  if (!isAnalyticsConfigured()) return;
  if (getConsentStatus() !== "granted") return;

  // Load GA4
  if (ANALYTICS_CONFIG.gaId && !document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.gaId}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.id = "ga4-inline";
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ANALYTICS_CONFIG.gaId}', { anonymize_ip: true });
    `;
    document.head.appendChild(inline);
  }

  // Load Meta Pixel
  if (ANALYTICS_CONFIG.metaPixelId && !document.getElementById("meta-pixel-script")) {
    const inline = document.createElement("script");
    inline.id = "meta-pixel-script";
    inline.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${ANALYTICS_CONFIG.metaPixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(inline);
  }
};
