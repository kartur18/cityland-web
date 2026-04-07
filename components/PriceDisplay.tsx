interface Props {
  price: number;
  regularPrice?: number;
  cuotas: number;
}

export default function PriceDisplay({ price, regularPrice, cuotas }: Props) {
  const savings = regularPrice ? regularPrice - price : 0;
  const monthly = Math.round(price / cuotas);

  return (
    <div className="space-y-2">
      {/* Regular price strikethrough */}
      {regularPrice && regularPrice > price && (
        <p className="text-gray-400 text-sm line-through">
          Precio regular: ${regularPrice}
        </p>
      )}

      {/* Current price */}
      <p className="text-[#dc2626] font-[family-name:var(--font-bebas)] text-5xl tracking-wide leading-none">
        ${price}
      </p>
      <p className="text-xs text-gray-500">por persona</p>

      {/* Savings badge */}
      {savings > 0 && (
        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
          Ahorras ${savings}
        </span>
      )}

      {/* Installments */}
      {cuotas > 1 && (
        <p className="text-sm text-gray-600">
          o desde <span className="font-bold text-[#0a1628]">${monthly}/mes</span> en {cuotas} cuotas
        </p>
      )}
    </div>
  );
}
