import type { LandingComercialSEO } from "@/lib/catalogo-mil-landings-comerciales";
import type { ResumenLandingExpansion } from "@/lib/catalogo-expansion-masiva";

export type ConstructorObjetoLandingFn = (params: {
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
}) => LandingComercialSEO;

// ============================================================================
// BLOQUE 6: 50 CIUDADES EUROPEAS CON COMUNIDAD PERUANA × 10 MODALIDADES × 5 VARIANTES = 2,500 LANDINGS
// ============================================================================
const CIUDADES_EUROPA_COMUNIDAD_50: [string, string, string, number, string][] = [
  ["Madrid", "madrid", "España", 1090, "Aeropuerto Adolfo Suárez Madrid-Barajas (MAD)"],
  ["Barcelona", "barcelona", "España", 1120, "Aeropuerto Josep Tarradellas Barcelona-El Prat (BCN)"],
  ["Valencia", "valencia", "España", 1150, "Aeropuerto de Valencia-Manises (VLC) y AVE desde Madrid"],
  ["Sevilla", "sevilla", "España", 1160, "Aeropuerto de Sevilla-San Pablo (SVQ) y AVE"],
  ["Bilbao", "bilbao", "España", 1180, "Aeropuerto Internacional de Bilbao (BIO)"],
  ["Málaga", "malaga", "España", 1160, "Aeropuerto de Málaga-Costa del Sol (AGP)"],
  ["Zaragoza", "zaragoza", "España", 1150, "Conexión directa desde Madrid y Barcelona"],
  ["Palma de Mallorca", "palma-de-mallorca", "España", 1190, "Aeropuerto de Palma de Mallorca (PMI)"],
  ["Alicante", "alicante", "España", 1170, "Aeropuerto de Alicante-Elche Miguel Hernández (ALC)"],
  ["Murcia", "murcia", "España", 1170, "Aeropuerto Internacional Región de Murcia y conexión Madrid"],
  ["Valladolid", "valladolid", "España", 1150, "Conexión rápida desde Madrid-Barajas"],
  ["Granada", "granada", "España", 1170, "Aeropuerto Federico García Lorca Granada-Jaén (GRX)"],
  ["Córdoba", "cordoba-espana", "España", 1160, "Conexión en alta velocidad desde Madrid y Sevilla"],
  ["San Sebastián", "san-sebastian", "España", 1190, "Aeropuerto de San Sebastián (EAS) y conexión Bilbao"],
  ["Santander", "santander", "España", 1180, "Aeropuerto Seve Ballesteros-Santander (SDR)"],
  ["Vigo", "vigo", "España", 1180, "Aeropuerto de Vigo-Peinador (VGO)"],
  ["A Coruña", "a-coruna", "España", 1180, "Aeropuerto de A Coruña-Alvedro (LCG)"],
  ["Santiago de Compostela", "santiago-de-compostela", "España", 1180, "Aeropuerto de Santiago-Rosalía de Castro (SCQ)"],
  ["Gijón", "gijon", "España", 1180, "Aeropuerto de Asturias (OVD) y conexión Madrid"],
  ["Oviedo", "oviedo", "España", 1180, "Aeropuerto de Asturias (OVD)"],
  ["Pamplona", "pamplona", "España", 1180, "Aeropuerto de Pamplona (PNA) y conexión Madrid"],
  ["Logroño", "logrono", "España", 1170, "Conexión desde Madrid-Barajas y Bilbao"],
  ["Salamanca", "salamanca", "España", 1150, "Conexión directa desde Madrid-Barajas"],
  ["Toledo", "toledo", "España", 1140, "Conexión inmediata desde Madrid-Barajas"],
  ["Tenerife", "tenerife", "España", 1220, "Aeropuertos de Tenerife Norte (TFN) y Sur (TFS)"],
  ["Gran Canaria", "gran-canaria", "España", 1220, "Aeropuerto de Gran Canaria (LPA)"],
  ["Ibiza", "ibiza", "España", 1220, "Aeropuerto de Ibiza (IBZ)"],
  ["Milán", "milan", "Italia", 1180, "Aeropuertos de Milán-Malpensa (MXP) y Milán-Linate (LIN)"],
  ["Roma", "roma", "Italia", 1150, "Aeropuerto Internacional de Roma-Fiumicino (FCO)"],
  ["Turín", "turin", "Italia", 1210, "Aeropuerto de Turín-Caselle (TRN) y conexión Milán"],
  ["Florencia", "florencia", "Italia", 1190, "Aeropuerto de Florencia-Peretola (FLR) y conexión Roma"],
  ["Bolonia", "bolonia", "Italia", 1200, "Aeropuerto de Bolonia Guglielmo Marconi (BLQ)"],
  ["Génova", "genova", "Italia", 1210, "Aeropuerto de Génova-Cristoforo Colombo (GOA)"],
  ["Nápoles", "napoles", "Italia", 1190, "Aeropuerto Internacional de Nápoles-Capodichino (NAP)"],
  ["Venecia", "venecia", "Italia", 1210, "Aeropuerto de Venecia-Marco Polo (VCE)"],
  ["Verona", "verona", "Italia", 1210, "Aeropuerto de Verona-Villafranca (VRN)"],
  ["Bérgamo", "bergamo", "Italia", 1190, "Conexión directa con Milán y Lombardía"],
  ["Brescia", "brescia", "Italia", 1200, "Conexión directa por Milán-Malpensa y Linate"],
  ["Padua", "padua", "Italia", 1210, "Conexión por Venecia-Marco Polo y Bolonia"],
  ["Módena", "modena", "Italia", 1200, "Conexión por Aeropuerto de Bolonia (BLQ)"],
  ["Parma", "parma", "Italia", 1200, "Conexión entre Milán y Bolonia"],
  ["Bari", "bari", "Italia", 1220, "Aeropuerto de Bari-Palese (BRI)"],
  ["Palermo", "palermo", "Italia", 1230, "Aeropuerto de Palermo-Punta Raisi (PMO)"],
  ["París", "paris", "Francia", 1150, "Aeropuertos de París-Charles de Gaulle (CDG) y Orly (ORY)"],
  ["Lyon", "lyon", "Francia", 1190, "Aeropuerto de Lyon-Saint Exupéry (LYS)"],
  ["Niza", "niza", "Francia", 1220, "Aeropuerto de Niza Costa Azul (NCE)"],
  ["Marsella", "marsella", "Francia", 1210, "Aeropuerto de Marsella-Provenza (MRS)"],
  ["Lisboa", "lisboa", "Portugal", 1160, "Aeropuerto Humberto Delgado de Lisboa (LIS)"],
  ["Oporto", "oporto", "Portugal", 1180, "Aeropuerto Francisco Sá Carneiro de Oporto (OPO)"],
  ["Ámsterdam", "amsterdam", "Países Bajos", 1190, "Aeropuerto de Ámsterdam-Schiphol (AMS)"],
];

const MODALIDADES_MIGRATORIAS_10: [string, string, number, string][] = [
  [
    "visita-familiar-carta-invitacion",
    "Visita Familiar con Carta de Invitación",
    0.96,
    "Itinerario calibrado exactamente a las fechas de tu Carta de Invitación policial o Lettera di Invito / Dichiarazione di Ospitalità 48h",
  ],
  [
    "turismo-con-reserva-hotel",
    "Modalidad Turismo con Reserva de Hotel Verificable",
    1.0,
    "Incluye boleto aéreo ida y vuelta con código PNR, vouchers de alojamiento verificables y seguro médico Schengen 30.000€",
  ],
  [
    "pasajes-con-2-maletas-23kg",
    "Boleto Aéreo con 2 Maletas de 23 kg en Bodega",
    1.06,
    "Tarifa especial con franquicia de doble equipaje documentado (2x23 kg) más equipaje de mano de 10 kg",
  ],
  [
    "primer-viaje-expediente-completo",
    "Primer Viaje a Europa con Carpeta Migratoria Completa",
    1.02,
    "Preparación paso a paso de tu carpeta de viaje con PNR de aerolínea, boleto IATA de 13 dígitos, hotel, seguro y cálculo de solvencia BOE",
  ],
  [
    "reagrupacion-familiar-estudios",
    "Tarifa para Reagrupación Familiar, Visado o Estudios",
    0.92,
    "Emisión especializada para pasajeros que viajan con visa de reagrupación familiar, Decreto Flussi o visado de estudios aprobado",
  ],
  [
    "vuelo-retorno-hacia-lima",
    "Vuelo desde Europa hacia Lima para Residentes",
    0.95,
    "Boleto aéreo para peruanos residentes en Europa que visitan el Perú o compran pasajes desde allá para traer a su familia",
  ],
  [
    "adultos-mayores-asistencia-silla",
    "Viaje para Padres y Adultos Mayores con Asistencia",
    1.0,
    "Coordinación de asistencia especial en mostrador, acompañamiento en conexiones internacionales y asientos confortables para tus padres",
  ],
  [
    "viaje-familiar-con-ninos",
    "Programa Familiar con Asientos Juntos Garantizados",
    0.98,
    "Tarifas para familias peruanas con asignación de asientos contiguos, orientación sobre permisos notariales de menores y seguro familiar",
  ],
  [
    "preventa-con-50-por-ciento",
    "Preventa 2026 Separando con el 50% de Inicial",
    0.94,
    "Congela hoy tu tarifa aérea y hotelera abonando el 50% de inicial y completa el saldo en cuotas programadas antes de tu vuelo",
  ],
  [
    "carpeta-schengen-pnr-y-seguro",
    "Paquete Aéreo + Seguro Schengen 30.000€ + PNR",
    1.01,
    "Solución integral con pasajes confirmados, póliza médica internacional sin deducible y vouchers listos para presentar en frontera",
  ],
];

