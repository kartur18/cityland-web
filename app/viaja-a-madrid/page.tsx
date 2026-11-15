import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import Buscador from "@/components/viaja-a-madrid/Buscador";
import BurbujaWhatsApp from "@/components/viaja-a-madrid/BurbujaWhatsApp";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import PrecioAnimado from "@/components/viaja-a-madrid/PrecioAnimado";
import { CONTENEDOR, Comparativo, Encabezado, Meses, Pasos, Requisitos } from "@/components/viaja-a-madrid/Secciones";
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

const PREGUNTAS = [
  { q: "¿El precio de US$ 999 es por persona?", a: "Sí. Es por persona, ida y vuelta Lima–Madrid–Lima. Es una tarifa «desde», sujeta a disponibilidad: el precio final depende de tus fechas." },
  { q: "¿Por qué solo abril, mayo y junio de 2027?", a: "La tarifa de compra anticipada es para esos tres meses. Para otras fechas, escríbenos y cotizamos." },
  { q: "¿Incluye equipaje? ¿Puedo cambiar o devolver el boleto?", a: "Depende de la aerolínea y de la tarifa. Te lo confirmamos antes de que pagues." },
  { q: "¿Necesito visa para viajar a España?", a: "Para turismo, los peruanos pueden viajar a España sin visa hasta 90 días. En el aeropuerto pueden pedirte documentos y dinero para tu estadía." },
];

const NAV = [
  { href: "#meses", t: "Elige tu mes" },
  { href: "#pasos", t: "Cómo reservar" },
  { href: "#requisitos", t: "Requisitos" },
  { href: "#oficinas", t: "Oficinas" },
];

const retraso = (s: string) => ({ "--d": s }) as React.CSSProperties;
const AHORRO = PRECIO_OTRAS_FECHAS - PRECIO_ANTICIPADO;

