import { VistaCatalogoHub } from "../directorio/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinos y Paquetes Turísticos Nacionales e Internacionales | Cityland Travel",
  description:
    "Explora todos los destinos turísticos de Cityland Travel: Europa, España, Caribe Todo Incluido, Norteamérica, Sudamérica y Perú con tarifas en USD (reserva con el 50%).",
  alternates: {
    canonical: "https://citylandtravel.com/destinos",
  },
};

export default function DestinosIndexPage() {
  return <VistaCatalogoHub modoHub="destinos" />;
}
