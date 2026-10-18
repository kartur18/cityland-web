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
    "Viajes y Paquetes Migratorios a Madrid desde Lima (Desde $869) | Cityland Travel",
  description:
    "Especialistas #1 en Perú en Paquetes Migratorios y Vuelos a Madrid-Barajas (T4/T1): Boleto aéreo + Reserva de Retorno RF 24h + Reserva de Hotel verificable + Seguro Schengen 30.000€ + Check-in por asesor desde $869 USD. Solo Carpeta desde $75 USD.",
  keywords: [
    "paquete migratorio a madrid desde lima",
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
  tituloPrincipal: "Paquetes Migratorios y Vuelos a Madrid:",
  subtituloDorado: "Expediente Completo Desde $869 USD",
  resumenEjecutivo:
    "Somos la agencia peruana especialista en el corredor aéreo Lima – Madrid. Nuestro paquete migratorio incluye tu boleto de ingreso, reserva de retorno activa (MAD → LIM 24h) verificable en sistema, voucher de hotel en Madrid (o calibración a tu Carta de Invitación), seguro Schengen 30.000€ y check-in hecho por tu asesor.",
  zonaOMunicipioMadrid: "Madrid (Barajas T4 / T1)",
  origenPasajero: "Lima y Todo el Perú",
  modalidadClave: "Paquete Migratorio + RF 24h",
  precioDesdeUSD: 869,
  precioCarpetaSolaUSD: 75,
  precioIdaYVueltaUSD: 1090,
  imagenHero:
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=85",
  imagenSecundaria:
    "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=85",
  metaTitle:
    "Viajes y Paquetes Migratorios a Madrid desde Lima (Desde $869) | Cityland Travel",
  metaDescription:
    "Paquetes migratorios a Madrid desde $869 USD con boleto aéreo, reserva de retorno RF 24h, hotel verificable, seguro Schengen 30.000€ y check-in por asesor.",
  keywords: [
    "paquete migratorio madrid",
    "vuelos a madrid desde lima",
    "carpeta migratoria espana",
  ],
  planesReales: [
    {
      etiqueta: "★ Más Vendido (266+ Ventas)",
      titulo: "Paquete Migratorio Completo a Madrid",
      precioUSD: 869,
      subtitulo: "Boleto LIM → MAD + Retorno RF 24h + Hotel + Seguro + Check-in",
      destacado: true,
      incluye: [
        "Boleto aéreo Lima – Madrid con código PNR verificable",
        "Reserva de retorno activa (MAD → LIM) para control migratorio",
        "Reserva de hotel verificable en Madrid o ajuste a Carta de Invitación",
        "Seguro médico Schengen 30.000€ + Check-in hecho por tu asesor",
      ],
      waMensaje:
        "¡Hola Cityland Travel! Quiero cotizar el Paquete Migratorio Completo a Madrid (Desde $869 USD).",
    },
    {
      etiqueta: "Si Ya Compraste tu Vuelo",
      titulo: "Solo Carpeta Migratoria Express Madrid",
      precioUSD: 75,
      subtitulo: "Para pasajeros que ya tienen boleto y necesitan sus requisitos",
      incluye: [
        "Reserva de retorno PNR activa en sistema (24h antes de tu vuelo)",
        "Voucher de hotel verificable en Madrid por los días declarados",
        "Seguro médico Schengen oficial de 30.000€ sin franquicia",
        "Check-in, asignación de asiento y cálculo de bolsa BOE",
      ],
      waMensaje:
        "¡Hola Cityland Travel! Ya tengo mi pasaje a Madrid y quiero contratar Solo la Carpeta Migratoria (Desde $75 USD).",
    },
    {
      etiqueta: "Con Visa / Residencia / Retorno",
      titulo: "Boleto Solo Ida (LIM → MAD o MAD → LIM)",
      precioUSD: 729,
      subtitulo: "Para visa de estudios, trabajo, reagrupación, DNI o retorno a Lima",
      incluye: [
        "Boleto electrónico IATA de 13 dígitos (Iberia, Air Europa, LATAM, Plus Ultra)",
        "Equipaje de mano 10 kg + maleta de bodega de 23 kg",
        "Opción de agregar 2da maleta de 23 kg a tarifa preferencial",
        "Check-in hecho por tu asesor y factura electrónica SUNAT",
      ],
      waMensaje:
        "¡Hola Cityland Travel! Quiero cotizar un Boleto Solo Ida (Lima-Madrid o Madrid-Lima) desde $729 USD.",
    },
    {
      etiqueta: "Ida y Vuelta Cerrado",
      titulo: "Paquete Lima – Madrid – Lima Confirmado",
      precioUSD: 1090,
      subtitulo: "Vuelo redondo emitido + reserva hotelera + seguro Schengen",
      incluye: [
        "Boleto aéreo ida y vuelta cerrado con fechas fijas",
        "Alojamiento seleccionado en Madrid y seguro Schengen 30.000€",
        "Preparación integral de carpeta para control en Barajas T4/T1",
        "Separa con el 50% ($545 USD) y paga en cuotas antes de viajar",
      ],
      waMensaje:
        "¡Hola Cityland Travel! Quiero cotizar el Paquete Ida y Vuelta Cerrado Lima – Madrid – Lima (Desde $1,090 USD).",
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
      titulo: "Emisión de Boleto Principal con Código PNR",
      detalle:
        "Emitimos tu pasaje con Iberia, Air Europa, Plus Ultra o LATAM (puedes separar con el 50% de inicial en oficina de Los Olivos o por BCP/BBVA/Interbank).",
    },
    {
      paso: "03",
      titulo: "Activación de Retorno RF + Hotel + Seguro",
      detalle:
        "Activamos tu reserva de retorno MAD → LIM verificable en sistema para el día de tu viaje, junto con tu voucher de hotel y seguro Schengen 30.000€.",
    },
    {
      paso: "04",
      titulo: "Check-in por tu Asesor y Entrega de Carpeta",
      detalle:
        "Tu asesor realiza tu check-in, elige tu asiento y te entrega tu carpeta ordenada lista para presentar en el Jorge Chávez y en Madrid-Barajas.",
    },
  ],
  checklistBarajas: [
    {
      requisito: "Boleto o Reserva Activa de Retorno (MAD → LIM)",
      detalleOficial:
        "En el mostrador de Lima y en el control de Madrid-Barajas (T4 y T1) exigen acreditar fecha de salida del Espacio Schengen dentro de los 90 días.",
      comoTeAyudamos:
        "Incluimos la reserva de retorno activa 24h antes de tu vuelo en el Paquete Migratorio ($869 USD) o emitimos boleto ida y vuelta cerrado ($1,090 USD).",
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
      a: "Te atendemos presencialmente en Av. Universitaria 2029, Los Olivos (frente al Palacio de la Juventud), Lima, y también de forma 100% digital por WhatsApp al +51 944 103 890 con emisión de Boleta o Factura Electrónica SUNAT (RUC 20614914239).",
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                    {muestra.map((it) => (
                      <Link
                        key={it.slug}
                        href={`/madrid/${it.slug}`}
                        className="flex items-center justify-between gap-2 bg-white/5 hover:bg-white/15 px-3 py-2 rounded-xl border border-white/10 transition-colors"
                      >
                        <span className="truncate text-slate-200 font-medium">
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
