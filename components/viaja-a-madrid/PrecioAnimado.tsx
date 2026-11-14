"use client";

import { useEffect, useState } from "react";
import { PRECIO_ANTICIPADO, PRECIO_OTRAS_FECHAS } from "@/lib/viaja-a-madrid";

// El precio baja de la tarifa normal a la de compra anticipada al cargar la página. Sin animación (o con «reducir movimiento») muestra el precio final.
export default function PrecioAnimado() {
  const [valor, setValor] = useState(PRECIO_ANTICIPADO);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const inicio = performance.now();
    let id = 0;
    const paso = (t: number) => {
      const p = Math.min(1, (t - inicio) / 1100);
      setValor(Math.round(PRECIO_OTRAS_FECHAS - (PRECIO_OTRAS_FECHAS - PRECIO_ANTICIPADO) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) id = requestAnimationFrame(paso);
    };
    id = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(id);
  }, []);

  return <span className="tabular-nums">{valor.toLocaleString("en-US")}</span>;
}
