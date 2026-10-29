import {
  BOLSA_MINIMO,
  BOLSA_POR_DIA,
  EURO_EN_SOLES,
  FECHA_CONSULTA,
  FECHA_TIPO_CAMBIO,
  GASTO_DIARIO_ESTIMADO,
  HOTEL_MADRID_NOCHE,
  MENU_DEL_DIA,
  SEGURO_15_DIAS_SOLES,
  TASA_CARTA_EXPEDICION,
  TASA_CARTA_SOLICITUD,
  TASA_CARTA_TOTAL,
  VIGENCIA_CARTA_MESES,
  bolsaPorPersona,
  euros,
  soles,
} from "@/lib/datos-viaje-espana";
import { DETALLE_IDA_VUELTA, PRECIO_IDA_VUELTA_MADRID, type LandingEspana } from "@/lib/landings-espana-tipos";

// Dudas frecuentes de quien viaja a España de turismo o de visita: bolsa de viaje, cuánto cuesta el viaje,
// carta de invitación y requisitos. Cifras de lib/datos-viaje-espana.ts (fuentes oficiales con fecha).
// Rematan con el pasaje ida y vuelta: es lo que vendemos a quien viaja de turismo.

const usd = (n: number) => `US$ ${n.toLocaleString("en-US")}`;
const PASAJE = usd(PRECIO_IDA_VUELTA_MADRID);
const FUENTE_BOLSA = `Orden PRE/1282/2007 y salario mínimo de España 2026 (1.221 €). Consultado el ${FECHA_CONSULTA}.`;

const comun = {
  etiquetaPrecio: "Lima–Madrid, ida y vuelta desde",
  precio: PRECIO_IDA_VUELTA_MADRID,
  detallePrecio: DETALLE_IDA_VUELTA,
  boton: "Cotizar mi pasaje",
};

