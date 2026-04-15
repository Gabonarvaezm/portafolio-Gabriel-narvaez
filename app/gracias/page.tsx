export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-[2rem] border-2 border-gray-300 bg-white p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-12">
        <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-[1.6rem] border border-red-200 bg-gradient-to-br from-white via-rose-50 to-red-100 text-red-600 shadow-[0_18px_38px_rgba(220,38,38,0.14)]">
          <svg viewBox="0 0 24 24" className="h-9 w-9 fill-current" aria-hidden="true">
            <path d="M9.75 21H6.6A1.6 1.6 0 0 1 5 19.4v-7.1A1.6 1.6 0 0 1 6.6 10.7h3.15V21Zm1.55 0V10.55l2.3-6.15c.15-.42.55-.7.99-.7h.26c.9 0 1.57.84 1.39 1.72l-.9 5.28h3.76c1.23 0 2.11 1.18 1.75 2.35l-1.86 6.1A2.4 2.4 0 0 1 16.7 21H11.3Z" />
          </svg>
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Mensaje enviado</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Gracias por contactarme</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Tu mensaje fue enviado correctamente. Revisare la informacion y te respondere lo antes posible.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-red-500 bg-red-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_35px_rgba(220,38,38,0.28)]"
          >
            Volver al portafolio
          </a>
        </div>
      </div>
    </main>
  );
}
