import { PRECIO_IDA_VUELTA_MADRID_DESDE } from "@/components/constantes";

// Títulos escritos a mano: páginas cuyo título automático salía igual a otro (al recortar a 60 caracteres se perdía
// la ciudad, el mes o la modalidad) y páginas clave que deben usar las palabras que la gente busca. 24-oct-2026.
export const TITULOS_SEO_UNICOS: Readonly<Record<string, string>> = {
  "/vuelos/lima-madrid": `Pasajes Lima–Madrid ida y vuelta desde $${PRECIO_IDA_VUELTA_MADRID_DESDE.toLocaleString("en-US")} | Cityland`,
  "/vuelos/lima-cusco": "Pasajes Lima–Cusco baratos ida y vuelta | Cityland",
  "/vuelos/lima-arequipa": "Pasajes Lima–Arequipa baratos ida y vuelta | Cityland",
  "/vuelos/lima-piura": "Pasajes Lima–Piura baratos ida y vuelta | Cityland",
  "/vuelos/lima-tarapoto": "Pasajes Lima–Tarapoto baratos ida y vuelta | Cityland",
  "/vuelos/lima-iquitos": "Pasajes Lima–Iquitos baratos ida y vuelta | Cityland",
  "/vuelos/lima-puno": "Pasajes Lima–Puno (Juliaca) baratos | Cityland",

  "/paquetes-migratorios/desde-chiclayo-a-madrid": "Paquete migratorio a Madrid desde Chiclayo | Cityland",
  "/paquetes-migratorios/desde-tacna-a-madrid": "Paquete migratorio a Madrid desde Tacna | Cityland",
  "/paquetes-migratorios/desde-miraflores-a-madrid": "Paquete migratorio a Madrid desde Miraflores | Cityland",
  "/paquetes-migratorios/desde-ate-vitarte-a-milan": "Paquete migratorio a Milán desde Ate Vitarte | Cityland",
  "/paquetes-migratorios/desde-arequipa-a-milan": "Paquete migratorio a Milán desde Arequipa | Cityland",
  "/paquetes-migratorios/desde-callao-a-milan": "Paquete migratorio a Milán desde el Callao | Cityland",
  "/paquetes-migratorios/guia-madrid-como-funciona-boleto-de-regreso-para-migraciones":
    "Boleto de regreso a Madrid: ¿es ida y vuelta? | Cityland",
  "/paquetes-migratorios/guia-milan-como-funciona-boleto-de-regreso-para-migraciones":
    "Boleto de regreso a Milán: ¿es ida y vuelta? | Cityland",

  "/madrid/plan-estadia-7-dias-6-noches-vuelo-ida-vuelta-madrid-separa-con-50-por-ciento":
    "Ida y vuelta Lima–Madrid, 7 días, desde $1,090 | Cityland",
  "/madrid/plan-estadia-90-dias-maximo-schengen-vuelo-ida-vuelta-madrid-pago-bcp-bbva-interbank-yape":
    "Ida y vuelta Lima–Madrid por 90 días | Cityland",
  "/madrid/plan-salida-abril-semana-santa-madrid-vuelo-ida-vuelta-madrid-pago-bcp-bbva-interbank-yape":
    "Ida y vuelta Lima–Madrid en Semana Santa | Cityland",
  "/madrid/plan-estadia-9-dias-8-noches-boe-paquete-migratorio-madrid-checkin-hecho-por-asesor":
    "Paquete migratorio a Madrid, 9 días, desde $870 | Cityland",
  "/madrid/plan-estadia-30-dias-un-mes-paquete-migratorio-madrid-pago-bcp-bbva-interbank-yape":
    "Paquete migratorio a Madrid por un mes | Cityland",
  "/madrid/plan-estadia-60-dias-dos-meses-pasaje-madrid-2-maletas-23kg-separa-con-50-por-ciento":
    "Vuelo a Madrid con 2 maletas, 60 días | Cityland",
  "/madrid/plan-salida-octubre-madrid-barajas-pasaje-madrid-2-maletas-23kg-atencion-sede-los-olivos":
    "Vuelo a Madrid con 2 maletas en octubre | Cityland",
  "/madrid/plan-franquicia-1-maleta-23kg-vuelo-madrid-a-lima-retorno-emision-inmediata-pnr":
    "Pasaje Madrid–Lima con 1 maleta desde $730 | Cityland",
  "/madrid/plan-franquicia-2-maletas-23kg-vuelo-madrid-a-lima-retorno-separa-con-50-por-ciento":
    "Pasaje Madrid–Lima con 2 maletas desde $730 | Cityland",
  "/madrid/plan-ingreso-terminal-t4-barajas-vuelo-madrid-a-lima-retorno-separa-con-50-por-ciento":
    "Pasaje Madrid–Lima desde la T4 de Barajas | Cityland",
  "/madrid/plan-ingreso-terminal-t1-barajas-vuelo-madrid-a-lima-retorno-atencion-sede-los-olivos":
    "Pasaje Madrid–Lima desde la T1 de Barajas | Cityland",
  "/madrid/servicio-paquete-solo-ida-migratorio-lima-madrid-mayo-preventa-garantizada":
    "Paquete migratorio Lima–Madrid en mayo | Cityland",
  "/madrid/servicio-paquete-solo-ida-migratorio-lima-madrid-marzo-sede-los-olivos":
    "Paquete migratorio Lima–Madrid en marzo | Cityland",

  "/ofertas/oferta-tour-iquitos-rio-amazonas-lodge": "Oferta: tour a Iquitos y lodge en el Amazonas | Cityland",
  "/ofertas/tour-grupal-iquitos-rio-amazonas-lodge": "Tour grupal a Iquitos y lodge en el Amazonas | Cityland",
  "/ofertas/servicio-ejecutivo-viajes-de-incentivos-para-empresas": "Viajes de incentivos: servicio ejecutivo | Cityland",
  "/ofertas/corporativo-viajes-de-incentivos-para-empresas": "Viajes corporativos de incentivos | Cityland",
  "/ofertas/occidental-caribe-punta-cana-reserva-en-cuotas": "Occidental Caribe Punta Cana en cuotas | Cityland",
  "/ofertas/occidental-caribe-punta-cana-paquete-todo-incluido": "Occidental Caribe Punta Cana todo incluido | Cityland",
  "/ofertas/hard-rock-hotel-riviera-maya-paquete-todo-incluido": "Hard Rock Riviera Maya todo incluido | Cityland",
  "/ofertas/hard-rock-hotel-riviera-maya-reserva-en-cuotas": "Hard Rock Riviera Maya en cuotas | Cityland",
  "/ofertas/zuana-beach-resort-santa-marta-reserva-en-cuotas": "Zuana Beach Santa Marta en cuotas | Cityland",
  "/ofertas/zuana-beach-resort-santa-marta-paquete-todo-incluido": "Zuana Beach Santa Marta todo incluido | Cityland",
  "/ofertas/estadia-hotel-zuana-beach-santa-marta-5-dias-4-noches-todo-incluido":
    "Zuana Beach Santa Marta, 5 días y 4 noches | Cityland",
  "/ofertas/estadia-hotel-zuana-beach-santa-marta-reserva-en-cuotas-sin-intereses":
    "Zuana Beach Santa Marta en cuotas sin intereses | Cityland",
  "/ofertas/crucero-caribe-desde-cartagena-atencion-los-olivos": "Crucero Caribe desde Cartagena · Los Olivos | Cityland",
  "/ofertas/crucero-caribe-desde-cartagena-salida-desde-lima": "Crucero Caribe desde Cartagena, salida de Lima | Cityland",
  "/ofertas/crucero-caribe-desde-cartagena-temporada-2026": "Crucero Caribe desde Cartagena 2026 | Cityland",
  "/ofertas/crucero-caribe-sin-visa-panama-reserva-en-cuotas": "Crucero Caribe sin visa desde Panamá en cuotas | Cityland",
  "/ofertas/crucero-caribe-sin-visa-panama-temporada-2026": "Crucero Caribe sin visa desde Panamá 2026 | Cityland",
  "/ofertas/viaje-promocion-secundaria-cusco-salida-desde-lima": "Promoción de secundaria a Cusco desde Lima | Cityland",
  "/ofertas/viaje-promocion-secundaria-cusco-programa-oficial": "Promoción de secundaria a Cusco: programa | Cityland",
  "/ofertas/viaje-incentivos-empresas-cusco-programa-oficial": "Incentivos para empresas en Cusco: programa | Cityland",
  "/ofertas/viaje-incentivos-empresas-cusco-salida-desde-lima": "Incentivos para empresas en Cusco desde Lima | Cityland",
  "/ofertas/viaje-promocion-escolar-tarapoto-cotizacion-inmediata": "Promoción escolar a Tarapoto: cotiza hoy | Cityland",
  "/ofertas/viaje-promocion-escolar-tarapoto-reserva-en-cuotas": "Promoción escolar a Tarapoto en cuotas | Cityland",
  "/ofertas/viaje-delegaciones-deportivas-torneos-reserva-en-cuotas":
    "Viajes para delegaciones deportivas en cuotas | Cityland",
  "/ofertas/viaje-delegaciones-deportivas-torneos-temporada-2026": "Viajes para delegaciones deportivas 2026 | Cityland",
  "/ofertas/viaje-delegaciones-deportivas-torneos-programa-oficial":
    "Delegaciones deportivas a torneos: programa | Cityland",
  "/ofertas/ano-nuevo-reveillon-rio-de-janeiro-programa-oficial": "Año Nuevo en Río de Janeiro: programa | Cityland",
  "/ofertas/ano-nuevo-reveillon-rio-de-janeiro-salida-desde-lima": "Año Nuevo en Río de Janeiro desde Lima | Cityland",
  "/ofertas/peregrinacion-fatima-lourdes-madrid-cotizacion-inmediata":
    "Peregrinación a Fátima y Lourdes: cotiza hoy | Cityland",
  "/ofertas/peregrinacion-fatima-lourdes-madrid-salida-desde-lima":
    "Peregrinación a Fátima y Lourdes desde Lima | Cityland",
  "/ofertas/estadia-hotel-decameron-punta-sal-peru-aniversario-y-bodas":
    "Decameron Punta Sal para aniversarios y bodas | Cityland",
  "/ofertas/estadia-hotel-decameron-punta-sal-peru-temporada-verano-2026": "Decameron Punta Sal, verano 2026 | Cityland",
  "/ofertas/estadia-hotel-doubletree-hilton-paracas-tarifa-grupos-y-amigos":
    "DoubleTree Paracas para grupos y amigos | Cityland",
  "/ofertas/estadia-hotel-doubletree-hilton-paracas-preventa-con-50-por-ciento":
    "DoubleTree Paracas: separa con el 50% | Cityland",
  "/ofertas/rutas-peru-churin-banos-termales-huancahuasi-feriado-noviembre-todos-los-santos-preventa-con-50-por-ciento":
    "Churín y Huancahuasi: feriado de noviembre | Cityland",
  "/ofertas/rutas-peru-churin-banos-termales-huancahuasi-feriado-largo-diciembre-preventa-con-50-por-ciento":
    "Churín y Huancahuasi: feriado de diciembre | Cityland",
  "/ofertas/crucero-brasil-uruguay-argentina-temporada-2026": "Crucero Brasil, Uruguay y Argentina 2026 | Cityland",
  "/ofertas/crucero-brasil-uruguay-argentina-cotizacion-inmediata":
    "Crucero Brasil, Uruguay y Argentina: cotiza | Cityland",
  "/ofertas/crucero-brasil-uruguay-argentina-salida-desde-lima":
    "Crucero Brasil, Uruguay y Argentina desde Lima | Cityland",

  "/destinos/europa-clasica": "Europa clásica: Madrid, París y Roma | Cityland",
  "/destinos/madrid-paris-roma-12-dias": "Madrid, París y Roma en 12 días | Cityland",
};

export function tituloSeoUnico(ruta: string, tituloCalculado: string): string {
  return TITULOS_SEO_UNICOS[ruta] ?? tituloCalculado;
}
