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
  aruba: {
    intro:
      "Aruba es la isla del Caribe con playas de arena blanca como Eagle Beach y Palm Beach, fuera de la zona de huracanes y con sol casi todo el año.",
    documentos:
      "Los peruanos no necesitan visa para Aruba como turistas: viajas con pasaporte vigente y, antes de llegar, llenas en línea la tarjeta de embarque y desembarque (ED Card). Te lo confirmamos al cotizar.",
    enlaces: [
      { texto: "Pasajes Lima–Aruba", href: "/vuelos/lima-aruba" },
      { texto: "Curazao", href: "/destinos/curazao" },
      { texto: "Todo el Caribe", href: "/caribe" },
      { texto: "Hoteles todo incluido", href: "/hoteles" },
    ],
  },
  curazao: {
    intro:
      "Curazao combina casas holandesas de colores en Willemstad con más de 35 playas de agua tranquila, ideales para snorkel y para ir en familia.",
    documentos:
      "Curazao no pide visa a los peruanos para visitas cortas: viajas con pasaporte vigente, boleto de salida y llenas en línea la tarjeta digital de inmigración antes de volar.",
    enlaces: [
      { texto: "Requisitos para viajar a Curazao", href: "/viajes/requisitos-viajar-a-curazao-desde-peru" },
      { texto: "Aruba", href: "/destinos/aruba" },
      { texto: "Todo el Caribe", href: "/caribe" },
    ],
  },
  panama: {
    intro:
      "Panamá es compras, el Canal y playa en un solo viaje: centros comerciales, el casco antiguo y paseos a San Blas o a las playas del Pacífico.",
    documentos:
      "Los peruanos no necesitan visa para Panamá como turistas: viajas con pasaporte vigente. En migración te pueden pedir el boleto de regreso y que muestres dinero para tu estadía.",
    enlaces: [
      { texto: "Pasajes Lima–Panamá", href: "/vuelos/lima-panama" },
      { texto: "Cartagena", href: "/destinos/cartagena" },
      { texto: "Todo el Caribe", href: "/caribe" },
    ],
  },
  "rio-de-janeiro": {
    intro:
      "Río de Janeiro es Copacabana, Ipanema, el Cristo Redentor y el Pan de Azúcar; desde Lima es uno de los destinos de playa más cercanos fuera del país.",
    documentos: "Puedes viajar a Brasil con tu DNI vigente o con pasaporte, sin visa.",
    enlaces: [
      { texto: "Pasajes Lima–Río de Janeiro", href: "/vuelos/lima-rio-de-janeiro" },
      { texto: "Cataratas del Iguazú", href: "/destinos/iguazu-cataratas" },
      { texto: "Destinos solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" },
    ],
  },
  "mancora-vichayito": {
    intro:
      "Máncora y Vichayito son las playas del norte del Perú con sol todo el año: hoteles frente al mar, surf, y paseos para ver tortugas.",
    documentos:
      "Solo necesitas tu DNI. Vuelas de Lima a Talara o a Tumbes y de ahí sigues por carretera hasta la playa.",
    enlaces: [
      { texto: "Pasajes Lima–Talara", href: "/vuelos/lima-talara" },
      { texto: "Pasajes Lima–Tumbes", href: "/vuelos/lima-tumbes" },
      { texto: "Tours en el Perú", href: "/tours" },
    ],
  },
  medellin: {
    intro:
      "Medellín es la ciudad de la eterna primavera: clima templado todo el año, la Comuna 13 con sus grafitis y el paseo a Guatapé y la Piedra del Peñol.",
    documentos: "Los peruanos pueden viajar a Colombia solo con su DNI vigente, sin pasaporte ni visa.",
    enlaces: [
      { texto: "Pasajes Lima–Medellín", href: "/vuelos/lima-medellin" },
      { texto: "Viajar a Colombia solo con DNI", href: "/blog/viajar-a-colombia-cartagena-san-andres-medellin-solo-dni" },
      { texto: "Cartagena", href: "/destinos/cartagena" },
    ],
  },
  "buenos-aires": {
    intro:
      "Buenos Aires es tango, parrillas, el barrio de La Boca, Caminito, Recoleta y Puerto Madero, a unas cuatro horas de vuelo de Lima.",
    documentos: "Los peruanos pueden viajar a Argentina con su DNI vigente o con pasaporte, sin visa.",
    enlaces: [
      { texto: "Pasajes Lima–Buenos Aires", href: "/vuelos/lima-buenos-aires" },
      { texto: "Cataratas del Iguazú", href: "/destinos/iguazu-cataratas" },
      { texto: "Destinos solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" },
    ],
  },
  "santiago-chile": {
    intro:
      "Santiago combina ciudad, cerros y viñedos, y en una hora y media llegas a la playa de Viña del Mar y a los cerros de colores de Valparaíso.",
    documentos: "Los peruanos pueden viajar a Chile con su DNI vigente o con pasaporte, sin visa.",
    enlaces: [
      { texto: "Pasajes Lima–Santiago", href: "/vuelos/lima-santiago" },
      { texto: "Buenos Aires", href: "/destinos/buenos-aires" },
      { texto: "Destinos solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" },
    ],
  },
  "iguazu-cataratas": {
    intro:
      "Las Cataratas del Iguazú, en la frontera de Argentina y Brasil, son de las más grandes del mundo: pasarelas sobre la Garganta del Diablo y paseos en lancha bajo los saltos.",
    documentos:
      "Los peruanos pueden entrar a Argentina y a Brasil con su DNI vigente o con pasaporte, sin visa, así que puedes ver los dos lados de las cataratas.",
    enlaces: [
      { texto: "Buenos Aires", href: "/destinos/buenos-aires" },
      { texto: "Río de Janeiro", href: "/destinos/rio-de-janeiro" },
      { texto: "Destinos solo con DNI", href: "/blog/destinos-internacionales-solo-con-dni-peruanos" },
    ],
  },
  "miami-orlando": {
    intro:
      "Miami y Orlando juntan playa, compras y los parques de Disney y Universal: es el viaje familiar que más se sueña desde Lima.",
    documentos:
      "Para Estados Unidos los peruanos necesitan visa americana vigente y pasaporte. Si aún no la tienes, te ayudamos con el formulario y la entrevista; consigue la visa antes de comprar los pasajes.",
    enlaces: [
      { texto: "Pasajes Lima–Miami", href: "/vuelos/lima-miami" },
      { texto: "Pasajes Lima–Orlando", href: "/vuelos/lima-orlando" },
      { texto: "Visa americana", href: "/visas" },
      { texto: "Cómo tramitar la visa americana", href: "/blog/como-tramitar-visa-americana-b1-b2-peru" },
    ],
  },
  "europa-clasica": {
    intro:
      "Madrid, París y Roma en un solo viaje: museos, monumentos y la comida de tres países, con los traslados entre ciudades ya organizados.",
    documentos:
      "Los peruanos no necesitan visa para el espacio Schengen: viajas como turista hasta 90 días con pasaporte. En migración te pueden pedir pasaje de regreso, hoteles, dinero para tu estadía y seguro de viaje.",
    enlaces: [
      { texto: "Requisitos para viajar a España", href: "/viajes/requisitos-viajar-a-espana-desde-peru" },
      { texto: "Pasajes Lima–París", href: "/vuelos/lima-paris" },
      { texto: "Pasajes Lima–Roma", href: "/vuelos/lima-roma" },
      { texto: "Seguro de viaje para Europa", href: "/blog/seguro-schengen-30000-euros-peru-precio" },
    ],
  },
  "cusco-magico": {
    intro: "Cusco y Machu Picchu: la ciudad imperial, el Valle Sagrado y la ciudadela inca, con vuelo desde Lima.",
    documentos:
      "Solo necesitas tu DNI. Cusco está a más de 3,300 metros de altura: toma el primer día con calma. Las entradas a Machu Picchu son limitadas por día, así que conviene reservar con anticipación.",
    enlaces: [
      { texto: "Pasajes Lima–Cusco", href: "/vuelos/lima-cusco" },
      { texto: "Cusco, Montaña de 7 Colores y Humantay", href: "/destinos/cusco-montana-7-colores-humantay-5-dias" },
      { texto: "Mejor época para ir a Machu Picchu", href: "/blog/temporada-baja-viajar-machu-picchu-cusco" },
    ],
  },
  "arequipa-colca": {
    intro:
      "Arequipa es la Ciudad Blanca, con el Monasterio de Santa Catalina y su comida; desde ahí vas al Cañón del Colca a ver el vuelo de los cóndores.",
    documentos:
      "Solo necesitas tu DNI. El camino al Colca pasa por zonas de más de 4,000 metros de altura: lleva abrigo y avísanos si alguien del grupo tiene problemas de salud.",
    enlaces: [
      { texto: "Pasajes Lima–Arequipa", href: "/vuelos/lima-arequipa" },
      { texto: "Cusco y Machu Picchu", href: "/destinos/cusco-magico" },
      { texto: "Tours en el Perú", href: "/tours" },
    ],
  },
  "tarapoto-selva": {
    intro:
      "Tarapoto es la selva más cerca de Lima: la Laguna Azul, las cataratas de Ahuashiyacu y el pueblo de Lamas, a poco más de una hora de vuelo.",
    documentos: "Solo necesitas tu DNI. Lleva repelente, ropa ligera y algo para la lluvia.",
    enlaces: [
      { texto: "Pasajes Lima–Tarapoto", href: "/vuelos/lima-tarapoto" },
      { texto: "Promoción escolar a Tarapoto", href: "/ofertas/paquetes-viaje-de-promocion-escolar-tarapoto" },
      { texto: "Tours en el Perú", href: "/tours" },
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
