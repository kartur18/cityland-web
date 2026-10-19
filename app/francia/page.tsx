import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ModuloSeguridadYCalculadoraEuropa from "@/components/ModuloSeguridadYCalculadoraEuropa";
import {
  PLANES_MIGRATORIOS_OFICIALES,
  obtenerSuperLandingsPorSilo,
} from "@/lib/catalogo-paquetes-migratorios-1000";
import { buildWhatsAppHref } from "@/components/constantes";
import {
  URL_BASE_SEO,
  SCHEMA_ORGANIZACION_CITYLAND,
  construirSchemaLandingSEO,
} from "@/lib/seo-arquitectura";

export const metadata: Metadata = {
  title:
    "Paquetes Migratorios a Francia 2026 (París, Lyon, Marsella, Niza) desde $699 USD | Cityland Travel",
  description:
    "Viaja desde Perú a París, Lyon, Marsella, Niza y Toulouse con nuestro Paquete Migratorio desde $699 USD (separa con $350). Incluye pasaje de ida + boleto de regreso reservado para Migraciones + hotel o guía Attestation d'accueil + seguro Schengen 30.000€ + check-in 24h antes.",
  keywords: [
    "paquete migratorio francia desde peru",
    "viajar a paris desde lima requisitos",
    "pasajes a paris desde lima economicos",
    "attestation d accueil francia peruanos",
    "paquete migratorio paris 699",
    "cityland travel francia",
  ],
  alternates: {
    canonical: `${URL_BASE_SEO}/francia`,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${URL_BASE_SEO}/francia`,
    siteName: "Cityland Travel",
    title:
      "Paquetes Migratorios a Francia 2026 (París, Lyon, Marsella, Niza) desde $699 USD | Cityland Travel",
    description:
      "Salidas desde Lima a París (CDG/Orly), Lyon, Marsella, Niza y Toulouse con carpeta migratoria completa desde $699 USD.",
    images: [
      {
        url: `${URL_BASE_SEO}/images/destinos/paris.webp`,
        width: 1200,
        height: 630,
        alt: "Paquetes Migratorios a Francia desde Perú — Cityland Travel",
      },
    ],
  },
};

const CIUDADES_FRANCIA = [
  {
    ciudad: "París",
    aeropuerto: "Aeropuerto Charles de Gaulle (CDG) / Orly (ORY)",
    aerolineas: "Air France, KLM, Iberia y Air Europa (vía Madrid)",
    descripcion:
      "Principal puerta de entrada de peruanos a Francia. Conexiones directas en tren TGV a toda Francia y Bélgica.",
    imagen: "/images/destinos/paris.webp",
    slugLanding: "paquete-migratorio-paris-desde-699",
  },
  {
    ciudad: "Lyon",
    aeropuerto: "Aeropuerto de Lyon-Saint Exupéry (LYS)",
    aerolineas: "Iberia, Air France y KLM",
    descripcion:
      "Segundo polo económico e industrial de Francia, con gran demanda laboral en servicios, gastronomía y logística.",
    imagen: "/images/destinos/paris.webp",
    slugLanding: "paquete-migratorio-lyon-desde-699",
  },
  {
    ciudad: "Marsella",
    aeropuerto: "Aeropuerto de Marsella-Provenza (MRS)",
    aerolineas: "Iberia y Air France",
    descripcion:
      "Principal puerto del sur de Francia en el Mediterráneo, con clima cálido y amplia comunidad hispanohablante.",
    imagen: "/images/destinos/paris.webp",
    slugLanding: "paquete-migratorio-marsella-desde-699",
  },
  {
    ciudad: "Niza",
    aeropuerto: "Aeropuerto de Niza Costa Azul (NCE)",
    aerolineas: "Iberia, Air France y KLM",
    descripcion:
      "Capital de la Costa Azul francesa, con alta demanda en hotelería, turismo, cuidado de personas y servicios.",
    imagen: "/images/destinos/paris.webp",
    slugLanding: "paquete-migratorio-niza-desde-699",
  },
  {
    ciudad: "Toulouse",
    aeropuerto: "Aeropuerto de Toulouse-Blagnac (TLS)",
    aerolineas: "Iberia y Air France",
    descripcion:
      "Ciudad del suroeste francés muy cercana a España, con fuerte vínculo cultural hispano y excelente calidad de vida.",
    imagen: "/images/destinos/paris.webp",
    slugLanding: "paquete-migratorio-toulouse-desde-699",
  },
];

export default function FranciaPage() {
  const landingsFrancia = obtenerSuperLandingsPorSilo("francia-europa").slice(
    0,
    24
  );

  const msgHero =
    "¡Hola! Quiero más información del paquete migratorio a Francia (París / Lyon / Marsella) desde $699.\n📍 Ref Web: citylandtravel.com/francia [Paquete Francia $699]";

  const schemaFrancia = construirSchemaLandingSEO({
    url: `${URL_BASE_SEO}/francia`,
    titulo:
      "Paquetes Migratorios a Francia (París, Lyon, Marsella, Niza, Toulouse) desde $699 USD",
    descripcion:
      "Viaja desde Perú a Francia con tus 5 documentos en regla: pasaje de avión de ida, boleto de regreso reservado para Migraciones, reserva de hotel o guía Attestation d'accueil, seguro Schengen 30.000€ y check-in 24h antes.",
    precioDesdeUSD: 699,
    cantidadOfertas: 4,
    destinoOPais: "Francia",
    imagenUrl: `${URL_BASE_SEO}/images/destinos/paris.webp`,
    migas: [
      { nombre: "Inicio", url: URL_BASE_SEO },
      {
        nombre: "Paquetes Migratorios",
        url: `${URL_BASE_SEO}/paquetes-migratorios`,
      },
      { nombre: "Francia", url: `${URL_BASE_SEO}/francia` },
    ],
    faqs: [
      {
        q: "¿Qué documentos piden a los peruanos para entrar a Francia en 2026?",
        a: "En el Aeropuerto Charles de Gaulle (París) o al hacer conexión en Europa te solicitan: 1) Pasaporte peruano vigente, 2) Tu pasaje de ida + boleto de regreso dentro de los 90 días, 3) Reserva de hotel confirmada (120 €/día) o Attestation d'accueil original tramitada en la alcaldía (Mairie) por tu familiar (32,50 €/día), y 4) Seguro médico Schengen de 30.000 €.",
      },
      {
        q: "¿El paquete a Francia desde $699 incluye el boleto de regreso para Migraciones?",
        a: "Sí. Incluye tu pasaje de avión de ida + tu boleto de regreso reservado en sistema para presentar en el aeropuerto y en Migraciones + tu reserva de hotel + tu seguro médico de 30.000€ + tu check-in 24h antes.",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCHEMA_ORGANIZACION_CITYLAND),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFrancia) }}
      />

      <Navbar />

      {/* HERO FRANCIA */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/destinos/paris.webp"
            alt="Paquetes Migratorios a París y Francia desde Perú"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400/15 border border-amber-400/35 px-4 py-1.5 rounded-full text-xs font-extrabold text-amber-300 mb-5">
              <span>🇫🇷 Especialistas en Ruta Lima → París, Lyon, Marsella y Niza</span>
              <span>•</span>
              <span>Separa con el 50% ($350 USD)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5">
              Paquete Migratorio a Francia desde{" "}
              <span className="text-amber-400">$699 USD</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed mb-6">
              Viaja a <strong className="text-white">París, Lyon, Marsella, Niza o Toulouse</strong> con todos los documentos que exigen en Lima y en la Police Aux Frontières de Francia: tu{" "}
              <strong className="text-amber-300">
                pasaje de ida + boleto de regreso reservado para Migraciones + hotel confirmable + seguro 30.000€ + check-in 24h antes
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={buildWhatsAppHref(msgHero)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-7 py-4 rounded-2xl text-sm sm:text-base shadow-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Cotizar Paquete a Francia desde $699
              </a>
              <Link
                href="/paquetes-migratorios"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-2xl text-sm transition-all"
              >
                Ver las 1,000 Super-Landings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLICACIÓN EN SENCILLO PERUANO */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 rounded-3xl p-6 sm:p-10 border-2 border-amber-300">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              🇫🇷 ¿Cómo funciona el Paquete Migratorio a Francia y por qué ahorras más de $800 USD?
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Si viajas a París, Lyon o Marsella para quedarte a trabajar o reunirte con tu familia, no te conviene gastar $1,600 USD en un boleto de regreso cerrado que vas a perder. Por eso nuestro <strong>Paquete Migratorio a Francia</strong> te entrega los <strong>5 documentos obligatorios</strong>:
              {" "}1) Tu pasaje de avión de ida emitido, 2) Tu boleto de regreso reservado en sistema para presentar en el aeropuerto, 3) Tu reserva de hotel en Francia (o cuadre con tu <em>Attestation d&apos;accueil</em> de la alcaldía francesa), 4) Tu seguro Schengen de 30.000€ y 5) Tu check-in listo 24h antes.
            </p>

            {/* LOS 4 PLANES OFICIALES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLANES_MIGRATORIOS_OFICIALES.map((plan) => {
                const msg = `${plan.mensajeWhatsAppBase} a Francia (París / Lyon / Marsella).\n📍 Ref Web: citylandtravel.com/francia [${plan.nombre} Francia $${plan.precioUSD}]`;
                return (
                  <div
                    key={plan.id}
                    className={`rounded-2xl p-5 flex flex-col justify-between border ${
                      plan.destacado
                        ? "bg-slate-900 text-white border-amber-400 ring-2 ring-amber-400"
                        : "bg-white text-slate-900 border-slate-200"
                    }`}
                  >
                    <div>
                      <span
                        className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${
                          plan.destacado
                            ? "bg-amber-400 text-slate-950"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {plan.etiqueta}
                      </span>
                      <h3 className="text-lg font-black">{plan.nombre}</h3>
                      <p
                        className={`text-xs font-semibold mt-0.5 mb-3 ${
                          plan.destacado ? "text-amber-300" : "text-amber-700"
                        }`}
                      >
                        📅 {plan.temporada}
                      </p>
                      <div className="text-3xl font-black mb-2">
                        ${plan.precioUSD}{" "}
                        <span className="text-xs font-bold opacity-70">USD</span>
                      </div>
                      <div
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold mb-4 ${
                          plan.destacado
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-emerald-50 text-emerald-800"
                        }`}
                      >
                        Separa con 50%: <strong>${plan.separaConUSD} USD</strong>
                      </div>
                      <ul className="space-y-1.5 text-xs mb-5 opacity-90">
                        {plan.incluye.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={buildWhatsAppHref(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Cotizar ${plan.precioUSD} USD
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CIUDADES DE FRANCIA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Principales Destinos en Francia para Peruanos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8">
            Elige la ciudad francesa a la que viajas para ver su guía migratoria completa y cotizar tu paquete desde $699 USD:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CIUDADES_FRANCIA.map((c) => (
              <div
                key={c.ciudad}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 bg-slate-900">
                    <img
                      src={c.imagen}
                      alt={`Paquete Migratorio a ${c.ciudad}, Francia`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-xs font-bold text-amber-300">
                        🇫🇷 Francia · Desde $699 USD
                      </span>
                      <h3 className="text-xl font-black">{c.ciudad}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-slate-700 mb-1">
                      ✈️ {c.aeropuerto}
                    </p>
                    <p className="text-xs text-slate-500 mb-3">
                      Aerolíneas: {c.aerolineas}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {c.descripcion}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 flex gap-2">
                  <Link
                    href={`/paquetes-migratorios/${c.slugLanding}`}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold"
                  >
                    Ver Super-Landing {c.ciudad}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Enlaces internos al Silo 3 (Francia y Europa) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-extrabold text-slate-900 mb-4">
              Rutas y Modalidades Especializadas a Francia y Europa Occidental
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {landingsFrancia.map((item) => (
                <Link
                  key={item.slug}
                  href={`/paquetes-migratorios/${item.slug}`}
                  className="text-xs font-semibold text-slate-700 hover:text-amber-700 bg-slate-50 hover:bg-amber-50 p-3 rounded-xl border border-slate-200 transition-colors flex items-center justify-between"
                >
                  <span className="truncate">
                    🇫🇷 {item.titulo}
                  </span>
                  <span className="text-amber-700 font-black ml-2 shrink-0">
                    ${item.precioPromo}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModuloSeguridadYCalculadoraEuropa
        destinoInicial="París / Ámsterdam / Otra ciudad UE"
        refWebRuta="/francia"
      />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
