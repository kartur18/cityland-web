"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waEspana } from "@/components/landing-espana/CtasWhatsApp";
import { FECHA_CONSULTA, FECHA_TIPO_CAMBIO, IPREM_MENSUAL, estudiosTotal, euros, reagrupacionMensual, soles } from "@/lib/datos-viaje-espana";

// Calculadora de medios económicos sobre el IPREM: ingresos al mes para reagrupar, o dinero para el visado de estudios.
export type TipoCalculadoraIprem = "reagrupacion" | "estudios";

const TEXTOS: Record<TipoCalculadoraIprem, { titulo: string; pregunta: string; min: number; max: number; fuente: string }> = {
  reagrupacion: {
    titulo: "Calcula los ingresos que te piden para reagrupar",
    pregunta: "¿Cuántas personas serán en tu familia en España, contándote?",
    min: 2,
    max: 10,
    fuente: "Hoja informativa 8 de Extranjería (mayo de 2025): 150 % del IPREM para 2 personas y 50 % más por cada una.",
  },
  estudios: {
    titulo: "Calcula el dinero para tu visado de estudios",
    pregunta: "¿Cuántos meses dura tu curso en España?",
    min: 4,
    max: 24,
    fuente: "Medios económicos de la estancia por estudios: 100 % del IPREM por cada mes.",
  },
};

export default function CalculadoraIprem({ ruta, tipo, inicial }: { ruta: string; tipo: TipoCalculadoraIprem; inicial: number }) {
  const t = TEXTOS[tipo];
  const [n, setN] = useState(inicial);
  const total = tipo === "reagrupacion" ? reagrupacionMensual(n) : estudiosTotal(n);
  const detalle =
    tipo === "reagrupacion"
      ? `Ingresos fijos al mes para una familia de ${n} personas.`
      : `${euros(IPREM_MENSUAL)} × ${n} meses de curso.`;
  const mensaje =
    tipo === "reagrupacion"
      ? `¡Hola Cityland Travel! Hice el cálculo de la reagrupación: familia de ${n} personas, ${euros(total)} al mes. Quiero cotizar los pasajes.`
      : `¡Hola Cityland Travel! Hice el cálculo del visado de estudios: ${n} meses, ${euros(total)}. Quiero cotizar mi pasaje.`;
  const campo = "mt-1 block w-full min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-lg font-bold text-[#0a1628]";

  return (
    <section className="rounded-3xl border-2 border-teal-200 bg-white p-5 sm:p-8 space-y-5" aria-labelledby="calculadora">
      <h2 id="calculadora" className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
        {t.titulo}
      </h2>
      <label className="block max-w-md text-base font-bold text-slate-700">
        {t.pregunta}
        <input
          type="number"
          inputMode="numeric"
          min={t.min}
          max={t.max}
          value={n}
          onChange={(e) => setN(Math.min(t.max, Math.max(t.min, Number(e.target.value) || t.min)))}
          className={campo}
        />
      </label>
      <div className="rounded-2xl bg-teal-50 p-5" aria-live="polite">
        <p className="text-sm text-slate-600">{tipo === "reagrupacion" ? "Lo que debes ganar al mes, como mínimo" : "Lo que debes demostrar"}</p>
        <p className="text-4xl font-extrabold tracking-tight text-[#0a1628]">{euros(total)}</p>
        <p className="text-lg font-bold text-slate-700">≈ {soles(total)}</p>
        <p className="mt-1 text-sm text-slate-600">{detalle}</p>
      </div>
      <a
        href={waEspana(ruta, mensaje, "Calculadora")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-[#128C7E] px-5 text-base font-extrabold text-[#075E54] hover:bg-[#128C7E] hover:text-white"
      >
        <WhatsAppIcon size={18} />
        Mandar mi cálculo a una asesora
      </a>
      <p className="text-sm text-slate-500">
        {t.fuente} IPREM 2026: {euros(IPREM_MENSUAL)} al mes, consultado el {FECHA_CONSULTA}. Soles al tipo de cambio venta del BCRP del {FECHA_TIPO_CAMBIO}.
        Es una referencia: Extranjería y el Consulado revisan cada caso.
      </p>
    </section>
  );
}
