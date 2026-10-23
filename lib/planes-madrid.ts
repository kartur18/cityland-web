// Tarjetas de precio y textos de metadatos de /madrid/[slug] segun el tipo de producto de cada landing.
import type { PlanMadridReal } from "@/components/MadridMigratorioTemplate";
import { etiquetaPrecioTarjeta, type TipoProductoMadrid } from "@/lib/tipo-producto-madrid";

interface EntradaPlanes {
  tipo: TipoProductoMadrid;
  zona: string;
  codigoRuta: string;
  aerolinea: string;
  precio: number;
  nombreProducto: string;
}

function planesMigratorios(zona: string, codigoRuta: string, aerolinea: string): PlanMadridReal[] {
  return [
    {
      etiqueta: "Plan Promo · Separa con $350 (50%)",
      titulo: `Plan Promo a ${zona} ($699)`,
      precioUSD: 699,
      subtitulo: `Salidas fines de Feb, Mar, Abr y May · 5 Documentos Incluidos`,
      incluye: [
        `Pasaje de avión de ida emitido (${codigoRuta})`,
        "Boleto de regreso reservado en sistema para Migraciones",
        `Reserva de hotel verificable en ${zona} o cuadre con Carta`,
        "Seguro Schengen 30.000€ sin deducible + Check-in 24h antes",
      ],
      waMensaje: `¡Hola! Quiero más información del paquete a ${zona} desde $699.`,
    },
    {
      etiqueta: "★ El Más Pedido · Separa con $400 (50%)",
      titulo: `Plan Smart a ${zona} ($799)`,
      precioUSD: 799,
      subtitulo: "Salidas Jun, Sep, Oct y Nov + Asesoría Migratoria 1 a 1",
      destacado: true,
      incluye: [
        `Pasaje de avión de ida emitido + Boleto de regreso para Migraciones`,
        `Reserva de hotel en ${zona} o sincronización con Carta de Invitación`,
        "Seguro médico internacional Schengen de 30.000€ sin franquicia",
        "Check-in 24h antes, elección de asiento y preparación paso a paso",
      ],
      waMensaje: `¡Hola! Quiero más información del paquete Smart a ${zona} desde $799.`,
    },
    {
      etiqueta: "Salidas Cercanas · Separa con $450 (50%)",
      titulo: `Plan Plus a ${zona} ($899)`,
      precioUSD: 899,
      subtitulo: "Salidas Enero, 1ra quincena Febrero o rutas con conexión",
      incluye: [
        "Pasaje de avión de ida + Boleto de regreso reservado para Migraciones",
        `Voucher de hotel verificable en ${zona} por tus días de estadía`,
        "Seguro médico Schengen oficial de 30.000€ sin franquicia",
        "Revisión de bolsa de viaje BOE y check-in 24h antes garantizado",
      ],
      waMensaje: `¡Hola! Quiero más información del paquete Plus a ${zona} desde $899.`,
    },
    {
      etiqueta: "Temporada Alta / 23 kg · Separa con $500",
      titulo: `Plan Full ${zona} con Maleta 23 kg ($999)`,
      precioUSD: 999,
      subtitulo: "Salidas Dic, Jul, Ago o incluye maleta grande de 23 kg en bodega",
      incluye: [
        `Pasaje de avión de ida (${aerolinea}) + Maleta 23 kg en bodega`,
        "Boleto de regreso reservado en sistema para Migraciones",
        "Reserva de hotel + Seguro Schengen 30.000€ + Check-in 24h antes",
        "Contrato formal y comprobante SUNAT (RUC 20614914239)",
      ],
      waMensaje: `¡Hola! Quiero más información del paquete Full a ${zona} con maleta de 23 kg desde $999.`,
    },
  ];
}

// Una sola tarjeta con el precio real del producto; solo MIGRATORIO muestra los 4 planes de 699 a 999.
export function construirPlanesMadrid(e: EntradaPlanes): PlanMadridReal[] {
  const { tipo, zona, codigoRuta, aerolinea, precio, nombreProducto } = e;
  const mitad = Math.round(precio * 0.5);
  const etiqueta = (nombre: string) => `${nombre} · Separa con $${mitad} (50%)`;
  const cierre = "Check-in 24h antes hecho por tu asesor";

  switch (tipo) {
    case "MIGRATORIO":
      return planesMigratorios(zona, codigoRuta, aerolinea);
    case "IDA_Y_VUELTA":
      return [
        {
          etiqueta: etiqueta("Ida y vuelta"),
          titulo: `Pasaje ida y vuelta a ${zona}`,
          precioUSD: precio,
          subtitulo: "Fechas de regreso definidas al reservar",
          incluye: [
            "Pasaje de ida y vuelta Lima – Madrid emitido con código PNR",
            `Aerolínea: ${aerolinea}`,
            cierre,
          ],
          waMensaje: `¡Hola! Quiero cotizar el pasaje de ida y vuelta Lima – ${zona} desde $${precio}.`,
        },
      ];
    case "RETORNO_MAD_LIM":
      return [
        {
          etiqueta: etiqueta("Boleto de regreso"),
          titulo: "Boleto Madrid → Lima",
          precioUSD: precio,
          subtitulo: "Fechas confirmadas al reservar",
          incluye: ["Boleto Madrid → Lima emitido con código PNR", `Aerolínea: ${aerolinea}`, cierre],
          waMensaje: `¡Hola! Quiero cotizar el boleto Madrid → Lima desde $${precio}.`,
        },
      ];
    case "SOLO_IDA_VISA":
      return [
        {
          etiqueta: etiqueta("Solo ida"),
          titulo: `Pasaje solo ida Lima – ${zona}`,
          precioUSD: precio,
          subtitulo: "Para viajar con visado, residencia o DNI/TIE",
          incluye: ["Pasaje de solo ida Lima – Madrid emitido con código PNR", `Aerolínea: ${aerolinea}`, cierre],
          waMensaje: `¡Hola! Quiero cotizar el pasaje de solo ida Lima – ${zona} (visa o residencia) desde $${precio}.`,
        },
      ];
    default:
      return [
        {
          etiqueta: etiqueta("Servicio"),
          titulo: nombreProducto,
          precioUSD: precio,
          subtitulo: "Servicio suelto, sin pasaje de avión",
          incluye: [
            nombreProducto,
            "Comprobante SUNAT (RUC 20614914239)",
            "Atención en Los Olivos o por WhatsApp",
          ],
          waMensaje: `¡Hola! Quiero contratar el servicio "${nombreProducto}" desde $${precio}.`,
        },
      ];
  }
}

