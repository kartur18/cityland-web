import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import BurbujaWhatsApp from "@/components/viaja-a-madrid/BurbujaWhatsApp";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import CotizadorFechas from "@/components/viaja-a-madrid/CotizadorFechas";
import { CONTENEDOR, Cinta, Comparativo, Encabezado, Galeria, GuiaViaje, Hechos, LineaDeTiempo, ParaQuien, SECCION } from "@/components/viaja-a-madrid/Secciones";
import SelectorMes from "@/components/viaja-a-madrid/SelectorMes";
import { HORARIO, OFICINAS, PRECIO_ANTICIPADO } from "@/lib/viaja-a-madrid";
import e from "./viaja.module.css";

// Landing para anuncios de pago: sin indexar (no debe competir con /vuelos/lima-madrid ni con las páginas de España) y
// fuera de los sitemaps. Los anuncios la abren igual: noindex no impide que la plataforma la revise.
const DESCRIPCION =
  "Boletos ida y vuelta Lima–Madrid desde US$ 999 por persona con compra anticipada, para viajar en abril, mayo o junio de 2027. Cotiza por WhatsApp.";

export const metadata: Metadata = {
  title: "Viaja a Madrid desde US$ 999 | Cityland Travel",
  description: DESCRIPCION,
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    title: "Viaja a Madrid: ida y vuelta desde Lima, desde US$ 999",
    description: DESCRIPCION,
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: ["https://citylandtravel.com/images/espana/gran-via-metropolis.jpg"],
  },
};

