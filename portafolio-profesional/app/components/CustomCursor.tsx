"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      setEnabled(false);
      document.documentElement.classList.remove("cursor-ready", "cursor-visible", "cursor-pressed");
      document.body.classList.remove("cursor-ready", "cursor-visible", "cursor-pressed");
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("cursor-ready", "cursor-visible");
    document.body.classList.add("cursor-ready", "cursor-visible");

    return () => {
      document.documentElement.classList.remove("cursor-ready", "cursor-visible", "cursor-pressed");
      document.body.classList.remove("cursor-ready", "cursor-visible", "cursor-pressed");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

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
    let dotX = mouseX;
    let dotY = mouseY;
    let raf = 0;

    const interactiveSelector = "a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']";

    const render = () => {
      ringX += (mouseX - ringX) * 0.48;
      ringY += (mouseY - ringY) * 0.48;
      glowX += (mouseX - glowX) * 0.32;
      glowY += (mouseY - glowY) * 0.32;
      dotX += (mouseX - dotX) * 0.72;
      dotY += (mouseY - dotY) * 0.72;

      cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      raf = window.requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(interactiveSelector)));
      document.documentElement.classList.add("cursor-visible");
      document.body.classList.add("cursor-visible");
    };

    const onDown = () => {
      document.documentElement.classList.add("cursor-pressed");
      document.body.classList.add("cursor-pressed");
    };

    const onUp = () => {
      document.documentElement.classList.remove("cursor-pressed");
      document.body.classList.remove("cursor-pressed");
    };

    const onLeave = () => {
      document.documentElement.classList.remove("cursor-visible");
      document.body.classList.remove("cursor-visible");
    };

    const onEnter = () => {
      document.documentElement.classList.add("cursor-visible");
      document.body.classList.add("cursor-visible");
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("blur", onLeave);
    window.addEventListener("focus", onEnter);

    raf = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("focus", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div data-cursor-glow className={`custom-cursor-glow${hovering ? " is-hovering" : ""}`} />
      <div data-cursor-shell className={`custom-cursor${hovering ? " is-hovering" : ""}`} />
      <div data-cursor-dot className={`custom-cursor-dot${hovering ? " is-hovering" : ""}`} />
    </>
  );
}

