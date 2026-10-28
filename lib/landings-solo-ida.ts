import { IMG_AVION_ALA, IMG_AEROPUERTO_INTERNACIONAL, IMG_PASAPORTE_VIAJE } from "@/lib/imagenes-destinos";
import { hoyLima } from "@/lib/salidas";
import { PRECIO_SOLO_IDA_TOPE_CERCANO, proximoMesSoloIda } from "@/lib/precios-solo-ida";
import { AVISO_TURISMO, DETALLE, ENLACES_BASE, QUIENES, RUTA_SOLO_IDA, SECCION, base, og, usd } from "@/lib/solo-ida-comun";
import { landingsSoloIdaB } from "@/lib/landings-solo-ida-b";
import type { LandingEspana } from "@/lib/landings-espana-tipos";
import { LANDINGS_ESPANA } from "@/lib/landings-espana";

// Pasajes SOLO IDA a España para quien tiene derecho a quedarse: residentes con TIE, reagrupación familiar,
// estudiantes con visado, nacionalidad española o doble y pasaporte europeo. Los precios salen de
// lib/precios-solo-ida.ts y se recalculan cada día con la fecha de Lima. Nada de turismo solo ida ni paquete migratorio.

export { RUTA_SOLO_IDA } from "@/lib/solo-ida-comun";

// ── Perfiles ────────────────────────────────────────────────────────────────────────────────────────────────

