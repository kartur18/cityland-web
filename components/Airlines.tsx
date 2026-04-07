const AEROLINEAS = ["LATAM", "Iberia", "Copa Airlines", "Avianca", "Air Europa", "American Airlines", "JetBlue", "Sky Airline", "KLM", "Lufthansa", "Air France", "Turkish Airlines"];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const animClass = reverse ? "animate-[marquee-reverse_30s_linear_infinite]" : "animate-[marquee_30s_linear_infinite]";
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex shrink-0 gap-3 ${animClass}`}>
        {[...AEROLINEAS, ...AEROLINEAS].map((a, i) => (
          <span key={`${a}-${i}`} className="bg-[#F4F6FB] px-5 py-2.5 rounded-full text-xs font-bold text-[#0D1F3C] border border-black/6 whitespace-nowrap hover:border-[#0D1F3C] hover:bg-blue-50 transition">
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Airlines() {
  return (
    <div className="bg-white py-10 border-b border-black/6">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-[11px] font-extrabold tracking-widest uppercase text-[#4B5680] text-center mb-5">Volamos con las mejores aerolíneas del mundo</p>
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
