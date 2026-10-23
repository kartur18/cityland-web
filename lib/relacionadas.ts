// Busca paginas hermanas por palabras raras compartidas (destino, ciudad, hotel), sin red ni IA.
import type { EnlaceContextual } from "@/lib/contenido-unico";
import { hashTexto } from "@/lib/contenido-unico";

export interface ItemRelacionable {
  slug: string;
  titulo: string;
  href: string;
  // Texto extra (pais, ciudad) que aporta palabras para comparar.
  extra?: string;
}

const PALABRAS_VACIAS = new Set([
  "de", "del", "la", "las", "los", "el", "en", "y", "a", "con", "para", "por", "desde", "al", "un", "una",
  "paquete", "paquetes", "viaje", "viajes", "viajar", "oferta", "ofertas", "vuelo", "vuelos", "hotel", "lima",
  "dias", "dia", "noches", "noche", "mas", "sin", "todo", "incluido", "completo", "programa", "tour", "tours",
  "precio", "preventa", "inicial", "cotizacion", "inmediata", "oficial", "pnr", "peru", "plan", "estadia",
  "boleto", "pasaje", "pasajes", "salida", "salidas", "mes", "temporada", "promocion", "especial", "cityland",
  "travel", "reserva", "cuotas", "intereses", "separa", "separar", "ida", "vuelta", "solo", "mundial", "gran",
]);

function normalizar(texto: string): string[] {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((t) => t.length > 2 && !/^\d+$/.test(t) && !PALABRAS_VACIAS.has(t));
}

export function crearRelacionador(items: readonly ItemRelacionable[], maxLista = 1200) {
  let tokensPorItem: string[][] | null = null;
  let invertido: Map<string, number[]> | null = null;
  let posPorSlug: Map<string, number> | null = null;

  const preparar = () => {
    if (tokensPorItem && invertido && posPorSlug) return;
    tokensPorItem = items.map((it) => Array.from(new Set(normalizar(`${it.slug} ${it.titulo} ${it.extra ?? ""}`))));
    invertido = new Map();
    posPorSlug = new Map();
    tokensPorItem.forEach((tokens, i) => {
      posPorSlug?.set(items[i].slug, i);
      for (const t of tokens) {
        const lista = invertido?.get(t);
        if (lista) lista.push(i);
        else invertido?.set(t, [i]);
      }
    });
  };

  return (slug: string, max: number): EnlaceContextual[] => {
    preparar();
    const pos = posPorSlug?.get(slug);
    if (pos === undefined || !tokensPorItem || !invertido) return [];
    const total = items.length;
    const puntajes = new Map<number, number>();
    for (const t of tokensPorItem[pos]) {
      const lista = invertido.get(t);
      if (!lista || lista.length > maxLista || lista.length < 2) continue;
      const peso = Math.log(total / lista.length);
      for (const j of lista) if (j !== pos) puntajes.set(j, (puntajes.get(j) ?? 0) + peso);
    }
    const semilla = hashTexto(slug);
    const ordenados = [...puntajes.entries()]
      .map(([j, p]) => ({ j, p: p + ((semilla ^ hashTexto(items[j].slug)) % 100) / 1000 }))
      .sort((a, b) => b.p - a.p);
    const salida: EnlaceContextual[] = [];
    const titulosVistos = new Set<string>([items[pos].titulo]);
    for (const { j } of ordenados) {
      const it = items[j];
      if (titulosVistos.has(it.titulo)) continue;
      titulosVistos.add(it.titulo);
      salida.push({ href: it.href, titulo: it.titulo });
      if (salida.length >= max) break;
    }
    return salida;
  };
}
