import type { Metadata } from "next";
import { Fragment as Fragmento, type ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PorQueCityland from "@/components/PorQueCityland";
import { Migas } from "@/components/paquetes-armados/Bloques";
import { BarraConfianza, HeroVenta, PasosSeparar } from "@/components/paquetes-armados/Venta";
import { Atajos, CierreUrgencia, CtaMedio, PreguntaFaq, TarjetaPregunta, waEspana } from "@/components/landing-espana/CtasWhatsApp";
import CalendarioSoloIda from "@/components/landing-espana/CalendarioSoloIda";
import CalculadoraBolsa from "@/components/landing-espana/CalculadoraBolsa";
import CalculadoraIprem from "@/components/landing-espana/CalculadoraIprem";
import { Lista, Puntos, Tabla } from "@/components/landing-espana/Bloques";
import { formatoUSD } from "@/lib/formato-precio";
import { absoluta } from "@/lib/paquetes-armados/fotos";
import { tituloSeo } from "@/lib/paquetes-armados/comun";
import { LANDINGS_ESPANA, rutaLandingEspana, type LandingEspana } from "@/lib/landings-espana";
import type { TemaEspana } from "@/lib/landings-espana-tipos";
import { URL_BASE_SEO } from "@/lib/seo-arquitectura";
import { safeJsonLd } from "@/lib/seguridad-http";

// Plantilla de las landings de España (/espana/<slug>): portada clara con el precio, lo propio de cada búsqueda
// al medio y los enlaces a las demás páginas de España al final. Los botones de WhatsApp cambian de forma a lo
// largo de la página (tarjeta, chat, atajos, FAQ, cierre, barra del celular) y nunca van dos iguales juntos.

const CONFIANZA_PASAJES = [
  { t: "Separas con el 50%", d: "y pagas el saldo antes de viajar", i: "M4 7h16v10H4zM4 10h16" },
  { t: "Check-in por tu asesora", d: "te mandamos la tarjeta de embarque", i: "M5 6h14v13H5zM5 10h14M9 4v4M15 4v4" },
  { t: "Te atiende una asesora", d: "por WhatsApp, de la cotización al regreso", i: "M5 5h14v10H9l-4 4z" },
  { t: "2 oficinas en Los Olivos", d: "agencia con local físico en Lima", i: "M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10zM12 9v2" },
];

const PASOS_PASAJE = [
  { t: "Escríbenos tu fecha", d: "Por WhatsApp, con cuántos viajan y desde qué ciudad salen." },
  { t: "Te mandamos las opciones", d: "Aerolínea, horario, maleta y precio de cada una, por escrito." },
  { t: "Separa con el 50%", d: "El saldo lo pagas antes de la emisión. El boleto te llega al celular." },
];

export function metadataLandingEspana(l: LandingEspana): Metadata {
  const url = `${URL_BASE_SEO}${rutaLandingEspana(l)}`;
  const titulo = tituloSeo(l.tituloSeo);
  return {
    title: { absolute: titulo },
    description: l.descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: titulo,
      description: l.descripcion,
      siteName: "Cityland Travel",
      locale: "es_PE",
      images: [absoluta(l.ogImagen ?? l.foto, URL_BASE_SEO)],
    },
  };
}

function migasDe(l: LandingEspana): { nombre: string; href?: string }[] {
  return [{ nombre: "Inicio", href: "/" }, { nombre: "España", href: "/espana" }, ...(l.seccion ? [l.seccion] : []), { nombre: l.migas }];
}

const esSoloIda = (l: LandingEspana) => Boolean(l.tema?.startsWith("solo"));
// Solo los grupos de pasajes del inicio enlazan al paquete migratorio; los demás llevan a «Solo ida».
const enlazaMigratorio = (l: LandingEspana) => !l.tema || ["provincia", "perfil", "guia"].includes(l.tema);

