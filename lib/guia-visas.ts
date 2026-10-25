import type { GuiaServicio } from "@/lib/guias-servicios";

// Responde lo que más se busca en Perú sobre visas («cuánto cuesta la visa americana», «visa para México», «visa
// Canadá»). Datos verificados el 25-oct-2026: Canadá (canada.ca, lista eTA sin Perú), tasa MRV US$185, pasaporte S/ 120.90.
export const GUIA_VISAS: GuiaServicio = {
  titulo: "Visas para peruanos: lo que necesitas saber",
  parrafos: [
    "Para Estados Unidos, Canadá y México los peruanos necesitan visa. Para España y el resto del espacio Schengen no: viajas como turista hasta 90 días solo con pasaporte, aunque en migración te pueden pedir pasaje de regreso, hotel o carta de invitación, seguro y dinero para tu estadía.",
    "Nosotros te ayudamos a llenar los formularios, revisar tus documentos y prepararte para la entrevista. La decisión de dar la visa la toma siempre el consulado, y la cita la eliges tú desde tu propia cuenta: ninguna agencia puede garantizar la visa ni adelantar una cita.",
  ],
  faqs: [
    {
      q: "¿Cuánto cuesta la visa americana desde Perú?",
      a: "La tasa de la embajada es de US$185 por persona y no se devuelve aunque te nieguen la visa. Una ley de EE.UU. de 2025 creó además una tasa de US$250 que se cobraría solo si te aprueban; te confirmamos al empezar si ya está vigente. Aparte va nuestra asesoría, que cotizamos según tu caso.",
    },
    {
      q: "¿Cómo se saca la visa americana?",
      a: "Llenas el formulario DS-160, pagas la tasa, eliges tu cita en la Embajada de EE.UU. en Lima y vas a la entrevista con tus documentos. Te ayudamos con el formulario, la carpeta y un simulacro de entrevista.",
    },
    {
      q: "¿Puedo entrar a Canadá con mi visa americana?",
      a: "No. El permiso electrónico eTA de Canadá no está disponible para el pasaporte peruano, así que necesitas visa de visitante canadiense aunque tengas visa americana.",
    },
    {
      q: "¿Los peruanos necesitan visa para México?",
      a: "Sí, salvo que tengas visa vigente de Estados Unidos, Canadá, Japón, Reino Unido o del espacio Schengen; con alguna de ellas puedes entrar como turista sin visa mexicana.",
    },
    {
      q: "¿Necesito visa para ir a España?",
      a: "No, para turismo de hasta 90 días basta el pasaporte. Para estudiar o trabajar sí necesitas un visado que se pide en el consulado.",
    },
    {
      q: "¿Cuánto cuesta sacar el pasaporte?",
      a: "El pasaporte electrónico cuesta S/ 120.90 en Migraciones. Para adultos vale 10 años.",
    },
  ],
  enlaces: [
    { texto: "Cómo tramitar la visa americana", href: "/blog/como-tramitar-visa-americana-b1-b2-peru" },
    { texto: "Requisitos para viajar a España", href: "/viajes/requisitos-viajar-a-espana-desde-peru" },
    { texto: "Visa de estudios para España", href: "/blog/visa-de-estudios-espana-desde-peru" },
    { texto: "Destinos solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" },
    { texto: "Permiso notarial para menores", href: "/blog/permiso-notarial-viaje-menores-peru-requisitos" },
    { texto: "Seguro de viaje", href: "/seguros" },
  ],
};
