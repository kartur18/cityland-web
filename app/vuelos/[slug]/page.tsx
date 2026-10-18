import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AirlineLandingTemplate from "@/components/AirlineLandingTemplate";
import { SeoSiloFooter } from "@/components/SeoSiloFooter";
import { RUTAS_VUELOS_SEO, buscarRutaVuelo } from "@/lib/rutas-vuelos";
import { DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";
import {
  construirSchemaLandingSEO,
  obtenerEnlacesCruzadosSEO,
} from "@/lib/seo-arquitectura";

export const revalidate = 86400;
export const dynamicParams = true;

const TODOS_DESTINOS = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return RUTAS_VUELOS_SEO.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ruta = buscarRutaVuelo(slug);
  if (!ruta) return {};

  const url = `https://citylandtravel.com/vuelos/${ruta.slug}`;

  return {
    title: ruta.metaTitle,
    description: ruta.metaDescription,
    keywords: ruta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: ruta.metaTitle,
      description: ruta.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: "https://citylandtravel.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: `Vuelos de ${ruta.origen} a ${ruta.destino} — Cityland Travel`,
        },
      ],
    },
    other: {
      "geo.region": "PE-LIM",
      "geo.placename": "Los Olivos, Lima, Perú",
    },
  };
}

export default async function RutaVueloPage({ params }: Props) {
  const { slug } = await params;
  const ruta = buscarRutaVuelo(slug);

  if (!ruta) {
    notFound();
  }

  const idxActual = RUTAS_VUELOS_SEO.findIndex((r) => r.slug === ruta.slug);
  const rutasRelacionadas = Array.from({ length: 12 }, (_, i) => {
    const idx = (Math.max(0, idxActual) + i + 1) % RUTAS_VUELOS_SEO.length;
    return RUTAS_VUELOS_SEO[idx];
  }).filter((r) => r && r.slug !== ruta.slug);

  const destinosRelacionados = Array.from({ length: 6 }, (_, i) => {
    const idx = (Math.max(0, idxActual) + i) % TODOS_DESTINOS.length;
    return TODOS_DESTINOS[idx];
  }).filter(Boolean);

  const paisDestino = ruta.config.vitrina.pais || ruta.destino;

  const enlacesCruzados = obtenerEnlacesCruzadosSEO(
    `Vuelos de ${ruta.origen} a ${ruta.destino} ${paisDestino}`,
    ruta.slug
  );

  const migas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Rutas de Vuelos", url: "/vuelos" },
    { nombre: paisDestino, url: enlacesCruzados.pilar.href },
    { nombre: `Vuelos de ${ruta.origen} a ${ruta.destino}`, url: `/vuelos/${ruta.slug}` },
  ];

  const imgUrl = ruta.config.vitrina.img.startsWith("http")
    ? ruta.config.vitrina.img
    : `https://citylandtravel.com${ruta.config.vitrina.img}`;

  const jsonLd = construirSchemaLandingSEO({
    url: `https://citylandtravel.com/vuelos/${ruta.slug}`,
    titulo: `Vuelos y Paquetes de ${ruta.origen} (${ruta.codigoOrigen}) a ${ruta.destino} (${ruta.codigoDestino})`,
    descripcion: ruta.metaDescription,
    precioDesdeUSD: ruta.precioDesdeUSD,
    cantidadOfertas: ruta.config.items.length,
    destinoOPais: `${ruta.destino}, ${paisDestino}`,
    imagenUrl: imgUrl,
    migas,
    faqs: ruta.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirlineLandingTemplate config={ruta.config} breadcrumbs={migas}>
        {ruta.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6">
                Preguntas Frecuentes: Ruta {ruta.origen} ({ruta.codigoOrigen}) → {ruta.destino} ({ruta.codigoDestino})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ruta.faqs.map((f) => (
                  <div
                    key={f.q}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs"
                  >
                    <h3 className="text-sm font-extrabold text-[#0a1628] mb-2">
                      {f.q}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-10 bg-white border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
                Más Rutas de Vuelos y Destinos Relacionados
              </h2>
              <div className="flex flex-wrap gap-2">
                {rutasRelacionadas.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/vuelos/${r.slug}`}
                    className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                  >
                    Vuelos {r.origen} a {r.destino} (${r.precioDesdeUSD} USD)
                  </Link>
                ))}
              </div>
            </div>

            {destinosRelacionados.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Paquetes Turísticos Recomendados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {destinosRelacionados.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/destinos/${d.slug}`}
                      className="text-xs font-semibold text-slate-600 hover:text-[#0a1628] bg-slate-100 hover:bg-slate-200/70 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Paquete {d.ciudad} (Desde ${d.turistico} USD)
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <SeoSiloFooter
          enlaces={enlacesCruzados}
          tituloContexto={`${ruta.destino} (${paisDestino})`}
        />
      </AirlineLandingTemplate>
    </>
  );
}