function perfiles(hoy: string): LandingEspana[] {
  const { desde, urgencia } = base(hoy);
  const comun = {
    seccion: SECCION,
    tema: "soloPerfil" as const,
    etiquetaPrecio: "Lima–Madrid, solo ida desde",
    precio: desde,
    detallePrecio: DETALLE,
    calendario: { origen: "Lima", destino: "Madrid", recargo: 0 },
    urgencia,
  };
  return [
    {
      ...comun,
      slug: "residentes-que-vuelven-a-espana",
      ruta: `${RUTA_SOLO_IDA}/residentes-que-vuelven-a-espana`,
      ogImagen: og("residentes-que-vuelven-a-espana"),
      tituloSeo: "Pasaje solo ida a España para residentes",
      descripcion: `Vives en España y viniste de vacaciones al Perú: pasaje solo ida Lima–Madrid desde ${usd(desde)} con tu TIE. Qué hacer si tu tarjeta vence o está en renovación.`,
      migas: "Residentes que vuelven",
      sello: "Lima → Madrid · Con TIE",
      h1: "Pasaje solo ida para volver a España con tu TIE",
      bajada:
        "Viniste a ver a tu familia en el Perú y ahora regresas a tu casa en España. Con tu tarjeta de residencia (TIE) vigente viajas solo de ida: te buscamos la fecha más barata y la maleta que necesitas.",
      chips: ["Con TIE vigente", "Maleta de regreso", "Fecha más barata"],
      foto: "/images/espana/gran-via-metropolis.jpg",
      fotoAlt: "Gran Vía de Madrid",
      boton: "Cotizar mi regreso",
      mensaje: "¡Hola Cityland Travel! Vivo en España con TIE y quiero cotizar mi pasaje solo ida de regreso.",
      pregunta: "Tengo TIE y estoy de vacaciones en el Perú: ¿qué fecha de regreso a Madrid sale más barata?",
      ctaMedio: {
        titulo: "¿Tu TIE vence pronto?",
        texto: "Mándanos la fecha de vencimiento y te decimos si te conviene adelantar el viaje o qué tienes que tener a la mano.",
        boton: "Consultar mi caso",
        mensaje: "¡Hola Cityland Travel! Mi TIE vence pronto y quiero volver a España. ¿Me ayudan con la fecha?",
      },
      listaTitulo: "Documentos para volver",
      lista: [
        "Pasaporte vigente",
        "TIE (tarjeta de residencia) vigente durante todo el viaje",
        "Si tu TIE está vencida y ya pediste la renovación: la autorización de regreso",
        "El pasaje a nombre exacto de tu pasaporte",
      ],
      puntosTitulo: "Lo que tienes que saber",
      puntos: [
        {
          t: "Con TIE vigente, solo ida",
          d: "Si tu pasaporte y tu TIE están vigentes durante todo el viaje, no necesitas pasaje de vuelta al Perú ni ningún otro documento.",
        },
        {
          t: "Si tu TIE vence mientras estás en el Perú",
          d: "Pide la autorización de regreso en España antes de viajar: se tramita en la comisaría con el formulario EX-13 y la tasa 790-052, cuando ya presentaste la renovación. Vale hasta 90 días.",
        },
        {
          t: "Renueva a tiempo",
          d: "La renovación de la TIE se puede presentar desde 60 días antes de que venza. Si viajas en esas fechas, déjala presentada antes de salir de España.",
        },
        {
          t: "Tu maleta de vuelta",
          d: "Si regresas con encargos de la familia, te cotizamos la tarifa con 2 maletas de 23 kg: sale más barata que pagar la segunda en el aeropuerto.",
        },
      ],
      faqs: [
        {
          q: "¿Puedo volver a España solo de ida si soy residente?",
          a: "Sí. Con tu TIE y tu pasaporte vigentes entras como residente y no necesitas pasaje de regreso al Perú.",
        },
        {
          q: "¿Qué hago si mi TIE venció estando en el Perú?",
          a: "Si ya presentaste la renovación en España, necesitas la autorización de regreso, que se pide en España antes de salir. Si no la pediste, consulta con la Oficina de Extranjería o el Consulado de España en Lima antes de comprar.",
        },
        {
          q: "¿Qué mes sale más barato para volver?",
          a: "Los meses lejanos. Mira el calendario de esta página: el precio sube mientras más cerca está la fecha.",
        },
      ],
      aviso: AVISO_TURISMO,
      enlaces: ENLACES_BASE,
    },
    {
      ...comun,
      slug: "nacionalidad-espanola-o-doble-nacionalidad",
      ruta: `${RUTA_SOLO_IDA}/nacionalidad-espanola-o-doble-nacionalidad`,
      ogImagen: og("nacionalidad-espanola-o-doble-nacionalidad"),
      tituloSeo: "Solo ida a España con doble nacionalidad",
      descripcion: `Tienes nacionalidad española o doble nacionalidad: pasaje solo ida Lima–Madrid desde ${usd(desde)}. Con qué pasaporte sales del Perú y con cuál entras a España.`,
      migas: "Nacionalidad española o doble",
      sello: "Lima → Madrid · Doble nacionalidad",
      h1: "Solo ida a España con nacionalidad española o doble",
      bajada:
        "Eres español o tienes las dos nacionalidades. Viajas solo de ida, como ciudadano: te explicamos qué pasaporte usar en cada aeropuerto y a qué nombre va el boleto.",
      chips: ["Como ciudadano", "Sin pasaje de vuelta", "Boleto con tu nombre"],
      foto: IMG_PASAPORTE_VIAJE,
      fotoAlt: "Pasaporte y mapa de viaje",
      boton: "Cotizar mi pasaje",
      mensaje: "¡Hola Cityland Travel! Tengo nacionalidad española (o doble) y quiero cotizar un pasaje solo ida a España.",
      pregunta: "Tengo pasaporte peruano y español: ¿con cuál compro el pasaje a Madrid?",
      ctaMedio: {
        titulo: "¿Tus dos pasaportes tienen el mismo nombre?",
        texto: "Si cambian los apellidos o el orden, mándanos los dos y te decimos con cuál emitir el boleto.",
        boton: "Revisar mi caso",
        mensaje: "¡Hola Cityland Travel! Tengo doble nacionalidad y mis pasaportes tienen el nombre distinto. ¿Con cuál emito el boleto?",
      },
      listaTitulo: "Documentos para viajar",
      lista: [
        "Pasaporte peruano vigente, para salir del Perú si entraste con él",
        "Pasaporte o DNI español vigente, para entrar a España",
        "El pasaje con el nombre igual al del pasaporte con que haces el check-in",
      ],
      puntosTitulo: "Cómo viajar con dos nacionalidades",
      puntos: [
        {
          t: "Sales del Perú con el documento con que entraste",
          d: "Migraciones del Perú pide que salgas con el mismo documento con el que ingresaste al país, que por lo general es el pasaporte peruano.",
        },
        {
          t: "Entras a España como español",
          d: "En Barajas muestras tu pasaporte o DNI español y pasas por la fila de ciudadanos de la Unión Europea. No necesitas pasaje de vuelta.",
        },
        {
          t: "El nombre del boleto importa",
          d: "El boleto tiene que coincidir con el pasaporte que muestras en el check-in. Si tus dos pasaportes tienen el nombre distinto, te ayudamos a elegir.",
        },
        {
          t: "Lleva los dos pasaportes a la mano",
          d: "En el mostrador de la aerolínea en Lima te pueden pedir el documento que te permite entrar a España solo de ida: ten el español listo.",
        },
      ],
      faqs: [
        {
          q: "¿Necesito pasaje de vuelta si soy español?",
          a: "No. Como ciudadano español entras a tu país sin pasaje de regreso.",
        },
        {
          q: "¿Con qué pasaporte compro el boleto?",
          a: "Con el que vas a mostrar en el check-in en Lima. Lo más simple es que el nombre del boleto sea igual en los dos; si no lo es, te ayudamos a elegir.",
        },
        {
          q: "¿Mis hijos también pueden viajar así?",
          a: "Si tienen la nacionalidad española y su documento español, sí. Si son menores y viaja uno solo de los padres, necesitan también el permiso notarial de viaje del Perú.",
        },
      ],
      enlaces: [...ENLACES_BASE, { href: "/blog/permiso-notarial-viaje-menores-peru-requisitos", texto: "Permiso de viaje de menores" }],
    },
    {
      ...comun,
      slug: "pasaporte-europeo-para-vivir-en-espana",
      ruta: `${RUTA_SOLO_IDA}/pasaporte-europeo-para-vivir-en-espana`,
      ogImagen: og("pasaporte-europeo-para-vivir-en-espana"),
      tituloSeo: "Solo ida a España con pasaporte europeo",
      descripcion: `Tienes pasaporte italiano u otro europeo y te vas a vivir a España: pasaje solo ida Lima–Madrid desde ${usd(desde)} y el certificado de registro al llegar.`,
      migas: "Pasaporte europeo",
      sello: "Lima → Madrid · Ciudadano europeo",
      h1: "Solo ida a España con pasaporte europeo",
      bajada:
        "Tienes pasaporte italiano, portugués u otro de la Unión Europea y te vas a vivir a España. Viajas solo de ida como ciudadano europeo: te vendemos el pasaje y te contamos el trámite que haces al llegar.",
      chips: ["Pasaporte UE", "Solo ida", "Certificado de registro"],
      foto: "/images/espana/plaza-mayor.jpg",
      fotoAlt: "Plaza Mayor de Madrid",
      boton: "Cotizar mi pasaje",
      mensaje: "¡Hola Cityland Travel! Tengo pasaporte europeo y quiero cotizar un pasaje solo ida a España.",
      pregunta: "Tengo pasaporte italiano y me voy a vivir a España: ¿qué fecha me conviene para el solo ida?",
      ctaMedio: {
        titulo: "¿Viaja contigo tu familia peruana?",
        texto: "Si tu pareja o tus hijos no tienen pasaporte europeo, cuéntanos su caso antes de comprar y te decimos qué necesitan.",
        boton: "Contar mi caso",
        mensaje: "¡Hola Cityland Travel! Tengo pasaporte europeo y viajo a España con familia que no lo tiene. ¿Qué necesitan?",
      },
      listaTitulo: "Documentos",
      lista: [
        "Pasaporte o documento de identidad europeo vigente",
        "Tu pasaporte peruano, si saliste del Perú con él la última vez",
        "Al llegar, si te quedas más de 3 meses: el certificado de registro de ciudadano de la UE",
      ],
      puntosTitulo: "Lo que haces al llegar",
      puntos: [
        {
          t: "Entras como ciudadano europeo",
          d: "Con tu pasaporte europeo pasas por la fila de la Unión Europea y no necesitas pasaje de vuelta.",
        },
        {
          t: "El certificado de registro",
          d: "Si te vas a quedar más de 3 meses, dentro de esos 3 meses pides el certificado de registro de ciudadano de la UE (formulario EX-18, tasa 790-012) en la Oficina de Extranjería o la comisaría de tu provincia, con cita previa.",
        },
        {
          t: "Ahí te dan tu NIE",
          d: "El certificado trae tu NIE, el número que te piden en España para casi todo: banco, alquiler o contrato de teléfono.",
        },
        {
          t: "Empadrónate",
          d: "Inscríbete en el padrón del ayuntamiento donde vas a vivir, con tu pasaporte y un contrato de alquiler o un documento de tu domicilio.",
        },
      ],
      faqs: [
        {
          q: "¿Necesito visa si tengo pasaporte italiano?",
          a: "No. Con pasaporte de un país de la Unión Europea puedes vivir en España sin visado.",
        },
        {
          q: "¿Cuándo pido el certificado de registro?",
          a: "Dentro de los 3 meses desde que llegas, si te vas a quedar más tiempo. Se pide con cita previa en la Oficina de Extranjería o la comisaría de tu provincia.",
        },
        {
          q: "¿Puedo comprar el pasaje con mi pasaporte peruano?",
          a: "El boleto tiene que coincidir con el documento que muestras en el check-in. Si vas a entrar a España con el europeo, lo más simple es emitir con ese.",
        },
      ],
      enlaces: ENLACES_BASE,
    },
  ];
}

