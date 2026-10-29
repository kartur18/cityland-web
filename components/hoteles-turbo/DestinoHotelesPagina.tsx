import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { AZUL, CierreHotel, GrillaHoteles, PasosHotel, PortadaHotel, notaReferencia } from "@/components/hoteles-turbo/Llave";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { destinosConHoteles, hotelesDe, type DestinoHotel } from "@/lib/hoteles-turbo";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (d: DestinoHotel) => `/hoteles-en/${d.slug}`;

export function metadataDestinoHoteles(d: DestinoHotel): Metadata {
  const info = destinosConHoteles().find((x) => x.slug === d.slug)!;
  const url = `${URL_BASE_SEO}${ruta(d)}`;
  const desc = `${info.total} hoteles en ${d.nombre}, ${d.pais}, con nota de 7,5 o más, desde ${formatoUSD(info.desde)} la noche para 2. Resorts, todo incluido y hoteles céntricos. Cotiza por WhatsApp.`;
  return {
    title: tituloSeo(`Hoteles en ${d.nombre}`, `desde ${formatoUSD(info.desde)} la noche`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: `Hoteles en ${d.nombre}`, description: desc, siteName: "Cityland Travel", locale: "es_PE", images: [info.foto] },
  };
}

// Todos los hoteles de un destino: primero los mejor puntuados, con filtro visual de «todo incluido» arriba.
export default function DestinoHotelesPagina({ destino: d }: { destino: DestinoHotel }) {
  const info = destinosConHoteles().find((x) => x.slug === d.slug)!;
  const hs = hotelesDe(d.slug);
  const todoIncluido = hs.filter((h) => h.r === "Todo incluido");
  const resto = hs.filter((h) => h.r !== "Todo incluido");
  const otros = destinosConHoteles().filter((x) => x.slug !== d.slug);
  const url = `${URL_BASE_SEO}${ruta(d)}`;
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Busco hotel en ${d.nombre}. Mis fechas y cuántos vamos: `,
    refWeb: `citylandtravel.com${ruta(d)}`,
  });
  const faqs = [
    { q: `¿Cuánto cuesta un hotel en ${d.nombre}?`, a: `Desde ${formatoUSD(info.desde)} la noche para 2 personas. El precio depende de las fechas, la zona y el régimen.` },
    { q: "¿Los precios incluyen el vuelo?", a: `No: son solo del hotel. Si quieres, te cotizamos el vuelo desde Lima, los traslados y los tours a ${d.nombre} en una sola reserva.` },
    { q: "¿Cómo reservo?", a: "Escríbenos por WhatsApp el hotel, tus fechas y cuántos van. Tu asesora te confirma la tarifa y te manda el voucher." },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Hoteles", item: `${URL_BASE_SEO}/hoteles-en` },
          { "@type": "ListItem", position: 3, name: d.nombre, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: `Hoteles en ${d.nombre}`,
        itemListElement: hs.slice(0, 60).map((h, i) => ({ "@type": "ListItem", position: i + 1, url: `${url}/${h.s}`, name: h.n })),
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
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Hoteles", href: "/hoteles-en" }, { nombre: d.nombre }]} />
            <PortadaHotel
              foto={info.foto}
              alt={`Hoteles en ${d.nombre}`}
              sello={`${info.total} hoteles con buena nota`}
              titulo={`Hoteles en ${d.nombre}`}
              bajada={`Elegimos los hoteles de ${d.nombre}, ${d.pais}, con nota de 7,5 o más y opiniones reales de huéspedes. Te los reservamos solos o con tu vuelo desde Lima.`}
              etiquetaPrecio="Por noche, 2 personas, desde"
              precio={info.desde}
              nota={notaReferencia}
              wa={wa}
              ancla="Ver hoteles"
            />
          </div>

          {todoIncluido.length > 0 && (
            <section id="contenido" className="space-y-5 scroll-mt-28">
              <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: AZUL }}>
                Todo incluido en {d.nombre}
              </h2>
              <GrillaHoteles items={todoIncluido} />
            </section>
          )}

          <section id={todoIncluido.length ? undefined : "contenido"} className="space-y-5 scroll-mt-28">
            <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: AZUL }}>
              {todoIncluido.length ? `Más hoteles en ${d.nombre}` : `Hoteles en ${d.nombre}`}
            </h2>
            <p className="text-base text-slate-600">Ordenados por nota de los huéspedes. Precio por noche para 2 personas.</p>
            <GrillaHoteles items={resto} />
          </section>

          <PasosHotel />
          <Preguntas faqs={faqs} />

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold" style={{ color: AZUL }}>
              Hoteles en otros destinos
            </h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {otros.map((y) => (
                <li key={y.slug}>
                  <Link href={`/hoteles-en/${y.slug}`} className="group block overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg">
                    <span className="relative block aspect-[4/3] bg-slate-100">
                      <Image src={y.foto} alt={`Hoteles en ${y.nombre}`} fill unoptimized loading="lazy" sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                    </span>
                    <span className="block p-4">
                      <strong className="block text-base group-hover:underline" style={{ color: AZUL }}>
                        {y.nombre}
                      </strong>
                      <span className="text-sm text-slate-600">
                        {y.total} hoteles · desde {formatoUSD(y.desde)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <CierreHotel titulo={`Tu hotel en ${d.nombre}, listo`} precio={info.desde} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Hoteles en ${d.nombre}`} subtitulo={`Desde ${formatoUSD(info.desde)} la noche`} />
    </>
  );
}
