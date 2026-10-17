export interface ViajeEspecializadoSEO {
  slug: string;
  categoria: "primer-viaje" | "dos-maletas" | "aerolinea" | "grupos-seguros" | "requisitos";
  badge: string;
  titulo: string;
  subtitulo: string;
  destinoOPais: string;
  precioDesdeUSD: number;
  etiquetaPrecio: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  resumenEjecutivo: string;
  incluye: string[];
  beneficiosClave: { titulo: string; desc: string }[];
  faqs: { q: string; a: string }[];
  waMensaje: string;
}

const CIUDADES_PRIMER_VIAJE: [string, string, string, number][] = [
  ["Madrid", "madrid", "España", 890],
  ["Barcelona", "barcelona", "España", 910],
  ["Valencia", "valencia", "España", 930],
  ["Sevilla", "sevilla", "España", 935],
  ["Málaga", "malaga", "España", 935],
  ["Bilbao", "bilbao", "España", 940],
  ["Zaragoza", "zaragoza", "España", 920],
  ["Alicante", "alicante", "España", 930],
  ["Palma de Mallorca", "palma-de-mallorca", "España", 945],
  ["Tenerife", "tenerife", "España", 960],
  ["Murcia", "murcia", "España", 935],
  ["Valladolid", "valladolid", "España", 925],
  ["Vigo", "vigo", "España", 940],
  ["La Coruña", "la-coruna", "España", 940],
  ["Santiago de Compostela", "santiago-de-compostela", "España", 945],
  ["Granada", "granada", "España", 935],
  ["San Sebastián", "san-sebastian", "España", 950],
  ["Pamplona", "pamplona", "España", 945],
  ["Santander", "santander", "España", 940],
  ["Oviedo (Asturias)", "oviedo", "España", 945],
  ["Roma", "roma", "Italia", 960],
  ["Milán", "milan", "Italia", 950],
  ["Turín", "turin", "Italia", 980],
  ["Bolonia", "bolonia", "Italia", 975],
  ["Florencia", "florencia", "Italia", 985],
  ["Venecia", "venecia", "Italia", 980],
  ["Génova", "genova", "Italia", 985],
  ["Nápoles", "napoles", "Italia", 985],
  ["París", "paris", "Francia", 970],
  ["Lyon", "lyon", "Francia", 975],
  ["Ámsterdam", "amsterdam", "Países Bajos", 960],
  ["Bruselas", "bruselas", "Bélgica", 960],
  ["Zúrich", "zurich", "Suiza", 990],
  ["Múnich", "munich", "Alemania", 985],
  ["Lisboa", "lisboa", "Portugal", 940],
];

const RUTAS_DOS_MALETAS: [string, string, string, number, string][] = [
  ["Lima a Madrid", "lima-madrid", "España", 985, "Iberia, Air Europa y Plus Ultra"],
  ["Madrid a Lima", "madrid-lima", "Perú", 940, "Iberia, Air Europa y Plus Ultra"],
  ["Lima a Barcelona", "lima-barcelona", "España", 995, "Iberia, Air Europa y LATAM"],
  ["Barcelona a Lima", "barcelona-lima", "Perú", 950, "Iberia y Air Europa"],
  ["Lima a Roma", "lima-roma", "Italia", 1040, "Iberia, KLM y Air France"],
  ["Lima a Milán", "lima-milan", "Italia", 1030, "Iberia, KLM y Air Europa"],
  ["Lima a París", "lima-paris", "Francia", 1050, "Air France, KLM e Iberia"],
  ["Lima a Ámsterdam", "lima-amsterdam", "Países Bajos", 1040, "KLM y Air France"],
  ["Lima a Miami", "lima-miami", "Estados Unidos", 590, "LATAM, American Airlines, Copa y Avianca"],
  ["Miami a Lima", "miami-lima", "Perú", 580, "LATAM, American Airlines y Copa"],
  ["Lima a Nueva York", "lima-nueva-york", "Estados Unidos", 670, "LATAM, Copa Airlines y American"],
  ["Nueva York a Lima", "nueva-york-lima", "Perú", 660, "LATAM, Copa Airlines y United"],
  ["Lima a Newark (Nueva Jersey)", "lima-newark", "Estados Unidos", 675, "United Airlines, Copa y LATAM"],
  ["Lima a Los Ángeles", "lima-los-angeles", "Estados Unidos", 695, "LATAM, Copa y American Airlines"],
  ["Lima a Orlando", "lima-orlando", "Estados Unidos", 620, "Copa Airlines, LATAM y Avianca"],
  ["Lima a Houston", "lima-houston", "Estados Unidos", 665, "United Airlines y Copa Airlines"],
  ["Lima a Chicago", "lima-chicago", "Estados Unidos", 695, "Copa Airlines, United y American"],
  ["Lima a Atlanta", "lima-atlanta", "Estados Unidos", 680, "Delta Air Lines y LATAM"],
  ["Lima a Washington D.C.", "lima-washington", "Estados Unidos", 680, "Copa Airlines, United y Avianca"],
  ["Lima a Boston", "lima-boston", "Estados Unidos", 690, "Copa Airlines, LATAM y American"],
  ["Lima a Toronto", "lima-toronto", "Canadá", 760, "Air Canada y Copa Airlines"],
  ["Lima a Montreal", "lima-montreal", "Canadá", 770, "Air Canada y Copa Airlines"],
  ["Lima a Cancún", "lima-cancun", "México", 560, "LATAM, Copa Airlines y Sky"],
  ["Lima a Ciudad de México", "lima-ciudad-de-mexico", "México", 595, "LATAM, Aeroméxico y Copa"],
  ["Lima a Punta Cana", "lima-punta-cana", "República Dominicana", 595, "LATAM, Copa Airlines y Arajet"],
  ["Lima a Panamá", "lima-panama", "Panamá", 465, "Copa Airlines y LATAM"],
  ["Lima a Bogotá", "lima-bogota", "Colombia", 395, "LATAM, Avianca y Wingo"],
  ["Lima a Medellín", "lima-medellin", "Colombia", 420, "Avianca, Copa y JetSMART"],
  ["Lima a Cartagena", "lima-cartagena", "Colombia", 440, "LATAM, Avianca y Copa"],
  ["Lima a Buenos Aires", "lima-buenos-aires", "Argentina", 475, "LATAM, Aerolíneas Argentinas y Sky"],
  ["Buenos Aires a Lima", "buenos-aires-lima", "Perú", 465, "LATAM, Aerolíneas Argentinas y Sky"],
  ["Lima a Santiago de Chile", "lima-santiago", "Chile", 340, "LATAM, Sky Airline y JetSMART"],
  ["Santiago a Lima", "santiago-lima", "Perú", 335, "LATAM, Sky Airline y JetSMART"],
  ["Lima a São Paulo", "lima-sao-paulo", "Brasil", 480, "LATAM Airlines"],
  ["Lima a Tokio", "lima-tokio", "Japón", 1490, "United, American y Air Canada"],
];

