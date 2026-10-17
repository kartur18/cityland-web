import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  DESTINOS_EUROPA,
  DESTINOS_CARIBE,
  cotLink,
  waLink,
  EMPRESA_RUC,
  EMPRESA_DIRECCION,
  EMPRESA_HORARIO,
} from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const ALL_DESTINOS = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];

export function generateStaticParams() {
  return ALL_DESTINOS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = ALL_DESTINOS.find((d) => d.slug === slug);
  if (!dest) return { title: "Destino no encontrado" };

  const precioDesde = dest.migratorio ?? dest.turistico;
  const title = `Paquete a ${dest.ciudad} (${dest.pais}) Desde $${precioDesde.toLocaleString("en-US")} USD — Todo Organizado desde Lima | Cityland Travel`;
  const description = `${dest.descripcion} Paquetes a ${dest.ciudad} (${dest.duracion || "5 Días / 4 Noches"}) saliendo desde Lima Desde $${precioDesde.toLocaleString("en-US")} USD. Separa hoy con el 50% en Cityland Travel (RUC ${EMPRESA_RUC}).`;
  const canonicalUrl = `https://citylandtravel.com/destinos/${dest.slug}`;

  return {
    title,
    description,
    keywords: [
      `paquetes a ${dest.ciudad.toLowerCase()} desde lima`,
      `viajes a ${dest.ciudad.toLowerCase()} todo incluido`,
      `vuelos y hotel a ${dest.ciudad.toLowerCase()} precio en dolares`,
      `tours a ${dest.ciudad.toLowerCase()} ${dest.pais.toLowerCase()}`,
      `agencia de viajes ${dest.ciudad.toLowerCase()} peru`,
      "cityland travel",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Cityland Travel",
      images: [
        {
          url: dest.img.startsWith("http")
            ? dest.img
            : `https://citylandtravel.com${dest.img}`,
          width: 1200,
          height: 630,
          alt: dest.alt,
        },
      ],
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        dest.img.startsWith("http")
          ? dest.img
          : `https://citylandtravel.com${dest.img}`,
      ],
    },
  };
}

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = ALL_DESTINOS.find((d) => d.slug === slug);
  if (!dest) notFound();

  const catWa = dest.tipo === "europa" ? "europa" : "caribe";
  const precioPrincipal = dest.migratorio ?? dest.turistico;
  const mitadPrecio = Math.round(precioPrincipal * 0.5);

  // Garantizamos que las fotos de galería nunca repitan la foto del Hero
  const fotosGaleria = (dest.gallery || [])
    .filter((g, idx, arr) => g && g !== dest.img && arr.indexOf(g) === idx)
    .slice(0, 3);

  const idxDest = ALL_DESTINOS.findIndex((d) => d.slug === slug);
  const otrosDestinos: typeof ALL_DESTINOS = [];
  for (let i = 1; i < ALL_DESTINOS.length && otrosDestinos.length < 3; i++) {
    const cand = ALL_DESTINOS[(Math.max(0, idxDest) + i) % ALL_DESTINOS.length];
    if (cand && cand.slug !== slug && cand.img !== dest.img) {
      otrosDestinos.push(cand);
    }
  }

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
            name: `Paquete a ${dest.ciudad}`,
            item: `https://citylandtravel.com/destinos/${dest.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        name: `Paquete de Viaje a ${dest.ciudad}, ${dest.pais} (${dest.duracion || "5 Días / 4 Noches"})`,
        description: dest.descripcion,
        image: dest.img.startsWith("http")
          ? dest.img
          : `https://citylandtravel.com${dest.img}`,
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(precioPrincipal),
          availability: "https://schema.org/InStock",
          url: `https://citylandtravel.com/destinos/${dest.slug}`,
          seller: {
            "@type": "TravelAgency",
            name: "Cityland Travel E.I.R.L.",
          },
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

      {/* 1. HERO ESTILO AEROLÍNEA / AGENCIA MODERNA (Sin imágenes gigantes duplicadas) */}
      <section className="bg-gradient-to-b from-sky-50/70 via-white to-white pt-6 pb-12 sm:pt-10 sm:pb-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Migas de pan */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-5"
          >
            <Link href="/" className="hover:text-[#0a1628] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href={dest.tipo === "europa" ? "/espana" : "/caribe"}
              className="hover:text-[#0a1628] transition-colors"
            >
              {dest.tipo === "europa" ? "Europa & Exóticos" : "Caribe & América"}
            </Link>
            <span>/</span>
            <span className="text-[#0a1628] font-bold truncate">{dest.ciudad}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Columna Izquierda: Información Comercial Clara */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-4">
                <FlagIcon pais={dest.pais} className="w-4 h-3" />
                <span>{dest.pais}</span>
                {dest.duracion && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="text-red-600 font-extrabold">{dest.duracion}</span>
                  </>
                )}
                {dest.tag && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-700 font-extrabold">{dest.tag}</span>
                  </>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                Paquete de Viaje a{" "}
                <span className="text-red-600">{dest.ciudad}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                {dest.descripcion}
              </p>

              {/* Chips de Inclusión Rápida */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-7">
                {(
                  dest.inclusionesLista ?? [
                    "Boleto aéreo ida y vuelta desde Lima",
                    `Alojamiento verificado en ${dest.ciudad}`,
                    "Traslados aeropuerto – hotel – aeropuerto",
                    dest.tipo === "europa"
                      ? "Seguro Schengen 30.000€ incluido"
                      : "Tarjeta de asistencia médica internacional",
                    "Desayunos o régimen Todo Incluido",
                    "Soporte 24/7 por WhatsApp",
                  ]
                )
                  .slice(0, 6)
                  .map((inc) => (
                    <div
                      key={inc}
                      className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700"
                    >
                      <span className="text-emerald-600 font-extrabold shrink-0">✓</span>
                      <span className="truncate">{inc.replace(/^[^\wÁÉÍÓÚáéíóúÑñ]+\s*/, "")}</span>
                    </div>
                  ))}
              </div>

              {/* Botones Principales */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={cotLink(
                    dest.ciudad,
                    dest.migratorio ? "Paquete Migratorio / Turístico" : "Paquete Completo",
                    precioPrincipal,
                    catWa
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>
                    Cotizar {dest.ciudad} (Desde ${precioPrincipal.toLocaleString("en-US")} USD)
                  </span>
                </a>
                <a
                  href="#itinerario-detallado"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl font-bold text-sm transition-colors"
                >
                  <span>Ver Itinerario y Tarifas</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Visual del Destino + Precio Oficial */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={dest.img}
                    alt={dest.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais={dest.pais} className="w-3.5 h-2.5" />
                      {dest.pais}
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      Separa con 50%
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      {dest.duracion || "Salidas Confirmadas desde Lima"}
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      {dest.ciudad} — Vuelo + Hotel + Asistencia
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Tarifa por pasajero (Impuestos incluidos)
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#0a1628] leading-none">
                        ${precioPrincipal.toLocaleString("en-US")}
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                      {dest.regularPrice && (
                        <span className="text-xs text-slate-400 line-through ml-1">
                          ${dest.regularPrice.toLocaleString("en-US")}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      Separa hoy con ${mitadPrecio.toLocaleString("en-US")} USD (50% inicial)
                    </span>
                  </div>

                  <a
                    href={cotLink(dest.ciudad, "Paquete", precioPrincipal, catWa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Reservar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. MOSAICO COMPACTO DE 3 FOTOS DISTINTAS AL HERO (Cero duplicidad) */}
          {fotosGaleria.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-200/70">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Postales y Experiencias en {dest.ciudad}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Salidas verificadas desde Lima (LIM)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {fotosGaleria.map((imgUrl, i) => (
                  <div
                    key={imgUrl}
                    className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs group bg-slate-100"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${dest.ciudad} — Vista destacada ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white drop-shadow-xs">
                      {dest.ciudad} · Experiencia #{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. MODALIDADES, ITINERARIO DETALLADO Y COTIZADOR LATERAL */}
      <section id="itinerario-detallado" className="py-12 sm:py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Principal (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tarjetas de Modalidades de Precio */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Opciones de Reserva en Dólares
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-5">
                Modalidades Disponibles para {dest.ciudad}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.migratorio && (
                  <div className="rounded-2xl border-2 border-blue-600/20 bg-blue-50/40 p-5 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2.5">
                        Especial Carpeta Migratoria
                      </span>
                      <h3 className="text-base font-extrabold text-[#0a1628] mb-1">
                        Vuelo + Carpeta Migratoria a {dest.ciudad}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {dest.migraDesc ||
                          "Boleto aéreo confirmado + Seguro Schengen 30.000€ + Reserva de alojamiento verificada y asesoría de ingreso."}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-blue-200/60 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">
                          Desde
                        </span>
                        <span className="text-2xl font-extrabold text-[#0a1628] leading-none">
                          ${dest.migratorio.toLocaleString("en-US")}{" "}
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </span>
                      </div>
                      <a
                        href={cotLink(dest.ciudad, "Paquete Migratorio", dest.migratorio, catWa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#0a1628] hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border-2 border-emerald-600/25 bg-emerald-50/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2.5">
                      {dest.turiLabel || "Paquete Turístico Completo"}
                    </span>
                    <h3 className="text-base font-extrabold text-[#0a1628] mb-1">
                      Programa Completo en {dest.ciudad} ({dest.duracion || "5 Días / 4 Noches"})
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {dest.turiDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-emerald-200/60 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-500 block">
                        Desde
                      </span>
                      <span className="text-2xl font-extrabold text-[#0a1628] leading-none">
                        ${dest.turistico.toLocaleString("en-US")}{" "}
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </span>
                    </div>
                    <a
                      href={cotLink(dest.ciudad, "Paquete Turístico", dest.turistico, catWa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>

                {!dest.migratorio && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2.5">
                        Facilidad de Pago
                      </span>
                      <h3 className="text-base font-extrabold text-[#0a1628] mb-1">
                        Reserva Flexible con el 50% de Inicial
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Congela tu tarifa aérea y hotelera abonando el 50% hoy y completa el saldo en cuotas programadas antes de tu viaje.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">
                          Inicial 50%
                        </span>
                        <span className="text-2xl font-extrabold text-emerald-700 leading-none">
                          ${Math.round(dest.turistico * 0.5).toLocaleString("en-US")}{" "}
                          <span className="text-xs font-bold text-slate-500">USD</span>
                        </span>
                      </div>
                      <a
                        href={cotLink(dest.ciudad, "Reserva con 50%", dest.turistico, catWa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#0a1628] hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Separar Cupo</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Itinerario Día por Día */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Ruta Organizada Paso a Paso
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6">
                Itinerario en {dest.ciudad} ({dest.duracion || "Programa Oficial"})
              </h2>

              <div className="space-y-4">
                {dest.itinerario.map((paso, index) => {
                  const partes = paso.split(/[:–-]/);
                  const tieneEtiqueta = partes.length > 1 && partes[0].length < 22;
                  const tituloPaso = tieneEtiqueta ? partes[0].trim() : `Etapa ${index + 1}`;
                  const detallePaso = tieneEtiqueta
                    ? partes.slice(1).join(":").trim()
                    : paso;

                  return (
                    <div
                      key={index}
                      className="flex gap-4 items-start bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/70"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0a1628] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{index + 1}
                      </div>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                          {tituloPaso}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {detallePaso}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Respaldo Legal y Garantías */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-4">
                ¿Por qué reservar tu viaje a {dest.ciudad} con Cityland Travel?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="text-sm font-extrabold text-[#0a1628] mb-1">
                    Código PNR Verificable
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entregamos tu reserva aérea oficial verificable directamente en la web de la aerolínea.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="text-sm font-extrabold text-[#0a1628] mb-1">
                    Agencia Formal en Lima
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cityland Travel E.I.R.L. (RUC {EMPRESA_RUC}) con oficina física en {EMPRESA_DIRECCION}.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="text-sm font-extrabold text-[#0a1628] mb-1">
                    Asistencia 24/7 en Ruta
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Acompañamiento antes, durante y después de tu vuelo con check-in y tarjetas de embarque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Lateral Sticky (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <div className="bg-[#0a1628] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold px-3 py-1 rounded-full mb-4">
                ● Cupos Aéreos Disponibles
              </span>

              <h3 className="text-2xl font-extrabold tracking-tight leading-snug mb-2">
                Cotiza tu Viaje a {dest.ciudad}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Un especialista te enviará por WhatsApp la cotización exacta según tu fecha de salida y número de pasajeros.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Tarifa desde:</span>
                  <span className="text-lg font-extrabold text-white">
                    ${precioPrincipal.toLocaleString("en-US")} USD
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Separa hoy con (50%):</span>
                  <span className="text-sm font-bold text-amber-300">
                    ${mitadPrecio.toLocaleString("en-US")} USD
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Duración base:</span>
                  <span className="font-semibold text-white">
                    {dest.duracion || "5 Días / 4 Noches"}
                  </span>
                </div>
              </div>

              <a
                href={cotLink(dest.ciudad, "Paquete Completo", precioPrincipal, catWa)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-5 rounded-xl font-bold text-sm shadow-lg cursor-pointer mb-3"
              >
                <WhatsAppIcon size={18} />
                <span>Hablar con un Asesor Ahora</span>
              </a>

              <a
                href={waLink(
                  `¡Hola Cityland Travel! Deseo agendar una cita en su oficina de Los Olivos para cotizar mi viaje a ${dest.ciudad}.`,
                  catWa
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-3 px-4 rounded-xl font-semibold text-xs transition-colors"
              >
                <span>Agendar Visita en Oficina Los Olivos</span>
              </a>

              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
                <p className="text-slate-200 font-semibold">
                  📍 {EMPRESA_DIRECCION}
                </p>
                <p>🕒 {EMPRESA_HORARIO}</p>
                <p>🏢 RUC {EMPRESA_RUC} · Boleta y Factura Electrónica</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. OTROS DESTINOS RECOMENDADOS */}
      <section className="py-14 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Sigue Explorando
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                Otros Paquetes Recomendados desde Lima
              </h2>
            </div>
            <Link
              href="/caribe"
              className="text-xs font-extrabold text-red-600 hover:underline hidden sm:inline"
            >
              Ver catálogo completo →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otrosDestinos.map((d) => {
              const p = d.migratorio ?? d.turistico;
              return (
                <Link
                  key={d.slug}
                  href={`/destinos/${d.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={d.img}
                      alt={d.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0a1628] text-[11px] font-bold px-2.5 py-1 rounded-full">
                        <FlagIcon pais={d.pais} className="w-3.5 h-2.5" />
                        {d.pais}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block">
                        {d.duracion || "5 Días / 4 Noches"}
                      </span>
                      <h3 className="text-lg font-extrabold leading-tight">{d.ciudad}</h3>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">
                        Desde
                      </span>
                      <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#0a1628]">
                        ${p.toLocaleString("en-US")} USD
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-red-600 group-hover:translate-x-1 transition-transform">
                      Ver programa →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
