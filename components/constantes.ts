// ── Constantes Comerciales y Datos de Cityland Travel ──
import { formatoUSD } from "@/lib/formato-precio";
import { inicialSeparacion, tarifasMigratorio } from "@/lib/precios-migratorio";

const TARIFAS_ITALIA = tarifasMigratorio("Italia");
const TARIFAS_FRANCIA = tarifasMigratorio("Francia");

export const EMPRESA_NOMBRE = "Cityland Travel";
export const EMPRESA_RAZON_SOCIAL = "Cityland Group E.I.R.L.";
export const EMPRESA_RUC = "20614914239";
export const EMPRESA_DIRECCION = "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima";
export const EMPRESA_HORARIO = "Lunes a Sábado: 9:00 am - 7:00 pm";

// Las dos oficinas reales, cada una con su razón social (RUC verificados en SUNAT y en el sistema interno).
export const OFICINAS = [
  {
    nombre: "Oficina Antúnez de Mayolo",
    direccion: "Av. Santiago Antúnez de Mayolo 814, Urb. Mercurio, Los Olivos, Lima",
    razonSocial: "Cityland Group E.I.R.L.",
    ruc: "20614914239",
    mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Antunez+de+Mayolo+814+Los+Olivos+Lima",
  },
  {
    nombre: "Oficina Angélica Gamarra",
    direccion: "Av. Angélica Gamarra 763, Los Olivos, Lima",
    razonSocial: "Cityland Travel S.A.C.",
    ruc: "20611406305",
    mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Angelica+Gamarra+763+Los+Olivos+Lima",
  },
] as const;

// Números de WhatsApp que usa Cityland con sus clientes; la página /canales-oficiales los publica.
export const WHATSAPP_OFICIALES = [
  { numero: "+51 944 103 890", uso: "Cotizaciones desde la web y ventas" },
  { numero: "+51 941 551 530", uso: "Ventas y atención de clientes" },
] as const;

export const RESENAS_GOOGLE_URL = "https://www.google.com/maps/search/?api=1&query=Cityland+Travel+Los+Olivos";

// Número oficial único de WhatsApp y Central Comercial (conectado a la Bandeja Cityland Travel)
export const NUMERO_WHATSAPP_OFICIAL = "51944103890";
export const TELEFONO = "+51944103890";
export const TELEFONO_FORMATEADO = "+51 944 103 890";
export const TIPO_CAMBIO_REF = 3.75; // Tipo de cambio referencial USD -> PEN
export const CATALOGO_LINK = "#paquetes";

export const TODOS_LOS_NUMEROS_WHATSAPP = [
  NUMERO_WHATSAPP_OFICIAL,
] as const;

export const WHATSAPP_ROUTING = {
  europa: [NUMERO_WHATSAPP_OFICIAL],
  caribe: [NUMERO_WHATSAPP_OFICIAL],
  general: [NUMERO_WHATSAPP_OFICIAL],
};

/**
 * Retorna siempre el número oficial único de WhatsApp de Cityland Travel (944 103 890).
 */
export function getNumeroWhatsapp(_categoria?: "europa" | "caribe" | "general" | string, _seed: string = ""): string {
  return NUMERO_WHATSAPP_OFICIAL;
}

/**
 * Genera el enlace de WhatsApp con mensaje precargado, número oficial y atribución 📍 Ref Web.
 */
export function buildWaUrl(params: {
  categoria?: "europa" | "caribe" | "general" | string;
  destino?: string;
  tipo?: string;
  precioUSD?: number;
  duracion?: string;
  mensajePersonalizado?: string;
  texto?: string;
  refWeb?: string;
}): string {
  const cat = params.categoria || "general";
  const seed = params.destino || "general";
  const num = getNumeroWhatsapp(cat, seed);
  const refEtiqueta =
    params.refWeb ||
    (params.destino
      ? `citylandtravel.com [${params.destino}${params.tipo ? ` · ${params.tipo}` : ""}]`
      : "citylandtravel.com [Web Oficial]");

  const customText = params.mensajePersonalizado || params.texto;
  if (customText) {
    const finalCustom = customText.includes("📍 Ref Web:")
      ? customText
      : `${customText}\n\n📍 Ref Web: ${refEtiqueta}`;
    return `https://wa.me/${num}?text=${encodeURIComponent(finalCustom)}`;
  }

  let texto = `¡Hola Cityland Travel! Vi su página web y deseo cotizar un viaje con un asesor especializado.`;
  if (params.destino && params.precioUSD) {
    texto = `¡Hola Cityland Travel! Vi en su web el paquete ${params.tipo || "Todo Incluido"} a ${params.destino}${params.duracion ? ` (${params.duracion})` : ""} desde $${params.precioUSD} USD. Deseo cotizar con un asesor para viajar separando con el 50% de inicial.`;
  } else if (params.destino) {
    texto = `¡Hola Cityland Travel! Deseo cotizar paquetes y vuelos a ${params.destino} saliendo desde Lima. ¿Tienen cupos disponibles?`;
  }

  const textoConRef = texto.includes("📍 Ref Web:")
    ? texto
    : `${texto}\n\n📍 Ref Web: ${refEtiqueta}`;

  return `https://wa.me/${num}?text=${encodeURIComponent(textoConRef)}`;
}

// Compatibilidad retroactiva con atribución automática
export function waLink(
  mensaje: string,
  categoria: "europa" | "caribe" | "general" = "general",
  refWeb?: string
): string {
  const num = getNumeroWhatsapp(categoria, mensaje);
  const refEtiqueta = refWeb || `citylandtravel.com [${categoria.toUpperCase()}]`;
  const finalMsg = mensaje.includes("📍 Ref Web:")
    ? mensaje
    : `${mensaje}\n\n📍 Ref Web: ${refEtiqueta}`;
  return `https://wa.me/${num}?text=${encodeURIComponent(finalMsg)}`;
}

export function armarLinkWhatsApp(mensaje: string, refWeb?: string): string {
  return waLink(mensaje, "general", refWeb);
}

export function buildWhatsAppHref(mensaje: string, refWeb?: string): string {
  return waLink(mensaje, "europa", refWeb);
}

export const WA_LINK = buildWaUrl({
  categoria: "general",
  mensajePersonalizado:
    "¡Hola Cityland Travel! Vi su web oficial y deseo cotizar paquetes y vuelos con un asesor.",
  refWeb: "citylandtravel.com [Contacto General]",
});

export function cotLink(
  destino: string,
  tipo: string,
  precio: number,
  categoria?: "europa" | "caribe" | "general",
  refWeb?: string
): string {
  const cat =
    categoria ||
    (tipo.toLowerCase().includes("migra") ||
    destino.toLowerCase().match(/madrid|barcelona|roma|milan|milán|turin|turín|italia|espana|españa|paris|europa/)
      ? "europa"
      : "caribe");
  return buildWaUrl({
    categoria: cat,
    destino,
    tipo,
    precioUSD: precio,
    refWeb,
  });
}

