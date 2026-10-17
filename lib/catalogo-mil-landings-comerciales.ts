import { ConfiguracionLandingAerolinea } from "@/components/AirlineLandingTemplate";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export interface LandingComercialSEO {
  slug: string;
  cluster:
    | "mundiales"
    | "all-inclusive"
    | "cruceros"
    | "visas-seguros"
    | "tours"
    | "empresas"
    | "colegios-deportes"
    | "religiosos-eventos";
  clusterNombre: string;
  titulo: string;
  destinoOPais: string;
  precioDesdeUSD: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
  config: ConfiguracionLandingAerolinea;
}

type Galeria4 = [string, string, string, string];

const FOTOS_GALERIA: Record<string, Galeria4> = {
  espana: [
    "/images/espana/gran-via-metropolis.jpg",
    "/images/espana/palacio-real.jpg",
    "/images/espana/puerta-de-alcala.jpg",
    "/images/espana/plaza-mayor.jpg",
  ],
  europa: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=85",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=85",
  ],
  turquia: [
    "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=85",
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=85",
  ],
  medioOrienteAsia: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=85",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=85",
    "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=85",
  ],
  usaCanada: [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=85",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=85",
  ],
  caribe: [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=85",
    "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
  ],
  mexico: [
    "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=85",
    "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=85",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
  ],
  sudamerica: [
    "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=85",
    "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=85",
    "/images/paquetes/panama-medellin/hero-panama.jpg",
  ],
  peru: [
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
    "https://images.unsplash.com/photo-1545330785-15356daae141?w=1200&q=85",
    "https://images.unsplash.com/photo-1716618704106-b335685a6b4d?w=1200&q=85",
    "https://images.unsplash.com/photo-1723134087756-3fdd46625a84?w=1200&q=85",
  ],
  cruceros: [
    "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
    "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1200&q=85",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
  ],
  visasSeguros: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
    "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85",
    "/images/espana/barajas.jpg",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85",
  ],
  corporativo: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
  ],
};

function armarLandingComercial(params: {
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
  fotos: Galeria4;
  checksBase: [string, string, string];
  checksPlus: [string, string, string];
  checksVip: [string, string, string];
  tituloCard1: string;
  subCard1: string;
  precioCard1: number;
  tagCard1: string;
  tituloCard2: string;
  subCard2: string;
  precioCard2: number;
  tagCard2: string;
  tituloCard3: string;
  subCard3: string;
  precioCard3: number;
  tagCard3: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
}): LandingComercialSEO {
  const {
    slug,
    cluster,
    clusterNombre,
    badge,
    banderas,
    tituloHero,
    tituloDestacado,
    descripcionHero,
    negritaHero,
    destinoOPais,
    precioBase,
    etiquetaVitrina,
    duracionOServicio,
    checksBase,
    checksPlus,
    checksVip,
    tituloCard1,
    subCard1,
    precioCard1,
    tagCard1,
    tituloCard2,
    subCard2,
    precioCard2,
    tagCard2,
    tituloCard3,
    subCard3,
    precioCard3,
    tagCard3,
    keywords,
    faqs,
  } = params;

  const tituloCompleto = `${tituloHero} ${tituloDestacado}`.trim();
  const mitadBase = Math.max(20, Math.round(precioBase * 0.5));
  const msgPrincipal = `¡Hola Cityland Travel! Vi su promoción web de "${tituloCompleto}" (Desde $${precioBase.toLocaleString("en-US")} USD) y deseo recibir una cotización personalizada.`;

  const fallbackRegion =
    cluster === "cruceros"
      ? "cruceros"
      : cluster === "visas-seguros"
      ? "visasSeguros"
      : cluster === "empresas"
      ? "corporativo"
      : undefined;

  const [f0, f1, f2, f3, f4] = obtenerGaleriaPorTexto(
    `${slug} ${etiquetaVitrina} ${tituloCompleto}`,
    fallbackRegion
  );

  return {
    slug,
    cluster,
    clusterNombre,
    titulo: tituloCompleto,
    destinoOPais,
    precioDesdeUSD: precioBase,
    metaTitle: `${tituloCompleto} Desde $${precioBase.toLocaleString("en-US")} USD | Cityland Travel Perú`,
    metaDescription: `${descripcionHero} ${negritaHero} Cotiza hoy Desde $${precioBase.toLocaleString("en-US")} USD con código PNR verificable, RUC 20614914239 y atención por WhatsApp 944 103 890.`,
    keywords,
    faqs,
    config: {
      badgeHero: badge,
      banderasHero: banderas,
      tituloHero,
      tituloDestacadoHero: tituloDestacado,
      descripcionHero,
      negritaHero,
      ctaPrincipalTexto: "Cotizar Oferta por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje: msgPrincipal,
      checksHero: checksBase,
      vitrina: {
        pais: destinoOPais,
        etiquetaIzq: destinoOPais,
        etiquetaDer: precioBase >= 180 ? "Separa con 50%" : "Emisión Inmediata",
        img: f0,
        alt: tituloCompleto,
        sobretitulo: duracionOServicio,
        titulo: etiquetaVitrina,
        labelPrecio: "Tarifa Promocional por Pasajero",
        precio: `$${precioBase.toLocaleString("en-US")}`,
        moneda: "USD",
        notaInferior:
          precioBase >= 180
            ? `Separa hoy con $${mitadBase.toLocaleString("en-US")} USD (50% de inicial)`
            : "Emisión oficial con factura o boleta electrónica SUNAT",
        waNumero: "51944103890",
        waMensaje: msgPrincipal,
      },
      seccionCatalogo: {
        sobretitulo: `${clusterNombre} · Tarifas Verificadas en Dólares`,
        titulo: `Opciones y Paquetes Disponibles: ${destinoOPais}`,
        filtros: [
          { id: "todos", label: "Todas las Ofertas" },
          { id: "ahorro", label: "Tarifa Económica / Promo" },
          { id: "completo", label: "Programa Completo" },
          { id: "vip", label: "Lujo 5★ / Grupal" },
        ],
      },
      items: [
        {
          id: `${slug}-1`,
          titulo: tituloCard1,
          pais: destinoOPais,
          filtro: "ahorro",
          subtitulo: subCard1,
          precioPrincipal: `$${precioCard1.toLocaleString("en-US")}`,
          precioSecundario:
            precioCard1 >= 180
              ? `$${Math.round(precioCard1 * 0.5).toLocaleString("en-US")}`
              : undefined,
          notaPrecio: "Tarifa promocional verificada · Impuestos incluidos",
          tag: tagCard1,
          tagBg: "bg-red-600",
          img: f1,
          alt: tituloCard1,
          resumenCorto: "Confirmación inmediata con código oficial",
          checks: checksBase,
          waNumber: "51944103890",
          waMensaje: `¡Hola Cityland Travel! Quiero cotizar la promoción: ${tituloCard1} (Desde $${precioCard1.toLocaleString("en-US")} USD).`,
        },
        {
          id: `${slug}-2`,
          titulo: tituloCard2,
          pais: destinoOPais,
          filtro: "completo",
          subtitulo: subCard2,
          precioPrincipal: `$${precioCard2.toLocaleString("en-US")}`,
          precioSecundario:
            precioCard2 >= 180
              ? `$${Math.round(precioCard2 * 0.5).toLocaleString("en-US")}`
              : undefined,
          notaPrecio: "Incluye gestión integral y asistencia 24/7",
          tag: tagCard2,
          tagBg: "bg-blue-700",
          img: f2,
          alt: tituloCard2,
          resumenCorto: "La opción más elegida por nuestros viajeros",
          checks: checksPlus,
          waNumber: "51944103890",
          waMensaje: `¡Hola Cityland Travel! Quiero cotizar la opción: ${tituloCard2} (Desde $${precioCard2.toLocaleString("en-US")} USD).`,
        },
        {
          id: `${slug}-3`,
          titulo: tituloCard3,
          pais: destinoOPais,
          filtro: "vip",
          subtitulo: subCard3,
          precioPrincipal: `$${precioCard3.toLocaleString("en-US")}`,
          precioSecundario:
            precioCard3 >= 180
              ? `$${Math.round(precioCard3 * 0.5).toLocaleString("en-US")}`
              : undefined,
          notaPrecio: "Atención preferencial VIP y tarifas de grupo",
          tag: tagCard3,
          tagBg: "bg-emerald-700",
          img: f3,
          alt: tituloCard3,
          resumenCorto: "Experiencia superior o descuento grupal/corporativo",
          checks: checksVip,
          waNumber: "51944103890",
          waMensaje: `¡Hola Cityland Travel! Quiero cotizar la modalidad: ${tituloCard3} (Desde $${precioCard3.toLocaleString("en-US")} USD).`,
        },
      ],
      pilares: [
        {
          titulo: "Código PNR Oficial",
          sub: "Reserva aérea y hotelera verificable en sistema",
        },
        {
          titulo: "Separa con el 50%",
          sub: "Congela tu tarifa hoy y paga el saldo en cuotas",
        },
        {
          titulo: "RUC 20614914239",
          sub: "Boleta y Factura Electrónica SUNAT para personas y empresas",
        },
        {
          titulo: "Oficina Física en Lima",
          sub: "Av. Antúnez de Mayolo 814, Los Olivos · WhatsApp 944 103 890",
        },
      ],
      bannerFinal: {
        sobretitulo: "Central de Reservas Cityland Travel · Lima, Perú",
        titulo: `Cotiza hoy: ${tituloCompleto}`,
        descripcion:
          "Escríbenos por WhatsApp indicando tu fecha estimada y número de pasajeros para enviarte la cotización formal en minutos.",
        ctaTexto: "Solicitar Cotización por WhatsApp",
        waNumero: "51944103890",
        waMensaje: msgPrincipal,
        img: f4,
        alt: tituloCompleto,
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar por WhatsApp",
        mensaje: msgPrincipal,
      },
    },
  };
}

