import type { Metadata } from "next";
import FotoCdn from "@/components/FotoCdn";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { AZUL, CierreHotel, PasosHotel, PortadaHotel, notaReferencia } from "@/components/hoteles-turbo/Llave";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { destinosConHoteles, todosLosHoteles } from "@/lib/hoteles-turbo";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

export const revalidate = 86400;

const URL = `${URL_BASE_SEO}/hoteles-en`;
const DESC =
  "Hoteles con buena nota en Cancún, Punta Cana, Cartagena, San Andrés, Madrid, París, Roma, Miami, Orlando, Río, Buenos Aires y más. Precio por noche y reserva por WhatsApp.";

export function generateMetadata(): Metadata {
  return {
    title: "Hoteles en el Caribe, Europa y Sudamérica | Cityland",
    description: DESC,
    alternates: { canonical: URL },
    openGraph: { type: "website", url: URL, title: "Hoteles por destino", description: DESC, siteName: "Cityland Travel", locale: "es_PE", images: [destinosConHoteles()[0].foto] },
  };
}

// Vitrina de hoteles: un destino por tarjeta con cuántos hoteles tiene y desde cuánto la noche.
export default function HotelesVitrinaPage() {
  const destinos = destinosConHoteles();
  const total = todosLosHoteles().length;
  const desde = Math.min(...destinos.map((d) => d.desde));
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un hotel. Destino, fechas y cuántos vamos: ",
    refWeb: "citylandtravel.com/hoteles-en",
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Hoteles", item: URL },
        ],
      },
      {
        "@type": "ItemList",
        name: "Hoteles por destino",
        itemListElement: destinos.map((d, i) => ({ "@type": "ListItem", position: i + 1, url: `${URL}/${d.slug}`, name: `Hoteles en ${d.nombre}` })),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-[#f7f4ee] pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Hoteles" }]} />
            <PortadaHotel
              foto={destinos[0].foto}
              alt="Hoteles por destino"
              sello={`${total.toLocaleString("en-US")} hoteles en ${destinos.length} destinos`}
              titulo="Hoteles con buena nota, donde quieras ir"
              bajada="Solo hoteles con nota de 7,5 o más y opiniones reales de huéspedes. Te los reservamos solos o junto con tu vuelo desde Lima, tus traslados y tus tours."
              etiquetaPrecio="Por noche, 2 personas, desde"
              precio={desde}
              nota={notaReferencia}
              wa={wa}
              ancla="Elegir destino"
            />
          </div>

          <section id="contenido" className="space-y-5 scroll-mt-28">
            <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: AZUL }}>
              Elige el destino
            </h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {destinos.map((d) => (
                <li key={d.slug}>
                  <Link href={`/hoteles-en/${d.slug}`} className="group block overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg">
                    <span className="relative block aspect-[4/3] bg-slate-100">
                      <FotoCdn
                        src={d.foto}
                        alt={`Hoteles en ${d.nombre}`}
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-4">
                      <strong className="block text-lg group-hover:underline" style={{ color: AZUL }}>
                        {d.nombre}
                      </strong>
                      <span className="text-sm text-slate-600">
                        {d.total} hoteles · desde <strong className="text-[#b8891a]">{formatoUSD(d.desde)}</strong>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <PasosHotel />
          <CierreHotel titulo="¿Te ayudamos a elegir hotel?" precio={desde} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Hoteles desde ${formatoUSD(desde)}`} subtitulo="Cotiza por WhatsApp" />
    </>
  );
}
