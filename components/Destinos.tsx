"use client";
import { useState } from "react";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, cotLink } from "@/components/constantes";

const TAG_STYLES = { hot: "bg-[#FF4D2E]/90 text-white", promo: "bg-amber-400/95 text-gray-900", new: "bg-blue-500/90 text-white" };

export default function Destinos() {
  const [tab, setTab] = useState<"europa" | "caribe">("europa");

  return (
    <section id="destinos" style={{ background: "linear-gradient(180deg,#F4F6FB,#F0F3FA)" }} className="py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[11px] font-extrabold tracking-[3px] uppercase text-[#FF4D2E] mb-2">Destinos desde Lima</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,54px)] text-[#0D1F3C] tracking-wide leading-none mb-2">ELIGE TU PRÓXIMO DESTINO</h2>
          <p className="text-[15px] text-[#4B5680] leading-relaxed max-w-[540px] mx-auto">Paquetes migratorios y turísticos a los mejores precios. Todos incluyen seguro de viaje.</p>
        </div>
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          <button onClick={() => setTab("europa")} className={`px-5.5 py-2.5 rounded-full text-[13.5px] font-bold cursor-pointer transition border-2 ${tab === "europa" ? "bg-gradient-to-br from-[#1A3560] to-[#0D1F3C] text-white border-transparent shadow-[0_4px_14px_rgba(13,31,60,.25)]" : "bg-[#F4F6FB] text-[#4B5680] border-transparent hover:border-[#0D1F3C] hover:text-[#0D1F3C]"}`}>🇪🇺 Europa</button>
          <button onClick={() => setTab("caribe")} className={`px-5.5 py-2.5 rounded-full text-[13.5px] font-bold cursor-pointer transition border-2 ${tab === "caribe" ? "bg-gradient-to-br from-[#1A3560] to-[#0D1F3C] text-white border-transparent shadow-[0_4px_14px_rgba(13,31,60,.25)]" : "bg-[#F4F6FB] text-[#4B5680] border-transparent hover:border-[#0D1F3C] hover:text-[#0D1F3C]"}`}>🌴 Caribe & América</button>
        </div>

        {tab === "europa" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESTINOS_EUROPA.map((d) => (
              <article key={d.ciudad} className="bg-white rounded-2xl overflow-hidden border border-white/80 transition-all duration-300 shadow-[0_4px_24px_rgba(12,27,58,.06)] hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(13,31,60,.12)] group">
                <div className="h-[200px] overflow-hidden relative">
                  <img src={d.img} alt={d.alt} loading="lazy" width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-107" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 z-1 text-[11px] font-extrabold text-[#0D1F3C] bg-white/95 w-9 h-9 rounded-full flex items-center justify-center shadow-md">{d.bandera}</div>
                  {d.tag && d.tagColor && <div className={`absolute top-3 right-3 z-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide backdrop-blur-sm ${TAG_STYLES[d.tagColor]}`}>{d.tag}</div>}
                </div>
                <div className="p-4 pb-4.5">
                  <h3 className="text-[17px] font-extrabold text-[#0D1F3C]">{d.ciudad}</h3>
                  <p className="text-xs text-[#4B5680] mt-0.5 mb-3">{d.pais} · Sin visa Schengen</p>
                  <a href={cotLink(d.ciudad, "Migratorio", d.migratorio)} target="_blank" rel="noopener" className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 mb-2 hover:-translate-y-0.5 hover:shadow-lg transition cursor-pointer">
                    <div><div className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">Migratorio</div><div className="text-[10px] text-emerald-700 mt-0.5">{d.migraDesc}</div></div>
                    <div className="text-right"><div className="text-[9px] font-bold uppercase tracking-wide opacity-50">desde</div><div className="text-[20px] font-extrabold text-emerald-900">${d.migratorio.toLocaleString()}</div></div>
                  </a>
                  <a href={cotLink(d.ciudad, "Turístico", d.turistico)} target="_blank" rel="noopener" className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:-translate-y-0.5 hover:shadow-lg transition cursor-pointer">
                    <div><div className="text-[10px] font-extrabold uppercase tracking-wide text-blue-800">Turístico</div><div className="text-[10px] text-blue-600 mt-0.5">{d.turiDesc}</div></div>
                    <div className="text-right"><div className="text-[9px] font-bold uppercase tracking-wide opacity-50">desde</div><div className="text-[20px] font-extrabold text-blue-900">${d.turistico.toLocaleString()}</div></div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "caribe" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESTINOS_CARIBE.map((d) => (
              <article key={d.ciudad} className="bg-white rounded-2xl overflow-hidden border border-white/80 transition-all duration-300 shadow-[0_4px_24px_rgba(12,27,58,.06)] hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(13,31,60,.12)] group">
                <div className="h-[200px] overflow-hidden relative">
                  <img src={d.img} alt={d.alt} loading="lazy" width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-107" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 z-1 text-[11px] font-extrabold text-[#0D1F3C] bg-white/95 w-9 h-9 rounded-full flex items-center justify-center shadow-md">{d.bandera}</div>
                  {d.tag && d.tagColor && <div className={`absolute top-3 right-3 z-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide backdrop-blur-sm ${TAG_STYLES[d.tagColor]}`}>{d.tag}</div>}
                </div>
                <div className="p-4 pb-4.5">
                  <h3 className="text-[17px] font-extrabold text-[#0D1F3C]">{d.ciudad}</h3>
                  <p className="text-xs text-[#4B5680] mt-0.5 mb-3">{d.pais}</p>
                  <a href={cotLink(d.ciudad, "Turístico", d.turistico)} target="_blank" rel="noopener" className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:-translate-y-0.5 hover:shadow-lg transition cursor-pointer">
                    <div><div className="text-[10px] font-extrabold uppercase tracking-wide text-blue-800">{d.turiLabel || "Turístico"}</div><div className="text-[10px] text-blue-600 mt-0.5">{d.turiDesc}</div></div>
                    <div className="text-right"><div className="text-[9px] font-bold uppercase tracking-wide opacity-50">desde</div><div className="text-[20px] font-extrabold text-blue-900">${d.turistico.toLocaleString()}</div></div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
