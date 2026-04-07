import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink } from "@/components/constantes";

const filas = [
  { concepto: "Migratorio Madrid", cityland: "$799", otros: "$1,200+" },
  { concepto: "Punta Cana", cityland: "$799", otros: "$1,100+" },
  { concepto: "Cotización", cityland: "Gratis", otros: "Cobran" },
  { concepto: "Respuesta", cityland: "2 horas", otros: "24-48h" },
  { concepto: "Seguro", cityland: "Incluido", otros: "Extra" },
  { concepto: "Pago cuotas", cityland: "Sí", otros: "Solo contado" },
  { concepto: "Yape/Plin", cityland: "Sí", otros: "No" },
  { concepto: "Soporte 24/7", cityland: "Sí", otros: "Solo horario" },
];

export default function Comparador() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">Comparador</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0a1628] tracking-wide leading-tight">¿POR QUÉ ELEGIRNOS?</h2>
            <p className="text-[15px] text-gray-500 mt-2 max-w-[500px] mx-auto">Compara nuestros precios y servicios con otras agencias</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
          <AnimateOnScroll direction="left">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a1628]">
                    <th className="text-left px-5 py-3 text-[12px] font-semibold text-white/70 uppercase tracking-wider">Concepto</th>
                    <th className="text-center px-5 py-3 text-[12px] font-semibold text-white uppercase tracking-wider">Cityland</th>
                    <th className="text-center px-5 py-3 text-[12px] font-semibold text-white/50 uppercase tracking-wider">Otros</th>
                  </tr>
                </thead>
                <tbody>
                  {filas.map((f, i) => (
                    <tr key={f.concepto} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-5 py-3 text-[13px] font-medium text-[#0a1628]">{f.concepto}</td>
                      <td className="px-5 py-3 text-center">
                        <span className="text-[13px] font-semibold text-emerald-600 inline-flex items-center gap-1">
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          {f.cityland}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-center text-[13px] text-gray-400">{f.otros}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-amber-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-[24px] font-bold text-[#0a1628] mb-2">Ahorra hasta $400</h3>
              <p className="text-[13px] text-gray-500 mb-6">en tu paquete migratorio o turístico vs. otras agencias</p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                <p className="text-[12px] font-semibold text-[#0a1628] mb-1 flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-emerald-500 stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Garantía de mejor precio
                </p>
                <p className="text-[11px] text-gray-500">Si encuentras un precio menor, lo igualamos</p>
              </div>
              <a href={waLink("Quiero comparar precios")} target="_blank" rel="noopener" className="w-full py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 transition-colors">
                Comparar mi cotización
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
