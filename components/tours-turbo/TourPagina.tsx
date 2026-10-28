import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { CierreTicket, ComoSeparar, PortadaTicket } from "@/components/paquetes-turisticos/Ticket";
import { GrillaTours } from "@/components/tours-turbo/TarjetaTour";
import { PASOS_TOUR } from "@/components/tours-turbo/pasos";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { DESTINOS_TOUR, fotoTour, precioTour, toursParecidos, type TourCrudo } from "@/lib/tours-turbo";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (t: TourCrudo) => `/tours-y-actividades/${t.d}/${t.s}`;

function tituloCorto(t: TourCrudo): string {
  if (t.n.length <= 62) return t.n;
  return t.n
    .slice(0, 60)
    .replace(/\s+\S*$/, "")
    .replace(/[\s:,+-]+$/, "");
}

export function metadataTour(t: TourCrudo): Metadata {
  const d = DESTINOS_TOUR[t.d];
  const url = `${URL_BASE_SEO}${ruta(t)}`;
  const desc = `${t.n} en ${d.nombre}${t.dur ? `, ${t.dur}` : ""}: desde ${formatoUSD(precioTour(t))} por persona. Te lo reservamos junto con tu viaje y te confirmamos todo por WhatsApp.`;
  return {
    title: tituloSeo(tituloCorto(t), `desde ${formatoUSD(precioTour(t))}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: t.n, description: desc, siteName: "Cityland Travel", locale: "es_PE", images: [fotoTour(t, 1200)] },
  };
}

function Ventaja({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <li className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
      <strong className="block text-lg text-[#10302e]">{titulo}</strong>
      <span className="mt-1 block text-base text-slate-600">{texto}</span>
    </li>
  );
}

// Ficha de un tour o actividad: portada tipo boleto, por qué reservarlo con nosotros, tours parecidos y preguntas.
export default function TourPagina({ tour: t }: { tour: TourCrudo }) {
  const d = DESTINOS_TOUR[t.d];
  const url = `${URL_BASE_SEO}${ruta(t)}`;
  const precio = precioTour(t);
  const otros = toursParecidos(t);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero reservar «${t.n}» en ${d.nombre}. ¿Qué fechas tienen?`,
    refWeb: `citylandtravel.com${ruta(t)}`,
  });
  const faqs = [
    { q: `¿Cuánto cuesta ${t.n}?`, a: `Desde ${formatoUSD(precio)} por persona. El precio final depende de la fecha y del número de personas.` },
    ...(t.dur ? [{ q: "¿Cuánto dura?", a: `${t.dur}, según el horario que elijas.` }] : []),
    {
      q: "¿Lo puedo sumar a mi paquete o a mi pasaje?",
      a: `Sí. Te armamos el viaje completo a ${d.nombre}: vuelo desde Lima, hotel y los tours que quieras, en una sola reserva.`,
    },
    {
      q: "¿Cómo lo reservo?",
      a: "Escríbenos por WhatsApp con la fecha y cuántos van. Tu asesora confirma el cupo y te manda el voucher por escrito.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Tours y actividades", item: `${URL_BASE_SEO}/tours-y-actividades` },
          { "@type": "ListItem", position: 3, name: d.nombre, item: `${URL_BASE_SEO}/tours-y-actividades/${d.slug}` },
          { "@type": "ListItem", position: 4, name: t.n, item: url },
        ],
      },
      {
        "@type": ["Product", "TouristTrip"],
        name: t.n,
        description: `${t.n} en ${d.nombre}, ${d.pais}.`,
        image: [fotoTour(t, 1200)],
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: { "@type": "Offer", price: String(precio), priceCurrency: "USD", availability: "https://schema.org/InStock", url },
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
            <Migas
              items={[
                { nombre: "Inicio", href: "/" },
                { nombre: "Tours y actividades", href: "/tours-y-actividades" },
                { nombre: d.nombre, href: `/tours-y-actividades/${d.slug}` },
              ]}
            />
            <PortadaTicket
              foto={fotoTour(t, 1200)}
              alt={t.n}
              sello={`Tour en ${d.nombre}`}
              titulo={t.n}
              bajada={`Actividad en ${d.nombre}, ${d.pais}${t.dur ? `, de ${t.dur}` : ""}. Te la reservamos junto con tu viaje para que llegues con todo listo.`}
              etiquetaPrecio="Por persona, desde"
              precio={precio}
              nota="Precio según fecha y disponibilidad."
              wa={wa}
              boton="Reservar por WhatsApp"
              ancla="Por qué con nosotros"
              insignia={t.dur || undefined}
              sinOptimizar
            />
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Por qué reservarlo con Cityland</h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Ventaja titulo="Todo en una reserva" texto={`Vuelo, hotel y tours en ${d.nombre}, coordinados por la misma asesora.`} />
              <Ventaja titulo="Atención en español" texto="Te escribimos por WhatsApp antes y durante tu viaje." />
              <Ventaja titulo="Voucher por escrito" texto="Con el punto de encuentro, la hora y lo que incluye." />
              <Ventaja titulo="Oficina en Lima" texto="Dos oficinas en Los Olivos, agencia formal con RUC." />
            </ul>
            {d.paisTuristico && (
              <p className="text-base text-slate-700">
                ¿Aún no tienes el viaje?{" "}
                <Link href={`/paquetes-turisticos/${d.paisTuristico}`} className="font-bold text-[#0f766e] underline">
                  Mira los paquetes turísticos a {d.pais}
                </Link>
                .
              </p>
            )}
          </section>

          <ComoSeparar pasos={PASOS_TOUR} />

          {otros.length > 0 && (
            <section className="space-y-5">
              <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Más tours en {d.nombre}</h2>
              <GrillaTours items={otros} />
              <p>
                <Link href={`/tours-y-actividades/${d.slug}`} className="text-base font-bold text-[#0f766e] underline">
                  Ver todos los tours en {d.nombre}
                </Link>
              </p>
            </section>
          )}

          <Preguntas faqs={faqs} />
          <CierreTicket titulo={`Reserva tu tour en ${d.nombre}`} precio={precio} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`${formatoUSD(precio)} por persona`} subtitulo={t.n} />
    </>
  );
}
