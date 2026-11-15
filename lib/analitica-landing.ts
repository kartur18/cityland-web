// Eventos de la landing /viaja-a-madrid hacia Google Analytics 4 (gtag ya viene cargado en el layout).
// Solo viajan datos de la interacción (mes, cantidad de pasajeros, procedencia): nunca nombres, teléfonos ni documentos.
// Clic de WhatsApp ≠ consulta confirmada ≠ reserva ≠ venta: aquí solo se registra el clic (`whatsapp_click`).
// `generate_lead` y `quotation_form_submit` NO se disparan desde la página: no hay formulario ni confirmación de que la consulta
// llegó al CRM. Cuando exista (por ejemplo un webhook del chat que lo confirme), se dispara desde el servidor.

type Parametros = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CLAVE_UTM = "cityland_viaja_utm";
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

// Guarda los UTM de la primera visita de la sesión, para conservarlos si la persona va a otra página y vuelve.
export function guardarUtm(): void {
  try {
    const p = new URLSearchParams(window.location.search);
    const hay = UTM.some((k) => p.get(k)) || p.get("gclid") || p.get("fbclid");
    if (!hay || sessionStorage.getItem(CLAVE_UTM)) return;
    sessionStorage.setItem(CLAVE_UTM, window.location.search.slice(0, 500));
  } catch {
    // Sin almacenamiento: se usa solo la URL actual.
  }
}

// Parámetros de procedencia: de la URL actual o, si ya no están, los guardados al entrar.
export function busquedaConUtm(): string {
  try {
    return window.location.search || sessionStorage.getItem(CLAVE_UTM) || "";
  } catch {
    return window.location.search;
  }
}

function procedencia(): Parametros {
  const p = new URLSearchParams(busquedaConUtm());
  const salida: Parametros = {};
  for (const k of UTM) {
    const v = p.get(k);
    if (v) salida[k] = v.slice(0, 80);
  }
  return salida;
}

export function evento(nombre: string, datos: Parametros = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", nombre, { landing_page: "/viaja-a-madrid", producto: "lima_madrid_999", ...procedencia(), ...datos });
}
