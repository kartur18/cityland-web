import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, relacionados, REGIONES_CIRCUITOS, textoTipo, type Circuito } from "@/lib/circuitos";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { portadaDe } from "@/lib/paquetes-armados/fotos";
import { safeJsonLd } from "@/lib/seguridad-http";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { IncluyeNoIncluye, Migas, Preguntas, TablaHoteles, TablaSalidas, TarjetasPaquetes } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, CtaFinal, HeroVenta, PasosSeparar, proximaSalida } from "@/components/paquetes-armados/Venta";
import { CajaPrecio, RecorridoVisual, VideoRecorrido } from "@/components/paquetes-armados/Visual";
import { absoluta, fotosPara, videoDe } from "@/lib/paquetes-armados/fotos";
import { etiquetaArmado, lineaComponentes, tituloSeo } from "@/lib/paquetes-armados/comun";
import { fechaLarga, salidasDe } from "@/lib/salidas";

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
    title: tituloSeo(titulo),
    description: optimizarMetaDescriptionSEO(descripcion),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${c.nombre} · ${c.dias} días`,
      description: descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(portadaDe(c), URL_BASE_SEO)],
    },
  };
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

  const proxima = proximaSalida(salidas);
  const componentes = lineaComponentes(c)
    .split(" + ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <Navbar />
      <main id="main-content" className="bg-slate-50/60 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-3">
            <Migas
              items={[
                { nombre: "Inicio", href: "/" },
                { nombre: "Circuitos", href: "/circuitos" },
                ...(region ? [{ nombre: region.nombre, href: `/circuitos#${region.id}` }] : []),
              ]}
            />
            <HeroVenta
              foto={fotos[0]}
              alt={`Paquete armado ${c.nombre}`}
              sello={c.tipo === "vuelo" ? `Fecha fija · vuelo desde ${c.origen}` : "Fecha fija"}
              titulo={`Paquete armado ${c.nombre}`}
              bajada={`${c.dias} días y ${c.noches} noches por ${listaCorta(c.ciudades, 5)}. ${textoTipo(c)}.`}
              chips={[`${c.dias} días · ${c.noches} noches`, ...componentes]}
              etiquetaPrecio="Desde, por persona en habitación doble"
              precio={precio}
              detallePrecio={salidas.length ? `${salidas.length} ${salidas.length === 1 ? "salida" : "salidas"} con cupo` : textoTipo(c)}
              proxima={proxima}
              wa={wa}
              boton="Separar este paquete"
            />
          </div>

          <BarraConfianza />

          <div className="grid gap-8 lg:grid-cols-[1fr_340px] items-start">
            <div className="space-y-10 min-w-0">
              <section className="space-y-3">
                <h2 className="text-2xl font-extrabold text-[#0a1628]">Recorrido</h2>
                <RecorridoVisual ciudades={c.tipo === "vuelo" ? [c.origen, ...c.ciudades] : c.ciudades} />
              </section>

              {salidas.length ? (
                <section className="space-y-3">
                  <h2 className="text-2xl font-extrabold text-[#0a1628]">Elige tu fecha de salida</h2>
                  <p className="text-[15px] text-slate-600">Cada fecha tiene su precio. Toca la que te conviene para ver el detalle.</p>
                  <TablaSalidas salidas={salidas} />
                </section>
              ) : (
                <section className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-2">
                  <h2 className="text-xl font-extrabold text-[#0a1628]">Fechas de salida</h2>
                  <p className="text-[15px] text-slate-700">{c.salidas}</p>
                </section>
              )}

              {video && <VideoRecorrido url={video} poster={fotos[0]} titulo={c.nombre} />}

              <IncluyeNoIncluye incluye={c.incluye} noIncluye={c.noIncluye} />

              <TablaHoteles hoteles={c.hoteles} />

              <QueEsPaqueteArmado sinVuelo={c.tipo !== "vuelo"} />

              <Preguntas faqs={faqs} />
            </div>
            <aside className="hidden lg:block lg:sticky lg:top-28">
              <CajaPrecio
                etiqueta="Desde, por persona en habitación doble"
                precio={formatoUSD(precio)}
                detalle={proxima ? `Próxima salida: ${fechaLarga(proxima.fecha)}` : textoTipo(c)}
                wa={wa}
                boton="Separar este paquete"
                nota="Precio referencial; cambia según la fecha de salida, el hotel y la disponibilidad."
              />
            </aside>
          </div>

          <PasosSeparar />
          <CtaFinal titulo={`Separa tu cupo en ${c.nombre}`} precio={precio} wa={wa} boton="Separar por WhatsApp" />

          {otros.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">Otros paquetes armados parecidos</h2>
              <TarjetasPaquetes items={otros} />
            </section>
          )}
        </div>
      </main>
      <PorQueCityland destino={c.paises.length === 1 ? c.paises[0] : c.nombre} />
      <Footer />
      <WhatsAppFloat href={wa} titulo={`Desde ${formatoUSD(precio)} por persona`} subtitulo={`${c.nombre} · ${c.dias} días`} />
    </>
  );
}
