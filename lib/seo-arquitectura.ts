import { DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { TODOS_LOS_RESUMENES_OFERTAS_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { INDICE_MADRID_10K } from "@/lib/catalogo-madrid-10k";
import { asegurarDesde, formatoUSD, textoPrecio } from "@/lib/formato-precio";

export const URL_BASE_SEO = "https://citylandtravel.com";

export interface MigaDePanSEO {
  nombre: string;
  url: string;
}

export interface EnlaceSiloSEO {
  titulo: string;
  href: string;
  etiqueta?: string;
}

export interface PaqueteEnlacesCruzadosSEO {
  pilar: {
    titulo: string;
    subtitulo: string;
    href: string;
  };
  ofertas: EnlaceSiloSEO[];
  vuelos: EnlaceSiloSEO[];
  destinos: EnlaceSiloSEO[];
  viajes: EnlaceSiloSEO[];
  agencias: EnlaceSiloSEO[];
}

/**
 * Entidad global de marca y agencia de viajes para el Knowledge Graph de Google.
 */
export const SCHEMA_ORGANIZACION_CITYLAND = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "Organization", "LocalBusiness"],
      "@id": `${URL_BASE_SEO}/#organization`,
      name: "Cityland Travel",
      legalName: "Cityland Group E.I.R.L.",
      alternateName: ["Cityland Travel Agencia de Viajes en Lima"],
      url: URL_BASE_SEO,
      logo: {
        "@type": "ImageObject",
        url: `${URL_BASE_SEO}/logo-oficial.png`,
        width: 512,
        height: 512,
      },
      image: `${URL_BASE_SEO}/opengraph-image`,
      sameAs: [
        "https://www.facebook.com/citylandtraveloficial",
        "https://www.instagram.com/citylandtravel/",
        "https://www.tiktok.com/@citylandtravel",
      ],
      taxID: "20614914239",
      vatID: "PE20614914239",
      telephone: "+51944103890",
      priceRange: "$$",
      currenciesAccepted: "USD, PEN",
      paymentAccepted: "Transferencia Bancaria, Tarjeta de Crédito, Débito, Yape, Plin, Efectivo",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Santiago Antúnez de Mayolo 814, Urb. Mercurio",
        addressLocality: "Los Olivos",
        addressRegion: "Lima",
        addressCountry: "PE",
      },
      // Mismo horario que se muestra en la web (Mapa y Footer).
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      subOrganization: { "@id": `${URL_BASE_SEO}/#oficina-gamarra` },
      areaServed: [
        { "@type": "Country", name: "Perú" },
        { "@type": "City", name: "Lima" },
      ],
      knowsAbout: [
        "Paquetes migratorios y turísticos a Madrid y España desde Lima (LIM)",
        "Reserva de retorno activa RF 24h, hotel verificable y seguro Schengen 30,000 EUR",
        "Circuitos por Italia (Roma, Venecia, Florencia, Milán)",
        "Tour por Europa y Turquía desde Lima",
        "Paquetes Todo Incluido al Caribe (Punta Cana, Cancún, Cartagena, San Andrés, Aruba)",
        "Paquetes a Cusco y Machu Picchu",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+51-944-103-890",
          contactType: "sales",
          areaServed: "PE",
          availableLanguage: ["Spanish"],
        },
      ],
    },
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": `${URL_BASE_SEO}/#oficina-gamarra`,
      name: "Cityland Travel – Oficina Angélica Gamarra",
      legalName: "Cityland Travel S.A.C.",
      taxID: "20611406305",
      url: URL_BASE_SEO,
      telephone: "+51944103890",
      priceRange: "$$",
      parentOrganization: { "@id": `${URL_BASE_SEO}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Angélica Gamarra 763",
        addressLocality: "Los Olivos",
        addressRegion: "Lima",
        addressCountry: "PE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${URL_BASE_SEO}/#website`,
      url: URL_BASE_SEO,
      name: "Cityland Travel — Agencia de Viajes en Lima, Perú",
      publisher: { "@id": `${URL_BASE_SEO}/#organization` },
      inLanguage: "es-PE",
    },
  ],
};

/**
 * Detecta a qué Hub / Silo Principal pertenece cualquier página según su contenido.
 */
