"use client";

import Image from "next/image";
import Link from "next/link";
import { buildWaUrl } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

export default function Migratorio() {
  const waUrlPromo = buildWaUrl({
    categoria: "europa",
    destino: "Madrid / Europa",
    tipo: "Paquete Migratorio",
    precioUSD: 699,
    mensajePersonalizado:
      "¡Hola! Quiero más información del paquete migratorio a Europa desde $699.",
    refWeb: "citylandtravel.com [Portada · Paquete Migratorio $699]",
  });

  return (
    <section id="migra" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-900 text-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Izquierda */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/35 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-amber-300 mb-4 w-fit">
              <FlagIcon pais="España" className="w-4 h-3" />
              <FlagIcon pais="Italia" className="w-4 h-3" />
              <FlagIcon pais="Francia" className="w-4 h-3" />
              <span>Especialistas en España, Italia y Francia</span>
            </div>

            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl text-white tracking-tight leading-[0.95] mb-3">
              PAQUETE MIGRATORIO A EUROPA{" "}
              <span className="text-amber-400">SOLO IDA DESDE $699 USD</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200 mb-6 max-w-2xl leading-relaxed">
              Incluye los <strong className="text-amber-300">5 documentos</strong> que te piden en Lima y en Migraciones de Europa: tu pasaje de ida emitido, tu boleto de regreso reservado en sistema, reserva de hotel confirmada, seguro médico de 30.000€ y check-in 24h antes. Separa hoy con el{" "}
              <strong className="text-white">50% de inicial</strong>.
            </p>

            {/* Las 4 escalas de precio según fecha */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-7">
              <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-emerald-300 block">
                  Plan Promo
                </span>
                <span className="text-xl font-black text-white">$699</span>
                <span className="text-[11px] text-slate-300 block">
                  Feb – May
                </span>
              </div>
              <div className="bg-amber-400/20 border border-amber-400 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-amber-300 block">
                  Plan Smart ⭐
                </span>
                <span className="text-xl font-black text-white">$799</span>
                <span className="text-[11px] text-amber-200 block">
                  Jun / Sep – Nov
                </span>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-sky-300 block">
                  Plan Plus
                </span>
                <span className="text-xl font-black text-white">$899</span>
                <span className="text-[11px] text-slate-300 block">
                  Salidas cercanas
                </span>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-purple-300 block">
                  Plan Full 23 kg
                </span>
                <span className="text-xl font-black text-white">$999</span>
                <span className="text-[11px] text-slate-300 block">
                  Alta + Bodega 23 kg
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waUrlPromo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap cursor-pointer shadow-lg"
              >
                <WhatsAppIcon size={16} />
                <span>Cotizar por WhatsApp</span>
              </a>

              <Link
                href="/espana"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all"
              >
                <FlagIcon pais="España" className="w-3.5 h-2.5" />
                <span>España</span>
              </Link>

              <Link
                href="/italia"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all"
              >
                <FlagIcon pais="Italia" className="w-3.5 h-2.5" />
                <span>Italia</span>
              </Link>

              <Link
                href="/francia"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all"
              >
                <FlagIcon pais="Francia" className="w-3.5 h-2.5" />
                <span>Francia</span>
              </Link>
            </div>
          </div>

          {/* Derecha */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] w-full overflow-hidden">
            <Image
              src="/images/espana/palacio-real.jpg"
              alt="Paquete Migratorio a Europa desde $699 USD (solo ida) - Cityland Travel"
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
