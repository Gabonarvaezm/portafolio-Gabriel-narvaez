import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type TestimonialsSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function TestimonialsSection({ t, language }: TestimonialsSectionProps) {
  return (
        <section id="testimonios" className="bg-gray-50 py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="scale">

            <SectionTitle title={t.sections.testimonials} />

            <div className="stagger-grid grid gap-6 md:grid-cols-3">

              {t.testimonials.map((item, index) => (

                <article key={`${language}-testimonial-${index}`} className="lift-card reveal-item relative rounded-3xl border-2 border-gray-300 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">

                  <div className="absolute right-5 top-4 text-6xl font-extrabold leading-none text-blue-100 transition duration-300">"</div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>

                  <p className="text-gray-700">{item.text}</p>

                  <div className="mt-5 text-sm text-gray-500">{item.note}</div>

                </article>

              ))}

            </div>

          </ScrollSection>

        </section>
  );
}
