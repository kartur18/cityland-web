import DATOS from "@/lib/salidas-datos.json";
import { circuitosVigentes, type Circuito } from "@/lib/circuitos";

// Salidas con fecha fija y cupo bloqueado por el mayorista (bloqueos 2026-2027, copiados el 27-oct-2026). El precio es
// el del mayorista para esa fecha; el público suma nuestro fee. Cada salida sale de la web al día siguiente de partir.

export interface SalidaBloqueo {
  mt: string;
  fecha: string; // AAAA-MM-DD
  origen: string;
  precio: number;
}

export interface Salida extends SalidaBloqueo {
  slug: string;
  circuito: Circuito;
}

export const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
] as const;

const FEE_USD = 150;

export function precioSalida(s: Pick<SalidaBloqueo, "precio">): number {
  return s.precio + FEE_USD;
}

function hoyLima(): string {
  return new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);
}

export function partesFecha(f: string): { dia: number; mes: number; anio: number } {
  const [anio, mes, dia] = f.split("-").map(Number);
  return { dia, mes, anio };
}

// «26 de julio de 2027»
export function fechaLarga(f: string): string {
  const { dia, mes, anio } = partesFecha(f);
  return `${dia} de ${MESES[mes - 1]} de ${anio}`;
}

// «sáb 26 jul»: el día de la semana ayuda a planificar permisos y feriados.
const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
export function diaSemana(f: string): string {
  const { dia, mes, anio } = partesFecha(f);
  return DIAS[new Date(Date.UTC(anio, mes - 1, dia)).getUTCDay()];
}

export function sumarDias(f: string, n: number): string {
  const { dia, mes, anio } = partesFecha(f);
  return new Date(Date.UTC(anio, mes - 1, dia + n)).toISOString().slice(0, 10);
}

export function claveMes(f: string): string {
  const { mes, anio } = partesFecha(f);
  return `${MESES[mes - 1]}-${anio}`;
}

function slugSalida(c: Circuito, f: string): string {
  const { dia, mes, anio } = partesFecha(f);
  return `${c.slug}-${dia}-${MESES[mes - 1]}-${anio}`;
}

let cache: { dia: string; lista: Salida[] } | null = null;

export function salidasVigentes(): Salida[] {
  const hoy = hoyLima();
  if (cache?.dia === hoy) return cache.lista;
  const porMt = new Map(circuitosVigentes().map((c) => [c.mt, c]));
  const lista: Salida[] = [];
  for (const s of DATOS as SalidaBloqueo[]) {
    const circuito = porMt.get(s.mt);
    if (!circuito || s.fecha < hoy) continue;
    lista.push({ ...s, slug: slugSalida(circuito, s.fecha), circuito });
  }
  cache = { dia: hoy, lista };
  return lista;
}

export function buscarSalida(slug: string): Salida | undefined {
  return salidasVigentes().find((s) => s.slug === slug);
}

export function salidasDe(mt: string): Salida[] {
  return salidasVigentes().filter((s) => s.mt === mt);
}


export interface MesSalidas {
  clave: string; // «julio-2027»
  nombre: string; // «julio 2027»
  salidas: Salida[];
}

export function mesesConSalidas(): MesSalidas[] {
  const porMes = new Map<string, Salida[]>();
  for (const s of salidasVigentes()) {
    const k = claveMes(s.fecha);
    porMes.set(k, [...(porMes.get(k) ?? []), s]);
  }
  return [...porMes.entries()].map(([clave, salidas]) => ({ clave, nombre: clave.replace("-", " "), salidas }));
}

export function buscarMes(clave: string): MesSalidas | undefined {
  return mesesConSalidas().find((m) => m.clave === clave);
}

