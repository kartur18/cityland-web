import { Metadata } from "next";
import { optimizarMetaTitleSEO, optimizarMetaDescriptionSEO } from "@/lib/seo-arquitectura";
import AirlineLandingTemplate, {
  ConfiguracionLandingAerolinea,
} from "@/components/AirlineLandingTemplate";
import BloqueGuiaServicio from "@/components/BloqueGuiaServicio";
import { guiaQuinceaneras } from "@/lib/guias-servicios";

export const metadata: Metadata = {
  title: optimizarMetaTitleSEO("Viajes de quinceañeras: Disney, Europa y crucero | Cityland"),
  description: optimizarMetaDescriptionSEO("El regalo soñado de 15 años: programas exclusivos de Viajes de Quinceañeras a Europa y Disneyland París, Disney Orlando + Crucero Bahamas, Punta Cana y Cancún Todo Incluido saliendo de Lima con acompañamiento y seguridad total. Cityland Travel (RUC 20614914239)."),
  keywords: [
    "viajes de quinceaneras desde peru",
    "paquetes de 15 anos a europa y disney",
    "viaje de 15 anos a disney orlando y crucero",
    "viaje de quinceaneras punta cana cancun",
    "agencia de viajes para quinceaneras en lima",
  ],
  alternates: {
    canonical: "https://citylandtravel.com/quinceaneras",
  },
  openGraph: {
    type: "website",
    url: "https://citylandtravel.com/quinceaneras",
    title: "Viajes de Quinceañeras a Europa, Disney y Crucero — Cityland Travel",
    description:
      "Programas grupales y familiares de 15 años con vuelos desde Lima, parques Disney, cruceros Todo Incluido y circuitos por Europa.",
    siteName: "Cityland Travel",
    locale: "es_PE",
    images: ["https://citylandtravel.com/opengraph-image"],
  },
};

