import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, BlogPost, WA_LINK } from "@/components/constantes";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado | Cityland Travel" };

  return {
    title: `${post.titulo} | Cityland Travel`,
    description: post.desc,
    openGraph: {
      type: "article",
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
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero image */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px]">
        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-[900px] mx-auto">
          <span
            className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white mb-3 ${post.catColor}`}
          >
            {post.categoria}
          </span>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,5vw,48px)] text-white tracking-wide leading-tight">
            {post.titulo}
          </h1>
          <div className="flex items-center gap-3 mt-3 text-[13px] text-white/70">
            <span>{post.fecha}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{post.lectura} lectura</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{post.autor}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-5 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Article body */}
          <AnimateOnScroll>
            <article
              className="article-body flex-1 min-w-0"
              dangerouslySetInnerHTML={{ __html: post.contenido }}
            />
          </AnimateOnScroll>

          {/* Sidebar CTA */}
          <aside className="lg:w-[280px] shrink-0">
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-[family-name:var(--font-bebas)] text-[22px] text-[#0a1628] tracking-wide mb-2">
                ¿Necesitas ayuda?
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                Nuestros asesores pueden ayudarte a planificar tu viaje. Cotiza
                gratis por WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-[13px] px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.528 5.856L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.973.996-3.636-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-[900px] mx-auto px-5">
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,40px)] text-[#0a1628] tracking-wide mb-8">
              Artículos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r, index) => (
                <AnimateOnScroll key={r.slug} stagger={index + 1}>
                  <Link href={`/blog/${r.slug}`} className="block">
                    <div className="card-lift bg-white rounded-xl overflow-hidden border border-gray-100 group flex flex-col h-full">
                      <div className="relative h-[180px] overflow-hidden flex-shrink-0">
                        <Image
                          src={r.imagen}
                          alt={r.titulo}
                          fill
                          sizes="(max-width:640px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <span
                          className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-white ${r.catColor}`}
                        >
                          {r.categoria}
                        </span>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                          <span>{r.fecha}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{r.lectura} lectura</span>
                        </div>
                        <h3 className="text-[15px] font-bold text-[#0a1628] leading-snug">
                          {r.titulo}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
