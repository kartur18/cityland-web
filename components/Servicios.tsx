import AnimateOnScroll from "@/components/AnimateOnScroll";

const SERVICIOS = [
  { titulo: "Vuelos internacionales", desc: "LATAM, Iberia, Copa, Avianca y más. Ida y vuelta, solo ida o multidestino.", color: "bg-blue-500", bg: "bg-blue-50", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-blue-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg> },
  { titulo: "Paquetes todo incluido", desc: "Vuelo + hotel + tours + seguro. Los mejores resorts all-inclusive.", color: "bg-emerald-500", bg: "bg-emerald-50", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-emerald-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"/></svg> },
  { titulo: "Paquetes migratorios", desc: "Boleto, seguro Schengen, retorno flexible y documentación desde $799.", color: "bg-red-500", bg: "bg-red-50", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-red-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
  { titulo: "Circuitos por Europa", desc: "España, Italia, Francia e Inglaterra. Rutas personalizadas.", color: "bg-indigo-500", bg: "bg-indigo-50", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-indigo-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { titulo: "Seguros de viaje", desc: "Assist Card y Travel Ace. Cobertura médica y cancelación.", color: "bg-amber-500", bg: "bg-amber-50", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-amber-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { titulo: "Facilidades de pago", desc: "Cuotas sin interés, Yape, Plin o tarjeta de crédito/débito.", color: "bg-purple-500", bg: "bg-purple-50", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-purple-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
];

export default function Servicios() {
  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#dc2626] mb-3">Servicios</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0a1628] tracking-wide leading-none">TODO PARA TU VIAJE</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICIOS.map((s, index) => (
            <AnimateOnScroll key={s.titulo} stagger={index + 1}>
              <div className="rounded-xl p-6 border border-gray-100 bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,.06)] transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  {s.icon}
                </div>
                <h3 className="text-[15px] font-bold text-[#0a1628] mb-1.5">{s.titulo}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
