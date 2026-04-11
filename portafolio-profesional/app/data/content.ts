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



export const heroLanguageOptions = [{ value: "es" as const, label: "ESP" }, { value: "en" as const, label: "ENG" }, { value: "zh" as const, label: "\u4e2d\u6587" }, { value: "de" as const, label: "DEU" }];



const projectImages = [

  "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?auto=format&fit=crop&w=1200&q=80",

];



export const content: Record<Language, PortfolioContent> = {

  es: {

    navItems: [

      { href: "#sobre-mi", label: "Sobre mí" },

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

    heroLead: "Soy desarrollador web fullStack con mentalidad de liderazgo y enfoque colaborativo. Me destaco por priorizar el bienestar del equipo y construir soluciones eficientes y escalables. Salmos 23:1: El Se\u00f1or es mi pastor; nada me faltar\u00e1.",

    sections: {

      about: "Sobre mí",

      value: "Lo que aporto",

      projects: "Proyectos",

      experience: "Experiencia y enfoque",

      skills: "Habilidades",

      testimonials: "Testimonios",

      learning: "Aprendizaje continuo",

      contacts: "Contactos",

    },

    stats: [

      { number: "12+", label: "Tecnologías dominadas" },

      { number: "6", label: "Áreas de trabajo" },

      { number: "100%", label: "Enfoque responsive" },

      { number: "24/7", label: "Aprendizaje continuo" },

    ],

    aboutParagraphs: [

      "Me caracterizo por ser una persona altamente concentrada, disciplinada y comprometida con cada objetivo que asumo. Cuando me enfoco en una meta, trabajo con determinación y constancia hasta hacerla realidad, cuidando cada detalle del proceso.",

      "Soy cantautor y compositor con música disponible en plataformas digitales. También he liderado equipos de baloncesto en Pasto y grupos de baile en mi institución, fortaleciendo liderazgo, trabajo en equipo y expresión artística.",

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

      { title: "Disciplina", text: "Mantengo constancia en el desarrollo de software, enfocándome en escribir código limpio, cumplir objetivos técnicos y llevar cada proyecto backend hasta su correcta implementación." },

      { title: "Orden", text: "Estructuro sistemas y procesos de manera clara, aplicando buenas prácticas que facilitan la escalabilidad, el mantenimiento del código y la eficiencia en el trabajo en equipo." },

      { title: "Trabajo fluido", text: "Me adapto con facilidad a los flujos de desarrollo, colaborando eficazmente con equipos y manteniendo un ritmo constante que permite avanzar proyectos de forma ágil y organizada." },

    ],

    projects: [

      { title: "Dashboard de ventas", description: "Panel administrativo orientado al seguimiento de ventas, métricas clave y visualización de rendimiento para apoyar la toma de decisiones con datos claros y accionables.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "Landing para startup", description: "Landing page pensada para presentar una propuesta de valor de forma clara, moderna y atractiva, con enfoque en conversion, estructura visual y adaptacion responsive.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "Sistema de reservas", description: "Aplicación enfocada en la gestión de reservas con operaciones CRUD, organización de información y una experiencia fluida para usuarios y administradores.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "Portafolio interactivo", description: "Sitio personal diseñado para mostrar perfil profesional, habilidades y proyectos con una interfaz visualmente atractiva, navegación clara y enfoque académico.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "Mi enfoque de trabajo se basa en planear con claridad, desarrollar con disciplina y mejorar continuamente cada entrega para lograr resultados funcionales, ordenados y escalables.",

    timeline: [

      { phase: "Análisis y planeación", title: "Organizo primero la estructura del proyecto", text: "Defino objetivos, estructura y prioridades antes de desarrollar, lo que me permite avanzar con orden, reducir errores y tomar decisiones técnicas con mayor claridad.", tags: ["Wireframes", "Arquitectura UI", "Planificación"] },

      { phase: "Desarrollo", title: "Construyo interfaces y lógica con enfoque práctico", text: "Desarrollo soluciones priorizando funcionalidad, limpieza del código y colaboración efectiva, buscando que cada módulo sea claro, útil y fácil de mantener.", tags: ["React", "Node.js", "APIs"] },

      { phase: "Entrega y mejora", title: "Pulo detalles visuales y funcionales", text: "Reviso cada resultado para optimizar experiencia, estabilidad y presentación final, aplicando ajustes que eleven la calidad general del proyecto.", tags: ["Responsive", "Testing visual", "Refactor"] },

    ],

    skillsIntro: "Mi stack combina desarrollo frontend, backend, herramientas de trabajo moderno y bases de diseño orientadas a construir productos funcionales, escalables y visualmente claros.",

    skills: [

      { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "Responsive Design", "Bootstrap / Tailwind", "Consumo de APIs"] },

      { title: "Backend", items: ["Node.js", "Express.js", "APIs REST", "Bases de datos (MySQL / MongoDB)", "Autenticación (JWT)", "Arquitectura MVC"] },

      { title: "Herramientas", items: ["Git & GitHub", "Postman", "Docker (básico)", "VS Code", "npm / yarn", "Linux (básico)"] },

      { title: "Diseño", items: ["UI/UX básico", "Figma", "Prototipado", "Diseño responsive", "Principios de usabilidad"] },

    ],

    testimonials: [

      { title: "Compañero de proyecto", text: "Gabriel mantiene una actitud enfocada y colaborativa. Siempre busca que el trabajo avance con orden y que cada integrante del equipo pueda aportar de la mejor manera.", note: "Trabajo colaborativo y apoyo técnico" },

      { title: "Revisión académica", text: "Destaca por su disciplina, su interés por mejorar continuamente y su capacidad para presentar soluciones bien estructuradas tanto en lo técnico como en lo visual.", note: "Enfoque integral y mejora continua" },

      { title: "Cliente simulado", text: "Su trabajo transmite compromiso y claridad. Las propuestas que desarrolla se sienten organizadas, funcionales y pensadas para resolver necesidades reales.", note: "Claridad, criterio y funcionalidad" },

    ],

    learningCards: [

      { title: "Qué estoy aprendiendo", text: "Actualmente estoy fortaleciendo mis conocimientos en diseño de interfaces, arquitecturas de software y computacionales, cloud computing y modelos transaccionales de datos para construir sistemas más robustos y escalables.", items: ["Diseño de interfaces", "Cloud computing", "Modelos transaccionales de datos"] },

      { title: "Qué estoy mejorando", text: "Estoy enfocado en mejorar la calidad de mi código mediante buenas prácticas de código limpio, así como en el desarrollo de interfaces llamativas que brinden una mejor experiencia al usuario.", items: ["Código limpio", "Buenas prácticas", "Interfaces llamativas"] },

      { title: "Hacia dónde quiero crecer", text: "Mi objetivo es crecer profesionalmente hasta crear mi propia empresa de software, desarrollando soluciones innovadoras y posicionándome como un referente reconocido a nivel mundial en la industria tecnológica.", items: ["Empresa de software", "Soluciones innovadoras", "Reconocimiento global"] },

    ],

    contactIntro: "Estoy abierto a nuevas oportunidades, colaboraciones y proyectos desafiantes; no dudes en contactarme si buscas compromiso, calidad y un enfoque profesional orientado a resultados.",

    contactItems: [

      { title: "Correo", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },

      { title: "Teléfono", detail: "3205681399", symbol: "+" },

      { title: "Ubicación", detail: "Pasto, Colombia", symbol: "#" },

    ],

    socialLabel: "Redes y portafolio profesional",

    form: {

      name: "Nombre",

      email: "Correo",

      subject: "Asunto",

      message: "Mensaje",

      namePlaceholder: "Tu nombre",

      emailPlaceholder: "tucorreo@ejemplo.com",

      subjectPlaceholder: "Propuesta de proyecto o contacto académico",

      messagePlaceholder: "Hola Gabriel, vimos tu portafolio y queremos hablar contigo.",

      submit: "Enviar mensaje",

    },

    footer: {

      bioTitle: "Gabriel Narvaez",

      bioText: "Desarrollador backend apasionado por crear soluciones eficientes, escalables y de alto impacto, combinando tecnología, creatividad y liderazgo para aportar valor en cada proyecto.",

      sectionsTitle: "Secciones clave",

      contactTitle: "Contacto",

      copyright: "Portafolio académico de Gabriel Narváez, 2026.",

    },

  },

  zh: {

    navItems: [

      { href: "#sobre-mi", label: "\u5173\u4e8e\u6211" },

      { href: "#proyectos", label: "\u9879\u76ee" },

      { href: "#habilidades", label: "\u6280\u80fd" },

      { href: "#testimonios", label: "\u8bc4\u4ef7" },

      { href: "#aprendizaje", label: "\u5b66\u4e60" },

      { href: "#contactos", label: "\u8054\u7cfb" },

    ],

    darkLabel: "\u6df1\u8272\u6a21\u5f0f",

    lightLabel: "\u6d45\u8272\u6a21\u5f0f",

    languageLabel: "\u8bed\u8a00",

    heroBadge: "\u5168\u6808\u5f00\u53d1\u8005 | \u8bd7\u7bc7 23:1",

    heroLead: "\u6211\u662f\u5168\u6808\u7f51\u9875\u5f00\u53d1\u8005\uff0c\u5177\u5907\u9886\u5bfc\u601d\u7ef4\u548c\u534f\u4f5c\u578b\u5de5\u4f5c\u65b9\u5f0f\u3002\u6211\u6ce8\u91cd\u56e2\u961f\u798f\u7949\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u9ad8\u6548\u4e14\u53ef\u6269\u5c55\u7684\u89e3\u51b3\u65b9\u6848\u3002\u8bd7\u7bc7 23:1\uff1a\u8036\u548c\u534e\u662f\u6211\u7684\u7267\u8005\uff0c\u6211\u5fc5\u4e0d\u81f4\u7f3a\u4e4f\u3002",

    sections: {

      about: "\u5173\u4e8e\u6211",

      value: "\u6211\u7684\u4ef7\u503c",

      projects: "\u9879\u76ee",

      experience: "\u7ecf\u9a8c\u4e0e\u65b9\u6cd5",

      skills: "\u6280\u80fd",

      testimonials: "\u8bc4\u4ef7",

      learning: "\u6301\u7eed\u5b66\u4e60",

      contacts: "\u8054\u7cfb",

    },

    stats: [

      { number: "12+", label: "\u638c\u63e1\u7684\u6280\u672f" },

      { number: "6", label: "\u5de5\u4f5c\u9886\u57df" },

      { number: "100%", label: "\u54cd\u5e94\u5f0f\u601d\u7ef4" },

      { number: "24/7", label: "\u6301\u7eed\u5b66\u4e60" },

    ],

    aboutParagraphs: [

      "\u6211\u662f\u4e00\u4e2a\u9ad8\u5ea6\u4e13\u6ce8\u3001\u81ea\u5f8b\u4e14\u5bf9\u6bcf\u4e00\u4e2a\u76ee\u6807\u90fd\u5145\u6ee1\u8d23\u4efb\u611f\u7684\u4eba\u3002\u5f53\u6211\u4e13\u6ce8\u4e8e\u4e00\u4e2a\u76ee\u6807\u65f6\uff0c\u6211\u4f1a\u7528\u51b3\u5fc3\u548c\u575a\u6301\u5c06\u5b83\u53d8\u6210\u73b0\u5b9e\uff0c\u5e76\u5173\u6ce8\u8fc7\u7a0b\u4e2d\u7684\u6bcf\u4e00\u4e2a\u7ec6\u8282\u3002",

      "\u6211\u4e5f\u662f\u4e00\u540d\u5531\u4f5c\u6b4c\u624b\u548c\u4f5c\u66f2\u8005\uff0c\u4f5c\u54c1\u5df2\u5728\u6570\u5b57\u5e73\u53f0\u4e0a\u53d1\u5e03\u3002\u6b64\u5916\uff0c\u6211\u8fd8\u5728 Pasto \u9886\u5bfc\u8fc7\u7bee\u7403\u961f\u548c\u5b66\u6821\u821e\u8e48\u56e2\u961f\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u9886\u5bfc\u529b\u3001\u56e2\u961f\u5408\u4f5c\u548c\u827a\u672f\u8868\u8fbe\u80fd\u529b\u3002",

    ],

    aboutSpotify: {

      title: "\u5728 Spotify \u6536\u542c\u6211\u7684\u827a\u672f\u5bb6\u4e3b\u9875",

      cta: "\u6253\u5f00 Spotify",

    },

    aboutYoutube: {

      title: "YouTube",

      cta: "\u6253\u5f00\u89c6\u9891",

      message: "\u70b9\u51fb\u8fd9\u91cc\u89c2\u770b\u6211\u6700\u7cbe\u5f69\u7684\u7bee\u7403\u96c6\u9526",

    },

    valueItems: [

      { title: "\u7eaa\u5f8b", text: "\u6211\u5728\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u4fdd\u6301\u7a33\u5b9a\u4e0e\u81ea\u5f8b\uff0c\u4e13\u6ce8\u4e8e\u7f16\u5199\u6574\u6d01\u7684\u4ee3\u7801\u3001\u5b8c\u6210\u6280\u672f\u76ee\u6807\uff0c\u5e76\u8ba9\u6bcf\u4e2a fullStack \u9879\u76ee\u987a\u5229\u843d\u5730\u3002" },

      { title: "\u79e9\u5e8f", text: "\u6211\u4ee5\u6e05\u6670\u7684\u65b9\u5f0f\u7ec4\u7ec7\u7cfb\u7edf\u548c\u6d41\u7a0b\uff0c\u91c7\u7528\u826f\u597d\u5b9e\u8df5\u6765\u63d0\u9ad8\u53ef\u6269\u5c55\u6027\u3001\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u4ee5\u53ca\u56e2\u961f\u534f\u4f5c\u6548\u7387\u3002" },

      { title: "\u987a\u7545\u534f\u4f5c", text: "\u6211\u80fd\u5feb\u901f\u9002\u5e94\u5f00\u53d1\u6d41\u7a0b\uff0c\u4e0e\u56e2\u961f\u9ad8\u6548\u534f\u4f5c\uff0c\u5e76\u4fdd\u6301\u7a33\u5b9a\u8282\u594f\uff0c\u4f7f\u9879\u76ee\u4ee5\u654f\u6377\u4e14\u6709\u5e8f\u7684\u65b9\u5f0f\u63a8\u8fdb\u3002" },

    ],

    projects: [

      { title: "\u9500\u552e\u4eea\u8868\u76d8", description: "\u9762\u5411\u9500\u552e\u8ddf\u8e2a\u3001\u5173\u952e\u6307\u6807\u548c\u6027\u80fd\u53ef\u89c6\u5316\u7684\u7ba1\u7406\u9762\u677f\uff0c\u5e2e\u52a9\u57fa\u4e8e\u6e05\u6670\u53ef\u884c\u7684\u6570\u636e\u505a\u51fa\u51b3\u7b56\u3002", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "\u521d\u521b\u516c\u53f8\u7740\u9646\u9875", description: "\u7528\u4e8e\u6e05\u6670\u3001\u73b0\u4ee3\u4e14\u6709\u5438\u5f15\u529b\u5730\u5c55\u793a\u4ef7\u503c\u4e3b\u5f20\u7684\u7740\u9646\u9875\uff0c\u6ce8\u91cd\u8f6c\u5316\u3001\u89c6\u89c9\u7ed3\u6784\u4e0e\u54cd\u5e94\u5f0f\u8868\u73b0\u3002", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "\u9884\u7ea6\u7cfb\u7edf", description: "\u4e13\u6ce8\u4e8e\u9884\u7ea6\u7ba1\u7406\u7684\u5e94\u7528\uff0c\u5305\u542b CRUD \u64cd\u4f5c\u3001\u6709\u5e8f\u7684\u4fe1\u606f\u7ba1\u7406\uff0c\u4e3a\u7528\u6237\u548c\u7ba1\u7406\u5458\u63d0\u4f9b\u6d41\u7545\u4f53\u9a8c\u3002", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "\u4ea4\u4e92\u5f0f\u4f5c\u54c1\u96c6", description: "\u7528\u4e8e\u5c55\u793a\u4e2a\u4eba\u4e13\u4e1a\u80cc\u666f\u3001\u6280\u80fd\u548c\u9879\u76ee\u7684\u4e2a\u4eba\u7f51\u7ad9\uff0c\u5177\u6709\u5438\u5f15\u529b\u5f3a\u7684\u754c\u9762\u3001\u6e05\u6670\u5bfc\u822a\u548c\u5b66\u672f\u5b9a\u4f4d\u3002", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "\u6211\u7684\u5de5\u4f5c\u65b9\u5f0f\u5efa\u7acb\u5728\u6e05\u6670\u89c4\u5212\u3001\u7eaa\u5f8b\u5f00\u53d1\u548c\u6301\u7eed\u4f18\u5316\u6bcf\u4e00\u6b21\u4ea4\u4ed8\u4e4b\u4e0a\uff0c\u4ee5\u5b9e\u73b0\u529f\u80fd\u5b8c\u6574\u3001\u7ed3\u6784\u6709\u5e8f\u4e14\u53ef\u6269\u5c55\u7684\u6210\u679c\u3002",

    timeline: [

      { phase: "\u5206\u6790\u4e0e\u89c4\u5212", title: "\u6211\u4f1a\u5148\u6574\u7406\u9879\u76ee\u7ed3\u6784", text: "\u5728\u5f00\u53d1\u4e4b\u524d\u6211\u4f1a\u5b9a\u4e49\u76ee\u6807\u3001\u7ed3\u6784\u548c\u4f18\u5148\u7ea7\uff0c\u8fd9\u8ba9\u6211\u80fd\u66f4\u6709\u6761\u7406\u5730\u63a8\u8fdb\u3001\u51cf\u5c11\u9519\u8bef\uff0c\u5e76\u66f4\u6e05\u695a\u5730\u505a\u51fa\u6280\u672f\u51b3\u7b56\u3002", tags: ["Wireframes", "UI Architecture", "Planning"] },

      { phase: "\u5f00\u53d1", title: "\u6211\u4ee5\u5b9e\u7528\u4e3a\u5bfc\u5411\u6784\u5efa\u754c\u9762\u4e0e\u903b\u8f91", text: "\u6211\u5728\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\u65f6\u4f18\u5148\u8003\u8651\u529f\u80fd\u6027\u3001\u4ee3\u7801\u6574\u6d01\u5ea6\u4e0e\u9ad8\u6548\u534f\u4f5c\uff0c\u8ba9\u6bcf\u4e2a\u6a21\u5757\u90fd\u6e05\u6670\u3001\u6709\u7528\u4e14\u6613\u4e8e\u7ef4\u62a4\u3002", tags: ["React", "Node.js", "APIs"] },

      { phase: "\u4ea4\u4ed8\u4e0e\u4f18\u5316", title: "\u6211\u4f18\u5316\u89c6\u89c9\u4e0e\u529f\u80fd\u7ec6\u8282", text: "\u6211\u4f1a\u68c0\u67e5\u6bcf\u4e00\u4e2a\u7ed3\u679c\uff0c\u4ee5\u4f18\u5316\u4f53\u9a8c\u3001\u7a33\u5b9a\u6027\u548c\u6700\u7ec8\u5448\u73b0\uff0c\u901a\u8fc7\u7ec6\u8282\u8c03\u6574\u63d0\u9ad8\u9879\u76ee\u6574\u4f53\u8d28\u91cf\u3002", tags: ["Responsive", "Visual testing", "Refactor"] },

    ],

    skillsIntro: "\u6211\u7684\u6280\u672f\u6808\u7ed3\u5408\u4e86\u524d\u7aef\u3001\u540e\u7aef\u3001\u73b0\u4ee3\u5de5\u4f5c\u5de5\u5177\u548c\u8bbe\u8ba1\u57fa\u7840\uff0c\u7528\u6765\u6784\u5efa\u529f\u80fd\u5b8c\u6574\u3001\u53ef\u6269\u5c55\u4e14\u89c6\u89c9\u6e05\u6670\u7684\u4ea7\u54c1\u3002",

    skills: [

      { title: "\u524d\u7aef", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "Responsive Design", "Bootstrap / Tailwind", "API \u8c03\u7528"] },

      { title: "\u540e\u7aef", items: ["Node.js", "Express.js", "REST APIs", "\u6570\u636e\u5e93 (MySQL / MongoDB)", "\u8ba4\u8bc1 (JWT)", "MVC \u67b6\u6784"] },

      { title: "\u5de5\u5177", items: ["Git & GitHub", "Postman", "Docker (\u57fa\u7840)", "VS Code", "npm / yarn", "Linux (\u57fa\u7840)"] },

      { title: "\u8bbe\u8ba1", items: ["UI/UX \u57fa\u7840", "Figma", "\u539f\u578b\u8bbe\u8ba1", "\u54cd\u5e94\u5f0f\u8bbe\u8ba1", "\u53ef\u7528\u6027\u539f\u5219"] },

    ],

    testimonials: [

      { title: "\u9879\u76ee\u5408\u4f5c\u8005", text: "Gabriel \u4fdd\u6301\u4e13\u6ce8\u4e14\u5177\u6709\u534f\u4f5c\u7cbe\u795e\u3002\u4ed6\u603b\u662f\u8ba9\u5de5\u4f5c\u6709\u6761\u4e0d\u7d0a\u5730\u5411\u524d\u63a8\u8fdb\uff0c\u5e76\u4fdd\u8bc1\u56e2\u961f\u6bcf\u4e2a\u6210\u5458\u90fd\u80fd\u6709\u6548\u8d21\u732e\u3002", note: "\u534f\u4f5c\u4e0e\u6280\u672f\u652f\u6301" },

      { title: "\u5b66\u672f\u8bc4\u4ef7", text: "\u4ed6\u4ee5\u7eaa\u5f8b\u6027\u3001\u6301\u7eed\u8fdb\u6b65\u7684\u610f\u8bc6\u4ee5\u53ca\u5728\u6280\u672f\u548c\u89c6\u89c9\u4e24\u65b9\u9762\u6e05\u6670\u5448\u73b0\u89e3\u51b3\u65b9\u6848\u7684\u80fd\u529b\u800c\u8131\u9896\u800c\u51fa\u3002", note: "\u5168\u5c40\u601d\u7ef4\u4e0e\u6301\u7eed\u6539\u8fdb" },

      { title: "\u6a21\u62df\u5ba2\u6237", text: "\u4ed6\u7684\u5de5\u4f5c\u4f20\u8fbe\u51fa\u627f\u8bfa\u611f\u4e0e\u6e05\u6670\u5ea6\u3002\u4ed6\u63d0\u51fa\u7684\u65b9\u6848\u663e\u5f97\u6709\u7ec4\u7ec7\u3001\u5b9e\u7528\uff0c\u5e76\u9762\u5411\u771f\u5b9e\u9700\u6c42\u3002", note: "\u6e05\u6670\u5ea6\u3001\u5224\u65ad\u529b\u4e0e\u529f\u80fd\u6027" },

    ],

    learningCards: [

      { title: "\u6211\u6b63\u5728\u5b66\u4ec0\u4e48", text: "\u6211\u76ee\u524d\u6b63\u5728\u52a0\u5f3a\u5bf9\u754c\u9762\u8bbe\u8ba1\u3001\u8f6f\u4ef6\u4e0e\u8ba1\u7b97\u673a\u67b6\u6784\u3001\u4e91\u8ba1\u7b97\u4ee5\u53ca\u4ea4\u6613\u6570\u636e\u6a21\u578b\u7684\u7406\u89e3\uff0c\u4ee5\u6784\u5efa\u66f4\u52a0\u5065\u58ee\u4e14\u53ef\u6269\u5c55\u7684\u7cfb\u7edf\u3002", items: ["\u754c\u9762\u8bbe\u8ba1", "\u4e91\u8ba1\u7b97", "\u4ea4\u6613\u6570\u636e\u6a21\u578b"] },

      { title: "\u6211\u6b63\u5728\u63d0\u5347\u4ec0\u4e48", text: "\u6211\u4e13\u6ce8\u4e8e\u901a\u8fc7 clean code \u5b9e\u8df5\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf\uff0c\u540c\u65f6\u6253\u9020\u66f4\u6709\u5438\u5f15\u529b\u7684\u754c\u9762\uff0c\u4e3a\u7528\u6237\u5e26\u6765\u66f4\u597d\u4f53\u9a8c\u3002", items: ["Clean Code", "\u826f\u597d\u5b9e\u8df5", "\u66f4\u5f3a\u7684\u754c\u9762\u8bbe\u8ba1"] },

      { title: "\u6211\u60f3\u8981\u6210\u957f\u5230\u54ea\u91cc", text: "\u6211\u7684\u76ee\u6807\u662f\u5728\u804c\u4e1a\u4e0a\u4e0d\u65ad\u6210\u957f\uff0c\u76f4\u5230\u521b\u5efa\u81ea\u5df1\u7684\u8f6f\u4ef6\u516c\u53f8\uff0c\u5f00\u53d1\u521b\u65b0\u89e3\u51b3\u65b9\u6848\uff0c\u5e76\u6210\u4e3a\u5728\u5168\u7403\u6280\u672f\u884c\u4e1a\u4e2d\u53d7\u8ba4\u53ef\u7684\u53c2\u8003\u4eba\u7269\u3002", items: ["\u8f6f\u4ef6\u516c\u53f8", "\u521b\u65b0\u89e3\u51b3\u65b9\u6848", "\u5168\u7403\u8ba4\u53ef"] },

    ],

    contactIntro: "\u6211\u5bf9\u65b0\u7684\u673a\u4f1a\u3001\u5408\u4f5c\u4ee5\u53ca\u5177\u6709\u6311\u6218\u6027\u7684\u9879\u76ee\u6301\u5f00\u653e\u6001\u5ea6\u3002\u5982\u679c\u4f60\u6b63\u5728\u5bfb\u627e\u627f\u8bfa\u611f\u3001\u8d28\u91cf\u4ee5\u53ca\u4ee5\u7ed3\u679c\u4e3a\u5bfc\u5411\u7684\u4e13\u4e1a\u65b9\u5f0f\uff0c\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u6211\u3002",

    contactItems: [

      { title: "\u90ae\u7bb1", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },

      { title: "\u7535\u8bdd", detail: "3205681399", symbol: "+" },

      { title: "\u5730\u70b9", detail: "Pasto, Colombia", symbol: "#" },

    ],

    socialLabel: "\u793e\u4ea4\u94fe\u63a5\u4e0e\u4e13\u4e1a\u4f5c\u54c1\u96c6",

    form: {

      name: "\u59d3\u540d",

      email: "\u90ae\u7bb1",

      subject: "\u4e3b\u9898",

      message: "\u6d88\u606f",

      namePlaceholder: "\u4f60\u7684\u540d\u5b57",

      emailPlaceholder: "yourmail@example.com",

      subjectPlaceholder: "\u9879\u76ee\u5408\u4f5c\u6216\u5b66\u672f\u8054\u7cfb",

      messagePlaceholder: "\u4f60\u597d Gabriel\uff0c\u6211\u770b\u4e86\u4f60\u7684\u4f5c\u54c1\u96c6\uff0c\u60f3\u548c\u4f60\u8054\u7cfb\u3002",

      submit: "\u53d1\u9001\u6d88\u606f",

    },

    footer: {

      bioTitle: "Gabriel Narv\u00e1ez",

      bioText: "\u5168\u6808\u5f00\u53d1\u8005\uff0c\u70ed\u8877\u4e8e\u6253\u9020\u9ad8\u6548\u3001\u53ef\u6269\u5c55\u4e14\u5177\u6709\u5f71\u54cd\u529b\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5c06\u6280\u672f\u3001\u521b\u610f\u548c\u9886\u5bfc\u529b\u878d\u5165\u6bcf\u4e00\u4e2a\u9879\u76ee\u3002",

      sectionsTitle: "\u5173\u952e\u677f\u5757",

      contactTitle: "\u8054\u7cfb",

      copyright: "Gabriel Narv\u00e1ez \u5b66\u672f\u4f5c\u54c1\u96c6\uff0c2026\u3002",

    },

  },
  de: {

    navItems: [

      { href: "#sobre-mi", label: "Über mich" },

      { href: "#proyectos", label: "Projekte" },

      { href: "#habilidades", label: "Fähigkeiten" },

      { href: "#testimonios", label: "Referenzen" },

      { href: "#aprendizaje", label: "Lernen" },

      { href: "#contactos", label: "Kontakt" },

    ],

    darkLabel: "Dunkelmodus",

    lightLabel: "Hellmodus",

    languageLabel: "Sprache",

    heroBadge: "FullStack-Entwickler | Psalm 23:1",

    heroLead: "Ich bin FullStack-Webentwickler mit F\u00fchrungsmentalit\u00e4t und kollaborativem Ansatz. Ich lege Wert auf das Wohl des Teams und entwickle effiziente sowie skalierbare L\u00f6sungen. Psalm 23:1: Der Herr ist mein Hirte; mir wird nichts mangeln.",

    sections: {

      about: "Über mich",

      value: "Mein Mehrwert",

      projects: "Projekte",

      experience: "Erfahrung und Ansatz",

      skills: "Fähigkeiten",

      testimonials: "Referenzen",

      learning: "Kontinuierliches Lernen",

      contacts: "Kontakt",

    },

    stats: [

      { number: "12+", label: "Beherrschte Technologien" },

      { number: "6", label: "Arbeitsbereiche" },

      { number: "100%", label: "Responsive Fokus" },

      { number: "24/7", label: "Kontinuierliches Lernen" },

    ],

    aboutParagraphs: [

      "Ich zeichne mich dadurch aus, dass ich konzentriert, diszipliniert und jedem Ziel, das ich übernehme, voll verpflichtet bin. Wenn ich mich auf ein Ziel fokussiere, arbeite ich mit Entschlossenheit und Beständigkeit daran, es zu erreichen, und achte dabei auf jedes Detail des Prozesses.",

      "Ich bin außerdem Singer-Songwriter und Komponist mit musikalischer Laufbahn, deren Musik bereits auf verschiedenen digitalen Plattformen verfügbar ist. Darüber hinaus habe ich Basketballteams in Pasto sowie Tanzgruppen an meiner Institution geleitet und damit Führung, Teamarbeit und künstlerischen Ausdruck weiter gestärkt.",

    ],

    aboutSpotify: {

      title: "Höre dir mein Künstlerprofil auf Spotify an",

      cta: "Spotify öffnen",

    },

    aboutYoutube: {

      title: "YouTube",

      cta: "Video öffnen",

      message: "Klicke hier und sieh dir meine besten Basketball-Spielzüge an",

    },

    valueItems: [

      { title: "Disziplin", text: "Ich arbeite im Softwareentwicklungsprozess konsequent und fokussiere mich darauf, sauberen Code zu schreiben, technische Ziele zu erreichen und jedes FullStack-Projekt sauber umzusetzen." },

      { title: "Ordnung", text: "Ich strukturiere Systeme und Prozesse klar und wende gute Praktiken an, die Skalierbarkeit, Wartbarkeit des Codes und Effizienz in der Teamarbeit verbessern." },

      { title: "Flüssige Zusammenarbeit", text: "Ich passe mich Entwicklungsabläufen leicht an, arbeite effektiv mit Teams zusammen und halte ein konstantes Tempo, das Projekte agil und organisiert voranbringt." },

    ],

    projects: [

      { title: "Verkaufs-Dashboard", description: "Administratives Dashboard zur Verfolgung von Verkaufszahlen, zentralen Kennzahlen und Leistungsvisualisierung, um Entscheidungen auf Basis klarer und nutzbarer Daten zu unterstützen.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "Startup-Landingpage", description: "Landingpage, die darauf ausgelegt ist, ein Wertversprechen klar, modern und attraktiv zu präsentieren, mit Fokus auf Conversion, visuelle Struktur und responsives Verhalten.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "Reservierungssystem", description: "Anwendung zur Verwaltung von Reservierungen mit CRUD-Operationen, strukturierter Informationsverwaltung und einer flüssigen Erfahrung für Nutzer und Administratoren.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "Interaktives Portfolio", description: "Persönliche Website zur Darstellung des professionellen Profils, der Fähigkeiten und Projekte mit ansprechender Oberfläche, klarer Navigation und akademischem Fokus.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "Mein Arbeitsansatz basiert auf klarer Planung, disziplinierter Entwicklung und kontinuierlicher Verbesserung jeder Lieferung, um funktionale, strukturierte und skalierbare Ergebnisse zu erreichen.",

    timeline: [

      { phase: "Analyse und Planung", title: "Ich organisiere zuerst die Projektstruktur", text: "Vor der Entwicklung definiere ich Ziele, Struktur und Prioritäten. So kann ich geordnet vorgehen, Fehler reduzieren und technische Entscheidungen klarer treffen.", tags: ["Wireframes", "UI-Architektur", "Planung"] },

      { phase: "Entwicklung", title: "Ich baue Interfaces und Logik mit praktischem Fokus", text: "Ich entwickle Lösungen mit Priorität auf Funktionalität, sauberem Code und effektiver Zusammenarbeit, damit jedes Modul klar, nützlich und wartbar bleibt.", tags: ["React", "Node.js", "APIs"] },

      { phase: "Übergabe und Verbesserung", title: "Ich verfeinere visuelle und funktionale Details", text: "Ich überprüfe jedes Ergebnis, um Nutzererfahrung, Stabilität und finale Präsentation zu optimieren und so die Gesamtqualität des Projekts zu steigern.", tags: ["Responsive", "Visuelles Testing", "Refactor"] },

    ],

    skillsIntro: "Mein Stack kombiniert Frontend- und Backend-Entwicklung, moderne Arbeitswerkzeuge und Designgrundlagen, um funktionale, skalierbare und visuell klare Produkte zu schaffen.",

    skills: [

      { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "Responsive Design", "Bootstrap / Tailwind", "API-Anbindung"] },

      { title: "Backend", items: ["Node.js", "Express.js", "REST-APIs", "Datenbanken (MySQL / MongoDB)", "Authentifizierung (JWT)", "MVC-Architektur"] },

      { title: "Werkzeuge", items: ["Git & GitHub", "Postman", "Docker (Grundlagen)", "VS Code", "npm / yarn", "Linux (Grundlagen)"] },

      { title: "Design", items: ["UI/UX-Grundlagen", "Figma", "Prototyping", "Responsive Design", "Usability-Prinzipien"] },

    ],

    testimonials: [

      { title: "Projektpartner", text: "Gabriel arbeitet fokussiert und kollaborativ. Er sorgt dafür, dass die Arbeit geordnet vorangeht und jedes Teammitglied bestmöglich beitragen kann.", note: "Zusammenarbeit und technische Unterstützung" },

      { title: "Akademische Bewertung", text: "Er überzeugt durch Disziplin, seinen Wunsch nach kontinuierlicher Verbesserung und seine Fähigkeit, technische wie visuelle Lösungen strukturiert zu präsentieren.", note: "Ganzheitlicher Ansatz und kontinuierliche Verbesserung" },

      { title: "Simulierter Kunde", text: "Seine Arbeit vermittelt Verbindlichkeit und Klarheit. Die von ihm entwickelten Vorschläge wirken organisiert, funktional und auf reale Bedürfnisse ausgerichtet.", note: "Klarheit, Urteilskraft und Funktionalität" },

    ],

    learningCards: [

      { title: "Was ich gerade lerne", text: "Derzeit vertiefe ich mein Wissen in Interface-Design, Software- und Rechnerarchitekturen, Cloud Computing und transaktionalen Datenmodellen, um robustere, skalierbarere und effizientere Systeme zu entwickeln.", items: ["Interface-Design", "Cloud Computing", "Transaktionale Datenmodelle"] },

      { title: "Was ich verbessere", text: "Ich konzentriere mich darauf, die Qualität meines Codes durch Clean-Code-Praktiken zu verbessern und gleichzeitig an auffälligen Interfaces zu arbeiten, die eine bessere Nutzererfahrung bieten.", items: ["Clean Code", "Gute Praktiken", "Auffällige Interfaces"] },

      { title: "Wohin ich wachsen möchte", text: "Mein Ziel ist es, beruflich so zu wachsen, dass ich mein eigenes Softwareunternehmen gründen, innovative Lösungen entwickeln und weltweit als anerkannte Referenz in der Technologiebranche wahrgenommen werden kann.", items: ["Softwareunternehmen", "Innovative Lösungen", "Globale Anerkennung"] },

    ],

    contactIntro: "Ich bin offen für neue Möglichkeiten, Kooperationen und anspruchsvolle Projekte. Melde dich gern, wenn du Engagement, Qualität und einen professionellen, ergebnisorientierten Ansatz suchst.",

    contactItems: [

      { title: "E-Mail", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },

      { title: "Telefon", detail: "3205681399", symbol: "+" },

      { title: "Standort", detail: "Pasto, Kolumbien", symbol: "#" },

    ],

    socialLabel: "Soziale Links und professionelles Portfolio",

    form: {

      name: "Name",

      email: "E-Mail",

      subject: "Betreff",

      message: "Nachricht",

      namePlaceholder: "Dein Name",

      emailPlaceholder: "yourmail@example.com",

      subjectPlaceholder: "Projektvorschlag oder akademischer Kontakt",

      messagePlaceholder: "Hallo Gabriel, wir haben dein Portfolio gesehen und möchten mit dir sprechen.",

      submit: "Nachricht senden",

    },

    footer: {

      bioTitle: "Gabriel Narváez",

      bioText: "Backend-Entwickler mit Leidenschaft für effiziente, skalierbare und wirkungsstarke Lösungen, der Technologie, Kreativität und Führung kombiniert, um in jedem Projekt Mehrwert zu schaffen.",

      sectionsTitle: "Wichtige Bereiche",

      contactTitle: "Kontakt",

      copyright: "Akademisches Portfolio von Gabriel Narváez, 2026.",

    },

  },

  en: {

    navItems: [

      { href: "#sobre-mi", label: "About me" },

      { href: "#proyectos", label: "Projects" },

      { href: "#habilidades", label: "Skills" },

      { href: "#testimonios", label: "Testimonials" },

      { href: "#aprendizaje", label: "Learning" },

      { href: "#contactos", label: "Contact" },

    ],

    darkLabel: "Dark mode",

    lightLabel: "Light mode",

    languageLabel: "Language",

    heroBadge: "FullStack Developer | Psalm 23:1",

    heroLead: "I am a fullStack web developer with a leadership mindset and a collaborative approach. I stand out for prioritizing team well-being and building efficient, scalable solutions. Psalm 23:1: The Lord is my shepherd; I shall not want.",

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

      "I am known for being highly focused, disciplined, and committed to every goal I take on. When I set my mind on a goal, I work with determination and consistency until I make it real, taking care of every detail throughout the process.",

      "I am also a singer-songwriter and composer with four months of experience, with music already available on several digital platforms. In addition, I have led basketball teams in Pasto and dance groups at my institution, strengthening my leadership, teamwork, and artistic expression.",

    ],

    aboutSpotify: {

      title: "Listen to my artist profile on Spotify",

      cta: "Open Spotify",

    },

    aboutYoutube: {

      title: "YouTube",

      cta: "Open video",

      message: "Click and watch my best basketball highlights",

    },

    valueItems: [

      { title: "Discipline", text: "I stay consistent in software development, focusing on writing clean code, meeting technical goals, and carrying every backend project through to proper implementation." },

      { title: "Order", text: "I structure systems and processes clearly, applying best practices that improve scalability, code maintainability, and efficiency in teamwork." },

      { title: "Smooth workflow", text: "I adapt easily to development workflows, collaborate effectively with teams, and keep a steady pace that helps projects move forward in an agile and organized way." },

    ],

    projects: [

      { title: "Sales dashboard", description: "Administrative dashboard focused on sales tracking, key metrics, and performance visualization to support decision-making through clear and actionable data.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "Startup landing page", description: "Landing page designed to present a value proposition in a clear, modern, and attractive way, with focus on conversion, visual structure, and responsive adaptation.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "Booking system", description: "Application focused on reservation management with CRUD operations, organized information handling, and a smooth experience for users and administrators.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "Interactive portfolio", description: "Personal site designed to showcase professional profile, skills, and projects with an attractive interface, clear navigation, and an academic focus.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "My work approach is based on clear planning, disciplined development, and continuous improvement in every delivery to achieve functional, organized, and scalable results.",

    timeline: [

      { phase: "Analysis and planning", title: "I organize the project structure first", text: "Before development, I define goals, structure, and priorities. This helps me move forward in an organized way, reduce errors, and make technical decisions more clearly.", tags: ["Wireframes", "UI Architecture", "Planning"] },

      { phase: "Development", title: "I build interfaces and logic with a practical mindset", text: "I build solutions by prioritizing functionality, clean code, and effective collaboration so that every module remains clear, useful, and easy to maintain.", tags: ["React", "Node.js", "APIs"] },

      { phase: "Delivery and improvement", title: "I refine visual and functional details", text: "I review each result to optimize experience, stability, and final presentation, applying improvements that raise the overall quality of the project.", tags: ["Responsive", "Visual testing", "Refactor"] },

    ],

    skillsIntro: "My stack combines frontend and backend development, modern work tools, and design foundations focused on building functional, scalable, and visually clear products.",

    skills: [

      { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "Responsive Design", "Bootstrap / Tailwind", "API consumption"] },

      { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Databases (MySQL / MongoDB)", "Authentication (JWT)", "MVC architecture"] },

      { title: "Tools", items: ["Git & GitHub", "Postman", "Docker (basic)", "VS Code", "npm / yarn", "Linux (basic)"] },

      { title: "Design", items: ["Basic UI/UX", "Figma", "Prototyping", "Responsive design", "Usability principles"] },

    ],

    testimonials: [

      { title: "Project teammate", text: "Gabriel keeps a focused and collaborative attitude. He always looks for ways to move the work forward in an organized way and help every team member contribute effectively.", note: "Collaborative work and technical support" },

      { title: "Academic review", text: "He stands out for his discipline, his drive for continuous improvement, and his ability to present well-structured solutions both technically and visually.", note: "Holistic thinking and constant improvement" },

      { title: "Simulated client", text: "His work communicates commitment and clarity. The proposals he develops feel organized, functional, and designed to solve real needs.", note: "Clarity, judgment, and functionality" },

    ],

    learningCards: [

      { title: "What I am learning", text: "I am currently strengthening my knowledge in interface design, software and computer architectures, cloud computing, and transactional data models in order to build more robust, scalable, and efficient systems.", items: ["Interface design", "Cloud computing", "Transactional data models"] },

      { title: "What I am improving", text: "I am focused on improving the quality of my code through clean code practices, as well as creating eye-catching interfaces that provide a better user experience.", items: ["Clean code", "Best practices", "Eye-catching interfaces"] },

      { title: "Where I want to grow", text: "My goal is to grow professionally until I create my own software company, developing innovative solutions and becoming a globally recognized reference in the tech industry.", items: ["Software company", "Innovative solutions", "Global recognition"] },

    ],

    contactIntro: "I am open to new opportunities, collaborations, and challenging projects; feel free to contact me if you are looking for commitment, quality, and a professional approach focused on results.",

    contactItems: [

      { title: "Email", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },

      { title: "Phone", detail: "3205681399", symbol: "+" },

      { title: "Location", detail: "Pasto, Colombia", symbol: "#" },

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

      bioText: "Backend developer passionate about creating efficient, scalable, and high-impact solutions, combining technology, creativity, and leadership to bring value to every project.",

      sectionsTitle: "Key sections",

      contactTitle: "Contact",

      copyright: "Academic portfolio by Gabriel Narvaez, 2026.",

    },

  },

};
