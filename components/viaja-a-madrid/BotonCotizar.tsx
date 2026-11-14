"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCotizador, useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

// Botón de WhatsApp de la landing: verde WhatsApp con destello y sombra que late. Con `adaptable`, si ya elegiste un mes el texto lo nombra.
// `claro` lo pinta blanco con texto azul para usarlo sobre el bloque azul del cierre.
export default function BotonCotizar({
  zona,
  texto = "Cotizar mi viaje por WhatsApp",
  adaptable = false,
  compacto = false,
  claro = false,
  className = "",
}: {
  zona: string;
  texto?: string;
  adaptable?: boolean;
  compacto?: boolean;
  claro?: boolean;
  className?: string;
}) {
  const href = useEnlaceWhatsApp(zona);
  const { mes } = useCotizador();
  const etiqueta = adaptable && mes ? `Cotizar mi viaje de ${mes.split(" ")[0].toLowerCase()}` : texto;
  const tamano = compacto ? "min-h-[44px] px-5 text-sm" : "min-h-[56px] px-7 text-base";
  const color = claro
    ? `${estilos.botonClaro} bg-white text-[#2563eb] shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)] hover:bg-slate-50`
    : "bg-[#16a34a] text-white shadow-[0_10px_22px_-10px_rgba(22,163,74,0.75)] hover:bg-[#15803d]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${estilos.boton} ${color} group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a43] ${tamano} ${className}`}
    >
      <WhatsAppIcon size={compacto ? 18 : 22} />
      {etiqueta}
    </a>
  );
}