export function detectarPilarPorTexto(texto: string): {
  titulo: string;
  subtitulo: string;
  href: string;
  regionClave: "espana" | "italia-europa" | "caribe" | "peru" | "cruceros" | "visas" | "grupos";
} {
  const t = texto.toLowerCase();

  if (
    t.includes("españa") ||
    t.includes("espana") ||
    t.includes("madrid") ||
    t.includes("barcelona") ||
    t.includes("sevilla") ||
    t.includes("valencia") ||
    t.includes("granada") ||
    t.includes("andaluc") ||
    t.includes("ibiza") ||
    t.includes("mallorca") ||
    t.includes("schengen")
  ) {
    return {
      titulo: "Silo Principal: Paquetes Migratorios y Vuelos a Madrid y España",
      subtitulo: "Vuelo desde Lima (LIM) + retorno RF 24h + hotel verificable + seguro Schengen 30.000€",
      href: "/espana",
      regionClave: "espana",
    };
  }

  if (
    t.includes("italia") ||
    t.includes("roma") ||
    t.includes("venecia") ||
    t.includes("florencia") ||
    t.includes("milan") ||
    t.includes("milán") ||
    t.includes("vaticano") ||
    t.includes("toscana") ||
    t.includes("napoles") ||
    t.includes("nápoles") ||
    t.includes("amalfi") ||
    t.includes("parís") ||
    t.includes("paris") ||
    t.includes("europa") ||
    t.includes("turqu") ||
    t.includes("estambul") ||
    t.includes("capadocia") ||
    t.includes("suiza") ||
    t.includes("londres") ||
    t.includes("dubai") ||
    t.includes("dubái")
  ) {
    return {
      titulo: "Silo Principal: Circuitos por Italia, Europa y Turquía",
      subtitulo: "Roma, Venecia, Florencia, Milán, París, Madrid y Estambul con guía en español",
      href: "/europa-turquia",
      regionClave: "italia-europa",
    };
  }

  if (t.includes("crucero") || t.includes("msc") || t.includes("royal caribbean") || t.includes("norwegian")) {
    return {
      titulo: "Silo Principal: Cruceros por el Caribe y Europa",
      subtitulo: "Salidas con y sin visa desde Panamá, Cartagena, Miami, Barcelona y Roma",
      href: "/cruceros",
      regionClave: "cruceros",
    };
  }

  if (t.includes("visa") || t.includes("pasaporte") || t.includes("embajada") || t.includes("consular")) {
    return {
      titulo: "Silo Principal: Asesoría de Visas y Pasaporte",
      subtitulo: "Trámite para EE. UU. (B1/B2), Canadá, México, China, Reino Unido y Schengen",
      href: "/visas",
      regionClave: "visas",
    };
  }

  if (t.includes("colegio") || t.includes("escolar") || t.includes("promocion") || t.includes("quincea") || t.includes("empresa") || t.includes("corporativ")) {
    return {
      titulo: "Silo Principal: Viajes de Grupo, Colegios y Corporativos",
      subtitulo: "Logística integral, bloqueos aéreos y atención personalizada con RUC 20614914239",
      href: "/colegios",
      regionClave: "grupos",
    };
  }

  if (
    t.includes("cusco") ||
    t.includes("machu picchu") ||
    t.includes("arequipa") ||
    t.includes("tarapoto") ||
    t.includes("mancora") ||
    t.includes("máncora") ||
    t.includes("iquitos") ||
    t.includes("puno") ||
    t.includes("paracas") ||
    t.includes("huaraz")
  ) {
    return {
      titulo: "Silo Principal: Paquetes por Cusco, Machu Picchu y Perú",
      subtitulo: "Vuelos + hotel + trenes + ingresos garantizados por todo el Perú",
      href: "/cusco",
      regionClave: "peru",
    };
  }

  return {
    titulo: "Silo Principal: Caribe Todo Incluido y Sudamérica",
    subtitulo: "Punta Cana, Cancún, Riviera Maya, San Andrés, Cartagena, Aruba y Curazao",
    href: "/caribe",
    regionClave: "caribe",
  };
}

/**
 * Genera una malla de enlaces internos cruzados (Cross-Silo Interlinking) determinística
 * para que Google rastree todos los niveles sin páginas huérfanas.
 */
