"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCotizador, useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

// Botón de WhatsApp de la landing: verde WhatsApp con aro que late. Con `adaptable`, si ya elegiste un mes el texto lo nombra.
export default function BotonCotizar({
  zona,
  texto = "Cotizar mi viaje por WhatsApp",
  adaptable = false,
  compacto = false,
  className = "",
}: {
  zona: string;
  texto?: string;
  adaptable?: boolean;
  compacto?: boolean;
  className?: string;
}) {
  const href = useEnlaceWhatsApp(zona);
  const { mes } = useCotizador();
  const etiqueta = adaptable && mes ? `Cotizar mi viaje de ${mes.split(" ")[0].toLowerCase()} por WhatsApp` : texto;
  const tamano = compacto ? "min-h-[44px] px-5 text-sm" : "min-h-[58px] px-7 text-base";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${estilos.pulso} group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-[#1ebe5d] to-[#0b7a43] font-extrabold text-white transition-all duration-200 hover:from-[#25d366] hover:to-[#0e8f4e] hover:shadow-[0_10px_30px_-8px_rgba(14,143,78,0.8)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a43] ${tamano} ${className}`}
    >
      <WhatsAppIcon size={22} />
      {etiqueta}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
