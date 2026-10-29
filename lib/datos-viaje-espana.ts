// Cifras oficiales para las guías de dudas sobre España, en un solo lugar. Cada una con su fuente y la fecha
// en que se consultó: cuando cambien (SMI 2027, tasa de la carta, tipo de cambio), se actualizan aquí.

export const FECHA_CONSULTA = "28 de octubre de 2026";

// Bolsa de viaje: Orden PRE/1282/2007, apartado Segundo (10 % del SMI por persona y día; mínimo 90 % del SMI).
// SMI 2026: 1.221 € al mes en 14 pagas (Real Decreto 126/2026).
export const SMI_2026 = 1221;
export const BOLSA_POR_DIA = 122.1;
export const BOLSA_MINIMO = 1098.9;

// Tipo de cambio venta euro → sol del BCRP (serie diaria).
export const EURO_EN_SOLES = 3.874;
export const FECHA_TIPO_CAMBIO = "27 de octubre de 2026";

// Carta de invitación: tasa 790-012 de la Policía Nacional (solicitud 75,05 € + expedición 6,54 €). Vale 9 meses.
export const TASA_CARTA_SOLICITUD = 75.05;
export const TASA_CARTA_EXPEDICION = 6.54;
export const TASA_CARTA_TOTAL = 81.59;
export const VIGENCIA_CARTA_MESES = 9;

// Costos en Madrid. Hotel: tarifa media por habitación del INE (agosto 116,89 € y septiembre 186,65 € de 2026).
export const HOTEL_MADRID_NOCHE = { min: 120, max: 190 };
// Menú del día en Madrid (Hostelería de España, 2025) y abono turístico zona A del Consorcio de Transportes.
export const MENU_DEL_DIA = 14.5;
export const ABONO_TURISTICO: Record<number, number> = { 1: 10.3, 2: 17.5, 3: 23.1, 4: 27.8, 5: 33.4, 7: 43.2 };
// Estimación de Cityland para el presupuesto por persona: media habitación doble, comida y transporte.
export const GASTO_DIARIO_ESTIMADO = { hotel: 75, comida: 40, transporte: 7 };
// Seguro de viaje para Europa de 15 días en el mercado peruano (referencial, planes básicos).
export const SEGURO_15_DIAS_SOLES = { min: 180, max: 280 };

// IPREM 2026: 600 € al mes (Presupuestos de 2023 prorrogados). Lo usan la reagrupación familiar y el visado de estudios.
export const IPREM_MENSUAL = 600;
// Reagrupación familiar (Hoja 8 de Extranjería, mayo de 2025): 150 % del IPREM para 2 personas y 50 % más por cada una.
export const reagrupacionMensual = (miembros: number) => IPREM_MENSUAL * (1.5 + 0.5 * Math.max(0, miembros - 2));
// Estancia por estudios: 100 % del IPREM por cada mes de estancia.
export const estudiosTotal = (meses: number) => IPREM_MENSUAL * meses;

export const bolsaPorPersona = (dias: number) => Math.max(BOLSA_MINIMO, BOLSA_POR_DIA * dias);

// Formato español con punto de miles también en cifras de 4 dígitos (Intl en es-ES no lo pone: «3663,00»).
export function euros(n: number): string {
  const [entero, decimales] = n.toFixed(2).split(".");
  return `${entero.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decimales} €`;
}

export const soles = (n: number) => "S/ " + Math.round(n * EURO_EN_SOLES).toLocaleString("es-PE");
