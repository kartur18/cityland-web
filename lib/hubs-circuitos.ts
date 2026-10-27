import type { Circuito } from "@/lib/circuitos";

// Páginas «paquetes a <destino> desde Lima» armadas con los circuitos reales del mayorista: cada una responde una
// búsqueda de compra («paquetes a Turquía desde Lima», «paquetes de Año Nuevo 2026») con programas y precios reales.
// Sin requisitos de ingreso que no estén verificados: la asesora los confirma al cotizar (27-oct-2026).

export interface HubCircuitos {
  ruta: string;
  nombre: string;
  h1: string;
  // ≤ 49 caracteres: se le suma " | Cityland".
  tituloSeo: string;
  descripcion: string;
  intro: string;
  filtro: (c: Circuito) => boolean;
  mensajeWhatsApp: string;
}

const pais = (re: RegExp) => (c: Circuito) => c.paises.some((p) => re.test(p));

export const HUBS_CIRCUITOS: readonly HubCircuitos[] = [
  {
    ruta: "/paquetes-a-turquia",
    nombre: "Turquía",
    h1: "Paquetes a Turquía desde Lima",
    tituloSeo: "Paquetes a Turquía desde Lima: circuitos",
    descripcion:
      "Paquetes y circuitos a Turquía desde Lima: Estambul, Capadocia, Pamukkale y Éfeso, solos o combinados con Dubái, Egipto o Grecia. Salidas confirmadas y guía en español.",
    intro:
      "Turquía es uno de los viajes más pedidos desde el Perú: Estambul, los globos de Capadocia y las piscinas de Pamukkale. Hay circuitos con vuelo desde Lima y programas solo terrestres para sumar a tu propio pasaje.",
    filtro: pais(/turqu|türk/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Turquía.",
  },
  {
    ruta: "/paquetes-a-egipto",
    nombre: "Egipto",
    h1: "Paquetes a Egipto desde Lima",
    tituloSeo: "Paquetes a Egipto desde Lima: El Cairo y Nilo",
    descripcion:
      "Paquetes a Egipto desde Lima: El Cairo, las pirámides de Guiza, crucero por el Nilo, Luxor y Asuán, solos o con Turquía, Jordania y Tierra Santa. Salidas confirmadas.",
    intro: "Las pirámides de Guiza, el crucero por el Nilo y los templos de Luxor y Abu Simbel, con guía en español.",
    filtro: pais(/egipto/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Egipto.",
  },
  {
    ruta: "/paquetes-a-jordania",
    nombre: "Jordania",
    h1: "Paquetes a Jordania y Petra desde Lima",
    tituloSeo: "Paquetes a Jordania y Petra desde Lima",
    descripcion:
      "Paquetes a Jordania desde Lima: Petra, el desierto de Wadi Rum, el Mar Muerto y Aqaba, solos o con Egipto y Tierra Santa. Programas con salidas confirmadas.",
    intro: "Petra, una de las maravillas del mundo, el desierto de Wadi Rum y el Mar Muerto, en programas cortos o combinados.",
    filtro: pais(/jordan/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje a Jordania y Petra.",
  },
  {
    ruta: "/paquetes-a-dubai",
    nombre: "Dubái",
    h1: "Paquetes a Dubái desde Lima",
    tituloSeo: "Paquetes a Dubái desde Lima",
    descripcion:
      "Paquetes a Dubái y Emiratos Árabes desde Lima: Burj Khalifa, safari en el desierto y Abu Dabi, solos o combinados con Turquía. Salidas confirmadas.",
    intro: "Dubái combina rascacielos, compras y safari en el desierto; muchos lo suman a un circuito por Turquía.",
    filtro: pais(/emiratos/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Dubái.",
  },
  {
    ruta: "/paquetes-a-japon",
    nombre: "Japón",
    h1: "Paquetes a Japón desde Lima",
    tituloSeo: "Paquetes a Japón desde Lima: circuitos",
    descripcion:
      "Paquetes y circuitos a Japón desde Lima: Tokio, Kioto, Osaka y el monte Fuji, solos o con Corea del Sur, China o Tailandia. Guía en español y salidas confirmadas.",
    intro: "Tokio, Kioto, Osaka y el monte Fuji: circuitos guiados para conocer Japón, solo o combinado con Corea y China.",
    filtro: pais(/jap/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Japón.",
  },
  {
    ruta: "/paquetes-a-china",
    nombre: "China",
    h1: "Paquetes a China desde Lima",
    tituloSeo: "Paquetes a China desde Lima: circuitos",
    descripcion:
      "Circuitos por China desde Lima: Beijing y la Gran Muralla, Xi'an, Guilin, Shanghái y las montañas de Zhangjiajie. Programas con salidas confirmadas.",
    intro: "La Gran Muralla, los guerreros de Xi'an, los paisajes de Guilin y la modernidad de Shanghái.",
    filtro: pais(/china/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a China.",
  },
  {
    ruta: "/paquetes-a-india",
    nombre: "India",
    h1: "Paquetes a India desde Lima",
    tituloSeo: "Paquetes a India desde Lima: Taj Mahal",
    descripcion:
      "Paquetes a India desde Lima: el Triángulo de Oro (Delhi, Agra y el Taj Mahal, Jaipur), Varanasi, Nepal y combinados con Tailandia. Salidas confirmadas.",
    intro: "El Taj Mahal, Delhi y Jaipur en el clásico Triángulo de Oro, con extensiones a Varanasi, Nepal o Tailandia.",
    filtro: pais(/india/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a India.",
  },
  {
    ruta: "/paquetes-a-tailandia",
    nombre: "Tailandia",
    h1: "Paquetes a Tailandia desde Lima",
    tituloSeo: "Paquetes a Tailandia desde Lima: Phuket",
    descripcion:
      "Paquetes a Tailandia desde Lima: Bangkok, Chiang Mai, el río Kwai y las playas de Phuket, solos o con India y Japón. Salidas confirmadas.",
    intro: "Templos de Bangkok, el norte de Chiang Mai y las playas de Phuket.",
    filtro: pais(/tailand/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Tailandia.",
  },
  {
    ruta: "/paquetes-a-marruecos",
    nombre: "Marruecos",
    h1: "Paquetes a Marruecos desde Lima",
    tituloSeo: "Paquetes a Marruecos desde Lima",
    descripcion:
      "Circuitos por Marruecos desde Lima: Marrakech, Fez, Casablanca, las ciudades imperiales y el desierto del Sahara. Programas con salidas confirmadas.",
    intro: "Marrakech, Fez y las ciudades imperiales, con noche en el desierto del Sahara.",
    filtro: pais(/marruec/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje a Marruecos.",
  },
  {
    ruta: "/paquetes-a-grecia",
    nombre: "Grecia",
    h1: "Paquetes a Grecia desde Lima",
    tituloSeo: "Paquetes a Grecia desde Lima: islas",
    descripcion:
      "Paquetes a Grecia desde Lima: Atenas, Mykonos y Santorini, cruceros por las islas griegas y combinados con Turquía. Salidas confirmadas.",
    intro: "Atenas y las islas de Mykonos y Santorini, por tierra o en crucero, solo o con Turquía.",
    filtro: pais(/grecia/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Grecia.",
  },
  {
    ruta: "/paquetes-a-costa-rica",
    nombre: "Costa Rica",
    h1: "Paquetes a Costa Rica desde Lima",
    tituloSeo: "Paquetes a Costa Rica desde Lima",
    descripcion:
      "Paquetes a Costa Rica desde Lima: San José, volcán Arenal, bosque nuboso de Monteverde y playas de Guanacaste y el Caribe. Programas con salidas confirmadas.",
    intro: "Volcanes, bosques nubosos y playas en el Pacífico y el Caribe, en un solo viaje.",
    filtro: pais(/costa rica/i),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Costa Rica.",
  },
  {
    ruta: "/paquetes-a-orlando-disney",
    nombre: "Orlando",
    h1: "Paquetes a Orlando y Disney desde Lima",
    tituloSeo: "Paquetes a Orlando y Disney desde Lima",
    descripcion:
      "Paquetes a Orlando desde Lima con parques de Disney y Universal (Epic Universe), hotel y traslados. Programas para familias y quinceañeras con salidas confirmadas.",
    intro: "Los parques de Disney y Universal, incluido el nuevo Epic Universe, en programas para familias y quinceañeras.",
    filtro: (c) => c.ciudades.some((x) => /orlando/i.test(x)),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un paquete a Orlando y Disney.",
  },
  {
    ruta: "/circuitos-por-europa",
    nombre: "Europa",
    h1: "Circuitos por Europa desde Lima",
    tituloSeo: "Circuitos por Europa desde Lima: Eurotrip",
    descripcion:
      "Circuitos por Europa desde Lima: España, Francia, Italia, Suiza, Alemania, Londres, Europa del Este, Balcanes y auroras boreales. Salidas confirmadas.",
    intro:
      "Eurotrips completos con vuelo desde Lima, hoteles, buses y guía en español, y programas solo terrestres por Grecia, Europa del Este, los Balcanes y el norte.",
    filtro: (c) => c.region === "europa",
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un circuito por Europa.",
  },
  {
    ruta: "/paquetes-ano-nuevo-2026",
    nombre: "Año Nuevo",
    h1: "Paquetes de Navidad y Año Nuevo 2026 desde Lima",
    tituloSeo: "Paquetes de Año Nuevo 2026 desde Lima",
    descripcion:
      "Paquetes para pasar Navidad y Año Nuevo 2026 fuera de Lima: Río de Janeiro, Punta Cana, Cartagena, Aruba, Europa y cruceros por el Caribe. Salidas de diciembre confirmadas.",
    intro:
      "Programas que salen en las fiestas de fin de año. Los cupos de diciembre son los primeros que se agotan: si ya tienes tu fecha, sepáralo con el 50%.",
    filtro: (c) => /año nuevo|fin de año|navidad|natal|papá noel/i.test(c.nombre) || /diciembre\s*:?[^a-z]*(2[4-9]|3[01])/i.test(c.salidas),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje para Navidad o Año Nuevo.",
  },
  {
    ruta: "/vacaciones-de-verano-2027",
    nombre: "verano",
    h1: "Viajes para las vacaciones de verano 2027 desde Lima",
    tituloSeo: "Viajes para vacaciones de verano 2027",
    descripcion:
      "Viajes en familia para las vacaciones de enero a marzo de 2027 desde Lima: Orlando y Disney, Punta Cana, Brasil, Cartagena, Costa Rica y cruceros. Salidas confirmadas.",
    intro:
      "Enero, febrero y marzo son los meses de vacaciones escolares en el Perú. Estos programas tienen salidas en esas fechas; mientras antes separes, más opciones de hotel tienes.",
    filtro: (c) =>
      /enero|febrero|marzo/i.test(c.salidas) &&
      ["caribe", "sudamerica", "estados-unidos-canada", "centroamerica", "mexico", "cruceros"].includes(c.region),
    mensajeWhatsApp: "¡Hola Cityland Travel! Quiero cotizar un viaje para las vacaciones de verano.",
  },
];

export function buscarHubCircuitos(ruta: string): HubCircuitos {
  const h = HUBS_CIRCUITOS.find((x) => x.ruta === ruta);
  if (!h) throw new Error(`hub sin configurar: ${ruta}`);
  return h;
}
