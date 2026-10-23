// Textos propios para /paquetes-migratorios/[slug], armados con los datos de cada ciudad del catalogo.
import {
  CATALOGO_PAQUETES_MIGRATORIOS_1000,
  type DatosSuperLandingMigratorio,
  type ResumenSuperLanding,
} from "@/lib/catalogo-paquetes-migratorios-1000";
import {
  extraerMes,
  hashTexto,
  minuscula,
  notaDelMes,
  pistaRequisitos,
  sinPuntoFinal,
  type FaqUnica,
} from "@/lib/contenido-unico";

type Enlace = DatosSuperLandingMigratorio["enlacesRelacionados"][number];

// Cada mes se asocia al plan que la propia pagina publica para esa temporada.
const PLAN_POR_MES: Record<string, string> = {
  enero: "899",
  febrero: "899",
  marzo: "699",
  abril: "699",
  mayo: "699",
  junio: "799",
  julio: "999",
  agosto: "999",
  septiembre: "799",
  octubre: "799",
  noviembre: "799",
  diciembre: "999",
};

const NOMBRE_PLAN: Record<string, string> = {
  "699": "Plan Promo",
  "799": "Plan Smart",
  "899": "Plan Plus",
  "999": "Plan Full",
};

type Angulo =
  | "sin-carta"
  | "con-carta"
  | "entrando-madrid"
  | "separar"
  | "primer-viaje"
  | "requisitos"
  | "salidas"
  | "pareja-familia"
  | "ospitalita"
  | "desde-peru"
  | "plan"
  | "guia"
  | "general";

function detectarAngulo(slug: string): Angulo {
  if (slug.startsWith("guia-")) return "guia";
  if (slug.startsWith("desde-")) return "desde-peru";
  if (/sin-carta/.test(slug)) return "sin-carta";
  if (/con-(carta|lettera|invitacion)/.test(slug)) return "con-carta";
  if (/entrando-por-madrid/.test(slug)) return "entrando-madrid";
  if (/separar-con-50/.test(slug)) return "separar";
  if (/ospitalita/.test(slug)) return "ospitalita";
  if (/primer-viaje/.test(slug)) return "primer-viaje";
  if (/requisitos/.test(slug)) return "requisitos";
  if (/salidas-/.test(slug)) return "salidas";
  if (/pareja|familia/.test(slug)) return "pareja-familia";
  if (/plan-(promo|smart|plus|full)|paquete-(migratorio|smart|plus|full)/.test(slug)) return "plan";
  return "general";
}

function planDelSlug(slug: string): string {
  if (/full/.test(slug)) return "999";
  if (/plus/.test(slug)) return "899";
  if (/smart/.test(slug)) return "799";
  return "699";
}

