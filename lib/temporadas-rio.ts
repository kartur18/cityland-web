import type { TemporadaEspana } from "@/lib/temporadas-espana";

// Páginas de Río de Janeiro con la misma plantilla que las temporadas de España. Carnaval 2027: Miércoles de Ceniza
// 10-feb-2027 (Pascua 28-mar). No vendemos entradas al Sambódromo: solo vuelo, hotel y traslados. 26-oct-2026.

const DOCUMENTOS = {
  q: "¿Qué documento necesito para ir a Brasil?",
  a: "Tu DNI vigente o tu pasaporte, sin visa. Te recomendamos viajar con un seguro de viaje.",
};
const PAGO = { q: "¿Puedo separar mi viaje?", a: "Sí. Separas con el 50% y pagas el resto antes de viajar." };
const FUERA = {
  miga: { nombre: "Paquetes a Brasil", href: "/paquetes-a-brasil" },
  destino: "Río de Janeiro",
  enlaces: [
    { texto: "Paquetes a Brasil", href: "/paquetes-a-brasil" },
    { texto: "Destinos solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" },
  ],
};

export const TEMPORADAS_RIO: Readonly<Record<"carnaval" | "cuandoIr", TemporadaEspana>> = {
  carnaval: {
    ruta: "/carnaval-de-rio-2027",
    h1: "Carnaval de Río de Janeiro 2027 desde Lima",
    tituloSeo: "Carnaval de Río 2027 desde Lima: fechas",
    descripcion:
      "Carnaval de Río de Janeiro 2027 del 6 al 9 de febrero: fechas, desfiles del Sambódromo, blocos en la calle, clima y cuándo comprar el vuelo y el hotel desde Lima. Viajas con DNI.",
    intro:
      "El Carnaval de Río es la fiesta más grande de Brasil. En 2027 cae a inicios de febrero, en pleno verano: es la semana más cara del año en Río, así que conviene organizar el viaje con tiempo.",
    fechas: [
      { cuando: "Enero y febrero", que: "Blocos: fiestas de calle gratuitas por toda la ciudad, desde semanas antes del Carnaval." },
      { cuando: "Sábado 6 al martes 9 de febrero de 2027", que: "Días de Carnaval. El Miércoles de Ceniza (10 de febrero) termina la fiesta." },
      { cuando: "Noches de Carnaval", que: "Desfiles de las escuelas de samba en el Sambódromo. Confirma el programa oficial antes de viajar." },
      { cuando: "Sábado 13 de febrero de 2027", que: "Desfile de las Campeonas: vuelven a desfilar las mejores escuelas." },
    ],
    clima:
      "Es verano: hace entre 30 y 35 °C de día, con mucha humedad y lluvias fuertes pero cortas en las tardes. Lleva ropa ligera, protector solar y una casaca impermeable delgada.",
    queHacer: [
      "Ir a los blocos de calle en Copacabana, Ipanema y el Centro.",
      "Ver los desfiles en el Sambódromo. Las entradas se compran en la venta oficial: nosotros te armamos el vuelo, el hotel y los traslados.",
      "Combinar el Carnaval con unos días de playa en Búzios después de la fiesta.",
    ],
    consejoCompra:
      "Compra el vuelo y el hotel con 4 a 6 meses de anticipación. En Carnaval muchos hoteles de Río piden una estadía mínima de varias noches y sus precios suben bastante; las noches siguientes, en Búzios, salen más baratas.",
    rutas: ["lima-rio-de-janeiro", "rio-de-janeiro-lima", "lima-sao-paulo"],
    destinos: [
      { texto: "Paquete a Río de Janeiro", href: "/destinos/rio-de-janeiro" },
      { texto: "Río de Janeiro y Búzios", href: "/destinos/rio-de-janeiro-buzios" },
      { texto: "Año Nuevo en Río", href: "/ofertas/ano-nuevo-reveillon-rio-de-janeiro-programa-oficial" },
      { texto: "Cuándo viajar a Río", href: "/cuando-viajar-a-rio-de-janeiro" },
    ],
    faqs: [
      {
        q: "¿Cuándo es el Carnaval de Río 2027?",
        a: "Los días de Carnaval van del sábado 6 al martes 9 de febrero de 2027; el Miércoles de Ceniza es el 10. Los blocos de calle empiezan semanas antes.",
      },
      {
        q: "¿Ustedes venden las entradas al Sambódromo?",
        a: "No. Las entradas se compran en la venta oficial del Carnaval. Nosotros te cotizamos el vuelo, el hotel, los traslados y el seguro.",
      },
      DOCUMENTOS,
      PAGO,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar vuelo y hotel para el Carnaval de Río 2027.",
    notaPrecio:
      "Precios referenciales del pasaje en temporada normal; en Carnaval suben. Te damos el precio exacto de tu fecha.",
    fuera: FUERA,
  },
  cuandoIr: {
    ruta: "/cuando-viajar-a-rio-de-janeiro",
    h1: "¿Cuándo viajar a Río de Janeiro desde Lima?",
    tituloSeo: "Cuándo viajar a Río de Janeiro: mejor época",
    descripcion:
      "La mejor época para viajar a Río de Janeiro desde Lima: clima mes a mes, temporada alta y baja, Carnaval, Año Nuevo y Fiestas Patrias. Pasajes y paquetes con DNI.",
    intro:
      "En Río hace calor casi todo el año, así que siempre hay playa. Lo que cambia es el precio y la cantidad de gente: el verano (diciembre a marzo) es lo más caro, y de abril a junio encuentras buen clima con precios más bajos.",
    fechas: [
      { cuando: "Diciembre a marzo · temporada alta", que: "Verano: mucho calor, lluvias cortas en las tardes, Año Nuevo y Carnaval. Es lo más caro." },
      { cuando: "Abril a junio · temporada baja", que: "Otoño: alrededor de 26 °C, menos turistas y mejores precios. Muy buena época para ir." },
      { cuando: "Julio y agosto · invierno suave", que: "Cerca de 24 °C y días soleados. Coincide con las vacaciones de medio año y Fiestas Patrias en el Perú, cuando suben los pasajes desde Lima." },
      { cuando: "Septiembre a noviembre · primavera", que: "Vuelve el calor, el mar se pone más agradable y los precios son intermedios." },
    ],
    clima:
      "Clima tropical: de día entre 24 °C en invierno y más de 30 °C en verano. En el verano llueve fuerte pero poco rato en las tardes; en invierno el agua del mar está más fría.",
    queHacer: [
      "Todo el año: Cristo Redentor, Pan de Azúcar, Copacabana, Ipanema y la Escalera de Selarón.",
      "Fin de año: el Réveillon (Año Nuevo) con fuegos artificiales en Copacabana.",
      "Febrero: el Carnaval y sus blocos de calle.",
    ],
    consejoCompra:
      "Para Año Nuevo, Carnaval o Fiestas Patrias, compra con 3 a 6 meses de anticipación. Si tus fechas son libres, abril, mayo y junio suelen tener los precios más bajos.",
    rutas: ["lima-rio-de-janeiro", "rio-de-janeiro-lima"],
    destinos: [
      { texto: "Paquete a Río de Janeiro", href: "/destinos/rio-de-janeiro" },
      { texto: "Río de Janeiro y Búzios", href: "/destinos/rio-de-janeiro-buzios" },
      { texto: "Carnaval de Río 2027", href: "/carnaval-de-rio-2027" },
      { texto: "Año Nuevo en Río", href: "/ofertas/ano-nuevo-reveillon-rio-de-janeiro-programa-oficial" },
    ],
    faqs: [
      {
        q: "¿Cuál es la mejor época para ir a Río?",
        a: "Si buscas buen clima y mejores precios, de abril a junio. Si quieres el ambiente del verano, Año Nuevo o Carnaval, de diciembre a marzo, pero es lo más caro.",
      },
      {
        q: "¿Se puede ir a la playa en julio?",
        a: "Sí. Es invierno, pero hace cerca de 24 °C y suele haber sol; el agua está más fría que en el verano.",
      },
      DOCUMENTOS,
      PAGO,
    ],
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje a Río de Janeiro.",
    notaPrecio: "Precios referenciales por persona; cambian según la fecha y la aerolínea. Te damos el precio exacto de tu fecha.",
    fuera: FUERA,
  },
};
