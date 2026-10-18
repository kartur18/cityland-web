import type { DatosLandingMadridSEO } from "@/components/MadridMigratorioTemplate";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export interface ResumenLandingMadrid {
  slug: string;
  silo: string;
  siloNombre: string;
  titulo: string;
  zonaOMunicipio: string;
  modalidad: string;
  precioDesdeUSD: number;
  constructorDatos: () => DatosLandingMadridSEO;
}

const SALVEDAD_LEGAL =
  "Recuerda que la decisión final de admisión en frontera corresponde siempre a las autoridades migratorias de España; en Cityland Travel preparamos tu expediente completo y verificable (código PNR, reserva de retorno, alojamiento y seguro Schengen) para que viajes con respaldo.";

function crearObjetoMadrid(params: {
  slug: string;
  silo: string;
  siloNombre: string;
  badgeSuperior: string;
  codigoRuta: string;
  terminalBarajas: string;
  aerolineaDestacada: string;
  tituloPrincipal: string;
  subtituloDorado: string;
  resumenEjecutivo: string;
  zonaOMunicipioMadrid: string;
  origenPasajero: string;
  modalidadClave: string;
  precioDesdeUSD: number;
  precioCarpetaSolaUSD?: number;
  precioIdaYVueltaUSD?: number;
  keywords: string[];
  faqsExtra: { q: string; a: string }[];
  indiceSemilla: number;
}): DatosLandingMadridSEO {
  const {
    slug,
    silo,
    siloNombre,
    badgeSuperior,
    codigoRuta,
    terminalBarajas,
    aerolineaDestacada,
    tituloPrincipal,
    subtituloDorado,
    resumenEjecutivo,
    zonaOMunicipioMadrid,
    origenPasajero,
    modalidadClave,
    precioDesdeUSD,
    precioCarpetaSolaUSD = 85,
    precioIdaYVueltaUSD = Math.max(1090, Math.round((precioDesdeUSD * 1.26) / 10) * 10),
    keywords,
    faqsExtra,
    indiceSemilla,
  } = params;

  const [img0, img1] = obtenerGaleriaPorTexto(
    `madrid espana ${zonaOMunicipioMadrid} ${slug}`
  );

  const mitad = Math.max(35, Math.round(precioDesdeUSD * 0.5));
  const precioSoloIdaVisa = Math.max(699, Math.round((precioDesdeUSD * 0.89) / 10) * 10);

  const metaTitle =
    `${tituloPrincipal} Desde $${precioDesdeUSD} | Cityland`.length > 60
      ? `${tituloPrincipal.slice(0, 38).trim()} Desde $${precioDesdeUSD} | Cityland`
      : `${tituloPrincipal} Desde $${precioDesdeUSD} | Cityland`;

  const descRaw = `${tituloPrincipal} (${subtituloDorado}) desde $${precioDesdeUSD} USD. Incluye PNR, retorno RF 24h, hotel verificable, seguro Schengen 30.000€ y check-in. Separa con $${mitad} (50%) en Los Olivos.`;
  const metaDescription =
    descRaw.length > 156 ? `${descRaw.slice(0, 153).trim()}...` : descRaw;

  // Enlaces relacionados determinísticos dentro del silo /madrid/[slug]
  const totalActual = INDICE_MADRID_10K.length;
  const enlacesRelacionados: { titulo: string; href: string; precio: number }[] = [];
  if (totalActual > 16) {
    const paso = Math.max(1, Math.floor(totalActual / 16));
    for (let i = 0; i < 12; i++) {
      const idx = (indiceSemilla + i * paso) % totalActual;
      const item = INDICE_MADRID_10K[idx];
      if (item && item.slug !== slug) {
        enlacesRelacionados.push({
          titulo: item.titulo,
          href: `/madrid/${item.slug}`,
          precio: item.precioDesdeUSD,
        });
      }
    }
  }

  return {
    slug,
    silo,
    siloNombre,
    badgeSuperior,
    codigoRuta,
    terminalBarajas,
    aerolineaDestacada,
    tituloPrincipal,
    subtituloDorado,
    resumenEjecutivo,
    zonaOMunicipioMadrid,
    origenPasajero,
    modalidadClave,
    precioDesdeUSD,
    precioCarpetaSolaUSD,
    precioIdaYVueltaUSD,
    imagenHero: img0,
    imagenSecundaria: img1 || img0,
    metaTitle,
    metaDescription,
    keywords,
    planesReales: [
      {
        etiqueta: "★ Más Vendido (266+ Emisiones)",
        titulo: `Paquete Migratorio a ${zonaOMunicipioMadrid}`,
        precioUSD: precioDesdeUSD,
        subtitulo: `Vuelo ${codigoRuta} + Retorno RF 24h + Hotel + Seguro + Check-in`,
        destacado: true,
        incluye: [
          `Boleto aéreo ${codigoRuta} con código PNR verificable`,
          "Reserva de retorno activa (MAD → LIM) para control migratorio",
          `Reserva de hotel verificable en ${zonaOMunicipioMadrid} o ajuste a Carta de Invitación`,
          "Seguro médico Schengen 30.000€ sin deducible + Check-in hecho por tu asesor",
        ],
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar el Paquete Migratorio Completo a ${zonaOMunicipioMadrid} (Desde $${precioDesdeUSD} USD) con vuelo + retorno RF + hotel + seguro.`,
      },
      {
        etiqueta: "Si Ya Tienes Pasaje",
        titulo: "Solo Carpeta Migratoria Express",
        precioUSD: precioCarpetaSolaUSD,
        subtitulo: "Para viajeros que compraron su boleto por fuera y necesitan respaldo",
        incluye: [
          "Reserva de retorno PNR activa en sistema (24h antes del vuelo)",
          `Voucher de hotel verificable en ${zonaOMunicipioMadrid} por tus días de estadía`,
          "Seguro médico Schengen oficial de 30.000€ sin franquicia",
          "Revisión de bolsa de viaje BOE y check-in garantizado",
        ],
        waMensaje: `¡Hola Cityland Travel! Ya tengo mi boleto y quiero cotizar Solo la Carpeta Migratoria para ${zonaOMunicipioMadrid} (Desde $${precioCarpetaSolaUSD} USD).`,
      },
      {
        etiqueta: "Con Visa / Residencia / Retorno",
        titulo: `Boleto Solo Ida (${codigoRuta})`,
        precioUSD: precioSoloIdaVisa,
        subtitulo: "Para visa de estudios, trabajo, reagrupación, DNI español o retorno a Perú",
        incluye: [
          `Boleto electrónico IATA de 13 dígitos (${aerolineaDestacada})`,
          "Equipaje de mano 10 kg + maleta de bodega de 23 kg",
          "Check-in y asignación de asiento gestionados por tu asesor",
          "Factura o Boleta Electrónica SUNAT (RUC 20614914239)",
        ],
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar el Boleto Solo Ida para ${zonaOMunicipioMadrid} (Desde $${precioSoloIdaVisa} USD).`,
      },
      {
        etiqueta: "Ida y Vuelta Cerrado",
        titulo: `Paquete Turístico Ida y Vuelta a ${zonaOMunicipioMadrid}`,
        precioUSD: precioIdaYVueltaUSD,
        subtitulo: "Vuelo redondo confirmado + alojamiento + seguro Schengen",
        incluye: [
          "Boleto aéreo Lima – Madrid – Lima con fechas fijas emitidas",
          `Alojamiento seleccionado en ${zonaOMunicipioMadrid} y traslados`,
          "Seguro médico internacional Schengen de 30.000€",
          `Separa hoy con el 50% ($${Math.round(precioIdaYVueltaUSD * 0.5)} USD) y paga en cuotas`,
        ],
        waMensaje: `¡Hola Cityland Travel! Quiero cotizar el Paquete Ida y Vuelta Cerrado a ${zonaOMunicipioMadrid} (Desde $${precioIdaYVueltaUSD} USD).`,
      },
    ],
    pasosExpediente: [
      {
        paso: "01",
        titulo: "Diagnóstico de tu Caso (Hotel o Carta)",
        detalle: `Definimos si ingresarás por ${terminalBarajas} con Reserva de Hotel verificable o con Carta de Invitación Policial en ${zonaOMunicipioMadrid}, y calculamos tu bolsa de viaje exacta.`,
      },
      {
        paso: "02",
        titulo: `Reserva con 50% ($${mitad} USD) y Emisión PNR`,
        detalle: `Congelas tu tarifa en oficina (Los Olivos) o por transferencia BCP/BBVA/Interbank/Yape y emitimos tu boleto aéreo principal con código PNR real.`,
      },
      {
        paso: "03",
        titulo: "Activación de Retorno RF 24h + Hotel + Seguro",
        detalle:
          "Antes de tu embarque dejamos activa tu reserva de retorno MAD → LIM en sistema, tu voucher hotelero verificable y tu póliza Schengen de 30.000€.",
      },
      {
        paso: "04",
        titulo: "Check-in por tu Asesor y Carpeta Lista",
        detalle:
          "Nuestro equipo realiza tu check-in, asigna tu asiento y te entrega tu expediente impreso o en PDF listo para presentar en Lima y Madrid-Barajas.",
      },
    ],
    checklistBarajas: [
      {
        requisito: "Sustento de Salida del Espacio Schengen (Retorno)",
        detalleOficial:
          "Tanto la aerolínea en el Jorge Chávez como el control en Madrid-Barajas verifican que cuentes con un pasaje o reserva activa de retorno.",
        comoTeAyudamos:
          "Nuestro Paquete Migratorio incluye la reserva de retorno (MAD → LIM) activa y verificable en sistema durante tu ingreso, o boleto ida y vuelta cerrado según prefieras.",
      },
      {
        requisito: `Alojamiento Confirmado en ${zonaOMunicipioMadrid} o Carta de Invitación`,
        detalleOficial:
          "Debes acreditar dónde te hospedarás todos los días declarados mediante reserva hotelera vigente o Carta de Invitación expedida en Comisaría de Policía en España.",
        comoTeAyudamos:
          "Emitimos tu voucher de hotel verificable en sistema calibrado exactamente a tus fechas, o alineamos tu vuelo a los días exactos de tu Carta de Invitación.",
      },
      {
        requisito: "Medios Económicos BOE 2026 (Bolsa de Viaje)",
        detalleOficial:
          "La normativa española exige acreditar 122,10 € por día de estancia, con un mínimo obligatorio de 1.098,90 € por pasajero (en efectivo y/o tarjetas internacionales).",
        comoTeAyudamos:
          "Calibramos la cantidad de días de tu itinerario (por ejemplo 9 a 12 días) para que tu bolsa de viaje sea coherente con el monto que llevas.",
      },
      {
        requisito: "Seguro Médico Schengen de 30.000€ sin Deducible",
        detalleOficial:
          "Cobertura médica internacional mínima de 30.000 euros con repatriación sanitaria y 0€ de franquicia válida en toda España y el Espacio Schengen.",
        comoTeAyudamos:
          "Incluimos tu certificado oficial en español listo para mostrar en ventanilla de control migratorio.",
      },
    ],
    faqs: [
      ...faqsExtra,
      {
        q: `¿Qué diferencia hay entre el Paquete Migratorio a ${zonaOMunicipioMadrid} ($${precioDesdeUSD} USD) y comprar solo un pasaje en internet?`,
        a: `Si compras solo un boleto de ida por tu cuenta, la aerolínea en Lima puede denegarte el embarque por no contar con retorno, hotel verificable ni seguro Schengen. Nuestro Paquete Migratorio a ${zonaOMunicipioMadrid} (Desde $${precioDesdeUSD} USD) incluye tu boleto aéreo, la reserva de retorno activa (MAD → LIM), reserva de hotel verificable, seguro Schengen 30.000€ y el check-in realizado por tu asesor. ${SALVEDAD_LEGAL}`,
      },
      {
        q: `Si ya compré mi pasaje a Madrid por mi cuenta, ¿pueden armarme solo la Carpeta Migratoria?`,
        a: `¡Sí! Contamos con el servicio de Solo Carpeta Migratoria Express desde $${precioCarpetaSolaUSD} USD, que incluye la reserva de retorno activa 24h antes, reserva de hotel verificable, seguro Schengen y check-in hecho por tu asesor.`,
      },
    ],
    enlacesRelacionados,
  };
}

