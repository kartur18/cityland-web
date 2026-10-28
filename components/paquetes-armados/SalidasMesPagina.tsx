import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { BotonWhatsApp, Migas, Preguntas, SelloArmado, TablaSalidas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { REGIONES_CIRCUITOS } from "@/lib/circuitos";
import { MESES, mesesConSalidas, partesFecha, precioSalida, type MesSalidas } from "@/lib/salidas";
import { climaDelMes, zonaClima, type ZonaClima } from "@/lib/paquetes-armados/clima";
import { feriadosEnViaje, listaY } from "@/lib/paquetes-armados/comun";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (m: MesSalidas) => `/salidas/${m.clave}`;

function resumen(m: MesSalidas) {
  const destinos = [...new Set(m.salidas.map((s) => s.circuito.paises[0]))];
  const desde = Math.min(...m.salidas.map(precioSalida));
  return { destinos, desde };
}

export function metadataMes(m: MesSalidas): Metadata {
  const url = `${URL_BASE_SEO}${ruta(m)}`;
  const { destinos, desde } = resumen(m);
  const desc = `${m.salidas.length} salidas de paquetes armados en ${m.nombre} con vuelo desde Lima: ${listaY(destinos.slice(0, 6))}. Fecha fija, hotel y traslados incluidos, desde ${formatoUSD(desde)} por persona.`;
  return {
    title: `Paquetes armados con salida en ${m.nombre} desde Lima | Cityland`,
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: `Paquetes armados en ${m.nombre}`, description: desc, siteName: "Cityland Travel", locale: "es_PE" },
  };
}

// Todas las salidas con cupo de un mes, agrupadas por región, con el clima de cada destino ese mes.
export default function SalidasMesPagina({ mes: m }: { mes: MesSalidas }) {
  const url = `${URL_BASE_SEO}${ruta(m)}`;
  const { destinos, desde } = resumen(m);
  const numMes = partesFecha(m.salidas[0].fecha).mes;
  const anio = partesFecha(m.salidas[0].fecha).anio;
  const inicio = `${anio}-${String(numMes).padStart(2, "0")}-01`;
  const fin = `${anio}-${String(numMes).padStart(2, "0")}-31`;
  const feriados = feriadosEnViaje(inicio, fin);
  const zonas = new Map<string, ZonaClima>();
  for (const s of m.salidas) {
    const z = zonaClima(`${s.circuito.nombre} ${s.circuito.ciudades.slice(0, 4).join(" ")} ${s.circuito.paises.join(" ")}`);
    if (z) zonas.set(z.id, z);
  }
  const grupos = REGIONES_CIRCUITOS.map((r) => ({ r, salidas: m.salidas.filter((s) => s.circuito.region === r.id) })).filter((g) => g.salidas.length);
  const otros = mesesConSalidas().filter((x) => x.clave !== m.clave);
  const wa = buildWaUrl({
    categoria: "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero un paquete armado con salida en ${m.nombre}. ¿Qué fechas tienen con cupo?`,
    refWeb: `citylandtravel.com${ruta(m)}`,
  });
  const faqs = [
    {
      q: `¿Qué paquetes armados salen en ${m.nombre}?`,
      a: `Hay ${m.salidas.length} salidas con cupo a ${listaY(destinos.slice(0, 8))}. Todas tienen fecha fija y la mayoría incluye el vuelo desde Lima.`,
    },
    { q: `¿Cuánto cuesta viajar en ${m.nombre}?`, a: `La salida más barata del mes cuesta ${formatoUSD(desde)} por persona en habitación doble. Cada fecha tiene su propio precio.` },
    {
      q: "¿Puedo viajar en otra fecha?",
      a: "Las fechas de un paquete armado son fijas. Si necesitas otra fecha, te armamos un viaje a medida con los mismos destinos.",
    },
    { q: "¿Cómo separo mi cupo?", a: "Elige tu salida, escríbenos por WhatsApp y separas con el 50%. El saldo se paga antes de viajar." },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Salidas con fecha", item: `${URL_BASE_SEO}/salidas` },
          { "@type": "ListItem", position: 3, name: m.nombre, item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: `Paquetes armados con salida en ${m.nombre}`,
        itemListElement: m.salidas.slice(0, 50).map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `${URL_BASE_SEO}/salidas/${s.slug}`, name: s.circuito.nombre })),
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
            <Migas items={[{ nombre: "Inicio", href: "/" }, { nombre: "Salidas con fecha", href: "/salidas" }, { nombre: m.nombre }]} />
            <SelloArmado texto={`${m.salidas.length} salidas en ${m.nombre}`} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Paquetes armados con salida en {m.nombre}
            </h1>
            <p className="text-[17px] text-slate-700">
              Viajes ya organizados con fecha fija y cupo confirmado a {listaY(destinos.slice(0, 8))}. Desde {formatoUSD(desde)} por persona.
              {feriados.length > 0 && ` Este mes es feriado en el Perú por ${listaY(feriados)}: buena fecha para estirar las vacaciones.`}
            </p>
            <div className="max-w-sm">
              <BotonWhatsApp href={wa} texto={`Ver cupos de ${MESES[numMes - 1]}`} />
            </div>
          </header>

          {grupos.map((g) => (
            <section key={g.r.id} className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">{g.r.nombre}</h2>
              <TablaSalidas salidas={g.salidas} />
            </section>
          ))}

          {zonas.size > 0 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">¿Qué clima hay en {MESES[numMes - 1]}?</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[...zonas.values()].map((z) => {
                  const c = climaDelMes(z, numMes);
                  return (
                    <li key={z.id} className="rounded-2xl border border-slate-200 p-4 text-[15px] text-slate-700">
                      <strong className="block text-[#0a1628] first-letter:uppercase">{z.nombre}</strong>
                      {c.t}. {c.txt}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <QueEsPaqueteArmado />
          <Preguntas faqs={faqs} />

          <section className="space-y-3">
            <h2 className="text-xl font-extrabold text-[#0a1628]">Salidas en otros meses</h2>
            <ul className="flex flex-wrap gap-2">
              {otros.map((o) => (
                <li key={o.clave}>
                  <Link href={ruta(o)} className="inline-flex min-h-[44px] items-center rounded-full border border-slate-200 px-4 text-sm font-bold text-[#0a1628] hover:border-[#0a1628]">
                    {o.nombre} ({o.salidas.length})
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <PorQueCityland destino="tu viaje" />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
