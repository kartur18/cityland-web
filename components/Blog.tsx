import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink, WA_LINK } from "@/components/constantes";

const posts = [
  {
    titulo: "Guía completa para emigrar a España desde Perú",
    desc: "Todo lo que necesitas saber: documentos, costos, requisitos y consejos de quienes ya lo lograron.",
    categoria: "Migración",
    catColor: "bg-[#d30000] text-white",
    fecha: "15 Mar 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
  },
  {
    titulo: "Top 5 resorts todo incluido en Punta Cana para el 2026",
    desc: "Los mejores hoteles all-inclusive con playa privada, spa y actividades para toda la familia.",
    categoria: "Destinos",
    catColor: "bg-amber-500 text-white",
    fecha: "8 Mar 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
  },
  {
    titulo: "Migratorio vs turístico: ¿cuál necesitas para viajar?",
    desc: "Diferencias clave entre ambos paquetes para que elijas el que mejor se adapta a tu situación.",
    categoria: "Tips de viaje",
    catColor: "bg-[#0c3265] text-white",
    fecha: "1 Mar 2026",
    lectura: "3 min",
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#d30000] mb-2">Blog</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0c3265] tracking-wide leading-tight">
              Guías y Consejos de Viaje
            </h2>
            <p className="text-[15px] text-[#64748b] mt-3 max-w-[500px] mx-auto">
              Artículos de expertos para que viajes mejor informado
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, index) => (
            <AnimateOnScroll key={p.titulo} stagger={index + 1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,.07)] hover:shadow-[0_16px_48px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-1.5 group border border-gray-100 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden flex-shrink-0">
                  <Image
                    src={p.imagen}
                    alt={p.titulo}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${p.catColor}`}>
                    {p.categoria}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[11px] text-[#64748b] mb-3">
                    <span>📅 {p.fecha}</span>
                    <span>·</span>
                    <span>⏱ {p.lectura} lectura</span>
                  </div>
                  <h3 className="text-[15px] font-extrabold text-[#0c3265] mb-2 leading-snug flex-1">
                    {p.titulo}
                  </h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed mb-4">{p.desc}</p>

                  {/* CTA */}
                  <a
                    href="#blog"
                    className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-[#d30000] hover:gap-2.5 transition-all duration-150 mt-auto"
                  >
                    Leer más <span>→</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#64748b] hover:text-[#0c3265] transition-colors"
          >
            💬 Consultar más temas por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
