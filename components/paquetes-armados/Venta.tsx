import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, type Circuito } from "@/lib/circuitos";
import { MESES, fechaLarga, hoyLima, partesFecha, salidasDe, type Salida } from "@/lib/salidas";
import { lineaComponentes } from "@/lib/paquetes-armados/comun";
import { portadaDe } from "@/lib/paquetes-armados/fotos";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import type { RutaVueloSEO } from "@/lib/rutas-vuelos";

// Piezas de venta de las páginas de paquetes armados, armadas como las de las agencias y aerolíneas grandes: arriba una
// portada con el precio y el botón, luego los paquetes en tarjetas anchas, y recién después la información. 28-oct-2026.

function Check({ className = "text-emerald-600" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className={`mt-0.5 shrink-0 ${className}`}>
      <path fill="currentColor" d="M8.1 14.6 3.5 10l1.4-1.4 3.2 3.2 7-7L16.5 6z" />
    </svg>
  );
}

export function proximaSalida(salidas: Salida[]): Salida | undefined {
  return [...salidas].sort((a, b) => a.fecha.localeCompare(b.fecha))[0];
}

export function diasPara(fecha: string): number {
  return Math.round((Date.parse(fecha) - Date.parse(hoyLima())) / 86_400_000);
}

const fechaCorta = (f: string) => {
  const { dia, mes, anio } = partesFecha(f);
  return `${dia} ${MESES[mes - 1].slice(0, 3)} ${anio}`;
};

function textoFaltan(f: string): string {
  const n = diasPara(f);
  return n <= 0 ? "sale hoy" : n === 1 ? "sale mañana" : `faltan ${n} días`;
}

export interface HeroVentaProps {
  foto: string;
  alt: string;
  sello: string;
  marca?: string;
  titulo: string;
  bajada: string;
  chips: string[];
  etiquetaPrecio: string;
  // Sin precio (servicios que se cotizan a medida) la caja ofrece la cotización gratis.
  precio?: number;
  detallePrecio?: string;
  proxima?: Salida;
  etiquetaFecha?: string;
  wa: string;
  boton: string;
  nota?: string;
  // Texto del botón secundario que baja al contenido (el de WhatsApp queda solo en la tarjeta).
  ancla?: string;
}