const ESCENAS = [
  { src: "/images/espana/gran-via-metropolis.jpg", alt: "Gran Vía y el edificio Metrópolis, Madrid" },
  { src: "/images/espana/cibeles.jpg", alt: "Fuente de Cibeles, Madrid" },
  { src: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid" },
];

const CONFIRMAMOS = [
  "La aerolínea y las escalas de tu opción",
  "El equipaje que incluye cada tarifa",
  "Los impuestos y el precio final por persona",
  "Los horarios de ida y de vuelta",
  "Las condiciones de cambio y devolución",
];

const PREGUNTAS = [
  {
    q: "¿El precio de US$ 999 es por persona?",
    a: "Sí: es por persona, ida y vuelta Lima–Madrid–Lima. Es una tarifa «desde», sujeta a disponibilidad; el precio final depende de tus fechas y se confirma antes de que compres.",
  },
  {
    q: "¿Por qué solo abril, mayo y junio de 2027?",
    a: "Esta tarifa de compra anticipada es para esos tres meses. Si quieres viajar en otra fecha, escríbenos y te cotizamos.",
  },
  {
    q: "¿Incluye equipaje?",
    a: "Depende de la aerolínea y de la tarifa. Antes de que compres, te confirmamos por escrito qué equipaje incluye la opción que elijas.",
  },
  {
    q: "¿Puedo cambiar o devolver mi boleto?",
    a: "Las condiciones dependen de la tarifa y de la aerolínea. Te las explicamos antes de comprar, para que decidas con toda la información.",
  },
  {
    q: "¿Necesito visa para viajar a España?",
    a: "Para turismo, los peruanos pueden viajar a España sin visa hasta 90 días, pero en el aeropuerto pueden pedirte documentos y dinero para tu estadía.",
  },
  {
    q: "¿Cómo compro?",
    a: "Pide tu cotización por WhatsApp, elige la opción que más te convenga y una asesora te guía en la reserva y el pago.",
  },
];

const retraso = (s: string) => ({ "--d": s }) as React.CSSProperties;

// Código de barras decorativo del pase de abordar: anchos fijos, sin aleatoriedad.
const BARRAS = [2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2];

export default function ViajaAMadridPage() {
  return (
    <CotizadorProvider>
      <main className="bg-white pb-20 text-[#0a1628] md:pb-0">
        <div className="border-b border-slate-200 bg-[#faf8f4] px-4 py-2 text-center font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#e30613] sm:text-sm">
          Tarifa de compra anticipada · Abril, mayo y junio 2027
        </div>

        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
          <div className={`${CONTENEDOR} flex h-16 items-center justify-between`}>
            <Link href="/" aria-label="Cityland Travel, inicio" className="relative block h-11 w-36 shrink-0">
              <Image src="/logo-transparent.png" alt="Cityland Travel" fill priority sizes="144px" className="object-contain object-left" />
            </Link>
            <div className="flex items-center gap-5">
              <p className="hidden font-mono text-sm font-bold text-slate-600 md:block">WhatsApp +51 944 103 890</p>
              <BotonCotizar zona="Encabezado" texto="Cotizar" compacto />
            </div>
          </div>
        </header>

        {/* HERO: panel de reserva como el de una aerolínea (ruta, tarifa, mes) y un pase de abordar sobre la foto. */}
        <section className="border-b border-slate-200 bg-[#faf8f4]">
          <div className={`${CONTENEDOR} grid items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16`}>
            <div>
              <p className={`${e.entrada} font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#e30613]`} style={retraso("0s")}>
                Tu próximo viaje a España
              </p>
              <h1 className={`${e.entrada} mt-3 text-5xl font-extrabold leading-[1] tracking-tighter sm:text-6xl`} style={retraso("0.08s")}>
                Viaja a Madrid
              </h1>
              <p className={`${e.entrada} mt-3 text-xl text-slate-600`} style={retraso("0.16s")}>
                Boletos ida y vuelta desde Lima.
              </p>

              <div className={`${e.entrada} mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-20px_rgba(10,22,40,0.35)] sm:p-6`} style={retraso("0.24s")}>
                <div className="flex items-center gap-3 sm:gap-5">
                  <div>
                    <p className="font-mono text-3xl font-black leading-none sm:text-4xl">LIM</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">Lima, Perú</p>
                  </div>
                  <span className="relative block h-px flex-1 bg-slate-300" aria-hidden="true">
                    <svg className={e.avion} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" transform="rotate(90 12 12)" />
                    </svg>
                  </span>
                  <div className="text-right">
                    <p className="font-mono text-3xl font-black leading-none sm:text-4xl">MAD</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">Madrid, España</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 border-t border-dashed border-slate-300 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="mb-2 flex items-center gap-2 text-sm font-bold">
                      ¿Cuándo quieres viajar?
                      <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600">Ida y vuelta</span>
                    </p>
                    <SelectorMes />
                  </div>
                  <div className="sm:text-right">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Desde</p>
                    <p className="flex items-start leading-none text-[#e30613] sm:justify-end">
                      <span className="mt-1.5 text-xl font-extrabold">US$</span>
                      <span className="font-mono text-6xl font-black tracking-tighter">{PRECIO_ANTICIPADO}</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-500">por persona</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <BotonCotizar zona="Hero" adaptable className="w-full" />
                  <a
                    href="#cotiza"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-slate-200 px-6 text-base font-bold transition-colors hover:border-[#0a1628]"
                  >
                    Consultar fechas disponibles
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-500">Tarifa de compra anticipada, sujeta a disponibilidad y condiciones. Atención personalizada | Oficinas físicas en Lima.</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md pb-14 lg:max-w-none">
              <div className="relative h-64 overflow-hidden rounded-3xl ring-1 ring-slate-200 sm:h-80 lg:h-[460px]">
                {ESCENAS.map((s, i) => (
                  <div key={s.src} className={`${e.escena} ${e[`escena${i + 1}`]}`}>
                    <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                  </div>
                ))}
                <p className="absolute left-3 top-3 rounded bg-[#e30613] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">Compra anticipada</p>
                <p className="absolute right-3 top-3 rounded bg-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0a1628]">Madrid, España</p>
              </div>

              {/* Pase de abordar sobre la foto */}
              <div className={`${e.flota} absolute bottom-0 left-3 right-3 sm:left-6 sm:right-6 lg:right-auto lg:w-[26rem]`}>
                <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(10,22,40,0.6)] ring-1 ring-slate-200">
                  <div className="flex-1 p-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Pase de abordar</p>
                    <p className="mt-1 flex items-center gap-2 font-mono text-2xl font-black tracking-tight">
                      LIM <span className="text-[#e30613]">→</span> MAD
                    </p>
                    <dl className="mt-2 grid grid-cols-2 gap-x-4 text-xs">
                      <div>
                        <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">Tarifa</dt>
                        <dd className="font-bold">Anticipada</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">Meses</dt>
                        <dd className="font-bold">Abr–Jun 2027</dd>
                      </div>
                    </dl>
                    <div aria-hidden="true" className="mt-3 flex h-6 items-stretch gap-[2px]">
                      {BARRAS.map((w, i) => (
                        <span key={i} className="bg-[#0a1628]" style={{ width: w * 2 }} />
                      ))}
                    </div>
                  </div>
                  <div className="relative flex items-center border-l-2 border-dashed border-slate-300 bg-[#e30613] px-4 text-white">
                    <span aria-hidden="true" className="absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full bg-[#faf8f4]" />
                    <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-3.5 w-3.5 rounded-full bg-[#faf8f4]" />
                    <p className="text-center leading-none">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest opacity-90">Desde</span>
                      <span className="font-mono text-2xl font-black">US$ {PRECIO_ANTICIPADO}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cinta />
        <Hechos />
        <Comparativo />
        <LineaDeTiempo />
        <ParaQuien />
        <GuiaViaje />
        <Galeria />

        {/* Cotizador por fechas */}
        <section id="cotiza" className={`scroll-mt-20 ${SECCION} bg-white`}>
          <div className={`${CONTENEDOR} grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16`}>
            <div>
              <Encabezado codigo="06" etiqueta="Cotiza" titulo="Encuentra tu mejor opción para Madrid" texto="Cuéntanos cuándo quieres viajar y te ayudamos a cotizar." />
              <h3 className="mt-10 text-lg font-extrabold">Antes de que compres, te confirmamos por escrito</h3>
              <ul className="mt-4 divide-y divide-slate-100 border-y border-slate-100">
                {CONFIRMAMOS.map((c) => (
                  <li key={c} className="flex items-center gap-3 py-3">
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-xs font-extrabold text-white">
                      ✓
                    </span>
                    <span className="font-semibold">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_-20px_rgba(10,22,40,0.35)] sm:p-8">
              <CotizadorFechas />
            </div>
          </div>
        </section>

        <section className={`${SECCION} bg-[#faf8f4]`}>
          <div className={CONTENEDOR}>
            <Encabezado codigo="07" etiqueta="Dudas" titulo="Preguntas frecuentes" />
            <div className="mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
              {PREGUNTAS.map((p) => (
                <details key={p.q} className="group py-4">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                    {p.q}
                    <span aria-hidden="true" className="text-2xl font-light text-[#e30613] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {p.a}
                    {p.q.includes("visa") && (
                      <>
                        {" "}
                        <Link href="/viajes/requisitos-viajar-a-espana-desde-peru" className="font-bold text-[#0a1628] underline">
                          Mira los requisitos actualizados
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre: tarjeta de color plano */}
        <section className="bg-white px-5 py-14 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-slate-200 bg-[#faf8f4] p-7 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0a1628] sm:text-4xl">Asegura tu viaje a Madrid con anticipación</h2>
              <p className="mt-3 text-lg font-semibold text-slate-600">Desde US$ {PRECIO_ANTICIPADO} por persona, ida y vuelta. Abril, mayo y junio de 2027.</p>
            </div>
            <BotonCotizar zona="Cierre" adaptable className="shrink-0" />
          </div>
        </section>

        <footer className="border-t border-slate-200 py-10 text-sm text-slate-500">
          <div className={`${CONTENEDOR} flex flex-col gap-6 sm:flex-row sm:justify-between`}>
            <div>
              <p className="font-bold text-[#0a1628]">Cityland Travel · Agencia de viajes en Lima, Perú</p>
              <p className="mt-1">RUC 20614914239 · WhatsApp +51 944 103 890</p>
              <p className="mt-1">{HORARIO}</p>
            </div>
            <ul className="space-y-1">
              {OFICINAS.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <p className="flex items-start gap-4">
              <Link href="/politicas" className="inline-flex min-h-[44px] items-center underline">
                Políticas
              </Link>
              <Link href="/" className="inline-flex min-h-[44px] items-center underline">
                citylandtravel.com
              </Link>
            </p>
          </div>
        </footer>

        <BurbujaWhatsApp />
        <BarraMovil />
      </main>
    </CotizadorProvider>
  );
}