export function cotFormLink(data: {
  nombre: string;
  email: string;
  destino: string;
  fechaIda: string;
  fechaRetorno?: string;
  pasajeros: number;
  refWeb?: string;
}): string {
  const cat = data.destino
    .toLowerCase()
    .match(/madrid|barcelona|roma|milan|milán|turin|turín|italia|espana|españa|paris|europa/)
    ? "europa"
    : data.destino.toLowerCase().match(/punta cana|cancun|cartagena|medellin|caribe/)
    ? "caribe"
    : "general";
  const num = getNumeroWhatsapp(cat, data.destino);
  const refEtiqueta = data.refWeb || `citylandtravel.com [Formulario Cotizador · ${data.destino}]`;
  const msg = `¡Hola Cityland Travel! Solicito cotización desde la web:
• Pasajero: ${data.nombre}
• Correo: ${data.email}
• Destino: ${data.destino}
• Fecha ida: ${data.fechaIda}
• Fecha retorno: ${data.fechaRetorno || "Flexible"}
• Pasajeros: ${data.pasajeros}
Deseo conocer opciones separando con el 50% de inicial.

📍 Ref Web: ${refEtiqueta}`;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

// ── Tipos de Datos Enriquecidos ──
export interface InclusionesPaquete {
  vuelo: boolean;
  hotel: string;
  alimentacion: string;
  traslados: boolean;
  seguro: string;
  tour: string;
}

export interface PaqueteTuristico {
  id: string;
  slug: string;
  ciudad: string;
  pais: string;
  bandera: string;
  categoria: "caribe" | "europa" | "exoticos" | "sudamerica" | "norteamerica";
  duracion: string;
  precioUSD: number;
  precioSoles: number;
  precioRegularUSD?: number;
  tag: string;
  tagColor: "hot" | "promo" | "new" | "luxury";
  img: string;
  alt: string;
  tituloComercial: string;
  resaltado: string;
  inclusiones: InclusionesPaquete;
  toursDestacados: string[];
  descripcion: string;
  itinerario: string[];
  tipoViaje: "all-inclusive" | "circuito" | "migratorio" | "escapada";
  migratorioUSD?: number;
}

export interface Destino {
  ciudad: string;
  pais: string;
  bandera: string;
  slug: string;
  img: string;
  alt: string;
  tag?: string;
  tagColor?: "hot" | "promo" | "new" | "luxury";
  migratorio?: number;
  turistico: number;
  precioSoles?: number;
  migraDesc?: string;
  turiDesc: string;
  turiLabel?: string;
  regularPrice?: number;
  cuotas: number;
  gallery: string[];
  descripcion: string;
  itinerario: string[];
  temporada: "verano" | "invierno" | "todo-el-ano";
  tipo: "europa" | "caribe" | "exoticos" | "sudamerica" | "norteamerica";
  duracion?: string;
  inclusionesLista?: string[];
}

export interface BlogPost {
  slug: string;
  titulo: string;
  // Título corto para Google (≤ 48 caracteres + marca) cuando el H1 es más largo.
  tituloSeo?: string;
  desc: string;
  categoria: string;
  catColor: string;
  fecha: string;
  lectura: string;
  imagen: string;
  autor: string;
  contenido: string;
}

// ── CATÁLOGO MAESTRO DE PAQUETES TURÍSTICOS (Mercado Peruano - Tarifas en USD) ──
export const PAQUETES_COMPLETOS: PaqueteTuristico[] = [
  {
    id: "madrid-barcelona-europa",
    slug: "madrid",
    ciudad: "Madrid & Barcelona (España)",
    pais: "España",
    bandera: "🇪🇸",
    categoria: "europa",
    duracion: "Planes desde $699 · $799 · $899 · $999",
    precioUSD: 699,
    precioSoles: 2620,
    precioRegularUSD: 999,
    tag: "#1 MÁS VENDIDO · PAQUETE MIGRATORIO",
    tagColor: "hot",
    img: "/images/espana/puerta-de-alcala.jpg",
    alt: "Paquete Migratorio a Madrid y Barcelona desde Lima desde $699 USD",
    tituloComercial: "Paquete Migratorio a España: Madrid, Barcelona y 25 Ciudades",
    resaltado: "Pasaje de Ida + Reserva de Regreso + Hotel + Seguro 30.000€ + Check-in",
    inclusiones: {
      vuelo: true,
      hotel: "Reserva de hotel confirmada en España",
      alimentacion: "Según plan elegido ($699 a $999)",
      traslados: true,
      seguro: "Seguro médico Schengen 30.000€",
      tour: "Carpeta Migratoria Completa + Asesoría 1 a 1",
    },
    toursDestacados: [
      "Pasaje de avión emitido + Reserva de regreso 24h antes",
      "Reserva de hotel confirmada o ajuste con tu Carta de Invitación",
      "Seguro médico de 30.000€ + Check-in hecho y preparación migratoria",
    ],
    descripcion:
      "El paquete estrella de Cityland Travel para peruanos que viajan a Madrid, Barcelona, Valencia, Sevilla o cualquier ciudad de España. Incluye pasaje de ida emitido, reserva de regreso, hotel, seguro y check-in. La reserva de regreso no es un boleto emitido: si quieres viajar con el regreso emitido, te cotizamos ida y vuelta.",
    itinerario: [
      "Paso 1: Congelas tu cupo abonando el 50% de inicial ($350 USD en el Plan Promo de $699 o $400 USD en el Plan Smart de $799).",
      "Paso 2: Emitimos tu pasaje de avión de ida, tu póliza de seguro médico Schengen de 30.000€ y tu reserva de hotel confirmada.",
      "Paso 3: 24 horas antes de tu vuelo realizamos tu check-in, activamos tu reserva de retorno en sistema y te entregamos tu carpeta lista en Los Olivos.",
    ],
    tipoViaje: "migratorio",
    migratorioUSD: 699,
  },
  {
    id: "italia-milan-roma-migratorio",
    slug: "milan",
    ciudad: "Milán, Roma & Turín (Italia)",
    pais: "Italia",
    bandera: "🇮🇹",
    categoria: "europa",
    duracion: `Planes desde ${formatoUSD(TARIFAS_ITALIA.promo)} · ${formatoUSD(TARIFAS_ITALIA.smart)} · ${formatoUSD(TARIFAS_ITALIA.plus)} · ${formatoUSD(TARIFAS_ITALIA.full)}`,
    precioUSD: TARIFAS_ITALIA.promo,
    precioSoles: Math.round(TARIFAS_ITALIA.promo * TIPO_CAMBIO_REF),
    precioRegularUSD: TARIFAS_ITALIA.full,
    tag: "PAQUETE MIGRATORIO ITALIA",
    tagColor: "hot",
    img: "/images/destinos/milan.webp",
    alt: `Paquete Migratorio a Milán, Roma y Turín desde Lima desde ${formatoUSD(TARIFAS_ITALIA.promo)} USD`,
    tituloComercial: "Paquete Migratorio a Italia: Milán, Roma, Turín y Florencia",
    resaltado: "Pasaje de Ida + Retorno Reservado + Hotel / Dichiarazione + Seguro 30.000€",
    inclusiones: {
      vuelo: true,
      hotel: "Reserva de hotel en Italia o formato Ospitalità",
      alimentacion: `Según plan elegido (${formatoUSD(TARIFAS_ITALIA.promo)} a ${formatoUSD(TARIFAS_ITALIA.full)})`,
      traslados: true,
      seguro: "Seguro médico Schengen 30.000€",
      tour: "Carpeta Migratoria Italia + Guía 48h Questura",
    },
    toursDestacados: [
      "Vuelos hacia Milán-Malpensa, Roma-Fiumicino, Turín, Bolonia y Venecia",
      "Reserva de regreso + Reserva de hotel confirmada",
      "Formato oficial de Lettera di Invito y Dichiarazione di Ospitalità (48h)",
    ],
    descripcion:
      "Diseñado para la gran comunidad peruana que viaja a Milán, Roma, Turín, Florencia, Bolonia o Génova. Te entregamos tu carpeta migratoria completa con todos los requisitos que exige la Polizia di Frontiera italiana.",
    itinerario: [
      `Paso 1: Separa tu paquete a Italia con el 50% de inicial (${formatoUSD(inicialSeparacion(TARIFAS_ITALIA.promo))} USD en el Plan Promo de ${formatoUSD(TARIFAS_ITALIA.promo)}).`,
      "Paso 2: Emisión de pasaje aéreo, seguro médico de 30.000€ y reserva de alojamiento en tu ciudad de llegada.",
      "Paso 3: Activación de retorno reservado 24h antes, check-in y asesoría paso a paso para tu ingreso a Italia.",
    ],
    tipoViaje: "migratorio",
    migratorioUSD: TARIFAS_ITALIA.promo,
  },
  {
    id: "francia-paris-lyon-migratorio",
    slug: "paris",
    ciudad: "París, Lyon & Marsella (Francia)",
    pais: "Francia",
    bandera: "🇫🇷",
    categoria: "europa",
    duracion: `Planes desde ${formatoUSD(TARIFAS_FRANCIA.promo)} · ${formatoUSD(TARIFAS_FRANCIA.smart)} · ${formatoUSD(TARIFAS_FRANCIA.plus)} · ${formatoUSD(TARIFAS_FRANCIA.full)}`,
    precioUSD: TARIFAS_FRANCIA.promo,
    precioSoles: Math.round(TARIFAS_FRANCIA.promo * TIPO_CAMBIO_REF),
    precioRegularUSD: TARIFAS_FRANCIA.full,
    tag: "PAQUETE MIGRATORIO FRANCIA",
    tagColor: "promo",
    img: "/images/destinos/paris.webp",
    alt: `Paquete Migratorio a París y Francia desde Lima desde ${formatoUSD(TARIFAS_FRANCIA.promo)} USD`,
    tituloComercial: "Paquete Migratorio a Francia: París, Lyon, Marsella y Niza",
    resaltado: "Pasaje de Ida + Retorno Reservado + Hotel / Attestation + Seguro 30.000€",
    inclusiones: {
      vuelo: true,
      hotel: "Reserva de hotel confirmada en Francia",
      alimentacion: `Según plan elegido (${formatoUSD(TARIFAS_FRANCIA.promo)} a ${formatoUSD(TARIFAS_FRANCIA.full)})`,
      traslados: true,
      seguro: "Seguro médico Schengen 30.000€",
      tour: "Carpeta Migratoria Completa + Check-in 24h antes",
    },
    toursDestacados: [
      "Salidas hacia París (CDG / Orly), Lyon, Marsella, Niza y Bruselas",
      "Reserva de regreso + Reserva de hotel verificable sin Attestation",
      "Seguro Schengen de 30.000€ y preparación de entrevista migratoria",
    ],
    descripcion:
      "Viaja seguro a París, Lyon, Marsella o cualquier ciudad de Francia y Europa con tu carpeta migratoria completa: pasaje emitido, reserva de regreso, hotel confirmado y seguro médico.",
    itinerario: [
      `Paso 1: Reserva tu paquete con el 50% de inicial (${formatoUSD(inicialSeparacion(TARIFAS_FRANCIA.promo))} USD en el Plan Promo de ${formatoUSD(TARIFAS_FRANCIA.promo)}).`,
      "Paso 2: Emisión de boleto aéreo, seguro Schengen 30.000€ y reserva de hotel confirmada.",
      "Paso 3: Check-in 24h antes, activación de retorno en sistema y entrega de carpeta física en Los Olivos.",
    ],
    tipoViaje: "migratorio",
    migratorioUSD: TARIFAS_FRANCIA.promo,
  },
  {
    id: "punta-cana-all-inclusive",
    slug: "punta-cana",
    ciudad: "Punta Cana",
    pais: "República Dominicana",
    bandera: "🇩🇴",
    categoria: "caribe",
    duracion: "5 Días / 4 Noches",
    precioUSD: 1190,
    precioSoles: 4465,
    precioRegularUSD: 1390,
    tag: "TODO INCLUIDO · TOP CARIBE",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    alt: "Paquete Punta Cana All Inclusive desde Lima - Resort 5 estrellas frente al mar",
    tituloComercial: "Punta Cana Paradisíaco All Inclusive",
    resaltado: "Resort 5★ Frente al Mar + Todo Incluido 24h + Isla Saona",
    inclusiones: {
      vuelo: true,
      hotel: "Resort 5★ frente al mar",
      alimentacion: "Comidas y bebidas ilimitadas 24h",
      traslados: true,
      seguro: "Seguro médico incluido",
      tour: "Catamarán a Isla Saona",
    },
    toursDestacados: ["Catamarán a Isla Saona", "Piscina natural con estrellas de mar", "Actividades acuáticas del resort"],
    descripcion: "Disfruta de las mejores playas de arena blanca del Caribe con todo resuelto. Desayuna, almuerza y cena en restaurantes temáticos, disfruta de cócteles ilimitados y relájate sin pagar ni un dólar extra en destino.",
    itinerario: [
      "Día 1: Vuelo Lima ➔ Punta Cana. Recepción en aeropuerto y traslado al Resort 5 Estrellas. Check-in con cóctel de bienvenida.",
      "Día 2: Día libre All Inclusive para disfrutar de las playas de Playa Bávaro, piscinas infinity y shows nocturnos.",
      "Día 3: Tour de día completo a Isla Saona en catamarán con música, bebidas y almuerzo buffet en playa privada.",
      "Día 4: Actividades náuticas (kayak, snorkel), spa y cena especial en restaurante temático a la carta.",
      "Día 5: Desayuno buffet, tiempo libre de playa y traslado al aeropuerto para el vuelo de retorno a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "cancun-riviera-maya",
    slug: "cancun",
    ciudad: "Cancún & Riviera Maya",
    pais: "México",
    bandera: "🇲🇽",
    categoria: "caribe",
    duracion: "5 Días / 4 Noches",
    precioUSD: 1149,
    precioSoles: 4310,
    precioRegularUSD: 1350,
    tag: "ALL INCLUSIVE · PLAYA & CULTURA",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    alt: "Paquete Cancún All Inclusive desde Lima - Mar turquesa y ruinas mayas",
    tituloComercial: "Cancún & Riviera Maya Todo Incluido",
    resaltado: "Resort frente al mar + Todo Incluido 24h + Chichén Itzá",
    inclusiones: {
      vuelo: true,
      hotel: "Resort en Zona Hotelera",
      alimentacion: "Todo Incluido 24h",
      traslados: true,
      seguro: "Seguro médico incluido",
      tour: "Chichén Itzá y Cenote",
    },
    toursDestacados: ["Chichén Itzá (Maravilla del Mundo)", "Nado en Cenote Sagrado", "Ferry a Isla Mujeres (opcional)"],
    descripcion: "La combinación perfecta entre la mejor playa turquesa del Caribe, la historia milenaria de los mayas y la diversión inagotable de Cancún.",
    itinerario: [
      "Día 1: Vuelo Lima ➔ Cancún. Recepción con cartel y traslado al resort.",
      "Día 2: Día de descanso en las piscinas y playa del resort con plan todo incluido.",
      "Día 3: Excursión guiada a la ciudad maya de Chichén Itzá y nado en cenote con almuerzo tradicional.",
      "Día 4: Día de compras en La Isla Shopping Village o visita a los parques temáticos Xcaret.",
      "Día 5: Check-out, traslado al aeropuerto y vuelo de regreso a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "cartagena-baru",
    slug: "cartagena",
    ciudad: "Cartagena de Indias",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "caribe",
    duracion: "4 Días / 3 Noches",
    precioUSD: 899,
    precioSoles: 3370,
    precioRegularUSD: 1050,
    tag: "VUELO DIRECTO · SOLO DNI",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    alt: "Viajes a Cartagena desde Lima - Ciudad amurallada colonial y playas",
    tituloComercial: "Cartagena Colonial & Playas de Barú",
    resaltado: "Vuelo Directo + Hotel en Bocagrande + Isla Barú",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel en Bocagrande",
      alimentacion: "Desayunos buffet incluidos",
      traslados: true,
      seguro: "Asistencia médica",
      tour: "Playa Blanca Isla Barú",
    },
    toursDestacados: ["Islas del Rosario & Barú", "City Tour Ciudad Amurallada & Getsemaní", "Atardecer en Café del Mar"],
    descripcion: "El viaje internacional más cercano, romántico y accesible desde Lima. Pasea por callejones coloniales llenos de flores, prueba la gastronomía caribeña y navega a playas de arena blanca.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Cartagena (solo 3h 30m). Traslado al hotel y tarde libre en la Ciudad Amurallada.",
      "Día 2: Tour marítimo hacia Islas del Rosario con parada para baño en Playa Blanca Barú y almuerzo típico de pescado frito.",
      "Día 3: City tour histórico por el Castillo San Felipe de Barajas, murallas coloniales y bohemia en Getsemaní.",
      "Día 4: Mañana de compras de esmeraldas y café colombiano, traslado al aeropuerto y vuelo a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "medellin-guatape",
    slug: "medellin",
    ciudad: "Medellín & Guatapé",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "caribe",
    duracion: "4 Días / 3 Noches",
    precioUSD: 589,
    precioSoles: 2208,
    precioRegularUSD: 760,
    tag: "TENDENCIA · SOLO DNI",
    tagColor: "promo",
    img: "/images/paquetes/panama-medellin/medellin-skyline.png",
    alt: "Paquete a Medellín desde Lima - Metrocable, Piedra del Peñol y Guatapé",
    tituloComercial: "Medellín: Ciudad de la Eterna Primavera",
    resaltado: "Hotel en El Poblado + Tour Peñol, Guatapé y Comuna 13",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel en zona El Poblado",
      alimentacion: "Desayunos buffet incluidos",
      traslados: true,
      seguro: "Asistencia médica",
      tour: "Piedra del Peñol y Guatapé",
    },
    toursDestacados: ["La Piedra del Peñol y navegación en represa", "Graffiti Tour Comuna 13 con metrocable", "Parque Lleras y Provenza"],
    descripcion: "La ciudad más innovadora de Sudamérica con clima primaveral todo el año, la mejor vida nocturna, gastronomía paisa y vistas impresionantes en Guatapé.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Medellín. Traslado a hotel en El Poblado.",
      "Día 2: Tour completo a Guatapé: subida al Peñol (opcional), navegación en lancha por el embalse y paseo por las calles de zócalos coloridos.",
      "Día 3: Tour de transformación social Comuna 13, escaleras eléctricas al aire libre y metrocable panorámico.",
      "Día 4: Mañana libre para compras de moda colombiana y retorno a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "europa-magica-circuito",
    slug: "europa-clasica",
    ciudad: "Circuito Madrid, París & Roma",
    pais: "España · Francia · Italia",
    bandera: "🇪🇺",
    categoria: "europa",
    duracion: "15 Días / 14 Noches",
    precioUSD: 3290,
    precioSoles: 12340,
    precioRegularUSD: 3590,
    tag: "CIRCUITO TURÍSTICO 15 DÍAS",
    tagColor: "luxury",
    img: "/images/destinos/roma.jpg",
    alt: "Circuito por Europa desde Lima - Torre Eiffel, Coliseo Romano y Madrid",
    tituloComercial: "Europa Soñada: España, Francia e Italia",
    resaltado: "Vuelo I/V + 14 Noches de Hotel + Guía en Español",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles 4★ en cada ciudad",
      alimentacion: "Desayunos diarios incluidos",
      traslados: true,
      seguro: "Seguro Schengen 30.000€",
      tour: "Madrid, París, Venecia y Roma",
    },
    toursDestacados: ["Torre Eiffel y crucero por el Río Sena", "Paseo en góndola en Venecia", "Coliseo Romano, Vaticano y Fontana di Trevi"],
    descripcion: "El gran viaje de tu vida. Conoce los tres países más icónicos de Europa en un solo viaje organizado con autocar turístico de lujo, guías en español y hoteles reservados.",
    itinerario: [
      "Días 1-3: Vuelo Lima ➔ Madrid. City tour por la capital española y tiempo libre.",
      "Días 4-5: Ruta hacia Francia pasando por Burdeos y el Valle del Loira.",
      "Días 6-8: París: Torre Eiffel, Museo del Louvre, Campos Elíseos y crucero por el Sena.",
      "Días 9-11: Entrada a Italia por los Alpes. Venecia y paseo por la Plaza San Marcos. Florencia y cuna del Renacimiento.",
      "Días 12-14: Roma imperial: Coliseo, Vaticano, Basílica de San Pedro y Fontana di Trevi.",
      "Día 15: Desayuno, traslado al aeropuerto de Roma y vuelo de regreso a Lima.",
    ],
    tipoViaje: "circuito",
  },
  {
    id: "turquia-magica-capadocia",
    slug: "turquia",
    ciudad: "Estambul & Capadocia",
    pais: "Turquía",
    bandera: "🇹🇷",
    categoria: "exoticos",
    duracion: "10 Días / 9 Noches",
    precioUSD: 1590,
    precioSoles: 5960,
    precioRegularUSD: 1890,
    tag: "SIN VISA · GLOBOS EN CAPADOCIA",
    tagColor: "luxury",
    img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    alt: "Viajes a Turquía desde Lima - Vuelo en globo en Capadocia y Mezquita Azul",
    tituloComercial: "Turquía de Ensueño: Estambul & Capadocia",
    resaltado: "Vuelos I/V + Hoteles 4★ y 5★ + Capadocia",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles 4★ y 5★ seleccionados",
      alimentacion: "Desayunos y cenas incluidas",
      traslados: true,
      seguro: "Seguro internacional incluido",
      tour: "Crucero Bósforo y Capadocia",
    },
    toursDestacados: ["Vuelo en globo aerostático al amanecer en Capadocia", "Crucero en barco por el estrecho del Bósforo", "Pérgamo, Éfeso y las terrazas de Pamukkale"],
    descripcion: "El destino exótico favorito de los peruanos porque NO requiere visa consular. Cruza entre Europa y Asia en Estambul y vive la experiencia mágica de volar en globo sobre los valles de Capadocia.",
    itinerario: [
      "Día 1-2: Vuelo Lima ➔ Estambul. Llegada y traslado al hotel.",
      "Día 3: Recorrido histórico: Mezquita Azul, Santa Sofía, Hipódromo y Gran Bazar.",
      "Día 4: Crucero por el Estrecho del Bósforo y vuelo interno hacia Capadocia.",
      "Día 5: Día mágico en Capadocia: vuelo en globo al amanecer (opcional), Museo al aire libre de Göreme y valles lunares.",
      "Día 6-7: Ruta hacia Pamukkale con sus piscinas termales de travertino blanco y ruinas de Hierápolis.",
      "Día 8-9: Retorno a Estambul para últimas compras y cena de despedida.",
      "Día 10: Traslado al aeropuerto y vuelo internacional a Lima.",
    ],
    tipoViaje: "circuito",
  },
  {
    id: "miami-orlando-familia",
    slug: "miami-orlando",
    ciudad: "Miami & Orlando",
    pais: "Estados Unidos",
    bandera: "🇺🇸",
    categoria: "norteamerica",
    duracion: "7 Días / 6 Noches",
    precioUSD: 1390,
    precioSoles: 5215,
    precioRegularUSD: 1590,
    tag: "PARQUES & PLAYA",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    alt: "Viajes a Miami y Orlando desde Lima - Playas y compras",
    tituloComercial: "Miami Beach & Magia de Orlando",
    resaltado: "Vuelos I/V + Hotel con piscina + Outlets",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles en Miami y Orlando",
      alimentacion: "Desayunos buffet incluidos",
      traslados: true,
      seguro: "Seguro médico USA",
      tour: "Tour de compras en Outlets",
    },
    toursDestacados: ["Asesoría en compra de pases Disney y Universal", "Playas de South Beach y Ocean Drive en Miami", "Tour de compras con cuponeras de descuento"],
    descripcion: "El viaje soñado de toda familia peruana. Combina la adrenalina y magia de los parques temáticos en Orlando con el sol, compras de marcas y playas de Miami.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Orlando o Miami. Recepción y traslado al hotel.",
      "Día 2-4: Días de diversión total en parques temáticos (Magic Kingdom, Universal Studios o Epcot).",
      "Día 5: Traslado hacia Miami. Paseo por South Beach, distrito Art Déco y Lincoln Road.",
      "Día 6: Día completo de compras en Dolphin Mall o Sawgrass Mills con descuentos exclusivos.",
      "Día 7: Mañana libre de playa en Miami Beach y traslado al aeropuerto para el vuelo a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "rio-de-janeiro-playa",
    slug: "rio-de-janeiro",
    ciudad: "Río de Janeiro",
    pais: "Brasil",
    bandera: "🇧🇷",
    categoria: "sudamerica",
    duracion: "5 Días / 4 Noches",
    precioUSD: 990,
    precioSoles: 3715,
    precioRegularUSD: 1190,
    tag: "PLAYA & CRISTO · SIN VISA",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
    alt: "Vuelos a Río de Janeiro desde Lima - Cristo Redentor y playa Copacabana",
    tituloComercial: "Río de Janeiro Maravilloso",
    resaltado: "Hotel a pasos de Copacabana + Cristo Redentor y Pan de Azúcar",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel 4 Estrellas a pasos de Copacabana",
      alimentacion: "Desayunos buffet brasileños con frutas",
      traslados: true,
      seguro: "Tarjeta de asistencia médica",
      tour: "Cristo Redentor y teleférico Pan de Azúcar",
    },
    toursDestacados: ["Cristo Redentor en el Cerro del Corcovado", "Teleférico del Pan de Azúcar con vista a la bahía", "Playas de Ipanema, Copacabana y Leblon"],
    descripcion: "Siente la alegría, la música y los paisajes naturales de la ciudad maravillosa. Pasea por Copacabana, sube al Cristo Redentor y disfruta de la gastronomía carioca.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Río de Janeiro. Traslado al hotel en Copacabana.",
      "Día 2: Visita en tren histórico al Cristo Redentor con vistas de 360 grados de la ciudad.",
      "Día 3: Ascenso en teleférico al Pan de Azúcar y tarde libre en la playa de Ipanema.",
      "Día 4: Día libre para conocer la Escalera de Selarón, barrio de Santa Teresa o tour en barco.",
      "Día 5: Check-out, traslado al aeropuerto internacional y vuelo de regreso a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "aruba-playa-caribe",
    slug: "aruba",
    ciudad: "Aruba",
    pais: "Aruba",
    bandera: "🇦🇼",
    categoria: "caribe",
    duracion: "5 Días / 4 Noches",
    precioUSD: 1090,
    precioSoles: 4085,
    precioRegularUSD: 1350,
    tag: "ISLA FELIZ · SIN VISA",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
    alt: "Paquetes a Aruba desde Lima - Eagle Beach y Palm Beach",
    tituloComercial: "Aruba — La Isla Feliz del Caribe",
    resaltado: "Vuelos desde Lima + Hotel en Palm Beach / Eagle Beach + Sin Visa",
    inclusiones: {
      vuelo: true,
      hotel: "Resort 4 Estrellas frente a Eagle Beach / Palm Beach",
      alimentacion: "Desayunos buffet o plan Todo Incluido",
      traslados: true,
      seguro: "Tarjeta de asistencia médica internacional",
      tour: "Paseo por Oranjestad y Faro California",
    },
    toursDestacados: [
      "Playas de arena blanca Eagle Beach y Palm Beach",
      "Paseo en catamarán al atardecer con snorkel",
      "Recorrido por Oranjestad, Faro California y Baby Beach",
    ],
    descripcion:
      "Conocida como la Isla Feliz del Caribe y fuera del cinturón de huracanes, Aruba ofrece playas de agua cristalina como Eagle Beach y Palm Beach sin necesidad de visa consular para peruanos.",
    itinerario: [
      "Día 1: Vuelo desde Lima hacia Reina Beatrix (AUA). Recepción y traslado al hotel.",
      "Día 2: Día de relax frente al mar en Palm Beach y paseo por la zona comercial de Oranjestad.",
      "Día 3: Visita a Eagle Beach (considerada una de las mejores playas del mundo) y Faro California.",
      "Día 4: Día libre para excursión opcional en catamarán o visita a Isla De Palm.",
      "Día 5: Traslado al aeropuerto internacional de Aruba y vuelo de retorno a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "panama-compras-playa",
    slug: "panama",
    ciudad: "Ciudad de Panamá",
    pais: "Panamá",
    bandera: "🇵🇦",
    categoria: "caribe",
    duracion: "5 Días / 4 Noches",
    precioUSD: 699,
    precioSoles: 2620,
    precioRegularUSD: 890,
    tag: "COMPRAS & PLAYA · SIN VISA",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=1200&q=85",
    alt: "Paquetes a Panamá desde Lima - Canal de Panamá y Compras",
    tituloComercial: "Panamá: Ciudad, Canal & Playa Blanca",
    resaltado: "Vuelos directos + Hotel + Tour Canal de Panamá y Albrook Mall",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel 4 Estrellas en Ciudad de Panamá / Playa Blanca",
      alimentacion: "Desayunos buffet (y All Inclusive en Playa Blanca)",
      traslados: true,
      seguro: "Asistencia médica internacional",
      tour: "City Tour Casco Antiguo + Canal de Panamá + Compras",
    },
    toursDestacados: [
      "Esclusas de Miraflores en el Canal de Panamá",
      "Casco Antiguo colonial y Calzada de Amador",
      "Tour de compras en Albrook Mall / Multiplaza",
    ],
    descripcion:
      "Combina modernidad, compras libres de impuestos en los mejores centros comerciales de Latinoamérica, la ingeniería del Canal de Panamá y playas del Pacífico o San Blas sin visa para peruanos.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Ciudad de Panamá (Tocumen). Traslado al hotel.",
      "Día 2: City Tour por el Casco Antiguo, Calzada de Amador y visita al Canal de Panamá.",
      "Día 3: Tour de compras en Albrook Mall con traslados incluidos.",
      "Día 4: Día libre para disfrutar la piscina del hotel o excursión a Isla Taboga / San Blas.",
      "Día 5: Traslado al Aeropuerto de Tocumen y vuelo de regreso a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "san-andres-todo-incluido",
    slug: "san-andres",
    ciudad: "San Andrés Islas",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "caribe",
    duracion: "4 Días / 3 Noches",
    precioUSD: 899,
    precioSoles: 3370,
    precioRegularUSD: 1050,
    tag: "MAR DE 7 COLORES · SOLO DNI",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85",
    alt: "Paquetes a San Andrés Islas desde Lima Todo Incluido",
    tituloComercial: "San Andrés: El Mar de los 7 Colores",
    resaltado: "Vuelos + Hotel Todo Incluido + Johnny Cay y Acuario",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel Todo Incluido frente al mar",
      alimentacion: "Desayunos, almuerzos, cenas y bebidas ilimitadas",
      traslados: true,
      seguro: "Tarjeta de asistencia médica",
      tour: "Johnny Cay, El Acuario y Vuelta a la Isla",
    },
    toursDestacados: [
      "Cayo Johnny Cay y baño en aguas turquesas",
      "El Acuario y avistamiento de mantarrayas",
      "Hoyo Soplador y piscina natural West View",
    ],
    descripcion:
      "Descubre el famoso Mar de los Siete Colores en el Caribe Colombiano viajando solo con tu DNI (vía Bogotá o Medellín). Disfruta de playas de arena blanca, gastronomía isleña y plan Todo Incluido.",
    itinerario: [
      "Día 1: Vuelo Lima ➔ San Andrés (ADZ). Recepción y traslado al hotel Todo Incluido.",
      "Día 2: Excursión marítima a Johnny Cay y El Acuario con snorkel en arrecifes.",
      "Día 3: Vuelta a la isla visitando La Cueva de Morgan, Hoyo Soplador y playas de San Luis.",
      "Día 4: Mañana de compras libres de impuestos en el centro de San Andrés y vuelo de retorno a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "curazao-caribe-azul",
    slug: "curazao",
    ciudad: "Curazao",
    pais: "Curazao",
    bandera: "🇨🇼",
    categoria: "caribe",
    duracion: "5 Días / 4 Noches",
    precioUSD: 1090,
    precioSoles: 4085,
    precioRegularUSD: 1350,
    tag: "CARIBE NEERLANDÉS · SIN VISA",
    tagColor: "luxury",
    img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
    alt: "Paquetes a Curazao desde Lima - Willemstad y playas cristalinas",
    tituloComercial: "Curazao: Playas Turquesas & Willemstad",
    resaltado: "Vuelos desde Lima + Resort de Playa + Sin Visa para Peruanos",
    inclusiones: {
      vuelo: true,
      hotel: "Resort 4 Estrellas con playa privada",
      alimentacion: "Desayunos buffet o plan Todo Incluido",
      traslados: true,
      seguro: "Seguro médico internacional",
      tour: "Willemstad, Puente Reina Emma y Playa Kenepa",
    },
    toursDestacados: [
      "Centro histórico de Willemstad (Patrimonio UNESCO)",
      "Playas cristalinas Kenepa Grande y Cas Abao",
      "Excursión opcional en catamarán a isla Klein Curaçao",
    ],
    descripcion:
      "Con arquitectura holandesa llena de color y más de 35 playas de aguas tranquilas y cristalinas, Curazao es uno de los destinos más seguros y exclusivos del Caribe sin requerir visa para peruanos.",
    itinerario: [
      "Día 1: Vuelo desde Lima hacia el Aeropuerto Internacional Hato (CUR). Traslado al hotel.",
      "Día 2: Recorrido por Punda y Otrobanda en Willemstad y fábrica del licor Blue Curaçao.",
      "Día 3: Tour de playas hacia Grote Knip (Kenepa) y Playa Porto Mari.",
      "Día 4: Día libre para disfrutar del resort o navegar a Klein Curaçao.",
      "Día 5: Traslado al aeropuerto y vuelo de retorno a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "buenos-aires-tango",
    slug: "buenos-aires",
    ciudad: "Buenos Aires",
    pais: "Argentina",
    bandera: "🇦🇷",
    categoria: "sudamerica",
    duracion: "5 Días / 4 Noches",
    precioUSD: 790,
    precioSoles: 2965,
    precioRegularUSD: 950,
    tag: "VUELO DIRECTO · SOLO DNI",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
    alt: "Paquetes a Buenos Aires desde Lima - Obelisco, Caminito y Puerto Madero",
    tituloComercial: "Buenos Aires Clásico & Tango",
    resaltado: "Vuelo Directo + Hotel Céntrico + City Tour & Delta del Tigre",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel 4 Estrellas en Recoleta / Centro",
      alimentacion: "Desayunos buffet argentinos diarios",
      traslados: true,
      seguro: "Tarjeta de asistencia médica",
      tour: "City Tour Porteño: Caminito, Palermo y Puerto Madero",
    },
    toursDestacados: [
      "Plaza de Mayo, Casa Rosada, San Telmo y La Boca (Caminito)",
      "Puerto Madero, Recoleta y Bosques de Palermo",
      "Navegación opcional por el Delta del Tigre y cena show de tango",
    ],
    descripcion:
      "Vive la pasión, gastronomía, teatros y arquitectura europea de Buenos Aires con vuelos directos desde Lima y viajando únicamente con tu DNI vigente.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Buenos Aires. Recepción y traslado al hotel.",
      "Día 2: City Tour panorámico por el Obelisco, Plaza de Mayo, San Telmo, La Boca y Puerto Madero.",
      "Día 3: Excursión hacia San Isidro y paseo en lancha por los ríos del Delta del Tigre.",
      "Día 4: Día libre para compras en Calle Florida, Galerías Pacífico o Palermo Soho.",
      "Día 5: Desayuno, traslado al aeropuerto y vuelo de regreso a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "santiago-vina-del-mar",
    slug: "santiago-chile",
    ciudad: "Santiago & Viña del Mar",
    pais: "Chile",
    bandera: "🇨🇱",
    categoria: "sudamerica",
    duracion: "4 Días / 3 Noches",
    precioUSD: 549,
    precioSoles: 2058,
    precioRegularUSD: 720,
    tag: "ESCAPADA · SOLO DNI",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1557974040-3bec341da09b?w=1200&q=85",
    alt: "Paquete a Santiago de Chile y Viña del Mar desde Lima",
    tituloComercial: "Santiago Moderno, Viña del Mar & Valparaíso",
    resaltado: "Vuelo Directo + Hotel en Providencia + Tour Costa Pacífica",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel en Providencia / Las Condes",
      alimentacion: "Desayunos buffet incluidos",
      traslados: true,
      seguro: "Asistencia médica internacional",
      tour: "City Tour Santiago + Excursión a Viña del Mar y Valparaíso",
    },
    toursDestacados: [
      "Cerro Santa Lucía, Palacio de La Moneda y Sky Costanera",
      "Reloj de Flores y playas de Viña del Mar",
      "Cerros coloridos de Valparaíso y valle vitivinícola",
    ],
    descripcion:
      "Una escapada internacional rápida y completa: combina compras y modernidad en Santiago de Chile con la brisa marina de Viña del Mar y el arte bohemio de Valparaíso.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Santiago de Chile (3h 30m). Traslado al hotel.",
      "Día 2: City Tour por el centro histórico y zona financiera de Sanhattan.",
      "Día 3: Excursión de día completo a Valparaíso y Viña del Mar pasando por el Valle de Casablanca.",
      "Día 4: Mañana de compras en Costanera Center y vuelo de retorno a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "habana-varadero-cuba",
    slug: "varadero-habana",
    ciudad: "La Habana & Varadero",
    pais: "Cuba",
    bandera: "🇨🇺",
    categoria: "caribe",
    duracion: "6 Días / 5 Noches",
    precioUSD: 1090,
    precioSoles: 4085,
    precioRegularUSD: 1320,
    tag: "HISTORIA & PLAYA ALL INCLUSIVE",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1200&q=85",
    alt: "Paquete combinado La Habana y Varadero desde Lima",
    tituloComercial: "Combinado Cubano: La Habana Colonial & Varadero",
    resaltado: "2 Noches en La Habana + 3 Noches Todo Incluido en Varadero",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel en La Habana + Resort All Inclusive en Varadero",
      alimentacion: "Desayunos en La Habana y Todo Incluido 24h en Varadero",
      traslados: true,
      seguro: "Seguro médico y Tarjeta del Turista incluida",
      tour: "City Tour en La Habana Vieja",
    },
    toursDestacados: [
      "Recorrido por La Habana Vieja, Malecón, Capitolio y Plaza de la Catedral",
      "Playas de arena blanca y mar turquesa en Varadero",
      "Traslados interhoteles La Habana - Varadero incluidos",
    ],
    descripcion:
      "Combina el encanto histórico, los autos clásicos y la música de La Habana con el descanso total en los resorts Todo Incluido frente a la espectacular playa de Varadero.",
    itinerario: [
      "Día 1: Vuelo desde Lima hacia La Habana. Recepción y traslado al hotel.",
      "Día 2: City Tour a pie y panorámico por La Habana Colonial y Moderna.",
      "Día 3: Traslado terrestre hacia Varadero. Check-in en el Resort Todo Incluido frente al mar.",
      "Días 4-5: Días libres en Varadero con comidas, bebidas y deportes náuticos ilimitados.",
      "Día 6: Traslado al aeropuerto y vuelo de retorno a Lima.",
    ],
    tipoViaje: "all-inclusive",
  },
  {
    id: "cusco-machu-picchu-4d3n",
    slug: "cusco-magico",
    ciudad: "Cusco & Machu Picchu",
    pais: "Perú",
    bandera: "🇵🇪",
    categoria: "sudamerica",
    duracion: "4 Días / 3 Noches",
    precioUSD: 329,
    precioSoles: 1235,
    precioRegularUSD: 440,
    tag: "MARAVILLA DEL MUNDO",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    alt: "Paquete Cusco y Machu Picchu Todo Incluido desde Lima",
    tituloComercial: "Cusco Mágico, Valle Sagrado & Machu Picchu",
    resaltado: "Vuelos + Hotel + Tren Turístico + Entradas a Machu Picchu",
    inclusiones: {
      vuelo: true,
      hotel: "3 Noches de Hotel en Cusco con desayunos",
      alimentacion: "Desayunos diarios + Almuerzo buffet en Valle Sagrado",
      traslados: true,
      seguro: "Asistencia permanente en destino",
      tour: "City Tour, Valle Sagrado y Ciudadela de Machu Picchu",
    },
    toursDestacados: [
      "Ciudadela Inca de Machu Picchu en tren turístico Expedition o Vistadome",
      "Valle Sagrado: Pisac, Urubamba y fortaleza de Ollantaytambo",
      "Sacsayhuamán, Qorikancha y Laguna Humantay o Montaña de 7 Colores",
    ],
    descripcion:
      "Conoce la Maravilla del Mundo con toda la logística resuelta por expertos: vuelos desde Lima, boletos oficiales de ingreso a Machu Picchu, tren turístico y traslados.",
    itinerario: [
      "Día 1: Vuelo Lima ➔ Cusco. Recepción en aeropuerto, mate de coca y City Tour por la tarde (Qorikancha y 4 ruinas).",
      "Día 2: Excursión al Valle Sagrado de los Incas con almuerzo buffet en Urubamba.",
      "Día 3: Viaje en tren turístico hacia Aguas Calientes, subida en bus Consettur y visita guiada en Machu Picchu.",
      "Día 4: Mañana libre (o tour a Montaña de 7 Colores), traslado al aeropuerto y vuelo a Lima.",
    ],
    tipoViaje: "circuito",
  },
  {
    id: "arequipa-canon-del-colca",
    slug: "arequipa-colca",
    ciudad: "Arequipa & Cañón del Colca",
    pais: "Perú",
    bandera: "🇵🇪",
    categoria: "sudamerica",
    duracion: "4 Días / 3 Noches",
    precioUSD: 289,
    precioSoles: 1085,
    precioRegularUSD: 380,
    tag: "CIUDAD BLANCA & COLCA",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?w=1200&q=85",
    alt: "Paquete a Arequipa y Cañón del Colca desde Lima",
    tituloComercial: "Arequipa Colonial & Vuelo del Cóndor en el Colca",
    resaltado: "Vuelos + Hotel + Monasterio Santa Catalina + Cruz del Cóndor",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel 3★/4★ en Arequipa y Chivay",
      alimentacion: "Desayunos diarios incluidos",
      traslados: true,
      seguro: "Asistencia permanente en viaje",
      tour: "City Tour + Ruta del Sillar + Cañón del Colca 2D/1N",
    },
    toursDestacados: [
      "Mirador de la Cruz del Cóndor en el Cañón del Colca",
      "Centro Histórico de Arequipa, Yanahuara y Monasterio de Santa Catalina",
      "Canteras de Añashuayco (Ruta del Sillar) y baños termales de La Calera",
    ],
    descripcion:
      "Descubre la arquitectura colonial en sillar blanco de Arequipa, su extraordinaria gastronomía en picanterías tradicionales y el majestuoso vuelo del cóndor en el Valle del Colca.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Arequipa. Traslado al hotel y City Tour por la tarde.",
      "Día 2: Salida hacia el Valle del Colca cruzando la Reserva de Salinas y Aguada Blanca hasta Chivay.",
      "Día 3: Visita al Mirador de la Cruz del Cóndor, pueblos tradicionales de Maca y Yanque, y retorno a Arequipa.",
      "Día 4: Mañana libre para compras de chocolates y alpaca, traslado al aeropuerto y vuelo a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "mancora-vichayito-playas",
    slug: "mancora-vichayito",
    ciudad: "Máncora & Vichayito",
    pais: "Perú",
    bandera: "🇵🇪",
    categoria: "sudamerica",
    duracion: "4 Días / 3 Noches",
    precioUSD: 319,
    precioSoles: 1195,
    precioRegularUSD: 420,
    tag: "SOL TODO EL AÑO",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    alt: "Paquete a Máncora, Vichayito y Punta Sal desde Lima",
    tituloComercial: "Sol del Norte: Vichayito, Las Pocitas & Máncora",
    resaltado: "Vuelos + Hotel Frente al Mar con Piscina + Tortugas en El Ñuro",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel frente al mar en Vichayito / Máncora",
      alimentacion: "Desayunos frente al mar incluidos",
      traslados: true,
      seguro: "Asistencia al viajero",
      tour: "Nado con tortugas marinas en El Ñuro y avistamiento costero",
    },
    toursDestacados: [
      "Nado con tortugas verdes en la caleta de El Ñuro",
      "Tardes de playa y piscina en Las Pocitas y Vichayito",
      "Gastronomía marina norteña y paseo por Punta Sal",
    ],
    descripcion:
      "Escápate del invierno limeño hacia las aguas cálidas del norte peruano. Disfruta de hoteles boutique frente al mar con piscina, atardeceres inolvidables y la mejor comida marina del Perú.",
    itinerario: [
      "Día 1: Vuelo Lima ➔ Piura o Talara. Traslado privado directo hasta el hotel frente al mar.",
      "Día 2: Excursión por la mañana al muelle de El Ñuro para nadar junto a las tortugas marinas.",
      "Día 3: Día libre de relax frente al mar en Vichayito y Las Pocitas.",
      "Día 4: Desayuno frente al océano, traslado al aeropuerto y vuelo de regreso a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "tarapoto-laguna-azul",
    slug: "tarapoto-selva",
    ciudad: "Tarapoto & Laguna Azul",
    pais: "Perú",
    bandera: "🇵🇪",
    categoria: "sudamerica",
    duracion: "4 Días / 3 Noches",
    precioUSD: 289,
    precioSoles: 1085,
    precioRegularUSD: 380,
    tag: "SELVA PERUANA · TOP VENTAS",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
    alt: "Paquete a Tarapoto y Laguna Azul Todo Organizado desde Lima",
    tituloComercial: "Tarapoto Mágico: Laguna Azul, Ahuashiyacu & Lamas",
    resaltado: "Vuelos + Hotel con Piscina + 3 Excursiones con Entradas",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel con piscina en Tarapoto",
      alimentacion: "Desayunos diarios + Almuerzo en Laguna Azul",
      traslados: true,
      seguro: "Asistencia permanente en destino",
      tour: "Laguna Azul (Sauce), Cataratas de Ahuashiyacu y Castillo de Lamas",
    },
    toursDestacados: [
      "Paseo en bote y almuerzo turístico en la Laguna Azul de Sauce",
      "Baño refrescante en las Cataratas de Ahuashiyacu",
      "Visita cultural a la comunidad nativa Wayku y Castillo de Lamas",
    ],
    descripcion:
      "El destino favorito de naturaleza y aventura en el Perú. A solo 1 hora y 20 minutos de Lima, combina cataratas cristalinas, lagunas rodeadas de palmeras y excelente hotelería con piscina.",
    itinerario: [
      "Día 1: Vuelo directo Lima ➔ Tarapoto. Traslado al hotel y tarde de visita a Lamas y su castillo.",
      "Día 2: Día completo en la Laguna Azul de Sauce con paseo en bote y almuerzo típico.",
      "Día 3: Excursión a las Cataratas de Ahuashiyacu y tarde libre en la piscina del hotel.",
      "Día 4: Mañana de compras de café, cacao y puros artesanales, y vuelo de regreso a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "cataratas-iguazu-brasil-argentina",
    slug: "iguazu-cataratas",
    ciudad: "Cataratas del Iguazú",
    pais: "Brasil & Argentina",
    bandera: "🇧🇷",
    categoria: "sudamerica",
    duracion: "4 Días / 3 Noches",
    precioUSD: 699,
    precioSoles: 2620,
    precioRegularUSD: 880,
    tag: "MARAVILLA NATURAL · SOLO DNI",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1706587531457-8c574be27a08?w=1200&q=85",
    alt: "Paquete a Cataratas del Iguazú desde Lima - Lado Brasileño y Argentino",
    tituloComercial: "Cataratas del Iguazú: Lado Brasileño & Argentino",
    resaltado: "Vuelos Directos + Hotel con Piscina + Garganta del Diablo & Hito Tres Fronteras",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel 4 Estrellas con piscina en Foz do Iguaçu",
      alimentacion: "Desayunos buffet diarios",
      traslados: true,
      seguro: "Tarjeta de asistencia médica internacional",
      tour: "Cataratas Lado Argentino + Lado Brasileño + Hito de las Tres Fronteras",
    },
    toursDestacados: [
      "Tren Ecológico y pasarelas de la Garganta del Diablo (Lado Argentino)",
      "Vista panorámica de los 275 saltos de agua (Lado Brasileño)",
      "Parque de las Aves, Represa de Itaipú y compras libres de impuestos en Paraguay",
    ],
    descripcion:
      "Conoce una de las 7 Maravillas Naturales del Mundo en la triple frontera entre Brasil, Argentina y Paraguay, viajando cómodamente desde Lima solo con tu DNI vigente.",
    itinerario: [
      "Día 1: Vuelo Lima ➔ Foz do Iguaçu (IGU). Recepción y traslado al hotel.",
      "Día 2: Excursión de día completo a las Cataratas del lado argentino y Garganta del Diablo.",
      "Día 3: Visita panorámica a las Cataratas del lado brasileño y Parque de las Aves.",
      "Día 4: Mañana libre, traslado al aeropuerto y vuelo de retorno a Lima.",
    ],
    tipoViaje: "escapada",
  },
  {
    id: "dubai-emiratos-lujo",
    slug: "dubai-emiratos",
    ciudad: "Dubái & Abu Dhabi",
    pais: "Emiratos Árabes Unidos",
    bandera: "🇦🇪",
    categoria: "exoticos",
    duracion: "8 Días / 7 Noches",
    precioUSD: 1890,
    precioSoles: 7085,
    precioRegularUSD: 2290,
    tag: "EXÓTICO DE LUJO · SIN VISA",
    tagColor: "luxury",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    alt: "Paquete a Dubái y Abu Dhabi desde Lima - Burj Khalifa y Safari en el Desierto",
    tituloComercial: "Dubái & Abu Dhabi Inolvidable",
    resaltado: "Vuelos + Hoteles 4★/5★ + Safari 4x4 en el Desierto + Gran Mezquita",
    inclusiones: {
      vuelo: true,
      hotel: "7 Noches en Hoteles 4★/5★ en Dubái",
      alimentacion: "Desayunos buffet + Cena BBQ en el Desierto + Cena Crucero Dhow",
      traslados: true,
      seguro: "Seguro médico internacional de amplia cobertura",
      tour: "Dubái Moderno y Clásico, Safari 4x4 y Excursión a Abu Dhabi",
    },
    toursDestacados: [
      "Dubái Marina, Burj Khalifa, Dubai Mall y Palmera Jumeirah",
      "Safari en camionetas 4x4 por las dunas del desierto con cena árabe bajo las estrellas",
      "Día completo en Abu Dhabi visitando la Gran Mezquita Sheikh Zayed",
    ],
    descripcion:
      "Los ciudadanos peruanos NO necesitan visa para ingresar a los Emiratos Árabes Unidos. Vive el contraste entre el lujo futurista de Dubái y la magia milenaria del desierto árabe.",
    itinerario: [
      "Días 1-2: Vuelo internacional desde Lima hacia Dubái. Llegada y traslado privado al hotel.",
      "Día 3: City Tour por Dubái Clásico (Bastakiya, zocos de oro y especias) y Dubái Moderno.",
      "Día 4: Tarde de Safari en 4x4 por las dunas rojas del desierto con cena espectáculo.",
      "Día 5: Excursión de día completo a Abu Dhabi y la Gran Mezquita Blanca.",
      "Días 6-7: Cena crucero por Dubái Marina y día libre para compras o ascenso al Burj Khalifa.",
      "Día 8: Traslado al aeropuerto internacional de Dubái y vuelo de regreso a Lima.",
    ],
    tipoViaje: "circuito",
  },
];

