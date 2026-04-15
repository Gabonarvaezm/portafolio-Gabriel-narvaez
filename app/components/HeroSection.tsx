import { ScrollSection } from "./ScrollSection";
import type { PortfolioContent } from "../data/content";

type HeroSectionProps = {
  t: PortfolioContent;
};

export function HeroSection({ t }: HeroSectionProps) {
  return (
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

                <div className="reveal-item mt-8 flex flex-wrap gap-4">
                  <a
                    href="/CV-Gabriel%20Narvaez.pdf"
                    download="CV-Gabriel-Narvaez.pdf"
                    className="inline-flex items-center justify-center rounded-2xl border-2 border-red-400 bg-red-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_35px_rgba(220,38,38,0.35)]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
                      <path d="M12 4v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="m8.5 10.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 18.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{t.resumeLabel}</span>
                  </a>
                </div>

              </div>

            </ScrollSection>



            <ScrollSection variant="right" className="order-1 md:order-2">

              <div className="profile-card reveal-item mx-auto aspect-square max-w-lg overflow-hidden rounded-[2rem] border-2 border-gray-300 bg-gray-200 shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:rotate-[1deg] hover:shadow-[0_34px_68px_rgba(0,0,0,0.22)]">

                <img src="/image.png" alt="Foto de perfil de Gabriel Narvaez" className="h-full w-full object-cover object-[center_18%] transition duration-700 hover:scale-110" />

              </div>

            </ScrollSection>

          </div>

        </section>
  );
}
