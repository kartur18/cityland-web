/**
 * Catálogo Maestro de las 1,000 Super-Landings de Paquetes Migratorios a Europa
 * (España, Italia, Francia, Resto de Europa Schengen, Salidas desde Perú y Dudas Reales)
 *
 * Estructura Comercial Unificada:
 * - 4 Planes Oficiales según la fecha de viaje, todos separando con el 50%. Los precios salen de lib/precios-migratorio.ts
 *   (España y resto de Europa: $699 · $799 · $899 · $999; Italia y Francia: $849 · $949 · $1,049 · $1,149).
 * - Explicación en lenguaje 100% sencillo peruano (sin tecnicismos confusos):
 *   Pasaje de avión de ida + Reserva de regreso + Reserva de hotel + Seguro médico + Preparación paso a paso.
 * - Fotografías 100% reales y coherentes con cada ciudad europea de destino.
 */
import { formatoUSD as usd } from "@/lib/formato-precio";
import {
  TARIFAS_MIGRATORIO_BASE,
  ahorroFrenteARedondo,
  inicialSeparacion,
  listaPreciosPlanes,
  tarifasMigratorio,
  type NivelPlanMigratorio,
  type TarifasMigratorio,
} from "@/lib/precios-migratorio";

export interface PlanSuperLanding {
  id: NivelPlanMigratorio;
  nombre: string;
  etiqueta: string;
  precioUSD: number;
  inicial50USD: number;
  fechasIdeales: string;
  destacado?: boolean;
  colorBadge: string;
  resumen: string;
  incluye: string[];
  waTextoBoton: string;
  waMensaje: string;
}

export interface DatosSuperLandingMigratorio {
  slug: string;
  silo:
    | "espana"
    | "italia"
    | "francia-europa"
    | "salidas-peru"
    | "guias-dudas";
  siloNombre: string;
  pais: string;
  banderaPais: string;
  ciudadDestino: string;
  regionDestino: string;
  aeropuertoLlegada: string;
  codigoRuta: string;
  origenPasajero: string;
  aerolineas: string;
  monumentoDestacado: string;
  imagenHero: string;
  galeriaCiudad: [string, string, string];
  tituloH1: string;
  subtituloHero: string;
  ganchoPeruano: string;
  explicacionIdaYVuelta: {
    pregunta: string;
    respuestaDirecta: string;
    ahorroExplicado: string;
    documentosIncluidos: {
      icono: string;
      titulo: string;
      descripcion: string;
    }[];
  };
  planes: [PlanSuperLanding, PlanSuperLanding, PlanSuperLanding, PlanSuperLanding];
  // Mínimo visible de la página (precio del Plan Promo de su país); el JSON-LD usa este mismo valor.
  precioDesdeUSD: number;
  infoLlegadaCiudad: {
    comoLlegarCentro: string;
    zonasPeruanos: string;
    consejoLocal: string;
  };
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  enlacesRelacionados: {
    titulo: string;
    href: string;
    ciudad: string;
    pais: string;
    precioDesde: number;
  }[];
}

export interface ResumenSuperLanding {
  slug: string;
  silo: DatosSuperLandingMigratorio["silo"];
  siloNombre: string;
  pais: string;
  ciudadDestino: string;
  origenPasajero: string;
  titulo: string;
  subtitulo: string;
  imagenHero: string;
  precioPromo: number;
  precioSmart: number;
  precioPlus: number;
  precioFull: number;
  construirDatos: () => DatosSuperLandingMigratorio;
}

interface ConfigCiudadEuropa {
  slugCiudad: string;
  ciudad: string;
  pais: string;
  bandera: string;
  region: string;
  aeropuerto: string;
  iata: string;
  aerolineas: string;
  monumento: string;
  imagenHero: string;
  galeria: [string, string, string];
  comoLlegarCentro: string;
  zonasPeruanos: string;
  consejoLocal: string;
}

