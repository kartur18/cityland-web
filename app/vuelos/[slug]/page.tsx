import { Metadata } from "next";
import { robotsSegunRuta } from "@/lib/indexacion";
import { tituloSeoUnico } from "@/lib/titulos-seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import VuelosJorgeChavezTemplate from "@/components/VuelosJorgeChavezTemplate";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";
import { SeoSiloFooter } from "@/components/SeoSiloFooter";
import GuiaRapidaLanding from "@/components/GuiaRapidaLanding";
import { guiaVuelo } from "@/lib/contenido-guia";
import { formatoUSD, textoPrecio } from "@/lib/formato-precio";
import { RUTAS_VUELOS_SEO, buscarRutaVuelo } from "@/lib/rutas-vuelos";
import { DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";
import {
  construirSchemaLandingSEO,
  obtenerEnlacesCruzadosSEO,
  optimizarMetaTitleSEO,
  optimizarMetaDescriptionSEO,
} from "@/lib/seo-arquitectura";

export const revalidate = 86400;
export const dynamicParams = true;

const TODOS_DESTINOS = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];
const REGEX_RUTA_EUROPA =
  /\b(espana|españa|italia|francia|paises bajos|países bajos|holanda|alemania|suiza|portugal|belgica|bélgica|reino unido|inglaterra|grecia|austria|europa|madrid|barcelona|valencia|sevilla|bilbao|malaga|málaga|zaragoza|alicante|palma|tenerife|roma|milan|milán|turin|turín|florencia|venecia|bolonia|napoles|nápoles|genova|génova|paris|parís|lyon|amsterdam|ámsterdam|lisboa|oporto|zurich|zúrich|ginebra|munich|múnich|frankfurt|berlin|berlín|bruselas|londres)\b/i;

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
  const title = tituloSeoUnico(`/vuelos/${ruta.slug}`, optimizarMetaTitleSEO(ruta.metaTitle));
  const description = optimizarMetaDescriptionSEO(ruta.metaDescription);

  return {
    title,
    description,
    keywords: ruta.keywords,
    robots: robotsSegunRuta(`/vuelos/${ruta.slug}`),
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
  const SALTOS_VUELOS = [1, 2, 3, 4, 6, 12, 24, 48, 96, 160, 240, 320];
  const vistosVuelos = new Set<string>([ruta.slug]);
  const rutasRelacionadas = SALTOS_VUELOS.map((salto) => {
    const idx = (Math.max(0, idxActual) + salto) % RUTAS_VUELOS_SEO.length;
    return RUTAS_VUELOS_SEO[idx];
  }).filter((r) => {
    if (!r || vistosVuelos.has(r.slug)) return false;
    vistosVuelos.add(r.slug);
    return true;
  });

  const destinosRelacionados = Array.from({ length: 6 }, (_, i) => {
    const idx = (Math.max(0, idxActual) + i) % TODOS_DESTINOS.length;
    return TODOS_DESTINOS[idx];
  }).filter(Boolean);

  const paisDestino = ruta.config.vitrina.pais || ruta.destino;
  const esRutaEuropa = REGEX_RUTA_EUROPA.test(
    `${ruta.origen} ${ruta.destino} ${paisDestino} ${ruta.slug}`
  );

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

  const guia = guiaVuelo(ruta);

  const jsonLd = construirSchemaLandingSEO({
    url: `https://citylandtravel.com/vuelos/${ruta.slug}`,
    titulo: `Vuelos y Paquetes de ${ruta.origen} (${ruta.codigoOrigen}) a ${ruta.destino} (${ruta.codigoDestino})`,
    descripcion: ruta.metaDescription,
    precioDesdeUSD: ruta.precioDesdeUSD,
    cantidadOfertas: ruta.config.items.length,
    destinoOPais: `${ruta.destino}, ${paisDestino}`,
    imagenUrl: imgUrl,
    migas,
    faqs: [...guia.faqs, ...ruta.faqs],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VuelosJorgeChavezTemplate ruta={ruta} breadcrumbs={migas}>
        {esRutaEuropa && (
          <ModuloSeguridadYCalculadoraEuropa
            destinoInicial={`${ruta.destino} (${paisDestino})`}
          />
        )}
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
                      {textoPrecio(f.q)}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {textoPrecio(f.a)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <GuiaRapidaLanding guia={guia} />

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
                    Vuelos {r.origen} a {r.destino} (desde {formatoUSD(r.precioDesdeUSD)})
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
                      Paquete {d.ciudad} (Desde {formatoUSD(d.turistico)})
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
      </VuelosJorgeChavezTemplate>
    </>
  );
}
