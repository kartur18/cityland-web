import type { DatosLandingMadridSEO } from "@/components/MadridMigratorioTemplate";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";
import { construirPlanesMadrid, textosMetaMadrid } from "@/lib/planes-madrid";
import { tipoDeProductoMadrid, type TipoProductoMadrid } from "@/lib/tipo-producto-madrid";

export interface ResumenLandingMadrid {
  slug: string;
  silo: string;
  siloNombre: string;
  titulo: string;
  zonaOMunicipio: string;
  modalidad: string;
  tipo: TipoProductoMadrid;
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
  tipo: TipoProductoMadrid;
  nombreProducto: string;
  precioDesdeUSD: number;
  precioCarpetaSolaUSD?: number;
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
    tipo,
    nombreProducto,
    precioDesdeUSD,
    precioCarpetaSolaUSD = 85,
    keywords,
    faqsExtra,
    indiceSemilla,
  } = params;

  const galeria = obtenerGaleriaPorTexto(
    `${zonaOMunicipioMadrid} ${slug}`,
    "espana"
  );
  const FOTOS_MADRID_ROTAR = [
    "/images/espana/gran-via-metropolis.jpg",
    "/images/espana/palacio-real.jpg",
    "/images/espana/puerta-de-alcala.jpg",
    "/images/espana/plaza-mayor.jpg",
    "/images/espana/cibeles.jpg",
  ];
  const img0 =
    galeria[0] === "/images/espana/gran-via-metropolis.jpg"
      ? FOTOS_MADRID_ROTAR[indiceSemilla % FOTOS_MADRID_ROTAR.length]
      : galeria[0];
  const img1 = "/images/espana/barajas.jpg";

  const mitad = Math.max(35, Math.round(precioDesdeUSD * 0.5));
  const precioFmt = precioDesdeUSD.toLocaleString("en-US");
  const mitadFmt = mitad.toLocaleString("en-US");

  const tituloSinDosPuntos = tituloPrincipal.replace(/:\s*$/, "").trim();
  const baseTitle = `${tituloSinDosPuntos} Desde $${precioFmt} | Cityland`;
  let metaTitle = baseTitle;
  if (baseTitle.length > 60) {
    const recorte = tituloSinDosPuntos.slice(0, 38);
    const ultEspacio = recorte.lastIndexOf(" ");
    const limpio = (ultEspacio > 18 ? recorte.slice(0, ultEspacio) : recorte)
      .replace(/[\s(:—–-]+$/, "")
      .replace(/\([^)]*$/, "")
      .trim();
    metaTitle = `${limpio} Desde $${precioFmt} | Cityland`;
  }

  const textos = textosMetaMadrid({
    tipo,
    tituloSinDosPuntos,
    subtituloDorado,
    mitadFmt,
    precioFmt,
    zona: zonaOMunicipioMadrid,
    nombreProducto,
    precioCarpetaSolaUSD,
    salvedadLegal: SALVEDAD_LEGAL,
  });
  const descRaw = textos.descripcion;
  const metaDescription =
    descRaw.length > 156 ? `${descRaw.slice(0, 153).trim()}...` : descRaw;

  // Enlaces relacionados determinísticos dentro del silo /madrid/[slug]
  const totalActual = INDICE_MADRID_10K.length;
  const enlacesRelacionados: DatosLandingMadridSEO["enlacesRelacionados"] = [];
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
          tipo: item.tipo,
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
    tipo,
    precioDesdeUSD,
    precioCarpetaSolaUSD,
    imagenHero: img0,
    imagenSecundaria: img1,
    metaTitle,
    metaDescription,
    keywords,
    planesReales: construirPlanesMadrid({
      tipo,
      zona: zonaOMunicipioMadrid,
      codigoRuta,
      aerolinea: aerolineaDestacada,
      precio: precioDesdeUSD,
      nombreProducto,
    }),
    pasosExpediente: [
      {
        paso: "01",
        titulo: "Diagnóstico (Hotel o Carta)",
        detalle: `Definimos si ingresarás por ${terminalBarajas} con Reserva de Hotel verificable o Carta de Invitación en ${zonaOMunicipioMadrid}, y calculamos tu bolsa BOE.`,
      },
      {
        paso: "02",
        titulo: `Reserva con 50% ($${mitadFmt} USD)`,
        detalle: `Congelas tu tarifa en nuestra oficina de Los Olivos o por cuentas empresa BCP/BBVA/Interbank y emitimos tu código PNR real.`,
      },
      {
        paso: "03",
        titulo: "Retorno RF 24h + Hotel + Seguro",
        detalle:
          "Antes de tu vuelo activamos tu reserva de retorno MAD → LIM en sistema, tu voucher hotelero verificable y tu seguro Schengen de 30.000€.",
      },
      {
        paso: "04",
        titulo: "Check-in y Carpeta Lista",
        detalle:
          "Realizamos tu check-in, asignamos tu asiento y te entregamos tu carpeta impresa o digital.",
      },
    ],
    checklistBarajas: [
      {
        requisito: "Boleto de Regreso",
        detalleOficial:
          "Si la policía lo pide, la norma española (Orden PRE/1282/2007) exige boleto de regreso a tu nombre, intransferible y con fecha fija.",
        comoTeAyudamos:
          "Según lo que elijas: reserva de retorno MAD → LIM (no es un boleto emitido) o boleto de ida y vuelta emitido.",
      },
      {
        requisito: `Alojamiento en ${zonaOMunicipioMadrid} o Carta de Invitación`,
        detalleOficial:
          "Debes acreditar hospedaje por todos los días declarados mediante reserva hotelera vigente o Carta de Invitación Policial en España.",
        comoTeAyudamos:
          "Emitimos tu voucher de hotel verificable calibrado a tus fechas, o alineamos tu vuelo a los días exactos de tu Carta de Invitación.",
      },
      {
        requisito: "Medios Económicos BOE 2026 (Bolsa de Viaje)",
        detalleOficial:
          "La normativa española exige acreditar 122,10 € por día de estancia, con un mínimo obligatorio de 1.098,90 € por pasajero.",
        comoTeAyudamos:
          "Calibramos los días de tu estadía (ej. 9 a 15 días) para que tu bolsa de viaje sea 100% coherente con tu presupuesto.",
      },
      {
        requisito: "Seguro Médico de Viaje (recomendable)",
        detalleOficial:
          "Para peruanos que entran sin visa, el Consulado de España en Lima lo considera recomendable, no obligatorio. Francia sí lo exige.",
        comoTeAyudamos:
          "Incluimos tu póliza de 30.000 € en español.",
      },
    ],
    faqs: [...faqsExtra, ...textos.faqs],
    enlacesRelacionados,
  };
}

