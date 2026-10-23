// Textos propios para las landings de /madrid/[slug], armados solo con los datos de cada entrada del catalogo.
import type { DatosLandingMadridSEO } from "@/components/MadridMigratorioTemplate";
import { INDICE_MADRID_10K, type ResumenLandingMadrid } from "@/lib/catalogo-madrid-10k";
import {
  bolsaBoe,
  elegir,
  extraerDias,
  extraerMes,
  hashTexto,
  minuscula,
  notaDelMes,
  sinPuntoFinal,
  type FaqUnica,
} from "@/lib/contenido-unico";

// Descriptor de cada zona (mismos textos del catalogo de zonas).
const CONEXION_ZONA: Record<string, string> = {
  "Madrid Centro": "Terminal T4 / T1 Madrid-Barajas",
  "Puente de Vallecas (Madrid)": "Conexión directa desde Madrid-Barajas",
  "Carabanchel (Madrid)": "Zona Sur de Madrid · Comunidad Peruana",
  "Usera (Madrid)": "Madrid Río y Usera · Conexión Barajas",
  "Ciudad Lineal (Madrid)": "A 15 minutos de Madrid-Barajas",
  "Latina y Aluche (Madrid)": "Conexión directa desde Madrid-Barajas",
  "Villaverde (Madrid)": "Cercanías Renfe desde Barajas T4",
  "Tetuán y Cuatro Caminos": "Eje Castellana y Nuevos Ministerios",
  "San Blas-Canillejas": "Distrito contiguo a Madrid-Barajas",
  "Hortaleza (Madrid)": "A 10 minutos de Barajas T4",
  "Alcalá de Henares": "Corredor del Henares · A 20 min de Barajas",
  "Móstoles (Madrid)": "Área Metropolitana Sur de Madrid",
  "Fuenlabrada (Madrid)": "Conexión Cercanías desde Atocha y Barajas",
  "Leganés (Madrid)": "Área Metropolitana Sur de Madrid",
  "Getafe (Madrid)": "Conexión directa desde Madrid-Barajas",
  "Alcorcón (Madrid)": "Metro Línea 10 y Cercanías Madrid",
  "Parla (Madrid)": "Cercanías C4 directo desde Madrid",
  "Torrejón de Ardoz": "A 12 minutos de Madrid-Barajas",
  "Alcobendas y San Sebastián": "Junto a la Terminal T4 de Barajas",
  "Coslada y San Fernando": "Acceso inmediato desde Barajas T1 y T4",
  "Pozuelo y Majadahonda": "Zona Noroeste de Madrid",
  "Las Rozas y Villalba": "Sierra Noroeste de Madrid",
  "Rivas y Arganda del Rey": "Sureste de la Comunidad de Madrid",
  "Aranjuez y Valdemoro": "Eje Sur de la Comunidad de Madrid",
  "Toledo vía Madrid": "Llegada a Barajas + 33 min en tren AVE",
  "Guadalajara vía Madrid": "A 30 minutos de Madrid-Barajas",
  "Segovia y Ávila vía Madrid": "Conexión desde Madrid-Chamartín",
  "Valladolid vía Madrid": "Llegada por Barajas + tren alta velocidad",
  "Salamanca vía Madrid": "Ingreso por Madrid-Barajas + conexión",
  "Burgos vía Madrid": "Vuelo a Madrid-Barajas + enlace norte",
  "León y Zamora vía Madrid": "Vuelo Lima – Madrid + conexión directa",
  "Zaragoza vía Madrid": "Llegada a Madrid + 1h15 en tren AVE",
  "Valencia vía Madrid": "Ingreso por Madrid-Barajas + conexión",
  "Alicante vía Madrid": "Ruta vía Madrid-Barajas a Costa Blanca",
  "Murcia vía Madrid": "Conexión directa desde Madrid-Barajas",
  "Sevilla vía Madrid": "Vuelo a Madrid-Barajas + enlace Andalucía",
  "Málaga vía Madrid": "Llegada por Madrid + Costa del Sol",
  "Córdoba y Granada vía Madrid": "Ruta Lima – Madrid + enlace Andalucía",
  "Bilbao vía Madrid": "Vuelo Lima – Madrid – Bilbao con PNR",
  "San Sebastián vía Madrid": "Conexión al País Vasco vía Barajas",
  "Santander vía Madrid": "Ruta aérea Lima – Madrid – Santander",
  "Asturias (Gijón/Oviedo) vía Madrid": "Conexión a Asturias vía Madrid-Barajas",
  "Galicia (Vigo/A Coruña) vía Madrid": "Conexión a Galicia vía Barajas T4",
  "Pamplona vía Madrid": "Ingreso por Madrid-Barajas a Navarra",
  "Logroño vía Madrid": "Conexión a La Rioja vía Madrid",
  "Albacete y Ciudad Real vía Madrid": "Conexión a Castilla-La Mancha",
  "Cáceres y Badajoz vía Madrid": "Conexión a Extremadura desde Madrid",
  "Mallorca e Ibiza vía Madrid": "Vuelo Lima – Madrid – Islas Baleares",
  "Tenerife y Canarias vía Madrid": "Vuelo Lima – Madrid – Islas Canarias",
  "Barcelona vía Madrid": "Conexión aérea o tren AVE desde Madrid",
};

