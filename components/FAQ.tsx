"use client";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FAQS } from "@/components/constantes";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#f8fafc]">
      <div className="max-w-[800px] mx-auto px-5">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#d30000] mb-2">FAQ</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(36px,5vw,52px)] text-[#0c3265] tracking-wide leading-tight">PREGUNTAS FRECUENTES</h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} stagger={Math.min(i + 1, 6)}>
                <div className="bg-white rounded-xl border border-[#E8ECF4] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,.04)]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                  >
                    <span className="text-[15px] font-bold text-[#0c3265]">{faq.pregunta}</span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[18px] font-bold shrink-0 transition-all duration-300 ${isOpen ? "bg-[#0c3265] text-white rotate-45" : "bg-[#f8fafc] text-[#64748b]"}`}>+</span>
                  </button>
                  <div className="transition-all duration-300 overflow-hidden" style={{ maxHeight: isOpen ? "300px" : "0px" }}>
                    <p className="px-5 pb-4 text-[14px] text-[#64748b] leading-relaxed">{faq.respuesta}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
