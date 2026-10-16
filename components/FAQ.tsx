"use client";

import { useState } from "react";
import { FAQS } from "@/components/constantes";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
            Dudas Frecuentes
          </span>
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#0a1628] tracking-tight leading-none">
            PREGUNTAS FRECUENTES
          </h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.slice(0, 5).map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-slate-300 bg-slate-50/60"
                    : "border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-[#0a1628]">
                    {faq.pregunta}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      isOpen ? "bg-[#0a1628] text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.respuesta}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
