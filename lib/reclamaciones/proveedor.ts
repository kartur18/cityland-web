// Datos fijos del proveedor que atiende los reclamos. Módulo liviano: lo importan la ruta POST y la página.
// El domicilio NO se escribe aquí: sale de OFICINAS (components/constantes.ts), la misma fuente del pie.

export const PROVEEDOR_RECLAMOS = {
  razonSocial: "Cityland Group E.I.R.L.",
  ruc: "20614914239",
  nombreComercial: "Cityland Travel",
} as const;

// Respaldo si algún día el RUC deja de estar en OFICINAS. Domicilio fiscal de Cityland Group E.I.R.L. confirmado por el dueño el 29-oct-2026 (Av. Antúnez de Mayolo 814, Los Olivos).
export const DOMICILIO_PROVEEDOR_RESPALDO = "Av. Santiago Antúnez de Mayolo 814, Urb. Mercurio, Los Olivos, Lima";

export const WHATSAPP_RECLAMOS = "51944103890";
export const PLAZO_RESPUESTA_DIAS_HABILES = 15;

export const TEXTO_LEGAL_RECLAMOS =
  "La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. El proveedor debe dar respuesta al reclamo en un plazo no mayor a quince (15) días hábiles, improrrogables.";

export const TEXTO_RECLAMO = "RECLAMO: disconformidad relacionada a los productos o servicios.";
export const TEXTO_QUEJA = "QUEJA: malestar o descontento respecto a la atención al público, no relacionado con los productos o servicios.";

// Correos de la empresa (separados por coma en RECLAMOS_EMAIL_DESTINO). Se muestran en la página como canal alterno.
export function correosDestino(): string[] {
  return (process.env.RECLAMOS_EMAIL_DESTINO ?? "")
    .split(",")
    .map((c) => c.trim())
    .filter((c) => /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(c));
}

export type ConfigCorreo = { apiKey: string; desde: string; destino: string[] };

// null = falta alguna variable: la ruta responde 503 y la página ofrece los canales alternos.
export function configCorreo(): ConfigCorreo | null {
  const apiKey = (process.env.RECLAMOS_RESEND_API_KEY ?? "").trim();
  const desde = (process.env.RECLAMOS_EMAIL_DESDE ?? "").trim();
  const destino = correosDestino();
  if (!apiKey || !desde || destino.length === 0) return null;
  return { apiKey, desde, destino };
}
