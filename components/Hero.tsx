"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buildWaUrl, WA_LINK } from "@/components/constantes";
import FlagIcon from "@/components/icons/FlagIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const OFERTAS_HERO = [
  {
    id: "punta-cana",
    etiquetaTab: "Punta Cana",
    pais: "República Dominicana",
    ubicacion: "Punta Cana · Caribe",
    badge: "Top Ventas 2026",
    badgeClass: "bg-red-600 text-white",
    duracion: "5 Días / 4 Noches · All Inclusive",
    titulo: "Resort 5 Estrellas Frente al Mar + Isla Saona",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    inclusiones: [
      "Vuelo ida y vuelta desde Lima con equipaje",
      "Resort 5★ con comidas y bebidas ilimitadas 24h",
      "Catamarán a Isla Saona + Traslados y Seguro",
    ],
    precioUSD: 949,
    textoSecundario: "aprox. S/ 3,550 por persona · Inicial $475 USD (50%)",
    waUrl: buildWaUrl({
      categoria: "caribe",
      destino: "Punta Cana All Inclusive",
      tipo: "Resort 5 Estrellas Frente al Mar",
      precioUSD: 949,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web oficial el paquete a Punta Cana All Inclusive desde $949 USD. Deseo consultar disponibilidad para mis fechas y separar con el 50% de inicial.",
    }),
    ctaTexto: "Cotizar Punta Cana por WhatsApp",
    linkDetalle: "/destinos/punta-cana",
  },
  {
    id: "espana",
    etiquetaTab: "España $695",
    pais: "España",
    ubicacion: "Madrid & Barcelona · Europa",
    badge: "Ruta Especializada",
    badgeClass: "bg-[#0a1628] text-amber-300 border border-amber-400/40",
    duracion: "Salidas Confirmadas · Sin Visa Consular",
    titulo: "Paquete Migratorio a España con Carpeta Completa",
    imagen: "/images/espana/plaza-mayor.jpg",
    inclusiones: [
      "Boleto aéreo confirmado IATA con equipaje",
      "Seguro médico Schengen obligatorio de 30.000€",
      "Reserva de hotel + Asesoría 1 a 1 control Barajas",
    ],
    precioUSD: 695,
    textoSecundario: "Separa hoy con $348 USD (50%) · Saldo antes de viajar",
    waUrl: buildWaUrl({
      categoria: "europa",
      destino: "España / Madrid",
      tipo: "Paquete Migratorio a España",
      precioUSD: 695,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web el Paquete Migratorio a España desde $695 USD. Deseo información de fechas y cómo separar con el 50% de inicial.",
    }),
    ctaTexto: "Cotizar España por WhatsApp",
    linkDetalle: "/espana",
  },
  {
    id: "cartagena",
    etiquetaTab: "Cartagena $569",
    pais: "Colombia",
    ubicacion: "Cartagena de Indias · Caribe",
    badge: "Oferta Estrella",
    badgeClass: "bg-emerald-600 text-white",
    duracion: "5 Días / 4 Noches · Playa & Ciudad Amurallada",
    titulo: "Cartagena + Playa Blanca Barú Todo Incluido",
    imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800&q=80",
    inclusiones: [
      "Vuelo directo ida y vuelta desde Lima con equipaje",
      "Hotel en Bocagrande + Desayunos y alimentación",
      "Full Day Isla Barú Playa Blanca + Traslados",
    ],
    precioUSD: 569,
    textoSecundario: "aprox. S/ 2,130 por persona · Inicial $285 USD (50%)",
    waUrl: buildWaUrl({
      categoria: "caribe",
      destino: "Cartagena de Indias",
      tipo: "Paquete Cartagena + Barú",
      precioUSD: 569,
      mensajePersonalizado:
        "¡Hola Cityland Travel! Vi en su web el paquete a Cartagena desde $569 USD. Deseo consultar disponibilidad para mis fechas y separar con el 50% de inicial.",
    }),
    ctaTexto: "Cotizar Cartagena por WhatsApp",
    linkDetalle: "/destinos/cartagena",
  },
] as const;

