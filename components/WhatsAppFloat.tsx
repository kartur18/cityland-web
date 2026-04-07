import { WA_LINK, WA_SVG } from "@/components/constantes";

export default function WhatsAppFloat() {
  return (
    <>
      <a href={WA_LINK} target="_blank" rel="noopener" className="fixed bottom-6 right-6 z-[998] bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-[0_8px_32px_rgba(37,211,102,.5)] flex items-center gap-2 animate-[pulse_2.5s_infinite] hover:-translate-y-1 hover:scale-105 transition max-md:bottom-20" aria-label="Contactar por WhatsApp">
        <span dangerouslySetInnerHTML={{ __html: WA_SVG(22) }} />Escríbenos
      </a>
      <div className="hidden max-md:block fixed bottom-0 left-0 right-0 z-[999] bg-white p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,.1)] border-t border-black/6">
        <div className="flex gap-2 items-center">
          <div className="flex-1 min-w-0"><strong className="text-xs text-[#0D1F3C] block">Desde $749 · Cotiza GRATIS</strong><span className="text-[10px] text-[#4B5680]"><span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse mr-0.5"/>Asesores disponibles</span></div>
          <a href={WA_LINK} target="_blank" rel="noopener" className="shrink-0 inline-flex items-center gap-1.5 bg-gradient-to-br from-[#FF4D2E] to-[#FF6B4A] text-white px-5 py-3 rounded-full text-[13px] font-extrabold">WhatsApp</a>
        </div>
      </div>
    </>
  );
}
