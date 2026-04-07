const ITEMS = [
  { icono: "⚡", titulo: "Respuesta en 2 horas", sub: "Cotización gratis por WhatsApp" },
  { icono: "💰", titulo: "Mejor precio garantizado", sub: "Competimos con cualquier precio" },
  { icono: "🛡️", titulo: "Seguro de viaje incluido", sub: "Cobertura médica completa" },
  { icono: "💳", titulo: "Paga como quieras", sub: "Cuotas, Yape, Plin, tarjeta" },
  { icono: "📞", titulo: "Soporte 24/7", sub: "Antes, durante y después" },
];
export default function Garantias() {
  return (
    <div className="bg-[#0c3265] py-9">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between gap-4 flex-wrap">
        {ITEMS.map((item) => (
          <div key={item.titulo} className="flex items-center gap-2.5 flex-1 min-w-0">
            <span className="text-[26px] shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">{item.icono}</span>
            <div><strong className="block text-[13px] font-extrabold text-white whitespace-nowrap">{item.titulo}</strong><span className="text-[11.5px] text-white/65 whitespace-nowrap">{item.sub}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
