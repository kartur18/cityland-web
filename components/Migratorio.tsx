import { waLink } from "@/components/constantes";

const items = [
  { icono: "✈️", titulo: "Boleto aéreo", desc: "Ida y vuelta con aerolíneas de primera" },
  { icono: "🏨", titulo: "Hotel tránsito", desc: "Alojamiento incluido en escalas" },
  { icono: "🛡️", titulo: "Seguro Schengen", desc: "Cobertura médica internacional" },
  { icono: "🔄", titulo: "Retorno flexible", desc: "Cambia tu fecha de regreso sin costo" },
  { icono: "📋", titulo: "Documentación", desc: "Asesoría completa con tus papeles" },
  { icono: "📞", titulo: "Asesoría 24/7", desc: "Soporte antes, durante y después" },
];

export default function Migratorio() {
  return (
    <section id="migra" className="py-20 bg-gradient-to-br from-[#0D1F3C] via-[#1A2E5A] to-[#152040] text-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-300 text-[12px] font-bold tracking-wide uppercase mb-5">
            🇪🇸 El más vendido
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] tracking-wide leading-tight mb-5">
            PAQUETE MIGRATORIO<br/>DESDE <span className="text-amber-300">$799</span>
          </h2>
          <p className="text-[16px] text-white/75 leading-relaxed mb-4">
            Todo lo que necesitas para emigrar a Europa de forma segura y organizada. Nuestro paquete más completo incluye vuelo, hotel de tránsito, seguro y asesoría personalizada.
          </p>
          <p className="text-[16px] text-white/75 leading-relaxed mb-8">
            Más de 3,000 peruanos ya viajaron con nosotros. Sin visa requerida para zona Schengen con pasaporte peruano.
          </p>
          <a href={waLink("Quiero info del paquete migratorio $799")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-to-br from-amber-400 to-amber-500 text-[#0D1F3C] px-8 py-4 rounded-full text-[15px] font-extrabold shadow-[0_6px_28px_rgba(245,158,11,.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(245,158,11,.55)] transition">
            Cotizar paquete migratorio →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.titulo} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border-l-4 border-amber-300 hover:bg-white/15 transition">
              <span className="text-[28px] block mb-2">{item.icono}</span>
              <h3 className="text-[15px] font-bold text-white mb-1">{item.titulo}</h3>
              <p className="text-[12px] text-white/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
