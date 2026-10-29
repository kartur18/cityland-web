import FotoCdn from "@/components/FotoCdn";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { precioPorPersona, precioTraslado, type DestinoTraslado, type OpcionTraslado } from "@/lib/traslados-turbo";

// Diseño propio de los traslados: letrero de «llegadas» de aeropuerto en carbón y ámbar, para que no se confunda con
// los hoteles (llave azul y dorada) ni con los paquetes (boleto coral).

export const CARBON = "#15181d";
export const AMBAR = "#f2b705";
export const GRIS = "#f1f2f4";

export function Placa({ cod, texto }: { cod: string; texto: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm font-extrabold uppercase tracking-widest" style={{ background: CARBON, color: AMBAR }}>
      {cod}
      <span aria-hidden="true">→</span>
      <span className="font-sans tracking-normal text-white">{texto}</span>
    </span>
  );
}

export function PortadaTraslado({
  foto,
  alt,
  cod,
  placa,
  titulo,
  bajada,
  precio,
  nota,
  wa,
}: {
  foto: string;
  alt: string;
  cod: string;
  placa: string;
  titulo: string;
  bajada: string;
  precio: number;
  nota: string;
  wa: string;
}) {
  return (
    <section className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200">
      <div className="relative aspect-[16/9] sm:aspect-[21/8] bg-slate-200">
        {foto && <FotoCdn src={foto} alt={alt} prioridad sizes="100vw" />}
      </div>
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_340px] lg:items-center">
        <div className="space-y-3">
          <Placa cod={cod} texto={placa} />
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl" style={{ color: CARBON }}>
            {titulo}
          </h1>
          <p className="text-lg text-slate-700">{bajada}</p>
          <a href="#contenido" className="inline-block text-base font-bold underline" style={{ color: CARBON }}>
            Ver las opciones ↓
          </a>
        </div>
        <div className="rounded-[28px] p-6 text-center text-white" style={{ background: CARBON }}>
          <span className="block font-mono text-xs uppercase tracking-widest" style={{ color: AMBAR }}>
            Llegadas · desde
          </span>
          <strong className="block text-5xl font-extrabold">{formatoUSD(precio)}</strong>
          <span className="mt-1 block text-sm text-slate-300">{nota}</span>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-extrabold text-white hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// Una fila del letrero: tipo, vehículo, tiempo y precio por persona; el botón lleva la opción ya escrita al WhatsApp.
export function FilaOpcion({ o, wa }: { o: OpcionTraslado; wa: string }) {
  return (
    <li className="flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <span
          className="inline-block rounded-md px-2 py-0.5 font-mono text-xs font-extrabold uppercase tracking-widest"
          style={o.tipo === "Privado" ? { background: CARBON, color: AMBAR } : { background: AMBAR, color: CARBON }}
        >
          {o.tipo}
        </span>
        <strong className="block text-lg" style={{ color: CARBON }}>
          {[o.veh, o.cat].filter(Boolean).join(" · ")}
        </strong>
        <span className="block text-sm text-slate-600">
          {o.tipo === "Privado" ? "Solo tu grupo, sale cuando llegas" : "Con otros viajeros de la misma zona"}
          {o.min ? ` · unos ${o.min} minutos de viaje` : ""}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <span className="text-right text-sm text-slate-500">
          por persona
          <strong className="block text-3xl" style={{ color: CARBON }}>
            {formatoUSD(precioPorPersona(o))}
          </strong>
          <span className="block text-xs">{formatoUSD(precioTraslado(o))} los 2, solo ida</span>
        </span>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] shrink-0 items-center rounded-full px-5 text-base font-extrabold"
          style={{ background: AMBAR, color: CARBON }}
        >
          Lo quiero
        </a>
      </div>
    </li>
  );
}

export const PASOS_TRASLADO = [
  { t: "Elige la opción", d: "Compartido si quieres ahorrar, privado si quieres salir apenas llegas." },
  { t: "Mándanos tu vuelo", d: "Número de vuelo, hotel y cuántos viajan, por WhatsApp." },
  { t: "Recibe tu voucher", d: "Con el punto de encuentro y el teléfono de contacto, por escrito." },
];

export function PasosTraslado() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-extrabold sm:text-3xl" style={{ color: CARBON }}>
        Así reservas tu traslado
      </h2>
      <ol className="grid gap-5 sm:grid-cols-3">
        {PASOS_TRASLADO.map((p, i) => (
          <li key={p.t} className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <span className="font-mono text-sm font-extrabold" style={{ color: "#b48800" }}>
              Paso {i + 1}
            </span>
            <strong className="mt-1 block text-lg" style={{ color: CARBON }}>
              {p.t}
            </strong>
            <span className="mt-1 block text-base text-slate-600">{p.d}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function GrillaDestinosTraslado({ items }: { items: DestinoTraslado[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((y) => (
        <li key={y.slug}>
          <Link href={`/traslados-en/${y.slug}`} className="group block overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg">
            <span className="relative block aspect-[4/3] bg-slate-200">
              {y.foto && (
                <FotoCdn
                  src={y.foto}
                  alt={`Traslado del aeropuerto al hotel en ${y.nombre}`}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <span className="absolute left-3 top-3 rounded-md px-2 py-1 font-mono text-xs font-extrabold tracking-widest" style={{ background: CARBON, color: AMBAR }}>
                {y.cod}
              </span>
            </span>
            <span className="block p-4">
              <strong className="block text-base group-hover:underline" style={{ color: CARBON }}>
                {y.nombre}
              </strong>
              <span className="text-sm text-slate-600">desde {formatoUSD(y.desde)} por persona</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Cierre en banda ámbar con botón carbón (no otro verde igual al de la portada).
export function CierreTraslado({ titulo, texto, wa }: { titulo: string; texto: string; wa: string }) {
  return (
    <section className="flex flex-col gap-5 rounded-[32px] p-8 sm:flex-row sm:items-center sm:justify-between" style={{ background: AMBAR, color: CARBON }}>
      <div>
        <h2 className="text-2xl font-extrabold sm:text-3xl">{titulo}</h2>
        <p className="mt-1 text-base">{texto}</p>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-full px-6 text-base font-extrabold text-white hover:opacity-90"
        style={{ background: CARBON }}
      >
        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
        Pedir mi traslado
      </a>
    </section>
  );
}
