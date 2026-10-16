"use client";

import Image from "next/image";
import { TESTIMONIOS } from "@/components/constantes";

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado Conciso */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            Opiniones de Clientes
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
            EXPERIENCIAS DE VIAJEROS PERUANOS
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            <span className="text-amber-500 font-bold tracking-wider">★★★★★</span>
            <span className="font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-slate-500">· Más de 500 reseñas verificadas</span>
          </div>
        </div>

        {/* Grilla de 4 Testimonios Rápidos de Leer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIOS.map((t) => (
            <div
              key={t.nombre}
              className="card-interactive group bg-white rounded-2xl p-5 border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                {/* 5 Estrellas */}
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-amber-400">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Texto corto (Lectura en 3 segundos) */}
                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">
                  &ldquo;{t.texto}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full shrink-0 relative overflow-hidden bg-slate-100">
                  {"foto" in t && t.foto ? (
                    <Image
                      src={t.foto as string}
                      alt={t.nombre}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="32px"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.iniciales}
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {t.nombre}
                    </p>
                    <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1 rounded">
                      ✓ Verificado
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">
                    {t.ruta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
