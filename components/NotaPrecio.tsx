import { NOTA_PRECIO_REFERENCIAL, NOTA_PRECIO_REFERENCIAL_GENERAL } from "@/lib/formato-precio";

// Nota estandar de precio referencial: una vez por bloque de precios, no en cada tarjeta chica.
export default function NotaPrecio({
  className = "",
  porPersona = true,
  extra,
}: {
  className?: string;
  porPersona?: boolean;
  extra?: string;
}) {
  return (
    <p className={`text-xs text-slate-500 leading-relaxed ${className}`.trim()}>
      {porPersona ? NOTA_PRECIO_REFERENCIAL : NOTA_PRECIO_REFERENCIAL_GENERAL}
      {extra ? ` ${extra}` : ""}
    </p>
  );
}