// ============================================================================
// SILO 1: 50 ZONAS DE MADRID Y CIUDADES CONECTADAS VÍA BARAJAS × 10 MODALIDADES × 5 AEROLÍNEAS = 2,500 PÁGINAS
// ============================================================================
const ZONAS_Y_CONEXIONES_MADRID_50: [string, string, number, string][] = [
  ["Madrid Centro (Puerta del Sol y Gran Vía)", "madrid-centro-sol", 869, "Terminal T4 / T1 Madrid-Barajas"],
  ["Puente de Vallecas (Madrid)", "puente-de-vallecas-madrid", 869, "Conexión Metro y Cercanías desde Barajas"],
  ["Carabanchel (Madrid)", "carabanchel-madrid", 869, "Zona Sur de Madrid · Alta Comunidad Peruana"],
  ["Usera (Madrid)", "usera-madrid", 869, "Madrid Río y Usera · Conexión Directa Barajas"],
  ["Ciudad Lineal y Pueblo Nuevo (Madrid)", "ciudad-lineal-madrid", 869, "A 15 minutos del Aeropuerto Madrid-Barajas"],
  ["Latina y Aluche (Madrid)", "latina-aluche-madrid", 869, "Conexión directa desde Aeropuerto Barajas"],
  ["Villaverde (Madrid)", "villaverde-madrid", 869, "Conexión Cercanías Renfe desde Barajas T4"],
  ["Tetuán y Cuatro Caminos (Madrid)", "tetuan-cuatro-caminos-madrid", 869, "Eje Castellana y Nuevos Ministerios"],
  ["San Blas-Canillejas (Madrid)", "san-blas-canillejas-madrid", 869, "Distrito contiguo al Aeropuerto de Barajas"],
  ["Hortaleza y Sanchinarro (Madrid)", "hortaleza-madrid", 869, "A 10 minutos de Barajas T4"],
  ["Alcalá de Henares (Comunidad de Madrid)", "alcala-de-henares-madrid", 879, "Corredor del Henares · A 20 min de Barajas"],
  ["Móstoles (Comunidad de Madrid)", "mostoles-madrid", 879, "Zona Sur Metropolitana de Madrid"],
  ["Fuenlabrada (Comunidad de Madrid)", "fuenlabrada-madrid", 879, "Conexión Cercanías desde Madrid-Atocha y Barajas"],
  ["Leganés (Comunidad de Madrid)", "leganes-madrid", 879, "Área Metropolitana Sur de Madrid"],
  ["Getafe (Comunidad de Madrid)", "getafe-madrid", 879, "Conexión directa desde Madrid-Barajas"],
  ["Alcorcón (Comunidad de Madrid)", "alcorcon-madrid", 879, "Conexión Metro Línea 10 y Cercanías Madrid"],
  ["Parla (Comunidad de Madrid)", "parla-madrid", 879, "Cercanías C4 directo desde Madrid"],
  ["Torrejón de Ardoz (Comunidad de Madrid)", "torrejon-de-ardoz-madrid", 869, "A 12 minutos del Aeropuerto Madrid-Barajas"],
  ["Alcobendas y San Sebastián de los Reyes", "alcobendas-madrid", 869, "Pegado a la Terminal T4 de Madrid-Barajas"],
  ["Coslada y San Fernando de Henares", "coslada-madrid", 869, "Acceso inmediato desde Barajas T1, T2 y T4"],
  ["Pozuelo de Alarcón y Majadahonda", "pozuelo-majadahonda-madrid", 889, "Zona Noroeste de la Comunidad de Madrid"],
  ["Las Rozas y Collado Villalba (Madrid)", "las-rozas-villalba-madrid", 889, "Sierra Noroeste de Madrid"],
  ["Rivas-Vaciamadrid y Arganda del Rey", "rivas-arganda-madrid", 879, "Sureste de la Comunidad de Madrid"],
  ["Aranjuez y Valdemoro (Madrid)", "aranjuez-valdemoro-madrid", 889, "Eje Sur de la Comunidad de Madrid"],
  ["Toledo vía Madrid-Barajas", "toledo-via-madrid", 899, "Llegada a Barajas + 33 min en tren AVE desde Atocha"],
  ["Guadalajara vía Madrid-Barajas", "guadalajara-via-madrid", 889, "A 30 minutos del Aeropuerto Madrid-Barajas"],
  ["Segovia y Ávila vía Madrid-Barajas", "segovia-avila-via-madrid", 899, "Conexión inmediata desde Madrid-Chamartín"],
  ["Valladolid vía Madrid-Barajas", "valladolid-via-madrid", 919, "Llegada por Barajas + conexión alta velocidad"],
  ["Salamanca vía Madrid-Barajas", "salamanca-via-madrid", 919, "Ingreso por Madrid-Barajas + conexión directa"],
  ["Burgos vía Madrid-Barajas", "burgos-via-madrid", 929, "Vuelo a Madrid-Barajas + conexión a Castilla y León"],
  ["León y Zamora vía Madrid-Barajas", "leon-zamora-via-madrid", 929, "Vuelo Lima – Madrid + conexión directa"],
  ["Zaragoza vía Madrid-Barajas", "zaragoza-via-madrid", 929, "Llegada a Madrid + 1h15 en AVE a Zaragoza"],
  ["Valencia vía Madrid-Barajas", "valencia-via-madrid", 939, "Ingreso por Madrid-Barajas + conexión a Valencia"],
  ["Alicante y Elche vía Madrid-Barajas", "alicante-via-madrid", 949, "Vuelo vía Madrid-Barajas hacia la Costa Blanca"],
  ["Murcia y Cartagena vía Madrid-Barajas", "murcia-via-madrid", 949, "Conexión directa desde Madrid-Barajas"],
  ["Sevilla vía Madrid-Barajas", "sevilla-via-madrid", 949, "Vuelo a Madrid-Barajas + conexión a Andalucía"],
  ["Málaga y Marbella vía Madrid-Barajas", "malaga-via-madrid", 949, "Llegada por Madrid + conexión a la Costa del Sol"],
  ["Córdoba y Granada vía Madrid-Barajas", "cordoba-granada-via-madrid", 949, "Ruta Lima – Madrid con enlace a Andalucía"],
  ["Bilbao y País Vasco vía Madrid-Barajas", "bilbao-via-madrid", 959, "Vuelo Lima – Madrid – Bilbao con código PNR"],
  ["San Sebastián y Vitoria vía Madrid", "san-sebastian-via-madrid", 959, "Conexión al País Vasco vía Madrid-Barajas"],
  ["Santander y Cantabria vía Madrid", "santander-via-madrid", 949, "Ruta aérea Lima – Madrid – Santander"],
  ["Gijón y Oviedo (Asturias) vía Madrid", "asturias-gijon-oviedo-via-madrid", 949, "Conexión a Asturias vía Madrid-Barajas"],
  ["Vigo, A Coruña y Santiago vía Madrid", "galicia-vigo-coruna-via-madrid", 959, "Conexión a Galicia vía Madrid-Barajas T4"],
  ["Pamplona y Navarra vía Madrid-Barajas", "pamplona-navarra-via-madrid", 949, "Ingreso por Madrid-Barajas rumbo a Navarra"],
  ["Logroño y La Rioja vía Madrid-Barajas", "logrono-la-rioja-via-madrid", 939, "Conexión a La Rioja desde Madrid-Barajas"],
  ["Albacetey Ciudad Real vía Madrid", "albacete-ciudad-real-via-madrid", 919, "Conexión a Castilla-La Mancha desde Madrid"],
  ["Cáceres, Badajoz y Mérida vía Madrid", "extremadura-caceres-badajoz-via-madrid", 929, "Conexión a Extremadura desde Madrid"],
  ["Palma de Mallorca e Ibiza vía Madrid", "mallorca-ibiza-via-madrid", 969, "Vuelo Lima – Madrid – Islas Baleares"],
  ["Tenerife y Gran Canaria vía Madrid", "canarias-tenerife-via-madrid", 989, "Vuelo Lima – Madrid – Islas Canarias"],
  ["Barcelona vía Madrid-Barajas", "barcelona-via-madrid", 939, "Ruta Lima – Madrid – Barcelona con expediente completo"],
];

