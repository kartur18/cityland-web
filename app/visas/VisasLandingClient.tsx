"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import { SERVICIOS_VISAS } from "./datos";

const FILTROS_VISA = [
  { id: "todos", label: "Todas las Visas (6)" },
  { id: "usa", label: "Visa Americana EE.UU." },
  { id: "canada-mexico", label: "Canadá & México" },
  { id: "espana", label: "España & Europa" },
] as const;

export default function VisasLandingClient() {
  const [filtro, setFiltro] = useState<string>("todos");

  const lista =
    filtro === "todos"
      ? SERVICIOS_VISAS
      : SERVICIOS_VISAS.filter((s) => s.filtro === filtro);

  return (
    <div className="bg-white min-h-screen text-[#0a1628] antialiased">
      <Navbar />

      {/* 2. Hero Luminoso, Blanco y Profesional (Sin fondos oscuros) */}
      <section className="bg-gradient-to-b from-sky-50/60 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Izquierda */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs mb-5">
                <FlagIcon pais="Estados Unidos" className="w-3.5 h-2.5" />
                <FlagIcon pais="Canadá" className="w-3.5 h-2.5" />
                <FlagIcon pais="México" className="w-3.5 h-2.5" />
                <FlagIcon pais="España" className="w-3.5 h-2.5" />
                <span>Centro Especializado en Gestión de Visas · Lima, Perú</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0a1628] tracking-tight leading-[1.12] mb-4">
                Trámite y Asesoría de Visas:{" "}
                <span className="text-red-600">EE.UU., Canadá y Europa</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                No arriesgues tu solicitud por errores en el formulario o nervios en la entrevista.{" "}
                <strong className="text-[#0a1628] font-bold">
                  Evaluamos tu perfil, llenamos tu expediente oficial y te preparamos paso a paso
                </strong>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo evaluar mi perfil por WhatsApp para tramitar mi Visa.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  <WhatsAppIcon size={20} />
                  <span>Evaluar mi Caso por WhatsApp</span>
                </a>

                <a
                  href="#catalogo-visas"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0a1628] border border-slate-300 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  <span>Ver Tipos de Visa ↓</span>
                </a>
              </div>

              {/* 3 Garantías en Línea */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-700 pt-5 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Llenado Experto DS-160 / IRCC
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Simulacro de Entrevista 1 a 1
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span> Atención Presencial en Los Olivos
                </span>
              </div>
            </div>

            {/* Derecha: Tarjeta Destacada Visa Americana B1/B2 */}
            <div className="lg:col-span-5">
              <div className="card-interactive group bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85"
                    alt="Trámite de Visa Americana B1/B2 en Lima - Cityland Travel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      <FlagIcon pais="Estados Unidos" className="w-3.5 h-2.5" />
                      Visa Americana B1/B2 · 10 Años
                    </span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      Alta Aprobación
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Formulario DS-160 + Cita Embajada + Simulacro
                    </span>
                    <h2 className="text-xl font-extrabold leading-tight">
                      Postula con un expediente sólido y seguro
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Asesoría Integral
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Desde
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#0a1628] tracking-tight leading-none">
                        $120
                      </span>
                      <span className="text-xs font-bold text-slate-500">USD</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                      Incluye simulacro de entrevista 1 a 1
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo iniciar mi trámite de Visa Americana B1/B2 desde $120 USD con asesoría completa.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-pulse inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Iniciar Trámite</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grilla de Visas más Buscadas por los Peruanos */}
      <section id="catalogo-visas" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Gestión Consular Paso a Paso
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1628] tracking-tight leading-tight">
                Elige la Visa que Necesitas Tramitar
              </h2>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {FILTROS_VISA.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFiltro(f.id)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filtro === f.id
                      ? "bg-[#0a1628] text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lista.map((item) => {
              const waUrl = `https://wa.me/${item.waNumber}?text=${encodeURIComponent(
                `¡Hola Cityland Travel! Vi su página de Visas y deseo cotizar la asesoría para: ${item.titulo} (Desde $${item.tarifaDesdeUSD} USD).`
              )}`;

              return (
                <article
                  key={item.id}
                  className="card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0a1628] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        <FlagIcon pais={item.pais} className="w-3.5 h-2.5" />
                        {item.pais}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-xs ${item.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                      <span className="text-[11px] font-semibold text-amber-300 block">
                        {item.modalidad}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold leading-tight drop-shadow-xs">
                        {item.titulo}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-700 leading-snug mb-3">
                        {item.resumenCorto}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                        {item.checks.map((ck) => (
                          <span key={ck} className="flex items-center gap-1">
                            <span className="text-emerald-600 font-bold">✓</span> {ck}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                          Asesoría Consular
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                            Desde
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-[#0a1628] tracking-tight leading-none">
                            ${item.tarifaDesdeUSD}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            USD
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 block mt-0.5">
                          Evaluación + Expediente completo
                        </span>
                      </div>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa-pulse inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer shrink-0"
                      >
                        <WhatsAppIcon size={15} />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ¿Cómo Funciona nuestro Proceso en 4 Pasos Simples? */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-200/80">
            {[
              {
                titulo: "1. Evaluación de Perfil",
                sub: "Analizamos tu trabajo, ingresos, viajes previos y arraigo familiar",
              },
              {
                titulo: "2. Llenado Oficial DS-160 / IRCC",
                sub: "Redactamos tu formulario consular sin errores ni contradicciones",
              },
              {
                titulo: "3. Cita y Documentación",
                sub: "Programamos tu cita en la embajada y armamos tu carpeta física",
              },
              {
                titulo: "4. Simulacro de Entrevista",
                sub: "Practicamos contigo las preguntas reales del cónsul antes de tu cita",
              },
            ].map((paso) => (
              <div key={paso.titulo} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0a1628]">{paso.titulo}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{paso.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-sky-50/60 via-white to-slate-50 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Asesoría Presencial o Virtual en Todo el Perú
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight leading-snug mb-2">
                ¿Quieres saber si calificas para la Visa Americana o Canadiense?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl">
                Escríbenos por WhatsApp o visítanos en nuestra oficina en{" "}
                <strong className="text-[#0a1628]">Av. Antúnez de Mayolo 814, Los Olivos</strong>. Revisamos tu caso con total honestidad antes de iniciar el trámite.
              </p>

              <div>
                <a
                  href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Quisiera saber si califico para tramitar mi visa. ¿Me ayudan con una evaluación?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Consultar con Especialista en Visas</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85"
                alt="Asesoría de Visas Estados Unidos, Canadá, México y España - Cityland Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 6. Botón Flotante */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={`https://wa.me/51944103890?text=${encodeURIComponent("¡Hola Cityland Travel! Deseo asesoría para tramitar mi visa.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-pulse flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl cursor-pointer"
          aria-label="Asesoría de Visas por WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm">
            Asesoría de Visas
          </span>
        </a>
      </div>
    </div>
  );
}