const VARIANTES_OPERATIVAS_5: [string, string, number][] = [
  ["vuelo-confirmado-pnr", "Emisión Oficial con Código PNR", 1.0],
  ["ruta-via-madrid", "Conexión Rápida vía Madrid-Barajas", 0.98],
  ["ruta-klm-air-france", "Vía Ámsterdam / París (KLM · Air France)", 1.02],
  ["tarifa-flexible-cambios", "Tarifa Flexible con Cambios Permitidos", 1.07],
  ["atencion-sede-los-olivos", "Emisión Presencial o Digital RUC 20614914239", 1.0],
];

// ============================================================================
// BLOQUE 7: 50 DESTINOS INTERNACIONALES × 12 MESES × 4 MODALIDADES = 2,400 LANDINGS
// ============================================================================
const DESTINOS_CALENDARIO_50: [string, string, string, LandingComercialSEO["cluster"], number][] = [
  ["Punta Cana", "punta-cana", "República Dominicana", "all-inclusive", 1049],
  ["Bayahibe y La Romana", "bayahibe-la-romana", "República Dominicana", "all-inclusive", 1090],
  ["Samaná y Cayo Levantado", "samana", "República Dominicana", "all-inclusive", 1120],
  ["Puerto Plata", "puerto-plata", "República Dominicana", "all-inclusive", 1049],
  ["Santo Domingo", "santo-domingo", "República Dominicana", "mundiales", 890],
  ["Cancún", "cancun", "México", "all-inclusive", 999],
  ["Riviera Maya y Playa del Carmen", "riviera-maya", "México", "all-inclusive", 1049],
  ["Tulum e Isla Mujeres", "tulum-isla-mujeres", "México", "all-inclusive", 1090],
  ["Cozumel", "cozumel", "México", "all-inclusive", 1090],
  ["Ciudad de México y Teotihuacán", "ciudad-de-mexico", "México", "mundiales", 799],
  ["Los Cabos", "los-cabos", "México", "all-inclusive", 1190],
  ["Puerto Vallarta", "puerto-vallarta", "México", "all-inclusive", 1150],
  ["Cartagena de Indias", "cartagena-de-indias", "Colombia", "mundiales", 599],
  ["Isla Barú y Playa Blanca", "isla-baru", "Colombia", "all-inclusive", 699],
  ["San Andrés Islas", "san-andres", "Colombia", "all-inclusive", 749],
  ["Santa Marta y Parque Tayrona", "santa-marta", "Colombia", "mundiales", 649],
  ["Medellín y Guatapé", "medellin", "Colombia", "mundiales", 599],
  ["Bogotá y Zipaquirá", "bogota", "Colombia", "mundiales", 549],
  ["Eje Cafetero Colombiano", "eje-cafetero", "Colombia", "mundiales", 649],
  ["Aruba", "aruba", "Aruba", "all-inclusive", 1190],
  ["Curazao", "curazao", "Curazao", "all-inclusive", 1150],
  ["Varadero y La Habana", "varadero-la-habana", "Cuba", "all-inclusive", 990],
  ["Montego Bay y Ocho Ríos", "montego-bay-jamaica", "Jamaica", "all-inclusive", 1250],
  ["Nassau y Paradise Island", "nassau-bahamas", "Bahamas", "all-inclusive", 1390],
  ["Ciudad de Panamá y Playa Blanca", "panama-playa-blanca", "Panamá", "all-inclusive", 799],
  ["San José, Arenal y Guanacaste", "costa-rica-guanacaste", "Costa Rica", "mundiales", 890],
  ["Río de Janeiro y Búzios", "rio-de-janeiro-buzios", "Brasil", "mundiales", 749],
  ["Foz de Iguazú", "foz-de-iguazu", "Brasil", "mundiales", 690],
  ["Florianópolis y Camboriú", "florianopolis-camboriu", "Brasil", "mundiales", 749],
  ["Salvador de Bahía y Praia do Forte", "salvador-de-bahia", "Brasil", "all-inclusive", 890],
  ["Maceió y Maragogi", "maceio-maragogi", "Brasil", "all-inclusive", 920],
  ["Gramado y Canela", "gramado-y-canela", "Brasil", "mundiales", 790],
  ["São Paulo", "sao-paulo", "Brasil", "mundiales", 690],
  ["Buenos Aires", "buenos-aires", "Argentina", "mundiales", 649],
  ["San Carlos de Bariloche", "bariloche", "Argentina", "mundiales", 799],
  ["El Calafate y Glaciar Perito Moreno", "el-calafate", "Argentina", "mundiales", 890],
  ["Mendoza y Ruta del Vino", "mendoza", "Argentina", "mundiales", 699],
  ["Ushuaia Fin del Mundo", "ushuaia", "Argentina", "mundiales", 920],
  ["Santiago de Chile y Viña del Mar", "santiago-de-chile", "Chile", "mundiales", 499],
  ["San Pedro de Atacama", "san-pedro-de-atacama", "Chile", "mundiales", 649],
  ["Torres del Paine y Patagonia", "torres-del-paine", "Chile", "mundiales", 990],
  ["Punta del Este y Montevideo", "punta-del-este", "Uruguay", "mundiales", 749],
  ["Quito y Islas Galápagos", "quito-y-galapagos", "Ecuador", "mundiales", 1190],
  ["Salar de Uyuni y La Paz", "salar-de-uyuni", "Bolivia", "mundiales", 599],
  ["Miami y Orlando", "miami-y-orlando", "Estados Unidos", "mundiales", 1190],
  ["Nueva York", "nueva-york", "Estados Unidos", "mundiales", 1190],
  ["Las Vegas y Gran Cañón", "las-vegas", "Estados Unidos", "mundiales", 1250],
  ["Los Ángeles y Hollywood", "los-angeles", "Estados Unidos", "mundiales", 1250],
  ["Estambul y Capadocia", "estambul-y-capadocia", "Turquía", "mundiales", 1690],
  ["Dubái y Abu Dabi", "dubai-y-abu-dabi", "Emiratos Árabes", "mundiales", 1790],
];

const MESES_12: [string, string, number][] = [
  ["Enero", "enero", 1.05],
  ["Febrero", "febrero", 1.02],
  ["Marzo", "marzo", 0.96],
  ["Abril", "abril", 0.97],
  ["Mayo", "mayo", 0.95],
  ["Junio", "junio", 1.0],
  ["Julio", "julio", 1.08],
  ["Agosto", "agosto", 1.06],
  ["Septiembre", "septiembre", 0.96],
  ["Octubre", "octubre", 0.97],
  ["Noviembre", "noviembre", 0.96],
  ["Diciembre", "diciembre", 1.08],
];

const MODALIDADES_MES_4: [string, string, number][] = [
  ["paquete-vuelo-mas-hotel", "Paquete Vuelo + Hotel Confirmado", 1.0],
  ["preventa-con-50-inicial", "Preventa Separando con el 50%", 0.94],
  ["programa-familiar-completo", "Programa Familiar Todo Organizado", 1.03],
  ["oferta-confirmada-pnr", "Tarifa Promocional con Código PNR", 0.97],
];

