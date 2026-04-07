"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { DESTINOS_EUROPA, DESTINOS_CARIBE, cotLink } from "@/components/constantes";

const TAG_STYLES = {
  hot: "bg-[#d30000] text-white",
  promo: "bg-amber-500 text-white",
  new: "bg-[#0c3265] text-white",
};

export default function Destinos() {
  const [tab, setTab] = useState<"europa" | "caribe">("europa");
  const destinos = tab === "europa" ? DESTINOS_EUROPA : DESTINOS_CARIBE;

  return (
    <section id="destinos" className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0c3265] mb-2">
              Destinos populares
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0c3265] tracking-wide leading-none">
              Encuentra tu próximo destino
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Tabs estilo LATAM - texto + borde inferior */}
        <div className="flex gap-8 justify-center mb-10">
          <button
            onClick={() => setTab("europa")}
            className={`pb-2 text-[15px] font-semibold cursor-pointer transition-colors border-b-2 ${
              tab === "europa"
                ? "text-[#0c3265] border-[#d30000]"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            Europa
          </button>
          <button
            onClick={() => setTab("caribe")}
            className={`pb-2 text-[15px] font-semibold cursor-pointer transition-colors border-b-2 ${
              tab === "caribe"
                ? "text-[#0c3265] border-[#d30000]"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            Caribe &amp; América
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinos.map((d, index) => {
            const isEuropa = tab === "europa" && "migratorio" in d;
            const mainLink = isEuropa
              ? cotLink(d.ciudad, "Migratorio", (d as (typeof DESTINOS_EUROPA)[number]).migratorio)
              : cotLink(d.ciudad, "Turístico", d.turistico);

            return (
              <AnimateOnScroll key={d.ciudad} stagger={Math.min(index + 1, 4)}>
                <a
                  href={mainLink}
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Imagen */}
                  <div className="h-[220px] overflow-hidden relative">
                    <Image
                      src={d.img}
                      alt={d.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Bandera */}
                    <div className="absolute top-3 left-3 z-10 text-lg bg-white/90 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                      {d.bandera}
                    </div>
                    {/* Tag */}
                    {d.tag && d.tagColor && (
                      <div
                        className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${TAG_STYLES[d.tagColor]}`}
                      >
                        {d.tag}
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{d.ciudad}</h3>
                    <p className="text-sm text-gray-500 mt-0.5 mb-3">{d.pais}</p>

                    {/* Precios */}
                    {isEuropa ? (
                      <div className="space-y-1.5 mb-3">
                        <p className="text-sm text-gray-600">
                          Migratorio desde{" "}
                          <span className="font-bold text-gray-900">
                            ${(d as (typeof DESTINOS_EUROPA)[number]).migratorio.toLocaleString()}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Turístico desde{" "}
                          <span className="font-bold text-gray-900">
                            ${d.turistico.toLocaleString()}
                          </span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600 mb-3">
                        Desde{" "}
                        <span className="font-bold text-gray-900">
                          ${d.turistico.toLocaleString()}
                        </span>
                      </p>
                    )}

                    {/* Link cotizar */}
                    <span className="text-sm font-semibold text-[#d30000] group-hover:underline">
                      Cotizar &rarr;
                    </span>
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
