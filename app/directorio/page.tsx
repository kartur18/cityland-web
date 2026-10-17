import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, BLOG_POSTS } from "@/components/constantes";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";

export const metadata: Metadata = {
  title: "Catálogo de Destinos, Vuelos y Servicios Turísticos | Cityland Travel",
  description:
    "Explora todos los destinos, paquetes turísticos y servicios de Cityland Travel (RUC 20614914239): España, Europa, Caribe Todo Incluido, Cusco, Sudamérica, Visas y Seguros Schengen.",
  alternates: {
    canonical: "https://citylandtravel.com/directorio",
  },
};

const DIVISIONES_VISUALES = [
  {
    titulo: "España y Carpeta de Viaje",
    subtitulo: "Madrid, Barcelona, Valencia y más",
    precio: "Desde $890 USD",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80",
    href: "/espana",
  },
  {
    titulo: "Caribe Todo Incluido & Miami",
    subtitulo: "Punta Cana, Cancún, Aruba, Curazao y Cartagena",
    precio: "Desde $699 USD",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80",
    href: "/caribe",
  },
  {
    titulo: "Europa Clásica & Turquía",
    subtitulo: "Circuitos de 10 a 20 días con guía en español",
    precio: "Desde $1,490 USD",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",
    href: "/europa-turquia",
  },
  {
    titulo: "Cusco y Machu Picchu",
    subtitulo: "Paquetes de 3 a 6 días con tren e ingresos",
    precio: "Desde $299 USD",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80",
    href: "/cusco",
  },
  {
    titulo: "Perú: Playas, Selva y Sierra",
    subtitulo: "Máncora, Punta Sal, Tarapoto, Arequipa e Iquitos",
    precio: "Desde $249 USD",
    img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=900&q=80",
    href: "/peru",
  },
  {
    titulo: "Panamá + Medellín Combinado",
    subtitulo: "7 Días / 6 Noches · Vuelos Copa + Hoteles + Tours",
    precio: "Desde $799 USD",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=900&q=80",
    href: "/paquetes/panama-medellin",
  },
  {
    titulo: "Cruceros por el Caribe y Europa",
    subtitulo: "Salidas desde Panamá y Cartagena sin visa EE. UU.",
    precio: "Desde $990 USD",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80",
    href: "/cruceros",
  },
  {
    titulo: "Asesoría de Visas (EE. UU., Canadá, México)",
    subtitulo: "Formulario DS-160, citas y preparación de entrevista",
    precio: "Desde $120 USD",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=900&q=80",
    href: "/visas",
  },
  {
    titulo: "Seguro Médico Schengen 30.000€",
    subtitulo: "Póliza oficial sin deducible para ingresar a Europa",
    precio: "Desde $65 USD",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80",
    href: "/seguros",
  },
  {
    titulo: "Promociones Escolares",
    subtitulo: "Primaria y secundaria con contrato formal y tour conductor",
    precio: "Desde $265 USD",
    img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=900&q=80",
    href: "/colegios",
  },
  {
    titulo: "Viajes de Quinceañeras y Lunas de Miel",
    subtitulo: "Disney, Europa 15 Años, Bodas Destino y Escapadas",
    precio: "Desde $1,190 USD",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    href: "/luna-de-miel",
  },
  {
    titulo: "Viajes Corporativos para Empresas",
    subtitulo: "Vuelos ejecutivos, ferias y facturación RUC 20614914239",
    precio: "Atención Ejecutiva",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    href: "/empresas",
  },
];

export default function DirectorioMaestroPage() {
  const destinosDestacados = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];
  const rutasPrincipales = RUTAS_VUELOS_SEO.slice(0, 36);
  const serviciosDestacados = VIAJES_ESPECIALIZADOS_SEO.slice(0, 24);
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
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80"
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
                🌍 Cityland Travel E.I.R.L. · RUC 20614914239
              </span>
              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-4">
                Catálogo Oficial de Destinos, Vuelos y Experiencias
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Explora nuestras divisiones especializadas, paquetes turísticos Todo Incluido y rutas aéreas con salida desde Lima. Congela tu tarifa promocional abonando el 50% de inicial.
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
          {/* 1. Divisiones Comerciales con Fotografías Reales */}
          <section>
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Especialidades Cityland Travel
              </span>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] leading-none">
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
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] leading-none">
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
                    <span className="absolute top-3 left-3 bg-white/95 text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full">
                      {d.bandera} {d.pais}
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
                      <span className="text-xl font-black text-[#0a1628]">
                        ${d.turistico} USD
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

          {/* 3. Rutas Aéreas Frecuentes y Guías del Viajero en Bloques Limpios */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Boletos Aéreos con Impuestos Incluidos
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4">
                Rutas de Vuelos Más Cotizadas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {rutasPrincipales.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/vuelos/${r.slug}`}
                    className="flex items-center justify-between bg-slate-50 hover:bg-red-50/70 px-3.5 py-2.5 rounded-xl border border-slate-200/70 transition-colors"
                  >
                    <span className="font-semibold text-slate-800 truncate pr-2">
                      ✈️ {r.origen} → {r.destino}
                    </span>
                    <span className="font-extrabold text-[#0a1628] shrink-0">
                      ${r.precioDesdeUSD} USD
                    </span>
                  </Link>
                ))}
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
