import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, armarLinkWhatsApp } from "@/components/constantes";
import { BLOG_POSTS_MASIVOS } from "@/lib/catalogo-blog-masivo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
  return {
    title: `${post.titulo} | Cityland Travel`,
    description: post.desc,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.titulo,
      description: post.desc,
      images: [{ url: post.imagen, width: 1200, height: 630 }],
      publishedTime: post.fecha,
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
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const imagenesUsadas = new Set<string>([post.imagen]);
  const related = ALL_BLOG_POSTS.filter((p) => {
    if (p.slug === slug || imagenesUsadas.has(p.imagen)) return false;
    imagenesUsadas.add(p.imagen);
    return true;
  }).slice(0, 4);

  const canonicalUrl = `https://citylandtravel.com/blog/${post.slug}`;
  const waHref = armarLinkWhatsApp(
    `Hola Cityland Travel, leí su guía "${post.titulo}" y deseo cotizar mi viaje.`
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
            <Link href="/directorio" className="hover:text-[#0b2347] font-medium">
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
              <h1 className="font-[family-name:var(--font-outfit)] text-[clamp(26px,3.8vw,42px)] font-extrabold text-[#0b2347] tracking-tight leading-[1.12] mb-4">
                {post.titulo}
              </h1>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-5">
                {post.desc}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold text-slate-500">
                <span>📅 Actualizado: {post.fecha}</span>
                <span>•</span>
                <span>⏱️ {post.lectura} de lectura</span>
                <span>•</span>
                <span>✍️ {post.autor} (RUC 20614914239)</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[240px] sm:h-[290px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
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
            <AnimateOnScroll>
              <article
                className="article-body min-w-0"
                dangerouslySetInnerHTML={{ __html: post.contenido }}
              />
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

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-50 text-[#e30613] mb-2">
                Tarifas Referenciales en USD
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] text-[20px] font-extrabold text-[#0b2347] leading-snug mb-2">
                Planifica tu viaje con Cityland Travel
              </h3>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                Separa tus paquetes promocionales con el 50% de inicial y recibe asesoría migratoria personalizada.
              </p>

              <div className="space-y-2.5 mb-5">
                <Link
                  href="/espana"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347]">🇪🇸 Especial España</p>
                    <p className="text-[11px] text-slate-500">Vuelo + Hotel + Seguro 30.000€</p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $890</span>
                </Link>
                <Link
                  href="/destinos/punta-cana"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347]">🇩🇴 Punta Cana 5D/4N</p>
                    <p className="text-[11px] text-slate-500">Vuelo + Resort All Inclusive</p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $1,099</span>
                </Link>
                <Link
                  href="/destinos/cancun"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347]">🇲🇽 Cancún Todo Incluido</p>
                    <p className="text-[11px] text-slate-500">Vuelo + Resort + Chichén Itzá</p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $1,049</span>
                </Link>
                <Link
                  href="/destinos/cartagena"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors"
                >
                  <div>
                    <p className="text-[13px] font-bold text-[#0b2347]">🇨🇴 Cartagena 4D/3N</p>
                    <p className="text-[11px] text-slate-500">Solo con DNI + Islas del Rosario</p>
                  </div>
                  <span className="text-[14px] font-black text-[#e30613]">Desde $699</span>
                </Link>
              </div>

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
            <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(22px,3vw,30px)] font-extrabold text-[#0b2347] tracking-tight mb-6">
              Más Guías para Viajeros Peruanos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r, index) => (
                <AnimateOnScroll key={r.slug} stagger={index + 1}>
                  <Link href={`/blog/${r.slug}`} className="block h-full">
                    <div className="card-lift bg-white rounded-2xl overflow-hidden border border-slate-200 group flex flex-col h-full shadow-sm">
                      <div className="relative h-[165px] overflow-hidden flex-shrink-0">
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