// ============================================================================
// BLOQUE 8: 40 PLANES COMERCIALES DESDE LIMA (AEROPUERTO JORGE CHÁVEZ - LIM) × 50 DESTINOS CLAVE = 2,000 LANDINGS
// ============================================================================
const PLANES_DESDE_JORGE_CHAVEZ_40: [string, string, string, number][] = [
  ["Programa Vuelo + Hotel Céntrico", "plan-vuelo-y-hotel-centrico-lima", "con boleto aéreo desde el Aeropuerto Jorge Chávez (LIM) y alojamiento céntrico", 0],
  ["Programa Vuelo + Hotel 4★ Superior", "plan-vuelo-hotel-4-estrellas-lima", "con vuelo desde Lima (LIM) y estadía en hotel 4 estrellas seleccionado", 45],
  ["Paquete Todo Organizado + Traslados", "plan-todo-organizado-traslados-lima", "incluyendo vuelos desde el Jorge Chávez (LIM), hotel y traslados de llegada y salida", 25],
  ["Paquete con Desayunos y City Tour", "plan-con-desayunos-y-city-tour-lima", "con desayunos diarios, visita panorámica en español y salida desde Lima (LIM)", 30],
  ["Paquete con 2 Maletas de 23 kg", "plan-con-2-maletas-23kg-lima", "con doble franquicia de equipaje en bodega (2x23 kg) saliendo de Lima (LIM)", 65],
  ["Paquete con 1 Maleta de 23 kg + Cabina", "plan-maleta-23kg-mas-cabina-lima", "con equipaje documentado de 23 kg más carry-on de 10 kg desde el Jorge Chávez (LIM)", 20],
  ["Preventa con 50% de Inicial", "plan-preventa-50-inicial-lima", "congelando hoy tu tarifa con el 50% de inicial y saliendo desde Lima (LIM)", -30],
  ["Reserva en Cuotas Programadas", "plan-reserva-en-cuotas-lima", "abonando el 50% al reservar y el saldo en cuotas antes de tu vuelo desde Lima (LIM)", 0],
  ["Viaje Familiar (2 Adultos + Niños)", "plan-familiar-adultos-y-ninos-lima", "con habitaciones familiares y asientos juntos saliendo del Aeropuerto Jorge Chávez (LIM)", -15],
  ["Plan Familiar Numeroso (4 a 6 Pasajeros)", "plan-familiar-4-a-6-pasajeros-lima", "con tarifa preferencial familiar y traslados privados saliendo de Lima (LIM)", -25],
  ["Escapada para Parejas y Esposos", "plan-escapada-parejas-lima", "en habitación doble matrimonial con traslados y vuelos desde el Jorge Chávez (LIM)", 15],
  ["Programa Especial Luna de Miel", "plan-luna-de-miel-romantica-lima", "con atenciones especiales para recién casados y salida desde Lima (LIM)", 40],
  ["Viaje de Aniversario de Bodas", "plan-aniversario-de-bodas-lima", "con categoría superior de alojamiento y vuelos confirmados desde Lima (LIM)", 35],
  ["Programa Adultos Mayores con Asistencia", "plan-adultos-mayores-asistencia-lima", "con asistencia especial en el Aeropuerto Jorge Chávez (LIM) y ritmo tranquilo", 0],
  ["Viaje para Padres y Abuelos Asesorado", "plan-viaje-padres-y-abuelos-lima", "con acompañamiento en check-in, silla de ruedas (SSR) y carpeta lista desde Lima (LIM)", 0],
  ["Tarifa Grupal para Amigos (4+ Viajeros)", "plan-tarifa-grupos-amigos-lima", "con descuento por grupo y actividades compartidas saliendo desde Lima (LIM)", -20],
  ["Viaje de Graduación y Promoción", "plan-viaje-graduacion-lima", "con itinerario juvenil, excursiones y vuelos seguros desde el Jorge Chávez (LIM)", -15],
  ["Programa 5 Días / 4 Noches desde Lima", "plan-5-dias-4-noches-desde-lima", "en formato práctico de 5 días y 4 noches saliendo del Aeropuerto Jorge Chávez (LIM)", -35],
  ["Programa 6 Días / 5 Noches desde Lima", "plan-6-dias-5-noches-desde-lima", "con 6 días y 5 noches de estadía confirmada y vuelos desde Lima (LIM)", 0],
  ["Programa 7 Días / 6 Noches desde Lima", "plan-7-dias-6-noches-desde-lima", "de una semana completa con hotel, traslados y vuelos desde el Jorge Chávez (LIM)", 25],
  ["Programa 8 Días / 7 Noches desde Lima", "plan-8-dias-7-noches-desde-lima", "con 8 días y 7 noches para disfrutar de cada atractivo saliendo de Lima (LIM)", 45],
  ["Programa 10 Días / 9 Noches desde Lima", "plan-10-dias-9-noches-desde-lima", "de 10 días y 9 noches con excursiones y vuelos desde el Aeropuerto Jorge Chávez (LIM)", 75],
  ["Programa 12 Días / 11 Noches desde Lima", "plan-12-dias-11-noches-desde-lima", "de 12 días ideales para circuitos internacionales saliendo de Lima (LIM)", 100],
  ["Programa 15 Días / 14 Noches desde Lima", "plan-15-dias-14-noches-desde-lima", "de quincena completa con asesoría integral saliendo desde el Jorge Chávez (LIM)", 135],
  ["Primer Viaje Internacional con Carpeta", "plan-primer-viaje-con-carpeta-lima", "con preparación completa de requisitos migratorios, PNR y salida desde Lima (LIM)", 0],
  ["Paquete + Seguro Médico Internacional", "plan-con-seguro-internacional-lima", "incluyendo póliza médica internacional sin deducible y vuelos desde Lima (LIM)", 15],
  ["Emisión Inmediata con Código PNR", "plan-emision-inmediata-pnr-lima", "con entrega en el acto de tu reserva aérea PNR y voucher hotelero verificable", 0],
  ["Tarifa Flexible con Opción a Cambios", "plan-tarifa-flexible-cambios-lima", "con flexibilidad para reprogramar fechas saliendo desde el Aeropuerto Jorge Chávez (LIM)", 45],
  ["Salidas Vacaciones de Verano desde Lima", "plan-vacaciones-verano-desde-lima", "para viajar entre enero, febrero y marzo desde el Aeropuerto Jorge Chávez (LIM)", 25],
  ["Salidas Semana Santa desde Lima", "plan-semana-santa-desde-lima", "aprovechando los días feriados de Semana Santa con vuelos desde Lima (LIM)", 35],
  ["Salidas Vacaciones Escolares Mayo", "plan-vacaciones-escolares-mayo-lima", "ideal para viajar con hijos en las vacaciones de mayo desde el Jorge Chávez (LIM)", 0],
  ["Salidas Fiestas Patrias Julio desde Lima", "plan-fiestas-patrias-julio-lima", "con cupos confirmados para las vacaciones de julio saliendo de Lima (LIM)", 55],
  ["Salidas Vacaciones de Agosto desde Lima", "plan-vacaciones-agosto-desde-lima", "con salidas programadas en agosto desde el Aeropuerto Internacional Jorge Chávez (LIM)", 25],
  ["Salidas Vacaciones Escolares Octubre", "plan-vacaciones-octubre-desde-lima", "para la semana de vacaciones de octubre saliendo desde Lima (LIM)", 0],
  ["Oferta Temporada Baja desde Lima", "plan-temporada-baja-oferta-lima", "aprovechando las tarifas más bajas del año desde el Aeropuerto Jorge Chávez (LIM)", -40],
  ["Salidas Fin de Año y Año Nuevo", "plan-fin-de-ano-desde-lima", "para recibir el Año Nuevo viajando desde el Aeropuerto Jorge Chávez (LIM)", 70],
  ["Viaje Corporativo y de Negocios (RUC 20)", "plan-viaje-corporativo-empresas-lima", "con Factura Electrónica SUNAT (RUC 20614914239) y vuelos ejecutivos desde Lima (LIM)", 20],
  ["Categoría Lujo 5★ y Traslado Privado", "plan-categoria-lujo-5-estrellas-lima", "con hoteles 5 estrellas, recojo privado y atención VIP desde Lima (LIM)", 125],
  ["Paquete con Excursiones Guiadas Incluidas", "plan-con-excursiones-guiadas-lima", "con entradas y tours oficiales en español saliendo del Jorge Chávez (LIM)", 40],
  ["Atención Presencial Sede Los Olivos + PNR", "plan-atencion-sede-los-olivos-pnr", "con firma de contrato en Av. Universitaria 2029 (Los Olivos) y salida desde Lima (LIM)", 0],
];

const DESTINOS_DISTRITOS_50: [string, string, string, LandingComercialSEO["cluster"], number, boolean][] = [
  ["Madrid", "madrid", "España", "mundiales", 1090, true],
  ["Barcelona", "barcelona", "España", "mundiales", 1120, true],
  ["Valencia", "valencia", "España", "mundiales", 1150, true],
  ["Sevilla", "sevilla", "España", "mundiales", 1160, true],
  ["Bilbao y País Vasco", "bilbao", "España", "mundiales", 1180, true],
  ["Málaga y Costa del Sol", "malaga", "España", "mundiales", 1160, true],
  ["Palma de Mallorca", "palma-de-mallorca", "España", "mundiales", 1190, true],
  ["Roma", "roma", "Italia", "mundiales", 1150, true],
  ["Milán", "milan", "Italia", "mundiales", 1180, true],
  ["Turín", "turin", "Italia", "mundiales", 1210, true],
  ["Florencia y Toscana", "florencia", "Italia", "mundiales", 1190, true],
  ["Bolonia", "bolonia", "Italia", "mundiales", 1200, true],
  ["Venecia", "venecia", "Italia", "mundiales", 1210, true],
  ["París", "paris", "Francia", "mundiales", 1150, true],
  ["Lisboa y Fátima", "lisboa", "Portugal", "mundiales", 1160, true],
  ["Ámsterdam", "amsterdam", "Países Bajos", "mundiales", 1190, true],
  ["Fráncfort y Múnich", "francfort", "Alemania", "mundiales", 1210, true],
  ["Zúrich y Lucerna", "zurich", "Suiza", "mundiales", 1290, true],
  ["Londres", "londres", "Reino Unido", "mundiales", 1250, true],
  ["Atenas y Santorini", "atenas-santorini", "Grecia", "mundiales", 1490, true],
  ["Circuito Europeo Madrid, París y Roma", "circuito-europeo-clasico", "Europa", "mundiales", 1690, true],
  ["Punta Cana Todo Incluido", "punta-cana", "República Dominicana", "all-inclusive", 1049, true],
  ["Bayahibe Todo Incluido", "bayahibe", "República Dominicana", "all-inclusive", 1090, true],
  ["Cancún Todo Incluido", "cancun", "México", "all-inclusive", 999, true],
  ["Riviera Maya Todo Incluido", "riviera-maya", "México", "all-inclusive", 1049, true],
  ["Ciudad de México", "ciudad-de-mexico", "México", "mundiales", 799, true],
  ["Cartagena de Indias", "cartagena", "Colombia", "mundiales", 599, true],
  ["San Andrés Todo Incluido", "san-andres", "Colombia", "all-inclusive", 749, true],
  ["Santa Marta", "santa-marta", "Colombia", "mundiales", 649, true],
  ["Medellín", "medellin", "Colombia", "mundiales", 599, true],
  ["Bogotá", "bogota", "Colombia", "mundiales", 549, true],
  ["Aruba Todo Incluido", "aruba", "Aruba", "all-inclusive", 1190, true],
  ["Curazao Todo Incluido", "curazao", "Curazao", "all-inclusive", 1150, true],
  ["Varadero y La Habana", "varadero", "Cuba", "all-inclusive", 990, true],
  ["Panamá y Playa Blanca", "panama", "Panamá", "all-inclusive", 799, true],
  ["Río de Janeiro", "rio-de-janeiro", "Brasil", "mundiales", 749, true],
  ["Foz de Iguazú", "foz-de-iguazu", "Brasil", "mundiales", 690, true],
  ["Buenos Aires", "buenos-aires", "Argentina", "mundiales", 649, true],
  ["Bariloche", "bariloche", "Argentina", "mundiales", 799, true],
  ["Santiago de Chile", "santiago-de-chile", "Chile", "mundiales", 499, true],
  ["Miami y Orlando", "miami-orlando", "Estados Unidos", "mundiales", 1190, true],
  ["Nueva York", "nueva-york", "Estados Unidos", "mundiales", 1190, true],
  ["Estambul y Capadocia", "turquia-capadocia", "Turquía", "mundiales", 1690, true],
  ["Cusco y Machu Picchu", "cusco-machu-picchu", "Perú", "tours", 329, false],
  ["Arequipa y Cañón del Colca", "arequipa-colca", "Perú", "tours", 289, false],
  ["Tarapoto y Laguna Azul", "tarapoto", "Perú", "tours", 289, false],
  ["Punta Sal y Máncora", "punta-sal-mancora", "Perú", "all-inclusive", 449, false],
  ["Puno y Lago Titicaca", "puno-titicaca", "Perú", "tours", 289, false],
  ["Iquitos y Río Amazonas", "iquitos-amazonas", "Perú", "tours", 349, false],
  ["Paracas, Ica y Huacachina", "paracas-ica-huacachina", "Perú", "tours", 189, false],
];

