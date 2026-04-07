import { WA_LINK, WA_SVG } from "@/components/constantes";

export default function Video() {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FF4D2E] mb-2">CONÓCENOS</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0D1F3C] tracking-wide leading-tight mb-5">CONOCE CITYLAND TRAVEL</h2>
          <p className="text-[16px] text-[#4B5680] leading-relaxed mb-6">
            Somos la agencia de viajes líder en paquetes migratorios y turísticos para peruanos. Con más de 5 años de experiencia, hemos ayudado a miles de familias a cumplir su sueño de viajar.
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {["Más de 5,000 viajes exitosos realizados","Equipo de asesores certificados disponible 24/7","Garantía de mejor precio del mercado peruano"].map((t) => (
              <div key={t} className="flex items-start gap-2.5">
                <span className="text-[#059669] text-[18px] mt-0.5">✓</span>
                <span className="text-[15px] text-[#0D1F3C] font-medium">{t}</span>
              </div>
            ))}
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#FF4D2E] to-[#FF6B4A] text-white px-8 py-4 rounded-full text-[15px] font-extrabold shadow-[0_6px_28px_rgba(232,64,37,.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(232,64,37,.55)] transition">
            <span dangerouslySetInnerHTML={{ __html: WA_SVG(18) }} />Hablar con un asesor
          </a>
        </div>

        <div className="flex-1 max-w-[380px] w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.2)]" style={{ aspectRatio: "9/16" }}>
            <iframe
              src="https://player.vimeo.com/video/1174954461?autoplay=0&loop=1&background=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Cityland Travel"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
