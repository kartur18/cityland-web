import { IMG_AEROPUERTO_INTERNACIONAL, IMG_AVION_ALA } from "@/lib/imagenes-destinos";
import { PRECIO_SOLO_IDA_TOPE_CERCANO } from "@/lib/precios-solo-ida";
import { PROVINCIAS } from "@/lib/landings-espana-provincias";
import { CIUDADES_ESPANA } from "@/lib/ciudades-espana";
import { AVISO_TURISMO, DETALLE, ENLACES_BASE, QUIENES, RUTA_SOLO_IDA, SECCION, base, og, usd } from "@/lib/solo-ida-comun";
import type { LandingEspana } from "@/lib/landings-espana-tipos";

// Solo ida, segunda parte: desde cada ciudad del Perú (vía Lima), a cada ciudad de España y por aerolínea.

// Las 15 ciudades con más vuelos a Lima (Jaén y Huánuco tienen muy pocos para una página de solo ida).
const ORIGENES = PROVINCIAS.filter((p) => p.slug !== "jaen" && p.slug !== "huanuco");

// El tramo nacional solo de ida suma más o menos la mitad de lo que suma en el ida y vuelta.
const recargoNacional = (recargoIdaVuelta: number) => Math.round(recargoIdaVuelta / 2 / 10) * 10;

function origenes(hoy: string): LandingEspana[] {
  const { desde, urgencia } = base(hoy);
  return ORIGENES.map((p) => {
    const recargo = recargoNacional(p.recargo);
    const precio = desde + recargo;
    const slug = `${p.slug}-madrid`;
    return {
      slug,
      ruta: `${RUTA_SOLO_IDA}/${slug}`,
      ogImagen: og(slug),
      seccion: SECCION,
      tema: "soloOrigen",
      tituloSeo: `Pasaje solo ida ${p.ciudad}–Madrid vía Lima`,
      descripcion: `Pasaje solo ida de ${p.ciudad} a Madrid con conexión en Lima, en un solo boleto y con tu maleta hasta Barajas. Desde ${usd(precio)} para residentes, reagrupación y estudiantes.`,
      migas: `Solo ida ${p.ciudad}–Madrid`,
      sello: `${p.ciudad} → Lima → Madrid`,
      h1: `Solo ida de ${p.ciudad} a Madrid`,
      bajada: `Vives en ${p.ciudad} y tienes tu residencia, tu visado o tu pasaporte europeo listos. Te armamos ${p.ciudad}–Lima–Madrid en un solo boleto, con tu maleta despachada hasta España.`,
      chips: ["Un solo boleto", "Maleta hasta Madrid", "Desde " + usd(precio)],
      foto: p.foto,
      fotoAlt: p.fotoAlt,
      etiquetaPrecio: `${p.ciudad}–Madrid, solo ida desde`,
      precio,
      detallePrecio: DETALLE,
      calendario: { origen: p.ciudad, destino: "Madrid", recargo },
      boton: "Cotizar mi solo ida",
      mensaje: `¡Hola Cityland Travel! Quiero un pasaje solo ida de ${p.ciudad} a Madrid.`,
      pregunta: `Salgo de ${p.ciudad} y me mudo a España: ¿cuántas maletas puedo llevar hasta Madrid?`,
      ctaMedio: {
        titulo: `¿Llevas mucha maleta desde ${p.ciudad}?`,
        texto: "En un solo boleto la despachas en tu ciudad y la recoges en Madrid. Te cotizamos la tarifa con 2 maletas de 23 kg.",
        boton: "Cotizar con 2 maletas",
        mensaje: `¡Hola Cityland Travel! Quiero un solo ida de ${p.ciudad} a Madrid con 2 maletas.`,
      },
      urgencia: `${p.urgencia} ${urgencia}`,
      puntosTitulo: `Tu solo ida desde ${p.ciudad}`,
      puntos: [
        { t: "Un solo boleto", d: `Con ${p.ciudad}–Lima–Madrid en la misma reserva, si se retrasa el vuelo nacional la aerolínea te reacomoda sin costo.` },
        p.consejo,
        { t: "Sales del Perú en Lima", d: "La salida del Perú la registras en el Jorge Chávez, antes de embarcar a Madrid. Ten tu pasaporte y tu documento de residencia a la mano." },
        { t: "Quién viaja solo de ida", d: "Residentes con TIE, reagrupación familiar, estudiantes con visado y pasaporte español o europeo." },
      ],
      listaTitulo: "Lo que llevas",
      lista: ["Pasaporte vigente", "Tu TIE, tu visado o tu pasaporte español o europeo", "Tu DNI para el vuelo nacional", "El nombre del boleto igual al del pasaporte"],
      tabla: {
        titulo: "Tu viaje, tramo por tramo",
        columnas: ["Tramo", "Duración aproximada", "Dónde"],
        filas: [
          [`${p.ciudad} → Lima`, p.duracion, `${p.codigo} → LIM, vuelo nacional`],
          ["Conexión en Lima", "De 3 a 6 horas", "Aeropuerto Jorge Chávez"],
          ["Lima → Madrid", "Unas 12 horas", "LIM → MAD, vuelo directo"],
        ],
        nota: "Las horas exactas dependen de la aerolínea y de tu fecha.",
      },
      aviso: AVISO_TURISMO,
      faqs: [
        p.faqExtra,
        {
          q: `¿Cuánto cuesta el solo ida de ${p.ciudad} a Madrid?`,
          a: `Desde ${usd(precio)} por persona en los meses lejanos; en la fecha cercana puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO + recargo)}.`,
        },
        { q: "¿Mi maleta llega directo a Madrid?", a: "Sí, si los dos vuelos van en el mismo boleto. La recoges recién en Barajas." },
      ],
      enlaces: [...ENLACES_BASE, { href: `/espana/pasajes-${p.slug}-madrid`, texto: `Ida y vuelta ${p.ciudad}–Madrid` }],
    };
  });
}

