import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuscadorCatalogoInstantaneo from "@/components/BuscadorCatalogoInstantaneo";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export const metadata: Metadata = {
  title: "Catálogo de +10,000 Destinos, Ofertas, España, Italia, Vuelos y Hoteles | Cityland Travel",
  description:
    "Explora más de 10,000 opciones de viajes a España, Barcelona, Italia, Europa, paquetes Todo Incluido, hoteles 5★, cruceros, visas y salidas desde todo el Perú en Cityland Travel (RUC 20614914239).",
  alternates: {
    canonical: "https://citylandtravel.com/directorio",
  },
};

const DIVISIONES_VISUALES = [
  {
    titulo: "España y Carpeta de Viaje",
    subtitulo: "Madrid, Barcelona, Valencia y más",
    precio: "Desde $890",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80",
    href: "/espana",
  },
  {
    titulo: "Caribe Todo Incluido & Miami",
    subtitulo: "Punta Cana, Cancún, Aruba, Curazao y Cartagena",
    precio: "Desde $699",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80",
    href: "/caribe",
  },
  {
    titulo: "Europa Clásica & Turquía",
    subtitulo: "Circuitos de 10 a 20 días con guía en español",
    precio: "Desde $1,490",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",
    href: "/europa-turquia",
  },
  {
    titulo: "Cusco y Machu Picchu",
    subtitulo: "Paquetes de 3 a 6 días con tren e ingresos",
    precio: "Desde $299",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80",
    href: "/cusco",
  },
  {
    titulo: "Perú: Playas, Selva y Sierra",
    subtitulo: "Máncora, Punta Sal, Tarapoto, Arequipa e Iquitos",
    precio: "Desde $249",
    img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=900&q=80",
    href: "/peru",
  },
  {
    titulo: "Panamá + Medellín Combinado",
    subtitulo: "7 Días / 6 Noches · Vuelos Copa + Hoteles + Tours",
    precio: "Desde $799",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=900&q=80",
    href: "/paquetes/panama-medellin",
  },
  {
    titulo: "Cruceros por el Caribe y Europa",
    subtitulo: "Salidas desde Panamá y Cartagena sin visa EE. UU.",
    precio: "Desde $890",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80",
    href: "/cruceros",
  },
  {
    titulo: "Asesoría de Visas y Pasaporte",
    subtitulo: "EE. UU., Canadá, México, China y Pasaporte Urgente",
    precio: "Desde $45",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=900&q=80",
    href: "/visas",
  },
  {
    titulo: "Seguro Médico Schengen 30.000€",
    subtitulo: "Póliza oficial sin deducible para ingresar a Europa",
    precio: "Desde $29",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80",
    href: "/seguros",
  },
  {
    titulo: "Colegios, Institutos y Clubes Deportivos",
    subtitulo: "Promociones escolares, delegaciones y torneos",
    precio: "Desde $199",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",
    href: "/colegios",
  },
  {
    titulo: "Quinceañeras, Lunas de Miel y Peregrinaciones",
    subtitulo: "Disney, Europa, Tierra Santa y Bodas de Destino",
    precio: "Desde $990",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    href: "/luna-de-miel",
  },
  {
    titulo: "Viajes Corporativos para Empresas",
    subtitulo: "Vuelos ejecutivos, ferias y facturación RUC 20614914239",
    precio: "Atención B2B 24/7",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    href: "/empresas",
  },
];

