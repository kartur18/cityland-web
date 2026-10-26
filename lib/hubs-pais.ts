// Páginas «paquetes a <país> desde Lima»: responden las búsquedas por país más pedidas en Google Perú
// («paquetes a Brasil», «paquetes a Punta Cana todo incluido»…). Los paquetes y precios salen del catálogo (26-oct-2026).
// Requisitos verificados: Mercosur/CAN con DNI; México con visa salvo visa de EE.UU., Canadá, Japón, Reino Unido o Schengen.

export interface HubPais {
  ruta: string;
  // Cómo se nombra el destino en el texto («¿Por qué comprar tu viaje a Brasil…?»).
  nombre: string;
  // Países del catálogo (campo `pais` de cada destino) que entran en la página.
  paises: string[];
  h1: string;
  // ≤ 49 caracteres: se le suma " | Cityland".
  tituloSeo: string;
  descripcion: string;
  intro: string;
  documentos: string;
  faqs: { q: string; a: string }[];
  enlaces: { texto: string; href: string }[];
  mensajeWhatsApp: string;
}

const PAGO = { q: "¿Se puede pagar en partes?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar, por transferencia, Yape, Plin o tarjeta." };
const SOLO_DNI = { texto: "Países a los que viajas solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" };

export const HUBS_PAIS: Readonly<Record<string, HubPais>> = {
  brasil: {
    nombre: "Brasil",
    ruta: "/paquetes-a-brasil",
    paises: ["Brasil"],
    h1: "Paquetes a Brasil desde Lima",
    tituloSeo: "Paquetes a Brasil desde Lima: Río y más",
    descripcion:
      "Paquetes a Brasil desde Lima con vuelo y hotel: Río de Janeiro, Búzios, Florianópolis, Salvador de Bahía y Gramado. Viajas solo con DNI. Separa con el 50%.",
    intro:
      "Playas, samba y naturaleza a pocas horas de Lima. Elige tu destino en Brasil y te cotizamos el paquete con vuelo, hotel y traslados.",
    documentos: "Los peruanos viajan a Brasil con su DNI vigente o con pasaporte, sin visa.",
    faqs: [
      { q: "¿Qué documento necesito para ir a Brasil?", a: "Tu DNI vigente o tu pasaporte. No necesitas visa para viajar como turista." },
      {
        q: "¿Cuál es la mejor época para ir?",
        a: "Para playa, el verano de Brasil (diciembre a marzo). Gramado y Canela tienen su encanto en invierno, de junio a agosto.",
      },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Río de Janeiro", href: "/vuelos/lima-rio-de-janeiro" },
      { texto: "Pasajes Lima–São Paulo", href: "/vuelos/lima-sao-paulo" },
      { texto: "Cataratas del Iguazú", href: "/destinos/iguazu-cataratas" },
      SOLO_DNI,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Brasil.",
  },
  argentina: {
    nombre: "Argentina",
    ruta: "/paquetes-a-argentina",
    paises: ["Argentina"],
    h1: "Paquetes a Argentina desde Lima",
    tituloSeo: "Paquetes a Argentina desde Lima",
    descripcion:
      "Paquetes a Argentina desde Lima: Buenos Aires, Bariloche, Mendoza, El Calafate, Salta e Iguazú, con vuelo y hotel. Viajas solo con DNI. Separa con el 50%.",
    intro:
      "De la ciudad de Buenos Aires a los lagos de Bariloche, los glaciares de El Calafate o los viñedos de Mendoza. Te armamos el paquete con vuelo, hotel y traslados.",
    documentos: "Los peruanos viajan a Argentina con su DNI vigente o con pasaporte, sin visa.",
    faqs: [
      { q: "¿Qué documento necesito para ir a Argentina?", a: "Tu DNI vigente o tu pasaporte. No necesitas visa para viajar como turista." },
      {
        q: "¿Cuándo ir a Bariloche?",
        a: "En invierno (julio y agosto) para la nieve, o en verano para los lagos y los paseos al aire libre.",
      },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Buenos Aires", href: "/vuelos/lima-buenos-aires" },
      { texto: "Cataratas del Iguazú", href: "/destinos/iguazu-cataratas" },
      { texto: "Paquetes a Chile", href: "/paquetes-a-chile" },
      SOLO_DNI,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Argentina.",
  },
  colombia: {
    nombre: "Colombia",
    ruta: "/paquetes-a-colombia",
    paises: ["Colombia"],
    h1: "Paquetes a Colombia desde Lima",
    tituloSeo: "Paquetes a Colombia desde Lima con DNI",
    descripcion:
      "Paquetes a Colombia desde Lima: Cartagena, San Andrés, Medellín, Santa Marta, Bogotá y el Eje Cafetero, con vuelo y hotel. Viajas solo con DNI.",
    intro:
      "El Caribe de Cartagena y San Andrés, el clima de Medellín y los cafetales del Eje Cafetero, sin pasaporte. Te cotizamos el paquete completo.",
    documentos:
      "Los peruanos viajan a Colombia solo con su DNI vigente. Para entrar a San Andrés se paga además una tarjeta de turismo que cobra la isla.",
    faqs: [
      { q: "¿Puedo viajar a Colombia solo con DNI?", a: "Sí. Con tu DNI vigente, sin pasaporte ni visa." },
      {
        q: "¿Cartagena o San Andrés?",
        a: "Cartagena tiene ciudad amurallada, vida nocturna y playas en Barú; San Andrés es isla de mar de siete colores para descansar y hacer snorkel. También hay paquetes que combinan las dos.",
      },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Cartagena", href: "/vuelos/lima-cartagena" },
      { texto: "Pasajes Lima–Medellín", href: "/vuelos/lima-medellin" },
      { texto: "Pasajes Lima–San Andrés", href: "/vuelos/lima-san-andres" },
      { texto: "Viajar a Colombia solo con DNI", href: "/blog/viajar-a-colombia-cartagena-san-andres-medellin-solo-dni" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Colombia.",
  },
  mexico: {
    nombre: "México",
    ruta: "/paquetes-a-mexico",
    paises: ["México"],
    h1: "Paquetes a México y Cancún desde Lima",
    tituloSeo: "Paquetes a Cancún y México desde Lima",
    descripcion:
      "Paquetes a Cancún, Riviera Maya, Tulum, Los Cabos y Ciudad de México desde Lima, con vuelo y hotel todo incluido. Te decimos qué visa necesitas.",
    intro:
      "Playas turquesa en Cancún y la Riviera Maya, cenotes, Xcaret y la Ciudad de México. Te cotizamos el paquete con vuelo, hotel y traslados.",
    documentos:
      "México pide visa a los peruanos. Si tienes visa vigente de Estados Unidos, Canadá, Japón, Reino Unido o del espacio Schengen, puedes entrar como turista sin visa mexicana.",
    faqs: [
      {
        q: "¿Necesito visa para Cancún?",
        a: "Sí, salvo que tengas visa vigente de Estados Unidos, Canadá, Japón, Reino Unido o Schengen. Te lo confirmamos antes de que pagues.",
      },
      { q: "¿Qué es la Riviera Maya?", a: "La costa al sur de Cancún, con Playa del Carmen y Tulum: resorts todo incluido, cenotes y ruinas mayas." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Cancún", href: "/vuelos/lima-cancun" },
      { texto: "Requisitos para viajar a Cancún", href: "/viajes/requisitos-viajar-a-mexico-cancun-desde-peru" },
      { texto: "Punta Cana o Cancún", href: "/blog/punta-cana-vs-cancun-cual-elegir-desde-lima" },
      { texto: "Visas", href: "/visas" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Cancún o México.",
  },
  puntaCana: {
    nombre: "Punta Cana",
    ruta: "/paquetes-a-punta-cana",
    paises: ["República Dominicana"],
    h1: "Paquetes a Punta Cana todo incluido desde Lima",
    tituloSeo: "Paquetes a Punta Cana todo incluido",
    descripcion:
      "Paquetes a Punta Cana todo incluido desde Lima: vuelo, resort frente al mar con comidas y bebidas, y traslados. Sin visa para peruanos. Separa con el 50%.",
    intro:
      "Punta Cana es el todo incluido más pedido desde Lima: resorts frente al mar en Bávaro con comidas y bebidas incluidas. También Bayahibe, Samaná y Puerto Plata.",
    documentos:
      "Los peruanos no necesitan visa para República Dominicana: basta el pasaporte vigente y llenar el E-Ticket de migración, que es gratis.",
    faqs: [
      { q: "¿Necesito visa para Punta Cana?", a: "No. Solo pasaporte vigente y el E-Ticket de migración, que se llena en línea y es gratis." },
      {
        q: "¿Qué incluye el todo incluido?",
        a: "Las comidas y bebidas dentro del resort. Lo que entra exactamente cambia de un hotel a otro, por eso te lo detallamos por escrito en tu cotización.",
      },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Punta Cana", href: "/vuelos/lima-punta-cana" },
      { texto: "Requisitos para viajar a Punta Cana", href: "/viajes/requisitos-viajar-a-punta-cana-desde-peru" },
      { texto: "Punta Cana o Cancún", href: "/blog/punta-cana-vs-cancun-cual-elegir-desde-lima" },
      { texto: "Promoción escolar a Punta Cana", href: "/ofertas/paquetes-viaje-de-promocion-escolar-punta-cana" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Punta Cana todo incluido.",
  },
  estadosUnidos: {
    nombre: "Estados Unidos",
    ruta: "/paquetes-a-estados-unidos",
    paises: ["Estados Unidos"],
    h1: "Paquetes a Estados Unidos desde Lima",
    tituloSeo: "Paquetes a Orlando, Miami y Nueva York",
    descripcion:
      "Paquetes a Estados Unidos desde Lima: Orlando y Disney, Miami, Nueva York, Las Vegas y California, con vuelo y hotel. Necesitas visa americana.",
    intro:
      "Los parques de Orlando, las playas de Miami y las grandes ciudades. Si ya tienes tu visa, te armamos el viaje completo; si no, te ayudamos a tramitarla.",
    documentos:
      "Para Estados Unidos los peruanos necesitan visa americana vigente y pasaporte. Consigue la visa antes de comprar pasajes.",
    faqs: [
      {
        q: "¿Necesito visa para Estados Unidos?",
        a: "Sí, cada viajero, incluidos los niños, necesita visa americana vigente. Te ayudamos con el formulario y la entrevista.",
      },
      { q: "¿Cuántos días necesito para Disney?", a: "Para lo principal de Disney, unos 4 días de parques; con Universal, 5 o 6." },
      PAGO,
    ],
    enlaces: [
      { texto: "Viaje a Disney desde Perú", href: "/blog/viaje-a-disney-desde-peru-cuanto-cuesta" },
      { texto: "Pasajes Lima–Miami", href: "/vuelos/lima-miami" },
      { texto: "Pasajes Lima–Orlando", href: "/vuelos/lima-orlando" },
      { texto: "Visa americana", href: "/visas" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Estados Unidos.",
  },
  chile: {
    nombre: "Chile",
    ruta: "/paquetes-a-chile",
    paises: ["Chile"],
    h1: "Paquetes a Chile desde Lima",
    tituloSeo: "Paquetes a Chile desde Lima con DNI",
    descripcion:
      "Paquetes a Chile desde Lima: Santiago, Viña del Mar, Valle Nevado y San Pedro de Atacama, con vuelo y hotel. Viajas solo con DNI. Separa con el 50%.",
    intro:
      "Santiago y la costa de Viña del Mar, la nieve de Valle Nevado o el desierto de Atacama. Te cotizamos el paquete con vuelo, hotel y traslados.",
    documentos: "Los peruanos viajan a Chile con su DNI vigente o con pasaporte, sin visa.",
    faqs: [
      { q: "¿Qué documento necesito para Chile?", a: "Tu DNI vigente o tu pasaporte. No necesitas visa para viajar como turista." },
      { q: "¿Cuándo hay nieve en Valle Nevado?", a: "En el invierno chileno, más o menos de junio a septiembre." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Santiago", href: "/vuelos/lima-santiago" },
      { texto: "Paquetes a Argentina", href: "/paquetes-a-argentina" },
      SOLO_DNI,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Chile.",
  },
};
