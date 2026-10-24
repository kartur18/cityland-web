"use client";

import Image from "next/image";
import Link from "next/link";
import { buildWaUrl, WA_LINK } from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import NotaPrecio from "@/components/NotaPrecio";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { formatoUSD } from "@/lib/formato-precio";
import { tarifasMigratorio } from "@/lib/precios-migratorio";

export default function Hero() {
  const waUrlEuropa = buildWaUrl({
    categoria: "europa",
    destino: "Madrid / España / Europa",
    tipo: "Paquete Migratorio Completo",
    precioUSD: 699,
    mensajePersonalizado:
      "¡Hola! Quiero más información del paquete migratorio a Europa desde $699.",
    refWeb: "citylandtravel.com [Hero Principal · Paquete Migratorio $699]",
  });

  return (
    <section className="bg-gradient-to-b from-sky-50/50 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Jerarquía de Mayor a Menor Prioridad */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Agencia Oficial en Lima · RUC 20614914239</span>
              <span className="text-amber-500 font-extrabold ml-1">★ 4.9 Google</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
              Paquetes a España, Italia, Francia y el Caribe{" "}
              <span className="text-red-600 block">
                con Todo Resuelto desde Lima
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              Especialistas en <strong className="text-[#0a1628] font-bold">Paquetes Migratorios a Europa desde $699 USD (solo ida)</strong> (pasaje, retorno reservado, hotel, seguro 30.000€ y check-in) y vacaciones Todo Incluido al Caribe.{" "}
              <strong className="text-emerald-700 font-bold">
                Separa hoy con el 50% de inicial.
              </strong>
            </p>

            {/* Accesos rápidos a las 4 rutas más pedidas */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Link
                href="/espana"
                className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                <FlagIcon pais="España" className="w-3.5 h-2.5" />
                <span>España solo ida desde $699</span>
              </Link>
              <Link
                href="/italia"
                className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                <span>Italia solo ida desde {formatoUSD(tarifasMigratorio("Italia").promo)}</span>
              </Link>
              <Link
                href="/francia"
                className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                <FlagIcon pais="Francia" className="w-3.5 h-2.5" />
                <span>Francia solo ida desde {formatoUSD(tarifasMigratorio("Francia").promo)}</span>
              </Link>
              <Link
                href="/caribe"
                className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                <FlagIcon pais="República Dominicana" className="w-3.5 h-2.5" />
                <span>Caribe All Inclusive</span>
              </Link>
            </div>

            {/* 2 Botones Alineados */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold shadow-md whitespace-nowrap cursor-pointer"
              >
                <WhatsAppIcon size={20} />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a
                href="#paquetes"
                className="inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-slate-800 text-white px-6 py-4 rounded-2xl text-sm sm:text-base font-extrabold transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Ver Paquetes y Precios</span>
                <ArrowRightIcon className="w-4 h-4 fill-none stroke-current stroke-2" />
              </a>
            </div>

            {/* 3 Checks Limpios en Línea */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-extrabold">✓</span> Separa con el 50%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-extrabold">✓</span> Oficina en Los Olivos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-extrabold">✓</span> Boleta y Factura SUNAT
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Protagonista del Producto #1 (Paquete Migratorio Europa desde $699) */}
          <div className="lg:col-span-5">
            <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/espana/gran-via-metropolis.jpg"
                  alt="Paquete Migratorio a Europa: España, Italia y Francia (solo ida) - Cityland Travel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    <FlagIcon pais="España" className="w-3.5 h-2.5" />
                    <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                    <FlagIcon pais="Francia" className="w-3.5 h-2.5" />
                    <span>España · Italia · Francia</span>
                  </span>
                  <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    #1 Más Pedido
                  </span>
                </div>
              </div>

              {/* Pie Blanco Limpio: Título + Escala de Precios + Botón */}
              <div className="p-5 bg-white space-y-3">
                <div className="border-b border-slate-100 pb-2.5">
                  <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                    Pasaje + Retorno Reservado + Hotel + Seguro 30.000€
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#0a1628] leading-tight mt-0.5">
                    Paquete Migratorio a Europa
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Solo ida: España desde <strong className="text-[#0a1628]">{formatoUSD(tarifasMigratorio("España").promo)}</strong> · Italia y Francia desde <strong className="text-[#0a1628]">{formatoUSD(tarifasMigratorio("Italia").promo)} USD</strong>, según tu fecha
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1.5">
                      Solo ida · Tarifa Promo Anticipada
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase text-red-600">Desde</span>
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1628] leading-none">
                        $699
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-1">
                      Separa con 50% (desde $350 USD)
                    </span>
                  </div>

                  <a
                    href={waUrlEuropa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap cursor-pointer shrink-0 shadow-sm"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Cotizar Ahora</span>
                  </a>
                </div>
                <NotaPrecio className="text-[11px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
