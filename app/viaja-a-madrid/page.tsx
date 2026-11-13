import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BarraMovil from "@/components/viaja-a-madrid/BarraMovil";
import BotonCotizar from "@/components/viaja-a-madrid/BotonCotizar";
import { CotizadorProvider } from "@/components/viaja-a-madrid/CotizadorContexto";
import CotizadorFechas from "@/components/viaja-a-madrid/CotizadorFechas";
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

const HECHOS = [
  { n: "2", t: "oficinas físicas en Lima", d: "Los Olivos, con atención en persona" },
  { n: "1", t: "asesora personal", d: "te responde por WhatsApp con tus opciones" },
  { n: "0", t: "sorpresas al pagar", d: "el precio final se confirma por escrito antes" },
];

const LINEA = [
  { cuando: "Hoy", t: "Pides tu cotización", d: "Eliges mes y cuántos viajan. Una asesora te responde con las opciones para tus fechas." },
  { cuando: "Con anticipación", t: "Compras con la tarifa anticipada", d: "Reservas con tiempo, antes de la temporada alta, y te guiamos en cada paso (tarifa sujeta a disponibilidad)." },
  { cuando: "Abril · Mayo · Junio 2027", t: "Vuelas a Madrid", d: "Tu boleto Lima–Madrid–Lima, listo. Solo te queda elegir qué caminar primero." },
];