// ============================================================================
// BLOQUE 9: 80 HOTELES Y RESORTS ADICIONALES × 20 PLANES DE ESTADÍA = 1,600 LANDINGS
// ============================================================================
const HOTELES_SELECCION_80: [string, string, string, string, number][] = [
  ["Riu Bambu Todo Incluido", "hotel-riu-bambu-punta-cana", "Punta Cana", "República Dominicana", 1049],
  ["Riu Naiboa Punta Cana", "hotel-riu-naiboa-punta-cana", "Punta Cana", "República Dominicana", 999],
  ["Iberostar Grand Bávaro", "hotel-iberostar-grand-bavaro", "Punta Cana", "República Dominicana", 1390],
  ["Meliá Punta Cana Beach", "hotel-melia-punta-cana-beach", "Punta Cana", "República Dominicana", 1150],
  ["Falcon's Resort by Meliá", "hotel-falcons-resort-punta-cana", "Punta Cana", "República Dominicana", 1190],
  ["Majestic Mirage Punta Cana", "hotel-majestic-mirage-punta-cana", "Punta Cana", "República Dominicana", 1290],
  ["Nickelodeon Hotels & Resorts Punta Cana", "hotel-nickelodeon-punta-cana", "Punta Cana", "República Dominicana", 1390],
  ["Royalton Splash Punta Cana", "hotel-royalton-splash-punta-cana", "Punta Cana", "República Dominicana", 1090],
  ["Royalton CHIC Punta Cana", "hotel-royalton-chic-punta-cana", "Punta Cana", "República Dominicana", 1190],
  ["Dreams Onyx Resort & Spa", "hotel-dreams-onyx-punta-cana", "Punta Cana", "República Dominicana", 1190],
  ["Breathless Punta Cana Resort", "hotel-breathless-punta-cana", "Punta Cana", "República Dominicana", 1250],
  ["Zel Punta Cana by Meliá", "hotel-zel-punta-cana", "Punta Cana", "República Dominicana", 1150],
  ["Serenade Punta Cana Beach", "hotel-serenade-punta-cana", "Punta Cana", "República Dominicana", 1090],
  ["Live Aqua Beach Resort Punta Cana", "hotel-live-aqua-punta-cana", "Punta Cana", "República Dominicana", 1290],
  ["Bahia Principe Grand La Romana", "hotel-bahia-principe-la-romana", "La Romana", "República Dominicana", 1049],
  ["Hilton La Romana All-Inclusive", "hotel-hilton-la-romana", "Bayahibe", "República Dominicana", 1250],
  ["Viva Wyndham Dominicus Palace", "hotel-viva-wyndham-dominicus-palace", "Bayahibe", "República Dominicana", 1049],
  ["Bahia Principe Grand Cayacoa", "hotel-bahia-principe-cayacoa", "Samaná", "República Dominicana", 1090],
  ["Riu Palace Las Américas", "hotel-riu-palace-las-americas", "Cancún", "México", 1150],
  ["Riu7 Cancún All Inclusive", "hotel-riu-cancun-zona-hotelera", "Cancún", "México", 1049],
  ["Riu Dunamar Costa Mujeres", "hotel-riu-dunamar-cancun", "Cancún", "México", 1049],
  ["Riu Latino Costa Mujeres", "hotel-riu-latino-cancun", "Cancún", "México", 1060],
  ["Grand Oasis Cancún", "hotel-grand-oasis-cancun", "Cancún", "México", 999],
  ["The Pyramid at Grand Oasis", "hotel-the-pyramid-cancun", "Cancún", "México", 1090],
  ["Iberostar Selection Cancún", "hotel-iberostar-selection-cancun", "Cancún", "México", 1150],
  ["Hyatt Ziva Cancún", "hotel-hyatt-ziva-cancun", "Cancún", "México", 1390],
  ["Hyatt Zilara Cancún", "hotel-hyatt-zilara-cancun", "Cancún", "México", 1390],
  ["Dreams Vista Cancún Golf & Spa", "hotel-dreams-vista-cancun", "Cancún", "México", 1190],
  ["Royalton Splash Riviera Cancún", "hotel-royalton-splash-riviera-cancun", "Riviera Maya", "México", 1120],
  ["Planet Hollywood Cancún", "hotel-planet-hollywood-cancun", "Cancún", "México", 1190],
  ["Hotel Xcaret Arte", "hotel-xcaret-arte-riviera-maya", "Riviera Maya", "México", 1790],
  ["Nickelodeon Hotels & Resorts Riviera Maya", "hotel-nickelodeon-riviera-maya", "Riviera Maya", "México", 1490],
  ["Barceló Maya Palace", "hotel-barcelo-maya-palace", "Riviera Maya", "México", 1190],
  ["Barceló Maya Riviera Adults Only", "hotel-barcelo-maya-riviera", "Riviera Maya", "México", 1250],
  ["Grand Palladium White Sand", "hotel-grand-palladium-white-sand", "Riviera Maya", "México", 1120],
  ["Iberostar Paraiso Maya Suites", "hotel-iberostar-paraiso-maya", "Riviera Maya", "México", 1190],
  ["Ocean Riviera Paradise", "hotel-ocean-riviera-paradise", "Playa del Carmen", "México", 1049],
  ["Riu Tequila Playa del Carmen", "hotel-riu-tequila-playa-del-carmen", "Playa del Carmen", "México", 999],
  ["Riu Yucatan Playa del Carmen", "hotel-riu-yucatan-playa-del-carmen", "Playa del Carmen", "México", 1049],
  ["Hilton Tulum Riviera Maya", "hotel-hilton-tulum-riviera-maya", "Tulum", "México", 1250],
  ["Dreams Karibana Cartagena", "hotel-dreams-karibana-cartagena", "Cartagena", "Colombia", 890],
  ["Estelar Playa Manzanillo", "hotel-estelar-playa-manzanillo", "Cartagena", "Colombia", 749],
  ["Hotel Caribe by Faranda Grand", "hotel-caribe-cartagena", "Cartagena", "Colombia", 699],
  ["Hotel Capilla del Mar", "hotel-capilla-del-mar-cartagena", "Cartagena", "Colombia", 699],
  ["Sofitel Legend Santa Clara", "hotel-sofitel-santa-clara-cartagena", "Cartagena", "Colombia", 1190],
  ["Decameron Aquarium San Andrés", "hotel-decameron-aquarium-san-andres", "San Andrés", "Colombia", 799],
  ["Decameron Marazul San Andrés", "hotel-decameron-marazul-san-andres", "San Andrés", "Colombia", 799],
  ["Decameron Los Delfines San Andrés", "hotel-decameron-los-delfines-san-andres", "San Andrés", "Colombia", 799],
  ["Sol Caribe San Andrés", "hotel-sol-caribe-san-andres", "San Andrés", "Colombia", 749],
  ["GHL Hotel Sunrise San Andrés", "hotel-ghl-sunrise-san-andres", "San Andrés", "Colombia", 789],
  ["Irotama Resort Santa Marta", "hotel-irotama-resort-santa-marta", "Santa Marta", "Colombia", 749],
  ["Zuana Beach Resort Santa Marta", "hotel-zuana-beach-santa-marta", "Santa Marta", "Colombia", 790],
  ["Riu Palace Antillas Aruba", "hotel-riu-palace-antillas-aruba", "Palm Beach", "Aruba", 1350],
  ["Barceló Aruba All Inclusive", "hotel-barcelo-aruba", "Palm Beach", "Aruba", 1320],
  ["Holiday Inn Resort Aruba", "hotel-holiday-inn-aruba", "Palm Beach", "Aruba", 1190],
  ["Sunscape Curacao Resort", "hotel-sunscape-curazao", "Willemstad", "Curazao", 1150],
  ["Dreams Curacao Resort", "hotel-dreams-curazao", "Willemstad", "Curazao", 1250],
  ["Meliá Internacional Varadero", "hotel-melia-internacional-varadero", "Varadero", "Cuba", 1090],
  ["Iberostar Selection Varadero", "hotel-iberostar-selection-varadero", "Varadero", "Cuba", 1090],
  ["Royalton Hicacos Varadero", "hotel-royalton-hicacos-varadero", "Varadero", "Cuba", 1120],
  ["Riu Playa Blanca Panamá", "hotel-riu-playa-blanca-panama", "Playa Blanca", "Panamá", 849],
  ["Royal Decameron Panamá", "hotel-royal-decameron-panama", "Playa Blanca", "Panamá", 829],
  ["Dreams Playa Bonita Panamá", "hotel-dreams-playa-bonita-panama", "Ciudad de Panamá", "Panamá", 890],
  ["Riu Plaza España Madrid", "hotel-riu-plaza-espana-madrid", "Madrid", "España", 1250],
  ["Barceló Torre de Madrid", "hotel-barcelo-torre-de-madrid", "Madrid", "España", 1250],
  ["Meliá Castilla Madrid", "hotel-melia-castilla-madrid", "Madrid", "España", 1220],
  ["W Barcelona Frente al Mar", "hotel-w-barcelona", "Barcelona", "España", 1390],
  ["Meliá Barcelona Sky", "hotel-melia-barcelona-sky", "Barcelona", "España", 1250],
  ["Riu Plaza Manhattan Times Square", "hotel-riu-plaza-times-square", "Nueva York", "Estados Unidos", 1290],
  ["Riu Plaza Miami Beach", "hotel-riu-plaza-miami-beach", "Miami", "Estados Unidos", 1190],
  ["Disney's All-Star Movies Resort", "hotel-disney-all-star-movies-orlando", "Orlando", "Estados Unidos", 1290],
  ["Universal's Cabana Bay Beach Resort", "hotel-universal-cabana-bay-orlando", "Orlando", "Estados Unidos", 1290],
  ["Royal Decameron Punta Sal", "hotel-decameron-punta-sal-peru", "Punta Sal", "Perú", 469],
  ["Aranwa Vichayito Bungalows & Carpas", "hotel-aranwa-vichayito-mancora", "Máncora", "Perú", 399],
  ["Hotel Paracas a Luxury Collection", "hotel-paracas-luxury-collection", "Paracas", "Perú", 349],
  ["DoubleTree by Hilton Paracas", "hotel-doubletree-hilton-paracas", "Paracas", "Perú", 299],
  ["Tambo del Inka Valle Sagrado", "hotel-tambo-del-inka-valle-sagrado", "Cusco", "Perú", 499],
  ["Palacio del Inka Cusco", "hotel-palacio-del-inka-cusco", "Cusco", "Perú", 479],
  ["Sauce Resort Laguna Azul", "hotel-sauce-resort-tarapoto", "Tarapoto", "Perú", 319],
  ["GHL Hotel Lago Titicaca", "hotel-ghl-lago-titicaca-puno", "Puno", "Perú", 329],
];