export default function Hero() {
  const [activaIdx, setActivaIdx] = useState(0);
  const oferta = OFERTAS_HERO[activaIdx];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100/70 pt-6 pb-12 sm:pt-9 sm:pb-16 border-b border-slate-200 overflow-hidden">
      {/* Decoración sutil de profundidad corporativa */}
      <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-red-600/[0.04] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-[#0a1628]/[0.04] rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Columna Izquierda: Propuesta de Valor Ejecutiva y Directa */}
          <div className="lg:col-span-7 text-left">
            {/* Doble Sello de Confianza y Reputación */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 shadow-2xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0a1628]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Agencia Formal SUNAT · RUC 20614914239 · Los Olivos, Lima</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/90 px-3 py-1.5 rounded-full text-xs font-extrabold text-amber-900">
                <span className="text-amber-500">★★★★★</span>
                <span>4.9/5 Google (+500 viajeros)</span>
              </div>
            </div>

            {/* Titular Principal H1 Optimizado para SEO y Conversión */}
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl lg:text-[62px] text-[#0a1628] tracking-tight leading-[0.95] mb-3.5">
              TU VIAJE AL CARIBE, ESPAÑA O EUROPA{" "}
              <span className="text-red-600 block sm:inline">
                CON TODO RESUELTO DESDE LIMA
              </span>
            </h1>

            {/* Subtítulo Comercial Claro */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5 max-w-2xl font-medium">
              Boletos aéreos confirmados + Hoteles seleccionados + Traslados y Seguro Médico.{" "}
              <strong className="text-[#0a1628] font-extrabold bg-amber-100/80 border border-amber-300/60 px-2 py-0.5 rounded-md">
                Separa hoy con el 50% de inicial
              </strong>{" "}
              y paga el saldo antes de volar.
            </p>

            {/* Barra de Destinos Más Buscados (Acceso Rápido en 1 clic) */}
            <div className="mb-6">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Destinos más cotizados hoy desde Lima:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActivaIdx(0)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    activaIdx === 0
                      ? "bg-[#0a1628] text-white border-[#0a1628] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <FlagIcon pais="República Dominicana" className="w-3.5 h-2.5" />
                  <span>Punta Cana · $949</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivaIdx(1)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    activaIdx === 1
                      ? "bg-red-600 text-white border-red-600 shadow-xs"
                      : "bg-red-50/70 text-red-700 border-red-200 hover:bg-red-100/70"
                  }`}
                >
                  <FlagIcon pais="España" className="w-3.5 h-2.5" />
                  <span>España Migratorio · $695</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivaIdx(2)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    activaIdx === 2
                      ? "bg-[#0a1628] text-white border-[#0a1628] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <FlagIcon pais="Colombia" className="w-3.5 h-2.5" />
                  <span>Cartagena · $569</span>
                </button>

                <Link
                  href="/paquetes/panama-medellin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  <FlagIcon pais="Panamá" className="w-3.5 h-2.5" />
                  <span>Panamá + Medellín · $799</span>
                </Link>
              </div>
            </div>

            {/* Botones Principales de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
                <span>Cotizar por WhatsApp</span>
                <span className="text-[11px] bg-black/15 px-2.5 py-0.5 rounded-lg font-bold text-white">
                  Respuesta en 2 min
                </span>
              </a>

              <a
                href="#paquetes"
                className="inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#162544] text-white px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Ver Catálogo 2026</span>
                <ArrowRightIcon className="w-4 h-4 fill-none stroke-current stroke-2" />
              </a>
            </div>

            {/* 4 Garantías Enmarcadas de Confianza */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-200/90">
              {[
                { titulo: "Separa con 50%", sub: "Congela tu tarifa" },
                { titulo: "Oficina en Lima", sub: "Av. Mayolo 814" },
                { titulo: "100% Formal", sub: "Boleta / Factura" },
                { titulo: "Vuelos IATA", sub: "Con equipaje" },
              ].map((g) => (
                <div
                  key={g.titulo}
                  className="bg-white rounded-xl border border-slate-200/90 px-3 py-2 shadow-2xs flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-[11px] shrink-0">
                    ✓
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-extrabold text-[#0a1628] leading-tight truncate">
                      {g.titulo}
                    </span>
                    <span className="block text-[10px] text-slate-500 leading-tight truncate">
                      {g.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Vitrina Ejecutiva Interactiva de Ofertas Estrella */}
          <div className="lg:col-span-5">
            <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(10,22,40,0.16)] overflow-hidden">
              {/* Cabecera Ejecutiva Azul Marino con Selector de Destino */}
              <div className="bg-[#0a1628] px-4 py-2.5 flex items-center justify-between gap-2 border-b border-white/10">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Oferta Destacada
                </span>
                <div className="flex items-center gap-1">
                  {OFERTAS_HERO.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivaIdx(idx)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        activaIdx === idx
                          ? "bg-white text-[#0a1628] shadow-2xs"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.etiquetaTab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Imagen con Zoom Suave */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={oferta.imagen}
                  alt={`${oferta.titulo} - Cityland Travel`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                {/* Badges superiores flotantes */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    <FlagIcon pais={oferta.pais} className="w-3.5 h-2.5" />
                    {oferta.ubicacion}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${oferta.badgeClass}`}
                  >
                    {oferta.badge}
                  </span>
                </div>

                {/* Título sobre la foto */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white z-10">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                    {oferta.duracion}
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold leading-tight drop-shadow-sm">
                    {oferta.titulo}
                  </h2>
                </div>
              </div>

              {/* Contenido Comercial de la Tarjeta */}
              <div className="p-4 sm:p-5">
                {/* 3 Inclusiones con checks destacados */}
                <div className="space-y-1.5 mb-4 text-xs text-slate-700">
                  {oferta.inclusiones.map((inc) => (
                    <div key={inc} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                        ✓
                      </span>
                      <span className="font-medium text-slate-800">{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Bloque de Precio y Facilidad 50% */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block leading-none mb-1">
                      TARIFA OFICIAL DESDE
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl font-black text-[#0a1628] leading-none">
                        ${oferta.precioUSD}
                      </span>
                      <span className="text-xs font-extrabold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
                      {oferta.textoSecundario}
                    </span>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-lg shadow-2xs">
                      Separa con 50%
                    </span>
                    <span className="block text-[10px] font-semibold text-slate-500 mt-1">
                      Cupos 2026 activos
                    </span>
                  </div>
                </div>

                {/* Botones de Acción de la Tarjeta */}
                <div className="space-y-2">
                  <a
                    href={oferta.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold cursor-pointer"
                  >
                    <WhatsAppIcon size={17} />
                    <span>{oferta.ctaTexto}</span>
                  </a>

                  <Link
                    href={oferta.linkDetalle}
                    className="block w-full text-center py-1.5 text-xs font-bold text-[#0a1628] hover:text-red-600 transition-colors"
                  >
                    Ver detalles completos de esta ruta →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
