import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AGENCIAS_LOCALES_SEO,
  buscarAgenciaLocal,
} from "@/lib/catalogo-agencias-locales";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      images: [
        {
          url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=85",
          width: 1200,
          height: 630,
          alt: `Cityland Travel — Atención para ${item.zona}`,
        },
      ],
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
    subtitulo: "Europa · Salidas desde Lima",
    precio: "$890",
    detalle: "Boleto aéreo + Carpeta Migratoria + Seguro Schengen 30.000€ + Hotel",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80",
    href: "/espana",
  },
  {
    titulo: "Punta Cana, Cancún o Cartagena Todo Incluido",
    subtitulo: "Caribe · Resorts 4★ y 5★ Frente al Mar",
    precio: "$699",
    detalle: "Vuelos + Resort con alimentación y bebidas + Traslados + Seguro",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80",
    href: "/caribe",
  },
  {
    titulo: "Paquete Combinado Panamá + Medellín (7 Días)",
    subtitulo: "2 Países en 1 Viaje · Sin Visa",
    precio: "$799",
    detalle: "Vuelos Copa Airlines + Hoteles + Desayunos + Tours en ambos destinos",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=900&q=80",
    href: "/paquetes/panama-medellin",
  },
  {
    titulo: "Cusco Imperial, Valle Sagrado y Machu Picchu",
    subtitulo: "Perú · 4 Días / 3 Noches",
    precio: "$399",
    detalle: "Vuelos Lima–Cusco + Hotel + Tren turístico + Entrada oficial a Machu Picchu",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80",
    href: "/cusco",
  },
  {
    titulo: "Circuitos por Europa (15 Días) y Turquía Sin Visa",
    subtitulo: "Circuitos Clásicos Acompañados",
    precio: "$1,490",
    detalle: "Vuelos desde Lima + Hoteles + Desayunos + Guías en español + Traslados",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",
    href: "/europa-turquia",
  },
  {
    titulo: "Seguros Schengen 30.000€ y Asesoría de Visas",
    subtitulo: "Documentación y Pólizas Oficiales",
    precio: "$65",
    detalle: "Pólizas europeas sin deducible y gestión consular para EE. UU., Canadá y México",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    href: "/seguros",
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

  const waUrl = `https://wa.me/51944103890?text=${encodeURIComponent(item.waMensaje)}`;
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
            name: `Atención para ${item.zona}`,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "TravelAgency",
        name: `Cityland Travel — Atención para ${item.zona}`,
        url: canonicalUrl,
        telephone: "+51944103890",
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
            name: `¿Cómo reservo un vuelo o paquete turístico desde ${item.zona}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${item.tiempoAtencion}. Puedes cotizar directamente por nuestro WhatsApp oficial (+51 944 103 890) o visitarnos en nuestra sede central en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima (RUC 20614914239).`,
            },
          },
          {
            "@type": "Question",
            name: "¿Los precios en dólares incluyen impuestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Todas nuestras tarifas referenciales están expresadas en dólares americanos (USD) e incluyen impuestos aeroportuarios y cargos obligatorios. Puedes congelar tu tarifa con el 50% de inicial.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero con Fotografía Panorámica */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80"
              alt={`Agencia de Viajes para ${item.zona}`}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                  <span>📍 Atención para {item.zona} ({item.region}) · RUC 20614914239</span>
                </div>
                <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.98] mb-4">
                  Agencia de Viajes para {item.zona}: Vuelos a Europa, Caribe y Perú
                </h1>
                <p className="text-base sm:text-lg text-slate-200 max-w-2xl mb-7 leading-relaxed">
                  {item.tiempoAtencion}. Emitimos boletos aéreos con código PNR verificable, paquetes Todo Incluido, carpeta migratoria para España e Italia y seguros Schengen de 30.000€.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-4 rounded-2xl shadow-lg transition-all text-sm sm:text-base"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Cotizar desde {item.zona} (+51 944 103 890)</span>
                  </a>
                  <Link
                    href="/#paquetes"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-2xl border border-white/20 transition-all text-sm sm:text-base"
                  >
                    <span>Ver Catálogo Principal</span>
                  </Link>
                </div>
              </div>

              {/* Tarjeta Derecha de Sede y Atención */}
              <div className="lg:col-span-5">
                <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <div className="relative h-52 sm:h-60 w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80"
                      alt="Vuelos y Paquetes Cityland Travel"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute top-3.5 left-3.5 bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      Agencia Registrada MINCETUR
                    </div>
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                        Sede Central en Lima + Atención Virtual Nacional
                      </span>
                      <p className="text-lg font-extrabold leading-tight">
                        Av. Antúnez de Mayolo N. 814, Los Olivos
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm border-b border-slate-100 pb-2.5">
                      <span className="text-slate-500 font-semibold">Central WhatsApp:</span>
                      <span className="font-extrabold text-[#0a1628]">+51 944 103 890</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm border-b border-slate-100 pb-2.5">
                      <span className="text-slate-500 font-semibold">Reserva Inicial:</span>
                      <span className="font-bold text-emerald-700">Congela con el 50%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-500 font-semibold">Comprobantes:</span>
                      <span className="font-bold text-slate-800">Contrato + Boleta/Factura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catálogo de Tarjetas Visuales con Imágenes Reales */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              Catálogo Destacado
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] leading-none mb-2">
              Destinos y Tarifas para Viajeros de {item.zona}
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Precios referenciales por pasajero en dólares americanos (USD) con impuestos incluidos. Separa tu cupo con el 50% de inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {OFERTAS_DESTACADAS.map((of) => (
              <article
                key={of.titulo}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={of.img}
                      alt={of.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute top-3.5 right-3.5 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                      Reserva con 50%
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold text-amber-300 block">
                        {of.subtitulo}
                      </span>
                      <h3 className="text-lg font-extrabold leading-tight">
                        {of.titulo}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {of.detalle}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Tarifa desde
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-bebas)] text-3xl text-[#0a1628] leading-none">
                        {of.precio}
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={of.href}
                      className="text-xs font-bold text-slate-700 hover:text-[#0a1628] px-3 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      Ver más
                    </Link>
                    <a
                      href={`https://wa.me/51944103890?text=${encodeURIComponent(
                        `¡Hola Cityland Travel! Les escribo desde ${item.zona}. Quiero cotizar: ${of.titulo} (Desde ${of.precio} USD).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Respaldo Legal y Zonas Cercanas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                Compra 100% Segura y Verificable
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628] mb-3">
                Respaldo de Agencia Física en Lima (RUC 20614914239)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                En <strong>Cityland Travel E.I.R.L.</strong> atendemos a viajeros de <strong>{item.zona}</strong> tanto de manera presencial en nuestra sede de <strong>Av. Antúnez de Mayolo N. 814, Los Olivos (Lima)</strong> como a distancia por nuestra Central de WhatsApp <strong>+51 944 103 890</strong> y videollamada. Cada reserva incluye código PNR verificable en la aerolínea, contrato formal y boleta o factura electrónica SUNAT.
              </p>
              <div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Hablar con Central Cityland (+51 944 103 890)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-sm font-extrabold text-[#0a1628] uppercase tracking-wider mb-3">
                Otras zonas atendidas en {item.region}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cercanas.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/agencia/${c.slug}`}
                    className="text-xs font-medium bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {c.zona}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
