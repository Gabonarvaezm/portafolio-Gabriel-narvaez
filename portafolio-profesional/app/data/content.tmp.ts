"use client";

export type Language = "es" | "en" | "zh" | "de";



export type PortfolioContent = {

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

  aboutSpotify: { title: string; cta: string };

  aboutYoutube: { title: string; cta: string; message: string };

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



export const heroLanguageOptions = [{ value: "es" as const, label: "ESP" }, { value: "en" as const, label: "ENG" }, { value: "zh" as const, label: "??" }, { value: "de" as const, label: "DEU" }];



const projectImages = [

  "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?auto=format&fit=crop&w=1200&q=80",

];



export const content: Record<Language, PortfolioContent> = {

  es: {

    navItems: [

      { href: "#sobre-mi", label: "Sobre mÃ­" },

      { href: "#proyectos", label: "Proyectos" },

      { href: "#habilidades", label: "Habilidades" },

      { href: "#testimonios", label: "Testimonios" },

      { href: "#aprendizaje", label: "Aprendizaje" },

      { href: "#contactos", label: "Contactos" },

    ],

    darkLabel: "Modo oscuro",

    lightLabel: "Modo claro",

    languageLabel: "Idioma",

    heroBadge: "Desarrollador FullStack | Salmos 23:1",

    heroLead: "Soy desarrollador web fullStack con mentalidad de liderazgo y enfoque colaborativo. Me destaco por priorizar el bienestar del equipo y construir soluciones eficientes y escalables. Salmos 23:1: El Señor es mi pastor; nada me faltará.",

    sections: {

      about: "Sobre mÃ­",

      value: "Lo que aporto",

      projects: "Proyectos",

      experience: "Experiencia y enfoque",

      skills: "Habilidades",

      testimonials: "Testimonios",

      learning: "Aprendizaje continuo",

      contacts: "Contactos",

    },

    stats: [

      { number: "12+", label: "TecnologÃ­as dominadas" },

      { number: "6", label: "Ãreas de trabajo" },

      { number: "100%", label: "Enfoque responsive" },

      { number: "24/7", label: "Aprendizaje continuo" },

    ],

    aboutParagraphs: [

      "Me caracterizo por ser una persona altamente concentrada, disciplinada y comprometida con cada objetivo que asumo. Cuando me enfoco en una meta, trabajo con determinaciÃ³n y constancia hasta hacerla realidad, cuidando cada detalle del proceso.",

      "Soy cantautor y compositor con mÃºsica disponible en plataformas digitales. TambiÃ©n he liderado equipos de baloncesto en Pasto y grupos de baile en mi instituciÃ³n, fortaleciendo liderazgo, trabajo en equipo y expresiÃ³n artÃ­stica.",

    ],

    aboutSpotify: {

      title: "Escucha mi perfil de artista en Spotify",

      cta: "Abrir Spotify",

    },

    aboutYoutube: {

      title: "YouTube",

      cta: "Abrir video",

      message: "Haz clic y mira mis mejores jugadas jugando baloncesto",

    },

    valueItems: [

      { title: "Disciplina", text: "Mantengo constancia en el desarrollo de software, enfocÃ¡ndome en escribir cÃ³digo limpio, cumplir objetivos tÃ©cnicos y llevar cada proyecto backend hasta su correcta implementaciÃ³n." },

      { title: "Orden", text: "Estructuro sistemas y procesos de manera clara, aplicando buenas prÃ¡cticas que facilitan la escalabilidad, el mantenimiento del cÃ³digo y la eficiencia en el trabajo en equipo." },

      { title: "Trabajo fluido", text: "Me adapto con facilidad a los flujos de desarrollo, colaborando eficazmente con equipos y manteniendo un ritmo constante que permite avanzar proyectos de forma Ã¡gil y organizada." },

    ],

    projects: [

      { title: "Dashboard de ventas", description: "Panel administrativo orientado al seguimiento de ventas, mÃ©tricas clave y visualizaciÃ³n de rendimiento para apoyar la toma de decisiones con datos claros y accionables.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "Landing para startup", description: "Landing page pensada para presentar una propuesta de valor de forma clara, moderna y atractiva, con enfoque en conversion, estructura visual y adaptacion responsive.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "Sistema de reservas", description: "AplicaciÃ³n enfocada en la gestiÃ³n de reservas con operaciones CRUD, organizaciÃ³n de informaciÃ³n y una experiencia fluida para usuarios y administradores.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "Portafolio interactivo", description: "Sitio personal diseÃ±ado para mostrar perfil profesional, habilidades y proyectos con una interfaz visualmente atractiva, navegaciÃ³n clara y enfoque acadÃ©mico.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "Mi enfoque de trabajo se basa en planear con claridad, desarrollar con disciplina y mejorar continuamente cada entrega para lograr resultados funcionales, ordenados y escalables.",

    timeline: [

      { phase: "AnÃ¡lisis y planeaciÃ³n", title: "Organizo primero la estructura del proyecto", text: "Defino objetivos, estructura y prioridades antes de desarrollar, lo que me permite avanzar con orden, reducir errores y tomar decisiones tÃ©cnicas con mayor claridad.", tags: ["Wireframes", "Arquitectura UI", "PlanificaciÃ³n"] },

      { phase: "Desarrollo", title: "Construyo interfaces y lÃ³gica con enfoque prÃ¡ctico", text: "Desarrollo soluciones priorizando funcionalidad, limpieza del cÃ³digo y colaboraciÃ³n efectiva, buscando que cada mÃ³dulo sea claro, Ãºtil y fÃ¡cil de mantener.", tags: ["React", "Node.js", "APIs"] },

      { phase: "Entrega y mejora", title: "Pulo detalles visuales y funcionales", text: "Reviso cada resultado para optimizar experiencia, estabilidad y presentaciÃ³n final, aplicando ajustes que eleven la calidad general del proyecto.", tags: ["Responsive", "Testing visual", "Refactor"] },

    ],

    skillsIntro: "Mi stack combina desarrollo frontend, backend, herramientas de trabajo moderno y bases de diseÃ±o orientadas a construir productos funcionales, escalables y visualmente claros.",

    skills: [

      { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "Responsive Design", "Bootstrap / Tailwind", "Consumo de APIs"] },

      { title: "Backend", items: ["Node.js", "Express.js", "APIs REST", "Bases de datos (MySQL / MongoDB)", "AutenticaciÃ³n (JWT)", "Arquitectura MVC"] },

      { title: "Herramientas", items: ["Git & GitHub", "Postman", "Docker (bÃ¡sico)", "VS Code", "npm / yarn", "Linux (bÃ¡sico)"] },

      { title: "DiseÃ±o", items: ["UI/UX bÃ¡sico", "Figma", "Prototipado", "DiseÃ±o responsive", "Principios de usabilidad"] },

    ],

    testimonials: [

      { title: "CompaÃ±ero de proyecto", text: "Gabriel mantiene una actitud enfocada y colaborativa. Siempre busca que el trabajo avance con orden y que cada integrante del equipo pueda aportar de la mejor manera.", note: "Trabajo colaborativo y apoyo tÃ©cnico" },

      { title: "RevisiÃ³n acadÃ©mica", text: "Destaca por su disciplina, su interÃ©s por mejorar continuamente y su capacidad para presentar soluciones bien estructuradas tanto en lo tÃ©cnico como en lo visual.", note: "Enfoque integral y mejora continua" },

      { title: "Cliente simulado", text: "Su trabajo transmite compromiso y claridad. Las propuestas que desarrolla se sienten organizadas, funcionales y pensadas para resolver necesidades reales.", note: "Claridad, criterio y funcionalidad" },

    ],

    learningCards: [

      { title: "QuÃ© estoy aprendiendo", text: "Actualmente estoy fortaleciendo mis conocimientos en diseÃ±o de interfaces, arquitecturas de software y computacionales, cloud computing y modelos transaccionales de datos para construir sistemas mÃ¡s robustos y escalables.", items: ["DiseÃ±o de interfaces", "Cloud computing", "Modelos transaccionales de datos"] },

      { title: "QuÃ© estoy mejorando", text: "Estoy enfocado en mejorar la calidad de mi cÃ³digo mediante buenas prÃ¡cticas de cÃ³digo limpio, asÃ­ como en el desarrollo de interfaces llamativas que brinden una mejor experiencia al usuario.", items: ["CÃ³digo limpio", "Buenas prÃ¡cticas", "Interfaces llamativas"] },

      { title: "Hacia dÃ³nde quiero crecer", text: "Mi objetivo es crecer profesionalmente hasta crear mi propia empresa de software, desarrollando soluciones innovadoras y posicionÃ¡ndome como un referente reconocido a nivel mundial en la industria tecnolÃ³gica.", items: ["Empresa de software", "Soluciones innovadoras", "Reconocimiento global"] },

    ],

    contactIntro: "Estoy abierto a nuevas oportunidades, colaboraciones y proyectos desafiantes; no dudes en contactarme si buscas compromiso, calidad y un enfoque profesional orientado a resultados.",

    contactItems: [

      { title: "Correo", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },

      { title: "TelÃ©fono", detail: "3205681399", symbol: "+" },

      { title: "UbicaciÃ³n", detail: "Pasto, Colombia", symbol: "#" },

    ],

    socialLabel: "Redes y portafolio profesional",

    form: {

      name: "Nombre",

      email: "Correo",

      subject: "Asunto",

      message: "Mensaje",

      namePlaceholder: "Tu nombre",

      emailPlaceholder: "tucorreo@ejemplo.com",

      subjectPlaceholder: "Propuesta de proyecto o contacto acadÃ©mico",

      messagePlaceholder: "Hola Gabriel, vimos tu portafolio y queremos hablar contigo.",

      submit: "Enviar mensaje",

    },

    footer: {

      bioTitle: "Gabriel Narvaez",

      bioText: "Desarrollador backend apasionado por crear soluciones eficientes, escalables y de alto impacto, combinando tecnologÃ­a, creatividad y liderazgo para aportar valor en cada proyecto.",

      sectionsTitle: "Secciones clave",

      contactTitle: "Contacto",

      copyright: "Portafolio acadÃ©mico de Gabriel NarvÃ¡ez, 2026.",

    },

  },

