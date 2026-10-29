// Ciudades de Italia de las landings de rutas: aeropuerto, cómo se conecta desde Lima, cómo llegar al centro
// y qué hacer. Los traslados salen de las webs oficiales de cada aeropuerto o transporte (consulta: 29-oct-2026).

export interface Traslado {
  medio: string;
  precio: string;
  tiempo: string;
}

export interface CiudadItalia {
  nombre: string;
  slug: string;
  iata: string;
  aeropuerto: string;
  region: string;
  foto: string;
  fotoAlt: string;
  // Por dónde se conecta normalmente desde Lima (no hay vuelos directos Lima–Italia).
  conexion: string;
  // Escalas típicas del viaje completo.
  escalas: string;
  aerolineas: string;
  // Lo que suma al ida y vuelta Lima–Roma, en US$.
  recargo: number;
  tiempoTotal: string;
  traslados: Traslado[];
  queHacer: string[];
  // Paquetes del mayorista de la región (slugs de /paquetes-turisticos).
  paquetes: string[];
  // Comunidad peruana: para las páginas de regreso a Lima.
  comunidad?: string;
}

export const CIUDADES_ITALIA: Record<string, CiudadItalia> = {
  roma: {
    nombre: "Roma",
    slug: "roma",
    iata: "FCO",
    aeropuerto: "el aeropuerto de Fiumicino",
    region: "Lacio",
    foto: "/images/destinos/roma.jpg",
    fotoAlt: "Coliseo de Roma",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 0,
    tiempoTotal: "15 a 18 horas",
    traslados: [
      {
        medio: "Tren Leonardo Express a Termini",
        precio: "14 €",
        tiempo: "32 min"
      },
      {
        medio: "Tren regional FL1 (Trastevere, Ostiense)",
        precio: "8 €",
        tiempo: "unos 30 min"
      }
    ],
    queHacer: [
      "Coliseo y Foro Romano: el corazón de la Roma antigua; compra la entrada con hora fija.",
      "Vaticano: Basílica de San Pedro, Museos Vaticanos y la Capilla Sixtina.",
      "Fontana di Trevi y Panteón: se recorren a pie por el centro histórico."
    ],
    paquetes: [
      "italia-en-tren-lacio-7-noches",
      "fly-y-drive-lacio-7-noches"
    ],
    comunidad: "Roma tiene una de las comunidades peruanas más grandes de Italia."
  },
  milan: {
    nombre: "Milán",
    slug: "milan",
    iata: "MXP",
    aeropuerto: "el aeropuerto de Malpensa",
    region: "Lombardía",
    foto: "/images/destinos/milan.webp",
    fotoAlt: "Catedral (Duomo) de Milán",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: -40,
    tiempoTotal: "15 a 18 horas",
    traslados: [
      {
        medio: "Tren Malpensa Express a Cadorna o Centrale",
        precio: "15 €",
        tiempo: "37 a 55 min"
      }
    ],
    queHacer: [
      "Duomo de Milán: sube a las terrazas del techo.",
      "La Última Cena de Leonardo: entradas con semanas de anticipación.",
      "Galería Vittorio Emanuele II y la Scala."
    ],
    paquetes: [
      "italia-en-tren-lombardia-7-noches",
      "salida-garantizada-lagos-del-norte-8-noches"
    ],
    comunidad: "Milán tiene la comunidad peruana más grande de Italia."
  },
  venecia: {
    nombre: "Venecia",
    slug: "venecia",
    iata: "VCE",
    aeropuerto: "el aeropuerto Marco Polo",
    region: "Véneto",
    foto: "/images/destinos/venecia.jpg",
    fotoAlt: "Gran Canal de Venecia",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 40,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Bus ATVO o ACTV línea 5 a Piazzale Roma",
        precio: "10 €",
        tiempo: "20 a 25 min"
      },
      {
        medio: "Lancha Alilaguna hasta San Marco",
        precio: "Tarifa vigente en la web del operador",
        tiempo: "60 a 90 min"
      }
    ],
    queHacer: [
      "Plaza San Marcos: la basílica, el campanario y el Palacio Ducal.",
      "Gran Canal en vaporetto: la línea 1 lo recorre entero, parada por parada.",
      "Puente de Rialto y su mercado de la mañana.",
      "Murano y Burano: las islas del vidrio soplado y de las casas de colores."
    ],
    paquetes: [
      "italia-en-tren-veneto-7-noches",
      "fly-y-drive-veneto-7-noches"
    ]
  },
  florencia: {
    nombre: "Florencia",
    slug: "florencia",
    iata: "FLR",
    aeropuerto: "el aeropuerto de Florencia (Peretola)",
    region: "Toscana",
    foto: "/images/destinos/florencia.jpg",
    fotoAlt: "Catedral de Florencia y la cúpula de Brunelleschi",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 60,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Tranvía T2 hasta Unità (estación Santa Maria Novella)",
        precio: "1,70 €",
        tiempo: "unos 20 min"
      }
    ],
    queHacer: [
      "Duomo y la cúpula de Brunelleschi: 463 escalones hasta la vista de toda la ciudad.",
      "Galería Uffizi: Botticelli, Leonardo y Miguel Ángel.",
      "Ponte Vecchio y el barrio de Oltrarno.",
      "Piazzale Michelangelo al atardecer."
    ],
    paquetes: [
      "italia-en-tren-toscana-7-noches",
      "fly-y-drive-toscana-7-noches"
    ],
    comunidad: "En Florencia y alrededores vive una comunidad peruana grande."
  },
  napoles: {
    nombre: "Nápoles",
    slug: "napoles",
    iata: "NAP",
    aeropuerto: "el aeropuerto de Capodichino",
    region: "Campania",
    foto: "/images/destinos/napoles.jpg",
    fotoAlt: "Bahía de Nápoles con el Vesubio",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 50,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Bus Alibus a la estación Garibaldi y al puerto",
        precio: "5 € (6 € comprado a bordo)",
        tiempo: "15 a 20 min"
      }
    ],
    queHacer: [
      "Centro histórico (Patrimonio de la Humanidad) y la pizza napolitana donde nació.",
      "Pompeya: a unos 40 minutos en el tren Circumvesuviana.",
      "Capri y la Costa Amalfitana en ferry desde el puerto.",
      "Museo Arqueológico Nacional, con los tesoros de Pompeya."
    ],
    paquetes: [
      "italia-en-tren-campania-7-noches",
      "fly-y-drive-costa-amalfitana-7-noches"
    ]
  },
  bolonia: {
    nombre: "Bolonia",
    slug: "bolonia",
    iata: "BLQ",
    aeropuerto: "el aeropuerto Guglielmo Marconi",
    region: "Emilia-Romaña",
    foto: "/images/destinos/bolonia.jpg",
    fotoAlt: "Plaza Mayor de Bolonia",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 50,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Tren Marconi Express a la estación central",
        precio: "12,80 €",
        tiempo: "unos 7 min"
      }
    ],
    queHacer: [
      "Las Dos Torres, símbolo de la ciudad.",
      "Los pórticos de Bolonia, Patrimonio de la Humanidad: calles techadas por todo el centro.",
      "Piazza Maggiore y la Basílica de San Petronio.",
      "Módena y Parma en tren: vinagre balsámico, jamón y parmesano."
    ],
    paquetes: [
      "italia-en-tren-emilia-romana-7-noches",
      "fly-y-drive-emilia-romana-7-noches"
    ]
  },
  turin: {
    nombre: "Turín",
    slug: "turin",
    iata: "TRN",
    aeropuerto: "el aeropuerto de Turín-Caselle",
    region: "Piamonte",
    foto: "/images/destinos/turin.jpg",
    fotoAlt: "Vista de Turín",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 60,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Tren a la estación Porta Susa",
        precio: "Tarifa vigente en la web del operador",
        tiempo: "unos 30 min, cada 30 min"
      }
    ],
    queHacer: [
      "Museo Egipcio, uno de los más importantes del mundo.",
      "Mole Antonelliana y el Museo del Cine.",
      "Palacio Real y las plazas con pórticos del centro."
    ],
    paquetes: [
      "italia-en-tren-piamonte-7-noches",
      "fly-y-drive-piamonte-7-noches"
    ],
    comunidad: "Turín es una de las ciudades italianas con más peruanos."
  },
  genova: {
    nombre: "Génova",
    slug: "genova",
    iata: "GOA",
    aeropuerto: "el aeropuerto Cristoforo Colombo",
    region: "Liguria",
    foto: "/images/destinos/genova.jpg",
    fotoAlt: "Puerto de Génova",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 80,
    tiempoTotal: "16 a 20 horas",
    traslados: [
      {
        medio: "Bus Volabus a las estaciones Principe y Brignole",
        precio: "Tarifa vigente en la web del operador",
        tiempo: "25 a 30 min"
      }
    ],
    queHacer: [
      "Acuario de Génova, en el puerto antiguo.",
      "Via Garibaldi y los palacios de los Rolli, Patrimonio de la Humanidad.",
      "Cinque Terre en tren regional por la costa."
    ],
    paquetes: [
      "italia-en-tren-liguria-7-noches",
      "fly-y-drive-liguria-7-noches"
    ],
    comunidad: "Génova tiene una comunidad peruana grande y antigua."
  },
  pisa: {
    nombre: "Pisa",
    slug: "pisa",
    iata: "PSA",
    aeropuerto: "el aeropuerto Galileo Galilei",
    region: "Toscana",
    foto: "/images/destinos/pisa.jpg",
    fotoAlt: "Torre inclinada de Pisa",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 60,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Tren Pisa Mover a Pisa Centrale",
        precio: "6,50 €",
        tiempo: "unos 5 min"
      }
    ],
    queHacer: [
      "Torre inclinada y Piazza dei Miracoli.",
      "Lucca y sus murallas, a media hora en tren.",
      "Florencia a una hora en tren regional."
    ],
    paquetes: [
      "italia-en-tren-toscana-7-noches",
      "fly-y-drive-toscana-7-noches"
    ]
  },
  bari: {
    nombre: "Bari",
    slug: "bari",
    iata: "BRI",
    aeropuerto: "el aeropuerto Karol Wojtyla",
    region: "Apulia",
    foto: "/images/destinos/bari.jpg",
    fotoAlt: "Costa de Bari",
    conexion: "Madrid o Roma",
    escalas: "1 o 2 escalas",
    aerolineas: "Iberia, Air Europa, LATAM o ITA",
    recargo: 90,
    tiempoTotal: "17 a 21 horas",
    traslados: [
      {
        medio: "Tren a la estación Bari Centrale",
        precio: "5,30 €",
        tiempo: "15 a 20 min"
      }
    ],
    queHacer: [
      "Bari Vecchia y la Basílica de San Nicolás.",
      "Alberobello y sus casas trulli, Patrimonio de la Humanidad.",
      "Polignano a Mare, sobre los acantilados.",
      "Matera y sus casas en la roca."
    ],
    paquetes: [
      "italia-en-tren-apulia-7-noches",
      "fly-y-drive-apulia-7-noches"
    ]
  },
  palermo: {
    nombre: "Palermo",
    slug: "palermo",
    iata: "PMO",
    aeropuerto: "el aeropuerto Falcone-Borsellino",
    region: "Sicilia",
    foto: "/images/destinos/palermo.jpg",
    fotoAlt: "Catedral de Palermo",
    conexion: "Madrid o Roma",
    escalas: "1 o 2 escalas",
    aerolineas: "Iberia, Air Europa, LATAM o ITA",
    recargo: 80,
    tiempoTotal: "17 a 21 horas",
    traslados: [
      {
        medio: "Tren Trinacria Express al centro",
        precio: "Tarifa vigente en la web del operador",
        tiempo: "50 a 60 min"
      },
      {
        medio: "Bus Prestia e Comandè",
        precio: "Tarifa vigente en la web del operador",
        tiempo: "45 a 55 min"
      }
    ],
    queHacer: [
      "Catedral y Capilla Palatina, con mosaicos árabe-normandos.",
      "Mercado de Ballarò y la comida callejera siciliana.",
      "Monreale y su catedral, a media hora.",
      "Playa de Mondello."
    ],
    paquetes: [
      "italia-en-tren-sicilia-7-noches",
      "fly-y-drive-viaje-siciliano-7-noches"
    ]
  },
  catania: {
    nombre: "Catania",
    slug: "catania",
    iata: "CTA",
    aeropuerto: "el aeropuerto de Catania (Fontanarossa)",
    region: "Sicilia",
    foto: "/images/destinos/catania.jpg",
    fotoAlt: "Catania con el Etna al fondo",
    conexion: "Madrid o Roma",
    escalas: "1 o 2 escalas",
    aerolineas: "Iberia, Air Europa, LATAM o ITA",
    recargo: 80,
    tiempoTotal: "17 a 21 horas",
    traslados: [
      {
        medio: "Bus Alibus a la estación central",
        precio: "4 €",
        tiempo: "unos 15 min"
      }
    ],
    queHacer: [
      "Volcán Etna: excursiones al cráter con guía.",
      "Via Etnea y la fuente del elefante.",
      "La Pescheria, el mercado de pescado de cada mañana.",
      "Taormina y su teatro griego, a 1 hora."
    ],
    paquetes: [
      "italia-en-tren-sicilia-7-noches",
      "fly-y-drive-viaje-siciliano-7-noches"
    ]
  },
  verona: {
    nombre: "Verona",
    slug: "verona",
    iata: "VRN",
    aeropuerto: "el aeropuerto Valerio Catullo",
    region: "Véneto",
    foto: "/images/destinos/verona.jpg",
    fotoAlt: "Arena de Verona",
    conexion: "Madrid, París o Ámsterdam",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM, Air France o KLM",
    recargo: 70,
    tiempoTotal: "16 a 19 horas",
    traslados: [
      {
        medio: "Bus Aerobus a la estación Porta Nuova",
        precio: "Tarifa vigente en la web del operador",
        tiempo: "unos 15 min, cada 20 min"
      }
    ],
    queHacer: [
      "Arena de Verona: anfiteatro romano con temporada de ópera en verano.",
      "Casa de Julieta y su balcón.",
      "Piazza delle Erbe.",
      "Lago de Garda, a menos de una hora."
    ],
    paquetes: [
      "italia-en-tren-veneto-7-noches",
      "fly-y-drive-veneto-7-noches"
    ]
  },
  bergamo: {
    nombre: "Bérgamo",
    slug: "bergamo",
    iata: "BGY",
    aeropuerto: "el aeropuerto de Orio al Serio",
    region: "Lombardía",
    foto: "/images/destinos/bergamo.jpg",
    fotoAlt: "Ciudad Alta de Bérgamo",
    conexion: "Madrid o Barcelona, con el tramo europeo en aerolínea de bajo costo",
    escalas: "1 escala",
    aerolineas: "Iberia, Air Europa, LATAM o LEVEL hasta España",
    recargo: 60,
    tiempoTotal: "16 a 20 horas",
    traslados: [
      {
        medio: "Bus ATB línea 1 a Bérgamo",
        precio: "2,60 €",
        tiempo: "15 a 20 min"
      },
      {
        medio: "Bus a Milano Centrale",
        precio: "5 a 14 € según operador",
        tiempo: "50 a 60 min"
      }
    ],
    queHacer: [
      "Città Alta: sube en funicular a la ciudad amurallada.",
      "Piazza Vecchia y la Capilla Colleoni.",
      "Milán a una hora en bus o tren."
    ],
    paquetes: [
      "italia-en-tren-lombardia-7-noches",
      "fly-y-drive-lombardia-7-noches"
    ]
  }
};