interface EntradaTextos {
  tipo: TipoProductoMadrid;
  tituloSinDosPuntos: string;
  subtituloDorado: string;
  mitadFmt: string;
  precioFmt: string;
  zona: string;
  nombreProducto: string;
  precioCarpetaSolaUSD: number;
  salvedadLegal: string;
}

export function textosMetaMadrid(e: EntradaTextos): { descripcion: string; faqs: { q: string; a: string }[] } {
  const { tipo, tituloSinDosPuntos: titulo, subtituloDorado: sub, mitadFmt, precioFmt, zona, nombreProducto } = e;
  const separa = `Separa con $${mitadFmt} (50%) en Los Olivos.`;
  const faqQ = (rotulo: string) => `¿Qué incluye ${nombreProducto} hacia ${zona} (${rotulo} $${precioFmt} USD)?`;

  switch (tipo) {
    case "MIGRATORIO":
      return {
        descripcion: `${titulo} (${sub}). Incluye PNR, retorno RF 24h, hotel verificable, seguro Schengen 30.000€ y check-in. ${separa}`,
        faqs: [
          {
            q: `¿Qué incluye el Paquete Migratorio a ${zona} (Desde $${precioFmt} USD)?`,
            a: `Incluye tu boleto aéreo desde el Aeropuerto Jorge Chávez (Lima), reserva de retorno activa (MAD → LIM) 24h antes, reserva de hotel verificable en ${zona}, seguro Schengen 30.000€ y check-in gestionado por tu asesor. ${e.salvedadLegal}`,
          },
          {
            q: `Si ya compré mi pasaje a Madrid por mi cuenta, ¿pueden armarme solo la Carpeta Migratoria?`,
            a: `¡Sí! Nuestro servicio de Solo Carpeta Migratoria Express (desde $${e.precioCarpetaSolaUSD} USD) incluye reserva de retorno activa 24h antes, hotel verificable, seguro Schengen 30.000€ y check-in.`,
          },
        ],
      };
    case "IDA_Y_VUELTA":
      return {
        descripcion: `${titulo} (${sub}). Pasaje de ida y vuelta Lima – Madrid con código PNR y check-in hecho por tu asesor. ${separa}`,
        faqs: [
          {
            q: faqQ(`${etiquetaPrecioTarjeta(tipo)}`),
            a: "Incluye el pasaje de ida y vuelta Lima – Madrid con código PNR y check-in gestionado por tu asesor; las fechas de regreso se fijan al reservar. Si necesitas sumar hotel verificable y seguro Schengen, te lo cotizamos por WhatsApp.",
          },
        ],
      };
    case "RETORNO_MAD_LIM":
      return {
        descripcion: `${titulo} (${sub}). Boleto de regreso Madrid → Lima con código PNR y check-in hecho por tu asesor. ${separa}`,
        faqs: [
          {
            q: faqQ(etiquetaPrecioTarjeta(tipo)),
            a: "Incluye el boleto Madrid → Lima con código PNR y check-in gestionado por tu asesor. Coordinamos las fechas contigo por WhatsApp antes de emitir.",
          },
        ],
      };
    case "SOLO_IDA_VISA":
      return {
        descripcion: `${titulo} (${sub}). Pasaje de solo ida Lima – Madrid para viajar con visado, residencia o DNI/TIE. PNR y check-in por tu asesor. ${separa}`,
        faqs: [
          {
            q: faqQ(etiquetaPrecioTarjeta(tipo)),
            a: "Incluye el pasaje de solo ida Lima – Madrid con código PNR y check-in gestionado por tu asesor. Es una tarifa pensada para quien viaja con visado de estudios o trabajo, reagrupación familiar o DNI/TIE español.",
          },
        ],
      };
    default:
      return {
        descripcion: `${titulo} (${sub}). Servicio suelto con comprobante SUNAT y atención en Los Olivos o por WhatsApp (+51 944 103 890).`,
        faqs: [
          {
            q: faqQ(etiquetaPrecioTarjeta(tipo)),
            a: `Es un servicio suelto, sin pasaje de avión: ${nombreProducto}. Tu asesor te confirma por WhatsApp el detalle exacto y los tiempos de entrega.`,
          },
        ],
      };
  }
}
