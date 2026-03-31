"use client";

import { useEffect, useState } from "react";

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
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(nextDark);
    document.documentElement.classList.toggle("theme-dark", nextDark);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("theme-dark", nextDark);
    window.localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Cambiar tema"
            onClick={toggleTheme}
            className="flex h-10 items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
          >
            <span className={`text-base transition-transform duration-300 ${ready && isDark ? "rotate-0" : "rotate-180"}`}>
              {ready && isDark ? "☀" : "☾"}
            </span>
            <span className="hidden sm:inline">{ready && isDark ? "Light" : "Dark"}</span>
          </button>

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
