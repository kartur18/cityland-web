import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import {
  EMPRESA_DIRECCION,
  EMPRESA_HORARIO,
  EMPRESA_RUC,
  TELEFONO_FORMATEADO,
  waLink,
} from "@/components/constantes";
import {
  AGENCIAS_LOCALES_SEO,
  buscarAgenciaLocal,
} from "@/lib/catalogo-agencias-locales";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return AGENCIAS_LOCALES_SEO.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);
  if (!agencia) return {};

  const url = `https://citylandtravel.com/agencia/${agencia.slug}`;

  return {
    title: agencia.metaTitle,
    description: agencia.metaDescription,
    keywords: [
      `agencia de viajes en ${agencia.zona.toLowerCase()}`,
      `vuelos y paquetes desde ${agencia.zona.toLowerCase()}`,
      `pasajes aereos en ${agencia.zona.toLowerCase()}`,
      `viajes a espana y caribe desde ${agencia.zona.toLowerCase()}`,
      "cityland travel",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: agencia.metaTitle,
      description: agencia.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
    },
  };
}

const PAQUETES_DESTACADOS_SEDE = [
  {
    titulo: "Especial España: Madrid & Barcelona",
    pais: "España",
    subtitulo: "Vuelo + Reserva Hotel + Seguro Schengen 30.000€",
    precio: "$890",
    mitad: "$445",
    tag: "Ruta #1 Europa",
    tagBg: "bg-red-600 text-white",
    img: "/images/espana/gran-via-metropolis.jpg",
    href: "/espana",
  },
  {
    titulo: "Punta Cana Resort 5★ Todo Incluido",
    pais: "República Dominicana",
    subtitulo: "5 Días / 4 Noches · Comidas y Bebidas 24h + Isla Saona",
    precio: "$1,099",
    mitad: "$550",
    tag: "All Inclusive 24h",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80",
    href: "/destinos/punta-cana",
  },
  {
    titulo: "Cancún & Riviera Maya Todo Incluido",
    pais: "México",
    subtitulo: "5 Días / 4 Noches · Resort Zona Hotelera + Chichén Itzá",
    precio: "$1,049",
    mitad: "$525",
    tag: "Playa & Cultura",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=900&q=80",
    href: "/destinos/cancun",
  },
  {
    titulo: "Cartagena de Indias + Isla Barú",
    pais: "Colombia",
    subtitulo: "4 Días / 3 Noches · Viaja Solo con tu DNI Peruano",
    precio: "$699",
    mitad: "$350",
    tag: "Solo con DNI",
    tagBg: "bg-amber-600 text-white",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=900&q=80",
    href: "/destinos/cartagena",
  },
  {
    titulo: "Turquía Mágica: Estambul & Capadocia",
    pais: "Turquía",
    subtitulo: "10 Días / 9 Noches · Sin Visa para Peruanos",
    precio: "$1,790",
    mitad: "$895",
    tag: "Exótico Sin Visa",
    tagBg: "bg-purple-600 text-white",
    img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=900&q=80",
    href: "/destinos/turquia",
  },
  {
    titulo: "Cusco Imperial, Valle Sagrado & Machu Picchu",
    pais: "Perú",
    subtitulo: "4 Días / 3 Noches · Vuelos + Tren + Entrada Oficial",
    precio: "$329",
    mitad: "$165",
    tag: "Top Nacional",
    tagBg: "bg-blue-600 text-white",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=900&q=80",
    href: "/cusco",
  },
];

