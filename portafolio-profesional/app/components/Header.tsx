"use client";

import { useEffect, useRef, useState } from "react";

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

const languageOptions = [
  { value: "es" as const, label: "ESP" },
  { value: "en" as const, label: "ENG" },
];

export function Header({
  navItems,
  darkLabel,
  lightLabel,
  languageLabel,
  language,
  onLanguageChange,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: ThemeMode = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const isDark = theme === "dark";
  const activeLanguage = languageOptions.find((option) => option.value === language)?.label ?? "ESP";

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
          <div ref={langRef} className="language-control relative hidden sm:block">
            <button
              type="button"
              aria-label={languageLabel}
              aria-expanded={langOpen}
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex h-10 min-w-[174px] items-center justify-between gap-3 rounded-xl border-2 border-gray-300 bg-white px-3 text-sm font-semibold text-gray-700 shadow-[0_8px_18px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-blue-500"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">{languageLabel}</span>
              <span className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-800">{activeLanguage}</span>
              <span className={`text-xs text-gray-500 transition ${langOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {langOpen ? (
              <div className="absolute right-0 top-[calc(100%+0.55rem)] z-50 min-w-[174px] overflow-hidden rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                {languageOptions.map((option) => {
                  const active = option.value === language;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        onLanguageChange(option.value);
                        setLangOpen(false);
                      }}
                      className={`mb-1 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition last:mb-0 ${active ? "bg-blue-600 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)]" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"}`}
                    >
                      <span>{option.label}</span>
                      <span className={`text-[10px] uppercase tracking-[0.18em] ${active ? "text-blue-100" : "text-gray-400"}`}>
                        {active ? "active" : "select"}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : null}
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
          <div className="mb-4 rounded-2xl border border-gray-200 bg-gray-50 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{languageLabel}</p>
            <div className="grid grid-cols-2 gap-2">
              {languageOptions.map((option) => {
                const active = option.value === language;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => onLanguageChange(option.value)}
                    className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${active ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:border-blue-500 hover:text-blue-600"}`}
                  >
                    {option.label}
                  </button>
                );
              })}
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
