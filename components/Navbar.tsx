"use client";
import { useState, useEffect } from "react";
import { WA_LINK, WA_SVG } from "@/components/constantes";
export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav className={`sticky top-0 z-100 bg-white/88 backdrop-blur-[32px] backdrop-saturate-[180%] border-b border-white/60 transition-shadow ${scrolled ? "shadow-md" : "shadow-[0_1px_0_rgba(0,0,0,.06)]"}`}>
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[72px]">
        <div className="font-[family-name:var(--font-bebas)] text-[28px] tracking-wide text-[#0D1F3C] font-bold flex items-center gap-1">CITYLAND <span className="text-[#FF4D2E]">TRAVEL</span></div>
        <div className="hidden md:flex items-center gap-6">
          {[["#destinos","Destinos"],["#migra","Migratorio"],["#servicios","Servicios"],["#testimonios","Testimonios"],["#faq","FAQ"],["#blog","Blog"]].map(([href,label])=>(
            <a key={href} href={href} className="text-[13px] font-semibold text-[#4B5680] hover:text-[#0D1F3C] transition">{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 bg-gradient-to-br from-[#059669] to-[#10B981] text-white px-4.5 py-2.5 rounded-full text-[13px] font-bold hover:brightness-110 hover:-translate-y-0.5 transition">
            <span dangerouslySetInnerHTML={{ __html: WA_SVG(15) }} />Cotizar GRATIS
          </a>
        </div>
        <button onClick={() => setAbierto(!abierto)} className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer" aria-label="Abrir menú">
          <span className={`block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-transform ${abierto?"rotate-45 translate-x-[5px] translate-y-[5px]":""}`}/>
          <span className={`block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-opacity ${abierto?"opacity-0":""}`}/>
          <span className={`block w-[22px] h-0.5 bg-[#0D1F3C] rounded transition-transform ${abierto?"-rotate-45 translate-x-[5px] -translate-y-[5px]":""}`}/>
        </button>
      </div>
      {abierto && (
        <div className="md:hidden flex flex-col absolute top-full left-0 right-0 bg-white p-4 pb-6 shadow-lg rounded-b-2xl gap-1 z-99">
          {[["#destinos","Destinos"],["#migra","Paquete Migratorio"],["#servicios","Servicios"],["#testimonios","Testimonios"],["#faq","Preguntas frecuentes"],["#blog","Blog"]].map(([href,label])=>(
            <a key={href} href={href} onClick={()=>setAbierto(false)} className="py-3 text-[15px] font-semibold text-[#0D1F3C] border-b border-gray-100">{label}</a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener" onClick={()=>setAbierto(false)} className="text-[#059669] font-extrabold mt-1 py-3 text-[15px]">📲 Cotizar GRATIS por WhatsApp</a>
        </div>
      )}
    </nav>
  );
}
