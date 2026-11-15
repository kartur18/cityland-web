"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCotizador, useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import { evento } from "@/lib/analitica-landing";

// Botón de WhatsApp de la landing. Etiqueta única: «Cotizar por WhatsApp». Variantes: verde (principal), oscuro (portada), borde (sección intermedia)
// y claro (blanco con texto azul, sobre el bloque azul del cierre).
// `data-cta-wa` marca los botones principales: la burbuja y la barra del celular se esconden cuando uno está a la vista.
export default function BotonCotizar({
  zona,
  texto = "Cotizar por WhatsApp",
  compacto = false,
  variante = "verde",
  principal = false,
  className = "",
}: {
  zona: string;
  texto?: string;
  compacto?: boolean;
  variante?: "verde" | "oscuro" | "borde" | "claro";
  principal?: boolean;
  className?: string;
}) {
  const href = useEnlaceWhatsApp(zona);
  const { mes, adultos, menores } = useCotizador();
  const tamano = compacto ? "min-h-[44px] px-5 text-sm" : "min-h-[56px] px-7 text-base";
  const COLORES = {
    verde: "bg-[#16a34a] text-white shadow-[0_8px_18px_-10px_rgba(22,163,74,0.8)] hover:bg-[#15803d]",
    oscuro: "bg-[#0a1628] text-white hover:bg-[#13294b]",
    borde: "border-[1.5px] border-[#0a1628] bg-white text-[#0a1628] hover:bg-[#0a1628] hover:text-white",
    claro: "bg-white text-[#2563eb] shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)] hover:bg-slate-50",
  } as const;
  const color = COLORES[variante];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-wa={principal ? "" : undefined}
      onClick={() => evento("whatsapp_click", { zona, mes: mes || "sin_elegir", adultos, menores })}
      className={`${color} inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-colors duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7a43] ${tamano} ${className}`}
    >
      <WhatsAppIcon size={compacto ? 18 : 22} />
      {texto}
    </a>
  );
}
