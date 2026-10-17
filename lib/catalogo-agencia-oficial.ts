import type { ConfiguracionLandingAerolinea, TarjetaCatalogoAerolinea } from "@/components/AirlineLandingTemplate";
import { TELEFONO } from "@/components/constantes";

export const PAQUETES_ESTRELLA_AGENCIA: TarjetaCatalogoAerolinea[] = [
  {
    id: "paquete-espana",
    titulo: "Paquete y Vuelo a Madrid (España)",
    pais: "España",
    filtro: "europa",
    subtitulo: "Vuelo Confirmado + Carpeta Migratoria Completa",
    precioPrincipal: "$890",
    precioSecundario: "$445",
    notaPrecio: "Separa con $445 USD (50% inicial)",
    tag: "Más Solicitado",
    tagBg: "bg-red-600 text-white",
    img: "/images/espana/gran-via-metropolis.jpg",
    alt: "Gran Vía de Madrid — Paquetes y vuelos a España con Cityland Travel",
    resumenCorto:
      "Pasaje aéreo con código PNR verificable, reserva de alojamiento, Seguro Schengen de 30.000€ y preparación personalizada para control migratorio en Barajas.",
    checks: ["Seguro Schengen 30.000€", "Equipaje 23 kg + 10 kg", "Asesoría Migratoria 1 a 1"],
    waNumber: TELEFONO,
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el Paquete y Vuelo a España (Desde $890 USD).",
  },
  {
    id: "paquete-punta-cana",
    titulo: "Punta Cana Resort 5★ Todo Incluido",
    pais: "República Dominicana",
    filtro: "caribe",
    subtitulo: "5 Días / 4 Noches · Playa Bávaro",
    precioPrincipal: "$1,099",
    precioSecundario: "$550",
    notaPrecio: "Separa con $550 USD (50% inicial)",
    tag: "Todo Incluido",
    tagBg: "bg-amber-400 text-slate-950",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
    alt: "Resort 5 estrellas en Punta Cana Todo Incluido",
    resumenCorto:
      "Boleto aéreo ida y vuelta desde Lima, 4 noches en resort 5★ frente al mar, comidas, cenas a la carta, bebidas ilimitadas y traslados aeropuerto-hotel.",
    checks: ["Vuelo + Resort 5★", "Bebidas y Buffet 24h", "Traslados Incluidos"],
    waNumber: TELEFONO,
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete Punta Cana 5D/4N Todo Incluido (Desde $1,099 USD).",
  },
  {
    id: "paquete-cancun",
    titulo: "Cancún & Riviera Maya Todo Incluido",
    pais: "México",
    filtro: "caribe",
    subtitulo: "5 Días / 4 Noches · Zona Hotelera",
    precioPrincipal: "$1,049",
    precioSecundario: "$525",
    notaPrecio: "Separa con $525 USD (50% inicial)",
    tag: "Playa &Familia",
    tagBg: "bg-sky-600 text-white",
    img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
    alt: "Playa turquesa en Cancún Zona Hotelera",
    resumenCorto:
      "Vuelos confirmados Lima – Cancún, estadía en resort Todo Incluido frente al mar Caribe, alimentación ilimitada, shows nocturnos y orientación de requisitos.",
    checks: ["Vuelo Directo Confirmado", "Resort Todo Incluido", "Asistencia 24/7"],
    waNumber: TELEFONO,
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete Cancún 5D/4N Todo Incluido (Desde $1,049 USD).",
  },
  {
    id: "paquete-cartagena",
    titulo: "Cartagena de Indias Todo Incluido",
    pais: "Colombia",
    filtro: "caribe",
    subtitulo: "4 Días / 3 Noches · Viaja Solo con DNI",
    precioPrincipal: "$699",
    precioSecundario: "$350",
    notaPrecio: "Separa con $350 USD (50% inicial)",
    tag: "Solo con DNI",
    tagBg: "bg-emerald-600 text-white",
    img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
    alt: "Centro Histórico de Cartagena de Indias, Colombia",
    resumenCorto:
      "Escapada al Caribe colombiano viajando únicamente con tu DNI vigente. Incluye boletos aéreos, hotel en Bocagrande o Isla Barú, traslados y alimentación.",
    checks: ["No Requiere Pasaporte", "Vuelo + Hotel + Traslados", "Excursión Islas del Rosario"],
    waNumber: TELEFONO,
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete Cartagena 4D/3N (Desde $699 USD).",
  },
  {
    id: "paquete-turquia",
    titulo: "Turquía Mágica: Estambul & Capadocia",
    pais: "Turquía",
    filtro: "europa",
    subtitulo: "10 Días / 9 Noches · Sin Visa para Peruanos",
    precioPrincipal: "$1,790",
    precioSecundario: "$895",
    notaPrecio: "Separa con $895 USD (50% inicial)",
    tag: "Sin Visa",
    tagBg: "bg-purple-600 text-white",
    img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=85",
    alt: "Globos aerostáticos en Capadocia, Turquía",
    resumenCorto:
      "Circuito guiado en español por Estambul, Ankara, Capadocia, Pamukkale y Éfeso con vuelos internacionales incluidos, hoteles seleccionados y media pensión.",
    checks: ["Vuelos Internacionales", "Hoteles + Guía en Español", "Ingreso Solo con Pasaporte"],
    waNumber: TELEFONO,
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el circuito Turquía Mágica 10 Días (Desde $1,790 USD).",
  },
  {
    id: "paquete-cusco",
    titulo: "Cusco, Valle Sagrado & Machu Picchu",
    pais: "Perú",
    filtro: "peru",
    subtitulo: "4 Días / 3 Noches · Tren Turístico Incluido",
    precioPrincipal: "$399",
    precioSecundario: "$200",
    notaPrecio: "Separa con $200 USD (50% inicial)",
    tag: "Perú Imperdible",
    tagBg: "bg-red-600 text-white",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=85",
    alt: "Ciudadela de Machu Picchu en Cusco, Perú",
    resumenCorto:
      "Paquete completo con vuelos Lima – Cusco, hotel con desayunos, City Tour, Valle Sagrado, tren turístico Expedition/Vistadome e ingreso oficial a Machu Picchu.",
    checks: ["Vuelo + Hotel 3★/4★", "Tren + Entrada Machu Picchu", "Traslados y Guía Oficial"],
    waNumber: TELEFONO,
    waMensaje:
      "¡Hola Cityland Travel! Deseo cotizar el paquete Cusco & Machu Picchu 4D/3N (Desde $399 USD).",
  },
];

