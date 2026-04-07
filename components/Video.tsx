import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WA_LINK } from "@/components/constantes";

export default function Video() {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 flex flex-col lg:flex-row gap-14 items-center">
        <AnimateOnScroll direction="left">
          <div className="flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">Conócenos</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0a1628] tracking-wide leading-tight mb-5">CONOCE CITYLAND TRAVEL</h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              Somos la agencia de viajes líder en paquetes migratorios y turísticos para peruanos. Con más de 10 años de experiencia, hemos ayudado a miles de familias a cumplir su sueño de viajar.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {["Más de 5,000 viajes exitosos realizados","Equipo de asesores certificados 24/7","Garantía de mejor precio del mercado"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-emerald-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-[14px] text-[#0a1628] font-medium">{t}</span>
                </div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn-hover inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3.5 rounded-xl text-[14px] font-bold shadow-lg shadow-red-600/20 transition-all">
              <WhatsAppIcon size={16} />
              Hablar con un asesor
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div className="flex-1 max-w-[360px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,.15)] ring-1 ring-black/5" style={{ aspectRatio: "9/16" }}>
              <iframe
                src="https://player.vimeo.com/video/1174954461?autoplay=0&loop=1&background=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Cityland Travel"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
