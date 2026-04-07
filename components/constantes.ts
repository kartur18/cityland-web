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

export const WA_SVG = (size = 18) =>
  `<svg viewBox="0 0 24 24" style="width:${size}px;height:${size}px;fill:currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.528 5.856L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.973.996-3.636-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>`;

export const DESTINOS_EUROPA = [
  {
    ciudad: "Madrid", pais: "España", bandera: "🇪🇸",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
    alt: "Vuelos baratos a Madrid desde Lima - Paquete migratorio desde $799",
    tag: "MÁS VENDIDO", tagColor: "hot" as const,
    migratorio: 799, turistico: 1099,
    migraDesc: "Ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
  },
  {
    ciudad: "Barcelona", pais: "España", bandera: "🇪🇸",
    img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80",
    alt: "Vuelos a Barcelona desde Lima",
    tag: "PROMO", tagColor: "promo" as const,
    migratorio: 849, turistico: 1149,
    migraDesc: "Ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
  },
  {
    ciudad: "Roma", pais: "Italia", bandera: "🇮🇹",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
    alt: "Vuelos a Roma desde Lima - Paquetes turísticos a Italia",
    tag: "NUEVO", tagColor: "new" as const,
    migratorio: 899, turistico: 1199,
    migraDesc: "Ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
  },
  {
    ciudad: "Milán", pais: "Italia", bandera: "🇮🇹",
    img: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=600&q=80",
    alt: "Vuelos a Milán desde Lima",
    migratorio: 899, turistico: 1249,
    migraDesc: "Ida + seguro + hotel + retorno", turiDesc: "Ida y vuelta + hotel 5 noches",
  },
];

export const DESTINOS_CARIBE = [
  {
    ciudad: "Punta Cana", pais: "República Dominicana", bandera: "🇩🇴",
    img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
    alt: "Paquete todo incluido Punta Cana desde Lima",
    tag: "TOP VENTAS", tagColor: "hot" as const,
    turistico: 799, turiDesc: "Vuelo + resort + tours + seguro", turiLabel: "Todo incluido",
  },
  {
    ciudad: "Cancún", pais: "México", bandera: "🇲🇽",
    img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80",
    alt: "Paquete turístico Cancún desde Lima",
    tag: "PROMO", tagColor: "promo" as const,
    turistico: 749, turiDesc: "Vuelo + hotel + tours + seguro",
  },
  {
    ciudad: "Cartagena", pais: "Colombia", bandera: "🇨🇴",
    img: "https://images.unsplash.com/photo-1583997052301-0042b33fc598?w=600&q=80",
    alt: "Viajes a Cartagena desde Lima",
    turistico: 549, turiDesc: "Vuelo + hotel + city tour",
  },
  {
    ciudad: "Río de Janeiro", pais: "Brasil", bandera: "🇧🇷",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80",
    alt: "Vuelos a Río de Janeiro desde Lima",
    tag: "NUEVO", tagColor: "new" as const,
    turistico: 699, turiDesc: "Vuelo + hotel + tours",
  },
];

export const TESTIMONIOS = [
  { nombre: "Ana R.", iniciales: "AR", color: "bg-[#1A3560]", ruta: "Lima → Madrid · Migratorio", texto: "Paquete migratorio a Madrid perfecto. Boleto, seguro, todo ok en migraciones. El precio fue el mejor que encontré. Súper recomendados." },
  { nombre: "Fernando C.", iniciales: "FC", color: "bg-[#FF4D2E]", ruta: "Lima → Punta Cana · Turístico", texto: "Punta Cana todo incluido. Resort frente al mar. Cityland se encargó de absolutamente todo. Valió cada centavo." },
  { nombre: "Pedro H.", iniciales: "PH", color: "bg-[#059669]", ruta: "Lima → Barcelona · Migratorio", texto: "Respondieron en 1 hora. El precio fue mucho menor al de las agencias del mall. Y pagué con Yape en cuotas. Increíble servicio." },
  { nombre: "María L.", iniciales: "ML", color: "bg-[#6366F1]", ruta: "Lima → Cancún · Familiar", texto: "Viajamos a Cancún en familia, 4 personas. Nos armaron el paquete en un día. Precio imbatible y cero problemas." },
  { nombre: "Juan C.", iniciales: "JC", color: "bg-[#F59E0B]", ruta: "Lima → Roma · Migratorio", texto: "Emigré a Roma hace 6 meses con su paquete migratorio. Todo salió perfecto. Los asesores me guiaron paso a paso." },
  { nombre: "Diana V.", iniciales: "DV", color: "bg-[#A855F7]", ruta: "Lima → Cartagena · Turístico", texto: "Coticé con 3 agencias más y Cityland fue la más barata Y la más rápida. Ya hice 2 viajes con ellos y volvería siempre." },
];

export const FAQS = [
  { pregunta: "¿Necesito visa para viajar a Europa desde Perú?", respuesta: "No. Los ciudadanos peruanos no necesitan visa para ingresar al espacio Schengen por hasta 90 días. Nuestro paquete migratorio incluye toda la documentación necesaria para pasar sin problemas." },
  { pregunta: "¿Cuál es la diferencia entre paquete migratorio y turístico?", respuesta: "Migratorio: Solo ida, con documentación transitoria (hotel + seguro + retorno) para emigrar. Turístico: Ida y vuelta con hotel para disfrutar el destino como vacaciones." },
  { pregunta: "¿Qué formas de pago acepta Cityland Travel?", respuesta: "Transferencia bancaria, Yape, Plin, efectivo, crédito mayorista y tarjeta de crédito/débito. También ofrecemos pago en cuotas sin interés." },
  { pregunta: "¿Cuánto demoran en enviar la cotización?", respuesta: "Menos de 2 horas por WhatsApp en horario de lunes a sábado de 9am a 7pm. Fuera de horario te respondemos al primer horario disponible." },
  { pregunta: "¿Los precios incluyen impuestos y tasas?", respuesta: "Los precios son referenciales. Al cotizar te damos el precio final exacto con todos los impuestos incluidos, según fecha y disponibilidad." },
  { pregunta: "¿Tienen seguro de viaje incluido?", respuesta: "Sí. Todos nuestros paquetes incluyen seguro de viaje. Para Europa el seguro tiene cobertura Schengen, que es requisito para ingresar. Trabajamos con Assist Card y Travel Ace." },
  { pregunta: "¿Dónde queda la oficina de Cityland Travel?", respuesta: "Nuestra oficina está en Av. Antúnez de Mayolo N. 814, Los Olivos, Lima. Atendemos de lunes a sábado de 9am a 7pm. También puedes contactarnos 24/7 por WhatsApp al +51 941 551 530." },
];
