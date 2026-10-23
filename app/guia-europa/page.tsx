import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import { textoPrecio } from "@/lib/formato-precio";
import { PLANES_MIGRATORIOS_OFICIALES } from "@/lib/catalogo-paquetes-migratorios-1000";
import { formatoUSD } from "@/lib/formato-precio";
import { listaPreciosPlanes, tarifasMigratorio } from "@/lib/precios-migratorio";

const TARIFAS_ITALIA_FRANCIA = tarifasMigratorio("Italia");
import {
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";

const rawTitle = "Guía Viajar a España, Italia y Francia desde Perú 2026 | Cityland Travel";
const rawDesc =
  "Paquetes migratorios y requisitos para viajar a España, Italia y Francia desde Perú: planes de $699, $799, $899 y $999 USD, bolsa de viaje BOE y seguro 30.000€.";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO(rawTitle),
  description: optimizarMetaDescriptionSEO(rawDesc),
  alternates: {
    canonical: "https://citylandtravel.com/guia-europa",
  },
};

const RUTAS_PRINCIPALES = [
  {
    pais: "España",
    titulo: "Paquetes Migratorios a España",
    ciudades: "Madrid, Barcelona, Valencia, Sevilla, Zaragoza, Málaga y Bilbao",
    img: "/images/espana/gran-via-metropolis.jpg",
    href: "/espana",
    precio: "Desde $699 USD",
  },
  {
    pais: "Italia",
    titulo: "Paquetes Migratorios a Italia",
    ciudades: "Milán, Roma, Turín, Florencia, Bolonia, Génova y Venecia",
    img: "/images/destinos/milan.webp",
    href: "/italia",
    precio: `Desde ${formatoUSD(tarifasMigratorio("Italia").promo)} USD`,
  },
  {
    pais: "Francia",
    titulo: "Paquetes Migratorios a Francia",
    ciudades: "París, Lyon, Marsella, Niza, Toulouse y Burdeos",
    img: "/images/destinos/paris.webp",
    href: "/francia",
    precio: `Desde ${formatoUSD(tarifasMigratorio("Francia").promo)} USD`,
  },
];

const FAQS_GUIA_EUROPA = [
  {
    q: "¿De qué depende que el paquete a Europa cueste $699, $799, $899 o $999?",
    a: `Depende de tu fecha de viaje: $699 USD aplica comprando con anticipación para fines de Febrero, Marzo, Abril y Mayo. $799 USD (Plan Smart) aplica para Junio, Septiembre, Octubre y Noviembre. $899 USD (Plan Plus) es para salidas cercanas o con conexión, y $999 USD (Plan Full) es para temporada alta (Diciembre, Julio y Agosto) o incluye maleta de 23 kg en bodega. Esos montos son de España; para Italia y Francia los planes van desde ${listaPreciosPlanes(TARIFAS_ITALIA_FRANCIA)} USD.`,
  },
  {
    q: "¿Qué incluye exactamente la Carpeta Migratoria?",
    a: "Incluye los 5 documentos que revisan en Lima y en Migraciones de Europa: 1) Tu pasaje de avión de ida emitido, 2) Tu boleto de regreso reservado en sistema 24h antes, 3) Tu reserva de hotel confirmada (o ajuste con tu Carta de Invitación), 4) Tu seguro médico Schengen de 30.000€ sin deducible, y 5) Tu check-in hecho 24h antes con guía paso a paso.",
  },
  {
    q: "¿Cuánto es la bolsa de viaje recomendada para entrar a Europa?",
    a: "En España la referencia oficial del BOE es de 122,10 € por día de estancia (con un mínimo de 1.098,90 € por persona). En nuestra oficina de Los Olivos te asesoramos sobre cuántos días declarar en tu itinerario para cumplir cómodamente con este requisito.",
  },
  {
    q: "¿Cómo funciona la separación con el 50%?",
    a: "Congelas tu tarifa abonando el 50% de inicial ($350 USD en el plan de $699, $400 USD en el plan de $799, $450 USD en el plan de $899 o $500 USD en el plan de $999) y pagas la otra mitad antes de tu fecha de vuelo.",
  },
];

