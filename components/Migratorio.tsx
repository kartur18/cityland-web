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
    precioUSD: 890,
    mensajePersonalizado:
      "¡Hola Cityland Travel! Me interesa el paquete a España desde $890 USD. Deseo información para separar con el 50%.",
  });

  return (
    <section id="migra" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Izquierda: Contenido Luminoso y Ordenado */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1 rounded-full text-xs font-bold text-slate-700 mb-4 shadow-2xs w-fit">
              <FlagIcon pais="España" className="w-4 h-3" />
              <span>Ruta Especializada · Sin Visa Consular para Peruanos</span>
            </div>

            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl text-[#0a1628] tracking-tight leading-[0.96] mb-3">
              ESPECIAL ESPAÑA & EUROPA{" "}
              <span className="text-red-600">DESDE $890</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-xl">
              Carpeta completa para tu ingreso por Madrid-Barajas: Vuelo confirmado IATA, Seguro Schengen de 30.000€, Reserva de Hotel y Asesoría 1 a 1.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/espana"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <span>Ver Salidas y Precios España →</span>
              </Link>

              <a
                href={waUrlEuropa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Hablar con Asesor Europa</span>
              </a>
            </div>
          </div>

          {/* Derecha: Fotografía Luminosa de Madrid que cubre todo el alto */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] w-full overflow-hidden">
            <Image
              src="/images/espana/gran-via-metropolis.jpg"
              alt="Madrid España - Cityland Travel"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
