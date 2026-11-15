import { buildWaUrl } from "@/components/constantes";

// Landing de compra anticipada Lima–Madrid (anuncios de pago, 13-nov-2026). Tarifa confirmada por Carlos: US$ 999
// por persona, ida y vuelta, para viajar en abril, mayo y junio de 2027. Es OTRO producto que el paquete migratorio
// (Plan SMART) y otra temporada que los US$ 1,250 de /vuelos/lima-madrid: no mezclarlos.
// 15-nov-2026: se retiró el comparativo de US$ 1,500 y el «ahorras US$ 501» porque no hay respaldo verificable de esa tarifa.
// Si gerencia lo respalda, se puede volver a poner con sus condiciones.

export const RUTA_LANDING = "/viaja-a-madrid";
export const URL_LANDING = "https://citylandtravel.com/viaja-a-madrid";
export const PRECIO_ANTICIPADO = 999;
export const MESES_VIAJE = ["Abril 2027", "Mayo 2027", "Junio 2027"] as const;
export const MIN_SALIDA = "2027-04-01";
export const MAX_SALIDA = "2027-06-30";
export const MAX_RETORNO = "2027-08-31";
export const MAX_ADULTOS = 9;
export const MAX_MENORES = 6;

// Fotos reales de clientes en las oficinas (con su autorización). Mientras esté vacío, la sección de confianza no muestra galería
// y no se inventan clientes. Para sumar una: guardar la foto en /public/images/clientes/ y agregar { src, alt } aquí.
export const FOTOS_CLIENTES: readonly { src: string; alt: string }[] = [];

// Fuente oficial de los requisitos de entrada (Ministerio del Interior de España).
export const URL_FUENTE_REQUISITOS = "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/control-de-fronteras/entrada-en-espana/";

export const HORARIO = "Lunes a sábado, de 9:00 a. m. a 7:00 p. m.";

const PROMO = "Quiero cotizar la promoción Lima–Madrid ida y vuelta desde US$ 999";

// «Mayo 2027» → «Mayo de 2027».
export function mesTexto(mes: string): string {
  const [nombre, anio] = mes.split(" ");
  return nombre && anio ? `${nombre} de ${anio}` : mes;
}

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
  else if (p.get("gclid") || (/google/.test(fuente) && /cpc|ppc|paid/.test((p.get("utm_medium") || "").toLowerCase()))) nombre = "Google Ads";
  else if (p.get("fbclid") || /facebook|instagram|meta|^ig$/.test(fuente)) nombre = "Meta Ads";
  else if (fuente) nombre = `Campaña ${fuente.slice(0, 20)}`;
  return nombre ? (campana ? `${nombre} · ${campana}` : nombre) : null;
}

export function urlWhatsApp(mensaje: string, fuente: string | null, zona: string): string {
  const etiqueta = `citylandtravel.com${RUTA_LANDING}${fuente ? ` [${fuente}]` : ` [${zona}]`}`;
  return buildWaUrl({ categoria: "general", mensajePersonalizado: mensaje, refWeb: etiqueta });
}

export interface DatosCotizacion {
  mes: string;
  salida: string;
  retorno: string;
  adultos: number;
  menores: number;
}

const PREGUNTA_FINAL = "¿Me pueden indicar las opciones disponibles?";

// Mensaje sin datos elegidos: la promoción y la pregunta, nada más.
export const MENSAJE_GENERAL = `Hola, Cityland Travel. ${PROMO}.\n${PREGUNTA_FINAL}`;

// Mensaje con lo que eligió la persona. Solo entran los datos que existen: nunca se mandan campos vacíos.
export function mensajeCotizacion(d: DatosCotizacion): string {
  const lineas = [`Hola, Cityland Travel. ${PROMO}.`];
  if (d.mes) lineas.push(`Mes seleccionado: ${mesTexto(d.mes)}.`);
  const adultos = `${d.adultos} adulto${d.adultos === 1 ? "" : "s"}`;
  lineas.push(`Pasajeros: ${adultos}${d.menores > 0 ? ` y ${d.menores} menor${d.menores === 1 ? "" : "es"}` : ""}.`);
  if (d.salida) lineas.push(`Fecha de salida: ${fechaCorta(d.salida)}.`);
  if (d.retorno) lineas.push(`Fecha de retorno: ${fechaCorta(d.retorno)}.`);
  lineas.push(PREGUNTA_FINAL);
  return lineas.join("\n");
}
