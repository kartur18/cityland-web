import type { RutaVueloSEO } from "@/lib/rutas-vuelos";

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

/* ── 1. Destinos en España (Ida desde Lima + Retorno a Lima) ── */
const CIUDADES_ESPANA: [string, string, string, number, string][] = [
  ["Alicante", "alicante", "ALC", 930, "Vía Madrid (Iberia / Air Europa)"],
  ["Palma de Mallorca", "palma-de-mallorca", "PMI", 945, "Vía Madrid o Barcelona (Iberia / Air Europa)"],
  ["Tenerife", "tenerife", "TFN", 960, "Vía Madrid (Iberia / Air Europa / Plus Ultra)"],
  ["Gran Canaria", "gran-canaria", "LPA", 965, "Vía Madrid (Iberia / Air Europa)"],
  ["Zaragoza", "zaragoza", "ZAZ", 920, "Conexión en Madrid-Barajas"],
  ["Murcia", "murcia", "RMU", 935, "Conexión en Madrid"],
  ["Valladolid", "valladolid", "VLL", 925, "Conexión en Madrid"],
  ["Vigo", "vigo", "VGO", 940, "Vía Madrid (Iberia / Air Europa)"],
  ["La Coruña", "la-coruna", "LCG", 940, "Vía Madrid (Iberia / Air Europa)"],
  ["Santiago de Compostela", "santiago-de-compostela", "SCQ", 945, "Vía Madrid (Iberia)"],
  ["Asturias (Oviedo)", "asturias", "OVD", 945, "Vía Madrid (Iberia)"],
  ["Santander", "santander", "SDR", 940, "Vía Madrid (Iberia)"],
  ["San Sebastián", "san-sebastian", "EAS", 950, "Vía Madrid (Iberia)"],
  ["Pamplona", "pamplona", "PNA", 945, "Vía Madrid (Iberia)"],
  ["Granada", "granada", "GRX", 935, "Vía Madrid (Iberia)"],
  ["Jerez de la Frontera", "jerez", "XRY", 940, "Vía Madrid (Iberia)"],
  ["Almería", "almeria", "LEI", 945, "Vía Madrid (Iberia)"],
  ["Ibiza", "ibiza", "IBZ", 960, "Vía Madrid o Barcelona"],
  ["Menorca", "menorca", "MAH", 965, "Vía Madrid o Barcelona"],
  ["Girona", "girona", "GRO", 930, "Conexión vía Barcelona / Madrid"],
  ["Salamanca", "salamanca", "SLM", 925, "Conexión vía Madrid"],
  ["Badajoz", "badajoz", "BJZ", 940, "Vía Madrid (Iberia)"],
  ["Logroño", "logrono", "RJL", 935, "Vía Madrid (Iberia)"],
  ["León", "leon-espana", "LEN", 935, "Vía Madrid (Iberia)"],
];

