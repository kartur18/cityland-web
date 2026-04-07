import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink } from "@/components/constantes";

export default function Mapa() {
  return (
    <section className="bg-white py-16" id="ubicacion">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-[#FF4D2E] mb-2">Visítanos</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0D1F3C] tracking-wide leading-none">NUESTRA OFICINA EN LIMA</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <h3 className="text-xl font-extrabold text-[#0D1F3C] mb-4">Cityland Travel — Los Olivos</h3>
              {[
                { icono: "📍", titulo: "Dirección", sub: "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima", bg: "bg-blue-50" },
                { icono: "📞", titulo: "Teléfono / WhatsApp", sub: "+51 941 551 530", bg: "bg-emerald-50", link: "tel:+51941551530" },
                { icono: "🕐", titulo: "Horario de atención", sub: "Lunes a Sábado: 9:00 AM – 7:00 PM", bg: "bg-amber-50" },
                { icono: "🏢", titulo: "RUC", sub: "20614914239", bg: "bg-red-50" },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center text-lg shrink-0`}>{item.icono}</div>
                  <div>
                    <strong className="block text-sm text-[#0D1F3C]">{item.titulo}</strong>
                    {item.link ? <a href={item.link} className="text-[13px] text-[#059669] font-semibold">{item.sub}</a> : <span className="text-[13px] text-[#4B5680]">{item.sub}</span>}
                  </div>
                </div>
              ))}
              <a href={waLink("Hola, quiero visitar su oficina")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#FF4D2E] to-[#FF6B4A] text-white px-7 py-3.5 rounded-full text-sm font-extrabold shadow-[0_6px_28px_rgba(232,64,37,.35)] hover:-translate-y-0.5 transition mt-5">Agendar visita por WhatsApp</a>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,.1)] min-h-[350px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5!2d-77.0642!3d-11.9556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU3JzIwLjIiUyA3N8KwMDMnNTEuMSJX!5e0!3m2!1ses!2spe!4v1" width="100%" height="100%" style={{border:0,minHeight:350}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Cityland Travel Los Olivos Lima"/>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
