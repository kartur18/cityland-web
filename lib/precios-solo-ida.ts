import { MESES, hoyLima, partesFecha } from "@/lib/salidas";

// Precios del pasaje SOLO IDA a España por mes de salida. Es el único lugar donde están: calendarios, tarjetas,
// títulos, textos y schema de todas las páginas de solo ida leen de aquí. Para cambiar un precio, se cambia aquí.

// Lima–Madrid solo ida, «desde» por persona con impuestos. Clave = año-mes de salida.
export const PRECIOS_SOLO_IDA_MADRID: Record<string, number> = {
  "2026-11": 799,
  "2026-12": 799,
  "2027-01": 799,
  "2027-02": 799,
  "2027-03": 699,
  "2027-04": 699,
  "2027-05": 699,
};

// Meses que no están en la tabla (de junio de 2027 en adelante, hasta que Carlos diga otra cosa).
export const PRECIO_SOLO_IDA_POR_DEFECTO = 799;

// En fecha cercana (el mes en curso y el siguiente) el precio puede llegar hasta esta cifra.
export const PRECIO_SOLO_IDA_TOPE_CERCANO = 999;

export interface MesSoloIda {
  clave: string;
  mes: number;
  anio: number;
  nombre: string;
  desde: number;
  cercano: boolean;
}

const nombreMes = (mes: number) => MESES[mes - 1];
const clave = (anio: number, mes: number) => `${anio}-${String(mes).padStart(2, "0")}`;

export function precioSoloIdaMadrid(c: string): number {
  return PRECIOS_SOLO_IDA_MADRID[c] ?? PRECIO_SOLO_IDA_POR_DEFECTO;
}

// Los próximos meses desde el mes en curso (fecha de Lima). Como las páginas se regeneran cada día, el aviso de
// «fecha cercana» se corre solo al cambiar de mes.
export function mesesSoloIda(cantidad = 12, hoy = hoyLima()): MesSoloIda[] {
  const { mes, anio } = partesFecha(hoy);
  return Array.from({ length: cantidad }, (_, i) => {
    const m = ((mes - 1 + i) % 12) + 1;
    const a = anio + Math.floor((mes - 1 + i) / 12);
    const c = clave(a, m);
    return { clave: c, mes: m, anio: a, nombre: nombreMes(m), desde: precioSoloIdaMadrid(c), cercano: i < 2 };
  });
}

// El mes de salida más próximo con ese número (si hoy es octubre, «marzo» es marzo del año que viene).
export function proximoMesSoloIda(mes: number, hoy = hoyLima()): MesSoloIda {
  const meses = mesesSoloIda(12, hoy);
  return meses.find((m) => m.mes === mes) ?? meses[0];
}

// El «desde» más bajo de los próximos 12 meses: es el que va en títulos y schema de las páginas generales.
export function precioSoloIdaDesde(hoy = hoyLima()): number {
  return Math.min(...mesesSoloIda(12, hoy).map((m) => m.desde));
}

export const nombreMesSoloIda = nombreMes;