const RUTAS_AEROLINEAS: [string, string, string, string, number][] = [
  ["Iberia", "aerolinea-iberia-lima-madrid", "Lima a Madrid", "España", 910],
  ["Iberia", "aerolinea-iberia-lima-barcelona", "Lima a Barcelona", "España", 930],
  ["Iberia", "aerolinea-iberia-lima-roma", "Lima a Roma", "Italia", 970],
  ["Iberia", "aerolinea-iberia-lima-milan", "Lima a Milán", "Italia", 960],
  ["Iberia", "aerolinea-iberia-lima-paris", "Lima a París", "Francia", 975],
  ["Air Europa", "aerolinea-air-europa-lima-madrid", "Lima a Madrid", "España", 895],
  ["Air Europa", "aerolinea-air-europa-lima-barcelona", "Lima a Barcelona", "España", 915],
  ["Air Europa", "aerolinea-air-europa-lima-milan", "Lima a Milán", "Italia", 950],
  ["Air Europa", "aerolinea-air-europa-lima-roma", "Lima a Roma", "Italia", 955],
  ["Plus Ultra", "aerolinea-plus-ultra-lima-madrid", "Lima a Madrid (Promoción 2 Maletas)", "España", 890],
  ["Plus Ultra", "aerolinea-plus-ultra-lima-tenerife", "Lima a Tenerife vía Madrid", "España", 950],
  ["LATAM Airlines", "aerolinea-latam-lima-madrid", "Lima a Madrid Directo", "España", 920],
  ["LATAM Airlines", "aerolinea-latam-lima-miami", "Lima a Miami Directo", "Estados Unidos", 495],
  ["LATAM Airlines", "aerolinea-latam-lima-nueva-york", "Lima a Nueva York (JFK) Directo", "Estados Unidos", 590],
  ["LATAM Airlines", "aerolinea-latam-lima-los-angeles", "Lima a Los Ángeles (LAX) Directo", "Estados Unidos", 620],
  ["LATAM Airlines", "aerolinea-latam-lima-cancun", "Lima a Cancún Directo", "México", 480],
  ["LATAM Airlines", "aerolinea-latam-lima-punta-cana", "Lima a Punta Cana Directo", "República Dominicana", 520],
  ["LATAM Airlines", "aerolinea-latam-lima-buenos-aires", "Lima a Buenos Aires Directo", "Argentina", 395],
  ["LATAM Airlines", "aerolinea-latam-lima-santiago", "Lima a Santiago Directo", "Chile", 265],
  ["LATAM Airlines", "aerolinea-latam-lima-cusco", "Lima a Cusco Directo", "Perú", 95],
  ["KLM", "aerolinea-klm-lima-amsterdam", "Lima a Ámsterdam Directo", "Países Bajos", 960],
  ["Air France", "aerolinea-air-france-lima-paris", "Lima a París (CDG) Directo", "Francia", 980],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-panama", "Lima a Panamá (Hub de las Américas)", "Panamá", 385],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-punta-cana", "Lima a Punta Cana vía Panamá", "República Dominicana", 510],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-cancun", "Lima a Cancún vía Panamá", "México", 475],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-miami", "Lima a Miami vía Panamá", "Estados Unidos", 480],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-orlando", "Lima a Orlando vía Panamá", "Estados Unidos", 530],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-aruba", "Lima a Aruba vía Panamá", "Aruba", 545],
  ["Copa Airlines", "aerolinea-copa-airlines-lima-curazao", "Lima a Curazao vía Panamá", "Curazao", 550],
  ["Avianca", "aerolinea-avianca-lima-bogota", "Lima a Bogotá Directo", "Colombia", 315],
  ["Avianca", "aerolinea-avianca-lima-medellin", "Lima a Medellín", "Colombia", 345],
  ["Avianca", "aerolinea-avianca-lima-cartagena", "Lima a Cartagena", "Colombia", 365],
  ["Sky Airline", "aerolinea-sky-airline-lima-cancun", "Lima a Cancún Directo", "México", 450],
  ["Sky Airline", "aerolinea-sky-airline-lima-punta-cana", "Lima a Punta Cana Directo", "República Dominicana", 490],
  ["Sky Airline", "aerolinea-sky-airline-lima-cusco", "Lima a Cusco Directo", "Perú", 89],
];

