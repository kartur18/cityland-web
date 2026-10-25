import type { Destino } from "@/components/constantes";
import type { GuiaServicio } from "@/lib/guias-servicios";

// Guía al pie de los destinos más buscados desde Lima («paquetes a Cancún todo incluido», «viaje a Cartagena todo
// incluido», «paquetes a Cusco y Machu Picchu»). El precio y lo que incluye salen del propio destino (25-oct-2026).

interface Extra {
  intro: string;
  documentos: string;
  enlaces: { texto: string; href: string }[];
  faqExtra?: { q: string; a: string };
}

const EXTRAS: Readonly<Record<string, Extra>> = {
  "punta-cana": {
    intro:
      "Punta Cana es el destino de playa todo incluido que más se pide desde Lima: resorts frente al mar en Bávaro, con comidas y bebidas incluidas.",
    documentos:
      "Los peruanos no necesitan visa para República Dominicana: basta el pasaporte vigente por al menos 6 meses y llenar el E-Ticket de migración, que es gratis.",
    enlaces: [
      { texto: "Requisitos para viajar a Punta Cana", href: "/viajes/requisitos-viajar-a-punta-cana-desde-peru" },
      { texto: "Pasajes Lima–Punta Cana", href: "/vuelos/lima-punta-cana" },
      { texto: "Punta Cana o Cancún: cuál elegir", href: "/blog/punta-cana-vs-cancun-cual-elegir-desde-lima" },
      { texto: "Hoteles todo incluido", href: "/hoteles" },
    ],
  },
  cancun: {
    intro:
      "Cancún y la Riviera Maya combinan playa turquesa, resorts todo incluido y paseos a zonas mayas como Chichén Itzá y los cenotes.",
    documentos:
      "Desde 2024 México pide visa a los peruanos. Si tienes visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o del espacio Schengen, puedes entrar sin visa mexicana. Te lo confirmamos al cotizar.",
    enlaces: [
      { texto: "Requisitos para viajar a Cancún", href: "/viajes/requisitos-viajar-a-mexico-cancun-desde-peru" },
      { texto: "Pasajes Lima–Cancún", href: "/vuelos/lima-cancun" },
      { texto: "Punta Cana o Cancún: cuál elegir", href: "/blog/punta-cana-vs-cancun-cual-elegir-desde-lima" },
      { texto: "Visa americana", href: "/visas" },
    ],
  },
  cartagena: {
    intro:
      "Cartagena de Indias combina la ciudad amurallada con días de playa en Barú y las Islas del Rosario, a pocas horas de vuelo de Lima.",
    documentos: "Los peruanos pueden viajar a Colombia solo con su DNI vigente, sin pasaporte ni visa.",
    enlaces: [
      { texto: "Viajar a Colombia solo con DNI", href: "/blog/viajar-a-colombia-cartagena-san-andres-medellin-solo-dni" },
      { texto: "Pasajes Lima–Cartagena", href: "/vuelos/lima-cartagena" },
      { texto: "Cartagena y San Andrés combinado", href: "/destinos/san-andres-cartagena-combinado" },
    ],
  },
  "san-andres": {
    intro:
      "San Andrés es la isla colombiana del mar de siete colores: playas, snorkel y paseos a Johnny Cay y el Acuario.",
    documentos:
      "Los peruanos pueden viajar a Colombia solo con su DNI vigente. Para entrar a la isla se paga además una tarjeta de turismo que cobra San Andrés.",
    enlaces: [
      { texto: "Viajar a Colombia solo con DNI", href: "/blog/viajar-a-colombia-cartagena-san-andres-medellin-solo-dni" },
      { texto: "Pasajes Lima–San Andrés", href: "/vuelos/lima-san-andres" },
      { texto: "Cartagena y San Andrés combinado", href: "/destinos/san-andres-cartagena-combinado" },
    ],
  },
  "cusco-machu-picchu-4-dias": {
    intro: "Cusco y Machu Picchu en 4 días: la ciudad, el Valle Sagrado y la ciudadela inca, con vuelo desde Lima.",
    documentos: "Solo necesitas tu DNI. Las entradas a Machu Picchu son limitadas por día, así que conviene reservar con anticipación.",
    enlaces: [
      { texto: "Mejor época para ir a Machu Picchu", href: "/blog/temporada-baja-viajar-machu-picchu-cusco" },
      { texto: "Pasajes Lima–Cusco", href: "/vuelos/lima-cusco" },
      { texto: "Cusco, Montaña de 7 Colores y Humantay", href: "/destinos/cusco-montana-7-colores-humantay-5-dias" },
      { texto: "Tours en el Perú", href: "/tours" },
    ],
  },
};

export function guiaDestino(dest: Destino): GuiaServicio | null {
  const extra = EXTRAS[dest.slug];
  if (!extra) return null;
  const precio = `US$ ${dest.turistico.toLocaleString("en-US")}`;
  const duracion = dest.duracion ? ` (${dest.duracion.toLowerCase()})` : "";
  const incluye = (dest.inclusionesLista ?? []).filter(Boolean);
  return {
    titulo: `Viajar a ${dest.ciudad} desde Lima`,
    parrafos: [extra.intro, extra.documentos],
    faqs: [
      {
        q: `¿Cuánto cuesta el paquete a ${dest.ciudad} desde Lima?`,
        a: `Con nosotros, desde ${precio} por persona${duracion}. El precio final depende de la fecha, el hotel y cuántos viajan.`,
      },
      ...(incluye.length ? [{ q: "¿Qué incluye el paquete?", a: `${incluye.join(", ")}.` }] : []),
      { q: "¿Qué documentos necesito?", a: extra.documentos },
      { q: "¿Cómo se paga?", a: "Separas con el 50% y pagas el resto antes del viaje, en nuestras oficinas de Los Olivos o por transferencia, Yape, Plin o tarjeta." },
      ...(extra.faqExtra ? [extra.faqExtra] : []),
    ],
    enlaces: extra.enlaces,
  };
}
