import AnimateOnScroll from "@/components/AnimateOnScroll";

const SERVICIOS = [
  { icono: "✈️", titulo: "Vuelos internacionales", desc: "LATAM, Iberia, Copa, Avianca y más. Ida y vuelta, solo ida o multidestino a los mejores precios.", color: "border-t-[#1a4a8a]", bg: "bg-blue-50" },
  { icono: "🌴", titulo: "Paquetes todo incluido", desc: "Vuelo + hotel + tours + seguro. Los mejores resorts all-inclusive del Caribe.", color: "border-t-[#059669]", bg: "bg-emerald-50" },
  { icono: "📄", titulo: "Paquetes migratorios", desc: "Boleto, seguro Schengen, retorno flexible y documentación completa desde $799.", color: "border-t-[#d30000]", bg: "bg-red-50" },
  { icono: "🏰", titulo: "Circuitos por Europa", desc: "España, Italia, Francia e Inglaterra. Rutas personalizadas con hoteles seleccionados.", color: "border-t-[#6366F1]", bg: "bg-indigo-50" },
  { icono: "🛡️", titulo: "Seguros de viaje", desc: "Assist Card y Travel Ace. Cobertura médica, cancelación y equipaje.", color: "border-t-[#F59E0B]", bg: "bg-amber-50" },
  { icono: "💳", titulo: "Facilidades de pago", desc: "Cuotas sin interés, transferencia, Yape, Plin o tarjeta de crédito/débito.", color: "border-t-[#A855F7]", bg: "bg-purple-50" },
];
export default function Servicios() {
  return (
    <section className="py-20" id="servicios">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-[#d30000] mb-2">Servicios</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0c3265] tracking-wide leading-none">TODO PARA TU VIAJE</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICIOS.map((s, index) => (
            <AnimateOnScroll key={s.titulo} stagger={index + 1}>
              <div className={`glass rounded-2xl p-7 border border-black/5 transition-all duration-300 border-t-3 ${s.color} shadow-[0_4px_24px_rgba(12,27,58,.05)] hover:shadow-[0_16px_40px_rgba(12,27,58,.08)] hover:-translate-y-1 group`}>
                <div className={`w-[50px] h-[50px] rounded-xl ${s.bg} flex items-center justify-center text-[22px] mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-5`}>{s.icono}</div>
                <h3 className="text-[15px] font-extrabold text-[#0c3265] mb-1.5">{s.titulo}</h3>
                <p className="text-[13.5px] text-[#64748b] leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
