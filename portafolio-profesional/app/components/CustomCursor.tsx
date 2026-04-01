"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      setEnabled(false);
      document.documentElement.classList.remove("cursor-ready");
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("cursor-ready");

    const cursor = document.querySelector<HTMLElement>("[data-cursor-shell]");
    const glow = document.querySelector<HTMLElement>("[data-cursor-glow]");
    const dot = document.querySelector<HTMLElement>("[data-cursor-dot]");

    if (!cursor || !glow || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    let raf = 0;

    const interactiveSelector = "a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']";

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;

      cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      raf = window.requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(interactiveSelector)));
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const onDown = () => document.documentElement.classList.add("cursor-pressed");
    const onUp = () => document.documentElement.classList.remove("cursor-pressed");
    const onLeave = () => document.documentElement.classList.remove("cursor-visible");
    const onEnter = () => document.documentElement.classList.add("cursor-visible");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    raf = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-ready", "cursor-visible", "cursor-pressed");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div data-cursor-glow className={`custom-cursor-glow${hovering ? " is-hovering" : ""}`} />
      <div data-cursor-shell className={`custom-cursor${hovering ? " is-hovering" : ""}`}>
        <span data-cursor-dot className={`custom-cursor-dot${hovering ? " is-hovering" : ""}`} />
      </div>
    </>
  );
}
