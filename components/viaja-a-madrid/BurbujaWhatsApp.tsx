"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCtaVisible } from "@/components/viaja-a-madrid/CtaVisible";
import { useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import { evento } from "@/lib/analitica-landing";

// Burbuja flotante de WhatsApp para pantallas grandes (en celular ya está la barra inferior). Se esconde cuando hay otro botón principal a la vista.
export default function BurbujaWhatsApp() {
  const href = useEnlaceWhatsApp("Burbuja flotante");
  const ocultar = useCtaVisible();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      tabIndex={ocultar ? -1 : undefined}
      aria-hidden={ocultar || undefined}
      onClick={() => evento("whatsapp_click", { zona: "Burbuja flotante" })}
      className={`fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-[#16a34a] px-5 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#15803d] md:inline-flex ${
        ocultar ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"
      }`}
    >
      <WhatsAppIcon size={22} />
      Cotizar por WhatsApp
    </a>
  );
}