const MODALIDADES_MADRID_10: [string, string, number, string][] = [
  [
    "paquete-migratorio-completo",
    "Paquete Migratorio Completo (Vuelo + Retorno RF + Hotel + Seguro)",
    1.0,
    "Nuestra modalidad #1 en ventas: incluye boleto aéreo de ingreso, reserva de retorno activa (MAD → LIM 24h), reserva de hotel verificable, seguro Schengen 30.000€ y check-in hecho por tu asesor",
  ],
  [
    "vuelo-con-reserva-retorno-rf",
    "Boleto Lima – Madrid + Reserva de Retorno RF Activa 24h",
    0.96,
    "Emisión de tu boleto principal LIM → MAD acompañada de reserva de retorno verificable en sistema para presentar en mostrador y en el control de Madrid-Barajas",
  ],
  [
    "visita-familiar-carta-invitacion",
    "Viaje a Madrid con Carta de Invitación Policial",
    0.95,
    "Calibramos tu boleto de ida y tu reserva de retorno exactamente a las fechas autorizadas en la Carta de Invitación de tu familiar en España",
  ],
  [
    "primer-viaje-sin-carta-con-hotel",
    "Primer Viaje a Madrid sin Carta (Con Reserva de Hotel Verificable)",
    1.0,
    "Si no tienes Carta de Invitación, armamos tu carpeta turística completa con voucher de hotel verificable en Madrid, seguro Schengen y retorno activo",
  ],
  [
    "boleto-solo-ida-visa-residencia",
    "Boleto Solo Ida a Madrid (Visa de Trabajo, Estudios o Residencia)",
    0.88,
    "Tarifa especial de solo ida para pasajeros que cuentan con visado nacional español, tarjeta TIE/DNI o resolución de reagrupación familiar",
  ],
  [
    "pasaje-con-2-maletas-23kg",
    "Pasaje a Madrid con 2 Maletas de 23 kg + Equipaje de Mano",
    1.08,
    "Tarifa con doble franquicia de bodega (2x23 kg) más carry-on de 10 kg ideal para largas estadías, estudios o mudanza a España",
  ],
  [
    "vuelo-retorno-madrid-a-lima",
    "Boleto de Retorno Madrid → Lima (Para Residentes y Familiares)",
    0.86,
    "Pasajes saliendo desde Madrid-Barajas hacia Lima (o comprados desde España para traer a tus padres e hijos desde el Perú)",
  ],
  [
    "viaje-padres-adultos-mayores",
    "Viaje a Madrid para Padres y Adultos Mayores con Asistencia",
    1.01,
    "Incluye solicitud de asistencia especial / silla de ruedas en el Jorge Chávez y en Madrid-Barajas, check-in por asesor y carpeta lista para tus padres",
  ],
  [
    "viaje-familiar-con-ninos",
    "Paquete Familiar a Madrid (Adultos + Niños con Asientos Juntos)",
    0.97,
    "Tarifa grupal familiar con asignación de asientos contiguos, orientación de autorización notarial de viaje para menores y carpeta migratoria familiar",
  ],
  [
    "vuelo-ida-y-vuelta-cerrado",
    "Paquete Lima – Madrid – Lima Ida y Vuelta Confirmado",
    1.24,
    "Boleto aéreo ida y vuelta cerrado con fechas fijas emitidas, reserva de alojamiento verificable en Madrid y seguro médico Schengen 30.000€",
  ],
];

