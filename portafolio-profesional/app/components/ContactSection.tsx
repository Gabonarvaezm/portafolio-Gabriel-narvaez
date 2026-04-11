import { ScrollSection } from "./ScrollSection";
import { SectionTitle } from "./SectionTitle";
import type { Language, PortfolioContent } from "../data/content";

type ContactSectionProps = {
  t: PortfolioContent;
  language: Language;
};

export function ContactSection({ t, language }: ContactSectionProps) {
  return (
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
  );
}
