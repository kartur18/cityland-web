import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  PRECIO_IDA_VUELTA_MADRID_DESDE,
  PRECIO_MIGRATORIO_DESDE,
  armarLinkWhatsApp,
} from "@/components/constantes";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";
import {
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import { textoPrecio } from "@/lib/formato-precio";

const ALL_BLOG_POSTS = [...BLOG_POSTS, ...BLOG_POSTS_MASIVOS];

export function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado | Cityland Travel" };

  const canonical = `https://citylandtravel.com/blog/${post.slug}`;
  const title = optimizarMetaTitleSEO(`${post.tituloSeo ?? post.titulo} | Cityland Travel`);
  const description = optimizarMetaDescriptionSEO(post.desc);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: [{ url: post.imagen, width: 1200, height: 630 }],
      authors: [post.autor],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idxActual = ALL_BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = idxActual >= 0 ? ALL_BLOG_POSTS[idxActual] : undefined;
  if (!post) notFound();

  const imagenesUsadas = new Set<string>([post.imagen]);
  const related: typeof ALL_BLOG_POSTS = [];
  for (let i = 1; i < ALL_BLOG_POSTS.length && related.length < 4; i++) {
    const cand = ALL_BLOG_POSTS[(idxActual + i) % ALL_BLOG_POSTS.length];
    if (cand && cand.slug !== slug && !imagenesUsadas.has(cand.imagen)) {
      imagenesUsadas.add(cand.imagen);
      related.push(cand);
    }
  }

  const canonicalUrl = `https://citylandtravel.com/blog/${post.slug}`;
  const esDeEspana = /espana|madrid|barcelona|schengen/i.test(post.slug) || /España/.test(post.titulo);
  const waHref = armarLinkWhatsApp(
    `Hola Cityland Travel, leí su guía "${post.titulo}" y deseo cotizar mi viaje.`,
    `citylandtravel.com/blog/${post.slug}`
  );

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
            name: "Guías del Viajero",
            item: "https://citylandtravel.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.titulo,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "Article",
        headline: post.titulo,
        description: post.desc,
        image: post.imagen,
        author: { "@type": "Organization", name: "Cityland Travel" },
        publisher: { "@type": "Organization", name: "Cityland Travel" },
        mainEntityOfPage: canonicalUrl,
      },
    ],
  };

  return (
    <main className="bg-[#f4f6f9] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Editorial Estilo Revista de Aerolínea */}
      <section className="bg-white border-b border-slate-200 pt-6 pb-10">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-[12px] text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0b2347] font-medium">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0b2347] font-medium">
              Guías del Viajero
            </Link>
            <span>/</span>
            <span className="text-[#0b2347] font-semibold truncate">{post.categoria}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white mb-4 ${post.catColor}`}
              >
                {post.categoria} · Guía Oficial
              </span>
              <h1 className="text-[clamp(26px,3.6vw,40px)] font-extrabold text-[#0b2347] tracking-tight leading-[1.12] mb-4">
                {textoPrecio(post.titulo)}
              </h1>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-5">
                {textoPrecio(post.desc)}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold text-slate-500">
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                  {post.fecha.startsWith("Actualizado") ? post.fecha : `Actualizado: ${post.fecha}`}
                </span>
                <span>•</span>
                <span>Lectura: {post.lectura}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5 text-[#0b2347]">
                  <FlagIcon pais="Perú" className="w-3.5 h-2.5" />
                  {post.autor} (RUC 20614914239)
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[240px] sm:h-[290px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                <Image
                  src={post.imagen}
                  alt={post.titulo}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sticky Commercial Sidebar */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-sm">
            {esDeEspana && (
              // En celular la barra lateral cae al final del artículo: el pasaje se ofrece arriba, donde sí se lee.
              <aside className="mb-7 flex flex-col gap-3 rounded-xl border border-red-100 bg-red-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[14px] font-bold text-[#0b2347] flex items-center gap-2">
                  <FlagIcon pais="España" className="w-4 h-3 shrink-0" />
                  <span>
                    Pasaje Lima–Madrid ida y vuelta desde ${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")}
                  </span>
                </p>
                <span className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-bold">
                  <Link href="/pasajes-a-espana" className="text-[#e30613] underline">
                    Ver pasajes a España
                  </Link>
                  <Link href="/pasaje-solo-ida-a-espana" className="text-[#0b2347] underline">
                    Pasaje solo ida
                  </Link>
                </span>
              </aside>
            )}
            <AnimateOnScroll>
              <article
                className="article-body min-w-0"
                dangerouslySetInnerHTML={{
                  __html: textoPrecio(post.contenido),
                }}
              />
              {/\$\s?\d/.test(post.contenido) && <NotaPrecio className="mt-6" />}
            </AnimateOnScroll>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 rounded-xl p-5">
              <div>
                <p className="text-[14px] font-extrabold text-[#0b2347]">
                  ¿Deseas cotizar tus boletos o paquete con un especialista?
                </p>
                <p className="text-[12px] text-slate-600 mt-0.5">
                  Atención inmediata desde nuestra sede en Av. Antúnez de Mayolo N. 814, Los Olivos.
                </p>
              </div>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-[13px] px-5 py-3 rounded-xl transition-all shrink-0 shadow-sm"
              >
                <WhatsAppIcon size={16} />
                Consultar al +51 944 103 890
              </a>
            </div>
          </div>

          {/* Sidebar CTA con Banderas SVG reales (Cero emojis rotos en Windows) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-50 text-[#e30613] mb-2">
                Tarifas Referenciales en USD
              </span>
              <h3 className="text-[20px] font-extrabold text-[#0b2347] leading-snug mb-2">
                Planifica tu viaje con Cityland Travel
              </h3>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                Separa tus paquetes promocionales con el 50% de inicial y recibe asesoría migratoria personalizada.
              </p>

              <div className="space-y-2.5 mb-5">
                <Link
                  href="/vuelos/lima-madrid"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347] flex items-center gap-2">
                      <FlagIcon pais="España" className="w-4 h-3" />
                      <span>Pasaje Lima–Madrid ida y vuelta</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Para turismo o visita familiar</p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">
                    Desde ${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")}
                  </span>
                </Link>
                <Link
                  href="/espana"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347] flex items-center gap-2">
                      <FlagIcon pais="España" className="w-4 h-3" />
                      <span>Paquete migratorio a España</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Pasaje de ida + reserva de regreso, hotel y seguro</p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde ${PRECIO_MIGRATORIO_DESDE}</span>
                </Link>
                <Link
                  href="/italia"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347] flex items-center gap-2">
                      <FlagIcon pais="Italia" className="w-4 h-3" />
                      <span>Especial Italia (Milán/Roma)</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Vuelo + Lettera Invito / Hotel
                    </p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $1,150</span>
                </Link>
                <Link
                  href="/destinos/punta-cana"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347] flex items-center gap-2">
                      <FlagIcon pais="República Dominicana" className="w-4 h-3" />
                      <span>Punta Cana 5D/4N</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Vuelo + Resort All Inclusive
                    </p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $1,049</span>
                </Link>
                <Link
                  href="/destinos/cancun"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347] flex items-center gap-2">
                      <FlagIcon pais="México" className="w-4 h-3" />
                      <span>Cancún Todo Incluido</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Vuelo + Resort + Chichén Itzá
                    </p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $999</span>
                </Link>
                <Link
                  href="/destinos/cartagena"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347] flex items-center gap-2">
                      <FlagIcon pais="Colombia" className="w-4 h-3" />
                      <span>Cartagena 4D/3N</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Solo con DNI + Islas del Rosario
                    </p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $599</span>
                </Link>
              </div>
              <NotaPrecio className="mb-4" />

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-[14px] px-4 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <WhatsAppIcon size={18} />
                Cotizar por WhatsApp Oficial
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-white border-t border-slate-200 py-14">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-[#0b2347] tracking-tight mb-6">
              Más Guías para Viajeros Peruanos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r, index) => (
                <AnimateOnScroll key={r.slug} stagger={index + 1}>
                  <Link href={`/blog/${r.slug}`} className="block h-full">
                    <div className="card-lift bg-white rounded-2xl overflow-hidden border border-slate-200 group flex flex-col h-full shadow-sm">
                      <div className="relative h-[165px] overflow-hidden flex-shrink-0 bg-slate-100">
                        <Image
                          src={r.imagen}
                          alt={r.titulo}
                          fill
                          sizes="(max-width:640px) 100vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span
                          className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-white ${r.catColor}`}
                        >
                          {r.categoria}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                            <span>{r.fecha}</span>
                            <span>•</span>
                            <span>{r.lectura}</span>
                          </div>
                          <h3 className="text-[14px] font-extrabold text-[#0b2347] leading-snug line-clamp-3 group-hover:text-[#e30613] transition-colors">
                            {r.titulo}
                          </h3>
                        </div>
                        <span className="text-[12px] font-bold text-blue-700 mt-3 inline-block">
                          Leer guía →
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
