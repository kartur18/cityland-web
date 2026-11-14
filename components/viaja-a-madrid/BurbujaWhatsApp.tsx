"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

// Burbuja flotante de WhatsApp para pantallas grandes (en celular ya está la barra inferior).
export default function BurbujaWhatsApp() {
  const href = useEnlaceWhatsApp("Burbuja flotante");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className={`${estilos.pulso} fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-[#16a34a] px-5 py-3.5 text-sm font-extrabold text-white shadow-xl transition-transform hover:scale-105 md:inline-flex`}
    >
      <WhatsAppIcon size={24} />
      Cotiza por WhatsApp
    </a>
  );
}
