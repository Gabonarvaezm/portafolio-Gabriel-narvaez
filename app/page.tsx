

"use client";


import { useEffect, useState } from "react";

import { Header } from "./components/Header";

import { CustomCursor } from "./components/CustomCursor";

import { content, type Language } from "./data/content";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ValueSection } from "./components/ValueSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LearningSection } from "./components/LearningSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

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

      <FooterSection t={t} language={language} />

    </div>

  );

}














