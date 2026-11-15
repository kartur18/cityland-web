import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { EMPRESA_NOMBRE, OFICINAS, TELEFONO_FORMATEADO } from "@/components/constantes";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import Buscador from "@/components/viaja-a-madrid/Buscador";
import BurbujaWhatsApp from "@/components/viaja-a-madrid/BurbujaWhatsApp";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import MedicionLanding from "@/components/viaja-a-madrid/MedicionLanding";
import { CONTENEDOR, Confianza, Encabezado, Meses, Pasos, Planifica, Requisitos } from "@/components/viaja-a-madrid/Secciones";
import { HORARIO, PRECIO_ANTICIPADO, URL_FUENTE_REQUISITOS, URL_LANDING } from "@/lib/viaja-a-madrid";
import e from "./viaja.module.css";

// Landing para anuncios de pago: sin indexar (no debe competir con /vuelos/lima-madrid ni con las páginas de España) y
// fuera de los sitemaps. Los anuncios la abren igual: noindex no impide que la plataforma la revise.
const TITULO = "Vuelos Lima a Madrid Ida y Vuelta desde US$999 | Cityland Travel";
const DESCRIPCION = "Cotiza boletos Lima–Madrid ida y vuelta desde US$999 para viajar en abril, mayo o junio de 2027. Atención personalizada en Cityland Travel.";

// viewport-fit=cover solo en esta ruta: así la barra inferior respeta el área segura del iPhone sin tocar otras páginas.
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: URL_LANDING },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: URL_LANDING,
    title: TITULO,
    description: DESCRIPCION,
    siteName: EMPRESA_NOMBRE,
    locale: "es_PE",
    images: [{ url: "https://citylandtravel.com/images/espana/madrid-999-compartir.jpg", width: 1200, height: 630, alt: "Lima – Madrid ida y vuelta desde US$ 999" }],
  },
  twitter: { card: "summary_large_image", title: TITULO, description: DESCRIPCION, images: ["https://citylandtravel.com/images/espana/madrid-999-compartir.jpg"] },
};

const PREGUNTAS: { q: string; a: string; guia?: boolean }[] = [
  { q: "¿Los US$ 999 son por persona?", a: "Sí. La tarifa «desde US$ 999» es por persona y está sujeta a disponibilidad. El precio final depende de tus fechas y de la aerolínea, y te lo confirmamos antes de que pagues." },
  { q: "¿El boleto incluye ida y vuelta?", a: "Sí. La promoción es para el viaje de ida y vuelta Lima–Madrid–Lima." },
  { q: "¿Qué fechas están disponibles?", a: "La promoción es para viajar en abril, mayo y junio de 2027. Dinos tu mes y tus fechas aproximadas, y te enviamos las opciones disponibles." },
  { q: "¿El precio incluye equipaje?", a: "Depende de la aerolínea y de la tarifa. Te indicamos qué equipaje incluye cada opción antes de que confirmes." },
  { q: "¿Puedo cambiar la fecha o solicitar una devolución?", a: "Depende de la tarifa y de las condiciones de la aerolínea. Te las explicamos antes de comprar." },
  { q: "¿Cómo puedo reservar y pagar?", a: "Cotizas por WhatsApp, eliges tu opción y un asesor te indica cómo reservar y las formas de pago disponibles. Verás el precio final antes de pagar." },
  {
    q: "¿Qué documentos necesito para viajar a España?",
    a: "Si cumples las condiciones aplicables, puedes hacer visitas de hasta 90 días dentro de cualquier período de 180 días sin visa, con un pasaporte válido hasta 3 meses después de tu salida del espacio Schengen y expedido en los últimos 10 años. En la frontera pueden pedirte documentos sobre el motivo de tu viaje, tu alojamiento, tu salida prevista y tus medios económicos. Los requisitos pueden cambiar y cumplirlos no garantiza la entrada.",
    guia: true,
  },
  { q: "¿Dónde están las oficinas de Cityland Travel?", a: `${OFICINAS.map((o) => o.direccion).join(" y ")}. Atendemos de ${HORARIO.charAt(0).toLowerCase()}${HORARIO.slice(1)}.` },
];

