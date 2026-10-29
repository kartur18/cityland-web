import { formatoUSD } from "@/lib/formato-precio";
import { circuitosVigentes } from "@/lib/circuitos";
import { paquetesDe } from "@/lib/italia/rutas-ida";
import type { LandingItalia, PaqueteEnlace } from "@/lib/italia/tipos";

// Italia con otros países y luna de miel: cada página muestra los circuitos del mayorista que de verdad pasan por
// esos países (lib/circuitos.ts), con su precio vigente.

type Circuito = ReturnType<typeof circuitosVigentes>[number];

const conVuelo = (c: Circuito) => !c.slug.endsWith("solo-terrestre");

// `ciudad` deja solo los que pasan por esa ciudad (Italia y Grecia: los que pasan por Atenas).
function circuitosCon(paises: string[], maximo = 6, ciudad?: string): Circuito[] {
  return circuitosVigentes()
    .filter((c) => paises.every((p) => c.paises.includes(p)))
    .filter((c) => !ciudad || c.ciudades.some((x) => x.trim() === ciudad))
    .sort((a, b) => a.desde - b.desde)
    .slice(0, maximo);
}

function enlace(c: Circuito): PaqueteEnlace {
  const ciudades = c.ciudades.map((x) => x.trim()).slice(0, 5).join(", ");
  return { nombre: c.nombre, href: `/circuitos/${c.slug}`, detalle: `${c.dias} días · ${conVuelo(c) ? "con vuelo" : "solo terrestre"} · ${ciudades}`, precio: c.desde };
}

const ENLACES = [
  { texto: "Circuitos por Europa", href: "/circuitos-por-europa" },
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
  { texto: "Luna de miel", href: "/luna-de-miel" },
  { texto: "Viajes a Roma", href: "/viajes-a/roma" },
  { texto: "Viajes a Venecia", href: "/viajes-a/venecia" },
];

const PAGO = { q: "¿Se puede pagar en partes?", a: "Sí. Separas con el 50% y pagas el saldo antes de viajar, por transferencia, Yape, Plin o tarjeta." };
const TERRESTRE = {
  q: "¿Qué quiere decir «solo terrestre»?",
  a: "Que el precio incluye hoteles, bus, guía y las visitas del programa, pero no el vuelo desde Lima. Te cotizamos el pasaje aparte o el programa con vuelo incluido.",
};

interface Combo {
  slug: string;
  titulo: string;
  h1: string;
  migas: string;
  paises: string[];
  foto: string;
  fotoAlt: string;
  bajada: string;
  dias: string;
  traslado: string[];
  faq: { q: string; a: string };
  extra?: PaqueteEnlace[];
  ciudad?: string;
}

