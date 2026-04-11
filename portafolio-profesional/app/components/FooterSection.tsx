import { ScrollSection } from "./ScrollSection";
import type { Language, PortfolioContent } from "../data/content";

type FooterSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function FooterSection({ t, language }: FooterSectionProps) {
  return (
      <footer className="bg-gray-800 py-10 text-white">

        <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="up">

          <div className="stagger-grid mb-8 grid gap-8 sm:grid-cols-3">

            <div className="reveal-item">

              <h3 className="mb-3 font-semibold">{t.footer.bioTitle}</h3>

              <p className="text-sm text-gray-300">{t.footer.bioText}</p>

            </div>

            <div className="reveal-item">

              <h3 className="mb-3 font-semibold">{t.footer.sectionsTitle}</h3>

              <ul className="space-y-1 text-sm text-gray-300">

                <li>{t.sections.about}</li>

                <li>{t.sections.projects}</li>

                <li>{t.sections.skills}</li>

                <li>{t.sections.testimonials}</li>

              </ul>

            </div>

            <div className="reveal-item">

              <h3 className="mb-3 font-semibold">{t.footer.contactTitle}</h3>

              <ul className="space-y-1 text-sm text-gray-300">

                {t.contactItems.map((item, index) => (

                  <li key={`${language}-footer-contact-${index}`}>{item.detail}</li>

                ))}

              </ul>

            </div>

          </div>

          <div className="reveal-item border-t border-gray-700 pt-6 text-center text-sm text-gray-400">{t.footer.copyright}</div>

        </ScrollSection>

      </footer>
  );
}