// Frase por servicio (clave = slug del servicio en el catalogo).
const FRASE_SERVICIO: [string, string][] = [
  ["paquete-solo-ida-migratorio", "arma el pasaje de ida, el retorno reservado, el hotel y el seguro en una sola carpeta"],
  ["reserva-retorno-rf", "deja activa la reserva de retorno MAD → LIM 24 horas antes de tu control migratorio"],
  ["reserva-hotel-verificable", "te da un voucher de hotel verificable calibrado a los días que vas a declarar"],
  ["carpeta-migratoria-completa-sin-vuelo", "sirve si ya tienes pasaje y solo necesitas retorno, hotel, seguro y check-in"],
  ["seguro-medico-schengen", "entrega la póliza de 30.000 € en español, lista para mostrar en el control"],
  ["maleta-adicional", "agrega una maleta de 23 kg en bodega a tu pasaje a Madrid"],
  ["checkin-y-asignacion", "incluye el check-in hecho por tu asesor, la elección de asiento y la revisión de tu carpeta"],
  ["reprogramacion-cambio-fecha", "gestiona el cambio de fecha de un pasaje ya emitido, según las condiciones de la aerolínea"],
  ["vuelo-directo-iberia", "emite tu vuelo directo con Iberia y llegas por la Terminal T4"],
  ["vuelo-directo-air-europa", "emite tu vuelo directo con Air Europa y llegas por la Terminal T1"],
  ["vuelo-plus-ultra", "emite tu boleto con Plus Ultra, con la franquicia de equipaje que indique la tarifa"],
  ["vuelo-latam", "emite tu boleto confirmado con LATAM hacia Madrid"],
  ["boleto-madrid-a-lima-solo-ida", "emite el boleto solo ida de Madrid a Lima"],
  ["boleto-madrid-lima-madrid", "emite el boleto de ida y vuelta Madrid – Lima – Madrid con fechas confirmadas"],
  ["pasaje-lima-madrid-con-visa-de-trabajo", "es la tarifa de solo ida para quien viaja con visado de trabajo"],
  ["pasaje-lima-madrid-con-visa-de-estudios", "es la tarifa de solo ida para quien viaja con visado de estudios"],
  ["pasaje-lima-madrid-reagrupacion", "es la tarifa de solo ida para reagrupación familiar"],
  ["asesoria-carta-invitacion", "alinea el pasaje y el retorno con las fechas exactas de tu Carta de Invitación"],
  ["asesoria-bolsa-de-viaje-boe", "calibra los días de estadía a la bolsa de viaje que exige el BOE"],
  ["paquete-familiar-4-a-6", "reúne a 4 a 6 pasajeros de una misma familia en una tarifa grupal"],
  ["viaje-madrid-con-escala-bogota", "arma la ruta Lima – Madrid con escala en Bogotá (Avianca)"],
  ["viaje-madrid-con-conexion-barcelona", "combina Madrid con una conexión a Barcelona"],
  ["viaje-madrid-con-conexion-roma", "combina Madrid con una conexión a Italia"],
  ["viaje-madrid-con-conexion-paris", "combina Madrid con una conexión a París"],
];

