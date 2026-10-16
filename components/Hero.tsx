"use client";

import Image from "next/image";
import { buildWaUrl, WA_LINK } from "@/components/constantes";
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
    <section className="relative bg-gradient-to-b from-white via-slate-50/80 to-slate-100/40 pt-7 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-200 overflow-hidden">
      {/* Luces sutiles de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Columna Izquierda: Ultra Directo, Cero Relleno (Lectura en 3 segundos) */}
          <div className="lg:col-span-7 text-left">
            
            {/* Pill de Autoridad */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-2xs px-3.5 py-1 rounded-full text-xs font-bold text-slate-700 mb-4 animate-in fade-in duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Agencia Formal · RUC 20614914239 · Los Olivos, Lima</span>
            </div>

            {/* Titular Imponente */}
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-[#0a1628] tracking-tight leading-[0.96] mb-3">
              TU VIAJE AL CARIBE, EUROPA O EL MUNDO<br />
              <span className="text-red-600">CON TODO RESUELTO DESDE LIMA</span>
            </h1>

            {/* Texto de 1 sola frase potente: Qué es + 50% */}
            <p className="text-base sm:text-lg text-slate-600 leading-snug mb-6 max-w-xl font-medium">
              Vuelos confirmados + Hotel + Traslados y Seguro.{" "}
              <strong className="text-slate-900 font-bold bg-amber-100/70 px-1.5 py-0.5 rounded">
                Separa hoy con el 50% de inicial
              </strong>{" "}
              y congela tu tarifa 2026.
            </p>

            {/* Botones de Acción con Micro-animaciones */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
                <span>Cotizar por WhatsApp</span>
                <span className="text-[11px] bg-black/15 px-2 py-0.5 rounded-md font-semibold text-white/90">
                  Respuesta en 2 min
                </span>
              </a>

              <a
                href="#paquetes"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span>Ver Paquetes 2026</span>
                <ArrowRightIcon className="w-4 h-4 fill-none stroke-current stroke-2" />
              </a>
            </div>

            {/* 3 Garantías Clave en Línea Única (Cero texto largo) */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs text-slate-600 flex-wrap pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span className="font-semibold text-slate-800">Separa con 50%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span className="font-semibold text-slate-800">Oficina en Los Olivos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span className="font-semibold text-slate-800">Boleta y Factura SUNAT</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Dinámica Compacta (Se ve completa sin scroll) */}
          <div className="lg:col-span-5">
            <div className="card-interactive group bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
              
              {/* Imagen con Zoom Suave */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80"
                  alt="Punta Cana All Inclusive - Cityland Travel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Badges superiores flotantes */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    <FlagIcon pais="República Dominicana" className="w-3.5 h-2.5" />
                    Punta Cana · Caribe
                  </span>
                  <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Top Ventas
                  </span>
                </div>

                {/* Título sobre la foto */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                    5 Días / 4 Noches · All Inclusive
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight drop-shadow-sm group-hover:text-amber-200 transition-colors">
                    Resort 5 Estrellas Frente al Mar + Saona
                  </h3>
                </div>
              </div>

              {/* Contenido comercial ultra conciso */}
              <div className="p-4 sm:p-5">
                
                {/* 3 Inclusiones ultra rápidas */}
                <div className="space-y-1 mb-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Vuelo ida y vuelta desde Lima con equipaje</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Resort 5★ con comidas y bebidas ilimitadas 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Catamarán a Isla Saona + Traslados y Seguro</span>
                  </div>
                </div>

                {/* Precio y Reserva */}
                <div className="pt-3 border-t border-slate-100 flex items-end justify-between mb-3.5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block leading-none mb-1">
                      DESDE
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-[#0a1628] leading-none">
                        $949
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      aprox. S/ 3,550 por persona en hab. doble
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-lg">
                      Separa con 50%
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      Saldo antes de volar
                    </span>
                  </div>
                </div>

                {/* Botón Directo */}
                <a
                  href={waUrlPuntaCana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Cotizar Punta Cana por WhatsApp</span>
                </a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
