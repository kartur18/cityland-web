// Bloque de guía al pie de las páginas de servicio: responde lo que la gente busca en Google (precio, documentos,
// pagos) con los precios del mismo catálogo de la página. Solo datos comprobables (24-oct-2026).

export interface GuiaServicio {
  titulo: string;
  parrafos: string[];
  faqs: { q: string; a: string }[];
  enlaces: { texto: string; href: string }[];
}

type Precios = Readonly<Record<string, string | undefined>>;

// Falla al compilar si la página cambia el id de un producto: así el texto nunca muestra un precio viejo.
function usd(precios: Precios, id: string): string {
  const v = precios[id];
  if (!v) throw new Error(`guias-servicios: falta el precio de «${id}»`);
  return `US$ ${v.replace("$", "")}`;
}

const PERMISO_MENORES =
  "Si es menor de edad y sale del Perú sin sus dos padres, necesita un permiso notarial de viaje.";

export function guiaLunaDeMiel(p: Precios): GuiaServicio {
  return {
    titulo: "Cómo elegir tu luna de miel desde Lima",
    parrafos: [
      "Las parejas que salen de Lima eligen sobre todo Punta Cana, la Riviera Maya y Cartagena. Punta Cana y la Riviera Maya son para quedarse en un resort todo incluido frente al mar; Cartagena combina ciudad colonial y playa, y es un viaje más corto y económico.",
      "Para Colombia (Cartagena y San Andrés) los peruanos viajan solo con DNI vigente. Para República Dominicana necesitas pasaporte vigente. Para otros destinos te confirmamos los documentos al cotizar.",
      "«Todo incluido» significa que las comidas y bebidas dentro del resort ya están pagadas. Lo que entra exactamente cambia de un hotel a otro, por eso te lo detallamos por escrito.",
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta una luna de miel todo incluido desde Lima?",
        a: `Con nosotros, desde ${usd(p, "luna-miel-cartagena-boutique")} por persona en Cartagena (4 días) y desde ${usd(p, "luna-miel-punta-cana-adults-only")} en Punta Cana o la Riviera Maya (5 días), con vuelo desde Lima. El precio final depende de la fecha y del hotel.`,
      },
      { q: "¿Qué destinos no piden pasaporte?", a: "Cartagena y San Andrés, en Colombia: los peruanos pueden viajar solo con DNI vigente." },
      { q: "¿Qué es un resort «solo adultos»?", a: "Un hotel que solo recibe a mayores de 18 años. Es más tranquilo y está pensado para parejas." },
      { q: "¿Cómo se paga?", a: "Separas con el 50% y pagas el resto antes del viaje." },
    ],
    enlaces: [
      { texto: "Punta Cana todo incluido", href: "/destinos/punta-cana" },
      { texto: "Boda en la playa en Punta Cana", href: "/ofertas/boda-en-la-playa-punta-cana-programa-oficial" },
      { texto: "Bahía Príncipe Cayacoa para aniversarios", href: "/ofertas/estadia-hotel-bahia-principe-cayacoa-aniversario-y-bodas" },
      { texto: "Aranwa Paracas para parejas", href: "/ofertas/aranwa-paracas-resort-luna-de-miel-parejas" },
      { texto: "Aranwa Vichayito, Máncora", href: "/ofertas/estadia-hotel-aranwa-vichayito-mancora-aniversario-y-bodas" },
      { texto: "Hoteles", href: "/hoteles" },
    ],
  };
}

export function guiaQuinceaneras(p: Precios): GuiaServicio {
  return {
    titulo: "Cómo elegir el viaje de 15 años",
    parrafos: [
      "Los viajes de 15 años más pedidos son Disney Orlando, Europa, crucero por el Caribe, Cancún y Punta Cana. Para Disney Orlando la quinceañera necesita visa americana: conviene empezar el trámite con meses de anticipación.",
      `Para Europa (hasta 90 días) y para República Dominicana no se necesita visa, pero sí pasaporte vigente. ${PERMISO_MENORES}`,
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta un viaje de 15 años?",
        a: `Con nosotros, desde ${usd(p, "quince-punta-cana-familiar")} en Punta Cana, ${usd(p, "quince-cancun-xcaret")} en Cancún con Xcaret, ${usd(p, "quince-crucero-caribe-sin-visa")} en crucero por el Caribe, ${usd(p, "quince-orlando-crucero-bahamas")} en Disney Orlando con crucero a Bahamas y ${usd(p, "quince-europa-disney-15d")} en Europa (15 días). El precio final depende de la fecha.`,
      },
      {
        q: "¿Necesita visa?",
        a: "Para Disney Orlando, sí: visa americana. Para Europa (hasta 90 días) y República Dominicana, no; basta el pasaporte vigente. Para otros destinos te confirmamos los documentos al cotizar.",
      },
      { q: "¿Puede viajar sin sus padres?", a: `Sí. ${PERMISO_MENORES} Te explicamos cómo sacarlo en nuestra guía.` },
      { q: "¿Hay viajes en grupo?", a: "Sí. Tenemos programas en grupo y en familia." },
      { q: "¿Cómo se paga?", a: "Separas el cupo con el 50% y pagas el resto en cuotas antes del viaje." },
    ],
    enlaces: [
      { texto: "Permiso notarial para menores", href: "/blog/permiso-notarial-viaje-menores-peru-requisitos" },
      { texto: "Qué incluyen los viajes de quinceañeras", href: "/blog/viajes-quinceaneras-europa-disney-que-incluyen" },
      { texto: "Disney y Universal en Orlando", href: "/destinos/orlando-parques-disney-universal" },
      { texto: "Quinceañeras en Punta Cana y crucero", href: "/ofertas/programa-quinceaneras-punta-cana-crucero-grupos-y-delegaciones" },
      { texto: "Visa americana", href: "/visas" },
    ],
  };
}

