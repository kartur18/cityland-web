export interface AgenciaLocalSEO {
  slug: string;
  zona: string;
  region: string;
  tipoZona: "lima-callao" | "provincia";
  tiempoAtencion: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  waMensaje: string;
}

const DISTRITOS_LIMA_CALLAO: [string, string, string][] = [
  ["San Isidro", "san-isidro", "Atención digital inmediata y entrega de documentos corporativos o visítanos en nuestra sede de Lima"],
  ["San Borja", "san-borja", "Atención personalizada por WhatsApp Business, videollamada o en nuestra oficina física en Lima"],
  ["La Molina", "la-molina", "Cotización inmediata de vuelos a Europa, EE. UU. y Caribe para familias o empresas de La Molina"],
  ["Jesús María", "jesus-maria", "Conexión rápida con nuestra agencia física en Lima para emisión inmediata de pasajes y paquetes"],
  ["Lince", "lince", "Asesoría completa de vuelos internacionales, paquetes turísticos y seguros Schengen para vecinos de Lince"],
  ["Magdalena del Mar", "magdalena-del-mar", "Emisión inmediata de boletos aéreos y paquetes Todo Incluido con respaldo RUC 20614914239"],
  ["Pueblo Libre", "pueblo-libre", "A pocos minutos de nuestra sede en Lima: paquetes a Europa, Caribe, Cusco y visas"],
  ["Breña", "brena", "Acceso directo por Av. Brasil / Panamericana Norte hacia nuestra oficina o atención 100% digital"],
  ["Chorrillos", "chorrillos", "Cotiza desde Chorrillos tus vuelos a Madrid, Miami, Cancún, Punta Cana y Cusco en dólares"],
  ["Barranco", "barranco", "Paquetes a medida, circuitos por Europa, Turquía, Dubái y Caribe para viajeros de Barranco"],
  ["Ate Vitarte", "ate-vitarte", "Vuelos a España, Italia, EE. UU. y paquetes familiares con reserva del 50% para vecinos de Ate"],
  ["Santa Anita", "santa-anita", "Agencia de viajes formal con RUC 20614914239 atendiendo a familias y comercios de Santa Anita"],
  ["San Juan de Lurigancho", "san-juan-de-lurigancho", "Especialistas en primer viaje a España e Italia, carpeta migratoria y paquetes al Caribe para SJL"],
  ["San Juan de Miraflores", "san-juan-de-miraflores", "Pasajes aéreos internacionales, Seguro Schengen 30.000€ y paquetes turísticos para Lima Sur"],
  ["Villa María del Triunfo", "villa-maria-del-triunfo", "Vuelos económicos a Madrid, Barcelona, Milán, Buenos Aires y Santiago con maleta de 23 kg"],
  ["Villa El Salvador", "villa-el-salvador", "Atención para familias, empresas del Parque Industrial y promociones escolares de Villa El Salvador"],
  ["Puente Piedra", "puente-piedra", "A solo 15 minutos de nuestra oficina en Av. Antúnez de Mayolo 814, Los Olivos"],
  ["Carabayllo", "carabayllo", "Tu agencia de viajes de confianza en Lima Norte con oficina física cerca de Carabayllo"],
  ["Rímac", "rimac", "Muy cerca de nuestra sede en Los Olivos: emite tus pasajes a Europa, Caribe y Perú con total seguridad"],
  ["El Agustino", "el-agustino", "Boletos aéreos verificables, carpeta migratoria y paquetes turísticos en cuotas sin intereses"],
  ["La Victoria", "la-victoria", "Viajes de negocios, ferias internacionales, vuelos a Panamá, Miami, Europa y Caribe para empresarios"],
  ["San Luis", "san-luis", "Emisión corporativa y familiar de pasajes aéreos nacionales e internacionales en dólares"],
  ["Surquillo", "surquillo", "Cotiza vuelos y paquetes Todo Incluido a Punta Cana, Cancún, Cartagena y Europa por WhatsApp"],
  ["Chaclacayo", "chaclacayo", "Atención por WhatsApp Business y emisión inmediata de boletos con código PNR verificable"],
  ["Chosica (Lurigancho)", "chosica", "Paquetes turísticos, viajes de promoción escolar y vuelos a Europa o el Caribe para Chosica"],
  ["Cieneguilla", "cieneguilla", "Viajes a medida, cruceros, lunas de miel y circuitos internacionales con asesoría personalizada"],
  ["Pachacámac", "pachacamac", "Reserva tus vacaciones familiares al Caribe, Cusco o Europa con inicial del 50%"],
  ["Lurín", "lurin", "Atención a familias y empresas industriales de Lurín con facturación electrónica RUC 20614914239"],
  ["Ancón", "ancon", "Muy cerca en Lima Norte: visítanos en Av. Antúnez de Mayolo 814, Los Olivos o cotiza por WhatsApp"],
  ["Santa Rosa", "santa-rosa-lima", "Agencia de viajes física en Lima Norte para tus vuelos nacionales e internacionales"],
  ["Ventanilla", "ventanilla", "A minutos de nuestra sede en Av. Antúnez de Mayolo 814 (Los Olivos): vuelos a España, Italia y Caribe"],
  ["Mi Perú", "mi-peru-callao", "Atención presencial en Lima Norte y por WhatsApp para pasajes a Madrid, Roma, Miami y Cusco"],
  ["Callao (Cercado)", "callao", "A pocos minutos del Aeropuerto Jorge Chávez y de nuestra oficina en Av. Antúnez de Mayolo 814"],
  ["Bellavista (Callao)", "bellavista-callao", "Vuelos internacionales, carpeta migratoria, Seguro Schengen y paquetes desde el Callao"],
  ["La Perla (Callao)", "la-perla-callao", "Cotiza tu próximo viaje a Europa, Caribe o Sudamérica con agencia formal registrada"],
  ["La Punta (Callao)", "la-punta-callao", "Cruceros, paquetes internacionales de lujo y boletos aéreos con atención personalizada"],
  ["Carmen de la Legua", "carmen-de-la-legua", "A 12 minutos de nuestra oficina en Los Olivos: compra tus pasajes en persona o por WhatsApp"],
  ["Cercado de Lima", "cercado-de-lima", "Emisión de pasajes aéreos, trámite de visas, Seguro Schengen y paquetes para Lima Centro"],
  ["Lima Este", "lima-este", "Cobertura integral para La Molina, Ate, Santa Anita, San Luis y Chosica por WhatsApp +51 944 103 890"],
  ["Lima Sur", "lima-sur", "Cobertura para Chorrillos, Surco, Barranco, SJM, VMT, VES y Lurín con precios en dólares"],
  ["Lima Moderna", "lima-moderna", "Paquetes vacacionales, corporativos, lunas de miel y quinceañeras para toda Lima Moderna"],
  ["Aeropuerto Jorge Chávez", "aeropuerto-jorge-chavez-lima", "Ubicados estratégicamente cerca del Aeropuerto Internacional Jorge Chávez en Lima Norte"],
];

