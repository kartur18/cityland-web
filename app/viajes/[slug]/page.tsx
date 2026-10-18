import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";
import { SeoSiloFooter } from "@/components/SeoSiloFooter";
import {
  VIAJES_ESPECIALIZADOS_SEO,
  buscarViajeEspecializado,
} from "@/lib/catalogo-viajes-especializados";
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

  const precioGrupo = Math.max(25, Math.round(item.precioDesdeUSD * 0.94));

  const card1Titulo =
    item.categoria === "primer-viaje"
      ? `Carpeta Migratoria Completa — ${item.destinoOPais}`
      : item.categoria === "dos-maletas"
      ? `Tarifa Promo 2 Maletas de 23 kg — ${item.destinoOPais}`
      : item.categoria === "aerolinea"
      ? `${item.titulo} — Tarifa Económica`
      : item.categoria === "requisitos"
      ? `Paquete con Carpeta Documental — ${item.destinoOPais}`
      : item.titulo;

  const card2Titulo =
    item.categoria === "primer-viaje"
      ? `Paquete Turístico Superior 4★ — ${item.destinoOPais}`
      : item.categoria === "dos-maletas"
      ? `Tarifa Flexible + 2 Maletas 23 kg — ${item.destinoOPais}`
      : item.categoria === "aerolinea"
      ? `${item.destinoOPais} — Tarifa Flexible + 2 Maletas`
      : item.categoria === "requisitos"
      ? `Programa Turístico Todo Organizado — ${item.destinoOPais}`
      : `${item.destinoOPais} — Programa Superior VIP`;

  const card2Subtitulo =
    item.categoria === "dos-maletas" || item.categoria === "aerolinea"
      ? "Incluye 2 maletas de 23 kg + Selección de asiento + Cambios flexibles"
      : "Hotelería seleccionada + Traslados + Cobertura total y asesoría 1 a 1";

  const card3Titulo =
    item.categoria === "dos-maletas" || item.categoria === "aerolinea"
      ? `Tarifa Dúo, Familiar o Grupal — ${item.destinoOPais}`
      : `Tarifa Especial Parejas, Familias y Grupos — ${item.destinoOPais}`;

  const config: ConfiguracionLandingAerolinea = {
    badgeHero: item.badge,
    banderasHero: ["Perú", item.destinoOPais],
    tituloHero: item.titulo,
    tituloDestacadoHero: `Desde $${item.precioDesdeUSD.toLocaleString("en-US")}`,
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
      moneda: "",
      notaInferior:
        item.precioDesdeUSD >= 200
          ? `Separa hoy con $${mitadPrecio.toLocaleString("en-US")} (50% inicial)`
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
        { id: "completo", label: "Programa Superior / Flexible" },
      ],
    },
    items: [
      {
        id: `${item.slug}-base`,
        titulo: card1Titulo,
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
        alt: `${card1Titulo} — Opción Promocional`,
        resumenCorto: "Confirmación inmediata con código PNR oficial",
        checks: [inc0, inc1, inc2],
        waNumber: "51944103890",
        waMensaje: item.waMensaje,
      },
      {
        id: `${item.slug}-plus`,
        titulo: card2Titulo,
        pais: item.destinoOPais,
        filtro: "completo",
        subtitulo: card2Subtitulo,
        precioPrincipal: `$${precioCompleto.toLocaleString("en-US")}`,
        precioSecundario:
          precioCompleto >= 200
            ? `$${Math.round(precioCompleto * 0.5).toLocaleString("en-US")}`
            : undefined,
        notaPrecio: "Incluye gestión integral y cobertura preferente",
        tag: "Edición Superior",
        tagBg: "bg-blue-700",
        img: item.galeria[1] || item.imagenHero,
        alt: card2Titulo,
        resumenCorto: "Ideal para viajar con máxima comodidad y flexibilidad",
        checks: [inc1, inc2, inc3],
        waNumber: "51944103890",
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar la opción "${card2Titulo}" (Desde $${precioCompleto}).`,
      },
      {
        id: `${item.slug}-grupo`,
        titulo: card3Titulo,
        pais: item.destinoOPais,
        filtro: "promo",
        subtitulo: "Descuento adicional a partir de 2 o más pasajeros",
        precioPrincipal: `$${precioGrupo.toLocaleString("en-US")}`,
        precioSecundario:
          precioGrupo >= 200
            ? `$${Math.round(precioGrupo * 0.5).toLocaleString("en-US")}`
            : undefined,
        notaPrecio: "Tarifa preferencial por pasajero viajando acompañado",
        tag: "Descuento Dúo / Grupo",
        tagBg: "bg-emerald-700",
        img: item.galeria[2] || item.imagenHero,
        alt: card3Titulo,
        resumenCorto: "Cotización personalizada según tus fechas de viaje",
        checks: [
          "Descuento preferencial viajando en pareja, familia o grupo",
          "Facilidad de pago con el 50% de inicial y cuotas programadas",
          "Atención presencial en Los Olivos o 100% digital por WhatsApp",
        ],
        waNumber: "51944103890",
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar tarifa para pareja/familia/grupo en: ${item.titulo} (Desde $${precioGrupo}).`,
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
      img: item.galeria[3] || item.galeria[0] || item.imagenHero,
      alt: item.titulo,
    },
    waFlotante: {
      numero: "51944103890",
      texto: "Cotizar por WhatsApp",
      mensaje: item.waMensaje,
    },
  };

  const enlacesCruzados = obtenerEnlacesCruzadosSEO(
    `${item.titulo} ${item.destinoOPais} ${item.badge}`,
    item.slug
  );

  const migas = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Viajes y Paquetes", url: "/viajes" },
    { nombre: item.badge, url: enlacesCruzados.pilar.href },
    { nombre: item.titulo, url: `/viajes/${item.slug}` },
  ];

  const imgUrl = item.imagenHero.startsWith("http")
    ? item.imagenHero
    : `https://citylandtravel.com${item.imagenHero}`;

  const jsonLd = construirSchemaLandingSEO({
    url: `https://citylandtravel.com/viajes/${item.slug}`,
    titulo: item.titulo,
    descripcion: item.metaDescription,
    precioDesdeUSD: item.precioDesdeUSD,
    cantidadOfertas: config.items.length,
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
      <AirlineLandingTemplate config={config} breadcrumbs={migas}>
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-600 block mb-1.5">
                  Información Oficial Verificada
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight leading-snug mb-3">
                  Lo que debes saber sobre {item.destinoOPais}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.resumenEjecutivo.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                </p>
              </div>
              <div className="lg:col-span-6 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0a1628] mb-3">
                  ¿Qué incluye tu gestión con Cityland Travel?
                </h3>
                <ul className="space-y-2">
                  {item.incluye.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-snug">
                        {inc.replace(/(\$[\d,.]+)\s*USD\b/gi, "$1")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {item.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] tracking-tight mb-6">
                Preguntas Frecuentes sobre {item.destinoOPais}
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
                  {rel.titulo} (${rel.precioDesdeUSD})
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