// ── 25 Ciudades de España con Imágenes Reales y Verificadas ──
const CIUDADES_ESPANA: ConfigCiudadEuropa[] = [
  {
    slugCiudad: "madrid",
    ciudad: "Madrid",
    pais: "España",
    bandera: "España",
    region: "Comunidad de Madrid",
    aeropuerto: "Aeropuerto Adolfo Suárez Madrid-Barajas (T4 / T1)",
    iata: "MAD",
    aerolineas: "Iberia · Air Europa · Plus Ultra · LATAM",
    monumento: "Gran Vía y Edificio Metrópolis · Madrid",
    imagenHero: "/images/espana/gran-via-metropolis.jpg",
    galeria: [
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
      "/images/espana/plaza-mayor.jpg",
    ],
    comoLlegarCentro:
      "Desde Madrid-Barajas llegas en 25 minutos al centro en Metro Línea 8, tren Cercanías C1/C10 (hacia Atocha y Chamartín) o Bus Exprés 24 horas.",
    zonasPeruanos:
      "Carabanchel, Vallecas, Usera, Ciudad Lineal, Tetuán, Alcorcón, Leganés, Getafe, Móstoles, Fuenlabrada y Alcalá de Henares.",
    consejoLocal:
      "Al aterrizar en Barajas, ten a la mano tu carpeta impresa con tu boleto de regreso reservado, tu reserva de hotel (o Carta de Invitación) y tu seguro médico.",
  },
  {
    slugCiudad: "barcelona",
    ciudad: "Barcelona",
    pais: "España",
    bandera: "España",
    region: "Cataluña",
    aeropuerto: "Aeropuerto Josep Tarradellas Barcelona-El Prat (T1)",
    iata: "BCN",
    aerolineas: "Iberia · Air Europa · LATAM (conexión rápida o AVE)",
    monumento: "Basílica de la Sagrada Familia · Barcelona",
    imagenHero: "/images/destinos/barcelona.webp",
    galeria: [
      "/images/destinos/barcelona.webp",
      "/images/destinos/badalona.jpg",
      "/images/destinos/hospitalet.jpg",
    ],
    comoLlegarCentro:
      "Desde el Aeropuerto de El Prat llegas en 30 minutos a Plaza Cataluña con el Aerobús A1/A2, tren R2 Nord hacia Barcelona-Sants o Metro L9 Sud.",
    zonasPeruanos:
      "Nou Barris, Sant Andreu, Sants-Montjuïc, Eixample, L'Hospitalet de Llobregat, Badalona, Santa Coloma, Terrassa y Sabadell.",
    consejoLocal:
      "Puedes volar desde Lima directo a Barcelona con 1 conexión corta en Madrid o entrar por Madrid y tomar el tren de alta velocidad AVE (2h 30m a Barcelona-Sants).",
  },
  {
    slugCiudad: "valencia",
    ciudad: "Valencia",
    pais: "España",
    bandera: "España",
    region: "Comunidad Valenciana",
    aeropuerto: "Aeropuerto de Valencia-Manises (VLC) / Estación Joaquín Sorolla",
    iata: "VLC",
    aerolineas: "Iberia · Air Europa (vuelo en conexión o tren AVE 1h 45m)",
    monumento: "Ciudad de las Artes y las Ciencias · Valencia",
    imagenHero: "/images/destinos/valencia-artes.jpg",
    galeria: [
      "/images/destinos/valencia-artes.jpg",
      "/images/destinos/alicante.jpg",
      "/images/destinos/mallorca.jpg",
    ],
    comoLlegarCentro:
      "Desde el Aeropuerto de Manises el Metro Líneas 3 y 5 te deja en el centro de Valencia (Xàtiva / Colón) en solo 20 minutos, o llegas en tren AVE directo desde Madrid.",
    zonasPeruanos:
      "Ruzafa, Benimaclet, Patraix, Torrefiel, Jesús, Mislata, Torrent, Paterna y Burjassot.",
    consejoLocal:
      "Valencia es la tercera ciudad favorita de los peruanos en España por su clima templado todo el año y su costo de alquiler más accesible que Madrid o Barcelona.",
  },
  {
    slugCiudad: "sevilla",
    ciudad: "Sevilla",
    pais: "España",
    bandera: "España",
    region: "Andalucía",
    aeropuerto: "Aeropuerto de Sevilla-San Pablo (SVQ) / Estación Santa Justa",
    iata: "SVQ",
    aerolineas: "Iberia · Air Europa (conexión aérea o tren AVE 2h 30m)",
    monumento: "Plaza de España y La Giralda · Sevilla",
    imagenHero: "/images/destinos/sevilla.jpg",
    galeria: [
      "/images/destinos/sevilla.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "El autobús Especial Aeropuerto (EA) conecta el Aeropuerto de San Pablo con la estación Santa Justa y el centro de Sevilla en 30 minutos.",
    zonasPeruanos:
      "Macarena, Nervión, Triana, Cerro-Amate, Dos Hermanas, Alcalá de Guadaíra y Mairena del Aljarafe.",
    consejoLocal:
      "Tu carpeta migratoria incluye reserva de alojamiento en Sevilla o ajuste a la Carta de Invitación de tu familiar en Andalucía.",
  },
  {
    slugCiudad: "zaragoza",
    ciudad: "Zaragoza",
    pais: "España",
    bandera: "España",
    region: "Aragón",
    aeropuerto: "Estación Zaragoza-Delicias (AVE 1h 15m desde Madrid-Barajas)",
    iata: "ZAZ",
    aerolineas: "Iberia · Air Europa · Plus Ultra + Tren Alta Velocidad",
    monumento: "Basílica del Pilar y Río Ebro · Zaragoza",
    imagenHero: "/images/destinos/zaragoza.jpg",
    galeria: [
      "/images/destinos/zaragoza.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Zaragoza está a solo 1 hora y 15 minutos en tren de alta velocidad desde Madrid, justo a mitad de camino entre Madrid y Barcelona.",
    zonasPeruanos:
      "Delicias, El Rabal, San José, Las Fuentes, Actur y Centro de Zaragoza.",
    consejoLocal:
      "Muchos peruanos eligen Zaragoza por su gran oferta de empleo en logística, industria y servicios y sus alquileres económicos.",
  },
  {
    slugCiudad: "malaga",
    ciudad: "Málaga",
    pais: "España",
    bandera: "España",
    region: "Andalucía (Costa del Sol)",
    aeropuerto: "Aeropuerto de Málaga-Costa del Sol (AGP)",
    iata: "AGP",
    aerolineas: "Iberia · Air Europa (conexión directa desde Lima)",
    monumento: "Puerto de Málaga y Costa del Sol · Málaga",
    imagenHero: "/images/destinos/malaga.jpg",
    galeria: [
      "/images/destinos/malaga.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "El tren Cercanías C1 sale de la misma terminal del aeropuerto de Málaga y te deja en Málaga Centro-Alameda en solo 12 minutos (o hacia Torremolinos, Benalmádena y Fuengirola).",
    zonasPeruanos:
      "Carretera de Cádiz, Cruz de Humilladero, Teatinos, Torremolinos, Benalmádena, Fuengirola y Marbella.",
    consejoLocal:
      "La Costa del Sol tiene altísima demanda de trabajo en hotelería, restaurantes, construcción y cuidado de personas durante todo el año.",
  },
  {
    slugCiudad: "murcia",
    ciudad: "Murcia",
    pais: "España",
    bandera: "España",
    region: "Región de Murcia",
    aeropuerto: "Aeropuerto Internacional Región de Murcia / Estación del Carmen",
    iata: "RMU",
    aerolineas: "Iberia · Air Europa · Plus Ultra",
    monumento: "Catedral de Murcia y Centro Histórico",
    imagenHero: "/images/destinos/murcia.jpg",
    galeria: [
      "/images/destinos/murcia.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Conexión directa desde Madrid en tren AVE hasta la estación Murcia del Carmen o vía el aeropuerto de Alicante-Elche a 45 minutos.",
    zonasPeruanos:
      "El Carmen, Infante Juan Manuel, Espinardo, Molina de Segura, Alcantarilla, Lorca y Cartagena.",
    consejoLocal:
      "Murcia destaca por su clima cálido todo el año, bajo costo de vida y amplia comunidad peruana establecida.",
  },
  {
    slugCiudad: "palma-de-mallorca",
    ciudad: "Palma de Mallorca",
    pais: "España",
    bandera: "España",
    region: "Islas Baleares",
    aeropuerto: "Aeropuerto de Palma de Mallorca – Son Sant Joan (PMI)",
    iata: "PMI",
    aerolineas: "Iberia · Air Europa (vuelo directo Lima → Madrid → Palma)",
    monumento: "Catedral de Mallorca (La Seu) y Bahía de Palma",
    imagenHero: "/images/destinos/mallorca.jpg",
    galeria: [
      "/images/destinos/mallorca.jpg",
      "/images/destinos/tenerife.jpg",
      "/images/destinos/valencia-artes.jpg",
    ],
    comoLlegarCentro:
      "La línea A1 de autobús EMT conecta el Aeropuerto de Son Sant Joan con Plaza de España en el centro de Palma en 15 minutos.",
    zonasPeruanos:
      "Pere Garau, Son Gotleu, Llevant, Ponent, Inca, Manacor, Calvià y Alcúdia.",
    consejoLocal:
      "Al emitir tu boleto en un solo código hasta Palma de Mallorca (PMI), tus maletas van directo desde Lima y tu hotel queda registrado en la isla.",
  },
  {
    slugCiudad: "bilbao",
    ciudad: "Bilbao",
    pais: "España",
    bandera: "España",
    region: "País Vasco",
    aeropuerto: "Aeropuerto Internacional de Bilbao – Loiu (BIO)",
    iata: "BIO",
    aerolineas: "Iberia · Air Europa (conexión rápida desde Madrid)",
    monumento: "Museo Guggenheim y Ría de Bilbao",
    imagenHero: "/images/destinos/bilbao-guggenheim.jpg",
    galeria: [
      "/images/destinos/bilbao-guggenheim.jpg",
      "/images/destinos/vitoria.jpg",
      "/images/destinos/gijon.jpg",
    ],
    comoLlegarCentro:
      "El autobús Bizkaibus A3247 sale cada 15 minutos desde la terminal del Aeropuerto de Bilbao y te deja en Plaza Moyúa y Bilbao Intermodal en 20 minutos.",
    zonasPeruanos:
      "Deusto, Santutxu, Rekalde, Abando, Barakaldo, Getxo, Portugalete y Santurtzi.",
    consejoLocal:
      "El País Vasco cuenta con los sueldos promedio más altos de España y una comunidad peruana muy unida en Bilbao y Barakaldo.",
  },
  {
    slugCiudad: "alicante",
    ciudad: "Alicante",
    pais: "España",
    bandera: "España",
    region: "Comunidad Valenciana (Costa Blanca)",
    aeropuerto: "Aeropuerto de Alicante-Elche Miguel Hernández (ALC)",
    iata: "ALC",
    aerolineas: "Iberia · Air Europa (vuelo en conexión o AVE 2h 15m)",
    monumento: "Castillo de Santa Bárbara y Puerto de Alicante",
    imagenHero: "/images/destinos/alicante.jpg",
    galeria: [
      "/images/destinos/alicante.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "La línea de autobús C-6 sale cada 20 minutos desde el aeropuerto y llega al centro de Alicante y a la estación de trenes en 20 minutos.",
    zonasPeruanos:
      "Carolinas, Florida, Campoamor, San Blas, San Vicente del Raspeig, Benidorm, Torrevieja y Elche.",
    consejoLocal:
      "Alicante y la Costa Blanca tienen gran movimiento comercial y turístico durante todo el año.",
  },
  {
    slugCiudad: "valladolid",
    ciudad: "Valladolid",
    pais: "España",
    bandera: "España",
    region: "Castilla y León",
    aeropuerto: "Estación Valladolid-Campo Grande (AVE 55 min desde Madrid)",
    iata: "VLL",
    aerolineas: "Iberia · Air Europa · Plus Ultra + Tren AVE",
    monumento: "Plaza Mayor y Campo Grande · Valladolid",
    imagenHero: "/images/destinos/valladolid.jpg",
    galeria: [
      "/images/destinos/valladolid.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Desde Madrid llegas a Valladolid en solo 55 minutos en tren de alta velocidad desde la estación de Chamartín.",
    zonasPeruanos:
      "Delicias, Rondilla, Parquesol, Pajarillos, Huerta del Rey y Centro de Valladolid.",
    consejoLocal:
      "Valladolid es ideal para familias peruanas que buscan tranquilidad, colegios cercanos y alquileres a mitad de precio que en Madrid.",
  },
  {
    slugCiudad: "vigo",
    ciudad: "Vigo",
    pais: "España",
    bandera: "España",
    region: "Galicia (Pontevedra)",
    aeropuerto: "Aeropuerto de Vigo-Peinador (VGO)",
    iata: "VGO",
    aerolineas: "Iberia · Air Europa (conexión directa desde Madrid)",
    monumento: "Ría de Vigo y Casco Vello · Galicia",
    imagenHero: "/images/destinos/vigo.jpg",
    galeria: [
      "/images/destinos/vigo.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Desde el Aeropuerto de Peinador la línea L9A de Vitrasa te lleva directo al centro de Vigo y Plaza América en 25 minutos.",
    zonasPeruanos:
      "Coia, Teis, O Calvario, As Travesas, Bouzas y Centro de Vigo.",
    consejoLocal:
      "Vigo es el motor industrial y portuario de Galicia, con alta demanda laboral y gente muy hospitalaria con el migrante peruano.",
  },
  {
    slugCiudad: "gijon",
    ciudad: "Gijón",
    pais: "España",
    bandera: "España",
    region: "Principado de Asturias",
    aeropuerto: "Aeropuerto de Asturias (OVD) / Estación Gijón Sanz Crespo",
    iata: "OVD",
    aerolineas: "Iberia · Air Europa + Conexión a Asturias",
    monumento: "Playa de San Lorenzo y Cimavilla · Gijón",
    imagenHero: "/images/destinos/gijon.jpg",
    galeria: [
      "/images/destinos/gijon.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "El autobús ALSA directo desde el Aeropuerto de Asturias llega al centro de Gijón en 35 minutos.",
    zonasPeruanos:
      "El Llano, La Arena, Laviada,La Calzada, Pumarín y Coto.",
    consejoLocal:
      "Gijón ofrece una calidad de vida excelente, seguridad y trámites municipales rápidos para empadronamiento.",
  },
  {
    slugCiudad: "hospitalet",
    ciudad: "L'Hospitalet de Llobregat",
    pais: "España",
    bandera: "España",
    region: "Barcelona · Cataluña",
    aeropuerto: "Aeropuerto Barcelona-El Prat (a 12 min en Metro L9)",
    iata: "BCN",
    aerolineas: "Iberia · Air Europa · LATAM",
    monumento: "Plaza Europa y Granvia · L'Hospitalet (Barcelona)",
    imagenHero: "/images/destinos/hospitalet.jpg",
    galeria: [
      "/images/destinos/hospitalet.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Desde el Aeropuerto de El Prat llegas en solo 12 minutos en Metro Línea 9 Sud o bus L46 directo a L'Hospitalet.",
    zonasPeruanos:
      "Collblanc, La Torrassa, Pubilla Cases, Florida, Santa Eulàlia y Bellvitge.",
    consejoLocal:
      "Collblanc y La Torrassa en L'Hospitalet concentran una de las mayores comunidades peruanas de toda Cataluña, con restaurantes y envíos peruanos en cada cuadra.",
  },
  {
    slugCiudad: "a-coruna",
    ciudad: "A Coruña",
    pais: "España",
    bandera: "España",
    region: "Galicia",
    aeropuerto: "Aeropuerto de A Coruña – Alvedro (LCG)",
    iata: "LCG",
    aerolineas: "Iberia · Air Europa (vuelo en conexión desde Lima)",
    monumento: "Torre de Hércules y Plaza de María Pita · A Coruña",
    imagenHero: "/images/destinos/a-coruna.jpg",
    galeria: [
      "/images/destinos/a-coruna.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "La línea 4051 de autobús conecta el Aeropuerto de Alvedro con el centro de A Coruña (Puerta Real / Obelisco) en 20 minutos.",
    zonasPeruanos:
      "Agra del Orzán, Os Mallos, Cuatro Caminos, Monte Alto, Los Rosales y Arteixo.",
    consejoLocal:
      "A Coruña y su área metropolitana (sede de grandes empresas textiles y portuarias) tienen una comunidad peruana muy activa y estable.",
  },
  {
    slugCiudad: "vitoria",
    ciudad: "Vitoria-Gasteiz",
    pais: "España",
    bandera: "España",
    region: "País Vasco (Álava)",
    aeropuerto: "Aeropuerto de Bilbao / Estación Vitoria-Gasteiz",
    iata: "VIT",
    aerolineas: "Iberia · Air Europa · Plus Ultra",
    monumento: "Plaza de la Virgen Blanca · Vitoria-Gasteiz",
    imagenHero: "/images/destinos/vitoria.jpg",
    galeria: [
      "/images/destinos/vitoria.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Conectada por autobús directo desde el Aeropuerto de Bilbao en 45 minutos y por tren Alvia desde Madrid-Chamartín.",
    zonasPeruanos:
      "Zaramaga, Coronación, Lakua, Salburua, Zabalgana y Judimendi.",
    consejoLocal:
      "Capital del País Vasco, reconocida por su calidad de vida, parques y oportunidades laborales en industria y servicios.",
  },
  {
    slugCiudad: "granada",
    ciudad: "Granada",
    pais: "España",
    bandera: "España",
    region: "Andalucía",
    aeropuerto: "Aeropuerto Federico García Lorca Granada (GRX) / AVE",
    iata: "GRX",
    aerolineas: "Iberia · Air Europa",
    monumento: "La Alhambra y Mirador de San Nicolás · Granada",
    imagenHero: "/images/destinos/granada.jpg",
    galeria: [
      "/images/destinos/granada.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "El autobús línea 245 conecta el aeropuerto de Granada con Gran Vía de Colón y la estación de trenes en 30 minutos.",
    zonasPeruanos:
      "Zaidín, Chana, Ronda, Beiro, Armilla y Maracena.",
    consejoLocal:
      "Granada combina un costo de vida muy económico con gran actividad en turismo, hostelería y estudios.",
  },
  {
    slugCiudad: "elche",
    ciudad: "Elche",
    pais: "España",
    bandera: "España",
    region: "Alicante · Comunidad Valenciana",
    aeropuerto: "Aeropuerto de Alicante-Elche (a solo 15 min)",
    iata: "ALC",
    aerolineas: "Iberia · Air Europa",
    monumento: "Palmeral de Elche y Basílica de Santa María",
    imagenHero: "/images/destinos/elche.jpg",
    galeria: [
      "/images/destinos/elche.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "El Aeropuerto de Alicante-Elche está dentro del propio municipio de Elche; la línea 1A/1B te lleva al centro en 15 minutos.",
    zonasPeruanos:
      "Carrús, Altabix, El Pla, Sector Quinto y Centro de Elche.",
    consejoLocal:
      "Elche es una ciudad tranquila, soleada y con alquileres mucho más cómodos que las grandes capitales.",
  },
  {
    slugCiudad: "oviedo",
    ciudad: "Oviedo",
    pais: "España",
    bandera: "España",
    region: "Principado de Asturias",
    aeropuerto: "Aeropuerto de Asturias (OVD) / Estación Oviedo-Uría",
    iata: "OVD",
    aerolineas: "Iberia · Air Europa",
    monumento: "Catedral de Oviedo y Casco Antiguo · Asturias",
    imagenHero: "/images/destinos/oviedo.jpg",
    galeria: [
      "/images/destinos/oviedo.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Ahora conectada en tren de alta velocidad AVE directo desde Madrid-Chamartín en poco más de 3 horas, o en vuelo al Aeropuerto de Asturias.",
    zonasPeruanos:
      "Ciudad Naranco, Pumarín, Teatinos, La Corredoria y Vallobín.",
    consejoLocal:
      "Oviedo es considerada una de las ciudades más limpias y seguras de toda España para establecerse en familia.",
  },
  {
    slugCiudad: "badalona",
    ciudad: "Badalona",
    pais: "España",
    bandera: "España",
    region: "Barcelona · Cataluña",
    aeropuerto: "Aeropuerto Barcelona-El Prat (Metro L2 Badalona Pompeu Fabra)",
    iata: "BCN",
    aerolineas: "Iberia · Air Europa · LATAM",
    monumento: "Pont del Petroli y Paseo Marítimo · Badalona",
    imagenHero: "/images/destinos/badalona.jpg",
    galeria: [
      "/images/destinos/badalona.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Conectada directamente con el centro de Barcelona por la Línea 2 del Metro (morada) y tren Rodalies R1 frente al mar.",
    zonasPeruanos:
      "La Salut, Llefià, Sant Roc, Gorg, Progrés y Centro de Badalona.",
    consejoLocal:
      "Badalona te permite vivir junto al mar y trabajar en Barcelona en 20 minutos de metro pagando menos alquiler.",
  },
  {
    slugCiudad: "cartagena-espana",
    ciudad: "Cartagena (Murcia)",
    pais: "España",
    bandera: "España",
    region: "Región de Murcia",
    aeropuerto: "Aeropuerto Región de Murcia / Estación de Cartagena",
    iata: "RMU",
    aerolineas: "Iberia · Air Europa · Plus Ultra",
    monumento: "Puerto de Cartagena y Teatro Romano · España",
    imagenHero: "/images/destinos/cartagena-espana.jpg",
    galeria: [
      "/images/destinos/cartagena-espana.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Conexión directa en tren o autobús desde Madrid y a 25 minutos del Aeropuerto Internacional de la Región de Murcia.",
    zonasPeruanos:
      "Ensanche, Barrio de la Concepción, San Antón, Los Dolores y Santa Lucía.",
    consejoLocal:
      "Importante ciudad portuaria y naval de España con clima mediterráneo y alquileres muy accesibles.",
  },
  {
    slugCiudad: "terrassa",
    ciudad: "Terrassa",
    pais: "España",
    bandera: "España",
    region: "Barcelona · Cataluña",
    aeropuerto: "Aeropuerto Barcelona-El Prat (FGC S1 / Rodalies R4)",
    iata: "BCN",
    aerolineas: "Iberia · Air Europa · LATAM",
    monumento: "Parc de Vallparadís y Masia Freixa · Terrassa",
    imagenHero: "/images/destinos/terrassa.jpg",
    galeria: [
      "/images/destinos/terrassa.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Conectada con Plaza Cataluña en Barcelona mediante los Ferrocarriles de la Generalitat (FGC S1) y Rodalies R4 en 40 minutos.",
    zonasPeruanos:
      "Ca n'Anglada, Sant Pere Nord, La Maurina, Can Aurell y Centro de Terrassa.",
    consejoLocal:
      "Terrassa es una de las ciudades preferidas por familias peruanas en Cataluña por sus amplios pisos y cercanía a Barcelona.",
  },
  {
    slugCiudad: "jerez",
    ciudad: "Jerez de la Frontera",
    pais: "España",
    bandera: "España",
    region: "Cádiz · Andalucía",
    aeropuerto: "Aeropuerto de Jerez (XRY) / Estación de Jerez",
    iata: "XRY",
    aerolineas: "Iberia · Air Europa",
    monumento: "Alcázar de Jerez y Plaza del Arenal · Andalucía",
    imagenHero: "/images/destinos/jerez.jpg",
    galeria: [
      "/images/destinos/jerez.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "El aeropuerto de Jerez tiene estación de tren Cercanías C1 propia que te deja en el centro de Jerez en 9 minutos.",
    zonasPeruanos:
      "Centro, Delicias, La Granja, Sur y conexión directa con Cádiz y El Puerto de Santa María.",
    consejoLocal:
      "Excelente puerta de entrada para quienes viajan a la provincia de Cádiz y el sur de Andalucía.",
  },
  {
    slugCiudad: "sabadell",
    ciudad: "Sabadell",
    pais: "España",
    bandera: "España",
    region: "Barcelona · Cataluña",
    aeropuerto: "Aeropuerto Barcelona-El Prat (FGC S2 / Rodalies R4)",
    iata: "BCN",
    aerolineas: "Iberia · Air Europa · LATAM",
    monumento: "Passeig de la Plaça Major y Torre de l'Aigua · Sabadell",
    imagenHero: "/images/destinos/sabadell.jpg",
    galeria: [
      "/images/destinos/sabadell.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "Los trenes FGC S2 y Rodalies R4 te llevan del centro de Barcelona al corazón de Sabadell en 35 minutos.",
    zonasPeruanos:
      "Creu Alta, Ca n'Oriac, Gràcia, Can Rull, Concordia y Centro de Sabadell.",
    consejoLocal:
      "Sabadell cuenta con gran actividad comercial e industrial en el Vallès Occidental y fuerte presencia peruana.",
  },
  {
    slugCiudad: "pamplona",
    ciudad: "Pamplona",
    pais: "España",
    bandera: "España",
    region: "Navarra",
    aeropuerto: "Aeropuerto de Pamplona-Noáin (PNA) / Estación Alvia",
    iata: "PNA",
    aerolineas: "Iberia · Air Europa",
    monumento: "Plaza del Castillo y Ayuntamiento · Pamplona",
    imagenHero: "/images/destinos/pamplona.jpg",
    galeria: [
      "/images/destinos/pamplona.jpg",
      "/images/espana/palacio-real.jpg",
      "/images/espana/puerta-de-alcala.jpg",
    ],
    comoLlegarCentro:
      "A 15 minutos del Aeropuerto de Noáin en autobús urbano o a 3 horas en tren directo Alvia desde Madrid.",
    zonasPeruanos:
      "Rochapea, Milagrosa, San Juan, Iturrama, Txantrea, Barañáin y Burlada.",
    consejoLocal:
      "Navarra destaca por su excelente sistema de salud, educación pública y altos salarios en industria y servicios.",
  },
];

// ── 25 Ciudades de Italia con Imágenes Reales y Verificadas ──
const CIUDADES_ITALIA: ConfigCiudadEuropa[] = [
  {
    slugCiudad: "milan",
    ciudad: "Milán",
    pais: "Italia",
    bandera: "Italia",
    region: "Lombardía (Norte de Italia)",
    aeropuerto: "Aeropuerto de Milán-Malpensa (MXP) / Milán-Linate (LIN)",
    iata: "MXP",
    aerolineas: "Iberia · Air Europa · KLM · Air France · LATAM",
    monumento: "Catedral del Duomo y Galleria Vittorio Emanuele II · Milán",
    imagenHero: "/images/destinos/milan.webp",
    galeria: [
      "/images/destinos/milan.webp",
      "/images/destinos/como.jpg",
      "/images/destinos/monza.jpg",
    ],
    comoLlegarCentro:
      "El tren Malpensa Express te lleva en 40 minutos a Milano Centrale o Milano Cadorna; desde Linate la Línea M4 del metro llega al centro en 15 minutos.",
    zonasPeruanos:
      "Via Padova, Loreto, Turro, Corvetto, San Siro, Sesto San Giovanni, Cinisello Balsamo y Cologno Monzese.",
    consejoLocal:
      "Milán es la capital de la comunidad peruana en Italia (+50,000 peruanos). Puedes volar directo a Milán o entrar por Madrid-Barajas con tu carpeta migratoria completa.",
  },
  {
    slugCiudad: "roma",
    ciudad: "Roma",
    pais: "Italia",
    bandera: "Italia",
    region: "Lazio (Capital de Italia)",
    aeropuerto: "Aeropuerto Internacional Roma-Fiumicino Leonardo da Vinci (FCO)",
    iata: "FCO",
    aerolineas: "Iberia · Air Europa · KLM · Air France · ITA Airways",
    monumento: "Coliseo Romano y Fontana di Trevi · Roma",
    imagenHero: "/images/destinos/roma.jpg",
    galeria: [
      "/images/destinos/roma.jpg",
      "/images/destinos/florencia.jpg",
      "/images/destinos/venecia.jpg",
    ],
    comoLlegarCentro:
      "El tren Leonardo Express sale cada 15 minutos desde el Aeropuerto de Fiumicino y te deja en la estación Roma Termini en 32 minutos sin paradas.",
    zonasPeruanos:
      "Esquilino (Termini), San Giovanni, Tuscolano, Tiburtina, Ostia, Centocelle y Monte Mario.",
    consejoLocal:
      "Si viajas con Lettera di Invito de un familiar en Roma, recuerda registrar la Dichiarazione di Ospitalità dentro de las primeras 48 horas.",
  },
  {
    slugCiudad: "turin",
    ciudad: "Turín",
    pais: "Italia",
    bandera: "Italia",
    region: "Piamonte",
    aeropuerto: "Aeropuerto de Turín-Caselle (TRN) / Estación Porta Nuova",
    iata: "TRN",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Mole Antonelliana y Piazza Castello · Turín",
    imagenHero: "/images/destinos/turin.jpg",
    galeria: [
      "/images/destinos/turin.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "Desde el Aeropuerto de Turín-Caselle llegas en 25 minutos a las estaciones Porta Susa y Porta Nuova en tren o bus Arriva.",
    zonasPeruanos:
      "Barriera di Milano, Aurora, San Salvario, Santa Rita, Mirafiori, Lingotto y Moncalieri.",
    consejoLocal:
      "Turín alberga la segunda comunidad peruana más grande de Italia, con alquileres mucho más cómodos que en Milán.",
  },
  {
    slugCiudad: "florencia",
    ciudad: "Florencia",
    pais: "Italia",
    bandera: "Italia",
    region: "Toscana",
    aeropuerto: "Aeropuerto de Florencia-Peretola (FLR) / Estación Santa Maria Novella",
    iata: "FLR",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Catedral Santa Maria del Fiore (Duomo) y Ponte Vecchio · Florencia",
    imagenHero: "/images/destinos/florencia.jpg",
    galeria: [
      "/images/destinos/florencia.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El tranvía Línea T2 sale de la puerta del Aeropuerto de Florencia y llega a la estación central Santa Maria Novella en solo 20 minutos.",
    zonasPeruanos:
      "Novoli, Rifredi, Isolotto, Campo di Marte, Scandicci, Sesto Fiorentino y Prato.",
    consejoLocal:
      "Florencia y toda la Toscana tienen una comunidad peruana histórica muy consolidada en turismo, comercio y servicios.",
  },
  {
    slugCiudad: "bolonia",
    ciudad: "Bolonia",
    pais: "Italia",
    bandera: "Italia",
    region: "Emilia-Romaña",
    aeropuerto: "Aeropuerto de Bolonia Guglielmo Marconi (BLQ)",
    iata: "BLQ",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Piazza Maggiore y Las Dos Torres · Bolonia",
    imagenHero: "/images/destinos/bolonia.jpg",
    galeria: [
      "/images/destinos/bolonia.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El tren monorriel Marconi Express conecta el Aeropuerto de Bolonia con la estación Bologna Centrale en solo 7 minutos.",
    zonasPeruanos:
      "Bolognina, San Donato, Navile, Porto-Saragozza y Casalecchio di Reno.",
    consejoLocal:
      "Bolonia es el nudo ferroviario más importante del norte de Italia y una de las regiones con menor desempleo del país.",
  },
  {
    slugCiudad: "genova",
    ciudad: "Génova",
    pais: "Italia",
    bandera: "Italia",
    region: "Liguria",
    aeropuerto: "Aeropuerto de Génova-Cristoforo Colombo (GOA) / Piazza Principe",
    iata: "GOA",
    aerolineas: "Iberia · KLM · Air France",
    monumento: "Puerto Antiguo y Boccadasse · Génova",
    imagenHero: "/images/destinos/genova.jpg",
    galeria: [
      "/images/destinos/genova.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El bus Volabus conecta el Aeropuerto de Génova con las estaciones Genova Piazza Principe y Genova Brignole en 25 minutos.",
    zonasPeruanos:
      "Sampierdarena, Cornigliano, Rivarolo, Centro Est, Marassi y San Fruttuoso.",
    consejoLocal:
      "Génova cuenta con una de las comunidades peruanas más antiguas y numerosas de Italia, especialmente en Sampierdarena.",
  },
  {
    slugCiudad: "napoles",
    ciudad: "Nápoles",
    pais: "Italia",
    bandera: "Italia",
    region: "Campania",
    aeropuerto: "Aeropuerto Internacional de Nápoles-Capodichino (NAP)",
    iata: "NAP",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Piazza del Plebiscito y Bahía de Nápoles",
    imagenHero: "/images/destinos/napoles.jpg",
    galeria: [
      "/images/destinos/napoles.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El autobús Alibus sale cada 15 minutos desde el Aeropuerto de Capodichino y llega a Napoli Centrale (Piazza Garibaldi) en 15 minutos.",
    zonasPeruanos:
      "Centro Storico, Vomero, Chiaia, Fuorigrotta y Piazza Garibaldi.",
    consejoLocal:
      "También puedes llegar a Nápoles en 1 hora y 10 minutos en tren rápido Frecciarossa desde Roma Termini.",
  },
  {
    slugCiudad: "venecia",
    ciudad: "Venecia",
    pais: "Italia",
    bandera: "Italia",
    region: "Véneto",
    aeropuerto: "Aeropuerto Internacional de Venecia Marco Polo (VCE)",
    iata: "VCE",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Gran Canal y Plaza de San Marcos · Venecia",
    imagenHero: "/images/destinos/venecia.jpg",
    galeria: [
      "/images/destinos/venecia.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El bus ATVO o ACTV línea 5 conecta el Aeropuerto Marco Polo con Venezia-Mestre y Piazzale Roma en 20 minutos.",
    zonasPeruanos:
      "Mestre, Marghera, Favaro Veneto, Padua y Treviso.",
    consejoLocal:
      "La mayoría de residentes y trabajadores en Venecia viven en Mestre (a 10 minutos en tren o tranvía de la isla) con gran oferta laboral hotelera.",
  },
  {
    slugCiudad: "verona",
    ciudad: "Verona",
    pais: "Italia",
    bandera: "Italia",
    region: "Véneto",
    aeropuerto: "Aeropuerto de Verona-Villafranca (VRN) / Porta Nuova",
    iata: "VRN",
    aerolineas: "Iberia · KLM · Air France",
    monumento: "Arena de Verona y Piazza Bra · Véneto",
    imagenHero: "/images/destinos/verona.jpg",
    galeria: [
      "/images/destinos/verona.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El Verona Airlink conecta el aeropuerto con la estación de trenes Verona Porta Nuova en 15 minutos.",
    zonasPeruanos:
      "Borgo Roma, Veronetta, San Zeno, Borgo Milano y Golosine.",
    consejoLocal:
      "Verona está estratégicamente ubicada entre Milán y Venecia, con fuerte industria agroalimentaria y logística.",
  },
  {
    slugCiudad: "bergamo",
    ciudad: "Bérgamo",
    pais: "Italia",
    bandera: "Italia",
    region: "Lombardía",
    aeropuerto: "Aeropuerto de Bérgamo-Orio al Serio (BGY) / Milán",
    iata: "BGY",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Città Alta y Piazza Vecchia · Bérgamo",
    imagenHero: "/images/destinos/bergamo.jpg",
    galeria: [
      "/images/destinos/bergamo.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "A 15 minutos del aeropuerto Orio al Serio en bus ATB Línea 1 y a 45 minutos en tren de Milán.",
    zonasPeruanos:
      "Malpensata, Boccaleone, Borgo Palazzo, Colognola, Seriate y Dalmine.",
    consejoLocal:
      "Bérgamo tiene una gran comunidad peruana y su propio Consulado Honorario y asociaciones culturales.",
  },
  {
    slugCiudad: "brescia",
    ciudad: "Brescia",
    pais: "Italia",
    bandera: "Italia",
    region: "Lombardía",
    aeropuerto: "Aeropuerto de Milán-Linate / Bérgamo + Tren 35 min",
    iata: "MXP",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Piazza della Loggia y Duomo · Brescia",
    imagenHero: "/images/destinos/brescia.jpg",
    galeria: [
      "/images/destinos/brescia.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "Desde Milán llegas a la estación de Brescia en solo 36 minutos en tren Frecciarossa.",
    zonasPeruanos:
      "San Faustino, Carmine, Lamarmora, Porta Milano y Via Milano.",
    consejoLocal:
      "Brescia es una de las capitales industriales de Italia con alta demanda de mano de obra técnica y servicios.",
  },
  {
    slugCiudad: "modena",
    ciudad: "Módena",
    pais: "Italia",
    bandera: "Italia",
    region: "Emilia-Romaña",
    aeropuerto: "Aeropuerto de Bolonia (BLQ) a 30 min",
    iata: "BLQ",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Piazza Grande y Ghirlandina · Módena",
    imagenHero: "/images/destinos/modena.jpg",
    galeria: [
      "/images/destinos/modena.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El autobús Aerbus conecta directamente el Aeropuerto de Bolonia con el centro de Módena en 40 minutos.",
    zonasPeruanos:
      "Crocetta, Buon Pastore, San Faustino, Madonnina y Carpi.",
    consejoLocal:
      "Módena y Emilia-Romaña destacan por sus altos ingresos familiares y fuerte industria automotriz y alimentaria.",
  },
  {
    slugCiudad: "parma",
    ciudad: "Parma",
    pais: "Italia",
    bandera: "Italia",
    region: "Emilia-Romaña",
    aeropuerto: "Aeropuerto de Milán / Bolonia + Tren directo",
    iata: "BLQ",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Piazza Duomo y Baptisterio · Parma",
    imagenHero: "/images/destinos/parma.jpg",
    galeria: [
      "/images/destinos/parma.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "A 50 minutos en tren desde Milán o desde Bolonia directo a la estación central de Parma.",
    zonasPeruanos:
      "Oltretorrente, Pablo, San Leonardo, Lubiana y Montanara.",
    consejoLocal:
      "Parma es una ciudad ordenada, segura y con gran oferta de empleo en el sector alimentario y logístico.",
  },
  {
    slugCiudad: "padua",
    ciudad: "Padua",
    pais: "Italia",
    bandera: "Italia",
    region: "Véneto",
    aeropuerto: "Aeropuerto de Venecia Marco Polo (VCE) a 30 min",
    iata: "VCE",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Prato della Valle y Basílica de San Antonio · Padua",
    imagenHero: "/images/destinos/padua.jpg",
    galeria: [
      "/images/destinos/padua.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El autobús directo Busitalia conecta el Aeropuerto de Venecia con la estación de Padua en 35 minutos.",
    zonasPeruanos:
      "Arcella, Guizza, Stanga, Sacra Famiglia y Centro de Padua.",
    consejoLocal:
      "El barrio de Arcella en Padua reúne a una gran comunidad de familias peruanas en la región del Véneto.",
  },
  {
    slugCiudad: "prato",
    ciudad: "Prato",
    pais: "Italia",
    bandera: "Italia",
    region: "Toscana (a 20 min de Florencia)",
    aeropuerto: "Aeropuerto de Florencia-Peretola (FLR)",
    iata: "FLR",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Castillo del Emperador y Piazza del Duomo · Prato",
    imagenHero: "/images/destinos/prato.jpg",
    galeria: [
      "/images/destinos/prato.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "Desde la estación de Florencia Santa Maria Novella llegas a Prato Centrale en solo 20 minutos en tren regional.",
    zonasPeruanos:
      "Soccorso, San Paolo, Macrolotto, Chiesanuova y Prato Porta al Serraglio.",
    consejoLocal:
      "Prato es el mayor polo textil de Italia y está a solo 15 minutos del Consulado General del Perú en Florencia.",
  },
  {
    slugCiudad: "pisa",
    ciudad: "Pisa",
    pais: "Italia",
    bandera: "Italia",
    region: "Toscana",
    aeropuerto: "Aeropuerto Internacional de Pisa Galileo Galilei (PSA)",
    iata: "PSA",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Torre Inclinada y Piazza dei Miracoli · Pisa",
    imagenHero: "/images/destinos/pisa.jpg",
    galeria: [
      "/images/destinos/pisa.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El tren automático Pisa Mover lleva de la terminal del aeropuerto a la estación Pisa Centrale en solo 5 minutos.",
    zonasPeruanos:
      "Porta Fiorentina, San Marco, Cisanello, Porta a Mare y Livorno.",
    consejoLocal:
      "Pisa es una excelente puerta de entrada aérea a toda la costa toscana y Florencia.",
  },
  {
    slugCiudad: "bari",
    ciudad: "Bari",
    pais: "Italia",
    bandera: "Italia",
    region: "Apulia (Puglia)",
    aeropuerto: "Aeropuerto de Bari-Palese Karol Wojtyła (BRI)",
    iata: "BRI",
    aerolineas: "Iberia · ITA Airways · KLM",
    monumento: "Basílica de San Nicolás y Bari Vecchia",
    imagenHero: "/images/destinos/bari.jpg",
    galeria: [
      "/images/destinos/bari.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El tren Ferrotramviaria conecta el Aeropuerto de Bari con la estación Bari Centrale en 15 minutos.",
    zonasPeruanos:
      "Libertà, Madonnella, Murat, Carrassi y San Pasquale.",
    consejoLocal:
      "Bari tiene una comunidad peruana muy acogedora en el sur de Italia y un costo de vida súper económico.",
  },
  {
    slugCiudad: "catania",
    ciudad: "Catania",
    pais: "Italia",
    bandera: "Italia",
    region: "Sicilia",
    aeropuerto: "Aeropuerto de Catania-Fontanarossa (CTA)",
    iata: "CTA",
    aerolineas: "Iberia · KLM · ITA Airways",
    monumento: "Piazza del Duomo y Volcán Etna · Catania",
    imagenHero: "/images/destinos/catania.jpg",
    galeria: [
      "/images/destinos/catania.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El bus Alibus AMT conecta el Aeropuerto de Fontanarossa con el centro de Catania y la estación central en 20 minutos.",
    zonasPeruanos:
      "Borgo-Sanzio, Centro Storico, Picanello y Corso Italia.",
    consejoLocal:
      "Sicilia ofrece clima cálido todo el año y mucha demanda en turismo, gastronomía y asistencia familiar.",
  },
  {
    slugCiudad: "palermo",
    ciudad: "Palermo",
    pais: "Italia",
    bandera: "Italia",
    region: "Sicilia",
    aeropuerto: "Aeropuerto de Palermo Falcone-Borsellino (PMO)",
    iata: "PMO",
    aerolineas: "Iberia · ITA Airways · Air France",
    monumento: "Catedral de Palermo y Teatro Massimo · Sicilia",
    imagenHero: "/images/destinos/palermo.jpg",
    galeria: [
      "/images/destinos/palermo.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El tren Trinacria Express y el bus Prestia e Comandè te llevan del aeropuerto a Palermo Centrale en 40 minutos.",
    zonasPeruanos:
      "Politeama, Libertà, Zisa, Noce y Centro de Palermo.",
    consejoLocal:
      "Tu carpeta migratoria cubre tanto el ingreso por Madrid o Roma como tu conexión doméstica a Palermo.",
  },
  {
    slugCiudad: "perugia",
    ciudad: "Perugia",
    pais: "Italia",
    bandera: "Italia",
    region: "Umbría",
    aeropuerto: "Aeropuerto de Roma-Fiumicino / Florencia + Tren directo",
    iata: "FCO",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Fontana Maggiore y Corso Vannucci · Perugia",
    imagenHero: "/images/destinos/perugia.jpg",
    galeria: [
      "/images/destinos/perugia.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "Conectada en tren directo y autobús Sulga desde el Aeropuerto de Roma-Fiumicino y Florencia.",
    zonasPeruanos:
      "Fontivegge, Madonna Alta, Elce, Ponte San Giovanni y Foligno.",
    consejoLocal:
      "Perugia tiene una comunidad peruana muy unida en el corazón de Italia, con alquileres económicos y ambiente tranquilo.",
  },
  {
    slugCiudad: "ancona",
    ciudad: "Ancona",
    pais: "Italia",
    bandera: "Italia",
    region: "Marcas (Marche)",
    aeropuerto: "Aeropuerto de las Marcas (AOI) / Bolonia",
    iata: "AOI",
    aerolineas: "Iberia · KLM · ITA Airways",
    monumento: "Puerto de Ancona y Passetto · Costa Adriática",
    imagenHero: "/images/destinos/ancona.jpg",
    galeria: [
      "/images/destinos/ancona.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "El Raffaello Aerobus y la estación Castelferretti conectan el aeropuerto con Ancona Centrale en 20 minutos.",
    zonasPeruanos:
      "Piano San Lazzaro, Archi, Adriatico, Falconara Marittima y Jesi.",
    consejoLocal:
      "La región de las Marcas ofrece trabajo estable en manufactura, calzado, puerto y servicios.",
  },
  {
    slugCiudad: "rimini",
    ciudad: "Rímini",
    pais: "Italia",
    bandera: "Italia",
    region: "Emilia-Romaña",
    aeropuerto: "Aeropuerto de Bolonia (BLQ) + Tren 50 min",
    iata: "BLQ",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Puente de Tiberio y Riviera de Rímini",
    imagenHero: "/images/destinos/rimini.jpg",
    galeria: [
      "/images/destinos/rimini.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "Desde el Aeropuerto de Bolonia el Shuttle Italy Airport te deja directo en la estación de Rímini.",
    zonasPeruanos:
      "Marina Centro, Bellariva, Miramare, Viserba y Riccione.",
    consejoLocal:
      "Rímini es uno de los mayores centros hoteleros y de ferias de toda Italia.",
  },
  {
    slugCiudad: "monza",
    ciudad: "Monza",
    pais: "Italia",
    bandera: "Italia",
    region: "Lombardía (a 15 min de Milán)",
    aeropuerto: "Aeropuerto de Milán-Linate (LIN) / Malpensa (MXP)",
    iata: "MXP",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Villa Real y Duomo de Monza · Lombardía",
    imagenHero: "/images/destinos/monza.jpg",
    galeria: [
      "/images/destinos/monza.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "En tren suburbano desde Milano Porta Garibaldi o Milano Centrale llegas a Monza en solo 12 minutos.",
    zonasPeruanos:
      "San Biagio, Triante, San Rocco, Cederna, Lissone y Desio.",
    consejoLocal:
      "Monza y Brianza te permiten estar al lado de Milán con barrios muy residenciales y gran actividad industrial.",
  },
  {
    slugCiudad: "como",
    ciudad: "Como",
    pais: "Italia",
    bandera: "Italia",
    region: "Lombardía (Frontera con Suiza)",
    aeropuerto: "Aeropuerto de Milán-Malpensa (MXP) a 35 min",
    iata: "MXP",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Lago de Como y Catedral de Como · Lombardía",
    imagenHero: "/images/destinos/como.jpg",
    galeria: [
      "/images/destinos/como.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "Desde Milán-Malpensa o Milano Cadorna los trenes Trenord llegan a Como San Giovanni y Como Lago en 35 minutos.",
    zonasPeruanos:
      "Camerlata, Rebbio, Monte Olimpino, Cantù y Chiasso.",
    consejoLocal:
      "Como tiene altísima demanda de personal en hotelería de lujo, restaurantes y servicios por su turismo internacional.",
  },
  {
    slugCiudad: "vicenza",
    ciudad: "Vicenza",
    pais: "Italia",
    bandera: "Italia",
    region: "Véneto",
    aeropuerto: "Aeropuerto de Venecia (VCE) / Verona (VRN)",
    iata: "VCE",
    aerolineas: "Iberia · Air Europa · KLM",
    monumento: "Basílica Palladiana y Piazza dei Signori · Vicenza",
    imagenHero: "/images/destinos/vicenza.jpg",
    galeria: [
      "/images/destinos/vicenza.jpg",
      "/images/destinos/roma.jpg",
      "/images/destinos/milan.webp",
    ],
    comoLlegarCentro:
      "En la línea de tren Milán-Venecia, a solo 25 minutos de Padua y 30 minutos de Verona.",
    zonasPeruanos:
      "San Bortolo, Ferrovieri, San Pio X, Villaggio del Sole y Bassano del Grappa.",
    consejoLocal:
      "Vicenza es uno de los polos industriales y de exportación más prósperos del noreste italiano.",
  },
];

// ── 15 Ciudades de Francia y Resto de Europa Schengen con Imágenes Reales y Verificadas ──
const CIUDADES_FRANCIA_EUROPA: ConfigCiudadEuropa[] = [
  {
    slugCiudad: "paris",
    ciudad: "París",
    pais: "Francia",
    bandera: "Francia",
    region: "Île-de-France (Capital de Francia)",
    aeropuerto: "Aeropuerto de París-Charles de Gaulle (CDG) / París-Orly (ORY)",
    iata: "CDG",
    aerolineas: "Air France · Iberia · Air Europa · KLM",
    monumento: "Torre Eiffel y Río Sena · París",
    imagenHero: "/images/destinos/paris.webp",
    galeria: [
      "/images/destinos/paris.webp",
      "/images/destinos/lyon.jpg",
      "/images/destinos/niza.jpg",
    ],
    comoLlegarCentro:
      "El tren RER B conecta el Aeropuerto Charles de Gaulle con Gare du Nord y Châtelet-Les Halles en el centro de París en 35 minutos.",
    zonasPeruanos:
      "Distritos 11, 15, 18, 19 y 20 de París, Saint-Denis, Montreuil, Créteil, Nanterre y Versalles.",
    consejoLocal:
      "Puedes volar a París entrando por Madrid-Barajas (donde el control migratorio es en español) o en vuelo directo a Charles de Gaulle con tu carpeta completa.",
  },
  {
    slugCiudad: "lyon",
    ciudad: "Lyon",
    pais: "Francia",
    bandera: "Francia",
    region: "Auvernia-Ródano-Alpes",
    aeropuerto: "Aeropuerto de Lyon-Saint Exupéry (LYS)",
    iata: "LYS",
    aerolineas: "Air France · Iberia · KLM",
    monumento: "Basílica de Fourvière y Río Ródano · Lyon",
    imagenHero: "/images/destinos/lyon.jpg",
    galeria: [
      "/images/destinos/lyon.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/niza.jpg",
    ],
    comoLlegarCentro:
      "El tranvía rápido Rhônexpress lleva del Aeropuerto de Lyon a la estación Lyon Part-Dieu en 29 minutos.",
    zonasPeruanos:
      "Part-Dieu, Villeurbanne, Guillotière, Vaise y Vénissieux.",
    consejoLocal:
      "Lyon es la segunda ciudad más económica e industrial de Francia, con gran demanda en gastronomía, logística y construcción.",
  },
  {
    slugCiudad: "marsella",
    ciudad: "Marsella",
    pais: "Francia",
    bandera: "Francia",
    region: "Provenza-Alpes-Costa Azul",
    aeropuerto: "Aeropuerto de Marsella-Provenza (MRS)",
    iata: "MRS",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Puerto Viejo y Notre-Dame de la Garde · Marsella",
    imagenHero: "/images/destinos/marsella.jpg",
    galeria: [
      "/images/destinos/marsella.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/niza.jpg",
    ],
    comoLlegarCentro:
      "El autobús L91 conecta el Aeropuerto de Marsella con la estación central Marseille Saint-Charles en 25 minutos.",
    zonasPeruanos:
      "Vieux-Port, Castellane, La Joliette, Prado y Aix-en-Provence.",
    consejoLocal:
      "El sur de Francia ofrece un clima soleado mediterráneo y conexión rápida en avión o tren desde España.",
  },
  {
    slugCiudad: "niza",
    ciudad: "Niza",
    pais: "Francia",
    bandera: "Francia",
    region: "Costa Azul · Francia",
    aeropuerto: "Aeropuerto Internacional Niza Costa Azul (NCE)",
    iata: "NCE",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Promenade des Anglais y Bahía de Niza",
    imagenHero: "/images/destinos/niza.jpg",
    galeria: [
      "/images/destinos/niza.jpg",
      "/images/destinos/marsella.jpg",
      "/images/destinos/paris.webp",
    ],
    comoLlegarCentro:
      "El tranvía Línea 2 sale directamente de las terminales 1 y 2 del aeropuerto y te deja en el centro de Niza en 20 minutos.",
    zonasPeruanos:
      "Jean-Médecin, Riquier, Saint-Roch, Antibes y Cannes.",
    consejoLocal:
      "Niza y la Costa Azul tienen alta demanda de personal durante todo el año en hotelería, restaurantes y servicios residenciales.",
  },
  {
    slugCiudad: "toulouse",
    ciudad: "Toulouse",
    pais: "Francia",
    bandera: "Francia",
    region: "Occitania (Sur de Francia)",
    aeropuerto: "Aeropuerto de Toulouse-Blagnac (TLS)",
    iata: "TLS",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Place du Capitole y Río Garona · Toulouse",
    imagenHero: "/images/destinos/toulouse.jpg",
    galeria: [
      "/images/destinos/toulouse.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/niza.jpg",
    ],
    comoLlegarCentro:
      "El autobús Aero conecta el Aeropuerto de Blagnac con la estación Matabiau y el centro de Toulouse en 20 minutos.",
    zonasPeruanos:
      "Saint-Cyprien, Compans-Caffarelli, Minimes, Rangueil y Blagnac.",
    consejoLocal:
      "Por su cercanía con España, en Toulouse mucha gente entiende español y hay una comunidad hispana muy grande.",
  },
  {
    slugCiudad: "burdeos",
    ciudad: "Burdeos",
    pais: "Francia",
    bandera: "Francia",
    region: "Nueva Aquitania",
    aeropuerto: "Aeropuerto de Burdeos-Mérignac (BOD)",
    iata: "BOD",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Place de la Bourse y Espejo de Agua · Burdeos",
    imagenHero: "/images/destinos/burdeos.jpg",
    galeria: [
      "/images/destinos/burdeos.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/niza.jpg",
    ],
    comoLlegarCentro:
      "El tranvía Línea A llega hasta la puerta misma del Aeropuerto de Burdeos y te lleva al centro histórico en 35 minutos.",
    zonasPeruanos:
      "Saint-Jean, Bastide, Chartrons, Mérignac, Pessac y Talence.",
    consejoLocal:
      "Burdeos está muy cerca de la frontera con el País Vasco español y conectada en tren rápido TGV con París.",
  },
  {
    slugCiudad: "bruselas",
    ciudad: "Bruselas",
    pais: "Bélgica",
    bandera: "Europa",
    region: "Región de Bruselas-Capital",
    aeropuerto: "Aeropuerto de Bruselas-Zaventem (BRU)",
    iata: "BRU",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Grand Place y Atomium · Bruselas",
    imagenHero: "/images/destinos/bruselas.jpg",
    galeria: [
      "/images/destinos/bruselas.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "El tren del aeropuerto (nivel -1) te lleva en 17 minutos a las estaciones Bruxelles-Nord, Bruxelles-Central y Bruxelles-Midi.",
    zonasPeruanos:
      "Saint-Gilles, Anderlecht, Ixelles, Schaerbeek, Molenbeek y Amberes.",
    consejoLocal:
      "El municipio de Saint-Gilles en Bruselas es famoso por su gran comunidad hispana y peruana.",
  },
  {
    slugCiudad: "amsterdam",
    ciudad: "Ámsterdam",
    pais: "Países Bajos",
    bandera: "Europa",
    region: "Holanda Septentrional",
    aeropuerto: "Aeropuerto de Ámsterdam-Schiphol (AMS)",
    iata: "AMS",
    aerolineas: "KLM · Iberia · Air Europa · Air France",
    monumento: "Canales de Ámsterdam y Plaza Dam",
    imagenHero: "/images/destinos/amsterdam.jpg",
    galeria: [
      "/images/destinos/amsterdam.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "Los trenes NS salen debajo mismo de Schiphol Plaza cada 10 minutos y llegan a Amsterdam Centraal en 15 minutos.",
    zonasPeruanos:
      "Amsterdam Nieuw-West, Zuidoost, Amstelveen, Róterdam, La Haya y Utrecht.",
    consejoLocal:
      "Si prefieres hacer tu entrevista migratoria en español antes de llegar a Países Bajos, armamos tu ruta entrando por Madrid-Barajas y conectando a Ámsterdam.",
  },
  {
    slugCiudad: "lisboa",
    ciudad: "Lisboa",
    pais: "Portugal",
    bandera: "Europa",
    region: "Región de Lisboa",
    aeropuerto: "Aeropuerto de Lisboa Humberto Delgado (LIS)",
    iata: "LIS",
    aerolineas: "Iberia · Air Europa · Plus Ultra",
    monumento: "Praça do Comércio y Torre de Belém · Lisboa",
    imagenHero: "/images/destinos/lisboa.webp",
    galeria: [
      "/images/destinos/lisboa.webp",
      "/images/destinos/oporto.jpg",
      "/images/espana/palacio-real.jpg",
    ],
    comoLlegarCentro:
      "La Línea Roja del Metro de Lisboa sale de la terminal del aeropuerto y llega al centro de la ciudad en 20 minutos.",
    zonasPeruanos:
      "Arroios, Penha de França, Almada, Amadora, Sintra y Cascais.",
    consejoLocal:
      "A solo 1 hora de vuelo desde Madrid, Lisboa destaca por su idioma muy fácil de entender para los peruanos y su clima cálido.",
  },
  {
    slugCiudad: "oporto",
    ciudad: "Oporto",
    pais: "Portugal",
    bandera: "Europa",
    region: "Norte de Portugal",
    aeropuerto: "Aeropuerto de Oporto Francisco Sá Carneiro (OPO)",
    iata: "OPO",
    aerolineas: "Iberia · Air Europa",
    monumento: "Puente Don Luis I y Ribeira del Duero · Oporto",
    imagenHero: "/images/destinos/oporto.jpg",
    galeria: [
      "/images/destinos/oporto.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "La Línea E (Violeta) del Metro de Oporto conecta el aeropuerto con la estación Trindade en el centro en 25 minutos.",
    zonasPeruanos:
      "Cedofeita, Bonfim, Paranhos, Vila Nova de Gaia y Matosinhos.",
    consejoLocal:
      "Oporto tiene un costo de alquiler accesible y gran crecimiento en turismo, construcción y servicios.",
  },
  {
    slugCiudad: "berlin",
    ciudad: "Berlín",
    pais: "Alemania",
    bandera: "Europa",
    region: "Capital de Alemania",
    aeropuerto: "Aeropuerto de Berlín-Brandeburgo Willy Brandt (BER)",
    iata: "BER",
    aerolineas: "Iberia · KLM · Air France",
    monumento: "Puerta de Brandeburgo y Alexanderplatz · Berlín",
    imagenHero: "/images/destinos/berlin.jpg",
    galeria: [
      "/images/destinos/berlin.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "El tren Airport Express (FEX) sale cada 30 minutos desde las terminales 1-2 y llega a Berlin Hauptbahnhof en 30 minutos.",
    zonasPeruanos:
      "Charlottenburg, Friedrichshain, Kreuzberg, Neukölln, Pankow y Mitte.",
    consejoLocal:
      "Entrando por Madrid-Barajas y conectando a Berlín pasas el control Schengen en español con tu carpeta completa lista.",
  },
  {
    slugCiudad: "frankfurt",
    ciudad: "Frankfurt",
    pais: "Alemania",
    bandera: "Europa",
    region: "Hesse · Alemania",
    aeropuerto: "Aeropuerto Internacional de Frankfurt (FRA)",
    iata: "FRA",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Römerberg y Distrito Financiero · Frankfurt",
    imagenHero: "/images/destinos/frankfurt.jpg",
    galeria: [
      "/images/destinos/frankfurt.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "Las líneas S8 y S9 del S-Bahn llevan del Aeropuerto de Frankfurt a la estación central Frankfurt Hauptbahnhof en solo 11 minutos.",
    zonasPeruanos:
      "Bockenheim, Bornheim, Gallus, Sachsenhausen y Offenbach.",
    consejoLocal:
      "Frankfurt es el centro logístico y económico de Alemania con sueldos altos y excelente transporte a toda Europa.",
  },
  {
    slugCiudad: "munich",
    ciudad: "Múnich",
    pais: "Alemania",
    bandera: "Europa",
    region: "Baviera · Alemania",
    aeropuerto: "Aeropuerto Internacional de Múnich (MUC)",
    iata: "MUC",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Marienplatz y Nuevo Ayuntamiento · Múnich",
    imagenHero: "/images/destinos/munich.jpg",
    galeria: [
      "/images/destinos/munich.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "Los trenes S1 y S8 conectan el Aeropuerto de Múnich con Marienplatz y la estación central en 40 minutos.",
    zonasPeruanos:
      "Sendling, Laim, Pasing, Giesing y Schwabing.",
    consejoLocal:
      "Múnich tiene una de las comunidades peruanas más activas de Alemania y su propio Consulado General del Perú.",
  },
  {
    slugCiudad: "zurich",
    ciudad: "Zúrich",
    pais: "Suiza",
    bandera: "Europa",
    region: "Cantón de Zúrich · Espacio Schengen",
    aeropuerto: "Aeropuerto Internacional de Zúrich-Kloten (ZRH)",
    iata: "ZRH",
    aerolineas: "Iberia · Air Europa · KLM · Air France",
    monumento: "Río Limmat y Centro Histórico · Zúrich",
    imagenHero: "/images/destinos/zurich.jpg",
    galeria: [
      "/images/destinos/zurich.jpg",
      "/images/destinos/ginebra.jpg",
      "/images/destinos/suiza-alpes.jpg",
    ],
    comoLlegarCentro:
      "El tren SBB desde la estación subterránea del Aeropuerto de Zúrich te deja en Zürich HB (estación central) en solo 10 minutos.",
    zonasPeruanos:
      "Altstetten, Oerlikon, Wiedikon, Aussersihl y Winterthur.",
    consejoLocal:
      "Suiza forma parte del Espacio Schengen, por lo que los peruanos ingresan con las mismas reglas: reserva de hotel, boleto de regreso y medios económicos, y conviene llevar seguro médico.",
  },
  {
    slugCiudad: "ginebra",
    ciudad: "Ginebra",
    pais: "Suiza",
    bandera: "Europa",
    region: "Suiza Francesa · Espacio Schengen",
    aeropuerto: "Aeropuerto Internacional de Ginebra-Cointrin (GVA)",
    iata: "GVA",
    aerolineas: "Iberia · Air France · KLM",
    monumento: "Jet d'Eau y Lago Lemán · Ginebra",
    imagenHero: "/images/destinos/ginebra.jpg",
    galeria: [
      "/images/destinos/ginebra.jpg",
      "/images/destinos/paris.webp",
      "/images/destinos/zurich.jpg",
    ],
    comoLlegarCentro:
      "Todos los trenes desde el Aeropuerto de Ginebra paran en la estación central Genève-Cornavin en solo 7 minutos.",
    zonasPeruanos:
      "Plainpalais,Pâquis, Servette, Carouge, Meyrin y Lausana.",
    consejoLocal:
      "Ginebra cuenta con una importante comunidad hispanohablante y conexión directa de 2 horas desde Madrid.",
  },
];

// ── 16 Intenciones Comerciales para España (25 ciudades × 16 = 400 Super-Landings) ──
// Cada texto recibe las tarifas del país de la página (t), así un cambio de precio en lib/precios-migratorio.ts llega a todo.
const INTENCIONES_ESPANA: {
  slugIntencion: string;
  etiquetaCorta: string;
  focoTitulo: (ciudad: string, t: TarifasMigratorio) => string;
  focoSubtitulo: (ciudad: string, t: TarifasMigratorio) => string;
  focoGancho: (ciudad: string, t: TarifasMigratorio) => string;
}[] = [
  {
    slugIntencion: "plan-promo-699",
    etiquetaCorta: "Plan Promo",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} — Plan Promo Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Separa con el 50% (${usd(inicialSeparacion(t.promo))} USD) · Pasaje + Reserva de regreso + Hotel + Seguro`,
    focoGancho: (c, t) =>
      `La tarifa promocional de ${usd(t.promo)} USD para viajar a ${c} comprando con anticipación (salidas fines de Febrero, Marzo, Abril y Mayo). Incluye todos tus documentos listos para presentar en el aeropuerto.`,
  },
  {
    slugIntencion: "plan-smart-799",
    etiquetaCorta: "Plan Smart",
    focoTitulo: (c, t) => `Paquete Migratorio Smart a ${c} Desde ${usd(t.smart)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.smart))} USD (50%) · Incluye Check-in 24h Antes + Asesoría 1 a 1`,
    focoGancho: (c) =>
      `Nuestro paquete más pedido para viajar a ${c} en temporada media (Octubre, Noviembre, Junio y Septiembre). Incluye tu vuelo de ida, tu reserva de regreso, hotel, seguro y check-in hecho por tu asesor.`,
  },
  {
    slugIntencion: "plan-plus-899",
    etiquetaCorta: "Plan Plus",
    focoTitulo: (c, t) => `Paquete Migratorio Plus a ${c} Desde ${usd(t.plus)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.plus))} USD (50%) · Ideal para Fechas Próximas y Conexión Directa`,
    focoGancho: (c) =>
      `Diseñado para quienes necesitan viajar pronto a ${c} (Enero y primera quincena de Febrero) o desean conexión garantizada con carpeta migratoria completa lista para el control en el aeropuerto.`,
  },
  {
    slugIntencion: "plan-full-999",
    etiquetaCorta: "Plan Full",
    focoTitulo: (c, t) => `Paquete Migratorio Full a ${c} con Maleta 23 kg Desde ${usd(t.full)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.full))} USD (50%) · Temporada Alta o con Maleta Grande de Bodega`,
    focoGancho: (c) =>
      `La opción más completa para viajar a ${c} en temporada de alta demanda (Diciembre, Julio y Agosto) o llevando tu maleta grande de 23 kg en bodega más toda tu documentación migratoria.`,
  },
  {
    slugIntencion: "sin-carta-de-invitacion-con-hotel",
    etiquetaCorta: "Sin Carta de Invitación (Con Hotel)",
    focoTitulo: (c) => `Viajar a ${c} Sin Carta de Invitación (Con Reserva de Hotel)`,
    focoSubtitulo: (_c, t) => `Paquete Migratorio Completo Desde ${usd(t.promo)} y ${usd(t.smart)} · Separa con el 50%`,
    focoGancho: (c) =>
      `¿Tu familiar o amigo en ${c} no puede tramitarte la Carta de Invitación en la comisaría? No te preocupes: armamos tu paquete con Reserva de Hotel confirmada a tu nombre para que pases Migraciones sin ningún problema.`,
  },
  {
    slugIntencion: "con-carta-de-invitacion",
    etiquetaCorta: "Con Carta de Invitación",
    focoTitulo: (c, t) => `Paquete a ${c} con Carta de Invitación Familiar Desde ${usd(t.promo)}`,
    focoSubtitulo: () => `Calibramos tu Boleto y Seguro Exactamente a las Fechas de tu Carta`,
    focoGancho: (c) =>
      `Si ya tienes tu Carta de Invitación original para ${c}, no gastes en hotel innecesario: emitimos tu pasaje de ida, tu reserva de regreso y tu seguro médico ajustados día por día a tu carta policial.`,
  },
  {
    slugIntencion: "separar-con-50-por-ciento",
    etiquetaCorta: "Separar con el 50%",
    focoTitulo: (c, t) => `Viaja a ${c} Separando con el 50% de Inicial (Desde ${usd(inicialSeparacion(t.promo))} USD)`,
    focoSubtitulo: (_c, t) => `Planes de ${listaPreciosPlanes(t)} · Congela tu Cupo Hoy en Los Olivos`,
    focoGancho: (c, t) =>
      `Asegura tu tarifa a ${c} hoy mismo abonando solo la mitad (desde ${usd(inicialSeparacion(t.promo))} USD en el plan de ${usd(t.promo)} o ${usd(inicialSeparacion(t.smart))} USD en el plan Smart de ${usd(t.smart)}) y completa el saldo antes de tu fecha de vuelo.`,
  },
  {
    slugIntencion: "primer-viaje-paso-a-paso",
    etiquetaCorta: "Primer Viaje desde Perú",
    focoTitulo: (c) => `Primer Viaje a ${c} desde Perú — Paquete Migratorio Paso a Paso`,
    focoSubtitulo: (_c, t) => `Te Preparamos para el Aeropuerto · Tarifas ${usd(t.promo)} · ${usd(t.smart)} · ${usd(t.plus)} · ${usd(t.full)}`,
    focoGancho: (c) =>
      `Si es tu primera vez saliendo del Perú rumbo a ${c}, te entregamos todos los documentos impresos y te explicamos en sencillo qué responder en el counter de Lima y en Migraciones.`,
  },
  {
    slugIntencion: "salidas-octubre-noviembre",
    etiquetaCorta: "Salidas Octubre y Noviembre",
    focoTitulo: (c) => `Paquete Migratorio a ${c} — Salidas Octubre y Noviembre`,
    focoSubtitulo: (_c, t) => `Tarifa Smart ${usd(t.smart)} y Plus ${usd(t.plus)} · Separa Hoy con el 50%`,
    focoGancho: (c) =>
      `Aprovecha la temporada de otoño para viajar a ${c} con menos filas en el aeropuerto y toda tu carpeta migratoria (pasaje de ida + regreso reservado + hotel + seguro) lista.`,
  },
  {
    slugIntencion: "salidas-diciembre-navidad",
    etiquetaCorta: "Salidas Diciembre y Fin de Año",
    focoTitulo: (c) => `Paquete Migratorio a ${c} en Diciembre y Navidad`,
    focoSubtitulo: (_c, t) => `Cupos de Temporada Alta (${usd(t.plus)} y ${usd(t.full)}) · Separa con el 50%`,
    focoGancho: (c) =>
      `Viaja a ${c} para reencontrarte con tu familia en Navidad y Año Nuevo o empezar el año en España con tu carpeta de viaje armada.`,
  },
  {
    slugIntencion: "salidas-enero",
    etiquetaCorta: "Salidas Enero",
    focoTitulo: (c) => `Paquete Migratorio a ${c} — Salidas de Enero`,
    focoSubtitulo: (_c, t) => `Empieza el Año en España · Planes ${usd(t.smart)} y ${usd(t.plus)} (Separa con 50%)`,
    focoGancho: (c) =>
      `Enero es uno de los meses favoritos de los peruanos para viajar a ${c} y empezar una nueva etapa con pasaje, reserva de regreso, hotel y seguro médico completos.`,
  },
  {
    slugIntencion: "salidas-febrero",
    etiquetaCorta: "Salidas Febrero",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} — Salidas de Febrero Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Tarifas Promo ${usd(t.promo)} y Smart ${usd(t.smart)} · Separa con ${usd(inicialSeparacion(t.promo))} USD`,
    focoGancho: (c, t) =>
      `En la segunda quincena de Febrero empiezan las tarifas promocionales desde ${usd(t.promo)} USD para viajar a ${c} ahorrando más de ${usd(ahorroFrenteARedondo(t.promo))} dólares frente a un boleto redondo tradicional.`,
  },
  {
    slugIntencion: "salidas-marzo",
    etiquetaCorta: "Salidas Marzo",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} — Salidas de Marzo Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Mejor Temporada de Precio (${usd(t.promo)} y ${usd(t.smart)}) · Separa con el 50%`,
    focoGancho: (c, t) =>
      `Marzo marca el inicio de la primavera en ${c} y tiene cupos en el Plan Promo de ${usd(t.promo)} USD con pasaje de ida, reserva de regreso, hotel y seguro.`,
  },
  {
    slugIntencion: "salidas-abril",
    etiquetaCorta: "Salidas Abril",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} — Salidas de Abril Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Clima Primaveral y Tarifa Promo ${usd(t.promo)} · Separa Hoy con ${usd(inicialSeparacion(t.promo))}`,
    focoGancho: (c, t) =>
      `Viaja en Abril a ${c} cuando empieza la temporada alta de contrataciones en España, asegurando hoy tu paquete desde ${usd(t.promo)} USD con el 50% de inicial.`,
  },
  {
    slugIntencion: "salidas-mayo",
    etiquetaCorta: "Salidas Mayo",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} — Salidas de Mayo Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Plan Promo ${usd(t.promo)} y Smart ${usd(t.smart)} · Carpeta Migratoria Completa`,
    focoGancho: (c, t) =>
      `Reserva con tiempo tu salida de Mayo hacia ${c} desde ${usd(t.promo)} USD y recibe tu carpeta completa con pasaje, reserva de regreso, alojamiento y seguro médico.`,
  },
  {
    slugIntencion: "viaje-en-pareja-o-familia",
    etiquetaCorta: "En Pareja o Familia",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} para Parejas y Familias Desde ${usd(t.promo)}`,
    focoSubtitulo: () => `Mismo Vuelo, Asientos Juntos y Reserva Familiar Unificada`,
    focoGancho: (c) =>
      `Si viajas en pareja o en familia hacia ${c}, emitimos sus pasajes en el mismo vuelo, reservamos habitación doble o familiar y calculamos su bolsa de viaje conjunta.`,
  },
];

// ── 10 Intenciones Comerciales para Italia (25 ciudades × 10 = 250 Super-Landings) ──
const INTENCIONES_ITALIA: {
  slugIntencion: string;
  etiquetaCorta: string;
  focoTitulo: (ciudad: string, t: TarifasMigratorio) => string;
  focoSubtitulo: (ciudad: string, t: TarifasMigratorio) => string;
  focoGancho: (ciudad: string, t: TarifasMigratorio) => string;
}[] = [
  {
    slugIntencion: "paquete-migratorio-699",
    etiquetaCorta: "Plan Promo",
    focoTitulo: (c, t) => `Paquete Migratorio a ${c} (Italia) — Plan Promo Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.promo))} USD (50%) · Pasaje + Reserva de regreso + Hotel + Seguro`,
    focoGancho: (c, t) =>
      `Viaja a ${c} comprando con anticipación desde ${usd(t.promo)} USD. Te entregamos tu pasaje de ida, tu reserva de regreso, tu reserva de hotel y tu seguro médico.`,
  },
  {
    slugIntencion: "paquete-smart-799",
    etiquetaCorta: "Plan Smart",
    focoTitulo: (c, t) => `Paquete Migratorio Smart a ${c} (Italia) Desde ${usd(t.smart)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.smart))} USD (50%) · Incluye Check-in 24h Antes y Asesoría`,
    focoGancho: (c) =>
      `El plan preferido por la comunidad peruana que viaja a ${c}: incluye vuelo confirmado, reserva de regreso activa el día del viaje, hotel o Lettera di Invito y preparación 1 a 1.`,
  },
  {
    slugIntencion: "paquete-plus-conexion-899",
    etiquetaCorta: "Plan Plus Conexión",
    focoTitulo: (c, t) => `Paquete Migratorio Plus a ${c} con Conexión Directa (${usd(t.plus)})`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.plus))} USD (50%) · Ideal para Salidas Próximas a Italia`,
    focoGancho: (c) =>
      `Para quienes viajan pronto a ${c} con conexión directa desde Lima (vía Madrid, Ámsterdam o París) y desean toda su carpeta migratoria lista para el aeropuerto.`,
  },
  {
    slugIntencion: "paquete-full-maleta-999",
    etiquetaCorta: "Plan Full Maleta 23 kg",
    focoTitulo: (c, t) => `Paquete Migratorio Full a ${c} con Maleta de 23 kg (${usd(t.full)})`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.full))} USD (50%) · Temporada Alta o Equipaje de Bodega`,
    focoGancho: (c) =>
      `Viaja a ${c} llevando tu maleta grande de 23 kg en bodega y tu carpeta de viaje armada.`,
  },
  {
    slugIntencion: "sin-carta-de-invitacion-con-hotel",
    etiquetaCorta: "Sin Invitación (Con Hotel)",
    focoTitulo: (c) => `Viajar a ${c} Sin Lettera di Invito (Con Reserva de Hotel)`,
    focoSubtitulo: (_c, t) => `Paquete Migratorio Completo Desde ${usd(t.promo)} y ${usd(t.smart)} · Separa con el 50%`,
    focoGancho: (c) =>
      `Si no tienes quién te envíe carta de invitación en ${c}, nosotros incluimos tu Reserva de Hotel confirmada a tu nombre para que pases el control migratorio con total respaldo.`,
  },
  {
    slugIntencion: "con-lettera-di-invito-familiar",
    etiquetaCorta: "Con Lettera di Invito",
    focoTitulo: (c, t) => `Paquete a ${c} con Lettera di Invito Familiar Desde ${usd(t.promo)}`,
    focoSubtitulo: () => `Revisamos tu Invitación y Ajustamos tu Boleto y Seguro Médico`,
    focoGancho: (c) =>
      `Si tu familiar en ${c} te envía la Lettera di Invito (Dichiarazione di Alloggio) con copia de su Permesso di Soggiorno o DNI italiano, armamos tu vuelo y seguro exactos a esas fechas.`,
  },
  {
    slugIntencion: "entrando-por-madrid-barajas",
    etiquetaCorta: "Entrando por Madrid en Español",
    focoTitulo: (c) => `Viajar a ${c} Entrando por Madrid-Barajas (Control en Español)`,
    focoSubtitulo: (_c, t) => `La Ruta Favorita de los Peruanos hacia Italia · Desde ${usd(t.promo)} y ${usd(t.smart)}`,
    focoGancho: (c) =>
      `Muchos peruanos prefieren viajar a ${c} haciendo su entrada a Europa por Madrid-Barajas porque la entrevista migratoria es 100% en español y luego conectan el mismo día a Italia.`,
  },
  {
    slugIntencion: "declaracion-ospitalita-48-horas",
    etiquetaCorta: "Guía Ospitalità 48h",
    focoTitulo: (c) => `Viaje a ${c} + Guía de Dichiarazione di Ospitalità (48 Horas)`,
    focoSubtitulo: (_c, t) => `Todo tu Expediente Listo desde Lima · Planes desde ${usd(t.promo)} a ${usd(t.full)}`,
    focoGancho: (c) =>
      `Además de entregarte tu pasaje, reserva de regreso, hotel y seguro para volar a ${c}, te orientamos sobre el registro de hospitalidad dentro de las 48 horas de llegar a Italia.`,
  },
  {
    slugIntencion: "separar-con-50-por-ciento",
    etiquetaCorta: "Separar con el 50%",
    focoTitulo: (c, t) => `Viaja a ${c} Separando Hoy con el 50% (Desde ${usd(inicialSeparacion(t.promo))} USD)`,
    focoSubtitulo: () => `Congela tu Tarifa en Nuestra Oficina de Los Olivos`,
    focoGancho: (c) =>
      `Asegura tu paquete migratorio a ${c} con solo el 50% de adelanto (en efectivo, transferencia o Yape/Plin en nuestra oficina de Los Olivos) y paga el resto antes de viajar.`,
  },
  {
    slugIntencion: "primer-viaje-desde-peru",
    etiquetaCorta: "Primer Viaje a Italia",
    focoTitulo: (c) => `Primer Viaje a ${c} desde Perú — Carpeta Migratoria Completa`,
    focoSubtitulo: (_c, t) => `Asesoría Paso a Paso para el Aeropuerto · Desde ${usd(t.promo)} USD`,
    focoGancho: (c) =>
      `¿Viajas por primera vez desde Lima hacia ${c}? Te preparamos paso a paso para que sepas qué documentos mostrar en el Aeropuerto Jorge Chávez y al aterrizar en Europa.`,
  },
];

// ── 10 Intenciones Comerciales para Francia y Resto de Europa (15 ciudades × 10 = 150 Super-Landings) ──
// Francia lleva las tarifas de Italia; Alemania, Suiza, Portugal, Países Bajos y Bélgica, las de España.
const INTENCIONES_FRANCIA_EUROPA: {
  slugIntencion: string;
  etiquetaCorta: string;
  focoTitulo: (ciudad: string, pais: string, t: TarifasMigratorio) => string;
  focoSubtitulo: (ciudad: string, t: TarifasMigratorio) => string;
  focoGancho: (ciudad: string, pais: string, t: TarifasMigratorio) => string;
}[] = [
  {
    slugIntencion: "paquete-migratorio-699",
    etiquetaCorta: "Plan Promo",
    focoTitulo: (c, p, t) => `Paquete Migratorio a ${c} (${p}) — Plan Promo Desde ${usd(t.promo)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.promo))} USD (50%) · Pasaje + Reserva de regreso + Hotel + Seguro`,
    focoGancho: (c, p, t) =>
      `Viaja a ${c} (${p}) ahorrando más de ${usd(ahorroFrenteARedondo(t.promo))} dólares con nuestro Plan Promo anticipado de ${usd(t.promo)} USD: incluye vuelo de ida, reserva de regreso, hotel y seguro médico.`,
  },
  {
    slugIntencion: "paquete-smart-799",
    etiquetaCorta: "Plan Smart",
    focoTitulo: (c, p, t) => `Paquete Migratorio Smart a ${c} (${p}) Desde ${usd(t.smart)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.smart))} USD (50%) · Check-in 24h Antes + Asesoría Personalizada`,
    focoGancho: (c) =>
      `Nuestro paquete más vendido para viajar a ${c} en temporada media con todos tus documentos listos para presentar en Lima y en el control fronterizo europeo.`,
  },
  {
    slugIntencion: "paquete-plus-899",
    etiquetaCorta: "Plan Plus",
    focoTitulo: (c, p, t) => `Paquete Migratorio Plus a ${c} (${p}) Desde ${usd(t.plus)}`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.plus))} USD (50%) · Salidas Próximas y Conexión Directa`,
    focoGancho: (c) =>
      `Ideal si buscas viajar pronto a ${c} con conexión garantizada y carpeta migratoria completa verificada antes de tu embarque.`,
  },
  {
    slugIntencion: "paquete-full-999",
    etiquetaCorta: "Plan Full",
    focoTitulo: (c, p, t) => `Paquete Migratorio Full a ${c} (${p}) con Maleta 23 kg (${usd(t.full)})`,
    focoSubtitulo: (_c, t) => `Separa con ${usd(inicialSeparacion(t.full))} USD (50%) · Temporada Alta o Maleta Grande en Bodega`,
    focoGancho: (c) =>
      `Para quienes viajan a ${c} en temporada alta o necesitan llevar maleta grande de 23 kg en bodega junto con toda su documentación migratoria.`,
  },
  {
    slugIntencion: "sin-carta-de-invitacion-con-hotel",
    etiquetaCorta: "Con Reserva de Hotel",
    focoTitulo: (c, p) => `Viajar a ${c} (${p}) Sin Carta de Invitación — Con Reserva de Hotel`,
    focoSubtitulo: (_c, t) => `Carpeta Completa Desde ${usd(t.promo)} y ${usd(t.smart)} · Separa con el 50%`,
    focoGancho: (c, p) =>
      `En ${p} el trámite municipal de invitación suele demorar; por eso la forma más rápida y segura de viajar a ${c} es con nuestra Reserva de Hotel confirmada incluida en tu paquete.`,
  },
  {
    slugIntencion: "con-invitacion-familiar",
    etiquetaCorta: "Visita Familiar",
    focoTitulo: (c, p, t) => `Paquete a ${c} (${p}) para Visitar Familiares Desde ${usd(t.promo)}`,
    focoSubtitulo: () => `Boleto + Reserva de regreso + Seguro Médico Schengen`,
    focoGancho: (c) =>
      `Si tienes familia o amigos esperándote en ${c}, armamos tu carpeta con las fechas exactas de tu viaje y te preparamos para pasar tranquilo el control del aeropuerto.`,
  },
  {
    slugIntencion: "entrando-por-madrid-barajas",
    etiquetaCorta: "Vía Madrid en Español",
    focoTitulo: (c) => `Viajar a ${c} Entrando por Madrid-Barajas (Control en Español)`,
    focoSubtitulo: (c, t) => `Pasa Migraciones en Español y Conecta a ${c} · Desde ${usd(t.promo)}`,
    focoGancho: (c) =>
      `¿No hablas francés, inglés o alemán? Armamos tu ruta desde Lima entrando primero por Madrid-Barajas (donde respondes en español) y conectando directo a ${c}.`,
  },
  {
    slugIntencion: "separar-con-50-por-ciento",
    etiquetaCorta: "Separar con 50%",
    focoTitulo: (c, p, t) => `Viaja a ${c} (${p}) Separando con el 50% (Desde ${usd(inicialSeparacion(t.promo))} USD)`,
    focoSubtitulo: () => `Atención Presencial en Av. Antúnez de Mayolo 814, Los Olivos`,
    focoGancho: (c) =>
      `Congela hoy tu paquete hacia ${c} con la mitad del valor y paga el saldo restante antes de tu vuelo con total respaldo formal (RUC 20614914239).`,
  },
  {
    slugIntencion: "requisitos-migraciones-2026",
    etiquetaCorta: "Requisitos 2026",
    focoTitulo: (c, p) => `Requisitos para Viajar a ${c} (${p}) desde Perú — Paquete Completo`,
    focoSubtitulo: (_c, t) => `Todo Resuelto en un Solo Paquete (${usd(t.promo)} · ${usd(t.smart)} · ${usd(t.plus)} · ${usd(t.full)})`,
    focoGancho: (c) =>
      `Te ayudamos a ordenar lo que te pueden pedir en Lima y al llegar a ${c}: pasaporte vigente, pasaje, boleto de regreso, reserva de hotel, seguro médico y bolsa de viaje.`,
  },
  {
    slugIntencion: "primer-viaje-desde-lima",
    etiquetaCorta: "Primer Viaje",
    focoTitulo: (c, p) => `Primer Viaje a ${c} (${p}) desde Lima — Asesoría Completa`,
    focoSubtitulo: (_c, t) => `Te Entregamos tu Carpeta Lista para el Aeropuerto · Desde ${usd(t.promo)}`,
    focoGancho: (c) =>
      `Viaja tranquilo en tu primera salida hacia ${c}: nosotros nos encargamos de tu check-in 24 horas antes y de dejarte cada documento ordenado en tu carpeta.`,
  },
];

// ── 20 Orígenes del Perú (Distritos de Lima + Provincias) para Silo 4 (20 × 5 = 100 Super-Landings) ──
const ORIGENES_PERU: {
  slugOrigen: string;
  nombreOrigen: string;
  // Función cuando el texto menciona un precio: recibe las tarifas del país de destino.
  detalleSalida: string | ((t: TarifasMigratorio) => string);
}[] = [
  {
    slugOrigen: "los-olivos",
    nombreOrigen: "Los Olivos (Lima Norte)",
    detalleSalida: "Atención presencial directa en nuestra oficina de Av. Antúnez de Mayolo 814, Los Olivos, a 20 minutos del Aeropuerto Jorge Chávez.",
  },
  {
    slugOrigen: "comas",
    nombreOrigen: "Comas (Lima Norte)",
    detalleSalida: "Para vecinos de Comas: estamos a solo 10 minutos en Av. Antúnez de Mayolo 814, Los Olivos, para que separes tu paquete en persona.",
  },
  {
    slugOrigen: "independencia",
    nombreOrigen: "Independencia (Lima Norte)",
    detalleSalida: "Muy cerca de Plaza Norte y MegaPlaza: visítanos en nuestra oficina de Los Olivos y lleva tu carpeta migratoria impresa.",
  },
  {
    slugOrigen: "san-martin-de-porres",
    nombreOrigen: "San Martín de Porres",
    detalleSalida: "Atención inmediata para familias de SMP en nuestra sede de Av. Antúnez de Mayolo 814, a un paso del Aeropuerto Jorge Chávez.",
  },
  {
    slugOrigen: "san-juan-de-lurigancho",
    nombreOrigen: "San Juan de Lurigancho",
    detalleSalida: "Atendemos por WhatsApp y de forma presencial en nuestra oficina de Lima para entregarte tu carpeta lista antes de tu vuelo.",
  },
  {
    slugOrigen: "ate-vitarte",
    nombreOrigen: "Ate Vitarte y Lima Este",
    detalleSalida: "Gestionamos todo tu expediente por WhatsApp o en nuestra oficina física con RUC 20614914239.",
  },
  {
    slugOrigen: "callao",
    nombreOrigen: "Callao y Bellavista",
    detalleSalida: "Al lado del Aeropuerto Internacional Jorge Chávez y a pocos minutos de nuestra sede en Av. Antúnez de Mayolo 814.",
  },
  {
    slugOrigen: "miraflores",
    nombreOrigen: "Miraflores y Lima Centro",
    detalleSalida: "Cotización rápida por WhatsApp o atención presencial para armar tu carpeta migratoria completa a Europa.",
  },
  {
    slugOrigen: "santiago-de-surco",
    nombreOrigen: "Santiago de Surco y Lima Sur",
    detalleSalida: "Reserva con el 50% por transferencia bancaria o en nuestra oficina y recibe tus documentos verificables.",
  },
  {
    slugOrigen: "san-miguel",
    nombreOrigen: "San Miguel y Pueblo Libre",
    detalleSalida: "A minutos del Aeropuerto Jorge Chávez: preparamos tu pasaje, reserva de regreso, hotel y seguro médico.",
  },
  {
    slugOrigen: "trujillo",
    nombreOrigen: "Trujillo y La Libertad",
    detalleSalida: "Para viajeros de Trujillo: coordinamos tu llegada a Lima (en avión desde Huanchaco o bus) para que empalmes con tu vuelo internacional a Europa.",
  },
  {
    slugOrigen: "arequipa",
    nombreOrigen: "Arequipa",
    detalleSalida: "Para viajeros de Arequipa: armamos tu conexión hacia el Aeropuerto Jorge Chávez de Lima y te enviamos toda tu carpeta digital + física.",
  },
  {
    slugOrigen: "chiclayo",
    nombreOrigen: "Chiclayo y Lambayeque",
    detalleSalida: "Especialistas en pasajeros de Chiclayo y todo el norte peruano que viajan a España, Italia y Francia vía Lima.",
  },
  {
    slugOrigen: "piura",
    nombreOrigen: "Piura, Sullana y Talara",
    detalleSalida: "Atendemos a diario a viajeros de Piura con videollamada o en nuestra oficina cuando llegan a Lima antes de su vuelo a Europa.",
  },
  {
    slugOrigen: "huancayo",
    nombreOrigen: "Huancayo y Junín",
    detalleSalida: "Para viajeros de Huancayo y el centro del Perú: recoges tu carpeta impresa en nuestra oficina de Lima antes de subir al avión.",
  },
  {
    slugOrigen: "cusco",
    nombreOrigen: "Cusco",
    detalleSalida: "Conectamos tu salida desde el Aeropuerto Velasco Astete de Cusco con tu vuelo de Lima hacia Madrid, Barcelona, Milán, Roma o París.",
  },
  {
    slugOrigen: "chimbote",
    nombreOrigen: "Chimbote y Áncash",
    detalleSalida: "Muchos viajeros de Chimbote y Nuevo Chimbote viajan cada semana con nosotros a España e Italia separando con el 50%.",
  },
  {
    slugOrigen: "ica",
    nombreOrigen: "Ica, Chincha y Pisco",
    detalleSalida: "Atención directa para viajeros de Chincha, Pisco e Ica con entrega de carpeta completa en Lima.",
  },
  {
    slugOrigen: "cajamarca",
    nombreOrigen: "Cajamarca",
    detalleSalida: "Coordinamos tu conexión Cajamarca – Lima con tu vuelo a Europa y dejamos listos todos tus documentos migratorios.",
  },
  {
    slugOrigen: "tacna",
    nombreOrigen: "Tacna y Moquegua",
    detalleSalida: (t) =>
      `Para viajeros del sur del Perú: reserva tu paquete desde ${usd(t.promo)} con el 50% y viaja con tu carpeta de viaje armada.`,
  },
];

// ── 20 Temas de Dudas y Objeciones Reales para Silo 5 (20 × 5 = 100 Super-Landings) ──
const TEMAS_DUDAS_MIGRATORIAS: {
  slugTema: string;
  tituloTema: (ciudad: string, t: TarifasMigratorio) => string;
  subtituloTema: (ciudad: string, t: TarifasMigratorio) => string;
  ganchoTema: (ciudad: string, t: TarifasMigratorio) => string;
}[] = [
  {
    slugTema: "como-funciona-boleto-de-regreso-para-migraciones",
    tituloTema: (c) => `¿Es Ida y Vuelta? Cómo Funciona la Reserva de Regreso a ${c}`,
    subtituloTema: (_c, t) => `Pasaje de Ida + Reserva de Regreso · Desde ${usd(t.promo)}`,
    ganchoTema: (c) =>
      `Te explicamos en palabras simples cómo funciona el paquete para viajar a ${c}: incluye tu pasaje de ida emitido y una reserva del vuelo de regreso. La reserva de regreso no es un boleto emitido: si quieres viajar con el regreso emitido, te cotizamos ida y vuelta.`,
  },
  {
    slugTema: "por-que-cuesta-699-paquete-migratorio-europa",
    tituloTema: (c, t) => `¿Por Qué Cuesta Desde ${usd(t.promo)} el Paquete Migratorio a ${c}? (Explicado Claro)`,
    subtituloTema: () => `Pasaje de Ida + Reserva de Regreso + Hotel + Seguro`,
    ganchoTema: (c, t) =>
      `Un pasaje de ida y vuelta cuesta más porque pagas dos vuelos emitidos. El paquete migratorio a ${c} cuesta desde ${usd(t.promo)} USD porque incluye el pasaje de ida emitido y una reserva de regreso, más hotel y seguro. En el control de frontera te pueden pedir tu boleto de vuelta: si quieres llevarlo emitido, elige ida y vuelta.`,
  },
  {
    slugTema: "viajar-sin-carta-de-invitacion-con-reserva-de-hotel",
    tituloTema: (c) => `Cómo Viajar a ${c} Sin Carta de Invitación (Con Reserva de Hotel)`,
    subtituloTema: (_c, t) => `La Opción Más Rápida y Segura para Pasar el Control · Desde ${usd(t.promo)}`,
    ganchoTema: (c) =>
      `No necesitas esperar meses por una Carta de Invitación policial: con nuestra Reserva de Hotel confirmada en ${c} cumples al 100% con el requisito de alojamiento en el aeropuerto.`,
  },
  {
    slugTema: "cuanto-dinero-llevar-bolsa-de-viaje-europa-2026",
    tituloTema: (c) => `Cuánto Dinero Llevar de Bolsa de Viaje a ${c} en 2026 (En Efectivo o Tarjeta)`,
    subtituloTema: (_c, t) => `Calculamos tu Bolsa Exacta + Carpeta Migratoria Desde ${usd(t.promo)}`,
    ganchoTema: (c) =>
      `Te orientamos sobre cuántos euros llevar en efectivo o tarjeta para tu entrada a ${c} según los días que figuren en tu reserva de hotel y boleto de regreso.`,
  },
  {
    slugTema: "que-preguntan-en-migraciones-aeropuerto-barajas",
    tituloTema: (c) => `Qué Preguntan en Migraciones al Viajar a ${c} y Cómo Responder Tranquilo`,
    subtituloTema: (_c, t) => `Incluye Preparación 1 a 1 + Todos tus Documentos Desde ${usd(t.promo)}`,
    ganchoTema: (c) =>
      `La clave para pasar tranquilo en el aeropuerto rumbo a ${c} es que tus respuestas coincidan con los documentos impresos de tu carpeta: motivo turístico, días de estancia, hotel y retorno.`,
  },
  {
    slugTema: "documentos-para-viajar-por-primera-vez-a-europa",
    tituloTema: (c) => `Los Documentos que te Pueden Pedir al Viajar por Primera Vez a ${c}`,
    subtituloTema: (_c, t) => `Te Armamos toda la Carpeta Lista en Los Olivos · Desde ${usd(t.promo)}`,
    ganchoTema: (c) =>
      `Para ingresar a ${c} te pueden pedir pasaporte vigente, boleto de regreso, reserva de hotel (o carta de invitación), dinero suficiente y seguro médico. Te ayudamos a armar tu carpeta.`,
  },
  {
    slugTema: "separar-paquete-migratorio-con-50-por-ciento",
    tituloTema: (c) => `Cómo Separar tu Paquete Migratorio a ${c} con el 50% de Inicial`,
    subtituloTema: (_c, t) => `Separa con ${usd(inicialSeparacion(t.promo))}, ${usd(inicialSeparacion(t.smart))}, ${usd(inicialSeparacion(t.plus))} o ${usd(inicialSeparacion(t.full))} USD según tu Fecha de Viaje`,
    ganchoTema: (c) =>
      `Congela hoy el precio de tu viaje a ${c} pagando solo el 50% en nuestra oficina de Av. Antúnez de Mayolo 814 (Los Olivos) o por cuentas empresariales y completa el resto antes de volar.`,
  },
  {
    slugTema: "seguro-medico-schengen-obligatorio-para-peruanos",
    tituloTema: (c) => `Seguro Médico para Viajar a ${c} (Incluido en tu Paquete)`,
    subtituloTema: (_c, t) => `Póliza Oficial de 30.000€ Sin Deducible + Vuelo y Hotel Desde ${usd(t.promo)}`,
    ganchoTema: (c, t) =>
      `Todos nuestros paquetes migratorios a ${c} (${usd(t.promo)}, ${usd(t.smart)}, ${usd(t.plus)} y ${usd(t.full)}) ya incluyen tu póliza de seguro médico internacional para viajar a Europa.`,
  },
  {
    slugTema: "diferencia-entre-carta-de-invitacion-y-reserva-de-hotel",
    tituloTema: (c) => `Carta de Invitación vs. Reserva de Hotel para Viajar a ${c}: ¿Cuál Conviene?`,
    subtituloTema: (_c, t) => `Te Asesoramos y Armamos tu Paquete Ideal Desde ${usd(t.promo)} y ${usd(t.smart)}`,
    ganchoTema: (c) =>
      `Conoce por qué el 85% de los peruanos que viajan a ${c} prefieren entrar con Reserva de Hotel confirmada sin hacer pasar trámites ni multas a sus familiares en Europa.`,
  },
  {
    slugTema: "como-pasar-migraciones-tranquilo-desde-peru",
    tituloTema: (c) => `Cómo Viajar a ${c} desde Perú: Qué Llevar al Aeropuerto`,
    subtituloTema: () => `Agencia Formal RUC 20614914239 · Más de 5,000 Pasajeros Asesorados`,
    ganchoTema: (c) =>
      `Olvídate de agencias informales por redes sociales: en Cityland Travel te atendemos cara a cara en Los Olivos y te entregamos documentos 100% reales y verificables para tu viaje a ${c}.`,
  },
  {
    slugTema: "viajar-a-europa-en-pareja-paquete-migratorio",
    tituloTema: (c, t) => `Paquete Migratorio a ${c} para Parejas y Esposos Desde ${usd(t.promo)} c/u`,
    subtituloTema: () => `Vuelo Juntos + Habitación Doble Confirmada + Preparación en Pareja`,
    ganchoTema: (c) =>
      `Viajar en pareja a ${c} es mucho más sencillo cuando ambos llevan una sola reserva de hotel matrimonial, asientos contiguos y la misma fecha de retorno reservada.`,
  },
  {
    slugTema: "viajar-a-europa-en-familia-con-hijos-desde-peru",
    tituloTema: (c) => `Viajar en Familia a ${c} desde Perú — Paquete y Requisitos con Menores`,
    subtituloTema: (_c, t) => `Orientación sobre Permiso Notarial + Carpeta Familiar Desde ${usd(t.promo)}`,
    ganchoTema: (c) =>
      `Si viajas con tus hijos hacia ${c}, te orientamos sobre la autorización notarial de viaje en Lima y armamos la carpeta familiar completa con hotel y seguros.`,
  },
  {
    slugTema: "paquete-migratorio-con-maleta-de-23-kilos",
    tituloTema: (c) => `Paquete Migratorio a ${c} con Maleta Grande de 23 kg en Bodega`,
    subtituloTema: (_c, t) => `Lleva Toda tu Ropa de Abrigo · Plan Full ${usd(t.full)} (Separa con ${usd(inicialSeparacion(t.full))})`,
    ganchoTema: (c) =>
      `Si te vas a quedar en ${c} y necesitas llevar tu maleta grande de 23 kg en bodega además de tu equipaje de mano de 10 kg, nuestro Plan Full te incluye todo.`,
  },
  {
    slugTema: "solo-carpeta-migratoria-si-ya-compre-mi-pasaje",
    tituloTema: (c) => `¿Ya Compraste tu Pasaje a ${c}? Armamos Solo tu Carpeta Migratoria`,
    subtituloTema: () => `Reserva de Regreso + Reserva de Hotel + Seguro + Check-in`,
    ganchoTema: (c) =>
      `Si ya compraste un pasaje de solo ida a ${c} por internet y no te dejan embarcar sin retorno ni hotel, nosotros te armamos la carpeta documental completa en 24 horas.`,
  },
  {
    slugTema: "entrar-a-italia-o-francia-via-madrid-barajas",
    tituloTema: (c) => `Cómo Viajar a ${c} Entrando por Madrid-Barajas (Control en Español)`,
    subtituloTema: (_c, t) => `La Estrategia Más Segura para Peruanos · Planes desde ${usd(t.promo)} a ${usd(t.full)}`,
    ganchoTema: (c) =>
      `Al hacer tu primera parada europea en Madrid-Barajas pasas Migraciones hablando en tu propio idioma y luego continúas tranquilo hacia ${c}.`,
  },
  {
    slugTema: "requisitos-aeropuerto-jorge-chavez-para-volar-a-europa",
    tituloTema: (c) => `Qué Te Piden en el Counter del Aeropuerto Jorge Chávez al Volar a ${c}`,
    subtituloTema: () => `Preparamos tu Carpeta para Pasar el Counter de Lima sin Observaciones`,
    ganchoTema: (c) =>
      `El primer filtro no está en Europa, sino en el counter de la aerolínea en Lima: ahí pueden revisar tus documentos de viaje antes de entregarte tu tarjeta de embarque hacia ${c}.`,
  },
  {
    slugTema: "agencia-formal-en-los-olivos-para-viajar-a-europa",
    tituloTema: (c) => `Agencia de Viajes Formal en Los Olivos para tu Paquete Migratorio a ${c}`,
    subtituloTema: () => `Av. Antúnez de Mayolo 814, Los Olivos · RUC 20614914239`,
    ganchoTema: (c, t) =>
      `Ven en persona con tu familia a nuestra oficina en Los Olivos: revisa nuestros paquetes de ${usd(t.promo)}, ${usd(t.smart)}, ${usd(t.plus)} y ${usd(t.full)} a ${c}, separa con contrato formal y viaja seguro.`,
  },
  {
    slugTema: "fechas-mas-economicas-699-para-viajar-a-europa",
    tituloTema: (c, t) => `En Qué Meses Aplica la Tarifa de ${usd(t.promo)} USD para Viajar a ${c}`,
    subtituloTema: (_c, t) => `Calendario Transparente de Precios: ${usd(t.promo)} · ${usd(t.smart)} · ${usd(t.plus)} · ${usd(t.full)}`,
    ganchoTema: (c, t) =>
      `Te mostramos con total transparencia qué meses cuestan ${usd(t.promo)} (fines de Febrero, Marzo, Abril y Mayo), cuáles cuestan ${usd(t.smart)} (temporada media) y cuáles ${usd(t.plus)} o ${usd(t.full)} (fechas próximas o temporada alta) para volar a ${c}.`,
  },
  {
    slugTema: "paquete-smart-799-con-checkin-y-asesoria",
    tituloTema: (c, t) => `Qué Incluye el Paquete Migratorio Smart de ${usd(t.smart)} USD a ${c}`,
    subtituloTema: (_c, t) => `El Paquete Favorito de Nuestros Clientes · Separa Hoy con ${usd(inicialSeparacion(t.smart))} USD`,
    ganchoTema: (c, t) =>
      `El Plan Smart de ${usd(t.smart)} a ${c} incluye pasaje de ida, reserva de regreso, hotel confirmado, seguro médico, check-in 24h antes y preparación personalizada.`,
  },
  {
    slugTema: "como-verificar-tu-reserva-de-vuelo-y-hotel-para-migraciones",
    tituloTema: (c) => `Cómo Recibes tus Documentos y Reservas Verificables para Viajar a ${c}`,
    subtituloTema: () => `Entrega Presencial en Oficina o Digital Lista para Imprimir`,
    ganchoTema: (c) =>
      `24 horas antes de tu vuelo a ${c} dejamos activo tu check-in, tus tarjetas de embarque y tu reserva de retorno en sistema para que viajes con total tranquilidad.`,
  },
];

function construirLos4Planes(
  ciudad: string,
  slugLanding: string,
  t: TarifasMigratorio
): [PlanSuperLanding, PlanSuperLanding, PlanSuperLanding, PlanSuperLanding] {
  const refBase = `📍 Ref Web: citylandtravel.com/paquetes-migratorios/${slugLanding}`;
  return [
    {
      id: "promo",
      nombre: "Plan Promo Anticipado",
      etiqueta: "Ahorro Anticipado",
      precioUSD: t.promo,
      inicial50USD: inicialSeparacion(t.promo),
      fechasIdeales: "Salidas fines de Febrero, Marzo, Abril y Mayo (comprando con anticipación)",
      colorBadge: "bg-blue-600 text-white",
      resumen:
        "Para quienes planifican su viaje con tiempo y quieren el precio más bajo con todos los documentos para el aeropuerto.",
      incluye: [
        `Pasaje de avión de ida confirmado (Lima ➔ ${ciudad}) con bolso/equipaje de mano`,
        "Reserva del vuelo de regreso (activa el día de tu vuelo)",
        `Reserva de hotel confirmada en ${ciudad} por los días de estancia declarados`,
        "Seguro médico de viaje para Europa (cobertura 30.000€)",
        "Guía paso a paso en PDF con las preguntas y respuestas de Migraciones",
      ],
      waTextoBoton: `Quiero el Plan ${usd(t.promo)}`,
      waMensaje: `¡Hola! Quiero más información del paquete a ${ciudad} desde ${usd(t.promo)}.\n\n${refBase} [Plan ${usd(t.promo)}]`,
    },
    {
      id: "smart",
      nombre: "Plan Smart (Más Pedido)",
      etiqueta: "★ Más Pedido por Peruanos",
      precioUSD: t.smart,
      inicial50USD: inicialSeparacion(t.smart),
      fechasIdeales: "Salidas en temporada media (Octubre, Noviembre, Junio y Septiembre)",
      destacado: true,
      colorBadge: "bg-emerald-600 text-white",
      resumen:
        "Nuestro paquete estrella: incluye tu check-in hecho 24h antes por tu asesor y preparación personalizada 1 a 1.",
      incluye: [
        `Pasaje de avión de ida confirmado (Lima ➔ ${ciudad}) con equipaje de cabina 10 kg`,
        "Reserva del vuelo de regreso (activa 24h antes de tu embarque)",
        `Reserva de hotel verificable en ${ciudad} (o ajuste a tu Carta de Invitación)`,
        "Seguro médico de viaje internacional (30.000€ sin deducible)",
        "Check-in hecho por tu asesor 24h antes + Asesoría personalizada 1 a 1",
      ],
      waTextoBoton: `Quiero el Plan Smart ${usd(t.smart)}`,
      waMensaje: `¡Hola! Quiero más información del paquete Smart a ${ciudad} desde ${usd(t.smart)}.\n\n${refBase} [Plan Smart ${usd(t.smart)}]`,
    },
    {
      id: "plus",
      nombre: "Plan Plus Próximo / Conexión",
      etiqueta: "Salidas Cercanas / Conexión",
      precioUSD: t.plus,
      inicial50USD: inicialSeparacion(t.plus),
      fechasIdeales: "Salidas próximas (Enero y 1ra quincena de Febrero) o rutas con conexión",
      colorBadge: "bg-amber-600 text-white",
      resumen:
        "Ideal si quieres viajar pronto o necesitas conexión aérea directa hacia tu ciudad final en España, Italia o Francia.",
      incluye: [
        `Pasaje de avión confirmado (Lima ➔ ${ciudad}) en aerolíneas de primer nivel`,
        "Reserva de regreso + Reserva de hotel confirmada",
        "Seguro médico válido en todo el espacio Schengen (30.000€)",
        "Selección de asiento + Check-in gestionado 24 horas antes del vuelo",
        "Carpeta migratoria física impresa entregada en nuestra oficina de Los Olivos",
      ],
      waTextoBoton: `Quiero el Plan Plus ${usd(t.plus)}`,
      waMensaje: `¡Hola! Quiero más información del paquete Plus a ${ciudad} desde ${usd(t.plus)}.\n\n${refBase} [Plan Plus ${usd(t.plus)}]`,
    },
    {
      id: "full",
      nombre: "Plan Full Alta Demanda / 23 kg",
      etiqueta: "Temporada Alta / Maleta 23 kg",
      precioUSD: t.full,
      inicial50USD: inicialSeparacion(t.full),
      fechasIdeales: "Temporada alta (Diciembre, Julio y Agosto) o con maleta grande de 23 kg",
      colorBadge: "bg-red-600 text-white",
      resumen:
        "Para quienes viajan en meses de alta demanda o necesitan llevar maleta grande de 23 kg en la bodega del avión.",
      incluye: [
        `Pasaje de avión confirmado a ${ciudad} + Maleta de 23 kg en bodega + 10 kg en mano`,
        "Reserva del vuelo de regreso activa en sistema",
        `Reserva de hotel confirmada en ${ciudad} + Seguro médico de viaje 30.000€`,
        "Check-in, asignación de asiento y cálculo exacto de tu bolsa de viaje",
        "Atención prioritaria 1 a 1 hasta que pases el control y llegues a tu destino",
      ],
      waTextoBoton: `Quiero el Plan Full ${usd(t.full)}`,
      waMensaje: `¡Hola! Quiero más información del paquete Full a ${ciudad} desde ${usd(t.full)}.\n\n${refBase} [Plan Full ${usd(t.full)}]`,
    },
  ];
}

function construirExplicacionIdaYVuelta(ciudad: string, pais: string) {
  return {
    pregunta: `¿Qué incluye tu Paquete Migratorio a ${ciudad}?`,
    respuestaDirecta: `Viaja a ${ciudad} (${pais}) con tu carpeta de viaje armada: pasaje de ida, reserva de regreso, hotel y seguro.`,
    ahorroExplicado: `Estos son los 5 documentos incluidos en tu paquete:`,
    documentosIncluidos: [
      {
        icono: "✈️",
        titulo: `1. Pasaje de avión de ida a ${ciudad}`,
        descripcion: "Boleto aéreo emitido a tu nombre saliendo desde Lima.",
      },
      {
        icono: "🎫",
        titulo: "2. Reserva del vuelo de regreso",
        descripcion: "Activa en sistema 24h antes. No es un boleto emitido.",
      },
      {
        icono: "🏨",
        titulo: `3. Reserva de hotel en ${ciudad}`,
        descripcion: "Alojamiento confirmado o cuadre con tu Carta de Invitación.",
      },
      {
        icono: "🛡️",
        titulo: "4. Seguro médico Schengen 30.000€",
        descripcion: "Póliza internacional obligatoria sin deducible para toda Europa.",
      },
      {
        icono: "📋",
        titulo: "5. Check-in 24h antes y asesoría",
        descripcion: "Tarjetas de embarque listas y guía práctica 1 a 1 para tu viaje.",
      },
    ],
  };
}

function construirFaqsPeruano(ciudad: string, _pais: string): { q: string; a: string }[] {
  return [
    {
      q: `¿Qué incluye la carpeta para viajar a ${ciudad}?`,
      a: `Pasaje de ida, reserva de regreso, hotel, seguro 30.000€ y check-in. La decisión de dejarte entrar es de la policía de frontera, que puede pedirte tu boleto de vuelta. La reserva de regreso no es un boleto emitido: si quieres viajar con el regreso emitido, te cotizamos ida y vuelta.`,
    },
    {
      q: `¿Cómo funciona la separación con el 50%?`,
      a: `Congelas tu tarifa hoy abonando el 50% de inicial y completas el otro 50% en cuotas programadas antes de tu fecha de vuelo.`,
    },
    {
      q: `¿Necesito tener Carta de Invitación de un familiar en ${ciudad}?`,
      a: `No es necesario. Tu paquete ya incluye Reserva de Hotel confirmada en ${ciudad}; y si tienes Carta de Invitación, cuadramos tus fechas a tu carta.`,
    },
    {
      q: `¿Dónde queda su oficina física para atenderme en persona?`,
      a: `Te esperamos en Av. Antúnez de Mayolo 814, Los Olivos, Lima (Cityland Group E.I.R.L. · RUC 20614914239), o por WhatsApp desde todo el Perú.`,
    },
  ];
}

// ── Generación Determinística de las 1,000 Super-Landings ──
function generarCatalogo1000(): ResumenSuperLanding[] {
  const lista: ResumenSuperLanding[] = [];

  const armarItem = (params: {
    slug: string;
    silo: DatosSuperLandingMigratorio["silo"];
    siloNombre: string;
    ciudadCfg: ConfigCiudadEuropa;
    origenPasajero: string;
    tituloH1: string;
    subtituloHero: string;
    ganchoPeruano: string;
    detalleExtraOrigen?: string;
    indice: number;
  }): ResumenSuperLanding => {
    const {
      slug,
      silo,
      siloNombre,
      ciudadCfg,
      origenPasajero,
      tituloH1,
      subtituloHero,
      ganchoPeruano,
      detalleExtraOrigen,
      indice,
    } = params;

    // El hero es siempre la foto de SU ciudad: el alt y la etiqueta del monumento salen de la misma ciudad.
    const heroFinal = ciudadCfg.imagenHero;
    const t = tarifasMigratorio(ciudadCfg.pais);

    return {
      slug,
      silo,
      siloNombre,
      pais: ciudadCfg.pais,
      ciudadDestino: ciudadCfg.ciudad,
      origenPasajero,
      titulo: tituloH1,
      subtitulo: subtituloHero,
      imagenHero: heroFinal,
      precioPromo: t.promo,
      precioSmart: t.smart,
      precioPlus: t.plus,
      precioFull: t.full,
      construirDatos: () => {
        const total = INDICE_PAQUETES_MIGRATORIOS_1000.length;
        const enlacesRelacionados: DatosSuperLandingMigratorio["enlacesRelacionados"] = [];
        if (total > 12) {
          const paso = Math.max(1, Math.floor(total / 14));
          for (let i = 1; i <= 12; i++) {
            const candidato = INDICE_PAQUETES_MIGRATORIOS_1000[(indice + i * paso) % total];
            if (candidato && candidato.slug !== slug) {
              enlacesRelacionados.push({
                titulo: candidato.titulo,
                href: `/paquetes-migratorios/${candidato.slug}`,
                ciudad: candidato.ciudadDestino,
                pais: candidato.pais,
                precioDesde: candidato.precioPromo,
              });
            }
          }
        }

        const metaTitleRaw = `${tituloH1} | Cityland Travel`;
        const metaTitle =
          metaTitleRaw.length > 62
            ? `${tituloH1.slice(0, 48).trim()}... | Cityland`
            : metaTitleRaw;
        const metaDescRaw = `${ganchoPeruano} Planes de ${listaPreciosPlanes(t)} USD según tu fecha. Separa con el 50% en Los Olivos (RUC 20614914239).`;
        const metaDescription =
          metaDescRaw.length > 158
            ? `${metaDescRaw.slice(0, 155).trim()}...`
            : metaDescRaw;

        return {
          slug,
          silo,
          siloNombre,
          pais: ciudadCfg.pais,
          banderaPais: ciudadCfg.bandera,
          ciudadDestino: ciudadCfg.ciudad,
          regionDestino: ciudadCfg.region,
          aeropuertoLlegada: ciudadCfg.aeropuerto,
          codigoRuta: `LIM ➔ ${ciudadCfg.iata}`,
          origenPasajero,
          aerolineas: ciudadCfg.aerolineas,
          monumentoDestacado: ciudadCfg.monumento,
          imagenHero: heroFinal,
          galeriaCiudad: ciudadCfg.galeria,
          tituloH1,
          subtituloHero,
          ganchoPeruano: detalleExtraOrigen
            ? `${ganchoPeruano} ${detalleExtraOrigen}`
            : ganchoPeruano,
          explicacionIdaYVuelta: construirExplicacionIdaYVuelta(
            ciudadCfg.ciudad,
            ciudadCfg.pais
          ),
          planes: construirLos4Planes(ciudadCfg.ciudad, slug, t),
          precioDesdeUSD: t.promo,
          infoLlegadaCiudad: {
            comoLlegarCentro: ciudadCfg.comoLlegarCentro,
            zonasPeruanos: ciudadCfg.zonasPeruanos,
            consejoLocal: ciudadCfg.consejoLocal,
          },
          faqs: construirFaqsPeruano(ciudadCfg.ciudad, ciudadCfg.pais),
          metaTitle,
          metaDescription,
          keywords: [
            `paquete migratorio a ${ciudadCfg.ciudad.toLowerCase()}`,
            `viajar a ${ciudadCfg.ciudad.toLowerCase()} desde peru ${t.promo}`,
            `paquete smart ${ciudadCfg.ciudad.toLowerCase()} ${t.smart}`,
            `reserva de regreso ${ciudadCfg.ciudad.toLowerCase()}`,
            `viajar a ${ciudadCfg.pais.toLowerCase()} sin carta de invitacion`,
          ],
          enlacesRelacionados,
        };
      },
    };
  };

  // 1, 2 y 3. SILOS ESPAÑA (400), ITALIA (250) Y FRANCIA/EUROPA (150)
  // Ordenados por ronda de intención e intercalando ciudades para que las primeras 65 tarjetas
  // sean las 65 ciudades distintas de Europa sin repetir ni una sola imagen.
  const maxRondas = Math.max(
    INTENCIONES_ESPANA.length,
    INTENCIONES_ITALIA.length,
    INTENCIONES_FRANCIA_EUROPA.length
  );

  for (let r = 0; r < maxRondas; r++) {
    const maxCiudades = Math.max(
      CIUDADES_ESPANA.length,
      CIUDADES_ITALIA.length,
      CIUDADES_FRANCIA_EUROPA.length
    );

    for (let cIdx = 0; cIdx < maxCiudades; cIdx++) {
      // A) España (25 ciudades × 16 intenciones = 400)
      if (r < INTENCIONES_ESPANA.length && cIdx < CIUDADES_ESPANA.length) {
        const c = CIUDADES_ESPANA[cIdx];
        const int = INTENCIONES_ESPANA[r];
        const t = tarifasMigratorio(c.pais);
        const idx = lista.length;
        lista.push(
          armarItem({
            slug: `espana-${c.slugCiudad}-${int.slugIntencion}`,
            silo: "espana",
            siloNombre: "Paquetes Migratorios a España",
            ciudadCfg: c,
            origenPasajero: "Lima y Todo el Perú",
            tituloH1: int.focoTitulo(c.ciudad, t),
            subtituloHero: int.focoSubtitulo(c.ciudad, t),
            ganchoPeruano: int.focoGancho(c.ciudad, t),
            indice: idx,
          })
        );
      }

      // B) Italia (25 ciudades × 10 intenciones = 250)
      if (r < INTENCIONES_ITALIA.length && cIdx < CIUDADES_ITALIA.length) {
        const c = CIUDADES_ITALIA[cIdx];
        const int = INTENCIONES_ITALIA[r];
        const t = tarifasMigratorio(c.pais);
        const idx = lista.length;
        lista.push(
          armarItem({
            slug: `italia-${c.slugCiudad}-${int.slugIntencion}`,
            silo: "italia",
            siloNombre: "Paquetes Migratorios a Italia",
            ciudadCfg: c,
            origenPasajero: "Lima y Todo el Perú",
            tituloH1: int.focoTitulo(c.ciudad, t),
            subtituloHero: int.focoSubtitulo(c.ciudad, t),
            ganchoPeruano: int.focoGancho(c.ciudad, t),
            indice: idx,
          })
        );
      }

      // C) Francia y Resto de Europa (15 ciudades × 10 intenciones = 150)
      if (
        r < INTENCIONES_FRANCIA_EUROPA.length &&
        cIdx < CIUDADES_FRANCIA_EUROPA.length
      ) {
        const c = CIUDADES_FRANCIA_EUROPA[cIdx];
        const int = INTENCIONES_FRANCIA_EUROPA[r];
        const t = tarifasMigratorio(c.pais);
        const idx = lista.length;
        lista.push(
          armarItem({
            slug: `europa-${c.slugCiudad}-${int.slugIntencion}`,
            silo: "francia-europa",
            siloNombre: `Paquetes Migratorios a ${c.pais}`,
            ciudadCfg: c,
            origenPasajero: "Lima y Todo el Perú",
            tituloH1: int.focoTitulo(c.ciudad, c.pais, t),
            subtituloHero: int.focoSubtitulo(c.ciudad, t),
            ganchoPeruano: int.focoGancho(c.ciudad, c.pais, t),
            indice: idx,
          })
        );
      }
    }
  }

  // 4. SILO SALIDAS DESDE EL PERÚ: 20 orígenes × 5 ciudades top = 100 Super-Landings
  const TOP_5_EUROPA: ConfigCiudadEuropa[] = [
    CIUDADES_ESPANA[0], // Madrid
    CIUDADES_ESPANA[1], // Barcelona
    CIUDADES_ITALIA[0], // Milán
    CIUDADES_ITALIA[1], // Roma
    CIUDADES_FRANCIA_EUROPA[0], // París
  ];

  for (const orig of ORIGENES_PERU) {
    for (const c of TOP_5_EUROPA) {
      const t = tarifasMigratorio(c.pais);
      const idx = lista.length;
      lista.push(
        armarItem({
          slug: `desde-${orig.slugOrigen}-a-${c.slugCiudad}`,
          silo: "salidas-peru",
          siloNombre: "Salidas desde Lima y Provincias del Perú",
          ciudadCfg: c,
          origenPasajero: orig.nombreOrigen,
          tituloH1: `Paquete Migratorio a ${c.ciudad} para Viajeros de ${orig.nombreOrigen}`,
          subtituloHero: `Planes de ${listaPreciosPlanes(t)} USD · Separa hoy con el 50%`,
          ganchoPeruano: `Armamos tu paquete migratorio completo hacia ${c.ciudad} (${c.pais}) con pasaje de avión de ida, reserva de regreso, reserva de hotel y seguro médico.`,
          detalleExtraOrigen:
            typeof orig.detalleSalida === "function" ? orig.detalleSalida(t) : orig.detalleSalida,
          indice: idx,
        })
      );
    }
  }

  // 5. SILO DUDAS Y OBJECIONES MIGRATORIAS: 20 temas × 5 destinos top = 100 Super-Landings
  for (const tema of TEMAS_DUDAS_MIGRATORIAS) {
    for (const c of TOP_5_EUROPA) {
      const t = tarifasMigratorio(c.pais);
      const idx = lista.length;
      lista.push(
        armarItem({
          slug: `guia-${c.slugCiudad}-${tema.slugTema}`,
          silo: "guias-dudas",
          siloNombre: "Guías y Solución de Dudas Migratorias",
          ciudadCfg: c,
          origenPasajero: "Lima y Todo el Perú",
          tituloH1: tema.tituloTema(c.ciudad, t),
          subtituloHero: tema.subtituloTema(c.ciudad, t),
          ganchoPeruano: tema.ganchoTema(c.ciudad, t),
          indice: idx,
        })
      );
    }
  }

  return lista;
}

export type SiloMigratorioId = DatosSuperLandingMigratorio["silo"];

export interface PlanMigratorioOficialResumen {
  id: string;
  nombre: string;
  etiqueta: string;
  temporada: string;
  precioUSD: number;
  separaConUSD: number;
  destacado?: boolean;
  incluye: string[];
  mensajeWhatsAppBase: string;
}

// Escala general (España y resto de Europa). Italia y Francia tienen la suya en lib/precios-migratorio.ts.
export const PLANES_MIGRATORIOS_OFICIALES: PlanMigratorioOficialResumen[] = [
  {
    id: "promo-699",
    nombre: "Plan Promo",
    etiqueta: "Ahorro Anticipado",
    temporada: "Fines de Febrero, Marzo, Abril y Mayo",
    precioUSD: TARIFAS_MIGRATORIO_BASE.promo,
    separaConUSD: inicialSeparacion(TARIFAS_MIGRATORIO_BASE.promo),
    incluye: [
      "Pasaje de avión de ida emitido a tu nombre",
      "Reserva del vuelo de regreso",
      "Reserva de hotel confirmada por los días declarados",
      "Seguro médico de viaje (30.000€)",
      "Check-in 24h antes + Guía paso a paso de Migraciones",
    ],
    mensajeWhatsAppBase: `¡Hola! Quiero más información del paquete desde ${usd(TARIFAS_MIGRATORIO_BASE.promo)}`,
  },
  {
    id: "smart-799",
    nombre: "Plan Smart",
    etiqueta: "★ El Más Pedido",
    temporada: "Junio, Septiembre, Octubre y Noviembre",
    precioUSD: TARIFAS_MIGRATORIO_BASE.smart,
    separaConUSD: inicialSeparacion(TARIFAS_MIGRATORIO_BASE.smart),
    destacado: true,
    incluye: [
      "Pasaje de avión de ida con equipaje de cabina 10 kg",
      "Reserva de regreso activa 24h antes",
      "Reserva de hotel verificable o cuadre con Carta de Invitación",
      "Seguro médico Schengen 30.000€ sin deducible",
      "Check-in hecho 24h antes + Asesoría personalizada 1 a 1",
    ],
    mensajeWhatsAppBase: `¡Hola! Quiero más información del paquete Smart desde ${usd(TARIFAS_MIGRATORIO_BASE.smart)}`,
  },
  {
    id: "plus-899",
    nombre: "Plan Plus",
    etiqueta: "Salidas Cercanas / Conexión",
    temporada: "Enero, 1ra quincena de Febrero o vuelos con conexión",
    precioUSD: TARIFAS_MIGRATORIO_BASE.plus,
    separaConUSD: inicialSeparacion(TARIFAS_MIGRATORIO_BASE.plus),
    incluye: [
      "Pasaje de avión de ida confirmado en aerolíneas oficiales",
      "Reserva de regreso + Hotel",
      "Seguro médico Schengen de 30.000€",
      "Selección de asiento + Check-in hecho 24h antes",
      "Carpeta física impresa entregada en nuestra sede de Los Olivos",
    ],
    mensajeWhatsAppBase: `¡Hola! Quiero más información del paquete Plus desde ${usd(TARIFAS_MIGRATORIO_BASE.plus)}`,
  },
  {
    id: "full-999",
    nombre: "Plan Full 23 kg",
    etiqueta: "Temporada Alta / Maleta 23 kg",
    temporada: "Diciembre, Julio, Agosto o incluye maleta de 23 kg en bodega",
    precioUSD: TARIFAS_MIGRATORIO_BASE.full,
    separaConUSD: inicialSeparacion(TARIFAS_MIGRATORIO_BASE.full),
    incluye: [
      "Pasaje de avión de ida + Maleta de 23 kg en bodega + 10 kg mano",
      "Reserva del vuelo de regreso",
      "Reserva de hotel confirmada + Seguro médico 30.000€",
      "Check-in, asignación de asiento y cálculo de bolsa de viaje",
      "Atención prioritaria 1 a 1 hasta tu ingreso a Europa",
    ],
    mensajeWhatsAppBase: `¡Hola! Quiero más información del paquete Full con maleta de 23 kg desde ${usd(TARIFAS_MIGRATORIO_BASE.full)}`,
  },
];

export const INDICE_PAQUETES_MIGRATORIOS_1000: ResumenSuperLanding[] =
  generarCatalogo1000();

export const CATALOGO_PAQUETES_MIGRATORIOS_1000: ResumenSuperLanding[] =
  INDICE_PAQUETES_MIGRATORIOS_1000;

const MAPA_POR_SLUG = new Map<string, ResumenSuperLanding>(
  INDICE_PAQUETES_MIGRATORIOS_1000.map((item) => [item.slug, item])
);

export function obtenerSuperLandingPorSlug(
  slug: string
): DatosSuperLandingMigratorio | null {
  const limpio = decodeURIComponent(slug).trim().toLowerCase();
  const directo = MAPA_POR_SLUG.get(limpio);
  if (directo) return directo.construirDatos();

  // 1. Equivalencias entre sufijos de intención (plan-promo-699 <-> paquete-migratorio-699, etc.)
  const reemplazosSufijo: [ string, string ][] = [
    ["-plan-promo-699", "-paquete-migratorio-699"],
    ["-paquete-migratorio-699", "-plan-promo-699"],
    ["-plan-smart-799", "-paquete-smart-799"],
    ["-paquete-smart-799", "-plan-smart-799"],
    ["-plan-plus-899", "-paquete-plus-899"],
    ["-plan-plus-899", "-paquete-plus-conexion-899"],
    ["-plan-full-999", "-paquete-full-999"],
    ["-plan-full-999", "-paquete-full-maleta-999"],
  ];
  for (const [de, a] of reemplazosSufijo) {
    if (limpio.endsWith(de)) {
      const alt = MAPA_POR_SLUG.get(limpio.slice(0, -de.length) + a);
      if (alt) return alt.construirDatos();
    }
  }

  // 2. Soporte de slugs cortos (ej. paquete-migratorio-madrid-desde-699, paquete-migratorio-milan-desde-699, paquete-migratorio-paris-desde-699)
  const mCorto = limpio.match(
    /^paquete-migratorio-(.+?)(?:-(desde-699|699|smart-799|799|plus-899|899|full-999|999))?$/
  );
  if (mCorto) {
    const ciudadSlug = mCorto[1];
    const tipo = mCorto[2] || "desde-699";
    const sufijosProbar = tipo.includes("799")
      ? ["plan-smart-799", "paquete-smart-799"]
      : tipo.includes("899")
      ? ["plan-plus-899", "paquete-plus-899", "paquete-plus-conexion-899"]
      : tipo.includes("999")
      ? ["plan-full-999", "paquete-full-999", "paquete-full-maleta-999"]
      : ["plan-promo-699", "paquete-migratorio-699"];

    for (const prefijo of ["espana", "italia", "europa"]) {
      for (const suf of sufijosProbar) {
        const cand = MAPA_POR_SLUG.get(`${prefijo}-${ciudadSlug}-${suf}`);
        if (cand) return cand.construirDatos();
      }
    }
  }

  // 3. Soporte de salidas desde Perú con sufijos regionales (ej. desde-los-olivos-lima-norte-a-madrid)
  const mDesde = limpio.match(/^desde-(.+)-a-([a-z0-9-]+)$/);
  if (mDesde) {
    const origenRaw = mDesde[1];
    const ciudadRaw = mDesde[2];
    const origMatch = ORIGENES_PERU.find(
      (o) =>
        origenRaw === o.slugOrigen ||
        origenRaw.startsWith(o.slugOrigen) ||
        o.slugOrigen.startsWith(origenRaw)
    );
    if (origMatch) {
      const candDesde = MAPA_POR_SLUG.get(
        `desde-${origMatch.slugOrigen}-a-${ciudadRaw}`
      );
      if (candDesde) return candDesde.construirDatos();
    }
  }

  // 4. Soporte de guías con variaciones de artículos (ej. guia-madrid-como-funciona-el-boleto-de-regreso-para-migraciones)
  if (limpio.startsWith("guia-")) {
    const sinArticulos = limpio.replace(/-(el|la|los|las|de|del|en|un|una)-/g, "-");
    for (const item of INDICE_PAQUETES_MIGRATORIOS_1000) {
      if (item.silo === "guias-dudas") {
        const itemSinArt = item.slug.replace(
          /-(el|la|los|las|de|del|en|un|una)-/g,
          "-"
        );
        if (itemSinArt === sinArticulos) {
          return item.construirDatos();
        }
      }
    }
  }

  // 5. Respaldo inteligente por ciudad: si el slug menciona cualquiera de las 65 ciudades, devolver la landing principal de esa ciudad
  const todasCiudades = [
    ...CIUDADES_ESPANA,
    ...CIUDADES_ITALIA,
    ...CIUDADES_FRANCIA_EUROPA,
  ];
  const ciudadEncontrada = todasCiudades.find(
    (c) =>
      limpio === c.slugCiudad ||
      limpio.includes(`-${c.slugCiudad}-`) ||
      limpio.endsWith(`-${c.slugCiudad}`) ||
      limpio.startsWith(`${c.slugCiudad}-`)
  );
  if (ciudadEncontrada) {
    const fallbackCiudad = INDICE_PAQUETES_MIGRATORIOS_1000.find(
      (item) => item.ciudadDestino === ciudadEncontrada.ciudad
    );
    if (fallbackCiudad) return fallbackCiudad.construirDatos();
  }

  return null;
}

export function obtenerSuperLandingsPorSilo(
  silo: SiloMigratorioId
): ResumenSuperLanding[] {
  return INDICE_PAQUETES_MIGRATORIOS_1000.filter((item) => item.silo === silo);
}

