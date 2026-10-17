import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  VIAJES_ESPECIALIZADOS_SEO,
  buscarViajeEspecializado,
} from "@/lib/catalogo-viajes-especializados";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return VIAJES_ESPECIALIZADOS_SEO.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);
  if (!item) return { title: "Página no encontrada | Cityland Travel" };

  const canonical = `https://citylandtravel.com/viajes/${item.slug}`;
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: { canonical },
    openGraph: {
      title: item.metaTitle,
      description: item.metaDescription,
      url: canonical,
      type: "website",
      locale: "es_PE",
      siteName: "Cityland Travel",
      images: [{ url: item.imagenHero, width: 1200, height: 630, alt: item.titulo }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
      images: [item.imagenHero],
    },
  };
}

export default async function ViajeEspecializadoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);
  if (!item) notFound();

  const waUrl = `https://wa.me/51944103890?text=${encodeURIComponent(item.waMensaje)}`;
  const canonicalUrl = `https://citylandtravel.com/viajes/${item.slug}`;
  const relacionados = VIAJES_ESPECIALIZADOS_SEO.filter(
    (v) => v.categoria === item.categoria && v.slug !== item.slug
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
            name: "Inicio — Cityland Travel",
            item: "https://citylandtravel.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Catálogo de Destinos y Servicios",
            item: "https://citylandtravel.com/directorio",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.titulo,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "TouristTrip",
        name: item.titulo,
        description: item.metaDescription,
        image: item.imagenHero,
        provider: {
          "@type": "TravelAgency",
          name: "Cityland Travel",
          telephone: "+51944103890",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(item.precioDesdeUSD),
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero con Fotografía Panorámica y Vitrina */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={item.imagenHero}
              alt={item.titulo}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/directorio" className="hover:text-white transition-colors">
                Destinos y Servicios
              </Link>
              <span>/</span>
              <span className="text-amber-300 font-semibold truncate max-w-xs">
                {item.destinoOPais}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                  <span>✈️ {item.badge}</span>
                </div>
                <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.98] mb-4">
                  {item.titulo}
                </h1>
                <p className="text-base sm:text-lg text-slate-200 max-w-2xl mb-7 leading-relaxed">
                  {item.subtitulo}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-4 rounded-2xl shadow-lg transition-all text-sm sm:text-base"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cotizar por WhatsApp (+51 944 103 890)</span>
                  </a>
                  <Link
                    href="/#paquetes"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-4 rounded-2xl transition-all text-sm sm:text-base"
                  >
                    Ver Catálogo Principal
                  </Link>
                </div>
              </div>

              {/* Tarjeta Visual Derecha con Imagen y Precio */}
              <div className="lg:col-span-5">
                <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <div className="relative h-56 sm:h-64 w-full">
                    <Image
                      src={item.imagenHero}
                      alt={item.destinoOPais}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute top-3.5 left-3.5 bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      Separa con 50%
                    </div>
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                        Cityland Travel · RUC 20614914239
                      </span>
                      <p className="text-lg font-extrabold leading-tight">
                        {item.destinoOPais}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                        {item.etiquetaPrecio}
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-xs font-extrabold uppercase text-red-600">
                          Desde
                        </span>
                        <span className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] leading-none">
                          ${item.precioDesdeUSD}
                        </span>
                        <span className="text-xs font-bold text-slate-500">USD</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                        Impuestos y asesoría incluidos
                      </span>
                    </div>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-5 py-3.5 rounded-xl text-xs sm:text-sm shrink-0 shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Consultar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería Visual de 3 Fotos + Información Clave */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {item.galeria.map((imgUrl, idx) => (
              <div
                key={`${imgUrl}-${idx}`}
                className="relative h-52 sm:h-60 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 group"
              >
                <Image
                  src={imgUrl}
                  alt={`${item.destinoOPais} - Vista ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3.5 text-white text-xs font-bold drop-shadow">
                  {idx === 0
                    ? `✈️ ${item.destinoOPais}`
                    : idx === 1
                    ? "🏨 Hoteles y Reservas Verificadas"
                    : "🛡️ Asesoría y Respaldo Cityland Travel"}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                  Resumen del Servicio
                </span>
                <h2 className="text-2xl font-extrabold text-[#0a1628] mb-3">
                  Información clave sobre {item.destinoOPais}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                  {item.resumenEjecutivo}
                </p>

                <h3 className="text-base font-extrabold text-[#0a1628] mb-3">
                  ¿Qué incluye nuestra gestión en Cityland Travel?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.incluye.map((inc) => (
                    <div
                      key={inc}
                      className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preguntas Frecuentes */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl font-extrabold text-[#0a1628] mb-4">
                  Preguntas frecuentes
                </h2>
                <div className="space-y-4">
                  {item.faqs.map((f) => (
                    <div
                      key={f.q}
                      className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                    >
                      <h3 className="font-bold text-[#0a1628] text-sm sm:text-base mb-1.5">
                        {f.q}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Derecha de Respaldo y Contacto Directo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
                <h3 className="text-lg font-extrabold text-[#0a1628]">
                  ¿Por qué viajar con Cityland Travel?
                </h3>
                {item.beneficiosClave.map((b) => (
                  <div
                    key={b.titulo}
                    className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70"
                  >
                    <p className="font-bold text-sm text-[#0a1628] mb-1">
                      ✓ {b.titulo}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                ))}

                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-5 py-4 rounded-2xl transition-colors text-sm shadow-md"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Escribir al WhatsApp +51 944 103 890</span>
                  </a>
                  <p className="text-[11px] text-center text-slate-500 mt-2.5">
                    Cityland Travel E.I.R.L. · RUC 20614914239 · Av. Antúnez de Mayolo N. 814, Los Olivos, Lima
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas Visuales de Opciones Relacionadas */}
          {relacionados.length > 0 && (
            <div className="mt-14 pt-10 border-t border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
                    Más Opciones Recomendadas
                  </span>
                  <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628]">
                    También te puede interesar
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relacionados.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/viajes/${rel.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={rel.imagenHero}
                        alt={rel.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-3 right-3 text-white font-bold text-sm leading-snug line-clamp-2">
                        {rel.titulo}
                      </span>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Tarifa desde
                        </span>
                        <span className="text-lg font-black text-[#0a1628]">
                          ${rel.precioDesdeUSD} USD
                        </span>
                      </div>
                      <span className="text-xs font-bold text-red-600 group-hover:translate-x-0.5 transition-transform">
                        Ver detalles →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