const GRUPOS_Y_SEGUROS: [string, string, string, number, string][] = [
  ["Viaje de Promoción Escolar a Cusco y Machu Picchu", "viaje-promocion-escolar-cusco", "Cusco, Perú", 320, "Programa estudiantil todo incluido con vuelos, hotel, tren a Machu Picchu, alimentación completa, tour conductor y liberados para el salón."],
  ["Viaje de Promoción Escolar a Punta Cana All Inclusive", "viaje-promocion-escolar-punta-cana", "Punta Cana, Rep. Dominicana", 1050, "Promoción secundaria en Resort 5★ Todo Incluido 24h en Playa Bávaro, Isla Saona en catamarán, seguro médico y coordinador desde Lima."],
  ["Viaje de Promoción Escolar a Cancún & Parques", "viaje-promocion-escolar-cancun", "Cancún, México", 1040, "Paquete estudiantil en Cancún con Resort All Inclusive, Chichén Itzá o Xcaret, fiestas temáticas seguras y acompañamiento permanente."],
  ["Viaje de Promoción Escolar a Cartagena de Indias", "viaje-promocion-escolar-cartagena", "Cartagena, Colombia", 660, "Solo con DNI: vuelos desde Lima, hotel con piscina en Bocagrande, Islas del Rosario, Chiva Rumbera estudiantil y alimentación completa."],
  ["Viaje de Promoción Escolar a Isla de San Andrés", "viaje-promocion-escolar-san-andres", "San Andrés, Colombia", 750, "Solo con DNI: Resort en el Mar de los 7 Colores con comidas y snacks, tour Johnny Cay, Acuario, vuelta a la isla y seguro médico."],
  ["Viaje de Promoción Escolar a Royal Decameron Punta Sal", "viaje-promocion-escolar-decameron-punta-sal", "Tumbes, Perú", 440, "Todo Incluido en el norte peruano con vuelos a Tumbes/Talara, alimentación ilimitada, deportes náuticos y shows nocturnos."],
  ["Viaje de Promoción Escolar a Tarapoto y Laguna Azul", "viaje-promocion-escolar-tarapoto", "San Martín, Perú", 275, "El favorito de primaria y secundaria: vuelos Lima – Tarapoto, hotel con piscina, Laguna Azul en Sauce, Lamas, Ahuashiyacu y pensión completa."],
  ["Viaje de Promoción Escolar a Arequipa y Valle del Colca", "viaje-promocion-escolar-arequipa", "Arequipa, Perú", 265, "Vuelos a Arequipa, Monasterio de Santa Catalina, Cañón del Colca, baños termales, alimentación completa y guía permanente."],
  ["Viaje de Promoción Escolar a Iquitos y Río Amazonas", "viaje-promocion-escolar-iquitos", "Loreto, Perú", 320, "Vuelos a Iquitos, Lodge en la selva amazónica, rescate de manatíes, delfines rosados, comunidades nativas y pensión completa."],
  ["Viaje de Promoción Escolar a Huaraz y Callejón de Huaylas", "viaje-promocion-escolar-huaraz", "Áncash, Perú", 210, "Laguna de Llanganuco, Campo Santo de Yungay, Chavín de Huántar y Nevado Pastoruri con pensión completa y bus turístico privado."],
  ["Viaje de Quinceañeras a Europa Mágica & Disney París (15 Días)", "viaje-quinceaneras-europa-15-dias", "España, Francia e Italia", 2890, "Salidas grupales acompañadas desde Lima: Madrid, París, Disneyland París, Venecia, Florencia y Roma con pensión completa y cena de gala."],
  ["Viaje de Quinceañeras a Orlando (Disney + Universal) y Miami", "viaje-quinceaneras-disney-orlando-miami", "Florida, EE. UU.", 2190, "Grupo de quinceañeras con entradas a Magic Kingdom, Epcot, Hollywood Studios, Universal Studios, compras en Miami y coordinadoras 24/7."],
  ["Viaje de Quinceañeras en Crucero por el Caribe (Sin Visa)", "viaje-quinceaneras-crucero-caribe", "Panamá, Aruba y Curazao", 1690, "7 noches a bordo de crucero Todo Incluido zarpando de Panamá o Cartagena sin requerir visa estadounidense, con fiesta de 15 años a bordo."],
  ["Viaje de Quinceañeras a Cancún & Riviera Maya", "viaje-quinceaneras-cancun-riviera-maya", "Cancún, México", 1390, "Resort 5★ Todo Incluido, parque Xcaret, Isla Mujeres en catamarán, sesión de fotos y acompañamiento permanente desde Lima."],
  ["Viaje de Quinceañeras a Punta Cana Todo Incluido", "viaje-quinceaneras-punta-cana", "Punta Cana, Rep. Dominicana", 1350, "Sin visa para peruanas: Resort 5★ frente a Playa Bávaro, Isla Saona, Dolphin Explorer, sesión fotográfica y coordinadoras de viaje."],
  ["Agencia de Viajes Corporativos para Empresas en Lima", "viajes-corporativos-empresas-lima", "Nacional e Internacional", 120, "Facturación electrónica RUC 20614914239, tarifas corporativas en vuelos nacionales e internacionales, hoteles ejecutivos y atención 24/7."],
  ["Gestión de Pasajes Aéreos para Minería, Ingeniería y Construcción", "viajes-corporativos-mineria-energia-peru", "Rutas Nacionales Perú", 95, "Emisión y cambios flexibles para cuadrillas y ejecutivos hacia Arequipa, Cusco, Cajamarca, Trujillo, Piura, Talara e Iquitos."],
  ["Viajes de Incentivos y Convenciones para Empresas en el Caribe", "viajes-incentivos-empresas-caribe", "Punta Cana, Cancún y Cartagena", 890, "Premia a tu fuerza de ventas o directorio con programas Todo Incluido, salas de conferencias, cenas privadas y bloqueos aéreos grupales."],
  ["Viajes a Ferias Internacionales, Congresos y Ruedas de Negocio", "viajes-congresos-ferias-internacionales", "Europa, EE. UU., China y Latinoamérica", 690, "Boletos aéreos corporativos, hoteles junto al recinto ferial, traslados ejecutivos, seguro de negocios y factura deducible."],
  ["Boletos Aéreos Grupales para Delegaciones Deportivas y Culturales", "pasajes-aereos-grupos-delegaciones-peru", "Perú y el Mundo", 110, "Tarifas de grupo a partir de 10 pasajeros con nombres flexibles hasta días antes del vuelo y franquicia de equipaje especial."],
  ["Seguro de Viaje Schengen 30.000€ Oficial para España", "seguro-schengen-espana-30000-euros", "España y Unión Europea", 45, "Póliza oficial sin deducible con cobertura médica mínima de 30.000 euros, repatriación sanitaria y certificado inmediato para Madrid-Barajas."],
  ["Seguro Médico Internacional Schengen para Italia, Francia y Europa", "seguro-schengen-italia-francia", "Espacio Schengen (29 países)", 45, "Emisión inmediata en PDF verificable para migraciones en Roma, Milán, París, Ámsterdam y Frankfurt con asistencia en español 24/7."],
  ["Seguro de Viaje Médico para Estados Unidos y Canadá", "seguro-viaje-estados-unidos-cobertura-medica", "EE. UU. y Canadá", 55, "Alta cobertura médica de $60,000 a $150,000 USD para proteger tu viaje familiar o de negocios ante los altos costos médicos en Norteamérica."],
  ["Seguro de Asistencia al Viajero para el Caribe y Sudamérica", "seguro-viaje-caribe-todo-incluido", "Punta Cana, Cancún, Colombia y Brasil", 35, "Cobertura médica, pérdida de equipaje, demora de vuelos y asistencia odontológica de urgencia para tus vacaciones familiares."],
  ["Reserva Verificable de Vuelo y Hotel para Trámite de Visa o Ingreso", "reserva-vuelo-hotel-para-tramite-visa", "Consulados y Migraciones", 65, "Itinerario aéreo con código PNR real y voucher de reserva hotelera para sustentar tu entrevista consular o carpeta de viaje."],
];