const EXPLICA_VARIANTE: Record<string, string> = {
  "Emisión Oficial PNR": "el código PNR sale a tu nombre en el sistema de la aerolínea",
  "Separa con 50%": "congelas la tarifa con el 50% y completas el saldo antes del vuelo",
  "Sede Los Olivos": "te atendemos en persona en Av. Antúnez de Mayolo 814, Los Olivos",
  "Atención WhatsApp": "coordinas todo por WhatsApp al +51 944 103 890",
  "Tarifa Preventa": "la tarifa de preventa está sujeta a disponibilidad",
};

const FRASE_PERFIL: [string, string][] = [
  ["Visita Familiar", "tu pasaje y tu retorno se calibran a las fechas exactas de la Carta de Invitación de tu familiar"],
  ["Primer Viaje con Reserva", "al viajar sin carta, el expediente incluye una reserva de hotel verificable"],
  ["Paquete Migratorio + Retorno", "el retorno RF queda activo 24 horas antes y se acompaña de hotel y seguro"],
  ["Padres y Adultos", "se pide asistencia especial en Jorge Chávez y en Barajas, y el check-in lo hace el asesor"],
  ["Parejas y Esposos", "se buscan asientos juntos y una habitación doble verificable"],
  ["Hijos Menores", "se buscan asientos contiguos y se orienta sobre el permiso notarial de menores"],
  ["Estudiantes", "es un boleto pensado para quienes viajan con visado de estudios"],
  ["Visa de Trabajo", "es un boleto para quienes ya tienen visado de trabajo aprobado"],
  ["Comprado desde España", "el pasaje se compra desde España para traer a tus familiares desde el Perú"],
  ["Solo Reserva", "se contratan solo la reserva de hotel y el retorno RF, sin pasaje"],
];

interface Ctx {
  slug: string;
  semilla: number;
  destino: string;
  terminal: string;
  aerolinea: string;
  retornoMadLima: boolean;
  dias: number | null;
  mes: string | null;
  intro: string;
  faq2: FaqUnica;
}

function sufijoDesde(texto: string): string {
  return sinPuntoFinal(texto.replace(/\s+Desde\s+\$.*$/i, ""));
}

