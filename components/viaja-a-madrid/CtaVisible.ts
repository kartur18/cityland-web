"use client";

import { useEffect, useState } from "react";

// ¿Hay a la vista un botón principal de WhatsApp (`data-cta-wa`)? Así la burbuja de escritorio y la barra del celular se esconden
// cuando ya tienes otro botón verde delante y no compiten con él.
export function useCtaVisible(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const objetivos = document.querySelectorAll("[data-cta-wa]");
    if (!objetivos.length || typeof IntersectionObserver === "undefined") return;
    const enVista = new Set<Element>();
    const obs = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) enVista.add(e.target);
        else enVista.delete(e.target);
      }
      setVisible(enVista.size > 0);
    });
    objetivos.forEach((o) => obs.observe(o));
    return () => obs.disconnect();
  }, []);

  return visible;
}
