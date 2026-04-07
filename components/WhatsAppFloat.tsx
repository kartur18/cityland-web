import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WA_LINK } from "@/components/constantes";

export default function WhatsAppFloat() {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-[998] bg-[#25D366] hover:bg-[#1fb855] text-white w-14 h-14 rounded-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40 transition-all max-md:hidden"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>

      {/* Mobile bottom bar */}
      <div className="hidden max-md:block fixed bottom-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-xl p-2.5 px-4 shadow-[0_-2px_16px_rgba(0,0,0,.06)] border-t border-gray-100">
        <div className="flex gap-2 items-center">
          <div className="flex-1 min-w-0">
            <strong className="text-[12px] text-[#0a1628] block font-semibold">Desde $749 · Cotiza gratis</strong>
            <span className="text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Asesores disponibles
            </span>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener" className="shrink-0 inline-flex items-center gap-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors">
            <WhatsAppIcon size={14} />
            Cotizar
          </a>
        </div>
      </div>
    </>
  );
}
