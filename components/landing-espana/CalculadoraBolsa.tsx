"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waEspana } from "@/components/landing-espana/CtasWhatsApp";
import { BOLSA_POR_DIA, FECHA_CONSULTA, FECHA_TIPO_CAMBIO, bolsaPorPersona, euros, soles } from "@/lib/datos-viaje-espana";

// Calculadora de la bolsa de viaje: días × monto diario oficial, con el mínimo por persona, en euros y en soles.
const MAX_DIAS = 90;

export default function CalculadoraBolsa({ ruta, diasIniciales = 15 }: { ruta: string; diasIniciales?: number }) {
  const [dias, setDias] = useState(diasIniciales);
  const [personas, setPersonas] = useState(1);
  const porPersona = bolsaPorPersona(dias);
  const total = porPersona * personas;
  const mensaje = `¡Hola Cityland Travel! Hice el cálculo de la bolsa de viaje: ${dias} días, ${personas} ${personas === 1 ? "persona" : "personas"}, ${euros(total)}. Quiero cotizar el pasaje.`;
  const campo = "mt-1 block w-full min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 text-lg font-bold text-[#0a1628]";

  return (
    <section className="rounded-3xl border-2 border-emerald-200 bg-white p-5 sm:p-8 space-y-5" aria-labelledby="calculadora">
      <h2 id="calculadora" className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
        Calcula tu bolsa de viaje
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-base font-bold text-slate-700">
          ¿Cuántos días te quedas en España?
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={MAX_DIAS}
            value={dias}
            onChange={(e) => setDias(Math.min(MAX_DIAS, Math.max(1, Number(e.target.value) || 1)))}
            className={campo}
          />
        </label>
        <label className="block text-base font-bold text-slate-700">
          ¿Cuántas personas viajan?
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={10}
            value={personas}
            onChange={(e) => setPersonas(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
            className={campo}
          />
        </label>
      </div>
      <div className="rounded-2xl bg-emerald-50 p-5" aria-live="polite">
        <p className="text-sm text-slate-600">Dinero que te pueden pedir que demuestres</p>
        <p className="text-4xl font-extrabold tracking-tight text-[#0a1628]">{euros(total)}</p>
        <p className="text-lg font-bold text-slate-700">≈ {soles(total)}</p>
        <p className="mt-1 text-sm text-slate-600">
          {euros(porPersona)} por persona
          {dias <= 9 ? ": hasta 9 días rige el mínimo de 1.098,90 €." : ` (${euros(BOLSA_POR_DIA)} × ${dias} días).`}
        </p>
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
        Orden PRE/1282/2007 y salario mínimo de España 2026 (1.221 €), consultado el {FECHA_CONSULTA}. Soles al tipo de cambio venta del BCRP del{" "}
        {FECHA_TIPO_CAMBIO}; tu banco o casa de cambio puede darte otro.
      </p>
    </section>
  );
}
