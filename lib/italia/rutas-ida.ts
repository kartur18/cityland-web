import { formatoUSD } from "@/lib/formato-precio";
import { paquetesTuristicos } from "@/lib/paquetes-turisticos";
import { PROVINCIAS } from "@/lib/landings-espana-provincias";
import { CIUDADES_ITALIA, type CiudadItalia } from "@/lib/italia/ciudades";
import { CONSEJOS_PROVINCIA } from "@/lib/italia/consejos-provincia";
import { desdeLimaItalia, mesMasBarato, mesesLimaItalia } from "@/lib/italia/precios";
import type { LandingItalia, PaqueteEnlace, Seccion } from "@/lib/italia/tipos";

// Pasajes de Lima a cada ciudad de Italia y de cada ciudad del Perú a Italia (conexión en Lima).
// Lima–Roma, Lima–Milán, Lima–Turín, Lima–Génova, Lima–Pisa y Lima–Palermo ya tienen su página en /vuelos/.

const DESTINOS_DESDE_LIMA = ["venecia", "florencia", "napoles", "bolonia", "bari", "catania", "verona", "bergamo"];
const PROVINCIAS_A_ITALIA = ["arequipa", "cusco", "trujillo", "chiclayo", "piura", "iquitos", "tacna", "juliaca"];
// Rutas de provincia a Milán que ya están en Google (lib/paginas-fuertes.ts).
const VUELOS_PROVINCIA_MILAN = new Set(["trujillo", "tacna"]);

const LIMA_EUROPA = "unas 11 h 30 min a 12 h 30 min";

export function paquetesDe(slugs: string[]): PaqueteEnlace[] {
  const todos = paquetesTuristicos();
  return slugs.flatMap((s) => {
    const p = todos.find((x) => x.slug === s);
    return p ? [{ nombre: p.nombre, href: `/paquetes-turisticos/${p.slug}`, detalle: `${p.noches} noches`, precio: p.precio }] : [];
  });
}

export function seccionTraslados(c: CiudadItalia): Seccion {
  return {
    id: "traslado",
    titulo: `Del aeropuerto de ${c.nombre} al centro`,
    texto: [`Llegas a ${c.aeropuerto} (${c.iata}). Estas son las formas oficiales de llegar al centro, con su precio publicado:`],
    tabla: { cab: ["Cómo", "Boleto", "Tiempo"], filas: c.traslados.map((t) => [t.medio, t.precio, t.tiempo]) },
  };
}

const ENLACES_IDA = [
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
  { texto: "Pasajes Lima–Roma", href: "/vuelos/lima-roma" },
  { texto: "Pasajes Lima–Milán", href: "/vuelos/lima-milan" },
  { texto: "Requisitos para viajar a Italia", href: "/viajes/requisitos-viajar-a-italia-desde-peru" },
  { texto: "Circuitos por Europa", href: "/circuitos-por-europa" },
];

