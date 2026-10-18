import { DESTINOS_EUROPA, DESTINOS_CARIBE } from "@/components/constantes";
import { DESTINOS_MASIVOS } from "@/lib/catalogo-destinos-masivo";
import { RUTAS_VUELOS_SEO } from "@/lib/rutas-vuelos";
import { VIAJES_ESPECIALIZADOS_SEO } from "@/lib/catalogo-viajes-especializados";
import { MIL_LANDINGS_COMERCIALES_SEO } from "@/lib/catalogo-mil-landings-comerciales";
import { AGENCIAS_LOCALES_SEO } from "@/lib/catalogo-agencias-locales";

export const URL_BASE_SEO = "https://citylandtravel.com";
export const FECHA_ESTABLE_SITEMAP = "2026-10-17T12:00:00.000Z";

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
      name: "Cityland Travel E.I.R.L.",
      alternateName: "Cityland Travel Agencia de Viajes en Lima",
      url: URL_BASE_SEO,
      logo: `${URL_BASE_SEO}/icon.svg`,
      image: `${URL_BASE_SEO}/opengraph-image`,
      taxID: "20614914239",
      vatID: "PE20614914239",
      telephone: "+51944103890",
      priceRange: "$$",
      currenciesAccepted: "USD, PEN",
      paymentAccepted: "Transferencia Bancaria, Tarjeta de Crédito, Débito, Yape, Plin, Efectivo",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Alfredo Mendiola, Los Olivos",
        addressLocality: "Los Olivos",
        addressRegion: "Lima",
        postalCode: "15301",
        addressCountry: "PE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -11.9556,
        longitude: -77.0642,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Perú" },
        { "@type": "City", name: "Lima" },
        { "@type": "City", name: "Arequipa" },
        { "@type": "City", name: "Trujillo" },
        { "@type": "City", name: "Chiclayo" },
        { "@type": "City", name: "Piura" },
        { "@type": "City", name: "Cusco" },
      ],
      knowsAbout: [
        "Paquetes turísticos a España (Madrid y Barcelona)",
        "Circuitos por Italia (Roma, Venecia, Florencia, Milán)",
        "Tour por Europa y Turquía desde Lima",
        "Paquetes Todo Incluido al Caribe (Punta Cana, Cancún, Cartagena, San Andrés, Aruba)",
        "Seguro médico Schengen 30,000 EUR",
        "Asesoría de viaje y requisitos migratorios para peruanos",
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
      titulo: "Silo Principal: Viajes y Paquetes a España (Madrid y Barcelona)",
      subtitulo: "Vuelos + hotel, circuitos en tren AVE y carpeta de viaje con seguro Schengen 30.000€",
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

  // Semilla determinística a partir del slug para variar enlaces internos sin repetir el mismo bloque en 2,000 páginas
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
      etiqueta: `Desde $${d.migratorio ?? d.turistico} USD`,
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
      etiqueta: `Desde $${r.precioDesdeUSD} USD`,
    };
  });

  const ofertasCoincidentes = MIL_LANDINGS_COMERCIALES_SEO.filter(
    (o) => o.slug !== slugActual && coincide(`${o.titulo} ${o.destinoOPais} ${o.slug}`)
  );
  const poolOfertas = ofertasCoincidentes.length >= 6 ? ofertasCoincidentes : MIL_LANDINGS_COMERCIALES_SEO;
  const ofertas: EnlaceSiloSEO[] = Array.from({ length: 8 }, (_, i) => {
    const o = poolOfertas[(hash + i * 7) % poolOfertas.length];
    return {
      titulo: o.titulo,
      href: `/ofertas/${o.slug}`,
      etiqueta: `Desde $${o.precioDesdeUSD} USD`,
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
      etiqueta: `Desde $${v.precioDesdeUSD} USD`,
    };
  });

  const agencias: EnlaceSiloSEO[] = Array.from({ length: 4 }, (_, i) => {
    const a = AGENCIAS_LOCALES_SEO[(hash + i * 13) % AGENCIAS_LOCALES_SEO.length];
    return {
      titulo: `Agencia de Viajes en ${a.zona}`,
      href: `/agencia/${a.slug}`,
      etiqueta: a.region,
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

/**
 * Construye el grafo JSON-LD Schema.org completo para cualquier Landing Comercial / Turística.
 */
export function construirSchemaLandingSEO(params: {
  url: string;
  titulo: string;
  descripcion: string;
  precioDesdeUSD: number;
  cantidadOfertas?: number;
  destinoOPais: string;
  imagenUrl: string;
  migas: MigaDePanSEO[];
  faqs?: { q: string; a: string }[];
}) {
  const highPrice = Math.max(params.precioDesdeUSD + 150, Math.round(params.precioDesdeUSD * 1.45));

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: params.migas.map((m, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: m.nombre,
        item: m.url.startsWith("http") ? m.url : `${URL_BASE_SEO}${m.url}`,
      })),
    },
    {
      "@type": ["Product", "TouristTrip"],
      name: params.titulo,
      description: params.descripcion,
      image: [params.imagenUrl],
      touristType: ["Viajeros desde Perú", "Familias", "Parejas", "Viajeros de Negocios"],
      brand: {
        "@type": "Brand",
        name: "Cityland Travel",
      },
      provider: {
        "@id": `${URL_BASE_SEO}/#organization`,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: String(params.precioDesdeUSD),
        highPrice: String(highPrice),
        offerCount: String(params.cantidadOfertas ?? 6),
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: params.url,
        seller: {
          "@type": "TravelAgency",
          name: "Cityland Travel E.I.R.L.",
          taxID: "20614914239",
          telephone: "+51944103890",
        },
      },
    },
  ];

  if (params.faqs && params.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: params.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