// Portada clara: título y lo que incluye a la izquierda; a la derecha la foto en tarjeta con el precio y el botón.
export function HeroVenta(p: HeroVentaProps) {
  return (
    <>
      <section className="grid items-center gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-5 sm:p-8 lg:grid-cols-[1fr_440px] lg:gap-10 lg:p-10">
        <div className="space-y-4">
          <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-[#0a1628]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {p.marca ?? "Paquete armado"} <span aria-hidden="true">·</span> {p.sello}
          </p>
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#0a1628] text-balance">{p.titulo}</h1>
          <p className="max-w-2xl text-base sm:text-lg text-slate-600">{p.bajada}</p>
          <ul className="hidden flex-wrap gap-2 sm:flex">
            {p.chips.map((x) => (
              <li key={x} className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-900">
                <Check />
                {x}
              </li>
            ))}
          </ul>
          <a
            href="#contenido"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-[#0a1628] bg-white px-6 text-base font-extrabold text-[#0a1628] hover:bg-[#0a1628] hover:text-white"
          >
            {p.ancla ?? "Ver paquetes y fechas"} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="relative aspect-[16/10] bg-slate-100">
            <Image src={p.foto} alt={p.alt} fill priority sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
            <span className="absolute right-3 top-3 rounded-full bg-rose-600 px-3 py-1 text-xs font-extrabold uppercase text-white">
              {p.precio === undefined ? "Cotización gratis" : "Cupos limitados"}
            </span>
            {p.proxima && (
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-[#0a1628]">
                {textoFaltan(p.proxima.fecha)}
              </span>
            )}
          </div>
          <div className="space-y-3 p-5">
            <div>
              <p className={p.precio === undefined ? "text-xl font-extrabold leading-snug text-[#0a1628]" : "text-sm text-slate-500"}>
                {p.etiquetaPrecio}
              </p>
              {p.precio !== undefined && <p className="text-5xl font-extrabold tracking-tight text-[#0a1628]">{formatoUSD(p.precio)}</p>}
              {p.detallePrecio && <p className="mt-1 text-sm text-slate-600 line-clamp-2">{p.detallePrecio}</p>}
            </div>
            {p.proxima && (
              <p className="rounded-xl bg-sky-50 px-3 py-2 text-sm text-[#0a1628]">
                {p.etiquetaFecha ?? "Próxima salida"}: <strong>{fechaLarga(p.proxima.fecha)}</strong>
              </p>
            )}
            <a
              href={p.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-base font-extrabold text-white shadow-lg shadow-emerald-500/30 hover:bg-[#20ba5a]"
            >
              <WhatsAppIcon size={20} />
              {p.boton}
            </a>
            <p className="flex items-start gap-1.5 text-sm text-slate-600">
              <Check />
              {p.nota ?? "Separas con el 50% y pagas el saldo antes de viajar"}
            </p>
          </div>
        </div>
      </section>
      <div id="contenido" className="scroll-mt-28" aria-hidden="true" />
    </>
  );
}

const CONFIANZA = [
  { t: "Separas con el 50%", d: "y pagas el saldo antes de viajar", i: "M4 7h16v10H4zM4 10h16" },
  { t: "Fechas fijas con cupo", d: "salidas ya organizadas por el mayorista", i: "M5 6h14v13H5zM5 10h14M9 4v4M15 4v4" },
  { t: "Te atiende una asesora", d: "por WhatsApp, de la cotización al regreso", i: "M5 5h14v10H9l-4 4z" },
  { t: "2 oficinas en Los Olivos", d: "agencia con local físico en Lima", i: "M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10zM12 9v2" },
];

export function BarraConfianza() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {CONFIANZA.map((x) => (
        <li key={x.t} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={x.i} />
            </svg>
          </span>
          <span>
            <strong className="block text-base text-[#0a1628]">{x.t}</strong>
            <span className="mt-0.5 block text-sm text-slate-600">{x.d}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

// Paquete en tarjeta ancha: foto, recorrido y qué incluye al medio, y el precio con los dos botones a la derecha.
export function TarjetaPaqueteAncha({ c, refWeb, destacado }: { c: Circuito; refWeb: string; destacado?: string }) {
  const salidas = salidasDe(c.mt);
  const prox = proximaSalida(salidas);
  const ver = `/circuitos/${c.slug}`;
  const wa = buildWaUrl({
    categoria: c.region === "europa" ? "europa" : "general",
    mensajePersonalizado: `¡Hola Cityland Travel! Quiero cotizar el paquete armado ${c.nombre} de ${c.dias} días (cód. ${c.mt}).`,
    refWeb,
  });
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-xl ${destacado ? "border-emerald-500 ring-1 ring-emerald-500" : "border-slate-200"}`}
    >
      <div className="grid md:grid-cols-[340px_1fr] lg:grid-cols-[360px_1fr_260px]">
        <Link href={ver} className="group relative block aspect-[16/10] md:aspect-auto md:min-h-[280px]">
          <Image
            src={portadaDe(c)}
            alt={`Paquete armado ${c.nombre}`}
            fill
            sizes="(min-width: 768px) 360px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#0a1628]/90 px-3 py-1 text-xs font-extrabold text-white">
            {c.dias} días · {c.noches} noches
          </span>
          {destacado && (
            <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-extrabold text-white">{destacado}</span>
          )}
        </Link>
        <div className="space-y-4 p-5 sm:p-7">
          <h3 className="text-2xl font-extrabold leading-snug text-[#0a1628]">
            <Link href={ver} className="hover:underline">
              {c.nombre}
            </Link>
          </h3>
          <p className="text-base leading-relaxed text-slate-600">
            {c.tipo === "vuelo" && <strong className="text-[#0a1628]">{c.origen} → </strong>}
            {c.ciudades.slice(0, 6).join(" → ")}
            {c.ciudades.length > 6 && ` y ${c.ciudades.length - 6} más`}
          </p>
          <ul className="flex flex-wrap gap-2">
            {lineaComponentes(c)
              .split(" + ")
              .map((x) => (
                <li key={x} className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-900">
                  <Check />
                  <span className="first-letter:uppercase">{x}</span>
                </li>
              ))}
          </ul>
          {c.tipo !== "vuelo" && <p className="text-sm font-bold text-amber-800">No incluye el boleto aéreo; te lo cotizamos aparte.</p>}
          {prox ? (
            <p className="text-base text-slate-700">
              Próxima salida: <strong>{fechaCorta(prox.fecha)}</strong>
              {salidas.length > 1 && <span className="text-slate-500"> · {salidas.length} fechas con cupo</span>}
            </p>
          ) : (
            <p className="text-base text-slate-700 line-clamp-2">Salidas: {c.salidas}</p>
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-slate-200 bg-slate-50/70 p-5 sm:p-7 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0">
          <div>
            <p className="text-sm text-slate-500">Desde, por persona en doble</p>
            <p className="text-4xl font-extrabold tracking-tight text-[#0a1628]">{formatoUSD(precioCityland(c))}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-base font-extrabold text-white hover:bg-[#20ba5a]"
            >
              <WhatsAppIcon size={16} />
              Cotizar
            </a>
            <Link
              href={ver}
              className="flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[#0a1628] px-4 text-base font-extrabold text-[#0a1628] hover:bg-[#0a1628] hover:text-white"
            >
              Ver itinerario
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ListaPaquetes({ items, refWeb }: { items: Circuito[]; refWeb: string }) {
  const minimo = Math.min(...items.map(precioCityland));
  return (
    <div className="space-y-6">
      {items.map((c) => (
        <TarjetaPaqueteAncha
          key={c.slug}
          c={c}
          refWeb={refWeb}
          destacado={items.length > 1 && precioCityland(c) === minimo ? "Precio más bajo" : undefined}
        />
      ))}
    </div>
  );
}

const PASOS = [
  { t: "Elige tu paquete y tu fecha", d: "Mira las salidas con cupo y el precio de cada una." },
  { t: "Escríbenos por WhatsApp", d: "Una asesora confirma el cupo y te manda el detalle." },
  { t: "Separa con el 50%", d: "El saldo lo pagas antes de viajar. Te mandamos todo por escrito." },
];

export function PasosSeparar() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">Separar tu viaje es así de fácil</h2>
      <ol className="grid gap-4 sm:grid-cols-3">
        {PASOS.map((x, i) => (
          <li key={x.t} className="rounded-2xl border border-slate-200 bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-lg font-extrabold text-white">{i + 1}</span>
            <strong className="mt-4 block text-lg text-[#0a1628]">{x.t}</strong>
            <span className="mt-1 block text-base text-slate-600">{x.d}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Cierre de la página: un último llamado con el precio, para el que leyó todo y no apretó el botón de arriba.
export function CtaFinal({ titulo, precio, wa, boton }: { titulo: string; precio?: number; wa: string; boton: string }) {
  return (
    <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] text-balance">{titulo}</h2>
          <p className="text-slate-600">
            {precio !== undefined ? (
              <>
                Desde <strong className="text-2xl text-[#0a1628]">{formatoUSD(precio)}</strong> por persona. Los cupos de cada salida son limitados.
              </>
            ) : (
              "Te respondemos por WhatsApp con la cotización, sin compromiso."
            )}
          </p>
        </div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 text-base font-extrabold text-white shadow-lg hover:bg-[#20ba5a]"
        >
          <WhatsAppIcon size={20} />
          {boton}
        </a>
      </div>
    </section>
  );
}

// Ruta de vuelo como tarjeta con la foto del destino y el precio desde.
export function TarjetaRutaFoto({ r }: { r: RutaVueloSEO }) {
  const foto = r.destino === "Lima" ? "/images/destinos/lima-plaza-mayor.jpg" : obtenerGaleriaPorTexto(r.destino)[0];
  return (
    <li>
      <Link
        href={`/vuelos/${r.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
      >
        <span className="relative block aspect-[16/9] bg-slate-100">
          <Image
            src={foto}
            alt={`Pasajes de ${r.origen} a ${r.destino}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </span>
        <span className="flex flex-1 items-end justify-between gap-3 p-4">
          <span className="font-extrabold leading-snug text-[#0a1628]">
            {r.origen} → {r.destino}
          </span>
          <span className="whitespace-nowrap text-xs text-slate-500">
            desde <strong className="block text-2xl text-[#0a1628]">{formatoUSD(r.precioDesdeUSD)}</strong>
          </span>
        </span>
      </Link>
    </li>
  );
}
