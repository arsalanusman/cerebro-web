"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  isAnalyticsConfigured,
  getConsentStatus,
  setConsentStatus,
  initializeAnalyticsIfConsented,
} from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isAnalyticsConfigured()) {
      return;
    }
    const status = getConsentStatus();
    if (status === "pending") {
      setShow(true);
    } else if (status === "granted") {
      initializeAnalyticsIfConsented();
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus("granted");
    initializeAnalyticsIfConsented();
    setShow(false);
  };

  const handleDecline = () => {
    setConsentStatus("denied");
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie and privacy consent"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white border-t border-border shadow-menu animate-in slide-in-from-bottom duration-200"
    >
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-small text-text max-prose-72ch">
          We use essential and analytics cookies to measure site performance and traffic. Read our{" "}
          <Link href="/privacy-policy" className="text-brand underline hover:text-brand-hover">
            Privacy policy
          </Link>{" "}
          to learn more.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="secondary" size="md" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="primary" size="md" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </aside>
  );
}