export function obtenerEnlacesCruzadosSEO(
  textoContexto: string,
  slugActual: string
): PaqueteEnlacesCruzadosSEO {
  const pilar = detectarPilarPorTexto(textoContexto);
  const palabras = textoContexto
    .toLowerCase()
    .replace(/[^a-záéíóúñ0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !["para", "desde", "todo", "viaje", "viajes", "paquete", "paquetes", "lima", "peru", "perú", "dias", "días", "noches"].includes(w));

  const coincide = (candidato: string) => {
    const c = candidato.toLowerCase();
    return palabras.some((p) => c.includes(p));
  };

  let hash = 0;
  for (let i = 0; i < slugActual.length; i++) {
    hash = (hash * 31 + slugActual.charCodeAt(i)) >>> 0;
  }

  const todosDestinos = [...DESTINOS_EUROPA, ...DESTINOS_CARIBE, ...DESTINOS_MASIVOS];
  const destinosCoincidentes = todosDestinos.filter(
    (d) => d.slug !== slugActual && coincide(`${d.ciudad} ${d.pais} ${d.slug}`)
  );
  const poolDestinos = destinosCoincidentes.length >= 4 ? destinosCoincidentes : todosDestinos;
  const destinos: EnlaceSiloSEO[] = Array.from({ length: 6 }, (_, i) => {
    const d = poolDestinos[(hash + i * 3) % poolDestinos.length];
    return {
      titulo: `Paquete a ${d.ciudad} (${d.pais})`,
      href: `/destinos/${d.slug}`,
      etiqueta: `Desde ${formatoUSD(d.migratorio ?? d.turistico)}`,
    };
  });

  const vuelosCoincidentes = RUTAS_VUELOS_SEO.filter(
    (r) => r.slug !== slugActual && coincide(`${r.origen} ${r.destino} ${r.config.vitrina.pais} ${r.slug}`)
  );
  const poolVuelos = vuelosCoincidentes.length >= 4 ? vuelosCoincidentes : RUTAS_VUELOS_SEO;
  const vuelos: EnlaceSiloSEO[] = Array.from({ length: 6 }, (_, i) => {
    const r = poolVuelos[(hash + i * 5) % poolVuelos.length];
    return {
      titulo: `Vuelos de ${r.origen} a ${r.destino}`,
      href: `/vuelos/${r.slug}`,
      etiqueta: `Desde ${formatoUSD(r.precioDesdeUSD)}`,
    };
  });

  const ofertasCoincidentes = TODOS_LOS_RESUMENES_OFERTAS_SEO.filter(
    (o) => o.slug !== slugActual && coincide(`${o.titulo} ${o.destinoOPais} ${o.slug}`)
  );
  const poolOfertas = ofertasCoincidentes.length >= 6 ? ofertasCoincidentes : TODOS_LOS_RESUMENES_OFERTAS_SEO;
  const ofertas: EnlaceSiloSEO[] = Array.from({ length: 8 }, (_, i) => {
    const o = poolOfertas[(hash + i * 7) % poolOfertas.length];
    return {
      titulo: o.titulo,
      href: `/ofertas/${o.slug}`,
      etiqueta: `Desde ${formatoUSD(o.precioDesdeUSD)}`,
    };
  });

  const viajesCoincidentes = VIAJES_ESPECIALIZADOS_SEO.filter(
    (v) => v.slug !== slugActual && coincide(`${v.titulo} ${v.destinoOPais} ${v.slug}`)
  );
  const poolViajes = viajesCoincidentes.length >= 4 ? viajesCoincidentes : VIAJES_ESPECIALIZADOS_SEO;
  const viajes: EnlaceSiloSEO[] = Array.from({ length: 6 }, (_, i) => {
    const v = poolViajes[(hash + i * 11) % poolViajes.length];
    return {
      titulo: v.titulo,
      href: `/viajes/${v.slug}`,
      etiqueta: `Desde ${formatoUSD(v.precioDesdeUSD)}`,
    };
  });

  // Enlaces directos al Silo Especializado de Madrid (/madrid/[slug]) en lugar de distritos
  const agencias: EnlaceSiloSEO[] = Array.from({ length: 4 }, (_, i) => {
    const m = INDICE_MADRID_10K[(hash + i * 97) % INDICE_MADRID_10K.length];
    return {
      titulo: m.titulo,
      href: `/madrid/${m.slug}`,
      etiqueta: `Desde ${formatoUSD(m.precioDesdeUSD)}`,
    };
  });

  return {
    pilar,
    ofertas,
    vuelos,
    destinos,
    viajes,
    agencias,
  };
}

const PALABRA_COLGADA = /\s+(?:a|al|de|del|y|e|o|u|con|por|en|para|la|el|los|las|desde|como|sin|all|todo|\$)$/i;

// Corta en el ultimo espacio y descarta un parentesis o monto a medio escribir ("($50 | Cityland").
function recortarEnPalabra(texto: string, max: number, minimo: number): string {
  if (texto.length <= max) return texto;
  const corte = texto.slice(0, max);
  const espacio = corte.lastIndexOf(" ");
  const base = espacio > minimo ? corte.slice(0, espacio) : corte;
  let limpio = base.replace(/\s*\([^)]*$/, "").replace(/[\s,;:·|—–-]+$/, "").trim();
  // Sin palabra colgada al final: «Plan Promo Desde», «Paquetes Migratorios a», «Ocho Ríos All» (44 títulos del sitemap, auditoría 23-oct).
  while (PALABRA_COLGADA.test(limpio) && limpio.length > minimo) {
    limpio = limpio.replace(PALABRA_COLGADA, "").replace(/[\s,;:·|—–-]+$/, "").trim();
  }
  return limpio;
}

/**
 * Garantiza que cualquier título SEO (<title>) no supere los 60 caracteres
 * ni duplique la marca Cityland Travel.
 */
export function optimizarMetaTitleSEO(tituloRaw: string): string {
  const sinDobleUsd = textoPrecio(tituloRaw.replace(/\s+/g, " ").trim());

  if (sinDobleUsd.length <= 60) return sinDobleUsd;

  // Quitar sufijo largo primero y dejar marca corta
  const baseSinMarca = sinDobleUsd
    .replace(/\s*[|—-]\s*Cityland Travel(?:\s*Perú|\s*Lima)?.*$/i, "")
    .replace(/\s*\([^)]{14,}\)/g, "")
    .trim();

  const conMarcaCompleta = `${baseSinMarca} | Cityland Travel`;
  if (conMarcaCompleta.length <= 60) return conMarcaCompleta;

  const conMarcaCorta = `${baseSinMarca} | Cityland`;
  if (conMarcaCorta.length <= 60) return conMarcaCorta;

  return `${recortarEnPalabra(baseSinMarca, 47, 20)} | Cityland`;
}