const AEROLINEAS_BARAJAS_5: [string, string, string, number][] = [
  ["iberia-directo-t4", "Iberia Vuelo Directo", "Terminal T4S / T4 Madrid-Barajas", 1.03],
  ["air-europa-directo-t1", "Air Europa Vuelo Directo", "Terminal T1 Madrid-Barajas", 1.0],
  ["plus-ultra-t1", "Plus Ultra Líneas Aéreas", "Terminal T1 Madrid-Barajas", 0.96],
  ["latam-vuelo-confirmado", "LATAM Airlines", "Terminal T4 Madrid-Barajas", 1.0],
  ["avianca-klm-conexion", "Tarifa Económica con Conexión", "Terminal T4 / T2 Madrid-Barajas", 0.94],
];

// ============================================================================
// SILO 2: 40 DISTRITOS DE LIMA Y CALLAO × 10 PRODUCTOS MADRID × 6 MODALIDADES DE PAGO = 2,400 PÁGINAS
// ============================================================================
const DISTRITOS_LIMA_MADRID_40: [string, string][] = [
  ["Los Olivos", "los-olivos"],
  ["San Martín de Porres", "san-martin-de-porres"],
  ["Independencia", "independencia"],
  ["Comas", "comas"],
  ["Carabayllo", "carabayllo"],
  ["Puente Piedra", "puente-piedra"],
  ["Ancón", "ancon"],
  ["Santa Rosa", "santa-rosa"],
  ["Rímac", "rimac"],
  ["San Juan de Lurigancho", "san-juan-de-lurigancho"],
  ["Ate Vitarte", "ate-vitarte"],
  ["Santa Anita", "santa-anita"],
  ["La Molina", "la-molina"],
  ["El Agustino", "el-agustino"],
  ["Chaclacayo", "chaclacayo"],
  ["Chosica", "chosica"],
  ["Miraflores", "miraflores"],
  ["San Isidro", "san-isidro"],
  ["Santiago de Surco", "santiago-de-surco"],
  ["San Borja", "san-borja"],
  ["La Victoria", "la-victoria"],
  ["Lince", "lince"],
  ["Jesús María", "jesus-maria"],
  ["Pueblo Libre", "pueblo-libre"],
  ["Magdalena del Mar", "magdalena-del-mar"],
  ["San Miguel", "san-miguel"],
  ["Breña", "brena"],
  ["Cercado de Lima", "cercado-de-lima"],
  ["Barranco", "barranco"],
  ["Chorrillos", "chorrillos"],
  ["Surquillo", "surquillo"],
  ["San Luis", "san-luis"],
  ["San Juan de Miraflores", "san-juan-de-miraflores"],
  ["Villa María del Triunfo", "villa-maria-del-triunfo"],
  ["Villa El Salvador", "villa-el-salvador"],
  ["Lurín", "lurin"],
  ["Pachacámac", "pachacamac"],
  ["Callao Cercado", "callao"],
  ["Bellavista Callao", "bellavista-callao"],
  ["Ventanilla Callao", "ventanilla-callao"],
];

const PRODUCTOS_MADRID_10: [string, string, number][] = [
  ["paquete-migratorio-madrid", "Paquete Migratorio Completo a Madrid (Vuelo + RF + Hotel + Seguro)", 869],
  ["solo-carpeta-migratoria-madrid", "Solo Carpeta Migratoria para Madrid (Retorno RF + Hotel + Seguro)", 85],
  ["boleto-solo-ida-madrid", "Boleto Solo Ida Lima a Madrid (Con Visa o Residencia)", 769],
  ["vuelo-ida-vuelta-madrid", "Boleto Ida y Vuelta Lima – Madrid – Lima Confirmado", 1090],
  ["viaje-madrid-carta-invitacion", "Pasaje a Madrid con Carta de Invitación Policial", 849],
  ["viaje-madrid-sin-carta-con-hotel", "Viaje a Madrid sin Carta de Invitación (Con Reserva de Hotel)", 869],
  ["pasaje-madrid-2-maletas-23kg", "Vuelo a Madrid con 2 Maletas de 23 kg en Bodega", 939],
  ["pasaje-madrid-adultos-mayores", "Viaje a Madrid para Padres y Adultos Mayores", 879],
  ["vuelo-madrid-a-lima-retorno", "Pasaje de Madrid a Lima para Familiares", 729],
  ["seguro-schengen-y-hotel-madrid", "Seguro Médico Schengen 30.000€ + Reserva Hotel Madrid", 75],
];