const COMBOS: Combo[] = [
  {
    slug: "viaje-a-italia-y-francia",
    titulo: "Viaje a Italia y Francia desde Lima",
    h1: "Viaje a Italia y Francia desde Lima",
    migas: "Italia y Francia",
    paises: ["Italia", "Francia"],
    foto: "/images/destinos/paris.webp",
    fotoAlt: "Torre Eiffel en París",
    bajada: "Roma, Florencia y Venecia con París y la Costa Azul: la combinación más pedida de Europa, en circuitos con guía en español.",
    dias: "Con 15 a 17 días ves lo principal de los dos países sin correr.",
    traslado: ["Roma–París en avión: cerca de 2 horas de vuelo.", "Milán–París en tren: unas 7 horas.", "En los circuitos, el bus cruza por Niza y la Costa Azul."],
    faq: { q: "¿Necesito visa para Italia y Francia?", a: "No. Los dos son parte del espacio Schengen y los peruanos entran sin visa para turismo de hasta 90 días en total." },
  },
  {
    slug: "viaje-a-italia-y-espana",
    titulo: "Viaje a Italia y España desde Lima",
    h1: "Viaje a Italia y España desde Lima",
    migas: "Italia y España",
    paises: ["Italia", "España"],
    foto: "/images/destinos/barcelona.webp",
    fotoAlt: "Sagrada Familia en Barcelona",
    bajada: "Empiezas en Madrid, donde llegan los vuelos directos desde Lima, y sigues a Barcelona, Roma, Florencia y Venecia.",
    dias: "Lo justo son 15 días; con 17 a 19 sumas Francia o Suiza.",
    traslado: ["Lima–Madrid tiene vuelos directos todos los días.", "Barcelona–Roma en avión: cerca de 2 horas.", "Puedes volver a Lima desde Madrid o desde Roma con conexión."],
    faq: { q: "¿Conviene entrar por Madrid o por Roma?", a: "Por Madrid: hay vuelos directos desde Lima y sale más barato. Entre España e Italia viajas en avión o en el bus del circuito." },
  },
  {
    slug: "viaje-espana-italia-y-francia",
    titulo: "Viaje a España, Italia y Francia",
    h1: "Viaje a España, Italia y Francia desde Lima",
    migas: "España, Italia y Francia",
    paises: ["Italia", "España", "Francia"],
    foto: "/images/destinos/roma.jpg",
    fotoAlt: "Coliseo de Roma",
    bajada: "El clásico Eurotrip de los peruanos: Madrid, Barcelona, París, la Costa Azul, Roma, Florencia y Venecia en un solo viaje.",
    dias: "Son 16 a 19 días con guía en español; los de 17 días suman Suiza.",
    traslado: ["Llegas a Madrid en vuelo directo desde Lima.", "Entre ciudades viajas en bus del circuito, con guía.", "El regreso a Lima suele ser desde Madrid."],
    faq: { q: "¿Cuántos días necesito para España, Italia y Francia?", a: "Al menos 16 días. Los circuitos de 17 a 19 días incluyen además Suiza o Lourdes." },
  },
  {
    slug: "viaje-a-italia-y-suiza",
    titulo: "Viaje a Italia y Suiza desde Lima",
    h1: "Viaje a Italia y Suiza desde Lima",
    migas: "Italia y Suiza",
    paises: ["Italia", "Suiza"],
    foto: "/images/destinos/suiza-alpes.jpg",
    fotoAlt: "Alpes suizos",
    bajada: "De Venecia y Milán a Lucerna y Zúrich: Italia y los Alpes en un mismo viaje.",
    dias: "Con 17 días ves Italia, Suiza y además España y Francia.",
    traslado: ["Milán–Zúrich en tren: unas 3 horas y media.", "Los circuitos cruzan los Alpes en bus por el norte de Italia.", "Suiza no usa euro: lleva francos suizos o tarjeta."],
    faq: { q: "¿Suiza es Schengen?", a: "Sí. Aunque no es de la Unión Europea, Suiza es parte del espacio Schengen: entras sin visa con tu pasaporte peruano." },
    extra: paquetesDe(["salida-garantizada-lagos-del-norte-8-noches"]),
  },
  {
    slug: "viaje-a-italia-y-grecia",
    titulo: "Viaje a Italia y Grecia desde Lima",
    h1: "Viaje a Italia y Grecia desde Lima",
    migas: "Italia y Grecia",
    paises: ["Grecia"],
    ciudad: "Atenas",
    foto: "/images/destinos/atenas-acropolis.jpg",
    fotoAlt: "Acrópolis de Atenas",
    bajada: "Roma y las islas griegas: armamos el viaje uniendo un programa por Italia con uno por Grecia, con el vuelo entre los dos.",
    dias: "Con 12 a 15 días haces una semana en cada país.",
    traslado: ["Roma–Atenas en avión: unas 2 horas y media.", "Desde Atenas salen los ferris y cruceros a Mykonos y Santorini.", "Grecia e Italia usan euro y son Schengen."],
    faq: { q: "¿Hay un circuito que haga Italia y Grecia juntos?", a: "Los circuitos del mayorista van por separado. Unimos uno de Italia con uno de Grecia y te cotizamos el vuelo entre Roma y Atenas." },
    extra: paquetesDe(["salida-garantizada-italia-clasica-un-viaje-a-traves-del-tiempo-9-noches", "viaje-pasion-italiana-y-el-mediterraneo-abordo-del-crucero-costa-esmer-16-noches"]),
  },
];

