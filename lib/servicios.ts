// Páginas de cada cosa que vende Cityland y que no tenía página propia (24-oct-2026).
// Solo afirmaciones comprobables: nada de precios, tiempos ni coberturas que no estén en el catálogo.

export interface ServicioCityland {
  ruta: string;
  h1: string;
  // ≤ 49 caracteres: se le suma " | Cityland".
  tituloSeo: string;
  descripcion: string;
  intro: string;
  queCotizamos: { titulo: string; detalle: string }[];
  pasos: string[];
  ejemplosTitulo: string;
  ejemplos: { texto: string; href: string }[];
  faqs: { q: string; a: string }[];
  mensajeWhatsApp: string;
  relacionados: { texto: string; href: string }[];
}

const PASOS_COMUNES_FINAL = [
  "Separas con el 50% en la oficina o por transferencia, Yape, Plin o tarjeta.",
  "Recibes tu confirmación por escrito y tu boleta o factura electrónica.",
];

export const SERVICIOS: Readonly<Record<string, ServicioCityland>> = {
  hoteles: {
    ruta: "/hoteles",
    h1: "Reserva de hoteles en el Perú y el extranjero",
    tituloSeo: "Reserva de hoteles en Perú y el extranjero",
    descripcion:
      "Reservamos tu hotel solo o con vuelo: resorts todo incluido en el Caribe, hoteles en Cusco, Paracas o Máncora y en Europa. Separa con el 50% en Los Olivos.",
    intro:
      "Te buscamos el hotel que va con tu viaje y tu presupuesto, y te decimos por escrito qué incluye antes de que pagues: régimen de comidas, tipo de habitación y condiciones de cambio.",
    queCotizamos: [
      { titulo: "Resorts todo incluido", detalle: "Punta Cana, Cancún y Riviera Maya, Cartagena, San Andrés y Panamá." },
      { titulo: "Hoteles en el Perú", detalle: "Cusco, Paracas, Máncora, Punta Sal, Arequipa y la selva." },
      { titulo: "Vuelo + hotel", detalle: "Todo en una sola reserva, con traslados cuando el paquete los incluye." },
      { titulo: "Hoteles para viajes de trabajo", detalle: "Con factura electrónica a nombre de tu empresa." },
    ],
    pasos: [
      "Nos escribes el destino, las fechas, cuántos viajan y tu presupuesto.",
      "Te enviamos opciones con lo que incluye cada una.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Hoteles que más nos piden",
    ejemplos: [
      { texto: "Decameron Barú, Cartagena", href: "/ofertas/decameron-baru-cartagena-paquete-todo-incluido" },
      { texto: "Dreams Natura, Cancún", href: "/ofertas/dreams-natura-cancun-paquete-todo-incluido" },
      { texto: "Hard Rock, Punta Cana", href: "/ofertas/hard-rock-hotel-punta-cana-vuelo-mas-hotel-traslados" },
      { texto: "Barceló Maya, Riviera Maya", href: "/ofertas/estadia-hotel-barcelo-maya-riviera-5-dias-4-noches-todo-incluido" },
      { texto: "Decameron Isleño, San Andrés", href: "/ofertas/decameron-isleno-san-andres-paquete-todo-incluido" },
      { texto: "DoubleTree, Paracas", href: "/ofertas/estadia-hotel-doubletree-hilton-paracas-tarifa-grupos-y-amigos" },
      { texto: "Aranwa Vichayito, Máncora", href: "/ofertas/estadia-hotel-aranwa-vichayito-mancora-aniversario-y-bodas" },
    ],
    faqs: [
      { q: "¿Puedo reservar solo el hotel, sin vuelo?", a: "Sí. Te cotizamos solo el hotel o el paquete con vuelo, lo que te convenga." },
      {
        q: "¿Qué significa «todo incluido»?",
        a: "Que las comidas y bebidas dentro del hotel ya están pagadas. Lo que entra exactamente cambia de un hotel a otro, por eso te lo detallamos por escrito en tu cotización.",
      },
      { q: "¿Cómo sé que mi reserva está hecha?", a: "Te enviamos el voucher de tu reserva con su código de confirmación." },
      { q: "¿Me dan factura?", a: "Sí. Emitimos boleta o factura electrónica." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un hotel.",
    relacionados: [
      { texto: "Caribe todo incluido", href: "/caribe" },
      { texto: "Luna de miel", href: "/luna-de-miel" },
      { texto: "Traslados", href: "/traslados" },
      { texto: "Tours", href: "/tours" },
    ],
  },

  tours: {
    ruta: "/tours",
    h1: "Tours en el Perú y el mundo, con salida desde Lima",
    tituloSeo: "Tours en Cusco, Arequipa, Huaraz y más",
    descripcion:
      "Tours y paquetes por el Perú desde Lima: Cusco y Machu Picchu, Arequipa y el Colca, Huaraz, Paracas, Iquitos y más. También circuitos por Europa. Cotiza por WhatsApp.",
    intro:
      "Puedes comprar solo el tour o el viaje completo con vuelo, hotel y tours. En tu cotización te detallamos qué incluye cada día, para que no tengas sorpresas al llegar.",
    queCotizamos: [
      { titulo: "Cusco y Machu Picchu", detalle: "De 4 a 6 días, con Montaña de 7 Colores, Humantay o Puno." },
      { titulo: "Sur y norte del Perú", detalle: "Arequipa y el Colca, Paracas, Huacachina y Nazca, Trujillo y Chiclayo." },
      { titulo: "Sierra y selva", detalle: "Huaraz, Iquitos, Tarapoto, Chachapoyas y Kuélap, Oxapampa." },
      { titulo: "Circuitos por Europa", detalle: "Madrid, París y Roma, y otros recorridos por varios países." },
    ],
    pasos: [
      "Nos dices el destino, las fechas y cuántos viajan.",
      "Te enviamos el itinerario día por día con lo que incluye.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Tours que más nos piden",
    ejemplos: [
      { texto: "Tours en Europa, el Caribe y Sudamérica", href: "/tours-y-actividades" },
      { texto: "Cusco y Machu Picchu en 4 días", href: "/destinos/cusco-machu-picchu-4-dias" },
      { texto: "Cusco, Montaña de 7 Colores y Humantay", href: "/destinos/cusco-montana-7-colores-humantay-5-dias" },
      { texto: "Arequipa y el Colca", href: "/destinos/arequipa-colca" },
      { texto: "Paracas, Huacachina y Nazca", href: "/destinos/paracas-ica-huacachina-nazca" },
      { texto: "Huaraz: Laguna 69 y Pastoruri", href: "/destinos/huaraz-laguna-69-pastoruri-chavin" },
      { texto: "Iquitos y el río Amazonas", href: "/destinos/iquitos-crucero-rio-amazonas-lodge" },
      { texto: "Chachapoyas, Kuélap y Gocta", href: "/destinos/chachapoyas-kuelap-catarata-gocta" },
      { texto: "Madrid, París y Roma en 17 días", href: "/destinos/madrid-paris-roma-17-dias" },
    ],
    faqs: [
      {
        q: "¿El tour incluye el pasaje desde Lima?",
        a: "Depende de lo que elijas: puedes comprar solo el tour o el paquete con vuelo y hotel. En tu cotización figura qué incluye.",
      },
      {
        q: "¿Hacen tours para grupos, colegios o empresas?",
        a: "Sí. Para grupos te armamos una sola cotización con las fechas y la lista de pasajeros.",
      },
      { q: "¿Puedo pagar en partes?", a: "Separas con el 50% y pagas el resto antes del viaje." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un tour.",
    relacionados: [
      { texto: "Cusco", href: "/cusco" },
      { texto: "Perú y playas", href: "/peru" },
      { texto: "Hoteles", href: "/hoteles" },
      { texto: "Viajes para institutos", href: "/institutos" },
    ],
  },

  traslados: {
    ruta: "/traslados",
    h1: "Traslados del aeropuerto al hotel",
    tituloSeo: "Traslados aeropuerto–hotel para tu viaje",
    descripcion:
      "Te cotizamos el traslado entre el aeropuerto y tu hotel, solo o dentro de tu paquete: Punta Cana, Cancún, Cartagena, San Andrés, Madrid y más. Cotiza por WhatsApp.",
    intro:
      "Llegar a un aeropuerto que no conoces y buscar taxi cansa. Con el traslado reservado, ya sabes quién te lleva al hotel y cuánto pagas antes de viajar.",
    queCotizamos: [
      { titulo: "Traslado compartido", detalle: "Vas con otros viajeros del mismo vuelo o la misma zona. Es la opción más económica." },
      { titulo: "Traslado privado", detalle: "Solo para ti y tu grupo, sin esperar a otros pasajeros." },
      { titulo: "Dentro de tu paquete", detalle: "Muchos de nuestros paquetes ya lo incluyen: figura en tu cotización." },
    ],
    pasos: [
      "Nos escribes tu vuelo, tu hotel y cuántos viajan.",
      "Te cotizamos el traslado compartido o privado, según el destino.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Paquetes que ya incluyen traslados",
    ejemplos: [
      { texto: "Hard Rock, Punta Cana", href: "/ofertas/hard-rock-hotel-punta-cana-vuelo-mas-hotel-traslados" },
      { texto: "RIU Bambú, Punta Cana", href: "/ofertas/estadia-hotel-riu-bambu-punta-cana-6-dias-5-noches-vuelo-y-traslados" },
      { texto: "Hilton La Romana", href: "/ofertas/estadia-hotel-hilton-la-romana-6-dias-5-noches-vuelo-y-traslados" },
      { texto: "GHL Sunrise, San Andrés", href: "/ofertas/ghl-sunrise-san-andres-vuelo-mas-hotel-traslados" },
      { texto: "Zuana Beach, Santa Marta", href: "/ofertas/zuana-beach-resort-santa-marta-vuelo-mas-hotel-traslados" },
      { texto: "RIU Ocho Ríos, Jamaica", href: "/ofertas/hotel-riu-ocho-rios-jamaica-vuelo-mas-hotel-traslados" },
      { texto: "Hotel en Madrid con traslados", href: "/ofertas/hotel-agumar-madrid-vuelo-mas-hotel-traslados" },
    ],
    faqs: [
      {
        q: "¿Mi paquete incluye el traslado?",
        a: "Depende del paquete. En tu cotización figura si lo incluye; si no, te lo agregamos.",
      },
      { q: "¿Puedo pedir solo el traslado?", a: "Sí. Escríbenos con tu vuelo, tu hotel y cuántos viajan." },
      {
        q: "¿Cuál conviene, compartido o privado?",
        a: "El compartido cuesta menos; el privado sale apenas llegas y es más cómodo si viajas con niños o mucho equipaje.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un traslado aeropuerto–hotel.",
    relacionados: [
      { texto: "Hoteles", href: "/hoteles" },
      { texto: "Caribe todo incluido", href: "/caribe" },
      { texto: "Tours", href: "/tours" },
      { texto: "Vuelos", href: "/vuelos" },
    ],
  },

  institutos: {
    ruta: "/institutos",
    h1: "Viajes de promoción para institutos y universidades",
    tituloSeo: "Viajes de promoción para institutos",
    descripcion:
      "Viajes de fin de carrera, de estudio y de promoción para institutos y universidades: Cusco, Tarapoto, Máncora, Punta Cana, Cartagena y más. Una sola cotización para el grupo.",
    intro:
      "Organizar el viaje de toda una promoción es trabajo: fechas, pagos y lista de pasajeros. Coordinamos con el delegado o el comité y te damos una sola cotización para todo el grupo.",
    queCotizamos: [
      { titulo: "Viajes de fin de carrera", detalle: "Playas del norte, selva o Caribe para celebrar con tu promoción." },
      { titulo: "Viajes de estudio", detalle: "Cusco, Arequipa y otras rutas con visitas guiadas." },
      { titulo: "Congresos y ferias", detalle: "Vuelo, hotel y traslados para delegaciones." },
      { titulo: "Grupos grandes", detalle: "Una sola cotización con las fechas y la lista de pasajeros." },
    ],
    pasos: [
      "El delegado nos escribe el destino, las fechas posibles y cuántos viajan.",
      "Te enviamos la cotización del grupo con lo que incluye.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Destinos que más eligen las promociones",
    ejemplos: [
      { texto: "Cusco y Machu Picchu", href: "/destinos/cusco-machu-picchu-4-dias" },
      { texto: "Promoción a Tarapoto", href: "/ofertas/cotizacion-viaje-de-promocion-escolar-tarapoto" },
      { texto: "Máncora y Vichayito", href: "/destinos/mancora-vichayito" },
      { texto: "Barceló Maya para grupos", href: "/ofertas/barcelo-maya-grand-resort-viaje-de-amigos-grupos" },
      { texto: "Decameron Panamá para grupos", href: "/ofertas/decameron-panama-playa-blanca-viaje-de-amigos-grupos" },
      { texto: "Convenciones en Paracas", href: "/ofertas/convencion-corporativa-paracas-grupos-y-delegaciones" },
    ],
    faqs: [
      {
        q: "¿Con cuánto tiempo debemos reservar?",
        a: "Mientras antes, mejor: para un grupo grande hay más opciones de vuelos y hoteles. Lo ideal es empezar a cotizar varios meses antes.",
      },
      { q: "¿Emiten factura a nombre del instituto?", a: "Sí. Emitimos boleta o factura electrónica." },
      { q: "¿También hacen viajes de colegio?", a: "Sí. Mira nuestros viajes de promoción escolar." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje de promoción para mi instituto.",
    relacionados: [
      { texto: "Promociones escolares", href: "/colegios" },
      { texto: "Viajes corporativos", href: "/empresas" },
      { texto: "Tours", href: "/tours" },
      { texto: "Hoteles", href: "/hoteles" },
    ],
  },
  adultosMayores: {
    ruta: "/viajes-adultos-mayores",
    h1: "Viajes para adultos mayores y grupos de jubilados",
    tituloSeo: "Viajes para adultos mayores y jubilados",
    descripcion:
      "Viajes tranquilos para adultos mayores, solos o en grupo: Cusco, Paracas, Tarapoto, Punta Cana y visitas a la familia en España. Silla de ruedas en el aeropuerto y seguro para mayores.",
    intro:
      "Viajar después de los 60 se disfruta más sin apuros. Armamos el viaje a tu ritmo: vuelos directos cuando se puede, hoteles cómodos, tours sin caminatas largas y alguien que te responda por WhatsApp antes y durante el viaje.",
    queCotizamos: [
      {
        titulo: "Viajes en grupo",
        detalle: "Para asociaciones de jubilados, clubes, parroquias o grupos de amigos: una sola cotización para todos.",
      },
      {
        titulo: "Silla de ruedas en el aeropuerto",
        detalle: "La pedimos a la aerolínea junto con tu pasaje, para que te acompañen en el embarque y la llegada. Las aerolíneas no la cobran.",
      },
      {
        titulo: "Visitar a la familia en el extranjero",
        detalle: "Pasajes para padres y abuelos que van a ver a sus hijos y nietos en España, Italia o Estados Unidos, con la carpeta de viaje lista.",
      },
      {
        titulo: "Seguro para mayores",
        detalle: "Seguros de viaje que aceptan pasajeros mayores de 70 años; te decimos por escrito qué cubre cada uno.",
      },
    ],
    pasos: [
      "Nos escribes (tú o un familiar) el destino, las fechas, cuántos viajan y si alguien necesita ayuda para caminar.",
      "Te enviamos opciones a un ritmo tranquilo, con lo que incluye cada una.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Destinos que más eligen",
    ejemplos: [
      { texto: "Paracas e Ica", href: "/destinos/paracas-ica-huacachina-nazca" },
      { texto: "Tarapoto", href: "/destinos/tarapoto-selva" },
      { texto: "Cusco", href: "/destinos/cusco-magico" },
      { texto: "Arequipa y el Colca", href: "/destinos/arequipa-colca" },
      { texto: "Punta Cana todo incluido", href: "/destinos/punta-cana" },
      { texto: "Cartagena (solo con DNI)", href: "/destinos/cartagena" },
      { texto: "Cruceros", href: "/cruceros" },
    ],
    faqs: [
      {
        q: "¿Hay un límite de edad para viajar?",
        a: "No. Las aerolíneas no ponen edad máxima. Lo que sí cambia con la edad es el seguro de viaje, por eso te cotizamos uno que acepte tu edad.",
      },
      {
        q: "¿Cusco es recomendable para adultos mayores?",
        a: "Sí, con calma: Cusco está a más de 3,300 metros de altura. Conviene consultar con tu médico antes de viajar, sobre todo si tienes problemas del corazón o de presión, y armamos un itinerario con descanso el primer día.",
      },
      {
        q: "¿Mi papá o mi mamá puede viajar solo?",
        a: "Sí. Pedimos la asistencia de la aerolínea en el aeropuerto y le damos la carpeta con su itinerario y documentos. Tú puedes hacer todo el trámite por WhatsApp desde Lima o desde el extranjero.",
      },
      {
        q: "¿Organizan viajes para asociaciones o clubes?",
        a: "Sí. El delegado nos escribe el destino y la cantidad de personas, y le damos una sola cotización para el grupo.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje para adultos mayores.",
    relacionados: [
      { texto: "Seguros de viaje", href: "/seguros" },
      { texto: "Carta de invitación para España", href: "/blog/carta-invitacion-espana-peru-requisitos" },
      { texto: "Tours en el Perú", href: "/tours" },
      { texto: "Traslados", href: "/traslados" },
    ],
  },
  visaAmericana: {
    ruta: "/visa-americana",
    h1: "Visa americana desde Perú: paso a paso y asesoría",
    tituloSeo: "Visa americana en Perú: pasos y costo 2026",
    descripcion:
      "Cómo sacar la visa americana de turismo (B1/B2) desde Perú: formulario DS-160, tasa de US$185, cita y entrevista en la Embajada en Lima. Te ayudamos paso a paso en Los Olivos.",
    intro:
      "La visa de turismo y negocios (B1/B2) es la que necesitas para Miami, Orlando, Nueva York o cualquier viaje a Estados Unidos. El trámite es tuyo ante la Embajada: nosotros te ayudamos a hacerlo bien, sin errores en el formulario y con la entrevista preparada.",
    queCotizamos: [
      { titulo: "Evaluación de tu perfil", detalle: "Revisamos tu trabajo, ingresos, familia y viajes anteriores para preparar tu caso." },
      { titulo: "Formulario DS-160", detalle: "Lo llenamos contigo en inglés, sin errores que te compliquen la entrevista." },
      { titulo: "Pago de la tasa y cita", detalle: "Te guiamos para pagar la tasa consular y agendar tu cita en el sistema oficial." },
      { titulo: "Simulacro de entrevista", detalle: "Practicamos las preguntas que más se hacen, para que llegues tranquilo." },
      { titulo: "Visa para toda la familia", detalle: "Un expediente coherente para padres e hijos que van a la misma cita." },
    ],
    pasos: [
      "Llenas el formulario DS-160 en línea, en inglés, con una foto digital reciente.",
      "Pagas la tasa consular de la visa B1/B2: US$185 por persona, que no se devuelve aunque te la nieguen.",
      "Agendas tu cita en el sistema oficial de citas de la Embajada de Estados Unidos en Lima.",
      "Vas a la entrevista en la Embajada (Santiago de Surco) con tu pasaporte, la confirmación del DS-160 y tus documentos de trabajo, ingresos y familia.",
      "Si te la aprueban, recoges tu pasaporte con la visa en el punto de entrega que elegiste.",
    ],
    ejemplosTitulo: "Cuando tengas tu visa",
    ejemplos: [
      { texto: "Paquetes a Orlando y Disney", href: "/paquetes-a-orlando-disney" },
      { texto: "Paquetes a Miami", href: "/paquetes-a-miami" },
      { texto: "Paquetes a Estados Unidos", href: "/paquetes-a-estados-unidos" },
      { texto: "Cancún sin visa mexicana", href: "/paquetes-a-cancun" },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta la visa americana?",
        a: "La tasa consular de la visa B1/B2 es de US$185 por persona y se paga antes de la cita. En 2025 Estados Unidos aprobó un cargo adicional de US$250, que a octubre de 2026 no tiene fecha de cobro confirmada: antes de pagar te confirmamos el monto vigente.",
      },
      {
        q: "¿Ustedes garantizan la visa o adelantan la cita?",
        a: "No. La decisión es solo del oficial consular y nadie puede garantizarla ni adelantar citas. Lo que hacemos es que tu formulario y tu entrevista estén bien preparados.",
      },
      {
        q: "¿Por cuánto tiempo dan la visa?",
        a: "A los peruanos normalmente se les da por 10 años y con varias entradas, pero el plazo lo decide el consulado en cada caso.",
      },
      {
        q: "¿La visa americana me sirve para otros países?",
        a: "Sí. Con visa americana vigente puedes entrar a México (Cancún) sin visa mexicana, y te ayuda en otros destinos. Te lo confirmamos al cotizar tu viaje.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero asesoría para sacar mi visa americana.",
    relacionados: [
      { texto: "Todas las visas", href: "/visas" },
      { texto: "Seguros de viaje", href: "/seguros" },
      { texto: "Pasajes Lima–Miami", href: "/vuelos/lima-miami" },
    ],
  },
  soloIdaEspana: {
    ruta: "/pasaje-solo-ida-a-espana",
    h1: "Pasaje solo de ida a España desde Lima",
    tituloSeo: "Pasaje solo de ida a España desde Lima",
    descripcion:
      "Pasaje solo de ida Lima–Madrid o Lima–Barcelona: qué te pueden pedir en migración, cuándo conviene el paquete migratorio y cuándo el ida y vuelta. Separa con el 50%.",
    intro:
      "Muchos peruanos viajan a España para quedarse un tiempo, estudiar o reunirse con su familia, y buscan solo la ida. Antes de comprar, conviene saber qué te pueden pedir al llegar: te explicamos las opciones y te cotizamos la que te sirve.",
    queCotizamos: [
      { titulo: "Solo el pasaje de ida", detalle: "Lima–Madrid o Lima–Barcelona, con la maleta que necesites." },
      { titulo: "Paquete migratorio", detalle: "Pasaje de ida emitido, reserva de regreso, hotel, seguro y check-in, con la carpeta de viaje armada." },
      { titulo: "Ida y vuelta con regreso emitido", detalle: "Para viajar con el boleto de vuelta a tu nombre y con fecha fija." },
      { titulo: "Seguro de viaje", detalle: "Seguro médico para el espacio Schengen, que te pueden pedir al llegar." },
    ],
    pasos: [
      "Nos escribes tu fecha, cuántos viajan y si vas de visita, a estudiar o a reunirte con tu familia.",
      "Te explicamos qué te pueden pedir en migración y te cotizamos las opciones por escrito.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Más para tu viaje a España",
    ejemplos: [
      { texto: "Paquete migratorio a España", href: "/espana" },
      { texto: "Qué es el retorno gestionado", href: "/retorno-gestionado-que-es" },
      { texto: "Qué te preguntan en migraciones", href: "/blog/que-preguntan-en-migraciones-espana-barajas" },
      { texto: "Bolsa de viaje: cuánto dinero llevar", href: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje" },
    ],
    faqs: [
      {
        q: "¿Puedo viajar a España solo con pasaje de ida?",
        a: "Los peruanos no necesitan visa para turismo de hasta 90 días, pero en migración te pueden pedir el boleto de vuelta. En el control de frontera te pueden pedir tu boleto de vuelta, y en España la norma (Orden PRE/1282/2007) dice que debe estar a tu nombre, ser intransferible y tener fecha fija. Por eso te explicamos cada opción antes de comprar.",
      },
      {
        q: "¿Qué incluye el paquete migratorio?",
        a: "Pasaje de ida emitido, reserva del vuelo de regreso (no es un boleto emitido), hotel, seguro y check-in. Si quieres viajar con el regreso emitido, te cotizamos ida y vuelta.",
      },
      {
        q: "¿Qué más me pueden pedir al llegar?",
        a: "Hotel o carta de invitación, dinero para tu estadía (la bolsa de viaje) y un seguro de viaje. Te armamos la carpeta para que la lleves ordenada.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un pasaje solo de ida a España.",
    relacionados: [
      { texto: "Pasajes a España", href: "/pasajes-a-espana" },
      { texto: "Pasaje ida y vuelta a España", href: "/pasaje-ida-y-vuelta-a-espana" },
      { texto: "Requisitos para viajar a España", href: "/viajes/requisitos-viajar-a-espana-desde-peru" },
    ],
  },
  idaVueltaEspana: {
    ruta: "/pasaje-ida-y-vuelta-a-espana",
    h1: "Pasaje ida y vuelta a España desde Lima",
    tituloSeo: "Pasaje ida y vuelta a España desde Lima",
    descripcion:
      "Pasajes ida y vuelta Lima–Madrid y Lima–Barcelona con el regreso emitido a tu nombre. Tarifas con maleta y con cambio de fecha. Separa con el 50%.",
    intro:
      "El pasaje ida y vuelta es la opción más tranquila para ir de vacaciones, visitar a tu familia o hacer turismo: el regreso queda emitido a tu nombre y con fecha fija, que es lo que te pueden pedir en migración.",
    queCotizamos: [
      { titulo: "Ida y vuelta Lima–Madrid", detalle: "Directo o con escala, con Iberia, Air Europa, LATAM o Plus Ultra según la fecha." },
      { titulo: "Ida y vuelta Lima–Barcelona", detalle: "Con escala en Madrid o directo con LEVEL desde junio de 2026." },
      { titulo: "Tarifa con cambio de fecha", detalle: "Si no estás seguro de tu fecha de regreso, una tarifa que permite cambiarla pagando la diferencia." },
      { titulo: "Maletas", detalle: "Tarifas con 1 o 2 maletas de 23 kg; te confirmamos por escrito lo que incluye." },
    ],
    pasos: [
      "Nos escribes tus fechas de ida y de vuelta y cuántos viajan.",
      "Te mandamos las opciones con aerolínea, escalas, maletas y condiciones de cambio.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Más para tu viaje a España",
    ejemplos: [
      { texto: "Pasajes Lima–Madrid", href: "/vuelos/lima-madrid" },
      { texto: "Pasajes Lima–Barcelona", href: "/vuelos/lima-barcelona" },
      { texto: "Paquetes turísticos a España", href: "/paquetes-a-espana" },
      { texto: "Equipaje por aerolínea", href: "/blog/equipaje-para-viajar-a-espana-iberia-air-europa-latam-plus-ultra" },
    ],
    faqs: [
      {
        q: "¿Puedo cambiar la fecha de regreso?",
        a: "Depende de la tarifa: algunas permiten cambiarla pagando una penalidad y la diferencia de precio, y las flexibles casi sin costo. Te lo detallamos antes de pagar.",
      },
      {
        q: "¿Cuál es la diferencia con el retorno gestionado?",
        a: "En el ida y vuelta el regreso es un boleto emitido a tu nombre. El retorno gestionado del paquete migratorio es una reserva del vuelo de regreso, no un boleto emitido.",
      },
      { q: "¿Cuánto cuesta?", a: "Cambia según la fecha: julio, agosto y diciembre son los meses más caros. Escríbenos con tus fechas y te damos el precio exacto." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un pasaje ida y vuelta a España.",
    relacionados: [
      { texto: "Qué es el retorno gestionado", href: "/retorno-gestionado-que-es" },
      { texto: "Pasaje solo de ida a España", href: "/pasaje-solo-ida-a-espana" },
      { texto: "España mes a mes", href: "/viajar-a-espana-en-enero" },
    ],
  },
  retornoGestionado: {
    ruta: "/retorno-gestionado-que-es",
    h1: "¿Qué es el retorno gestionado? ¿Es lo mismo que ida y vuelta?",
    tituloSeo: "Qué es el retorno gestionado: ¿es ida y vuelta?",
    descripcion:
      "El retorno gestionado es una reserva del vuelo de regreso, no un boleto emitido. Te explicamos la diferencia con el ida y vuelta, qué piden en migración en España y cuál te conviene.",
    intro:
      "Es la pregunta que más nos hacen: no, el retorno gestionado no es lo mismo que un pasaje ida y vuelta. Aquí te lo explicamos claro para que elijas bien antes de viajar.",
    queCotizamos: [
      { titulo: "Ida y vuelta", detalle: "Dos boletos emitidos a tu nombre: la ida y el regreso con fecha fija." },
      { titulo: "Retorno gestionado (paquete migratorio)", detalle: "Pasaje de ida emitido más una reserva del vuelo de regreso, que no es un boleto emitido." },
      { titulo: "Solo ida", detalle: "Solo el pasaje de ida, sin regreso." },
      { titulo: "Pasar de reserva a boleto", detalle: "Si ya compraste el paquete y quieres el regreso emitido, te cotizamos la diferencia." },
    ],
    pasos: [
      "Nos cuentas a qué vas a España y cuánto tiempo piensas quedarte.",
      "Te explicamos por escrito qué incluye cada opción y qué te pueden pedir en migración.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Compara las opciones",
    ejemplos: [
      { texto: "Pasaje ida y vuelta a España", href: "/pasaje-ida-y-vuelta-a-espana" },
      { texto: "Paquete migratorio a España", href: "/espana" },
      { texto: "Pasaje solo de ida a España", href: "/pasaje-solo-ida-a-espana" },
    ],
    faqs: [
      {
        q: "¿El retorno gestionado es un pasaje de vuelta?",
        a: "No. Es una reserva del vuelo de regreso, no un boleto emitido. Si quieres el regreso emitido a tu nombre, te cotizamos el pasaje de ida y vuelta.",
      },
      {
        q: "¿Qué me pueden pedir en migración en España?",
        a: "En el control de frontera te pueden pedir tu boleto de vuelta, y en España la norma (Orden PRE/1282/2007) dice que debe estar a tu nombre, ser intransferible y tener fecha fija. También te pueden pedir hotel o carta de invitación, dinero para tu estadía y un seguro de viaje.",
      },
      {
        q: "¿Cuál me conviene?",
        a: "Si vas de vacaciones o de visita y ya sabes cuándo vuelves, el ida y vuelta. Si quieres el paquete con hotel, seguro y carpeta de viaje armada, el migratorio. Te lo explicamos según tu caso.",
      },
      {
        q: "¿Puedo pasar del retorno gestionado a un boleto emitido?",
        a: "Sí. Te cotizamos el regreso emitido y lo cambiamos antes de tu viaje.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero saber la diferencia entre retorno gestionado e ida y vuelta.",
    relacionados: [
      { texto: "Qué te preguntan en migraciones", href: "/blog/que-preguntan-en-migraciones-espana-barajas" },
      { texto: "Requisitos para viajar a España", href: "/viajes/requisitos-viajar-a-espana-desde-peru" },
      { texto: "Pasajes a España", href: "/pasajes-a-espana" },
    ],
  },
  visaTrabajoEspana: {
    ruta: "/visa-de-trabajo-para-espana",
    h1: "Visa de trabajo para España desde Perú",
    tituloSeo: "Visa de trabajo para España desde Perú",
    descripcion:
      "Cómo trabajar legalmente en España siendo peruano: la oferta de trabajo, la autorización que pide el empleador y el visado en el Consulado. Te ayudamos con la carpeta y el pasaje.",
    intro:
      "Para trabajar legalmente en España necesitas que un empleador en España pida tu autorización de trabajo y, después, el visado en el Consulado de España en Lima. Te explicamos el camino y te armamos la carpeta y el viaje.",
    queCotizamos: [
      { titulo: "Orientación del trámite", detalle: "Te explicamos los pasos y los documentos según tu caso." },
      { titulo: "Carpeta de documentos", detalle: "Te ayudamos a ordenar lo que pide el Consulado para el visado." },
      { titulo: "Pasaje y seguro", detalle: "Cuando tengas el visado, te cotizamos el vuelo y el seguro." },
      { titulo: "Traducciones y apostillas", detalle: "Te decimos qué documentos las necesitan." },
    ],
    pasos: [
      "Un empleador en España te ofrece trabajo y pide tu autorización de residencia y trabajo.",
      "Con la autorización concedida, pides tu visado en el Consulado de España en Lima.",
      "Con el visado en tu pasaporte, viajas y tramitas tu tarjeta de residencia en España.",
    ],
    ejemplosTitulo: "Guías para tu viaje",
    ejemplos: [
      { texto: "Trabajar legalmente en España", href: "/blog/trabajar-legalmente-en-espana-desde-peru" },
      { texto: "Visa de estudios para España", href: "/visa-de-estudios-para-espana" },
      { texto: "Reagrupación familiar", href: "/blog/reagrupacion-familiar-espana-desde-peru" },
    ],
    faqs: [
      {
        q: "¿Puedo ir como turista y buscar trabajo allá?",
        a: "Como turista no puedes trabajar. Para trabajar legalmente necesitas la autorización que pide el empleador y el visado; te lo explicamos en nuestra guía.",
      },
      {
        q: "¿Los peruanos tienen alguna ventaja?",
        a: "Sí: para los peruanos el empleador no necesita demostrar que no encontró trabajadores en España (la llamada situación nacional de empleo), lo que facilita la autorización.",
      },
      { q: "¿Ustedes consiguen el trabajo?", a: "No. El contrato lo da un empleador en España; nosotros te orientamos con el trámite, la carpeta y el viaje." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero información sobre la visa de trabajo para España.",
    relacionados: [
      { texto: "Todas las visas", href: "/visas" },
      { texto: "Pasajes a España", href: "/pasajes-a-espana" },
      { texto: "Seguro de viaje para Europa", href: "/seguros" },
    ],
  },
  visaEstudiosEspana: {
    ruta: "/visa-de-estudios-para-espana",
    h1: "Visa de estudios para España desde Perú",
    tituloSeo: "Visa de estudios para España desde Perú",
    descripcion:
      "Visa de estudios para España desde Lima: matrícula, medios económicos, seguro médico y cita en el centro de visados. Te ayudamos con la carpeta, el pasaje y el seguro.",
    intro:
      "Si vas a estudiar en España más de 90 días necesitas la visa de estudios, que se pide en Lima antes de viajar. Te ayudamos a ordenar la carpeta y te cotizamos el pasaje y el seguro que piden.",
    queCotizamos: [
      { titulo: "Carpeta del visado", detalle: "Matrícula, medios económicos, seguro, alojamiento y certificados, ordenados como los piden." },
      { titulo: "Seguro médico", detalle: "Un seguro que cumpla lo que pide el Consulado para estudiantes." },
      { titulo: "Pasaje", detalle: "Con fecha de llegada antes del inicio de clases." },
      { titulo: "Reserva de alojamiento", detalle: "Si aún no tienes dónde vivir, te ayudamos con las primeras noches." },
    ],
    pasos: [
      "Consigues tu matrícula en un centro de estudios autorizado en España.",
      "Reúnes los documentos: matrícula, medios económicos, seguro médico y los certificados que te pidan.",
      "Pides tu cita y presentas la solicitud en el centro de visados en Lima, con tiempo antes de viajar.",
      "Con la visa aprobada, compras tu pasaje y viajas.",
    ],
    ejemplosTitulo: "Guías para tu viaje",
    ejemplos: [
      { texto: "Visa de estudios: guía completa", href: "/blog/visa-de-estudios-espana-desde-peru" },
      { texto: "Seguro de viaje para Europa", href: "/blog/seguro-schengen-30000-euros-peru-precio" },
      { texto: "Tu primer viaje a España", href: "/blog/viajar-a-espana-por-primera-vez-desde-peru" },
    ],
    faqs: [
      {
        q: "¿Cuánto dinero tengo que demostrar?",
        a: "Para estudiar se pide acreditar medios económicos por mes de estancia; el monto se fija cada año. En nuestra guía están las cifras vigentes y te las confirmamos al armar tu carpeta.",
      },
      {
        q: "¿Con cuánta anticipación lo pido?",
        a: "Con tiempo: el trámite toma semanas. Lo ideal es pedir la cita apenas tengas la matrícula.",
      },
      { q: "¿Puedo trabajar mientras estudio?", a: "La normativa española permite trabajar un número limitado de horas a la semana con la autorización de estudios. Te lo detallamos en nuestra guía." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero información sobre la visa de estudios para España.",
    relacionados: [
      { texto: "Visa de trabajo para España", href: "/visa-de-trabajo-para-espana" },
      { texto: "Todas las visas", href: "/visas" },
      { texto: "Pasajes a España", href: "/pasajes-a-espana" },
    ],
  },
  volverAPeru: {
    ruta: "/pasajes-de-espana-a-peru",
    h1: "Pasajes de España a Perú: volver a Lima",
    tituloSeo: "Pasajes de España a Perú: volver a Lima",
    descripcion:
      "Pasajes de Madrid, Barcelona y otras ciudades de España a Lima para visitar a tu familia, pasar las fiestas o volver al Perú. Compras desde España por WhatsApp y pagas con tarjeta o transferencia.",
    intro:
      "Si vives en España y quieres volver al Perú, de visita o para quedarte, te cotizamos el pasaje desde Madrid, Barcelona o tu ciudad. También puedes comprarle el pasaje a un familiar.",
    queCotizamos: [
      { titulo: "Madrid–Lima y Barcelona–Lima", detalle: "Directo o con escala, solo ida o ida y vuelta." },
      { titulo: "Desde otras ciudades de España", detalle: "Valencia, Málaga, Sevilla, Bilbao, Canarias, Baleares y más, con conexión en Madrid o Barcelona." },
      { titulo: "Para tu familiar", detalle: "Le compras el pasaje a tu mamá, papá o hijos, de Lima a España o de España a Lima." },
      { titulo: "Maletas extra", detalle: "Tarifas con 2 maletas de 23 kg para volver con todo." },
    ],
    pasos: [
      "Nos escribes por WhatsApp desde España con tu fecha y tu ciudad de salida.",
      "Te mandamos las opciones con aerolínea, escalas y maletas.",
      "Pagas con tarjeta o transferencia y recibes tu boleto por correo y WhatsApp.",
    ],
    ejemplosTitulo: "Pasajes desde España",
    ejemplos: [
      { texto: "Pasajes Madrid–Lima", href: "/vuelos/madrid-lima" },
      { texto: "Pasajes Barcelona–Lima", href: "/vuelos/barcelona-lima" },
      { texto: "Todas las ciudades de España", href: "/pasajes-a-espana" },
      { texto: "Navidad en Perú", href: "/viajar-a-espana-en-navidad" },
    ],
    faqs: [
      {
        q: "¿Puedo comprar desde España?",
        a: "Sí. Nos escribes por WhatsApp, pagas con tarjeta o transferencia y te enviamos el boleto. Atendemos en horario de Lima.",
      },
      {
        q: "¿Puedo comprarle el pasaje a un familiar en Perú?",
        a: "Sí. Nos pasas sus datos y su pasaporte, pagas desde España y tu familiar recibe su itinerario en Lima.",
      },
      {
        q: "¿Cuándo es más caro volver a Lima?",
        a: "En diciembre, por las fiestas, y en julio y agosto. Si puedes, compra con dos o tres meses de anticipación.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un pasaje de España a Lima.",
    relacionados: [
      { texto: "Traer a un familiar de visita", href: "/blog/traer-familiar-de-peru-a-espana-de-visita" },
      { texto: "Reagrupación familiar", href: "/blog/reagrupacion-familiar-espana-desde-peru" },
      { texto: "Pasajes a España", href: "/pasajes-a-espana" },
    ],
  },
  fullDays: {
    ruta: "/full-days",
    h1: "Full days desde Lima: paseos de un día",
    tituloSeo: "Full days desde Lima: paseos de un día",
    descripcion:
      "Paseos de un día saliendo de Lima: Paracas e Islas Ballestas, Huacachina, Lunahuaná, Churín y Caral. Para familias, amigos, colegios y empresas. Cotiza por WhatsApp.",
    intro:
      "¿Tienes un sábado o un feriado libre? Un full day es salir temprano de Lima, pasear todo el día y volver en la noche. Te cotizamos el paseo con transporte, guía y entradas, y te decimos por escrito lo que incluye antes de pagar.",
    queCotizamos: [
      { titulo: "Paracas e Islas Ballestas", detalle: "Lancha a las islas para ver lobos marinos y pingüinos, y la Reserva de Paracas." },
      { titulo: "Ica y Huacachina", detalle: "El oasis, paseo en tubulares por las dunas, sandboard y visita a bodegas de pisco." },
      { titulo: "Lunahuaná", detalle: "Canotaje en el río Cañete, bodegas de vino y pisco, y comida campestre." },
      { titulo: "Churín y Caral", detalle: "Baños termales en Churín o la ciudad más antigua de América en Caral." },
      { titulo: "Grupos, colegios y empresas", detalle: "Full days para promociones, aniversarios y días de integración, con una sola cotización." },
    ],
    pasos: [
      "Nos escribes el paseo que quieres, la fecha y cuántos van.",
      "Te enviamos la cotización con la hora de salida, lo que incluye y lo que no.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Si quieres quedarte más días",
    ejemplos: [
      { texto: "Paracas, Ica y Nazca", href: "/destinos/paracas-ica-huacachina-nazca" },
      { texto: "Oxapampa y Pozuzo", href: "/destinos/oxapampa-pozuzo-villa-rica-selva-central" },
      { texto: "Cusco, Montaña de 7 Colores y Humantay", href: "/destinos/cusco-montana-7-colores-humantay-5-dias" },
      { texto: "Máncora y Vichayito", href: "/destinos/mancora-vichayito" },
    ],
    faqs: [
      {
        q: "¿Qué es un full day?",
        a: "Un paseo de un solo día: sales temprano de Lima, haces el recorrido y regresas la misma noche, sin dormir fuera.",
      },
      {
        q: "¿Qué incluye?",
        a: "Depende del paseo. Normalmente el transporte desde Lima, un guía y las visitas del programa; las entradas, la lancha o la comida pueden estar incluidas o no. Siempre te lo detallamos por escrito.",
      },
      {
        q: "¿Pueden ir niños y adultos mayores?",
        a: "Sí. Cuéntanos quiénes van y te recomendamos el paseo más cómodo: algunos, como el tubular en las dunas, no son para todos.",
      },
      {
        q: "¿Hacen full days para grupos o empresas?",
        a: "Sí. Te damos una sola cotización para todo el grupo y emitimos boleta o factura electrónica.",
      },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un full day desde Lima.",
    relacionados: [
      { texto: "Feriados largos", href: "/feriados-largos" },
      { texto: "Tours en el Perú", href: "/tours" },
      { texto: "Viajes corporativos", href: "/empresas" },
      { texto: "Promociones escolares", href: "/colegios" },
    ],
  },
  feriados: {
    ruta: "/feriados-largos",
    h1: "Feriados largos 2026–2027: a dónde viajar desde Lima",
    tituloSeo: "Feriados largos 2026–2027: a dónde viajar",
    descripcion:
      "Los próximos feriados largos en el Perú (Navidad, Año Nuevo, Semana Santa, junio y Fiestas Patrias) y a dónde viajar desde Lima en cada uno. Reserva con tiempo.",
    intro:
      "En los feriados largos los pasajes y los hoteles se llenan primero. Aquí tienes los próximos feriados con sus fechas y a dónde ir en cada uno; mientras antes cotices, más opciones tienes.",
    queCotizamos: [
      {
        titulo: "Navidad: viernes 25 al domingo 27 de diciembre de 2026",
        detalle: "Tres días para Paracas, Ica o las playas del norte, o un full day en familia.",
      },
      {
        titulo: "Año Nuevo: viernes 1 al domingo 3 de enero de 2027",
        detalle: "Recibir el año en Máncora, Punta Cana, Cartagena o Cusco.",
      },
      {
        titulo: "Semana Santa: jueves 25 al domingo 28 de marzo de 2027",
        detalle: "Cuatro días: alcanzan para Cusco y Machu Picchu, Arequipa o Tarapoto.",
      },
      {
        titulo: "Junio: sábado 5 al lunes 7 de junio de 2027",
        detalle: "Fin de semana largo por el Día de la Bandera: Paracas, Lunahuaná u Oxapampa.",
      },
      {
        titulo: "Fiestas Patrias: miércoles 28 y jueves 29 de julio de 2027",
        detalle: "Vacaciones de medio año: es la fecha más pedida, conviene reservar con meses de anticipación.",
      },
    ],
    pasos: [
      "Nos escribes qué feriado te interesa, el destino y cuántos viajan.",
      "Te enviamos opciones con vuelo o bus, hotel y lo que incluye cada una.",
      ...PASOS_COMUNES_FINAL,
    ],
    ejemplosTitulo: "Destinos para un feriado largo",
    ejemplos: [
      { texto: "Cusco y Machu Picchu", href: "/destinos/cusco-machu-picchu-4-dias" },
      { texto: "Paracas, Ica y Nazca", href: "/destinos/paracas-ica-huacachina-nazca" },
      { texto: "Máncora y Vichayito", href: "/destinos/mancora-vichayito" },
      { texto: "Tarapoto", href: "/destinos/tarapoto-selva" },
      { texto: "Punta Cana", href: "/destinos/punta-cana" },
      { texto: "Cartagena", href: "/destinos/cartagena" },
    ],
    faqs: [
      {
        q: "¿Con cuánta anticipación debo reservar para un feriado?",
        a: "Para Año Nuevo, Semana Santa y Fiestas Patrias, lo ideal es cotizar con dos o tres meses de anticipación: los pasajes suben a medida que se acerca la fecha y los hoteles se llenan.",
      },
      { q: "¿Puedo separar mi viaje y pagar después?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar." },
      { q: "¿Y si solo tengo un día libre?", a: "Hacemos full days desde Lima: Paracas, Huacachina, Lunahuaná, Churín y más." },
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje para un feriado largo.",
    relacionados: [
      { texto: "Full days desde Lima", href: "/full-days" },
      { texto: "Cuándo comprar para Fiestas Patrias y Año Nuevo", href: "/blog/mejor-epoca-comprar-vuelos-fiestas-patrias-ano-nuevo" },
      { texto: "Viajes nacionales", href: "/nacionales" },
      { texto: "Hoteles", href: "/hoteles" },
    ],
  },
};