function landingDestino(c: CiudadItalia): LandingItalia {
  const meses = mesesLimaItalia(c.recargo);
  const precio = desdeLimaItalia(c.recargo);
  const barato = mesMasBarato(meses);
  const mensaje = `¡Hola Cityland Travel! Quiero cotizar pasajes de Lima a ${c.nombre} (Italia), ida y vuelta.`;
  return {
    slug: `pasajes-lima-${c.slug}`,
    grupo: "ida",
    tituloSeo: `Pasajes Lima–${c.nombre} desde ${formatoUSD(precio)}`,
    descripcion: `Pasajes de Lima a ${c.nombre} ida y vuelta desde ${formatoUSD(precio)}: ${c.escalas.toLowerCase()}, ${c.tiempoTotal} de viaje. Precio por mes, cómo llegar del aeropuerto al centro y qué hacer.`,
    h1: `Pasajes de Lima a ${c.nombre}, ida y vuelta`,
    bajada: `No hay vuelo directo: sales del Jorge Chávez, conectas en ${c.conexion} y aterrizas en ${c.aeropuerto}. En total, ${c.tiempoTotal}.`,
    migas: `Lima–${c.nombre}`,
    sello: `Pasajes a ${c.region}`,
    foto: c.foto,
    fotoAlt: c.fotoAlt,
    precio,
    etiquetaPrecio: "Ida y vuelta por persona",
    detallePrecio: `El mes más barato hoy: ${barato.mes.toLowerCase()}.`,
    mensaje,
    boton: "Cotizar mi pasaje",
    boleto: { de: "LIM", deNombre: "Lima", a: c.iata, aNombre: c.nombre },
    datos: [
      { k: "Tiempo total", v: c.tiempoTotal },
      { k: "Escalas", v: c.escalas },
      { k: "Aeropuerto", v: c.iata },
      { k: "Región", v: c.region },
    ],
    tramos: [
      { ruta: `Lima → ${c.conexion}`, detalle: `Vuelo nocturno transatlántico. Aerolíneas habituales: ${c.aerolineas}.`, duracion: LIMA_EUROPA },
      { ruta: `Conexión → ${c.nombre}`, detalle: `Vuelo europeo hasta ${c.aeropuerto}. Si el boleto es uno solo, tu maleta pasa directo hasta ${c.nombre}.`, duracion: "1 h 30 min a 2 h 30 min" },
    ],
    meses,
    tituloMeses: `Precio Lima–${c.nombre} por mes`,
    secciones: [
      seccionTraslados(c),
      { id: "que-hacer", titulo: `Qué hacer en ${c.nombre}`, lista: c.queHacer, estilo: "tarjetas" },
      {
        id: "documentos",
        titulo: "Lo que te piden para entrar a Italia",
        estilo: "aviso",
        texto: [
          "Los peruanos no necesitan visa para turismo de hasta 90 días en el espacio Schengen. Viajas con pasaporte vigente y en Migraciones te pueden pedir el pasaje de regreso, dónde te alojas y con cuánto dinero cuentas para tu estadía.",
        ],
      },
    ],
    paquetes: paquetesDe(c.paquetes),
    pregunta: `¿Cuánto me sale el pasaje de Lima a ${c.nombre} para viajar en ${barato.mes.toLowerCase()}?`,
    faqs: [
      { q: `¿Hay vuelo directo de Lima a ${c.nombre}?`, a: `No. Ninguna aerolínea vuela directo de Lima a Italia. Lo habitual es ${c.escalas.toLowerCase()}, con conexión en ${c.conexion}; el viaje completo toma ${c.tiempoTotal}.` },
      { q: `¿Cuánto cuesta el pasaje de Lima a ${c.nombre}?`, a: `Desde ${formatoUSD(precio)} ida y vuelta por persona en clase económica. Julio, agosto y diciembre son los meses más caros; ${barato.mes.toLowerCase()} es hoy el más barato.` },
      { q: `¿Cómo llego del aeropuerto de ${c.nombre} al centro?`, a: c.traslados.map((t) => `${t.medio}: ${t.precio}, ${t.tiempo}`).join(". ") + "." },
      { q: "¿Puedo pagar en partes?", a: "Sí. Separas con el 50% y pagas el saldo antes de la emisión, por transferencia, Yape, Plin o tarjeta." },
    ],
    enlaces: ENLACES_IDA,
  };
}

