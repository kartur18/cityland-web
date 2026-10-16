"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface CandidatoTurno {
  asesorId: string;
  telefono: string;
  nombreInterno: string;
  esContinuidad: boolean;
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
 * Sistema Inteligente de Distribución por WhatsApp Business (Round Robin 1..12 + Continuidad).
 * - Conserva el mismo asesor si el visitante vuelve a consultar desde el mismo navegador.
 * - Ejecuta la asignación oficial y el conteo en el backend únicamente cuando el usuario PULSA el botón.
 * - Funciona de forma síncrona en el clic para compatibilidad total con iPhone (Safari), Android y Escritorio.
 * - Si el distribuidor no responde, conserva el enlace estático oficial de respaldo.
 */
export default function WhatsAppTracker() {
  const candidatoRef = useRef<CandidatoTurno | null>(null);

  useEffect(() => {
    let cancelado = false;

    const sincronizarCandidato = async () => {
      try {
        const aidGuardado = localStorage.getItem("cityland_wa_aid") || "";
        const telGuardado = localStorage.getItem("cityland_wa_tel") || "";

        if (aidGuardado && telGuardado) {
          candidatoRef.current = {
            asesorId: aidGuardado,
            telefono: telGuardado,
            nombreInterno: localStorage.getItem("cityland_wa_nombre") || "Asesor Asignado",
            esContinuidad: true,
          };
        }

        const qs = new URLSearchParams();
        if (aidGuardado) qs.set("aid", aidGuardado);
        if (telGuardado) qs.set("tel", telGuardado);

        const res = await fetch(`/api/whatsapp/asignar?${qs.toString()}`, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelado && data?.telefono) {
          candidatoRef.current = {
            asesorId: data.asesorId,
            telefono: data.telefono,
            nombreInterno: data.nombreInterno,
            esContinuidad: Boolean(data.esContinuidad),
          };
          // Si ya tenía uno guardado pero fue desactivado/pausado, actualizar al nuevo elegible
          if (aidGuardado && !data.esContinuidad) {
            localStorage.setItem("cityland_wa_aid", data.asesorId);
            localStorage.setItem("cityland_wa_tel", data.telefono);
            localStorage.setItem("cityland_wa_nombre", data.nombreInterno);
          }
        }
      } catch {
        // Mantiene el enlace de respaldo estático del HTML si no hay red
      }
    };

    sincronizarCandidato();

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href || !anchor.href.includes("wa.me/")) return;

      try {
        const url = new URL(anchor.href);
        const telefonoOriginal = url.pathname.replace(/\D/g, "");
        const textoActual = url.searchParams.get("text") || "";
        const paginaOrigen = window.location.pathname || "/";
        const fuenteTrafico = detectarFuenteTrafico();
        const esMovil = window.innerWidth < 768 ? "Móvil" : "Escritorio";
        const textoBoton =
          (anchor.innerText || anchor.getAttribute("aria-label") || "Botón WhatsApp")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 60);

        // 1. Determinar el teléfono del asesor (Persistente del visitante o siguiente en Round Robin)
        const aidPrevio = localStorage.getItem("cityland_wa_aid");
        const telPrevio = localStorage.getItem("cityland_wa_tel");
        const candidato = candidatoRef.current;

        const telefonoFinal =
          candidato?.telefono || telPrevio || telefonoOriginal || "51906450098";
        const asesorIdFinal = candidato?.asesorId || aidPrevio || "asignado";
        const asesorNombreFinal = candidato?.nombreInterno || "Asesor Comercial";

        // 2. Actualizar el enlace `https://wa.me/` de forma síncrona antes de que el navegador abra la pestaña
        url.pathname = `/${telefonoFinal}`;
        if (!textoActual) {
          url.searchParams.set(
            "text",
            `Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para mi próximo viaje (${paginaOrigen}). ¿Me pueden ayudar?`
          );
        }
        anchor.href = url.toString();

        // 3. Persistir inmediatamente en el navegador para que futuros clics mantengan el mismo asesor
        localStorage.setItem("cityland_wa_aid", asesorIdFinal);
        localStorage.setItem("cityland_wa_tel", telefonoFinal);
        localStorage.setItem("cityland_wa_nombre", asesorNombreFinal);

        // 4. Confirmar asignación e incrementar turno Round Robin en el servidor
        const payload = {
          asesorPrevioId: aidPrevio,
          asesorPrevioTelefono: telPrevio,
          landingPage: paginaOrigen,
          fuenteTrafico,
          botonSeleccionado: textoBoton,
          dispositivo: esMovil,
        };

        fetch("/api/whatsapp/asignar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        })
          .then((r) => r.json())
          .then((confirmado) => {
            if (confirmado?.telefono) {
              localStorage.setItem("cityland_wa_aid", confirmado.asesorId);
              localStorage.setItem("cityland_wa_tel", confirmado.telefono);
              localStorage.setItem("cityland_wa_nombre", confirmado.nombreInterno);
              candidatoRef.current = {
                asesorId: confirmado.asesorId,
                telefono: confirmado.telefono,
                nombreInterno: confirmado.nombreInterno,
                esContinuidad: true,
              };
            }
          })
          .catch(() => {});

        // 5. Registrar evento de conversión de clic en Google Analytics 4 (separado de conversación iniciada)
        if (typeof window.gtag === "function") {
          window.gtag("event", "click_whatsapp_consulta", {
            event_category: "Captacion_WhatsApp",
            landing_page: paginaOrigen,
            traffic_source: fuenteTrafico,
            button_selected: textoBoton,
            advisor_id: asesorIdFinal,
            advisor_phone: telefonoFinal,
            device_type: esMovil,
          });
        }

        // 6. Guardar también en el historial local del navegador
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
          asesor: asesorNombreFinal,
        });
        localStorage.setItem("cityland_wa_clicks", JSON.stringify(lista.slice(0, 80)));
      } catch {
        // Si algo falla, el enlace wa.me original se abre sin interrupción
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      cancelado = true;
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
