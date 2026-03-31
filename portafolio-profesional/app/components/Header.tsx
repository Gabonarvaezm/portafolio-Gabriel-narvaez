"use client";

import { useState } from "react";

const navItems = [
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#aprendizaje", label: "Aprendizaje" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-gray-900 font-extrabold transition hover:scale-105 hover:border-blue-500"
        >
          GB
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`block h-0.5 w-5 bg-gray-900 transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-gray-900 transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-gray-900 transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-black/10 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
