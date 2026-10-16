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
    mensajePersonalizado:
      "¡Hola Cityland Travel! Vi en su web oficial el paquete a Punta Cana All Inclusive desde $949 USD. Deseo consultar disponibilidad para mis fechas y separar con el 50%.",
  });

  return (
    <section className="bg-gradient-to-b from-sky-50/50 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Luminosa, limpia y ordenada */}
          <div className="lg:col-span-7 text-left">
            {/* 1 solo sello limpio */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Agencia Oficial en Lima · RUC 20614914239</span>
              <span className="text-amber-500 font-extrabold ml-1">★ 4.9 Google</span>
            </div>

            {/* Titular Claro y Profesional */}
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-[#0a1628] tracking-tight leading-[0.96] mb-4">
              TU VIAJE AL CARIBE, ESPAÑA O EUROPA{" "}
              <span className="text-red-600 block">
                CON TODO RESUELTO DESDE LIMA
              </span>
            </h1>

            {/* 1 sola frase corta y directa */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
              Vuelos confirmados + Hotel + Traslados y Seguro.{" "}
              <strong className="text-[#0a1628] font-bold">
                Separa hoy con el 50% de inicial
              </strong>{" "}
              y paga el saldo antes de volar.
            </p>

            {/* 2 Botones Alineados */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
              >
                <WhatsAppIcon size={20} />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a
                href="#paquetes"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
              >
                <span>Ver Destinos 2026</span>
                <ArrowRightIcon className="w-4 h-4 fill-none stroke-current stroke-2" />
              </a>
            </div>

            {/* 3 Checks Limpios en Línea (Sin cajas ni bordes recargados) */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-extrabold">✓</span> Separa con 50%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-extrabold">✓</span> Oficina en Los Olivos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-extrabold">✓</span> Boleta y Factura SUNAT
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Luminosa y Limpia (Foto Protagonista + Precio + Botón) */}
          <div className="lg:col-span-5">
            <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
              {/* Fotografía Luminosa y Nítida (Sin velo negro encima) */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85"
                  alt="Punta Cana All Inclusive - Cityland Travel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    <FlagIcon pais="República Dominicana" className="w-3.5 h-2.5" />
                    Punta Cana · Caribe
                  </span>
                  <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Todo Incluido
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-4 right-4 text-white z-10">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                    5 Días / 4 Noches · Vuelo + Resort 5★ + Isla Saona
                  </span>
                  <h2 className="text-xl font-extrabold leading-tight">
                    Punta Cana All Inclusive
                  </h2>
                </div>
              </div>

              {/* Pie Blanco Limpio: Precio a la izquierda + Botón a la derecha */}
              <div className="p-5 flex items-center justify-between gap-4 bg-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                    Tarifa desde
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#0a1628] leading-none">
                      $949
                    </span>
                    <span className="text-xs font-bold text-slate-500">USD</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                    Separa con 50% ($475 USD)
                  </span>
                </div>

                <a
                  href={waUrlPuntaCana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                >
                  <WhatsAppIcon size={16} />
                  <span>Cotizar Ahora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