const CIUDADES_PERU_AGENCIA: [string, string, string][] = [
  ["Arequipa", "arequipa", "Arequipa"],
  ["Trujillo", "trujillo", "La Libertad"],
  ["Chiclayo", "chiclayo", "Lambayeque"],
  ["Piura", "piura", "Piura"],
  ["Cusco", "cusco", "Cusco"],
  ["Huancayo", "huancayo", "Junín"],
  ["Ica", "ica", "Ica"],
  ["Tacna", "tacna", "Tacna"],
  ["Chimbote", "chimbote", "Áncash"],
  ["Cajamarca", "cajamarca", "Cajamarca"],
  ["Pucallpa", "pucallpa", "Ucayali"],
  ["Iquitos", "iquitos", "Loreto"],
  ["Tarapoto", "tarapoto", "San Martín"],
  ["Juliaca", "juliaca", "Puno"],
  ["Puno", "puno", "Puno"],
  ["Ayacucho", "ayacucho", "Ayacucho"],
  ["Huánuco", "huanuco", "Huánuco"],
  ["Sullana", "sullana", "Piura"],
  ["Talara", "talara", "Piura"],
  ["Tumbes", "tumbes", "Tumbes"],
  ["Chincha Alta", "chincha", "Ica"],
  ["Pisco", "pisco", "Ica"],
  ["Huaraz", "huaraz", "Áncash"],
  ["Abancay", "abancay", "Apurímac"],
  ["Moquegua", "moquegua", "Moquegua"],
  ["Ilo", "ilo", "Moquegua"],
  ["Puerto Maldonado", "puerto-maldonado", "Madre de Dios"],
  ["Moyobamba", "moyobamba", "San Martín"],
  ["Jaén", "jaen", "Cajamarca"],
  ["Barranca", "barranca", "Lima Provincias"],
  ["Huacho", "huacho", "Lima Provincias"],
  ["Cañete (San Vicente)", "canete", "Lima Provincias"],
  ["Huaral", "huaral", "Lima Provincias"],
  ["Chancay", "chancay", "Lima Provincias"],
  ["Tingo María", "tingo-maria", "Huánuco"],
  ["Satipo", "satipo", "Junín"],
  ["La Merced (Chanchamayo)", "chanchamayo", "Junín"],
  ["Oxapampa", "oxapampa", "Pasco"],
  ["Andahuaylas", "andahuaylas", "Apurímac"],
  ["Quillabamba", "quillabamba", "Cusco"],
  ["Sicuani", "sicuani", "Cusco"],
  ["Mollendo", "mollendo", "Arequipa"],
  ["Camaná", "camana", "Arequipa"],
  ["Nazca", "nazca", "Ica"],
  ["Pacasmayo", "pacasmayo", "La Libertad"],
  ["Chepén", "chepen", "La Libertad"],
  ["Lambayeque", "lambayeque", "Lambayeque"],
  ["Ferreñafe", "ferrenafe", "Lambayeque"],
];