import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

function obtenerGaleriaSinDuplicarHero(p: PaqueteTuristico): string[] {
  const galeria = obtenerGaleriaPorTexto(
    `${p.slug} ${p.ciudad} ${p.pais}`,
    p.categoria
  );
  const idBaseHero = p.img.split("?")[0];
  return galeria
    .filter((u) => u.split("?")[0] !== idBaseHero)
    .slice(0, 3);
}

// Compatibilidad con componentes existentes
export const DESTINOS_EUROPA: Destino[] = PAQUETES_COMPLETOS
  .filter((p) => p.categoria === "europa" || p.categoria === "exoticos")
  .map((p) => ({
    ciudad: p.ciudad,
    pais: p.pais,
    bandera: p.bandera,
    slug: p.slug,
    img: p.img,
    alt: p.alt,
    tag: p.tag,
    tagColor: p.tagColor as "hot" | "promo" | "new",
    migratorio: p.migratorioUSD,
    turistico: p.precioUSD,
    precioSoles: p.precioSoles,
    migraDesc: "Vuelo confirmado + Seguro Schengen 30.000€ + Hotel + Asesoría de entrada",
    turiDesc: `${p.duracion} + Hoteles + Vuelos + Traslados + Asistencia`,
    regularPrice: p.precioRegularUSD,
    cuotas: 6,
    gallery: obtenerGaleriaSinDuplicarHero(p),
    descripcion: p.descripcion,
    itinerario: p.itinerario,
    temporada: "todo-el-ano",
    tipo: "europa",
    duracion: p.duracion,
    inclusionesLista: [
      p.inclusiones.hotel,
      "Vuelo confirmado con equipaje",
      p.inclusiones.seguro,
      "Traslados aeropuerto - hotel",
    ],
  }));