const PLANES_HOTEL_20: [string, string, number][] = [
  ["4-dias-3-noches-vuelo-incluido", "Paquete 4 Días / 3 Noches con Vuelo", 0.92],
  ["5-dias-4-noches-todo-incluido", "Paquete 5 Días / 4 Noches Todo Incluido", 1.0],
  ["6-dias-5-noches-vuelo-y-traslados", "Paquete 6 Días / 5 Noches + Traslados", 1.07],
  ["7-dias-6-noches-semana-completa", "Semana Completa 7 Días / 6 Noches", 1.14],
  ["8-dias-7-noches-vacaciones", "Vacaciones 8 Días / 7 Noches", 1.2],
  ["preventa-con-50-por-ciento", "Preventa Separando con el 50%", 0.94],
  ["plan-familiar-2-adultos-2-ninos", "Plan Familiar (2 Adultos + Niños)", 0.96],
  ["especial-luna-de-miel-parejas", "Especial Luna de Miel y Parejas", 1.04],
  ["habitacion-vista-al-mar", "Categoría Superior Vista al Mar", 1.1],
  ["temporada-verano-2026", "Salidas Verano 2026 Confirmadas", 1.02],
  ["temporada-vacaciones-escolares", "Especial Vacaciones Escolares", 1.05],
  ["feriado-fiestas-patrias-peru", "Especial Fiestas Patrias desde Lima", 1.08],
  ["ano-nuevo-y-fin-de-ano", "Especial Fin de Año y Año Nuevo", 1.12],
  ["semana-santa-confirmada", "Salidas Semana Santa Confirmadas", 1.06],
  ["reserva-en-cuotas-sin-intereses", "Reserva en Cuotas Programadas", 1.0],
  ["tarifa-grupos-y-amigos", "Tarifa Especial para Grupos y Amigos", 0.95],
  ["aniversario-y-bodas", "Celebración de Aniversario y Bodas", 1.03],
  ["viaje-adultos-mayores-relax", "Programa Relax para Adultos Mayores", 0.98],
  ["todo-organizado-con-seguro", "Paquete Completo + Seguro de Viaje", 1.02],
  ["emision-inmediata-pnr-voucher", "Voucher Oficial + Código PNR Inmediato", 1.0],
];

