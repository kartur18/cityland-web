"use client";

import { useId, useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildWaUrl } from "@/components/constantes";

// Arma el mensaje de WhatsApp con destino, fechas y edades: la asesora recibe todo para cotizar al toque.
// No guarda nada: solo compone el texto del enlace.

const EXTRAS = ["Alguien tiene una enfermedad que ya trata", "Viaja una embarazada", "Haremos deportes o aventura"];

// «2026-11-10» → «10/11/2026», sin pasar por Date (evita el corrimiento de zona horaria).
const fecha = (iso: string) => (iso ? iso.split("-").reverse().join("/") : "");

export default function CotizadorSeguro({ ruta, destino }: { ruta: string; destino?: string }) {
  const id = useId();
  const [donde, setDonde] = useState(destino ?? "");
  const [ida, setIda] = useState("");
  const [vuelta, setVuelta] = useState("");
  const [edades, setEdades] = useState("");
  const [extras, setExtras] = useState<string[]>([]);

  const lineas = [
    "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje.",
    donde && `Destino: ${donde}`,
    (ida || vuelta) && `Fechas: ${fecha(ida) || "?"} al ${fecha(vuelta) || "?"}`,
    edades && `Edades de los viajeros: ${edades}`,
    ...extras,
  ].filter(Boolean);
  const href = buildWaUrl({ categoria: "general", mensajePersonalizado: lineas.join("\n"), refWeb: `citylandtravel.com${ruta} [Cotizador]` });

  const campo = "w-full min-h-[48px] rounded-xl border border-slate-300 bg-white px-3.5 text-base text-slate-900 focus:border-[#0f2e2c] focus:outline-none focus:ring-2 focus:ring-[#0f2e2c]/20";
  const etiqueta = "block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1.5";

  return (
    <section className="rounded-3xl bg-[#0f2e2c] p-5 sm:p-8 text-white" aria-labelledby={`${id}-t`}>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffb59c]">Cotizador</p>
          <h2 id={`${id}-t`} className="text-2xl sm:text-3xl font-extrabold text-balance">
            Arma tu cotización en 30 segundos
          </h2>
          <p className="text-[15px] text-emerald-50/80">
            Llena lo que sepas y envíalo: una asesora te responde por WhatsApp con las opciones y el precio.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 sm:p-5 text-slate-900 space-y-4">
          <div>
            <label htmlFor={`${id}-d`} className={etiqueta}>
              Destino
            </label>
            <input id={`${id}-d`} className={campo} value={donde} onChange={(e) => setDonde(e.target.value)} placeholder="Ej.: España y Francia" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${id}-i`} className={etiqueta}>
                Salida
              </label>
              <input id={`${id}-i`} type="date" className={campo} value={ida} onChange={(e) => setIda(e.target.value)} />
            </div>
            <div>
              <label htmlFor={`${id}-v`} className={etiqueta}>
                Regreso
              </label>
              <input id={`${id}-v`} type="date" className={campo} value={vuelta} onChange={(e) => setVuelta(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor={`${id}-e`} className={etiqueta}>
              Edades
            </label>
            <input id={`${id}-e`} className={campo} value={edades} onChange={(e) => setEdades(e.target.value)} placeholder="Ej.: 45, 42 y 9" inputMode="text" />
          </div>
          <fieldset className="space-y-1">
            <legend className={etiqueta}>Si aplica</legend>
            {EXTRAS.map((x) => (
              <label key={x} className="flex min-h-[44px] items-center gap-3 text-[15px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[#ff6a3d]"
                  checked={extras.includes(x)}
                  onChange={(e) => setExtras((v) => (e.target.checked ? [...v, x] : v.filter((y) => y !== x)))}
                />
                {x}
              </label>
            ))}
          </fieldset>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#0f2e2c] px-5 text-base font-extrabold text-white hover:bg-black"
          >
            <WhatsAppIcon size={18} />
            Enviar mi cotización
          </a>
        </div>
      </div>
    </section>
  );
}
