// Tipo de producto de cada landing /madrid/[slug]: define que tarjetas de precio se muestran y como se rotula el "Desde".
export type TipoProductoMadrid =
  | "MIGRATORIO"
  | "IDA_Y_VUELTA"
  | "RETORNO_MAD_LIM"
  | "SOLO_IDA_VISA"
  | "SERVICIO";

// Clave = slug de modalidad, producto, paquete, perfil o servicio del catalogo. Lo que no figura es MIGRATORIO.
const TIPO_POR_CLAVE: Record<string, TipoProductoMadrid> = {
  // Silo 1: modalidades por zona
  "boleto-solo-ida-visa-residencia": "SOLO_IDA_VISA",
  "vuelo-retorno-madrid-a-lima": "RETORNO_MAD_LIM",
  "vuelo-ida-y-vuelta-cerrado": "IDA_Y_VUELTA",
  // Silos 2 y 3: productos y paquetes
  "solo-carpeta-migratoria-madrid": "SERVICIO",
  "seguro-schengen-y-hotel-madrid": "SERVICIO",
  "boleto-solo-ida-madrid": "SOLO_IDA_VISA",
  "boleto-solo-ida-madrid-visa": "SOLO_IDA_VISA",
  "vuelo-ida-vuelta-madrid": "IDA_Y_VUELTA",
  "vuelo-madrid-a-lima-retorno": "RETORNO_MAD_LIM",
  // Silo 4: perfiles de viajero
  "estudiantes-y-master-en-madrid": "SOLO_IDA_VISA",
  "trabajadores-con-contrato-visa": "SOLO_IDA_VISA",
  "solo-reserva-hotel-y-retorno-rf": "SERVICIO",
  // Silo 5: servicios y casos reales
  "reserva-retorno-rf-24h-madrid-lima": "SERVICIO",
  "reserva-hotel-verificable-barajas-madrid": "SERVICIO",
  "carpeta-migratoria-completa-sin-vuelo-madrid": "SERVICIO",
  "seguro-medico-schengen-30000-euros-madrid": "SERVICIO",
  "maleta-adicional-23kg-bodega-madrid": "SERVICIO",
  "checkin-y-asignacion-asiento-madrid": "SERVICIO",
  "reprogramacion-cambio-fecha-vuelo-madrid": "SERVICIO",
  "boleto-madrid-a-lima-solo-ida": "RETORNO_MAD_LIM",
  "boleto-madrid-lima-madrid-ida-vuelta": "IDA_Y_VUELTA",
  "pasaje-lima-madrid-con-visa-de-trabajo": "SOLO_IDA_VISA",
  "pasaje-lima-madrid-con-visa-de-estudios": "SOLO_IDA_VISA",
  "pasaje-lima-madrid-reagrupacion-familiar": "SOLO_IDA_VISA",
};

export function tipoDeProductoMadrid(clave: string): TipoProductoMadrid {
  return TIPO_POR_CLAVE[clave] ?? "MIGRATORIO";
}

// Rotulo del precio en la tarjeta del plan.
export function etiquetaPrecioTarjeta(tipo: TipoProductoMadrid): string {
  switch (tipo) {
    case "IDA_Y_VUELTA":
      return "Ida y vuelta desde";
    case "RETORNO_MAD_LIM":
      return "Boleto desde";
    case "SOLO_IDA_VISA":
      return "Solo ida desde";
    case "SERVICIO":
      return "Servicio desde";
    default:
      return "Desde";
  }
}

// Rotulo corto para enlaces cruzados entre landings.
export function etiquetaPrecioEnlace(tipo: TipoProductoMadrid): string {
  switch (tipo) {
    case "IDA_Y_VUELTA":
      return "Ida y vuelta desde";
    case "SERVICIO":
      return "Servicio desde";
    case "RETORNO_MAD_LIM":
    case "SOLO_IDA_VISA":
      return "Boleto desde";
    default:
      return "Paquete desde";
  }
}

// El precio que se declara fuera de la pagina (JSON-LD) es el menor que el visitante ve en las tarjetas.
export function precioMinimoVisible(planes: { precioUSD: number }[], respaldo: number): number {
  return planes.length ? Math.min(...planes.map((p) => p.precioUSD)) : respaldo;
}
