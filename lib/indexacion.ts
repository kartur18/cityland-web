import type { Metadata } from "next";
import { PAGINAS_CON_CLIENTES, PAGINAS_CON_VISITAS_GSC, PAGINAS_FUERTES } from "@/lib/paginas-fuertes";
import { RUTAS_VUELOS_PRINCIPALES } from "@/lib/rutas-vuelos";

// Ciudades con vuelo comercial regular desde Lima: rutas nacionales que vendemos cada mes (Chiclayo, Tumbes, Pucallpa…).
const CIUDADES_CON_VUELO_DESDE_LIMA = [
  "arequipa", "trujillo", "chiclayo", "piura", "cusco", "iquitos", "tarapoto", "tacna", "juliaca", "cajamarca",
  "pucallpa", "tumbes", "talara", "ayacucho", "jauja", "puerto-maldonado", "jaen",
];
const RUTAS_NACIONALES: ReadonlySet<string> = new Set(
  CIUDADES_CON_VUELO_DESDE_LIMA.flatMap((c) => [`/vuelos/lima-${c}`, `/vuelos/${c}-lima`])
);

// Google solo guarda lo que ya rinde o responde una búsqueda real: inicio, hubs de un nivel, blog, los ~130 destinos,
// las guías de requisitos, las rutas de vuelo que vendemos, las páginas con impresiones y las que trajeron chats.
export function esIndexable(ruta: string): boolean {
  return (
    ruta === "/" ||
    ruta.split("/").length <= 2 ||
    ruta.startsWith("/blog/") ||
    ruta.startsWith("/destinos/") ||
    ruta.startsWith("/viajes/requisitos-") ||
    PAGINAS_FUERTES.has(ruta) ||
    PAGINAS_CON_CLIENTES.has(ruta) ||
    PAGINAS_CON_VISITAS_GSC.has(ruta) ||
    RUTAS_VUELOS_PRINCIPALES.has(ruta) ||
    RUTAS_NACIONALES.has(ruta)
  );
}

// Mismo valor que el layout: si una página declara `robots`, reemplaza al del layout completo.
export const ROBOTS_INDEXABLE: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

// El resto sigue abierto para anuncios y WhatsApp, pero fuera de los resultados de Google (sus enlaces sí se siguen).
export function robotsSegunRuta(ruta: string): Metadata["robots"] {
  return esIndexable(ruta) ? ROBOTS_INDEXABLE : { index: false, follow: true };
}
