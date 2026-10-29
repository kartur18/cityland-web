import type { PrecioMes } from "@/lib/italia/tipos";

// ÚNICO archivo de precios de las landings de Italia. Precios «desde» por persona, en US$, clase económica,
// con impuestos (consulta: 28-oct-2026). Base: Air Europa publica Lima–Roma desde US$ 1,194 y Lima–Milán desde US$ 1,147
// ida y vuelta; Roma–Lima desde 925 € y Milán–Lima desde 891 €. Julio, agosto y diciembre suben por temporada alta.
// Se actualizan aquí y cambian en todas las páginas.

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] as const;

// Ida y vuelta Lima–Roma por mes de salida (enero = 0).
const LIMA_ROMA_IDA_VUELTA = [1290, 1240, 1250, 1220, 1220, 1390, 1590, 1550, 1290, 1220, 1190, 1490];
// Ida y vuelta saliendo de Italia hacia Lima (residentes que vienen de visita), por mes de salida.
const ITALIA_LIMA_IDA_VUELTA = [1190, 1090, 1090, 1090, 1120, 1290, 1490, 1390, 1150, 1090, 1120, 1590];
// Solo ida de Italia a Lima, por mes de salida.
const ITALIA_LIMA_SOLO_IDA = [720, 650, 650, 650, 680, 750, 850, 800, 680, 650, 680, 920];

const NOTAS_LIMA_ITALIA: Record<number, string> = { 6: "Vacaciones", 7: "Verano europeo", 11: "Fiestas" };
const NOTAS_ITALIA_LIMA: Record<number, string> = { 6: "Fiestas Patrias", 11: "Navidad en Perú" };

// Mes actual en Lima (0-11): la tabla empieza en el mes que viene.
function mesLima(): number {
  return Number(new Intl.DateTimeFormat("en-US", { timeZone: "America/Lima", month: "numeric" }).format(new Date())) - 1;
}

function proximos12(precios: number[], recargo: number, notas: Record<number, string>): PrecioMes[] {
  const inicio = (mesLima() + 1) % 12;
  return Array.from({ length: 12 }, (_, i) => {
    const m = (inicio + i) % 12;
    return { mes: MESES[m], precio: precios[m] + recargo, nota: notas[m] };
  });
}

const minimo = (precios: number[]) => Math.min(...precios);

// Lima → Italia. El recargo es lo que suma la ciudad de destino (o la provincia de salida) al Lima–Roma.
export const mesesLimaItalia = (recargo = 0) => proximos12(LIMA_ROMA_IDA_VUELTA, recargo, NOTAS_LIMA_ITALIA);
export const desdeLimaItalia = (recargo = 0) => minimo(LIMA_ROMA_IDA_VUELTA) + recargo;
export const desdeLimaItaliaEnMes = (mes: number, recargo = 0) => LIMA_ROMA_IDA_VUELTA[mes] + recargo;

// Italia → Lima.
export const mesesItaliaLima = (recargo = 0) => proximos12(ITALIA_LIMA_IDA_VUELTA, recargo, NOTAS_ITALIA_LIMA);
export const desdeItaliaLima = (recargo = 0) => minimo(ITALIA_LIMA_IDA_VUELTA) + recargo;
export const mesesItaliaLimaSoloIda = (recargo = 0) => proximos12(ITALIA_LIMA_SOLO_IDA, recargo, NOTAS_ITALIA_LIMA);
export const desdeItaliaLimaSoloIda = (recargo = 0) => minimo(ITALIA_LIMA_SOLO_IDA) + recargo;

// Mes más barato de cada tabla (para los textos «¿cuándo es más barato?»).
export function mesMasBarato(meses: PrecioMes[]): PrecioMes {
  return meses.reduce((a, b) => (b.precio < a.precio ? b : a));
}
export function mesMasCaro(meses: PrecioMes[]): PrecioMes {
  return meses.reduce((a, b) => (b.precio > a.precio ? b : a));
}
