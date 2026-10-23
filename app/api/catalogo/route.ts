import { NextRequest, NextResponse } from "next/server";
import { DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { INDICE_MADRID_10K } from "@/lib/catalogo-madrid-10k";
import { INDICE_PAQUETES_MIGRATORIOS_1000 } from "@/lib/catalogo-paquetes-migratorios-1000";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export interface ItemBuscadorCatalogo {
  slug: string;
  url: string;
  titulo: string;
  destinoOPais: string;
  cluster: string;
  clusterNombre: string;
  precioDesdeUSD: number;
  img: string;
  searchNorm: string;
}

function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

let INDICE_CACHE: ItemBuscadorCatalogo[] | null = null;

function obtenerIndiceUnificado(): ItemBuscadorCatalogo[] {
  if (INDICE_CACHE) return INDICE_CACHE;

  const lista: ItemBuscadorCatalogo[] = [];

  for (let i = 0; i < INDICE_PAQUETES_MIGRATORIOS_1000.length; i++) {
    const pm = INDICE_PAQUETES_MIGRATORIOS_1000[i];
    const url = `/paquetes-migratorios/${pm.slug}`;
    lista.push({
      slug: `pm-${pm.slug}`,
      url,
      titulo: pm.titulo,
      destinoOPais: `${pm.ciudadDestino}, ${pm.pais}`,
      cluster: "mundiales",
      clusterNombre: pm.siloNombre,
      precioDesdeUSD: pm.precioPromo,
      img: pm.imagenHero,
      searchNorm: normalizarTexto(
        `${pm.titulo} ${pm.ciudadDestino} ${pm.pais} ${pm.origenPasajero} ${pm.siloNombre} paquete migratorio carpeta migratoria ${pm.slug.replace(/-/g, " ")}`
      ),
    });
  }

  const todosDestinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];
  for (let i = 0; i < todosDestinos.length; i++) {
    const d = todosDestinos[i];
    const url = `/destinos/${d.slug}`;
    const precio = Number(String(d.turistico).replace(/[^0-9]/g, "")) || 699;
    const titulo = `Paquete a ${d.ciudad}, ${d.pais} (${d.duracion})`;
    lista.push({
      slug: `destino-${d.slug}`,
      url,
      titulo,
      destinoOPais: `${d.ciudad}, ${d.pais}`,
      cluster: "destinos",
      clusterNombre: "Destinos Principales",
      precioDesdeUSD: precio,
      img: d.img || obtenerGaleriaPorTexto(`${d.ciudad} ${d.pais}`)[0],
      searchNorm: normalizarTexto(`${titulo} ${d.ciudad} ${d.pais} ${d.slug.replace(/-/g, " ")}`),
    });
  }

  for (let i = 0; i < TODOS_LOS_RESUMENES_OFERTAS_SEO.length; i++) {
    const o = TODOS_LOS_RESUMENES_OFERTAS_SEO[i];
    const url = `/ofertas/${o.slug}`;
    const galeria = obtenerGaleriaPorTexto(`${o.titulo} ${o.destinoOPais} ${o.slug}`);
    lista.push({
      slug: o.slug,
      url,
      titulo: o.titulo,
      destinoOPais: o.destinoOPais,
      cluster: o.cluster,
      clusterNombre: o.clusterNombre,
      precioDesdeUSD: o.precioDesdeUSD,
      img: galeria[i % 3] || galeria[0],
      searchNorm: normalizarTexto(
        `${o.titulo} ${o.destinoOPais} ${o.clusterNombre} ${o.slug.replace(/-/g, " ")}`
      ),
    });
  }

  for (let i = 0; i < RUTAS_VUELOS_SEO.length; i++) {
    const r = RUTAS_VUELOS_SEO[i];
    const url = `/vuelos/${r.slug}`;
    const titulo = `Vuelos de ${r.origen} (${r.codigoOrigen}) a ${r.destino} (${r.codigoDestino})`;
    const galeria = obtenerGaleriaPorTexto(`${r.destino} ${r.slug}`);
    lista.push({
      slug: `vuelo-${r.slug}`,
      url,
      titulo,
      destinoOPais: r.destino,
      cluster: "vuelos",
      clusterNombre: "Vuelos y Boletos AÃ©reos",
      precioDesdeUSD: r.precioDesdeUSD,
      img: galeria[0],
      searchNorm: normalizarTexto(`${titulo} ${r.origen} ${r.destino} ${r.slug.replace(/-/g, " ")}`),
    });
  }

  for (let i = 0; i < VIAJES_ESPECIALIZADOS_SEO.length; i++) {
    const v = VIAJES_ESPECIALIZADOS_SEO[i];
    const url = `/viajes/${v.slug}`;
    const galeria = obtenerGaleriaPorTexto(`${v.titulo} ${v.destinoOPais} ${v.slug}`);
    lista.push({
      slug: `viaje-${v.slug}`,
      url,
      titulo: v.titulo,
      destinoOPais: v.destinoOPais,
      cluster: "especializados",
      clusterNombre: "Programas Especializados",
      precioDesdeUSD: v.precioDesdeUSD,
      img: galeria[i % 3] || galeria[0],
      searchNorm: normalizarTexto(`${v.titulo} ${v.destinoOPais} ${v.slug.replace(/-/g, " ")}`),
    });
  }

  for (let i = 0; i < INDICE_MADRID_10K.length; i++) {
    const m = INDICE_MADRID_10K[i];
    const url = `/madrid/${m.slug}`;
    const galeria = obtenerGaleriaPorTexto(`${m.zonaOMunicipio} ${m.slug}`, "espana");
    lista.push({
      slug: `madrid-${m.slug}`,
      url,
      titulo: m.titulo,
      destinoOPais: "EspaÃ±a",
      cluster: "mundiales",
      clusterNombre: m.siloNombre,
      precioDesdeUSD: m.precioDesdeUSD,
      img: galeria[i % 3] || galeria[0],
      searchNorm: normalizarTexto(
        `${m.titulo} ${m.zonaOMunicipio} ${m.modalidad} ${m.siloNombre} madrid espana ${m.slug.replace(/-/g, " ")}`
      ),
    });
  }

  INDICE_CACHE = lista;
  return lista;
}

