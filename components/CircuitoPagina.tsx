import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, relacionados, REGIONES_CIRCUITOS, textoTipo, type Circuito } from "@/lib/circuitos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { SelloArmado, TablaHoteles, TablaSalidas, TarjetasPaquetes } from "@/components/paquetes-armados/Bloques";
import { CajaPrecio, GaleriaMosaico, IncluyeFranja, RecorridoVisual, VideoRecorrido } from "@/components/paquetes-armados/Visual";
import { absoluta, fotosPara, videoDe } from "@/lib/paquetes-armados/fotos";
import { etiquetaArmado, lineaComponentes } from "@/lib/paquetes-armados/comun";
import { salidasDe } from "@/lib/salidas";

const ruta = (c: Circuito) => `/circuitos/${c.slug}`;

function listaCorta(xs: string[], n: number): string {
  const v = xs.slice(0, n);
  return v.length > 1 ? `${v.slice(0, -1).join(", ")} y ${v[v.length - 1]}` : v.join("");
}

export function metadataCircuito(c: Circuito): Metadata {
  const url = `${URL_BASE_SEO}${ruta(c)}`;
  const base = `Paquete armado ${c.nombre}${c.tipo === "vuelo" ? "" : " sin vuelo"}: ${c.dias} días`;
  const titulo = c.tipo === "vuelo" && base.length < 38 ? `${base} desde ${c.origen}` : base;
  const descripcion = `${etiquetaArmado(c)} ${c.nombre}, ${c.dias} días y ${c.noches} noches por ${listaCorta(c.paises, 4)}: ${listaCorta(c.ciudades, 5)}. ${textoTipo(c)}. Desde ${formatoUSD(precioCityland(c))} por persona. Separa con el 50%.`;
  return {
    title: `${titulo} | Cityland`,
    description: optimizarMetaDescriptionSEO(descripcion),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${c.nombre} · ${c.dias} días`,
      description: descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
    },
  };
}

function Lista({ titulo, items }: { titulo: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">{titulo}</h2>
      <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-700">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

// Ficha de un circuito del mayorista: recorrido, salidas, qué incluye, hoteles y precio con nuestro fee.
export default function CircuitoPagina({ circuito: c }: { circuito: Circuito }) {
  const url = `${URL_BASE_SEO}${ruta(c)}`;
  const precio = precioCityland(c);
  const region = REGIONES_CIRCUITOS.find((r) => r.id === c.region);
  const fotos = fotosPara([c], `${c.ciudades.slice(0, 3).join(" ")} ${c.paises.join(" ")}`);
  const video = videoDe(c);
  const otros = relacionados(c);
  const salidas = salidasDe(c.mt);
  const wa = buildWaUrl({
    categoria: c.region === "europa" ? "europa" : "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero el paquete armado ${c.nombre} de ${c.dias} días (cód. ${c.mt}).`,
    refWeb: `citylandtravel.com${ruta(c)}`,
  });
  const faqs = [
    {
      q: "¿El precio incluye el vuelo?",
      a:
        c.tipo === "vuelo"
          ? `Sí. Este programa incluye el vuelo desde ${c.origen}${c.aerolineas.length ? ` (${c.aerolineas.join(", ")})` : ""}. Revisa en «Qué incluye» el equipaje permitido.`
          : `No. El precio es solo de los servicios en destino. Si quieres, te cotizamos el vuelo desde Lima aparte.`,
    },
    {
      q: "¿Cuándo sale?",
      a: salidas.length
        ? `Tiene ${salidas.length} ${salidas.length === 1 ? "salida" : "salidas"} con cupo bloqueado; las ves abajo con su precio. Te confirmamos el cupo de tu fecha por WhatsApp.`
        : `Salidas: ${c.salidas}. Te confirmamos los cupos de tu fecha por WhatsApp.`,
    },
    { q: "¿Puedo separar mi viaje?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar." },
    {
      q: "¿El precio es por persona?",
      a: "Sí, es el precio desde por persona en habitación doble. Cambia según la fecha de salida, la categoría de hotel y la disponibilidad.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Circuitos", item: `${URL_BASE_SEO}/circuitos` },
          { "@type": "ListItem", position: 3, name: c.nombre, item: url },
        ],
      },
      {
        "@type": ["Product", "TouristTrip"],
        name: `${c.nombre} (${c.dias} días)`,
        description: `${textoTipo(c)}. Recorrido: ${c.ciudades.join(", ")}.`,
        image: fotos.map((f) => absoluta(f, URL_BASE_SEO)),
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: { "@type": "Offer", price: String(precio), priceCurrency: "USD", availability: "https://schema.org/InStock", url },
      },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <header className="space-y-4">
            <nav aria-label="Migas de pan" className="text-xs text-slate-500">
              <Link href="/" className="hover:underline">
                Inicio
              </Link>{" "}
              /{" "}
              <Link href="/circuitos" className="hover:underline">
                Circuitos
              </Link>
              {region && (
                <>
                  {" "}
                  /{" "}
                  <Link href={`/circuitos#${region.id}`} className="hover:underline">
                    {region.nombre}
                  </Link>
                </>
              )}
            </nav>
            <SelloArmado texto={`Fecha fija · ${lineaComponentes(c)}`} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Paquete armado {c.nombre}
            </h1>
            <div className="flex flex-wrap gap-2 text-sm font-bold">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[#0a1628]">
                {c.dias} días · {c.noches} noches
              </span>
              <span className={`rounded-full px-3 py-1.5 ${c.tipo === "vuelo" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>
                {textoTipo(c)}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[#0a1628]">{c.paises.join(" · ")}</span>
            </div>
          </header>

          <GaleriaMosaico fotos={fotos} alt={`Paquete armado ${c.nombre}`} />

          <div className="grid gap-8 lg:grid-cols-[1fr_340px] items-start">
            <aside className="lg:order-2">
              <CajaPrecio
                etiqueta="Precio desde, por persona en habitación doble"
                precio={formatoUSD(precio)}
                detalle={`${textoTipo(c)}. ${salidas.length ? `${salidas.length} ${salidas.length === 1 ? "salida" : "salidas"} con cupo.` : ""}`}
                wa={wa}
                boton="Separar este paquete armado"
                nota="Precio referencial; cambia según la fecha de salida, el hotel y la disponibilidad."
              />
            </aside>
            <div className="lg:order-1 space-y-10 min-w-0">
              <IncluyeFranja
                items={lineaComponentes(c)
                  .split(" + ")
                  .map((x) => x.charAt(0).toUpperCase() + x.slice(1))}
              />

              <section className="space-y-3">
                <h2 className="text-2xl font-extrabold text-[#0a1628]">Recorrido</h2>
                <RecorridoVisual ciudades={c.ciudades} />
              </section>

              {video && <VideoRecorrido url={video} poster={fotos[0]} titulo={c.nombre} />}

              {salidas.length ? (
                <section className="space-y-3">
                  <h2 className="text-2xl font-extrabold text-[#0a1628]">Salidas con cupo y su precio</h2>
                  <TablaSalidas salidas={salidas} />
                </section>
              ) : (
                <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-2">
                  <h2 className="text-xl font-extrabold text-[#0a1628]">Fechas de salida</h2>
                  <p className="text-[15px] text-slate-700">{c.salidas}</p>
                </section>
              )}

              <QueEsPaqueteArmado sinVuelo={c.tipo !== "vuelo"} />

              <Lista titulo="Qué incluye" items={c.incluye} />
              <Lista titulo="No incluye" items={c.noIncluye} />

              <TablaHoteles hoteles={c.hoteles} />

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

              {otros.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#0a1628]">Otros paquetes armados parecidos</h2>
                  <TarjetasPaquetes items={otros} />
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
      <PorQueCityland destino={c.paises.length === 1 ? c.paises[0] : c.nombre} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