// ============================================================================
// CLUSTER 1: 55 DESTINOS MUNDIALES × 4 MODALIDADES = 220 LANDINGS
// (Paquetes Turísticos, Paquetes Baratos, Viajes de Lujo 5★, Vuelo + Hotel)
// ============================================================================
const DESTINOS_MUNDIALES: {
  slug: string;
  ciudad: string;
  pais: string;
  duracion: string;
  precioEco: number;
  precioClasico: number;
  precioLujo: number;
  galeriaKey: keyof typeof FOTOS_GALERIA;
}[] = [
  { slug: "madrid", ciudad: "Madrid", pais: "España", duracion: "8 Días / 7 Noches", precioEco: 890, precioClasico: 1390, precioLujo: 2290, galeriaKey: "espana" },
  { slug: "barcelona", ciudad: "Barcelona", pais: "España", duracion: "8 Días / 7 Noches", precioEco: 920, precioClasico: 1450, precioLujo: 2390, galeriaKey: "espana" },
  { slug: "roma", ciudad: "Roma", pais: "Italia", duracion: "8 Días / 7 Noches", precioEco: 990, precioClasico: 1590, precioLujo: 2590, galeriaKey: "europa" },
  { slug: "paris", ciudad: "París", pais: "Francia", duracion: "8 Días / 7 Noches", precioEco: 990, precioClasico: 1590, precioLujo: 2690, galeriaKey: "europa" },
  { slug: "amsterdam", ciudad: "Ámsterdam", pais: "Países Bajos", duracion: "7 Días / 6 Noches", precioEco: 980, precioClasico: 1550, precioLujo: 2490, galeriaKey: "europa" },
  { slug: "londres", ciudad: "Londres", pais: "Reino Unido", duracion: "8 Días / 7 Noches", precioEco: 1090, precioClasico: 1690, precioLujo: 2790, galeriaKey: "europa" },
  { slug: "lisboa", ciudad: "Lisboa", pais: "Portugal", duracion: "7 Días / 6 Noches", precioEco: 950, precioClasico: 1490, precioLujo: 2350, galeriaKey: "europa" },
  { slug: "atenas", ciudad: "Atenas e Islas Griegas", pais: "Grecia", duracion: "9 Días / 8 Noches", precioEco: 1290, precioClasico: 1890, precioLujo: 3190, galeriaKey: "europa" },
  { slug: "zurich", ciudad: "Zúrich y Alpes Suizos", pais: "Suiza", duracion: "7 Días / 6 Noches", precioEco: 1190, precioClasico: 1850, precioLujo: 3290, galeriaKey: "europa" },
  { slug: "praga", ciudad: "Praga", pais: "República Checa", duracion: "7 Días / 6 Noches", precioEco: 1050, precioClasico: 1590, precioLujo: 2490, galeriaKey: "europa" },
  { slug: "viena", ciudad: "Viena", pais: "Austria", duracion: "7 Días / 6 Noches", precioEco: 1080, precioClasico: 1650, precioLujo: 2590, galeriaKey: "europa" },
  { slug: "estambul", ciudad: "Estambul", pais: "Turquía", duracion: "9 Días / 8 Noches", precioEco: 1490, precioClasico: 1790, precioLujo: 2890, galeriaKey: "turquia" },
  { slug: "capadocia", ciudad: "Capadocia y Estambul", pais: "Turquía", duracion: "10 Días / 9 Noches", precioEco: 1590, precioClasico: 1890, precioLujo: 2990, galeriaKey: "turquia" },
  { slug: "dubai", ciudad: "Dubái", pais: "Emiratos Árabes", duracion: "7 Días / 6 Noches", precioEco: 1590, precioClasico: 2090, precioLujo: 3490, galeriaKey: "medioOrienteAsia" },
  { slug: "el-cairo", ciudad: "El Cairo y Egipto", pais: "Egipto", duracion: "9 Días / 8 Noches", precioEco: 1690, precioClasico: 2190, precioLujo: 3390, galeriaKey: "medioOrienteAsia" },
  { slug: "tokio", ciudad: "Tokio", pais: "Japón", duracion: "10 Días / 9 Noches", precioEco: 2290, precioClasico: 2990, precioLujo: 4590, galeriaKey: "medioOrienteAsia" },
  { slug: "kioto", ciudad: "Kioto y Tokio", pais: "Japón", duracion: "12 Días / 11 Noches", precioEco: 2490, precioClasico: 3290, precioLujo: 4990, galeriaKey: "medioOrienteAsia" },
  { slug: "bangkok", ciudad: "Bangkok y Tailandia", pais: "Tailandia", duracion: "10 Días / 9 Noches", precioEco: 1890, precioClasico: 2490, precioLujo: 3890, galeriaKey: "medioOrienteAsia" },
  { slug: "phuket", ciudad: "Phuket e Islas Phi Phi", pais: "Tailandia", duracion: "10 Días / 9 Noches", precioEco: 1990, precioClasico: 2590, precioLujo: 3990, galeriaKey: "medioOrienteAsia" },
  { slug: "pekin", ciudad: "Pekín y Shanghái", pais: "China", duracion: "11 Días / 10 Noches", precioEco: 2190, precioClasico: 2890, precioLujo: 4290, galeriaKey: "medioOrienteAsia" },
  { slug: "jerusalen", ciudad: "Jerusalén y Tierra Santa", pais: "Israel", duracion: "9 Días / 8 Noches", precioEco: 1890, precioClasico: 2490, precioLujo: 3690, galeriaKey: "medioOrienteAsia" },
  { slug: "tel-aviv", ciudad: "Tel Aviv y Mar Muerto", pais: "Israel", duracion: "8 Días / 7 Noches", precioEco: 1790, precioClasico: 2390, precioLujo: 3590, galeriaKey: "medioOrienteAsia" },
  { slug: "miami", ciudad: "Miami", pais: "Estados Unidos", duracion: "5 Días / 4 Noches", precioEco: 699, precioClasico: 1090, precioLujo: 1890, galeriaKey: "usaCanada" },
  { slug: "orlando", ciudad: "Orlando y Parques", pais: "Estados Unidos", duracion: "6 Días / 5 Noches", precioEco: 890, precioClasico: 1390, precioLujo: 2390, galeriaKey: "usaCanada" },
  { slug: "nueva-york", ciudad: "Nueva York", pais: "Estados Unidos", duracion: "6 Días / 5 Noches", precioEco: 890, precioClasico: 1390, precioLujo: 2490, galeriaKey: "usaCanada" },
  { slug: "los-angeles", ciudad: "Los Ángeles y Hollywood", pais: "Estados Unidos", duracion: "6 Días / 5 Noches", precioEco: 890, precioClasico: 1350, precioLujo: 2390, galeriaKey: "usaCanada" },
  { slug: "las-vegas", ciudad: "Las Vegas y Gran Cañón", pais: "Estados Unidos", duracion: "5 Días / 4 Noches", precioEco: 850, precioClasico: 1290, precioLujo: 2190, galeriaKey: "usaCanada" },
  { slug: "toronto", ciudad: "Toronto y Cataratas del Niágara", pais: "Canadá", duracion: "6 Días / 5 Noches", precioEco: 990, precioClasico: 1490, precioLujo: 2490, galeriaKey: "usaCanada" },
  { slug: "vancouver", ciudad: "Vancouver y Montañas Rocosas", pais: "Canadá", duracion: "7 Días / 6 Noches", precioEco: 1090, precioClasico: 1650, precioLujo: 2690, galeriaKey: "usaCanada" },
  { slug: "cancun", ciudad: "Cancún", pais: "México", duracion: "5 Días / 4 Noches", precioEco: 799, precioClasico: 1049, precioLujo: 1790, galeriaKey: "mexico" },
  { slug: "riviera-maya", ciudad: "Riviera Maya", pais: "México", duracion: "6 Días / 5 Noches", precioEco: 849, precioClasico: 1149, precioLujo: 1950, galeriaKey: "mexico" },
  { slug: "ciudad-de-mexico", ciudad: "Ciudad de México", pais: "México", duracion: "5 Días / 4 Noches", precioEco: 649, precioClasico: 899, precioLujo: 1490, galeriaKey: "mexico" },
  { slug: "punta-cana", ciudad: "Punta Cana", pais: "República Dominicana", duracion: "5 Días / 4 Noches", precioEco: 849, precioClasico: 1099, precioLujo: 1850, galeriaKey: "caribe" },
  { slug: "varadero", ciudad: "Varadero", pais: "Cuba", duracion: "5 Días / 4 Noches", precioEco: 799, precioClasico: 999, precioLujo: 1590, galeriaKey: "caribe" },
  { slug: "la-habana", ciudad: "La Habana y Varadero", pais: "Cuba", duracion: "6 Días / 5 Noches", precioEco: 849, precioClasico: 1090, precioLujo: 1690, galeriaKey: "caribe" },
  { slug: "aruba", ciudad: "Aruba", pais: "Aruba", duracion: "5 Días / 4 Noches", precioEco: 950, precioClasico: 1290, precioLujo: 2190, galeriaKey: "caribe" },
  { slug: "curacao", ciudad: "Curaçao", pais: "Curaçao", duracion: "5 Días / 4 Noches", precioEco: 890, precioClasico: 1190, precioLujo: 1990, galeriaKey: "caribe" },
  { slug: "san-andres", ciudad: "Isla San Andrés", pais: "Colombia", duracion: "5 Días / 4 Noches", precioEco: 599, precioClasico: 749, precioLujo: 1250, galeriaKey: "caribe" },
  { slug: "cartagena", ciudad: "Cartagena de Indias", pais: "Colombia", duracion: "5 Días / 4 Noches", precioEco: 549, precioClasico: 699, precioLujo: 1190, galeriaKey: "sudamerica" },
  { slug: "medellin", ciudad: "Medellín y Guatapé", pais: "Colombia", duracion: "5 Días / 4 Noches", precioEco: 499, precioClasico: 649, precioLujo: 1090, galeriaKey: "sudamerica" },
  { slug: "bogota", ciudad: "Bogotá", pais: "Colombia", duracion: "4 Días / 3 Noches", precioEco: 449, precioClasico: 599, precioLujo: 990, galeriaKey: "sudamerica" },
  { slug: "ciudad-de-panama", ciudad: "Ciudad de Panamá y Playa Blanca", pais: "Panamá", duracion: "5 Días / 4 Noches", precioEco: 599, precioClasico: 799, precioLujo: 1290, galeriaKey: "sudamerica" },
  { slug: "buenos-aires", ciudad: "Buenos Aires", pais: "Argentina", duracion: "5 Días / 4 Noches", precioEco: 549, precioClasico: 749, precioLujo: 1290, galeriaKey: "sudamerica" },
  { slug: "bariloche", ciudad: "San Carlos de Bariloche", pais: "Argentina", duracion: "6 Días / 5 Noches", precioEco: 799, precioClasico: 1090, precioLujo: 1790, galeriaKey: "sudamerica" },
  { slug: "rio-de-janeiro", ciudad: "Río de Janeiro", pais: "Brasil", duracion: "5 Días / 4 Noches", precioEco: 649, precioClasico: 849, precioLujo: 1490, galeriaKey: "sudamerica" },
  { slug: "buzios", ciudad: "Búzios y Río de Janeiro", pais: "Brasil", duracion: "6 Días / 5 Noches", precioEco: 749, precioClasico: 990, precioLujo: 1650, galeriaKey: "sudamerica" },
  { slug: "santiago-de-chile", ciudad: "Santiago y Viña del Mar", pais: "Chile", duracion: "5 Días / 4 Noches", precioEco: 399, precioClasico: 549, precioLujo: 950, galeriaKey: "sudamerica" },
  { slug: "iguazu", ciudad: "Cataratas del Iguazú", pais: "Brasil", duracion: "5 Días / 4 Noches", precioEco: 649, precioClasico: 849, precioLujo: 1390, galeriaKey: "sudamerica" },
  { slug: "cusco", ciudad: "Cusco y Machu Picchu", pais: "Perú", duracion: "4 Días / 3 Noches", precioEco: 299, precioClasico: 399, precioLujo: 890, galeriaKey: "peru" },
  { slug: "machu-picchu", ciudad: "Machu Picchu y Valle Sagrado", pais: "Perú", duracion: "5 Días / 4 Noches", precioEco: 349, precioClasico: 469, precioLujo: 990, galeriaKey: "peru" },
  { slug: "arequipa", ciudad: "Arequipa y Cañón del Colca", pais: "Perú", duracion: "4 Días / 3 Noches", precioEco: 229, precioClasico: 319, precioLujo: 690, galeriaKey: "peru" },
  { slug: "tarapoto", ciudad: "Tarapoto y Sauce", pais: "Perú", duracion: "4 Días / 3 Noches", precioEco: 239, precioClasico: 329, precioLujo: 650, galeriaKey: "peru" },
  { slug: "iquitos", ciudad: "Iquitos y Río Amazonas", pais: "Perú", duracion: "4 Días / 3 Noches", precioEco: 279, precioClasico: 389, precioLujo: 790, galeriaKey: "peru" },
  { slug: "paracas", ciudad: "Paracas, Ica y Huacachina", pais: "Perú", duracion: "3 Días / 2 Noches", precioEco: 159, precioClasico: 249, precioLujo: 520, galeriaKey: "peru" },
  { slug: "mancora", ciudad: "Máncora y Punta Sal", pais: "Perú", duracion: "4 Días / 3 Noches", precioEco: 269, precioClasico: 389, precioLujo: 790, galeriaKey: "peru" },
];

