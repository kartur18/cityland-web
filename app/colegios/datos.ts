export interface PaqueteEscolar {
  id: string;
  titulo: string;
  pais: string;
  filtro: "nacional" | "internacional";
  duracion: string;
  precioTexto: string;
  precioSecundario: string;
  precioNumeroSoles: number;
  tag: string;
  tagBg: string;
  img: string;
  alt: string;
  resumenCorto: string;
  checks: [string, string, string];
  waNumber: string;
}

export const PAQUETES_COLEGIOS: PaqueteEscolar[] = [
  {
    id: "promocion-cusco-machu-picchu",
    titulo: "Cusco & Machu Picchu Todo Incluido",
    pais: "Perú",
    filtro: "nacional",
    duracion: "4 Días / 3 Noches (Aéreo)",
    precioTexto: "S/ 1,690",
    precioSecundario: "($450 USD)",
    precioNumeroSoles: 1690,
    tag: "#1 Promociones Perú",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    alt: "Viaje de Promoción a Cusco y Machu Picchu Todo Incluido para Colegios - Cityland Travel",
    resumenCorto:
      "Vuelos I/V + Hotel + Alimentación completa (Desayuno, Almuerzo y Cena) + Tren y entrada a Machu Picchu + Valle Sagrado + 1 Liberado cada 15 alumnos.",
    checks: ["Vuelo I/V + Pensión Completa", "Machu Picchu + Valle Sagrado", "1 Liberado cada 15 pagantes"],
    waNumber: "51906450098",
  },
  {
    id: "promocion-punta-sal-mancora",
    titulo: "Punta Sal & Máncora Sol y Playa",
    pais: "Perú",
    filtro: "nacional",
    duracion: "4 Días / 3 Noches (Aéreo)",
    precioTexto: "S/ 1,390",
    precioSecundario: "($370 USD)",
    precioNumeroSoles: 1390,
    tag: "Playa & Resort",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    alt: "Viaje de Promoción a Punta Sal y Máncora para Colegios e Institutos - Cityland Travel",
    resumenCorto:
      "Vuelo Lima–Tumbes I/V + Hotel frente al mar con piscina + Alimentación completa + Nado con tortugas en El Ñuro y Manglares de Tumbes.",
    checks: ["Vuelo I/V + Hotel con Piscina", "Desayunos, Almuerzos y Cenas", "Nado con Tortugas + Manglares"],
    waNumber: "51942086698",
  },
  {
    id: "promocion-tarapoto-selva",
    titulo: "Tarapoto & Laguna Azul Aventura",
    pais: "Perú",
    filtro: "nacional",
    duracion: "4 Días / 3 Noches (Aéreo)",
    precioTexto: "S/ 1,290",
    precioSecundario: "($345 USD)",
    precioNumeroSoles: 1290,
    tag: "Selva & Aventura",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=85",
    alt: "Viaje de Promoción a Tarapoto para Colegios e Institutos - Cityland Travel",
    resumenCorto:
      "Vuelo Lima–Tarapoto I/V + Resort con piscina + Alimentación completa + Paseo en bote en Laguna Azul, Cataratas de Ahuashiyacu y Castillo de Lamas.",
    checks: ["Vuelo I/V + Resort con Piscina", "Pensión Completa Incluida", "Laguna Azul + Ahuashiyacu"],
    waNumber: "51944280151",
  },
  {
    id: "promocion-cartagena-colombia",
    titulo: "Cartagena & Isla Barú Internacional",
    pais: "Colombia",
    filtro: "internacional",
    duracion: "4 Días / 3 Noches",
    precioTexto: "$549",
    precioSecundario: "USD por alumno",
    precioNumeroSoles: 2050,
    tag: "Viajan Solo con DNI",
    tagBg: "bg-amber-600 text-white",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    alt: "Viaje de Promoción y Graduación a Cartagena Colombia - Cityland Travel",
    resumenCorto:
      "El viaje internacional favorito de Secundaria e Institutos (sin pasaporte). Vuelo directo + Hotel en Bocagrande + Isla Barú y Chiva Turística.",
    checks: ["Vuelo Directo + Traslados", "Hotel en Bocagrande", "Playa Blanca Barú + Seguro"],
    waNumber: "51938845086",
  },
  {
    id: "promocion-punta-cana",
    titulo: "Punta Cana Resort 5★ All Inclusive",
    pais: "República Dominicana",
    filtro: "internacional",
    duracion: "5 Días / 4 Noches",
    precioTexto: "$929",
    precioSecundario: "USD por alumno",
    precioNumeroSoles: 3480,
    tag: "Todo Incluido 24h",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    alt: "Viaje de Promoción y Graduación a Punta Cana Todo Incluido - Cityland Travel",
    resumenCorto:
      "Vuelo I/V + Resort 5★ en Playa Bávaro con todas las comidas, snacks y bebidas ilimitadas 24h + Catamarán a Isla Saona y Seguro Médico.",
    checks: ["Vuelo I/V desde Lima", "Resort 5★ Todo Incluido 24h", "Isla Saona + 1 Liberado c/15"],
    waNumber: "51906642487",
  },
  {
    id: "promocion-cancun-graduacion",
    titulo: "Cancún & Riviera Maya Graduación",
    pais: "México",
    filtro: "internacional",
    duracion: "5 Días / 4 Noches",
    precioTexto: "$879",
    precioSecundario: "USD por alumno",
    precioNumeroSoles: 3290,
    tag: "Universidades & Promos",
    tagBg: "bg-blue-600 text-white",
    img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    alt: "Viaje de Graduación y Promoción a Cancún Todo Incluido - Cityland Travel",
    resumenCorto:
      "Ideal para promociones de 5to de secundaria, institutos y universidades. Vuelo I/V + Resort Todo Incluido 24h + Chichén Itzá y Cenote.",
    checks: ["Vuelo I/V desde Lima", "Resort All Inclusive 24h", "Chichén Itzá + Seguro Grupal"],
    waNumber: "51944031724",
  },
];