// Orden de los bloques del medio según la familia: así cada grupo se ve y se lee distinto.
type Bloque = "atajos" | "puntos" | "tabla" | "calendario" | "calculadora" | "pregunta" | "lista" | "medio" | "aviso";
const ORDEN_COMUN: Bloque[] = ["puntos", "tabla", "pregunta", "lista", "atajos", "aviso"];
const ORDEN: Partial<Record<TemaEspana, Bloque[]>> = {
  provincia: ["atajos", "puntos", "tabla", "pregunta", "lista", "aviso"],
  soloPerfil: ["lista", "calendario", "puntos", "medio", "tabla", "pregunta", "aviso"],
  soloMes: ["calendario", "puntos", "medio", "tabla", "lista", "pregunta", "aviso"],
  soloOrigen: ["tabla", "calendario", "puntos", "medio", "lista", "pregunta", "aviso"],
  soloDestino: ["puntos", "calendario", "tabla", "medio", "lista", "pregunta", "aviso"],
  soloAerolinea: ["tabla", "puntos", "calendario", "medio", "lista", "pregunta", "aviso"],
  soloGuia: ["puntos", "lista", "medio", "tabla", "calendario", "pregunta", "aviso"],
  dudaBolsa: ["calculadora", "tabla", "puntos", "medio", "lista", "pregunta", "aviso"],
  dudaCosto: ["tabla", "puntos", "medio", "lista", "pregunta", "aviso"],
  dudaCarta: ["puntos", "tabla", "medio", "lista", "pregunta", "aviso"],
  dudaRequisito: ["lista", "puntos", "tabla", "medio", "pregunta", "aviso"],
  traer: ["aviso", "puntos", "medio", "lista", "pregunta"],
  fiesta: ["tabla", "puntos", "medio", "lista", "pregunta", "aviso"],
  equipaje: ["tabla", "atajos", "puntos", "medio", "lista", "pregunta"],
  tramite: ["puntos", "lista", "medio", "calendario", "pregunta", "aviso"],
  peru: ["puntos", "lista", "medio", "pregunta", "aviso"],
  rutaBarcelona: ["tabla", "atajos", "puntos", "medio", "lista", "pregunta"],
  visado: ["calculadora", "puntos", "tabla", "medio", "lista", "calendario", "pregunta", "aviso"],
  practico: ["tabla", "puntos", "pregunta", "lista", "medio"],
  rutaPeru: ["puntos", "tabla", "pregunta", "atajos", "lista", "medio"],
};

function esquema(l: LandingEspana, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: migasDe(l).map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: m.nombre,
          item: m.href ? `${URL_BASE_SEO}${m.href === "/" ? "" : m.href}` : url,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "Product",
        name: l.h1,
        description: l.descripcion,
        image: absoluta(l.foto, URL_BASE_SEO),
        brand: { "@type": "Brand", name: "Cityland Travel" },
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "USD",
          price: l.precio,
          availability: "https://schema.org/InStock",
          seller: { "@type": "TravelAgency", name: "Cityland Travel", url: URL_BASE_SEO },
        },
      },
    ],
  };
}

const URGENCIA = "Las tarifas más baratas de cada vuelo se venden primero. Mientras antes separes con el 50%, más fácil es mantener el precio de tu cotización.";

const CHIP = "inline-flex items-center min-h-[44px] px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-[#0a1628]";