const LANDINGS_CLUSTER_1: LandingComercialSEO[] = DESTINOS_MUNDIALES.flatMap((d) => {
  const fotos = FOTOS_GALERIA[d.galeriaKey];
  return [
    armarLandingComercial({
      slug: `paquetes-turisticos-a-${d.slug}`,
      cluster: "mundiales",
      clusterNombre: "Paquetes Turísticos Internacionales y Nacionales",
      badge: `Salidas Confirmadas desde Lima · ${d.duracion}`,
      banderas: ["Perú", d.pais],
      tituloHero: `Paquetes Turísticos a ${d.ciudad},`,
      tituloDestacado: d.pais,
      descripcionHero: `Viaja a ${d.ciudad} con boletos aéreos ida y vuelta, alojamiento seleccionado, traslados aeropuerto-hotel y excursiones principales incluidas.`,
      negritaHero: "Separa tu paquete con el 50% de inicial y paga el saldo en cuotas sin intereses.",
      destinoOPais: d.pais,
      precioBase: d.precioClasico,
      etiquetaVitrina: `Paquete Completo a ${d.ciudad} (${d.duracion})`,
      duracionOServicio: `${d.duracion} · Vuelo + Hotel + Tours`,
      fotos,
      checksBase: [
        `Boleto aéreo ida y vuelta desde Lima a ${d.ciudad} con impuestos`,
        `Alojamiento verificado con desayunos + traslados de llegada y salida`,
        `Asistencia de viaje 24/7 y código de reserva PNR verificable`,
      ],
      checksPlus: [
        `Hotel categoría Superior en zona turística de ${d.ciudad}`,
        `Excursiones y visitas guiadas en español con entradas incluidas`,
        `Equipaje documentado y acompañamiento permanente por WhatsApp`,
      ],
      checksVip: [
        `Hoteles 5 Estrellas de Lujo y traslados privados ejecutivos`,
        `Tours privados VIP y selección de asientos preferenciales`,
        `Atención prioritaria o descuentos especiales para grupos y familias`,
      ],
      tituloCard1: `Paquete Económico a ${d.ciudad} (Preventa)`,
      subCard1: "Vuelo + Alojamiento + Asistencia",
      precioCard1: d.precioEco,
      tagCard1: "Tarifa Económica",
      tituloCard2: `Paquete Clásico ${d.ciudad} (${d.duracion})`,
      subCard2: "Vuelo + Hotel + Traslados + City Tour",
      precioCard2: d.precioClasico,
      tagCard2: "Más Vendido",
      tituloCard3: `Paquete de Lujo 5★ en ${d.ciudad} VIP`,
      subCard3: "Hoteles 5 Estrellas + Servicios Privados",
      precioCard3: d.precioLujo,
      tagCard3: "Edición Lujo 5★",
      keywords: [
        `paquetes turisticos a ${d.ciudad.toLowerCase()}`,
        `viajes a ${d.ciudad.toLowerCase()} desde lima`,
        `precio paquete a ${d.ciudad.toLowerCase()}`,
      ],
      faqs: [
        {
          q: `¿Qué incluye el paquete turístico a ${d.ciudad}?`,
          a: `Incluye boletos aéreos ida y vuelta desde Lima con impuestos, alojamiento en ${d.ciudad}, traslados aeropuerto-hotel-aeropuerto, tarjeta de asistencia médica y visitas guiadas según el programa elegido.`,
        },
        {
          q: `¿Cómo puedo reservar mi viaje a ${d.ciudad} con el 50%?`,
          a: `Puedes congelar tu tarifa promocional abonando el 50% en nuestra oficina de Los Olivos o por transferencia empresarial a nombre de Cityland Travel E.I.R.L. (RUC 20614914239).`,
        },
      ],
    }),
    armarLandingComercial({
      slug: `paquetes-baratos-a-${d.slug}`,
      cluster: "mundiales",
      clusterNombre: "Ofertas y Paquetes Turísticos Económicos",
      badge: `Tarifa Low Cost y Preventa 2026 · ${d.ciudad}`,
      banderas: ["Perú", d.pais],
      tituloHero: `Paquetes Turísticos Baratos a`,
      tituloDestacado: `${d.ciudad}, ${d.pais}`,
      descripcionHero: `Aprovecha nuestras tarifas económicas de preventa y ofertas flash para viajar a ${d.ciudad} al menor costo del mercado peruano.`,
      negritaHero: "Tarifas reales con impuestos incluidos y emisión inmediata de código PNR.",
      destinoOPais: d.pais,
      precioBase: d.precioEco,
      etiquetaVitrina: `Oferta Económica a ${d.ciudad} — Preventa`,
      duracionOServicio: `Tarifa Ahorro · Salidas desde Lima`,
      fotos: [fotos[1], fotos[0], fotos[2], fotos[3]],
      checksBase: [
        `Tarifa aérea económica ida y vuelta desde Lima a ${d.ciudad}`,
        `Hospedaje céntrico limpio y seguro con excelente ubicación`,
        `Impuestos incluidos sin cobros sorpresa al emitir tu boleto`,
      ],
      checksPlus: [
        `Programa completo ${d.duracion} con traslados y desayunos`,
        `Opción de agregar maleta de bodega de 23 kg a tarifa de agencia`,
        `Seguro médico internacional y asesoría migratoria incluida`,
      ],
      checksVip: [
        `Descuento adicional viajando en pareja, familia o grupo de amigos`,
        `Facilidad de pago: separa con el 50% y completa en cuotas`,
        `Respaldo formal con Boleta o Factura Electrónica RUC 20614914239`,
      ],
      tituloCard1: `Oferta Flash: Vuelo + Hotel Básico en ${d.ciudad}`,
      subCard1: "La opción más económica para viajar este año",
      precioCard1: d.precioEco,
      tagCard1: "Precio Más Bajo",
      tituloCard2: `Paquete Ahorro Completo en ${d.ciudad} (${d.duracion})`,
      subCard2: "Vuelo + Hotel 3★/4★ + Traslados + Tour",
      precioCard2: d.precioClasico,
      tagCard2: "Mejor Relación Calidad/Precio",
      tituloCard3: `Tarifa Dúo / Familiar a ${d.ciudad} (2+ Pasajeros)`,
      subCard3: "Precio rebajado por persona viajando acompañados",
      precioCard3: Math.round(d.precioEco * 0.94),
      tagCard3: "Promo Parejas y Familias",
      keywords: [
        `paquetes baratos a ${d.ciudad.toLowerCase()}`,
        `viajes economicos a ${d.ciudad.toLowerCase()}`,
        `ofertas de viajes a ${d.ciudad.toLowerCase()}`,
      ],
      faqs: [
        {
          q: `¿Cómo conseguir el paquete más barato a ${d.ciudad}?`,
          a: `Reservando en preventa con 30 a 60 días de anticipación o aprovechando nuestros cupos bloqueados desde Lima. Escríbenos al WhatsApp 944 103 890 para enviarte las fechas más económicas del mes.`,
        },
      ],
    }),
    armarLandingComercial({
      slug: `viajes-de-lujo-a-${d.slug}`,
      cluster: "mundiales",
      clusterNombre: "Viajes y Paquetes Turísticos de Lujo 5★ VIP",
      badge: `Colección Luxury & VIP 5 Estrellas · ${d.ciudad}`,
      banderas: ["Perú", d.pais],
      tituloHero: `Paquetes de Lujo 5★ a`,
      tituloDestacado: `${d.ciudad}, ${d.pais}`,
      descripcionHero: `Vive una experiencia exclusiva en ${d.ciudad} con hoteles 5 estrellas Gran Lujo, traslados privados en vehículos ejecutivos y tours privados a medida.`,
      negritaHero: "Atención Concierge VIP 24/7 para viajeros exigentes, parejas y ejecutivos.",
      destinoOPais: d.pais,
      precioBase: d.precioLujo,
      etiquetaVitrina: `${d.ciudad} Luxury Edition 5★ VIP`,
      duracionOServicio: `${d.duracion} · Hoteles 5★ + Traslados Privados`,
      fotos: [fotos[2], fotos[3], fotos[0], fotos[1]],
      checksBase: [
        `Alojamiento en Hoteles 5 Estrellas o Boutique de Lujo en ${d.ciudad}`,
        `Traslados privados aeropuerto-hotel-aeropuerto sin esperas`,
        `Asistencia médica internacional VIP de alta cobertura`,
      ],
      checksPlus: [
        `Excursiones privadas con guía exclusivo en español`,
        `Opción de vuelos en Cabina Ejecutiva (Business Class) o Preferente`,
        `Reservas en restaurantes gastronómicos y experiencias exclusivas`,
      ],
      checksVip: [
        `Itinerario 100% personalizado a tu ritmo y preferencias`,
        `Concierge personal de Cityland Travel disponible 24/7`,
        `Facturación corporativa o reserva confidencial en oficina o en línea`,
      ],
      tituloCard1: `Escapada Premium 4★ Superior en ${d.ciudad}`,
      subCard1: "Vuelos + Hotel 4★ Superior + Traslados",
      precioCard1: d.precioClasico,
      tagCard1: "Confort Superior",
      tituloCard2: `Paquete Luxury 5 Estrellas en ${d.ciudad}`,
      subCard2: "Hoteles 5★ + Tours Privados + Traslado VIP",
      precioCard2: d.precioLujo,
      tagCard2: "Lujo 5★ VIP",
      tituloCard3: `${d.ciudad} Gran Lujo + Business Class`,
      subCard3: "Vuelos Ejecutivos + Suite 5★ + Experiencias Privadas",
      precioCard3: Math.round(d.precioLujo * 1.45),
      tagCard3: "First & Business",
      keywords: [
        `viajes de lujo a ${d.ciudad.toLowerCase()}`,
        `paquetes vip a ${d.ciudad.toLowerCase()}`,
        `hoteles 5 estrellas en ${d.ciudad.toLowerCase()}`,
      ],
      faqs: [
        {
          q: `¿Qué diferencia al paquete de lujo a ${d.ciudad}?`,
          a: `Incluye hoteles 5 estrellas verificados, traslados privados exclusivos para ti y tus acompañantes, guías privados y opción de boletos en clase ejecutiva (Business Class).`,
        },
      ],
    }),
    armarLandingComercial({
      slug: `vuelo-mas-hotel-a-${d.slug}`,
      cluster: "mundiales",
      clusterNombre: "Combos Promocionales Vuelo + Hotel",
      badge: `Ahorra hasta 25% reservando Vuelo + Hotel juntos`,
      banderas: ["Perú", d.pais],
      tituloHero: `Vuelo + Hotel en ${d.ciudad},`,
      tituloDestacado: `${d.pais} en Oferta`,
      descripcionHero: `Cotiza tu boleto aéreo ida y vuelta desde Lima más hotel seleccionado en ${d.ciudad} en un solo paquete con descuento de agencia mayorista.`,
      negritaHero: "Recibe tu código de reserva aérea PNR y tu voucher de hotel confirmado al instante.",
      destinoOPais: d.pais,
      precioBase: Math.round((d.precioEco + d.precioClasico) / 2),
      etiquetaVitrina: `Combo Vuelo + Hotel a ${d.ciudad}`,
      duracionOServicio: `${d.duracion} · Emisión Inmediata`,
      fotos: [fotos[3], fotos[1], fotos[2], fotos[0]],
      checksBase: [
        `Boleto aéreo ida y vuelta desde Lima a ${d.ciudad} con tasas incluidas`,
        `Noches de hotel confirmadas con desayuno según programa`,
        `Traslado de llegada y asistencia al viajero 24 horas`,
      ],
      checksPlus: [
        `Mejor tarifa combinada que comprando vuelo y hotel por separado`,
        `Opciones de hoteles 3★, 4★ y 5★ en las mejores zonas de ${d.ciudad}`,
        `Equipaje de mano y opción de maleta de bodega de 23 kg`,
      ],
      checksVip: [
        `Separa tu combo Vuelo + Hotel con el 50% de inicial`,
        `Paga con tarjetas Visa/Mastercard, transferencia BCP/BBVA/Interbank o Yape`,
        `Respaldo legal de Cityland Travel E.I.R.L. (RUC 20614914239)`,
      ],
      tituloCard1: `Vuelo + Hotel Smart en ${d.ciudad}`,
      subCard1: "Tarifa promo aérea + Hotel céntrico",
      precioCard1: d.precioEco,
      tagCard1: "Combo Smart",
      tituloCard2: `Vuelo + Hotel 4★ + Traslados en ${d.ciudad}`,
      subCard2: `${d.duracion} con desayunos e impuestos`,
      precioCard2: d.precioClasico,
      tagCard2: "Más Solicitado",
      tituloCard3: `Vuelo + Hotel 5★ Luxury en ${d.ciudad}`,
      subCard3: "Categoría 5 Estrellas + Traslados Privados",
      precioCard3: d.precioLujo,
      tagCard3: "Combo 5★",
      keywords: [
        `vuelo mas hotel a ${d.ciudad.toLowerCase()}`,
        `vuelo y hotel ${d.ciudad.toLowerCase()} desde lima`,
        `promocion vuelo mas hotel ${d.ciudad.toLowerCase()}`,
      ],
      faqs: [
        {
          q: `¿Por qué conviene comprar Vuelo + Hotel a ${d.ciudad} en paquete?`,
          a: `Al combinar tarifas negociadas de agencia con bloqueos hoteleros en ${d.ciudad}, obtienes hasta un 25% de ahorro frente a la compra por separado y cuentas con soporte único ante cualquier cambio.`,
        },
      ],
    }),
  ];
});

// ============================================================================
// CLUSTER 2: 25 DESTINOS PLAYA / RESORTS × 6 MODALIDADES = 150 LANDINGS
// (All Inclusive, Resorts 5★, Hoteles en Oferta, Familiar, Parejas, Ofertas 2026)
// ============================================================================
const DESTINOS_PLAYA_RESORTS: {
  slug: string;
  nombre: string;
  pais: string;
  precioBase: number;
  galeriaKey: keyof typeof FOTOS_GALERIA;
}[] = [
  { slug: "punta-cana", nombre: "Punta Cana", pais: "República Dominicana", precioBase: 1099, galeriaKey: "caribe" },
  { slug: "bayahibe", nombre: "Bayahíbe y La Romana", pais: "República Dominicana", precioBase: 1149, galeriaKey: "caribe" },
  { slug: "cancun", nombre: "Cancún", pais: "México", precioBase: 1049, galeriaKey: "mexico" },
  { slug: "riviera-maya", nombre: "Riviera Maya", pais: "México", precioBase: 1129, galeriaKey: "mexico" },
  { slug: "playa-del-carmen", nombre: "Playa del Carmen", pais: "México", precioBase: 1089, galeriaKey: "mexico" },
  { slug: "tulum", nombre: "Tulum", pais: "México", precioBase: 1190, galeriaKey: "mexico" },
  { slug: "cozumel", nombre: "Isla Cozumel", pais: "México", precioBase: 1150, galeriaKey: "mexico" },
  { slug: "varadero", nombre: "Varadero", pais: "Cuba", precioBase: 999, galeriaKey: "caribe" },
  { slug: "cayo-santa-maria", nombre: "Cayo Santa María", pais: "Cuba", precioBase: 1049, galeriaKey: "caribe" },
  { slug: "aruba", nombre: "Aruba", pais: "Aruba", precioBase: 1290, galeriaKey: "caribe" },
  { slug: "curacao", nombre: "Curaçao", pais: "Curaçao", precioBase: 1190, galeriaKey: "caribe" },
  { slug: "san-andres", nombre: "San Andrés", pais: "Colombia", precioBase: 749, galeriaKey: "caribe" },
  { slug: "cartagena", nombre: "Cartagena de Indias", pais: "Colombia", precioBase: 699, galeriaKey: "sudamerica" },
  { slug: "isla-baru", nombre: "Isla Barú y Playa Blanca", pais: "Colombia", precioBase: 799, galeriaKey: "caribe" },
  { slug: "jamaica", nombre: "Montego Bay y Negril", pais: "Jamaica", precioBase: 1350, galeriaKey: "caribe" },
  { slug: "bahamas", nombre: "Nassau y Paradise Island", pais: "Bahamas", precioBase: 1490, galeriaKey: "caribe" },
  { slug: "miami-beach", nombre: "Miami Beach", pais: "Estados Unidos", precioBase: 1090, galeriaKey: "usaCanada" },
  { slug: "rio-de-janeiro", nombre: "Río de Janeiro", pais: "Brasil", precioBase: 849, galeriaKey: "sudamerica" },
  { slug: "buzios", nombre: "Armação dos Búzios", pais: "Brasil", precioBase: 949, galeriaKey: "sudamerica" },
  { slug: "florianopolis", nombre: "Florianópolis", pais: "Brasil", precioBase: 890, galeriaKey: "sudamerica" },
  { slug: "maceio", nombre: "Maceió y Maragogi", pais: "Brasil", precioBase: 990, galeriaKey: "sudamerica" },
  { slug: "punta-sal", nombre: "Punta Sal", pais: "Perú", precioBase: 449, galeriaKey: "peru" },
  { slug: "mancora", nombre: "Máncora", pais: "Perú", precioBase: 369, galeriaKey: "peru" },
  { slug: "paracas", nombre: "Paracas", pais: "Perú", precioBase: 269, galeriaKey: "peru" },
  { slug: "zorritos", nombre: "Zorritos y Tumbes", pais: "Perú", precioBase: 349, galeriaKey: "peru" },
];

