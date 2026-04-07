"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  gallery: string[];
  alt: string;
}

export default function DestinoGallery({ gallery, alt }: Props) {
  const [active, setActive] = useState(0);

  if (!gallery.length) return null;

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={gallery[active]}
          alt={`${alt} - foto ${active + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-opacity duration-300"
          priority={active === 0}
        />
      </div>

      {/* Thumbnail strip */}
      {gallery.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden flex-shrink-0 ring-2 transition-all ${
                i === active
                  ? "ring-[#dc2626] opacity-100"
                  : "ring-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} - miniatura ${i + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
