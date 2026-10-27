import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import { GUIAS_ESPANA } from "@/components/GuiasEspana";
import { DESTINOS_EUROPA, buildWaUrl } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { formatoUSD } from "@/lib/formato-precio";
import { buscarRutaVuelo } from "@/lib/rutas-vuelos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Barcelona es el segundo destino de España más pedido por WhatsApp; desde junio de 2026 LEVEL vuela directo
// Lima–Barcelona (tres veces por semana, según la nota de Iberia Agencias). Precios de la ficha de cada ruta.
const RUTA = "/pasajes-a-barcelona";
const DESCRIPCION =
  "Pasajes Lima–Barcelona ida y vuelta, vuelo directo desde junio de 2026 o con escala en Madrid, paquete turístico con hotel y paquete migratorio a Barcelona. Separa con el 50%.";

const FAQS = [
  {
    q: "¿Hay vuelo directo de Lima a Barcelona?",
    a: "Sí. Desde junio de 2026 la aerolínea LEVEL vuela directo Lima–Barcelona tres veces por semana. También puedes ir con escala en Madrid con Iberia, Air Europa o LATAM. Te cotizamos la opción que te convenga según la fecha.",
  },
  {
    q: "¿Necesito visa para Barcelona?",
    a: "No. Los peruanos viajan como turistas hasta 90 días solo con pasaporte. En migración te pueden pedir el pasaje de regreso, el hotel o la carta de invitación y dinero para tu estadía.",
  },
  {
    q: "¿Cuántos días necesito para conocer Barcelona?",
    a: "Con 4 o 5 días ves lo principal: la Sagrada Familia, el Park Güell, el Barrio Gótico, las Ramblas y la playa de la Barceloneta. Nuestro paquete turístico es de 8 días e incluye vuelo y hotel.",
  },
  {
    q: "¿Y si quiero viajar solo de ida?",
    a: "Mira el paquete migratorio a Barcelona: incluye el vuelo de ida y la carpeta de viaje que te armamos para el aeropuerto.",
  },
];

export const metadata: Metadata = {
  title: "Pasajes a Barcelona desde Lima: directo y con escala | Cityland",
  description: DESCRIPCION,
  alternates: { canonical: `${URL_BASE_SEO}${RUTA}` },
  openGraph: { type: "website", url: `${URL_BASE_SEO}${RUTA}`, title: "Pasajes a Barcelona desde Lima", description: DESCRIPCION, siteName: "Cityland Travel", locale: "es_PE" },
};

export default function PasajesABarcelonaPage() {
  const ida = buscarRutaVuelo("lima-barcelona");
  const vuelta = buscarRutaVuelo("barcelona-lima");
  const paquete = [...DESTINOS_EUROPA, ...DESTINOS_MASIVOS].find((d) => d.slug === "barcelona-espana");
  const wa = buildWaUrl({
    categoria: "europa",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un pasaje a Barcelona.",
    refWeb: `citylandtravel.com${RUTA}`,
  });
  const opciones = [
    ida && { titulo: "Pasaje Lima–Barcelona ida y vuelta", detalle: `Desde ${formatoUSD(ida.precioDesdeUSD)}`, href: `/vuelos/${ida.slug}` },
    paquete && {
      titulo: `Paquete turístico a Barcelona (${paquete.duracion ?? "con hotel"})`,
      detalle: `Vuelo + hotel desde ${formatoUSD(paquete.turistico)}`,
      href: `/destinos/${paquete.slug}`,
    },
    { titulo: "Paquete migratorio a Barcelona", detalle: "Solo ida con carpeta de viaje", href: "/paquetes-migratorios/espana-barcelona-plan-promo-699" },
    vuelta && { titulo: "Pasaje Barcelona–Lima", detalle: `Para viajar a Perú desde ${formatoUSD(vuelta.precioDesdeUSD)}`, href: `/vuelos/${vuelta.slug}` },
  ].filter((o): o is { titulo: string; detalle: string; href: string } => Boolean(o));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Pasajes a España", item: `${URL_BASE_SEO}/pasajes-a-espana` },
          { "@type": "ListItem", position: 3, name: "Barcelona", item: `${URL_BASE_SEO}${RUTA}` },
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
              /{" "}
              <Link href="/pasajes-a-espana" className="hover:underline">
                Pasajes a España
              </Link>{" "}
              / Barcelona
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Pasajes y paquetes a Barcelona desde Lima
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Desde junio de 2026 hay vuelo directo Lima–Barcelona, y también puedes ir con escala en Madrid. Elige si
              vas de vacaciones, con hotel incluido, o solo de ida.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
            >
              <WhatsAppIcon size={18} />
              Cotizar Barcelona por WhatsApp
            </a>
          </header>

          <section className="space-y-4" aria-labelledby="opciones">
            <h2 id="opciones" className="text-2xl font-extrabold text-[#0a1628]">
              Elige cómo viajar a Barcelona
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opciones.map((o) => (
                <li key={o.href}>
                  <Link
                    href={o.href}
                    className="block min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors"
                  >
                    <span className="block font-extrabold text-[#0a1628]">{o.titulo}</span>
                    <span className="block text-[15px] text-slate-600 mt-0.5">{o.detalle}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">Precios referenciales por persona; cambian según la fecha y la aerolínea.</p>
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
      <PorQueCityland destino="Barcelona" />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