const MODALIDADES_RESORTS: {
  prefijo: string;
  tituloPre: string;
  tituloPost: string;
  factorPrecio: number;
  badge: string;
  desc: string;
}[] = [
  {
    prefijo: "all-inclusive",
    tituloPre: "Paquetes All Inclusive en",
    tituloPost: "Todo Incluido",
    factorPrecio: 1,
    badge: "Vuelo + Resort Todo Incluido · Comidas y Bebidas Ilimitadas",
    desc: "Disfruta de playa privada, restaurantes buffet y a la carta, bares libres, shows nocturnos y vuelos ida y vuelta desde Lima.",
  },
  {
    prefijo: "resorts-5-estrellas",
    tituloPre: "Resorts 5 Estrellas en",
    tituloPost: "All Inclusive VIP",
    factorPrecio: 1.25,
    badge: "Cadenas 5★ RIU, Iberostar, Barceló, Lopesan y Decameron",
    desc: "Alójate en los mejores complejos 5 estrellas frente al mar con servicio de habitación, piscinas infinity y gastronomía internacional.",
  },
  {
    prefijo: "hoteles-en-oferta",
    tituloPre: "Ofertas de Hoteles en",
    tituloPost: "con Descuento",
    factorPrecio: 0.85,
    badge: "Tarifas Mayoristas de Agencia · Ahorra hasta 30%",
    desc: "Reservamos tu hotel o resort con tarifas negociadas de operador turístico más traslados y boletos aéreos confirmados.",
  },
  {
    prefijo: "all-inclusive-familiar",
    tituloPre: "Viajes Familiares Todo Incluido a",
    tituloPost: "con Niños",
    factorPrecio: 0.95,
    badge: "Resorts con Parque Acuático, Club de Niños y Habitaciones Familiares",
    desc: "Vacaciones inolvidables para toda la familia con tarifas especiales para niños, entretenimiento diario y playas de aguas tranquilas.",
  },
  {
    prefijo: "resorts-solo-adultos",
    tituloPre: "Resorts Solo Adultos (18+) en",
    tituloPost: "Romántico",
    factorPrecio: 1.15,
    badge: "Especial Parejas, Aniversarios y Amigos · Adults Only 18+",
    desc: "Relájate en resorts exclusivos para mayores de 18 años con cenas románticas frente al mar, spa, fiestas temáticas y bares premium.",
  },
  {
    prefijo: "ofertas-todo-incluido",
    tituloPre: "Ofertas Todo Incluido a",
    tituloPost: "Temporada 2026",
    factorPrecio: 0.9,
    badge: "Preventa 2026 · Separa hoy con el 50% de inicial",
    desc: "Asegura tus próximas vacaciones de sol y playa congelando el precio promocional de hoy con pagos flexibles.",
  },
];

const LANDINGS_CLUSTER_2: LandingComercialSEO[] = DESTINOS_PLAYA_RESORTS.flatMap((d) => {
  const fotos = FOTOS_GALERIA[d.galeriaKey];
  return MODALIDADES_RESORTS.map((m) => {
    const pBase = Math.round((d.precioBase * m.factorPrecio) / 10) * 10;
    return armarLandingComercial({
      slug: `${m.prefijo}-${d.slug}`,
      cluster: "all-inclusive",
      clusterNombre: "Resorts All Inclusive & Hoteles de Playa",
      badge: m.badge,
      banderas: ["Perú", d.pais],
      tituloHero: `${m.tituloPre} ${d.nombre}`,
      tituloDestacado: m.tituloPost,
      descripcionHero: m.desc,
      negritaHero: "Incluye vuelos desde Lima, traslados, seguro de viaje y régimen Todo Incluido.",
      destinoOPais: d.pais,
      precioBase: pBase,
      etiquetaVitrina: `${d.nombre} — ${m.tituloPost}`,
      duracionOServicio: "5 Días / 4 Noches · Todo Incluido",
      fotos,
      checksBase: [
        `Boleto aéreo ida y vuelta a ${d.nombre} con impuestos incluidos`,
        `4 noches en Resort con desayuno, almuerzo, cena y snacks ilimitados`,
        `Bebidas nacionales e internacionales ilimitadas + traslados y seguro`,
      ],
      checksPlus: [
        `Resort 5 Estrellas en primera línea de playa en ${d.nombre}`,
        `Restaurantes a la carta, deportes acuáticos y shows en vivo`,
        `Traslado aeropuerto – resort – aeropuerto y asistencia 24/7`,
      ],
      checksVip: [
        `Habitación Ocean View / Swim-Up o Suite Familiar`,
        `Tarifa preferencial para parejas, grupos de amigos y familias`,
        `Separa con el 50% hoy en Cityland Travel (RUC 20614914239)`,
      ],
      tituloCard1: `${d.nombre} Resort 4★ Todo Incluido (Oferta)`,
      subCard1: "5 Días / 4 Noches · Vuelo + Resort 24h",
      precioCard1: Math.round(pBase * 0.9),
      tagCard1: "Oferta Flash",
      tituloCard2: `${d.nombre} Resort 5★ All Inclusive Clásico`,
      subCard2: "5 Días / 4 Noches · RIU / Iberostar / Barceló",
      precioCard2: pBase,
      tagCard2: "Más Vendido",
      tituloCard3: `${d.nombre} Luxury Resort 5★ VIP (6D / 5N)`,
      subCard3: "6 Días / 5 Noches · Categoría Premium Frente al Mar",
      precioCard3: Math.round(pBase * 1.28),
      tagCard3: "Luxury 5★",
      keywords: [
        `all inclusive ${d.nombre.toLowerCase()}`,
        `resorts en ${d.nombre.toLowerCase()} todo incluido`,
        `paquetes todo incluido ${d.nombre.toLowerCase()}`,
      ],
      faqs: [
        {
          q: `¿Qué incluye el sistema Todo Incluido (All Inclusive) en ${d.nombre}?`,
          a: `Incluye todas las comidas (desayuno, almuerzo, cena buffet y restaurantes a la carta), snacks las 24 horas, bebidas alcohólicas y no alcohólicas ilimitadas, entretenimiento nocturno, piscinas y playa privada.`,
        },
      ],
    });
  });
});

// ============================================================================
// CLUSTER 3: 20 RUTAS Y NAVIERAS DE CRUCEROS × 6 MODALIDADES = 120 LANDINGS
// ============================================================================
const RUTAS_CRUCEROS: {
  slug: string;
  nombre: string;
  pais: string;
  precioBase: number;
  requisito: string;
}[] = [
  { slug: "caribe-desde-panama-sin-visa", nombre: "Caribe Sur desde Panamá (Sin Visa)", pais: "Panamá", precioBase: 1190, requisito: "Solo Pasaporte Peruano (No requiere Visa USA)" },
  { slug: "caribe-desde-cartagena-sin-visa", nombre: "Caribe y Antillas desde Cartagena (Sin Visa)", pais: "Colombia", precioBase: 1150, requisito: "Solo Pasaporte Peruano (Sin Visa Americana)" },
  { slug: "caribe-y-bahamas-desde-miami", nombre: "Caribe y Bahamas desde Miami", pais: "Estados Unidos", precioBase: 890, requisito: "Requiere Visa Americana B1/B2 vigente" },
  { slug: "caribe-desde-orlando", nombre: "Caribe desde Puerto Cañaveral (Orlando)", pais: "Estados Unidos", precioBase: 950, requisito: "Ideal para combinar con Parques de Orlando" },
  { slug: "isla-privada-cococay-royal-caribbean", nombre: "Perfect Day at CocoCay (Royal Caribbean)", pais: "Bahamas", precioBase: 990, requisito: "Visita la famosa isla privada de Royal Caribbean" },
  { slug: "mediterraneo-desde-barcelona", nombre: "Mediterráneo Occidental desde Barcelona", pais: "España", precioBase: 1290, requisito: "España, Francia e Italia sin visa para peruanos" },
  { slug: "mediterraneo-desde-roma", nombre: "Mediterráneo e Italia desde Roma", pais: "Italia", precioBase: 1350, requisito: "Recorre Italia, Grecia y Malta en un solo viaje" },
  { slug: "islas-griegas-santorini-mykonos", nombre: "Islas Griegas: Santorini y Mykonos", pais: "Grecia", precioBase: 1490, requisito: "Atenas, Mykonos, Santorini y Olimpia Todo Incluido" },
  { slug: "fiordos-noruegos-europa-del-norte", nombre: "Fiordos Noruegos y Capitales Bálticas", pais: "Europa", precioBase: 1690, requisito: "Paisajes naturales únicos en buques de última generación" },
  { slug: "sudamerica-brasil-argentina-uruguay", nombre: "Sudamérica: Brasil, Argentina y Punta del Este", pais: "Brasil", precioBase: 990, requisito: "Viaja solo con tu DNI peruano vigente" },
  { slug: "alaska-glaciares-desde-seattle", nombre: "Glaciares de Alaska desde Seattle", pais: "Estados Unidos", precioBase: 1590, requisito: "Temporada de mayo a septiembre con vistas espectaculares" },
  { slug: "dubai-y-emiratos-arabes", nombre: "Dubái, Abu Dhabi y Golfo Pérsico", pais: "Emiratos Árabes", precioBase: 1690, requisito: "Crucero de lujo por el Medio Oriente" },
  { slug: "royal-caribbean-desde-lima", nombre: "Royal Caribbean (Icon, Wonder y Oasis of the Seas)", pais: "Estados Unidos", precioBase: 1090, requisito: "Los barcos más grandes y modernos del mundo" },
  { slug: "msc-cruceros-todo-incluido", nombre: "MSC Cruceros por el Caribe y Europa", pais: "Europa", precioBase: 990, requisito: "Gastronomía mediterránea y barcos de lujo" },
  { slug: "norwegian-cruise-line-free-at-sea", nombre: "Norwegian Cruise Line (Free at Sea)", pais: "Estados Unidos", precioBase: 1050, requisito: "Paquete de bebidas y restaurantes de especialidad" },
  { slug: "disney-cruise-line-familias", nombre: "Disney Cruise Line para Familias", pais: "Bahamas", precioBase: 1790, requisito: "Personajes Disney, musicales de Broadway y Castaway Cay" },
  { slug: "costa-cruceros-europa-y-caribe", nombre: "Costa Cruceros Todo Incluido", pais: "Italia", precioBase: 950, requisito: "Excelentes tarifas para parejas y familias" },
  { slug: "cruceros-cabina-con-balcon-vip", nombre: "Cruceros en Cabina con Balcón al Mar y Suites", pais: "Panamá", precioBase: 1490, requisito: "Despierta cada mañana con vista privada al océano" },
  { slug: "cruceros-para-quinceaneras", nombre: "Cruceros de Quinceañeras Todo Incluido", pais: "Panamá", precioBase: 1390, requisito: "Fiesta a bordo, excursiones y acompañamiento" },
  { slug: "cruceros-para-adultos-mayores", nombre: "Cruceros para Adultos Mayores y Parejas", pais: "España", precioBase: 1190, requisito: "Viaja sin hacer ni deshacer maletas entre varios países" },
];

