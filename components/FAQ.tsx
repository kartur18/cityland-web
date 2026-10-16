"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FAQS, WA_LINK } from "@/components/constantes";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              Respuestas Claras
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none mb-2">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Todo lo que necesitas saber antes de separar tu paquete turístico.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-red-200/80 shadow-sm bg-slate-50/50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-xs sm:text-sm font-bold transition-colors ${
                      isOpen ? "text-red-600" : "text-slate-800"
                    }`}
                  >
                    {faq.pregunta}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-red-600 text-white rotate-45"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.respuesta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque CTA inferior */}
        <div className="mt-8 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <p className="text-xs sm:text-sm font-bold text-[#0a1628] mb-1">
            ¿Tienes alguna consulta específica sobre tus fechas?
          </p>
          <p className="text-xs text-slate-500 mb-3.5">
            Un asesor especializado te responderá en menos de 2 minutos vía WhatsApp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-pulse inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
          >
            <WhatsAppIcon size={16} />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
