"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WA_LINK, waLink } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const destinosOpciones = [
  "Madrid",
  "Barcelona",
  "Roma",
  "Milan",
  "Punta Cana",
  "Cancun",
  "Cartagena",
  "Rio de Janeiro",
];

const insignias = [
  { icono: "\u2708\uFE0F", texto: "+5,000 viajes" },
  { icono: "\u2B50", texto: "4.9/5 Google" },
  { icono: "\u26A1", texto: "Respuesta en 2h" },
  { icono: "\uD83D\uDEE1\uFE0F", texto: "Seguro incluido" },
];

export default function Hero() {
  const [destino, setDestino] = useState("");
  const [tipo, setTipo] = useState<"migratorio" | "turistico">("migratorio");
  const [menuAbierto, setMenuAbierto] = useState(false);

  /* Cerrar dropdown al hacer click fuera */
  useEffect(() => {
    if (!menuAbierto) return;
    const cerrar = () => setMenuAbierto(false);
    document.addEventListener("click", cerrar);
    return () => document.removeEventListener("click", cerrar);
  }, [menuAbierto]);

  const enlaceCotizar = destino
    ? waLink(
        `Hola Cityland Travel, quiero cotizar un paquete ${tipo} a ${destino}.`
      )
    : WA_LINK;

  return (
    <header className="relative">
      {/* ── Hero image ── */}
      <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90"
          alt="Destinos internacionales desde Lima"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

        {/* Texto centrado */}
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pb-24">
          <p className="text-sm uppercase tracking-widest text-white/80 mb-4">
            Agencia de viajes en Lima &middot; Desde 2015
          </p>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,64px)] leading-[1.05] text-white tracking-wide mb-5">
            Descubre el mundo con los mejores precios
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Paquetes migratorios desde $799 &middot; Tur&iacute;sticos a +70
            destinos
          </p>
        </div>
      </div>

      {/* ── Widget de cotizacion ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 -mt-16">
        <AnimateOnScroll direction="up">
          <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Selector de destino */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuAbierto(!menuAbierto);
                  }}
                  className="w-full flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 text-left hover:border-gray-300 transition-colors"
                >
                  <span className="text-xl">🌍</span>
                  <span
                    className={`text-sm ${destino ? "text-gray-900 font-medium" : "text-gray-400"}`}
                  >
                    {destino || "\u00bfA d\u00f3nde quieres viajar?"}
                  </span>
                </button>

                {menuAbierto && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-30 max-h-60 overflow-y-auto">
                    {destinosOpciones.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setDestino(d);
                          setMenuAbierto(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Toggle tipo */}
              <div className="flex rounded-xl border border-gray-200 overflow-hidden flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setTipo("migratorio")}
                  className={`px-5 py-3 text-sm font-medium transition-colors ${
                    tipo === "migratorio"
                      ? "bg-[#0c3265] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Migratorio
                </button>
                <button
                  type="button"
                  onClick={() => setTipo("turistico")}
                  className={`px-5 py-3 text-sm font-medium transition-colors ${
                    tipo === "turistico"
                      ? "bg-[#0c3265] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Tur&iacute;stico
                </button>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={enlaceCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-[#1fb855] transition-colors flex-shrink-0"
              >
                <WhatsAppIcon size={16} />
                Cotizar GRATIS
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Insignias de confianza */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5">
          {insignias.map((b) => (
            <span
              key={b.texto}
              className="text-sm text-gray-500 flex items-center gap-1.5"
            >
              <span>{b.icono}</span>
              {b.texto}
            </span>
          ))}
        </div>
      </div>

      {/* Espaciador para que la seccion siguiente no tape el widget */}
      <div className="h-12" />
    </header>
  );
}
