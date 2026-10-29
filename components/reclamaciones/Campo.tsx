import type { ReactNode } from "react";

// Mismas clases de campo que el cotizador del pie (CotizadorWhatsApp) para no inventar otro estilo.
export const CLASE_CAMPO =
  "w-full min-h-[48px] rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-base text-[#0a1628] focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-500/20";

export function idCampo(nombre: string) {
  return `rec-${nombre}`;
}

// Atributos de accesibilidad que enlazan el control con su mensaje de error.
export function ariaCampo(nombre: string, error?: string) {
  return {
    id: idCampo(nombre),
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? `${idCampo(nombre)}-error` : undefined,
  };
}

export function Campo({
  nombre,
  etiqueta,
  error,
  ayuda,
  obligatorio = true,
  children,
}: {
  nombre: string;
  etiqueta: string;
  error?: string;
  ayuda?: string;
  obligatorio?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={idCampo(nombre)} className="block text-xs font-bold text-slate-600 mb-1">
        {etiqueta}
        {obligatorio ? <span aria-hidden="true" className="text-red-600"> *</span> : <span className="font-normal text-slate-500"> (opcional)</span>}
      </label>
      {children}
      {ayuda && !error ? <p className="mt-1 text-xs text-slate-500">{ayuda}</p> : null}
      {error ? (
        <p id={`${idCampo(nombre)}-error`} className="mt-1 text-xs font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Opcion({
  nombre,
  valor,
  actual,
  titulo,
  detalle,
  onElegir,
}: {
  nombre: string;
  valor: string;
  actual: string;
  titulo: string;
  detalle?: string;
  onElegir: (v: string) => void;
}) {
  const activa = actual === valor;
  return (
    <label
      className={`flex items-start gap-3 min-h-[48px] rounded-xl border px-3.5 py-3 cursor-pointer transition-colors ${
        activa ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20" : "border-slate-300 bg-white hover:border-slate-400"
      }`}
    >
      <input type="radio" name={nombre} value={valor} checked={activa} onChange={() => onElegir(valor)} className="mt-1 h-4 w-4 accent-emerald-600" />
      <span className="text-sm text-[#0a1628]">
        <span className="block font-bold">{titulo}</span>
        {detalle ? <span className="block text-xs text-slate-600 mt-0.5">{detalle}</span> : null}
      </span>
    </label>
  );
}
