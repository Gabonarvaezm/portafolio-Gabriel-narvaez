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

      "?????????????????????????????????????????????????????????????????????",

      "??????????????????????????????????????????????????????????????????????????????????",

    ],

    aboutSpotify: {

      title: "? Spotify ?????????",

      cta: "?? Spotify",

    },

    aboutYoutube: {

      title: "YouTube",

      cta: "????",

      message: "???????????????",

    },

    valueItems: [

      { title: "??", text: "???????????????????????????????????????????????" },

      { title: "??", text: "????????????????????????????????????????????" },

      { title: "????", text: "?????????????????????????????????????????" },

    ],

    projects: [

      { title: "?????", description: "?????????????????????????????????????????????", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "???????", description: "??????????????????????????????????????????????", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "????", description: "??????????????? CRUD ???????????????????????", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "??????", description: "??????????????????????????????????????????", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "?????????????????????????????????????????????????",

    timeline: [

      { phase: "?????", title: "?????????", text: "?????????????????????????????????????????????????????", tags: ["Wireframes", "UI Architecture", "Planning"] },

      { phase: "??", title: "????????????", text: "??????????????????????????????????????????????", tags: ["React", "Node.js", "APIs"] },

      { phase: "?????", title: "?????????", text: "?????????????????????????????????????????", tags: ["Responsive", "Visual Testing", "Refactor"] },

    ],

    skillsIntro: "????????????????????????????????????????????????",

    skills: [

      { title: "??", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "?????", "Bootstrap / Tailwind", "API ??"] },

      { title: "??", items: ["Node.js", "Express.js", "REST API", "??? (MySQL / MongoDB)", "???? (JWT)", "MVC ??"] },

      { title: "??", items: ["Git & GitHub", "Postman", "Docker????", "VS Code", "npm / yarn", "Linux????"] },

      { title: "??", items: ["?? UI/UX", "Figma", "????", "?????", "?????"] },

    ],

    testimonials: [

      { title: "????", text: "Gabriel ????????????????????????????????????????", note: "?????????" },

      { title: "????", text: "?????????????????????????????????????????", note: "?????????" },

      { title: "????", text: "???????????????????????????????????????????", note: "??????????" },

    ],

    learningCards: [

      { title: "???????", text: "??????????????????????????????????????????????????????????", items: ["????", "???", "???????"] },

      { title: "???????", text: "?????????????????????????????????????????????", items: ["????", "????", "??????"] },

      { title: "????????", text: "??????????????????????????????????????????????????????????", items: ["????", "????", "????"] },

    ],

    contactIntro: "??????????????????????????????????????????????????????????",

    contactItems: [

      { title: "??", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },

      { title: "??", detail: "3205681399", symbol: "+" },

      { title: "??", detail: "????????", symbol: "#" },

    ],

    socialLabel: "??????????",

    form: {

      name: "??",

      email: "??",

      subject: "??",

      message: "??",

      namePlaceholder: "????",

      emailPlaceholder: "yourmail@example.com",

      subjectPlaceholder: "?????????",

      messagePlaceholder: "?? Gabriel????????????????",

      submit: "????",

    },

    footer: {

      bioTitle: "Gabriel Narv?ez",

      bioText: "???????????????????????????????????????????????????",

      sectionsTitle: "????",

      contactTitle: "??",

      copyright: "Gabriel Narv?ez ??????2026?",

    },

  },

  de: {

    navItems: [

      { href: "#sobre-mi", label: "Ãœber mich" },

      { href: "#proyectos", label: "Projekte" },

      { href: "#habilidades", label: "FÃ¤higkeiten" },

      { href: "#testimonios", label: "Referenzen" },

      { href: "#aprendizaje", label: "Lernen" },

      { href: "#contactos", label: "Kontakt" },

    ],

    darkLabel: "Dunkelmodus",

    lightLabel: "Hellmodus",

    languageLabel: "Sprache",

    heroBadge: "FullStack-Entwickler | Psalm 23:1",

    heroLead: "Ich bin FullStack-Webentwickler mit Führungsmentalität und kollaborativem Ansatz. Ich lege Wert auf das Wohl des Teams und entwickle effiziente sowie skalierbare Lösungen. Psalm 23:1: Der Herr ist mein Hirte; mir wird nichts mangeln.",

    sections: {

      about: "Ãœber mich",

      value: "Mein Mehrwert",

      projects: "Projekte",

      experience: "Erfahrung und Ansatz",

      skills: "FÃ¤higkeiten",

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

      "Ich zeichne mich dadurch aus, dass ich konzentriert, diszipliniert und jedem Ziel, das ich Ã¼bernehme, voll verpflichtet bin. Wenn ich mich auf ein Ziel fokussiere, arbeite ich mit Entschlossenheit und BestÃ¤ndigkeit daran, es zu erreichen, und achte dabei auf jedes Detail des Prozesses.",

      "Ich bin auÃŸerdem Singer-Songwriter und Komponist mit musikalischer Laufbahn, deren Musik bereits auf verschiedenen digitalen Plattformen verfÃ¼gbar ist. DarÃ¼ber hinaus habe ich Basketballteams in Pasto sowie Tanzgruppen an meiner Institution geleitet und damit FÃ¼hrung, Teamarbeit und kÃ¼nstlerischen Ausdruck weiter gestÃ¤rkt.",

    ],

    aboutSpotify: {

      title: "HÃ¶re dir mein KÃ¼nstlerprofil auf Spotify an",

      cta: "Spotify Ã¶ffnen",

    },

    aboutYoutube: {

      title: "YouTube",

      cta: "Video Ã¶ffnen",

      message: "Klicke hier und sieh dir meine besten Basketball-SpielzÃ¼ge an",

    },

    valueItems: [

      { title: "Disziplin", text: "Ich arbeite im Softwareentwicklungsprozess konsequent und fokussiere mich darauf, sauberen Code zu schreiben, technische Ziele zu erreichen und jedes Backend-Projekt sauber umzusetzen." },

      { title: "Ordnung", text: "Ich strukturiere Systeme und Prozesse klar und wende gute Praktiken an, die Skalierbarkeit, Wartbarkeit des Codes und Effizienz in der Teamarbeit verbessern." },

      { title: "FlÃ¼ssige Zusammenarbeit", text: "Ich passe mich EntwicklungsablÃ¤ufen leicht an, arbeite effektiv mit Teams zusammen und halte ein konstantes Tempo, das Projekte agil und organisiert voranbringt." },

    ],

    projects: [

      { title: "Verkaufs-Dashboard", description: "Administratives Dashboard zur Verfolgung von Verkaufszahlen, zentralen Kennzahlen und Leistungsvisualisierung, um Entscheidungen auf Basis klarer und nutzbarer Daten zu unterstÃ¼tzen.", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },

      { title: "Startup-Landingpage", description: "Landingpage, die darauf ausgelegt ist, ein Wertversprechen klar, modern und attraktiv zu prÃ¤sentieren, mit Fokus auf Conversion, visuelle Struktur und responsives Verhalten.", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },

      { title: "Reservierungssystem", description: "Anwendung zur Verwaltung von Reservierungen mit CRUD-Operationen, strukturierter Informationsverwaltung und einer flÃ¼ssigen Erfahrung fÃ¼r Nutzer und Administratoren.", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },

      { title: "Interaktives Portfolio", description: "PersÃ¶nliche Website zur Darstellung des professionellen Profils, der FÃ¤higkeiten und Projekte mit ansprechender OberflÃ¤che, klarer Navigation und akademischem Fokus.", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },

    ],

    timelineIntro: "Mein Arbeitsansatz basiert auf klarer Planung, disziplinierter Entwicklung und kontinuierlicher Verbesserung jeder Lieferung, um funktionale, strukturierte und skalierbare Ergebnisse zu erreichen.",

    timeline: [

      { phase: "Analyse und Planung", title: "Ich organisiere zuerst die Projektstruktur", text: "Vor der Entwicklung definiere ich Ziele, Struktur und PrioritÃ¤ten. So kann ich geordnet vorgehen, Fehler reduzieren und technische Entscheidungen klarer treffen.", tags: ["Wireframes", "UI-Architektur", "Planung"] },

      { phase: "Entwicklung", title: "Ich baue Interfaces und Logik mit praktischem Fokus", text: "Ich entwickle LÃ¶sungen mit PrioritÃ¤t auf FunktionalitÃ¤t, sauberem Code und effektiver Zusammenarbeit, damit jedes Modul klar, nÃ¼tzlich und wartbar bleibt.", tags: ["React", "Node.js", "APIs"] },

      { phase: "Ãœbergabe und Verbesserung", title: "Ich verfeinere visuelle und funktionale Details", text: "Ich Ã¼berprÃ¼fe jedes Ergebnis, um Nutzererfahrung, StabilitÃ¤t und finale PrÃ¤sentation zu optimieren und so die GesamtqualitÃ¤t des Projekts zu steigern.", tags: ["Responsive", "Visuelles Testing", "Refactor"] },

    ],

    skillsIntro: "Mein Stack kombiniert Frontend- und Backend-Entwicklung, moderne Arbeitswerkzeuge und Designgrundlagen, um funktionale, skalierbare und visuell klare Produkte zu schaffen.",

    skills: [

      { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "Responsive Design", "Bootstrap / Tailwind", "API-Anbindung"] },

      { title: "Backend", items: ["Node.js", "Express.js", "REST-APIs", "Datenbanken (MySQL / MongoDB)", "Authentifizierung (JWT)", "MVC-Architektur"] },

      { title: "Werkzeuge", items: ["Git & GitHub", "Postman", "Docker (Grundlagen)", "VS Code", "npm / yarn", "Linux (Grundlagen)"] },

      { title: "Design", items: ["UI/UX-Grundlagen", "Figma", "Prototyping", "Responsive Design", "Usability-Prinzipien"] },

    ],

    testimonials: [

      { title: "Projektpartner", text: "Gabriel arbeitet fokussiert und kollaborativ. Er sorgt dafÃ¼r, dass die Arbeit geordnet vorangeht und jedes Teammitglied bestmÃ¶glich beitragen kann.", note: "Zusammenarbeit und technische UnterstÃ¼tzung" },

      { title: "Akademische Bewertung", text: "Er Ã¼berzeugt durch Disziplin, seinen Wunsch nach kontinuierlicher Verbesserung und seine FÃ¤higkeit, technische wie visuelle LÃ¶sungen strukturiert zu prÃ¤sentieren.", note: "Ganzheitlicher Ansatz und kontinuierliche Verbesserung" },

      { title: "Simulierter Kunde", text: "Seine Arbeit vermittelt Verbindlichkeit und Klarheit. Die von ihm entwickelten VorschlÃ¤ge wirken organisiert, funktional und auf reale BedÃ¼rfnisse ausgerichtet.", note: "Klarheit, Urteilskraft und FunktionalitÃ¤t" },

    ],

    learningCards: [

      { title: "Was ich gerade lerne", text: "Derzeit vertiefe ich mein Wissen in Interface-Design, Software- und Rechnerarchitekturen, Cloud Computing und transaktionalen Datenmodellen, um robustere, skalierbarere und effizientere Systeme zu entwickeln.", items: ["Interface-Design", "Cloud Computing", "Transaktionale Datenmodelle"] },

      { title: "Was ich verbessere", text: "Ich konzentriere mich darauf, die QualitÃ¤t meines Codes durch Clean-Code-Praktiken zu verbessern und gleichzeitig an auffÃ¤lligen Interfaces zu arbeiten, die eine bessere Nutzererfahrung bieten.", items: ["Clean Code", "Gute Praktiken", "AuffÃ¤llige Interfaces"] },

      { title: "Wohin ich wachsen mÃ¶chte", text: "Mein Ziel ist es, beruflich so zu wachsen, dass ich mein eigenes Softwareunternehmen grÃ¼nden, innovative LÃ¶sungen entwickeln und weltweit als anerkannte Referenz in der Technologiebranche wahrgenommen werden kann.", items: ["Softwareunternehmen", "Innovative LÃ¶sungen", "Globale Anerkennung"] },

    ],

    contactIntro: "Ich bin offen fÃ¼r neue MÃ¶glichkeiten, Kooperationen und anspruchsvolle Projekte. Melde dich gern, wenn du Engagement, QualitÃ¤t und einen professionellen, ergebnisorientierten Ansatz suchst.",

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

      messagePlaceholder: "Hallo Gabriel, wir haben dein Portfolio gesehen und mÃ¶chten mit dir sprechen.",

      submit: "Nachricht senden",

    },

    footer: {

      bioTitle: "Gabriel NarvÃ¡ez",

      bioText: "Backend-Entwickler mit Leidenschaft fÃ¼r effiziente, skalierbare und wirkungsstarke LÃ¶sungen, der Technologie, KreativitÃ¤t und FÃ¼hrung kombiniert, um in jedem Projekt Mehrwert zu schaffen.",

      sectionsTitle: "Wichtige Bereiche",

      contactTitle: "Kontakt",

      copyright: "Akademisches Portfolio von Gabriel NarvÃ¡ez, 2026.",

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

    heroBadge: "FullStack developer | Psalm 23:1",

    heroLead: "I am a fullStack web developer with a leadership mindset and a collaborative approach. I stand out for prioritizing team wellbeing and building efficient, scalable solutions. Psalm 23:1: The Lord is my shepherd; I shall not want.",

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

