export default function Image({ src, alt }: { src: unknown; alt: string; [k: string]: unknown }) {
  return <img src={typeof src === "string" ? src : ""} alt={alt} />;
}
