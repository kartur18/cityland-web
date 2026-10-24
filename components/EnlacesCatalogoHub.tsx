import Link from "next/link";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { esIndexable } from "@/lib/indexacion";

type ModoHub = "directorio" | "destinos" | "vuelos" | "viajes";

interface EnlaceHub {
  href: string;
  texto: string;
}

const MAX_ENLACES = 48;

const HUBS_HERMANOS: EnlaceHub[] = [
  { href: "/destinos", texto: "Destinos" },
  { href: "/vuelos", texto: "Vuelos" },
  { href: "/viajes", texto: "Viajes especializados" },
  { href: "/ofertas", texto: "Ofertas" },
  { href: "/paquetes-migratorios", texto: "Paquetes migratorios" },
  { href: "/agencia", texto: "Agencias por distrito" },
  { href: "/blog", texto: "Guías del viajero" },
];

function enlacesDelModo(modo: ModoHub): { titulo: string; enlaces: EnlaceHub[] } {
  switch (modo) {
    case "destinos":
      return {
        titulo: "Más destinos desde Lima",
        enlaces: DESTINOS_MASIVOS.filter((d) => esIndexable(`/destinos/${d.slug}`)).slice(0, MAX_ENLACES).map((d) => ({
          href: `/destinos/${d.slug}`,
          texto: `${d.ciudad} (${d.pais})`,
        })),
      };
    case "vuelos":
      return {
        titulo: "Rutas de vuelos disponibles",
        enlaces: RUTAS_VUELOS_SEO.filter((r) => esIndexable(`/vuelos/${r.slug}`)).slice(0, MAX_ENLACES).map((r) => ({
          href: `/vuelos/${r.slug}`,
          texto: `Vuelos de ${r.origen} a ${r.destino}`,
        })),
      };
    case "viajes":
      return {
        titulo: "Guías y tarifas especializadas",
        enlaces: VIAJES_ESPECIALIZADOS_SEO.filter((v) => esIndexable(`/viajes/${v.slug}`)).slice(0, MAX_ENLACES).map((v) => ({
          href: `/viajes/${v.slug}`,
          texto: v.titulo,
        })),
      };
    default:
      return {
        titulo: "Ofertas y paquetes del catálogo",
        enlaces: TODOS_LOS_RESUMENES_OFERTAS_SEO.filter((o) => esIndexable(`/ofertas/${o.slug}`)).slice(0, MAX_ENLACES).map((o) => ({
          href: `/ofertas/${o.slug}`,
          texto: o.titulo,
        })),
      };
  }
}

export default function EnlacesCatalogoHub({ modo }: { modo: ModoHub }) {
  const { titulo, enlaces } = enlacesDelModo(modo);

  return (
    <section aria-labelledby="enlaces-catalogo-hub" className="space-y-5">
      <h2 id="enlaces-catalogo-hub" className="text-xl font-extrabold text-[#0a1628]">
        {titulo}
      </h2>
      <nav aria-label="Otras secciones del catálogo" className="flex flex-wrap gap-2">
        {HUBS_HERMANOS.map((h) => (
          <Link
            key={h.href}
            href={h.href}
            className="text-xs font-bold text-[#0a1628] bg-white border border-slate-200 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            {h.texto}
          </Link>
        ))}
      </nav>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm">
        {enlaces.map((e) => (
          <li key={e.href}>
            <Link href={e.href} className="text-slate-700 hover:text-red-600 hover:underline">
              {e.texto}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
