import { Header } from "./components/Header";

const stats = [
  { number: "12+", label: "Tecnologias dominadas" },
  { number: "6", label: "Areas de trabajo" },
  { number: "100%", label: "Enfoque responsive" },
  { number: "24/7", label: "Aprendizaje continuo" },
];

const valueItems = [
  {
    title: "Interfaces limpias",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere velit sed sem porta, nec efficitur lectus malesuada.",
  },
  {
    title: "Logica funcional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida eros a neque faucibus, at faucibus justo faucibus.",
  },
  {
    title: "Mejora constante",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros vel justo tristique fermentum in quis odio.",
  },
];

const projects = [
  {
    title: "Dashboard de ventas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Charts", "Responsive UI"],
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Landing para startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Vite", "Tailwind", "SEO base"],
    image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sistema de reservas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Node.js", "MySQL", "CRUD"],
    image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Portafolio interactivo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["HTML", "CSS", "UI Design"],
    image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?auto=format&fit=crop&w=1200&q=80",
  },
];

const timeline = [
  {
    phase: "Analisis y planeacion",
    title: "Organizo primero la estructura del proyecto",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lectus ac lacus dapibus, a auctor metus posuere.",
    tags: ["Wireframes", "Arquitectura UI", "Planificacion"],
  },
  {
    phase: "Desarrollo",
    title: "Construyo interfaces y logica con enfoque practico",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet lorem non dui tincidunt, sed posuere augue condimentum.",
    tags: ["React", "Node.js", "APIs"],
  },
  {
    phase: "Entrega y mejora",
    title: "Pulo detalles visuales y funcionales",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque neque et mi molestie, vel maximus lectus rutrum.",
    tags: ["Responsive", "Testing visual", "Refactor"],
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["Angular", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS", "CSS", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "MySQL", "SQLite", "Java", "Express.js"],
  },
  {
    title: "Herramientas",
    items: ["Git y GitHub", "Postman", "VS Code", "Vercel", "Trello", "Notion"],
  },
  {
    title: "Diseno",
    items: ["Figma", "Canva", "Wireframing", "Prototipado", "Diseno responsive", "Jerarquia visual"],
  },
];

const testimonials = [
  {
    title: "Compañero de proyecto",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem eu turpis vestibulum, sed tincidunt neque sodales.",
    note: "Trabajo colaborativo y apoyo tecnico",
  },
  {
    title: "Revision academica",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra augue at quam posuere, ac gravida risus porttitor.",
    note: "Enfoque integral y mejora continua",
  },
  {
    title: "Cliente simulado",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue ac ipsum luctus, sed tristique tortor hendrerit.",
    note: "Claridad, criterio y funcionalidad",
  },
];

const learningCards = [
  {
    title: "Temas que estoy fortaleciendo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nibh vel sem posuere finibus quis eu mauris.",
    items: ["Arquitectura de componentes", "Buenas practicas de backend", "Optimizacion responsive"],
  },
  {
    title: "Enfoque de crecimiento",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget arcu quis mauris maximus varius a in quam.",
    items: ["Control de versiones", "Despliegue en la nube", "Documentacion tecnica"],
  },
  {
    title: "Objetivo profesional",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue est sed mauris feugiat, id tristique nibh facilisis.",
    items: ["Aplicaciones completas", "Interfaces memorables", "Codigo mantenible"],
  },
];

const contactItems = [
  { title: "Correo", detail: "gabrielnarvaez.dev@gmail.com", symbol: "@" },
  { title: "Telefono", detail: "+57 300 000 0000", symbol: "+" },
  { title: "Ubicacion", detail: "Colombia, disponible para proyectos academicos y freelance", symbol: "#" },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
      <div className="h-1 w-20 rounded-full bg-gray-400" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 pt-16">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="order-2 md:order-1">
              <div className="rounded-[2rem] border-2 border-gray-900 bg-gray-800 p-8 text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition hover:scale-[1.02] md:p-10">
                <p className="mb-4 text-xs uppercase tracking-[0.24em] text-gray-300">Portafolio personal</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">GABRIEL NARVAEZ</h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-100 md:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, justo ut aliquet viverra, augue risus consequat erat, sed fermentum sem nibh at lorem.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="mx-auto aspect-square max-w-lg overflow-hidden rounded-[2rem] border-2 border-gray-300 bg-gray-200 shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition hover:scale-[1.03]">
                <img src="/image.png" alt="Foto de perfil de Gabriel Narvaez" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Sobre mi" />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6 text-gray-700">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat nibh in eros viverra, eu volutpat justo dignissim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tortor in risus posuere luctus a sit amet lorem.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <article key={stat.label} className="rounded-3xl border-2 border-gray-300 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                    <div className="mb-2 text-3xl font-bold text-gray-900">{stat.number}</div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="valor" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Lo que aporto" />
            <div className="grid gap-6 md:grid-cols-3">
              {valueItems.map((item) => (
                <article key={item.title} className="rounded-3xl border-2 border-gray-300 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Proyectos" />
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-3xl border-2 border-gray-300 bg-white transition hover:-translate-y-1 hover:border-gray-800 hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]">
                  <div className="aspect-video overflow-hidden border-b-2 border-gray-300 bg-gray-200">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-4 p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-gray-400 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Experiencia y enfoque" />
            <p className="mb-10 max-w-3xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="space-y-4">
              {timeline.map((item) => (
                <article key={item.phase} className="grid gap-4 rounded-3xl border-2 border-gray-300 bg-gray-50 p-6 md:grid-cols-[180px_1fr]">
                  <div className="pt-1 text-sm font-bold uppercase tracking-[0.12em] text-blue-600">{item.phase}</div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="relative overflow-hidden bg-white py-24">
          <div className="skill-orb skill-orb-1" />
          <div className="skill-orb skill-orb-2" />
          <div className="skill-orb skill-orb-3" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Habilidades" />
            <p className="mb-10 max-w-3xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((category) => (
                <article key={category.title} className="rounded-3xl border-2 border-gray-300 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">{category.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {category.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Testimonios" />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.title} className="relative rounded-3xl border-2 border-gray-300 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <div className="absolute right-5 top-4 text-6xl font-extrabold leading-none text-blue-100">"</div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                  <div className="mt-5 text-sm text-gray-500">{item.note}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="aprendizaje" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Aprendizaje continuo" />
            <div className="grid gap-6 md:grid-cols-3">
              {learningCards.map((card) => (
                <article key={card.title} className="rounded-3xl border-2 border-gray-300 bg-gray-50 p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-gray-700">{card.text}</p>
                  <ul className="mt-5 space-y-3 text-gray-700">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500" /><span>{item}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contactos" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Contactos" />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="space-y-6 text-gray-700">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 transition hover:translate-x-1">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-gray-800"><span className="text-lg text-gray-800">{item.symbol}</span></div>
                      <div className="pt-2">
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="mb-4 text-gray-700">Redes y portafolio profesional</p>
                  <div className="flex gap-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((item) => (
                      <div key={item} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border-2 border-gray-800 text-sm font-semibold transition hover:scale-110 hover:border-blue-500 hover:bg-blue-500 hover:text-white">{item.slice(0, 2)}</div>
                    ))}
                  </div>
                </div>
              </div>
              <form className="space-y-6 rounded-3xl border-2 border-gray-300 bg-white p-6 sm:p-8">
                <div>
                  <label className="mb-2 block text-sm text-gray-700">Nombre</label>
                  <input type="text" placeholder="Tu nombre" className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-700">Correo</label>
                  <input type="email" placeholder="tucorreo@ejemplo.com" className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-700">Asunto</label>
                  <input type="text" placeholder="Propuesta de proyecto o contacto academico" className="h-12 w-full rounded-2xl border-2 border-gray-300 px-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-700">Mensaje</label>
                  <textarea rows={5} placeholder="Hola Gabriel, vimos tu portafolio y queremos hablar contigo." className="w-full rounded-2xl border-2 border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <button type="button" className="h-12 w-full rounded-2xl border-2 border-gray-800 bg-gray-800 font-medium text-white transition hover:border-blue-500 hover:bg-blue-500">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-3 font-semibold">Gabriel Narvaez</h3>
              <p className="text-sm text-gray-300">Portafolio orientado a mostrar desarrollo web, diseño de interfaces y crecimiento constante como futuro profesional full stack.</p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Secciones clave</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Sobre mi</li>
                <li>Proyectos</li>
                <li>Habilidades</li>
                <li>Testimonios</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Contacto</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>gabrielnarvaez.dev@gmail.com</li>
                <li>+57 300 000 0000</li>
                <li>Colombia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">Portafolio academico de Gabriel Narvaez, 2026.</div>
        </div>
      </footer>
    </div>
  );
}
