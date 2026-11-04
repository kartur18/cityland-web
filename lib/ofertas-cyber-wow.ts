import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

// Ofertas "Cyber Wow" confirmadas por gerencia (3-nov-2026), con el precio exacto de cada banner ya aprobado
// para redes. Acá se usa el mismo precio, tal cual, en la página web de cada destino. Precio con "$" simple
// (no "US$") y con "Desde" adelante, por pedido directo de gerencia para esta campaña puntual.
export interface OfertaCyberWow {
  slug: string;
  destino: string;
  pais: string;
  precio: number;
  dias: number;
  noches: number;
  aerolinea?: string;
  incluye: string[];
  foto: string;
  fotoAlt: string;
}

export const OFERTAS_CYBER_WOW: OfertaCyberWow[] = [
  {
    slug: "rio-de-janeiro",
    destino: "Río de Janeiro",
    pais: "Brasil",
    precio: 859,
    dias: 4,
    noches: 3,
    incluye: ["Vuelos", "Hotel 4 días / 3 noches", "Desayunos diarios", "Traslados aeropuerto – hotel – aeropuerto"],
    foto: obtenerGaleriaPorTexto("rio de janeiro copacabana brasil")[0],
    fotoAlt: "Playa de Copacabana en Río de Janeiro",
  },
  {
    slug: "medellin",
    destino: "Medellín",
    pais: "Colombia",
    precio: 599,
    dias: 4,
    noches: 3,
    incluye: ["Vuelos", "Hotel 4 días / 3 noches", "Desayunos diarios", "Traslados aeropuerto – hotel – aeropuerto"],
    foto: obtenerGaleriaPorTexto("medellin colombia comuna 13")[0],
    fotoAlt: "Comuna 13 en Medellín, Colombia",
  },
  {
    slug: "ciudad-de-panama",
    destino: "Ciudad de Panamá",
    pais: "Panamá",
    precio: 799,
    dias: 4,
    noches: 3,
    incluye: ["Vuelos", "Hotel 4 días / 3 noches", "Desayunos diarios", "Traslados aeropuerto – hotel – aeropuerto"],
    foto: "/images/paquetes/panama-medellin/hero-panama.jpg",
    fotoAlt: "Skyline de Ciudad de Panamá",
  },
  {
    slug: "punta-cana",
    destino: "Punta Cana",
    pais: "República Dominicana",
    precio: 1049,
    dias: 5,
    noches: 4,
    aerolinea: "Avianca",
    incluye: [
      "Boleto aéreo ida y vuelta vía Avianca",
      "Equipaje: mochila + maleta de mano (carry on)",
      "Alojamiento 5 días",
      "Hotel todo incluido",
      "Traslados aeropuerto – hotel – aeropuerto",
    ],
    foto: obtenerGaleriaPorTexto("punta cana playa republica dominicana")[0],
    fotoAlt: "Playa de Punta Cana, República Dominicana",
  },
  {
    slug: "cartagena-de-indias",
    destino: "Cartagena de Indias",
    pais: "Colombia",
    precio: 669,
    dias: 4,
    noches: 3,
    incluye: ["Vuelos", "Hotel 4 días / 3 noches", "Desayunos diarios", "Traslados aeropuerto – hotel – aeropuerto"],
    foto: obtenerGaleriaPorTexto("cartagena de indias ciudad amurallada")[0],
    fotoAlt: "Ciudad amurallada de Cartagena de Indias",
  },
];

export function buscarOfertaCyberWow(slug: string): OfertaCyberWow | undefined {
  return OFERTAS_CYBER_WOW.find((o) => o.slug === slug);
}

export const rutaOfertaCyberWow = (o: OfertaCyberWow) => `/ofertas/cyber-wow/${o.slug}`;

// Precio con "$" simple (no "US$") y sin decimales: pedido puntual de gerencia para esta campaña.
export const dolarCyberWow = (n: number) => `$${n.toLocaleString("en-US")}`;
