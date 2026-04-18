"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, cotFormLink } from "@/components/constantes";
import { trackConversion } from "@/lib/gtag";

interface CotizadorFormProps {
  preselectedDestino?: string;
}

export default function CotizadorForm({ preselectedDestino }: CotizadorFormProps) {
  const allDestinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE];

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [destino, setDestino] = useState(preselectedDestino ?? "");
  const [fechaIda, setFechaIda] = useState("");
  const [fechaRetorno, setFechaRetorno] = useState("");
  const [pasajeros, setPasajeros] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!email.trim()) e.email = "Ingresa tu email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email no valido";
    if (!destino) e.destino = "Selecciona un destino";
    if (!fechaIda) e.fechaIda = "Selecciona fecha de ida";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const url = cotFormLink({ nombre, email, destino, fechaIda, fechaRetorno: fechaRetorno || undefined, pasajeros });
    trackConversion();
    window.open(url, "_blank");
  }

  const inputCls =
    "w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[14px] text-gray-800 placeholder:text-gray-300 outline-none transition-all focus:border-[#dc2626] focus:ring-2 focus:ring-red-100";
  const labelCls = "block text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 max-w-[640px] mx-auto"
    >
      {/* Header */}
      <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(28px,4vw,36px)] text-gray-900 tracking-wide leading-none text-center mb-1">
        COTIZA TU VIAJE GRATIS
      </h3>
      <p className="text-gray-400 text-[13px] text-center mb-6">
        Un asesor te responde en menos de 2 horas
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label className={labelCls}>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo"
            className={inputCls}
          />
          {errors.nombre && <p className="text-red-500 text-[11px] mt-1">{errors.nombre}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelCls}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={inputCls}
          />
          {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
        </div>

        {/* Destino */}
        <div>
          <label className={labelCls}>Destino</label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className={`${inputCls} ${!destino ? "text-gray-300" : ""}`}
          >
            <option value="">Selecciona destino</option>
            <optgroup label="Europa">
              {DESTINOS_EUROPA.map((d) => (
                <option key={d.slug} value={d.ciudad}>
                  {d.bandera} {d.ciudad}, {d.pais}
                </option>
              ))}
            </optgroup>
            <optgroup label="Caribe y Latinoamerica">
              {DESTINOS_CARIBE.map((d) => (
                <option key={d.slug} value={d.ciudad}>
                  {d.bandera} {d.ciudad}, {d.pais}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.destino && <p className="text-red-500 text-[11px] mt-1">{errors.destino}</p>}
        </div>

        {/* Fecha Ida */}
        <div>
          <label className={labelCls}>Fecha de ida</label>
          <input
            type="date"
            value={fechaIda}
            onChange={(e) => setFechaIda(e.target.value)}
            className={inputCls}
          />
          {errors.fechaIda && <p className="text-red-500 text-[11px] mt-1">{errors.fechaIda}</p>}
        </div>

        {/* Fecha Retorno */}
        <div>
          <label className={labelCls}>Fecha de retorno <span className="normal-case tracking-normal font-normal text-gray-300">(opcional)</span></label>
          <input
            type="date"
            value={fechaRetorno}
            onChange={(e) => setFechaRetorno(e.target.value)}
            className={inputCls}
          />
        </div>

        {/* Pasajeros */}
        <div>
          <label className={labelCls}>Pasajeros</label>
          <div className="flex items-center gap-0 border border-gray-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setPasajeros((p) => Math.max(1, p - 1))}
              className="w-11 h-[42px] flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors text-lg font-semibold shrink-0"
            >
              -
            </button>
            <input
              type="number"
              value={pasajeros}
              readOnly
              className="flex-1 text-center text-[14px] text-gray-800 outline-none border-x border-gray-200 h-[42px] bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              type="button"
              onClick={() => setPasajeros((p) => Math.min(10, p + 1))}
              className="w-11 h-[42px] flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors text-lg font-semibold shrink-0"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-6 w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-[15px] py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-lg shadow-red-500/20"
      >
        <WhatsAppIcon size={18} />
        Enviar cotizacion por WhatsApp
      </button>

      {/* Trust indicators */}
      <p className="text-center text-[11px] text-gray-300 mt-3">
        Sin compromiso &middot; Respuesta en 2h &middot; Mejor precio
      </p>
    </form>
  );
}
