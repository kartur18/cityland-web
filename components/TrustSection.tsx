import AnimateOnScroll from "@/components/AnimateOnScroll";

const ITEMS = [
  { icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#0a1628] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, numero: "10+", titulo: "Años de experiencia", desc: "Desde 2015 conectando peruanos con el mundo." },
  { icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#0a1628] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>, numero: "4.9/5", titulo: "Rating en Google", desc: "+500 reseñas verificadas de clientes reales." },
  { icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#0a1628] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>, numero: "5,000+", titulo: "Viajes realizados", desc: "Miles de peruanos ya viajaron con nosotros." },
  { icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#0a1628] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, numero: "100%", titulo: "Seguro incluido", desc: "Todos los paquetes con cobertura médica." },
  { icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#0a1628] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"/></svg>, numero: "RUC", titulo: "Empresa formal", desc: "RUC 20614914239 — Registrada en SUNAT." },
  { icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#0a1628] stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>, numero: "6+", titulo: "Formas de pago", desc: "Yape, Plin, tarjeta, transferencia, cuotas." },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#dc2626] mb-3">Respaldo total</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(32px,5vw,48px)] text-[#0a1628] tracking-wide leading-none mb-3">¿POR QUÉ VOLAR CON NOSOTROS?</h2>
            <p className="text-[15px] text-gray-500 max-w-[500px] mx-auto">Servicio transparente, formal y garantizado</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <AnimateOnScroll key={item.titulo} stagger={Math.min(i + 1, 6)}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-50 transition-colors">
                  {item.icon}
                </div>
                <div className="font-[family-name:var(--font-bebas)] text-[32px] text-[#0a1628] tracking-wide leading-none mb-1">{item.numero}</div>
                <h3 className="text-[13px] font-semibold text-gray-700 mb-1">{item.titulo}</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
