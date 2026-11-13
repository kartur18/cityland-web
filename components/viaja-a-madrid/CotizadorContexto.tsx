"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { MENSAJE_GENERAL, fuenteDeUrl, mensajeCotizacion, urlWhatsApp, type DatosCotizacion } from "@/lib/viaja-a-madrid";

// Una sola cotización para toda la página: el mes que eliges arriba, los datos del formulario y la barra del celular
// arman el mismo mensaje de WhatsApp.
interface Estado extends DatosCotizacion {
  poner: <K extends keyof DatosCotizacion>(campo: K, valor: DatosCotizacion[K]) => void;
  tocado: boolean;
}

const Contexto = createContext<Estado | null>(null);

const INICIAL: DatosCotizacion = { mes: "", salida: "", retorno: "", adultos: 1, menores: 0 };

export function CotizadorProvider({ children }: { children: ReactNode }) {
  const [datos, setDatos] = useState<DatosCotizacion>(INICIAL);
  const valor = useMemo<Estado>(
    () => ({
      ...datos,
      poner: (campo, v) => setDatos((previo) => ({ ...previo, [campo]: v })),
      tocado: Boolean(datos.mes || datos.salida || datos.retorno || datos.adultos !== 1 || datos.menores > 0),
    }),
    [datos]
  );
  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>;
}

export function useCotizador(): Estado {
  const c = useContext(Contexto);
  if (!c) throw new Error("useCotizador va dentro de CotizadorProvider");
  return c;
}

const nadie = () => () => {};

// De dónde llegó la persona (utm o clic de anuncio), para que el CRM sepa de qué anuncio salió cada chat.
export function useEnlaceWhatsApp(zona: string): string {
  const c = useCotizador();
  const busqueda = useSyncExternalStore(
    nadie,
    () => window.location.search,
    () => ""
  );
  const retorno = c.salida && c.retorno && c.retorno < c.salida ? "" : c.retorno;
  const mensaje = c.tocado ? mensajeCotizacion({ mes: c.mes, salida: c.salida, retorno, adultos: c.adultos, menores: c.menores }) : MENSAJE_GENERAL;
  return urlWhatsApp(mensaje, fuenteDeUrl(busqueda), zona);
}
