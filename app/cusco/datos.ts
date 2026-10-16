export interface PaqueteCusco {
  id: string;
  titulo: string;
  duracion: string;
  precioSoles: number;
  precioUSD: number;
  precioRegularSoles: number;
  tag: string;
  tagBg: string;
  img: string;
  alt: string;
  resumenCorto: string;
  checks: [string, string, string];
  waNumber: string;
}

export const PAQUETES_CUSCO: PaqueteCusco[] = [
  {
    id: "cusco-express-3d",
    titulo: "Cusco Express & Machu Picchu",
    duracion: "3 Días / 2 Noches",
    precioSoles: 1190,
    precioUSD: 319,
    precioRegularSoles: 1490,
    tag: "Escapada Fin de Semana",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    alt: "Paquete Cusco Express 3 Días Machu Picchu desde Lima - Cityland Travel",
    resumenCorto:
      "Vuelo I/V desde Lima + Hotel con desayunos + Tren turístico + Entrada oficial a Machu Picchu, bus Consettur y guía.",
    checks: ["Vuelo I/V + Traslados", "Hotel céntrico + Desayunos", "Tren + Entrada Machu Picchu"],
    waNumber: "51983891157",
  },
  {
    id: "cusco-clasico-4d",
    titulo: "Cusco Clásico, Valle Sagrado & Machu Picchu",
    duracion: "4 Días / 3 Noches",
    precioSoles: 1490,
    precioUSD: 399,
    precioRegularSoles: 1850,
    tag: "#1 Más Vendido",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
    alt: "Paquete Cusco Clásico 4 Días Valle Sagrado y Machu Picchu - Cityland Travel",
    resumenCorto:
      "Vuelo I/V + Hotel + City Tour 4 Ruinas + Valle Sagrado con almuerzo buffet en Urubamba + Machu Picchu completo en tren.",
    checks: ["Vuelo I/V + Hotel 3★/4★", "City Tour + Valle Sagrado", "Machu Picchu Todo Incluido"],
    waNumber: "51944031724",
  },
  {
    id: "cusco-7-colores-5d",
    titulo: "Cusco Mágico + Montaña de 7 Colores",
    duracion: "5 Días / 4 Noches",
    precioSoles: 1790,
    precioUSD: 479,
    precioRegularSoles: 2190,
    tag: "Aventura & Cultura",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1200&q=85",
    alt: "Paquete Cusco 5 Días con Montaña de 7 Colores y Machu Picchu - Cityland Travel",
    resumenCorto:
      "Vuelo I/V + Hotel + City Tour + Valle Sagrado + Machu Picchu + Excursión guiada a la Montaña de 7 Colores (Vinicunca).",
    checks: ["Vuelo I/V + 4 Noches Hotel", "Machu Picchu + Valle Sagrado", "Montaña 7 Colores con Almuerzo"],
    waNumber: "51907451255",
  },
  {
    id: "cusco-imperial-6d",
    titulo: "Cusco Imperial: Humantay, 7 Colores & Maras Moray",
    duracion: "6 Días / 5 Noches",
    precioSoles: 2090,
    precioUSD: 559,
    precioRegularSoles: 2550,
    tag: "Experiencia Total",
    tagBg: "bg-amber-600 text-white",
    img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=85",
    alt: "Paquete Cusco Imperial 6 Días Laguna Humantay, Maras Moray y Machu Picchu",
    resumenCorto:
      "El circuito más completo: Vuelo I/V + 5 noches de hotel + Machu Picchu + Valle Sagrado + Laguna Humantay + Montaña de 7 Colores.",
    checks: ["Vuelo I/V + 5 Noches Hotel", "Machu Picchu + Maras Moray", "Laguna Humantay + 7 Colores"],
    waNumber: "51983269950",
  },
];