export async function GET(req: NextRequest) {
  const { obtenerIpCliente, verificarRateLimit } = await import("@/lib/seguridad-http");
  const ip = obtenerIpCliente(req);
  const rl = verificarRateLimit({
    clave: `catalogo-get:${ip}`,
    limite: 120,
    ventanaMs: 60 * 1000,
  });
  if (!rl.permitido) {
    return NextResponse.json(
      { totalCatalogo: 0, totalMatches: 0, items: [] },
      { status: 429 }
    );
  }

  const { searchParams } = new URL(req.url);
  const q = normalizarTexto(searchParams.get("q") || "")
    .trim()
    .slice(0, 100);
  const cluster = (searchParams.get("cluster") || "todos").trim().slice(0, 40);
  const origen = normalizarTexto(searchParams.get("origen") || "")
    .trim()
    .slice(0, 40);
  const mes = normalizarTexto(searchParams.get("mes") || "")
    .trim()
    .slice(0, 30);
  const limit = Math.min(96, Math.max(12, Number(searchParams.get("limit")) || 24));

  const indice = obtenerIndiceUnificado();
  const palabras = q ? q.split(/\s+/).filter(Boolean).slice(0, 8) : [];

  const resultados: Omit<ItemBuscadorCatalogo, "searchNorm">[] = [];
  let totalMatches = 0;

  for (let i = 0; i < indice.length; i++) {
    const item = indice[i];

    if (cluster && cluster !== "todos" && item.cluster !== cluster) {
      continue;
    }

    if (origen && origen !== "todos" && !item.searchNorm.includes(origen)) {
      continue;
    }

    if (mes && mes !== "todos" && !item.searchNorm.includes(mes)) {
      continue;
    }

    if (palabras.length > 0) {
      let coincideTodo = true;
      for (let p = 0; p < palabras.length; p++) {
        if (!item.searchNorm.includes(palabras[p])) {
          coincideTodo = false;
          break;
        }
      }
      if (!coincideTodo) continue;
    }

    totalMatches++;
    if (resultados.length < limit) {
      // Si la foto se repite se deja la misma: cambiarla por otra de una lista fija mezclaba regiones (Punta Cana con Valencia).
      resultados.push({
        slug: item.slug,
        url: item.url,
        titulo: item.titulo,
        destinoOPais: item.destinoOPais,
        cluster: item.cluster,
        clusterNombre: item.clusterNombre,
        precioDesdeUSD: item.precioDesdeUSD,
        img: item.img,
      });
    }
  }

  return NextResponse.json(
    {
      totalCatalogo: indice.length,
      totalMatches,
      items: resultados,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
