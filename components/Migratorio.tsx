"use client";

import Image from "next/image";
import { buildWaUrl, PRECIO_DESDE_EUROPA } from "@/components/constantes";
import PlaneIcon from "@/components/icons/PlaneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

const REQUISITOS_EUROPA = [
  {
    titulo: "Boleto Aéreo Confirmado",
    desc: "Emisión formal con aerolíneas IATA (Iberia, Air Europa, LATAM) con equipaje.",
    icon: <PlaneIcon className="w-5 h-5 fill-none stroke-current stroke-2 text-red-600" />,
  },
  {
    titulo: "Seguro Schengen 30.000€",
    desc: "Póliza médica internacional obligatoria exigida por el control migratorio de la Unión Europea.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-emerald-600">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    titulo: "Sustento de Hospedaje",
    desc: "Voucher de reserva de hotel confirmado o asesoría para carta de invitación formal.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-blue-600">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/>
      </svg>
    ),
  },
  {
    titulo: "Asesoría Migratoria 1 a 1",
    desc: "Guía completa de preguntas en aeropuerto Barajas/Roma, fondos económicos y documentos.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-amber-600">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
];

export default function Migratorio() {
  const waUrlEuropa = buildWaUrl({
    categoria: "europa",
    destino: "España / Madrid",
    tipo: "Paquete Europa / Migratorio",
    precioUSD: PRECIO_DESDE_EUROPA,
    mensajePersonalizado: `¡Hola Cityland Travel! Me interesa el plan de viaje a España/Europa desde $${PRECIO_DESDE_EUROPA} USD. Deseo información de requisitos, seguro Schengen de 30.000€ y cómo separar con el 50% de inicial.`,
  });

  return (
    <section id="migra" className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Mensaje Especializado Europa */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 mb-4">
              <FlagIcon pais="España" className="w-4 h-2.5" />
              <span>Ruta Especializada · Asesor Exclusivo para Europa</span>
            </div>

            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-[0.98] mb-4">
              ESPECIAL ESPAÑA & EUROPA 2026:<br />
              <span className="text-red-600">VIAJA CON TODO REGULADO Y SIN RIESGOS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Viajar a Madrid, Barcelona o cualquier país del Espacio Schengen requiere cumplir estrictamente con los filtros de migraciones. En Cityland Travel gestionamos tu boleto, seguro médico obligatorio y documentación de respaldo para que abordes con absoluta seguridad.
            </p>

            {/* Bloque de Precio y Facilidad 50% */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block leading-tight">
                  TARIFA RUTA EUROPA
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold text-slate-500">DESDE</span>
                  <span className="text-3xl font-black text-[#0a1628]">
                    ${PRECIO_DESDE_EUROPA}
                  </span>
                  <span className="text-xs font-bold text-slate-500">USD</span>
                </div>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Separa con el 50% y cancela el saldo antes de volar
                </span>
              </div>

              <a
                href={waUrlEuropa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all shrink-0 cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Hablar con Asesor Europa</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Sin visa para peruanos (hasta 90 días)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Seguro válido en toda la UE
              </span>
            </div>
          </div>

          {/* Columna Derecha: Requisitos en Cuadrícula Limpia (Superficie blanca con bordes sutiles) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REQUISITOS_EUROPA.map((req) => (
                <div
                  key={req.titulo}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-3">
                    {req.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {req.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {req.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonio Rápido de Respaldo */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 text-xs text-slate-600">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                CM
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-slate-800 truncate">
                  &ldquo;Pasamos el control migratorio de Barajas en 5 minutos con la carpeta de Cityland.&rdquo;
                </p>
                <span className="text-[11px] text-slate-500">
                  Carlos & Mariana · Viajaron en 2026 · Asesoría Europa
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