// ============================================================================
// SILO 1: 50 ZONAS DE MADRID Y CIUDADES CONECTADAS VÍA BARAJAS × 10 MODALIDADES × 5 AEROLÍNEAS = 2,500 PÁGINAS
// ============================================================================
const ZONAS_Y_CONEXIONES_MADRID_50: [string, string, number, string][] = [
  ["Madrid Centro", "madrid-centro-sol", 869, "Terminal T4 / T1 Madrid-Barajas"],
  ["Puente de Vallecas (Madrid)", "puente-de-vallecas-madrid", 869, "Conexión directa desde Madrid-Barajas"],
  ["Carabanchel (Madrid)", "carabanchel-madrid", 869, "Zona Sur de Madrid · Comunidad Peruana"],
  ["Usera (Madrid)", "usera-madrid", 869, "Madrid Río y Usera · Conexión Barajas"],
  ["Ciudad Lineal (Madrid)", "ciudad-lineal-madrid", 869, "A 15 minutos de Madrid-Barajas"],
  ["Latina y Aluche (Madrid)", "latina-aluche-madrid", 869, "Conexión directa desde Madrid-Barajas"],
  ["Villaverde (Madrid)", "villaverde-madrid", 869, "Cercanías Renfe desde Barajas T4"],
  ["Tetuán y Cuatro Caminos", "tetuan-cuatro-caminos-madrid", 869, "Eje Castellana y Nuevos Ministerios"],
  ["San Blas-Canillejas", "san-blas-canillejas-madrid", 869, "Distrito contiguo a Madrid-Barajas"],
  ["Hortaleza (Madrid)", "hortaleza-madrid", 869, "A 10 minutos de Barajas T4"],
  ["Alcalá de Henares", "alcala-de-henares-madrid", 879, "Corredor del Henares · A 20 min de Barajas"],
  ["Móstoles (Madrid)", "mostoles-madrid", 879, "Área Metropolitana Sur de Madrid"],
  ["Fuenlabrada (Madrid)", "fuenlabrada-madrid", 879, "Conexión Cercanías desde Atocha y Barajas"],
  ["Leganés (Madrid)", "leganes-madrid", 879, "Área Metropolitana Sur de Madrid"],
  ["Getafe (Madrid)", "getafe-madrid", 879, "Conexión directa desde Madrid-Barajas"],
  ["Alcorcón (Madrid)", "alcorcon-madrid", 879, "Metro Línea 10 y Cercanías Madrid"],
  ["Parla (Madrid)", "parla-madrid", 879, "Cercanías C4 directo desde Madrid"],
  ["Torrejón de Ardoz", "torrejon-de-ardoz-madrid", 869, "A 12 minutos de Madrid-Barajas"],
  ["Alcobendas y San Sebastián", "alcobendas-madrid", 869, "Junto a la Terminal T4 de Barajas"],
  ["Coslada y San Fernando", "coslada-madrid", 869, "Acceso inmediato desde Barajas T1 y T4"],
  ["Pozuelo y Majadahonda", "pozuelo-majadahonda-madrid", 889, "Zona Noroeste de Madrid"],
  ["Las Rozas y Villalba", "las-rozas-villalba-madrid", 889, "Sierra Noroeste de Madrid"],
  ["Rivas y Arganda del Rey", "rivas-arganda-madrid", 879, "Sureste de la Comunidad de Madrid"],
  ["Aranjuez y Valdemoro", "aranjuez-valdemoro-madrid", 889, "Eje Sur de la Comunidad de Madrid"],
  ["Toledo vía Madrid", "toledo-via-madrid", 899, "Llegada a Barajas + 33 min en tren AVE"],
  ["Guadalajara vía Madrid", "guadalajara-via-madrid", 889, "A 30 minutos de Madrid-Barajas"],
  ["Segovia y Ávila vía Madrid", "segovia-avila-via-madrid", 899, "Conexión desde Madrid-Chamartín"],
  ["Valladolid vía Madrid", "valladolid-via-madrid", 919, "Llegada por Barajas + tren alta velocidad"],
  ["Salamanca vía Madrid", "salamanca-via-madrid", 919, "Ingreso por Madrid-Barajas + conexión"],
  ["Burgos vía Madrid", "burgos-via-madrid", 929, "Vuelo a Madrid-Barajas + enlace norte"],
  ["León y Zamora vía Madrid", "leon-zamora-via-madrid", 929, "Vuelo Lima – Madrid + conexión directa"],
  ["Zaragoza vía Madrid", "zaragoza-via-madrid", 929, "Llegada a Madrid + 1h15 en tren AVE"],
  ["Valencia vía Madrid", "valencia-via-madrid", 939, "Ingreso por Madrid-Barajas + conexión"],
  ["Alicante vía Madrid", "alicante-via-madrid", 949, "Ruta vía Madrid-Barajas a Costa Blanca"],
  ["Murcia vía Madrid", "murcia-via-madrid", 949, "Conexión directa desde Madrid-Barajas"],
  ["Sevilla vía Madrid", "sevilla-via-madrid", 949, "Vuelo a Madrid-Barajas + enlace Andalucía"],
  ["Málaga vía Madrid", "malaga-via-madrid", 949, "Llegada por Madrid + Costa del Sol"],
  ["Córdoba y Granada vía Madrid", "cordoba-granada-via-madrid", 949, "Ruta Lima – Madrid + enlace Andalucía"],
  ["Bilbao vía Madrid", "bilbao-via-madrid", 959, "Vuelo Lima – Madrid – Bilbao con PNR"],
  ["San Sebastián vía Madrid", "san-sebastian-via-madrid", 959, "Conexión al País Vasco vía Barajas"],
  ["Santander vía Madrid", "santander-via-madrid", 949, "Ruta aérea Lima – Madrid – Santander"],
  ["Asturias (Gijón/Oviedo) vía Madrid", "asturias-gijon-oviedo-via-madrid", 949, "Conexión a Asturias vía Madrid-Barajas"],
  ["Galicia (Vigo/A Coruña) vía Madrid", "galicia-vigo-coruna-via-madrid", 959, "Conexión a Galicia vía Barajas T4"],
  ["Pamplona vía Madrid", "pamplona-navarra-via-madrid", 949, "Ingreso por Madrid-Barajas a Navarra"],
  ["Logroño vía Madrid", "logrono-la-rioja-via-madrid", 939, "Conexión a La Rioja vía Madrid"],
  ["Albacete y Ciudad Real vía Madrid", "albacete-ciudad-real-via-madrid", 919, "Conexión a Castilla-La Mancha"],
  ["Cáceres y Badajoz vía Madrid", "extremadura-caceres-badajoz-via-madrid", 929, "Conexión a Extremadura desde Madrid"],
  ["Mallorca e Ibiza vía Madrid", "mallorca-ibiza-via-madrid", 969, "Vuelo Lima – Madrid – Islas Baleares"],
  ["Tenerife y Canarias vía Madrid", "canarias-tenerife-via-madrid", 989, "Vuelo Lima – Madrid – Islas Canarias"],
  ["Barcelona vía Madrid", "barcelona-via-madrid", 939, "Conexión aérea o tren AVE desde Madrid"],
];