/* ── 2. Destinos en Italia y Resto de Europa (Ida desde Lima + Retornos) ── */
const CIUDADES_EUROPA: [string, string, string, string, number, string][] = [
  ["Turín", "turin", "TRN", "Italia", 980, "Iberia, KLM, Air France y LATAM"],
  ["Génova", "genova", "GOA", "Italia", 985, "Iberia, KLM y Air France"],
  ["Bolonia", "bolonia", "BLQ", "Italia", 975, "Iberia, Air Europa y KLM"],
  ["Florencia", "florencia", "FLR", "Italia", 985, "Iberia, Air France y KLM"],
  ["Venecia", "venecia", "VCE", "Italia", 980, "Iberia, Air Europa, Air France y KLM"],
  ["Nápoles", "napoles", "NAP", "Italia", 985, "Iberia, Air France y KLM"],
  ["Bari", "bari", "BRI", "Italia", 995, "Iberia y ITA Airways vía Madrid/Roma"],
  ["Catania", "catania", "CTA", "Italia", 995, "Iberia y KLM vía Madrid/Roma"],
  ["Palermo", "palermo", "PMO", "Italia", 995, "Iberia y ITA Airways"],
  ["Verona", "verona", "VRN", "Italia", 985, "Iberia y Air France"],
  ["Pisa", "pisa", "PSA", "Italia", 985, "Iberia y British Airways"],
  ["Lyon", "lyon", "LYS", "Francia", 975, "Air France, Iberia y KLM"],
  ["Marsella", "marsella", "MRS", "Francia", 975, "Air France, Iberia y KLM"],
  ["Niza", "niza", "NCE", "Francia", 985, "Air France, Iberia y KLM"],
  ["Toulouse", "toulouse", "TLS", "Francia", 975, "Air France e Iberia"],
  ["Burdeos", "burdeos", "BOD", "Francia", 975, "Air France e Iberia"],
  ["Bruselas", "bruselas", "BRU", "Bélgica", 960, "Iberia, Air Europa, KLM y Air France"],
  ["Zúrich", "zurich", "ZRH", "Suiza", 990, "Iberia, Air Europa, KLM y Swiss"],
  ["Ginebra", "ginebra", "GVA", "Suiza", 985, "Iberia, Air France y KLM"],
  ["Basilea", "basilea", "BSL", "Suiza", 990, "KLM y Air France"],
  ["Londres", "londres", "LHR", "Reino Unido", 995, "Iberia, British Airways, LATAM y KLM"],
  ["Mánchester", "manchester", "MAN", "Reino Unido", 1010, "KLM, Air France y British Airways"],
  ["Edimburgo", "edimburgo", "EDI", "Reino Unido", 1020, "KLM, British Airways e Iberia"],
  ["Dublín", "dublin", "DUB", "Irlanda", 995, "Iberia, KLM y Air France"],
  ["Múnich", "munich", "MUC", "Alemania", 985, "Iberia, Air Europa, KLM y Lufthansa"],
  ["Berlín", "berlin", "BER", "Alemania", 980, "Iberia, KLM y Air France"],
  ["Hamburgo", "hamburgo", "HAM", "Alemania", 990, "KLM, Air France e Iberia"],
  ["Düsseldorf", "dusseldorf", "DUS", "Alemania", 985, "Iberia, KLM y Air France"],
  ["Stuttgart", "stuttgart", "STR", "Alemania", 990, "KLM y Air France"],
  ["Viena", "viena", "VIE", "Austria", 995, "Iberia, KLM y Air France"],
  ["Praga", "praga", "PRG", "República Checa", 995, "Iberia, KLM y Air France"],
  ["Budapest", "budapest", "BUD", "Hungría", 1010, "Iberia, KLM y Air France"],
  ["Varsovia", "varsovia", "WAW", "Polonia", 1015, "KLM, Air France y LOT"],
  ["Cracovia", "cracovia", "KRK", "Polonia", 1020, "KLM y Lufthansa"],
  ["Atenas", "atenas", "ATH", "Grecia", 1030, "Iberia, Air Europa, KLM y Air France"],
  ["Estocolmo", "estocolmo", "ARN", "Suecia", 1020, "KLM, Iberia y Air France"],
  ["Copenhague", "copenhague", "CPH", "Dinamarca", 1015, "KLM, Air France e Iberia"],
  ["Oslo", "oslo", "OSL", "Noruega", 1025, "KLM y Air France"],
  ["Helsinki", "helsinki", "HEL", "Finlandia", 1040, "Iberia, KLM y Finnair"],
  ["Oporto", "oporto", "OPO", "Portugal", 940, "Iberia, Air Europa y TAP"],
  ["Faro", "faro", "FAO", "Portugal", 960, "Iberia y TAP vía Madrid/Lisboa"],
  ["Bucarest", "bucarest", "OTP", "Rumanía", 1040, "KLM, Air France y Turkish Airlines"],
  ["Zagreb", "zagreb", "ZAG", "Croacia", 1035, "KLM, Air France e Iberia"],
];

