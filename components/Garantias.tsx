const ITEMS = [
  { titulo: "Respuesta en 2 horas", sub: "Cotización gratis por WhatsApp", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { titulo: "Mejor precio garantizado", sub: "Competimos con cualquier precio", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { titulo: "Seguro incluido", sub: "Cobertura médica completa", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { titulo: "Paga como quieras", sub: "Cuotas, Yape, Plin, tarjeta", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { titulo: "Soporte 24/7", sub: "Antes, durante y después", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.91.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
];

export default function Garantias() {
  return (
    <div className="bg-[#0a1628] py-8 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {ITEMS.map((item) => (
          <div key={item.titulo} className="flex items-center gap-3">
            <div className="text-white/30 shrink-0">{item.icon}</div>
            <div>
              <strong className="block text-[12px] font-semibold text-white/90 leading-tight">{item.titulo}</strong>
              <span className="text-[11px] text-white/40 leading-tight">{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
