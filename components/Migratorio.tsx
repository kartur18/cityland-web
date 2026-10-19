"use client";

import Image from "next/image";
import Link from "next/link";
import { buildWaUrl } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";

export default function Migratorio() {
  const waUrlPromo699 = buildWaUrl({
    categoria: "europa",
    destino: "Madrid / España",
    tipo: "Paquete Migratorio $699",
    precioUSD: 699,
    mensajePersonalizado:
      "¡Hola! Quiero más información del paquete a Madrid desde $699.",
    refWeb: "citylandtravel.com [Portada · Paquete Madrid $699]",
  });

  const waUrlSmart799 = buildWaUrl({
    categoria: "europa",
    destino: "Madrid / España",
    tipo: "Paquete Migratorio Smart $799",
    precioUSD: 799,
    mensajePersonalizado:
      "¡Hola! Quiero más información del paquete Smart a Madrid desde $799.",
    refWeb: "citylandtravel.com [Portada · Paquete Smart Madrid $799]",
  });

  return (
    <section id="migra" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-900 text-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Izquierda: Contenido Comercial Ganador ($699, $799, $899, $999) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400/15 border border-amber-400/35 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-amber-300 mb-4 w-fit">
              <FlagIcon pais="España" className="w-4 h-3" />
              <FlagIcon pais="Italia" className="w-4 h-3" />
              <span>Paquetes Migratorios a España, Italia y Francia · Separa con el 50% ($350)</span>
            </div>

            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-6xl text-white tracking-tight leading-[0.95] mb-3">
              PAQUETE MIGRATORIO A EUROPA{" "}
              <span className="text-amber-400">DESDE $699 USD</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200 mb-5 max-w-2xl leading-relaxed">
              ¿Viajas para quedarte en España, Italia o Francia? No pagues $1,500 por un avión de regreso al que no te vas a subir. Tu paquete incluye los{" "}
              <strong className="text-amber-300">5 documentos obligatorios</strong> que te piden en Lima y en Migraciones de Europa:
              {" "}<strong>1) Pasaje de avión de ida</strong>,{" "}
              <strong>2) Boleto de regreso reservado en sistema para Migraciones</strong>,{" "}
              <strong>3) Reserva de hotel confirmada</strong>,{" "}
              <strong>4) Seguro médico 30.000€</strong> y{" "}
              <strong>5) Check-in 24h antes + preparación 1 a 1</strong>.
            </p>

            {/* Las 4 escalas de precio según fecha */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-emerald-300 block">
                  Plan Promo
                </span>
                <span className="text-xl font-black text-white">$699</span>
                <span className="text-[11px] text-slate-300 block">
                  Feb-May · Separa $350
                </span>
              </div>
              <div className="bg-amber-400/20 border border-amber-400 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-amber-300 block">
                  Plan Smart ⭐
                </span>
                <span className="text-xl font-black text-white">$799</span>
                <span className="text-[11px] text-amber-200 block">
                  Jun/Sep-Nov · Separa $400
                </span>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-sky-300 block">
                  Plan Plus
                </span>
                <span className="text-xl font-black text-white">$899</span>
                <span className="text-[11px] text-slate-300 block">
                  Salidas cercanas · $450
                </span>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                <span className="text-[10px] font-extrabold uppercase text-purple-300 block">
                  Plan Full 23kg
                </span>
                <span className="text-xl font-black text-white">$999</span>
                <span className="text-[11px] text-slate-300 block">
                  Alta / Maleta 23kg · $500
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waUrlPromo699}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold cursor-pointer shadow-lg"
              >
                <WhatsAppIcon size={16} />
                <span>Cotizar Plan $699</span>
              </a>

              <a
                href={waUrlSmart799}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold cursor-pointer shadow-lg"
              >
                <WhatsAppIcon size={16} />
                <span>Cotizar Plan Smart $799</span>
              </a>

              <Link
                href="/espana"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all"
              >
                <span>🇪🇸 España</span>
              </Link>

              <Link
                href="/italia"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all"
              >
                <span>🇮🇹 Italia</span>
              </Link>

              <Link
                href="/francia"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all"
              >
                <span>🇫🇷 Francia</span>
              </Link>

              <Link
                href="/paquetes-migratorios"
                className="inline-flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all"
              >
                <span>Ver las 1,000 Rutas →</span>
              </Link>
            </div>
          </div>

          {/* Derecha: Fotografía Luminosa de Madrid que cubre todo el alto */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] w-full overflow-hidden">
            <Image
              src="/images/espana/gran-via-metropolis.jpg"
              alt="Paquete Migratorio a Madrid España desde $699 USD - Cityland Travel"
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
