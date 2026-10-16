export interface DestinoLandingCaribe {
  id: string;
  slug: string;
  ciudad: string;
  pais: string;
  filtro: "all-inclusive" | "solo-dni" | "usa";
  duracion: string;
  precioUSD: number;
  precioRegularUSD: number;
  tag: string;
  tagBg: string;
  requisito: string;
  img: string;
  alt: string;
  resumenCorto: string;
  checks: [string, string, string];
  waNumber: string;
}

// ── Los 6 Destinos Más Vendidos en Perú (Tarifas Oficiales Referenciales desde Lima) ──
export const DESTINOS_TOP_PERU: DestinoLandingCaribe[] = [
  {
    id: "punta-cana",
    slug: "punta-cana",
    ciudad: "Punta Cana",
    pais: "República Dominicana",
    filtro: "all-inclusive",
    duracion: "5 Días / 4 Noches",
    precioUSD: 949,
    precioRegularUSD: 1250,
    tag: "Todo Incluido 24h",
    tagBg: "bg-red-600 text-white",
    requisito: "Pasaporte vigente (Sin Visa)",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    alt: "Paquete Punta Cana Todo Incluido desde Lima - Resort 5 estrellas en Playa Bávaro",
    resumenCorto: "Resort 5★ en Playa Bávaro + Comidas y bebidas ilimitadas 24h + Catamarán a Isla Saona",
    checks: ["Vuelo I/V desde Lima", "Resort 5★ All Inclusive", "Tour Isla Saona + Traslados"],
    waNumber: "51983891157",
  },
  {
    id: "cancun",
    slug: "cancun",
    ciudad: "Cancún & Riviera Maya",
    pais: "México",
    filtro: "all-inclusive",
    duracion: "5 Días / 4 Noches",
    precioUSD: 899,
    precioRegularUSD: 1190,
    tag: "Todo Incluido 24h",
    tagBg: "bg-sky-600 text-white",
    requisito: "Pasaporte vigente",
    img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    alt: "Paquete Cancún Todo Incluido desde Lima - Zona Hotelera y Chichén Itzá",
    resumenCorto: "Resort frente al mar en Zona Hotelera + Todo Incluido 24h + Tour Chichén Itzá y Cenote",
    checks: ["Vuelo I/V desde Lima", "Resort All Inclusive 24h", "Chichén Itzá + Traslados"],
    waNumber: "51944031724",
  },
  {
    id: "cartagena",
    slug: "cartagena",
    ciudad: "Cartagena de Indias",
    pais: "Colombia",
    filtro: "solo-dni",
    duracion: "4 Días / 3 Noches",
    precioUSD: 569,
    precioRegularUSD: 780,
    tag: "Viaja Solo con DNI",
    tagBg: "bg-emerald-600 text-white",
    requisito: "Solo DNI vigente (Sin Pasaporte)",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    alt: "Paquete Cartagena de Indias desde Lima - Ciudad Amurallada e Isla Barú",
    resumenCorto: "Vuelo directo + Hotel en Bocagrande con desayunos + Día de playa en Isla Barú",
    checks: ["Vuelo directo I/V", "Hotel en Bocagrande", "Isla Barú + Traslados"],
    waNumber: "51907451255",
  },
  {
    id: "medellin",
    slug: "medellin",
    ciudad: "Medellín & Guatapé",
    pais: "Colombia",
    filtro: "solo-dni",
    duracion: "4 Días / 3 Noches",
    precioUSD: 549,
    precioRegularUSD: 750,
    tag: "Viaja Solo con DNI",
    tagBg: "bg-emerald-600 text-white",
    requisito: "Solo DNI vigente (Sin Pasaporte)",
    img: "/images/paquetes/panama-medellin/medellin-skyline.png",
    alt: "Paquete Medellín y Guatapé desde Lima - Piedra del Peñol y Comuna 13",
    resumenCorto: "Vuelo directo + Hotel en El Poblado + Excursión a la Piedra del Peñol, Guatapé y Comuna 13",
    checks: ["Vuelo directo I/V", "Hotel en El Poblado", "Guatapé + Comuna 13"],
    waNumber: "51983269950",
  },
  {
    id: "rio-de-janeiro",
    slug: "rio-de-janeiro",
    ciudad: "Río de Janeiro",
    pais: "Brasil",
    filtro: "solo-dni",
    duracion: "5 Días / 4 Noches",
    precioUSD: 749,
    precioRegularUSD: 990,
    tag: "Viaja Solo con DNI",
    tagBg: "bg-amber-600 text-white",
    requisito: "Solo DNI vigente (Sin Visa)",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
    alt: "Paquete Río de Janeiro desde Lima - Copacabana, Cristo Redentor y Pan de Azúcar",
    resumenCorto: "Hotel 4★ a pasos de Copacabana con desayunos + Tour Cristo Redentor y Pan de Azúcar",
    checks: ["Vuelo I/V desde Lima", "Hotel 4★ Copacabana", "Cristo + Pan de Azúcar"],
    waNumber: "51913637476",
  },
  {
    id: "miami-orlando",
    slug: "miami-orlando",
    ciudad: "Miami & Orlando",
    pais: "Estados Unidos",
    filtro: "usa",
    duracion: "7 Días / 6 Noches",
    precioUSD: 1049,
    precioRegularUSD: 1390,
    tag: "Playas, Compras & Parques",
    tagBg: "bg-blue-600 text-white",
    requisito: "Visa Americana vigente",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    alt: "Paquete Miami y Orlando desde Lima - South Beach y Compras en Outlets",
    resumenCorto: "Hoteles en Miami y Orlando con desayunos + Tour de compras en Outlets y South Beach",
    checks: ["Vuelo I/V desde Lima", "Hotel Miami & Orlando", "Tour Outlets + Traslados"],
    waNumber: "51903212007",
  },
];
