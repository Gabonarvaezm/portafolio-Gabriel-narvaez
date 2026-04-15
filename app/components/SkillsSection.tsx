import type { ReactElement } from "react";
import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type SkillsSectionProps = {
  t: PortfolioContent;
  language: Language;
};

type SkillIconTone = {
  surface: string;
  border: string;
  text: string;
};

type SkillIconConfig = SkillIconTone & {
  label?: string;
  svg?: ReactElement;
};

const defaultSkillTone: SkillIconTone = {
  surface: "bg-red-100",
  border: "border-red-300",
  text: "text-red-700",
};

const atomSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
  </svg>
);

const gitBranchSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <circle cx="7" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 8.2v4.5c0 2.9 2.3 5.3 5.2 5.3H14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14.8 6H10.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const databaseSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <ellipse cx="12" cy="6.5" rx="6.5" ry="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5.5 6.5v5c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5.5 11.5v5c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const figmaSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="M12 4.5A3.5 3.5 0 0 0 8.5 1H12v3.5Z" fill="currentColor" />
    <path d="M8.5 1A3.5 3.5 0 0 0 5 4.5 3.5 3.5 0 0 0 8.5 8H12V1H8.5Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8.5 8A3.5 3.5 0 0 0 5 11.5 3.5 3.5 0 0 0 8.5 15H12V8H8.5Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8.5 15A3.5 3.5 0 0 0 5 18.5 3.5 3.5 0 0 0 8.5 22 3.5 3.5 0 0 0 12 18.5V15H8.5Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M12 1h3.5A3.5 3.5 0 0 1 19 4.5 3.5 3.5 0 0 1 15.5 8H12V1Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M19 11.5A3.5 3.5 0 1 1 12 11.5 3.5 3.5 0 0 1 19 11.5Z" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const dockerSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <rect x="4" y="9" width="3" height="3" rx="0.6" fill="currentColor" />
    <rect x="7.8" y="9" width="3" height="3" rx="0.6" fill="currentColor" />
    <rect x="11.6" y="9" width="3" height="3" rx="0.6" fill="currentColor" />
    <rect x="7.8" y="5.4" width="3" height="3" rx="0.6" fill="currentColor" />
    <rect x="11.6" y="5.4" width="3" height="3" rx="0.6" fill="currentColor" />
    <path d="M4 13.2h9.8c2.2 0 3.8-.7 4.9-2.1.5.3 1.2.5 1.9.4-.2 2.7-2.5 6-7.4 6H9.1c-2.9 0-4.8-1.8-5.1-4.3Z" fill="currentColor" />
  </svg>
);

const postmanSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 9.8 16 8l-1.8 6-1.3-2.1L10 9.8Z" fill="currentColor" />
  </svg>
);

const nodeSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="m12 2.7 7 4.05v8.1L12 18.9 5 14.85v-8.1L12 2.7Z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M10.2 9.1v5.8m0-5.8 4.6 5.8V9.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const usabilitySvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="M12 3.2 14 8l4.8 2-4.8 2-2 4.8-2-4.8-4.8-2L10 8l2-4.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const terminalSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <rect x="3.5" y="5" width="17" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
    <path d="m7.2 10 2.3 2.1-2.3 2.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 15h4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const phoneDesktopSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <rect x="3.5" y="5" width="12" height="9" rx="1.7" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.5 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="17.2" y="7" width="3.8" height="8.2" rx="1" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const shieldSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="M12 3.2 18 5.3v5.8c0 4.1-2.3 7.3-6 9.7-3.7-2.4-6-5.6-6-9.7V5.3L12 3.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9.2 12.2 11 14l3.8-4.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const browserSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <rect x="3.5" y="5" width="17" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 8.3h17" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6.4" cy="6.7" r=".8" fill="currentColor" />
    <circle cx="9" cy="6.7" r=".8" fill="currentColor" />
  </svg>
);

const routeSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <circle cx="6" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 8h5a5 5 0 0 0 5-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M6 10v2.2A5.8 5.8 0 0 0 11.8 18H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const layoutSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 5v14M4 10h16" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const layersSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="m12 4 7 4-7 4-7-4 7-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="m5 12 7 4 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="m5 16 7 4 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const prototypeSvg = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="M8 6h8M12 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 10h4.5a2.5 2.5 0 0 1 0 5H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const skillIconMap: Record<string, SkillIconConfig> = {
  html5: { ...defaultSkillTone, label: "HTML" },
  css3: { ...defaultSkillTone, label: "CSS" },
  javascript: { surface: "bg-amber-100", border: "border-amber-300", text: "text-amber-700", label: "JS" },
  react: { surface: "bg-cyan-100", border: "border-cyan-300", text: "text-cyan-700", svg: atomSvg },
  angular: { surface: "bg-rose-100", border: "border-rose-300", text: "text-rose-700", label: "NG" },
  responsive: { surface: "bg-sky-100", border: "border-sky-300", text: "text-sky-700", svg: phoneDesktopSvg },
  bootstrap: { surface: "bg-violet-100", border: "border-violet-300", text: "text-violet-700", label: "TW" },
  tailwind: { surface: "bg-violet-100", border: "border-violet-300", text: "text-violet-700", label: "TW" },
  api: { surface: "bg-emerald-100", border: "border-emerald-300", text: "text-emerald-700", label: "API" },
  node: { surface: "bg-green-100", border: "border-green-300", text: "text-green-700", svg: nodeSvg },
  express: { ...defaultSkillTone, label: "EX" },
  rest: { surface: "bg-emerald-100", border: "border-emerald-300", text: "text-emerald-700", label: "REST" },
  database: { surface: "bg-blue-100", border: "border-blue-300", text: "text-blue-700", svg: databaseSvg },
  mysql: { surface: "bg-blue-100", border: "border-blue-300", text: "text-blue-700", svg: databaseSvg },
  mongodb: { surface: "bg-blue-100", border: "border-blue-300", text: "text-blue-700", svg: databaseSvg },
  jwt: { surface: "bg-orange-100", border: "border-orange-300", text: "text-orange-700", svg: shieldSvg },
  mvc: { surface: "bg-indigo-50/95 dark:bg-indigo-500/10", border: "border-indigo-300 dark:border-indigo-500/30", text: "text-indigo-700 dark:text-indigo-200", svg: layersSvg },
  git: { surface: "bg-slate-100", border: "border-slate-300", text: "text-slate-700", svg: gitBranchSvg },
  github: { surface: "bg-slate-100", border: "border-slate-300", text: "text-slate-700", label: "GH" },
  postman: { surface: "bg-orange-100", border: "border-orange-300", text: "text-orange-700", svg: postmanSvg },
  docker: { surface: "bg-cyan-100", border: "border-cyan-300", text: "text-cyan-700", svg: dockerSvg },
  "vs code": { surface: "bg-blue-100", border: "border-blue-300", text: "text-blue-700", label: "VS" },
  npm: { surface: "bg-red-100", border: "border-red-300 dark:border-red-500/30", text: "text-red-700 dark:text-red-200", label: "npm" },
  yarn: { surface: "bg-sky-100", border: "border-sky-300", text: "text-sky-700", label: "yarn" },
  linux: { surface: "bg-neutral-100", border: "border-neutral-300", text: "text-neutral-700", svg: terminalSvg },
  uiux: { surface: "bg-pink-100", border: "border-pink-300", text: "text-pink-700", label: "UI" },
  figma: { surface: "bg-fuchsia-100", border: "border-fuchsia-300", text: "text-fuchsia-700", svg: figmaSvg },
  prototyping: { surface: "bg-purple-100", border: "border-purple-300", text: "text-purple-700", svg: prototypeSvg },
  usability: { surface: "bg-pink-100", border: "border-pink-300", text: "text-pink-700", svg: usabilitySvg },
  browser: { surface: "bg-sky-100", border: "border-sky-300", text: "text-sky-700", svg: browserSvg },
  forms: { surface: "bg-teal-100", border: "border-teal-300", text: "text-teal-700", svg: layoutSvg },
  router: { surface: "bg-indigo-50/95 dark:bg-indigo-500/10", border: "border-indigo-300 dark:border-indigo-500/30", text: "text-indigo-700 dark:text-indigo-200", svg: routeSvg },
};

