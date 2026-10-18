import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export interface ViajeEspecializadoSEO {
  slug: string;
  categoria: "primer-viaje" | "dos-maletas" | "aerolinea" | "grupos-seguros" | "requisitos";
  badge: string;
  titulo: string;
  subtitulo: string;
  destinoOPais: string;
  precioDesdeUSD: number;
  etiquetaPrecio: string;
  imagenHero: string;
  galeria: [string, string, string, string];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  resumenEjecutivo: string;
  incluye: string[];
  beneficiosClave: { titulo: string; desc: string }[];
  faqs: { q: string; a: string }[];
  waMensaje: string;
}

function obtenerFotosPorTexto(texto: string): [string, string, string, string, string] {
  const [f0, f1, f2, f3, f4] = obtenerGaleriaPorTexto(texto);
  return [f0, f1, f2, f3, f4];
}

const CIUDADES_PRIMER_VIAJE: [string, string, string, number][] = [
  ["Madrid", "madrid", "España", 1090],
  ["Barcelona", "barcelona", "España", 1120],
  ["Valencia", "valencia", "España", 1140],
  ["Sevilla", "sevilla", "España", 1145],
  ["Málaga", "malaga", "España", 1145],
  ["Bilbao", "bilbao", "España", 1150],
  ["Zaragoza", "zaragoza", "España", 1135],
  ["Alicante", "alicante", "España", 1145],
  ["Palma de Mallorca", "palma-de-mallorca", "España", 1160],
  ["Tenerife", "tenerife", "España", 1175],
  ["Murcia", "murcia", "España", 1145],
  ["Valladolid", "valladolid", "España", 1135],
  ["Vigo", "vigo", "España", 1155],
  ["La Coruña", "la-coruna", "España", 1155],
  ["Santiago de Compostela", "santiago-de-compostela", "España", 1160],
  ["Granada", "granada", "España", 1145],
  ["San Sebastián", "san-sebastian", "España", 1160],
  ["Pamplona", "pamplona", "España", 1155],
  ["Santander", "santander", "España", 1155],
  ["Oviedo", "oviedo", "España", 1160],
  ["Roma", "roma", "Italia", 1150],
  ["Milán", "milan", "Italia", 1150],
  ["Turín", "turin", "Italia", 1175],
  ["Bolonia", "bolonia", "Italia", 1175],
  ["Florencia", "florencia", "Italia", 1180],
  ["Venecia", "venecia", "Italia", 1180],
  ["Génova", "genova", "Italia", 1180],
  ["Nápoles", "napoles", "Italia", 1185],
  ["París", "paris", "Francia", 1170],
  ["Lyon", "lyon", "Francia", 1185],
  ["Ámsterdam", "amsterdam", "Países Bajos", 1180],
  ["Bruselas", "bruselas", "Bélgica", 1180],
  ["Zúrich", "zurich", "Suiza", 1210],
  ["Múnich", "munich", "Alemania", 1195],
  ["Lisboa", "lisboa", "Portugal", 1160],
];

const RUTAS_DOS_MALETAS: [string, string, string, number, string][] = [
  ["Lima a Madrid", "lima-madrid", "España", 1180, "Iberia, Air Europa y Plus Ultra"],
  ["Madrid a Lima", "madrid-lima", "Perú", 1150, "Iberia, Air Europa y Plus Ultra"],
  ["Lima a Barcelona", "lima-barcelona", "España", 1210, "Iberia, Air Europa y LATAM"],
  ["Barcelona a Lima", "barcelona-lima", "Perú", 1180, "Iberia y Air Europa"],
  ["Lima a Roma", "lima-roma", "Italia", 1240, "Iberia, KLM y Air France"],
  ["Lima a Milán", "lima-milan", "Italia", 1240, "Iberia, KLM y Air Europa"],
  ["Lima a París", "lima-paris", "Francia", 1250, "Air France, KLM e Iberia"],
  ["Lima a Ámsterdam", "lima-amsterdam", "Países Bajos", 1250, "KLM y Air France"],
  ["Lima a Miami", "lima-miami", "Estados Unidos", 590, "LATAM, American Airlines, Copa y Avianca"],
  ["Miami a Lima", "miami-lima", "Perú", 580, "LATAM, American Airlines y Copa"],
  ["Lima a Nueva York", "lima-nueva-york", "Estados Unidos", 680, "LATAM, Copa Airlines y American"],
  ["Nueva York a Lima", "nueva-york-lima", "Perú", 670, "LATAM, Copa Airlines y United"],
  ["Lima a Newark", "lima-newark", "Estados Unidos", 680, "United Airlines, Copa y LATAM"],
  ["Lima a Los Ángeles", "lima-los-angeles", "Estados Unidos", 695, "LATAM, Copa y American Airlines"],
  ["Lima a Orlando", "lima-orlando", "Estados Unidos", 630, "Copa Airlines, LATAM y Avianca"],
  ["Lima a Houston", "lima-houston", "Estados Unidos", 675, "United Airlines y Copa Airlines"],
  ["Lima a Chicago", "lima-chicago", "Estados Unidos", 695, "Copa Airlines, United y American"],
  ["Lima a Atlanta", "lima-atlanta", "Estados Unidos", 685, "Delta Air Lines y LATAM"],
  ["Lima a Washington D.C.", "lima-washington", "Estados Unidos", 685, "Copa Airlines, United y Avianca"],
  ["Lima a Boston", "lima-boston", "Estados Unidos", 695, "Copa Airlines, LATAM y American"],
  ["Lima a Toronto", "lima-toronto", "Canadá", 780, "Air Canada y Copa Airlines"],
  ["Lima a Montreal", "lima-montreal", "Canadá", 790, "Air Canada y Copa Airlines"],
  ["Lima a Cancún", "lima-cancun", "México", 610, "LATAM, Copa Airlines y Sky"],
  ["Lima a Ciudad de México", "lima-ciudad-de-mexico", "México", 630, "LATAM, Aeroméxico y Copa"],
  ["Lima a Punta Cana", "lima-punta-cana", "República Dominicana", 630, "LATAM, Copa Airlines y Arajet"],
  ["Lima a Panamá", "lima-panama", "Panamá", 510, "Copa Airlines y LATAM"],
  ["Lima a Bogotá", "lima-bogota", "Colombia", 420, "LATAM, Avianca y Wingo"],
  ["Lima a Medellín", "lima-medellin", "Colombia", 430, "Avianca, Copa y JetSMART"],
  ["Lima a Cartagena", "lima-cartagena", "Colombia", 440, "LATAM, Avianca y Copa"],
  ["Lima a Buenos Aires", "lima-buenos-aires", "Argentina", 520, "LATAM, Aerolíneas Argentinas y Sky"],
  ["Buenos Aires a Lima", "buenos-aires-lima", "Perú", 510, "LATAM, Aerolíneas Argentinas y Sky"],
  ["Lima a Santiago de Chile", "lima-santiago", "Chile", 410, "LATAM, Sky Airline y JetSMART"],
  ["Santiago a Lima", "santiago-lima", "Perú", 405, "LATAM, Sky Airline y JetSMART"],
  ["Lima a São Paulo", "lima-sao-paulo", "Brasil", 530, "LATAM Airlines"],
  ["Lima a Tokio", "lima-tokio", "Japón", 1590, "United, American y Air Canada"],
];

