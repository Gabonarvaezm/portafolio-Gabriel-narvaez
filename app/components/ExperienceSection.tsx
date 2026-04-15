import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type ExperienceSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function ExperienceSection({ t, language }: ExperienceSectionProps) {
  return (
        <section id="experiencia" className="bg-white py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="left">

            <SectionTitle title={t.sections.experience} />

            <p className="reveal-item mb-10 max-w-3xl text-gray-700">{t.timelineIntro}</p>

            <div className="stagger-grid space-y-4">

              {t.timeline.map((item, index) => (

                <article key={`${language}-timeline-${index}`} className="lift-card reveal-item grid gap-4 rounded-3xl border-2 border-gray-300 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)] md:grid-cols-[180px_1fr]">

                  <div className="pt-1 text-sm font-bold uppercase tracking-[0.12em] text-blue-600">{item.phase}</div>

                  <div>

                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>

                    <p className="text-gray-700">{item.text}</p>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {item.tags.map((tag, tagIndex) => (

                        <span key={`${language}-timeline-${index}-tag-${tagIndex}`} className="pill-animate rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white">{tag}</span>

                      ))}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </ScrollSection>

        </section>
  );
}
