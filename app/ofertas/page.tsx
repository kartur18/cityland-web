import type { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";
import BuscadorCatalogoInstantaneo from "@/components/BuscadorCatalogoInstantaneo";
import { INDICE_PAQUETES_MIGRATORIOS_1000 } from "@/lib/catalogo-paquetes-migratorios-1000";
import { formatoUSD } from "@/lib/formato-precio";
import { inicialSeparacion, tarifasMigratorio } from "@/lib/precios-migratorio";

const TARIFAS_ITALIA = tarifasMigratorio("Italia");

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Ofertas de Viajes, Paquetes Migratorios solo ida desde $699 y Caribe | Cityland Travel"),
  description: optimizarMetaDescriptionSEO("Descubre nuestras ofertas vigentes en paquetes migratorios a España, Italia y Francia desde $699 USD (solo ida), resorts All Inclusive en el Caribe, cruceros sin visa y Cusco."),
  alternates: {
    canonical: "https://citylandtravel.com/ofertas",
  },
};

const CONFIG_OFERTAS: ConfiguracionLandingAerolinea = {
  badgeHero: "Catálogo Comercial Oficial · RUC 20614914239 · Atención en Los Olivos",
  banderasHero: ["España", "Italia", "Francia", "República Dominicana", "Perú"],
  tituloHero: "Catálogo de Ofertas de",
  tituloDestacadoHero: "Paquetes a Europa, Caribe y Perú",
  descripcionHero:
    "Explora nuestras ofertas organizadas por prioridad comercial: paquetes migratorios a España, Italia y Francia desde $699 USD (solo ida), resorts All Inclusive en el Caribe y circuitos por el Perú.",
  negritaHero: "Separa hoy con el 50% de inicial y congela tu tarifa oficial",
  ctaPrincipalTexto: "Cotizar Oferta por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Estuve revisando el catálogo de Ofertas de Viajes en su web y quiero cotizar mi viaje.",
  checksHero: [
    "Paquetes Migratorios a Europa (solo ida): $699 · $799 · $899 · $999",
    "Separa con el 50% y congela tu tarifa",
    "Atención presencial en Los Olivos y por WhatsApp",
  ],
  vitrina: {
    pais: "España",
    etiquetaIzq: "Oferta #1 · Salidas desde Lima",
    etiquetaDer: "Carpeta Completa",
    img: "/images/espana/gran-via-metropolis.jpg",
    alt: "Oferta Paquete Migratorio a España y Europa desde $699 — Cityland Travel",
    sobretitulo: "Pasaje de Ida + Boleto de Regreso Reservado + Hotel + Seguro 30.000€",
    titulo: "Paquete Migratorio a España, Italia y Francia",
    labelPrecio: `Solo ida: España desde ${formatoUSD(tarifasMigratorio("España").promo)} · Italia y Francia desde ${formatoUSD(TARIFAS_ITALIA.promo)}`,
    precio: "$699",
    moneda: "USD",
    notaInferior: "Separa hoy con $350 (50% inicial)",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola! Quiero más información del paquete migratorio a Europa desde $699.",
  },
  seccionCatalogo: {
    sobretitulo: "Programas Destacados por Categoría",
    titulo: "Ofertas Más Cotizadas por Viajeros Peruanos",
    filtros: [
      { id: "todos", label: "Todas las Categorías" },
      { id: "europa", label: "España, Italia & Europa" },
      { id: "caribe", label: "Caribe & Cruceros" },
      { id: "peru", label: "Perú & Sudamérica" },
    ],
  },
  items: [
    {
      id: "oferta-espana-carpeta",
      titulo: "Paquete Migratorio a Madrid o Barcelona",
      pais: "España",
      filtro: "europa",
      subtitulo: "Planes de solo ida según tu fecha: $699 · $799 · $899 · $999",
      precioPrincipal: "$699",
      precioSecundario: "USD",
      notaPrecio: "Separa con $350 (50% inicial)",
      tag: "#1 Más Vendido",
      tagBg: "bg-red-600 text-white",
      img: "/images/espana/puerta-de-alcala.jpg",
      alt: "Oferta Madrid y Barcelona desde Lima",
      resumenCorto:
        "Incluye pasaje de avión de ida emitido, boleto de regreso reservado 24h antes para Migraciones, reserva de hotel confirmada, seguro Schengen de 30.000€ y check-in.",
      checks: [
        "Pasaje de ida + Retorno reservado",
        "Seguro médico Schengen 30.000€",
        "Reserva de hotel + Check-in 24h antes",
      ],
      waNumber: "51944103890",
      waMensaje: "¡Hola! Quiero más información del paquete migratorio a España desde $699.",
    },
    {
      id: "oferta-italia-migratorio",
      titulo: "Paquete Migratorio a Milán, Roma y Turín",
      pais: "Italia",
      filtro: "europa",
      subtitulo: `Planes de solo ida según tu fecha: ${formatoUSD(TARIFAS_ITALIA.promo)} · ${formatoUSD(TARIFAS_ITALIA.smart)} · ${formatoUSD(TARIFAS_ITALIA.plus)} · ${formatoUSD(TARIFAS_ITALIA.full)}`,
      precioPrincipal: formatoUSD(TARIFAS_ITALIA.promo),
      precioSecundario: "USD",
      notaPrecio: `Separa con ${formatoUSD(inicialSeparacion(TARIFAS_ITALIA.promo))} (50% inicial)`,
      tag: "Especial Italia",
      tagBg: "bg-emerald-600 text-white",
      img: "/images/destinos/milan.webp",
      alt: "Oferta Paquete Migratorio a Italia desde Lima",
      resumenCorto:
        "Vuelo hacia Milán, Roma, Turín, Florencia o Bolonia con retorno reservado en sistema, hotel confirmado o formato Dichiarazione di Ospitalità y seguro 30.000€.",
      checks: [
        "Pasaje de ida + Retorno reservado",
        "Hotel confirmado o guía Ospitalità 48h",
        "Seguro Schengen 30.000€ + Check-in",
      ],
      waNumber: "51944103890",
      waMensaje: `¡Hola! Quiero más información del paquete migratorio a Italia desde ${formatoUSD(TARIFAS_ITALIA.promo)}.`,
    },
    {
      id: "oferta-punta-cana-resorts",
      titulo: "Oferta Punta Cana Resort 5★ All Inclusive",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "5 Días / 4 Noches · Playa Bávaro Todo Incluido 24h",
      precioPrincipal: "$1,049",
      precioSecundario: "USD",
      notaPrecio: "Separa con $525 (50% inicial)",
      tag: "All Inclusive",
      tagBg: "bg-teal-600 text-white",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Oferta Punta Cana Todo Incluido",
      resumenCorto:
        "Vuelos Lima – Punta Cana – Lima, traslados y 4 noches en resorts RIU, Barceló, Iberostar o Majestic con comidas y bebidas ilimitadas.",
      checks: ["Vuelo ida y vuelta desde Lima", "Resort 5★ Todo Incluido 24h", "Traslados y asistencia médica"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Oferta Punta Cana Resort 5★ desde $1,049.",
    },
    {
      id: "oferta-crucero-caribe-sin-visa",
      titulo: "Oferta Crucero por el Caribe Sin Visa EE. UU.",
      pais: "Panamá",
      filtro: "caribe",
      subtitulo: "7 u 8 Días · Zarpe desde Colón (Panamá) o Cartagena",
      precioPrincipal: "$1,090",
      precioSecundario: "USD",
      notaPrecio: "Cabina con pensión completa a bordo",
      tag: "Sin Visa USA",
      tagBg: "bg-blue-600 text-white",
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
      alt: "Oferta Crucero por el Caribe sin visa",
      resumenCorto:
        "Navega por Aruba, Curazao, Bonaire, Cartagena y Panamá con alimentación completa, espectáculos y actividades a bordo sin requerir visa estadounidense.",
      checks: ["Sin requisito de visa EE. UU.", "Alimentación completa a bordo", "Asesoría de vuelos desde Lima"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar el Crucero por el Caribe sin visa desde $1,090.",
    },
    {
      id: "oferta-cartagena-san-andres",
      titulo: "Oferta Cartagena de Indias o San Andrés (Solo DNI)",
      pais: "Colombia",
      filtro: "peru",
      subtitulo: "5 Días / 4 Noches · Vuelos + Hotel + Tours",
      precioPrincipal: "$599",
      precioSecundario: "USD",
      notaPrecio: "Separa con $300 (50% inicial)",
      tag: "Solo con DNI",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1200&q=85",
      alt: "Oferta Cartagena y San Andrés desde Lima",
      resumenCorto:
        "Viaja al Caribe colombiano presentando únicamente tu DNI peruano vigente. Incluye vuelos desde Lima, alojamiento, traslados y paseo en lancha.",
      checks: ["Viaja solo con DNI peruano", "Vuelos + Hotel + Desayunos", "Excursión marítima incluida"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Oferta Cartagena / San Andrés desde $599.",
    },
    {
      id: "oferta-cusco-machu-picchu",
      titulo: "Oferta Cusco Imperial, Valle Sagrado y Machu Picchu",
      pais: "Perú",
      filtro: "peru",
      subtitulo: "4 Días / 3 Noches · Tren Turístico e Ingresos Confirmados",
      precioPrincipal: "$329",
      precioSecundario: "USD",
      notaPrecio: "Incluye Vuelos + Tren + Machu Picchu",
      tag: "Perú Imperdible",
      tagBg: "bg-rose-600 text-white",
      img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=85",
      alt: "Oferta Cusco y Machu Picchu desde Lima",
      resumenCorto:
        "Programa completo en Cusco con boletos aéreos desde Lima, hotel seleccionado, City Tour, Valle Sagrado y excursión a Machu Picchu en tren turístico.",
      checks: ["Vuelos Lima – Cusco – Lima", "Tren + Bus Consettur + Entrada", "Hoteles con desayuno y traslados"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Oferta Cusco y Machu Picchu desde $329.",
    },
  ],
  pilares: [
    {
      titulo: "Solo ida desde $699 USD",
      sub: "Paquetes migratorios completos a España, Italia y Francia según tu fecha",
    },
    {
      titulo: "Separa con 50%",
      sub: "Reserva tu espacio hoy y completa el pago antes de viajar",
    },
    {
      titulo: "Código PNR Real",
      sub: "Reservas aéreas y hoteleras verificables en línea",
    },
    {
      titulo: "RUC 20614914239",
      sub: "Agencia formal en Av. Antúnez de Mayolo 814, Los Olivos",
    },
  ],
  bannerFinal: {
    sobretitulo: "Cotización Inmediata",
    titulo: "¿Deseas personalizar cualquiera de nuestras ofertas?",
    descripcion:
      "Indícanos tu destino, fechas tentativas y número de viajeros al +51 944 103 890 para enviarte la cotización exacta en dólares o soles.",
    ctaTexto: "Cotizar por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Quiero personalizar una oferta de viaje para mis fechas.",
    img: "/images/espana/palacio-real.jpg",
    alt: "Catálogo de Ofertas Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Quiero consultar el catálogo de ofertas de viajes.",
    texto: "Cotizar Ofertas",
  },
};

export default function OfertasIndexPage() {
  const iniciales = INDICE_PAQUETES_MIGRATORIOS_1000.slice(0, 24).map((pm) => ({
    slug: `pm-${pm.slug}`,
    url: `/paquetes-migratorios/${pm.slug}`,
    titulo: pm.titulo,
    destinoOPais: `${pm.ciudadDestino}, ${pm.pais}`,
    cluster: "mundiales",
    clusterNombre: pm.siloNombre,
    precioDesdeUSD: pm.precioPromo,
    img: pm.imagenHero,
  }));

  return (
    <AirlineLandingTemplate config={CONFIG_OFERTAS}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <BuscadorCatalogoInstantaneo
          itemsIniciales={iniciales}
          totalInicial={31017}
        />
      </div>
    </AirlineLandingTemplate>
  );
}
