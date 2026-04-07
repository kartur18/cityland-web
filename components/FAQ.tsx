"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FAQS, WA_LINK } from "@/components/constantes";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#d30000] mb-2">FAQ</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0c3265] tracking-wide leading-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-[15px] text-[#64748b] mt-3">
              Resolvemos tus dudas antes de que partas
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} stagger={Math.min(i + 1, 6)}>
                <div
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#0c3265]/20 shadow-[0_4px_20px_rgba(12,50,101,.08)]"
                      : "border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,.04)]"
                  } bg-white`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[15px] font-bold transition-colors ${isOpen ? "text-[#0c3265]" : "text-gray-800 group-hover:text-[#0c3265]"}`}>
                      {faq.pregunta}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[18px] font-bold shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0c3265] text-white rotate-45 scale-110"
                          : "bg-gray-100 text-[#64748b] group-hover:bg-gray-200"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 overflow-hidden"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <p className="px-5 pb-5 text-[14px] text-[#64748b] leading-relaxed border-t border-gray-50 pt-3">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Still have questions */}
        <AnimateOnScroll>
          <div className="mt-10 p-6 bg-[#f8fafc] rounded-2xl border border-gray-100 text-center">
            <p className="text-[15px] font-bold text-[#0c3265] mb-1">¿Tienes más preguntas?</p>
            <p className="text-[13px] text-[#64748b] mb-4">Un asesor te responde en menos de 2 horas por WhatsApp</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-extrabold hover:bg-[#1fb855] transition-colors"
            >
              💬 Preguntar por WhatsApp
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