const MODALIDADES_CRUCEROS: {
  prefijo: string;
  tituloPre: string;
  factor: number;
}[] = [
  { prefijo: "crucero", tituloPre: "Crucero", factor: 1 },
  { prefijo: "ofertas-crucero", tituloPre: "Oferta de Crucero:", factor: 0.9 },
  { prefijo: "vuelo-mas-crucero", tituloPre: "Paquete Vuelo desde Lima + Crucero", factor: 1.35 },
  { prefijo: "crucero-barato", tituloPre: "Crucero Económico (Preventa):", factor: 0.88 },
  { prefijo: "crucero-de-lujo", tituloPre: "Crucero VIP en Cabina con Balcón:", factor: 1.28 },
  { prefijo: "crucero-familiar", tituloPre: "Crucero Familiar / Grupal:", factor: 0.95 },
];

const LANDINGS_CLUSTER_3: LandingComercialSEO[] = RUTAS_CRUCEROS.flatMap((c) => {
  const fotos = FOTOS_GALERIA.cruceros;
  return MODALIDADES_CRUCEROS.map((m) => {
    const pBase = Math.round((c.precioBase * m.factor) / 10) * 10;
    return armarLandingComercial({
      slug: `${m.prefijo}-${c.slug}`,
      cluster: "cruceros",
      clusterNombre: "Cruceros Internacionales Todo Incluido",
      badge: `Navieras Oficiales · ${c.requisito}`,
      banderas: ["Perú", c.pais],
      tituloHero: `${m.tituloPre}`,
      tituloDestacado: c.nombre,
      descripcionHero: `Navega con todas las comidas, espectáculos tipo Broadway, piscinas, parque acuático y múltiples puertos incluidos en una sola tarifa.`,
      negritaHero: `${c.requisito}. Separa tu cabina con el 50% de inicial.`,
      destinoOPais: c.pais,
      precioBase: pBase,
      etiquetaVitrina: `Crucero ${c.nombre}`,
      duracionOServicio: "7 u 8 Días a Bordo · Todo Incluido",
      fotos,
      checksBase: [
        "Alojamiento en cabina seleccionada con atención a la habitación",
        "Desayunos, almuerzos, cenas de gala y buffet incluidos a bordo",
        "Shows nocturnos, piscinas, gimnasio y tasas portuarias incluidas",
      ],
      checksPlus: [
        "Paquete Completo con Boletos Aéreos desde Lima + Noche Pre-Crucero",
        "Cabina Exterior con Ventana o Balcón Privado con vista al mar",
        "Traslados Aeropuerto – Puerto de Embarque – Aeropuerto",
      ],
      checksVip: [
        "Paquete de bebidas ilimitadas, propinas pre-pagadas y Wi-Fi a bordo",
        "Seguro médico especial con cobertura marítima internacional",
        "Tarifas especiales para tercer y cuarto pasajero en la misma cabina",
      ],
      tituloCard1: `Cabina Interior Promo — ${c.nombre}`,
      subCard1: "Pensado para aprovechar el barco al mejor precio",
      precioCard1: Math.round(pBase * 0.9),
      tagCard1: "Cabina Promo",
      tituloCard2: `Cabina Exterior / Balcón — ${c.nombre}`,
      subCard2: "Vista al mar + Pensión Completa + Shows",
      precioCard2: pBase,
      tagCard2: "Más Elegida",
      tituloCard3: `Paquete Vuelo desde Lima + Crucero ${c.nombre}`,
      subCard3: "Vuelos + Traslados al Puerto + Crucero + Seguro",
      precioCard3: Math.round(pBase * 1.38),
      tagCard3: "Paquete Total",
      keywords: [
        `cruceros ${c.nombre.toLowerCase()}`,
        `cruceros desde lima`,
        `precio crucero ${c.nombre.toLowerCase()}`,
      ],
      faqs: [
        {
          q: `¿Qué incluye la tarifa del crucero ${c.nombre}?`,
          a: `Incluye cabina durante toda la travesía, alimentación completa (desayuno, almuerzo, cena y snacks), espectáculos en el teatro, acceso a piscinas y actividades a bordo, más impuestos portuarios.`,
        },
      ],
    });
  });
});

// ============================================================================
// CLUSTER 4: 26 SERVICIOS DE VISAS, PASAPORTE Y SEGUROS × 5 VARIANTES = 130 LANDINGS
// ============================================================================
const SERVICIOS_VISAS_SEGUROS: {
  slug: string;
  titulo: string;
  pais: string;
  precioBase: number;
  desc: string;
}[] = [
  { slug: "visa-americana-b1-b2-turismo", titulo: "Visa Americana B1/B2 de Turismo y Negocios", pais: "Estados Unidos", precioBase: 89, desc: "Asesoría consular completa: evaluación de perfil, llenado profesional del formulario DS-160 en inglés, creación de cuenta oficial y preparación de entrevista." },
  { slug: "renovacion-visa-americana-sin-entrevista", titulo: "Renovación de Visa Americana sin Entrevista", pais: "Estados Unidos", precioBase: 69, desc: "Renueva tu visa B1/B2 vencida o por vencer mediante el programa de exención de entrevista de la Embajada de EE.UU. en Lima." },
  { slug: "adelanto-de-cita-visa-americana-lima", titulo: "Adelanto de Cita Urgente para Visa Americana", pais: "Estados Unidos", precioBase: 79, desc: "Monitoreo constante del sistema consular para reprogramar y adelantar tu cita en la Embajada de Estados Unidos en Lima al menor plazo posible." },
  { slug: "visa-de-turismo-canada-peru", titulo: "Trámite de Visa Canadiense de Turismo y Visitante", pais: "Canadá", precioBase: 119, desc: "Armado integral de expediente digital IRCC, formularios IMM, sustento de arraigo económico y programación de datos biométricos en VFS Lima." },
  { slug: "visa-para-mexico-en-lima", titulo: "Asesoría y Cita de Visa Mexicana en Lima", pais: "México", precioBase: 79, desc: "Gestión de cita consular, revisión de estados de cuenta bancarios, constancias laborales y preparación de expediente para viajar a Cancún o CDMX." },
  { slug: "visa-para-china-turismo-y-negocios", titulo: "Trámite de Visa para China (Turismo L y Negocios M)", pais: "China", precioBase: 99, desc: "Especialistas en visado chino para turistas e importadores que viajan a la Feria de Cantón, Yiwu, Shanghái o Pekín." },
  { slug: "visa-para-reino-unido-uk", titulo: "Trámite de Visa para Reino Unido (Standard Visitor)", pais: "Reino Unido", precioBase: 129, desc: "Preparación de solicitud GOV.UK, carga digital de documentos sustentatorios y agendamiento de cita biométrica en Lima." },
  { slug: "visa-para-australia-desde-peru", titulo: "Trámite de Visa para Australia (Subclase 600)", pais: "Australia", precioBase: 129, desc: "Gestión 100% digital ante ImmiAccount con revisión detallada de solvencia, itinerario y vínculos en Perú." },
  { slug: "visa-de-estudios-para-espana", titulo: "Asesoría de Visa de Estudios y Estancia para España", pais: "España", precioBase: 149, desc: "Orientación documental, seguro médico sin copagos exigido por el consulado y reserva de alojamiento y boleto aéreo." },
  { slug: "carpeta-migratoria-para-viajar-a-espana", titulo: "Carpeta Migratoria Completa para Viajar a España", pais: "España", precioBase: 149, desc: "Reserva de vuelo ida y vuelta verificable, voucher de hotel confirmado, seguro Schengen 30.000€ e itinerario turístico impreso." },
  { slug: "requisitos-y-permiso-etias-europa", titulo: "Requisitos Migratorios y Documentos para Europa Schengen", pais: "Europa", precioBase: 59, desc: "Verificación completa de tus documentos obligatorios para ingresar sin contratiempos a España, Francia, Italia y el Espacio Schengen." },
  { slug: "tramite-de-pasaporte-electronico-lima", titulo: "Gestión de Cita y Trámite de Pasaporte Electrónico", pais: "Perú", precioBase: 45, desc: "Orientación para el pago de tasa en Págalo.pe (código 01810) y programación de cita en sedes de Migraciones o MAC en Lima." },
  { slug: "pasaporte-peruano-urgente-por-viaje", titulo: "Trámite de Pasaporte Urgente por Viaje Próximo", pais: "Perú", precioBase: 55, desc: "Asesoría inmediata para obtener tu pasaporte biométrico dentro de las 48 horas previas a tu vuelo internacional con boleto emitido." },
  { slug: "seguro-de-viaje-schengen-espana", titulo: "Seguro de Viaje Schengen 30.000€ para España", pais: "España", precioBase: 35, desc: "Póliza oficial exigida en el Aeropuerto de Madrid-Barajas: cobertura mínima de 30.000 EUR, sin deducible ni copagos y repatriación incluida." },
  { slug: "seguro-medico-obligatorio-europa", titulo: "Seguro Médico Internacional Obligatorio para Europa", pais: "Europa", precioBase: 39, desc: "Certificado en español e inglés válido para todos los países del Espacio Schengen con atención médica 24 horas." },
  { slug: "seguro-de-viaje-estados-unidos", titulo: "Seguro Médico de Viaje para Estados Unidos ($50,000 USD)", pais: "Estados Unidos", precioBase: 42, desc: "Viaja protegido a Miami, Orlando o Nueva York frente a los altos costos hospitalarios en EE.UU. con cobertura directa sin desembolso." },
  { slug: "seguro-de-viaje-caribe-todo-incluido", titulo: "Seguro de Viaje y Asistencia para el Caribe", pais: "República Dominicana", precioBase: 29, desc: "Protección médica, odontológica y por demora o pérdida de equipaje para tu viaje a Punta Cana, Cancún, Aruba o Cartagena." },
  { slug: "seguro-medico-para-cruceros", titulo: "Seguro de Viaje Especial con Cobertura en Cruceros", pais: "Panamá", precioBase: 45, desc: "Asistencia médica a bordo y en puertos internacionales válida para Royal Caribbean, MSC, Norwegian y Disney Cruise Line." },
  { slug: "seguro-de-viaje-adultos-mayores", titulo: "Seguro de Viaje Internacional para Adultos Mayores (+70)", pais: "España", precioBase: 59, desc: "Pólizas especiales para viajeros de 70 a 85+ años con cobertura de emergencias y preexistencias médicas." },
  { slug: "seguro-de-viaje-embarazadas", titulo: "Seguro de Viaje Internacional para Embarazadas", pais: "Estados Unidos", precioBase: 49, desc: "Asistencia médica especializada para futuras mamás en viajes internacionales hasta la semana 32 de gestación." },
  { slug: "seguro-de-viaje-anual-multiviajes", titulo: "Seguro de Viaje Anual Multiviajes para Viajeros Frecuentes", pais: "Estados Unidos", precioBase: 149, desc: "Una sola póliza anual que te cubre en todos tus viajes internacionales del año (hasta 30 o 60 días por viaje)." },
  { slug: "seguro-de-viaje-estudiantes-intercambio", titulo: "Seguro Médico Internacional para Estudiantes y Becarios", pais: "España", precioBase: 89, desc: "Cumple al 100% con los requisitos de consulados y universidades en España, Europa, Canadá y Estados Unidos." },
  { slug: "seguro-viaje-cobertura-equipaje-cancelacion", titulo: "Seguro de Viaje con Cobertura de Equipaje y Cancelación", pais: "Europa", precioBase: 45, desc: "Indemnización por pérdida de maletas en aerolínea, vuelos demorados y cancelación de viaje por fuerza mayor." },
  { slug: "seguro-de-viaje-economico-internacional", titulo: "Seguro de Viaje Internacional Económico en Oferta", pais: "Colombia", precioBase: 25, desc: "La tarjeta de asistencia al viajero más económica y confiable con entrega de póliza PDF en 5 minutos por WhatsApp." },
  { slug: "seguro-de-viaje-corporativo-empresas", titulo: "Seguros de Viaje Corporativos para Empresas (RUC 20)", pais: "Estados Unidos", precioBase: 39, desc: "Pólizas para ejecutivos y personal en comisión de servicios con emisión inmediata de Factura Electrónica SUNAT." },
  { slug: "seguro-de-viaje-familiar-descuento", titulo: "Plan Familiar de Seguro de Viaje Internacional (50% Off Niños)", pais: "México", precioBase: 79, desc: "Protege a toda tu familia en una sola póliza con tarifas reducidas para cónyuge e hijos." },
];

const VARIANTES_VISAS_SEGUROS: {
  prefijo: string;
  etiqueta: string;
  factor: number;
}[] = [
  { prefijo: "tramite", etiqueta: "Gestión Oficial", factor: 1 },
  { prefijo: "precio", etiqueta: "Tarifa Promocional 2026", factor: 0.95 },
  { prefijo: "requisitos", etiqueta: "Requisitos + Asesoría", factor: 1 },
  { prefijo: "urgente", etiqueta: "Atención Prioritaria 24h", factor: 1.15 },
  { prefijo: "asesoria", etiqueta: "Especialistas en Lima", factor: 1 },
];

