export default function Image({ src, alt }: { src: unknown; alt: string; [k: string]: unknown }) {
  // eslint-disable-next-line @next/next/no-img-element -- stub solo para el script de medicion
  return <img src={typeof src === "string" ? src : ""} alt={alt} />;
}
