import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import TarjetaCircuito from "@/components/TarjetaCircuito";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { circuitosVigentes, precioCityland } from "@/lib/circuitos";
import { HUBS_CIRCUITOS, type HubCircuitos } from "@/lib/hubs-circuitos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import { paginasCaribe } from "@/lib/paquetes-armados/paginas-caribe";

export function metadataHubCircuitos(h: HubCircuitos): Metadata {
  const url = `${URL_BASE_SEO}${h.ruta}`;
  return {
    title: `${h.tituloSeo} | Cityland`,
    description: optimizarMetaDescriptionSEO(h.descripcion),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: h.h1, description: h.descripcion, siteName: "Cityland Travel", locale: "es_PE" },
  };
}

// Página por destino o fecha con los circuitos reales que le corresponden, ordenados por precio.
export default function CircuitosHubPagina({ hub: h }: { hub: HubCircuitos }) {
  const url = `${URL_BASE_SEO}${h.ruta}`;
  const items = circuitosVigentes()
    .filter(h.filtro)
    .sort((a, b) => a.desde - b.desde);
  const conVuelo = items.filter((c) => c.tipo === "vuelo");
  const terrestres = items.filter((c) => c.tipo !== "vuelo");
  // El «desde» de cabecera es el de un programa con vuelo: el terrestre más barato atraía consultas que no cierran.
  const desde = conVuelo.length ? precioCityland(conVuelo[0]) : 0;
  const desdeTerrestre = terrestres.length ? precioCityland(terrestres[0]) : 0;
  // Páginas de paquetes armados cuyo destino tiene esta página como portada (ciudad o país).
  const armados = paginasCaribe().filter((p) => p.destino.hub === h.ruta && p.clase !== "hotel");
  const wa = buildWaUrl({ categoria: "general", mensajePersonalizado: h.mensajeWhatsApp, refWeb: `citylandtravel.com${h.ruta}` });
  const faqs = [
    {
      q: `¿Cuánto cuesta un viaje a ${h.nombre === "Año Nuevo" || h.nombre === "verano" ? "estos destinos" : h.nombre}?`,
      a: items.length
        ? `${desde ? `Con vuelo desde Lima, desde ${formatoUSD(desde)} por persona en habitación doble. ` : ""}${desdeTerrestre ? `Los programas solo terrestres (sin vuelo) empiezan en ${formatoUSD(desdeTerrestre)}. ` : ""}El precio cambia según la fecha de salida y el hotel.`
        : "Escríbenos con tu fecha y te cotizamos.",
    },
    {
      q: "¿Los precios incluyen el vuelo?",
      a: "Depende del programa: cada tarjeta dice «con vuelo desde Lima» o «solo terrestre». A los programas solo terrestres te sumamos el vuelo que más te convenga.",
    },
    {
      q: "¿Qué documentos necesito?",
      a: "Pasaporte vigente y, según el destino, visa o permiso de ingreso. Al cotizar te confirmamos los requisitos vigentes para peruanos.",
    },
    { q: "¿Puedo separar mi viaje?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar, por transferencia, Yape, Plin o tarjeta." },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Circuitos", item: `${URL_BASE_SEO}/circuitos` },
          { "@type": "ListItem", position: 3, name: h.h1, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: h.h1,
        itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.nombre, url: `${URL_BASE_SEO}/circuitos/${c.slug}` })),
      },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  const grupos = [
    { titulo: "Con vuelo desde Lima", lista: conVuelo },
    { titulo: "Solo terrestres (te sumamos el vuelo)", lista: terrestres },
  ].filter((g) => g.lista.length);

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
              /{" "}
              <Link href="/circuitos" className="hover:underline">
                Circuitos
              </Link>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">{h.h1}</h1>
            <p className="text-base sm:text-lg text-slate-600">{h.intro}</p>
            {items.length > 0 && (
              <p className="text-[15px] text-slate-700">
                <strong className="text-[#0a1628]">{items.length} programas</strong> con salidas confirmadas
                {desde > 0 && (
                  <>
                    , con vuelo desde Lima desde <strong className="text-[#0a1628]">{formatoUSD(desde)}</strong> por persona
                  </>
                )}
                .
              </p>
            )}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
            >
              <WhatsAppIcon size={18} />
              Reservar por WhatsApp
            </a>
          </header>

          {grupos.map((g) => (
            <section key={g.titulo} className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">{g.titulo}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.lista.map((c) => (
                  <TarjetaCircuito key={c.slug} c={c} />
                ))}
              </ul>
            </section>
          ))}
          <p className="text-xs text-slate-500">Precios referenciales por persona en habitación doble; cambian según la fecha, el hotel y la disponibilidad.</p>

          {armados.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-[#0a1628]">Paquetes armados a {h.nombre} por mes y tipo de viaje</h2>
              <ul className="flex flex-wrap gap-2">
                {armados.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/paquetes-armados/${p.slug}`}
                      className="inline-flex items-center min-h-[44px] px-4 rounded-full border border-slate-200 hover:border-[#0a1628] text-sm font-bold text-[#0a1628]"
                    >
                      {p.clave.charAt(0).toUpperCase() + p.clave.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f) => (
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
            <h2 className="text-lg font-extrabold text-[#0a1628]">Otros destinos</h2>
            <div className="flex flex-wrap gap-2.5">
              {HUBS_CIRCUITOS.filter((x) => x.ruta !== h.ruta).map((x) => (
                <Link
                  key={x.ruta}
                  href={x.ruta}
                  className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]"
                >
                  {x.h1.replace(/ desde Lima$/, "")}
                </Link>
              ))}
              <Link href="/circuitos" className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]">
                Todos los circuitos
              </Link>
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino={h.nombre === "Año Nuevo" || h.nombre === "verano" ? "cualquier destino" : h.nombre} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
