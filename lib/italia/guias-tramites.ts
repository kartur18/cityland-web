import type { LandingItalia } from "@/lib/italia/tipos";

// Trámites de peruanos que viven o quieren vivir en Italia: ciudadanía, permesso, estudios y equipaje.
// Solo cifras con fuente; lo que no está confirmado se dice así.

const CONSULTA = "28-oct-2026";
const ENLACES = [
  { texto: "Pasajes de Italia a Perú", href: "/italia/pasajes-de-italia-a-peru" },
  { texto: "Bolsa de viaje para Italia", href: "/italia/bolsa-de-viaje-italia" },
  { texto: "Requisitos para viajar a Italia", href: "/viajes/requisitos-viajar-a-italia-desde-peru" },
  { texto: "Paquetes a Italia", href: "/paquetes-a-italia" },
];

type Base = Omit<LandingItalia, "grupo" | "etiquetaPrecio" | "boton" | "enlaces" | "sello">;
const guia = (g: Base): LandingItalia => ({
  ...g,
  grupo: "guia",
  sello: `Guía con fuente oficial · ${CONSULTA}`,
  etiquetaPrecio: "",
  boton: "Preguntar a una asesora",
  enlaces: ENLACES,
});

const FUENTE_POSTE = { texto: "Poste Italiane: guía del permesso di soggiorno", url: "https://www.poste.it/prodotti/guida-rilascio-e-rinnovo-permesso-di-soggiorno.html" };
const AVISO_ABOGADO = "Esta guía resume la norma; no reemplaza la asesoría de un abogado ni la respuesta del consulado o del Comune para tu caso.";

