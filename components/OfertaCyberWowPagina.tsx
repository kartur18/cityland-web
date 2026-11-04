import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { dolarCyberWow, OFERTAS_CYBER_WOW, rutaOfertaCyberWow, type OfertaCyberWow } from "@/lib/ofertas-cyber-wow";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO, optimizarMetaTitleSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Plantilla de las 5 (y las que sigan) páginas de la campaña Cyber Wow: una oferta por destino, con el precio
// exacto que gerencia ya aprobó para redes (3-nov-2026). Formato de precio especial para esta campaña: "$"
// simple (no "US$") y siempre con "Desde" adelante — pedido puntual de gerencia, no es el formato del resto
// del sitio (que sigue usando formatoUSD/"US$" en todas las demás páginas).

export function metadataOfertaCyberWow(o: OfertaCyberWow): Metadata {
  const url = `${URL_BASE_SEO}${rutaOfertaCyberWow(o)}`;
  const titulo = optimizarMetaTitleSEO(`Cyber Wow ${o.destino} desde ${dolarCyberWow(o.precio)} | Cityland`);
  const descripcion = optimizarMetaDescriptionSEO(
    `Oferta Cyber Wow a ${o.destino}: ${o.incluye.join(", ")}. Desde ${dolarCyberWow(o.precio)}. Cupos limitados, reserva hoy por WhatsApp.`
  );
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: titulo,
      description: descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [{ url: o.foto, width: 1200, height: 630, alt: o.fotoAlt }],
    },
  };
}

export default function OfertaCyberWowPagina({ o }: { o: OfertaCyberWow }) {
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero reservar la oferta Cyber Wow a ${o.destino} desde ${dolarCyberWow(o.precio)}.`,
    refWeb: `citylandtravel.com${rutaOfertaCyberWow(o)} [Cyber Wow]`,
  });
  const url = `${URL_BASE_SEO}${rutaOfertaCyberWow(o)}`;
  const otras = OFERTAS_CYBER_WOW.filter((x) => x.slug !== o.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Ofertas", item: `${URL_BASE_SEO}/ofertas` },
          { "@type": "ListItem", position: 3, name: `Cyber Wow ${o.destino}`, item: url },
        ],
      },
      {
        "@type": "TouristTrip",
        name: `Cyber Wow ${o.destino} (${o.dias} días / ${o.noches} noches)`,
        image: o.foto,
        description: o.incluye.join(", "),
        provider: { "@type": "TravelAgency", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(o.precio),
          availability: "https://schema.org/LimitedAvailability",
          url,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `¿Necesito visa para viajar a ${o.destino}?`,
            acceptedAnswer: { "@type": "Answer", text: o.documentos },
          },
          {
            "@type": "Question",
            name: `¿Qué incluye la oferta Cyber Wow a ${o.destino}?`,
            acceptedAnswer: { "@type": "Answer", text: o.incluye.join(", ") },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#0a1628] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <nav aria-label="Migas de pan" className="text-xs text-slate-400">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>{" "}
            /{" "}
            <Link href="/ofertas" className="hover:underline">
              Ofertas
            </Link>{" "}
            / {o.destino}
          </nav>

          <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="card-interactive animate-fade-up relative order-2 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl sm:aspect-[4/3] lg:order-1">
              <Image src={o.foto} alt={o.fotoAlt} fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
              <span className="shimmer-effect absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-1.5 text-sm font-extrabold uppercase text-white shadow">
                🛒 Cyber Wow
              </span>
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-4 py-1.5 text-xs font-bold uppercase text-white backdrop-blur-sm">
                ⏱ Cupos limitados
              </span>
            </div>
            <div className="animate-fade-up delay-100 order-1 space-y-5 lg:order-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-extrabold text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                {o.pais} · {o.dias} días / {o.noches} noches
              </p>
              <h1 className="text-[32px] font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Cyber Wow <span className="text-amber-400">{o.destino}</span>
              </h1>
              <p className="text-lg text-slate-300">
                {o.aerolinea ? `Con vuelo vía ${o.aerolinea}, todo listo para viajar sin complicarte.` : "Vuelo, hotel y traslados, todo listo para viajar sin complicarte."}
              </p>

              <div className="shimmer-effect relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
                <p className="text-sm font-extrabold uppercase tracking-wide text-red-600">Desde</p>
                <p className="text-6xl font-black tracking-tight text-[#0a1628] sm:text-7xl">{dolarCyberWow(o.precio)}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4">
                  {o.incluye.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-[15px] font-medium text-slate-700">
                      <span className="mt-0.5 font-black text-emerald-600" aria-hidden="true">
                        ✓
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-base font-extrabold text-white"
                  >
                    <WhatsAppIcon size={22} />
                    Reserva hoy
                  </a>
                  <span className="flex min-h-[56px] items-center justify-center gap-2 rounded-xl border-2 border-[#0a1628] px-5 text-sm font-extrabold uppercase text-[#0a1628]">
                    ⏱ Cupos limitados
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400">Precio por persona en habitación doble; cambia según la fecha y la disponibilidad.</p>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h2 className="text-sm font-extrabold uppercase tracking-wide text-amber-400">Documentos para viajar a {o.pais}</h2>
                <p className="mt-2 text-[15px] text-slate-200">{o.documentos}</p>
                <Link href={o.rutaRequisitos} className="mt-2 inline-block text-sm font-bold text-amber-400 hover:underline">
                  Ver la guía completa de requisitos →
                </Link>
              </div>
            </div>
          </section>

          <PorQueCityland destino={o.destino} />

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-white">Otras ofertas Cyber Wow</h2>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {otras.map((x) => (
                <li key={x.slug}>
                  <Link
                    href={rutaOfertaCyberWow(x)}
                    className="flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 text-center text-sm font-bold text-white transition-colors hover:border-amber-400 hover:text-amber-400"
                  >
                    {x.destino} · {dolarCyberWow(x.precio)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
