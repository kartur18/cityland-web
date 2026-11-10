import { esIndexable } from "@/lib/indexacion";

// Revisión del 10-nov-2026: 64 páginas indexables no recibían ningún enlace interno (casi todas de /madrid y
// /paquetes-migratorios), porque los «relacionados» saltaban por un catálogo de miles de variantes sin indexar.
// Cada página de la sección enlaza ahora a las siguientes indexables en anillo: todas reciben al menos un enlace.

const cache = new WeakMap<readonly unknown[], readonly unknown[]>();

function indexablesDe<T>(lista: readonly T[], ruta: (x: T) => string): readonly T[] {
  const guardada = cache.get(lista) as readonly T[] | undefined;
  if (guardada) return guardada;
  const filtrada = lista.filter((x) => esIndexable(ruta(x)));
  cache.set(lista, filtrada);
  return filtrada;
}

// Posición estable para las páginas que no están en la lista indexable (las variantes reparten sus enlaces).
function posicionDe(texto: string, total: number): number {
  let h = 0;
  for (const c of texto) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h % total;
}

export function vecinasIndexables<T>(lista: readonly T[], ruta: (x: T) => string, actual: string, n: number): T[] {
  const indexables = indexablesDe(lista, ruta);
  if (!indexables.length) return [];
  const pos = indexables.findIndex((x) => ruta(x) === actual);
  const inicio = pos >= 0 ? pos + 1 : posicionDe(actual, indexables.length);
  const out: T[] = [];
  for (let i = 0; i < indexables.length && out.length < n; i++) {
    const x = indexables[(inicio + i) % indexables.length];
    if (ruta(x) !== actual) out.push(x);
  }
  return out;
}
