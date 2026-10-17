import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";
import {
  VIAJES_ESPECIALIZADOS_SEO,
  buscarViajeEspecializado,
} from "@/lib/catalogo-viajes-especializados";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return VIAJES_ESPECIALIZADOS_SEO.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);
  if (!item) return {};

  const url = `https://citylandtravel.com/viajes/${item.slug}`;

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: item.metaTitle,
      description: item.metaDescription,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [
        {
          url: item.imagenHero.startsWith("http")
            ? item.imagenHero
            : `https://citylandtravel.com${item.imagenHero}`,
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
      images: [
        item.imagenHero.startsWith("http")
          ? item.imagenHero
          : `https://citylandtravel.com${item.imagenHero}`,
      ],
    },
  };
}

export default async function ViajeEspecializadoPage({ params }: Props) {
  const { slug } = await params;
  const item = buscarViajeEspecializado(slug);

  if (!item) {
    notFound();
  }

  const mitadPrecio = Math.max(15, Math.round(item.precioDesdeUSD * 0.5));
  const precioCompleto =
    item.precioDesdeUSD < 120
      ? item.precioDesdeUSD + 45
      : Math.round((item.precioDesdeUSD * 1.32) / 10) * 10;

  const inc0 = item.incluye[0] || "Boleto aéreo o servicio verificado con código oficial";
  const inc1 = item.incluye[1] || "Asesoría personalizada en oficina Los Olivos y WhatsApp";
  const inc2 = item.incluye[2] || "Boleta o Factura Electrónica SUNAT (RUC 20614914239)";
  const inc3 = item.incluye[3] || "Soporte 24/7 antes y durante tu viaje";

  const listaCat = VIAJES_ESPECIALIZADOS_SEO.filter(
    (v) => v.categoria === item.categoria
  );
  const idxCat = listaCat.findIndex((v) => v.slug === item.slug);
  const relacionados = Array.from(
    { length: Math.min(12, Math.max(0, listaCat.length - 1)) },
    (_, i) => listaCat[(Math.max(0, idxCat) + i + 1) % listaCat.length]
  ).filter((v) => v && v.slug !== item.slug);

  const config: ConfiguracionLandingAerolinea = {
    badgeHero: item.badge,
    banderasHero: ["Perú", item.destinoOPais],
    tituloHero: item.titulo,
    tituloDestacadoHero: `Desde $${item.precioDesdeUSD.toLocaleString("en-US")} USD`,
    descripcionHero: item.subtitulo,
    negritaHero:
      "Atención inmediata por WhatsApp y en nuestra sede física de Av. Antúnez de Mayolo 814, Los Olivos.",
    ctaPrincipalTexto: "Cotizar Promoción por WhatsApp",
    waPrincipalNumero: "51944103890",
    waPrincipalMensaje: item.waMensaje,
    checksHero: [inc0, inc1, inc2],
    vitrina: {
      pais: item.destinoOPais,
      etiquetaIzq: item.destinoOPais,
      etiquetaDer: item.precioDesdeUSD >= 200 ? "Separa con 50%" : "Emisión Inmediata",
      img: item.imagenHero,
      alt: item.titulo,
      sobretitulo: item.etiquetaPrecio,
      titulo: item.titulo,
      labelPrecio: "Tarifa Promocional Vigente",
      precio: `$${item.precioDesdeUSD.toLocaleString("en-US")}`,
      moneda: "USD",
      notaInferior:
        item.precioDesdeUSD >= 200
          ? `Separa hoy con $${mitadPrecio.toLocaleString("en-US")} USD (50% inicial)`
          : "Entrega inmediata verificada con respaldo RUC 20614914239",
      waNumero: "51944103890",
      waMensaje: item.waMensaje,
    },
    seccionCatalogo: {
      sobretitulo: `Opciones Comerciales Verificadas · ${item.destinoOPais}`,
      titulo: `Modalidades y Tarifas para ${item.destinoOPais}`,
      filtros: [
        { id: "todos", label: "Todas las Opciones" },
        { id: "promo", label: "Tarifa Promocional" },
        { id: "completo", label: "Programa Completo / VIP" },
      ],
    },
    items: [
      {
        id: `${item.slug}-base`,
        titulo: item.titulo,
        pais: item.destinoOPais,
        filtro: "promo",
        subtitulo: item.etiquetaPrecio,
        precioPrincipal: `$${item.precioDesdeUSD.toLocaleString("en-US")}`,
        precioSecundario:
          item.precioDesdeUSD >= 200
            ? `$${mitadPrecio.toLocaleString("en-US")}`
            : undefined,
        notaPrecio: "Tarifa promocional verificada · Impuestos incluidos",
        tag: "Más Solicitado",
        tagBg: "bg-red-600",
        img: item.galeria[0] || item.imagenHero,
        alt: `${item.titulo} — Opción Promocional`,
        resumenCorto: "Confirmación inmediata con código oficial",
        checks: [inc0, inc1, inc2],
        waNumber: "51944103890",
        waMensaje: item.waMensaje,
      },
      {
        id: `${item.slug}-plus`,
        titulo: `${item.destinoOPais} — Programa Plus con Asistencia Total`,
        pais: item.destinoOPais,
        filtro: "completo",
        subtitulo: "Servicio Integral + Prioridad + Asesoría Personalizada",
        precioPrincipal: `$${precioCompleto.toLocaleString("en-US")}`,
        precioSecundario:
          precioCompleto >= 200
            ? `$${Math.round(precioCompleto * 0.5).toLocaleString("en-US")}`
            : undefined,
        notaPrecio: "Incluye gestión integral y cobertura preferente",
        tag: "Edición Plus",
        tagBg: "bg-blue-700",
        img: item.galeria[1] || item.imagenHero,
        alt: `${item.destinoOPais} — Programa Plus`,
        resumenCorto: "Ideal para viajar con total tranquilidad",
        checks: [inc1, inc2, inc3],
        waNumber: "51944103890",
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar la opción Programa Plus para ${item.titulo} (Desde $${precioCompleto} USD).`,
      },
      {
        id: `${item.slug}-grupo`,
        titulo: `${item.destinoOPais} — Tarifa Especial Parejas, Familias y Grupos`,
        pais: item.destinoOPais,
        filtro: "promo",
        subtitulo: "Descuento adicional a partir de 2 o más pasajeros",
        precioPrincipal: `$${Math.max(
          25,
          Math.round(item.precioDesdeUSD * 0.94)
        ).toLocaleString("en-US")}`,
        notaPrecio: "Tarifa corporativa o familiar por persona",
        tag: "Descuento Dúo / Grupo",
        tagBg: "bg-emerald-700",
        img: item.galeria[2] || item.imagenHero,
        alt: `${item.destinoOPais} — Tarifa Grupal y Familiar`,
        resumenCorto: "Cotización a medida según tus fechas de viaje",
        checks: [
          "Descuento preferencial viajando en pareja, familia o grupo",
          "Facilidad de pago con el 50% de inicial y cuotas programadas",
          "Atención presencial en Los Olivos o 100% digital por WhatsApp",
        ],
        waNumber: "51944103890",
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar tarifa para pareja/familia/grupo en: ${item.titulo}.`,
      },
    ],
    pilares: item.beneficiosClave.slice(0, 4).map((b) => ({
      titulo: b.titulo,
      sub: b.desc,
    })),
    bannerFinal: {
      sobretitulo: "Central Oficial Cityland Travel · RUC 20614914239",
      titulo: `¿Listo para reservar ${item.titulo}?`,
      descripcion: item.resumenEjecutivo,
      ctaTexto: "Hablar con un Especialista por WhatsApp",
      waNumero: "51944103890",
      waMensaje: item.waMensaje,
      img: item.galeria[0] || item.imagenHero,
      alt: item.titulo,
    },
    waFlotante: {
      numero: "51944103890",
      texto: "Cotizar por WhatsApp",
      mensaje: item.waMensaje,
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://citylandtravel.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: item.titulo,
            item: `https://citylandtravel.com/viajes/${item.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        name: item.titulo,
        description: item.metaDescription,
        image: item.imagenHero.startsWith("http")
          ? item.imagenHero
          : `https://citylandtravel.com${item.imagenHero}`,
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(item.precioDesdeUSD),
          availability: "https://schema.org/InStock",
          url: `https://citylandtravel.com/viajes/${item.slug}`,
          seller: {
            "@type": "TravelAgency",
            name: "Cityland Travel E.I.R.L.",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: item.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirlineLandingTemplate config={config}>
        {item.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6">
                Preguntas Frecuentes sobre {item.destinoOPais}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.faqs.map((f) => (
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
              Otras Promociones y Servicios Relacionados
            </h2>
            <div className="flex flex-wrap gap-2">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/viajes/${rel.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-50 hover:bg-red-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  {rel.titulo} (${rel.precioDesdeUSD} USD)
                </Link>
              ))}
              <Link
                href="/directorio"
                className="text-xs font-bold text-red-600 hover:underline px-3 py-1.5"
              >
                Ver todo el catálogo →
              </Link>
            </div>
          </div>
        </section>
      </AirlineLandingTemplate>
    </>
  );
}
