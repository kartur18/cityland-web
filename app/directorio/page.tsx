import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuscadorCatalogoInstantaneo from "@/components/BuscadorCatalogoInstantaneo";
import EnlacesCatalogoHub from "@/components/EnlacesCatalogoHub";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { textoPrecio } from "@/lib/formato-precio";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { INDICE_PAQUETES_MIGRATORIOS_1000 } from "@/lib/catalogo-paquetes-migratorios-1000";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Catálogo de Destinos, Paquetes Migratorios a Europa y Ofertas | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Explora nuestros paquetes migratorios a España, Italia, Francia y Europa desde $699 USD (solo ida), resorts Todo Incluido en el Caribe y paquetes por el Perú en Cityland Travel (RUC 20614914239)."),
  alternates: {
    canonical: "https://citylandtravel.com/directorio",
  },
};

export type ModoCatalogoHub = "directorio" | "destinos" | "vuelos" | "viajes";

const HERO_POR_MODO: Record<
  ModoCatalogoHub,
  {
    badge: string;
    h1: string;
    descripcion: string;
    waTexto: string;
  }
> = {
  directorio: {
    badge: "🌍 Cityland Travel E.I.R.L. · RUC 20614914239 · Atención en Los Olivos",
    h1: "Catálogo Oficial de Paquetes a Europa, Caribe y Perú",
    descripcion:
      "Encuentra en segundos tu paquete migratorio a España, Italia o Francia desde $699 USD, solo ida (planes $699, $799, $899 y $999 según tu fecha), o vacaciones Todo Incluido al Caribe y Perú. Separa hoy con el 50% de inicial.",
    waTexto:
      "¡Hola Cityland Travel! Vi su catálogo de destinos y quiero cotizar mi próximo viaje.",
  },
  destinos: {
    badge: "🌎 Destinos Internacionales y Nacionales · Separa con el 50%",
    h1: "Destinos Turísticos y Migratorios desde Lima y Todo el Perú",
    descripcion:
      "Conoce nuestros paquetes completos a España, Italia, Francia, el Caribe Todo Incluido, Estados Unidos, Sudamérica y el interior del Perú con vuelos, seguro médico y hoteles confirmados.",
    waTexto:
      "¡Hola Cityland Travel! Estuve viendo su catálogo de Destinos y deseo cotizar un paquete de viaje.",
  },
  vuelos: {
    badge: "✈️ Rutas Aéreas desde Lima y Provincias · Código PNR Verificable",
    h1: "Vuelos y Paquetes Aéreos desde Lima y Todo el Perú",
    descripcion:
      "Cotiza tus boletos y paquetes aéreos con tarifas promocionales en Iberia, Air Europa, Plus Ultra, LATAM, KLM, Air France y Copa Airlines hacia Madrid, Barcelona, Roma, Milán, París, Punta Cana, Cancún y Cusco.",
    waTexto:
      "¡Hola Cityland Travel! Quiero cotizar boletos y paquetes aéreos para mis fechas de viaje.",
  },
  viajes: {
    badge: "🧳 Guías Operativas · Equipaje 23 kg y Carpeta Migratoria",
    h1: "Viajes Especializados, Equipaje de Bodega y Requisitos Migratorios",
    descripcion:
      "Soluciones especializadas para viajeros peruanos: paquetes migratorios desde $699 USD (solo ida), tarifas con maleta de 23 kg, requisitos de ingreso sin visa y preparación paso a paso.",
    waTexto:
      "¡Hola Cityland Travel! Quiero asesoría sobre paquetes de viaje, equipaje o requisitos migratorios.",
  },
};

const DIVISIONES_VISUALES = [
  {
    titulo: "Paquetes Migratorios a España",
    subtitulo: "Madrid, Barcelona, Valencia, Sevilla y 25 ciudades · 4 planes según fecha",
    precio: "Solo ida desde $699",
    img: "/images/espana/gran-via-metropolis.jpg",
    href: "/espana",
  },
  {
    titulo: "Paquetes Migratorios a Italia",
    subtitulo: "Milán, Roma, Turín, Florencia, Bolonia, Génova y Venecia",
    precio: "Solo ida desde $699",
    img: "/images/destinos/florencia.jpg",
    href: "/italia",
  },
  {
    titulo: "Paquetes Migratorios a Francia",
    subtitulo: "París, Lyon, Marsella, Niza, Toulouse y Burdeos",
    precio: "Solo ida desde $699",
    img: "/images/destinos/lyon.jpg",
    href: "/francia",
  },
  {
    titulo: "1,000 Rutas Migratorias Europa",
    subtitulo: "Buscador completo por ciudad europea y salida desde todo el Perú",
    precio: "Solo ida desde $699",
    img: "/images/destinos/barcelona.webp",
    href: "/paquetes-migratorios",
  },
  {
    titulo: "Caribe Todo Incluido & Miami",
    subtitulo: "Punta Cana, Cancún, Aruba, Curazao, San Andrés y Cartagena",
    precio: "Desde $589",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=80",
    href: "/caribe",
  },
  {
    titulo: "Cusco y Machu Picchu",
    subtitulo: "Paquetes de 3 a 6 días con vuelos, tren turístico e ingresos",
    precio: "Desde $329",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=900&q=80",
    href: "/cusco",
  },
  {
    titulo: "Circuitos Europa & Turquía",
    subtitulo: "Recorridos de 10 a 15 días con hoteles 4★ y guía en español",
    precio: "Desde $1,590",
    img: "/images/destinos/venecia.jpg",
    href: "/europa-turquia",
  },
  {
    titulo: "Perú: Playas, Selva y Sierra",
    subtitulo: "Máncora, Punta Sal, Tarapoto, Arequipa e Iquitos",
    precio: "Desde $289",
    img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=900&q=80",
    href: "/peru",
  },
];

