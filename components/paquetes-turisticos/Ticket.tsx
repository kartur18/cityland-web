import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { diasDe, precioPaquete, type PaqueteTuristico } from "@/lib/paquetes-turisticos";

// Diseño propio de los paquetes turísticos: tarjetas tipo boleto (foto arriba, talón perforado con el precio) en tonos
// arena, coral y turquesa, para que no se confundan con los paquetes armados de fecha fija.

export const CORAL = "text-[#e4513f]";
const FONDO = "#fffaf3";

export function Perforado() {
  return (
    <>
      <span aria-hidden="true" className="absolute -left-3 -top-3 h-6 w-6 rounded-full" style={{ background: FONDO }} />
      <span aria-hidden="true" className="absolute -right-3 -top-3 h-6 w-6 rounded-full" style={{ background: FONDO }} />
    </>
  );
}

export function TarjetaTicket({ p }: { p: PaqueteTuristico }) {
  return (
    <li>
      <Link
        href={`/paquetes-turisticos/${p.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] bg-orange-50">
          <Image
            src={p.img}
            alt={`Paquete turístico ${p.nombre}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#0f5f5a] shadow">
            {p.noches} {p.noches === 1 ? "noche" : "noches"} · {diasDe(p)} días
          </span>
        </div>
        <div className="relative flex flex-1 flex-col gap-2 border-t-2 border-dashed border-orange-200 p-5">
          <Perforado />
          <span className="text-lg font-extrabold leading-snug text-[#10302e] group-hover:underline">{p.nombre}</span>
          <span className="text-base text-[#0f766e] line-clamp-2">{p.lugares.slice(0, 5).join(" → ")}</span>
          <span className="mt-auto flex items-end justify-between gap-3 pt-3">
            <span className="text-sm text-slate-500">
              desde <strong className={`block text-3xl ${CORAL}`}>{formatoUSD(precioPaquete(p))}</strong>
            </span>
            <span className="rounded-full bg-[#0f766e] px-4 py-2.5 text-base font-extrabold text-white">Ver paquete</span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export function GrillaTickets({ items }: { items: PaqueteTuristico[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <TarjetaTicket key={p.slug} p={p} />
      ))}
    </ul>
  );
}

// Portada tipo pase de abordar: foto grande a la izquierda y, a la derecha, el talón con el precio y el botón.
export function PortadaTicket({
  foto,
  alt,
  sello,
  titulo,
  bajada,
  ruta,
  etiquetaPrecio,
  precio,
  nota,
  wa,
  boton,
  ancla,
  insignia,
  sinOptimizar,
}: {
  foto: string;
  alt: string;
  sello: string;
  titulo: string;
  bajada: string;
  ruta?: string[];
  etiquetaPrecio: string;
  precio: number;
  nota: string;
  wa: string;
  boton: string;
  ancla: string;
  insignia?: string;
  // Fotos de la CDN del proveedor: van directas, sin pasar por el optimizador de imágenes de Vercel.
  sinOptimizar?: boolean;
}) {
  return (
    <>
      <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-orange-50 shadow-lg sm:aspect-[4/3]">
          <Image src={foto} alt={alt} fill priority unoptimized={sinOptimizar} sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          {insignia && (
            <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-[#0f5f5a] shadow">{insignia}</span>
          )}
        </div>
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e6f4f1] px-4 py-1.5 text-sm font-extrabold text-[#0f5f5a]">{sello}</p>
          <h1 className="text-[30px] font-extrabold leading-tight tracking-tight text-[#10302e] sm:text-4xl lg:text-5xl text-balance">{titulo}</h1>
          <p className="text-lg text-slate-600">{bajada}</p>
          {ruta && ruta.length > 0 && (
            <ol className="flex flex-wrap items-center gap-2">
              {ruta.map((x, i) => (
                <li key={`${x}-${i}`} className="flex items-center gap-2 text-base font-bold text-[#0f766e]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e4513f]" aria-hidden="true" />
                  {x}
                  {i < ruta.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">
                      ―
                    </span>
                  )}
                </li>
              ))}
            </ol>
          )}
          <div className="relative rounded-3xl border-2 border-dashed border-orange-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{etiquetaPrecio}</p>
            <p className={`text-5xl font-extrabold tracking-tight ${CORAL}`}>{formatoUSD(precio)}</p>
            <p className="mt-1 text-sm text-slate-600">{nota}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-extrabold text-white shadow-lg shadow-emerald-500/25 hover:bg-[#20ba5a]"
              >
                <WhatsAppIcon size={20} />
                {boton}
              </a>
              <a
                href="#detalle"
                className="flex min-h-[52px] items-center justify-center rounded-full border-2 border-[#0f766e] px-5 text-base font-extrabold text-[#0f766e] hover:bg-[#0f766e] hover:text-white"
              >
                {ancla} <span aria-hidden="true">&nbsp;↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="detalle" className="scroll-mt-28" aria-hidden="true" />
    </>
  );
}

const PASOS = [
  { t: "Elige tu paquete", d: "Mira el precio por persona y la ruta del viaje." },
  { t: "Escríbenos por WhatsApp", d: "Te mandamos el itinerario día por día y las fechas con cupo." },
  { t: "Separa con el 50%", d: "El saldo lo pagas antes de viajar; todo queda por escrito." },
];

export function ComoSeparar({ pasos = PASOS }: { pasos?: { t: string; d: string }[] } = {}) {
  return (
    <section className="rounded-[2rem] bg-[#e6f4f1] p-6 sm:p-10">
      <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl">{pasos === PASOS ? "Cómo separas tu viaje" : "Cómo lo reservas"}</h2>
      <ol className="mt-6 grid gap-5 sm:grid-cols-3">
        {pasos.map((x, i) => (
          <li key={x.t} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e4513f] text-xl font-extrabold text-white">
              {i + 1}
            </span>
            <span>
              <strong className="block text-lg text-[#10302e]">{x.t}</strong>
              <span className="text-base text-slate-700">{x.d}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CierreTicket({ titulo, precio, wa }: { titulo: string; precio: number; wa: string }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-orange-200 bg-white p-6 sm:p-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#10302e] sm:text-3xl text-balance">{titulo}</h2>
          <p className="mt-1 text-lg text-slate-600">
            Desde <strong className={`text-2xl ${CORAL}`}>{formatoUSD(precio)}</strong> por persona. Te respondemos por WhatsApp con fechas y cupos.
          </p>
        </div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-base font-extrabold text-white shadow-lg hover:bg-[#20ba5a]"
        >
          <WhatsAppIcon size={20} />
          Cotizar por WhatsApp
        </a>
      </div>
    </section>
  );
}
