import { PRECIO_IDA_VUELTA_MADRID_DESDE } from "@/components/constantes";

// Precio «desde» de las rutas entre ciudades del Perú y España (/espana/pasajes-*-barcelona, /espana/vuelos-*-*).
// Base: el ida y vuelta Lima–Madrid de components/constantes.ts. Se suma lo que cobra el tramo nacional en el
// mismo boleto (el «recargo» de cada ciudad en lib/landings-espana-provincias.ts). Barcelona va igual que Madrid.
// Desde Valencia, Bilbao, Sevilla o Málaga no hay dato de mercado de la conexión: la página muestra el precio
// desde Madrid y la conexión se cotiza aparte (no se inventa un número).

export const PRECIO_BASE_RUTAS_ESPANA = PRECIO_IDA_VUELTA_MADRID_DESDE;

export const precioRutaEspana = (recargoNacional: number) => PRECIO_BASE_RUTAS_ESPANA + recargoNacional;
