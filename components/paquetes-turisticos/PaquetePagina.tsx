import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { CierreTicket, ComoSeparar, GrillaTickets, PortadaTicket } from "@/components/paquetes-turisticos/Ticket";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { listaY, tituloSeo } from "@/lib/paquetes-armados/comun";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { PAISES, diasDe, parecidos, precioPaquete, type PaqueteTuristico } from "@/lib/paquetes-turisticos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (p: PaqueteTuristico) => `/paquetes-turisticos/${p.slug}`;

function resumen(p: PaqueteTuristico): string {
  const lugares = listaY(p.lugares.slice(0, 5));
  return `${p.noches} ${p.noches === 1 ? "noche" : "noches"} y ${diasDe(p)} días en ${lugares}, ${p.traslados ? "con alojamiento y traslados incluidos" : "con alojamiento incluido"}.`;
}

// Título que entra en ~60 caracteres: con las noches si cabe; si no, el nombre recortado en una palabra.
function tituloCorto(p: PaqueteTuristico): string {
  const conNoches = `${p.nombre}: ${p.noches} noches`;
  if (conNoches.length <= 62) return conNoches;
  if (p.nombre.length <= 62) return p.nombre;
  return p.nombre
    .slice(0, 60)
    .replace(/s+S*$/, "")
    .replace(/[s:,+-]+$/, "");
}

