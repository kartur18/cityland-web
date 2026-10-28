import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import QueEsPaqueteArmado from "@/components/paquetes-armados/QueEsPaqueteArmado";
import { BotonWhatsApp, Lista, Migas, Preguntas, SelloArmado, TablaHoteles, TablaSalidas, faqSchema } from "@/components/paquetes-armados/Bloques";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { claveMes, diaSemana, fechaLarga, partesFecha, precioSalida, salidasDe, sumarDias, type Salida } from "@/lib/salidas";
import { climaDelMes, zonaClima } from "@/lib/paquetes-armados/clima";
import { etiquetaArmado, feriadosEnViaje, lineaComponentes, listaY } from "@/lib/paquetes-armados/comun";
import { URL_BASE_SEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
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
  const titulo = `Paquete armado ${c.nombre}, salida ${corta}`;
  const desc = `${etiquetaArmado(c)} ${c.nombre}: ${c.dias} días con salida el ${fechaLarga(s.fecha)}${c.tipo === "vuelo" ? ` desde ${c.origen}` : ""}. ${lineaComponentes(c)}. Desde ${formatoUSD(precioSalida(s))} por persona. Cupos limitados.`;
  return {
    title: `${titulo.length > 52 ? titulo : `${titulo} | ${formatoUSD(precioSalida(s))}`} | Cityland`,
    description: optimizarMetaDescriptionSEO(desc),
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: titulo, description: desc, siteName: "Cityland Travel", locale: "es_PE" },
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
  const [foto] = obtenerGaleriaPorTexto(`${c.ciudades.slice(0, 3).join(" ")} ${c.paises.join(" ")}`);
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
        image: [foto.startsWith("http") ? foto : `${URL_BASE_SEO}${foto}`],
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: { "@type": "Offer", price: String(precio), priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: s.fecha, url },
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
            <Migas
              items={[
                { nombre: "Inicio", href: "/" },
                { nombre: "Salidas con fecha", href: "/salidas" },
                { nombre: claveMes(s.fecha).replace("-", " "), href: `/salidas/${claveMes(s.fecha)}` },
              ]}
            />
            <SelloArmado texto={`Fecha fija · ${lineaComponentes(c)}`} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight text-balance">
              Paquete armado {c.nombre}: salida el {fechaLarga(s.fecha)}
            </h1>
            <p className="text-[17px] text-slate-700">
              {c.dias} días y {c.noches} noches por {listaY(c.ciudades.slice(0, 5))}. Sales el {diaSemana(s.fecha)} {fechaLarga(s.fecha)}
              {c.tipo === "vuelo" ? ` desde ${c.origen}` : ""} y vuelves el {diaSemana(regreso)} {fechaLarga(regreso)}.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-[1.4fr_1fr] items-start">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
              <Image src={foto} alt={`${c.nombre}: ${c.ciudades.slice(0, 3).join(", ")}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" priority />
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
              <p className="text-sm text-slate-500">Precio de esta salida, por persona en habitación doble</p>
              <p className="text-4xl font-extrabold text-[#0a1628]">{formatoUSD(precio)}</p>
              <p className="text-sm text-slate-600">{comparacion}</p>
              <BotonWhatsApp href={wa} texto="Separar mi cupo" />
              <p className="text-xs text-slate-500">Código del paquete: {c.mt}. Precio sujeto a cupo y a cambios del mayorista o la aerolínea.</p>
            </div>
          </section>

          <QueEsPaqueteArmado sinVuelo={sinVuelo} />

          <section className="grid gap-4 sm:grid-cols-2">
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
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-1">
              <h2 className="text-lg font-extrabold text-[#0a1628]">Tus fechas</h2>
              <p className="text-[15px] text-slate-700">
                Salida: {diaSemana(s.fecha)} {fechaLarga(s.fecha)}. Regreso: {diaSemana(regreso)} {fechaLarga(regreso)}.
                {feriados.length > 0 && ` En el Perú es feriado ${listaY(feriados)} mientras viajas: son días que no pides en el trabajo.`}
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[#0a1628]">Recorrido</h2>
            <p className="text-[15px] text-slate-700">{c.ciudades.join(" → ")}</p>
            <p className="text-sm">
              <Link href={`/circuitos/${c.slug}`} className="font-bold text-[#0a1628] underline">
                Ver la ficha completa del paquete {c.nombre}
              </Link>
            </p>
          </section>

          <Lista titulo="Qué incluye" items={c.incluye} />
          <Lista titulo="No incluye" items={c.noIncluye} />
          <TablaHoteles hoteles={c.hoteles} />

          {hermanas.length > 1 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#0a1628]">Otras fechas de este paquete armado</h2>
              <TablaSalidas salidas={hermanas} actual={s.slug} />
            </section>
          )}

          <Preguntas faqs={faqs} />
        </div>
      </main>
      <PorQueCityland destino={c.paises.length === 1 ? c.paises[0] : c.nombre} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