const CONFIG_QUINCEANERAS: ConfiguracionLandingAerolinea = {
  badgeHero: "Especial 15 Años · Programas Grupales y En Familia desde Lima",
  banderasHero: ["Francia", "España", "Estados Unidos", "México", "República Dominicana"],
  tituloHero: "El Viaje de 15 Años Soñado:",
  tituloDestacadoHero: "Europa, Disney, Crucero & Caribe",
  descripcionHero:
    "Cambia la fiesta de una noche por recuerdos para toda la vida. Organizamos viajes de Quinceañeras en grupo acompañado o en familia a Europa con Disneyland París, Orlando + Crucero a las Bahamas y Resorts Todo Incluido en el Caribe.",
  negritaHero: "Separa el cupo con el 50% de inicial y paga en cuotas programadas hasta antes del viaje",
  ctaPrincipalTexto: "Cotizar Viaje de 15 Años por WhatsApp",
  waPrincipalNumero: "51944103890",
  waPrincipalMensaje:
    "¡Hola Cityland Travel! Deseo información sobre los paquetes de Viaje de Quinceañeras (15 Años) saliendo desde Lima.",
  checksHero: [
    "Opciones en Grupo Acompañado o Viaje Familiar",
    "Vuelos, hoteles 4★/5★, entradas a parques y seguro médico",
    "Autorizaciones de viaje de menor y asesoría completa",
  ],
  vitrina: {
    pais: "Francia",
    etiquetaIzq: "EuroQuince · 15 Días / 14 Noches",
    etiquetaDer: "Incluye Disneyland París",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
    alt: "Viaje de Quinceañeras a Europa y Disneyland París desde Lima",
    sobretitulo: "Madrid + París + Disneyland París + Venecia + Florencia + Roma",
    titulo: "Quinceañeras en Europa Mágica 15 Días",
    labelPrecio: "Programa completo todo organizado",
    precio: "$2,690",
    moneda: "USD",
    notaInferior: "Sin Visa Schengen · Incluye vuelos y entradas Disney",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Quiero recibir el programa de Quinceañeras en Europa Mágica + Disneyland París ($2,690 USD).",
  },
  seccionCatalogo: {
    sobretitulo: "Programas Especiales de 15 Años",
    titulo: "Elige el Destino para Celebrar sus 15 Años",
    filtros: [
      { id: "todos", label: "Todos los Programas" },
      { id: "europa", label: "Europa & Disney París" },
      { id: "disney", label: "Orlando & Cruceros" },
      { id: "caribe", label: "Caribe Todo Incluido" },
    ],
  },
  items: [
    {
      id: "quince-europa-disney-15d",
      titulo: "EuroQuince: Madrid, París, Disneyland París & Italia",
      pais: "Europa",
      filtro: "europa",
      subtitulo: "15 Días / 14 Noches · Sin Visa Consular",
      precioPrincipal: "$2,690",
      precioSecundario: "USD",
      notaPrecio: "Incluye entradas a Disneyland París",
      tag: "El Más Soñado",
      tagBg: "bg-pink-600 text-white",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
      alt: "Viaje de 15 años a Europa y Disneyland París",
      resumenCorto:
        "Recorre Madrid, Barcelona, París con día completo en Disneyland París, crucero por el Sena, Venecia, Florencia y Roma con seguro Schengen 30.000€.",
      checks: ["Vuelos Lima – Europa – Lima", "Entradas a Disneyland París y Torre Eiffel", "Hoteles, desayunos, traslados y seguro 30.000€"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero información del paquete EuroQuince (Europa + Disneyland París).",
    },
    {
      id: "quince-orlando-crucero-bahamas",
      titulo: "Quinceañeras en Disney Orlando + Crucero Bahamas",
      pais: "Estados Unidos",
      filtro: "disney",
      subtitulo: "10 Días / 9 Noches · Parques + Isla Privada CocoCay",
      precioPrincipal: "$1,990",
      precioSecundario: "USD",
      notaPrecio: "Parques Disney/Universal + Crucero Royal Caribbean",
      tag: "Disney + Crucero",
      tagBg: "bg-purple-600 text-white",
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
      alt: "Viaje de 15 años a Disney Orlando y Crucero Bahamas",
      resumenCorto:
        "Combina la magia de los parques de Orlando (Magic Kingdom y Universal Studios), compras en outlets de Miami y 3 noches de crucero a las Bahamas.",
      checks: ["Vuelos Lima – Miami/Orlando – Lima", "Estadía en Orlando + Entradas a Parques", "Crucero Todo Incluido a Bahamas y CocoCay"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero información del paquete Quinceañeras Disney Orlando + Crucero Bahamas.",
    },
    {
      id: "quince-crucero-caribe-sin-visa",
      titulo: "Crucero de 15 Años por el Caribe Sin Visa USA",
      pais: "Panamá",
      filtro: "disney",
      subtitulo: "8 Días / 7 Noches · Panamá, Cartagena, Aruba y Curazao",
      precioPrincipal: "$1,290",
      precioSecundario: "USD",
      notaPrecio: "No requiere Visa Americana",
      tag: "Crucero Sin Visa",
      tagBg: "bg-sky-600 text-white",
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85",
      alt: "Crucero de 15 años por el Caribe sin visa",
      resumenCorto:
        "Celebra sus 15 años a bordo de un crucero Todo Incluido visitando Panamá, Cartagena, Curazao, Bonaire y Aruba con cenas de gala y shows diarios.",
      checks: ["Vuelos desde Lima incluidos", "7 Noches de Crucero Pensión Completa", "Cena especial de celebración de 15 años a bordo"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar el Crucero de 15 Años por el Caribe Sin Visa.",
    },
    {
      id: "quince-cancun-xcaret",
      titulo: "Quinceañeras en Cancún + Parque Xcaret Todo Incluido",
      pais: "México",
      filtro: "caribe",
      subtitulo: "6 Días / 5 Noches · Resort 5★ Frente al Mar",
      precioPrincipal: "$1,190",
      precioSecundario: "USD",
      notaPrecio: "Incluye entrada completa a Xcaret",
      tag: "Caribe & Parques",
      tagBg: "bg-emerald-600 text-white",
      img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1200&q=85",
      alt: "Viaje de 15 años a Cancún y Xcaret",
      resumenCorto:
        "Resort 5 estrellas Todo Incluido 24h en la Zona Hotelera de Cancún + día completo en el parque eco-arqueológico Xcaret e Isla Mujeres.",
      checks: ["Vuelos Lima – Cancún – Lima", "Resort 5★ Todo Incluido 24h", "Entrada a Xcaret + Paseo en Catamarán"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar el viaje de 15 años a Cancún + Xcaret.",
    },
    {
      id: "quince-punta-cana-familiar",
      titulo: "Quinceañeras en Punta Cana Resort 5★ All Inclusive",
      pais: "República Dominicana",
      filtro: "caribe",
      subtitulo: "5 Días / 4 Noches · Sin Visa para Peruanos",
      precioPrincipal: "$1,049",
      precioSecundario: "USD",
      notaPrecio: "Ideal para viajar con toda la familia",
      tag: "Sin Visa",
      tagBg: "bg-amber-600 text-white",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85",
      alt: "Viaje de 15 años en familia a Punta Cana",
      resumenCorto:
        "Celebra sus 15 años en familia en las playas de Bávaro con resort 5★ Todo Incluido, parque acuático, excursión a Isla Saona y sesión de fotos.",
      checks: ["Vuelos desde Lima + Traslados", "Resort 5★ Todo Incluido 24h", "Excursión en Catamarán a Isla Saona"],
      waNumber: "51944103890",
      waMensaje: "¡Hola Cityland Travel! Quiero cotizar el viaje de 15 años a Punta Cana en familia.",
    },
  ],
  pilares: [
    {
      titulo: "Seguridad Total",
      sub: "Seguro médico internacional y hoteles verificados",
    },
    {
      titulo: "En Grupo o En Familia",
      sub: "Puedes inscribir a tu hija en salida grupal o viajar juntos toda la familia",
    },
    {
      titulo: "Asesoría Notarial",
      sub: "Te guiamos paso a paso con el permiso notarial de viaje de menor",
    },
    {
      titulo: "Pagos Programados",
      sub: "Congela el precio con el 50% y programa tus abonos en oficina o banco",
    },
  ],
  bannerFinal: {
    sobretitulo: "Reuniones Informativas para Padres de Familia",
    titulo: "¿Quieres recibir el brochure de Quinceañeras 2026 / 2027?",
    descripcion:
      "Atendemos a los padres de familia en nuestra sede de Los Olivos (Av. Antúnez de Mayolo 814) o por videollamada para explicarte cada detalle del itinerario, seguridad y facilidades de pago.",
    ctaTexto: "Solicitar Brochure por WhatsApp",
    waNumero: "51944103890",
    waMensaje:
      "¡Hola Cityland Travel! Soy padre/madre de familia y deseo recibir el brochure de Viajes de Quinceañeras.",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
    alt: "Viajes de Quinceañeras desde Perú — Cityland Travel",
  },
  waFlotante: {
    numero: "51944103890",
    mensaje: "¡Hola Cityland Travel! Quiero información sobre los Viajes de Quinceañeras.",
    texto: "Viajes de 15 Años",
  },
};

export default function QuinceanerasPage() {
  return (
    <AirlineLandingTemplate config={CONFIG_QUINCEANERAS}>
      <BloqueGuiaServicio
        guia={guiaQuinceaneras(Object.fromEntries(CONFIG_QUINCEANERAS.items.map((i) => [i.id, i.precioPrincipal])))}
      />
    </AirlineLandingTemplate>
  );
}
