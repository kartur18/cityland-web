declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GOOGLE_ADS_CONVERSION_ID = "AW-18093363482";
export const GOOGLE_ADS_CONVERSION_LABEL = "Sg0OCKzz45wcEJqiy7ND";

export function trackConversion(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    value: 1.0,
    currency: "PEN",
  });
}
