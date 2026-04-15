"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué incluye el paquete de $699?",
    answer: "Vuelo de ida, itinerario de retorno para migraciones (requisito Schengen), reserva de hotel, seguro de viaje, guía PDF, check-in y asesoría personalizada."
  },
  {
    question: "¿Qué documentos necesito?",
    answer: "Pasaporte peruano vigente. No se requiere visa para turistas (hasta 90 días en espacio Schengen)."
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer: "70% de adelanto, saldo 1-2 meses antes del viaje. Aceptamos transferencia, Yape, Plin y tarjetas."
  },
  {
    question: "¿Por qué $699 si los vuelos cuestan más?",
    answer: "Compramos en volumen con mayoristas y trasladamos el ahorro. El paquete incluye mucho más que solo el vuelo."
  },
  {
    question: "¿Puedo elegir mi fecha?",
    answer: "Sí, dentro de Oct/Nov/Dic 2026 eliges la fecha según disponibilidad."
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Oficinas en Los Olivos, Lima Norte. También te atendemos 100% online por WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 font-['DM_Sans']">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <span className="font-bold text-[#0A2A6B] pr-4">{faq.question}</span>
              <span className="text-[#E11D2E] flex-shrink-0">
                <svg className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