const MODALIDADES_EMISION_6: [string, string, number][] = [
  ["separa-con-50-por-ciento", "Separa con 50% de Inicial", 1.0],
  ["emision-inmediata-pnr", "Emisión Inmediata con Código PNR", 1.0],
  ["atencion-sede-los-olivos", "Atención Presencial en Sede Los Olivos", 1.0],
  ["pago-bcp-bbva-interbank-yape", "Pago Seguro en Bancos Peruanos o Yape", 1.0],
  ["checkin-hecho-por-asesor", "Incluye Check-in Hecho por tu Asesor", 1.0],
  ["preventa-salidas-2026", "Preventa Salidas Confirmadas 2026", 0.96],
];

// ============================================================================
// SILO 3: 30 CIUDADES Y PROVINCIAS DEL PERÚ × 12 MESES × 6 PAQUETES MADRID = 2,160 PÁGINAS
// ============================================================================
const PROVINCIAS_PERU_30: [string, string, number][] = [
  ["Trujillo", "trujillo", 40],
  ["Chiclayo", "chiclayo", 40],
  ["Piura", "piura", 45],
  ["Arequipa", "arequipa", 45],
  ["Cusco", "cusco", 45],
  ["Huancayo", "huancayo", 20],
  ["Iquitos", "iquitos", 55],
  ["Tarapoto", "tarapoto", 45],
  ["Cajamarca", "cajamarca", 45],
  ["Tumbes", "tumbes", 50],
  ["Chimbote", "chimbote", 20],
  ["Ica", "ica", 15],
  ["Tacna", "tacna", 50],
  ["Puno y Juliaca", "juliaca-puno", 50],
  ["Ayacucho", "ayacucho", 40],
  ["Huánuco", "huanuco", 35],
  ["Pucallpa", "pucallpa", 45],
  ["Huaraz", "huaraz", 25],
  ["Sullana", "sullana", 45],
  ["Talara", "talara", 50],
  ["Chincha", "chincha", 10],
  ["Pisco", "pisco", 15],
  ["Cañete", "canete", 10],
  ["Huaral", "huaral", 0],
  ["Huacho", "huacho", 0],
  ["Barranca", "barranca", 10],
  ["Jaén", "jaen", 50],
  ["Moyobamba", "moyobamba", 50],
  ["Puerto Maldonado", "puerto-maldonado", 55],
  ["Moquegua", "moquegua", 50],
];

const MESES_MADRID_12: [string, string, number][] = [
  ["Enero", "enero", 0.98],
  ["Febrero", "febrero", 0.95],
  ["Marzo", "marzo", 0.96],
  ["Abril", "abril", 0.98],
  ["Mayo", "mayo", 1.0],
  ["Junio", "junio", 1.05],
  ["Julio", "julio", 1.12],
  ["Agosto", "agosto", 1.1],
  ["Septiembre", "septiembre", 1.02],
  ["Octubre", "octubre", 0.97],
  ["Noviembre", "noviembre", 0.95],
  ["Diciembre", "diciembre", 1.08],
];

const PAQUETES_PROVINCIA_MADRID_6: [string, string, number][] = [
  ["paquete-migratorio-madrid", "Paquete Migratorio a Madrid (Vuelo + RF + Hotel + Seguro)", 869],
  ["primer-viaje-a-madrid", "Primer Viaje a Madrid con Expediente Completo", 879],
  ["madrid-con-carta-invitacion", "Viaje a Madrid con Carta de Invitación", 849],
  ["madrid-con-2-maletas-23kg", "Pasaje a Madrid con 2 Maletas de 23 kg", 939],
  ["vuelo-ida-vuelta-madrid", "Paquete Lima – Madrid Ida y Vuelta Confirmado", 1090],
  ["boleto-solo-ida-madrid-visa", "Boleto Solo Ida a Madrid para Visa o Residencia", 769],
];

// ============================================================================
// SILO 4: 30 BARRIOS DE MADRID CON COMUNIDAD PERUANA × 10 PERFILES × 5 DURACIONES = 1,500 PÁGINAS
// ============================================================================
const BARRIOS_COMUNIDAD_PERUANA_30: [string, string][] = [
  ["Puente de Vallecas", "barrio-puente-de-vallecas"],
  ["Carabanchel Bajo y Vista Alegre", "barrio-carabanchel"],
  ["Usera y Almendrales", "barrio-usera"],
  ["Ciudad Lineal y Ventas", "barrio-ciudad-lineal"],
  ["Aluche y Campamento (Latina)", "barrio-aluche-latina"],
  ["Villaverde Alto y Bajo", "barrio-villaverde"],
  ["Cuatro Caminos y Bellas Vistas (Tetuán)", "barrio-cuatro-caminos-tetuan"],
  ["Puerta del Sol y Lavapiés (Centro)", "barrio-sol-lavapies"],
  ["Chamberí y Ríos Rosas", "barrio-chamberi"],
  ["Arganzuela, Atocha y Delicias", "barrio-arganzuela-atocha"],
  ["Canillejas y Simancas (San Blas)", "barrio-canillejas-san-blas"],
  ["Hortaleza y Pinar del Rey", "barrio-hortaleza"],
  ["Moratalaz", "barrio-moratalaz"],
  ["Vicálvaro", "barrio-vicalvaro"],
  ["Villa de Vallecas y Ensanche", "barrio-villa-de-vallecas"],
  ["Barrio del Pilar y Peñagrande", "barrio-del-pilar"],
  ["Moncloa y Argüelles", "barrio-moncloa"],
  ["Pacífico y Conde de Casal (Retiro)", "barrio-retiro-pacifico"],
  ["Prosperidad y Castilla (Chamartín)", "barrio-chamartin"],
  ["Goya y Guindalera (Salamanca)", "barrio-salamanca-goya"],
  ["Alcalá de Henares Centro", "municipio-alcala-de-henares"],
  ["Móstoles Central", "municipio-mostoles"],
  ["Fuenlabrada Central", "municipio-fuenlabrada"],
  ["Leganés y Zarzaquemada", "municipio-leganes"],
  ["Getafe Centro", "municipio-getafe"],
  ["Alcorcón Central", "municipio-alcorcon"],
  ["Parla Centro", "municipio-parla"],
  ["Torrejón de Ardoz Centro", "municipio-torrejon-de-ardoz"],
  ["Alcobendas Centro", "municipio-alcobendas"],
  ["San Sebastián de los Reyes", "municipio-san-sebastian-de-los-reyes"],
];

const PERFILES_VIAJERO_MADRID_10: [string, string, number][] = [
  ["visita-a-familiares-peruanos", "Visita a Familiares con Carta de Invitación", 849],
  ["primer-viaje-con-reserva-hotel", "Primer Viaje con Reserva de Hotel Verificable", 869],
  ["paquete-migratorio-con-retorno-rf", "Paquete Migratorio + Reserva de Retorno RF 24h", 869],
  ["viaje-de-padres-y-abuelos", "Viaje de Padres y Abuelos desde Lima", 879],
  ["viaje-de-esposos-y-parejas", "Paquete para Parejas y Esposos rumbo a Madrid", 859],
  ["viaje-con-hijos-menores", "Viaje Familiar con Hijos Menores de Edad", 859],
  ["estudiantes-y-master-en-madrid", "Boleto para Estudiantes y Máster en Madrid", 779],
  ["trabajadores-con-contrato-visa", "Boleto para Trabajadores con Visa Aprobada", 769],
  ["comprado-desde-madrid-para-familia", "Pasaje Comprado desde España para Traer Familiares", 869],
  ["solo-reserva-hotel-y-retorno-rf", "Solo Reserva de Hotel + Retorno RF para Ingreso", 85],
];

