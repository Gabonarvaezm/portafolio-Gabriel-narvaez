
"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollSection } from "./components/ScrollSection";

type Language = "es" | "en" | "zh" | "de";

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

const heroLanguageOptions = [{ value: "es" as const, label: "ESP" }, { value: "en" as const, label: "ENG" }, { value: "zh" as const, label: "中文" }, { value: "de" as const, label: "DEU" }];

const projectImages = [
  "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?auto=format&fit=crop&w=1200&q=80",
];

const content: Record<Language, PortfolioContent> = {
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
    heroBadge: "Desarrollador backend | Salmos 23:1",
    heroLead: "Soy desarrollador web backend con mentalidad de liderazgo y enfoque colaborativo. Me destaco por priorizar el bienestar del equipo y construir soluciones eficientes y escalables. Salmos 23:1: El Señor es mi pastor; nada me faltará.",
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
      { href: "#sobre-mi", label: "关于我" },
      { href: "#proyectos", label: "项目" },
      { href: "#habilidades", label: "技能" },
      { href: "#testimonios", label: "评价" },
      { href: "#aprendizaje", label: "学习" },
      { href: "#contactos", label: "联系" },
    ],
    darkLabel: "深色模式",
    lightLabel: "浅色模式",
    languageLabel: "语言",
    heroBadge: "后端开发者 | 诗篇 23:1",
    heroLead: "我是后端网页开发者，具备领导思维和协作导向。我重视团队福祉，并专注于构建高效且可扩展的解决方案。Psalm 23:1: 耶和华是我的牧者，我必不致缺乏。",
    sections: {
      about: "关于我",
      value: "我的优势",
      projects: "项目",
      experience: "经验与方法",
      skills: "技能",
      testimonials: "评价",
      learning: "持续学习",
      contacts: "联系我",
    },
    stats: [
      { number: "12+", label: "掌握的技术" },
      { number: "6", label: "工作领域" },
      { number: "100%", label: "响应式专注" },
      { number: "24/7", label: "持续学习" },
    ],
    aboutParagraphs: [
      "我是一个高度专注、自律且对每个目标都非常投入的人。当我锁定一个目标时，我会以坚定与持续的努力去实现它，并认真照顾过程中的每一个细节。",
      "我也是一名创作型歌手和词曲作者，作品已上线多个数字平台。此外，我还曾在帕斯托带领篮球队和校内舞蹈团队，这些经历进一步强化了我的领导力、团队合作与艺术表达能力。",
    ],
    aboutSpotify: {
      title: "在 Spotify 上收听我的艺术家主页",
      cta: "打开 Spotify",
    },
    aboutYoutube: {
      title: "YouTube",
      cta: "打开视频",
      message: "点击查看我打篮球时最精彩的片段",
    },
    valueItems: [
      { title: "自律", text: "我在软件开发中保持稳定节奏，专注于编写干净的代码、完成技术目标，并推动每个后端项目顺利落地。" },
      { title: "条理", text: "我以清晰的方式组织系统与流程，应用良好实践来提升可扩展性、代码可维护性以及团队协作效率。" },
      { title: "流畅协作", text: "我能快速适应开发流程，与团队高效配合，并保持稳定节奏，让项目以敏捷且有序的方式持续推进。" },
    ],
    projects: [
      { title: "销售仪表盘", description: "面向销售跟踪、关键指标监控和绩效可视化的管理面板，帮助基于清晰且可执行的数据做出决策。", tags: ["React", "Charts", "Responsive UI"], image: projectImages[0] },
      { title: "创业着陆页", description: "用于清晰、现代且有吸引力地展示价值主张的着陆页，重点关注转化率、视觉结构和响应式适配。", tags: ["Vite", "Tailwind", "SEO base"], image: projectImages[1] },
      { title: "预订系统", description: "专注于预订管理的应用，包含 CRUD 操作、信息组织以及面向用户与管理员的流畅体验。", tags: ["Node.js", "MySQL", "CRUD"], image: projectImages[2] },
      { title: "交互式作品集", description: "用于展示个人简介、技能与项目的网站，具有吸引人的界面、清晰的导航和学术展示导向。", tags: ["HTML", "CSS", "UI Design"], image: projectImages[3] },
    ],
    timelineIntro: "我的工作方式建立在清晰规划、纪律性开发以及持续改进每一次交付之上，以实现功能完善、有条理且可扩展的成果。",
    timeline: [
      { phase: "分析与规划", title: "我先组织项目结构", text: "在开发之前先定义目标、结构和优先级，这让我能够更有条理地推进、减少错误，并更清晰地做出技术决策。", tags: ["Wireframes", "UI Architecture", "Planning"] },
      { phase: "开发", title: "以务实思维构建界面与逻辑", text: "我在开发解决方案时优先考虑功能性、代码整洁和高效协作，使每个模块都清晰、实用且易于维护。", tags: ["React", "Node.js", "APIs"] },
      { phase: "交付与优化", title: "打磨视觉与功能细节", text: "我会审视每一次成果，优化体验、稳定性和最终呈现，并通过细节调整提升项目整体质量。", tags: ["Responsive", "Visual Testing", "Refactor"] },
    ],
    skillsIntro: "我的技术栈结合了前端、后端、现代协作工具与设计基础，旨在打造功能完善、可扩展且视觉清晰的数字产品。",
    skills: [
      { title: "前端", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Angular", "响应式设计", "Bootstrap / Tailwind", "API 调用"] },
      { title: "后端", items: ["Node.js", "Express.js", "REST API", "数据库 (MySQL / MongoDB)", "身份验证 (JWT)", "MVC 架构"] },
      { title: "工具", items: ["Git & GitHub", "Postman", "Docker（基础）", "VS Code", "npm / yarn", "Linux（基础）"] },
      { title: "设计", items: ["基础 UI/UX", "Figma", "原型设计", "响应式设计", "可用性原则"] },
    ],
    testimonials: [
      { title: "项目伙伴", text: "Gabriel 始终保持专注且善于协作。他不仅推动工作有序前进，也会让团队中的每个人都能更好地发挥自己的价值。", note: "协作能力与技术支持" },
      { title: "学术评审", text: "他在纪律性、持续改进意识以及技术与视觉层面的结构化表达方面表现突出。", note: "整体思维与持续改进" },
      { title: "模拟客户", text: "他的作品传达出责任感与清晰度，提出的方案有组织、可落地，并面向真实需求。", note: "清晰、判断力与功能性" },
    ],
    learningCards: [
      { title: "我正在学习什么", text: "目前我正在加强界面设计、软件与计算架构、云计算以及事务型数据模型等方面的知识，目标是构建更稳健、更高可扩展性且更高效的系统。", items: ["界面设计", "云计算", "事务型数据模型"] },
      { title: "我正在提升什么", text: "我正专注于通过干净代码的良好实践提升代码质量，同时也在加强具有吸引力的界面开发，为用户带来更好的体验。", items: ["干净代码", "良好实践", "更有吸引力的界面"] },
      { title: "我希望成长到哪里", text: "我的目标是在职业发展中创建自己的软件公司，开发创新型解决方案，并成为全球技术行业中备受认可的标杆人物。", items: ["软件公司", "创新解决方案", "全球认可"] },
    ],
    contactIntro: "我愿意接受新的机会、合作与有挑战性的项目。如果你正在寻找责任感、质量与以结果为导向的专业方法，欢迎联系我。",
    contactItems: [
      { title: "邮箱", detail: "gabrielnarvaez587@gmail.com", symbol: "@" },
      { title: "电话", detail: "3205681399", symbol: "+" },
      { title: "地点", detail: "哥伦比亚帕斯托", symbol: "#" },
    ],
    socialLabel: "社交链接与专业作品集",
    form: {
      name: "姓名",
      email: "邮箱",
      subject: "主题",
      message: "消息",
      namePlaceholder: "你的名字",
      emailPlaceholder: "yourmail@example.com",
      subjectPlaceholder: "项目提案或学术联系",
      messagePlaceholder: "你好 Gabriel，我们看了你的作品集，想和你聊聊。",
      submit: "发送消息",
    },
    footer: {
      bioTitle: "Gabriel Narváez",
      bioText: "热爱后端开发，专注于打造高效、可扩展且具有高影响力的解决方案，并将技术、创造力与领导力结合到每一个项目中。",
      sectionsTitle: "主要部分",
      contactTitle: "联系",
      copyright: "Gabriel Narváez 学术作品集，2026。",
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
    heroBadge: "Backend-Entwickler | Psalm 23:1",
    heroLead: "Ich bin Backend-Webentwickler mit Führungsmentalität und kollaborativem Ansatz. Ich lege Wert auf das Wohl des Teams und entwickle effiziente sowie skalierbare Lösungen. Psalm 23:1: Der Herr ist mein Hirte; mir wird nichts mangeln.",
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
      { title: "Disziplin", text: "Ich arbeite im Softwareentwicklungsprozess konsequent und fokussiere mich darauf, sauberen Code zu schreiben, technische Ziele zu erreichen und jedes Backend-Projekt sauber umzusetzen." },
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
    heroBadge: "Backend developer | Psalm 23:1",
    heroLead: "I am a backend web developer with a leadership mindset and a collaborative approach. I stand out for prioritizing team wellbeing and building efficient, scalable solutions. Psalm 23:1: The Lord is my shepherd; I shall not want.",
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
                      { label: "GitHub", href: "https://github.com/Gabonarvaezm" },
                      { label: "LinkedIn", href: null },
                      { label: "Twitter", href: null },
                    ].map((item) => (
                      item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={item.label}
                          className="reveal-item flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-800 text-sm font-semibold transition duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                          {item.label.slice(0, 2)}
                        </a>
                      ) : (
                        <div
                          key={item.label}
                          aria-label={item.label}
                          className="reveal-item flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-800 text-sm font-semibold opacity-70 transition duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                          {item.label.slice(0, 2)}
                        </div>
                      )
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










