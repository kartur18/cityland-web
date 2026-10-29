// Tipos de las páginas de seguros de viaje (/seguros/<slug>). Tres familias: por destino, por perfil y dudas.

export type GrupoSeguro = "destino" | "perfil" | "duda";

// Lo que dice la norma del país para un peruano que entra como turista.
export type Exigencia = "obligatorio" | "declarar" | "recomendado" | "no-obligatorio";

export interface Veredicto {
  estado: Exigencia;
  // Frase corta que se lee grande: «Sí, desde US$ 15,000».
  titular: string;
  detalle: string;
}

export interface Fuente {
  texto: string;
  url: string;
}

export interface Seccion {
  id: string;
  titulo: string;
  texto?: string[];
  lista?: string[];
  tabla?: { cab: string[]; filas: string[][] };
  // «aviso» va con borde ámbar; «pasos» numera la lista.
  estilo?: "normal" | "aviso" | "pasos";
}

export interface LandingSeguro {
  slug: string;
  grupo: GrupoSeguro;
  // ≤ 54 caracteres: tituloSeo() le suma « | Cityland».
  tituloSeo: string;
  descripcion: string;
  h1: string;
  bajada: string;
  // Nombre corto para migas y enlaces entre páginas.
  migas: string;
  sello: string;
  foto: string;
  fotoAlt: string;
  // Para el cotizador: destino ya elegido («Europa (Schengen)», «Curazao»…) o vacío en perfiles y dudas.
  destino?: string;
  veredicto?: Veredicto;
  // Lo que tiene que cubrir la póliza para ese viaje.
  cubrir: string[];
  secciones: Seccion[];
  mensaje: string;
  pregunta: string;
  faqs: { q: string; a: string }[];
  fuentes: Fuente[];
  enlaces: { href: string; texto: string }[];
}
