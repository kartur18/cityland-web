// Clima promedio aproximado por zona y mes (máximas y mínimas típicas, no un pronóstico), para que la persona sepa qué
// le espera en la fecha de su paquete armado y qué ropa llevar. 27-oct-2026.

export interface MesClima {
  t: string;
  txt: string;
}

export interface ZonaClima {
  id: string;
  nombre: string;
  meses: MesClima[]; // enero → diciembre
}

const m = (t: string, txt: string): MesClima => ({ t, txt });

const ZONAS: ZonaClima[] = [
  {
    id: "caribe",
    nombre: "el Caribe (República Dominicana, Jamaica e islas)",
    meses: [
      m("21–29 °C", "Temporada seca y de más demanda: sol casi todos los días y mar tranquilo."),
      m("21–29 °C", "Seco y soleado, con brisa fresca por las noches. Temporada alta."),
      m("22–29 °C", "Uno de los meses más secos del año; ideal para playa."),
      m("22–30 °C", "Sigue el buen clima; empieza a subir la humedad a fin de mes."),
      m("23–30 °C", "Llegan chubascos cortos por la tarde; el resto del día hay sol."),
      m("24–31 °C", "Calor húmedo. Empieza la temporada de huracanes, aunque en junio son raros."),
      m("24–31 °C", "Calor y lluvias breves. Temporada de huracanes: conviene viajar con seguro."),
      m("24–32 °C", "El mes más caluroso. Plena temporada de huracanes; el seguro de viaje es clave."),
      m("24–31 °C", "Pico de la temporada de huracanes: más lluvias y precios bajos."),
      m("23–31 °C", "Mes lluvioso, aunque hay muchas horas de sol entre chubascos."),
      m("22–30 °C", "Las lluvias bajan; la temporada de huracanes termina el 30 de noviembre."),
      m("21–29 °C", "Vuelve la temporada seca. Navidad y Año Nuevo son las fechas más pedidas."),
    ],
  },
  {
    id: "aruba",
    nombre: "Aruba",
    meses: [
      m("25–30 °C", "Seco, soleado y con viento constante que refresca."),
      m("25–30 °C", "Seco y ventoso. Temporada de Carnaval en la isla."),
      m("25–31 °C", "Muy seco; agua turquesa y cielo despejado."),
      m("26–31 °C", "Soleado y estable; buena época para snorkel."),
      m("26–32 °C", "Calor seco; Aruba casi no tiene lluvias."),
      m("27–32 °C", "Calor con brisa. Aruba está fuera del cinturón de huracanes."),
      m("27–32 °C", "Soleado y ventoso; buena opción para las vacaciones de julio."),
      m("27–33 °C", "El mes más caluroso, con menos viento."),
      m("27–33 °C", "Calor y poca lluvia; la isla casi no recibe huracanes."),
      m("27–32 °C", "Empieza la corta temporada de lluvias, con chubascos breves."),
      m("26–31 °C", "El mes más lluvioso, aunque llueve poco y rápido."),
      m("26–30 °C", "Lluvias breves al inicio del mes; luego vuelve el clima seco."),
    ],
  },
  {
    id: "cancun",
    nombre: "Cancún y la Riviera Maya",
    meses: [
      m("20–28 °C", "Seco y agradable; las noches pueden estar frescas."),
      m("20–29 °C", "Seco y soleado. Temporada alta."),
      m("21–30 °C", "Muy buen clima; mucha demanda por Semana Santa."),
      m("23–31 °C", "Calor seco. A veces llega sargazo a algunas playas."),
      m("24–32 °C", "Caluroso antes de las lluvias; posible sargazo."),
      m("25–32 °C", "Empiezan las lluvias y la temporada de huracanes."),
      m("25–33 °C", "Calor húmedo con lluvias cortas. Mucha demanda por vacaciones."),
      m("25–33 °C", "Calor fuerte y lluvias por la tarde; temporada de huracanes."),
      m("24–32 °C", "El mes más lluvioso y pico de huracanes; precios bajos."),
      m("23–31 °C", "Lluvias frecuentes; termina la época de más riesgo de huracanes."),
      m("22–30 °C", "Las lluvias bajan y vuelve el buen clima."),
      m("21–29 °C", "Seco y soleado. Navidad y Año Nuevo con mucha demanda."),
    ],
  },
  {
    id: "caribe-colombiano",
    nombre: "el Caribe colombiano (Cartagena, Santa Marta y San Andrés)",
    meses: [
      m("24–31 °C", "Temporada seca con brisa: el mejor clima del año."),
      m("24–31 °C", "Seco y ventoso; ideal para islas y playa."),
      m("25–31 °C", "Seco y soleado; mucha demanda en Semana Santa."),
      m("25–32 °C", "Fin de la temporada seca; empiezan algunos chubascos."),
      m("26–32 °C", "Primeras lluvias cortas por la tarde."),
      m("26–32 °C", "Calor húmedo con lluvias aisladas."),
      m("26–32 °C", "«Veranillo»: menos lluvias. Temporada alta por vacaciones."),
      m("26–32 °C", "Calor y lluvias por la tarde."),
      m("25–32 °C", "Lluvias más seguidas, sobre todo en la tarde."),
      m("25–31 °C", "El mes más lluvioso del año; los aguaceros duran poco."),
      m("25–31 °C", "Todavía llueve, pero cada vez menos."),
      m("24–31 °C", "Vuelve la brisa y la temporada seca; fiestas de fin de año."),
    ],
  },
  {
    id: "rio",
    nombre: "Río de Janeiro y la costa de Brasil",
    meses: [
      m("23–30 °C", "Pleno verano: playas llenas, calor y tormentas cortas por la tarde."),
      m("23–30 °C", "Verano y Carnaval; mucho calor y ambiente de fiesta."),
      m("23–29 °C", "Calor húmedo; termina el verano."),
      m("21–28 °C", "Otoño agradable, con menos lluvia."),
      m("20–26 °C", "Templado y seco; buen mes para pasear sin tanto calor."),
      m("18–25 °C", "Invierno suave; días soleados y noches frescas."),
      m("18–25 °C", "Invierno templado; lleva una casaca ligera para la noche."),
      m("18–25 °C", "Seco y fresco; buena visibilidad en el Cristo y el Pan de Azúcar."),
      m("19–25 °C", "Primavera; los días se ponen más cálidos."),
      m("20–26 °C", "Primavera con algunas lluvias."),
      m("21–27 °C", "Calor que sube y lluvias por la tarde."),
      m("22–29 °C", "Comienza el verano; Año Nuevo en Copacabana es de los más famosos."),
    ],
  },
  {
    id: "buenos-aires",
    nombre: "Buenos Aires",
    meses: [
      m("20–30 °C", "Verano caluroso; la ciudad está más tranquila."),
      m("19–29 °C", "Verano con noches agradables."),
      m("17–26 °C", "Fin del verano; buen clima para caminar."),
      m("14–22 °C", "Otoño templado; ideal para recorrer la ciudad."),
      m("10–19 °C", "Otoño fresco; lleva abrigo para la noche."),
      m("8–16 °C", "Invierno frío; días cortos."),
      m("7–15 °C", "El mes más frío; vacaciones de invierno en Argentina."),
      m("8–17 °C", "Frío que empieza a ceder."),
      m("10–19 °C", "Primavera fresca."),
      m("13–22 °C", "Primavera agradable; jacarandás en flor a fin de mes."),
      m("16–25 °C", "Primavera cálida, una de las mejores épocas."),
      m("18–28 °C", "Calor de inicio de verano y fiestas de fin de año."),
    ],
  },
  {
    id: "centroamerica",
    nombre: "Centroamérica",
    meses: [
      m("17–28 °C", "Temporada seca: días soleados y noches frescas en la montaña."),
      m("17–29 °C", "Seco y soleado; buena época para volcanes y ruinas."),
      m("18–30 °C", "Seco y caluroso en la costa."),
      m("19–31 °C", "Calor antes de las lluvias; Semana Santa muy vivida."),
      m("20–30 °C", "Empieza la temporada de lluvias."),
      m("20–29 °C", "Lluvias por la tarde; mañanas despejadas."),
      m("19–28 °C", "Lluvias por la tarde, paisajes muy verdes."),
      m("19–28 °C", "Lluvias por la tarde; mañanas con sol."),
      m("19–28 °C", "Uno de los meses más lluviosos."),
      m("19–28 °C", "Lluvioso; termina la temporada de lluvias."),
      m("18–28 °C", "Vuelve el clima seco."),
      m("17–28 °C", "Seco y fresco; fiestas de fin de año."),
    ],
  },
  {
    id: "europa",
    nombre: "Europa Occidental (España, Francia, Italia, Inglaterra)",
    meses: [
      m("1–11 °C", "Invierno: frío, días cortos y pocos turistas. Lleva casaca gruesa, gorro y guantes."),
      m("2–12 °C", "Frío de invierno; precios más bajos en hoteles."),
      m("5–16 °C", "Fin del invierno; mañanas frías y tardes agradables."),
      m("7–18 °C", "Primavera: flores y días más largos. Lleva capas y paraguas."),
      m("10–22 °C", "Primavera templada; de los mejores meses para caminar Europa."),
      m("14–27 °C", "Inicio del verano; días largos con luz hasta las 9 o 10 de la noche."),
      m("17–31 °C", "Verano caluroso, sobre todo en España e Italia; más turistas."),
      m("17–30 °C", "Pleno verano; mucho calor en el sur y ciudades llenas."),
      m("14–26 °C", "Fin del verano, clima agradable y menos gente."),
      m("10–20 °C", "Otoño templado con algunas lluvias."),
      m("5–14 °C", "Otoño frío y lluvioso; lleva abrigo."),
      m("2–11 °C", "Invierno y mercados de Navidad; frío y días cortos."),
    ],
  },
  {
    id: "nordicos",
    nombre: "los países nórdicos (Finlandia, Noruega e Islandia)",
    meses: [
      m("-12 a -3 °C", "Pleno invierno: nieve, pocas horas de luz y temporada de auroras boreales."),
      m("-12 a -3 °C", "Frío intenso y auroras boreales; ropa térmica obligatoria."),
      m("-8 a 1 °C", "Todavía invierno; buenas noches para ver auroras."),
      m("-3 a 6 °C", "Deshielo; los días se alargan rápido."),
      m("3–13 °C", "Primavera fresca."),
      m("8–18 °C", "Sol de medianoche: casi no oscurece."),
      m("11–21 °C", "Verano corto y agradable."),
      m("10–19 °C", "Verano fresco."),
      m("6–14 °C", "Otoño; vuelven las noches oscuras."),
      m("1–8 °C", "Otoño frío; primeras auroras."),
      m("-3 a 3 °C", "Frío y oscuro; empieza la nieve."),
      m("-8 a -1 °C", "Invierno, Navidad y la aldea de Papá Noel en Laponia."),
    ],
  },
  {
    id: "balcanes",
    nombre: "Grecia y los Balcanes",
    meses: [
      m("2–12 °C", "Invierno frío en los Balcanes y templado en Atenas."),
      m("3–13 °C", "Invierno; islas griegas casi sin turistas."),
      m("5–16 °C", "Fin del invierno; tardes agradables."),
      m("8–20 °C", "Primavera; empieza la temporada de cruceros por las islas."),
      m("13–25 °C", "Primavera cálida; el mar todavía está fresco."),
      m("17–30 °C", "Inicio del verano; ideal para islas griegas."),
      m("20–33 °C", "Verano caluroso; temporada alta en Santorini y Mykonos."),
      m("20–33 °C", "Pleno verano; mucho sol y mar tibio."),
      m("16–28 °C", "Fin del verano; menos gente y mar todavía cálido."),
      m("12–22 °C", "Otoño templado."),
      m("7–16 °C", "Otoño fresco y lluvioso."),
      m("3–12 °C", "Invierno."),
    ],
  },
  {
    id: "turquia",
    nombre: "Turquía",
    meses: [
      m("-2 a 9 °C", "Invierno: frío en Estambul y nieve en Capadocia."),
      m("-2 a 10 °C", "Frío; Capadocia nevada es un paisaje único."),
      m("1–13 °C", "Fin del invierno; días cada vez más templados."),
      m("5–18 °C", "Primavera; tulipanes en Estambul."),
      m("9–23 °C", "Primavera cálida; muy buen mes para recorrer el país."),
      m("13–28 °C", "Inicio del verano; mucho sol en la costa del Egeo."),
      m("16–31 °C", "Verano caluroso, sobre todo en Pamukkale y Éfeso."),
      m("16–31 °C", "Pleno verano; lleva gorra y bloqueador."),
      m("12–27 °C", "Fin del verano; clima muy agradable."),
      m("8–21 °C", "Otoño templado; buen mes para globos en Capadocia."),
      m("4–15 °C", "Otoño fresco."),
      m("0–11 °C", "Invierno frío."),
    ],
  },
  {
    id: "egipto",
    nombre: "Egipto, Jordania e Israel",
    meses: [
      m("9–20 °C", "Invierno suave: el mejor momento para las pirámides y Petra."),
      m("10–22 °C", "Templado y seco; temporada alta."),
      m("12–25 °C", "Agradable; empieza a subir el calor."),
      m("15–29 °C", "Calor seco por el día y noches frescas."),
      m("18–33 °C", "Calor fuerte; las visitas se hacen temprano."),
      m("21–35 °C", "Muy caluroso en el desierto."),
      m("22–36 °C", "Pleno verano: calor intenso, sobre todo en Luxor y Asuán."),
      m("22–36 °C", "Calor intenso; lleva ropa ligera y mucha agua."),
      m("21–34 °C", "Todavía caluroso."),
      m("18–30 °C", "El calor empieza a bajar."),
      m("14–25 °C", "Clima agradable; vuelve la temporada alta."),
      m("10–21 °C", "Invierno suave y seco."),
    ],
  },
  {
    id: "norte-africa",
    nombre: "Túnez, Marruecos y Malta",
    meses: [
      m("7–16 °C", "Invierno templado en la costa y noches frías en el desierto."),
      m("7–17 °C", "Templado; buen momento para el Sahara."),
      m("9–19 °C", "Primavera temprana, muy agradable."),
      m("11–22 °C", "Primavera templada."),
      m("14–26 °C", "Cálido; ideal para recorrer medinas."),
      m("18–30 °C", "Inicio del verano."),
      m("21–33 °C", "Verano caluroso."),
      m("22–33 °C", "Pleno verano."),
      m("20–30 °C", "Fin del verano, mar cálido."),
      m("16–26 °C", "Otoño agradable."),
      m("12–21 °C", "Otoño templado."),
      m("9–17 °C", "Invierno suave."),
    ],
  },
  {
    id: "china",
    nombre: "China",
    meses: [
      m("-9 a 2 °C", "Invierno muy frío en Pekín; seco y soleado."),
      m("-6 a 5 °C", "Frío; cerca del Año Nuevo chino."),
      m("0–12 °C", "Fin del invierno."),
      m("7–20 °C", "Primavera; muy buen mes para la Gran Muralla."),
      m("13–26 °C", "Primavera cálida."),
      m("18–30 °C", "Calor y humedad."),
      m("22–31 °C", "Verano caluroso y lluvioso."),
      m("21–30 °C", "Calor y lluvias."),
      m("15–26 °C", "Otoño: uno de los mejores meses."),
      m("8–19 °C", "Otoño templado."),
      m("0–10 °C", "Frío."),
      m("-7 a 3 °C", "Invierno."),
    ],
  },
  {
    id: "asia-oriental",
    nombre: "Japón y Corea del Sur",
    meses: [
      m("-2 a 9 °C", "Invierno frío y seco."),
      m("-1 a 10 °C", "Invierno; nieve en el norte."),
      m("3–14 °C", "Fin del invierno; los cerezos empiezan a florecer a fin de mes."),
      m("8–19 °C", "Floración de los cerezos (sakura): la época más bonita y más pedida."),
      m("13–24 °C", "Primavera cálida y verde."),
      m("18–27 °C", "Temporada de lluvias."),
      m("22–31 °C", "Verano caluroso y húmedo."),
      m("23–32 °C", "Calor fuerte."),
      m("19–28 °C", "Fin del verano; posibles tifones."),
      m("13–22 °C", "Otoño templado."),
      m("7–17 °C", "Hojas rojas del otoño (momiji)."),
      m("1–11 °C", "Invierno e iluminaciones navideñas."),
    ],
  },
  {
    id: "tailandia",
    nombre: "Tailandia",
    meses: [
      m("22–32 °C", "Temporada seca y fresca: la mejor época."),
      m("23–33 °C", "Seco y soleado; ideal para playas."),
      m("25–34 °C", "Calor seco."),
      m("26–35 °C", "El mes más caluroso; festival del agua (Songkran)."),
      m("26–34 °C", "Empiezan las lluvias."),
      m("26–33 °C", "Lluvias cortas y fuertes."),
      m("25–33 °C", "Temporada de lluvias."),
      m("25–33 °C", "Temporada de lluvias."),
      m("25–32 °C", "Mes lluvioso."),
      m("24–32 °C", "Las lluvias empiezan a bajar."),
      m("23–31 °C", "Vuelve el clima seco."),
      m("21–31 °C", "Seco y agradable; temporada alta."),
    ],
  },
  {
    id: "norteamerica",
    nombre: "Canadá y el este de Estados Unidos",
    meses: [
      m("-9 a 0 °C", "Invierno con nieve; ropa térmica obligatoria."),
      m("-8 a 1 °C", "Frío intenso."),
      m("-4 a 6 °C", "Fin del invierno; todavía frío."),
      m("2–13 °C", "Primavera fresca."),
      m("8–20 °C", "Primavera agradable."),
      m("14–25 °C", "Inicio del verano."),
      m("17–28 °C", "Verano cálido; Cataratas del Niágara en su mejor momento."),
      m("16–27 °C", "Verano."),
      m("12–22 °C", "Otoño templado."),
      m("6–15 °C", "Otoño: los bosques se pintan de rojo y naranja."),
      m("0–8 °C", "Frío."),
      m("-6 a 2 °C", "Invierno y Navidad."),
    ],
  },
];