const CLUSTERS_CONFIG: {
  id:
    | "mundiales"
    | "all-inclusive"
    | "cruceros"
    | "visas-seguros"
    | "tours"
    | "empresas"
    | "colegios-deportes"
    | "religiosos-eventos";
  titulo: string;
  sub: string;
}[] = [
  {
    id: "mundiales",
    titulo: "1. Paquetes Mundiales: Baratos vs. Lujo 5★ VIP",
    sub: "Europa, Turquía, Dubái, Egipto, Japón, Tailandia, EE. UU., Caribe, Sudamérica y Perú",
  },
  {
    id: "all-inclusive",
    titulo: "2. Resorts All Inclusive & Hoteles 5 Estrellas",
    sub: "Punta Cana, Cancún, Riviera Maya, Varadero, Aruba, Curaçao, San Andrés y Punta Sal",
  },
  {
    id: "cruceros",
    titulo: "3. Cruceros Internacionales y Sin Visa",
    sub: "Royal Caribbean, MSC, Norwegian y Disney desde Panamá, Cartagena, Miami y Barcelona",
  },
  {
    id: "visas-seguros",
    titulo: "4. Visas Consulares, Pasaporte Urgente y Seguros",
    sub: "Visa USA B1/B2, Canadá, México, China, Pasaporte Electrónico y Seguro Schengen 30.000€",
  },
  {
    id: "tours",
    titulo: "5. Tours, Excursiones y Circuitos Guiados",
    sub: "Machu Picchu, Valle Sagrado, Humantay, Paracas, Isla Saona, Xcaret, Capadocia y Disney",
  },
  {
    id: "empresas",
    titulo: "6. Empresas, Corporativos, Ferias y Congresos (RUC 20)",
    sub: "Pasajes corporativos, Feria de Cantón en China, PERUMIN, hoteles ejecutivos y viajes de incentivos",
  },
  {
    id: "colegios-deportes",
    titulo: "7. Colegios, Institutos, Academias y Clubes Deportivos",
    sub: "Viajes de promoción escolar, estudios universitarios y delegaciones deportivas a torneos",
  },
  {
    id: "religiosos-eventos",
    titulo: "8. Peregrinaciones Religiosas, Quinceañeras y Lunas de Miel",
    sub: "Tierra Santa, Roma y Vaticano, Santuarios Marianos, Quinceañeras y Bodas en la Playa",
  },
];