const RUTAS_AEROLINEAS: [string, string, string, string, number][] = [
  ["Iberia", "aerolinea-iberia-lima-madrid", "Lima a Madrid", "España", 1120],
  ["Iberia", "aerolinea-iberia-lima-barcelona", "Lima a Barcelona", "España", 1140],
  ["Iberia", "aerolinea-iberia-lima-roma", "Lima a Roma", "Italia", 1165],
  ["Iberia", "aerolinea-iberia-lima-milan", "Lima a Milán", "Italia", 1160],
  ["Iberia", "aerolinea-iberia-lima-paris", "Lima a París", "Francia", 1180],
  ["Air Europa", "aerolinea-air-europa-lima-madrid", "Lima a Madrid", "España", 1095],
  ["Air Europa", "aerolinea-air-europa-lima-barcelona", "Lima a Barcelona", "España", 1120],
  ["Air Europa", "aerolinea-air-europa-lima-milan", "Lima a Milán", "Italia", 1150],
  ["Air Europa", "aerolinea-air-europa-lima-roma", "Lima a Roma", "Italia", 1155],
  ["Plus Ultra", "aerolinea-plus-ultra-lima-madrid", "Lima a Madrid (Promoción 2 Maletas)", "España", 1090],
  ["Plus Ultra", "aerolinea-plus-ultra-lima-tenerife", "Lima a Tenerife vía Madrid", "España", 1170],
  ["LATAM Airlines", "aerolinea-latam-lima-madrid", "Lima a Madrid Directo", "España", 1140],
  ["LATAM Airlines", "aerolinea-latam-lima-miami", "Lima a Miami Directo", "Estados Unidos", 499],
  ["LATAM Airlines", "aerolinea-latam-lima-nueva-york", "Lima a Nueva York (JFK) Directo", "Estados Unidos", 590],
  ["LATAM Airlines", "aerolinea-latam-lima-los-angeles", "Lima a Los Ángeles (LAX) Directo", "Estados Unidos", 620],
  ["LATAM Airlines", "aerolinea-latam-lima-cancun", "Lima a Cancún Directo", "México", 520],
  ["LATAM Airlines", "aerolinea-latam-lima-punta-cana", "Lima a Punta Cana Directo", "República Dominicana", 540],
  ["LATAM Airlines", "aerolinea-latam-lima-buenos-aires", "Lima a Buenos Aires Directo", "Argentina", 440],
  ["LATAM Airlines", "aerolinea-latam-lima-santiago", "Lima a Santiago Directo", "Chile", 330],
  ["LATAM Airlines", "aerolinea-latam-lima-cusco", "Lima a Cusco Directo", "Perú", 109],
  ["KLM", "aerolinea-klm-lima-amsterdam", "Lima a Ámsterdam Directo", "Países Bajos", 1180],
  ["Air France", "aerolinea-air-france-lima-paris", "Lima a París (CDG) Directo", "Francia", 1190],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-panama", "Lima a Panamá (Hub de las Américas)", "Panamá", 420],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-punta-cana", "Lima a Punta Cana vía Panamá", "República Dominicana", 540],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-cancun", "Lima a Cancún vía Panamá", "México", 520],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-miami", "Lima a Miami vía Panamá", "Estados Unidos", 495],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-orlando", "Lima a Orlando vía Panamá", "Estados Unidos", 540],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-aruba", "Lima a Aruba vía Panamá", "Aruba", 580],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-curazao", "Lima a Curazao vía Panamá", "Curazao", 580],
  ["Avianca", "aerolinea-avianca-lima-bogota", "Lima a Bogotá Directo", "Colombia", 340],
  ["Avianca", "aerolinea-avianca-lima-medellin", "Lima a Medellín", "Colombia", 350],
  ["Avianca", "aerolinea-avianca-lima-cartagena", "Lima a Cartagena", "Colombia", 360],
  ["Sky Airline", "aerolinea-sky-airline-lima-cancun", "Lima a Cancún Directo", "México", 499],
  ["Sky Airline", "aerolinea-sky-airline-lima-punta-cana", "Lima a Punta Cana Directo", "República Dominicana", 520],
  ["Sky Airline", "aerolinea-sky-airline-lima-cusco", "Lima a Cusco Directo", "Perú", 99],
];

