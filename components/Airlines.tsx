"use client";

const AEROLINEAS = [
  "LATAM", "Iberia", "Avianca", "Copa Airlines", "Air Europa",
  "American Airlines", "KLM", "Lufthansa", "Air France",
  "Turkish Airlines", "Sky Airline", "JetBlue",
];

function AirlineChip({ nombre }: { nombre: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-100 rounded-lg px-5 py-3 hover:border-gray-200 hover:shadow-sm transition-all group">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 group-hover:text-[#0a1628] fill-current transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
      <span className="text-[13px] font-semibold text-gray-500 group-hover:text-[#0a1628] transition-colors whitespace-nowrap">{nombre}</span>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const animClass = reverse
    ? "animate-[marquee-reverse_40s_linear_infinite]"
    : "animate-[marquee_40s_linear_infinite]";
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex shrink-0 gap-3 ${animClass}`}>
        {[...AEROLINEAS, ...AEROLINEAS].map((a, i) => (
          <AirlineChip key={`${a}-${i}`} nombre={a} />
        ))}
      </div>
    </div>
  );
}

export default function Airlines() {
  return (
    <div className="bg-gray-50/50 py-10 border-y border-gray-100">
      <div className="max-w-[1100px] mx-auto px-5 mb-6 text-center">
        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-gray-400">
          Volamos con las mejores aerolíneas
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
