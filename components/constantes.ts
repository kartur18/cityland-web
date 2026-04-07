export const TELEFONO = "+51941551530";
export const WA_LINK =
  "https://wa.me/51941551530?text=Hola%20Cityland%20Travel%2C%20quiero%20cotizar%20un%20viaje";

export function waLink(mensaje: string) {
  return `https://wa.me/51941551530?text=${encodeURIComponent(mensaje)}`;
}

export function cotLink(destino: string, tipo: string, precio: number) {
  return waLink(
    `Hola Cityland Travel, quiero cotizar un paquete ${tipo} a ${destino}. Vi el precio desde $${precio} en su página.`
  );
}

export function cotFormLink(data: { nombre: string; email: string; destino: string; fechaIda: string; fechaRetorno?: string; pasajeros: number }) {
  const msg = `Hola Cityland Travel, quiero cotizar:
• Nombre: ${data.nombre}
• Email: ${data.email}
• Destino: ${data.destino}
• Fecha ida: ${data.fechaIda}
• Fecha retorno: ${data.fechaRetorno || "Flexible"}
• Pasajeros: ${data.pasajeros}`;
  return waLink(msg);
}

export const WA_SVG = (size = 18) =>
  `<svg viewBox="0 0 24 24" style="width:${size}px;height:${size}px;fill:currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.528 5.856L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.973.996-3.636-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>`;

// ── Types ──
export interface Destino {
  ciudad: string;
  pais: string;
  bandera: string;
  slug: string;
  img: string;
  alt: string;
  tag?: string;
  tagColor?: "hot" | "promo" | "new";
  migratorio?: number;
  turistico: number;
  migraDesc?: string;
  turiDesc: string;
  turiLabel?: string;
  regularPrice?: number;
  cuotas: number;
  gallery: string[];
  descripcion: string;
  itinerario: string[];
  temporada: "verano" | "invierno" | "todo-el-ano";
  tipo: "europa" | "caribe";
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

// ── Destinos Europa ──
export const DESTINOS_EUROPA: Destino[] = [
  {
    ciudad: "Madrid", pais: "España", bandera: "🇪🇸", slug: "madrid",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
    alt: "Vuelos baratos a Madrid desde Lima - Gran Vía Madrid de noche",
    tag: "MÁS VENDIDO", tagColor: "hot",
    migratorio: 799, turistico: 1099, regularPrice: 1299, cuotas: 6,
    migraDesc: "Solo ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
    gallery: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    ],
    descripcion: "La capital de España te espera con su rica historia, gastronomía inigualable y vida nocturna vibrante. Desde la Gran Vía hasta el Parque del Retiro, Madrid ofrece experiencias para todos.",
    itinerario: ["Llegada a Madrid – Traslado al hotel", "City tour: Gran Vía, Puerta del Sol, Plaza Mayor", "Visita al Museo del Prado y Retiro", "Día libre para explorar barrios", "Excursión a Toledo (opcional)", "Regreso o continuación del viaje"],
    temporada: "todo-el-ano", tipo: "europa",
  },
  {
    ciudad: "Barcelona", pais: "España", bandera: "🇪🇸", slug: "barcelona",
    img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80",
    alt: "Vuelos a Barcelona desde Lima - Sagrada Familia Barcelona",
    tag: "PROMO", tagColor: "promo",
    migratorio: 849, turistico: 1149, regularPrice: 1399, cuotas: 6,
    migraDesc: "Solo ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
    gallery: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=800&q=80",
    ],
    descripcion: "Barcelona combina playas mediterráneas con la arquitectura única de Gaudí. La Sagrada Familia, Las Ramblas y el Barrio Gótico te dejarán sin aliento.",
    itinerario: ["Llegada a Barcelona – Traslado al hotel", "Sagrada Familia y Park Güell", "Las Ramblas, Barrio Gótico, La Boquería", "Día de playa en la Barceloneta", "Montjuïc y Camp Nou (opcional)", "Regreso o continuación del viaje"],
    temporada: "todo-el-ano", tipo: "europa",
  },
  {
    ciudad: "Roma", pais: "Italia", bandera: "🇮🇹", slug: "roma",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
    alt: "Vuelos a Roma desde Lima - Paquetes turísticos a Italia",
    tag: "NUEVO", tagColor: "new",
    migratorio: 899, turistico: 1199, regularPrice: 1499, cuotas: 6,
    migraDesc: "Solo ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    ],
    descripcion: "La Ciudad Eterna combina ruinas milenarias con la dolce vita moderna. El Coliseo, el Vaticano y la Fontana di Trevi son solo el comienzo.",
    itinerario: ["Llegada a Roma – Traslado al hotel", "Coliseo, Foro Romano y Palatino", "Vaticano: Basílica de San Pedro y Capilla Sixtina", "Fontana di Trevi, Piazza Navona, Panteón", "Excursión a Florencia (opcional)", "Regreso o continuación del viaje"],
    temporada: "todo-el-ano", tipo: "europa",
  },
  {
    ciudad: "Milán", pais: "Italia", bandera: "🇮🇹", slug: "milan",
    img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=600&q=80",
    alt: "Vuelos a Milán desde Lima - Duomo di Milano Italia",
    migratorio: 899, turistico: 1249, regularPrice: 1499, cuotas: 6,
    migraDesc: "Solo ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
    gallery: [
      "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80",
      "https://images.unsplash.com/photo-1520440229-28a5068615e4?w=800&q=80",
      "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=800&q=80",
    ],
    descripcion: "Capital de la moda y el diseño, Milán te sorprende con el majestuoso Duomo, La Última Cena de Da Vinci y una escena gastronómica de primer nivel.",
    itinerario: ["Llegada a Milán – Traslado al hotel", "Duomo de Milán y Galleria Vittorio Emanuele", "La Última Cena y Castello Sforzesco", "Día de shopping en el Quadrilatero della Moda", "Excursión al Lago di Como (opcional)", "Regreso o continuación del viaje"],
    temporada: "todo-el-ano", tipo: "europa",
  },
];

