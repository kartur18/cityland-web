"use client";

import { useId, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { NUMERO_WHATSAPP_OFICIAL } from "@/components/constantes";
import { armarMensajeCotizacion, proximosMesesLima, PASAJEROS_OPCIONES } from "@/lib/cotizador";

const DESTINOS_SUGERIDOS = [
  "Madrid",
  "Barcelona",
  "Roma",
  "Milán",
  "París",
  "Punta Cana",
  "Cancún",
  "Cartagena",
  "San Andrés",
  "Cusco y Machu Picchu",
  "Miami",
  "Orlando",
  "Turquía",
  "Buenos Aires",
];

interface Props {
  destinoInicial?: string;
  titulo?: string;
  // Etiqueta que viaja en el "Ref Web" para saber qué cotizador usó el cliente.
  origen?: string;
}

/**
 * Cotizador de 3 preguntas que abre WhatsApp con el mensaje ya escrito (destino, mes y pasajeros):
 * la asesora o la IA reciben los 3 datos que necesitan para cotizar sin volver a preguntarlos.
 */
export default function CotizadorWhatsApp({
  destinoInicial = "",
  titulo = "Cotiza tu viaje en 30 segundos",
  origen = "Cotizador",
}: Props) {
  const ruta = usePathname() || "/";
  const id = useId();
  const [destino, setDestino] = useState(destinoInicial);
  const [mes, setMes] = useState("");
  const [pasajeros, setPasajeros] = useState("");
  const meses = useMemo(() => proximosMesesLima(new Date()), []);

  const texto = `${armarMensajeCotizacion({ destino, mes, pasajeros })}\n\n📍 Ref Web: citylandtravel.com${ruta} [${origen}]`;
  const href = `https://wa.me/${NUMERO_WHATSAPP_OFICIAL}?text=${encodeURIComponent(texto)}`;

  const alCotizar = () => {
    window.gtag?.("event", "cotizador_whatsapp", {
      destino: destino.trim() || "sin_destino",
      mes: mes || "sin_mes",
      pasajeros: pasajeros || "sin_dato",
      landing_page: ruta,
      origen,
    });
  };

  const campo =
    "w-full min-h-[48px] rounded-xl border border-slate-300 bg-white px-3.5 text-base text-[#0a1628] focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 text-left">
      <p className="text-sm sm:text-base font-extrabold text-[#0a1628] mb-3">{titulo}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="min-w-0">
          <label htmlFor={`${id}-destino`} className="block text-xs font-bold text-slate-600 mb-1">
            ¿A dónde quieres viajar?
          </label>
          <input
            id={`${id}-destino`}
            type="text"
            list={`${id}-sugeridos`}
            value={destino}
            onChange={(e) => setDestino(e.target.value.slice(0, 60))}
            placeholder="Ej.: Madrid"
            autoComplete="off"
            className={campo}
          />
          <datalist id={`${id}-sugeridos`}>
            {DESTINOS_SUGERIDOS.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>
        <div className="min-w-0">
          <label htmlFor={`${id}-mes`} className="block text-xs font-bold text-slate-600 mb-1">
            ¿Cuándo?
          </label>
          <select id={`${id}-mes`} value={mes} onChange={(e) => setMes(e.target.value)} className={campo}>
            <option value="">Elige el mes</option>
            {meses.map((m) => (
              <option key={m} value={m}>
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </option>
            ))}
            <option value="aun-no-se">Aún no sé</option>
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor={`${id}-pax`} className="block text-xs font-bold text-slate-600 mb-1">
            ¿Cuántos viajan?
          </label>
          <select id={`${id}-pax`} value={pasajeros} onChange={(e) => setPasajeros(e.target.value)} className={campo}>
            <option value="">Elige</option>
            {PASAJEROS_OPCIONES.map((p) => (
              <option key={p} value={p}>
                {p === "1" ? "1 persona" : `${p} personas`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={alCotizar}
        className="mt-3.5 w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white min-h-[52px] px-6 rounded-xl text-base font-extrabold shadow-md transition-colors"
      >
        <WhatsAppIcon size={20} />
        <span>Cotizar por WhatsApp</span>
      </a>
      <p className="mt-2 text-xs text-slate-500 text-center">
        Te respondemos con precio y fechas disponibles. Sin compromiso.
      </p>
    </div>
  );
}
