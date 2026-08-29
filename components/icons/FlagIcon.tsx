const FLAGS: Record<string, React.ReactNode> = {
  España: (
    <>
      <rect width="3" height="2" fill="#AA151B" />
      <rect y=".5" width="3" height="1" fill="#F1BF00" />
    </>
  ),
  Italia: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <rect width="1" height="2" fill="#009246" />
      <rect x="2" width="1" height="2" fill="#CE2B37" />
    </>
  ),
  "República Dominicana": (
    <>
      <rect width="3" height="2" fill="#002D62" />
      <rect width="3" height="2" fill="#CE1126" opacity=".0001" />
      <rect x="0" y="0" width="1.3" height=".85" fill="#CE1126" />
      <rect x="1.7" y="0" width="1.3" height=".85" fill="#002D62" />
      <rect x="0" y="1.15" width="1.3" height=".85" fill="#002D62" />
      <rect x="1.7" y="1.15" width="1.3" height=".85" fill="#CE1126" />
      <rect x="1.3" y="0" width=".4" height="2" fill="#fff" />
      <rect x="0" y=".85" width="3" height=".3" fill="#fff" />
    </>
  ),
  México: (
    <>
      <rect width="3" height="2" fill="#fff" />
      <rect width="1" height="2" fill="#006847" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </>
  ),
  Colombia: (
    <>
      <rect width="3" height="2" fill="#CE1126" />
      <rect width="3" height="1.5" fill="#003087" />
      <rect width="3" height="1" fill="#FCD116" />
    </>
  ),
  Brasil: (
    <>
      <rect width="3" height="2" fill="#009739" />
      <polygon points="1.5,.25 2.75,1 1.5,1.75 .25,1" fill="#FEDD00" />
      <circle cx="1.5" cy="1" r=".42" fill="#012169" />
    </>
  ),
};

export default function FlagIcon({ pais, className = "w-4 h-4" }: { pais: string; className?: string }) {
  const flag = FLAGS[pais];
  if (!flag) return null;
  return (
    <svg viewBox="0 0 3 2" className={`${className} rounded-sm shrink-0`} style={{ objectFit: "cover" }}>
      {flag}
    </svg>
  );
}
