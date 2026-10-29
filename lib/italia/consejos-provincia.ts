// Lo propio de cada ciudad del Perú cuando el viaje es a Italia: cómo llegar a Lima a tiempo para la conexión.

export interface ConsejoProvincia {
  tramo: string;
  titulo: string;
  texto: string[];
  faq: { q: string; a: string };
}

export const CONSEJOS_PROVINCIA: Record<string, ConsejoProvincia> = {
  arequipa: {
    tramo: "Hay vuelos a Lima durante todo el día con LATAM, Sky y JetSMART.",
    titulo: "Vuela de Arequipa en la mañana",
    texto: [
      "Los vuelos de Lima a Europa salen por la tarde o la noche. Un vuelo de Arequipa en la mañana te deja en el Jorge Chávez con varias horas de margen, sin apuros si el primero se atrasa.",
      "Al regreso pasa lo contrario: los vuelos de Europa llegan a Lima de madrugada o temprano. Pide el Lima–Arequipa de media mañana para pasar Migraciones y Aduanas con calma.",
    ],
    faq: {
      q: "¿Me conviene comprar Arequipa–Lima aparte para ahorrar?",
      a: "Puede salir unos dólares menos, pero si el vuelo nacional se atrasa y pierdes el de Europa, la aerolínea no te reubica gratis. En un solo boleto la conexión queda protegida.",
    },
  },
  cusco: {
    tramo: "Los vuelos de Cusco a Lima salen sobre todo de mañana y al mediodía.",
    titulo: "Desde Cusco, sal temprano",
    texto: [
      "Los vuelos de Cusco a Lima se concentran en la mañana y el mediodía, y en temporada de lluvias (diciembre a marzo) los retrasos son más frecuentes. Toma el primero o el segundo vuelo del día para llegar con tiempo a la conexión de la noche.",
      "Si viajas con familia, cotiza el tramo Cusco–Lima junto con el de Europa: en un solo boleto las maletas van directo hasta Italia.",
    ],
    faq: {
      q: "¿Puedo hacer Cusco–Lima–Italia el mismo día?",
      a: "Sí, es lo más común. Sales de Cusco en la mañana, esperas unas horas en Lima y tomas el vuelo nocturno a Europa. Llegas a Italia al día siguiente por la tarde.",
    },
  },
  trujillo: {
    tramo: "También puedes llegar a Lima por carretera, en unas 9 horas de bus.",
    titulo: "Avión o bus hasta Lima",
    texto: [
      "Desde Trujillo mucha gente llega a Lima en bus para ahorrar el vuelo nacional. Si eliges el bus, llega a Lima el día anterior: un bus atrasado no espera al avión y el pasaje a Europa no se reprograma gratis.",
      "Con el vuelo Trujillo–Lima en el mismo boleto, la aerolínea se hace cargo si se atrasa, y tu maleta va directo hasta Italia.",
    ],
    faq: {
      q: "¿Me conviene ir en bus de Trujillo a Lima y volar desde ahí?",
      a: "Puede salir más barato, pero llegas cansado y sin respaldo si el bus se demora. Si vas en bus, viaja un día antes. Con el vuelo nacional en el mismo boleto, la conexión queda protegida.",
    },
  },
  chiclayo: {
    tramo: "Tiene menos vuelos diarios a Lima que Arequipa o Cusco.",
    titulo: "Pocas frecuencias: reserva con tiempo",
    texto: [
      "Chiclayo tiene menos vuelos al día hacia Lima, y en julio y diciembre se llenan primero. Cotiza el tramo nacional junto con el de Italia para asegurar los dos asientos al mismo tiempo.",
      "Al volver de Italia, en un solo boleto pasas Migraciones y Aduanas en Lima y tu maleta sigue hasta Chiclayo.",
    ],
    faq: {
      q: "¿Puedo regresar de Italia directo a Chiclayo?",
      a: "Sí, en un solo boleto Italia–Lima–Chiclayo. Pasas Migraciones y Aduanas en Lima y la maleta continúa hasta Chiclayo.",
    },
  },
  piura: {
    tramo: "Hay vuelos a Lima de LATAM, Sky y JetSMART varias veces al día.",
    titulo: "Piura o Talara, según dónde vivas",
    texto: [
      "Si vives cerca de Máncora o Talara, compara: a veces el vuelo de Talara a Lima te queda más cerca que ir hasta Piura. Te cotizamos los dos y eliges.",
      "Para la conexión a Europa, un vuelo de Piura antes del mediodía te deja con tiempo de sobra en Lima.",
    ],
    faq: {
      q: "¿Sale más barato viajar desde Piura o desde Talara?",
      a: "Depende de la fecha: Piura tiene más vuelos y casi siempre mejor precio, pero si vives en Máncora o Talara te ahorras el traslado. Te mandamos ambas opciones por escrito.",
    },
  },
  iquitos: {
    tramo: "Iquitos no tiene carretera a Lima: el vuelo nacional es la única forma rápida de llegar.",
    titulo: "Desde Iquitos, el vuelo nacional va en el mismo boleto",
    texto: [
      "Como a Iquitos solo se llega en avión o por río, el tramo a Lima es obligatorio. Ponlo en el mismo boleto que el vuelo a Italia: si se atrasa, la aerolínea te reubica sin costo.",
      "Los vuelos Iquitos–Lima duran cerca de 1 h 45 min. Elige uno que llegue a Lima al menos 4 horas antes del vuelo a Europa.",
    ],
    faq: {
      q: "¿Cuánto tiempo necesito entre el vuelo de Iquitos y el de Europa?",
      a: "Con un solo boleto, la aerolínea arma una conexión válida. Si los compras por separado, deja al menos 4 a 5 horas: tienes que recoger la maleta y volver a documentarla.",
    },
  },
  tacna: {
    tramo: "Tiene pocos vuelos diarios a Lima: se llenan rápido en temporada alta.",
    titulo: "Tacna: asegura primero el vuelo a Lima",
    texto: [
      "Tacna tiene pocas frecuencias a Lima. Cotiza los dos tramos juntos y separa apenas tengas la fecha: el asiento nacional suele acabarse antes que el de Europa.",
      "Si viajas por Fiestas Patrias o fin de año, reserva con dos o tres meses de anticipación.",
    ],
    faq: {
      q: "¿Se puede volar a Italia desde Tacna en un solo boleto?",
      a: "Sí. El boleto incluye Tacna–Lima y Lima–Italia. Haces el check-in una vez y tu maleta va directo hasta tu destino final.",
    },
  },
  juliaca: {
    tramo: "El aeropuerto de Juliaca atiende a Puno, a unos 45 minutos por carretera.",
    titulo: "Desde Puno, el vuelo sale de Juliaca",
    texto: [
      "Si vives en Puno, tu vuelo sale de Juliaca: calcula el traslado por carretera y llega al aeropuerto con dos horas de anticipación.",
      "Juliaca está a más de 3,800 metros de altura. Al volver de Italia, toma con calma el primer día.",
    ],
    faq: {
      q: "¿Puedo comprar Puno–Italia en un solo pasaje?",
      a: "Sí, el boleto sale desde Juliaca (JUL), el aeropuerto que atiende a Puno. Incluye el vuelo a Lima y la conexión a Italia.",
    },
  },
};
