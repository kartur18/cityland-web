"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "scale" | "fade";
  delay?: number;
  className?: string;
  stagger?: number;
}

const CLASS_MAP = {
  up: "reveal",
  fade: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function AnimateOnScroll({ children, direction = "up", delay = 0, className = "", stagger }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const staggerClass = stagger ? `stagger-${stagger}` : "";
  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} className={`${CLASS_MAP[direction]} ${staggerClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
