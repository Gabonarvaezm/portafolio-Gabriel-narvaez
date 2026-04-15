import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type SkillsSectionProps = {
  t: PortfolioContent;
  language: Language;
};

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

                <article key={`${language}-skill-${index}`} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">

                  <h3 className="mb-4 text-lg font-semibold text-gray-900">{category.title}</h3>

                  <ul className="space-y-2 text-gray-700">

                    {category.items.map((skill, skillIndex) => (

                      <li key={`${language}-skill-${index}-item-${skillIndex}`} className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-blue-600">

                        <span className="h-2 w-2 rounded-full bg-blue-500 transition duration-300 hover:scale-150" />

                        <span>{skill}</span>

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
