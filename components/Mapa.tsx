import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink } from "@/components/constantes";

export default function Mapa() {
  return (
    <section className="bg-white py-20" id="ubicacion">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#dc2626] mb-3">Visítanos</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0a1628] tracking-wide leading-none">NUESTRA OFICINA EN LIMA</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-6">Cityland Travel — Los Olivos</h3>
              {[
                { titulo: "Dirección", sub: "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, bg: "bg-blue-50 text-blue-500" },
                { titulo: "Teléfono / WhatsApp", sub: "+51 941 551 530", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.91.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, bg: "bg-emerald-50 text-emerald-500", link: "tel:+51941551530" },
                { titulo: "Horario de atención", sub: "Lunes a Sábado: 9:00 AM – 7:00 PM", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, bg: "bg-amber-50 text-amber-500" },
                { titulo: "RUC", sub: "20614914239", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/></svg>, bg: "bg-red-50 text-red-500" },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>{item.icon}</div>
                  <div>
                    <strong className="block text-[13px] font-semibold text-[#0a1628]">{item.titulo}</strong>
                    {item.link ? <a href={item.link} className="text-[13px] text-emerald-600 font-medium hover:underline">{item.sub}</a> : <span className="text-[13px] text-gray-500">{item.sub}</span>}
                  </div>
                </div>
              ))}
              <a href={waLink("Hola, quiero visitar su oficina")} target="_blank" rel="noopener" className="btn-hover inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-xl text-[13px] font-bold shadow-lg shadow-red-600/15 transition-all mt-4">
                Agendar visita por WhatsApp
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 min-h-[350px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5!2d-77.0642!3d-11.9556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU3JzIwLjIiUyA3N8KwMDMnNTEuMSJX!5e0!3m2!1ses!2spe!4v1" width="100%" height="100%" style={{border:0,minHeight:350}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Cityland Travel Los Olivos Lima"/>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