export const DESTINOS_CARIBE: Destino[] = PAQUETES_COMPLETOS
  .filter((p) => p.categoria === "caribe" || p.categoria === "sudamerica" || p.categoria === "norteamerica")
  .map((p) => ({
    ciudad: p.ciudad,
    pais: p.pais,
    bandera: p.bandera,
    slug: p.slug,
    img: p.img,
    alt: p.alt,
    tag: p.tag,
    tagColor: p.tagColor as "hot" | "promo" | "new",
    turistico: p.precioUSD,
    precioSoles: p.precioSoles,
    turiDesc: `${p.duracion} + ${p.resaltado}`,
    regularPrice: p.precioRegularUSD,
    cuotas: 6,
    gallery: obtenerGaleriaSinDuplicarHero(p),
    descripcion: p.descripcion,
    itinerario: p.itinerario,
    temporada: "todo-el-ano",
    tipo: "caribe",
    duracion: p.duracion,
    inclusionesLista: [
      p.inclusiones.hotel,
      p.inclusiones.alimentacion,
      "Vuelo ida y vuelta desde Lima",
      "Traslados incluidos",
      p.inclusiones.tour,
    ],
  }));

// Paquete migratorio a España: solo ida + gestión (pasaje de ida, retorno reservado, hotel, seguro).
export const PRECIO_MIGRATORIO_DESDE = 699;
// Pasaje Lima-Madrid ida y vuelta (producto distinto del paquete migratorio).
export const PRECIO_IDA_VUELTA_MADRID_DESDE = 1090;
export const PRECIO_DESDE_CARIBE = 589;

// ── Preguntas Frecuentes (FAQ) ──
export const FAQS = [
  {
    pregunta: "¿Cómo funciona la reserva con el 50%?",
    respuesta: "Congelas tu tarifa promocional y aseguras tus vuelos y hotel pagando solo el 50% de inicial. El 50% restante lo abonas cómodamente hasta 20 días antes de viajar.",
  },
  {
    pregunta: "¿Qué incluye un paquete All Inclusive?",
    respuesta: "Vuelos confirmados ida y vuelta desde Lima con equipaje, resort frente al mar, comidas y bebidas ilimitadas 24h, traslados aeropuerto-hotel y seguro médico internacional.",
  },
  {
    pregunta: "¿Los peruanos necesitan visa para viajar a Europa o Turquía?",
    respuesta: "No necesitas visa de turismo por hasta 90 días. Solo necesitas pasaporte vigente, pasaje ida/vuelta y seguro Schengen (30.000€), todo gestionado en tu paquete.",
  },
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta: "Transferencias directas BCP, BBVA, Interbank, Yape, Plin, efectivo en nuestra oficina de Los Olivos y tarjetas de crédito en cuotas.",
  },
  {
    pregunta: "¿Tienen oficina física en Lima?",
    respuesta: "Sí. Visítanos en Av. Antúnez de Mayolo N. 814, Los Olivos. Atendemos de lunes a sábado de 9:00 am a 7:00 pm para asesoría personalizada y firma de contratos.",
  },
  {
    pregunta: "¿Por qué los precios dicen 'Desde'?",
    respuesta: "Porque los pasajes aéreos varían según tus fechas y anticipación. Escríbenos por WhatsApp y te damos tu cotización exacta en menos de 2 minutos.",
  },
];

// ── Blog Posts ──
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "guia-emigrar-espana",
    titulo: "Guía completa para viajar o emigrar a España desde Perú",
    desc: "Requisitos, seguro Schengen de 30.000€, fondos económicos y cómo pasar migraciones sin estrés.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "Actualizado 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>¿Qué necesitas para viajar a España desde Perú?</h2>
