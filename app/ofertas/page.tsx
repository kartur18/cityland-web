import type { Metadata } from "next";
import Link from "next/link";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";
import BuscadorCatalogoInstantaneo from "@/components/BuscadorCatalogoInstantaneo";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export const metadata: Metadata = {
  title: "Ofertas de Viajes, Paquetes Todo Incluido, Cruceros y Visas | Cityland Travel",
  description:
    "Descubre nuestras ofertas vigentes en paquetes turísticos baratos y de lujo 5★, resorts All Inclusive, cruceros sin visa, trámites consulares, viajes corporativos y escolares.",
  alternates: {
    canonical: "https://citylandtravel.com/ofertas",
  },
};

const CONFIG_OFERTAS: ConfiguracionLandingAerolinea = {
  badgeHero: "Catálogo Comercial Oficial · +19,020 Programas Verificados (RUC 20614914239)",
  banderasHero: ["España", "Italia", "República Dominicana", "México", "Perú"],
  tituloHero: "Catálogo de Ofertas de",
  tituloDestacadoHero: "Paquetes, Cruceros, Hoteles 5★ y Servicios",
  descripcionHero:
    "Explora nuestras ofertas organizadas por destino, temporada y categoría de hotel: desde programas económicos y resorts All Inclusive hasta circuitos europeos, cruceros sin visa y trámites consulares.",
  negritaHero: "Reserva con el 50% de inicial y recibe código PNR verificable y comprobante electrónico SUNAT",
  ctaPrincipalTexto: "Cotizar Oferta por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Estuve revisando el catálogo de Ofertas de Viajes en su web y quiero cotizar mi viaje.",
  checksHero: [
    "Más de 19,020 opciones por destino, hotel y mes",
    "Separa con 50% y congela tu tarifa referencial",
    "Atención presencial en Los Olivos y por WhatsApp",
  ],
  vitrina: {
    pais: "España",
    etiquetaIzq: "Oferta Destacada · Salidas desde Lima",
    etiquetaDer: "Carpeta + Vuelo",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=85",
    alt: "Oferta Viaje a España y Europa desde Lima — Cityland Travel",
    sobretitulo: "Boleto Aéreo + Alojamiento Verificable + Seguro Schengen 30.000€",
    titulo: "Ofertas a Madrid, Barcelona y Circuitos por Europa",
    labelPrecio: "Tarifa referencial desde",
    precio: "$1,090",
    moneda: "USD",
    notaInferior: "Separa hoy con $545 (50% inicial)",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Me interesa cotizar las ofertas a España y Europa desde $1,090.",
  },
  seccionCatalogo: {
    sobretitulo: "Programas Destacados por Categoría",
    titulo: "Ofertas Más Cotizadas por Viajeros Peruanos",
    filtros: [
      { id: "todos", label: "Todas las Categorías" },
      { id: "europa", label: "España & Europa" },
      { id: "caribe", label: "Caribe & Cruceros" },
      { id: "peru", label: "Perú & Sudamérica" },
    ],
  },
  items: [
    {
      id: "oferta-espana-carpeta",
      titulo: "Oferta Madrid o Barcelona + Carpeta de Viaje",
      pais: "España",
      filtro: "europa",
      subtitulo: "Vuelo desde Lima + Reserva Verificable + Seguro 30.000€",
      precioPrincipal: "$1,090",
      precioSecundario: "USD",
      notaPrecio: "Separa con $545 (50% inicial)",
      tag: "Top España",
      tagBg: "bg-red-600 text-white",
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=85",
      alt: "Oferta Madrid y Barcelona desde Lima",
      resumenCorto:
        "Programa integral con boleto aéreo ida y vuelta, reserva hotelera verificada, seguro médico Schengen de 30.000€ sin deducible y preparación documentaria.",
      checks: ["Boleto aéreo con tasas", "Seguro Schengen 30.000€", "Reserva de hotel verificable"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Oferta a Madrid / Barcelona desde $1,090.",
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
      tagBg: "bg-emerald-600 text-white",
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
      id: "oferta-italia-europa-clasica",
      titulo: "Oferta Circuito España, Francia e Italia",
      pais: "Italia",
      filtro: "europa",
      subtitulo: "12 a 15 Días · Madrid, París, Venecia, Florencia y Roma",
      precioPrincipal: "$2,290",
      precioSecundario: "USD",
      notaPrecio: "Separa con 50% y paga en cuotas",
      tag: "Circuito Europeo",
      tagBg: "bg-purple-700 text-white",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85",
      alt: "Oferta Circuito España Francia e Italia",
      resumenCorto:
        "Recorrido europeo guiado en español con boletos aéreos desde Lima, hoteles con desayuno, traslados entre ciudades y seguro Schengen obligatorio.",
      checks: ["Vuelos desde Lima incluidos", "Guía en español + desayunos", "Seguro Schengen 30.000€"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar la Oferta Circuito Europeo desde $2,290.",
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
      titulo: "+9,020 Programas",
      sub: "Opciones por destino, categoría de hotel y ciudad de salida",
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
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
    alt: "Catálogo de Ofertas Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Quiero consultar el catálogo de ofertas de viajes.",
    texto: "Cotizar Ofertas",
  },
};

export default function OfertasIndexPage() {
  const iniciales = TODOS_LOS_RESUMENES_OFERTAS_SEO.slice(0, 24).map((o, idx) => {
    const galeria = obtenerGaleriaPorTexto(`${o.titulo} ${o.destinoOPais} ${o.slug}`);
    return {
      slug: o.slug,
      url: `/ofertas/${o.slug}`,
      titulo: o.titulo,
      destinoOPais: o.destinoOPais,
      cluster: o.cluster,
      clusterNombre: o.clusterNombre,
      precioDesdeUSD: o.precioDesdeUSD,
      img: galeria[idx % 3] || galeria[0],
    };
  });

  // 80 ofertas distribuidas uniformemente a lo largo de las 9,020 ofertas para indexación rápida
  const paso = Math.max(1, Math.floor(TODOS_LOS_RESUMENES_OFERTAS_SEO.length / 80));
  const muestraDistribuida = Array.from({ length: 80 }, (_, i) => {
    const idx = Math.min(TODOS_LOS_RESUMENES_OFERTAS_SEO.length - 1, i * paso);
    return TODOS_LOS_RESUMENES_OFERTAS_SEO[idx];
  });

  return (
    <AirlineLandingTemplate config={CONFIG_OFERTAS}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <BuscadorCatalogoInstantaneo
          itemsIniciales={iniciales}
          totalInicial={30017}
        />

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
                Índice Directo de Programas
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1628]">
                Selección de Ofertas por Destino, Temporada y Categoría
              </h2>
            </div>
            <Link
              href="/directorio"
              className="text-xs font-extrabold text-red-600 hover:underline"
            >
              Ver directorio completo de +30,000 páginas →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
            {muestraDistribuida.map((it) => (
              <Link
                key={it.slug}
                href={`/ofertas/${it.slug}`}
                className="flex items-center justify-between gap-2 bg-slate-50 hover:bg-red-50/70 px-3 py-2.5 rounded-xl border border-slate-200/70 transition-colors"
              >
                <span className="font-semibold text-slate-700 hover:text-red-600 leading-snug">
                  {it.titulo}
                </span>
                <span className="font-extrabold text-[#0a1628] shrink-0">
                  ${it.precioDesdeUSD}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AirlineLandingTemplate>
  );
}
