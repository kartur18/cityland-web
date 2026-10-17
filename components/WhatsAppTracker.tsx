"use client";

import { useEffect } from "react";
import { NUMERO_WHATSAPP_OFICIAL } from "./constantes";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function detectarFuenteTrafico(): string {
  if (typeof window === "undefined") return "Directo";
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = (params.get("utm_source") || "").toLowerCase();
    const utmMedium = (params.get("utm_medium") || "").toLowerCase();
    const gclid = params.get("gclid");
    const fbclid = params.get("fbclid");

    if (gclid || (utmSource.includes("google") && utmMedium.includes("cpc"))) {
      return "Google Ads";
    }
    if (fbclid || utmSource.includes("facebook") || utmSource.includes("ig") || utmSource.includes("meta")) {
      return "Meta Ads (FB/IG)";
    }
    if (utmSource) {
      return `Campaña (${utmSource})`;
    }

    const ref = (document.referrer || "").toLowerCase();
    if (ref.includes("google.")) return "Google Orgánico";
    if (ref.includes("bing.") || ref.includes("yahoo.")) return "Buscador Orgánico";
    if (ref.includes("facebook.") || ref.includes("instagram.") || ref.includes("tiktok.")) {
      return "Redes Sociales";
    }
    return "Directo / Favoritos";
  } catch {
    return "Directo";
  }
}

/**
 * Rastreador y Canalizador Oficial de WhatsApp hacia el número central de Cityland Travel (944 103 890).
 * - Limpia asignaciones previas en localStorage para que 100% de las consultas entren a la Bandeja Central (51944103890).
 * - Conserva el mensaje contextual de cada página y registra la conversión en Google Analytics 4.
 */
export default function WhatsAppTracker() {
  useEffect(() => {
    try {
      localStorage.removeItem("cityland_wa_aid");
      localStorage.removeItem("cityland_wa_tel");
      localStorage.removeItem("cityland_wa_nombre");
    } catch {
      // Ignorar si localStorage está restringido
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href || !anchor.href.includes("wa.me/")) return;

      try {
        const url = new URL(anchor.href);
        const textoActual = url.searchParams.get("text") || "";
        const paginaOrigen = window.location.pathname || "/";
        const fuenteTrafico = detectarFuenteTrafico();
        const esMovil = window.innerWidth < 768 ? "Móvil" : "Escritorio";
        const textoBoton =
          (anchor.innerText || anchor.getAttribute("aria-label") || "Botón WhatsApp")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 60);

        const telefonoFinal = NUMERO_WHATSAPP_OFICIAL; // 51944103890

        url.pathname = `/${telefonoFinal}`;
        if (!textoActual) {
          url.searchParams.set(
            "text",
            `¡Hola Cityland Travel! Vi su web oficial (${paginaOrigen}) y quiero cotizar mi próximo viaje.`
          );
        }
        anchor.href = url.toString();

        if (typeof window.gtag === "function") {
          window.gtag("event", "click_whatsapp_consulta", {
            event_category: "Captacion_WhatsApp",
            landing_page: paginaOrigen,
            traffic_source: fuenteTrafico,
            button_selected: textoBoton,
            advisor_id: "central_bandeja",
            advisor_phone: telefonoFinal,
            device_type: esMovil,
          });
        }

        const raw = localStorage.getItem("cityland_wa_clicks");
        const lista = raw ? JSON.parse(raw) : [];
        lista.unshift({
          fecha: new Date().toLocaleString("es-PE"),
          pagina: paginaOrigen,
          fuente: fuenteTrafico,
          boton: textoBoton,
          destino: textoActual.slice(0, 80) || "Consulta general",
          dispositivo: esMovil,
          telefono: telefonoFinal,
          asesor: "Central Cityland Travel",
        });
        localStorage.setItem("cityland_wa_clicks", JSON.stringify(lista.slice(0, 80)));
      } catch {
        // Si algo falla, el enlace wa.me original se abre sin interrupción
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