// La guía general de la sección (/espana/solo-ida).
function guiaGeneral(hoy: string): LandingEspana {
  const { desde, urgencia } = base(hoy);
  return {
    slug: "solo-ida-a-espana",
    ruta: RUTA_SOLO_IDA,
    ogImagen: og("solo-ida-a-espana"),
    tituloSeo: "Pasajes solo ida a España: quién puede viajar",
    descripcion: `Pasajes solo ida Lima–Madrid desde ${usd(desde)} para residentes con TIE, reagrupación familiar, estudiantes con visado y pasaporte español o europeo. Precio por mes.`,
    migas: "Solo ida",
    sello: "Lima → Madrid · Solo ida",
    h1: "Pasajes solo ida a España",
    bajada:
      "Si tienes residencia, visado o pasaporte español o europeo, viajas solo de ida. Mientras antes compres, más barato: mira el precio de cada mes y separa con el 50%.",
    chips: ["Desde " + usd(desde), "Precio por mes", "Separa con el 50%"],
    foto: IMG_AVION_ALA,
    fotoAlt: "Ala de avión sobre las nubes",
    tema: "soloPerfil",
    etiquetaPrecio: "Lima–Madrid, solo ida desde",
    precio: desde,
    detallePrecio: DETALLE,
    calendario: { origen: "Lima", destino: "Madrid", recargo: 0 },
    boton: "Cotizar mi solo ida",
    mensaje: "¡Hola Cityland Travel! Quiero cotizar un pasaje solo ida a España.",
    pregunta: "¿Cuál es el mes más barato para viajar solo de ida a Madrid?",
    atajosTitulo: "¿Cuál es tu caso?",
    atajos: [
      { texto: "Tengo TIE", mensaje: "¡Hola Cityland Travel! Vivo en España con TIE y quiero un pasaje solo ida." },
      { texto: "Reagrupación", mensaje: "¡Hola Cityland Travel! Tengo visado de reagrupación familiar y quiero un pasaje solo ida." },
      { texto: "Visa de estudios", mensaje: "¡Hola Cityland Travel! Tengo visado de estudios y quiero un pasaje solo ida a España." },
      { texto: "Soy español", mensaje: "¡Hola Cityland Travel! Tengo nacionalidad española y quiero un pasaje solo ida." },
      { texto: "Pasaporte europeo", mensaje: "¡Hola Cityland Travel! Tengo pasaporte europeo y quiero un pasaje solo ida a España." },
    ],
    ctaMedio: {
      titulo: "Compra con anticipación",
      texto: `En los meses lejanos el solo ida sale desde ${usd(desde)}; en la fecha cercana puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)}. Separa hoy con el 50%.`,
      boton: "Separar mi fecha",
      mensaje: "¡Hola Cityland Travel! Quiero separar un pasaje solo ida a España con anticipación.",
    },
    urgencia,
    listaTitulo: "Quiénes pueden viajar solo de ida",
    lista: QUIENES,
    puntosTitulo: "Cómo comprar tu solo ida",
    puntos: [
      { t: "Mira el calendario", d: "Cada mes tiene su precio «desde». Los meses lejanos son los más baratos; los dos más cercanos, los más caros." },
      { t: "Ten tu documento listo", d: "Te pedimos el nombre tal cual figura en el pasaporte con que vas a viajar, y te decimos qué documento llevar según tu caso." },
      { t: "Elige tu maleta", d: "Si te mudas, la tarifa con 2 maletas de 23 kg suele salir más barata que comprar la segunda después." },
      { t: "Separa con el 50%", d: "El saldo lo pagas antes de la emisión y el boleto te llega por WhatsApp." },
    ],
    aviso: AVISO_TURISMO,
    faqs: [
      {
        q: "¿Quién puede viajar a España solo de ida?",
        a: "Quien tiene derecho a vivir allá: residentes con TIE, familiares con visado de reagrupación, estudiantes con visado, españoles y ciudadanos de la Unión Europea.",
      },
      {
        q: "¿Cuánto cuesta el pasaje solo ida Lima–Madrid?",
        a: `Desde ${usd(desde)} por persona en los meses lejanos. En la fecha cercana puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)}. El calendario de esta página tiene el precio de cada mes.`,
      },
      {
        q: "¿Qué aerolíneas vuelan directo Lima–Madrid?",
        a: "Iberia, LATAM, Air Europa y Plus Ultra. Te cotizamos las que tienen asientos en tu fecha.",
      },
    ],
    enlaces: [
      { href: "/espana/pasaje-reagrupacion-familiar-espana", texto: "Reagrupación familiar" },
      { href: "/espana/pasajes-para-estudiantes-a-espana", texto: "Estudiantes" },
      { href: "/pasaje-ida-y-vuelta-a-espana", texto: "Pasaje ida y vuelta" },
    ],
  };
}

