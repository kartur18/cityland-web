// Guia corta por landing (ofertas, vuelos y viajes) con datos propios de cada entrada del catalogo.
import type { GuiaRapida } from "@/components/GuiaRapidaLanding";
import type { LandingComercialSEO } from "@/lib/catalogo-mil-landings-comerciales";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import type { ViajeEspecializadoSEO } from "@/lib/catalogo-viajes-especializados";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import type { RutaVueloSEO } from "@/lib/rutas-vuelos";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import {
  esPaisSchengen,
  extraerDuracion,
  extraerMes,
  minuscula,
  pistaRequisitos,
  sinPuntoFinal,
  type EnlaceContextual,
  type FaqUnica,
} from "@/lib/contenido-unico";
import { crearRelacionador } from "@/lib/relacionadas";
import { esIndexable } from "@/lib/indexacion";

// Los enlaces "relacionados" solo apuntan a páginas que Google puede guardar.
const relacionarOfertas = crearRelacionador(
  TODOS_LOS_RESUMENES_OFERTAS_SEO.map((o) => ({
    slug: o.slug,
    titulo: o.titulo,
    href: `/ofertas/${o.slug}`,
    extra: o.destinoOPais,
  })),
  4000,
  esIndexable,
);

const relacionarViajes = crearRelacionador(
  VIAJES_ESPECIALIZADOS_SEO.map((v) => ({
    slug: v.slug,
    titulo: v.titulo,
    href: `/viajes/${v.slug}`,
    extra: v.destinoOPais,
  })),
  1200,
  esIndexable,
);

const relacionarVuelos = crearRelacionador(
  RUTAS_VUELOS_SEO.map((r) => ({
    slug: r.slug,
    titulo: `Vuelos de ${r.origen} a ${r.destino}`,
    href: `/vuelos/${r.slug}`,
    extra: `${r.origen} ${r.destino} ${r.config.vitrina.pais ?? ""}`,
  })),
  1200,
  esIndexable,
);

function limpiarLugar(texto: string): string {
  return sinPuntoFinal(
    texto
      .replace(/^(Paquetes?|Viajes?|Viajar|Ofertas?)\s+(a|de)\s+/i, "")
      .replace(/\s+desde\s+Lima.*$/i, "")
      .replace(/\s+en\s+(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)\b.*$/i, "")
      .trim(),
  ).slice(0, 80);
}

// Separa el lugar de la modalidad en titulos como "Etiqueta: Lugar" o "Lugar: Programa".
function lugarDelTitulo(titulo: string): string {
  const base = titulo.split(" — ")[0].replace(/\s*\(?Desde\s+\$[\d,.]+\s*(USD)?\)?/gi, "");
  const [a, ...resto] = base.split(":");
  const b = resto.join(":").trim();
  if (!b) return limpiarLugar(a);
  const lugarEnB = !a.includes("(") && b.includes("(");
  const etiquetaEnA = /^(Preventa|Oferta|Promo|Tarifa|Circuito Guiado|Paquete Vuelo|Programa Familiar)/i.test(a.trim());
  return limpiarLugar(lugarEnB || (etiquetaEnA && !b.includes("Vuelo")) ? b : a);
}

function aperturaPorCluster(cluster: LandingComercialSEO["cluster"], lugar: string, detalle: string): string {
  switch (cluster) {
    case "all-inclusive":
      return `Esta opción de playa y hotel en ${lugar} se cotiza desde Lima${detalle}.`;
    case "cruceros":
      return `Itinerario por mar con ${lugar}, cotizado desde Lima${detalle}.`;
    case "visas-seguros":
      return `Servicio documentario para ${lugar}, atendido en Los Olivos o por WhatsApp${detalle}.`;
    case "tours":
      return `Programa dentro del Perú: ${lugar}${detalle}.`;
    case "empresas":
      return `Servicio para empresas: ${lugar}, con comprobante electrónico SUNAT${detalle}.`;
    case "colegios-deportes":
      return `Viaje grupal para ${lugar}, con tarifas por grupo${detalle}.`;
    case "religiosos-eventos":
      return `Viaje a ${lugar}, pensado para grupos y peregrinaciones${detalle}.`;
    default:
      return `${lugar} se cotiza desde Lima con vuelo y hotel según la modalidad elegida${detalle}.`;
  }
}

export function guiaOferta(item: LandingComercialSEO): GuiaRapida {
  const lugar = lugarDelTitulo(item.titulo);
  const dur = extraerDuracion(item.titulo);
  const mes = extraerMes(item.titulo);
  const detalle = `${dur ? `, en un programa de ${dur.dias} días y ${dur.noches} noches` : ""}${mes ? `, con salida en ${mes}` : ""}`;
  const pista = pistaRequisitos(item.destinoOPais);
  const checks = item.config.checksHero.map((c) => sinPuntoFinal(c));

  const faqs: FaqUnica[] = [
    {
      q: dur ? `¿Qué incluye ${lugar} en ${dur.dias} días y ${dur.noches} noches?` : `¿Qué incluye ${lugar}?`,
      a: `En esta oferta figura: ${minuscula(checks.join("; "))}. Al cotizar te confirmamos el detalle exacto para tus fechas.`,
    },
  ];
  if (pista) faqs.push({ q: `¿Qué debo tener en cuenta para viajar a ${item.destinoOPais}?`, a: pista });

  return {
    titulo: `Guía rápida: ${lugar}`,
    intro: [
      aperturaPorCluster(item.cluster, lugar, detalle),
      `Cómo funciona: nos indicas fecha y pasajeros, revisamos que ${minuscula(checks[0] ?? "la oferta")} esté disponible y, si te conviene, separas con el 50%.`,
    ],
    pasos: [],
    faqs,
    tituloEnlaces: `Más opciones relacionadas con ${lugar}`,
    enlaces: relacionarOfertas(item.slug, 5),
  };
}

