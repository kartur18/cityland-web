import type { Metadata } from "next";
import Link from "next/link";
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
    "Especialistas #1 en Perú en Paquetes Migratorios a Madrid-Barajas (T4/T1) desde $699 USD (separa con $350): Pasaje de avión de ida + Boleto de regreso reservado para Migraciones + Reserva de Hotel + Seguro Schengen 30.000€ + Check-in 24h antes.",
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
  tituloPrincipal: "Paquetes Migratorios a Madrid:",
  subtituloDorado: "5 Documentos Listos Desde $699 USD",
  resumenEjecutivo:
    "Si viajas a Madrid para quedarte, no tiene sentido pagar $1,500 por un avión de regreso al que no te vas a subir. Tu Paquete Migratorio incluye los 5 documentos que te piden en el aeropuerto: tu pasaje de avión de ida emitido, tu boleto de regreso reservado en sistema para Migraciones, tu reserva de hotel confirmada (o cuadre con tu Carta de Invitación), tu seguro médico Schengen de 30.000€ y tu check-in hecho 24h antes.",
  zonaOMunicipioMadrid: "Madrid (Barajas T4 / T1)",
  origenPasajero: "Lima y Todo el Perú",
  modalidadClave: "Paquete Migratorio Completo",
  precioDesdeUSD: 699,
  precioCarpetaSolaUSD: 75,
  precioIdaYVueltaUSD: 999,
  imagenHero:
    "/images/destinos/madrid.webp",
  imagenSecundaria:
    "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=85",
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
      etiqueta: "Plan Promo · Separa con $350",
      titulo: "Plan Promo Paquete Migratorio Madrid ($699)",
      precioUSD: 699,
      subtitulo: "Salidas fines de Febrero, Marzo, Abril y Mayo",
      incluye: [
        "Pasaje de avión de ida emitido (Lima → Madrid)",
        "Boleto de regreso reservado en sistema para Migraciones",
        "Reserva de hotel verificable en Madrid (o cuadre con Carta)",
        "Seguro médico Schengen 30.000€ + Check-in 24h antes",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete a Madrid desde $699.",
    },
    {
      etiqueta: "★ El Más Pedido · Separa con $400",
      titulo: "Plan Smart Paquete Migratorio Madrid ($799)",
      precioUSD: 799,
      subtitulo: "Salidas Junio, Septiembre, Octubre y Noviembre + Asesoría VIP",
      destacado: true,
      incluye: [
        "Pasaje de avión de ida emitido + Boleto de regreso para Migraciones",
        "Reserva de hotel confirmada o sincronización con Carta de Invitación",
        "Seguro médico Schengen oficial de 30.000€ sin franquicia",
        "Check-in 24h antes, elección de asiento y preparación 1 a 1",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete Smart a Madrid desde $799.",
    },
    {
      etiqueta: "Salidas Cercanas · Separa con $450",
      titulo: "Plan Plus Paquete Migratorio Madrid ($899)",
      precioUSD: 899,
      subtitulo: "Salidas Enero, 1ra quincena Febrero o conexión a otra ciudad",
      incluye: [
        "Pasaje de avión de ida + Boleto de regreso reservado para Migraciones",
        "Conexión disponible a Barcelona, Valencia, Sevilla, Milán o París",
        "Reserva de hotel + Seguro Schengen 30.000€ + Check-in 24h antes",
        "Preparación personalizada de preguntas de Migraciones",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete Plus a Madrid desde $899.",
    },
    {
      etiqueta: "Temporada Alta / 23 kg · Separa con $500",
      titulo: "Plan Full Madrid con Maleta 23 kg ($999)",
      precioUSD: 999,
      subtitulo: "Salidas Diciembre, Julio, Agosto o incluye maleta de 23 kg en bodega",
      incluye: [
        "Pasaje de avión de ida + Maleta de 23 kg en bodega + 10 kg en mano",
        "Boleto de regreso reservado en sistema para Migraciones",
        "Reserva de hotel en Madrid + Seguro Schengen 30.000€",
        "Separa hoy con el 50% ($500 USD) y paga en cuotas antes de viajar",
      ],
      waMensaje:
        "¡Hola! Quiero más información del paquete Full a Madrid con maleta de 23 kg desde $999.",
    },
  ],
  pasosExpediente: [
    {
      paso: "01",
      titulo: "Evaluación de tu Modalidad de Ingreso",
      detalle:
        "Definimos si viajas con Reserva de Hotel verificable o con Carta de Invitación Policial, y calculamos los días exactos según tu bolsa de viaje BOE.",
    },
    {
      paso: "02",
      titulo: "Emisión de tu Pasaje de Avión de Ida (Separa con 50%)",
      detalle:
        "Emitimos tu pasaje con Iberia, Air Europa, Plus Ultra o LATAM (puedes separar desde $350 USD en oficina de Los Olivos o cuentas empresa BCP/BBVA/Interbank).",
    },
    {
      paso: "03",
      titulo: "Boleto de Regreso para Migraciones + Hotel + Seguro",
      detalle:
        "Dejamos activo en sistema tu boleto de regreso para el control migratorio el día de tu viaje, junto con tu reserva de hotel y seguro Schengen 30.000€.",
    },
    {
      paso: "04",
      titulo: "Check-in 24h Antes y Entrega de Carpeta Lista",
      detalle:
        "Tu asesor realiza tu check-in 24h antes, elige tu asiento y te entrega tu carpeta impresa/PDF lista para presentar en el Jorge Chávez y en Madrid-Barajas.",
    },
  ],
  checklistBarajas: [
    {
      requisito: "Boleto de Regreso Activo para Migraciones (MAD → LIM)",
      detalleOficial:
        "En el mostrador de Lima y en el control de Madrid-Barajas (T4 y T1) exigen acreditar fecha de salida del Espacio Schengen dentro de los 90 días.",
      comoTeAyudamos:
        "Tu Paquete Migratorio (desde $699 USD) incluye tu boleto de regreso reservado en sistema el día de tu viaje para cumplir al 100% con el requisito sin pagar el doble.",
    },
    {
      requisito: "Hospedaje Verificable en Madrid o Carta de Invitación",
      detalleOficial:
        "Debes presentar reserva hotelera vigente por todas las noches de tu estancia o el original de la Carta de Invitación tramitada en Comisaría en España.",
      comoTeAyudamos:
        "Emitimos tu reserva de hotel verificable en Madrid alineada exactamente a tus fechas de vuelo, o ajustamos tu itinerario a los días de tu Carta de Invitación.",
    },
    {
      requisito: "Bolsa de Viaje Oficial BOE 2026 (122,10 €/día)",
      detalleOficial:
        "España exige demostrar 122,10 € por día de estancia, con un mínimo obligatorio de 1.098,90 € por pasajero (para viajes de 1 a 9 días).",
      comoTeAyudamos:
        "Calibramos la duración de tu reserva de retorno y hotel (por ejemplo 9 a 11 días) para que guarde coherencia exacta con tu bolsa de viaje.",
    },
    {
      requisito: "Seguro Médico Schengen 30.000€ sin Franquicia",
      detalleOficial:
        "Póliza médica internacional con cobertura mínima de 30.000 euros, repatriación y 0€ de deducible durante toda la estadía.",
      comoTeAyudamos:
        "Entregamos tu póliza oficial en español lista para verificación inmediata.",
    },
  ],
  faqs: [
    {
      q: "¿Qué incluye exactamente el Paquete Migratorio a Madrid desde $869 USD?",
      a: "Incluye tu boleto aéreo de ingreso (LIM → MAD), la reserva de retorno activa en sistema (MAD → LIM 24h antes), la reserva de hotel verificable en Madrid por los días declarados, el seguro médico Schengen de 30.000€ sin deducible y el check-in realizado directamente por tu asesor de Cityland Travel.",
    },
    {
      q: "Ya compré mi pasaje a Madrid por internet, ¿pueden venderme solo la Carpeta Migratoria?",
      a: "Sí, por supuesto. Nuestro plan de Solo Carpeta Migratoria Express (desde $75 USD) está diseñado para pasajeros que ya tienen su boleto y necesitan la reserva de retorno activa (RF), el voucher de hotel verificable en Madrid, el seguro Schengen y el check-in hecho por un asesor experto.",
    },
    {
      q: "¿Dónde queda la oficina de Cityland Travel para recoger mi carpeta impresa?",
      a: "Te atendemos presencialmente en Av. Antúnez de Mayolo 814, Los Olivos, Lima, y también de forma 100% digital por WhatsApp al +51 944 103 890 con emisión de Boleta o Factura Electrónica SUNAT (RUC 20614914239).",
    },
  ],
  enlacesRelacionados: INDICE_MADRID_10K.slice(0, 16).map((it) => ({
    titulo: it.titulo,
    href: `/madrid/${it.slug}`,
    precio: it.precioDesdeUSD,
  })),
};

