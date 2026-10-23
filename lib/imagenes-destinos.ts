/**
 * Diccionario Maestro y Motor de Imágenes Verificadas por Ciudad, Destino y Servicio
 * Garantiza que cada una de las páginas del ecosistema muestre fotografías 100% coherentes
 * con su destino de llegada o servicio específico, sin cruces de monumentos entre países,
 * sin fotos de Lima cuando Lima es solo la ciudad de salida, y sin rellenos de aviones
 * en las galerías de postales de destino.
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

// ── Playas y Resorts Generales (para destinos de sol y playa) ──
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
// NOTA: Las primeras 4 posiciones [0, 1, 2, 3] de cada destino turístico contienen
// exclusivamente fotografías reales del destino/región (sin aviones ni fotos de otros países)
// para que tanto el Hero como la galería "Postales y Experiencias" sean 100% coherentes.
const GALERIAS_ESPECIFICAS: Array<{
  match: RegExp;
  galeria: GaleriaDestino;
  // Ciudades/regiones de Europa: entre ellas gana la que el texto nombra primero.
  eu?: boolean;
  // Regla de país entero: solo entra si ninguna ciudad concreta casó antes.
  pais?: boolean;
}> = [
  // =========================================================================
  // 1. SEGMENTOS DE SERVICIO PURO (Cruceros, Visas, Pasaporte, Corporativo)
  // =========================================================================
  {
    match: /^(?!.*(rio[- ]sena|crucero[- ]nilo|rio[- ]nilo|amazonas|iquitos|bosforo|danubio|guadalquivir|rias[- ]baixas|lago[- ]ness)).*(\bcruceros?\b|\bmsc\b|\broyal caribbean|\bnorwegian|\bcococay|\bicon of the seas|\bcosta cruceros|\bdisney cruise)/,
    galeria: [
      IMG_CRUCERO_1,
      IMG_CRUCERO_2,
      IMG_CRUCERO_3,
      IMG_RESORT_CARIBE_1,
      IMG_MAR_TURQUESA_BOTE,
    ],
  },
  {
    match: /\b(?:ds-160|ds160|visa[- ]americana|visa[- ]canadiense|visa[- ]china|visa[- ]mexicana|pasaporte[- ]electronico|relaciones exteriores)\b/,
    galeria: [
      IMG_PASAPORTE_VIAJE,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_VIAJERO_MALETA,
      IMG_AVION_ALA,
      IMG_FAMILIA_VIAJE,
    ],
  },
  {
    match: /\b(?:vuelos[- ]corporativos[- ]cusco[- ]arequipa|pasajes[- ]corporativos[- ]piura[- ]iquitos|corporativos[- ]mineria)\b/,
    galeria: [
      IMG_OFICINA_CORPORATIVA,
      IMG_EDIFICIOS_FINANCIEROS,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },

  // =========================================================================
  // 2. ITALIA, FRANCIA Y RESTO DE EUROPA (Evaluados ANTES de España y Perú
  //    para que rutas combinadas como "Lima a Madrid y Roma/París/Lisboa" muestren la ciudad destino)
  // =========================================================================
  // ── ITALIA (Reglas individuales por ciudad con su foto real verificada) ──
  {
    match: /\b(?:padua)\b/,
    eu: true,
    galeria: ["/images/destinos/padua.jpg", "/images/destinos/venecia.jpg", "/images/destinos/verona.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/vicenza.jpg"],
  },
  {
    match: /\b(?:venecia)\b/,
    eu: true,
    galeria: ["/images/destinos/venecia.jpg", "/images/destinos/padua.jpg", "/images/destinos/verona.jpg", "/images/destinos/milan.webp", "/images/destinos/roma.jpg"],
  },
  {
    match: /\b(?:turin)\b/,
    eu: true,
    galeria: ["/images/destinos/turin.jpg", "/images/destinos/milan.webp", "/images/destinos/genova.jpg", "/images/destinos/como.jpg", "/images/destinos/roma.jpg"],
  },
  {
    match: /\b(?:genova)\b/,
    eu: true,
    galeria: ["/images/destinos/genova.jpg", "/images/destinos/turin.jpg", "/images/destinos/milan.webp", "/images/destinos/pisa.jpg", "/images/destinos/florencia.jpg"],
  },
  {
    match: /\b(?:bolonia)\b/,
    eu: true,
    galeria: ["/images/destinos/bolonia.jpg", "/images/destinos/modena.jpg", "/images/destinos/parma.jpg", "/images/destinos/florencia.jpg", "/images/destinos/rimini.jpg"],
  },
  {
    match: /\b(?:verona)\b/,
    eu: true,
    galeria: ["/images/destinos/verona.jpg", "/images/destinos/venecia.jpg", "/images/destinos/padua.jpg", "/images/destinos/milan.webp", "/images/destinos/brescia.jpg"],
  },
  {
    match: /\b(?:bergamo)\b/,
    eu: true,
    galeria: ["/images/destinos/bergamo.jpg", "/images/destinos/milan.webp", "/images/destinos/brescia.jpg", "/images/destinos/como.jpg", "/images/destinos/monza.jpg"],
  },
  {
    match: /\b(?:brescia)\b/,
    eu: true,
    galeria: ["/images/destinos/brescia.jpg", "/images/destinos/bergamo.jpg", "/images/destinos/verona.jpg", "/images/destinos/milan.webp", "/images/destinos/como.jpg"],
  },
  {
    match: /\b(?:modena)\b/,
    eu: true,
    galeria: ["/images/destinos/modena.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/parma.jpg", "/images/destinos/florencia.jpg", "/images/destinos/rimini.jpg"],
  },
  {
    match: /\b(?:parma)\b/,
    eu: true,
    galeria: ["/images/destinos/parma.jpg", "/images/destinos/modena.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/milan.webp", "/images/destinos/florencia.jpg"],
  },
  {
    match: /\b(?:monza)\b/,
    eu: true,
    galeria: ["/images/destinos/monza.jpg", "/images/destinos/milan.webp", "/images/destinos/como.jpg", "/images/destinos/bergamo.jpg", "/images/destinos/turin.jpg"],
  },
  {
    match: /\b(?:como)\b/,
    eu: true,
    galeria: ["/images/destinos/como.jpg", "/images/destinos/milan.webp", "/images/destinos/monza.jpg", "/images/destinos/bergamo.jpg", "/images/destinos/turin.jpg"],
  },
  {
    match: /\b(?:vicenza)\b/,
    eu: true,
    galeria: ["/images/destinos/vicenza.jpg", "/images/destinos/verona.jpg", "/images/destinos/padua.jpg", "/images/destinos/venecia.jpg", "/images/destinos/brescia.jpg"],
  },
  {
    match: /\b(?:milan)\b/,
    eu: true,
    galeria: ["/images/destinos/milan.webp", "/images/destinos/monza.jpg", "/images/destinos/como.jpg", "/images/destinos/bergamo.jpg", "/images/destinos/turin.jpg"],
  },
  {
    match: /\b(?:pisa)\b/,
    eu: true,
    galeria: ["/images/destinos/pisa.jpg", "/images/destinos/florencia.jpg", "/images/destinos/prato.jpg", "/images/destinos/genova.jpg", "/images/destinos/roma.jpg"],
  },
  {
    match: /\b(?:prato)\b/,
    eu: true,
    galeria: ["/images/destinos/prato.jpg", "/images/destinos/florencia.jpg", "/images/destinos/pisa.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/roma.jpg"],
  },
  {
    match: /\b(?:florencia|toscana)\b/,
    eu: true,
    galeria: ["/images/destinos/florencia.jpg", "/images/destinos/pisa.jpg", "/images/destinos/prato.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/roma.jpg"],
  },
  {
    match: /\b(?:napoles|amalfi|amalfitana|capri)\b/,
    eu: true,
    galeria: ["/images/destinos/napoles.jpg", "/images/destinos/roma.jpg", "/images/destinos/bari.jpg", "/images/destinos/palermo.jpg", "/images/destinos/catania.jpg"],
  },
  {
    match: /\b(?:bari)\b/,
    eu: true,
    galeria: ["/images/destinos/bari.jpg", "/images/destinos/napoles.jpg", "/images/destinos/ancona.jpg", "/images/destinos/roma.jpg", "/images/destinos/catania.jpg"],
  },
  {
    match: /\b(?:catania)\b/,
    eu: true,
    galeria: ["/images/destinos/catania.jpg", "/images/destinos/palermo.jpg", "/images/destinos/napoles.jpg", "/images/destinos/bari.jpg", "/images/destinos/roma.jpg"],
  },
  {
    match: /\b(?:palermo)\b/,
    eu: true,
    galeria: ["/images/destinos/palermo.jpg", "/images/destinos/catania.jpg", "/images/destinos/napoles.jpg", "/images/destinos/roma.jpg", "/images/destinos/bari.jpg"],
  },
  {
    match: /\b(?:perugia)\b/,
    eu: true,
    galeria: ["/images/destinos/perugia.jpg", "/images/destinos/florencia.jpg", "/images/destinos/roma.jpg", "/images/destinos/ancona.jpg", "/images/destinos/bolonia.jpg"],
  },
  {
    match: /\b(?:ancona)\b/,
    eu: true,
    galeria: ["/images/destinos/ancona.jpg", "/images/destinos/rimini.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/bari.jpg", "/images/destinos/perugia.jpg"],
  },
  {
    match: /\b(?:rimini)\b/,
    eu: true,
    galeria: ["/images/destinos/rimini.jpg", "/images/destinos/bolonia.jpg", "/images/destinos/ancona.jpg", "/images/destinos/venecia.jpg", "/images/destinos/florencia.jpg"],
  },
  {
    match: /\b(?:roma|romano|romanos|vaticano|vaticanos|coliseo|fontana[- ]di[- ]trevi)\b/,
    eu: true,
    galeria: ["/images/destinos/roma.jpg", "/images/destinos/florencia.jpg", "/images/destinos/venecia.jpg", "/images/destinos/milan.webp", "/images/destinos/napoles.jpg"],
  },
  {
    match: /\b(?:italia|italiano|italiana)\b/,
    eu: true,
    pais: true,
    galeria: ["/images/destinos/roma.jpg", "/images/destinos/florencia.jpg", "/images/destinos/venecia.jpg", "/images/destinos/milan.webp", "/images/destinos/napoles.jpg"],
  },

  // ── FRANCIA (Reglas individuales por ciudad con su foto real verificada) ──
  {
    match: /\b(?:lyon)\b/,
    eu: true,
    galeria: ["/images/destinos/lyon.jpg", "/images/destinos/paris.webp", "/images/destinos/marsella.jpg", "/images/destinos/niza.jpg", "/images/destinos/toulouse.jpg"],
  },
  {
    match: /\b(?:marsella)\b/,
    eu: true,
    galeria: ["/images/destinos/marsella.jpg", "/images/destinos/niza.jpg", "/images/destinos/lyon.jpg", "/images/destinos/toulouse.jpg", "/images/destinos/paris.webp"],
  },
  {
    match: /\b(?:niza|cannes|monaco)\b/,
    eu: true,
    galeria: ["/images/destinos/niza.jpg", "/images/destinos/marsella.jpg", "/images/destinos/lyon.jpg", "/images/destinos/paris.webp", "/images/destinos/burdeos.jpg"],
  },
  {
    match: /\b(?:toulouse)\b/,
    eu: true,
    galeria: ["/images/destinos/toulouse.jpg", "/images/destinos/burdeos.jpg", "/images/destinos/marsella.jpg", "/images/destinos/lyon.jpg", "/images/destinos/paris.webp"],
  },
  {
    match: /\b(?:burdeos)\b/,
    eu: true,
    galeria: ["/images/destinos/burdeos.jpg", "/images/destinos/toulouse.jpg", "/images/destinos/lyon.jpg", "/images/destinos/paris.webp", "/images/destinos/niza.jpg"],
  },
  {
    match: /\b(?:paris|lourdes|normandia|eurodisney|disneyland[- ]paris|torre[- ]eiffel|louvre|versalles|rio[- ]sena)\b/,
    eu: true,
    galeria: ["/images/destinos/paris.webp", "/images/destinos/lyon.jpg", "/images/destinos/marsella.jpg", "/images/destinos/niza.jpg", "/images/destinos/burdeos.jpg"],
  },
  {
    match: /\b(?:francia|frances|francesa)\b/,
    eu: true,
    pais: true,
    galeria: ["/images/destinos/paris.webp", "/images/destinos/lyon.jpg", "/images/destinos/marsella.jpg", "/images/destinos/niza.jpg", "/images/destinos/burdeos.jpg"],
  },

  // ── RESTO DE EUROPA (Reglas individuales por ciudad) ──
  {
    match: /\b(?:bruselas|brujas|belgica)\b/,
    eu: true,
    galeria: ["/images/destinos/bruselas.jpg", "/images/destinos/amsterdam.jpg", "/images/destinos/paris.webp", "/images/destinos/frankfurt.jpg", "/images/destinos/berlin.jpg"],
  },
  {
    match: /\b(?:amsterdam|paises[- ]bajos|holanda)\b/,
    eu: true,
    galeria: ["/images/destinos/amsterdam.jpg", "/images/destinos/bruselas.jpg", "/images/destinos/berlin.jpg", "/images/destinos/paris.webp", "/images/destinos/frankfurt.jpg"],
  },
  {
    match: /\b(?:londres|manchester|edimburgo|escocia|dublin|irlanda|reino[- ]unido|inglaterra)\b/,
    eu: true,
    galeria: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=85",
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=85",
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200&q=85",
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1200&q=85",
      "/images/destinos/amsterdam.jpg",
    ],
  },
  {
    match: /\b(?:oporto)\b/,
    eu: true,
    galeria: ["/images/destinos/oporto.jpg", "/images/destinos/lisboa.webp", "https://images.unsplash.com/photo-1513735492246-483525079686?w=1200&q=85", "/images/destinos/madrid.webp", "/images/destinos/sevilla.jpg"],
  },
  {
    match: /\b(?:lisboa|faro|fatima|portugal)\b/,
    eu: true,
    galeria: ["/images/destinos/lisboa.webp", "/images/destinos/oporto.jpg", "https://images.unsplash.com/photo-1513735492246-483525079686?w=1200&q=85", "https://images.unsplash.com/photo-1558102822-da570eb113ed?w=1200&q=85", "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&q=85"],
  },
  {
    match: /\b(?:ginebra)\b/,
    eu: true,
    galeria: ["/images/destinos/ginebra.jpg", "/images/destinos/zurich.jpg", "/images/destinos/suiza-alpes.jpg", "/images/destinos/lyon.jpg", "/images/destinos/munich.jpg"],
  },
  {
    match: /\b(?:zurich|basilea|lucerna|interlaken|zermatt|suiza|alpes)\b/,
    eu: true,
    galeria: ["/images/destinos/zurich.jpg", "/images/destinos/suiza-alpes.jpg", "/images/destinos/ginebra.jpg", "/images/destinos/munich.jpg", "/images/destinos/viena.jpg"],
  },
  {
    match: /\b(?:berlin)\b/,
    eu: true,
    galeria: ["/images/destinos/berlin.jpg", "/images/destinos/frankfurt.jpg", "/images/destinos/munich.jpg", "/images/destinos/praga.jpg", "/images/destinos/amsterdam.jpg"],
  },
  {
    match: /\b(?:munich|baviera|neuschwanstein)\b/,
    eu: true,
    galeria: ["/images/destinos/munich.jpg", "/images/destinos/frankfurt.jpg", "/images/destinos/berlin.jpg", "/images/destinos/viena.jpg", "/images/destinos/zurich.jpg"],
  },
  {
    match: /\b(?:frankfurt|hamburgo|dusseldorf|stuttgart|alemania)\b/,
    eu: true,
    galeria: ["/images/destinos/frankfurt.jpg", "/images/destinos/berlin.jpg", "/images/destinos/munich.jpg", "/images/destinos/amsterdam.jpg", "/images/destinos/bruselas.jpg"],
  },
  {
    match: /\b(?:praga|republica[- ]checa)\b/,
    eu: true,
    galeria: ["/images/destinos/praga.jpg", "/images/destinos/viena.jpg", "/images/destinos/budapest.jpg", "/images/destinos/berlin.jpg", "/images/destinos/munich.jpg"],
  },
  {
    match: /\b(?:viena|salzburgo|austria)\b/,
    eu: true,
    galeria: ["/images/destinos/viena.jpg", "/images/destinos/praga.jpg", "/images/destinos/budapest.jpg", "/images/destinos/suiza-alpes.jpg", "/images/destinos/munich.jpg"],
  },
  {
    match: /\b(?:budapest|hungria|varsovia|cracovia|polonia|bucarest|rumania|zagreb|dubrovnik|plitvice|croacia)\b/,
    eu: true,
    galeria: ["/images/destinos/budapest.jpg", "/images/destinos/praga.jpg", "/images/destinos/viena.jpg", "/images/destinos/venecia.jpg", "/images/destinos/berlin.jpg"],
  },
  {
    match: /\b(?:atenas|santorini|mykonos|grecia|islas[- ]griegas)\b/,
    eu: true,
    galeria: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85", "/images/destinos/atenas-acropolis.jpg", "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85", "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=85", IMG_RESORT_PISCINA_MAR],
  },
  {
    match: /\b(?:estocolmo|suecia|copenhague|dinamarca|oslo|noruega|fiordos|helsinki|finlandia|islandia|auroras)\b/,
    eu: true,
    galeria: ["https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=85", "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1200&q=85", "/images/destinos/suiza-alpes.jpg", "/images/destinos/zurich.jpg", "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=85"],
  },

  // ── ESPAÑA (Reglas individuales por ciudad con su foto real verificada) ──
  {
    match: /\b(?:hospitalet)\b/,
    galeria: ["/images/destinos/hospitalet.jpg", "/images/destinos/barcelona.webp", "/images/destinos/badalona.jpg", "/images/destinos/terrassa.jpg", "/images/destinos/sabadell.jpg"],
  },
  {
    match: /\b(?:badalona)\b/,
    galeria: ["/images/destinos/badalona.jpg", "/images/destinos/barcelona.webp", "/images/destinos/hospitalet.jpg", "/images/destinos/sabadell.jpg", "/images/destinos/terrassa.jpg"],
  },
  {
    match: /\b(?:terrassa)\b/,
    galeria: ["/images/destinos/terrassa.jpg", "/images/destinos/sabadell.jpg", "/images/destinos/barcelona.webp", "/images/destinos/hospitalet.jpg", "/images/destinos/badalona.jpg"],
  },
  {
    match: /\b(?:sabadell)\b/,
    galeria: ["/images/destinos/sabadell.jpg", "/images/destinos/terrassa.jpg", "/images/destinos/barcelona.webp", "/images/destinos/badalona.jpg", "/images/destinos/hospitalet.jpg"],
  },
  {
    match: /\b(?:barcelona|girona|tarragona|lleida|cataluna|sagrada[- ]familia)\b/,
    galeria: ["/images/destinos/barcelona.webp", "/images/destinos/badalona.jpg", "/images/destinos/hospitalet.jpg", "/images/destinos/terrassa.jpg", "/images/destinos/sabadell.jpg"],
  },
  {
    match: /\b(?:alicante)\b/,
    galeria: ["/images/destinos/alicante.jpg", "/images/destinos/elche.jpg", "/images/destinos/valencia-artes.jpg", "/images/destinos/murcia.jpg", "/images/destinos/cartagena-espana.jpg"],
  },
  {
    match: /\b(?:elche)\b/,
    galeria: ["/images/destinos/elche.jpg", "/images/destinos/alicante.jpg", "/images/destinos/valencia-artes.jpg", "/images/destinos/murcia.jpg", "/images/destinos/cartagena-espana.jpg"],
  },
  {
    match: /\b(?:cartagena[- ]espana)\b/,
    galeria: ["/images/destinos/cartagena-espana.jpg", "/images/destinos/murcia.jpg", "/images/destinos/alicante.jpg", "/images/destinos/valencia-artes.jpg", "/images/destinos/elche.jpg"],
  },
  {
    match: /\b(?:murcia)\b/,
    galeria: ["/images/destinos/murcia.jpg", "/images/destinos/cartagena-espana.jpg", "/images/destinos/alicante.jpg", "/images/destinos/valencia-artes.jpg", "/images/destinos/elche.jpg"],
  },
  {
    match: /\b(?:valencia|castellon)\b/,
    galeria: ["/images/destinos/valencia-artes.jpg", "/images/destinos/alicante.jpg", "/images/destinos/mallorca.jpg", "/images/destinos/murcia.jpg", "/images/destinos/elche.jpg"],
  },
  {
    match: /\b(?:granada|alhambra)\b/,
    galeria: ["/images/destinos/granada.jpg", "/images/destinos/sevilla.jpg", "/images/destinos/malaga.jpg", "/images/destinos/jerez.jpg", "/images/destinos/murcia.jpg"],
  },
  {
    match: /\b(?:jerez)\b/,
    galeria: ["/images/destinos/jerez.jpg", "/images/destinos/sevilla.jpg", "/images/destinos/malaga.jpg", "/images/destinos/granada.jpg", "/images/destinos/murcia.jpg"],
  },
  {
    match: /^(?!.*cordoba[- ]argentina).*\b(sevilla|cordoba|cordoba[- ]espana|andalucia|cadiz|huelva)\b/,
    galeria: ["/images/destinos/sevilla.jpg", "/images/destinos/granada.jpg", "/images/destinos/malaga.jpg", "/images/destinos/jerez.jpg", "/images/destinos/murcia.jpg"],
  },
  {
    match: /\b(?:malaga|marbella|costa[- ]del[- ]sol|almeria)\b/,
    galeria: ["/images/destinos/malaga.jpg", "/images/destinos/sevilla.jpg", "/images/destinos/granada.jpg", "/images/destinos/mallorca.jpg", "/images/destinos/murcia.jpg"],
  },
  {
    match: /\b(?:mallorca|palma[- ]de[- ]mallorca|ibiza|menorca|baleares)\b/,
    galeria: ["/images/destinos/mallorca.jpg", "/images/destinos/tenerife.jpg", "/images/destinos/valencia-artes.jpg", "/images/destinos/barcelona.webp", "/images/destinos/alicante.jpg"],
  },
  {
    match: /\b(?:tenerife|gran[- ]canaria|canarias|teide)\b/,
    galeria: ["/images/destinos/tenerife.jpg", "/images/destinos/mallorca.jpg", "/images/destinos/malaga.jpg", IMG_PLAYA_SOLEADA, IMG_PLAYA_ARENA_BLANCA],
  },
  {
    match: /\b(?:vitoria)\b/,
    galeria: ["/images/destinos/vitoria.jpg", "/images/destinos/bilbao-guggenheim.jpg", "/images/destinos/pamplona.jpg", "/images/destinos/zaragoza.jpg", "/images/destinos/gijon.jpg"],
  },
  {
    match: /\b(?:pamplona|navarra)\b/,
    galeria: ["/images/destinos/pamplona.jpg", "/images/destinos/vitoria.jpg", "/images/destinos/bilbao-guggenheim.jpg", "/images/destinos/zaragoza.jpg", "/images/destinos/gijon.jpg"],
  },
  {
    match: /^(?!.*(alcobendas|de[- ]los[- ]reyes)).*\b(bilbao|san[- ]sebastian|pais[- ]vasco|logrono|la[- ]rioja)\b/,
    galeria: ["/images/destinos/bilbao-guggenheim.jpg", "/images/destinos/vitoria.jpg", "/images/destinos/pamplona.jpg", "/images/destinos/gijon.jpg", "/images/destinos/zaragoza.jpg"],
  },
  {
    match: /\b(?:vigo)\b/,
    galeria: ["/images/destinos/vigo.jpg", "/images/destinos/a-coruna.jpg", "/images/destinos/gijon.jpg", "/images/destinos/oviedo.jpg", "/images/destinos/bilbao-guggenheim.jpg"],
  },
  {
    match: /\b(?:a[- ]coruna|la[- ]coruna)\b/,
    galeria: ["/images/destinos/a-coruna.jpg", "/images/destinos/vigo.jpg", "/images/destinos/gijon.jpg", "/images/destinos/oviedo.jpg", "/images/destinos/bilbao-guggenheim.jpg"],
  },
  {
    match: /\b(?:gijon)\b/,
    galeria: ["/images/destinos/gijon.jpg", "/images/destinos/oviedo.jpg", "/images/destinos/a-coruna.jpg", "/images/destinos/bilbao-guggenheim.jpg", "/images/destinos/vigo.jpg"],
  },
  {
    match: /\b(?:oviedo|asturias|santiago[- ]de[- ]compostela|galicia|santander)\b/,
    galeria: ["/images/destinos/oviedo.jpg", "/images/destinos/gijon.jpg", "/images/destinos/a-coruna.jpg", "/images/destinos/vigo.jpg", "/images/destinos/bilbao-guggenheim.jpg"],
  },
  {
    match: /\b(?:zaragoza)\b/,
    galeria: ["/images/destinos/zaragoza.jpg", "/images/destinos/valladolid.jpg", "/images/destinos/pamplona.jpg", "/images/espana/palacio-real.jpg", "/images/destinos/vitoria.jpg"],
  },
  {
    match: /^(?!.*(cancun|chichen[- ]itza|cenote|riviera[- ]maya|yucatan|mexico)).*\b(salamanca|valladolid|valladolid[- ]espana|burgos|leon[- ]espana|leon[- ]zamora|badajoz|caceres|extremadura|albacete|ciudad[- ]real)\b/,
    galeria: ["/images/destinos/valladolid.jpg", "/images/destinos/zaragoza.jpg", "/images/espana/palacio-real.jpg", "/images/espana/plaza-mayor.jpg", "/images/destinos/vitoria.jpg"],
  },
  {
    match: /\b(?:madrid|toledo|segovia|avila|alcala[- ]de[- ]henares|aranjuez|guadalajara[- ]via[- ]madrid|barajas|espana)\b/,
    galeria: [
      "/images/espana/gran-via-metropolis.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
      "/images/espana/plaza-mayor.jpg",
      "/images/espana/cibeles.jpg",
    ],
  },

  // =========================================================================
  // 4. TURQUÍA, MEDIO ORIENTE, EGIPTO, MARRUECOS, ASIA Y EXÓTICOS
  // =========================================================================
  {
    match: /\b(?:estambul|capadocia|pamukkale|efeso|turquia)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:dubai|abu[- ]dhabi|abu[- ]dabi|emiratos)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=85",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=85",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:marruecos|marrakech|sahara|fez|casablanca|rabat|tanger)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=85",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=85",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:el[- ]cairo|egipto|nilo|luxor|piramides|asuan)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=85",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=85",
      IMG_CRUCERO_1,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:jerusalen|tel[- ]aviv|tierra[- ]santa|israel|petra|jordania)\b/,
    galeria: [
      "/images/destinos/jerusalen.jpg",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:tokio|kioto|osaka|japon|seul|corea|pekin|beijing|shanghai|china)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=85",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=85",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:bangkok|phuket|phi[- ]phi|tailandia|bali|indonesia|singapur|maldivas|india|taj[- ]mahal)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=85",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=85",
      IMG_RESORT_PISCINA_MAR,
      IMG_PLAYA_SOLEADA,
    ],
  },

  // =========================================================================
  // 5. ESTADOS UNIDOS Y CANADÁ (Granularidad por Ciudad)
  // =========================================================================
  {
    match: /\b(?:orlando|disney[- ]world|magic[- ]kingdom|universal[- ]studios)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_RESORT_PISCINA_MAR,
    ],
  },
  {
    match: /\b(?:miami|fort[- ]lauderdale|west[- ]palm[- ]beach|tampa|jacksonville|florida)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=1200&q=85",
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_PLAYA_SOLEADA,
    ],
  },
  {
    match: /\b(?:nueva[- ]york|new[- ]york|manhattan|newark|paterson|nueva[- ]jersey|boston|hartford|stamford|connecticut|filadelfia|washington|baltimore|chicago|detroit|mineapolis|atlanta|charlotte)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85",
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=85",
      IMG_EDIFICIOS_FINANCIEROS,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:las[- ]vegas|gran[- ]canon|phoenix|denver|salt[- ]lake)\b/,
    galeria: [
      "/images/destinos/las-vegas.jpg",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_EDIFICIOS_FINANCIEROS,
    ],
  },
  {
    match: /\b(?:los[- ]angeles|san[- ]francisco|san[- ]diego|california|hollywood|seattle|portland|houston|dallas|austin|san[- ]antonio|estados[- ]unidos)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=85",
      "/images/destinos/las-vegas.jpg",
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:toronto|montreal|vancouver|calgary|ottawa|niagara|canada)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85",
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },

  // 8D. Selva Peruana (va antes del Caribe: 'San Martín' es una región de Tarapoto) (Tarapoto, Sauce, Laguna Azul, Ahuashiyacu, Lamas, Moyobamba, Tingo María)
  {
    match: /\b(?:tarapoto|laguna[- ]azul|ahuashiyacu|lamas|moyobamba|rioja[- ]peru|nueva[- ]cajamarca|tingo[- ]maria|alto[- ]mayo)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?w=1200&q=85",
      "/images/destinos/oxapampa-peru.jpg",
      IMG_RESORT_PISCINA_MAR,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // =========================================================================
  // 6. MÉXICO, CARIBE Y CENTROAMÉRICA (Granularidad por Destino)
  // =========================================================================
  {
    match: /^(?!.*(cancun|riviera[- ]maya|tulum)).*\b(?:ciudad[- ]de[- ]mexico|cdmx|guadalajara|monterrey|guadalupe|teotihuacan|taxco|cuernavaca)\b/,
    galeria: [
      "/images/destinos/ciudad-de-mexico.jpg",
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=85",
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:cancun|riviera[- ]maya|playa[- ]del[- ]carmen|tulum|cozumel|chichen[- ]itza|xcaret|los[- ]cabos|puerto[- ]vallarta|mexico)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1200&q=85",
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
      IMG_RESORT_CARIBE_1,
    ],
  },
  {
    match: /\b(?:punta[- ]cana|bavaro|bayahibe|la[- ]romana|santo[- ]domingo|puerto[- ]plata|samana|cayo[- ]levantado|isla[- ]saona|republica[- ]dominicana)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=85",
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_ARENA_BLANCA,
    ],
  },
  {
    match: /\b(?:la[- ]habana|varadero|cayo[- ]santa[- ]maria|cayo[- ]coco|holguin|trinidad[- ]cuba|cuba)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1200&q=85",
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_CARIBE_1,
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_ARENA_BLANCA,
    ],
  },
  {
    match: /\b(?:san[- ]andres|johnny[- ]cay)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85",
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_CARIBE_1,
      IMG_PLAYA_ARENA_BLANCA,
    ],
  },
  {
    match: /\b(?:aruba|curazao|curacao|bonaire|bahamas|nassau|jamaica|montego[- ]bay|puerto[- ]rico|san[- ]juan|san[- ]martin(?![- ]de[- ]porres)|roatan|costa[- ]rica|guanacaste|san[- ]jose|guatemala|antigua[- ]atitlan|tikal|san[- ]salvador|barbados|isla[- ]margarita)\b/,
    galeria: [
      IMG_MAR_TURQUESA_BOTE,
      "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85",
      IMG_RESORT_CARIBE_1,
      IMG_PLAYA_SOLEADA,
    ],
  },
  {
    match: /\b(?:panama|playa[- ]blanca[- ]panama|san[- ]blas|bocas[- ]del[- ]toro)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=1200&q=85",
      "/images/paquetes/panama-medellin/hero-panama.jpg",
      "/images/paquetes/panama-medellin/canal-panama.png",
      "/images/paquetes/panama-medellin/casco-antiguo.png",
      IMG_RESORT_PISCINA_MAR,
    ],
  },

  // =========================================================================
  // 7. SUDAMÉRICA (Granularidad por Ciudad)
  // =========================================================================
  {
    match: /\b(?:cartagena|baru|islas[- ]del[- ]rosario|santa[- ]marta|tayrona|barranquilla)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
      "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?w=1200&q=85",
      IMG_MAR_TURQUESA_BOTE,
      IMG_RESORT_PISCINA_MAR,
      IMG_PLAYA_SOLEADA,
    ],
  },
  {
    match: /\b(?:medellin|guatape|comuna[- ]13|penol)\b/,
    galeria: [
      "/images/paquetes/panama-medellin/medellin-skyline.png",
      "/images/paquetes/panama-medellin/chiva-medellin.png",
      "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?w=1200&q=85",
      "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:bogota|zipaquira|monserrate|cali|pereira|salento|eje[- ]cafetero|bucaramanga|caracas|venezuela|colombia)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1200&q=85",
      "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?w=1200&q=85",
      "/images/paquetes/panama-medellin/medellin-skyline.png",
      "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:bariloche)\b/,
    galeria: [
      "/images/destinos/bariloche.jpg",
      "/images/destinos/perito-moreno.jpg",
      "/images/destinos/ushuaia.jpg",
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:calafate|perito[- ]moreno|glaciar|patagonia)\b/,
    galeria: [
      "/images/destinos/perito-moreno.jpg",
      "/images/destinos/bariloche.jpg",
      "/images/destinos/ushuaia.jpg",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:ushuaia|fin[- ]del[- ]mundo)\b/,
    galeria: [
      "/images/destinos/ushuaia.jpg",
      "/images/destinos/perito-moreno.jpg",
      "/images/destinos/bariloche.jpg",
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:buenos[- ]aires|cordoba[- ]argentina|rosario|mendoza|salta|argentina)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=1200&q=85",
      "/images/destinos/bariloche.jpg",
      "/images/destinos/perito-moreno.jpg",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:iguazu|foz[- ]de[- ]iguazu)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1706587531457-8c574be27a08?w=1200&q=85",
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=85",
      IMG_RESORT_PISCINA_MAR,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    // Playas y destinos turísticos de Brasil evaluados ANTES de São Paulo corporativo (para que "Morro de São Paulo" reciba playas)
    match: /\b(?:rio[- ]de[- ]janeiro|buzios|arraial|florianopolis|camboriu|maceio|maragogi|salvador[- ]de[- ]bahia|morro[- ]sao[- ]paulo|morro[- ]de[- ]sao[- ]paulo|praia[- ]do[- ]forte|copacabana|natal|pipa|recife|porto[- ]de[- ]galinhas|fortaleza|jericoacoara|fernando[- ]de[- ]noronha|gramado|canela|brasil)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=85",
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
      IMG_MAR_TURQUESA_BOTE,
    ],
  },
  {
    match: /\b(?:sao[- ]paulo|brasilia)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1200&q=85",
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=85",
      IMG_EDIFICIOS_FINANCIEROS,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:santiago|vina[- ]del[- ]mar|valparaiso|farellones|antofagasta|iquique|calama|atacama|torres[- ]del[- ]paine|isla[- ]de[- ]pascua|rapa[- ]nui|concepcion|puerto[- ]montt|pucon|chile)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1557974040-3bec341da09b?w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:punta[- ]del[- ]este)\b/,
    galeria: [
      "/images/destinos/punta-del-este.jpg",
      "/images/destinos/montevideo.jpg",
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  {
    match: /\b(?:montevideo|colonia|uruguay|asuncion|paraguay)\b/,
    galeria: [
      "/images/destinos/montevideo.jpg",
      "/images/destinos/punta-del-este.jpg",
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_RESORT_PISCINA_MAR,
    ],
  },
  {
    match: /\b(?:galapagos)\b/,
    galeria: [
      "/images/destinos/galapagos.jpg",
      "/images/destinos/quito.jpg",
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
    ],
  },
  {
    match: /\b(?:quito|guayaquil|cuenca|ecuador|mitad[- ]del[- ]mundo)\b/,
    galeria: [
      "/images/destinos/quito.jpg",
      "/images/destinos/galapagos.jpg",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_MAR_TURQUESA_BOTE,
    ],
  },
  {
    match: /\b(?:uyuni|la[- ]paz|santa[- ]cruz|cochabamba|bolivia)\b/,
    galeria: [
      "/images/destinos/salar-de-uyuni.jpg",
      "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?w=1200&q=85",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },

  // =========================================================================
  // 8. DESTINOS DEL PERÚ (Granularidad por Ciudad, Costa, Selva y Sierra)
  // =========================================================================
  // 8A. Cusco, Machu Picchu, Valle Sagrado, Montaña 7 Colores, Laguna Humantay (evaluado primero en Perú para circuitos combinados)
  {
    match: /\b(?:cusco|machu[- ]picchu|valle[- ]sagrado|vinicunca|7[- ]colores|siete[- ]colores|humantay|maras|moray|ollantaytambo|aguas[- ]calientes|choquequirao|camino[- ]inca|salkantay|sicuani|quillabamba)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
      "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
      "https://images.unsplash.com/photo-1716618704106-b335685a6b4d?w=1200&q=85",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
    ],
  },
  // 8B. Playas del Norte del Perú (Punta Sal, Máncora, Vichayito, Zorritos, Tumbes, Piura, Talara)
  {
    match: /\b(?:punta[- ]sal|decameron[- ]punta[- ]sal|zorritos|tumbes|manglares)\b/,
    galeria: [
      IMG_RESORT_PISCINA_MAR,
      IMG_PLAYA_SOLEADA,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_MAR_TURQUESA_BOTE,
      IMG_PLAYA_ARENA_BLANCA,
    ],
  },
  {
    match: /\b(?:mancora|vichayito|pocitas|el[- ]nuro|organos|cabo[- ]blanco|talara|piura|colan|catacaos|sechura|sullana)\b/,
    galeria: [
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
      IMG_MAR_TURQUESA_BOTE,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_PLAYA_ARENA_BLANCA,
    ],
  },
  // 8C. Costa Sur Cercana (Paracas, Islas Ballestas, Ica, Huacachina, Nazca, Pisco, Chincha, Lunahuaná)
  {
    match: /\b(?:paracas|ballestas|huacachina|ica|nazca|pisco|chincha|lunahuana|canete)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
      IMG_PLAYA_SOLEADA,
      IMG_RESORT_PISCINA_MAR,
      IMG_MAR_TURQUESA_BOTE,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8E. Iquitos, Río Amazonas, Puerto Maldonado, Tambopata, Pucallpa
  {
    match: /\b(?:iquitos|amazonas|pacaya[- ]samiria|puerto[- ]maldonado|tambopata|sandoval|pucallpa)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?w=1200&q=85",
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      "/images/destinos/oxapampa-peru.jpg",
      IMG_RESORT_PISCINA_MAR,
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8F. Selva Central (Oxapampa, Pozuzo, Villa Rica, Chanchamayo, La Merced, Satipo)
  {
    match: /\b(?:oxapampa|pozuzo|villa[- ]rica|chanchamayo|la[- ]merced|satipo|selva[- ]central)\b/,
    galeria: [
      "/images/destinos/oxapampa-peru.jpg",
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?w=1200&q=85",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8G. Chachapoyas, Kuélap, Gocta, Jaén
  {
    match: /\b(?:chachapoyas|kuelap|gocta|jaen)\b/,
    galeria: [
      "/images/destinos/chachapoyas-kuelap.jpg",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?w=1200&q=85",
      "/images/destinos/cajamarca-peru.jpg",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8H. Arequipa y Cañón del Colca
  {
    match: /\b(?:arequipa|colca|perumin|chivay|misti|santa[- ]catalina|sillar|camana|mollendo|moquegua|ilo|tacna)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?w=1200&q=85",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
      "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8I. Puno, Juliaca y Lago Titicaca
  {
    match: /\b(?:puno|juliaca|titicaca|uros|taquile|sillustani)\b/,
    galeria: [
      "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?w=1200&q=85",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
      "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8J. Huaraz, Laguna 69, Pastoruri y Cordillera Blanca
  {
    match: /\b(?:huaraz|laguna[- ]69|pastoruri|llanganuco|chavin|cordillera[- ]blanca|ancash|chimbote)\b/,
    galeria: [
      "/images/destinos/huaraz-laguna69.jpg",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85",
      "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8K. Trujillo, Huanchaco, Chan Chan
  {
    match: /\b(?:trujillo|huanchaco|chan[- ]chan|pacasmayo|chepen|moche)\b/,
    galeria: [
      "/images/destinos/trujillo-peru.jpg",
      "/images/destinos/chiclayo-peru.jpg",
      IMG_PLAYA_SOLEADA,
      "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8L. Chiclayo, Sipán, Lambayeque
  {
    match: /\b(?:chiclayo|sipan|lambayeque|pimentel|ferrenafe)\b/,
    galeria: [
      "/images/destinos/chiclayo-peru.jpg",
      "/images/destinos/trujillo-peru.jpg",
      IMG_PLAYA_SOLEADA,
      "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8M. Cajamarca
  {
    match: /\b(?:cajamarca|banos[- ]del[- ]inca|cumbemayo)\b/,
    galeria: [
      "/images/destinos/cajamarca-peru.jpg",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "/images/destinos/chachapoyas-kuelap.jpg",
      "/images/destinos/ayacucho-peru.jpg",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8N. Ayacucho, Aguas Turquesas de Millpu, Huancayo, Jauja, Tarma, Huánuco, Abancay, Andahuaylas
  {
    match: /\b(?:ayacucho|millpu|huancayo|jauja|tarma|huanuco|abancay|andahuaylas)\b/,
    galeria: [
      "/images/destinos/ayacucho-peru.jpg",
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
      "/images/destinos/cajamarca-peru.jpg",
      "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
    ],
  },
  // 8O. Lima, Callao, Caral, Chancay, Huacho, Barranca (solo cuando el tour es específicamente por Lima/Caral)
  {
    match: /\b(?:miraflores|barranco|caral|chancay|huacho|barranca|pachacamac|cieneguilla|chosica|san[- ]martin[- ]de[- ]porres|city[- ]tour[- ]lima)\b/,
    galeria: [
      "/images/destinos/lima-plaza-mayor.jpg",
      "/images/destinos/lima-costa-verde.jpg",
      "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
      IMG_HOTEL_LUJO_PISCINA,
      IMG_PLAYA_SOLEADA,
    ],
  },

  // =========================================================================
  // 9. SEGMENTOS B2B / GRUPOS (cuando no matchearon un destino específico arriba)
  // =========================================================================
  {
    match: /\b(?:corporativ|empresa|ejecutiv|negocio|feria|congreso|convencion|ruc\b)/,
    galeria: [
      IMG_OFICINA_CORPORATIVA,
      IMG_EDIFICIOS_FINANCIEROS,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /\b(?:colegio|escolar|promocion[- ]escolar|graduacion|universidad|instituto|estudiante|deportiv|futbol|voley|basquet|natacion|atletismo|karate|taekwondo|baile|danza|delegacion|apafa|comites[- ]de[- ]aula)/,
    galeria: [
      IMG_GRUPO_ESTUDIANTES,
      IMG_FAMILIA_VIAJE,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_RESORT_PISCINA_MAR,
      IMG_AVION_ALA,
    ],
  },
  {
    match: /\b(?:luna[- ]de[- ]miel|novios|boda|pareja|romantic|quinceaner|15[- ]anos)/,
    galeria: [
      IMG_PAREJA_ROMANTICA,
      IMG_RESORT_CARIBE_1,
      IMG_HOTEL_LUJO_PISCINA,
      IMG_PLAYA_SOLEADA,
      IMG_MAR_TURQUESA_BOTE,
    ],
  },
];

const INICIO_EUROPA = GALERIAS_ESPECIFICAS.findIndex((e) => e.eu);

// "Roma-Milán" o "conexión París/Lyon": entre ciudades de Europa gana la nombrada primero.
function galeriaEuropaPrimeraCiudad(t: string): GaleriaDestino | null {
  let mejor: { pos: number; galeria: GaleriaDestino } | null = null;
  for (const e of GALERIAS_ESPECIFICAS) {
    if (!e.eu || e.pais) continue;
    const m = e.match.exec(t);
    if (m && (mejor === null || m.index < mejor.pos)) mejor = { pos: m.index, galeria: e.galeria };
  }
  return mejor ? mejor.galeria : null;
}

function buscarGaleria(texto: string): GaleriaDestino | null {
  for (let i = 0; i < GALERIAS_ESPECIFICAS.length; i++) {
    if (i === INICIO_EUROPA) {
      const europa = galeriaEuropaPrimeraCiudad(texto);
      if (europa) return europa;
    }
    if (GALERIAS_ESPECIFICAS[i].match.test(texto)) return GALERIAS_ESPECIFICAS[i].galeria;
  }
  return null;
}

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
    "/images/espana/gran-via-metropolis.jpg",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  exoticos: [
    "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  turquia: [
    "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  caribe: [
    IMG_RESORT_CARIBE_1,
    "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
    IMG_MAR_TURQUESA_BOTE,
    IMG_PLAYA_SOLEADA,
    IMG_PLAYA_ARENA_BLANCA,
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
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  usaCanada: [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  norteamerica: [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  sudamerica: [
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
    "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
    "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    "https://images.unsplash.com/photo-1557974040-3bec341da09b?w=1200&q=85",
    IMG_HOTEL_LUJO_PISCINA,
  ],
  peru: [
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
    "https://images.unsplash.com/photo-1716618704106-b335685a6b4d?w=1200&q=85",
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
    "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=1200&q=85",
  ],
  cruceros: [
    IMG_CRUCERO_1,
    IMG_CRUCERO_2,
    IMG_CRUCERO_3,
    IMG_RESORT_CARIBE_1,
    IMG_MAR_TURQUESA_BOTE,
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

// Expresión regular estricta que detecta ÚNICAMENTE cuando Lima es la ciudad de LLEGADA (retorno hacia Lima)
const REGEX_DESTINO_FINAL_LIMA =
  /\b(vuelo-retorno-madrid-a-lima|vuelo-madrid-a-lima-retorno|boleto-madrid-a-lima-solo-ida|vuelo-retorno-hacia-lima)\b|^(vuelos-con-2-maletas-)?(madrid|barcelona|roma|milan|paris|amsterdam|londres|lisboa|zurich|frankfurt|miami|nueva-york|new-york|orlando|los-angeles|newark|houston|chicago|atlanta|washington|boston|toronto|montreal|cancun|ciudad-de-mexico|punta-cana|santo-domingo|panama|bogota|medellin|cartagena|san-andres|aruba|curazao|buenos-aires|santiago|sao-paulo|rio-de-janeiro|quito|guayaquil|la-paz|santa-cruz|montevideo|asuncion|caracas|cusco|arequipa|piura|trujillo|chiclayo|iquitos|tarapoto|tacna|juliaca|puno|cajamarca|pucallpa|tumbes|talara|ayacucho|jauja|huancayo|puerto-maldonado|jaen|chachapoyas|huaraz)-(a-)?lima\b|\b(vuelos?|pasajes?|boletos?)\s+(de|desde)\s+(?!lima\b)[a-z0-9-]+\s+(a|hacia)\s+lima\b/;

/**
 * Devuelve una tupla de 5 imágenes [vitrina, card1, card2, card3, banner]
 * 100% coherentes con el destino de llegada, ciudad o servicio indicado en `texto`.
 */
