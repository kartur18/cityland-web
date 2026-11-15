"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useCtaVisible } from "@/components/viaja-a-madrid/CtaVisible";
import { useEnlaceWhatsApp } from "@/components/viaja-a-madrid/CotizadorContexto";
import { evento } from "@/lib/analitica-landing";

// Barra fija solo en celular, discreta y con una sola acción. Respeta el área segura del teléfono y se esconde cuando
// el botón principal del cotizador o del cierre ya está a la vista, para no poner dos botones verdes juntos.
export default function BarraMovil() {
  const href = useEnlaceWhatsApp("Barra móvil");
  const ocultar = useCtaVisible();
  return (
    <div
      aria-hidden={ocultar || undefined}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 pt-2.5 pb-[max(10px,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        ocultar ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={ocultar ? -1 : undefined}
        onClick={() => evento("whatsapp_click", { zona: "Barra móvil" })}
        className="mx-auto flex min-h-[48px] max-w-md items-center justify-center gap-2.5 rounded-xl bg-[#16a34a] px-4 text-[15px] font-bold text-white active:scale-[0.98]"
      >
        <WhatsAppIcon size={20} />
        Cotizar por WhatsApp
      </a>
    </div>
  );
}
