import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { IncluyeNoIncluye, Migas, Preguntas, TablaHoteles, TablaSalidas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, CtaFinal, HeroVenta, PasosSeparar } from "@/components/paquetes-armados/Venta";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { CajaPrecio, RecorridoVisual, VideoRecorrido } from "@/components/paquetes-armados/Visual";
import { absoluta, fotosPara, videoDe } from "@/lib/paquetes-armados/fotos";
import { claveMes, diaSemana, fechaLarga, partesFecha, precioSalida, salidasDe, sumarDias, type Salida } from "@/lib/salidas";
import { climaDelMes, zonaClima } from "@/lib/paquetes-armados/clima";
import { etiquetaArmado, feriadosEnViaje, lineaComponentes, listaY, tituloSeo } from "@/lib/paquetes-armados/comun";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import { portadaDe } from "@/lib/paquetes-armados/fotos";
import { safeJsonLd } from "@/lib/seguridad-http";

const ruta = (s: Salida) => `/salidas/${s.slug}`;

function textoDestino(s: Salida): string {
  const c = s.circuito;
  return `${c.nombre} ${c.ciudades.slice(0, 4).join(" ")} ${c.paises.join(" ")}`;
}

export function metadataSalida(s: Salida): Metadata {
  const c = s.circuito;
  const url = `${URL_BASE_SEO}${ruta(s)}`;
  const { dia, mes, anio } = partesFecha(s.fecha);
  const corta = `${dia}/${String(mes).padStart(2, "0")}/${anio}`;
  const titulo = `Paquete armado ${c.nombre}${c.origen !== "Lima" ? ` desde ${c.origen}` : ""}, salida ${corta}`;
  const desc = `${etiquetaArmado(c)} ${c.nombre}: ${c.dias} días con salida el ${fechaLarga(s.fecha)}${c.tipo === "vuelo" ? ` desde ${c.origen}` : ""}. ${lineaComponentes(c)}. Desde ${formatoUSD(precioSalida(s))} por persona. Cupos limitados.`;
  return {
    title: tituloSeo(titulo, `· ${formatoUSD(precioSalida(s))}`),
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: titulo,
      description: desc,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(portadaDe(c), URL_BASE_SEO)],
    },
  };
}

