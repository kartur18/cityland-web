import { buildWaUrl } from "@/components/constantes";

// Landing de compra anticipada Lima–Madrid (anuncios de pago, 13-nov-2026). Tarifa confirmada por Carlos: US$ 999
// por persona, ida y vuelta, para viajar en abril, mayo y junio de 2027. Es OTRO producto que el paquete migratorio
// (Plan SMART) y otra temporada que los US$ 1,250 de /vuelos/lima-madrid: no mezclarlos.

export const RUTA_LANDING = "/viaja-a-madrid";
export const PRECIO_ANTICIPADO = 999;
// Tarifa «desde» de las demás fechas, solo para el comparativo de esta landing (la web general sigue en su propia cifra).
export const PRECIO_OTRAS_FECHAS = 1500;
export const MESES_VIAJE = ["Abril 2027", "Mayo 2027", "Junio 2027"] as const;
export const MIN_SALIDA = "2027-04-01";
export const MAX_SALIDA = "2027-06-30";
export const MAX_RETORNO = "2027-08-31";

export const OFICINAS = ["Av. Antúnez de Mayolo 814, Los Olivos, Lima", "Av. Angélica Gamarra 763, Los Olivos, Lima"] as const;
export const HORARIO = "Lunes a sábado, de 9:00 a. m. a 7:00 p. m.";

const PROMO = "Vi su promoción a Madrid ida y vuelta desde US$ 999 (compra anticipada, viaje en abril, mayo o junio de 2027)";

// «2027-05-12» → «12/05/2027» sin pasar por Date (el input date se parsea como medianoche UTC y en Lima daría el día anterior).
export function fechaCorta(iso: string): string {
  const [a, m, d] = iso.split("-");
  return a && m && d ? `${d}/${m}/${a}` : "";
}

// Procedencia del clic para el CRM: «Ref Web: citylandtravel.com/viaja-a-madrid [ChatGPT Ads · campaña]».
export function fuenteDeUrl(search: string): string | null {
  const p = new URLSearchParams(search);
  const fuente = (p.get("utm_source") || "").toLowerCase();
  const campana = (p.get("utm_campaign") || "").trim().slice(0, 40);
  let nombre: string | null = null;
  if (/chatgpt|openai/.test(fuente)) nombre = "ChatGPT Ads";
  else if (p.get("gclid") || (/google/.test(fuente) && /cpc|ppc/.test((p.get("utm_medium") || "").toLowerCase()))) nombre = "Google Ads";
  else if (p.get("fbclid") || /facebook|instagram|meta|^ig$/.test(fuente)) nombre = "Meta Ads";
  else if (fuente) nombre = `Campaña ${fuente.slice(0, 20)}`;
  return nombre ? (campana ? `${nombre} · ${campana}` : nombre) : null;
}

export function urlWhatsApp(mensaje: string, fuente: string | null, zona: string): string {
  const etiqueta = `citylandtravel.com${RUTA_LANDING}${fuente ? ` [${fuente}]` : ` [${zona}]`}`;
  return buildWaUrl({ categoria: "general", mensajePersonalizado: mensaje, refWeb: etiqueta });
}

export const MENSAJE_GENERAL = `¡Hola Cityland Travel! ${PROMO} y quiero cotizar mi viaje. Mis fechas aproximadas: `;

export interface DatosCotizacion {
  mes: string;
  salida: string;
  retorno: string;
  adultos: number;
  menores: number;
}

export function mensajeCotizacion(d: DatosCotizacion): string {
  const lineas = [`¡Hola Cityland Travel! ${PROMO} y quiero cotizar.`, ""];
  if (d.mes) lineas.push(`Mes aproximado de salida: ${d.mes}`);
  if (d.salida) lineas.push(`Fecha de salida: ${fechaCorta(d.salida)}`);
  if (d.retorno) lineas.push(`Fecha de retorno: ${fechaCorta(d.retorno)}`);
  const adultos = `${d.adultos} adulto${d.adultos === 1 ? "" : "s"}`;
  lineas.push(`Pasajeros: ${adultos}${d.menores > 0 ? ` y ${d.menores} menor${d.menores === 1 ? "" : "es"}` : ""}`);
  lineas.push("", "¿Me ayudan con las opciones y el precio para esas fechas?");
  return lineas.join("\n");
}