function construirCtx(d: DatosLandingMadridSEO): Ctx {
  const semilla = hashTexto(d.slug);
  const subtitulo = sufijoDesde(d.subtituloDorado);
  const base = {
    slug: d.slug,
    semilla,
    terminal: d.terminalBarajas,
    aerolinea: d.aerolineaDestacada,
    retornoMadLima: d.codigoRuta.startsWith("MAD"),
  };

  if (d.silo === "barajas-rutas") {
    const zona = d.zonaOMunicipioMadrid;
    const conexion = CONEXION_ZONA[zona] ?? "acceso desde Madrid-Barajas";
    const descMod = sinPuntoFinal(d.resumenEjecutivo.split(". Operado con")[0]);
    return {
      ...base,
      destino: zona,
      dias: null,
      mes: null,
      intro: `${zona} — ${conexion}. En la modalidad ${subtitulo}, ${minuscula(descMod)}. Con ${d.aerolineaDestacada} llegas por la ${d.terminalBarajas} y tu asesor hace el check-in.`,
      faq2: {
        q: `¿Qué incluye ${subtitulo} hacia ${zona} con ${d.aerolineaDestacada}?`,
        a: `${descMod}. Para ${zona}: ${conexion}.`,
      },
    };
  }

  if (d.silo === "estadias-boe-madrid") {
    const [producto, estadia] = sinPuntoFinal(d.tituloPrincipal).split(" — ");
    const detalle = sinPuntoFinal(d.resumenEjecutivo.split(". Emitimos")[0]);
    const dias = extraerDias(estadia ?? "");
    const esEstadia = /^Estadía/i.test(estadia ?? "") && dias !== null;
    const bolsa = dias !== null && esEstadia ? bolsaBoe(dias) : null;
    const frase = bolsa
      ? `Con ${dias} días declarados, la referencia de medios económicos es de ${bolsa} por persona.`
      : `${estadia ?? "Esta salida"} se arma con retorno activo, alojamiento verificable y seguro Schengen de 30.000 €.`;
    return {
      ...base,
      destino: "Madrid",
      dias: esEstadia ? dias : null,
      mes: extraerMes(estadia ?? ""),
      intro: `${estadia}: ${detalle}. ${frase} Contratas ${producto ?? "tu servicio"} con la modalidad ${subtitulo}.`,
      faq2: bolsa
        ? {
            q: `¿Qué bolsa de viaje corresponde a ${estadia}?`,
            a: `La regla del BOE es de 122,10 € por día con mínimo de 1.098,90 € por persona; para ${dias} días la referencia es ${bolsa}. Ajustamos tus fechas para que cuadren con tu presupuesto.`,
          }
        : {
            q: `¿Cómo se arma ${producto ?? "el servicio"} con ${estadia ?? "esta salida"}?`,
            a: `${detalle}. Alineamos pasaje, retorno y alojamiento a esa condición y te entregamos la carpeta lista para Lima y Barajas.`,
          },
    };
  }

  if (d.silo === "rutas-espana-barajas") {
    const ruta = d.zonaOMunicipioMadrid;
    const mes = extraerMes(d.modalidadClave) ?? "";
    const paradas = ruta
      .replace(/^Madrid(,| y)?\s*/i, "")
      .replace(/\s*\(Barajas\)\s*/i, "")
      .trim();
    const tramo = paradas
      ? `desde Madrid continúas a ${paradas}`
      : "te quedas en Madrid, sin tramos adicionales";
    return {
      ...base,
      destino: ruta,
      dias: null,
      mes,
      intro: `Viajar en ${mes}: ${notaDelMes(mes)}. En la ruta ${ruta} sales de Lima (LIM), ingresas por Madrid-Barajas y ${tramo}. Eliges la opción «${subtitulo}» y fijas tu tarifa con el 50%.`,
      faq2: {
        q: `¿Cómo se organiza la ruta ${ruta} en ${mes}?`,
        a: `Sales del Aeropuerto Jorge Chávez, ingresas por Madrid-Barajas y ${tramo}. En ${mes} (${notaDelMes(mes)}) conviene reservar con anticipación.`,
      },
    };
  }

  if (d.silo === "comunidad-peruana-madrid") {
    const barrio = d.zonaOMunicipioMadrid.replace(/,\s*Madrid$/, "");
    const duracion = sinPuntoFinal(d.badgeSuperior.split(" · ")[1] ?? "");
    const dias = extraerDias(duracion);
    const perfilFrase = FRASE_PERFIL.find(([clave]) => subtitulo.includes(clave))?.[1] ?? "el expediente se adapta a tu situación";
    const bolsa = dias !== null ? bolsaBoe(dias) : null;
    return {
      ...base,
      destino: `${barrio} (Madrid)`,
      dias,
      mes: null,
      intro: `${barrio} es una zona de Madrid con comunidad peruana. En el perfil «${subtitulo}» ${perfilFrase}. Para la opción «${duracion}»${bolsa ? ` la referencia de bolsa BOE es de ${bolsa} por persona` : ""}.`,
      faq2: {
        q: `¿Cómo armo mi viaje a ${barrio} con el perfil «${subtitulo}»?`,
        a: `En este perfil ${perfilFrase}. Lo ajustamos a la opción «${duracion}» para que el expediente sea coherente.`,
      },
    };
  }

  // expediente-servicios-madrid
  const [servicio] = sinPuntoFinal(d.tituloPrincipal).split(" — ");
  const mes = extraerMes(d.tituloPrincipal) ?? "";
  const claveServicio = d.slug.replace(/^servicio-/, "");
  const fraseServicio =
    FRASE_SERVICIO.find(([clave]) => claveServicio.startsWith(clave))?.[1] ?? "se gestiona con código PNR real y respaldo formal";
  const explicaVariante = EXPLICA_VARIANTE[subtitulo] ?? "te acompañamos en todo el trámite";
  return {
    ...base,
    destino: "Madrid-Barajas",
    dias: null,
    mes,
    intro: `${servicio} para ${mes}: ${fraseServicio}. En ${mes} (${notaDelMes(mes)}) la modalidad ${subtitulo} significa que ${explicaVariante}.`,
    faq2: {
      q: `¿Cómo funciona ${minuscula(servicio)} para ${mes}?`,
      a: `Este servicio ${fraseServicio}. Con la modalidad ${subtitulo}, ${explicaVariante}.`,
    },
  };
}

