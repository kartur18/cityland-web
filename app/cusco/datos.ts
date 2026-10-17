export interface PaqueteCusco {
  id: string;
  titulo: string;
  duracion: string;
  precioUSD: number;
  precioRegularUSD: number;
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
    precioUSD: 399,
    precioRegularUSD: 499,
    tag: "Escapada Fin de Semana",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    alt: "Paquete Cusco Express 3 Días Machu Picchu desde Lima - Cityland Travel",
    resumenCorto:
      "Vuelo I/V desde Lima + Hotel con desayunos + Tren turístico + Entrada oficial a Machu Picchu, bus Consettur y guía.",
    checks: ["Vuelo I/V + Traslados", "Hotel céntrico + Desayunos", "Tren + Entrada Machu Picchu"],
    waNumber: "51944103890",
  },
  {
    id: "cusco-clasico-4d",
    titulo: "Cusco Clásico, Valle Sagrado & Machu Picchu",
    duracion: "4 Días / 3 Noches",
    precioUSD: 499,
    precioRegularUSD: 620,
    tag: "#1 Más Vendido",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
    alt: "Paquete Cusco Clásico 4 Días Valle Sagrado y Machu Picchu - Cityland Travel",
    resumenCorto:
      "Vuelo I/V + Hotel + City Tour 4 Ruinas + Valle Sagrado con almuerzo buffet en Urubamba + Machu Picchu completo en tren.",
    checks: ["Vuelo I/V + Hotel 3★/4★", "City Tour + Valle Sagrado", "Machu Picchu Todo Incluido"],
    waNumber: "51944103890",
  },
  {
    id: "cusco-7-colores-5d",
    titulo: "Cusco Mágico + Montaña de 7 Colores",
    duracion: "5 Días / 4 Noches",
    precioUSD: 589,
    precioRegularUSD: 730,
    tag: "Aventura & Cultura",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1200&q=85",
    alt: "Paquete Cusco 5 Días con Montaña de 7 Colores y Machu Picchu - Cityland Travel",
    resumenCorto:
      "Vuelo I/V + Hotel + City Tour + Valle Sagrado + Machu Picchu + Excursión guiada a la Montaña de 7 Colores (Vinicunca).",
    checks: ["Vuelo I/V + 4 Noches Hotel", "Machu Picchu + Valle Sagrado", "Montaña 7 Colores con Almuerzo"],
    waNumber: "51944103890",
  },
  {
    id: "cusco-imperial-6d",
    titulo: "Cusco Imperial: Humantay, 7 Colores & Maras Moray",
    duracion: "6 Días / 5 Noches",
    precioUSD: 679,
    precioRegularUSD: 840,
    tag: "Experiencia Total",
    tagBg: "bg-amber-600 text-white",
    img: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=85",
    alt: "Paquete Cusco Imperial 6 Días Laguna Humantay, Maras Moray y Machu Picchu",
    resumenCorto:
      "El circuito más completo: Vuelo I/V + 5 noches de hotel + Machu Picchu + Valle Sagrado + Laguna Humantay + Montaña de 7 Colores.",
    checks: ["Vuelo I/V + 5 Noches Hotel", "Machu Picchu + Maras Moray", "Laguna Humantay + 7 Colores"],
    waNumber: "51944103890",
  },
];
