// ── Constantes Comerciales y Datos de Cityland Travel ──
import { formatoUSD } from "@/lib/formato-precio";
import { inicialSeparacion, tarifasMigratorio } from "@/lib/precios-migratorio";

const TARIFAS_ITALIA = tarifasMigratorio("Italia");
const TARIFAS_FRANCIA = tarifasMigratorio("Francia");

export const EMPRESA_NOMBRE = "Cityland Travel";
export const EMPRESA_RAZON_SOCIAL = "Cityland Travel E.I.R.L.";
export const EMPRESA_RUC = "20614914239";
export const EMPRESA_DIRECCION = "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima";
export const EMPRESA_HORARIO = "Lunes a Sábado: 9:00 am - 7:00 pm";

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
    resaltado: "Pasaje de Ida + Boleto de Regreso Reservado + Hotel + Seguro 30.000€ + Check-in",
    inclusiones: {
      vuelo: true,
      hotel: "Reserva de hotel confirmada en España",
      alimentacion: "Según plan elegido ($699 a $999)",
      traslados: true,
      seguro: "Seguro médico Schengen 30.000€",
      tour: "Carpeta Migratoria Completa + Asesoría 1 a 1",
    },
    toursDestacados: [
      "Pasaje de avión emitido + Boleto de regreso reservado 24h antes",
      "Reserva de hotel confirmada o ajuste con tu Carta de Invitación",
      "Seguro médico de 30.000€ + Check-in hecho y preparación migratoria",
    ],
    descripcion:
      "El paquete estrella de Cityland Travel para peruanos que viajan a Madrid, Barcelona, Valencia, Sevilla o cualquier ciudad de España. Incluye todos los documentos obligatorios para pasar el control en Lima y en el Aeropuerto de Madrid-Barajas sin pagar un pasaje de vuelta que no vas a usar.",
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
      "Boleto de regreso reservado en sistema + Reserva de hotel confirmada",
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
      "Boleto de regreso reservado + Reserva de hotel verificable sin Attestation",
      "Seguro Schengen de 30.000€ y preparación de entrevista migratoria",
    ],
    descripcion:
      "Viaja seguro a París, Lyon, Marsella o cualquier ciudad de Francia y Europa con tu carpeta migratoria completa: pasaje emitido, retorno reservado para Migraciones, hotel confirmado y seguro médico obligatorio.",
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
    precioUSD: 1049,
    precioSoles: 3935,
    precioRegularUSD: 1290,
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
    precioUSD: 999,
    precioSoles: 3745,
    precioRegularUSD: 1250,
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
    precioUSD: 599,
    precioSoles: 2245,
    precioRegularUSD: 780,
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
    precioUSD: 2390,
    precioSoles: 8960,
    precioRegularUSD: 2790,
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
    precioUSD: 1090,
    precioSoles: 4085,
    precioRegularUSD: 1350,
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
    precioUSD: 749,
    precioSoles: 2808,
    precioRegularUSD: 940,
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
    precioUSD: 749,
    precioSoles: 2808,
    precioRegularUSD: 940,
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
    precioUSD: 699,
    precioSoles: 2620,
    precioRegularUSD: 890,
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

// ── Testimonios Reales de Viajeros Peruanos ──
export const TESTIMONIOS = [
  {
    nombre: "Ana R. & Familia",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    iniciales: "AR",
    color: "#1a4a8a",
    ruta: "Lima ➔ Punta Cana · All Inclusive",
    texto: "Viajamos 4 personas con todo resuelto: comidas, barra libre y catamarán a Saona. Separamos con 50% en su oficina de Los Olivos. 100% recomendados.",
  },
  {
    nombre: "Carlos & Mariana",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    iniciales: "CM",
    color: "#059669",
    ruta: "Lima ➔ Madrid · Especial Europa",
    texto: "Nos armaron la carpeta con seguro Schengen 30.000€ y voucher de hotel. Pasamos el filtro migratorio en Barajas en 5 minutos sin ningún problema.",
  },
  {
    nombre: "Fernando C.",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    iniciales: "FC",
    color: "#d97706",
    ruta: "Lima ➔ Cancún · Todo Incluido",
    texto: "El mejor precio de Lima con tour a Chichén Itzá incluido. Congelamos con el 50% de inicial y cancelamos el saldo un mes antes de volar.",
  },
  {
    nombre: "Diana & Jorge",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    iniciales: "DJ",
    color: "#7c3aed",
    ruta: "Lima ➔ Cartagena · 4D/3N",
    texto: "Hotel frente al mar impecable y tour a Islas del Rosario incluido. Nos atendieron rápido por WhatsApp y pagamos con transferencia BCP.",
  },
];

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
    slug: "requisitos-viajar-espana-desde-peru-2026",
    titulo: "Requisitos para viajar a España desde Perú en 2026 (Carpeta Migratoria Completa)",
    desc: "Lista actualizada de documentos exigidos en el Aeropuerto de Madrid-Barajas y Barcelona-El Prat para turistas peruanos sin visa.",
    categoria: "Migratorio",
    catColor: "bg-red-600",
    fecha: "Actualizado 2026",
    lectura: "6 min",
    imagen: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Documentos obligatorios para ingresar a España como turista peruano</h2>
