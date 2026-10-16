"use client";

import Image from "next/image";
import { buildWaUrl, WA_LINK, PRECIO_DESDE_CARIBE, PRECIO_DESDE_EUROPA } from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function Hero() {
  const waUrlPuntaCana = buildWaUrl({
    categoria: "caribe",
    destino: "Punta Cana All Inclusive",
    tipo: "Resort 5 Estrellas Frente al Mar",
    precioUSD: 949,
    mensajePersonalizado: "¡Hola Cityland Travel! Vi en su web oficial el paquete a Punta Cana All Inclusive desde $949 USD. Deseo consultar disponibilidad para mis fechas y separar con el 50% de inicial.",
  });

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-200 overflow-hidden">
      {/* Elementos decorativos sutiles de fondo (claros y luminosos) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Layout en 2 columnas: Espacioso, ordenado y sin saturación oscura */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje Comercial, Garantías y Acción */}
          <div className="lg:col-span-7 text-left">
            
            {/* Sello de Formalidad y Respaldo Legal (Técnica de Autoridad & Certidumbre) */}
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Agencia Formal Registrada · RUC: 20614914239 · Los Olivos, Lima</span>
            </div>

            {/* Título Principal de Alto Impacto */}
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-[#0a1628] tracking-tight leading-[0.98] mb-4">
              TU PRÓXIMO VIAJE AL CARIBE, EUROPA O EL MUNDO<br />
              <span className="text-red-600">CON TODO ORGANIZADO DESDE LIMA</span>
            </h1>

            {/* Propuesta de Valor y Reducción de Riesgo (Psicología de Compra) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl font-normal">
              Paquetes turísticos completos con vuelos de aerolíneas aliadas, resorts todo incluido frente al mar, traslados y seguro médico.{" "}
              <strong className="text-slate-900 font-bold">Separa tu cupo con el 50% de inicial</strong> y cancela el saldo restante antes de viajar.
            </p>

            {/* Botones de Conversión Inmediata */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all cursor-pointer"
              >
                <WhatsAppIcon size={20} />
                <span>Hablar con un asesor por WhatsApp</span>
              </a>

              <a
                href="#paquetes"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-4 rounded-xl text-sm sm:text-base font-bold transition-all shadow-xs hover:border-slate-400 cursor-pointer"
              >
                <span>Ver Paquetes 2026</span>
                <ArrowRightIcon className="w-4 h-4 fill-none stroke-current stroke-2" />
              </a>
            </div>

            {/* Pilares de Confianza y Transparencia (Sin cajas dentro de cajas ni emojis) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 fill-none stroke-current stroke-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <div>
                  <strong className="block text-slate-900 font-bold">Reserva con 50%</strong>
                  <span>Saldo antes de viajar</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 fill-none stroke-current stroke-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <strong className="block text-slate-900 font-bold">Oficina en Los Olivos</strong>
                  <span>Atención de Lun a Sáb</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 fill-none stroke-current stroke-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                <div>
                  <strong className="block text-slate-900 font-bold">Comprobante Formal</strong>
                  <span>Boleta y Factura SUNAT</span>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta de Presentación Premium y Limpia (Sin anidamientos excesivos) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              
              {/* Imagen Editorial del Destino Estrella */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80"
                  alt="Punta Cana All Inclusive - Cityland Travel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Etiquetas superiores */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    <FlagIcon pais="República Dominicana" className="w-4 h-2.5" />
                    Punta Cana · Caribe
                  </span>
                  <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Top Ventas 2026
                  </span>
                </div>

                {/* Información sobre la foto */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                    Paquete All Inclusive 5 Días / 4 Noches
                  </span>
                  <h3 className="text-2xl font-bold leading-tight drop-shadow-sm">
                    Resort 5★ Frente al Mar + Isla Saona
                  </h3>
                </div>
              </div>

              {/* Contenido comercial directo y claro */}
              <div className="p-6">
                
                {/* Beneficios reales incluidos */}
                <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Vuelo ida y vuelta desde Lima con equipaje</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Resort 5 Estrellas con comidas y bebidas ilimitadas 24h</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Tour en catamarán a Isla Saona con almuerzo en playa</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Traslados en destino y seguro médico internacional</span>
                  </div>
                </div>

                {/* Bloque de Precio y Condiciones */}
                <div className="pt-4 border-t border-slate-100 flex items-end justify-between mb-5">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block leading-none mb-1">
                      DESDE
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-[#0a1628] leading-none">
                        $949
                      </span>
                      <span className="text-sm font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      aprox. S/ 3,550 por persona en hab. doble
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      Separa con el 50%
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-1">
                      Saldo antes de viajar
                    </span>
                  </div>
                </div>

                {/* Botón de Cotización Directo */}
                <a
                  href={waUrlPuntaCana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-xl text-sm font-bold shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Cotizar Punta Cana con un Asesor</span>
                </a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
