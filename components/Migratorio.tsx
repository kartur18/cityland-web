import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink } from "@/components/constantes";

const items = [
  { icono: "✈️", titulo: "Boleto aéreo", desc: "Solo ida con aerolíneas de primera línea" },
  { icono: "🏨", titulo: "Hotel tránsito", desc: "Alojamiento incluido en escalas" },
  { icono: "🛡️", titulo: "Seguro Schengen", desc: "Cobertura médica internacional" },
  { icono: "🔄", titulo: "Retorno flexible", desc: "Cambia tu fecha de regreso sin costo" },
  { icono: "📋", titulo: "Documentación", desc: "Asesoría completa con tus papeles" },
  { icono: "📞", titulo: "Asesoría 24/7", desc: "Soporte antes, durante y después" },
];

export default function Migratorio() {
  return (
    <section id="migra" className="py-20 bg-[#001e43] text-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <AnimateOnScroll direction="left">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e3000f]/10 border border-[#e3000f]/30 px-4 py-1.5 rounded-full text-red-100 text-[12px] font-bold tracking-wide uppercase mb-5">
              🇪🇸 El más vendido
            </div>
            <h2 className="font-sans font-extrabold text-[clamp(36px,5vw,52px)] tracking-tight leading-tight mb-5">
              MIGRACIÓN EUROPA<br/>DESDE <span className="text-white bg-[#e3000f] px-2 py-0.5 rounded ml-1">$799</span>
            </h2>
            <p className="text-[16px] text-white/75 leading-relaxed mb-4">
              Todo lo que necesitas para emigrar a Europa de forma segura y organizada. Nuestro paquete más completo incluye vuelo, hotel de tránsito, seguro y asesoría personalizada.
            </p>
            <p className="text-[16px] text-white/75 leading-relaxed mb-8">
              Más de 3,000 peruanos ya viajaron con nosotros. Sin visa requerida para zona Schengen con pasaporte peruano.
            </p>
            <a href={waLink("Quiero info del paquete migratorio $799")} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-[#e3000f] hover:bg-[#b0000a] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold shadow-lg transition-colors">
              Explorar plan migratorio
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <AnimateOnScroll key={item.titulo} stagger={index + 1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border-l-4 border-[#e3000f] hover:bg-white/10 transition">
                  <span className="text-[28px] block mb-2">{item.icono}</span>
                  <h3 className="text-[15px] font-bold text-white mb-1">{item.titulo}</h3>
                  <p className="text-[12px] text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
