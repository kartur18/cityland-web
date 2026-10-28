import { DESTINOS_CARIBE, DESTINOS_EUROPA } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { CIUDADES } from "@/lib/hubs-ciudades";
import { esIndexable } from "@/lib/indexacion";

// Las variantes viejas de /ofertas («paquetes-a-sevilla-desde-tumbes», «atencion-san-miguel-viajes-a-bariloche») se
// borraron en la limpieza de octubre y Google guardó ~2,900 como 404. Cada una lleva con 301 a la página vigente de
// su destino, para no perder lo que ya habían ganado. 28-oct-2026.

const HUBS_PAIS = [
  "argentina",
  "aruba",
  "brasil",
  "cancun",
  "cartagena",
  "chile",
  "china",
  "colombia",
  "costa-rica",
  "dubai",
  "egipto",
  "espana",
  "estados-unidos",
  "francia",
  "grecia",
  "india",
  "italia",
  "japon",
  "jordania",
  "marruecos",
  "mexico",
  "miami",
  "panama",
  "punta-cana",
  "san-andres",
  "tailandia",
  "turquia",
  "orlando-disney",
];

const PERU =
  /^(cusco|machu-picchu|arequipa|puno|iquitos|tarapoto|piura|mancora|tumbes|trujillo|chiclayo|cajamarca|huaraz|ica|paracas|huacachina|ayacucho|tacna|chachapoyas|puerto-maldonado|oxapampa|lima|nasca|colca)/;

function destinoDelSlug(slug: string): string | null {
  const desde = slug.match(/^paquetes-a-(.+?)-desde-[a-z0-9-]+$/);
  if (desde) return desde[1];
  const atencion = slug.match(/-viajes-a-([a-z0-9-]+)$/);
  if (atencion) return atencion[1];
  const generico = slug.match(/^(?:paquetes|viajes|ofertas|tours)-a-([a-z0-9-]+)$/);
  return generico ? generico[1] : null;
}

// Página vigente que mejor responde a la búsqueda del slug viejo, o null si no hay pista del destino.
export function redireccionOfertaVieja(slug: string): string | null {
  const x = destinoDelSlug(slug);
  if (!x) return null;
  // «estambul-capadocia» o «foz-de-iguazu»: si el nombre completo no tiene página, se prueba con su primera ciudad.
  const partes = [x, x.replace(/^foz-de-/, ""), x.split("-")[0]];
  for (const p of [...new Set(partes)]) {
    const r = paginaDe(p);
    if (r) return r;
  }
  return PERU.test(x) ? "/nacionales" : "/ofertas";
}

function paginaDe(x: string): string | null {
  if (HUBS_PAIS.includes(x)) return `/paquetes-a-${x}`;
  const destino = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS].find((d) => d.slug === x || d.slug.startsWith(`${x}-`));
  if (destino) return `/destinos/${destino.slug}`;
  const ciudad = CIUDADES.find((c) => c.slug === x || c.alias.includes(x.replace(/-/g, " ")));
  if (ciudad) return `/viajes-a/${ciudad.slug}`;
  const oferta = TODOS_LOS_RESUMENES_OFERTAS_SEO.find(
    (o) => (o.slug.includes(`-${x}`) || o.slug.startsWith(`${x}-`)) && esIndexable(`/ofertas/${o.slug}`),
  );
  if (oferta) return `/ofertas/${oferta.slug}`;
  return null;
}
