import { formatoUSD } from "@/lib/formato-precio";
import { CIUDADES_ITALIA, type CiudadItalia } from "@/lib/italia/ciudades";
import { seccionTraslados } from "@/lib/italia/rutas-ida";
import {
  desdeItaliaLima,
  desdeItaliaLimaSoloIda,
  mesMasBarato,
  mesMasCaro,
  mesesItaliaLima,
  mesesItaliaLimaSoloIda,
} from "@/lib/italia/precios";
import type { LandingItalia, Seccion } from "@/lib/italia/tipos";

// Pasajes de Italia a Lima: peruanos que viven en Italia y vienen de visita (Navidad, Fiestas Patrias, vacaciones).
// Roma–Lima, Milán–Lima y Bari–Lima ya tienen su página en /vuelos/.

const ORIGENES = ["turin", "genova", "florencia", "venecia", "bolonia", "napoles", "pisa", "verona", "bergamo", "palermo", "catania"];

const ENLACES_REGRESO = [
  { texto: "Pasajes Roma–Lima", href: "/vuelos/roma-lima" },
  { texto: "Pasajes Milán–Lima", href: "/vuelos/milan-lima" },
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
  { texto: "Tours en Cusco y Machu Picchu", href: "/machu-picchu-tours" },
  { texto: "Viajes por el Perú", href: "/nacionales" },
];

export const SECCION_PERMESSO: Seccion = {
  id: "permesso",
  titulo: "Antes de viajar: revisa tu permesso di soggiorno",
  estilo: "aviso",
  texto: [
    "Para volver a Italia necesitas tu permesso di soggiorno vigente (o tu documento de ciudadano europeo) además del pasaporte. Revisa la fecha de vencimiento antes de comprar: si vence mientras estás en Perú, el regreso se complica.",
    "Si tu permesso está en renovación, consulta en tu Questura antes de viajar qué documento te permite volver a entrar.",
  ],
};

const FECHAS_LLENAS: Seccion = {
  id: "fechas",
  titulo: "Las fechas que se llenan primero",
  lista: [
    "Navidad y Año Nuevo: los vuelos de Italia a Lima de la segunda quincena de diciembre son los primeros en subir.",
    "Fiestas Patrias: la última semana de julio coincide con las vacaciones de verano en Italia.",
    "Agosto: en Italia casi todo cierra por Ferragosto y muchas familias viajan ese mes.",
    "Semana Santa: hay feriado en Perú y en Italia, y los precios suben unas semanas antes.",
  ],
};

