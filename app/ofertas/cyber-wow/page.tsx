import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";
import { dolarCyberWow, OFERTAS_CYBER_WOW, rutaOfertaCyberWow } from "@/lib/ofertas-cyber-wow";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO, optimizarMetaTitleSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

export const revalidate = 86400;

const RUTA = "/ofertas/cyber-wow";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Ofertas Cyber Wow: paquetes desde Lima con cupos limitados | Cityland"),
  description: optimizarMetaDescriptionSEO(
    "Ofertas Cyber Wow a Río de Janeiro, Medellín, Ciudad de Panamá, Punta Cana y Cartagena de Indias, con vuelo, hotel y traslados. Cupos limitados, reserva hoy."
  ),
  alternates: { canonical: `${URL_BASE_SEO}${RUTA}` },
  openGraph: {
    type: "website",
    url: `${URL_BASE_SEO}${RUTA}`,
    title: "Ofertas Cyber Wow desde Lima",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: [{ url: OFERTAS_CYBER_WOW[0].foto, width: 1200, height: 630, alt: OFERTAS_CYBER_WOW[0].fotoAlt }],
  },
};

export default function CyberWowPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Ofertas", item: `${URL_BASE_SEO}/ofertas` },
          { "@type": "ListItem", position: 3, name: "Cyber Wow", item: `${URL_BASE_SEO}${RUTA}` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Ofertas Cyber Wow",
        itemListElement: OFERTAS_CYBER_WOW.map((o, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Cyber Wow ${o.destino}`,
          url: `${URL_BASE_SEO}${rutaOfertaCyberWow(o)}`,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#0a1628] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <nav aria-label="Migas de pan" className="text-xs text-slate-400">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>{" "}
            /{" "}
            <Link href="/ofertas" className="hover:underline">
              Ofertas
            </Link>{" "}
            / Cyber Wow
          </nav>

          <header className="animate-fade-up space-y-4 max-w-3xl">
            <p className="shimmer-effect inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-red-600/30">
              🛒 Cyber Wow · Ofertas por tiempo limitado
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.05] text-balance">
              Viaja con precio <span className="text-amber-400">Cyber Wow</span>
            </h1>
            <p className="text-lg text-slate-300">
              Vuelo, hotel y traslados a precio fijo, todo armado. <strong className="text-white">Cupos limitados</strong> — se acaban antes de que termine la promo.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OFERTAS_CYBER_WOW.map((o, i) => {
              const wa = buildWaUrl({
                categoria: "general",
                mensajePersonalizado: `¡Hola Cityland Travel! Quiero reservar la oferta Cyber Wow a ${o.destino} desde ${dolarCyberWow(o.precio)}.`,
                refWeb: `citylandtravel.com${rutaOfertaCyberWow(o)} [Cyber Wow · tarjeta]`,
              });
              return (
                <li
                  key={o.slug}
                  className={`card-interactive animate-fade-up overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/20 ${["delay-100", "delay-200", "delay-300"][i % 3]}`}
                >
                  <Link href={rutaOfertaCyberWow(o)} className="group block">
                    <span className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={o.foto}
                        alt={o.fotoAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                        <span className="shimmer-effect rounded-full bg-red-600 px-3 py-1 text-xs font-extrabold uppercase text-white shadow">
                          Cyber Wow
                        </span>
                        <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase text-white backdrop-blur-sm">
                          Cupos limitados
                        </span>
                      </span>
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 pt-10">
                        <strong className="block text-xl font-black text-white group-hover:underline">{o.destino}</strong>
                        <span className="text-xs font-semibold text-white/85">
                          {o.pais} · {o.dias} días / {o.noches} noches
                        </span>
                      </span>
                    </span>
                  </Link>
                  <div className="space-y-3 bg-gradient-to-br from-red-600 to-red-500 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-red-100">Desde</p>
                    <p className="text-4xl font-black tracking-tight text-white">{dolarCyberWow(o.precio)}</p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-2 text-[13px] font-extrabold text-white"
                      >
                        <WhatsAppIcon size={16} />
                        Reservar
                      </a>
                      <Link
                        href={rutaOfertaCyberWow(o)}
                        className="flex min-h-[48px] items-center justify-center rounded-xl border-2 border-white px-2 text-[13px] font-extrabold text-white transition-colors hover:bg-white hover:text-red-600"
                      >
                        Ver oferta
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="text-xs text-slate-400">Precios por persona en habitación doble; cambian según la fecha y la disponibilidad.</p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
