import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type ValueSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function ValueSection({ t, language }: ValueSectionProps) {
  return (
    <section id="valor" className="bg-gray-50 py-24">
      <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="scale">
        <SectionTitle title={t.sections.value} />

        <div className="stagger-grid grid gap-6 md:grid-cols-3">
          {t.valueItems.map((item, index) => (
            <article
              key={`${language}-value-${index}`}
              className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </article>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
}
