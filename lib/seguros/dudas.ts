import type { LandingSeguro } from "@/lib/seguros/tipos";
import {
  CUBRIR_BASE,
  F_ARGENTINA,
  F_ASSIST_EUROPA,
  F_CODIGO_VISADOS,
  F_CONSULADO_ESPANA,
  F_CUBA,
  F_CURAZAO,
  F_FRANCIA,
  F_UNIVERSAL,
  PRECIO_EUROPA_15,
} from "@/lib/seguros/comun";

// Dudas con búsqueda real: qué cubre, cuánto cuesta, si es obligatorio y cómo usarlo.

const DESTINOS = { href: "/seguros", texto: "Todos los seguros" };

export function landingsDudas(): LandingSeguro[] {
  return [
    {
      slug: "seguro-de-viaje-es-obligatorio",
      grupo: "duda",
      tituloSeo: "¿El seguro de viaje es obligatorio? País por país",
      descripcion:
        "¿Dónde es obligatorio el seguro de viaje para peruanos? Francia, Curazao y Cuba sí; Argentina pide declararlo; España, EE. UU. y Punta Cana no. Con fuentes.",
      h1: "¿Es obligatorio el seguro de viaje? País por país",
      bajada:
        "Depende del país y de si viajas con visa o sin ella. Esta es la lista para peruanos que viajan como turistas, revisada con fuentes oficiales.",
      migas: "¿Es obligatorio?",
      sello: "Dudas · Obligatorio",
      foto: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
      fotoAlt: "Avión despegando",
      veredicto: {
        estado: "obligatorio",
        titular: "Sí en Francia, Curazao y Cuba",
        detalle: "Argentina pide declarar que tienes seguro de salud. Quien pide visa Schengen necesita 30.000 € de cobertura.",
      },
      cubrir: CUBRIR_BASE,
      secciones: [
        {
          id: "lista",
          titulo: "La lista para peruanos que viajan como turistas",
          tabla: {
            cab: ["Destino", "¿Obligatorio?", "Qué piden"],
            filas: [
              ["Francia", "Sí", "Gastos médicos, hospitalización, fallecimiento y repatriación"],
              ["Curazao", "Sí", "Mínimo US$ 15,000 en gastos médicos, hospitalización y repatriación"],
              ["Cuba", "Sí", "Emergencias, evacuación médica y repatriación de restos"],
              ["Argentina", "Declararlo", "Declaración jurada de que tienes seguro de salud"],
              ["Visa Schengen", "Sí", "Mínimo 30.000 € en todo el espacio Schengen"],
              ["España e Italia (sin visa)", "No", "Recomendable"],
              ["Estados Unidos", "No", "Muy recomendable por el costo médico"],
              ["México, Punta Cana, Brasil, Colombia, Chile", "No", "Recomendable"],
            ],
          },
        },
        {
          id: "aunque-no",
          titulo: "Aunque no sea obligatorio",
          texto: [
            "Que un país no lo exija no quiere decir que te atiendan gratis. En el extranjero, la urgencia la pagas tú, y la repatriación al Perú por tu cuenta es carísima.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero saber si mi destino pide seguro de viaje.",
      pregunta: "Viajo a Europa entrando por París. ¿Me piden seguro?",
      faqs: [
        { q: "¿El seguro es obligatorio para España?", a: "Para peruanos sin visa, no: el Consulado lo califica como recomendable." },
        { q: "¿Y para Francia?", a: "Sí. France-Visas lo pide a todos los viajeros, con o sin visa." },
        { q: "¿Para Argentina?", a: "La ley pide declarar al entrar que tienes seguro de salud." },
      ],
      fuentes: [F_CONSULADO_ESPANA, F_CODIGO_VISADOS, F_FRANCIA, F_CURAZAO, F_CUBA, F_ARGENTINA],
      enlaces: [
        { href: "/seguros/seguro-de-viaje-francia", texto: "Seguro para Francia" },
        { href: "/seguros/seguro-de-viaje-curazao", texto: "Seguro para Curazao" },
        { href: "/seguros/seguro-de-viaje-cuba", texto: "Seguro para Cuba" },
        { href: "/seguros/seguro-de-viaje-argentina", texto: "Seguro para Argentina" },
        DESTINOS,
      ],
    },
    {
      slug: "cuanto-cuesta-un-seguro-de-viaje",
      grupo: "duda",
      tituloSeo: "¿Cuánto cuesta un seguro de viaje en Perú?",
      descripcion:
        "Cuánto cuesta un seguro de viaje desde Perú: Europa 15 días entre S/ 180 y S/ 280 en plan básico, y qué hace subir o bajar el precio. Cotiza por WhatsApp.",
      h1: "¿Cuánto cuesta un seguro de viaje?",
      bajada:
        "No hay un precio único: cambia con el destino, los días, tu edad y la cobertura. Te damos la referencia de mercado que sí tenemos y te cotizamos el tuyo en minutos.",
      migas: "¿Cuánto cuesta?",
      sello: "Dudas · Precio",
      foto: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
      fotoAlt: "Hotel con piscina",
      cubrir: CUBRIR_BASE,
      secciones: [
        {
          id: "referencia",
          titulo: "Referencia de mercado",
          tabla: {
            cab: ["Viaje", "Precio en el mercado peruano"],
            filas: [
              ["Europa, 15 días, plan básico", PRECIO_EUROPA_15],
              ["Otros destinos, días y edades", "Cotiza por WhatsApp"],
            ],
          },
          texto: ["Es una referencia, no una tarifa fija. Las aseguradoras cambian sus promociones cada mes."],
        },
        {
          id: "que-mueve",
          titulo: "Qué hace subir o bajar el precio",
          tabla: {
            cab: ["Factor", "Efecto"],
            filas: [
              ["Destino", "Estados Unidos y Europa cuestan más que Sudamérica"],
              ["Días", "Más días, más precio"],
              ["Edad", "Sube con la edad, sobre todo después de los 70"],
              ["Cobertura", "Más monto médico, más precio"],
              ["Extras", "Preexistencias, embarazo, deportes o cancelación suman"],
              ["Promociones", "Descuentos del mes y menores con precio especial"],
            ],
          },
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero saber cuánto cuesta un seguro de viaje.",
      pregunta: "¿Cuánto cuesta un seguro para Europa de 15 días para 2 personas de 40 años?",
      faqs: [
        { q: "¿Cuánto cuesta un seguro para Europa por 15 días?", a: `Un plan básico está entre ${PRECIO_EUROPA_15} en el mercado peruano. El tuyo depende de tu edad y la cobertura.` },
        { q: "¿Es más barato comprarlo directo en la aseguradora?", a: "No necesariamente. Te mostramos las opciones y la promoción vigente, y te lo sumamos al pasaje." },
      ],
      fuentes: [F_ASSIST_EUROPA, F_UNIVERSAL],
      enlaces: [
        { href: "/seguros/seguro-de-viaje-europa", texto: "Seguro para Europa" },
        { href: "/seguros/seguro-de-viaje-anual-multiviajes", texto: "Plan anual" },
        { href: "/seguros/que-cubre-el-seguro-de-viaje", texto: "¿Qué cubre?" },
        DESTINOS,
      ],
    },
    {
      slug: "que-cubre-el-seguro-de-viaje",
      grupo: "duda",
      tituloSeo: "¿Qué cubre un seguro de viaje? Lo que sí y no",
      descripcion:
        "Qué cubre un seguro de viaje: atención médica, hospitalización, medicinas, repatriación y equipaje. Y lo que normalmente no cubre. Explicado sin letra chica.",
      h1: "¿Qué cubre un seguro de viaje?",
      bajada:
        "El seguro de viaje (o asistencia al viajero) es para urgencias en el extranjero. Esto es lo que normalmente cubre, lo que no, y cómo leer tu certificado.",
      migas: "¿Qué cubre?",
      sello: "Dudas · Coberturas",
      foto: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85",
      fotoAlt: "Pasajeros en el aeropuerto",
      cubrir: CUBRIR_BASE,
      secciones: [
        {
          id: "si",
          titulo: "Lo que normalmente sí cubre",
          lista: [
            "Atención médica por accidente o enfermedad repentina.",
            "Hospitalización, cirugía de urgencia y medicamentos recetados.",
            "Odontología de urgencia (con un tope menor).",
            "Repatriación sanitaria y de restos al Perú.",
            "Compensación por equipaje perdido por la aerolínea, según el plan.",
            "Demora de vuelo o de equipaje, cancelación y asistencia legal, en los planes más completos.",
          ],
        },
        {
          id: "no",
          titulo: "Lo que normalmente no cubre",
          estilo: "aviso",
          lista: [
            "Controles y tratamientos que ya tenías programados.",
            "Enfermedades que ya tenías, salvo que el plan incluya preexistencias.",
            "Deportes de riesgo, si el plan no los suma.",
            "Lo que pasó sin avisar antes a la central de asistencia (en muchos planes).",
          ],
        },
        {
          id: "certificado",
          titulo: "Cómo leer tu certificado",
          texto: ["Busca el monto de asistencia médica, el de repatriación, las fechas de vigencia y el teléfono de la central. Si algo no está claro, pregúntanos antes de viajar."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero un seguro de viaje y saber qué cubre.",
      pregunta: "¿El seguro me cubre si pierden mi maleta en una conexión?",
      faqs: [
        { q: "¿El seguro de viaje cubre la cancelación del vuelo?", a: "Solo los planes que incluyen cancelación, y por las causas que dice la póliza." },
        { q: "¿Cubre COVID u otras enfermedades?", a: "Las enfermedades repentinas durante el viaje sí; revisa en tu plan los topes y exclusiones." },
        { q: "¿Es lo mismo seguro de viaje que asistencia al viajero?", a: "En la práctica sí: la asistencia te atiende y paga por ti en la red de la central." },
      ],
      fuentes: [F_ASSIST_EUROPA],
      enlaces: [
        { href: "/seguros/como-usar-el-seguro-de-viaje", texto: "Cómo usarlo" },
        { href: "/seguros/cuanto-cuesta-un-seguro-de-viaje", texto: "¿Cuánto cuesta?" },
        DESTINOS,
      ],
    },
    {
      slug: "como-usar-el-seguro-de-viaje",
      grupo: "duda",
      tituloSeo: "Cómo usar el seguro de viaje: paso a paso",
      descripcion:
        "Cómo usar tu seguro de viaje si te enfermas afuera: a quién llamar primero, qué datos dar, cómo pedir un reembolso y qué guardar. Paso a paso.",
      h1: "Cómo usar tu seguro de viaje, paso a paso",
      bajada:
        "Lo más importante: antes de ir a una clínica, llama o escribe a la central de asistencia. Así te mandan a un médico de su red y no pagas de tu bolsillo.",
      migas: "Cómo usarlo",
      sello: "Dudas · Paso a paso",
      foto: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85",
      fotoAlt: "Calle de una ciudad de noche",
      cubrir: CUBRIR_BASE,
      secciones: [
        {
          id: "antes",
          titulo: "Antes de viajar",
          estilo: "pasos",
          lista: [
            "Guarda el certificado en PDF en tu celular y una copia impresa.",
            "Agenda el teléfono y el WhatsApp de la central de asistencia.",
            "Anota tu número de póliza o voucher.",
          ],
        },
        {
          id: "urgencia",
          titulo: "Si te enfermas o tienes un accidente",
          estilo: "pasos",
          lista: [
            "Llama o escribe a la central antes de ir a la clínica (en una emergencia grave, ve primero y avisa apenas puedas).",
            "Da tu número de póliza, dónde estás y qué te pasa.",
            "Ve al médico o la clínica que te indiquen.",
            "Guarda informes médicos, recetas y boletas de todo lo que pagues.",
          ],
        },
        {
          id: "reembolso",
          titulo: "Si pagaste algo",
          texto: [
            "Pide el reembolso (reintegro) a la aseguradora con las boletas, el informe médico y tu póliza. Cada aseguradora tiene su plazo: hazlo apenas vuelvas.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Tengo una duda sobre cómo usar mi seguro de viaje.",
      pregunta: "Estoy de viaje y me duele la muela. ¿Cómo uso mi seguro?",
      faqs: [
        { q: "¿Tengo que llamar antes de ir al médico?", a: "Sí, salvo en una emergencia grave. Muchos planes no reembolsan si no avisaste a la central." },
        { q: "¿Cómo uso el seguro de mi tarjeta de crédito?", a: "Igual: llama a la central que figura en el certificado de tu tarjeta. Pide ese certificado a tu banco antes de viajar." },
      ],
      fuentes: [F_ASSIST_EUROPA],
      enlaces: [
        { href: "/seguros/que-cubre-el-seguro-de-viaje", texto: "¿Qué cubre?" },
        { href: "/seguros/seguro-de-viaje-es-obligatorio", texto: "¿Dónde es obligatorio?" },
        DESTINOS,
      ],
    },
  ];
}
