import type { LandingSeguro } from "@/lib/seguros/tipos";
import { CUBRIR_BASE, ENLACES_DUDAS, F_ASSIST_EUROPA, F_CODIGO_VISADOS, F_UNIVERSAL } from "@/lib/seguros/comun";

// Seguro por perfil de viajero. Sin tarifas: cada aseguradora fija edades, semanas y recargos, y cambian seguido.

export function landingsPerfiles(): LandingSeguro[] {
  return [
    {
      slug: "seguro-de-viaje-para-estudiantes",
      grupo: "perfil",
      tituloSeo: "Seguro de viaje para estudiantes desde Perú",
      descripcion:
        "Seguro médico para estudiar en el extranjero: lo que piden para la visa de estudios, intercambios y cursos cortos. Te lo cotizamos por WhatsApp.",
      h1: "Seguro de viaje para estudiantes",
      bajada:
        "Para un intercambio, una maestría o un curso de idiomas afuera, el seguro suele ser parte de los papeles de la visa. Te ayudamos a elegir uno que cumpla lo que pide tu consulado o tu universidad.",
      migas: "Estudiantes",
      sello: "Seguro por perfil · Estudiantes",
      foto: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85",
      fotoAlt: "Grupo de estudiantes de viaje",
      cubrir: [
        "Lo que pida tu consulado o tu universidad, punto por punto",
        "Todos los meses del curso, no solo el viaje de ida",
        ...CUBRIR_BASE.slice(0, 3),
      ],
      secciones: [
        {
          id: "visa",
          titulo: "Si pides visa de estudios",
          texto: [
            "Quien pide visa para Europa necesita un seguro con al menos 30.000 € de cobertura (Código de Visados). Para estudios largos, cada consulado puede pedir más: por ejemplo, que la póliza no tenga copagos o que cubra lo mismo que la seguridad social del país.",
            "Por eso, antes de emitir, revisamos contigo la lista del consulado o la carta de tu universidad.",
          ],
        },
        {
          id: "pasos",
          titulo: "Cómo lo armamos",
          estilo: "pasos",
          lista: [
            "Nos mandas la lista de requisitos del consulado o de tu universidad.",
            "Te cotizamos pólizas que cumplen, por los meses de tu curso.",
            "Te emitimos el certificado en PDF para tu carpeta.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro para estudiar en el extranjero.",
      pregunta: "Me voy a estudiar a España 9 meses. ¿Qué seguro me piden para la visa?",
      faqs: [
        { q: "¿Cualquier seguro de viaje sirve para la visa de estudios?", a: "No siempre. Algunos consulados piden condiciones extra, como cero copagos. Revisamos tu lista antes de emitir." },
        { q: "¿Lo puedo sacar por todo el año?", a: "Sí. Se emite por los meses de tu estadía." },
      ],
      fuentes: [F_CODIGO_VISADOS],
      enlaces: [
        { href: "/espana/requisitos-visado-de-estudios-espana-peru", texto: "Visado de estudios España" },
        { href: "/visa-de-estudios-para-espana", texto: "Te ayudamos con la visa" },
        { href: "/seguros/seguro-de-viaje-larga-estancia", texto: "Viajes largos" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-adultos-mayores",
      grupo: "perfil",
      tituloSeo: "Seguro de viaje para adultos mayores de 70 y 80",
      descripcion:
        "Seguro de viaje para adultos mayores de 70 y 80 años: edad máxima, preexistencias y qué revisar. Te cotizamos uno que acepte tu edad, por WhatsApp.",
      h1: "Seguro de viaje para adultos mayores",
      bajada:
        "Las aerolíneas no ponen edad máxima, pero las aseguradoras sí ponen límites y recargos según la edad. Te cotizamos un seguro que acepte la edad de tus padres o abuelos y que cubra lo que necesitan.",
      migas: "Adultos mayores",
      sello: "Seguro por perfil · Mayores de 70",
      foto: "/images/destinos/lisboa.webp",
      fotoAlt: "Tranvía amarillo en Lisboa",
      cubrir: [
        "Que acepte la edad del viajero en la fecha de salida",
        "Atención de urgencias por enfermedades que ya tiene (preexistencias), si el plan lo incluye",
        ...CUBRIR_BASE.slice(0, 4),
      ],
      secciones: [
        {
          id: "revisar",
          titulo: "Lo que hay que revisar a esta edad",
          lista: [
            "Edad máxima del plan: cada aseguradora tiene la suya, y algunas bajan la cobertura después de cierta edad.",
            "Preexistencias: hipertensión, diabetes o un problema del corazón. Muchos planes solo cubren su urgencia, con un tope menor.",
            "Medicinas: lleva las de todo el viaje en tu equipaje de mano, con la receta.",
          ],
        },
        {
          id: "aeropuerto",
          titulo: "Además del seguro",
          texto: ["Si tu papá o tu mamá necesita silla de ruedas en el aeropuerto, la pedimos al emitir el pasaje. Es gratis y se pide con anticipación."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para un adulto mayor.",
      pregunta: "Mi mamá tiene 78 años y viaja a España 2 meses. ¿Hay seguro para su edad?",
      faqs: [
        { q: "¿Hay seguro de viaje para mayores de 80 años?", a: "Sí, algunas aseguradoras los aceptan, con más recargo y a veces menos cobertura. Dinos la edad exacta y te cotizamos." },
        { q: "¿Cubre la presión alta o la diabetes?", a: "Depende del plan. Algunos cubren la urgencia de una preexistencia con un tope; otros no. Te lo aclaramos antes de emitir." },
        { q: "¿Cuesta más que para un adulto joven?", a: "Sí, el precio sube con la edad. Por eso conviene cotizar con la edad real." },
      ],
      fuentes: [F_ASSIST_EUROPA],
      enlaces: [
        { href: "/viajes-adultos-mayores", texto: "Viajes para adultos mayores" },
        { href: "/espana/traer-a-mis-padres-a-espana-de-visita", texto: "Traer a mis padres a España" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-para-embarazadas",
      grupo: "perfil",
      tituloSeo: "Seguro de viaje para embarazadas",
      descripcion:
        "Seguro de viaje para embarazadas: hasta qué semana cubre, qué urgencias incluye y qué revisar con la aerolínea. Cotízalo por WhatsApp.",
      h1: "Seguro de viaje para embarazadas",
      bajada:
        "Muchos seguros cubren urgencias del embarazo solo hasta cierta semana de gestación, y cada aseguradora pone la suya. Te cotizamos uno que te cubra durante todo el viaje.",
      migas: "Embarazadas",
      sello: "Seguro por perfil · Embarazo",
      foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
      fotoAlt: "Playa tranquila de aguas turquesa",
      cubrir: [
        "Urgencias del embarazo hasta una semana que pase tu fecha de regreso",
        ...CUBRIR_BASE.slice(0, 4),
      ],
      secciones: [
        {
          id: "semana",
          titulo: "La semana es lo primero",
          texto: [
            "Assist Card, por ejemplo, indica que cubre embarazadas hasta una semana determinada. Por eso necesitamos tu semana de gestación en la fecha de regreso para cotizar.",
            "Los controles programados y el parto no suelen estar cubiertos: el seguro es para urgencias.",
          ],
        },
        {
          id: "aerolinea",
          titulo: "Revisa también la aerolínea",
          estilo: "aviso",
          lista: [
            "Cada aerolínea fija hasta qué semana puedes volar y cuándo pide certificado médico.",
            "Lleva el certificado de tu obstetra con la fecha probable de parto.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Estoy embarazada y quiero cotizar un seguro de viaje.",
      pregunta: "Tengo 20 semanas y viajo a Miami 10 días. ¿El seguro me cubre?",
      faqs: [
        { q: "¿Hasta qué semana cubre el seguro?", a: "Depende de la aseguradora y del plan. Dinos tu semana al regreso y te cotizamos uno que llegue." },
        { q: "¿Cubre el parto?", a: "Por lo general no: cubre urgencias del embarazo, no el parto ni los controles programados." },
      ],
      fuentes: [F_ASSIST_EUROPA],
      enlaces: [{ href: "/seguros/seguro-de-viaje-estados-unidos", texto: "Seguro para Estados Unidos" }, ...ENLACES_DUDAS],
    },
    {
      slug: "seguro-de-viaje-familiar",
      grupo: "perfil",
      tituloSeo: "Seguro de viaje familiar con niños",
      descripcion:
        "Seguro de viaje para toda la familia: un certificado por persona, promociones para menores y qué cubrir con niños. Cotízalo por WhatsApp.",
      h1: "Seguro de viaje para familias",
      bajada:
        "Si viajan papá, mamá y los chicos, te cotizamos el seguro de todos juntos. Las aseguradoras sacan seguido promociones para menores, y te decimos cuál conviene en tu fecha.",
      migas: "Familias",
      sello: "Seguro por perfil · Familias",
      foto: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=85",
      fotoAlt: "Familia de viaje",
      cubrir: [
        "Cada viajero con su propio certificado y su nombre",
        "Pediatría de urgencia y medicinas para los chicos",
        ...CUBRIR_BASE.slice(2, 4),
        "Demora o pérdida de equipaje: con niños, es lo que más se usa",
      ],
      secciones: [
        {
          id: "promos",
          titulo: "Promociones para menores",
          texto: [
            "Las aseguradoras cambian sus promociones cada mes: en octubre de 2026, por ejemplo, había descuentos y menores gratis en algunos planes anuales. Te cotizamos con la promoción vigente en tu fecha de compra.",
          ],
        },
        {
          id: "datos",
          titulo: "Qué nos mandas para cotizar",
          estilo: "pasos",
          lista: ["Destino y fechas de ida y vuelta.", "Edad de cada viajero.", "Si alguien tiene una enfermedad que ya trata (preexistencia)."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje para mi familia.",
      pregunta: "Somos 2 adultos y 2 niños de 6 y 9 años, 10 días en Orlando. ¿Cuánto es el seguro?",
      faqs: [
        { q: "¿Hay un solo certificado para toda la familia?", a: "Cada viajero lleva su certificado, pero lo cotizamos y emitimos todo junto." },
        { q: "¿Los niños pagan menos?", a: "Depende de la promoción del mes. Te cotizamos con la vigente." },
      ],
      fuentes: [F_UNIVERSAL],
      enlaces: [
        { href: "/paquetes-a-orlando-disney", texto: "Orlando y Disney" },
        { href: "/vacaciones-de-verano-2027", texto: "Vacaciones de verano 2027" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-larga-estancia",
      grupo: "perfil",
      tituloSeo: "Seguro de viaje por 3 o 6 meses: larga estancia",
      descripcion:
        "Seguro de viaje para viajes largos de 1, 3 o 6 meses: cómo se cotiza, qué revisar y qué pasa con la regla de 90 días en Europa. Pídelo por WhatsApp.",
      h1: "Seguro de viaje para viajes largos",
      bajada:
        "Si te vas uno, tres o seis meses a ver a la familia o a estudiar, no te sirve un plan de vacaciones: necesitas una póliza por todos tus días. Te ayudamos a armarla.",
      migas: "Viajes largos",
      sello: "Seguro por perfil · Larga estancia",
      foto: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85",
      fotoAlt: "Viajera esperando su vuelo en el aeropuerto",
      cubrir: ["Todos los días de tu estadía, sin huecos", ...CUBRIR_BASE.slice(0, 4)],
      secciones: [
        {
          id: "planes",
          titulo: "Cómo se arman los planes largos",
          texto: [
            "Universal Assistance, por ejemplo, vende planes por módulos de días de hasta 60 días. Para más tiempo, se combinan pólizas o se busca un plan de larga estancia.",
            "Si tu viaje es a Europa como turista, recuerda que solo puedes quedarte 90 días dentro de cada 180.",
          ],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro para un viaje largo.",
      pregunta: "Me voy 3 meses a Italia a ver a mi hermano. ¿Cómo hago con el seguro?",
      faqs: [
        { q: "¿Hay seguro de viaje por 6 meses?", a: "Sí, pero según el destino y tu visa puede armarse con más de una póliza. Te decimos cuál conviene." },
        { q: "¿Puedo ampliar el seguro si me quedo más?", a: "Algunos planes se pueden ampliar antes de que venzan. Avísanos con tiempo." },
      ],
      fuentes: [F_UNIVERSAL],
      enlaces: [
        { href: "/espana/regla-90-180-dias-espana", texto: "Regla de 90/180 días" },
        { href: "/seguros/seguro-de-viaje-para-estudiantes", texto: "Seguro para estudiantes" },
        ...ENLACES_DUDAS,
      ],
    },
    {
      slug: "seguro-de-viaje-anual-multiviajes",
      grupo: "perfil",
      tituloSeo: "Seguro de viaje anual multiviajes y negocios",
      descripcion:
        "Seguro de viaje anual multiviajes para quien viaja seguido, por negocios o turismo: cómo funciona, días por viaje y factura. Cotízalo por WhatsApp.",
      h1: "Seguro anual multiviajes y para viajes de negocios",
      bajada:
        "Si viajas tres, cuatro o más veces al año, por trabajo o por gusto, un plan anual te cubre todos los viajes con un solo pago. Ojo con los días máximos por viaje.",
      migas: "Anual y negocios",
      sello: "Seguro por perfil · Viajero frecuente",
      foto: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
      fotoAlt: "Hotel con piscina para viajes de trabajo",
      cubrir: ["Todos los viajes del año, con un tope de días por viaje", ...CUBRIR_BASE.slice(0, 4)],
      secciones: [
        {
          id: "como-funciona",
          titulo: "Cómo funciona",
          texto: [
            "Pagas una vez y quedas cubierto en cada viaje durante 12 meses. Cada viaje tiene un máximo de días: en los planes anuales de Universal Assistance, por ejemplo, es de hasta 30 días por viaje.",
            "Conviene si viajas varias veces al año. Si viajas una sola vez, sale mejor un plan por días.",
          ],
        },
        {
          id: "empresas",
          titulo: "Para empresas",
          texto: ["Emitimos boleta o factura a nombre de tu empresa. Si viajan varios trabajadores, te cotizamos todo junto."],
        },
      ],
      mensaje: "¡Hola Cityland Travel! Quiero cotizar un seguro de viaje anual multiviajes.",
      pregunta: "Viajo por trabajo a Chile y a Estados Unidos unas 5 veces al año. ¿Me conviene el anual?",
      faqs: [
        { q: "¿Cuántos días cubre cada viaje?", a: "Depende del plan: muchos anuales cubren hasta 30 días por viaje. Si tus viajes son más largos, te buscamos otra opción." },
        { q: "¿Me dan factura?", a: "Sí, emitimos boleta o factura electrónica." },
      ],
      fuentes: [F_UNIVERSAL],
      enlaces: [{ href: "/empresas", texto: "Viajes para empresas" }, ...ENLACES_DUDAS],
    },
  ];
}
