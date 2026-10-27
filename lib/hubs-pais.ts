// Páginas «paquetes a <país> desde Lima»: responden las búsquedas por país más pedidas en Google Perú
// («paquetes a Brasil», «paquetes a Punta Cana todo incluido»…). Los paquetes y precios salen del catálogo (26-oct-2026).
// Requisitos verificados: Mercosur/CAN con DNI; México con visa salvo visa de EE.UU., Canadá, Japón, Reino Unido o Schengen.

export interface HubPais {
  ruta: string;
  // Cómo se nombra el destino en el texto («¿Por qué comprar tu viaje a Brasil…?»).
  nombre: string;
  // Países del catálogo (campo `pais` de cada destino) que entran en la página.
  paises: string[];
  // Si se indica, solo estos destinos (en lugar de todos los del país).
  slugs?: string[];
  // Circuitos del mayorista que entran por ciudad (si no, por país).
  ciudadesCircuitos?: RegExp;
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
      { texto: "Río de Janeiro y Búzios", href: "/destinos/rio-de-janeiro-buzios" },
      { texto: "Carnaval de Río 2027", href: "/carnaval-de-rio-2027" },
      { texto: "Cuándo viajar a Río", href: "/cuando-viajar-a-rio-de-janeiro" },
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
  cartagena: {
    nombre: "Cartagena",
    ruta: "/paquetes-a-cartagena",
    paises: ["Colombia"],
    slugs: ["cartagena", "san-andres-cartagena-combinado"],
    ciudadesCircuitos: /cartagena/i,
    h1: "Paquetes a Cartagena desde Lima",
    tituloSeo: "Paquetes a Cartagena desde Lima, solo DNI",
    descripcion:
      "Paquetes a Cartagena de Indias desde Lima con vuelo, hotel y traslados: Ciudad Amurallada, Islas del Rosario y Barú. Viajas solo con DNI. Separa con el 50%.",
    intro:
      "Cartagena es el Caribe más cerca de Lima: la Ciudad Amurallada, las playas de Barú y las Islas del Rosario, y puedes viajar solo con tu DNI.",
    documentos: "Los peruanos pueden viajar a Colombia solo con su DNI vigente, sin pasaporte ni visa.",
    faqs: [
      { q: "¿Puedo viajar a Cartagena solo con DNI?", a: "Sí. Los peruanos entran a Colombia con su DNI vigente; no necesitas pasaporte ni visa." },
      { q: "¿Conviene hotel en la ciudad o en Barú?", a: "En la ciudad estás cerca de todo; en Barú tienes playa y descanso. Muchos combinan las dos: te lo armamos según tu presupuesto." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Cartagena", href: "/vuelos/lima-cartagena" },
      { texto: "Viajar a Colombia solo con DNI", href: "/blog/viajar-a-colombia-cartagena-san-andres-medellin-solo-dni" },
      { texto: "Paquetes a San Andrés", href: "/paquetes-a-san-andres" },
      { texto: "Todo Colombia", href: "/paquetes-a-colombia" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Cartagena.",
  },
  sanAndres: {
    nombre: "San Andrés",
    ruta: "/paquetes-a-san-andres",
    paises: ["Colombia"],
    slugs: ["san-andres", "san-andres-cartagena-combinado"],
    ciudadesCircuitos: /san andr/i,
    h1: "Paquetes a San Andrés todo incluido desde Lima",
    tituloSeo: "Paquetes a San Andrés todo incluido",
    descripcion:
      "Paquetes a San Andrés desde Lima con vuelo, hotel todo incluido y traslados: el mar de siete colores, Johnny Cay y el Acuario. Viajas con DNI. Separa con el 50%.",
    intro: "San Andrés es la isla del mar de siete colores: hoteles todo incluido, Johnny Cay, el Acuario y la vuelta a la isla.",
    documentos:
      "Los peruanos pueden viajar a Colombia solo con su DNI vigente. Para entrar a la isla se paga además una tarjeta de turismo que cobra San Andrés.",
    faqs: [
      { q: "¿Qué documentos necesito para San Andrés?", a: "Tu DNI vigente y la tarjeta de turismo de la isla, que se paga antes de abordar el vuelo a San Andrés." },
      { q: "¿Se puede combinar con Cartagena?", a: "Sí, es la combinación más pedida: unos días de ciudad en Cartagena y después playa en San Andrés." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–San Andrés", href: "/vuelos/lima-san-andres" },
      { texto: "Paquetes a Cartagena", href: "/paquetes-a-cartagena" },
      { texto: "Todo Colombia", href: "/paquetes-a-colombia" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a San Andrés.",
  },
  cancun: {
    nombre: "Cancún",
    ruta: "/paquetes-a-cancun",
    paises: ["México"],
    slugs: ["cancun", "riviera-maya-todo-incluido", "tulum-cancun-combinado", "cancun-xcaret-experiencia", "cdmx-cancun-combinado"],
    ciudadesCircuitos: /canc[uú]n|riviera|playa del carmen|tulum/i,
    h1: "Paquetes a Cancún todo incluido desde Lima",
    tituloSeo: "Paquetes a Cancún todo incluido desde Lima",
    descripcion:
      "Paquetes a Cancún y la Riviera Maya todo incluido desde Lima: vuelo, resort frente al mar, traslados y parques como Xcaret. Separa con el 50%.",
    intro: "Cancún y la Riviera Maya: resorts todo incluido frente al mar Caribe, Tulum, Playa del Carmen y los parques de Xcaret.",
    documentos:
      "Desde 2024 México pide visa a los peruanos. Si tienes visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o del espacio Schengen, puedes entrar sin visa mexicana. Te lo confirmamos al cotizar.",
    faqs: [
      { q: "¿Necesito visa para Cancún?", a: "Sí, salvo que tengas visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o Schengen. Si no la tienes, te ayudamos con el trámite de la visa mexicana." },
      { q: "¿Punta Cana o Cancún?", a: "Punta Cana no pide visa a los peruanos y es más de descanso; Cancún tiene más paseos y parques. Te cotizamos los dos para que compares." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Cancún", href: "/vuelos/lima-cancun" },
      { texto: "Punta Cana o Cancún", href: "/blog/punta-cana-vs-cancun-cual-elegir-desde-lima" },
      { texto: "Visa mexicana", href: "/visas" },
      { texto: "Todo México", href: "/paquetes-a-mexico" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Cancún todo incluido.",
  },
  aruba: {
    nombre: "Aruba",
    ruta: "/paquetes-a-aruba",
    paises: ["Aruba"],
    slugs: ["aruba", "aruba-curazao-combinado", "curazao"],
    ciudadesCircuitos: /aruba|curaz|willemstad/i,
    h1: "Paquetes a Aruba y Curazao desde Lima",
    tituloSeo: "Paquetes a Aruba y Curazao desde Lima",
    descripcion:
      "Paquetes a Aruba y Curazao desde Lima con vuelo, hotel en Palm Beach o Eagle Beach y traslados. Sin visa para peruanos. Separa con el 50%.",
    intro: "Aruba, la isla feliz, con las playas de Eagle Beach y Palm Beach, y Curazao con sus casitas de colores en Willemstad.",
    documentos:
      "Los peruanos no necesitan visa para Aruba como turistas: viajas con pasaporte vigente y, antes de llegar, llenas en línea la tarjeta de embarque y desembarque (ED Card). Te lo confirmamos al cotizar.",
    faqs: [
      { q: "¿Necesito visa para Aruba?", a: "No. Viajas con pasaporte vigente y llenas en línea la ED Card antes de volar." },
      { q: "¿Se puede combinar Aruba y Curazao?", a: "Sí, hay vuelos cortos entre las dos islas y armamos el combinado con hotel en cada una." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Aruba", href: "/vuelos/lima-aruba" },
      { texto: "Todo el Caribe", href: "/caribe" },
      { texto: "Paquetes todo incluido", href: "/paquetes-todo-incluido" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Aruba.",
  },
  panama: {
    nombre: "Panamá",
    ruta: "/paquetes-a-panama",
    paises: ["Panamá"],
    slugs: ["panama", "san-blas-bocas-del-toro-panama", "crucero-caribe-sin-visa-panama"],
    ciudadesCircuitos: /panam|contadora|bijao/i,
    h1: "Paquetes a Panamá desde Lima",
    tituloSeo: "Paquetes a Panamá desde Lima: compras y playa",
    descripcion:
      "Paquetes a Panamá desde Lima: compras, el Canal, San Blas, Bocas del Toro, Isla Contadora y cruceros por el Caribe. Sin visa para peruanos. Separa con el 50%.",
    intro: "Panamá es compras, el Canal y playa en un solo viaje: centros comerciales, el Casco Antiguo, San Blas e Isla Contadora.",
    documentos:
      "Los peruanos no necesitan visa para Panamá como turistas: viajas con pasaporte vigente. En migración te pueden pedir el boleto de regreso y que muestres dinero para tu estadía.",
    faqs: [
      { q: "¿Necesito visa para Panamá?", a: "No. Viajas con pasaporte vigente; en migración te pueden pedir el boleto de regreso y dinero para tu estadía." },
      { q: "¿Hay cruceros desde Panamá?", a: "Sí, hay cruceros por el Caribe que salen de Colón. Te confirmamos fechas, cabinas y requisitos al cotizar." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Panamá", href: "/vuelos/lima-panama" },
      { texto: "Cruceros", href: "/cruceros" },
      { texto: "Paquetes a Costa Rica", href: "/paquetes-a-costa-rica" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Panamá.",
  },
  miami: {
    nombre: "Miami",
    ruta: "/paquetes-a-miami",
    paises: ["Estados Unidos"],
    slugs: ["miami-orlando", "crucero-bahamas-desde-miami"],
    ciudadesCircuitos: /miami/i,
    h1: "Paquetes a Miami desde Lima",
    tituloSeo: "Paquetes a Miami desde Lima: compras y playa",
    descripcion:
      "Paquetes a Miami desde Lima: vuelo, hotel, compras en Dolphin Mall y Sawgrass, South Beach, combinados con Orlando y cruceros a las Bahamas. Separa con el 50%.",
    intro:
      "Miami es playa, compras y el punto de partida para Orlando y los cruceros a las Bahamas. Te armamos el viaje con vuelo, hotel y traslados.",
    documentos:
      "Para Estados Unidos los peruanos necesitan visa americana vigente y pasaporte. Si aún no la tienes, te ayudamos con el formulario y la entrevista; consigue la visa antes de comprar los pasajes.",
    faqs: [
      { q: "¿Necesito visa para Miami?", a: "Sí, la visa americana de turismo (B1/B2) y pasaporte vigente. Si no la tienes, revisa nuestra guía paso a paso." },
      { q: "¿Se puede combinar Miami con Orlando o un crucero?", a: "Sí. Lo más pedido es Miami con los parques de Orlando o con un crucero de 3 o 4 noches a las Bahamas." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Miami", href: "/vuelos/lima-miami" },
      { texto: "Visa americana paso a paso", href: "/visa-americana" },
      { texto: "Orlando y Disney", href: "/paquetes-a-orlando-disney" },
      { texto: "Todo Estados Unidos", href: "/paquetes-a-estados-unidos" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Miami.",
  },
  italia: {
    nombre: "Italia",
    ruta: "/paquetes-a-italia",
    paises: ["Italia"],
    h1: "Paquetes turísticos a Italia desde Lima",
    tituloSeo: "Paquetes turísticos a Italia desde Lima",
    descripcion:
      "Paquetes y circuitos a Italia desde Lima: Roma, Florencia, Venecia, Milán y la Costa Amalfitana, solos o en un Eurotrip. Sin visa para peruanos. Separa con el 50%.",
    intro:
      "Roma, Florencia, Venecia y la Costa Amalfitana: viaja solo a Italia o combínala con España, Francia y Suiza en un circuito por Europa.",
    documentos: SCHENGEN,
    faqs: [
      { q: "¿Necesito visa para Italia?", a: "No, para turismo de hasta 90 días. Viajas con pasaporte vigente y te pueden pedir pasaje de regreso, hotel, dinero y seguro de viaje." },
      { q: "¿Cuántos días necesito para Italia?", a: "Para Roma, Florencia y Venecia, al menos 10 a 12 días con los vuelos. Si quieres sumar otros países, los circuitos por Europa son de 15 a 19 días." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–Roma", href: "/vuelos/lima-roma" },
      { texto: "Circuitos por Europa", href: "/circuitos-por-europa" },
      { texto: "Paquete migratorio a Italia", href: "/italia" },
      { texto: "Seguro de viaje para Europa", href: "/seguros" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete turístico a Italia.",
  },
  francia: {
    nombre: "Francia",
    ruta: "/paquetes-a-francia",
    paises: ["Francia"],
    h1: "Paquetes turísticos a París y Francia desde Lima",
    tituloSeo: "Paquetes a París y Francia desde Lima",
    descripcion:
      "Paquetes a París desde Lima: Torre Eiffel, Louvre, Disneyland París y la Costa Azul, solos o en un circuito por Europa. Sin visa para peruanos. Separa con el 50%.",
    intro:
      "París, Disneyland París para la familia y la Costa Azul: viaja solo a Francia o combínala con España e Italia en un circuito por Europa.",
    documentos: SCHENGEN,
    faqs: [
      { q: "¿Necesito visa para Francia?", a: "No, para turismo de hasta 90 días. Viajas con pasaporte vigente y te pueden pedir pasaje de regreso, hotel, dinero y seguro de viaje." },
      { q: "¿Hay paquetes a Disneyland París?", a: "Sí, te armamos París con entradas a Disneyland París para la familia. Te cotizamos según las fechas y las edades de los niños." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes Lima–París", href: "/vuelos/lima-paris" },
      { texto: "Circuitos por Europa", href: "/circuitos-por-europa" },
      { texto: "Paquete migratorio a Francia", href: "/francia" },
      { texto: "Seguro de viaje para Europa", href: "/seguros" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete turístico a Francia.",
  },
  peru: {
    nombre: "Cusco, Tarapoto o cualquier destino del Perú",
    ruta: "/nacionales",
    paises: ["Perú"],
    h1: "Paquetes turísticos en el Perú desde Lima",
    tituloSeo: "Paquetes turísticos en el Perú desde Lima",
    descripcion:
      "Paquetes turísticos nacionales desde Lima: Cusco y Machu Picchu, Tarapoto, Cajamarca, Huaraz, Arequipa, Puno, Iquitos, Máncora, Punta Sal y Paracas. Solo con DNI. Separa con el 50%.",
    intro:
      "Todos nuestros paquetes por el Perú en un solo lugar: sierra, selva y playa, con vuelo o bus, hotel y tours. Elige tu destino y te lo cotizamos por WhatsApp.",
    documentos: "Para viajar dentro del Perú solo necesitas tu DNI. Los menores que viajan sin sus padres necesitan permiso notarial.",
    faqs: [
      { q: "¿Qué incluyen los paquetes nacionales?", a: "Según el paquete: vuelo o bus desde Lima, hotel, traslados y tours. En cada tarjeta ves qué incluye y te lo confirmamos por escrito." },
      { q: "¿Cuál es el destino más barato?", a: "Los paquetes más económicos están arriba de la lista; el precio final depende de la fecha y del hotel." },
      { q: "¿Organizan viajes para grupos y promociones?", a: "Sí. Te damos una sola cotización para todo el grupo." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes nacionales: Lima–Chiclayo", href: "/vuelos/lima-chiclayo" },
      { texto: "Pasajes Lima–Cusco", href: "/vuelos/lima-cusco" },
      { texto: "Full days desde Lima", href: "/full-days" },
      { texto: "Feriados largos", href: "/feriados-largos" },
      { texto: "Promociones escolares", href: "/colegios" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete turístico en el Perú.",
  },
  todoIncluido: {
    nombre: "Punta Cana, Cancún o Punta Sal",
    ruta: "/paquetes-todo-incluido",
    paises: [],
    slugs: [
      "punta-sal-royal-decameron-todo-incluido", "san-andres", "punta-cana", "cancun", "riviera-maya-todo-incluido",
      "bayahibe-dominicana-all-inclusive", "aruba", "curazao", "guanacaste-costa-rica-all-inclusive",
    ],
    h1: "Paquetes todo incluido desde Lima",
    tituloSeo: "Paquetes todo incluido desde Lima",
    descripcion:
      "Paquetes todo incluido desde Lima: Punta Cana, Cancún, Riviera Maya, San Andrés, Aruba, Curazao y Punta Sal. Vuelo, resort con comidas y bebidas y traslados. Separa con el 50%.",
    intro:
      "Resorts frente al mar donde las comidas y las bebidas ya están pagadas: solo te preocupas de descansar. Elige tu playa y te cotizamos vuelo, hotel y traslados.",
    documentos:
      "Depende del destino: Punta Sal y San Andrés solo con DNI; Punta Cana, Aruba y Curazao con pasaporte y sin visa; para Cancún y la Riviera Maya, México pide visa salvo que tengas visa de Estados Unidos, Canadá, Japón, Reino Unido o Schengen.",
    faqs: [
      { q: "¿Qué significa todo incluido?", a: "Que las comidas y bebidas dentro del resort ya están pagadas. Lo que entra exactamente cambia de un hotel a otro, por eso te lo detallamos por escrito." },
      { q: "¿Cuál es el todo incluido más barato desde Lima?", a: "Punta Sal, en el Perú, porque el vuelo es nacional. Fuera del país, los precios cambian según la fecha: los más económicos están arriba de la lista." },
      PAGO,
    ],
    enlaces: [
      { texto: "Paquetes a Punta Cana", href: "/paquetes-a-punta-cana" },
      { texto: "Paquetes a Cancún y México", href: "/paquetes-a-mexico" },
      { texto: "Punta Cana o Cancún", href: "/blog/punta-cana-vs-cancun-cual-elegir-desde-lima" },
      { texto: "Hoteles", href: "/hoteles" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete todo incluido.",
  },
  espana: {
    nombre: "España",
    ruta: "/paquetes-a-espana",
    paises: [],
    slugs: [
      "barcelona-espana", "valencia-espana", "sevilla-andalucia", "malaga-costa-del-sol", "bilbao-pais-vasco",
      "mallorca-islas-baleares", "tenerife-islas-canarias", "santiago-de-compostela-galicia", "zaragoza-aragon",
      "madrid-paris-roma-17-dias", "espana-portugal-marruecos", "europa-clasica",
    ],
    h1: "Paquetes turísticos a España desde Lima",
    tituloSeo: "Paquetes turísticos a España desde Lima",
    descripcion:
      "Paquetes a España con vuelo y hotel desde Lima: Barcelona, Valencia, Sevilla, Málaga, Bilbao, Mallorca, Tenerife y Galicia, y Eurotrips de 17 días. Sin visa. Separa con el 50%.",
    intro:
      "Vacaciones en España con vuelo de ida y vuelta, hotel y traslados: ciudades, playas del Mediterráneo, islas y circuitos por Europa. Si buscas viajar solo de ida, mira nuestro paquete migratorio.",
    documentos:
      "Los peruanos no necesitan visa para España: viajas como turista hasta 90 días con pasaporte. En migración te pueden pedir el pasaje de regreso, el hotel o la carta de invitación, dinero para tu estadía y un seguro de viaje.",
    faqs: [
      { q: "¿Qué incluye un paquete a España?", a: "Vuelo de ida y vuelta desde Lima, hotel y traslados; según el paquete, también tours y seguro. En cada tarjeta ves los días y el precio desde." },
      { q: "¿Y si quiero viajar solo de ida?", a: "Para eso está el paquete migratorio a España, con el vuelo de ida y la carpeta de viaje que te armamos." },
      { q: "¿Cuál es la mejor época?", a: "Primavera (abril a junio) y otoño (septiembre y octubre) tienen buen clima y precios más bajos que julio, agosto y diciembre." },
      PAGO,
    ],
    enlaces: [
      { texto: "Pasajes a España", href: "/pasajes-a-espana" },
      { texto: "Paquete migratorio a España", href: "/espana" },
      { texto: "Requisitos para viajar a España", href: "/viajes/requisitos-viajar-a-espana-desde-peru" },
      { texto: "Bolsa de viaje", href: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje" },
      { texto: "Carta de invitación", href: "/blog/carta-invitacion-espana-peru-requisitos" },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete turístico a España.",
  },
};
