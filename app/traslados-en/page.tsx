import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { CARBON, CierreTraslado, GrillaDestinosTraslado, PasosTraslado, PortadaTraslado } from "@/components/traslados-turbo/Letrero";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { destinosConTraslados } from "@/lib/traslados-turbo";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

export const revalidate = 86400;

const URL = `${URL_BASE_SEO}/traslados-en`;
const DESC =
  "Traslados del aeropuerto al hotel en Cancún, Punta Cana, Cartagena, Madrid, París, Roma, Miami, Nueva York, Cusco y más. Compartido o privado, precio por persona y reserva por WhatsApp.";

export function generateMetadata(): Metadata {
  return {
    title: "Traslados aeropuerto–hotel por destino | Cityland",
    description: DESC,
    alternates: { canonical: URL },
    openGraph: { type: "website", url: URL, title: "Traslados aeropuerto–hotel", description: DESC, siteName: "Cityland Travel", locale: "es_PE", images: [destinosConTraslados()[0].foto] },
  };
}

// Vitrina de traslados: un destino por tarjeta, con su código de aeropuerto y desde cuánto por persona.
export default function TrasladosVitrinaPage() {
  const destinos = destinosConTraslados();
  const desde = Math.min(...destinos.map((d) => d.desde));
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero un traslado del aeropuerto al hotel. Destino, vuelo y cuántos vamos: ",
    refWeb: "citylandtravel.com/traslados-en",
  });
  const faqs = [
    { q: "¿Los precios son por persona?", a: "Sí, viajando 2 personas y solo de ida. Si van más o necesitas el regreso, te lo cotizamos." },
    { q: "¿Puedo pedir solo el traslado, sin paquete?", a: "Sí. Mándanos tu vuelo, tu hotel y cuántos viajan." },
    { q: "¿Compartido o privado?", a: "El compartido cuesta menos; el privado sale apenas llegas y va directo a tu hotel." },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Traslados", item: URL },
        ],
      },
      {
        "@type": "ItemList",
        name: "Traslados aeropuerto–hotel por destino",
        itemListElement: destinos.map((d, i) => ({ "@type": "ListItem", position: i + 1, url: `${URL}/${d.slug}`, name: `Traslado en ${d.nombre}` })),
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
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Traslados", href: "/traslados" }, { nombre: "Por destino" }]} />
            <PortadaTraslado
              foto={destinos[0].foto}
              alt="Traslados del aeropuerto al hotel"
              cod="LIM"
              placa={`${destinos.length} destinos`}
              titulo="Traslados del aeropuerto al hotel, donde llegues"
              bajada="Reserva el traslado antes de viajar: compartido para ahorrar o privado para salir apenas llegas. Precios reales por destino."
              precio={desde}
              nota="Por persona, viajando 2, solo ida."
              wa={wa}
            />
          </div>

          <section id="contenido" className="space-y-5 scroll-mt-28">
            <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: CARBON }}>
              Elige tu destino
            </h2>
            <GrillaDestinosTraslado items={destinos} />
          </section>

          <PasosTraslado />
          <Preguntas faqs={faqs} />
          <CierreTraslado titulo="¿Llegas a otro aeropuerto?" texto={`Desde ${formatoUSD(desde)} por persona. Te cotizamos cualquier destino.`} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Traslados desde ${formatoUSD(desde)}`} subtitulo="Cotiza por WhatsApp" />
    </>
  );
}
