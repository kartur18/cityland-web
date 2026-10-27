import type { LandingComercialSEO } from "@/lib/catalogo-mil-landings-comerciales";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { generarIndiceExpansion20k } from "@/lib/catalogo-expansion-20k";

export interface ResumenLandingExpansion {
  slug: string;
  cluster: LandingComercialSEO["cluster"];
  clusterNombre: string;
  titulo: string;
  destinoOPais: string;
  precioDesdeUSD: number;
   constructorDatos: () => LandingComercialSEO;
}

const SALVEDAD_MIGRATORIA =
  "Recuerda que la decisión final de admisión en frontera corresponde siempre a las autoridades migratorias de cada país; en Cityland Travel preparamos tu expediente completo y verificable para que viajes con total respaldo.";

export function limpiarParentesisDobles(texto: string): string {
  return texto
    .replace(/\(([^()]+)\)\s*\(([^()]+)\)/g, "($1 · $2)")
    .replace(/\(([^()]*)\(([^()]+)\)([^()]*)\)/g, (_, a: string, b: string, c: string) => {
      const partes = [a.trim(), b.trim(), c.trim()].filter(Boolean);
      return `(${partes.join(" · ")})`;
    });
}

function construirObjetoLanding(params: {
  slug: string;
  cluster: LandingComercialSEO["cluster"];
  clusterNombre: string;
  badge: string;
  banderas: string[];
  tituloHero: string;
  tituloDestacado: string;
  descripcionHero: string;
  negritaHero: string;
  destinoOPais: string;
  precioBase: number;
  etiquetaVitrina: string;
  duracionOServicio: string;
  checksBase: [string, string, string];
  checksPlus: [string, string, string];
  checksVip: [string, string, string];
  esInternacional: boolean;
  keywords: string[];
  faqsExtra: { q: string; a: string }[];
}): LandingComercialSEO {
  const {
    slug,
    cluster,
    clusterNombre,
    badge,
    banderas,
    tituloDestacado,
    negritaHero,
    destinoOPais,
    precioBase,
    duracionOServicio,
    checksBase,
    checksPlus,
    checksVip,
    esInternacional,
    keywords,
    faqsExtra,
  } = params;

  const tituloHero = limpiarParentesisDobles(params.tituloHero);
  const etiquetaVitrina = limpiarParentesisDobles(params.etiquetaVitrina);
  const descripcionHero = limpiarParentesisDobles(params.descripcionHero.replace(/"/g, ""));

  const tituloCompleto = limpiarParentesisDobles(`${tituloHero} ${tituloDestacado}`.trim());
  const mitadBase = Math.max(20, Math.round(precioBase * 0.5));
  const pCard1 = Math.max(
    19,
    Math.min(precioBase - 5, Math.round((precioBase * 0.92) / 5) * 5)
  );
  const pCard2 = precioBase;
  const pCard3 = Math.max(
    precioBase + 10,
    Math.round((precioBase * 1.18) / 5) * 5
  );
  const msgPrincipal = `¡Hola Cityland Travel! Vi en su web ${tituloCompleto} (Desde $${precioBase.toLocaleString("en-US")}) y deseo recibir una cotización personalizada.`;

  const esTramiteOSeguro =
    cluster === "visas-seguros" ||
    /(seguro-schengen|reserva-pnr|asesoria-visa)/i.test(slug);

  const fallbackRegion =
    cluster === "cruceros"
      ? "cruceros"
      : esTramiteOSeguro
      ? "visasSeguros"
      : cluster === "empresas"
      ? "corporativo"
      : undefined;

  const [f0, f1, f2, f3, f4] = obtenerGaleriaPorTexto(
    `${slug} ${etiquetaVitrina} ${tituloCompleto} ${destinoOPais}`,
    fallbackRegion
  );

  const faqs: { q: string; a: string }[] = [
    ...faqsExtra.map((f) => ({
      q: limpiarParentesisDobles(f.q.replace(/"/g, "")),
      a: limpiarParentesisDobles(f.a.replace(/"/g, "")),
    })),
    {
      q: esTramiteOSeguro
        ? `¿Cómo inicio la gestión de ${tituloCompleto} en Cityland Travel?`
        : `¿Cómo puedo separar ${tituloCompleto} con el 50% de inicial?`,
      a: esTramiteOSeguro
        ? `Puedes iniciar tu trámite o emisión hoy mismo desde $${precioBase.toLocaleString("en-US")} por WhatsApp (+51 944 103 890) o en nuestra oficina de Los Olivos (RUC 20614914239), recibiendo tu documentación oficial y comprobante electrónico SUNAT.`
        : `Puedes congelar tu tarifa referencial abonando el 50% ($${mitadBase.toLocaleString("en-US")} por pasajero) mediante transferencia bancaria BCP/BBVA/Interbank, tarjeta o en nuestra sede de Los Olivos (RUC 20614914239), sujeto a disponibilidad de tu fecha exacta de viaje.`,
    },
    {
      q: esInternacional
        ? `¿Qué documentos y respaldo migratorio incluye este servicio para ${destinoOPais}?`
        : `¿Qué comprobantes y garantías recibo al reservar mi viaje a ${destinoOPais}?`,
      a: esInternacional
        ? `Te entregamos documentación verificable (código PNR de aerolínea, vouchers de alojamiento y/o póliza Schengen 30.000€ según la modalidad contratada) y orientación personalizada. ${SALVEDAD_MIGRATORIA}`
        : `Recibes tu código de reserva verificable, vouchers de servicios contratados, contrato turístico y Boleta o Factura Electrónica SUNAT emitida por Cityland Group E.I.R.L. (RUC 20614914239).`,
    },
  ];

  const tituloCortoSEO =
    tituloCompleto.length > 44
      ? `${etiquetaVitrina} Desde $${precioBase.toLocaleString("en-US")}`
      : `${tituloCompleto}`;
  const metaTitle =
    `${tituloCortoSEO} | Cityland Travel`.length > 60
      ? `${etiquetaVitrina.slice(0, 36).trim()} Desde $${precioBase} | Cityland`
      : `${tituloCortoSEO} | Cityland Travel`;

  const descBase = `${etiquetaVitrina} (${destinoOPais}) desde $${precioBase.toLocaleString("en-US")}. ${
    esTramiteOSeguro
      ? "Atención formal RUC 20614914239 en Los Olivos y WhatsApp 944103890."
      : `Separa con 50% ($${mitadBase.toLocaleString("en-US")}) en Cityland Travel · WhatsApp 944103890.`
  }`;
  const metaDescription =
    descBase.length > 156 ? `${descBase.slice(0, 153).trim()}...` : descBase;

  return {
    slug,
    cluster,
    clusterNombre,
    titulo: tituloCompleto,
    destinoOPais,
    precioDesdeUSD: precioBase,
    metaTitle,
    metaDescription,
    keywords,
    faqs,
    config: {
      badgeHero: badge,
      banderasHero: banderas,
      tituloHero,
      tituloDestacadoHero: tituloDestacado,
      descripcionHero,
      negritaHero,
      ctaPrincipalTexto: "Cotizar Ahora por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje: msgPrincipal,
      checksHero: checksBase,
      vitrina: {
        pais: destinoOPais,
        etiquetaIzq: destinoOPais,
        etiquetaDer: precioBase >= 180 ? "Separa con 50%" : "Emisión Inmediata",
        img: f0,
        alt: tituloCompleto,
        sobretitulo: duracionOServicio,
        titulo: etiquetaVitrina,
        labelPrecio: esTramiteOSeguro
          ? "Tarifa Referencial del Servicio"
          : "Tarifa Referencial por Pasajero",
        precio: `$${precioBase.toLocaleString("en-US")}`,
        moneda: "USD",
        notaInferior:
          precioBase >= 180
            ? `Separa con $${mitadBase.toLocaleString("en-US")} (50%) · Sujeto a fecha`
            : "Emisión formal con Boleta o Factura SUNAT (RUC 20614914239)",
        waNumero: "51944103890",
        waMensaje: msgPrincipal,
      },
      seccionCatalogo: {
        sobretitulo: `${clusterNombre} · Cotización Personalizada`,
        titulo: `Modalidades Disponibles: ${destinoOPais}`,
        filtros: [
          { id: "todos", label: "Todas las Opciones" },
          { id: "ahorro", label: esTramiteOSeguro ? "Gestión Base" : "Preventa / Base" },
          { id: "completo", label: esTramiteOSeguro ? "Expediente Completo" : "Programa Clásico" },
          { id: "vip", label: esTramiteOSeguro ? "Prioritario VIP" : "Superior / A Medida" },
        ],
      },
      items: [
        {
          id: `${slug}-1`,
          titulo: esTramiteOSeguro
            ? `Modalidad Base — Gestión Oficial (${destinoOPais})`
            : `Opción 1: Tarifa Preventa / Base (${destinoOPais})`,
          pais: destinoOPais,
          filtro: "ahorro",
          subtitulo: esTramiteOSeguro
            ? "Revisión de requisitos y emisión documentaria verificable"
            : "Salida desde Aeropuerto Jorge Chávez (LIM) · Separa con 50%",
          precioPrincipal: `$${pCard1.toLocaleString("en-US")}`,
          precioSecundario:
            pCard1 >= 180 ? `$${Math.round(pCard1 * 0.5).toLocaleString("en-US")}` : undefined,
          notaPrecio: esTramiteOSeguro
            ? "Emisión formal RUC 20614914239 · Entrega digital y física"
            : "Tarifa referencial según fecha · Cotiza cupos por WhatsApp",
          tag: esTramiteOSeguro ? "Gestión Oficial" : "Preventa 2026",
          tagBg: "bg-emerald-600",
          img: f1,
          alt: `Modalidad Base ${tituloCompleto}`,
          resumenCorto: `${duracionOServicio} · Respaldo Formal`,
          checks: checksBase,
          waNumber: "51944103890",
          waMensaje: `¡Hola Cityland Travel! Deseo cotizar la opción base de "${tituloCompleto}" (Desde $${pCard1}).`,
        },
        {
          id: `${slug}-2`,
          titulo: esTramiteOSeguro
            ? `Expediente Completo + Asesoría 1 a 1 (${destinoOPais})`
            : `Opción 2: Programa Clásico Completo (${destinoOPais})`,
          pais: destinoOPais,
          filtro: "completo",
          subtitulo: esTramiteOSeguro
            ? "Acompañamiento personalizado + verificación integral de documentos"
            : "La opción más solicitada por viajeros peruanos desde Lima (LIM)",
          precioPrincipal: `$${pCard2.toLocaleString("en-US")}`,
          precioSecundario:
            pCard2 >= 180 ? `$${mitadBase.toLocaleString("en-US")}` : undefined,
          notaPrecio: esTramiteOSeguro
            ? "Incluye validación de formatos, soporte directo y comprobante SUNAT"
            : "Incluye servicios detallados del programa · Sujeto a fecha de viaje",
          tag: "Más Solicitado",
          tagBg: "bg-red-600",
          img: f2,
          alt: `Programa Completo ${tituloCompleto}`,
          resumenCorto: `${duracionOServicio} · Atención Especializada`,
          checks: checksPlus,
          waNumber: "51944103890",
          waMensaje: `¡Hola Cityland Travel! Deseo cotizar la modalidad completa de "${tituloCompleto}" (Desde $${pCard2}).`,
        },
        {
          id: `${slug}-3`,
          titulo: esTramiteOSeguro
            ? `Atención Prioritaria / Urgente VIP (${destinoOPais})`
            : `Opción 3: Categoría Superior / Flexible (${destinoOPais})`,
          pais: destinoOPais,
          filtro: "vip",
          subtitulo: esTramiteOSeguro
            ? "Prioridad para viajes próximos + asesoría en sede Los Olivos o videollamada"
            : "Hotelería superior, fechas flexibles y asistencia preferencial",
          precioPrincipal: `$${pCard3.toLocaleString("en-US")}`,
          precioSecundario:
            pCard3 >= 180 ? `$${Math.round(pCard3 * 0.5).toLocaleString("en-US")}` : undefined,
          notaPrecio: esTramiteOSeguro
            ? "Atención preferencial inmediata con especialista consular/migratorio"
            : "Cotización personalizada según temporada y número de viajeros",
          tag: esTramiteOSeguro ? "Prioritario VIP" : "Superior / VIP",
          tagBg: "bg-[#0a1628]",
          img: f3,
          alt: `Edición Superior ${tituloCompleto}`,
          resumenCorto: `${duracionOServicio} · Servicio Preferencial`,
          checks: checksVip,
          waNumber: "51944103890",
          waMensaje: `¡Hola Cityland Travel! Deseo cotizar la opción prioritaria/superior de "${tituloCompleto}" (Desde $${pCard3}).`,
        },
      ],
      pilares: [
        {
          titulo: "Agencia Formal RUC 20614914239",
          sub: "Boleta, factura electrónica SUNAT y contrato oficial.",
        },
        {
          titulo: "Separa con el 50% de Inicial",
          sub: "Congela tu tarifa hoy y paga el saldo en cuotas.",
        },
        {
          titulo: "Código PNR 100% Verificable",
          sub: "Revisa tu reserva en la web oficial de la aerolínea.",
        },
        {
          titulo: "Sede en Los Olivos y Soporte 24/7",
          sub: "Atención presencial en Lima Norte y vía WhatsApp.",
        },
      ],
      bannerFinal: {
        sobretitulo: "Atención Inmediata por Especialistas",
        titulo: `¿Listo para cotizar ${tituloCompleto}?`,
        descripcion:
          "Escríbenos por WhatsApp al +51 944 103 890 o visítanos en nuestra oficina en Los Olivos. Recibe tu propuesta detallada en menos de 2 minutos.",
        ctaTexto: "Hablar con una Asesora en WhatsApp",
        waNumero: "51944103890",
        waMensaje: msgPrincipal,
        img: f4,
        alt: `Cotizar ${tituloCompleto} en Cityland Travel`,
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar por WhatsApp",
        mensaje: msgPrincipal,
      },
    },
  };
}

// ============================================================================
// BLOQUE 1: ESPAÑA, BARCELONA, ITALIA Y EUROPA × MESES/TEMPORADAS × 3 ENFOQUES
// 40 Destinos Europeos × 16 Temporadas × 3 Enfoques = 1,920 Landings
// ============================================================================
const DESTINOS_EUROPA_DETALLE: [string, string, string, number, string][] = [
  ["Madrid", "madrid", "España", 1350, "Puerta del Sol, Gran Vía, Palacio Real y Museo del Prado"],
  ["Barcelona", "barcelona", "España", 1380, "Sagrada Familia, Park Güell, Las Ramblas, Barrio Gótico y Camp Nou"],
  ["Sevilla", "sevilla", "España", 1390, "Plaza de España, Real Alcázar, La Giralda y Barrio de Santa Cruz"],
  ["Valencia", "valencia", "España", 1380, "Ciudad de las Artes y las Ciencias, Playa de la Malvarrosa y casco histórico"],
  ["Granada y La Alhambra", "granada-espana", "España", 1390, "Palacios Nazaríes de La Alhambra, Generalife y mirador del Albaicín"],
  ["Málaga y Costa del Sol", "malaga-costa-del-sol", "España", 1390, "Marbella, Puerto Banús, Alcazaba de Málaga y playas del Mediterráneo"],
  ["Bilbao y País Vasco", "bilbao-pais-vasco", "España", 1420, "Museo Guggenheim, Casco Viejo y gastronomía vasca de primer nivel"],
  ["San Sebastián", "san-sebastian-espana", "España", 1440, "Playa de La Concha, Peine del Viento y ruta de pintxos vascos"],
  ["Santiago de Compostela", "santiago-de-compostela", "España", 1390, "Catedral de Santiago, Plaza del Obradoiro y rutas por Galicia"],
  ["Córdoba y Toledo", "cordoba-y-toledo", "España", 1380, "Mezquita-Catedral de Córdoba, Judería y ciudad imperial de Toledo"],
  ["Palma de Mallorca", "palma-de-mallorca", "España", 1450, "Catedral de Mallorca, calas de agua turquesa y Cuevas del Drach"],
  ["Ibiza y Formentera", "ibiza-espana", "España", 1490, "Dalt Vila, Cala Comte, Formentera y atardeceres en el Mediterráneo"],
  ["Tenerife e Islas Canarias", "tenerife-canarias", "España", 1460, "Parque Nacional del Teide, Costa Adeje y clima templado todo el año"],
  ["Zaragoza y Basílica del Pilar", "zaragoza-espana", "España", 1370, "Basílica de Nuestra Señora del Pilar, Palacio de la Aljafería y conexión AVE"],
  ["Roma y El Vaticano", "roma-italia", "Italia", 1390, "Coliseo Romano, Foro Imperial, Fontana di Trevi, Plaza San Pedro y Museos Vaticanos"],
  ["Venecia", "venecia-italia", "Italia", 1440, "Plaza de San Marcos, Puente de Rialto, Gran Canal y paseo en góndola"],
  ["Florencia y La Toscana", "florencia-toscana", "Italia", 1420, "Catedral Santa Maria del Fiore, Ponte Vecchio, Galería Uffizi y viñedos toscanos"],
  ["Milán", "milan-italia", "Italia", 1390, "Duomo di Milano, Galleria Vittorio Emanuele II y Teatro alla Scala"],
  ["Nápoles y Pompeya", "napoles-y-pompeya", "Italia", 1430, "Ruinas arqueológicas de Pompeya, Monte Vesubio y centro histórico napolitano"],
  ["Costa Amalfitana y Capri", "costa-amalfitana-capri", "Italia", 1550, "Positano, Amalfi, Ravello y excursión en barco a la Isla de Capri"],
  ["Pisa y Cinque Terre", "pisa-y-cinque-terre", "Italia", 1450, "Torre Inclinada de Pisa y los 5 pueblos costeros de Cinque Terre"],
  ["Verona y Lago di Como", "verona-y-lago-di-como", "Italia", 1460, "Casa de Julieta, Arena de Verona y villas panorámicas del Lago di Como"],
  ["Sicilia, Palermo y Taormina", "sicilia-italia", "Italia", 1490, "Teatro Griego de Taormina, Valle de los Templos, Palermo y Monte Etna"],
  ["Bolonia y Módena", "bolonia-italia", "Italia", 1410, "Piazza Maggiore, Torres de Bolonia, gastronomía italiana y Museo Ferrari"],
  ["Turín y Piamonte", "turin-italia", "Italia", 1410, "Palacio Real de Turín, Mole Antonelliana y Museo Egipcio"],
  ["Asís y San Giovanni Rotondo", "asis-italia-peregrinacion", "Italia", 1460, "Basílica de San Francisco de Asís, Cascia y santuario del Padre Pío"],
  ["París", "paris-francia", "Francia", 1450, "Torre Eiffel, Museo del Louvre, Arco del Triunfo, Versalles y crucero por el Sena"],
  ["Lourdes, Niza y Costa Azul", "lourdes-y-costa-azul", "Francia", 1490, "Santuario de Nuestra Señora de Lourdes, Niza, Cannes y Principado de Mónaco"],
  ["Zúrich, Lucerna e Interlaken", "zurich-y-lucerna-suiza", "Suiza", 1650, "Alpes Suizos, tren panorámico, Monte Titlis, Lucerna y Zúrich"],
  ["Londres", "londres-reino-unido", "Reino Unido", 1550, "Big Ben, Palacio de Buckingham, Tower Bridge, London Eye y Museo Británico"],
  ["Lisboa y Santuario de Fátima", "lisboa-y-fatima", "Portugal", 1390, "Torre de Belém, Alfama, Sintra y Santuario de Nuestra Señora de Fátima"],
  ["Oporto y Valle del Duero", "oporto-portugal", "Portugal", 1410, "Puente Don Luis I, Ribeira de Oporto y bodegas tradicionales"],
  ["Ámsterdam", "amsterdam-paises-bajos", "Países Bajos", 1460, "Canales de Ámsterdam, Plaza Dam, Zaanse Schans y jardines de Keukenhof"],
  ["Bruselas, Brujas y Gante", "bruselas-y-brujas", "Bélgica", 1470, "Grand Place de Bruselas, canales medievales de Brujas y Castillo de Gante"],
  ["Berlín y Múnich", "berlin-y-munich", "Alemania", 1490, "Puerta de Brandeburgo, Marienplatz de Múnich y Castillo de Neuschwanstein"],
  ["Praga, Viena y Budapest", "praga-viena-budapest", "Europa", 1550, "Puente de Carlos en Praga, Palacio de Schönbrunn en Viena y Parlamento de Budapest"],
  ["Atenas, Mykonos y Santorini", "atenas-y-santorini", "Grecia", 1690, "Acrópolis de Atenas y puestas de sol en Oia (Santorini) e islas del Egeo"],
  ["Estambul y Capadocia", "estambul-y-capadocia", "Turquía", 1690, "Santa Sofía, Mezquita Azul, Bósforo y valles de globos aerostáticos en Capadocia"],
  ["Dubái y Abu Dabi", "dubai-y-abu-dabi", "Emiratos Árabes", 1790, "Burj Khalifa, Safari 4x4 por el desierto, Marina de Dubái y Gran Mezquita Sheikh Zayed"],
  ["El Cairo y Crucero por el Nilo", "el-cairo-y-nilo", "Egipto", 1790, "Pirámides de Giza, Esfinge, Museo Egipcio y crucero de lujo por Luxor y Asuán"],
];

const TEMPORADAS_EUROPA: [string, string, number, string][] = [
  ["Enero", "enero", 0.92, "Temporada baja invernal con tarifas reducidas en vuelos y menor afluencia en museos"],
  ["Febrero", "febrero", 0.93, "Excelente mes para ahorrar en boletos aéreos y disfrutar de escapadas románticas en Europa"],
  ["Marzo", "marzo", 0.96, "Inicio de la primavera europea con clima agradable (12°C a 18°C) y tarifas moderadas"],
  ["Abril", "abril", 1.02, "Plena primavera con jardines floridos, clima ideal para caminar y celebraciones tradicionales"],
  ["Mayo", "mayo", 1.05, "Uno de los mejores meses del año para viajar a España e Italia por su clima templado y días largos"],
  ["Junio", "junio", 1.08, "Inicio del verano europeo con ambiente vibrante, terrazas abiertas y festivales culturales"],
  ["Julio", "julio", 1.14, "Temporada de Fiestas Patrias peruanas y verano europeo con sol garantizado"],
  ["Agosto", "agosto", 1.12, "Vacaciones de verano en el Mediterráneo con playas y circuitos completos"],
  ["Septiembre", "septiembre", 1.05, "Mes favorito de los viajeros expertos: clima cálido sin el calor extremo de julio y mejores precios"],
  ["Octubre", "octubre", 0.98, "Otoño europeo con paisajes dorados, clima fresco y tarifas muy convenientes desde Lima"],
  ["Noviembre", "noviembre", 0.92, "Temporada de grandes descuentos en vuelos transatlánticos y hoteles céntricos"],
  ["Diciembre", "diciembre", 1.1, "Mercados navideños iluminados, ambiente festivo y celebraciones de Fin de Año"],
  ["Semana Santa", "semana-santa", 1.09, "Salidas especiales para Semana Santa con procesiones históricas y audiencias en Roma y Sevilla"],
  ["Fiestas Patrias", "fiestas-patrias", 1.14, "Bloqueos aéreos confirmados para aprovechar el feriado largo de julio desde Perú"],
  ["Primavera Europea", "primavera", 1.02, "Clima perfecto entre abril y junio para recorrer Madrid, Barcelona, Roma, Florencia y Venecia"],
  ["Otoño Europeo", "otono", 0.97, "Tarifas preferenciales entre septiembre y noviembre con excelente clima para circuitos"],
];

const MODALIDADES_EUROPA: [string, string, number, string][] = [
  ["paquetes-a", "Paquete Vuelo + Hotel", 1.0, "Incluye boleto aéreo ida y vuelta desde Lima, hotel céntrico con desayunos y seguro Schengen 30.000€"],
  ["circuitos-por", "Circuito Guiado en Español", 1.12, "Incluye vuelos, hoteles seleccionados, traslados en tren AVE / bus turístico y guías en español"],
  ["ofertas-viajes-a", "Preventa 50% Inicial", 0.85, "Tarifa promocional bloqueando tu espacio con el 50% de inicial y saldo en cuotas mensuales"],
];

// ============================================================================
// BLOQUE 2: CIRCUITOS COMBINADOS Y DESTINOS × DURACIÓN EXACTA × 3 ENFOQUES
// 80 Circuitos/Destinos × 8 Duraciones × 3 Enfoques = 1,920 Landings
// ============================================================================
const CIRCUITOS_Y_DESTINOS_80: [string, string, string, LandingComercialSEO["cluster"], string, number, boolean][] = [
  ["Madrid y Barcelona en Tren AVE", "madrid-y-barcelona-tren-ave", "España", "mundiales", "Circuitos por España", 1450, true],
  ["Madrid, Barcelona y Roma", "madrid-barcelona-y-roma", "España", "mundiales", "Circuitos España e Italia", 1650, true],
  ["Madrid, París y Roma Clásico", "madrid-paris-y-roma", "Europa", "mundiales", "Circuitos Europeos", 1690, true],
  ["Roma, Florencia y Venecia", "roma-florencia-y-venecia", "Italia", "mundiales", "Circuitos por Italia", 1590, true],
  ["Gran Tour de Italia (Milán, Venecia, Florencia y Roma)", "gran-tour-de-italia", "Italia", "mundiales", "Circuitos por Italia", 1750, true],
  ["Madrid, Barcelona, Roma, Florencia y Venecia", "espana-e-italia-completo", "Europa", "mundiales", "Circuitos España e Italia", 1890, true],
  ["Madrid, Andalucía (Sevilla, Córdoba, Granada) y Costa del Sol", "madrid-y-andalucia", "España", "mundiales", "Circuitos por España", 1550, true],
  ["Barcelona, Costa Azul (Niza, Mónaco) y Roma", "barcelona-costa-azul-y-roma", "Europa", "mundiales", "Circuitos Mediterráneos", 1750, true],
  ["Madrid, Fátima, Lourdes y Roma Vaticano", "santuarios-marianos-europa", "Europa", "religiosos-eventos", "Peregrinaciones Europeas", 1790, true],
  ["España, Francia, Suiza e Italia", "espana-francia-suiza-italia", "Europa", "mundiales", "Circuitos Europeos", 1990, true],
  ["Madrid y Lisboa con Fátima", "madrid-y-lisboa-fatima", "España", "mundiales", "Circuitos Ibéricos", 1490, true],
  ["París, Bruselas, Brujas y Ámsterdam", "paris-brujas-y-amsterdam", "Europa", "mundiales", "Circuitos Europeos", 1690, true],
  ["Londres, París y Ámsterdam en Eurostar", "londres-paris-y-amsterdam", "Europa", "mundiales", "Circuitos Europeos", 1790, true],
  ["Praga, Viena y Budapest Imperial", "praga-viena-y-budapest-imperial", "Europa", "mundiales", "Circuitos Europeos", 1690, true],
  ["Atenas y Crucero por Islas Griegas (Mykonos y Santorini)", "atenas-e-islas-griegas", "Grecia", "mundiales", "Circuitos Mediterráneos", 1890, true],
  ["Estambul, Capadocia y Pamukkale", "estambul-capadocia-pamukkale", "Turquía", "mundiales", "Circuitos por Turquía", 1690, true],
  ["Turquía y Dubái Combinado", "turquia-y-dubai-combinado", "Turquía", "mundiales", "Circuitos Medio Oriente", 1990, true],
  ["Turquía, Egipto y Dubái", "turquia-egipto-y-dubai", "Turquía", "mundiales", "Circuitos Medio Oriente", 2190, true],
  ["Tierra Santa (Jerusalén, Belén y Galilea) y Roma", "tierra-santa-y-roma", "Israel", "religiosos-eventos", "Peregrinaciones Internacionales", 2090, true],
  ["Tokio, Kioto y Osaka (Japón Clásico)", "tokio-kioto-y-osaka", "Japón", "mundiales", "Circuitos por Asia", 2490, true],
  ["Punta Cana Todo Incluido", "punta-cana-todo-incluido", "República Dominicana", "all-inclusive", "Caribe Todo Incluido", 1190, true],
  ["Punta Cana y Bayahíbe con Isla Saona", "punta-cana-y-bayahibe", "República Dominicana", "all-inclusive", "Caribe Todo Incluido", 1250, true],
  ["Cancún Todo Incluido Frente al Mar", "cancun-todo-incluido", "México", "all-inclusive", "Caribe Mexicano", 1149, true],
  ["Riviera Maya y Playa del Carmen Todo Incluido", "riviera-maya-todo-incluido", "México", "all-inclusive", "Caribe Mexicano", 1190, true],
  ["Cancún, Chichén Itzá y Parque Xcaret", "cancun-y-xcaret", "México", "all-inclusive", "Caribe Mexicano", 1290, true],
  ["Ciudad de México, Basílica de Guadalupe y Cancún", "cdmx-guadalupe-y-cancun", "México", "mundiales", "Circuitos por México", 1090, true],
  ["San Andrés Isla Todo Incluido", "san-andres-todo-incluido", "Colombia", "all-inclusive", "Caribe Colombiano", 899, true],
  ["Cartagena de Indias e Isla Barú", "cartagena-e-isla-baru", "Colombia", "all-inclusive", "Caribe Colombiano", 899, true],
  ["Cartagena y San Andrés Combinado", "cartagena-y-san-andres-combinado", "Colombia", "all-inclusive", "Caribe Colombiano", 1090, true],
  ["Medellín, Guatapé y Comuna 13", "medellin-y-guatape", "Colombia", "mundiales", "Viajes a Colombia", 589, true],
  ["Cartagena y Medellín Combinado", "cartagena-y-medellin", "Colombia", "mundiales", "Viajes a Colombia", 990, true],
  ["Panamá y Medellín Combinado", "panama-y-medellin-combinado", "Panamá", "mundiales", "Circuitos Combinados", 799, true],
  ["Ciudad de Panamá y Playa Blanca Todo Incluido", "panama-y-playa-blanca", "Panamá", "all-inclusive", "Caribe y Compras", 799, true],
  ["Bogotá y Eje Cafetero", "bogota-y-eje-cafetero", "Colombia", "mundiales", "Viajes a Colombia", 629, true],
  ["Santa Marta y Parque Tayrona", "santa-marta-y-tayrona", "Colombia", "all-inclusive", "Caribe Colombiano", 669, true],
  ["Aruba Todo Incluido (Eagle Beach y Palm Beach)", "aruba-todo-incluido", "Aruba", "all-inclusive", "Caribe Sur", 1090, true],
  ["Curazao Todo Incluido (Playas Turquesas)", "curazao-todo-incluido", "Curazao", "all-inclusive", "Caribe Sur", 1090, true],
  ["Aruba y Curazao Combinado", "aruba-y-curazao-combinado", "Aruba", "all-inclusive", "Caribe Sur", 1350, true],
  ["Montego Bay y Ocho Ríos (Jamaica Todo Incluido)", "jamaica-todo-incluido", "Jamaica", "all-inclusive", "Caribe Todo Incluido", 1190, true],
  ["La Habana y Varadero Todo Incluido", "la-habana-y-varadero", "Cuba", "all-inclusive", "Caribe Todo Incluido", 1090, true],
  ["San José, Volcán Arenal y Manuel Antonio", "costa-rica-ecoturismo", "Costa Rica", "mundiales", "Centroamérica", 890, true],
  ["Santo Domingo y Punta Cana", "santo-domingo-y-punta-cana", "República Dominicana", "all-inclusive", "Caribe Todo Incluido", 1090, true],
  ["Miami y Compras en Sawgrass Mills", "miami-y-compras", "Estados Unidos", "mundiales", "Viajes a Estados Unidos", 990, true],
  ["Orlando Parques Disney World y Universal Studios", "orlando-disney-y-universal", "Estados Unidos", "mundiales", "Viajes Familiares EE. UU.", 1290, true],
  ["Miami y Orlando Parques Combinado", "miami-y-orlando-combinado", "Estados Unidos", "mundiales", "Viajes a Estados Unidos", 1390, true],
  ["Nueva York (Manhattan, Estatua de la Libertad y Broadway)", "nueva-york-completo", "Estados Unidos", "mundiales", "Viajes a Estados Unidos", 1190, true],
  ["Nueva York, Washington y Cataratas del Niágara", "nueva-york-y-washington", "Estados Unidos", "mundiales", "Circuitos EE. UU.", 1390, true],
  ["Las Vegas y Gran Cañón del Colorado", "las-vegas-y-gran-canon", "Estados Unidos", "mundiales", "Viajes a Estados Unidos", 1190, true],
  ["Los Ángeles, Hollywood y Disneyland California", "los-angeles-y-california", "Estados Unidos", "mundiales", "Viajes a Estados Unidos", 1290, true],
  ["Toronto, Montreal y Cataratas del Niágara", "toronto-y-montreal-canada", "Canadá", "mundiales", "Viajes a Canadá", 1350, true],
  ["Buenos Aires Clásico y Show de Tango", "buenos-aires-clasico", "Argentina", "mundiales", "Sudamérica", 790, true],
  ["Buenos Aires y San Carlos de Bariloche", "buenos-aires-y-bariloche", "Argentina", "mundiales", "Sudamérica", 890, true],
  ["Buenos Aires, Bariloche y Glaciar Perito Moreno (Calafate)", "argentina-patagonia-completa", "Argentina", "mundiales", "Sudamérica", 1150, true],
  ["Cataratas del Iguazú (Lado Argentino y Brasileño)", "cataratas-del-iguazu", "Brasil", "mundiales", "Sudamérica", 729, true],
  ["Río de Janeiro (Cristo Redentor y Pan de Azúcar)", "rio-de-janeiro-clasico", "Brasil", "mundiales", "Sudamérica", 990, true],
  ["Río de Janeiro, Búzios y Arraial do Cabo", "rio-de-janeiro-y-buzios", "Brasil", "mundiales", "Playas de Brasil", 1090, true],
  ["Florianópolis y Camboriú (Parque Beto Carrero)", "florianopolis-y-camboriu", "Brasil", "mundiales", "Playas de Brasil", 769, true],
  ["Gramado y Canela (Ruta Romántica de Brasil)", "gramado-y-canela-brasil", "Brasil", "mundiales", "Sudamérica", 790, true],
  ["Santiago de Chile, Viña del Mar y Valparaíso", "santiago-y-vina-del-mar", "Chile", "mundiales", "Sudamérica", 549, true],
  ["Santiago de Chile y Nieve en Valle Nevado / Farellones", "santiago-y-valle-nevado", "Chile", "mundiales", "Sudamérica", 699, true],
  ["Montevideo y Punta del Este", "montevideo-y-punta-del-este", "Uruguay", "mundiales", "Sudamérica", 699, true],
  ["Quito, Mitad del Mundo y Islas Galápagos", "quito-y-galapagos", "Ecuador", "mundiales", "Sudamérica", 1150, true],
  ["Salar de Uyuni y La Paz", "salar-de-uyuni-bolivia", "Bolivia", "mundiales", "Sudamérica", 649, true],
  ["Cusco, Valle Sagrado y Machu Picchu", "cusco-y-machu-picchu", "Perú", "tours", "Paquetes Nacionales Perú", 329, false],
  ["Cusco, Machu Picchu, Montaña 7 Colores y Laguna Humantay", "cusco-machu-picchu-y-7-colores", "Perú", "tours", "Paquetes Nacionales Perú", 399, false],
  ["Cusco, Puno (Lago Titicaca) y Arequipa (Cañón del Colca)", "ruta-del-sol-cusco-puno-arequipa", "Perú", "tours", "Circuitos Sur del Perú", 499, false],
  ["Arequipa Ciudad Blanca y Cañón del Colca", "arequipa-y-canon-del-colca", "Perú", "tours", "Paquetes Nacionales Perú", 289, false],
  ["Tarapoto, Laguna Azul (Sauce) y Catarata de Ahuashiyacu", "tarapoto-y-laguna-azul", "Perú", "tours", "Selva Peruana", 289, false],
  ["Iquitos, Río Amazonas y Lodge en la Selva", "iquitos-lodge-amazonas", "Perú", "tours", "Selva Peruana", 349, false],
  ["Máncora, Punta Sal y Nado con Tortugas en El Ñuro", "mancora-y-punta-sal", "Perú", "tours", "Playas del Norte Perú", 319, false],
  ["Punta Sal Todo Incluido frente al Mar", "punta-sal-resort-todo-incluido", "Perú", "all-inclusive", "Playas del Norte Perú", 489, false],
  ["Paracas (Islas Ballestas), Ica (Huacachina) y Líneas de Nazca", "paracas-ica-y-huacachina", "Perú", "tours", "Costa Sur del Perú", 229, false],
  ["Huaraz, Laguna 69, Llanganuco y Nevado Pastoruri", "huaraz-y-laguna-69", "Perú", "tours", "Sierra del Perú", 269, false],
  ["Puno e Islas de los Uros y Taquile (Lago Titicaca)", "puno-y-lago-titicaca", "Perú", "tours", "Sur del Perú", 289, false],
  ["Cajamarca, Baños del Inca y Cumbe Mayo", "cajamarca-y-banos-del-inca", "Perú", "tours", "Sierra Norte del Perú", 299, false],
  ["Trujillo, Chan Chan, Huacas del Sol y la Luna y Huanchaco", "trujillo-y-chan-chan", "Perú", "tours", "Ruta Moche Perú", 279, false],
  ["Chiclayo y Museo Tumbas Reales del Señor de Sipán", "chiclayo-y-senor-de-sipan", "Perú", "tours", "Ruta Moche Perú", 279, false],
  ["Chachapoyas, Fortaleza de Kuélap y Catarata de Gocta", "chachapoyas-kuelap-y-gocta", "Perú", "tours", "Nororiente Peruano", 359, false],
  ["Oxapampa, Pozuzo y Villa Rica (Selva Central)", "oxapampa-y-pozuzo", "Perú", "tours", "Selva Central Perú", 269, false],
  ["Ayacucho y Aguas Turquesas de Millpu", "ayacucho-y-millpu", "Perú", "tours", "Sierra del Perú", 279, false],
];

const DURACIONES_8: [string, string, number][] = [
  ["4 Días / 3 Noches", "4-dias-3-noches", 0.85],
  ["5 Días / 4 Noches", "5-dias-4-noches", 0.92],
  ["6 Días / 5 Noches", "6-dias-5-noches", 1.0],
  ["7 Días / 6 Noches", "7-dias-6-noches", 1.06],
  ["8 Días / 7 Noches", "8-dias-7-noches", 1.12],
  ["10 Días / 9 Noches", "10-dias-9-noches", 1.22],
  ["12 Días / 11 Noches", "12-dias-11-noches", 1.32],
  ["15 Días / 14 Noches", "15-dias-14-noches", 1.45],
];

// Circuitos lejanos: duración y precio mínimo por persona con vuelo desde Lima (mercado de Lima, oct-2026).
const DURACIONES_LEJANAS: [string, string, number, number][] = [
  ["10 Días / 9 Noches", "10-dias-9-noches", 1.22, 2490],
  ["12 Días / 11 Noches", "12-dias-11-noches", 1.32, 2790],
  ["15 Días / 14 Noches", "15-dias-14-noches", 1.45, 3290],
  ["17 Días / 16 Noches", "17-dias-16-noches", 1.55, 3590],
  ["19 Días / 18 Noches", "19-dias-18-noches", 1.65, 3890],
];

// Un Eurotrip (3 o más países de Europa) se vende de 17 a 19 días; un recorrido regional de 15 a 17; un solo país
// de Europa de 12 a 15. Turquía, Medio Oriente y Asia sí tienen circuitos de 10 días.
const EUROTRIPS = new Set([
  "madrid-barcelona-y-roma", "madrid-paris-y-roma", "espana-e-italia-completo", "barcelona-costa-azul-y-roma",
  "santuarios-marianos-europa", "espana-francia-suiza-italia",
]);
const EUROPA_REGIONAL = new Set([
  "paris-brujas-y-amsterdam", "londres-paris-y-amsterdam", "praga-viena-y-budapest-imperial", "madrid-y-lisboa-fatima",
]);
const EUROPA_UN_PAIS = new Set([
  "madrid-y-barcelona-tren-ave", "roma-florencia-y-venecia", "gran-tour-de-italia", "madrid-y-andalucia",
  "atenas-e-islas-griegas",
]);
function duracionesLejanas(slug: string): [string, string, number, number][] {
  const desde = EUROTRIPS.has(slug) ? 17 : EUROPA_REGIONAL.has(slug) ? 15 : EUROPA_UN_PAIS.has(slug) ? 12 : 10;
  const hasta = EUROPA_REGIONAL.has(slug) ? 17 : EUROPA_UN_PAIS.has(slug) ? 15 : EUROTRIPS.has(slug) ? 19 : 15;
  return DURACIONES_LEJANAS.filter(([, s]) => {
    const dias = Number(s.split("-")[0]);
    return dias >= desde && dias <= hasta;
  });
}

// Destinos del Perú a los que solo se llega por carretera desde Lima.
const SOLO_POR_CARRETERA = /(oxapampa|paracas|huaraz)/i;

const ENFOQUES_DURACION: [string, string, number][] = [
  ["paquete", "Paquete Vuelo + Hotel", 1.0],
  ["circuito", "Itinerario Guiado Completo", 1.08],
  ["oferta", "Preventa con 50% Inicial", 0.94],
];

// ============================================================================
// BLOQUE 3: HOTELES Y RESORTS CON NOMBRE PROPIO × 12 MODALIDADES
// 120 Hoteles Famosos × 12 Modalidades = 1,440 Landings
// ============================================================================
const HOTELES_FAMOSOS_120: [string, string, string, string, number][] = [
  ["Hard Rock Hotel & Casino Punta Cana", "hard-rock-hotel-punta-cana", "Punta Cana", "República Dominicana", 1390],
  ["Hotel Riu Palace Punta Cana", "hotel-riu-palace-punta-cana", "Punta Cana", "República Dominicana", 1150],
  ["Hotel Riu Bambu Punta Cana", "hotel-riu-bambu-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Hotel Riu Republica (Solo Adultos)", "hotel-riu-republica-punta-cana", "Punta Cana", "República Dominicana", 1090],
  ["Lopesan Costa Bávaro Resort Spa & Casino", "lopesan-costa-bavaro-punta-cana", "Punta Cana", "República Dominicana", 1290],
  ["Barceló Bávaro Palace Punta Cana", "barcelo-bavaro-palace-punta-cana", "Punta Cana", "República Dominicana", 1180],
  ["Barceló Bávaro Beach (Solo Adultos)", "barcelo-bavaro-beach-punta-cana", "Punta Cana", "República Dominicana", 1150],
  ["Iberostar Selection Bávaro Suites", "iberostar-selection-bavaro", "Punta Cana", "República Dominicana", 1190],
  ["Iberostar Waves Dominicana", "iberostar-dominicana-punta-cana", "Punta Cana", "República Dominicana", 1070],
  ["Bahia Principe Grand Punta Cana", "bahia-principe-grand-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Bahia Principe Luxury Ambar", "bahia-principe-luxury-ambar", "Punta Cana", "República Dominicana", 1180],
  ["Bahia Principe Fantasia Punta Cana", "bahia-principe-fantasia-punta-cana", "Punta Cana", "República Dominicana", 1160],
  ["Nickelodeon Hotels & Resorts Punta Cana", "nickelodeon-resort-punta-cana", "Punta Cana", "República Dominicana", 1390],
  ["Royalton Splash Punta Cana Resort", "royalton-splash-punta-cana", "Punta Cana", "República Dominicana", 1090],
  ["Royalton Bávaro Resort & Casino", "royalton-bavaro-punta-cana", "Punta Cana", "República Dominicana", 1180],
  ["Meliá Caribe Beach Resort Punta Cana", "melia-caribe-beach-punta-cana", "Punta Cana", "República Dominicana", 1120],
  ["Paradisus Palma Real Golf & Spa", "paradisus-palma-real-punta-cana", "Punta Cana", "República Dominicana", 1290],
  ["Dreams Royal Beach Punta Cana", "dreams-royal-beach-punta-cana", "Punta Cana", "República Dominicana", 1180],
  ["Dreams Flora Resort & Spa Punta Cana", "dreams-flora-punta-cana", "Punta Cana", "República Dominicana", 1160],
  ["Secrets Royal Beach Punta Cana", "secrets-royal-beach-punta-cana", "Punta Cana", "República Dominicana", 1260],
  ["Majestic Elegance Punta Cana", "majestic-elegance-punta-cana", "Punta Cana", "República Dominicana", 1220],
  ["Majestic Mirage Punta Cana", "majestic-mirage-punta-cana", "Punta Cana", "República Dominicana", 1290],
  ["Occidental Punta Cana Todo Incluido", "occidental-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Occidental Caribe Punta Cana", "occidental-caribe-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Impressive Punta Cana Resort", "impressive-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Vista Sol Punta Cana Beach Resort", "vista-sol-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Sunscape Coco Punta Cana", "sunscape-coco-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Breathless Punta Cana Resort & Spa", "breathless-punta-cana", "Punta Cana", "República Dominicana", 1260],
  ["Hilton La Romana All-Inclusive Resort", "hilton-la-romana-bayahibe", "Bayahíbe", "República Dominicana", 1250],
  ["Dreams Dominicus La Romana Bayahíbe", "dreams-dominicus-la-romana", "Bayahíbe", "República Dominicana", 1180],
  ["Iberostar Selection Hacienda Dominicus", "iberostar-hacienda-dominicus", "Bayahíbe", "República Dominicana", 1170],
  ["Catalonia Bayahíbe Todo Incluido", "catalonia-bayahibe", "Bayahíbe", "República Dominicana", 1090],
  ["Viva Dominicus Beach by Wyndham", "viva-dominicus-beach-bayahibe", "Bayahíbe", "República Dominicana", 1060],
  ["Hotel Xcaret México (All-Fun Inclusive)", "hotel-xcaret-mexico", "Riviera Maya", "México", 1590],
  ["Hotel Xcaret Arte (Solo Adultos)", "hotel-xcaret-arte-riviera-maya", "Riviera Maya", "México", 1650],
  ["Hard Rock Hotel Cancún", "hard-rock-hotel-cancun", "Cancún", "México", 1350],
  ["Hard Rock Hotel Riviera Maya", "hard-rock-hotel-riviera-maya", "Riviera Maya", "México", 1320],
  ["Moon Palace Cancún All Inclusive", "moon-palace-cancun", "Cancún", "México", 1390],
  ["Beach Palace Cancún", "beach-palace-cancun", "Cancún", "México", 1280],
  ["Hotel Riu Palace Las Américas Cancún", "riu-palace-las-americas-cancun", "Cancún", "México", 1180],
  ["Hotel Riu Palace Peninsula Cancún", "riu-palace-peninsula-cancun", "Cancún", "México", 1170],
  ["Hotel Riu Cancún Zona Hotelera", "hotel-riu-cancun", "Cancún", "México", 1080],
  ["Hotel Riu Caribe Cancún", "hotel-riu-caribe-cancun", "Cancún", "México", 1060],
  ["Hotel Riu Dunamar Costa Mujeres", "hotel-riu-dunamar-cancun", "Cancún", "México", 1049],
  ["Hotel Riu Palace México Playaacar", "riu-palace-mexico-riviera-maya", "Riviera Maya", "México", 1160],
  ["Hotel Riu Tequila Playa del Carmen", "hotel-riu-tequila-riviera-maya", "Riviera Maya", "México", 1049],
  ["Iberostar Selection Cancún", "iberostar-selection-cancun", "Cancún", "México", 1180],
  ["Iberostar Selection Paraíso Maya", "iberostar-paraiso-maya", "Riviera Maya", "México", 1190],
  ["Barceló Maya Grand Resort Riviera Maya", "barcelo-maya-grand-resort", "Riviera Maya", "México", 1120],
  ["Barceló Maya Palace Riviera Maya", "barcelo-maya-palace", "Riviera Maya", "México", 1220],
  ["Bahia Principe Grand Coba Riviera Maya", "bahia-principe-grand-coba", "Riviera Maya", "México", 1049],
  ["Bahia Principe Grand Tulum", "bahia-principe-grand-tulum", "Riviera Maya", "México", 1080],
  ["Grand Oasis Cancún Zona Hotelera", "grand-oasis-cancun", "Cancún", "México", 999],
  ["The Pyramid at Grand Oasis Cancún", "the-pyramid-grand-oasis-cancun", "Cancún", "México", 1080],
  ["Krystal Cancún Zona Hotelera", "hotel-krystal-cancun", "Cancún", "México", 999],
  ["Crown Paradise Club Cancún (Ideal Familias)", "crown-paradise-club-cancun", "Cancún", "México", 999],
  ["Fiesta Americana Condesa Cancún", "fiesta-americana-condesa-cancun", "Cancún", "México", 1150],
  ["Sandos Caracol Eco Resort Riviera Maya", "sandos-caracol-eco-resort", "Riviera Maya", "México", 1090],
  ["Sandos Playacar Beach Resort", "sandos-playacar-riviera-maya", "Riviera Maya", "México", 1090],
  ["Nickelodeon Hotels & Resorts Riviera Maya", "nickelodeon-resort-riviera-maya", "Riviera Maya", "México", 1490],
  ["Dreams Natura Resort & Spa Cancún", "dreams-natura-cancun", "Cancún", "México", 1190],
  ["Secrets The Vine Cancún", "secrets-the-vine-cancun", "Cancún", "México", 1340],
  ["Hyatt Ziva Cancún Todo Incluido", "hyatt-ziva-cancun", "Cancún", "México", 1390],
  ["Decameron Isleño San Andrés", "decameron-isleno-san-andres", "San Andrés", "Colombia", 820],
  ["Decameron Aquarium San Andrés", "decameron-aquarium-san-andres", "San Andrés", "Colombia", 789],
  ["Decameron Maryland San Andrés", "decameron-maryland-san-andres", "San Andrés", "Colombia", 769],
  ["Decameron Marazul San Andrés", "decameron-marazul-san-andres", "San Andrés", "Colombia", 759],
  ["Decameron San Luis San Andrés", "decameron-san-luis-san-andres", "San Andrés", "Colombia", 749],
  ["Decameron Los Delfines San Andrés", "decameron-los-delfines-san-andres", "San Andrés", "Colombia", 779],
  ["Hotel Sol Caribe San Andrés Todo Incluido", "sol-caribe-san-andres", "San Andrés", "Colombia", 749],
  ["Hotel GHL Relax Sunrise Beach San Andrés", "ghl-sunrise-san-andres", "San Andrés", "Colombia", 759],
  ["Hotel Casablanca San Andrés", "hotel-casablanca-san-andres", "San Andrés", "Colombia", 779],
  ["Decameron Cartagena Bocagrande", "decameron-cartagena", "Cartagena", "Colombia", 699],
  ["Decameron Barú Beach Resort", "decameron-baru-cartagena", "Cartagena", "Colombia", 769],
  ["Hotel Estelar Playa Manzanillo Cartagena", "estelar-playa-manzanillo-cartagena", "Cartagena", "Colombia", 779],
  ["Hotel Caribe by Faranda Grand Cartagena", "hotel-caribe-cartagena", "Cartagena", "Colombia", 649],
  ["Hotel Capilla del Mar Cartagena", "hotel-capilla-del-mar-cartagena", "Cartagena", "Colombia", 639],
  ["Dreams Karibana Cartagena Golf & Spa", "dreams-karibana-cartagena", "Cartagena", "Colombia", 849],
  ["Hotel Las Américas Cartagena de Indias", "hotel-las-americas-cartagena", "Cartagena", "Colombia", 749],
  ["Irotama Resort Santa Marta", "irotama-resort-santa-marta", "Santa Marta", "Colombia", 699],
  ["Zuana Beach Resort Santa Marta", "zuana-beach-resort-santa-marta", "Santa Marta", "Colombia", 729],
  ["Decameron Galeón Santa Marta", "decameron-galeon-santa-marta", "Santa Marta", "Colombia", 689],
  ["Hotel Riu Palace Aruba Palm Beach", "hotel-riu-palace-aruba", "Aruba", "Aruba", 1290],
  ["Hotel Riu Palace Antillas Aruba", "hotel-riu-palace-antillas-aruba", "Aruba", "Aruba", 1280],
  ["Barceló Aruba Palm Beach Todo Incluido", "barcelo-aruba-palm-beach", "Aruba", "Aruba", 1240],
  ["Holiday Inn Resort Aruba Beach Resort", "holiday-inn-resort-aruba", "Aruba", "Aruba", 1120],
  ["Eagle Aruba Resort & Casino", "eagle-aruba-resort", "Aruba", "Aruba", 1090],
  ["Sunscape Curacao Resort Spa & Casino", "sunscape-curazao-resort", "Curazao", "Curazao", 1120],
  ["Dreams Curacao Resort Spa & Casino", "dreams-curazao-resort", "Curazao", "Curazao", 1190],
  ["Mangrove Beach Corendon Curacao Hilton", "corendon-hilton-curazao", "Curazao", "Curazao", 1180],
  ["Kunuku Aqua Resort Curazao", "kunuku-aqua-resort-curazao", "Curazao", "Curazao", 1090],
  ["Hotel Riu Playa Blanca Panamá", "hotel-riu-playa-blanca-panama", "Playa Blanca", "Panamá", 799],
  ["Decameron Panamá Royal Beach", "decameron-panama-playa-blanca", "Playa Blanca", "Panamá", 789],
  ["Dreams Playa Bonita Panamá", "dreams-playa-bonita-panama", "Ciudad de Panamá", "Panamá", 849],
  ["Hotel Riu Plaza Panamá", "hotel-riu-plaza-panama", "Ciudad de Panamá", "Panamá", 699],
  ["Hotel Riu Montego Bay Jamaica", "hotel-riu-montego-bay-jamaica", "Montego Bay", "Jamaica", 1190],
  ["Hotel Riu Ocho Ríos Jamaica", "hotel-riu-ocho-rios-jamaica", "Ocho Ríos", "Jamaica", 1180],
  ["Iberostar Selection Rose Hall Suites Jamaica", "iberostar-rose-hall-jamaica", "Montego Bay", "Jamaica", 1260],
  ["Meliá Internacional Varadero", "melia-internacional-varadero", "Varadero", "Cuba", 1090],
  ["Iberostar Selection Varadero", "iberostar-selection-varadero", "Varadero", "Cuba", 1120],
  ["Royalton Hicacos Varadero Resort", "royalton-hicacos-varadero", "Varadero", "Cuba", 1150],
  ["Hotel Riu Plaza España (Edificio España Gran Vía)", "hotel-riu-plaza-espana-madrid", "Madrid", "España", 1390],
  ["Hotel Barceló Torre de Madrid", "hotel-barcelo-torre-de-madrid", "Madrid", "España", 1420],
  ["Hotel Príncipe Pío Madrid Centro", "hotel-principe-pio-madrid", "Madrid", "España", 1350],
  ["Hotel Agumar Atocha Madrid", "hotel-agumar-madrid", "Madrid", "España", 1350],
  ["Hotel Barceló Sants Barcelona", "hotel-barcelo-sants-barcelona", "Barcelona", "España", 1380],
  ["W Barcelona (Hotel Vela Barceloneta)", "hotel-w-barcelona", "Barcelona", "España", 1650],
  ["Hotel Catalonia Plaza Cataluña Barcelona", "catalonia-plaza-cataluna-barcelona", "Barcelona", "España", 1420],
  ["Hotel Quirinale Via Nazionale Roma", "hotel-quirinale-roma", "Roma", "Italia", 1390],
  ["Hotel Riu Plaza Manhattan Times Square", "hotel-riu-plaza-times-square-ny", "Nueva York", "Estados Unidos", 1290],
  ["Disney's All-Star Movies Resort Orlando", "disney-all-star-movies-orlando", "Orlando", "Estados Unidos", 1250],
  ["Universal's Endless Summer Resort Orlando", "universal-endless-summer-orlando", "Orlando", "Estados Unidos", 1220],
  ["Windsor Leme Hotel Copacabana", "windsor-leme-copacabana-rio", "Río de Janeiro", "Brasil", 749],
  ["Royal Decameron Punta Sal Perú", "royal-decameron-punta-sal", "Punta Sal", "Perú", 489],
  ["Aranwa Paracas Resort & Spa", "aranwa-paracas-resort", "Paracas", "Perú", 299],
  ["Hotel Paracas a Luxury Collection Resort", "hotel-paracas-luxury-collection", "Paracas", "Perú", 369],
  ["Tambo del Inka Valle Sagrado Cusco", "tambo-del-inka-valle-sagrado", "Cusco", "Perú", 499],
  ["Palacio del Inka Cusco", "palacio-del-inka-cusco", "Cusco", "Perú", 469],
  ["Costa del Sol Wyndham Cusco", "costa-del-sol-wyndham-cusco", "Cusco", "Perú", 349],
  ["Sauce Resort Laguna Azul Tarapoto", "sauce-resort-laguna-azul-tarapoto", "Tarapoto", "Perú", 319],
];

const MODALIDADES_HOTELES_12: [string, string, number][] = [
  ["paquete-todo-incluido", "Paquete Vuelo + Hotel Todo Incluido", 1.0],
  ["preventa-50-inicial", "Preventa 2026 (Separa con 50%)", 0.93],
  ["viaje-familiar-ninos", "Paquete Familiar con Niños", 0.96],
  ["luna-de-miel-parejas", "Escapada Romántica y Luna de Miel", 1.05],
  ["escapada-5-dias-4-noches", "Programa 5 Días / 4 Noches", 0.94],
  ["vacaciones-7-dias-6-noches", "Programa 7 Días / 6 Noches", 1.12],
  ["vuelo-mas-hotel-traslados", "Vuelo + Resort + Traslados Privados", 1.04],
  ["promocion-fiestas-patrias", "Salida Especial Fiestas Patrias", 1.14],
  ["promocion-ano-nuevo", "Salida Especial Fin de Año", 1.18],
  ["viaje-de-amigos-grupos", "Tarifa Especial Grupos y Amigos", 0.95],
  ["temporada-baja-oferta", "Oferta Especial Temporada Baja", 0.9],
  ["reserva-en-cuotas", "Reserva Congelada en Cuotas Mensuales", 1.0],
];

// ============================================================================
// BLOQUE 4: 32 MODALIDADES REALES DESDE AEROPUERTO JORGE CHÁVEZ (LIM) × 50 DESTINOS
// 32 Modalidades × 50 Destinos = 1,600 Landings Comerciales
// ============================================================================
const MODALIDADES_JORGE_CHAVEZ_32: [string, string, string, number][] = [
  ["Vuelo + Hotel Confirmado", "vuelo-mas-hotel-jorge-chavez", "saliendo desde el Aeropuerto Internacional Jorge Chávez (LIM) con reserva PNR y hotel seleccionado", 0],
  ["Preventa con 50% de Inicial", "preventa-50-inicial-desde-lima", "congelando hoy tu tarifa con el 50% de inicial y saliendo desde el Aeropuerto Jorge Chávez (LIM)", -30],
  ["Programa Todo Organizado con Traslados", "todo-organizado-con-traslados-lima", "incluyendo vuelos desde Lima (LIM), traslados aeropuerto-hotel-aeropuerto y alojamiento", 25],
  ["Paquete con 2 Maletas de 23 kg", "con-2-maletas-23kg-desde-lima", "con franquicia ampliada de 2 maletas de 23 kg en bodega saliendo de Lima (LIM)", 65],
  ["Viaje Familiar (Adultos + Niños)", "viaje-familiar-desde-lima", "con asientos contiguos garantizados y hoteles familiares saliendo del Aeropuerto Jorge Chávez (LIM)", -15],
  ["Escapada para Parejas y Aniversarios", "escapada-parejas-desde-lima", "con habitación matrimonial superior y atención preferencial saliendo desde Lima (LIM)", 20],
  ["Especial Luna de Miel", "luna-de-miel-desde-lima", "con atenciones románticas, hotel seleccionado y vuelos confirmados desde el Jorge Chávez (LIM)", 45],
  ["Viaje para Adultos Mayores con Asistencia", "adultos-mayores-asistencia-lima", "con gestión de asistencia en aeropuerto (SSR) y traslados seguros saliendo de Lima (LIM)", 0],
  ["Tarifa Grupal y Viaje de Amigos", "tarifa-grupos-amigos-desde-lima", "con descuento especial para grupos desde 4 pasajeros saliendo del Aeropuerto Jorge Chávez (LIM)", -25],
  ["Programa con Tours y Excursiones en Español", "con-tours-en-espanol-desde-lima", "incluyendo visitas guiadas en español a los atractivos principales y vuelos desde Lima (LIM)", 40],
  ["Categoría Hotel 4★ Céntrico", "hotel-4-estrellas-desde-lima", "con alojamiento en hoteles 4 estrellas de ubicación estratégica y salida desde Lima (LIM)", 55],
  ["Categoría Superior 5★ / VIP", "categoria-5-estrellas-vip-lima", "con hotelería de lujo, traslados privados y vuelos desde el Aeropuerto Jorge Chávez (LIM)", 120],
  ["Reserva en Cuotas Programadas", "en-cuotas-programadas-desde-lima", "abonando el 50% al reservar y completando el saldo en cuotas antes de volar desde Lima (LIM)", 0],
  ["Con Seguro Médico Internacional Incluido", "con-seguro-medico-desde-lima", "con póliza de asistencia médica internacional sin deducible y vuelos desde Lima (LIM)", 15],
  ["Primer Viaje Internacional Asesorado", "primer-viaje-asesorado-desde-lima", "con preparación completa de carpeta de viaje, check-in y salida desde el Jorge Chávez (LIM)", 0],
  ["Salidas Vacaciones de Verano (Enero y Febrero)", "vacaciones-verano-desde-lima", "aprovechando la temporada de vacaciones de verano con vuelos confirmados desde Lima (LIM)", 30],
  ["Salidas Especiales Semana Santa", "semana-santa-desde-lima", "con cupos aéreos y hoteleros garantizados para Semana Santa desde el Jorge Chávez (LIM)", 40],
  ["Salidas Vacaciones de Mayo", "vacaciones-mayo-desde-lima", "ideal para las vacaciones escolares de mayo saliendo desde el Aeropuerto Jorge Chávez (LIM)", 0],
  ["Salidas Confirmadas Junio y Julio", "temporada-junio-julio-desde-lima", "con itinerarios verificados para mitad de año saliendo desde Lima (LIM)", 35],
  ["Especial Fiestas Patrias (28 de Julio)", "fiestas-patrias-desde-lima", "para viajar en el feriado largo de Fiestas Patrias desde el Aeropuerto Jorge Chávez (LIM)", 60],
  ["Salidas de Agosto y Septiembre", "temporada-agosto-septiembre-lima", "con excelente clima y tarifas competitivas saliendo desde Lima (LIM)", 10],
  ["Salidas Vacaciones de Octubre", "vacaciones-octubre-desde-lima", "aprovechando el feriado y vacaciones escolares de octubre desde el Jorge Chávez (LIM)", 0],
  ["Oferta Temporada Baja Noviembre", "temporada-baja-noviembre-lima", "con las tarifas más económicas del año saliendo desde el Aeropuerto Jorge Chávez (LIM)", -40],
  ["Especial Navidad y Año Nuevo", "navidad-y-ano-nuevo-desde-lima", "para celebrar fin de año con vuelos y hotel garantizados desde Lima (LIM)", 75],
  ["Paquete Corto 5 Días / 4 Noches", "programa-5-dias-4-noches-lima", "en formato práctico de 5 días y 4 noches saliendo desde el Aeropuerto Jorge Chávez (LIM)", -35],
  ["Paquete Clásico 7 Días / 6 Noches", "programa-7-dias-6-noches-lima", "en programa completo de una semana saliendo desde el Aeropuerto Jorge Chávez (LIM)", 20],
  ["Gran Viaje 10 Días / 9 Noches", "programa-10-dias-9-noches-lima", "para recorrer el destino con total tranquilidad saliendo desde Lima (LIM)", 80],
  ["Programa Extendido 15 Días", "programa-15-dias-desde-lima", "de dos semanas completas con asesoría integral saliendo desde el Jorge Chávez (LIM)", 140],
  ["Tarifa Flexible con Cambios Permitidos", "tarifa-flexible-cambios-lima", "con opción de reprogramación de fecha y salida desde el Aeropuerto Jorge Chávez (LIM)", 45],
  ["Emisión Inmediata Código PNR + Voucher", "emision-inmediata-pnr-lima", "con entrega en el día de tu código PNR de aerolínea y voucher hotelero en Lima", 0],
  ["Con Check-in y Asientos Gestionados", "con-checkin-y-asientos-lima", "incluyendo check-in realizado por tu asesor y tarjetas de embarque listas desde Lima (LIM)", 0],
  ["Conexión Coordinada desde Provincias vía Lima", "conexion-provincias-via-jorge-chavez", "conectando desde tu ciudad hacia el Aeropuerto Internacional Jorge Chávez (LIM)", 45],
];

const DESTINOS_ESTRELLA_50: [string, string, string, LandingComercialSEO["cluster"], number, boolean][] = [
  ["Madrid", "madrid", "España", "mundiales", 1090, true],
  ["Barcelona", "barcelona", "España", "mundiales", 1120, true],
  ["Sevilla y Andalucía", "sevilla", "España", "mundiales", 1150, true],
  ["Valencia", "valencia", "España", "mundiales", 1140, true],
  ["Roma y El Vaticano", "roma", "Italia", "mundiales", 1150, true],
  ["Venecia", "venecia", "Italia", "mundiales", 1180, true],
  ["Florencia y Toscana", "florencia", "Italia", "mundiales", 1175, true],
  ["Milán", "milan", "Italia", "mundiales", 1150, true],
  ["París", "paris", "Francia", "mundiales", 1190, true],
  ["Zúrich y Alpes Suizos", "suiza", "Suiza", "mundiales", 1390, true],
  ["Londres", "londres", "Reino Unido", "mundiales", 1290, true],
  ["Lisboa y Fátima", "lisboa-fatima", "Portugal", "mundiales", 1180, true],
  ["Ámsterdam", "amsterdam", "Países Bajos", "mundiales", 1190, true],
  ["Estambul y Capadocia", "estambul-capadocia", "Turquía", "mundiales", 1690, true],
  ["Dubái", "dubai", "Emiratos Árabes", "mundiales", 1790, true],
  ["Tierra Santa (Jerusalén)", "tierra-santa", "Israel", "religiosos-eventos", 2090, true],
  ["Punta Cana Todo Incluido", "punta-cana", "República Dominicana", "all-inclusive", 1049, true],
  ["Bayahíbe y La Romana", "bayahibe", "República Dominicana", "all-inclusive", 1090, true],
  ["Cancún Todo Incluido", "cancun", "México", "all-inclusive", 999, true],
  ["Riviera Maya y Xcaret", "riviera-maya", "México", "all-inclusive", 1049, true],
  ["Ciudad de México y Guadalupe", "ciudad-de-mexico", "México", "mundiales", 799, true],
  ["San Andrés Todo Incluido", "san-andres", "Colombia", "all-inclusive", 749, true],
  ["Cartagena de Indias", "cartagena", "Colombia", "all-inclusive", 599, true],
  ["Medellín y Guatapé", "medellin", "Colombia", "mundiales", 589, true],
  ["Bogotá", "bogota", "Colombia", "mundiales", 549, true],
  ["Santa Marta", "santa-marta", "Colombia", "all-inclusive", 649, true],
  ["Ciudad de Panamá y Playa Blanca", "panama", "Panamá", "all-inclusive", 699, true],
  ["Aruba Todo Incluido", "aruba", "Aruba", "all-inclusive", 1090, true],
  ["Curazao Todo Incluido", "curazao", "Curazao", "all-inclusive", 1090, true],
  ["Varadero y La Habana", "varadero", "Cuba", "all-inclusive", 1090, true],
  ["Montego Bay (Jamaica)", "jamaica", "Jamaica", "all-inclusive", 1190, true],
  ["San José de Costa Rica", "costa-rica", "Costa Rica", "mundiales", 849, true],
  ["Miami", "miami", "Estados Unidos", "mundiales", 890, true],
  ["Orlando Parques Disney", "orlando-disney", "Estados Unidos", "mundiales", 1190, true],
  ["Nueva York", "nueva-york", "Estados Unidos", "mundiales", 1090, true],
  ["Buenos Aires", "buenos-aires", "Argentina", "mundiales", 699, true],
  ["San Carlos de Bariloche", "bariloche", "Argentina", "mundiales", 890, true],
  ["Río de Janeiro y Búzios", "rio-de-janeiro", "Brasil", "mundiales", 749, true],
  ["Cataratas del Iguazú", "iguazu", "Brasil", "mundiales", 729, true],
  ["Santiago de Chile y Viña del Mar", "santiago-de-chile", "Chile", "mundiales", 549, true],
  ["Cusco y Machu Picchu", "cusco-machu-picchu", "Perú", "tours", 329, false],
  ["Arequipa y Cañón del Colca", "arequipa-colca", "Perú", "tours", 289, false],
  ["Tarapoto y Laguna Azul", "tarapoto-sauce", "Perú", "tours", 289, false],
  ["Iquitos y Río Amazonas", "iquitos-amazonas", "Perú", "tours", 349, false],
  ["Máncora y Punta Sal", "mancora-punta-sal", "Perú", "tours", 319, false],
  ["Paracas, Ica y Huacachina", "paracas-huacachina", "Perú", "tours", 229, false],
  ["Huaraz y Laguna 69", "huaraz-laguna-69", "Perú", "tours", 269, false],
  ["Puno y Lago Titicaca", "puno-titicaca", "Perú", "tours", 289, false],
  ["Cajamarca y Baños del Inca", "cajamarca-inca", "Perú", "tours", 299, false],
  ["Chachapoyas y Kuélap", "chachapoyas-kuelap", "Perú", "tours", 359, false],
];

// ============================================================================
// BLOQUE 5: CRUCEROS, PARQUES, EVENTOS, VISAS, COLEGIOS Y CORPORATIVOS
// 80 Programas Especiales × 14 Variantes Comerciales = 1,120 Landings
// ============================================================================
const PROGRAMAS_ESPECIALES_80: [string, string, string, LandingComercialSEO["cluster"], string, number, boolean][] = [
  ["Crucero Caribe sin Visa desde Panamá (Colón)", "crucero-caribe-sin-visa-panama", "Panamá", "cruceros", "Cruceros sin Visa EE. UU.", 1090, true],
  ["Crucero Caribe Sur desde Cartagena (Aruba, Curazao y Bonaire)", "crucero-caribe-desde-cartagena", "Colombia", "cruceros", "Cruceros sin Visa EE. UU.", 1090, true],
  ["Crucero MSC por el Mediterráneo desde Barcelona", "crucero-msc-mediterraneo-barcelona", "España", "cruceros", "Cruceros por Europa", 1490, true],
  ["Crucero Costa por Italia, Francia y España desde Roma", "crucero-mediterraneo-desde-roma", "Italia", "cruceros", "Cruceros por Europa", 1490, true],
  ["Crucero Islas Griegas (Santorini, Mykonos y Creta)", "crucero-islas-griegas-atenas", "Grecia", "cruceros", "Cruceros por Europa", 1590, true],
  ["Crucero Royal Caribbean Icon of the Seas desde Miami", "crucero-icon-of-the-seas-miami", "Estados Unidos", "cruceros", "Cruceros Royal Caribbean", 1490, true],
  ["Crucero Bahamas y Perfect Day at CocoCay desde Orlando", "crucero-bahamas-cococay", "Estados Unidos", "cruceros", "Cruceros Familiares", 890, true],
  ["Crucero Norwegian por el Caribe Occidental (Cozumel y Roatán)", "crucero-norwegian-caribe", "Estados Unidos", "cruceros", "Cruceros por el Caribe", 1290, true],
  ["Crucero por los Fiordos Noruegos desde Europa", "crucero-fiordos-noruegos", "Europa", "cruceros", "Cruceros por Europa", 1690, true],
  ["Crucero por Brasil, Uruguay y Argentina (Sudamérica)", "crucero-brasil-uruguay-argentina", "Brasil", "cruceros", "Cruceros Sudamérica", 990, true],
  ["Crucero Fluvial de Lujo por el Río Amazonas en Iquitos", "crucero-rio-amazonas-iquitos", "Perú", "cruceros", "Cruceros en Perú", 790, false],
  ["Crucero por Dubái y Golfo Pérsico", "crucero-dubai-golfo-persico", "Emiratos Árabes", "cruceros", "Cruceros Internacionales", 1490, true],
  ["Paquete Walt Disney World Orlando (4 Parques Mágicos)", "paquete-walt-disney-world-orlando", "Estados Unidos", "mundiales", "Parques Temáticos", 1390, true],
  ["Paquete Universal Orlando y Epic Universe", "paquete-universal-epic-universe-orlando", "Estados Unidos", "mundiales", "Parques Temáticos", 1350, true],
  ["Paquete Disneyland París y Torre Eiffel", "paquete-disneyland-paris", "Francia", "mundiales", "Viajes Familiares Europa", 1490, true],
  ["Feria de Cantón en Guangzhou (China) para Importadores Peruanos", "feria-de-canton-china-importadores", "China", "empresas", "Ferias y Negocios", 2290, true],
  ["Viaje de Negocios e Importación a Yiwu y Shanghái (China)", "viaje-negocios-yiwu-shanghai", "China", "empresas", "Ferias y Negocios", 2350, true],
  ["Viaje de Compras Mayoristas en Zona Libre de Colón (Panamá)", "viaje-compras-zona-libre-panama", "Panamá", "empresas", "Ferias y Negocios", 749, true],
  ["Misión Comercial y Corporativa a Madrid y Barcelona", "mision-comercial-espana", "España", "empresas", "Viajes Corporativos", 1390, true],
  ["Misión Empresarial a Milán y Ferias de Italia", "mision-empresarial-milan-italia", "Italia", "empresas", "Viajes Corporativos", 1450, true],
  ["Viaje de Incentivos para Empresas en Punta Cana Todo Incluido", "viaje-incentivos-empresas-punta-cana", "República Dominicana", "empresas", "Viajes Corporativos", 1049, true],
  ["Viaje de Incentivos para Empresas en Cancún Todo Incluido", "viaje-incentivos-empresas-cancun", "México", "empresas", "Viajes Corporativos", 999, true],
  ["Viaje de Incentivos para Empresas en Cartagena de Indias", "viaje-incentivos-empresas-cartagena", "Colombia", "empresas", "Viajes Corporativos", 599, true],
  ["Viaje de Incentivos para Empresas en Cusco y Valle Sagrado", "viaje-incentivos-empresas-cusco", "Perú", "empresas", "Viajes Corporativos", 329, false],
  ["Convención Corporativa en Paracas Todo Organizado", "convencion-corporativa-paracas", "Perú", "empresas", "Viajes Corporativos", 229, false],
  ["Carpeta Migratoria Completa para Viajar a Madrid", "carpeta-migratoria-madrid-espana", "España", "visas-seguros", "Asesoría Migratoria", 1090, true],
  ["Carpeta Migratoria Completa para Viajar a Barcelona", "carpeta-migratoria-barcelona-espana", "España", "visas-seguros", "Asesoría Migratoria", 1120, true],
  ["Carpeta Migratoria Completa para Viajar a Roma y Milán (Italia)", "carpeta-migratoria-italia-roma-milan", "Italia", "visas-seguros", "Asesoría Migratoria", 1150, true],
  ["Seguro Médico Schengen 30.000€ Oficial para España e Italia", "seguro-schengen-espana-e-italia", "España", "visas-seguros", "Seguros de Viaje", 45, true],
  ["Reserva de Vuelo y Hotel Verificable con Código PNR para Europa", "reserva-pnr-verificable-europa", "Europa", "visas-seguros", "Asesoría Migratoria", 55, true],
  ["Asesoría de Visa Americana B1/B2 (Formulario DS-160 y Entrevista)", "asesoria-visa-americana-b1-b2-lima", "Estados Unidos", "visas-seguros", "Trámite de Visas", 65, true],
  ["Asesoría de Visa Canadiense de Turismo desde Perú", "asesoria-visa-canadiense-turismo", "Canadá", "visas-seguros", "Trámite de Visas", 85, true],
  ["Asesoría de Visa Mexicana para Peruanos en Lima", "asesoria-visa-mexicana-peruanos", "México", "visas-seguros", "Trámite de Visas", 55, true],
  ["Asesoría de Visa China de Negocios y Turismo (Feria de Cantón)", "asesoria-visa-china-negocios-turismo", "China", "visas-seguros", "Trámite de Visas", 95, true],
  ["Asesoría de Visa Schengen de Larga Estadía y Estudios", "asesoria-visa-estudios-espana", "España", "visas-seguros", "Trámite de Visas", 95, true],
  ["Viaje de Promoción Escolar de Secundaria a Cusco y Machu Picchu", "viaje-promocion-secundaria-cusco", "Perú", "colegios-deportes", "Viajes de Promoción Escolar", 369, false],
  ["Viaje de Promoción Escolar a Punta Cana Todo Incluido", "viaje-promocion-escolar-punta-cana", "República Dominicana", "colegios-deportes", "Viajes de Promoción Escolar", 1090, true],
  ["Viaje de Promoción Escolar a Cancún y Parque Xcaret", "viaje-promocion-escolar-cancun", "México", "colegios-deportes", "Viajes de Promoción Escolar", 1050, true],
  ["Viaje de Promoción Escolar a Cartagena y San Andrés", "viaje-promocion-escolar-cartagena-san-andres", "Colombia", "colegios-deportes", "Viajes de Promoción Escolar", 649, true],
  ["Viaje de Promoción Escolar a Tarapoto y Sauce", "viaje-promocion-escolar-tarapoto", "Perú", "colegios-deportes", "Viajes de Promoción Escolar", 319, false],
  ["Viaje de Promoción Escolar a Punta Sal y Máncora", "viaje-promocion-escolar-punta-sal", "Perú", "colegios-deportes", "Viajes de Promoción Escolar", 489, false],
  ["Viaje de Promoción Escolar a Arequipa y Cañón del Colca", "viaje-promocion-escolar-arequipa", "Perú", "colegios-deportes", "Viajes de Promoción Escolar", 319, false],
  ["Viaje de Graduación Universitaria a Europa (Madrid, París y Roma)", "viaje-graduacion-universitaria-europa", "Europa", "colegios-deportes", "Viajes Universitarios", 1690, true],
  ["Viaje para Delegaciones Deportivas y Torneos Internacionales", "viaje-delegaciones-deportivas-torneos", "Sudamérica", "colegios-deportes", "Delegaciones Deportivas", 599, true],
  ["Programa de Quinceañeras a Disney y Universal Orlando", "programa-quinceaneras-disney-orlando", "Estados Unidos", "religiosos-eventos", "Viajes de Quinceañeras", 1790, true],
  ["Programa de Quinceañeras a Europa (Madrid, Barcelona, París y Roma)", "programa-quinceaneras-europa-madrid-paris-roma", "Europa", "religiosos-eventos", "Viajes de Quinceañeras", 2290, true],
  ["Programa de Quinceañeras a Punta Cana y Crucero Caribe", "programa-quinceaneras-punta-cana-crucero", "República Dominicana", "religiosos-eventos", "Viajes de Quinceañeras", 1290, true],
  ["Programa de Quinceañeras a Cancún y Riviera Maya", "programa-quinceaneras-cancun-riviera-maya", "México", "religiosos-eventos", "Viajes de Quinceañeras", 1190, true],
  ["Luna de Miel en Venecia, Florencia, Toscana y Roma", "luna-de-miel-venecia-florencia-roma", "Italia", "religiosos-eventos", "Lunas de Miel", 1690, true],
  ["Luna de Miel en Madrid, Barcelona y París", "luna-de-miel-madrid-barcelona-paris", "España", "religiosos-eventos", "Lunas de Miel", 1650, true],
  ["Luna de Miel en Santorini, Mykonos y Atenas (Grecia)", "luna-de-miel-santorini-grecia", "Grecia", "religiosos-eventos", "Lunas de Miel", 1890, true],
  ["Luna de Miel en Punta Cana Resort Solo Adultos", "luna-de-miel-punta-cana-solo-adultos", "República Dominicana", "religiosos-eventos", "Lunas de Miel", 1090, true],
  ["Luna de Miel en Cancún y Riviera Maya Todo Incluido", "luna-de-miel-cancun-riviera-maya", "México", "religiosos-eventos", "Lunas de Miel", 1090, true],
  ["Luna de Miel en Aruba y Curazao Playas Turquesas", "luna-de-miel-aruba-y-curazao", "Aruba", "religiosos-eventos", "Lunas de Miel", 1290, true],
  ["Boda Simbólica y Renovación de Votos frente al Mar en Punta Cana", "boda-en-la-playa-punta-cana", "República Dominicana", "religiosos-eventos", "Bodas de Destino", 1190, true],
  ["Peregrinación al Jubileo en Roma y El Vaticano desde Lima", "peregrinacion-jubileo-roma-vaticano", "Italia", "religiosos-eventos", "Peregrinaciones", 1690, true],
  ["Peregrinación a Fátima (Portugal), Lourdes (Francia) y Madrid", "peregrinacion-fatima-lourdes-madrid", "España", "religiosos-eventos", "Peregrinaciones", 1790, true],
  ["Peregrinación a Medjugorje, Roma y Asís desde Perú", "peregrinacion-medjugorje-roma-asis", "Italia", "religiosos-eventos", "Peregrinaciones", 1890, true],
  ["Peregrinación a la Basílica de la Virgen de Guadalupe en México", "peregrinacion-virgen-de-guadalupe-mexico", "México", "religiosos-eventos", "Peregrinaciones", 999, true],
  ["Peregrinación a Tierra Santa (Jerusalén, Nazaret y Mar de Galilea)", "peregrinacion-tierra-santa-jerusalen", "Israel", "religiosos-eventos", "Peregrinaciones", 2090, true],
  ["Viaje para Adultos Mayores con Acompañamiento a España e Italia", "viaje-adultos-mayores-espana-italia", "España", "mundiales", "Viajes Senior con Acompañamiento", 1490, true],
  ["Viaje para Adultos Mayores a Punta Cana Todo Incluido", "viaje-adultos-mayores-punta-cana", "República Dominicana", "all-inclusive", "Viajes Senior", 1049, true],
  ["Viaje para Adultos Mayores a Cusco y Valle Sagrado a Ritmo Suave", "viaje-adultos-mayores-cusco-suave", "Perú", "tours", "Viajes Senior Perú", 349, false],
  ["Tour Gastronómico y de Vinos por Madrid, Rioja y Barcelona", "tour-gastronomico-madrid-barcelona", "España", "mundiales", "Rutas Gastronómicas", 1490, true],
  ["Tour Gastronómico por Roma, Florencia, Bolonia y Toscana", "tour-gastronomico-italia-toscana", "Italia", "mundiales", "Rutas Gastronómicas", 1550, true],
  ["Tour de Compras en Madrid (Las Rozas Village) y Barcelona (La Roca)", "tour-compras-madrid-y-barcelona", "España", "mundiales", "Turismo de Compras", 1390, true],
  ["Tour de Moda y Outlets en Milán y Florencia", "tour-compras-milan-italia", "Italia", "mundiales", "Turismo de Compras", 1450, true],
  ["Viaje de Año Nuevo en Río de Janeiro (Reveillon Copacabana)", "ano-nuevo-reveillon-rio-de-janeiro", "Brasil", "mundiales", "Especiales Fin de Año", 990, true],
  ["Viaje de Año Nuevo en Times Square Nueva York", "ano-nuevo-times-square-nueva-york", "Estados Unidos", "mundiales", "Especiales Fin de Año", 1390, true],
  ["Viaje de Año Nuevo en Puerta del Sol Madrid", "ano-nuevo-puerta-del-sol-madrid", "España", "mundiales", "Especiales Fin de Año", 1390, true],
  ["Viaje a la Fiesta del Inti Raymi en Cusco (Junio)", "fiesta-inti-raymi-cusco-junio", "Perú", "tours", "Festividades del Perú", 369, false],
  ["Viaje a la Festividad de la Virgen de la Candelaria en Puno", "virgen-de-la-candelaria-puno", "Perú", "tours", "Festividades del Perú", 319, false],
  ["Avistamiento de Ballenas Jorobadas en Máncora y Punta Sal", "avistamiento-de-ballenas-mancora-punta-sal", "Perú", "tours", "Naturaleza en Perú", 349, false],
];

const VARIANTES_ESPECIALES_14: [string, string, number][] = [
  ["programa-oficial", "Programa Oficial Completo", 1.0],
  ["preventa-50-inicial", "Preventa con 50% de Inicial", 0.93],
  ["salida-desde-lima", "Salidas Confirmadas desde Lima", 1.0],
  ["todo-organizado", "Modalidad Todo Organizado", 1.05],
  ["tarifa-promocional", "Tarifa Promocional en Dólares", 0.95],
  ["paquete-familiar", "Opción Familiar y Parejas", 0.98],
  ["edicion-vip", "Categoría Superior VIP", 1.15],
  ["grupos-y-delegaciones", "Tarifa Especial para Grupos", 0.94],
  ["reserva-en-cuotas", "Reserva en Cuotas sin Intereses", 1.0],
  ["temporada-2026", "Salidas Programadas 2026", 1.0],
  ["temporada-2027", "Preventa Anticipada 2027", 0.92],
  ["atencion-los-olivos", "Asesoría en Sede Los Olivos", 1.0],
  ["cotizacion-inmediata", "Cotización Inmediata WhatsApp", 1.0],
  ["con-seguro-incluido", "Incluye Seguro de Viaje Internacional", 1.03],
];

// ============================================================================
// GENERACIÓN DEL ÍNDICE DE 8,000 LANDINGS Y MAPA DE BÚSQUEDA EN O(1)
// ============================================================================
function generarIndiceExpansion(): ResumenLandingExpansion[] {
  const lista: ResumenLandingExpansion[] = [];

  // 1. Bloque 1: 40 Destinos Europeos × 16 Temporadas × 3 Modalidades = 1,920
  for (const [ciudad, slugCiudad, pais, precioBase, atractivos] of DESTINOS_EUROPA_DETALLE) {
    for (const [nombreMes, slugMes, factorMes, notaClima] of TEMPORADAS_EUROPA) {
      for (const [prefijoMod, nombreMod, factorMod, descMod] of MODALIDADES_EUROPA) {
        const slug = `${prefijoMod}-${slugCiudad}-en-${slugMes}`;
        const precio = Math.round((precioBase * factorMes * factorMod) / 10) * 10;
        const titulo = `${nombreMod}: ${ciudad} (${pais}) en ${nombreMes}`;
        lista.push({
          slug,
          cluster: "mundiales",
          clusterNombre: `Viajes a ${pais} y Europa`,
          titulo,
          destinoOPais: pais,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            construirObjetoLanding({
              slug,
              cluster: "mundiales",
              clusterNombre: `Viajes a ${pais} y Europa`,
              badge: `${pais} en ${nombreMes} · Separa con 50%`,
              banderas: ["Perú", pais],
              tituloHero: `Viajes a ${ciudad} en ${nombreMes}:`,
              tituloDestacado: `${nombreMod} Desde $${precio}`,
              descripcionHero: `${descMod}. Recorre ${atractivos}. ${notaClima}.`,
              negritaHero: `Salidas desde Lima con código PNR verificable y seguro médico Schengen 30.000€.`,
              destinoOPais: pais,
              precioBase: precio,
              etiquetaVitrina: `${ciudad} en ${nombreMes} (${nombreMod})`,
              duracionOServicio: `Temporada ${nombreMes} · ${pais}`,
              checksBase: [
                `Boleto aéreo Lima – ${ciudad} ida y vuelta con equipaje`,
                `Alojamiento seleccionado cerca de ${atractivos.split(",")[0]}`,
                "Seguro médico internacional Schengen 30.000€ y traslados",
              ],
              checksPlus: [
                `Excursiones y visitas guiadas en español por ${ciudad}`,
                "Asesoría integral de requisitos y carpeta de viaje",
                "Facilidad de pago: separa con el 50% y abona en cuotas",
              ],
              checksVip: [
                `Hotelería 4★ Superior en el centro de ${ciudad}`,
                "Traslados privados aeropuerto – hotel – aeropuerto",
                "Atención VIP 24/7 en Lima Norte (RUC 20614914239)",
              ],
              esInternacional: true,
              keywords: [
                `viajar a ${ciudad.toLowerCase()} en ${nombreMes.toLowerCase()}`,
                `paquetes a ${ciudad.toLowerCase()} ${nombreMes.toLowerCase()} desde lima`,
                `circuitos por ${pais.toLowerCase()} en ${nombreMes.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: `¿Cómo es viajar a ${ciudad} (${pais}) en ${nombreMes}?`,
                  a: `${notaClima}. En este programa visitarás ${atractivos} con vuelos confirmados desde Lima y alojamiento garantizado.`,
                },
                {
                  q: `¿Qué incluye la modalidad "${nombreMod}" para ${ciudad} en ${nombreMes}?`,
                  a: `${descMod}, además de asistencia permanente por WhatsApp (+51 944 103 890) y respaldo formal en nuestra sede de Los Olivos.`,
                },
              ],
            }),
        });
      }
    }
  }

  // 2. Bloque 2: 80 Circuitos/Destinos × 8 Duraciones × 3 Enfoques = 1,920
  for (const [nombreCircuito, slugCircuito, pais, cluster, clusterNombre, precioBase, esInt] of CIRCUITOS_Y_DESTINOS_80) {
    const esLejanoIntercontinental =
      EUROTRIPS.has(slugCircuito) ||
      EUROPA_REGIONAL.has(slugCircuito) ||
      EUROPA_UN_PAIS.has(slugCircuito) ||
      /(madrid|barcelona|roma|paris|europa|turquia|estambul|tokio|japon|bangkok|tailandia|egipto|el-cairo|dubai|tierra-santa|londres|suiza|alemania|italia|francia|grecia|china)/i.test(slugCircuito);
    const esEscapadaCortaNacional = /(paracas|ica|huacachina)/i.test(slugCircuito);

    const duraciones: [string, string, number, number][] = esLejanoIntercontinental
      ? duracionesLejanas(slugCircuito)
      : DURACIONES_8.map(([t, s, f]) => [t, s, f, 149]);
    for (const [textoDuracion, slugDuracion, factorDur, pisoPrecio] of duraciones) {
      const esCortoEnLejano =
        esLejanoIntercontinental &&
        (slugDuracion === "4-dias-3-noches" || slugDuracion === "5-dias-4-noches");
      const esLargoEnEscapada =
        esEscapadaCortaNacional &&
        (slugDuracion === "12-dias-11-noches" || slugDuracion === "15-dias-14-noches");

      for (const [prefijoEnf, nombreEnfBase, factorEnf] of ENFOQUES_DURACION) {
        const nombreEnf =
          prefijoEnf === "paquete" && SOLO_POR_CARRETERA.test(slugCircuito) ? "Paquete Bus + Hotel" : nombreEnfBase;
        const slug = `${prefijoEnf}-${slugCircuito}-${slugDuracion}`;
        const precio = Math.max(pisoPrecio, Math.round((precioBase * factorDur * factorEnf) / 10) * 10);

        const etiquetaDuracionReal = esCortoEnLejano
          ? `Extensión en Destino ${textoDuracion} (o Circuito 10-15 Días desde Lima)`
          : esLargoEnEscapada
          ? `Circuito Sur Peruano Completo (${textoDuracion})`
          : textoDuracion;

        const nombreCircuitoReal = esLargoEnEscapada
          ? `${nombreCircuito}, Nazca, Arequipa y Cusco`
          : nombreCircuito;

        const titulo = esCortoEnLejano
          ? `${nombreCircuito}: Módulo ${textoDuracion} y Paquetes desde Lima — ${nombreEnf}`
          : `${nombreCircuitoReal} (${textoDuracion}) — ${nombreEnf}`;

        lista.push({
          slug,
          cluster,
          clusterNombre,
          titulo,
          destinoOPais: pais,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            construirObjetoLanding({
              slug,
              cluster,
              clusterNombre,
              badge: `${etiquetaDuracionReal} · ${nombreEnf}`,
              banderas: esInt ? ["Perú", pais] : ["Perú"],
              tituloHero: esCortoEnLejano
                ? `${nombreCircuito} (Módulo ${textoDuracion} / Ruta Completa):`
                : `${nombreCircuitoReal} (${textoDuracion}):`,
              tituloDestacado: `${nombreEnf} Desde $${precio}`,
              descripcionHero: esCortoEnLejano
                ? `Módulo de estadía y visitas en ${nombreCircuito} (${textoDuracion}) ideal para combinar con tu viaje internacional, o cotiza el paquete aéreo completo de 10 a 15 días saliendo desde Lima.`
                : `Programa organizado de ${textoDuracion} para recorrer ${nombreCircuitoReal} con transporte, alojamiento seleccionado, traslados y excursiones principales.`,
              negritaHero: `Cotiza tu fecha exacta por WhatsApp y separa con el 50% de inicial en Cityland Travel.`,
              destinoOPais: pais,
              precioBase: precio,
              etiquetaVitrina: `${nombreCircuitoReal} · ${textoDuracion}`,
              duracionOServicio: `${etiquetaDuracionReal}`,
              checksBase: [
                esCortoEnLejano
                  ? `Módulo de ${textoDuracion} en destino o programa aéreo de 10 a 15 días desde Lima`
                  : `Programa organizado de ${textoDuracion} con salidas desde Lima`,
                `Alojamiento seleccionado en ${pais} según itinerario`,
                "Traslados de llegada y salida + asistencia permanente",
              ],
              checksPlus: [
                `Visitas y excursiones destacadas en ${nombreCircuitoReal}`,
                "Desayunos diarios o régimen Todo Incluido según destino",
                "Reservas verificables y comprobante electrónico SUNAT",
              ],
              checksVip: [
                "Hoteles de categoría superior en ubicación céntrica",
                "Guías profesionales en español durante las visitas",
                "Soporte directo 24/7 antes y durante todo tu viaje",
              ],
              esInternacional: esInt,
              keywords: [
                `${nombreCircuito.toLowerCase()} ${textoDuracion.toLowerCase()}`,
                `paquete ${slugCircuito.replace(/-/g, " ")} ${slugDuracion.replace(/-/g, " ")}`,
                `viaje a ${pais.toLowerCase()} ${textoDuracion.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: esCortoEnLejano
                    ? `¿Cómo funciona la opción de ${textoDuracion} en ${nombreCircuito} si viajo desde Perú?`
                    : `¿Cómo se distribuye el itinerario de ${textoDuracion} en ${nombreCircuitoReal}?`,
                  a: esCortoEnLejano
                    ? `Debido a la distancia aérea desde Lima hacia ${pais}, el módulo de ${textoDuracion} corresponde a la estadía y visitas en ${nombreCircuito} para combinar con otras ciudades. Si deseas el paquete con vuelos internacionales desde Lima, nuestras asesoras te cotizan el programa completo de 10 a 15 días por WhatsApp.`
                    : `El programa de ${textoDuracion} está estructurado para aprovechar cada etapa en ${nombreCircuitoReal}, coordinando tus traslados, noches de hotel, visitas guiadas y retorno seguro.`,
                },
                {
                  q: `¿Cuál es la tarifa referencial de "${nombreEnf}" en ${nombreCircuitoReal}?`,
                  a: `La tarifa referencial parte desde $${precio} por pasajero según modalidad y temporada. Escríbenos por WhatsApp (+51 944 103 890) con tu fecha de viaje para enviarte la cotización exacta.`,
                },
              ],
            }),
        });
      }
    }
  }

  // 3. Bloque 3: 120 Hoteles y Resorts Famosos × 12 Modalidades = 1,440
  for (const [nombreHotel, slugHotel, ciudad, pais, precioBase] of HOTELES_FAMOSOS_120) {
    const esInt = pais !== "Perú";
    for (const [slugMod, nombreMod, factorMod] of MODALIDADES_HOTELES_12) {
      const slug = `${slugHotel}-${slugMod}`;
      const precio = Math.max(189, Math.round((precioBase * factorMod) / 10) * 10);
      const titulo = `${nombreHotel} (${ciudad}): ${nombreMod}`;
      lista.push({
        slug,
        cluster: "all-inclusive",
        clusterNombre: `Hoteles y Resorts en ${ciudad}`,
        titulo,
        destinoOPais: pais,
        precioDesdeUSD: precio,
        constructorDatos: () =>
          construirObjetoLanding({
            slug,
            cluster: "all-inclusive",
            clusterNombre: `Hoteles y Resorts en ${ciudad} (${pais})`,
            badge: `Resort Oficial en ${ciudad} · ${nombreMod}`,
            banderas: esInt ? ["Perú", pais] : ["Perú"],
            tituloHero: `${nombreHotel}:`,
            tituloDestacado: `${nombreMod} Desde $${precio}`,
            descripcionHero: `Reserva tu estadía en ${nombreHotel} (${ciudad}, ${pais}) con boletos aéreos ida y vuelta, traslados aeropuerto-hotel y voucher oficial garantizado.`,
            negritaHero: `Separa hoy tu habitación en ${nombreHotel} con el 50% de inicial y paga en cuotas.`,
            destinoOPais: pais,
            precioBase: precio,
            etiquetaVitrina: `${nombreHotel} (${ciudad})`,
            duracionOServicio: `${nombreMod} · ${ciudad}`,
            checksBase: [
              `Alojamiento confirmado en ${nombreHotel} (${ciudad})`,
              "Boleto aéreo ida y vuelta desde Lima con impuestos",
              "Traslados aeropuerto – hotel – aeropuerto y seguro de viaje",
            ],
            checksPlus: [
              "Acceso completo a piscinas, playas, restaurantes y shows del hotel",
              "Voucher hotelero oficial y código PNR aéreo verificable",
              "Facilidad de separar con el 50% de inicial en Cityland Travel",
            ],
            checksVip: [
              "Habitaciones de categoría superior / vista al mar bajo solicitud",
              "Atención especial para familias, parejas y lunas de miel",
              "Respaldo legal RUC 20614914239 y soporte 24/7 por WhatsApp",
            ],
            esInternacional: esInt,
            keywords: [
              `${nombreHotel.toLowerCase()} precio desde lima`,
              `paquete ${slugHotel.replace(/-/g, " ")}`,
              `${nombreHotel.toLowerCase()} ${nombreMod.toLowerCase()}`,
            ],
            faqsExtra: [
              {
                q: `¿Qué incluye el paquete a ${nombreHotel} en ${ciudad}?`,
                a: `Incluye boletos aéreos ida y vuelta desde Lima, alojamiento oficial en ${nombreHotel} con el régimen alimenticio del resort, traslados de llegada y salida, y seguro de asistencia al viajero.`,
              },
              {
                q: `¿Cómo garantizan mi reserva en ${nombreHotel}?`,
                a: `Emitimos tu voucher oficial de hotel y tu código PNR de aerolínea al instante de separar con el 50% de inicial, respaldado por contrato y comprobante electrónico SUNAT (RUC 20614914239).`,
              },
            ],
          }),
      });
    }
  }

  // 4. Bloque 4: 32 Modalidades desde Aeropuerto Jorge Chávez (LIM) × 50 Destinos Estrella = 1,600
  for (const [nombreModalidad, slugModalidad, notaSalida, ajustePrecio] of MODALIDADES_JORGE_CHAVEZ_32) {
    for (const [nombreDestino, slugDestino, paisDestino, cluster, precioBase, esInt] of DESTINOS_ESTRELLA_50) {
      const slug = `paquetes-a-${slugDestino}-${slugModalidad}`;
      const precio = Math.max(169, precioBase + ajustePrecio);
      const titulo = `Paquetes a ${nombreDestino} (${paisDestino}) desde Lima: ${nombreModalidad}`;
      lista.push({
        slug,
        cluster,
        clusterNombre: `Paquetes a ${paisDestino} desde Lima (LIM)`,
        titulo,
        destinoOPais: paisDestino,
        precioDesdeUSD: precio,
        constructorDatos: () =>
          construirObjetoLanding({
            slug,
            cluster,
            clusterNombre: `Paquetes a ${paisDestino} desde Lima (LIM)`,
            badge: `Salida Aeropuerto Jorge Chávez (LIM) · ${nombreModalidad}`,
            banderas: esInt ? ["Perú", paisDestino] : ["Perú"],
            tituloHero: `Paquetes a ${nombreDestino} desde Lima:`,
            tituloDestacado: `${nombreModalidad} Desde $${precio}`,
            descripcionHero: `Programa verificado rumbo a ${nombreDestino} (${paisDestino}) ${notaSalida}. Incluye boletos confirmados, alojamiento seleccionado, traslados y asesoría permanente.`,
            negritaHero: `Salida desde el Aeropuerto Internacional Jorge Chávez (LIM) · Separa hoy con el 50% de inicial en Cityland Travel.`,
            destinoOPais: paisDestino,
            precioBase: precio,
            etiquetaVitrina: `${nombreDestino}: ${nombreModalidad}`,
            duracionOServicio: `Salida desde Lima (LIM) · ${paisDestino}`,
            checksBase: [
              `Vuelo confirmado desde el Aeropuerto Internacional Jorge Chávez (LIM)`,
              `Alojamiento garantizado en ${nombreDestino} (${paisDestino})`,
              "Traslados aeropuerto – hotel – aeropuerto y asistencia 24/7",
            ],
            checksPlus: [
              "Código de reserva PNR verificable en la web oficial de la aerolínea",
              "Emisión formal con Boleta o Factura Electrónica SUNAT (RUC 20614914239)",
              "Separa con el 50% de inicial mediante BCP, BBVA, Interbank o tarjeta",
            ],
            checksVip: [
              "Check-in y asignación de asientos gestionados por tu asesor",
              "Hotelería superior y excursiones guiadas en español",
              esInt
                ? "Incluye seguro médico internacional y carpeta de viaje completa"
                : "Incluye ingresos turísticos oficiales y guías locales",
            ],
            esInternacional: esInt,
            keywords: [
              `paquetes a ${nombreDestino.toLowerCase()} desde lima`,
              `viajes a ${nombreDestino.toLowerCase()} ${nombreModalidad.toLowerCase()}`,
              `vuelos y hotel a ${nombreDestino.toLowerCase()} desde jorge chavez`,
            ],
            faqsExtra: [
              {
                q: `¿Desde qué aeropuerto salen los vuelos del paquete a ${nombreDestino} (${nombreModalidad})?`,
                a: `Todos nuestros vuelos salen desde el Aeropuerto Internacional Jorge Chávez (LIM) en Lima. Si vives en otra ciudad del Perú, también coordinamos tu boleto de conexión nacional hacia Lima (LIM) en un solo itinerario.`,
              },
              {
                q: `¿Cuánto cuesta el paquete "${nombreModalidad}" a ${nombreDestino} y cómo reservo?`,
                a: `La tarifa referencial empieza Desde $${precio} USD por pasajero. Puedes congelar tu espacio hoy mismo abonando el 50% de inicial en nuestra sede de Los Olivos (Av. Antúnez de Mayolo 814) o por WhatsApp (+51 944 103 890).`,
              },
            ],
          }),
      });
    }
  }

  // 5. Bloque 5: 80 Programas Especiales × 14 Variantes Comerciales = 1,120
  for (const [nombreProg, slugProg, pais, cluster, clusterNombre, precioBase, esInt] of PROGRAMAS_ESPECIALES_80) {
    for (const [slugVar, nombreVar, factorVar] of VARIANTES_ESPECIALES_14) {
      const slug = `${slugProg}-${slugVar}`;
      const precio = Math.max(35, Math.round((precioBase * factorVar) / 5) * 5);
      const titulo = `${nombreProg} — ${nombreVar}`;
      lista.push({
        slug,
        cluster,
        clusterNombre,
        titulo,
        destinoOPais: pais,
        precioDesdeUSD: precio,
        constructorDatos: () =>
          construirObjetoLanding({
            slug,
            cluster,
            clusterNombre,
            badge: `${clusterNombre} · ${nombreVar}`,
            banderas: esInt ? ["Perú", pais] : ["Perú"],
            tituloHero: `${nombreProg}:`,
            tituloDestacado: `${nombreVar} Desde $${precio}`,
            descripcionHero: `Accede a nuestra modalidad "${nombreVar}" en ${nombreProg} con respaldo formal de Cityland Travel (RUC 20614914239), reservas verificables y atención personalizada.`,
            negritaHero: `Cotiza hoy al +51 944 103 890 y asegura tu tarifa promocional en dólares.`,
            destinoOPais: pais,
            precioBase: precio,
            etiquetaVitrina: `${nombreProg} (${nombreVar})`,
            duracionOServicio: `${nombreVar} · ${pais}`,
            checksBase: [
              `Servicio verificado: ${nombreProg}`,
              "Atención inmediata por especialistas en nuestra sede y WhatsApp",
              "Comprobante electrónico SUNAT (RUC 20614914239) y contrato",
            ],
            checksPlus: [
              "Facilidad de pago con el 50% de inicial y cuotas programadas",
              "Reservas con código oficial verificable en línea",
              "Asesoría paso a paso antes y durante tu viaje",
            ],
            checksVip: [
              "Tarifas preferenciales para familias, parejas, empresas y grupos",
              "Coordinación integral de vuelos, hoteles, seguros y traslados",
              "Soporte continuo 24/7 por el equipo de Cityland Travel",
            ],
            esInternacional: esInt,
            keywords: [
              nombreProg.toLowerCase(),
              `${slugProg.replace(/-/g, " ")} ${slugVar.replace(/-/g, " ")}`,
              `${clusterNombre.toLowerCase()} cityland travel`,
            ],
            faqsExtra: [
              {
                q: `¿Qué beneficios ofrece la opción "${nombreVar}" en ${nombreProg}?`,
                a: `Esta modalidad te brinda tarifa verificada Desde $${precio} USD, atención directa por especialistas de Cityland Travel y emisión formal con RUC 20614914239.`,
              },
              {
                q: `¿Cómo solicito una cotización exacta para ${nombreProg}?`,
                a: `Haz clic en cualquiera de los botones de WhatsApp (+51 944 103 890) indicando tu fecha aproximada y cantidad de pasajeros para enviarte las 3 mejores opciones al instante.`,
              },
            ],
          }),
      });
    }
  }

  // 6 al 10. Expansión adicional de +10,000 Landings (Total 18,000 en expansión + 2,016 base = 20,016 páginas)
  const expansion20k = generarIndiceExpansion20k(construirObjetoLanding);
  for (let i = 0; i < expansion20k.length; i++) {
    lista.push(expansion20k[i]);
  }

  for (let i = 0; i < lista.length; i++) {
    lista[i].titulo = limpiarParentesisDobles(lista[i].titulo);
    lista[i].clusterNombre = limpiarParentesisDobles(lista[i].clusterNombre);
  }

  return lista;
}

export const INDICE_EXPANSION_MASIVA: ResumenLandingExpansion[] = generarIndiceExpansion();

const MAPA_EXPANSION_MASIVA = new Map<string, ResumenLandingExpansion>(
  INDICE_EXPANSION_MASIVA.map((item) => [item.slug, item])
);

export function buscarLandingExpansionMasiva(slug: string): LandingComercialSEO | undefined {
  const entrada = MAPA_EXPANSION_MASIVA.get(slug);
  return entrada ? entrada.constructorDatos() : undefined;
}