function generarAgenciasLocales(): AgenciaLocalSEO[] {
  const lista: AgenciaLocalSEO[] = [];

  for (const [zona, slug, desc] of DISTRITOS_LIMA_CALLAO) {
    lista.push({
      slug,
      zona,
      region: "Lima y Callao",
      tipoZona: "lima-callao",
      tiempoAtencion: desc,
      metaTitle: `Agencia de Viajes en ${zona} — Vuelos a Europa, Caribe y Perú | Cityland Travel`,
      metaDescription: `¿Buscas una agencia de viajes confiable desde ${zona}? En Cityland Travel (RUC 20614914239) emitimos vuelos a España (Desde $1,090 USD), Caribe Todo Incluido, Cusco y Visas con impuestos incluidos. ${desc}.`,
      keywords: [
        `agencia de viajes en ${zona.toLowerCase()}`,
        `agencias de viajes ${zona.toLowerCase()} lima`,
        `comprar pasajes aereos en ${zona.toLowerCase()}`,
        `paquetes turisticos ${zona.toLowerCase()}`,
        "cityland travel",
      ],
      waMensaje: `Hola, encontré Cityland Travel en Google buscando agencia de viajes en ${zona}. Quiero cotizar un vuelo / paquete turístico. ¿Me pueden ayudar?`,
    });
  }

  for (const [ciudad, slug, departamento] of CIUDADES_PERU_AGENCIA) {
    lista.push({
      slug,
      zona: ciudad,
      region: departamento,
      tipoZona: "provincia",
      tiempoAtencion: `Emisión remota inmediata para viajeros de ${ciudad} (${departamento}) con boletos conectados vía Lima y envío digital de documentos + atención presencial cuando pases por Lima`,
      metaTitle: `Agencia de Viajes para ${ciudad} (${departamento}) — Vuelos a Europa, EE. UU. y Caribe | Cityland Travel`,
      metaDescription: `Viaja desde ${ciudad} (${departamento}) a Madrid, Barcelona, Roma, Miami, Cancún y Punta Cana con boleto único conectado vía Lima. Agencia formal Cityland Travel E.I.R.L. (RUC 20614914239), precios en dólares con impuestos incluidos.`,
      keywords: [
        `agencia de viajes en ${ciudad.toLowerCase()}`,
        `vuelos desde ${ciudad.toLowerCase()} a espana`,
        `paquetes turisticos desde ${ciudad.toLowerCase()}`,
        `pasajes aereos ${ciudad.toLowerCase()}`,
        "cityland travel",
      ],
      waMensaje: `Hola, les escribo desde ${ciudad} (${departamento}). Encontré Cityland Travel en Google y quiero cotizar un viaje. ¿Me pueden asesorar?`,
    });
  }

  return lista;
}

export const AGENCIAS_LOCALES_SEO: AgenciaLocalSEO[] = generarAgenciasLocales();

export function buscarAgenciaLocal(slug: string): AgenciaLocalSEO | undefined {
  return AGENCIAS_LOCALES_SEO.find((a) => a.slug === slug);
}
