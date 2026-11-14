import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import Buscador from "@/components/viaja-a-madrid/Buscador";
import BurbujaWhatsApp from "@/components/viaja-a-madrid/BurbujaWhatsApp";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import PrecioAnimado from "@/components/viaja-a-madrid/PrecioAnimado";
import { Beneficios, CONTENEDOR, Comparativo, Destino, Encabezado, Pasos, Requisitos } from "@/components/viaja-a-madrid/Secciones";
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
  { q: "¿Incluye equipaje?", a: "Depende de la aerolínea y de la tarifa. Te lo confirmamos antes de que pagues." },
  { q: "¿Puedo cambiar o devolver mi boleto?", a: "Depende de la tarifa y de la aerolínea. Te las decimos antes de comprar." },
  { q: "¿Necesito visa para viajar a España?", a: "Para turismo, los peruanos pueden viajar a España sin visa hasta 90 días. En el aeropuerto pueden pedirte documentos y dinero para tu estadía." },
  { q: "¿Cómo compro?", a: "Cotiza por WhatsApp, elige tu opción y reserva con nuestro equipo." },
];

const NAV = [
  { href: "#destino", t: "Destino" },
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
            <p>Oferta Lima–Madrid ida y vuelta desde US$ {PRECIO_ANTICIPADO} · Viaja abril, mayo o junio 2027</p>
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

        {/* PORTADA: foto amplia con zoom lento, tarjeta con el gancho y el buscador que se superpone, como en las web de aerolíneas. */}
        <section className="relative h-[440px] overflow-hidden bg-slate-300 md:h-[500px]">
          <div className={`${e.zoom} absolute -inset-[4%]`}>
            <Image src="/images/espana/cibeles.jpg" alt="Fuente de Cibeles, Madrid" fill priority sizes="100vw" className="object-cover object-[50%_40%]" />
          </div>
          <svg className={e.jet} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" transform="rotate(90 12 12)" />
          </svg>
          <div
            aria-hidden="true"
            className={`${e.sello} absolute bottom-[150px] right-8 z-[2] hidden h-[118px] w-[118px] place-items-center rounded-full bg-[#e30613] text-center font-extrabold leading-[1.05] text-white shadow-[0_18px_30px_-12px_rgba(227,6,19,0.7)] md:grid`}
          >
            <span>
              <small className="block text-xs font-bold">Ahorras</small>
              <b className="text-2xl tracking-tight">US$ {AHORRO}</b>
            </span>
          </div>

          <div className={`${CONTENEDOR} relative pt-7 md:pt-[70px]`}>
            <div className="max-w-[640px] rounded-[20px] bg-white p-5 shadow-[0_30px_60px_-28px_rgba(10,22,40,0.6)] md:px-6 md:pb-6">
              <p className={`${e.entrada} inline-block rounded-lg bg-[#e30613] px-3 py-1.5 text-[13px] font-bold shadow-[0_6px_14px_-6px_rgba(227,6,19,0.6)] text-white`} style={retraso("0s")}>
                Compra anticipada
              </p>
              <h1 className={`${e.entrada} mt-3.5 text-[clamp(32px,6vw,56px)] font-extrabold leading-[1.02] tracking-tighter`} style={retraso("0.08s")}>
                <span className="block">Viaja Lima a Madrid</span>
                <span className="block text-[#e30613]">ida y vuelta</span>
              </h1>
              <p className={`${e.entrada} mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1`} style={retraso("0.16s")}>
                <small className="text-[15px] font-bold">Desde US$</small>
                <b className="text-[clamp(44px,9vw,76px)] font-extrabold leading-none tracking-tighter">
                  <PrecioAnimado />
                </b>
                <span className="text-sm font-semibold text-slate-500">por persona · viaja abril a junio 2027</span>
              </p>
            </div>
          </div>
        </section>

        <div className={CONTENEDOR}>
          <Buscador />
        </div>

        <Destino />
        <Beneficios />
        <Comparativo />
        <Pasos />
        <Requisitos />

        <section className="py-14 sm:py-[72px]">
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
        <section className="px-5 pb-14 sm:pb-[72px]">
          <div className="relative mx-auto grid max-w-6xl items-center gap-5 overflow-hidden rounded-[26px] bg-[#2563eb] p-7 text-white shadow-[0_30px_50px_-30px_rgba(37,99,235,0.8)] md:grid-cols-[1fr_auto] md:p-12">
            <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border-[34px] border-white/10" />
            <div className="relative">
              <h2 className="max-w-xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">Asegura hoy tu tarifa de US$ {PRECIO_ANTICIPADO}</h2>
              <p className="mt-3 text-lg font-medium text-white/90">Ida y vuelta Lima–Madrid por persona. Viaja en abril, mayo o junio de 2027.</p>
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