export function obtenerConfigAgenciaOficial(referenciaZona?: string): ConfiguracionLandingAerolinea {
  const mencionZona = referenciaZona
    ? `Atendemos de forma presencial en nuestra sede principal de Los Olivos (Av. Antúnez de Mayolo 814) y por videollamada o WhatsApp para pasajeros de ${referenciaZona}, con emisión inmediata de boletos y contrato formal.`
    : "Atendemos de forma presencial en nuestra sede principal de Los Olivos (Av. Antúnez de Mayolo 814, Lima) y de manera digital para todo el Perú, con emisión inmediata de boletos y contrato formal.";

  return {
    badgeHero: "Agencia de Viajes Formal · RUC 20614914239",
    banderasHero: ["Perú", "España", "República Dominicana", "México"],
    tituloHero: "Viaja con Respaldo y Tarifas Oficiales:",
    tituloDestacadoHero: "Vuelos, Caribe Todo Incluido y Europa",
    descripcionHero: mencionZona,
    negritaHero:
      "Separa tu paquete o vuelo hoy con el 50% de inicial y paga el saldo en cuotas antes de viajar.",
    ctaPrincipalTexto: "Cotizar mi Viaje por WhatsApp",
    waPrincipalNumero: TELEFONO,
    waPrincipalMensaje:
      "¡Hola Cityland Travel! Vi su página web y deseo recibir una cotización personalizada de viaje.",
    checksHero: [
      "Oficina Física en Lima (RUC 20614914239)",
      "Código de Reserva Aéreo Verificable (PNR)",
      "Boleta, Factura y Contrato de Viaje",
    ],

    vitrina: {
      pais: "República Dominicana",
      etiquetaIzq: "Punta Cana · 5D / 4N",
      etiquetaDer: "Todo Incluido 5★",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Resort 5 estrellas en Punta Cana Todo Incluido — Cityland Travel",
      sobretitulo: "Paquete Estrella Temporada 2026",
      titulo: "Punta Cana Resort 5★ Todo Incluido (Vuelo + Hotel + Traslados)",
      labelPrecio: "Tarifa por pasajero",
      precio: "$1,099",
      moneda: "USD",
      notaInferior: "Separa hoy con $550 USD (50% inicial) · Cupos confirmados",
      waNumero: TELEFONO,
      waMensaje:
        "¡Hola Cityland Travel! Deseo cotizar el paquete estrella a Punta Cana Resort 5★ Todo Incluido desde $1,099 USD.",
    },

    seccionCatalogo: {
      sobretitulo: "Catálogo Oficial Cityland Travel 2026",
      titulo: "Paquetes Turísticos y Vuelos Más Solicitados",
      filtros: [
        { id: "todos", label: "Todos los Destinos (6)" },
        { id: "caribe", label: "Caribe Todo Incluido (3)" },
        { id: "europa", label: "España, Europa & Turquía (2)" },
        { id: "peru", label: "Perú & Machu Picchu (1)" },
      ],
    },

    items: PAQUETES_ESTRELLA_AGENCIA,

    pilares: [
      {
        titulo: "Agencia Registrada (RUC 20614914239)",
        sub: "Cityland Travel E.I.R.L. · Oficina en Av. Antúnez de Mayolo 814, Los Olivos.",
      },
      {
        titulo: "Separa con el 50% de Inicial",
        sub: "Congela tu tarifa aérea o hotelera hoy y abona el saldo en cuotas sin intereses.",
      },
      {
        titulo: "Pagos 100% Seguros en Soles o Dólares",
        sub: "Cuentas corporativas BCP, BBVA, Interbank, Yape, Plin y tarjetas Visa/Mastercard.",
      },
      {
        titulo: "Soporte y Acompañamiento 24/7",
        sub: "Check-in, selección de asientos, seguros Schengen y asistencia durante todo tu viaje.",
      },
    ],

    bannerFinal: {
      sobretitulo: "Sede Central & Atención Nacional",
      titulo: "Visítanos en Nuestra Oficina o Cotiza en 2 Minutos por WhatsApp",
      descripcion:
        "Te esperamos de Lunes a Sábado de 9:00 AM a 7:00 PM en Av. Antúnez de Mayolo N. 814, Los Olivos (a 2 cuadras de la Municipalidad), o agenda una atención inmediata con nuestras asesoras de viaje.",
      ctaTexto: "Hablar con una Asesora Ahora",
      waNumero: TELEFONO,
      waMensaje:
        "¡Hola Cityland Travel! Deseo recibir atención de una asesora para cotizar mi próximo viaje.",
      img: "/images/oficina-exterior.png",
      alt: "Oficina Principal de Cityland Travel en Lima",
    },

    waFlotante: {
      numero: TELEFONO,
      texto: "Cotizar por WhatsApp",
      mensaje:
        "¡Hola Cityland Travel! Vi su página web y deseo cotizar un viaje.",
    },
  };
}