const ENLACES = [
  { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
  { href: "/espana/viajar-a-espana-a-visitar-familia", texto: "Visitar a tu familia en España" },
  { href: "/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje", texto: "Guía de la bolsa de viaje" },
];

const filaBolsa = (dias: number) => [`${dias} días`, euros(bolsaPorPersona(dias)), soles(bolsaPorPersona(dias))];
const TABLA_DIAS = [7, 10, 15, 20, 30, 45, 60, 90];

const FAQ_TARJETA = {
  q: "¿Puedo llevar la bolsa de viaje en tarjeta?",
  a: "Sí: la norma acepta tarjetas de crédito, pero con su extracto bancario o libreta actualizada. No valen las cartas del banco ni los extractos bajados de internet.",
};
const FAQ_CARTA = {
  q: "Si tengo carta de invitación, ¿igual necesito la bolsa de viaje?",
  a: "Sí. La carta reemplaza a la reserva de hotel, pero no a los demás requisitos de entrada, entre ellos el dinero para tu estadía.",
};

// ── Bolsa de viaje ──────────────────────────────────────────────────────────────────────────────────────────

function bolsaPorDias(dias: number, foto: string, fotoAlt: string): LandingEspana {
  const monto = bolsaPorPersona(dias);
  return {
    ...comun,
    slug: `bolsa-de-viaje-espana-${dias}-dias`,
    tema: "dudaBolsa",
    calculadora: { dias },
    tituloSeo: `Bolsa de viaje España ${dias} días: ${euros(monto)}`,
    descripcion: `Para ${dias} días en España te pueden pedir ${euros(monto)} por persona (≈ ${soles(monto)}) en 2026. Calcula para tu familia y lleva el dinero bien acreditado.`,
    migas: `Bolsa de viaje ${dias} días`,
    sello: `España 2026 · ${dias} días`,
    h1: `Bolsa de viaje para ${dias} días en España`,
    bajada: `Si te quedas ${dias} días, la bolsa de viaje es de ${euros(monto)} por persona (≈ ${soles(monto)}). Cámbiale los días o las personas en la calculadora.`,
    chips: [euros(monto), `≈ ${soles(monto)}`, "Por persona"],
    foto,
    fotoAlt,
    mensaje: `¡Hola Cityland Travel! Voy a España ${dias} días y quiero cotizar mi pasaje.`,
    pregunta: `Voy ${dias} días a España: ¿qué fechas de ida y vuelta me salen más baratas?`,
    ctaMedio: {
      titulo: `¿Ya tienes tus ${dias} días?`,
      texto: "Dinos la fecha de ida y te cotizamos el regreso a los días exactos, con tu nombre en el boleto.",
      boton: "Cotizar con mis fechas",
      mensaje: `¡Hola Cityland Travel! Voy ${dias} días a España. ¿Me cotizan ida y vuelta con esas fechas?`,
    },
    puntosTitulo: "Cómo sale la cifra",
    puntos: [
      { t: `${euros(BOLSA_POR_DIA)} por día`, d: `Es el 10 % del salario mínimo de España en 2026. Por ${dias} días: ${euros(BOLSA_POR_DIA)} × ${dias} = ${euros(BOLSA_POR_DIA * dias)}.` },
      { t: `Mínimo ${euros(BOLSA_MINIMO)}`, d: "Ningún viajero puede llevar menos de esa cifra, aunque se quede pocos días." },
      { t: "Los días se cuentan completos", d: "Desde el día que entras hasta el día que sale tu vuelo de regreso, los dos incluidos." },
      { t: "Por cada viajero", d: "Si viajan dos, el monto se duplica. Los niños también cuentan." },
    ],
    listaTitulo: "Cómo llevarlo",
    lista: ["Parte en efectivo, en euros", "Tarjeta de crédito con su extracto bancario impreso", "Cheques de viaje, si los tienes", "No valen cartas del banco ni extractos bajados de internet"],
    tabla: { titulo: "Bolsa de viaje por días (2026)", columnas: ["Estadía", "Por persona", "En soles"], filas: TABLA_DIAS.map(filaBolsa), nota: `${FUENTE_BOLSA} Soles al tipo de cambio venta del BCRP del ${FECHA_TIPO_CAMBIO}.` },
    faqs: [
      { q: `¿Cuánto dinero necesito para ${dias} días en España?`, a: `${euros(monto)} por persona en 2026, unos ${soles(monto)}.` },
      FAQ_TARJETA,
      FAQ_CARTA,
    ],
    enlaces: ENLACES,
  };
}

function bolsa(): LandingEspana[] {
  const tablaPersonas = [1, 2, 3, 4].map((n) => [`${n} ${n === 1 ? "persona" : "personas"}`, euros(bolsaPorPersona(15) * n), euros(bolsaPorPersona(30) * n)]);
  return [
    {
      ...comun,
      slug: "calculadora-bolsa-de-viaje-espana",
      tema: "dudaBolsa",
      calculadora: { dias: 15 },
      tituloSeo: "Calculadora de bolsa de viaje España 2026",
      descripcion: `Calcula la bolsa de viaje para España 2026: ${euros(BOLSA_POR_DIA)} por día y persona, mínimo ${euros(BOLSA_MINIMO)}. En euros y en soles, al instante.`,
      migas: "Calculadora de bolsa de viaje",
      sello: "España 2026 · Calculadora",
      h1: "Calculadora de bolsa de viaje para España",
      bajada: "Pon los días que te quedas y cuántos viajan: te decimos cuánto dinero te pueden pedir que demuestres al entrar a España como turista, en euros y en soles.",
      chips: [`${euros(BOLSA_POR_DIA)} por día`, `Mínimo ${euros(BOLSA_MINIMO)}`, "Euros y soles"],
      foto: "/images/destinos/lima-plaza-mayor.jpg",
      fotoAlt: "Plaza Mayor de Lima, de donde sales a España",
      mensaje: "¡Hola Cityland Travel! Calculé mi bolsa de viaje y quiero cotizar un pasaje a España.",
      pregunta: "Ya sé cuánto dinero llevar: ¿cuánto me sale el pasaje Lima–Madrid ida y vuelta?",
      ctaMedio: {
        titulo: "Ya sabes cuánto llevar",
        texto: `Ahora asegura el pasaje: ida y vuelta Lima–Madrid desde ${PASAJE}, separando con el 50%.`,
        boton: "Cotizar mi pasaje",
        mensaje: "¡Hola Cityland Travel! Usé la calculadora de bolsa de viaje y quiero cotizar mi pasaje.",
      },
      puntosTitulo: "Cómo se calcula",
      puntos: [
        { t: "1. Por día", d: `${euros(BOLSA_POR_DIA)} por persona y por día, el 10 % del salario mínimo de España en 2026 (1.221 €).` },
        { t: "2. Con un mínimo", d: `Nunca menos de ${euros(BOLSA_MINIMO)} por persona: hasta 9 días el monto es el mismo.` },
        { t: "3. Por persona", d: "Se cuenta por cada viajero, niños incluidos." },
        { t: "4. Solo si te lo piden", d: "Te lo pueden pedir al llegar. No siempre lo piden, pero llévalo listo." },
      ],
      listaTitulo: "Formas de acreditarlo",
      lista: ["Efectivo", "Tarjeta de crédito con extracto bancario o libreta actualizada", "Cheques de viaje o cheques certificados", "No valen cartas del banco ni extractos bajados de internet"],
      tabla: { titulo: "Bolsa de viaje por días (2026)", columnas: ["Estadía", "Por persona", "En soles"], filas: TABLA_DIAS.map(filaBolsa), nota: `${FUENTE_BOLSA} Soles al tipo de cambio venta del BCRP del ${FECHA_TIPO_CAMBIO}.` },
      faqs: [{ q: "¿Cuánto es la bolsa de viaje para España en 2026?", a: `${euros(BOLSA_POR_DIA)} por persona y día, con un mínimo de ${euros(BOLSA_MINIMO)} por persona.` }, FAQ_TARJETA, FAQ_CARTA],
      enlaces: ENLACES,
    },
    bolsaPorDias(15, "/images/espana/puerta-de-alcala.jpg", "Puerta de Alcalá, Madrid"),
    bolsaPorDias(30, "/images/espana/cibeles.jpg", "Palacio de Cibeles, Madrid"),
    {
      ...comun,
      slug: "bolsa-de-viaje-espana-en-soles",
      tema: "dudaBolsa",
      calculadora: { dias: 15 },
      tituloSeo: "Bolsa de viaje para España en soles (2026)",
      descripcion: `La bolsa de viaje para España en soles: mínimo ${soles(BOLSA_MINIMO)} por persona y ${soles(BOLSA_POR_DIA)} por día, al tipo de cambio del BCRP. Calcula la tuya.`,
      migas: "Bolsa de viaje en soles",
      sello: "España 2026 · En soles",
      h1: "La bolsa de viaje para España, en soles",
      bajada: `La norma la fija en euros, pero tú ahorras en soles. Al tipo de cambio venta del BCRP del ${FECHA_TIPO_CAMBIO} (S/ ${EURO_EN_SOLES.toFixed(3)} por euro), esto es lo que necesitas.`,
      chips: [`${soles(BOLSA_POR_DIA)} por día`, `Mínimo ${soles(BOLSA_MINIMO)}`, `S/ ${EURO_EN_SOLES.toFixed(3)} por euro`],
      foto: "/images/espana/gran-via-metropolis.jpg",
      fotoAlt: "Gran Vía de Madrid",
      mensaje: "¡Hola Cityland Travel! Estoy ahorrando para ir a España y quiero cotizar el pasaje.",
      pregunta: "¿Puedo pagar el pasaje a España en soles y separarlo con el 50%?",
      ctaMedio: {
        titulo: "Separa tu pasaje mientras ahorras",
        texto: `Con el 50% aseguras tu fecha y pagas el saldo antes de la emisión. Ida y vuelta desde ${PASAJE}.`,
        boton: "Separar mi pasaje",
        mensaje: "¡Hola Cityland Travel! Quiero separar mi pasaje a España con el 50%.",
      },
      puntosTitulo: "Lo que tienes que saber",
      puntos: [
        { t: "Llévalo en euros", d: "Te lo piden en euros. Cambia tus soles antes de viajar: en España no te reciben soles." },
        { t: "El tipo de cambio se mueve", d: "En octubre de 2026 la venta del euro pasó de S/ 3,86 a S/ 4,06. Calcula con un margen." },
        { t: "En tarjeta también vale", d: "Con su extracto bancario impreso. Así no llevas todo en efectivo." },
        { t: "Por persona", d: "Si viajan dos, el monto se duplica." },
      ],
      listaTitulo: "Consejos para cambiar tus soles",
      lista: ["Compara el tipo de cambio de tu banco y de una casa de cambio formal", "No cambies todo en el aeropuerto", "Calcula con un margen por si sube el euro", "Guarda el comprobante del cambio"],
      tabla: { titulo: "Bolsa de viaje en soles (2026)", columnas: ["Estadía", "En euros", "En soles"], filas: TABLA_DIAS.map(filaBolsa), nota: `Tipo de cambio venta del BCRP del ${FECHA_TIPO_CAMBIO}: S/ ${EURO_EN_SOLES.toFixed(3)} por euro. ${FUENTE_BOLSA}` },
      faqs: [{ q: "¿Cuánto es la bolsa de viaje en soles?", a: `Como mínimo ${soles(BOLSA_MINIMO)} por persona y ${soles(BOLSA_POR_DIA)} por día, al tipo de cambio del ${FECHA_TIPO_CAMBIO}.` }, FAQ_TARJETA],
      enlaces: ENLACES,
    },
    {
      ...comun,
      slug: "bolsa-de-viaje-espana-familia-y-ninos",
      tema: "dudaBolsa",
      calculadora: { dias: 15 },
      tituloSeo: "Bolsa de viaje España para familia y niños",
      descripcion: `La bolsa de viaje para España se cuenta por persona, niños incluidos: 15 días para 4 son ${euros(bolsaPorPersona(15) * 4)}. Tabla por familia y calculadora.`,
      migas: "Bolsa de viaje en familia",
      sello: "España 2026 · En familia",
      h1: "Bolsa de viaje para viajar en familia a España",
      bajada: "La bolsa de viaje se cuenta por cada viajero, también por los niños. Mira cuánto le toca a tu familia según los días.",
      chips: ["Por persona", "Niños incluidos", "Tabla por familia"],
      foto: "/images/destinos/elche.jpg",
      fotoAlt: "Elche, en Alicante, España",
      mensaje: "¡Hola Cityland Travel! Viajamos en familia a España y quiero cotizar los pasajes.",
      pregunta: "Viajamos 4 a España, con dos niños: ¿cuánto sale el pasaje de cada uno?",
      ctaMedio: {
        titulo: "Los niños pagan menos en el pasaje",
        texto: "Los bebés en brazos pagan tarifa de bebé y los niños, tarifa de niño. Te cotizamos a toda la familia junta.",
        boton: "Cotizar en familia",
        mensaje: "¡Hola Cityland Travel! Quiero cotizar pasajes a España para mi familia, con niños.",
      },
      puntosTitulo: "Lo que tienes que saber",
      puntos: [
        { t: "Cuenta a cada uno", d: "La norma pide el monto por persona, sin descuento por edad." },
        { t: "Puede llevarlo un adulto", d: "Lo usual es que los papás lleven el dinero de toda la familia y lo acrediten juntos." },
        { t: "Carta de invitación", d: "Si se quedan en casa de un familiar, una sola carta puede incluir a varias personas." },
        { t: "Permiso del menor", d: "Si el niño viaja con uno solo de sus padres, necesita la autorización notarial del otro." },
      ],
      listaTitulo: "Para viajar en familia",
      lista: ["Pasaporte propio de cada niño", "Bolsa de viaje por cada viajero", "Permiso notarial si viaja con un solo padre", "Pasaje de regreso de todos"],
      tabla: { titulo: "Bolsa de viaje por familia (2026)", columnas: ["Viajan", "15 días", "30 días"], filas: tablaPersonas, nota: FUENTE_BOLSA },
      faqs: [{ q: "¿Los niños también pagan bolsa de viaje?", a: "Sí, se cuenta por cada viajero, sin importar la edad." }, FAQ_CARTA],
      enlaces: [...ENLACES, { href: "/espana/viajar-a-espana-con-ninos", texto: "Viajar a España con niños" }],
    },
    {
      ...comun,
      slug: "bolsa-de-viaje-espana-efectivo-o-tarjeta",
      tema: "dudaBolsa",
      tituloSeo: "Bolsa de viaje: ¿efectivo o tarjeta para España?",
      descripcion: "Cómo acreditar la bolsa de viaje para España: efectivo, tarjeta con extracto, cheques de viaje. Qué no vale y cómo repartir el dinero para viajar tranquilo.",
      migas: "Efectivo o tarjeta",
      sello: "España 2026 · Cómo llevarlo",
      h1: "Bolsa de viaje: ¿en efectivo o en tarjeta?",
      bajada: "La norma acepta varias formas de demostrar tu dinero. Te contamos cuáles valen, cuál no y cómo repartirlo para no viajar con todo en efectivo.",
      chips: ["Efectivo", "Tarjeta con extracto", "Lo que no vale"],
      foto: "/images/espana/palacio-real.jpg",
      fotoAlt: "Palacio Real de Madrid",
      mensaje: "¡Hola Cityland Travel! Ya tengo mi bolsa de viaje lista y quiero cotizar el pasaje a España.",
      pregunta: "¿Puedo pagar el pasaje a España con tarjeta?",
      ctaMedio: {
        titulo: "Arma tu carpeta de viaje",
        texto: "Con tu pasaje te mandamos la lista de lo que conviene llevar a la mano al llegar.",
        boton: "Cotizar y recibir la lista",
        mensaje: "¡Hola Cityland Travel! Quiero cotizar mi pasaje y la lista de lo que llevo al viajar a España.",
      },
      puntosTitulo: "Qué acepta la norma",
      puntos: [
        { t: "Efectivo", d: "En euros. Es lo más simple, pero no conviene llevar todo en efectivo." },
        { t: "Tarjeta de crédito", d: "Vale, pero acompañada de su extracto bancario o libreta actualizada que muestre el saldo." },
        { t: "Cheques de viaje", d: "También valen los cheques certificados y las cartas de pago." },
        { t: "Lo que no vale", d: "Las cartas del banco y los extractos bajados de internet no sirven como prueba." },
      ],
      listaTitulo: "Una forma práctica de repartirlo",
      lista: ["Una parte en efectivo, en euros", "El resto en tarjeta, con el extracto impreso y reciente", "Copia del extracto en el celular", "El dinero en el equipaje de mano, no en la maleta"],
      faqs: [FAQ_TARJETA, { q: "¿La tarjeta de débito vale?", a: "La norma habla de tarjetas de crédito con extracto. Si llevas débito, acompáñala del estado de cuenta impreso y reciente." }, FAQ_CARTA],
      enlaces: ENLACES,
    },
    {
      ...comun,
      slug: "bolsa-de-viaje-espana-2027",
      tema: "dudaBolsa",
      calculadora: { dias: 15 },
      tituloSeo: "Bolsa de viaje España 2027: ¿cuánto será?",
      descripcion: "La bolsa de viaje para España en 2027 depende del nuevo salario mínimo, que todavía no está aprobado. Hasta entonces rige la de 2026: 122,10 € por día.",
      migas: "Bolsa de viaje 2027",
      sello: "España 2027 · Bolsa de viaje",
      h1: "Bolsa de viaje para España en 2027",
      bajada: `Si viajas en 2027, la cifra cambiará cuando España apruebe su nuevo salario mínimo. Mientras tanto rige la de 2026: ${euros(BOLSA_POR_DIA)} por día y ${euros(BOLSA_MINIMO)} como mínimo.`,
      chips: ["Depende del SMI 2027", "Hoy: 122,10 € por día", "Se actualiza aquí"],
      foto: "/images/destinos/madrid.webp",
      fotoAlt: "Madrid, España",
      mensaje: "¡Hola Cityland Travel! Quiero viajar a España en 2027 y cotizar mi pasaje con anticipación.",
      pregunta: "Quiero viajar a España en 2027: ¿cuánto antes conviene comprar el pasaje?",
      ctaMedio: {
        titulo: "Compra 2027 con anticipación",
        texto: "Los pasajes de los meses lejanos son los más baratos. Separa con el 50% y paga el saldo antes de la emisión.",
        boton: "Cotizar 2027",
        mensaje: "¡Hola Cityland Travel! Quiero separar con anticipación un pasaje a España para 2027.",
      },
      puntosTitulo: "Lo que se sabe",
      puntos: [
        { t: "Sale del salario mínimo", d: "La bolsa de viaje es el 10 % del salario mínimo de España por día, con un mínimo del 90 %." },
        { t: "El de 2027 aún no está aprobado", d: "Al día de hoy el Gobierno de España no ha fijado el salario mínimo de 2027. Cuando lo haga, actualizamos esta página." },
        { t: "Mientras, rige el de 2026", d: `${euros(BOLSA_POR_DIA)} por persona y día y ${euros(BOLSA_MINIMO)} como mínimo.` },
        { t: "Lleva margen", d: "Si viajas a inicios de 2027, calcula con un poco más por si la cifra sube." },
      ],
      listaTitulo: "Para no fallar en 2027",
      lista: ["Revisa la cifra antes de viajar", "Calcula con margen", "Lleva parte en tarjeta con extracto", "Separa tu pasaje con tiempo"],
      tabla: { titulo: "Cifra vigente (2026)", columnas: ["Estadía", "Por persona", "En soles"], filas: [10, 15, 30].map(filaBolsa), nota: `Se actualiza cuando España apruebe el salario mínimo de 2027. ${FUENTE_BOLSA}` },
      faqs: [{ q: "¿Cuánto será la bolsa de viaje en 2027?", a: "Todavía no se sabe: depende del salario mínimo de 2027, que España aún no aprueba. Hasta entonces rige la cifra de 2026." }, FAQ_TARJETA],
      enlaces: ENLACES,
    },
  ];
}

// ── Cuánto cuesta viajar a España ───────────────────────────────────────────────────────────────────────────

function presupuesto(dias: number, personas = 1) {
  const g = GASTO_DIARIO_ESTIMADO;
  const porDia = g.hotel + g.comida + g.transporte;
  return {
    filas: [
      ["Pasaje ida y vuelta Lima–Madrid", `Desde ${usd(PRECIO_IDA_VUELTA_MADRID * personas)}`, personas === 1 ? "Por persona, con impuestos" : `Por los ${personas} viajeros, a precio de adulto`],
      ["Alojamiento", euros(g.hotel * dias * personas), `Media habitación doble, ${dias} noches (0 € si te alojas con tu familia)`],
      ["Comida", euros(g.comida * dias * personas), `Unos ${euros(g.comida)} por persona al día`],
      ["Transporte en la ciudad", euros(g.transporte * dias * personas), "Metro y bus, con abono turístico"],
      ["Seguro de viaje (recomendado)", `S/ ${SEGURO_15_DIAS_SOLES.min}–${SEGURO_15_DIAS_SOLES.max} por persona`, "Plan básico de 15 días en el mercado peruano"],
      ["Bolsa de viaje (lo que llevas)", euros(bolsaPorPersona(dias) * personas), "No es un gasto extra: es el dinero de tu viaje"],
    ],
    enEspana: porDia * dias * personas,
  };
}

function costoPorDias(dias: number, foto: string, fotoAlt: string): LandingEspana {
  const p = presupuesto(dias);
  return {
    ...comun,
    slug: `cuanto-cuesta-viajar-a-espana-${dias}-dias`,
    tema: "dudaCosto",
    tituloSeo: `Cuánto cuesta viajar a España ${dias} días desde Perú`,
    descripcion: `Presupuesto de ${dias} días en España desde Perú: pasaje desde ${PASAJE}, unos ${euros(p.enEspana)} de gastos allá y la bolsa de viaje. Desglose real.`,
    migas: `Costo de ${dias} días`,
    sello: `España · ${dias} días`,
    h1: `Cuánto cuesta viajar a España ${dias} días`,
    bajada: `Sumamos el pasaje, el alojamiento, la comida y el transporte de ${dias} días en Madrid, con precios oficiales. Así sabes cuánto ahorrar.`,
    chips: [`Pasaje desde ${PASAJE}`, `Allá: ~${euros(p.enEspana)}`, "Desglose"],
    foto,
    fotoAlt,
    mensaje: `¡Hola Cityland Travel! Quiero viajar ${dias} días a España y cotizar el pasaje.`,
    pregunta: `Quiero ir ${dias} días a España: ¿qué mes me sale más barato el pasaje?`,
    ctaMedio: {
      titulo: "El pasaje es lo primero",
      texto: "Es lo que más sube si esperas. Sepáralo con el 50% y arma el resto del presupuesto con calma.",
      boton: "Separar mi pasaje",
      mensaje: `¡Hola Cityland Travel! Quiero separar el pasaje para ${dias} días en España.`,
    },
    puntosTitulo: "De dónde salen las cifras",
    puntos: [
      { t: "Hotel", d: `En Madrid, la habitación cuesta entre ${HOTEL_MADRID_NOCHE.min} y ${HOTEL_MADRID_NOCHE.max} € la noche según el mes (INE, 2026). En doble, la mitad por persona.` },
      { t: "Comida", d: `El menú del día en Madrid ronda los ${euros(MENU_DEL_DIA)}. Con desayuno y una cena sencilla, unos ${euros(GASTO_DIARIO_ESTIMADO.comida)} al día.` },
      { t: "Transporte", d: "El abono turístico de 7 días de la zona A cuesta 43,20 € y te mueve en metro y bus por Madrid." },
      { t: "Bolsa de viaje", d: `No es un gasto aparte: es el dinero que demuestras al llegar y luego usas en tu viaje. Para ${dias} días: ${euros(bolsaPorPersona(dias))}.` },
    ],
    listaTitulo: "Para gastar menos",
    lista: ["Viaja en temporada baja (febrero y noviembre)", "Si tienes familia allá, la carta de invitación te ahorra el hotel", "Usa el abono de transporte", "Come el menú del día"],
    tabla: { titulo: `Presupuesto por persona, ${dias} días`, columnas: ["Concepto", "Cuánto", "Detalle"], filas: p.filas, nota: `Estimación de Cityland con datos del INE, el Consorcio de Transportes de Madrid y Hostelería de España, consultados el ${FECHA_CONSULTA}.` },
    faqs: [
      { q: `¿Cuánto dinero necesito para ${dias} días en España?`, a: `Además del pasaje, unos ${euros(p.enEspana)} para alojamiento, comida y transporte. La bolsa de viaje que te pueden pedir es de ${euros(bolsaPorPersona(dias))}.` },
      { q: "¿Sale más barato si me quedo con mi familia?", a: "Sí: con carta de invitación no pagas hotel, que es el gasto más grande." },
      { q: "¿El seguro es obligatorio?", a: "No para entrar sin visa como turista, pero te lo recomendamos: una atención médica en España sin seguro sale cara." },
    ],
    enlaces: [...ENLACES, { href: "/espana/calculadora-bolsa-de-viaje-espana", texto: "Calculadora de bolsa de viaje" }],
  };
}

function costos(): LandingEspana[] {
  const familia = presupuesto(15, 4);
  return [
    {
      ...comun,
      slug: "cuanto-cuesta-viajar-a-espana-desde-peru",
      tema: "dudaCosto",
      tituloSeo: "Cuánto cuesta viajar a España desde Perú (2026)",
      descripcion: `Cuánto cuesta viajar a España desde Perú: pasaje desde ${PASAJE}, hotel, comida, transporte, seguro y bolsa de viaje. Presupuesto por 10, 15 y 30 días.`,
      migas: "Cuánto cuesta viajar a España",
      sello: "España · Presupuesto",
      h1: "Cuánto cuesta viajar a España desde Perú",
      bajada: "El viaje se arma con cinco cosas: pasaje, alojamiento, comida, transporte y la bolsa de viaje. Te damos cada cifra con su fuente y un presupuesto por días.",
      chips: [`Pasaje desde ${PASAJE}`, "10, 15 y 30 días", "Con fuentes"],
      foto: "/images/espana/plaza-mayor.jpg",
      fotoAlt: "Plaza Mayor de Madrid",
      mensaje: "¡Hola Cityland Travel! Estoy armando el presupuesto para viajar a España y quiero cotizar el pasaje.",
      pregunta: "¿Cuánto me sale el pasaje a España en la fecha más barata del año?",
      atajosTitulo: "¿Cuántos días viajas?",
      atajos: [10, 15, 30].map((d) => ({ texto: `${d} días`, mensaje: `¡Hola Cityland Travel! Quiero viajar ${d} días a España y cotizar el pasaje.` })),
      ctaMedio: {
        titulo: "Empieza por el pasaje",
        texto: "Es lo que más sube si esperas. Sepáralo con el 50% y arma el resto del presupuesto con calma.",
        boton: "Separar mi pasaje",
        mensaje: "¡Hola Cityland Travel! Quiero separar mi pasaje a España con el 50%.",
      },
      puntosTitulo: "Las cinco partes del viaje",
      puntos: [
        { t: "Pasaje", d: `Ida y vuelta Lima–Madrid desde ${PASAJE} por persona, con impuestos.` },
        { t: "Alojamiento", d: `Entre ${HOTEL_MADRID_NOCHE.min} y ${HOTEL_MADRID_NOCHE.max} € la habitación por noche en Madrid (INE, 2026), o nada si te alojas con tu familia.` },
        { t: "Comida y transporte", d: `Unos ${euros(GASTO_DIARIO_ESTIMADO.comida + GASTO_DIARIO_ESTIMADO.transporte)} por persona al día, con menú del día y abono turístico.` },
        { t: "Bolsa de viaje", d: `${euros(BOLSA_POR_DIA)} por día y persona, mínimo ${euros(BOLSA_MINIMO)}. Es el dinero que llevas y usas allá.` },
      ],
      listaTitulo: "Presupuesto por persona, además del pasaje",
      lista: [10, 15, 30].map((d) => `${d} días: unos ${euros(presupuesto(d).enEspana)} en España`),
      tabla: { titulo: "Presupuesto por persona, 15 días", columnas: ["Concepto", "Cuánto", "Detalle"], filas: presupuesto(15).filas, nota: `Estimación de Cityland con datos del INE, el Consorcio de Transportes de Madrid y Hostelería de España, consultados el ${FECHA_CONSULTA}.` },
      faqs: [
        { q: "¿Cuánto cuesta viajar a España desde Perú?", a: `El pasaje ida y vuelta sale desde ${PASAJE}. En España, unos ${euros(presupuesto(15).enEspana)} por persona para 15 días.` },
        { q: "¿Cuál es el mes más barato?", a: "Febrero y noviembre suelen tener los pasajes más baratos." },
      ],
      enlaces: [...ENLACES, { href: "/espana/calculadora-bolsa-de-viaje-espana", texto: "Calculadora de bolsa de viaje" }],
    },
    costoPorDias(10, "/images/destinos/granada.jpg", "Granada, España"),
    costoPorDias(15, "/images/destinos/sevilla.jpg", "Sevilla, España"),
    costoPorDias(30, "/images/destinos/barcelona.webp", "Barcelona, España"),
    {
      ...comun,
      slug: "cuanto-cuesta-viajar-a-espana-en-familia",
      tema: "dudaCosto",
      tituloSeo: "Cuánto cuesta viajar a España en familia",
      descripcion: `Presupuesto para una familia de 4 que viaja a España 15 días: pasajes, alojamiento, comida, transporte y bolsa de viaje de cada uno. Unos ${euros(familia.enEspana)} allá.`,
      migas: "Costo en familia",
      sello: "España · Familia de 4",
      h1: "Cuánto cuesta viajar a España en familia",
      bajada: "Para una familia de 4 que viaja 15 días, sumamos los pasajes, el alojamiento y lo que gastan allá. Los niños pagan menos en el pasaje, no en la bolsa de viaje.",
      chips: ["Familia de 4", "15 días", "Niños con tarifa de niño"],
      foto: "/images/destinos/valencia-artes.jpg",
      fotoAlt: "Ciudad de las Artes y las Ciencias, Valencia",
      mensaje: "¡Hola Cityland Travel! Viajamos 4 a España y quiero cotizar los pasajes de la familia.",
      pregunta: "Somos 2 adultos y 2 niños: ¿cuánto nos sale el pasaje a Madrid?",
      ctaMedio: {
        titulo: "Cotiza a toda la familia junta",
        texto: "Te reservamos los asientos juntos y te damos la tarifa de niño y de bebé de cada aerolínea.",
        boton: "Cotizar en familia",
        mensaje: "¡Hola Cityland Travel! Quiero cotizar pasajes a España para mi familia de 4.",
      },
      puntosTitulo: "Lo que cambia en familia",
      puntos: [
        { t: "Pasaje", d: "Los niños de 2 a 11 años pagan tarifa de niño y los bebés en brazos, tarifa de bebé. El precio de la tabla es de adulto: el real suele ser menor." },
        { t: "Alojamiento", d: "Una habitación familiar o un departamento sale mejor que dos habitaciones. Con familia allá, la carta de invitación puede incluirlos a todos." },
        { t: "Bolsa de viaje", d: "Se cuenta por cada uno, niños incluidos." },
        { t: "Transporte", d: "Los menores de 11 años pagan la mitad del abono turístico en Madrid." },
      ],
      listaTitulo: "Para ahorrar en familia",
      lista: ["Viajen en temporada baja", "Una sola carta de invitación para todos", "Departamento en vez de hotel", "Abono turístico a mitad de precio para los niños"],
      tabla: { titulo: "Presupuesto familia de 4, 15 días", columnas: ["Concepto", "Cuánto", "Detalle"], filas: familia.filas, nota: "Pasaje a precio de adulto: con tarifa de niño baja. Estimación de Cityland con datos del INE y del Consorcio de Transportes de Madrid." },
      faqs: [{ q: "¿Los niños pagan pasaje completo?", a: "No: de 2 a 11 años pagan tarifa de niño y los menores de 2 en brazos, tarifa de bebé." }, { q: "¿Los niños pagan bolsa de viaje?", a: "Sí, se cuenta por persona." }],
      enlaces: [...ENLACES, { href: "/espana/bolsa-de-viaje-espana-familia-y-ninos", texto: "Bolsa de viaje en familia" }],
    },
  ];
}

// ── Carta de invitación ─────────────────────────────────────────────────────────────────────────────────────

const FUENTE_CARTA = `Orden PRE/1283/2007 y Policía Nacional de España, consultado el ${FECHA_CONSULTA}.`;
const ENLACES_CARTA = [
  { href: "/blog/carta-invitacion-espana-peru-requisitos", texto: "Carta de invitación paso a paso" },
  { href: "/espana/viajar-a-espana-a-visitar-familia", texto: "Visitar a tu familia en España" },
  { href: "/vuelos/lima-madrid", texto: "Vuelos Lima–Madrid" },
];

function cartas(): LandingEspana[] {
  const base = {
    ...comun,
    tema: "dudaCarta" as const,
    mensaje: "¡Hola Cityland Travel! Mi familia me está haciendo la carta de invitación y quiero cotizar el pasaje a España.",
    ctaMedio: {
      titulo: "Ten el pasaje listo para la carta",
      texto: "En la solicitud van las fechas aproximadas del viaje. Te cotizamos y separamos tu fecha con el 50%.",
      boton: "Separar mi fecha",
      mensaje: "¡Hola Cityland Travel! Necesito las fechas del pasaje para la carta de invitación.",
    },
    enlaces: ENLACES_CARTA,
  };
  return [
    {
      ...base,
      slug: "carta-de-invitacion-espana-cuanto-cuesta",
      tituloSeo: `Carta de invitación España: cuánto cuesta (${euros(TASA_CARTA_TOTAL)})`,
      descripcion: `La carta de invitación para España cuesta ${euros(TASA_CARTA_TOTAL)} en tasas (modelo 790-012): ${euros(TASA_CARTA_SOLICITUD)} la solicitud y ${euros(TASA_CARTA_EXPEDICION)} la expedición. La paga quien invita.`,
      migas: "Carta de invitación: costo",
      sello: "Carta de invitación · Tasa",
      h1: "¿Cuánto cuesta la carta de invitación para España?",
      bajada: `La tasa la paga tu familiar o amigo en España: ${euros(TASA_CARTA_TOTAL)} en total. Te explicamos cada parte y cuándo se paga.`,
      chips: [euros(TASA_CARTA_TOTAL), "Modelo 790-012", "La paga quien invita"],
      foto: "/images/destinos/hospitalet.jpg",
      fotoAlt: "L'Hospitalet de Llobregat, junto a Barcelona",
      pregunta: "Mi familia ya pagó la tasa de la carta de invitación: ¿cuándo compro el pasaje?",
      puntosTitulo: "La tasa, paso a paso",
      puntos: [
        { t: `Solicitud: ${euros(TASA_CARTA_SOLICITUD)}`, d: "Se paga con el modelo 790-012 de la Policía Nacional." },
        { t: `Expedición: ${euros(TASA_CARTA_EXPEDICION)}`, d: "La segunda parte de la tasa, por la expedición de la carta." },
        { t: "Quién la paga", d: "Quien invita, en España. Tú no pagas nada desde el Perú." },
        { t: `Vale ${VIGENCIA_CARTA_MESES} meses`, d: "Desde que le notifican la resolución a tu familiar." },
      ],
      listaTitulo: "Lo que paga y presenta quien invita",
      lista: ["Solicitud oficial de carta de invitación", "Tasa 790-012 pagada", "Documento de identidad o TIE", "Prueba de que tiene la vivienda disponible"],
      tabla: { titulo: "Tasas de la carta de invitación", columnas: ["Concepto", "Importe"], filas: [["Solicitud", euros(TASA_CARTA_SOLICITUD)], ["Expedición", euros(TASA_CARTA_EXPEDICION)], ["Total", euros(TASA_CARTA_TOTAL)]], nota: FUENTE_CARTA },
      faqs: [
        { q: "¿Cuánto cuesta la carta de invitación?", a: `${euros(TASA_CARTA_TOTAL)} en tasas: ${euros(TASA_CARTA_SOLICITUD)} de solicitud y ${euros(TASA_CARTA_EXPEDICION)} de expedición.` },
        { q: "¿La carta reemplaza la bolsa de viaje?", a: "No. Reemplaza a la reserva de hotel; el dinero para tu estadía igual te lo pueden pedir." },
      ],
    },
    {
      ...base,
      slug: "carta-de-invitacion-espana-quien-puede-invitar",
      tituloSeo: "Carta de invitación España: quién puede invitar",
      descripcion: "Quién puede hacerte la carta de invitación para España: un español, un ciudadano de la UE o un extranjero con residencia legal. Si no tiene papeles, no puede.",
      migas: "Quién puede invitar",
      sello: "Carta de invitación · Quién invita",
      h1: "¿Quién te puede hacer la carta de invitación?",
      bajada: "No cualquier persona puede invitarte. Te contamos quién sí, qué tiene que demostrar y qué pasa si tu familiar no tiene papeles en España.",
      chips: ["Español o UE", "Residencia legal", "Vivienda disponible"],
      foto: "/images/destinos/badalona.jpg",
      fotoAlt: "Badalona, junto a Barcelona",
      pregunta: "Mi hermana vive en España con residencia: ¿con su carta ya puedo comprar mi pasaje?",
      puntosTitulo: "Quién sí puede",
      puntos: [
        { t: "Españoles", d: "Cualquier ciudadano español que viva en España." },
        { t: "Ciudadanos de la Unión Europea", d: "Y sus familiares del régimen comunitario." },
        { t: "Extranjeros con residencia legal", d: "Con su TIE o autorización de residencia vigente." },
        { t: "Si no tiene papeles, no puede", d: "Quien no tiene residencia legal en España no puede hacer la carta de invitación. En ese caso, viaja con reserva de hotel." },
      ],
      listaTitulo: "Lo que tiene que demostrar",
      lista: ["Su identidad y su residencia legal", "Que tiene la vivienda disponible para recibirte", "Su vínculo contigo", "Que se hace cargo de tu alojamiento"],
      faqs: [
        { q: "¿Mi familiar sin papeles me puede invitar?", a: "No. Solo pueden invitar españoles, ciudadanos de la UE y extranjeros con residencia legal." },
        { q: "¿Un amigo me puede invitar?", a: "Sí, si cumple los requisitos. En la solicitud declara el vínculo que tiene contigo." },
        { q: "¿Si no tengo carta, qué hago?", a: "Viaja con reserva de hotel. La carta solo reemplaza al alojamiento." },
      ],
    },
    {
      ...base,
      slug: "carta-de-invitacion-espana-cuanto-tarda",
      tituloSeo: "Carta de invitación España: cuánto tarda y vigencia",
      descripcion: `Cuánto tarda la carta de invitación para España, dónde se tramita y cuánto dura: vale ${VIGENCIA_CARTA_MESES} meses. Si no responden, se entiende negada.`,
      migas: "Cuánto tarda",
      sello: "Carta de invitación · Plazos",
      h1: "¿Cuánto tarda la carta de invitación?",
      bajada: `La norma no fija un número de días: la Policía la resuelve «con la mayor brevedad posible». Cuando sale, vale ${VIGENCIA_CARTA_MESES} meses. Pídela con tiempo.`,
      chips: ["Sin plazo fijo", `Vale ${VIGENCIA_CARTA_MESES} meses`, "Silencio = negada"],
      foto: "/images/destinos/sabadell.jpg",
      fotoAlt: "Sabadell, en Cataluña, España",
      pregunta: "La carta de invitación todavía no sale: ¿puedo separar el pasaje mientras tanto?",
      puntosTitulo: "Los plazos",
      puntos: [
        { t: "1. Se pide en la comisaría", d: "Tu familiar la solicita en persona en la comisaría de la Policía Nacional de donde vive, con cita previa si se la piden." },
        { t: "2. Puede haber entrevista", d: "Si lo citan a una entrevista y no va en 15 días, se entiende que desiste." },
        { t: "3. Sin plazo fijo", d: "No hay un número de días en la norma. Si no responden, la solicitud se entiende negada." },
        { t: `4. Vale ${VIGENCIA_CARTA_MESES} meses`, d: "Desde que notifican la resolución. Viaja dentro de ese plazo." },
      ],
      listaTitulo: "Para que no te falte tiempo",
      lista: ["Pídela al menos 2 meses antes del viaje", "Separa tu pasaje con el 50% mientras sale", "Lleva el original de la carta al viajar", `Viaja dentro de los ${VIGENCIA_CARTA_MESES} meses de vigencia`],
      faqs: [
        { q: "¿Cuánto demora la carta de invitación?", a: "No tiene un plazo fijo: depende de la comisaría. Pídela con al menos dos meses de margen." },
        { q: "¿Cuánto tiempo vale?", a: `${VIGENCIA_CARTA_MESES} meses desde que se notifica la resolución.` },
        { q: "¿Qué pasa si no responden?", a: "El silencio de la administración se entiende como negativa. En ese caso, viaja con reserva de hotel." },
      ],
    },
    {
      ...base,
      slug: "carta-de-invitacion-espana-varias-personas",
      tituloSeo: "Carta de invitación para varias personas o familia",
      descripcion: "Una carta de invitación para España puede incluir a varias personas, como toda tu familia, con los datos de cada una. Cómo pedirla y qué lleva cada viajero.",
      migas: "Varias personas",
      sello: "Carta de invitación · Familia",
      h1: "Carta de invitación para varias personas",
      bajada: "Si viajan tus papás o toda tu familia, una sola carta de invitación puede incluirlos a todos. Cada uno lleva igual su pasaporte, su pasaje y su bolsa de viaje.",
      chips: ["Una carta, varios", "Datos de cada uno", "Bolsa por persona"],
      foto: "/images/destinos/terrassa.jpg",
      fotoAlt: "Terrassa, en Cataluña, España",
      pregunta: "Viajamos 3 con la misma carta de invitación: ¿nos cotizan los pasajes juntos?",
      puntosTitulo: "Cómo funciona",
      puntos: [
        { t: "Una carta para varios", d: "La norma permite, de forma excepcional, incluir a varias personas en la misma carta, con los datos de cada una." },
        { t: "Cada uno, su bolsa", d: "La bolsa de viaje se cuenta por persona: la carta no la reemplaza." },
        { t: "Mismas fechas", d: "Como la carta lleva fechas aproximadas, conviene que viajen juntos o en fechas cercanas." },
        { t: "Original en el viaje", d: "Lleven el original de la carta; si viajan por separado, pregunten en la comisaría cómo hacerlo." },
      ],
      listaTitulo: "Lo que lleva cada viajero",
      lista: ["Su pasaporte vigente", "Su pasaje ida y vuelta", "La carta de invitación (original)", "Su bolsa de viaje"],
      faqs: [
        { q: "¿Una carta sirve para toda mi familia?", a: "Puede incluir a varias personas de forma excepcional, con los datos de cada una. Consúltalo en la comisaría al pedirla." },
        { q: "¿Cada uno necesita su bolsa de viaje?", a: "Sí, la bolsa se cuenta por cada viajero." },
      ],
    },
  ];
}

// ── Requisitos ──────────────────────────────────────────────────────────────────────────────────────────────

function requisitos(): LandingEspana[] {
  return [
    {
      ...comun,
      slug: "seguro-de-viaje-espana-es-obligatorio",
      tema: "dudaRequisito",
      tituloSeo: "¿El seguro de viaje es obligatorio para España?",
      descripcion: `Para un peruano que entra a España sin visa como turista, el seguro de viaje no es obligatorio: los 30.000 € son del visado Schengen. Por qué igual conviene.`,
      migas: "¿Seguro obligatorio?",
      sello: "Requisitos · Seguro de viaje",
      h1: "¿El seguro de viaje es obligatorio para entrar a España?",
      bajada: "Mucha gente cree que sí. Para un peruano que viaja como turista sin visa, la norma no lo exige. Te contamos de dónde viene la confusión y por qué igual te lo recomendamos.",
      chips: ["Sin visa: no obligatorio", "30.000 €: solo con visado", "Recomendado"],
      foto: "/images/destinos/a-coruna.jpg",
      fotoAlt: "A Coruña, en Galicia, España",
      mensaje: "¡Hola Cityland Travel! Quiero cotizar mi pasaje a España y un seguro de viaje.",
      pregunta: "¿Me cotizan el pasaje a España junto con un seguro de viaje?",
      ctaMedio: {
        titulo: "Pasaje y seguro en una sola cotización",
        texto: "Te mandamos el pasaje y un seguro recomendado para tus días, para que decidas.",
        boton: "Cotizar los dos",
        mensaje: "¡Hola Cityland Travel! Quiero cotizar pasaje y seguro de viaje para España.",
      },
      puntosTitulo: "Lo que dice la norma",
      puntos: [
        { t: "Sin visa, no lo exigen", d: "La lista oficial de requisitos para turistas exentos de visado no incluye el seguro de viaje." },
        { t: "Los 30.000 € son del visado", d: "El seguro con cobertura mínima de 30.000 € en todo el espacio Schengen lo exige el Código de Visados a quien pide visado." },
        { t: "Por qué igual conviene", d: "Una urgencia médica en España sin seguro puede costar miles de euros." },
        { t: "Cuánto cuesta", d: `Un plan básico de 15 días para Europa cuesta entre S/ ${SEGURO_15_DIAS_SOLES.min} y S/ ${SEGURO_15_DIAS_SOLES.max} en el mercado peruano.` },
      ],
      listaTitulo: "Lo que sí te pueden pedir",
      lista: ["Pasaporte vigente 3 meses después de tu salida", "Pasaje de regreso a tu nombre", "Reserva de hotel o carta de invitación", "Bolsa de viaje"],
      faqs: [
        { q: "¿Necesito seguro para viajar a España sin visa?", a: "No es obligatorio para turistas peruanos sin visa, pero te lo recomendamos." },
        { q: "¿Quién necesita seguro de 30.000 €?", a: "Quien pide visado Schengen: el Código de Visados lo exige con cobertura de al menos 30.000 €." },
      ],
      enlaces: [{ href: "/seguros", texto: "Seguro de viaje" }, ...ENLACES],
    },
    {
      ...comun,
      slug: "regla-90-180-dias-espana",
      tema: "dudaRequisito",
      tituloSeo: "Regla de 90/180 días en España: cómo contarla",
      descripcion: "Como turista peruano puedes estar hasta 90 días dentro de cualquier periodo de 180 en el espacio Schengen. Cómo contar tus días y la calculadora oficial de la UE.",
      migas: "Regla 90/180",
      sello: "Requisitos · 90 días",
      h1: "La regla de los 90 días en 180",
      bajada: "Como turista puedes estar en España y el resto del espacio Schengen hasta 90 días dentro de cualquier periodo de 180. Te explicamos cómo contarlos para elegir bien tu fecha de regreso.",
      chips: ["90 días", "En 180 días", "Todo Schengen"],
      foto: "/images/destinos/oviedo.jpg",
      fotoAlt: "Oviedo, en Asturias, España",
      mensaje: "¡Hola Cityland Travel! Quiero cotizar ida y vuelta a España con el regreso dentro de los 90 días.",
      pregunta: "Voy varias semanas de turismo a España: ¿qué fecha de regreso pongo en el pasaje?",
      ctaMedio: {
        titulo: "Pon el regreso a tiempo",
        texto: "Dinos tu fecha de ida y te cotizamos el regreso dentro de tus días, con tu nombre en el boleto.",
        boton: "Elegir mi regreso",
        mensaje: "¡Hola Cityland Travel! Quiero cotizar mi regreso de España dentro de los 90 días.",
      },
      puntosTitulo: "Cómo se cuenta",
      puntos: [
        { t: "90 días en 180", d: "Se miran los 180 días anteriores a cada día que estás en Schengen: en ese periodo no puedes sumar más de 90." },
        { t: "Cuenta todo Schengen", d: "Los días en Francia, Italia o Portugal se suman a los de España." },
        { t: "El día de entrada y el de salida cuentan", d: "Los dos se suman como días de estadía." },
        { t: "Usa la calculadora oficial", d: "La Comisión Europea tiene una calculadora de estancias cortas en su web: pon tus fechas y te dice cuántos días te quedan." },
      ],
      listaTitulo: "Antes de comprar tu regreso",
      lista: ["Suma tus viajes a Schengen de los últimos 180 días", "Pon el regreso dentro de tus días", "Ten en cuenta la bolsa de viaje por cada día", "Lleva tu pasaje de regreso a tu nombre"],
      faqs: [
        { q: "¿Cuántos días puedo estar en España como turista?", a: "Hasta 90 días dentro de cualquier periodo de 180, contando todo el espacio Schengen." },
        { q: "¿Si salgo a otro país de Europa se reinicia?", a: "No, si es un país Schengen: los días se suman. Fuera de Schengen (como Reino Unido) no cuentan." },
      ],
      enlaces: ENLACES,
    },
  ];
}

export const LANDINGS_DUDAS: LandingEspana[] = [...bolsa(), ...costos(), ...cartas(), ...requisitos()];