const TODOS_DESTINOS = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];

function destinoDeRuta(ruta: RutaVueloSEO): EnlaceContextual | null {
  const nombre = ruta.destino.toLowerCase().split("(")[0].trim();
  const d = TODOS_DESTINOS.find((x) => x.ciudad.toLowerCase().includes(nombre) || nombre.includes(x.ciudad.toLowerCase()));
  return d ? { href: `/destinos/${d.slug}`, titulo: `Paquetes a ${d.ciudad} desde Lima` } : null;
}

export function guiaVuelo(ruta: RutaVueloSEO): GuiaRapida {
  const pais = ruta.config.vitrina.pais || ruta.destino;
  const aerolineas = ruta.config.badgeHero.split(" · ")[1];
  const pista = pistaRequisitos(pais);
  const tramo = `${ruta.origen} (${ruta.codigoOrigen}) → ${ruta.destino} (${ruta.codigoDestino})`;

  const faqs: FaqUnica[] = [];
  if (aerolineas) {
    faqs.push({
      q: `¿Con qué aerolíneas se cotiza ${ruta.origen} a ${ruta.destino}?`,
      a: `Para esta ruta trabajamos con ${aerolineas}. La disponibilidad y el equipaje dependen de la fecha y de la tarifa elegida.`,
    });
  }
  if (esPaisSchengen(pais)) {
    faqs.push({
      q: `¿Puedo comprar solo ida a ${ruta.destino}?`,
      a: `Sí. Emitimos boletos de ida y vuelta, solo ida para residentes o con visado, o paquete con seguro Schengen de 30.000 € y carpeta migratoria.`,
    });
  }
  if (pista) faqs.push({ q: `¿Qué debo saber antes de volar a ${ruta.destino}?`, a: pista });

  const enlaces: EnlaceContextual[] = relacionarVuelos(ruta.slug, 4);
  const paquete = destinoDeRuta(ruta);
  if (paquete) enlaces.push(paquete);

  return {
    titulo: `Guía rápida: vuelos de ${ruta.origen} a ${ruta.destino}`,
    intro: [
      `La ruta ${tramo}${aerolineas ? ` se cotiza con ${aerolineas}` : " se cotiza según la fecha elegida"}.`,
      `Cómo funciona: nos dices tu fecha, comparamos opciones para ${ruta.codigoOrigen}-${ruta.codigoDestino} y, al confirmar, emitimos el boleto con código PNR.`,
    ],
    pasos: [],
    faqs,
    tituloEnlaces: `Rutas y paquetes relacionados con ${ruta.destino}`,
    enlaces,
  };
}

const APERTURA_VIAJE: Record<ViajeEspecializadoSEO["categoria"], string> = {
  "primer-viaje": "Pensado para quien viaja por primera vez",
  "dos-maletas": "Tarifa con equipaje de bodega incluido",
  aerolinea: "Cotización por aerolínea",
  "grupos-seguros": "Opción para grupos con seguro de viaje",
  requisitos: "Guía de requisitos y paquete asociado",
};

export function guiaViaje(item: ViajeEspecializadoSEO): GuiaRapida {
  const pista = pistaRequisitos(item.destinoOPais.split(",").pop()?.trim() ?? item.destinoOPais);
  const incluye = item.incluye.slice(0, 3).map((i) => sinPuntoFinal(i));

  const faqs: FaqUnica[] = [{ q: `¿Qué incluye ${item.titulo}?`, a: `${incluye.join("; ")}.` }];
  if (pista) faqs.push({ q: `¿Qué debo saber antes de viajar a ${item.destinoOPais}?`, a: pista });
  if (item.beneficiosClave[0]) {
    faqs.push({
      q: `¿Qué ventaja tiene esta opción para ${item.destinoOPais}?`,
      a: `${item.beneficiosClave[0].titulo}: ${sinPuntoFinal(item.beneficiosClave[0].desc)}.`,
    });
  }

  return {
    titulo: `Guía rápida: ${item.destinoOPais}`,
    intro: [
      `${APERTURA_VIAJE[item.categoria]}: ${sinPuntoFinal(item.subtitulo)}.`,
      `Cómo funciona: nos cuentas tu fecha de salida desde Lima, confirmamos que ${minuscula(incluye[0] ?? "la oferta")} esté disponible y puedes separar con el 50%.`,
    ],
    pasos: [],
    faqs,
    tituloEnlaces: `Opciones relacionadas con ${item.destinoOPais}`,
    enlaces: relacionarViajes(item.slug, 5),
  };
}