function checklistUnica(ctx: Ctx, original: DatosLandingMadridSEO["checklistBarajas"]): DatosLandingMadridSEO["checklistBarajas"] {
  const s = ctx.semilla;
  const periodo = ctx.mes ? `tu salida de ${ctx.mes}` : ctx.dias ? `tus ${ctx.dias} días de estadía` : "tus fechas de viaje";
  const retorno = ctx.retornoMadLima
    ? `Como tu vuelo sale de Madrid-Barajas, dejamos el pasaje hacia Lima emitido con código PNR y la carpeta lista para presentar.`
    : elegir(
        [
          `Dejamos activa la reserva de retorno MAD → LIM para ${ctx.destino}; la revisan en Lima antes de embarcar y de nuevo en la ${ctx.terminal}.`,
          `Antes del vuelo activamos tu retorno MAD → LIM en el sistema, listo para mostrarlo en Lima y al llegar a la ${ctx.terminal}.`,
          `Con ${ctx.aerolinea} el retorno MAD → LIM queda activo 24 horas antes del embarque y verificable por la aerolínea y por migración.`,
        ],
        s,
      );
  const aloja = elegir(
    [
      `Si te alojas con un familiar cuadramos ${periodo} con su Carta de Invitación; si no, emitimos el voucher de hotel verificable para ${ctx.destino}.`,
      `Para ${ctx.destino} preparamos el alojamiento de ${periodo}: voucher de hotel verificable o ajuste exacto a tu Carta de Invitación.`,
      `El hospedaje se acredita por todos los días declarados; en ${ctx.destino} lo resolvemos con reserva de hotel o con tu carta, según ${periodo}.`,
    ],
    s,
    1,
  );
  const medios =
    ctx.dias !== null
      ? `Con ${ctx.dias} días la referencia oficial es de ${bolsaBoe(ctx.dias)} por persona (122,10 € por día, mínimo 1.098,90 €); calibramos tu estadía para que tu bolsa sea coherente.`
      : elegir(
          [
            `La regla es de 122,10 € por día con mínimo de 1.098,90 €; te ayudamos a elegir cuántos días declarar para ${periodo}.`,
            `Antes de emitir revisamos contigo los días de estadía de ${periodo} para que la bolsa de viaje encaje con tu presupuesto.`,
          ],
          s,
          2,
        );
  const seguro = elegir(
    [
      `Te entregamos la póliza oficial en español, lista para mostrar al llegar a la ${ctx.terminal}.`,
      `La póliza de 30.000 € sin deducible viaja contigo impresa o digital para el control de ${ctx.destino}.`,
    ],
    s,
    3,
  );
  const cuerpos = [retorno, aloja, medios, seguro];
  return original.map((item, i) => ({ ...item, comoTeAyudamos: cuerpos[i] ?? item.comoTeAyudamos }));
}

