

"use client";



import { useEffect, useState } from "react";

import { Header } from "./components/Header";

import { CustomCursor } from "./components/CustomCursor";

import { ScrollSection } from "./components/ScrollSection";
import { content, type Language } from "./data/content";
import { SectionTitle } from "./components/SectionTitle";

export default function Home() {

  const [language, setLanguage] = useState<Language>("es");



  useEffect(() => {

    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "zh" || savedLanguage === "de") {

      setLanguage(savedLanguage);

    }

  }, []);



  const changeLanguage = (nextLanguage: Language) => {

    setLanguage(nextLanguage);

    window.localStorage.setItem("portfolio-language", nextLanguage);

  };



  const t = content[language];



  return (

    <div className="portfolio-shell min-h-screen bg-white">

      <CustomCursor />

      <Header navItems={t.navItems} darkLabel={t.darkLabel} lightLabel={t.lightLabel} languageLabel={t.languageLabel} language={language} onLanguageChange={changeLanguage} />

      <main>

        <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 pt-16">

          <div className="hero-orb hero-orb-1" />

          <div className="hero-orb hero-orb-2" />

          <div className="hero-orb hero-orb-3" />



          <div className="hero-grid relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">

            <ScrollSection variant="left" className="order-2 md:order-1">

              <div className="hero-panel reveal-stack rounded-[2rem] border-2 border-gray-900 bg-gray-800 p-8 text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition duration-500 hover:scale-[1.02] hover:shadow-[0_28px_55px_rgba(0,0,0,0.18)] md:p-10">

                <p className="reveal-item mb-4 text-xs uppercase tracking-[0.24em] text-gray-300">{t.heroBadge}</p>

                <h1 className="reveal-item text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">GABRIEL NARVAEZ</h1>

                <p className="reveal-item mt-6 max-w-xl text-lg leading-relaxed text-gray-100 md:text-xl">{t.heroLead}</p>

              </div>

            </ScrollSection>



            <ScrollSection variant="right" className="order-1 md:order-2">

              <div className="profile-card reveal-item mx-auto aspect-square max-w-lg overflow-hidden rounded-[2rem] border-2 border-gray-300 bg-gray-200 shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:rotate-[1deg] hover:shadow-[0_34px_68px_rgba(0,0,0,0.22)]">

                <img src="/image.png" alt="Foto de perfil de Gabriel Narvaez" className="h-full w-full object-cover object-[center_18%] transition duration-700 hover:scale-110" />

              </div>

            </ScrollSection>

          </div>

        </section>



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



        <section id="valor" className="bg-gray-50 py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="scale">

            <SectionTitle title={t.sections.value} />

            <div className="stagger-grid grid gap-6 md:grid-cols-3">

              {t.valueItems.map((item, index) => (

                <article key={`${language}-value-${index}`} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>

                  <p className="text-gray-700">{item.text}</p>

                </article>

              ))}

            </div>

          </ScrollSection>

        </section>



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



        <section id="contactos" className="bg-gray-50 py-24">

          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="left">

            <SectionTitle title={t.sections.contacts} />

            <div className="grid gap-12 md:grid-cols-2">

              <div className="reveal-stack space-y-8">

                <p className="reveal-item text-gray-700">{t.contactIntro}</p>

                <div className="stagger-grid space-y-6 text-gray-700">

                  {t.contactItems.map((item, index) => (

                    <div key={`${language}-contact-${index}`} className="lift-card reveal-item flex items-start gap-4 rounded-3xl border-2 border-transparent p-1 transition duration-300 hover:translate-x-1">

                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-gray-800 transition duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500 hover:text-white"><span className="text-lg">{item.symbol}</span></div>

                      <div className="pt-2">

                        <p className="font-medium text-gray-900">{item.title}</p>

                        <p className="text-sm">{item.detail}</p>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="reveal-stack pt-2">

                  <p className="reveal-item mb-4 text-gray-700">{t.socialLabel}</p>

                  <div className="stagger-grid flex gap-4">

                    {[

                      {

                        label: "GitHub",

                        href: "https://github.com/Gabonarvaezm",

                        icon: (

                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">

                            <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.43 7.87 10.96.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.26 3.38.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a10.93 10.93 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.41-5.28 5.69.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />

                          </svg>

                        ),

                      },

                      {

                        label: "LinkedIn",

                        href: null,

                        icon: (

                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">

                            <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.57c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.95V21h-4Z" />

                          </svg>

                        ),

                      },

                    ].map((item) => (

                      item.href ? (

                        <a

                          key={item.label}

                          href={item.href}

                          target="_blank"

                          rel="noreferrer"

                          aria-label={item.label}

                          className="reveal-item flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-800 transition duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 hover:bg-blue-500 hover:text-white"

                        >

                          {item.icon}

                        </a>

                      ) : (

                        <div

                          key={item.label}

                          aria-label={item.label}

                          className="reveal-item flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-800 opacity-70 transition duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 hover:bg-blue-500 hover:text-white"

                        >

                          {item.icon}

                        </div>

                      )

                    ))}

                  </div>

                </div>

              </div>

              <form onSubmit={(event) => event.preventDefault()} className="lift-card reveal-stack rounded-3xl border-2 border-gray-300 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)] sm:p-8">

                <div className="reveal-item mb-6">

                  <label className="mb-2 block text-sm text-gray-700">{t.form.name}</label>

                  <input type="text" placeholder={t.form.namePlaceholder} required maxLength={30} autoComplete="name" inputMode="text" pattern="[A-Za-zÀ-ÿÑñ]+(?: [A-Za-zÀ-ÿÑñ]+)*" title="Ingresa un nombre válido, solo letras y un espacio entre palabras." onInput={(event) => { const target = event.currentTarget; target.value = target.value.replace(/[^A-Za-zÀ-ÿÑñ\s]/g, "").replace(/\s{2,}/g, " ").replace(/^\s+/g, "").slice(0, 30); }} onBlur={(event) => { event.currentTarget.value = event.currentTarget.value.trim(); }} className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm transition duration-300 focus:-translate-y-0.5 focus:border-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] invalid:border-red-500 invalid:focus:border-red-500 invalid:focus:shadow-[0_0_0_4px_rgba(239,68,68,0.12)]" />

                </div>

                <div className="reveal-item mb-6">

                  <label className="mb-2 block text-sm text-gray-700">{t.form.email}</label>

                  <input type="email" placeholder={t.form.emailPlaceholder} className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm transition duration-300 focus:-translate-y-0.5 focus:border-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />

                </div>

                <div className="reveal-item mb-6">

                  <label className="mb-2 block text-sm text-gray-700">{t.form.subject}</label>

                  <input type="text" placeholder={t.form.subjectPlaceholder} className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm transition duration-300 focus:-translate-y-0.5 focus:border-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />

                </div>

                <div className="reveal-item mb-6">

                  <label className="mb-2 block text-sm text-gray-700">{t.form.message}</label>

                  <textarea rows={5} placeholder={t.form.messagePlaceholder} className="w-full rounded-2xl border-2 border-gray-300 p-3 text-sm transition duration-300 focus:-translate-y-0.5 focus:border-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />

                </div>

                <button type="submit" className="reveal-item h-12 w-full rounded-2xl border-2 border-gray-800 bg-gray-800 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:shadow-[0_14px_28px_rgba(59,130,246,0.25)]">{t.form.submit}</button>

              </form>

            </div>

          </ScrollSection>

        </section>

      </main>



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

    </div>

  );

}





















