import type { BlogPost } from "@/components/constantes";

const IMG_BLOG_EUR = "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80";
const IMG_BLOG_CAR = "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80";
const IMG_BLOG_PER = "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80";
const IMG_BLOG_USA = "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80";

export const BLOG_POSTS_MASIVOS: BlogPost[] = [
  {
    slug: "vuelos-directos-lima-madrid-comparativa-aerolineas",
    titulo: "Iberia, Air Europa, Plus Ultra o LATAM: ¿Cuál conviene para volar de Lima a Madrid?",
    desc: "Comparativa de horarios, franquicia de maletas de 23 kg, asientos y tarifas en dólares para elegir tu vuelo directo entre Lima y Madrid-Barajas.",
    categoria: "Europa",
    catColor: "bg-red-600",
    fecha: "16 Oct 2026",
    lectura: "5 min",
    imagen: IMG_BLOG_EUR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Las 4 aerolíneas con vuelos directos de Lima a Madrid</h2>
<p>La ruta entre el Aeropuerto Internacional Jorge Chávez (LIM) y el Aeropuerto Adolfo Suárez Madrid-Barajas (MAD) cuenta con vuelos directos sin escalas operados por cuatro grandes compañías aéreas:</p>
<h3>1. Iberia y LATAM Airlines</h3>
<p>Ideales para quienes buscan frecuencia diaria y excelentes conexiones inmediatas hacia Barcelona, Roma, Milán, París o Londres. Tarifas referenciales Desde $890 USD con impuestos incluidos (sujetas a disponibilidad y condiciones aplicables).</p>
<h3>2. Air Europa y Plus Ultra Líneas Aéreas</h3>
<p>Destacan por sus promociones frecuentes con 1 y hasta 2 maletas de 23 kg en bodega incluidas en tarifas seleccionadas, siendo muy solicitadas por viajeros de larga estadía y familias.</p>`,
  },
  {
    slug: "como-viajar-de-provincias-peru-a-espana-boleto-unico",
    titulo: "Cómo viajar desde Arequipa, Trujillo, Chiclayo, Piura o Cusco a España con un solo boleto",
    desc: "Por qué conviene emitir un boleto conectado desde tu provincia hasta Madrid o Barcelona para proteger tu conexión y tu equipaje en Lima.",
    categoria: "Consejos",
    catColor: "bg-blue-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_EUR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Ventajas de emitir tu vuelo internacional conectado desde tu ciudad</h2>
<p>Si vives en Arequipa, Trujillo, Chiclayo, Piura, Cusco, Tacna o Huancayo, en Cityland Travel emitimos tu itinerario completo en una sola reserva conectada vía Lima hacia Madrid, Barcelona, Roma, Miami o Cancún.</p>
<h3>Protección de equipaje y horarios</h3>
<p>Al contar con una reserva integrada o tiempos de conexión verificados, evitas riesgos ante demoras climáticas y aseguras tu franquicia de 23 kg en bodega durante todo el trayecto.</p>`,
  },
  {
    slug: "diferencia-reserva-hotel-y-carta-invitacion-espana",
    titulo: "¿Reserva de Hotel o Carta de Invitación para entrar a España desde Perú? Qué conviene más",
    desc: "Análisis práctico de los tiempos, costos y requisitos en el control migratorio de Madrid-Barajas y Barcelona-El Prat.",
    categoria: "Europa",
    catColor: "bg-red-500",
    fecha: "16 Oct 2026",
    lectura: "5 min",
    imagen: IMG_BLOG_EUR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Acreditación de alojamiento para ingresar al Espacio Schengen</h2>
<p>Todo viajero peruano que ingresa por turismo a España debe demostrar dónde se hospedará durante todos los días que indique su boleto de ida y vuelta.</p>
<h3>Opción 1: Reserva de Hotel Verificable</h3>
<p>Es la alternativa más rápida cuando no se cuenta con el documento original policial o cuando se viaja en fechas próximas. En Cityland Travel incluimos reservas hoteleras verificables dentro de tu paquete de viaje.</p>
<h3>Opción 2: Carta de Invitación Policial</h3>
<p>Debe ser tramitada con anticipación por un residente legal o ciudadano en la Comisaría de Policía en España y enviada en original físico a Lima antes de tu vuelo.</p>`,
  },
  {
    slug: "requisitos-viajar-italia-roma-milan-peruanos",
    titulo: "Requisitos para viajar a Italia (Roma, Milán y Turín) desde Perú sin visa",
    desc: "Documentación obligatoria, Dichiarazione di Ospitalità, reserva hotelera, Seguro Schengen 30.000€ y vuelos vía Madrid o Ámsterdam.",
    categoria: "Europa",
    catColor: "bg-emerald-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_EUR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Documentación para ingresar a Italia como turista peruano</h2>
<p>Italia forma parte del Espacio Schengen, por lo que los ciudadanos peruanos no requieren visa para viajes turísticos de hasta 90 días. Debes presentar pasaporte vigente, pasaje aéreo de ida y vuelta, Seguro médico Schengen de 30.000€ sin deducible, reserva de hotel confirmada o carta de invitación italiana (Lettera di invito) y solvencia económica.</p>`,
  },
  {
    slug: "punta-cana-vs-cancun-cual-elegir-desde-lima",
    titulo: "Punta Cana vs. Cancún desde Lima: ¿Cuál conviene más para tus vacaciones Todo Incluido?",
    desc: "Comparativa de playas, resorts 5 estrellas, requisitos de visa para peruanos, vida nocturna, parques y precios en dólares.",
    categoria: "Caribe",
    catColor: "bg-cyan-600",
    fecha: "16 Oct 2026",
    lectura: "5 min",
    imagen: IMG_BLOG_CAR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Comparativa entre los dos reyes del Caribe</h2>
<p><strong>Punta Cana (República Dominicana)</strong> no exige visa a los ciudadanos peruanos (solo pasaporte vigente y formulario E-Ticket) y destaca por sus resorts 5 estrellas frente a Playa Bávaro y Bayahíbe con paquetes Todo Incluido Desde $1,099 USD.</p>
<p><strong>Cancún y la Riviera Maya (México)</strong> combinan playas turquesas con maravillas arqueológicas como Chichén Itzá y parques como Xcaret. Recuerda que para México puedes viajar con Visa Mexicana o si ya cuentas con Visa vigente de EE. UU., Canadá o Schengen.</p>`,
  },
  {
    slug: "que-incluye-un-resort-all-inclusive-caribe",
    titulo: "¿Qué incluye realmente un paquete All Inclusive (Todo Incluido) en el Caribe?",
    desc: "Desayunos, almuerzos, cenas a la carta, bebidas alcohólicas, snacks 24 horas, deportes acuáticos y entretenimiento nocturno explicados al detalle.",
    categoria: "Caribe",
    catColor: "bg-teal-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_CAR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Viaja sin preocuparte por la billetera en destino</h2>
<p>Cuando reservas un paquete All Inclusive en Punta Cana, Cancún, San Andrés, Aruba, Curazao, Jamaica o Decameron Punta Sal con Cityland Travel, tu brazalete cubre todas las comidas buffet y restaurantes temáticos, bebidas con y sin alcohol ilimitadas, snacks las 24 horas, actividades de playa y shows nocturnos, además de tus vuelos desde Lima y traslados.</p>`,
  },
  {
    slug: "viajar-a-colombia-cartagena-san-andres-medellin-solo-dni",
    titulo: "Guía para viajar a Cartagena, Medellín y San Andrés desde Lima solo con tu DNI",
    desc: "Cómo llenar el Check-Mig de Colombia, tarjeta de turismo de San Andrés, equipaje permitido y mejores combinados en dólares.",
    categoria: "Caribe",
    catColor: "bg-amber-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_CAR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Colombia sin pasaporte ni visa para peruanos</h2>
<p>Gracias a los acuerdos de la Comunidad Andina (CAN), los ciudadanos peruanos pueden ingresar a Cartagena, Medellín, Bogotá, Cali, Santa Marta y la Isla de San Andrés presentando únicamente su DNI peruano vigente. En Cityland Travel nos encargamos de tu registro Check-Mig, traslados, hoteles y tours como Islas del Rosario, Comuna 13, Guatapé y Johnny Cay.</p>`,
  },
  {
    slug: "permiso-notarial-viaje-menores-peru-requisitos",
    titulo: "Permiso Notarial de Viaje para Menores de Edad en Perú: Cuándo es obligatorio",
    desc: "Diferencias entre vuelos nacionales dentro del Perú y vuelos internacionales cuando un niño o adolescente viaja con uno o ambos padres.",
    categoria: "Requisitos",
    catColor: "bg-indigo-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_PER,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Normativa de Migraciones Perú para viajes con menores</h2>
<p>1. <strong>En vuelos nacionales dentro del Perú:</strong> El menor puede viajar acompañado de uno solo de sus padres presentando su DNI vigente, sin requerir permiso notarial del otro progenitor (salvo que viaje con un tercero o solo).<br>
2. <strong>En vuelos internacionales al extranjero:</strong> Si el menor sale del Perú con ambos padres, solo requiere DNI/Pasaporte. Si viaja con uno solo de sus padres o con un acompañante (como en viajes de promoción o quinceañeras), es obligatorio presentar la Autorización Notarial de Viaje al Exterior firmada por el padre ausente o ambos padres.</p>`,
  },
  {
    slug: "cruceros-por-el-caribe-sin-visa-americana-desde-peru",
    titulo: "Cruceros por el Caribe sin Visa Americana saliendo desde Panamá o Cartagena",
    desc: "Cómo navegar 7 noches Todo Incluido por Aruba, Bonaire y Curazao sin necesidad de tramitar visa de Estados Unidos.",
    categoria: "Cruceros",
    catColor: "bg-blue-700",
    fecha: "16 Oct 2026",
    lectura: "5 min",
    imagen: IMG_BLOG_CAR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>El Caribe en crucero solo con pasaporte peruano</h2>
<p>Los itinerarios del Caribe Sur que zarpan desde Colón (Panamá) o Cartagena de Indias (Colombia) permiten a los viajeros peruanos disfrutar de 7 noches de crucero con pensión completa visitando Aruba, Curazao y Bonaire sin tocar puerto estadounidense y, por lo tanto, sin requerir visa americana.</p>`,
  },
  {
    slug: "mejor-epoca-comprar-vuelos-fiestas-patrias-ano-nuevo",
    titulo: "Con cuánta anticipación reservar paquetes para Fiestas Patrias y Año Nuevo desde Lima",
    desc: "Cómo asegurar cupos aéreos bloqueados y congelar tu tarifa en dólares separando con el 50% de inicial antes de que suban las aerolíneas.",
    categoria: "Consejos",
    catColor: "bg-emerald-700",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_PER,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Ahorra reservando en preventa con el 50%</h2>
<p>Las fechas de Fiestas Patrias (28 de julio) y Año Nuevo concentran la mayor demanda aérea del año en Perú. Reservar entre 60 y 90 días antes mediante los bloqueos de agencia de Cityland Travel te permite congelar el precio en dólares con el 50% de inicial y completar el saldo en cuotas antes de tu viaje.</p>`,
  },
  {
    slug: "requisitos-vacuna-fiebre-amarilla-aruba-curazao-panama",
    titulo: "Qué destinos exigen el Certificado Internacional de Vacuna contra la Fiebre Amarilla",
    desc: "Con cuántos días de anticipación debes vacunarte antes de volar a Aruba, Curazao, Bahamas, Costa Rica o Tailandia.",
    categoria: "Requisitos",
    catColor: "bg-amber-700",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_CAR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>La regla de los 10 días previos al embarque</h2>
<p>Destinos como Aruba, Curazao, Bahamas, Costa Rica y Tailandia solicitan a los viajeros procedentes del Perú el Carnet Internacional de Vacunación contra la Fiebre Amarilla. La dosis única (válida de por vida) debe haberse aplicado al menos <strong>10 días calendario antes de la fecha de tu vuelo</strong>.</p>`,
  },
  {
    slug: "como-verificar-codigo-reserva-pnr-aerolinea",
    titulo: "Cómo verificar tu código de reserva aérea (PNR) y E-Ticket en la web de la aerolínea",
    desc: "Aprende a comprobar en 1 minuto tu boleto emitido en LATAM, Iberia, Air Europa, Plus Ultra, Copa Airlines o Avianca.",
    categoria: "Seguridad",
    catColor: "bg-slate-800",
    fecha: "16 Oct 2026",
    lectura: "3 min",
    imagen: IMG_BLOG_USA,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Transparencia total en cada emisión de Cityland Travel</h2>
<p>Todo boleto aéreo oficial cuenta con un código alfanumérico de 6 caracteres llamado <strong>PNR (Passenger Name Record)</strong> y un número de boleto electrónico de 13 dígitos. Con ese código y tu apellido puedes ingresar directamente a la sección "Mis Viajes" o "Gestionar tu reserva" de la aerolínea para verificar tus vuelos y maletas al instante.</p>`,
  },
  {
    slug: "viajes-quinceaneras-europa-disney-que-incluyen",
    titulo: "Viajes de Quinceañeras a Europa y Disney Orlando: ¿Cómo funcionan los grupos acompañados?",
    desc: "Seguridad, coordinadoras desde Lima, hoteles seleccionados, entradas a parques temáticos, fiesta de gala y facilidades de pago para padres.",
    categoria: "Quinceañeras",
    catColor: "bg-pink-600",
    fecha: "16 Oct 2026",
    lectura: "5 min",
    imagen: IMG_BLOG_EUR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Un recuerdo para toda la vida con seguridad total</h2>
<p>Nuestros programas de Quinceañeras a Europa (Madrid, París, Disneyland París, Venecia, Florencia y Roma) y a Florida (Orlando Disney + Universal + Miami + Crucero Bahamas) cuentan con acompañamiento permanente desde el aeropuerto de Lima, grupo privado de WhatsApp para padres con reportes diarios y seguro médico integral.</p>`,
  },
  {
    slug: "paquetes-luna-de-miel-destinos-mas-romanticos",
    titulo: "Los 7 mejores destinos de Luna de Miel saliendo desde Lima (Caribe, Europa y Exóticos)",
    desc: "Ideas y presupuestos en dólares para recién casados: Punta Cana, Riviera Maya, Aruba, Crucero Caribe, París-Italia, Islas Griegas y Dubái.",
    categoria: "Luna de Miel",
    catColor: "bg-rose-600",
    fecha: "16 Oct 2026",
    lectura: "5 min",
    imagen: IMG_BLOG_CAR,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Diseña tu viaje de bodas con atenciones especiales</h2>
<p>En Cityland Travel gestionamos beneficios de lunamieleros (decoración romántica en habitación, cena especial y ascensos de categoría sujetos a disponibilidad del resort) tanto en resorts Todo Incluido de Punta Cana, Cancún y Aruba como en circuitos por París, Venecia, Santorini y Dubái.</p>`,
  },
  {
    slug: "vuelos-de-estados-unidos-a-lima-para-peruanos",
    titulo: "Cómo comprar vuelos de Miami, Nueva York, Nueva Jersey o Los Ángeles a Lima al mejor precio",
    desc: "Guía para la comunidad peruana en Estados Unidos y familiares en Perú que desean emitir pasajes hacia Lima en dólares con maleta de 23 kg.",
    categoria: "Vuelos",
    catColor: "bg-blue-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_USA,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Conecta a tu familia entre Estados Unidos y el Perú</h2>
<p>Tanto si resides en Miami, Orlando, Nueva York, Paterson/Newark (Nueva Jersey), Los Ángeles, Houston, Chicago o Washington como si deseas comprar el pasaje desde Lima para que un familiar venga de visita al Perú, en Cityland Travel emitimos boletos en LATAM, American, United, Delta y Copa Airlines con equipaje de bodega incluido.</p>`,
  },
  {
    slug: "por-que-reservar-con-agencia-de-viajes-formal-lima",
    titulo: "5 razones para reservar tu viaje internacional con una agencia física y formal en Lima",
    desc: "Respaldo legal RUC 20614914239, oficina en Los Olivos, soporte humano 24/7 ante cambios de vuelos y asesoría migratoria real.",
    categoria: "Agencia",
    catColor: "bg-red-600",
    fecha: "16 Oct 2026",
    lectura: "4 min",
    imagen: IMG_BLOG_PER,
    autor: "Equipo Cityland Travel",
    contenido: `<h2>Seguridad y acompañamiento humano antes, durante y después de tu vuelo</h2>
<p>A diferencia de las plataformas extranjeras sin oficinas en el Perú, en <strong>Cityland Travel E.I.R.L. (RUC 20614914239)</strong> cuentas con una sede física en Av. Antúnez de Mayolo N. 814 (Los Olivos, Lima) y 12 asesores especializados listos para resolver cambios, añadir equipaje, preparar tu carpeta migratoria y asistirte las 24 horas.</p>`,
  },
];
