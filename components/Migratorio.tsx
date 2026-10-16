"use client";

import Image from "next/image";
import Link from "next/link";
import { buildWaUrl } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

export default function Migratorio() {
  const waUrlEuropa = buildWaUrl({
    categoria: "europa",
    destino: "España / Madrid",
    tipo: "Paquete Europa / Migratorio",
    precioUSD: 695,
    mensajePersonalizado:
      "¡Hola Cityland Travel! Me interesa el paquete a España desde $695 USD. Deseo información para separar con el 50%.",
  });

  return (
    <section id="migra" className="py-14 sm:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#0a1628] text-white shadow-xl">
          {/* Imagen panorámica de Madrid */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/espana/palacio-real.jpg"
              alt="Paquetes a España desde Lima - Cityland Travel"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#0a1628]/85 to-transparent" />
          </div>

          <div className="relative z-10 p-7 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-amber-300 mb-4">
                <FlagIcon pais="España" className="w-4 h-3" />
                <span>Ruta Especializada · Sin Visa Consular</span>
              </div>

              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95] mb-3">
                ESPECIAL ESPAÑA & EUROPA{" "}
                <span className="text-amber-400">DESDE $695 USD</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-200 mb-6">
                Carpeta completa para ingresar por Madrid-Barajas: Vuelo IATA + Seguro Schengen 30.000€ + Reserva de Hotel + Asesoría 1 a 1.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/espana"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold shadow-lg transition-all"
                >
                  <span>Ver Fechas y Precios España →</span>
                </Link>

                <a
                  href={waUrlEuropa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Hablar con Asesor Europa</span>
                </a>
              </div>
            </div>

            {/* Tarifa resumida limpia a la derecha */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 lg:min-w-[260px] text-left lg:text-right">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 block mb-1">
                Salidas 2026 – 2027
              </span>
              <div className="font-[family-name:var(--font-bebas)] text-5xl text-white leading-none">
                $695 <span className="text-lg font-sans font-bold text-slate-300">USD</span>
              </div>
              <span className="text-xs font-semibold text-emerald-300 block mt-1">
                Separa hoy con $348 USD (50%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