export function metadataPaqueteTuristico(p: PaqueteTuristico): Metadata {
  const url = `${URL_BASE_SEO}${ruta(p)}`;
  const desc = `Paquete turístico ${p.nombre}: ${resumen(p)} Desde ${formatoUSD(precioPaquete(p))} por persona. Separa con el 50% y recibe el itinerario por WhatsApp.`;
  return {
    title: tituloSeo(tituloCorto(p), `desde ${formatoUSD(precioPaquete(p))}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: p.nombre,
      description: desc,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(p.img, URL_BASE_SEO)],
    },
  };
}

function Dato({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <li className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
      <strong className="block text-lg text-[#10302e]">{titulo}</strong>
      <span className="mt-1 block text-base text-slate-600">{texto}</span>
    </li>
  );
}

// Ficha de un paquete turístico: portada tipo boleto, qué incluye, ruta, datos del país, cómo separar y parecidos.
export default function PaquetePagina({ paquete: p }: { paquete: PaqueteTuristico }) {
  const url = `${URL_BASE_SEO}${ruta(p)}`;
  const pais = PAISES[p.pais];
  const precio = precioPaquete(p);
  const otros = parecidos(p);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero el paquete ${p.nombre} de ${p.noches} noches (ref. ${p.id}). ¿Me envían el itinerario y las fechas con cupo?`,
    refWeb: `citylandtravel.com${ruta(p)}`,
  });
  const faqs = [
    {
      q: `¿Cuánto cuesta el paquete ${p.nombre}?`,
      a: `Desde ${formatoUSD(precio)} por persona en habitación doble. El precio final depende de la fecha y de la disponibilidad del hotel.`,
    },
    {
      q: "¿Incluye el vuelo desde Lima?",
      a: "El precio publicado es del paquete en destino. El boleto desde Lima te lo cotizamos aparte, en la misma reserva, para que llegues a tiempo al inicio del programa.",
    },
    {
      q: "¿Dónde veo el itinerario día por día?",
      a: "Escríbenos por WhatsApp y tu asesora te envía el itinerario completo, los hoteles y lo que incluye cada día.",
    },
    { q: "¿Cómo separo?", a: "Separas con el 50% y pagas el saldo antes de viajar. Todo queda por escrito." },
  ];
  if (pais) faqs.splice(2, 0, { q: `¿Qué documento necesito para viajar a ${pais.nombre}?`, a: pais.documento });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Paquetes turísticos", item: `${URL_BASE_SEO}/paquetes-turisticos` },
          ...(pais ? [{ "@type": "ListItem", position: 3, name: pais.nombre, item: `${URL_BASE_SEO}/paquetes-turisticos/${pais.slug}` }] : []),
          { "@type": "ListItem", position: pais ? 4 : 3, name: p.nombre, item: url },
        ],
      },
      {
        "@type": ["Product", "TouristTrip"],
        name: p.nombre,
        description: resumen(p),
        image: [absoluta(p.img, URL_BASE_SEO)],
        brand: { "@type": "Brand", name: "Cityland Travel" },
        itinerary: { "@type": "ItemList", itemListElement: p.lugares.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x })) },
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
                { nombre: "Paquetes turísticos", href: "/paquetes-turisticos" },
                ...(pais ? [{ nombre: pais.nombre, href: `/paquetes-turisticos/${pais.slug}` }] : []),
              ]}
            />
            <PortadaTicket
              foto={p.img}
              alt={`Paquete turístico ${p.nombre}`}
              sello={`Paquete turístico · ${p.paisNombre}`}
              titulo={p.nombre}
              bajada={resumen(p)}
              ruta={p.lugares.slice(0, 8)}
              etiquetaPrecio="Por persona, desde"
              precio={precio}
              nota="En habitación doble. Vuelo desde Lima cotizado aparte."
              wa={wa}
              boton="Pedir itinerario"
              ancla="Qué incluye"
              insignia={`${p.noches} ${p.noches === 1 ? "noche" : "noches"} · ${diasDe(p)} días`}
            />
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Qué incluye</h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Dato
                titulo={`Alojamiento ${p.noches} ${p.noches === 1 ? "noche" : "noches"}`}
                texto={`En ${listaY(p.lugares.slice(0, 3))}, en habitación doble.`}
              />
              <Dato
                titulo={p.traslados ? `${p.traslados} traslados` : "Traslados"}
                texto={p.traslados ? "Aeropuerto y hotel, según el programa." : "Te confirmamos los traslados del programa al cotizar."}
              />
              <Dato titulo={`${p.lugares.length} ${p.lugares.length === 1 ? "destino" : "destinos"}`} texto={listaY(p.lugares.slice(0, 4))} />
              <Dato titulo="Vuelo desde Lima" texto="Te lo cotizamos aparte y lo coordinamos con las fechas del paquete." />
            </ul>
            <p className="text-base text-slate-600">
              El itinerario día por día, los hoteles y lo que incluye cada día te lo manda tu asesora por WhatsApp antes de separar.
            </p>
          </section>

          {pais && (
            <section className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-orange-100 sm:p-8 md:grid-cols-3">
              <h2 className="md:col-span-3 text-2xl font-extrabold text-[#10302e]">Antes de viajar a {pais.nombre}</h2>
              <p className="text-base text-slate-700">
                <strong className="block text-[#10302e]">Documentos</strong>
                {pais.documento}{" "}
                {pais.requisitos && (
                  <Link href={pais.requisitos} className="font-bold text-[#0f766e] underline">
                    Ver requisitos
                  </Link>
                )}
              </p>
              <p className="text-base text-slate-700">
                <strong className="block text-[#10302e]">Moneda</strong>
                {pais.moneda}
              </p>
              <p className="text-base text-slate-700">
                <strong className="block text-[#10302e]">Mejor época</strong>
                {pais.epoca}
              </p>
            </section>
          )}

          <ComoSeparar />

          {otros.length > 0 && (
            <section className="space-y-5">
              <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Otros paquetes a {p.paisNombre}</h2>
              <GrillaTickets items={otros} />
            </section>
          )}

          <Preguntas faqs={faqs} />
          <CierreTicket titulo={`Viaja a ${listaY(p.lugares.slice(0, 2))}`} precio={precio} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Desde ${formatoUSD(precio)} por persona`} subtitulo={`${p.nombre} · ${p.noches} noches`} />
    </>
  );
}
