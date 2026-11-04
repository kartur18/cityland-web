"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// El ref se crea en el componente y se pasa al hook, así nunca se lee durante el render (mismo patrón que
// app/espana/_components/StatsCounter.tsx). Anima el precio real (nunca uno inventado) de 0 hasta el valor
// final cuando la tarjeta entra en pantalla.
function useCountUp(ref: RefObject<HTMLSpanElement | null>, end: number, duration = 1100) {
  const [valor, setValor] = useState(end);
  const [animado, setAnimado] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setValor(0);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animado) {
          setAnimado(true);
          let inicio: number | null = null;
          const paso = (marca: number) => {
            if (!inicio) inicio = marca;
            const progreso = Math.min((marca - inicio) / duration, 1);
            const suavizado = progreso * (2 - progreso);
            setValor(Math.floor(suavizado * end));
            if (progreso < 1) window.requestAnimationFrame(paso);
            else setValor(end);
          };
          window.requestAnimationFrame(paso);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- end/duration no cambian para una misma oferta
  }, [ref]);

  return valor;
}

export default function PrecioAnimadoCyberWow({ precio, className }: { precio: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const valor = useCountUp(ref, precio);
  return (
    <span ref={ref} className={className}>
      ${valor.toLocaleString("en-US")}
    </span>
  );
}
