import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type AboutSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function AboutSection({ t, language }: AboutSectionProps) {
  return (
        <section id="sobre-mi" className="bg-white py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="up">

            <SectionTitle title={t.sections.about} />

            <div className="grid gap-12 md:grid-cols-2">

              <div className="reveal-stack space-y-6 text-gray-700">

                {t.aboutParagraphs.map((paragraph, index) => (

                  <p key={`${language}-about-${index}`} className="reveal-item">{paragraph}</p>

                ))}

              </div>

              <div className="stagger-grid grid grid-cols-2 gap-6">

                {t.stats.map((stat, index) => {

                  if (index === 2) {

                    return (

                      <a

                        key={`${language}-stat-youtube`}

                        href="https://youtu.be/1M-Jk-_WPFQ?si=ykBpBeEjYa7w52SV"

                        target="_blank"

                        rel="noreferrer"

                        aria-label={t.aboutYoutube.cta}

                        className="youtube-card lift-card reveal-item group flex min-h-[170px] flex-col items-center justify-center rounded-3xl border-2 border-gray-300 bg-white p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-[#dc2626] hover:bg-[#dc2626] hover:text-white hover:shadow-[0_20px_45px_rgba(220,38,38,0.28)]"

                      >

                        <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-300 bg-gray-100 text-gray-900 transition duration-300 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">

                          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">

                            <path d="M23.5 6.2a3.06 3.06 0 0 0-2.15-2.17C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.35.53A3.06 3.06 0 0 0 .5 6.2 32.4 32.4 0 0 0 0 12a32.4 32.4 0 0 0 .5 5.8 3.06 3.06 0 0 0 2.15 2.17C4.53 20.5 12 20.5 12 20.5s7.47 0 9.35-.53a3.06 3.06 0 0 0 2.15-2.17A32.4 32.4 0 0 0 24 12a32.4 32.4 0 0 0-.5-5.8ZM9.6 15.43V8.57L15.82 12Z" />

                          </svg>

                        </span>

                        <div className="mb-2 text-3xl font-bold text-gray-900 transition duration-300 group-hover:text-white">{t.aboutYoutube.title}</div>

                        <p className="text-sm text-gray-600 transition duration-300 group-hover:text-white/90">{t.aboutYoutube.message}</p>

                      </a>

                    );

                  }



                  if (index === 3) {

                    return (

                      <a

                        key={`${language}-stat-spotify`}

                        href="https://open.spotify.com/intl-es/artist/0asCsOcP5TLr6ArtffLlXK?si=17cpzDNyTbiCY_IWRyjKUg"

                        target="_blank"

                        rel="noreferrer"

                        aria-label={t.aboutSpotify.cta}

                        className="spotify-card lift-card reveal-item group flex min-h-[170px] flex-col items-center justify-center rounded-3xl border-2 border-gray-300 bg-white p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-white hover:shadow-[0_20px_45px_rgba(29,185,84,0.28)]"

                      >

                        <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-300 bg-gray-100 text-gray-900 transition duration-300 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">

                          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">

                            <path d="M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.512 10.512 0 0 0 12 1.5Zm4.818 15.15a.656.656 0 0 1-.903.217 10.77 10.77 0 0 0-5.917-1.597 14.97 14.97 0 0 0-3.07.332.656.656 0 0 1-.266-1.286 16.29 16.29 0 0 1 3.336-.36 12.095 12.095 0 0 1 6.6 1.81.656.656 0 0 1 .22.884Zm1.286-2.87a.82.82 0 0 1-1.13.272 13.57 13.57 0 0 0-7.08-1.84 18.4 18.4 0 0 0-3.577.381.82.82 0 1 1-.319-1.609 20.09 20.09 0 0 1 3.896-.408 15.14 15.14 0 0 1 7.94 2.088.82.82 0 0 1 .27 1.116Zm.111-2.988A16.16 16.16 0 0 0 9.9 8.58a21.47 21.47 0 0 0-4.142.427.984.984 0 1 1-.372-1.932A23.46 23.46 0 0 1 9.9 6.612a18.07 18.07 0 0 1 9.297 2.492.984.984 0 0 1-.982 1.688Z" />

                          </svg>

                        </span>

                        <div className="mb-2 text-3xl font-bold text-gray-900 transition duration-300 group-hover:text-white">Spotify</div>

                        <p className="text-sm text-gray-600 transition duration-300 group-hover:text-white/90">{t.aboutSpotify.cta}</p>

                      </a>

                    );

                  }



                  return (

                    <article key={`${language}-stat-${index}`} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_18px_36px_rgba(0,0,0,0.1)]">

                      <div className="mb-2 text-3xl font-bold text-gray-900">{stat.number}</div>

                      <p className="text-sm text-gray-600">{stat.label}</p>

                    </article>

                  );

                })}

              </div>

            </div>

          </ScrollSection>

        </section>
  );
}