// ── Destinos Caribe ──
export const DESTINOS_CARIBE: Destino[] = [
  {
    ciudad: "Punta Cana", pais: "República Dominicana", bandera: "🇩🇴", slug: "punta-cana",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
    alt: "Paquete todo incluido Punta Cana desde Lima - resort playa",
    tag: "TOP VENTAS", tagColor: "hot",
    turistico: 799, regularPrice: 1099, cuotas: 6,
    turiDesc: "Vuelo + resort + tours + seguro", turiLabel: "Todo incluido",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1570737209810-8e7d79cee4de?w=800&q=80",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
    ],
    descripcion: "Playas de arena blanca, resorts todo incluido y aguas cristalinas del Caribe. Punta Cana es el destino perfecto para unas vacaciones inolvidables.",
    itinerario: ["Llegada a Punta Cana – Traslado al resort", "Día de playa y actividades del resort", "Excursión a Isla Saona", "Snorkel y deportes acuáticos", "Día libre en el resort", "Regreso a Lima"],
    temporada: "todo-el-ano", tipo: "caribe",
  },
  {
    ciudad: "Cancún", pais: "México", bandera: "🇲🇽", slug: "cancun",
    img: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=600&q=80",
    alt: "Paquete turístico Cancún desde Lima - playa caribe",
    tag: "PROMO", tagColor: "promo",
    turistico: 749, regularPrice: 999, cuotas: 6,
    turiDesc: "Vuelo + hotel + tours + seguro",
    gallery: [
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80",
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80",
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80",
    ],
    descripcion: "Cancún ofrece playas paradisíacas, ruinas mayas como Chichén Itzá y una vida nocturna inigualable. El Caribe mexicano en todo su esplendor.",
    itinerario: ["Llegada a Cancún – Traslado al hotel", "Zona hotelera y playas", "Excursión a Chichén Itzá", "Isla Mujeres en ferry", "Cenotes y Parque Xcaret", "Regreso a Lima"],
    temporada: "todo-el-ano", tipo: "caribe",
  },
  {
    ciudad: "Cartagena", pais: "Colombia", bandera: "🇨🇴", slug: "cartagena",
    img: "https://images.unsplash.com/photo-1536308037887-165852797016?w=600&q=80",
    alt: "Viajes a Cartagena de Indias desde Lima - ciudad amurallada colonial",
    turistico: 549, regularPrice: 749, cuotas: 3,
    turiDesc: "Vuelo + hotel + city tour",
    gallery: [
      "https://images.unsplash.com/photo-1536308037887-165852797016?w=800&q=80",
      "https://images.unsplash.com/photo-1534035265253-afe22046ba98?w=800&q=80",
      "https://images.unsplash.com/photo-1689159132383-89487760533c?w=800&q=80",
    ],
    descripcion: "La joya del Caribe colombiano. Calles coloniales coloridas, murallas históricas y playas cercanas hacen de Cartagena un destino único.",
    itinerario: ["Llegada a Cartagena – Traslado al hotel", "City tour: Ciudad Amurallada y Getsemaní", "Islas del Rosario en lancha", "Castillo de San Felipe y cerro La Popa", "Regreso a Lima"],
    temporada: "todo-el-ano", tipo: "caribe",
  },
  {
    ciudad: "Río de Janeiro", pais: "Brasil", bandera: "🇧🇷", slug: "rio-de-janeiro",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80",
    alt: "Vuelos a Río de Janeiro desde Lima - Cristo Redentor",
    tag: "NUEVO", tagColor: "new",
    turistico: 699, regularPrice: 949, cuotas: 6,
    turiDesc: "Vuelo + hotel + tours",
    gallery: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&q=80",
      "https://images.unsplash.com/photo-1544989164-31dc3291c7c1?w=800&q=80",
    ],
    descripcion: "Río de Janeiro enamora con el Cristo Redentor, Copacabana, Ipanema y el Pan de Azúcar. Samba, naturaleza y la alegría carioca te esperan.",
    itinerario: ["Llegada a Río – Traslado al hotel", "Cristo Redentor y Corcovado", "Pan de Azúcar y Urca", "Copacabana e Ipanema", "Excursión a Petrópolis (opcional)", "Regreso a Lima"],
    temporada: "verano", tipo: "caribe",
  },
];

