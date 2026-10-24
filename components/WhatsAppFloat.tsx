"use client";

import { usePathname } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { NUMERO_WHATSAPP_OFICIAL } from "@/components/constantes";

export default function WhatsAppFloat() {
  const pathname = usePathname() || "/";
  const mensaje = `¡Hola Cityland Travel! Vi su página web y deseo cotizar paquetes y vuelos con un asesor.\n\n📍 Ref Web: citylandtravel.com${pathname} [Botón Flotante]`;
  const hrefDinamico = `https://wa.me/${NUMERO_WHATSAPP_OFICIAL}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <>
      {/* Desktop floating button */}
      <aside
        aria-label="Contacto directo por WhatsApp"
        className="fixed bottom-6 right-6 z-[998] flex items-center gap-3 max-md:hidden group"
      >
        <div className="bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 group-hover:scale-105 transition-transform">
          <span>
            Cotiza por WhatsApp · <strong>Separa con 50%</strong>
          </span>
        </div>
        <a
          href={hrefDinamico}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1fb855] text-white w-14 h-14 rounded-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40 transition-all cursor-pointer"
          aria-label="Contactar por WhatsApp a Cityland Travel"
        >
          <WhatsAppIcon size={26} />
        </a>
      </aside>

      {/* Espaciador para que la barra móvil no tape el pie */}
      <div className="h-16 md:hidden" aria-hidden="true" />

      {/* Mobile bottom bar */}
      <aside
        aria-label="Barra de contacto móvil"
        className="hidden max-md:block fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl p-2.5 px-4 shadow-[0_-2px_16px_rgba(0,0,0,.08)] border-t border-slate-100"
      >
        <div className="flex gap-2 items-center">
          <div className="flex-1 min-w-0">
            <strong className="text-[12px] text-[#0a1628] block font-bold truncate">
              Separa tu paquete con 50%
            </strong>
            <span className="text-[10px] text-slate-500 flex items-center gap-1">
              Escríbenos y te cotizamos por WhatsApp
            </span>
          </div>
          <a
            href={hrefDinamico}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1fb855] text-white px-5 py-3 min-h-[44px] rounded-xl text-[13px] font-bold shadow-md shadow-emerald-500/20 transition-colors"
          >
            <WhatsAppIcon size={16} />
            Cotizar
          </a>
        </div>
      </aside>
    </>
  );
}