const MODALIDADES_MADRID_10: [string, string, number, string][] = [
  [
    "paquete-migratorio-completo",
    "Paquete Migratorio Completo",
    1.0,
    "Incluye boleto aéreo desde el Aeropuerto Jorge Chávez (LIM), reserva de retorno activa (RF 24h), hotel verificable y seguro Schengen 30.000€",
  ],
  [
    "vuelo-con-reserva-retorno-rf",
    "Boleto + Retorno RF Activo 24h",
    0.96,
    "Boleto principal saliendo de Lima (LIM) más reserva de retorno PNR verificable en sistema para control migratorio en Madrid-Barajas",
  ],
  [
    "visita-familiar-carta-invitacion",
    "Viaje con Carta de Invitación",
    0.95,
    "Calibramos tu boleto desde Lima (LIM) y tu reserva de retorno exactamente a las fechas de tu Carta de Invitación Policial en España",
  ],
  [
    "primer-viaje-sin-carta-con-hotel",
    "Primer Viaje con Reserva de Hotel",
    1.0,
    "Carpeta turística completa sin Carta de Invitación: incluye vuelo desde Lima (LIM), voucher de hotel verificable, retorno RF y seguro 30.000€",
  ],
  [
    "boleto-solo-ida-visa-residencia",
    "Boleto Solo Ida (Visa o Residencia)",
    0.88,
    "Tarifa especial de solo ida desde Lima (LIM) para pasajeros con visado de estudios, trabajo, reagrupación familiar o DNI/TIE español",
  ],
  [
    "pasaje-con-2-maletas-23kg",
    "Pasaje con 2 Maletas de 23 kg",
    1.08,
    "Tarifa con doble franquicia en bodega (2x23 kg) más equipaje de mano de 10 kg saliendo del Aeropuerto Jorge Chávez (LIM)",
  ],
  [
    "vuelo-retorno-madrid-a-lima",
    "Boleto de Retorno Madrid → Lima",
    0.86,
    "Pasajes confirmados desde Madrid-Barajas hacia Lima o comprados desde España para traer a tus familiares desde el Perú",
  ],
  [
    "viaje-padres-adultos-mayores",
    "Viaje para Adultos Mayores",
    1.01,
    "Incluye asistencia especial / silla de ruedas en el Aeropuerto Jorge Chávez (LIM) y en Madrid-Barajas, check-in por asesor y carpeta impresa",
  ],
  [
    "viaje-familiar-con-ninos",
    "Paquete Familiar (Asientos Juntos)",
    0.97,
    "Tarifa familiar desde Lima (LIM) con asientos contiguos garantizados, orientación de permiso notarial de menores y carpeta completa",
  ],
  [
    "vuelo-ida-y-vuelta-cerrado",
    "Paquete Ida y Vuelta Confirmado",
    1.24,
    "Boleto aéreo ida y vuelta cerrado con fechas fijas desde Lima (LIM), alojamiento verificable y seguro médico Schengen 30.000€",
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
// SILO 2: 40 DURACIONES Y PLANES DE BOLSA DE VIAJE BOE 2026 DESDE LIMA (LIM) × 10 PRODUCTOS × 6 MODALIDADES = 2,400 PÁGINAS
// ============================================================================
const PLANES_ESTADIA_BOE_MADRID_40: [string, string, string][] = [
  ["Estadía 7 Días / 6 Noches en Madrid", "estadia-7-dias-6-noches", "Bolsa mínima BOE 2026: 1.098,90 € · Salida Aeropuerto Jorge Chávez (LIM)"],
  ["Estadía 8 Días / 7 Noches en Madrid", "estadia-8-dias-7-noches", "Bolsa mínima BOE 2026: 1.098,90 € · Salida Aeropuerto Jorge Chávez (LIM)"],
  ["Estadía 9 Días / 8 Noches (Tramo Mínimo BOE)", "estadia-9-dias-8-noches-boe", "Calibrado exactamente al tramo mínimo BOE de 1.098,90 € desde Lima (LIM)"],
  ["Estadía 10 Días / 9 Noches en Madrid", "estadia-10-dias-9-noches", "Bolsa referencial BOE: 1.221,00 € · Vuelo desde Lima (LIM)"],
  ["Estadía 11 Días / 10 Noches en Madrid", "estadia-11-dias-10-noches", "Bolsa referencial BOE: 1.343,10 € · Vuelo desde Lima (LIM)"],
  ["Estadía 12 Días / 11 Noches en Madrid", "estadia-12-dias-11-noches", "Bolsa referencial BOE: 1.465,20 € · Vuelo desde Lima (LIM)"],
  ["Estadía 13 Días / 12 Noches en Madrid", "estadia-13-dias-12-noches", "Bolsa referencial BOE: 1.587,30 € · Vuelo desde Lima (LIM)"],
  ["Estadía 14 Días / 13 Noches (2 Semanas)", "estadia-14-dias-2-semanas", "Bolsa referencial BOE: 1.709,40 € · Vuelo desde Lima (LIM)"],
  ["Estadía 15 Días / 14 Noches (Quincena)", "estadia-15-dias-quincena", "Bolsa referencial BOE: 1.831,50 € · Vuelo desde Lima (LIM)"],
  ["Estadía 16 Días / 15 Noches en España", "estadia-16-dias-espana", "Itinerario de 16 días saliendo del Aeropuerto Jorge Chávez (LIM)"],
  ["Estadía 18 Días / 17 Noches en Madrid", "estadia-18-dias-madrid", "Itinerario de 18 días con retorno activo desde Madrid-Barajas (MAD)"],
  ["Estadía 20 Días / 19 Noches en Madrid", "estadia-20-dias-madrid", "Itinerario de 20 días calibrado a tu Carta de Invitación o Reserva Hotelera"],
  ["Estadía 21 Días (3 Semanas en España)", "estadia-21-dias-3-semanas", "Programa de 3 semanas saliendo desde el Aeropuerto Jorge Chávez (LIM)"],
  ["Estadía 25 Días en Madrid y España", "estadia-25-dias-madrid", "Ideal para visita familiar con Carta de Invitación desde Lima (LIM)"],
  ["Estadía 30 Días (1 Mes Completo)", "estadia-30-dias-un-mes", "Visita familiar o vacaciones de 1 mes saliendo desde Lima (LIM)"],
  ["Estadía 45 Días en España", "estadia-45-dias-espana", "Estadía media de 45 días con seguro Schengen y retorno calibrado"],
  ["Estadía 60 Días (2 Meses en España)", "estadia-60-dias-dos-meses", "Programa de 60 días para visita familiar con Carta de Invitación"],
  ["Estadía 90 Días (Máximo Schengen)", "estadia-90-dias-maximo-schengen", "Plazo máximo de 90 días sin visa para peruanos saliendo de Lima (LIM)"],
  ["Salida Primera Quincena de Enero", "salida-enero-invierno-madrid", "Vuelos confirmados en enero desde el Aeropuerto Jorge Chávez (LIM)"],
  ["Salida Temporada Baja Febrero", "salida-febrero-tarifa-economica", "Tarifas promocionales en febrero saliendo desde Lima (LIM)"],
  ["Salida Marzo Inicio de Primavera", "salida-marzo-primavera-madrid", "Clima templado de primavera saliendo del Aeropuerto Jorge Chávez (LIM)"],
  ["Salida Especial Semana Santa Abril", "salida-abril-semana-santa-madrid", "Viaja en Semana Santa y abril desde el Aeropuerto Jorge Chávez (LIM)"],
  ["Salida Mayo Fiestas de San Isidro Madrid", "salida-mayo-san-isidro-madrid", "Temporada ideal de mayo saliendo desde Lima (LIM) hacia Barajas"],
  ["Salida Junio Inicio de Verano Europeo", "salida-junio-verano-europeo", "Inicio del verano español con vuelos desde el Jorge Chávez (LIM)"],
  ["Salida Julio Vacaciones y Fiestas Patrias", "salida-julio-fiestas-patrias", "Alta demanda de julio reservando con 50% desde Lima (LIM)"],
  ["Salida Agosto Vacaciones en Europa", "salida-agosto-verano-madrid", "Salidas de agosto confirmadas desde el Aeropuerto Jorge Chávez (LIM)"],
  ["Salida Septiembre Otoño Europeo", "salida-septiembre-otono-madrid", "Excelente temporada en septiembre saliendo desde Lima (LIM)"],
  ["Salida Octubre Fiesta Nacional España", "salida-octubre-madrid-barajas", "Vuelos de octubre con código PNR verificable desde Lima (LIM)"],
  ["Salida Noviembre Preventa Económica", "salida-noviembre-oferta-madrid", "Las mejores tarifas de otoño saliendo del Jorge Chávez (LIM)"],
  ["Salida Diciembre Navidad y Año Nuevo", "salida-diciembre-navidad-madrid", "Reencuentro familiar de Navidad en Madrid saliendo de Lima (LIM)"],
  ["Modalidad Individual (1 Pasajero)", "plan-individual-1-pasajero", "Expediente completo individual saliendo desde el Jorge Chávez (LIM)"],
  ["Modalidad Dúo Parejas (2 Pasajeros)", "plan-duo-2-pasajeros-parejas", "Asientos juntos y habitación doble verificable desde Lima (LIM)"],
  ["Modalidad Familiar (3 Pasajeros)", "plan-familiar-3-pasajeros", "Tarifa familiar para 3 viajeros saliendo del Aeropuerto Jorge Chávez (LIM)"],
  ["Modalidad Familiar (4 Pasajeros)", "plan-familiar-4-pasajeros", "Tarifa grupal familiar para 4 pasajeros desde Lima (LIM)"],
  ["Modalidad Con 1 Maleta 23 kg + Mano 10 kg", "franquicia-1-maleta-23kg", "Equipaje completo de bodega 23 kg + cabina 10 kg desde Lima (LIM)"],
  ["Modalidad Con 2 Maletas 23 kg (46 kg Bodega)", "franquicia-2-maletas-23kg", "Doble maleta de 23 kg en bodega saliendo del Jorge Chávez (LIM)"],
  ["Ingreso por Terminal T4 (Iberia / LATAM)", "ingreso-terminal-t4-barajas", "Llegada a la Terminal T4 de Madrid-Barajas desde Lima (LIM)"],
  ["Ingreso por Terminal T1 (Air Europa / Plus Ultra)", "ingreso-terminal-t1-barajas", "Llegada a la Terminal T1 de Madrid-Barajas desde Lima (LIM)"],
  ["Vuelo Nocturno desde Jorge Chávez (LIM)", "vuelo-nocturno-jorge-chavez", "Salida nocturna desde Lima (LIM) y llegada por la tarde a Madrid"],
  ["Vuelo Diurno desde Jorge Chávez (LIM)", "vuelo-diurno-jorge-chavez", "Salida de día desde Lima (LIM) y llegada a primera hora a Madrid"],
];

const PRODUCTOS_MADRID_10: [string, string, number][] = [
  ["paquete-migratorio-madrid", "Paquete Migratorio a Madrid", 869],
  ["solo-carpeta-migratoria-madrid", "Solo Carpeta Migratoria Madrid", 85],
  ["boleto-solo-ida-madrid", "Boleto Solo Ida Lima – Madrid", 769],
  ["vuelo-ida-vuelta-madrid", "Boleto Ida y Vuelta Lima – Madrid", 1090],
  ["viaje-madrid-carta-invitacion", "Viaje a Madrid con Carta de Invitación", 849],
  ["viaje-madrid-sin-carta-con-hotel", "Viaje a Madrid con Reserva de Hotel", 869],
  ["pasaje-madrid-2-maletas-23kg", "Vuelo a Madrid con 2 Maletas 23 kg", 939],
  ["pasaje-madrid-adultos-mayores", "Viaje a Madrid para Adultos Mayores", 879],
  ["vuelo-madrid-a-lima-retorno", "Pasaje de Madrid a Lima", 729],
  ["seguro-schengen-y-hotel-madrid", "Seguro Schengen 30.000€ + Hotel Madrid", 75],
];

const MODALIDADES_EMISION_6: [string, string, number][] = [
  ["separa-con-50-por-ciento", "Separa con 50% de Inicial", 1.0],
  ["emision-inmediata-pnr", "Emisión con Código PNR", 1.0],
  ["atencion-sede-los-olivos", "Atención en Sede Los Olivos", 1.0],
  ["pago-bcp-bbva-interbank-yape", "Pago BCP · BBVA · Interbank · Yape", 1.0],
  ["checkin-hecho-por-asesor", "Check-in Hecho por tu Asesor", 1.0],
  ["preventa-salidas-2026", "Preventa Salidas 2026", 0.96],
];

// ============================================================================
// SILO 3: 30 RUTAS Y CIRCUITOS DESDE LIMA (AEROPUERTO JORGE CHÁVEZ) VÍA MADRID × 12 MESES × 6 PAQUETES = 2,160 PÁGINAS
// ============================================================================
const RUTAS_CONEXION_BARAJAS_30: [string, string, number][] = [
  ["Madrid Directo (Barajas)", "lima-a-madrid-directo", 0],
  ["Madrid y Toledo", "lima-a-madrid-y-toledo", 20],
  ["Madrid y Segovia", "lima-a-madrid-y-segovia", 20],
  ["Madrid y Barcelona", "lima-a-madrid-y-barcelona", 45],
  ["Madrid y Valencia", "lima-a-madrid-y-valencia", 35],
  ["Madrid y Sevilla", "lima-a-madrid-y-sevilla", 45],
  ["Madrid, Córdoba y Granada", "lima-a-madrid-cordoba-granada", 55],
  ["Madrid y Málaga", "lima-a-madrid-y-malaga", 45],
  ["Madrid y Zaragoza", "lima-a-madrid-y-zaragoza", 30],
  ["Madrid y Bilbao", "lima-a-madrid-y-bilbao", 50],
  ["Madrid y San Sebastián", "lima-a-madrid-y-san-sebastian", 55],
  ["Madrid y Santiago de Compostela", "lima-a-madrid-y-santiago", 50],
  ["Madrid, Vigo y La Coruña", "lima-a-madrid-y-galicia", 55],
  ["Madrid y Asturias", "lima-a-madrid-y-asturias", 50],
  ["Madrid y Santander", "lima-a-madrid-y-santander", 50],
  ["Madrid y Alicante", "lima-a-madrid-y-alicante", 40],
  ["Madrid y Murcia", "lima-a-madrid-y-murcia", 40],
  ["Madrid, Valladolid y Salamanca", "lima-a-madrid-y-castilla", 30],
  ["Madrid y Palma de Mallorca", "lima-a-madrid-y-mallorca", 60],
  ["Madrid y Tenerife / Canarias", "lima-a-madrid-y-canarias", 75],
  ["Madrid, Lisboa y Fátima", "lima-a-madrid-y-lisboa-fatima", 60],
  ["Madrid y París", "lima-a-madrid-y-paris", 65],
  ["Madrid y Lourdes", "lima-a-madrid-y-lourdes", 65],
  ["Madrid y Roma", "lima-a-madrid-y-roma", 65],
  ["Madrid y Milán", "lima-a-madrid-y-milan", 65],
  ["Madrid, Florencia y Venecia", "lima-a-madrid-florencia-venecia", 80],
  ["Madrid y Turín / Génova", "lima-a-madrid-y-turin", 70],
  ["Madrid y Ámsterdam", "lima-a-madrid-y-amsterdam", 75],
  ["Madrid y Suiza (Zúrich)", "lima-a-madrid-y-suiza", 85],
  ["Madrid, París y Roma", "lima-a-madrid-paris-y-roma", 95],
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

const PAQUETES_RUTA_MADRID_6: [string, string, number][] = [
  ["paquete-migratorio-madrid", "Paquete Migratorio Completo", 869],
  ["primer-viaje-a-madrid", "Primer Viaje con Carpeta Completa", 879],
  ["madrid-con-carta-invitacion", "Modalidad con Carta de Invitación", 849],
  ["madrid-con-2-maletas-23kg", "Pasaje con 2 Maletas de 23 kg", 939],
  ["vuelo-ida-vuelta-madrid", "Paquete Ida y Vuelta Confirmado", 1090],
  ["boleto-solo-ida-madrid-visa", "Boleto Solo Ida (Visa o Residencia)", 769],
];

// ============================================================================
// SILO 4: 30 BARRIOS DE MADRID CON COMUNIDAD PERUANA × 10 PERFILES × 5 DURACIONES = 1,500 PÁGINAS
// ============================================================================
const BARRIOS_COMUNIDAD_PERUANA_30: [string, string][] = [
  ["Puente de Vallecas", "barrio-puente-de-vallecas"],
  ["Carabanchel", "barrio-carabanchel"],
  ["Usera", "barrio-usera"],
  ["Ciudad Lineal y Ventas", "barrio-ciudad-lineal"],
  ["Aluche y Latina", "barrio-aluche-latina"],
  ["Villaverde", "barrio-villaverde"],
  ["Cuatro Caminos y Tetuán", "barrio-cuatro-caminos-tetuan"],
  ["Puerta del Sol y Centro", "barrio-sol-lavapies"],
  ["Chamberí", "barrio-chamberi"],
  ["Atocha y Arganzuela", "barrio-arganzuela-atocha"],
  ["San Blas y Canillejas", "barrio-canillejas-san-blas"],
  ["Hortaleza", "barrio-hortaleza"],
  ["Moratalaz", "barrio-moratalaz"],
  ["Vicálvaro", "barrio-vicalvaro"],
  ["Villa de Vallecas", "barrio-villa-de-vallecas"],
  ["Barrio del Pilar", "barrio-del-pilar"],
  ["Moncloa y Argüelles", "barrio-moncloa"],
  ["Retiro y Pacífico", "barrio-retiro-pacifico"],
  ["Chamartín", "barrio-chamartin"],
  ["Barrio de Salamanca", "barrio-salamanca-goya"],
  ["Alcalá de Henares", "municipio-alcala-de-henares"],
  ["Móstoles", "municipio-mostoles"],
  ["Fuenlabrada", "municipio-fuenlabrada"],
  ["Leganés", "municipio-leganes"],
  ["Getafe", "municipio-getafe"],
  ["Alcorcón", "municipio-alcorcon"],
  ["Parla", "municipio-parla"],
  ["Torrejón de Ardoz", "municipio-torrejon-de-ardoz"],
  ["Alcobendas", "municipio-alcobendas"],
  ["San Sebastián de los Reyes", "municipio-san-sebastian-de-los-reyes"],
];

const PERFILES_VIAJERO_MADRID_10: [string, string, number][] = [
  ["visita-a-familiares-peruanos", "Visita Familiar con Carta de Invitación", 849],
  ["primer-viaje-con-reserva-hotel", "Primer Viaje con Reserva de Hotel", 869],
  ["paquete-migratorio-con-retorno-rf", "Paquete Migratorio + Retorno RF 24h", 869],
  ["viaje-de-padres-y-abuelos", "Viaje para Padres y Adultos Mayores", 879],
  ["viaje-de-esposos-y-parejas", "Paquete para Parejas y Esposos", 859],
  ["viaje-con-hijos-menores", "Viaje Familiar con Hijos Menores", 859],
  ["estudiantes-y-master-en-madrid", "Boleto para Estudiantes y Máster", 779],
  ["trabajadores-con-contrato-visa", "Boleto con Visa de Trabajo Aprobada", 769],
  ["comprado-desde-madrid-para-familia", "Pasaje Comprado desde España para Familia", 869],
  ["solo-reserva-hotel-y-retorno-rf", "Solo Reserva Hotel + Retorno RF", 85],
];

const DURACIONES_ESTADIA_MADRID_5: [string, string, number][] = [
  ["estadia-9-dias-bolsa-minima-boe", "Estadía 9 Días (Mínimo BOE)", 1.0],
  ["estadia-12-dias-recomendada", "Estadía 12 Días Recomendada", 1.0],
  ["estadia-15-dias-quincena", "Estadía 15 Días en Madrid", 1.02],
  ["estadia-30-dias-visita-familiar", "Estadía 30 Días Visita Familiar", 1.04],
  ["estadia-60-a-90-dias-schengen", "Estadía 60 a 90 Días Schengen", 1.06],
];

// ============================================================================
// SILO 5: 24 SERVICIOS Y CASOS REALES DE BD × 12 MESES × 5 VARIANTES = 1,440 PÁGINAS
// ============================================================================
const SERVICIOS_ESPECIALES_BD_24: [string, string, number][] = [
  ["paquete-solo-ida-migratorio-lima-madrid", "Paquete Migratorio Lima – Madrid", 869],
  ["reserva-retorno-rf-24h-madrid-lima", "Reserva de Retorno RF 24h (MAD → LIM)", 55],
  ["reserva-hotel-verificable-barajas-madrid", "Reserva de Hotel Verificable en Madrid", 45],
  ["carpeta-migratoria-completa-sin-vuelo-madrid", "Solo Carpeta Migratoria Completa Madrid", 95],
  ["seguro-medico-schengen-30000-euros-madrid", "Seguro Médico Schengen 30.000€ Oficial", 45],
  ["maleta-adicional-23kg-bodega-madrid", "Maleta Adicional 23 kg en Bodega a Madrid", 149],
  ["checkin-y-asignacion-asiento-madrid", "Check-in, Asiento y Revisión de Carpeta", 35],
  ["reprogramacion-cambio-fecha-vuelo-madrid", "Cambio de Fecha de Pasaje a Madrid", 149],
  ["vuelo-directo-iberia-lima-madrid-t4", "Vuelo Directo Iberia Lima – Madrid (T4)", 899],
  ["vuelo-directo-air-europa-lima-madrid-t1", "Vuelo Directo Air Europa Lima – Madrid (T1)", 869],
  ["vuelo-plus-ultra-lima-madrid-economico", "Boleto Plus Ultra Lima – Madrid con Equipaje", 839],
  ["vuelo-latam-lima-madrid-confirmado", "Boleto LATAM Lima – Madrid Confirmado", 869],
  ["boleto-madrid-a-lima-solo-ida", "Boleto Solo Ida Madrid → Lima", 719],
  ["boleto-madrid-lima-madrid-ida-vuelta", "Boleto Madrid – Lima – Madrid Confirmado", 1050],
  ["pasaje-lima-madrid-con-visa-de-trabajo", "Boleto Lima – Madrid con Visa de Trabajo", 769],
  ["pasaje-lima-madrid-con-visa-de-estudios", "Boleto Lima – Madrid para Estudiantes", 769],
  ["pasaje-lima-madrid-reagrupacion-familiar", "Boleto Lima – Madrid Reagrupación Familiar", 769],
  ["asesoria-carta-invitacion-madrid-peru", "Viaje a Madrid con Carta de Invitación", 849],
  ["asesoria-bolsa-de-viaje-boe-madrid-2026", "Paquete a Madrid Calibrado a Bolsa BOE", 869],
  ["paquete-familiar-4-a-6-pasajeros-madrid", "Tarifa Grupal Familiar a Madrid", 799],
  ["viaje-madrid-con-escala-bogota-avianca", "Vuelo Lima – Madrid vía Bogotá (Avianca)", 819],
  ["viaje-madrid-con-conexion-barcelona-bcn", "Paquete Migratorio Lima – Madrid / Barcelona", 899],
  ["viaje-madrid-con-conexion-roma-milan", "Paquete Migratorio Lima – Madrid / Italia", 929],
  ["viaje-madrid-con-conexion-paris-lyon", "Paquete Migratorio Lima – Madrid / París", 929],
];

const VARIANTES_ATENCION_5: [string, string, number][] = [
  ["tarifa-oficial-pnr", "Emisión Oficial PNR", 1.0],
  ["reserva-50-inicial", "Separa con 50%", 1.0],
  ["sede-los-olivos", "Sede Los Olivos", 1.0],
  ["atencion-whatsapp-24-7", "Atención WhatsApp", 1.0],
  ["preventa-garantizada", "Tarifa Preventa", 0.96],
];

// ============================================================================
// CONSTRUCCIÓN DE LAS 10,000 LANDINGS ESPECIALIZADAS EN /madrid/[slug]
// ============================================================================
function generarIndiceMadrid10k(): ResumenLandingMadrid[] {
  const lista: ResumenLandingMadrid[] = [];
  let contador = 0;

  // 1. SILO 1: 50 Zonas/Conexiones × 10 Modalidades × 5 Aerolíneas = 2,500
  for (const [zonaNombre, slugZona, precioBase] of ZONAS_Y_CONEXIONES_MADRID_50) {
    for (const [slugMod, nombreMod, factorMod, descMod] of MODALIDADES_MADRID_10) {
      for (const [slugAero, nombreAero, terminalAero, factorAero] of AEROLINEAS_BARAJAS_5) {
        const idxActual = contador++;
        const slug = `${slugZona}-${slugMod}-${slugAero}`;
        const precio = Math.round((precioBase * factorMod * factorAero) / 10) * 10;
        const titulo = `${zonaNombre}: ${nombreMod} (${nombreAero})`;
        const esRetorno = slugMod.includes("retorno-madrid-a-lima");
        const tipo = tipoDeProductoMadrid(slugMod);

        lista.push({
          slug,
          silo: "barajas-rutas",
          siloNombre: "Rutas y Modalidades Madrid-Barajas",
          titulo,
          zonaOMunicipio: zonaNombre,
          modalidad: nombreMod,
          tipo,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "barajas-rutas",
              siloNombre: "Rutas y Modalidades Madrid-Barajas",
              badgeSuperior: `${nombreAero} · ${terminalAero}`,
              codigoRuta: esRetorno ? "MAD → LIM" : "LIM → MAD",
              terminalBarajas: terminalAero,
              aerolineaDestacada: nombreAero,
              tituloPrincipal: `Viajes a ${zonaNombre}:`,
              subtituloDorado: `${nombreMod} Desde $${precio.toLocaleString("en-US")}`,
              resumenEjecutivo: `${descMod}. Operado con ${nombreAero} (${terminalAero}), entrega inmediata de código PNR y check-in realizado por tu asesor.`,
              zonaOMunicipioMadrid: zonaNombre,
              origenPasajero: esRetorno
                ? "Madrid-Barajas (MAD)"
                : "Lima — Aeropuerto Jorge Chávez (LIM)",
              modalidadClave: "PNR + Retorno RF",
              tipo,
              nombreProducto: nombreMod,
              precioDesdeUSD: precio,
              keywords: [
                `viajar a ${zonaNombre.toLowerCase()} desde lima`,
                `${nombreMod.toLowerCase()} madrid`,
                `paquete migratorio ${slugZona.replace(/-/g, " ")}`,
              ],
              faqsExtra: [
                {
                  q: `¿Qué incluye ${nombreMod} hacia ${zonaNombre} con ${nombreAero}?`,
                  a: `${descMod}. Llegarás por ${terminalAero} con tu código PNR activo en el sistema de ${nombreAero} y tu carpeta verificable lista.`,
                },
                {
                  q: `¿Con cuánto puedo separar mi viaje a ${zonaNombre}?`,
                  a: `Puedes congelar tu tarifa Desde $${precio.toLocaleString("en-US")} abonando el 50% de inicial en nuestra sede de Los Olivos (Av. Antúnez de Mayolo 814) o por BCP, BBVA e Interbank.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  // 2. SILO 2: 40 Planes de Estadía y Bolsa BOE 2026 desde Lima (LIM) × 10 Productos Madrid × 6 Modalidades = 2,400
  for (const [nombreEstadia, slugEstadia, detalleBoe] of PLANES_ESTADIA_BOE_MADRID_40) {
    for (const [slugProd, nombreProd, precioBase] of PRODUCTOS_MADRID_10) {
      for (const [slugEmis, nombreEmis, factorEmis] of MODALIDADES_EMISION_6) {
        const idxActual = contador++;
        const slug = `plan-${slugEstadia}-${slugProd}-${slugEmis}`;
        const precio = Math.max(45, Math.round((precioBase * factorEmis) / 5) * 5);
        const titulo = `${nombreProd}: ${nombreEstadia} · ${nombreEmis}`;
        const esRetorno = slugProd.includes("madrid-a-lima");
        const tipo = tipoDeProductoMadrid(slugProd);

        lista.push({
          slug,
          silo: "estadias-boe-madrid",
          siloNombre: `${nombreEstadia} · Salida desde Lima (LIM)`,
          titulo,
          zonaOMunicipio: "Madrid (Barajas T4 / T1)",
          modalidad: `${nombreProd} · ${nombreEstadia}`,
          tipo,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "estadias-boe-madrid",
              siloNombre: `${nombreEstadia} · Salida desde Lima (LIM)`,
              badgeSuperior: `Salida Jorge Chávez (LIM) · ${nombreEmis}`,
              codigoRuta: esRetorno ? "MAD → LIM" : "LIM → MAD",
              terminalBarajas: "Terminal T4 y T1 Madrid-Barajas",
              aerolineaDestacada: "Iberia · Air Europa · LATAM · Plus Ultra",
              tituloPrincipal: `${nombreProd} — ${nombreEstadia}:`,
              subtituloDorado: `${nombreEmis} Desde $${precio.toLocaleString("en-US")}`,
              resumenEjecutivo: `${detalleBoe}. Emitimos tu ${nombreProd.toLowerCase()} con código PNR verificable, reserva de retorno activa, hotel o Carta de Invitación y seguro Schengen 30.000€.`,
              zonaOMunicipioMadrid: "Madrid-Barajas (T4 / T1)",
              origenPasajero: "Lima — Aeropuerto Jorge Chávez (LIM)",
              modalidadClave: "Bolsa BOE Calibrada",
              tipo,
              nombreProducto: nombreProd,
              precioDesdeUSD: precio,
              keywords: [
                `${slugProd.replace(/-/g, " ")} ${slugEstadia.replace(/-/g, " ")}`,
                `viajar a madrid ${nombreEstadia.toLowerCase()} desde lima`,
                `paquete migratorio madrid ${nombreEmis.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: `¿Cómo se calibra el expediente para ${nombreEstadia}?`,
                  a: `${detalleBoe}. Alineamos tu boleto aéreo desde el Aeropuerto Jorge Chávez (LIM), tu reserva de retorno (MAD → LIM) y tu alojamiento exactamente por esa cantidad de días.`,
                },
                {
                  q: `¿Qué beneficio incluye la modalidad ${nombreEmis}?`,
                  a: `Te permite asegurar tu tarifa oficial Desde $${precio.toLocaleString("en-US")} con código PNR verificable, comprobante SUNAT (RUC 20614914239) y check-in hecho por tu asesor.`,
                },
              ],
              indiceSemilla: idxActual,
            }),
        });
      }
    }
  }

  // 3. SILO 3: 30 Rutas y Circuitos desde Lima (LIM) vía Madrid × 12 Meses × 6 Paquetes = 2,160
  for (const [nombreRutaEsp, slugRutaEsp, suplementoRuta] of RUTAS_CONEXION_BARAJAS_30) {
    for (const [nombreMes, slugMes, factorMes] of MESES_MADRID_12) {
      for (const [slugPaq, nombrePaq, precioBase] of PAQUETES_RUTA_MADRID_6) {
        const idxActual = contador++;
        const slug = `ruta-${slugRutaEsp}-en-${slugMes}-${slugPaq}`;
        const precio = Math.round(((precioBase + suplementoRuta) * factorMes) / 10) * 10;
        const titulo = `Viajes a ${nombreRutaEsp} en ${nombreMes}: ${nombrePaq}`;
        const tipo = tipoDeProductoMadrid(slugPaq);

        lista.push({
          slug,
          silo: "rutas-espana-barajas",
          siloNombre: `Rutas Lima (LIM) → ${nombreRutaEsp}`,
          titulo,
          zonaOMunicipio: nombreRutaEsp,
          modalidad: `${nombrePaq} · ${nombreMes}`,
          tipo,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "rutas-espana-barajas",
              siloNombre: `Rutas Lima (LIM) → ${nombreRutaEsp}`,
              badgeSuperior: `Salida Jorge Chávez (LIM) · ${nombreMes} 2026`,
              codigoRuta: "LIM → MAD",
              terminalBarajas: "Terminal T4 / T1 Madrid-Barajas",
              aerolineaDestacada: "Iberia · Air Europa · Plus Ultra · LATAM",
              tituloPrincipal: `Viajes a ${nombreRutaEsp} en ${nombreMes}:`,
              subtituloDorado: `${nombrePaq} Desde $${precio.toLocaleString("en-US")}`,
              resumenEjecutivo: `Salida desde el Aeropuerto Internacional Jorge Chávez (LIM) rumbo a ${nombreRutaEsp} en ${nombreMes}. Incluye vuelo con código PNR, retorno RF 24h, hotel verificable y seguro Schengen 30.000€.`,
              zonaOMunicipioMadrid: nombreRutaEsp,
              origenPasajero: "Lima — Aeropuerto Jorge Chávez (LIM)",
              modalidadClave: `Salida ${nombreMes}`,
              tipo,
              nombreProducto: nombrePaq,
              precioDesdeUSD: precio,
              keywords: [
                `viajar a ${nombreRutaEsp.toLowerCase()} desde lima en ${nombreMes.toLowerCase()}`,
                `paquete migratorio ${slugRutaEsp.replace(/-/g, " ")}`,
                `vuelos lima madrid ${nombreMes.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: `¿Cómo funciona la ruta desde Lima hacia ${nombreRutaEsp} en ${nombreMes}?`,
                  a: `Tu vuelo sale del Aeropuerto Internacional Jorge Chávez (LIM) ingresando por Madrid-Barajas (MAD) con tu expediente completo (PNR, retorno activo, alojamiento y seguro 30.000€).`,
                },
                {
                  q: `¿Cuál es la tarifa en ${nombreMes} para ${nombreRutaEsp} y con cuánto se separa?`,
                  a: `La tarifa referencial para ${nombreMes} parte Desde $${precio.toLocaleString("en-US")} y puedes congelarla hoy abonando el 50% de inicial en Los Olivos o por WhatsApp (+51 944 103 890).`,
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
        const duracionLimpia = nombreDur.replace(/\s*\([^)]*\)/g, "").trim();
        const tipo = tipoDeProductoMadrid(slugPerfil);

        lista.push({
          slug,
          silo: "comunidad-peruana-madrid",
          siloNombre: `Comunidad Peruana en ${nombreBarrio}`,
          titulo,
          zonaOMunicipio: `${nombreBarrio} (Madrid)`,
          modalidad: nombrePerfil,
          tipo,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "comunidad-peruana-madrid",
              siloNombre: `Comunidad Peruana en ${nombreBarrio}`,
              badgeSuperior: `Destino ${nombreBarrio} · ${nombreDur}`,
              codigoRuta: "LIM → MAD",
              terminalBarajas: "Terminal T4 / T1 Madrid-Barajas",
              aerolineaDestacada: "Iberia · Air Europa · Plus Ultra · LATAM",
              tituloPrincipal: `Viajes a ${nombreBarrio} (Madrid):`,
              subtituloDorado: `${nombrePerfil} Desde $${precio.toLocaleString("en-US")}`,
              resumenEjecutivo: `Programa saliendo del Aeropuerto Jorge Chávez (LIM) hacia ${nombreBarrio} en Madrid bajo la modalidad de ${nombrePerfil} (${duracionLimpia}), con retorno activo MAD → LIM, hotel o Carta de Invitación y seguro Schengen 30.000€.`,
              zonaOMunicipioMadrid: `${nombreBarrio}, Madrid`,
              origenPasajero: "Lima — Aeropuerto Jorge Chávez (LIM)",
              modalidadClave: "Carpeta + PNR",
              tipo,
              nombreProducto: nombrePerfil,
              precioDesdeUSD: precio,
              keywords: [
                `viajar a ${nombreBarrio.toLowerCase()} madrid desde lima`,
                `${nombrePerfil.toLowerCase()} ${nombreBarrio.toLowerCase()}`,
                `peruanos en ${nombreBarrio.toLowerCase()} pasajes`,
              ],
              faqsExtra: [
                {
                  q: `Mi familiar vive en ${nombreBarrio} (Madrid), ¿cómo armamos el expediente?`,
                  a: `Si cuentas con Carta de Invitación en ${nombreBarrio}, emitimos tu vuelo desde Lima (LIM) y retorno exactamente por esos días. Si viajas sin carta, incluimos reserva de hotel verificable en Madrid.`,
                },
                {
                  q: `¿Qué bolsa de viaje necesito para ${duracionLimpia.toLowerCase()} en ${nombreBarrio}?`,
                  a: `La norma oficial BOE 2026 exige 122,10 € por día con un mínimo de 1.098,90 € por pasajero (de 1 a 9 días). Nuestros asesores calibran tus fechas para que tu carpeta sea 100% coherente.`,
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
        const esRetorno = slugServ.includes("madrid-a-lima");
        const tipo = tipoDeProductoMadrid(slugServ);

        lista.push({
          slug,
          silo: "expediente-servicios-madrid",
          siloNombre: "Servicios y Expedientes Migratorios Madrid",
          titulo,
          zonaOMunicipio: "Madrid (MAD)",
          modalidad: nombreServ,
          tipo,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            crearObjetoMadrid({
              slug,
              silo: "expediente-servicios-madrid",
              siloNombre: "Servicios y Expedientes Migratorios Madrid",
              badgeSuperior: `${nombreVar} · Temporada ${nombreMes}`,
              codigoRuta: esRetorno ? "MAD → LIM" : "LIM → MAD",
              terminalBarajas: "Terminal T4 / T1 Madrid-Barajas",
              aerolineaDestacada: "Iberia · Air Europa · LATAM · Plus Ultra",
              tituloPrincipal: `${nombreServ} — ${nombreMes}:`,
              subtituloDorado: `${nombreVar} Desde $${precio.toLocaleString("en-US")}`,
              resumenEjecutivo: `Gestiona hoy tu ${nombreServ} para ${nombreMes} con código PNR real en sistema, check-in realizado por tu asesor y respaldo formal en nuestra sede de Los Olivos (RUC 20614914239).`,
              zonaOMunicipioMadrid: "Madrid-Barajas (MAD)",
              origenPasajero: esRetorno
                ? "Madrid-Barajas (MAD)"
                : "Lima — Aeropuerto Jorge Chávez (LIM)",
              modalidadClave: nombreVar,
              tipo,
              nombreProducto: nombreServ,
              precioDesdeUSD: precio,
              keywords: [
                `${slugServ.replace(/-/g, " ")} ${nombreMes.toLowerCase()}`,
                `${nombreServ.toLowerCase()} precio`,
                `cityland travel madrid ${slugMes}`,
              ],
              faqsExtra: [
                {
                  q: `¿Cómo solicito ${nombreServ} para viajar en ${nombreMes}?`,
                  a: `Escríbenos por WhatsApp al +51 944 103 890 o visítanos en Av. Antúnez de Mayolo 814 (Los Olivos). Emitimos tu documentación oficial desde $${precio.toLocaleString("en-US")} con comprobante SUNAT.`,
                },
                {
                  q: `¿En cuánto tiempo me entregan mi código PNR o carpeta verificable?`,
                  a: `El código PNR de aerolínea, voucher de hotel y póliza Schengen se emiten el mismo día de tu reserva, y nuestro asesor realiza personalmente tu check-in.`,
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
