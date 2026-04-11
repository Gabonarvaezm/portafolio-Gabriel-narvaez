import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type ProjectsSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function ProjectsSection({ t, language }: ProjectsSectionProps) {
  return (
        <section id="proyectos" className="bg-gray-50 py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="up">

            <SectionTitle title={t.sections.projects} />

            <div className="stagger-grid grid gap-8 sm:grid-cols-2">

              {t.projects.map((project, index) => (

                <article key={`${language}-project-${index}`} className="lift-card reveal-item overflow-hidden rounded-3xl border-2 border-gray-300 bg-white transition duration-300 hover:-translate-y-2 hover:border-gray-800 hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]">

                  <div className="aspect-video overflow-hidden border-b-2 border-gray-300 bg-gray-200">

                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-110" />

                  </div>

                  <div className="space-y-4 p-6">

                    <h3 className="text-xl font-semibold text-gray-900 transition duration-300 hover:text-blue-600">{project.title}</h3>

                    <p className="text-gray-700">{project.description}</p>

                    <div className="flex flex-wrap gap-2 pt-1">

                      {project.tags.map((tag, tagIndex) => (

                        <span key={`${language}-project-${index}-tag-${tagIndex}`} className="pill-animate rounded-full border border-gray-400 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white">{tag}</span>

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