function landingOrigen(c: CiudadItalia): LandingItalia {
  const meses = mesesItaliaLima(c.recargo);
  const precio = desdeItaliaLima(c.recargo);
  const barato = mesMasBarato(meses);
  const mensaje = `¡Hola Cityland Travel! Vivo en ${c.nombre} (Italia) y quiero cotizar un pasaje a Lima.`;
  return {
    slug: `pasajes-${c.slug}-lima`,
    grupo: "regreso",
    tituloSeo: `Pasajes de ${c.nombre} a Lima desde ${formatoUSD(precio)}`,
    descripcion: `Pasajes de ${c.nombre} a Lima ida y vuelta desde ${formatoUSD(precio)}: ${c.escalas.toLowerCase()}, ${c.tiempoTotal}. Precio por mes, fechas que se llenan y cómo llegar al aeropuerto de ${c.nombre}.`,
    h1: `Pasajes de ${c.nombre} a Lima`,
    bajada: `${c.comunidad ?? `Si vives en ${c.nombre}, vuelas a Lima con una conexión en Europa.`} Te cotizamos desde Lima y te mandamos el boleto por WhatsApp.`,
    migas: `${c.nombre}–Lima`,
    sello: "Volver a casa",
    foto: c.foto,
    fotoAlt: c.fotoAlt,
    precio,
    etiquetaPrecio: `Ida y vuelta saliendo de ${c.nombre}`,
    detallePrecio: `Mes más barato hoy: ${barato.mes.toLowerCase()}.`,
    mensaje,
    boton: "Cotizar mi vuelo a Lima",
    boleto: { de: c.iata, deNombre: c.nombre, a: "LIM", aNombre: "Lima" },
    tramos: [
      { ruta: `${c.nombre} → ${c.conexion}`, detalle: `Vuelo europeo desde ${c.aeropuerto}.`, duracion: "1 h 30 min a 2 h 30 min" },
      { ruta: `${c.conexion} → Lima`, detalle: `Vuelo transatlántico con ${c.aerolineas}. Llegas a Lima el mismo día, por la tarde o la noche.`, duracion: "12 h a 13 h" },
    ],
    meses,
    tituloMeses: `Precio ${c.nombre}–Lima por mes`,
    secciones: [
      FECHAS_LLENAS,
      { ...seccionTraslados(c), titulo: `Cómo llegar al aeropuerto de ${c.nombre}` },
      SECCION_PERMESSO,
    ],
    pregunta: `Vivo en ${c.nombre}. ¿Cuánto me sale ir a Lima en ${barato.mes.toLowerCase()} y volver un mes después?`,
    faqs: [
      { q: `¿Hay vuelo directo de ${c.nombre} a Lima?`, a: `No. Ninguna aerolínea vuela directo de Italia a Lima. Desde ${c.nombre} lo habitual es ${c.escalas.toLowerCase()} (${c.conexion}); el viaje toma ${c.tiempoTotal}.` },
      { q: `¿Cuánto cuesta el pasaje de ${c.nombre} a Lima?`, a: `Desde ${formatoUSD(precio)} ida y vuelta por persona. ${mesMasCaro(meses).mes} es el mes más caro y ${barato.mes.toLowerCase()} el más barato.` },
      { q: "¿Puedo pagar el pasaje desde Perú?", a: "Sí. Tu familia puede pagarlo en Lima, en nuestras oficinas de Los Olivos o por transferencia, y el boleto te llega a ti por WhatsApp o correo." },
      { q: "¿Puedo seguir hasta Cusco, Arequipa o Trujillo en el mismo boleto?", a: "Sí. Lo armamos hasta tu ciudad: pasas Migraciones y Aduanas en Lima y la maleta sigue hasta tu destino final." },
    ],
    enlaces: ENLACES_REGRESO,
  };
}

function tablaOrigenes(soloIda: boolean): Seccion {
  const lista = ["roma", "milan", ...ORIGENES].map((s) => CIUDADES_ITALIA[s]).filter(Boolean);
  const desde = soloIda ? desdeItaliaLimaSoloIda : desdeItaliaLima;
  return {
    id: "origenes",
    titulo: "Precio a Lima según tu aeropuerto en Italia",
    texto: ["Roma y Milán tienen más vuelos y suelen salir más baratos. Desde las demás ciudades sumas un tramo corto dentro de Europa."],
    tabla: { cab: ["Sales de", soloIda ? "Solo ida desde" : "Ida y vuelta desde", "Conexión habitual"], filas: lista.map((c) => [`${c.nombre} (${c.iata})`, `desde ${formatoUSD(desde(c.recargo))}`, c.conexion]) },
  };
}

