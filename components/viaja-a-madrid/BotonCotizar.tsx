"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCotizador, useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";

// Botón de WhatsApp de la landing. Con `adaptable`, si ya elegiste un mes el texto lo nombra («Cotizar mi viaje de mayo»).
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
  const tamano = compacto ? "min-h-[44px] px-5 text-sm" : "min-h-[56px] px-7 text-base";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#e30613] font-extrabold text-white transition-all duration-200 hover:bg-[#c40510] hover:shadow-[0_8px_24px_-8px_rgba(227,6,19,0.7)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${tamano} ${className}`}
    >
      <WhatsAppIcon size={20} />
      {etiqueta}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