function landingCombo(c: Combo): LandingItalia | null {
  const circuitos = circuitosCon(c.paises, 6, c.ciudad);
  const paquetes = [...(c.extra ?? []), ...circuitos.map(enlace)];
  if (!paquetes.length) return null;
  const precio = Math.min(...paquetes.map((p) => p.precio ?? Infinity));
  const nombre = c.migas;
  const mensaje = `¡Hola Cityland Travel! Quiero cotizar un viaje a ${nombre} saliendo de Lima.`;
  return {
    slug: c.slug,
    grupo: "combinado",
    tituloSeo: c.titulo,
    descripcion: `${c.h1}: ${paquetes.length} programas desde ${formatoUSD(precio)}. ${c.dias} Separa con el 50%.`,
    h1: c.h1,
    bajada: c.bajada,
    migas: nombre,
    sello: "Combina países",
    foto: c.foto,
    fotoAlt: c.fotoAlt,
    precio,
    etiquetaPrecio: "Programa por persona",
    detallePrecio: "El más económico de la lista; revisa si incluye vuelo.",
    mensaje,
    boton: "Cotizar este viaje",
    secciones: [
      { id: "dias", titulo: "¿Cuántos días necesitas?", texto: [c.dias] },
      { id: "entre-paises", titulo: "Cómo te mueves entre países", lista: c.traslado },
    ],
    paquetes,
    pregunta: `¿Qué programa de ${nombre} me recomiendas para viajar en pareja?`,
    faqs: [c.faq, TERRESTRE, PAGO],
    enlaces: ENLACES,
  };
}

function lunaDeMiel(): LandingItalia {
  const circuitos = circuitosCon(["Italia"], 3).map(enlace);
  const paquetes = [
    ...paquetesDe(["fly-y-drive-costa-amalfitana-7-noches", "fly-y-drive-toscana-7-noches", "italia-en-tren-veneto-7-noches", "salida-garantizada-lagos-del-norte-8-noches"]),
    ...circuitos,
  ];
  const precio = Math.min(...paquetes.map((p) => p.precio ?? Infinity));
  return {
    slug: "luna-de-miel-en-italia",
    grupo: "combinado",
    tituloSeo: "Luna de miel en Italia desde Lima",
    descripcion: `Luna de miel en Italia: Costa Amalfitana, Toscana, Venecia y los lagos del norte, desde ${formatoUSD(precio)} por persona. Programas en tren, auto o con guía.`,
    h1: "Luna de miel en Italia",
    bajada: "Costa Amalfitana, Toscana, Venecia o los lagos del norte: elige el estilo de su viaje, en tren, en auto o en grupo con guía.",
    migas: "Luna de miel en Italia",
    sello: "Viaje en pareja",
    foto: "/images/destinos/venecia.jpg",
    fotoAlt: "Canal de Venecia con góndolas",
    precio,
    etiquetaPrecio: "Programa por persona",
    detallePrecio: "Sin vuelo; te cotizamos el pasaje de los dos.",
    mensaje: "¡Hola Cityland Travel! Queremos cotizar nuestra luna de miel en Italia.",
    boton: "Cotizar nuestra luna de miel",
    secciones: [
      {
        id: "estilos",
        titulo: "Tres formas de vivirla",
        lista: [
          "En auto (Fly & Drive): manejan a su ritmo por la Toscana o la Costa Amalfitana, con hoteles reservados.",
          "En tren: Roma, Florencia y Venecia con los trenes rápidos, sin manejar.",
          "Con guía: un circuito en grupo, en español, si prefieren no organizar nada.",
        ],
        estilo: "tarjetas",
      },
      {
        id: "cuando",
        titulo: "La mejor época",
        texto: ["Mayo, junio y septiembre: buen clima, días largos y menos gente que en julio y agosto. Para Venecia y Roma con menos calor, abril y octubre."],
      },
    ],
    paquetes,
    pregunta: "Nos casamos pronto. ¿Qué programa de Italia nos recomiendas para 10 días?",
    faqs: [
      { q: "¿Cuántos días necesitamos para una luna de miel en Italia?", a: "Entre 10 y 14 días con los vuelos: una semana en una región (Toscana o Costa Amalfitana) y unos días en Roma o Venecia." },
      { q: "¿Necesitamos licencia internacional para el Fly & Drive?", a: "En Italia te piden tu licencia peruana junto con el permiso internacional de conducir. Tramítenlo antes de viajar." },
      PAGO,
    ],
    enlaces: ENLACES,
  };
}

export function landingsCombinados(): LandingItalia[] {
  return [lunaDeMiel(), ...COMBOS.map(landingCombo).filter((l): l is LandingItalia => l !== null)];
}
