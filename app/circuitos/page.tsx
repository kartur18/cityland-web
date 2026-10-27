import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { circuitosVigentes, precioCityland, REGIONES_CIRCUITOS, type Circuito } from "@/lib/circuitos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

export const revalidate = 86400;

const RUTA = "/circuitos";
const DESCRIPCION =
  "Circuitos y paquetes por Europa, Turquía, Egipto, Japón, India, Estados Unidos, Brasil, Costa Rica, el Caribe y cruceros desde Lima, con salidas confirmadas. Separa con el 50%.";

export const metadata: Metadata = {
  title: "Circuitos y paquetes por el mundo desde Lima | Cityland",
  description: DESCRIPCION,
  alternates: { canonical: `${URL_BASE_SEO}${RUTA}` },
  openGraph: { type: "website", url: `${URL_BASE_SEO}${RUTA}`, title: "Circuitos y paquetes por el mundo desde Lima", description: DESCRIPCION, siteName: "Cityland Travel", locale: "es_PE" },
};

function Tarjeta({ c }: { c: Circuito }) {
  return (
    <li>
      <Link
        href={`/circuitos/${c.slug}`}
        className="flex h-full flex-col justify-between gap-2 min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors"
      >
        <span className="font-extrabold text-[#0a1628] leading-snug">{c.nombre}</span>
        <span className="text-sm text-slate-600">
          {c.dias} días · {c.tipo === "vuelo" ? `con vuelo desde ${c.origen}` : c.tipo === "crucero" ? "solo crucero" : "solo terrestre"}
        </span>
        <span className="text-[15px] text-slate-700">
          desde <strong className="text-[#0a1628]">{formatoUSD(precioCityland(c))}</strong>
        </span>
      </Link>
    </li>
  );
}

// Vitrina de todos los circuitos vigentes, agrupados por región y ordenados por precio.
export default function CircuitosPage() {
  const todos = circuitosVigentes();
  const grupos = REGIONES_CIRCUITOS.map((r) => ({ ...r, items: todos.filter((c) => c.region === r.id).sort((a, b) => a.desde - b.desde) })).filter(
    (g) => g.items.length
  );
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: "¡Hola Cityland Travel! Quiero cotizar un circuito.",
    refWeb: `citylandtravel.com${RUTA}`,
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Circuitos", item: `${URL_BASE_SEO}${RUTA}` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Circuitos desde Lima",
        itemListElement: todos.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.nombre, url: `${URL_BASE_SEO}/circuitos/${c.slug}` })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <header className="space-y-4 max-w-3xl">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              / Circuitos
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Circuitos y paquetes por el mundo desde Lima
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              {todos.length} programas con salidas confirmadas: con vuelo desde Lima o solo terrestres para armar a tu medida. El
              precio es por persona en habitación doble.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
            >
              <WhatsAppIcon size={18} />
              Cotizar por WhatsApp
            </a>
          </header>

          <nav aria-label="Regiones" className="flex flex-wrap gap-2">
            {grupos.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
              >
                {g.nombre} ({g.items.length})
              </a>
            ))}
          </nav>

          {grupos.map((g) => (
            <section key={g.id} id={g.id} className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">{g.nombre}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.items.map((c) => (
                  <Tarjeta key={c.slug} c={c} />
                ))}
              </ul>
            </section>
          ))}

          <p className="text-xs text-slate-500">Precios referenciales; cambian según la fecha de salida, el hotel y la disponibilidad.</p>
        </div>
      </main>
      <PorQueCityland destino="cualquier destino" />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