// Zona según los países y ciudades del programa; el orden importa (lo más específico primero).
const REGLAS: [RegExp, string][] = [
  [/aruba|curazao|bonaire/, "aruba"],
  [/cancun|riviera maya|mexico/, "cancun"],
  [/cartagena|san andres|santa marta|barranquilla|isla margarita/, "caribe-colombiano"],
  [/punta cana|santo domingo|la romana|jamaica|montego|ocho rios|antillas|bahamas|varadero|caicos|tortola/, "caribe"],
  [/rio de janeiro|buzios|sao paulo|salvador de bahia|iguaz|brasil/, "rio"],
  [/buenos aires|argentina/, "buenos-aires"],
  [/guatemala|salvador|honduras|costa rica|panama|nicaragua/, "centroamerica"],
  [/finlandia|islandia|noruega|laponia|oslo|helsinki|suecia/, "nordicos"],
  [/tunez|malta|marruecos/, "norte-africa"],
  [/egipto|cairo|jordania|petra|israel|tel aviv|jerusalen|dubai|emiratos/, "egipto"],
  [/turquia|estambul|capadocia/, "turquia"],
  [/grecia|atenas|santorini|balcanes|bulgaria|rumania|bucarest|serbia|albania|croacia|macedonia/, "balcanes"],
  [/japon|corea|tokio|seul/, "asia-oriental"],
  [/china|beijing|pekin|shanghai/, "china"],
  [/tailandia|bangkok|phuket|vietnam|camboya|bali|indonesia/, "tailandia"],
  [/canada|toronto|new york|nueva york|estados unidos|washington/, "norteamerica"],
  [/espana|francia|italia|inglaterra|londres|portugal|alemania|europa|suiza|austria|holanda|paises bajos|belgica/, "europa"],
];

const sinTildes = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

// Toma la zona del texto: primero el destino principal (nombre y ciudades), luego los países.
export function zonaClima(texto: string): ZonaClima | undefined {
  const t = sinTildes(texto);
  const regla = REGLAS.find(([re]) => re.test(t));
  return regla ? ZONAS.find((z) => z.id === regla[1]) : undefined;
}

export function climaDelMes(zona: ZonaClima, mes: number): MesClima {
  return zona.meses[mes - 1];
}
