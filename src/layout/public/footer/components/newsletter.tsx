// components/Newsletter.tsx

export function Newsletter() {
  return (
    <section className="bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">
          Inscreva-se na nossa Newsletter e fique por dentro das novidades!
        </h2>
        <p className="text-sm text-white md:text-base">
          Receba novidades, promoções e conteúdos exclusivos direto no seu e-mail.
        </p>

        <form className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Seu nome"
            className="h-12 w-full border border-zinc-700 bg-[#1a1a1a] px-4 text-white placeholder-zinc-400 focus:border-zinc-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="h-12 w-full border border-zinc-700 bg-[#1a1a1a] px-4 text-white placeholder-zinc-400 focus:border-zinc-500 focus:outline-none"
          />
          <button
            type="button"
            className="h-12 w-full border border-zinc-700 bg-black px-6 font-semibold text-white transition hover:bg-black/50 md:w-auto"
          >
            Inscrever
          </button>
        </form>
      </div>
    </section>
  );
}
