import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, type Circuito } from "@/lib/circuitos";
import { MESES, fechaLarga, hoyLima, partesFecha, salidasDe, type Salida } from "@/lib/salidas";
import { lineaComponentes } from "@/lib/paquetes-armados/comun";
import { portadaDe } from "@/lib/paquetes-armados/fotos";

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
  precio: number;
  detallePrecio?: string;
  proxima?: Salida;
  etiquetaFecha?: string;
  wa: string;
  boton: string;
}

// Portada: una sola foto grande con el título, lo que incluye y, al lado, el precio con el botón para separar.
export function HeroVenta(p: HeroVentaProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0a1628]">
      <Image src={p.foto} alt={p.alt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/75 to-[#0a1628]/20 lg:bg-gradient-to-r lg:from-[#0a1628]/95 lg:via-[#0a1628]/70 lg:to-[#0a1628]/10" />
      <div className="relative grid gap-6 p-5 pt-28 sm:p-8 sm:pt-56 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-10 lg:p-10 lg:pt-24 lg:min-h-[480px]">
        <div className="space-y-4 text-white">
          <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#0a1628]">
            {p.marca ?? "Paquete armado"} <span aria-hidden="true">·</span> {p.sello}
          </p>
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-balance drop-shadow">{p.titulo}</h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/90 line-clamp-3 sm:line-clamp-none">{p.bajada}</p>
          <ul className="hidden flex-wrap gap-2 sm:flex">
            {p.chips.map((x) => (
              <li key={x} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold backdrop-blur">
                <Check className="text-emerald-300" />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-2xl space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-amber-900">Cupos limitados</span>
            {p.proxima && <span className="text-xs font-bold text-rose-700">{textoFaltan(p.proxima.fecha)}</span>}
          </div>
          <div>
            <p className="text-sm text-slate-500">{p.etiquetaPrecio}</p>
            <p className="text-5xl font-extrabold tracking-tight text-[#0a1628]">{formatoUSD(p.precio)}</p>
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
            Separas con el 50% y pagas el saldo antes de viajar
          </p>
        </div>
      </div>
    </section>
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
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {CONFIANZA.map((x) => (
        <li key={x.t} className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-3 sm:items-start sm:gap-3 sm:p-4">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
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
            <strong className="block text-[13px] leading-tight text-[#0a1628] sm:text-sm">{x.t}</strong>
            <span className="hidden text-xs text-slate-600 sm:block">{x.d}</span>
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
      <div className="grid md:grid-cols-[300px_1fr_230px]">
        <Link href={ver} className="group relative block aspect-[16/10] md:aspect-auto md:min-h-[230px]">
          <Image
            src={portadaDe(c)}
            alt={`Paquete armado ${c.nombre}`}
            fill
            sizes="(min-width: 768px) 300px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#0a1628]/90 px-3 py-1 text-xs font-extrabold text-white">
            {c.dias} días · {c.noches} noches
          </span>
          {destacado && (
            <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-extrabold text-white">{destacado}</span>
          )}
        </Link>
        <div className="space-y-3 p-4 sm:p-5">
          <h3 className="text-xl font-extrabold leading-snug text-[#0a1628]">
            <Link href={ver} className="hover:underline">
              {c.nombre}
            </Link>
          </h3>
          <p className="text-sm text-slate-600">
            {c.tipo === "vuelo" && <strong className="text-[#0a1628]">{c.origen} → </strong>}
            {c.ciudades.slice(0, 6).join(" → ")}
            {c.ciudades.length > 6 && ` y ${c.ciudades.length - 6} más`}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {lineaComponentes(c)
              .split(" + ")
              .map((x) => (
                <li key={x} className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-900">
                  <Check />
                  <span className="first-letter:uppercase">{x}</span>
                </li>
              ))}
          </ul>
          {c.tipo !== "vuelo" && <p className="text-xs font-bold text-amber-800">No incluye el boleto aéreo; te lo cotizamos aparte.</p>}
          {prox ? (
            <p className="text-sm text-slate-700">
              Próxima salida: <strong>{fechaCorta(prox.fecha)}</strong>
              {salidas.length > 1 && <span className="text-slate-500"> · {salidas.length} fechas con cupo</span>}
            </p>
          ) : (
            <p className="text-sm text-slate-700 line-clamp-2">Salidas: {c.salidas}</p>
          )}
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-slate-200 bg-slate-50/70 p-4 sm:p-5 md:border-l md:border-t-0">
          <div>
            <p className="text-xs text-slate-500">Desde, por persona en doble</p>
            <p className="text-3xl font-extrabold tracking-tight text-[#0a1628]">{formatoUSD(precioCityland(c))}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 text-sm font-extrabold text-white hover:bg-[#20ba5a]"
            >
              <WhatsAppIcon size={16} />
              Cotizar
            </a>
            <Link
              href={ver}
              className="flex min-h-[44px] items-center justify-center rounded-xl border-2 border-[#0a1628] px-3 text-sm font-extrabold text-[#0a1628] hover:bg-[#0a1628] hover:text-white"
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
    <div className="space-y-4">
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
      <ol className="grid gap-3 sm:grid-cols-3">
        {PASOS.map((x, i) => (
          <li key={x.t} className="rounded-2xl border border-slate-200 bg-white p-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a1628] text-sm font-extrabold text-white">{i + 1}</span>
            <strong className="mt-3 block text-[#0a1628]">{x.t}</strong>
            <span className="text-sm text-slate-600">{x.d}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Cierre de la página: un último llamado con el precio, para el que leyó todo y no apretó el botón de arriba.
export function CtaFinal({ titulo, precio, wa, boton }: { titulo: string; precio: number; wa: string; boton: string }) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#13315c] p-6 sm:p-10 text-white">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-balance">{titulo}</h2>
          <p className="text-white/80">
            Desde <strong className="text-2xl text-amber-300">{formatoUSD(precio)}</strong> por persona. Los cupos de cada salida son limitados.
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