const DURACIONES_ESTADIA_MADRID_5: [string, string, number][] = [
  ["estadia-9-dias-bolsa-minima-boe", "Estadía 9 Días (Mínimo BOE 1.098,90€)", 1.0],
  ["estadia-12-dias-recomendada", "Estadía 12 Días Recomendada", 1.0],
  ["estadia-15-dias-quincena", "Estadía 15 Días en Madrid", 1.02],
  ["estadia-30-dias-visita-familiar", "Estadía 30 Días Visita Familiar", 1.04],
  ["estadia-60-a-90-dias-schengen", "Estadía Larga 60 a 90 Días Schengen", 1.06],
];

// ============================================================================
// SILO 5: 24 SERVICIOS Y CASOS REALES DE BD × 12 MESES × 5 VARIANTES = 1,440 PÁGINAS
// ============================================================================
const SERVICIOS_ESPECIALES_BD_24: [string, string, number][] = [
  ["paquete-solo-ida-migratorio-lima-madrid", "Paquete Solo Ida Migratorio Lima – Madrid (Vuelo + RF + Hotel)", 869],
  ["reserva-retorno-rf-24h-madrid-lima", "Reserva de Retorno RF 24h (MAD → LIM) Verificable", 55],
  ["reserva-hotel-verificable-barajas-madrid", "Reserva de Hotel Verificable para Migraciones Madrid", 45],
  ["carpeta-migratoria-completa-sin-vuelo-madrid", "Carpeta Migratoria Completa (Retorno RF + Hotel + Seguro)", 95],
  ["seguro-medico-schengen-30000-euros-madrid", "Seguro Médico Schengen 30.000€ Oficial para Madrid", 45],
  ["maleta-adicional-23kg-bodega-madrid", "Maleta Adicional de 23 kg en Bodega para Vuelo a Madrid", 149],
  ["checkin-y-asignacion-asiento-madrid", "Servicio de Check-in, Asiento y Revisión de Carpeta Madrid", 35],
  ["reprogramacion-cambio-fecha-vuelo-madrid", "Reprogramación y Cambio de Fecha de Pasaje a Madrid", 149],
  ["vuelo-directo-iberia-lima-madrid-t4", "Boleto Vuelo Directo Iberia Lima – Madrid (Terminal T4)", 899],
  ["vuelo-directo-air-europa-lima-madrid-t1", "Boleto Vuelo Directo Air Europa Lima – Madrid (Terminal T1)", 869],
  ["vuelo-plus-ultra-lima-madrid-economico", "Boleto Plus Ultra Lima – Madrid con Equipaje", 839],
  ["vuelo-latam-lima-madrid-confirmado", "Boleto LATAM Lima – Madrid con Código PNR", 869],
  ["boleto-madrid-a-lima-solo-ida", "Boleto Solo Ida Madrid → Lima (Para Residentes)", 719],
  ["boleto-madrid-lima-madrid-ida-vuelta", "Boleto Madrid – Lima – Madrid para Peruanos en España", 1050],
  ["pasaje-lima-madrid-con-visa-de-trabajo", "Boleto Lima – Madrid para Pasajeros con Visa de Trabajo", 769],
  ["pasaje-lima-madrid-con-visa-de-estudios", "Boleto Lima – Madrid para Estudiantes con Visa", 769],
  ["pasaje-lima-madrid-reagrupacion-familiar", "Boleto Lima – Madrid por Reagrupación Familiar", 769],
  ["asesoria-carta-invitacion-madrid-peru", "Asesoría de Viaje con Carta de Invitación a Madrid", 849],
  ["asesoria-bolsa-de-viaje-boe-madrid-2026", "Paquete a Madrid Calibrado a la Bolsa de Viaje BOE 2026", 869],
  ["paquete-familiar-4-a-6-pasajeros-madrid", "Tarifa Grupal Familiar a Madrid (Por Pasajero)", 799],
  ["viaje-madrid-con-escala-bogota-avianca", "Vuelo Económico Lima – Madrid vía Bogotá (Avianca)", 819],
  ["viaje-madrid-con-conexion-barcelona-bcn", "Paquete Migratorio Lima – Madrid / Barcelona (BCN)", 899],
  ["viaje-madrid-con-conexion-roma-milan", "Paquete Migratorio Lima – Madrid – Roma / Milán", 929],
  ["viaje-madrid-con-conexion-paris-lyon", "Paquete Migratorio Lima – Madrid – París / Lyon", 929],
];

const VARIANTES_ATENCION_5: [string, string, number][] = [
  ["tarifa-oficial-pnr", "Emisión Oficial PNR", 1.0],
  ["reserva-50-inicial", "Reserva con 50% Inicial", 1.0],
  ["sede-los-olivos", "Oficina Los Olivos RUC 20614914239", 1.0],
  ["atencion-whatsapp-24-7", "Atención Inmediata WhatsApp", 1.0],
  ["preventa-garantizada", "Tarifa Preventa Garantizada", 0.96],
];

