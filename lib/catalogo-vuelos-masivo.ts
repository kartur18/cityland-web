import type { RutaVueloSEO } from "@/lib/rutas-vuelos";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

interface SemillaRuta {
  slug: string;
  origen: string;
  codigoOrigen: string;
  paisOrigen: string;
  destino: string;
  codigoDestino: string;
  paisDestino: string;
  precioUSD: number;
  aerolineas: string;
  duracion: string;
  escala: string;
  requisitos: string;
  img: string;
  modalidad: "europa" | "usa" | "latam" | "caribe" | "nacional" | "retorno" | "exotico";
}

const IMG_MADRID = "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80";
const IMG_ESPANA = "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80";
const IMG_ITALIA = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80";
const IMG_EUROPA = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80";
const IMG_USA = "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=80";
const IMG_NYC = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80";
const IMG_CARIBE = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80";
const IMG_LATAM = "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1000&q=80";
const IMG_PERU = "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80";
const IMG_EXOTICO = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80";
const IMG_AVION_CABINA = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80";
const IMG_AEROPUERTO = "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80";
const IMG_HOTEL_RESORT = "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80";

/* ── 1. Destinos en España (Ida desde Lima + Retorno a Lima) ── */
const CIUDADES_ESPANA: [string, string, string, number, string][] = [
  ["Alicante", "alicante", "ALC", 1330, "Vía Madrid (Iberia / Air Europa)"],
  ["Palma de Mallorca", "palma-de-mallorca", "PMI", 1350, "Vía Madrid o Barcelona (Iberia / Air Europa)"],
  ["Tenerife", "tenerife", "TFN", 1380, "Vía Madrid (Iberia / Air Europa / Plus Ultra)"],
  ["Gran Canaria", "gran-canaria", "LPA", 1385, "Vía Madrid (Iberia / Air Europa)"],
  ["Zaragoza", "zaragoza", "ZAZ", 1320, "Conexión en Madrid-Barajas"],
  ["Murcia", "murcia", "RMU", 1335, "Conexión en Madrid"],
  ["Valladolid", "valladolid", "VLL", 1325, "Conexión en Madrid"],
  ["Vigo", "vigo", "VGO", 1340, "Vía Madrid (Iberia / Air Europa)"],
  ["La Coruña", "la-coruna", "LCG", 1340, "Vía Madrid (Iberia / Air Europa)"],
  ["Santiago de Compostela", "santiago-de-compostela", "SCQ", 1345, "Vía Madrid (Iberia)"],
  ["Asturias (Oviedo)", "asturias", "OVD", 1345, "Vía Madrid (Iberia)"],
  ["Santander", "santander", "SDR", 1340, "Vía Madrid (Iberia)"],
  ["San Sebastián", "san-sebastian", "EAS", 1350, "Vía Madrid (Iberia)"],
  ["Pamplona", "pamplona", "PNA", 1345, "Vía Madrid (Iberia)"],
  ["Granada", "granada", "GRX", 1335, "Vía Madrid (Iberia)"],
  ["Jerez de la Frontera", "jerez", "XRY", 1340, "Vía Madrid (Iberia)"],
  ["Almería", "almeria", "LEI", 1345, "Vía Madrid (Iberia)"],
  ["Ibiza", "ibiza", "IBZ", 1370, "Vía Madrid o Barcelona"],
  ["Menorca", "menorca", "MAH", 1375, "Vía Madrid o Barcelona"],
  ["Girona", "girona", "GRO", 1330, "Conexión vía Barcelona / Madrid"],
  ["Salamanca", "salamanca", "SLM", 1325, "Conexión vía Madrid"],
  ["Badajoz", "badajoz", "BJZ", 1340, "Vía Madrid (Iberia)"],
  ["Logroño", "logrono", "RJL", 1335, "Vía Madrid (Iberia)"],
  ["León", "leon-espana", "LEN", 1335, "Vía Madrid (Iberia)"],
];

/* ── 2. Destinos en Italia y Resto de Europa (Ida desde Lima + Retornos) ── */
const CIUDADES_EUROPA: [string, string, string, string, number, string][] = [
  ["Turín", "turin", "TRN", "Italia", 1380, "Iberia, KLM, Air France y LATAM"],
  ["Génova", "genova", "GOA", "Italia", 1385, "Iberia, KLM y Air France"],
  ["Bolonia", "bolonia", "BLQ", "Italia", 1375, "Iberia, Air Europa y KLM"],
  ["Florencia", "florencia", "FLR", "Italia", 1385, "Iberia, Air France y KLM"],
  ["Venecia", "venecia", "VCE", "Italia", 1380, "Iberia, Air Europa, Air France y KLM"],
  ["Nápoles", "napoles", "NAP", "Italia", 1385, "Iberia, Air France y KLM"],
  ["Bari", "bari", "BRI", "Italia", 1395, "Iberia y ITA Airways vía Madrid/Roma"],
  ["Catania", "catania", "CTA", "Italia", 1395, "Iberia y KLM vía Madrid/Roma"],
  ["Palermo", "palermo", "PMO", "Italia", 1395, "Iberia y ITA Airways"],
  ["Verona", "verona", "VRN", "Italia", 1385, "Iberia y Air France"],
  ["Pisa", "pisa", "PSA", "Italia", 1385, "Iberia y British Airways"],
  ["Lyon", "lyon", "LYS", "Francia", 1375, "Air France, Iberia y KLM"],
  ["Marsella", "marsella", "MRS", "Francia", 1375, "Air France, Iberia y KLM"],
  ["Niza", "niza", "NCE", "Francia", 1385, "Air France, Iberia y KLM"],
  ["Toulouse", "toulouse", "TLS", "Francia", 1375, "Air France e Iberia"],
  ["Burdeos", "burdeos", "BOD", "Francia", 1375, "Air France e Iberia"],
  ["Bruselas", "bruselas", "BRU", "Bélgica", 1360, "Iberia, Air Europa, KLM y Air France"],
  ["Zúrich", "zurich", "ZRH", "Suiza", 1390, "Iberia, Air Europa, KLM y Swiss"],
  ["Ginebra", "ginebra", "GVA", "Suiza", 1385, "Iberia, Air France y KLM"],
  ["Basilea", "basilea", "BSL", "Suiza", 1390, "KLM y Air France"],
  ["Londres", "londres", "LHR", "Reino Unido", 1395, "Iberia, British Airways, LATAM y KLM"],
  ["Mánchester", "manchester", "MAN", "Reino Unido", 1410, "KLM, Air France y British Airways"],
  ["Edimburgo", "edimburgo", "EDI", "Reino Unido", 1420, "KLM, British Airways e Iberia"],
  ["Dublín", "dublin", "DUB", "Irlanda", 1395, "Iberia, KLM y Air France"],
  ["Múnich", "munich", "MUC", "Alemania", 1385, "Iberia, Air Europa, KLM y Lufthansa"],
  ["Berlín", "berlin", "BER", "Alemania", 1380, "Iberia, KLM y Air France"],
  ["Hamburgo", "hamburgo", "HAM", "Alemania", 1390, "KLM, Air France e Iberia"],
  ["Düsseldorf", "dusseldorf", "DUS", "Alemania", 1385, "Iberia, KLM y Air France"],
  ["Stuttgart", "stuttgart", "STR", "Alemania", 1390, "KLM y Air France"],
  ["Viena", "viena", "VIE", "Austria", 1395, "Iberia, KLM y Air France"],
  ["Praga", "praga", "PRG", "República Checa", 1395, "Iberia, KLM y Air France"],
  ["Budapest", "budapest", "BUD", "Hungría", 1410, "Iberia, KLM y Air France"],
  ["Varsovia", "varsovia", "WAW", "Polonia", 1415, "KLM, Air France y LOT"],
  ["Cracovia", "cracovia", "KRK", "Polonia", 1420, "KLM y Lufthansa"],
  ["Atenas", "atenas", "ATH", "Grecia", 1430, "Iberia, Air Europa, KLM y Air France"],
  ["Estocolmo", "estocolmo", "ARN", "Suecia", 1420, "KLM, Iberia y Air France"],
  ["Copenhague", "copenhague", "CPH", "Dinamarca", 1415, "KLM, Air France e Iberia"],
  ["Oslo", "oslo", "OSL", "Noruega", 1425, "KLM y Air France"],
  ["Helsinki", "helsinki", "HEL", "Finlandia", 1440, "Iberia, KLM y Finnair"],
  ["Oporto", "oporto", "OPO", "Portugal", 1340, "Iberia, Air Europa y TAP"],
  ["Faro", "faro", "FAO", "Portugal", 1360, "Iberia y TAP vía Madrid/Lisboa"],
  ["Bucarest", "bucarest", "OTP", "Rumanía", 1440, "KLM, Air France y Turkish Airlines"],
  ["Zagreb", "zagreb", "ZAG", "Croacia", 1435, "KLM, Air France e Iberia"],
];

