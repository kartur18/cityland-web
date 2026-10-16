// ── Constantes Comerciales y Datos de Cityland Travel ──
export const EMPRESA_NOMBRE = "Cityland Travel";
export const EMPRESA_RAZON_SOCIAL = "Cityland Travel E.I.R.L.";
export const EMPRESA_RUC = "20614914239";
export const EMPRESA_DIRECCION = "Av. Antúnez de Mayolo N. 814, Los Olivos, Lima";
export const EMPRESA_HORARIO = "Lunes a Sábado: 9:00 am - 7:00 pm";

// Números oficiales
export const TELEFONO = "+51906450098";
export const TELEFONO_FORMATEADO = "+51 906 450 098";
export const TIPO_CAMBIO_REF = 3.75; // Tipo de cambio referencial USD -> PEN
export const CATALOGO_LINK = "#paquetes";

// ── Enrutamiento Inteligente Multi-Asesor de WhatsApp ──
// Distribución por especialidad según directiva comercial:
// 1. Europa (Madrid, Barcelona, Roma, Milán, París, etc.): 983882504
// 2. Caribe & Colombia (Punta Cana, Cancún, Cartagena, Medellín): 942086698 / 906450098
// 3. Cualquier otro destino / Botón flotante / Cotizador general: 944280151 / 938845086 / 906642487 / 944031724
export const WHATSAPP_ROUTING = {
  europa: ["51983882504"],
  caribe: ["51942086698", "51906450098"],
  general: ["51944280151", "51938845086", "51906642487", "51944031724"],
};

/**
 * Retorna un número asignado de forma determinista según el destino o categoría
 * para garantizar consistencia entre SSR y render de cliente (evita desajustes de hidratación).
 */
export function getNumeroWhatsapp(categoria: "europa" | "caribe" | "general" | string, seed: string = ""): string {
  if (categoria === "europa") {
    return WHATSAPP_ROUTING.europa[0];
  }
  if (categoria === "caribe") {
    const list = WHATSAPP_ROUTING.caribe;
    const hash = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return list[hash % list.length];
  }
  const list = WHATSAPP_ROUTING.general;
  const hash = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return list[hash % list.length];
}

/**
 * Genera el enlace de WhatsApp con mensaje precargado y número especializado.
 */
export function buildWaUrl(params: {
  categoria?: "europa" | "caribe" | "general" | string;
  destino?: string;
  tipo?: string;
  precioUSD?: number;
  duracion?: string;
  mensajePersonalizado?: string;
  texto?: string;
}): string {
  const cat = params.categoria || "general";
  const seed = params.destino || "general";
  const num = getNumeroWhatsapp(cat, seed);

  const customText = params.mensajePersonalizado || params.texto;
  if (customText) {
    return `https://wa.me/${num}?text=${encodeURIComponent(customText)}`;
  }

  let texto = `¡Hola Cityland Travel! Vi su página web y deseo cotizar un viaje con un asesor especializado.`;
  if (params.destino && params.precioUSD) {
    texto = `¡Hola Cityland Travel! Vi en su web el paquete ${params.tipo || "Todo Incluido"} a ${params.destino}${params.duracion ? ` (${params.duracion})` : ""} desde $${params.precioUSD} USD. Deseo cotizar con un asesor para viajar separando con el 50% de inicial.`;
  } else if (params.destino) {
    texto = `¡Hola Cityland Travel! Deseo cotizar paquetes y vuelos a ${params.destino} saliendo desde Lima. ¿Tienen cupos disponibles?`;
  }

  return `https://wa.me/${num}?text=${encodeURIComponent(texto)}`;
}

// Compatibilidad retroactiva
export function waLink(mensaje: string, categoria: "europa" | "caribe" | "general" = "general"): string {
  const num = getNumeroWhatsapp(categoria, mensaje);
  return `https://wa.me/${num}?text=${encodeURIComponent(mensaje)}`;
}

export const WA_LINK = buildWaUrl({
  categoria: "general",
  mensajePersonalizado: "¡Hola Cityland Travel! Vi su web oficial y deseo cotizar paquetes y vuelos con un asesor.",
});