const GRUPOS_Y_SEGUROS: [string, string, string, number, string][] = [
  ["Viaje de Promoción Escolar a Cusco y Machu Picchu", "viaje-promocion-escolar-cusco", "Cusco, Perú", 369, "Programa estudiantil todo incluido con vuelos, hotel, tren a Machu Picchu, alimentación completa, tour conductor y seguro médico grupal."],
  ["Viaje de Promoción Escolar a Punta Cana All Inclusive", "viaje-promocion-escolar-punta-cana", "Punta Cana, Rep. Dominicana", 1090, "Promoción secundaria en Resort 5★ Todo Incluido 24h en Playa Bávaro, Isla Saona en catamarán, seguro médico y coordinador desde Lima."],
  ["Viaje de Promoción Escolar a Cancún & Parques", "viaje-promocion-escolar-cancun", "Cancún, México", 1050, "Paquete estudiantil en Cancún con Resort All Inclusive, Chichén Itzá o Xcaret, fiestas temáticas seguras y acompañamiento permanente."],
  ["Viaje de Promoción Escolar a Cartagena de Indias", "viaje-promocion-escolar-cartagena", "Cartagena, Colombia", 649, "Solo con DNI: vuelos desde Lima, hotel con piscina en Bocagrande, Islas del Rosario, Chiva Rumbera estudiantil y alimentación completa."],
  ["Viaje de Promoción Escolar a Isla de San Andrés", "viaje-promocion-escolar-san-andres", "San Andrés, Colombia", 769, "Solo con DNI: Resort en el Mar de los 7 Colores con alimentación completa, tour Johnny Cay, Acuario, vuelta a la isla y seguro médico."],
  ["Viaje de Promoción Escolar a Royal Decameron Punta Sal", "viaje-promocion-escolar-decameron-punta-sal", "Tumbes, Perú", 489, "Todo Incluido en el norte peruano con vuelos a Tumbes/Talara, alimentación ilimitada, deportes náuticos y shows nocturnos."],
  ["Viaje de Promoción Escolar a Tarapoto y Laguna Azul", "viaje-promocion-escolar-tarapoto", "San Martín, Perú", 319, "El favorito de primaria o secundaria: vuelos Lima – Tarapoto, hotel con piscina, Laguna Azul en Sauce, Lamas, Ahuashiyacu y pensión completa."],
  ["Viaje de Promoción Escolar a Arequipa y Valle del Colca", "viaje-promocion-escolar-arequipa", "Arequipa, Perú", 319, "Vuelos a Arequipa, Monasterio de Santa Catalina, Cañón del Colca, baños termales, alimentación completa y guía permanente."],
  ["Viaje de Promoción Escolar a Iquitos y Río Amazonas", "viaje-promocion-escolar-iquitos", "Loreto, Perú", 369, "Vuelos a Iquitos, Lodge en la selva amazónica, rescate de manatíes, delfines rosados, comunidades nativas y pensión completa."],
  ["Viaje de Promoción Escolar a Huaraz y Callejón de Huaylas", "viaje-promocion-escolar-huaraz", "Áncash, Perú", 299, "Laguna de Llanganuco, Campo Santo de Yungay, Chavín de Huántar y Nevado Pastoruri con pensión completa en bus turístico privado."],
  ["Viaje de Quinceañeras a Europa Mágica & Disney París (15 Días)", "viaje-quinceaneras-europa-15-dias", "España, Francia e Italia", 2690, "Salidas grupales acompañadas desde Lima: Madrid, París, Disneyland París, Venecia, Florencia y Roma con pensión completa + cena de gala."],
  ["Viaje de Quinceañeras a Orlando (Disney + Universal) y Miami", "viaje-quinceaneras-disney-orlando-miami", "Florida, EE. UU.", 1990, "Grupo de quinceañeras con entradas a Magic Kingdom, Epcot, Hollywood Studios, Universal Studios, compras en Miami y coordinadoras 24/7."],
  ["Viaje de Quinceañeras en Crucero por el Caribe (Sin Visa)", "viaje-quinceaneras-crucero-caribe", "Panamá, Aruba y Curazao", 1490, "7 noches a bordo de crucero Todo Incluido zarpando de Panamá o Cartagena sin requerir visa estadounidense, con fiesta de 15 años a bordo."],
  ["Viaje de Quinceañeras a Cancún & Riviera Maya", "viaje-quinceaneras-cancun-riviera-maya", "Cancún, México", 1290, "Resort 5★ Todo Incluido, parque Xcaret, Isla Mujeres en catamarán, sesión de fotos y acompañamiento permanente desde Lima."],
  ["Viaje de Quinceañeras a Punta Cana Todo Incluido", "viaje-quinceaneras-punta-cana", "Punta Cana, Rep. Dominicana", 1290, "Sin visa para peruanas: Resort 5★ frente a Playa Bávaro, Isla Saona, Dolphin Explorer, sesión fotográfica y coordinadoras de viaje."],
  ["Agencia de Viajes Corporativos para Empresas en Lima", "viajes-corporativos-empresas-lima", "Nacional e Internacional", 129, "Facturación electrónica RUC 20614914239, tarifas corporativas en vuelos nacionales o internacionales, hoteles ejecutivos y atención personalizada."],
  ["Gestión de Pasajes Aéreos para Minería, Ingeniería y Construcción", "viajes-corporativos-mineria-energia-peru", "Rutas Nacionales Perú", 109, "Emisión con cambios flexibles para cuadrillas o ejecutivos hacia Arequipa, Cusco, Cajamarca, Trujillo, Piura, Talara e Iquitos."],
  ["Viajes de Incentivos y Convenciones para Empresas en el Caribe", "viajes-incentivos-empresas-caribe", "Punta Cana, Cancún y Cartagena", 1049, "Premia a tu fuerza de ventas o directorio con programas Todo Incluido, salas de conferencias, cenas privadas y bloqueos aéreos grupales."],
  ["Viajes a Ferias Internacionales, Congresos y Ruedas de Negocio", "viajes-congresos-ferias-internacionales", "Europa, EE. UU., China y Latinoamérica", 890, "Boletos aéreos corporativos, hoteles junto al recinto ferial, traslados ejecutivos, seguro de negocios y factura deducible."],
  ["Boletos Aéreos Grupales para Delegaciones Deportivas y Culturales", "pasajes-aereos-grupos-delegaciones-peru", "Perú y el Mundo", 129, "Tarifas de grupo a partir de 10 pasajeros con nombres flexibles hasta días antes del vuelo y franquicia de equipaje especial."],
  ["Seguro de Viaje Schengen 30.000€ Oficial para España", "seguro-schengen-espana-30000-euros", "España y Unión Europea", 55, "Póliza oficial sin deducible con cobertura médica mínima de 30.000 euros, repatriación sanitaria y certificado inmediato para Madrid-Barajas."],
  ["Seguro Médico Internacional Schengen para Italia, Francia y Europa", "seguro-schengen-italia-francia", "Espacio Schengen (29 países)", 55, "Emisión inmediata en PDF verificable para migraciones en Roma, Milán, París, Ámsterdam o Frankfurt con asistencia en español 24/7."],
  ["Seguro de Viaje Médico para Estados Unidos y Canadá", "seguro-viaje-estados-unidos-cobertura-medica", "EE. UU. y Canadá", 65, "Alta cobertura médica de $60,000 a $150,000 USD para proteger tu viaje familiar o de negocios ante los altos costos médicos en Norteamérica."],
  ["Seguro de Asistencia al Viajero para el Caribe y Sudamérica", "seguro-viaje-caribe-todo-incluido", "Punta Cana, Cancún, Colombia y Brasil", 39, "Cobertura médica, pérdida de equipaje, demora de vuelos y asistencia odontológica de urgencia para tus vacaciones familiares."],
  ["Asesoría Documental y Preparación de Carpeta de Viaje Internacional", "reserva-vuelo-hotel-para-tramite-visa", "Trámites Consulares y Europa", 120, "Preparación integral de tu expediente de viaje con itinerario aéreo, reserva de alojamiento y seguro médico para trámites consulares o ingreso a Europa."],
];

