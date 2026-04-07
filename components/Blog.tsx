import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { WA_LINK } from "@/components/constantes";

const posts = [
  {
    titulo: "Guía completa para emigrar a España desde Perú",
    desc: "Todo lo que necesitas saber: documentos, costos, requisitos y consejos prácticos.",
    categoria: "Migración",
    catColor: "bg-red-500",
    fecha: "15 Mar 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
  },
  {
    titulo: "Top 5 resorts todo incluido en Punta Cana 2026",
    desc: "Los mejores hoteles all-inclusive con playa privada y actividades familiares.",
    categoria: "Destinos",
    catColor: "bg-amber-500",
    fecha: "8 Mar 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
  },
  {
    titulo: "Migratorio vs turístico: ¿cuál necesitas?",
    desc: "Diferencias clave entre ambos paquetes para que elijas el correcto.",
    categoria: "Guía",
    catColor: "bg-[#0a1628]",
    fecha: "1 Mar 2026",
    lectura: "3 min",
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">Blog</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0a1628] tracking-wide leading-tight">
              Guías y Consejos de Viaje
            </h2>
            <p className="text-[14px] text-gray-500 mt-2 max-w-[450px] mx-auto">
              Artículos de expertos para que viajes mejor informado
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, index) => (
            <AnimateOnScroll key={p.titulo} stagger={index + 1}>
              <div className="card-lift bg-white rounded-xl overflow-hidden border border-gray-100 group flex flex-col h-full">
                <div className="relative h-[190px] overflow-hidden flex-shrink-0">
                  <Image
                    src={p.imagen}
                    alt={p.titulo}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-white ${p.catColor}`}>
                    {p.categoria}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-3">
                    <span>{p.fecha}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{p.lectura} lectura</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0a1628] mb-2 leading-snug flex-1">
                    {p.titulo}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{p.desc}</p>

                  <a
                    href="#blog"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc2626] hover:gap-2.5 transition-all mt-auto group/link"
                  >
                    Leer más
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform group-hover/link:translate-x-0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
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
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-400 hover:text-[#0a1628] transition-colors"
          >
            Consultar más temas por WhatsApp
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
