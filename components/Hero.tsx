"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buildWaUrl, WA_LINK } from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const SLIDES_HERO = [
  {
    id: "punta-cana",
    pais: "República Dominicana",
    ciudad: "Punta Cana All Inclusive",
    sub: "5 Días / 4 Noches · Resort 5★ Frente al Mar + Isla Saona",
    precio: 949,
    inicial: 475,
    imagen: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=85",
    waUrl: buildWaUrl({
      categoria: "caribe",
      destino: "Punta Cana All Inclusive",
      tipo: "Resort 5 Estrellas Frente al Mar",
      precioUSD: 949,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web el paquete a Punta Cana All Inclusive desde $949 USD. Deseo cotizar mis fechas separando con el 50%.",
    }),
    hrefDetalle: "#paquetes",
  },
  {
    id: "espana",
    pais: "España",
    ciudad: "Madrid & Barcelona",
    sub: "Ruta Especializada · Vuelo + Seguro Schengen 30.000€ + Hotel",
    precio: 695,
    inicial: 348,
    imagen: "/images/espana/gran-via-metropolis.jpg",
    waUrl: buildWaUrl({
      categoria: "europa",
      destino: "España / Madrid",
      tipo: "Paquete Migratorio a España",
      precioUSD: 695,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web el paquete a España desde $695 USD. Deseo información de salidas y cómo separar con el 50%.",
    }),
    hrefDetalle: "/espana",
  },
  {
    id: "cancun",
    pais: "México",
    ciudad: "Cancún & Riviera Maya",
    sub: "5 Días / 4 Noches · Resort Todo Incluido 24h + Chichén Itzá",
    precio: 899,
    inicial: 450,
    imagen: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1600&q=85",
    waUrl: buildWaUrl({
      categoria: "caribe",
      destino: "Cancún All Inclusive",
      tipo: "Resort Todo Incluido",
      precioUSD: 899,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web el paquete a Cancún All Inclusive desde $899 USD. Deseo cotizar mis fechas separando con el 50%.",
    }),
    hrefDetalle: "#paquetes",
  },
  {
    id: "cartagena",
    pais: "Colombia",
    ciudad: "Cartagena de Indias",
    sub: "4 Días / 3 Noches · Vuelo Directo + Hotel + Isla Barú",
    precio: 569,
    inicial: 285,
    imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1600&q=85",
    waUrl: buildWaUrl({
      categoria: "caribe",
      destino: "Cartagena de Indias",
      tipo: "Cartagena + Isla Barú",
      precioUSD: 569,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web el paquete a Cartagena desde $569 USD. Deseo cotizar mis fechas separando con el 50%.",
    }),
    hrefDetalle: "#paquetes",
  },
] as const;

export default function Hero() {
  const [activo, setActivo] = useState(0);
  const slide = SLIDES_HERO[activo];

  return (
    <section className="relative bg-[#0a1628] text-white overflow-hidden">
      {/* Imagen panorámica de fondo estilo aerolínea */}
      <div className="absolute inset-0 z-0">
        <Image
          key={slide.imagen}
          src={slide.imagen}
          alt={`${slide.ciudad} - Cityland Travel`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-all duration-700 scale-102"
        />
        {/* Degradado cinematográfico limpio: oscuro a la izquierda para lectura perfecta, transparente a la derecha para lucir la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#0a1628]/80 to-[#0a1628]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-transparent to-black/25" />
      </div>

      {/* Contenido Principal Limpio y Directo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Izquierda: Titular de Agencia Grande (Cero saturación) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/95 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Agencia Oficial en Lima · RUC 20614914239</span>
              <span className="text-amber-400 font-bold ml-1">★ 4.9 Google</span>
            </div>

            <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.94] mb-4 drop-shadow-sm">
              VIAJA AL CARIBE, ESPAÑA O EUROPA{" "}
              <span className="text-amber-400 block">CON TODO RESUELTO DESDE LIMA</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mb-7 font-normal">
              Vuelos confirmados + Hotel + Seguro.{" "}
              <strong className="text-white font-bold underline decoration-amber-400 decoration-2 underline-offset-4">
                Separa hoy con el 50%
              </strong>{" "}
              y paga el saldo antes de volar.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={slide.waUrl || WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-full text-sm sm:text-base font-bold shadow-xl cursor-pointer"
              >
                <WhatsAppIcon size={20} />
                <span>Cotizar {slide.ciudad.split(" ")[0]} por WhatsApp</span>
              </a>

              <a
                href="#paquetes"
                className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-6 py-4 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer"
              >
                <span>Ver Paquetes 2026</span>
                <ArrowRightIcon className="w-4 h-4 fill-none stroke-current stroke-2" />
              </a>
            </div>
          </div>

          {/* Derecha: Etiqueta Flotante Minimalista del Destino en Pantalla */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-black/45 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-6 max-w-sm w-full text-left shadow-2xl">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <FlagIcon pais={slide.pais} className="w-4 h-3" />
                  {slide.pais}
                </span>
                <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full">
                  Separa con ${slide.inicial} USD
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white leading-tight mb-1">
                {slide.ciudad}
              </h2>
              <p className="text-xs text-slate-300 mb-4">{slide.sub}</p>

              <div className="flex items-end justify-between pt-3 border-t border-white/15">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-300 block">
                    Tarifa desde
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-bebas)] text-4xl text-white leading-none">
                      ${slide.precio}
                    </span>
                    <span className="text-xs font-bold text-slate-300">USD</span>
                  </div>
                </div>

                {slide.hrefDetalle.startsWith("/") ? (
                  <Link
                    href={slide.hrefDetalle}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                  >
                    Ver ruta completa →
                  </Link>
                ) : (
                  <a
                    href={slide.hrefDetalle}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                  >
                    Ver detalles →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior Estilo Aerolínea: 4 Destinos en 1 sola tira limpia sin cajas sueltas */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SLIDES_HERO.map((item, idx) => {
            const esActivo = activo === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivo(idx)}
                className={`text-left px-4 py-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  esActivo
                    ? "bg-white text-[#0a1628] shadow-lg"
                    : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                <div className="min-w-0">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold opacity-80 truncate">
                    <FlagIcon pais={item.pais} className="w-3.5 h-2.5 shrink-0" />
                    {item.ciudad}
                  </span>
                  <span
                    className={`block text-xs font-extrabold mt-0.5 ${
                      esActivo ? "text-red-600" : "text-amber-300"
                    }`}
                  >
                    Desde ${item.precio} USD
                  </span>
                </div>
                <span
                  className={`text-xs font-bold shrink-0 ${
                    esActivo ? "text-[#0a1628]" : "text-white/60"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