// ============================================================================
// BLOQUE 10: 50 RUTAS DEL PERÚ × 15 FERIADOS Y TEMPORADAS × 2 MODALIDADES = 1,500 LANDINGS
// ============================================================================
const RUTAS_PERU_50: [string, string, number, string][] = [
  ["Cusco Clásico y Machu Picchu", "cusco-clasico-machu-picchu", 329, "Ciudad Imperial, Sacsayhuamán, Valle Sagrado y Ciudadela de Machu Picchu"],
  ["Cusco, Montaña de 7 Colores y Laguna Humantay", "cusco-montana-7-colores-humantay", 359, "Machu Picchu, Vinicunca y Laguna Humantay con aclimatación previa"],
  ["Valle Sagrado VIP, Maras, Moray y Machu Picchu", "valle-sagrado-maras-moray-machu-picchu", 349, "Chinchero, Salineras de Maras, andenes de Moray, Ollantaytambo y tren a Aguas Calientes"],
  ["Cusco y Camino Inca Corto 2 Días", "cusco-camino-inca-corto", 489, "Ingreso por Km 104, Wiñay Wayna y Puerta del Sol (Inti Punku) hacia Machu Picchu"],
  ["Cusco y Puno Ruta del Sol Completa", "cusco-y-puno-ruta-del-sol", 429, "Andahuaylillas, Raqchi, La Raya, Pucará, Islas de los Uros y Taquile"],
  ["Arequipa Blanca y Cañón del Colca", "arequipa-y-canon-del-colca", 289, "Monasterio de Santa Catalina, Mirador de Yanahuara, Chivay y Cruz del Cóndor"],
  ["Arequipa, Valle de los Volcanes y Ruta del Sillar", "arequipa-ruta-del-sillar-colca", 299, "Canteras de Añashuayco, Culebrillas, campiña arequipeña y Valle del Colca"],
  ["Puno, Islas de los Uros, Taquile y Sillustani", "puno-uros-taquile-sillustani", 289, "Navegación por el Lago Titicaca, Chullpas de Sillustani y turismo vivencial"],
  ["Puno y Isla Amantaní Vivencial", "puno-isla-amantani-titicaca", 299, "Estadía en el Lago Titicaca, templo Pachatata y navegación tradicional"],
  ["Tarapoto, Laguna Azul y Catarata de Ahuashiyacu", "tarapoto-laguna-azul-ahuashiyacu", 289, "Sauce, Castillo de Lamas, Ahuashiyacu y gastronomía amazónica"],
  ["Tarapoto y Alto Mayo (Moyobamba y Rioja)", "tarapoto-y-alto-mayo-moyobamba", 329, "Orquidiarios de Moyobamba, Naciente del Río Tioyacu, Baños Termales de San Mateo y Sauce"],
  ["Iquitos, Río Amazonas y Reserva Pacaya Samiria", "iquitos-rio-amazonas-lodge", 369, "Navegación por el Amazonas, avistamiento de delfines rosados e isla de los monos"],
  ["Pucallpa, Laguna de Yarinacocha y Velo de la Novia", "pucallpa-yarinacocha-boqueron", 299, "Boquerón del Padre Abad, ducha del diablo y paseo en bote por Yarinacocha"],
  ["Puerto Maldonado y Reserva Nacional Tambopata", "puerto-maldonado-tambopata-lodge", 349, "Lago Sandoval, collpa de guacamayos, caminatas nocturnas y lodge en la selva"],
  ["Oxapampa, Pozuzo y Villa Rica", "oxapampa-pozuzo-villa-rica", 269, "Colonia austro-alemana de Pozuzo, ruta del café en Villa Rica y Catarata Río Tigre"],
  ["Chanchamayo, La Merced y San Ramón", "chanchamayo-la-merced-san-ramon", 239, "Cataratas de Bayoz y Velo de la Novia, Perené y jardines de picaflores"],
  ["Punta Sal Todo Incluido", "punta-sal-resort-playa", 449, "Playas de aguas cálidas todo el año, piscina frente al mar y gastronomía norteña"],
  ["Máncora, Vichayito y Los Órganos", "mancora-vichayito-los-organos", 349, "Nado con tortugas en El Ñuro, playas de Vichayito y atardeceres en Máncora"],
  ["Zorritos, Manglares de Tumbes y Punta Sal", "tumbes-manglares-y-punta-sal", 359, "Santuario Nacional Los Manglares de Tumbes, Puerto Pizarro y playas de Zorritos"],
  ["Piura, Colán, Catacaos y Sechura", "piura-colan-y-catacaos", 279, "Artesanía en filigrana de Catacaos, balneario de Colán y Manglares de Vice"],
  ["Trujillo, Huanchaco, Chan Chan y Huacas del Sol y la Luna", "trujillo-chan-chan-huanchaco", 259, "Ciudadela de barro de Chan Chan, caballitos de totora en Huanchaco y Señora de Cao"],
  ["Chiclayo, Señor de Sipán y Pirámides de Túcume", "chiclayo-senor-de-sipan-tucume", 259, "Museo Tumbas Reales de Sipán, Bosque de Pómac, Túcume y balneario de Pimentel"],
  ["Ruta Moche Completa: Trujillo y Chiclayo", "ruta-moche-trujillo-y-chiclayo", 339, "Lo mejor de La Libertad y Lambayeque con arqueología mochica y gastronomía norteña"],
  ["Cajamarca, Baños del Inca, Cumbemayo y Granja Porcón", "cajamarca-banos-del-inca-cumbemayo", 269, "Cuarto del Rescate, Ventanillas de Otuzco, bosque de piedras de Cumbemayo y Porcón"],
  ["Chachapoyas, Fortaleza de Kuélap y Catarata de Gocta", "chachapoyas-kuelap-y-gocta", 349, "Teleférico de Kuélap, Sarcófagos de Karajía, Cañón del Sonche y Catarata de Gocta"],
  ["Huaraz, Laguna 69, Llanganuco y Pastoruri", "huaraz-laguna-69-llanganuco", 249, "Callejón de Huaylas, Parque Nacional Huascarán, Chavín de Huántar y Pastoruri"],
  ["Ayacucho Colonial, Aguas Turquesas de Millpu y Quinua", "ayacucho-millpu-y-quinua", 269, "Pampa de Ayacucho, piscinas naturales de Millpu y talleres de piedra de Huamanga"],
  ["Huancayo, Valle del Mantaro y Ingenio", "huancayo-valle-del-mantaro", 219, "Laguna de Paca, Convento de Santa Rosa de Ocopa, criadero de truchas de Ingenio y Nevado Huaytapallana"],
  ["Huánuco, Tingo María y Cueva de las Lechuzas", "huanuco-y-tingo-maria", 259, "Templo de las Manos Cruzadas de Kotosh, Bella Durmiente y Parque Nacional Tingo María"],
  ["Paracas, Islas Ballestas, Ica y Oasis de Huacachina", "paracas-islas-ballestas-huacachina", 189, "Reserva Nacional de Paracas, paseo en deslizador a Islas Ballestas, bodegas de pisco y tubulares"],
  ["Paracas, Ica y Sobrevuelo a las Líneas de Nazca", "paracas-ica-y-lineas-de-nazca", 299, "Islas Ballestas, Huacachina y sobrevuelo en avioneta a los geoglifos de Nazca"],
  ["Tacna Heroica, Valle Viejo y Miculla", "tacna-valle-viejo-miculla", 269, "Paseo Cívico, Alto de la Alianza, petroglifos de Miculla y baños termales de Calientes"],
  ["Moquegua, Ilo y Ruta del Pisco Sur", "moquegua-ilo-ruta-del-pisco", 269, "Centro histórico de Moquegua, campiña de Torata y playas de Ilo"],
  ["Abancay, Andahuaylas y Cañón del Apurímac", "abancay-andahuaylas-apurimac", 279, "Laguna de Pacucha, Bosque de Piedras de Pampachiri y Santuario de Ampay"],
  ["Circuito Sur Peruano: Lima, Paracas, Arequipa, Puno y Cusco", "circuito-sur-peruano-completo", 649, "La gran ruta del sur del Perú conectando costa, cañones, altiplano y Machu Picchu"],
  ["Circuito Norte Amazónico: Tarapoto, Moyobamba y Chachapoyas", "circuito-nororiental-tarapoto-chachapoyas", 469, "Selva alta, cataratas, Laguna Azul, Gocta y Fortaleza de Kuélap en un solo viaje"],
  ["Playas del Norte: Piura, Máncora, Vichayito y Punta Sal", "circuito-playas-del-norte-peru", 389, "Sol todo el año en el litoral de Piura y Tumbes con traslados y hotel frente al mar"],
  ["Cusco Gastronómico y Cultural 5 Días", "cusco-gastronomico-y-cultural", 369, "Experiencias culinarias andinas, Valle Sagrado, textiles tradicionales y Machu Picchu"],
  ["Cusco en Tren Panorámico Vistadome / 360°", "cusco-tren-panoramico-vistadome", 389, "Viaje a Machu Picchu en vagones con ventanas panorámicas, show a bordo y hotel seleccionado"],
  ["Cusco de Lujo en Tren Hiram Bingham", "cusco-lujo-hiram-bingham", 990, "Experiencia 5 estrellas Belmond con tren Hiram Bingham y hoteles de lujo en Cusco"],
  ["Arequipa y Colca con Baños Termales de La Calera", "arequipa-colca-y-la-calera", 299, "Dos días en el Valle del Colca, aguas termales medicinales y mirador del cóndor"],
  ["Tarapoto Familiar con Parque Mundo de las Piedras y Sauce", "tarapoto-familiar-sauce", 299, "Programa ideal para viajar con niños y adultos mayores por la selva de San Martín"],
  ["Iquitos Crucero y Lodge en la Selva", "iquitos-experiencia-amazonica", 429, "Estadía todo incluido en lodge amazónico con excursiones diurnas y nocturnas"],
  ["Caral Ciudad Sagrada y Barranca", "caral-y-barranca-escapada", 149, "Visita guiada a la civilización más antigua de América y gastronomía del norte chico"],
  ["Lunahuaná, Canotaje y Ruta del Vino", "lunahuana-aventura-y-vino", 149, "Deportes de aventura en el río Cañete, cuatrimotos, apicultura y bodegas vitivinícolas"],
  ["Marcahuasi y San Pedro de Casta", "marcahuasi-bosque-de-piedras", 159, "Meseta altoandina, Monumento a la Humanidad y campamento o hospedaje rural"],
  ["Reserva Paisajística Nor Yauyos Cochas", "nor-yauyos-cochas-huancaya", 229, "Cascadas de Cabracancha, lagunas turquesas de Huancaya y Vilca"],
  ["Canta, Obrajillo y Cordillera La Viuda", "canta-obrajillo-cordillera-la-viuda", 159, "Laguna de Chuchón, cascada de Lucle y criaderos de truchas en Obrajillo"],
  ["Churin y Baños Termales de Huancahuasi", "churin-banos-termales-huancahuasi", 189, "Aguas termomedicinales de Mamahuarmi, Huancahuasi y Picoy en la sierra de Lima"],
  ["Huaral, Castillo de Chancay y Lomas de Lachay", "huaral-castillo-de-chancay", 149, "Ruta del chancho al palo en Huaral, Eco Truly Park y Castillo de Chancay"],
];

const FERIADOS_PERU_15: [string, string, number][] = [
  ["Fiestas Patrias (28 y 29 de Julio)", "fiestas-patrias-julio", 1.12],
  ["Semana Santa", "semana-santa", 1.08],
  ["Año Nuevo y Fin de Año", "ano-nuevo", 1.12],
  ["Feriado Largo de Agosto (Santa Rosa de Lima)", "feriado-santa-rosa-agosto", 1.04],
  ["Feriado Combate de Angamos (Octubre)", "feriado-octubre-angamos", 1.03],
  ["Feriado Todos los Santos (Noviembre)", "feriado-noviembre-todos-los-santos", 1.04],
  ["Feriado de Junio (San Pedro y San Pablo)", "feriado-junio-san-pedro", 1.03],
  ["Feriado Día del Trabajo (1 de Mayo)", "feriado-1-de-mayo", 1.03],
  ["Feriado de Diciembre (Inmaculada y Batalla de Ayacucho)", "feriado-largo-diciembre", 1.05],
  ["Vacaciones Escolares de Mayo", "vacaciones-escolares-mayo", 1.0],
  ["Vacaciones Escolares de Julio y Agosto", "vacaciones-escolares-julio", 1.06],
  ["Vacaciones Escolares de Octubre", "vacaciones-escolares-octubre", 1.0],
  ["Verano Enero y Febrero", "temporada-verano", 1.02],
  ["Temporada Baja Promocional", "temporada-baja-oferta", 0.93],
  ["Salidas Confirmadas Todo el Año", "salidas-confirmadas-2026", 1.0],
];

const MODALIDADES_PERU_2: [string, string, number][] = [
  ["paquete-vuelo-hotel-tours", "Paquete Completo (Vuelo/Transporte + Hotel + Tours)", 1.0],
  ["preventa-con-50-por-ciento", "Preventa Separando con el 50% de Inicial", 0.94],
];