export function VistaCatalogoHub({ modoHub = "directorio" }: { modoHub?: ModoCatalogoHub }) {
  const heroInfo = HERO_POR_MODO[modoHub];
  const destinosDestacados = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];

  // Las primeras 24 tarjetas del buscador son 24 ciudades distintas de Europa con 24 fotos únicas
  const inicialesBuscador = INDICE_PAQUETES_MIGRATORIOS_1000.slice(0, 24).map((pm) => ({
    slug: `pm-${pm.slug}`,
    url: `/paquetes-migratorios/${pm.slug}`,
    titulo: pm.titulo,
    destinoOPais: `${pm.ciudadDestino}, ${pm.pais}`,
    cluster: "mundiales",
    clusterNombre: pm.siloNombre,
    precioDesdeUSD: pm.precioPromo,
    img: pm.imagenHero,
  }));

  const waUrl =
    "https://wa.me/51944103890?text=" + encodeURIComponent(heroInfo.waTexto);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Visual Limpio */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/espana/barajas.jpg"
              alt={heroInfo.h1}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                {heroInfo.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-4">
                {heroInfo.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {textoPrecio(heroInfo.descripcion)}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-7 py-4 rounded-2xl shadow-xl text-sm sm:text-base whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
          {/* 2. Divisiones Principales Ordenadas de Mayor a Menor Prioridad */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Prioridad Comercial · Tarifas Oficiales 2026
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                Especialidades de Cityland Travel
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIVISIONES_VISUALES.map((div) => (
                <Link
                  key={div.href}
                  href={div.href}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={div.img}
                      alt={div.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-white/95 text-[#0a1628] text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                      {div.precio}
                    </span>
                  </div>
                  <div className="p-5 bg-white flex flex-col justify-between flex-1 gap-3">
                    <div>
                      <h3 className="text-base font-extrabold text-[#0a1628] group-hover:text-red-600 transition-colors leading-snug">
                        {div.titulo}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {div.subtitulo}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#0a1628]">
                      <span>Ver planes y precios</span>
                      <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                        Abrir →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 3. Buscador Instantáneo con Fotos Únicas por Ciudad */}
          <BuscadorCatalogoInstantaneo
            itemsIniciales={inicialesBuscador}
            totalInicial={31017}
          />

          {/* 4. Paquetes Destacados con Imágenes Reales Únicas */}
          <section className="space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Europa, Caribe, Norteamérica y Sudamérica
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                Paquetes Más Solicitados
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinosDestacados.map((d) => {
                const hrefDestino =
                  d.slug === "madrid"
                    ? "/espana"
                    : d.slug === "milan"
                    ? "/italia"
                    : d.slug === "paris"
                    ? "/francia"
                    : `/destinos/${d.slug}`;

                return (
                  <Link
                    key={d.slug}
                    href={hrefDestino}
                    className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={d.img}
                        alt={d.alt || d.ciudad}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        <FlagIcon pais={d.pais} className="w-3.5 h-2.5" />
                        <span>{d.pais}</span>
                      </span>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                      <div>
                        <span className="text-[11px] text-red-600 font-extrabold uppercase tracking-wider block">
                          {d.duracion}
                        </span>
                        <h3 className="text-lg font-extrabold text-[#0a1628] group-hover:text-red-600 transition-colors leading-tight mt-0.5">
                          {d.ciudad}
                        </h3>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">
                            Desde
                          </span>
                          <span className="text-xl font-extrabold text-[#0a1628]">
                            ${d.turistico.toLocaleString("en-US")} USD
                          </span>
                        </div>
                        <span className="inline-flex items-center justify-center bg-slate-100 group-hover:bg-[#0a1628] group-hover:text-white text-[#0a1628] text-xs font-extrabold px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap">
                          Ver Detalles →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* 5. Guías Prácticas para Viajeros Peruanos */}
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                Blog y Consejos Oficiales
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1628]">
                Guías Claras para Viajeros Peruanos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BLOG_POSTS.slice(0, 6).map((b) => (
                <Link
                  key={b.slug}
                  href={`/blog/${b.slug}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/70 hover:bg-slate-100 border border-slate-200/80 transition-all"
                >
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                    <Image
                      src={b.imagen}
                      alt={b.titulo}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase text-red-600 block">
                      {b.categoria} · {b.lectura}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0a1628] leading-snug line-clamp-2">
                      {b.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <EnlacesCatalogoHub modo={modoHub} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function DirectorioMaestroPage() {
  return <VistaCatalogoHub modoHub="directorio" />;
}