/* ── 3. Estados Unidos y Canadá (Ida desde Lima + Retornos hacia Lima) ── */
const CIUDADES_USA_CANADA: [string, string, string, string, number, string][] = [
  ["Newark (Nueva Jersey)", "newark", "EWR", "Estados Unidos", 590, "United Airlines, Copa Airlines, LATAM y Avianca"],
  ["Paterson / Nueva Jersey", "paterson-nueva-jersey", "EWR", "Estados Unidos", 590, "United Airlines, Copa Airlines y LATAM (vía EWR/JFK)"],
  ["Los Ángeles", "los-angeles", "LAX", "Estados Unidos", 620, "LATAM, Copa Airlines, Avianca y American Airlines"],
  ["San Francisco", "san-francisco", "SFO", "Estados Unidos", 650, "Copa Airlines, United Airlines, American y LATAM"],
  ["San Diego", "san-diego", "SAN", "Estados Unidos", 660, "American Airlines, United y Delta"],
  ["Las Vegas", "las-vegas", "LAS", "Estados Unidos", 640, "Copa Airlines, American, United y Avianca"],
  ["Phoenix", "phoenix", "PHX", "Estados Unidos", 655, "American Airlines y United Airlines"],
  ["Denver", "denver", "DEN", "Estados Unidos", 650, "United Airlines, Copa Airlines y American"],
  ["Salt Lake City", "salt-lake-city", "SLC", "Estados Unidos", 660, "Delta Air Lines, American y United"],
  ["Seattle", "seattle", "SEA", "Estados Unidos", 680, "Delta Air Lines, American y United"],
  ["Portland", "portland", "PDX", "Estados Unidos", 685, "Delta, United y American Airlines"],
  ["Houston", "houston", "IAH", "Estados Unidos", 580, "United Airlines (Directo), Copa Airlines y Avianca"],
  ["Dallas", "dallas", "DFW", "Estados Unidos", 610, "American Airlines, Copa Airlines y United"],
  ["Austin", "austin", "AUS", "Estados Unidos", 630, "Copa Airlines, American y United"],
  ["San Antonio", "san-antonio", "SAT", "Estados Unidos", 635, "United Airlines y American Airlines"],
  ["Chicago", "chicago", "ORD", "Estados Unidos", 620, "Copa Airlines, United, American y Avianca"],
  ["Detroit", "detroit", "DTW", "Estados Unidos", 645, "Delta Air Lines, American y United"],
  ["Mineápolis", "mineapolis", "MSP", "Estados Unidos", 655, "Delta Air Lines y United"],
  ["Atlanta", "atlanta", "ATL", "Estados Unidos", 595, "Delta Air Lines (Directo), LATAM y Copa Airlines"],
  ["Charlotte", "charlotte", "CLT", "Estados Unidos", 615, "American Airlines y Copa Airlines"],
  ["Tampa", "tampa", "TPA", "Estados Unidos", 560, "Copa Airlines, American Airlines y LATAM"],
  ["Fort Lauderdale", "fort-lauderdale", "FLL", "Estados Unidos", 495, "Spirit, Copa Airlines, Avianca y JetBlue"],
  ["West Palm Beach", "west-palm-beach", "PBI", "Estados Unidos", 550, "American Airlines y Delta"],
  ["Jacksonville", "jacksonville", "JAX", "Estados Unidos", 575, "American Airlines y Delta"],
  ["Washington D.C.", "washington", "IAD", "Estados Unidos", 595, "Copa Airlines, Avianca, United y American"],
  ["Baltimore", "baltimore", "BWI", "Estados Unidos", 595, "Copa Airlines, Spirit y American"],
  ["Filadelfia", "filadelfia", "PHL", "Estados Unidos", 610, "American Airlines, Copa y United"],
  ["Boston", "boston", "BOS", "Estados Unidos", 615, "Copa Airlines, Avianca, LATAM y American"],
  ["Hartford (Connecticut)", "hartford-connecticut", "BDL", "Estados Unidos", 630, "American Airlines, Delta y JetBlue"],
  ["Stamford / Westchester", "stamford-connecticut", "HPN", "Estados Unidos", 625, "American Airlines y Delta (vía JFK/LGA/HPN)"],
  ["Toronto", "toronto", "YYZ", "Canadá", 670, "Air Canada, Copa Airlines, Avianca y Arajet"],
  ["Montreal", "montreal", "YUL", "Canadá", 680, "Air Canada, Copa Airlines, Avianca y Arajet"],
  ["Vancouver", "vancouver", "YVR", "Canadá", 740, "Air Canada, United y American Airlines"],
  ["Calgary", "calgary", "YYC", "Canadá", 750, "Air Canada y United Airlines"],
  ["Ottawa", "ottawa", "YOW", "Canadá", 710, "Air Canada y United Airlines"],
];