export default async function AgenciaLocalPage({ params }: Props) {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);

  if (!agencia) {
    notFound();
  }

  const urlWa = waLink(agencia.waMensaje);
  const cercanas = AGENCIAS_LOCALES_SEO.filter(
    (a) => a.region === agencia.region && a.slug !== agencia.slug
  ).slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://citylandtravel.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `Agencia de Viajes — ${agencia.zona}`,
            item: `https://citylandtravel.com/agencia/${agencia.slug}`,
          },
        ],
      },
      {
        "@type": "TravelAgency",
        name: `Cityland Travel — Atención a Viajeros de ${agencia.zona}`,
        url: `https://citylandtravel.com/agencia/${agencia.slug}`,
        telephone: "+51944103890",
        taxID: EMPRESA_RUC,
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: agencia.zona,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Antúnez de Mayolo N. 814",
          addressLocality: "Los Olivos",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 1. HERO LUMINOSO ESTILO AEROLÍNEA CON TARJETA VISUAL */}
      <section className="bg-gradient-to-b from-sky-50/70 via-white to-white pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-5"
          >
            <Link href="/" className="hover:text-[#0a1628] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/directorio" className="hover:text-[#0a1628] transition-colors">
              Cobertura en Perú
            </Link>
            <span>/</span>
            <span className="text-[#0a1628] font-bold">{agencia.zona}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-4">
                <FlagIcon pais="Perú" className="w-3.5 h-2.5" />
                <span>
                  Cobertura en {agencia.zona} ({agencia.region}) · RUC {EMPRESA_RUC}
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl lg:text-[60px] text-[#0a1628] tracking-tight leading-[0.96] mb-4">
                AGENCIA DE VIAJES PARA PASAJEROS DE{" "}
                <span className="text-red-600">{agencia.zona.toUpperCase()}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 max-w-2xl">
                {agencia.tiempoAtencion}.{" "}
                <strong className="text-[#0a1628] font-bold">
                  Emitimos boletos aéreos con código PNR verificable, paquetes Todo Incluido y carpeta migratoria europea.
                </strong>
              </p>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 max-w-2xl">
                {agencia.tipoZona === "lima-callao"
                  ? `Atendemos a viajeros de ${agencia.zona} tanto por nuestro WhatsApp oficial (${TELEFONO_FORMATEADO}) como presencialmente en nuestra sede de ${EMPRESA_DIRECCION} (${EMPRESA_HORARIO}).`
                  : `Atendemos a viajeros de ${agencia.zona} (${agencia.region}) con boletos integrados vía Lima hacia Europa, EE. UU. y el Caribe, entrega digital inmediata de documentos y atención presencial en nuestra sede de Lima.`}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <a
                  href={urlWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar desde {agencia.zona} por WhatsApp</span>
                </a>
                <a
                  href="#catalogo-local"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl font-bold text-sm transition-colors"
                >
                  <span>Ver Paquetes y Precios</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Tarifas en USD con impuestos
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Separa con 50% de inicial
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Boleta y Factura Electrónica
                </span>
              </div>
            </div>

            {/* Tarjeta Visual Derecha */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/espana/palacio-real.jpg"
                    alt={`Viajes a Europa y el Caribe desde ${agencia.zona} — Cityland Travel`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais="España" className="w-3.5 h-2.5" />
                      Europa · Caribe · Perú
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      Atención {agencia.zona}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Central Oficial: {TELEFONO_FORMATEADO}
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      Vuelos, Resorts y Carpeta Migratoria
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Paquetes Internacionales y Nacionales
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#0a1628] leading-none">
                        $329
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      Atención en oficina Los Olivos y por WhatsApp
                    </span>
                  </div>

                  <a
                    href={urlWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Cotizar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATÁLOGO VISUAL DE PAQUETES CON IMÁGENES REALES */}
      <section id="catalogo-local" className="py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Programas Más Solicitados por Viajeros de {agencia.zona}
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-5xl text-[#0a1628] tracking-tight leading-none">
              DESTINOS INTERNACIONALES Y NACIONALES CON SALIDA CONFIRMADA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAQUETES_DESTACADOS_SEDE.map((item) => {
              const waItem = waLink(
                `¡Hola Cityland Travel! Les escribo desde ${agencia.zona} y deseo cotizar: ${item.titulo} (Desde ${item.precio} USD).`
              );
              return (
                <article
                  key={item.titulo}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.img}
                      alt={item.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full">
                        <FlagIcon pais={item.pais} className="w-3.5 h-2.5" />
                        {item.pais}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${item.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <h3 className="text-lg font-extrabold leading-tight">{item.titulo}</h3>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                      {item.subtitulo}
                    </p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">
                          Tarifa Desde
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-[family-name:var(--font-bebas)] text-3xl text-[#0a1628] leading-none">
                            {item.precio}
                          </span>
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 block">
                          Separa con {item.mitad} USD (50%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={item.href}
                          className="text-xs font-bold text-slate-600 hover:text-[#0a1628] px-3 py-2 rounded-xl border border-slate-200"
                        >
                          Detalles
                        </Link>
                        <a
                          href={waItem}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2.5 rounded-xl text-xs font-bold"
                        >
                          <WhatsAppIcon size={14} />
                          <span>Cotizar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PREGUNTAS FRECUENTES Y OFICINA CENTRAL */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-wide mb-4">
              PREGUNTAS FRECUENTES — VIAJEROS DE {agencia.zona.toUpperCase()}
            </h2>
            {[
              {
                q: `¿Cómo reservo mi viaje desde ${agencia.zona} con Cityland Travel?`,
                a: `Escríbenos a nuestro WhatsApp oficial (${TELEFONO_FORMATEADO}) o visítanos en nuestra oficina física en ${EMPRESA_DIRECCION}. Puedes congelar tu paquete promocional en dólares con el 50% de inicial y recibir tus códigos de reserva (PNR) verificables en aerolínea.`,
              },
              {
                q: `¿Emiten boletos conectados si viajo desde ${agencia.zona} al extranjero?`,
                a:
                  agencia.tipoZona === "provincia"
                    ? `Sí. Si sales desde ${agencia.zona} (${agencia.region}), gestionamos tu itinerario conectado vía Lima hacia Madrid, Barcelona, Roma, Miami, Cancún o Punta Cana respetando tu franquicia de equipaje internacional.`
                    : `Sí. Emitimos vuelos directos y con conexión desde el Aeropuerto Internacional Jorge Chávez hacia España, Europa, Estados Unidos, el Caribe y todos los destinos del Perú.`,
              },
              {
                q: "¿Qué respaldo legal ofrece la agencia?",
                a: `Somos Cityland Travel E.I.R.L. con RUC activo ${EMPRESA_RUC}, sede propia en Los Olivos y emisión de boleta o factura electrónica SUNAT en cada reserva.`,
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-2xl bg-slate-50 p-5 border border-slate-200/80"
              >
                <h3 className="font-extrabold text-[#0a1628] text-sm mb-2">
                  {f.q}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-[#0a1628] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold px-3 py-1 rounded-full mb-4">
              ● Oficina Física y Atención Digital
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide mb-2">
              SEDE PRINCIPAL CITYLAND TRAVEL
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              Puedes gestionar tu reserva 100% en línea desde {agencia.zona} o visitarnos presencialmente en nuestra oficina principal de Lima Norte.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5 space-y-2 text-xs text-slate-200">
              <p>
                <strong className="text-white">Razón Social:</strong> Cityland Travel E.I.R.L.
              </p>
              <p>
                <strong className="text-white">RUC:</strong> {EMPRESA_RUC}
              </p>
              <p>
                <strong className="text-white">Oficina:</strong> {EMPRESA_DIRECCION}
              </p>
              <p>
                <strong className="text-white">Horario:</strong> {EMPRESA_HORARIO}
              </p>
              <p>
                <strong className="text-white">WhatsApp:</strong> {TELEFONO_FORMATEADO}
              </p>
            </div>
            <a
              href={urlWa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-lg cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Escribir al WhatsApp Oficial</span>
            </a>
          </div>
        </div>

        {cercanas.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-200/80">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
              Otras Zonas de Cobertura en {agencia.region}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cercanas.map((c) => (
                <Link
                  key={c.slug}
                  href={`/agencia/${c.slug}`}
                  className="text-xs font-semibold text-slate-600 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  Agencia de Viajes en {c.zona}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