function faqsUnicas(ctx: Ctx): FaqUnica[] {
  const docs: FaqUnica = {
    q: `¿Qué documentos revisan al llegar a ${ctx.destino} por la ${ctx.terminal}?`,
    a: `Piden sustento de retorno, alojamiento, medios económicos y seguro médico de 30.000 €. Los peruanos entran a Schengen sin visa por turismo hasta 90 días.`,
  };
  const separar: FaqUnica = {
    q: `¿Puedo separar este viaje con el 50%?`,
    a: `Sí. Congelas la tarifa con el 50% en Los Olivos o por BCP, BBVA e Interbank y completas el saldo antes del vuelo. Es una tarifa referencial sujeta a disponibilidad.`,
  };
  const legal: FaqUnica = {
    q: `¿Me aseguran el ingreso a España?`,
    a: `No. La decisión final corresponde a las autoridades migratorias de España. Nosotros preparamos un expediente completo y verificable para que viajes con respaldo.`,
  };
  return [ctx.faq2, docs, separar, legal];
}

// Indice por eje (destino, modalidad, mes...) para enlazar hermanas realmente relacionadas.
let indicePorEje: Map<string, ResumenLandingMadrid[]> | null = null;

function ejesDe(r: ResumenLandingMadrid): string[] {
  const partes = r.modalidad.split(" · ");
  const ejes = partes.length > 1 ? partes : [r.zonaOMunicipio, r.modalidad];
  if (partes.length > 1 && r.silo === "rutas-espana-barajas") ejes.unshift(r.zonaOMunicipio);
  return ejes.map((e) => `${r.silo}|${e}`);
}

function obtenerIndice(): Map<string, ResumenLandingMadrid[]> {
  if (indicePorEje) return indicePorEje;
  const mapa = new Map<string, ResumenLandingMadrid[]>();
  for (const r of INDICE_MADRID_10K) {
    for (const eje of ejesDe(r)) {
      const lista = mapa.get(eje);
      if (lista) lista.push(r);
      else mapa.set(eje, [r]);
    }
  }
  indicePorEje = mapa;
  return mapa;
}

function claveDiversa(r: ResumenLandingMadrid): string {
  return r.titulo.replace(/\s+[—·]\s+.*$/, "").replace(/\s*\([^)]*\)$/, "");
}

function enlacesContextuales(d: DatosLandingMadridSEO, semilla: number): DatosLandingMadridSEO["enlacesRelacionados"] {
  const actual = INDICE_MADRID_10K.find((r) => r.slug === d.slug);
  if (!actual) return d.enlacesRelacionados;
  const indice = obtenerIndice();
  const vistos = new Set<string>([d.slug]);
  const clavesVistas = new Set<string>([claveDiversa(actual)]);
  const salida: DatosLandingMadridSEO["enlacesRelacionados"] = [];
  for (const eje of ejesDe(actual)) {
    const hermanas = (indice.get(eje) ?? []).filter((r) => r.slug !== d.slug);
    const inicio = hermanas.length ? semilla % hermanas.length : 0;
    let tomadas = 0;
    for (let k = 0; k < hermanas.length && tomadas < 3; k++) {
      const r = hermanas[(inicio + k) % hermanas.length];
      const clave = claveDiversa(r);
      if (vistos.has(r.slug) || clavesVistas.has(clave) || salida.length >= 8) continue;
      vistos.add(r.slug);
      clavesVistas.add(clave);
      tomadas++;
      salida.push({ titulo: r.titulo, href: `/madrid/${r.slug}`, precio: r.precioDesdeUSD });
    }
  }
  return salida.length >= 4 ? salida : d.enlacesRelacionados;
}

export function enriquecerLandingMadrid(d: DatosLandingMadridSEO): DatosLandingMadridSEO {
  const ctx = construirCtx(d);
  return {
    ...d,
    resumenEjecutivo: ctx.intro,
    checklistBarajas: checklistUnica(ctx, d.checklistBarajas),
    faqs: faqsUnicas(ctx),
    enlacesRelacionados: enlacesContextuales(d, ctx.semilla),
  };
}