function landingProvincia(slug: string): LandingItalia | null {
  const p = PROVINCIAS.find((x) => x.slug === slug);
  const consejo = CONSEJOS_PROVINCIA[slug];
  if (!p || !consejo) return null;
  const meses = mesesLimaItalia(p.recargo);
  const precio = desdeLimaItalia(p.recargo);
  const destinos = ["roma", "milan", "venecia", "florencia", "napoles"].map((d) => CIUDADES_ITALIA[d]).filter(Boolean);
  const mensaje = `¡Hola Cityland Travel! Estoy en ${p.ciudad} y quiero cotizar pasajes a Italia, ida y vuelta.`;
  const enlaces = [...ENLACES_IDA];
  if (VUELOS_PROVINCIA_MILAN.has(slug)) enlaces.splice(1, 0, { texto: `Pasajes ${p.ciudad}–Milán`, href: `/vuelos/${slug}-milan` });
  return {
    slug: `pasajes-${slug}-italia`,
    grupo: "provincia",
    tituloSeo: `Pasajes de ${p.ciudad} a Italia desde ${formatoUSD(precio)}`,
    descripcion: `Pasajes de ${p.ciudad} a Italia en un solo boleto: ${p.ciudad}–Lima (${p.duracion}) y Lima–Europa. Ida y vuelta desde ${formatoUSD(precio)} a Roma; precios a Milán, Venecia, Florencia y Nápoles.`,
    h1: `Pasajes de ${p.ciudad} a Italia`,
    bajada: `Todos los vuelos a Europa salen de Lima. Desde ${p.ciudad} vuelas primero al Jorge Chávez (${p.duracion}) y ahí conectas: en un solo boleto, tu maleta pasa directo hasta Italia.`,
    migas: `${p.ciudad}–Italia`,
    sello: `Desde ${p.aeropuerto.replace("Aeropuerto ", "")}`,
    foto: CIUDADES_ITALIA.roma?.foto ?? "/images/destinos/roma.jpg",
    fotoAlt: "Coliseo de Roma, Italia",
    precio,
    etiquetaPrecio: `Ida y vuelta ${p.ciudad}–Roma por persona`,
    detallePrecio: `Incluye el tramo ${p.ciudad}–Lima en el mismo boleto.`,
    mensaje,
    boton: `Cotizar desde ${p.ciudad}`,
    boleto: { de: p.codigo, deNombre: p.ciudad, a: "FCO", aNombre: "Roma" },
    datos: [
      { k: `${p.ciudad}–Lima`, v: p.duracion },
      { k: "Lima–Europa", v: "11 h 30 min a 12 h 30 min" },
      { k: "Escalas", v: "Lima y una ciudad europea" },
      { k: "Suma el tramo nacional", v: `desde ${formatoUSD(p.recargo)}` },
    ],
    tramos: [
      { ruta: `${p.ciudad} → Lima`, detalle: `Sales de ${p.aeropuerto}. ${consejo.tramo}`, duracion: p.duracion },
      { ruta: "Lima → Madrid, Ámsterdam o París", detalle: "Vuelo transatlántico nocturno con Iberia, LATAM, Air Europa, KLM o Air France.", duracion: LIMA_EUROPA },
      { ruta: "Europa → Italia", detalle: "Vuelo corto a Roma, Milán u otra ciudad italiana.", duracion: "1 h 30 min a 2 h 30 min" },
    ],
    meses,
    tituloMeses: `Precio ${p.ciudad}–Roma por mes`,
    secciones: [
      {
        id: "a-que-ciudad",
        titulo: `¿A qué ciudad de Italia te conviene llegar desde ${p.ciudad}?`,
        texto: ["Roma y Milán tienen más vuelos y suelen salir más baratos. A las demás ciudades se llega con una conexión más corta en Europa."],
        tabla: {
          cab: ["Destino", "Ida y vuelta desde", "Aeropuerto"],
          filas: destinos.map((d) => [d.nombre, `desde ${formatoUSD(desdeLimaItalia(p.recargo + d.recargo))}`, `${d.aeropuerto} (${d.iata})`]),
        },
      },
      { id: "consejo", titulo: consejo.titulo, texto: consejo.texto },
    ],
    paquetes: paquetesDe(["salida-garantizada-italia-clasica-un-viaje-a-traves-del-tiempo-9-noches", "italia-en-tren-lacio-7-noches", "italia-en-tren-lombardia-7-noches"]),
    pregunta: `Estoy en ${p.ciudad}. ¿Cuánto me sale ir a Italia con el vuelo a Lima incluido?`,
    faqs: [
      { q: `¿Hay vuelo directo de ${p.ciudad} a Italia?`, a: `No. Primero vuelas de ${p.ciudad} a Lima (${p.duracion}) y en Lima tomas el vuelo a Europa. Con un solo boleto la aerolínea te protege la conexión si el primer vuelo se atrasa.` },
      { q: `¿Cuánto cuesta el pasaje de ${p.ciudad} a Italia?`, a: `Desde ${formatoUSD(precio)} ida y vuelta a Roma por persona, con el tramo ${p.ciudad}–Lima incluido. El vuelo nacional suele sumar desde ${formatoUSD(p.recargo)} al precio desde Lima.` },
      consejo.faq,
      { q: "¿Puedo pagar en partes?", a: "Sí. Separas con el 50% y pagas el saldo antes de la emisión. Te mandamos el boleto al celular." },
    ],
    enlaces,
  };
}

export function landingsRutasIda(): LandingItalia[] {
  const destinos = DESTINOS_DESDE_LIMA.map((s) => CIUDADES_ITALIA[s]).filter(Boolean).map(landingDestino);
  const provincias = PROVINCIAS_A_ITALIA.map(landingProvincia).filter((l): l is LandingItalia => l !== null);
  return [...destinos, ...provincias];
}