const GALERIA = [
  { src: "/images/espana/cibeles.jpg", alt: "Fuente de Cibeles, Madrid", t: "Cibeles", clase: "row-span-2 aspect-[3/4] sm:aspect-auto" },
  { src: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", t: "Palacio Real", clase: "aspect-[4/3]" },
  { src: "/images/espana/plaza-mayor.jpg", alt: "Plaza Mayor de Madrid", t: "Plaza Mayor", clase: "aspect-[4/3]" },
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

export default function ViajaAMadridPage() {
  return (
    <CotizadorProvider>
      <main className="bg-white pb-20 text-[#0a1628] md:pb-0">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
            <Link href="/" aria-label="Cityland Travel, inicio" className="relative block h-10 w-32 shrink-0">
              <Image src="/logo-transparent.png" alt="Cityland Travel" fill priority sizes="128px" className="object-contain object-left" />
            </Link>
            <BotonCotizar zona="Encabezado" texto="Cotizar" compacto />
          </div>
        </header>

        {/* HERO: oscuro y cinematográfico. El precio es el protagonista; el mes ya se elige aquí. */}
        <section className="relative overflow-hidden bg-[#0a1628] text-white">
          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-10 lg:pb-28 lg:pt-20">
            <div className="lg:max-w-[54%]">
              <div className={`${e.entrada} flex items-center gap-4`} style={{ "--d": "0s" } as React.CSSProperties}>
                <span className="font-mono text-sm font-bold tracking-[0.3em]">LIM</span>
                <span className="relative block h-px w-24 bg-white/35 sm:w-32" aria-hidden="true">
                  <span className={e.punto} />
                </span>
                <span className="font-mono text-sm font-bold tracking-[0.3em]">MAD</span>
                <span className={`${ETIQUETA} ml-1 hidden text-white/60 sm:inline`}>Tu próximo viaje a España</span>
              </div>

              <h1
                className={`${e.entrada} mt-5 text-[3.4rem] font-extrabold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl`}
                style={{ "--d": "0.08s" } as React.CSSProperties}
              >
                Viaja a Madrid
              </h1>
              <p className={`${e.entrada} mt-3 text-xl text-white/75`} style={{ "--d": "0.16s" } as React.CSSProperties}>
                Boletos ida y vuelta desde Lima.
              </p>

              <div className={`${e.entrada} mt-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4`} style={{ "--d": "0.24s" } as React.CSSProperties}>
                <div className="leading-none">
                  <span className={`${ETIQUETA} block text-white/60`}>Desde</span>
                  <span className="mt-2 flex items-start">
                    <span className="mt-2 text-2xl font-extrabold sm:mt-4 sm:text-4xl">US$</span>
                    <span className="text-[5.5rem] font-black leading-[0.85] tracking-tighter sm:text-[8.5rem]">{PRECIO_ANTICIPADO}</span>
                  </span>
                </div>
                <p className="text-sm leading-snug text-white/70 sm:max-w-[12.5rem] sm:pb-4">por persona · ida y vuelta Lima–Madrid–Lima</p>
              </div>
              <p className={`${e.entrada} mt-3 text-xs text-white/55`} style={{ "--d": "0.28s" } as React.CSSProperties}>
                Tarifa de compra anticipada, sujeta a disponibilidad y condiciones.
              </p>

              <div className={`${e.entrada} mt-7`} style={{ "--d": "0.34s" } as React.CSSProperties}>
                <p className="mb-2.5 text-sm font-bold text-white/80">¿Cuándo quieres viajar?</p>
                <SelectorMes />
              </div>

              <p className={`${e.entrada} mt-6 hidden max-w-md text-base leading-relaxed text-white/70 sm:block`} style={{ "--d": "0.4s" } as React.CSSProperties}>
                Compra con anticipación y viaja en abril, mayo o junio de 2027. Consulta las opciones disponibles para tus fechas y recibe asesoría personalizada.
              </p>

              <div className={`${e.entrada} mt-6 flex flex-col gap-3 sm:flex-row sm:items-center`} style={{ "--d": "0.46s" } as React.CSSProperties}>
                <BotonCotizar zona="Hero" adaptable />
                <a
                  href="#cotiza"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-xl border border-white/30 px-6 text-base font-bold transition-colors hover:border-white hover:bg-white/10"
                >
                  Consultar fechas disponibles
                </a>
              </div>
              <p className={`${e.entrada} mt-4 text-sm font-semibold text-white/65`} style={{ "--d": "0.52s" } as React.CSSProperties}>
                Atención personalizada | Oficinas físicas en Lima
              </p>
            </div>
          </div>

          <div className="relative mt-2 h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[48%]">
            <Image
              src="/images/espana/gran-via-metropolis.jpg"
              alt="Gran Vía y el edificio Metrópolis, Madrid"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className={`${e.foto} object-cover`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/15 to-transparent lg:-left-1 lg:bg-gradient-to-r lg:via-[#0a1628]/25" aria-hidden="true" />
            <p className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0a1628]">Gran Vía, Madrid</p>
          </div>
        </section>

        {/* Hechos: confianza en tres cifras que se pueden comprobar */}
        <section className="border-b border-slate-200">
          <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {HECHOS.map((h) => (
              <div key={h.t} className="flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0">
                <span className="text-5xl font-black tracking-tighter text-[#e30613]">{h.n}</span>
                <p className="text-sm leading-snug text-slate-600">
                  <strong className="block text-base text-[#0a1628]">{h.t}</strong>
                  {h.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Por qué comprar con anticipación: línea de tiempo */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <p className={`${ETIQUETA} text-[#e30613]`}>Compra con anticipación</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Compra hoy. Viaja en primavera.</h2>
          <p className="mt-4 max-w-xl text-lg text-slate-600">Las tarifas suelen subir a medida que se acerca la fecha de viaje. Por eso esta tarifa es para quien se adelanta.</p>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {LINEA.map((p, i) => (
              <li key={p.t} className="relative border-l-2 border-slate-200 pl-7 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full md:-top-[7px] md:left-0 ${i === 2 ? "bg-[#e30613]" : "bg-[#0a1628]"}`}
                />
                <p className={`${ETIQUETA} text-slate-500`}>{p.cuando}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{p.t}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Deseo: Madrid, en fotos */}
        <section className="bg-slate-50 px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Madrid te espera en abril, mayo y junio</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">Terrazas, plazas y días más largos: los meses para caminar Madrid sin apuro.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {GALERIA.map((g) => (
                <figure key={g.src} className={`relative overflow-hidden rounded-2xl bg-slate-200 ${g.clase}`}>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 40vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">{g.t}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10">
              <BotonCotizar zona="Galería" adaptable />
            </div>
          </div>
        </section>

        {/* Cotizador por fechas */}
        <section id="cotiza" className="scroll-mt-20 mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className={`${ETIQUETA} text-[#e30613]`}>Cotiza según tus fechas</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">Encuentra tu mejor opción para Madrid</h2>
            <p className="mt-4 text-lg text-slate-600">Cuéntanos cuándo quieres viajar y te ayudamos a cotizar.</p>
            <h3 className="mt-10 text-lg font-extrabold">Antes de que compres, te confirmamos por escrito</h3>
            <ul className="mt-4 space-y-3">
              {CONFIRMAMOS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0a1628] text-xs font-extrabold text-white">
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
        </section>

        <section className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:py-24">
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

        {/* Cierre */}
        <section className="bg-[#0a1628] px-5 py-16 text-white sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Asegura tu viaje a Madrid con anticipación</h2>
              <p className="mt-4 text-lg text-white/70">Desde US$ {PRECIO_ANTICIPADO} por persona, ida y vuelta. Abril, mayo y junio de 2027.</p>
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

        <BarraMovil />
      </main>
    </CotizadorProvider>
  );
}
