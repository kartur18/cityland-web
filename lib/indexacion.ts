import type { Metadata } from "next";
import { PAGINAS_CON_CLIENTES, PAGINAS_CON_VISITAS_GSC, PAGINAS_FUERTES } from "@/lib/paginas-fuertes";
import { RUTAS_VUELOS_PRINCIPALES } from "@/lib/rutas-vuelos";
import { CIUDADES_ESPANA_CON_RUTA } from "@/lib/catalogo-vuelos-masivo";
import { VARIANTE_A_PRINCIPAL } from "@/lib/variantes-ofertas";
import { PRUEBA_REAPERTURA } from "@/lib/prueba-reapertura";
import { PAGINAS_RECUPERADAS } from "@/lib/paginas-recuperadas";

// Cada ciudad de España responde su propia búsqueda («pasajes Lima Tenerife»): ida desde Lima y vuelta a Lima.
const RUTAS_ESPANA: ReadonlySet<string> = new Set(
  [...CIUDADES_ESPANA_CON_RUTA.map((c) => c.slug), "valencia", "sevilla", "bilbao"].flatMap((c) => [`/vuelos/lima-${c}`, `/vuelos/${c}-lima`])
);
// Ciudades con vuelo comercial regular desde Lima: rutas nacionales que vendemos cada mes (Chiclayo, Tumbes, Pucallpa…).
const CIUDADES_CON_VUELO_DESDE_LIMA = [
  "arequipa", "trujillo", "chiclayo", "piura", "cusco", "iquitos", "tarapoto", "tacna", "juliaca", "cajamarca",
  "pucallpa", "tumbes", "talara", "ayacucho", "jauja", "puerto-maldonado", "jaen",
];
// Una página por destino de viaje de promoción (las variantes «grupos-», «cotizacion-»… siguen fuera de Google).
const VIAJES_DE_PROMOCION: ReadonlySet<string> = new Set(
  [
    "escolar-punta-cana", "escolar-cusco-machu-picchu", "escolar-cancun", "escolar-tarapoto",
    "decameron-punta-sal", "cartagena-san-andres",
  ].map((d) => `/ofertas/paquetes-viaje-de-promocion-${d}`)
);
const RUTAS_NACIONALES: ReadonlySet<string> = new Set(
  CIUDADES_CON_VUELO_DESDE_LIMA.flatMap((c) => [`/vuelos/lima-${c}`, `/vuelos/${c}-lima`])
);

// Google solo guarda lo que ya rinde o responde una búsqueda real: inicio, hubs de un nivel, blog, los ~130 destinos,
// las guías de requisitos, las rutas de vuelo que vendemos, las páginas con impresiones y las que trajeron chats.
export function esIndexable(ruta: string): boolean {
  if (VARIANTE_A_PRINCIPAL.has(ruta)) return false;
  return (
    ruta === "/" ||
    ruta.split("/").length <= 2 ||
    ruta.startsWith("/blog/") ||
    ruta.startsWith("/destinos/") ||
    ruta.startsWith("/circuitos/") ||
    ruta.startsWith("/viajes-a/") ||
    ruta.startsWith("/salidas/") ||
    ruta.startsWith("/paquetes-armados/") ||
    ruta.startsWith("/paquetes-turisticos/") ||
    ruta.startsWith("/tours-y-actividades/") ||
    ruta.startsWith("/viajes/requisitos-") ||
    ruta.startsWith("/espana/") ||
    ruta.startsWith("/italia/") ||
    PAGINAS_FUERTES.has(ruta) ||
    PAGINAS_CON_CLIENTES.has(ruta) ||
    PAGINAS_CON_VISITAS_GSC.has(ruta) ||
    PRUEBA_REAPERTURA.has(ruta) ||
    PAGINAS_RECUPERADAS.has(ruta) ||
    RUTAS_VUELOS_PRINCIPALES.has(ruta) ||
    RUTAS_NACIONALES.has(ruta) ||
    RUTAS_ESPANA.has(ruta) ||
    VIAJES_DE_PROMOCION.has(ruta)
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