export function cotLink(destino: string, tipo: string, precio: number, categoria?: "europa" | "caribe" | "general"): string {
  const cat = categoria || (tipo.toLowerCase().includes("migra") || destino.toLowerCase().match(/madrid|barcelona|roma|milan|paris|europa/) ? "europa" : "caribe");
  return buildWaUrl({
    categoria: cat,
    destino,
    tipo,
    precioUSD: precio,
  });
}

export function cotFormLink(data: { nombre: string; email: string; destino: string; fechaIda: string; fechaRetorno?: string; pasajeros: number }): string {
  const cat = data.destino.toLowerCase().match(/madrid|barcelona|roma|milan|paris|europa/) ? "europa" : data.destino.toLowerCase().match(/punta cana|cancun|cartagena|medellin|caribe/) ? "caribe" : "general";
  const num = getNumeroWhatsapp(cat, data.destino);
  const msg = `¡Hola Cityland Travel! Solicito cotización desde la web:
• Pasajero: ${data.nombre}
• Correo: ${data.email}
• Destino: ${data.destino}
• Fecha ida: ${data.fechaIda}
• Fecha retorno: ${data.fechaRetorno || "Flexible"}
• Pasajeros: ${data.pasajeros}
Deseo conocer opciones separando con el 50% de inicial.`;
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

// ── CATÁLOGO MAESTRO DE PAQUETES TURÍSTICOS (Mercado Peruano) ──
export const PAQUETES_COMPLETOS: PaqueteTuristico[] = [
  {
    id: "punta-cana-all-inclusive",
    slug: "punta-cana",
    ciudad: "Punta Cana",
    pais: "República Dominicana",
    bandera: "🇩🇴",
    categoria: "caribe",
    duracion: "5 Días / 4 Noches",
    precioUSD: 949,
    precioSoles: 3550,
    precioRegularUSD: 1250,
    tag: "TODO INCLUIDO · TOP VENTAS",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "Paquete Punta Cana All Inclusive desde Lima - Resort 5 estrellas frente al mar",
    tituloComercial: "Punta Cana Paradisíaco All Inclusive",
    resaltado: "Resort 5 Estrellas Frente al Mar + Todo Incluido 24h + Isla Saona",
    inclusiones: {
      vuelo: true,
      hotel: "Resort 5 Estrellas frente al mar",
      alimentacion: "All Inclusive 24h: comidas y bebidas ilimitadas",
      traslados: true,
      seguro: "Asistencia médica internacional incluida",
      tour: "Catamarán a Isla Saona con almuerzo en playa",
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
    precioUSD: 899,
    precioSoles: 3370,
    precioRegularUSD: 1190,
    tag: "ALL INCLUSIVE · PLAYA & CULTURA",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80",
    alt: "Paquete Cancún All Inclusive desde Lima - Mar turquesa y ruinas mayas",
    tituloComercial: "Cancún & Riviera Maya Todo Incluido",
    resaltado: "Resort frente al mar + Todo Incluido 24h + Chichén Itzá",
    inclusiones: {
      vuelo: true,
      hotel: "Resort frente al mar en Zona Hotelera",
      alimentacion: "Comidas, snacks y bebidas ilimitadas 24h",
      traslados: true,
      seguro: "Seguro médico internacional incluido",
      tour: "Chichén Itzá, Cenote Sagrado y almuerzo maya",
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
    precioUSD: 569,
    precioSoles: 2130,
    precioRegularUSD: 780,
    tag: "VUELO DIRECTO 3.5H · ESCAPADA",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1536308037887-165852797016?w=800&q=80",
    alt: "Viajes a Cartagena desde Lima - Ciudad amurallada colonial y playas",
    tituloComercial: "Cartagena Colonial & Playas de Barú",
    resaltado: "Vuelo Directo 3.5h + Hotel con desayunos + Islas del Rosario",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel en Bocagrande o Centro Histórico",
      alimentacion: "Desayunos buffet diarios incluidos",
      traslados: true,
      seguro: "Tarjeta de asistencia médica",
      tour: "Islas del Rosario y Playa Blanca Barú",
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
    precioUSD: 549,
    precioSoles: 2050,
    precioRegularUSD: 750,
    tag: "CLIMA PERFECTO · TENDENCIA 2026",
    tagColor: "promo",
    img: "/images/paquetes/panama-medellin/medellin-skyline.png",
    alt: "Paquete a Medellín desde Lima - Piedra del Peñol y Comuna 13",
    tituloComercial: "Medellín: Ciudad de la Eterna Primavera",
    resaltado: "Hotel céntrico en El Poblado + Tour Peñol y Guatapé",
    inclusiones: {
      vuelo: true,
      hotel: "Hotel céntrico en zona rosa El Poblado",
      alimentacion: "Desayunos buffet incluidos",
      traslados: true,
      seguro: "Asistencia médica internacional",
      tour: "Piedra del Peñol y pueblo de Guatapé",
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
    id: "madrid-barcelona-europa",
    slug: "madrid",
    ciudad: "Madrid & Barcelona",
    pais: "España",
    bandera: "🇪🇸",
    categoria: "europa",
    duracion: "8 Días / 7 Noches",
    precioUSD: 1299,
    precioSoles: 4870,
    precioRegularUSD: 1590,
    tag: "ESPECIALIDAD CITYLAND · SEGURO SCHENGEN",
    tagColor: "hot",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    alt: "Vuelos a Madrid y Barcelona desde Lima - Paquetes turísticos y migratorios",
    tituloComercial: "España Imprescindible: Madrid & Barcelona",
    resaltado: "Vuelos I/V + Hoteles céntricos + Seguro Schengen 30.000€",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles céntricos en Madrid y Barcelona",
      alimentacion: "Desayunos buffet diarios incluidos",
      traslados: true,
      seguro: "Seguro Schengen obligatorio (30.000€)",
      tour: "City Tour en Madrid y Barcelona",
    },
    toursDestacados: ["Gran Vía y Museo del Prado", "Sagrada Familia y Park Güell", "Tren de alta velocidad AVE entre Madrid y Barcelona"],
    descripcion: "El producto insignia de Cityland Travel. Diseñado tanto para turismo como para quienes viajan con fines migratorios o familiares. Incluye todos los requisitos exigidos por las autoridades europeas para viajar con total tranquilidad.",
    itinerario: [
      "Día 1: Vuelo internacional Lima ➔ Madrid. Noche a bordo.",
      "Día 2: Llegada al Aeropuerto Adolfo Suárez Madrid-Barajas. Traslado al hotel. Asesoría de bienvenida.",
      "Día 3: Recorrido por Puerta del Sol, Plaza Mayor, Palacio Real y Parque del Retiro.",
      "Día 4: Día libre para compras en Gran Vía o excursión a Toledo.",
      "Día 5: Tren de alta velocidad AVE Madrid ➔ Barcelona. Llegada y check-in en hotel.",
      "Día 6: Visita a la Sagrada Familia de Gaudí, Las Ramblas y Barrio Gótico.",
      "Día 7: Paseo por la playa de la Barceloneta y vistas de Montjuïc.",
      "Día 8: Traslado al aeropuerto y vuelo de retorno a Lima (o inicio de estancia).",
    ],
    tipoViaje: "circuito",
    migratorioUSD: 899,
  },
  {
    id: "europa-magica-circuito",
    slug: "europa-clasica",
    ciudad: "Madrid, París & Roma",
    pais: "España · Francia · Italia",
    bandera: "🇪🇺",
    categoria: "europa",
    duracion: "15 Días / 14 Noches",
    precioUSD: 2790,
    precioSoles: 10460,
    precioRegularUSD: 3350,
    tag: "CIRCUITO COMPLETO · GUÍA EN ESPAÑOL",
    tagColor: "luxury",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    alt: "Circuito por Europa desde Lima - Torre Eiffel, Coliseo Romano y Madrid",
    tituloComercial: "Europa Soñada: España, Francia e Italia",
    resaltado: "Vuelo I/V + 14 Noches de Hotel + Autocar y Guía en Español",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles 3 y 4 Estrellas en cada ciudad",
      alimentacion: "Desayunos buffet diarios en cada hotel",
      traslados: true,
      seguro: "Seguro médico Schengen 30.000€ (15 días)",
      tour: "Tours en Madrid, París, Venecia y Roma",
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
    precioUSD: 1690,
    precioSoles: 6330,
    precioRegularUSD: 2190,
    tag: "¡SIN VISA PARA PERUANOS! · MODA 2026",
    tagColor: "luxury",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    alt: "Viajes a Turquía desde Lima - Vuelo en globo en Capadocia y Mezquita Azul",
    tituloComercial: "Turquía de Ensueño: Estambul & Capadocia",
    resaltado: "Vuelos I/V + Hoteles 4 y 5 Estrellas + Cenas + Globo en Capadocia",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles 4 y 5 Estrellas (noche en cueva)",
      alimentacion: "Media pensión: Desayunos y cenas buffet",
      traslados: true,
      seguro: "Seguro de viaje internacional",
      tour: "Crucero Bósforo, Mezquita Azul y Capadocia",
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
    precioUSD: 1049,
    precioSoles: 3930,
    precioRegularUSD: 1390,
    tag: "FAMILIAR · PARQUES & OUTLETS",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
    alt: "Viajes a Miami y Orlando desde Lima - Playas y compras",
    tituloComercial: "Miami Beach & Magia de Orlando",
    resaltado: "Vuelos I/V + Hotel con piscina + Parques y Outlets de compras",
    inclusiones: {
      vuelo: true,
      hotel: "Hoteles en Orlando y Miami con piscina",
      alimentacion: "Desayunos buffet incluidos",
      traslados: true,
      seguro: "Seguro médico internacional USA",
      tour: "Día de compras en Sawgrass Mills / Dolphin Mall",
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
    precioSoles: 2810,
    precioRegularUSD: 990,
    tag: "PLAYA & SAMBA · ¡SIN VISA!",
    tagColor: "promo",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
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
];

// Compatibilidad con componentes existentes
export const DESTINOS_EUROPA: Destino[] = PAQUETES_COMPLETOS
  .filter((p) => p.categoria === "europa")
  .map((p) => ({
    ciudad: p.ciudad,
    pais: p.pais,
    bandera: p.bandera,
    slug: p.slug,
    img: p.img,
    alt: p.alt,
    tag: p.tag,
    tagColor: p.tagColor as "hot" | "promo" | "new",
    migratorio: p.migratorioUSD || 899,
    turistico: p.precioUSD,
    precioSoles: p.precioSoles,
    migraDesc: "Vuelo solo ida + Seguro Schengen 30.000€ + Hotel + Asesoría de entrada",
    turiDesc: `${p.duracion} + Hoteles + Vuelos + Traslados + Asistencia`,
    regularPrice: p.precioRegularUSD,
    cuotas: 6,
    gallery: [p.img],
    descripcion: p.descripcion,
    itinerario: p.itinerario,
    temporada: "todo-el-ano",
    tipo: "europa",
    duracion: p.duracion,
    inclusionesLista: [
      `🏨 ${p.inclusiones.hotel}`,
      `✈️ Vuelo confirmado con equipaje`,
      `🛡️ ${p.inclusiones.seguro}`,
      `🚐 Traslados aeropuerto - hotel`,
    ],
  }));

export const DESTINOS_CARIBE: Destino[] = PAQUETES_COMPLETOS
  .filter((p) => p.categoria === "caribe" || p.categoria === "sudamerica")
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
    gallery: [p.img],
    descripcion: p.descripcion,
    itinerario: p.itinerario,
    temporada: "todo-el-ano",
    tipo: "caribe",
    duracion: p.duracion,
    inclusionesLista: [
      `🏨 ${p.inclusiones.hotel}`,
      `🍹 ${p.inclusiones.alimentacion}`,
      `✈️ Vuelo ida y vuelta desde Lima`,
      `🚐 Traslados incluidos`,
      `🏝️ ${p.inclusiones.tour}`,
    ],
  }));

export const PRECIO_DESDE_EUROPA = 899;
export const PRECIO_DESDE_CARIBE = 549;

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
    respuesta: "Porque los pasajes aéreos varían según tus fechas y anticipación. Escríbenos por WhatsApp y te damos el precio final exacto en menos de 2 minutos.",
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
    fecha: "15 Oct 2026",
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
    fecha: "10 Oct 2026",
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
    fecha: "5 Oct 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Descubre Turquía sin trámites consulares</h2>
<p>¿Sabías que los ciudadanos peruanos NO necesitan visa para ingresar a Turquía por turismo hasta por 90 días? Es el destino transcontinental más fascinante del mundo.</p>
<h3>Lo que no te puedes perder:</h3>
<p>El vuelo en globo aerostático al amanecer sobre los valles de Capadocia, el crucero privado por el Estrecho del Bósforo entre Europa y Asia, y las compras de especias y joyas en el Gran Bazar de Estambul.</p>`,
  },
];
