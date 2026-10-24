import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { OFICINAS, buildWaUrl } from "@/components/constantes";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO, URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const URL = `${URL_BASE_SEO}/agencia-de-viajes-los-olivos`;

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Agencia de Viajes en Los Olivos: 2 Oficinas | Cityland Travel"),
  description: optimizarMetaDescriptionSEO(
    "Cityland Travel tiene dos oficinas en Los Olivos: Av. Antúnez de Mayolo 814 y Av. Angélica Gamarra 763. Cotiza y paga tu viaje en persona, de lunes a sábado."
  ),
  alternates: { canonical: URL },
};

const HORARIO = "Lunes a sábado, de 9:00 a. m. a 7:00 p. m.";

const PREGUNTAS = [
  {
    q: "¿Dónde quedan las oficinas de Cityland Travel en Los Olivos?",
    a: `Tenemos dos oficinas: ${OFICINAS.map((o) => o.direccion).join(" y ")}.`,
  },
  { q: "¿Atienden los sábados?", a: `Sí. Atendemos ${HORARIO.charAt(0).toLowerCase()}${HORARIO.slice(1)}` },
  {
    q: "¿Puedo pagar en efectivo en la oficina?",
    a: "Sí. También aceptamos transferencia (BCP, BBVA, Interbank), Yape, Plin y tarjeta. Separas con el 50% y recibes tu boleta o factura electrónica.",
  },
  {
    q: "¿Tengo que sacar cita para ir?",
    a: "Puedes venir en el horario de atención. Si nos escribes antes por WhatsApp, te esperamos con tu cotización lista.",
  },
];

const DESTINOS = [
  { href: "/espana", texto: "España" },
  { href: "/italia", texto: "Italia" },
  { href: "/francia", texto: "Francia" },
  { href: "/paquetes-migratorios", texto: "Paquetes migratorios" },
  { href: "/caribe", texto: "Caribe todo incluido" },
  { href: "/cusco", texto: "Cusco y Machu Picchu" },
  { href: "/vuelos", texto: "Vuelos desde Lima" },
  { href: "/seguros", texto: "Seguro Schengen" },
];

const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PREGUNTAS.map((p) => ({ "@type": "Question", name: p.q, acceptedAnswer: { "@type": "Answer", text: p.a } })),
};

const SCHEMA_MIGAS = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
    { "@type": "ListItem", position: 2, name: "Agencia de viajes en Los Olivos", item: URL },
  ],
};

// Página local real: las dos oficinas, horario y cómo llegar. Es la búsqueda más fácil de ganar (competencia débil).
export default function AgenciaLosOlivosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA_FAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA_MIGAS) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <header className="space-y-3 max-w-3xl">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              / Agencia de viajes en Los Olivos
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Agencia de viajes en Los Olivos
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Dos oficinas en Los Olivos para cotizar, pagar y resolver tu viaje en persona: paquetes a España y Europa,
              Caribe todo incluido, vuelos y seguros.
            </p>
          </header>

          <section aria-label="Oficinas" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OFICINAS.map((o) => {
              const waVisita = buildWaUrl({
                categoria: "general",
                mensajePersonalizado: `¡Hola Cityland Travel! Quiero visitar la ${o.nombre.toLowerCase()} (${o.direccion}) para cotizar mi viaje.`,
                refWeb: `citylandtravel.com/agencia-de-viajes-los-olivos [${o.nombre}]`,
              });
              return (
                <article key={o.ruc} className="rounded-2xl border border-slate-200 p-5 space-y-3">
                  <h2 className="text-lg font-extrabold text-[#0a1628]">{o.nombre}</h2>
                  <p className="text-sm text-slate-700 font-semibold">{o.direccion}</p>
                  <p className="text-sm text-slate-600">{HORARIO}</p>
                  <p className="text-xs text-slate-500">
                    {o.razonSocial} · RUC {o.ruc}
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <a
                      href={o.mapa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-slate-300 text-sm font-bold text-[#0a1628] hover:bg-slate-50"
                    >
                      Cómo llegar
                    </a>
                    <a
                      href={waVisita}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-extrabold"
                    >
                      <WhatsAppIcon size={16} />
                      Avisar que voy
                    </a>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Qué puedes hacer en la oficina</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-slate-700">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Cotizar y comparar opciones con una asesora.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Separar con el 50% en efectivo, transferencia, Yape, Plin o tarjeta.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Recibir tu boleta o factura electrónica.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-extrabold">✓</span>
                <span>Revisar tus documentos de viaje antes de volar.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Lo que más nos piden</h2>
            <div className="flex flex-wrap gap-2.5">
              {DESTINOS.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {d.texto}
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {PREGUNTAS.map((p) => (
                <details key={p.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
                    {p.q}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-[15px] text-slate-600 mt-2">{p.a}</p>
                </details>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              ¿Quieres comprobar que hablas con nosotros?{" "}
              <Link href="/canales-oficiales" className="font-bold text-emerald-700 hover:underline">
                Mira nuestros canales oficiales
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
