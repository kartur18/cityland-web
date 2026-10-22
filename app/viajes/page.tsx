import { VistaCatalogoHub } from "../directorio/page";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Viajes, Paquetes Turísticos, Cruceros y Servicios | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Catálogo completo de viajes de Cityland Travel E.I.R.L. (RUC 20614914239): paquetes turísticos, vuelos, hoteles, seguros Schengen, visas y viajes para empresas y colegios."),
  alternates: {
    canonical: "https://citylandtravel.com/viajes",
  },
};

export default function ViajesIndexPage() {
  return <VistaCatalogoHub modoHub="viajes" />;
}