const PAISES_REQUISITOS: [string, string, string, number, string][] = [
  ["España", "requisitos-viajar-a-espana-desde-peru", "Madrid / Barcelona", 1090, "Pasaporte vigente (mínimo 3 meses tras retorno), boleto ida y vuelta dentro de 90 días con E-Ticket IATA de 13 dígitos, Seguro Schengen 30.000€ sin deducible, reserva de hotel pagada o Carta de Invitación policial original, registro biométrico EES en aeropuerto y solvencia económica BOE 2026 (122,10 € por persona/día, con mínimo obligatorio de 1.098,90 € por persona según Orden PRE/1282/2007)."],
  ["Italia", "requisitos-viajar-a-italia-desde-peru", "Roma / Milán / Turín", 1150, "Pasaporte peruano vigente, pasaje de ida y vuelta no mayor a 90 días, Seguro Schengen de 30.000€ sin franquicia, reserva de hotel confirmada o Lettera di Invito (recordando que el anfitrión debe registrar la Dichiarazione di Ospitalità en la Questura local dentro de las 48 horas según Art. 7 D.Lgs. 286/1998) y medios económicos."],
  ["Francia", "requisitos-viajar-a-francia-desde-peru", "París / Lyon", 1170, "Pasaporte peruano vigente, boleto aéreo de retorno confirmado, Seguro Schengen 30.000€, reserva de alojamiento o Attestation d'accueil tramitada en el ayuntamiento francés y sustento económico diario."],
  ["Alemania", "requisitos-viajar-a-alemania-desde-peru", "Frankfurt / Múnich / Berlín", 1190, "Pasaporte vigente, boleto de regreso dentro de los 90 días Schengen, seguro médico europeo de 30.000€ y reserva de hotel o carta de compromiso formal (Verpflichtungserklärung)."],
  ["Países Bajos (Holanda)", "requisitos-viajar-a-paises-bajos-desde-peru", "Ámsterdam", 1180, "Pasaporte vigente, vuelo directo KLM o con conexión ida y vuelta, Seguro Schengen 30.000€, reserva hotelera verificable y solvencia por día de estancia."],
  ["Suiza", "requisitos-viajar-a-suiza-desde-peru", "Zúrich / Ginebra", 1210, "Como parte del Espacio Schengen, los peruanos ingresan sin visa hasta 90 días con pasaporte vigente, boleto redondo, Seguro Schengen y reserva de alojamiento."],
  ["Portugal", "requisitos-viajar-a-portugal-desde-peru", "Lisboa / Oporto", 1160, "Pasaporte peruano vigente, boleto aéreo ida y vuelta, Seguro médico Schengen de 30.000€, reserva de hotel o termo de responsabilidade y bolsa de viaje."],
  ["Reino Unido (Inglaterra)", "requisitos-viajar-a-reino-unido-desde-peru", "Londres", 1240, "Los peruanos gestionan la Autorización Electrónica de Viaje (UK ETA) con pasaporte vigente, vuelo de retorno confirmado y reserva de alojamiento."],
  ["Turquía", "requisitos-viajar-a-turquia-desde-peru", "Estambul / Capadocia", 1490, "Los ciudadanos peruanos están EXENTOS DE VISA para viajar a Turquía por turismo hasta 90 días. Solo necesitas pasaporte con al menos 6 meses de vigencia, vuelo redondo y reserva de hotel/circuito."],
  ["Dubái (Emiratos Árabes)", "requisitos-viajar-a-dubai-desde-peru", "Dubái / Abu Dhabi", 1590, "Los peruanos ingresan a Emiratos Árabes Unidos por turismo sin visa consular con pasaporte vigente (mínimo 6 meses), boleto de retorno confirmado y reserva de hotel."],
  ["Japón", "requisitos-viajar-a-japon-desde-peru", "Tokio / Kioto", 1590, "Exención de visa para peruanos portadores de pasaporte electrónico/biométrico vigente en viajes de turismo de hasta 90 días, con pasaje redondo e itinerario."],
  ["Estados Unidos", "requisitos-viajar-a-estados-unidos-desde-peru", "Miami / Nueva York / Orlando", 499, "Requiere Pasaporte peruano vigente y Visa Americana B1/B2 válida. Te asesoramos con el formulario DS-160, pago de tasa consular, programación de cita y paquete de viaje."],
  ["Canadá", "requisitos-viajar-a-canada-desde-peru", "Toronto / Montreal / Vancouver", 660, "Requiere Pasaporte vigente y Visa de Residente Temporal (Visitor Visa) canadiense. Te asesoramos en el expediente consular e itinerario de vuelo y hotel."],
  ["México y Cancún", "requisitos-viajar-a-mexico-cancun-desde-peru", "Cancún / Ciudad de México", 520, "Los ciudadanos peruanos requieren Visa Mexicana vigente, O BIEN quedan exentos si poseen Visa vigente y múltiple de Estados Unidos, Canadá, Espacio Schengen, Reino Unido o Japón."],
  ["Punta Cana (Rep. Dominicana)", "requisitos-viajar-a-punta-cana-desde-peru", "Punta Cana / Santo Domingo", 540, "SIN VISA para peruanos: solo necesitas Pasaporte vigente (mínimo 6 meses), boleto de retorno confirmado, reserva de resort y completar el formulario electrónico gratuito E-Ticket dominicano."],
  ["Aruba", "requisitos-viajar-a-aruba-desde-peru", "Oranjestad, Aruba", 580, "SIN VISA para peruanos: Pasaporte vigente, boleto aéreo ida y vuelta, reserva de hotel, tarjeta ED Card online y Certificado Internacional de Vacuna contra la Fiebre Amarilla (aplicada mínimo 10 días antes)."],
  ["Curazao", "requisitos-viajar-a-curazao-desde-peru", "Willemstad, Curazao", 580, "SIN VISA para peruanos: Pasaporte con mínimo 6 meses de vigencia, Digital Immigration Card, vacuna contra la fiebre amarilla, reserva de hotel y boleto de retorno."],
  ["Jamaica", "requisitos-viajar-a-jamaica-desde-peru", "Montego Bay / Ocho Ríos", 620, "SIN VISA para peruanos por turismo: Pasaporte vigente (mínimo 6 meses), boleto ida y vuelta vía Panamá, reserva de resort Todo Incluido y formulario C5 online."],
  ["Cuba (La Habana y Varadero)", "requisitos-viajar-a-cuba-desde-peru", "La Habana / Varadero", 560, "Pasaporte vigente con mínimo 6 meses, boleto ida y vuelta, reserva de hotel, seguro médico de viaje y Tarjeta del Turista / Visa turística cubana (que gestionamos con tu paquete) + formulario D'Viajeros."],
  ["Panamá", "requisitos-viajar-a-panama-desde-peru", "Ciudad de Panamá / Playa Blanca", 420, "SIN VISA para peruanos: Pasaporte vigente (mínimo 6 meses), boleto aéreo de retorno, reserva de hotel y solvencia económica mínima ($500 USD o tarjeta de crédito)."],
  ["Costa Rica", "requisitos-viajar-a-costa-rica-desde-peru", "San José / Guanacaste", 480, "SIN VISA para peruanos hasta 90 días: Pasaporte con vigencia mínima de 6 meses, boleto de salida de Costa Rica, reserva de alojamiento y vacuna de fiebre amarilla si procedes de zonas endémicas."],
  ["Colombia (Cartagena, Medellín, San Andrés)", "requisitos-viajar-a-colombia-solo-dni", "Cartagena / Medellín / Bogotá / San Andrés", 340, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) gracias a los acuerdos de la Comunidad Andina. Solo debes completar el registro gratuito Check-Mig de Migraciones Colombia antes de tu vuelo."],
  ["Argentina (Buenos Aires y Bariloche)", "requisitos-viajar-a-argentina-solo-dni", "Buenos Aires / Bariloche / Iguazú", 440, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin necesidad de visa por turismo hasta 90 días, presentando tu boleto de retorno confirmado y reserva de alojamiento."],
  ["Brasil (Río de Janeiro, Iguazú y São Paulo)", "requisitos-viajar-a-brasil-solo-dni", "Río de Janeiro / Foz de Iguazú / São Paulo", 450, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin visa por turismo hasta 90 días, con tu pasaje de retorno confirmado y reserva de hotel."],
  ["Chile (Santiago y Viña del Mar)", "requisitos-viajar-a-chile-solo-dni", "Santiago de Chile", 330, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin necesidad de visa para estancias turísticas de hasta 90 días."],
  ["Uruguay (Montevideo y Punta del Este)", "requisitos-viajar-a-uruguay-solo-dni", "Montevideo / Punta del Este", 450, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin requerir visa por turismo hasta 90 días."],
  ["Bolivia (La Paz, Santa Cruz y Salar de Uyuni)", "requisitos-viajar-a-bolivia-solo-dni", "Santa Cruz / La Paz / Uyuni", 350, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin visa como ciudadano de la Comunidad Andina."],
  ["Ecuador (Quito, Guayaquil y Galápagos)", "requisitos-viajar-a-ecuador-solo-dni", "Quito / Guayaquil / Galápagos", 330, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin visa. Para Galápagos se adiciona la tarjeta de control de tránsito TCT en aeropuerto."],
  ["Viajar con Menores de Edad desde Perú", "requisitos-viajar-con-menores-de-edad-peru", "Rutas Nacionales e Internacionales", 289, "Para vuelos dentro del Perú basta que el menor viaje con al menos uno de sus padres (con DNI vigente). Para vuelos internacionales, si viaja con uno solo de los padres o con un tercero, es obligatorio el Permiso Notarial de Viaje al Exterior (o judicial/consular)."],
  ["Carta de Invitación para España desde Perú", "requisitos-carta-de-invitacion-espana-peru", "Madrid, Barcelona y toda España", 1090, "Si te hospedarás en casa de un familiar o amigo residente legal en España, tu anfitrión debe tramitar la Carta de Invitación original en la Comisaría de Policía Nacional y enviártela en físico a Perú. En Cityland Travel te cotizamos SOLO Vuelo Ida y Vuelta + Seguro Schengen 30.000€ (sin hacerte pagar hotel), recordando que la Carta NO exime de demostrar la bolsa de viaje BOE (mínimo 1.098,90 €)."],
  ["Visado de Estudios en España (RD 1155/2024)", "vuelos-estudiantes-espana-visado-rd-1155-2024", "Madrid, Barcelona, Valencia y Sevilla", 690, "Atención especializada bajo el nuevo Reglamento de Extranjería de España (Real Decreto 1155/2024): emitimos pre-reserva aérea para tu cita consular, seguro médico anual sin copagos ni carencias y boleto definitivo (Solo Ida desde $690 USD o Ida y Vuelta desde $1,090 USD) con franquicia de 2 maletas de 23 kg."],
  ["Reagrupación Familiar a España e Italia", "vuelos-reagrupacion-familiar-espana-italia", "Madrid, Barcelona, Milán, Roma y Turín", 690, "Si viajas con Visado Nacional Tipo D de Reagrupación Familiar (RD 1155/2024 en España o Ricongiungimento Familiare en Italia), estás autorizado a volar con pasaje de Solo Ida (One-Way desde $690 USD). Emitimos tu boleto con 2 maletas de 23 kg y asistencia completa para tu familia."],
  ["Visado de Trabajo en Italia (Decreto Flussi / Nulla Osta)", "vuelos-decreto-flussi-italia-nulla-osta-peru", "Milán, Roma, Turín, Bolonia y Florencia", 740, "Para trabajadores peruanos que cuentan con autorización Nulla Osta al lavoro (Sportello Unico per l'Immigrazione) y Visado Tipo D emitido por la Embajada de Italia en Lima: emitimos tu boleto aéreo Solo Ida desde $740 USD o Ida y Vuelta desde $1,150 USD hacia Italia con 2 maletas de 23 kg y conexión protegida vía Madrid, Ámsterdam o París."],
  ["Comprar Pasajes desde España o Italia para Familiares en Perú", "comprar-pasajes-desde-espana-italia-para-familiares-peru", "Emisión para Padres, Hijos y Cónyuges", 1090, "Servicio especial para residentes peruanos en Madrid, Barcelona, Milán, Turín y Roma que desean comprar de forma segura el pasaje o paquete para sus padres, hijos o pareja en Perú. Entregamos la carpeta física en nuestra oficina de Los Olivos o por courier a cualquier provincia."],
  ["Vuelos a Europa para Adulto Mayor con Silla de Ruedas (SSR WCHR)", "vuelos-adulto-mayor-silla-de-ruedas-lima-madrid-roma", "Madrid, Barcelona, Roma y Milán", 1090, "Gestionamos sin costo adicional el servicio oficial de asistencia de Silla de Ruedas (código IATA SSR WCHR / WCHS) en Iberia, Air Europa, Plus Ultra, LATAM y KLM para que tus padres o abuelos viajen acompañados desde el mostrador en Lima hasta la entrega de equipaje en Europa."],
  ["Sistema Biométrico EES 2026 y ETIAS para Peruanos", "sistema-ees-etias-europa-requisitos-peruanos", "Espacio Schengen (29 países)", 1090, "Guía oficial verificada en travel-europe.europa.eu: el Sistema de Entradas y Salidas (EES) está operativo desde el 10 de abril de 2026 (registro biométrico gratuito en frontera). En cambio, la autorización ETIAS AÚN NO ESTÁ EN VIGOR en 2026; evita páginas no oficiales que cobran por trámites inexistentes."],
];

function generarViajesEspecializados(): ViajeEspecializadoSEO[] {
  const lista: ViajeEspecializadoSEO[] = [];

  // A. 35 páginas de Primer Viaje / Carpeta Migratoria
  for (const [ciudad, slugCiudad, pais, precio] of CIUDADES_PRIMER_VIAJE) {
    const fotos = obtenerFotosPorTexto(`${slugCiudad} ${ciudad} ${pais}`);
    const notaPaisEspecifica =
      pais === "España"
        ? `Incluye orientación sobre la solvencia económica oficial BOE 2026 (122,10 € por persona/día, mínimo 1.098,90 €) y el control biométrico EES en ${ciudad}.`
        : pais === "Italia"
        ? `Incluye orientación sobre reserva hotelera verificada o Lettera di Invito y la regla de las 48 horas de Dichiarazione di Ospitalità ante la Questura en ${ciudad}.`
        : `Incluye orientación sobre solvencia económica, Seguro Schengen de 30.000€ y registro biométrico EES 2026 para tu ingreso por ${ciudad}.`;

    lista.push({
      slug: `primer-viaje-a-${slugCiudad}`,
      categoria: "primer-viaje",
      badge: `Paquetes y Vuelos · ${pais}`,
      titulo: `Paquete y Vuelos a ${ciudad}, ${pais} desde Lima`,
      subtitulo: `Vuelo confirmado (PNR + E-Ticket IATA 13 dígitos) + Hotel verificable o Carta de Invitación + Seguro Schengen 30.000€`,
      destinoOPais: `${ciudad}, ${pais}`,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Paquete con Carpeta Completa Desde",
      imagenHero: fotos[0],
      galeria: [fotos[1], fotos[2], fotos[3], fotos[4]],
      metaTitle: `Primer Viaje a ${ciudad}, ${pais} Desde $${precio} | Cityland Travel`,
      metaDescription: `Viaja de Lima a ${ciudad} (${pais}) Desde $${precio}: boleto aéreo PNR, hotel o Carta de Invitación, Seguro Schengen 30.000€ y guía migratoria 2026.`,
      keywords: [
        `primer viaje a ${ciudad.toLowerCase()} desde peru`,
        `paquete migratorio a ${ciudad.toLowerCase()}`,
        `requisitos para viajar a ${ciudad.toLowerCase()} por primera vez`,
        `vuelos lima ${ciudad.toLowerCase()} carpeta migratoria`,
        "cityland travel",
      ],
      resumenEjecutivo: `Si es tu primer viaje desde Perú hacia ${ciudad} (${pais}), en Cityland Travel preparamos tu expediente completo según tu modalidad legal (Turismo con Hotel, Visita Familiar con Carta de Invitación o Titular de Visado Tipo D). ${notaPaisEspecifica}`,
      incluye: [
        `Boleto aéreo Lima – ${ciudad} con código PNR y E-Ticket IATA de 13 dígitos (impuestos incluidos)`,
        `Reserva de alojamiento verificada en ${ciudad} (o descuento si ya cuentas con Carta de Invitación / Ospitalità)`,
        "Póliza oficial de Seguro Médico Schengen por 30.000€ sin deducible ni copago",
        "Equipaje de mano 10 kg + opciones con 1 o 2 maletas de 23 kg en bodega",
        `Asesoría 1 a 1 sobre bolsa de viaje y sistema biométrico EES 2026 para ${ciudad}`,
      ],
      beneficiosClave: [
        { titulo: "Documentación 100% Verificable", desc: `Entregamos tu carpeta impresa y digital con PNR y boleto de 13 dígitos activos para tu llegada a ${ciudad}.` },
        { titulo: "Seguro Schengen Oficial 30.000€", desc: "Cumple con la normativa europea de asistencia médica sin franquicia ni copagos." },
        { titulo: "Oficina Física en Los Olivos, Lima", desc: "Atención presencial en Av. Antúnez de Mayolo 814 (RUC 20614914239) y Central WhatsApp +51 944 103 890." },
      ],
      faqs: [
        {
          q: `¿Qué documentos incluye el paquete de primer viaje a ${ciudad} (${pais})?`,
          a: `Incluye tu boleto aéreo confirmado hacia ${ciudad} con número de E-Ticket IATA de 13 dígitos, póliza de Seguro Schengen de 30.000€ sin deducible, reserva hotelera verificable (o ajuste sin hotel si viajas con Carta de Invitación) y orientación migratoria personalizada.`,
        },
        {
          q: `¿El precio Desde $${precio} incluye impuestos y se puede separar con el 50%?`,
          a: `Sí. Todas nuestras tarifas están expresadas en dólares americanos con impuestos aeroportuarios incluidos y puedes congelar tu cupo con el 50% de inicial.`,
        },
      ],
      waMensaje: `¡Hola Cityland Travel! Quiero cotizar mi Primer Viaje a ${ciudad} (${pais}) Desde $${precio} con carpeta completa. ¿Me pueden asesorar?\n\n📍 Ref Web: citylandtravel.com/viajes/primer-viaje-a-${slugCiudad}`,
    });
  }

  // B. 35 páginas de Vuelos con 2 Maletas de 23 kg
  for (const [rutaNombre, slugRuta, pais, precio, aerolineas] of RUTAS_DOS_MALETAS) {
    const fotos = obtenerFotosPorTexto(slugRuta);
    lista.push({
      slug: `vuelos-con-2-maletas-${slugRuta}`,
      categoria: "dos-maletas",
      badge: `Franquicia 2 Maletas de 23 kg · ${aerolineas}`,
      titulo: `Vuelos de ${rutaNombre} con 2 Maletas de 23 kg en Bodega`,
      subtitulo: `Lleva hasta 46 kg en bodega + 10 kg en cabina con tarifas especiales de agencia en dólares`,
      destinoOPais: rutaNombre,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Vuelo con Equipaje Completo Desde",
      imagenHero: fotos[0],
      galeria: [fotos[1], fotos[2], fotos[3], fotos[4]],
      metaTitle: `Vuelos ${rutaNombre} con 2 Maletas de 23 kg Desde $${precio} USD | Cityland Travel`,
      metaDescription: `Compra tu pasaje aéreo de ${rutaNombre} con 2 maletas de 23 kg en bodega + equipaje de mano 10 kg Desde $${precio} USD (impuestos incluidos). Emitimos en ${aerolineas} con código PNR inmediato.`,
      keywords: [
        `vuelos con 2 maletas ${rutaNombre.toLowerCase()}`,
        `pasajes con dos maletas de 23 kg ${rutaNombre.toLowerCase()}`,
        `equipaje extra ${rutaNombre.toLowerCase()}`,
        "cityland travel",
      ],
      resumenEjecutivo: `Comprar la segunda maleta de 23 kg en el mostrador del aeropuerto puede costar entre $150 y $250 USD adicionales por tramo. En Cityland Travel emitimos tu tarifa negociada en la ruta ${rutaNombre} con tus 2 maletas de 23 kg ya registradas desde la emisión.`,
      incluye: [
        `Boleto aéreo confirmado en ruta ${rutaNombre} (${aerolineas})`,
        "2 Maletas de 23 kg cada una en bodega (total 46 kg despachados)",
        "1 Maleta de cabina de 10 kg + 1 bolso o mochila personal",
        "Impuestos aeroportuarios y tasas obligatorias incluidas en USD",
        "Check-in anticipado y asignación de asiento",
      ],
      beneficiosClave: [
        { titulo: "Ahorra hasta 50% en Equipaje", desc: "Tarifa con equipaje incluido desde la emisión, mucho más económica que pagar en aeropuerto." },
        { titulo: "Ideal para Larga Estadía o Familia", desc: `Lleva todo tu equipaje sin preocupaciones en tu vuelo ${rutaNombre}.` },
        { titulo: "Reserva Verificable al Instante", desc: "Verifica tus 2 piezas de 23 kg directamente con tu código PNR en la web de la aerolínea." },
      ],
      faqs: [
        {
          q: `¿Las 2 maletas de 23 kg quedan registradas en mi boleto de ${rutaNombre}?`,
          a: `Sí. Tu boleto electrónico E-Ticket y código de reserva PNR reflejan expresamente la franquicia de 2 piezas de 23 kg en bodega más tu equipaje de mano de 10 kg.`,
        },
        {
          q: `¿Qué precio tiene el vuelo de ${rutaNombre} con equipaje completo?`,
          a: `Contamos con tarifas referenciales Desde $${precio} USD con impuestos incluidos. Tarifa sujeta a disponibilidad según tus fechas de viaje.`,
        },
      ],
      waMensaje: `¡Hola Cityland Travel! Quiero cotizar el vuelo de ${rutaNombre} con 2 maletas de 23 kg (Desde $${precio} USD). ¿Me ayudan con fechas?`,
    });
  }

  // C. 35 páginas de Rutas por Aerolínea
  for (const [aerolinea, slugAero, rutaNombre, pais, precio] of RUTAS_AEROLINEAS) {
    const fotos = obtenerFotosPorTexto(`${rutaNombre} ${pais}`);
    lista.push({
      slug: slugAero,
      categoria: "aerolinea",
      badge: `Emisión Oficial · ${aerolinea}`,
      titulo: `Vuelos ${aerolinea}: ${rutaNombre} — Tarifas y Equipaje`,
      subtitulo: `Cotiza boletos confirmados en ${aerolinea} con código PNR inmediato, maleta de 23 kg y atención en Lima`,
      destinoOPais: `${rutaNombre} (${aerolinea})`,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Tarifa Aérea con Impuestos Desde",
      imagenHero: fotos[0],
      galeria: [fotos[1], fotos[2], fotos[3], fotos[4]],
      metaTitle: `Vuelos ${aerolinea} ${rutaNombre} Desde $${precio} USD (Impuestos Incluidos) | Cityland Travel`,
      metaDescription: `Reserva vuelos en ${aerolinea} para la ruta ${rutaNombre} Desde $${precio} USD con impuestos incluidos. Conoce la franquicia de equipaje, horarios y tarifas con maleta de 23 kg en Cityland Travel (RUC 20614914239).`,
      keywords: [
        `vuelos ${aerolinea.toLowerCase()} ${rutaNombre.toLowerCase()}`,
        `pasajes ${aerolinea.toLowerCase()} desde lima`,
        `equipaje ${aerolinea.toLowerCase()} ${rutaNombre.toLowerCase()}`,
        "cityland travel",
      ],
      resumenEjecutivo: `Emitimos boletos aéreos en ${aerolinea} para la ruta ${rutaNombre} con tarifas en dólares americanos (USD) e impuestos incluidos. Nuestro equipo gestiona tu reserva PNR, adición de maletas de 23 kg, selección de asientos y check-in sin cargos ocultos.`,
      incluye: [
        `Boleto electrónico oficial en ${aerolinea} (${rutaNombre})`,
        "Código de reserva PNR verificable en la web oficial de la aerolínea",
        "Impuestos aeroportuarios, tasas y cargos obligatorios incluidos",
        "Opciones con 1 o 2 maletas de 23 kg en bodega + 10 kg en cabina",
        "Soporte directo en Lima para cambios, asientos y check-in",
      ],
      beneficiosClave: [
        { titulo: `Tarifas Negociadas ${aerolinea}`, desc: "Comparamos clases tarifarias y fechas flexibles para encontrar el menor precio en USD." },
        { titulo: "Pago Seguro en Perú", desc: "Paga mediante cuentas empresa (BCP, BBVA, Interbank), tarjetas o en nuestra oficina de Los Olivos." },
        { titulo: "Asistencia Postventa Real", desc: "Atención directa por nuestra Central WhatsApp +51 944 103 890 antes y durante tu viaje." },
      ],
      faqs: [
        {
          q: `¿Qué equipaje permite ${aerolinea} en la ruta ${rutaNombre}?`,
          a: `Según la familia tarifaria elegida en ${aerolinea}, puedes viajar con equipaje de cabina de 10 kg más 1 o 2 maletas de 23 kg en bodega. Te cotizamos la opción exacta según tu necesidad.`,
        },
        {
          q: `¿El precio Desde $${precio} USD incluye impuestos?`,
          a: `Sí, el precio referencial en dólares incluye todos los impuestos aeroportuarios y tasas obligatorias.`,
        },
      ],
      waMensaje: `¡Hola Cityland Travel! Quiero consultar disponibilidad y precio en ${aerolinea} para la ruta ${rutaNombre} (Desde $${precio} USD).`,
    });
  }

  // D. 25 páginas de Grupos, Promociones Escolares, Quinceañeras, Corporativos y Seguros
  for (const [titulo, slugGrupo, destino, precio, desc] of GRUPOS_Y_SEGUROS) {
    const fotos = obtenerFotosPorTexto(`${slugGrupo} ${titulo} ${destino}`);
    lista.push({
      slug: slugGrupo,
      categoria: "grupos-seguros",
      badge: `Servicio Especializado · ${destino}`,
      titulo,
      subtitulo: desc,
      destinoOPais: destino,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Tarifa Referencial Desde",
      imagenHero: fotos[0],
      galeria: [fotos[1], fotos[2], fotos[3], fotos[4]],
      metaTitle: `${titulo} Desde $${precio} USD | Cityland Travel Perú`,
      metaDescription: `${desc} Cotiza Desde $${precio} USD con impuestos incluidos en Cityland Travel E.I.R.L. (RUC 20614914239), oficina en Los Olivos, Lima.`,
      keywords: [
        slugGrupo.replace(/-/g, " "),
        `${titulo.toLowerCase()} lima`,
        "agencia de viajes cityland travel",
      ],
      resumenEjecutivo: `${desc} En Cityland Travel E.I.R.L. (RUC 20614914239) organizamos viajes individuales, grupales, estudiantiles y corporativos con contrato formal, boleta/factura electrónica y atención personalizada.`,
      incluye: [
        "Atención directa en nuestra Central WhatsApp (+51 944 103 890) y oficina en Los Olivos",
        "Contrato formal y comprobantes electrónicos (Boleta o Factura RUC 20614914239)",
        "Tarifas expresadas 100% en dólares americanos (USD) con impuestos incluidos",
        "Facilidades de pago fraccionado reservando con inicial desde el 50%",
        "Asistencia permanente 24/7 antes y durante todo el viaje",
      ],
      beneficiosClave: [
        { titulo: "Agencia Formal Registrada", desc: "Cityland Travel E.I.R.L. (RUC 20614914239) con oficina física en Av. Antúnez de Mayolo 814, Los Olivos." },
        { titulo: "Bloqueos y Cupos Garantizados", desc: "Aseguramos espacios aéreos y hoteleros con códigos de reserva oficiales." },
        { titulo: "Cero Costos Ocultos", desc: "Cotizaciones claras en dólares con impuestos incluidos desde el primer momento." },
      ],
      faqs: [
        {
          q: `¿Cómo solicito una cotización formal para ${titulo}?`,
          a: `Haz clic en cualquiera de los botones de WhatsApp (+51 944 103 890) y nuestro equipo te enviará la propuesta detallada en PDF según tus fechas y número de viajeros.`,
        },
        {
          q: `¿El monto Desde $${precio} USD incluye impuestos?`,
          a: `Sí, nuestras tarifas referenciales en dólares incluyen impuestos y cargos obligatorios.`,
        },
      ],
      waMensaje: `¡Hola Cityland Travel! Quiero solicitar información y cotización sobre: ${titulo} (Desde $${precio} USD). ¿Me pueden ayudar?`,
    });
  }

  // E. Páginas de Requisitos Migratorios y Modalidades Especializadas por País
  const TITULOS_ESPECIALES_REQ: Record<string, string> = {
    "requisitos-viajar-con-menores-de-edad-peru":
      "Viajes con Menores de Edad desde Perú: Requisitos y Boletos",
    "requisitos-carta-de-invitacion-espana-peru":
      "Viajar a España con Carta de Invitación: Requisitos y Vuelos",
    "vuelos-estudiantes-espana-visado-rd-1155-2024":
      "Vuelos y Seguro para Visado de Estudios en España (RD 1155/2024)",
    "vuelos-reagrupacion-familiar-espana-italia":
      "Vuelos para Reagrupación Familiar en España e Italia (Solo Ida / 2 Maletas)",
    "vuelos-decreto-flussi-italia-nulla-osta-peru":
      "Vuelos a Italia con Visado de Trabajo (Decreto Flussi / Nulla Osta)",
    "comprar-pasajes-desde-espana-italia-para-familiares-peru":
      "Comprar Pasajes desde España o Italia para Familiares en Perú",
    "vuelos-adulto-mayor-silla-de-ruedas-lima-madrid-roma":
      "Vuelos a Europa para Adulto Mayor con Silla de Ruedas (SSR WCHR)",
    "sistema-ees-etias-europa-requisitos-peruanos":
      "Sistema Biométrico EES 2026 y Estado de ETIAS para Viajeros Peruanos",
  };

  for (const [pais, slugReq, ciudadesRef, precio, detalleReq] of PAISES_REQUISITOS) {
    const fotos = obtenerFotosPorTexto(`${slugReq} ${pais}`);
    const esGuiaEspecial = Boolean(TITULOS_ESPECIALES_REQ[slugReq]);
    const tituloFinal =
      TITULOS_ESPECIALES_REQ[slugReq] ||
      `Requisitos y Paquetes para Viajar a ${pais} desde Perú`;

    const subtituloFinal = esGuiaEspecial
      ? `Guía oficial y emisión verificada para pasajeros peruanos (${ciudadesRef}) con código PNR y E-Ticket IATA`
      : `Todo lo que solicita migraciones en ${ciudadesRef} para ciudadanos peruanos + cotización de vuelos y paquetes desde $${precio}`;

    lista.push({
      slug: slugReq,
      categoria: "requisitos",
      badge: `Guía Documental Actualizada · ${pais}`,
      titulo: tituloFinal,
      subtitulo: subtituloFinal,
      destinoOPais: pais,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Vuelos y Paquetes con Asesoría Desde",
      imagenHero: fotos[0],
      galeria: [fotos[1], fotos[2], fotos[3], fotos[4]],
      metaTitle: `${tituloFinal} | Cityland Travel`,
      metaDescription: `Guía actualizada para ${pais} (${ciudadesRef}): documentos, seguro Schengen, solvencia BOE y cotización Desde $${precio} en Cityland Travel.`,
      keywords: [
        `requisitos para viajar a ${pais.toLowerCase()} desde peru`,
        `documentos para entrar a ${pais.toLowerCase()}`,
        `vuelos a ${pais.toLowerCase()} desde lima`,
        "cityland travel",
      ],
      resumenEjecutivo: detalleReq,
      incluye: [
        `Asesoría y revisión gratuita de tus documentos al comprar tu pasaje o paquete hacia ${ciudadesRef}`,
        `Boleto aéreo de ida y vuelta hacia ${ciudadesRef} con código PNR verificable`,
        "Reserva de hotel confirmada o validación de Carta de Invitación familiar",
        "Seguro médico internacional obligatorio según normativa del país de destino",
        "Apoyo con formularios electrónicos migratorios y check-in previo al vuelo",
      ],
      beneficiosClave: [
        { titulo: "Asesoría Incluida con tu Viaje", desc: `Al emitir tu boleto o paquete con nosotros, verificamos cada documento requerido para ${pais}.` },
        { titulo: "Todo en un Solo Lugar", desc: "Emitimos tu pasaje aéreo, hotel, seguro médico y carpeta documental lista para presentar." },
        { titulo: "Atención Centralizada", desc: "Resuelve tus dudas por WhatsApp al +51 944 103 890 o visítanos en nuestra sede de Los Olivos." },
      ],
      faqs: [
        {
          q: `¿Qué documentos necesito presentar para este viaje (${pais})?`,
          a: detalleReq,
        },
        {
          q: `¿La asesoría documental tiene costo adicional?`,
          a: `No. Nuestra orientación documental está incluida al reservar tu vuelo o paquete turístico hacia ${ciudadesRef} (Desde $${precio} USD con impuestos incluidos).`,
        },
      ],
      waMensaje: `¡Hola Cityland Travel! Vi su guía de requisitos para ${pais} y quiero cotizar mi viaje (${ciudadesRef}) Desde $${precio} USD con asesoría incluida.`,
    });
  }

  return lista;
}

export const VIAJES_ESPECIALIZADOS_SEO: ViajeEspecializadoSEO[] = generarViajesEspecializados();

export function buscarViajeEspecializado(slug: string): ViajeEspecializadoSEO | undefined {
  return VIAJES_ESPECIALIZADOS_SEO.find((v) => v.slug === slug);
}
