import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { CARBON, CierreTraslado, FilaOpcion, GrillaDestinosTraslado, PasosTraslado, PortadaTraslado } from "@/components/traslados-turbo/Letrero";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import {
  FECHA_REFERENCIA_TRASLADO,
  destinosConTraslados,
  etiquetaOpcion,
  masBarato,
  precioPorPersona,
  type DestinoTraslado,
  type OpcionTraslado,
} from "@/lib/traslados-turbo";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (d: DestinoTraslado) => `/traslados-en/${d.slug}`;

export function metadataDestinoTraslado(d: DestinoTraslado): Metadata {
  const url = `${URL_BASE_SEO}${ruta(d)}`;
  const desc = `Traslado del ${d.aeropuerto} a tu hotel en ${d.nombre}, compartido o privado, desde ${formatoUSD(d.desde)} por persona. Reserva antes de viajar y llega sin buscar taxi. Cotiza por WhatsApp.`;
  return {
    title: tituloSeo(`Traslado aeropuerto–hotel en ${d.nombre}`, `desde ${formatoUSD(d.desde)}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: `Traslado aeropuerto–hotel en ${d.nombre}`, description: desc, siteName: "Cityland Travel", locale: "es_PE", images: d.foto ? [d.foto] : [] },
  };
}

const waDe = (d: DestinoTraslado, o?: OpcionTraslado) =>
  buildWaUrl({
    categoria: "general",
    mensajePersonalizado: o
      ? `¡Hola Cityland Travel! Quiero el traslado ${etiquetaOpcion(o).toLowerCase()} del ${d.aeropuerto} a mi hotel en ${d.nombre}. Mi vuelo y fecha: `
      : `¡Hola Cityland Travel! Quiero un traslado del ${d.aeropuerto} a mi hotel en ${d.nombre}. Mi vuelo, hotel y cuántos vamos: `,
    refWeb: `citylandtravel.com${ruta(d)}`,
  });

// Traslados de un destino: el letrero con todas las opciones, compartido contra privado, pasos y preguntas.
export default function DestinoTrasladoPagina({ destino: d }: { destino: DestinoTraslado }) {
  const url = `${URL_BASE_SEO}${ruta(d)}`;
  const wa = waDe(d);
  const compartido = masBarato(d, "Compartido");
  const privado = masBarato(d, "Privado");
  const otros = destinosConTraslados().filter((x) => x.slug !== d.slug);
  const faqs = [
    {
      q: `¿Cuánto cuesta el traslado del aeropuerto al hotel en ${d.nombre}?`,
      a: `Desde ${formatoUSD(d.desde)} por persona, solo ida, viajando 2. ${
        compartido ? `El compartido más económico sale ${formatoUSD(precioPorPersona(compartido))} y ` : ""
      }${privado ? `el privado desde ${formatoUSD(precioPorPersona(privado))} por persona.` : ""} Tarifa vista para el ${FECHA_REFERENCIA_TRASLADO}.`,
    },
    {
      q: "¿El precio sirve para cualquier hotel?",
      a: `Es la tarifa del ${d.aeropuerto} al ${d.hotel}. A otro hotel de la misma zona cuesta parecido; si está más lejos, cambia. Te confirmamos el precio exacto con tu hotel.`,
    },
    { q: "¿Y el regreso al aeropuerto?", a: "Se cotiza aparte, con la misma tarifa o parecida. Pídelo junto con la ida y te lo dejamos listo." },
    {
      q: "¿Qué pasa si mi vuelo se retrasa?",
      a: "Por eso te pedimos el número de vuelo al reservar. Cada opción tiene su propio tiempo de espera; te lo confirmamos por escrito antes de viajar.",
    },
    { q: "¿Viajo con niños o mucho equipaje?", a: "Te conviene el privado: elige minivan o camioneta si son más de 3 o llevan maletas grandes." },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Traslados", item: `${URL_BASE_SEO}/traslados-en` },
          { "@type": "ListItem", position: 3, name: d.nombre, item: url },
        ],
      },
      {
        "@type": "Service",
        name: `Traslado aeropuerto–hotel en ${d.nombre}`,
        serviceType: "Traslado de aeropuerto",
        areaServed: { "@type": "City", name: d.nombre },
        provider: { "@type": "TravelAgency", name: "Cityland Travel", url: URL_BASE_SEO },
        offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: d.desde, offerCount: d.opciones.length },
        url,
      },
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#f1f2f4] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Traslados", href: "/traslados-en" }, { nombre: d.nombre }]} />
            <PortadaTraslado
              foto={d.foto}
              alt={`Traslado del aeropuerto al hotel en ${d.nombre}`}
              cod={d.cod}
              placa={`Hotel en ${d.nombre}`}
              titulo={`Traslado del aeropuerto al hotel en ${d.nombre}`}
              bajada={`Del ${d.aeropuerto} a tu hotel, con el traslado pagado antes de viajar: sales del avión y ya sabes quién te lleva y cuánto cuesta.`}
              precio={d.desde}
              nota="Por persona, viajando 2, solo ida."
              wa={wa}
            />
          </div>

          <section id="contenido" className="space-y-5 scroll-mt-28">
            <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: CARBON }}>
              Opciones del {d.aeropuerto} al hotel
            </h2>
            <p className="text-base text-slate-600">
              Tarifas reales al {d.hotel} para el {FECHA_REFERENCIA_TRASLADO}, de la más económica a la más cómoda. Te confirmamos la de tu fecha y tu hotel.
            </p>
            {d.nota && (
              <p className="rounded-[20px] border-l-4 border-[#f2b705] bg-white p-4 text-base text-slate-700">{d.nota}</p>
            )}
            <ul className="space-y-4">
              {d.opciones.map((o) => (
                <FilaOpcion key={`${o.tipo}-${o.cat}-${o.veh}`} o={o} wa={waDe(d, o)} />
              ))}
            </ul>
          </section>

          <section className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-extrabold" style={{ color: CARBON }}>
                Compartido: el que más ahorra
              </h3>
              <p className="mt-2 text-base text-slate-700">
                Vas en bus o van con otros viajeros que llegan a la misma zona. Puede esperar a que se junte el grupo y dejar a otros antes en sus hoteles.
                {compartido ? ` Aquí sale desde ${formatoUSD(precioPorPersona(compartido))} por persona.` : " En este destino casi todo es privado."}
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-extrabold" style={{ color: CARBON }}>
                Privado: sales apenas llegas
              </h3>
              <p className="mt-2 text-base text-slate-700">
                El vehículo es solo para tu grupo y va directo a tu hotel. Conviene si viajas con niños, de noche o con mucho equipaje.
                {privado ? ` Aquí sale desde ${formatoUSD(precioPorPersona(privado))} por persona.` : ""}
              </p>
            </div>
          </section>

          <PasosTraslado />
          <Preguntas faqs={faqs} />

          <p className="text-base text-slate-700">
            ¿Todavía no tienes hotel?{" "}
            <Link href={`/hoteles-en/${d.slug}`} className="font-bold underline" style={{ color: CARBON }}>
              Mira los hoteles en {d.nombre}
            </Link>
            {d.tours && (
              <>
                {" "}o{" "}
                <Link href={`/tours-y-actividades/${d.tours}`} className="font-bold underline" style={{ color: CARBON }}>
                  los tours y actividades
                </Link>
              </>
            )}
            .
          </p>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold" style={{ color: CARBON }}>
              Traslados en otros destinos
            </h2>
            <GrillaDestinosTraslado items={otros} />
          </section>

          <CierreTraslado
            titulo={`Tu traslado en ${d.nombre}, listo antes de viajar`}
            texto={`Desde ${formatoUSD(d.desde)} por persona. Mándanos tu vuelo y tu hotel.`}
            wa={wa}
          />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Traslado en ${d.nombre}`} subtitulo={`Desde ${formatoUSD(d.desde)} por persona`} />
    </>
  );
}
