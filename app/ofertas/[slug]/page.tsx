import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { SeoSiloFooter } from "@/components/SeoSiloFooter";
import {
  MIL_LANDINGS_COMERCIALES_SEO,
  TODOS_LOS_RESUMENES_OFERTAS_SEO,
  buscarLandingComercial,
} from "@/lib/catalogo-mil-landings-comerciales";
import {
  construirSchemaLandingSEO,
  obtenerEnlacesCruzadosSEO,
} from "@/lib/seo-arquitectura";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MIL_LANDINGS_COMERCIALES_SEO.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarLandingComercial(slug);
  if (!item) return {};

  const url = `https://citylandtravel.com/ofertas/${item.slug}`;
  const imgUrl = item.config.vitrina.img.startsWith("http")
    ? item.config.vitrina.img
    : `https://citylandtravel.com${item.config.vitrina.img}`;

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: item.metaTitle,
      description: item.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: imgUrl,
          width: 1200,
          height: 630,
          alt: item.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
      images: [imgUrl],
    },
    other: {
      "geo.region": "PE-LIM",
      "geo.placename": "Los Olivos, Lima, Perú",
    },
  };
}

export default async function OfertaComercialPage({ params }: Props) {
  const { slug } = await params;
  const item = buscarLandingComercial(slug);

  if (!item) {
    notFound();
  }

  const listaCluster = TODOS_LOS_RESUMENES_OFERTAS_SEO.filter(
    (x) => x.cluster === item.cluster
  );
  const idxCluster = listaCluster.findIndex((x) => x.slug === item.slug);
  const relacionadosCluster = Array.from(
    { length: Math.min(12, Math.max(0, listaCluster.length - 1)) },
    (_, i) => listaCluster[(Math.max(0, idxCluster) + i + 1) % listaCluster.length]
  ).filter((x) => x && x.slug !== item.slug);

  const enlacesCruzados = obtenerEnlacesCruzadosSEO(
    `${item.titulo} ${item.destinoOPais} ${item.clusterNombre}`,
    item.slug
  );

  const migas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Ofertas y Paquetes", url: "/ofertas" },
    { nombre: item.clusterNombre, url: enlacesCruzados.pilar.href },
    { nombre: item.titulo, url: `/ofertas/${item.slug}` },
  ];

  const imgUrl = item.config.vitrina.img.startsWith("http")
    ? item.config.vitrina.img
    : `https://citylandtravel.com${item.config.vitrina.img}`;

  const jsonLd = construirSchemaLandingSEO({
    url: `https://citylandtravel.com/ofertas/${item.slug}`,
    titulo: item.titulo,
    descripcion: item.metaDescription,
    precioDesdeUSD: item.precioDesdeUSD,
    cantidadOfertas: item.config.items.length,
    destinoOPais: item.destinoOPais,
    imagenUrl: imgUrl,
    migas,
    faqs: item.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirlineLandingTemplate config={item.config} breadcrumbs={migas}>
        {item.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6">
                Preguntas Frecuentes: {item.titulo}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.faqs.map((f) => (
                  <div
                    key={f.q}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs"
                  >
                    <h3 className="text-sm font-extrabold text-[#0a1628] mb-2">
                      {f.q.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {f.a.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-10 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
              Más Ofertas en {item.clusterNombre}
            </h2>
            <div className="flex flex-wrap gap-2">
              {relacionadosCluster.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ofertas/${r.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  {r.titulo} (Desde ${r.precioDesdeUSD})
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SeoSiloFooter
          enlaces={enlacesCruzados}
          tituloContexto={item.destinoOPais}
        />
      </AirlineLandingTemplate>
    </>
  );
}