// ── Mes de salida ───────────────────────────────────────────────────────────────────────────────────────────

interface DatoMes {
  slug: string;
  quien: string;
  clima: string;
  consejo: { t: string; d: string };
  faq: { q: string; a: string };
}

const DATOS_MES: Record<number, DatoMes> = {
  1: {
    slug: "enero",
    quien: "Muchos residentes vuelven a España después de pasar Navidad y Año Nuevo con la familia en el Perú.",
    clima: "Invierno en España: en Madrid hace entre 0 y 10 grados. Viaja con casaca a la mano.",
    consejo: { t: "Después de Reyes baja", d: "Del 1 al 6 de enero el regreso a España está en su punto más caro. Desde la segunda semana empieza a bajar." },
    faq: { q: "¿Es caro volver a España en enero?", a: "La primera semana sí, por el regreso de las fiestas. Desde el 7 de enero los precios bajan." },
  },
  2: {
    slug: "febrero",
    quien: "Es el mes en que vuelven las familias que pasaron el verano peruano en el Perú.",
    clima: "Sigue el invierno en España, con días fríos y secos en Madrid.",
    consejo: { t: "Fin del verano peruano", d: "La última semana de febrero se llena con quienes vuelven antes del inicio de clases en marzo. Compra con tiempo esas fechas." },
    faq: { q: "¿Qué semana de febrero sale más barata?", a: "Por lo general, la primera y la segunda. Las últimas se llenan con el regreso del verano peruano." },
  },
  3: {
    slug: "marzo",
    quien: "Mes tranquilo para mudarse: buen precio y pocos viajeros, salvo la semana de Semana Santa.",
    clima: "Primavera en España: en Madrid, entre 5 y 18 grados.",
    consejo: { t: "Ojo con Semana Santa", d: "En 2027 Semana Santa es del 21 al 28 de marzo. Si puedes, viaja antes o después de esa semana." },
    faq: { q: "¿Marzo es buen mes para viajar solo de ida?", a: "Sí, es de los más baratos del año. Solo evita la semana de Semana Santa, que sube." },
  },
  4: {
    slug: "abril",
    quien: "Buen mes para reagrupación y mudanzas: precio bajo y clima templado para llegar.",
    clima: "Primavera: días agradables, entre 8 y 20 grados en Madrid.",
    consejo: { t: "Después de Pascua baja", d: "Pasada la Semana Santa, abril es de los meses más baratos para volar a Madrid." },
    faq: { q: "¿Abril es más barato que marzo?", a: "Suelen estar parecidos. Mira el calendario: los dos están entre los más baratos del año." },
  },
  5: {
    slug: "mayo",
    quien: "Último mes barato antes del verano europeo. Conviene a quien tiene que estar en España antes de junio.",
    clima: "Primavera cálida: entre 11 y 24 grados en Madrid.",
    consejo: { t: "Antes de que suba", d: "Desde junio empieza la temporada alta del verano europeo. Si tu fecha es flexible, mayo es mejor." },
    faq: { q: "¿Mayo sigue siendo temporada baja?", a: "Sí, es temporada media-baja. El precio sube a partir de junio." },
  },
  6: {
    slug: "junio",
    quien: "Empieza el verano europeo y la temporada alta.",
    clima: "Verano: en Madrid pasa los 30 grados.",
    consejo: { t: "Compra con 3 meses", d: "Para junio, cotiza desde marzo: los asientos baratos se van primero." },
    faq: { q: "¿Junio es temporada alta?", a: "Sí, desde la segunda quincena. Compra con anticipación." },
  },
  7: {
    slug: "julio",
    quien: "Temporada alta: vacaciones en Europa y Fiestas Patrias en el Perú.",
    clima: "Pleno verano: en Madrid puede pasar los 35 grados.",
    consejo: { t: "El mes más lleno", d: "Julio se llena con turistas y con peruanos que viajan por Fiestas Patrias. Si puedes, compra con 4 meses." },
    faq: { q: "¿Cuándo compro para julio?", a: "Lo ideal es con 3 o 4 meses. A última hora quedan pocos asientos y caros." },
  },
  8: {
    slug: "agosto",
    quien: "Temporada alta; a fin de mes viajan los estudiantes que empiezan el curso en septiembre.",
    clima: "Verano caluroso, sobre todo en Madrid y en el sur.",
    consejo: { t: "Estudiantes: fin de agosto", d: "Si empiezas clases en septiembre, viaja la última semana de agosto para instalarte. Esa semana se llena: compra con tiempo." },
    faq: { q: "¿Agosto es caro para viajar solo de ida?", a: "Sí, es temporada alta. La última semana se llena por el inicio del curso." },
  },
  9: {
    slug: "septiembre",
    quien: "Mes de estudiantes: empieza el curso en universidades y escuelas de España.",
    clima: "Fin del verano: días cálidos, noches más frescas.",
    consejo: { t: "Llega antes de clases", d: "Una o dos semanas antes del inicio del curso te da tiempo para instalarte y pedir cita para tu TIE." },
    faq: { q: "¿Cuándo llego si empiezo clases en septiembre?", a: "Una o dos semanas antes. Recuerda que tienes 1 mes desde que entras para pedir tu TIE si el curso dura más de 6 meses." },
  },
  10: {
    slug: "octubre",
    quien: "Temporada media: buen mes para mudarse con precio razonable.",
    clima: "Otoño: entre 10 y 20 grados en Madrid.",
    consejo: { t: "Fuera de puentes", d: "Evita el puente del 12 de octubre, fiesta nacional en España. El resto del mes es tranquilo." },
    faq: { q: "¿Octubre es buen mes para viajar?", a: "Sí. Es temporada media, con clima templado y menos viajeros que en verano." },
  },
  11: {
    slug: "noviembre",
    quien: "De los meses más tranquilos del año para volar a España.",
    clima: "Otoño frío: en Madrid, entre 4 y 14 grados.",
    consejo: { t: "Antes de la Navidad", d: "Noviembre es tranquilo. Desde la segunda semana de diciembre empieza a subir por las fiestas." },
    faq: { q: "¿Noviembre es temporada baja?", a: "Sí, es de los meses con menos viajeros. Aun así, si es tu fecha cercana, el precio sube mientras más cerca." },
  },
  12: {
    slug: "diciembre",
    quien: "Temporada alta por Navidad: viajan familias y residentes que pasan las fiestas en España.",
    clima: "Invierno: frío y días cortos en Madrid.",
    consejo: { t: "Antes del 15 o después de Navidad", d: "Del 15 al 24 de diciembre es lo más caro. Viajar a inicios de mes o entre Navidad y Año Nuevo suele salir mejor." },
    faq: { q: "¿Cuándo compro para diciembre?", a: "Con 3 o 4 meses. Diciembre es de los meses que más rápido se llenan." },
  },
};

