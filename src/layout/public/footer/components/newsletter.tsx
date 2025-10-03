// components/Newsletter.tsx

export function Newsletter() {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold md:text-3xl">
          Inscreva-se na nossa Newsletter e fique por dentro das novidades!

        </h2>
        <p className="text-white text-sm md:text-base">
          Receba novidades, promoções e conteúdos exclusivos direto no seu e-mail.
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full h-12 px-4 border border-zinc-700 bg-[#1a1a1a] text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500"

          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full h-12 px-4 border border-zinc-700 bg-[#1a1a1a] text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500"

          />
          <button
            type="button"
            className="h-12 w-full md:w-auto px-6   bg-black text-white font-semibold hover:bg-black/50 transition border border-zinc-700"
          >
            Inscrever
          </button>
        </form>
      </div>
    </section>
  );
}
