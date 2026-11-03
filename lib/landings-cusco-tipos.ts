// Tipos de las landings de apoyo de Cusco (/cusco/<slug>): páginas sobre dudas reales de viaje
// (altura, mejor época, días necesarios, entradas a Machu Picchu) que enlazan entre sí y al hub /cusco.

export interface PuntoCusco {
  t: string;
  d: string;
}

export interface LandingCusco {
  slug: string;
  tituloSeo: string;
  descripcion: string;
  migas: string;
  h1: string;
  bajada: string;
  chips: string[];
  foto: string;
  fotoAlt: string;
  boton: string;
  mensaje: string;
  puntosTitulo: string;
  puntos: PuntoCusco[];
  listaTitulo: string;
  lista: string[];
  faqs: { q: string; a: string }[];
  enlaces: { href: string; texto: string }[];
}
