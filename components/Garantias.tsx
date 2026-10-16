export default function Garantias() {
  const ITEMS = [
    {
      titulo: "Separa con el 50%",
      sub: "Paga el saldo antes de viajar",
      icon: "💳",
    },
    {
      titulo: "RUC 20614914239 Formal",
      sub: "Oficina física en Los Olivos",
      icon: "🏢",
    },
    {
      titulo: "Resorts 4★ y 5★ Reales",
      sub: "Todo Incluido garantizado",
      icon: "🏖️",
    },
    {
      titulo: "Seguro Médico de Viaje",
      sub: "Cobertura Schengen 30.000€",
      icon: "🛡️",
    },
    {
      titulo: "Atención 1 a 1 en 2 min",
      sub: "Por WhatsApp con asesores",
      icon: "⚡",
    },
  ];

  return (
    <div className="bg-[#0a1628] py-8 border-y border-white/10 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
        {ITEMS.map((item) => (
          <div key={item.titulo} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-3.5 backdrop-blur-sm">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <strong className="block text-xs sm:text-[13px] font-bold text-white leading-tight">
                {item.titulo}
              </strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
