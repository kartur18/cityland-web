const AEROLINEAS = ["LATAM","Iberia","Copa Airlines","Avianca","Air Europa","American Airlines","JetBlue","Sky Airline","KLM","Lufthansa"];
export default function Airlines() {
  return (
    <div className="bg-white py-9 border-b border-black/6">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-[11px] font-extrabold tracking-widest uppercase text-[#4B5680] text-center mb-4">Volamos con las mejores aerolíneas</p>
        <div className="flex flex-wrap justify-center gap-2">
          {AEROLINEAS.map((a) => (<span key={a} className="bg-[#F4F6FB] px-4.5 py-2 rounded-full text-xs font-bold text-[#0D1F3C] border border-black/6 hover:border-[#0D1F3C] hover:bg-blue-50 transition cursor-default">{a}</span>))}
        </div>
      </div>
    </div>
  );
}
