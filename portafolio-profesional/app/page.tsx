
"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ScrollSection } from "./components/ScrollSection";

type Language = "es" | "en";

type PortfolioContent = {
  navItems: Array<{ href: string; label: string }>;
  darkLabel: string;
  lightLabel: string;
  languageLabel: string;
  heroBadge: string;
  heroLead: string;
  sections: {
    about: string;
    value: string;
    projects: string;
    experience: string;
    skills: string;
    testimonials: string;
    learning: string;
    contacts: string;
  };
  stats: Array<{ number: string; label: string }>;
  aboutParagraphs: string[];
  valueItems: Array<{ title: string; text: string }>;
  projects: Array<{ title: string; description: string; tags: string[]; image: string }>;
  timelineIntro: string;
  timeline: Array<{ phase: string; title: string; text: string; tags: string[] }>;
  skillsIntro: string;
  skills: Array<{ title: string; items: string[] }>;
  testimonials: Array<{ title: string; text: string; note: string }>;
  learningCards: Array<{ title: string; text: string; items: string[] }>;
  contactIntro: string;
  contactItems: Array<{ title: string; detail: string; symbol: string }>;
  socialLabel: string;
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
  footer: {
    bioTitle: string;
    bioText: string;
    sectionsTitle: string;
    contactTitle: string;
    copyright: string;
  };
};

const projectImages = [
  "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?auto=format&fit=crop&w=1200&q=80",
];

