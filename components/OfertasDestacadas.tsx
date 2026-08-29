import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CATALOGO_LINK, waLink } from "@/components/constantes";
import PlaneIcon from "@/components/icons/PlaneIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const OFERTAS = [
  {
    nombre: "Punta Cana",
    precio: 899,
    dias: 5,
    noches: 4,
    paises: 1,
    img: "https://viaje.b-cdn.net/megatravel-peru/2025/image/top10/699fa27460c43.jpg",
    href: "https://viaje-pe.vercel.app/citylandtravel/viaje/punta-cana-51008.html",
  },
  {
    nombre: "Mega Europa Fantástica",
    precio: 3399,
    dias: 17,
    noches: 15,
    paises: 4,
    img: "https://viaje.b-cdn.net/megatravel-peru/2025/image/top10/699fa14a183f9.jpg",
    href: "https://viaje-pe.vercel.app/citylandtravel/viaje/mega-europa-fantastica--con-plus-ultra-10112.html",
  },
  {
    nombre: "Turquía y Dubái",
    precio: 3599,
    dias: 17,
    noches: 15,
    paises: 2,
    img: "https://viaje.b-cdn.net/megatravel-peru/2025/image/top10/699fa20a47fe6.jpg",
    href: "https://viaje-pe.vercel.app/citylandtravel/viaje/turqua-y-dubi--via-madrid-20174.html",
  },
  {
    nombre: "Gran Triángulo Centroamericano",
    precio: 1699,
    dias: 8,
    noches: 7,
    paises: 3,
    img: "https://viaje.b-cdn.net/megatravel-peru/2025/image/top10/699fa238c7430.jpg",
    href: "https://viaje-pe.vercel.app/citylandtravel/viaje/gran-triangulo-centroamericano-50007.html",
  },
  {
    nombre: "Jamaica Vibrante",
    precio: 1699,
    dias: 5,
    noches: 4,
    paises: 1,
    img: "https://viaje.b-cdn.net/megatravel-peru/2025/image/top10/699fa2b0c5d49.jpg",
    href: "https://viaje-pe.vercel.app/citylandtravel/viaje/jamaica-vibrante-51026.html",
  },
  {
    nombre: "Iguazú & Río de Janeiro",
    precio: 1799,
    dias: 7,
    noches: 6,
    paises: 1,
    img: "https://viaje.b-cdn.net/megatravel-peru/2025/image/top10/699fa3687f7fa.jpg",
    href: "https://viaje-pe.vercel.app/citylandtravel/viaje/iguazu--rio-de-janeiro-52098.html",
  },
];

export default function OfertasDestacadas() {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">
              Salidas del mes
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,56px)] text-[#0a1628] tracking-wide leading-none mb-3">
              Ofertas que se están agotando
            </h2>
            <p className="text-[15px] text-gray-500 max-w-[480px] mx-auto">
              Selección de nuestros paquetes con mayor demanda este mes, vía nuestro operador Mega Traveler
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {OFERTAS.map((o, index) => (
            <AnimateOnScroll key={o.nombre} stagger={Math.min(index + 1, 6)}>
              <div className="relative card-lift card-lift-warm rounded-xl overflow-hidden bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,.05)] flex flex-col h-full">
                {/* Badge de separación */}
                <div className="absolute -top-2 -right-2 z-10 w-[62px] h-[62px] rounded-full grad-warm text-white flex flex-col items-center justify-center text-center leading-[1.1] shadow-lg border-2 border-white">
                  <span className="text-[7px] font-bold tracking-wide">SEPÁRALO</span>
                  <span className="text-[15px] font-extrabold">35%</span>
                </div>

                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <Image
                    src={o.img}
                    alt={`Paquete ${o.nombre} - Cityland Travel`}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="object-cover scale-[1.18]"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-[14px] font-bold text-[#0a1628] mb-1.5 leading-snug">{o.nombre}</h3>

                  {/* Info del paquete */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {o.dias}d / {o.noches}n
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      {o.paises} {o.paises === 1 ? "país" : "países"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <PlaneIcon className="w-3 h-3 fill-none stroke-current stroke-2" />
                      Incluye vuelo
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-400 mb-3">
                    Desde <span className="text-[16px] font-bold grad-warm-text">${o.precio.toLocaleString("es-PE")}</span> por persona
                  </p>
                  <a
                    href={waLink(`Hola Cityland Travel, quiero cotizar el paquete ${o.nombre} desde $${o.precio}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grad-warm glow-warm w-full inline-flex items-center justify-center gap-1.5 text-white py-2.5 rounded-lg text-[12px] font-semibold transition-all mb-2"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-[11px] font-semibold text-gray-400 hover:text-[#0a1628] transition-colors"
                  >
                    Ver itinerario completo
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-8">
            <p className="text-[11px] text-gray-400 mb-4">
              Precios y fechas sujetos a disponibilidad de nuestro operador. Cotiza para confirmar.
            </p>
            <a
              href={CATALOGO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0a1628] text-[13px] font-semibold border border-gray-200 px-6 py-2.5 rounded-lg hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all"
            >
              Ver catálogo completo de ofertas
              <ArrowRightIcon className="w-3.5 h-3.5 fill-none stroke-current stroke-2" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
