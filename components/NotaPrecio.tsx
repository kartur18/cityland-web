import { NOTA_PRECIO_REFERENCIAL, NOTA_PRECIO_REFERENCIAL_GENERAL } from "@/lib/formato-precio";

// Nota estandar de precio referencial: una vez por bloque de precios, no en cada tarjeta chica.
export default function NotaPrecio({
  className = "",
  porPersona = true,
  oscuro = false,
  extra,
}: {
  className?: string;
  porPersona?: boolean;
  // Sobre fondo oscuro (hero, franjas azul marino) el texto va claro.
  oscuro?: boolean;
  extra?: string;
}) {
  return (
    <p className={`text-xs leading-relaxed ${oscuro ? "text-slate-300" : "text-slate-500"} ${className}`.trim()}>
      {porPersona ? NOTA_PRECIO_REFERENCIAL : NOTA_PRECIO_REFERENCIAL_GENERAL}
      {extra ? ` ${extra}` : ""}
    </p>
  );
}
