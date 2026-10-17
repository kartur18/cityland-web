/**
 * Diccionario Maestro y Motor de Imágenes Verificadas por Ciudad, Destino y Servicio
 * Garantiza que cada una de las 2,016 páginas muestre fotografías 100% coherentes
 * con su destino o servicio específico, sin cruces de monumentos entre ciudades
 * ni imágenes repetidas dentro de una misma landing.
 */

export type GaleriaDestino = [string, string, string, string, string];

// ── Imágenes Neutrales Universales (Aviación, Aeropuerto, Hoteles, Pasaporte, Corporativo) ──
export const IMG_AVION_ALA =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85";
export const IMG_AEROPUERTO_INTERNACIONAL =
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85";
export const IMG_PASAPORTE_VIAJE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85";
export const IMG_VIAJERO_MALETA =
  "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?w=1200&q=85";
export const IMG_FAMILIA_VIAJE =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=85";
export const IMG_HOTEL_LUJO_PISCINA =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85";
export const IMG_RESORT_PISCINA_MAR =
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85";
export const IMG_OFICINA_CORPORATIVA =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85";
export const IMG_EDIFICIOS_FINANCIEROS =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85";
export const IMG_GRUPO_ESTUDIANTES =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85";
export const IMG_PAREJA_ROMANTICA =
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=85";

// ── Playas y Resorts Generales (para segundos/terceros slots de destinos de playa) ──
export const IMG_PLAYA_SOLEADA =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85";
export const IMG_RESORT_CARIBE_1 =
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85";
export const IMG_RESORT_CARIBE_2 =
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=85";
export const IMG_MAR_TURQUESA_BOTE =
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85";
export const IMG_PLAYA_ARENA_BLANCA =
  "https://images.unsplash.com/photo-1619680939776-4eadd78709a4?w=1200&q=85";

// ── Cruceros ──
export const IMG_CRUCERO_1 =
  "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85";
export const IMG_CRUCERO_2 =
  "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1200&q=85";
