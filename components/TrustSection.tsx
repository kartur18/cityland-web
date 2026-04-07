import AnimateOnScroll from "@/components/AnimateOnScroll";

const ITEMS = [
  { icono: "🏆", numero: "10+", titulo: "Años de experiencia", desc: "Desde 2015 conectando peruanos con el mundo", bg: "from-amber-500/20 to-amber-500/5" },
  { icono: "⭐", numero: "4.9/5", titulo: "Rating en Google", desc: "+500 reseñas verificadas de clientes reales", bg: "from-blue-500/20 to-blue-500/5" },
  { icono: "✈️", numero: "5,000+", titulo: "Viajes realizados", desc: "Miles de peruanos ya viajaron con nosotros", bg: "from-emerald-500/20 to-emerald-500/5" },
  { icono: "🛡️", numero: "100%", titulo: "Seguro incluido", desc: "Todos los paquetes con cobertura completa", bg: "from-purple-500/20 to-purple-500/5" },
  { icono: "🏢", numero: "RUC", titulo: "Empresa formal", desc: "RUC 20614914239 — Empresa registrada en SUNAT", bg: "from-red-500/20 to-red-500/5" },
  { icono: "💳", numero: "6+", titulo: "Formas de pago", desc: "Yape, Plin, tarjeta, transferencia, efectivo, cuotas", bg: "from-indigo-500/20 to-indigo-500/5" },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-[#FF4D2E] mb-2">Confianza garantizada</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0D1F3C] tracking-wide leading-none mb-2">¿POR QUÉ CONFIAR EN NOSOTROS?</h2>
            <p className="text-[15px] text-[#4B5680] leading-relaxed max-w-[540px] mx-auto">No somos una agencia más. Somos la agencia que más peruanos eligen para viajar al mundo.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <AnimateOnScroll key={item.titulo} stagger={Math.min(i + 1, 6)}>
              <div className={`glass gradient-border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,.08)] group`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center text-2xl mx-auto mb-3 transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                  {item.icono}
                </div>
                <div className="font-[family-name:var(--font-bebas)] text-[28px] text-[#0D1F3C] tracking-wide leading-none mb-1">{item.numero}</div>
                <h3 className="text-sm font-extrabold text-[#0D1F3C] mb-1">{item.titulo}</h3>
                <p className="text-xs text-[#4B5680] leading-relaxed">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
