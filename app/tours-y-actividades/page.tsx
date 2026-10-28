import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { CierreTicket, ComoSeparar, PortadaTicket } from "@/components/paquetes-turisticos/Ticket";
import { PASOS_TOUR } from "@/components/tours-turbo/pasos";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { destinosConTours, todosLosTours } from "@/lib/tours-turbo";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

export const revalidate = 86400;

const URL = `${URL_BASE_SEO}/tours-y-actividades`;
const DESC =
  "Tours, excursiones, entradas y visitas guiadas en Madrid, Barcelona, París, Roma, Londres, Río, Buenos Aires, Cancún, Cartagena, Cusco y más. Te los reservamos junto con tu viaje.";

export function generateMetadata(): Metadata {
  return {
    title: "Tours y actividades en Europa, el Caribe y Sudamérica | Cityland",
    description: DESC,
    alternates: { canonical: URL },
    openGraph: {
      type: "website",
      url: URL,
      title: "Tours y actividades",
      description: DESC,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [destinosConTours()[0].foto],
    },
  };
}

// Vitrina de tours y actividades: un destino por tarjeta con cuántos tours tiene y desde cuánto.
export default function ToursPage() {
  const destinos = destinosConTours();
  const total = todosLosTours().length;
  const desde = Math.min(...destinos.map((d) => d.desde));
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero reservar tours para mi viaje. ¿Me ayudan?",
    refWeb: "citylandtravel.com/tours-y-actividades",
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Tours y actividades", item: URL },
        ],
      },
      {
        "@type": "ItemList",
        name: "Tours y actividades por destino",
        itemListElement: destinos.map((d, i) => ({ "@type": "ListItem", position: i + 1, url: `${URL}/${d.slug}`, name: d.nombre })),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#fffaf3] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Tours y actividades" }]} />
            <PortadaTicket
              foto={destinos[0].foto}
              alt="Tours y actividades"
              sello={`${total.toLocaleString("en-US")} tours en ${destinos.length} destinos`}
              titulo="Tours y actividades para tu viaje"
              bajada="Excursiones, entradas sin colas y visitas guiadas en Europa, el Caribe y Sudamérica. Elige los que quieras y te los reservamos junto con tu pasaje y tu hotel."
              etiquetaPrecio="Por persona, desde"
              precio={desde}
              nota="Precio según fecha y disponibilidad."
              wa={wa}
              boton="Cotizar por WhatsApp"
              ancla="Ver destinos"
              sinOptimizar
            />
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Elige el destino</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {destinos.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/tours-y-actividades/${d.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 hover:shadow-lg"
                  >
                    <span className="relative block aspect-[4/3] bg-orange-50">
                      <Image
                        src={d.foto}
                        alt={`Tours en ${d.nombre}`}
                        fill
                        unoptimized
                        loading="lazy"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-4">
                      <strong className="block text-lg text-[#10302e] group-hover:underline">{d.nombre}</strong>
                      <span className="text-sm text-slate-600">
                        {d.total} tours · desde <strong className="text-[#e4513f]">{formatoUSD(d.desde)}</strong>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <ComoSeparar pasos={PASOS_TOUR} />
          <CierreTicket titulo="¿Armamos tu viaje con tours incluidos?" precio={desde} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Tours desde ${formatoUSD(desde)}`} subtitulo="Reserva por WhatsApp" />
    </>
  );
}