/* ── 4. México, Caribe, Centroamérica, Sudamérica y Exóticos ── */
const CIUDADES_LATAM_CARIBE: [string, string, string, string, number, string, string][] = [
  ["Ciudad de México", "ciudad-de-mexico", "MEX", "México", 520, "LATAM, Aeroméxico, Copa Airlines y Avianca", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen / Japón."],
  ["Guadalajara", "guadalajara", "GDL", "México", 560, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen."],
  ["Monterrey", "monterrey", "MTY", "México", 565, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen."],
  ["Tulum", "tulum", "TQO", "México", 550, "Copa Airlines y Avianca", "Requiere Visa Mexicana vigente o Visa de EE. UU. / Canadá / Schengen."],
  ["Los Cabos", "los-cabos", "SJD", "México", 590, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana o Visa de EE. UU. vigente."],
  ["Puerto Vallarta", "puerto-vallarta", "PVR", "México", 585, "Copa Airlines y Aeroméxico", "Requiere Visa Mexicana o Visa de EE. UU. vigente."],
  ["Santo Domingo", "santo-domingo", "SDQ", "República Dominicana", 520, "Arajet, Copa Airlines, Avianca y Sky", "Sin visa para peruanos (solo pasaporte vigente + E-Ticket dominicano)."],
  ["La Romana / Bayahíbe", "la-romana", "LRM", "República Dominicana", 560, "Copa Airlines, LATAM y Arajet", "Sin visa para peruanos (solo pasaporte vigente)."],
  ["Puerto Plata", "puerto-plata", "POP", "República Dominicana", 575, "Copa Airlines y Arajet", "Sin visa para peruanos (solo pasaporte vigente)."],
  ["La Habana", "la-habana", "HAV", "Cuba", 560, "Copa Airlines y LATAM", "Solo pasaporte vigente + Tarjeta de Turista (incluida en tu asesoría)."],
  ["Varadero", "varadero", "VRA", "Cuba", 580, "Copa Airlines vía Panamá/Habana", "Solo pasaporte vigente + Tarjeta de Turista."],
  ["Curazao", "curazao", "CUR", "Curazao", 550, "Copa Airlines, Avianca y LATAM", "Sin visa para peruanos (solo pasaporte vigente + vacuna fiebre amarilla)."],
  ["Montego Bay (Jamaica)", "montego-bay-jamaica", "MBJ", "Jamaica", 590, "Copa Airlines y LATAM", "Sin visa para peruanos por turismo (solo pasaporte vigente)."],
  ["San Juan de Puerto Rico", "san-juan-puerto-rico", "SJU", "Puerto Rico", 580, "Copa Airlines, Avianca y American", "Requiere Visa de Estados Unidos B1/B2 vigente."],
  ["Nassau (Bahamas)", "nassau-bahamas", "NAS", "Bahamas", 620, "Copa Airlines vía Panamá", "Sin visa para peruanos (pasaporte + vacuna fiebre amarilla)."],
  ["San Martín (St. Maarten)", "san-martin-caribe", "SXM", "San Martín", 610, "Copa Airlines vía Panamá", "Pasaporte vigente con al menos 6 meses de validez."],
  ["San José de Costa Rica", "san-jose-costa-rica", "SJO", "Costa Rica", 460, "LATAM (Directo), Avianca y Copa Airlines", "Sin visa para peruanos (pasaporte vigente + vacuna fiebre amarilla)."],
  ["Ciudad de Guatemala", "ciudad-de-guatemala", "GUA", "Guatemala", 490, "Avianca y Copa Airlines", "Sin visa para peruanos (pasaporte vigente)."],
  ["San Salvador", "san-salvador", "SAL", "El Salvador", 470, "Avianca (Directo) y Copa Airlines", "Sin visa para peruanos (pasaporte vigente)."],
  ["Cali", "cali", "CLO", "Colombia", 360, "Avianca, Copa Airlines y LATAM", "Viaja solo con tu DNI peruano vigente (Acuerdo Comunidad Andina)."],
  ["Barranquilla", "barranquilla", "BAQ", "Colombia", 390, "Avianca y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Santa Marta", "santa-marta", "SMR", "Colombia", 385, "Avianca y LATAM", "Viaja solo con tu DNI peruano vigente."],
  ["Pereira (Eje Cafetero)", "pereira", "PEI", "Colombia", 380, "Avianca y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Bucaramanga", "bucaramanga", "BGA", "Colombia", 390, "Avianca y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Quito", "quito", "UIO", "Ecuador", 330, "LATAM, Avianca y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Guayaquil", "guayaquil", "GYE", "Ecuador", 320, "LATAM, Avianca y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Cuenca", "cuenca", "CUE", "Ecuador", 360, "LATAM y Avianca vía Quito/Guayaquil", "Viaja solo con tu DNI peruano vigente."],
  ["Santa Cruz de la Sierra", "santa-cruz", "VVI", "Bolivia", 340, "BoA y LATAM Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["La Paz", "la-paz", "LPB", "Bolivia", 335, "BoA y LATAM Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Cochabamba", "cochabamba", "CBB", "Bolivia", 355, "BoA vía Santa Cruz/La Paz", "Viaja solo con tu DNI peruano vigente."],
  ["Córdoba", "cordoba-argentina", "COR", "Argentina", 440, "LATAM, Aerolíneas Argentinas y Copa", "Viaja solo con tu DNI peruano vigente."],
  ["Mendoza", "mendoza", "MDZ", "Argentina", 430, "LATAM y Sky Airline", "Viaja solo con tu DNI peruano vigente."],
  ["Bariloche", "bariloche", "BRC", "Argentina", 495, "Aerolíneas Argentinas, LATAM y Sky", "Viaja solo con tu DNI peruano vigente."],
  ["Rosario", "rosario", "ROS", "Argentina", 450, "LATAM y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Salta", "salta", "SLA", "Argentina", 445, "LATAM y Aerolíneas Argentinas", "Viaja solo con tu DNI peruano vigente."],
  ["Ushuaia", "ushuaia", "USH", "Argentina", 560, "Aerolíneas Argentinas y LATAM", "Viaja solo con tu DNI peruano vigente."],
  ["Antofagasta", "antofagasta", "ANF", "Chile", 295, "LATAM, Sky Airline y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Iquique", "iquique", "IQQ", "Chile", 290, "LATAM, Sky Airline y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Calama (San Pedro de Atacama)", "calama", "CJC", "Chile", 310, "LATAM y Sky Airline", "Viaja solo con tu DNI peruano vigente."],
  ["Concepción", "concepcion-chile", "CCP", "Chile", 320, "LATAM, Sky y JetSMART", "Viaja solo con tu DNI peruano vigente."],
  ["Puerto Montt", "puerto-montt", "PMC", "Chile", 340, "LATAM y Sky Airline", "Viaja solo con tu DNI peruano vigente."],
  ["Montevideo", "montevideo", "MVD", "Uruguay", 450, "LATAM, Sky Airline y Copa", "Viaja solo con tu DNI peruano vigente."],
  ["Punta del Este", "punta-del-este", "PDP", "Uruguay", 490, "LATAM y Aerolíneas Argentinas", "Viaja solo con tu DNI peruano vigente."],
  ["Asunción", "asuncion", "ASU", "Paraguay", 410, "LATAM y Copa Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Foz de Iguazú", "foz-de-iguazu", "IGU", "Brasil", 430, "LATAM y GOL", "Viaja solo con tu DNI peruano vigente."],
  ["Florianópolis", "florianopolis", "FLN", "Brasil", 460, "LATAM, Sky y GOL", "Viaja solo con tu DNI peruano vigente."],
  ["Salvador de Bahía", "salvador-de-bahia", "SSA", "Brasil", 490, "LATAM y GOL", "Viaja solo con tu DNI peruano vigente."],
  ["Brasilia", "brasilia", "BSB", "Brasil", 470, "LATAM Airlines", "Viaja solo con tu DNI peruano vigente."],
  ["Caracas", "caracas", "CCS", "Venezuela", 540, "Copa Airlines y LATAM", "Consultar requisitos consulares vigentes con nuestro equipo."],
  ["Dubái", "dubai", "DXB", "Emiratos Árabes", 1290, "Emirates, Qatar Airways, KLM y Turkish Airlines", "Asesoría completa de visado electrónico para Dubái incluida."],
  ["Tel Aviv (Tierra Santa)", "tel-aviv", "TLV", "Israel", 1250, "Iberia, Air Europa y KLM", "Pasaporte vigente con mínimo 6 meses de validez."],
  ["El Cairo", "el-cairo", "CAI", "Egipto", 1190, "Iberia, Turkish Airlines y KLM", "Visa a la llegada en el aeropuerto de El Cairo con pasaporte vigente."],
  ["Tokio", "tokio", "NRT", "Japón", 1390, "United, American, Air Canada y Aeroméxico", "Exención de visa para pasaporte peruano electrónico vigente."],
  ["Seúl", "seul", "ICN", "Corea del Sur", 1420, "United, Delta y Korean Air", "Pasaporte vigente + autorización electrónica K-ETA."],
  ["Bangkok", "bangkok", "BKK", "Tailandia", 1450, "Qatar Airways, Turkish Airlines y KLM", "Sin visa para peruanos (solo pasaporte + vacuna fiebre amarilla)."],
];

/* ── 5. Ciudades del Perú (Rutas Nacionales desde/hacia Lima + Salidas Internacionales desde Provincias) ── */
const CIUDADES_PERU: [string, string, string, number][] = [
  ["Arequipa", "arequipa", "AQP", 89],
  ["Trujillo", "trujillo", "TRU", 85],
  ["Chiclayo", "chiclayo", "CIX", 89],
  ["Piura", "piura", "PIU", 95],
  ["Cusco", "cusco", "CUZ", 95],
  ["Iquitos", "iquitos", "IQT", 99],
  ["Tarapoto", "tarapoto", "TPP", 89],
  ["Tacna", "tacna", "TCQ", 95],
  ["Juliaca (Puno)", "juliaca", "JUL", 99],
  ["Cajamarca", "cajamarca", "CJA", 89],
  ["Pucallpa", "pucallpa", "PCL", 89],
  ["Tumbes", "tumbes", "TBP", 99],
  ["Talara (Máncora)", "talara", "TYL", 99],
  ["Ayacucho", "ayacucho", "AYP", 85],
  ["Huancayo (Jauja)", "jauja", "JAU", 89],
  ["Puerto Maldonado", "puerto-maldonado", "PEM", 105],
  ["Jaén", "jaen", "JAE", 99],
  ["Chachapoyas", "chachapoyas", "CHH", 109],
  ["Huaraz (Anta)", "huaraz", "ATA", 95],
  ["Tingo María", "tingo-maria", "TGI", 89],
];

const DESTINOS_INTL_DESDE_PROVINCIAS: [string, string, string, string, number, string, string][] = [
  ["Madrid", "madrid", "MAD", "España", 960, "LATAM + Iberia / Air Europa / Plus Ultra", IMG_MADRID],
  ["Barcelona", "barcelona", "BCN", "España", 980, "LATAM + Iberia / Air Europa", IMG_ESPANA],
  ["Roma", "roma", "FCO", "Italia", 1040, "LATAM + Iberia / KLM / Air France", IMG_ITALIA],
  ["Milán", "milan", "MXP", "Italia", 1030, "LATAM + Iberia / KLM / Air France", IMG_ITALIA],
  ["París", "paris", "CDG", "Francia", 1040, "LATAM + Air France / KLM / Iberia", IMG_EUROPA],
  ["Miami", "miami", "MIA", "Estados Unidos", 560, "LATAM Airlines / Copa Airlines / Avianca", IMG_USA],
  ["Nueva York", "nueva-york", "JFK", "Estados Unidos", 650, "LATAM Airlines / Copa Airlines / United", IMG_NYC],
  ["Newark (Nueva Jersey)", "newark", "EWR", "Estados Unidos", 650, "LATAM + United Airlines / Copa Airlines", IMG_NYC],
  ["Cancún", "cancun", "CUN", "México", 560, "LATAM / Sky Airline / Copa Airlines", IMG_CARIBE],
  ["Punta Cana", "punta-cana", "PUJ", "República Dominicana", 590, "LATAM / Copa Airlines / Sky / Arajet", IMG_CARIBE],
  ["Cartagena", "cartagena", "CTG", "Colombia", 430, "LATAM / Avianca / Copa Airlines", IMG_CARIBE],
  ["Buenos Aires", "buenos-aires", "EZE", "Argentina", 460, "LATAM / Sky Airline / JetSMART", IMG_LATAM],
  ["Santiago", "santiago", "SCL", "Chile", 330, "LATAM / Sky Airline / JetSMART", IMG_LATAM],
  ["Panamá", "panama", "PTY", "Panamá", 470, "Copa Airlines / LATAM", IMG_CARIBE],
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
  const p2Maletas = s.precioUSD + (s.modalidad === "nacional" ? 35 : 95);
  const pPaquete = s.precioUSD + (s.modalidad === "nacional" ? 130 : 260);
  const waMsg = `Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de ${s.origen} a ${s.destino} (Desde $${s.precioUSD} USD). ¿Me pueden ayudar?`;

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
      "cityland travel",
    ],
    precioDesdeUSD: s.precioUSD,
    faqs: [
      {
        q: `¿Qué aerolíneas operan la ruta de ${s.origen} (${s.codigoOrigen}) a ${s.destino} (${s.codigoDestino})?`,
        a: `Trabajamos con salidas confirmadas en ${s.aerolineas} (${s.escala}), con un tiempo estimado de viaje de ${s.duracion}. Emitimos tu boleto con código de reserva PNR verificable al instante.`,
      },
      {
        q: `¿El precio Desde $${s.precioUSD} USD incluye impuestos aeroportuarios?`,
        a: `Sí. Todas nuestras tarifas están expresadas en dólares americanos (USD) e incluyen impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
      },
      {
        q: `¿Qué requisitos necesito para viajar de ${s.origen} a ${s.destino}?`,
        a: `${s.requisitos} Nuestro equipo te asesora paso a paso con el check-in, equipaje de 23 kg y documentación migratoria.`,
      },
    ],
    config: {
      badgeHero: `Ruta ${s.codigoOrigen} → ${s.codigoDestino} · ${s.aerolineas}`,
      banderasHero: [s.paisOrigen, s.paisDestino],
      tituloHero: `Vuelos y Paquetes de ${s.origen} a`,
      tituloDestacadoHero: `${s.destino} (${s.codigoDestino})`,
      descripcionHero: `Tarifas referenciales verificadas Desde $${s.precioUSD} USD con impuestos y cargos obligatorios incluidos.`,
      negritaHero: `${s.requisitos} Emitimos boletos con equipaje de 23 kg, reserva verificable y soporte 24/7 por WhatsApp.`,
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51983882504",
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
        img: s.img,
        alt: `Vuelos de ${s.origen} a ${s.destino} — Cityland Travel`,
        sobretitulo: `${s.origen} (${s.codigoOrigen}) → ${s.destino} (${s.codigoDestino})`,
        titulo: `Vuelos Confirmados ${s.origen} – ${s.destino}`,
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: `$${s.precioUSD}`,
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51942086698",
        waMensaje: waMsg,
      },
      seccionCatalogo: {
        sobretitulo: "Opciones de Tarifa en Dólares (Impuestos Incluidos)",
        titulo: `Modalidades para volar de ${s.origen} a ${s.destino}`,
        filtros: [
          { id: "todos", label: "Todas las tarifas" },
          { id: "vuelo", label: "Solo Boleto Aéreo" },
          { id: "paquete", label: "Vuelo + Hotel / Asesoría" },
        ],
      },
      items: [
        {
          id: `${s.slug}-base`,
          titulo: `Boleto Aéreo ${s.origen} – ${s.destino} (Tarifa Estándar)`,
          pais: s.paisDestino,
          filtro: "vuelo",
          subtitulo: `${s.aerolineas} · ${s.escala}`,
          precioPrincipal: `$${s.precioUSD}`,
          precioSecundario: "Impuestos y cargos obligatorios incluidos",
          notaPrecio: "Tarifa sujeta a disponibilidad y condiciones aplicables",
          tag: "Mejor Tarifa",
          tagBg: "bg-emerald-600 text-white",
          img: s.img,
          alt: `Boleto de ${s.origen} a ${s.destino}`,
          resumenCorto: `Boleto confirmado ${s.codigoOrigen} → ${s.codigoDestino} con impuestos incluidos y código PNR verificable.`,
          checks: [
            `Boleto confirmado ${s.codigoOrigen} → ${s.codigoDestino}`,
            "Artículo personal + equipaje de mano 10 kg",
            "Check-in y envío de tarjetas de embarque",
          ],
          waNumber: "51983882504",
          waMensaje: `Hola, quiero cotizar el Boleto Estándar de ${s.origen} a ${s.destino} (Desde $${s.precioUSD} USD). ¿Me ayudan con fechas?`,
        },
        {
          id: `${s.slug}-maleta`,
          titulo: `Vuelo ${s.origen} – ${s.destino} + Bodega 23 kg`,
          pais: s.paisDestino,
          filtro: "vuelo",
          subtitulo: "Ideal para estadías largas o compras",
          precioPrincipal: `$${p2Maletas}`,
          precioSecundario: "Impuestos y maleta de 23 kg incluidos",
          notaPrecio: "Tarifa sujeta a disponibilidad y condiciones aplicables",
          tag: "Con Maleta 23 kg",
          tagBg: "bg-blue-600 text-white",
          img: s.img,
          alt: `Vuelo con maleta 23 kg de ${s.origen} a ${s.destino}`,
          resumenCorto: `Incluye franquicia completa de equipaje en bodega de 23 kg + cabina 10 kg en ruta ${s.origen} – ${s.destino}.`,
          checks: [
            "Maleta en bodega de 23 kg incluida",
            "Equipaje de cabina 10 kg + bolso personal",
            "Asistencia ante cambios o reprogramaciones",
          ],
          waNumber: "51906450098",
          waMensaje: `Hola, quiero cotizar el vuelo de ${s.origen} a ${s.destino} con maleta de 23 kg (Desde $${p2Maletas} USD).`,
        },
        {
          id: `${s.slug}-paquete`,
          titulo: `Paquete ${s.origen} – ${s.destino} (Vuelo + Hotel + Seguro)`,
          pais: s.paisDestino,
          filtro: "paquete",
          subtitulo: "Separa con el 50% y paga en cuotas sin intereses",
          precioPrincipal: `$${pPaquete}`,
          precioSecundario: "Vuelo + Hotel + Asistencia incluidos",
          notaPrecio: "Tarifa sujeta a disponibilidad y condiciones aplicables",
          tag: "Todo Resuelto",
          tagBg: "bg-red-600 text-white",
          img: s.img,
          alt: `Paquete a ${s.destino} desde ${s.origen}`,
          resumenCorto: `Viaje completo de ${s.origen} a ${s.destino} con alojamiento verificado, seguro de viaje y asesoría personalizada.`,
          checks: [
            `Boleto aéreo ${s.origen} – ${s.destino}`,
            "Estadía en hotel seleccionado con desayuno",
            "Seguro de asistencia y soporte 24/7 en viaje",
          ],
          waNumber: "51944280151",
          waMensaje: `Hola, quiero cotizar el Paquete Completo de ${s.origen} a ${s.destino} (Desde $${pPaquete} USD).`,
        },
      ],
      pilares: [
        { titulo: `${s.codigoOrigen} → ${s.codigoDestino}`, sub: s.escala },
        { titulo: "100% en USD", sub: "Impuestos y tasas incluidas sin sorpresas" },
        { titulo: "Separa con 50%", sub: "Congela tu tarifa hoy y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Agencia física formal en Los Olivos, Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Atención Inmediata por WhatsApp Business",
        titulo: `¿Buscas la mejor fecha para volar de ${s.origen} a ${s.destino}?`,
        descripcion: "Nuestros 12 asesores especializados comparan tarifas en tiempo real para conseguirte el mejor precio en dólares.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51938845086",
        waMensaje: waMsg,
        img: s.img,
        alt: `Viajes de ${s.origen} a ${s.destino}`,
      },
      waFlotante: {
        numero: "51938845086",
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
    ["Valencia", "valencia", "VLC", 890],
    ["Málaga", "malaga", "AGP", 895],
    ["Sevilla", "sevilla", "SVQ", 895],
    ["Bilbao", "bilbao", "BIO", 910],
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
    ["Ámsterdam", "amsterdam", "AMS", "Países Bajos", 940],
    ["Frankfurt", "frankfurt", "FRA", "Alemania", 960],
    ["Lisboa", "lisboa", "LIS", "Portugal", 910],
    ["Estambul", "estambul", "IST", "Turquía", 1090],
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
    ["Nueva York", "nueva-york", "JFK", 580],
    ["Orlando", "orlando", "MCO", 520],
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
      img: precio > 900 ? IMG_EUROPA : precio > 480 ? IMG_CARIBE : IMG_LATAM,
      modalidad: precio > 480 ? "caribe" : "latam",
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
    ["Bogotá", "bogota", "BOG", "Colombia", 310],
    ["Medellín", "medellin", "MDE", "Colombia", 340],
    ["Cartagena", "cartagena", "CTG", "Colombia", 360],
    ["San Andrés", "san-andres", "ADZ", "Colombia", 420],
    ["Panamá", "panama", "PTY", "Panamá", 380],
    ["Cancún", "cancun", "CUN", "México", 470],
    ["Punta Cana", "punta-cana", "PUJ", "República Dominicana", 510],
    ["Aruba", "aruba", "AUA", "Aruba", 540],
    ["Río de Janeiro", "rio-de-janeiro", "GIG", "Brasil", 450],
    ["São Paulo", "sao-paulo", "GRU", "Brasil", 410],
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
