import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { precioCityland, type Circuito } from "@/lib/circuitos";
import { fechaLarga, precioSalida, type Salida } from "@/lib/salidas";

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

export function TablaSalidas({ salidas, actual }: { salidas: Salida[]; actual?: string }) {
  if (!salidas.length) return null;
  const minimo = Math.min(...salidas.map((s) => s.precio));
  return (
    <ul className="divide-y divide-slate-200 border-y border-slate-200 text-[15px]">
      {salidas.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/salidas/${s.slug}`}
            aria-current={s.slug === actual ? "page" : undefined}
            className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 min-h-[48px] py-3 px-2 hover:bg-slate-50 ${s.slug === actual ? "bg-sky-50" : ""}`}
          >
            <span className="font-bold text-[#0a1628]">
              {s.circuito.nombre} · {fechaLarga(s.fecha)}
            </span>
            <span className="text-slate-700">
              {s.circuito.dias} días · <strong className="text-[#0a1628]">{formatoUSD(precioSalida(s))}</strong>
              {s.precio === minimo && salidas.length > 1 && <span className="ml-2 rounded bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">la más barata</span>}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function TarjetasPaquetes({ items }: { items: Circuito[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((o) => (
        <li key={o.slug}>
          <Link href={`/circuitos/${o.slug}`} className="block min-h-[56px] rounded-2xl border border-slate-200 px-5 py-4 hover:border-[#0a1628] transition-colors">
            <span className="block font-extrabold text-[#0a1628]">{o.nombre}</span>
            <span className="block text-[15px] text-slate-600 mt-0.5">
              {o.dias} días · {o.tipo === "vuelo" ? `con vuelo desde ${o.origen}` : o.tipo === "crucero" ? "solo crucero" : "sin vuelo"} · desde{" "}
              {formatoUSD(precioCityland(o))}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