export default function LandingEspanaPagina({ landing: l, hermanas = LANDINGS_ESPANA }: { landing: LandingEspana; hermanas?: readonly LandingEspana[] }) {
  const ruta = rutaLandingEspana(l);
  const url = `${URL_BASE_SEO}${ruta}`;
  const wa = waEspana(ruta, l.mensaje, "Precio");
  // Primero las del mismo grupo, para que cada página enlace a sus hermanas.
  const otras = [...hermanas.filter((x) => x.slug !== l.slug && x.tema === l.tema), ...hermanas.filter((x) => x.tema !== l.tema)];
  const bloques: Record<Bloque, ReactNode> = {
    atajos: l.atajos && <Atajos ruta={ruta} titulo={l.atajosTitulo ?? "Escríbenos directo"} atajos={l.atajos} />,
    puntos: <Puntos l={l} />,
    tabla: <Tabla l={l} />,
    calendario: l.calendario && <CalendarioSoloIda ruta={ruta} c={l.calendario} destacado={l.mesDestacado} />,
    calculadora: l.calculadoraIprem ? (
      <CalculadoraIprem ruta={ruta} tipo={l.calculadoraIprem.tipo} inicial={l.calculadoraIprem.inicial} />
    ) : (
      l.calculadora && <CalculadoraBolsa ruta={ruta} diasIniciales={l.calculadora.dias} />
    ),
    pregunta: l.pregunta && <TarjetaPregunta ruta={ruta} pregunta={l.pregunta} />,
    lista: <Lista l={l} />,
    medio: l.ctaMedio && <CtaMedio ruta={ruta} {...l.ctaMedio} />,
    aviso: l.aviso && (
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 space-y-2">
        <h2 className="text-lg font-extrabold text-[#0a1628]">{l.aviso.titulo}</h2>
        <p className="text-base text-slate-700">{l.aviso.texto}</p>
      </section>
    ),
  };
  // Las que no fijan su orden ponen los atajos al final; las de solo ida los suman tras la lista.
  const orden = ORDEN[l.tema ?? "perfil"] ?? ORDEN_COMUN;
  const ordenFinal = orden.includes("atajos") ? orden : [...orden, "atajos" as const];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(esquema(l, url)) }} />
      <Navbar />
      <main id="main-content" className="bg-white pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          <div className="space-y-3">
            <Migas items={migasDe(l)} />
            <HeroVenta
              foto={l.foto}
              alt={l.fotoAlt ?? l.h1}
              marca={esSoloIda(l) ? "Solo ida" : "Pasajes"}
              sello={l.sello}
              titulo={l.h1}
              bajada={l.bajada}
              chips={l.chips}
              etiquetaPrecio={l.etiquetaPrecio}
              precio={l.precio}
              detallePrecio={l.detallePrecio}
              wa={wa}
              boton={l.boton}
              ancla="Ver lo que tienes que saber"
              nota="Separas con el 50% y pagas el saldo antes de la emisión"
            />
          </div>

          <BarraConfianza items={CONFIANZA_PASAJES} />

          {ordenFinal.map((b) => (
            <Fragmento key={b}>{bloques[b]}</Fragmento>
          ))}

          <PasosSeparar pasos={PASOS_PASAJE} />

          <section className="space-y-4" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
              Preguntas frecuentes
            </h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {l.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-lg text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
                    {f.q}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="text-base leading-relaxed text-slate-600 mt-2">{f.a}</p>
                  <PreguntaFaq ruta={ruta} pregunta={f.q} />
                </details>
              ))}
            </div>
          </section>

          <CierreUrgencia ruta={ruta} titulo={`${l.h1}: cotiza hoy`} precio={l.precio} urgencia={l.urgencia ?? URGENCIA} mensaje={l.mensaje} />

          <section className="space-y-4" aria-labelledby="mas">
            <h2 id="mas" className="text-xl font-extrabold text-[#0a1628]">
              Más para tu viaje a España
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {l.enlaces.map((e) => (
                <Link key={e.href} href={e.href} className={CHIP}>
                  {e.texto}
                </Link>
              ))}
              <Link href="/pasajes-a-espana" className={CHIP}>
                Pasajes a España
              </Link>
              {!enlazaMigratorio(l) ? (
                <Link href="/espana/solo-ida" className={CHIP}>
                  Solo ida a España
                </Link>
              ) : (
                <Link href="/espana" className={CHIP}>
                  Paquete migratorio a España
                </Link>
              )}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {otras.map((x) => (
                <Link key={x.slug} href={rutaLandingEspana(x)} className={CHIP}>
                  {x.migas}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <PorQueCityland destino="España" />
      <Footer />
      <WhatsAppFloat href={waEspana(ruta, l.mensaje, "Barra móvil")} titulo={`${l.migas} · desde ${formatoUSD(l.precio)}`} subtitulo="Separa con el 50% por WhatsApp" />
    </>
  );
}
