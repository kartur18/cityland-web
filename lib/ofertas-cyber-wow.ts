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
  // Documento/visa: mismo texto ya verificado que usan las guías de requisitos del sitio (no se repite texto
  // nuevo sin fuente). rutaRequisitos enlaza a la guía completa con la fuente oficial.
  documentos: string;
  rutaRequisitos: string;
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
    documentos: "Viajas con tu DNI peruano vigente o pasaporte, sin visa: Brasil te deja entrar como turista hasta 90 días.",
    rutaRequisitos: "/viajes/requisitos-viajar-a-brasil-solo-dni",
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
    documentos:
      "Viajas solo con tu DNI peruano vigente (o pasaporte) por los acuerdos de la Comunidad Andina. Solo falta llenar el Check-Mig, el registro gratis de Migración Colombia, antes de tu vuelo.",
    rutaRequisitos: "/viajes/requisitos-viajar-a-colombia-solo-dni",
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
    documentos:
      "Sin visa para peruanos: pasaporte vigente (mínimo 6 meses), boleto de retorno, reserva de hotel y solvencia económica mínima de $500 o tarjeta de crédito.",
    rutaRequisitos: "/viajes/requisitos-viajar-a-panama-desde-peru",
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
    documentos:
      "No necesitas visa ni tarjeta de turista: pasaporte vigente mínimo 6 meses y llenar el E-Ticket de migración, que es gratis y se hace en línea.",
    rutaRequisitos: "/viajes/requisitos-viajar-a-punta-cana-desde-peru",
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
    documentos:
      "Viajas solo con tu DNI peruano vigente (o pasaporte) por los acuerdos de la Comunidad Andina. Solo falta llenar el Check-Mig, el registro gratis de Migración Colombia, antes de tu vuelo.",
    rutaRequisitos: "/viajes/requisitos-viajar-a-colombia-solo-dni",
  },
];

export function buscarOfertaCyberWow(slug: string): OfertaCyberWow | undefined {
  return OFERTAS_CYBER_WOW.find((o) => o.slug === slug);
}

export const rutaOfertaCyberWow = (o: OfertaCyberWow) => `/ofertas/cyber-wow/${o.slug}`;

// Precio con "$" simple (no "US$") y sin decimales: pedido puntual de gerencia para esta campaña.
export const dolarCyberWow = (n: number) => `$${n.toLocaleString("en-US")}`;