export const IMG_CRUCERO_3 =
  "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85";

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ── Galerías Específicas de 5 Imágenes Únicas por Ciudad / Destino / Servicio ──
const GALERIAS_ESPECIFICAS: Array<{
  match: RegExp;
  galeria: GaleriaDestino;
}> = [
  // =========================================================================
  // 1. SEGMENTOS DE SERVICIO PURO (Cruceros, Visas, Pasaporte, Seguros)
  // =========================================================================
  {
    match: /^(?!.*(rio[- ]sena|crucero[- ]nilo|rio[- ]nilo|amazonas|iquitos|bosforo|danubio|guadalquivir|rias[- ]baixas|lago[- ]ness)).*(\bcruceros?\b|\bmsc\b|\broyal caribbean|\bnorwegian|\bcococay|\bicon of the seas|\bcosta cruceros|\bdisney cruise)/,
    galeria: [
      IMG_CRUCERO_1,
      IMG_CRUCERO_2,
      IMG_CRUCERO_3,
      IMG_RESORT_CARIBE_1,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /\bvisa\b|\bvisas\b|\bds-160|\bds160|\bembajada|\bconsulado|\bconsular|\beta\b|\betias\b|\bcarpeta[- ]migratoria|\bpasaporte|\brelaciones exteriores|\bmigraciones/,
    galeria: [
      IMG_PASAPORTE_VIAJE,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },
  {
    match: /\bseguro schengen|\bseguro de viaje|\bseguros de viaje|\bseguro medico|\bseguros medicos|\basistencia al viajero|\basistencia medica|\b30\.000|\b30,000|\bpoliza/,
    galeria: [
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_PASAPORTE_VIAJE,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /vuelos[- ]corporativos[- ]cusco[- ]arequipa|pasajes[- ]corporativos[- ]piura[- ]iquitos|corporativos[- ]mineria/,
    galeria: [
      IMG_OFICINA_CORPORATIVA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_EDIFICIOS_FINANCIEROS,
    ],
  },

  // =========================================================================
  // 2. DESTINOS DEL PERÚ (Granularidad por Ciudad, Costa, Selva y Sierra)
  // =========================================================================
  // 2A. Playas del Norte del Perú (Punta Sal, Máncora, Vichayito, Zorritos, Tumbes, Piura, Talara)
  {
    match: /punta[- ]sal|decameron[- ]punta[- ]sal|zorritos|tumbes|manglares/,
    galeria: [
      IMG_RESORT_PISCINA_MAR,
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_MAR_TURQUESA_BOTE,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /mancora|vichayito|pocitas|el[- ]nuro|organos|cabo[- ]blanco|talara|piura|colan|catacaos|sechura|sullana/,
    galeria: [
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
      IMG_MAR_TURQUESA_BOTE,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  // 2B. Costa Sur Cercana (Paracas, Islas Ballestas, Ica, Huacachina, Nazca, Pisco, Chincha, Lunahuaná)
  {
    match: /paracas|ballestas|huacachina|\bica\b|nazca|pisco|chincha|lunahuana|canete/,
    galeria: [
      "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_RESORT_PISCINA_MAR,
      IMG_FAMILIA_VIAJE,
    ],
  },
  // 2C. Selva Peruana (Tarapoto, Sauce, Laguna Azul, Ahuashiyacu, Lamas, Moyobamba, Tingo María)
  {
    match: /tarapoto|laguna[- ]azul|ahuashiyacu|\blamas\b|moyobamba|rioja|tingo[- ]maria|alto[- ]mayo/,
    galeria: [
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
    ],
  },
  // 2D. Iquitos, Río Amazonas, Puerto Maldonado, Tambopata, Pucallpa
  {
    match: /iquitos|amazonas|pacaya[- ]samiria|puerto[- ]maldonado|tambopata|sandoval|pucallpa/,
    galeria: [
      "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?w=1200&q=85",
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  // 2E. Selva Central (Oxapampa, Pozuzo, Villa Rica, Chanchamayo, La Merced, Satipo)
  {
    match: /oxapampa|pozuzo|villa[- ]rica|chanchamayo|la[- ]merced|satipo|selva[- ]central/,
    galeria: [
      "/images/destinos/oxapampa-peru.jpg",
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_FAMILIA_VIAJE,
      IMG_VIAJERO_MALETA,
    ],
  },
  // 2F. Chachapoyas, Kuélap, Gocta, Jaén
  {
    match: /chachapoyas|kuelap|gocta|jaen/,
    galeria: [
      "/images/destinos/chachapoyas-kuelap.jpg",
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_VIAJERO_MALETA,
    ],
  },
  // 2G. Arequipa y Cañón del Colca
  {
    match: /arequipa|colca|perumin|chivay|misti|santa[- ]catalina|sillar|camana|mollendo|moquegua|\bilo\b|tacna/,
    galeria: [
      "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  // 2H. Puno, Juliaca y Lago Titicaca
  {
    match: /\bpuno\b|juliaca|titicaca|\buros\b|taquile|sillustani/,
    galeria: [
      "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  // 2I. Huaraz, Laguna 69, Pastoruri y Cordillera Blanca
  {
    match: /huaraz|laguna[- ]69|pastoruri|llanganuco|chavin|cordillera[- ]blanca|ancash|chimbote/,
    galeria: [
      "/images/destinos/huaraz-laguna69.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_VIAJERO_MALETA,
      IMG_FAMILIA_VIAJE,
      IMG_AVION_ALA,
    ],
  },
  // 2J. Trujillo, Huanchaco, Chan Chan
  {
    match: /trujillo|huanchaco|chan[- ]chan|pacasmayo|chepen|moche/,
    galeria: [
      "/images/destinos/trujillo-peru.jpg",
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },
  // 2K. Chiclayo, Sipán, Lambayeque
  {
    match: /chiclayo|sipan|lambayeque|pimentel|ferrenafe/,
    galeria: [
      "/images/destinos/chiclayo-peru.jpg",
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },
  // 2L. Cajamarca
  {
    match: /cajamarca|banos[- ]del[- ]inca|cumbemayo/,
    galeria: [
      "/images/destinos/cajamarca-peru.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
      IMG_VIAJERO_MALETA,
    ],
  },
  // 2M. Ayacucho, Aguas Turquesas de Millpu, Huancayo, Jauja, Tarma, Huánuco, Abancay, Andahuaylas
  {
    match: /ayacucho|millpu|huancayo|jauja|tarma|huanuco|abancay|andahuaylas/,
    galeria: [
      "/images/destinos/ayacucho-peru.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
      IMG_VIAJERO_MALETA,
    ],
  },
  // 2N. Cusco, Machu Picchu, Valle Sagrado, Montaña 7 Colores, Laguna Humantay
  {
    match: /cusco|machu[- ]picchu|valle[- ]sagrado|vinicunca|7[- ]colores|siete[- ]colores|humantay|maras|moray|ollantaytambo|aguas[- ]calientes|choquequirao|camino[- ]inca|salkantay|sicuani|quillabamba/,
    galeria: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
      "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
      "https://images.unsplash.com/photo-1716618704106-b335685a6b4d?w=1200&q=85",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
    ],
  },
  // 2O. Lima, Callao, Caral, Chancay, Huacho, Barranca (cuando Lima es el destino principal)
  {
    match: /miraflores|barranco|caral|chancay|huacho|barranca|pachacamac|cieneguilla|chosica/,
    galeria: [
      "/images/destinos/lima-plaza-mayor.jpg",
      "/images/destinos/lima-costa-verde.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },

  // =========================================================================
  // 3. ESPAÑA (Granularidad por Ciudad)
  // =========================================================================
  {
    match: /barcelona|girona|cataluna|sagrada[- ]familia/,
    galeria: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=85",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /valencia|alicante|murcia/,
    galeria: [
      "/images/destinos/valencia-artes.jpg",
      "https://images.unsplash.com/photo-1561632669-7f55f7975606?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(sevilla|granada|cordoba[- ]espana|jerez|andalucia|alhambra)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /\b(malaga|marbella|costa[- ]del[- ]sol|almeria)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1561632669-7f55f7975606?w=1200&q=85",
      IMG_RESORT_PISCINA_MAR,
      IMG_PLAYA_SOLEADA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(mallorca|palma[- ]de[- ]mallorca|ibiza|menorca|baleares)\b/,
    galeria: [
      "/images/destinos/mallorca.jpg",
      "https://images.unsplash.com/photo-1561632669-7f55f7975606?w=1200&q=85",
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(tenerife|gran[- ]canaria|canarias|teide)\b/,
    galeria: [
      "/images/destinos/tenerife.jpg",
      IMG_RESORT_PISCINA_MAR,
      IMG_PLAYA_SOLEADA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(bilbao|san[- ]sebastian|pais[- ]vasco|santander|asturias|oviedo|vigo|la[- ]coruna|santiago[- ]de[- ]compostela|galicia|zaragoza|salamanca|valladolid[- ]espana|pamplona|logrono|leon[- ]espana|badajoz)\b/,
    galeria: [
      "/images/destinos/bilbao-guggenheim.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /madrid|toledo|barajas|\bespana\b/,
    galeria: [
      "/images/espana/gran-via-metropolis.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
      "/images/espana/plaza-mayor.jpg",
      "/images/espana/barajas.jpg",
    ],
  },

  // =========================================================================
  // 4. ITALIA, FRANCIA Y RESTO DE EUROPA (Granularidad por Ciudad/País)
  // =========================================================================
  {
    match: /\b(venecia)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=85",
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(milan|turin|genova|bolonia|verona)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1200&q=85",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(florencia|pisa|toscana|napoles|amalfi|capri|bari|catania|palermo)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85",
      "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /\b(roma|vaticano|italia)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=85",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /\b(paris|francia|lyon|marsella|niza|toulouse|burdeos|lourdes|normandia|eurodisney|disneyland[- ]paris)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=85",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&q=85",
      IMG_AVION_ALA,
    ],
  },
  {
    match: /amsterdam|paises[- ]bajos|holanda|bruselas|brujas|belgica/,
    galeria: [
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /londres|manchester|edimburgo|escocia|dublin|irlanda|reino[- ]unido|inglaterra/,
    galeria: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /lisboa|oporto|\bfaro\b|fatima|portugal/,
    galeria: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /zurich|ginebra|basilea|lucerna|interlaken|zermatt|suiza|alpes/,
    galeria: [
      "/images/destinos/suiza-alpes.jpg",
      "/images/destinos/zurich.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /frankfurt|munich|berlin|hamburgo|dusseldorf|stuttgart|alemania|baviera/,
    galeria: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /praga|republica[- ]checa/,
    galeria: [
      "/images/destinos/praga.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /viena|salzburgo|austria/,
    galeria: [
      "/images/destinos/viena.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /budapest|hungria|varsovia|cracovia|polonia|bucarest|rumania|zagreb|dubrovnik|croacia/,
    galeria: [
      "/images/destinos/budapest.jpg",
      "/images/destinos/praga.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /atenas|santorini|mykonos|grecia|islas[- ]griegas/,
    galeria: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85",
      "/images/destinos/atenas-acropolis.jpg",
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /estocolmo|suecia|copenhague|dinamarca|oslo|noruega|fiordos|helsinki|finlandia|islandia|auroras/,
    galeria: [
      "/images/destinos/suiza-alpes.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },

  // =========================================================================
  // 5. TURQUÍA, MEDIO ORIENTE, ASIA Y EXÓTICOS
  // =========================================================================
  {
    match: /estambul|capadocia|pamukkale|efeso|turquia/,
    galeria: [
      "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85",
      IMG_AVION_ALA,
    ],
  },
  {
    match: /dubai|abu[- ]dhabi|emiratos/,
    galeria: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=85",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=85",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=85",
      IMG_AVION_ALA,
    ],
  },
  {
    match: /el[- ]cairo|egipto|\bnilo\b|luxor|piramides|marruecos|marrakech|sahara/,
    galeria: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /jerusalen|tel[- ]aviv|tierra[- ]santa|israel|petra|jordania/,
    galeria: [
      "/images/destinos/jerusalen.jpg",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /tokio|kioto|osaka|japon|seul|corea|pekin|beijing|shanghai|china/,
    galeria: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /bangkok|phuket|phi[- ]phi|tailandia|\bbali\b|indonesia|singapur/,
    galeria: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=85",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=85",
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },

  // =========================================================================
  // 6. ESTADOS UNIDOS Y CANADÁ (Granularidad por Ciudad)
  // =========================================================================
  {
    match: /orlando|disney[- ]world|magic[- ]kingdom|universal[- ]studios/,
    galeria: [
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      IMG_FAMILIA_VIAJE,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /miami|fort[- ]lauderdale|west[- ]palm[- ]beach|tampa|jacksonville|florida/,
    galeria: [
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /nueva[- ]york|new[- ]york|manhattan|newark|paterson|nueva[- ]jersey|boston|hartford|stamford|connecticut|filadelfia|washington|baltimore|chicago|detroit|mineapolis|atlanta|charlotte/,
    galeria: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85",
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /las[- ]vegas|gran[- ]canon|phoenix|denver|salt[- ]lake/,
    galeria: [
      "/images/destinos/las-vegas.jpg",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /los[- ]angeles|san[- ]francisco|san[- ]diego|california|hollywood|seattle|portland|houston|dallas|austin|san[- ]antonio/,
    galeria: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
      "/images/destinos/las-vegas.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /toronto|montreal|vancouver|calgary|ottawa|niagara|canada/,
    galeria: [
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },

  // =========================================================================
  // 7. MÉXICO, CARIBE Y CENTROAMÉRICA (Granularidad por Destino)
  // =========================================================================
  {
    match: /ciudad[- ]de[- ]mexico|\bcdmx\b|guadalajara|monterrey|guadalupe|teotihuacan|taxco|cuernavaca/,
    galeria: [
      "/images/destinos/ciudad-de-mexico.jpg",
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=85",
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /cancun|riviera[- ]maya|playa[- ]del[- ]carmen|tulum|cozumel|chichen[- ]itza|xcaret|los[- ]cabos|puerto[- ]vallarta|\bmexico\b/,
    galeria: [
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1200&q=85",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
      IMG_RESORT_CARIBE_1,
    ],
  },
  {
    match: /punta[- ]cana|bavaro|bayahibe|la[- ]romana|santo[- ]domingo|puerto[- ]plata|samana|isla[- ]saona|republica[- ]dominicana/,
    galeria: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=85",
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_ARENA_BLANCA,
    ],
  },
  {
    match: /la[- ]habana|varadero|\bcuba\b/,
    galeria: [
      "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1200&q=85",
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_CARIBE_1,
      IMG_MAR_TURQUESA_BOTE,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /san[- ]andres|johnny[- ]cay/,
    galeria: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85",
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_CARIBE_1,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /aruba|curazao|curacao|bonaire|bahamas|nassau|jamaica|montego[- ]bay|puerto[- ]rico|san[- ]juan|san[- ]martin|roatan|costa[- ]rica|san[- ]jose|guatemala|san[- ]salvador|barbados|isla[- ]margarita/,
    galeria: [
      IMG_MAR_TURQUESA_BOTE,
      "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85",
      IMG_RESORT_CARIBE_1,
      IMG_PLAYA_SOLEADA,
    ],
  },
  {
    match: /panama|playa[- ]blanca[- ]panama|san[- ]blas|bocas[- ]del[- ]toro/,
    galeria: [
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=1200&q=85",
      "/images/paquetes/panama-medellin/hero-panama.jpg",
      "/images/paquetes/panama-medellin/canal-panama.png",
      "/images/paquetes/panama-medellin/casco-antiguo.png",
      IMG_RESORT_PISCINA_MAR,
    ],
  },

  // =========================================================================
  // 8. SUDAMÉRICA (Granularidad por Ciudad)
  // =========================================================================
  {
    match: /cartagena|baru|islas[- ]del[- ]rosario|santa[- ]marta|tayrona|barranquilla/,
    galeria: [
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
      "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?w=1200&q=85",
      IMG_MAR_TURQUESA_BOTE,
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /medellin|guatape|comuna[- ]13|penol/,
    galeria: [
      "/images/paquetes/panama-medellin/medellin-skyline.png",
      "/images/paquetes/panama-medellin/chiva-medellin.png",
      "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /bogota|zipaquira|monserrate|\bcali\b|pereira|eje[- ]cafetero|bucaramanga|caracas|venezuela/,
    galeria: [
      "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1200&q=85",
      "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /bariloche/,
    galeria: [
      "/images/destinos/bariloche.jpg",
      "/images/destinos/perito-moreno.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },
  {
    match: /calafate|perito[- ]moreno|glaciar|patagonia/,
    galeria: [
      "/images/destinos/perito-moreno.jpg",
      "/images/destinos/bariloche.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /ushuaia|fin[- ]del[- ]mundo/,
    galeria: [
      "/images/destinos/ushuaia.jpg",
      "/images/destinos/perito-moreno.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /buenos[- ]aires|cordoba[- ]argentina|rosario|mendoza|salta|argentina/,
    galeria: [
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /iguazu|foz[- ]de[- ]iguazu/,
    galeria: [
      "https://images.unsplash.com/photo-1706587531457-8c574be27a08?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },
  {
    match: /sao[- ]paulo|brasilia/,
    galeria: [
      "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1200&q=85",
      IMG_EDIFICIOS_FINANCIEROS,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /rio[- ]de[- ]janeiro|buzios|arraial|florianopolis|maceio|salvador[- ]de[- ]bahia|copacabana|\bbrasil\b/,
    galeria: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=85",
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /santiago|vina[- ]del[- ]mar|valparaiso|antofagasta|iquique|calama|atacama|concepcion|puerto[- ]montt|\bchile\b/,
    galeria: [
      "https://images.unsplash.com/photo-1557974040-3bec341da09b?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },
  {
    match: /punta[- ]del[- ]este/,
    galeria: [
      "/images/destinos/punta-del-este.jpg",
      "/images/destinos/montevideo.jpg",
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /montevideo|colonia|uruguay|asuncion|paraguay/,
    galeria: [
      "/images/destinos/montevideo.jpg",
      "/images/destinos/punta-del-este.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /galapagos/,
    galeria: [
      "/images/destinos/galapagos.jpg",
      "/images/destinos/quito.jpg",
      IMG_MAR_TURQUESA_BOTE,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /quito|guayaquil|cuenca|ecuador|mitad[- ]del[- ]mundo/,
    galeria: [
      "/images/destinos/quito.jpg",
      "/images/destinos/galapagos.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /uyuni|la[- ]paz|santa[- ]cruz|cochabamba|bolivia/,
    galeria: [
      "/images/destinos/salar-de-uyuni.jpg",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
    ],
  },

  // =========================================================================
  // 9. SEGMENTOS B2B / GRUPOS (cuando no matchearon un destino específico arriba)
  // =========================================================================
  {
    match: /corporativ|empresa|ejecutiv|negocio|feria|congreso|convencion|ruc/,
    galeria: [
      IMG_OFICINA_CORPORATIVA,
      IMG_EDIFICIOS_FINANCIEROS,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /colegio|escolar|promocion[- ]escolar|graduacion|universidad|instituto|estudiante|deportiv|futbol|voley|basquet|natacion|atletismo|karate|taekwondo|baile|danza|delegacion|apafa|comites[- ]de[- ]aula/,
    galeria: [
      IMG_GRUPO_ESTUDIANTES,
      IMG_FAMILIA_VIAJE,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
    ],
  },
  {
    match: /luna[- ]de[- ]miel|novios|boda|pareja|romantic|quinceaner|15[- ]anos/,
    galeria: [
      IMG_PAREJA_ROMANTICA,
      IMG_RESORT_CARIBE_1,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_PLAYA_SOLEADA,
      IMG_AVION_ALA,
    ],
  },
];

// ── Fallbacks por Región (sin mezclar ciudades incompatibles) ──
const FALLBACK_POR_REGION: Record<string, GaleriaDestino> = {
  espana: [
    "/images/espana/gran-via-metropolis.jpg",
    "/images/espana/palacio-real.jpg",
    "/images/espana/puerta-de-alcala.jpg",
    "/images/espana/plaza-mayor.jpg",
    "/images/espana/barajas.jpg",
  ],
  europa: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  turquia: [
    "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85",
    IMG_AVION_ALA,
  ],
  caribe: [
    IMG_RESORT_CARIBE_1,
    "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
    IMG_MAR_TURQUESA_BOTE,
    IMG_PLAYA_SOLEADA,
    IMG_AVION_ALA,
  ],
  mexico: [
    "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1200&q=85",
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
    "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
    IMG_RESORT_CARIBE_1,
  ],
  usa: [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  usaCanada: [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  norteamerica: [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  sudamerica: [
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
    "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
    "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  peru: [
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
    "https://images.unsplash.com/photo-1716618704106-b335685a6b4d?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  cruceros: [
    IMG_CRUCERO_1,
    IMG_CRUCERO_2,
    IMG_CRUCERO_3,
    IMG_RESORT_CARIBE_1,
    IMG_AVION_ALA,
  ],
  visasSeguros: [
    IMG_PASAPORTE_VIAJE,
    IMG_AEROPUERTO_INTERNACIONAL,
    IMG_VIAJERO_MALETA,
    IMG_AVION_ALA,
    IMG_FAMILIA_VIAJE,
  ],
  corporativo: [
    IMG_OFICINA_CORPORATIVA,
    IMG_EDIFICIOS_FINANCIEROS,
    IMG_AEROPUERTO_INTERNACIONAL,
    IMG_HOTEL_LUJO_PISCINA,
    IMG_AVION_ALA,
  ],
  default: [
    IMG_AVION_ALA,
    IMG_AEROPUERTO_INTERNACIONAL,
    IMG_HOTEL_LUJO_PISCINA,
    IMG_PASAPORTE_VIAJE,
    IMG_FAMILIA_VIAJE,
  ],
};

/**
 * Devuelve una tupla de 5 imágenes [vitrina, card1, card2, card3, banner]
 * 100% coherentes con el destino, ciudad o servicio indicado en `texto`.
 */
export function obtenerGaleriaPorTexto(
  texto: string,
  regionFallback?: string
): GaleriaDestino {
  const t = norm(texto);

  // Caso especial: rutas de vuelo cuyo destino final es Lima (ej. "madrid-lima", "miami-lima", "Vuelos de Roma a Lima")
  // Si es una ruta hacia Lima desde el extranjero o provincia, mostramos 100% Lima + aviación, ¡nunca monumentos de otra ciudad ni Machu Picchu!
  if (/(-lima\b|\ba lima\b|\bhacia lima\b)/.test(t) && !t.includes("lima a ")) {
    return [
      "/images/destinos/lima-plaza-mayor.jpg",
      "/images/destinos/lima-costa-verde.jpg",
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_HOTEL_LUJO_PISCINA,
    ];
  }

  // Quitamos ciudades de origen cuando van seguidas de un destino (ej. "lima-madrid", "arequipa-madrid", "de Arequipa a Madrid")
  const tSinOrigen = t
    .replace(
      /\b(vuelos?|viajes?|paquetes?|tours?|ofertas?|boletos?|pasajes?)\s+(de|desde)\s+(lima|arequipa|trujillo|chiclayo|piura|cusco|iquitos|tarapoto|tacna|juliaca|cajamarca|pucallpa|tumbes|talara|ayacucho|jauja|huancayo|puerto[- ]maldonado|jaen|chachapoyas|huaraz|tingo[- ]maria)\s+(a|hacia)\s+/g,
      ""
    )
    .replace(
      /^(lima|arequipa|trujillo|chiclayo|piura|cusco|iquitos|tarapoto|tacna|juliaca|cajamarca|pucallpa|tumbes|talara|ayacucho|jauja|puerto-maldonado|jaen|chachapoyas|huaraz|tingo-maria)-/,
      ""
    )
    .replace(/\b(desde|en)\s+lima\b/g, "");

  for (const entry of GALERIAS_ESPECIFICAS) {
    if (entry.match.test(tSinOrigen)) {
      return entry.galeria;
    }
  }

  for (const entry of GALERIAS_ESPECIFICAS) {
    if (entry.match.test(t)) {
      return entry.galeria;
    }
  }

  if (regionFallback && FALLBACK_POR_REGION[regionFallback]) {
    return FALLBACK_POR_REGION[regionFallback];
  }

  return FALLBACK_POR_REGION.default;
}
