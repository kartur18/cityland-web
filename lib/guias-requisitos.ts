// Guías de requisitos escritas a mano y verificadas en fuentes oficiales (24-oct-2026).
// Reemplazan a la plantilla de venta en /viajes/<slug>: quien busca "requisitos para viajar a…" quiere una guía.

export interface GuiaRequisitos {
  slug: string;
  pais: string;
  h1: string;
  // Título para Google: ≤ 48 caracteres para que quepa con la marca.
  tituloSeo: string;
  descripcion: string;
  actualizado: string;
  fechaIso: string;
  respuestaCorta: string[];
  // HTML propio (sin datos de usuarios), con las clases de .article-body.
  contenido: string;
  faqs: { q: string; a: string }[];
  fuentes: { nombre: string; url: string }[];
  destinoCotizador: string;
}

const ACTUALIZADO = "24 de octubre de 2026";
const FECHA_ISO = "2026-10-24";

const FUENTE_CONSULADO_ESPANA = {
  nombre: "Consulado General de España en Lima: requisitos para peruanos sin visa",
  url: "https://www.exteriores.gob.es/Consulados/lima/es/Comunicacion/Noticias/Paginas/Articulos/20160315_NOT1.aspx",
};

const BLOQUE_EES_ETIAS = `<h2>Lo nuevo en Europa: huellas al entrar y el ETIAS</h2>
<ul>
<li><strong>Registro con huellas y foto (EES).</strong> La Unión Europea registra en el control de frontera a los viajeros que no son europeos: toma tus huellas y una foto, y anota tus entradas y salidas. Así controla el límite de 90 días.</li>
<li><strong>ETIAS.</strong> Es un permiso electrónico que tendrán que sacar por internet, antes de viajar, quienes entran sin visa, como los peruanos. Al ${ACTUALIZADO} todavía no es obligatorio: la Unión Europea anunciará la fecha con meses de anticipación. Hasta entonces, desconfía de cualquier página que te cobre por un "ETIAS".</li>
</ul>`;

