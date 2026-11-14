import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BurbujaWhatsApp from "@/components/viaja-a-madrid/BurbujaWhatsApp";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import CotizadorFechas from "@/components/viaja-a-madrid/CotizadorFechas";
import { Cinta, Comparativo, Galeria, GuiaViaje, Hechos, LineaDeTiempo, ParaQuien } from "@/components/viaja-a-madrid/Secciones";
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
  { src: "/images/espana/gran-via-metropolis.jpg", alt: "Gran Vía y el edificio Metrópolis, Madrid", t: "Gran Vía, Madrid" },
  { src: "/images/espana/cibeles.jpg", alt: "Fuente de Cibeles, Madrid", t: "Cibeles, Madrid" },
  { src: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", t: "Palacio Real, Madrid" },
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

const ETIQUETA = "text-xs font-bold uppercase tracking-[0.22em]";
const retraso = (s: string) => ({ "--d": s }) as React.CSSProperties;

export default function ViajaAMadridPage() {
  return (
    <CotizadorProvider>
      <main className="bg-white pb-20 text-[#0a1628] md:pb-0">
        <div className="bg-[#f5b83d] px-4 py-2 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#3d2c00] sm:text-sm">
          Tarifa de compra anticipada · Abril, mayo y junio 2027
        </div>

        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
            <Link href="/" aria-label="Cityland Travel, inicio" className="relative block h-10 w-32 shrink-0">
              <Image src="/logo-transparent.png" alt="Cityland Travel" fill priority sizes="128px" className="object-contain object-left" />
            </Link>
            <BotonCotizar zona="Encabezado" texto="Cotizar" compacto />
          </div>
        </header>

        {/* HERO claro: fondo con manchas de color, precio en degradado y una sola foto de Madrid en tarjeta. */}
        <section className="relative overflow-hidden bg-[#fff8e8]">
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-16">
            <div>
              <div className={`${e.entrada} flex items-center gap-4`} style={retraso("0s")}>
                <span className="font-mono text-sm font-bold tracking-[0.3em]">LIM</span>
                <span className="relative block h-px w-24 bg-[#0a1628]/30 sm:w-32" aria-hidden="true">
                  <svg className={e.avion} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" transform="rotate(90 12 12)" />
                  </svg>
                </span>
                <span className="font-mono text-sm font-bold tracking-[0.3em]">MAD</span>
                <span className={`${ETIQUETA} ml-1 hidden text-slate-500 sm:inline`}>Tu próximo viaje a España</span>
              </div>

              <h1 className={`${e.entrada} mt-4 text-5xl font-extrabold leading-[0.98] tracking-tighter sm:text-6xl lg:text-7xl`} style={retraso("0.08s")}>
                Viaja a Madrid
              </h1>
              <p className={`${e.entrada} mt-2 text-xl text-slate-600`} style={retraso("0.16s")}>
                Boletos ida y vuelta desde Lima.
              </p>

              <div className={`${e.entrada} mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4`} style={retraso("0.24s")}>
                <div className="leading-none">
                  <span className={`${ETIQUETA} block text-[#c40510]`}>Desde</span>
                  <span className="mt-2 flex items-start text-[#e30613]">
                    <span className="mt-2 text-2xl font-extrabold sm:mt-3 sm:text-3xl">US$</span>
                    <span className="text-[4.5rem] font-black leading-[0.85] tracking-tighter sm:text-[6.5rem]">{PRECIO_ANTICIPADO}</span>
                  </span>
                </div>
                <p className="text-sm leading-snug text-slate-600 sm:max-w-[12.5rem] sm:pb-3">por persona · ida y vuelta Lima–Madrid–Lima</p>
              </div>
              <p className={`${e.entrada} mt-3 text-xs text-slate-500`} style={retraso("0.28s")}>
                Tarifa de compra anticipada, sujeta a disponibilidad y condiciones.
              </p>

              <div className={`${e.entrada} mt-6`} style={retraso("0.34s")}>
                <p className="mb-2.5 text-sm font-bold">¿Cuándo quieres viajar?</p>
                <SelectorMes />
              </div>

              <div className={`${e.entrada} mt-6 flex flex-col gap-3 sm:flex-row sm:items-center`} style={retraso("0.46s")}>
                <BotonCotizar zona="Hero" adaptable />
                <a
                  href="#cotiza"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-xl border-2 border-[#0a1628]/20 bg-white px-6 text-base font-bold transition-colors hover:border-[#0a1628]"
                >
                  Consultar fechas disponibles
                </a>
              </div>
              <p className={`${e.entrada} mt-4 text-sm font-semibold text-slate-600`} style={retraso("0.52s")}>
                Atención personalizada | Oficinas físicas en Lima
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md pb-10 lg:max-w-none">
              <div className="relative h-60 overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(10,22,40,0.5)] ring-4 ring-white sm:h-72 lg:h-[430px]">
                {ESCENAS.map((s, i) => (
                  <div key={s.src} className={`${e.escena} ${e[`escena${i + 1}`]}`}>
                    <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                  </div>
                ))}
                <p className="absolute left-3 top-3 rounded-full bg-[#e30613] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">Compra anticipada</p>
                <p className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0a1628]">Madrid, España</p>
              </div>

              {/* Pase de abordar: el precio como un boleto que flota sobre la foto */}
              <div style={{ "--giro": "-3deg" } as React.CSSProperties} className={`${e.flota} absolute -bottom-0 left-2 right-2 sm:left-6 sm:right-auto sm:w-[22rem]`}>
                <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(10,22,40,0.6)] ring-1 ring-slate-200">
                  <div className="flex-1 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Pase de abordar</p>
                    <p className="mt-1 flex items-center gap-2 text-2xl font-black tracking-tight">
                      LIM <span className="text-[#e30613]">✈</span> MAD
                    </p>
                    <p className="text-xs font-semibold text-slate-500">Ida y vuelta · Abr–Jun 2027</p>
                  </div>
                  <div className="relative flex items-center border-l-2 border-dashed border-slate-300 bg-[#e30613] px-4 text-white">
                    <span aria-hidden="true" className="absolute -left-2 -top-2 h-3.5 w-3.5 rounded-full bg-[#fff8e8]" />
                    <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-3.5 w-3.5 rounded-full bg-[#fff8e8]" />
                    <p className="text-center leading-none">
                      <span className="block text-[10px] font-bold uppercase tracking-widest opacity-90">Desde</span>
                      <span className="text-2xl font-black">US$ {PRECIO_ANTICIPADO}</span>
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

        {/* Cotizador por fechas, sobre fondo oscuro para que la tarjeta blanca destaque */}
        <section id="cotiza" className="scroll-mt-20 bg-emerald-50 px-5 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div>
              <p className={`${ETIQUETA} text-[#059669]`}>Cotiza según tus fechas</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Encuentra tu mejor opción para Madrid</h2>
              <p className="mt-4 text-lg text-slate-600">Cuéntanos cuándo quieres viajar y te ayudamos a cotizar.</p>
              <h3 className="mt-10 text-lg font-extrabold">Antes de que compres, te confirmamos por escrito</h3>
              <ul className="mt-4 space-y-3">
                {CONFIRMAMOS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669] text-xs font-extrabold text-white">
                      ✓
                    </span>
                    <span className="font-semibold">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(10,22,40,0.35)] sm:p-9">
              <CotizadorFechas />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Preguntas frecuentes</h2>
            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
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

        {/* Cierre: tarjeta de color vivo sobre fondo claro */}
        <section className="bg-white px-5 py-14 sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl bg-[#fcd34d] p-7 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#3d1d00] sm:text-5xl">Asegura tu viaje a Madrid con anticipación</h2>
              <p className="mt-3 text-lg font-semibold text-[#5a2e00]">Desde US$ {PRECIO_ANTICIPADO} por persona, ida y vuelta. Abril, mayo y junio de 2027.</p>
            </div>
            <BotonCotizar zona="Cierre" adaptable className="shrink-0" />
          </div>
        </section>

        <footer className="px-5 py-10 text-sm text-slate-500">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:justify-between">
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
            <p>
              <Link href="/politicas" className="underline">
                Políticas
              </Link>
              {" · "}
              <Link href="/" className="underline">
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
