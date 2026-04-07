"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, cotLink, waLink, type Destino } from "@/components/constantes";

const TAG_STYLES = {
  hot: "bg-[#0a1628] text-white",
  promo: "bg-amber-500 text-white",
  new: "bg-[#dc2626] text-white",
};

const PRICE_FILTERS = [
  { id: "all", label: "Todos" },
  { id: "lt700", label: "< $700" },
  { id: "700-900", label: "$700-$900" },
  { id: "gt900", label: "$900+" },
] as const;

function getRelevantPrice(d: Destino, tab: "europa" | "caribe"): number {
  return tab === "europa" && d.migratorio != null ? d.migratorio : d.turistico;
}

function filterByPrice(destinos: Destino[], filter: string, tab: "europa" | "caribe"): Destino[] {
  if (filter === "all") return destinos;
  return destinos.filter((d) => {
    const price = getRelevantPrice(d, tab);
    switch (filter) {
      case "lt700": return price < 700;
      case "700-900": return price >= 700 && price <= 900;
      case "gt900": return price > 900;
      default: return true;
    }
  });
}

export default function Destinos() {
  const [tab, setTab] = useState<"europa" | "caribe">("europa");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const allDestinos = tab === "europa" ? DESTINOS_EUROPA : DESTINOS_CARIBE;
  const destinos = filterByPrice(allDestinos, priceFilter, tab);

  return (
    <section id="destinos" className="bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">
              Destinos populares
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,56px)] text-[#0a1628] tracking-wide leading-none mb-3">
              Encuentra tu próximo destino
            </h2>
            <p className="text-[15px] text-gray-500 max-w-[480px] mx-auto">
              Más de 70 destinos internacionales con los mejores precios del mercado
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tabs */}
        <div className="flex gap-1 justify-center mb-6 bg-gray-50 rounded-lg p-1 w-fit mx-auto">
          {[
            { id: "europa" as const, label: "Europa", sub: "desde $799" },
            { id: "caribe" as const, label: "Caribe & América", sub: "desde $549" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setPriceFilter("all"); }}
              className={`flex flex-col items-center px-6 py-2.5 rounded-md text-[13px] font-semibold transition-all ${
                tab === t.id
                  ? "bg-white text-[#0a1628] shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <span>{t.label}</span>
              <span className={`text-[10px] font-bold mt-0.5 ${tab === t.id ? "text-[#dc2626]" : "text-gray-400"}`}>{t.sub}</span>
            </button>
          ))}
        </div>

        {/* Price Filters */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {PRICE_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setPriceFilter(f.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                priceFilter === f.id
                  ? "bg-[#0a1628] text-white border-[#0a1628]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {destinos.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-[15px]">
            No hay destinos con este filtro
          </div>
        ) : (
          <div key={tab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-[tabFadeIn_0.4s_ease-out]">
            {destinos.map((d, index) => {
              const isEuropa = tab === "europa" && d.migratorio != null;
              const mainPrice = isEuropa ? d.migratorio! : d.turistico;
              const mainLink = isEuropa
                ? cotLink(d.ciudad, "Migratorio", d.migratorio!)
                : cotLink(d.ciudad, "Turístico", d.turistico);
              const savings = d.regularPrice && d.regularPrice > mainPrice ? d.regularPrice - mainPrice : 0;

              return (
                <AnimateOnScroll key={d.ciudad} stagger={Math.min(index + 1, 4)}>
                  <div className="card-lift block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,.05)] group flex flex-col h-full">
                    {/* Image */}
                    <Link href={`/destinos/${d.slug}`} className="block h-[200px] overflow-hidden relative flex-shrink-0">
                      <Image
                        src={d.img}
                        alt={d.alt}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      {/* Flag */}
                      <div className="absolute top-3 left-3 z-10 text-sm bg-white/90 backdrop-blur-sm w-7 h-7 rounded-full flex items-center justify-center shadow-sm">
                        {d.bandera}
                      </div>
                      {/* Tag */}
                      {d.tag && d.tagColor && (
                        <div className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider uppercase ${TAG_STYLES[d.tagColor]}`}>
                          {d.tag}
                        </div>
                      )}
                      {/* City */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <h3 className="text-[17px] font-bold text-white leading-none drop-shadow-sm">{d.ciudad}</h3>
                        <p className="text-[11px] text-white/75 mt-0.5">{d.pais}</p>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      {isEuropa ? (
                        <div className="space-y-1.5 mb-2 flex-1">
                          <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                            <span className="text-[11px] text-gray-400 font-medium">Migratorio</span>
                            <div className="text-right">
                              {savings > 0 && (
                                <span className="text-[11px] text-gray-400 line-through mr-1.5">
                                  ${d.regularPrice!.toLocaleString()}
                                </span>
                              )}
                              <span className="text-[14px] font-bold text-[#0a1628]">
                                desde ${d.migratorio!.toLocaleString()}
                              </span>
                              {savings > 0 && (
                                <p className="text-[10px] text-green-600 font-semibold mt-0.5">Ahorra ${savings}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between py-1.5">
                            <span className="text-[11px] text-gray-400 font-medium">Turístico</span>
                            <span className="text-[14px] font-bold text-[#0a1628]">
                              desde ${d.turistico.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 mb-2">
                          <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wide font-semibold">{d.turiLabel || "Turístico"}</p>
                          <div>
                            {savings > 0 && (
                              <span className="text-[12px] text-gray-400 line-through mr-1.5">
                                ${d.regularPrice!.toLocaleString()}
                              </span>
                            )}
                            <p className="text-xl font-bold text-[#0a1628]">
                              desde <span className="text-[#dc2626]">${d.turistico.toLocaleString()}</span>
                            </p>
                            {savings > 0 && (
                              <p className="text-[10px] text-green-600 font-semibold mt-0.5">Ahorra ${savings}</p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Installment line */}
                      <p className="text-[11px] text-gray-400 mb-3">
                        o desde ${Math.round(mainPrice / d.cuotas)}/mes
                      </p>

                      <a
                        href={mainLink}
                        target="_blank"
                        rel="noopener"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#dc2626] text-white py-2.5 rounded-lg text-[13px] font-semibold transition-all"
                      >
                        Ver opciones
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href={waLink("Hola, quiero ver todos los destinos disponibles")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[#0a1628] text-[13px] font-semibold border border-gray-200 px-6 py-2.5 rounded-lg hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all"
          >
            Ver todos los destinos
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