const SILOS_DIRECTORIO = [
  {
    id: "barajas-rutas",
    nombre: "1. Rutas y Modalidades Madrid-Barajas desde Lima (2,500 páginas)",
    sub: "Zonas de Madrid y conexiones por España con Iberia T4, Air Europa T1, Plus Ultra y LATAM saliendo del Jorge Chávez (LIM)",
  },
  {
    id: "estadias-boe-madrid",
    nombre: "2. Planes por Días de Estadía y Bolsa de Viaje BOE 2026 (2,400 páginas)",
    sub: "Itinerarios de 7 a 90 días calibrados al requisito económico BOE (122,10 €/día) desde el Aeropuerto Jorge Chávez (LIM)",
  },
  {
    id: "rutas-espana-barajas",
    nombre: "3. Rutas y Circuitos por España y Europa vía Madrid por Mes (2,160 páginas)",
    sub: "Madrid + Barcelona, Valencia, Sevilla, Bilbao, Roma, Milán, París y Lisboa saliendo de Lima (LIM)",
  },
  {
    id: "comunidad-peruana-madrid",
    nombre: "4. Barrios y Municipios de Madrid con Comunidad Peruana (1,500 páginas)",
    sub: "Puente de Vallecas, Carabanchel, Usera, Ciudad Lineal, Alcalá de Henares, Móstoles, Getafe y más",
  },
  {
    id: "expediente-servicios-madrid",
    nombre: "5. Servicios Migratorios, Retorno RF, Hotel, Maletas y Seguros (1,440 páginas)",
    sub: "Solo carpeta migratoria, reserva de retorno 24h, hotel verificable, 2da maleta 23 kg y retornos MAD → LIM",
  },
];

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

      {/* Directorio de los 5 Silos de 10,000 páginas de /madrid/[slug] */}
      <section className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
              Arquitectura Especializada · 10,000 Páginas Exclusivas de Madrid
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Directorio Maestro de Paquetes Migratorios, Estadías BOE y Rutas a Madrid
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Explora nuestras 10,000 páginas especializadas saliendo del Aeropuerto Internacional Jorge Chávez (LIM) hacia Madrid-Barajas por días de estadía, cálculo de bolsa de viaje BOE 2026, barrios de Madrid, aerolínea y modalidad migratoria.
            </p>
          </div>

          <div className="space-y-6">
            {SILOS_DIRECTORIO.map((silo) => {
              const itemsSilo = INDICE_MADRID_10K.filter((x) => x.silo === silo.id);
              const paso = Math.max(1, Math.floor(itemsSilo.length / 24));
              const muestra = Array.from({ length: 24 }, (_, i) => {
                const idx = Math.min(itemsSilo.length - 1, i * paso);
                return itemsSilo[idx];
              });

              return (
                <div
                  key={silo.id}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-amber-300">
                        {silo.nombre}
                      </h3>
                      <p className="text-xs text-slate-300">{silo.sub}</p>
                    </div>
                    <span className="text-xs font-bold bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full shrink-0">
                      {itemsSilo.length.toLocaleString("es-PE")} páginas activas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                    {muestra.map((it) => (
                      <Link
                        key={it.slug}
                        href={`/madrid/${it.slug}`}
                        className="flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 px-3 py-2.5 rounded-xl border border-white/10 transition-colors"
                      >
                        <span className="text-slate-200 font-medium leading-snug">
                          {it.titulo}
                        </span>
                        <span className="font-black text-amber-300 shrink-0">
                          ${it.precioDesdeUSD}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
