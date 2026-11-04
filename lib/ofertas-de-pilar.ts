import { TODOS_LOS_RESUMENES_OFERTAS_SEO, type ResumenOfertaComercialSEO } from "@/lib/catalogo-mil-landings-comerciales";
import { esIndexable } from "@/lib/indexacion";
import { pilarDe } from "@/lib/pilar-destino";

// Las mejores ofertas de cada página principal (pilar): hasta el 4-nov-2026 «Paquetes a San Andrés» no enlazaba a
// ninguna de sus 174 ofertas. Una por producto (las variantes del mismo hotel salen una sola vez, la más barata).
let porPilar: Map<string, ResumenOfertaComercialSEO[]> | undefined;

// En «Paquetes a X» van paquetes: ni tours sueltos, ni seguros, ni asesorías de visa, ni viajes de empresa.
const NO_ES_PAQUETE = /seguro de viaje|asesor[ií]a|visa |tour |excursi[oó]n|traslado privado|incentivos|corporativ|empresas/i;
const PISO_PAQUETE = 300;

export function ofertasDePilar(ruta: string, max = 9): ResumenOfertaComercialSEO[] {
  if (!porPilar) {
    porPilar = new Map();
    for (const o of TODOS_LOS_RESUMENES_OFERTAS_SEO) {
      const p = pilarDe(o.slug);
      if (!p || o.precioDesdeUSD < PISO_PAQUETE || NO_ES_PAQUETE.test(`${o.titulo} `) || !esIndexable(`/ofertas/${o.slug}`)) continue;
      porPilar.set(p.href, [...(porPilar.get(p.href) ?? []), o]);
    }
  }
  const unicas = new Map<string, ResumenOfertaComercialSEO>();
  for (const o of porPilar.get(ruta) ?? []) {
    // Nombre del producto, antes de «:», «—» o el paréntesis: «Decameron Marazul San Andrés (San Andrés): Vuelo + …».
    const clave = o.titulo.split(/[:—(]/)[0].trim().toLowerCase();
    const ya = unicas.get(clave);
    if (!ya || o.precioDesdeUSD < ya.precioDesdeUSD) unicas.set(clave, o);
  }
  return [...unicas.values()].sort((a, b) => a.precioDesdeUSD - b.precioDesdeUSD).slice(0, max);
}
