const ITEMS = [
  { icono: "⚡", titulo: "Respuesta en 2 horas", sub: "Cotización gratis por WhatsApp" },
  { icono: "💰", titulo: "Mejor precio garantizado", sub: "Competimos con cualquier precio" },
  { icono: "🛡️", titulo: "Seguro de viaje incluido", sub: "Cobertura médica completa" },
  { icono: "💳", titulo: "Paga como quieras", sub: "Cuotas, Yape, Plin, tarjeta" },
  { icono: "📞", titulo: "Soporte 24/7", sub: "Antes, durante y después" },
];
export default function Garantias() {
  return (
    <div className="bg-[#0c3265] py-10">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {ITEMS.map((item) => (
          <div key={item.titulo} className="flex items-center gap-2.5">
            <span className="text-[24px] shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">{item.icono}</span>
            <div><strong className="block text-[12px] font-extrabold text-white leading-tight">{item.titulo}</strong><span className="text-[11px] text-white/65 leading-tight">{item.sub}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