// ============================================================================
// CONSTRUCCIÓN DE LAS 10,000 LANDINGS ESPECIALIZADAS EN /madrid/[slug]
// ============================================================================
function generarIndiceMadrid10k(): ResumenLandingMadrid[] {
  const lista: ResumenLandingMadrid[] = [];
  let contador = 0;

  // 1. SILO 1: 50 Zonas/Conexiones × 10 Modalidades × 5 Aerolíneas = 2,500
  for (const [zonaNombre, slugZona, precioBase, terminalInfo] of ZONAS_Y_CONEXIONES_MADRID_50) {
    for (const [slugMod, nombreMod, factorMod, descMod] of MODALIDADES_MADRID_10) {
      for (const [slugAero, nombreAero, terminalAero, factorAero] of AEROLINEAS_BARAJAS_5) {
        const idxActual = contador++;
        const slug = `${slugZona}-${slugMod}-${slugAero}`;
        const precio = Math.round((precioBase * factorMod * factorAero) / 10) * 10;
        const titulo = `${zonaNombre}: ${nombreMod} (${nombreAero})`;

        lista.push({
          slug,
          silo: "barajas-rutas",
          siloNombre: "Rutas y Modalidades Madrid-Barajas",
          titulo,
          zonaOMunicipio: zonaNombre,
          modalidad: nombreMod,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "barajas-rutas",
              siloNombre: "Rutas y Modalidades Madrid-Barajas",
              badgeSuperior: `${nombreAero} · ${terminalAero}`,
              codigoRuta: slugMod.includes("retorno-madrid-a-lima") ? "MAD → LIM" : "LIM → MAD",
              terminalBarajas: terminalAero,
              aerolineaDestacada: nombreAero,
              tituloPrincipal: `Viajes a ${zonaNombre}:`,
              subtituloDorado: `${nombreMod} Desde $${precio} USD`,
              resumenEjecutivo: `${descMod}. Operado con ${nombreAero} llegando a ${terminalInfo}, con código PNR verificable, check-in realizado por tu asesor y respaldo formal RUC 20614914239.`,
              zonaOMunicipioMadrid: zonaNombre,
              origenPasajero: "Lima y Provincias",
              modalidadClave: nombreMod.slice(0, 32),
              precioDesdeUSD: precio,
              keywords: [
                `viajar a ${zonaNombre.toLowerCase()} desde lima`,
                `${nombreMod.toLowerCase()} madrid`,
                `paquete migratorio ${slugZona.replace(/-/g, " ")}`,
              ],
              faqsExtra: [
                {
                  q: `¿Qué incluye exactamente "${nombreMod}" hacia ${zonaNombre} con ${nombreAero}?`,
                  a: `${descMod}. Llegarás por ${terminalAero} con tu código PNR activo en el sistema de ${nombreAero} y toda tu documentación verificable lista.`,
                },
                {
                  q: `¿Con cuánto puedo separar mi viaje a ${zonaNombre}?`,
                  a: `Puedes congelar tu tarifa Desde $${precio} USD abonando el 50% de inicial en nuestra sede de Los Olivos (Av. Universitaria 2029) o mediante cuentas bancarias BCP, BBVA e Interbank.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  // 2. SILO 2: 40 Distritos de Lima y Callao × 10 Productos Madrid × 6 Modalidades = 2,400
  for (const [nombreDistrito, slugDistrito] of DISTRITOS_LIMA_MADRID_40) {
    for (const [slugProd, nombreProd, precioBase] of PRODUCTOS_MADRID_10) {
      for (const [slugEmis, nombreEmis, factorEmis] of MODALIDADES_EMISION_6) {
        const idxActual = contador++;
        const slug = `vecinos-${slugDistrito}-${slugProd}-${slugEmis}`;
        const precio = Math.max(45, Math.round((precioBase * factorEmis) / 5) * 5);
        const titulo = `${nombreProd} para ${nombreDistrito} — ${nombreEmis}`;

        lista.push({
          slug,
          silo: "distritos-lima-madrid",
          siloNombre: `Atención ${nombreDistrito} rumbo a Madrid`,
          titulo,
          zonaOMunicipio: "Madrid (Barajas T4 / T1)",
          modalidad: nombreProd,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "distritos-lima-madrid",
              siloNombre: `Atención ${nombreDistrito} rumbo a Madrid`,
              badgeSuperior: `Vecinos de ${nombreDistrito} · ${nombreEmis}`,
              codigoRuta: "LIM → MAD",
              terminalBarajas: "Terminal T4 y T1 Madrid-Barajas",
              aerolineaDestacada: "Iberia · Air Europa · LATAM · Plus Ultra",
              tituloPrincipal: `${nombreProd}`,
              subtituloDorado: `Atención ${nombreDistrito} Desde $${precio} USD`,
              resumenEjecutivo: `Servicio especializado para vecinos y familias de ${nombreDistrito}: gestionamos tu ${nombreProd} bajo la modalidad "${nombreEmis}" con entrega de código PNR real, reserva de retorno activa, hotel verificable y seguro Schengen 30.000€.`,
              zonaOMunicipioMadrid: "Madrid (MAD)",
              origenPasajero: nombreDistrito,
              modalidadClave: nombreEmis,
              precioDesdeUSD: precio,
              keywords: [
                `${slugProd.replace(/-/g, " ")} en ${nombreDistrito.toLowerCase()}`,
                `agencia de viajes a madrid en ${nombreDistrito.toLowerCase()}`,
                `paquete migratorio madrid ${nombreDistrito.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: `¿Cómo contrato "${nombreProd}" si vivo en ${nombreDistrito}?`,
                  a: `Atendemos a todos los pasajeros de ${nombreDistrito} tanto por WhatsApp (+51 944 103 890) como presencialmente en nuestra oficina de Av. Universitaria 2029 (Los Olivos), entregándote tu contrato y comprobante electrónico SUNAT (RUC 20614914239).`,
                },
                {
                  q: `¿Qué ventaja me da la opción "${nombreEmis}" desde ${nombreDistrito}?`,
                  a: `Te permite asegurar tu tarifa oficial Desde $${precio} USD con emisión verificable en aerolínea y check-in realizado directamente por tu asesor asignado.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  // 3. SILO 3: 30 Provincias del Perú × 12 Meses × 6 Paquetes Madrid = 2,160
  for (const [nombreProv, slugProv, suplementoProv] of PROVINCIAS_PERU_30) {
    for (const [nombreMes, slugMes, factorMes] of MESES_MADRID_12) {
      for (const [slugPaq, nombrePaq, precioBase] of PAQUETES_PROVINCIA_MADRID_6) {
        const idxActual = contador++;
        const slug = `desde-${slugProv}-en-${slugMes}-${slugPaq}`;
        const precio = Math.round(((precioBase + suplementoProv) * factorMes) / 10) * 10;
        const titulo = `${nombrePaq} desde ${nombreProv} en ${nombreMes}`;

        lista.push({
          slug,
          silo: "provincias-madrid",
          siloNombre: `Salidas desde ${nombreProv} a Madrid`,
          titulo,
          zonaOMunicipio: "Madrid (España)",
          modalidad: `${nombrePaq} (${nombreMes})`,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "provincias-madrid",
              siloNombre: `Salidas desde ${nombreProv} a Madrid`,
              badgeSuperior: `Viajeros de ${nombreProv} · Salidas ${nombreMes} 2026`,
              codigoRuta: `${nombreProv.slice(0, 3).toUpperCase()} / LIM → MAD`,
              terminalBarajas: "Terminal T4 / T1 Madrid-Barajas",
              aerolineaDestacada: "Conexión desde " + nombreProv + " + Vuelo a Madrid",
              tituloPrincipal: `Viajes a Madrid desde ${nombreProv} en ${nombreMes}:`,
              subtituloDorado: `${nombrePaq} Desde $${precio} USD`,
              resumenEjecutivo: `Programa integral para pasajeros de ${nombreProv} que viajan a Madrid en el mes de ${nombreMes}. Coordinamos tu salida conectando con el Aeropuerto Jorge Chávez, tu boleto internacional LIM → MAD, reserva de retorno RF 24h, hotel verificable y seguro Schengen.`,
              zonaOMunicipioMadrid: "Madrid (MAD)",
              origenPasajero: `${nombreProv} (vía Lima)`,
              modalidadClave: `Salida ${nombreMes}`,
              precioDesdeUSD: precio,
              keywords: [
                `viajar a madrid desde ${nombreProv.toLowerCase()} en ${nombreMes.toLowerCase()}`,
                `paquete migratorio madrid desde ${nombreProv.toLowerCase()}`,
                `pasajes a espana desde ${nombreProv.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: `Soy de ${nombreProv}, ¿cómo gestiono mi paquete a Madrid para el mes de ${nombreMes}?`,
                  a: `Emitimos tu expediente completo de manera 100% digital por WhatsApp (+51 944 103 890) y videollamada con factura electrónica SUNAT, o puedes recoger tu carpeta impresa al pasar por Lima rumbo al Aeropuerto Jorge Chávez.`,
                },
                {
                  q: `¿Cuál es la tarifa en ${nombreMes} saliendo desde ${nombreProv}?`,
                  a: `La tarifa referencial para ${nombreMes} parte Desde $${precio} USD por pasajero y puedes congelarla hoy mismo abonando el 50% de inicial.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  // 4. SILO 4: 30 Barrios de Madrid con Comunidad Peruana × 10 Perfiles × 5 Duraciones = 1,500
  for (const [nombreBarrio, slugBarrio] of BARRIOS_COMUNIDAD_PERUANA_30) {
    for (const [slugPerfil, nombrePerfil, precioBase] of PERFILES_VIAJERO_MADRID_10) {
      for (const [slugDur, nombreDur, factorDur] of DURACIONES_ESTADIA_MADRID_5) {
        const idxActual = contador++;
        const slug = `destino-${slugBarrio}-${slugPerfil}-${slugDur}`;
        const precio = Math.max(75, Math.round((precioBase * factorDur) / 5) * 5);
        const titulo = `Viajar a ${nombreBarrio} (Madrid): ${nombrePerfil} — ${nombreDur}`;

        lista.push({
          slug,
          silo: "comunidad-peruana-madrid",
          siloNombre: `Comunidad Peruana en ${nombreBarrio}`,
          titulo,
          zonaOMunicipio: `${nombreBarrio} (Madrid)`,
          modalidad: nombrePerfil,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "comunidad-peruana-madrid",
              siloNombre: `Comunidad Peruana en ${nombreBarrio}`,
              badgeSuperior: `Destino ${nombreBarrio} · ${nombreDur}`,
              codigoRuta: "LIM → MAD",
              terminalBarajas: "Aeropuerto Madrid-Barajas (Conexión Metro/Cercanías)",
              aerolineaDestacada: "Iberia · Air Europa · Plus Ultra · LATAM",
              tituloPrincipal: `Viaje a ${nombreBarrio} (Madrid):`,
              subtituloDorado: `${nombrePerfil} Desde $${precio} USD`,
              resumenEjecutivo: `Especialistas en peruanos que viajan a ${nombreBarrio} en Madrid bajo la modalidad "${nombrePerfil}" (${nombreDur}). Alineamos tu vuelo, tu reserva de retorno activa (MAD → LIM) y tu alojamiento o Carta de Invitación en ${nombreBarrio}.`,
              zonaOMunicipioMadrid: `${nombreBarrio}, Madrid`,
              origenPasajero: "Lima, Perú",
              modalidadClave: nombreDur.slice(0, 28),
              precioDesdeUSD: precio,
              keywords: [
                `viajar a ${nombreBarrio.toLowerCase()} madrid desde lima`,
                `${nombrePerfil.toLowerCase()} ${nombreBarrio.toLowerCase()}`,
                `peruanos en ${nombreBarrio.toLowerCase()} pasajes`,
              ],
              faqsExtra: [
                {
                  q: `Mi familiar vive en ${nombreBarrio} (Madrid), ¿cómo armamos el expediente de "${nombrePerfil}"?`,
                  a: `Si tu familiar en ${nombreBarrio} te envió Carta de Invitación, emitimos tu vuelo y retorno exactamente por los días de la carta. Si viajas sin carta, emitimos tu reserva de hotel verificable en Madrid junto con tu retorno RF y seguro Schengen.`,
                },
                {
                  q: `¿Qué bolsa de viaje necesito para "${nombreDur}" en ${nombreBarrio}?`,
                  a: `La norma oficial BOE 2026 exige 122,10 € por día con un mínimo de 1.098,90 € por persona (de 1 a 9 días). Nuestros asesores calibran tus fechas para que tu expediente sea 100% sólido.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  // 5. SILO 5: 24 Servicios Reales de BD × 12 Meses × 5 Variantes = 1,440
  for (const [slugServ, nombreServ, precioBase] of SERVICIOS_ESPECIALES_BD_24) {
    for (const [nombreMes, slugMes, factorMes] of MESES_MADRID_12) {
      for (const [slugVar, nombreVar, factorVar] of VARIANTES_ATENCION_5) {
        const idxActual = contador++;
        const slug = `servicio-${slugServ}-${slugMes}-${slugVar}`;
        const precio = Math.max(35, Math.round((precioBase * factorMes * factorVar) / 5) * 5);
        const titulo = `${nombreServ} en ${nombreMes} — ${nombreVar}`;

        lista.push({
          slug,
          silo: "expediente-servicios-madrid",
          siloNombre: "Servicios y Expedientes Migratorios Madrid",
          titulo,
          zonaOMunicipio: "Madrid (MAD)",
          modalidad: nombreServ,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "expediente-servicios-madrid",
              siloNombre: "Servicios y Expedientes Migratorios Madrid",
              badgeSuperior: `${nombreVar} · Temporada ${nombreMes}`,
              codigoRuta: slugServ.includes("madrid-a-lima") ? "MAD → LIM" : "LIM → MAD",
              terminalBarajas: "Aeropuerto Adolfo Suárez Madrid-Barajas (T4 / T1)",
              aerolineaDestacada: "Emisión Verificable PNR + IATA",
              tituloPrincipal: `${nombreServ}`,
              subtituloDorado: `Temporada ${nombreMes} Desde $${precio} USD`,
              resumenEjecutivo: `Solicita hoy "${nombreServ}" para el mes de ${nombreMes} bajo nuestra modalidad "${nombreVar}". Más de 400 ventas registradas a Madrid respaldan nuestra gestión en Lima Norte (RUC 20614914239).`,
              zonaOMunicipioMadrid: "Madrid (Barajas)",
              origenPasajero: "Perú / España",
              modalidadClave: nombreVar,
              precioDesdeUSD: precio,
              keywords: [
                `${slugServ.replace(/-/g, " ")} ${nombreMes.toLowerCase()}`,
                `${nombreServ.toLowerCase()} precio`,
                `cityland travel madrid ${slugMes}`,
              ],
              faqsExtra: [
                {
                  q: `¿Cómo solicito "${nombreServ}" para viajar en ${nombreMes}?`,
                  a: `Escríbenos por WhatsApp al +51 944 103 890 o visítanos en Av. Universitaria 2029 (Los Olivos). Emitimos tu documentación oficial desde $${precio} USD con comprobante electrónico SUNAT.`,
                },
                {
                  q: `¿En cuánto tiempo me entregan mi código PNR o carpeta verificable?`,
                  a: `El código PNR de aerolínea, voucher de hotel y póliza Schengen se emiten el mismo día de tu reserva, y nuestro asesor se encarga personalmente de tu check-in antes del vuelo.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  return lista;
}

export const INDICE_MADRID_10K: ResumenLandingMadrid[] = generarIndiceMadrid10k();

const MAPA_MADRID_10K = new Map<string, ResumenLandingMadrid>(
  INDICE_MADRID_10K.map((item) => [item.slug, item])
);

export function buscarLandingMadrid10k(slug: string): DatosLandingMadridSEO | undefined {
  const entrada = MAPA_MADRID_10K.get(slug);
  return entrada ? entrada.constructorDatos() : undefined;
}
