import { VistaCatalogoHub } from "../directorio/page";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Destinos y Paquetes Turísticos Nacionales e Internacionales | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Explora todos los destinos turísticos de Cityland Travel: Europa, España, Caribe Todo Incluido, Norteamérica, Sudamérica y Perú con tarifas en USD (reserva con el 50%)."),
  alternates: {
    canonical: "https://citylandtravel.com/destinos",
  },
};

export default function DestinosIndexPage() {
  return <VistaCatalogoHub modoHub="destinos" />;
}