export default function DirectorioMaestroPage() {
  const destinosDestacados = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];
  const rutasPrincipales = RUTAS_VUELOS_SEO.slice(0, 36);
  const serviciosDestacados = VIAJES_ESPECIALIZADOS_SEO.slice(0, 24);
  const inicialesBuscador = TODOS_LOS_RESUMENES_OFERTAS_SEO.slice(0, 24).map((o, idx) => {
    const galeria = obtenerGaleriaPorTexto(`${o.titulo} ${o.destinoOPais} ${o.slug}`);
    return {
      slug: o.slug,
      url: `/ofertas/${o.slug}`,
      titulo: o.titulo,
      destinoOPais: o.destinoOPais,
      cluster: o.cluster,
      clusterNombre: o.clusterNombre,
      precioDesdeUSD: o.precioDesdeUSD,
      img: galeria[idx % 3] || galeria[0],
    };
  });
  const waUrl =
    "https://wa.me/51944103890?text=" +
    encodeURIComponent(
      "¡Hola Cityland Travel! Vi su catálogo de destinos y quiero cotizar mi próximo viaje."
    );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Visual */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1400&q=80"
              alt="Catálogo de Destinos Cityland Travel"
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
                🌍 Cityland Travel E.I.R.L. · RUC 20614914239 · +10,000 Rutas y Programas
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-4">
                Catálogo Oficial de Destinos, Vuelos, España, Italia y Experiencias
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Explora más de 10,000 programas verificados a Madrid, Barcelona, Roma, Venecia, Florencia, circuitos por Europa, resorts Todo Incluido con nombre propio, cruceros y salidas desde todas las ciudades del Perú. Separa hoy con el 50% de inicial.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-4 rounded-2xl shadow-xl text-sm sm:text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Cotizar por WhatsApp (+51 944 103 890)</span>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
          {/* 0. Buscador Instantáneo de las +10,000 Páginas */}
          <BuscadorCatalogoInstantaneo
            itemsIniciales={inicialesBuscador}
            totalInicial={10003}
          />

          {/* 1. Divisiones Comerciales con Fotografías Reales */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Especialidades Cityland Travel
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                Nuestras Divisiones de Viaje
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <span className="absolute top-3 right-3 bg-white/95 text-[#0a1628] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                      {div.precio}
                    </span>
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <h3 className="text-base font-extrabold leading-snug">
                        {div.titulo}
                      </h3>
                      <p className="text-xs text-slate-200 mt-0.5 line-clamp-1">
                        {div.subtitulo}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white flex items-center justify-between text-xs font-bold text-[#0a1628]">
                    <span>Explorar programas</span>
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                      Ver más →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 2. Paquetes Destacados con Imágenes */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Europa, Caribe, Norteamérica y Sudamérica
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                Paquetes Turísticos Más Solicitados
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinosDestacados.map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinos/${d.slug}`}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={d.img}
                      alt={d.alt || d.ciudad}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full">
                      <FlagIcon pais={d.pais} className="w-3.5 h-2.5" />
                      <span>{d.pais}</span>
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-lg font-extrabold leading-tight">
                        {d.ciudad}
                      </h3>
                      <p className="text-xs text-amber-300 font-semibold">
                        {d.duracion}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Paquete desde
                      </span>
                      <span className="text-xl font-extrabold text-[#0a1628]">
                        ${d.turistico}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                      Ver itinerario →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 3. Los 8 Clusters de las +9,000 Landings Comerciales (/ofertas/[slug]) */}
          <section className="space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Cobertura Mundial, Europa, Hoteles 5★, Provincias y Grupos
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight">
                Catálogo Especializado por Producto y Tipo de Viajero (+9,020 Ofertas)
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CLUSTERS_CONFIG.map((cl) => {
                const itemsCluster = TODOS_LOS_RESUMENES_OFERTAS_SEO.filter(
                  (x) => x.cluster === cl.id
                );
                return (
                  <div
                    key={cl.id}
                    className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-extrabold text-[#0a1628]">
                          {cl.titulo}
                        </h3>
                        <span className="bg-red-50 text-red-600 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shrink-0">
                          {itemsCluster.length.toLocaleString("es-PE")} programas
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-4">{cl.sub}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                        {itemsCluster.slice(0, 12).map((it, idx) => {
                          const galeria = obtenerGaleriaPorTexto(
                            `${it.titulo} ${it.destinoOPais} ${it.slug}`
                          );
                          const thumb = galeria[idx % 3] || galeria[0];
                          return (
                            <Link
                              key={it.slug}
                              href={`/ofertas/${it.slug}`}
                              className="group flex items-center gap-2.5 bg-slate-50 hover:bg-red-50/70 p-2 rounded-xl border border-slate-200/70 transition-colors"
                            >
                              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                                <Image
                                  src={thumb}
                                  alt={it.titulo}
                                  fill
                                  sizes="48px"
                                  className="object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="font-bold text-[#0a1628] group-hover:text-red-600 line-clamp-2 leading-tight block">
                                  {it.titulo}
                                </span>
                                <span className="text-[11px] font-extrabold text-emerald-700 mt-0.5 block">
                                  Desde ${it.precioDesdeUSD}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Rutas Aéreas Frecuentes y Guías del Viajero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Boletos Aéreos con Impuestos Incluidos
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4">
                Rutas de Vuelos Más Cotizadas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {rutasPrincipales.map((r, idx) => {
                  const galeria = obtenerGaleriaPorTexto(`${r.destino} ${r.slug}`);
                  const thumb = galeria[idx % 3] || galeria[0];
                  return (
                    <Link
                      key={r.slug}
                      href={`/vuelos/${r.slug}`}
                      className="group flex items-center justify-between gap-2.5 bg-slate-50 hover:bg-red-50/70 p-2 rounded-xl border border-slate-200/70 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                          <Image
                            src={thumb}
                            alt={`Vuelos a ${r.destino}`}
                            fill
                            sizes="44px"
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <span className="font-bold text-slate-800 group-hover:text-red-600 truncate">
                          ✈️ {r.origen} → {r.destino}
                        </span>
                      </div>
                      <span className="font-extrabold text-[#0a1628] shrink-0 pr-1">
                        ${r.precioDesdeUSD}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                  Blog y Consejos Oficiales
                </span>
                <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4">
                  Guías para Viajeros Peruanos
                </h2>
                <div className="space-y-3">
                  {BLOG_POSTS.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/blog/${b.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                    >
                      <div className="relative w-16 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                        <Image
                          src={b.imagen}
                          alt={b.titulo}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase text-red-600 block">
                          {b.categoria} · {b.lectura}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-[#0a1628] line-clamp-2 leading-snug">
                          {b.titulo}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-xs font-bold uppercase text-slate-400 block mb-2.5">
                  Servicios y Equipaje Especializado
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {serviciosDestacados.slice(0, 10).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/viajes/${s.slug}`}
                      className="text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      {s.destinoOPais}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