function destinos(hoy: string): LandingEspana[] {
  const { desde, urgencia } = base(hoy);
  return CIUDADES_ESPANA.map((c) => {
    // Sin dato de mercado del tramo final, se muestra el precio hasta Madrid y el resto se cotiza aparte.
    const conDato = c.recargoSoloIda !== undefined;
    const recargo = c.recargoSoloIda ?? 0;
    const precio = desde + recargo;
    const hasta = conDato ? c.ciudad : "Madrid";
    const slug = `lima-${c.slug}`;
    return {
      slug,
      ruta: `${RUTA_SOLO_IDA}/${slug}`,
      ogImagen: og(slug),
      seccion: SECCION,
      tema: "soloDestino",
      tituloSeo: `Pasaje solo ida Lima–${c.ciudad}`,
      descripcion: `Pasaje solo ida de Lima a ${c.ciudad} para residentes, reagrupación, estudiantes y pasaporte europeo: cómo llegar desde Madrid y consulado. Desde ${usd(precio)}.`,
      migas: `Solo ida a ${c.ciudad}`,
      sello: `Lima → ${c.ciudad} · Solo ida`,
      h1: `Solo ida de Lima a ${c.ciudad}`,
      bajada: `Te vas a vivir a ${c.ciudad} o vuelves a tu casa allá. Te vendemos el pasaje solo ida desde Lima y te contamos cómo llegar desde Madrid y lo que tienes cerca al llegar.`,
      chips: ["Solo ida", `Hasta ${c.ciudad}`, c.region],
      foto: c.foto,
      fotoAlt: c.fotoAlt,
      etiquetaPrecio: `Lima–${hasta}, solo ida desde`,
      precio,
      detallePrecio: conDato ? DETALLE : `Hasta Madrid; el tramo a ${c.ciudad} te lo cotizamos según tu fecha. Precio referencial.`,
      calendario: { origen: "Lima", destino: hasta, recargo },
      boton: "Cotizar mi solo ida",
      mensaje: `¡Hola Cityland Travel! Quiero un pasaje solo ida de Lima a ${c.ciudad}.`,
      pregunta: `Me mudo a ${c.ciudad}: ¿me conviene volar hasta allá o bajar en Madrid y seguir en tren?`,
      ctaMedio: {
        titulo: `¿Avión o tren hasta ${c.ciudad}?`,
        texto: "Depende de tu maleta y de la hora a la que llegas a Madrid. Cuéntanos y te decimos qué te conviene.",
        boton: "Elegir con mi asesora",
        mensaje: `¡Hola Cityland Travel! Me mudo a ${c.ciudad}. ¿Me conviene volar hasta allá o ir en tren desde Madrid?`,
      },
      urgencia: `${c.temporada} ${urgencia}`,
      puntosTitulo: `Llegar a ${c.ciudad}`,
      puntos: [
        { t: "Primero, Lima–Madrid", d: `Los vuelos de Lima llegan a Madrid-Barajas en unas 12 horas; de ahí sigues a ${c.ciudad}.` },
        c.llegada,
        { t: "Consulado del Perú", d: c.consulado },
        { t: "Al llegar", d: "Empadrónate en el ayuntamiento donde vas a vivir y pide cita para tu TIE o tu certificado de registro si te corresponde." },
      ],
      listaTitulo: "Quiénes pueden viajar solo de ida",
      lista: QUIENES,
      tabla: {
        titulo: `Cómo llegar a ${c.ciudad}`,
        columnas: ["Cómo", "Tiempo aproximado", "Lo que tienes que saber"],
        filas: c.tramos.map((t) => [t.como, t.tiempo, t.nota]),
        nota: `Aeropuerto de ${c.ciudad}: ${c.aeropuerto}.`,
      },
      aviso: AVISO_TURISMO,
      faqs: [
        {
          q: `¿Cuánto cuesta el solo ida de Lima a ${c.ciudad}?`,
          a: conDato
            ? `Desde ${usd(precio)} por persona en los meses lejanos, con impuestos.`
            : `Hasta Madrid, desde ${usd(precio)} por persona. El tramo a ${c.ciudad} (avión o tren) te lo cotizamos según tu fecha.`,
        },
        { q: `¿Hay consulado del Perú en ${c.ciudad}?`, a: c.consulado },
        { q: "¿Qué trámite hago al llegar?", a: "Depende de tu caso: TIE si vienes con visado, certificado de registro si tienes pasaporte europeo y, en todos los casos, el empadronamiento." },
      ],
      enlaces: ENLACES_BASE,
    };
  });
}

