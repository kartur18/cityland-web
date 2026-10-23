// Utilidades compartidas para armar textos propios por landing, solo con datos que ya existen en el repo.

export interface FaqUnica {
  q: string;
  a: string;
}

export interface EnlaceContextual {
  href: string;
  titulo: string;
  etiqueta?: string;
}

// Misma regla oficial que ya publica /guia-europa: 122,10 EUR por dia y minimo de 1.098,90 EUR.
const BOE_POR_DIA_CENTAVOS = 12210;
const BOE_MINIMO = "1.098,90 €";
const DIAS_CON_MINIMO = 9;

export function hashTexto(texto: string): number {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function elegir<T>(opciones: readonly T[], semilla: number, desplazamiento = 0): T {
  return opciones[(semilla + desplazamiento * 7919) % opciones.length];
}

function formatoEuros(centavos: number): string {
  const enteros = Math.floor(centavos / 100);
  const resto = String(centavos % 100).padStart(2, "0");
  return `${String(enteros).replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${resto} €`;
}

export function bolsaBoe(dias: number): string {
  if (dias <= DIAS_CON_MINIMO) return BOE_MINIMO;
  return formatoEuros(BOE_POR_DIA_CENTAVOS * dias);
}

export function extraerDias(texto: string): number | null {
  const m = texto.match(/(\d{1,3})\s*D[ií]as/i);
  return m ? Number(m[1]) : null;
}

export function extraerDuracion(texto: string): { dias: number; noches: number } | null {
  const m = texto.match(/(\d{1,2})\s*D[ií]as\s*\/\s*(\d{1,2})\s*Noches/i);
  return m ? { dias: Number(m[1]), noches: Number(m[2]) } : null;
}

const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
] as const;

export function extraerMes(texto: string): string | null {
  const t = texto.toLowerCase();
  return MESES.find((mes) => new RegExp(`\\b${mes}\\b`).test(t)) ?? null;
}

// Notas por mes tomadas de las propias landings de Madrid (estadias y salidas por mes).
const NOTA_MES: Record<string, string> = {
  enero: "salidas de invierno desde el Aeropuerto Jorge Chávez",
  febrero: "temporada baja, con tarifas promocionales",
  marzo: "inicio de la primavera, con clima templado",
  abril: "mes de Semana Santa",
  mayo: "mes de las fiestas de San Isidro en Madrid",
  junio: "inicio del verano europeo",
  julio: "vacaciones y Fiestas Patrias, con alta demanda",
  agosto: "vacaciones de verano en Europa",
  septiembre: "otoño europeo, buena temporada para viajar",
  octubre: "mes de la Fiesta Nacional de España",
  noviembre: "preventa de tarifas de otoño",
  diciembre: "Navidad y Año Nuevo, época de reencuentro familiar",
};

export function notaDelMes(mes: string): string {
  return NOTA_MES[mes] ?? "";
}

export function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function minuscula(texto: string): string {
  return texto.charAt(0).toLowerCase() + texto.slice(1);
}

export function sinPuntoFinal(texto: string): string {
  return texto.replace(/[\s.:]+$/, "");
}

const PAISES_SCHENGEN = new Set([
  "españa",
  "italia",
  "francia",
  "alemania",
  "portugal",
  "países bajos",
  "paises bajos",
  "grecia",
  "austria",
  "suiza",
  "república checa",
  "republica checa",
  "bélgica",
  "belgica",
]);

export function esPaisSchengen(pais: string): boolean {
  return PAISES_SCHENGEN.has(pais.trim().toLowerCase());
}

// Frases ya publicadas en el repo para viajes a Colombia; no se amplia a otros paises sin fuente.
export function pistaRequisitos(pais: string): string | null {
  const p = pais.trim().toLowerCase();
  if (esPaisSchengen(p)) {
    return "Para entrar al espacio Schengen los peruanos no necesitan visa por turismo hasta 90 días, pero sí seguro médico de 30.000 €, alojamiento y pasaje de retorno.";
  }
  if (p === "colombia") {
    return "Para Colombia viajas con DNI o pasaporte vigente gracias a los acuerdos de la Comunidad Andina y completas el registro gratuito Check-Mig antes del vuelo.";
  }
  return null;
}

// Toma hasta `max` elementos repartidos desde una posicion que depende de la semilla.
export function tomarRotando<T>(lista: readonly T[], max: number, semilla: number): T[] {
  if (lista.length <= max) return [...lista];
  const inicio = semilla % lista.length;
  const salida: T[] = [];
  for (let i = 0; i < max; i++) salida.push(lista[(inicio + i) % lista.length]);
  return salida;
}
