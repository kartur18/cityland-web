import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AGENCIAS_LOCALES_SEO,
  buscarAgenciaLocal,
} from "@/lib/catalogo-agencias-locales";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return AGENCIAS_LOCALES_SEO.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = buscarAgenciaLocal(slug);
  if (!item) return { title: "Agencia de Viajes | Cityland Travel" };

  const canonical = `https://citylandtravel.com/agencia/${item.slug}`;
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: item.keywords,
    alternates: { canonical },
    openGraph: {
      title: item.metaTitle,
      description: item.metaDescription,
      url: canonical,
      type: "website",
      locale: "es_PE",
      siteName: "Cityland Travel",
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
    },
  };
}

const OFERTAS_DESTACADAS = [
  {
    titulo: "Paquete y Vuelos a Madrid / Barcelona (España)",
    precio: "$890",
    detalle: "Boleto aéreo + Carpeta Migratoria + Seguro Schengen 30.000€",
    href: "/espana",
  },
  {
    titulo: "Punta Cana, Cancún o Cartagena Todo Incluido",
    precio: "$699",
    detalle: "Vuelos + Resort frente al mar + Traslados + Seguro médico",
    href: "/caribe",
  },
  {
    titulo: "Paquete Combinado Panamá + Medellín (7 Días)",
    precio: "$799",
    detalle: "Vuelos Copa Airlines + Hoteles + Desayunos + Tours incluidos",
    href: "/paquetes/panama-medellin",
  },
  {
    titulo: "Cusco, Valle Sagrado y Machu Picchu",
    precio: "$299",
    detalle: "Vuelos + Hotel + Tren turístico + Entrada oficial a Machu Picchu",
    href: "/cusco",
  },
  {
    titulo: "Circuitos por Europa (15 Días) y Turquía Sin Visa",
    precio: "$1,490",
    detalle: "Vuelos desde Lima + Hoteles 4★ + Guías en español + Traslados",
    href: "/europa-turquia",
  },
  {
    titulo: "Asesoría de Visas (EE. UU., Canadá y México) y Seguros",
    precio: "$45",
    detalle: "Trámite consular paso a paso y pólizas Schengen sin deducible",
    href: "/visas",
  },
];

export default async function AgenciaLocalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = buscarAgenciaLocal(slug);
  if (!item) notFound();

  const waUrl = `https://wa.me/51983882504?text=${encodeURIComponent(item.waMensaje)}`;
  const canonicalUrl = `https://citylandtravel.com/agencia/${item.slug}`;
  const cercanas = AGENCIAS_LOCALES_SEO.filter(
    (a) => a.tipoZona === item.tipoZona && a.slug !== item.slug
  ).slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio — Cityland Travel",
            item: "https://citylandtravel.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cobertura Nacional",
            item: "https://citylandtravel.com/directorio",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Agencia de Viajes en ${item.zona}`,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "TravelAgency",
        name: `Cityland Travel — Atención para ${item.zona}`,
        url: canonicalUrl,
        telephone: "+51983882504",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Antúnez de Mayolo N. 814",
          addressLocality: "Los Olivos, Lima",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
        areaServed: {
          "@type": "Place",
          name: `${item.zona}, ${item.region}, Perú`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `¿Cómo compro un vuelo o paquete turístico desde ${item.zona}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${item.tiempoAtencion}. Puedes cotizar ahora mismo por WhatsApp Business con uno de nuestros 12 asesores especializados o visitarnos en nuestra sede central en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima (RUC 20614914239).`,
            },
          },
          {
            "@type": "Question",
            name: "¿Los precios en dólares incluyen impuestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Todas nuestras tarifas referenciales están expresadas en dólares americanos (USD) e incluyen impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-slate-900 to-[#112240] text-white pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
            <span>📍 Atención Oficial · {item.zona} ({item.region}) · RUC 20614914239</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Agencia de Viajes para {item.zona}: Vuelos a Europa, Caribe y todo el Perú
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mb-8 leading-relaxed">
            {item.tiempoAtencion}. Emitimos boletos aéreos con código PNR verificable, paquetes Todo Incluido, carpeta migratoria para España e Italia y seguros Schengen de 30.000€.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all text-sm sm:text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Cotizar desde {item.zona} por WhatsApp</span>
            </a>
            <Link
              href="/directorio"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-4 rounded-xl border border-white/15 transition-all text-sm"
            >
              <span>Ver catálogo de rutas y destinos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Catálogo de Servicios para la Zona */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          Destinos y Tarifas Referenciales para Viajeros de {item.zona}
        </h2>
        <p className="text-sm text-slate-600 mb-8">
          Precios referenciales expresados en dólares americanos (USD) con impuestos y cargos obligatorios incluidos. Tarifa sujeta a disponibilidad y condiciones aplicables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {OFERTAS_DESTACADAS.map((of) => (
            <div
              key={of.titulo}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                  Desde {of.precio} USD
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {of.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  {of.detalle}
                </p>
                <p className="text-[11px] text-slate-500 mb-4">
                  Impuestos incluidos · Tarifa sujeta a disponibilidad y condiciones aplicables
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                <Link
                  href={of.href}
                  className="text-xs font-bold text-slate-700 hover:text-red-600"
                >
                  Ver detalles →
                </Link>
                <a
                  href={`https://wa.me/51983882504?text=${encodeURIComponent(
                    `Hola, les escribo desde ${item.zona}. Quiero cotizar: ${of.titulo} (Desde ${of.precio} USD).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Cotizar</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Respaldo Legal y Zonas Cercanas */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Respaldo Formal de Agencia Física en Lima (RUC 20614914239)
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            En <strong>Cityland Travel E.I.R.L.</strong> combinamos la rapidez de nuestra plataforma digital de 12 asesores en WhatsApp Business con la seguridad de nuestra oficina física en <strong>Av. Antúnez de Mayolo N. 814, Los Olivos, Lima</strong>. Todos nuestros pasajeros de <strong>{item.zona}</strong> reciben código de reserva aérea verificable (PNR), contrato de viaje y comprobante electrónico SUNAT.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Otras zonas de atención en {item.region}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cercanas.map((c) => (
              <Link
                key={c.slug}
                href={`/agencia/${c.slug}`}
                className="text-xs bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                Agencia en {c.zona}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
