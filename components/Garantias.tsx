"use client";

import { WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Garantias() {
  const PILARES = [
    {
      titulo: "Agencia Legalmente Formal",
      sub: "RUC 20614914239 con razón social Cityland Travel E.I.R.L. Emisión de boletas y facturas electrónicas SUNAT en cada reserva.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600 fill-none stroke-current stroke-2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      titulo: "Atención Presencial en Lima",
      sub: "Oficina física en Av. Antúnez de Mayolo N. 814, Los Olivos. Conoce a tu asesor en persona de lunes a sábado de 9am a 7pm.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 fill-none stroke-current stroke-2">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/>
        </svg>
      ),
    },
    {
      titulo: "Separa con el 50% de Inicial",
      sub: "Congela tarifas aéreas y cupos de hotel con el 50% de anticipo. Paga el saldo cómodamente antes de tu fecha de vuelo.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-600 fill-none stroke-current stroke-2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
    },
    {
      titulo: "Especialista Asignado por Ruta",
      sub: "Tu viaje es atendido por un asesor exclusivo según tu destino (Europa, Caribe o Vuelos), garantizando respuestas técnicas y rápidas.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-600 fill-none stroke-current stroke-2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="garantias" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado de Autoridad y Reducción de Riesgo */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            Garantías & Respaldo al Viajero
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-5xl text-[#0a1628] tracking-tight leading-none mb-3">
            VIAJA CON TOTAL SEGURIDAD Y TRANSPARENCIA
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            En Cityland Travel eliminamos la incertidumbre. Tu compra cuenta con respaldo jurídico formal, oficina física y condiciones claras sin letra chica.
          </p>
        </div>

        {/* 4 Pilares de Certeza (Diseño limpio, superficie clara y elegante) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PILARES.map((p) => (
            <div
              key={p.titulo}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center mb-4 shadow-2xs">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#0a1628] mb-2 leading-snug">
                  {p.titulo}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Llamado a la Acción de Confianza */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold leading-tight mb-1">
              ¿Deseas atención presencial o revisar tu contrato antes de pagar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Visítanos en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima o coordina una cita previa con tu asesor.
            </p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-500/25 transition-all shrink-0 cursor-pointer"
          >
            <WhatsAppIcon size={18} />
            <span>Agendar Asesoría por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
