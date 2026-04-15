"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
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
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

export default function StatsCounter() {
  const passengers = useCountUp(5000);
  const perMonth = useCountUp(150);
  const years = useCountUp(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto px-4">
      <div className="flex flex-col items-center px-2 py-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
        <span ref={passengers.ref as any} className="text-3xl md:text-5xl font-serif text-[#0A2A6B] mb-1 md:mb-2 flex items-center shadow-sm">
          {passengers.count.toLocaleString()}+
        </span>
        <span className="text-sm md:text-base text-gray-600 font-bold uppercase tracking-wide">Felices Pasajeros</span>
      </div>
      <div className="flex flex-col items-center px-2 py-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
         <span ref={perMonth.ref as any} className="text-3xl md:text-5xl font-serif text-[#0A2A6B] mb-1 md:mb-2 flex items-center shadow-sm">
          {perMonth.count.toLocaleString()}+
        </span>
        <span className="text-sm md:text-base text-gray-600 font-bold uppercase tracking-wide">Viajan Mensual</span>
      </div>
       <div className="flex flex-col items-center px-2 py-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
        <span ref={years.ref as any} className="text-3xl md:text-5xl font-serif text-[#0A2A6B] mb-1 md:mb-2 flex items-center shadow-sm">
          {years.count}+
        </span>
        <span className="text-sm md:text-base text-gray-600 font-bold uppercase tracking-wide">Años Operando</span>
      </div>
    </div>
  );
}
