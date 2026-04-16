"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function WhatsAppTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18893163482/8g0OCKxa45wcEJqiy7ND",
          value: 1.0,
          currency: "PEN",
        });
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
