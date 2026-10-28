import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { CierreTicket, ComoSeparar, GrillaTickets, PortadaTicket } from "@/components/paquetes-turisticos/Ticket";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { paisesConPaquetes, paquetesDePais, paquetesTuristicos, precioPaquete } from "@/lib/paquetes-turisticos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

export const revalidate = 86400;

const URL = `${URL_BASE_SEO}/paquetes-turisticos`;
const DESC =
  "Paquetes turísticos a Colombia, Ecuador y Galápagos, Italia, Turquía, Dubái, México, Argentina y más, con alojamiento y precio por persona. Separa con el 50%.";

export function generateMetadata(): Metadata {
  const paises = paisesConPaquetes();
  return {
    title: "Paquetes turísticos desde Lima: Colombia, Turquía, Italia y más | Cityland",
    description: DESC,
    alternates: { canonical: URL },
    openGraph: {
      type: "website",
      url: URL,
      title: "Paquetes turísticos",
      description: DESC,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(paises[0].foto, URL_BASE_SEO)],
    },
  };
}

// Vitrina de los paquetes turísticos: países con foto y, abajo, el paquete más barato de cada país.
export default function PaquetesTuristicosPage() {
  const paises = paisesConPaquetes();
  const total = paquetesTuristicos().length;
  const desde = Math.min(...paises.map((x) => x.desde));
  const destacados = paises.map((x) => paquetesDePais(x.slug)[0]).slice(0, 12);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un paquete turístico. ¿Qué opciones tienen?",
    refWeb: "citylandtravel.com/paquetes-turisticos",
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Paquetes turísticos", item: URL },
        ],
      },
      {
        "@type": "ItemList",
        name: "Paquetes turísticos por país",
        itemListElement: paises.map((x, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${URL_BASE_SEO}/paquetes-turisticos/${x.slug}`,
          name: x.nombre,
        })),
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
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Paquetes turísticos" }]} />
            <PortadaTicket
              foto={paises[0].foto}
              alt="Paquetes turísticos desde Lima"
              sello={`${total} paquetes en ${paises.length} países`}
              titulo="Paquetes turísticos para viajar a tu manera"
              bajada="Alojamiento, traslados y tours ya armados en Colombia, Galápagos, Italia, Turquía, Dubái, México, Argentina y más. Tú eliges el paquete; nosotros te sumamos el vuelo desde Lima."
              etiquetaPrecio="Por persona, desde"
              precio={desde}
              nota="En habitación doble. Vuelo desde Lima cotizado aparte."
              wa={wa}
              boton="Cotizar por WhatsApp"
              ancla="Ver países"
            />
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Elige el país</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {paises.map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/paquetes-turisticos/${x.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 hover:shadow-lg"
                  >
                    <span className="relative block aspect-[4/3] bg-orange-50">
                      <Image
                        src={x.foto}
                        alt={`Paquetes turísticos a ${x.nombre}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-4">
                      <strong className="block text-lg text-[#10302e] group-hover:underline">{x.nombre}</strong>
                      <span className="text-sm text-slate-600">
                        {x.total} {x.total === 1 ? "paquete" : "paquetes"} · desde <strong className="text-[#e4513f]">{formatoUSD(x.desde)}</strong>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">El paquete más barato de cada país</h2>
            <GrillaTickets items={destacados} />
          </section>

          <Link
            href="/tours-y-actividades"
            className="flex flex-col gap-3 rounded-3xl border-2 border-dashed border-orange-200 bg-white p-6 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
          >
            <strong className="text-xl text-[#10302e]">Súmale tours y actividades a tu viaje</strong>
            <span className="shrink-0 rounded-full bg-[#0f766e] px-5 py-3 text-base font-extrabold text-white">Ver tours →</span>
          </Link>

          <ComoSeparar />
          <CierreTicket titulo="¿No encuentras tu destino?" precio={Math.min(...destacados.map(precioPaquete))} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Paquetes desde ${formatoUSD(desde)}`} subtitulo="Cotiza por WhatsApp y separa con el 50%" />
    </>
  );
}
