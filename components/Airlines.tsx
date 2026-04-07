import Image from "next/image";

const AEROLINEAS = [
  { nombre: "LATAM", logo: "https://logo.clearbit.com/latam.com", color: "#e3000f" },
  { nombre: "Iberia", logo: "https://logo.clearbit.com/iberia.com", color: "#c8102e" },
  { nombre: "Avianca", logo: "https://logo.clearbit.com/avianca.com", color: "#b01116" },
  { nombre: "Copa Airlines", logo: "https://logo.clearbit.com/copaair.com", color: "#003087" },
  { nombre: "Air Europa", logo: "https://logo.clearbit.com/aireuropa.com", color: "#da291c" },
  { nombre: "American Airlines", logo: "https://logo.clearbit.com/aa.com", color: "#004989" },
  { nombre: "KLM", logo: "https://logo.clearbit.com/klm.com", color: "#00a1de" },
  { nombre: "Lufthansa", logo: "https://logo.clearbit.com/lufthansa.com", color: "#05164d" },
  { nombre: "Air France", logo: "https://logo.clearbit.com/airfrance.com", color: "#002157" },
  { nombre: "Turkish Airlines", logo: "https://logo.clearbit.com/turkishairlines.com", color: "#c70a0a" },
  { nombre: "Sky Airline", logo: "https://logo.clearbit.com/skyairline.com", color: "#1a1a5e" },
  { nombre: "JetBlue", logo: "https://logo.clearbit.com/jetblue.com", color: "#003876" },
];

function AirlineCard({ a }: { a: typeof AEROLINEAS[number] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,.10)] hover:border-gray-200 transition-all duration-200 group">
      <div className="relative w-7 h-7 flex-shrink-0">
        <Image
          src={a.logo}
          alt={`Logo ${a.nombre}`}
          fill
          className="object-contain"
          unoptimized
          onError={() => {}}
        />
      </div>
      <span className="text-[13px] font-bold text-[#0c3265] whitespace-nowrap">{a.nombre}</span>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const animClass = reverse
    ? "animate-[marquee-reverse_35s_linear_infinite]"
    : "animate-[marquee_35s_linear_infinite]";
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex shrink-0 gap-3 ${animClass}`}>
        {[...AEROLINEAS, ...AEROLINEAS].map((a, i) => (
          <AirlineCard key={`${a.nombre}-${i}`} a={a} />
        ))}
      </div>
    </div>
  );
}

export default function Airlines() {
  return (
    <div className="bg-[#f8fafc] py-12 border-b border-black/6">
      <div className="max-w-[1200px] mx-auto px-5 mb-6 text-center">
        <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-[#64748b]">
          Volamos con las mejores aerolíneas del mundo
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