interface Aerolinea {
  nombre: string;
  slug: string;
  destino: string;
  datos: { t: string; d: string }[];
  filas: string[][];
  faq: { q: string; a: string };
  foto: string;
  fotoAlt: string;
}

// Datos de las rutas al 28-oct-2026 (horarios de invierno). Lo que no se pudo confirmar se cotiza por fecha.
const AEROLINEAS: Aerolinea[] = [
  {
    nombre: "Iberia",
    slug: "iberia",
    destino: "Madrid",
    datos: [
      { t: "Vuelo directo con Airbus A350", d: "Iberia vuela Lima–Madrid sin escalas y llega a la T4 de Barajas." },
      { t: "La maleta depende de la tarifa", d: "La tarifa más básica no incluye maleta facturada; las siguientes traen 1 maleta de 23 kg. Te cotizamos la que te sirve." },
      { t: "Conexión en Madrid", d: "Si sigues a otra ciudad de España, Iberia te lleva desde la misma T4 con tu maleta despachada hasta el final." },
    ],
    filas: [["Avión", "Airbus A350"], ["Llega a", "Terminal T4 de Barajas"], ["Maleta", "Según la tarifa (desde 0 hasta 1 o 2 de 23 kg)"]],
    faq: { q: "¿Iberia incluye maleta a Madrid?", a: "Depende de la tarifa: la más básica no incluye maleta facturada. Te mostramos las tarifas con maleta para comparar." },
    foto: IMG_AVION_ALA,
    fotoAlt: "Ala de avión sobre las nubes",
  },
  {
    nombre: "LATAM",
    slug: "latam",
    destino: "Madrid",
    datos: [
      { t: "Un vuelo diario de noche", d: "LATAM sale de Lima a las 23:00 y llega a Madrid a las 16:20 del día siguiente, en Boeing 787." },
      { t: "Llega a la T4", d: "Comparte terminal con Iberia, que también vende este vuelo en código compartido." },
      { t: "Ideal desde provincias", d: "LATAM vuela a casi todas las ciudades del Perú: te armamos tu vuelo nacional y el de Madrid en un solo boleto." },
    ],
    filas: [["Horario", "Sale 23:00, llega 16:20 (desde el 24-oct-2026)"], ["Avión", "Boeing 787"], ["Frecuencia", "Diaria"]],
    faq: { q: "¿A qué hora sale el vuelo de LATAM a Madrid?", a: "En el horario de invierno 2026-2027, a las 23:00 de Lima, con llegada a Madrid a las 16:20 del día siguiente." },
    foto: IMG_AEROPUERTO_INTERNACIONAL,
    fotoAlt: "Sala de un aeropuerto internacional",
  },
  {
    nombre: "Air Europa",
    slug: "air-europa",
    destino: "Madrid",
    datos: [
      { t: "Varios vuelos por semana", d: "Air Europa vuela Lima–Madrid directo, en unas 12 horas." },
      { t: "Tarifa con o sin maleta", d: "La tarifa Lite no incluye maleta facturada; la Standard y la Flex traen 1 maleta de 23 kg." },
      { t: "Conexiones en España", d: "Desde Madrid conecta con Barcelona, Valencia, Málaga, Bilbao, Palma y otras ciudades." },
    ],
    filas: [["Frecuencia", "Varios vuelos por semana"], ["Maleta", "Lite sin maleta; Standard y Flex con 1 de 23 kg"], ["Conexiones", "A las principales ciudades de España"]],
    faq: { q: "¿Air Europa incluye maleta a Madrid?", a: "La tarifa Lite no incluye maleta facturada; la Standard y la Flex incluyen 1 de 23 kg." },
    foto: "/images/espana/puerta-de-alcala.jpg",
    fotoAlt: "Puerta de Alcalá, Madrid",
  },
  {
    nombre: "Plus Ultra",
    slug: "plus-ultra",
    destino: "Madrid",
    datos: [
      { t: "6 vuelos por semana", d: "Desde el 25 de octubre de 2026 vuela lunes, miércoles, jueves, viernes, sábado y domingo, con salida de Lima a las 18:10." },
      { t: "Airbus A330", d: "Vuelo directo Lima–Madrid en un Airbus A330-200." },
      { t: "Buena opción de precio", d: "Suele tener tarifas competitivas en la ruta. Te la comparamos con las demás aerolíneas en tu fecha." },
    ],
    filas: [["Frecuencia", "6 por semana (todos los días menos martes)"], ["Sale de Lima", "18:10"], ["Avión", "Airbus A330-200"]],
    faq: { q: "¿Qué días vuela Plus Ultra a Madrid?", a: "En el horario de invierno 2026-2027, todos los días menos los martes, con salida a las 18:10." },
    foto: "/images/espana/cibeles.jpg",
    fotoAlt: "Palacio de Cibeles, Madrid",
  },
  {
    nombre: "LEVEL",
    slug: "level",
    destino: "Barcelona",
    datos: [
      { t: "Directo Lima–Barcelona", d: "LEVEL, del mismo grupo que Iberia, empezó a volar directo de Lima a Barcelona en junio de 2026." },
      { t: "Unos 3 vuelos por semana", d: "Al empezar voló miércoles, viernes y domingo. Te confirmamos los días de tu fecha." },
      { t: "Tarifas de bajo costo", d: "Es una aerolínea de bajo costo: la maleta y la comida pueden ir aparte. Te cotizamos con lo que vas a llevar." },
    ],
    filas: [["Ruta", "Lima–Barcelona sin escalas"], ["Desde", "Junio de 2026"], ["Frecuencia", "Unos 3 vuelos por semana"]],
    faq: { q: "¿LEVEL incluye maleta?", a: "Depende de la tarifa: al ser de bajo costo, la maleta suele ir aparte. Te la sumamos en la cotización." },
    foto: "/images/espana/palacio-real.jpg",
    fotoAlt: "Palacio Real de Madrid",
  },
];

