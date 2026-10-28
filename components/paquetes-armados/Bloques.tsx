import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, type Circuito } from "@/lib/circuitos";
import { MESES, fechaLarga, partesFecha, precioSalida, type Salida } from "@/lib/salidas";
import { portadaDe } from "@/lib/paquetes-armados/fotos";

// Bloques que comparten las páginas de paquetes armados (salidas, meses y Caribe).

export interface Pregunta {
  q: string;
  a: string;
}

export function Migas({ items }: { items: { nombre: string; href?: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="text-xs text-slate-500">
      {items.map((it, i) => (
        <span key={it.nombre}>
          {i > 0 && " / "}
          {it.href ? (
            <Link href={it.href} className="hover:underline">
              {it.nombre}
            </Link>
          ) : (
            it.nombre
          )}
        </span>
      ))}
    </nav>
  );
}

export function SelloArmado({ texto }: { texto: string }) {
  return (
    <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full bg-[#0a1628] px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white">
      <span className="text-amber-300">Paquete armado</span>
      <span aria-hidden="true">·</span>
      <span>{texto}</span>
    </p>
  );
}

export function BotonWhatsApp({ href, texto }: { href: string; texto: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold"
    >
      <WhatsAppIcon size={18} />
      {texto}
    </a>
  );
}

export function Lista({ titulo, items }: { titulo: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">{titulo}</h2>
      <ul className="list-disc pl-5 space-y-1.5 text-[15px] text-slate-700">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

export function TablaHoteles({ hoteles, titulo = "Hoteles previstos o similares" }: { hoteles: string[][]; titulo?: string }) {
  if (!hoteles.length) return null;
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">{titulo}</h2>
      <ul className="divide-y divide-slate-200 border-y border-slate-200 text-[15px]">
        {hoteles.map((h, i) => (
          <li key={i} className="py-3 flex flex-wrap justify-between gap-x-4 gap-y-1">
            <span className="font-bold text-[#0a1628]">{h[0]}</span>
            <span className="text-slate-700">
              {h[1]}
              {h[2] ? ` · ${h[2]}` : ""}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500">El mayorista puede cambiar un hotel por otro de la misma categoría («o similar»).</p>
    </section>
  );
}

export function Preguntas({ faqs }: { faqs: Pregunta[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#0a1628]">Preguntas frecuentes</h2>
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer list-none font-bold text-[#0a1628] flex justify-between gap-4 min-h-[44px] items-center">
              {f.q}
              <span className="text-slate-400 group-open:rotate-45 transition-transform" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="text-[15px] text-slate-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqSchema(faqs: Pregunta[]) {
  return { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
}

// Salidas con fecha como tarjetas con foto: el día bien grande, el paquete y el precio de esa fecha.
export function TablaSalidas({ salidas, actual }: { salidas: Salida[]; actual?: string }) {
  if (!salidas.length) return null;
  const minimo = Math.min(...salidas.map((s) => s.precio));
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {salidas.map((s) => {
        const { dia, mes, anio } = partesFecha(s.fecha);
        const esActual = s.slug === actual;
        return (
          <li key={s.slug}>
            <Link
              href={`/salidas/${s.slug}`}
              aria-current={esActual ? "page" : undefined}
              className={`group flex h-full overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-lg ${esActual ? "border-[#0a1628] ring-2 ring-[#0a1628]" : "border-slate-200"}`}
            >
              <div className="relative w-28 shrink-0 sm:w-32">
                <Image src={portadaDe(s.circuito)} alt={s.circuito.nombre} fill sizes="128px" className="object-cover" />
                <div className="absolute left-2 top-2 rounded-lg bg-white/95 px-2 py-1 text-center leading-none shadow">
                  <span className="block text-xl font-extrabold text-[#0a1628]">{dia}</span>
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    {MESES[mes - 1].slice(0, 3)} {String(anio).slice(2)}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-2 p-3">
                <span className="font-extrabold leading-snug text-[#0a1628] group-hover:underline">{s.circuito.nombre}</span>
                <span className="text-xs text-slate-500">
                  {s.circuito.dias} días · {fechaLarga(s.fecha)}
                </span>
                <span className="flex flex-wrap items-center gap-2">
                  <strong className="text-lg text-[#0a1628]">{formatoUSD(precioSalida(s))}</strong>
                  {s.precio === minimo && salidas.length > 1 && (
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">la más barata</span>
                  )}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// Tarjetas de paquetes con su portada, duración, si lleva vuelo y el precio desde.
export function TarjetasPaquetes({ items }: { items: Circuito[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((o) => (
        <li key={o.slug}>
          <Link
            href={`/circuitos/${o.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src={portadaDe(o)}
                alt={`Paquete armado ${o.nombre}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-[#0a1628]/90 px-3 py-1 text-xs font-extrabold text-white">
                {o.dias} días · {o.noches} noches
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <span className="font-extrabold leading-snug text-[#0a1628]">{o.nombre}</span>
              <span className="text-sm text-slate-600">{o.ciudades.slice(0, 4).join(" · ")}</span>
              <span
                className={`self-start rounded-full px-2.5 py-0.5 text-xs font-bold ${o.tipo === "vuelo" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}
              >
                {o.tipo === "vuelo" ? `Con vuelo desde ${o.origen}` : o.tipo === "crucero" ? "Solo crucero" : "Sin vuelo"}
              </span>
              <span className="mt-auto flex items-end justify-between gap-2 pt-2">
                <span className="text-sm text-slate-500">
                  desde <strong className="block text-2xl text-[#0a1628]">{formatoUSD(precioCityland(o))}</strong>
                </span>
                <span className="rounded-xl bg-[#25D366] px-3 py-2 text-sm font-extrabold text-white">Ver paquete</span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Qué incluye y qué no, lado a lado: el cliente compara de un vistazo sin bajar dos listas largas.
export function IncluyeNoIncluye({ incluye, noIncluye }: { incluye: string[]; noIncluye: string[] }) {
  if (!incluye.length && !noIncluye.length) return null;
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {incluye.length > 0 && (
        <div className="rounded-2xl border border-emerald-200 bg-white p-5 space-y-3">
          <h2 className="text-xl font-extrabold text-[#0a1628]">Qué incluye</h2>
          <ul className="space-y-2 text-[15px] text-slate-700">
            {incluye.map((x, i) => (
              <li key={i} className="flex gap-2">
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600">
                  <path fill="currentColor" d="M8.1 14.6 3.5 10l1.4-1.4 3.2 3.2 7-7L16.5 6z" />
                </svg>
                {x}
              </li>
            ))}
          </ul>
        </div>
      )}
      {noIncluye.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
          <h2 className="text-xl font-extrabold text-[#0a1628]">No incluye</h2>
          <ul className="space-y-2 text-[15px] text-slate-600">
            {noIncluye.map((x, i) => (
              <li key={i} className="flex gap-2">
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="mt-0.5 shrink-0 text-slate-400">
                  <path fill="currentColor" d="m5.4 4 4.6 4.6L14.6 4 16 5.4 11.4 10l4.6 4.6-1.4 1.4-4.6-4.6L5.4 16 4 14.6 8.6 10 4 5.4z" />
                </svg>
                {x}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
