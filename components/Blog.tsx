import { waLink } from "@/components/constantes";

const posts = [
  {
    titulo: "Guía completa para emigrar a España desde Perú",
    desc: "Todo lo que necesitas saber: documentos, costos, requisitos y consejos de quienes ya lo lograron.",
    categoria: "Migración",
    catColor: "bg-[#FF4D2E]/90 text-white",
    fecha: "15 Mar 2026",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    titulo: "Top 5 resorts todo incluido en Punta Cana",
    desc: "Los mejores hoteles all-inclusive con playa privada, spa y actividades para toda la familia.",
    categoria: "Destinos",
    catColor: "bg-amber-400/95 text-gray-900",
    fecha: "8 Mar 2026",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
  },
  {
    titulo: "Migratorio vs turístico: ¿cuál necesitas?",
    desc: "Diferencias clave entre ambos paquetes para que elijas el que mejor se adapta a tu situación.",
    categoria: "Tips",
    catColor: "bg-blue-500/90 text-white",
    fecha: "1 Mar 2026",
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FF4D2E] mb-2">BLOG</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0D1F3C] tracking-wide leading-tight">GUÍAS Y CONSEJOS DE VIAJE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.titulo} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,.15)] hover:-translate-y-1 transition group">
              <div className="relative h-[200px] overflow-hidden">
                <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${p.catColor}`}>{p.categoria}</span>
              </div>
              <div className="p-5">
                <p className="text-[12px] text-[#4B5680] mb-2">{p.fecha}</p>
                <h3 className="text-[16px] font-bold text-[#0D1F3C] mb-2 leading-snug">{p.titulo}</h3>
                <p className="text-[13px] text-[#4B5680] leading-relaxed mb-4">{p.desc}</p>
                <a href={waLink(`Quiero info sobre: ${p.titulo}`)} target="_blank" rel="noopener" className="text-[13px] font-bold text-[#FF4D2E] hover:underline">
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
