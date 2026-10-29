// Tipos de las landings de Italia (/italia/<slug>). Cada grupo trae sus propios bloques de datos y su diseño.

export type GrupoItalia = "ida" | "provincia" | "regreso" | "regresoTema" | "guia" | "mes" | "fiesta" | "combinado";

export interface Tramo {
  // «Arequipa → Lima», «Lima → Madrid»…
  ruta: string;
  detalle: string;
  duracion: string;
}

export interface PrecioMes {
  mes: string;
  precio: number;
  // «Temporada alta», «Navidad»…: se pinta como etiqueta sobre la barra.
  nota?: string;
}

export interface Tabla {
  cab: string[];
  filas: string[][];
}

export interface Seccion {
  id: string;
  titulo: string;
  texto?: string[];
  lista?: string[];
  tabla?: Tabla;
  // «aviso» va en ámbar; «tarjetas» reparte la lista en tarjetas con foto si hay.
  estilo?: "normal" | "aviso" | "tarjetas";
}

export interface PaqueteEnlace {
  nombre: string;
  href: string;
  detalle: string;
  precio?: number;
}

export interface LandingItalia {
  slug: string;
  grupo: GrupoItalia;
  // ≤ 54 caracteres: tituloSeo() le suma « | Cityland».
  tituloSeo: string;
  descripcion: string;
  h1: string;
  bajada: string;
  migas: string;
  sello: string;
  foto: string;
  fotoAlt: string;
  precio?: number;
  etiquetaPrecio: string;
  detallePrecio?: string;
  mensaje: string;
  boton: string;
  // Códigos del boleto de la portada (LIM → VCE).
  boleto?: { de: string; deNombre: string; a: string; aNombre: string };
  datos?: { k: string; v: string }[];
  tramos?: Tramo[];
  meses?: PrecioMes[];
  tituloMeses?: string;
  secciones: Seccion[];
  paquetes?: PaqueteEnlace[];
  // Pregunta lista para mandar por WhatsApp (tarjeta con forma de chat).
  pregunta?: string;
  fuentes?: { texto: string; url: string }[];
  faqs: { q: string; a: string }[];
  enlaces: { texto: string; href: string }[];
}
