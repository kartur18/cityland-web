"use client";

import Image from "next/image";
import { useCotizador } from "@/components/viaja-a-madrid/CotizadorContexto";
import estilos from "@/app/viaja-a-madrid/viaja.module.css";

const MESES = [
  { mes: "Abril 2027", foto: "/images/espana/cibeles.jpg", alt: "Plaza de Cibeles, Madrid", d: "Primavera fresca: lleva una chaqueta. El clima ideal para caminar el centro sin calor." },
  { mes: "Mayo 2027", foto: "/images/espana/palacio-real.jpg", alt: "Palacio Real de Madrid", d: "Templado y con mucha vida en la calle. El 15 de mayo son las fiestas de San Isidro, el patrón de Madrid." },
  { mes: "Junio 2027", foto: "/images/espana/plaza-mayor.jpg", alt: "Plaza Mayor de Madrid", d: "Empieza el calor y anochece pasadas las 9 p. m.: más horas de luz para pasear." },
];

// Guía para elegir el mes: foto chica, qué esperar del clima y un botón que fija el mes en el buscador y sube a él.
export default function GuiaMeses() {
  const { mes, poner } = useCotizador();

  function elegir(m: string) {
    poner("mes", m);
    document.getElementById("cotiza")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  }

  return (
    <div className="mt-7 grid gap-6 md:grid-cols-3 md:gap-7">
      {MESES.map((m) => {
        const nombre = m.mes.split(" ")[0];
        const activo = mes === m.mes;
        return (
          <article key={m.mes} className={`${estilos.revelar} flex flex-col`}>
            <div className="relative h-36 overflow-hidden rounded-2xl shadow-[0_22px_34px_-24px_rgba(10,22,40,0.55)]">
              <Image src={m.foto} alt={m.alt} fill sizes="(min-width: 768px) 30vw, 92vw" className="object-cover" />
              <span className="absolute left-3 top-3 rounded-lg bg-white px-2.5 py-1 text-xs font-extrabold">{m.mes}</span>
            </div>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">{m.d}</p>
            <button
              type="button"
              onClick={() => elegir(m.mes)}
              aria-pressed={activo}
              className={`mt-3 inline-flex min-h-[44px] items-center justify-center rounded-xl border-[1.5px] px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628] ${
                activo ? "border-[#e30613] bg-[#e30613] text-white" : "border-[#0a1628] bg-white text-[#0a1628] hover:bg-[#0a1628] hover:text-white"
              }`}
            >
              {activo ? `${nombre} elegido` : `Elegir ${nombre.toLowerCase()}`}
            </button>
          </article>
        );
      })}
    </div>
  );
}