/* ── 3. Estados Unidos y Canadá (Ida desde Lima + Retornos hacia Lima) ── */
const CIUDADES_USA_CANADA: [string, string, string, string, number, string][] = [
  ["Newark (Nueva Jersey)", "newark", "EWR", "Estados Unidos", 780, "United Airlines, Copa Airlines, LATAM y Avianca"],
  ["Paterson / Nueva Jersey", "paterson-nueva-jersey", "EWR", "Estados Unidos", 780, "United Airlines, Copa Airlines y LATAM (vía EWR/JFK)"],
  ["Los Ángeles", "los-angeles", "LAX", "Estados Unidos", 810, "LATAM, Copa Airlines, Avianca y American Airlines"],
  ["San Francisco", "san-francisco", "SFO", "Estados Unidos", 840, "Copa Airlines, United Airlines, American y LATAM"],
  ["San Diego", "san-diego", "SAN", "Estados Unidos", 850, "American Airlines, United y Delta"],
  ["Las Vegas", "las-vegas", "LAS", "Estados Unidos", 830, "Copa Airlines, American, United y Avianca"],
  ["Phoenix", "phoenix", "PHX", "Estados Unidos", 845, "American Airlines y United Airlines"],
  ["Denver", "denver", "DEN", "Estados Unidos", 840, "United Airlines, Copa Airlines y American"],
  ["Salt Lake City", "salt-lake-city", "SLC", "Estados Unidos", 850, "Delta Air Lines, American y United"],
  ["Seattle", "seattle", "SEA", "Estados Unidos", 870, "Delta Air Lines, American y United"],
  ["Portland", "portland", "PDX", "Estados Unidos", 875, "Delta, United y American Airlines"],
  ["Houston", "houston", "IAH", "Estados Unidos", 770, "United Airlines (Directo), Copa Airlines y Avianca"],
  ["Dallas", "dallas", "DFW", "Estados Unidos", 795, "American Airlines, Copa Airlines y United"],
  ["Austin", "austin", "AUS", "Estados Unidos", 820, "Copa Airlines, American y United"],
  ["San Antonio", "san-antonio", "SAT", "Estados Unidos", 825, "United Airlines y American Airlines"],
  ["Chicago", "chicago", "ORD", "Estados Unidos", 810, "Copa Airlines, United, American y Avianca"],
  ["Detroit", "detroit", "DTW", "Estados Unidos", 835, "Delta Air Lines, American y United"],
  ["Mineápolis", "mineapolis", "MSP", "Estados Unidos", 845, "Delta Air Lines y United"],
  ["Atlanta", "atlanta", "ATL", "Estados Unidos", 785, "Delta Air Lines (Directo), LATAM y Copa Airlines"],
  ["Charlotte", "charlotte", "CLT", "Estados Unidos", 805, "American Airlines y Copa Airlines"],
  ["Tampa", "tampa", "TPA", "Estados Unidos", 750, "Copa Airlines, American Airlines y LATAM"],
  ["Fort Lauderdale", "fort-lauderdale", "FLL", "Estados Unidos", 690, "Spirit, Copa Airlines, Avianca y JetBlue"],
  ["West Palm Beach", "west-palm-beach", "PBI", "Estados Unidos", 740, "American Airlines y Delta"],
  ["Jacksonville", "jacksonville", "JAX", "Estados Unidos", 765, "American Airlines y Delta"],
  ["Washington D.C.", "washington", "IAD", "Estados Unidos", 785, "Copa Airlines, Avianca, United y American"],
  ["Baltimore", "baltimore", "BWI", "Estados Unidos", 785, "Copa Airlines, Spirit y American"],
  ["Filadelfia", "filadelfia", "PHL", "Estados Unidos", 795, "American Airlines, Copa y United"],
  ["Boston", "boston", "BOS", "Estados Unidos", 805, "Copa Airlines, Avianca, LATAM y American"],
  ["Hartford (Connecticut)", "hartford-connecticut", "BDL", "Estados Unidos", 820, "American Airlines, Delta y JetBlue"],
  ["Stamford / Westchester", "stamford-connecticut", "HPN", "Estados Unidos", 815, "American Airlines y Delta (vía JFK/LGA/HPN)"],
  ["Toronto", "toronto", "YYZ", "Canadá", 860, "Air Canada, Copa Airlines, Avianca y Arajet"],
  ["Montreal", "montreal", "YUL", "Canadá", 870, "Air Canada, Copa Airlines, Avianca y Arajet"],
  ["Vancouver", "vancouver", "YVR", "Canadá", 920, "Air Canada, United y American Airlines"],
  ["Calgary", "calgary", "YYC", "Canadá", 930, "Air Canada y United Airlines"],
  ["Ottawa", "ottawa", "YOW", "Canadá", 890, "Air Canada y United Airlines"],
];

