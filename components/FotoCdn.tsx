// Foto del CDN del segundo proveedor con varios tamaños: el CDN recorta al ancho que diga la URL («fit-in/700x0/»),
// así el celular baja una de 400 px y no la de 1,600 px. next/image con «unoptimized» siempre mandaba la grande.

const ANCHOS = [400, 700, 1000, 1400];

const conAncho = (src: string, w: number) => src.replace(/fit-in\/\d+x0\//, `fit-in/${w}x0/`);

export default function FotoCdn({
  src,
  alt,
  sizes,
  prioridad = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  prioridad?: boolean;
  className?: string;
}) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- el CDN ya entrega cada tamaño; next/image no puede armar el srcset
    <img
      src={conAncho(src, 700)}
      srcSet={ANCHOS.map((w) => `${conAncho(src, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      loading={prioridad ? "eager" : "lazy"}
      fetchPriority={prioridad ? "high" : "auto"}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
