import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { precioCityland, relacionados, REGIONES_CIRCUITOS, textoTipo, type Circuito } from "@/lib/circuitos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { SelloArmado, TablaSalidas } from "@/components/paquetes-armados/Bloques";
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
    openGraph: { type: "website", url, title: `${c.nombre} · ${c.dias} días`, description: descripcion, siteName: "Cityland Travel", locale: "es_PE" },
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
  const [foto] = obtenerGaleriaPorTexto(`${c.ciudades.slice(0, 3).join(" ")} ${c.paises.join(" ")}`);
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
        image: [foto.startsWith("http") ? foto : `${URL_BASE_SEO}${foto}`],
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">Paquete armado {c.nombre}</h1>
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

          <section className="grid gap-6 md:grid-cols-[1.4fr_1fr] items-start">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
              <Image src={foto} alt={`${c.nombre}: ${c.ciudades.slice(0, 3).join(", ")}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" priority />
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
              <p className="text-sm text-slate-500">Precio desde, por persona en habitación doble</p>
              <p className="text-4xl font-extrabold text-[#0a1628]">{formatoUSD(precio)}</p>
              <p className="text-sm text-slate-600">{textoTipo(c)}. Separa con el 50% y paga el resto antes de viajar.</p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
              >
                <WhatsAppIcon size={18} />
                Separar este paquete armado
              </a>
              <p className="text-xs text-slate-500">Precio referencial; cambia según la fecha de salida, el hotel y la disponibilidad.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Recorrido</h2>
            <p className="text-[15px] text-slate-700">{c.ciudades.join(" → ")}</p>
          </section>

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

          {c.hoteles.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">Hoteles previstos o similares</h2>
              <ul className="divide-y divide-slate-200 border-y border-slate-200 text-[15px]">
                {c.hoteles.map((h, i) => (
                  <li key={i} className="py-3 flex flex-wrap justify-between gap-x-4 gap-y-1">
                    <span className="font-bold text-[#0a1628]">{h[0]}</span>
                    <span className="text-slate-700">
                      {h[1]}
                      {h[2] ? ` · ${h[2]}` : ""}
                    </span>
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

          {otros.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-[#0a1628]">Otros paquetes armados parecidos</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {otros.map((o) => (
                  <li key={o.slug}>
                    <Link href={ruta(o)} className="block min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors">
                      <span className="block font-extrabold text-[#0a1628]">{o.nombre}</span>
                      <span className="block text-[15px] text-slate-600 mt-0.5">
                        {o.dias} días · desde {formatoUSD(precioCityland(o))}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <PorQueCityland destino={c.paises.length === 1 ? c.paises[0] : c.nombre} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