function origenDesdeTitulo(titulo: string): string {
  const m = titulo.match(/Viajeros de (.+?)(?: \(|$)/);
  return m ? m[1] : "tu ciudad";
}

interface Contexto {
  angulo: Angulo;
  ciudad: string;
  pais: string;
  intro: string;
  faqAngulo: FaqUnica;
}

function construirContexto(d: DatosSuperLandingMigratorio): Contexto {
  const angulo = detectarAngulo(d.slug);
  const { ciudadDestino: ciudad, pais } = d;
  const mes = extraerMes(d.slug.replace(/^.*salidas-/, ""));
  const idPlan = angulo === "salidas" && mes ? PLAN_POR_MES[mes] : planDelSlug(d.slug);
  const plan = d.planes.find((p) => p.id === idPlan) ?? d.planes[0];
  const cinco = "pasaje de ida, retorno reservado en sistema, hotel, seguro de 30.000 € y check-in";

  let apertura: string;
  let faqAngulo: FaqUnica;

  switch (angulo) {
    case "sin-carta":
      apertura = `Si no tienes quién te envíe carta de invitación en ${ciudad}, el paquete incluye una reserva de hotel confirmada a tu nombre.`;
      faqAngulo = {
        q: `¿Necesito carta de invitación para viajar a ${ciudad}?`,
        a: `No. La carpeta incluye reserva de hotel confirmada en ${ciudad}; si más adelante consigues una carta, cuadramos las fechas del vuelo con ella.`,
      };
      break;
    case "con-carta":
      apertura = `Si un familiar te invita en ${ciudad}, ajustamos tu vuelo y tu retorno a las fechas exactas de su carta de invitación.`;
      faqAngulo = {
        q: `¿Qué fechas debe tener mi vuelo si me invitan en ${ciudad}?`,
        a: `Las mismas de la carta de invitación. Alineamos el pasaje de ida y el retorno reservado a esos días para que el expediente sea coherente.`,
      };
      break;
    case "entrando-madrid":
      apertura = `Para ir a ${ciudad} entras al espacio Schengen por Madrid-Barajas, donde el control migratorio se hace en español.`;
      faqAngulo = {
        q: `¿Por qué entrar por Madrid-Barajas para viajar a ${ciudad}?`,
        a: `Porque el primer control migratorio se hace en Madrid, en español, y desde allí continúas a ${ciudad}. Tu carpeta lleva ${cinco}.`,
      };
      break;
    case "separar":
      apertura = `Puedes separar tu viaje a ${ciudad} con el 50% y completar el saldo en cuotas antes de la fecha de vuelo.`;
      faqAngulo = {
        q: `¿Cómo separo mi viaje a ${ciudad}?`,
        a: `Abonas el 50% de inicial en Los Olivos o por transferencia y programamos el resto antes de tu vuelo. La tarifa sigue sujeta a disponibilidad.`,
      };
      break;
    case "primer-viaje":
      apertura = `Si es tu primer viaje a ${pais}, te guiamos paso a paso con la carpeta migratoria completa para ${ciudad}.`;
      faqAngulo = {
        q: `¿Qué debo tener listo en mi primer viaje a ${ciudad}?`,
        a: `Cinco documentos: ${cinco}. Tu asesor te los entrega revisados y te orienta antes del embarque.`,
      };
      break;
    case "requisitos":
      apertura = `Estos son los requisitos que revisan al viajar a ${ciudad} (${pais}) desde Perú, reunidos en una sola carpeta para el aeropuerto.`;
      faqAngulo = {
        q: `¿Qué requisitos revisan para viajar a ${ciudad}?`,
        a: `Revisan ${cinco}. Los armamos a tu nombre y coherentes con tus fechas de viaje.`,
      };
      break;
    case "salidas": {
      const nombrePlan = NOMBRE_PLAN[idPlan] ?? "Plan Promo";
      apertura = `Para salir hacia ${ciudad} en ${mes ?? "la fecha elegida"}${mes ? ` (${notaDelMes(mes)})` : ""}, esta temporada corresponde al ${nombrePlan}.`;
      faqAngulo = {
        q: `¿Qué plan corresponde a una salida a ${ciudad} en ${mes ?? "esa fecha"}?`,
        a: `${nombrePlan}: ${minuscula(plan.fechasIdeales)}. Todos los planes incluyen los 5 documentos y se separan con el 50%.`,
      };
      break;
    }
    case "pareja-familia":
      apertura = `Si viajas en pareja o en familia a ${ciudad}, armamos la carpeta de todos los pasajeros en una sola gestión.`;
      faqAngulo = {
        q: `¿Puedo viajar a ${ciudad} en pareja o con mi familia en el mismo paquete?`,
        a: `Sí. Cada pasajero lleva su propia carpeta con ${cinco}, y coordinamos las fechas para que todos viajen juntos.`,
      };
      break;
    case "ospitalita":
      apertura = `Para ${ciudad} incluimos la guía de la Dichiarazione di Ospitalità, el aviso de hospedaje que debe presentarse dentro de las 48 horas.`;
      faqAngulo = {
        q: `¿Qué es la Dichiarazione di Ospitalità en ${ciudad}?`,
        a: `Es la declaración de hospedaje que se hace en Italia dentro de las 48 horas de tu llegada. Te dejamos una guía práctica para completarla.`,
      };
      break;
    case "desde-peru": {
      const origen = origenDesdeTitulo(d.tituloH1);
      apertura = `Si viajas desde ${origen}, coordinamos el vuelo a ${ciudad} y la carpeta por WhatsApp, sin que tengas que ir a Lima.`;
      faqAngulo = {
        q: `¿Puedo contratar desde ${origen} mi viaje a ${ciudad}?`,
        a: `Sí. Atendemos por WhatsApp desde todo el Perú y también en nuestra oficina de Los Olivos, en Lima.`,
      };
      break;
    }
    case "plan": {
      const nombrePlan = NOMBRE_PLAN[idPlan] ?? "Plan Promo";
      apertura = `Esta página detalla el ${nombrePlan} para ${ciudad}: ${minuscula(plan.fechasIdeales)}.`;
      faqAngulo = {
        q: `¿Para qué fechas sirve el ${nombrePlan} a ${ciudad}?`,
        a: `${plan.fechasIdeales}. Incluye ${cinco}.`,
      };
      break;
    }
    case "guia":
      apertura = `Guía rápida para ${ciudad}: ${sinPuntoFinal(minuscula(d.tituloH1))}.`;
      faqAngulo = {
        q: `¿Qué resuelve esta guía sobre ${ciudad}?`,
        a: `Explica en pocas líneas ${sinPuntoFinal(minuscula(d.tituloH1))} y cómo se integra a la carpeta con ${cinco}.`,
      };
      break;
    default:
      apertura = `Paquete migratorio a ${ciudad} (${pais}) con ${cinco}.`;
      faqAngulo = {
        q: `¿Qué incluye el paquete migratorio a ${ciudad}?`,
        a: `Incluye ${cinco}, todo a tu nombre y coherente con tus fechas de viaje.`,
      };
  }

  const llegada = `Llegas ${/^Aeropuerto/.test(d.aeropuertoLlegada) ? "al" : "por"} ${d.aeropuertoLlegada} con ${d.aerolineas}.`;
  const local = sinPuntoFinal(d.infoLlegadaCiudad.consejoLocal);
  return { angulo, ciudad, pais, intro: `${apertura} ${llegada} ${local}.`, faqAngulo };
}

function faqsUnicas(d: DatosSuperLandingMigratorio, ctx: Contexto): FaqUnica[] {
  const requisitos =
    d.pais.toLowerCase() === "españa"
      ? `${pistaRequisitos(d.pais)} En España además se acredita una bolsa de viaje de 122,10 € por día, con mínimo de 1.098,90 € por persona.`
      : (pistaRequisitos(d.pais) ??
        `Antes de emitir tu pasaje confirmamos contigo los requisitos de ingreso a ${d.pais} para viajeros peruanos.`);
  return [
    ctx.faqAngulo,
    {
      q: `¿Cómo llego del aeropuerto al centro de ${d.ciudadDestino}?`,
      a: `${sinPuntoFinal(d.infoLlegadaCiudad.comoLlegarCentro)}. Aeropuerto de llegada: ${d.aeropuertoLlegada}.`,
    },
    {
      q: `¿Qué piden para entrar a ${d.pais} desde Perú?`,
      a: requisitos,
    },
    {
      q: `¿Me garantizan el ingreso a ${d.pais}?`,
      a: `No. La decisión final es de las autoridades migratorias de ${d.pais}. Preparamos una carpeta completa y verificable para que viajes con respaldo.`,
    },
  ];
}

let indicePorCiudad: Map<string, ResumenSuperLanding[]> | null = null;
let indicePorPais: Map<string, ResumenSuperLanding[]> | null = null;

function obtenerIndices() {
  if (!indicePorCiudad || !indicePorPais) {
    indicePorCiudad = new Map();
    indicePorPais = new Map();
    for (const r of CATALOGO_PAQUETES_MIGRATORIOS_1000) {
      const kc = `${r.pais}|${r.ciudadDestino}`;
      indicePorCiudad.set(kc, [...(indicePorCiudad.get(kc) ?? []), r]);
      indicePorPais.set(r.pais, [...(indicePorPais.get(r.pais) ?? []), r]);
    }
  }
  return { ciudad: indicePorCiudad, pais: indicePorPais };
}

function aEnlace(r: ResumenSuperLanding): Enlace {
  return {
    titulo: r.titulo,
    href: `/paquetes-migratorios/${r.slug}`,
    ciudad: r.ciudadDestino,
    pais: r.pais,
    precioDesde: r.precioPromo,
  };
}

function enlacesContextuales(d: DatosSuperLandingMigratorio, semilla: number): Enlace[] {
  const { ciudad, pais } = obtenerIndices();
  const salida: Enlace[] = [];
  const vistos = new Set<string>([d.slug]);
  const agregar = (lista: ResumenSuperLanding[], max: number) => {
    if (!lista.length) return;
    const inicio = semilla % lista.length;
    let n = 0;
    for (let k = 0; k < lista.length && n < max; k++) {
      const r = lista[(inicio + k) % lista.length];
      if (vistos.has(r.slug)) continue;
      vistos.add(r.slug);
      salida.push(aEnlace(r));
      n++;
    }
  };
  agregar(ciudad.get(`${d.pais}|${d.ciudadDestino}`) ?? [], 2);
  const otrasCiudades = (pais.get(d.pais) ?? []).filter((r) => r.ciudadDestino !== d.ciudadDestino);
  agregar(otrasCiudades, 4 - salida.length);
  return salida.length >= 2 ? salida : d.enlacesRelacionados;
}

export function enriquecerLandingMigratorio(d: DatosSuperLandingMigratorio): DatosSuperLandingMigratorio {
  const ctx = construirContexto(d);
  const semilla = hashTexto(d.slug);
  return {
    ...d,
    ganchoPeruano: ctx.intro,
    faqs: faqsUnicas(d, ctx),
    enlacesRelacionados: enlacesContextuales(d, semilla),
  };
}