const LANDINGS_CLUSTER_4: LandingComercialSEO[] = SERVICIOS_VISAS_SEGUROS.flatMap((s) => {
  const fotos = FOTOS_GALERIA.visasSeguros;
  return VARIANTES_VISAS_SEGUROS.map((v) => {
    const pBase = Math.max(22, Math.round(s.precioBase * v.factor));
    return armarLandingComercial({
      slug: `${v.prefijo}-${s.slug}`,
      cluster: "visas-seguros",
      clusterNombre: "Visas Consulares, Pasaporte y Seguros de Viaje",
      badge: `${v.etiqueta} · Oficina en Los Olivos y Atención Digital`,
      banderas: ["Perú", s.pais],
      tituloHero: `${s.titulo}:`,
      tituloDestacado: v.etiqueta,
      descripcionHero: s.desc,
      negritaHero: "Atención rápida por WhatsApp 944 103 890 y presencial en Av. Antúnez de Mayolo 814, Los Olivos.",
      destinoOPais: s.pais,
      precioBase: pBase,
      etiquetaVitrina: s.titulo,
      duracionOServicio: `${v.etiqueta} · Entrega Verificada`,
      fotos,
      checksBase: [
        "Revisión personalizada de requisitos y documentos paso a paso",
        "Emisión de certificados, formularios o pólizas oficiales en minutos",
        "Boleta o Factura Electrónica SUNAT (Cityland Travel RUC 20614914239)",
      ],
      checksPlus: [
        "Asesoría integral con especialista consular o migratorio",
        "Reservas aéreas y hoteleras de respaldo con código PNR real",
        "Soporte directo por WhatsApp hasta el día de tu cita o viaje",
      ],
      checksVip: [
        "Descuento especial al adquirir tu boleto aéreo o paquete con nosotros",
        "Tarifa preferencial para parejas, grupos familiares y empresas",
        "Atención prioritaria urgente para viajes próximos",
      ],
      tituloCard1: `${s.titulo} — Modalidad Estándar`,
      subCard1: "Gestión rápida y verificada",
      precioCard1: pBase,
      tagCard1: "Más Solicitado",
      tituloCard2: `${s.titulo} — Servicio Prioritario / Plus`,
      subCard2: "Incluye carpeta documental completa y seguimiento",
      precioCard2: Math.round(pBase * 1.4),
      tagCard2: "Atención VIP",
      tituloCard3: `Pack Dúo / Familiar: ${s.titulo}`,
      subCard3: "Tarifa con descuento a partir de 2 solicitantes",
      precioCard3: Math.max(20, Math.round(pBase * 0.88)),
      tagCard3: "Descuento Dúo",
      keywords: [
        s.titulo.toLowerCase(),
        `${v.prefijo} ${s.slug.replace(/-/g, " ")}`,
        "agencia de viajes lima visas y seguros",
      ],
      faqs: [
        {
          q: `¿Cuánto demora la gestión de ${s.titulo}?`,
          a: `Para seguros de viaje y carpetas migratorias la entrega es el mismo día (en minutos por WhatsApp o impreso en oficina). Para trámites de visa y pasaporte iniciamos tu expediente el mismo día de tu solicitud.`,
        },
      ],
    });
  });
});

// ============================================================================
// CLUSTER 5: 26 TOURS Y EXCURSIONES (PERÚ Y MUNDO) × 5 MODALIDADES = 130 LANDINGS
// ============================================================================
const TOURS_CATALOGO: {
  slug: string;
  nombre: string;
  pais: string;
  precioBase: number;
  galeriaKey: keyof typeof FOTOS_GALERIA;
}[] = [
  { slug: "machu-picchu-full-day-en-tren", nombre: "Tour a Machu Picchu Full Day en Tren Turístico", pais: "Perú", precioBase: 269, galeriaKey: "peru" },
  { slug: "cusco-y-machu-picchu-4-dias", nombre: "Tour Cusco, Valle Sagrado y Machu Picchu (4D/3N)", pais: "Perú", precioBase: 399, galeriaKey: "peru" },
  { slug: "valle-sagrado-de-los-incas-vip", nombre: "Tour Valle Sagrado VIP (Chinchero, Maras, Moray y Ollantaytambo)", pais: "Perú", precioBase: 55, galeriaKey: "peru" },
  { slug: "montana-de-7-colores-vinicunca", nombre: "Tour Montaña de 7 Colores (Vinicunca) con Alimentación", pais: "Perú", precioBase: 45, galeriaKey: "peru" },
  { slug: "laguna-humantay-cusco", nombre: "Tour Laguna Humantay Full Day en Cusco", pais: "Perú", precioBase: 45, galeriaKey: "peru" },
  { slug: "paracas-islas-ballestas-y-huacachina", nombre: "Full Day Paracas, Islas Ballestas e Ica Huacachina", pais: "Perú", precioBase: 69, galeriaKey: "peru" },
  { slug: "sobrevuelo-lineas-de-nazca", nombre: "Sobrevuelo a las Líneas de Nazca", pais: "Perú", precioBase: 149, galeriaKey: "peru" },
  { slug: "arequipa-y-canon-del-colca-3-dias", nombre: "Tour Arequipa y Cañón del Colca (3 Días / 2 Noches)", pais: "Perú", precioBase: 229, galeriaKey: "peru" },
  { slug: "tarapoto-laguna-azul-y-ahuashiyacu", nombre: "Tour Tarapoto, Laguna Azul y Cataratas (4D/3N)", pais: "Perú", precioBase: 249, galeriaKey: "peru" },
  { slug: "iquitos-rio-amazonas-lodge", nombre: "Tour Iquitos y Lodge en el Río Amazonas Todo Incluido", pais: "Perú", precioBase: 299, galeriaKey: "peru" },
  { slug: "huaraz-laguna-69-y-pastoruri", nombre: "Tour Huaraz, Laguna 69 y Nevado Pastoruri (3D/2N)", pais: "Perú", precioBase: 169, galeriaKey: "peru" },
  { slug: "ayacucho-y-aguas-turquesas-millpu", nombre: "Tour Ayacucho y Aguas Turquesas de Millpu", pais: "Perú", precioBase: 199, galeriaKey: "peru" },
  { slug: "puno-lago-titicaca-uros-taquile", nombre: "Tour Puno & Lago Titicaca: Islas de los Uros y Taquile", pais: "Perú", precioBase: 189, galeriaKey: "peru" },
  { slug: "isla-saona-en-catamaran-punta-cana", nombre: "Excursión a Isla Saona en Catamarán con Almuerzo (Punta Cana)", pais: "República Dominicana", precioBase: 89, galeriaKey: "caribe" },
  { slug: "chichen-itza-y-cenote-cancun", nombre: "Tour Chichén Itzá, Cenote Sagrado y Valladolid (Cancún)", pais: "México", precioBase: 99, galeriaKey: "mexico" },
  { slug: "parque-xcaret-plus-riviera-maya", nombre: "Entradas + Transporte a Parque Xcaret Plus (Riviera Maya)", pais: "México", precioBase: 189, galeriaKey: "mexico" },
  { slug: "vuelo-en-globo-capadocia-turquia", nombre: "Paseo en Globo Aerostático al Amanecer en Capadocia", pais: "Turquía", precioBase: 260, galeriaKey: "turquia" },
  { slug: "safari-desierto-y-burj-khalifa-dubai", nombre: "Safari 4x4 por el Desierto con Cena + Burj Khalifa (Dubái)", pais: "Emiratos Árabes", precioBase: 139, galeriaKey: "medioOrienteAsia" },
  { slug: "entradas-parques-disney-world-orlando", nombre: "Pases Oficiales a Parques Walt Disney World (Orlando)", pais: "Estados Unidos", precioBase: 490, galeriaKey: "usaCanada" },
  { slug: "entradas-universal-studios-orlando", nombre: "Entradas Oficiales a Universal Studios e Islands of Adventure", pais: "Estados Unidos", precioBase: 390, galeriaKey: "usaCanada" },
  { slug: "islas-del-rosario-y-baru-cartagena", nombre: "Tour Islas del Rosario, Acuario y Playa Blanca (Cartagena)", pais: "Colombia", precioBase: 69, galeriaKey: "caribe" },
  { slug: "johnny-cay-y-acuario-san-andres", nombre: "Tour Johnny Cay, Acuario y Bahía en San Andrés", pais: "Colombia", precioBase: 55, galeriaKey: "caribe" },
  { slug: "toledo-y-segovia-desde-madrid", nombre: "Excursión a Toledo y Segovia con Guía desde Madrid", pais: "España", precioBase: 79, galeriaKey: "espana" },
  { slug: "coliseo-romano-y-museos-vaticanos", nombre: "Tour Coliseo Romano, Foro y Museos Vaticanos sin Colas", pais: "Italia", precioBase: 95, galeriaKey: "europa" },
  { slug: "torre-eiffel-y-crucero-rio-sena", nombre: "Tour Torre Eiffel, Louvre y Crucero por el Río Sena (París)", pais: "Francia", precioBase: 99, galeriaKey: "europa" },
  { slug: "piramides-de-giza-y-crucero-nilo", nombre: "Tour Pirámides de Giza y Crucero por el Río Nilo", pais: "Egipto", precioBase: 690, galeriaKey: "medioOrienteAsia" },
];

const MODALIDADES_TOURS: {
  prefijo: string;
  sufijo: string;
  factor: number;
}[] = [
  { prefijo: "tour", sufijo: "Reserva Confirmada", factor: 1 },
  { prefijo: "oferta-tour", sufijo: "en Promoción 2026", factor: 0.92 },
  { prefijo: "tour-privado", sufijo: "en Servicio Privado VIP", factor: 1.45 },
  { prefijo: "tour-grupal", sufijo: "Especial Familias / Grupos", factor: 0.9 },
  { prefijo: "paquete-con-tour", sufijo: "+ Vuelo + Hotel Incluido", factor: 2.2 },
];

const LANDINGS_CLUSTER_5: LandingComercialSEO[] = TOURS_CATALOGO.flatMap((t) => {
  const fotos = FOTOS_GALERIA[t.galeriaKey];
  return MODALIDADES_TOURS.map((m) => {
    const pBase = Math.max(39, Math.round(t.precioBase * m.factor));
    return armarLandingComercial({
      slug: `${m.prefijo}-${t.slug}`,
      cluster: "tours",
      clusterNombre: "Tours, Excursiones y Circuitos Guiados",
      badge: `Guías Oficiales en Español · Entradas y Transporte Incluido`,
      banderas: ["Perú", t.pais],
      tituloHero: t.nombre,
      tituloDestacado: m.sufijo,
      descripcionHero: `Reserva tus entradas oficiales, transporte turístico climatizado y guía certificado sin hacer colas ni arriesgar disponibilidad en destino.`,
      negritaHero: "Confirmación inmediata con voucher oficial de Cityland Travel.",
      destinoOPais: t.pais,
      precioBase: pBase,
      etiquetaVitrina: t.nombre,
      duracionOServicio: "Excursión Verificada · Guía en Español",
      fotos,
      checksBase: [
        "Recojo y traslado turístico confirmado en unidades modernas",
        "Entradas oficiales a los atractivos turísticos según programa",
        "Guía profesional acreditado en español durante todo el recorrido",
      ],
      checksPlus: [
        "Modalidad Privada o VIP sin tiempos de espera y a tu propio ritmo",
        "Opción de incluir almuerzo buffet típico o gastronómico",
        "Asistencia permanente por WhatsApp durante toda tu excursión",
      ],
      checksVip: [
        "Combina este tour con boletos aéreos y hotel a precio de paquete",
        "Descuentos especiales para familias, parejas y grupos de amigos",
        "Respaldo formal con RUC 20614914239 en Lima",
      ],
      tituloCard1: `${t.nombre} — Servicio Regular`,
      subCard1: "Transporte + Guía Oficial + Entradas",
      precioCard1: t.precioBase,
      tagCard1: "Tarifa Base",
      tituloCard2: `${t.nombre} — Servicio Privado / VIP`,
      subCard2: "Movilidad exclusiva + Horario flexible",
      precioCard2: Math.round(t.precioBase * 1.45),
      tagCard2: "Privado VIP",
      tituloCard3: `Paquete Completo (Vuelo + Hotel + ${t.nombre})`,
      subCard3: "Viaje completo organizado desde Lima",
      precioCard3: Math.max(249, Math.round(t.precioBase * 2.4)),
      tagCard3: "Paquete Completo",
      keywords: [
        t.nombre.toLowerCase(),
        `precio ${t.slug.replace(/-/g, " ")}`,
        `reservar ${t.slug.replace(/-/g, " ")}`,
      ],
      faqs: [
        {
          q: `¿Con cuánta anticipación debo reservar ${t.nombre}?`,
          a: `Recomendamos reservar con anticipación (especialmente en Machu Picchu, Xcaret, Disney o Capadocia) para asegurar cupos de ingreso oficial en la fecha exacta de tu viaje.`,
        },
      ],
    });
  });
});

