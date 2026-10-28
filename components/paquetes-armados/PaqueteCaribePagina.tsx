import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { BotonWhatsApp, Migas, Preguntas, SelloArmado, TablaSalidas, TarjetasPaquetes, faqSchema } from "@/components/paquetes-armados/Bloques";
import EnlacesCaribe from "@/components/paquetes-armados/EnlacesCaribe";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { precioCityland } from "@/lib/circuitos";
import { MESES, precioSalida } from "@/lib/salidas";
import { climaDelMes, zonaClima } from "@/lib/paquetes-armados/clima";
import { lineaComponentes, listaY } from "@/lib/paquetes-armados/comun";
import type { PaginaCaribe } from "@/lib/paquetes-armados/paginas-caribe";
import { DESTINOS_CARIBE } from "@/lib/paquetes-armados/destinos-caribe";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const EUROPA = new Set(["europa", "espana", "italia", "francia", "balcanes", "grecia"]);

const ruta = (p: PaginaCaribe) => `/paquetes-armados/${p.slug}`;

// Si el programa tiene salidas en la página (p. ej. las de ese mes), manda el precio de esas fechas, no el del año.
function desdeDe(p: PaginaCaribe): number {
  return Math.min(
    ...p.programas.map((c) => {
      const propias = p.salidas.filter((s) => s.mt === c.mt);
      return propias.length ? Math.min(...propias.map(precioSalida)) : precioCityland(c);
    })
  );
}

export function metadataCaribe(p: PaginaCaribe): Metadata {
  const url = `${URL_BASE_SEO}${ruta(p)}`;
  const desde = desdeDe(p);
  const desc = `${p.intro} ${p.programas.length} ${p.programas.length === 1 ? "paquete" : "paquetes"} desde ${formatoUSD(desde)} por persona. Separa con el 50%.`;
  return {
    title: `${p.titulo}${p.titulo.length < 46 ? ` desde ${formatoUSD(desde)}` : ""} | Cityland`,
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: p.h1, description: desc, siteName: "Cityland Travel", locale: "es_PE" },
  };
}