const content: Record<Language, PortfolioContent> = {
  es: {
    navItems: [
      { href: "#sobre-mi", label: "Sobre mi" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#testimonios", label: "Testimonios" },
      { href: "#aprendizaje", label: "Aprendizaje" },
      { href: "#contactos", label: "Contactos" },
    ],
    darkLabel: "Modo dark",
    lightLabel: "Modo claro",
    languageLabel: "Idioma",
    heroBadge: "Portafolio personal",
    heroLead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, justo ut aliquet viverra, augue risus consequat erat, sed fermentum sem nibh at lorem.",
    sections: {
      about: "Sobre mi",
      value: "Lo que aporto",
      projects: "Proyectos",
      experience: "Experiencia y enfoque",
      skills: "Habilidades",
      testimonials: "Testimonios",
      learning: "Aprendizaje continuo",
      contacts: "Contactos",
    },
    stats: [
      { number: "12+", label: "Tecnologias dominadas" },
      { number: "6", label: "Areas de trabajo" },
      { number: "100%", label: "Enfoque responsive" },
      { number: "24/7", label: "Aprendizaje continuo" },
    ],
    aboutParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat nibh in eros viverra, eu volutpat justo dignissim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor in risus posuere luctus a sit amet lorem.",
    ],
    valueItems: [
      { title: "Interfaces limpias", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere velit sed sem porta, nec efficitur lectus malesuada." },
      { title: "Logica funcional", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida eros a neque faucibus, at faucibus justo faucibus." },
      { title: "Mejora constante", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros vel justo tristique fermentum in quis odio." },
    ],
    projects: [
      { title: "Dashboard de ventas", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },
      { title: "Landing para startup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },
      { title: "Sistema de reservas", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },
      { title: "Portafolio interactivo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },
    ],
    timelineIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timeline: [
      { phase: "Analisis y planeacion", title: "Organizo primero la estructura del proyecto", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lectus ac lacus dapibus, a auctor metus posuere.", tags: ["Wireframes", "Arquitectura UI", "Planificacion"] },
      { phase: "Desarrollo", title: "Construyo interfaces y logica con enfoque practico", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet lorem non dui tincidunt, sed posuere augue condimentum.", tags: ["React", "Node.js", "APIs"] },
      { phase: "Entrega y mejora", title: "Pulo detalles visuales y funcionales", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque neque et mi molestie, vel maximus lectus rutrum.", tags: ["Responsive", "Testing visual", "Refactor"] },
    ],
    skillsIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: [
      { title: "Frontend", items: ["Angular", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS", "CSS", "TypeScript"] },
      { title: "Backend", items: ["Node.js", "Python", "MySQL", "SQLite", "Java", "Express.js"] },
      { title: "Herramientas", items: ["Git y GitHub", "Postman", "VS Code", "Vercel", "Trello", "Notion"] },
      { title: "Diseno", items: ["Figma", "Canva", "Wireframing", "Prototipado", "Diseno responsive", "Jerarquia visual"] },
    ],
    testimonials: [
      { title: "Compañero de proyecto", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem eu turpis vestibulum, sed tincidunt neque sodales.", note: "Trabajo colaborativo y apoyo tecnico" },
      { title: "Revision academica", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra augue at quam posuere, ac gravida risus porttitor.", note: "Enfoque integral y mejora continua" },
      { title: "Cliente simulado", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue ac ipsum luctus, sed tristique tortor hendrerit.", note: "Claridad, criterio y funcionalidad" },
    ],
    learningCards: [
      { title: "Temas que estoy fortaleciendo", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nibh vel sem posuere finibus quis eu mauris.", items: ["Arquitectura de componentes", "Buenas practicas de backend", "Optimizacion responsive"] },
      { title: "Enfoque de crecimiento", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget arcu quis mauris maximus varius a in quam.", items: ["Control de versiones", "Despliegue en la nube", "Documentacion tecnica"] },
      { title: "Objetivo profesional", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue est sed mauris feugiat, id tristique nibh facilisis.", items: ["Aplicaciones completas", "Interfaces memorables", "Codigo mantenible"] },
    ],
    contactIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contactItems: [
      { title: "Correo", detail: "gabrielnarvaez.dev@gmail.com", symbol: "@" },
      { title: "Telefono", detail: "+57 300 000 0000", symbol: "+" },
      { title: "Ubicacion", detail: "Colombia, disponible para proyectos academicos y freelance", symbol: "#" },
    ],
    socialLabel: "Redes y portafolio profesional",
    form: {
      name: "Nombre",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tucorreo@ejemplo.com",
      subjectPlaceholder: "Propuesta de proyecto o contacto academico",
      messagePlaceholder: "Hola Gabriel, vimos tu portafolio y queremos hablar contigo.",
      submit: "Enviar mensaje",
    },
    footer: {
      bioTitle: "Gabriel Narvaez",
      bioText: "Portafolio orientado a mostrar desarrollo web, diseño de interfaces y crecimiento constante como futuro profesional full stack.",
      sectionsTitle: "Secciones clave",
      contactTitle: "Contacto",
      copyright: "Portafolio academico de Gabriel Narvaez, 2026.",
    },
  },
  en: {
    navItems: [
      { href: "#sobre-mi", label: "About" },
      { href: "#proyectos", label: "Projects" },
      { href: "#habilidades", label: "Skills" },
      { href: "#testimonios", label: "Testimonials" },
      { href: "#aprendizaje", label: "Learning" },
      { href: "#contactos", label: "Contact" },
    ],
    darkLabel: "Dark mode",
    lightLabel: "Light mode",
    languageLabel: "Language",
    heroBadge: "Personal portfolio",
    heroLead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, justo ut aliquet viverra, augue risus consequat erat, sed fermentum sem nibh at lorem.",
    sections: {
      about: "About me",
      value: "What I bring",
      projects: "Projects",
      experience: "Experience and approach",
      skills: "Skills",
      testimonials: "Testimonials",
      learning: "Continuous learning",
      contacts: "Contact",
    },
    stats: [
      { number: "12+", label: "Technologies mastered" },
      { number: "6", label: "Work areas" },
      { number: "100%", label: "Responsive focus" },
      { number: "24/7", label: "Continuous learning" },
    ],
    aboutParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat nibh in eros viverra, eu volutpat justo dignissim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor in risus posuere luctus a sit amet lorem.",
    ],
    valueItems: [
      { title: "Clean interfaces", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere velit sed sem porta, nec efficitur lectus malesuada." },
      { title: "Functional logic", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida eros a neque faucibus, at faucibus justo faucibus." },
      { title: "Constant improvement", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros vel justo tristique fermentum in quis odio." },
    ],
    projects: [
      { title: "Sales dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },
      { title: "Startup landing page", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },
      { title: "Booking system", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },
      { title: "Interactive portfolio", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },
    ],
    timelineIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timeline: [
      { phase: "Analysis and planning", title: "I organize the project structure first", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lectus ac lacus dapibus, a auctor metus posuere.", tags: ["Wireframes", "UI architecture", "Planning"] },
      { phase: "Development", title: "I build interfaces and logic with a practical mindset", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet lorem non dui tincidunt, sed posuere augue condimentum.", tags: ["React", "Node.js", "APIs"] },
      { phase: "Delivery and polish", title: "I refine visual and functional details", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque neque et mi molestie, vel maximus lectus rutrum.", tags: ["Responsive", "Visual testing", "Refactor"] },
    ],
    skillsIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: [
      { title: "Frontend", items: ["Angular", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS", "CSS", "TypeScript"] },
      { title: "Backend", items: ["Node.js", "Python", "MySQL", "SQLite", "Java", "Express.js"] },
      { title: "Tools", items: ["Git and GitHub", "Postman", "VS Code", "Vercel", "Trello", "Notion"] },
      { title: "Design", items: ["Figma", "Canva", "Wireframing", "Prototyping", "Responsive design", "Visual hierarchy"] },
    ],
    testimonials: [
      { title: "Project teammate", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem eu turpis vestibulum, sed tincidunt neque sodales.", note: "Collaborative work and technical support" },
      { title: "Academic review", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra augue at quam posuere, ac gravida risus porttitor.", note: "Holistic approach and constant improvement" },
      { title: "Simulated client", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue ac ipsum luctus, sed tristique tortor hendrerit.", note: "Clarity, judgment, and functionality" },
    ],
    learningCards: [
      { title: "Topics I am strengthening", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nibh vel sem posuere finibus quis eu mauris.", items: ["Component architecture", "Backend best practices", "Responsive optimization"] },
      { title: "Growth approach", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget arcu quis mauris maximus varius a in quam.", items: ["Version control", "Cloud deployment", "Technical documentation"] },
      { title: "Professional goal", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue est sed mauris feugiat, id tristique nibh facilisis.", items: ["Complete applications", "Memorable interfaces", "Maintainable code"] },
    ],
    contactIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contactItems: [
      { title: "Email", detail: "gabrielnarvaez.dev@gmail.com", symbol: "@" },
      { title: "Phone", detail: "+57 300 000 0000", symbol: "+" },
      { title: "Location", detail: "Colombia, available for academic and freelance projects", symbol: "#" },
    ],
    socialLabel: "Social links and professional portfolio",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "yourmail@example.com",
      subjectPlaceholder: "Project proposal or academic contact",
      messagePlaceholder: "Hi Gabriel, we saw your portfolio and want to talk with you.",
      submit: "Send message",
    },
    footer: {
      bioTitle: "Gabriel Narvaez",
      bioText: "Portfolio focused on showcasing web development, interface design, and constant growth as a future full stack professional.",
      sectionsTitle: "Key sections",
      contactTitle: "Contact",
      copyright: "Academic portfolio by Gabriel Narvaez, 2026.",
    },
  },
};

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="reveal-stack mb-12">
      <h2 className="reveal-item mb-4 text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
      <div className="section-line reveal-item h-1 w-20 rounded-full bg-gray-400" />
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage === "es" || savedLanguage === "en") {
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
      <Header
        navItems={t.navItems}
        darkLabel={t.darkLabel}
        lightLabel={t.lightLabel}
        languageLabel={t.languageLabel}
        language={language}
        onLanguageChange={changeLanguage}
      />
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
                <img src="/image.png" alt="Foto de perfil de Gabriel Narvaez" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
            </ScrollSection>
          </div>
        </section>

        <section id="sobre-mi" className="bg-white py-24">
          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="up">
            <SectionTitle title={t.sections.about} />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="reveal-stack space-y-6 text-gray-700">
                {t.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="reveal-item">{paragraph}</p>
                ))}
              </div>
              <div className="stagger-grid grid grid-cols-2 gap-6">
                {t.stats.map((stat) => (
                  <article key={stat.label} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_18px_36px_rgba(0,0,0,0.1)]">
                    <div className="mb-2 text-3xl font-bold text-gray-900">{stat.number}</div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </ScrollSection>
        </section>

        <section id="valor" className="bg-gray-50 py-24">
          <ScrollSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" variant="scale">
            <SectionTitle title={t.sections.value} />
            <div className="stagger-grid grid gap-6 md:grid-cols-3">
              {t.valueItems.map((item) => (
                <article key={item.title} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">
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
              {t.projects.map((project) => (
                <article key={project.title} className="lift-card reveal-item overflow-hidden rounded-3xl border-2 border-gray-300 bg-white transition duration-300 hover:-translate-y-2 hover:border-gray-800 hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]">
                  <div className="aspect-video overflow-hidden border-b-2 border-gray-300 bg-gray-200">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
                  </div>
                  <div className="space-y-4 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 transition duration-300 hover:text-blue-600">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill-animate rounded-full border border-gray-400 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white">{tag}</span>
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
              {t.timeline.map((item) => (
                <article key={item.phase} className="lift-card reveal-item grid gap-4 rounded-3xl border-2 border-gray-300 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)] md:grid-cols-[180px_1fr]">
                  <div className="pt-1 text-sm font-bold uppercase tracking-[0.12em] text-blue-600">{item.phase}</div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="pill-animate rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white">{tag}</span>
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
              {t.skills.map((category) => (
                <article key={category.title} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">{category.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {category.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-blue-600">
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
              {t.testimonials.map((item) => (
                <article key={item.title} className="lift-card reveal-item relative rounded-3xl border-2 border-gray-300 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">
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
              {t.learningCards.map((card) => (
                <article key={card.title} className="lift-card reveal-item rounded-3xl border-2 border-gray-300 bg-gray-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)]">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-gray-700">{card.text}</p>
                  <ul className="mt-5 space-y-3 text-gray-700">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 transition duration-300 hover:translate-x-1 hover:text-blue-600"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500" /><span>{item}</span></li>
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
                  {t.contactItems.map((item) => (
                    <div key={item.title} className="lift-card reveal-item flex items-start gap-4 rounded-3xl border-2 border-transparent p-1 transition duration-300 hover:translate-x-1">
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
                    {["GitHub", "LinkedIn", "Twitter"].map((item) => (
                      <div key={item} className="reveal-item flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border-2 border-gray-800 text-sm font-semibold transition duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 hover:bg-blue-500 hover:text-white">{item.slice(0, 2)}</div>
                    ))}
                  </div>
                </div>
              </div>
              <form className="lift-card reveal-stack rounded-3xl border-2 border-gray-300 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_22px_44px_rgba(0,0,0,0.1)] sm:p-8">
                <div className="reveal-item mb-6">
                  <label className="mb-2 block text-sm text-gray-700">{t.form.name}</label>
                  <input type="text" placeholder={t.form.namePlaceholder} className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm transition duration-300 focus:-translate-y-0.5 focus:border-blue-500 focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
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
                <button type="button" className="reveal-item h-12 w-full rounded-2xl border-2 border-gray-800 bg-gray-800 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:shadow-[0_14px_28px_rgba(59,130,246,0.25)]">{t.form.submit}</button>
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
                {t.contactItems.map((item) => (
                  <li key={item.title}>{item.detail}</li>
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