export function landingsTramites(): LandingItalia[] {
  return [
    guia({
      slug: "ciudadania-italiana-por-descendencia-peru",
      tituloSeo: "Ciudadanía italiana por descendencia desde Perú",
      descripcion: "Ciudadanía italiana por sangre desde Perú tras la Ley 74/2025: quién todavía puede pedirla, la sentencia 63/2026 de la Corte Constitucional, la tasa de 600 € y dónde se tramita.",
      h1: "Ciudadanía italiana por descendencia desde Perú",
      bajada: "La reforma de 2025 cambió quién puede pedir la ciudadanía por sangre si nació fuera de Italia. Esto es lo que rige hoy.",
      migas: "Ciudadanía por descendencia",
      foto: "/images/destinos/turin.jpg",
      fotoAlt: "Turín",
      mensaje: "¡Hola Cityland Travel! Estoy tramitando la ciudadanía italiana y quiero cotizar mi viaje.",
      datos: [
        { k: "Norma", v: "Ley 74/2025" },
        { k: "Tasa por adulto", v: "600 €" },
        { k: "Corte Constitucional", v: "Sentencia 63/2026" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "quien",
          titulo: "Quién puede pedirla si nació fuera de Italia y tiene otra ciudadanía",
          lista: [
            "Quien presentó su solicitud o su demanda hasta el 27-mar-2025 a las 23:59, hora de Roma.",
            "Quien tiene un padre, madre, abuelo o abuela que tiene o tenía solo la ciudadanía italiana.",
            "Quien tiene un padre o madre italiano que vivió en Italia al menos 2 años seguidos después de ser ciudadano y antes del nacimiento del hijo.",
          ],
          estilo: "tarjetas",
        },
        {
          id: "corte",
          titulo: "La reforma sigue vigente",
          texto: ["La Corte Constitucional, en la sentencia 63/2026 (depositada el 30-abr-2026), declaró en parte infundadas y en parte inadmisibles las dudas planteadas por el Tribunal de Turín. La reforma se mantiene."],
        },
        {
          id: "donde",
          titulo: "Dónde se tramita",
          tabla: {
            cab: ["Si vives en", "Dónde", "Tasa"],
            filas: [
              ["Perú", "Embajada de Italia en Lima, con cita en Prenot@mi", "600 € por adulto"],
              ["Italia", "Comune de residencia (estado civil)", "Hasta 600 €, según el Comune"],
            ],
          },
          texto: ["Para adultos que viven fuera de Italia, la Ley 11/2026 limita cuántas solicitudes recibe cada consulado por año y, desde 2029, las pasa a una oficina central en Roma."],
        },
        { id: "aviso", titulo: "Antes de decidir", estilo: "aviso", texto: [AVISO_ABOGADO] },
      ],
      fuentes: [
        { texto: "Stranieri in Italia: la Consulta mantiene los límites (Ley 74/2025)", url: "https://stranieriinitalia.it/attualita/cittadinanza-italiana-la-consulta-salva-i-limiti-alla-trasmissione-per-discendenza/" },
        { texto: "Questione Giustizia: sentencia 63/2026", url: "https://www.questionegiustizia.it/articolo/prima-lettura-corte-cost-63-2026" },
        { texto: "Formulario consular 2026 con la tasa de 600 €", url: "https://consadelaide.esteri.it/wp-content/uploads/2026/04/01_Modulo-application-cittadinanza_ITA_ENG_2026.pdf" },
        { texto: "Embajada de Italia en Lima: procedimientos 2026", url: "https://amblima.esteri.it/wp-content/uploads/2026/06/2026_-Tabella_procedimenti_a_istanza_di_parte_LIMA.pdf" },
      ],
      pregunta: "Mi abuelo era italiano. ¿Me conviene viajar a Italia para hacer el trámite allá?",
      faqs: [
        { q: "¿Todavía se puede sacar la ciudadanía italiana por apellido?", a: "Solo en los casos que deja la Ley 74/2025: solicitud presentada hasta el 27-mar-2025, padre o abuelo con ciudadanía solo italiana, o padre que vivió 2 años en Italia antes de tu nacimiento." },
        { q: "¿Cuánto cuesta?", a: "600 € por cada solicitante adulto, en el consulado o en el Comune." },
        { q: "¿Los bisnietos pueden pedirla?", a: "Con la reforma, la transmisión fuera de Italia se limita a hijos y nietos en los casos de la ley. Consulta tu caso con un abogado." },
      ],
    }),
    guia({
      slug: "ciudadania-italiana-por-matrimonio",
      tituloSeo: "Ciudadanía italiana por matrimonio: requisitos",
      descripcion: "Ciudadanía italiana por matrimonio para peruanos: 2 años de residencia en Italia o 3 en el exterior, la mitad si tienen hijos, y nivel B1 de italiano.",
      h1: "Ciudadanía italiana por matrimonio",
      bajada: "Si te casaste con un ciudadano italiano, puedes pedir la ciudadanía después de un tiempo de matrimonio. El plazo depende de dónde viven.",
      migas: "Ciudadanía por matrimonio",
      foto: "/images/destinos/florencia.jpg",
      fotoAlt: "Florencia",
      mensaje: "¡Hola Cityland Travel! Me casé con un italiano y quiero cotizar pasajes a Italia.",
      datos: [
        { k: "Viviendo en Italia", v: "2 años" },
        { k: "Viviendo fuera", v: "3 años" },
        { k: "Con hijos", v: "La mitad" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "plazos",
          titulo: "Plazos desde el matrimonio",
          tabla: {
            cab: ["Situación", "Sin hijos", "Con hijos"],
            filas: [
              ["Viven en Italia (residencia legal)", "2 años", "1 año"],
              ["Viven fuera de Italia", "3 años", "1 año y 6 meses"],
            ],
          },
        },
        { id: "idioma", titulo: "Italiano nivel B1", texto: ["Desde 2018 se pide acreditar conocimiento del italiano nivel B1 del Marco Común Europeo, con un certificado de un ente reconocido."] },
        { id: "aviso", titulo: "Revisa la tasa vigente", estilo: "aviso", texto: ["La tasa y la lista de documentos se confirman en el portal del Ministerio del Interno al presentar la solicitud. " + AVISO_ABOGADO] },
      ],
      fuentes: [{ texto: "Ley 91/1992, art. 5 (Studio Cataldi)", url: "https://www.studiocataldi.it/articoli/29105-cittadinanza-italiana-per-matrimonio.asp" }],
      pregunta: "Mi esposo es italiano y vivimos en Lima. ¿Cuándo puedo pedir la ciudadanía?",
      faqs: [
        { q: "¿Cuántos años de casados necesito?", a: "2 años si viven en Italia y 3 si viven fuera. Si tienen hijos, el plazo se reduce a la mitad." },
        { q: "¿Necesito hablar italiano?", a: "Sí, nivel B1, acreditado con un certificado de un ente reconocido." },
      ],
    }),
    guia({
      slug: "permesso-di-soggiorno-en-espanol",
      tituloSeo: "Permesso di soggiorno en español: plazo y costo",
      descripcion: "Permesso di soggiorno explicado en español: se pide dentro de 8 días desde que llegas, con el kit postal. Costos: 16 € de marca da bollo, 30 € de envío, 30,46 € del permiso y el contributo.",
      h1: "Permesso di soggiorno: plazo, costo y tipos",
      bajada: "Si vas a quedarte en Italia más de 3 meses, tienes que pedir el permesso di soggiorno apenas llegas. Así se hace y esto cuesta.",
      migas: "Permesso di soggiorno",
      foto: "/images/destinos/bergamo.jpg",
      fotoAlt: "Bérgamo",
      mensaje: "¡Hola Cityland Travel! Tengo una duda sobre el permesso di soggiorno y mi viaje a Italia.",
      datos: [
        { k: "Plazo", v: "8 días desde que llegas" },
        { k: "Se pide en", v: "Poste Italiane (kit)" },
        { k: "Total aprox. (hasta 1 año)", v: "116,46 €" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "costos",
          titulo: "Lo que pagas",
          tabla: {
            cab: ["Concepto", "Monto"],
            filas: [
              ["Marca da bollo", "16 €"],
              ["Pago en el correo (envío del kit)", "30 €"],
              ["Permiso electrónico", "30,46 €"],
              ["Contributo, permiso de 3 meses a 1 año", "40 €"],
              ["Contributo, más de 1 año hasta 2 años", "50 €"],
              ["Contributo, residente UE de larga duración", "100 €"],
            ],
          },
          texto: ["Suma aproximada: 116,46 € para un permiso de hasta 1 año y 126,46 € de 1 a 2 años."],
        },
        {
          id: "tipos",
          titulo: "Los que se piden con el kit del correo",
          lista: ["Estudio y prácticas.", "Trabajo subordinado o autónomo.", "Familia y familiar de ciudadano italiano.", "Espera de ciudadanía (attesa cittadinanza) y espera de empleo.", "Residencia electiva y residente UE de larga duración."],
        },
        { id: "aviso", titulo: "Antes de viajar a Perú", estilo: "aviso", texto: ["Revisa la fecha de vencimiento de tu permesso antes de comprar el pasaje: lo necesitas vigente para volver a entrar a Italia."] },
      ],
      fuentes: [FUENTE_POSTE, { texto: "Money.it: importes del contributo", url: "https://www.money.it/quanto-costa-il-permesso-di-soggiorno-gli-importi-di-rinnovo-e-richiesta" }],
      pregunta: "Mi permesso vence en marzo y quiero ir a Perú en diciembre. ¿Hay problema?",
      faqs: [
        { q: "¿Cuánto cuesta el permesso di soggiorno?", a: "Unos 116,46 € para un permiso de hasta 1 año: 16 € de marca da bollo, 30 € de envío, 30,46 € del permiso electrónico y 40 € de contributo." },
        { q: "¿En cuánto tiempo tengo que pedirlo?", a: "Dentro de 8 días desde que entras a Italia, si te vas a quedar más de 3 meses." },
      ],
    }),
    guia({
      slug: "visa-de-estudios-italia-peruanos",
      tituloSeo: "Visa de estudios para Italia: 10.179,85 € al año",
      descripcion: "Visa de estudios para Italia desde Perú, año 2026/27: pre-inscripción en Universitaly, 10.179,85 € al año (848,32 € al mes) de fondos y plazo hasta el 30-nov-2026.",
      h1: "Visa de estudios para Italia desde Perú",
      bajada: "Para estudiar una carrera o maestría en Italia necesitas la visa D de estudio. Estos son los montos y plazos para 2026/27.",
      migas: "Visa de estudios",
      foto: "/images/destinos/pisa.jpg",
      fotoAlt: "Pisa",
      mensaje: "¡Hola Cityland Travel! Voy a estudiar en Italia y quiero cotizar mi pasaje.",
      datos: [
        { k: "Fondos por año", v: "10.179,85 €" },
        { k: "Por mes", v: "848,32 €" },
        { k: "Plazo 2026/27", v: "30-nov-2026" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "pasos",
          titulo: "Los pasos",
          lista: [
            "Pre-inscripción en Universitaly (universitaly.it) para carreras y maestrías.",
            "Demostrar fondos de 10.179,85 € por año, propios o de tu familia, de origen rastreable. No incluyen el pasaje ni las tasas universitarias.",
            "Seguro médico por el período de estudio y prueba de alojamiento.",
            "Pedir la visa antes del 30-nov-2026 para el año 2026/27 (31-oct-2027 para 2027/28).",
            "Al llegar a Italia, pedir el permesso di soggiorno por estudio dentro de 8 días.",
          ],
        },
        { id: "aviso", titulo: "Dónde se presenta en Lima", estilo: "aviso", texto: ["Confirma con la Embajada de Italia en Lima el lugar y la cita para presentar la solicitud y el monto de la tasa en soles."] },
      ],
      fuentes: [
        { texto: "Consulado de Italia: indicaciones de visa para 2026/27 y 2027/28", url: "https://consbuenosaires.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/studenti-internazionali-nuove-indicazioni-su-visto-e-immatricolazione-per-gli-anni-accademici-2026-2027-e-2027-2028/" },
        { texto: "Circular MUR 2026/27 para estudiantes internacionales", url: "https://backoffice.lumsa.it/sites/default/files/file/3564/2026-05/Circolare_2026-2027_studenti_internazionali.pdf" },
        FUENTE_POSTE,
      ],
      pregunta: "Me aceptaron en una universidad de Italia. ¿Cuándo me conviene comprar el pasaje?",
      faqs: [
        { q: "¿Cuánto dinero necesito para la visa de estudios en Italia?", a: "10.179,85 € por año académico (848,32 € por mes), según las indicaciones para 2026/27 y 2027/28." },
        { q: "¿Compro el pasaje antes de tener la visa?", a: "Te conviene reservar con cambio de fecha y emitir cuando tengas la visa. Te ayudamos a elegir una tarifa flexible." },
      ],
    }),
    guia({
      slug: "equipaje-para-viajar-a-italia",
      tituloSeo: "Equipaje para viajar a Italia desde Lima",
      descripcion: "Equipaje para volar de Lima a Italia: qué tarifas de KLM, ITA, Iberia, Air Europa y LATAM incluyen maleta de 23 kg y cuánto pesa el equipaje de mano.",
      h1: "Equipaje para viajar a Italia desde Lima",
      bajada: "Las tarifas más baratas a Europa suelen venir sin maleta en bodega. Revisa qué incluye cada una antes de comprar.",
      migas: "Equipaje",
      foto: "/images/destinos/napoles.jpg",
      fotoAlt: "Nápoles",
      mensaje: "¡Hola Cityland Travel! Quiero un pasaje a Italia con maleta de 23 kg.",
      datos: [
        { k: "Tarifa básica", v: "Sin maleta" },
        { k: "Tarifa con maleta", v: "1 × 23 kg" },
        { k: "Mano KLM / Air France", v: "12 kg" },
        { k: "Consultado", v: CONSULTA },
      ],
      secciones: [
        {
          id: "tabla",
          titulo: "Maleta en bodega por aerolínea",
          tabla: {
            cab: ["Aerolínea", "Tarifa más barata", "Tarifa con maleta", "Mano"],
            filas: [
              ["KLM", "Light: sin maleta", "Standard y Flex: 1 × 23 kg", "12 kg en total"],
              ["ITA Airways", "Light: sin maleta", "Economy Classic: 1 × 23 kg", "8 kg + 1 artículo"],
              ["Iberia", "Básica: sin maleta", "Tarifas superiores: 1 × 23 kg", "Según tarifa"],
              ["Air Europa", "Lite: sin maleta", "Standard y Flex: 1 × 23 kg", "10 kg + accesorio"],
              ["LATAM", "Basic/Light: sin maleta", "Standard y Full: 1 × 23 kg", "12 kg"],
            ],
          },
          texto: ["KLM, Air France e ITA: datos de sus páginas oficiales. Iberia, Air Europa y LATAM: fuentes especializadas, porque sus páginas no se pudieron leer; confírmalo en tu cotización."],
        },
        {
          id: "consejo",
          titulo: "Si compras dos aerolíneas por separado",
          texto: ["Si el vuelo dentro de Europa va en otro boleto (por ejemplo, una aerolínea de bajo costo a Bérgamo), tu maleta no pasa directo: la recoges y la vuelves a documentar, y la franquicia puede ser otra."],
        },
      ],
      fuentes: [
        { texto: "KLM: equipaje facturado", url: "https://www.klm.com/information/baggage/checked-baggage-allowance" },
        { texto: "ITA Airways: equipaje facturado", url: "https://www.ita-airways.com/ch/en/book-and-prepare/travel-information/baggage/checked-baggage" },
        { texto: "Air France: equipaje de mano", url: "https://wwws.airfrance.us/information/bagages/bagage-cabine-soute" },
      ],
      pregunta: "Viajo a Italia con regalos para mi familia. ¿Qué tarifa trae 2 maletas?",
      faqs: [
        { q: "¿Cuántos kilos puedo llevar a Italia?", a: "Con las tarifas que incluyen maleta, 1 pieza de 23 kg en bodega más el equipaje de mano (8 a 12 kg según la aerolínea). Las tarifas básicas no incluyen maleta." },
        { q: "¿Puedo comprar una maleta extra?", a: "Sí, todas las aerolíneas venden maletas adicionales. Te cotizamos el costo con tu pasaje." },
      ],
    }),
  ];
}