<p>España es el destino favorito de los peruanos en Europa. Gracias al acuerdo de exención de visado con el Espacio Schengen, los peruanos pueden ingresar como turistas hasta por 90 días sin visa consular.</p>
<h3>Requisitos fundamentales en el aeropuerto:</h3>
<p>1. Pasaporte biométrico vigente con al menos 6 meses de vigencia.<br>
2. Boleto aéreo confirmado de salida.<br>
3. Reserva de hotel confirmada o carta de invitación formal.<br>
4. Seguro médico internacional Schengen con cobertura mínima de 30.000 euros.<br>
5. Sustento económico para tu estancia.</p>
<p>En Cityland Travel nuestros paquetes incluyen toda la documentación de respaldo para que viajes con total seguridad.</p>`,
  },
  {
    slug: "top-resorts-punta-cana",
    titulo: "Los mejores resorts Todo Incluido en Punta Cana para peruanos",
    desc: "Playa Bávaro, suites frente al mar, comida 24h y excursión a Isla Saona.",
    categoria: "Caribe",
    catColor: "bg-amber-500",
    fecha: "Actualizado 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Vacaciones All Inclusive en Punta Cana</h2>
<p>Punta Cana es el destino por excelencia para familias y parejas peruanas. En un resort todo incluido te olvidas de sacar la billetera: desayunos buffet, almuerzos frente al mar, cenas a la carta y cócteles tropicales ilimitados las 24 horas.</p>
<h3>¿Por qué reservar con Cityland Travel?</h3>
<p>Nuestros paquetes incluyen boletos aéreos desde Lima con equipaje, traslados privados aeropuerto-hotel y la famosa excursión en catamarán a Isla Saona con piscina natural.</p>`,
  },
  {
    slug: "turquia-sin-visa-peruanos",
    titulo: "Turquía: el viaje de ensueño que los peruanos pueden hacer sin visa",
    desc: "Vuelos en globo en Capadocia, mezquitas en Estambul y compras en el Gran Bazar.",
    categoria: "Exóticos",
    catColor: "bg-indigo-600",
    fecha: "Actualizado 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Descubre Turquía sin trámites consulares</h2>
<p>¿Sabías que los ciudadanos peruanos NO necesitan visa para ingresar a Turquía por turismo hasta por 90 días? Es el destino transcontinental más fascinante del mundo.</p>
<h3>Lo que no te puedes perder:</h3>
<p>El vuelo en globo aerostático al amanecer sobre los valles de Capadocia, el crucero privado por el Estrecho del Bósforo entre Europa y Asia, y las compras de especias y joyas en el Gran Bazar de Estambul.</p>`,
  },
  {
    slug: "equipaje-permitido-iberia-air-europa-plus-ultra",
    titulo: "Equipaje permitido en vuelos de Lima a Madrid: Iberia, Air Europa, Plus Ultra y LATAM",
    desc: "Guía práctica de maletas de mano (10 kg) y equipaje de bodega (23 kg) en las 4 aerolíneas que vuelan directo de Lima a España.",
    categoria: "Vuelos",
    catColor: "bg-blue-700",
    fecha: "Actualizado 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>¿Cuánto equipaje puedo llevar en mi vuelo de Lima a Madrid?</h2>
<p>Al reservar tu vuelo transatlántico entre el Aeropuerto Jorge Chávez (LIM) y Madrid-Barajas (MAD), conocer las reglas de equipaje evita cobros adicionales en el mostrador.</p>
<h3>1. Equipaje de cabina (Mano + Artículo personal)</h3>
<p>En Iberia, Air Europa, Plus Ultra y LATAM, el estándar en cabina económica permite llevar un artículo personal (mochila o bolso de mano bajo el asiento delantero) más una maleta de cabina de hasta <strong>10 kg</strong> (dimensiones máximas habituales: 55 x 40 x 20 cm).</p>
<h3>2. Equipaje facturado en bodega (23 kg)</h3>
<p>Las tarifas con equipaje incluido permiten registrar <strong>1 o 2 maletas de hasta 23 kg cada una</strong> (máximo 158 cm lineales sumando alto + largo + ancho). En Cityland Travel priorizamos tarifas que ya incluyan tu maleta de bodega para que viajes con todo lo necesario.</p>`,
  },
  {
    slug: "destinos-internacionales-solo-con-dni-peruanos",
    titulo: "8 destinos internacionales a los que puedes viajar desde Perú solo con tu DNI",
    tituloSeo: "Países a los que puedes viajar solo con DNI 2026",
    desc: "Viaja a Cartagena, Medellín, Buenos Aires, Río de Janeiro y Santiago de Chile sin necesidad de tramitar pasaporte ni visa.",
    categoria: "Guías de Viaje",
    catColor: "bg-emerald-700",
    fecha: "Actualizado 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Viaja al extranjero sin pasaporte: acuerdos CAN y Mercosur</h2>
<p>Gracias a los convenios de la Comunidad Andina (CAN) y el Mercosur, los ciudadanos peruanos pueden viajar por turismo a 8 países de Sudamérica presentando únicamente su <strong>DNI físico vigente</strong>.</p>
<h3>Los destinos más pedidos solo con DNI:</h3>
<p>1. <strong>Colombia:</strong> Cartagena de Indias, Medellín, Bogotá y San Andrés.<br>
2. <strong>Argentina:</strong> Buenos Aires, Bariloche, Mendoza e Iguazú.<br>
3. <strong>Brasil:</strong> Río de Janeiro, São Paulo, Búzios y Foz de Iguazú.<br>
4. <strong>Chile:</strong> Santiago de Chile, Viña del Mar y Valparaíso.<br>
5. <strong>Ecuador, Bolivia, Uruguay y Paraguay.</strong></p>
<p>Importante: si haces escala en un tercer país fuera de Sudamérica (como Panamá), sí necesitarás pasaporte. Por eso nuestros asesores verifican que tu vuelo sea directo o con escala dentro de Sudamérica cuando viajas solo con DNI.</p>`,
  },
  {
    slug: "como-encontrar-vuelos-economicos-europa-caribe",
    titulo: "Consejos reales para conseguir vuelos y paquetes económicos a Europa o el Caribe desde Lima",
    desc: "Cuáles son los meses más baratos para volar desde el Perú: congela tarifas promocionales con el 50% de inicial.",
    categoria: "Consejos",
    catColor: "bg-amber-600",
    fecha: "Actualizado 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>¿Cuándo son más baratos los vuelos desde Lima?</h2>
<p>El precio de un boleto aéreo o paquete turístico depende directamente de la temporada y de la anticipación con la que separes tu cupo.</p>
<h3>1. Temporadas de mejor precio a España y Europa</h3>
<p>Los meses de <strong>noviembre, febrero, marzo, abril y mayo</strong> ofrecen las tarifas más bajas del año desde Lima hacia Madrid, Barcelona, Roma y París, ahorrando entre $200 y $400 frente a julio o diciembre.</p>
<h3>2. Temporadas ideales para el Caribe (Punta Cana y Cancún)</h3>
<p>Reservando con 60 a 90 días de anticipación para viajar entre abril y junio o entre septiembre y noviembre consigues resorts 5 estrellas Todo Incluido a tarifa promocional.</p>
<h3>3. Separa con el 50% de inicial</h3>
<p>En Cityland Travel puedes bloquear tu paquete promocional abonando el 50% de inicial y completando el saldo en cuotas antes de tu fecha de salida.</p>`,
  },
  {
    slug: "carta-invitacion-espana-peru-requisitos",
    titulo: "Carta de invitación para España desde Perú: quién la pide, requisitos y cuánto cuesta en 2026",
    tituloSeo: "Carta de invitación España 2026: requisitos y costo",
    desc: "La pide tu familiar o amigo en España en la comisaría. Requisitos, tasa de unos 75 € en 2026, cuánto tiempo vale y qué más te piden en el aeropuerto.",
    categoria: "Migratorio",
    catColor: "bg-red-600",
    fecha: "Actualizado octubre 2026",
    lectura: "7 min",
    imagen: "/images/espana/plaza-mayor.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<p>La carta de invitación es el documento con el que un familiar o amigo que vive en España demuestra que te va a alojar en su casa. <strong>La pide él, no tú</strong>, en la comisaría de policía de donde vive. En 2026 la tasa ronda los <strong>75 €</strong> y la carta vale por <strong>9 meses</strong>.</p>
<p>Ojo: la carta solo reemplaza a la reserva de hotel. No reemplaza el pasaje de regreso ni el dinero que te pueden pedir en el aeropuerto.</p>

<h2>¿Quién puede invitarte?</h2>
<p>Según la Orden PRE/1283/2007, que regula la carta, puede invitarte una persona que sea:</p>
<ul>
<li>Ciudadana española.</li>
<li>Ciudadana de otro país de la Unión Europea (o su familiar con el mismo régimen).</li>
<li>Extranjera con <strong>residencia legal en España</strong>.</li>
</ul>
<p>Quien te invita se compromete a darte alojamiento durante tu estancia, en su vivienda habitual o en una segunda vivienda.</p>

<h2>¿Dónde y cómo se pide?</h2>
<p>Tu familiar o amigo la solicita en la <strong>comisaría de la Policía Nacional de su lugar de residencia</strong>, normalmente con cita previa. La policía puede llamarlo a una entrevista; si no se presenta, la solicitud se da por abandonada.</p>
<p>Si la respuesta es favorable, tiene <strong>un mes</strong> para pagar la tasa y recoger la carta con el comprobante de pago.</p>

<h2>Documentos que debe presentar quien te invita</h2>
<ul>
<li>Su documento de identidad: DNI, NIE o pasaporte, y su dirección.</li>
<li>Una prueba de que tiene vivienda: escritura de la casa o contrato de alquiler.</li>
<li>Qué relación tiene contigo (familia o amistad).</li>
<li>Tus datos y el número de tu pasaporte.</li>
<li>Las fechas aproximadas de tu llegada y tu salida.</li>
</ul>
<p>Algunas comisarías piden papeles adicionales, como el certificado de empadronamiento. Conviene que tu familiar pregunte al sacar la cita.</p>
<p>Lo normal es una carta por persona. La norma solo permite incluir a varias personas en una misma carta de forma excepcional.</p>

<h2>¿Cuánto cuesta?</h2>
<p>Se paga con el <strong>formulario 790, código 012</strong> de la Policía Nacional. En 2026 la tasa ronda los 75 €. El monto exacto lo publica la Policía Nacional cada año, así que conviene revisarlo al momento de pagar.</p>

<h2>¿Cuánto tiempo vale?</h2>
<p>La carta vale durante los <strong>9 meses</strong> siguientes a la notificación de la resolución. Tu viaje tiene que caer dentro de ese plazo y respetar el máximo de 90 días como turista.</p>

<h2>Cuando ya la tengas</h2>
<ul>
<li>Pide a tu familiar que te envíe la <strong>carta original</strong> por courier y llévala en tu equipaje de mano.</li>
<li>Lleva también una copia del documento de identidad de quien te invita y la dirección exacta donde te vas a quedar.</li>
<li>Pídela con tiempo: entre la cita, el trámite y el envío por courier pueden pasar varias semanas.</li>
</ul>

<h2>Lo que la carta no reemplaza</h2>
<p>La norma es clara: la carta <strong>solo justifica el alojamiento</strong>. En el control migratorio también te pueden pedir:</p>
<ul>
<li>Pasaporte vigente (al menos 3 meses después de tu salida de Europa).</li>
<li>Pasaje de regreso dentro de los 90 días.</li>
<li><a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje">Dinero suficiente (bolsa de viaje)</a>: aunque te alojes gratis, te pueden pedir 122,10 € por día, con un mínimo de 1.098,90 € por persona.</li>
<li>Seguro médico: el Consulado de España en Lima lo considera recomendable.</li>
</ul>
<p>Aquí tienes la lista completa: <a href="/viajes/requisitos-viajar-a-espana-desde-peru">requisitos para viajar a España desde Perú</a>. Y si dudas entre hotel o carta, mira <a href="/blog/diferencia-reserva-hotel-y-carta-invitacion-espana">la diferencia entre reserva de hotel y carta de invitación</a>.</p>

<h2>Errores comunes</h2>
<ul>
<li><strong>Pedirla a última hora.</strong> Si la carta no llega antes del vuelo, tendrás que reservar hotel.</li>
<li><strong>Viajar solo con una foto de la carta.</strong> Lleva el original.</li>
<li><strong>Creer que la carta reemplaza la bolsa de viaje.</strong> No la reemplaza.</li>
<li><strong>Fechas que no coinciden.</strong> Las fechas de la carta deben cuadrar con tu pasaje.</li>
</ul>

<h2>Preguntas frecuentes</h2>
<h3>¿La puedo pedir yo desde Lima?</h3>
<p>No. La pide siempre la persona que te invita, en España.</p>
<h3>¿Mi familiar tiene que ser español?</h3>
<p>No. También puede ser un extranjero con residencia legal en España, o un ciudadano de otro país de la Unión Europea.</p>
<h3>¿Me pueden negar la entrada aunque tenga la carta?</h3>
<p>Sí. La decisión final la toma la policía de frontera, y te pueden pedir el resto de los requisitos. Por eso conviene llevar todo completo.</p>

<h2>Fuentes oficiales</h2>
<ul>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-9609" target="_blank" rel="noopener">Orden PRE/1283/2007 (BOE): carta de invitación</a></li>
<li><a href="https://www.exteriores.gob.es/Consulados/lima/es/Comunicacion/Noticias/Paginas/Articulos/20160315_NOT1.aspx" target="_blank" rel="noopener">Consulado General de España en Lima: requisitos para peruanos sin visa</a></li>
</ul>`,
  },
  {
    slug: "mejor-epoca-viajar-punta-cana-cancun",
    titulo: "Cuál es la mejor época para viajar a Punta Cana o Cancún desde Lima (Clima y Precios)",
    desc: "Meses con mejor sol, menos lluvias y tarifas Todo Incluido más bajas para tus vacaciones en el Caribe.",
    categoria: "Caribe",
    catColor: "bg-amber-500",
    fecha: "Actualizado 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Guía de temporadas para viajar a Punta Cana y Cancún</h2>
<p>Tanto Punta Cana (República Dominicana) como Cancún y la Riviera Maya (México) cuentan con clima cálido tropical durante todo el año, con temperaturas entre 26 °C y 31 °C.</p>
<h3>1. Temporada seca y clima perfecto (Diciembre a Abril)</h3>
<p>Es la época con días más soleados, brisa fresca y mar completamente cristalino. Si planeas viajar en enero, febrero o Semana Santa, te recomendamos separar tu paquete con el 50% al menos con 60 días de anticipación.</p>
<h3>2. Temporada de mejores ofertas (Mayo, Junio, Septiembre, Octubre y Noviembre)</h3>
<p>En estos meses los resorts 5 estrellas All Inclusive lanzan sus mejores promociones del año para viajeros desde Perú, permitiéndote ahorrar hasta un 30% en paquetes completos con vuelo, traslados y excursiones.</p>`,
  },
  {
    slug: "como-tramitar-visa-americana-b1-b2-peru",
    titulo: "Cómo tramitar la Visa Americana de Turismo (B1/B2) en Lima paso a paso",
    desc: "Guía práctica sobre el formulario DS-160, pago de tasa consular, programación de cita en la Embajada de EE.UU. en Surco y preparación de entrevista.",
    categoria: "Visas",
    catColor: "bg-blue-700",
    fecha: "Actualizado 2026",
    lectura: "6 min",
    imagen: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Pasos para solicitar tu Visa a Estados Unidos desde Perú</h2>
<p>Para viajar a Miami, Orlando, Nueva York o incluso hacer escala en aeropuertos estadounidenses, los ciudadanos peruanos requieren contar con una Visa B1/B2 vigente.</p>
<h3>1. Llenado profesional del Formulario DS-160</h3>
<p>El formulario oficial DS-160 es la base de tu evaluación consular. Un error u omisión en tus datos laborales, ingresos, viajes previos o vínculos familiares en el Perú es la causa principal de rechazo. En Cityland Travel redactamos tu DS-160 de forma estratégica y coherente con tu perfil real.</p>
<h3>2. Pago de la tasa consular y cita</h3>
<p>Con el código del DS-160 pagas la tasa consular, que hoy es de US$185 por persona y no se devuelve aunque te nieguen la visa. Luego eliges tu fecha de entrevista en la Embajada de EE.UU. en Lima desde tu propia cuenta: te guiamos paso a paso. Además, una ley de EE.UU. de 2025 creó una tasa adicional de US$250 que se cobraría solo si te aprueban; te confirmamos al empezar si ya está vigente.</p>
<h3>3. Simulación de entrevista consular</h3>
<p>Te preparamos con las preguntas reales que realiza el cónsul según tu ocupación (dependiente, independiente, empresario, estudiante o jubilado) para que asistas con total seguridad.</p>`,
  },
  {
    slug: "cuanto-dinero-llevar-espana-bolsa-de-viaje",
    titulo: "Bolsa de viaje para España 2026: cuánto dinero te pueden pedir si viajas desde Perú",
    tituloSeo: "Bolsa de viaje España 2026: 122,10 € por día",
    desc: "En 2026 te pueden pedir 122,10 € por día y un mínimo de 1.098,90 € por persona. Montos por días, cómo demostrarlo y qué pasa con la carta de invitación.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "Actualizado octubre 2026",
    lectura: "7 min",
    imagen: "/images/espana/palacio-real.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<p>Si entras a España como turista desde Perú, en el control migratorio te pueden pedir que demuestres <strong>122,10 € por cada día de estancia</strong>, con un <strong>mínimo de 1.098,90 € por persona</strong>, aunque tu viaje sea más corto. Son las cifras de 2026, calculadas sobre el salario mínimo de España.</p>
<p>No siempre lo piden, pero si lo piden y no lo puedes demostrar, el policía puede negarte la entrada. Por eso conviene llevarlo listo.</p>

<h2>¿De dónde sale el monto?</h2>
<p>Lo fija la <strong>Orden PRE/1282/2007</strong>, publicada en el Boletín Oficial del Estado (BOE). Esa norma dice que cada extranjero que entra por turismo debe tener medios económicos equivalentes al <strong>10% del salario mínimo interprofesional (SMI) por cada día</strong> que se va a quedar, y como mínimo el <strong>90% del SMI</strong> en total, sin importar cuántos días dure el viaje.</p>
<p>Con el SMI vigente en 2026 (1.221 € al mes en 14 pagas), eso da 122,10 € por día y 1.098,90 € como mínimo. Si España sube el salario mínimo, estos montos suben con él.</p>

<h2>Cuánto llevar según los días de tu viaje</h2>
<p>Montos por persona. Si viajan dos, cada uno debe demostrar su parte.</p>
<div class="tabla-guia"><table>
<thead><tr><th>Días en España</th><th>Monto por persona</th></tr></thead>
<tbody>
<tr><td>Hasta 9 días</td><td>1.098,90 € (mínimo)</td></tr>
<tr><td>10 días</td><td>1.221,00 €</td></tr>
<tr><td>15 días</td><td>1.831,50 €</td></tr>
<tr><td>20 días</td><td>2.442,00 €</td></tr>
<tr><td>30 días</td><td>3.663,00 €</td></tr>
<tr><td>60 días</td><td>7.326,00 €</td></tr>
<tr><td>90 días (máximo como turista)</td><td>10.989,00 €</td></tr>
</tbody>
</table></div>
<p>Para calcular tu caso: multiplica tus días por 122,10 €. Si el resultado es menor que 1.098,90 €, vale el mínimo.</p>

<h2>¿Cómo se demuestra el dinero?</h2>
<p>La misma norma acepta estas formas, y puedes combinarlas:</p>
<ul>
<li><strong>Efectivo</strong> en euros (o en otra moneda que se pueda cambiar).</li>
<li><strong>Tarjetas de crédito o débito</strong> a tu nombre, acompañadas del <strong>extracto de la cuenta o la libreta bancaria al día</strong>, para que se vea el saldo o la línea disponible.</li>
<li><strong>Cheques de viaje, cheques certificados o cartas de pago.</strong></li>
</ul>
<p>Un detalle que muchos no saben: la norma dice que <strong>no se aceptan cartas del banco ni extractos bancarios sacados de internet</strong>. Pide en tu banco un estado de cuenta reciente e impreso.</p>

<h2>¿La carta de invitación reemplaza a la bolsa de viaje?</h2>
<p>No. La <a href="/blog/carta-invitacion-espana-peru-requisitos">carta de invitación</a> sirve para demostrar dónde te vas a alojar (reemplaza a la reserva de hotel), pero no reemplaza el dinero. Aunque te quedes en casa de un familiar, te pueden pedir la bolsa de viaje igual.</p>

<h2>Lo que te pueden pedir junto con la bolsa de viaje</h2>
<ul>
<li>Pasaporte vigente.</li>
<li>Boleto de regreso o de salida del espacio Schengen.</li>
<li>Reserva de hotel o carta de invitación.</li>
<li><a href="/blog/seguro-schengen-30000-euros-peru-precio">Seguro médico de viaje</a> (el Consulado de España en Lima lo considera recomendable).</li>
<li>Algo que muestre el motivo del viaje (itinerario, reservas de tours, invitación a un evento).</li>
</ul>
<p>Aquí tienes la lista completa: <a href="/viajes/requisitos-viajar-a-espana-desde-peru">requisitos para viajar a España desde Perú</a>.</p>

<h2>Errores comunes</h2>
<ul>
<li><strong>Llevar el extracto del banco en el celular.</strong> La norma no acepta extractos de internet; llévalo impreso.</li>
<li><strong>Contar el dinero de toda la familia en una sola tarjeta sin papeles.</strong> El monto es por persona: ten claro cuánto corresponde a cada uno.</li>
<li><strong>Calcular solo los días en Madrid.</strong> Si vas a recorrer otros países de Europa, cuenta todos los días de tu estancia.</li>
<li><strong>Viajar con 10.000 € o más en efectivo sin declararlo.</strong> En la Unión Europea, el efectivo desde 10.000 € se declara en la aduana al entrar.</li>
<li><strong>Olvidar avisar al banco que viajas.</strong> Si tu tarjeta se bloquea en Europa, te quedas sin cómo pagar.</li>
</ul>

<h2>Preguntas frecuentes</h2>
<h3>¿Siempre piden la bolsa de viaje en Barajas?</h3>
<p>No a todos, pero el policía puede pedirla en cualquier momento del control. Lo seguro es llevarla.</p>
<h3>¿Los soles sirven?</h3>
<p>Lo que importa es demostrar el valor en euros. Lo más práctico es llevar euros en efectivo o tarjetas con su extracto impreso.</p>
<h3>¿Cuánto es en soles?</h3>
<p>Depende del tipo de cambio del día. Toma el monto en euros de la tabla y conviértelo con el tipo de cambio de tu banco antes de viajar.</p>
<h3>¿Esto aplica si voy a Italia o Francia?</h3>
<p>Cada país del espacio Schengen fija su propio monto. Esta guía es para España. Para Italia, mira los <a href="/viajes/requisitos-viajar-a-italia-desde-peru">requisitos para viajar a Italia desde Perú</a>.</p>

<h2>¿Viajas a España?</h2>
<p>En Cityland Travel armamos tu viaje con pasaje, reserva de hotel y seguro, y revisamos contigo cuánto te corresponde llevar según tus días. Escríbenos por WhatsApp con tu fecha y cuántos viajan.</p>`,
  },
  {
    slug: "seguro-schengen-30000-euros-peru-precio",
    titulo: "Seguro Schengen de 30.000 € desde Perú: ¿es obligatorio?, qué debe cubrir y cuánto cuesta",
    tituloSeo: "Seguro de viaje para España: ¿es obligatorio?",
    desc: "Para entrar a España sin visa, el Consulado lo considera recomendable; Francia sí lo exige. Qué debe cubrir un buen seguro para Europa y cuánto cuesta.",
    categoria: "Europa",
    catColor: "bg-red-600",
    fecha: "Actualizado octubre 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<p>Si eres peruano y entras a España <strong>sin visa</strong> (turismo o visita de hasta 90 días), el seguro médico <strong>no es un requisito obligatorio</strong>: el Consulado General de España en Lima lo califica como <strong>recomendable</strong>.</p>
<p>Ojo: cada país fija sus reglas. <strong>Francia sí lo exige</strong> a todos los viajeros, con o sin visa: un seguro que cubra gastos médicos, hospitalización, fallecimiento y repatriación (mira los <a href="/viajes/requisitos-viajar-a-francia-desde-peru">requisitos para viajar a Francia</a>).</p>
<p>El seguro con cobertura mínima de 30.000 € es obligatorio para quienes necesitan pedir una <strong>visa Schengen</strong> de corta duración. Los peruanos no la necesitan para viajar por turismo.</p>

<h2>Entonces, ¿vale la pena llevarlo?</h2>
<p>Sí. Que no sea obligatorio no quiere decir que no lo necesites:</p>
<ul>
<li>Si te enfermas o tienes un accidente, la atención se cobra, y en Europa puede costar miles de euros.</li>
<li>Si te pasa algo grave, el seguro cubre el traslado de regreso al Perú (repatriación), que por tu cuenta es muy caro.</li>
<li>Es un documento más que respalda tu viaje si en el control migratorio te preguntan por tus planes.</li>
</ul>

<h2>Qué debe cubrir un buen seguro para Europa</h2>
<p>Si lo vas a sacar, busca lo mismo que se exige a quienes piden visa. Así vas cubierto de verdad:</p>
<ul>
<li>Gastos médicos de al menos <strong>30.000 €</strong> por accidente o enfermedad.</li>
<li><strong>Hospitalización y atención de emergencia.</strong></li>
<li><strong>Repatriación</strong> al Perú, también en caso de fallecimiento.</li>
<li>Validez en <strong>todos los países del espacio Schengen</strong> y por <strong>todos los días</strong> de tu viaje.</li>
<li>De preferencia, <strong>sin deducible</strong>, para no pagar nada de tu bolsillo en una urgencia.</li>
</ul>

<h2>¿Y para otros destinos?</h2>
<p>Algunos países sí lo exigen. Por ejemplo, <a href="/viajes/requisitos-viajar-a-francia-desde-peru">Francia</a> pide un seguro con hospitalización y repatriación, y para entrar a <a href="/viajes/requisitos-viajar-a-curazao-desde-peru">Curazao</a> es obligatorio con una cobertura mínima de US$ 15,000.</p>

<h2>Cuánto cuesta</h2>
<p>Depende de los días de viaje, de tu edad y de la cobertura. En Cityland Travel emitimos el seguro para Europa desde US$ 65 (precio referencial), en PDF. Si compras un paquete con nosotros, puede venir incluido. Mira las opciones en <a href="/seguros">seguros de viaje</a>.</p>

<h2>Preguntas frecuentes</h2>
<h3>¿Me pueden negar la entrada a España por no tener seguro?</h3>
<p>Para peruanos sin visa, el Consulado no lo pone como requisito obligatorio. La policía de frontera decide con el conjunto de tus documentos, así que llevarlo suma.</p>
<h3>¿Me sirve el seguro de mi tarjeta de crédito?</h3>
<p>Algunas tarjetas incluyen seguro de viaje. Pregunta en tu banco cuánto cubre, si incluye repatriación y si vale en Europa, y pide el certificado antes de viajar.</p>
<h3>¿El mismo seguro me sirve para Italia o Francia?</h3>
<p>Sí, si la póliza dice que cubre todo el espacio Schengen.</p>

<p>Más detalle sobre lo que te pueden pedir al llegar: <a href="/viajes/requisitos-viajar-a-espana-desde-peru">requisitos para viajar a España desde Perú</a>.</p>

<h2>Fuente oficial</h2>
<ul>
<li><a href="https://www.exteriores.gob.es/Consulados/lima/es/Comunicacion/Noticias/Paginas/Articulos/20160315_NOT1.aspx" target="_blank" rel="noopener">Consulado General de España en Lima: requisitos para peruanos sin visa</a></li>
</ul>`,
  },
  {
    slug: "viajes-promocion-escolar-cusco-caribe-consejos",
    titulo: "Cómo organizar un viaje de promoción escolar a Cusco, Punta Cana o Cartagena con seguridad",
    desc: "Guía para comités de aula y colegios en Lima: contratos formales, permisos notariales, seguros estudiantiles y cronograma de pagos.",
    categoria: "Colegios",
    catColor: "bg-indigo-600",
    fecha: "Actualizado 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Claves para un viaje de promoción escolar 100% seguro</h2>
<p>Elegir la agencia de viajes adecuada para la promoción de primaria o secundaria requiere verificar la formalidad legal y operativa de la empresa.</p>
<h3>1. Verifica el RUC activo en SUNAT y la oficina física en Lima</h3>
<p>Contrata únicamente con agencias constituidas con oficina física real en Lima (como Cityland Group E.I.R.L., RUC 20614914239) que entreguen contrato formal, boletas/facturas electrónicas y códigos de reserva aérea verificables para cada alumno.</p>
<h3>2. Destinos favoritos de las promociones peruanas</h3>
<p>En rutas nacionales destacan <strong>Cusco & Machu Picchu</strong>, <strong>Tarapoto (Laguna Azul)</strong> y las <strong>Playas de Máncora / Punta Sal</strong>. En rutas internacionales lideran <strong>Punta Cana Todo Incluido</strong>, <strong>Cartagena de Indias</strong> y <strong>Cancún</strong>, siempre acompañados por un tour conductor con asistencia médica 24/7.</p>`,
  },
  {
    slug: "temporada-baja-viajar-machu-picchu-cusco",
    titulo: "Mejor época para viajar a Cusco y Machu Picchu: cómo asegurar tus entradas",
    desc: "Diferencias entre la temporada seca y la temporada verde en Cusco, circuitos oficiales de Machu Picchu y con cuánta anticipación reservar.",
    categoria: "Perú",
    catColor: "bg-emerald-700",
    fecha: "Actualizado 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Planifica tu viaje a Cusco y Machu Picchu sin contratiempos</h2>
<p>La Ciudadela Inca de Machu Picchu cuenta con aforos diarios estrictos regulados por el Ministerio de Cultura. Por ello, reservar tu paquete con anticipación garantiza conseguir los mejores horarios en el Circuito 2 (Clásico) y en los trenes turísticos.</p>
<h3>1. Temporada Seca (Abril a Octubre)</h3>
<p>Ofrece cielos despejados ideales para fotografía en Machu Picchu, Montaña de 7 Colores y Laguna Humantay. Se recomienda separar con el 50% de inicial al menos 30 a 60 días antes.</p>
<h3>2. Temporada de Ofertas (Noviembre a Marzo)</h3>
<p>Encontrarás paisajes verdes espectaculares en el Valle Sagrado y tarifas promocionales más bajas tanto en vuelos Lima – Cusco como en hoteles de 3, 4 y 5 estrellas.</p>`,
  },
  {
    slug: "que-preguntan-en-migraciones-espana-barajas",
    titulo: "¿Qué te preguntan en migraciones al llegar a España? Guía para peruanos 2026",
    tituloSeo: "Qué te preguntan en migraciones de España",
    desc: "Qué revisa la policía en Barajas a los peruanos que entran sin visa, qué papeles llevar, qué dice la norma del boleto de regreso y qué pasa si te niegan la entrada.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "Actualizado octubre 2026",
    lectura: "7 min",
    imagen: "/images/espana/barajas.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<p>Al llegar a Madrid-Barajas pasas por el control de pasaportes. A los peruanos, que entran sin visa, la policía les hace un <strong>control completo</strong>: revisa tu pasaporte y te puede preguntar a qué vas, dónde te vas a alojar, cuántos días te quedas, cuándo regresas y con qué dinero cuentas. También te puede pedir los papeles que lo demuestren.</p>
<p>No siempre preguntan todo, pero tienes que poder responder y mostrar cada cosa si te la piden.</p>

<h2>Qué revisa la policía, según la norma</h2>
<p>El Código de fronteras Schengen (Reglamento UE 2016/399, artículo 8) dice que a quien no es europeo se le hace un control minucioso al entrar. El policía comprueba:</p>
<ul>
<li>Que tu pasaporte sea válido y no tenga señales de falsificación.</li>
<li>Tus entradas y salidas anteriores, para ver que no pases de 90 días dentro de cada periodo de 180.</li>
<li>De dónde vienes, a dónde vas y el motivo de tu viaje.</li>
<li>Que tengas dinero suficiente para tu estancia y para regresar.</li>
<li>Que no tengas alertas en las bases de datos europeas.</li>
</ul>

<h2>Las preguntas más comunes y qué mostrar</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Te pueden preguntar</th><th>Qué mostrar</th></tr></thead>
<tbody>
<tr><td>¿A qué viene a España?</td><td>Turismo, visita familiar o negocios. Ayuda llevar tu itinerario, reservas de tours o la invitación a un evento.</td></tr>
<tr><td>¿Dónde se va a alojar?</td><td>La reserva de hotel a tu nombre por todas las noches, o la <a href="/blog/carta-invitacion-espana-peru-requisitos">carta de invitación</a> original si te alojas con un familiar o amigo.</td></tr>
<tr><td>¿Cuántos días se queda?</td><td>Lo mismo que dicen tu boleto y tu alojamiento. Como turista, máximo 90 días.</td></tr>
<tr><td>¿Cuándo regresa?</td><td>Tu boleto de regreso a tu país o de salida hacia otro país.</td></tr>
<tr><td>¿Con cuánto dinero viaja?</td><td>En 2026, 122,10 € por día y un mínimo de 1.098,90 €: en efectivo, o con tu tarjeta y el estado de cuenta impreso. Detalle en nuestra guía de la <a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje">bolsa de viaje</a>.</td></tr>
</tbody>
</table></div>

<h2>El boleto de regreso: lo que dice la norma española</h2>
<p>La <strong>Orden PRE/1282/2007</strong> dice que, si la policía lo pide, debes demostrar que tienes boleto para regresar a tu país o para salir hacia otro, y que ese boleto sea <strong>nominativo, intransferible y cerrado</strong>, es decir, a tu nombre y con fecha fija. La misma norma dice que, si no lo tienes, se te niega la entrada.</p>
<p>El reglamento de extranjería (Real Decreto 1155/2024, artículo 8) también pone el boleto de vuelta o de circuito turístico entre los documentos que te pueden pedir, sea cual sea el motivo de tu viaje.</p>

<h2>Consejos para pasar el control tranquilo</h2>
<ul>
<li>Lleva todos tus papeles impresos y juntos en una carpeta, además de tenerlos en el celular.</li>
<li>Responde con la verdad y con lo mismo que dicen tus papeles: fechas, hotel o dirección de tu familiar.</li>
<li>Ten a mano la dirección y el teléfono del lugar donde te vas a alojar.</li>
<li>Entrar sin visa es solo para turismo, visitas o negocios. Si vas a trabajar, necesitas visa.</li>
</ul>

<h2>Las huellas y la foto al entrar</h2>
<p>Desde el <strong>10 de abril de 2026</strong> funciona en todo el espacio Schengen el Sistema de Entradas y Salidas (EES). Al pasar el control te toman las huellas y una foto, y el sistema anota la fecha y el lugar de tu entrada y tu salida. Reemplaza al sello en el pasaporte y sirve para controlar el límite de 90 días.</p>

<h2>¿Qué pasa si te niegan la entrada?</h2>
<ul>
<li>La policía tiene que darte la negativa <strong>por escrito y con el motivo exacto</strong> (Ley Orgánica 4/2000, artículo 26).</li>
<li>Tienes derecho a <strong>abogado</strong>, gratuito si no tienes recursos, y a <strong>intérprete</strong>.</li>
<li>Puedes presentar un recurso, pero eso no detiene tu regreso. También se puede recurrir después, a través del consulado (Real Decreto 1155/2024, artículo 15).</li>
<li>El regreso se hace en un máximo de <strong>72 horas</strong>. Mientras tanto esperas en el aeropuerto, y la aerolínea paga tu pasaje de vuelta y tu manutención.</li>
<li>Se avisa al consulado del Perú.</li>
</ul>

<h2>Antes de viajar, revisa también</h2>
<ul>
<li><a href="/viajes/requisitos-viajar-a-espana-desde-peru">Requisitos para viajar a España desde Perú</a></li>
<li><a href="/blog/cuanto-cuesta-viajar-a-espana-desde-peru">Cuánto cuesta viajar a España desde Perú</a></li>
<li><a href="/blog/seguro-schengen-30000-euros-peru-precio">Seguro de viaje para Europa</a></li>
</ul>

<h2>Fuentes oficiales</h2>
<ul>
<li><a href="https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80504" target="_blank" rel="noopener">Reglamento (UE) 2016/399, Código de fronteras Schengen (BOE)</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-9608" target="_blank" rel="noopener">Orden PRE/1282/2007: medios económicos y boleto de regreso (BOE)</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099" target="_blank" rel="noopener">Real Decreto 1155/2024, reglamento de extranjería (BOE)</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2000-544" target="_blank" rel="noopener">Ley Orgánica 4/2000, de extranjería (BOE)</a></li>
<li><a href="https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en" target="_blank" rel="noopener">Comisión Europea: Sistema de Entradas y Salidas (EES)</a></li>
</ul>
<p>La decisión final de dejarte entrar es de la policía de frontera. Esta guía resume las normas al 24 de octubre de 2026.</p>`,
  },
  {
    slug: "cuanto-cuesta-viajar-a-espana-desde-peru",
    titulo: "¿Cuánto cuesta viajar a España desde Perú en 2026?",
    tituloSeo: "Cuánto cuesta viajar a España desde Perú 2026",
    desc: "Pasaje, bolsa de viaje, alojamiento, seguro, pasaporte y ETIAS: lo que cuesta viajar a España desde Perú en 2026, con montos oficiales y precios de referencia.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "Actualizado octubre 2026",
    lectura: "5 min",
    imagen: "/images/espana/gran-via-metropolis.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<p>Para viajar a España como turista desde Perú, lo que más pesa es el <strong>pasaje</strong> (ida y vuelta Lima–Madrid desde US$ ${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")} por persona con nosotros, según la temporada) y el <strong>alojamiento</strong>. Además, tienes que llevar el dinero que te pueden pedir en el aeropuerto: en 2026, un mínimo de <strong>1.098,90 € por persona</strong>. Ese dinero no se le paga a nadie: es para tus gastos en España.</p>

