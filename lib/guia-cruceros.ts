import type { GuiaServicio } from "@/lib/guias-servicios";

// Responde «crucero sin visa desde Panamá», «crucero a Aruba desde Cartagena» y dudas de documentos (25-oct-2026).
export const GUIA_CRUCEROS: GuiaServicio = {
  titulo: "Cruceros desde Perú: lo que necesitas saber",
  parrafos: [
    "Un crucero es hotel, comidas y transporte en un solo precio: duermes en el barco y cada día amaneces en un puerto distinto. Desde Lima vuelas al puerto de salida y ahí embarcas.",
    "La visa que necesitas depende de los puertos, no del barco. Los cruceros por el Caribe Sur que salen de Cartagena o de Colón (Panamá) y paran en Aruba, Curazao y Bonaire no tocan Estados Unidos, así que los peruanos viajan sin visa americana, solo con pasaporte. Los que salen de Miami o pasan por puertos de Estados Unidos sí piden visa americana.",
  ],
  faqs: [
    {
      q: "¿Necesito visa americana para un crucero?",
      a: "Solo si el crucero sale de Estados Unidos o para en uno de sus puertos (por ejemplo, los de Miami a Bahamas). Los que salen de Cartagena o Panamá por Aruba, Curazao y Bonaire no la piden.",
    },
    {
      q: "¿Qué incluye un crucero?",
      a: "Normalmente la cabina, las comidas en los restaurantes principales y el entretenimiento a bordo. Las bebidas, las excursiones en tierra, las propinas y los vuelos suelen ir aparte; en tu cotización te detallamos qué incluye cada uno.",
    },
    {
      q: "¿Puedo pagar en partes?",
      a: "Sí. Separas con el 50% y pagas el resto antes del viaje, según las fechas que pide la naviera.",
    },
    {
      q: "¿Pueden ir niños y adultos mayores?",
      a: "Sí, los cruceros son de los viajes más cómodos para toda la familia. Si alguien usa silla de ruedas, pedimos una cabina adaptada.",
    },
  ],
  enlaces: [
    { texto: "Cruceros por el Caribe sin visa americana", href: "/blog/cruceros-por-el-caribe-sin-visa-americana-desde-peru" },
    { texto: "Aruba", href: "/destinos/aruba" },
    { texto: "Curazao", href: "/destinos/curazao" },
    { texto: "Cartagena", href: "/destinos/cartagena" },
    { texto: "Panamá", href: "/destinos/panama" },
    { texto: "Visa americana", href: "/visas" },
  ],
};