function meses(hoy: string): LandingEspana[] {
  return Object.entries(DATOS_MES).map(([n, d]) => {
    const m = proximoMesSoloIda(Number(n), hoy);
    const etiqueta = `${m.nombre} ${m.anio}`;
    const slug = `lima-madrid-en-${d.slug}`;
    return {
      slug,
      ruta: `${RUTA_SOLO_IDA}/${slug}`,
      ogImagen: og(slug),
      seccion: SECCION,
      tema: "soloMes",
      tituloSeo: `Pasaje solo ida Lima–Madrid en ${etiqueta}`,
      descripcion: `Pasaje solo ida Lima–Madrid en ${etiqueta} desde ${usd(m.desde)} por persona${m.cercano ? `, hasta ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)} por ser fecha cercana` : ""}. Para residentes, reagrupación, estudiantes y pasaporte europeo.`,
      migas: `Solo ida en ${m.nombre}`,
      sello: `Lima → Madrid · ${etiqueta}`,
      h1: `Solo ida Lima–Madrid en ${etiqueta}`,
      bajada: `${d.quien} Te mostramos el precio de ${m.nombre} frente a los demás meses para que elijas bien tu fecha.`,
      chips: [m.cercano ? "Fecha cercana: sube" : "Fecha con anticipación", "Desde " + usd(m.desde), "Separa con el 50%"],
      foto: m.mes % 2 === 0 ? IMG_AEROPUERTO_INTERNACIONAL : IMG_AVION_ALA,
      fotoAlt: m.mes % 2 === 0 ? "Sala de un aeropuerto internacional" : "Ala de avión sobre las nubes",
      etiquetaPrecio: `Lima–Madrid en ${m.nombre}, solo ida desde`,
      precio: m.desde,
      detallePrecio: m.cercano ? `Fecha cercana: puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)}. Precio referencial.` : DETALLE,
      calendario: { origen: "Lima", destino: "Madrid", recargo: 0 },
      mesDestacado: m.mes,
      boton: `Cotizar ${m.nombre}`,
      mensaje: `¡Hola Cityland Travel! Quiero un pasaje solo ida Lima–Madrid para ${etiqueta}.`,
      pregunta: `¿Qué día de ${m.nombre} sale más barato el solo ida a Madrid?`,
      ctaMedio: {
        titulo: m.cercano ? `${m.nombre[0].toUpperCase()}${m.nombre.slice(1)} ya está cerca` : `Separa ${m.nombre} desde hoy`,
        texto: m.cercano
          ? `Quedan pocos asientos baratos para ${m.nombre}. Si tu fecha es flexible, mira los meses siguientes en el calendario.`
          : `Hoy ${m.nombre} sale desde ${usd(m.desde)}. Cuando se acerque la fecha, sube.`,
        boton: "Ver mi fecha exacta",
        mensaje: `¡Hola Cityland Travel! Quiero saber el precio exacto del solo ida a Madrid en ${etiqueta}.`,
      },
      urgencia: m.cercano
        ? `${m.nombre[0].toUpperCase()}${m.nombre.slice(1)} es fecha cercana: el precio puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)} y sigue subiendo mientras se acerca el día.`
        : `Hoy ${m.nombre} todavía está lejos y sale desde ${usd(m.desde)}. Mientras más se acerque, más sube.`,
      puntosTitulo: `Viajar en ${m.nombre}`,
      puntos: [
        d.consejo,
        { t: "El clima al llegar", d: d.clima },
        { t: "Quién viaja solo de ida", d: "Residentes con TIE, reagrupación familiar, estudiantes con visado y pasaporte español o europeo." },
        { t: "Maleta de mudanza", d: "Si te mudas, cotiza la tarifa con 2 maletas de 23 kg: sale más barata que comprarla después." },
      ],
      listaTitulo: "Antes de comprar",
      lista: [
        "Ten tu residencia, visado o pasaporte europeo vigente en la fecha del viaje",
        "El nombre del boleto igual al del pasaporte con que viajas",
        "Decide cuántas maletas llevas",
      ],
      faqs: [
        d.faq,
        {
          q: `¿Cuánto cuesta el solo ida Lima–Madrid en ${m.nombre}?`,
          a: `Desde ${usd(m.desde)} por persona, con impuestos${m.cercano ? `; como es fecha cercana, puede llegar a ${usd(PRECIO_SOLO_IDA_TOPE_CERCANO)}` : ""}.`,
        },
        {
          q: "¿Y si viajo de turismo?",
          a: "Entonces lo tuyo es el pasaje ida y vuelta, con el regreso a tu nombre. Te lo cotizamos igual de rápido.",
        },
      ],
      enlaces: ENLACES_BASE,
    };
  });
}

// Todas las páginas de solo ida, armadas con la fecha de Lima del día.
export function landingsSoloIda(hoy = hoyLima()): LandingEspana[] {
  return [guiaGeneral(hoy), ...perfiles(hoy), ...meses(hoy), ...landingsSoloIdaB(hoy)];
}

export function buscarLandingSoloIda(slug: string, hoy = hoyLima()): LandingEspana | undefined {
  return landingsSoloIda(hoy).find((l) => l.slug === slug);
}


// Para los enlaces del pie: las de solo ida y las dos de /espana que también son solo ida.
export function hermanasSoloIda(): LandingEspana[] {
  return [...landingsSoloIda(), ...LANDINGS_ESPANA.filter((l) => l.tema === "soloPerfil")];
}