// Página de paquetes armados a un destino de playa: por mes, por estilo de viaje o por hotel.
export default function PaqueteCaribePagina({ pagina: p }: { pagina: PaginaCaribe }) {
  const d = p.destino;
  const url = `${URL_BASE_SEO}${ruta(p)}`;
  const desde = desdeDe(p);
  const zona = zonaClima(d.zona);
  const esPlaya = DESTINOS_CARIBE.some((x) => x.id === d.id);
  const [foto] = obtenerGaleriaPorTexto(`${d.nombre} ${d.pais}${esPlaya ? " playa" : ""}`);
  const principal = p.programas[0];
  const conVuelo = p.programas.some((c) => c.tipo === "vuelo");
  const wa = buildWaUrl({
    categoria: esPlaya ? "caribe" : EUROPA.has(d.id) ? "europa" : "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero el paquete armado a ${d.nombre}${p.clase === "mes" ? ` en ${p.clave}` : p.clase === "hotel" ? ` con ${p.clave}` : ` (${p.clave})`}${p.programas.length === 1 ? ` (cód. ${principal.mt})` : ""}. ¿Qué fechas tienen con cupo?`,
    refWeb: `citylandtravel.com${ruta(p)}`,
  });
  const clima = zona && p.mes ? climaDelMes(zona, p.mes) : undefined;
  const faqs = [
    {
      q: `¿Cuánto cuesta un paquete armado a ${d.nombre}${p.clase === "mes" ? ` en ${p.clave}` : ""}?`,
      a: `Desde ${formatoUSD(desde)} por persona en habitación doble${conVuelo ? ", con vuelo incluido en los programas que lo indican" : ""}. El precio final depende de la fecha de salida y del hotel.`,
    },
    {
      q: "¿Qué incluye?",
      a: `${p.programas
        .slice(0, 3)
        .map((c) => `${c.nombre} (${c.dias} días): ${lineaComponentes(c)}`)
        .join(". ")}.`,
    },
    {
      q: "¿Las fechas son fijas?",
      a: "Sí. Un paquete armado sale en fechas ya definidas por el mayorista. Si necesitas otra fecha, te armamos un viaje a medida.",
    },
    { q: "¿Cómo separo?", a: "Escríbenos por WhatsApp con la fecha y el número de personas; separas con el 50% y el saldo se paga antes de viajar." },
  ];
  if (clima) faqs.splice(1, 0, { q: `¿Cómo es el clima en ${d.nombre} en ${p.clave}?`, a: `${clima.t} en promedio. ${clima.txt}` });
  if (p.hotel)
    faqs.splice(1, 0, {
      q: `¿Me aseguran el hotel ${p.hotel.nombre}?`,
      a: "Es el hotel previsto por el mayorista. Puede cambiarse por otro de la misma categoría («o similar») según disponibilidad; te lo confirmamos antes de pagar el saldo.",
    });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Paquetes armados", item: `${URL_BASE_SEO}/paquetes-armados` },
          { "@type": "ListItem", position: 3, name: p.h1, item: url },
        ],
      },
      {
        "@type": ["Product", "TouristTrip"],
        name: p.titulo,
        description: p.intro,
        image: [foto.startsWith("http") ? foto : `${URL_BASE_SEO}${foto}`],
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: { "@type": "AggregateOffer", lowPrice: String(desde), priceCurrency: "USD", offerCount: String(p.programas.length), availability: "https://schema.org/LimitedAvailability", url },
      },
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <header className="space-y-4">
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Paquetes armados", href: "/paquetes-armados" }, { nombre: d.nombre }]} />
            <SelloArmado texto={`Fecha fija · ${conVuelo ? "vuelo + hotel + traslados" : "hotel + traslados"}`} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">{p.h1}</h1>
            <p className="text-[17px] text-slate-700">{p.intro}</p>
          </header>

          <section className="grid gap-6 md:grid-cols-[1.4fr_1fr] items-start">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
              <Image src={foto} alt={`Paquete armado a ${d.nombre}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" priority />
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
              <p className="text-sm text-slate-500">Desde, por persona en habitación doble</p>
              <p className="text-4xl font-extrabold text-[#0a1628]">{formatoUSD(desde)}</p>
              <p className="text-sm text-slate-600">
                {p.programas.length} {p.programas.length === 1 ? "paquete armado" : "paquetes armados"}
                {p.salidas.length ? ` y ${p.salidas.length} ${p.salidas.length === 1 ? "salida" : "salidas"} con cupo` : ""}.
              </p>
              <BotonWhatsApp href={wa} texto="Consultar cupos" />
            </div>
          </section>

          {clima && (
            <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-1">
              <h2 className="text-xl font-extrabold text-[#0a1628]">
                Clima en {d.nombre} en {p.clave}
              </h2>
              <p className="text-[15px] text-slate-700">
                <strong>{clima.t}</strong> en promedio. {clima.txt}
              </p>
            </section>
          )}
          {p.estilo && (
            <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-1">
              <h2 className="text-xl font-extrabold text-[#0a1628]">Un consejo antes de elegir</h2>
              <p className="text-[15px] text-slate-700">{p.estilo.consejo}</p>
            </section>
          )}
          {p.hotel && (
            <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-1">
              <h2 className="text-xl font-extrabold text-[#0a1628]">{p.hotel.nombre}</h2>
              <p className="text-[15px] text-slate-700">
                {p.hotel.categoria ? `Categoría ${p.hotel.categoria}. ` : ""}
                Aparece en {listaY(p.programas.map((c) => `${c.nombre} (${c.dias} días)`))}. El precio con este hotel puede ser distinto al «desde»; te lo cotizamos según tu fecha.
              </p>
            </section>
          )}

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Paquetes armados disponibles</h2>
            <TarjetasPaquetes items={p.programas} />
          </section>

          {p.salidas.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">Salidas con cupo confirmado</h2>
              <TablaSalidas salidas={p.salidas} />
            </section>
          )}

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Qué hacer en {d.nombre}</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-700">
              {d.imperdibles.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="text-[15px] text-slate-700">
              <strong>Moneda:</strong> {d.moneda}
            </p>
            {d.requisitos && (
              <p className="text-[15px] text-slate-700">
                <strong>Documentos:</strong>{" "}
                <Link href={d.requisitos} className="font-bold text-[#0a1628] underline">
                  revisa los requisitos para peruanos
                </Link>{" "}
                antes de separar tu cupo.
              </p>
            )}
            {zona && p.clase !== "mes" && (
              <p className="text-[15px] text-slate-700">
                <strong>Mejor época:</strong>{" "}
                {MESES.filter((_, i) => /seco|seca|mejor/i.test(zona.meses[i].txt))
                  .slice(0, 5)
                  .join(", ") || "todo el año"}
                .
              </p>
            )}
          </section>

          <QueEsPaqueteArmado sinVuelo={!conVuelo} />
          <Preguntas faqs={faqs} />
          <EnlacesCaribe actual={p} />
        </div>
      </main>
      <PorQueCityland destino={d.nombre} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
