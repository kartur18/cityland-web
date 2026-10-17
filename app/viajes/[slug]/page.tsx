import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  EMPRESA_DIRECCION,
  EMPRESA_HORARIO,
  EMPRESA_RUC,
  TELEFONO_FORMATEADO,
  waLink,
} from "@/components/constantes";
import {
  VIAJES_ESPECIALIZADOS_SEO,
  buscarViajeEspecializado,
} from "@/lib/catalogo-viajes-especializados";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return VIAJES_ESPECIALIZADOS_SEO.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);
  if (!item) return {};

  const url = `https://citylandtravel.com/viajes/${item.slug}`;

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: item.metaTitle,
      description: item.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: item.imagenHero.startsWith("http")
            ? item.imagenHero
            : `https://citylandtravel.com${item.imagenHero}`,
          width: 1200,
          height: 630,
          alt: item.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
      images: [
        item.imagenHero.startsWith("http")
          ? item.imagenHero
          : `https://citylandtravel.com${item.imagenHero}`,
      ],
    },
  };
}

export default async function ViajeEspecializadoPage({ params }: Props) {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);

  if (!item) {
    notFound();
  }

  const urlWa = waLink(item.waMensaje);
  const esRequisitos = item.categoria === "requisitos";
  const esSeguro = item.slug.startsWith("seguro-");
  const esVuelo = item.categoria === "dos-maletas" || item.categoria === "aerolinea";
  const mitadPrecio = Math.round(item.precioDesdeUSD * 0.5);

  const badgeDerechoVitrina = esRequisitos
    ? "Asesoría Incluida"
    : esSeguro
    ? "Póliza PDF en 5 min"
    : esVuelo
    ? "PNR Verificable"
    : "Separa con 50%";

  const notaPrecioVitrina = esRequisitos
    ? "Orientación documental incluida con tu reserva"
    : esSeguro
    ? "Certificado oficial sin deducible ni copagos"
    : esVuelo
    ? "Impuestos aeroportuarios incluidos en USD"
    : `Separa hoy con $${mitadPrecio.toLocaleString("en-US")} USD (50% inicial)`;

  const fotosGaleria = item.galeria.filter(
    (g, idx, arr) => g && g !== item.imagenHero && arr.indexOf(g) === idx
  );

  const relacionados = VIAJES_ESPECIALIZADOS_SEO.filter(
    (v) => v.categoria === item.categoria && v.slug !== item.slug
  ).slice(0, 6);

  const otrosPopulares = VIAJES_ESPECIALIZADOS_SEO.filter(
    (v) => v.categoria !== item.categoria
  ).slice(0, 6);

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
            name: item.titulo,
            item: `https://citylandtravel.com/viajes/${item.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        name: item.titulo,
        description: item.metaDescription,
        image: item.imagenHero.startsWith("http")
          ? item.imagenHero
          : `https://citylandtravel.com${item.imagenHero}`,
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(item.precioDesdeUSD),
          availability: "https://schema.org/InStock",
          url: `https://citylandtravel.com/viajes/${item.slug}`,
          seller: {
            "@type": "TravelAgency",
            name: "Cityland Travel E.I.R.L.",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: item.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
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

      {/* 1. HERO LUMINOSO ESTILO AEROLÍNEA (Sin duplicar la foto en el fondo) */}
      <section className="bg-gradient-to-b from-sky-50/70 via-white to-white pt-6 pb-12 sm:pt-10 sm:pb-14 border-b border-slate-200/80">
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
              Servicios y Rutas
            </Link>
            <span>/</span>
            <span className="text-[#0a1628] font-bold truncate">{item.destinoOPais}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{item.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                {item.titulo}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                {item.subtitulo}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <a
                  href={urlWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>
                    {esRequisitos
                      ? "Consultar Requisitos y Cotizar por WhatsApp"
                      : "Consultar Disponibilidad por WhatsApp"}
                  </span>
                </a>
                <a
                  href="#detalle-servicio"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-5 py-3.5 rounded-xl font-bold text-sm transition-colors"
                >
                  <span>Ver Detalles e Inclusiones</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Atención Oficial:{" "}
                  {TELEFONO_FORMATEADO}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> RUC {EMPRESA_RUC}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Sede Física en Los Olivos
                </span>
              </div>
            </div>

            {/* Tarjeta Vitrina Derecha (Única aparición de imagenHero) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.imagenHero}
                    alt={item.titulo}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {item.destinoOPais}
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      {badgeDerechoVitrina}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Cityland Travel E.I.R.L.
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold leading-tight line-clamp-2">
                      {item.destinoOPais} — Servicio Verificado
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1.5">
                      {item.etiquetaPrecio}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628] leading-none">
                        ${item.precioDesdeUSD.toLocaleString("en-US")}
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                      {notaPrecioVitrina}
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

          {/* 2. GALERÍA DE 3 POSTALES DIFERENTES AL HERO */}
          {fotosGaleria.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-200/70">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {fotosGaleria.map((imgUrl, idx) => (
                  <div
                    key={imgUrl}
                    className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs group bg-slate-100"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${item.destinoOPais} — Vista ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white">
                      {item.destinoOPais} · Referencia #{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. CONTENIDO PRINCIPAL Y BENEFICIOS */}
      <section id="detalle-servicio" className="py-12 sm:py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                {esRequisitos ? "Información Migratoria y Documental" : "Resumen del Servicio"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight mb-4">
                {esRequisitos
                  ? `Documentos y Requisitos para ${item.destinoOPais}`
                  : `¿Qué incluye nuestro servicio en ${item.destinoOPais}?`}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {item.resumenEjecutivo}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {item.incluye.map((inc) => (
                  <div
                    key={inc}
                    className="flex items-start gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/70"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-slate-700 text-xs sm:text-sm font-semibold leading-snug">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {item.beneficiosClave.map((b) => (
                <div
                  key={b.titulo}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 font-black text-sm flex items-center justify-center mb-3">
                    ★
                  </div>
                  <h3 className="font-extrabold text-[#0a1628] text-sm mb-1.5">
                    {b.titulo}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-2xl font-extrabold text-[#0a1628] tracking-tight mb-5">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {item.faqs.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-2xl bg-slate-50 p-5 border border-slate-200/70"
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
            </div>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <div className="bg-[#0a1628] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold px-3 py-1 rounded-full mb-4">
                ● Atención Inmediata en Línea
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-tight mb-2">
                Central de Reservas Cityland Travel
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Escríbenos al WhatsApp oficial para verificar disponibilidad según tus fechas o agendar atención presencial en nuestra oficina de Los Olivos.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5 space-y-2 text-xs text-slate-200">
                <p>
                  <strong className="text-white">WhatsApp Oficial:</strong> {TELEFONO_FORMATEADO}
                </p>
                <p>
                  <strong className="text-white">Dirección:</strong> {EMPRESA_DIRECCION}
                </p>
                <p>
                  <strong className="text-white">Horario:</strong> {EMPRESA_HORARIO}
                </p>
                <p>
                  <strong className="text-white">RUC:</strong> {EMPRESA_RUC}
                </p>
              </div>

              <a
                href={urlWa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-lg cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Hablar con un Especialista</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
              <h3 className="font-extrabold text-[#0a1628] text-xs uppercase tracking-wider mb-3">
                Servicios Relacionados
              </h3>
              <div className="space-y-2">
                {relacionados.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/viajes/${rel.slug}`}
                    className="block text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 rounded-xl px-3.5 py-2.5 border border-slate-200/60 transition-colors"
                  >
                    {rel.titulo} —{" "}
                    <span className="font-bold text-[#0a1628]">
                      Desde ${rel.precioDesdeUSD} USD
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. MÁS OPCIONES RELACIONADAS */}
      <section className="py-10 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            Más Rutas, Seguros y Guías de Viaje
          </h2>
          <div className="flex flex-wrap gap-2">
            {otrosPopulares.map((o) => (
              <Link
                key={o.slug}
                href={`/viajes/${o.slug}`}
                className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200 px-3 py-1.5 rounded-full transition-colors"
              >
                {o.titulo}
              </Link>
            ))}
            <Link
              href="/directorio"
              className="text-xs font-bold text-red-600 hover:underline px-3 py-1.5"
            >
              Ver directorio completo →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
