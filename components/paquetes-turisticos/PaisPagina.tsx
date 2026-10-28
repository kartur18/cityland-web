import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Migas, Preguntas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { CierreTicket, ComoSeparar, GrillaTickets, PortadaTicket } from "@/components/paquetes-turisticos/Ticket";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { paisesConPaquetes, paquetesDePais, precioPaquete, type PaisTuristico } from "@/lib/paquetes-turisticos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (x: PaisTuristico) => `/paquetes-turisticos/${x.slug}`;

export function metadataPais(x: PaisTuristico): Metadata {
  const ps = paquetesDePais(x.slug);
  const url = `${URL_BASE_SEO}${ruta(x)}`;
  const desde = precioPaquete(ps[0]);
  const desc = `${ps.length} paquetes turísticos a ${x.nombre} desde ${formatoUSD(desde)} por persona. ${x.intro} Separa con el 50%.`;
  return {
    title: tituloSeo(`Paquetes turísticos a ${x.nombre}`, `desde ${formatoUSD(desde)}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `Paquetes turísticos a ${x.nombre}`,
      description: desc,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(ps[0].img, URL_BASE_SEO)],
    },
  };
}

// Todos los paquetes turísticos de un país, del más barato al más caro, con los datos para viajar.
export default function PaisPagina({ pais: x }: { pais: PaisTuristico }) {
  const ps = paquetesDePais(x.slug);
  const url = `${URL_BASE_SEO}${ruta(x)}`;
  const desde = precioPaquete(ps[0]);
  const otros = paisesConPaquetes().filter((y) => y.slug !== x.slug);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero cotizar un paquete turístico a ${x.nombre}. ¿Qué fechas tienen?`,
    refWeb: `citylandtravel.com${ruta(x)}`,
  });
  const faqs = [
    {
      q: `¿Cuánto cuesta un paquete turístico a ${x.nombre}?`,
      a: `Desde ${formatoUSD(desde)} por persona en habitación doble. Tenemos ${ps.length} programas para elegir.`,
    },
    { q: `¿Qué documento necesito para ${x.nombre}?`, a: x.documento },
    { q: `¿Cuál es la mejor época para viajar a ${x.nombre}?`, a: x.epoca },
    {
      q: "¿Incluyen el vuelo desde Lima?",
      a: "El precio es del paquete en destino; el boleto desde Lima te lo cotizamos aparte en la misma reserva.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Paquetes turísticos", item: `${URL_BASE_SEO}/paquetes-turisticos` },
          { "@type": "ListItem", position: 3, name: x.nombre, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: `Paquetes turísticos a ${x.nombre}`,
        itemListElement: ps
          .slice(0, 60)
          .map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${URL_BASE_SEO}/paquetes-turisticos/${p.slug}`, name: p.nombre })),
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
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Paquetes turísticos", href: "/paquetes-turisticos" }, { nombre: x.nombre }]} />
            <PortadaTicket
              foto={ps[0].img}
              alt={`Paquetes turísticos a ${x.nombre}`}
              sello={`${ps.length} paquetes turísticos`}
              titulo={`Paquetes turísticos a ${x.nombre}`}
              bajada={x.intro}
              etiquetaPrecio="Por persona, desde"
              precio={desde}
              nota="En habitación doble. Vuelo desde Lima cotizado aparte."
              wa={wa}
              boton="Cotizar por WhatsApp"
              ancla="Ver paquetes"
            />
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">Elige tu paquete a {x.nombre}</h2>
            <p className="text-base text-slate-600">Ordenados del más barato al más caro. Precio por persona en habitación doble.</p>
            <GrillaTickets items={ps} />
          </section>

          <section className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-orange-100 sm:p-8 md:grid-cols-3">
            <h2 className="md:col-span-3 text-2xl font-extrabold text-[#10302e]">Antes de viajar a {x.nombre}</h2>
            <p className="text-base text-slate-700">
              <strong className="block text-[#10302e]">Documentos</strong>
              {x.documento}{" "}
              {x.requisitos && (
                <Link href={x.requisitos} className="font-bold text-[#0f766e] underline">
                  Ver requisitos
                </Link>
              )}
            </p>
            <p className="text-base text-slate-700">
              <strong className="block text-[#10302e]">Moneda</strong>
              {x.moneda}
            </p>
            <p className="text-base text-slate-700">
              <strong className="block text-[#10302e]">Mejor época</strong>
              {x.epoca}
            </p>
          </section>

          <ComoSeparar />
          <Preguntas faqs={faqs} />

          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#10302e]">Paquetes turísticos a otros países</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {otros.map((y) => (
                <li key={y.slug}>
                  <Link
                    href={`/paquetes-turisticos/${y.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 hover:shadow-lg"
                  >
                    <span className="relative block aspect-[4/3] bg-orange-50">
                      <Image
                        src={y.foto}
                        alt={`Paquetes turísticos a ${y.nombre}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="block p-4">
                      <strong className="block text-base text-[#10302e] group-hover:underline">{y.nombre}</strong>
                      <span className="text-sm text-slate-600">
                        {y.total} paquetes · desde {formatoUSD(y.desde)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <CierreTicket titulo={`Cotiza hoy tu viaje a ${x.nombre}`} precio={desde} wa={wa} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={wa} titulo={`${x.nombre} desde ${formatoUSD(desde)}`} subtitulo="Paquetes turísticos por persona" />
    </>
  );
}
