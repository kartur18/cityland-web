// Solo datos comprobables: nada de años, viajeros ni calificaciones que no se puedan sustentar.
export default function ProofBar() {
  const ITEMS = [
    { valor: "2 OFICINAS", label: "Atención presencial en Los Olivos" },
    { valor: "SEPARA CON 50%", label: "El saldo lo pagas antes de viajar" },
    { valor: "BOLETA O FACTURA", label: "Comprobante electrónico SUNAT" },
    { valor: "RUC 20614914239", label: "Cityland Group E.I.R.L." },
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