// ============================================================================
// CLUSTER 6: 18 SOLUCIONES PARA EMPRESAS Y CORPORATIVOS (B2B) × 5 = 90 LANDINGS
// ============================================================================
const SOLUCIONES_EMPRESAS: {
  slug: string;
  titulo: string;
  pais: string;
  precioBase: number;
  galeriaKey: keyof typeof FOTOS_GALERIA;
}[] = [
  { slug: "pasajes-aereos-corporativos-empresas", titulo: "Emisión de Pasajes Aéreos Corporativos para Empresas", pais: "Perú", precioBase: 149, galeriaKey: "corporativo" },
  { slug: "hoteles-ejecutivos-con-factura-ruc-20", titulo: "Reserva de Hoteles Ejecutivos con Factura Electrónica RUC 20", pais: "Perú", precioBase: 89, galeriaKey: "corporativo" },
  { slug: "viajes-de-incentivos-para-empresas", titulo: "Viajes de Incentivos y Premiación para Equipos de Ventas", pais: "República Dominicana", precioBase: 799, galeriaKey: "caribe" },
  { slug: "viaje-feria-de-canton-china-importadores", titulo: "Viaje de Negocios a la Feria de Cantón en China (Importadores)", pais: "China", precioBase: 2390, galeriaKey: "medioOrienteAsia" },
  { slug: "viajes-a-ferias-y-congresos-medicos", titulo: "Viajes a Congresos Médicos y Científicos Internacionales", pais: "España", precioBase: 1190, galeriaKey: "espana" },
  { slug: "viajes-convenciones-mineras-perumin", titulo: "Logística de Viajes y Hoteles para Convenciones Mineras (PERUMIN)", pais: "Perú", precioBase: 299, galeriaKey: "peru" },
  { slug: "viajes-para-ingenieros-y-obras-provincias", titulo: "Pasajes + Alojamiento para Ingenieros y Personal en Provincias", pais: "Perú", precioBase: 129, galeriaKey: "corporativo" },
  { slug: "viajes-de-negocios-lima-madrid-europa", titulo: "Viajes Ejecutivos Business Class a Madrid y Europa", pais: "España", precioBase: 990, galeriaKey: "espana" },
  { slug: "viajes-de-negocios-miami-estados-unidos", titulo: "Viajes Corporativos a Ferias en Miami y Estados Unidos", pais: "Estados Unidos", precioBase: 649, galeriaKey: "usaCanada" },
  { slug: "viajes-ejecutivos-bogota-medellin-panama", titulo: "Viajes de Negocios a Bogotá, Medellín y Ciudad de Panamá", pais: "Colombia", precioBase: 489, galeriaKey: "sudamerica" },
  { slug: "viajes-corporativos-santiago-buenos-aires", titulo: "Viajes Ejecutivos a Santiago de Chile y Buenos Aires", pais: "Chile", precioBase: 399, galeriaKey: "sudamerica" },
  { slug: "viajes-corporativos-sao-paulo-brasil", titulo: "Viajes de Negocios y Ferias en São Paulo, Brasil", pais: "Brasil", precioBase: 549, galeriaKey: "sudamerica" },
  { slug: "vuelos-corporativos-cusco-arequipa-trujillo", titulo: "Vuelos + Hoteles Corporativos a Cusco, Arequipa y Trujillo", pais: "Perú", precioBase: 139, galeriaKey: "peru" },
  { slug: "pasajes-corporativos-piura-iquitos-tarapoto", titulo: "Pasajes Corporativos a Piura, Talara, Iquitos y Tarapoto", pais: "Perú", precioBase: 139, galeriaKey: "peru" },
  { slug: "organizacion-convenciones-empresariales", titulo: "Organización de Convenciones, Retiros y Eventos Corporativos", pais: "Perú", precioBase: 349, galeriaKey: "corporativo" },
  { slug: "seguros-medicos-corporativos-ejecutivos", titulo: "Seguros de Viaje Anuales para Ejecutivos y Directorio", pais: "Estados Unidos", precioBase: 99, galeriaKey: "corporativo" },
  { slug: "traslados-ejecutivos-aeropuerto-lima", titulo: "Traslados Ejecutivos Privados y Vans Corporativas", pais: "Perú", precioBase: 49, galeriaKey: "corporativo" },
  { slug: "visas-de-negocios-usa-china-empresas", titulo: "Gestión de Visas de Negocios (USA y China) para Empresas", pais: "Estados Unidos", precioBase: 99, galeriaKey: "visasSeguros" },
];

const VARIANTES_EMPRESAS: {
  prefijo: string;
  etiqueta: string;
}[] = [
  { prefijo: "corporativo", etiqueta: "Facturación Electrónica RUC 20" },
  { prefijo: "agencia-empresas", etiqueta: "Cuenta Corporativa B2B" },
  { prefijo: "cotizacion-empresarial", etiqueta: "Atención Ejecutiva 24/7" },
  { prefijo: "servicio-ejecutivo", etiqueta: "Tarifas Negociadas para Empresas" },
  { prefijo: "convenio-corporativo", etiqueta: "Convenio sin Costo de Afiliación" },
];

const LANDINGS_CLUSTER_6: LandingComercialSEO[] = SOLUCIONES_EMPRESAS.flatMap((e) => {
  const fotos = FOTOS_GALERIA[e.galeriaKey];
  return VARIANTES_EMPRESAS.map((v) =>
    armarLandingComercial({
      slug: `${v.prefijo}-${e.slug}`,
      cluster: "empresas",
      clusterNombre: "División Corporativa y Empresas (B2B)",
      badge: `División Corporativa Cityland Travel · ${v.etiqueta}`,
      banderas: ["Perú", e.pais],
      tituloHero: `${e.titulo}:`,
      tituloDestacado: v.etiqueta,
      descripcionHero: `Optimiza el presupuesto de viajes de tu empresa con tarifas corporativas, cambios flexibles, ejecutivo de cuenta asignado 24/7 y emisión inmediata de Factura Electrónica SUNAT.`,
      negritaHero: "Atendemos empresas, corporaciones, pymes, constructoras, mineras e importadores.",
      destinoOPais: e.pais,
      precioBase: e.precioBase,
      etiquetaVitrina: e.titulo,
      duracionOServicio: "Atención B2B · Factura RUC 20614914239",
      fotos,
      checksBase: [
        "Emisión inmediata de Factura Electrónica SUNAT deducible para tu empresa",
        "Ejecutivo corporativo asignado por WhatsApp y correo las 24 horas",
        "Tarifas corporativas en boletos aéreos, hoteles, traslados y seguros",
      ],
      checksPlus: [
        "Gestión de cambios de fecha, ruta o nombre sin esperas en call centers",
        "Reportes mensuales de gastos de viaje por centro de costos o área",
        "Salas de reuniones, hoteles ejecutivos y logística para ferias y eventos",
      ],
      checksVip: [
        "Tarifas preferenciales en Cabina Ejecutiva (Business Class) y Flota VIP",
        "Organización llave en mano de viajes de incentivos para tus colaboradores",
        "Convenio corporativo directo con Cityland Travel E.I.R.L. (RUC 20614914239)",
      ],
      tituloCard1: `Tarifa Corporativa Flexible — ${e.titulo}`,
      subCard1: "Emisión rápida + Factura Electrónica RUC 20",
      precioCard1: e.precioBase,
      tagCard1: "Tarifa Empresas",
      tituloCard2: `Programa Ejecutivo Integral (Vuelo + Hotel + Traslado)`,
      subCard2: "Soluciones llave en mano para personal en comisión",
      precioCard2: Math.round(e.precioBase * 1.45),
      tagCard2: "Pack Ejecutivo",
      tituloCard3: `Tarifa Grupal Corporativa / Incentivos (5+ Pasajeros)`,
      subCard3: "Descuento por volumen para equipos y delegaciones",
      precioCard3: Math.round(e.precioBase * 0.92),
      tagCard3: "Descuento Corporativo",
      keywords: [
        e.titulo.toLowerCase(),
        "agencia de viajes para empresas en lima",
        "viajes corporativos peru factura",
      ],
      faqs: [
        {
          q: "¿Emiten Factura Electrónica válida ante SUNAT para todos los servicios?",
          a: "Sí. Cityland Travel E.I.R.L. (RUC 20614914239) emite Factura Electrónica y Liquidaciones de Cobranza oficiales para que tu empresa sustente el 100% de sus gastos de viaje.",
        },
      ],
    })
  );
});

// ============================================================================
// CLUSTER 7: 18 PROGRAMAS PARA COLEGIOS, INSTITUTOS, ACADEMIAS Y CLUBES DEPORTIVOS × 5 = 90 LANDINGS
// ============================================================================
const PROGRAMAS_COLEGIOS_DEPORTES: {
  slug: string;
  titulo: string;
  pais: string;
  precioBase: number;
  galeriaKey: keyof typeof FOTOS_GALERIA;
}[] = [
  { slug: "viaje-de-promocion-escolar-cusco-machu-picchu", titulo: "Viaje de Promoción Escolar a Cusco y Machu Picchu", pais: "Perú", precioBase: 369, galeriaKey: "peru" },
  { slug: "viaje-de-promocion-escolar-punta-cana", titulo: "Viaje de Promoción Escolar a Punta Cana Todo Incluido", pais: "República Dominicana", precioBase: 999, galeriaKey: "caribe" },
  { slug: "viaje-de-promocion-escolar-cancun", titulo: "Viaje de Promoción Escolar a Cancún y Riviera Maya", pais: "México", precioBase: 989, galeriaKey: "mexico" },
  { slug: "viaje-de-promocion-decameron-punta-sal", titulo: "Viaje de Promoción Escolar a Royal Decameron Punta Sal", pais: "Perú", precioBase: 419, galeriaKey: "peru" },
  { slug: "viaje-de-promocion-escolar-tarapoto", titulo: "Viaje de Promoción Escolar a Tarapoto y Laguna Azul", pais: "Perú", precioBase: 269, galeriaKey: "peru" },
  { slug: "viaje-de-promocion-cartagena-san-andres", titulo: "Viaje de Promoción Escolar a Cartagena y San Andrés", pais: "Colombia", precioBase: 649, galeriaKey: "caribe" },
  { slug: "viajes-de-estudios-institutos-universidades", titulo: "Viajes de Estudios para Institutos y Universidades", pais: "Perú", precioBase: 249, galeriaKey: "peru" },
  { slug: "pasantias-internacionales-universitarias", titulo: "Viajes Académicos y Congresos Internacionales para Universidades", pais: "Colombia", precioBase: 599, galeriaKey: "sudamerica" },
  { slug: "paquetes-apafa-comites-de-aula-colegios", titulo: "Paquetes para Comités de Aula y APAFA de Colegios en Lima", pais: "Perú", precioBase: 289, galeriaKey: "peru" },
  { slug: "viajes-para-clubes-de-futbol-torneos", titulo: "Viajes para Clubes de Fútbol y Academias Deportivas a Torneos", pais: "Perú", precioBase: 199, galeriaKey: "sudamerica" },
  { slug: "viajes-equipos-de-voley-y-basquet", titulo: "Viajes para Equipos de Vóley y Básquet a Campeonatos", pais: "Perú", precioBase: 199, galeriaKey: "sudamerica" },
  { slug: "viajes-clubes-natacion-y-atletismo", titulo: "Logística de Viajes para Clubes de Natación y Atletismo", pais: "Perú", precioBase: 219, galeriaKey: "sudamerica" },
  { slug: "viajes-academias-artes-marciales-karate-taekwondo", titulo: "Viajes para Academias de Karate, Taekwondo y Artes Marciales", pais: "Perú", precioBase: 219, galeriaKey: "sudamerica" },
  { slug: "viajes-academias-de-baile-y-danza", titulo: "Viajes para Academias de Baile, Danza y Concursos Coreográficos", pais: "Perú", precioBase: 229, galeriaKey: "sudamerica" },
  { slug: "pasajes-grupales-delegaciones-deportivas", titulo: "Pasajes Aéreos Grupales para Delegaciones Deportivas con Equipaje", pais: "Perú", precioBase: 129, galeriaKey: "corporativo" },
  { slug: "hoteles-y-alimentacion-equipos-deportivos", titulo: "Alojamiento y Alimentación Nutricional para Equipos en Competencia", pais: "Perú", precioBase: 149, galeriaKey: "corporativo" },
  { slug: "viajes-para-hinchas-partidos-y-mundial", titulo: "Paquetes para Hinchas a Partidos Internacionales, Copa Libertadores y Mundial", pais: "Argentina", precioBase: 699, galeriaKey: "sudamerica" },
  { slug: "seguros-medicos-delegaciones-deportivas", titulo: "Seguros Médicos de Viaje con Cobertura Deportiva para Delegaciones", pais: "Estados Unidos", precioBase: 39, galeriaKey: "visasSeguros" },
];

const VARIANTES_COLEGIOS_DEPORTES: {
  prefijo: string;
  etiqueta: string;
}[] = [
  { prefijo: "grupos", etiqueta: "Liberados Gratis + Cuotas" },
  { prefijo: "paquetes", etiqueta: "Programa Todo Incluido" },
  { prefijo: "cotizacion", etiqueta: "Tarifa Especial Delegaciones" },
  { prefijo: "organizacion", etiqueta: "Contrato Formal · Seguridad Total" },
  { prefijo: "preventa", etiqueta: "Campaña 2026 / 2027" },
];