function aerolineas(hoy: string): LandingEspana[] {
  const { desde, urgencia } = base(hoy);
  return AEROLINEAS.map((a) => {
    const slug = `aerolinea-${a.slug}`;
    return {
      slug,
      ruta: `${RUTA_SOLO_IDA}/${slug}`,
      ogImagen: og(slug),
      seccion: SECCION,
      tema: "soloAerolinea",
      tituloSeo: `Solo ida Lima–${a.destino} con ${a.nombre}`,
      descripcion: `Pasaje solo ida Lima–${a.destino} con ${a.nombre}: horario, avión y maleta. Desde ${usd(desde)} para residentes, reagrupación, estudiantes y pasaporte europeo.`,
      migas: `Solo ida con ${a.nombre}`,
      sello: `Lima → ${a.destino} · ${a.nombre}`,
      h1: `Solo ida Lima–${a.destino} con ${a.nombre}`,
      bajada: `Prefieres volar con ${a.nombre}. Te cotizamos su solo ida Lima–${a.destino} y lo comparamos con las demás aerolíneas en tu fecha, con la maleta que de verdad vas a llevar.`,
      chips: [a.nombre, "Vuelo directo", "Desde " + usd(desde)],
      foto: a.foto,
      fotoAlt: a.fotoAlt,
      etiquetaPrecio: `Lima–${a.destino}, solo ida desde`,
      precio: desde,
      detallePrecio: "Solo ida con impuestos, en la aerolínea que tenga ese precio en tu fecha. Precio referencial.",
      calendario: { origen: "Lima", destino: a.destino, recargo: 0 },
      boton: `Cotizar con ${a.nombre}`,
      mensaje: `¡Hola Cityland Travel! Quiero un pasaje solo ida Lima–${a.destino} con ${a.nombre}.`,
      pregunta: `¿Qué tarifa de ${a.nombre} trae maleta y cuánto sale solo ida a ${a.destino}?`,
      ctaMedio: {
        titulo: `¿${a.nombre} o la más barata?`,
        texto: "Te mandamos el precio de esta aerolínea y el de la más barata en tu fecha, para que elijas.",
        boton: "Comparar aerolíneas",
        mensaje: `¡Hola Cityland Travel! Quiero comparar ${a.nombre} con las demás aerolíneas para un solo ida a ${a.destino}.`,
      },
      urgencia,
      puntosTitulo: `Volar con ${a.nombre}`,
      puntos: a.datos,
      listaTitulo: "Quiénes pueden viajar solo de ida",
      lista: QUIENES,
      tabla: { titulo: `${a.nombre} en la ruta Lima–${a.destino}`, columnas: ["Dato", a.nombre], filas: a.filas, nota: "Horarios de invierno 2026-2027; pueden cambiar. Te confirmamos los de tu fecha." },
      aviso: AVISO_TURISMO,
      faqs: [a.faq, { q: `¿Cuánto cuesta el solo ida con ${a.nombre}?`, a: `Desde ${usd(desde)} por persona en los meses lejanos, si hay asientos a ese precio en tu fecha.` }],
      enlaces: ENLACES_BASE,
    };
  });
}

export function landingsSoloIdaB(hoy: string): LandingEspana[] {
  return [...origenes(hoy), ...destinos(hoy), ...aerolineas(hoy)];
}
