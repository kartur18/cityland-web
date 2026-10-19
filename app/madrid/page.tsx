import type { Metadata } from "next";
import MadridMigratorioTemplate, {
  type DatosLandingMadridSEO,
} from "@/components/MadridMigratorioTemplate";
import { INDICE_MADRID_10K } from "@/lib/catalogo-madrid-10k";
import {
  URL_BASE_SEO,
  SCHEMA_ORGANIZACION_CITYLAND,
} from "@/lib/seo-arquitectura";

export const metadata: Metadata = {
  title:
    "Paquetes Migratorios a Madrid desde Lima ($699 · $799 · $899 · $999) | Cityland Travel",
  description:
    "Especialistas en Perú en Paquetes Migratorios a Madrid-Barajas (T4/T1) desde $699 USD (separa con $350): Pasaje de avión de ida + Boleto de regreso reservado para Migraciones + Reserva de Hotel + Seguro Schengen 30.000€ + Check-in 24h antes.",
  keywords: [
    "paquete migratorio a madrid desde lima",
    "paquete migratorio madrid 699",
    "paquete migratorio madrid 799",
    "viajar a madrid por primera vez desde peru",
    "reserva de retorno y hotel para madrid barajas",
    "carpeta migratoria para viajar a espana",
    "pasajes a madrid con carta de invitacion",
  ],
  alternates: {
    canonical: `${URL_BASE_SEO}/madrid`,
  },
};