export default function GuiaEuropaPage() {
  const waGeneral = `https://wa.me/51944103890?text=${encodeURIComponent(
    "¡Hola! Quiero más información del paquete migratorio a Europa desde $699.\n\n📍 Ref Web: citylandtravel.com/guia-europa"
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen text-[#0a1628] antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO CON IMAGEN REAL Y JERARQUÍA CLARA */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white pt-10 pb-14 sm:pt-14 sm:pb-18 border-b-4 border-amber-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400/15 border border-amber-400/35 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-amber-300 mb-4">
                  <FlagIcon pais="España" className="w-4 h-3" />
                  <FlagIcon pais="Italia" className="w-4 h-3" />
                  <FlagIcon pais="Francia" className="w-4 h-3" />
                  <span>Especialistas en España, Italia y Francia · RUC 20614914239</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-4">
                  Guía y Paquetes para Viajar a{" "}
                  <span className="text-amber-400">España, Italia y Francia</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-2xl">
                  Viaja con los <strong className="text-white">5 documentos obligatorios</strong> listos: pasaje de avión de ida emitido, boleto de regreso reservado para Migraciones, reserva de hotel confirmada, seguro médico de 30.000€ y check-in 24h antes.{" "}
                  <strong className="text-amber-300">Separa hoy con el 50% de inicial.</strong>
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={waGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-lg whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                  <a
                    href="#planes"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-3.5 rounded-xl text-sm whitespace-nowrap transition-colors"
                  >
                    Ver Planes (desde $699 a $999) ↓
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl">
                  <Image
                    src="/images/espana/palacio-real.jpg"
                    alt="Viajar a España, Italia y Francia desde Perú"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 block">
                        Salidas desde Lima (LIM)
                      </span>
                      <span className="text-base sm:text-lg font-black text-white">
                        Madrid · Barcelona · Milán · Roma · París
                      </span>
                    </div>
                    <span className="bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-lg shrink-0">
                      Desde $699
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOS 4 PLANES OFICIALES ($699, $799, $899, $999) */}
        <section id="planes" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Precios Claros Según tu Fecha
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628]">
              Elige tu Plan Migratorio a Europa
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Tarifas de España. Para Italia y Francia los planes van desde {listaPreciosPlanes(TARIFAS_ITALIA_FRANCIA)} USD.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANES_MIGRATORIOS_OFICIALES.map((p) => {
              const waHref = `https://wa.me/51944103890?text=${encodeURIComponent(
                `${p.mensajeWhatsAppBase} a Europa.\n\n📍 Ref Web: citylandtravel.com/guia-europa [${p.nombre} $${p.precioUSD}]`
              )}`;

              return (
                <div
                  key={p.id}
                  className={`rounded-2xl bg-white p-6 flex flex-col justify-between transition-all ${
                    p.destacado
                      ? "border-2 border-[#0a1628] shadow-xl"
                      : "border border-slate-200 shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md ${
                          p.destacado
                            ? "bg-amber-400 text-slate-950"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {p.etiqueta}
                      </span>
                      <span className="text-xs font-bold text-emerald-700">
                        Separa desde ${p.separaConUSD}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#0a1628]">{p.nombre}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 mb-4">{p.temporada}</p>

                    <div className="flex items-baseline gap-1 mb-5 pb-4 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-400">Desde</span>
                      <span className="text-4xl font-black text-[#0a1628]">
                        ${p.precioUSD}
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {p.incluye.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-slate-700 leading-snug"
                        >
                          <span className="text-emerald-600 font-black shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xs transition-all whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Cotizar este plan</span>
                  </a>
                </div>
              );
            })}
          </div>
          <NotaPrecio className="mt-5 text-center" />
        </section>

        {/* 3. RUTAS POR PAÍS CON FOTOS REALES ÚNICAS */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Destinos Principales en Europa
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0a1628]">
                Explora Nuestras Rutas por País
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RUTAS_PRINCIPALES.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={r.img}
                      alt={r.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais={r.pais} className="w-3.5 h-2.5" />
                      <span>{r.pais}</span>
                    </span>
                    <span className="absolute top-3.5 right-3.5 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                      {r.precio}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <h3 className="text-xl font-black text-[#0a1628] group-hover:text-red-600 transition-colors mb-1">
                        {r.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {r.ciudades}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-extrabold text-[#0a1628]">
                      <span>Separa con el 50% (desde $350 USD)</span>
                      <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                        Ver ciudades →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PREGUNTAS FRECUENTES */}
        <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628]">
              Preguntas Frecuentes sobre el Viaje a Europa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS_GUIA_EUROPA.map((f) => (
              <div
                key={f.q}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-2">
                  {textoPrecio(f.q)}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {textoPrecio(f.a)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