const LANDINGS_CLUSTER_7: LandingComercialSEO[] = PROGRAMAS_COLEGIOS_DEPORTES.flatMap((p) => {
  const fotos = FOTOS_GALERIA[p.galeriaKey];
  return VARIANTES_COLEGIOS_DEPORTES.map((v) =>
    armarLandingComercial({
      slug: `${v.prefijo}-${p.slug}`,
      cluster: "colegios-deportes",
      clusterNombre: "Colegios, Institutos, Academias y Clubes Deportivos",
      badge: `Especialistas en Grupos y Delegaciones · ${v.etiqueta}`,
      banderas: ["Perú", p.pais],
      tituloHero: `${p.titulo}:`,
      tituloDestacado: v.etiqueta,
      descripcionHero: `Organizamos el viaje completo de tu colegio, instituto, universidad, academia o club deportivo con contrato notarial/formal, pagos en cuotas mensuales y liberados gratis.`,
      negritaHero: "Solicita una reunión informativa presencial para padres, junta directiva o entrenadores.",
      destinoOPais: p.pais,
      precioBase: p.precioBase,
      etiquetaVitrina: p.titulo,
      duracionOServicio: `${v.etiqueta} · RUC 20614914239`,
      fotos,
      checksBase: [
        "1 liberado gratis por cada 15 participantes (para tutor, docente o entrenador)",
        "Vuelos confirmados en grupo, hotel exclusivo, alimentación completa y traslados",
        "Tarjeta de asistencia médica permanente 24/7 y coordinador acompañante",
      ],
      checksPlus: [
        "Cronograma de pagos mensuales congelando la tarifa desde la firma del contrato",
        "Presentación presencial con proyector en tu colegio, academia o club en Lima",
        "Gestión de permisos notariales de viaje y autorizaciones MINEDU",
      ],
      checksVip: [
        "Fiesta de integración, polo/casaca recordatoria o fotobook profesional incluido",
        "Logística especial para implementos deportivos, vestuarios o instrumentos",
        "Respaldo legal en nuestra sede de Av. Antúnez de Mayolo 814, Los Olivos",
      ],
      tituloCard1: `Plan Estándar Grupal — ${p.titulo}`,
      subCard1: "Vuelos + Hotel + Alimentación + Traslados",
      precioCard1: p.precioBase,
      tagCard1: "Tarifa Grupal",
      tituloCard2: `Plan Todo Incluido Plus — ${p.titulo}`,
      subCard2: "Incluye Excursiones + Seguro + Coordinador + Liberados",
      precioCard2: Math.round(p.precioBase * 1.18),
      tagCard2: "Más Elegido",
      tituloCard3: `Plan VIP / Delegación Completa (20+ Integrantes)`,
      subCard3: "Tarifa corporativa preferencial + Beneficios exclusivos",
      precioCard3: Math.round(p.precioBase * 0.92),
      tagCard3: "20+ Pasajeros",
      keywords: [
        p.titulo.toLowerCase(),
        "viajes de promocion escolar lima",
        "viajes para clubes deportivos y academias",
      ],
      faqs: [
        {
          q: "¿Realizan presentaciones presenciales para los padres de familia o directiva del club?",
          a: "Sí. Nuestro equipo especializado en grupos asiste sin costo a tu colegio, instituto, academia o club deportivo en Lima para exponer el programa detallado y resolver todas las dudas.",
        },
      ],
    })
  );
});

// ============================================================================
// CLUSTER 8: 18 PROGRAMAS PARA GRUPOS RELIGIOSOS, QUINCEAÑERAS Y BODAS/MIEL × 5 = 90 LANDINGS
// ============================================================================
const PROGRAMAS_RELIGIOSOS_EVENTOS: {
  slug: string;
  titulo: string;
  pais: string;
  precioBase: number;
  galeriaKey: keyof typeof FOTOS_GALERIA;
}[] = [
  { slug: "peregrinacion-tierra-santa-jerusalen-belen", titulo: "Peregrinación a Tierra Santa: Jerusalén, Belén, Nazaret y Galilea", pais: "Israel", precioBase: 2290, galeriaKey: "medioOrienteAsia" },
  { slug: "peregrinacion-roma-vaticano-y-asis", titulo: "Peregrinación a Roma, El Vaticano (Audiencia Papal) y Asís", pais: "Italia", precioBase: 1790, galeriaKey: "europa" },
  { slug: "tour-santuarios-marianos-fatima-lourdes", titulo: "Circuito de Santuarios Marianos: Fátima, Lourdes y El Pilar", pais: "España", precioBase: 1850, galeriaKey: "espana" },
  { slug: "peregrinacion-medjugorje-y-europa", titulo: "Peregrinación a Medjugorje, Roma y Santuarios de Europa", pais: "Europa", precioBase: 2090, galeriaKey: "europa" },
  { slug: "peregrinacion-virgen-de-guadalupe-mexico", titulo: "Peregrinación a la Basílica de la Virgen de Guadalupe y México", pais: "México", precioBase: 990, galeriaKey: "mexico" },
  { slug: "viajes-para-parroquias-y-grupos-religiosos", titulo: "Peregrinaciones para Parroquias, Iglesias y Comunidades", pais: "España", precioBase: 1590, galeriaKey: "europa" },
  { slug: "peregrinacion-tierra-santa-y-egipto", titulo: "Gran Peregrinación a Tierra Santa, Egipto y Monte Sinaí", pais: "Egipto", precioBase: 2590, galeriaKey: "medioOrienteAsia" },
  { slug: "viaje-quinceaneras-disney-orlando-miami", titulo: "Viaje de Quinceañeras a Disney World Orlando, Universal y Miami", pais: "Estados Unidos", precioBase: 2190, galeriaKey: "usaCanada" },
  { slug: "viaje-quinceaneras-europa-magica", titulo: "Viaje de Quinceañeras a Europa Mágica (Madrid, París y Roma)", pais: "Francia", precioBase: 2690, galeriaKey: "europa" },
  { slug: "crucero-quinceaneras-caribe-sin-visa", titulo: "Crucero de Quinceañeras por el Caribe Todo Incluido (Sin Visa)", pais: "Panamá", precioBase: 1590, galeriaKey: "cruceros" },
  { slug: "viaje-quinceaneras-cancun-y-punta-cana", titulo: "Viaje de Quinceañeras a Cancún y Punta Cana Todo Incluido", pais: "México", precioBase: 1390, galeriaKey: "caribe" },
  { slug: "luna-de-miel-punta-cana-todo-incluido", titulo: "Luna de Miel en Punta Cana en Resort 5★ Solo Adultos", pais: "República Dominicana", precioBase: 1190, galeriaKey: "caribe" },
  { slug: "luna-de-miel-cancun-y-riviera-maya", titulo: "Luna de Miel Romántica en Cancún y Riviera Maya 5★", pais: "México", precioBase: 1190, galeriaKey: "mexico" },
  { slug: "luna-de-miel-europa-romantica-paris-venecia", titulo: "Luna de Miel en Europa Romántica: París, Venecia, Roma y Santorini", pais: "Italia", precioBase: 2190, galeriaKey: "europa" },
  { slug: "luna-de-miel-turquia-y-dubai-lujo", titulo: "Luna de Miel Exótica en Turquía, Capadocia y Dubái", pais: "Turquía", precioBase: 2290, galeriaKey: "turquia" },
  { slug: "bodas-de-destino-en-la-playa-caribe", titulo: "Bodas de Destino en la Playa (Punta Cana y Cancún) + Invitados", pais: "República Dominicana", precioBase: 1099, galeriaKey: "caribe" },
  { slug: "viajes-grupales-adultos-mayores-jubilados", titulo: "Viajes Grupales para Adultos Mayores y Asociaciones de Jubilados", pais: "España", precioBase: 1290, galeriaKey: "espana" },
  { slug: "viajes-para-familias-numerosas-y-grupos", titulo: "Paquetes para Familias Numerosas, Aniversarios y Grupos Privados", pais: "República Dominicana", precioBase: 999, galeriaKey: "caribe" },
];

const VARIANTES_RELIGIOSOS_EVENTOS: {
  prefijo: string;
  etiqueta: string;
}[] = [
  { prefijo: "especial", etiqueta: "Salidas Confirmadas desde Lima" },
  { prefijo: "programa", etiqueta: "Programa Todo Incluido" },
  { prefijo: "oferta", etiqueta: "Preventa 2026 con 50% Inicial" },
  { prefijo: "todo-incluido", etiqueta: "Vuelo + Hotel + Asistencia Total" },
  { prefijo: "grupos-vip", etiqueta: "Atención VIP + Cupos Liberados" },
];

const LANDINGS_CLUSTER_8: LandingComercialSEO[] = PROGRAMAS_RELIGIOSOS_EVENTOS.flatMap((r) => {
  const fotos = FOTOS_GALERIA[r.galeriaKey];
  return VARIANTES_RELIGIOSOS_EVENTOS.map((v) =>
    armarLandingComercial({
      slug: `${v.prefijo}-${r.slug}`,
      cluster: "religiosos-eventos",
      clusterNombre: "Peregrinaciones Religiosas, Quinceañeras y Bodas/Miel",
      badge: `Programas Especiales con Acompañamiento · ${v.etiqueta}`,
      banderas: ["Perú", r.pais],
      tituloHero: `${r.titulo}:`,
      tituloDestacado: v.etiqueta,
      descripcionHero: `Viaja con organización integral desde Lima: boletos aéreos confirmados, hoteles seleccionados, alimentación, traslados privados, seguro médico y coordinación paso a paso.`,
      negritaHero: "Beneficios especiales para parroquias, sacerdotes/pastores, quinceañeras, novios y familias.",
      destinoOPais: r.pais,
      precioBase: r.precioBase,
      etiquetaVitrina: r.titulo,
      duracionOServicio: `${v.etiqueta} · Cityland Travel`,
      fotos,
      checksBase: [
        "Boleto aéreo ida y vuelta desde Lima con impuestos y equipaje incluido",
        "Alojamiento en hoteles seleccionados con desayunos y comidas según programa",
        "Traslados en bus privado climatizado, guías en español y seguro médico",
      ],
      checksPlus: [
        "Liberados gratuitos para el director espiritual, sacerdote, pastor o coordinador",
        "Atención especial en habitación para novios (Luna de Miel) o quinceañeras",
        "Facilidad de pago: separa con el 50% y abona en cuotas mensuales",
      ],
      checksVip: [
        "Acompañamiento desde el Aeropuerto Jorge Chávez de Lima",
        "Reunión informativa previa al viaje en nuestra oficina de Los Olivos",
        "Agencia formal registrada RUC 20614914239 con soporte 24/7",
      ],
      tituloCard1: `Modalidad Preventa — ${r.titulo}`,
      subCard1: "Separa hoy con el 50% de inicial",
      precioCard1: Math.round(r.precioBase * 0.94),
      tagCard1: "Preventa 2026",
      tituloCard2: `Programa Oficial Completo — ${r.titulo}`,
      subCard2: "Vuelos + Hoteles + Visitas + Seguro",
      precioCard2: r.precioBase,
      tagCard2: "Programa Oficial",
      tituloCard3: `Edición VIP / Grupos (10+ Pasajeros)`,
      subCard3: "Incluye beneficios exclusivos y liberados",
      precioCard3: Math.round(r.precioBase * 1.15),
      tagCard3: "VIP / Grupos",
      keywords: [
        r.titulo.toLowerCase(),
        "peregrinaciones desde lima peru",
        "viajes de quinceaneras y luna de miel lima",
      ],
      faqs: [
        {
          q: `¿Qué beneficios ofrecen para grupos en ${r.titulo}?`,
          a: `Ofrecemos tarifas grupales congeladas en cuotas, cupos liberados gratuitos para el coordinador o guía espiritual de la parroquia/grupo, y atención personalizada en Lima.`,
        },
      ],
    })
  );
});

// ============================================================================
// EXPORTACIÓN UNIFICADA DE LAS 1,020 NUEVAS LANDINGS COMERCIALES
// (220 + 150 + 120 + 130 + 130 + 90 + 90 + 90 = 1,020 Landings)
// ============================================================================
export const MIL_LANDINGS_COMERCIALES_SEO: LandingComercialSEO[] = [
  ...LANDINGS_CLUSTER_1,
  ...LANDINGS_CLUSTER_2,
  ...LANDINGS_CLUSTER_3,
  ...LANDINGS_CLUSTER_4,
  ...LANDINGS_CLUSTER_5,
  ...LANDINGS_CLUSTER_6,
  ...LANDINGS_CLUSTER_7,
  ...LANDINGS_CLUSTER_8,
];

const MAPA_LANDINGS_COMERCIALES = new Map<string, LandingComercialSEO>(
  MIL_LANDINGS_COMERCIALES_SEO.map((item) => [item.slug, item])
);

export function buscarLandingComercial(slug: string): LandingComercialSEO | undefined {
  return MAPA_LANDINGS_COMERCIALES.get(slug);
}
