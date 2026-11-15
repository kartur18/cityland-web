"use client";

import { useEffect } from "react";
import { evento, guardarUtm } from "@/lib/analitica-landing";

// Registra la visita a la landing una sola vez por carga (el efecto no se repite al navegar dentro de la página) y guarda los UTM.
export default function MedicionLanding() {
  useEffect(() => {
    guardarUtm();
    evento("landing_view");
  }, []);
  return null;
}