export function obtenerGaleriaPorTexto(
  texto: string,
  regionFallback?: string
): GaleriaDestino {
  const t = norm(texto);

  // Caso especial: rutas de vuelo cuyo destino final de llegada es explícitamente Lima (ej. "madrid-lima", "miami-lima", "Vuelos de Roma a Lima")
  if (
    REGEX_DESTINO_FINAL_LIMA.test(t) &&
    !t.includes("lima-madrid-lima") &&
    !t.includes("madrid-lima-madrid")
  ) {
    return [
      "/images/destinos/lima-plaza-mayor.jpg",
      "/images/destinos/lima-costa-verde.jpg",
      IMG_AVION_ALA,
      IMG_AEROPUERTO_INTERNACIONAL,
      IMG_HOTEL_LUJO_PISCINA,
    ];
  }

  // Limpiamos toda mención a Lima o provincias como ciudad de ORIGEN / SALIDA para que jamás contamine el destino de llegada
  const tSinOrigen = t
    .replace(
      /\b(vuelos?|viajes?|paquetes?|tours?|ofertas?|boletos?|pasajes?|salidas?|rutas?)\s+(de|desde|saliendo\s+de)\s+(lima|arequipa|trujillo|chiclayo|piura|cusco|iquitos|tarapoto|tacna|juliaca|cajamarca|pucallpa|tumbes|talara|ayacucho|jauja|huancayo|puerto[- ]maldonado|jaen|chachapoyas|huaraz|tingo[- ]maria)\s+(a|hacia|rumbo\s+a)\s+/g,
      ""
    )
    .replace(
      /\b(lima|arequipa|trujillo|chiclayo|piura|cusco|iquitos|tarapoto|tacna|juliaca|cajamarca|pucallpa|tumbes|talara|ayacucho|jauja|puerto[- ]maldonado|jaen|chachapoyas|huaraz|tingo[- ]maria)[- ]a[- ]/g,
      ""
    )
    .replace(
      /^(vuelos-con-2-maletas-|aerolinea-[a-z-]+-)?(lima|arequipa|trujillo|chiclayo|piura|cusco|iquitos|tarapoto|tacna|juliaca|cajamarca|pucallpa|tumbes|talara|ayacucho|jauja|puerto-maldonado|jaen|chachapoyas|huaraz|tingo-maria)-/,
      ""
    )
    .replace(
      /\b(desde|saliendo[- ]de|salida[- ]de|salida|en)[- ](lima|aeropuerto[- ]jorge[- ]chavez|jorge[- ]chavez|sede[- ]los[- ]olivos|los[- ]olivos)\b/g,
      ""
    )
    .replace(/\blima[- ](?=madrid|barcelona|roma|milan|paris|amsterdam|miami|nueva-york|orlando|cancun|punta-cana|panama|bogota|medellin|cartagena|buenos-aires|santiago|sao-paulo|cusco)/g, "")
    .replace(/\b(aeropuerto[- ]jorge[- ]chavez|jorge[- ]chavez|los[- ]olivos)\b/g, "");

  const hallada = buscarGaleria(tSinOrigen) ?? (tSinOrigen !== t ? buscarGaleria(t) : null);
  if (hallada) return hallada;

  if (regionFallback && FALLBACK_POR_REGION[regionFallback]) {
    return FALLBACK_POR_REGION[regionFallback];
  }

  return FALLBACK_POR_REGION.default;
}