// ============================================================================
// GENERADOR DE LOS 10,000 NUEVOS RESÚMENES COMERCIALES (BLOQUES 6 AL 10)
// ============================================================================
export function generarIndiceExpansion20k(
  construirObjetoLanding: ConstructorObjetoLandingFn
): ResumenLandingExpansion[] {
  const lista: ResumenLandingExpansion[] = [];

  // --------------------------------------------------------------------------
  // BLOQUE 6: 50 Ciudades Europeas × 10 Modalidades × 5 Variantes = 2,500
  // --------------------------------------------------------------------------
  for (const [ciudad, slugCiudad, pais, precioBase, infoAeropuerto] of CIUDADES_EUROPA_COMUNIDAD_50) {
    const esItalia = pais === "Italia";
    for (const [slugMod, nombreMod, factorMod, descMod] of MODALIDADES_MIGRATORIAS_10) {
      for (const [slugVar, nombreVar, factorVar] of VARIANTES_OPERATIVAS_5) {
        const slug = `europa-2026-${slugCiudad}-${slugMod}-${slugVar}`;
        const precio = Math.round((precioBase * factorMod * factorVar) / 10) * 10;
        const titulo = `${ciudad} (${pais}): ${nombreMod} — ${nombreVar}`;

        lista.push({
          slug,
          cluster: "mundiales",
          clusterNombre: `Vuelos y Paquetes a ${pais} 2026`,
          titulo,
          destinoOPais: pais,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            construirObjetoLanding({
              slug,
              cluster: "mundiales",
              clusterNombre: `Vuelos y Paquetes a ${pais} 2026`,
              badge: `Ruta ${ciudad} (${pais}) · ${nombreVar}`,
              banderas: ["Perú", pais],
              tituloHero: `Viajes a ${ciudad} (${pais}):`,
              tituloDestacado: `${nombreMod} Desde $${precio}`,
              descripcionHero: `${descMod}. Llegada a través de ${infoAeropuerto} con asistencia integral de Cityland Travel.`,
              negritaHero: `Emisión inmediata con código PNR de 6 caracteres + boleto electrónico IATA de 13 dígitos.`,
              destinoOPais: pais,
              precioBase: precio,
              etiquetaVitrina: `${ciudad}: ${nombreMod}`,
              duracionOServicio: `${nombreVar} · ${pais}`,
              checksBase: [
                `Boleto aéreo oficial rumbo a ${ciudad} (${infoAeropuerto})`,
                esItalia
                  ? "Asesoría de Lettera di Invito / Dichiarazione di Ospitalità 48h o reserva de hotel"
                  : "Asesoría de Carta de Invitación o reserva hotelera verificable y cálculo BOE",
                "Seguro médico internacional Schengen de 30.000€ sin deducible",
              ],
              checksPlus: [
                "Código de reserva PNR verificable en la web de la aerolínea",
                "Facilidad de pago: separa con el 50% de inicial y paga en cuotas",
                "Revisión personalizada de tu carpeta de viaje antes del embarque",
              ],
              checksVip: [
                "Atención presencial en Los Olivos (Av. Universitaria 2029) y por WhatsApp",
                "Opciones con 1 o 2 maletas de 23 kg en bodega + equipaje de mano",
                "Respaldo legal RUC 20614914239 con Boleta o Factura Electrónica SUNAT",
              ],
              esInternacional: true,
              keywords: [
                `vuelos a ${ciudad.toLowerCase()} desde lima`,
                `viajar a ${ciudad.toLowerCase()} ${nombreMod.toLowerCase()}`,
                `pasajes a ${ciudad.toLowerCase()} ${pais.toLowerCase()} 2026`,
              ],
              faqsExtra: [
                {
                  q: `¿Qué incluye la modalidad "${nombreMod}" para viajar a ${ciudad} (${pais})?`,
                  a: `${descMod}. Además, en Cityland Travel emitimos tu reserva con código PNR real verificable en la aerolínea y te asesoramos en todos los requisitos de ingreso a ${pais}.`,
                },
                {
                  q: `¿Cuál es la ruta de llegada recomendada para ${ciudad}?`,
                  a: `Operamos a través de ${infoAeropuerto} bajo la opción "${nombreVar}" desde $${precio} USD por pasajero, sujeto a disponibilidad de tu fecha exacta de viaje.`,
                },
              ],
            }),
        });
      }
    }
  }

  // --------------------------------------------------------------------------
  // BLOQUE 7: 50 Destinos Internacionales × 12 Meses × 4 Modalidades = 2,400
  // --------------------------------------------------------------------------
  for (const [nombreDestino, slugDestino, pais, cluster, precioBase] of DESTINOS_CALENDARIO_50) {
    for (const [nombreMes, slugMes, factorMes] of MESES_12) {
      for (const [slugMod, nombreMod, factorMod] of MODALIDADES_MES_4) {
        const slug = `temporada-${slugMes}-${slugDestino}-${slugMod}`;
        const precio = Math.max(249, Math.round((precioBase * factorMes * factorMod) / 10) * 10);
        const titulo = `Viajes a ${nombreDestino} (${pais}) en ${nombreMes}: ${nombreMod}`;

        lista.push({
          slug,
          cluster,
          clusterNombre: `${nombreDestino} en ${nombreMes}`,
          titulo,
          destinoOPais: pais,
          precioDesdeUSD: precio,
          constructorDatos: () =>
            construirObjetoLanding({
              slug,
              cluster,
              clusterNombre: `${nombreDestino} en ${nombreMes}`,
              badge: `Salidas en ${nombreMes} · ${pais}`,
              banderas: ["Perú", pais],
              tituloHero: `Viajes a ${nombreDestino} en ${nombreMes}:`,
              tituloDestacado: `${nombreMod} Desde $${precio}`,
              descripcionHero: `Planifica tu viaje a ${nombreDestino} (${pais}) para el mes de ${nombreMes} con boletos aéreos ida y vuelta desde Lima, alojamiento seleccionado, traslados y seguro de asistencia.`,
              negritaHero: `Congela tu tarifa de ${nombreMes} con el 50% de inicial en Cityland Travel (RUC 20614914239).`,
              destinoOPais: pais,
              precioBase: precio,
              etiquetaVitrina: `${nombreDestino} en ${nombreMes}`,
              duracionOServicio: `${nombreMod} · ${nombreMes}`,
              checksBase: [
                `Boleto aéreo Lima – ${nombreDestino} ida y vuelta para ${nombreMes}`,
                `Alojamiento confirmado en ${nombreDestino} (${pais})`,
                "Traslados aeropuerto – hotel – aeropuerto y seguro de viaje",
              ],
              checksPlus: [
                cluster === "all-inclusive"
                  ? "Sistema Todo Incluido con comidas, bebidas y entretenimiento"
                  : `Desayunos diarios y excursiones principales en ${nombreDestino}`,
                "Código PNR de aerolínea y voucher hotelero verificable al instante",
                "Separa con el 50% de inicial y completa el saldo antes de viajar",
              ],
              checksVip: [
                "Asesoría de requisitos migratorios y equipaje permitido",
                "Hotelería 4★ y 5★ seleccionada con excelente ubicación",
                "Atención directa por WhatsApp (+51 944 103 890) y en Los Olivos",
              ],
              esInternacional: true,
              keywords: [
                `paquetes a ${nombreDestino.toLowerCase()} en ${nombreMes.toLowerCase()}`,
                `viajar a ${nombreDestino.toLowerCase()} en ${nombreMes.toLowerCase()} desde lima`,
                `ofertas ${nombreDestino.toLowerCase()} ${nombreMes.toLowerCase()} 2026`,
              ],
              faqsExtra: [
                {
                  q: `¿Cuánto cuesta viajar a ${nombreDestino} en el mes de ${nombreMes}?`,
                  a: `Nuestra tarifa referencial en la modalidad "${nombreMod}" para ${nombreMes} empieza Desde $${precio} USD por pasajero. Al reservar con anticipación puedes congelar el precio con el 50% de inicial.`,
                },
                {
                  q: `¿Qué incluye el paquete a ${nombreDestino} (${pais}) en ${nombreMes}?`,
                  a: `Incluye pasajes aéreos ida y vuelta desde Lima, estadía en hotel o resort seleccionado, traslados de llegada y salida, y asistencia permanente de Cityland Travel.`,
                },
              ],
            }),
        });
      }
    }
  }

  // --------------------------------------------------------------------------
  // BLOQUE 8: 40 Planes Comerciales desde Lima (LIM) × 50 Destinos Clave = 2,000
  // --------------------------------------------------------------------------
  for (const [nombrePlanLima, slugPlanLima, detallePlanLima, ajustePrecio] of PLANES_DESDE_JORGE_CHAVEZ_40) {
    for (const [nombreDestino, slugDestino, pais, cluster, precioBase, esInt] of DESTINOS_DISTRITOS_50) {
      const slug = `viajes-a-${slugDestino}-${slugPlanLima}`;
      const precio = Math.max(159, precioBase + ajustePrecio);
      const titulo = `Viajes a ${nombreDestino} (${pais}) desde Lima: ${nombrePlanLima}`;

      lista.push({
        slug,
        cluster,
        clusterNombre: `Paquetes a ${pais} desde Lima (LIM)`,
        titulo,
        destinoOPais: pais,
        precioDesdeUSD: precio,
        constructorDatos: () =>
          construirObjetoLanding({
            slug,
            cluster,
            clusterNombre: `Paquetes a ${pais} desde Lima (LIM)`,
            badge: `Salida Aeropuerto Jorge Chávez (LIM) · ${nombrePlanLima}`,
            banderas: esInt ? ["Perú", pais] : ["Perú"],
            tituloHero: `Viajes a ${nombreDestino} desde Lima:`,
            tituloDestacado: `${nombrePlanLima} Desde $${precio}`,
            descripcionHero: `Reserva tu viaje a ${nombreDestino} (${pais}) ${detallePlanLima}. Incluye código PNR verificable en aerolínea, alojamiento garantizado y respaldo formal RUC 20614914239.`,
            negritaHero: `Salida desde el Aeropuerto Internacional Jorge Chávez (LIM) · Separa hoy con el 50% de inicial.`,
            destinoOPais: pais,
            precioBase: precio,
            etiquetaVitrina: `${nombreDestino}: ${nombrePlanLima}`,
            duracionOServicio: `Salida desde Lima (LIM) · ${pais}`,
            checksBase: [
              `Vuelo confirmado saliendo del Aeropuerto Internacional Jorge Chávez (LIM)`,
              `Alojamiento garantizado en ${nombreDestino} (${pais})`,
              "Emisión inmediata de código PNR y Boleta/Factura Electrónica SUNAT",
            ],
            checksPlus: [
              "Separa con el 50% de inicial en BCP, BBVA, Interbank o tarjeta",
              "Traslados aeropuerto – hotel – aeropuerto incluidos",
              esInt
                ? "Seguro médico internacional y asesoría migratoria completa"
                : "Excursiones guiadas e ingresos turísticos incluidos",
            ],
            checksVip: [
              "Check-in y asignación de asientos gestionados por tu asesor",
              "Atención en sede Los Olivos (Av. Universitaria 2029) y por WhatsApp",
              "Soporte 24/7 antes, durante y después de tu vuelo",
            ],
            esInternacional: esInt,
            keywords: [
              `viajes a ${nombreDestino.toLowerCase()} desde lima`,
              `paquetes a ${nombreDestino.toLowerCase()} ${nombrePlanLima.toLowerCase()}`,
              `vuelos y hotel a ${nombreDestino.toLowerCase()} jorge chavez`,
            ],
            faqsExtra: [
              {
                q: `¿Qué incluye la modalidad "${nombrePlanLima}" para viajar a ${nombreDestino}?`,
                a: `Este programa opera ${detallePlanLima}. Recibes tu código PNR aéreo verificable, voucher de alojamiento y comprobante electrónico SUNAT (RUC 20614914239) el mismo día de tu reserva.`,
              },
              {
                q: `¿Cuál es el precio referencial de "${nombrePlanLima}" a ${nombreDestino}?`,
                a: `La tarifa referencial parte Desde $${precio} USD por pasajero saliendo desde Lima (LIM) y puedes separarla hoy mismo abonando el 50% de inicial.`,
              },
            ],
          }),
      });
    }
  }

  // --------------------------------------------------------------------------
  // BLOQUE 9: 80 Hoteles y Resorts × 20 Planes de Estadía = 1,600
  // --------------------------------------------------------------------------
  for (const [nombreHotel, slugHotel, ciudad, pais, precioBase] of HOTELES_SELECCION_80) {
    const esInt = pais !== "Perú";
    for (const [slugPlan, nombrePlan, factorPlan] of PLANES_HOTEL_20) {
      const slug = `estadia-${slugHotel}-${slugPlan}`;
      const precio = Math.max(199, Math.round((precioBase * factorPlan) / 10) * 10);
      const titulo = `${nombreHotel} (${ciudad}): ${nombrePlan}`;

      lista.push({
        slug,
        cluster: "all-inclusive",
        clusterNombre: `Hoteles en ${ciudad} (${pais})`,
        titulo,
        destinoOPais: pais,
        precioDesdeUSD: precio,
        constructorDatos: () =>
          construirObjetoLanding({
            slug,
            cluster: "all-inclusive",
            clusterNombre: `Hoteles y Resorts en ${ciudad}`,
            badge: `${ciudad}, ${pais} · ${nombrePlan}`,
            banderas: esInt ? ["Perú", pais] : ["Perú"],
            tituloHero: `${nombreHotel} (${ciudad}):`,
            tituloDestacado: `${nombrePlan} Desde $${precio}`,
            descripcionHero: `Disfruta tu estadía en ${nombreHotel} ubicado en ${ciudad} (${pais}) bajo la modalidad "${nombrePlan}", con vuelos ida y vuelta desde Lima, traslados y voucher hotelero garantizado.`,
            negritaHero: `Reserva hoy en ${nombreHotel} abonando el 50% de inicial en Cityland Travel.`,
            destinoOPais: pais,
            precioBase: precio,
            etiquetaVitrina: `${nombreHotel} · ${ciudad}`,
            duracionOServicio: `${nombrePlan}`,
            checksBase: [
              `Estadía confirmada en ${nombreHotel} (${ciudad}, ${pais})`,
              "Pasajes aéreos ida y vuelta desde Lima con impuestos incluidos",
              "Traslados aeropuerto – hotel – aeropuerto y asistencia al viajero",
            ],
            checksPlus: [
              "Voucher oficial de hotel y código PNR verificable en aerolínea",
              "Acceso a las instalaciones, piscinas y servicios del alojamiento",
              "Facilidad de pago con el 50% de inicial y saldo en cuotas",
            ],
            checksVip: [
              "Opciones para familias, parejas, luna de miel y grupos",
              "Comprobante electrónico SUNAT (RUC 20614914239) y contrato",
              "Atención personalizada por WhatsApp (+51 944 103 890)",
            ],
            esInternacional: esInt,
            keywords: [
              `${nombreHotel.toLowerCase()} paquete desde lima`,
              `oferta ${slugHotel.replace(/-/g, " ")}`,
              `${nombreHotel.toLowerCase()} ${ciudad.toLowerCase()} precio`,
            ],
            faqsExtra: [
              {
                q: `¿Qué incluye el plan "${nombrePlan}" en ${nombreHotel}?`,
                a: `Incluye boletos aéreos ida y vuelta desde Lima, alojamiento oficial en ${nombreHotel} (${ciudad}), traslados de llegada y salida, y asistencia permanente de nuestro equipo.`,
              },
              {
                q: `¿Con cuánto puedo separar mi habitación en ${nombreHotel}?`,
                a: `Puedes congelar la tarifa referencial Desde $${precio} USD abonando el 50% de inicial y completando el saldo en cuotas programadas antes de tu fecha de viaje.`,
              },
            ],
          }),
      });
    }
  }

  // --------------------------------------------------------------------------
  // BLOQUE 10: 50 Rutas del Perú × 15 Feriados/Temporadas × 2 Modalidades = 1,500
  // --------------------------------------------------------------------------
  for (const [nombreRuta, slugRuta, precioBase, atractivosRuta] of RUTAS_PERU_50) {
    for (const [nombreFeriado, slugFeriado, factorFeriado] of FERIADOS_PERU_15) {
      for (const [slugModPeru, nombreModPeru, factorModPeru] of MODALIDADES_PERU_2) {
        const slug = `rutas-peru-${slugRuta}-${slugFeriado}-${slugModPeru}`;
        const precio = Math.max(129, Math.round((precioBase * factorFeriado * factorModPeru) / 5) * 5);
        const titulo = `${nombreRuta} en ${nombreFeriado} — ${nombreModPeru}`;

        lista.push({
          slug,
          cluster: "tours",
          clusterNombre: `Turismo en Perú · ${nombreFeriado}`,
          titulo,
          destinoOPais: "Perú",
          precioDesdeUSD: precio,
          constructorDatos: () =>
            construirObjetoLanding({
              slug,
              cluster: "tours",
              clusterNombre: `Viajes por el Perú · ${nombreFeriado}`,
              badge: `Perú en ${nombreFeriado} · Separa con 50%`,
              banderas: ["Perú"],
              tituloHero: `${nombreRuta} (${nombreFeriado}):`,
              tituloDestacado: `Todo Organizado Desde $${precio}`,
              descripcionHero: `Recorre ${atractivosRuta} durante ${nombreFeriado}. Programa completo con transporte aéreo o turístico, hotel seleccionado, desayunos, traslados e ingresos.`,
              negritaHero: `Reserva hoy tu cupo para ${nombreFeriado} con el 50% de inicial en Cityland Travel.`,
              destinoOPais: "Perú",
              precioBase: precio,
              etiquetaVitrina: `${nombreRuta} (${nombreFeriado})`,
              duracionOServicio: `${nombreModPeru}`,
              checksBase: [
                `Circuito turístico: ${atractivosRuta}`,
                "Alojamiento seleccionado con desayunos incluidos",
                "Traslados de llegada y salida + movilidad turística oficial",
              ],
              checksPlus: [
                "Guías oficiales de turismo en español e ingresos incluidos",
                "Facilidad de separar con el 50% de inicial para feriados y vacaciones",
                "Boleta o Factura Electrónica SUNAT (RUC 20614914239)",
              ],
              checksVip: [
                "Opciones en hoteles 3★, 4★ y 5★ para parejas, familias y grupos",
                "Coordinación de vuelos nacionales y horarios a medida",
                "Asistencia 24/7 por WhatsApp (+51 944 103 890) durante todo el viaje",
              ],
              esInternacional: false,
              keywords: [
                `${nombreRuta.toLowerCase()} en ${nombreFeriado.toLowerCase()}`,
                `paquete ${slugRuta.replace(/-/g, " ")} ${slugFeriado.replace(/-/g, " ")}`,
                `viajes por el peru ${nombreFeriado.toLowerCase()}`,
              ],
              faqsExtra: [
                {
                  q: `¿Qué lugares visitaremos en el circuito "${nombreRuta}" durante ${nombreFeriado}?`,
                  a: `El itinerario incluye ${atractivosRuta}, con traslados coordinados, alojamiento garantizado, guías locales oficiales y asistencia permanente.`,
                },
                {
                  q: `¿Cómo aseguro mis cupos para ${nombreRuta} en ${nombreFeriado}?`,
                  a: `Debido a la alta demanda en ${nombreFeriado}, te recomendamos separar hoy con el 50% de inicial (Desde $${precio} USD por pasajero) escribiéndonos al WhatsApp +51 944 103 890.`,
                },
              ],
            }),
        });
      }
    }
  }

  return lista;
}