export default function ViajaAMadridPage() {
  return (
    <CotizadorProvider>
      <main className="bg-white pb-20 text-[#0a1628] md:pb-0">
        <div className="bg-[#0a1628] px-4 py-2 text-xs font-semibold text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <p>Atención por WhatsApp · {HORARIO}</p>
            <p className="hidden md:block">+51 944 103 890</p>
          </div>
        </div>

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className={`${CONTENEDOR} flex h-[68px] items-center justify-between gap-4 md:h-[76px]`}>
            <Link href="/" aria-label="Cityland Travel, inicio" className="block shrink-0">
              <Image src="/logo-transparent.png" alt="Cityland Travel, agencia de viajes" width={100} height={58} priority className="h-[50px] w-auto md:h-[58px]" />
            </Link>
            <nav aria-label="Secciones" className="hidden gap-7 text-[14.5px] font-semibold md:flex">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="border-b-2 border-transparent py-1.5 transition-colors hover:border-[#2563eb]">
                  {n.t}
                </a>
              ))}
            </nav>
            <BotonCotizar zona="Encabezado" texto="WhatsApp" compacto />
          </div>
        </header>

        {/* PORTADA: el gancho a la izquierda y la Puerta de Alcalá a la derecha; el buscador se superpone al borde inferior. */}
        <section className="relative overflow-hidden bg-[#eaf1ff] pb-16 pt-6 md:pb-20 md:pt-10">
          <svg className={e.jet} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.500z" transform="rotate(90 12 12)" />
          </svg>
          <div className={`${CONTENEDOR} grid items-center gap-7 md:grid-cols-[1fr_1.05fr] md:gap-10`}>
            <div>
              <p className={`${e.entrada} inline-block rounded-lg bg-[#e30613] px-3 py-1.5 text-[13px] font-bold text-white shadow-[0_6px_14px_-6px_rgba(227,6,19,0.6)]`} style={retraso("0s")}>
                Compra anticipada
              </p>
              <h1 className={`${e.entrada} mt-3.5 text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.02] tracking-tighter`} style={retraso("0.08s")}>
                <span className="block">Viaja Lima a Madrid</span>
                <span className="block text-[#e30613]">ida y vuelta</span>
              </h1>
              <p className={`${e.entrada} mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1`} style={retraso("0.16s")}>
                <small className="text-[15px] font-bold">Desde US$</small>
                <b className="text-[clamp(52px,8vw,76px)] font-extrabold leading-none tracking-tighter">
                  <PrecioAnimado />
                </b>
                <span className="text-sm font-semibold text-slate-600">por persona · viaja abril a junio 2027</span>
              </p>
            </div>

            <div className={`${e.entrada} relative`} style={retraso("0.2s")}>
              <div className="relative h-[240px] overflow-hidden rounded-3xl bg-slate-300 shadow-[0_34px_60px_-32px_rgba(10,22,40,0.6)] md:h-[370px]">
                <div className={`${e.zoom} absolute inset-0`}>
                  <Image src="/images/espana/puerta-de-alcala.jpg" alt="Puerta de Alcalá, Madrid" fill priority sizes="(min-width: 768px) 50vw, 92vw" className="object-cover object-[50%_45%]" />
                </div>
                <span className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 text-[13px] font-bold">Puerta de Alcalá, Madrid</span>
              </div>
              <div
                aria-hidden="true"
                className={`${e.sello} absolute -right-2 -top-5 z-[2] grid h-[96px] w-[96px] place-items-center rounded-full bg-[#e30613] text-center font-extrabold leading-[1.05] text-white shadow-[0_18px_30px_-12px_rgba(227,6,19,0.7)] md:-right-5 md:h-[112px] md:w-[112px]`}
              >
                <span>
                  <small className="block text-[11px] font-bold">Ahorras</small>
                  <b className="text-xl tracking-tight md:text-2xl">US$ {AHORRO}</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className={CONTENEDOR}>
          <Buscador />
        </div>

        <Meses />
        <Comparativo />
        <Pasos />
        <Requisitos />

        <section className="py-12 sm:py-16">
          <div className={CONTENEDOR}>
            <Encabezado etiqueta="Dudas" titulo="Preguntas frecuentes" />
            <div className="mt-6 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
              {PREGUNTAS.map((p) => (
                <details key={p.q} className="group">
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-bold">
                    {p.q}
                    <span aria-hidden="true" className="text-2xl font-light text-[#2563eb] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 leading-relaxed text-slate-600">
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

        {/* Cierre: bloque azul con el precio y el botón */}
        <section className="px-5 pb-12 sm:pb-16">
          <div className="relative mx-auto grid max-w-6xl items-center gap-5 overflow-hidden rounded-3xl bg-[#2563eb] p-6 text-white shadow-[0_30px_50px_-30px_rgba(37,99,235,0.8)] md:grid-cols-[1fr_auto] md:p-9">
            <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border-[34px] border-white/10" />
            <div className="relative">
              <h2 className="max-w-xl text-balance text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-3xl">Tu tarifa de compra anticipada te espera</h2>
              <p className="mt-2 text-base font-medium text-white/90">Elige tu mes y cuántos viajan: te respondemos por WhatsApp con las opciones.</p>
            </div>
            <BotonCotizar zona="Cierre" texto="Cotizar por WhatsApp" claro className="relative shrink-0" />
          </div>
        </section>

        <footer id="oficinas" className="scroll-mt-20 border-t border-slate-200 py-10 text-sm text-slate-500">
          <div className={`${CONTENEDOR} flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between`}>
            <div className="flex items-center gap-4">
              <Image src="/logo-transparent.png" alt="Cityland Travel" width={110} height={64} className="h-16 w-auto" />
              <div>
                <p className="font-bold text-[#0a1628]">Cityland Travel · Agencia de viajes en Lima, Perú</p>
                <p className="mt-1">RUC 20614914239 · WhatsApp +51 944 103 890</p>
                <p className="mt-1">{HORARIO}</p>
              </div>
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
