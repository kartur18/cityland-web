import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import BurbujaWhatsApp from "@/components/viaja-a-madrid/BurbujaWhatsApp";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import CotizadorFechas from "@/components/viaja-a-madrid/CotizadorFechas";
import { CONTENEDOR, Comparativo, Encabezado, Galeria, GuiaViaje, Hechos, LineaDeTiempo, ParaQuien, SECCION } from "@/components/viaja-a-madrid/Secciones";
import Icono from "@/components/viaja-a-madrid/Iconos";
import SelectorMes from "@/components/viaja-a-madrid/SelectorMes";
import { HORARIO, OFICINAS, PRECIO_ANTICIPADO, PRECIO_OTRAS_FECHAS } from "@/lib/viaja-a-madrid";
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
  "Aerolínea y escalas de cada opción",
  "Equipaje que incluye la tarifa",
  "Precio final por persona, con impuestos",
  "Horarios de ida y de vuelta",
  "Condiciones de cambio y devolución",
];

const PREGUNTAS = [
  { q: "¿El precio de US$ 999 es por persona?", a: "Sí. Es por persona, ida y vuelta Lima–Madrid–Lima. Es una tarifa «desde», sujeta a disponibilidad: el precio final depende de tus fechas." },
  { q: "¿Por qué solo abril, mayo y junio de 2027?", a: "La tarifa de compra anticipada es para esos tres meses. Para otras fechas, escríbenos y cotizamos." },
  { q: "¿Incluye equipaje?", a: "Depende de la aerolínea y de la tarifa. Te lo confirmamos antes de que pagues." },
  { q: "¿Puedo cambiar o devolver mi boleto?", a: "Depende de la tarifa y de la aerolínea. Te las decimos antes de comprar." },
  { q: "¿Necesito visa para viajar a España?", a: "Para turismo, los peruanos pueden viajar a España sin visa hasta 90 días. En el aeropuerto pueden pedirte documentos y dinero para tu estadía." },
  { q: "¿Cómo compro?", a: "Cotiza por WhatsApp, elige tu opción y reserva con nuestro equipo." },
];

const retraso = (s: string) => ({ "--d": s }) as React.CSSProperties;

export default function ViajaAMadridPage() {
  return (
    <CotizadorProvider>
      <main className="bg-white pb-20 text-[#0a1628] md:pb-0">
        <div className="bg-[#e30613] px-4 py-2.5 text-center text-xs font-semibold text-white sm:text-sm">
          Oferta Lima–Madrid ida y vuelta desde US$ 999 · Viaja abril, mayo o junio 2027 ·{" "}
          <a href="#cotiza" className="font-bold underline underline-offset-4">
            Cotiza ahora
          </a>
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

        {/* HERO compacto: lo principal (gancho, precio, mes y botón) se ve de entrada; la foto es un apoyo, no el protagonista. */}
        <section className="bg-[#faf8f4]">
          <div className={`${CONTENEDOR} grid items-center gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-12`}>
            <div>
              <p className={`${e.entrada} inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0a1628] ring-1 ring-slate-200`} style={retraso("0s")}>
                <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                Oferta de compra anticipada
              </p>
              <h1 className={`${e.entrada} mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl`} style={retraso("0.08s")}>
                Madrid ida y vuelta desde <span className="text-[#e30613]">US$ {PRECIO_ANTICIPADO}</span>
              </h1>
              <p className={`${e.entrada} mt-3 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg`} style={retraso("0.16s")}>
                Para viajar en abril, mayo o junio de 2027. En otras fechas la tarifa parte desde US$ {PRECIO_OTRAS_FECHAS.toLocaleString("en-US")}: aquí ahorras <strong className="text-[#0a1628]">US$ {PRECIO_OTRAS_FECHAS - PRECIO_ANTICIPADO}</strong> por persona.
              </p>

              <div className={`${e.entrada} mt-5 max-w-lg rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(10,22,40,0.05),0_20px_50px_-28px_rgba(10,22,40,0.3)] ring-1 ring-slate-200/70`} style={retraso("0.24s")}>
                <p className="mb-2 text-sm font-semibold">Elige tu mes de salida</p>
                <SelectorMes />
                <BotonCotizar zona="Hero" adaptable className="mt-3 w-full" />
                <p className="mt-2.5 text-center text-xs text-slate-500">Cotizar es gratis · Sin DNI ni pasaporte</p>
              </div>
              <p className={`${e.entrada} mt-3 max-w-lg text-xs leading-relaxed text-slate-400`} style={retraso("0.32s")}>
                Tarifa «desde» por persona, ida y vuelta, sujeta a disponibilidad y condiciones.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative h-52 overflow-hidden rounded-3xl bg-slate-200 shadow-[0_24px_60px_-30px_rgba(10,22,40,0.45)] sm:h-72 lg:h-[380px]">
                {ESCENAS.map((s, i) => (
                  <div key={s.src} className={`${e.escena} ${e[`escena${i + 1}`]}`}>
                    <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="(min-width: 1024px) 38vw, 90vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="absolute right-3 top-3 rounded-full bg-[#e30613] px-3.5 py-1.5 text-sm font-bold text-white shadow-lg">Ahorras US$ {PRECIO_OTRAS_FECHAS - PRECIO_ANTICIPADO}</p>
              <div className={`${e.flota} absolute -bottom-4 left-4 flex items-center gap-2.5 rounded-xl bg-white p-2.5 pr-4 shadow-[0_16px_40px_-20px_rgba(10,22,40,0.5)] ring-1 ring-slate-200/70 lg:-left-6`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e30613] text-white">
                  <Icono nombre="avion" className="h-5 w-5" />
                </span>
                <p className="leading-tight">
                  <strong className="block text-sm text-[#0a1628]">Lima → Madrid</strong>
                  <span className="text-xs text-slate-500">Ida y vuelta</span>
                </p>
              </div>
            </div>
          </div>
        </section>

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
              <Encabezado etiqueta="Cotiza" titulo="Cotiza tu viaje a Madrid" texto="Elige mes y cuántos viajan. Se abre WhatsApp con tu mensaje listo." />
              <h3 className="mt-10 text-lg font-extrabold">Tu cotización incluye</h3>
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
            <Encabezado etiqueta="Dudas" titulo="Preguntas frecuentes" />
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
              <h2 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0a1628] sm:text-4xl">Asegura hoy tu tarifa de US$ {PRECIO_ANTICIPADO}</h2>
              <p className="mt-3 text-lg font-semibold text-slate-600">Ida y vuelta Lima–Madrid por persona. Viaja en abril, mayo o junio de 2027.</p>
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
