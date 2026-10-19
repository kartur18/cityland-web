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
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
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

  const title = optimizarMetaTitleSEO(item.metaTitle);
  const description = optimizarMetaDescriptionSEO(item.metaDescription);

  return {
    title,
    description,
    keywords: item.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
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
      title,
      description,
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
  const idxCluster = Math.max(
    0,
    listaCluster.findIndex((x) => x.slug === item.slug)
  );
  const saltosSmallWorld = [1, 2, 3, 4, 5, 6, 24, 72, 180, 450, 1100, 2200];
  const vistos = new Set<string>([item.slug]);
  const relacionadosCluster = saltosSmallWorld
    .map((salto) => listaCluster[(idxCluster + salto) % listaCluster.length])
    .filter((x) => {
      if (!x || vistos.has(x.slug)) return false;
      vistos.add(x.slug);
      return true;
    });

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
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6 text-center">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-3">
                {item.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group bg-white rounded-2xl px-5 py-4 border border-slate-200/90 shadow-2xs transition-colors open:border-amber-400"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm font-extrabold text-[#0a1628]">
                      <span>{f.q.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {f.a.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                    </p>
                  </details>
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