/**
 * Garantiza que cualquier metadescripción esté entre 90 y 156 caracteres
 * para evitar truncamiento en los resultados de búsqueda de Google.
 */
export function optimizarMetaDescriptionSEO(descRaw: string): string {
  const limpia = textoPrecio(descRaw.replace(/\s+/g, " ").trim());

  if (limpia.length <= 156) return limpia;

  return `${recortarEnPalabra(limpia, 153, 110)}...`;
}

/**
 * Construye el grafo JSON-LD Schema.org completo para cualquier Landing Comercial / Turística.
 */
export function construirSchemaLandingSEO(params: {
  url: string;
  titulo: string;
  descripcion: string;
  precioDesdeUSD: number;
  precioMaximoUSD?: number;
  cantidadOfertas?: number;
  destinoOPais: string;
  imagenUrl: string;
  migas: MigaDePanSEO[];
  faqs?: { q: string; a: string }[];
  // Tipo explicito: si se omite se deduce de la URL (heuristica antigua, solo para las demas familias de landings).
  tipoSchema?: "paquete" | "producto" | "servicio";
}) {
  const esServicioDocumentario = params.tipoSchema
    ? params.tipoSchema === "servicio"
    : /(visa|seguro|requisito|pasaporte|pnr|carta-de-invitacion)/i.test(params.url);
  const esProductoSimple = params.tipoSchema === "producto";

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: params.migas.map((m, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: asegurarDesde(m.nombre),
        item: m.url.startsWith("http") ? m.url : `${URL_BASE_SEO}${m.url}`,
      })),
    },
    esServicioDocumentario
      ? {
          "@type": "Service",
          name: asegurarDesde(params.titulo),
          description: optimizarMetaDescriptionSEO(params.descripcion),
          image: [params.imagenUrl],
          provider: {
            "@id": `${URL_BASE_SEO}/#organization`,
          },
          areaServed: {
            "@type": "Country",
            name: "Perú",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: String(params.precioDesdeUSD),
            offerCount: "1",
            availability: "https://schema.org/InStock",
            url: params.url,
          },
        }
      : {
          "@type": esProductoSimple ? "Product" : ["Product", "TouristTrip"],
          name: asegurarDesde(params.titulo),
          description: optimizarMetaDescriptionSEO(params.descripcion),
          image: [params.imagenUrl],
          ...(esProductoSimple
            ? {}
            : { touristType: ["Viajeros desde Perú", "Familias", "Parejas", "Viajeros de Negocios"] }),
          brand: {
            "@type": "Brand",
            name: "Cityland Travel",
          },
          provider: {
            "@id": `${URL_BASE_SEO}/#organization`,
          },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: String(params.precioDesdeUSD),
            ...(params.precioMaximoUSD ? { highPrice: String(params.precioMaximoUSD) } : {}),
            offerCount: String(esProductoSimple ? 1 : (params.cantidadOfertas ?? 1)),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: params.url,
            seller: {
              "@type": "TravelAgency",
              name: "Cityland Group E.I.R.L.",
              taxID: "20614914239",
              telephone: "+51944103890",
            },
          },
        },
  ];

  if (params.faqs && params.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: params.faqs.slice(0, 4).map((f) => ({
        "@type": "Question",
        name: textoPrecio(f.q),
        acceptedAnswer: {
          "@type": "Answer",
          text: textoPrecio(f.a),
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
