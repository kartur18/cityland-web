"use client";

export default function ProofBar() {
  const ITEMS = [
    { valor: "10+ AÑOS", label: "Trayectoria formal en Lima" },
    { valor: "5,000+", label: "Viajeros al Caribe y Europa" },
    { valor: "4.9 / 5.0 ★", label: "Calificación en Google (+500 reseñas)" },
    { valor: "RUC 20614914239", label: "Agencia Formal · Los Olivos, Lima" },
  ];

  return (
    <section
      aria-label="Respaldo oficial Cityland Travel"
      className="bg-white border-b border-slate-200/80 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-slate-200/80">
          {ITEMS.map((item, idx) => (
            <div
              key={item.valor}
              className={`text-center lg:text-left ${idx > 0 ? "lg:pl-8" : ""}`}
            >
              <div className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-[#0a1628] tracking-wide leading-none">
                {item.valor}
              </div>
              <p className="text-xs font-medium text-slate-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
