import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { CierreTicket, ComoSeparar, PortadaTicket } from "@/components/paquetes-turisticos/Ticket";
import { GrillaTours } from "@/components/tours-turbo/TarjetaTour";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { PASOS_TOUR } from "@/components/tours-turbo/pasos";
import { destinosConTours, toursDe, type DestinoTour } from "@/lib/tours-turbo";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (d: DestinoTour) => `/tours-y-actividades/${d.slug}`;

export function metadataDestinoTours(d: DestinoTour): Metadata {
  const info = destinosConTours().find((x) => x.slug === d.slug)!;
  const url = `${URL_BASE_SEO}${ruta(d)}`;
  const desc = `${info.total} tours y actividades en ${d.nombre}, ${d.pais}, desde ${formatoUSD(info.desde)} por persona: excursiones, entradas y visitas guiadas. Te los reservamos junto con tu viaje.`;
  return {
    title: tituloSeo(`Tours y actividades en ${d.nombre}`, `desde ${formatoUSD(info.desde)}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `Tours en ${d.nombre}`,
      description: desc,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [info.foto],
    },
  };
}

// Todos los tours de un destino, del más barato al más caro.
export default function DestinoToursPagina({ destino: d }: { destino: DestinoTour }) {
  const info = destinosConTours().find((x) => x.slug === d.slug)!;
  const ts = toursDe(d.slug);
  const url = `${URL_BASE_SEO}${ruta(d)}`;
  const otros = destinosConTours().filter((x) => x.slug !== d.slug);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero reservar tours en ${d.nombre}. ¿Qué me recomiendan?`,
    refWeb: `citylandtravel.com${ruta(d)}`,
  });
  const faqs = [
    {
      q: `¿Cuánto cuestan los tours en ${d.nombre}?`,
      a: `Desde ${formatoUSD(info.desde)} por persona. Tenemos ${info.total} tours y actividades para elegir.`,
    },
    {
      q: "¿Puedo sumar los tours a mi pasaje o paquete?",
      a: `Sí. Te armamos el viaje completo a ${d.nombre}, con vuelo desde Lima, hotel y los tours que elijas.`,
    },
    { q: "¿Cómo reservo?", a: "Escríbenos por WhatsApp con el tour, la fecha y cuántos van. Tu asesora confirma el cupo y te manda el voucher." },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Tours y actividades", item: `${URL_BASE_SEO}/tours-y-actividades` },
          { "@type": "ListItem", position: 3, name: d.nombre, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: `Tours en ${d.nombre}`,
        itemListElement: ts
          .slice(0, 60)
          .map((t, i) => ({ "@type": "ListItem", position: i + 1, url: `${URL_BASE_SEO}${ruta(d)}/${t.s}`, name: t.n })),
      },
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#fffaf3] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Tours y actividades", href: "/tours-y-actividades" }, { nombre: d.nombre }]} />
            <PortadaTicket
              foto={info.foto}
              alt={`Tours en ${d.nombre}`}
              sello={`${info.total} tours y actividades`}
              titulo={`Tours y actividades en ${d.nombre}`}
              bajada={`Excursiones, entradas y visitas guiadas en ${d.nombre}, ${d.pais}. Elige los que quieras y te los reservamos junto con tu viaje.`}
              etiquetaPrecio="Por persona, desde"
              precio={info.desde}
              nota="Precio según fecha y disponibilidad."
              wa={wa}
              boton="Cotizar por WhatsApp"
              ancla="Ver tours"
              sinOptimizar
            />
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Elige tus tours en {d.nombre}</h2>
            <p className="text-base text-slate-600">Ordenados del más barato al más caro. Precio por persona.</p>
            <GrillaTours items={ts} />
          </section>

          {d.paisTuristico && (
            <Link
              href={`/paquetes-turisticos/${d.paisTuristico}`}
              className="flex flex-col gap-3 rounded-3xl border-2 border-dashed border-orange-200 bg-white p-6 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <strong className="text-xl text-[#10302e]">¿Te armamos el viaje completo a {d.pais}?</strong>
              <span className="shrink-0 rounded-full bg-[#0f766e] px-5 py-3 text-base font-extrabold text-white">Ver paquetes →</span>
            </Link>
          )}

          <ComoSeparar pasos={PASOS_TOUR} />
          <Preguntas faqs={faqs} />

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e]">Tours en otros destinos</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {otros.map((y) => (
                <li key={y.slug}>
                  <Link
                    href={`/tours-y-actividades/${y.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 hover:shadow-lg"
                  >
                    <span className="relative block aspect-[4/3] bg-orange-50">
                      <Image
                        src={y.foto}
                        alt={`Tours en ${y.nombre}`}
                        fill
                        unoptimized
                        loading="lazy"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="block p-4">
                      <strong className="block text-base text-[#10302e] group-hover:underline">{y.nombre}</strong>
                      <span className="text-sm text-slate-600">
                        {y.total} tours · desde {formatoUSD(y.desde)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <CierreTicket titulo={`Arma tu viaje a ${d.nombre}`} precio={info.desde} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Tours en ${d.nombre} desde ${formatoUSD(info.desde)}`} subtitulo="Reserva por WhatsApp" />
    </>
  );
}
