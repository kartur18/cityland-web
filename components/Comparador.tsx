import AnimateOnScroll from "@/components/AnimateOnScroll";
import { waLink } from "@/components/constantes";

const filas = [
  { concepto: "Migratorio Madrid", cityland: "$799", otros: "$1,200+" },
  { concepto: "Punta Cana", cityland: "$799", otros: "$1,100+" },
  { concepto: "Cotización", cityland: "✓ Gratis", otros: "Cobran" },
  { concepto: "Respuesta", cityland: "✓ 2h", otros: "24-48h" },
  { concepto: "Seguro", cityland: "✓ Incluido", otros: "Extra" },
  { concepto: "Pago cuotas", cityland: "✓", otros: "Solo contado" },
  { concepto: "Yape/Plin", cityland: "✓", otros: "✗" },
  { concepto: "Soporte 24/7", cityland: "✓", otros: "Solo horario" },
];

export default function Comparador() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-amber-100/60 to-amber-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#FF4D2E] mb-2">COMPARADOR</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0D1F3C] tracking-wide leading-tight">¿POR QUÉ ELEGIRNOS?</h2>
            <p className="text-[16px] text-[#4B5680] mt-3 max-w-[600px] mx-auto">Compara nuestros precios y servicios con otras agencias</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <AnimateOnScroll direction="left">
            <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,.08)] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0D1F3C] text-white">
                    <th className="text-left px-5 py-3.5 text-[13px] font-bold">Concepto</th>
                    <th className="text-center px-5 py-3.5 text-[13px] font-bold">Cityland Travel</th>
                    <th className="text-center px-5 py-3.5 text-[13px] font-bold">Otras agencias</th>
                  </tr>
                </thead>
                <tbody>
                  {filas.map((f, i) => (
                    <tr key={f.concepto} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F6FB]"}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#0D1F3C]">{f.concepto}</td>
                      <td className="px-5 py-3 text-center text-[14px] font-bold text-[#059669]">{f.cityland}</td>
                      <td className="px-5 py-3 text-center text-[14px] text-[#4B5680]">{f.otros}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.1)] p-8 text-center">
              <span className="text-[48px] block mb-3">💰</span>
              <h3 className="text-[28px] font-extrabold text-[#0D1F3C] mb-2">AHORRA HASTA $400</h3>
              <p className="text-[14px] text-[#4B5680] mb-6">en tu paquete migratorio o turístico comparado con otras agencias del mercado</p>
              <div className="bg-[#F4F6FB] rounded-xl p-4 mb-6 border border-[#E8ECF4]">
                <p className="text-[13px] font-bold text-[#0D1F3C] mb-1">🛡️ Garantía de mejor precio</p>
                <p className="text-[12px] text-[#4B5680]">Si encuentras un precio menor, lo igualamos o te devolvemos la diferencia</p>
              </div>
              <a href={waLink("Quiero comparar precios")} target="_blank" rel="noopener" className="w-full py-3.5 bg-gradient-to-br from-[#FF4D2E] to-[#FF6B4A] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:shadow-lg transition">
                Comparar mi cotización →
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
