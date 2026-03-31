"use client";

import { useEffect, useState } from "react";

type HeaderProps = {
  navItems: Array<{ href: string; label: string }>;
  darkLabel: string;
  lightLabel: string;
  languageLabel: string;
  language: "es" | "en";
  onLanguageChange: (language: "es" | "en") => void;
};

type ThemeMode = "light" | "dark";

function applyTheme(theme: ThemeMode) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("theme-dark", isDark);
  document.body.classList.toggle("theme-dark", isDark);
  window.localStorage.setItem("portfolio-theme", theme);
}

export function Header({
  navItems,
  darkLabel,
  lightLabel,
  languageLabel,
  language,
  onLanguageChange,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: ThemeMode = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const isDark = theme === "dark";

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
          <div className="language-control relative hidden sm:block">
            <label className="mb-1 block pl-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              {languageLabel}
            </label>
            <div className="relative">
              <select
                aria-label={languageLabel}
                value={language}
                onChange={(event) => onLanguageChange(event.target.value as "es" | "en")}
                className="language-select h-10 min-w-[132px] appearance-none rounded-xl border-2 border-gray-300 bg-white pl-4 pr-10 text-sm font-semibold text-gray-700 outline-none transition hover:border-blue-500 focus:border-blue-500"
              >
                <option value="es">ESP</option>
                <option value="en">ENG</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">▾</span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Cambiar tema"
            aria-pressed={isDark}
            onClick={toggleTheme}
            className="flex h-10 min-w-[108px] items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
          >
            <span className={`text-base transition-transform duration-300 ${mounted && isDark ? "rotate-0 scale-100" : "rotate-180 scale-95"}`}>
              {mounted && isDark ? "☀" : "☾"}
            </span>
            <span>{mounted && isDark ? lightLabel : darkLabel}</span>
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
          <div className="mb-4">
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{languageLabel}</label>
            <div className="relative">
              <select
                aria-label={languageLabel}
                value={language}
                onChange={(event) => onLanguageChange(event.target.value as "es" | "en")}
                className="language-select h-11 w-full appearance-none rounded-xl border-2 border-gray-300 bg-white px-3 pr-10 text-sm font-semibold text-gray-700 outline-none transition hover:border-blue-500 focus:border-blue-500"
              >
                <option value="es">ESP</option>
                <option value="en">ENG</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">▾</span>
            </div>
          </div>

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
