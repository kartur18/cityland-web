"use client";

import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Garantias() {
  const PILARES = [
    {
      titulo: "Agencia Formal SUNAT",
      sub: "RUC 20614914239 · Cityland Travel E.I.R.L. Emisión de boleta o factura electrónica inmediata.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600 fill-none stroke-current stroke-2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      titulo: "Oficina Física en Lima",
      sub: "Av. Antúnez de Mayolo 814, Los Olivos. Atención de lunes a sábado de 9am a 7pm.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600 fill-none stroke-current stroke-2">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/>
        </svg>
      ),
    },
    {
      titulo: "Separa con 50% de Inicial",
      sub: "Congela tu tarifa hoy y paga el saldo restante antes de tu viaje sin intereses.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-600 fill-none stroke-current stroke-2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
    },
    {
      titulo: "Asesor Exclusivo por Ruta",
      sub: "Atención directa con el especialista de tu destino vía WhatsApp en menos de 2 minutos.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-none stroke-current stroke-2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="garantias" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado sin relleno */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            Garantías Cityland Travel
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
            VIAJA CON TOTAL SEGURIDAD Y TRANSPARENCIA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Respaldo formal SUNAT, oficina física en Lima y condiciones 100% transparentes.
          </p>
        </div>

        {/* 4 Pilares Limpios y Animados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILARES.map((p) => (
            <div
              key={p.titulo}
              className="card-interactive group bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:border-red-200 group-hover:bg-red-50/50 transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0a1628] mb-1.5 leading-snug group-hover:text-red-600 transition-colors">
                  {p.titulo}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