function normalizeSkill(skill: string) {
  return skill
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getSkillIcon(skill: string): SkillIconConfig {
  const normalized = normalizeSkill(skill);

  if (normalized.includes("html")) return skillIconMap.html5;
  if (normalized.includes("css")) return skillIconMap.css3;
  if (normalized.includes("javascript")) return skillIconMap.javascript;
  if (normalized.includes("react")) return skillIconMap.react;
  if (normalized.includes("angular")) return skillIconMap.angular;
  if (normalized.includes("responsive")) return skillIconMap.responsive;
  if (normalized.includes("bootstrap") || normalized.includes("tailwind")) return skillIconMap.tailwind;
  if (normalized.includes("api")) return skillIconMap.api;
  if (normalized.includes("node")) return skillIconMap.node;
  if (normalized.includes("express")) return skillIconMap.express;
  if (normalized.includes("rest")) return skillIconMap.rest;
  if (normalized.includes("mysql") || normalized.includes("mongodb") || normalized.includes("database") || normalized.includes("base de datos") || normalized.includes("datenbanken") || normalized.includes("databases")) return skillIconMap.database;
  if (normalized.includes("jwt") || normalized.includes("auth") || normalized.includes("autenticacion") || normalized.includes("authentifizierung") || normalized.includes("authentication")) return skillIconMap.jwt;
  if (normalized.includes("mvc")) return skillIconMap.mvc;
  if (normalized.includes("git") && normalized.includes("github")) return skillIconMap.git;
  if (normalized.includes("github")) return skillIconMap.github;
  if (normalized.includes("git")) return skillIconMap.git;
  if (normalized.includes("postman")) return skillIconMap.postman;
  if (normalized.includes("docker")) return skillIconMap.docker;
  if (normalized.includes("vs code")) return skillIconMap["vs code"];
  if (normalized.includes("npm")) return skillIconMap.npm;
  if (normalized.includes("yarn")) return skillIconMap.yarn;
  if (normalized.includes("linux")) return skillIconMap.linux;
  if (normalized.includes("figma")) return skillIconMap.figma;
  if (normalized.includes("prototype") || normalized.includes("prototip")) return skillIconMap.prototyping;
  if (normalized.includes("usability") || normalized.includes("usabilidad") || normalized.includes("prinzip")) return skillIconMap.usability;
  if (normalized.includes("ui ux") || normalized.includes("basic ui ux") || normalized.includes("basico ui ux") || normalized.includes("grundlagen")) return skillIconMap.uiux;
  if (normalized.includes("forms")) return skillIconMap.forms;
  if (normalized.includes("router")) return skillIconMap.router;
  if (normalized.includes("consumo") || normalized.includes("anbindung")) return skillIconMap.browser;

  return { ...defaultSkillTone, label: skill.slice(0, 2).toUpperCase() };
}

function SkillIcon({ skill }: { skill: string }) {
  const icon = getSkillIcon(skill);

  return (
    <span
      className={[
        "skill-icon-badge pointer-events-none inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-2xl border-2 px-2 opacity-0 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-[0_14px_30px_rgba(220,38,38,0.18)]",
        "translate-x-2 scale-90",
        "bg-white",
        icon.border,
        icon.text,
      ].join(" ")}
      aria-hidden="true"
    >
      {icon.svg ?? <span className="text-[10px] font-bold uppercase tracking-[0.18em]">{icon.label}</span>}
    </span>
  );
}

export function SkillsSection({ t, language }: SkillsSectionProps) {
  return (
    <section id="habilidades" className="relative overflow-hidden bg-white py-24">
      <div className="skill-orb skill-orb-1" />
      <div className="skill-orb skill-orb-2" />
      <div className="skill-orb skill-orb-3" />

      <ScrollSection className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="right">
        <SectionTitle title={t.sections.skills} />

        <p className="reveal-item mb-10 max-w-3xl text-gray-700">{t.skillsIntro}</p>

        <div className="stagger-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.skills.map((category, index) => (
            <article
              key={`${language}-skill-${index}`}
              className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_22px_44px_rgba(220,38,38,0.14)]"
            >
              <h3 className="mb-4 text-lg font-semibold text-gray-900">{category.title}</h3>

              <ul className="space-y-2 text-gray-700">
                {category.items.map((skill, skillIndex) => (
                  <li
                    key={`${language}-skill-${index}-item-${skillIndex}`}
                    className="skill-item group flex items-center gap-3 rounded-2xl px-2 py-1.5 transition duration-300 hover:translate-x-1 hover:bg-red-50"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 transition duration-300 group-hover:scale-150" />
                    <span className="skill-item-text min-w-0 flex-1 text-gray-700 transition-colors duration-300 group-hover:text-gray-900">{skill}</span>
                    <SkillIcon skill={skill} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
}
