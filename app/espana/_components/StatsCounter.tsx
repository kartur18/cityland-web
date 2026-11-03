"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// El ref se crea en el componente (vía useRef) y se pasa al hook; así nunca se lee durante el render.
function useCountUp<T extends HTMLElement>(ref: RefObject<T | null>, end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, end, duration, hasAnimated]);

  return count;
}

export default function StatsCounter() {
  const passengersRef = useRef<HTMLSpanElement>(null);
  const perMonthRef = useRef<HTMLSpanElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);
  const passengers = useCountUp(passengersRef, 5000);
  const perMonth = useCountUp(perMonthRef, 150);
  const years = useCountUp(yearsRef, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center px-2 py-5 sm:py-6 bg-white rounded-2xl shadow-2xs border border-slate-200/90 hover:shadow-md transition-shadow">
        <span ref={passengersRef} className="text-3xl md:text-5xl font-black text-[#0a1628] mb-1 md:mb-2 flex items-center">
          {passengers.toLocaleString("es-PE")}+
        </span>
        <span className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-wide">Pasajeros Atendidos</span>
      </div>
      <div className="flex flex-col items-center px-2 py-5 sm:py-6 bg-white rounded-2xl shadow-2xs border border-slate-200/90 hover:shadow-md transition-shadow">
        <span ref={perMonthRef} className="text-3xl md:text-5xl font-black text-[#0a1628] mb-1 md:mb-2 flex items-center">
          {perMonth.toLocaleString("es-PE")}+
        </span>
        <span className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-wide">Viajan con Nosotros al Mes</span>
      </div>
      <div className="flex flex-col items-center px-2 py-5 sm:py-6 bg-white rounded-2xl shadow-2xs border border-slate-200/90 hover:shadow-md transition-shadow">
        <span ref={yearsRef} className="text-3xl md:text-5xl font-black text-[#0a1628] mb-1 md:mb-2 flex items-center">
          {years}+
        </span>
        <span className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-wide">Años de Experiencia</span>
      </div>
    </div>
  );
}
