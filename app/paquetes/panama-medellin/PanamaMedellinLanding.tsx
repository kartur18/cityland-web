"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plane, Check, X as XIcon, Shield, Clock, MapPin } from "lucide-react";

const WA =
  "https://wa.me/51941551530?text=Hola%2C%20quiero%20información%20del%20paquete%20Panamá%20%2B%20Medellín%20a%20%24799";

function WaIcon({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Timer() {
  const [t, setT] = useState({ h: 2, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        if (p.s > 0) return { ...p, s: p.s - 1 };
        if (p.m > 0) return { ...p, m: p.m - 1, s: 59 };
        if (p.h > 0) return { h: p.h - 1, m: 59, s: 59 };
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-1">
      {[p(t.h), p(t.m), p(t.s)].map((v, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/50 font-bold">:</span>}
          <span className="bg-red-600 text-white font-mono font-black text-lg px-2 py-0.5 rounded">
            {v}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function PanamaMedellinLanding() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/paquetes/panama-medellin/hero-panama.png"
          alt="Ciudad de Panamá"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 px-5 pt-8 pb-12 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Image src="/logo.png" alt="Cityland Travel" width={95} height={32} style={{ objectFit: "contain" }} />
            <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full animate-pulse">
              Últimos 4 cupos
            </span>
          </div>

          <h1 className="text-[2.6rem] md:text-5xl font-black text-white leading-[0.95] tracking-tight mb-2">
            Panamá<span className="text-amber-400"> + </span>Medellín
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/60 text-xs mb-6">
            <span className="flex items-center gap-1"><Clock size={12} /> 7 días · 6 noches</span>
            <span className="flex items-center gap-1"><Plane size={12} /> Copa Airlines</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> Junio 2026</span>
          </div>

          <div className="flex items-end gap-2.5 mb-2">
            <div>
              <span className="text-white/30 text-xs line-through">$1,150</span>
              <div className="text-[3rem] font-black leading-none text-white">
                $799<span className="text-sm font-medium text-white/50 ml-1">USD</span>
              </div>
            </div>
            <span className="bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full mb-1.5">
              -30%
            </span>
          </div>

          <div className="flex items-center gap-2.5 mb-5 text-[11px] text-white/40">
            <span>Oferta termina en</span>
            <Timer />
          </div>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold text-[16px] w-full py-3.5 rounded-xl active:scale-[0.97] transition-all shadow-[0_6px_25px_rgba(37,211,102,0.35)]"
          >
            <WaIcon s={20} />
            Reservar ahora por WhatsApp
          </a>

          <p className="text-white/25 text-[10px] text-center mt-2">
            <Shield size={10} className="inline mr-1" />
            +5,000 viajeros · Respuesta inmediata
          </p>
        </div>
      </section>

      {/* ── FOTOS DESTINOS ── */}
      <section className="px-4 py-6 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { img: "/images/paquetes/panama-medellin/casco-antiguo.png", t: "Casco Antiguo", sub: "3 noches en Panamá" },
            { img: "/images/paquetes/panama-medellin/canal-panama.png", t: "Canal de Panamá", sub: "Tour incluido" },
            { img: "/images/paquetes/panama-medellin/medellin-skyline.png", t: "Medellín", sub: "3 noches" },
            { img: "/images/paquetes/panama-medellin/chiva-medellin.png", t: "Tour en Chiva", sub: "Incluido" },
          ].map((d, i) => (
            <div key={i} className="relative h-32 rounded-xl overflow-hidden">
              <Image src={d.img} alt={d.t} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2.5 left-3">
                <div className="text-white font-bold text-[13px] leading-tight">{d.t}</div>
                <div className="text-white/60 text-[10px]">{d.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="px-5 pb-8 max-w-lg mx-auto">
        <h2 className="text-[17px] font-extrabold text-gray-800 mb-4">
          El paquete incluye
        </h2>

        <div className="space-y-2">
          {[
            "Boleto aéreo ida y vuelta vía Copa Airlines",
            "Equipaje: mochila de mano 8 kg + maleta 10 kg",
            "Alojamiento 7 días / 6 noches",
            "3 noches en Ciudad de Panamá",
            "3 noches en Medellín",
            "Traslados terrestres (Aeropuerto – Hotel – Aeropuerto)",
            "Desayunos diarios durante toda la estancia",
            "Check-in anticipado 24 horas antes del vuelo",
            "Impuestos aeroportuarios incluidos",
            "City tour por el Casco Antiguo y Canal de Panamá",
            "Tour en chiva tradicional por Medellín",
          ].map((x, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <Check size={15} className="text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600 text-[13px] leading-snug">{x}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <h3 className="text-[13px] font-bold text-red-500 mb-2">No incluye</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {["Almuerzos / cenas", "Seguro de viaje", "Gastos personales", "Excursiones extras"].map((x, i) => (
              <div key={i} className="flex items-center gap-1.5 text-gray-400 text-[12px]">
                <XIcon size={11} className="text-red-300 shrink-0" /> {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VUELOS ── */}
      <section className="px-5 pb-8 max-w-lg mx-auto">
        <h2 className="text-[17px] font-extrabold text-gray-800 mb-4">
          Vuelos
        </h2>

        <div className="space-y-2">
          {[
            { c: "CM 400", from: "Lima", to: "Panamá", d: "01 Jun", h: "11:00", arr: "14:45", dur: "3h45" },
            { c: "CM 764", from: "Panamá", to: "Medellín", d: "03 Jun", h: "13:19", arr: "14:45", dur: "1h26" },
            { c: "CM 157", from: "Medellín", to: "Panamá", d: "07 Jun", h: "18:20", arr: "19:47", dur: "1h27" },
            { c: "CM 337", from: "Panamá", to: "Lima", d: "07 Jun", h: "21:20", arr: "00:55", dur: "3h35" },
          ].map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between border border-gray-100">
              <div>
                <div className="text-gray-800 font-bold text-[14px]">
                  {f.from} <span className="text-blue-600 mx-0.5">→</span> {f.to}
                </div>
                <div className="text-gray-400 text-[11px] mt-0.5">
                  {f.c} · {f.d} · {f.h}–{f.arr}
                </div>
              </div>
              <div className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg text-center">
                <div className="font-bold text-sm">{f.dur}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-[11px] text-center mt-3">Copa Airlines · Aerolínea premium</p>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-5 pb-8 max-w-lg mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-center">
          <p className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1">
            Últimos cupos · Junio 2026
          </p>
          <div className="text-4xl font-black text-white leading-none mb-0.5">$799</div>
          <p className="text-white/40 text-[11px] mb-4">USD por persona · Todo incluido</p>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold text-[16px] w-full py-3.5 rounded-xl active:scale-[0.97] transition-all shadow-lg"
          >
            <WaIcon s={20} />
            ¡Reservar mi cupo ahora!
          </a>

          <p className="text-white/20 text-[9px] mt-2">Tarifa sujeta a disponibilidad</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-gray-300 py-4 px-5 text-center text-[11px] border-t border-gray-100">
        Cityland Travel · Los Olivos, Lima · © 2026
      </footer>

      {/* ── WA FLOAT (desktop) ── */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition-all hidden md:flex"
      >
        <WaIcon s={28} />
      </a>

      {/* ── STICKY MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-2.5 bg-white/95 backdrop-blur border-t border-gray-200">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl text-[15px] shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
        >
          <WaIcon s={18} />
          Reservar — $799 USD
        </a>
      </div>
    </div>
  );
}