export function guiaColegios(p: Precios): GuiaServicio {
  return {
    titulo: "Cómo organizar el viaje de promoción",
    parrafos: [
      "Los destinos que más eligen las promociones son Cusco y Machu Picchu, Tarapoto, Punta Sal y Máncora en el Perú, y Cartagena y Punta Cana fuera del país. También cotizamos Oxapampa, Paracas e Ica.",
      `Para Cartagena los alumnos viajan con DNI vigente; para Punta Cana necesitan pasaporte. ${PERMISO_MENORES}`,
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta un viaje de promoción?",
        a: `Por alumno: desde ${usd(p, "promocion-tarapoto-selva")} a Tarapoto, ${usd(p, "promocion-cusco-machu-picchu")} a Cusco, ${usd(p, "promocion-punta-sal-mancora")} a Punta Sal y Máncora, ${usd(p, "promocion-cartagena-colombia")} a Cartagena y ${usd(p, "promocion-punta-cana")} a Punta Cana. Lo que incluye cada programa está en su tarjeta.`,
      },
      { q: "¿Se puede pagar en cuotas?", a: "Sí. El grupo separa con el 50% y paga el resto en cuotas antes del viaje." },
      { q: "¿Presentan el viaje a los padres de familia?", a: "Sí. Hacemos la exposición del programa a los padres." },
      {
        q: "¿Qué documentos necesitan los alumnos para viajar al extranjero?",
        a: `Para Cartagena, DNI vigente; para Punta Cana, pasaporte. ${PERMISO_MENORES}`,
      },
      { q: "¿Atienden institutos y universidades?", a: "Sí. Mira nuestros viajes de promoción para institutos." },
    ],
    enlaces: [
      { texto: "Consejos para el viaje de promoción", href: "/blog/viajes-promocion-escolar-cusco-caribe-consejos" },
      { texto: "Promoción a Punta Cana", href: "/ofertas/paquetes-viaje-de-promocion-escolar-punta-cana" },
      { texto: "Promoción a Cusco y Machu Picchu", href: "/ofertas/paquetes-viaje-de-promocion-escolar-cusco-machu-picchu" },
      { texto: "Promoción a Punta Sal", href: "/ofertas/paquetes-viaje-de-promocion-decameron-punta-sal" },
      { texto: "Promoción a Cartagena y San Andrés", href: "/ofertas/paquetes-viaje-de-promocion-cartagena-san-andres" },
      { texto: "Promoción a Tarapoto", href: "/ofertas/paquetes-viaje-de-promocion-escolar-tarapoto" },
      { texto: "Promoción a Cancún", href: "/ofertas/paquetes-viaje-de-promocion-escolar-cancun" },
      { texto: "Tarapoto", href: "/destinos/tarapoto-selva" },
      { texto: "Oxapampa y Pozuzo", href: "/destinos/oxapampa-pozuzo-villa-rica-selva-central" },
      { texto: "Paracas, Ica y Huacachina", href: "/destinos/paracas-ica-huacachina-nazca" },
      { texto: "Permiso notarial para menores", href: "/blog/permiso-notarial-viaje-menores-peru-requisitos" },
      { texto: "Viajes para institutos", href: "/institutos" },
    ],
  };
}

export function guiaEmpresas(p: Precios): GuiaServicio {
  return {
    titulo: "Viajes de empresa con factura",
    parrafos: [
      "Atendemos a empresas que necesitan pasajes nacionales e internacionales, hoteles y traslados para su equipo, viajes de incentivos, ferias, congresos y convenciones.",
      "Cada servicio se emite con boleta o factura electrónica a nombre de tu empresa, y un asesor lleva tus viajes para que no expliques todo de nuevo cada vez.",
    ],
    faqs: [
      { q: "¿Emiten factura electrónica a nombre de la empresa?", a: "Sí, con el RUC de tu empresa." },
      {
        q: "¿Cuánto cuesta un pasaje nacional para mi equipo?",
        a: `Los pasajes nacionales parten desde ${usd(p, "emision-vuelos-nacionales-internacionales")}; te cotizamos según la ruta y la fecha.`,
      },
      {
        q: "¿Organizan viajes de incentivo para vendedores o equipos?",
        a: `Sí, desde ${usd(p, "viajes-incentivos-premiacion")} por persona, y también convenciones anuales y full days.`,
      },
      { q: "¿Ayudan con ferias, congresos y visas de negocios?", a: "Sí: vuelo, hotel y traslados para la feria, y asesoría para la visa de negocios cuando la piden." },
    ],
    enlaces: [
      { texto: "Viajes de incentivos para empresas", href: "/ofertas/corporativo-viajes-de-incentivos-para-empresas" },
      { texto: "Incentivos en Cusco", href: "/ofertas/viaje-incentivos-empresas-cusco-programa-oficial" },
      { texto: "Convenciones en Paracas", href: "/ofertas/convencion-corporativa-paracas-grupos-y-delegaciones" },
      { texto: "Feria de Cantón, China", href: "/ofertas/feria-de-canton-china-importadores-tarifa-promocional" },
      { texto: "Convenciones mineras", href: "/ofertas/agencia-empresas-viajes-convenciones-mineras-perumin" },
      { texto: "Hoteles", href: "/hoteles" },
    ],
  };
}