const DATOS_HUB_MADRID: DatosLandingMadridSEO = {
  slug: "",
  silo: "hub-madrid",
  siloNombre: "Central Especializada Madrid-Barajas",
  badgeSuperior: "+400 Emisiones Reales a Madrid · RUC 20614914239",
  codigoRuta: "LIM → MAD",
  terminalBarajas: "Terminal T4 y T1 Madrid-Barajas",
  aerolineaDestacada: "Iberia · Air Europa · Plus Ultra · LATAM",
  tituloPrincipal: "Paquetes Migratorios a Madrid",
  subtituloDorado: "5 Documentos Listos Desde $699 USD",
  resumenEjecutivo:
    "Viaja a Madrid con toda tu carpeta lista para presentar en Lima y en Madrid-Barajas sin pagar el doble por un pasaje de regreso cerrado que no vas a usar. Separa cualquiera de nuestros 4 planes con el 50% de inicial.",
  zonaOMunicipioMadrid: "Madrid (Barajas T4 / T1)",
  origenPasajero: "Lima y Todo el Perú",
  modalidadClave: "Paquete Migratorio Completo",
  precioDesdeUSD: 699,
  precioCarpetaSolaUSD: 85,
  precioIdaYVueltaUSD: 999,
  imagenHero: "/images/destinos/madrid.webp",
  imagenSecundaria: "/images/espana/plaza-mayor.jpg",
  metaTitle:
    "Paquetes Migratorios a Madrid desde Lima ($699 · $799 · $899 · $999) | Cityland Travel",
  metaDescription:
    "Paquetes migratorios a Madrid desde $699 USD con pasaje de avión de ida, boleto de regreso reservado para Migraciones, hotel verificable, seguro Schengen 30.000€ y check-in 24h antes.",
  keywords: [
    "paquete migratorio madrid",
    "paquete madrid 699",
    "carpeta migratoria espana",
  ],
  planesReales: [
    {
      etiqueta: "Temporada Promo",
      titulo: "Plan Promo",
      precioUSD: 699,
      subtitulo: "Fines de Febrero · Marzo · Abril · Mayo",
      incluye: [
        "Pasaje de avión de ida emitido (Lima → Madrid)",
        "Boleto de regreso reservado en sistema para Migraciones",
        "Reserva de hotel verificable en Madrid + Seguro 30.000€",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete a Madrid desde $699.",
    },
    {
      etiqueta: "★ El Más Pedido",
      titulo: "Plan Smart",
      precioUSD: 799,
      subtitulo: "Junio · Septiembre · Octubre · Noviembre",
      destacado: true,
      incluye: [
        "Pasaje de avión de ida + Boleto de regreso para Migraciones",
        "Reserva de hotel o cuadre con Carta de Invitación",
        "Seguro Schengen 30.000€ + Check-in 24h antes + Asesoría 1 a 1",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete Smart a Madrid desde $799.",
    },
    {
      etiqueta: "Salidas Cercanas",
      titulo: "Plan Plus",
      precioUSD: 899,
      subtitulo: "Enero · 1ra Quincena Feb · Conexiones",
      incluye: [
        "Pasaje de avión de ida + Boleto de regreso para Migraciones",
        "Conexión disponible a Barcelona, Valencia, Sevilla o Milán",
        "Reserva de hotel + Seguro Schengen 30.000€ + Check-in 24h antes",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete Plus a Madrid desde $899.",
    },
    {
      etiqueta: "Alta + Maleta 23 kg",
      titulo: "Plan Full 23 kg",
      precioUSD: 999,
      subtitulo: "Diciembre · Julio · Agosto · Bodega 23 kg",
      incluye: [
        "Pasaje de avión de ida + Maleta de 23 kg en bodega + 10 kg mano",
        "Boleto de regreso reservado en sistema para Migraciones",
        "Reserva de hotel en Madrid + Seguro Schengen 30.000€",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete Full a Madrid con maleta de 23 kg desde $999.",
    },
  ],
  pasosExpediente: [
    {
      paso: "01",
      titulo: "Evaluación de tu Modalidad",
      detalle:
        "Definimos si viajas con Reserva de Hotel verificable o con Carta de Invitación Policial.",
    },
    {
      paso: "02",
      titulo: "Separa tu Cupo con el 50%",
      detalle:
        "Separas desde $350 USD en nuestra oficina de Los Olivos o por cuentas empresa BCP, BBVA o Interbank.",
    },
    {
      paso: "03",
      titulo: "Armado de tus 5 Documentos",
      detalle:
        "Dejamos listo tu boleto de regreso para Migraciones, tu reserva de hotel y tu seguro Schengen 30.000€.",
    },
    {
      paso: "04",
      titulo: "Check-in 24h Antes",
      detalle:
        "Realizamos tu check-in 24h antes y te entregamos tu carpeta impresa y en PDF lista para viajar.",
    },
  ],
  checklistBarajas: [
    {
      requisito: "Boleto de Regreso Reservado para Migraciones",
      detalleOficial:
        "En Lima y en Madrid-Barajas (T4 y T1) piden acreditar fecha de retorno dentro de los 90 días.",
      comoTeAyudamos:
        "Incluimos tu boleto de regreso reservado en sistema el día de tu vuelo para cumplir el requisito sin pagar el doble.",
    },
    {
      requisito: "Reserva de Hotel o Carta de Invitación",
      detalleOficial:
        "Debes presentar reserva hotelera confirmada por tus días de viaje o Carta de Invitación Policial original.",
      comoTeAyudamos:
        "Emitimos tu reserva de hotel verificable en Madrid o cuadramos tus fechas exactas con tu Carta de Invitación.",
    },
    {
      requisito: "Bolsa de Viaje Oficial BOE 2026 (122,10 €/día)",
      detalleOficial:
        "España exige acreditar 122,10 € por día de estancia (con un mínimo de 1.098,90 € si tu viaje dura de 1 a 9 días).",
      comoTeAyudamos:
        "Armamos tu carpeta por 8 a 10 días para que acredites el monto mínimo legal sin inflar tu estadía.",
    },
    {
      requisito: "Seguro Médico Schengen 30.000€ sin Deducible",
      detalleOficial:
        "Póliza médica internacional con cobertura mínima de 30.000 euros, repatriación y 0€ de franquicia.",
      comoTeAyudamos:
        "Entregamos tu póliza oficial en español incluida dentro de tu paquete.",
    },
  ],
  faqs: [
    {
      q: "¿Qué incluye exactamente el Paquete Migratorio a Madrid desde $699 USD?",
      a: "Incluye los 5 documentos que piden en el aeropuerto: 1) Pasaje de avión de ida emitido (Lima → Madrid), 2) Boleto de regreso reservado en sistema para Migraciones, 3) Reserva de hotel confirmada en Madrid (o cuadre con tu Carta), 4) Seguro médico Schengen de 30.000€ y 5) Check-in hecho 24h antes.",
    },
    {
      q: "¿De qué depende el precio de $699, $799, $899 o $999 USD?",
      a: "Depende de tu fecha de viaje: Plan Promo ($699) para fines de febrero, marzo, abril y mayo; Plan Smart ($799) para junio, septiembre, octubre y noviembre; Plan Plus ($899) para salidas cercanas o conexiones; y Plan Full ($999) para temporada alta o con maleta de 23 kg en bodega.",
    },
    {
      q: "Ya compré mi pasaje a Madrid por mi cuenta, ¿venden solo la Carpeta Migratoria?",
      a: "Sí. Nuestro servicio de Solo Carpeta Migratoria (desde $85 USD) incluye tu boleto de regreso reservado en sistema para Migraciones, reserva de hotel verificable, seguro Schengen 30.000€ y check-in 24h antes.",
    },
    {
      q: "¿Dónde queda la oficina de Cityland Travel?",
      a: "Te atendemos en Av. Antúnez de Mayolo 814, Los Olivos (Lima) y por WhatsApp al +51 944 103 890 con contrato formal y RUC 20614914239.",
    },
  ],
  enlacesRelacionados: INDICE_MADRID_10K.slice(0, 8).map((it) => ({
    titulo: it.titulo,
    href: `/madrid/${it.slug}`,
    precio: it.precioDesdeUSD,
  })),
};

export default function MadridHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCHEMA_ORGANIZACION_CITYLAND),
        }}
      />
      <MadridMigratorioTemplate datos={DATOS_HUB_MADRID} />
    </>
  );
}
