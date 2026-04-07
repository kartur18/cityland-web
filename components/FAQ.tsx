"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FAQS, WA_LINK } from "@/components/constantes";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-[760px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#dc2626] mb-3">FAQ</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0a1628] tracking-wide leading-tight">
              Preguntas Frecuentes
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} stagger={Math.min(i + 1, 6)}>
                <div className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-gray-200 shadow-sm bg-white" : "border-gray-100 bg-white"
                }`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[14px] font-semibold transition-colors ${isOpen ? "text-[#0a1628]" : "text-gray-700 group-hover:text-[#0a1628]"}`}>
                      {faq.pregunta}
                    </span>
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-[#dc2626] text-white rotate-45" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}>
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 overflow-hidden"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <p className="px-5 pb-5 text-[13px] text-gray-500 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll>
          <div className="mt-10 p-6 bg-white rounded-xl border border-gray-100 text-center">
            <p className="text-[14px] font-semibold text-[#0a1628] mb-1">¿Tienes más preguntas?</p>
            <p className="text-[12px] text-gray-500 mb-4">Un asesor te responde en menos de 2 horas por WhatsApp</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Preguntar por WhatsApp
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
