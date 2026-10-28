// Guía corta por tipo de viaje: lo que de verdad conviene saber antes de separar un paquete armado de ese estilo.
// Le da a cada página de estilo un contenido propio aunque comparta paquetes con otra página del mismo destino.
// 28-oct-2026.

export interface GuiaEstilo {
  titulo: (destino: string) => string;
  intro: (destino: string) => string;
  puntos: string[];
}

export const GUIAS_ESTILO: Record<string, GuiaEstilo> = {
  "todo-incluido": {
    titulo: (d) => `Qué significa «todo incluido» en ${d}`,
    intro: (d) => `En los resorts todo incluido de ${d} pagas una sola vez y dentro del hotel no vuelves a sacar la billetera para comer ni tomar.`,
    puntos: [
      "Incluye desayuno, almuerzo y cena tipo buffet, snacks durante el día y bebidas con y sin alcohol en los bares del hotel.",
      "Los restaurantes de especialidad (a la carta) suelen pedir reserva previa: pídela el primer día.",
      "Las actividades del hotel y los deportes sin motor (kayak, snorkel en la playa) van incluidos; las excursiones fuera del hotel, no.",
      "El spa, las bebidas premium y el servicio a la habitación casi siempre se pagan aparte.",
      "Lleva efectivo en dólares para propinas y tours opcionales.",
    ],
  },
  "con-vuelo-desde-lima": {
    titulo: (d) => `Cómo es el vuelo de Lima a ${d} en un paquete armado`,
    intro: (d) => `El boleto ida y vuelta Lima – ${d} ya va dentro del precio, en el vuelo grupal que el mayorista bloquea para cada salida.`,
    puntos: [
      "Los horarios exactos se confirman al emitir el boleto, normalmente unas semanas antes de viajar.",
      "Revisa el equipaje: algunos programas solo incluyen maleta de cabina de 10 kg; la maleta de bodega se puede sumar.",
      "Preséntate en el aeropuerto Jorge Chávez 3 horas antes en vuelos internacionales.",
      "Al ser vuelo de grupo, no se puede cambiar la fecha de un solo pasajero sin perder la tarifa.",
      "Si sales de provincia, te cotizamos el tramo hasta Lima para que llegues a tiempo.",
    ],
  },
  "desde-arequipa": {
    titulo: (d) => `Viajar a ${d} saliendo de Arequipa`,
    intro: (d) => `Estas salidas incluyen el vuelo Arequipa – Lima y la conexión internacional a ${d}: no tienes que comprar nada aparte.`,
    puntos: [
      "La conexión en Lima ya está calculada para que no pierdas el vuelo internacional.",
      "Al regreso, algunos itinerarios pasan una noche en Lima antes de volver a Arequipa; revisa el itinerario día por día.",
      "El equipaje permitido es el del vuelo internacional; confírmalo antes de armar la maleta.",
      "Los cupos desde Arequipa son menos que desde Lima: se llenan primero.",
    ],
  },
  "5-dias-4-noches": {
    titulo: (d) => `Cómo aprovechar 5 días y 4 noches en ${d}`,
    intro: (d) => `Con 5 días tienes 3 días completos en ${d}: suficiente para descansar y hacer una o dos excursiones sin correr.`,
    puntos: [
      "El primer y el último día se van en vuelos y traslados; planifica las salidas para los días del medio.",
      "Reserva la excursión de día completo para el segundo o tercer día, por si el clima obliga a moverla.",
      "Es la duración ideal para viajar en un feriado largo pidiendo pocos días en el trabajo.",
      "Si quieres más días, pregúntanos: a veces se puede extender la estadía en el mismo hotel.",
    ],
  },
  "ano-nuevo": {
    titulo: (d) => `Recibir el Año Nuevo en ${d}: lo que debes saber`,
    intro: (d) =>
      `Fin de año es la temporada más pedida en ${d}: vuelos llenos y hoteles al tope, por eso las salidas de Año Nuevo se separan con meses de anticipación.`,
    puntos: [
      "La cena o fiesta especial del 31 de diciembre casi nunca está incluida; pregunta su precio al separar.",
      "Lleva ropa blanca o de color según la tradición que quieras seguir: en el Caribe se recibe el año en la playa.",
      "Los precios de fin de año son los más altos del calendario: separar pronto asegura la tarifa.",
      "Revisa la fecha de regreso: varias salidas vuelven el 3 o 4 de enero.",
    ],
  },
  "semana-santa": {
    titulo: (d) => `Semana Santa 2027 en ${d}`,
    intro: (d) =>
      `En 2027 el Jueves Santo cae el 25 de marzo y el Viernes Santo el 26: con dos feriados seguidos puedes viajar a ${d} pidiendo pocos días.`,
    puntos: [
      "Es temporada alta en todo Latinoamérica: los cupos se agotan antes de febrero.",
      "Algunas excursiones y atractivos cambian de horario esos días; te avisamos al confirmar.",
      "Combina el feriado con un fin de semana y estiras el viaje sin perder días de trabajo.",
      "Si vas en familia, coordina con el calendario escolar de abril.",
    ],
  },
  "vacaciones-de-julio": {
    titulo: (d) => `Viajar a ${d} en las vacaciones de julio`,
    intro: (d) =>
      `Julio junta Fiestas Patrias (28 y 29) y las vacaciones de medio año de los colegios: es la fecha ideal para viajar a ${d} en familia.`,
    puntos: [
      "Es temporada alta: las salidas de julio son de las primeras en llenarse.",
      "Los feriados del 23, 28 y 29 de julio te ahorran días de vacaciones.",
      "Para niños, confirma la tarifa infantil y si el hotel tiene club de niños.",
      "Separa con el 50% y paga el saldo antes de viajar, sin pagar todo de golpe.",
    ],
  },
  "en-familia": {
    titulo: (d) => `${d} con niños: consejos para el viaje en familia`,
    intro: (d) => `Un paquete armado a ${d} quita lo más difícil de viajar con niños: los traslados, el hotel y las comidas ya están resueltos.`,
    puntos: [
      "Los bebés de 0 a 1 año pagan un porcentaje mínimo; los niños tienen tarifa propia según el hotel.",
      "En habitación triple o cuádruple se usan 2 camas grandes; no hay habitaciones con tres camas individuales.",
      "Los resorts todo incluido con piscinas, club de niños o parque acuático son los que más disfrutan los chicos.",
      "Menores que viajan con un solo padre o con terceros necesitan permiso notarial de viaje.",
      "Lleva bloqueador, repelente y una copia de los pasaportes de todos.",
    ],
  },
  "luna-de-miel": {
    titulo: (d) => `Luna de miel en ${d}: cómo organizarla`,
    intro: (d) =>
      `Para una luna de miel en ${d} lo mejor es que todo esté resuelto: vuelo, hotel y traslados, para que solo se dediquen a disfrutar.`,
    puntos: [
      "Avisa al reservar que es tu luna de miel: muchos hoteles dan un detalle de bienvenida o una mejora si hay disponibilidad.",
      "Viaja con la fecha de boda clara: si el viaje es pocos días después, separa con tiempo.",
      "Lleva el pasaporte con el nombre que figura en el boleto; si cambias de apellido, hazlo después del viaje.",
      "Pregunta por cenas románticas o spa para parejas como servicio adicional.",
    ],
  },
  "con-guia-en-espanol": {
    titulo: (d) => `Recorrer ${d} con guía en español`,
    intro: (d) =>
      `En estos paquetes armados un guía de habla hispana acompaña el recorrido por ${d}: explica cada visita y resuelve cualquier problema en el camino.`,
    puntos: [
      "No necesitas hablar inglés ni el idioma local: el guía coordina hoteles, buses y entradas.",
      "Las propinas del guía y del chofer casi nunca están incluidas; revisa el «no incluye» para saber cuánto separar.",
      "Los horarios los marca el guía: sé puntual en las salidas del bus.",
      "Las excursiones opcionales se contratan con el mismo guía para no chocar con el itinerario.",
    ],
  },
  "sin-vuelo": {
    titulo: (d) => `Paquete armado a ${d} sin vuelo: cuándo conviene`,
    intro: (d) =>
      `Los programas solo terrestres a ${d} incluyen hotel, traslados y visitas, pero no el boleto aéreo: convienen si ya tienes pasaje, usas millas o vuelas desde otro país.`,
    puntos: [
      "Tu vuelo debe llegar el mismo día que empieza el programa para no perder el traslado de llegada.",
      "Si quieres, te cotizamos el vuelo desde Lima aparte y lo coordinamos con las fechas del programa.",
      "Revisa el mínimo de pasajeros: algunos programas terrestres operan desde 2 personas.",
      "Muchos salen a diario o varias veces por semana: tienes más flexibilidad de fechas.",
    ],
  },
  barato: {
    titulo: (d) => `Cómo pagar menos por tu viaje a ${d}`,
    intro: (d) =>
      `Los paquetes de esta página están ordenados del más barato al más caro. Estas son las formas reales de pagar menos por un viaje a ${d}:`,
    puntos: [
      "Las fechas fuera de vacaciones, feriados y fin de año son las más baratas.",
      "Compara las salidas del mismo programa: entre una fecha y otra puede haber cientos de dólares de diferencia.",
      "Elige el hotel de categoría más simple del programa; el recorrido y las visitas son los mismos.",
      "Separa con el 50% apenas tengas la fecha: los cupos más baratos se venden primero.",
    ],
  },
};