const NAV = [
  { href: "#meses", t: "Meses" },
  { href: "#pasos", t: "Cómo reservar" },
  { href: "#preguntas", t: "Preguntas" },
  { href: "#oficinas", t: "Oficinas" },
];

const retraso = (s: string) => ({ "--d": s }) as React.CSSProperties;

export default function ViajaAMadridPage() {
  return (
    <CotizadorProvider>
      <MedicionLanding />
      <main className="bg-white pb-24 text-[#0a1628] md:pb-0">
        <div className="bg-[#0a1628] px-4 py-2 text-xs font-semibold text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <p>Atención por WhatsApp · {HORARIO}</p>
            <p className="hidden md:block">{TELEFONO_FORMATEADO}</p>
          </div>
        </div>

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className={`${CONTENEDOR} flex h-[64px] items-center justify-between gap-4 md:h-[76px]`}>
            <Link href="/" aria-label="Cityland Travel, inicio" className="block shrink-0">
              <Image src="/logo-transparent.png" alt="Cityland Travel, agencia de viajes" width={100} height={58} priority className="h-[46px] w-[79px] md:h-[58px] md:w-[100px]" />
            </Link>
            <nav aria-label="Secciones" className="hidden gap-7 text-[14.5px] font-semibold md:flex">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="inline-flex min-h-[44px] items-center border-b-2 border-transparent transition-colors hover:border-[#2563eb]">
                  {n.t}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <BotonCotizar zona="Encabezado" compacto />
            </div>
          </div>
        </header>

        {/* PORTADA: el gancho a la izquierda y la Puerta de Alcalá a la derecha; el precio pesa más que el título. */}
        <section className="bg-[#eaf1ff] pb-16 pt-7 md:pb-20 md:pt-10">
          <div className={`${CONTENEDOR} grid items-center gap-7 md:grid-cols-[1fr_1.05fr] md:gap-10`}>
            <div>
              <p className={`${e.entrada} text-xs font-extrabold uppercase tracking-[0.14em] text-[#e30613]`} style={retraso("0s")}>
                España 2027
              </p>
              <h1 className={`${e.entrada} mt-2 text-[clamp(30px,4.6vw,44px)] font-extrabold leading-[1.05] tracking-tighter`} style={retraso("0.06s")}>
                Viaja a Madrid
              </h1>
              <p className={`${e.entrada} mt-1 text-lg font-semibold text-slate-600 sm:text-xl`} style={retraso("0.1s")}>
                Ida y vuelta desde Lima
              </p>
              <p className={`${e.entrada} mt-4 flex items-baseline gap-3`} style={retraso("0.16s")}>
                <small className="text-base font-bold">Desde</small>
                <b className="text-[clamp(56px,9vw,84px)] font-extrabold leading-none tracking-tighter">US$ {PRECIO_ANTICIPADO}</b>
              </p>
              <p className={`${e.entrada} mt-2 text-sm font-semibold text-slate-600`} style={retraso("0.2s")}>
                Por persona · Viajes en abril, mayo y junio de 2027.
              </p>
              <p className={`${e.entrada} mt-3 max-w-md text-[15px] text-slate-600`} style={retraso("0.24s")}>
                Elige tu mes de viaje y consulta las opciones disponibles con nuestros asesores.
              </p>
              <div className={`${e.entrada} mt-5 flex flex-wrap items-center gap-x-6 gap-y-2`} style={retraso("0.28s")}>
                <BotonCotizar zona="Portada" variante="oscuro" principal className="min-h-[48px] text-[15px]" />
                <a href="#meses" className="inline-flex min-h-[44px] items-center text-sm font-bold text-[#0a1628] underline underline-offset-4">
                  Ver meses disponibles
                </a>
              </div>
            </div>

            <div className={`${e.entrada} relative`} style={retraso("0.18s")}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-300 shadow-[0_34px_60px_-32px_rgba(10,22,40,0.6)] md:aspect-auto md:h-[360px]">
                <div className={`${e.zoom} absolute inset-0`}>
                  <Image src="/images/espana/puerta-de-alcala.jpg" alt="Puerta de Alcalá, Madrid" fill priority sizes="(min-width: 768px) 50vw, 92vw" className="object-cover object-[50%_45%]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 text-[13px] font-bold">Puerta de Alcalá, Madrid</span>
              </div>
            </div>
          </div>
        </section>

        <div className={CONTENEDOR}>
          <Buscador />
        </div>

        <Meses />
        <Planifica />
        <Confianza />
        <Pasos />
        <Requisitos />

        <section id="preguntas" className="scroll-mt-20 py-12 sm:py-16">
          <div className={CONTENEDOR}>
            <Encabezado etiqueta="Dudas" titulo="Preguntas frecuentes" />
            <div className="mt-6 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
              {PREGUNTAS.map((p) => (
                <details key={p.q} className="group transition-colors open:bg-[#f4f7fb]">
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]">
                    {p.q}
                    <span aria-hidden="true" className="text-2xl font-light text-[#2563eb] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 leading-relaxed text-slate-600">
                    {p.a}
                    {p.guia && (
                      <>
                        {" "}
                        <a href={URL_FUENTE_REQUISITOS} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0a1628] underline">
                          Ver la fuente oficial
                        </a>
                        .
                      </>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre: bloque azul sin urgencia artificial */}
        <section className="px-5 py-12 sm:py-16">
          <div className="relative mx-auto grid max-w-6xl items-center gap-5 overflow-hidden rounded-3xl bg-[#2563eb] p-6 text-white shadow-[0_30px_50px_-30px_rgba(37,99,235,0.8)] md:grid-cols-[1fr_auto] md:p-9">
            <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border-[30px] border-white/10" />
            <div>
              <h2 className="max-w-xl text-balance text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-3xl">Tu próximo viaje a Madrid comienza aquí</h2>
              <p className="mt-2 text-base font-medium text-white/90">Cotiza tu boleto de ida y vuelta desde US$ {PRECIO_ANTICIPADO} y recibe atención personalizada de Cityland Travel.</p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <BotonCotizar zona="Cierre" variante="claro" principal className="w-full md:w-auto" />
              <p className="text-xs text-white/80 md:max-w-[22rem] md:text-right">Tarifa desde US$ {PRECIO_ANTICIPADO} por persona, sujeta a disponibilidad y condiciones al momento de cotizar.</p>
            </div>
          </div>
        </section>

        <footer id="oficinas" data-cta-wa="" className="scroll-mt-20 bg-[#f4f7fb] py-10 text-sm text-slate-600">
          <div className={`${CONTENEDOR} grid gap-8 md:grid-cols-[1.1fr_1.4fr_auto]`}>
            <div className="flex items-start gap-4">
              <Image src="/logo-transparent.png" alt="Cityland Travel" width={110} height={64} loading="lazy" className="h-16 w-[110px]" />
              <div>
                <p className="font-bold text-[#0a1628]">Cityland Travel — Agencia de viajes</p>
                <p className="mt-1">WhatsApp {TELEFONO_FORMATEADO}</p>
                <p className="mt-1">{HORARIO}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {OFICINAS.map((o) => (
                <li key={o.nombre}>
                  <b className="block text-[#0a1628]">{o.direccion}</b>
                  {o.razonSocial} · RUC {o.ruc}
                </li>
              ))}
            </ul>
            <nav aria-label="Información legal" className="flex flex-col">
              <Link href="/politicas" className="inline-flex min-h-[44px] items-center underline">
                Política de privacidad
              </Link>
              <Link href="/politicas" className="inline-flex min-h-[44px] items-center underline">
                Términos y condiciones
              </Link>
              <Link href="/politicas" className="inline-flex min-h-[44px] items-center underline">
                Libro de reclamaciones
              </Link>
              <Link href="/" className="inline-flex min-h-[44px] items-center underline">
                citylandtravel.com
              </Link>
            </nav>
          </div>
        </footer>

        <BurbujaWhatsApp />
        <BarraMovil />
      </main>
    </CotizadorProvider>
  );
}
