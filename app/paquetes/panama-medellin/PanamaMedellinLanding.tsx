"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Plane,
  Hotel,
  Coffee,
  Bus,
  Camera,
  Briefcase,
  CheckCircle,
  Shield,
  X as XIcon,
  Check,
} from "lucide-react";

const WA =
  "https://wa.me/51941551530?text=Hola%2C%20quiero%20información%20del%20paquete%20Panamá%20%2B%20Medellín%20a%20%24799";

function WaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
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
    <div className="flex items-center justify-center gap-1.5 mt-5">
      {[p(t.h), p(t.m), p(t.s)].map((v, i) => (
        <div key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-white/40 font-bold text-lg">:</span>}
          <span className="bg-white/10 backdrop-blur text-white font-black text-2xl px-3 py-1 rounded-md">
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PanamaMedellinLanding() {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center justify-center">
        <Image
          src="/images/paquetes/panama-medellin/hero-panama.png"
          alt="Ciudad de Panamá"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="relative z-10 text-center px-5 max-w-lg mx-auto py-20">
          <span className="inline-block bg-red-500 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Solo 4 cupos · Junio 2026
          </span>

          <h1 className="text-[clamp(2.2rem,8vw,3.5rem)] font-black text-white leading-[1.1] mb-3">
            Panamá +<br />Medellín
          </h1>
          <p className="text-white/70 text-base mb-6">
            7 días · 6 noches · Todo incluido
          </p>

          <div className="inline-block">
            <span className="text-white/40 text-sm line-through block">$1,150 USD</span>
            <span className="text-[clamp(3rem,12vw,5rem)] font-black text-white leading-none">
              $799
            </span>
            <span className="text-white/50 text-sm ml-1">USD</span>
          </div>

          <Timer />

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold text-lg w-full max-w-sm mx-auto py-4 rounded-2xl mt-7 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_8px_30px_rgba(37,211,102,0.35)]"
          >
            <WaIcon size={22} />
            ¡Lo quiero! Reservar ahora
          </a>

          <p className="text-white/30 text-[11px] mt-3 flex items-center justify-center gap-1">
            <Shield size={10} /> +5,000 viajeros · Copa Airlines
          </p>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="py-12 px-5">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-extrabold text-center text-slate-800 mb-1">
            Todo esto incluido
          </h2>
          <p className="text-center text-slate-400 text-sm mb-7">
            Valor +$1,150 — Ahorras $351
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Plane size={20} />, t: "Vuelos Copa Airlines", d: "Ida y vuelta" },
              { icon: <Hotel size={20} />, t: "6 noches hotel", d: "Panamá + Medellín" },
              { icon: <Coffee size={20} />, t: "Desayunos", d: "Todos los días" },
              { icon: <Bus size={20} />, t: "Traslados", d: "Aeropuerto ↔ Hotel" },
              { icon: <Camera size={20} />, t: "2 tours", d: "Canal + Chiva" },
              { icon: <Briefcase size={20} />, t: "Equipaje", d: "8kg + 10kg" },
            ].map((x, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                  {x.icon}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-[13px] leading-tight">{x.t}</div>
                  <div className="text-slate-400 text-[11px]">{x.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Incluye / No incluye compacto */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div>
              <div className="text-green-600 font-bold text-xs uppercase mb-2 flex items-center gap-1">
                <Check size={14} /> Incluye
              </div>
              {[
                "Vuelos Copa Airlines",
                "Hotel 6 noches",
                "Desayunos diarios",
                "Traslados completos",
                "City tour Panamá",
                "Tour chiva Medellín",
                "Equipaje mano",
                "Check-in anticipado",
                "Impuestos incluidos",
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[12px] text-slate-500 py-0.5">
                  <CheckCircle size={12} className="text-green-500 shrink-0" /> {x}
                </div>
              ))}
            </div>
            <div>
              <div className="text-red-500 font-bold text-xs uppercase mb-2 flex items-center gap-1">
                <XIcon size={14} /> No incluye
              </div>
              {[
                "Almuerzos / cenas",
                "Seguro de viaje",
                "Gastos personales",
                "Excursiones extras",
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[12px] text-slate-400 py-0.5">
                  <XIcon size={12} className="text-red-300 shrink-0" /> {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VUELOS ── */}
      <section className="py-10 px-5 bg-slate-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-extrabold text-center text-slate-800 mb-6">
            Tus vuelos
          </h2>

          <div className="space-y-3">
            {[
              { c: "CM 400", from: "Lima", to: "Panamá", d: "Dom 01 Jun", h: "11:00–14:45", dur: "3h45m" },
              { c: "CM 764", from: "Panamá", to: "Medellín", d: "Mar 03 Jun", h: "13:19–14:45", dur: "1h26m" },
              { c: "CM 157", from: "Medellín", to: "Panamá", d: "Sáb 07 Jun", h: "18:20–19:47", dur: "1h27m" },
              { c: "CM 337", from: "Panamá", to: "Lima", d: "Sáb 07 Jun", h: "21:20–00:55", dur: "3h35m" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-900 font-bold text-sm">{f.c}</span>
                    <span className="text-slate-300 text-xs">·</span>
                    <span className="text-slate-400 text-xs">{f.d}</span>
                  </div>
                  <div className="text-slate-700 font-semibold text-[15px]">
                    {f.from} → {f.to}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500 text-xs">{f.h}</div>
                  <div className="text-blue-900 font-bold text-sm">{f.dur}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-[11px] mt-4">
            Copa Airlines · Aerolínea premium de Latinoamérica
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-14 px-5 bg-blue-900 text-center">
        <p className="text-white/50 text-sm mb-1">Últimos cupos — Junio 2026</p>
        <div className="text-5xl font-black text-white mb-1">$799</div>
        <p className="text-white/40 text-xs mb-6">USD por persona · Impuestos incluidos</p>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-lg px-10 py-4 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
        >
          <WaIcon size={24} />
          Reservar por WhatsApp
        </a>

        <p className="text-white/25 text-[10px] mt-4">
          Tarifa sujeta a disponibilidad
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white/40 py-6 px-5 text-center text-xs">
        <p>Cityland Travel · Los Olivos, Lima · © 2026</p>
      </footer>

      {/* ── FLOATING WA (desktop) ── */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition-all hidden md:flex"
      >
        <WaIcon size={28} />
      </a>

      {/* ── STICKY MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#25D366] p-2.5">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 rounded-xl text-[15px]"
        >
          <WaIcon size={18} />
          Reservar — $799 USD
        </a>
      </div>
    </div>
  );
}
