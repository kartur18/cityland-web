import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import { GUIAS_ESPANA } from "@/components/GuiasEspana";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { buscarRutaVuelo, type RutaVueloSEO } from "@/lib/rutas-vuelos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// «Pasajes a España» / «pasaje a España»: una sola página con todas las rutas a España y de vuelta a Lima, el
// precio de cada una (de la ficha de la ruta) y la diferencia entre ida y vuelta y paquete migratorio (26-oct-2026).
const RUTA = "/pasajes-a-espana";
const DESCRIPCION =
  "Pasajes de Lima a Madrid, Barcelona, Valencia, Málaga, Sevilla y Bilbao, ida y vuelta o solo ida con paquete migratorio. También pasajes de España a Lima. Separa con el 50%.";

const IDA = ["lima-madrid", "lima-barcelona", "lima-valencia", "lima-malaga", "lima-sevilla", "lima-bilbao"];
const VUELTA = ["madrid-lima", "barcelona-lima"];

const FAQS = [
  {
    q: "¿Necesito visa para viajar a España?",
    a: "No. Los peruanos viajan como turistas hasta 90 días solo con pasaporte. En migración te pueden pedir el pasaje de regreso, el hotel o la carta de invitación, dinero para tu estadía y un seguro de viaje.",
  },
  {
    q: "¿Qué me conviene: ida y vuelta o paquete migratorio?",
    a: "Si vas de visita o de vacaciones, el pasaje ida y vuelta. Si quieres viajar solo de ida, el paquete migratorio incluye el vuelo y la carpeta de viaje que te armamos para presentar en el aeropuerto.",
  },
  {
    q: "¿Cuánto cuesta el pasaje a Madrid?",
    a: "Los precios de cada ruta están en esta página y cambian según la fecha: julio, agosto y diciembre son los meses más caros. Escríbenos con tu fecha y te damos el precio exacto.",
  },
  {
    q: "¿Puedo comprar el pasaje desde España para un familiar en Perú?",
    a: "Sí. Nos escribes por WhatsApp desde España, pagas con tarjeta o transferencia y tu familiar recibe su itinerario en Lima.",
  },
];

export const metadata: Metadata = {
  title: "Pasajes a España desde Lima: Madrid y Barcelona | Cityland",
  description: DESCRIPCION,
  alternates: { canonical: `${URL_BASE_SEO}${RUTA}` },
  openGraph: { type: "website", url: `${URL_BASE_SEO}${RUTA}`, title: "Pasajes a España desde Lima", description: DESCRIPCION, siteName: "Cityland Travel", locale: "es_PE" },
};

function rutas(slugs: string[]): RutaVueloSEO[] {
  return slugs.map((s) => buscarRutaVuelo(s)).filter((r): r is RutaVueloSEO => Boolean(r));
}

function TarjetaRuta({ r }: { r: RutaVueloSEO }) {
  return (
    <li>
      <Link
        href={`/vuelos/${r.slug}`}
        className="flex items-center justify-between gap-4 min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors"
      >
        <span className="font-extrabold text-[#0a1628]">
          {r.origen} → {r.destino}
        </span>
        <span className="text-[15px] text-slate-700 whitespace-nowrap">
          desde <strong className="text-[#0a1628]">{formatoUSD(r.precioDesdeUSD)}</strong>
        </span>
      </Link>
    </li>
  );
}

export default function PasajesAEspanaPage() {
  const ida = rutas(IDA);
  const vuelta = rutas(VUELTA);
  const wa = buildWaUrl({
    categoria: "europa",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un pasaje a España.",
    refWeb: `citylandtravel.com${RUTA}`,
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Pasajes a España", item: `${URL_BASE_SEO}${RUTA}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <header className="space-y-4 max-w-3xl">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              / Pasajes a España
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Pasajes a España desde Lima
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Madrid, Barcelona, Valencia, Málaga, Sevilla y Bilbao. Ida y vuelta para tus vacaciones o visitas, o solo
              ida con nuestro paquete migratorio. Te ayudamos con todo lo que te pueden pedir en el aeropuerto.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
            >
              <WhatsAppIcon size={18} />
              Cotizar mi pasaje por WhatsApp
            </a>
          </header>

          <section className="space-y-4" aria-labelledby="ida">
            <h2 id="ida" className="text-2xl font-extrabold text-[#0a1628]">
              Pasajes ida y vuelta de Lima a España
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ida.map((r) => (
                <TarjetaRuta key={r.slug} r={r} />
              ))}
            </ul>
            <p className="text-xs text-slate-500">Precios referenciales por persona; cambian según la fecha y la aerolínea.</p>
          </section>

          <section className="rounded-2xl bg-amber-50 border border-amber-100 p-5 sm:p-6 space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">¿Vas solo de ida?</h2>
            <p className="text-[15px] text-slate-700">
              El paquete migratorio incluye el vuelo de ida y la carpeta de viaje que te armamos para presentar en el
              aeropuerto. Mira los planes y lo que incluye cada uno.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/espana"
                className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-[#0a1628] text-white text-sm font-bold"
              >
                Paquete migratorio a España
              </Link>
              <Link
                href="/paquetes-migratorios"
                className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-white border border-slate-300 text-sm font-bold text-[#0a1628]"
              >
                Paquetes migratorios a Europa
              </Link>
            </div>
          </section>

          <section className="space-y-4" aria-labelledby="vuelta">
            <h2 id="vuelta" className="text-2xl font-extrabold text-[#0a1628]">
              Pasajes de España a Lima
            </h2>
            <p className="text-[15px] text-slate-600">Para peruanos en España que vienen de vacaciones o compran el pasaje a un familiar.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vuelta.map((r) => (
                <TarjetaRuta key={r.slug} r={r} />
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
                    {f.q}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-[15px] text-slate-600 mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#0a1628]">Guías para tu viaje a España</h2>
            <div className="flex flex-wrap gap-2.5">
              {GUIAS_ESPANA.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {g.texto}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino="España" />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