const PAISES_REQUISITOS: [string, string, string, number, string][] = [
  ["España", "requisitos-viajar-a-espana-desde-peru", "Madrid / Barcelona", 890, "Pasaporte vigente (mínimo 3 meses tras retorno), boleto ida y vuelta dentro de 90 días, Seguro Schengen 30.000€ sin deducible, reserva de hotel pagada o Carta de Invitación policial y solvencia económica (bolsa de viaje)."],
  ["Italia", "requisitos-viajar-a-italia-desde-peru", "Roma / Milán", 950, "Pasaporte peruano vigente, pasaje de ida y vuelta no mayor a 90 días, Seguro Schengen de 30.000€, reserva de hotel confirmada o Dichiarazione di Ospitalità / Lettera di Invito y medios económicos."],
  ["Francia", "requisitos-viajar-a-francia-desde-peru", "París / Lyon", 960, "Pasaporte peruano vigente, boleto aéreo de retorno confirmado, Seguro Schengen 30.000€, reserva de alojamiento o Attestation d'accueil y sustento económico diario."],
  ["Alemania", "requisitos-viajar-a-alemania-desde-peru", "Frankfurt / Múnich / Berlín", 960, "Pasaporte vigente, boleto de regreso dentro de los 90 días Schengen, seguro médico europeo de 30.000€ y reserva de hotel o carta de compromiso formal."],
  ["Países Bajos (Holanda)", "requisitos-viajar-a-paises-bajos-desde-peru", "Ámsterdam", 950, "Pasaporte vigente, vuelo directo o con conexión ida y vuelta, Seguro Schengen 30.000€, reserva hotelera verificable y solvencia por día de estancia."],
  ["Suiza", "requisitos-viajar-a-suiza-desde-peru", "Zúrich / Ginebra", 990, "Como parte del Espacio Schengen, los peruanos ingresan sin visa hasta 90 días con pasaporte vigente, boleto redondo, Seguro Schengen y reserva de alojamiento."],
  ["Portugal", "requisitos-viajar-a-portugal-desde-peru", "Lisboa / Oporto", 940, "Pasaporte peruano vigente, boleto aéreo ida y vuelta, Seguro médico Schengen de 30.000€, reserva de hotel o termo de responsabilidade y bolsa de viaje."],
  ["Reino Unido (Inglaterra)", "requisitos-viajar-a-reino-unido-desde-peru", "Londres", 995, "Los peruanos no requieren visa consular tradicional por turismo corto: se tramita la Autorización Electrónica de Viaje (UK ETA) con pasaporte vigente, vuelo de retorno y hotel."],
  ["Turquía", "requisitos-viajar-a-turquia-desde-peru", "Estambul / Capadocia", 1090, "Los ciudadanos peruanos están EXENTOS DE VISA para viajar a Turquía por turismo hasta 90 días. Solo necesitas pasaporte con al menos 6 meses de vigencia, vuelo redondo y reserva de hotel/circuito."],
  ["Dubái (Emiratos Árabes)", "requisitos-viajar-a-dubai-desde-peru", "Dubái / Abu Dhabi", 1290, "Los peruanos ingresan a Emiratos Árabes Unidos por turismo con pasaporte vigente (mínimo 6 meses), boleto de ida y vuelta y reserva de hotel."],
  ["Japón", "requisitos-viajar-a-japon-desde-peru", "Tokio / Kioto", 1390, "Exención de visa para peruanos portadores de pasaporte electrónico/biométrico vigente en viajes de turismo de hasta 90 días, con pasaje redondo e itinerario."],
  ["Estados Unidos", "requisitos-viajar-a-estados-unidos-desde-peru", "Miami / Nueva York / Orlando", 490, "Requiere Pasaporte peruano vigente y Visa Americana B1/B2 válida. Te asesoramos con el formulario DS-160, pago de tasa consular, programación de cita y paquete de viaje."],
  ["Canadá", "requisitos-viajar-a-canada-desde-peru", "Toronto / Montreal / Vancouver", 670, "Requiere Pasaporte vigente y Visa de Residente Temporal (Visitor Visa) canadiense. Te asesoramos en el expediente consular e itinerario de vuelo y hotel."],
  ["México y Cancún", "requisitos-viajar-a-mexico-cancun-desde-peru", "Cancún / Ciudad de México", 480, "Los ciudadanos peruanos requieren Visa Mexicana vigente, O BIEN quedan exentos si poseen Visa vigente y múltiple de Estados Unidos, Canadá, Espacio Schengen, Reino Unido o Japón (o residencia permanente en Alianza del Pacífico/Schengen/EE.UU.)."],
  ["Punta Cana (Rep. Dominicana)", "requisitos-viajar-a-punta-cana-desde-peru", "Punta Cana / Santo Domingo", 510, "SIN VISA para peruanos: solo necesitas Pasaporte vigente (mínimo 6 meses), boleto de ida y vuelta, reserva de resort y completar el formulario electrónico gratuito E-Ticket dominicano."],
  ["Aruba", "requisitos-viajar-a-aruba-desde-peru", "Oranjestad, Aruba", 545, "SIN VISA para peruanos: Pasaporte vigente, boleto aéreo ida y vuelta, reserva de hotel, tarjeta ED Card online y Certificado Internacional de Vacuna contra la Fiebre Amarilla (aplicada mínimo 10 días antes)."],
  ["Curazao", "requisitos-viajar-a-curazao-desde-peru", "Willemstad, Curazao", 550, "SIN VISA para peruanos: Pasaporte con mínimo 6 meses de vigencia, Digital Immigration Card, vacuna contra la fiebre amarilla, reserva de hotel y boleto de retorno."],
  ["Jamaica", "requisitos-viajar-a-jamaica-desde-peru", "Montego Bay / Ocho Ríos", 590, "SIN VISA para peruanos por turismo: Pasaporte vigente (mínimo 6 meses), boleto ida y vuelta vía Panamá, reserva de resort Todo Incluido y formulario C5 online."],
  ["Cuba (La Habana y Varadero)", "requisitos-viajar-a-cuba-desde-peru", "La Habana / Varadero", 560, "Pasaporte vigente con mínimo 6 meses, boleto ida y vuelta, reserva de hotel, seguro médico de viaje y Tarjeta del Turista / Visa turística cubana (que gestionamos con tu paquete) + formulario D'Viajeros."],
  ["Panamá", "requisitos-viajar-a-panama-desde-peru", "Ciudad de Panamá / Playa Blanca", 385, "SIN VISA para peruanos: Pasaporte vigente (mínimo 6 meses), boleto aéreo de retorno, reserva de hotel y solvencia económica mínima ($500 USD o tarjeta de crédito)."],
  ["Costa Rica", "requisitos-viajar-a-costa-rica-desde-peru", "San José / Guanacaste", 460, "SIN VISA para peruanos hasta 90 días: Pasaporte con vigencia mínima de 6 meses, boleto de salida de Costa Rica, reserva de alojamiento y vacuna de fiebre amarilla si procedes de zonas endémicas."],
  ["Colombia (Cartagena, Medellín, San Andrés)", "requisitos-viajar-a-colombia-solo-dni", "Cartagena / Medellín / Bogotá / San Andrés", 320, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) gracias a los acuerdos de la Comunidad Andina. Solo debes completar el registro gratuito Check-Mig de Migraciones Colombia antes de tu vuelo."],
  ["Argentina (Buenos Aires y Bariloche)", "requisitos-viajar-a-argentina-solo-dni", "Buenos Aires / Bariloche / Iguazú", 395, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin necesidad de visa por turismo hasta 90 días, presentando tu boleto de ida y vuelta y reserva de alojamiento."],
  ["Brasil (Río de Janeiro, Iguazú y São Paulo)", "requisitos-viajar-a-brasil-solo-dni", "Río de Janeiro / Foz de Iguazú / São Paulo", 420, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin visa por turismo hasta 90 días, con tu pasaje de retorno confirmado y reserva de hotel."],
  ["Chile (Santiago y Viña del Mar)", "requisitos-viajar-a-chile-solo-dni", "Santiago de Chile", 265, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin necesidad de visa para estancias turísticas de hasta 90 días."],
  ["Uruguay (Montevideo y Punta del Este)", "requisitos-viajar-a-uruguay-solo-dni", "Montevideo / Punta del Este", 450, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin requerir visa por turismo hasta 90 días."],
  ["Bolivia (La Paz, Santa Cruz y Salar de Uyuni)", "requisitos-viajar-a-bolivia-solo-dni", "Santa Cruz / La Paz / Uyuni", 335, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin visa como ciudadano de la Comunidad Andina."],
  ["Ecuador (Quito, Guayaquil y Galápagos)", "requisitos-viajar-a-ecuador-solo-dni", "Quito / Guayaquil / Galápagos", 320, "VIAJA SOLO CON TU DNI PERUANO VIGENTE (o pasaporte) sin visa. Para Galápagos se adiciona la tarjeta de control de tránsito TCT en aeropuerto."],
  ["Viajar con Menores de Edad desde Perú", "requisitos-viajar-con-menores-de-edad-peru", "Rutas Nacionales e Internacionales", 89, "Para vuelos dentro del Perú basta que el menor viaje con al menos uno de sus padres (con DNI vigente). Para vuelos internacionales, si viaja con uno solo de los padres o con un tercero, es obligatorio el Permiso Notarial de Viaje al Exterior (o judicial/consular)."],
  ["Carta de Invitación Policial para España desde Perú", "requisitos-carta-de-invitacion-espana-peru", "Madrid, Barcelona y toda España", 890, "Si te hospedarás en casa de un familiar o amigo residente legal en España, el anfitrión debe tramitar la Carta de Invitación original en la Comisaría de Policía de su localidad y enviártela en físico a Lima antes de tu vuelo, acompañada de tu boleto ida y vuelta y Seguro Schengen 30.000€."],
];

function generarViajesEspecializados(): ViajeEspecializadoSEO[] {
  const lista: ViajeEspecializadoSEO[] = [];

  // A. 35 páginas de Primer Viaje / Carpeta Migratoria
  for (const [ciudad, slugCiudad, pais, precio] of CIUDADES_PRIMER_VIAJE) {
    lista.push({
      slug: `primer-viaje-a-${slugCiudad}`,
      categoria: "primer-viaje",
      badge: `Asesoría Primer Viaje · ${pais}`,
      titulo: `Pasaje y Carpeta de Primer Viaje a ${ciudad} (${pais}) desde Lima`,
      subtitulo: `Vuelo confirmado + Reserva de Hotel verificable + Seguro Schengen 30.000€ + Preparación de Documentos`,
      destinoOPais: `${ciudad}, ${pais}`,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Desde (Impuestos y carpeta incluidos)",
      metaTitle: `Primer Viaje a ${ciudad}, ${pais} Desde $${precio} USD (Carpeta Completa) | Cityland Travel`,
      metaDescription: `Viaja por primera vez de Lima a ${ciudad} (${pais}) con todo en regla Desde $${precio} USD (impuestos incluidos). Incluye boleto aéreo, reserva de hotel verificada, Seguro Schengen 30.000€ y asesoría paso a paso en Lima (RUC 20614914239).`,
      keywords: [
        `primer viaje a ${ciudad.toLowerCase()} desde peru`,
        `paquete migratorio a ${ciudad.toLowerCase()}`,
        `requisitos para viajar a ${ciudad.toLowerCase()} por primera vez`,
        `vuelos lima ${ciudad.toLowerCase()} carpeta migratoria`,
        "cityland travel",
      ],
      resumenEjecutivo: `Si es tu primer viaje desde Perú hacia ${ciudad} (${pais}), en Cityland Travel preparamos tu expediente completo de viaje para que pases el control migratorio europeo con total tranquilidad y respaldo documental verificable.`,
      incluye: [
        `Boleto aéreo Lima – ${ciudad} con código PNR verificable e impuestos incluidos`,
        `Reserva de alojamiento verificada en ${ciudad} o validación de Carta de Invitación`,
        "Póliza oficial de Seguro Médico Schengen por 30.000€ sin deducible",
        "Equipaje de mano 10 kg + opción de maleta de 23 kg en bodega",
        "Asesoría personalizada sobre bolsa de viaje y entrevista en aeropuerto",
      ],
      beneficiosClave: [
        { titulo: "Documentación 100% Verificable", desc: `Entregamos tu carpeta impresa y digital con reservas activas en sistema para tu llegada a ${ciudad}.` },
        { titulo: "Seguro Schengen Oficial 30.000€", desc: "Cumple con la normativa europea de asistencia médica sin franquicia ni copagos." },
        { titulo: "Oficina Física en Los Olivos, Lima", desc: "Atención presencial en Av. Antúnez de Mayolo 814 (RUC 20614914239) y por WhatsApp Business." },
      ],
      faqs: [
        {
          q: `¿Qué documentos incluye el paquete de primer viaje a ${ciudad}?`,
          a: `Incluye tu boleto aéreo confirmado hacia ${ciudad} (${pais}), póliza de Seguro Schengen de 30.000€, reserva hotelera verificable (si no cuentas con carta de invitación) e itinerario turístico detallado.`,
        },
        {
          q: `¿El precio Desde $${precio} USD incluye impuestos?`,
          a: `Sí. Todas nuestras tarifas están expresadas en dólares americanos (USD) con impuestos aeroportuarios y cargos obligatorios incluidos. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
        },
      ],
      waMensaje: `Hola, encontré Cityland Travel en Google. Quiero cotizar mi Primer Viaje a ${ciudad} (${pais}) Desde $${precio} USD con carpeta completa. ¿Me pueden asesorar?`,
    });
  }

  // B. 35 páginas de Vuelos con 2 Maletas de 23 kg
  for (const [rutaNombre, slugRuta, pais, precio, aerolineas] of RUTAS_DOS_MALETAS) {
    lista.push({
      slug: `vuelos-con-2-maletas-${slugRuta}`,
      categoria: "dos-maletas",
      badge: `Franquicia 2 Maletas de 23 kg · ${aerolineas}`,
      titulo: `Vuelos de ${rutaNombre} con 2 Maletas de 23 kg en Bodega`,
      subtitulo: `Lleva hasta 46 kg en bodega + 10 kg en cabina con tarifas especiales de agencia en dólares`,
      destinoOPais: rutaNombre,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Desde (Impuestos y equipaje incluidos)",
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
        { titulo: "Ideal para Mudanzas, Compras o Familia", desc: `Lleva regalos, encomiendas o equipaje de larga estadía en tu vuelo ${rutaNombre}.` },
        { titulo: "Reserva Verificable al Instante", desc: "Verifica tus 2 piezas de 23 kg directamente con tu código PNR en la web de la aerolínea." },
      ],
      faqs: [
        {
          q: `¿Las 2 maletas de 23 kg quedan registradas en mi boleto de ${rutaNombre}?`,
          a: `Sí. Tu boleto electrónico E-Ticket y código de reserva PNR reflejan expresamente la franquicia de 2 piezas de 23 kg en bodega más tu equipaje de mano de 10 kg.`,
        },
        {
          q: `¿Qué precio tiene el vuelo de ${rutaNombre} con equipaje completo?`,
          a: `Contamos con tarifas referenciales Desde $${precio} USD con impuestos incluidos. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
        },
      ],
      waMensaje: `Hola, encontré Cityland Travel en Google. Quiero cotizar el vuelo de ${rutaNombre} con 2 maletas de 23 kg (Desde $${precio} USD). ¿Me ayudan con fechas?`,
    });
  }

  // C. 35 páginas de Rutas por Aerolínea
  for (const [aerolinea, slugAero, rutaNombre, pais, precio] of RUTAS_AEROLINEAS) {
    lista.push({
      slug: slugAero,
      categoria: "aerolinea",
      badge: `Emisión Oficial · ${aerolinea}`,
      titulo: `Vuelos ${aerolinea}: ${rutaNombre} — Tarifas y Equipaje`,
      subtitulo: `Cotiza boletos confirmados en ${aerolinea} con código PNR inmediato, maleta de 23 kg y atención en Lima`,
      destinoOPais: `${rutaNombre} (${aerolinea})`,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Desde (Impuestos incluidos)",
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
        { titulo: "Asistencia Postventa Real", desc: "No lidies con call centers robotizados: tu asesor de Cityland Travel te atiende por WhatsApp." },
      ],
      faqs: [
        {
          q: `¿Qué equipaje permite ${aerolinea} en la ruta ${rutaNombre}?`,
          a: `Según la familia tarifaria elegida en ${aerolinea}, puedes viajar con equipaje de cabina de 10 kg más 1 o 2 maletas de 23 kg en bodega. Te cotizamos la opción exacta según tu necesidad.`,
        },
        {
          q: `¿El precio Desde $${precio} USD incluye impuestos?`,
          a: `Sí, el precio referencial en dólares incluye todos los impuestos aeroportuarios y tasas obligatorias. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
        },
      ],
      waMensaje: `Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio en ${aerolinea} para la ruta ${rutaNombre} (Desde $${precio} USD).`,
    });
  }

  // D. 25 páginas de Grupos, Promociones Escolares, Quinceañeras, Corporativos y Seguros
  for (const [titulo, slugGrupo, destino, precio, desc] of GRUPOS_Y_SEGUROS) {
    lista.push({
      slug: slugGrupo,
      categoria: "grupos-seguros",
      badge: `Servicio Especializado · ${destino}`,
      titulo,
      subtitulo: desc,
      destinoOPais: destino,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Desde (Tarifa referencial USD)",
      metaTitle: `${titulo} Desde $${precio} USD | Cityland Travel Perú`,
      metaDescription: `${desc} Cotiza Desde $${precio} USD con impuestos incluidos en Cityland Travel E.I.R.L. (RUC 20614914239), oficina en Los Olivos, Lima.`,
      keywords: [
        slugGrupo.replace(/-/g, " "),
        `${titulo.toLowerCase()} lima`,
        "agencia de viajes cityland travel",
      ],
      resumenEjecutivo: `${desc} En Cityland Travel E.I.R.L. (RUC 20614914239) contamos con más de 10 años de experiencia organizando viajes individuales, grupales, estudiantiles y corporativos con respaldo legal y atención personalizada.`,
      incluye: [
        "Atención personalizada por un asesor asignado en WhatsApp Business",
        "Contrato formal y comprobantes electrónicos (Boleta o Factura RUC 20614914239)",
        "Tarifas expresadas 100% en dólares americanos (USD) con impuestos incluidos",
        "Facilidades de pago fraccionado reservando con inicial desde el 50%",
        "Asistencia permanente 24/7 antes y durante todo el servicio",
      ],
      beneficiosClave: [
        { titulo: "Agencia Formal Registrada", desc: "Cityland Travel E.I.R.L. (RUC 20614914239) con oficina física en Av. Antúnez de Mayolo 814, Los Olivos." },
        { titulo: "Bloqueos y Cupos Garantizados", desc: "Aseguramos espacios aéreos y hoteleros con códigos de reserva oficiales." },
        { titulo: "Cero Costos Ocultos", desc: "Cotizaciones claras en dólares con impuestos incluidos desde el primer momento." },
      ],
      faqs: [
        {
          q: `¿Cómo solicito una cotización formal para ${titulo}?`,
          a: `Haz clic en cualquiera de los botones de WhatsApp de esta página y nuestro sistema te conectará al instante con un asesor especializado para enviarte la propuesta detallada en PDF.`,
        },
        {
          q: `¿El monto Desde $${precio} USD incluye impuestos?`,
          a: `Sí, nuestras tarifas referenciales en dólares incluyen impuestos y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
        },
      ],
      waMensaje: `Hola, encontré Cityland Travel en Google. Quiero solicitar información y cotización sobre: ${titulo} (Desde $${precio} USD). ¿Me pueden ayudar?`,
    });
  }

  // E. 30 páginas de Requisitos Migratorios y Documentación por País
  for (const [pais, slugReq, ciudadesRef, precio, detalleReq] of PAISES_REQUISITOS) {
    lista.push({
      slug: slugReq,
      categoria: "requisitos",
      badge: `Requisitos actualizados 2026 · ${pais}`,
      titulo: `Requisitos para Viajar a ${pais} desde Perú (Guía + Vuelos y Paquetes)`,
      subtitulo: `Todo lo que exige migraciones en ${ciudadesRef} para ciudadanos peruanos y cotización de viaje Desde $${precio} USD`,
      destinoOPais: pais,
      precioDesdeUSD: precio,
      etiquetaPrecio: "Vuelos / Paquetes Desde",
      metaTitle: `Requisitos para Viajar a ${pais} desde Perú 2026 + Vuelos Desde $${precio} USD | Cityland Travel`,
      metaDescription: `Conoce los requisitos oficiales para viajar a ${pais} (${ciudadesRef}) siendo peruano: documentos, pasaporte, seguro y solvencia. Cotiza tu vuelo o paquete Desde $${precio} USD con impuestos incluidos en Cityland Travel.`,
      keywords: [
        `requisitos para viajar a ${pais.toLowerCase()} desde peru`,
        `que necesito para viajar a ${pais.toLowerCase()} siendo peruano`,
        `documentos para entrar a ${pais.toLowerCase()}`,
        `vuelos a ${pais.toLowerCase()} desde lima`,
      ],
      resumenEjecutivo: detalleReq,
      incluye: [
        `Revisión completa de tus documentos para ingresar a ${pais} (${ciudadesRef})`,
        `Boleto aéreo de ida y vuelta hacia ${ciudadesRef} con código PNR verificable`,
        "Reserva de hotel confirmada o validación de alojamiento familiar",
        "Seguro médico internacional obligatorio según normativa del país de destino",
        "Llenado de formularios electrónicos migratorios y check-in previo al vuelo",
      ],
      beneficiosClave: [
        { titulo: "Viaja con Todo en Regla", desc: `Verificamos cada requisito exigido por las autoridades de ${pais} antes de tu embarque en Lima.` },
        { titulo: "Todo en un Solo Lugar", desc: "Emitimos tu pasaje aéreo, hotel, seguro médico y carpeta documental lista para presentar." },
        { titulo: "Atención Inmediata", desc: "Resuelve tus dudas por WhatsApp con nuestros 12 asesores o visítanos en Los Olivos." },
      ],
      faqs: [
        {
          q: `¿Qué documentos me pedirán al viajar a ${pais} desde Perú?`,
          a: detalleReq,
        },
        {
          q: `¿Cuánto cuesta volar o viajar con paquete a ${pais} desde Lima?`,
          a: `Contamos con tarifas referenciales hacia ${ciudadesRef} Desde $${precio} USD con impuestos incluidos. Tarifa sujeta a disponibilidad y condiciones aplicables.`,
        },
      ],
      waMensaje: `Hola, encontré Cityland Travel en Google leyendo los requisitos para viajar a ${pais}. Quiero asesoría y cotizar mi viaje Desde $${precio} USD. ¿Me pueden ayudar?`,
    });
  }

  return lista;
}

export const VIAJES_ESPECIALIZADOS_SEO: ViajeEspecializadoSEO[] = generarViajesEspecializados();

export function buscarViajeEspecializado(slug: string): ViajeEspecializadoSEO | undefined {
  return VIAJES_ESPECIALIZADOS_SEO.find((v) => v.slug === slug);
}
