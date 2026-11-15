"use client";

import Image from "next/image";
import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import { evento } from "@/lib/analitica-landing";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

const MESES = [
  { color: "bg-[#2563eb] text-white", mes: "Abril 2027", foto: "/images/espana/cibeles.jpg", alt: "Plaza de Cibeles, Madrid", d: "Primavera fresca: lleva una chaqueta ligera para caminar por el centro." },
  { color: "bg-[#e30613] text-white", mes: "Mayo 2027", foto: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", d: "Clima templado y mucha vida en la calle. El 15 de mayo son las fiestas de San Isidro, el patrón de Madrid." },
  { color: "bg-[#0d9488] text-white", mes: "Junio 2027", foto: "/images/espana/plaza-mayor.jpg", alt: "Plaza Mayor de Madrid", d: "Empieza el calor y anochece tarde: más horas de luz para pasear." },
];

// Tarjetas de mes: foto, qué esperar y un botón que fija el mes en el cotizador (mismo estado que usa el mensaje de WhatsApp) y sube a él.
export default function GuiaMeses() {
  const { mes, poner } = useCotizador();

  function elegir(m: string) {
    poner("mes", m);
    evento("month_selected", { mes: m, origen: "tarjeta_mes" });
    document.getElementById("cotiza")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  }

  return (
    <div className="mt-7 grid gap-6 md:grid-cols-3 md:gap-7">
      {MESES.map((m) => {
        const nombre = m.mes.split(" ")[0];
        const activo = mes === m.mes;
        return (
          <article key={m.mes} className={`${estilos.revelar} group flex flex-col rounded-2xl bg-white p-3 shadow-[0_24px_40px_-28px_rgba(10,22,40,0.5)] transition-transform duration-300 hover:-translate-y-1.5`}>
            <div className="relative h-36 overflow-hidden rounded-xl">
              <Image src={m.foto} alt={m.alt} fill loading="lazy" sizes="(min-width: 768px) 30vw, 92vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className={`absolute left-3 top-3 rounded-lg px-2.5 py-1 text-xs font-extrabold ${m.color}`}>{m.mes}</span>
            </div>
            <p className="mt-3 flex-1 px-1 text-[15px] leading-relaxed text-slate-600">{m.d}</p>
            <button
              type="button"
              onClick={() => elegir(m.mes)}
              aria-pressed={activo}
              className={`mt-3 inline-flex min-h-[44px] items-center justify-center rounded-xl border-[1.5px] px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] ${
                activo ? "border-[#0a1628] bg-[#0a1628] text-white" : "border-[#0a1628] bg-white text-[#0a1628] hover:bg-[#0a1628] hover:text-white"
              }`}
            >
              {activo ? `${nombre} seleccionado` : `Viajar en ${nombre.toLowerCase()}`}
            </button>
          </article>
        );
      })}
    </div>
  );
}