function landingsTema(): LandingItalia[] {
  const roma = CIUDADES_ITALIA.roma;
  if (!roma) return [];
  const iv = mesesItaliaLima();
  const si = mesesItaliaLimaSoloIda();
  const base = { grupo: "regresoTema" as const, foto: roma.foto, fotoAlt: roma.fotoAlt, boleto: { de: "ITA", deNombre: "Italia", a: "LIM", aNombre: "Lima" }, enlaces: ENLACES_REGRESO };
  const pagos = { q: "¿Puedo pagar el pasaje desde Perú?", a: "Sí. Tu familia lo puede pagar en Lima, en Los Olivos o por transferencia, y el boleto te llega a Italia por WhatsApp o correo." };
  return [
    {
      ...base,
      slug: "pasajes-de-italia-a-peru",
      tituloSeo: `Pasajes de Italia a Perú desde ${formatoUSD(desdeItaliaLima())}`,
      descripcion: `Pasajes de Italia a Perú ida y vuelta desde ${formatoUSD(desdeItaliaLima())}: precio desde Roma, Milán, Turín, Florencia y 9 ciudades más, por mes. Pagas desde Lima.`,
      h1: "Pasajes de Italia a Perú",
      bajada: "Para peruanos que viven en Italia y vienen de visita: comparas aeropuertos y meses, y te cotizamos desde Lima.",
      migas: "Italia–Perú",
      sello: "Volver a casa",
      precio: desdeItaliaLima(),
      etiquetaPrecio: "Ida y vuelta saliendo de Roma",
      mensaje: "¡Hola Cityland Travel! Vivo en Italia y quiero cotizar un pasaje a Perú.",
      boton: "Cotizar mi pasaje a Perú",
      meses: iv,
      tituloMeses: "Precio Roma–Lima ida y vuelta por mes",
      secciones: [tablaOrigenes(false), FECHAS_LLENAS, SECCION_PERMESSO],
      pregunta: "Vivo en Italia. ¿Cuál es el mes más barato para ir a Perú?",
      faqs: [
        { q: "¿Hay vuelos directos de Italia a Perú?", a: "No. Todos los vuelos de Italia a Lima tienen al menos una escala, casi siempre en Madrid, Ámsterdam o París. El viaje completo toma entre 15 y 18 horas." },
        { q: "¿Cuál es el mes más barato?", a: `Hoy, ${mesMasBarato(iv).mes.toLowerCase()} (desde ${formatoUSD(mesMasBarato(iv).precio)} saliendo de Roma). Diciembre y julio son los más caros por Navidad y Fiestas Patrias.` },
        pagos,
      ],
    },
    {
      ...base,
      slug: "pasajes-de-italia-a-peru-solo-ida",
      tituloSeo: `Pasajes de Italia a Perú solo ida desde ${formatoUSD(desdeItaliaLimaSoloIda())}`,
      descripcion: `Pasajes solo ida de Italia a Perú desde ${formatoUSD(desdeItaliaLimaSoloIda())}: para quien vuelve a vivir a Perú o aún no tiene fecha de regreso. Precio por mes y por aeropuerto.`,
      h1: "Pasajes de Italia a Perú solo ida",
      bajada: "Si vuelves a vivir a Perú o todavía no sabes cuándo regresas a Italia, el solo ida suele salir más a cuenta que un ida y vuelta que no vas a usar.",
      migas: "Italia–Perú solo ida",
      sello: "Solo ida",
      precio: desdeItaliaLimaSoloIda(),
      etiquetaPrecio: "Solo ida saliendo de Roma",
      mensaje: "¡Hola Cityland Travel! Vivo en Italia y quiero cotizar un pasaje solo ida a Perú.",
      boton: "Cotizar solo ida",
      meses: si,
      tituloMeses: "Precio Roma–Lima solo ida por mes",
      secciones: [
        tablaOrigenes(true),
        {
          id: "cuando-conviene",
          titulo: "Cuándo te conviene el solo ida",
          lista: [
            "Vuelves a vivir a Perú y no piensas regresar pronto a Italia.",
            "Vienes por una emergencia familiar y no sabes cuánto tiempo te quedarás.",
            "Tu regreso a Italia lo comprarás después, cuando tengas la fecha.",
            "Viajas con mudanza: te decimos cuántas maletas incluye cada tarifa.",
          ],
        },
        SECCION_PERMESSO,
      ],
      pregunta: "Vuelvo a vivir a Perú. ¿Cuántas maletas puedo llevar en un solo ida desde Italia?",
      faqs: [
        { q: "¿Me piden pasaje de regreso para entrar a Perú?", a: "No si eres peruano: entras con tu DNI o pasaporte peruano y no necesitas pasaje de vuelta." },
        { q: "¿El solo ida es más caro que el ida y vuelta?", a: "A veces el solo ida cuesta más de la mitad del ida y vuelta. Te cotizamos los dos para que compares antes de decidir." },
        pagos,
      ],
    },
    {
      ...base,
      slug: "pasajes-de-italia-a-peru-ida-y-vuelta",
      tituloSeo: `Italia–Perú ida y vuelta desde ${formatoUSD(desdeItaliaLima())}`,
      descripcion: `Pasajes de Italia a Perú ida y vuelta desde ${formatoUSD(desdeItaliaLima())}: cuánto tiempo puedes quedarte, cambio de fecha y maletas. Para residentes en Italia que vienen de visita.`,
      h1: "Pasajes de Italia a Perú ida y vuelta",
      bajada: "Sales de Italia, pasas tus vacaciones en Perú y vuelves con el mismo boleto. Te ayudamos a elegir una tarifa que te deje quedarte el tiempo que necesitas.",
      migas: "Italia–Perú ida y vuelta",
      sello: "Ida y vuelta",
      precio: desdeItaliaLima(),
      etiquetaPrecio: "Ida y vuelta saliendo de Roma",
      mensaje: "¡Hola Cityland Travel! Vivo en Italia y quiero cotizar un pasaje ida y vuelta a Perú.",
      boton: "Cotizar ida y vuelta",
      meses: iv,
      tituloMeses: "Precio Roma–Lima ida y vuelta por mes",
      secciones: [
        {
          id: "que-revisar",
          titulo: "Lo que tienes que revisar en la tarifa",
          lista: [
            "Estadía máxima: algunas tarifas baratas te obligan a volver en pocas semanas; si te quedas dos o tres meses, elige una que lo permita.",
            "Cambio de fecha: pregunta cuánto cuesta mover el regreso si te quedas más tiempo.",
            "Maletas: las tarifas más baratas solo traen equipaje de mano; para ir con regalos conviene una con maleta de 23 kg.",
            "Tramo nacional: si tu familia está en provincia, súmalo al mismo boleto y la maleta llega hasta tu ciudad.",
          ],
          estilo: "tarjetas",
        },
        tablaOrigenes(false),
        SECCION_PERMESSO,
      ],
      pregunta: "Vivo en Italia y quiero quedarme dos meses en Perú. ¿Qué tarifa me conviene?",
      faqs: [
        { q: "¿Cuánto tiempo me puedo quedar en Perú con un ida y vuelta?", a: "Depende de la tarifa: las hay de pocas semanas hasta de 12 meses. Dinos cuánto tiempo quieres quedarte y te cotizamos solo las que lo permiten." },
        { q: "¿Puedo cambiar la fecha de regreso?", a: "Casi todas las tarifas permiten cambios pagando una penalidad más la diferencia de precio. Te decimos el costo antes de comprar." },
        pagos,
      ],
    },
    {
      ...base,
      slug: "pasajes-baratos-de-italia-a-peru",
      tituloSeo: "Pasajes baratos de Italia a Perú por mes",
      descripcion: `Cuándo salen más baratos los pasajes de Italia a Perú: precio por mes desde ${formatoUSD(mesMasBarato(iv).precio)}, qué aeropuerto conviene y qué fechas evitar.`,
      h1: "Pasajes baratos de Italia a Perú",
      bajada: "El precio cambia mucho según el mes y el aeropuerto de salida. Aquí ves cuándo conviene comprar y desde dónde sale más a cuenta.",
      migas: "Italia–Perú barato",
      sello: "Ahorra en tu viaje",
      precio: mesMasBarato(iv).precio,
      etiquetaPrecio: `Ida y vuelta en ${mesMasBarato(iv).mes.toLowerCase()}`,
      mensaje: "¡Hola Cityland Travel! Vivo en Italia y busco el pasaje más barato a Perú.",
      boton: "Buscar el más barato",
      meses: iv,
      tituloMeses: "Del mes más barato al más caro",
      secciones: [
        {
          id: "consejos",
          titulo: "Cómo pagar menos",
          lista: [
            `Viaja en ${mesMasBarato(iv).mes.toLowerCase()} o en los meses de temporada baja: la diferencia con diciembre puede pasar los ${formatoUSD(mesMasCaro(iv).precio - mesMasBarato(iv).precio)}.`,
            "Sal de Roma o Milán: tienen más vuelos que las demás ciudades y suelen ser más baratos.",
            "Cotiza con tiempo para Navidad y Fiestas Patrias: los asientos baratos se acaban primero.",
            "Si tienes fecha flexible, dinos el rango y buscamos el día más barato.",
          ],
          estilo: "tarjetas",
        },
        tablaOrigenes(false),
      ],
      pregunta: "Tengo fecha flexible. ¿Qué día sale más barato ir de Italia a Lima?",
      faqs: [
        { q: "¿Cuál es el mes más barato para viajar de Italia a Perú?", a: `Hoy, ${mesMasBarato(iv).mes.toLowerCase()}, desde ${formatoUSD(mesMasBarato(iv).precio)} ida y vuelta saliendo de Roma. El más caro es ${mesMasCaro(iv).mes.toLowerCase()}.` },
        { q: "¿Desde qué ciudad de Italia sale más barato?", a: "Casi siempre desde Roma o Milán, porque tienen más vuelos. Si vives lejos, compara el precio con el tren hasta esas ciudades." },
        pagos,
      ],
    },
  ];
}

export function landingsRegreso(): LandingItalia[] {
  const origenes = ORIGENES.map((s) => CIUDADES_ITALIA[s]).filter(Boolean).map(landingOrigen);
  return [...origenes, ...landingsTema()];
}
