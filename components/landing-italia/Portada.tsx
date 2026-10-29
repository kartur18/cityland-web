import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { NOTA_PRECIO_REFERENCIAL, formatoUSD } from "@/lib/formato-precio";
import type { LandingItalia } from "@/lib/italia/tipos";

// Portadas claras de las landings de Italia: una forma por familia de páginas
// (boleto para las rutas, casa para el regreso, documento para las guías y revista para meses y fiestas).

const EXTERNO = { target: "_blank", rel: "noopener noreferrer" } as const;

function Precio({ l }: { l: LandingItalia }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{l.etiquetaPrecio}</p>
      {l.precio !== undefined && (
        <p className="text-5xl font-extrabold tracking-tight text-[#0a1628]">
          <span className="text-lg font-bold text-slate-500">desde </span>
          {formatoUSD(l.precio)}
        </p>
      )}
      {l.detallePrecio && <p className="mt-1 text-sm text-slate-600">{l.detallePrecio}</p>}
      {l.precio !== undefined && <p className="mt-1 text-xs text-slate-500">{NOTA_PRECIO_REFERENCIAL}</p>}
    </div>
  );
}

function Titulo({ l }: { l: LandingItalia }) {
  return (
    <>
      <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-[#0a1628]">
        <span className="flex h-2 w-6 overflow-hidden rounded-full" aria-hidden="true">
          <span className="w-1/3 bg-emerald-600" />
          <span className="w-1/3 bg-white" />
          <span className="w-1/3 bg-red-600" />
        </span>
        {l.sello}
      </p>
      <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#0a1628] text-balance">{l.h1}</h1>
      <p className="max-w-2xl text-base sm:text-lg text-slate-600">{l.bajada}</p>
    </>
  );
}

// Rutas de ida: la tarjeta es un pase de abordar con los códigos de aeropuerto.
function PortadaBoleto({ l, wa }: { l: LandingItalia; wa: string }) {
  return (
    <section className="grid items-center gap-6 rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-5 sm:p-8 lg:grid-cols-[1fr_430px] lg:gap-10 lg:p-10">
      <div className="space-y-4">
        <Titulo l={l} />
        {l.datos && (
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {l.datos.slice(0, 4).map((d) => (
              <div key={d.k} className="rounded-2xl border border-sky-100 bg-white px-3 py-2.5">
                <dt className="text-xs font-bold uppercase tracking-wide text-sky-700">{d.k}</dt>
                <dd className="text-sm font-extrabold text-[#0a1628]">{d.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="relative aspect-[16/9] bg-slate-100">
          <Image src={l.foto} alt={l.fotoAlt} fill priority sizes="(min-width: 1024px) 430px, 100vw" className="object-cover" />
        </div>
        {l.boleto && (
          <div className="flex items-center justify-between border-b border-dashed border-slate-300 px-5 py-4">
            <div>
              <p className="text-3xl font-extrabold text-[#0a1628]">{l.boleto.de}</p>
              <p className="text-xs text-slate-500">{l.boleto.deNombre}</p>
            </div>
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-sky-600" fill="currentColor" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
            </svg>
            <div className="text-right">
              <p className="text-3xl font-extrabold text-[#0a1628]">{l.boleto.a}</p>
              <p className="text-xs text-slate-500">{l.boleto.aNombre}</p>
            </div>
          </div>
        )}
        <div className="space-y-3 p-5">
          <Precio l={l} />
          <a href={wa} {...EXTERNO} className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-base font-extrabold text-white shadow-lg shadow-emerald-500/30 hover:bg-[#20ba5a]">
            <WhatsAppIcon size={20} />
            {l.boton}
          </a>
          <p className="text-sm text-slate-600">Separas con el 50% y pagas el saldo antes de la emisión.</p>
        </div>
      </div>
    </section>
  );
}

// Regreso a casa: foto a la izquierda y tonos cálidos.
function PortadaRegreso({ l, wa }: { l: LandingItalia; wa: string }) {
  return (
    <section className="grid overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/60 lg:grid-cols-[440px_1fr]">
      <div className="relative min-h-[220px] bg-orange-100">
        <Image src={l.foto} alt={l.fotoAlt} fill priority sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
        {l.boleto && (
          <span className="absolute left-4 bottom-4 rounded-full bg-white/95 px-4 py-1.5 text-sm font-extrabold text-[#0a1628]">
            {l.boleto.de} → {l.boleto.a}
          </span>
        )}
      </div>
      <div className="space-y-4 p-5 sm:p-8 lg:p-10">
        <Titulo l={l} />
        <div className="flex flex-wrap items-end gap-5">
          <Precio l={l} />
          <a href={wa} {...EXTERNO} className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#9a3412] px-6 text-base font-extrabold text-white hover:bg-[#7c2d12]">
            <WhatsAppIcon size={20} />
            {l.boton}
          </a>
        </div>
      </div>
    </section>
  );
}

// Guías: hoja de documento, con la foto chica.
function PortadaGuia({ l, wa }: { l: LandingItalia; wa: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-start">
        <div className="space-y-4 border-l-4 border-emerald-600 pl-4 sm:pl-6">
          <Titulo l={l} />
          <a href={wa} {...EXTERNO} className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-6 text-base font-extrabold text-white hover:bg-[#20ba5a]">
            <WhatsAppIcon size={18} />
            {l.boton}
          </a>
        </div>
        <div className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <Image src={l.foto} alt={l.fotoAlt} fill priority sizes="300px" className="object-cover" />
          </div>
          {l.datos && (
            <dl className="divide-y divide-slate-100 rounded-2xl border border-slate-200">
              {l.datos.map((d) => (
                <div key={d.k} className="flex justify-between gap-3 px-4 py-2.5 text-sm">
                  <dt className="text-slate-500">{d.k}</dt>
                  <dd className="font-extrabold text-right text-[#0a1628]">{d.v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

// Meses, fiestas y combinados: foto ancha y el texto en un panel blanco encima.
function PortadaRevista({ l, wa }: { l: LandingItalia; wa: string }) {
  return (
    <section>
      <div className="relative aspect-[16/9] sm:aspect-[21/8] overflow-hidden rounded-3xl bg-slate-100">
        <Image src={l.foto} alt={l.fotoAlt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
      </div>
      <div className="relative -mt-10 sm:-mt-16 mx-3 sm:mx-8 grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-3">
          <Titulo l={l} />
        </div>
        <div className="space-y-3">
          <Precio l={l} />
          <a href={wa} {...EXTERNO} className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 text-base font-extrabold text-white hover:bg-[#20ba5a]">
            <WhatsAppIcon size={20} />
            {l.boton}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Portada({ l, wa }: { l: LandingItalia; wa: string }) {
  if (l.grupo === "ida" || l.grupo === "provincia") return <PortadaBoleto l={l} wa={wa} />;
  if (l.grupo === "regreso" || l.grupo === "regresoTema") return <PortadaRegreso l={l} wa={wa} />;
  if (l.grupo === "guia") return <PortadaGuia l={l} wa={wa} />;
  return <PortadaRevista l={l} wa={wa} />;
}
