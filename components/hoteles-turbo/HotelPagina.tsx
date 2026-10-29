import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { AZUL, CierreHotel, GrillaHoteles, Nota, PasosHotel, PortadaHotel, notaReferencia } from "@/components/hoteles-turbo/Llave";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import {
  DESTINOS_HOTEL,
  FECHAS_REFERENCIA,
  NOCHES_REFERENCIA,
  fotoHotel,
  hotelesParecidos,
  precioHotel,
  precioNoche,
  type HotelCrudo,
} from "@/lib/hoteles-turbo";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (h: HotelCrudo) => `/hoteles-en/${h.d}/${h.s}`;

// «Palacio de los Duques Gran Meliá - The Leading Hotels…»: primero se quita lo que va después del guion.
function nombreCorto(h: HotelCrudo): string {
  const base = h.n.length > 44 ? h.n.split(/\s[-–|]\s/)[0] : h.n;
  if (base.length <= 44) return base;
  return base
    .slice(0, 42)
    .replace(/\s+\S*$/, "")
    .replace(/(\s+(a|the|of|by|de|del|la|el|y|en|and))+$/i, "")
    .replace(/[\s:,+-]+$/, "");
}

export function metadataHotel(h: HotelCrudo): Metadata {
  const d = DESTINOS_HOTEL[h.d];
  const url = `${URL_BASE_SEO}${ruta(h)}`;
  const desc = `${h.n} en ${h.z}, ${d.nombre}: nota ${h.nota.toFixed(1).replace(".", ",")} con ${h.op.toLocaleString("es-PE")} opiniones, ${h.r.toLowerCase()}. Desde ${formatoUSD(precioNoche(h))} la noche para 2. Te lo reservamos por WhatsApp.`;
  return {
    title: tituloSeo(`${nombreCorto(h)}, ${d.nombre}`, `desde ${formatoUSD(precioNoche(h))}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: `${h.n}, ${d.nombre}`, description: desc, siteName: "Cityland Travel", locale: "es_PE", images: [fotoHotel(h, 1200)] },
  };
}

function Dato({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <li className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <span className="block text-sm text-slate-500">{titulo}</span>
      <strong className="mt-1 block text-lg" style={{ color: AZUL }}>
        {texto}
      </strong>
    </li>
  );
}

// Ficha de un hotel: portada con la llave de precio, datos clave, servicios, hoteles parecidos y preguntas.
export default function HotelPagina({ hotel: h }: { hotel: HotelCrudo }) {
  const d = DESTINOS_HOTEL[h.d];
  const url = `${URL_BASE_SEO}${ruta(h)}`;
  const noche = precioNoche(h);
  const total = precioHotel(h);
  const otros = hotelesParecidos(h);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero cotizar el hotel ${h.n} en ${d.nombre}. Mis fechas son: `,
    refWeb: `citylandtravel.com${ruta(h)}`,
  });
  const faqs = [
    {
      q: `¿Cuánto cuesta ${h.n}?`,
      a: `Desde ${formatoUSD(noche)} la noche para 2 personas (${formatoUSD(total)} por ${NOCHES_REFERENCIA} noches, tarifa vista ${FECHAS_REFERENCIA}). El precio cambia según tus fechas: te lo confirmamos por WhatsApp.`,
    },
    { q: "¿Qué régimen tiene?", a: `${h.r}${h.x ? ` (${h.x.toLowerCase()})` : ""}. Si quieres otro régimen o tipo de habitación, te cotizamos las opciones.` },
    { q: "¿Dónde queda?", a: `En ${h.z}${h.km ? `, a ${h.km} km del centro de ${d.nombre}` : ""}.` },
    {
      q: "¿Puedo sumar el vuelo y los traslados?",
      a: `Sí. Te armamos el viaje completo a ${d.nombre}: vuelo desde Lima, este hotel, traslados y tours, en una sola reserva.`,
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Hoteles", item: `${URL_BASE_SEO}/hoteles-en` },
          { "@type": "ListItem", position: 3, name: d.nombre, item: `${URL_BASE_SEO}/hoteles-en/${d.slug}` },
          { "@type": "ListItem", position: 4, name: h.n, item: url },
        ],
      },
      {
        "@type": "Hotel",
        name: h.n,
        image: [fotoHotel(h, 1200)],
        address: { "@type": "PostalAddress", addressLocality: h.z || d.nombre, addressCountry: d.pais },
        priceRange: `Desde ${formatoUSD(noche)} por noche`,
        aggregateRating: { "@type": "AggregateRating", ratingValue: h.nota, bestRating: 10, worstRating: 1, reviewCount: h.op },
        url,
      },
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#f7f4ee] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="space-y-4">
            <Migas
              items={[
                { nombre: "Inicio", href: "/" },
                { nombre: "Hoteles", href: "/hoteles-en" },
                { nombre: d.nombre, href: `/hoteles-en/${d.slug}` },
              ]}
            />
            <PortadaHotel
              foto={fotoHotel(h, 1600)}
              alt={`${h.n}, ${d.nombre}`}
              sello={`Hotel en ${d.nombre}`}
              titulo={h.n}
              bajada={`${h.z}${h.km ? `, a ${h.km} km del centro` : ""}. ${h.r}${h.hab ? ` en ${h.hab.toLowerCase()}` : ""}. Te lo reservamos junto con tu vuelo y tus traslados.`}
              etiquetaPrecio="Por noche, 2 personas, desde"
              precio={noche}
              nota={notaReferencia}
              wa={wa}
              ancla="Ver detalles del hotel"
            />
          </div>

          <section id="contenido" className="space-y-5 scroll-mt-28">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: AZUL }}>
                Lo que tienes que saber
              </h2>
              <Nota h={h} />
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Dato titulo="Régimen" texto={h.r} />
              <Dato titulo="Zona" texto={h.km ? `${h.z}, a ${h.km} km del centro` : h.z} />
              <Dato titulo={`${NOCHES_REFERENCIA} noches para 2, desde`} texto={formatoUSD(total)} />
              <Dato titulo="Cancelación" texto={h.gratis ? "Tarifas con cancelación gratuita" : "Según la tarifa que elijas"} />
            </ul>
            {h.a.length > 0 && (
              <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-extrabold" style={{ color: AZUL }}>
                  Servicios destacados
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {h.a.map((x) => (
                    <li key={x} className="rounded-full bg-[#f7f4ee] px-4 py-2 text-base text-slate-700">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.tours && (
              <p className="text-base text-slate-700">
                ¿Ya tienes hotel?{" "}
                <Link href={`/tours-y-actividades/${d.tours}`} className="font-bold underline" style={{ color: AZUL }}>
                  Mira los tours y actividades en {d.nombre}
                </Link>
                .
              </p>
            )}
          </section>

          <PasosHotel />

          {otros.length > 0 && (
            <section className="space-y-5">
              <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: AZUL }}>
                Hoteles parecidos en {d.nombre}
              </h2>
              <GrillaHoteles items={otros} />
              <p>
                <Link href={`/hoteles-en/${d.slug}`} className="text-base font-bold underline" style={{ color: AZUL }}>
                  Ver todos los hoteles en {d.nombre}
                </Link>
              </p>
            </section>
          )}

          <Preguntas faqs={faqs} />
          <CierreHotel titulo={`Reserva ${nombreCorto(h)}`} precio={noche} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`${formatoUSD(noche)} por noche`} subtitulo={h.n} />
    </>
  );
}