const ESPANA: GuiaRequisitos = {
  slug: "requisitos-viajar-a-espana-desde-peru",
  pais: "España",
  h1: "Requisitos para viajar a España desde Perú en 2026",
  tituloSeo: "Requisitos para viajar a España desde Perú 2026",
  descripcion:
    "Peruanos sin visa hasta 90 días: qué documentos te pueden pedir en el aeropuerto de España, cuánto dinero llevar y qué pasa con el ETIAS.",
  actualizado: ACTUALIZADO,
  fechaIso: FECHA_ISO,
  respuestaCorta: [
    "No necesitas visa para turismo o visita: hasta 90 días dentro de cada periodo de 180 días.",
    "En el aeropuerto te pueden pedir pasaporte, pasaje de regreso, alojamiento y dinero suficiente.",
    "Dinero en 2026: 122,10 € por día, con un mínimo de 1.098,90 € por persona.",
    "El seguro médico es recomendable, no obligatorio, para quien entra sin visa.",
    "El ETIAS todavía no es obligatorio.",
  ],
  contenido: `<h2>¿Necesitas visa?</h2>
<p>No, si vas por turismo, a visitar a tu familia o por negocios. Desde el 15 de marzo de 2016, los peruanos pueden entrar sin visa a España y al resto del espacio Schengen por un máximo de <strong>90 días dentro de cada periodo de 180 días</strong>.</p>
<p>Sí necesitas visa si vas a trabajar (aunque sea menos de 90 días) o si te vas a quedar más de 90 días. Esa visa se tramita en el Consulado de España antes de viajar.</p>

<h2>Lo que te pueden pedir en el aeropuerto</h2>
<p>Entrar sin visa no significa entrar sin requisitos. En el control migratorio de Madrid-Barajas o Barcelona-El Prat, la policía puede pedirte:</p>
<div class="tabla-guia"><table>
<thead><tr><th>Requisito</th><th>Qué llevar</th></tr></thead>
<tbody>
<tr><td>Pasaporte</td><td>Vigente al menos 3 meses después de la fecha en que sales de Europa, y emitido hace menos de 10 años.</td></tr>
<tr><td>Pasaje de regreso</td><td>Ida y vuelta, con el regreso dentro de los 90 días.</td></tr>
<tr><td>Alojamiento</td><td>Reserva de hotel por toda la estancia, o <a href="/blog/carta-invitacion-espana-peru-requisitos">carta de invitación</a> si te quedas con un familiar o amigo.</td></tr>
<tr><td>Dinero</td><td>122,10 € por día, con un mínimo de 1.098,90 € por persona (2026).</td></tr>
<tr><td>Motivo del viaje</td><td>Lo que respalde tu plan: itinerario, reservas de tours o una invitación a un evento.</td></tr>
<tr><td>Seguro médico</td><td>Recomendable, según el Consulado de España en Lima.</td></tr>
</tbody></table></div>
<p>Llévalo todo impreso en tu equipaje de mano. La policía no siempre pide todo, pero si te lo pide y no lo tienes, te puede negar la entrada.</p>

<h2>¿Es obligatorio el seguro de 30.000 €?</h2>
<p>El seguro con cobertura de 30.000 € es obligatorio para quienes <strong>piden visa</strong> Schengen. Para los peruanos, que entran sin visa, el Consulado de España en Lima lo califica como <strong>recomendable</strong>.</p>
<p>Igual conviene llevarlo: una atención de emergencia en Europa puede costar miles de euros, y es un documento más que respalda tu viaje.</p>

<h2>Cuánto dinero llevar</h2>
<p>Lo fija la Orden PRE/1282/2007 con el salario mínimo de España: en 2026 son 122,10 € por persona y por día, con un mínimo de 1.098,90 €. Algunos ejemplos por persona:</p>
<div class="tabla-guia"><table>
<thead><tr><th>Días en España</th><th>Monto por persona</th></tr></thead>
<tbody>
<tr><td>Hasta 9 días</td><td>1.098,90 € (mínimo)</td></tr>
<tr><td>15 días</td><td>1.831,50 €</td></tr>
<tr><td>30 días</td><td>3.663,00 €</td></tr>
</tbody></table></div>
<p>Puedes demostrarlo con efectivo o con tarjetas acompañadas del extracto bancario impreso. La norma no acepta extractos sacados de internet. Todo el detalle está en la <a href="/blog/cuanto-dinero-llevar-espana-bolsa-de-viaje">guía de bolsa de viaje para España</a>.</p>

${BLOQUE_EES_ETIAS}

<h2>Si viaja un menor de edad</h2>
<p>Si un menor sale del Perú sin uno de sus padres o sin los dos, necesita un permiso notarial de viaje. Mira <a href="/blog/permiso-notarial-viaje-menores-peru-requisitos">cómo se tramita</a>.</p>

<h2>Errores comunes</h2>
<ul>
<li><strong>Pasaporte por vencer.</strong> Revisa que tenga al menos 3 meses de vigencia después de tu regreso.</li>
<li><strong>Regreso fuera de los 90 días.</strong> El pasaje de vuelta tiene que caer dentro de tu estancia permitida.</li>
<li><strong>Reserva de hotel cancelada antes de viajar.</strong> Si la reserva ya no existe, no te sirve como prueba.</li>
<li><strong>Extracto bancario sacado de internet.</strong> La norma no lo acepta: llévalo impreso del banco.</li>
<li><strong>No saber dónde te vas a quedar.</strong> Ten anotada la dirección de tu hotel o de tu familiar.</li>
</ul>`,
  faqs: [
    {
      q: "¿Cuántos días me puedo quedar en España sin visa?",
      a: "Hasta 90 días dentro de cada periodo de 180 días, sumando todos los países del espacio Schengen.",
    },
    {
      q: "¿Puedo entrar por Madrid y luego ir a Italia o Francia?",
      a: "Sí. Son parte del espacio Schengen y los 90 días cuentan para todos esos países juntos.",
    },
    { q: "¿Me sirve el DNI para viajar a España?", a: "No. Para viajar a España necesitas pasaporte." },
    {
      q: "¿Me pueden negar la entrada aunque tenga todos los documentos?",
      a: "Sí. La decisión final es de la policía de frontera. Llevar todo completo y en orden reduce ese riesgo.",
    },
    {
      q: "¿Ya tengo que sacar el ETIAS?",
      a: "Todavía no. La Unión Europea anunciará la fecha con meses de anticipación.",
    },
  ],
  fuentes: [
    FUENTE_CONSULADO_ESPANA,
    { nombre: "Orden PRE/1282/2007 (BOE): medios económicos", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-9608" },
    { nombre: "Orden PRE/1283/2007 (BOE): carta de invitación", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-9609" },
  ],
  destinoCotizador: "España",
};

const ITALIA: GuiaRequisitos = {
  slug: "requisitos-viajar-a-italia-desde-peru",
  pais: "Italia",
  h1: "Requisitos para viajar a Italia desde Perú en 2026",
  tituloSeo: "Requisitos para viajar a Italia desde Perú 2026",
  descripcion:
    "Peruanos sin visa hasta 90 días: documentos, cuánto dinero piden en Italia según los días, la dichiarazione di ospitalità y qué hacer si entras por Madrid.",
  actualizado: ACTUALIZADO,
  fechaIso: FECHA_ISO,
  respuestaCorta: [
    "No necesitas visa para turismo o visita: hasta 90 días dentro de cada periodo de 180 días.",
    "Dinero según la tabla oficial italiana: por ejemplo, 269,60 € si viajas solo y te quedas hasta 5 días.",
    "Si te alojas con un familiar o amigo, él tiene 48 horas para hacer la dichiarazione di ospitalità.",
    "Si entras a Europa por otro país (por ejemplo, Madrid) y no vas a hotel, tienes 8 días para hacer la dichiarazione di presenza.",
  ],
  contenido: `<h2>¿Necesitas visa?</h2>
<p>No, si vas por turismo, a visitar a tu familia o por negocios. Italia es parte del espacio Schengen, y los peruanos pueden entrar sin visa por un máximo de <strong>90 días dentro de cada periodo de 180 días</strong>.</p>
<p>Sí necesitas visa si vas a trabajar o si te vas a quedar más de 90 días.</p>

<h2>Lo que te pueden pedir al entrar</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Requisito</th><th>Qué llevar</th></tr></thead>
<tbody>
<tr><td>Pasaporte</td><td>Vigente al menos 3 meses después de la fecha en que sales de Europa, y emitido hace menos de 10 años.</td></tr>
<tr><td>Pasaje de regreso</td><td>Ida y vuelta, con el regreso dentro de los 90 días.</td></tr>
<tr><td>Alojamiento</td><td>Reserva de hotel, o la dirección y los datos de la persona que te recibe.</td></tr>
<tr><td>Dinero</td><td>Según la tabla oficial italiana (abajo).</td></tr>
<tr><td>Seguro médico</td><td>Conviene llevarlo: una emergencia médica en Europa puede costar miles de euros.</td></tr>
</tbody></table></div>

<h2>Cuánto dinero te piden en Italia</h2>
<p>Italia tiene su propia tabla, fijada por el Ministerio del Interior (directiva del 1 de marzo de 2000) y publicada por la Cancillería italiana. Estos son los montos para una persona que viaja sola:</p>
<div class="tabla-guia"><table>
<thead><tr><th>Días en Italia</th><th>Monto</th></tr></thead>
<tbody>
<tr><td>Hasta 5 días</td><td>269,60 € en total</td></tr>
<tr><td>De 6 a 10 días</td><td>44,93 € por día</td></tr>
<tr><td>De 11 a 20 días</td><td>51,64 € más 36,67 € por día</td></tr>
<tr><td>Más de 20 días</td><td>206,58 € más 27,89 € por día</td></tr>
</tbody></table></div>
<p>Ejemplos para una persona: 7 días, 314,51 €; 15 días, 601,69 €; 30 días, 1.043,28 €. Si viajan dos o más personas, el monto por persona es menor. Ojo: esta tabla es distinta de la de España, que pide bastante más.</p>

<h2>Si te quedas en casa de un familiar o amigo</h2>
<p>En Italia no hay un trámite policial previo como la carta de invitación de España. Lo que existe es la <strong>dichiarazione di ospitalità</strong>: después de que llegues, la persona que te aloja tiene <strong>48 horas</strong> para comunicar a la policía (Questura) o al municipio que estás en su casa.</p>
<p>Para el control de frontera, conviene llevar una carta simple de tu anfitrión con su dirección y una copia de su documento. Más detalle en <a href="/blog/dichiarazione-di-ospitalita-italia-48-horas-questura">la guía de la dichiarazione di ospitalità</a>.</p>

<h2>Si entras a Europa por Madrid u otro país</h2>
<p>Muchos vuelos desde Lima llegan primero a Madrid. Si entras al espacio Schengen por otro país y luego vas a Italia, tienes <strong>8 días</strong> desde que llegas a Italia para hacer la <strong>dichiarazione di presenza</strong> en la Questura de la provincia donde estés. Es gratis.</p>
<p>Si te alojas en un hotel, no tienes que hacerla: el hotel avisa a la policía por ti. Y si llegas a Italia directo desde fuera del espacio Schengen, el sello de entrada en tu pasaporte ya cuenta como esa declaración.</p>
<p>No hacerla, o hacerla tarde, puede terminar en una orden de expulsión, según la Polizia di Stato.</p>

${BLOQUE_EES_ETIAS}

<h2>Errores comunes</h2>
<ul>
<li><strong>Olvidar la dichiarazione di presenza</strong> cuando entras por Madrid y te quedas en casa de familia.</li>
<li><strong>Que tu anfitrión no haga la dichiarazione di ospitalità</strong> dentro de las 48 horas.</li>
<li><strong>Calcular el dinero con la tabla de España.</strong> Italia tiene la suya.</li>
<li><strong>Pasaporte por vencer.</strong> Revisa que tenga al menos 3 meses de vigencia después de tu regreso.</li>
</ul>`,
  faqs: [
    {
      q: "¿Necesito visa para viajar a Italia desde Perú?",
      a: "No para turismo, visita o negocios de hasta 90 días dentro de cada periodo de 180 días.",
    },
    {
      q: "¿Quién hace la dichiarazione di ospitalità?",
      a: "La persona que te aloja en su casa, dentro de las 48 horas después de tu llegada.",
    },
    {
      q: "¿Tengo que hacer la dichiarazione di presenza si me quedo en hotel?",
      a: "No. El hotel comunica tus datos a la policía.",
    },
    {
      q: "¿Cuánto dinero llevo si viajo solo por 15 días?",
      a: "Según la tabla oficial italiana, 601,69 € (51,64 € más 36,67 € por cada día).",
    },
    {
      q: "¿Puedo ir de Italia a otros países de Europa?",
      a: "Sí, dentro del espacio Schengen, siempre que el total no pase de 90 días en 180.",
    },
  ],
  fuentes: [
    {
      nombre: "Cancillería de Italia: tabla de medios de subsistencia para entrar por turismo",
      url: "https://www.esteri.it/it/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/mezzi_finanziari/tabella_mezzi_sussistenza/",
    },
    {
      nombre: "Polizia di Stato: dichiarazione di presenza",
      url: "https://www.poliziadistato.it/articolo/dichiarazione-di-presenza-per-cittadini-stranieri",
    },
    FUENTE_CONSULADO_ESPANA,
  ],
  destinoCotizador: "Italia",
};

const CURAZAO: GuiaRequisitos = {
  slug: "requisitos-viajar-a-curazao-desde-peru",
  pais: "Curazao",
  h1: "Requisitos para viajar a Curazao desde Perú en 2026",
  tituloSeo: "Requisitos para viajar a Curazao desde Perú 2026",
  descripcion:
    "Los peruanos no necesitan visa para Curazao. Pasaporte, tarjeta digital de inmigración, vacuna contra la fiebre amarilla, seguro y dinero: lo que te piden.",
  actualizado: ACTUALIZADO,
  fechaIso: FECHA_ISO,
  respuestaCorta: [
    "No necesitas visa: puedes quedarte hasta 90 días dentro de cada periodo de 180 días.",
    "La tarjeta digital de inmigración es obligatoria y se llena hasta 7 días antes de viajar.",
    "Si sales del Perú y tienes 9 meses o más, te piden la vacuna contra la fiebre amarilla.",
    "El seguro médico es obligatorio: cobertura mínima de US$ 15,000.",
    "Dinero: US$ 150 a 200 por persona y por día en hotel, o US$ 100 si te quedas con familia.",
  ],
  contenido: `<h2>¿Necesitas visa?</h2>
<p>No. El Perú está en la lista oficial de países cuyos ciudadanos no necesitan visa para Curazao, que publica el gobierno de los Países Bajos (Curazao es parte del Reino de los Países Bajos). Puedes quedarte hasta <strong>90 días dentro de cada periodo de 180 días</strong>.</p>
<p>Curazao no es parte del espacio Schengen: tus días en Curazao no se suman a los de Europa.</p>

<h2>Lo que te piden para entrar</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Requisito</th><th>Qué llevar</th></tr></thead>
<tbody>
<tr><td>Pasaporte</td><td>Emitido hace menos de 10 años y vigente durante todo tu viaje.</td></tr>
<tr><td>Tarjeta digital de inmigración</td><td>Obligatoria. Se llena en internet hasta 7 días antes de viajar.</td></tr>
<tr><td>Vacuna contra la fiebre amarilla</td><td>Si llegas desde el Perú y tienes 9 meses o más.</td></tr>
<tr><td>Seguro médico</td><td>Cobertura mínima de US$ 15,000, con hospitalización, emergencias y repatriación.</td></tr>
<tr><td>Dinero</td><td>US$ 150 a 200 por persona y por día en hotel; US$ 100 por persona y por día si te quedas con familia.</td></tr>
<tr><td>Pasaje de regreso</td><td>O de salida hacia otro país.</td></tr>
<tr><td>Motivo del viaje</td><td>Reserva de hotel o invitación de familiares o amigos.</td></tr>
</tbody></table></div>
<p>Aunque cumplas todo, migración puede negarte la entrada o darte menos días: lleva todo impreso y en orden.</p>

<h2>La tarjeta digital de inmigración</h2>
<p>Es obligatoria para todos los viajeros extranjeros. Se llena en la página oficial <a href="https://dicardcuracao.com/" target="_blank" rel="noopener">dicardcuracao.com</a>, hasta 7 días antes de tu vuelo. Guarda la confirmación en tu celular.</p>

<h2>La vacuna contra la fiebre amarilla</h2>
<p>Curazao pide el certificado de vacunación a los viajeros de 9 meses o más que llegan desde países con riesgo de fiebre amarilla, y el Perú es uno de ellos. También cuenta si haces una escala de más de 12 horas en uno de esos países.</p>
<p>Vacúnate con tiempo: el certificado vale a partir de los 10 días de la vacuna. Más detalle en <a href="/blog/requisitos-vacuna-fiebre-amarilla-aruba-curazao-panama">la guía de la vacuna para Aruba, Curazao y Panamá</a>.</p>

<h2>El seguro médico sí es obligatorio</h2>
<p>A diferencia de España, para Curazao el seguro es un requisito de entrada: debe cubrir al menos <strong>US$ 15,000</strong> en gastos médicos, e incluir hospitalización, atención de emergencia y repatriación.</p>

<h2>Cuánto dinero llevar</h2>
<div class="tabla-guia"><table>
<thead><tr><th>Ejemplo por persona</th><th>En hotel</th><th>Con familia</th></tr></thead>
<tbody>
<tr><td>5 días</td><td>US$ 750 a 1,000</td><td>US$ 500</td></tr>
<tr><td>7 días</td><td>US$ 1,050 a 1,400</td><td>US$ 700</td></tr>
<tr><td>10 días</td><td>US$ 1,500 a 2,000</td><td>US$ 1,000</td></tr>
</tbody></table></div>
<p>Si un familiar o amigo se hace responsable de tus gastos y lo puedes demostrar, esa persona asume la responsabilidad económica.</p>

<h2>Antes de salir de Lima</h2>
<ul>
<li>Pasaporte vigente y emitido hace menos de 10 años.</li>
<li>Tarjeta digital de inmigración llena (hasta 7 días antes).</li>
<li>Carné de vacunación contra la fiebre amarilla.</li>
<li>Seguro médico impreso, con la cobertura a la vista.</li>
<li>Reserva de hotel y pasaje de regreso.</li>
</ul>`,
  faqs: [
    {
      q: "¿Los peruanos necesitan visa para Curazao?",
      a: "No. El Perú está en la lista oficial de países sin visa para Curazao, para estadías de hasta 90 días en 180.",
    },
    {
      q: "¿Cuándo lleno la tarjeta digital de inmigración?",
      a: "Hasta 7 días antes de tu vuelo, en la página oficial dicardcuracao.com.",
    },
    {
      q: "¿Necesito la vacuna contra la fiebre amarilla si viajo desde Lima?",
      a: "Sí, si tienes 9 meses o más, porque el Perú es un país con riesgo de fiebre amarilla. Vacúnate al menos 10 días antes de llegar.",
    },
    {
      q: "¿Mi seguro de viaje me sirve?",
      a: "Sí, si cubre al menos US$ 15,000 en gastos médicos e incluye hospitalización, emergencias y repatriación.",
    },
    {
      q: "¿Me sirve una visa Schengen o americana?",
      a: "No la necesitas: los peruanos entran sin visa a Curazao.",
    },
  ],
  fuentes: [
    {
      nombre: "Gobierno de los Países Bajos: nacionalidades sin visa para Curazao",
      url: "https://www.netherlandsworldwide.nl/caribbean-visa/visa-needed-caribbean",
    },
    {
      nombre: "Gobierno de los Países Bajos: requisitos para entrar sin visa",
      url: "https://www.netherlandsworldwide.nl/caribbean-visa/travel-without-visa",
    },
    { nombre: "Tarjeta digital de inmigración de Curazao (oficial)", url: "https://dicardcuracao.com/" },
    {
      nombre: "CDC: vacuna contra la fiebre amarilla para Curazao",
      url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/curacao",
    },
  ],
  destinoCotizador: "Curazao",
};

export const GUIAS_REQUISITOS: Readonly<Record<string, GuiaRequisitos>> = {
  [ESPANA.slug]: ESPANA,
  [ITALIA.slug]: ITALIA,
  [CURAZAO.slug]: CURAZAO,
};
