"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, cotLink, waLink } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const TAG_STYLES = {
  hot: "bg-[#001e43] text-white shadow-sm",
  promo: "bg-gray-100 text-[#001e43]",
  new: "bg-[#e3000f] text-white shadow-sm",
};

export default function Destinos() {
  const [tab, setTab] = useState<"europa" | "caribe">("europa");
  const destinos = tab === "europa" ? DESTINOS_EUROPA : DESTINOS_CARIBE;

  return (
    <section id="destinos" className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#d30000] mb-2">
              Destinos populares
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,56px)] text-[#0c3265] tracking-wide leading-none mb-3">
              Encuentra tu próximo destino
            </h2>
            <p className="text-[15px] text-[#64748b] max-w-[500px] mx-auto">
              Más de 70 destinos a los mejores precios del mercado
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {[
            { id: "europa" as const, label: "✈ Europa", sub: "desde $799" },
            { id: "caribe" as const, label: "🌴 Caribe & América", sub: "desde $549" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex flex-col items-center px-8 py-3.5 border-b-2 text-[15px] font-bold transition-all duration-200 ${
                tab === t.id
                  ? "border-[#e3000f] text-[#001e43] bg-gray-50"
                  : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50/50"
              }`}
            >
              <span>{t.label}</span>
              <span className={`text-[11px] font-bold mt-0.5 ${tab === t.id ? "text-[#e3000f]" : "text-gray-400"}`}>{t.sub}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinos.map((d, index) => {
            const isEuropa = tab === "europa" && "migratorio" in d;
            const mainLink = isEuropa
              ? cotLink(d.ciudad, "Migratorio", (d as (typeof DESTINOS_EUROPA)[number]).migratorio)
              : cotLink(d.ciudad, "Turístico", d.turistico);

            return (
              <AnimateOnScroll key={d.ciudad} stagger={Math.min(index + 1, 4)}>
                <div className="card-3d gradient-border block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,.06)] group flex flex-col h-full">
                  {/* Imagen */}
                  <div className="h-[210px] overflow-hidden relative flex-shrink-0">
                    <Image
                      src={d.img}
                      alt={d.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Bandera */}
                    <div className="absolute top-3 left-3 z-10 text-lg bg-white/95 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                      {d.bandera}
                    </div>
                    {/* Tag */}
                    {d.tag && d.tagColor && (
                      <div
                        className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide ${TAG_STYLES[d.tagColor]}`}
                      >
                        {d.tag}
                      </div>
                    )}
                    {/* Ciudad sobre imagen */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <h3 className="text-lg font-extrabold text-white leading-none drop-shadow">{d.ciudad}</h3>
                      <p className="text-xs text-white/80">{d.pais}</p>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Precios */}
                    {isEuropa ? (
                      <div className="space-y-2 mb-4 flex-1">
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                          <span className="text-[12px] text-gray-500 font-medium">Turismo</span>
                          <span className="text-sm font-extrabold text-[#001e43]">
                            desde ${(d as (typeof DESTINOS_EUROPA)[number]).migratorio.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                          <span className="text-[12px] text-gray-500 font-medium">Paquete Completo</span>
                          <span className="text-sm font-extrabold text-[#001e43]">
                            desde ${d.turistico.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center mb-4">
                        <div>
                          <p className="text-[11px] text-gray-400 mb-0.5">{"turiLabel" in d ? (d as {turiLabel?: string}).turiLabel || "Turístico" : "Turístico"}</p>
                          <p className="text-xl font-extrabold text-[#0c3265]">
                            desde <span className="text-[#d30000]">${d.turistico.toLocaleString()}</span>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* CTA Corporativo */}
                    <a
                      href={mainLink}
                      target="_blank"
                      rel="noopener"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#001e43] hover:bg-[#e3000f] text-white py-3 rounded-md text-[14px] font-bold shadow-sm transition-all hover:shadow-md"
                    >
                      <span className="uppercase tracking-wide">Seleccionar Vuelos</span>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Ver todos */}
        <div className="text-center mt-10">
          <a
            href={waLink("Hola, quiero ver todos los destinos disponibles")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[#0c3265] text-sm font-bold border-2 border-[#0c3265]/20 px-6 py-3 rounded-full hover:bg-[#0c3265] hover:text-white transition-all duration-200"
          >
            Ver todos los destinos disponibles →
          </a>
        </div>
      </div>
    </section>
  );
}
