

"use client";



import { useEffect, useState } from "react";

import { Header } from "./components/Header";

import { CustomCursor } from "./components/CustomCursor";

import { ScrollSection } from "./components/ScrollSection";
import { content, type Language } from "./data/content";
import { SectionTitle } from "./components/SectionTitle";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ValueSection } from "./components/ValueSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LearningSection } from "./components/LearningSection";
import { ContactSection } from "./components/ContactSection";

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

        <HeroSection t={t} />



        <AboutSection t={t} language={language} />



        <ValueSection t={t} language={language} />



        <ProjectsSection t={t} language={language} />



        <ExperienceSection t={t} language={language} />

        <SkillsSection t={t} language={language} />

        <TestimonialsSection t={t} language={language} />

        <LearningSection t={t} language={language} />

        <ContactSection t={t} language={language} />

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





















