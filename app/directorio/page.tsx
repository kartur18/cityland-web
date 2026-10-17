import type { Metadata } from "next";
import Link from "next/link";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { AGENCIAS_LOCALES_SEO } from "@/lib/catalogo-agencias-locales";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";

export const metadata: Metadata = {
  title:
    "Directorio Oficial de 1,000 Rutas de Vuelos, Paquetes y Destinos | Cityland Travel",
  description:
    "Explora el catálogo completo de Cityland Travel (RUC 20614914239): más de 540 rutas de vuelos nacionales e internacionales, 150 paquetes turísticos, 160 servicios especializados, cobertura en todo el Perú y guías de viaje.",
  alternates: {
    canonical: "https://citylandtravel.com/directorio",
  },
};

export default function DirectorioMaestroPage() {
  const todosDestinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];
  const todosBlogs = [...BLOG_POSTS, ...BLOG_POSTS_MASIVOS];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Encabezado */}
        <header className="bg-[#0a1628] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            Mapa General de Rutas, Destinos y Cobertura · Cityland Travel E.I.R.L. (RUC 20614914239)
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Directorio Oficial de Vuelos, Paquetes y Servicios Turísticos
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Encuentra tarifas referenciales verificadas en dólares americanos (USD) con impuestos incluidos para volar desde Lima y todas las provincias del Perú hacia España, Europa, Estados Unidos, Canadá, México, el Caribe y Sudamérica.
          </p>
        </header>

        {/* 1. Secciones Principales */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            1. Divisiones Comerciales Principales (18)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 text-xs">
            {[
              ["Inicio", "/"],
              ["Paquetes a España", "/espana"],
              ["Caribe Todo Incluido", "/caribe"],
              ["Europa y Turquía", "/europa-turquia"],
              ["Cusco y Machu Picchu", "/cusco"],
              ["Perú y Playas", "/peru"],
              ["Rutas Nacionales", "/nacionales"],
              ["Trámite de Visas", "/visas"],
              ["Seguros Schengen", "/seguros"],
              ["Cruceros Todo Incluido", "/cruceros"],
              ["Promociones Escolares", "/colegios"],
              ["Viajes de Quinceañeras", "/quinceaneras"],
              ["Lunas de Miel", "/luna-de-miel"],
              ["Viajes Corporativos", "/empresas"],
              ["Catálogo de Paquetes", "/paquetes"],
              ["Panamá + Medellín", "/paquetes/panama-medellin"],
              ["Ofertas y Promociones", "/promociones"],
              ["Políticas y Condiciones", "/politicas"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="bg-slate-50 hover:bg-red-50 hover:text-red-700 font-semibold text-slate-800 px-3 py-2.5 rounded-lg border border-slate-200/80 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* 2. Las 542 Rutas de Vuelos */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            2. Rutas de Vuelos Nacionales, Internacionales y Salidas desde Provincias ({RUTAS_VUELOS_SEO.length})
          </h2>
          <p className="text-xs text-slate-500 mb-5">
            Tarifas referenciales en USD con impuestos incluidos · Tarifa sujeta a disponibilidad y condiciones aplicables.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1.5 text-xs">
            {RUTAS_VUELOS_SEO.map((r) => (
              <Link
                key={r.slug}
                href={`/vuelos/${r.slug}`}
                className="text-slate-700 hover:text-red-600 py-1 border-b border-slate-100 truncate"
              >
                ✈️ Vuelos {r.origen} → {r.destino} (Desde ${r.precioDesdeUSD} USD)
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Los 150 Paquetes y Destinos */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            3. Paquetes Turísticos, Circuitos y Combinados ({todosDestinos.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1.5 text-xs">
            {todosDestinos.map((d) => (
              <Link
                key={d.slug}
                href={`/destinos/${d.slug}`}
                className="text-slate-700 hover:text-red-600 py-1 border-b border-slate-100 truncate"
              >
                🌍 Paquete {d.ciudad} ({d.pais}) — Desde ${d.migratorio ?? d.turistico} USD
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Las 160 Landings de Viajes Especializados */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            4. Primer Viaje, Vuelos con 2 Maletas 23 kg, Aerolíneas, Grupos y Requisitos ({VIAJES_ESPECIALIZADOS_SEO.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1.5 text-xs">
            {VIAJES_ESPECIALIZADOS_SEO.map((v) => (
              <Link
                key={v.slug}
                href={`/viajes/${v.slug}`}
                className="text-slate-700 hover:text-red-600 py-1 border-b border-slate-100 truncate"
              >
                ✦ {v.titulo} (Desde ${v.precioDesdeUSD} USD)
              </Link>
            ))}
          </div>
        </section>

        {/* 5. Cobertura Local en Lima, Callao y Todo el Perú (99 páginas) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            5. Atención por Distritos de Lima, Callao y Ciudades del Perú ({AGENCIAS_LOCALES_SEO.length + 9})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-1.5 text-xs mb-4">
            {[
              ["Lima Metropolitana", "/agencia-de-viajes-lima"],
              ["Los Olivos (Sede Central)", "/agencia-de-viajes-los-olivos"],
              ["Lima Norte", "/agencia-de-viajes-lima-norte"],
              ["San Miguel", "/agencia-de-viajes-san-miguel"],
              ["Independencia", "/agencia-de-viajes-independencia"],
              ["Comas", "/agencia-de-viajes-comas"],
              ["Miraflores", "/agencia-de-viajes-miraflores"],
              ["Santiago de Surco", "/agencia-de-viajes-surco"],
              ["San Martín de Porres", "/agencia-de-viajes-san-martin-de-porres"],
            ].map(([nombre, href]) => (
              <Link
                key={href}
                href={href}
                className="font-semibold text-red-700 hover:underline py-1"
              >
                📍 Agencia en {nombre}
              </Link>
            ))}
            {AGENCIAS_LOCALES_SEO.map((a) => (
              <Link
                key={a.slug}
                href={`/agencia/${a.slug}`}
                className="text-slate-700 hover:text-red-600 py-1 border-b border-slate-100 truncate"
              >
                📍 Agencia en {a.zona}
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Las 30 Guías de Viaje del Blog */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            6. Guías del Viajero, Requisitos y Consejos ({todosBlogs.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
            {todosBlogs.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="text-slate-700 hover:text-red-600 py-1 border-b border-slate-100"
              >
                📖 {b.titulo}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
