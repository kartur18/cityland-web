"use client";

import Image from "next/image";
import { Plane, Check, X as XIcon, Shield, Clock, MapPin } from "lucide-react";
import { waLink } from "@/components/constantes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA = waLink("Hola Cityland Travel, quiero información del paquete Panamá + Medellín (Desde $799 USD)");

function WaIcon({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function PanamaMedellinLanding() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 md:pb-0">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-14 md:py-24">
        <Image
          src="/images/paquetes/panama-medellin/hero-panama.jpg"
          alt="Ciudad de Panamá y Medellín — Cityland Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/75 to-[#0a1628]/55" />

        <div className="relative z-10 px-5 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Paquete 2 Países en 1 Viaje · Sin Visa
            </div>

            <h1 className="font-[family-name:var(--font-bebas)] text-white text-[clamp(48px,7vw,84px)] leading-none tracking-wide mb-3">
              Panamá <span className="text-amber-400">+</span> Medellín
            </h1>

            <p className="text-white/85 text-base md:text-lg max-w-xl mb-6 leading-relaxed">
              Combina compras, el Canal de Panamá y el Casco Antiguo con la eterna primavera de Medellín en un solo programa aéreo confirmado desde Lima.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm font-medium mb-6">
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                <Clock size={15} className="text-amber-400" /> 7 días · 6 noches
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                <Plane size={15} className="text-amber-400" /> Copa Airlines desde Lima
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                <MapPin size={15} className="text-amber-400" /> 3N Panamá + 3N Medellín
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Tarifa Preventa · Separa con 50%
              </span>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-slate-400 text-sm line-through font-semibold">$1,150</span>
                <span className="bg-red-100 text-red-700 text-xs font-black px-2 py-0.5 rounded-full">
                  Ahorra $351
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-black text-[#0a1628] leading-none mb-2">
                Desde $799
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Por persona en habitación doble · Impuestos aéreos incluidos
              </p>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-base w-full py-4 rounded-xl transition-all shadow-lg"
              >
                <WaIcon s={20} />
                Cotizar por WhatsApp Oficial
              </a>

              <p className="text-slate-400 text-xs text-center mt-3 flex items-center justify-center gap-1.5">
                <Shield size={13} className="text-emerald-600" />
                Cityland Travel · RUC 20614914239 · Los Olivos, Lima
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOTOS DESTINOS ── */}
      <section className="px-5 py-12 max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-3xl md:text-4xl tracking-wide mb-6">
          Experiencias Destacadas del Circuito
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: "/images/paquetes/panama-medellin/casco-antiguo.png", t: "Casco Antiguo", sub: "3 noches en Ciudad de Panamá" },
            { img: "/images/paquetes/panama-medellin/canal-panama.png", t: "Canal de Panamá", sub: "Visita panorámica y compras" },
            { img: "/images/paquetes/panama-medellin/medellin-skyline.png", t: "Medellín Eterna Primavera", sub: "3 noches con desayuno" },
            { img: "/images/paquetes/panama-medellin/chiva-medellin.png", t: "Recorrido en Chiva", sub: "Experiencia tradicional paisa" },
          ].map((d, i) => (
            <div key={i} className="relative h-56 rounded-2xl overflow-hidden shadow-sm group">
              <Image src={d.img} alt={d.t} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-bold text-base leading-tight">{d.t}</div>
                <div className="text-white/75 text-xs mt-0.5">{d.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUÉ INCLUYE Y VUELOS ── */}
      <section className="px-5 pb-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
          <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-3xl tracking-wide mb-5">
            El paquete incluye
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Boleto aéreo Lima – Panamá – Medellín – Lima vía Copa Airlines",
              "Equipaje: artículo personal + maleta de cabina 10 kg",
              "Alojamiento completo por 7 días / 6 noches",
              "3 noches de hotel en Ciudad de Panamá",
              "3 noches de hotel en Medellín",
              "Traslados aeropuerto – hotel – aeropuerto en ambos destinos",
              "Desayunos diarios durante toda la estadía",
              "Check-in anticipado y envío de tarjetas de embarque",
              "Impuestos aeroportuarios incluidos en la tarifa",
              "City tour por el Casco Antiguo y Canal de Panamá",
              "Tour panorámico en chiva tradicional por Medellín",
              "Asesoría personalizada y soporte 24/7 por WhatsApp",
            ].map((x, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-3">
                <Check size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-slate-700 text-sm leading-snug">{x}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Servicios opcionales no incluidos en tarifa base
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Almuerzos y cenas", "Tarjeta de asistencia", "Gastos personales", "Excursiones adicionales"].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <XIcon size={12} className="text-rose-400 shrink-0" /> {x}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
            <h2 className="font-[family-name:var(--font-bebas)] text-[#0a1628] text-3xl tracking-wide mb-4">
              Ruta Aérea Referencial
            </h2>

            <div className="space-y-3">
              {[
                { c: "Copa Airlines", from: "Lima (LIM)", to: "Panamá (PTY)", h: "11:00", arr: "14:45", dur: "3h 45m" },
                { c: "Copa Airlines", from: "Panamá (PTY)", to: "Medellín (MDE)", h: "13:19", arr: "14:45", dur: "1h 26m" },
                { c: "Copa Airlines", from: "Medellín (MDE)", to: "Panamá (PTY)", h: "18:20", arr: "19:47", dur: "1h 27m" },
                { c: "Copa Airlines", from: "Panamá (PTY)", to: "Lima (LIM)", h: "21:20", arr: "00:55", dur: "3h 35m" },
              ].map((f, i) => (
                <div key={i} className="bg-slate-50 rounded-xl px-4 py-3 flex items-center justify-between border border-slate-100">
                  <div>
                    <div className="text-[#0a1628] font-bold text-sm">
                      {f.from} <span className="text-blue-600 mx-1">→</span> {f.to}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {f.c} · {f.h} – {f.arr}
                    </div>
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-center">
                    <div className="font-bold text-xs">{f.dur}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#162a4a] rounded-3xl p-6 md:p-8 text-center text-white">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              Separa con el 50% de Inicial
            </p>
            <div className="text-3xl font-black mb-1">Desde $799</div>
            <p className="text-white/70 text-xs mb-5">
              Consulta fechas disponibles y cotiza con nuestro equipo por WhatsApp
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm w-full py-3.5 rounded-xl transition-all shadow-lg"
            >
              <WaIcon s={18} />
              Consultar disponibilidad por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── STICKY MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-2.5 bg-white/95 backdrop-blur border-t border-gray-200">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl text-[15px] shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
        >
          <WaIcon s={18} />
          Cotizar Panamá + Medellín — $799
        </a>
      </div>
    </div>
  );
}
