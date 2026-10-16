"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Interceptor global no destructivo para todos los enlaces de WhatsApp (wa.me).
 * 1. Registra en Google Analytics 4 el evento `click_whatsapp_consulta` separado de la conversación real.
 * 2. Añade automáticamente la página de origen al mensaje precargado si aún no la incluye.
 * 3. Guarda un registro de auditoría local para el panel `/admin/tarifas`.
 */
export default function WhatsAppTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href) return;

      if (!anchor.href.includes("wa.me/")) return;

      try {
        const url = new URL(anchor.href);
        const telefono = url.pathname.replace("/", "");
        const textoActual = url.searchParams.get("text") || "";
        const paginaOrigen = window.location.pathname || "/";
        const esMovil = window.innerWidth < 768 ? "Móvil" : "Escritorio";

        // Añadir identificación de la landing page que originó la consulta si no la tiene
        if (textoActual && !textoActual.includes("[Origen:")) {
          url.searchParams.set("text", `${textoActual} [Origen: ${paginaOrigen}]`);
          anchor.href = url.toString();
        }

        // Enviar evento de clic a GA4 (separado de conversación iniciada)
        if (typeof window.gtag === "function") {
          window.gtag("event", "click_whatsapp_consulta", {
            event_category: "Captacion_WhatsApp",
            landing_page: paginaOrigen,
            mensaje_consulta: textoActual.slice(0, 100),
            asesor_numero: telefono,
            dispositivo: esMovil,
          });
        }

        // Guardar en historial de auditoría para visualización en /admin/tarifas
        const raw = localStorage.getItem("cityland_wa_clicks");
        const lista = raw ? JSON.parse(raw) : [];
        lista.unshift({
          fecha: new Date().toLocaleString("es-PE"),
          pagina: paginaOrigen,
          destino: textoActual.slice(0, 80) || "Consulta general",
          dispositivo: esMovil,
          telefono,
        });
        localStorage.setItem("cityland_wa_clicks", JSON.stringify(lista.slice(0, 50)));
      } catch {
        // Nunca bloquear la apertura de WhatsApp ante un error de tracking
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
