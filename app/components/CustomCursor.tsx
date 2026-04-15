"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

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
    if (!enabled || !cursorRef.current || !dotRef.current) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const interactiveSelector = "a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']";

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      dot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

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
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("blur", onLeave);
    window.addEventListener("focus", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
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
      <div ref={cursorRef} className={`custom-cursor${hovering ? " is-hovering" : ""}`} />
      <div ref={dotRef} className={`custom-cursor-dot${hovering ? " is-hovering" : ""}`} />
    </>
  );
}
/*  */