// ── Testimonios ──
export const TESTIMONIOS = [
  { nombre: "Ana R.", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", iniciales: "AR", color: "#1a4a8a", ruta: "Lima → Madrid · Migratorio", texto: "Paquete migratorio a Madrid perfecto. Boleto, seguro, todo ok en migraciones. El precio fue el mejor que encontré. Súper recomendados." },
  { nombre: "Fernando C.", foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80", iniciales: "FC", color: "#d30000", ruta: "Lima → Punta Cana · Turístico", texto: "Punta Cana todo incluido. Resort frente al mar. Cityland se encargó de absolutamente todo. Valió cada centavo." },
  { nombre: "Pedro H.", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", iniciales: "PH", color: "#059669", ruta: "Lima → Barcelona · Migratorio", texto: "Respondieron en 1 hora. El precio fue mucho menor al de las agencias del mall. Y pagué con Yape en cuotas. Increíble servicio." },
  { nombre: "María L.", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", iniciales: "ML", color: "#6366F1", ruta: "Lima → Cancún · Familiar", texto: "Viajamos a Cancún en familia, 4 personas. Nos armaron el paquete en un día. Precio imbatible y cero problemas." },
  { nombre: "Juan C.", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", iniciales: "JC", color: "#B45309", ruta: "Lima → Roma · Migratorio", texto: "Emigré a Roma hace 6 meses con su paquete migratorio. Todo salió perfecto. Los asesores me guiaron paso a paso." },
  { nombre: "Diana V.", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80", iniciales: "DV", color: "#7C3AED", ruta: "Lima → Cartagena · Turístico", texto: "Coticé con 3 agencias más y Cityland fue la más barata Y la más rápida. Ya hice 2 viajes con ellos y volvería siempre." },
];

// ── FAQs ──
export const FAQS = [
  { pregunta: "¿Necesito visa para viajar a Europa desde Perú?", respuesta: "No. Los ciudadanos peruanos no necesitan visa para ingresar al espacio Schengen por hasta 90 días. Nuestro paquete migratorio incluye toda la documentación necesaria para pasar sin problemas." },
  { pregunta: "¿Cuál es la diferencia entre paquete migratorio y turístico?", respuesta: "Migratorio: Solo ida, con documentación transitoria (hotel + seguro + retorno) para emigrar. Turístico: Ida y vuelta con hotel para disfrutar el destino como vacaciones." },
  { pregunta: "¿Qué formas de pago acepta Cityland Travel?", respuesta: "Transferencia bancaria, Yape, Plin, efectivo, crédito mayorista y tarjeta de crédito/débito. También ofrecemos pago en cuotas sin interés." },
  { pregunta: "¿Cuánto demoran en enviar la cotización?", respuesta: "Menos de 2 horas por WhatsApp en horario de lunes a sábado de 9am a 7pm. Fuera de horario te respondemos al primer horario disponible." },
  { pregunta: "¿Los precios incluyen impuestos y tasas?", respuesta: "Los precios son referenciales. Al cotizar te damos el precio final exacto con todos los impuestos incluidos, según fecha y disponibilidad." },
  { pregunta: "¿Tienen seguro de viaje incluido?", respuesta: "Sí. Todos nuestros paquetes incluyen seguro de viaje. Para Europa el seguro tiene cobertura Schengen, que es requisito para ingresar. Trabajamos con Assist Card y Travel Ace." },
  { pregunta: "¿Dónde queda la oficina de Cityland Travel?", respuesta: "Nuestra oficina está en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima. Atendemos de lunes a sábado de 9am a 7pm. También puedes contactarnos 24/7 por WhatsApp al +51 941 551 530." },
];

// ── Blog Posts ──
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "guia-emigrar-espana",
    titulo: "Guía completa para emigrar a España desde Perú",
    desc: "Todo lo que necesitas saber: documentos, costos, requisitos y consejos prácticos.",
    categoria: "Migración",
    catColor: "bg-red-500",
    fecha: "15 Mar 2026",
    lectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
    autor: "Cityland Travel",
    contenido: `<h2>¿Qué necesitas para emigrar a España?</h2>
<p>España es uno de los destinos más populares para los peruanos que buscan nuevas oportunidades en Europa. Gracias al acuerdo Schengen, los ciudadanos peruanos pueden ingresar sin visa por hasta 90 días.</p>
<h3>Documentos necesarios</h3>
<p>Para viajar a España necesitas: pasaporte vigente con al menos 6 meses de validez, boleto de avión (ida o ida y vuelta), reserva de hotel o carta de invitación, seguro médico con cobertura Schengen mínima de 30,000 euros, y sustento económico.</p>
<h3>¿Cuánto cuesta emigrar?</h3>
<p>Con Cityland Travel, el paquete migratorio a Madrid parte desde $799 e incluye boleto aéreo, hotel de tránsito, seguro Schengen y opción de retorno flexible. Es la opción más económica y segura del mercado peruano.</p>
<h3>Consejos de expertos</h3>
<p>Recomendamos planificar tu viaje con al menos 2 meses de anticipación, reunir todos los documentos necesarios y cotizar con una agencia de confianza que te guíe en todo el proceso. En Cityland Travel hemos ayudado a más de 3,000 peruanos a emigrar exitosamente.</p>`,
  },
  {
    slug: "top-resorts-punta-cana",
    titulo: "Top 5 resorts todo incluido en Punta Cana 2026",
    desc: "Los mejores hoteles all-inclusive con playa privada y actividades familiares.",
    categoria: "Destinos",
    catColor: "bg-amber-500",
    fecha: "8 Mar 2026",
    lectura: "4 min",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
    autor: "Cityland Travel",
    contenido: `<h2>Los mejores resorts de Punta Cana</h2>
<p>Punta Cana es sinónimo de lujo tropical y relax absoluto. Hemos seleccionado los 5 mejores resorts todo incluido para que tu viaje sea inolvidable.</p>
<h3>1. Hard Rock Hotel Punta Cana</h3>
<p>El resort más completo de Punta Cana con playas privadas, spa de clase mundial, casino y más de 10 restaurantes. Ideal para parejas y familias.</p>
<h3>2. Barceló Bávaro Palace</h3>
<p>Frente a la famosa Playa Bávaro, este resort ofrece suites de lujo, parque acuático y un campo de golf de 18 hoyos.</p>
<h3>3. Secrets Royal Beach</h3>
<p>Para adultos, este resort boutique ofrece una experiencia exclusiva con servicio personalizado, piscinas infinity y gastronomía gourmet.</p>
<h3>¿Cómo reservar?</h3>
<p>Cotiza tu paquete todo incluido con Cityland Travel desde $799. Incluye vuelo, resort, tours y seguro de viaje.</p>`,
  },
  {
    slug: "migratorio-vs-turistico",
    titulo: "Migratorio vs turístico: ¿cuál necesitas?",
    desc: "Diferencias clave entre ambos paquetes para que elijas el correcto.",
    categoria: "Guía",
    catColor: "bg-[#0a1628]",
    fecha: "1 Mar 2026",
    lectura: "3 min",
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
    autor: "Cityland Travel",
    contenido: `<h2>¿Paquete migratorio o turístico?</h2>
<p>Una de las preguntas más frecuentes que recibimos es: ¿cuál es la diferencia entre un paquete migratorio y uno turístico? Aquí te lo explicamos de forma clara.</p>
<h3>Paquete Migratorio</h3>
<p>Diseñado para quienes desean emigrar a Europa. Incluye boleto de solo ida, hotel de tránsito en escalas, seguro Schengen y opción de retorno flexible. No incluye vuelo de regreso programado. Precio desde $799.</p>
<h3>Paquete Turístico</h3>
<p>Para quienes viajan por placer o vacaciones. Incluye vuelo de ida y vuelta, hotel por la duración de la estadía, tours opcionales y seguro de viaje. Ideal para familias y parejas.</p>
<h3>¿Cuál elegir?</h3>
<p>Si tu objetivo es vivir en Europa, elige el migratorio. Si quieres disfrutar unas vacaciones y regresar, elige el turístico. En ambos casos, cotiza gratis con Cityland Travel y recibe asesoría personalizada.</p>`,
  },
];
