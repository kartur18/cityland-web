import type { LandingSeguro } from "@/lib/seguros/tipos";
import {
  CUBRIR_BASE,
  ENLACES_DUDAS,
  F_ARGENTINA,
  F_ASSIST_EUROPA,
  F_CODIGO_VISADOS,
  F_CONSULADO_ESPANA,
  F_CUBA,
  F_CURAZAO,
  F_DOMINICANA,
  F_FRANCIA,
  PRECIO_EUROPA_15,
} from "@/lib/seguros/comun";

// Seguro por destino: solo países con búsqueda real en Google Perú (sugerencias del 29-oct-2026).

const SCHENGEN = "Válido en todos los países del espacio Schengen, no solo en el de llegada";

export function landingsDestinos(): LandingSeguro[] {
  return [
    {
      slug: "seguro-de-viaje-europa",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Europa desde Perú",
      descripcion:
        "Seguro de viaje para Europa desde Lima: qué piden en el espacio Schengen, la cobertura de 30.000 € y cuánto cuesta. Te lo cotizamos por WhatsApp.",
      h1: "Seguro de viaje para Europa desde Perú",
      bajada:
        "Los peruanos entran a Europa sin visa por turismo, así que en la mayoría de países el seguro no es condición de entrada. Francia es la excepción, y una urgencia médica en Europa se paga cara. Te cotizamos una póliza que vale en todo Schengen.",
      migas: "Europa",
      sello: "Seguro por destino · Europa",
      foto: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
      fotoAlt: "Avión volando sobre las nubes rumbo a Europa",
      destino: "Europa (espacio Schengen)",
      veredicto: {
        estado: "recomendado",
        titular: "Recomendado; en Francia, obligatorio",
        detalle:
          "El seguro de 30.000 € lo exige el Código de Visados a quien pide visa Schengen. Los peruanos no la piden para turismo, pero Francia sí exige seguro a todos los viajeros.",
      },
      cubrir: [
        "Gastos médicos de al menos 30.000 € (la vara que usa el visado Schengen)",
        SCHENGEN,
        ...CUBRIR_BASE.slice(2),
      ],
      secciones: [
        {
          id: "pais-por-pais",
          titulo: "Qué pide cada país de Europa",
          tabla: {
            cab: ["País", "¿Seguro obligatorio para peruanos sin visa?"],
            filas: [
              ["España", "No; el Consulado lo califica como recomendable"],
              ["Italia", "No es condición de entrada; recomendable"],
              ["Francia", "Sí: gastos médicos, hospitalización, fallecimiento y repatriación"],
              ["Con visa Schengen", "Sí: mínimo 30.000 € en todo el espacio Schengen"],
            ],
          },
        },
        {
          id: "por-que-llevarlo",
          titulo: "Por qué igual te conviene",
          texto: [
            "En Europa la atención médica se cobra al turista. Una consulta, una radiografía o una noche de hospital pueden costar más que todo tu seguro.",
            "Si vas a varios países, una sola póliza para todo Schengen te evita revisar las reglas de cada frontera. Y si tu recorrido pasa por Francia, ya vas cubierto con lo que piden.",
          ],
        },
        {
          id: "precio",
          titulo: "Cuánto cuesta",
          texto: [
            `Como referencia, un plan básico de 15 días para Europa cuesta entre ${PRECIO_EUROPA_15} en el mercado peruano. El precio final cambia con tu edad, tus días y la cobertura que elijas.`,
            "Escríbenos tus fechas y edades, y te mandamos las opciones por WhatsApp.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Europa.",
      pregunta: "Voy 20 días a España, Francia e Italia. ¿Qué seguro me sirve para los tres?",
      faqs: [
        { q: "¿El seguro es obligatorio para entrar a Europa?", a: "Para peruanos sin visa, solo Francia lo exige como requisito. El de 30.000 € es obligatorio para quien pide visa Schengen." },
        { q: "¿Un solo seguro me sirve para varios países?", a: "Sí, si la póliza dice que cubre todo el espacio Schengen y todos los días de tu viaje." },
        { q: "¿Lo puedo sacar el mismo día del viaje?", a: "Sí, pero tiene que empezar a regir antes de que salgas del Perú. Mejor sácalo con tiempo y llévalo impreso." },
      ],
      fuentes: [F_CODIGO_VISADOS, F_CONSULADO_ESPANA, F_FRANCIA, F_ASSIST_EUROPA],
      enlaces: [
        { href: "/blog/seguro-schengen-30000-euros-peru-precio", texto: "Seguro Schengen de 30.000 €" },
        { href: "/circuitos-por-europa", texto: "Circuitos por Europa" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-espana",
      grupo: "destino",
      tituloSeo: "Seguro de viaje a España desde Lima: precio",
      descripcion:
        "Seguro de viaje para España desde Perú: no es obligatorio sin visa, pero es recomendable. Cuánto cuesta (15 días: S/ 180 a 280) y qué debe cubrir.",
      h1: "Seguro de viaje para España desde Lima",
      bajada:
        "Si entras a España como turista sin visa, la norma no te exige seguro: el Consulado lo califica como recomendable. Igual te lo aconsejamos, sobre todo si vas a visitar a tu familia por varias semanas.",
      migas: "España",
      sello: "Seguro por destino · España",
      foto: "/images/espana/puerta-de-alcala.jpg",
      fotoAlt: "Puerta de Alcalá en Madrid",
      destino: "España",
      veredicto: {
        estado: "recomendado",
        titular: "No obligatorio sin visa; recomendable",
        detalle:
          "Para peruanos que entran sin visa, el Consulado General de España en Lima lo pone como recomendable. Los 30.000 € son obligatorios solo para quien pide visa (por ejemplo, la de estudios).",
      },
      cubrir: ["Gastos médicos de al menos 30.000 €", SCHENGEN, ...CUBRIR_BASE.slice(2)],
      secciones: [
        {
          id: "precio",
          titulo: "Cuánto cuesta un seguro para España",
          tabla: {
            cab: ["Viaje", "Referencia en el mercado peruano"],
            filas: [
              ["15 días, plan básico", PRECIO_EUROPA_15],
              ["Más días, más edad o más cobertura", "Cotiza por WhatsApp"],
            ],
          },
          texto: ["Es una referencia del mercado, no una tarifa fija: te mandamos el precio exacto con tus fechas y edades."],
        },
        {
          id: "cuando-sirve",
          titulo: "Cuándo te sirve de verdad",
          lista: [
            "Si te enfermas o tienes un accidente: en España la atención al turista se cobra.",
            "Si viajas a ver a tus padres o hijos por un mes o más: más días, más riesgo.",
            "Si tu viaje sigue a Francia: allá sí es obligatorio.",
            "En el control de Barajas suma como un documento más de tu viaje.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para España.",
      pregunta: "Viajo a Madrid un mes a ver a mi hija. ¿Cuánto me sale el seguro?",
      faqs: [
        { q: "¿Me pueden negar la entrada a España sin seguro?", a: "Para peruanos sin visa no es requisito obligatorio. La policía de frontera mira todo tu viaje, y llevar seguro suma." },
        { q: "¿Necesito 30.000 € de cobertura?", a: "Solo si pides visa. Igual te recomendamos esa cobertura como mínimo: es la vara que usa Europa." },
        { q: "¿Me lo cotizan junto con el pasaje?", a: "Sí. Te mandamos pasaje y seguro en una sola cotización por WhatsApp." },
      ],
      fuentes: [F_CONSULADO_ESPANA, F_CODIGO_VISADOS],
      enlaces: [
        { href: "/espana/seguro-de-viaje-espana-es-obligatorio", texto: "¿Es obligatorio para España?" },
        { href: "/viajes/requisitos-viajar-a-espana-desde-peru", texto: "Requisitos para España" },
        { href: "/pasajes-a-espana", texto: "Pasajes a España" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-italia",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Italia desde Perú",
      descripcion:
        "Seguro de viaje para Italia desde Lima: para peruanos sin visa no es condición de entrada, pero conviene. Qué debe cubrir y cómo cotizarlo por WhatsApp.",
      h1: "Seguro de viaje para Italia desde Perú",
      bajada:
        "Los peruanos entran a Italia sin visa por turismo y la norma no pone el seguro como condición. Pero atenderte en un hospital italiano sin póliza puede costarte mucho más que el seguro.",
      migas: "Italia",
      sello: "Seguro por destino · Italia",
      foto: "/images/destinos/roma.jpg",
      fotoAlt: "Coliseo de Roma",
      destino: "Italia",
      veredicto: {
        estado: "recomendado",
        titular: "No es condición de entrada; recomendable",
        detalle:
          "El seguro de 30.000 € lo exige el Código de Visados a quien pide visa. Las condiciones de entrada para quien no la necesita no incluyen el seguro.",
      },
      cubrir: ["Gastos médicos de al menos 30.000 €", SCHENGEN, ...CUBRIR_BASE.slice(2)],
      secciones: [
        {
          id: "combinados",
          titulo: "Si Italia es parte de un recorrido",
          texto: [
            "Muchos viajes a Italia pasan por Francia o España. Francia sí exige seguro a todos los viajeros, así que conviene sacar una póliza para todo Schengen desde el primer día.",
          ],
        },
        {
          id: "precio",
          titulo: "Cuánto cuesta",
          texto: [
            `Como referencia, un plan básico de 15 días para Europa cuesta entre ${PRECIO_EUROPA_15} en el mercado peruano. Te cotizamos el tuyo con tus fechas y edades.`,
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Italia.",
      pregunta: "Viajo a Milán 20 días. ¿Cuánto cuesta un seguro con cobertura de 30.000 €?",
      faqs: [
        { q: "¿Necesito seguro para entrar a Italia sin visa?", a: "No es condición de entrada para peruanos sin visa, pero te lo recomendamos." },
        { q: "¿Sirve el seguro de mi tarjeta de crédito?", a: "A veces. Revisa que cubra atención médica en Europa, el monto, los días del viaje y la repatriación, y lleva el certificado." },
      ],
      fuentes: [F_CODIGO_VISADOS],
      enlaces: [
        { href: "/italia/seguro-de-viaje-italia-es-obligatorio", texto: "¿Es obligatorio para Italia?" },
        { href: "/viajes/requisitos-viajar-a-italia-desde-peru", texto: "Requisitos para Italia" },
        { href: "/paquetes-a-italia", texto: "Paquetes a Italia" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-francia",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Francia: sí es obligatorio",
      descripcion:
        "Para entrar a Francia sí te piden seguro, con o sin visa: gastos médicos, hospitalización, fallecimiento y repatriación. Te lo emitimos y cotizamos por WhatsApp.",
      h1: "Seguro de viaje para Francia: obligatorio también sin visa",
      bajada:
        "A diferencia de España e Italia, Francia sí pide seguro a todos los viajeros. Si tu viaje pasa por París, llévalo impreso y que cubra todos tus días en Europa.",
      migas: "Francia",
      sello: "Seguro por destino · Francia",
      foto: "/images/destinos/paris.webp",
      fotoAlt: "Torre Eiffel en París",
      destino: "Francia",
      veredicto: {
        estado: "obligatorio",
        titular: "Sí, obligatorio",
        detalle:
          "France-Visas indica que debes llevar un certificado de seguro que cubra gastos médicos, hospitalización y fallecimiento durante tu estancia, incluida la repatriación por motivos médicos.",
      },
      cubrir: [
        "Gastos médicos y de hospitalización",
        "Fallecimiento y repatriación por motivos médicos",
        SCHENGEN,
        "Todos los días de tu estancia",
        "Central de asistencia 24 horas en español",
      ],
      secciones: [
        {
          id: "en-frontera",
          titulo: "Qué llevar a la frontera",
          estilo: "aviso",
          lista: [
            "El certificado del seguro impreso, con tus nombres y las fechas a la vista.",
            "Que diga que cubre Francia (o todo Schengen) y repatriación.",
            "Pasaje de regreso, reserva de hotel o attestation d'accueil, y dinero para tu estadía.",
          ],
        },
        {
          id: "precio",
          titulo: "Cuánto cuesta",
          texto: [
            `Un plan básico de 15 días para Europa cuesta entre ${PRECIO_EUROPA_15} en el mercado peruano. El tuyo depende de tu edad y de los días: cotízalo por WhatsApp.`,
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar el seguro de viaje para Francia.",
      pregunta: "Entro a Europa por París y luego voy a España. ¿Qué seguro necesito?",
      faqs: [
        { q: "¿Francia pide seguro a los peruanos sin visa?", a: "Sí. France-Visas lo pide a todos los viajeros, tengan o no visa." },
        { q: "¿Qué debe cubrir?", a: "Gastos médicos, hospitalización, fallecimiento y repatriación por motivos médicos, durante toda tu estancia." },
        { q: "¿Si entro por España y luego voy a Francia?", a: "Igual lo necesitas para Francia. Saca uno que cubra todo Schengen y todos tus días." },
      ],
      fuentes: [F_FRANCIA],
      enlaces: [
        { href: "/viajes/requisitos-viajar-a-francia-desde-peru", texto: "Requisitos para Francia" },
        { href: "/paquetes-a-francia", texto: "Paquetes a Francia" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-estados-unidos",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Estados Unidos desde Perú",
      descripcion:
        "Seguro de viaje para Estados Unidos desde Lima: no lo piden para entrar, pero la atención médica allá es carísima. Qué cobertura elegir y cómo cotizar.",
      h1: "Seguro de viaje para Estados Unidos",
      bajada:
        "Estados Unidos no te pide seguro para entrar con tu visa de turista. Pero allá un hospital cobra como en pocos países: por eso es el destino donde más conviene una cobertura alta.",
      migas: "Estados Unidos",
      sello: "Seguro por destino · Estados Unidos",
      foto: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
      fotoAlt: "Rascacielos de Nueva York",
      destino: "Estados Unidos",
      veredicto: {
        estado: "no-obligatorio",
        titular: "No lo piden; muy recomendable",
        detalle: "El seguro no es requisito de la visa de turista ni del ingreso. La atención médica privada en Estados Unidos se paga completa.",
      },
      cubrir: [
        "Cobertura médica alta: en Estados Unidos conviene más que en otros destinos",
        "Hospitalización y emergencias sin que adelantes el pago",
        ...CUBRIR_BASE.slice(1, 4),
        "Demora o pérdida de equipaje, si haces conexiones",
      ],
      secciones: [
        {
          id: "cobertura",
          titulo: "Qué cobertura elegir",
          texto: [
            "Para Estados Unidos te recomendamos subir un escalón de cobertura respecto a Sudamérica o el Caribe. La diferencia de precio suele ser chica frente a lo que cuesta una urgencia allá.",
            "Si viajas a Orlando con niños o a ver a tu familia por varias semanas, dinos las edades y los días: con eso te cotizamos la opción que conviene.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Estados Unidos.",
      pregunta: "Viajo a Miami y Orlando 12 días con mis dos hijos. ¿Qué seguro nos conviene?",
      faqs: [
        { q: "¿Es obligatorio el seguro para entrar a Estados Unidos?", a: "No. No es requisito de la visa de turista ni del ingreso." },
        { q: "¿Mi seguro de salud peruano me cubre allá?", a: "Normalmente no. Revisa tu póliza; si no dice que cubre en el extranjero, necesitas un seguro de viaje." },
      ],
      fuentes: [],
      enlaces: [
        { href: "/visa-americana", texto: "Visa americana" },
        { href: "/paquetes-a-estados-unidos", texto: "Paquetes a Estados Unidos" },
        { href: "/paquetes-a-orlando-disney", texto: "Orlando y Disney" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-punta-cana",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Punta Cana y el Caribe",
      descripcion:
        "¿Es obligatorio el seguro de viaje para Punta Cana? No para entrar a República Dominicana, pero conviene. Qué debe cubrir en playa y excursiones.",
      h1: "Seguro de viaje para Punta Cana y el Caribe",
      bajada:
        "República Dominicana no pone el seguro entre sus requisitos de entrada. En el Caribe sí cambian las reglas de isla a isla: Curazao y Cuba lo exigen. Te decimos cuál necesitas.",
      migas: "Punta Cana y Caribe",
      sello: "Seguro por destino · Caribe",
      foto: "/images/destinos/punta-cana.webp",
      fotoAlt: "Playa de Punta Cana",
      destino: "Punta Cana (República Dominicana)",
      veredicto: {
        estado: "no-obligatorio",
        titular: "Punta Cana: no es obligatorio",
        detalle: "El seguro no figura en los requisitos de entrada de República Dominicana. Para Curazao y Cuba sí es obligatorio.",
      },
      cubrir: [...CUBRIR_BASE, "Accidentes en excursiones y deportes de playa, según el plan"],
      secciones: [
        {
          id: "islas",
          titulo: "El seguro, isla por isla",
          tabla: {
            cab: ["Destino", "¿Obligatorio?"],
            filas: [
              ["Punta Cana (República Dominicana)", "No"],
              ["Cancún (México)", "No"],
              ["Curazao", "Sí: mínimo US$ 15,000 en gastos médicos"],
              ["Cuba", "Sí: emergencias, evacuación y repatriación"],
            ],
          },
        },
        {
          id: "resort",
          titulo: "En el resort también pasa",
          texto: [
            "Una intoxicación, una caída en la piscina o un golpe en una excursión de lancha: son las urgencias más comunes en el Caribe. Con seguro, la central te manda al médico sin que pagues de tu bolsillo.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Punta Cana.",
      pregunta: "Vamos a Punta Cana 7 noches en pareja. ¿Es obligatorio el seguro?",
      faqs: [
        { q: "¿Punta Cana pide seguro de viaje?", a: "No está en los requisitos de entrada de República Dominicana. Igual te lo recomendamos." },
        { q: "¿El seguro viene en el paquete?", a: "Depende del paquete. Si no viene, te lo sumamos a la cotización." },
      ],
      fuentes: [F_DOMINICANA, F_CURAZAO, F_CUBA],
      enlaces: [
        { href: "/viajes/requisitos-viajar-a-punta-cana-desde-peru", texto: "Requisitos para Punta Cana" },
        { href: "/paquetes-a-punta-cana", texto: "Paquetes a Punta Cana" },
        { href: "/caribe", texto: "Paquetes al Caribe" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-mexico",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para México y Cancún",
      descripcion:
        "Seguro de viaje para México y Cancún desde Perú: no es requisito para entrar, pero conviene en playa y ciudad. Qué cubrir y cómo cotizarlo por WhatsApp.",
      h1: "Seguro de viaje para México y Cancún",
      bajada:
        "México no te pide seguro para entrar. Pero si vas a Cancún con tours de cenotes y snorkel, o a Ciudad de México varios días, una póliza te ahorra un mal rato y mucho dinero.",
      migas: "México",
      sello: "Seguro por destino · México",
      foto: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
      fotoAlt: "Playa turquesa de Cancún",
      destino: "México",
      veredicto: {
        estado: "no-obligatorio",
        titular: "No es obligatorio; recomendable",
        detalle: "El seguro no es requisito de entrada a México. Lo que sí te revisan es tu documentación de viaje.",
      },
      cubrir: [...CUBRIR_BASE, "Accidentes en tours y actividades (cenotes, snorkel), según el plan"],
      secciones: [
        {
          id: "actividades",
          titulo: "Revisa las actividades",
          texto: [
            "Algunos planes excluyen actividades de aventura. Si vas a bucear o hacer tirolesa, dinos qué tours tienes y te cotizamos uno que las cubra.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para México.",
      pregunta: "Viajo a Cancún 6 días y voy a hacer snorkel. ¿El seguro lo cubre?",
      faqs: [
        { q: "¿México pide seguro de viaje?", a: "No es requisito de entrada. Te lo recomendamos igual." },
        { q: "¿Me cubre en los tours?", a: "Depende del plan: algunos excluyen deportes de aventura. Avísanos qué actividades harás." },
      ],
      fuentes: [],
      enlaces: [
        { href: "/paquetes-a-cancun", texto: "Paquetes a Cancún" },
        { href: "/paquetes-a-mexico", texto: "Paquetes a México" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-curazao",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Curazao: obligatorio",
      descripcion:
        "Curazao exige seguro de viaje: mínimo US$ 15,000 en gastos médicos, con hospitalización, emergencias y repatriación. Te lo emitimos por WhatsApp.",
      h1: "Seguro de viaje para Curazao: obligatorio",
      bajada:
        "Para entrar a Curazao sin visa, el seguro es requisito: tiene que cubrir al menos US$ 15,000 en gastos médicos. Te emitimos una póliza que cumple y la llevas impresa.",
      migas: "Curazao",
      sello: "Seguro por destino · Curazao",
      foto: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85",
      fotoAlt: "Mar turquesa del Caribe en Curazao",
      destino: "Curazao",
      veredicto: {
        estado: "obligatorio",
        titular: "Sí, mínimo US$ 15,000",
        detalle:
          "El gobierno de los Países Bajos pide un seguro médico o de viaje que cubra al menos US$ 15,000 en gastos médicos, con hospitalización, emergencias y repatriación, incluso por fallecimiento.",
      },
      cubrir: [
        "Gastos médicos de al menos US$ 15,000",
        "Hospitalización y atención de emergencia",
        "Repatriación, también en caso de fallecimiento",
        "Todos los días que estés en la isla",
      ],
      secciones: [
        {
          id: "checklist",
          titulo: "Para entrar a Curazao lleva",
          estilo: "pasos",
          lista: [
            "Pasaporte vigente, emitido hace menos de 10 años.",
            "Tarjeta digital de inmigración (se llena hasta 7 días antes del vuelo).",
            "Certificado de vacuna contra la fiebre amarilla.",
            "Seguro con la cobertura de US$ 15,000 a la vista, impreso.",
            "Pasaje de regreso y reserva de hotel o invitación.",
          ],
        },
        {
          id: "aruba",
          titulo: "¿Y si combinas con Aruba?",
          texto: ["Dinos el recorrido completo: te cotizamos una sola póliza para todos los días y todas las islas."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Necesito el seguro de viaje obligatorio para Curazao.",
      pregunta: "Viajo a Curazao en dos semanas. ¿Me emiten el seguro con los US$ 15,000?",
      faqs: [
        { q: "¿El seguro es obligatorio para Curazao?", a: "Sí. Es requisito de entrada para quienes viajan sin visa, como los peruanos." },
        { q: "¿Cuánto tiene que cubrir?", a: "Al menos US$ 15,000 en gastos médicos, con hospitalización, emergencias y repatriación." },
        { q: "¿Me sirve el seguro de mi tarjeta?", a: "Solo si su certificado muestra esa cobertura y esos conceptos. Si no, mejor una póliza propia." },
      ],
      fuentes: [F_CURAZAO],
      enlaces: [
        { href: "/viajes/requisitos-viajar-a-curazao-desde-peru", texto: "Requisitos para Curazao" },
        { href: "/blog/requisitos-vacuna-fiebre-amarilla-aruba-curazao-panama", texto: "Vacuna para Curazao" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-cuba",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Cuba: es obligatorio",
      descripcion:
        "Para entrar a Cuba te piden seguro médico: emergencias, repatriación de restos y evacuación médica. Te lo cotizamos y emitimos por WhatsApp.",
      h1: "Seguro de viaje para Cuba: obligatorio",
      bajada:
        "Cuba pide seguro médico a todos los turistas, junto con el pasaporte y el resto de documentos. Te ayudamos a sacar uno que cubra lo que piden.",
      migas: "Cuba",
      sello: "Seguro por destino · Cuba",
      foto: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1200&q=85",
      fotoAlt: "Auto clásico en La Habana",
      destino: "Cuba",
      veredicto: {
        estado: "obligatorio",
        titular: "Sí, obligatorio",
        detalle: "El seguro médico debe cubrir emergencias médicas, repatriación de restos y evacuación médica de emergencia.",
      },
      cubrir: [
        "Emergencias médicas",
        "Evacuación médica de emergencia",
        "Repatriación de restos",
        "Todos los días de tu estadía",
      ],
      secciones: [
        {
          id: "ojo",
          titulo: "Antes de comprarlo",
          estilo: "aviso",
          lista: [
            "Pregunta si la aseguradora tiene red de atención en Cuba: no todas la tienen.",
            "Lleva el certificado impreso: te lo pueden pedir al llegar.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Necesito un seguro de viaje para Cuba.",
      pregunta: "Viajo a La Habana 10 días. ¿Qué seguro me piden en Cuba?",
      faqs: [
        { q: "¿Cuba pide seguro de viaje?", a: "Sí. Es uno de los documentos para entrar, con emergencias médicas, evacuación y repatriación." },
        { q: "¿Cualquier seguro sirve para Cuba?", a: "No todas las aseguradoras atienden en Cuba. Te cotizamos una que sí." },
      ],
      fuentes: [F_CUBA],
      enlaces: [{ href: "/caribe", texto: "Paquetes al Caribe" }, ...ENLACES_DUDAS],
    },
    {
      slug: "seguro-de-viaje-argentina",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Argentina: ¿obligatorio?",
      descripcion:
        "Argentina pide a los extranjeros declarar que tienen seguro de salud (Ley 25.871, DNU 366/2025). Qué significa para ti y cómo cotizar tu seguro.",
      h1: "Seguro de viaje para Argentina",
      bajada:
        "Desde el DNU 366/2025, la Ley de Migraciones de Argentina pide que el extranjero declare que cuenta con un seguro de salud al entrar. Y en los hospitales públicos, fuera de emergencias, te pueden pedir el seguro o cobrarte la atención.",
      migas: "Argentina",
      sello: "Seguro por destino · Argentina",
      foto: "/images/destinos/bariloche.jpg",
      fotoAlt: "Lagos y montañas de Bariloche",
      destino: "Argentina",
      veredicto: {
        estado: "declarar",
        titular: "Te piden declararlo",
        detalle:
          "El artículo 34 de la Ley 25.871 (texto del DNU 366/2025) pide al extranjero una declaración jurada del propósito de su viaje y de que cuenta con seguro de salud. La norma no fija un monto mínimo.",
      },
      cubrir: [...CUBRIR_BASE.slice(0, 4), "Todos los días en Argentina, también si cruzas a Chile o Uruguay"],
      secciones: [
        {
          id: "que-cambia",
          titulo: "Qué cambió",
          texto: [
            "Antes bastaba con el DNI o el pasaporte. Ahora, además, declaras que viajas con seguro de salud. El control en frontera no siempre lo revisa, pero si te lo piden, tienes que poder mostrarlo.",
            "La misma norma dejó la atención gratuita en hospitales públicos solo para emergencias: lo demás se atiende con seguro o pagando.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Argentina.",
      pregunta: "Viajo a Buenos Aires y Bariloche 9 días. ¿Qué seguro necesito?",
      faqs: [
        { q: "¿Es obligatorio el seguro para entrar a Argentina?", a: "La ley pide declarar que tienes seguro de salud al entrar. Llévalo y ten el certificado a la mano." },
        { q: "¿Hay un monto mínimo?", a: "La norma no fija un monto. Te recomendamos una cobertura que incluya hospitalización y repatriación." },
      ],
      fuentes: [F_ARGENTINA],
      enlaces: [
        { href: "/paquetes-a-argentina", texto: "Paquetes a Argentina" },
        { href: "/seguros/seguro-de-viaje-sudamerica", texto: "Seguro para Sudamérica" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-brasil",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Brasil desde Perú",
      descripcion:
        "Seguro de viaje para Brasil desde Lima: no es requisito para entrar, pero conviene en Río, playas y excursiones. Qué cubrir y cómo cotizar por WhatsApp.",
      h1: "Seguro de viaje para Brasil",
      bajada:
        "Brasil no pide seguro para entrar con tu DNI o pasaporte. Pero entre playas, excursiones y fiestas como el Carnaval, una urgencia médica es más común de lo que crees.",
      migas: "Brasil",
      sello: "Seguro por destino · Brasil",
      foto: "/images/destinos/rio.webp",
      fotoAlt: "Río de Janeiro con el Pan de Azúcar",
      destino: "Brasil",
      veredicto: {
        estado: "no-obligatorio",
        titular: "No es obligatorio; recomendable",
        detalle: "El seguro no es requisito de entrada a Brasil para peruanos.",
      },
      cubrir: [...CUBRIR_BASE, "Accidentes en excursiones de playa, según el plan"],
      secciones: [
        {
          id: "carnaval",
          titulo: "Si vas en Carnaval o Año Nuevo",
          texto: ["Son las fechas con más gente y más incidentes. Saca el seguro con tiempo y guarda el número de la central en tu celular."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Brasil.",
      pregunta: "Viajo a Río en Carnaval 6 días. ¿Cuánto cuesta el seguro?",
      faqs: [
        { q: "¿Brasil pide seguro de viaje?", a: "No es requisito de entrada. Te lo recomendamos igual." },
        { q: "¿Puedo entrar con DNI?", a: "Sí, los peruanos pueden viajar a Brasil con DNI vigente, pero el seguro conviene igual." },
      ],
      fuentes: [],
      enlaces: [
        { href: "/paquetes-a-brasil", texto: "Paquetes a Brasil" },
        { href: "/carnaval-de-rio-2027", texto: "Carnaval de Río 2027" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-colombia",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Colombia desde Perú",
      descripcion:
        "Seguro de viaje para Colombia desde Lima: no lo piden para entrar, pero conviene en Cartagena, San Andrés y Medellín. Cotízalo por WhatsApp.",
      h1: "Seguro de viaje para Colombia",
      bajada:
        "Colombia no pide seguro a los peruanos para entrar. Si vas a Cartagena, San Andrés o Medellín, una póliza básica te cubre urgencias, medicinas y el regreso si algo sale mal.",
      migas: "Colombia",
      sello: "Seguro por destino · Colombia",
      foto: "/images/destinos/cartagena.webp",
      fotoAlt: "Calles coloridas de Cartagena de Indias",
      destino: "Colombia",
      veredicto: {
        estado: "no-obligatorio",
        titular: "No es obligatorio; recomendable",
        detalle: "El seguro no es requisito de entrada a Colombia para peruanos.",
      },
      cubrir: [...CUBRIR_BASE, "Accidentes en paseos en lancha o buceo en San Andrés, según el plan"],
      secciones: [
        {
          id: "san-andres",
          titulo: "San Andrés y las islas",
          texto: ["En las islas, un traslado médico al continente es caro. Elige un plan que incluya traslado sanitario."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Colombia.",
      pregunta: "Vamos a Cartagena y San Andrés 8 días en familia. ¿Qué seguro nos conviene?",
      faqs: [
        { q: "¿Colombia pide seguro de viaje?", a: "No es requisito para entrar. Te lo recomendamos igual." },
        { q: "¿Sirve para varios destinos de Colombia?", a: "Sí, la póliza cubre todo el país durante los días que elijas." },
      ],
      fuentes: [],
      enlaces: [
        { href: "/paquetes-a-colombia", texto: "Paquetes a Colombia" },
        { href: "/paquetes-a-san-andres", texto: "Paquetes a San Andrés" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-sudamerica",
      grupo: "destino",
      tituloSeo: "Seguro de viaje para Sudamérica desde Perú",
      descripcion:
        "Seguro de viaje para Sudamérica: Chile, Argentina, Brasil, Colombia, Ecuador y Bolivia. Dónde te lo piden, qué cubrir y cómo cotizarlo por WhatsApp.",
      h1: "Seguro de viaje para Sudamérica",
      bajada:
        "En Sudamérica viajas con DNI a casi todos lados y casi ningún país pide seguro. Argentina es la excepción: pide declararlo. Un plan para la región suele ser de los más económicos.",
      migas: "Sudamérica",
      sello: "Seguro por destino · Sudamérica",
      foto: "/images/destinos/perito-moreno.jpg",
      fotoAlt: "Glaciar Perito Moreno en la Patagonia",
      destino: "Sudamérica",
      veredicto: {
        estado: "recomendado",
        titular: "Solo Argentina pide declararlo",
        detalle: "Chile, Brasil, Colombia, Ecuador y Bolivia no lo piden para entrar. Argentina pide una declaración jurada de que tienes seguro de salud.",
      },
      cubrir: CUBRIR_BASE,
      secciones: [
        {
          id: "pais-por-pais",
          titulo: "País por país",
          tabla: {
            cab: ["País", "¿Seguro para entrar?"],
            filas: [
              ["Argentina", "Declaras que tienes seguro de salud"],
              ["Chile", "No"],
              ["Brasil", "No"],
              ["Colombia", "No"],
              ["Ecuador y Bolivia", "No"],
            ],
          },
        },
        {
          id: "region",
          titulo: "Un plan para toda la región",
          texto: ["Si haces un recorrido por varios países (por ejemplo, Santiago, Mendoza y Buenos Aires), dinos la ruta completa y te cotizamos una sola póliza."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para Sudamérica.",
      pregunta: "Hago Santiago, Mendoza y Buenos Aires en 12 días. ¿Un solo seguro me cubre todo?",
      faqs: [
        { q: "¿Necesito seguro para Chile?", a: "No es requisito de entrada, pero te lo recomendamos." },
        { q: "¿Es más barato que para Europa?", a: "Por lo general sí: los planes para la región suelen costar menos." },
      ],
      fuentes: [F_ARGENTINA],
      enlaces: [
        { href: "/seguros/seguro-de-viaje-argentina", texto: "Seguro para Argentina" },
        { href: "/seguros/seguro-de-viaje-brasil", texto: "Seguro para Brasil" },
        { href: "/seguros/seguro-de-viaje-colombia", texto: "Seguro para Colombia" },
        { href: "/paquetes-a-chile", texto: "Paquetes a Chile" },
        ...ENLACES_DUDAS,
      ],
    },
  ];
}
