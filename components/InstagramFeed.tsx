import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const fotos = [
  { img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80", ciudad: "Madrid" },
  { img: "https://images.unsplash.com/photo-1619680939776-4eadd78709a4?w=600&q=80", ciudad: "Punta Cana" },
  { img: "https://images.unsplash.com/photo-1534035265253-afe22046ba98?w=600&q=80", ciudad: "Cartagena" },
  { img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&q=80", ciudad: "Roma" },
  { img: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80", ciudad: "Río de Janeiro" },
  { img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80", ciudad: "Cancún" },
];

function InstagramIcon({ className = "w-8 h-8 fill-white/80 group-hover:fill-white transition-colors" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  );
}

export default function InstagramFeed() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl lg:text-5xl text-[#0a1628] tracking-wide">
              Síguenos en Instagram
            </h2>
            <a
              href="https://instagram.com/citylandtravel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#dc2626] font-semibold text-lg hover:underline"
            >
              @citylandtravel
            </a>
          </div>
        </AnimateOnScroll>

        {/* Grid: horizontal scroll on mobile, 2x3 on sm, 3x2 on lg */}
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
          {fotos.map((foto, i) => (
            <AnimateOnScroll key={foto.ciudad} direction="scale" stagger={i + 1}>
              <div className="group relative min-w-[220px] sm:min-w-0 aspect-square rounded-xl overflow-hidden cursor-pointer card-lift">
                <Image src={foto.img} alt={`${foto.ciudad} - Cityland Travel`} fill sizes="(max-width:640px) 220px, (max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-[13px] font-bold drop-shadow-sm">{foto.ciudad}</span>
                <div className="absolute top-3 right-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  <InstagramIcon className="w-5 h-5 fill-white drop-shadow-sm" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up">
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/citylandtravel"
              target="_blank"
              rel="noopener noreferrer"
              className="grad-warm glow-warm inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl text-[14px] font-bold shadow-sm transition-all btn-hover"
            >
              <InstagramIcon className="w-5 h-5 fill-white" />
              Seguir en Instagram
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