<p>Los ciudadanos peruanos no requieren visa consular para viajes turísticos o de visita familiar de hasta 90 días dentro del Espacio Schengen. Sin embargo, al llegar al control fronterizo de Madrid-Barajas o Barcelona-El Prat, la Policía Nacional puede solicitar la acreditación de tu viaje.</p>
<h3>1. Pasaporte peruano vigente</h3>
<p>Tu pasaporte biométrico o mecanizado debe tener una vigencia mínima de 3 meses posteriores a la fecha prevista de salida de Europa (se recomienda mínimo 6 meses).</p>
<h3>2. Boleto aéreo de ida y vuelta confirmada</h3>
<p>Debes contar con reserva aérea de retorno (PNR verificable en aerolínea) dentro del plazo máximo de 90 días.</p>
<h3>3. Seguro médico internacional Schengen (Mínimo 30.000€)</h3>
<p>El seguro debe cubrir gastos médicos de urgencia, hospitalización y repatriación por un mínimo de 30.000 euros sin deducible durante todos los días de tu estancia.</p>
<h3>4. Justificación de alojamiento</h3>
<p>Si vas por turismo, debes presentar tu reserva de hotel confirmada por toda la estadía. Si te alojas con un familiar o amigo residente en España, necesitas la <strong>Carta de Invitación original</strong> tramitada ante una Comisaría de Policía en España.</p>
<h3>5. Acreditación de medios económicos</h3>
<p>Se exige demostrar solvencia económica (efectivo en euros y/o tarjetas bancarias internacionales habilitadas para compras en el exterior).</p>`,
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
    titulo: "Carta de Invitación para España desde Perú: Requisitos, precio y cómo usarla en 2026",
    desc: "Todo lo que tu familiar o amigo en España debe tramitar ante la Policía Nacional para acreditar tu alojamiento al viajar desde Lima.",
    categoria: "Migratorio",
    catColor: "bg-red-600",
    fecha: "Actualizado 2026",
    lectura: "5 min",
    imagen: "/images/espana/plaza-mayor.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>¿Para qué sirve la Carta de Invitación para viajar a España?</h2>
<p>La Carta de Invitación es el documento oficial que reemplaza a la reserva de hotel cuando un ciudadano peruano viaja a España para alojarse en la vivienda de un familiar o amigo (ciudadano español o residente legal en España).</p>
<h3>1. ¿Dónde se tramita?</h3>
<p>La solicita tu anfitrión en España ante la <strong>Comisaría de Policía Nacional</strong> de su lugar de residencia, presentando su DNI o TIE, escritura o contrato de alquiler de la vivienda y el volante de empadronamiento colectivo.</p>
<h3>2. ¿Es suficiente solo con la Carta de Invitación?</h3>
<p>No. La Carta de Invitación únicamente acredita el alojamiento. Al pasar el control migratorio en Madrid-Barajas o Barcelona-El Prat también debes presentar: <strong>boleto aéreo de ida y vuelta confirmado</strong>, <strong>Seguro Schengen con cobertura mínima de 30.000 euros</strong> y tu <strong>sustento económico (bolsa de viaje)</strong>.</p>
<h3>3. ¿Debes llevar el documento original?</h3>
<p>Sí, tu familiar debe enviarte la Carta de Invitación física original por courier a Lima antes de tu vuelo para presentarla en el mostrador de la aerolínea y en el control fronterizo.</p>`,
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
<h3>2. Pago de derecho consular y adelanto de cita</h3>
<p>Una vez generado el código DS-160, se abona la tasa consular oficial y monitoreamos el calendario del sistema para conseguir o adelantar tu fecha de entrevista en la Embajada de EE.UU. en Lima.</p>
<h3>3. Simulación de entrevista consular</h3>
<p>Te preparamos con las preguntas reales que realiza el cónsul según tu ocupación (dependiente, independiente, empresario, estudiante o jubilado) para que asistas con total seguridad.</p>`,
  },
  {
    slug: "cuanto-dinero-llevar-espana-bolsa-de-viaje",
    titulo: "Cuánto dinero exigen llevar a España como bolsa de viaje para peruanos en 2026",
    desc: "Cálculo oficial del monto diario exigido en el Aeropuerto de Madrid-Barajas y cómo acreditarlo en efectivo o tarjetas.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "Actualizado 2026",
    lectura: "4 min",
    imagen: "/images/espana/palacio-real.jpg",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>¿Cuál es el monto de la bolsa de viaje para entrar a España?</h2>
<p>Al ingresar como turista al Espacio Schengen por España, las autoridades fronterizas pueden solicitar que demuestres solvencia económica suficiente para cubrir los días que permanecerás en el país.</p>
<h3>1. Monto oficial BOE 2026 por día y mínimo total</h3>
<p>De acuerdo con la Orden PRE/1282/2007 del Boletín Oficial del Estado (BOE) y el SMI vigente en España, la cuantía exigida en 2026 es de <strong>122,10 euros por persona por cada día de estancia</strong>, con un mínimo obligatorio de <strong>1.098,90 euros por persona</strong> aunque tu viaje dure menos de 9 días.</p>
<h3>2. ¿Cómo se puede demostrar el dinero?</h3>
<p>Puedes acreditarlo combinando <strong>dinero en efectivo (euros)</strong>, tarjetas de crédito o débito internacionales a tu nombre acompañadas de un extracto bancario reciente o certificación de saldo disponible. En Cityland Travel te orientamos sobre cómo organizar tu viaje y los días de tu itinerario para cumplir este requisito sin inconvenientes.</p>`,
  },
  {
    slug: "seguro-schengen-30000-euros-peru-precio",
    titulo: "Seguro de Viaje Schengen de 30.000€ desde Perú: Requisitos oficiales y cuánto cuesta",
    desc: "Por qué es obligatorio el seguro médico internacional sin deducible para entrar a España, Italia o Francia, y cómo adquirirlo en Lima.",
    categoria: "Europa",
    catColor: "bg-red-600",
    fecha: "Actualizado 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>¿Qué exige la Unión Europea sobre el Seguro Schengen?</h2>
<p>Para ingresar sin visa a cualquiera de los 29 países del Espacio Schengen (incluyendo España, Italia, Francia, Alemania y Países Bajos), todo viajero peruano debe portar una póliza de asistencia médica internacional vigente durante todos los días de su viaje.</p>
<h3>Requisitos obligatorios de tu póliza:</h3>
<p>1. <strong>Cobertura médica mínima de 30.000 euros</strong> (o su equivalente superior en dólares) por accidente o enfermedad repentina.<br>
2. <strong>Cero deducible (Sin franquicia):</strong> el viajero no debe pagar copagos para recibir atención de urgencia.<br>
3. <strong>Cobertura de repatriación sanitaria y funeraria</strong> incluida.<br>
4. Vigencia exacta desde el día de aterrizaje en Europa hasta la fecha de tu vuelo de retorno.</p>
<p>En Cityland Travel emitimos tu póliza oficial Schengen al instante o la incluimos directamente dentro de tu paquete migratorio o turístico.</p>`,
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
<p>Contrata únicamente con agencias constituidas con oficina física real en Lima (como Cityland Travel E.I.R.L., RUC 20614914239) que entreguen contrato formal, boletas/facturas electrónicas y códigos de reserva aérea verificables para cada alumno.</p>
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
];


