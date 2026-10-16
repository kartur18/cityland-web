import datosIniciales from "@/data/tarifas.json";

export type ModalidadTarifa =
  | "Solo ida"
  | "Ida y vuelta"
  | "Paquete turístico"
  | "Trámite / Servicio";

export interface TarifaItem {
  id: string;
  categoria: string;
  nombre: string;
  rutaODestino: string;
  modalidad: ModalidadTarifa;
  precioUSD: number | null;
  incluyeImpuestos: boolean;
  condiciones: string;
  fechasAplicables: string;
  fechaVerificacion: string;
  fechaVencimiento: string;
  activa: boolean;
  promoActiva: boolean;
  urlLanding: string;
}

export interface ConfiguracionTarifas {
  tipoCambioPEN: number;
  mostrarEquivalenteSoles: boolean;
  aclaracionLegal: string;
  ultimaActualizacionGlobal: string;
}

export interface CatalogoTarifas {
  configuracion: ConfiguracionTarifas;
  tarifas: TarifaItem[];
}

export interface TarifaResuelta {
  vigente: boolean;
  precioUSD: number | null;
  textoPrecio: string; // «Desde US$ 890» o «Consultar tarifa»
  textoEquivalentePEN: string | null; // «Aprox. S/ 3,364»
  modalidad: ModalidadTarifa;
  incluyeImpuestosTexto: string;
  aclaracionLegal: string;
  fechaVerificacionFormateada: string;
  condiciones: string;
  fechasAplicables: string;
}

export const CATALOGO_INICIAL: CatalogoTarifas = datosIniciales as CatalogoTarifas;

/**
 * Verifica si una tarifa está activa, tiene precio válido y no ha vencido.
 */
export function esTarifaVigente(tarifa: TarifaItem, fechaReferencia = new Date()): boolean {
  if (!tarifa.activa) return false;
  if (tarifa.precioUSD == null || tarifa.precioUSD <= 0) return false;
  if (!tarifa.fechaVencimiento) return true;

  const vencimiento = new Date(`${tarifa.fechaVencimiento}T23:59:59-05:00`);
  if (Number.isNaN(vencimiento.getTime())) return true;
  return vencimiento.getTime() >= fechaReferencia.getTime();
}

/**
 * Resuelve la presentación comercial y legal de una tarifa según las reglas de Cityland Travel.
 * Si no existe tarifa válida o venció, devuelve automáticamente «Consultar tarifa».
 */
export function resolverTarifa(
  tarifa: TarifaItem | undefined,
  config: ConfiguracionTarifas = CATALOGO_INICIAL.configuracion
): TarifaResuelta {
  if (!tarifa || !esTarifaVigente(tarifa)) {
    return {
      vigente: false,
      precioUSD: null,
      textoPrecio: "Consultar tarifa",
      textoEquivalentePEN: null,
      modalidad: tarifa?.modalidad ?? "Paquete turístico",
      incluyeImpuestosTexto: "Incluye impuestos y cargos obligatorios",
      aclaracionLegal: config.aclaracionLegal,
      fechaVerificacionFormateada: tarifa?.fechaVerificacion ?? config.ultimaActualizacionGlobal,
      condiciones: tarifa?.condiciones ?? "Consultar disponibilidad según fechas de viaje.",
      fechasAplicables: tarifa?.fechasAplicables ?? "Fechas sujetas a disponibilidad aérea.",
    };
  }

  const precioFormateado = tarifa.precioUSD!.toLocaleString("en-US");

  return {
    vigente: true,
    precioUSD: tarifa.precioUSD,
    textoPrecio: `Desde US$ ${precioFormateado}`,
    textoEquivalentePEN: null,
    modalidad: tarifa.modalidad,
    incluyeImpuestosTexto: tarifa.incluyeImpuestos
      ? "Incluye impuestos y cargos obligatorios"
      : "Más impuestos aplicables",
    aclaracionLegal: config.aclaracionLegal,
    fechaVerificacionFormateada: tarifa.fechaVerificacion,
    condiciones: tarifa.condiciones,
    fechasAplicables: tarifa.fechasAplicables,
  };
}

/**
 * Obtiene una tarifa por su ID desde el catálogo centralizado.
 */
export function obtenerTarifaPorId(
  id: string,
  catalogo: CatalogoTarifas = CATALOGO_INICIAL
): TarifaResuelta {
  const encontrada = catalogo.tarifas.find((t) => t.id === id);
  return resolverTarifa(encontrada, catalogo.configuracion);
}

/**
 * Genera el mensaje precargado de WhatsApp con atribución de ruta/destino y página de origen.
 */
export function generarMensajeOrganicoWA(
  rutaODestino: string,
  paginaOrigen?: string
): string {
  const base = `Hola, encontré Cityland Travel en Google y deseo consultar disponibilidad y tarifas para viajar a ${rutaODestino}`;
  if (!paginaOrigen) return base;
  return `${base} (Ref: ${paginaOrigen})`;
}
