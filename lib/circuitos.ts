import DATOS from "@/lib/circuitos-datos.json";
import BLOQUEOS from "@/lib/salidas-datos.json";

// Circuitos de nuestro mayorista (programas reales con salidas confirmadas), copiados de su vitrina para agencias el
// 27-oct-2026. El precio público es el «desde» del mayorista más nuestro fee; cada programa sale de la web solo
// cuando vence su última salida. Para actualizar: volver a correr el generador (ver memoria del proyecto).

export type TipoCircuito = "vuelo" | "terrestre" | "crucero";

export interface Circuito {
  mt: string;
  slug: string;
  nombre: string;
  dias: number;
  noches: number;
  region: string;
  tipo: TipoCircuito;
  origen: string;
  desde: number;
  paises: string[];
  ciudades: string[];
  aerolineas: string[];
  salidas: string;
  vigencia: string;
  incluye: string[];
  noIncluye: string[];
  hoteles: string[][];
}

export const REGIONES_CIRCUITOS: { id: string; nombre: string }[] = [
  { id: "europa", nombre: "Europa" },
  { id: "medio-oriente", nombre: "Turquía, Egipto, Jordania y Dubái" },
  { id: "asia", nombre: "Asia: Japón, China, India y Tailandia" },
  { id: "marruecos", nombre: "Marruecos" },
  { id: "estados-unidos-canada", nombre: "Estados Unidos y Canadá" },
  { id: "mexico", nombre: "México" },
  { id: "centroamerica", nombre: "Centroamérica: Costa Rica y Panamá" },
  { id: "caribe", nombre: "Caribe" },
  { id: "sudamerica", nombre: "Sudamérica: Brasil, Colombia y Argentina" },
  { id: "cruceros", nombre: "Cruceros" },
];

// Fee de Cityland sobre el precio del mayorista: US$150 parejo (decisión de Carlos, 27-oct-2026).
export function precioCityland(c: Pick<Circuito, "desde">): number {
  return c.desde + 150;
}

function hoyLima(): string {
  return new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);
}

// Si el programa tiene salidas con cupo (bloqueos), su «desde» es la más barata de las que quedan: el precio del
// catálogo a veces es viejo (Punta Cana decía 899 y sus salidas reales cuestan 1,249).
function minimoPorPrograma(hoy: string): Map<string, number> {
  const m = new Map<string, number>();
  for (const s of BLOQUEOS as { mt: string; fecha: string; precio: number }[]) {
    if (s.fecha >= hoy) m.set(s.mt, Math.min(m.get(s.mt) ?? Infinity, s.precio));
  }
  return m;
}

let cache: { dia: string; lista: Circuito[] } | null = null;

export function circuitosVigentes(): Circuito[] {
  const hoy = hoyLima();
  if (cache?.dia === hoy) return cache.lista;
  const minimos = minimoPorPrograma(hoy);
  const lista = (DATOS as Circuito[])
    .filter((c) => !c.vigencia || c.vigencia >= hoy)
    .map((c) => (minimos.has(c.mt) ? { ...c, desde: minimos.get(c.mt)! } : c));
  cache = { dia: hoy, lista };
  return lista;
}

export function buscarCircuito(slug: string): Circuito | undefined {
  return circuitosVigentes().find((c) => c.slug === slug);
}

export function todosLosSlugsCircuitos(): string[] {
  return (DATOS as Circuito[]).map((c) => c.slug);
}

export function textoTipo(c: Circuito): string {
  if (c.tipo === "vuelo") return `Incluye vuelo desde ${c.origen}`;
  if (c.tipo === "crucero") return "Solo crucero (sin vuelo)";
  return "Solo terrestre (sin vuelo)";
}

export function relacionados(c: Circuito, n = 4): Circuito[] {
  return circuitosVigentes()
    .filter((x) => x.region === c.region && x.slug !== c.slug)
    .sort((a, b) => Math.abs(a.desde - c.desde) - Math.abs(b.desde - c.desde))
    .slice(0, n);
}
