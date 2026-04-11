import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type LearningSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function LearningSection({ t, language }: LearningSectionProps) {
  return (
        <section id="aprendizaje" className="bg-white py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="up">

            <SectionTitle title={t.sections.learning} />

            <div className="stagger-grid grid gap-6 md:grid-cols-3">

              {t.learningCards.map((card, index) => (

                <article key={`${language}-learning-${index}`} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-gray-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{card.title}</h3>

                  <p className="text-gray-700">{card.text}</p>

                  <ul className="mt-5 space-y-3 text-gray-700">

                    {card.items.map((item, itemIndex) => (

                      <li key={`${language}-learning-${index}-item-${itemIndex}`} className="flex items-start gap-3 transition duration-300 hover:translate-x-1 hover:text-blue-600"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500" /><span>{item}</span></li>

                    ))}

                  </ul>

                </article>

              ))}

            </div>

          </ScrollSection>

        </section>
  );
}
