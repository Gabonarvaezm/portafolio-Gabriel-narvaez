"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
};

export function ScrollSection({ children, className = "", variant = "up" }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frameId = 0;

    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewportHeight);
      const visiblePixels = Math.max(0, visibleBottom - visibleTop);
      const sectionHeight = Math.max(rect.height, 1);
      const visibleRatio = visiblePixels / Math.min(sectionHeight, viewportHeight);
      const entersViewport = rect.top < viewportHeight * 0.82 && rect.bottom > viewportHeight * 0.14;

      setInView(entersViewport && (visiblePixels > 140 || visibleRatio > 0.12));
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(checkVisibility);
    };

    checkVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-in-view={inView}
      data-variant={variant}
      className={`scroll-section ${className}`.trim()}
    >
      {children}
    </div>
  );
}
