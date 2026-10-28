import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { BLOG_POSTS, armarLinkWhatsApp } from "@/components/constantes";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Blog y Guías de Viaje Oficiales para Peruanos | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Lee nuestras guías actualizadas para viajar desde Perú: requisitos migratorios para España y Europa, bolsa de viaje, seguro Schengen 30.000€, visa americana, resorts Todo Incluido y consejos de viaje."),
  alternates: {
    canonical: "https://citylandtravel.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/blog",
    title: "Blog y Guías del Viajero — Cityland Travel",
    description:
      "Guías migratorias, requisitos, presupuestos y consejos reales para viajeros peruanos.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: ["https://citylandtravel.com/opengraph-image"],
  },
};

export default function BlogIndexPage() {
  const todosLosArticulos = [...BLOG_POSTS, ...BLOG_POSTS_MASIVOS];
  const articuloDestacado = todosLosArticulos[0];
  const restoArticulos = todosLosArticulos.slice(1);

  const waUrl = armarLinkWhatsApp(
    "¡Hola Cityland Travel! Estuve leyendo sus guías de viaje y quiero cotizar mi próximo destino."
  );

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Cabecera Editorial */}
        <section className="bg-[#0a1628] text-white pt-12 pb-14 sm:pt-16 sm:pb-18 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
                Guías Oficiales para Viajeros Peruanos · 2026
              </span>
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                <FlagIcon pais="Perú" className="w-4 h-3" />
                <FlagIcon pais="España" className="w-4 h-3" />
                <FlagIcon pais="República Dominicana" className="w-4 h-3" />
                <FlagIcon pais="México" className="w-4 h-3" />
                <FlagIcon pais="Colombia" className="w-4 h-3" />
                <FlagIcon pais="Estados Unidos" className="w-4 h-3" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-3">
                  Blog y Guías del Viajero Cityland Travel
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Información verificada por nuestros especialistas en requisitos migratorios, bolsa de viaje para Europa, trámites de visa, resorts Todo Incluido y rutas desde Lima.
                </p>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm shrink-0 self-start lg:self-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Consultar con un Asesor</span>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
          {/* Artículo Principal Destacado */}
          {articuloDestacado && (
            <Link
              href={`/blog/${articuloDestacado.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative lg:col-span-7 min-h-[260px] sm:min-h-[340px] bg-slate-100 overflow-hidden">
                <Image
                  src={articuloDestacado.imagen}
                  alt={articuloDestacado.titulo}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Guía Destacada
                  </span>
                  <span className="bg-[#0a1628]/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    {articuloDestacado.categoria}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-3">
                    <span>{articuloDestacado.fecha.startsWith("Actualizado") ? articuloDestacado.fecha : `Actualizado: ${articuloDestacado.fecha}`}</span>
                    <span>•</span>
                    <span>{articuloDestacado.lectura} de lectura</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] group-hover:text-red-600 transition-colors leading-snug mb-3">
                    {articuloDestacado.titulo}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {articuloDestacado.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">
                    Por {articuloDestacado.autor}
                  </span>
                  <span className="text-sm font-extrabold text-red-600 group-hover:translate-x-1 transition-transform">
                    Leer guía completa →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Grilla de Todas las Guías */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                  Biblioteca del Viajero
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight">
                  Todas Nuestras Guías y Consejos ({todosLosArticulos.length})
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restoArticulos.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={post.imagen}
                        alt={post.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 bg-white/95 text-[#0a1628] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                        {post.categoria}
                      </span>
                      <span className="absolute bottom-2.5 right-3 bg-black/65 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                        {post.lectura}
                      </span>
                    </div>

                    <div className="p-5">
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                        {post.fecha} · {post.autor}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0a1628] group-hover:text-red-600 transition-colors leading-snug mb-2 line-clamp-2">
                        {post.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {post.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1628]">
                    <span>Leer artículo</span>
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                      Ver guía →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