/* ── 4. México, Caribe, Centroamérica, Sudamérica y Exóticos ── */
const CIUDADES_LATAM_CARIBE: [string, string, string, string, number, string, string][] = [
  ["Ciudad de México", "ciudad-de-mexico", "MEX", "México", 690, "LATAM, Aeroméxico, Copa Airlines y Avianca", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen / Japón."],
  ["Guadalajara", "guadalajara", "GDL", "México", 730, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen."],
  ["Monterrey", "monterrey", "MTY", "México", 735, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen."],
  ["Tulum", "tulum", "TQO", "México", 720, "Copa Airlines y Avianca", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen."],
  ["Los Cabos", "los-cabos", "SJD", "México", 760, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana o Visa de EE. UU. vigente."],
  ["Puerto Vallarta", "puerto-vallarta", "PVR", "México", 755, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana o Visa de EE. UU. vigente."],
  ["Santo Domingo", "santo-domingo", "SDQ", "República Dominicana", 690, "Arajet, Copa Airlines, Avianca y Sky", "Sin visa para peruanos (solo pasaporte vigente + E-Ticket dominicano)."],
  ["La Romana / Bayahíbe", "la-romana", "LRM", "República Dominicana", 730, "Copa Airlines, LATAM y Arajet", "Sin visa para peruanos (solo pasaporte vigente)."],
  ["Puerto Plata", "puerto-plata", "POP", "República Dominicana", 745, "Copa Airlines y Arajet", "Sin visa para peruanos (solo pasaporte vigente)."],
  ["La Habana", "la-habana", "HAV", "Cuba", 730, "Copa Airlines y LATAM", "Solo pasaporte vigente + Tarjeta de Turista (incluida en tu asesoría)."],
  ["Varadero", "varadero", "VRA", "Cuba", 750, "Copa Airlines vía Panamá/Habana", "Solo pasaporte vigente + Tarjeta de Turista."],
  ["Curazao", "curazao", "CUR", "Curazao", 720, "Copa Airlines, Avianca y LATAM", "Sin visa para peruanos (solo pasaporte vigente + vacuna fiebre amarilla)."],
  ["Montego Bay (Jamaica)", "montego-bay-jamaica", "MBJ", "Jamaica", 760, "Copa Airlines y LATAM", "Sin visa para peruanos por turismo (solo pasaporte vigente)."],
  ["San Juan de Puerto Rico", "san-juan-puerto-rico", "SJU", "Puerto Rico", 750, "Copa Airlines, Avianca y American", "Requiere Visa de Estados Unidos B1/B2 vigente."],
  ["Nassau (Bahamas)", "nassau-bahamas", "NAS", "Bahamas", 790, "Copa Airlines vía Panamá", "Sin visa para peruanos (pasaporte + vacuna fiebre amarilla)."],
  ["San Martín (St. Maarten)", "san-martin-caribe", "SXM", "San Martín", 780, "Copa Airlines vía Panamá", "Pasaporte vigente con al menos 6 meses de validez."],
  ["San José de Costa Rica", "san-jose-costa-rica", "SJO", "Costa Rica", 650, "LATAM (Directo), Avianca y Copa Airlines", "Sin visa para peruanos (pasaporte vigente + vacuna fiebre amarilla)."],
  ["Ciudad de Guatemala", "ciudad-de-guatemala", "GUA", "Guatemala", 680, "Avianca y Copa Airlines", "Sin visa para peruanos (pasaporte vigente)."],
  ["San Salvador", "san-salvador", "SAL", "El Salvador", 660, "Avianca (Directo) y Copa Airlines", "Sin visa para peruanos (pasaporte vigente)."],
  ["Cali", "cali", "CLO", "Colombia", 470, "Avianca, Copa Airlines y LATAM", "Viaja solo con tu DNI peruano vigente (Acuerdo Comunidad Andina)."],
  ["Barranquilla", "barranquilla", "BAQ", "Colombia", 495, "Avianca y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Santa Marta", "santa-marta", "SMR", "Colombia", 490, "Avianca y LATAM", "Viaja solo con tu DNI peruano vigente."],
  ["Pereira (Eje Cafetero)", "pereira", "PEI", "Colombia", 485, "Avianca y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Bucaramanga", "bucaramanga", "BGA", "Colombia", 495, "Avianca y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Quito", "quito", "UIO", "Ecuador", 460, "LATAM, Avianca y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Guayaquil", "guayaquil", "GYE", "Ecuador", 450, "LATAM, Avianca y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Cuenca", "cuenca", "CUE", "Ecuador", 480, "LATAM y Avianca vía Quito/Guayaquil", "Viaja solo con tu DNI peruano vigente."],
  ["Santa Cruz de la Sierra", "santa-cruz", "VVI", "Bolivia", 465, "BoA y LATAM Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["La Paz", "la-paz", "LPB", "Bolivia", 460, "BoA y LATAM Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Cochabamba", "cochabamba", "CBB", "Bolivia", 480, "BoA vía Santa Cruz/La Paz", "Viaja solo con tu DNI peruano vigente."],
  ["Córdoba", "cordoba-argentina", "COR", "Argentina", 560, "LATAM, Aerolíneas Argentinas y Copa", "Viaja solo con tu DNI peruano vigente."],
  ["Mendoza", "mendoza", "MDZ", "Argentina", 550, "LATAM y Sky Airline", "Viaja solo con tu DNI peruano vigente."],
  ["Bariloche", "bariloche", "BRC", "Argentina", 640, "Aerolíneas Argentinas, LATAM y Sky", "Viaja solo con tu DNI peruano vigente."],
  ["Rosario", "rosario", "ROS", "Argentina", 570, "LATAM y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Salta", "salta", "SLA", "Argentina", 565, "LATAM y Aerolíneas Argentinas", "Viaja solo con tu DNI peruano vigente."],
  ["Ushuaia", "ushuaia", "USH", "Argentina", 690, "Aerolíneas Argentinas y LATAM", "Viaja solo con tu DNI peruano vigente."],
  ["Antofagasta", "antofagasta", "ANF", "Chile", 450, "LATAM, Sky Airline y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Iquique", "iquique", "IQQ", "Chile", 450, "LATAM, Sky Airline y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Calama (San Pedro de Atacama)", "calama", "CJC", "Chile", 465, "LATAM y Sky Airline", "Viaja solo con tu DNI peruano vigente."],
  ["Concepción", "concepcion-chile", "CCP", "Chile", 470, "LATAM, Sky y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Puerto Montt", "puerto-montt", "PMC", "Chile", 485, "LATAM y Sky Airline", "Viaja solo con tu DNI peruano vigente."],
  ["Montevideo", "montevideo", "MVD", "Uruguay", 570, "LATAM, Sky Airline y Copa", "Viaja solo con tu DNI peruano vigente."],
  ["Punta del Este", "punta-del-este", "PDP", "Uruguay", 610, "LATAM y Aerolíneas Argentinas", "Viaja solo con tu DNI peruano vigente."],
  ["Asunción", "asuncion", "ASU", "Paraguay", 530, "LATAM y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Foz de Iguazú", "foz-de-iguazu", "IGU", "Brasil", 550, "LATAM y GOL", "Viaja solo con tu DNI peruano vigente."],
  ["Florianópolis", "florianopolis", "FLN", "Brasil", 580, "LATAM, Sky y GOL", "Viaja solo con tu DNI peruano vigente."],
  ["Salvador de Bahía", "salvador-de-bahia", "SSA", "Brasil", 610, "LATAM y GOL", "Viaja solo con tu DNI peruano vigente."],
  ["Brasilia", "brasilia", "BSB", "Brasil", 590, "LATAM Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Caracas", "caracas", "CCS", "Venezuela", 660, "Copa Airlines y LATAM", "Consultar requisitos consulares vigentes con nuestro equipo."],
  ["Dubái", "dubai", "DXB", "Emiratos Árabes", 1590, "Emirates, Qatar Airways, KLM y Turkish Airlines", "Asesoría completa de visado electrónico para Dubái incluida."],
  ["Tel Aviv (Tierra Santa)", "tel-aviv", "TLV", "Israel", 1550, "Iberia, Air Europa y KLM", "Pasaporte vigente con mínimo 6 meses de validez."],
  ["El Cairo", "el-cairo", "CAI", "Egipto", 1490, "Iberia, Turkish Airlines y KLM", "Visa a la llegada en el aeropuerto de El Cairo con pasaporte vigente."],
  ["Tokio", "tokio", "NRT", "Japón", 1690, "United, American, Air Canada y Aeroméxico", "Exención de visa para pasaporte peruano electrónico vigente."],
  ["Seúl", "seul", "ICN", "Corea del Sur", 1720, "United, Delta y Korean Air", "Pasaporte vigente + autorización electrónica K-ETA."],
  ["Bangkok", "bangkok", "BKK", "Tailandia", 1750, "Qatar Airways, Turkish Airlines y KLM", "Sin visa para peruanos (solo pasaporte + vacuna fiebre amarilla)."],
];

/* ── 5. Ciudades del Perú (Rutas Nacionales desde/hacia Lima + Salidas Internacionales desde Provincias) ── */
const CIUDADES_PERU: [string, string, string, number][] = [
  ["Arequipa", "arequipa", "AQP", 149],
  ["Trujillo", "trujillo", "TRU", 149],
  ["Chiclayo", "chiclayo", "CIX", 149],
  ["Piura", "piura", "PIU", 159],
  ["Cusco", "cusco", "CUZ", 159],
  ["Iquitos", "iquitos", "IQT", 169],
  ["Tarapoto", "tarapoto", "TPP", 149],
  ["Tacna", "tacna", "TCQ", 159],
  ["Juliaca (Puno)", "juliaca", "JUL", 169],
  ["Cajamarca", "cajamarca", "CJA", 149],
  ["Pucallpa", "pucallpa", "PCL", 149],
  ["Tumbes", "tumbes", "TBP", 169],
  ["Talara (Máncora)", "talara", "TYL", 169],
  ["Ayacucho", "ayacucho", "AYP", 149],
  ["Huancayo (Jauja)", "jauja", "JAU", 149],
  ["Puerto Maldonado", "puerto-maldonado", "PEM", 179],
  ["Jaén", "jaen", "JAE", 169],
  ["Chachapoyas", "chachapoyas", "CHH", 189],
  ["Huaraz (Anta)", "huaraz", "ATA", 159],
  ["Tingo María", "tingo-maria", "TGI", 149],
];

const DESTINOS_INTL_DESDE_PROVINCIAS: [string, string, string, string, number, string, string][] = [
  ["Madrid", "madrid", "MAD", "España", 1360, "LATAM + Iberia / Air Europa / Plus Ultra", IMG_MADRID],
  ["Barcelona", "barcelona", "BCN", "España", 1380, "LATAM + Iberia / Air Europa", IMG_ESPANA],
  ["Roma", "roma", "FCO", "Italia", 1440, "LATAM + Iberia / KLM / Air France", IMG_ITALIA],
  ["Milán", "milan", "MXP", "Italia", 1430, "LATAM + Iberia / KLM / Air France", IMG_ITALIA],
  ["París", "paris", "CDG", "Francia", 1440, "LATAM + Air France / KLM / Iberia", IMG_EUROPA],
  ["Miami", "miami", "MIA", "Estados Unidos", 760, "LATAM Airlines / Copa Airlines / Avianca", IMG_USA],
  ["Nueva York", "nueva-york", "JFK", "Estados Unidos", 850, "LATAM Airlines / Copa Airlines / United", IMG_NYC],
  ["Newark (Nueva Jersey)", "newark", "EWR", "Estados Unidos", 850, "LATAM + United Airlines / Copa Airlines", IMG_NYC],
  ["Cancún", "cancun", "CUN", "México", 760, "LATAM / Sky Airline / Copa Airlines", IMG_CARIBE],
  ["Punta Cana", "punta-cana", "PUJ", "República Dominicana", 790, "LATAM / Copa Airlines / Sky / Arajet", IMG_CARIBE],
  ["Cartagena", "cartagena", "CTG", "Colombia", 550, "LATAM / Avianca / Copa Airlines", IMG_CARIBE],
  ["Buenos Aires", "buenos-aires", "EZE", "Argentina", 590, "LATAM / Sky Airline / JetSMART", IMG_LATAM],
  ["Santiago", "santiago", "SCL", "Chile", 490, "LATAM / Sky Airline / JetSMART", IMG_LATAM],
  ["Panamá", "panama", "PTY", "Panamá", 590, "Copa Airlines / LATAM", IMG_CARIBE],
];

const SLUGS_EXISTENTES = new Set([
  "lima-punta-cana", "lima-cancun", "lima-cartagena", "lima-medellin", "lima-cusco",
  "lima-roma", "lima-paris", "lima-rio-de-janeiro", "lima-santiago", "lima-bogota",
  "lima-panama", "lima-valencia", "lima-malaga", "lima-milan", "lima-amsterdam",
  "lima-estambul", "miami-lima", "buenos-aires-lima", "santiago-lima", "lima-san-andres",
  "lima-aruba", "lima-arequipa", "lima-piura", "lima-sevilla", "lima-bilbao",
  "lima-lisboa", "lima-frankfurt", "lima-nueva-york", "lima-orlando", "roma-lima",
  "paris-lima", "milan-lima", "lima-sao-paulo", "lima-tarapoto", "lima-iquitos",
  "lima-puno", "lima-madrid", "madrid-lima", "lima-barcelona", "barcelona-lima",
  "lima-miami", "lima-buenos-aires",
]);

function construirRutaVuelo(s: SemillaRuta): RutaVueloSEO {
  const esNacional = s.modalidad === "nacional";
  const esRetornoEuropa =
    s.modalidad === "retorno" &&
    ["España", "Italia", "Francia", "Países Bajos", "Alemania", "Suiza", "Portugal", "Bélgica", "Reino Unido"].includes(
      s.paisOrigen
    );
  const p2Maletas = s.precioUSD + (esNacional ? 35 : 95);
  const pPaquete = s.precioUSD + (esNacional ? 130 : esRetornoEuropa ? 60 : 260);
  const waMsg = esRetornoEuropa
    ? `Hola, escribo desde ${s.origen} (${s.paisOrigen}). Quiero consultar disponibilidad y precio para viajar de ${s.origen} a ${s.destino} o comprar pasaje para un familiar en Perú (Desde $${s.precioUSD} USD). ¿Me pueden ayudar?`
    : `Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de ${s.origen} a ${s.destino} (Desde $${s.precioUSD} USD). ¿Me pueden ayudar?`;

  const textoBusqueda =
    s.destino === "Lima"
      ? s.slug
      : `${s.destino} ${s.paisDestino}`;
  const [f0, f1, f2, f3, f4] = obtenerGaleriaPorTexto(
    textoBusqueda,
    s.modalidad === "europa" || esRetornoEuropa
      ? "europa"
      : s.modalidad === "usa"
      ? "usa"
      : s.modalidad === "caribe"
      ? "caribe"
      : "sudamerica"
  );

  return {
    slug: s.slug,
    origen: s.origen,
    destino: s.destino,
    codigoOrigen: s.codigoOrigen,
    codigoDestino: s.codigoDestino,
    metaTitle: `Vuelos de ${s.origen} a ${s.destino} Desde $${s.precioUSD} USD (Impuestos Incluidos) | Cityland Travel`,
    metaDescription: `Cotiza vuelos de ${s.origen} (${s.codigoOrigen}) a ${s.destino} (${s.codigoDestino}) Desde $${s.precioUSD} USD con impuestos incluidos. Salidas confirmadas con ${s.aerolineas}, equipaje en bodega y atención personalizada de Cityland Travel (RUC 20614914239).`,
    keywords: [
      `vuelos de ${s.origen.toLowerCase()} a ${s.destino.toLowerCase()}`,
      `pasajes aereos ${s.origen.toLowerCase()} ${s.destino.toLowerCase()}`,
      `vuelos baratos ${s.origen.toLowerCase()} a ${s.destino.toLowerCase()}`,
      `boleto aereo ${s.codigoOrigen.toLowerCase()} ${s.codigoDestino.toLowerCase()}`,
      `precio pasaje ${s.origen.toLowerCase()} ${s.destino.toLowerCase()} en dolares`,
      ...(esRetornoEuropa
        ? [
            `comprar pasaje desde ${s.origen.toLowerCase()} para familiar en peru`,
            `vuelos ${s.origen.toLowerCase()} lima 2 maletas 23 kg`,
          ]
        : []),
      "cityland travel",
    ],
    precioDesdeUSD: s.precioUSD,
    faqs: [
      {
        q: `¿Qué aerolíneas operan la ruta de ${s.origen} (${s.codigoOrigen}) a ${s.destino} (${s.codigoDestino})?`,
        a: `Trabajamos con salidas confirmadas en ${s.aerolineas} (${s.escala}), con un tiempo estimado de viaje de ${s.duracion}. Emitimos tu boleto con código de reserva PNR y E-Ticket IATA de 13 dígitos verificables al instante.`,
      },
      {
        q: `¿El precio Desde $${s.precioUSD} USD incluye impuestos aeroportuarios?`,
        a: `Sí. Todas nuestras tarifas están expresadas en dólares americanos (USD) e incluyen impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
      },
      {
        q: esRetornoEuropa
          ? `¿Puedo comprar desde ${s.origen} (${s.paisOrigen}) un pasaje o paquete para que mi familiar viaje desde Perú hacia ${s.origen}?`
          : `¿Qué requisitos necesito para viajar de ${s.origen} a ${s.destino}?`,
        a: esRetornoEuropa
          ? `Sí. Atendemos a residentes peruanos en ${s.origen} que viajan de vacaciones a Lima o que compran a distancia el boleto/carpeta para traer a sus padres, hijos o pareja desde Lima o provincias (incluyendo asistencia gratuita de silla de ruedas SSR WCHR para adultos mayores y entrega de carpeta física en Los Olivos).`
          : esNacional
          ? `${s.requisitos} Nuestro equipo gestiona tu check-in anticipado, selección de asientos, equipaje en bodega y envío de tarjetas de embarque.`
          : `${s.requisitos} Nuestro equipo te asesora paso a paso con el check-in, equipaje de 23 kg y documentación requerida para tu viaje.`,
      },
    ],
    config: {
      badgeHero: `Ruta ${s.codigoOrigen} → ${s.codigoDestino} · ${s.aerolineas}`,
      banderasHero: esNacional ? ["Perú"] : [s.paisOrigen, s.paisDestino],
      tituloHero: `Vuelos y Paquetes de ${s.origen} a`,
      tituloDestacadoHero: `${s.destino} (${s.codigoDestino})`,
      descripcionHero: `Tarifas referenciales verificadas Desde $${s.precioUSD} USD con impuestos y cargos obligatorios incluidos.`,
      negritaHero: `${s.requisitos} Emitimos boletos con equipaje en bodega, reserva verificable y soporte 24/7 por WhatsApp.`,
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje: waMsg,
      checksHero: [
        `Aerolíneas: ${s.aerolineas}`,
        "Impuestos y tasas incluidas en USD",
        "Código de reserva PNR verificable",
      ],
      vitrina: {
        pais: s.paisDestino,
        etiquetaIzq: `${s.codigoOrigen} → ${s.codigoDestino}`,
        etiquetaDer: "Tarifa Verificada",
        img: f0,
        alt: `Vuelos de ${s.origen} a ${s.destino} — Cityland Travel`,
        sobretitulo: `${s.origen} (${s.codigoOrigen}) → ${s.destino} (${s.codigoDestino})`,
        titulo: `Vuelos Confirmados ${s.origen} – ${s.destino}`,
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: `$${s.precioUSD}`,
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje: waMsg,
      },
      seccionCatalogo: {
        sobretitulo: "Opciones de Tarifa en Dólares (Impuestos Incluidos)",
        titulo: esRetornoEuropa
          ? `Modalidades para Residentes en ${s.origen} y Reunificación Familiar`
          : `Modalidades para volar de ${s.origen} a ${s.destino}`,
        filtros: [
          { id: "todos", label: "Todas las tarifas" },
          { id: "vuelo", label: "Solo Boleto Aéreo" },
          { id: "paquete", label: esRetornoEuropa ? "Traer Familiar de Perú" : "Vuelo + Hotel / Tours" },
        ],
      },
      items: [
        {
          id: `${s.slug}-base`,
          titulo: esRetornoEuropa
            ? `Vuelo ${s.origen} – Lima (Especial Residentes en ${s.paisOrigen})`
            : `Boleto Aéreo ${s.origen} – ${s.destino} (Tarifa Estándar)`,
          pais: s.paisDestino,
          filtro: "vuelo",
          subtitulo: `${s.aerolineas} · ${s.escala}`,
          precioPrincipal: `$${s.precioUSD}`,
          precioSecundario: "Impuestos y cargos obligatorios incluidos",
          notaPrecio: "Tarifa sujeta a disponibilidad y condiciones aplicables",
          tag: "Mejor Tarifa",
          tagBg: "bg-emerald-600 text-white",
          img: f2,
          alt: `Boleto de ${s.origen} a ${s.destino}`,
          resumenCorto: `Boleto confirmado ${s.codigoOrigen} → ${s.codigoDestino} con impuestos incluidos y código PNR verificable.`,
          checks: [
            `Boleto confirmado ${s.codigoOrigen} → ${s.codigoDestino}`,
            "Artículo personal + equipaje de cabina 10 kg + bodega 23 kg",
            "Check-in y envío de tarjetas de embarque",
          ],
          waNumber: "51944103890",
          waMensaje: `Hola, quiero cotizar el Boleto de ${s.origen} a ${s.destino} (Desde $${s.precioUSD} USD). ¿Me ayudan con fechas?`,
        },
        {
          id: `${s.slug}-maleta`,
          titulo: `Vuelo ${s.origen} – ${s.destino} + 2 Maletas de 23 kg (46 kg)`,
          pais: s.paisDestino,
          filtro: "vuelo",
          subtitulo: "Ideal para vacaciones familiares, regalos o mudanza",
          precioPrincipal: `$${p2Maletas}`,
          precioSecundario: "Impuestos y 2 maletas de 23 kg incluidas",
          notaPrecio: "Tarifa sujeta a disponibilidad y condiciones aplicables",
          tag: "Doble Equipaje 46 kg",
          tagBg: "bg-blue-600 text-white",
          img: f3,
          alt: `Vuelo con maleta 23 kg de ${s.origen} a ${s.destino}`,
          resumenCorto: `Incluye franquicia ampliada de equipaje en bodega + cabina 10 kg en ruta ${s.origen} – ${s.destino}.`,
          checks: [
            "Franquicia de 1 o 2 maletas de 23 kg en bodega",
            "Equipaje de cabina 10 kg + bolso personal",
            "Asistencia ante cambios o reprogramaciones",
          ],
          waNumber: "51944103890",
          waMensaje: `Hola, quiero cotizar el vuelo de ${s.origen} a ${s.destino} con equipaje de bodega ampliado (Desde $${p2Maletas} USD).`,
        },
        {
          id: `${s.slug}-paquete`,
          titulo: esRetornoEuropa
            ? `Pack Reunificación: Traer Familiar de Lima a ${s.origen} (Con Carpeta)`
            : `Paquete ${s.origen} – ${s.destino} (Vuelo + Hotel + Traslados)`,
          pais: s.paisDestino,
          filtro: "paquete",
          subtitulo: esRetornoEuropa
            ? "Compra desde Europa con entrega de carpeta en Lima + Silla de Ruedas SSR WCHR"
            : "Separa con el 50% y paga en cuotas sin intereses",
          precioPrincipal: `$${pPaquete}`,
          precioSecundario: esRetornoEuropa
            ? "Vuelo + Seguro Schengen 30.000€ + Revisión Carta Invitación / Ospitalità"
            : "Vuelo + Hotel + Traslados incluidos",
          notaPrecio: "Tarifa sujeta a disponibilidad y condiciones aplicables",
          tag: esRetornoEuropa ? "Traer Familiar a Europa" : "Todo Resuelto",
          tagBg: "bg-red-600 text-white",
          img: f1,
          alt: `Paquete a ${s.destino} desde ${s.origen}`,
          resumenCorto: esRetornoEuropa
            ? `Compra desde ${s.origen} el viaje completo para tus padres, hijos o pareja saliendo de Lima o provincias hacia ${s.origen}.`
            : `Viaje completo de ${s.origen} a ${s.destino} con alojamiento verificado, traslados y asesoría personalizada.`,
          checks: esRetornoEuropa
            ? [
                `Boleto Lima → ${s.origen} con código PNR y E-Ticket IATA de 13 dígitos`,
                "Seguro Schengen 30.000€ + Revisión de Carta de Invitación / Lettera di Invito",
                "Asistencia gratuita Silla de Ruedas (SSR WCHR) para padres y adultos mayores",
              ]
            : [
                `Boleto aéreo ${s.origen} – ${s.destino}`,
                "Estadía en hotel seleccionado con desayuno",
                esNacional
                  ? "Traslados aeropuerto – hotel y soporte 24/7"
                  : "Seguro de asistencia y soporte 24/7 en viaje",
              ],
          waNumber: "51944103890",
          waMensaje: esRetornoEuropa
            ? `Hola, vivo en ${s.origen} y quiero cotizar el Pack Reunificación para traer a un familiar desde Lima a ${s.origen} (Desde $${pPaquete} USD).`
            : `Hola, quiero cotizar el Paquete Completo de ${s.origen} a ${s.destino} (Desde $${pPaquete} USD).`,
        },
      ],
      pilares: [
        { titulo: `${s.codigoOrigen} → ${s.codigoDestino}`, sub: s.escala },
        { titulo: "100% en USD", sub: "Impuestos y tasas incluidas sin sorpresas" },
        { titulo: "Separa con 50%", sub: "Congela tu tarifa hoy y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Agencia física formal en Los Olivos, Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Atención Inmediata por WhatsApp Oficial",
        titulo: `¿Buscas la mejor fecha para volar de ${s.origen} a ${s.destino}?`,
        descripcion: "Nuestro equipo de especialistas compara tarifas en tiempo real para conseguirte el mejor precio en dólares.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje: waMsg,
        img: f4,
        alt: `Viajes de ${s.origen} a ${s.destino}`,
      },
      waFlotante: {
        numero: "51944103890",
        texto: `Cotizar ${s.origen} → ${s.destino}`,
        mensaje: waMsg,
      },
    },
  };
}

function generarCatalogoMasivo(): RutaVueloSEO[] {
  const semillas: SemillaRuta[] = [];

  const agregar = (s: SemillaRuta) => {
    if (!SLUGS_EXISTENTES.has(s.slug)) {
      SLUGS_EXISTENTES.add(s.slug);
      semillas.push(s);
    }
  };

  // 1A. Lima -> España y Retornos España -> Lima (incluyendo retornos de Valencia, Málaga, Sevilla, Bilbao)
  for (const [ciudad, slugCiudad, iata, precio, escala] of CIUDADES_ESPANA) {
    agregar({
      slug: `lima-${slugCiudad}`,
      origen: "Lima",
      codigoOrigen: "LIM",
      paisOrigen: "Perú",
      destino: ciudad,
      codigoDestino: iata,
      paisDestino: "España",
      precioUSD: precio,
      aerolineas: "Iberia, Air Europa, Plus Ultra y LATAM",
      duracion: "14h 15m aprox.",
      escala,
      requisitos: "Peruanos viajan sin visa Schengen hasta 90 días (pasaporte vigente, seguro 30.000€, reserva de alojamiento o carta de invitación y sustento económico).",
      img: IMG_ESPANA,
      modalidad: "europa",
    });
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: "España",
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio - 40,
      aerolineas: "Iberia, Air Europa, Plus Ultra y LATAM",
      duracion: "14h 30m aprox.",
      escala,
      requisitos: "Ideal para traer familiares desde España a Lima o retornar al Perú con 1 o 2 maletas de 23 kg.",
      img: IMG_MADRID,
      modalidad: "retorno",
    });
  }

  for (const [ciudad, slugCiudad, iata, precio] of [
    ["Valencia", "valencia", "VLC", 1290],
    ["Málaga", "malaga", "AGP", 1295],
    ["Sevilla", "sevilla", "SVQ", 1295],
    ["Bilbao", "bilbao", "BIO", 1310],
  ] as [string, string, string, number][]) {
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: "España",
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio,
      aerolineas: "Iberia, Air Europa y Air France/KLM",
      duracion: "14h 10m aprox.",
      escala: "Conexión rápida en Madrid-Barajas",
      requisitos: "Emitimos en Lima boletos desde España hacia Perú para residentes, familiares y turistas con maleta de 23 kg.",
      img: IMG_ESPANA,
      modalidad: "retorno",
    });
  }

  // 2. Lima -> Europa y Retornos Europa -> Lima
  for (const [ciudad, slugCiudad, iata, pais, precio, aerolineas] of CIUDADES_EUROPA) {
    agregar({
      slug: `lima-${slugCiudad}`,
      origen: "Lima",
      codigoOrigen: "LIM",
      paisOrigen: "Perú",
      destino: ciudad,
      codigoDestino: iata,
      paisDestino: pais,
      precioUSD: precio,
      aerolineas,
      duracion: "14h 45m aprox.",
      escala: "1 escala en Madrid, Ámsterdam o París",
      requisitos: `Ingreso a ${pais} con pasaporte peruano vigente, Seguro médico europeo 30.000€ y reserva de hotel o carta de invitación.`,
      img: pais === "Italia" ? IMG_ITALIA : IMG_EUROPA,
      modalidad: "europa",
    });
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: pais,
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio - 30,
      aerolineas,
      duracion: "15h 10m aprox.",
      escala: "1 escala en Madrid, Ámsterdam o París",
      requisitos: `Vuelos confirmados desde ${ciudad} (${pais}) hacia Lima para visitas familiares o turismo en Perú.`,
      img: pais === "Italia" ? IMG_ITALIA : IMG_EUROPA,
      modalidad: "retorno",
    });
  }

  for (const [ciudad, slugCiudad, iata, pais, precio] of [
    ["Ámsterdam", "amsterdam", "AMS", "Países Bajos", 1340],
    ["Frankfurt", "frankfurt", "FRA", "Alemania", 1360],
    ["Lisboa", "lisboa", "LIS", "Portugal", 1310],
    ["Estambul", "estambul", "IST", "Turquía", 1450],
  ] as [string, string, string, string, number][]) {
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: pais,
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio,
      aerolineas: "KLM, Iberia, Air Europa y LATAM",
      duracion: "13h 50m aprox.",
      escala: "Directo o 1 conexión europea",
      requisitos: `Boletos desde ${ciudad} hacia Lima pagando en dólares desde Perú con código PNR inmediato.`,
      img: IMG_EUROPA,
      modalidad: "retorno",
    });
  }

  // 3. Lima -> EE. UU. / Canadá y Retornos -> Lima
  for (const [ciudad, slugCiudad, iata, pais, precio, aerolineas] of CIUDADES_USA_CANADA) {
    agregar({
      slug: `lima-${slugCiudad}`,
      origen: "Lima",
      codigoOrigen: "LIM",
      paisOrigen: "Perú",
      destino: ciudad,
      codigoDestino: iata,
      paisDestino: pais,
      precioUSD: precio,
      aerolineas,
      duracion: "8h 30m a 10h 45m aprox.",
      escala: "Directo o 1 conexión corta (Miami, Panamá, Houston o Atlanta)",
      requisitos: `Requiere Pasaporte vigente y Visa de ${pais} válida.`,
      img: iata === "EWR" || iata === "BOS" ? IMG_NYC : IMG_USA,
      modalidad: "usa",
    });
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: pais,
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio - 20,
      aerolineas,
      duracion: "8h 30m a 10h 45m aprox.",
      escala: "Directo o 1 conexión corta",
      requisitos: `Pasajes desde ${ciudad} hacia Lima para comunidad peruana y viajeros internacionales con maleta de 23 kg.`,
      img: IMG_PERU,
      modalidad: "retorno",
    });
  }

  for (const [ciudad, slugCiudad, iata, precio] of [
    ["Nueva York", "nueva-york", "JFK", 760],
    ["Orlando", "orlando", "MCO", 690],
  ] as [string, string, string, number][]) {
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: "Estados Unidos",
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio,
      aerolineas: "LATAM, Copa Airlines, American y Avianca",
      duracion: "8h 15m aprox.",
      escala: "Vuelo directo o 1 escala",
      requisitos: `Boletos desde ${ciudad} hacia Lima con equipaje de bodega y atención familiar.`,
      img: IMG_NYC,
      modalidad: "retorno",
    });
  }

  // 4. Lima -> México, Caribe, Centroamérica, Sudamérica y Exóticos + Retornos
  for (const [ciudad, slugCiudad, iata, pais, precio, aerolineas, req] of CIUDADES_LATAM_CARIBE) {
    agregar({
      slug: `lima-${slugCiudad}`,
      origen: "Lima",
      codigoOrigen: "LIM",
      paisOrigen: "Perú",
      destino: ciudad,
      codigoDestino: iata,
      paisDestino: pais,
      precioUSD: precio,
      aerolineas,
      duracion: "4h 30m a 7h 20m aprox.",
      escala: "Directo o 1 conexión rápida (Panamá / Bogotá / Lima)",
      requisitos: req,
      img: precio > 900 ? IMG_EUROPA : precio > 640 ? IMG_CARIBE : IMG_LATAM,
      modalidad: precio > 640 ? "caribe" : "latam",
    });
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: pais,
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio - 15,
      aerolineas,
      duracion: "4h 30m a 7h 20m aprox.",
      escala: "Directo o 1 conexión rápida",
      requisitos: `Vuelos confirmados de ${ciudad} (${pais}) a Lima con impuestos incluidos.`,
      img: IMG_PERU,
      modalidad: "retorno",
    });
  }

  for (const [ciudad, slugCiudad, iata, pais, precio] of [
    ["Bogotá", "bogota", "BOG", "Colombia", 460],
    ["Medellín", "medellin", "MDE", "Colombia", 480],
    ["Cartagena", "cartagena", "CTG", "Colombia", 495],
    ["San Andrés", "san-andres", "ADZ", "Colombia", 560],
    ["Panamá", "panama", "PTY", "Panamá", 520],
    ["Cancún", "cancun", "CUN", "México", 690],
    ["Punta Cana", "punta-cana", "PUJ", "República Dominicana", 710],
    ["Aruba", "aruba", "AUA", "Aruba", 750],
    ["Río de Janeiro", "rio-de-janeiro", "GIG", "Brasil", 590],
    ["São Paulo", "sao-paulo", "GRU", "Brasil", 550],
  ] as [string, string, string, string, number][]) {
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: pais,
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio,
      aerolineas: "LATAM, Copa Airlines, Avianca y Sky",
      duracion: "4h 15m a 5h 50m aprox.",
      escala: "Vuelo directo",
      requisitos: `Boletos de ${ciudad} a Lima con impuestos incluidos y equipaje flexible.`,
      img: IMG_LATAM,
      modalidad: "retorno",
    });
  }

  // 5A. Rutas Nacionales Perú (Lima <-> 20 ciudades del Perú)
  for (const [ciudad, slugCiudad, iata, precio] of CIUDADES_PERU) {
    agregar({
      slug: `lima-${slugCiudad}`,
      origen: "Lima",
      codigoOrigen: "LIM",
      paisOrigen: "Perú",
      destino: ciudad,
      codigoDestino: iata,
      paisDestino: "Perú",
      precioUSD: precio,
      aerolineas: "LATAM Perú, Sky Airline, JetSMART y Star Perú",
      duracion: "1h 15m a 1h 50m",
      escala: "Vuelo directo desde Lima (LIM)",
      requisitos: "Viaja solo con tu DNI vigente o pasaporte. Incluye tasas aeroportuarias TUUA.",
      img: IMG_PERU,
      modalidad: "nacional",
    });
    agregar({
      slug: `${slugCiudad}-lima`,
      origen: ciudad,
      codigoOrigen: iata,
      paisOrigen: "Perú",
      destino: "Lima",
      codigoDestino: "LIM",
      paisDestino: "Perú",
      precioUSD: precio,
      aerolineas: "LATAM Perú, Sky Airline, JetSMART y Star Perú",
      duracion: "1h 15m a 1h 50m",
      escala: "Vuelo directo hacia Lima (LIM)",
      requisitos: "Viaja solo con tu DNI vigente. Emitimos boletos corporativos, familiares y grupales.",
      img: IMG_PERU,
      modalidad: "nacional",
    });
  }

  // 5B. Salidas Internacionales desde Provincias del Perú (16 provincias x Destinos Internacionales)
  const PROVINCIAS_INTL = CIUDADES_PERU.slice(0, 15);
  for (const [ciudadOrig, slugOrig, iataOrig] of PROVINCIAS_INTL) {
    for (const [ciudadDest, slugDest, iataDest, paisDest, precioBase, aerolineas, img] of DESTINOS_INTL_DESDE_PROVINCIAS) {
      agregar({
        slug: `${slugOrig}-${slugDest}`,
        origen: ciudadOrig,
        codigoOrigen: iataOrig,
        paisOrigen: "Perú",
        destino: ciudadDest,
        codigoDestino: iataDest,
        paisDestino: paisDest,
        precioUSD: precioBase,
        aerolineas,
        duracion: "Conexión garantizada vía Lima (LIM)",
        escala: `Boleto único conectado desde ${ciudadOrig} (${iataOrig}) vía Lima con equipaje despachado hasta ${ciudadDest}`,
        requisitos: `Despacha tu maleta en ${ciudadOrig} y recógela directamente en ${ciudadDest} con boleto único protegido ante conexiones.`,
        img,
        modalidad: paisDest === "España" || paisDest === "Italia" || paisDest === "Francia" ? "europa" : "latam",
      });
    }
  }

  // Devolvemos exactamente las primeras 500 rutas nuevas para que junto a las 42 base sumen 542 rutas en /vuelos/[slug]
  return semillas.slice(0, 500).map(construirRutaVuelo);
}

export const RUTAS_VUELOS_MASIVAS: RutaVueloSEO[] = generarCatalogoMasivo();