// Una salida con fecha fija de un paquete armado del mayorista: precio de esa fecha, regreso, clima y feriados.
export default function SalidaPagina({ salida: s }: { salida: Salida }) {
  const c = s.circuito;
  const url = `${URL_BASE_SEO}${ruta(s)}`;
  const precio = precioSalida(s);
  const regreso = sumarDias(s.fecha, c.dias - 1);
  const { mes } = partesFecha(s.fecha);
  const zona = zonaClima(textoDestino(s));
  const clima = zona ? climaDelMes(zona, mes) : undefined;
  const feriados = feriadosEnViaje(s.fecha, regreso);
  const hermanas = salidasDe(c.mt);
  const minimo = Math.min(...hermanas.map((h) => h.precio));
  const fotos = fotosPara([c], `${c.ciudades.slice(0, 3).join(" ")} ${c.paises.join(" ")}`);
  const video = videoDe(c);
  const sinVuelo = c.tipo !== "vuelo";
  const wa = buildWaUrl({
    categoria: c.region === "europa" ? "europa" : c.region === "caribe" ? "caribe" : "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero el paquete armado ${c.nombre} (cód. ${c.mt}), salida del ${fechaLarga(s.fecha)}. ¿Hay cupo?`,
    refWeb: `citylandtravel.com${ruta(s)}`,
  });
  const comparacion =
    hermanas.length > 1
      ? s.precio === minimo
        ? `Es la salida más barata de este paquete (hay ${hermanas.length} fechas con cupo).`
        : `Hay ${hermanas.length} fechas con cupo; la más barata cuesta ${formatoUSD(minimo + 150)}, ${formatoUSD(s.precio - minimo)} menos que esta.`
      : "Es la única fecha con cupo bloqueado de este paquete por ahora.";
  const faqs = [
    {
      q: "¿Qué incluye exactamente este paquete armado?",
      a: `${lineaComponentes(c).replace(/^./, (x) => x.toUpperCase())}. Abajo tienes la lista completa de lo que incluye y lo que no.`,
    },
    {
      q: "¿Cuándo regreso?",
      a: `Sales el ${diaSemana(s.fecha)} ${fechaLarga(s.fecha)} y el programa termina el ${diaSemana(regreso)} ${fechaLarga(regreso)} (${c.dias} días y ${c.noches} noches). Los horarios exactos de los vuelos se confirman al emitir.`,
    },
    {
      q: "¿El precio es por persona?",
      a: `Sí: ${formatoUSD(precio)} por persona en habitación doble para esta salida. En habitación triple o sencilla, y para niños, te cotizamos al toque.`,
    },
    {
      q: "¿Cómo separo mi cupo?",
      a: "Escríbenos por WhatsApp con la fecha; tu asesora confirma que haya cupo y separas con el 50%. El saldo se paga antes de viajar.",
    },
    {
      q: "¿Qué documentos necesito?",
      a: `Pasaporte con vigencia mayor a 6 meses a la fecha de regreso. Para ${listaY(c.paises.slice(0, 4))} te confirmamos los requisitos vigentes para peruanos al cotizar.`,
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: URL_BASE_SEO },
          { "@type": "ListItem", position: 2, name: "Salidas con fecha", item: `${URL_BASE_SEO}/salidas` },
          { "@type": "ListItem", position: 3, name: `${c.nombre} · ${fechaLarga(s.fecha)}`, item: url },
        ],
      },
      {
        "@type": ["Product", "TouristTrip"],
        name: `Paquete armado ${c.nombre} · salida ${fechaLarga(s.fecha)}`,
        description: `${lineaComponentes(c)}. Recorrido: ${c.ciudades.join(", ")}.`,
        image: fotos.map((f) => absoluta(f, URL_BASE_SEO)),
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          price: String(precio),
          priceCurrency: "USD",
          availability: "https://schema.org/LimitedAvailability",
          validThrough: s.fecha,
          url,
        },
      },
      faqSchema(faqs),
    ],
  };

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
                { nombre: "Salidas con fecha", href: "/salidas" },
                { nombre: claveMes(s.fecha).replace("-", " "), href: `/salidas/${claveMes(s.fecha)}` },
              ]}
            />
            <HeroVenta
              foto={fotos[0]}
              alt={`Paquete armado ${c.nombre}`}
              sello={`Salida el ${fechaLarga(s.fecha)}`}
              titulo={`Paquete armado ${c.nombre}: salida el ${fechaLarga(s.fecha)}`}
              bajada={`${c.dias} días y ${c.noches} noches por ${listaY(c.ciudades.slice(0, 5))}. Sales el ${diaSemana(s.fecha)} ${fechaLarga(s.fecha)}${c.tipo === "vuelo" ? ` desde ${c.origen}` : ""} y vuelves el ${diaSemana(regreso)} ${fechaLarga(regreso)}.`}
              chips={[`${c.dias} días · ${c.noches} noches`, ...componentes]}
              etiquetaPrecio="Precio de esta salida, por persona en doble"
              precio={precio}
              detallePrecio={comparacion}
              proxima={s}
              etiquetaFecha="Fecha de salida"
              wa={wa}
              boton="Separar mi cupo"
            />
          </div>

          <BarraConfianza />

          <div className="grid gap-8 lg:grid-cols-[1fr_340px] items-start">
            <div className="space-y-10 min-w-0">
              <section className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-1">
                  <h2 className="text-lg font-extrabold text-[#0a1628]">Tus fechas</h2>
                  <p className="text-[15px] text-slate-700">
                    Salida: {diaSemana(s.fecha)} {fechaLarga(s.fecha)}. Regreso: {diaSemana(regreso)} {fechaLarga(regreso)}.
                    {feriados.length > 0 && ` En el Perú es feriado ${listaY(feriados)} mientras viajas: son días que no pides en el trabajo.`}
                  </p>
                </div>
                {clima && zona && (
                  <div className="rounded-2xl bg-sky-50 border border-sky-100 p-5 space-y-1">
                    <h2 className="text-lg font-extrabold text-[#0a1628]">
                      Clima en {zona.nombre} en {fechaLarga(s.fecha).split(" de ")[1]}
                    </h2>
                    <p className="text-[15px] text-slate-700">
                      <strong>{clima.t}</strong> en promedio. {clima.txt}
                    </p>
                  </div>
                )}
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-extrabold text-[#0a1628]">Recorrido</h2>
                <RecorridoVisual ciudades={c.tipo === "vuelo" ? [c.origen, ...c.ciudades] : c.ciudades} />
                <p className="text-sm">
                  <Link href={`/circuitos/${c.slug}`} className="font-bold text-[#0a1628] underline">
                    Ver la ficha completa del paquete {c.nombre}
                  </Link>
                </p>
              </section>

              {video && <VideoRecorrido url={video} poster={fotos[0]} titulo={c.nombre} />}

              <IncluyeNoIncluye incluye={c.incluye} noIncluye={c.noIncluye} />
              <TablaHoteles hoteles={c.hoteles} />
              <QueEsPaqueteArmado sinVuelo={sinVuelo} />
              <Preguntas faqs={faqs} />
            </div>
            <aside className="hidden lg:block lg:sticky lg:top-28">
              <CajaPrecio
                etiqueta="Precio de esta salida, por persona en doble"
                precio={formatoUSD(precio)}
                detalle={`Salida: ${fechaLarga(s.fecha)}`}
                wa={wa}
                boton="Separar mi cupo por WhatsApp"
                nota={`Código del paquete: ${c.mt}. Precio sujeto a cupo y a cambios del mayorista o la aerolínea.`}
              />
            </aside>
          </div>

          {hermanas.length > 1 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">Otras fechas de este paquete armado</h2>
              <TablaSalidas salidas={hermanas} actual={s.slug} />
            </section>
          )}

          <PasosSeparar />
          <CtaFinal titulo={`Separa tu cupo del ${fechaLarga(s.fecha)}`} precio={precio} wa={wa} boton="Separar por WhatsApp" />
        </div>
      </main>
      <PorQueCityland destino={c.paises.length === 1 ? c.paises[0] : c.nombre} />
      <Footer />
      <WhatsAppFloat href={wa} titulo={`${formatoUSD(precio)} por persona`} subtitulo={`Salida el ${fechaLarga(s.fecha)}`} />
    </>
  );
}