<h2>Lo que cuesta, punto por punto</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Concepto</th><th>Cuánto</th><th>Qué saber</th></tr></thead>
<tbody>
<tr><td>Pasaje Lima–Madrid ida y vuelta</td><td>Desde US$ ${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")}</td><td>Precio de referencia por persona en Cityland Travel. Cambia según la fecha y los asientos disponibles.</td></tr>
<tr><td>Bolsa de viaje</td><td>122,10 € por día, mínimo 1.098,90 €</td><td>Es tu dinero para gastos. Te lo pueden pedir en el control del aeropuerto (Orden PRE/1282/2007).</td></tr>
<tr><td>Alojamiento</td><td>Según el hotel y las noches</td><td>Si te alojas con un familiar o amigo, él tramita en España la carta de invitación; la tasa ronda los 75 €.</td></tr>
<tr><td>Seguro de viaje</td><td>Según tus días y tu edad</td><td>Para España es recomendable, no obligatorio. Si también visitas Francia, allá sí lo exigen.</td></tr>
<tr><td>Pasaporte electrónico</td><td>S/ 120,90</td><td>Tarifa de Migraciones. Confírmala en su web antes de pagar.</td></tr>
<tr><td>ETIAS</td><td>Todavía no se cobra</td><td>Cuando empiece a funcionar costará 20 €. A octubre de 2026 la Unión Europea no ha anunciado la fecha.</td></tr>
</tbody>
</table></div>

<h2>¿Cuánto dinero llevar según tus días?</h2>
<p>Multiplica tus días por 122,10 €. Si te da menos de 1.098,90 €, vale el mínimo. Por ejemplo: hasta 9 días, 1.098,90 €; 15 días, 1.831,50 €; 30 días, 3.663 €. Si viajan dos, cada uno debe tener su parte. Más detalles y cómo demostrarlo en la guía de la <a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje">bolsa de viaje para España</a>.</p>
<p>Para pasar los euros a soles, usa el tipo de cambio del día de tu banco.</p>

<h2>¿Cómo pagar tu viaje?</h2>
<ul>
<li>Separas tu pasaje o paquete con el <strong>50%</strong> y pagas el resto antes de viajar.</li>
<li>Pagas en nuestras oficinas de Los Olivos o por transferencia, Yape, Plin o tarjeta.</li>
<li>Recibes tu boleta o factura electrónica.</li>
</ul>

<h2>Antes de comprar, revisa</h2>
<ul>
<li><a href="/viajes/requisitos-viajar-a-espana-desde-peru">Requisitos para viajar a España desde Perú</a></li>
<li><a href="/blog/que-preguntan-en-migraciones-espana-barajas">Qué te preguntan en migraciones al llegar a España</a></li>
<li><a href="/vuelos/lima-madrid">Pasajes Lima–Madrid ida y vuelta</a></li>
</ul>

<h2>Fuentes</h2>
<ul>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-9608" target="_blank" rel="noopener">Orden PRE/1282/2007: medios económicos (BOE)</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-9609" target="_blank" rel="noopener">Orden PRE/1283/2007: carta de invitación (BOE)</a></li>
<li><a href="https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/european-travel-information-authorisation-system_en" target="_blank" rel="noopener">Comisión Europea: ETIAS</a></li>
</ul>
<p>Los precios de pasaje son de referencia al 24 de octubre de 2026 y no incluyen alojamiento ni seguro.</p>`,
  },
  {
    slug: "viajar-a-espana-por-primera-vez-desde-peru",
    titulo: "Viajar a España por primera vez desde Perú: guía práctica 2026",
    tituloSeo: "Viajar a España por primera vez desde Perú",
    desc: "Qué llevar y qué no en la maleta, cuánto efectivo puedes llevar, cómo ir de Barajas al centro de Madrid y con cuánto, la diferencia de hora y los enchufes.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "Actualizado octubre 2026",
    lectura: "6 min",
    imagen: "/images/espana/cibeles.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<ul>
<li>Documentos: pasaporte, boleto de regreso, alojamiento y dinero suficiente. Te los explicamos en los <a href="/viajes/requisitos-viajar-a-espana-desde-peru">requisitos para viajar a España</a>.</li>
<li>En la maleta no puedes llevar carne ni productos lácteos.</li>
<li>Si llevas 10.000 € o más en efectivo, tienes que declararlo en la aduana.</li>
<li>Del aeropuerto al centro de Madrid: desde unos 2 € en tren hasta 33 € en taxi.</li>
<li>Madrid va 6 horas adelante de Lima en invierno y 7 en verano.</li>
</ul>

<h2>Antes de salir de Lima</h2>
<h3>Lo que no puedes llevar en la maleta</h3>
<p>Si vienes de un país fuera de la Unión Europea, como el Perú, <strong>no puedes entrar carne ni productos lácteos</strong> (queso, leche, embutidos). La excepción es hasta 2 kg de leche en polvo para bebés, comida infantil o alimentos especiales por razones médicas, de marca, en su envase cerrado y que no necesiten refrigeración. Las frutas, verduras y plantas necesitan un certificado fitosanitario.</p>

<h3>Cuánto efectivo puedes llevar</h3>
<p>Puedes llevar el dinero que quieras, pero si son <strong>10.000 € o más</strong> (o lo mismo en otra moneda) tienes que declararlo en la aduana al entrar. El límite es por persona y por viaje. En España se declara con el modelo E1, y no declararlo es una infracción grave con multa.</p>
<p>Recuerda que en el control migratorio te pueden pedir que demuestres la <a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje">bolsa de viaje</a>: 122,10 € por día, con un mínimo de 1.098,90 €.</p>

<h3>Lo que puedes llevar sin pagar impuestos</h3>
<div class="tabla-guia"><table>
<thead><tr><th>Qué</th><th>Hasta cuánto (por persona, llegando en avión)</th></tr></thead>
<tbody>
<tr><td>Compras y regalos</td><td>430 € en total (150 € si es menor de 15 años)</td></tr>
<tr><td>Tabaco</td><td>200 cigarrillos, o 100 puritos, o 50 puros, o 250 g de tabaco</td></tr>
<tr><td>Licores de más de 22 %</td><td>1 litro (o 2 litros de bebidas de menos de 22 %)</td></tr>
<tr><td>Vino y cerveza</td><td>4 litros de vino y 16 litros de cerveza</td></tr>
</tbody>
</table></div>
<p>Los menores de 17 años no tienen franquicia de tabaco ni de alcohol. Los medicamentos de uso personal no cuentan.</p>

<h2>Al llegar a Madrid-Barajas</h2>
<p>Primero pasas el control de pasaportes: te toman las huellas y una foto, y te pueden hacer preguntas sobre tu viaje. Te lo explicamos en <a href="/blog/que-preguntan-en-migraciones-espana-barajas">qué te preguntan en migraciones</a>. Después recoges tu maleta y pasas la aduana.</p>

<h3>Cómo ir del aeropuerto al centro de Madrid</h3>
<div class="tabla-guia"><table>
<thead><tr><th>Opción</th><th>Precio</th><th>Qué saber</th></tr></thead>
<tbody>
<tr><td>Metro, línea 8</td><td>Billete de 1,50 € a 2,00 € más 3,00 € de suplemento de aeropuerto</td><td>Sale de las terminales T1-T2-T3 y T4 hacia Nuevos Ministerios.</td></tr>
<tr><td>Tren de Cercanías C1</td><td>De 1,70 € a 2,60 € según las zonas</td><td>Sale de la T4 hacia Chamartín, Atocha y Príncipe Pío.</td></tr>
<tr><td>Bus Exprés Aeropuerto (línea 203)</td><td>5 €</td><td>Funciona las 24 horas. Para en T4, T2, T1, O'Donnell, Cibeles y Atocha. Pagas a bordo en efectivo o con tarjeta.</td></tr>
<tr><td>Taxi</td><td>33 € de tarifa fija</td><td>Para ir del aeropuerto a cualquier punto dentro de la M-30 (el centro de Madrid), a cualquier hora y sin recargos.</td></tr>
</tbody>
</table></div>

<h2>Ya en España</h2>
<ul>
<li><strong>La hora:</strong> desde el 25 de octubre de 2026 Madrid va 6 horas adelante de Lima. Desde el 28 de marzo de 2027, cuando empieza el horario de verano, van 7 horas adelante.</li>
<li><strong>Los enchufes:</strong> son de dos clavijas redondas (tipo F) y la corriente es de 230 V y 50 Hz; en el Perú es de 220 V y 60 Hz. La mayoría de cargadores de celular y laptop funcionan con las dos: revisa la etiqueta y lleva un adaptador.</li>
<li><strong>Emergencias:</strong> llama al 112, gratis desde cualquier teléfono.</li>
<li><strong>Consulado General del Perú en Madrid:</strong> Paseo del Pintor Rosales 30, Madrid.</li>
</ul>

<h2>Arma tu viaje</h2>
<ul>
<li><a href="/vuelos/lima-madrid">Pasajes Lima–Madrid ida y vuelta</a></li>
<li><a href="/blog/vuelos-directos-lima-madrid-comparativa-aerolineas">Qué aerolíneas vuelan directo y en qué terminal llegas</a></li>
<li><a href="/blog/cuanto-cuesta-viajar-a-espana-desde-peru">Cuánto cuesta viajar a España desde Perú</a></li>
</ul>

<h2>Fuentes oficiales</h2>
<ul>
<li><a href="https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_es.htm" target="_blank" rel="noopener">Tu Europa (UE): carne, lácteos y otros alimentos</a></li>
<li><a href="https://sede.agenciatributaria.gob.es/Sede/viajeros-trabajadores-desplazados-fronterizos/viajeros/medios-pago.html" target="_blank" rel="noopener">Agencia Tributaria: declarar efectivo</a></li>
<li><a href="https://sede.agenciatributaria.gob.es/Sede/viajeros-trabajadores-desplazados-fronterizos/viajeros/franquicias-tabaco-alcohol-otras-mercancias.html" target="_blank" rel="noopener">Agencia Tributaria: franquicias para viajeros</a></li>
<li><a href="https://crtm.es/billetes-transporte-publico-aeropuerto-madrid" target="_blank" rel="noopener">Consorcio de Transportes de Madrid: billetes al aeropuerto</a></li>
<li><a href="https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/trains.html" target="_blank" rel="noopener">Aena: tren al aeropuerto</a></li>
<li><a href="https://www.emtmadrid.es/Aeropuerto" target="_blank" rel="noopener">EMT Madrid: Exprés Aeropuerto</a></li>
<li><a href="https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/taxi.html" target="_blank" rel="noopener">Aena: taxi y tarifa fija</a></li>
<li><a href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-4026" target="_blank" rel="noopener">BOE: cambio de hora</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099" target="_blank" rel="noopener">BOE: tensión de la red eléctrica</a></li>
<li><a href="https://www.spain.info/es/info/embajada-republica-peru/" target="_blank" rel="noopener">Spain.info: Consulado y Embajada del Perú</a></li>
</ul>
<p>Precios y normas revisados el 24 de octubre de 2026. Pueden cambiar.</p>`,
  },
  {
    slug: "visa-de-estudios-espana-desde-peru",
    titulo: "Visa de estudios para España desde Perú 2026: requisitos, costo y plazos",
    tituloSeo: "Visa de estudios para España desde Perú 2026",
    desc: "Cuándo necesitas visa para estudiar en España, qué documentos pide el Consulado en Lima, cuánto dinero acreditar (600 € al mes), dónde se tramita y si puedes trabajar.",
    categoria: "Visas",
    catColor: "bg-blue-700",
    fecha: "Actualizado octubre 2026",
    lectura: "7 min",
    imagen: "/images/espana/palacio-real.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<ul>
<li>Necesitas visa de estudios si vas a estudiar <strong>más de 90 días</strong>. Hasta 90 días entras sin visa, como turista.</li>
<li>Se tramita en Lima en el centro <strong>BLS International</strong>, con cita que sacas en la web de BLS, al menos <strong>2 meses antes</strong> de que empiecen tus clases.</li>
<li>La tasa del Consulado es de <strong>352,10 soles</strong>, en efectivo. BLS cobra además su tarifa de servicio.</li>
<li>Tienes que demostrar <strong>600 € por cada mes</strong> de estudios y tener un seguro médico sin copagos.</li>
<li>Si vas a estudios superiores, puedes trabajar hasta <strong>30 horas por semana</strong>.</li>
</ul>

<h2>¿Qué estudios dan visa?</h2>
<p>El reglamento de extranjería (Real Decreto 1155/2024, artículo 52) da visa de estudios para:</p>
<ul>
<li>Estudios superiores a tiempo completo que dan un título reconocido: carrera, máster o un título propio de una universidad, y también el máster de Formación Profesional.</li>
<li>Secundaria postobligatoria a tiempo completo, incluidos los ciclos de grado medio.</li>
<li>Programas de movilidad de alumnos y de voluntariado.</li>
<li>Algunas actividades formativas, como cursos presenciales de castellano en Escuelas Oficiales de Idiomas o en centros acreditados por el Instituto Cervantes.</li>
</ul>
<p>«Tiempo completo» significa estar matriculado en al menos el 90 % de los créditos o del programa.</p>

<h2>Los requisitos del Consulado en Lima</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Documento</th><th>Qué tener en cuenta</th></tr></thead>
<tbody>
<tr><td>Formulario de visado nacional</td><td>Lleno y firmado. Si eres menor de edad, lo firma tu representante.</td></tr>
<tr><td>Pasaporte</td><td>Con al menos 1 año de vigencia y 2 páginas en blanco. Lleva también tu DNI o carné de extranjería.</td></tr>
<tr><td>Carta de admisión</td><td>Del centro de estudios, con el curso, la duración, las horas, las fechas, el costo y lo que ya pagaste.</td></tr>
<tr><td>Dinero</td><td>600 € por cada mes (el 100 % del IPREM). Se demuestra con los estados de cuenta originales de los últimos 6 meses, firmados y sellados por el banco.</td></tr>
<tr><td>Seguro médico</td><td>Un seguro de enfermedad, no de viaje, de una aseguradora autorizada en España, sin carencias, copagos ni límite de cobertura, por toda tu estancia.</td></tr>
<tr><td>Certificado médico</td><td>De que no tienes enfermedades graves para la salud pública, con menos de 3 meses, y solo de las clínicas que acepta el Consulado.</td></tr>
<tr><td>Antecedentes penales</td><td>Si eres mayor de edad y te quedas más de 180 días: de los países donde viviste los últimos 5 años, con menos de 3 meses y apostillado.</td></tr>
</tbody>
</table></div>
<p>Todos los documentos peruanos van apostillados y, si no están en español, traducidos. Si viajan familiares contigo, por el primero se suman 450 € al mes y por cada uno de los demás, 300 € al mes.</p>

<h2>Dónde y cómo se presenta</h2>
<ul>
<li><strong>Dónde:</strong> no en el Consulado, sino en BLS International, Av. Javier Prado Este 560, oficina 2201, San Isidro.</li>
<li><strong>La cita:</strong> se saca solo en la web de BLS, y el Consulado advierte que es la única vía. Desde el 1 de junio de 2026 tienes que llevar impresa la carta de tu cita.</li>
<li><strong>Quién va:</strong> todos los solicitantes en persona, incluidos los menores de edad.</li>
<li><strong>Cuándo:</strong> al menos 2 meses antes de que empiecen tus estudios. De junio a septiembre las citas se llenan rápido.</li>
<li><strong>Cuánto demora:</strong> el Consulado resuelve en un plazo máximo de un mes desde que entregas tus documentos.</li>
<li><strong>La tasa:</strong> 352,10 soles en efectivo y con el monto exacto (no reciben billetes de 200). No se devuelve si te niegan la visa.</li>
</ul>

<h2>Al llegar a España</h2>
<p>Si te quedas más de 6 meses, tienes que pedir tu <strong>Tarjeta de Identidad de Extranjero (TIE)</strong> en persona en la Policía dentro del mes siguiente a tu llegada.</p>

<h2>¿Puedo trabajar mientras estudio?</h2>
<p>Si vas a estudios superiores, sí: tu autorización de estudios ya te permite trabajar, sin otro trámite, hasta <strong>30 horas por semana</strong> y en la misma comunidad autónoma donde estudias. Si pasas de ese límite, pierdes la autorización. Para otros estudios tienes que pedir un permiso de trabajo aparte. Las prácticas que son parte de tu carrera no necesitan permiso.</p>

<h2>¿Puede ir mi familia?</h2>
<p>Solo si vas a estudios superiores. Pueden ir tu cónyuge o pareja registrada y tus hijos menores de edad, cada uno con su dinero, su seguro y sus documentos. Tus familiares no pueden trabajar en España con esa visa.</p>

<h2>Antes de viajar, revisa también</h2>
<ul>
<li><a href="/blog/viajar-a-espana-por-primera-vez-desde-peru">Tu primer viaje a España: qué llevar y cómo llegar del aeropuerto</a></li>
<li><a href="/blog/vuelos-directos-lima-madrid-comparativa-aerolineas">Vuelos directos Lima–Madrid</a></li>
<li><a href="/vuelos/lima-madrid">Pasajes Lima–Madrid</a></li>
</ul>

<h2>Fuentes oficiales</h2>
<ul>
<li><a href="https://www.exteriores.gob.es/Consulados/lima/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&amp;scco=Per%C3%BA&amp;scd=174&amp;scs=Visados+Nacionales+-+Visado+de+estudios" target="_blank" rel="noopener">Consulado General de España en Lima: visado de estudios</a></li>
<li><a href="https://www.exteriores.gob.es/Consulados/lima/es/Comunicacion/Noticias/Paginas/Articulos/Informaci%C3%B3n-importante-sobre-la-temporada-de-visados-de-estudios-2026.aspx" target="_blank" rel="noopener">Consulado en Lima: temporada de visados de estudios 2026</a></li>
<li><a href="https://www.exteriores.gob.es/DocumentosAuxiliaresSC/Per%C3%BA/LIMA%20(C)/Tasas%20consulares%202024.pdf" target="_blank" rel="noopener">Consulado en Lima: tasas consulares 2026</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099" target="_blank" rel="noopener">Real Decreto 1155/2024, reglamento de extranjería (BOE)</a></li>
</ul>
<p>Revisado el 24 de octubre de 2026. La decisión es del Consulado y los requisitos pueden cambiar: confírmalos antes de presentar.</p>`,
  },
  {
    slug: "reagrupacion-familiar-espana-desde-peru",
    titulo: "Reagrupación familiar en España 2026: cómo llevar a tu familia desde Perú",
    tituloSeo: "Reagrupación familiar en España desde Perú 2026",
    desc: "Quién puede reagrupar, a qué familiares, cuánto dinero piden (900 € al mes para dos personas), qué documentos y cómo es el trámite paso a paso, según la hoja oficial del Gobierno de España.",
    categoria: "Visas",
    catColor: "bg-blue-700",
    fecha: "Actualizado octubre 2026",
    lectura: "7 min",
    imagen: "/images/espana/plaza-mayor.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<ul>
<li>Quien pide la reagrupación es el familiar que ya vive <strong>legalmente en España</strong>, no el que está en Perú.</li>
<li>En general, tiene que haber vivido en España <strong>al menos un año</strong> y haber pedido la renovación de su residencia por otro año.</li>
<li>Tiene que demostrar ingresos de al menos el <strong>150 % del IPREM</strong> para dos personas (hoy, 900 € al mes) y <strong>300 € más</strong> por cada familiar adicional.</li>
<li>También necesita una <strong>vivienda adecuada</strong> y un <strong>seguro de enfermedad</strong> para todos.</li>
<li>Si se aprueba, el familiar en Perú pide su <strong>visado en el Consulado de España en Lima</strong> y viaja.</li>
</ul>

<h2>¿A quién se puede reagrupar?</h2>
<ul>
<li><strong>Cónyuge o pareja</strong> mayor de 18 años. La pareja sin casarse tiene que estar inscrita en un registro o probar al menos 12 meses de convivencia (no se pide si tienen hijos en común).</li>
<li><strong>Hijos menores de 18 años</strong>, propios o del cónyuge o pareja, y los mayores de edad que no puedan valerse por sí mismos por su salud o discapacidad.</li>
<li><strong>Padres o suegros mayores de 65 años</strong> que estén a cargo del reagrupante y cuando haya razones que justifiquen que vivan en España. Para ellos, el reagrupante necesita tener la <strong>residencia de larga duración</strong>.</li>
<li>Un <strong>hijo mayor de edad</strong> que vaya a cuidar al reagrupante, si este tiene reconocido un grado de dependencia.</li>
</ul>

<h2>Cuánto dinero piden</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Familia en España</th><th>Ingreso mínimo al mes</th></tr></thead>
<tbody>
<tr><td>2 personas (tú y tu familiar)</td><td>900 € (150 % del IPREM)</td></tr>
<tr><td>3 personas</td><td>1.200 €</td></tr>
<tr><td>4 personas</td><td>1.500 €</td></tr>
</tbody>
</table></div>
<p>El IPREM es de 600 € al mes. Si se reagrupa a hijos menores, la cantidad puede ser menor: basta tener ingresos estables iguales o mayores al salario mínimo. Se demuestra con el contrato y las nóminas de los últimos 6 meses o, si trabajas por tu cuenta, con tus declaraciones de impuestos.</p>

<h2>Paso a paso</h2>
<ol>
<li><strong>En España:</strong> el reagrupante presenta el formulario EX-02 en la Oficina de Extranjería de su provincia o por internet, y paga la tasa (modelo 790, código 052).</li>
<li><strong>La vivienda:</strong> pide a su comunidad autónoma o ayuntamiento el informe de vivienda adecuada, con menos de 6 meses de antigüedad.</li>
<li><strong>La respuesta:</strong> Extranjería tiene <strong>2 meses</strong> para resolver.</li>
<li><strong>En Perú:</strong> si se aprueba, el familiar tiene <strong>2 meses</strong> para pedir su visado en persona en el Consulado de España en Lima, con pasaporte de al menos 4 meses de vigencia, antecedentes penales (si es mayor de edad), certificado médico y los documentos que prueban el parentesco.</li>
<li><strong>El visado:</strong> el Consulado responde en un máximo de <strong>1 mes</strong>; después hay 1 mes para recogerlo y otro mes para entrar a España.</li>
<li><strong>Al llegar:</strong> dentro del primer mes, el familiar pide su Tarjeta de Identidad de Extranjero (TIE) en la Policía.</li>
</ol>

<h2>Los documentos peruanos</h2>
<p>Partidas de nacimiento o de matrimonio y antecedentes penales tienen que ir <strong>apostillados</strong>. Si alguno no está en español, va con traducción jurada.</p>

<h2>¿El familiar puede trabajar?</h2>
<p>Sí. El cónyuge o pareja y los hijos en edad de trabajar pueden trabajar en cualquier parte de España, por cuenta ajena o propia, sin otro trámite.</p>

<h2>Cuando tengas el visado</h2>
<p>Te ayudamos con el pasaje Lima–Madrid de tu familiar y, si es una persona mayor, pedimos a la aerolínea la asistencia con silla de ruedas en el aeropuerto.</p>
<ul>
<li><a href="/vuelos/lima-madrid">Pasajes Lima–Madrid</a></li>
<li><a href="/blog/traer-familiar-de-peru-a-espana-de-visita">Si tu familiar solo viene de visita</a></li>
<li><a href="/viajes-adultos-mayores">Viajes para adultos mayores</a></li>
</ul>

<h2>Fuente oficial</h2>
<ul>
<li><a href="https://www.inclusion.gob.es/web/migraciones/w/autorizacion-de-residencia-temporal-por-reagrupacion-familiar" target="_blank" rel="noopener">Ministerio de Inclusión, Seguridad Social y Migraciones: Hoja 8, reagrupación familiar (mayo de 2025)</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099" target="_blank" rel="noopener">Real Decreto 1155/2024, reglamento de extranjería (BOE)</a></li>
</ul>
<p>Revisado el 25 de octubre de 2026. Esta guía es informativa: cada caso lo decide la Oficina de Extranjería y el Consulado, y para casos complejos conviene consultar con un abogado de extranjería.</p>`,
  },
  {
    slug: "traer-familiar-de-peru-a-espana-de-visita",
    titulo: "Cómo traer a tu mamá o a un familiar de Perú a España de visita",
    tituloSeo: "Traer a un familiar de Perú a España de visita",
    desc: "Si vives en España y quieres que tu mamá, tu papá o un familiar venga de visita: cuánto tiempo puede quedarse, qué le pueden pedir en Barajas y cómo comprarle el pasaje desde España.",
    categoria: "Guías",
    catColor: "bg-emerald-700",
    fecha: "Actualizado octubre 2026",
    lectura: "5 min",
    imagen: "/images/espana/barajas.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<ul>
<li>Los peruanos <strong>no necesitan visa</strong> para visitar España: pueden quedarse hasta <strong>90 días</strong> dentro de cada período de 180 días, solo con pasaporte.</li>
<li>En el aeropuerto de Madrid le pueden pedir el <strong>pasaje de regreso</strong>, dónde se va a alojar, <strong>dinero</strong> para su estadía y un <strong>seguro de viaje</strong>.</li>
<li>Si se queda en tu casa, el alojamiento se prueba con la <strong>carta de invitación</strong>, que tú pides en la Policía en España.</li>
<li>Tú puedes cotizar y pagar el pasaje desde España; tu familiar recibe todo en Lima.</li>
</ul>

<h2>Lo que conviene que lleve en la mano</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Documento</th><th>Para qué</th></tr></thead>
<tbody>
<tr><td>Pasaporte vigente</td><td>Para entrar al espacio Schengen.</td></tr>
<tr><td>Pasaje de ida y vuelta</td><td>Demuestra que regresa a Perú dentro de los 90 días.</td></tr>
<tr><td>Carta de invitación o reserva de hotel</td><td>Demuestra dónde se va a quedar.</td></tr>
<tr><td>Dinero o tarjeta</td><td>Para sus gastos durante la visita.</td></tr>
<tr><td>Seguro de viaje</td><td>Para cualquier atención médica en Europa.</td></tr>
</tbody>
</table></div>
<p>Quien decide en la frontera es el policía de migraciones, por eso lo mejor es que tu familiar lleve todo impreso y ordenado.</p>

<h2>Cómo comprarle el pasaje desde España</h2>
<ol>
<li>Nos escribes por WhatsApp desde España con las fechas y los datos de tu familiar.</li>
<li>Te enviamos la cotización del pasaje Lima–Madrid ida y vuelta y, si quieres, el seguro de viaje.</li>
<li>Pagas con tarjeta o transferencia.</li>
<li>Tu familiar recibe su itinerario por WhatsApp o lo recoge en nuestras oficinas de Los Olivos, y le explicamos qué llevar.</li>
</ol>
<p>Si es una persona mayor, pedimos a la aerolínea la <strong>silla de ruedas</strong> para el embarque y la llegada.</p>

<h2>¿Y si quiere quedarse a vivir?</h2>
<p>Para vivir en España no sirve la visita como turista. Si tú ya eres residente legal, el camino es la <a href="/blog/reagrupacion-familiar-espana-desde-peru">reagrupación familiar</a>.</p>

<h2>Revisa también</h2>
<ul>
<li><a href="/blog/carta-invitacion-espana-peru-requisitos">Carta de invitación para España: requisitos</a></li>
<li><a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje">Bolsa de viaje: cuánto dinero llevar</a></li>
<li><a href="/blog/que-preguntan-en-migraciones-espana-barajas">Qué te preguntan en migraciones de Barajas</a></li>
<li><a href="/vuelos/lima-madrid">Pasajes Lima–Madrid</a></li>
<li><a href="/vuelos/madrid-lima">Pasajes Madrid–Lima, si eres tú quien viaja a Perú</a></li>
</ul>
<p>Revisado el 25 de octubre de 2026. Los requisitos de entrada pueden cambiar: confírmalos antes de viajar.</p>`,
  },
  {
    slug: "trabajar-legalmente-en-espana-desde-peru",
    titulo: "Cómo trabajar legalmente en España siendo peruano: los caminos desde Perú (2026)",
    tituloSeo: "Trabajar legalmente en España siendo peruano",
    desc: "Los caminos legales para trabajar en España desde Perú: contrato con visado de trabajo (los peruanos tienen una ventaja), estudiar y trabajar 30 horas, reagrupación familiar y la nacionalidad a los 2 años.",
    categoria: "Visas",
    catColor: "bg-blue-700",
    fecha: "Actualizado octubre 2026",
    lectura: "7 min",
    imagen: "/images/espana/gran-via-metropolis.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<ul>
<li>Con la entrada como turista <strong>no se puede trabajar</strong> en España. Para trabajar necesitas una autorización.</li>
<li>El camino principal es un <strong>contrato con una empresa española</strong>: la empresa pide la autorización en España y tú sacas el visado de trabajo en el Consulado de España en Lima.</li>
<li>Los peruanos tienen una <strong>ventaja</strong>: por un acuerdo entre España y Perú, la empresa no tiene que demostrar que no encontró a nadie en España para ese puesto.</li>
<li>Otros caminos legales: <strong>estudiar y trabajar</strong> hasta 30 horas por semana, o ir por <strong>reagrupación familiar</strong> si tu pareja o tu papá o mamá ya es residente.</li>
</ul>

<h2>1. Con contrato de trabajo (visado de trabajo)</h2>
<p>Es el camino más directo. Así funciona según la hoja oficial del Gobierno de España:</p>
<ol>
<li><strong>La empresa en España</strong> te ofrece un contrato y pide tu autorización de residencia y trabajo por internet (formulario EX-03). Tú no puedes pedirla por tu cuenta.</li>
<li><strong>La ventaja peruana:</strong> normalmente la empresa tiene que probar que el puesto es «de difícil cobertura». Con los peruanos no hace falta, porque España tiene un acuerdo con Perú (y con Chile).</li>
<li><strong>El contrato</strong> tiene que respetar las condiciones legales; si es a tiempo parcial, el sueldo tiene que llegar al menos al salario mínimo de jornada completa.</li>
<li><strong>Extranjería responde</strong> en un plazo de 3 meses.</li>
<li><strong>En Lima:</strong> si se aprueba, tienes <strong>1 mes</strong> para pedir el visado en persona en el Consulado de España, con pasaporte de al menos 1 año de vigencia, antecedentes penales, certificado médico y el pago de la tasa. El Consulado responde en 1 mes.</li>
<li><strong>El viaje:</strong> recoges el visado en 1 mes y tienes 3 meses para entrar a España. Allí la empresa te da de alta en la Seguridad Social y, dentro del mes siguiente, pides tu Tarjeta de Identidad de Extranjero (TIE) en la Policía.</li>
</ol>
<p>Si tu profesión exige título (enfermería, medicina, ingeniería…), puede que tengas que <strong>homologarlo</strong> en España antes.</p>

<h2>2. Estudiar y trabajar</h2>
<p>Con la visa de estudios para estudios superiores (carrera, máster, Formación Profesional de grado superior) puedes trabajar hasta <strong>30 horas por semana</strong> sin otro trámite. Mira la guía completa de la <a href="/blog/visa-de-estudios-espana-desde-peru">visa de estudios para España</a>.</p>

<h2>3. Por reagrupación familiar</h2>
<p>Si tu esposo, esposa o pareja vive legalmente en España, puede pedir tu reagrupación. Con esa autorización puedes trabajar en cualquier parte de España sin otro trámite. Mira la guía de <a href="/blog/reagrupacion-familiar-espana-desde-peru">reagrupación familiar</a>.</p>

<h2>4. Profesionales muy calificados</h2>
<p>Si tienes una oferta para un puesto directivo o muy calificado, existe una autorización especial para profesionales altamente cualificados, con un trámite propio.</p>

<h2>Y después: la nacionalidad a los 2 años</h2>
<p>Los peruanos, como los demás iberoamericanos, pueden pedir la <strong>nacionalidad española</strong> después de <strong>2 años de residencia legal</strong> y continuada en España (Código Civil, artículo 22). Por eso conviene entrar por un camino legal desde el inicio.</p>

<h2>Cuidado con las estafas</h2>
<ul>
<li>Nadie puede «venderte» un contrato o una visa de trabajo: la autorización la pide una empresa real y la decide Extranjería.</li>
<li>Desconfía de quien te pida dinero por adelantado para «conseguirte trabajo en España».</li>
<li>Entrar como turista para quedarte a trabajar te deja sin papeles y puede cerrarte la puerta para volver.</li>
</ul>

<h2>Cuando tengas tu visado</h2>
<p>Te ayudamos con el pasaje Lima–Madrid y te explicamos qué llevar para el viaje.</p>
<ul>
<li><a href="/vuelos/lima-madrid">Pasajes Lima–Madrid</a></li>
<li><a href="/blog/viajar-a-espana-por-primera-vez-desde-peru">Tu primer viaje a España</a></li>
</ul>

<h2>Fuentes oficiales</h2>
<ul>
<li><a href="https://www.inclusion.gob.es/web/migraciones/w/autorizacion-inicial-de-residencia-temporal-y-trabajo-por-cuenta-ajena-hi-16-" target="_blank" rel="noopener">Ministerio de Inclusión, Seguridad Social y Migraciones: Hoja 12, residencia y trabajo por cuenta ajena (mayo de 2025)</a></li>
<li><a href="https://www.inclusion.gob.es/web/migraciones/w/autorizacion-de-residencia-temporal-por-reagrupacion-familiar" target="_blank" rel="noopener">Hoja 8, reagrupación familiar</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099" target="_blank" rel="noopener">Real Decreto 1155/2024, reglamento de extranjería (BOE)</a></li>
<li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763" target="_blank" rel="noopener">Código Civil, artículo 22 (BOE)</a></li>
</ul>
<p>Revisado el 25 de octubre de 2026. Esta guía es informativa: cada caso lo deciden Extranjería y el Consulado, y para casos complejos conviene consultar con un abogado de extranjería.</p>`,
  },
  {
    slug: "viaje-a-disney-desde-peru-cuanto-cuesta",
    titulo: "Viaje a Disney desde Perú: qué necesitas, cuántos días y cómo armar el presupuesto familiar",
    tituloSeo: "Viaje a Disney desde Perú: requisitos y presupuesto",
    desc: "Lo que necesita una familia peruana para ir a Disney en Orlando: visa americana para cada uno, cuántos días de parques, cuándo ir y qué entra en el presupuesto.",
    categoria: "Guías",
    catColor: "bg-emerald-700",
    fecha: "Actualizado octubre 2026",
    lectura: "6 min",
    imagen: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=900&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La respuesta corta</h2>
<ul>
<li>Cada miembro de la familia, <strong>incluidos los niños</strong>, necesita <strong>pasaporte vigente y visa americana</strong>. Sin visa no se puede viajar a Estados Unidos.</li>
<li>Primero consigue las visas y <strong>después</strong> compra pasajes y entradas.</li>
<li>Para ver lo principal de Disney y Universal, calcula entre <strong>4 y 6 días de parques</strong>, más los días de vuelo.</li>
<li>El presupuesto tiene 5 partes: <strong>vuelos, hotel, entradas, comidas y seguro de viaje</strong>.</li>
</ul>

<h2>1. Las visas: lo primero</h2>
<p>La tasa de la visa americana es de <strong>US$185 por persona</strong> y no se devuelve si te la niegan. Los menores de edad también pagan y también necesitan su propia visa. Las citas en la Embajada pueden demorar, así que empieza con tiempo. En nuestra página de <a href="/visas">visas</a> te explicamos cómo te ayudamos con el formulario y la entrevista.</p>
<p>Si un menor viaja con un solo padre, necesita además el <a href="/blog/permiso-notarial-viaje-menores-peru-requisitos">permiso notarial de viaje</a> firmado por el otro.</p>

<h2>2. Cuántos días</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Plan</th><th>Días en Orlando</th></tr></thead>
<tbody>
<tr><td>Solo lo principal de Disney</td><td>4 días de parques</td></tr>
<tr><td>Disney + Universal</td><td>5 o 6 días de parques</td></tr>
<tr><td>Parques + playa en Miami</td><td>7 días o más en total</td></tr>
</tbody>
</table></div>
<p>Suma un día de ida y otro de vuelta: desde Lima no hay que cruzar medio mundo, pero el viaje toma casi todo el día.</p>

<h2>3. Cuándo ir</h2>
<ul>
<li><strong>Vacaciones de enero a marzo</strong> en Perú coinciden con el invierno de Florida: clima fresco y agradable.</li>
<li>De <strong>junio a noviembre</strong> es la temporada de huracanes del Atlántico: hace calor, llueve por las tardes y conviene llevar un seguro de viaje que cubra cambios.</li>
<li>Navidad, Año Nuevo y Semana Santa son las fechas más llenas y más caras en los parques.</li>
</ul>

<h2>4. Qué entra en el presupuesto</h2>
<ol>
<li><strong>Vuelos</strong> Lima–Orlando o Lima–Miami, ida y vuelta, con maletas.</li>
<li><strong>Hotel:</strong> dentro de Disney o cerca de los parques, con o sin desayuno.</li>
<li><strong>Entradas</strong> por día y por persona; con más días, el precio por día baja.</li>
<li><strong>Comidas y traslados</strong> entre el hotel y los parques.</li>
<li><strong>Seguro de viaje:</strong> la atención médica en Estados Unidos es muy cara, no viajes sin seguro.</li>
</ol>
<p>Los precios de pasajes, hoteles y entradas cambian según la fecha. Escríbenos con las fechas, cuántos adultos y niños viajan, y te armamos el presupuesto completo por escrito.</p>

<h2>Sigue leyendo</h2>
<ul>
<li><a href="/destinos/miami-orlando">Paquete Miami y Orlando</a></li>
<li><a href="/destinos/orlando-parques-disney-universal">Orlando: Disney y Universal</a></li>
<li><a href="/vuelos/lima-orlando">Pasajes Lima–Orlando</a></li>
<li><a href="/blog/como-tramitar-visa-americana-b1-b2-peru">Cómo tramitar la visa americana</a></li>
<li><a href="/quinceaneras">Viajes de quinceañeras</a></li>
</ul>
<p>Revisado el 25 de octubre de 2026.</p>`,
  },
];


