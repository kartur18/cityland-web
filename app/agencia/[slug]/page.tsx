import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { robotsSegunRuta } from "@/lib/indexacion";
import Link from "next/link";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { SeoSiloFooter } from "@/components/SeoSiloFooter";
import { obtenerConfigAgenciaOficial } from "@/lib/catalogo-agencia-oficial";
import {
  AGENCIAS_LOCALES_SEO,
  buscarAgenciaLocal,
} from "@/lib/catalogo-agencias-locales";
import {
  obtenerEnlacesCruzadosSEO,
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return AGENCIAS_LOCALES_SEO.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);
  if (!agencia) return {};

  const url = `https://citylandtravel.com/agencia/${agencia.slug}`;
  const title = optimizarMetaTitleSEO(agencia.metaTitle);
  const description = optimizarMetaDescriptionSEO(agencia.metaDescription);

  return {
    title,
    description,
    keywords: agencia.keywords,
    robots: robotsSegunRuta(`/agencia/${agencia.slug}`),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: "https://citylandtravel.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://citylandtravel.com/opengraph-image"],
    },
    other: {
      "geo.region": "PE-LIM",
      "geo.placename": `${agencia.zona}, ${agencia.region}, Perú`,
    },
  };
}

export default async function AgenciaLocalSlugPage({ params }: Props) {
  const { slug } = await params;
  const agencia = buscarAgenciaLocal(slug);
  if (!agencia) notFound();

  const config = obtenerConfigAgenciaOficial(agencia.zona, agencia.tiempoAtencion);

  const idxActual = AGENCIAS_LOCALES_SEO.findIndex((a) => a.slug === agencia.slug);
  const SALTOS_AGENCIAS = [1, 2, 3, 4, 6, 10, 18, 30, 45, 60, 75, 90];
  const vistosAgencias = new Set<string>([agencia.slug]);
  const agenciasCercanas = SALTOS_AGENCIAS.map((salto) => {
    const idx = (Math.max(0, idxActual) + salto) % AGENCIAS_LOCALES_SEO.length;
    return AGENCIAS_LOCALES_SEO[idx];
  }).filter((a) => {
    if (!a || vistosAgencias.has(a.slug)) return false;
    vistosAgencias.add(a.slug);
    return true;
  });

  const enlacesCruzados = obtenerEnlacesCruzadosSEO(
    `Agencia de Viajes ${agencia.zona} ${agencia.region} España Europa Caribe`,
    agencia.slug
  );

  const migas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Cobertura Nacional y Distrital", url: "/agencia" },
    { nombre: `Agencia de Viajes en ${agencia.zona}`, url: `/agencia/${agencia.slug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: migas.map((m, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: m.nombre,
          item: `https://citylandtravel.com${m.url}`,
        })),
      },
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        name: `Cityland Travel — Atención para ${agencia.zona}`,
        legalName: "Cityland Group E.I.R.L.",
        taxID: "20614914239",
        url: `https://citylandtravel.com/agencia/${agencia.slug}`,
        telephone: "+51944103890",
        priceRange: "$$",
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${agencia.zona}, ${agencia.region}, Perú`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Antúnez de Mayolo 814, Los Olivos",
          addressLocality: "Los Olivos",
          addressRegion: "Lima",
          postalCode: "15301",
          addressCountry: "PE",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirlineLandingTemplate config={config} breadcrumbs={migas}>
        <section className="py-10 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#0a1628] mb-4">
              Atención y Reservas para Viajeros de {agencia.zona} ({agencia.region})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
                <h3 className="text-sm font-extrabold text-[#0a1628] mb-1.5">
                  ¿Cómo reservo mi paquete o vuelo desde {agencia.zona}?
                </h3>
                <p>
                  {agencia.tiempoAtencion}. Emitimos tu código PNR aéreo verificable, vouchers de hotel y Boleta o Factura Electrónica SUNAT (RUC 20614914239) tanto de manera presencial en Los Olivos como 100% digital por WhatsApp (+51 944 103 890).
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
                <h3 className="text-sm font-extrabold text-[#0a1628] mb-1.5">
                  {agencia.tipoZona === "provincia"
                    ? `¿Coordinan conexiones aéreas desde ${agencia.zona} vía Lima?`
                    : `¿Qué facilidades de pago tienen para viajeros de ${agencia.zona}?`}
                </h3>
                <p>
                  {agencia.tipoZona === "provincia"
                    ? `Sí. Coordinamos tu itinerario desde ${agencia.zona} (${agencia.region}) hacia el Aeropuerto Internacional Jorge Chávez (LIM) para conectar con tus vuelos a España, Europa, el Caribe o Estados Unidos con tiempos de escala seguros.`
                    : `Puedes separar tus paquetes internacionales o nacionales con el 50% de inicial mediante cuentas empresariales BCP, BBVA, Interbank, Yape, Plin o tarjeta, y programar el saldo antes de tu viaje.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
              Cobertura de Cityland Travel en Otros Distritos y Ciudades del Perú
            </h2>
            <div className="flex flex-wrap gap-2">
              {agenciasCercanas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/agencia/${a.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  Agencia de Viajes en {a.zona}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SeoSiloFooter
          enlaces={enlacesCruzados}
          tituloContexto={agencia.zona}
        />
      </AirlineLandingTemplate>
    </>
  );
}

